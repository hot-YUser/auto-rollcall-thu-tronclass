"""Auto-answer monitor integration (v1.7). Driven once per monitor poll by autoanswer_tick.

Lifecycle (mirrors the QR teacher-assist prepare/submit split):
  detect open question activity -> prepare answer + CACHE (no submit) -> wait delay_seconds
  (or an any-key press) -> submit the prepared answer -> mark completed.
Activity polling is throttled; the cheap "is any prepared answer due?" check runs every tick
so the delay gate / keypress stays responsive.
"""
from __future__ import annotations
import time
from typing import Any, Dict, List, Set

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover
    import runtime_context as ctx  # type: ignore

try:
    from troTHU import answer_flow, autoanswer_store
    from troTHU.config_runtime import get_autoanswer_config
    from troTHU.quiz_engine import format_paper_canonical, normalize_text
    from troTHU.quiz_models import Activity, ActivityType
except ImportError:  # pragma: no cover - script execution fallback
    import answer_flow  # type: ignore
    import autoanswer_store  # type: ignore
    from config_runtime import get_autoanswer_config  # type: ignore
    from quiz_engine import format_paper_canonical, normalize_text  # type: ignore
    from quiz_models import Activity, ActivityType  # type: ignore


ATTEMPT_COOLDOWN_SECONDS = 30.0
POLL_INTERVAL_SECONDS = 10.0
COURSE_REFRESH_SECONDS = 300.0


def _as_int(value: Any, default: int = 0) -> int:
    try:
        return int(str(value).strip())
    except (TypeError, ValueError):
        return default

_TYPE_BY_NAME = {
    "exam": ActivityType.EXAM,
    "classroom_exam": ActivityType.CLASSROOM_EXAM,
    "courseware_quiz": ActivityType.COURSEWARE_QUIZ,
    "questionnaire": ActivityType.QUESTIONNAIRE,
    "vote": ActivityType.VOTE,
    "homework": ActivityType.HOMEWORK,
}

# Activity types that can carry an AI Quiz (courseware). The decompiled route is
# /course/:courseId/material/:activityId/aiQuiz/:quizId — i.e. material activities.
# ponytail: just "material"; widen if a live tenant shows quizzes on other courseware types.
_COURSEWARE_TYPES = ("material",)


def _already_submitted(raw: Dict[str, Any]) -> bool:
    """A per-student 'already submitted' boolean, if the list exposes one. Defensive: the
    student exam-list does NOT carry one (verified live — see _attempts_exhausted), but other
    tenants/types may, and the server anyway rejects a 2nd submit, so this is a no-op where the
    field is absent. The harm it would prevent (overwrite) does not occur — re-submits are
    server-rejected, not applied."""
    return bool(raw.get("has_submitted") or raw.get("submitted") or raw.get("is_submitted"))


def _attempts_exhausted(raw: Dict[str, Any]) -> bool:
    """No submit attempts left. The student exam-list carries per-student `submission_count`
    and the `submit_times` cap (verified live: submit_times=1 -> count 1 after one submit).
    Once used up, re-detecting on restart only wastes an LLM prepare on a submit the server
    will reject — so skip it. submit_times<=0 means unlimited."""
    cap = raw.get("submit_times")
    used = raw.get("submission_count")
    return isinstance(cap, int) and cap > 0 and isinstance(used, int) and used >= cap

_last_poll = 0.0
_courses: List[str] = []
_courses_at = 0.0
_loaded_profile: Any = None


def _active_profile_name() -> str:
    try:
        return ctx.get_active_profile(ctx.CONFIG).name
    except Exception:
        return "default"


def _ensure_persisted_loaded() -> None:
    """Load the active profile's permanently-completed activity ids into the in-memory dedup set,
    once per profile, so a restart doesn't re-answer a week-long homework. Best-effort."""
    global _loaded_profile
    profile = _active_profile_name()
    if profile == _loaded_profile:
        return
    try:
        for activity_id in autoanswer_store.load_completed(ctx.BASE_DIR, profile):
            ctx.COMPLETED_QUESTION_SUBMISSIONS.setdefault(activity_id, True)
    except Exception:
        pass
    _loaded_profile = profile


def autoanswer_enabled(config: Any = None) -> bool:
    return bool(get_autoanswer_config(config if config is not None else ctx.CONFIG).get("enabled"))


def _wanted_types(aa: Dict[str, Any]) -> Set[ActivityType]:
    return {_TYPE_BY_NAME[name] for name in (aa.get("types") or []) if name in _TYPE_BY_NAME}


def _course_ids(payload: Any) -> List[str]:
    items: Any = []
    if isinstance(payload, dict):
        items = payload.get("courses") or payload.get("items") or payload.get("data") or []
    elif isinstance(payload, list):
        items = payload
    out: List[str] = []
    for item in items if isinstance(items, list) else []:
        if isinstance(item, dict):
            cid = normalize_text(item.get("id") or item.get("course_id") or item.get("courseId"))
            if cid and cid not in out:
                out.append(cid)
    return out


async def _refresh_courses(client: Any, now: float) -> List[str]:
    global _courses, _courses_at
    if _courses and now - _courses_at < COURSE_REFRESH_SECONDS:
        return _courses
    try:
        payload = await client.fetch_my_courses()
    except Exception:
        return _courses
    _courses = _course_ids(payload)
    _courses_at = now
    return _courses


async def _get(client: Any, path: str) -> Any:
    try:
        return await client.request_json("GET", client.api_url(path))
    except ctx.TronHttpError:
        return {}


def _activity(course_id: str, atype: ActivityType, raw: Dict[str, Any], title_key: str = "title") -> Activity:
    return Activity(activity_id=normalize_text(raw.get("id")), activity_type=atype,
                    course_id=course_id, title=normalize_text(raw.get(title_key)), raw=raw)


async def _poll_course(client: Any, course_id: str, wanted: Set[ActivityType]) -> List[Activity]:
    """Open (in-progress) question activities in a course, per requested type."""
    out: List[Activity] = []

    if ActivityType.EXAM in wanted:
        body = await _get(client, "/api/courses/{}/exam-list?conditions=&page=1&page_size=50".format(course_id))
        for e in (body.get("exams") if isinstance(body, dict) else None) or []:
            if isinstance(e, dict) and e.get("is_started") and not e.get("is_closed") \
                    and not _already_submitted(e) and not _attempts_exhausted(e):
                out.append(_activity(course_id, ActivityType.EXAM, e))

    if ActivityType.QUESTIONNAIRE in wanted:
        body = await _get(client, "/api/courses/{}/questionnaire-list".format(course_id))
        for q in (body.get("questionnaires") if isinstance(body, dict) else None) or []:
            if isinstance(q, dict) and q.get("is_started") and not q.get("is_closed") \
                    and not _already_submitted(q):
                out.append(_activity(course_id, ActivityType.QUESTIONNAIRE, q))

    if ActivityType.HOMEWORK in wanted:
        body = await _get(client, "/api/courses/{}/homework-activities".format(course_id))
        for h in (body.get("homework_activities") if isinstance(body, dict) else None) or []:
            if isinstance(h, dict) and not h.get("is_closed") and not _already_submitted(h):
                out.append(_activity(course_id, ActivityType.HOMEWORK, h))

    if ActivityType.VOTE in wanted:
        body = await _get(client, "/api/courses/{}/interactions".format(course_id))
        for i in (body.get("interactions") if isinstance(body, dict) else None) or []:
            if isinstance(i, dict) and normalize_text(i.get("type")) == "vote" \
                    and normalize_text(i.get("status")) == "start":
                out.append(_activity(course_id, ActivityType.VOTE, i))

    if ActivityType.CLASSROOM_EXAM in wanted:
        body = await _get(client, "/api/courses/{}/classroom-list".format(course_id))
        items = body.get("classrooms") if isinstance(body, dict) else (body if isinstance(body, list) else None)
        for c in items or []:
            # status is only none/start/finish; "start" is necessary but NOT sufficient — it stays
            # "start" through 開始/停止收答. The real "answering is open / submittable" gate is
            # started_subjects_count >= 1 (drops to 0 when collection closes, yet status stays
            # "start" → submit then 400「考試未開始」). Verified live on 55379 — this is the root fix.
            if isinstance(c, dict) and normalize_text(c.get("status")) == "start" \
                    and _as_int(c.get("started_subjects_count")) >= 1:
                out.append(_activity(course_id, ActivityType.CLASSROOM_EXAM, c))

    if ActivityType.COURSEWARE_QUIZ in wanted:
        await _poll_courseware(client, course_id, out)
    return out


async def _poll_courseware(client: Any, course_id: str, out: List[Activity]) -> None:
    """AI-Quiz (courseware) detection: course material activity -> its quiz id(s).

    Contract from the decompiled endpoint registry (activity/{id}/quizzes ->
    quiz/{id}/subjects + /submissions + /my-submission). UN-LIVE-VALIDATED on this tenant —
    the AI-Quiz module is not provisioned (all endpoints 404) — so it is wired to the contract
    and offline-tested only. ponytail: probes quizzes per material activity; the COURSE_REFRESH
    throttle bounds it — cache activity->quiz if a course ever carries many materials."""
    body = await _get(client, "/api/courses/{}/activities?page=1&page_size=200".format(course_id))
    activities = body.get("activities") if isinstance(body, dict) else (body if isinstance(body, list) else None)
    for act in activities or []:
        if not isinstance(act, dict) or normalize_text(act.get("type")) not in _COURSEWARE_TYPES:
            continue
        aid = normalize_text(act.get("id"))
        if not aid:
            continue
        quizzes = await _get(client, "/api/courseware-quiz/activity/{}/quizzes".format(aid))
        items = quizzes.get("quizzes") if isinstance(quizzes, dict) else (quizzes if isinstance(quizzes, list) else None)
        for quiz in items or []:
            if not isinstance(quiz, dict):
                continue
            qid = normalize_text(quiz.get("id"))
            if not qid or quiz.get("is_closed") or quiz.get("is_started") is False:
                continue
            mine = await _get(client, "/api/courseware-quiz/quiz/{}/my-submission".format(qid))
            if mine:  # already submitted (empty/{} when not) — don't overwrite
                continue
            out.append(Activity(activity_id=qid, activity_type=ActivityType.COURSEWARE_QUIZ,
                                course_id=course_id,
                                title=normalize_text(quiz.get("title") or act.get("title")), raw=quiz))


async def _prepare(client: Any, session: Any, activity: Activity, aa: Dict[str, Any], now: float) -> None:
    key = activity.activity_id
    if not key or ctx.COMPLETED_QUESTION_SUBMISSIONS.get(key) or key in ctx.ACTIVE_QUESTION_ANSWERS:
        return
    if now - float(ctx.QUESTION_ANSWER_ATTEMPTS.get(key, 0.0) or 0.0) < ATTEMPT_COOLDOWN_SECONDS:
        return
    ctx.QUESTION_ANSWER_ATTEMPTS[key] = now
    delay = int(aa.get("delay_seconds", 15) or 0)
    label = activity.title or activity.activity_type.value
    # Prepare FIRST (this may call the LLM). We announce only once we actually HAVE a usable answer,
    # so a transient LLM/key/model failure (e.g. the model returning empty) stays quiet on the
    # console (file-log only) and is retried next poll — never announced-then-stalled, never an
    # empty submit. prepare_answer returns None for both "no questions" and "no usable answer yet".
    prepared = await answer_flow.prepare_answer(client, session, activity, llm_config=aa.get("llm", {}))
    if not prepared:
        ctx.log(event="autoanswer", status="not_prepared",
                message="「{}」尚無可送出的答案，稍後重試。".format(label), extra={"activity_id": key})
        return
    prepared["detected_at"] = now
    prepared["delay_seconds"] = delay
    prepared["label"] = label
    ctx.ACTIVE_QUESTION_ANSWERS[key] = prepared
    source = getattr(prepared.get("source"), "value", prepared.get("source"))
    answer_text = format_paper_canonical(prepared.get("questions") or [], prepared.get("answers") or [])
    # Announce detection + the prepared answer together (canonical LLM format), then start the countdown.
    ctx.log_print("偵測到「{}」並已備妥答案（{}），{} 秒後自動送出（按任意鍵立即送）：\n{}".format(
        label, source, delay, answer_text))
    ctx.log(event="autoanswer", status="prepared", message="已備妥答案，等待送出。",
            extra={"activity_id": key, "source": str(prepared.get("source"))})


async def _submit_due(client: Any, aa: Dict[str, Any], now: float) -> None:
    submit_now = bool(ctx.AUTOANSWER_SUBMIT_NOW)
    if submit_now:
        ctx.AUTOANSWER_SUBMIT_NOW = False
    resubmit = bool(aa.get("resubmit_for_correct", True))
    for key, prepared in list(ctx.ACTIVE_QUESTION_ANSWERS.items()):
        if not isinstance(prepared, dict) or prepared.get("submitted"):
            continue
        elapsed = now - float(prepared.get("detected_at", now) or now)
        if not submit_now and elapsed < float(prepared.get("delay_seconds", 15) or 0):
            continue
        result = await answer_flow.submit_prepared(client, prepared, resubmit_for_correct=resubmit)
        ctx.ACTIVE_QUESTION_ANSWERS.pop(key, None)
        label = prepared.get("label") or key
        if result.ok:
            ctx.COMPLETED_QUESTION_SUBMISSIONS[key] = True
            try:  # persist permanently so a restart never re-answers it
                autoanswer_store.mark_completed(ctx.BASE_DIR, _active_profile_name(), key)
            except Exception:
                pass
            source = getattr(result.source, "value", result.source)
            final = result.final_answers or prepared.get("answers") or []
            answer_text = format_paper_canonical(prepared.get("questions") or [], final)
            atype = getattr(prepared.get("activity"), "activity_type", "")
            atype_text = getattr(atype, "value", atype)
            # Same banner style as 點名成功, showing the FINAL submitted answer in canonical format.
            ctx.log_print(ctx.format_autoanswer_success_banner(label, key, atype_text, source, answer_text))
            ctx.log(event="autoanswer", status="submitted", message="已自動作答完成。",
                    extra={"activity_id": key, "submission_id": str(result.submission_id), "source": str(source)})
        else:
            # No band-aid backoff: the root fix (detection now requires an open answering window)
            # means an un-submittable activity is never detected, so there is nothing to churn on.
            # A genuine transient failure just retries at the normal cooldown.
            ctx.log(event="autoanswer", status=result.status, message="自動作答失敗。",
                    extra={"activity_id": key})


async def autoanswer_tick(session: Any) -> None:
    """Called once per monitor poll. Never raises into the rollcall loop."""
    try:
        aa = get_autoanswer_config(ctx.CONFIG)
        if not aa.get("enabled"):
            return
        _ensure_persisted_loaded()
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        now = ctx.time.monotonic() if hasattr(ctx, "time") else time.monotonic()
        await _submit_due(client, aa, now)

        global _last_poll
        if now - _last_poll < POLL_INTERVAL_SECONDS:
            return
        _last_poll = now
        wanted = _wanted_types(aa)
        if not wanted:
            return
        for course_id in await _refresh_courses(client, now):
            for activity in await _poll_course(client, course_id, wanted):
                await _prepare(client, session, activity, aa, now)
    except Exception as exc:  # autoanswer must never break the monitor loop
        ctx.log(event="autoanswer", status="tick_error", message="自動答題輪詢發生未預期錯誤。", error=exc)

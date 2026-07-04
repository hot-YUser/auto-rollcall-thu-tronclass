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
MAX_ATTEMPT_COOLDOWN_SECONDS = 600.0   # failure backoff cap: an un-answerable activity retries at most ~10 min
POLL_INTERVAL_SECONDS = 10.0
COURSE_REFRESH_SECONDS = 300.0
PREPARE_TIMEOUT_SECONDS = 180.0        # generous cap so a stuck (no-timeout) LLM eventually releases the task
_MAX_INFLIGHT_ACTIVITIES = 5           # bound concurrent answer handlers (LLM calls)

# activity_id -> the fire-and-forget handler Task currently answering it (dispatch dedup).
_INFLIGHT_ACTIVITIES: Dict[str, Any] = {}
_DETECT_ANNOUNCED: Set[str] = set()    # activity ids already announced "偵測到…" — print ONCE, not each retry
_FAILED_ATTEMPTS: Dict[str, int] = {}  # activity id -> consecutive prepare/submit failures (exponential backoff)


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


# Votes are one-shot per user (the server rejects a re-cast with 400 "you have already voted").
# The vote LIST (/api/courses/{id}/interactions) carries NO per-user flag, so a vote the student
# already cast keeps being re-detected -> re-prepared (LLM) -> re-submitted -> 400 -> churn (the
# real cause of the "monitor frozen" report). The /api/votes/{id} DETAIL exposes voters via
# students[].user_no; skip votes the current account already appears in. Cached so a known-voted
# vote is not re-fetched every poll.
_VOTED_CACHE: Set[str] = set()


def _current_user_no() -> str:
    try:
        return normalize_text(ctx.get_active_profile(ctx.CONFIG).user).lower()
    except Exception:
        return ""


def _vote_already_cast(detail: Any, my_user_no: str) -> bool:
    if not my_user_no or not isinstance(detail, dict):
        return False
    for student in detail.get("students") or []:
        if isinstance(student, dict) and normalize_text(student.get("user_no")).lower() == my_user_no:
            return True
    return False


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
        my_user_no = _current_user_no()
        body = await _get(client, "/api/courses/{}/interactions".format(course_id))
        for i in (body.get("interactions") if isinstance(body, dict) else None) or []:
            if not (isinstance(i, dict) and normalize_text(i.get("type")) == "vote"
                    and normalize_text(i.get("status")) == "start"):
                continue
            vid = normalize_text(i.get("id"))
            if vid and vid in _VOTED_CACHE:
                continue
            # The LIST has no per-user voted flag; the detail exposes who voted -> skip if it's us.
            detail = await _get(client, "/api/votes/{}".format(vid)) if vid else None
            if _vote_already_cast(detail, my_user_no):
                if vid:
                    _VOTED_CACHE.add(vid)
                continue
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


def reset_autoanswer_dispatch() -> None:
    """Forget stale in-flight handlers. Called by app_main per run: a crash+restart makes a NEW
    event loop, so Tasks from the previous loop are dead and their ids must not block re-dispatch."""
    _INFLIGHT_ACTIVITIES.clear()
    _DETECT_ANNOUNCED.clear()
    _FAILED_ATTEMPTS.clear()


async def handle_activity(session: Any, activity: Activity, aa: Dict[str, Any]) -> None:
    """One activity's full lifecycle, run as an independent background task so it NEVER blocks the
    monitor poll loop and many activities proceed in parallel:
      announce-DETECT immediately -> prepare the answer (LLM; timed out) -> announce-READY ->
      count down `delay_seconds` (any-key cuts it short for all pending) -> submit -> banner.
    Effective submit time = max(prepare_time, delay). Never raises.
    """
    key = activity.activity_id
    succeeded = False
    try:
        delay = int(aa.get("delay_seconds", 15) or 0)
        label = activity.title or activity.activity_type.value
        if key not in _DETECT_ANNOUNCED:  # announce ONCE per activity — retries stay silent (no 刷屏)
            _DETECT_ANNOUNCED.add(key)
            ctx.log_print("偵測到「{}」，準備答案中…".format(label))
        started = ctx.time.monotonic()
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        try:
            prepared = await ctx.asyncio.wait_for(
                answer_flow.prepare_answer(client, session, activity, llm_config=aa.get("llm", {})),
                timeout=PREPARE_TIMEOUT_SECONDS)
        except Exception:
            return  # LLM stuck/failed / no usable answer -> release (retried at the 30s cooldown)
        if not prepared:
            return
        prepared["detected_at"] = started
        prepared["delay_seconds"] = delay
        prepared["label"] = label
        ctx.ACTIVE_QUESTION_ANSWERS[key] = prepared  # keeps autoanswer_has_pending() + restart dedup working
        source = getattr(prepared.get("source"), "value", prepared.get("source"))
        answer_text = format_paper_canonical(prepared.get("questions") or [], prepared.get("answers") or [])
        ctx.log_print("「{}」已備妥答案（{}），{} 秒後自動送出（按任意鍵立即送）：\n{}".format(
            label, source, delay, answer_text))  # announce READY once the answer exists
        # Count the REMAINING delay (prepare already ran concurrently with the clock) -> submit at
        # max(prepare, delay); an any-key press sets the shared Event and cuts every countdown short.
        remaining = max(0.0, float(delay) - (ctx.time.monotonic() - started))
        event = ctx.AUTOANSWER_SUBMIT_NOW
        if remaining > 0:
            if event is not None:
                try:
                    await ctx.asyncio.wait_for(event.wait(), timeout=remaining)
                except Exception:
                    pass
            else:
                await ctx.asyncio.sleep(remaining)
        result = await answer_flow.submit_prepared(client, prepared, resubmit_for_correct=bool(aa.get("resubmit_for_correct", True)))
        prepared["submitted"] = True
        if result.ok:
            succeeded = True
            ctx.COMPLETED_QUESTION_SUBMISSIONS[key] = True
            try:  # persist permanently so a restart never re-answers it
                autoanswer_store.mark_completed(ctx.BASE_DIR, _active_profile_name(), key)
            except Exception:
                pass
            rsource = getattr(result.source, "value", result.source)
            final = result.final_answers or prepared.get("answers") or []
            final_text = format_paper_canonical(prepared.get("questions") or [], final)
            atype = getattr(prepared.get("activity"), "activity_type", "")
            atype_text = getattr(atype, "value", atype)
            ctx.log_print(ctx.format_autoanswer_success_banner(label, key, atype_text, rsource, final_text))
        # else: failed -> file-log only; retried at the 30s cooldown (per-user: no submit-side backoff)
    except Exception:
        return
    finally:
        ctx.ACTIVE_QUESTION_ANSWERS.pop(key, None)
        _INFLIGHT_ACTIVITIES.pop(key, None)
        if succeeded:
            _FAILED_ATTEMPTS.pop(key, None)
        else:  # prepare/submit failed -> back off so an un-answerable activity stops hammering the LLM
            _FAILED_ATTEMPTS[key] = _FAILED_ATTEMPTS.get(key, 0) + 1


def _dispatch_activity(session: Any, activity: Activity, aa: Dict[str, Any]) -> None:
    """Spawn handle_activity as a background task unless this activity is already being handled /
    completed / on cooldown / at the concurrency cap. Synchronous check->create_task->register
    (no await between) so a second poll cannot double-dispatch the same id."""
    key = activity.activity_id
    if not key or key in _INFLIGHT_ACTIVITIES or ctx.COMPLETED_QUESTION_SUBMISSIONS.get(key) \
            or key in ctx.ACTIVE_QUESTION_ANSWERS or len(_INFLIGHT_ACTIVITIES) >= _MAX_INFLIGHT_ACTIVITIES:
        return
    now = ctx.time.monotonic()
    # Retry cooldown grows with consecutive failures (30s, 60, 120, … capped) so an activity the LLM
    # can't answer backs off instead of re-attempting — and re-announcing — every 30s forever.
    cooldown = min(ATTEMPT_COOLDOWN_SECONDS * (2 ** _FAILED_ATTEMPTS.get(key, 0)), MAX_ATTEMPT_COOLDOWN_SECONDS)
    if now - float(ctx.QUESTION_ANSWER_ATTEMPTS.get(key, 0.0) or 0.0) < cooldown:
        return
    ctx.QUESTION_ANSWER_ATTEMPTS[key] = now
    task = ctx.asyncio.create_task(handle_activity(session, activity, aa))
    _INFLIGHT_ACTIVITIES[key] = task
    task.add_done_callback(lambda _t: _INFLIGHT_ACTIVITIES.pop(key, None))


async def autoanswer_tick(session: Any) -> None:
    """Called once per monitor poll. Polls for open activities and DISPATCHES each to a background
    handler task — it does NOT prepare/submit inline, so it returns fast and NEVER blocks the
    rollcall poll loop (the v1.8-alpha.2 starvation cause). Never raises."""
    try:
        aa = get_autoanswer_config(ctx.CONFIG)
        if not aa.get("enabled"):
            return
        _ensure_persisted_loaded()
        # Edge-triggered clear: once every pending answer has been submitted, reset the any-key signal.
        event = ctx.AUTOANSWER_SUBMIT_NOW
        if event is not None and event.is_set() and not ctx.autoanswer_has_pending():
            event.clear()
        global _last_poll
        now = ctx.time.monotonic() if hasattr(ctx, "time") else time.monotonic()
        if now - _last_poll < POLL_INTERVAL_SECONDS:
            return
        _last_poll = now
        wanted = _wanted_types(aa)
        if not wanted:
            return
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        for course_id in await _refresh_courses(client, now):
            for activity in await _poll_course(client, course_id, wanted):
                _dispatch_activity(session, activity, aa)
    except Exception:  # autoanswer must never break the monitor loop
        pass

"""Auto-answer monitor integration (v1.7). Driven once per monitor poll by autoanswer_tick.

Lifecycle (mirrors the QR teacher-assist prepare/submit split):
  detect open question activity -> prepare answer + CACHE (no submit) -> wait delay_seconds
  (or an any-key press) -> submit the prepared answer -> mark completed.
Activity polling is throttled; the cheap "is any prepared answer due?" check runs every tick
so the delay gate / keypress stays responsive.
"""
from __future__ import annotations
import datetime
import time
from typing import Any, Dict, List, Set

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover
    import runtime_context as ctx  # type: ignore

try:
    from troTHU import answer_flow, autoanswer_store
    from troTHU.config_runtime import get_autoanswer_config
    from troTHU.llm_answerer import last_llm_error, resolve_api_key
    from troTHU.quiz_engine import format_paper_canonical, normalize_text
    from troTHU.quiz_models import Activity, ActivityType
except ImportError:  # pragma: no cover - script execution fallback
    import answer_flow  # type: ignore
    import autoanswer_store  # type: ignore
    from config_runtime import get_autoanswer_config  # type: ignore
    from llm_answerer import last_llm_error, resolve_api_key  # type: ignore
    from quiz_engine import format_paper_canonical, normalize_text  # type: ignore
    from quiz_models import Activity, ActivityType  # type: ignore


ATTEMPT_COOLDOWN_SECONDS = 30.0
MAX_ATTEMPT_COOLDOWN_SECONDS = 600.0   # failure backoff cap: an un-answerable activity retries at most ~10 min
POLL_INTERVAL_SECONDS = 10.0
COURSE_REFRESH_SECONDS = 300.0
PREPARE_TIMEOUT_SECONDS = 180.0        # generous cap so a stuck (no-timeout) LLM eventually releases the task
_MAX_INFLIGHT_ACTIVITIES = 5           # bound concurrent answer handlers (LLM calls)

# provider/profile/activity -> the fire-and-forget handler Task currently answering it.
_INFLIGHT_ACTIVITIES: Dict[str, Any] = {}
_DETECT_ANNOUNCED: Set[str] = set()
_FAILED_ATTEMPTS: Dict[str, int] = {}
_PREPARE_UNREADY_ANNOUNCED: Set[str] = set()


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


def _iso_before_now(value: str) -> bool:
    """True if an ISO-8601 UTC timestamp ('…Z') is strictly in the past. Blank/unparseable -> False
    (never skip on a field we can't read)."""
    text = normalize_text(value)
    if not text:
        return False
    try:
        dt = datetime.datetime.fromisoformat(text.replace("Z", "+00:00"))
    except ValueError:
        return False
    if dt.tzinfo is None:
        dt = dt.replace(tzinfo=datetime.timezone.utc)
    return dt < datetime.datetime.now(datetime.timezone.utc)


def _exam_open(e: Dict[str, Any]) -> bool:
    """An exam that is answerable RIGHT NOW. Prefer the server's computed `is_in_progress`; also reject
    a passed `end_time` — a time-expired exam still reports `is_closed=False` yet 400s ('測驗已關閉') on
    /distribute, which used to be detected and churn forever. Filtering it here stops the churn at the
    source (從一開始就不偵測). Tenants without `is_in_progress` fall back to the raw flags + end_time."""
    if not e.get("is_started") or e.get("is_closed"):
        return False
    if e.get("is_in_progress") is False:
        return False
    return not _iso_before_now(e.get("end_time"))


# Votes are one-shot per user (the server rejects a re-cast with 400 "you have already voted").
# The vote LIST (/api/courses/{id}/interactions) carries NO per-user flag, so a vote the student
# already cast keeps being re-detected -> re-prepared (LLM) -> re-submitted -> 400 -> churn (the
# real cause of the "monitor frozen" report). The /api/votes/{id} DETAIL exposes voters via
# students[].user_no; skip votes the current account already appears in. Cached so a known-voted
# vote is not re-fetched every poll.
_VOTED_CACHE: Set[str] = set()


def _active_profile_name() -> str:
    try:
        return ctx.get_active_profile(ctx.CONFIG).name
    except Exception:
        return "default"


def _active_user_no() -> str:
    try:
        return normalize_text(ctx.get_active_profile(ctx.CONFIG).user)
    except Exception:
        return ""


def _activity_scope(
    *,
    profile_name: str = "",
    provider_key: str = "",
) -> tuple[str, str, str]:
    profile = ctx.normalize_profile_name(profile_name) if profile_name else _active_profile_name()
    provider = normalize_text(provider_key) or ctx.get_active_provider_key()
    return provider, profile, "{}:{}".format(provider, profile)


def activity_runtime_key(
    activity_id: Any,
    *,
    profile_name: str = "",
    provider_key: str = "",
) -> str:
    provider, profile, _scope = _activity_scope(
        profile_name=profile_name,
        provider_key=provider_key,
    )
    return ctx.rollcall_completion_key(
        activity_id,
        profile_name=profile,
        provider_key=provider,
    )


def _vote_runtime_key(
    vote_id: Any,
    *,
    profile_name: str = "",
    provider_key: str = "",
) -> str:
    return activity_runtime_key(
        vote_id,
        profile_name=profile_name,
        provider_key=provider_key,
    )


def _current_user_no(explicit: str = "") -> str:
    return (normalize_text(explicit) or _active_user_no()).lower()


def _vote_already_cast(detail: Any, my_user_no: str) -> bool:
    if not my_user_no or not isinstance(detail, dict):
        return False
    for student in detail.get("students") or []:
        if isinstance(student, dict) and normalize_text(student.get("user_no")).lower() == my_user_no:
            return True
    return False


_LAST_POLL_BY_SCOPE: Dict[str, float] = {}
_COURSE_CACHE: Dict[str, Any] = {}
_LOADED_SCOPES: Set[str] = set()


def _ensure_persisted_loaded(*, profile_name: str = "", provider_key: str = "") -> None:
    """Load completed ids into the matching provider/profile namespace exactly once."""
    provider, profile, scope = _activity_scope(
        profile_name=profile_name,
        provider_key=provider_key,
    )
    if scope in _LOADED_SCOPES:
        return
    try:
        for activity_id in autoanswer_store.load_completed(ctx.BASE_DIR, profile):
            key = activity_runtime_key(
                activity_id,
                profile_name=profile,
                provider_key=provider,
            )
            ctx.COMPLETED_QUESTION_SUBMISSIONS.setdefault(key, True)
    except Exception:
        pass
    _LOADED_SCOPES.add(scope)


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


async def _refresh_courses(client: Any, now: float, scope: str) -> List[str]:
    cached = _COURSE_CACHE.get(scope)
    if isinstance(cached, tuple) and len(cached) == 2:
        courses, cached_at = cached
        if courses and now - float(cached_at) < COURSE_REFRESH_SECONDS:
            return list(courses)
    fallback = list(cached[0]) if isinstance(cached, tuple) and cached else []
    try:
        payload = await client.fetch_my_courses()
    except Exception:
        return fallback
    courses = _course_ids(payload)
    _COURSE_CACHE[scope] = (courses, now)
    return courses


async def _get(client: Any, path: str) -> Any:
    try:
        return await client.request_json("GET", client.api_url(path))
    except ctx.TronHttpError:
        return {}


def _activity(course_id: str, atype: ActivityType, raw: Dict[str, Any], title_key: str = "title") -> Activity:
    return Activity(activity_id=normalize_text(raw.get("id")), activity_type=atype,
                    course_id=course_id, title=normalize_text(raw.get(title_key)), raw=raw)


async def _poll_course(
    client: Any,
    course_id: str,
    wanted: Set[ActivityType],
    *,
    profile_name: str = "",
    user_no: str = "",
    provider_key: str = "",
) -> List[Activity]:
    """Open (in-progress) question activities in a course, per requested type."""
    out: List[Activity] = []

    if ActivityType.EXAM in wanted:
        body = await _get(client, "/api/courses/{}/exam-list?conditions=&page=1&page_size=50".format(course_id))
        for e in (body.get("exams") if isinstance(body, dict) else None) or []:
            if isinstance(e, dict) and _exam_open(e) \
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
        my_user_no = _current_user_no(user_no)
        body = await _get(client, "/api/courses/{}/interactions".format(course_id))
        for i in (body.get("interactions") if isinstance(body, dict) else None) or []:
            if not (isinstance(i, dict) and normalize_text(i.get("type")) == "vote"
                    and normalize_text(i.get("status")) == "start"):
                continue
            vid = normalize_text(i.get("id"))
            vote_key = _vote_runtime_key(
                vid,
                profile_name=profile_name,
                provider_key=provider_key,
            ) if vid else ""
            if vote_key and vote_key in _VOTED_CACHE:
                continue
            # The LIST has no per-user voted flag; the detail exposes who voted -> skip if it's us.
            detail = await _get(client, "/api/votes/{}".format(vid)) if vid else None
            if _vote_already_cast(detail, my_user_no):
                if vote_key:
                    _VOTED_CACHE.add(vote_key)
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
    """Drop every loop-bound/transient cache before a fresh monitor run."""
    _INFLIGHT_ACTIVITIES.clear()
    _DETECT_ANNOUNCED.clear()
    _FAILED_ATTEMPTS.clear()
    _PREPARE_UNREADY_ANNOUNCED.clear()
    _VOTED_CACHE.clear()
    _LAST_POLL_BY_SCOPE.clear()
    _COURSE_CACHE.clear()
    _LOADED_SCOPES.clear()
    ctx.ACTIVE_QUESTION_ANSWERS.clear()
    ctx.QUESTION_ANSWER_ATTEMPTS.clear()


def _announce_prepare_unready(key: str, label: str, aa: Dict[str, Any]) -> None:
    """Tell the user ONCE why an already-announced ("準備答案中…") activity didn't submit — otherwise
    the line just freezes at 準備答案中 with no feedback (every retry is silent). The common, fixable
    case is a missing LLM key, so name it explicitly and point at the exact config knob."""
    if key in _PREPARE_UNREADY_ANNOUNCED:
        return
    _PREPARE_UNREADY_ANNOUNCED.add(key)
    if not resolve_api_key(aa.get("llm", {})):  # defensive: handle_activity already skips no-key at detect
        ctx.log_print("「{}」尚未配置 LLM，跳過答題".format(label))
        return
    reason = last_llm_error() or "LLM 無回應或題目無法解析"  # the specific reason from llm_answerer
    ctx.log_print("「{}」暫時無法備妥完整答案：{}，不送出、稍後自動重試。".format(label, reason))


async def handle_activity(
    session: Any,
    activity: Activity,
    aa: Dict[str, Any],
    *,
    runtime_key: str = "",
    profile_name: str = "",
    provider_key: str = "",
) -> None:
    """One activity's full lifecycle, run as an independent background task so it NEVER blocks the
    monitor poll loop and many activities proceed in parallel:
      announce-DETECT immediately -> prepare the answer (LLM; timed out) -> announce-READY ->
      count down `delay_seconds` (any-key cuts it short for all pending) -> submit -> banner.
    Effective submit time = max(prepare_time, delay). Never raises.
    """
    activity_id = activity.activity_id
    provider, profile, _scope = _activity_scope(
        profile_name=profile_name,
        provider_key=provider_key,
    )
    key = runtime_key or activity_runtime_key(
        activity_id,
        profile_name=profile,
        provider_key=provider,
    )
    succeeded = False
    try:
        delay = int(aa.get("delay_seconds", 15) or 0)
        label = activity.title or activity.activity_type.value
        if not resolve_api_key(aa.get("llm", {})):  # no LLM key -> skip this activity entirely
            if key not in _DETECT_ANNOUNCED:         # announce ONCE, then silent (no 刷屏)
                _DETECT_ANNOUNCED.add(key)
                ctx.log_print("偵測到「{}」，尚未配置 LLM，跳過答題".format(label))
            return
        if key not in _DETECT_ANNOUNCED:  # announce ONCE per activity — retries stay silent (no 刷屏)
            _DETECT_ANNOUNCED.add(key)
            # The countdown starts HERE (detect), so "N 秒後自動送出" belongs on THIS line — not the READY
            # line below (by then prepare has eaten part of it). No 按任意鍵 hint yet: any-key only submits
            # once an answer is prepared (autoanswer_has_pending); before that a keypress opens notepad.
            ctx.log_print("偵測到「{}」，準備答案中…（{} 秒後自動送出）".format(label, delay))
        started = ctx.time.monotonic()
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        try:
            prepared = await ctx.asyncio.wait_for(
                answer_flow.prepare_answer(client, session, activity, llm_config=aa.get("llm", {})),
                timeout=PREPARE_TIMEOUT_SECONDS)
        except Exception:
            _announce_prepare_unready(key, label, aa)  # LLM stuck/timed out -> say so once, retry at cooldown
            return
        if not prepared:
            _announce_prepare_unready(key, label, aa)  # no usable answer (often: no LLM key) -> say so once
            return
        prepared["detected_at"] = started
        prepared["delay_seconds"] = delay
        prepared["label"] = label
        ctx.ACTIVE_QUESTION_ANSWERS[key] = prepared  # keeps autoanswer_has_pending() + restart dedup working
        # Countdown runs from DETECT (started); prepare already ate part of `delay`, so announce the REAL
        # remaining seconds. An any-key press sets the shared Event and cuts every countdown short.
        remaining = max(0.0, float(delay) - (ctx.time.monotonic() - started))
        if remaining >= 1.0:  # <1s left -> answer is about to fire anyway; skip the READY line (no 刷屏)
            source = getattr(prepared.get("source"), "value", prepared.get("source"))
            answer_text = format_paper_canonical(prepared.get("questions") or [], prepared.get("answers") or [])
            ctx.log_print("「{}」已備妥答案（{}），還剩 {} 秒（按任意鍵立即送）：\n{}".format(
                label, source, int(remaining), answer_text))  # announce READY with the true remaining
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
                autoanswer_store.mark_completed(ctx.BASE_DIR, profile, activity_id)
            except Exception:
                pass
            rsource = getattr(result.source, "value", result.source)
            final = result.final_answers or prepared.get("answers") or []
            final_text = format_paper_canonical(prepared.get("questions") or [], final)
            atype = getattr(prepared.get("activity"), "activity_type", "")
            atype_text = getattr(atype, "value", atype)
            ctx.log_print(ctx.format_autoanswer_success_banner(label, activity_id, atype_text, rsource, final_text))
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


def _dispatch_activity(
    session: Any,
    activity: Activity,
    aa: Dict[str, Any],
    *,
    profile_name: str = "",
    provider_key: str = "",
) -> None:
    """Spawn handle_activity as a background task unless this activity is already being handled /
    completed / on cooldown / at the concurrency cap. Synchronous check->create_task->register
    (no await between) so a second poll cannot double-dispatch the same id."""
    provider, profile, _scope = _activity_scope(
        profile_name=profile_name,
        provider_key=provider_key,
    )
    key = activity_runtime_key(
        activity.activity_id,
        profile_name=profile,
        provider_key=provider,
    )
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
    task = ctx.asyncio.create_task(handle_activity(
        session,
        activity,
        aa,
        runtime_key=key,
        profile_name=profile,
        provider_key=provider,
    ))
    _INFLIGHT_ACTIVITIES[key] = task
    task.add_done_callback(lambda _t: _INFLIGHT_ACTIVITIES.pop(key, None))


async def autoanswer_tick(
    session: Any,
    *,
    profile_name: str = "",
    user_no: str = "",
    provider_key: str = "",
) -> None:
    """Poll and dispatch against the monitor's immutable account identity; never read a fan-out switch."""
    try:
        aa = get_autoanswer_config(ctx.CONFIG)
        if not aa.get("enabled"):
            return
        provider, profile, scope = _activity_scope(
            profile_name=profile_name,
            provider_key=provider_key,
        )
        captured_user = normalize_text(user_no) or _active_user_no()
        _ensure_persisted_loaded(profile_name=profile, provider_key=provider)
        event = ctx.AUTOANSWER_SUBMIT_NOW
        if event is not None and event.is_set() and not ctx.autoanswer_has_pending():
            event.clear()
        now = ctx.time.monotonic() if hasattr(ctx, "time") else time.monotonic()
        last_poll = _LAST_POLL_BY_SCOPE.get(scope, 0.0)
        if now - last_poll < POLL_INTERVAL_SECONDS:
            return
        _LAST_POLL_BY_SCOPE[scope] = now
        wanted = _wanted_types(aa)
        if not wanted:
            return
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        for course_id in await _refresh_courses(client, now, scope):
            activities = await _poll_course(
                client,
                course_id,
                wanted,
                profile_name=profile,
                user_no=captured_user,
                provider_key=provider,
            )
            for activity in activities:
                _dispatch_activity(
                    session,
                    activity,
                    aa,
                    profile_name=profile,
                    provider_key=provider,
                )
    except Exception:  # autoanswer must never break the monitor loop
        pass

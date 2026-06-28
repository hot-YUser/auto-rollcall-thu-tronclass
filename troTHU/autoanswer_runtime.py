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
    from troTHU import answer_flow
    from troTHU.config_runtime import get_autoanswer_config
    from troTHU.quiz_engine import normalize_text
    from troTHU.quiz_models import Activity, ActivityType
except ImportError:  # pragma: no cover - script execution fallback
    import answer_flow  # type: ignore
    from config_runtime import get_autoanswer_config  # type: ignore
    from quiz_engine import normalize_text  # type: ignore
    from quiz_models import Activity, ActivityType  # type: ignore


ATTEMPT_COOLDOWN_SECONDS = 30.0
POLL_INTERVAL_SECONDS = 10.0
COURSE_REFRESH_SECONDS = 300.0

_TYPE_BY_NAME = {
    "exam": ActivityType.EXAM,
    "classroom_exam": ActivityType.CLASSROOM_EXAM,
    "courseware_quiz": ActivityType.COURSEWARE_QUIZ,
    "questionnaire": ActivityType.QUESTIONNAIRE,
    "vote": ActivityType.VOTE,
    "homework": ActivityType.HOMEWORK,
}

_last_poll = 0.0
_courses: List[str] = []
_courses_at = 0.0


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
            if isinstance(e, dict) and e.get("is_started") and not e.get("is_closed"):
                out.append(_activity(course_id, ActivityType.EXAM, e))

    if ActivityType.QUESTIONNAIRE in wanted:
        body = await _get(client, "/api/courses/{}/questionnaire-list".format(course_id))
        for q in (body.get("questionnaires") if isinstance(body, dict) else None) or []:
            if isinstance(q, dict) and q.get("is_started") and not q.get("is_closed"):
                out.append(_activity(course_id, ActivityType.QUESTIONNAIRE, q))

    if ActivityType.HOMEWORK in wanted:
        body = await _get(client, "/api/courses/{}/homework-activities".format(course_id))
        for h in (body.get("homework_activities") if isinstance(body, dict) else None) or []:
            if isinstance(h, dict) and not h.get("is_closed"):
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
            if isinstance(c, dict) and normalize_text(c.get("status")) in ("start", "1"):
                out.append(_activity(course_id, ActivityType.CLASSROOM_EXAM, c))

    # courseware_quiz auto-detect needs activity->quiz resolution; left to direct targeting
    # (untestable on this tenant — no AI credits). Wired in answer_flow for when a quiz id is known.
    return out


async def _prepare(client: Any, session: Any, activity: Activity, aa: Dict[str, Any], now: float) -> None:
    key = activity.activity_id
    if not key or ctx.COMPLETED_QUESTION_SUBMISSIONS.get(key) or key in ctx.ACTIVE_QUESTION_ANSWERS:
        return
    if now - float(ctx.QUESTION_ANSWER_ATTEMPTS.get(key, 0.0) or 0.0) < ATTEMPT_COOLDOWN_SECONDS:
        return
    ctx.QUESTION_ANSWER_ATTEMPTS[key] = now
    prepared = await answer_flow.prepare_answer(client, session, activity, llm_config=aa.get("llm", {}))
    if not prepared:
        return
    prepared["detected_at"] = now
    prepared["delay_seconds"] = int(aa.get("delay_seconds", 15) or 0)
    ctx.ACTIVE_QUESTION_ANSWERS[key] = prepared
    label = activity.title or activity.activity_type.value
    ctx.log_print("偵測到「{}」，已備妥答案，{} 秒後自動送出（按任意鍵立即送）。".format(
        label, prepared["delay_seconds"]))
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
        if result.ok:
            ctx.COMPLETED_QUESTION_SUBMISSIONS[key] = True
            source = getattr(result.source, "value", result.source)
            ctx.log_print("已自動作答完成：{}（{}）。".format(key, source))
            ctx.log(event="autoanswer", status="submitted", message="已自動作答完成。",
                    extra={"activity_id": key, "submission_id": str(result.submission_id), "source": str(source)})
        else:
            ctx.log(event="autoanswer", status=result.status, message="自動作答失敗。",
                    extra={"activity_id": key})


async def autoanswer_tick(session: Any) -> None:
    """Called once per monitor poll. Never raises into the rollcall loop."""
    try:
        aa = get_autoanswer_config(ctx.CONFIG)
        if not aa.get("enabled"):
            return
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

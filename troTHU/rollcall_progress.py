"""Check-in progress for a rollcall, from student-readable endpoints.

Live capture of a real QR rollcall showed two student-readable feeds:
  - ``/api/rollcall/{id}/student_rollcalls`` -> the roster, each with
    ``rollcall_status`` (``absent`` / ``on_call_fine``) and ``user_no``.
  - ``/api/rollcall/{id}/answers`` -> who has already checked in.

This summarizes those into: class total, present count, how many answered, and
(by matching the active profile's ``user_no``) whether *my own* check-in landed.
Used to confirm a submission succeeded. Best-effort; never raises.
"""
from __future__ import annotations

import json
from typing import Any, Dict, Mapping
from urllib.parse import quote

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore


PRESENT_STATUSES = ("on_call_fine",)


def _present_status(value: Any) -> str:
    status = str(value or "").strip()
    return status if status in PRESENT_STATUSES else ""


def _rollcall_id_matches(rollcall: Any, rollcall_id: Any) -> bool:
    if not isinstance(rollcall, Mapping):
        return False
    expected = str(rollcall_id or "").strip()
    if not expected:
        return False
    for key in ("rollcall_id", "rollcallId", "id"):
        if str(rollcall.get(key) or "").strip() == expected:
            return True
    return False


def _extract_top_level_status(student_rollcalls: Any) -> str:
    if not isinstance(student_rollcalls, Mapping):
        return ""
    for key in ("rollcall_status", "rollcallStatus", "student_rollcall_status", "status"):
        status = str(student_rollcalls.get(key) or "").strip()
        if status:
            return status
    return ""


def summarize_rollcall_progress(student_rollcalls: Any, answers: Any, my_user_no: str = "") -> Dict[str, Any]:
    roster = []
    if isinstance(student_rollcalls, Mapping) and isinstance(student_rollcalls.get("student_rollcalls"), list):
        roster = student_rollcalls["student_rollcalls"]
    total = len(roster)
    present = 0
    my_status = ""
    my_status_known = False
    target = str(my_user_no or "").strip().lower()
    for entry in roster:
        if not isinstance(entry, Mapping):
            continue
        status = str(
            entry.get("rollcall_status")
            or entry.get("student_rollcall_status")
            or entry.get("status")
            or ""
        ).strip()
        if _present_status(status):
            present += 1
        if target and str(entry.get("user_no") or "").strip().lower() == target:
            my_status = status
            my_status_known = True
    answered = 0
    if isinstance(answers, Mapping) and isinstance(answers.get("answers"), list):
        answered = len(answers["answers"])
    rollcall_status = _extract_top_level_status(student_rollcalls)
    my_present = bool(_present_status(my_status))
    progress_present = total > 0 and present == total
    progress_status_present = bool(_present_status(rollcall_status))
    present_rate_known = total > 0
    present_rate_percent = (float(present) / float(total) * 100.0) if present_rate_known else None
    return {
        "total": total,
        "present": present,
        "answered": answered,
        "present_rate_known": present_rate_known,
        "present_rate_percent": present_rate_percent,
        "rollcall_status": rollcall_status,
        "my_user_no": str(my_user_no or ""),
        "my_status": my_status,
        "my_status_known": my_status_known,
        "my_present": my_present,
        "progress_present": progress_present,
        "progress_status_present": progress_status_present,
        "confirmed_present": my_present or progress_present or progress_status_present,
    }


def progress_status_label(summary: Mapping[str, Any]) -> str:
    if summary.get("my_present"):
        return "已簽到"
    if summary.get("my_status_known"):
        return str(summary.get("my_status") or "未簽到")
    if summary.get("progress_present"):
        return "全員已簽到，個人狀態未能匹配確認"
    if _present_status(summary.get("rollcall_status")):
        return "已確認 on_call_fine，個人狀態未能匹配確認"
    return "個人狀態未能確認"


def format_attendance_rate_text(rollcall_id: Any, summary: Mapping[str, Any]) -> str:
    total = int(summary.get("total") or 0)
    present = int(summary.get("present") or 0)
    if total <= 0 or not summary.get("present_rate_known"):
        return "點名 #{} 簽到率未知".format(rollcall_id)
    try:
        rate = float(summary.get("present_rate_percent") or 0.0)
    except (TypeError, ValueError):
        rate = 0.0
    return "點名 #{} 簽到率 {:.1f}%（{}/{}）".format(rollcall_id, rate, present, total)


def format_rollcall_progress_text(
    rollcall_id: Any,
    summary: Mapping[str, Any],
    *,
    include_personal_status: bool = True,
) -> str:
    text = "點名 #{} 進度：已簽到 {}/{} 人".format(
        rollcall_id,
        summary.get("present", 0),
        summary.get("total", 0),
    )
    if include_personal_status:
        text += "（你的狀態：{}）".format(progress_status_label(summary))
    return text


def _with_progress_text(rollcall_id: Any, summary: Dict[str, Any]) -> Dict[str, Any]:
    if not summary.get("ok"):
        return summary
    summary["progress_text"] = format_rollcall_progress_text(
        rollcall_id,
        summary,
        include_personal_status=True,
    )
    summary["monitor_detail"] = format_rollcall_progress_text(
        rollcall_id,
        summary,
        include_personal_status=False,
    )
    summary["attendance_rate_text"] = format_attendance_rate_text(rollcall_id, summary)
    summary["monitor_status"] = "on_call_fine" if summary.get("confirmed_present") else ""
    return summary


def remember_rollcall_progress(progress: Mapping[str, Any]) -> None:
    """Store the latest confirmed progress for the live monitor status line."""
    if not isinstance(progress, Mapping):
        return
    source = progress.get("progress") if isinstance(progress.get("progress"), Mapping) else progress
    detail = str(progress.get("monitor_detail") or source.get("monitor_detail") or progress.get("progress_text") or source.get("progress_text") or "").strip()
    status = str(progress.get("monitor_status") or source.get("monitor_status") or progress.get("status") or source.get("rollcall_status") or "").strip()
    rollcall_id = str(progress.get("rollcall_id") or source.get("rollcall_id") or "").strip()
    if not detail and rollcall_id:
        detail = format_rollcall_progress_text(rollcall_id, source, include_personal_status=False)
    ctx.LAST_ROLLCALL_PROGRESS.clear()
    ctx.LAST_ROLLCALL_PROGRESS.update({
        "rollcall_id": rollcall_id,
        "detail": detail,
        "status": "on_call_fine" if status == "on_call_fine" or source.get("confirmed_present") else status,
        "progress": dict(source),
    })


def clear_rollcall_progress() -> None:
    ctx.LAST_ROLLCALL_PROGRESS.clear()


async def _get_json(session: Any, url: str, request_ssl: Any) -> Any:
    kwargs: Dict[str, Any] = {}
    if request_ssl is not None:
        kwargs["ssl"] = request_ssl
    try:
        async with session.get(url, **kwargs) as response:
            text = await response.text()
        return json.loads(text) if text else None
    except Exception:
        return None


async def fetch_rollcall_progress(session: Any, rollcall_id: Any, *, endpoints: Any, request_ssl: Any = None, my_user_no: str = "") -> Dict[str, Any]:
    base = str(getattr(endpoints, "base_url", "") or "").rstrip("/")
    rid = quote(str(rollcall_id or "").strip(), safe="")
    if not base or not rid:
        return {"ok": False, "status": "incomplete"}
    student_rollcalls = await _get_json(session, "{}/api/rollcall/{}/student_rollcalls".format(base, rid), request_ssl)
    answers = await _get_json(session, "{}/api/rollcall/{}/answers".format(base, rid), request_ssl)
    summary = summarize_rollcall_progress(student_rollcalls, answers, my_user_no)
    summary["ok"] = True
    summary["rollcall_id"] = str(rollcall_id or "")
    return _with_progress_text(rollcall_id, summary)


async def _fetch_rollcall_feed_status(session: Any, rollcall_id: Any, *, endpoints: Any, request_ssl: Any) -> Dict[str, Any]:
    client = ctx.TronHttpClient(session, request_ssl=request_ssl, endpoints=endpoints)
    result = await client.fetch_rollcalls()
    rollcalls = result.payload.get("rollcalls") if isinstance(result.payload, Mapping) else []
    if not isinstance(rollcalls, list):
        return {"ok": False, "status": "missing_rollcalls"}
    for item in rollcalls:
        if not _rollcall_id_matches(item, rollcall_id):
            continue
        status = str(item.get("status") or item.get("rollcall_status") or "").strip()
        return {
            "ok": True,
            "matched": True,
            "status": status,
            "rollcall_id": str(rollcall_id or ""),
            "present": bool(_present_status(status)),
            "rollcall": item,
        }
    return {"ok": True, "matched": False, "status": "", "rollcall_id": str(rollcall_id or "")}


async def verify_rollcall_on_call_fine(
    session: Any,
    rollcall_id: Any,
    *,
    attempts: int = 5,
    delay_seconds: float = 1.0,
    endpoints: Any = None,
    request_ssl: Any = Ellipsis,
    progress_summary: Mapping[str, Any] | None = None,
    rollcall_type: str = "",
) -> Dict[str, Any]:
    """Confirm a submitted attendance has reached the canonical on_call_fine state."""
    endpoints = endpoints or ctx.get_active_http_endpoints()
    if request_ssl is Ellipsis:
        request_ssl = ctx.get_ssl_request_setting()
    try:
        max_attempts = max(1, int(attempts))
    except (TypeError, ValueError):
        max_attempts = 1
    try:
        delay = max(0.0, float(delay_seconds))
    except (TypeError, ValueError):
        delay = 0.0
    my_user_no = ""
    try:
        my_user_no = ctx.get_active_profile(ctx.CONFIG).name
    except Exception:
        my_user_no = ""

    last_progress: Dict[str, Any] = dict(progress_summary or {}) if isinstance(progress_summary, Mapping) else {}
    if last_progress.get("ok"):
        last_progress = _with_progress_text(rollcall_id, last_progress)
    errors = []
    for attempt in range(max_attempts):
        feed_status: Dict[str, Any] = {}
        try:
            feed_status = await _fetch_rollcall_feed_status(
                session,
                rollcall_id,
                endpoints=endpoints,
                request_ssl=request_ssl,
            )
            if feed_status.get("present"):
                if not last_progress.get("ok"):
                    try:
                        last_progress = await fetch_rollcall_progress(
                            session,
                            rollcall_id,
                            endpoints=endpoints,
                            request_ssl=request_ssl,
                            my_user_no=my_user_no,
                        )
                    except ctx.UnauthorizedError:
                        raise
                    except Exception as exc:
                        errors.append("{}:{}".format(type(exc).__name__, str(exc)[:120]))
                verification = {
                    "ok": True,
                    "status": "on_call_fine",
                    "source": "rollcalls",
                    "rollcall_id": str(rollcall_id or ""),
                    "progress": last_progress or {},
                    "progress_text": last_progress.get("progress_text", ""),
                    "monitor_detail": last_progress.get("monitor_detail", ""),
                    "monitor_status": "on_call_fine",
                    "attempts": attempt + 1,
                    "rollcall_type": rollcall_type,
                }
                remember_rollcall_progress(verification)
                return verification
        except ctx.UnauthorizedError:
            raise
        except Exception as exc:
            errors.append("{}:{}".format(type(exc).__name__, str(exc)[:120]))

        try:
            if not last_progress.get("ok") or attempt > 0:
                last_progress = await fetch_rollcall_progress(
                    session,
                    rollcall_id,
                    endpoints=endpoints,
                    request_ssl=request_ssl,
                    my_user_no=my_user_no,
                )
            if last_progress.get("confirmed_present"):
                verification = {
                    "ok": True,
                    "status": "on_call_fine",
                    "source": "progress",
                    "rollcall_id": str(rollcall_id or ""),
                    "progress": last_progress,
                    "progress_text": last_progress.get("progress_text", ""),
                    "monitor_detail": last_progress.get("monitor_detail", ""),
                    "monitor_status": "on_call_fine",
                    "attempts": attempt + 1,
                    "rollcall_type": rollcall_type,
                }
                remember_rollcall_progress(verification)
                return verification
        except ctx.UnauthorizedError:
            raise
        except Exception as exc:
            errors.append("{}:{}".format(type(exc).__name__, str(exc)[:120]))

        if attempt < max_attempts - 1 and delay > 0:
            await ctx.asyncio.sleep(delay)

    if last_progress.get("ok"):
        last_progress = _with_progress_text(rollcall_id, last_progress)
    return {
        "ok": False,
        "status": "submitted_unconfirmed",
        "source": "",
        "rollcall_id": str(rollcall_id or ""),
        "progress": last_progress or {},
        "progress_text": last_progress.get("progress_text", ""),
        "monitor_detail": last_progress.get("monitor_detail", ""),
        "monitor_status": "",
        "attempts": max_attempts,
        "errors": errors,
        "rollcall_type": rollcall_type,
    }


async def report_rollcall_progress(
    session: Any,
    rollcall_id: Any,
    *,
    log_output: bool = True,
    include_personal_status: bool = True,
) -> Dict[str, Any]:
    """Fetch + log a one-line progress summary for a rollcall. Never raises."""
    try:
        my_user_no = ctx.get_active_profile(ctx.CONFIG).name
        summary = await fetch_rollcall_progress(
            session,
            rollcall_id,
            endpoints=ctx.get_active_http_endpoints(),
            request_ssl=ctx.get_ssl_request_setting(),
            my_user_no=my_user_no,
        )
        if not summary.get("ok"):
            return summary
        text = format_rollcall_progress_text(
            rollcall_id,
            summary,
            include_personal_status=include_personal_status,
        )
        summary["progress_text"] = format_rollcall_progress_text(
            rollcall_id,
            summary,
            include_personal_status=True,
        )
        summary["monitor_detail"] = format_rollcall_progress_text(
            rollcall_id,
            summary,
            include_personal_status=False,
        )
        summary["monitor_status"] = "on_call_fine" if summary.get("confirmed_present") else ""
        summary["attendance_rate_text"] = ctx.format_attendance_rate_text(rollcall_id, summary)
        if summary.get("confirmed_present"):
            remember_rollcall_progress(summary)
        if log_output:
            ctx.log_print(text)
        ctx.log(event="rollcall_progress", status="ok", rollcall_id=str(rollcall_id or ""), rollcall_type="qrcode", message=text, extra=summary)
        return summary
    except Exception as exc:
        ctx.log(event="rollcall_progress", status="error", rollcall_id=str(rollcall_id or ""), error=exc)
        return {"ok": False, "status": "error"}

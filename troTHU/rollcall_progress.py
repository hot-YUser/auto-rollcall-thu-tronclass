"""Check-in progress for a rollcall, from student-readable endpoints.

Live capture of a real QR rollcall showed two student-readable feeds:
  - ``/api/rollcall/{id}/student_rollcalls`` -> the roster, each with
    ``rollcall_status`` (``absent`` / ``on_call_fine``) and ``user_no``.
  - ``/api/rollcall/{id}/answers`` -> who has already checked in.

This summarizes those into: class total, present count, how many answered, and
(by matching the active profile's ``user_no``) whether *my own* check-in landed.
Used to confirm a submission succeeded. Best-effort; never raises.
"""

import json
from typing import Any, Dict, Mapping
from urllib.parse import quote

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore


PRESENT_STATUSES = ("on_call_fine",)


def summarize_rollcall_progress(student_rollcalls: Any, answers: Any, my_user_no: str = "") -> Dict[str, Any]:
    roster = []
    if isinstance(student_rollcalls, Mapping) and isinstance(student_rollcalls.get("student_rollcalls"), list):
        roster = student_rollcalls["student_rollcalls"]
    total = len(roster)
    present = 0
    my_status = ""
    target = str(my_user_no or "").strip().lower()
    for entry in roster:
        if not isinstance(entry, Mapping):
            continue
        status = str(entry.get("rollcall_status") or "").strip()
        if status in PRESENT_STATUSES:
            present += 1
        if target and str(entry.get("user_no") or "").strip().lower() == target:
            my_status = status
    answered = 0
    if isinstance(answers, Mapping) and isinstance(answers.get("answers"), list):
        answered = len(answers["answers"])
    return {
        "total": total,
        "present": present,
        "answered": answered,
        "my_user_no": str(my_user_no or ""),
        "my_status": my_status,
        "my_present": my_status in PRESENT_STATUSES,
    }


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
    return summary


async def report_rollcall_progress(session: Any, rollcall_id: Any) -> Dict[str, Any]:
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
        my_label = "已簽到" if summary.get("my_present") else (summary.get("my_status") or "未簽到")
        text = "點名 #{} 進度：已簽到 {}/{} 人（你的狀態：{}）".format(
            rollcall_id, summary.get("present"), summary.get("total"), my_label
        )
        ctx.log_print(text)
        ctx.log(event="rollcall_progress", status="ok", rollcall_id=str(rollcall_id or ""), rollcall_type="qrcode", message=text, extra=summary)
        return summary
    except Exception as exc:
        ctx.log(event="rollcall_progress", status="error", rollcall_id=str(rollcall_id or ""), error=exc)
        return {"ok": False, "status": "error"}

from __future__ import annotations

import re
from collections import Counter
from typing import Any, Dict, Iterable, List, Mapping, Sequence


SENSITIVE_KEY_PARTS = (
    "authorization",
    "body",
    "cookie_value",
    "data",
    "interaction_token",
    "passwd",
    "password",
    "payload",
    "raw",
    "response",
    "secret",
    "session",
    "signature",
    "token",
)
SENSITIVE_TEXT_PARTS = (
    "authorization",
    "cookie",
    "passwd",
    "password",
    "payload",
    "secret",
    "session",
    "signature",
    "token",
)
SENSITIVE_ASSIGNMENT_RE = re.compile(
    r"(?i)(authorization|cookie|passwd|password|payload|secret|session|signature|token)=\S+"
)


def _mapping(value: Any) -> Mapping[str, Any]:
    return value if isinstance(value, Mapping) else {}


def _safe_bool(value: Any) -> bool:
    return bool(value)


def _safe_int(value: Any, default: int = 0) -> int:
    try:
        return int(value)
    except (TypeError, ValueError):
        return default


def _safe_float(value: Any) -> float | None:
    try:
        return float(value)
    except (TypeError, ValueError):
        return None


def _safe_label(value: Any, *, limit: int = 80) -> str:
    text = str(value or "").strip()
    if not text:
        return ""
    text = SENSITIVE_ASSIGNMENT_RE.sub(r"\1=[redacted]", text)
    if len(text) > limit:
        return text[: limit - 3] + "..."
    return text


def _safe_text(value: Any, *, limit: int = 160) -> str:
    text = _safe_label(value, limit=limit)
    lowered = text.lower()
    if any(part in lowered for part in SENSITIVE_TEXT_PARTS):
        return "[redacted]"
    return text


def _safe_value(value: Any) -> Any:
    if isinstance(value, Mapping):
        safe: Dict[str, Any] = {}
        for key, item in value.items():
            key_text = str(key)
            lowered = key_text.lower()
            if any(part in lowered for part in SENSITIVE_KEY_PARTS):
                safe[key_text] = "[redacted]"
            else:
                safe[key_text] = _safe_value(item)
        return safe
    if isinstance(value, list):
        return [_safe_value(item) for item in value]
    if isinstance(value, tuple):
        return [_safe_value(item) for item in value]
    if isinstance(value, str):
        return _safe_text(value)
    return value


def _top_counts(value: Any, *, limit: int = 10) -> Dict[str, int]:
    if not isinstance(value, Mapping):
        return {}
    counts: Counter[str] = Counter()
    for key, count in value.items():
        label = _safe_label(key, limit=80) or "unknown"
        counts[label] += _safe_int(count)
    return dict(counts.most_common(max(1, limit)))


def _safe_cookie_summary(cookie: Mapping[str, Any]) -> Dict[str, Any]:
    return {
        "enabled": _safe_bool(cookie.get("enabled")),
        "exists": _safe_bool(cookie.get("exists")),
        "valid": _safe_bool(cookie.get("valid")),
        "record_count": _safe_int(cookie.get("record_count")),
        "age_seconds": _safe_float(cookie.get("age_seconds")),
        "age": _safe_label(cookie.get("age"), limit=40),
    }


def _safe_last_login(runtime: Mapping[str, Any], report: Mapping[str, Any]) -> Dict[str, Any]:
    runtime_login = _mapping(runtime.get("last_login"))
    report_login = _mapping(report.get("last_login"))
    raw = runtime_login or report_login
    return {
        "status": _safe_label(raw.get("status"), limit=80),
        "credential_source": _safe_label(raw.get("credential_source"), limit=80),
        "ok": _safe_bool(raw.get("ok")),
        "timestamp": _safe_float(raw.get("timestamp")),
    }


def _safe_last_check(runtime: Mapping[str, Any]) -> Dict[str, Any]:
    raw = _mapping(runtime.get("last_check"))
    return {
        "status": _safe_label(raw.get("status"), limit=80),
        "rollcall_id": _safe_label(raw.get("rollcall_id"), limit=80),
        "rollcall_type": _safe_label(raw.get("rollcall_type"), limit=40),
        "timestamp": _safe_float(raw.get("timestamp")),
    }


def _safe_last_error(runtime: Mapping[str, Any]) -> Dict[str, Any]:
    raw = _mapping(runtime.get("last_error"))
    return {
        "status": _safe_label(raw.get("status"), limit=80),
        "message": _safe_text(raw.get("message"), limit=160),
        "timestamp": _safe_float(raw.get("timestamp")),
    }


def _safe_pending_items(items: Iterable[Any], *, limit: int = 5) -> List[Dict[str, str]]:
    safe_items: List[Dict[str, str]] = []
    for item in items:
        mapping = _mapping(item)
        safe_items.append(
            {
                "provider": _safe_label(mapping.get("provider"), limit=40),
                "profile": _safe_label(mapping.get("profile"), limit=80),
                "rollcall_id": _safe_label(mapping.get("rollcall_id"), limit=80),
                "rollcall_type": _safe_label(mapping.get("rollcall_type"), limit=40),
                "source_adapter": _safe_label(mapping.get("source_adapter"), limit=40),
            }
        )
        if len(safe_items) >= limit:
            break
    return safe_items


def _safe_account_states(states: Sequence[Mapping[str, Any]]) -> List[Dict[str, Any]]:
    safe_states: List[Dict[str, Any]] = []
    for item in states or []:
        mapping = _mapping(item)
        runtime = _mapping(mapping.get("runtime"))
        safe_states.append(
            {
                "profile": _safe_label(mapping.get("profile"), limit=80),
                "exists": _safe_bool(mapping.get("exists")),
                "bot_state": _safe_label(runtime.get("bot_state") or "stopped", limit=40),
                "monitor_state": _safe_label(runtime.get("monitor_state") or "unknown", limit=40),
                "heartbeat_stale": _safe_bool(runtime.get("heartbeat_stale")),
                "pending_qr_count": _safe_int(mapping.get("pending_qr_count")),
                "binding_count": _safe_int(mapping.get("binding_count")),
                "adapter_counts": _top_counts(mapping.get("adapter_counts")),
            }
        )
    return safe_states


def _safe_event_summary(record: Mapping[str, Any]) -> Dict[str, Any]:
    return {
        "timestamp": _safe_label(record.get("timestamp"), limit=80),
        "event": _safe_label(record.get("event") or "unknown", limit=80),
        "status": _safe_label(record.get("status") or "unknown", limit=80),
        "profile": _safe_label(record.get("profile"), limit=80),
        "rollcall_id": _safe_label(record.get("rollcall_id"), limit=80),
        "rollcall_type": _safe_label(record.get("rollcall_type"), limit=40),
        "http_status": _safe_int(record.get("http_status")) if record.get("http_status") is not None else None,
        "message": _safe_text(record.get("message"), limit=160),
    }


def _is_notable(record: Mapping[str, Any]) -> bool:
    event = str(record.get("event") or "").lower()
    status = str(record.get("status") or "").lower()
    message = str(record.get("message") or "").lower()
    try:
        http_status = int(record.get("http_status") or 0)
    except (TypeError, ValueError):
        http_status = 0
    if http_status >= 400:
        return True
    if status and status not in {"ok", "success", "skipped", "unknown", "idle", "no_rollcall"}:
        return True
    notable_parts = (
        "auth",
        "error",
        "fail",
        "login",
        "number",
        "qr",
        "qrcode",
        "radar",
        "rollcall",
        "session",
    )
    return any(part in event or part in status or part in message for part in notable_parts)


def classify_recent_events(records: Sequence[Mapping[str, Any]], *, limit: int = 5) -> Dict[str, Any]:
    event_counts: Counter[str] = Counter()
    status_counts: Counter[str] = Counter()
    notable: List[Dict[str, Any]] = []
    max_items = max(1, int(limit or 5))

    for record in records or []:
        mapping = _mapping(record)
        event_counts[_safe_label(mapping.get("event") or "unknown", limit=80) or "unknown"] += 1
        status_counts[_safe_label(mapping.get("status") or "unknown", limit=80) or "unknown"] += 1

    for record in reversed(list(records or [])):
        mapping = _mapping(record)
        if _is_notable(mapping):
            notable.append(_safe_event_summary(mapping))
        if len(notable) >= max_items:
            break

    if not notable:
        for record in reversed(list(records or [])[-max_items:]):
            notable.append(_safe_event_summary(_mapping(record)))

    notable.reverse()
    return {
        "total": len(records or []),
        "events": dict(event_counts.most_common(10)),
        "statuses": dict(status_counts.most_common(10)),
        "notable": notable,
    }


def build_observability_snapshot(
    status_report: Mapping[str, Any],
    *,
    log_summary: Mapping[str, Any],
    recent_logs: Sequence[Mapping[str, Any]],
    account_states: Sequence[Mapping[str, Any]] | None = None,
) -> Dict[str, Any]:
    report = _mapping(status_report)
    provider = _mapping(report.get("provider"))
    credential = _mapping(report.get("credential"))
    runtime = _mapping(report.get("runtime_state"))
    pending = list(report.get("pending_qr") or [])
    logs = _mapping(log_summary)
    course = _mapping(report.get("course_discovery"))
    recent = classify_recent_events(list(recent_logs or []))
    snapshot = {
        "title": "THU TronClass Dashboard",
        "provider": {
            "key": _safe_label(provider.get("key"), limit=40),
            "label": _safe_label(provider.get("label"), limit=80),
            "status": _safe_label(provider.get("status"), limit=40),
        },
        "active_profile": _safe_label(report.get("active_profile"), limit=80),
        "credential_source": _safe_label(credential.get("effective_source"), limit=80),
        "cookie": _safe_cookie_summary(_mapping(report.get("cookie"))),
        "runtime": {
            "store_status": _safe_label(runtime.get("store_status"), limit=40),
            "bot_state": _safe_label(runtime.get("bot_state") or "stopped", limit=40),
            "monitor_state": _safe_label(runtime.get("monitor_state") or "unknown", limit=40),
            "heartbeat_at": _safe_float(runtime.get("heartbeat_at")),
            "heartbeat_stale": _safe_bool(runtime.get("heartbeat_stale")),
            "last_login": _safe_last_login(runtime, report),
            "last_check": _safe_last_check(runtime),
            "last_error": _safe_last_error(runtime),
        },
        "pending_qr": {
            "count": len(pending),
            "items": _safe_pending_items(pending),
        },
        "course_discovery": {
            "enabled": _safe_bool(course.get("enabled")),
            "read_only": _safe_bool(course.get("read_only", True)),
            "current_semester_endpoint": _safe_bool(course.get("current_semester_endpoint")),
            "courses_endpoint": _safe_bool(course.get("courses_endpoint")),
        },
        "logs": {
            "log_dir": _safe_label(logs.get("log_dir"), limit=240),
            "file_count": _safe_int(logs.get("file_count")),
            "record_count": _safe_int(logs.get("record_count")),
            "first_timestamp": _safe_label(logs.get("first_timestamp"), limit=80),
            "last_timestamp": _safe_label(logs.get("last_timestamp"), limit=80),
            "events": _top_counts(logs.get("events")),
            "statuses": _top_counts(logs.get("statuses")),
        },
        "recent_events": recent,
    }
    if account_states is not None:
        snapshot["accounts"] = _safe_account_states([_mapping(item) for item in account_states])
    return _safe_value(snapshot)


def _format_counts(counts: Mapping[str, Any], *, empty: str = "-") -> str:
    if not counts:
        return empty
    return ", ".join("{}={}".format(key, value) for key, value in counts.items())


def _format_event_line(event: Mapping[str, Any]) -> str:
    pieces = [
        _safe_label(event.get("timestamp"), limit=40) or "-",
        _safe_label(event.get("event"), limit=80) or "unknown",
        _safe_label(event.get("status"), limit=80) or "unknown",
    ]
    rollcall_id = _safe_label(event.get("rollcall_id"), limit=80)
    if rollcall_id:
        pieces.append("rollcall {}".format(rollcall_id))
    http_status = event.get("http_status")
    if http_status:
        pieces.append("http {}".format(http_status))
    message = _safe_text(event.get("message"), limit=120)
    if message:
        pieces.append(message)
    return " - " + " | ".join(pieces)


def format_dashboard_snapshot(snapshot: Mapping[str, Any]) -> List[str]:
    provider = _mapping(snapshot.get("provider"))
    cookie = _mapping(snapshot.get("cookie"))
    runtime = _mapping(snapshot.get("runtime"))
    last_login = _mapping(runtime.get("last_login"))
    last_check = _mapping(runtime.get("last_check"))
    last_error = _mapping(runtime.get("last_error"))
    pending = _mapping(snapshot.get("pending_qr"))
    logs = _mapping(snapshot.get("logs"))
    recent = _mapping(snapshot.get("recent_events"))
    course = _mapping(snapshot.get("course_discovery"))

    monitor_state = _safe_label(runtime.get("monitor_state"), limit=40) or "unknown"
    if runtime.get("heartbeat_stale"):
        monitor_state += " (stale)"
    cookie_state = "valid" if cookie.get("exists") and cookie.get("valid") else "missing"
    if cookie.get("exists") and not cookie.get("valid"):
        cookie_state = "invalid"
    course_state = "enabled" if course.get("enabled") else "disabled"
    if course.get("enabled") and course.get("read_only"):
        course_state += " read-only"

    lines = [
        _safe_label(snapshot.get("title"), limit=80) or "THU TronClass Dashboard",
        "Profile: {}".format(_safe_label(snapshot.get("active_profile"), limit=80) or "unknown"),
        "Provider: {} ({})".format(
            _safe_label(provider.get("key"), limit=40) or "unknown",
            _safe_label(provider.get("status"), limit=40) or "unknown",
        ),
        "Runtime: bot {}; monitor {}".format(
            _safe_label(runtime.get("bot_state"), limit=40) or "stopped",
            monitor_state,
        ),
        "Credential source: {}".format(_safe_label(snapshot.get("credential_source"), limit=80) or "missing"),
        "Cookie: {} age {} records {}".format(
            cookie_state,
            _safe_label(cookie.get("age"), limit=40) or "missing",
            _safe_int(cookie.get("record_count")),
        ),
        "Pending QR: {}".format(_safe_int(pending.get("count"))),
        "Last login: {}".format(_safe_label(last_login.get("status"), limit=80) or "-"),
        "Last check: {}".format(_safe_label(last_check.get("status"), limit=80) or "-"),
        "Last error: {}".format(_safe_label(last_error.get("status"), limit=80) or "-"),
        "Course discovery: {}".format(course_state),
        "Logs: {} records in {} files".format(
            _safe_int(logs.get("record_count")),
            _safe_int(logs.get("file_count")),
        ),
        "Top events: {}".format(_format_counts(_mapping(logs.get("events")))),
        "Top statuses: {}".format(_format_counts(_mapping(logs.get("statuses")))),
        "Recent notable events:",
    ]
    notable = list(recent.get("notable") or [])
    if notable:
        lines.extend(_format_event_line(_mapping(item)) for item in notable)
    else:
        lines.append(" - none")
    lines.append("Press Ctrl+C to exit.")
    return lines


def format_log_summary(summary: Mapping[str, Any], recent_logs: Sequence[Mapping[str, Any]] | None = None) -> List[str]:
    logs = _mapping(summary)
    recent = classify_recent_events(list(recent_logs or []), limit=len(recent_logs or []) or 5)
    lines = [
        "Log dir: {}".format(_safe_label(logs.get("log_dir"), limit=240) or "-"),
        "Files: {}  Records: {}".format(_safe_int(logs.get("file_count")), _safe_int(logs.get("record_count"))),
        "First: {}".format(_safe_label(logs.get("first_timestamp"), limit=80) or "-"),
        "Last: {}".format(_safe_label(logs.get("last_timestamp"), limit=80) or "-"),
        "Top events: {}".format(_format_counts(_top_counts(logs.get("events")))),
        "Top statuses: {}".format(_format_counts(_top_counts(logs.get("statuses")))),
        "Recent notable events:",
    ]
    notable = list(recent.get("notable") or [])
    if notable:
        lines.extend(_format_event_line(_mapping(item)) for item in notable)
    else:
        lines.append(" - none")
    return lines

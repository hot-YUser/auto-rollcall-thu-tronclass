from __future__ import annotations

from typing import Any, Dict, Iterable, Mapping, Sequence


SENSITIVE_MARKERS = (
    "authorization",
    "body",
    "cookie",
    "data",
    "password",
    "passwd",
    "payload",
    "raw",
    "response",
    "secret",
    "session",
    "token",
)
MAX_ACCOUNTS_IN_REPLY = 10


def _safe_text(value: Any, *, limit: int = 120) -> str:
    text = str(value or "").strip()
    if not text:
        return ""
    lowered = text.lower()
    if any(marker in lowered for marker in SENSITIVE_MARKERS):
        return "[redacted]"
    if len(text) > limit:
        return text[:limit] + "...(truncated)"
    return text


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


def _mapping(value: Any) -> Mapping[str, Any]:
    return value if isinstance(value, Mapping) else {}


def _safe_cookie_summary(cookie: Mapping[str, Any]) -> Dict[str, Any]:
    age_seconds = _safe_float(cookie.get("age_seconds"))
    return {
        "enabled": _safe_bool(cookie.get("enabled")),
        "exists": _safe_bool(cookie.get("exists")),
        "valid": _safe_bool(cookie.get("valid")),
        "record_count": _safe_int(cookie.get("record_count")),
        "age_seconds": age_seconds,
        "age": _safe_text(cookie.get("age"), limit=40),
    }


def _safe_pending_items(items: Iterable[Any], *, limit: int = 5) -> list[Dict[str, str]]:
    safe_items: list[Dict[str, str]] = []
    for item in items:
        mapping = _mapping(item)
        safe_items.append(
            {
                "provider": _safe_text(mapping.get("provider"), limit=40),
                "rollcall_id": _safe_text(mapping.get("rollcall_id"), limit=80),
                "rollcall_type": _safe_text(mapping.get("rollcall_type"), limit=40),
                "source_adapter": _safe_text(mapping.get("source_adapter"), limit=40),
            }
        )
        if len(safe_items) >= limit:
            break
    return safe_items


def _safe_adapter_counts(bindings: Mapping[str, Any]) -> Dict[str, int]:
    raw_counts = bindings.get("adapters", {})
    if not isinstance(raw_counts, Mapping):
        return {}
    return {
        _safe_text(adapter, limit=40): _safe_int(count)
        for adapter, count in raw_counts.items()
        if _safe_text(adapter, limit=40)
    }


def _safe_last_login(runtime_state: Mapping[str, Any]) -> Dict[str, Any]:
    raw = _mapping(runtime_state.get("last_login"))
    return {
        "status": _safe_text(raw.get("status"), limit=80),
        "credential_source": _safe_text(raw.get("credential_source"), limit=80),
        "ok": _safe_bool(raw.get("ok")),
    }


def _safe_last_check(runtime_state: Mapping[str, Any]) -> Dict[str, Any]:
    raw = _mapping(runtime_state.get("last_check"))
    return {
        "status": _safe_text(raw.get("status"), limit=80),
        "rollcall_id": _safe_text(raw.get("rollcall_id"), limit=80),
        "rollcall_type": _safe_text(raw.get("rollcall_type"), limit=40),
        "timestamp": _safe_float(raw.get("timestamp")),
    }


def _safe_last_error(runtime_state: Mapping[str, Any]) -> Dict[str, Any]:
    raw = _mapping(runtime_state.get("last_error"))
    return {
        "status": _safe_text(raw.get("status"), limit=80),
        "message": _safe_text(raw.get("message"), limit=160),
        "timestamp": _safe_float(raw.get("timestamp")),
    }


def _safe_course_discovery(course_discovery: Mapping[str, Any]) -> Dict[str, Any]:
    return {
        "enabled": _safe_bool(course_discovery.get("enabled")),
        "current_semester_endpoint": _safe_bool(course_discovery.get("current_semester_endpoint")),
        "courses_endpoint": _safe_bool(course_discovery.get("courses_endpoint")),
        "read_only": _safe_bool(course_discovery.get("read_only", True)),
    }


def build_profile_status_summary(
    profile: str,
    *,
    state: str,
    cookie: Mapping[str, Any],
    runtime_state: Mapping[str, Any],
    pending_qr: Sequence[Any],
    bindings: Mapping[str, Any],
    course_discovery: Mapping[str, Any] | None = None,
) -> Dict[str, Any]:
    runtime = _mapping(runtime_state)
    pending_items = list(pending_qr or [])
    binding_map = _mapping(bindings)
    bot_state = _safe_text(runtime.get("bot_state") or state or "stopped", limit=40)
    return {
        "profile": _safe_text(profile, limit=80),
        "state": _safe_text(state or bot_state, limit=40),
        "bot_state": bot_state,
        "monitor_state": _safe_text(runtime.get("monitor_state") or "unknown", limit=40),
        "heartbeat_stale": _safe_bool(runtime.get("heartbeat_stale")),
        "cookie": _safe_cookie_summary(_mapping(cookie)),
        "pending_qr_count": len(pending_items),
        "pending_qr": _safe_pending_items(pending_items),
        "binding_count": _safe_int(binding_map.get("count")),
        "adapter_counts": _safe_adapter_counts(binding_map),
        "last_login": _safe_last_login(runtime),
        "last_check": _safe_last_check(runtime),
        "last_error": _safe_last_error(runtime),
        "course_discovery": _safe_course_discovery(_mapping(course_discovery)),
    }


def format_profile_status_reply(summary: Mapping[str, Any]) -> str:
    cookie = _mapping(summary.get("cookie"))
    last_login = _mapping(summary.get("last_login"))
    last_check = _mapping(summary.get("last_check"))
    last_error = _mapping(summary.get("last_error"))
    parts = [
        "Profile {}".format(_safe_text(summary.get("profile"), limit=80) or "unknown"),
        "bot {}".format(_safe_text(summary.get("bot_state"), limit=40) or "stopped"),
        "monitor {}".format(_safe_text(summary.get("monitor_state"), limit=40) or "unknown"),
        "cookie {}".format("valid" if cookie.get("exists") and cookie.get("valid") else "missing"),
        "pending QR {}".format(_safe_int(summary.get("pending_qr_count"))),
    ]
    login_status = _safe_text(last_login.get("status"), limit=80)
    if login_status:
        parts.append("login {}".format(login_status))
    check_status = _safe_text(last_check.get("status"), limit=80)
    if check_status:
        parts.append("last check {}".format(check_status))
    error_status = _safe_text(last_error.get("status"), limit=80)
    if error_status:
        parts.append("last error {}".format(error_status))
    if summary.get("heartbeat_stale"):
        parts.append("heartbeat stale")
    return "; ".join(parts) + "."


def format_accounts_reply(
    summaries: Sequence[Mapping[str, Any]],
    *,
    total_count: int,
    visible_count: int,
    truncated: bool = False,
) -> str:
    shown = list(summaries[:MAX_ACCOUNTS_IN_REPLY])
    if not shown:
        return "No visible profiles."
    profile_bits = []
    for summary in shown:
        profile_bits.append(
            "{} ({}, cookie {}, pending QR {})".format(
                _safe_text(summary.get("profile"), limit=80) or "unknown",
                _safe_text(summary.get("bot_state"), limit=40) or "stopped",
                "valid" if _mapping(summary.get("cookie")).get("exists") and _mapping(summary.get("cookie")).get("valid") else "missing",
                _safe_int(summary.get("pending_qr_count")),
            )
        )
    suffix = " (showing {}/{})".format(len(shown), visible_count) if truncated else ""
    return "Profiles visible {}/{}{}: {}.".format(
        visible_count,
        total_count,
        suffix,
        "; ".join(profile_bits),
    )

"""Safe QR scanner view-state helpers for future App/GUI flows."""

from __future__ import annotations

from typing import Any, Dict, List, Mapping


SENSITIVE_KEY_PARTS = (
    "authorization",
    "body",
    "cookie",
    "data",
    "headers",
    "interaction",
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


def _safe_label(value: Any, *, limit: int = 80) -> str:
    text = str(value or "").strip()
    if not text:
        return ""
    lowered = text.lower()
    if any(part in lowered for part in SENSITIVE_TEXT_PARTS):
        return "[redacted]"
    if len(text) > limit:
        return text[: limit - 3] + "..."
    return text


def _safe_int(value: Any, default: int = 0) -> int:
    try:
        return int(value)
    except (TypeError, ValueError):
        return default


def _safe_bool(value: Any) -> bool:
    return bool(value)


def sanitize_qr_scan_result(value: Any) -> Any:
    """Return a redacted copy suitable for scanner UI responses."""
    if isinstance(value, Mapping):
        safe: Dict[str, Any] = {}
        for key, item in value.items():
            key_text = str(key)
            if any(part in key_text.lower() for part in SENSITIVE_KEY_PARTS):
                continue
            else:
                safe[key_text] = sanitize_qr_scan_result(item)
        return safe
    if isinstance(value, list):
        return [sanitize_qr_scan_result(item) for item in value]
    if isinstance(value, tuple):
        return [sanitize_qr_scan_result(item) for item in value]
    if isinstance(value, str):
        return _safe_label(value, limit=160)
    return value


def _mapping(value: Any) -> Mapping[str, Any]:
    return value if isinstance(value, Mapping) else {}


def _profile_results(items: Any) -> List[Dict[str, Any]]:
    results: List[Dict[str, Any]] = []
    if not isinstance(items, list):
        return results
    for item in items[:20]:
        mapping = _mapping(item)
        results.append(
            {
                "profile": _safe_label(mapping.get("profile"), limit=80),
                "provider": _safe_label(mapping.get("provider"), limit=40),
                "ok": _safe_bool(mapping.get("ok")),
                "status": _safe_label(mapping.get("status"), limit=80),
                "message": _safe_label(mapping.get("error") or mapping.get("message"), limit=120),
            }
        )
    return results


def _diagnostic_summary(source: Mapping[str, Any]) -> Dict[str, Any]:
    diagnostic = _mapping(source.get("diagnostic"))
    return {
        "source_kind": _safe_label(source.get("source_kind") or diagnostic.get("source_kind"), limit=40),
        "encoding": _safe_label(source.get("encoding") or diagnostic.get("encoding"), limit=40),
        "field_names": list(source.get("field_names") or diagnostic.get("field_names") or [])[:20],
        "extra_field_names": list(source.get("extra_field_names") or diagnostic.get("extra_field_names") or [])[:20],
        "missing_required": list(source.get("missing_required") or diagnostic.get("missing_required") or [])[:20],
        "warnings": list(source.get("warnings") or diagnostic.get("warnings") or [])[:20],
        "qr_hash": _safe_label(source.get("payload_hash") or diagnostic.get("payload_hash"), limit=80),
        "qr_length": _safe_int(source.get("payload_length") or diagnostic.get("payload_length")),
    }


def build_qr_scan_view_state(
    preview: Mapping[str, Any] | None = None,
    submit_result: Mapping[str, Any] | None = None,
    *,
    fanout: bool = False,
    camera_supported: bool | None = None,
) -> Dict[str, Any]:
    """Build a safe App/GUI-friendly state model for QR scanner flows."""
    source = _mapping(submit_result) or _mapping(preview)
    if not source:
        state = "idle"
    elif submit_result is not None:
        status = _safe_label(source.get("status"), limit=80)
        if status == "submitting":
            state = "submitting"
        elif status == "no_matches":
            state = "no_matches"
        elif status == "partial_failed":
            state = "partial_failed"
        elif source.get("ok"):
            state = "submitted"
        else:
            state = "failed"
    elif source.get("ok"):
        state = "preview_ok"
    else:
        state = "preview_failed"

    warnings = list(_diagnostic_summary(source).get("warnings") or [])
    if camera_supported is False:
        warnings.append("camera_unavailable_use_paste")

    match_count = _safe_int(source.get("match_count"))
    profile_results = _profile_results(source.get("results"))
    if state == "idle":
        next_action = "scan_or_paste"
    elif state == "preview_ok":
        next_action = "submit_or_adjust_fanout"
    elif state == "preview_failed":
        next_action = "paste_different_qr"
    elif state == "no_matches":
        next_action = "wait_for_matching_pending_qr"
    elif state == "submitting":
        next_action = "wait_for_result"
    elif state in {"failed", "partial_failed"}:
        next_action = "retry_or_check_status"
    else:
        next_action = "done"

    return sanitize_qr_scan_result(
        {
            "state": state,
            "ok": state in {"idle", "preview_ok", "submitted"},
            "fanout": _safe_bool(fanout),
            "camera_supported": camera_supported,
            "provider": _safe_label(source.get("provider"), limit=40),
            "rollcall_id": _safe_label(source.get("rollcall_id"), limit=80),
            "match_count": match_count,
            "profile_results": profile_results,
            "diagnostic": _diagnostic_summary(source),
            "warnings": warnings,
            "next_action": next_action,
        }
    )


def format_qr_scan_status(view_state: Mapping[str, Any]) -> str:
    """Format a compact status line for CLI/debug display."""
    state = _safe_label(view_state.get("state"), limit=40) or "unknown"
    provider = _safe_label(view_state.get("provider"), limit=40) or "-"
    rollcall_id = _safe_label(view_state.get("rollcall_id"), limit=80) or "-"
    match_count = _safe_int(view_state.get("match_count"))
    pieces = [
        "QR state={}".format(state),
        "provider={}".format(provider),
        "rollcall_id={}".format(rollcall_id),
        "matches={}".format(match_count),
    ]
    results = view_state.get("profile_results")
    if isinstance(results, list) and results:
        profile_bits = []
        for item in results[:5]:
            mapping = _mapping(item)
            profile_bits.append(
                "{}:{}".format(
                    _safe_label(mapping.get("profile"), limit=40) or "-",
                    _safe_label(mapping.get("status"), limit=40) or ("ok" if mapping.get("ok") else "failed"),
                )
            )
        pieces.append("profiles={}".format(",".join(profile_bits)))
    next_action = _safe_label(view_state.get("next_action"), limit=80)
    if next_action:
        pieces.append("next={}".format(next_action))
    return " | ".join(pieces)

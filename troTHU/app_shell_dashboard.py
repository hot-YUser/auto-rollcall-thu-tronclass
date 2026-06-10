"""Read-only dashboard helpers for the optional companion shell."""

from __future__ import annotations

import re
from typing import Any, Dict, List, Mapping


SENSITIVE_TEXT_RE = re.compile(
    r"(authorization|cookie|passwd|password|secret|session-[A-Za-z0-9_-]+|token-[A-Za-z0-9_-]+|raw-qr|payload)",
    re.IGNORECASE,
)
SENSITIVE_KEY_RE = re.compile(
    r"(authorization|cookie_value|passwd|password|secret|session_id|signature|token|raw|payload|response_body|body)",
    re.IGNORECASE,
)


def _safe_text(value: Any, *, limit: int = 160) -> str:
    text = str(value or "").strip()
    if SENSITIVE_TEXT_RE.search(text):
        return "[redacted]"
    if len(text) > limit:
        return text[: limit - 3] + "..."
    return text


def sanitize_shell_dashboard_value(value: Any, *, key: str = "") -> Any:
    """Return a shell-safe value."""
    if key and SENSITIVE_KEY_RE.search(str(key)):
        return "[redacted]"
    if isinstance(value, Mapping):
        return {
            str(child_key): sanitize_shell_dashboard_value(child_value, key=str(child_key))
            for child_key, child_value in value.items()
        }
    if isinstance(value, list):
        return [sanitize_shell_dashboard_value(item) for item in value]
    if isinstance(value, tuple):
        return [sanitize_shell_dashboard_value(item) for item in value]
    if isinstance(value, str):
        return _safe_text(value)
    return value


def _status_card(card_id: str, title: str, state: str, detail: str, *, severity: str = "info") -> Dict[str, Any]:
    return {
        "id": card_id,
        "title": title,
        "state": _safe_text(state, limit=60),
        "detail": _safe_text(detail, limit=180),
        "severity": severity if severity in {"ok", "info", "warn", "fail"} else "info",
    }


def _count(value: Any) -> int:
    try:
        return int(value or 0)
    except (TypeError, ValueError):
        return 0


def build_shell_dashboard_cards(
    *,
    snapshot: Mapping[str, Any] | None = None,
    release_report: Mapping[str, Any] | None = None,
    policy: Mapping[str, Any] | None = None,
) -> Dict[str, Any]:
    """Build dense read-only cards for the local shell overview."""
    snapshot = snapshot if isinstance(snapshot, Mapping) else {}
    status = snapshot.get("status_report") if isinstance(snapshot.get("status_report"), Mapping) else snapshot
    provider = status.get("provider") if isinstance(status, Mapping) and isinstance(status.get("provider"), Mapping) else {}
    runtime = status.get("runtime_state") if isinstance(status, Mapping) and isinstance(status.get("runtime_state"), Mapping) else {}
    cookie = status.get("cookie") if isinstance(status, Mapping) and isinstance(status.get("cookie"), Mapping) else {}
    pending_qr = status.get("pending_qr") if isinstance(status, Mapping) else []
    if not isinstance(pending_qr, list):
        pending_qr = []
    log_summary = snapshot.get("log_summary") if isinstance(snapshot.get("log_summary"), Mapping) else snapshot.get("logs", {})
    release_status = release_report.get("status") if isinstance(release_report, Mapping) else "not_configured"
    disabled_mutations = policy.get("disabled_mutations") if isinstance(policy, Mapping) else []
    cards = [
        _status_card(
            "provider",
            "Provider",
            str(provider.get("key") or "unknown"),
            "support={} daily_ready={}".format(provider.get("support_level") or provider.get("status") or "unknown", provider.get("daily_ready")),
            severity="ok" if provider.get("daily_ready") else "warn",
        ),
        _status_card(
            "runtime",
            "Runtime",
            str(runtime.get("bot_state") or runtime.get("monitor_state") or "unknown"),
            "last_check={} last_login={}".format(runtime.get("last_check", "-"), runtime.get("last_login", "-")),
            severity="info",
        ),
        _status_card(
            "cookie",
            "Cookie",
            "exists" if cookie.get("exists") else "missing",
            "valid={} age_seconds={}".format(cookie.get("valid"), cookie.get("age_seconds", "-")),
            severity="ok" if cookie.get("exists") else "warn",
        ),
        _status_card(
            "pending_qr",
            "Pending QR",
            str(len(pending_qr)),
            "waiting rollcalls={}".format(len(pending_qr)),
            severity="warn" if pending_qr else "ok",
        ),
        _status_card(
            "logs",
            "Logs",
            str(_count(log_summary.get("record_count") if isinstance(log_summary, Mapping) else 0)),
            "recent events summarized locally",
            severity="info",
        ),
        _status_card(
            "release",
            "Release",
            str(release_status or "unknown"),
            "static release smoke only",
            severity="ok" if release_status == "ok" else "warn",
        ),
        _status_card(
            "shell_policy",
            "Shell Policy",
            "read_only",
            "disabled_mutations={}".format(len(disabled_mutations) if isinstance(disabled_mutations, list) else 0),
            severity="ok",
        ),
    ]
    return {
        "status": "ok",
        "read_only": True,
        "preview_only": True,
        "cards": sanitize_shell_dashboard_value(cards),
    }


def build_shell_policy(*, route_count: int = 0) -> Dict[str, Any]:
    """Return the local shell safety policy shown in the UI."""
    return {
        "status": "ok",
        "local_only": True,
        "read_only": True,
        "preview_only": True,
        "route_count": int(route_count or 0),
        "disabled_mutations": [
            "account_control",
            "qr_submit",
            "webview_import",
            "reauth",
            "release_build",
        ],
        "handoff_only_actions": [
            "qr_submit",
            "qr_fanout",
            "webview_import",
            "release_check",
        ],
        "forbidden_outputs": [
            "credential_material",
            "auth_material",
            "browser_state_value",
            "original_qr_string",
            "backend_body",
        ],
    }


def format_shell_dashboard_cards(model: Mapping[str, Any]) -> List[str]:
    """Format dashboard cards as compact text."""
    lines = ["App shell dashboard: {}".format(model.get("status", "unknown"))]
    for card in model.get("cards", []) or []:
        if not isinstance(card, Mapping):
            continue
        lines.append(" - {title}: {state} ({detail})".format(
            title=card.get("title", "Card"),
            state=card.get("state", "unknown"),
            detail=card.get("detail", ""),
        ))
    return lines

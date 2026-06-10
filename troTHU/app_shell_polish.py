"""Read-only companion shell polish helpers.

These helpers build UI-facing summaries only. They never execute commands,
submit rollcalls, import cookies, or call external services.
"""

from __future__ import annotations

import re
from pathlib import Path
from typing import Any, Dict, List, Mapping


POLISH_VERSION = "app-shell-polish-v1"
PANEL_IDS = (
    "overview",
    "dashboard-cards",
    "accounts",
    "qr-preview",
    "radar-assist",
    "webview-sync",
    "release-check",
    "release-plan",
    "shell-policy",
    "logs",
    "diagnostics",
)
MUTATING_ACTIONS = ("account_control", "qr_submit", "webview_import", "reauth", "release_build")
SENSITIVE_KEY_RE = re.compile(
    r"(authorization|body|cookie|data|passwd|password|payload|raw|response|secret|session|signature|token|value)",
    re.IGNORECASE,
)
SENSITIVE_TEXT_RE = re.compile(
    r"(authorization=|cookie=|passwd=|password=|payload=|raw response|raw-qr|secret=|session=|token=)",
    re.IGNORECASE,
)
SAFE_KEY_NAMES = {"token_ttl_seconds", "route_count"}


def _safe_text(value: Any, *, limit: int = 180) -> str:
    text = str(value or "").strip()
    if SENSITIVE_TEXT_RE.search(text):
        return "[redacted]"
    if len(text) > limit:
        return text[: limit - 3] + "..."
    return text


def sanitize_shell_polish_value(value: Any, *, key: str = "") -> Any:
    if key and key not in SAFE_KEY_NAMES and SENSITIVE_KEY_RE.search(str(key)):
        return "[redacted]"
    if isinstance(value, Mapping):
        return {
            str(child_key): sanitize_shell_polish_value(child_value, key=str(child_key))
            for child_key, child_value in value.items()
        }
    if isinstance(value, (list, tuple)):
        return [sanitize_shell_polish_value(item) for item in value]
    if isinstance(value, str):
        return _safe_text(value)
    return value


def _status_from_report(report: Any) -> str:
    if not isinstance(report, Mapping):
        return "unknown"
    status = str(report.get("status") or "").strip().lower()
    if status in {"ok", "pass", "ready", "candidate_ready"}:
        return "ok"
    if status in {"warn", "warning", "blocked", "not_verified", "not_reviewed", "not_ready"}:
        return "warn"
    if status in {"fail", "failed", "fixture_invalid", "rejected"}:
        return "fail"
    if report.get("ready_candidate") is True:
        return "ok"
    return status or "unknown"


def _badge(status: str) -> Dict[str, str]:
    palette = {
        "ok": ("ok", "green"),
        "warn": ("needs attention", "amber"),
        "fail": ("blocked", "red"),
        "unknown": ("unknown", "gray"),
    }
    label, tone = palette.get(status, (status, "gray"))
    return {"status": status, "label": label, "tone": tone}


def _reports(reports: Mapping[str, Any] | None) -> Dict[str, Any]:
    return dict(reports or {})


def build_shell_action_catalog(config: Mapping[str, Any]) -> Dict[str, Any]:
    actions = [
        {
            "id": "status",
            "label": "Status",
            "category": "safe-read",
            "command_template": "python -m troTHU.tron status --json",
            "executes_in_shell": False,
        },
        {
            "id": "dashboard",
            "label": "Dashboard Snapshot",
            "category": "safe-read",
            "command_template": "python -m troTHU.tron dashboard --json",
            "executes_in_shell": False,
        },
        {
            "id": "qr_preview",
            "label": "QR Preview",
            "category": "preview-only",
            "command_template": "python -m troTHU.tron qr paste --json <QR_URL_OR_PAYLOAD>",
            "executes_in_shell": False,
        },
        {
            "id": "webview_preview",
            "label": "WebView Cookie Preview",
            "category": "preview-only",
            "command_template": "python -m troTHU.tron webview preview --input cookies.json --json",
            "executes_in_shell": False,
        },
        {
            "id": "release_check",
            "label": "Release Check",
            "category": "safe-read",
            "command_template": "python -m troTHU.tron release-check --json",
            "executes_in_shell": False,
        },
    ]
    return {
        "version": POLISH_VERSION,
        "read_only": True,
        "preview_only": True,
        "disabled_mutations": list(MUTATING_ACTIONS),
        "actions": sanitize_shell_polish_value(actions),
    }


def build_shell_ui_model(
    config: Mapping[str, Any],
    *,
    base_dir: Path,
    reports: Mapping[str, Any] | None = None,
) -> Dict[str, Any]:
    data = _reports(reports)
    badges = {
        "release": _badge(_status_from_report(data.get("release_check"))),
        "diagnostics": _badge(_status_from_report(data.get("doctor_report"))),
    }
    panels = [
        {
            "id": panel_id,
            "label": panel_id.replace("-", " ").replace("_", " ").title(),
            "route": "/app/api/ui/drilldown/{}".format(panel_id),
            "search_terms": sorted(set(panel_id.replace("-", " ").split() + [panel_id])),
        }
        for panel_id in PANEL_IDS
    ]
    event_groups = []
    logs = data.get("logs_summary") or data.get("log_summary") or {}
    recent = logs.get("recent_events") if isinstance(logs, Mapping) else None
    if isinstance(recent, Mapping):
        for name, items in recent.items():
            count = len(items) if isinstance(items, list) else int(bool(items))
            event_groups.append({"id": str(name), "count": count})
    return sanitize_shell_polish_value(
        {
            "version": POLISH_VERSION,
            "status": "ok",
            "base": {"workspace": Path(base_dir).name},
            "read_only": True,
            "preview_only": True,
            "panels": panels,
            "badges": badges,
            "action_catalog": build_shell_action_catalog(config),
            "recent_event_groups": event_groups,
            "filter": {"supports_panel_filter": True, "supports_badge_filter": True},
            "forbidden_mutations": list(MUTATING_ACTIONS),
        }
    )


def build_shell_drilldown(
    panel: str,
    *,
    config: Mapping[str, Any],
    base_dir: Path,
    reports: Mapping[str, Any] | None = None,
) -> Dict[str, Any]:
    panel_id = str(panel or "overview").strip().lower().replace("_", "-")
    if panel_id not in PANEL_IDS:
        panel_id = "overview"
    data = _reports(reports)
    report_key = {
        "overview": "snapshot",
        "dashboard-cards": "dashboard",
        "accounts": "accounts",
        "logs": "logs_summary",
        "diagnostics": "doctor_report",
        "release-check": "release_check",
        "radar-assist": "radar_assist",
        "webview-sync": "webview_status",
        "shell-policy": "shell_policy",
    }.get(panel_id, panel_id)
    detail = data.get(report_key, {"status": "not_configured"})
    return sanitize_shell_polish_value(
        {
            "version": POLISH_VERSION,
            "status": "ok",
            "panel": panel_id,
            "title": panel_id.replace("-", " ").title(),
            "read_only": True,
            "preview_only": True,
            "detail": detail,
            "related_actions": [
                action
                for action in build_shell_action_catalog(config)["actions"]
                if panel_id.split("-")[0] in str(action.get("id", ""))
            ][:5],
            "workspace": Path(base_dir).name,
        }
    )


def format_shell_ui_summary(model: Mapping[str, Any]) -> List[str]:
    panels = model.get("panels", []) if isinstance(model, Mapping) else []
    badges = model.get("badges", {}) if isinstance(model, Mapping) else {}
    lines = [
        "App shell polish: {}".format(model.get("status", "unknown") if isinstance(model, Mapping) else "unknown"),
        "Read-only: {}".format("yes" if model.get("read_only") else "no"),
        "Panels: {}".format(len(panels) if isinstance(panels, list) else 0),
    ]
    if isinstance(badges, Mapping):
        lines.append(
            "Badges: {}".format(
                ", ".join("{}={}".format(name, value.get("status", "")) for name, value in badges.items() if isinstance(value, Mapping))
            )
        )
    return lines

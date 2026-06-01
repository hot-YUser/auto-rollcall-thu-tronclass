"""Future App/GUI architecture blueprint.

This module is intentionally static and read-only. It documents the contract for
future companion UI work without starting a web server or adding a UI framework.
"""

from __future__ import annotations

import copy
from typing import Any, Dict, Iterable, List, Mapping


BLUEPRINT_VERSION = "app-blueprint-v1"
PRIMARY_OPERATION = "CLI + Bot + local scanner"
DEFAULT_TARGET = "companion_app_optional"

REQUIRED_SCREEN_IDS = {
    "overview",
    "accounts",
    "qr_scanner",
    "radar_assist",
    "courses",
    "logs_events",
    "integrations_settings",
    "webview_login_sync",
    "diagnostics",
}

REQUIRED_ENDPOINT_IDS = {
    "snapshot",
    "accounts",
    "status_controls",
    "qr_preview",
    "qr_submit",
    "logs_summary",
    "courses_discovery",
    "diagnostics",
    "integration_capabilities",
    "radar_map_assist",
    "webview_sync_status",
    "webview_cookie_preview",
    "webview_cookie_import",
    "dashboard_cards",
    "release_build_plan",
    "shell_policy",
}

FORBIDDEN_OUTPUTS = [
    "credential_material",
    "auth_material",
    "browser_state_value",
    "platform_credential_material",
    "original_qr_string",
    "unredacted_backend_body",
    "absolute_private_state_path",
]


def _safe_config_summary(config: Mapping[str, Any] | None) -> Dict[str, Any]:
    if not isinstance(config, Mapping):
        return {"provider": "thu", "configured_adapters": []}
    provider = config.get("provider")
    provider_key = "thu"
    if isinstance(provider, Mapping):
        provider_key = str(provider.get("key") or provider.get("name") or provider_key)
    integrations = config.get("integrations")
    adapters: List[str] = []
    if isinstance(integrations, Mapping):
        for name in ("discord", "line", "telegram"):
            if isinstance(integrations.get(name), Mapping):
                adapters.append(name)
    return {
        "provider": provider_key[:40] or "thu",
        "configured_adapters": adapters,
    }


def _screen(
    screen_id: str,
    title: str,
    *,
    data_sources: Iterable[str],
    actions: Iterable[str],
    future_notes: Iterable[str],
    details: Mapping[str, Any] | None = None,
) -> Dict[str, Any]:
    screen = {
        "id": screen_id,
        "title": title,
        "data_sources": list(data_sources),
        "actions": list(actions),
        "safe_response_fields": [
            "profile",
            "provider",
            "state",
            "count",
            "age",
            "last_activity",
            "capability",
            "masked_message",
        ],
        "forbidden_outputs": list(FORBIDDEN_OUTPUTS),
        "future_ui_notes": list(future_notes),
    }
    if details:
        screen.update(dict(details))
    return screen


def _endpoint(
    endpoint_id: str,
    method: str,
    path: str,
    *,
    data_sources: Iterable[str],
    actions: Iterable[str] = (),
    response_fields: Iterable[str],
    served_now: bool = False,
) -> Dict[str, Any]:
    return {
        "id": endpoint_id,
        "method": method,
        "path": path,
        "served_now": bool(served_now),
        "data_sources": list(data_sources),
        "actions": list(actions),
        "safe_response_fields": list(response_fields),
        "forbidden_outputs": list(FORBIDDEN_OUTPUTS),
        "notes": "Contract field set; read-only localhost shell routes may serve this when marked.",
    }


def build_app_blueprint(config: Mapping[str, Any] | None = None) -> Dict[str, Any]:
    """Build a static v1 blueprint for future companion App/GUI work."""
    config_summary = _safe_config_summary(config)
    data_sources = {
        "observability_snapshot": "Read-only dashboard snapshot from local summaries.",
        "account_runtime_store": "Durable per-profile runtime summary.",
        "account_profiles": "Profile names, labels, and adapter counts only.",
        "pending_qr_registry": "Pending QR counts and rollcall id summaries.",
        "course_discovery": "Read-only current term and course summaries.",
        "log_summary": "Sanitized JSONL counters and notable events.",
        "package_diagnostics": "Local packaging and dependency health checks.",
        "provider_capabilities": "Provider key, base capability flags, and endpoint availability.",
        "integration_bindings": "Adapter counts and channel-scoped capability summary.",
        "webview_sync_contract": "Safe WebView login cookie preview/import gate summaries.",
        "radar_map_assist": "Read-only radar boundary, center, and candidate grid summaries.",
        "release_build_plan": "Static release artifact plan and manifest summary.",
        "shell_policy": "Local shell read-only route and handoff policy.",
        "shell_ui_model": "Polished read-only local shell model, badges, filters, and drilldown summaries.",
    }
    actions = {
        "refresh_snapshot": "Reload local summaries.",
        "start_profile": "Ask runtime to start profile controls.",
        "stop_profile": "Ask runtime to stop profile controls.",
        "force_check": "Run one authorized check through existing runtime bridge.",
        "reauth_profile": "Run authorized reauthentication through existing runtime bridge.",
        "qr_preview": "Parse QR text and show safe diagnostic fields.",
        "qr_submit_single": "Submit QR for the selected profile.",
        "qr_submit_fanout": "Submit QR to matching pending profiles only.",
        "open_local_scanner": "Launch existing localhost scanner as a separate flow.",
        "refresh_courses": "Run read-only course discovery on demand.",
        "view_logs": "Open local sanitized log summary.",
        "run_diagnostics": "Run doctor and package-check style summaries.",
        "webview_sync_status": "Inspect local WebView cookie sync gates.",
        "webview_cookie_preview": "Preview exported WebView cookies without saving values.",
        "webview_cookie_import": "Import accepted WebView cookies into existing local cookie cache.",
        "radar_map_assist": "Preview radar boundary and candidate coordinate model.",
        "release_build_plan": "Inspect non-executing release build plan.",
        "view_shell_policy": "Show read-only shell policy and disabled mutation list.",
        "view_shell_ui_model": "Show polished local shell panel model and read-only action catalog.",
    }
    screens = [
        _screen(
            "overview",
            "Overview",
            data_sources=("observability_snapshot", "provider_capabilities", "account_runtime_store"),
            actions=("refresh_snapshot", "force_check"),
            future_notes=("Use dense status cards; no marketing hero.", "Show stale monitor and pending QR clearly."),
            details={
                "prototype_status": "dashboard_cards_core",
                "served_routes": ["dashboard_cards", "shell_policy", "ui_model"],
                "shell_status": "polished_read_only_shell_core",
            },
        ),
        _screen(
            "accounts",
            "Accounts",
            data_sources=("account_profiles", "account_runtime_store", "integration_bindings"),
            actions=("start_profile", "stop_profile", "reauth_profile"),
            future_notes=("Support profile switch and adapter binding overview.", "Admin-only controls must stay explicit."),
        ),
        _screen(
            "qr_scanner",
            "QR Scanner",
            data_sources=("pending_qr_registry", "provider_capabilities"),
            actions=("qr_preview", "qr_submit_single", "qr_submit_fanout", "open_local_scanner"),
            future_notes=(
                "Reuse existing parser diagnostics.",
                "Fan-out requires matching provider and rollcall id.",
                "Use paste fallback when browser camera decoding is unavailable.",
            ),
            details={
                "prototype_status": "local_scanner_ux_core",
                "result_states": [
                    "idle",
                    "preview_ok",
                    "preview_failed",
                    "submitting",
                    "submitted",
                    "partial_failed",
                    "failed",
                    "no_matches",
                ],
                "camera_fallback": "paste",
                "fanout_scope": "matching_pending_profiles_only",
            },
        ),
        _screen(
            "radar_assist",
            "Radar Assist",
            data_sources=("provider_capabilities", "observability_snapshot", "radar_map_assist"),
            actions=("refresh_snapshot", "radar_map_assist"),
            future_notes=(
                "Map picking remains assist-only until validated.",
                "Only show short coordinate and boundary diagnostics.",
                "Do not submit radar answers from the App shell.",
            ),
            details={
                "prototype_status": "map_assist_contract",
                "rendering": "geojson_like_without_map_sdk",
                "write_scope": "none",
            },
        ),
        _screen(
            "courses",
            "Courses",
            data_sources=("course_discovery", "provider_capabilities"),
            actions=("refresh_courses",),
            future_notes=("Read-only list first.", "Do not query answer or instructor-only endpoints."),
        ),
        _screen(
            "logs_events",
            "Logs & Events",
            data_sources=("log_summary", "observability_snapshot"),
            actions=("view_logs",),
            future_notes=("Filter by profile, event, and status.", "Keep messages short and redacted."),
        ),
        _screen(
            "integrations_settings",
            "Integrations & Settings",
            data_sources=("integration_bindings", "provider_capabilities", "package_diagnostics"),
            actions=("run_diagnostics",),
            future_notes=("Show environment readiness without values.", "Keep deployment state separate from credentials."),
        ),
        _screen(
            "webview_login_sync",
            "WebView Login Sync",
            data_sources=("webview_sync_contract", "provider_capabilities", "account_profiles"),
            actions=("webview_sync_status", "webview_cookie_preview", "webview_cookie_import"),
            future_notes=(
                "Optional companion flow only; CLI/Bot/local scanner remain primary.",
                "Preview exported cookies before any local cache write.",
                "Import requires explicit config gates and a save action.",
            ),
            details={
                "prototype_status": "webview_cookie_sync_contract",
                "default_mode": "preview_only",
                "write_requires": ["webview.cookie_sync.enabled", "allow_cookie_import", "explicit_save"],
                "provider_rule": "Hidden providers, TKU, and TronClass public cloud use ready provider scope; WebView import still requires explicit cookie-sync gates.",
            },
        ),
        _screen(
            "diagnostics",
            "Diagnostics",
            data_sources=("package_diagnostics", "observability_snapshot", "provider_capabilities"),
            actions=("run_diagnostics", "view_logs"),
            future_notes=("Mirror doctor/package-check status.", "Prefer copyable safe summaries."),
        ),
    ]
    api_contract = [
        _endpoint(
            "snapshot",
            "GET",
            "/app/api/snapshot",
            data_sources=("observability_snapshot",),
            response_fields=("active_profile", "provider", "runtime", "pending_qr", "logs", "recent_events"),
            served_now=True,
        ),
        _endpoint(
            "dashboard_cards",
            "GET",
            "/app/api/dashboard/cards",
            data_sources=("observability_snapshot", "release_build_plan", "shell_policy"),
            actions=("refresh_snapshot", "release_build_plan", "view_shell_policy"),
            response_fields=("cards", "read_only", "preview_only", "status"),
            served_now=True,
        ),
        _endpoint(
            "accounts",
            "GET",
            "/app/api/accounts",
            data_sources=("account_profiles", "account_runtime_store", "integration_bindings"),
            response_fields=("profiles", "runtime", "binding_counts", "visible_count"),
            served_now=True,
        ),
        _endpoint(
            "status_controls",
            "POST",
            "/app/api/accounts/{profile}/controls/{action}",
            data_sources=("account_runtime_store", "integration_bindings"),
            actions=("start_profile", "stop_profile", "force_check", "reauth_profile"),
            response_fields=("ok", "profile", "action", "authz_status", "cooldown_active", "masked_message"),
        ),
        _endpoint(
            "qr_preview",
            "POST",
            "/app/api/qr/preview",
            data_sources=("pending_qr_registry", "provider_capabilities"),
            actions=("qr_preview",),
            response_fields=("ok", "provider", "rollcall_id", "field_names", "match_count", "warnings"),
            served_now=True,
        ),
        _endpoint(
            "qr_submit",
            "POST",
            "/app/api/qr/submit",
            data_sources=("pending_qr_registry", "account_runtime_store"),
            actions=("qr_submit_single", "qr_submit_fanout"),
            response_fields=("ok", "provider", "rollcall_id", "results", "match_count", "masked_message"),
        ),
        _endpoint(
            "logs_summary",
            "GET",
            "/app/api/logs/summary",
            data_sources=("log_summary",),
            response_fields=("file_count", "record_count", "events", "statuses", "recent_events"),
            served_now=True,
        ),
        _endpoint(
            "courses_discovery",
            "GET",
            "/app/api/courses",
            data_sources=("course_discovery",),
            actions=("refresh_courses",),
            response_fields=("status", "semester", "course_count", "courses"),
        ),
        _endpoint(
            "diagnostics",
            "GET",
            "/app/api/diagnostics",
            data_sources=("package_diagnostics", "provider_capabilities"),
            response_fields=("checks", "status", "warnings", "capabilities"),
            served_now=True,
        ),
        _endpoint(
            "release_build_plan",
            "GET",
            "/app/api/release/plan",
            data_sources=("package_diagnostics", "release_build_plan"),
            actions=("release_build_plan",),
            response_fields=("status", "commands", "expected_artifacts", "preflight"),
            served_now=True,
        ),
        _endpoint(
            "shell_policy",
            "GET",
            "/app/api/shell/policy",
            data_sources=("shell_policy",),
            actions=("view_shell_policy",),
            response_fields=("local_only", "read_only", "preview_only", "disabled_mutations"),
            served_now=True,
        ),
        _endpoint(
            "ui_model",
            "GET",
            "/app/api/ui/model",
            data_sources=("shell_ui_model", "release_build_plan"),
            actions=("view_shell_ui_model",),
            response_fields=("panels", "badges", "action_catalog", "recent_event_groups"),
            served_now=True,
        ),
        _endpoint(
            "integration_capabilities",
            "GET",
            "/app/api/integrations/capabilities",
            data_sources=("integration_bindings",),
            response_fields=("adapters", "enabled", "binding_counts", "delivery_capabilities"),
            served_now=True,
        ),
        _endpoint(
            "radar_map_assist",
            "GET",
            "/app/api/radar/assist",
            data_sources=("radar_map_assist", "provider_capabilities"),
            actions=("radar_map_assist",),
            response_fields=("status", "provider", "boundary", "center", "candidate_grid", "warnings"),
            served_now=True,
        ),
        _endpoint(
            "webview_sync_status",
            "GET",
            "/app/api/webview/status",
            data_sources=("webview_sync_contract", "provider_capabilities"),
            response_fields=("status", "provider", "enabled", "can_import", "warnings"),
            served_now=True,
        ),
        _endpoint(
            "webview_cookie_preview",
            "POST",
            "/app/api/webview/cookies/preview",
            data_sources=("webview_sync_contract", "provider_capabilities"),
            actions=("webview_cookie_preview",),
            response_fields=("status", "provider", "profile", "accepted_count", "rejected_count", "warnings"),
            served_now=True,
        ),
        _endpoint(
            "webview_cookie_import",
            "POST",
            "/app/api/webview/cookies/import",
            data_sources=("webview_sync_contract", "account_profiles"),
            actions=("webview_cookie_import",),
            response_fields=("status", "provider", "profile", "accepted_count", "saved", "masked_message"),
        ),
    ]
    return {
        "version": BLUEPRINT_VERSION,
        "primary_operation": PRIMARY_OPERATION,
        "default_target": DEFAULT_TARGET,
        "gui_implemented": False,
        "web_app_default": False,
        "config_summary": config_summary,
        "implementation_targets": [
            {"id": "cli_bot_scanner_primary", "status": "current_primary"},
            {"id": DEFAULT_TARGET, "status": "planned_optional"},
            {"id": "local_web_shell_optional", "status": "polished_read_only_shell_core"},
            {"id": "desktop_shell_optional", "status": "future_candidate"},
            {"id": "mobile_app_optional", "status": "future_candidate"},
        ],
        "data_sources": data_sources,
        "actions": actions,
        "screens": screens,
        "api_contract": api_contract,
        "security_rules": [
            "Only safe summaries may cross the UI boundary.",
            "Original QR strings are preview-only input and must not be echoed.",
            "Credential material and platform auth material stay in env, keyring, or existing local stores.",
            "Optional companion HTTP surfaces must default to localhost and short-lived local access.",
            "Local shell APIs stay read-only or preview-only until a later explicit permission pass.",
            "Research-only flows stay outside daily App screens.",
        ],
        "deferred_work": [
            "No Flutter, Tauri, CustomTkinter, or native/mobile shell implementation in this round.",
            "No mutating App shell routes in this round.",
            "No actual WebView shell, browser automation, or login submission in this round.",
            "No camera decoder dependency in this round.",
            "No map SDK or geocoding dependency in this round.",
        ],
    }


def validate_app_blueprint(blueprint: Mapping[str, Any]) -> List[str]:
    """Return safe warnings for an incomplete blueprint."""
    warnings: List[str] = []
    if blueprint.get("version") != BLUEPRINT_VERSION:
        warnings.append("version_mismatch")
    if blueprint.get("primary_operation") != PRIMARY_OPERATION:
        warnings.append("primary_operation_mismatch")
    if blueprint.get("default_target") != DEFAULT_TARGET:
        warnings.append("default_target_mismatch")
    screens = blueprint.get("screens")
    if not isinstance(screens, list):
        warnings.append("screens_missing")
        screen_ids: set[str] = set()
    else:
        screen_ids = {str(item.get("id")) for item in screens if isinstance(item, Mapping)}
    for screen_id in sorted(REQUIRED_SCREEN_IDS - screen_ids):
        warnings.append("screen_missing:{}".format(screen_id))

    endpoints = blueprint.get("api_contract")
    if not isinstance(endpoints, list):
        warnings.append("api_contract_missing")
        endpoint_ids: set[str] = set()
    else:
        endpoint_ids = {str(item.get("id")) for item in endpoints if isinstance(item, Mapping)}
    for endpoint_id in sorted(REQUIRED_ENDPOINT_IDS - endpoint_ids):
        warnings.append("endpoint_missing:{}".format(endpoint_id))

    endpoint_items = endpoints if isinstance(endpoints, list) else []
    for endpoint in endpoint_items:
        if not isinstance(endpoint, Mapping):
            warnings.append("endpoint_invalid")
            continue
        if not isinstance(endpoint.get("served_now"), bool):
            warnings.append("endpoint_invalid_served_now:{}".format(endpoint.get("id") or "unknown"))
        if not endpoint.get("safe_response_fields"):
            warnings.append("endpoint_missing_safe_fields:{}".format(endpoint.get("id") or "unknown"))
        if not endpoint.get("forbidden_outputs"):
            warnings.append("endpoint_missing_forbidden_outputs:{}".format(endpoint.get("id") or "unknown"))
    return warnings


def format_app_blueprint_summary(blueprint: Mapping[str, Any]) -> List[str]:
    """Format a short human-readable summary for CLI output."""
    screen_count = len(blueprint.get("screens") or [])
    endpoint_count = len(blueprint.get("api_contract") or [])
    target = str(blueprint.get("default_target") or DEFAULT_TARGET)
    primary = str(blueprint.get("primary_operation") or PRIMARY_OPERATION)
    warnings = validate_app_blueprint(blueprint)
    lines = [
        "App Architecture Blueprint {}".format(blueprint.get("version") or "unknown"),
        "Primary operation: {}".format(primary),
        "Default App target: {}".format(target),
        "GUI/Web App: optional localhost shell core available; full GUI not implemented.",
        "Screens: {}".format(screen_count),
        "Future API contracts: {}".format(endpoint_count),
        "Validation: {}".format("ok" if not warnings else ", ".join(warnings)),
        "Required screens:",
    ]
    for screen in blueprint.get("screens") or []:
        if isinstance(screen, Mapping):
            lines.append(" - {}: {}".format(screen.get("id", "unknown"), screen.get("title", "")))
    return lines


def clone_blueprint(blueprint: Mapping[str, Any]) -> Dict[str, Any]:
    """Return a plain mutable copy for tests and downstream tooling."""
    return copy.deepcopy(dict(blueprint))

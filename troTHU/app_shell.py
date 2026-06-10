"""Optional localhost companion shell.

The shell is a lightweight, read-only/preview-only surface over existing local
summaries. It deliberately does not expose mutation routes for rollcall submit,
cookie import, account control, or reauthentication.
"""

from __future__ import annotations

import asyncio
import inspect
import json
import re
import secrets
import time
import webbrowser
from html import escape
from pathlib import Path
from typing import Any, Callable, Dict, Mapping

try:  # pragma: no cover - dependency fallback is exercised by CLI diagnostics
    from aiohttp import web
except (ImportError, ModuleNotFoundError):  # pragma: no cover
    web = None  # type: ignore

try:  # pragma: no cover - script execution fallback
    from troTHU.app_shell_polish import (
        build_shell_action_catalog,
        build_shell_drilldown,
        build_shell_ui_model,
    )
    from troTHU.app_shell_dashboard import build_shell_dashboard_cards, build_shell_policy
    from troTHU.radar_map_assist import build_radar_map_assist, validate_radar_point
    from troTHU.release_checklist import build_release_build_plan, build_release_checklist
    from troTHU.webview_sync import WebViewSyncError, build_webview_cookie_preview, build_webview_sync_status, parse_webview_cookie_export
except ImportError:  # pragma: no cover
    from app_shell_polish import build_shell_action_catalog, build_shell_drilldown, build_shell_ui_model
    from app_shell_dashboard import build_shell_dashboard_cards, build_shell_policy
    from radar_map_assist import build_radar_map_assist, validate_radar_point
    from release_checklist import build_release_build_plan, build_release_checklist
    from webview_sync import WebViewSyncError, build_webview_cookie_preview, build_webview_sync_status, parse_webview_cookie_export


Builder = Callable[..., Any]

SENSITIVE_KEY_RE = re.compile(
    r"(^value$|authorization|cookie_value|passwd|password|secret|session_id|signature|token|raw|payload|response_body|body)",
    re.IGNORECASE,
)
SENSITIVE_TEXT_RE = re.compile(
    r"(authorization|passwd|password|secret|session-[A-Za-z0-9_-]+|token-[A-Za-z0-9_-]+|raw-qr|cookie-value)",
    re.IGNORECASE,
)
SAFE_KEY_NAMES = {"token_ttl_seconds"}


def _redact_text(value: Any, *, limit: int = 240) -> str:
    text = str(value or "")
    if SENSITIVE_TEXT_RE.search(text):
        return "[redacted]"
    if len(text) > limit:
        return text[: limit - 3] + "..."
    return text


def sanitize_app_shell_value(value: Any, *, key: str = "") -> Any:
    """Return a UI-safe copy of a value."""
    if key and str(key) not in SAFE_KEY_NAMES and SENSITIVE_KEY_RE.search(str(key)):
        return "[redacted]"
    if isinstance(value, Mapping):
        return {
            str(child_key): sanitize_app_shell_value(child_value, key=str(child_key))
            for child_key, child_value in value.items()
        }
    if isinstance(value, list):
        return [sanitize_app_shell_value(item) for item in value]
    if isinstance(value, tuple):
        return [sanitize_app_shell_value(item) for item in value]
    if isinstance(value, str):
        return _redact_text(value)
    return value


async def _maybe_call(builder: Builder | None, *args: Any, **kwargs: Any) -> Any:
    if builder is None:
        return None
    value = builder(*args, **kwargs)
    if inspect.isawaitable(value):
        return await value
    return value


def _provider_from_config(config: Mapping[str, Any]) -> Dict[str, Any]:
    provider = config.get("provider", {}) if isinstance(config, Mapping) else {}
    if not isinstance(provider, Mapping):
        return {"key": "thu"}
    current = str(provider.get("current") or provider.get("key") or "thu")
    available = provider.get("available", {})
    if isinstance(available, Mapping) and isinstance(available.get(current), Mapping):
        active = dict(available[current])
    else:
        active = {"key": current}
    active.setdefault("key", current)
    active["allow_experimental"] = bool(provider.get("allow_experimental"))
    return active


def _token_ttl(token_expires_at: float | None) -> int | None:
    if token_expires_at is None:
        return None
    return max(0, int(float(token_expires_at) - time.time()))


def _check_api_token(request: Any, expected_token: str, token_expires_at: float | None) -> None:
    provided = request.headers.get("X-Local-Token") or request.query.get("token") or ""
    if not expected_token or provided != expected_token:
        raise web.HTTPUnauthorized(text="invalid local token")
    if token_expires_at is not None and time.time() >= float(token_expires_at):
        raise web.HTTPUnauthorized(text="expired local token")


def _json(data: Mapping[str, Any], *, status: int = 200) -> Any:
    return web.json_response(sanitize_app_shell_value(dict(data)), status=status)


def _shell_html(token: str) -> str:
    safe_token = json.dumps(token)
    tabs = [
        ("overview", "Overview"),
        ("dashboard-cards", "Dashboard Cards"),
        ("accounts", "Accounts"),
        ("qr-preview", "QR Preview"),
        ("radar-assist", "Radar Assist"),
        ("webview-sync", "WebView Sync"),
        ("release-check", "Release Check"),
        ("release-plan", "Release Plan"),
        ("shell-policy", "Shell Policy"),
        ("ui-model", "UI Model"),
        ("action-catalog", "Action Catalog"),
        ("logs", "Logs"),
        ("diagnostics", "Diagnostics"),
    ]
    tab_buttons = "\n".join(
        '<button class="tab" data-tab="{tab}">{label}</button>'.format(
            tab=escape(tab),
            label=escape(label),
        )
        for tab, label in tabs
    )
    panels = "\n".join(
        '<section class="panel" id="{tab}"><h2>{label}</h2><pre data-panel-output="{tab}">Loading...</pre></section>'.format(
            tab=escape(tab),
            label=escape(label),
        )
        for tab, label in tabs
    )
    return """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>troTHU Companion Shell</title>
<style>
:root { color-scheme: light dark; font-family: "Segoe UI", Arial, sans-serif; }
body { margin: 0; background: #f4f6f8; color: #17202a; }
header { padding: 14px 18px; border-bottom: 1px solid #ccd4dd; background: #ffffff; }
h1 { margin: 0; font-size: 18px; font-weight: 650; letter-spacing: 0; }
.layout { display: grid; grid-template-columns: 190px minmax(0, 1fr); min-height: calc(100vh - 53px); }
nav { padding: 10px; border-right: 1px solid #ccd4dd; background: #fbfcfd; }
.tab { display: block; width: 100%; min-height: 34px; margin: 0 0 6px; padding: 7px 9px; border: 1px solid #c5ced8; border-radius: 6px; background: #fff; text-align: left; font: inherit; cursor: pointer; }
.tab.active { background: #17324d; color: #fff; border-color: #17324d; }
main { padding: 14px; display: grid; gap: 12px; }
.panel { display: none; border: 1px solid #c9d2dc; border-radius: 8px; background: #fff; padding: 12px; }
.panel.active { display: block; }
.panel h2 { margin: 0 0 8px; font-size: 15px; }
pre { white-space: pre-wrap; overflow-wrap: anywhere; margin: 0; padding: 10px; border-radius: 6px; background: #eef2f6; font-size: 12px; line-height: 1.45; }
.tools { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 10px; }
textarea { width: 100%; min-height: 72px; box-sizing: border-box; font: inherit; }
button.command { min-height: 32px; border-radius: 6px; border: 1px solid #8595a6; background: #fff; cursor: pointer; }
@media (max-width: 720px) { .layout { grid-template-columns: 1fr; } nav { border-right: 0; border-bottom: 1px solid #ccd4dd; } }
</style>
</head>
<body>
<header><h1>troTHU Companion Shell</h1></header>
<div class="layout">
<nav aria-label="App sections">
{tab_buttons}
</nav>
<main>
<div class="tools">
<button class="command" id="refresh">Refresh</button>
<span>Read-only local shell. Mutating actions remain in CLI/Bot/scanner flows.</span>
</div>
<textarea id="qrInput" placeholder="Paste QR payload for safe preview"></textarea>
<button class="command" id="previewQr">Preview QR</button>
<textarea id="cookieInput" placeholder='Paste cookie export JSON for safe preview'></textarea>
<button class="command" id="previewCookies">Preview Cookies</button>
<input id="handoffAction" placeholder="handoff action, e.g. qr_submit or webview_import">
<button class="command" id="buildHandoff">Build Handoff</button>
<input id="panelFilter" placeholder="Filter panels">
{panels}
</main>
</div>
<script>
const LOCAL_TOKEN = {token};
const routes = {
  overview: "/app/api/snapshot",
  "dashboard-cards": "/app/api/dashboard/cards",
  accounts: "/app/api/accounts",
  logs: "/app/api/logs/summary",
  diagnostics: "/app/api/diagnostics",
  "radar-assist": "/app/api/radar/assist",
  "webview-sync": "/app/api/webview/status",
  "release-check": "/app/api/release/check",
  "release-plan": "/app/api/release/plan",
  "shell-policy": "/app/api/shell/policy",
  "ui-model": "/app/api/ui/model",
  "action-catalog": "/app/api/actions/catalog"
};
async function getJson(path) {
  const response = await fetch(path, {headers: {"X-Local-Token": LOCAL_TOKEN}});
  return await response.json();
}
function writePanel(id, data) {
  const output = document.querySelector(`[data-panel-output="${id}"]`);
  if (output) output.textContent = JSON.stringify(data, null, 2);
}
async function refresh() {
  for (const [id, route] of Object.entries(routes)) {
    try { writePanel(id, await getJson(route)); } catch (error) { writePanel(id, {status: "failed", message: String(error)}); }
  }
}
document.querySelectorAll(".tab").forEach((button, index) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tab,.panel").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    document.getElementById(button.dataset.tab).classList.add("active");
  });
  if (index === 0) button.click();
});
document.getElementById("refresh").addEventListener("click", refresh);
document.getElementById("panelFilter").addEventListener("input", (event) => {
  const needle = event.target.value.toLowerCase();
  document.querySelectorAll(".tab").forEach((button) => {
    button.style.display = button.textContent.toLowerCase().includes(needle) ? "block" : "none";
  });
});
document.getElementById("previewQr").addEventListener("click", async () => {
  const response = await fetch("/app/api/qr/preview", {
    method: "POST",
    headers: {"Content-Type": "application/json", "X-Local-Token": LOCAL_TOKEN},
    body: JSON.stringify({payload: document.getElementById("qrInput").value})
  });
  writePanel("qr-preview", await response.json());
});
document.getElementById("previewCookies").addEventListener("click", async () => {
  const response = await fetch("/app/api/webview/cookies/preview", {
    method: "POST",
    headers: {"Content-Type": "application/json", "X-Local-Token": LOCAL_TOKEN},
    body: JSON.stringify({export: document.getElementById("cookieInput").value})
  });
  writePanel("webview-sync", await response.json());
});
document.getElementById("buildHandoff").addEventListener("click", async () => {
  const response = await fetch("/app/api/actions/handoff", {
    method: "POST",
    headers: {"Content-Type": "application/json", "X-Local-Token": LOCAL_TOKEN},
    body: JSON.stringify({action: document.getElementById("handoffAction").value})
  });
  writePanel("diagnostics", await response.json());
});
refresh();
</script>
</body>
</html>""".replace("{tab_buttons}", tab_buttons).replace("{panels}", panels).replace("{token}", safe_token)


async def _json_body(request: Any) -> Dict[str, Any]:
    try:
        value = await request.json()
    except Exception:
        return {}
    return dict(value) if isinstance(value, Mapping) else {}


def create_app_shell(
    config: Mapping[str, Any],
    *,
    token: str,
    token_expires_at: float | None = None,
    snapshot_builder: Builder | None = None,
    qr_previewer: Builder | None = None,
    webview_previewer: Builder | None = None,
    accounts_builder: Builder | None = None,
    log_summary_builder: Builder | None = None,
    diagnostics_builder: Builder | None = None,
    integrations_builder: Builder | None = None,
    radar_assist_builder: Builder | None = None,
    release_check_builder: Builder | None = None,
    release_plan_builder: Builder | None = None,
    dashboard_builder: Builder | None = None,
    shell_ui_builder: Builder | None = None,
    shell_drilldown_builder: Builder | None = None,
    action_catalog_builder: Builder | None = None,
) -> Any:
    """Create a localhost companion shell app."""
    if web is None:  # pragma: no cover
        raise RuntimeError("aiohttp.web is not installed. Run `pip install -e .`.")
    app = web.Application()

    async def app_page(_request: Any) -> Any:
        return web.Response(text=_shell_html(token), content_type="text/html")

    async def health(request: Any) -> Any:
        _check_api_token(request, token, token_expires_at)
        return _json(
            {
                "ok": True,
                "read_only": True,
                "preview_only": True,
                "token_ttl_seconds": _token_ttl(token_expires_at),
                "routes": [
                    "/app/api/health",
                    "/app/api/dashboard/cards",
                    "/app/api/snapshot",
                    "/app/api/accounts",
                    "/app/api/logs/summary",
                    "/app/api/diagnostics",
                    "/app/api/integrations/capabilities",
                    "/app/api/qr/preview",
                    "/app/api/webview/status",
                    "/app/api/webview/cookies/preview",
                    "/app/api/radar/assist",
                    "/app/api/radar/validate",
                    "/app/api/actions/handoff",
                    "/app/api/release/check",
                    "/app/api/release/plan",
                    "/app/api/shell/policy",
                    "/app/api/ui/model",
                    "/app/api/ui/drilldown/{panel}",
                    "/app/api/actions/catalog",
                ],
                "disabled_mutations": ["account_control", "qr_submit", "webview_import", "reauth", "release_build"],
            }
        )

    async def snapshot(request: Any) -> Any:
        _check_api_token(request, token, token_expires_at)
        value = await _maybe_call(snapshot_builder)
        if value is None:
            value = {"status": "not_configured", "provider": _provider_from_config(config).get("key", "thu")}
        return _json({"status": "ok", "snapshot": value})

    async def shell_policy(request: Any) -> Any:
        _check_api_token(request, token, token_expires_at)
        return _json(build_shell_policy(route_count=19))

    async def ui_model(request: Any) -> Any:
        _check_api_token(request, token, token_expires_at)
        value = await _maybe_call(shell_ui_builder)
        if value is None:
            value = build_shell_ui_model(config, base_dir=Path("."))
        return _json({"status": "ok", "ui_model": value})

    async def ui_drilldown(request: Any) -> Any:
        _check_api_token(request, token, token_expires_at)
        panel = str(request.match_info.get("panel") or "overview")
        value = await _maybe_call(shell_drilldown_builder, panel)
        if value is None:
            value = build_shell_drilldown(panel, config=config, base_dir=Path("."))
        return _json({"status": "ok", "drilldown": value})

    async def action_catalog(request: Any) -> Any:
        _check_api_token(request, token, token_expires_at)
        value = await _maybe_call(action_catalog_builder)
        if value is None:
            value = build_shell_action_catalog(config)
        return _json({"status": "ok", "actions": value})

    async def dashboard_cards(request: Any) -> Any:
        _check_api_token(request, token, token_expires_at)
        value = await _maybe_call(dashboard_builder)
        if value is None:
            snapshot_value = await _maybe_call(snapshot_builder) or {}
            release_value = await _maybe_call(release_check_builder)
            if release_value is None:
                release_value = build_release_checklist(".")
            value = build_shell_dashboard_cards(
                snapshot=snapshot_value,
                release_report=release_value,
                policy=build_shell_policy(route_count=19),
            )
        return _json({"status": "ok", "dashboard": value})

    async def accounts(request: Any) -> Any:
        _check_api_token(request, token, token_expires_at)
        value = await _maybe_call(accounts_builder)
        if value is None:
            profiles = ((config.get("accounts") or {}).get("profiles") or {}) if isinstance(config, Mapping) else {}
            value = {"profiles": sorted(str(name) for name in profiles) if isinstance(profiles, Mapping) else []}
        return _json({"status": "ok", "accounts": value})

    async def logs_summary(request: Any) -> Any:
        _check_api_token(request, token, token_expires_at)
        value = await _maybe_call(log_summary_builder) or {"status": "not_configured"}
        return _json({"status": "ok", "logs": value})

    async def diagnostics(request: Any) -> Any:
        _check_api_token(request, token, token_expires_at)
        value = await _maybe_call(diagnostics_builder) or {"status": "not_configured"}
        return _json({"status": "ok", "diagnostics": value})

    async def integrations(request: Any) -> Any:
        _check_api_token(request, token, token_expires_at)
        value = await _maybe_call(integrations_builder) or {"status": "not_configured"}
        return _json({"status": "ok", "integrations": value})

    async def qr_preview(request: Any) -> Any:
        _check_api_token(request, token, token_expires_at)
        payload = await _json_body(request)
        raw_qr = str(payload.get("payload") or payload.get("text") or "")
        try:
            preview = await _maybe_call(qr_previewer, raw_qr)
            if preview is None:
                preview = {"ok": False, "reason": "qr_previewer_not_configured"}
            return _json({"status": "ok", "preview": preview})
        except Exception as exc:
            return _json({"status": "failed", "reason": exc.__class__.__name__, "message": str(exc)}, status=400)

    async def webview_status(request: Any) -> Any:
        _check_api_token(request, token, token_expires_at)
        return _json(build_webview_sync_status(config, provider=_provider_from_config(config)))

    async def webview_cookie_preview(request: Any) -> Any:
        _check_api_token(request, token, token_expires_at)
        payload = await _json_body(request)
        export_value = payload.get("export", payload.get("cookies", []))
        try:
            records = parse_webview_cookie_export(export_value)
            if webview_previewer is not None:
                preview = await _maybe_call(webview_previewer, records)
            else:
                preview = build_webview_cookie_preview(
                    records,
                    config=config,
                    provider=_provider_from_config(config),
                    profile=str(payload.get("profile") or ""),
                )
            return _json({"status": "ok", "preview": preview})
        except WebViewSyncError as exc:
            return _json({"status": "failed", "reason": exc.reason, "message": str(exc)}, status=400)

    async def radar_assist(request: Any) -> Any:
        _check_api_token(request, token, token_expires_at)
        value = await _maybe_call(radar_assist_builder)
        if value is None:
            value = build_radar_map_assist(config, provider=_provider_from_config(config))
        return _json({"status": "ok", "radar_assist": value})

    async def radar_validate(request: Any) -> Any:
        _check_api_token(request, token, token_expires_at)
        model = await _maybe_call(radar_assist_builder)
        if model is None:
            model = build_radar_map_assist(config, provider=_provider_from_config(config))
        boundary = []
        if isinstance(model, Mapping):
            for point in model.get("boundary", []) or []:
                if isinstance(point, Mapping):
                    boundary.append([point.get("lat"), point.get("lon")])
        result = validate_radar_point(request.query.get("lat"), request.query.get("lon"), boundary=boundary)
        return _json({"status": "ok" if result.get("ok") else "failed", "validation": result})

    async def action_handoff(request: Any) -> Any:
        _check_api_token(request, token, token_expires_at)
        payload = await _json_body(request)
        action = str(payload.get("action") or "").strip().lower().replace("-", "_")
        templates = {
            "qr_submit": "python -m troTHU.tron qr paste --yes <QR_URL_OR_PAYLOAD>",
            "qr_fanout": "python -m troTHU.tron qr paste --all --yes <QR_URL_OR_PAYLOAD>",
            "webview_import": "python -m troTHU.tron webview import --input cookies.json --profile default --save --json",
            "reauth": "python -m troTHU.tron bot serve --adapter generic",
            "release_check": "python -m troTHU.tron release-check --json",
        }
        template = templates.get(action) or "python -m troTHU.tron status --json"
        return _json(
            {
                "status": "ok",
                "handoff": {
                    "action": action or "status",
                    "command_template": template,
                    "executes_command": False,
                    "writes_state": False,
                    "notes": ["copy_template_and_run_in_terminal", "payload_values_are_not_echoed"],
                },
            }
        )

    async def release_check(request: Any) -> Any:
        _check_api_token(request, token, token_expires_at)
        value = await _maybe_call(release_check_builder)
        if value is None:
            value = build_release_checklist(".")
        return _json({"status": "ok", "release": value})

    async def release_plan(request: Any) -> Any:
        _check_api_token(request, token, token_expires_at)
        value = await _maybe_call(release_plan_builder)
        if value is None:
            value = build_release_build_plan(".")
        return _json({"status": "ok", "release_plan": value})

    app.router.add_get("/app", app_page)
    app.router.add_get("/app/api/health", health)
    app.router.add_get("/app/api/dashboard/cards", dashboard_cards)
    app.router.add_get("/app/api/snapshot", snapshot)
    app.router.add_get("/app/api/accounts", accounts)
    app.router.add_get("/app/api/logs/summary", logs_summary)
    app.router.add_get("/app/api/diagnostics", diagnostics)
    app.router.add_get("/app/api/integrations/capabilities", integrations)
    app.router.add_post("/app/api/qr/preview", qr_preview)
    app.router.add_get("/app/api/webview/status", webview_status)
    app.router.add_post("/app/api/webview/cookies/preview", webview_cookie_preview)
    app.router.add_get("/app/api/radar/assist", radar_assist)
    app.router.add_get("/app/api/radar/validate", radar_validate)
    app.router.add_post("/app/api/actions/handoff", action_handoff)
    app.router.add_get("/app/api/release/check", release_check)
    app.router.add_get("/app/api/release/plan", release_plan)
    app.router.add_get("/app/api/shell/policy", shell_policy)
    app.router.add_get("/app/api/ui/model", ui_model)
    app.router.add_get("/app/api/ui/drilldown/{panel}", ui_drilldown)
    app.router.add_get("/app/api/actions/catalog", action_catalog)
    return app


async def run_app_shell(
    config: Mapping[str, Any],
    *,
    host: str = "127.0.0.1",
    port: int = 8790,
    open_browser: bool = False,
    token_ttl_seconds: int = 900,
    **builder_kwargs: Any,
) -> None:
    """Run the optional companion shell until cancelled."""
    if web is None:  # pragma: no cover
        raise RuntimeError("aiohttp.web is not installed. Run `pip install -e .`.")
    token = secrets.token_urlsafe(18)
    token_expires_at = time.time() + max(1, int(token_ttl_seconds or 900))
    app = create_app_shell(config, token=token, token_expires_at=token_expires_at, **builder_kwargs)
    runner = web.AppRunner(app)
    await runner.setup()
    site = web.TCPSite(runner, host, int(port))
    await site.start()
    url = "http://{}:{}/app".format(host, int(port))
    if open_browser:
        webbrowser.open("{}?token={}".format(url, token))
    try:
        await asyncio.Event().wait()
    finally:
        await runner.cleanup()

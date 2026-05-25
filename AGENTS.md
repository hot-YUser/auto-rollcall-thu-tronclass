# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Commands

```bash
# Run the tool
python -m troTHU.tron                          # interactive monitor loop
python -m troTHU.tron run --no-input           # monitor (no keyboard input)
python -m troTHU.tron init                     # initialize config
python -m troTHU.tron doctor --json            # diagnostics
python -m troTHU.tron status --json            # account/session state
python -m troTHU.tron bot serve --adapter discord  # start bot server

# Tests
python -m unittest discover -v                 # full test suite
python -m unittest tests/test_<name>.py        # single test file

# Validation
python -m troTHU.tron package-check --json     # verify imports & bundled files
python -m troTHU.tron release-build --dry-run --json  # build simulation

# Install
pip install -e .                               # base install
pip install -e .[packaging]                    # + PyInstaller
pip install -e .[qr-image]                     # + OpenCV for QR from images
pip install -e .[browser]                      # + Playwright for browser login
```

## Architecture

Entry point: `troTHU/tron.py` → `runtime_context.py` → `cli_main.py`. Console scripts `trothu` and `auto-rollcall-thu-tronclass` both point here.

**Core layers (top to bottom):**

1. **CLI / Runtime Context** — `tron.py`, `runtime_context.py`, `cli_main.py`. Parses commands, sets up logging, dispatches to subcommands.

2. **Config & Account State** — `simple_config.py` (custom whitespace-tolerant YAML parser), `config_runtime.py`, `account_store.py` (multi-profile with keyring), `account_runtime_store.py` (session state, validation records).

3. **Monitor Loop** — `monitor_runtime.py`. Main async event loop: login retry, schedule checking, rollcall polling. Orchestrates auth, provider, and rollcall engine.

4. **Provider Abstraction** — `providers.py`. Abstract interface for schools (THU and TKU are "ready" providers). Providers declare capability flags (number, radar, QR, course discovery, bot adapters). All API endpoints are routed through the active provider.

5. **Auth** — `auth_runtime.py`. CAS/SSO login, cookie caching, Playwright browser-assisted login as fallback (auto for TKU, opt-in for others).

6. **Rollcall Engine** — `rollcall_engine.py` classifies rollcall type; handlers in `number_rollcall.py`, `radar_rollcall.py`, `qr_rollcall.py`. Number rollcall tries direct code lookup first, then brute-force. Radar uses `radar_solver.py` (triangulation from 3–4 distance observations). QR parses payload and matches pending records.

7. **Bot Integrations** — `bot_runtime.py` orchestrates adapters: `discord_adapter.py` (HTTP Interactions, recommended), `discord_gateway.py` (Gateway mode), `line_adapter.py` (with signature verification), `telegram_adapter.py` (outbound notification only — no inbound commands). Multi-user admin/binding system with audit logging and cooldowns on dangerous actions.

8. **Notification** — `notification_bus.py` (event dispatch), `notification_delivery.py` (multi-channel delivery).

9. **App Shell** — `app_shell.py`, `app_shell_dashboard.py`. Localhost-only, read-only companion web UI. No credential reauth or QR submission in web UI.

10. **Research Mode** — `research_sandbox.py`, `research_mode.py`. Opt-in API shape exploration (no answer values captured). Requires triple-flag opt-in: `enabled` + `allow_api_exploration` + `allow_risky_probe`. Risky probe targets (shape-only): `student_rollcalls`, `lite`, `ongoing_rollcalls`.

11. **Diagnostic Capture** — `rollcall_capture.py` + `realtime_capture.py`. On every rollcall detection in the monitor loop (`run_full_rollcall_capture` / `run_realtime_capture` in `rollcall_runtime.py` `check_rollcall`), records the **complete, unredacted** server responses to `log/rollcall_capture/` (gitignored). `rollcall_capture.py` polls student-readable REST endpoints for the detected rollcall (`lite`, `student_rollcalls`, `answers`, rollcall detail, `rollcall_status/.../result`, course `rollcalls`/`students_rollcalls`/detail). `realtime_capture.py` (QR/unsupported only, once per rollcall id) captures the notification subsystem — `org-settings` (reveals the `ntf` pubsub host), `users/me`, notifications REST, and a best-effort atmosphere WebSocket frame log at `{ntf}/pubsub/{userID}` (`X-SESSION-ID`). Both run under the bare `python -m troTHU.tron`; default-on, toggle via `capture.rollcall_full_capture` / `capture.realtime_capture` (and `capture.org_id`, default `1`) in `config.advanced.yaml`. Endpoint set was reverse-engineered from the decompiled app (`35580.js`/`65655.js`); the QR `data` token is a server-issued `<unix-ts><md5>` value, so capture is the empirical path to find where it leaks.

12. **Release/Validation** — `release_builder.py` (PyInstaller zip packaging), `real_validation.py` (R1 live / R2 release build / R3 docs), `release_checklist.py` (pre-release gates), `provider_ready_gate.py`.

## Key Conventions

**Import style**: Every module supports both `from troTHU.module import` (package) and `import module` (direct script execution). Maintain this dual-import pattern.

**Config format**: `config.yaml` uses custom whitespace-tolerant YAML (`simple_config.py`). School names are case-insensitive. `config.advanced.yaml` holds opt-in/advanced settings (`auth.browser_assisted_login.enabled`, `research.*`, timezone, etc.).

**Tests**: 58 test files under `tests/`. A `fake_tron_server.py` provides an isolated fake TronClass server — no real API calls in tests. `test_readme_usage.py` validates documented CLI examples.

**Security gates**: Research probe, browser login (non-TKU), and dangerous bot actions all require explicit opt-in. Validation records and Research Mode output are sanitized — no passwords, raw responses, QR payloads, or number codes ever stored.

**Diagnostic Capture is the deliberate exception**: `rollcall_capture.py` / `realtime_capture.py` write **raw, unredacted** server responses to `log/rollcall_capture/` for personal breakthrough analysis. This is safe only because `log/` is gitignored and never published — keep it that way; never sanitize-then-lose data here, and never commit captures.

**Never commit**: `state/`, `log/`, `build/`, `dist/`, `cookies/`, real QR payloads, credentials, and the local reverse-engineering reference `APP和網頁前端/`.

**Platform note**: Windows primary (Notepad integration for config editing); cross-platform where possible.

# -*- mode: python ; coding: utf-8 -*-

from pathlib import Path

from PyInstaller.utils.hooks import collect_submodules


APP_NAME = "auto-rollcall-thu-tronclass"
ROOT = Path(globals().get("SPECPATH", ".")).resolve()
ENTRYPOINT = ROOT / "troTHU" / "tron.py"


def safe_collect_submodules(package_name):
    try:
        return collect_submodules(package_name)
    except Exception:
        return []


# Keep local user data outside the bundle. The executable creates or updates
# config.yaml next to itself on first run, and runtime folders such as state/,
# log/, cookies/, tests/, and external reference projects must never be bundled.
# Keep HIDDEN_IMPORTS in sync with `python -m troTHU.tron package-check --json`;
# frozen builds require lazy connection-probe, radar, and teacher helper modules.
DATAS = []

HIDDEN_IMPORTS = sorted(
    set(
        [
            "troTHU.account_store",
            "troTHU.account_runtime_store",
            "troTHU.adapter_bridge",
            "troTHU.adapter_server",
            "troTHU.auth_runtime",
            "troTHU.app_blueprint",
            "troTHU.app_qr_experience",
            "troTHU.app_shell",
            "troTHU.app_shell_dashboard",
            "troTHU.app_shell_polish",
            "troTHU.bot_handlers",
            "troTHU.bot_runtime",
            "troTHU.bot_status",
            "troTHU.cli_accounts",
            "troTHU.cli_app",
            "troTHU.cli_bot",
            "troTHU.cli_courses",
            "troTHU.cli_main",
            "troTHU.cli_parser",
            "troTHU.cli_provider",
            "troTHU.cli_qr",
            "troTHU.cli_research",
            "troTHU.cli_system",
            "troTHU.cli_teacher",
            "troTHU.clipboard_qr",
            "troTHU.config_runtime",
            "troTHU.config_editor",
            "troTHU.config_view",
            "troTHU.connection_probe",
            "troTHU.course_discovery",
            "troTHU.debug_capture",
            "troTHU.discord_adapter",
            "troTHU.discord_gateway",
            "troTHU.global_radar_solver",
            "troTHU.local_scanner",
            "troTHU.line_adapter",
            "troTHU.input_safety",
            "troTHU.logging_runtime",
            "troTHU.monitor_runtime",
            "troTHU.notification_delivery",
            "troTHU.number_rollcall",
            "troTHU.number_runtime",
            "troTHU.notification_bus",
            "troTHU.observability",
            "troTHU.package_diagnostics",
            "troTHU.pending_qr",
            "troTHU.providers",
            "troTHU.qr_rollcall",
            "troTHU.qr_runtime",
            "troTHU.qr_teacher_runtime",
            "troTHU.radar_rollcall",
            "troTHU.radar_map_assist",
            "troTHU.radar_solver",
            "troTHU.radar_runtime",
            "troTHU.release_builder",
            "troTHU.research_mode",
            "troTHU.research_sandbox",
            "troTHU.release_checklist",
            "troTHU.rollcall_progress",
            "troTHU.rollcall_engine",
            "troTHU.rollcall_models",
            "troTHU.rollcall_runtime",
            "troTHU.runtime_context",
            "troTHU.runtime_helpers",
            "troTHU.config_format",
            "troTHU.group_runtime",
            "troTHU.status_reports",
            "troTHU.telegram_adapter",
            "troTHU.teacher_rollcall",
            "troTHU.tron_http",
            "troTHU.ux_tools",
            "troTHU.webview_sync",
            "aiohttp",
            "aiohttp.web",
            "yaml",
        ]
        + safe_collect_submodules("nacl")
    )
)

EXCLUDES = [
    "aiohttp.pytest_plugin",
    "cv2",
    "greenlet",
    "keyring",
    "keyrings",
    "mypy",
    "numpy",
    "PIL",
    "Pillow",
    "playwright",
    "playwright.async_api",
    "pyee",
    "pyzbar",
    "pydantic",
    "pydantic_core",
    "pytest",
    "setuptools",
    "tests",
]

a = Analysis(
    [str(ENTRYPOINT)],
    pathex=[str(ROOT)],
    binaries=[],
    datas=DATAS,
    hiddenimports=HIDDEN_IMPORTS,
    hookspath=[],
    hooksconfig={},
    runtime_hooks=[],
    excludes=EXCLUDES,
    noarchive=False,
    optimize=0,
)
pyz = PYZ(a.pure)

exe = EXE(
    pyz,
    a.scripts,
    [],
    exclude_binaries=True,
    name=APP_NAME,
    debug=False,
    bootloader_ignore_signals=False,
    strip=False,
    # UPX can trigger more antivirus false positives for small Windows tools.
    upx=False,
    console=True,
    disable_windowed_traceback=False,
    argv_emulation=False,
    target_arch=None,
    codesign_identity=None,
    entitlements_file=None,
)
coll = COLLECT(
    exe,
    a.binaries,
    a.datas,
    strip=False,
    upx=False,
    upx_exclude=[],
    name=APP_NAME,
)

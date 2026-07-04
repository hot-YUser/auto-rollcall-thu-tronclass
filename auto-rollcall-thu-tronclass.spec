# -*- mode: python ; coding: utf-8 -*-

from pathlib import Path

from PyInstaller.utils.hooks import collect_submodules, collect_all, collect_data_files


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
# Bundle the factory-default school registry so providers.py can seed
# config.advanced.toml on first run (loaded via __file__/_MEIPASS in providers._seed_path).
DATAS = [
    (str(ROOT / "troTHU" / "schools.toml"), "troTHU"),
]

HIDDEN_IMPORTS = sorted(
    set(
        [
            "troTHU.account_store",
            "troTHU.account_runtime_store",
            "troTHU.addon_runtime",
            "troTHU.adapter_bridge",
            "troTHU.adapter_server",
            "troTHU.answer_flow",
            "troTHU.auth_runtime",
            "troTHU.autoanswer_runtime",
            "troTHU.autoanswer_store",
            "troTHU.app_qr_experience",
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
            "troTHU.config_runtime",
            "troTHU.config_editor",
            "troTHU.config_view",
            "troTHU.connection_probe",
            "troTHU.course_context",
            "troTHU.course_discovery",
            "troTHU.debug_capture",
            "troTHU.discord_adapter",
            "troTHU.global_radar_solver",
            "troTHU.local_scanner",
            "troTHU.llm_answerer",
            "troTHU.login_flow",
            "troTHU.login_probe",
            "troTHU.line_adapter",
            "troTHU.input_safety",
            "troTHU.log_core",
            "troTHU.console_ui",
            "troTHU.notify_runtime",
            "troTHU.fatal_errors",
            "troTHU.monitor_runtime",
            "troTHU.notification_delivery",
            "troTHU.number_rollcall",
            "troTHU.number_runtime",
            "troTHU.notification_bus",
            "troTHU.observability",
            "troTHU.ocr_captcha",
            "troTHU.ocr_sidecar",
            "troTHU.package_diagnostics",
            "troTHU.pending_qr",
            "troTHU.providers",
            "troTHU.qr_rollcall",
            "troTHU.qr_runtime",
            "troTHU.qr_teacher_runtime",
            "troTHU.quiz_engine",
            "troTHU.quiz_models",
            "troTHU.radar_rollcall",
            "troTHU.radar_map_assist",
            "troTHU.radar_solver",
            "troTHU.redaction",
            "troTHU.radar_runtime",
            "troTHU.self_registration_runtime",
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

# The heavy OCR stack (ddddocr/onnxruntime/cv2/numpy/PIL) is NOT bundled — it lives
# in the downloadable add-on bundle as the `ocr-sidecar` sidecar (see ocr-sidecar.spec /
# troTHU/addon_runtime.py). Keeping the default exe lean.
EXCLUDES = [
    "aiohttp.pytest_plugin",
    "cv2",
    "ddddocr",
    "keyring",
    "keyrings",
    "mypy",
    "numpy",
    "onnxruntime",
    "PIL",
    "Pillow",
    "pyzbar",
    "pydantic",
    "pydantic_core",
    "pytest",
    "setuptools",
    "tests",
]

playwright_datas, playwright_binaries, playwright_hiddenimports = collect_all("playwright")
playwright_datas_extra = collect_data_files("playwright", include_py_files=True)

# Strip the 92MB node driver (driver/node.exe) — it's the bulk of playwright and is
# downloaded in the add-on bundle; browser_install sets PLAYWRIGHT_NODEJS_PATH to it.
# The small driver/package/ (cli.js) stays, since playwright resolves it package-relative.
def _strip_node(entries):
    # Match the source filename (collect_all puts node.exe in entry[0]; the dest in
    # entry[1] may be just the "playwright/driver" directory).
    return [e for e in entries if str(e[0]).replace("\\", "/").rsplit("/", 1)[-1].lower() != "node.exe"]

combined_datas = DATAS + _strip_node(playwright_datas) + _strip_node(playwright_datas_extra)
combined_binaries = _strip_node(playwright_binaries)
combined_hiddenimports = sorted(
    set(
        HIDDEN_IMPORTS
        + playwright_hiddenimports
        + [
            "playwright",
            "playwright.async_api",
            "playwright._impl._driver",
            "greenlet",
            "pyee",
            "troTHU.browser_install",
            "troTHU.addon_runtime",
            "troTHU.ocr_captcha",
            "troTHU.ocr_sidecar",
        ]
    )
)

a = Analysis(
    [str(ENTRYPOINT)],
    pathex=[str(ROOT)],
    binaries=combined_binaries,
    datas=combined_datas,
    hiddenimports=combined_hiddenimports,
    hookspath=[],
    hooksconfig={},
    runtime_hooks=[],
    excludes=EXCLUDES,
    noarchive=False,
    optimize=0,
)
# node.exe is re-added by PyInstaller's bundled playwright hook (not just collect_all),
# so strip it from the final TOCs here — this is the authoritative removal of the 92MB
# driver. driver/package (cli.js) stays; browser_install downloads node.exe on demand.
a.datas = [t for t in a.datas if not str(t[0]).replace("\\", "/").lower().endswith("node.exe")]
a.binaries = [t for t in a.binaries if not str(t[0]).replace("\\", "/").lower().endswith("node.exe")]
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

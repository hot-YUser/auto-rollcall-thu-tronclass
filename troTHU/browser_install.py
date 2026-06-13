from __future__ import annotations

import os
import sys
from pathlib import Path
import subprocess

try:
    import troTHU.runtime_context as ctx
except ImportError:
    import runtime_context as ctx  # type: ignore


def playwright_browsers_path() -> Path:
    base_path = Path(ctx.BASE_DIR) / "state" / "browser"
    try:
        base_path.parent.mkdir(parents=True, exist_ok=True)
        test_file = base_path.parent / ".write_test"
        test_file.touch()
        test_file.unlink()
        return base_path
    except Exception:
        local_app_data = os.environ.get("LOCALAPPDATA")
        if local_app_data:
            fallback_path = Path(local_app_data) / "auto-rollcall-thu-tronclass" / "ms-playwright"
            return fallback_path
        return Path.home() / ".cache" / "ms-playwright"


def apply_browsers_path_env() -> None:
    """Pin PLAYWRIGHT_BROWSERS_PATH in this process's environment so that the
    Playwright node driver (spawned on async_playwright().start() / __aenter__)
    and `playwright install` agree on where the browser binary lives. MUST be
    called BEFORE launching or entering playwright — setting it afterwards has no
    effect on an already-spawned driver, which would then look in the default
    location instead of state/browser."""
    try:
        os.environ["PLAYWRIGHT_BROWSERS_PATH"] = str(playwright_browsers_path())
    except Exception:
        pass


def browser_binary_present() -> bool:
    path = playwright_browsers_path()
    if not path.exists():
        return False
    for p in path.glob("chromium-*"):
        if sys.platform.startswith("win"):
            executables = list(p.rglob("chrome.exe"))
        else:
            executables = list(p.rglob("chrome"))
        if executables and any(e.is_file() for e in executables):
            return True
    return False


async def ensure_browser_binary_installed() -> None:
    """Download the Chromium binary on first use (the package + node driver are
    already bundled). Auto-downloads with progress when allowed — no interactive
    stdin prompt, because the monitor's msvcrt "press any key to edit config"
    watcher owns the console and would intercept it. Configuring a URL school is
    treated as consent; set auth.browser_assisted_login.allow_browser_download =
    false to opt out."""
    apply_browsers_path_env()
    if browser_binary_present():
        return

    config = ctx.get_browser_assisted_login_config()
    if not bool(config.get("allow_browser_download", True)):
        raise RuntimeError(
            "browser_download_disabled: 缺少 Chromium 瀏覽器，且 "
            "auth.browser_assisted_login.allow_browser_download = false。"
            "請改為 true，或手動執行 playwright install chromium。"
        )

    ctx.log_print("【瀏覽器登入】首次使用需下載 Chromium（約 150MB），開始下載，請稍候…")

    import asyncio
    from playwright._impl._driver import compute_driver_executable, get_driver_env

    driver = compute_driver_executable()
    cmd = list(driver) if isinstance(driver, (tuple, list)) else [driver]
    cmd.extend(["install", "chromium"])

    env = get_driver_env()
    env["PLAYWRIGHT_BROWSERS_PATH"] = str(playwright_browsers_path())

    try:
        process = await asyncio.create_subprocess_exec(
            *cmd,
            env=env,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
        )
        last = ""
        while True:
            line_bytes = await process.stdout.readline()
            if not line_bytes:
                break
            line_str = line_bytes.decode("utf-8", errors="replace").strip()
            if not line_str:
                continue
            low = line_str.lower()
            if "download" in low and last != "downloading":
                ctx.log_print("【瀏覽器登入】正在下載 Chromium…")
                last = "downloading"
            elif "extract" in low and last != "extracting":
                ctx.log_print("【瀏覽器登入】正在解壓縮…")
                last = "extracting"
            else:
                ctx.log_print("[Playwright] {}".format(line_str))
        await process.wait()
        if process.returncode != 0:
            raise RuntimeError("playwright install chromium 失敗（exit {}）".format(process.returncode))
        ctx.log_print("【瀏覽器登入】Chromium 安裝完成。")
    except Exception as exc:
        raise RuntimeError("Chromium 下載/安裝失敗：{}".format(exc))

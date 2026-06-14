from __future__ import annotations

import os
import shutil
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


def prune_unneeded_browser_components() -> None:
    """Headed manual / API login never uses the headless shell (a second browser
    build), ffmpeg (video recording) or winldd (Windows dependency checker).
    --no-shell already skips the headless shell; remove ffmpeg-* / winldd-*
    (and any stray headless-shell) best-effort so state/browser keeps only
    chromium-*. Failures are non-fatal."""
    try:
        base = playwright_browsers_path()
    except Exception:
        return
    for pattern in ("ffmpeg-*", "winldd-*", "chromium_headless_shell-*"):
        try:
            for item in base.glob(pattern):
                if item.is_dir():
                    shutil.rmtree(item, ignore_errors=True)
                else:
                    try:
                        item.unlink()
                    except Exception:
                        pass
        except Exception:
            pass


async def ensure_browser_binary_installed() -> None:
    """Download the Chromium binary on first use (the package + node driver are
    already bundled). Auto-downloads when allowed — no interactive stdin prompt,
    because the monitor's msvcrt "press any key to edit config" watcher owns the
    console and would intercept it. Configuring a URL school is treated as
    consent; set auth.browser_assisted_login.allow_browser_download = false to
    opt out. Downloads only the headed Chromium (--no-shell) and prunes
    ffmpeg/winldd. Progress goes to the in-place status line (one log at start,
    one at completion) rather than scrolling."""
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
    import re
    from playwright._impl._driver import compute_driver_executable, get_driver_env

    driver = compute_driver_executable()
    cmd = list(driver) if isinstance(driver, (tuple, list)) else [driver]
    # --no-shell: skip the separate chromium headless-shell build (unused by
    # headed manual login). ffmpeg/winldd still come with the browser and are
    # pruned after install.
    cmd.extend(["install", "chromium", "--no-shell"])

    env = get_driver_env()
    env["PLAYWRIGHT_BROWSERS_PATH"] = str(playwright_browsers_path())

    try:
        interactive = bool(ctx.console_is_interactive())
    except Exception:
        interactive = False
    pct_re = re.compile(r"(\d{1,3})\s*%")

    try:
        process = await asyncio.create_subprocess_exec(
            *cmd,
            env=env,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
        )
        # Read in chunks (not lines): the progress bar updates with \r and never
        # emits a newline until done, so readline() would block. Scan the tail
        # for the latest percentage and fold it into the in-place status line.
        buf = ""
        last_pct = -1
        while True:
            chunk = await process.stdout.read(256)
            if not chunk:
                break
            if not interactive:
                continue
            buf = (buf + chunk.decode("utf-8", errors="replace"))[-400:]
            matches = pct_re.findall(buf)
            if matches:
                pct = int(matches[-1])
                if 0 <= pct <= 100 and pct != last_pct:
                    last_pct = pct
                    ctx.status_print("下載 Chromium… {}%".format(pct))
        await process.wait()
        if process.returncode != 0:
            raise RuntimeError("playwright install chromium 失敗（exit {}）".format(process.returncode))
    except Exception as exc:
        raise RuntimeError("Chromium 下載/安裝失敗：{}".format(exc))

    prune_unneeded_browser_components()
    ctx.log_print("【瀏覽器登入】Chromium 安裝完成。")

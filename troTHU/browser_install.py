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


def is_interactive() -> bool:
    input_enabled = getattr(ctx, "INPUT_ENABLED", None)
    if input_enabled is not None:
        return bool(input_enabled)
    try:
        return sys.stdin is not None and sys.stdin.isatty()
    except Exception:
        return False


async def ensure_browser_binary_installed() -> None:
    apply_browsers_path_env()
    if browser_binary_present():
        return
        
    config = ctx.get_browser_assisted_login_config()
    allow_download = bool(config.get('allow_browser_download', False))
    
    if not allow_download:
        raise RuntimeError(
            "Playwright browser binary not found. To download and install Chromium automatically (~150MB), "
            "set `auth.browser_assisted_login.allow_browser_download = true` in config.advanced.toml."
        )
        
    if not is_interactive():
        raise RuntimeError("browser_download_required")
        
    ctx.log_print("【提示】未偵測到 Playwright 瀏覽器二進位檔。")
    ctx.log_print("準備下載並安裝 Chromium 瀏覽器（大小約 150MB，下載完成後會自動解壓）。")
    ctx.log_print("請按 Enter 鍵同意下載安裝，或按 Ctrl+C 取消：")
    
    try:
        import asyncio
        await asyncio.get_event_loop().run_in_executor(None, sys.stdin.readline)
    except KeyboardInterrupt:
        raise RuntimeError("User cancelled browser download.")
    except Exception as exc:
        raise RuntimeError("Failed to read user confirmation: {}".format(exc))
        
    ctx.log_print("開始安裝 Playwright Chromium...")
    
    from playwright._impl._driver import compute_driver_executable, get_driver_env
    
    driver = compute_driver_executable()
    if isinstance(driver, (tuple, list)):
        cmd = list(driver)
    else:
        cmd = [driver]
        
    cmd.extend(["install", "chromium"])
    
    env = get_driver_env()
    browsers_path = playwright_browsers_path()
    env["PLAYWRIGHT_BROWSERS_PATH"] = str(browsers_path)
    
    try:
        process = await asyncio.create_subprocess_exec(
            *cmd,
            env=env,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT
        )
        while True:
            line_bytes = await process.stdout.readline()
            if not line_bytes:
                break
            line_str = line_bytes.decode("utf-8", errors="replace").strip()
            if line_str:
                if "downloading" in line_str.lower():
                    ctx.log_print("正在下載 Chromium 瀏覽器...")
                elif "extracting" in line_str.lower():
                    ctx.log_print("正在解壓縮 Chromium 瀏覽器...")
                else:
                    ctx.log_print(f"[Playwright] {line_str}")
                    
        await process.wait()
        if process.returncode != 0:
            raise RuntimeError("Playwright install command failed with exit code {}".format(process.returncode))
            
        ctx.log_print("Playwright Chromium 安裝成功！")
        
    except Exception as exc:
        raise RuntimeError("Playwright installation failed: {}".format(exc))

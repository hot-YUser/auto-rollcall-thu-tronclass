"""Open and reload the human config with the Windows legacy Notepad."""

from __future__ import annotations

import subprocess
from pathlib import Path

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore


LEGACY_NOTEPAD_PATH = Path("C:/Windows/System32/notepad.exe")


def open_config_in_legacy_notepad(path: Path, *, wait: bool = True) -> ctx.Dict[str, ctx.Any]:
    config_path = Path(path)
    if not LEGACY_NOTEPAD_PATH.exists():
        return {"ok": False, "status": "legacy_notepad_missing", "path": str(LEGACY_NOTEPAD_PATH)}
    config_path.parent.mkdir(parents=True, exist_ok=True)
    if not config_path.exists():
        if config_path.name == ctx.CONFIG_ADVANCED_PATH.name:
            ctx.write_advanced_config_file({})
        else:
            ctx.write_config_file(ctx.copy.deepcopy(ctx.DEFAULT_CONFIG))
    process = subprocess.Popen([str(LEGACY_NOTEPAD_PATH), str(config_path)])
    if wait:
        process.wait()
    return {"ok": True, "status": "opened", "editor": str(LEGACY_NOTEPAD_PATH), "path": str(config_path)}


def config_now_value(config: ctx.Mapping[str, ctx.Any] | None = None) -> str:
    cfg = config or ctx.CONFIG
    simple = cfg.get("_simple") if isinstance(cfg.get("_simple"), dict) else {}
    return ctx.normalize_text(simple.get("now"))


def effective_config_now_value(config: ctx.Mapping[str, ctx.Any] | None = None) -> str:
    cfg = config or ctx.CONFIG
    simple = cfg.get("_simple") if isinstance(cfg.get("_simple"), dict) else {}
    raw_now = ctx.normalize_text(simple.get("now"))
    if raw_now:
        return raw_now
    return ctx.normalize_text(ctx.infer_single_account_now(simple))


def display_config_now_value(value: ctx.Any, config: ctx.Mapping[str, ctx.Any] | None = None) -> str:
    text = ctx.normalize_text(value)
    return text or "-"


def reload_config_after_editor() -> ctx.Dict[str, ctx.Any]:
    ctx.CONFIG_BOOTSTRAPPED = False
    config = ctx.bootstrap_config(force=True)
    return {"ok": True, "status": "reloaded", "now": config_now_value(config), "effective_now": effective_config_now_value(config)}


def config_is_ready_to_run() -> bool:
    """True when a real (user, password) can be resolved to log in with.

    Mirrors auth_runtime.login's missing-credentials guard
    (has_real_credential of both user and password) so the startup check and the
    monitor loop agree on what "configured" means. Blank, placeholder, or the
    friendly template's example credentials all resolve to "not ready"."""
    user, passwd, _ = ctx.resolve_credentials()
    return ctx.has_real_credential(user) and ctx.has_real_credential(passwd)


def ensure_config_now_or_open_editor(config_path: Path | None = None) -> ctx.Dict[str, ctx.Any]:
    path = Path(config_path or ctx.CONFIG_PATH)
    raw_now = config_now_value(ctx.CONFIG)
    effective_now = effective_config_now_value(ctx.CONFIG)
    if config_is_ready_to_run():
        if not raw_now and effective_now:
            ctx.log_print("config.conf 的 now 是空白；偵測到只有一個帳號，將直接使用 `{}`。".format(effective_now))
            return {"ok": True, "status": "inferred_single_account", "now": "", "effective_now": effective_now}
        return {"ok": True, "status": "ready", "now": raw_now, "effective_now": effective_now}
    # Not ready to log in (blank / placeholder / still-example credentials): open the
    # editor exactly once. If it is still not ready after the user closes Notepad, hand
    # back to the caller — which keeps monitoring and waits for a keypress rather than
    # exiting or auto-opening again.
    ctx.log_print("尚未偵測到可用的帳號密碼，將用舊版記事本開啟 config.conf。")
    opened = ctx.open_config_in_legacy_notepad(path, wait=True)
    if not opened.get("ok"):
        return opened
    reloaded = ctx.reload_config_after_editor()
    if config_is_ready_to_run():
        return reloaded
    return {
        "ok": False,
        "status": "still_unconfigured",
        "message": "仍未偵測到可用帳密，將進入監控；按任意鍵可再次編輯 config.conf。",
    }


async def watch_any_key_to_edit_config(shutdown_event: ctx.asyncio.Event, session: ctx.Any = None) -> None:
    if ctx.os.name != "nt":
        await shutdown_event.wait()
        return
    try:
        import msvcrt
    except Exception:
        await shutdown_event.wait()
        return
    while not shutdown_event.is_set():
        await ctx.asyncio.sleep(0.25)
        if not msvcrt.kbhit():
            continue
        try:
            msvcrt.getwch()
        except Exception:
            pass
        ctx.log_print("偵測到按鍵，開啟 config.conf。關閉記事本後會重新載入設定。")
        before = effective_config_now_value(ctx.CONFIG)
        with ctx.pause_status_line():
            opened = await ctx.asyncio.to_thread(ctx.open_config_in_legacy_notepad, ctx.CONFIG_PATH, wait=True)
        if not opened.get("ok"):
            ctx.log_print("無法開啟舊版記事本: {}".format(opened.get("status")))
            continue
        ctx.reload_config_after_editor()
        after = effective_config_now_value(ctx.CONFIG)
        ctx.LAST_LOGIN_RESULT = ctx.LoginResult(status="transient_error", credential_source="config_reload")
        if after != before:
            ctx.log_print("設定 now 已變更為 `{}`，將清除目前 session 並套用新設定。\n{}".format(
                display_config_now_value(after, ctx.CONFIG), ctx.describe_group_target(ctx.CONFIG)))
            ctx.update_monitor_status(target_label=ctx.group_status_label(ctx.CONFIG), redraw=False)
            try:
                if session is not None:
                    session.cookie_jar.clear()
                ctx.clear_session_cookies(ctx.BASE_DIR, ctx.get_active_profile(ctx.CONFIG).name)
            except Exception:
                pass

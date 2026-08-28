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


def display_config_now_value(value: ctx.Any) -> str:
    text = ctx.normalize_text(value)
    return text or "-"


def reload_config_after_editor() -> ctx.Dict[str, ctx.Any]:
    ctx.CONFIG_BOOTSTRAPPED = False
    config = ctx.bootstrap_config(force=True)
    return {"ok": True, "status": "reloaded", "now": config_now_value(config), "effective_now": effective_config_now_value(config)}


def _auth_boundary_snapshot(config: ctx.Mapping[str, ctx.Any]) -> tuple:
    try:
        active = ctx.get_active_profile(config)
        user = ctx.normalize_text(active.user)
        profile = ctx.normalize_text(active.name)
    except Exception:
        user = ""
        profile = ""
    try:
        provider = ctx.normalize_provider_config(config.get('provider', ctx.DEFAULT_CONFIG['provider']))
        provider_key = ctx.normalize_text(provider.get('current')) or ctx.DEFAULT_PROVIDER
    except Exception:
        provider_key = ctx.DEFAULT_PROVIDER
    try:
        endpoints = ctx.get_active_http_endpoints()
        base = ctx.normalize_text(getattr(endpoints, 'base_url', ''))
        login_ep = ctx.normalize_text(getattr(endpoints, 'login_url', '') or getattr(endpoints, 'base_url', ''))
    except Exception:
        base = ""
        login_ep = ""
    effective = ctx.normalize_text(config.get('_simple', {}).get('now', '')) if isinstance(config.get('_simple'), dict) else ''
    if not effective:
        try:
            effective = ctx.normalize_text(ctx.infer_single_account_now(config.get('_simple', {})))
        except Exception:
            effective = ''
    return (provider_key, profile, user, base, login_ep, effective)


def refresh_monitor_identity(
    identity: ctx.Any,
    config: ctx.Mapping[str, ctx.Any] | None = None,
) -> ctx.Dict[str, ctx.Any]:
    if not isinstance(identity, dict):
        return {}
    cfg = config or ctx.CONFIG
    active = ctx.get_active_profile(cfg)
    provider = ctx.normalize_provider_config(
        cfg.get('provider', ctx.DEFAULT_CONFIG['provider'])
    )
    identity.update({
        'profile_name': active.name,
        'user_no': active.user,
        'provider_key': ctx.normalize_text(provider.get('current')) or ctx.DEFAULT_PROVIDER,
    })
    try:
        endpoints = ctx.get_active_http_endpoints()
        identity['base_url'] = ctx.normalize_text(getattr(endpoints, 'base_url', ''))
        identity['login_url'] = ctx.normalize_text(getattr(endpoints, 'login_url', '') or getattr(endpoints, 'base_url', ''))
    except Exception:
        pass
    return identity


def config_is_ready_to_run() -> bool:
    """True when a real (user, password) can be resolved to log in with.

    Interactive-browser providers (a URL school, or now=URL) need NO config
    password — the user types credentials in the browser — so they are always
    "ready". Otherwise mirror auth_runtime.login's missing-credentials guard
    (real user AND password); blank, placeholder, or still-example credentials
    resolve to "not ready"."""
    try:
        if ctx.provider_requires_interactive_browser_login():
            return True
    except Exception:
        pass
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


async def watch_any_key_to_edit_config(
    shutdown_event: ctx.asyncio.Event,
    session: ctx.Any = None,
    *,
    monitor_identity: ctx.Optional[ctx.Dict[str, ctx.Any]] = None,
) -> None:
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
        # v1.7: while an auto-answer is prepared in its delay window, a keypress submits it
        # immediately instead of opening the config editor.
        if ctx.autoanswer_has_pending():
            ctx.request_immediate_autoanswer()
            ctx.log_print("偵測到按鍵，立即送出已備妥的自動答題。")
            continue
        ctx.log_print("偵測到按鍵，開啟 config.conf。關閉記事本後會重新載入設定。")
        before = _auth_boundary_snapshot(ctx.CONFIG)
        with ctx.pause_status_line():
            opened = await ctx.asyncio.to_thread(ctx.open_config_in_legacy_notepad, ctx.CONFIG_PATH, wait=True)
        if not opened.get("ok"):
            ctx.log_print("無法開啟舊版記事本: {}".format(opened.get("status")))
            continue
        ctx.reload_config_after_editor()
        refresh_monitor_identity(monitor_identity, ctx.CONFIG)
        after = _auth_boundary_snapshot(ctx.CONFIG)
        ctx.LAST_LOGIN_RESULT = ctx.LoginResult(status="transient_error", credential_source="config_reload")
        if after != before:
            ctx.log_print("設定 now 已變更為 `{}`，將清除目前 session 並套用新設定。\n{}".format(
                display_config_now_value(after[5]), ctx.describe_group_target(ctx.CONFIG)))
            ctx.update_monitor_status(target_label=ctx.group_status_label(ctx.CONFIG), redraw=False)
            try:
                if session is not None:
                    session.cookie_jar.clear()
                for prof in {before[1], after[1]}:
                    if prof:
                        ctx.clear_session_cookies(ctx.BASE_DIR, prof)
            except Exception:
                pass

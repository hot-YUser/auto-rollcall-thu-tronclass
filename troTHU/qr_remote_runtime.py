"""遠端 QR data 來源（client 端）：從自架的 VPS data oracle 取當下 `data` 並代學生送出。

背景：QR `data` 由伺服器產生、學生端 API 不回傳；`data` 已實證跨課/跨校可攜。教師輔助
(qr_teacher_runtime) 是本機起一場教師點名讀 data；本模組是它的**遠端版**——把「讀 data」
換成對一台長駐服務發 `GET {base_url}/token`（帶 Bearer API key），其餘（緊迴圈重送、驗
on_call_fine、finalize 通知）與教師輔助一致。教師帳號到期後（見 README 8/31）用這條延續。

設定在 config.advanced.toml `[qr_remote]`：enabled / base_url / api_key（＋選用微調）。
"""
from __future__ import annotations

import ipaddress
import math
import re
from urllib.parse import urlsplit

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore


def __getattr__(name: str):
    return getattr(ctx, name)


def _rollcall_id(rollcall) -> str:
    if isinstance(rollcall, dict):
        return ctx.normalize_text(rollcall.get("rollcall_id") or rollcall.get("id"))
    return ctx.normalize_text(rollcall)


QR_REMOTE_TOKEN_RE = re.compile(r"\d{10}[0-9a-f]{32}\Z")
QR_REMOTE_MAX_BODY_BYTES = 64 * 1024


def qr_remote_base_url_allowed(value) -> bool:
    """Bearer keys may use HTTPS, or plaintext HTTP only on an actual loopback host."""
    text = ctx.normalize_text(value).rstrip("/")
    try:
        parsed = urlsplit(text)
        host = parsed.hostname or ""
        if (
            parsed.scheme not in {"http", "https"}
            or not host
            or parsed.username is not None
            or parsed.password is not None
            or parsed.query
            or parsed.fragment
        ):
            return False
        if parsed.scheme == "https":
            return True
        if host.lower() == "localhost":
            return True
        try:
            return ipaddress.ip_address(host).is_loopback
        except ValueError:
            return False
    except (TypeError, ValueError):
        return False


def _bounded_float(value, default: float, minimum: float, maximum: float) -> float:
    try:
        number = float(value)
    except (TypeError, ValueError):
        return float(default)
    if not math.isfinite(number):
        return float(default)
    return min(maximum, max(minimum, number))


def _monotonic() -> float:
    return ctx.time.monotonic()


def normalize_qr_remote_config_section(section, default=None) -> ctx.Dict[str, ctx.Any]:
    fallback = default if isinstance(default, dict) else ctx.DEFAULT_CONFIG.get("qr_remote", {})
    raw = section if isinstance(section, dict) else {}
    return {
        "enabled": ctx.coerce_bool(raw.get("enabled", fallback.get("enabled", False)), False),
        "base_url": ctx.normalize_text(raw.get("base_url", fallback.get("base_url", ""))).rstrip("/"),
        "api_key": ctx.normalize_text(raw.get("api_key", fallback.get("api_key", ""))),
        "confirm_window_seconds": _bounded_float(
            raw.get("confirm_window_seconds", fallback.get("confirm_window_seconds", 12.0)),
            float(fallback.get("confirm_window_seconds", 12.0)),
            1.0,
            120.0,
        ),
        "poll_interval_seconds": _bounded_float(
            raw.get("poll_interval_seconds", fallback.get("poll_interval_seconds", 1.0)),
            float(fallback.get("poll_interval_seconds", 1.0)),
            0.2,
            30.0,
        ),
        "timeout_seconds": _bounded_float(
            raw.get("timeout_seconds", fallback.get("timeout_seconds", 8.0)),
            float(fallback.get("timeout_seconds", 8.0)),
            1.0,
            60.0,
        ),
    }


def qr_remote_config(config) -> ctx.Dict[str, ctx.Any]:
    source = config if isinstance(config, dict) else ctx.CONFIG
    section = source.get("qr_remote", {}) if isinstance(source, dict) else {}
    return normalize_qr_remote_config_section(section)


def qr_remote_configured(config) -> bool:
    cfg = qr_remote_config(config)
    return bool(
        cfg["enabled"]
        and qr_remote_base_url_allowed(cfg["base_url"])
        and ctx.has_real_credential(cfg["api_key"])
    )


async def fetch_remote_qr_data(
    base_url: str,
    api_key: str,
    *,
    timeout: float = 8.0,
    session=None,
):
    """Fetch one bounded, non-redirecting oracle response; return only a valid 42-byte data token."""
    base = ctx.normalize_text(base_url).rstrip("/")
    key = ctx.normalize_text(api_key)
    if not qr_remote_base_url_allowed(base) or not ctx.has_real_credential(key):
        return None
    url = base + "/token"
    headers = {"Authorization": "Bearer " + key, "Accept": "application/json"}
    timeout_obj = ctx.aiohttp.ClientTimeout(total=_bounded_float(timeout, 8.0, 1.0, 60.0))
    remote = session
    owns_session = remote is None
    try:
        if owns_session:
            remote = ctx.aiohttp.ClientSession(
                timeout=timeout_obj,
                cookie_jar=ctx.aiohttp.DummyCookieJar(),
                trust_env=False,
            )
        async with remote.get(
            url,
            headers=headers,
            timeout=timeout_obj,
            allow_redirects=False,
        ) as resp:
            if resp.status != 200:
                return None
            if resp.content_length is not None and resp.content_length > QR_REMOTE_MAX_BODY_BYTES:
                return None
            raw = await resp.content.read(QR_REMOTE_MAX_BODY_BYTES + 1)
            if len(raw) > QR_REMOTE_MAX_BODY_BYTES:
                return None
        body = ctx.json.loads(raw.decode("utf-8"))
    except Exception:
        return None
    finally:
        if owns_session and remote is not None:
            await remote.close()
    if not isinstance(body, dict) or body.get("ok") is not True:
        return None
    data = ctx.normalize_text(body.get("data"))
    return data if QR_REMOTE_TOKEN_RE.fullmatch(data) else None


async def submit_remote_qr(
    student_session,
    rollcall,
    *,
    profile_name: str = "",
    my_user_no: str = "",
) -> bool:
    """Bounded oracle polling with one cookie-less connection pool per confirmation window."""
    student_rollcall_id = _rollcall_id(rollcall)
    if not student_rollcall_id:
        return False
    if ctx.is_completed_qr_rollcall(student_rollcall_id, profile_name=profile_name):
        return True
    cfg = qr_remote_config(ctx.CONFIG)
    if not qr_remote_configured({"qr_remote": cfg}):
        return False
    base_url = cfg["base_url"]
    api_key = cfg["api_key"]
    deadline = _monotonic() + cfg["confirm_window_seconds"]
    submitted = False
    last_qr_data = None
    last_result: ctx.Dict[str, ctx.Any] = {}
    last_verification: ctx.Dict[str, ctx.Any] = {}
    timeout_obj = ctx.aiohttp.ClientTimeout(total=cfg["timeout_seconds"])
    async with ctx.aiohttp.ClientSession(
        timeout=timeout_obj,
        cookie_jar=ctx.aiohttp.DummyCookieJar(),
        trust_env=False,
    ) as remote:
        while _monotonic() < deadline:
            data = await fetch_remote_qr_data(
                base_url,
                api_key,
                timeout=cfg["timeout_seconds"],
                session=remote,
            )
            if data:
                qr_data = ctx.QrCodeData(fields={"rollcallId": student_rollcall_id, "data": data})
                last_result = await ctx.answer_qr_rollcall(
                    student_session,
                    qr_data,
                    device_id=ctx.random_id(),
                    request_ssl=ctx.get_ssl_request_setting(),
                    session_id=ctx.get_session_id_header(student_session),
                    base_url=ctx.get_active_http_endpoints().base_url,
                )
                submitted = True
                last_qr_data = qr_data
                last_verification = await ctx.verify_rollcall_on_call_fine(
                    student_session,
                    student_rollcall_id,
                    endpoints=ctx.get_active_http_endpoints(),
                    request_ssl=ctx.get_ssl_request_setting(),
                    rollcall_type="qrcode",
                    my_user_no=my_user_no,
                )
                if last_verification.get("ok") and last_verification.get("status") == "on_call_fine":
                    await ctx.finalize_qr_submission(
                        student_session,
                        qr_data,
                        last_result,
                        notification_body="已透過遠端 QR data 服務完成送出。",
                        progress_log_output=False,
                        verification=last_verification,
                    )
                    ctx.mark_completed_qr_rollcall(
                        student_rollcall_id,
                        profile_name=profile_name,
                    )
                    return True
            await ctx.asyncio.sleep(cfg["poll_interval_seconds"])
    if submitted and last_qr_data is not None:
        await ctx.finalize_qr_submission(
            student_session,
            last_qr_data,
            last_result,
            notification_body="已透過遠端 QR data 服務送出（未即時確認）。",
            progress_log_output=False,
            verification=last_verification,
        )
    return False

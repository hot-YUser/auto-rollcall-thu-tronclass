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
from dataclasses import dataclass
from typing import Optional
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


QR_REMOTE_TOKEN_RE = re.compile(r"[0-9]{10}[0-9a-f]{32}\Z")
QR_REMOTE_MAX_BODY_BYTES = 64 * 1024

# Redacted last outcome (no secrets, bounded dict) for status/doctor report
_QR_REMOTE_LAST_OUTCOME: dict = {}


def _set_last_outcome(info: dict) -> None:
    _QR_REMOTE_LAST_OUTCOME.clear()
    # keep only safe keys
    safe = {}
    for k in ("kind", "status", "error", "retry_after", "has_retry_after", "terminal", "detail"):
        if k in info:
            safe[k] = info[k]
    _QR_REMOTE_LAST_OUTCOME.update(safe)


def get_qr_remote_last_outcome() -> dict:
    return dict(_QR_REMOTE_LAST_OUTCOME)


def _redacted_outcome_for_report() -> dict:
    return dict(_QR_REMOTE_LAST_OUTCOME)


@dataclass(frozen=True)
class QrRemoteSuccess:
    data: str
    kind: str = "ok"

    def __bool__(self) -> bool:
        return True

    def __str__(self) -> str:
        return self.data

    def __eq__(self, other: object) -> bool:
        if isinstance(other, str):
            return self.data == other
        if isinstance(other, QrRemoteSuccess):
            return self.data == other.data
        return NotImplemented


@dataclass(frozen=True)
class QrRemoteError:
    kind: str  # unauthorized | rate_limited | transient | unavailable | invalid_config
    status: int
    message: str = ""
    retry_after: Optional[float] = None
    terminal: bool = False

    def __bool__(self) -> bool:
        return False

    @property
    def retriable(self) -> bool:
        return self.kind in ("rate_limited", "transient")


QrRemoteResult = object  # union placeholder; actual returns are QrRemoteSuccess or QrRemoteError


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


def _bounded_retry_after(value) -> Optional[float]:
    """Parse Retry-After as bounded numeric seconds; None if missing/malformed/negative/huge."""
    if value is None:
        return None
    try:
        text = str(value).strip()
        if not text:
            return None
        # Only numeric seconds; ignore HTTP-date form
        num = float(text)
        if not math.isfinite(num):
            return None
        if num < 0:
            return None
        if num > 120:
            num = 120.0
        return float(num)
    except (TypeError, ValueError):
        return None


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
    """Typed fetch: returns QrRemoteSuccess (with data) or QrRemoteError (typed failure)."""
    base = ctx.normalize_text(base_url).rstrip("/")
    key = ctx.normalize_text(api_key)
    if not qr_remote_base_url_allowed(base) or not ctx.has_real_credential(key):
        err = QrRemoteError(kind="invalid_config", status=0, message="invalid remote config", terminal=True)
        _set_last_outcome({"kind": err.kind, "status": err.status, "error": err.message, "terminal": True})
        return err
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
            # Capture Retry-After before reading body
            retry_after_raw = resp.headers.get("Retry-After") if hasattr(resp, "headers") else None
            retry_after = _bounded_retry_after(retry_after_raw)
            if resp.status == 401:
                err = QrRemoteError(kind="unauthorized", status=401, message="managed key invalid/revoked/expired", terminal=True, retry_after=None)
                _set_last_outcome({"kind": err.kind, "status": 401, "error": "unauthorized", "terminal": True})
                return err
            if resp.status == 429:
                err = QrRemoteError(kind="rate_limited", status=429, message="rate_limited", retry_after=retry_after, terminal=False)
                _set_last_outcome({"kind": err.kind, "status": 429, "retry_after": retry_after, "has_retry_after": retry_after is not None})
                return err
            if resp.status == 503:
                # Need body to distinguish stale/no_data (transient) vs busy (rate_limited with Retry-After)
                if resp.content_length is not None and resp.content_length > QR_REMOTE_MAX_BODY_BYTES:
                    err = QrRemoteError(kind="transient", status=503, message="response too large", terminal=False)
                    _set_last_outcome({"kind": err.kind, "status": 503, "error": "too_large"})
                    return err
                raw = await resp.content.read(QR_REMOTE_MAX_BODY_BYTES + 1)
                if len(raw) > QR_REMOTE_MAX_BODY_BYTES:
                    err = QrRemoteError(kind="transient", status=503, message="response too large", terminal=False)
                    _set_last_outcome({"kind": err.kind, "status": 503, "error": "too_large"})
                    return err
                body = None
                try:
                    body = ctx.json.loads(raw.decode("utf-8"))
                except Exception:
                    body = None
                error_code = ""
                if isinstance(body, dict):
                    error_code = str(body.get("error") or "").strip().lower()
                if error_code == "busy":
                    err = QrRemoteError(kind="rate_limited", status=503, message="busy", retry_after=retry_after, terminal=False)
                    _set_last_outcome({"kind": err.kind, "status": 503, "retry_after": retry_after, "has_retry_after": retry_after is not None})
                    return err
                # stale/no_data/unknown 503 is transient
                err = QrRemoteError(kind="transient", status=503, message=error_code or "service unavailable", retry_after=None, terminal=False)
                _set_last_outcome({"kind": err.kind, "status": 503, "error": error_code or "transient"})
                return err
            if resp.status != 200:
                err = QrRemoteError(kind="unavailable", status=resp.status, message="unexpected status", terminal=False)
                _set_last_outcome({"kind": err.kind, "status": resp.status, "error": "unexpected_status"})
                return err
            if resp.content_length is not None and resp.content_length > QR_REMOTE_MAX_BODY_BYTES:
                err = QrRemoteError(kind="transient", status=200, message="response too large", terminal=False)
                _set_last_outcome({"kind": err.kind, "status": 200, "error": "too_large"})
                return err
            raw = await resp.content.read(QR_REMOTE_MAX_BODY_BYTES + 1)
            if len(raw) > QR_REMOTE_MAX_BODY_BYTES:
                err = QrRemoteError(kind="transient", status=200, message="response too large", terminal=False)
                _set_last_outcome({"kind": err.kind, "status": 200, "error": "too_large"})
                return err
        body = ctx.json.loads(raw.decode("utf-8"))
    except Exception:
        # Network/timeout/JSON errors are transient
        # Do not leak url/key/token/body
        err = QrRemoteError(kind="transient", status=0, message="fetch failed", terminal=False)
        _set_last_outcome({"kind": err.kind, "status": 0, "error": "fetch_failed"})
        return err
    finally:
        if owns_session and remote is not None:
            await remote.close()
    if not isinstance(body, dict) or body.get("ok") is not True:
        err = QrRemoteError(kind="transient", status=200, message="missing ok", terminal=False)
        _set_last_outcome({"kind": err.kind, "status": 200, "error": "missing_ok"})
        return err
    data = ctx.normalize_text(body.get("data"))
    if not QR_REMOTE_TOKEN_RE.fullmatch(data):
        err = QrRemoteError(kind="transient", status=200, message="invalid token shape", terminal=False)
        _set_last_outcome({"kind": err.kind, "status": 200, "error": "invalid_token"})
        return err
    ok = QrRemoteSuccess(data=data)
    _set_last_outcome({"kind": "ok", "status": 200, "detail": "token_ok"})
    return ok


async def submit_remote_qr(
    student_session,
    rollcall,
    *,
    profile_name: str = "",
    my_user_no: str = "",
    provider_key: str = "",
    endpoints: object = None,
    request_ssl: object = None,
) -> bool:
    """Bounded oracle polling with one cookie-less connection pool per confirmation window."""
    student_rollcall_id = _rollcall_id(rollcall)
    if not student_rollcall_id:
        return False
    if ctx.is_completed_qr_rollcall(student_rollcall_id, profile_name=profile_name, provider_key=provider_key):
        return True
    _ep = endpoints if endpoints is not None else ctx.get_active_http_endpoints()
    _ssl = request_ssl if request_ssl is not None else ctx.get_ssl_request_setting()
    _my_user_no = ctx.normalize_text(my_user_no) or (ctx.normalize_text(ctx.get_active_profile(ctx.CONFIG).user) if hasattr(ctx.get_active_profile(ctx.CONFIG), 'user') else "")
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
    unauthorized_diagnosed = False
    timeout_obj = ctx.aiohttp.ClientTimeout(total=cfg["timeout_seconds"])
    async with ctx.aiohttp.ClientSession(
        timeout=timeout_obj,
        cookie_jar=ctx.aiohttp.DummyCookieJar(),
        trust_env=False,
    ) as remote:
        while _monotonic() < deadline:
            result = await fetch_remote_qr_data(
                base_url,
                api_key,
                timeout=cfg["timeout_seconds"],
                session=remote,
            )
            if isinstance(result, QrRemoteSuccess):
                data = result.data
                qr_data = ctx.QrCodeData(fields={"rollcallId": student_rollcall_id, "data": data})
                last_result = await ctx.answer_qr_rollcall(
                    student_session,
                    qr_data,
                    device_id=ctx.random_id(),
                    request_ssl=_ssl,
                    session_id=ctx.get_session_id_header(student_session),
                    base_url=_ep.base_url,
                )
                submitted = True
                last_qr_data = qr_data
                last_verification = await ctx.verify_rollcall_on_call_fine(
                    student_session,
                    student_rollcall_id,
                    endpoints=_ep,
                    request_ssl=_ssl,
                    rollcall_type="qrcode",
                    my_user_no=_my_user_no,
                )
                if last_verification.get("ok") and last_verification.get("status") == "on_call_fine":
                    await ctx.finalize_qr_submission(
                        student_session,
                        qr_data,
                        last_result,
                        notification_body="已透過遠端 QR data 服務完成送出。",
                        progress_log_output=False,
                        verification=last_verification,
                        profile_name=profile_name,
                        provider_key=provider_key,
                        my_user_no=_my_user_no,
                        endpoints=_ep,
                        request_ssl=_ssl,
                    )
                    ctx.mark_completed_qr_rollcall(
                        student_rollcall_id,
                        profile_name=profile_name,
                        provider_key=provider_key,
                    )
                    return True
            elif isinstance(result, QrRemoteError):
                if result.kind == "unauthorized":
                    if not unauthorized_diagnosed:
                        ctx.log_print("QR 遠端服務：managed key invalid/revoked/expired（已停止重試）。")
                        unauthorized_diagnosed = True
                    break
                elif result.kind in ("rate_limited",):
                    # Bounded numeric Retry-After, sleep no longer than remaining deadline, do not hammer
                    # Already bounded to 120 above; now additionally cap to remaining and clamp to poll interval.
                    remaining = deadline - _monotonic()
                    if remaining <= 0:
                        break
                    if result.retry_after is not None:
                        sleep_s = min(result.retry_after, remaining)
                    else:
                        sleep_s = min(cfg["poll_interval_seconds"], remaining)
                    if sleep_s > 0:
                        await ctx.asyncio.sleep(sleep_s)
                        continue
                elif result.kind == "transient":
                    # 503 stale/no_data is transient; just continue polling
                    pass
                elif result.kind == "unavailable":
                    # typed unavailable; do not hammer, poll interval
                    pass
                else:
                    pass
            await ctx.asyncio.sleep(cfg["poll_interval_seconds"])
            # Re-check deadline after sleep
            if _monotonic() >= deadline:
                break
    if submitted and last_qr_data is not None:
        await ctx.finalize_qr_submission(
            student_session,
            last_qr_data,
            last_result,
            notification_body="已透過遠端 QR data 服務送出（未即時確認）。",
            progress_log_output=False,
            verification=last_verification,
            profile_name=profile_name,
            provider_key=provider_key,
            my_user_no=_my_user_no,
            endpoints=_ep,
            request_ssl=_ssl,
        )
    return False

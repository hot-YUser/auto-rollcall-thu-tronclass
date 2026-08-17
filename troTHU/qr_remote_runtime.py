"""遠端 QR data 來源（client 端）：從自架的 VPS data oracle 取當下 `data` 並代學生送出。

背景：QR `data` 由伺服器產生、學生端 API 不回傳；`data` 已實證跨課/跨校可攜。教師輔助
(qr_teacher_runtime) 是本機起一場教師點名讀 data；本模組是它的**遠端版**——把「讀 data」
換成對一台長駐服務發 `GET {base_url}/token`（帶 Bearer API key），其餘（緊迴圈重送、驗
on_call_fine、finalize 通知）與教師輔助一致。教師帳號到期後（見 README 8/31）用這條延續。

設定在 config.advanced.toml `[qr_remote]`：enabled / base_url / api_key（＋選用微調）。
"""
from __future__ import annotations

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


def qr_remote_config(config) -> ctx.Dict[str, ctx.Any]:
    source = config if isinstance(config, dict) else ctx.CONFIG
    section = source.get("qr_remote", {}) if isinstance(source, dict) else {}
    if not isinstance(section, dict):
        section = {}
    default = ctx.DEFAULT_CONFIG.get("qr_remote", {})

    def _float(key: str) -> float:
        try:
            return float(section.get(key, default.get(key)))
        except (TypeError, ValueError):
            return float(default.get(key, 0.0))

    return {
        "enabled": bool(section.get("enabled", default.get("enabled", False))),
        "base_url": ctx.normalize_text(section.get("base_url", default.get("base_url", ""))),
        "api_key": ctx.normalize_text(section.get("api_key", default.get("api_key", ""))),
        "confirm_window_seconds": _float("confirm_window_seconds"),
        "poll_interval_seconds": _float("poll_interval_seconds"),
        "timeout_seconds": _float("timeout_seconds"),
    }


def qr_remote_configured(config) -> bool:
    cfg = qr_remote_config(config)
    return bool(cfg["enabled"] and cfg["base_url"] and ctx.has_real_credential(cfg["api_key"]))


async def fetch_remote_qr_data(base_url: str, api_key: str, *, timeout: float = 8.0):
    """對 data oracle 發 GET {base_url}/token（Bearer）。回傳當下 42 字元 data 或 None。
    任何錯誤（連線/逾時/非 200/stale 503/缺 data）一律回 None，交由呼叫端緊迴圈重試。"""
    url = ctx.normalize_text(base_url).rstrip("/") + "/token"
    headers = {"Authorization": "Bearer " + ctx.normalize_text(api_key), "Accept": "application/json"}
    timeout_obj = ctx.aiohttp.ClientTimeout(total=max(1.0, float(timeout)))
    try:
        async with ctx.aiohttp.ClientSession(timeout=timeout_obj) as remote:
            async with remote.get(url, headers=headers) as resp:
                if resp.status != 200:
                    return None
                body = await resp.json(content_type=None)
    except Exception:
        return None
    data = ctx.normalize_text(body.get("data") if isinstance(body, dict) else "")
    return data or None


async def submit_remote_qr(student_session, rollcall) -> bool:
    """緊迴圈「取遠端當下 data → 代學生送出 → 驗 on_call_fine」，直到確認或超過窗口。
    與 submit_prepared_teacher_qr 同語意，僅 data 來源不同。"""
    student_rollcall_id = _rollcall_id(rollcall)
    if not student_rollcall_id:
        return False
    if student_rollcall_id in ctx.COMPLETED_QR_ROLLCALLS:
        return True
    cfg = qr_remote_config(ctx.CONFIG)
    base_url = cfg["base_url"]
    api_key = cfg["api_key"]
    if not base_url or not ctx.has_real_credential(api_key):
        return False
    deadline = ctx.time.monotonic() + cfg["confirm_window_seconds"]
    submitted = False
    last_qr_data = None
    last_result: ctx.Dict[str, ctx.Any] = {}
    last_verification: ctx.Dict[str, ctx.Any] = {}
    while ctx.time.monotonic() < deadline:
        data = await fetch_remote_qr_data(base_url, api_key, timeout=cfg["timeout_seconds"])
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
            # answer_qr_rollcall raises on non-2xx, so reaching here means the PUT was accepted.
            submitted = True
            last_qr_data = qr_data
            last_verification = await ctx.verify_rollcall_on_call_fine(
                student_session,
                student_rollcall_id,
                endpoints=ctx.get_active_http_endpoints(),
                request_ssl=ctx.get_ssl_request_setting(),
                rollcall_type="qrcode",
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
                ctx.COMPLETED_QR_ROLLCALLS[student_rollcall_id] = True
                return True
        await ctx.asyncio.sleep(cfg["poll_interval_seconds"])
    if submitted and last_qr_data is not None:
        # PUT 至少成功一次但窗口內未確認出席：留未完成，讓下輪 poll 重查。
        await ctx.finalize_qr_submission(
            student_session,
            last_qr_data,
            last_result,
            notification_body="已透過遠端 QR data 服務送出（未即時確認）。",
            progress_log_output=False,
            verification=last_verification,
        )
    return False

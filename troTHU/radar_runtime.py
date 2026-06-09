from __future__ import annotations

import math

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore


def __getattr__(name: str):
    return getattr(ctx, name)


_TRANSIENT_RADAR_ERROR_CODES = {"radar_rate_limited", "radar_server_error"}


class _RadarNoFallback(Exception):
    pass


class _RadarSubmittedUnconfirmed(Exception):
    pass


def _is_transient_radar_result(result: ctx.RadarCoordinateResult) -> bool:
    return result.error_code in _TRANSIENT_RADAR_ERROR_CODES


def _global_radar_progress_message(
    rollcall_id: ctx.Any,
    request_count: int,
    max_queries: int,
    observation_count: int,
    latest_label: str,
    started_at: float,
) -> str:
    elapsed = ctx.time.perf_counter() - started_at
    return (
        "雷達點名 #{} 全球定位中：request {}/{}，距離觀測 {}，最新 {}，耗時 {:.1f}s".format(
            rollcall_id,
            request_count,
            max_queries,
            observation_count,
            latest_label or "----",
            elapsed,
        )
    )


def _estimate_log_extra(estimate: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    if estimate is None:
        return {}
    return {
        "estimated_lat": round(float(estimate.point.lat), 10),
        "estimated_lon": round(float(estimate.point.lon), 10),
        "residual_rmse_meters": round(float(estimate.residual_rmse), 3),
        "uncertainty_95_meters": (
            round(float(estimate.uncertainty_95_meters), 3)
            if math.isfinite(float(estimate.uncertainty_95_meters))
            else "inf"
        ),
        "robust_cost": round(float(estimate.robust_cost), 3),
        "observation_count": estimate.observation_count,
        "solver_iterations": estimate.iterations,
    }


def _read_radar_config() -> ctx.Dict[str, ctx.Any]:
    try:
        return ctx.get_radar_config()
    except AttributeError:
        return ctx.normalize_config(ctx.copy.deepcopy(ctx.CONFIG)).get("radar", ctx.DEFAULT_CONFIG["radar"])


def _radar_grid_step_meters(radar_config: ctx.Mapping[str, ctx.Any]) -> float:
    try:
        return max(100.0, float(radar_config.get("final_grid_step_meters", 100.0)))
    except (TypeError, ValueError):
        return 100.0


def _radar_cooldown_policy(radar_config: ctx.Mapping[str, ctx.Any]) -> ctx.TransientCooldownPolicy:
    cooldown_config: ctx.Dict[str, ctx.Any] = {}
    global_config = radar_config.get("global", {})
    if isinstance(global_config, dict):
        cooldown_config.update(global_config)
    for key in (
        "cooldown_seconds",
        "max_cooldowns",
        "transient_failure_threshold",
        "transient_failure_ratio",
    ):
        if key in radar_config:
            cooldown_config[key] = radar_config[key]
    return ctx.TransientCooldownPolicy.from_mapping(
        cooldown_config,
        default_cooldown_seconds=ctx.NUMBER_COOLDOWN_SECONDS,
        default_max_cooldowns=ctx.NUMBER_MAX_COOLDOWNS,
        default_transient_failure_threshold=ctx.NUMBER_TRANSIENT_FAILURE_THRESHOLD,
        default_transient_failure_ratio=ctx.NUMBER_TRANSIENT_FAILURE_RATIO,
    )


def _global_radar_bool(global_config: ctx.Mapping[str, ctx.Any], key: str) -> bool:
    default = ctx.DEFAULT_CONFIG["radar"]["global"].get(key, True)
    return ctx.coerce_bool(global_config.get(key, default), bool(default))


async def _announce_radar_success(
    client: ctx.Any,
    rollcall_id: ctx.Any,
    *,
    method: ctx.Any,
    detail: ctx.Any = "",
    verification: ctx.Any = None,
) -> bool:
    verification_result = dict(verification or {}) if isinstance(verification, dict) else {}
    if not verification_result:
        verification_result = await ctx.verify_rollcall_on_call_fine(
            client.session,
            rollcall_id,
            endpoints=client.endpoints,
            request_ssl=client.request_ssl,
            rollcall_type="radar",
        )
    if not (verification_result.get("ok") and verification_result.get("status") == "on_call_fine"):
        ctx.log(
            event="radar_rollcall_submitted_unconfirmed",
            status="submitted_unconfirmed",
            rollcall_id=rollcall_id,
            rollcall_type="radar",
            message="雷達點名答案已送出，但尚未確認 on_call_fine。",
            extra={"method": method, "detail": detail, "verification": verification_result},
        )
        await ctx.mes("雷達點名 #{} 已送出，但尚未確認 on_call_fine；下一輪會繼續檢查。".format(rollcall_id))
        return False
    banner = ctx.format_rollcall_success_banner(
        ctx.AttendanceType.RADAR,
        rollcall_id,
        method=method,
        detail=detail or "on_call_fine",
        attendance_rate=ctx.format_success_banner_attendance_rate(verification_result),
    )
    ctx.log_print(banner)
    ctx.remember_rollcall_progress(verification_result)
    await ctx.mes("雷達點名成功！", highlight_block=banner)
    return True


def _rollcall_id_matches(rollcall: ctx.Any, rollcall_id: ctx.Any) -> bool:
    if not isinstance(rollcall, dict):
        return False
    expected = ctx.normalize_text(rollcall_id)
    if not expected:
        return False
    for key in ("rollcall_id", "rollcallId", "id"):
        if ctx.normalize_text(rollcall.get(key)) == expected:
            return True
    return False


async def _rollcall_still_open(client: ctx.Any, rollcall_id: ctx.Any) -> bool:
    result = await client.fetch_rollcalls()
    rollcalls = result.payload.get("rollcalls") if isinstance(result.payload, dict) else []
    if not isinstance(rollcalls, list):
        return False
    return any(_rollcall_id_matches(item, rollcall_id) for item in rollcalls)


async def _radar_marked_present(client: ctx.Any, rollcall_id: ctx.Any) -> bool:
    """Re-fetch rollcalls and confirm the target rollcall now reads as signed in.

    ``on_call_fine`` is the canonical "already present" status used by
    ``rollcall_engine.decide_rollcall``. A bare 2xx from the answer endpoint is
    not trusted on its own; this verifies the attendance actually changed.
    """
    result = await client.fetch_rollcalls()
    rollcalls = result.payload.get("rollcalls") if isinstance(result.payload, dict) else []
    if not isinstance(rollcalls, list):
        return False
    for item in rollcalls:
        if not _rollcall_id_matches(item, rollcall_id):
            continue
        if ctx.normalize_text(item.get("status")).lower() == "on_call_fine":
            return True
    return False


async def _run_unbounded_grid_retry(
    *,
    client: ctx.Any,
    rollcall_id: ctx.Any,
    center: ctx.GeoPoint,
    radar_config: ctx.Mapping[str, ctx.Any],
    submit_candidate: ctx.Any,
    poll_every_attempts: int = 25,
    success_method: str = "final_grid",
) -> bool:
    step_meters = _radar_grid_step_meters(radar_config)
    attempts = 0
    current_ring = 0
    cooldown_policy = _radar_cooldown_policy(radar_config)
    cooldown_seconds = cooldown_policy.cooldown_seconds
    cooldowns_used = 0
    try:
        poll_interval = max(1, int(poll_every_attempts))
    except (TypeError, ValueError):
        poll_interval = 25

    async def check_open(reason: str) -> bool:
        try:
            still_open = await _rollcall_still_open(client, rollcall_id)
        except ctx.UnauthorizedError:
            raise
        except (ctx.UnexpectedResponseError, ctx.aiohttp.ClientError, ctx.asyncio.TimeoutError) as exc:
            ctx.log(
                event="radar_final_grid_poll_retry",
                status="cooldown",
                rollcall_id=rollcall_id,
                rollcall_type="radar",
                message="雷達最終棋盤格確認點名狀態時遇到暫時性錯誤，暫停後繼續。",
                extra={
                    "attempts": attempts,
                    "ring": current_ring,
                    "reason": reason,
                    "error": str(exc)[:200],
                    "cooldown_seconds": cooldown_seconds,
                },
            )
            ctx.status_print("雷達最終棋盤格暫時無法確認點名狀態，休息 {:.1f}s 後繼續".format(cooldown_seconds))
            await ctx.asyncio.sleep(cooldown_seconds)
            return True
        if still_open:
            return True
        ctx.log(
            event="radar_final_grid_stopped",
            status="rollcall_closed",
            rollcall_id=rollcall_id,
            rollcall_type="radar",
            message="雷達最終棋盤格重試停止：點名已關閉。",
            extra={"attempts": attempts, "ring": current_ring, "reason": reason},
        )
        ctx.log_print("雷達點名 #{} 已關閉，停止最終棋盤格重試。".format(rollcall_id))
        return False

    ctx.log(
        event="radar_final_grid_started",
        status="started",
        rollcall_id=rollcall_id,
        rollcall_type="radar",
        message="啟動雷達最終無限棋盤格重試。",
        extra={
            "center_lat": round(float(center.lat), 10),
            "center_lon": round(float(center.lon), 10),
            "grid_step_meters": step_meters,
            "poll_every_attempts": poll_interval,
        },
    )
    ctx.log_print(
        "啟動最終棋盤格重試：以 {:.8f}, {:.8f} 為中心，每格 {:.0f}m，直到命中或點名關閉。".format(
            center.lat,
            center.lon,
            step_meters,
        )
    )

    for candidate in ctx.unbounded_grid_candidates(center, step_meters=step_meters):
        if candidate.ring != current_ring:
            if not await check_open("ring_completed"):
                return False
            current_ring = candidate.ring
        if attempts and attempts % poll_interval == 0:
            if not await check_open("attempt_interval"):
                return False

        label = "final-grid-r{}-{}".format(candidate.ring, attempts + 1)
        kind, result = await submit_candidate(candidate.point, label)
        attempts += 1

        if kind == "success":
            if await _announce_radar_success(
                client,
                rollcall_id,
                method=success_method,
                detail="{} east={:.0f}m north={:.0f}m".format(
                    label,
                    candidate.east_offset,
                    candidate.north_offset,
                ),
            ):
                return True
            return False
        if kind == "scope_distance" and result is not None:
            ctx.log_print(
                "最終棋盤格 {} 未命中，距離 {:.2f} 公尺。".format(
                    label,
                    result.distance,
                )
            )
            continue
        if kind == "transient":
            cooldowns_used += 1
            ctx.log(
                event="radar_final_grid_cooldown",
                status="cooldown",
                rollcall_id=rollcall_id,
                rollcall_type="radar",
                message="雷達最終棋盤格遇到暫時性錯誤，暫停後繼續。",
                extra={
                    "attempts": attempts,
                    "ring": candidate.ring,
                    "cooldowns_used": cooldowns_used,
                    "cooldown_seconds": cooldown_seconds,
                    "max_cooldowns": cooldown_policy.max_cooldowns,
                    "max_cooldowns_enforced": False,
                },
            )
            ctx.status_print("雷達最終棋盤格遇到限流或伺服器錯誤，休息 {:.1f}s 後繼續".format(cooldown_seconds))
            await ctx.asyncio.sleep(cooldown_seconds)
            continue
        ctx.log(
            event="radar_final_grid_stopped",
            status=kind or "failed",
            rollcall_id=rollcall_id,
            rollcall_type="radar",
            message="雷達最終棋盤格重試停止：座標送出遇到不可恢復錯誤。",
            extra={"attempts": attempts, "ring": candidate.ring},
        )
        return False
    return False


async def radar(main_session: ctx.aiohttp.ClientSession, rollcall: ctx.Dict[str, ctx.Any]) -> bool:
    radar_config = _read_radar_config()
    strategy = ctx.normalize_text(
        radar_config.get("strategy", ctx.DEFAULT_CONFIG["radar"]["strategy"])
    ).lower().replace("-", "_")
    if strategy == "global_wgs84":
        return await _run_global_radar(main_session, rollcall, radar_config)

    # Default strategy: empty_answer — submit a coordinate-free `{}` answer first
    # and only trust it once attendance is verified, then fall back to global_wgs84.
    try:
        if await empty_answer_radar(main_session, rollcall):
            return True
    except _RadarSubmittedUnconfirmed:
        return False
    if not ctx.coerce_bool(
        radar_config.get(
            "empty_answer_fallback_enabled",
            ctx.DEFAULT_CONFIG["radar"].get("empty_answer_fallback_enabled", True),
        ),
        True,
    ):
        return False
    rollcall_id = rollcall.get("rollcall_id")
    ctx.log(
        event="empty_answer_radar_fallback_started",
        status="fallback",
        rollcall_id=rollcall_id,
        rollcall_type="radar",
        message="空答案雷達簽到未確認，改用 global_wgs84 全球定位作為 fallback。",
    )
    ctx.log_print("空答案雷達簽到未確認，改用 global_wgs84 全球定位作為 fallback...")
    return await _run_global_radar(main_session, rollcall, radar_config)


async def _run_global_radar(
    main_session: ctx.aiohttp.ClientSession,
    rollcall: ctx.Dict[str, ctx.Any],
    radar_config: ctx.Dict[str, ctx.Any],
) -> bool:
    try:
        return await global_radar(main_session, rollcall, radar_config=radar_config)
    except (_RadarNoFallback, _RadarSubmittedUnconfirmed):
        return False


async def empty_answer_radar(main_session: ctx.aiohttp.ClientSession, rollcall: ctx.Dict[str, ctx.Any]) -> bool:
    """Submit a single coordinate-free ``{}`` radar answer and verify sign-in.

    Mirrors the standalone repro: one ``PUT /api/rollcall/{id}/answer`` with an
    empty JSON body, no coordinates, no beacon/radarSignal, no ``api_version``.
    A 2xx is verified against the rollcall's ``on_call_fine`` status before it is
    treated as success; any other outcome returns ``False`` so the caller can
    fall back to the global_wgs84 solver.
    """
    rollcall_id = rollcall.get("rollcall_id")
    headers = {"User-Agent": ctx.random_ua()}
    session_kwargs: ctx.Dict[str, ctx.Any] = {
        "connector": ctx.create_http_connector(),
        "headers": headers,
        "cookie_jar": ctx.aiohttp.CookieJar(unsafe=True),
    }
    timeout = ctx.create_http_client_timeout()
    if timeout is not None:
        session_kwargs["timeout"] = timeout
    async with ctx.aiohttp.ClientSession(**session_kwargs) as session:
        ctx.clone_session_cookies(main_session, session)
        request_ssl = ctx.get_ssl_request_setting()
        client = ctx.create_tron_http_client(session, request_ssl=request_ssl)
        endpoints = ctx.get_active_http_endpoints()
        base_url = endpoints.base_url.rstrip("/")
        request_url = f"{base_url}/api/rollcall/{rollcall_id}/answer"
        payload: ctx.Dict[str, ctx.Any] = {}
        ctx.log_print("嘗試雷達空答案簽到（不送座標）...")
        try:
            async with session.put(request_url, json=payload, ssl=request_ssl) as resp:
                status = resp.status
                body_text = await resp.text()
                if status in (401, 403) or "login" in str(resp.url).lower():
                    raise ctx.UnauthorizedError("雷達空答案送出未授權，Cookie 可能已過期。")
                result = ctx.parse_radar_answer_result(status, body_text)
        except (ctx.aiohttp.ClientError, ctx.asyncio.TimeoutError) as exc:
            ctx.log(
                event="radar_empty_answer_attempt",
                status="transient",
                rollcall_id=rollcall_id,
                rollcall_type="radar",
                message="雷達空答案送出遇到網路錯誤，改用 fallback。",
                error=exc,
                extra={"strategy": "empty_answer"},
            )
            return False

        diagnostic: ctx.Dict[str, ctx.Any] = {
            "strategy": "empty_answer",
            "http_status": status,
            "success_http": bool(result.success),
        }
        if result.error_code:
            diagnostic["error_code"] = ctx.normalize_text(result.error_code)
        if result.message:
            diagnostic["result_message"] = ctx.normalize_text(result.message)[:120]

        if result.success:
            try:
                verification = await ctx.verify_rollcall_on_call_fine(
                    session,
                    rollcall_id,
                    endpoints=client.endpoints,
                    request_ssl=client.request_ssl,
                    rollcall_type="radar",
                )
            except ctx.UnauthorizedError:
                raise
            except (ctx.UnexpectedResponseError, ctx.aiohttp.ClientError, ctx.asyncio.TimeoutError) as exc:
                diagnostic["verify_error"] = str(exc)[:200]
                verification = {"ok": False, "status": "submitted_unconfirmed", "rollcall_id": rollcall_id}
            marked_present = bool(verification.get("ok") and verification.get("status") == "on_call_fine")
            diagnostic["verified_present"] = marked_present
            if marked_present:
                ctx.log(
                    event="radar_empty_answer_attempt",
                    status="success",
                    rollcall_id=rollcall_id,
                    rollcall_type="radar",
                    message="雷達空答案簽到成功並已確認。",
                    extra=diagnostic,
                )
                if await _announce_radar_success(
                    client,
                    rollcall_id,
                    method="empty_answer",
                    detail="已確認 on_call_fine",
                    verification=verification,
                ):
                    return True
            else:
                await _announce_radar_success(
                    client,
                    rollcall_id,
                    method="empty_answer",
                    detail="submitted_unconfirmed",
                    verification=verification,
                )
                raise _RadarSubmittedUnconfirmed("雷達空答案已送出但尚未確認 on_call_fine。")
            ctx.log(
                event="radar_empty_answer_attempt",
                status="api_accepted_no_attendance",
                rollcall_id=rollcall_id,
                rollcall_type="radar",
                message="雷達空答案回 2xx 但未確認簽到，改用 fallback。",
                extra=diagnostic,
            )
            ctx.log_print("雷達空答案回 2xx 但未確認已簽到，改用 fallback...")
            return False

        if _is_transient_radar_result(result):
            ctx.log(
                event="radar_empty_answer_attempt",
                status="transient",
                rollcall_id=rollcall_id,
                rollcall_type="radar",
                message="雷達空答案送出暫時失敗，改用 fallback。",
                extra=diagnostic,
            )
            return False

        ctx.log(
            event="radar_empty_answer_attempt",
            status="failed",
            rollcall_id=rollcall_id,
            rollcall_type="radar",
            message="雷達空答案送出被拒絕，改用 fallback。",
            extra=diagnostic,
        )
        return False


async def global_radar(
    main_session: ctx.aiohttp.ClientSession,
    rollcall: ctx.Dict[str, ctx.Any],
    *,
    radar_config: ctx.Optional[ctx.Dict[str, ctx.Any]] = None,
) -> bool:
    rollcall_id = rollcall.get("rollcall_id")
    radar_config = radar_config or _read_radar_config()
    global_config = radar_config.get("global", ctx.DEFAULT_CONFIG["radar"]["global"])
    if not isinstance(global_config, dict):
        global_config = ctx.DEFAULT_CONFIG["radar"]["global"]
    solver_config = ctx.global_radar_solver_config_from_mapping(global_config)
    max_queries = int(global_config.get("max_queries", ctx.DEFAULT_CONFIG["radar"]["global"]["max_queries"]))
    request_retries = int(global_config.get("request_retries", ctx.NUMBER_REQUEST_RETRIES))
    present_hint_verify_enabled = _global_radar_bool(global_config, "present_hint_verify_enabled")
    adaptive_estimate_enabled = _global_radar_bool(global_config, "adaptive_estimate_enabled")
    cooldown_policy = _radar_cooldown_policy({"global": global_config})
    cooldown_tracker = ctx.TransientCooldownTracker(cooldown_policy)
    cooldown_seconds = cooldown_policy.cooldown_seconds

    request_count = 0
    latest_label = "----"
    observations: ctx.List[ctx.GlobalDistanceObservation] = []
    stop_event = ctx.asyncio.Event()
    progress_done = ctx.asyncio.Event()
    started_at = ctx.time.perf_counter()
    fatal_error: ctx.Optional[BaseException] = None
    last_transient_error: ctx.Optional[BaseException] = None
    found = False
    final_estimate: ctx.Any = None
    final_status = "failed"

    device_id = ctx.random_id()
    headers = {"User-Agent": ctx.random_ua()}
    session_kwargs: ctx.Dict[str, ctx.Any] = {
        "connector": ctx.create_http_connector(),
        "headers": headers,
        "cookie_jar": ctx.aiohttp.CookieJar(unsafe=True),
    }
    timeout = ctx.create_http_client_timeout()
    if timeout is not None:
        session_kwargs["timeout"] = timeout

    async def progress_reporter() -> None:
        while not progress_done.is_set():
            ctx.status_print(
                _global_radar_progress_message(
                    rollcall_id,
                    request_count,
                    max_queries,
                    len(observations),
                    latest_label,
                    started_at,
                )
            )
            try:
                await ctx.asyncio.wait_for(progress_done.wait(), timeout=ctx.NUMBER_PROGRESS_INTERVAL)
            except ctx.asyncio.TimeoutError:
                continue

    async def register_attempt_status(status: str) -> None:
        nonlocal fatal_error
        cooldown_decision = cooldown_tracker.record_attempt(status == "transient")
        if not cooldown_decision.should_cooldown:
            return
        if cooldown_decision.exhausted:
            fatal_error = last_transient_error or ctx.UnexpectedResponseError("雷達點名暫時性錯誤過多，已停止嘗試。")
            stop_event.set()
            return
        ctx.log(
            event="radar_rollcall_cooldown",
            status="cooldown",
            rollcall_id=rollcall_id,
            rollcall_type="radar",
            message="雷達點名暫時性錯誤過多，暫停後重試。",
            extra={
                "transient_count": cooldown_decision.transient_count,
                "window_size": cooldown_decision.sample_size,
                "transient_ratio": round(cooldown_decision.transient_ratio, 3),
                "cooldowns_used": cooldown_decision.cooldowns_used,
                "cooldown_seconds": cooldown_seconds,
                "max_queries": max_queries,
            },
        )
        ctx.status_print("雷達點名遇到限流或伺服器錯誤，休息 {:.1f}s 後繼續".format(cooldown_seconds))
        await ctx.asyncio.sleep(cooldown_seconds)

    async with ctx.aiohttp.ClientSession(**session_kwargs) as session:
        ctx.clone_session_cookies(main_session, session)
        request_ssl = ctx.get_ssl_request_setting()
        client = ctx.create_tron_http_client(session, request_ssl=request_ssl)
        endpoints = ctx.get_active_http_endpoints()
        base_url = endpoints.base_url.rstrip("/")
        user_id = await client.fetch_user_id()
        lite_url = f"{base_url}/api/rollcall/{rollcall_id}/lite"
        async with session.get(lite_url, ssl=request_ssl) as resp:
            lite_status = resp.status
            lite_response_url = str(resp.url)
            if lite_status in (401, 403) or "login" in lite_response_url.lower():
                raise ctx.UnauthorizedError("雷達點名 lite 資訊請求未授權，Cookie 可能已過期。")
            if lite_status == 200:
                try:
                    lite_data = await resp.json()
                except (ctx.aiohttp.ContentTypeError, ValueError):
                    lite_data = rollcall
                    ctx.log(
                        event="radar_lite_fetch",
                        status="invalid_json",
                        url=lite_response_url,
                        http_status=lite_status,
                        rollcall_id=rollcall_id,
                        rollcall_type="radar",
                        message="雷達 lite 回應無法解析，改用 rollcall 摘要。",
                    )
            else:
                body_text = await resp.text()
                ctx.log(
                    event="radar_lite_fetch",
                    status="failed",
                    url=lite_response_url,
                    http_status=lite_status,
                    rollcall_id=rollcall_id,
                    rollcall_type="radar",
                    message="雷達 lite 資訊請求失敗。",
                    error=body_text[:120],
                )
                if lite_status == 429 or 500 <= lite_status <= 599:
                    text = f"雷達點名 #{rollcall_id} 失敗：lite 資訊請求暫時不可用 (HTTP {lite_status})。"
                    ctx.log_print(text)
                    await ctx.mes(text)
                    raise _RadarNoFallback(text)
                lite_data = rollcall
        lite_info = ctx.parse_radar_lite_payload(lite_data, fallback_rollcall=rollcall)
        use_beacon = lite_info.use_beacon
        beacon_nonce = lite_info.beacon_nonce
        request_url = f"{base_url}/api/rollcall/{rollcall_id}/answer?api_version=1.76"

        async def try_coord(
            point: ctx.GeoPoint,
            label: str = "",
            *,
            enforce_max_queries: bool = True,
        ) -> ctx.Tuple[str, ctx.Optional[ctx.RadarCoordinateResult]]:
            nonlocal request_count, latest_label, fatal_error, last_transient_error, found
            if stop_event.is_set():
                return ("stopped", None)
            if enforce_max_queries and request_count >= max_queries:
                return ("max_queries", None)
            payload = ctx.build_radar_answer_payload(
                point,
                device_id=device_id,
                user_id=user_id,
                use_beacon=use_beacon,
                beacon_nonce=beacon_nonce,
                accuracy=ctx.random.randint(40, 80),
            )
            for attempt in range(request_retries):
                if stop_event.is_set():
                    return ("stopped", None)
                try:
                    latest_label = label
                    async with session.put(request_url, json=payload, ssl=request_ssl) as resp:
                        request_count += 1
                        body_text = await resp.text()
                        if resp.status in (401, 403) or "login" in str(resp.url).lower():
                            raise ctx.UnauthorizedError("雷達點名座標送出未授權，Cookie 可能已過期。")
                        result = ctx.parse_radar_answer_result(resp.status, body_text)
                    diagnostic = ctx.build_radar_attempt_diagnostic(
                        label=label,
                        point=point,
                        result=result,
                        payload=payload,
                    )
                    diagnostic.update({"strategy": "global_wgs84", "request_count": request_count, "max_queries": max_queries})
                    if result.success:
                        found = True
                        stop_event.set()
                        ctx.log(
                            event="radar_coordinate_attempt",
                            status="success",
                            rollcall_id=rollcall_id,
                            rollcall_type="radar",
                            message="雷達點名座標送出成功。",
                            extra=diagnostic,
                        )
                        return ("success", result)
                    if result.present_hint and present_hint_verify_enabled:
                        try:
                            marked_present = await _radar_marked_present(client, rollcall_id)
                        except ctx.UnauthorizedError:
                            raise
                        except (ctx.UnexpectedResponseError, ctx.aiohttp.ClientError, ctx.asyncio.TimeoutError) as exc:
                            diagnostic["verify_error"] = str(exc)[:200]
                            marked_present = False
                        diagnostic["verified_present"] = bool(marked_present)
                        if marked_present:
                            found = True
                            stop_event.set()
                            ctx.log(
                                event="radar_coordinate_attempt",
                                status="verified_present",
                                rollcall_id=rollcall_id,
                                rollcall_type="radar",
                                message="雷達點名回應顯示已簽到，重新查驗 on_call_fine 後停止。",
                                extra=diagnostic,
                            )
                            return ("success", result)
                    if result.is_scope_distance:
                        ctx.log(
                            event="radar_coordinate_attempt",
                            status="scope_distance",
                            rollcall_id=rollcall_id,
                            rollcall_type="radar",
                            message="雷達點名座標未命中，已取得距離。",
                            extra=diagnostic,
                        )
                        return ("scope_distance", result)
                    if _is_transient_radar_result(result):
                        last_transient_error = ctx.UnexpectedResponseError(
                            "HTTP radar transient response: {}".format(result.message or result.error_code)
                        )
                        ctx.log(
                            event="network_error",
                            status="radar_transient_response",
                            url=request_url,
                            http_status=resp.status,
                            rollcall_id=rollcall_id,
                            rollcall_type="radar",
                            message="雷達點名遇到暫時性 HTTP 錯誤。",
                            payload_excerpt=body_text[:300],
                        )
                        ctx.log(
                            event="radar_coordinate_attempt",
                            status="transient",
                            rollcall_id=rollcall_id,
                            rollcall_type="radar",
                            message="雷達點名座標送出暫時失敗。",
                            extra=diagnostic,
                        )
                        return ("transient", result)
                    ctx.log(
                        event="radar_coordinate_attempt",
                        status="failed",
                        rollcall_id=rollcall_id,
                        rollcall_type="radar",
                        message="雷達點名座標送出被拒絕。",
                        extra=diagnostic,
                    )
                    return ("fatal", result)
                except (ctx.aiohttp.ClientError, ctx.asyncio.TimeoutError) as exc:
                    if attempt == request_retries - 1:
                        last_transient_error = exc
                        ctx.log(
                            event="network_error",
                            status="radar_request_error",
                            url=request_url,
                            rollcall_id=rollcall_id,
                            rollcall_type="radar",
                            message="雷達點名請求失敗。",
                            error=exc,
                            extra={"label": label, "strategy": "global_wgs84"},
                        )
                        return ("transient", None)
                    await ctx.asyncio.sleep(1)
            return ("transient", None)

        async def submit_point(point: ctx.GeoPoint, label: str) -> str:
            nonlocal found, final_status
            kind, result = await try_coord(point, label)
            if kind == "scope_distance" and result is not None:
                observations.append(ctx.GlobalDistanceObservation(point, result.distance, label))
                ctx.log_print("{} 距離 {:.2f} 公尺。".format(label, result.distance))
            elif kind == "success":
                detail = label
                if result is not None and result.present_hint and not result.success:
                    detail = "{} verified-present".format(label)
                if not await _announce_radar_success(
                    client,
                    rollcall_id,
                    method="global_wgs84",
                    detail=detail,
                ):
                    found = False
                    final_status = "submitted_unconfirmed"
                    raise _RadarSubmittedUnconfirmed("雷達座標已送出但尚未確認 on_call_fine。")
            elif kind == "transient":
                await register_attempt_status("transient")
            elif kind == "fatal":
                stop_event.set()
            if kind != "transient":
                await register_attempt_status(kind)
            return kind

        async def try_estimate_point(label: str, status: str, message: str) -> bool:
            nonlocal final_estimate
            if stop_event.is_set() or request_count >= max_queries or len(observations) < 3:
                return False
            try:
                final_estimate = ctx.solve_global_radar(
                    observations,
                    config=solver_config,
                    initial=final_estimate.point if final_estimate else None,
                )
            except ctx.RadarGeometryError as exc:
                ctx.log(
                    event="global_radar_estimate",
                    status="estimate_failed",
                    rollcall_id=rollcall_id,
                    rollcall_type="radar",
                    message="全球雷達中途估計暫時無法求解，繼續採樣。",
                    error=exc,
                    extra={"estimate_label": label, "request_count": request_count},
                )
                return False
            extra = _estimate_log_extra(final_estimate)
            extra.update({"estimate_label": label, "request_count": request_count})
            ctx.log(
                event="global_radar_estimate",
                status=status,
                rollcall_id=rollcall_id,
                rollcall_type="radar",
                message=message,
                extra=extra,
            )
            ctx.log_print(
                "{}：{:.8f}, {:.8f}；RMSE {:.2f}m。".format(
                    label,
                    final_estimate.point.lat,
                    final_estimate.point.lon,
                    final_estimate.residual_rmse,
                )
            )
            kind = await submit_point(final_estimate.point, label)
            if kind == "success":
                return True
            if kind in {"fatal", "max_queries"}:
                stop_event.set()
            return False

        async def submit_stage(
            points: ctx.Sequence[ctx.GeoPoint],
            prefix: str,
            *,
            adaptive_estimate_label_prefix: str = "",
            adaptive_estimate_status: str = "",
            adaptive_estimate_message: str = "",
        ) -> bool:
            ring_size = max(1, int(getattr(solver_config, "bearing_count", 12) or 12))
            for index, point in enumerate(points, start=1):
                if stop_event.is_set() or request_count >= max_queries:
                    break
                kind = await submit_point(point, "{}-{}".format(prefix, index))
                if kind == "success":
                    return True
                if fatal_error is not None or kind in {"fatal", "max_queries"}:
                    break
                if (
                    adaptive_estimate_enabled
                    and adaptive_estimate_label_prefix
                    and index % ring_size == 0
                    and not stop_event.is_set()
                    and request_count < max_queries
                ):
                    ring_index = index // ring_size
                    if await try_estimate_point(
                        "{}-ring-{}".format(adaptive_estimate_label_prefix, ring_index),
                        adaptive_estimate_status,
                        adaptive_estimate_message,
                    ):
                        return True
            return False

        progress_task = ctx.asyncio.create_task(progress_reporter())
        try:
            ctx.log_print("啟動全球雷達定位：送出 12 個 WGS84 全球錨點...")
            if await submit_stage(ctx.global_anchor_points(solver_config.anchor_count), "global-anchor"):
                final_status = "success"
                return True
            if fatal_error is None and len(observations) < 3 and not stop_event.is_set():
                fatal_error = ctx.RadarGeometryError("全球雷達定位距離觀測不足，無法求解。")
                stop_event.set()
            if fatal_error is None and len(observations) >= 3:
                final_estimate = ctx.solve_global_radar(observations, config=solver_config)
                ctx.log(
                    event="global_radar_estimate",
                    status="anchor_estimate",
                    rollcall_id=rollcall_id,
                    rollcall_type="radar",
                    message="全球錨點粗定位完成。",
                    extra=_estimate_log_extra(final_estimate),
                )
                ctx.log_print(
                    "全球錨點粗定位：{:.8f}, {:.8f}；開始 60 點局部採樣...".format(
                        final_estimate.point.lat,
                        final_estimate.point.lon,
                    )
                )
                if await submit_stage(
                    ctx.standard_sample_points(final_estimate.point, solver_config),
                    "local-standard",
                    adaptive_estimate_label_prefix="estimate-standard",
                    adaptive_estimate_status="standard_ring_estimate",
                    adaptive_estimate_message="全球雷達標準採樣圈估計完成。",
                ):
                    final_status = "success"
                    return True
            if fatal_error is None and len(observations) >= 3 and not stop_event.is_set():
                final_estimate = ctx.solve_global_radar(observations, config=solver_config, initial=final_estimate.point if final_estimate else None)
                ctx.log(
                    event="global_radar_estimate",
                    status="standard_estimate",
                    rollcall_id=rollcall_id,
                    rollcall_type="radar",
                    message="全球雷達標準 72 點定位完成。",
                    extra=_estimate_log_extra(final_estimate),
                )
                ctx.log_print(
                    "全球 72 點估計：{:.8f}, {:.8f}；RMSE {:.2f}m，95% 不確定度 {}m。".format(
                        final_estimate.point.lat,
                        final_estimate.point.lon,
                        final_estimate.residual_rmse,
                        "{:.2f}".format(final_estimate.uncertainty_95_meters)
                        if math.isfinite(final_estimate.uncertainty_95_meters)
                        else "inf",
                    )
                )
                if request_count < max_queries:
                    kind = await submit_point(final_estimate.point, "estimate-standard")
                    if kind == "success":
                        final_status = "success"
                        return True
                    if kind == "fatal":
                        stop_event.set()
            needs_supplement = (
                fatal_error is None
                and final_estimate is not None
                and (not stop_event.is_set())
                and request_count < max_queries
                and (found is False)
                and ctx.should_request_supplement(final_estimate, solver_config)
            )
            if (
                fatal_error is None
                and final_estimate is not None
                and (not stop_event.is_set())
                and request_count < max_queries
                and found is False
            ):
                needs_supplement = True
            if needs_supplement:
                ctx.log_print("標準估計仍未命中，追加 36 點精修採樣...")
                if await submit_stage(
                    ctx.supplement_sample_points(final_estimate.point, solver_config),
                    "local-supplement",
                    adaptive_estimate_label_prefix="estimate-supplement",
                    adaptive_estimate_status="supplement_ring_estimate",
                    adaptive_estimate_message="全球雷達補充採樣圈估計完成。",
                ):
                    final_status = "success"
                    return True
                if fatal_error is None and len(observations) >= 3 and not stop_event.is_set():
                    final_estimate = ctx.solve_global_radar(observations, config=solver_config, initial=final_estimate.point)
                    ctx.log(
                        event="global_radar_estimate",
                        status="supplement_estimate",
                        rollcall_id=rollcall_id,
                        rollcall_type="radar",
                        message="全球雷達 108 點補充定位完成。",
                        extra=_estimate_log_extra(final_estimate),
                    )
                    if request_count < max_queries:
                        kind = await submit_point(final_estimate.point, "estimate-supplement")
                        if kind == "success":
                            final_status = "success"
                            return True
            if (
                fatal_error is None
                and final_estimate is not None
                and found is False
                and not stop_event.is_set()
            ):
                success = await _run_unbounded_grid_retry(
                    client=client,
                    rollcall_id=rollcall_id,
                    center=final_estimate.point,
                    radar_config=radar_config,
                    submit_candidate=lambda point, label: try_coord(
                        point,
                        label,
                        enforce_max_queries=False,
                    ),
                    success_method="global_wgs84",
                )
                if success:
                    final_status = "success"
                    return True
                final_status = "failed"
                raise _RadarNoFallback("雷達最終棋盤格重試已停止。")
            if fatal_error is not None:
                final_status = "failed"
                raise fatal_error
            text = "雷達點名 #{} 全球定位未命中：已送出 {} 次，距離觀測 {} 筆。".format(
                rollcall_id,
                request_count,
                len(observations),
            )
            ctx.log_print(text)
            await ctx.mes(text)
            return False
        except ctx.RadarGeometryError as exc:
            fatal_error = exc
            text = "雷達點名 #{} 失敗：全球定位模型無法求解 ({})。".format(rollcall_id, exc)
            ctx.log_print(text)
            await ctx.mes(text)
            return False
        finally:
            progress_done.set()
            await progress_task
            elapsed = ctx.time.perf_counter() - started_at
            summary_extra = {
                "strategy": "global_wgs84",
                "spend_time_seconds": round(elapsed, 2),
                "request_count": request_count,
                "max_queries": max_queries,
                "observation_count": len(observations),
                "cooldowns_used": cooldown_tracker.cooldowns_used,
                "fatal_error": ctx.normalize_text(fatal_error) or None,
                "standard_query_count": global_config.get("standard_query_count"),
                "supplement_query_count": global_config.get("supplement_query_count"),
            }
            summary_extra.update(_estimate_log_extra(final_estimate))
            ctx.log(
                event="global_radar_summary",
                status=final_status if found else "failed",
                rollcall_id=rollcall_id,
                rollcall_type="radar",
                message="全球雷達定位流程結束。",
                extra=summary_extra,
            )


async def legacy_radar(main_session: ctx.aiohttp.ClientSession, rollcall: ctx.Dict[str, ctx.Any]) -> bool:
    """Retained legacy THU campus-geometry radar solver — DETACHED from the live flow.

    This is ancient code, kept on purpose (not deleted) for historical reference.
    The monitor never reaches it: ``radar()`` now runs ``empty_answer -> global_wgs84``
    only, and the ``legacy_thu`` strategy / ``legacy_fallback_enabled`` config knobs
    were removed. It is still exercised directly by tests via the THU campus
    probe-and-trilaterate helpers in ``radar_solver.py``. Do NOT wire it back into
    the dispatch in ``radar()``.
    """
    rollcall_id = rollcall.get('rollcall_id')
    device_id = ctx.random_id()
    headers = {'User-Agent': ctx.random_ua()}
    session_kwargs: ctx.Dict[str, ctx.Any] = {'connector': ctx.create_http_connector(), 'headers': headers, 'cookie_jar': ctx.aiohttp.CookieJar(unsafe=True)}
    timeout = ctx.create_http_client_timeout()
    if timeout is not None:
        session_kwargs['timeout'] = timeout
    async with ctx.aiohttp.ClientSession(**session_kwargs) as session:
        ctx.clone_session_cookies(main_session, session)
        request_ssl = ctx.get_ssl_request_setting()
        client = ctx.create_tron_http_client(session, request_ssl=request_ssl)
        endpoints = ctx.get_active_http_endpoints()
        base_url = endpoints.base_url.rstrip('/')
        user_id = await client.fetch_user_id()
        lite_url = f'{base_url}/api/rollcall/{rollcall_id}/lite'
        async with session.get(lite_url, ssl=request_ssl) as resp:
            lite_status = resp.status
            lite_response_url = str(resp.url)
            if lite_status in (401, 403) or 'login' in lite_response_url.lower():
                raise ctx.UnauthorizedError('雷達點名 lite 資訊請求未授權，Cookie 可能已過期。')
            if lite_status == 200:
                try:
                    lite_data = await resp.json()
                except (ctx.aiohttp.ContentTypeError, ValueError):
                    lite_data = rollcall
                    ctx.log(event='radar_lite_fetch', status='invalid_json', url=lite_response_url, http_status=lite_status, rollcall_id=rollcall_id, rollcall_type='radar', message='雷達 lite 回應無法解析，改用 rollcall 摘要。')
            else:
                body_text = await resp.text()
                ctx.log(event='radar_lite_fetch', status='failed', url=lite_response_url, http_status=lite_status, rollcall_id=rollcall_id, rollcall_type='radar', message='雷達 lite 資訊請求失敗。', error=body_text[:120])
                if lite_status == 429 or 500 <= lite_status <= 599:
                    text = f'雷達點名 #{rollcall_id} 失敗：lite 資訊請求暫時不可用 (HTTP {lite_status})。'
                    ctx.log_print(text)
                    await ctx.mes(text)
                    return False
                lite_data = rollcall
        lite_info = ctx.parse_radar_lite_payload(lite_data, fallback_rollcall=rollcall)
        use_beacon = lite_info.use_beacon
        beacon_nonce = lite_info.beacon_nonce

        async def try_coord(point: ctx.GeoPoint, label: str='') -> ctx.RadarCoordinateResult:
            payload = ctx.build_radar_answer_payload(point, device_id=device_id, user_id=user_id, use_beacon=use_beacon, beacon_nonce=beacon_nonce, accuracy=ctx.random.randint(40, 80))
            request_url = f'{base_url}/api/rollcall/{rollcall_id}/answer?api_version=1.76'
            async with session.put(request_url, json=payload, ssl=request_ssl) as resp:
                body_text = await resp.text()
                if resp.status in (401, 403) or 'login' in str(resp.url).lower():
                    raise ctx.UnauthorizedError('雷達點名座標送出未授權，Cookie 可能已過期。')
                result = ctx.parse_radar_answer_result(resp.status, body_text)
            diagnostic = ctx.build_radar_attempt_diagnostic(label=label, point=point, result=result, payload=payload)
            diagnostic["strategy"] = "legacy_thu"
            if result.success:
                ctx.log(event='radar_coordinate_attempt', status='success', rollcall_id=rollcall_id, rollcall_type='radar', message='雷達點名座標送出成功。', extra=diagnostic)
                return result
            if result.is_scope_distance:
                ctx.log(event='radar_coordinate_attempt', status='scope_distance', rollcall_id=rollcall_id, rollcall_type='radar', message='雷達點名座標未命中，已取得距離。', extra=diagnostic)
                return result
            ctx.log(event='radar_coordinate_attempt', status='failed', rollcall_id=rollcall_id, rollcall_type='radar', message='雷達點名座標送出被拒絕。', extra=diagnostic)
            return result

        async def try_coord_kind(point: ctx.GeoPoint, label: str='') -> ctx.Tuple[str, ctx.Optional[ctx.RadarCoordinateResult]]:
            result = await try_coord(point, label)
            if result.success:
                return ('success', result)
            if result.is_scope_distance:
                return ('scope_distance', result)
            if _is_transient_radar_result(result):
                return ('transient', result)
            return ('fatal', result)

        radar_config = _read_radar_config()
        max_distance_probes = int(radar_config.get('max_distance_probes', 4))
        try:
            probe_plan = ctx.build_probe_plan(radar_config.get('boundary_points', ctx.DEFAULT_CONFIG['radar']['boundary_points']), allow_outside=bool(radar_config.get('allow_outside_probe', True)), outside_scale=float(radar_config.get('outside_scale', 1.6)))
        except (ctx.RadarGeometryError, ValueError) as exc:
            text = f'雷達點名 #{rollcall_id} 失敗：場域設定無法建立定位模型 ({exc})。'
            ctx.log_print(text)
            await ctx.mes(text)
            return False
        observations: ctx.List[ctx.DistanceObservation] = []
        ctx.log_print('啟動 THU fallback 雷達定位：以外擴三點探測場域距離...')
        for index, local_probe in enumerate(probe_plan.probes, start=1):
            geo_probe = probe_plan.frame.to_geo(local_probe)
            result = await try_coord(geo_probe, f'legacy-probe-{index}')
            if result.success:
                return await _announce_radar_success(
                    client,
                    rollcall_id,
                    method="legacy_thu",
                    detail=f"legacy-probe-{index}",
                )
            if not result.is_scope_distance:
                text = f'雷達點名 #{rollcall_id} 失敗：伺服器拒絕 THU fallback 探測點 {index} ({result.error_code})。'
                ctx.log_print(text)
                await ctx.mes(text)
                return False
            observations.append(ctx.DistanceObservation(local_probe, result.distance))
            ctx.log_print(f'THU fallback 探測點 {index} 距離 {result.distance:.2f} 公尺。')
        try:
            solution = ctx.solve_position(observations)
        except ctx.RadarGeometryError as exc:
            text = f'雷達點名 #{rollcall_id} 失敗：THU fallback 前三點定位無法求解 ({exc})。'
            ctx.log_print(text)
            await ctx.mes(text)
            return False
        if max_distance_probes >= 4:
            fourth_probe = ctx.choose_fourth_probe(solution.point, tuple((observation.point for observation in observations)), probe_plan.hull, allow_outside=bool(radar_config.get('allow_outside_probe', True)))
            fourth_geo = probe_plan.frame.to_geo(fourth_probe)
            result = await try_coord(fourth_geo, 'legacy-probe-4')
            if result.success:
                return await _announce_radar_success(
                    client,
                    rollcall_id,
                    method="legacy_thu",
                    detail="legacy-probe-4",
                )
            if not result.is_scope_distance:
                text = f'雷達點名 #{rollcall_id} 失敗：伺服器拒絕 THU fallback 第四探測點 ({result.error_code})。'
                ctx.log_print(text)
                await ctx.mes(text)
                return False
            observations.append(ctx.DistanceObservation(fourth_probe, result.distance))
            try:
                solution = ctx.solve_position(observations, initial=solution.point)
            except ctx.RadarGeometryError as exc:
                text = f'雷達點名 #{rollcall_id} 失敗：THU fallback 四點定位無法求解 ({exc})。'
                ctx.log_print(text)
                await ctx.mes(text)
                return False
            ctx.log_print(f'THU fallback 第四探測點距離 {result.distance:.2f} 公尺；定位殘差約 {solution.residual_rmse:.2f} 公尺。')
        estimated = probe_plan.frame.to_geo(solution.point)
        ctx.log_print(f'THU fallback 定位完成：估計座標 {estimated.lat:.8f}, {estimated.lon:.8f}，改用共用最終棋盤格重試...')
        success = await _run_unbounded_grid_retry(
            client=client,
            rollcall_id=rollcall_id,
            center=estimated,
            radar_config=radar_config,
            submit_candidate=try_coord_kind,
            success_method="legacy_thu",
        )
        if success:
            return True
        text = f'雷達點名 #{rollcall_id} 最終失敗：THU fallback 最終棋盤格未命中或點名已關閉。'
        ctx.log_print(text)
        await ctx.mes(text)
        return False

from __future__ import annotations

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore


def __getattr__(name: str):
    return getattr(ctx, name)



async def radar(main_session: ctx.aiohttp.ClientSession, rollcall: ctx.Dict[str, ctx.Any]) -> bool:
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
            if result.success:
                ctx.log(event='radar_coordinate_attempt', status='success', rollcall_id=rollcall_id, rollcall_type='radar', message='雷達點名座標送出成功。', extra=diagnostic)
                return result
            if result.is_scope_distance:
                ctx.log(event='radar_coordinate_attempt', status='scope_distance', rollcall_id=rollcall_id, rollcall_type='radar', message='雷達點名座標未命中，已取得距離。', extra=diagnostic)
                return result
            ctx.log(event='radar_coordinate_attempt', status='failed', rollcall_id=rollcall_id, rollcall_type='radar', message='雷達點名座標送出被拒絕。', extra=diagnostic)
            return result
        radar_config = ctx.normalize_config(ctx.copy.deepcopy(ctx.CONFIG)).get('radar', ctx.DEFAULT_CONFIG['radar'])
        max_distance_probes = int(radar_config.get('max_distance_probes', 4))
        max_final_attempts = int(radar_config.get('max_final_attempts', 100))
        final_precision_min = int(radar_config.get('final_precision_min', 3))
        final_precision_max = int(radar_config.get('final_precision_max', 14))
        final_precisions = tuple(range(final_precision_max, final_precision_min - 1, -1))
        final_grid_step_meters = float(radar_config.get('final_grid_step_meters', 5.0))
        final_grid_radius_meters = float(radar_config.get('final_grid_radius_meters', 20.0))
        try:
            probe_plan = ctx.build_probe_plan(radar_config.get('boundary_points', ctx.DEFAULT_CONFIG['radar']['boundary_points']), allow_outside=bool(radar_config.get('allow_outside_probe', True)), outside_scale=float(radar_config.get('outside_scale', 1.6)))
        except (ctx.RadarGeometryError, ValueError) as exc:
            text = f'雷達點名 #{rollcall_id} 失敗：場域設定無法建立定位模型 ({exc})。'
            ctx.log_print(text)
            await ctx.mes(text)
            return False
        observations: ctx.List[ctx.DistanceObservation] = []
        ctx.log_print('啟動雷達定位：以外擴三點探測場域距離...')
        for index, local_probe in enumerate(probe_plan.probes, start=1):
            geo_probe = probe_plan.frame.to_geo(local_probe)
            result = await try_coord(geo_probe, f'probe-{index}')
            if result.success:
                text = f'雷達點名 #{rollcall_id} 成功！(探測點 {index} 命中)'
                ctx.log_print(text)
                await ctx.mes(text)
                return True
            if not result.is_scope_distance:
                text = f'雷達點名 #{rollcall_id} 失敗：伺服器拒絕探測點 {index} ({result.error_code})。'
                ctx.log_print(text)
                await ctx.mes(text)
                return False
            observations.append(ctx.DistanceObservation(local_probe, result.distance))
            ctx.log_print(f'探測點 {index} 距離 {result.distance:.2f} 公尺。')
        try:
            solution = ctx.solve_position(observations)
        except ctx.RadarGeometryError as exc:
            text = f'雷達點名 #{rollcall_id} 失敗：前三點定位無法求解 ({exc})。'
            ctx.log_print(text)
            await ctx.mes(text)
            return False
        if max_distance_probes >= 4:
            fourth_probe = ctx.choose_fourth_probe(solution.point, tuple((observation.point for observation in observations)), probe_plan.hull, allow_outside=bool(radar_config.get('allow_outside_probe', True)))
            fourth_geo = probe_plan.frame.to_geo(fourth_probe)
            result = await try_coord(fourth_geo, 'probe-4')
            if result.success:
                text = f'雷達點名 #{rollcall_id} 成功！(第四探測點命中)'
                ctx.log_print(text)
                await ctx.mes(text)
                return True
            if not result.is_scope_distance:
                text = f'雷達點名 #{rollcall_id} 失敗：伺服器拒絕第四探測點 ({result.error_code})。'
                ctx.log_print(text)
                await ctx.mes(text)
                return False
            observations.append(ctx.DistanceObservation(fourth_probe, result.distance))
            try:
                solution = ctx.solve_position(observations, initial=solution.point)
            except ctx.RadarGeometryError as exc:
                text = f'雷達點名 #{rollcall_id} 失敗：四點定位無法求解 ({exc})。'
                ctx.log_print(text)
                await ctx.mes(text)
                return False
            ctx.log_print(f'第四探測點距離 {result.distance:.2f} 公尺；定位殘差約 {solution.residual_rmse:.2f} 公尺。')
        candidates = ctx.final_candidate_points(probe_plan.frame, solution.point, max_candidates=max_final_attempts, precisions=final_precisions, grid_step_meters=final_grid_step_meters, grid_radius_meters=final_grid_radius_meters)
        estimated = probe_plan.frame.to_geo(solution.point)
        ctx.log_print(f'定位完成：估計座標 {estimated.lat:.8f}, {estimated.lon:.8f}，開始小數位與 {final_grid_step_meters:g}m 方格候選重試...')
        for index, candidate in enumerate(candidates, start=1):
            result = await try_coord(candidate, f'candidate-{index}')
            if result.success:
                text = f'雷達點名 #{rollcall_id} 成功！(候選座標 {index}/{len(candidates)})'
                ctx.log_print(text)
                await ctx.mes(text)
                return True
            if not result.is_scope_distance:
                text = f'雷達點名 #{rollcall_id} 失敗：候選座標被拒絕 ({result.error_code})。'
                ctx.log_print(text)
                await ctx.mes(text)
                return False
            ctx.log_print(f'候選 {index}/{len(candidates)} 未命中，剩餘距離 {result.distance:.2f} 公尺。')
        text = f'雷達點名 #{rollcall_id} 最終失敗：已用完 {len(candidates)} 個候選座標。'
        ctx.log_print(text)
        await ctx.mes(text)
        return False

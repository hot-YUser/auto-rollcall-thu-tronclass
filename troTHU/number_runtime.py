from __future__ import annotations

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore


def __getattr__(name: str):
    return getattr(ctx, name)



async def number(main_session: ctx.aiohttp.ClientSession, rcid: int) -> str:
    request_count = 0
    found_code = 'NA'
    submitted_unconfirmed_code = ''
    stop_event = ctx.asyncio.Event()
    progress_done = ctx.asyncio.Event()
    device = ctx.random_id()
    started_at = ctx.time.perf_counter()
    headers = {'User-Agent': ctx.random_ua()}
    fatal_error: ctx.Optional[BaseException] = None
    last_transient_error: ctx.Optional[BaseException] = None
    request_url = '{}/api/rollcall/{}/answer_number_rollcall'.format(ctx.get_active_http_endpoints().base_url.rstrip('/'), rcid)
    latest_try_code = '----'
    number_config = ctx.get_number_config()
    default_number_config = ctx.DEFAULT_CONFIG['number']
    configured_concurrency = int(number_config.get('concurrency', ctx.NUMBER_WORKER_COUNT))
    if configured_concurrency == default_number_config['concurrency']:
        configured_concurrency = ctx.NUMBER_WORKER_COUNT
    configured_min_concurrency = int(number_config.get('min_concurrency', ctx.NUMBER_MIN_WORKER_COUNT))
    if configured_min_concurrency == default_number_config['min_concurrency']:
        configured_min_concurrency = ctx.NUMBER_MIN_WORKER_COUNT
    request_retries = int(number_config.get('request_retries', ctx.NUMBER_REQUEST_RETRIES))
    if request_retries == default_number_config['request_retries']:
        request_retries = ctx.NUMBER_REQUEST_RETRIES
    cooldown_policy = ctx.TransientCooldownPolicy.from_mapping(
        number_config,
        default_cooldown_seconds=ctx.NUMBER_COOLDOWN_SECONDS,
        default_max_cooldowns=ctx.NUMBER_MAX_COOLDOWNS,
        default_transient_failure_threshold=ctx.NUMBER_TRANSIENT_FAILURE_THRESHOLD,
        default_transient_failure_ratio=ctx.NUMBER_TRANSIENT_FAILURE_RATIO,
    )
    cooldown_tracker = ctx.TransientCooldownTracker(cooldown_policy)
    cooldown_seconds = cooldown_policy.cooldown_seconds
    current_concurrency = max(1, min(configured_concurrency, ctx.NUMBER_CODE_LIMIT))
    min_concurrency = max(1, min(configured_min_concurrency, current_concurrency))
    direct_config = number_config.get('direct_code_lookup', {})
    if not isinstance(direct_config, dict):
        direct_config = {}
    direct_lookup_enabled = ctx.coerce_bool(direct_config.get('enabled', True), True)
    fallback_bruteforce = ctx.coerce_bool(direct_config.get('fallback_bruteforce', True), True)
    provider_supports_direct = bool(ctx.provider_report().get('capabilities', {}).get('direct_code_lookup'))
    direct_read_attempted = False
    direct_read_status = ''

    async def try_number_code(session: ctx.aiohttp.ClientSession, try_code: int, *, method: str='brute_force') -> str:
        nonlocal request_count, found_code, submitted_unconfirmed_code, fatal_error, latest_try_code, last_transient_error
        payload = {'deviceId': device, 'numberCode': '{:04d}'.format(try_code)}
        for attempt in range(request_retries):
            if stop_event.is_set():
                return 'stopped'
            try:
                latest_try_code = payload['numberCode']
                async with session.put(request_url, json=payload) as resp:
                    request_count += 1
                    if stop_event.is_set() and found_code != 'NA':
                        return
                    body = await resp.text()
                    classification = ctx.classify_number_response(resp.status, body)
                    if classification.status == ctx.NumberAttemptStatus.SUCCESS:
                        stop_event.set()
                        try:
                            verification = await ctx.verify_rollcall_on_call_fine(
                                session,
                                rcid,
                                rollcall_type='number',
                            )
                        except ctx.UnauthorizedError as exc:
                            if fatal_error is None and found_code == 'NA':
                                fatal_error = exc
                            return 'fatal'
                        if not (verification.get('ok') and verification.get('status') == 'on_call_fine'):
                            submitted_unconfirmed_code = payload['numberCode']
                            ctx.log(
                                event='number_rollcall_submitted_unconfirmed',
                                path=ctx.number_log_path(rcid),
                                counter=try_code,
                                status='submitted_unconfirmed',
                                url=str(resp.url),
                                http_status=resp.status,
                                rollcall_id=rcid,
                                rollcall_type='number',
                                message='數字點名碼已送出，但尚未確認 on_call_fine。',
                                extra={'code': submitted_unconfirmed_code, 'verification': verification},
                            )
                            await ctx.mes('數字點名碼 {} 已送出，但尚未確認 on_call_fine；下一輪會繼續檢查。'.format(submitted_unconfirmed_code))
                            return 'submitted_unconfirmed'
                        found_code = payload['numberCode']
                        banner = ctx.format_rollcall_success_banner(
                            ctx.AttendanceType.NUMBER,
                            rcid,
                            method=method,
                            detail='on_call_fine',
                            code=found_code,
                            attendance_rate=ctx.format_success_banner_attendance_rate(verification),
                        )
                        ctx.log_print(banner)
                        ctx.remember_rollcall_progress(verification)
                        await ctx.mes('數字點名成功！', highlight_block=banner)
                        return 'success'
                    elif classification.status == ctx.NumberAttemptStatus.WRONG_CODE:
                        return 'wrong'
                    elif classification.status == ctx.NumberAttemptStatus.UNAUTHORIZED:
                        ctx.log(event='tron_http_error', path=ctx.number_log_path(rcid), counter=try_code, status='number_unauthorized', url=str(resp.url), http_status=resp.status, rollcall_id=rcid, rollcall_type='number', message='數字點名期間登入狀態失效。', payload_excerpt=body[:300])
                        if fatal_error is None and found_code == 'NA':
                            fatal_error = ctx.UnauthorizedError(classification.message or '數字點名期間登入狀態失效。')
                            stop_event.set()
                        return 'fatal'
                    elif classification.status == ctx.NumberAttemptStatus.TRANSIENT_FAILURE:
                        last_transient_error = ctx.UnexpectedResponseError('HTTP {}: {}'.format(resp.status, classification.message or body[:200]))
                        ctx.log(event='network_error', path=ctx.number_log_path(rcid), counter=try_code, status='number_transient_response', url=str(resp.url), http_status=resp.status, rollcall_id=rcid, rollcall_type='number', message='數字點名遇到暫時性 HTTP 錯誤。', payload_excerpt=body[:300])
                        return 'transient'
                    else:
                        ctx.log(event='tron_http_error', path=ctx.number_log_path(rcid), counter=try_code, status='unexpected_number_response', url=str(resp.url), http_status=resp.status, rollcall_id=rcid, rollcall_type='number', message='數字點名回傳了未預期的 HTTP 狀態。', payload_excerpt=body[:300])
                        if fatal_error is None and found_code == 'NA':
                            fatal_error = ctx.UnexpectedResponseError('HTTP {}: {}'.format(resp.status, classification.message or body[:200]))
                            stop_event.set()
                        return 'fatal'
            except (ctx.aiohttp.ClientError, ctx.asyncio.TimeoutError) as exc:
                if attempt == request_retries - 1:
                    ctx.log(event='network_error', path=ctx.number_log_path(rcid), counter=try_code, status='number_request_error', url=request_url, rollcall_id=rcid, rollcall_type='number', message='數字點名請求失敗。', error=exc)
                    last_transient_error = exc
                    return 'transient'
                else:
                    await ctx.asyncio.sleep(1)
        return 'transient'

    async def progress_reporter() -> None:
        while not progress_done.is_set():
            ctx.status_print(ctx.build_number_progress_message(rcid, request_count, latest_try_code, started_at))
            try:
                await ctx.asyncio.wait_for(progress_done.wait(), timeout=ctx.NUMBER_PROGRESS_INTERVAL)
            except ctx.asyncio.TimeoutError:
                continue

    async def attempt_direct_code_lookup(session: ctx.aiohttp.ClientSession) -> bool:
        nonlocal direct_read_attempted, direct_read_status
        direct_read_attempted = True
        try:
            client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
            payload = await client.fetch_student_rollcalls(rcid)
        except (ctx.TronHttpError, ctx.aiohttp.ClientError, ctx.asyncio.TimeoutError, ctx.ssl.SSLError) as exc:
            direct_read_status = 'lookup_failed'
            ctx.log(event='number_direct_lookup', path=ctx.number_log_path(rcid), status='lookup_failed', url=request_url, rollcall_id=rcid, rollcall_type='number', message='直接讀碼讀取失敗，改用暴力猜碼。', error=exc)
            return False
        lookup = ctx.parse_number_code_payload(payload)
        if not lookup.has_code:
            direct_read_status = 'no_code'
            ctx.log(event='number_direct_lookup', path=ctx.number_log_path(rcid), status='no_code', rollcall_id=rcid, rollcall_type='number', message='student_rollcalls 未提供可用 number_code，改用暴力猜碼。', extra={'source': lookup.source, 'rollcall_status': lookup.status})
            return False
        ctx.log(event='number_direct_lookup', path=ctx.number_log_path(rcid), status='code_found', rollcall_id=rcid, rollcall_type='number', message='直接讀碼成功，單發提交點名碼。', extra={'source': lookup.source, 'rollcall_status': lookup.status})
        submit_result = await try_number_code(session, int(lookup.code), method='direct_read')
        direct_read_status = 'success' if found_code != 'NA' else 'submit_{}'.format(submit_result)
        return found_code != 'NA'

    session_kwargs: ctx.Dict[str, ctx.Any] = {'connector': ctx.create_http_connector(), 'headers': headers}
    timeout = ctx.create_http_client_timeout()
    if timeout is not None:
        session_kwargs['timeout'] = timeout
    async with ctx.aiohttp.ClientSession(**session_kwargs) as session:
        ctx.clone_session_cookies(main_session, session)
        if direct_lookup_enabled and provider_supports_direct and (not stop_event.is_set()):
            await attempt_direct_code_lookup(session)
            if found_code == 'NA' and fatal_error is None and (not fallback_bruteforce):
                stop_event.set()
        ctx.status_print(ctx.build_number_progress_message(rcid, request_count, latest_try_code, started_at))
        progress_task = ctx.asyncio.create_task(progress_reporter())
        try:
            next_code = 0
            while next_code < ctx.NUMBER_CODE_LIMIT and (not stop_event.is_set()):
                batch_size = max(1, min(current_concurrency, ctx.NUMBER_CODE_LIMIT - next_code))
                batch = list(range(next_code, next_code + batch_size))
                next_code += batch_size
                results = await ctx.asyncio.gather(*[try_number_code(session, candidate, method='brute_force') for candidate in batch])
                transient_count = sum((1 for result in results if result == 'transient'))
                if fatal_error is not None or stop_event.is_set():
                    break
                if transient_count == 0:
                    continue
                cooldown_decision = cooldown_tracker.record_batch(transient_count, len(batch))
                if not cooldown_decision.should_cooldown:
                    continue
                if cooldown_decision.exhausted:
                    fatal_error = last_transient_error or ctx.UnexpectedResponseError('數字點名暫時性錯誤過多，已停止嘗試。')
                    stop_event.set()
                    break
                current_concurrency = max(min_concurrency, current_concurrency // 2)
                ctx.log(event='number_rollcall_cooldown', path=ctx.number_log_path(rcid), status='cooldown', rollcall_id=rcid, rollcall_type='number', message='暫時性錯誤過多，降低併發並暫停後重試。', extra={'transient_count': cooldown_decision.transient_count, 'batch_size': cooldown_decision.sample_size, 'transient_ratio': round(cooldown_decision.transient_ratio, 3), 'cooldowns_used': cooldown_decision.cooldowns_used, 'next_concurrency': current_concurrency, 'cooldown_seconds': cooldown_seconds})
                ctx.status_print('數字點名遇到限流或伺服器錯誤，休息 {:.1f}s 後以 {} 併發重試'.format(cooldown_seconds, current_concurrency))
                await ctx.asyncio.sleep(cooldown_seconds)
        finally:
            progress_done.set()
            await progress_task
    elapsed = ctx.time.perf_counter() - started_at
    if fatal_error is None and found_code == 'NA' and submitted_unconfirmed_code == '' and (last_transient_error is not None):
        fatal_error = last_transient_error
    if fatal_error is not None:
        summary_status = 'failed'
        summary_message = '數字點名流程提早中止。'
    elif submitted_unconfirmed_code and found_code == 'NA':
        summary_status = 'submitted_unconfirmed'
        summary_message = '數字點名流程已送出但尚未確認。'
    else:
        summary_status = 'completed'
        summary_message = '數字點名流程結束。'
    resolution_method = 'direct_read' if direct_read_status == 'success' else ('brute_force' if found_code != 'NA' else 'none')
    ctx.log(event='number_rollcall_summary', path=ctx.number_log_path(rcid), status=summary_status, rollcall_id=rcid, rollcall_type='number', message=summary_message, extra={'spend_time_seconds': round(elapsed, 2), 'request_count': request_count, 'found_code': found_code, 'submitted_unconfirmed_code': submitted_unconfirmed_code or None, 'stopped_early': found_code != 'NA' or bool(submitted_unconfirmed_code), 'fatal_error': ctx.normalize_text(fatal_error) or None, 'cooldowns_used': cooldown_tracker.cooldowns_used, 'final_concurrency': current_concurrency, 'method': resolution_method, 'direct_read_attempted': direct_read_attempted, 'direct_read_status': direct_read_status})
    if fatal_error is not None:
        raise fatal_error
    text = 'Total time: {:.2f}s\nTotal request: {}/{}{}\nCode: {}\n'.format(elapsed, request_count, ctx.NUMBER_CODE_LIMIT, ' (Stopped early)' if found_code != 'NA' else '', found_code)
    if submitted_unconfirmed_code and found_code == 'NA':
        text += 'Submitted code (unconfirmed): {}\n'.format(submitted_unconfirmed_code)
    ctx.log_print(text)
    await ctx.mes(text)
    return found_code

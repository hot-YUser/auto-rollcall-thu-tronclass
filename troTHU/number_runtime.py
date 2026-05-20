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
    stop_event = ctx.asyncio.Event()
    progress_done = ctx.asyncio.Event()
    device = ctx.random_id()
    started_at = ctx.time.perf_counter()
    headers = {'User-Agent': ctx.random_ua()}
    fatal_error: ctx.Optional[BaseException] = None
    last_transient_error: ctx.Optional[BaseException] = None
    request_url = '{}/api/rollcall/{}/answer_number_rollcall'.format(ctx.TRON, rcid)
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
    cooldown_seconds = float(number_config.get('cooldown_seconds', ctx.NUMBER_COOLDOWN_SECONDS))
    max_cooldowns = int(number_config.get('max_cooldowns', ctx.NUMBER_MAX_COOLDOWNS))
    transient_threshold = int(number_config.get('transient_failure_threshold', ctx.NUMBER_TRANSIENT_FAILURE_THRESHOLD))
    transient_ratio = float(number_config.get('transient_failure_ratio', ctx.NUMBER_TRANSIENT_FAILURE_RATIO))
    current_concurrency = max(1, min(configured_concurrency, ctx.NUMBER_CODE_LIMIT))
    min_concurrency = max(1, min(configured_min_concurrency, current_concurrency))
    cooldowns_used = 0

    async def try_number_code(session: ctx.aiohttp.ClientSession, try_code: int) -> str:
        nonlocal request_count, found_code, fatal_error, latest_try_code, last_transient_error
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
                        found_code = payload['numberCode']
                        stop_event.set()
                        banner = ctx.format_found_code_banner(found_code)
                        ctx.log_print(banner)
                        await ctx.mes('找到點名數字！', highlight_block=banner)
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
    session_kwargs: ctx.Dict[str, ctx.Any] = {'connector': ctx.create_http_connector(), 'headers': headers}
    timeout = ctx.create_http_client_timeout()
    if timeout is not None:
        session_kwargs['timeout'] = timeout
    async with ctx.aiohttp.ClientSession(**session_kwargs) as session:
        ctx.clone_session_cookies(main_session, session)
        ctx.status_print(ctx.build_number_progress_message(rcid, request_count, latest_try_code, started_at))
        progress_task = ctx.asyncio.create_task(progress_reporter())
        try:
            next_code = 0
            while next_code < ctx.NUMBER_CODE_LIMIT and (not stop_event.is_set()):
                batch_size = max(1, min(current_concurrency, ctx.NUMBER_CODE_LIMIT - next_code))
                batch = list(range(next_code, next_code + batch_size))
                next_code += batch_size
                results = await ctx.asyncio.gather(*[try_number_code(session, candidate) for candidate in batch])
                transient_count = sum((1 for result in results if result == 'transient'))
                if fatal_error is not None or stop_event.is_set():
                    break
                if transient_count == 0:
                    continue
                batch_ratio = transient_count / max(len(batch), 1)
                should_cooldown = transient_count >= transient_threshold or (len(batch) >= transient_threshold and batch_ratio >= transient_ratio)
                if not should_cooldown:
                    continue
                cooldowns_used += 1
                if cooldowns_used > max_cooldowns:
                    fatal_error = last_transient_error or ctx.UnexpectedResponseError('數字點名暫時性錯誤過多，已停止嘗試。')
                    stop_event.set()
                    break
                current_concurrency = max(min_concurrency, current_concurrency // 2)
                ctx.log(event='number_rollcall_cooldown', path=ctx.number_log_path(rcid), status='cooldown', rollcall_id=rcid, rollcall_type='number', message='暫時性錯誤過多，降低併發並暫停後重試。', extra={'transient_count': transient_count, 'batch_size': len(batch), 'cooldowns_used': cooldowns_used, 'next_concurrency': current_concurrency, 'cooldown_seconds': cooldown_seconds})
                ctx.status_print('數字點名遇到限流或伺服器錯誤，休息 {:.1f}s 後以 {} 併發重試'.format(cooldown_seconds, current_concurrency))
                await ctx.asyncio.sleep(cooldown_seconds)
        finally:
            progress_done.set()
            await progress_task
    elapsed = ctx.time.perf_counter() - started_at
    if fatal_error is None and found_code == 'NA' and (last_transient_error is not None):
        fatal_error = last_transient_error
    if fatal_error is not None:
        summary_status = 'failed'
        summary_message = '數字點名流程提早中止。'
    else:
        summary_status = 'completed'
        summary_message = '數字點名流程結束。'
    ctx.log(event='number_rollcall_summary', path=ctx.number_log_path(rcid), status=summary_status, rollcall_id=rcid, rollcall_type='number', message=summary_message, extra={'spend_time_seconds': round(elapsed, 2), 'request_count': request_count, 'found_code': found_code, 'stopped_early': found_code != 'NA', 'fatal_error': ctx.normalize_text(fatal_error) or None, 'cooldowns_used': cooldowns_used, 'final_concurrency': current_concurrency})
    if fatal_error is not None:
        raise fatal_error
    text = 'Total time: {:.2f}s\nTotal request: {}/{}{}\nCode: {}\n'.format(elapsed, request_count, ctx.NUMBER_CODE_LIMIT, ' (Stopped early)' if found_code != 'NA' else '', found_code)
    print(text)
    await ctx.mes(text)
    return found_code

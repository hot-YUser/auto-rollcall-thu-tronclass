from __future__ import annotations

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore


def __getattr__(name: str):
    return getattr(ctx, name)



async def qr_command(payload: str) -> int:
    payload = ctx.sanitize_input_field(payload, field_type='qr_payload', field_name='qr payload').value
    headers = {'User-Agent': ctx.random_ua()}
    session_kwargs: ctx.Dict[str, ctx.Any] = {'connector': ctx.create_http_connector(), 'headers': headers}
    timeout = ctx.create_http_client_timeout()
    if timeout is not None:
        session_kwargs['timeout'] = timeout
    async with ctx.aiohttp.ClientSession(**session_kwargs) as session:
        active = ctx.get_active_profile(ctx.CONFIG)
        if ctx.cookie_cache_enabled(ctx.CONFIG):
            ctx.load_session_cookies(session, ctx.BASE_DIR, active.name)
        if not ctx.has_session_cookie(session):
            login_result = await ctx.login(session)
            if not login_result.ok:
                print('Login failed: {}'.format(login_result.status))
                return 1
        try:
            await ctx.submit_qr_payload(session, payload)
            return 0
        except ctx.UnauthorizedError:
            session.cookie_jar.clear()
            ctx.clear_session_cookies(ctx.BASE_DIR, active.name)
            login_result = await ctx.login(session)
            if not login_result.ok:
                print('Login failed after QR session refresh: {}'.format(login_result.status))
                return 1
            await ctx.submit_qr_payload(session, payload)
            return 0


async def qr_data_probe_command(rollcall_id: str, *, samples: int=5, timestamp: str='', json_output: bool=False) -> int:
    rollcall_id = ctx.normalize_text(rollcall_id)
    if not rollcall_id:
        print('qr data-probe 需要 --rollcall-id。')
        return 1
    headers = {'User-Agent': ctx.random_ua()}
    session_kwargs: ctx.Dict[str, ctx.Any] = {'connector': ctx.create_http_connector(), 'headers': headers}
    timeout = ctx.create_http_client_timeout()
    if timeout is not None:
        session_kwargs['timeout'] = timeout
    async with ctx.aiohttp.ClientSession(**session_kwargs) as session:
        active = ctx.get_active_profile(ctx.CONFIG)
        if ctx.cookie_cache_enabled(ctx.CONFIG):
            ctx.load_session_cookies(session, ctx.BASE_DIR, active.name)
        if not ctx.has_session_cookie(session):
            login_result = await ctx.login(session)
            if not login_result.ok:
                print('Login failed: {}'.format(login_result.status))
                return 1
        probe_rollcall = None
        if not timestamp:
            try:
                client = ctx.create_tron_http_client(session, ctx.get_ssl_request_setting())
                rollcalls_result = await client.fetch_rollcalls()
                for item in rollcalls_result.payload.get('rollcalls', []):
                    if isinstance(item, dict) and ctx.normalize_text(item.get('rollcall_id') or item.get('rollcallId') or item.get('id')) == rollcall_id:
                        probe_rollcall = item
                        break
            except Exception:
                probe_rollcall = None
            if probe_rollcall is None:
                print('找不到 rollcall #{} 的伺服器 rollcall_time；請改用 --timestamp 明確指定。'.format(rollcall_id))
                return 1
        summary = await ctx.run_qr_data_probe(session, rollcall_id, endpoints=ctx.get_active_http_endpoints(), base_dir=ctx.BASE_DIR, request_ssl=ctx.get_ssl_request_setting(), timestamp=timestamp or None, rollcall=probe_rollcall, require_server_timestamp=not bool(timestamp), samples=samples, session_id=ctx.get_session_id_header(session), config=ctx.CONFIG)
    if json_output:
        print(ctx.json_text(summary))
    else:
        print('QR data-probe rollcall #{}（時間戳 {}，來源 {}）：'.format(summary.get('rollcall_id'), summary.get('timestamp'), summary.get('timestamp_source') or '-'))
        for item in summary.get('results', []):
            print('  {} -> HTTP {} {}'.format(item.get('label'), item.get('status'), '(2xx!)' if item.get('looks_success') else ''))
        print('任何 2xx 成功？ {}（完整回應已記錄到 log/rollcall_capture/exchanges_{}.jsonl）'.format('是' if summary.get('any_2xx') else '否', summary.get('rollcall_id')))
    return 0 if summary.get('ok') else 1

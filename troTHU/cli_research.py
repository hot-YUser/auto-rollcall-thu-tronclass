from __future__ import annotations

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore


def __getattr__(name: str):
    return getattr(ctx, name)



async def debug_capture_command(output: str='') -> int:
    headers = {'User-Agent': ctx.random_ua()}
    session_kwargs: ctx.Dict[str, ctx.Any] = {'connector': ctx.create_http_connector(), 'headers': headers}
    timeout = ctx.create_http_client_timeout()
    if timeout is not None:
        session_kwargs['timeout'] = timeout
    output_path = ctx.Path(output) if output else ctx.BASE_DIR / 'state' / 'debug-capture' / 'rollcalls.jsonl'
    async with ctx.aiohttp.ClientSession(**session_kwargs) as session:
        active = ctx.get_active_profile(ctx.CONFIG)
        if ctx.cookie_cache_enabled(ctx.CONFIG):
            ctx.load_session_cookies(session, ctx.BASE_DIR, active.name)
        if not ctx.has_session_cookie(session):
            login_result = await ctx.login(session)
            if not login_result.ok:
                print('Login failed: {}'.format(login_result.status))
                return 1
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        result = await client.fetch_rollcalls()
        ctx.append_debug_capture(output_path, 'rollcalls_snapshot', {'url': result.url, 'status_code': result.status_code, 'payload': result.payload, 'profile': active.name})
    print('Debug capture written: {}'.format(output_path))
    return 0


def research_status_command(json_output: bool=False) -> int:
    report = ctx.build_research_status(ctx.CONFIG, provider=ctx.provider_report())
    if json_output:
        print(ctx.json_text(report))
    else:
        research = report.get('research', {})
        print('Research mode: {}'.format('enabled' if research.get('enabled') else 'disabled'))
        print('API exploration: {}'.format('enabled' if research.get('allow_api_exploration') else 'disabled'))
        print('Browser capture: {}'.format('enabled' if research.get('allow_browser_capture') else 'disabled'))
        print('Safe API targets: {}'.format(', '.join(report.get('api_targets', []))))
    return 0


def _research_gate_failure(exc: ctx.ResearchGateError, json_output: bool=False) -> int:
    payload = exc.to_dict()
    if json_output:
        print(ctx.json_text(payload))
    else:
        print('Research command blocked: {}'.format(payload['status']))
    return 1


async def research_api_command(args: ctx.argparse.Namespace) -> int:
    from_config_target = getattr(args, 'target', 'all')
    headers = {'User-Agent': ctx.random_ua()}
    session_kwargs: ctx.Dict[str, ctx.Any] = {'connector': ctx.create_http_connector(), 'headers': headers, 'cookie_jar': ctx.aiohttp.CookieJar(unsafe=True)}
    timeout = ctx.create_http_client_timeout()
    if timeout is not None:
        session_kwargs['timeout'] = timeout
    try:
        ctx.ensure_research_allowed(ctx.CONFIG, 'api')
    except ctx.ResearchGateError as exc:
        return ctx._research_gate_failure(exc, json_output=getattr(args, 'json', False))
    active = ctx.get_active_profile(ctx.CONFIG)
    output_arg = ctx.normalize_text(getattr(args, 'output', ''))
    output_path = ctx.Path(output_arg) if output_arg else None
    report: ctx.Dict[str, ctx.Any]
    async with ctx.aiohttp.ClientSession(**session_kwargs) as session:
        if ctx.cookie_cache_enabled(ctx.CONFIG):
            ctx.load_session_cookies(session, ctx.BASE_DIR, active.name)
        if not ctx.has_session_cookie(session):
            login_result = await ctx.login(session, research_context=True)
            if not login_result.ok:
                report = {'status': 'login_failed', 'target': from_config_target, 'provider': ctx.provider_report().get('key'), 'profile': active.name, 'records': [], 'output_path': str(output_path) if output_path is not None else '', 'warnings': [login_result.status]}
                if getattr(args, 'json', False):
                    print(ctx.json_text(report))
                else:
                    print('Research API capture failed: {}'.format(login_result.status))
                return 1
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        try:
            report = await ctx.capture_research_api_target(session, from_config_target, endpoints=client.endpoints, config=ctx.CONFIG, request_ssl=ctx.get_ssl_request_setting())
        except ctx.ResearchGateError as exc:
            return ctx._research_gate_failure(exc, json_output=getattr(args, 'json', False))
        except ctx.ResearchCaptureError as exc:
            report = exc.to_dict()
            report.update({'target': from_config_target, 'records': [], 'warnings': [exc.status]})
    report['provider'] = ctx.provider_report().get('key')
    report['profile'] = active.name
    report['output_path'] = str(output_path) if output_path is not None else ''
    if output_path is not None:
        ctx.append_research_capture(output_path, report)
    if getattr(args, 'json', False):
        print(ctx.json_text(report))
    else:
        print('Research API capture {} for target {} ({} records).'.format(report.get('status', 'unknown'), report.get('target', from_config_target), len(report.get('records', []))))
        if output_path is not None:
            print('Research capture written: {}'.format(output_path))
    return 0 if report.get('status') in {'ok', 'partial'} else 1


def research_browser_check_command(json_output: bool=False) -> int:
    report = ctx.build_browser_capture_metadata('home', provider=ctx.provider_report(), endpoints=ctx.get_active_http_endpoints())
    if json_output:
        print(ctx.json_text(report))
    else:
        print('Playwright: {}'.format('available' if report.get('playwright_available') else 'unavailable'))
        print('Capture mode: {}'.format(report.get('capture_mode', 'metadata_only')))
    return 0


async def research_browser_capture_command(args: ctx.argparse.Namespace) -> int:
    try:
        ctx.ensure_research_allowed(ctx.CONFIG, 'browser')
    except ctx.ResearchGateError as exc:
        return ctx._research_gate_failure(exc, json_output=getattr(args, 'json', False))
    report = await ctx.capture_browser_target_metadata(getattr(args, 'target', 'home'), endpoints=ctx.get_active_http_endpoints(), provider=ctx.provider_report())
    report['provider'] = ctx.provider_report().get('key')
    if getattr(args, 'json', False):
        print(ctx.json_text(report))
    else:
        print('Browser capture {} for target {} ({} records).'.format(report.get('status', 'unknown'), report.get('target', 'home'), len(report.get('records', []))))
    return 0 if report.get('status') in {'ok', 'unavailable'} else 1

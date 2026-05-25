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


async def research_probe_command(args: ctx.argparse.Namespace) -> int:
    probe_target = ctx.normalize_text(getattr(args, 'probe_target', 'student_rollcalls') or 'student_rollcalls').replace('-', '_')
    if probe_target not in ctx.RISKY_PROBE_TARGETS:
        report = {'status': 'probe_target_not_allowed', 'target': probe_target, 'records': [], 'warnings': ['unknown_probe_target']}
        if getattr(args, 'json', False):
            print(ctx.json_text(report))
        else:
            print('Research probe blocked: {}'.format(report['status']))
        return 1
    try:
        ctx.ensure_research_allowed(ctx.CONFIG, 'risky_probe')
    except ctx.ResearchGateError as exc:
        return ctx._research_gate_failure(exc, json_output=getattr(args, 'json', False))
    rollcall_id = ctx.normalize_text(getattr(args, 'rollcall_id', ''))
    if probe_target in ctx.PROBE_TARGETS_NEED_ROLLCALL_ID and not rollcall_id:
        report = {'status': 'probe_target_incomplete', 'target': probe_target, 'records': [], 'warnings': ['rollcall_id_required']}
        if getattr(args, 'json', False):
            print(ctx.json_text(report))
        else:
            print('Research probe requires --rollcall-id for target {}.'.format(probe_target))
        return 1
    output_arg = ctx.normalize_text(getattr(args, 'output', ''))
    output_path = ctx.Path(output_arg) if output_arg else None
    headers = {'User-Agent': ctx.random_ua()}
    session_kwargs: ctx.Dict[str, ctx.Any] = {'connector': ctx.create_http_connector(), 'headers': headers, 'cookie_jar': ctx.aiohttp.CookieJar(unsafe=True)}
    timeout = ctx.create_http_client_timeout()
    if timeout is not None:
        session_kwargs['timeout'] = timeout
    active = ctx.get_active_profile(ctx.CONFIG)
    async with ctx.aiohttp.ClientSession(**session_kwargs) as session:
        if ctx.cookie_cache_enabled(ctx.CONFIG):
            ctx.load_session_cookies(session, ctx.BASE_DIR, active.name)
        if not ctx.has_session_cookie(session):
            login_result = await ctx.login(session, research_context=True)
            if not login_result.ok:
                report = {'status': 'login_failed', 'target': probe_target, 'provider': ctx.provider_report().get('key'), 'profile': active.name, 'records': [], 'warnings': [login_result.status]}
                if getattr(args, 'json', False):
                    print(ctx.json_text(report))
                else:
                    print('Research probe failed: {}'.format(login_result.status))
                return 1
        try:
            record = await ctx.capture_rollcall_probe(session, probe_target, rollcall_id, endpoints=ctx.get_active_http_endpoints(), config=ctx.CONFIG, request_ssl=ctx.get_ssl_request_setting())
        except ctx.ResearchGateError as exc:
            return ctx._research_gate_failure(exc, json_output=getattr(args, 'json', False))
        except ctx.ResearchCaptureError as exc:
            record = exc.to_dict()
            record.update({'target': probe_target, 'warnings': [exc.status]})
    report = {'status': record.get('status', 'unknown'), 'target': probe_target, 'provider': ctx.provider_report().get('key'), 'profile': active.name, 'records': [record], 'output_path': str(output_path) if output_path is not None else '', 'warnings': list(record.get('warnings', []))}
    if output_path is not None:
        ctx.append_research_capture(output_path, report)
    if getattr(args, 'json', False):
        print(ctx.json_text(report))
    else:
        print('Research probe {} for target {} (HTTP {}).'.format(record.get('status', 'unknown'), probe_target, record.get('http_status', 0)))
        if output_path is not None:
            print('Research probe written: {}'.format(output_path))
    return 0 if record.get('status') in {'ok', 'unauthorized', 'unexpected_status', 'invalid_json'} else 1


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

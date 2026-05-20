from __future__ import annotations

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore


def __getattr__(name: str):
    return getattr(ctx, name)



async def courses_command(json_output: bool=False) -> int:
    headers = {'User-Agent': ctx.random_ua()}
    session_kwargs: ctx.Dict[str, ctx.Any] = {'connector': ctx.create_http_connector(), 'headers': headers, 'cookie_jar': ctx.aiohttp.CookieJar(unsafe=True)}
    timeout = ctx.create_http_client_timeout()
    if timeout is not None:
        session_kwargs['timeout'] = timeout

    async def run_discovery(session: ctx.aiohttp.ClientSession) -> ctx.Dict[str, ctx.Any]:
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        user_id = None
        try:
            user_id = await client.fetch_user_id()
        except Exception:
            user_id = None
        result = await ctx.discover_courses(session, endpoints=client.endpoints, request_ssl=ctx.get_ssl_request_setting())
        report = result.to_dict()
        report['profile'] = ctx.get_active_profile(ctx.CONFIG).name
        report['user_id'] = user_id
        return report
    async with ctx.aiohttp.ClientSession(**session_kwargs) as session:
        active = ctx.get_active_profile(ctx.CONFIG)
        if ctx.cookie_cache_enabled(ctx.CONFIG):
            ctx.load_session_cookies(session, ctx.BASE_DIR, active.name)
        if not ctx.has_session_cookie(session):
            login_result = await ctx.login(session)
            if not login_result.ok:
                report = {'status': 'login_failed', 'profile': active.name, 'login': login_result.status}
                if json_output:
                    print(ctx.json_text(report))
                else:
                    print('Course discovery failed: login {}.'.format(login_result.status))
                return 1
            if ctx.cookie_cache_enabled(ctx.CONFIG):
                ctx.save_session_cookies(session, ctx.BASE_DIR, active.name)
        try:
            report = await run_discovery(session)
        except ctx.CourseDiscoveryError as exc:
            if exc.status == 'unauthorized':
                session.cookie_jar.clear()
                ctx.clear_session_cookies(ctx.BASE_DIR, active.name)
                login_result = await ctx.login(session)
                if login_result.ok:
                    if ctx.cookie_cache_enabled(ctx.CONFIG):
                        ctx.save_session_cookies(session, ctx.BASE_DIR, active.name)
                    try:
                        report = await run_discovery(session)
                    except ctx.CourseDiscoveryError as retry_exc:
                        report = retry_exc.to_dict()
                        report['profile'] = active.name
                else:
                    report = {'status': 'login_failed', 'profile': active.name, 'login': login_result.status}
            else:
                report = exc.to_dict()
                report['profile'] = active.name
    if json_output:
        print(ctx.json_text(report))
    elif report.get('status') == 'ok':
        semester = report.get('semester', {})
        print('Profile: {}'.format(report.get('profile', '')))
        print('Semester: {} {}'.format(semester.get('academic_year_name') or semester.get('academic_year_id') or '-', semester.get('semester_name') or semester.get('semester_id') or '-').strip())
        print('Courses: {}'.format(report.get('course_count', 0)))
        for course in report.get('courses', [])[:10]:
            print('- [{}] {}'.format(course.get('id', ''), course.get('name', '')))
    else:
        print('Course discovery failed: {}.'.format(report.get('status', 'unexpected_response')))
    return 0 if report.get('status') == 'ok' else 1


async def login_test_command() -> int:
    headers = {'User-Agent': ctx.random_ua()}
    session_kwargs: ctx.Dict[str, ctx.Any] = {'connector': ctx.create_http_connector(), 'headers': headers}
    timeout = ctx.create_http_client_timeout()
    if timeout is not None:
        session_kwargs['timeout'] = timeout
    async with ctx.aiohttp.ClientSession(**session_kwargs) as session:
        result = await ctx.login(session)
    if result.ok:
        print('Login test succeeded for {}.'.format(result.user or 'active profile'))
        return 0
    print('Login test failed: {}'.format(result.status))
    return 1

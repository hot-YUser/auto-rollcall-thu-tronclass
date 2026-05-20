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

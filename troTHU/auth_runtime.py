from __future__ import annotations

from urllib.parse import urlparse

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore


def __getattr__(name: str):
    return getattr(ctx, name)



def random_id() -> str:
    chars = ctx.string.ascii_letters + ctx.string.digits
    return ''.join(ctx.random.choices(chars, k=16))


def random_ua() -> str:
    ua_list = ctx.CONFIG.get('config', {}).get('user-agent', [])
    return ctx.random.choice(ua_list or ctx.DEFAULT_USER_AGENTS)


def get_verify_ssl() -> bool:
    return ctx.coerce_bool(ctx.CONFIG.get('config', {}).get('verify_ssl', ctx.DEFAULT_CONFIG['config']['verify_ssl']), ctx.DEFAULT_CONFIG['config']['verify_ssl'])


def get_ssl_request_setting(verify_ssl: ctx.Optional[bool]=None) -> ctx.Any:
    if verify_ssl is None:
        verify_ssl = ctx.get_verify_ssl()
    if not verify_ssl:
        return False
    context = ctx.ssl.create_default_context()
    strict_flag = getattr(ctx.ssl, 'VERIFY_X509_STRICT', 0)
    if strict_flag and hasattr(context, 'verify_flags'):
        context.verify_flags &= ~strict_flag
    return context


def is_ssl_certificate_verification_error(exc: BaseException) -> bool:
    pending: ctx.List[BaseException] = [exc]
    seen: set[int] = set()
    while pending:
        current = pending.pop()
        identity = id(current)
        if identity in seen:
            continue
        seen.add(identity)
        if isinstance(current, ctx.ssl.SSLCertVerificationError):
            return True
        details = '{} {}'.format(type(current).__name__, ctx.normalize_text(current)).lower()
        if 'sslcertverificationerror' in details or 'certificate_verify_failed' in details or 'self-signed certificate in certificate chain' in details:
            return True
        cause = getattr(current, '__cause__', None)
        context = getattr(current, '__context__', None)
        if isinstance(cause, BaseException):
            pending.append(cause)
        if isinstance(context, BaseException):
            pending.append(context)
        for arg in getattr(current, 'args', ()):
            if isinstance(arg, BaseException):
                pending.append(arg)
            elif isinstance(arg, str):
                arg_text = arg.lower()
                if 'sslcertverificationerror' in arg_text or 'certificate_verify_failed' in arg_text or 'self-signed certificate in certificate chain' in arg_text:
                    return True
    return False


def enable_insecure_ssl_fallback(exc: BaseException) -> bool:
    ctx.CONFIG.setdefault('config', {})['verify_ssl'] = False
    saved = ctx.save_config()
    ctx.log(event='tls_verification_fallback', status='enabled', message='偵測到 TLS 憑證鏈驗證失敗，已停用 config.verify_ssl 並準備重試。', error=exc, extra={'config_saved': saved})
    if saved:
        ctx.log_print('偵測到 TLS 憑證鏈驗證失敗，已自動將 config.verify_ssl 改成 false，正在重試登入。')
    else:
        ctx.log_print('偵測到 TLS 憑證鏈驗證失敗，本次執行會暫時停用 verify_ssl 並重試；config.yaml 無法寫入。')
    return saved


def create_http_connector() -> ctx.aiohttp.TCPConnector:
    return ctx.aiohttp.TCPConnector(ssl=ctx.get_ssl_request_setting())


def get_login_retry_delay(attempt_index: int) -> float:
    if attempt_index < 0:
        attempt_index = 0
    return ctx.LOGIN_RETRY_DELAYS[min(attempt_index, len(ctx.LOGIN_RETRY_DELAYS) - 1)]


def should_auto_login_without_session() -> bool:
    return ctx.LAST_LOGIN_RESULT.status not in {'manual_cookie_required', 'missing_credentials', 'rejected'}


def redacted_login_user(user: ctx.Any) -> str:
    return ctx.normalize_text(user)


def masked_login_user(user: ctx.Any) -> str:
    return ctx.normalize_text(user)


BROWSER_ASSIST_AUTH_FLOWS = {
    'browser_sso',
    'oidc_browser',
    'sso_browser',
    'tku_sso_browser',
}

API_VALIDATED_AUTH_FLOWS = {
    'public_cloud_email',
}


def provider_requires_manual_cookie_login() -> bool:
    try:
        provider = ctx.get_active_provider_config()
    except Exception:
        provider = {}
    auth_flow = ctx.normalize_text(provider.get('auth_flow') if isinstance(provider, dict) else '').lower()
    return auth_flow == 'manual_cookie_only'


def provider_prefers_browser_assisted_login() -> bool:
    try:
        provider = ctx.get_active_provider_config()
    except Exception:
        provider = {}
    auth_flow = ctx.normalize_text(provider.get('auth_flow') if isinstance(provider, dict) else '').lower()
    return auth_flow in BROWSER_ASSIST_AUTH_FLOWS


def provider_requires_api_session_validation() -> bool:
    try:
        provider = ctx.get_active_provider_config()
    except Exception:
        provider = {}
    auth_flow = ctx.normalize_text(provider.get('auth_flow') if isinstance(provider, dict) else '').lower()
    return auth_flow in API_VALIDATED_AUTH_FLOWS or ctx.provider_prefers_browser_assisted_login()


def get_browser_assisted_login_config() -> ctx.Dict[str, ctx.Any]:
    auth_config = ctx.CONFIG.get('auth', {}) if isinstance(ctx.CONFIG.get('auth'), dict) else {}
    browser_config = auth_config.get('browser_assisted_login', {}) if isinstance(auth_config.get('browser_assisted_login'), dict) else {}
    default = ctx.DEFAULT_CONFIG['auth']['browser_assisted_login']
    return {
        'enabled': ctx.coerce_bool(browser_config.get('enabled', default['enabled']), default['enabled']),
        'headless': ctx.coerce_bool(browser_config.get('headless', default['headless']), default['headless']),
        'timeout_ms': min(180000, ctx.coerce_positive_int(browser_config.get('timeout_ms', default['timeout_ms']), default['timeout_ms'], minimum=5000)),
    }


def should_try_browser_assisted_login() -> bool:
    return bool(ctx.get_browser_assisted_login_config().get('enabled') or ctx.provider_prefers_browser_assisted_login())


def browser_assisted_login_available() -> bool:
    try:
        return ctx.importlib.util.find_spec('playwright.async_api') is not None
    except (ImportError, AttributeError, ValueError):
        return False


def browser_assisted_login_status() -> ctx.Dict[str, ctx.Any]:
    config = ctx.get_browser_assisted_login_config()
    auto_for_provider = ctx.provider_prefers_browser_assisted_login()
    return {
        'enabled': bool(config.get('enabled') or auto_for_provider),
        'configured_enabled': bool(config.get('enabled')),
        'auto_for_provider': bool(auto_for_provider),
        'playwright_available': ctx.browser_assisted_login_available(),
        'headless': bool(config.get('headless')),
        'timeout_ms': int(config.get('timeout_ms', 0) or 0),
        'mode': 'provider_auto_or_opt_in_session_cookie_import',
        'stores_headers': False,
        'stores_body': False,
    }


def _browser_cookie_response_url(cookie: ctx.Mapping[str, ctx.Any], fallback_url: str) -> ctx.Any:
    try:
        from yarl import URL
    except Exception:
        return None
    domain = ctx.normalize_text(cookie.get('domain')).lstrip('.')
    if not domain:
        try:
            domain = urlparse(fallback_url).hostname or ''
        except Exception:
            domain = ''
    if not domain:
        return None
    path = ctx.normalize_text(cookie.get('path')) or '/'
    if not path.startswith('/'):
        path = '/' + path
    return URL('https://{}{}'.format(domain, path))


def _browser_assisted_expected_host(endpoints: ctx.Any) -> str:
    host = ctx.normalize_text(getattr(endpoints, 'session_cookie_domain', ''))
    if host:
        return host
    try:
        return ctx.normalize_text(urlparse(str(getattr(endpoints, 'base_url', ''))).hostname)
    except Exception:
        return ''


def _browser_assisted_iportal_url(endpoints: ctx.Any) -> str:
    base_url = ctx.normalize_text(getattr(endpoints, 'base_url', '')).rstrip('/')
    if not base_url:
        return ''
    return '{}/iportal'.format(base_url)


def _session_user_agent(session: ctx.Any) -> str:
    headers = getattr(session, '_default_headers', {}) or {}
    try:
        return ctx.normalize_text(headers.get('User-Agent') or headers.get('user-agent'))
    except Exception:
        return ''


def _set_session_user_agent(session: ctx.Any, user_agent: str) -> None:
    if not user_agent:
        return
    try:
        headers = getattr(session, '_default_headers', None)
        if headers is not None:
            headers['User-Agent'] = user_agent
    except Exception:
        pass


async def _wait_for_browser_assisted_navigation(page: ctx.Any, endpoints: ctx.Any, timeout_ms: int) -> None:
    expected_host = _browser_assisted_expected_host(endpoints)
    wait_timeout = max(1000, min(int(timeout_ms or 45000), 45000))
    if expected_host:
        try:
            await page.wait_for_url('**://{}**'.format(expected_host), timeout=wait_timeout)
        except Exception:
            pass
        try:
            current_host = ctx.normalize_text(urlparse(str(page.url)).hostname)
        except Exception:
            current_host = ''
        target_url = _browser_assisted_iportal_url(endpoints)
        if target_url and current_host != expected_host:
            try:
                await page.goto(target_url, wait_until='domcontentloaded', timeout=wait_timeout)
                await page.wait_for_url('**://{}**'.format(expected_host), timeout=wait_timeout)
            except Exception:
                pass
    try:
        await page.wait_for_load_state('networkidle', timeout=wait_timeout)
    except Exception:
        await page.wait_for_timeout(1000)


async def _browser_assisted_fill_first(page: ctx.Any, selectors: ctx.Iterable[str], value: str, timeout_ms: int) -> None:
    per_selector_timeout = max(1000, min(int(timeout_ms or 45000), 5000))
    last_error: ctx.Any = None
    for selector in selectors:
        try:
            await page.locator(selector).first.fill(value, timeout=per_selector_timeout)
            return
        except Exception as exc:
            last_error = exc
    if isinstance(last_error, Exception):
        raise last_error
    raise RuntimeError("no_login_input_selector")


async def browser_assisted_login(session: ctx.aiohttp.ClientSession, *, user: str, passwd: str, credential_source: str) -> ctx.LoginResult:
    config = ctx.get_browser_assisted_login_config()
    if not ctx.should_try_browser_assisted_login():
        return ctx.LoginResult(status='browser_assist_disabled', credential_source=credential_source, user=user)
    if not ctx.browser_assisted_login_available():
        return ctx.LoginResult(status='browser_assist_unavailable', credential_source=credential_source, user=user)
    try:
        from playwright.async_api import async_playwright  # type: ignore
    except Exception as exc:
        return ctx.LoginResult(status='browser_assist_unavailable', credential_source=credential_source, user=user, error=ctx.normalize_text(exc))

    endpoints = ctx.get_active_http_endpoints()
    browser = None
    try:
        async with async_playwright() as playwright:
            browser = await playwright.chromium.launch(headless=bool(config.get('headless')))
            browser_user_agent = _session_user_agent(session) or ctx.random_ua()
            _set_session_user_agent(session, browser_user_agent)
            context = await browser.new_context(user_agent=browser_user_agent)
            page = await context.new_page()
            timeout_ms = int(config.get('timeout_ms') or 45000)
            await page.goto(str(endpoints.login_url), wait_until='domcontentloaded', timeout=timeout_ms)
            await _browser_assisted_fill_first(
                page,
                (
                    'input[name="username"]',
                    'input#username',
                    'input[name="email"]',
                    'input#email',
                    'input[name="user_name"]',
                    'input#user_no',
                ),
                user,
                timeout_ms,
            )
            await _browser_assisted_fill_first(
                page,
                ('input[name="password"]', 'input#password'),
                passwd,
                timeout_ms,
            )
            await page.locator('button[type="submit"], input[type="submit"]').first.click(timeout=timeout_ms)
            await _wait_for_browser_assisted_navigation(page, endpoints, timeout_ms)
            final_url = str(page.url)
            cookies = await context.cookies()
            await browser.close()
            browser = None
    except Exception as exc:
        try:
            if browser is not None:
                await browser.close()
        except Exception:
            pass
        return ctx.LoginResult(status='browser_assist_failed', credential_source=credential_source, user=user, error=ctx.normalize_text(exc))

    session.cookie_jar.clear()
    for cookie in cookies:
        name = ctx.normalize_text(cookie.get('name'))
        value = ctx.normalize_text(cookie.get('value'))
        if name and value:
            response_url = _browser_cookie_response_url(cookie, final_url)
            if response_url is not None:
                session.cookie_jar.update_cookies({name: value}, response_url=response_url)
            else:
                session.cookie_jar.update_cookies({name: value})
    if not ctx.has_session_cookie(session):
        return ctx.LoginResult(status='browser_assist_missing_session', credential_source=credential_source, user=user, final_url=final_url)
    ctx.CONFIG['account']['user'] = user
    try:
        active_profile = ctx.get_active_profile(ctx.CONFIG)
        if ctx.cookie_cache_enabled(ctx.CONFIG):
            ctx.save_session_cookies(session, ctx.BASE_DIR, active_profile.name)
    except Exception as exc:
        ctx.log(event='session_cookie_cache', status='failed', message='Browser-assisted login succeeded, but cookie cache save failed.', error=exc)
    return ctx.LoginResult(status='success', credential_source='browser_assist:{}'.format(credential_source), user=user, final_url=final_url)


def extract_login_form(html_text: str, base_url: str=ctx.LOGIN_URL) -> ctx.Tuple[str, ctx.Dict[str, str]]:
    form = ctx.extract_login_form_data(html_text, base_url)
    return (form.action_url, form.fields)


def has_session_cookie(session: ctx.aiohttp.ClientSession) -> bool:
    return ctx.has_session_cookie_data(session, ctx.get_active_http_endpoints().session_cookie_domain)


def get_http_timeout_seconds() -> float:
    return ctx.coerce_positive_float(ctx.CONFIG['config'].get('http_timeout', ctx.DEFAULT_CONFIG['config']['http_timeout']), ctx.DEFAULT_CONFIG['config']['http_timeout'])


def get_notification_timeout_seconds() -> float:
    return ctx.coerce_positive_float(ctx.CONFIG['config'].get('notification_timeout', ctx.DEFAULT_CONFIG['config']['notification_timeout']), ctx.DEFAULT_CONFIG['config']['notification_timeout'])


def create_client_timeout(total_seconds: float) -> ctx.Any:
    timeout_factory = getattr(ctx.aiohttp, 'ClientTimeout', None)
    if timeout_factory is None:
        return None
    return timeout_factory(total=max(total_seconds, 0.1))


def create_http_client_timeout() -> ctx.Any:
    return ctx.create_client_timeout(ctx.get_http_timeout_seconds())


def create_notification_timeout() -> ctx.Any:
    return ctx.create_client_timeout(ctx.get_notification_timeout_seconds())


def create_tron_http_client(session: ctx.aiohttp.ClientSession, request_ssl: ctx.Any=None) -> ctx.TronHttpClient:
    return ctx.TronHttpClient(session, request_ssl=request_ssl, endpoints=ctx.get_active_http_endpoints())


async def validate_login_api_session(client: ctx.Any) -> None:
    await client.fetch_current_semester()


async def fallback_to_browser_assisted_login(
    session: ctx.aiohttp.ClientSession,
    *,
    user: str,
    passwd: str,
    credential_source: str,
    reason: str,
    error: ctx.Any = None,
) -> ctx.LoginResult:
    ctx.log(
        event='login_browser_assist',
        status='started',
        message=reason,
        error=error,
        extra={
            'credential_source': credential_source,
            'user': user,
            'auto_for_provider': ctx.provider_prefers_browser_assisted_login(),
        },
    )
    assisted = await ctx.browser_assisted_login(
        session,
        user=user,
        passwd=passwd,
        credential_source=credential_source,
    )
    ctx.LAST_LOGIN_RESULT = assisted
    if assisted.ok:
        ctx.log(
            event='login_success',
            status='success',
            url=assisted.final_url,
            message='Browser-assisted login succeeded.',
            extra={'credential_source': assisted.credential_source, 'user': user},
        )
        ctx.log_print('登入成功！綁定帳號：{}'.format(user))
    else:
        ctx.log(
            event='login_failure',
            status=assisted.status,
            message='Browser-assisted login failed.',
            error=assisted.error,
            extra={'credential_source': credential_source, 'user': user},
        )
    return ctx.record_login_runtime(assisted)


def record_login_runtime(result: ctx.LoginResult) -> ctx.LoginResult:
    try:
        ctx.mark_login_result(ctx.BASE_DIR, ctx.get_active_profile(ctx.CONFIG).name, result)
    except Exception:
        pass
    return result


async def login(session: ctx.aiohttp.ClientSession, *, research_context: bool=False) -> ctx.LoginResult:
    if not research_context:
        blocked = ctx.provider_guard_result('login/daily automation')
        if blocked is not None:
            ctx.LAST_LOGIN_RESULT = blocked
            return ctx.record_login_runtime(blocked)
    if ctx.provider_requires_manual_cookie_login():
        active_profile = ctx.get_active_profile(ctx.CONFIG)
        if ctx.has_session_cookie(session):
            result = ctx.LoginResult(status='success', credential_source='manual_cookie', user=active_profile.user)
            ctx.LAST_LOGIN_RESULT = result
            return ctx.record_login_runtime(result)
        result = ctx.LoginResult(status='manual_cookie_required', credential_source='manual_cookie', user=active_profile.user)
        ctx.log(
            event='login_skipped',
            status='manual_cookie_required',
            message='Provider requires a manually supplied session cookie; password login is disabled.',
            extra={'provider': ctx.get_active_provider_key(), 'user': active_profile.user},
        )
        ctx.LAST_LOGIN_RESULT = result
        return ctx.record_login_runtime(result)
    user, passwd, credential_source = ctx.resolve_credentials()
    if not ctx.has_real_credential(user) or not ctx.has_real_credential(passwd):
        ctx.log(event='login_failure', status='missing_credentials', message='尚未設定可用帳號密碼。', extra={'credential_source': credential_source})
        ctx.log_print('未設定帳號密碼。請按任意鍵編輯 config.yaml，填好後關閉記事本。')
        ctx.LAST_LOGIN_RESULT = ctx.LoginResult(status='missing_credentials', credential_source=credential_source)
        return ctx.record_login_runtime(ctx.LAST_LOGIN_RESULT)
    ctx.IS_LOGGING_IN = True
    ctx.log_print('嘗試使用帳密自動登入...')
    ctx.log(event='login_attempt', status='started', message='嘗試登入 TronClass。', extra={'credential_source': credential_source, 'user': user})
    ssl_fallback_attempted = False
    try:
        while True:
            client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
            try:
                session.cookie_jar.clear()
                form = await client.fetch_login_form()
                outcome = await client.submit_login(form, user, passwd)
            except ctx.LoginPageChangedError as exc:
                if ctx.should_try_browser_assisted_login():
                    return await ctx.fallback_to_browser_assisted_login(
                        session,
                        user=user,
                        passwd=passwd,
                        credential_source=credential_source,
                        reason='Login form changed or TKU fast SSO failed; trying browser-assisted login.',
                        error=exc,
                    )
                ctx.log(event='login_failure', status='login_page_changed', message='登入頁結構已更改。', error=exc, extra={'credential_source': credential_source, 'user': user})
                ctx.log_print('登入頁結構已更改，可在 config.advanced.yaml 啟用 auth.browser_assisted_login 作為 opt-in 後備。')
                ctx.LAST_LOGIN_RESULT = ctx.LoginResult(status='login_page_changed', credential_source=credential_source, user=user, error=ctx.normalize_text(exc))
                return ctx.record_login_runtime(ctx.LAST_LOGIN_RESULT)
            except ctx.LoginRejectedError as exc:
                if ctx.provider_prefers_browser_assisted_login():
                    return await ctx.fallback_to_browser_assisted_login(
                        session,
                        user=user,
                        passwd=passwd,
                        credential_source=credential_source,
                        reason='TKU fast SSO rejected or changed; trying browser-assisted login.',
                        error=exc,
                    )
                ctx.log(event='login_failure', status='rejected', message='登入失敗，帳號密碼被拒絕。', extra={'credential_source': credential_source, 'user': user})
                ctx.log_print('登入失敗，請檢查帳號或密碼是否正確。')
                ctx.LAST_LOGIN_RESULT = ctx.LoginResult(status='rejected', credential_source=credential_source, user=user)
                return ctx.record_login_runtime(ctx.LAST_LOGIN_RESULT)
            except (ctx.TronHttpError, ctx.aiohttp.ClientError, ctx.asyncio.TimeoutError, ctx.ssl.SSLError) as exc:
                if not ssl_fallback_attempted and ctx.get_verify_ssl() and ctx.is_ssl_certificate_verification_error(exc):
                    ssl_fallback_attempted = True
                    ctx.enable_insecure_ssl_fallback(exc)
                    continue
                if ctx.provider_prefers_browser_assisted_login():
                    return await ctx.fallback_to_browser_assisted_login(
                        session,
                        user=user,
                        passwd=passwd,
                        credential_source=credential_source,
                        reason='TKU fast SSO encountered an HTTP error; trying browser-assisted login.',
                        error=exc,
                    )
                ctx.log(event='login_failure', status='transient_error', message='登入過程發生錯誤。', error=exc, extra={'credential_source': credential_source, 'user': user})
                ctx.log_print('登入過程中發生錯誤: {}'.format(exc))
                ctx.LAST_LOGIN_RESULT = ctx.LoginResult(status='transient_error', credential_source=credential_source, user=user, error=ctx.normalize_text(exc))
                return ctx.record_login_runtime(ctx.LAST_LOGIN_RESULT)
            if not outcome.has_session or not ctx.has_session_cookie(session):
                if ctx.should_try_browser_assisted_login():
                    return await ctx.fallback_to_browser_assisted_login(
                        session,
                        user=user,
                        passwd=passwd,
                        credential_source=credential_source,
                        reason='Login did not yield a valid session; trying browser-assisted login.',
                    )
                ctx.log(event='login_failure', status='missing_session', url=outcome.final_url, message='登入流程完成，但未取得有效 session。', extra={'credential_source': credential_source, 'user': user})
                ctx.log_print('登入流程已完成，但未取得有效 session。')
                ctx.LAST_LOGIN_RESULT = ctx.LoginResult(status='missing_session', credential_source=credential_source, user=user, final_url=outcome.final_url)
                return ctx.record_login_runtime(ctx.LAST_LOGIN_RESULT)
            if ctx.provider_requires_api_session_validation():
                try:
                    await ctx.validate_login_api_session(client)
                except (ctx.TronHttpError, ctx.aiohttp.ClientError, ctx.asyncio.TimeoutError, ctx.ssl.SSLError) as exc:
                    if ctx.should_try_browser_assisted_login():
                        return await ctx.fallback_to_browser_assisted_login(
                            session,
                            user=user,
                            passwd=passwd,
                            credential_source=credential_source,
                            reason='Login session failed API validation; trying browser-assisted login.',
                            error=exc,
                        )
                    try:
                        session.cookie_jar.clear()
                    except Exception:
                        pass
                    ctx.log(
                        event='login_failure',
                        status='missing_session',
                        url=outcome.final_url,
                        message='登入流程完成，但 API session 驗證失敗。',
                        error=exc,
                        extra={'credential_source': credential_source, 'user': user},
                    )
                    ctx.log_print('登入流程已完成，但 API session 驗證失敗；TronClass 可能需要瀏覽器登入或登入流程已變更。')
                    ctx.LAST_LOGIN_RESULT = ctx.LoginResult(
                        status='missing_session',
                        credential_source=credential_source,
                        user=user,
                        final_url=outcome.final_url,
                        error=ctx.normalize_text(exc),
                    )
                    return ctx.record_login_runtime(ctx.LAST_LOGIN_RESULT)
            ctx.CONFIG['account']['user'] = user
            ctx.log(event='login_success', status='success', url=outcome.final_url, message='登入成功。', extra={'credential_source': credential_source, 'user': user})
            ctx.log_print('登入成功！綁定帳號：{}'.format(user))
            try:
                active_profile = ctx.get_active_profile(ctx.CONFIG)
                if ctx.cookie_cache_enabled(ctx.CONFIG):
                    ctx.save_session_cookies(session, ctx.BASE_DIR, active_profile.name)
            except Exception as exc:
                ctx.log(event='session_cookie_cache', status='failed', message='登入成功，但 cookie 快取保存失敗。', error=exc)
            ctx.LAST_LOGIN_RESULT = ctx.LoginResult(status='success', credential_source=credential_source, user=user, final_url=outcome.final_url)
            return ctx.record_login_runtime(ctx.LAST_LOGIN_RESULT)
    finally:
        ctx.IS_LOGGING_IN = False


def clone_session_cookies(source: ctx.aiohttp.ClientSession, target: ctx.aiohttp.ClientSession) -> None:
    for cookie in source.cookie_jar:
        target.cookie_jar.update_cookies({cookie.key: cookie.value})


def get_session_id_header(session: ctx.aiohttp.ClientSession) -> str:
    headers = getattr(session, '_default_headers', {}) or {}
    value = headers.get('x-session-id') or headers.get('X-Session-Id') or ''
    return ctx.normalize_text(value)

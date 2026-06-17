from __future__ import annotations

import dataclasses
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
        ctx.log_print('偵測到 TLS 憑證鏈驗證失敗，本次執行會暫時停用 verify_ssl 並重試；config.conf 無法寫入。')
    return saved


def create_http_connector() -> ctx.aiohttp.TCPConnector:
    return ctx.aiohttp.TCPConnector(ssl=ctx.get_ssl_request_setting())


def get_login_retry_delay(attempt_index: int) -> float:
    if attempt_index < 0:
        attempt_index = 0
    return ctx.LOGIN_RETRY_DELAYS[min(attempt_index, len(ctx.LOGIN_RETRY_DELAYS) - 1)]


# Login outcomes that cannot succeed on a blind retry — they need the user to fix
# something first (wrong credentials, a changed login page with no browser fallback,
# a missing manual cookie). The monitor must NOT auto-retry these: doing so is the
# "stuck in a 1-second login-retry loop" symptom. The complement
# (LoginResult.should_auto_retry) is the transient set that DOES back off and retry.
LOGIN_NEEDS_USER_STATUSES = frozenset({
    'missing_credentials',
    'rejected',
})

# One source of truth for the user-facing line shown on each non-success login.
# Every LoginResult.status (except 'success') MUST have an entry here — the coverage
# is asserted by tests/test_login_messages.py so a new status can't ship message-less.
# Secrets (password / captcha contents) are never included.
_LOGIN_FAILURE_MESSAGES = {
    'missing_credentials': '未設定帳號密碼。請按任意鍵編輯 config.conf，填好後關閉記事本。',
    'rejected': '登入失敗：帳號、密碼或驗證碼有誤，請確認後按任意鍵編輯 config.conf。',
    'login_page_changed': '登入頁結構與預期不符（學校可能改版）；將開啟瀏覽器讓你手動登入，或可用 webview import 匯入 Cookie。無人值守模式則持續偵測 Cookie 並重試。',
    'transient_error': '登入時發生暫時性錯誤（網路或伺服器），稍後會自動重試。',
    'missing_session': '登入流程完成但未取得有效 session；將開啟瀏覽器讓你手動登入，或匯入 Cookie。無人值守模式則持續偵測 Cookie 並重試。',
    'browser_assist_disabled': '自動登入未成功，且未啟用瀏覽器後備登入（auth.browser_assisted_login）。',
    'browser_assist_unavailable': '需要瀏覽器登入，但此環境未內建 Playwright；請改用打包版 exe，或安裝 pip install -e .[browser]。',
    'browser_assist_failed': '瀏覽器後備登入失敗；稍後會自動重試。',
    'browser_assist_missing_session': '瀏覽器登入完成，但未取得有效 session cookie；稍後會自動重試。',
    'browser_interactive_timeout': '瀏覽器手動登入逾時（時間內未完成）；稍後會再開啟瀏覽器讓你登入。',
    'browser_interactive_cancelled': '瀏覽器視窗被關閉、未完成登入；稍後會再試。',
    'error': '登入時發生未預期的錯誤；稍後會自動重試。',
}

# Statuses whose raised-exception text carries the actionable detail (missing OCR
# extra, federated SSO, captcha) and SHOULD replace the generic line.
_LOGIN_DETAIL_REPLACES_MESSAGE = frozenset({'login_page_changed'})
# Statuses where a short error snippet is appended after the generic line.
_LOGIN_DETAIL_APPENDS_MESSAGE = frozenset({'transient_error', 'missing_session', 'error'})


def login_failure_message(result: ctx.Any) -> str:
    """The single user-facing line for a non-success LoginResult. Surfaces the
    raised exception's actionable text when present (e.g. '需要 .[ocr] 套件')."""
    status = ctx.normalize_text(getattr(result, 'status', ''))
    detail = ctx.normalize_text(getattr(result, 'error', ''))
    if status in _LOGIN_DETAIL_REPLACES_MESSAGE and detail:
        return detail
    base = _LOGIN_FAILURE_MESSAGES.get(status)
    if base is None:
        return '登入失敗（{}）。'.format(status or 'unknown')
    if detail and status in _LOGIN_DETAIL_APPENDS_MESSAGE and detail not in base:
        snippet = detail if len(detail) <= 120 else detail[:117] + '…'
        return '{}（{}）'.format(base, snippet)
    return base


def should_auto_login_without_session() -> bool:
    return ctx.LAST_LOGIN_RESULT.status not in LOGIN_NEEDS_USER_STATUSES


def redacted_login_user(user: ctx.Any) -> str:
    return ctx.normalize_text(user)


def masked_login_user(user: ctx.Any) -> str:
    return ctx.normalize_text(user)


# The unified login flow (login_flow.run_login_flow) DISPATCHES purely on detected page
# features and never reads auth_flow. The only remaining pre-login use is the
# `interactive_browser` mode (synthesised for pasted-URL providers). Manual cookies are
# no longer a provider mode — they are just cookie detection (see the monitor loop), so
# there is no per-provider manual-cookie gate. Legacy filled-config values still normalise
# so old configs keep working.
_LEGACY_AUTH_FLOW_ALIASES = {
    'thu_cas': 'cas',
    'cas_api_validated': 'cas',
    'cas_login_settings': 'cas',
    'tku_sso_browser': 'nam_neai',
}


def _active_auth_flow() -> str:
    try:
        provider = ctx.get_active_provider_config()
    except Exception:
        provider = {}
    flow = ctx.normalize_text(provider.get('auth_flow') if isinstance(provider, dict) else '').lower()
    return _LEGACY_AUTH_FLOW_ALIASES.get(flow, flow)


def provider_requires_interactive_browser_login() -> bool:
    return _active_auth_flow() == 'interactive_browser'


def provider_prefers_browser_assisted_login() -> bool:
    # No provider auto-opts into browser login; the interactive-browser last resort is
    # driven by INPUT_ENABLED, not by the provider. Kept for browser_assisted_login_status.
    return False


def provider_requires_api_session_validation() -> bool:
    # Every credential login confirms the session via an authenticated API call: a
    # TronClass LMS sets an anonymous `session` cookie on the login-page GET, so cookie
    # presence alone is an unreliable success signal. Always validate.
    return True


def get_browser_assisted_login_config() -> ctx.Dict[str, ctx.Any]:
    auth_config = ctx.CONFIG.get('auth', {}) if isinstance(ctx.CONFIG.get('auth'), dict) else {}
    browser_config = auth_config.get('browser_assisted_login', {}) if isinstance(auth_config.get('browser_assisted_login'), dict) else {}
    default = ctx.DEFAULT_CONFIG['auth']['browser_assisted_login']
    return {
        'enabled': ctx.coerce_bool(browser_config.get('enabled', default['enabled']), default['enabled']),
        'headless': ctx.coerce_bool(browser_config.get('headless', default['headless']), default['headless']),
        'timeout_ms': min(180000, ctx.coerce_positive_int(browser_config.get('timeout_ms', default['timeout_ms']), default['timeout_ms'], minimum=5000)),
        'interactive_timeout_ms': ctx.coerce_positive_int(browser_config.get('interactive_timeout_ms', default['interactive_timeout_ms']), default['interactive_timeout_ms'], minimum=5000),
        'allow_browser_download': ctx.coerce_bool(browser_config.get('allow_browser_download', default['allow_browser_download']), default['allow_browser_download']),
        'interactive_poll_interval_ms': ctx.coerce_positive_int(browser_config.get('interactive_poll_interval_ms', default['interactive_poll_interval_ms']), default['interactive_poll_interval_ms'], minimum=100),
    }


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


def _finalize_browser_cookies(
    session: ctx.aiohttp.ClientSession,
    cookies: list[dict],
    final_url: str,
    user: str,
    credential_source: str,
    label_prefix: str = 'browser_assist',
) -> ctx.LoginResult:
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
    return ctx.LoginResult(status='success', credential_source='{}:{}'.format(label_prefix, credential_source), user=user, final_url=final_url)


def _has_playwright_session_cookie(cookies: list[dict], expected_host: str) -> bool:
    expected_host = str(expected_host or "").strip().lower()
    for cookie in cookies:
        name = cookie.get("name")
        domain = str(cookie.get("domain") or "").strip().lower()
        if name == "session":
            if not expected_host or expected_host in domain or not domain:
                return True
    return False


async def interactive_browser_login(
    session: ctx.aiohttp.ClientSession,
    *,
    user: str,
    credential_source: str,
    login_url_override: ctx.Optional[str] = None,
) -> ctx.LoginResult:
    config = ctx.get_browser_assisted_login_config()
    if not ctx.browser_assisted_login_available():
        ctx.log_print('瀏覽器登入需要 Playwright，但此執行環境未內建；請改用打包版 exe，或安裝 .[browser] 後再試。')
        return ctx.LoginResult(status='browser_assist_unavailable', credential_source=credential_source, user=user)

    # Pin PLAYWRIGHT_BROWSERS_PATH BEFORE the driver spawns (install + __aenter__),
    # otherwise the already-running driver ignores it and launch looks in the
    # default path instead of where the browser was installed (state/browser).
    ctx.apply_browsers_path_env()
    try:
        await ctx.ensure_browser_binary_installed()
    except Exception as exc:
        ctx.log_print('瀏覽器準備失敗：{}'.format(ctx.normalize_text(exc)))
        return ctx.LoginResult(
            status='browser_assist_failed',
            credential_source=credential_source,
            user=user,
            error='Failed to prepare Playwright browser: {}'.format(exc)
        )
        
    try:
        from playwright.async_api import async_playwright
    except Exception as exc:
        return ctx.LoginResult(status='browser_assist_unavailable', credential_source=credential_source, user=user, error=ctx.normalize_text(exc))
        
    endpoints = ctx.get_active_http_endpoints()
    expected_host = _browser_assisted_expected_host(endpoints)
    
    timeout_ms = int(config.get('interactive_timeout_ms', 300000))
    poll_interval_ms = int(config.get('interactive_poll_interval_ms', 1000))
    
    ctx.log_print('已開啟手動登入瀏覽器，請在瀏覽器視窗中完成登入...')
    
    browser = None
    playwright_mgr = None
    try:
        playwright_mgr = async_playwright()
        playwright = await playwright_mgr.__aenter__()
        
        browser_user_agent = _session_user_agent(session) or ctx.random_ua()
        _set_session_user_agent(session, browser_user_agent)

        browser = await playwright.chromium.launch(headless=False)
        context = await browser.new_context(user_agent=browser_user_agent)
        page = await context.new_page()

        await page.goto(str(login_url_override or endpoints.login_url), wait_until='domcontentloaded')
        
        import asyncio
        start_time = asyncio.get_event_loop().time()
        success_cookies = None
        passive_success = False
        final_url = str(page.url)

        while True:
            if page.is_closed() or not browser.is_connected():
                return ctx.LoginResult(status='browser_interactive_cancelled', credential_source=credential_source, user=user)

            elapsed_ms = (asyncio.get_event_loop().time() - start_time) * 1000
            if elapsed_ms >= timeout_ms:
                return ctx.LoginResult(status='browser_interactive_timeout', credential_source=credential_source, user=user)

            # Passive path, concurrent with the active browser login: a cookie imported or
            # written elsewhere (e.g. `webview import`) lands in the cache. Pick it up here so
            # whichever arrives first — the browser login or a manually-placed cookie — wins.
            if ctx.cookie_cache_enabled(ctx.CONFIG):
                try:
                    ctx.load_session_cookies(session, ctx.BASE_DIR, ctx.get_active_profile(ctx.CONFIG).name)
                except Exception:
                    pass
                if ctx.has_session_cookie(session):
                    client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
                    try:
                        await ctx.validate_login_api_session(client)
                        passive_success = True
                        final_url = str(page.url)
                        break
                    except Exception:
                        pass

            try:
                cookies = await context.cookies()
            except Exception:
                return ctx.LoginResult(status='browser_interactive_cancelled', credential_source=credential_source, user=user)

            if _has_playwright_session_cookie(cookies, expected_host):
                session.cookie_jar.clear()
                for cookie in cookies:
                    name = ctx.normalize_text(cookie.get('name'))
                    value = ctx.normalize_text(cookie.get('value'))
                    if name and value:
                        response_url = _browser_cookie_response_url(cookie, str(page.url))
                        if response_url is not None:
                            session.cookie_jar.update_cookies({name: value}, response_url=response_url)
                        else:
                            session.cookie_jar.update_cookies({name: value})
                client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
                try:
                    await ctx.validate_login_api_session(client)
                    success_cookies = cookies
                    final_url = str(page.url)
                    break
                except Exception:
                    session.cookie_jar.clear()
                    
            await asyncio.sleep(poll_interval_ms / 1000.0)
            
        await browser.close()
        browser = None
        await playwright_mgr.__aexit__(None, None, None)
        playwright_mgr = None

        if passive_success:
            # Cookie arrived via the cache (manual import / external login). It's already
            # in the jar and the cache file; just confirm success.
            ctx.CONFIG['account']['user'] = user
            ctx.log(event='login_success', status='success', url=final_url, message='偵測到外部匯入的 Cookie，登入成功。', extra={'credential_source': credential_source, 'user': user})
            ctx.log_print('偵測到可用的 Cookie，登入成功！綁定帳號：{}'.format(user))
            return ctx.LoginResult(status='success', credential_source='manual_cookie:{}'.format(credential_source), user=user, final_url=final_url)

        return _finalize_browser_cookies(session, success_cookies, final_url, user, credential_source, label_prefix='interactive_browser')
        
    except Exception as exc:
        try:
            if browser is not None:
                await browser.close()
        except Exception:
            pass
        try:
            if playwright_mgr is not None:
                await playwright_mgr.__aexit__(None, None, None)
        except Exception:
            pass
        return ctx.LoginResult(status='browser_assist_failed', credential_source=credential_source, user=user, error=ctx.normalize_text(exc))


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


async def resolve_login_settings_url(session: ctx.aiohttp.ClientSession, base_url: str, fallback_url: str) -> str:
    """For the cas_login_settings flow: GET the school homepage, read orgSettings.loginSettings,
    and return the campus-SSO (kc_idp_hint) login URL. Falls back to fallback_url ({base}/login)
    on any error or when no kc_idp_hint entry exists. Never raises."""
    try:
        import troTHU.login_flow as login_flow
        homepage = str(base_url or "").rstrip("/") + "/"
        ssl_setting = ctx.get_ssl_request_setting()
        kwargs = {} if ssl_setting is None else {"ssl": ssl_setting}
        async with session.get(homepage, **kwargs) as resp:
            html = await resp.text()
        resolved = login_flow.pick_login_settings_url(login_flow.parse_login_settings(html))
        return resolved or fallback_url
    except Exception:
        return fallback_url


def record_login_runtime(result: ctx.LoginResult) -> ctx.LoginResult:
    try:
        ctx.mark_login_result(ctx.BASE_DIR, ctx.get_active_profile(ctx.CONFIG).name, result)
    except Exception:
        pass
    return result


async def _browser_or_passive(
    session: ctx.aiohttp.ClientSession,
    *,
    user: str,
    credential_source: str,
    status: str,
    error: ctx.Any = None,
    login_url_override: ctx.Optional[str] = None,
) -> ctx.LoginResult:
    """Last resort for a non-rejected auto-login failure (changed login page, no session,
    OCR captcha with no engine, federated SSO…). In interactive mode open the browser for
    the user to log in manually — interactive_browser_login also watches the cookie cache,
    so a cookie imported/pasted elsewhere wins too. In --no-input mode the browser can't be
    driven, so return the failure status: the monitor backs off and keeps polling the cookie
    cache for a manually-imported cookie. Either way the only thing that succeeds is a valid
    cookie, regardless of how it arrives."""
    if ctx.INPUT_ENABLED:
        result = await ctx.interactive_browser_login(
            session, user=user, credential_source=credential_source,
            login_url_override=login_url_override,
        )
        ctx.LAST_LOGIN_RESULT = result
        if not result.ok:
            ctx.log_print(ctx.login_failure_message(result))
        return ctx.record_login_runtime(result)
    ctx.log(event='login_failure', status=status, message='自動登入未成功；無人值守模式改為持續偵測 Cookie 並退避重試。', error=error, extra={'credential_source': credential_source, 'user': user})
    ctx.LAST_LOGIN_RESULT = ctx.LoginResult(status=status, credential_source=credential_source, user=user, error=ctx.normalize_text(error) if error else '')
    ctx.log_print(ctx.login_failure_message(ctx.LAST_LOGIN_RESULT))
    return ctx.record_login_runtime(ctx.LAST_LOGIN_RESULT)


async def login(session: ctx.aiohttp.ClientSession, *, research_context: bool=False) -> ctx.LoginResult:
    if not research_context:
        blocked = ctx.provider_guard_result('login/daily automation')
        if blocked is not None:
            ctx.LAST_LOGIN_RESULT = blocked
            return ctx.record_login_runtime(blocked)
    if ctx.provider_requires_interactive_browser_login():
        active_profile = ctx.get_active_profile(ctx.CONFIG)
        if ctx.cookie_cache_enabled(ctx.CONFIG):
            ctx.load_session_cookies(session, ctx.BASE_DIR, active_profile.name)
        if ctx.has_session_cookie(session):
            client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
            try:
                await ctx.validate_login_api_session(client)
                result = ctx.LoginResult(status='success', credential_source='interactive_browser', user=active_profile.user)
                ctx.LAST_LOGIN_RESULT = result
                return ctx.record_login_runtime(result)
            except (ctx.TronHttpError, ctx.aiohttp.ClientError, ctx.asyncio.TimeoutError, ctx.ssl.SSLError) as exc:
                try:
                    session.cookie_jar.clear()
                except Exception:
                    pass
                ctx.log(
                    event='login_failure',
                    status='missing_session',
                    message='Interactive browser cached cookie API session validation failed.',
                    error=exc,
                    extra={'provider': ctx.get_active_provider_key(), 'user': active_profile.user},
                )
                ctx.log_print('互動瀏覽器快取 Cookie API 驗證失敗，需要重新登入。')
        result = await ctx.interactive_browser_login(session, user=active_profile.user, credential_source='config')
        ctx.LAST_LOGIN_RESULT = result
        if not result.ok:
            ctx.log_print(ctx.login_failure_message(result))
        return ctx.record_login_runtime(result)
    user, passwd, credential_source = ctx.resolve_credentials()
    if not ctx.has_real_credential(user) or not ctx.has_real_credential(passwd):
        ctx.log(event='login_failure', status='missing_credentials', message='尚未設定可用帳號密碼。', extra={'credential_source': credential_source})
        ctx.LAST_LOGIN_RESULT = ctx.LoginResult(status='missing_credentials', credential_source=credential_source)
        ctx.log_print(ctx.login_failure_message(ctx.LAST_LOGIN_RESULT))
        return ctx.record_login_runtime(ctx.LAST_LOGIN_RESULT)
    ctx.IS_LOGGING_IN = True
    ctx.log_print('嘗試使用帳密自動登入...')
    ctx.log(event='login_attempt', status='started', message='嘗試登入 TronClass。', extra={'credential_source': credential_source, 'user': user})
    ssl_fallback_attempted = False
    # Feature-detected SSO discovery (no per-school gate): GET the homepage and, if its
    # orgSettings.loginSettings carries a campus-SSO (kc_idp_hint) URL, prefer it over
    # {base}/login. login_settings_url is set ONLY when discovery genuinely points
    # elsewhere — it both overrides login_url and marks this as a federation entry, so a
    # failed auto attempt falls back to the interactive browser at the resolved URL.
    login_settings_url = None
    endpoints0 = ctx.get_active_http_endpoints()
    resolved_settings = await ctx.resolve_login_settings_url(session, endpoints0.base_url, endpoints0.login_url)
    if resolved_settings and resolved_settings != endpoints0.login_url:
        login_settings_url = resolved_settings
    try:
        while True:
            client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
            if login_settings_url and login_settings_url != client.endpoints.login_url:
                client.endpoints = dataclasses.replace(client.endpoints, login_url=login_settings_url)
            try:
                session.cookie_jar.clear()
                outcome = await ctx.run_login_flow(client, user, passwd)
            except ctx.LoginPageChangedError as exc:
                # Structural failure (changed login page / OCR captcha with no engine /
                # federated SSO). Last resort: interactive browser when there's a user,
                # else passive cookie polling. login_settings_url, when set, is the
                # campus-SSO URL the browser should open.
                ctx.log(event='login_failure', status='login_page_changed', message='登入頁結構與預期不符；改用最後備案（手動瀏覽器登入／持續偵測 Cookie）。', error=exc, extra={'credential_source': credential_source, 'user': user})
                return await _browser_or_passive(
                    session, user=user, credential_source=credential_source,
                    status='login_page_changed', error=exc, login_url_override=login_settings_url,
                )
            except ctx.LoginRejectedError as exc:
                # Wrong account / password / captcha — a browser login would only repeat the
                # same rejection, so never auto-open one. Cookie detection stays on, so a
                # manually-imported cookie can still take over.
                ctx.log(event='login_failure', status='rejected', message='登入失敗，帳號密碼被拒絕。', error=exc, extra={'credential_source': credential_source, 'user': user})
                ctx.LAST_LOGIN_RESULT = ctx.LoginResult(status='rejected', credential_source=credential_source, user=user, error=ctx.normalize_text(exc))
                ctx.log_print(ctx.login_failure_message(ctx.LAST_LOGIN_RESULT))
                return ctx.record_login_runtime(ctx.LAST_LOGIN_RESULT)
            except (ctx.TronHttpError, ctx.aiohttp.ClientError, ctx.asyncio.TimeoutError, ctx.ssl.SSLError) as exc:
                if not ssl_fallback_attempted and ctx.get_verify_ssl() and ctx.is_ssl_certificate_verification_error(exc):
                    ssl_fallback_attempted = True
                    ctx.enable_insecure_ssl_fallback(exc)
                    continue
                # Network/HTTP/timeout — transient, resolves by waiting; auto-retry with
                # backoff (a browser can't fix a network problem). Cookie polling continues.
                ctx.log(event='login_failure', status='transient_error', message='登入過程發生錯誤。', error=exc, extra={'credential_source': credential_source, 'user': user})
                ctx.LAST_LOGIN_RESULT = ctx.LoginResult(status='transient_error', credential_source=credential_source, user=user, error=ctx.normalize_text(exc))
                ctx.log_print(ctx.login_failure_message(ctx.LAST_LOGIN_RESULT))
                return ctx.record_login_runtime(ctx.LAST_LOGIN_RESULT)
            if not outcome.has_session or not ctx.has_session_cookie(session):
                ctx.log(event='login_failure', status='missing_session', url=outcome.final_url, message='登入流程完成，但未取得有效 session；改用最後備案。', extra={'credential_source': credential_source, 'user': user})
                return await _browser_or_passive(
                    session, user=user, credential_source=credential_source,
                    status='missing_session', login_url_override=login_settings_url,
                )
            if ctx.provider_requires_api_session_validation():
                try:
                    await ctx.validate_login_api_session(client)
                except (ctx.TronHttpError, ctx.aiohttp.ClientError, ctx.asyncio.TimeoutError, ctx.ssl.SSLError) as exc:
                    try:
                        session.cookie_jar.clear()
                    except Exception:
                        pass
                    # Logged in but the session failed validation (flow changed). Structural
                    # → last resort: interactive browser, or passive cookie polling.
                    ctx.log(
                        event='login_failure',
                        status='missing_session',
                        url=outcome.final_url,
                        message='登入流程完成，但 API session 驗證失敗；改用最後備案。',
                        error=exc,
                        extra={'credential_source': credential_source, 'user': user},
                    )
                    return await _browser_or_passive(
                        session, user=user, credential_source=credential_source,
                        status='missing_session', error=exc, login_url_override=login_settings_url,
                    )
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
    except Exception as exc:
        # Catch-all so an unexpected error still yields a clear, classified result
        # (auto-retry with backoff) instead of escaping to the fatal-restart path
        # with no user-facing explanation. ponytail: one net, not per-exception.
        ctx.log(event='login_failure', status='error', message='登入時發生未預期的錯誤。', error=exc, extra={'credential_source': credential_source, 'user': user})
        ctx.LAST_LOGIN_RESULT = ctx.LoginResult(status='error', credential_source=credential_source, user=user, error=ctx.normalize_text(exc))
        ctx.log_print(ctx.login_failure_message(ctx.LAST_LOGIN_RESULT))
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

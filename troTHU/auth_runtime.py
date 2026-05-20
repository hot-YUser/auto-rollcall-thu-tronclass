from __future__ import annotations

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
    return ctx.LAST_LOGIN_RESULT.status not in {'missing_credentials', 'rejected'}


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
            except ctx.LoginRejectedError:
                ctx.log(event='login_failure', status='rejected', message='登入失敗，帳號密碼被拒絕。', extra={'credential_source': credential_source, 'user': user})
                ctx.log_print('登入失敗，請檢查帳號或密碼是否正確。')
                ctx.LAST_LOGIN_RESULT = ctx.LoginResult(status='rejected', credential_source=credential_source, user=user)
                return ctx.record_login_runtime(ctx.LAST_LOGIN_RESULT)
            except (ctx.TronHttpError, ctx.aiohttp.ClientError, ctx.asyncio.TimeoutError, ctx.ssl.SSLError) as exc:
                if not ssl_fallback_attempted and ctx.get_verify_ssl() and ctx.is_ssl_certificate_verification_error(exc):
                    ssl_fallback_attempted = True
                    ctx.enable_insecure_ssl_fallback(exc)
                    continue
                ctx.log(event='login_failure', status='transient_error', message='登入過程發生錯誤。', error=exc, extra={'credential_source': credential_source, 'user': user})
                ctx.log_print('登入過程中發生錯誤: {}'.format(exc))
                ctx.LAST_LOGIN_RESULT = ctx.LoginResult(status='transient_error', credential_source=credential_source, user=user, error=ctx.normalize_text(exc))
                return ctx.record_login_runtime(ctx.LAST_LOGIN_RESULT)
            if not outcome.has_session or not ctx.has_session_cookie(session):
                ctx.log(event='login_failure', status='missing_session', url=outcome.final_url, message='登入流程完成，但未取得有效 session。', extra={'credential_source': credential_source, 'user': user})
                ctx.log_print('登入流程已完成，但未取得有效 session。')
                ctx.LAST_LOGIN_RESULT = ctx.LoginResult(status='missing_session', credential_source=credential_source, user=user, final_url=outcome.final_url)
                return ctx.record_login_runtime(ctx.LAST_LOGIN_RESULT)
            ctx.CONFIG['account']['user'] = user
            ctx.log(event='login_success', status='success', url=outcome.final_url, message='登入成功。', extra={'credential_source': credential_source, 'user': user})
            ctx.log_print('登入成功！綁定學號：{}'.format(user))
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

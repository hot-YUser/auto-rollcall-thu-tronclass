from __future__ import annotations

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore


def __getattr__(name: str):
    return getattr(ctx, name)



def get_active_provider_definition():
    provider_config = ctx.normalize_provider_config(ctx.CONFIG.get('provider', ctx.DEFAULT_CONFIG['provider']))
    return ctx.get_provider(provider_config.get('current', ctx.DEFAULT_PROVIDER))


def get_active_provider_config() -> ctx.Dict[str, ctx.Any]:
    provider_config = ctx.normalize_provider_config(ctx.CONFIG.get('provider', ctx.DEFAULT_CONFIG['provider']))
    current = provider_config.get('current', ctx.DEFAULT_PROVIDER)
    available = provider_config.get('available', {})
    active = ctx.copy.deepcopy(available.get(current, ctx.get_provider(current).to_config()))
    active['allow_experimental'] = ctx.coerce_bool(provider_config.get('allow_experimental'), False)
    active['requested'] = provider_config.get('requested', current)
    active['fallback_reason'] = provider_config.get('fallback_reason', '')
    return active


def get_active_provider_key() -> str:
    return ctx.normalize_text(ctx.get_active_provider_config().get('key')) or ctx.DEFAULT_PENDING_QR_PROVIDER


def provider_report() -> ctx.Dict[str, ctx.Any]:
    active = ctx.get_active_provider_config()
    support = ctx.provider_support_report(active, allow_experimental=ctx.coerce_bool(active.get('allow_experimental'), False))
    active['support'] = support
    active['daily_ready'] = support['daily_ready']
    return active


def provider_is_daily_allowed() -> bool:
    return bool(ctx.provider_report().get('daily_ready'))


def provider_block_message(action: str='daily automation') -> str:
    report = ctx.provider_report()
    return "Provider {} is {} and is blocked for {}. Check provider endpoint configuration before retrying.".format(report.get('key', ctx.DEFAULT_PROVIDER), report.get('support_level', 'unsupported'), action)


def provider_guard_result(action: str) -> ctx.Optional[ctx.LoginResult]:
    if ctx.provider_is_daily_allowed():
        return None
    report = ctx.provider_report()
    message = ctx.provider_block_message(action)
    ctx.log(event='provider_guard', status='blocked', message=message, extra={'provider': report.get('key'), 'support_level': report.get('support_level'), 'action': action})
    ctx.log_print(message)
    return ctx.LoginResult(status='provider_experimental', credential_source='provider_guard', error=message)


def get_active_http_endpoints():
    active = ctx.get_active_provider_config()
    if active.get('key') == ctx.DEFAULT_PROVIDER:
        return ctx.default_endpoints()
    return ctx.endpoints_from_provider(active)


def course_discovery_report() -> ctx.Dict[str, ctx.Any]:
    provider = ctx.provider_report()
    endpoints = ctx.get_active_http_endpoints()
    capabilities = provider.get('capabilities', {})
    return {'enabled': bool(capabilities.get('course_discovery')), 'current_semester_endpoint': bool(getattr(endpoints, 'current_semester_url', '')), 'courses_endpoint': bool(getattr(endpoints, 'courses_url', '')), 'read_only': True}


def research_report() -> ctx.Dict[str, ctx.Any]:
    return ctx.normalize_research_mode_config(ctx.CONFIG.get('research', ctx.DEFAULT_CONFIG['research']))


def module_available(module_name: str) -> bool:
    try:
        return ctx.importlib.util.find_spec(module_name) is not None
    except (ImportError, AttributeError, ValueError):
        return False


def find_profile(profile_name: str=''):
    normalized = ctx.normalize_profile_name(profile_name) if profile_name else ''
    active = ctx.get_active_profile(ctx.CONFIG)
    for profile in ctx.list_profiles(ctx.CONFIG):
        if not normalized and profile.name == active.name:
            return profile
        if normalized and profile.name == normalized:
            return profile
    return active if not normalized else None


def cookie_report(profile_name: str) -> ctx.Dict[str, ctx.Any]:
    path = ctx.cookie_path(ctx.BASE_DIR, profile_name)
    age_seconds = ctx.file_age_seconds(path)
    valid = False
    record_count = 0
    if path.exists():
        try:
            data = ctx.json.loads(path.read_text(encoding='utf-8'))
            valid = isinstance(data, list)
            record_count = len(data) if isinstance(data, list) else 0
        except (OSError, ValueError):
            valid = False
    return {'enabled': ctx.cookie_cache_enabled(ctx.CONFIG), 'path': str(path), 'exists': path.exists(), 'valid': valid, 'record_count': record_count, 'age_seconds': age_seconds, 'age': ctx.human_age(age_seconds)}


def credential_report(profile_name: str='') -> ctx.Dict[str, ctx.Any]:
    profile = ctx.find_profile(profile_name)
    if profile is None:
        return {'profile': ctx.normalize_profile_name(profile_name), 'exists': False}
    runtime_user, runtime_pass = ctx.get_runtime_credentials()
    env_user, env_pass = ctx.get_environment_credentials()
    keyring_password = ctx.get_keyring_password(profile.name, profile.user)
    _user, _passwd, source = ctx.resolve_credentials()
    return {'profile': profile.name, 'exists': True, 'user_configured': ctx.has_real_credential(profile.user), 'sources': {'runtime': ctx.has_real_credential(runtime_user) and ctx.has_real_credential(runtime_pass), 'environment': ctx.has_real_credential(env_user) and ctx.has_real_credential(env_pass), 'keyring': ctx.has_real_credential(keyring_password), 'config': ctx.has_real_credential(profile.passwd)}, 'effective_source': source}


def notification_report() -> ctx.Dict[str, ctx.Any]:
    notifications = ctx.CONFIG.get('notifications', {})
    tg = notifications.get('tg', {}) if isinstance(notifications, dict) else {}
    dc = notifications.get('dc', {}) if isinstance(notifications, dict) else {}
    return {'telegram': {'enabled': bool(tg.get('enable')), 'configured': bool(ctx.normalize_text(tg.get('key')) and ctx.normalize_text(tg.get('chat')))}, 'discord': {'enabled': bool(dc.get('enable')), 'configured': bool(ctx.normalize_text(dc.get('key')) and ctx.normalize_text(dc.get('chat')))}}


def integration_report() -> ctx.Dict[str, ctx.Any]:
    integrations = ctx.CONFIG.get('integrations', {})
    report: ctx.Dict[str, ctx.Any] = {}
    if not isinstance(integrations, dict):
        return report
    for name in ('discord', 'line', 'telegram'):
        item = integrations.get(name, {})
        if not isinstance(item, dict):
            item = {}
        env_keys = {key: value for key, value in item.items() if key.endswith('_env') and ctx.normalize_text(value)}
        report[name] = {'enabled': bool(item.get('enable')), 'env': env_keys, 'env_present': {key: bool(ctx.os.getenv(ctx.normalize_text(value))) for key, value in env_keys.items()}}
    bindings = integrations.get('bindings', {})
    report['binding_count'] = len(bindings) if isinstance(bindings, dict) else 0
    admins = integrations.get('admins', {})
    if isinstance(admins, dict):
        report['admin_count'] = sum((len(values) for values in admins.values() if isinstance(values, list)))
    else:
        report['admin_count'] = 0
    return report


def binding_summary(profile_name: str='') -> ctx.Dict[str, ctx.Any]:
    integrations = ctx.CONFIG.get('integrations', {})
    bindings = integrations.get('bindings', {}) if isinstance(integrations, dict) else {}
    profile_text = ctx.normalize_profile_name(profile_name) if profile_name else ''
    adapter_counts: ctx.Dict[str, int] = {}
    count = 0
    if isinstance(bindings, dict):
        for binding in bindings.values():
            if not isinstance(binding, dict):
                continue
            binding_profile = ctx.normalize_profile_name(binding.get('profile') or '')
            if profile_text and binding_profile != profile_text:
                continue
            adapter = ctx.normalize_text(binding.get('adapter')).lower() or 'unknown'
            adapter_counts[adapter] = adapter_counts.get(adapter, 0) + 1
            count += 1
    return {'count': count, 'adapters': adapter_counts}


def pending_qr_summary(profile_name: str='') -> ctx.Dict[str, ctx.Any]:
    profile_text = ctx.normalize_profile_name(profile_name) if profile_name else ''
    pending = []
    for item in ctx.list_pending_qr(ctx.BASE_DIR):
        if profile_text and item.profile != profile_text:
            continue
        pending.append({'provider': item.provider, 'profile': item.profile, 'rollcall_id': item.rollcall_id, 'rollcall_type': item.rollcall_type, 'source_adapter': item.source_adapter, 'source_channel_id': item.source_channel_id, 'expires_at': item.expires_at})
    return {'count': len(pending), 'items': pending}


def teacher_assist_report() -> ctx.Dict[str, ctx.Any]:
    teacher = ctx.get_teacher_config(ctx.CONFIG)
    user, _password, credential_source = ctx.resolve_teacher_credentials()
    configured = ctx.teacher_assist_configured(ctx.CONFIG)
    login = ctx.TEACHER_LOGIN_RESULT
    course_config = ctx.normalize_text(teacher.get('course'))
    cached_course = ctx.normalize_text(ctx.TEACHER_COURSE_ID)
    if course_config:
        course_source = 'config'
        course_id = course_config
    elif cached_course:
        course_source = 'auto'
        course_id = cached_course
    else:
        course_source = 'auto_pending'
        course_id = ''
    return {
        'configured': configured,
        'school': teacher.get('school'),
        'user_configured': ctx.has_real_credential(teacher.get('user')) or ctx.has_real_credential(user),
        'credential_source': credential_source,
        'login': {
            'status': login.status,
            'credential_source': login.credential_source,
            'user': login.user,
        },
        'ready': bool(ctx.TEACHER_READY),
        'course_id': course_id,
        'course_source': course_source,
    }


def account_runtime_summary(profile_name: str='') -> ctx.Dict[str, ctx.Any]:
    profile = ctx.find_profile(profile_name)
    if profile is None:
        return {'profile': ctx.normalize_profile_name(profile_name), 'exists': False, 'store_status': ctx.load_runtime_state(ctx.BASE_DIR).store_status}
    snapshot = ctx.load_runtime_state(ctx.BASE_DIR)
    summary = ctx.runtime_profile_summary(snapshot, profile.name)
    summary['exists'] = True
    return summary


def account_state_report(profile_name: str='') -> ctx.Dict[str, ctx.Any]:
    profile = ctx.find_profile(profile_name)
    if profile is None:
        return {'profile': ctx.normalize_profile_name(profile_name), 'exists': False, 'runtime_state_path': str(ctx.runtime_state_path(ctx.BASE_DIR))}
    pending = ctx.pending_qr_summary(profile.name)
    bindings = ctx.binding_summary(profile.name)
    return {'profile': profile.name, 'exists': True, 'user': profile.user if ctx.has_real_credential(profile.user) else '', 'label': profile.label, 'runtime_state_path': str(ctx.runtime_state_path(ctx.BASE_DIR)), 'runtime': ctx.account_runtime_summary(profile.name), 'cookie': ctx.cookie_report(profile.name), 'pending_qr_count': pending['count'], 'pending_qr': pending['items'], 'binding_count': bindings['count'], 'adapter_counts': bindings['adapters']}


def status_report() -> ctx.Dict[str, ctx.Any]:
    active = ctx.get_active_profile(ctx.CONFIG)
    pending = [item.to_dict() for item in ctx.list_pending_qr(ctx.BASE_DIR)]
    provider = ctx.provider_report()
    now = ctx.current_datetime()
    return {'provider': provider, 'provider_support': provider.get('support', {}), 'active_profile': active.name, 'active_target': ctx.summarize_group_target(ctx.CONFIG), 'user': active.user if ctx.has_real_credential(active.user) else '', 'credential': ctx.credential_report(active.name), 'cookie': ctx.cookie_report(active.name), 'log_dir': str(ctx.PATH), 'notifications': ctx.notification_report(), 'integrations': ctx.integration_report(), 'research': ctx.research_report(), 'course_discovery': ctx.course_discovery_report(), 'teacher_assist': ctx.teacher_assist_report(), 'runtime_state': ctx.account_runtime_summary(active.name), 'pending_qr': pending, 'time': {'timezone': ctx.get_config_timezone_name(), 'now': now.isoformat(timespec='seconds'), 'weekday': now.weekday()}, 'config_warnings': list(getattr(ctx, 'CONFIG_WARNINGS', [])), 'last_login': {'status': ctx.LAST_LOGIN_RESULT.status, 'credential_source': ctx.LAST_LOGIN_RESULT.credential_source, 'user': ctx.LAST_LOGIN_RESULT.user}}


def doctor_report(network_probe: ctx.Optional[ctx.Mapping[str, ctx.Any]]=None) -> ctx.Dict[str, ctx.Any]:
    active = ctx.get_active_profile(ctx.CONFIG)
    provider = ctx.provider_report()
    provider_support = provider.get('support', {})
    research = ctx.research_report()
    browser_login = ctx.browser_assisted_login_status()
    credential = ctx.credential_report(active.name)
    cookie = ctx.cookie_report(active.name)
    teacher_assist = ctx.teacher_assist_report()
    packaging = ctx.build_package_diagnostic_report(ctx.BASE_DIR, config=ctx.CONFIG)
    checks = [ctx.check_item('provider', bool(provider_support.get('daily_ready')), '{} ({}) support: {}'.format(provider.get('key'), provider.get('label'), provider_support.get('support_level', provider.get('status'))), severity='warn'), ctx.check_item('provider fallback', not bool(provider.get('fallback_reason')), 'requested {} -> active {}'.format(provider.get('requested', provider.get('key')), provider.get('key')), severity='warn'), ctx.check_item('provider support level', provider_support.get('support_level') == 'ready', 'provider user-level support is ready', severity='warn'), ctx.check_item('config', ctx.CONFIG_PATH.exists(), str(ctx.CONFIG_PATH), severity='fail'), ctx.check_item('timezone', bool(ctx.get_config_timezone_name()), 'IANA timezone: {}'.format(ctx.get_config_timezone_name()), severity='fail'), ctx.check_item('yaml', ctx.module_available('yaml'), 'PyYAML importable', severity='fail'), ctx.check_item('aiohttp', ctx.module_available('aiohttp'), 'aiohttp importable', severity='fail'), ctx.check_item('aiohttp.web', ctx.module_available('aiohttp.web'), 'needed for local QR scanner', severity='warn'), ctx.check_item('playwright', (not browser_login.get('enabled')) or bool(browser_login.get('playwright_available')), 'browser-assisted login {}'.format('available' if browser_login.get('playwright_available') else 'disabled/unavailable'), severity='warn'), ctx.check_item('keyring', ctx.keyring_available(), 'optional password store', severity='warn'), ctx.check_item('active profile user', bool(credential.get('user_configured')), 'profile {} has a user'.format(active.name), severity='fail'), ctx.check_item('credential', credential.get('effective_source') != 'missing', 'effective source: {}'.format(credential.get('effective_source')), severity='warn'), ctx.check_item('QR teacher assist', bool(teacher_assist.get('configured')), 'configured={} login={} course_source={}'.format(teacher_assist.get('configured'), teacher_assist.get('login', {}).get('status'), teacher_assist.get('course_source')), severity='warn'), ctx.check_item('cookie cache', not cookie['exists'] or bool(cookie['valid']), 'file: {} age: {}'.format(cookie['path'], cookie['age']), severity='warn'), ctx.check_item('verify_ssl', ctx.get_verify_ssl(), 'TLS verification should stay enabled', severity='warn'), ctx.check_item('course discovery', bool(ctx.course_discovery_report()['current_semester_endpoint']) and bool(ctx.course_discovery_report()['courses_endpoint']), 'read-only course endpoints configured', severity='warn'), ctx.check_item('research mode', not bool(research.get('enabled')), 'disabled for daily automation' if not bool(research.get('enabled')) else 'enabled; use only for explicit capture/API exploration', severity='warn'), ctx.check_item('log directory', ctx.PATH.exists() or ctx.os.access(str(ctx.BASE_DIR), ctx.os.W_OK), str(ctx.PATH), severity='warn')]
    group_summary = ctx.summarize_group_target(ctx.CONFIG)
    group_ok = bool(group_summary.get('ok')) and not group_summary.get('skipped')
    checks.append(ctx.check_item('group target', group_ok, ctx.describe_group_target(ctx.CONFIG), severity='warn'))
    checks.extend(packaging.get('checks', []))
    for warning in ctx.BOOTSTRAP_WARNINGS:
        checks.append(ctx.check_item('bootstrap', False, warning, severity='warn'))
    status = 'ok'
    if any((item['status'] == 'fail' for item in checks)):
        status = 'fail'
    elif any((item['status'] == 'warn' for item in checks)):
        status = 'warn'
    probe = dict(network_probe or {"enabled": False, "status": "disabled"})
    if probe.get("enabled") and probe.get("status") == "fail" and status == "ok":
        status = "warn"
    return {'status': status, 'base_dir': str(ctx.BASE_DIR), 'config_path': str(ctx.CONFIG_PATH), 'provider': provider, 'provider_support': provider_support, 'active_profile': active.name, 'checks': checks, 'time': {'timezone': ctx.get_config_timezone_name(), 'now': ctx.current_datetime().isoformat(timespec='seconds')}, 'http_timeout': ctx.get_http_timeout_seconds(), 'notification_timeout': ctx.get_notification_timeout_seconds(), 'cookie': cookie, 'notifications': ctx.notification_report(), 'integrations': ctx.integration_report(), 'research': research, 'browser_assisted_login': browser_login, 'course_discovery': ctx.course_discovery_report(), 'teacher_assist': teacher_assist, 'network_probe': probe, 'config_warnings': list(getattr(ctx, 'CONFIG_WARNINGS', [])), 'packaging': packaging}


def print_status(json_output: bool=False) -> None:
    report = ctx.status_report()
    if json_output:
        print(ctx.json_text(report))
        return
    active = ctx.get_active_profile(ctx.CONFIG)
    cookie = report['cookie']
    credential = report['credential']
    provider = report['provider']
    provider_support = report.get('provider_support', {})
    print('Provider: {} ({}, daily_ready={})'.format(provider['key'], provider_support.get('support_level', provider.get('status')), 'yes' if provider_support.get('daily_ready') else 'no'))
    print('Timezone: {}'.format(report.get('time', {}).get('timezone', ctx.get_config_timezone_name())))
    print('Active profile: {}'.format(active.name))
    print('Active target: {}'.format(ctx.describe_group_target(ctx.CONFIG)))
    print('User: {}'.format(active.user if ctx.has_real_credential(active.user) else '(not set)'))
    print('Credential source: {}'.format(credential.get('effective_source', 'missing')))
    print('Keyring available: {}'.format('yes' if ctx.keyring_available() else 'no'))
    print('Cookie cache: {}'.format('enabled' if cookie['enabled'] else 'disabled'))
    print('Cookie file: {} ({})'.format(cookie['path'], cookie['age']))
    print('Course discovery: {}'.format('enabled' if report['course_discovery']['enabled'] else 'disabled'))
    teacher_assist = report.get('teacher_assist', {})
    print('QR teacher assist: {} ({}, course: {})'.format('ready' if teacher_assist.get('ready') else 'not ready', teacher_assist.get('login', {}).get('status', 'missing'), teacher_assist.get('course_id') or teacher_assist.get('course_source')))
    runtime = report['runtime_state']
    print('Bot state: {}'.format(runtime.get('bot_state', 'stopped')))
    print('Monitor state: {}{}'.format(runtime.get('monitor_state', 'unknown'), ' (stale)' if runtime.get('heartbeat_stale') else ''))
    print('Pending QR: {}'.format(len(report['pending_qr'])))
    print('Log dir: {}'.format(ctx.PATH))


def doctor(json_output: bool=False, probe_url: str='', probe_count: int=3, probe_concurrency: int=1) -> int:
    network_probe = {"enabled": False, "status": "disabled"}
    if ctx.normalize_text(probe_url):
        network_probe = ctx.asyncio.run(
            ctx.run_connection_probe(
                probe_url,
                count=probe_count,
                concurrency=probe_concurrency,
                timeout_seconds=min(10.0, ctx.get_http_timeout_seconds()),
            )
        )
    report = ctx.doctor_report(network_probe=network_probe)
    if json_output:
        print(ctx.json_text(report))
        return 0
    print('Config: {}'.format(ctx.CONFIG_PATH))
    print('Base dir: {}'.format(ctx.BASE_DIR))
    print(ctx.render_check_items(report['checks']))
    if report.get('network_probe', {}).get('enabled'):
        probe = report['network_probe']
        print('network probe: {} ok={}/{} avg={}ms'.format(probe.get('status'), probe.get('ok_count'), probe.get('count'), probe.get('average_ms')))
    print('aiohttp timeout: {:.1f}s'.format(report['http_timeout']))
    print('notification timeout: {:.1f}s'.format(report['notification_timeout']))
    return 0

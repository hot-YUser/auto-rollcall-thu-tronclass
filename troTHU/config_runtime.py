from __future__ import annotations
from datetime import timedelta, timezone
from zoneinfo import ZoneInfo, ZoneInfoNotFoundError

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore


def __getattr__(name: str):
    return getattr(ctx, name)



def normalize_radar_boundary_points(value: ctx.Any) -> ctx.List[ctx.List[float]]:
    return ctx.runtime_normalize_radar_boundary_points(value, default_points=ctx.copy.deepcopy(ctx.DEFAULT_CONFIG['radar']['boundary_points']))


def is_placeholder_credential(value: ctx.Any) -> bool:
    return ctx.normalize_text(value) in ctx.PLACEHOLDER_CREDENTIAL_VALUES


def has_real_credential(value: ctx.Any) -> bool:
    normalized = ctx.normalize_text(value)
    return bool(normalized) and (not ctx.is_placeholder_credential(normalized))


def set_runtime_credentials(user: str, password: str) -> None:
    ctx.RUNTIME_CREDENTIALS['user'] = ctx.normalize_text(user)
    ctx.RUNTIME_CREDENTIALS['passwd'] = ctx.normalize_text(password)


def clear_runtime_credentials() -> None:
    ctx.set_runtime_credentials('', '')


def get_runtime_credentials() -> ctx.Tuple[str, str]:
    return (ctx.normalize_text(ctx.RUNTIME_CREDENTIALS.get('user')), ctx.normalize_text(ctx.RUNTIME_CREDENTIALS.get('passwd')))


def get_environment_credentials() -> ctx.Tuple[str, str]:
    return (ctx.normalize_text(ctx.os.getenv('TRON_USER')), ctx.normalize_text(ctx.os.getenv('TRON_PASS')))


def resolve_credentials() -> ctx.Tuple[str, str, str]:
    runtime_user, runtime_passwd = ctx.get_runtime_credentials()
    if ctx.has_real_credential(runtime_user) and ctx.has_real_credential(runtime_passwd):
        return (runtime_user, runtime_passwd, 'runtime')
    env_user, env_passwd = ctx.get_environment_credentials()
    if ctx.has_real_credential(env_user) and ctx.has_real_credential(env_passwd):
        return (env_user, env_passwd, 'environment')
    try:
        active_profile = ctx.get_active_profile(ctx.CONFIG)
    except Exception:
        active_profile = None
    if active_profile is not None and ctx.has_real_credential(active_profile.user):
        keyring_password = ctx.get_keyring_password(active_profile.name, active_profile.user)
        if ctx.has_real_credential(keyring_password):
            return (active_profile.user, keyring_password, 'keyring')
        if ctx.has_real_credential(active_profile.passwd):
            return (active_profile.user, active_profile.passwd, 'config')
    account = ctx.CONFIG.get('account', {})
    config_user = ctx.normalize_text(account.get('user'))
    config_password = ctx.normalize_text(account.get('passwd'))
    if ctx.has_real_credential(config_user) and ctx.has_real_credential(config_password):
        return (config_user, config_password, 'config')
    return ('', '', 'missing')


def resolve_teacher_credentials() -> ctx.Tuple[str, str, str]:
    env_user = ctx.normalize_text(ctx.os.getenv('TRON_TEACHER_USER'))
    env_passwd = ctx.normalize_text(ctx.os.getenv('TRON_TEACHER_PASS'))
    if ctx.has_real_credential(env_user) and ctx.has_real_credential(env_passwd):
        return (env_user, env_passwd, 'environment')
    teacher = ctx.CONFIG.get('teacher', {}) if isinstance(ctx.CONFIG, dict) else {}
    if not isinstance(teacher, dict):
        teacher = {}
    config_user = ctx.normalize_text(teacher.get('user'))
    config_password = ctx.normalize_text(teacher.get('passwd'))
    if ctx.has_real_credential(config_user):
        keyring_password = ctx.get_keyring_password('teacher', config_user)
        if ctx.has_real_credential(keyring_password):
            return (config_user, keyring_password, 'keyring')
    if ctx.has_real_credential(config_user) and ctx.has_real_credential(config_password):
        return (config_user, config_password, 'config')
    return ('', '', 'missing')


def save_account_for_next_launch(user: str, password: str) -> bool:
    ctx.CONFIG['account']['user'] = ctx.normalize_text(user)
    ctx.CONFIG['account']['passwd'] = ctx.normalize_text(password)
    active_name = 'default'
    try:
        active_name = ctx.get_active_profile(ctx.CONFIG).name
    except Exception:
        pass
    ctx.set_profile(ctx.CONFIG, active_name, user, password, make_current=True)
    return ctx.save_config()


def load_advanced_config() -> ctx.Dict[str, ctx.Any]:
    if not ctx.CONFIG_ADVANCED_PATH.exists():
        return {}
    try:
        with open(ctx.CONFIG_ADVANCED_PATH, 'r', encoding='utf-8') as file:
            text = file.read()
        value = ctx.parse_advanced_config_toml(text)
    except Exception:
        return {}
    return value if isinstance(value, dict) else {}


def write_advanced_config_file(config: ctx.Mapping[str, ctx.Any]) -> None:
    ctx.CONFIG_ADVANCED_PATH.parent.mkdir(parents=True, exist_ok=True)
    with open(ctx.CONFIG_ADVANCED_PATH, 'w', encoding='utf-8') as file:
        file.write(ctx.render_advanced_config_toml(config))


def write_config_file(config: ctx.Dict[str, ctx.Any]) -> None:
    ctx.CONFIG_PATH.parent.mkdir(parents=True, exist_ok=True)
    with open(ctx.CONFIG_PATH, 'w', encoding='utf-8') as file:
        is_simple_shape = isinstance(config, dict) and (
            "now" in config
            or isinstance(config.get("accounts"), list)
            or isinstance(config.get("groups"), list)
        )
        if is_simple_shape:
            file.write(ctx.render_basic_config(config))
            return
        simple, advanced = ctx.split_normalized_config(ctx.normalize_config(ctx.copy.deepcopy(config)))
        file.write(ctx.render_basic_config(simple))
    ctx.write_advanced_config_file(advanced)


def _normalize_teacher_school(value: ctx.Any) -> str:
    text = ctx.normalize_text(value) or ctx.DEFAULT_CONFIG['teacher']['school']
    try:
        return ctx.get_provider(text).key
    except Exception:
        return ctx.DEFAULT_CONFIG['teacher']['school']


def normalize_config(raw_config: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    if not isinstance(raw_config, dict):
        raw_config = {}
    config = raw_config
    advanced = config.pop('advanced', {})
    if isinstance(advanced, dict):
        for key, value in advanced.items():
            if key not in config:
                config[key] = value
    try:
        ctx.CONFIG_WARNINGS = ctx.sanitize_config_values(config)
    except Exception:
        ctx.CONFIG_WARNINGS = []
    account = config.setdefault('account', {})
    if not isinstance(account, dict):
        account = {}
        config['account'] = account
    account.setdefault('user', ctx.DEFAULT_CONFIG['account']['user'])
    account.setdefault('passwd', ctx.DEFAULT_CONFIG['account']['passwd'])
    ctx.normalize_accounts_config(config)
    active_profile = ctx.get_active_profile(config)
    if not ctx.has_real_credential(account.get('user')) and ctx.has_real_credential(active_profile.user):
        account['user'] = active_profile.user
    if not ctx.has_real_credential(account.get('passwd')) and ctx.has_real_credential(active_profile.passwd):
        account['passwd'] = active_profile.passwd
    teacher = config.setdefault('teacher', {})
    if not isinstance(teacher, dict):
        teacher = {}
        config['teacher'] = teacher
    default_teacher = ctx.DEFAULT_CONFIG['teacher']
    teacher['user'] = ctx.normalize_text(teacher.get('user', default_teacher['user']))
    teacher['passwd'] = ctx.normalize_text(teacher.get('passwd', default_teacher['passwd']))
    teacher['school'] = _normalize_teacher_school(teacher.get('school', default_teacher['school']))
    teacher['course'] = ctx.normalize_text(teacher.get('course', default_teacher['course']))
    config['provider'] = ctx.normalize_provider_config(config.get('provider', ctx.DEFAULT_CONFIG['provider']))
    session_config = config.setdefault('session', {})
    if not isinstance(session_config, dict):
        session_config = {}
        config['session'] = session_config
    session_config['cache_cookies'] = ctx.coerce_bool(session_config.get('cache_cookies', ctx.DEFAULT_CONFIG['session']['cache_cookies']), ctx.DEFAULT_CONFIG['session']['cache_cookies'])
    auth_config = config.setdefault('auth', {})
    if not isinstance(auth_config, dict):
        auth_config = {}
        config['auth'] = auth_config
    browser_login = auth_config.setdefault('browser_assisted_login', {})
    if not isinstance(browser_login, dict):
        browser_login = {}
        auth_config['browser_assisted_login'] = browser_login
    default_browser_login = ctx.DEFAULT_CONFIG['auth']['browser_assisted_login']
    browser_login['enabled'] = ctx.coerce_bool(browser_login.get('enabled', default_browser_login['enabled']), default_browser_login['enabled'])
    browser_login['headless'] = ctx.coerce_bool(browser_login.get('headless', default_browser_login['headless']), default_browser_login['headless'])
    browser_login['timeout_ms'] = min(180000, ctx.coerce_positive_int(browser_login.get('timeout_ms', default_browser_login['timeout_ms']), default_browser_login['timeout_ms'], minimum=5000))
    ux_config = config.setdefault('ux', {})
    if not isinstance(ux_config, dict):
        ux_config = {}
        config['ux'] = ux_config
    ux_config['pending_qr_ttl_seconds'] = ctx.coerce_positive_int(ux_config.get('pending_qr_ttl_seconds', ctx.DEFAULT_CONFIG['ux']['pending_qr_ttl_seconds']), ctx.DEFAULT_CONFIG['ux']['pending_qr_ttl_seconds'], minimum=30)
    ux_config['debug_bundle_log_limit'] = ctx.coerce_positive_int(ux_config.get('debug_bundle_log_limit', ctx.DEFAULT_CONFIG['ux']['debug_bundle_log_limit']), ctx.DEFAULT_CONFIG['ux']['debug_bundle_log_limit'], minimum=1)
    monitor_config = config.setdefault('monitor', {})
    if not isinstance(monitor_config, dict):
        monitor_config = {}
        config['monitor'] = monitor_config
    default_monitor = ctx.DEFAULT_CONFIG['monitor']
    monitor_config['ignore_attendance_rate_gate'] = ctx.coerce_bool(
        monitor_config.get('ignore_attendance_rate_gate', default_monitor['ignore_attendance_rate_gate']),
        default_monitor['ignore_attendance_rate_gate'],
    )
    local_ui = config.setdefault('local_ui', {})
    if not isinstance(local_ui, dict):
        local_ui = {}
        config['local_ui'] = local_ui
    local_ui['host'] = ctx.normalize_text(local_ui.get('host')) or ctx.DEFAULT_CONFIG['local_ui']['host']
    local_ui['port'] = ctx.coerce_positive_int(local_ui.get('port', ctx.DEFAULT_CONFIG['local_ui']['port']), ctx.DEFAULT_CONFIG['local_ui']['port'], minimum=1)
    webview = config.setdefault('webview', {})
    if not isinstance(webview, dict):
        webview = {}
        config['webview'] = webview
    cookie_sync = webview.setdefault('cookie_sync', {})
    if not isinstance(cookie_sync, dict):
        cookie_sync = {}
        webview['cookie_sync'] = cookie_sync
    default_cookie_sync = ctx.DEFAULT_CONFIG['webview']['cookie_sync']
    cookie_sync['enabled'] = ctx.coerce_bool(cookie_sync.get('enabled', default_cookie_sync['enabled']), default_cookie_sync['enabled'])
    cookie_sync['allow_cookie_import'] = ctx.coerce_bool(cookie_sync.get('allow_cookie_import', default_cookie_sync['allow_cookie_import']), default_cookie_sync['allow_cookie_import'])
    cookie_sync['allow_experimental_provider'] = ctx.coerce_bool(cookie_sync.get('allow_experimental_provider', default_cookie_sync['allow_experimental_provider']), default_cookie_sync['allow_experimental_provider'])
    allowed_domains = cookie_sync.get('allowed_domains', default_cookie_sync['allowed_domains'])
    if isinstance(allowed_domains, str):
        allowed_domains = [allowed_domains]
    if not isinstance(allowed_domains, (list, tuple, set)):
        allowed_domains = []
    cookie_sync['allowed_domains'] = sorted({ctx.normalize_text(value).lower().lstrip('.') for value in allowed_domains if ctx.normalize_text(value)})
    allowed_names = cookie_sync.get('cookie_name_allowlist', default_cookie_sync['cookie_name_allowlist'])
    if isinstance(allowed_names, str):
        allowed_names = [allowed_names]
    if not isinstance(allowed_names, (list, tuple, set)):
        allowed_names = default_cookie_sync['cookie_name_allowlist']
    cookie_sync['cookie_name_allowlist'] = sorted({ctx.normalize_text(value) for value in allowed_names if ctx.normalize_text(value)}) or list(default_cookie_sync['cookie_name_allowlist'])
    integrations = config.setdefault('integrations', {})
    if not isinstance(integrations, dict):
        integrations = {}
        config['integrations'] = integrations
    for name in ('discord', 'line', 'telegram'):
        integration = integrations.setdefault(name, {})
        if not isinstance(integration, dict):
            integration = {}
            integrations[name] = integration
        default_integration = ctx.DEFAULT_CONFIG['integrations'][name]
        integration['enable'] = ctx.coerce_bool(integration.get('enable', default_integration['enable']), default_integration['enable'])
        for key, value in default_integration.items():
            if key != 'enable':
                integration.setdefault(key, value)
        if name == 'discord':
            integration['ephemeral_replies'] = ctx.coerce_bool(integration.get('ephemeral_replies', default_integration['ephemeral_replies']), default_integration['ephemeral_replies'])
    bindings = integrations.setdefault('bindings', {})
    if not isinstance(bindings, dict):
        integrations['bindings'] = {}
    ctx.normalize_admins_config(config)
    security = integrations.setdefault('security', {})
    if not isinstance(security, dict):
        security = {}
        integrations['security'] = security
    default_security = ctx.DEFAULT_CONFIG['integrations']['security']
    allowed_channels = security.setdefault('allowed_channels', {})
    if not isinstance(allowed_channels, dict):
        allowed_channels = {}
        security['allowed_channels'] = allowed_channels
    for adapter in ('discord', 'line'):
        values = allowed_channels.get(adapter, default_security['allowed_channels'][adapter])
        if isinstance(values, str):
            values = [values]
        if not isinstance(values, (list, tuple, set)):
            values = []
        allowed_channels[adapter] = sorted({ctx.normalize_text(value) for value in values if ctx.normalize_text(value)})
    security['dangerous_cooldown_seconds'] = ctx.coerce_positive_int(security.get('dangerous_cooldown_seconds', default_security['dangerous_cooldown_seconds']), default_security['dangerous_cooldown_seconds'], minimum=0)
    security['audit_log'] = ctx.coerce_bool(security.get('audit_log', default_security['audit_log']), default_security['audit_log'])
    notifications = config.setdefault('notifications', {})
    if not isinstance(notifications, dict):
        notifications = {}
        config['notifications'] = notifications
    for channel in ('tg', 'dc'):
        channel_config = notifications.setdefault(channel, {})
        if not isinstance(channel_config, dict):
            channel_config = {}
            notifications[channel] = channel_config
        channel_config['enable'] = ctx.coerce_bool(channel_config.get('enable', ctx.DEFAULT_CONFIG['notifications'][channel]['enable']), ctx.DEFAULT_CONFIG['notifications'][channel]['enable'])
        channel_config.setdefault('key', ctx.DEFAULT_CONFIG['notifications'][channel]['key'])
        channel_config.setdefault('chat', ctx.DEFAULT_CONFIG['notifications'][channel]['chat'])
    runtime_config = config.setdefault('config', {})
    if not isinstance(runtime_config, dict):
        runtime_config = {}
        config['config'] = runtime_config
    runtime_config.setdefault('enable_log', ctx.DEFAULT_CONFIG['config']['enable_log'])
    runtime_config.setdefault('Senkaku', ctx.DEFAULT_CONFIG['config']['Senkaku'])
    runtime_config.setdefault('retries', ctx.DEFAULT_CONFIG['config']['retries'])
    runtime_config['http_timeout'] = ctx.coerce_positive_float(runtime_config.get('http_timeout', ctx.DEFAULT_CONFIG['config']['http_timeout']), ctx.DEFAULT_CONFIG['config']['http_timeout'])
    runtime_config['notification_timeout'] = ctx.coerce_positive_float(runtime_config.get('notification_timeout', ctx.DEFAULT_CONFIG['config']['notification_timeout']), ctx.DEFAULT_CONFIG['config']['notification_timeout'])
    runtime_config['verify_ssl'] = ctx.coerce_bool(runtime_config.get('verify_ssl', ctx.DEFAULT_CONFIG['config']['verify_ssl']), ctx.DEFAULT_CONFIG['config']['verify_ssl'])
    user_agents = runtime_config.get('user-agent')
    if not isinstance(user_agents, list):
        user_agents = []
    user_agents = [str(agent).strip() for agent in user_agents if str(agent).strip()]
    runtime_config['user-agent'] = user_agents or list(ctx.DEFAULT_USER_AGENTS)
    time_config = config.setdefault('time', {})
    if not isinstance(time_config, dict):
        time_config = {}
        config['time'] = time_config
    timezone_name = ctx.normalize_text(time_config.get('timezone') or time_config.get('tz') or ctx.DEFAULT_CONFIG['time']['timezone'])
    if _timezone_from_name(timezone_name) is None:
        ctx.CONFIG_WARNINGS.append('time.timezone 無法載入，已改用 {}。'.format(ctx.DEFAULT_CONFIG['time']['timezone']))
        timezone_name = ctx.DEFAULT_CONFIG['time']['timezone']
    time_config['timezone'] = timezone_name
    number_config = config.setdefault('number', {})
    if not isinstance(number_config, dict):
        number_config = {}
        config['number'] = number_config
    number_config['concurrency'] = min(ctx.NUMBER_CODE_LIMIT, ctx.coerce_positive_int(number_config.get('concurrency', ctx.DEFAULT_CONFIG['number']['concurrency']), ctx.DEFAULT_CONFIG['number']['concurrency'], minimum=1))
    number_config['min_concurrency'] = min(number_config['concurrency'], ctx.coerce_positive_int(number_config.get('min_concurrency', ctx.DEFAULT_CONFIG['number']['min_concurrency']), ctx.DEFAULT_CONFIG['number']['min_concurrency'], minimum=1))
    number_config['request_retries'] = min(10, ctx.coerce_positive_int(number_config.get('request_retries', ctx.DEFAULT_CONFIG['number']['request_retries']), ctx.DEFAULT_CONFIG['number']['request_retries'], minimum=1))
    number_config['cooldown_seconds'] = min(300.0, ctx.coerce_positive_float(number_config.get('cooldown_seconds', ctx.DEFAULT_CONFIG['number']['cooldown_seconds']), ctx.DEFAULT_CONFIG['number']['cooldown_seconds'], minimum=0.1))
    number_config['max_cooldowns'] = min(20, ctx.coerce_positive_int(number_config.get('max_cooldowns', ctx.DEFAULT_CONFIG['number']['max_cooldowns']), ctx.DEFAULT_CONFIG['number']['max_cooldowns'], minimum=0))
    number_config['transient_failure_threshold'] = ctx.coerce_positive_int(number_config.get('transient_failure_threshold', ctx.DEFAULT_CONFIG['number']['transient_failure_threshold']), ctx.DEFAULT_CONFIG['number']['transient_failure_threshold'], minimum=1)
    ratio_value = number_config.get('transient_failure_ratio', ctx.DEFAULT_CONFIG['number']['transient_failure_ratio'])
    try:
        ratio = float(ratio_value)
    except (TypeError, ValueError):
        ratio = ctx.DEFAULT_CONFIG['number']['transient_failure_ratio']
    number_config['transient_failure_ratio'] = max(0.0, min(1.0, ratio))
    direct_lookup_default = ctx.DEFAULT_CONFIG['number']['direct_code_lookup']
    direct_lookup_config = number_config.get('direct_code_lookup', {})
    if not isinstance(direct_lookup_config, dict):
        direct_lookup_config = {}
    number_config['direct_code_lookup'] = {
        'enabled': ctx.coerce_bool(direct_lookup_config.get('enabled', direct_lookup_default['enabled']), direct_lookup_default['enabled']),
        'fallback_bruteforce': ctx.coerce_bool(direct_lookup_config.get('fallback_bruteforce', direct_lookup_default['fallback_bruteforce']), direct_lookup_default['fallback_bruteforce']),
    }
    radar_config = config.setdefault('radar', {})
    if not isinstance(radar_config, dict):
        radar_config = {}
        config['radar'] = radar_config
    strategy = ctx.normalize_text(radar_config.get('strategy', ctx.DEFAULT_CONFIG['radar']['strategy'])).lower().replace('-', '_')
    strategy_aliases = {
        'global': 'global_wgs84',
        'wgs84': 'global_wgs84',
        'global_wgs84': 'global_wgs84',
        'empty_answer': 'empty_answer',
        'empty': 'empty_answer',
        'direct': 'empty_answer',
        'direct_answer': 'empty_answer',
        'no_coordinate': 'empty_answer',
        'null_answer': 'empty_answer',
    }
    radar_config['strategy'] = strategy_aliases.get(strategy, ctx.DEFAULT_CONFIG['radar']['strategy'])
    radar_config['empty_answer_fallback_enabled'] = ctx.coerce_bool(radar_config.get('empty_answer_fallback_enabled', ctx.DEFAULT_CONFIG['radar']['empty_answer_fallback_enabled']), ctx.DEFAULT_CONFIG['radar']['empty_answer_fallback_enabled'])
    radar_config['boundary_points'] = ctx.normalize_radar_boundary_points(radar_config.get('boundary_points', ctx.DEFAULT_CONFIG['radar']['boundary_points']))
    radar_config['allow_outside_probe'] = ctx.coerce_bool(radar_config.get('allow_outside_probe', ctx.DEFAULT_CONFIG['radar']['allow_outside_probe']), ctx.DEFAULT_CONFIG['radar']['allow_outside_probe'])
    radar_config['outside_scale'] = ctx.coerce_positive_float(radar_config.get('outside_scale', ctx.DEFAULT_CONFIG['radar']['outside_scale']), ctx.DEFAULT_CONFIG['radar']['outside_scale'], minimum=1.0)
    radar_config['max_distance_probes'] = min(8, ctx.coerce_positive_int(radar_config.get('max_distance_probes', ctx.DEFAULT_CONFIG['radar']['max_distance_probes']), ctx.DEFAULT_CONFIG['radar']['max_distance_probes'], minimum=3))
    radar_config['max_final_attempts'] = min(200, ctx.coerce_positive_int(radar_config.get('max_final_attempts', ctx.DEFAULT_CONFIG['radar']['max_final_attempts']), ctx.DEFAULT_CONFIG['radar']['max_final_attempts'], minimum=1))
    radar_config.pop('final_precision_min', None)
    radar_config.pop('final_precision_max', None)
    radar_config['final_grid_step_meters'] = ctx.coerce_positive_float(radar_config.get('final_grid_step_meters', ctx.DEFAULT_CONFIG['radar']['final_grid_step_meters']), ctx.DEFAULT_CONFIG['radar']['final_grid_step_meters'], minimum=100.0)
    radar_config['final_grid_radius_meters'] = min(100.0, ctx.coerce_positive_float(radar_config.get('final_grid_radius_meters', ctx.DEFAULT_CONFIG['radar']['final_grid_radius_meters']), ctx.DEFAULT_CONFIG['radar']['final_grid_radius_meters'], minimum=0.0))
    default_global_radar = ctx.DEFAULT_CONFIG['radar']['global']
    global_radar = radar_config.get('global', {})
    if not isinstance(global_radar, dict):
        global_radar = {}
    global_radar['max_queries'] = min(500, ctx.coerce_positive_int(global_radar.get('max_queries', default_global_radar['max_queries']), default_global_radar['max_queries'], minimum=3))
    global_radar['request_retries'] = min(10, ctx.coerce_positive_int(global_radar.get('request_retries', default_global_radar['request_retries']), default_global_radar['request_retries'], minimum=1))
    global_radar['cooldown_seconds'] = min(300.0, ctx.coerce_positive_float(global_radar.get('cooldown_seconds', default_global_radar['cooldown_seconds']), default_global_radar['cooldown_seconds'], minimum=0.1))
    global_radar['max_cooldowns'] = min(20, ctx.coerce_positive_int(global_radar.get('max_cooldowns', default_global_radar['max_cooldowns']), default_global_radar['max_cooldowns'], minimum=0))
    global_radar['transient_failure_threshold'] = ctx.coerce_positive_int(global_radar.get('transient_failure_threshold', default_global_radar['transient_failure_threshold']), default_global_radar['transient_failure_threshold'], minimum=1)
    global_ratio_value = global_radar.get('transient_failure_ratio', default_global_radar['transient_failure_ratio'])
    try:
        global_ratio = float(global_ratio_value)
    except (TypeError, ValueError):
        global_ratio = default_global_radar['transient_failure_ratio']
    global_radar['transient_failure_ratio'] = max(0.0, min(1.0, global_ratio))
    global_radar['anchor_count'] = min(120, ctx.coerce_positive_int(global_radar.get('anchor_count', default_global_radar['anchor_count']), default_global_radar['anchor_count'], minimum=3))
    global_radar['bearing_count'] = min(72, ctx.coerce_positive_int(global_radar.get('bearing_count', default_global_radar['bearing_count']), default_global_radar['bearing_count'], minimum=3))

    def normalize_radii(value: ctx.Any, default_value: ctx.Any) -> ctx.List[float]:
        if isinstance(value, str):
            raw_items = [item.strip() for item in value.split(',')]
        elif isinstance(value, (list, tuple, set)):
            raw_items = list(value)
        else:
            raw_items = list(default_value)
        radii: ctx.List[float] = []
        for item in raw_items:
            try:
                radius = abs(float(item))
            except (TypeError, ValueError):
                return [float(default_radius) for default_radius in default_value]
            if radius > 0.0:
                radii.append(radius)
        return radii or [float(default_radius) for default_radius in default_value]

    global_radar['standard_radii_meters'] = normalize_radii(global_radar.get('standard_radii_meters', global_radar.get('standard_radii', default_global_radar['standard_radii_meters'])), default_global_radar['standard_radii_meters'])
    global_radar['supplement_radii_meters'] = normalize_radii(global_radar.get('supplement_radii_meters', global_radar.get('supplement_radii', default_global_radar['supplement_radii_meters'])), default_global_radar['supplement_radii_meters'])
    global_radar['standard_query_count'] = global_radar['anchor_count'] + len(global_radar['standard_radii_meters']) * global_radar['bearing_count']
    global_radar['supplement_query_count'] = len(global_radar['supplement_radii_meters']) * global_radar['bearing_count']
    global_radar['present_hint_verify_enabled'] = ctx.coerce_bool(global_radar.get('present_hint_verify_enabled', default_global_radar.get('present_hint_verify_enabled', True)), default_global_radar.get('present_hint_verify_enabled', True))
    global_radar['adaptive_estimate_enabled'] = ctx.coerce_bool(global_radar.get('adaptive_estimate_enabled', default_global_radar.get('adaptive_estimate_enabled', True)), default_global_radar.get('adaptive_estimate_enabled', True))
    global_radar['target_uncertainty_95_meters'] = min(1000.0, ctx.coerce_positive_float(global_radar.get('target_uncertainty_95_meters', default_global_radar['target_uncertainty_95_meters']), default_global_radar['target_uncertainty_95_meters'], minimum=1.0))
    global_radar['robust_f_scale_meters'] = min(10000.0, ctx.coerce_positive_float(global_radar.get('robust_f_scale_meters', default_global_radar['robust_f_scale_meters']), default_global_radar['robust_f_scale_meters'], minimum=1.0))
    global_radar['measurement_sigma_meters'] = min(1000.0, ctx.coerce_positive_float(global_radar.get('measurement_sigma_meters', default_global_radar['measurement_sigma_meters']), default_global_radar['measurement_sigma_meters'], minimum=0.01))
    global_radar['max_pattern_iterations'] = min(2000, ctx.coerce_positive_int(global_radar.get('max_pattern_iterations', default_global_radar['max_pattern_iterations']), default_global_radar['max_pattern_iterations'], minimum=20))
    global_radar['max_lm_iterations'] = min(200, ctx.coerce_positive_int(global_radar.get('max_lm_iterations', default_global_radar['max_lm_iterations']), default_global_radar['max_lm_iterations'], minimum=5))
    radar_config['global'] = global_radar
    config['research'] = ctx.normalize_research_mode_config(config.get('research', ctx.DEFAULT_CONFIG['research']))
    operating = config.setdefault('operating', {})
    if not isinstance(operating, dict):
        operating = {}
    normalized_operating = {}
    for day, default_schedule in ctx.DEFAULT_CONFIG['operating'].items():
        raw_schedule = operating.get(day, operating.get(str(day), {}))
        merged = ctx.copy.deepcopy(default_schedule)
        if isinstance(raw_schedule, dict):
            if 'enable' in raw_schedule:
                merged['enable'] = ctx.coerce_bool(raw_schedule['enable'], default_schedule['enable'])
            schedule_value = raw_schedule.get('ranges', raw_schedule.get('range'))
            if 'range' in raw_schedule or 'ranges' in raw_schedule:
                merged['range'] = ctx.normalize_schedule_range(schedule_value, default_schedule['range'])
                merged['ranges'] = ctx.normalize_schedule_ranges(schedule_value, [default_schedule['range']])
            else:
                merged['ranges'] = ctx.normalize_schedule_ranges(merged.get('range'), [default_schedule['range']])
        else:
            merged['ranges'] = ctx.normalize_schedule_ranges(merged.get('range'), [default_schedule['range']])
        normalized_operating[day] = merged
    config['operating'] = normalized_operating
    return config


def _timezone_from_name(name: str) -> ctx.Any:
    normalized = ctx.normalize_text(name)
    fixed_offsets = {
        'UTC': timezone.utc,
        'Etc/UTC': timezone.utc,
        'Asia/Taipei': timezone(timedelta(hours=8), 'Asia/Taipei'),
    }
    if normalized in fixed_offsets:
        return fixed_offsets[normalized]
    try:
        return ZoneInfo(normalized)
    except (ZoneInfoNotFoundError, ValueError):
        return None


def get_config_timezone_name(config: ctx.Any = None) -> str:
    source = config if isinstance(config, dict) else ctx.CONFIG
    time_config = source.get('time', {}) if isinstance(source, dict) else {}
    return ctx.normalize_text(time_config.get('timezone')) or ctx.DEFAULT_CONFIG['time']['timezone']


def get_config_timezone(config: ctx.Any = None) -> ctx.Any:
    name = get_config_timezone_name(config)
    return _timezone_from_name(name) or _timezone_from_name(ctx.DEFAULT_CONFIG['time']['timezone']) or timezone.utc


def current_datetime(config: ctx.Any = None) -> ctx.datetime:
    return ctx.datetime.now(ctx.get_config_timezone(config))

def ensure_config_exists() -> None:
    if not ctx.CONFIG_PATH.exists():
        # First run: write the friendly beginner template verbatim (example values
        # that parse to empty) instead of the bare rendered default, so the file the
        # user first sees in Notepad is the guided one.
        ctx.CONFIG_PATH.parent.mkdir(parents=True, exist_ok=True)
        ctx.CONFIG_PATH.write_text(ctx.DEFAULT_BASIC_CONFIG_TEMPLATE, encoding="utf-8")
    if not ctx.CONFIG_ADVANCED_PATH.exists():
        ctx.write_advanced_config_file({})


def load_config() -> ctx.Dict[str, ctx.Any]:
    ctx.ensure_config_exists()
    advanced = ctx.load_advanced_config()
    with open(ctx.CONFIG_PATH, 'r', encoding='utf-8') as file:
        text = file.read()
    simple = ctx.parse_basic_config_text(text)
    return ctx.normalize_config(ctx.merge_basic_and_advanced_config(simple, advanced))


def make_config_backup_path(now: ctx.Optional[ctx.datetime]=None) -> ctx.Path:
    timestamp = (now or ctx.datetime.now()).strftime('%Y%m%d-%H%M%S')
    return ctx.CONFIG_PATH.with_name('{}-broken-{}{}'.format(ctx.CONFIG_PATH.stem, timestamp, ctx.CONFIG_PATH.suffix))


def migrate_legacy_yaml_config() -> ctx.List[str]:
    """One-time, NON-DESTRUCTIVE import: when a pre-1.3 config.yaml exists but the
    new config.conf is missing or still a blank template, read the old config (and
    config.advanced.yaml) and write the user's real settings into config.conf /
    config.advanced.toml. It deliberately never moves, renames, or deletes any file
    — bootstrap_config runs in tests and CLI commands against the real working dir,
    so destructive side-effects here would mutate the repo (including the tracked
    config.advanced.yaml) and the developer's own files. Best-effort; never raises.
    Returns human-readable notices for the bootstrap warning channel."""
    notices: ctx.List[str] = []
    legacy_path = ctx.BASE_DIR / "config.yaml"
    legacy_advanced_path = ctx.BASE_DIR / "config.advanced.yaml"
    if not legacy_path.exists():
        return notices
    # If config.conf already holds a real account, the user has already moved to the
    # new format — stay completely silent and touch nothing (idempotent).
    if ctx.CONFIG_PATH.exists():
        try:
            existing = ctx.parse_basic_config_text(ctx.CONFIG_PATH.read_text(encoding='utf-8'))
            if any(
                ctx.has_real_credential(account.get('user'))
                for account in existing.get('accounts', [])
                if isinstance(account, dict)
            ):
                return notices
        except Exception:
            pass
    try:
        legacy_simple = ctx.parse_legacy_basic_config_text(legacy_path.read_text(encoding='utf-8'))
        legacy_advanced: ctx.Dict[str, ctx.Any] = {}
        if legacy_advanced_path.exists():
            try:
                loaded = ctx.yaml.safe_load(legacy_advanced_path.read_text(encoding='utf-8')) or {}
                if isinstance(loaded, dict):
                    legacy_advanced = loaded
            except Exception:
                legacy_advanced = {}
        merged = ctx.normalize_config(ctx.merge_basic_and_advanced_config(legacy_simple, legacy_advanced))
        simple, advanced = ctx.split_normalized_config(merged)
        ctx.CONFIG_PATH.parent.mkdir(parents=True, exist_ok=True)
        ctx.CONFIG_PATH.write_text(ctx.render_basic_config(simple), encoding='utf-8')
        ctx.write_advanced_config_file(advanced)
        notices.append(
            '已將舊版 config.yaml 的設定匯入新版 config.conf。日後請改編輯 config.conf；'
            '確認無誤後可自行刪除舊的 config.yaml。'
        )
    except Exception as exc:
        notices.append('偵測到舊版 config.yaml，但自動匯入失敗，已保留原檔未動：{}'.format(exc))
    return notices


def bootstrap_config(force: bool=False) -> ctx.Dict[str, ctx.Any]:
    if ctx.CONFIG_BOOTSTRAPPED and (not force):
        return ctx.CONFIG
    warnings: ctx.List[str] = []
    warnings.extend(ctx.migrate_legacy_yaml_config())
    config = ctx.copy.deepcopy(ctx.DEFAULT_CONFIG)
    try:
        config = ctx.load_config()
    except Exception:
        backup_path = None
        if ctx.CONFIG_PATH.exists():
            try:
                backup_path = ctx.CONFIG_PATH.replace(ctx.make_config_backup_path())
            except OSError as backup_exc:
                warnings.append('config.conf 讀取失敗，且無法備份原始檔案: {}'.format(backup_exc))
        try:
            ctx.write_config_file(ctx.copy.deepcopy(ctx.DEFAULT_CONFIG))
            if backup_path is not None:
                warnings.append('config.conf 已損毀，已備份為 {}，並重建為預設設定。'.format(backup_path.name))
            else:
                warnings.append('config.conf 已損毀，已重建為預設設定。')
        except OSError as write_exc:
            warnings.append('config.conf 已損毀，且無法重建設定檔；本次將使用內建預設設定。{}'.format(' ({})'.format(write_exc)))
    except OSError as exc:
        warnings.append('無法讀取或建立 config.conf，將使用內建預設設定；本次無法保存設定。 ({})'.format(exc))
    if not config.get('config', {}).get('verify_ssl', True):
        warnings.append('警告: 已停用 TLS 憑證驗證 (`config.verify_ssl=false`)。')
    ctx.CONFIG.clear()
    ctx.CONFIG.update(ctx.normalize_config(config))
    ctx.BOOTSTRAP_WARNINGS = warnings
    ctx.CONFIG_BOOTSTRAPPED = True
    return ctx.CONFIG


def consume_bootstrap_warnings() -> ctx.List[str]:
    warnings = list(ctx.BOOTSTRAP_WARNINGS)
    ctx.BOOTSTRAP_WARNINGS.clear()
    return warnings


def save_config() -> bool:
    try:
        normalized = ctx.normalize_config(ctx.copy.deepcopy(ctx.CONFIG))
        simple, advanced = ctx.split_normalized_config(normalized)
        ctx.CONFIG_PATH.parent.mkdir(parents=True, exist_ok=True)
        ctx.CONFIG_PATH.write_text(ctx.render_basic_config(simple), encoding='utf-8')
        ctx.write_advanced_config_file(advanced)
    except OSError:
        return False
    return True

def get_schedule_for_day(weekday: int) -> ctx.Dict[str, ctx.Any]:
    schedule = ctx.CONFIG['operating'].get(weekday)
    if isinstance(schedule, dict):
        return schedule
    return ctx.copy.deepcopy(ctx.DEFAULT_CONFIG['operating'][weekday])


def get_poll_interval() -> float:
    try:
        interval = float(ctx.CONFIG['config'].get('Senkaku', 1))
    except (TypeError, ValueError):
        return 1.0
    return max(interval, 0.1)


def get_ignore_attendance_rate_gate(override: ctx.Optional[bool]=None) -> bool:
    if override is not None:
        return bool(override)
    try:
        monitor_config = ctx.CONFIG.get('monitor', {}) if isinstance(ctx.CONFIG, dict) else {}
        if not isinstance(monitor_config, dict):
            monitor_config = {}
        default_value = ctx.DEFAULT_CONFIG['monitor']['ignore_attendance_rate_gate']
        return ctx.coerce_bool(monitor_config.get('ignore_attendance_rate_gate', default_value), default_value)
    except Exception:
        return False


def get_retry_limit() -> int:
    try:
        retries = int(ctx.CONFIG['config'].get('retries', 20))
    except (TypeError, ValueError):
        return 20
    return max(retries, 1)


def get_number_config() -> ctx.Dict[str, ctx.Any]:
    return ctx.normalize_config(ctx.copy.deepcopy(ctx.CONFIG)).get('number', ctx.DEFAULT_CONFIG['number'])


def get_radar_config() -> ctx.Dict[str, ctx.Any]:
    return ctx.normalize_config(ctx.copy.deepcopy(ctx.CONFIG)).get('radar', ctx.DEFAULT_CONFIG['radar'])

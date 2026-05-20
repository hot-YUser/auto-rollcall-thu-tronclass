from __future__ import annotations

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


def _deep_merge_config(base: ctx.Dict[str, ctx.Any], overlay: ctx.Mapping[str, ctx.Any]) -> ctx.Dict[str, ctx.Any]:
    for key, value in dict(overlay or {}).items():
        if isinstance(value, dict) and isinstance(base.get(key), dict):
            _deep_merge_config(base[key], value)
        else:
            base[key] = ctx.copy.deepcopy(value)
    return base


def load_advanced_config() -> ctx.Dict[str, ctx.Any]:
    if not ctx.CONFIG_ADVANCED_PATH.exists():
        return {}
    try:
        with open(ctx.CONFIG_ADVANCED_PATH, 'r', encoding='utf-8') as file:
            value = ctx.yaml.safe_load(file) or {}
    except OSError:
        return {}
    except (*ctx.YAML_ERROR_TYPES, ValueError):
        return {}
    return value if isinstance(value, dict) else {}


def write_advanced_config_file(config: ctx.Mapping[str, ctx.Any]) -> None:
    ctx.CONFIG_ADVANCED_PATH.parent.mkdir(parents=True, exist_ok=True)
    with open(ctx.CONFIG_ADVANCED_PATH, 'w', encoding='utf-8') as file:
        ctx.yaml.safe_dump(dict(config or {}), file, allow_unicode=True, sort_keys=False)


def write_config_file(config: ctx.Dict[str, ctx.Any]) -> None:
    ctx.CONFIG_PATH.parent.mkdir(parents=True, exist_ok=True)
    with open(ctx.CONFIG_PATH, 'w', encoding='utf-8') as file:
        is_simple_shape = isinstance(config, dict) and (
            "now" in config
            or isinstance(config.get("accounts"), list)
            or isinstance(config.get("groups"), list)
        )
        if is_simple_shape:
            file.write(ctx.render_simple_config(config))
            return
        simple, advanced = ctx.split_normalized_config(ctx.normalize_config(ctx.copy.deepcopy(config)))
        file.write(ctx.render_simple_config(simple))
    ctx.write_advanced_config_file(advanced)


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
    accounts = ctx.normalize_accounts_config(config)
    active_profile = ctx.get_active_profile(config)
    if not ctx.has_real_credential(account.get('user')) and ctx.has_real_credential(active_profile.user):
        account['user'] = active_profile.user
    if not ctx.has_real_credential(account.get('passwd')) and ctx.has_real_credential(active_profile.passwd):
        account['passwd'] = active_profile.passwd
    config['provider'] = ctx.normalize_provider_config(config.get('provider', ctx.DEFAULT_CONFIG['provider']))
    session_config = config.setdefault('session', {})
    if not isinstance(session_config, dict):
        session_config = {}
        config['session'] = session_config
    session_config['cache_cookies'] = ctx.coerce_bool(session_config.get('cache_cookies', ctx.DEFAULT_CONFIG['session']['cache_cookies']), ctx.DEFAULT_CONFIG['session']['cache_cookies'])
    ux_config = config.setdefault('ux', {})
    if not isinstance(ux_config, dict):
        ux_config = {}
        config['ux'] = ux_config
    ux_config['pending_qr_ttl_seconds'] = ctx.coerce_positive_int(ux_config.get('pending_qr_ttl_seconds', ctx.DEFAULT_CONFIG['ux']['pending_qr_ttl_seconds']), ctx.DEFAULT_CONFIG['ux']['pending_qr_ttl_seconds'], minimum=30)
    ux_config['debug_bundle_log_limit'] = ctx.coerce_positive_int(ux_config.get('debug_bundle_log_limit', ctx.DEFAULT_CONFIG['ux']['debug_bundle_log_limit']), ctx.DEFAULT_CONFIG['ux']['debug_bundle_log_limit'], minimum=1)
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
    radar_config = config.setdefault('radar', {})
    if not isinstance(radar_config, dict):
        radar_config = {}
        config['radar'] = radar_config
    radar_config['boundary_points'] = ctx.normalize_radar_boundary_points(radar_config.get('boundary_points', ctx.DEFAULT_CONFIG['radar']['boundary_points']))
    radar_config['allow_outside_probe'] = ctx.coerce_bool(radar_config.get('allow_outside_probe', ctx.DEFAULT_CONFIG['radar']['allow_outside_probe']), ctx.DEFAULT_CONFIG['radar']['allow_outside_probe'])
    radar_config['outside_scale'] = ctx.coerce_positive_float(radar_config.get('outside_scale', ctx.DEFAULT_CONFIG['radar']['outside_scale']), ctx.DEFAULT_CONFIG['radar']['outside_scale'], minimum=1.0)
    radar_config['max_distance_probes'] = min(8, ctx.coerce_positive_int(radar_config.get('max_distance_probes', ctx.DEFAULT_CONFIG['radar']['max_distance_probes']), ctx.DEFAULT_CONFIG['radar']['max_distance_probes'], minimum=3))
    radar_config['max_final_attempts'] = min(200, ctx.coerce_positive_int(radar_config.get('max_final_attempts', ctx.DEFAULT_CONFIG['radar']['max_final_attempts']), ctx.DEFAULT_CONFIG['radar']['max_final_attempts'], minimum=1))
    min_precision = min(14, ctx.coerce_positive_int(radar_config.get('final_precision_min', ctx.DEFAULT_CONFIG['radar']['final_precision_min']), ctx.DEFAULT_CONFIG['radar']['final_precision_min'], minimum=0))
    max_precision = min(14, ctx.coerce_positive_int(radar_config.get('final_precision_max', ctx.DEFAULT_CONFIG['radar']['final_precision_max']), ctx.DEFAULT_CONFIG['radar']['final_precision_max'], minimum=0))
    if min_precision > max_precision:
        min_precision, max_precision = (max_precision, min_precision)
    radar_config['final_precision_min'] = min_precision
    radar_config['final_precision_max'] = max_precision
    radar_config['final_grid_step_meters'] = min(50.0, ctx.coerce_positive_float(radar_config.get('final_grid_step_meters', ctx.DEFAULT_CONFIG['radar']['final_grid_step_meters']), ctx.DEFAULT_CONFIG['radar']['final_grid_step_meters'], minimum=0.5))
    radar_config['final_grid_radius_meters'] = min(100.0, ctx.coerce_positive_float(radar_config.get('final_grid_radius_meters', ctx.DEFAULT_CONFIG['radar']['final_grid_radius_meters']), ctx.DEFAULT_CONFIG['radar']['final_grid_radius_meters'], minimum=0.0))
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
            if 'range' in raw_schedule:
                merged['range'] = ctx.normalize_schedule_range(raw_schedule.get('range'), default_schedule['range'])
        normalized_operating[day] = merged
    config['operating'] = normalized_operating
    return config


def ensure_config_exists() -> None:
    if not ctx.CONFIG_PATH.exists():
        ctx.write_config_file(ctx.copy.deepcopy(ctx.DEFAULT_CONFIG))
    if not ctx.CONFIG_ADVANCED_PATH.exists():
        ctx.write_advanced_config_file({})


def load_config() -> ctx.Dict[str, ctx.Any]:
    ctx.ensure_config_exists()
    advanced = ctx.load_advanced_config()
    with open(ctx.CONFIG_PATH, 'r', encoding='utf-8') as file:
        text = file.read()
    if ctx.is_simple_config_text(text):
        simple = ctx.parse_simple_config_text(text)
        return ctx.normalize_config(ctx.merge_simple_and_advanced_config(simple, advanced))
    loaded = ctx.yaml.safe_load(text) or {}
    if not isinstance(loaded, dict):
        loaded = {}
    return ctx.normalize_config(_deep_merge_config(ctx.copy.deepcopy(advanced), loaded))


def make_config_backup_path(now: ctx.Optional[ctx.datetime]=None) -> ctx.Path:
    timestamp = (now or ctx.datetime.now()).strftime('%Y%m%d-%H%M%S')
    return ctx.CONFIG_PATH.with_name('{}-broken-{}{}'.format(ctx.CONFIG_PATH.stem, timestamp, ctx.CONFIG_PATH.suffix))


def bootstrap_config(force: bool=False) -> ctx.Dict[str, ctx.Any]:
    if ctx.CONFIG_BOOTSTRAPPED and (not force):
        return ctx.CONFIG
    warnings: ctx.List[str] = []
    config = ctx.copy.deepcopy(ctx.DEFAULT_CONFIG)
    try:
        config = ctx.load_config()
    except (*ctx.YAML_ERROR_TYPES, ValueError) as exc:
        backup_path = None
        if ctx.CONFIG_PATH.exists():
            try:
                backup_path = ctx.CONFIG_PATH.replace(ctx.make_config_backup_path())
            except OSError as backup_exc:
                warnings.append('config.yaml 讀取失敗，且無法備份原始檔案: {}'.format(backup_exc))
        try:
            ctx.write_config_file(ctx.copy.deepcopy(ctx.DEFAULT_CONFIG))
            if backup_path is not None:
                warnings.append('config.yaml 已損毀，已備份為 {}，並重建為預設設定。'.format(backup_path.name))
            else:
                warnings.append('config.yaml 已損毀，已重建為預設設定。')
        except OSError as write_exc:
            warnings.append('config.yaml 已損毀，且無法重建設定檔；本次將使用內建預設設定。{}'.format(' ({})'.format(write_exc)))
    except OSError as exc:
        warnings.append('無法讀取或建立 config.yaml，將使用內建預設設定；本次無法保存設定。 ({})'.format(exc))
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
        ctx.CONFIG_PATH.write_text(ctx.render_simple_config(simple), encoding='utf-8')
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


def get_retry_limit() -> int:
    try:
        retries = int(ctx.CONFIG['config'].get('retries', 20))
    except (TypeError, ValueError):
        return 20
    return max(retries, 1)


def get_number_config() -> ctx.Dict[str, ctx.Any]:
    return ctx.normalize_config(ctx.copy.deepcopy(ctx.CONFIG)).get('number', ctx.DEFAULT_CONFIG['number'])

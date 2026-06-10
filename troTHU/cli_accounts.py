from __future__ import annotations

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore


def __getattr__(name: str):
    return getattr(ctx, name)



def config_summary() -> ctx.Dict[str, ctx.Any]:
    profiles = []
    for profile in ctx.list_profiles(ctx.CONFIG):
        profiles.append({'name': profile.name, 'user_configured': ctx.has_real_credential(profile.user), 'label': profile.label, 'credential': ctx.credential_report(profile.name), 'cookie': ctx.cookie_report(profile.name), 'runtime': ctx.account_runtime_summary(profile.name)})
    return {'provider': ctx.provider_report(), 'active_profile': ctx.get_active_profile(ctx.CONFIG).name, 'profiles': profiles, 'session': {'cache_cookies': ctx.cookie_cache_enabled(ctx.CONFIG)}, 'notifications': ctx.notification_report(), 'integrations': ctx.integration_report(), 'research': ctx.research_report(), 'runtime_state': ctx.account_runtime_summary(ctx.get_active_profile(ctx.CONFIG).name), 'config': {'enable_log': ctx.CONFIG.get('config', {}).get('enable_log'), 'verify_ssl': ctx.get_verify_ssl(), 'http_timeout': ctx.get_http_timeout_seconds(), 'notification_timeout': ctx.get_notification_timeout_seconds()}}


def account_show(profile_name: str='', json_output: bool=False) -> int:
    profile = ctx.find_profile(profile_name)
    if profile is None:
        print('Profile not found: {}'.format(profile_name))
        return 1
    report = {'profile': profile.name, 'user': profile.user if ctx.has_real_credential(profile.user) else '', 'label': profile.label, 'credential': ctx.credential_report(profile.name), 'cookie': ctx.cookie_report(profile.name), 'runtime': ctx.account_runtime_summary(profile.name)}
    if json_output:
        print(ctx.json_text(report))
        return 0
    print('Profile: {}'.format(profile.name))
    print('User: {}'.format(report['user'] or '(not set)'))
    print('Label: {}'.format(profile.label or '-'))
    print('Credential source: {}'.format(report['credential'].get('effective_source', 'missing')))
    print('Cookie: {} ({})'.format(report['cookie']['path'], report['cookie']['age']))
    print('Runtime: bot={} monitor={}'.format(report['runtime'].get('bot_state', 'stopped'), report['runtime'].get('monitor_state', 'unknown')))
    return 0


def account_state(profile_name: str='', json_output: bool=False) -> int:
    report = ctx.account_state_report(profile_name)
    if not report.get('exists'):
        if json_output:
            print(ctx.json_text(report))
        else:
            print('Profile not found: {}'.format(profile_name))
        return 1
    if json_output:
        print(ctx.json_text(report))
        return 0
    runtime = report.get('runtime', {})
    last_login = runtime.get('last_login') or {}
    last_check = runtime.get('last_check') or {}
    print('Profile: {}'.format(report['profile']))
    print('Bot state: {}'.format(runtime.get('bot_state', 'stopped')))
    print('Monitor state: {}{}'.format(runtime.get('monitor_state', 'unknown'), ' (stale)' if runtime.get('heartbeat_stale') else ''))
    print('Last login: {}'.format(last_login.get('status') or '-'))
    print('Last check: {}'.format(last_check.get('status') or '-'))
    print('Pending QR: {}'.format(report.get('pending_qr_count', 0)))
    print('Bindings: {}'.format(report.get('binding_count', 0)))
    return 0


def account_doctor(profile_name: str='', json_output: bool=False) -> int:
    profile = ctx.find_profile(profile_name)
    if profile is None:
        print('Profile not found: {}'.format(profile_name))
        return 1
    credential = ctx.credential_report(profile.name)
    cookie = ctx.cookie_report(profile.name)
    checks = [ctx.check_item('profile exists', True, profile.name), ctx.check_item('user', bool(credential.get('user_configured')), 'student id configured', severity='fail'), ctx.check_item('credential', credential.get('effective_source') != 'missing', 'effective source: {}'.format(credential.get('effective_source')), severity='warn'), ctx.check_item('keyring', ctx.keyring_available(), 'optional password store', severity='warn'), ctx.check_item('cookie file', not cookie['exists'] or bool(cookie['valid']), '{} age {}'.format(cookie['path'], cookie['age']), severity='warn')]
    report = {'profile': profile.name, 'checks': checks, 'credential': credential, 'cookie': cookie}
    if json_output:
        print(ctx.json_text(report))
        return 0 if all((item['status'] != 'fail' for item in checks)) else 1
    print(ctx.render_check_items(checks))
    return 0 if all((item['status'] != 'fail' for item in checks)) else 1


def bind_account(adapter: str, external_user_id: str, profile_name: str, channel_id: str='') -> int:
    profile = ctx.find_profile(profile_name)
    if profile is None:
        print('Profile not found: {}'.format(profile_name))
        return 1
    integrations = ctx.CONFIG.setdefault('integrations', {})
    bindings = integrations.setdefault('bindings', {})
    key = ctx.binding_key(adapter, external_user_id)
    bindings[key] = ctx.AdapterBinding(adapter, external_user_id, profile.name, channel_id).to_dict()
    ctx.save_config()
    print('Bound {} user {} to profile {}.'.format(adapter, external_user_id, profile.name))
    return 0


def unbind_account(adapter: str, external_user_id: str) -> int:
    integrations = ctx.CONFIG.setdefault('integrations', {})
    bindings = integrations.setdefault('bindings', {})
    key = ctx.binding_key(adapter, external_user_id)
    if key not in bindings:
        print('Binding not found: {}'.format(key))
        return 1
    del bindings[key]
    ctx.save_config()
    print('Removed binding: {}'.format(key))
    return 0


def handle_account_command(args: ctx.argparse.Namespace) -> int:
    if args.account_command in (None, 'list'):
        active = ctx.get_active_profile(ctx.CONFIG)
        if getattr(args, 'json', False):
            print(ctx.json_text({'active_profile': active.name, 'active_target': ctx.summarize_group_target(ctx.CONFIG), 'profiles': [{'name': profile.name, 'user': profile.user if ctx.has_real_credential(profile.user) else '', 'label': profile.label, 'credential': ctx.credential_report(profile.name), 'cookie': ctx.cookie_report(profile.name), 'runtime': ctx.account_runtime_summary(profile.name)} for profile in ctx.list_profiles(ctx.CONFIG)]}))
            return 0
        print(ctx.describe_group_target(ctx.CONFIG))
        for profile in ctx.list_profiles(ctx.CONFIG):
            marker = '*' if profile.name == active.name else ' '
            password_state = 'config-password' if ctx.has_real_credential(profile.passwd) else 'no-config-password'
            if ctx.get_keyring_password(profile.name, profile.user):
                password_state = 'keyring'
            runtime = ctx.account_runtime_summary(profile.name)
            print('{} {} user={} {} bot={} monitor={}'.format(marker, profile.name, profile.user or '-', password_state, runtime.get('bot_state', 'stopped'), runtime.get('monitor_state', 'unknown')))
        return 0
    if args.account_command == 'show':
        return ctx.account_show(args.name, args.json)
    if args.account_command == 'state':
        return ctx.account_state(args.name, args.json)
    if args.account_command == 'doctor':
        return ctx.account_doctor(args.name, args.json)
    if args.account_command == 'add':
        profile_name = ctx.sanitize_input_field(args.name, field_type='profile', field_name='profile').value
        user = ctx.sanitize_input_field(args.user, field_type='student_id', field_name='student id').value or ctx.sanitize_input_field(input('Student ID > '), field_type='student_id', field_name='student id').value
        password = ctx.sanitize_input_field(args.password, field_type='password', field_name='password').value
        if args.store not in {'none', 'env'} and (not password):
            password = ctx.sanitize_input_field(ctx.getpass.getpass('Password > '), field_type='password', field_name='password').value
        profile_password = password if args.store == 'config' else ''
        label = ctx.sanitize_input_field(args.label, field_type='text', field_name='label').value
        profile = ctx.set_profile(ctx.CONFIG, profile_name, user, profile_password, label=label, make_current=not args.no_switch)
        if args.store == 'keyring' and password:
            if ctx.set_keyring_password(profile.name, user, password):
                print('Password saved to keyring.')
            else:
                print('Keyring unavailable; password was not saved.')
        if args.store == 'env':
            print('Password was not saved. Set TRON_USER and TRON_PASS before running the monitor.')
        if ctx.save_config():
            print('Profile saved: {}'.format(profile.name))
            return 0
        print('Failed to save config.conf.')
        return 1
    if args.account_command == 'switch':
        try:
            profile_name = ctx.sanitize_input_field(args.name, field_type='profile', field_name='profile').value
            profile = ctx.switch_profile(ctx.CONFIG, profile_name)
        except KeyError:
            print('Profile not found: {}'.format(args.name))
            return 1
        ctx.save_config()
        print('Switched to profile: {}'.format(profile.name))
        return 0
    if args.account_command == 'remove':
        active_name = ctx.normalize_profile_name(ctx.sanitize_input_field(args.name, field_type='profile', field_name='profile').value)
        removed = ctx.remove_profile(ctx.CONFIG, active_name)
        if not removed:
            print('Profile not removed; it may not exist or it is the only profile.')
            return 1
        ctx.clear_session_cookies(ctx.BASE_DIR, active_name)
        ctx.save_config()
        print('Removed profile: {}'.format(active_name))
        return 0
    if args.account_command == 'bind':
        return ctx.bind_account(args.adapter, args.external_user_id, args.profile, args.channel)
    if args.account_command == 'unbind':
        return ctx.unbind_account(args.adapter, args.external_user_id)
    return 1

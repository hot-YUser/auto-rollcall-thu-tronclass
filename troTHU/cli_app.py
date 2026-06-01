from __future__ import annotations

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore


def __getattr__(name: str):
    return getattr(ctx, name)



def app_blueprint_command(json_output: bool=False) -> int:
    blueprint = ctx.build_app_blueprint(ctx.CONFIG)
    warnings = ctx.validate_app_blueprint(blueprint)
    if json_output:
        output = ctx.copy.deepcopy(blueprint)
        output['validation'] = {'ok': not warnings, 'warnings': warnings}
        print(ctx.json_text(output))
        return 0 if not warnings else 1
    print('\n'.join(ctx.format_app_blueprint_summary(blueprint)))
    return 0 if not warnings else 1


def _app_shell_snapshot() -> ctx.Dict[str, ctx.Any]:
    account_states = [ctx.account_state_report(profile.name) for profile in ctx.list_profiles(ctx.CONFIG)]
    return ctx.build_observability_snapshot(ctx.status_report(), log_summary=ctx.summarize_logs(ctx.PATH), recent_logs=ctx.tail_log_records(ctx.PATH, 20), account_states=account_states)


def _app_shell_accounts() -> ctx.Dict[str, ctx.Any]:
    profiles = [ctx.account_state_report(profile.name) for profile in ctx.list_profiles(ctx.CONFIG)]
    return {'profiles': profiles, 'total_count': len(profiles), 'active_profile': ctx.get_active_profile(ctx.CONFIG).name}


def _app_shell_logs_summary() -> ctx.Dict[str, ctx.Any]:
    recent = ctx.tail_log_records(ctx.PATH, 20)
    summary = ctx.summarize_logs(ctx.PATH)
    output = dict(summary)
    output['recent_events'] = ctx.classify_recent_events(recent, limit=20)
    return output


def _app_shell_integrations() -> ctx.Dict[str, ctx.Any]:
    report = ctx.integration_report()
    return {'status': 'ok', 'bindings': report.get('binding_count', 0), 'adapter_counts': report.get('adapter_counts', {}), 'admins': report.get('admins', {}), 'security': report.get('security', {})}


def _app_shell_release_check() -> ctx.Dict[str, ctx.Any]:
    return ctx.build_release_checklist(ctx.BASE_DIR, config=ctx.CONFIG)


def _app_shell_release_plan() -> ctx.Dict[str, ctx.Any]:
    return ctx.build_release_build_plan(ctx.BASE_DIR)


def _app_shell_polish_reports() -> ctx.Dict[str, ctx.Any]:
    return {'snapshot': ctx._app_shell_snapshot(), 'accounts': ctx._app_shell_accounts(), 'logs_summary': ctx._app_shell_logs_summary(), 'doctor_report': ctx.doctor_report(), 'release_check': ctx._app_shell_release_check(), 'release_plan': ctx._app_shell_release_plan(), 'shell_policy': {'read_only': True, 'preview_only': True}}


def _app_shell_ui_model() -> ctx.Dict[str, ctx.Any]:
    return ctx.build_shell_ui_model(ctx.CONFIG, base_dir=ctx.BASE_DIR, reports=ctx._app_shell_polish_reports())


def _app_shell_drilldown(panel: str) -> ctx.Dict[str, ctx.Any]:
    return ctx.build_shell_drilldown(panel, config=ctx.CONFIG, base_dir=ctx.BASE_DIR, reports=ctx._app_shell_polish_reports())


async def app_serve_command(args: ctx.argparse.Namespace) -> int:
    host = ctx.normalize_text(getattr(args, 'host', '')) or '127.0.0.1'
    port = ctx.coerce_positive_int(getattr(args, 'port', 8790), 8790)
    ttl = ctx.coerce_positive_int(getattr(args, 'ttl_seconds', 900), 900)
    metadata = {'status': 'starting', 'host': host, 'port': port, 'url': 'http://{}:{}/app'.format(host, port), 'token_ttl_seconds': ttl, 'read_only': True, 'preview_only': True}
    if getattr(args, 'json', False):
        print(ctx.json_text(metadata))
    else:
        print('Starting local companion shell at {}'.format(metadata['url']))
        print('Read-only / preview-only. Mutating actions stay in CLI, Bot, or scanner flows.')
    await ctx.run_app_shell(ctx.CONFIG, host=host, port=port, open_browser=bool(getattr(args, 'open', False)), token_ttl_seconds=ttl, snapshot_builder=ctx._app_shell_snapshot, accounts_builder=ctx._app_shell_accounts, log_summary_builder=ctx._app_shell_logs_summary, diagnostics_builder=ctx.doctor_report, integrations_builder=ctx._app_shell_integrations, qr_previewer=ctx.build_qr_preview, webview_previewer=lambda records: ctx.build_webview_cookie_preview(records, config=ctx.CONFIG, provider=ctx.provider_report(), profile=ctx.get_active_profile(ctx.CONFIG).name), radar_assist_builder=lambda: ctx.build_radar_map_assist(ctx.CONFIG, provider=ctx.provider_report()), release_check_builder=ctx._app_shell_release_check, release_plan_builder=ctx._app_shell_release_plan, shell_ui_builder=ctx._app_shell_ui_model, shell_drilldown_builder=ctx._app_shell_drilldown, action_catalog_builder=lambda: ctx.build_shell_action_catalog(ctx.CONFIG))
    return 0


def _read_webview_cookie_input(path_value: str) -> str:
    path = ctx.Path(path_value or '')
    if not path.exists() or not path.is_file():
        raise ctx.WebViewSyncError('input_not_found')
    try:
        return path.read_text(encoding='utf-8')
    except OSError as exc:
        raise ctx.WebViewSyncError('input_unreadable', str(exc)) from exc


def _resolve_webview_profile(name: str='') -> str:
    if not ctx.normalize_text(name):
        return ctx.get_active_profile(ctx.CONFIG).name
    profile_name = ctx.normalize_profile_name(name)
    if profile_name not in {profile.name for profile in ctx.list_profiles(ctx.CONFIG)}:
        raise ctx.WebViewSyncError('profile_not_found')
    return profile_name


def webview_status_command(json_output: bool=False) -> int:
    report = ctx.build_webview_sync_status(ctx.CONFIG, provider=ctx.provider_report())
    if json_output:
        print(ctx.json_text(report))
        return 0
    print('WebView sync: {}'.format(report.get('status', 'unknown')))
    print('Provider: {}'.format(report.get('provider', '-')))
    print('Enabled: {}'.format('yes' if report.get('enabled') else 'no'))
    print('Cookie import: {}'.format('yes' if report.get('allow_cookie_import') else 'no'))
    print('Can import now: {}'.format('yes' if report.get('can_import') else 'no'))
    if report.get('warnings'):
        print('Warnings: {}'.format(', '.join(report['warnings'])))
    return 0


def webview_preview_command(args: ctx.argparse.Namespace) -> int:
    try:
        raw = ctx._read_webview_cookie_input(getattr(args, 'input', ''))
        records = ctx.parse_webview_cookie_export(raw)
        profile_name = ctx._resolve_webview_profile(getattr(args, 'profile', ''))
        report = ctx.build_webview_cookie_preview(records, config=ctx.CONFIG, provider=ctx.provider_report(), profile=profile_name)
    except ctx.WebViewSyncError as exc:
        report = {'status': 'failed', 'reason': exc.reason, 'message': str(exc)}
        if getattr(args, 'json', False):
            print(ctx.json_text(report))
        else:
            print('WebView preview failed: {}'.format(exc.reason))
        return 1
    if getattr(args, 'json', False):
        print(ctx.json_text(report))
    else:
        print('WebView preview: accepted={} rejected={} has_session={}'.format(report.get('accepted_count', 0), report.get('rejected_count', 0), 'yes' if report.get('has_session') else 'no'))
        if report.get('warnings'):
            print('Warnings: {}'.format(', '.join(report['warnings'])))
    return 0


def webview_import_command(args: ctx.argparse.Namespace) -> int:
    try:
        raw = ctx._read_webview_cookie_input(getattr(args, 'input', ''))
        records = ctx.parse_webview_cookie_export(raw)
        profile_name = ctx._resolve_webview_profile(getattr(args, 'profile', ''))
        report = ctx.import_webview_cookies(ctx.BASE_DIR, profile_name, records, config=ctx.CONFIG, provider=ctx.provider_report(), save=bool(getattr(args, 'save', False)))
    except ctx.WebViewSyncError as exc:
        report = {'status': 'failed', 'reason': exc.reason, 'message': str(exc)}
        if getattr(args, 'json', False):
            print(ctx.json_text(report))
        else:
            print('WebView import failed: {}'.format(exc.reason))
        return 1
    if getattr(args, 'json', False):
        print(ctx.json_text(report))
    else:
        print('WebView import: status={} accepted={} saved={}'.format(report.get('status', 'unknown'), report.get('accepted_count', 0), 'yes' if report.get('saved') else 'no'))
        if report.get('warnings'):
            print('Warnings: {}'.format(', '.join(report['warnings'])))
    return 0

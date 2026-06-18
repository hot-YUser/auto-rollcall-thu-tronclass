from __future__ import annotations

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore


def __getattr__(name: str):
    return getattr(ctx, name)



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

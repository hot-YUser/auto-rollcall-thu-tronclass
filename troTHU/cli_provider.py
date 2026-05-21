from __future__ import annotations

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore


def __getattr__(name: str):
    return getattr(ctx, name)



def provider_summary(provider: ctx.Any='') -> ctx.Dict[str, ctx.Any]:
    definition = provider if hasattr(provider, 'to_config') else ctx.get_provider(provider)
    config = definition.to_config()
    return ctx.provider_support_report(config, allow_experimental=False)


def provider_list_command(json_output: bool=False, include_hidden: bool=False) -> int:
    providers = [
        ctx.provider_summary(provider)
        for provider in ctx.list_supported_providers(include_hidden=include_hidden)
    ]
    payload = {
        'current': ctx.get_active_provider_key(),
        'allow_experimental': ctx.coerce_bool(ctx.normalize_provider_config(ctx.CONFIG.get('provider', ctx.DEFAULT_CONFIG['provider'])).get('allow_experimental'), False),
        'include_hidden': bool(include_hidden),
        'providers': providers,
    }
    if json_output:
        print(ctx.json_text(payload))
        return 0
    for item in providers:
        marker = '*' if item['key'] == payload['current'] else ' '
        print('{} {} support={} daily_ready={}'.format(marker, item['key'], item['support_level'], 'yes' if item['daily_ready'] else 'no'))
    return 0


def provider_show_command(name: str='', json_output: bool=False) -> int:
    key = ctx.normalize_text(name) or ctx.get_active_provider_key()
    definition = ctx.get_provider(key)
    report = definition.to_config()
    provider_config = ctx.normalize_provider_config(ctx.CONFIG.get('provider', ctx.DEFAULT_CONFIG['provider']))
    active_override = provider_config.get('available', {}).get(definition.key, {})
    if isinstance(active_override, dict):
        report.update(active_override)
    report['support'] = ctx.provider_support_report(report, allow_experimental=ctx.coerce_bool(provider_config.get('allow_experimental'), False))
    report['allow_experimental'] = ctx.coerce_bool(provider_config.get('allow_experimental'), False)
    report['verification'] = ctx.summarize_provider_verification(report)
    report['ready_gate'] = ctx.build_provider_ready_gate(report, config=ctx.CONFIG)
    report['fixture_review'] = ctx.build_provider_fixture_review(report, config=ctx.CONFIG)
    report['internal'] = {
        'verification': report['verification'],
        'ready_gate': report['ready_gate'],
        'fixture_review': report['fixture_review'],
        'user_runtime_blocking': False,
    }
    if json_output:
        print(ctx.json_text(report))
        return 0
    print('Provider: {} ({})'.format(report.get('key'), report.get('label')))
    print('Support: {}'.format(report['support'].get('support_level')))
    print('Daily ready: {}'.format('yes' if report['support'].get('daily_ready') else 'no'))
    print('Ready gate: {}'.format(report['ready_gate'].get('status', 'unknown')))
    print('Fixture review: {}'.format(report['fixture_review'].get('status', 'unknown')))
    print('Base URL: {}'.format(report.get('base_url') or '-'))
    print('Auth flow: {}'.format(report.get('auth_flow') or '-'))
    print('Notes: {}'.format(report.get('notes') or '-'))
    return 0


def _read_json_input(path_value: str) -> ctx.Any:
    path = ctx.Path(path_value or '')
    if not path.exists() or not path.is_file():
        raise ValueError('input_not_found')
    try:
        return ctx.json.loads(path.read_text(encoding='utf-8'))
    except OSError as exc:
        raise ValueError('input_unreadable') from exc
    except ValueError as exc:
        raise ValueError('invalid_json') from exc


def provider_verify_checklist_command(args: ctx.argparse.Namespace) -> int:
    name = ctx.normalize_text(getattr(args, 'name', '')) or ctx.get_active_provider_key()
    report = ctx.build_provider_verification_checklist(ctx.get_provider(name), config=ctx.CONFIG)
    if getattr(args, 'json', False):
        print(ctx.json_text(report))
    else:
        print('Provider verification checklist: {} ({})'.format(report.get('provider'), report.get('support_level')))
        for step in report.get('steps', []):
            print(' - {id}: {title}'.format(**step))
    return 0


def provider_fixture_template_command(args: ctx.argparse.Namespace) -> int:
    name = ctx.normalize_text(getattr(args, 'name', '')) or ctx.get_active_provider_key()
    report = ctx.build_provider_fixture_template(ctx.get_provider(name))
    if getattr(args, 'json', False):
        print(ctx.json_text(report))
    else:
        print('Provider fixture template: {}'.format(report.get('provider')))
        print('Records: {}'.format(len(report.get('records') or [])))
    return 0


def provider_fixture_validate_command(args: ctx.argparse.Namespace) -> int:
    try:
        value = ctx._read_json_input(getattr(args, 'input', ''))
        report = ctx.validate_provider_fixture(value, provider=ctx.normalize_text(getattr(args, 'provider', '')))
    except ValueError as exc:
        report = {'ok': False, 'status': 'fixture_invalid', 'reason': str(exc), 'errors': [str(exc)]}
    if getattr(args, 'json', False):
        print(ctx.json_text(report))
    else:
        print('Provider fixture: {}'.format(report.get('status', 'fixture_invalid')))
        for error in report.get('errors', []) or []:
            print(' - {}'.format(error))
    return 0 if report.get('ok') else 1


def provider_fixture_review_template_command(args: ctx.argparse.Namespace) -> int:
    name = ctx.normalize_text(getattr(args, 'name', '')) or ctx.get_active_provider_key()
    report = ctx.build_provider_fixture_review_template(ctx.get_provider(name))
    if getattr(args, 'json', False):
        print(ctx.json_text(report))
    else:
        print('Provider fixture review template: {}'.format(report.get('provider')))
        print('Records: {}'.format(len(report.get('records') or [])))
    return 0


def provider_fixture_review_command(args: ctx.argparse.Namespace) -> int:
    provider_name = ctx.normalize_text(getattr(args, 'provider', '')) or ctx.get_active_provider_key()
    input_path = ctx.normalize_text(getattr(args, 'input', ''))
    report = ctx.review_provider_fixture_file(input_path, provider=provider_name)
    if getattr(args, 'json', False):
        print(ctx.json_text(report))
    else:
        print('\n'.join(ctx.format_provider_fixture_review(report)))
    return 0 if report.get('status') in {'candidate_ready_for_human_review', 'not_required'} else 1


def provider_fixture_review_dir_command(args: ctx.argparse.Namespace) -> int:
    report = ctx.review_provider_fixture_dir(ctx.Path(ctx.normalize_text(getattr(args, 'dir', '')) or '.'))
    if getattr(args, 'json', False):
        print(ctx.json_text(report))
    else:
        print('Provider fixture review dir: {} ({} files)'.format(report.get('status'), report.get('count', 0)))
        for item in report.get('reports', []) or []:
            print(' - {}: {}'.format(item.get('path', ''), item.get('status', '')))
    return 0 if report.get('status') in {'ok', 'empty'} else 1


def provider_ready_gate_command(args: ctx.argparse.Namespace) -> int:
    name = ctx.normalize_text(getattr(args, 'name', '')) or ctx.get_active_provider_key()
    fixture = None
    fixture_path = ctx.normalize_text(getattr(args, 'fixture', ''))
    if fixture_path:
        try:
            fixture = ctx._read_json_input(fixture_path)
        except ValueError as exc:
            report = {'version': 'provider-ready-gate-v1', 'provider': name, 'status': 'blocked', 'ready_candidate': False, 'promotes_provider': False, 'blockers': [str(exc)], 'warnings': []}
            if getattr(args, 'json', False):
                print(ctx.json_text(report))
            else:
                print('\n'.join(ctx.format_provider_ready_gate(report)))
            return 1
    report = ctx.build_provider_ready_gate(ctx.get_provider(name), fixture=fixture, config=ctx.CONFIG)
    if getattr(args, 'json', False):
        print(ctx.json_text(report))
    else:
        print('\n'.join(ctx.format_provider_ready_gate(report)))
    return 0 if report.get('status') in {'candidate_ready', 'not_required'} else 1

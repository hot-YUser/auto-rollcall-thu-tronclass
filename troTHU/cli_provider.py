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
    if json_output:
        print(ctx.json_text(report))
        return 0
    print('Provider: {} ({})'.format(report.get('key'), report.get('label')))
    print('Support: {}'.format(report['support'].get('support_level')))
    print('Daily ready: {}'.format('yes' if report['support'].get('daily_ready') else 'no'))
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

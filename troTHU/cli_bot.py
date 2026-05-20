from __future__ import annotations

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore


def __getattr__(name: str):
    return getattr(ctx, name)



async def bot_serve_command(args: ctx.argparse.Namespace) -> int:
    try:
        from troTHU.adapter_server import run_adapter_server
        from troTHU.bot_handlers import create_bot_runtime
        from troTHU.discord_adapter import create_discord_notification_sink
        from troTHU.line_adapter import create_line_notification_sink
        from troTHU.telegram_adapter import create_telegram_notification_sink
    except ImportError:
        from adapter_server import run_adapter_server
        from bot_handlers import create_bot_runtime
        from discord_adapter import create_discord_notification_sink
        from line_adapter import create_line_notification_sink
        from telegram_adapter import create_telegram_notification_sink
    host = args.host or '127.0.0.1'
    port = int(args.port)
    adapter = args.adapter or 'all'
    runtime = create_bot_runtime(ctx.CONFIG, base_dir=ctx.BASE_DIR)
    line_sink = create_line_notification_sink(ctx.CONFIG) if adapter in {'all', 'line'} else None
    discord_sink = create_discord_notification_sink(ctx.CONFIG) if adapter in {'all', 'discord'} else None
    telegram_sink = create_telegram_notification_sink(ctx.CONFIG) if adapter == 'all' else None
    new_sinks = [sink for sink in (line_sink, discord_sink, telegram_sink) if sink is not None]
    original_sinks = list(ctx.NOTIFICATION_SINKS)
    if new_sinks:
        ctx.set_notification_sinks(original_sinks + new_sinks)
    if getattr(args, 'json', False):
        print(ctx.json_text({'host': host, 'port': port, 'adapter': adapter}))
    else:
        print('Bot adapter server listening on http://{}:{} ({})'.format(host, port, adapter))
    try:
        await run_adapter_server(ctx.CONFIG, runtime, host=host, port=port, adapter=adapter)
    finally:
        if new_sinks:
            ctx.set_notification_sinks(original_sinks)
    return 0


def bot_discord_schema_command(args: ctx.argparse.Namespace) -> int:
    try:
        from troTHU.discord_adapter import build_discord_command_schema
    except ImportError:
        from discord_adapter import build_discord_command_schema
    schema = build_discord_command_schema()
    print(ctx.json_text(schema))
    return 0


async def bot_discord_sync_command(args: ctx.argparse.Namespace) -> int:
    report = await ctx.sync_discord_command_schema(ctx.CONFIG, dry_run=not bool(getattr(args, 'apply', False)), apply=bool(getattr(args, 'apply', False)))
    if getattr(args, 'json', False):
        print(ctx.json_text(report))
    else:
        print('Discord command sync: {}'.format(report.get('status', 'unknown')))
        print('Dry run: {}'.format('yes' if report.get('dry_run') else 'no'))
    return 0 if report.get('status') in {'dry_run', 'ok'} else 1


async def bot_discord_gateway_command(args: ctx.argparse.Namespace) -> int:
    if getattr(args, 'dry_run', False):
        report = ctx.build_gateway_health(ctx.CONFIG)
        if getattr(args, 'json', False):
            print(ctx.json_text(report))
        else:
            print('Discord Gateway optional: {}'.format(report.get('status', 'unknown')))
            print('HTTP Interactions recommended: yes')
        return 0
    try:
        from troTHU.bot_handlers import create_bot_runtime
    except ImportError:
        from bot_handlers import create_bot_runtime
    runtime = create_bot_runtime(ctx.CONFIG, base_dir=ctx.BASE_DIR)
    if getattr(args, 'json', False):
        print(ctx.json_text({'status': 'starting', 'gateway_optional': True}))
    else:
        print('Starting optional Discord Gateway. HTTP Interactions remains the recommended production entry.')
    await ctx.run_discord_gateway(ctx.CONFIG, runtime)
    return 0

from __future__ import annotations

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore


def __getattr__(name: str):
    return getattr(ctx, name)



def main(argv: ctx.Optional[ctx.List[str]]=None) -> int:
    argv = list(ctx.sys.argv[1:] if argv is None else argv)
    if not argv:
        return ctx.run_monitor_forever(no_input=False)
    parser = ctx.build_arg_parser()
    args, unknown_args = parser.parse_known_args(argv)
    if unknown_args:
        if args.command == 'qr':
            args.qr_args = list(args.qr_args or []) + unknown_args
        else:
            parser.error('unrecognized arguments: {}'.format(' '.join(unknown_args)))
    if args.command in (None, 'run'):
        ignore_gate = True if bool(getattr(args, 'ignore_attendance_rate_gate', False)) else None
        return ctx.run_monitor_forever(
            no_input=bool(getattr(args, 'no_input', False)),
            ignore_attendance_rate_gate=ignore_gate,
        )
    ctx.bootstrap_config()
    if args.command == 'init':
        return ctx.init_command(args)
    if args.command == 'account':
        return ctx.handle_account_command(args)
    if args.command == 'logs':
        return ctx.logs_command(args)
    if args.command == 'bot':
        if getattr(args, 'bot_command', None) == 'serve':
            try:
                return ctx.asyncio.run(ctx.bot_serve_command(args))
            except Exception as exc:
                print('Bot adapter server failed: {}'.format(exc))
                return 1
        if getattr(args, 'bot_command', None) == 'discord-schema':
            return ctx.bot_discord_schema_command(args)
        if getattr(args, 'bot_command', None) == 'discord-sync':
            try:
                return ctx.asyncio.run(ctx.bot_discord_sync_command(args))
            except Exception as exc:
                if getattr(args, 'json', False):
                    print(ctx.json_text({'status': 'failed', 'message': str(exc)}))
                else:
                    print('Discord command sync failed: {}'.format(exc))
                return 1
        if getattr(args, 'bot_command', None) == 'discord-gateway':
            try:
                return ctx.asyncio.run(ctx.bot_discord_gateway_command(args))
            except Exception as exc:
                if getattr(args, 'json', False):
                    print(ctx.json_text({'status': 'failed', 'message': str(exc)}))
                else:
                    print('Discord Gateway failed: {}'.format(exc))
                return 1
        parser.print_help()
        return 1
    if args.command == 'dashboard':
        return ctx.dashboard_command(args)
    if args.command == 'refresh':
        active = ctx.get_active_profile(ctx.CONFIG)
        removed = ctx.clear_session_cookies(ctx.BASE_DIR, active.name)
        print('Deleted cookie cache for {}.'.format(active.name) if removed else 'No cookie cache found for {}.'.format(active.name))
        return 0
    if args.command == 'status':
        ctx.print_status(json_output=args.json)
        return 0
    if args.command == 'doctor':
        return ctx.doctor(
            json_output=args.json,
            probe_url=getattr(args, 'probe_url', ''),
            probe_count=getattr(args, 'probe_count', 3),
            probe_concurrency=getattr(args, 'probe_concurrency', 1),
        )
    if args.command == 'config':
        command = getattr(args, 'config_command', None) or 'show'
        if command == 'show':
            return ctx.config_show_command(json_output=getattr(args, 'json', False))
        if command == 'compact':
            return ctx.config_compact_command(args)
        if command == 'doctor':
            return ctx.config_doctor_command(json_output=getattr(args, 'json', False))
        if command == 'advanced':
            return ctx.config_advanced_command(json_output=getattr(args, 'json', False))
        parser.print_help()
        return 1
    if args.command == 'package-check':
        return ctx.package_check(json_output=args.json)
    if args.command == 'release-check':
        return ctx.release_check_command(args)
    if args.command == 'release-build':
        return ctx.release_build_command(args)
    if args.command == 'provider':
        provider_command = getattr(args, 'provider_command', None) or 'list'
        if provider_command == 'list':
            return ctx.provider_list_command(
                json_output=getattr(args, 'json', False),
                include_hidden=getattr(args, 'all', False),
            )
        if provider_command == 'show':
            return ctx.provider_show_command(getattr(args, 'name', ''), json_output=getattr(args, 'json', False))
        parser.print_help()
        return 1
    if args.command == 'app':
        if getattr(args, 'app_command', None) == 'blueprint':
            return ctx.app_blueprint_command(json_output=args.json)
        if getattr(args, 'app_command', None) == 'serve':
            try:
                return ctx.asyncio.run(ctx.app_serve_command(args))
            except Exception as exc:
                print('App shell failed: {}'.format(exc))
                return 1
        parser.print_help()
        return 1
    if args.command == 'webview':
        webview_command = getattr(args, 'webview_command', None) or 'status'
        if webview_command == 'status':
            return ctx.webview_status_command(json_output=getattr(args, 'json', False))
        if webview_command == 'preview':
            return ctx.webview_preview_command(args)
        if webview_command == 'import':
            return ctx.webview_import_command(args)
        parser.print_help()
        return 1
    if args.command == 'courses':
        try:
            return ctx.asyncio.run(ctx.courses_command(json_output=args.json))
        except Exception as exc:
            if args.json:
                print(ctx.json_text({'status': 'unexpected_response', 'message': str(exc)}))
            else:
                print('Course discovery failed: {}'.format(exc))
            return 1
    if args.command == 'teacher':
        try:
            return ctx.asyncio.run(ctx.teacher_command(args))
        except Exception as exc:
            if getattr(args, 'json', False):
                print(ctx.json_text({'status': 'unexpected_response', 'message': str(exc)}))
            else:
                print('Teacher command failed: {}'.format(exc))
            return 1
    if args.command == 'qr':
        qr_args = list(args.qr_args or [])
        qr_action = qr_args[0].lower() if qr_args else ''
        image_path = ctx.normalize_text(getattr(args, 'image', ''))
        if qr_action == 'pending':
            return ctx.print_pending_qr(json_output=args.json)
        if qr_action == 'image' or (image_path and qr_action in {'', 'paste'}):
            path = image_path or (' '.join(qr_args[1:]).strip() if qr_action == 'image' else '')
            if not path:
                print('QR image path is required.')
                return 1
            try:
                return ctx.asyncio.run(ctx.qr_image_command(path, assume_yes=args.yes, json_output=args.json, fanout_all=args.fanout_all))
            except Exception as exc:
                print('QR image failed: {}'.format(exc))
                return 1
        if qr_action == 'paste':
            payload = ' '.join(qr_args[1:]).strip()
            try:
                return ctx.asyncio.run(ctx.qr_paste_command(payload, assume_yes=args.yes, json_output=args.json, fanout_all=args.fanout_all))
            except Exception as exc:
                print('QR paste failed: {}'.format(exc))
                return 1
        if qr_action == 'scan':
            host = args.host or ctx.CONFIG.get('local_ui', {}).get('host', '127.0.0.1')
            port = int(args.port or ctx.CONFIG.get('local_ui', {}).get('port', 8765))
            try:
                ctx.asyncio.run(ctx.run_scanner_server(host=host, port=port, previewer=ctx.build_qr_preview, submitter=ctx.qr_scanner_submit, open_browser=args.open))
                return 0
            except KeyboardInterrupt:
                print('Local QR scanner stopped.')
                return 0
            except Exception as exc:
                print('Local QR scanner failed: {}'.format(exc))
                return 1
        payload = ctx.sanitize_input_field(' '.join(qr_args), field_type='qr_payload', field_name='qr payload').value or ctx.sanitize_input_field(input('Paste QR URL or payload > '), field_type='qr_payload', field_name='qr payload').value
        try:
            return ctx.asyncio.run(ctx.qr_fanout_command(payload) if args.fanout_all else ctx.qr_command(payload))
        except Exception as exc:
            print('QR submit failed: {}'.format(exc))
            return 1
    if args.command == 'debug-capture':
        try:
            return ctx.asyncio.run(ctx.debug_capture_command(args.output))
        except Exception as exc:
            print('Debug capture failed: {}'.format(exc))
            return 1
    if args.command == 'research':
        research_command = getattr(args, 'research_command', None) or 'status'
        if research_command == 'status':
            return ctx.research_status_command(json_output=getattr(args, 'json', False))
        if research_command == 'api':
            try:
                return ctx.asyncio.run(ctx.research_api_command(args))
            except Exception as exc:
                if getattr(args, 'json', False):
                    print(ctx.json_text({'status': 'failed', 'message': str(exc)}))
                else:
                    print('Research API capture failed: {}'.format(exc))
                return 1
        if research_command == 'probe':
            try:
                return ctx.asyncio.run(ctx.research_probe_command(args))
            except Exception as exc:
                if getattr(args, 'json', False):
                    print(ctx.json_text({'status': 'failed', 'message': str(exc)}))
                else:
                    print('Research probe failed: {}'.format(exc))
                return 1
        if research_command == 'browser-check':
            return ctx.research_browser_check_command(json_output=getattr(args, 'json', False))
        if research_command == 'browser-capture':
            try:
                return ctx.asyncio.run(ctx.research_browser_capture_command(args))
            except Exception as exc:
                if getattr(args, 'json', False):
                    print(ctx.json_text({'status': 'failed', 'message': str(exc)}))
                else:
                    print('Research browser capture failed: {}'.format(exc))
                return 1
        parser.print_help()
        return 1
    parser.print_help()
    return 1

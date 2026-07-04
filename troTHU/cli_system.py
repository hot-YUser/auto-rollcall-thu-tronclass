from __future__ import annotations

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore


def __getattr__(name: str):
    return getattr(ctx, name)



def package_check(json_output: bool=False) -> int:
    report = ctx.build_package_diagnostic_report(ctx.BASE_DIR, config=ctx.CONFIG)
    report['release'] = ctx.build_release_checklist(ctx.BASE_DIR, config=ctx.CONFIG)
    if json_output:
        print(ctx.json_text(report))
        return 0 if report.get('status') != 'fail' else 1
    print('Package diagnostics: {}'.format(report.get('status', 'unknown')))
    print(ctx.render_check_items(report.get('checks', [])))
    return 0 if report.get('status') != 'fail' else 1


def release_check_command(args: ctx.argparse.Namespace) -> int:
    dist_arg = ctx.normalize_text(getattr(args, 'dist', ''))
    dist_dir = ctx.Path(dist_arg) if dist_arg else None
    report = ctx.build_release_checklist(ctx.BASE_DIR, config=ctx.CONFIG, dist_dir=dist_dir)
    if getattr(args, 'plan', False):
        report = {'status': report.get('status', 'unknown'), 'release': report, 'build_plan': ctx.build_release_build_plan(ctx.BASE_DIR, dist_dir=dist_dir)}
    if getattr(args, 'json', False):
        print(ctx.json_text(report))
        return 0 if report.get('status') != 'fail' else 1
    if getattr(args, 'plan', False):
        print('\n'.join(ctx.format_release_checklist(report.get('release', {}))))
        for command in report.get('build_plan', {}).get('commands', []):
            print(' - {}'.format(command))
    else:
        print('\n'.join(ctx.format_release_checklist(report)))
    return 0 if report.get('status') != 'fail' else 1


def release_build_command(args: ctx.argparse.Namespace) -> int:
    dist_arg = ctx.normalize_text(getattr(args, 'dist', ''))
    work_arg = ctx.normalize_text(getattr(args, 'work', ''))
    dist_dir = ctx.Path(dist_arg) if dist_arg else None
    work_dir = ctx.Path(work_arg) if work_arg else None
    execute = bool(getattr(args, 'execute', False))
    report = ctx.run_release_build_pipeline(ctx.BASE_DIR, config=ctx.CONFIG, execute=execute, dist_dir=dist_dir, work_dir=work_dir)
    if getattr(args, 'json', False):
        print(ctx.json_text(report))
    else:
        print('\n'.join(ctx.format_release_build_summary(report)))
    return 0 if report.get('status') in {'ok', 'dry_run', 'warn'} else 1


def logs_command(args: ctx.argparse.Namespace) -> int:
    command = args.logs_command or 'tail'
    json_mode = bool(getattr(args, 'json', False))
    if command == 'tail':
        records = ctx.tail_log_records(ctx.PATH, getattr(args, 'limit', 20))
        if json_mode:
            print(ctx.json_text({'records': records}))
        else:
            for record in records:
                print(ctx.json.dumps(record, ensure_ascii=False, default=str))
        return 0
    if command in {'summarize', 'summary'}:
        limit = max(1, int(getattr(args, 'limit', 20) or 20))
        summary = ctx.summarize_logs(ctx.PATH)
        recent_logs = ctx.tail_log_records(ctx.PATH, limit)
        if json_mode:
            payload = dict(summary)
            payload['recent_events'] = ctx.classify_recent_events(recent_logs, limit=limit)
            print(ctx.json_text(payload))
        else:
            print('\n'.join(ctx.format_log_summary(summary, recent_logs)))
        return 0
    if command == 'export':
        timestamp = ctx.datetime.now().strftime('%Y%m%d-%H%M%S')
        output_arg = getattr(args, 'output', '')
        output = ctx.Path(output_arg) if output_arg else ctx.BASE_DIR / 'state' / 'debug-bundle' / f'tron-debug-{timestamp}.zip'
        limit = getattr(args, 'limit', 0) or ctx.CONFIG.get('ux', {}).get('debug_bundle_log_limit', 50)
        path = ctx.export_debug_bundle(output, config_summary=ctx.config_summary(), doctor_report=ctx.doctor_report(), log_summary=ctx.summarize_logs(ctx.PATH), recent_logs=ctx.tail_log_records(ctx.PATH, limit), debug_capture_path=ctx.BASE_DIR / 'state' / 'debug-capture' / 'rollcalls.jsonl')
        print('Debug bundle written: {}'.format(path))
        return 0
    return 1


def init_command(args: ctx.argparse.Namespace) -> int:
    raw_profile = args.profile or ('' if args.yes else input('Profile name [default] > '))
    profile_result = ctx.sanitize_input_field(raw_profile or 'default', field_type='profile', field_name='profile')
    profile_name = ctx.normalize_profile_name(profile_result.value or 'default')
    user = ctx.sanitize_input_field(args.user, field_type='student_id', field_name='student id').value
    if not user and (not args.yes):
        user = ctx.sanitize_input_field(input('Student ID > '), field_type='student_id', field_name='student id').value
    password_result = ctx.sanitize_input_field(args.password, field_type='password', field_name='password')
    password = password_result.value
    store = args.store
    if store in {'keyring', 'config'} and (not password) and (not args.yes):
        password = ctx.sanitize_input_field(ctx.getpass.getpass('Password > '), field_type='password', field_name='password').value
    label = ctx.sanitize_input_field(args.label, field_type='text', field_name='label').value
    telegram_token = ctx.sanitize_input_field(args.telegram_token, field_type='token', field_name='telegram token').value
    telegram_chat = ctx.sanitize_input_field(args.telegram_chat, field_type='channel_id', field_name='telegram chat').value
    discord_token = ctx.sanitize_input_field(args.discord_token, field_type='token', field_name='discord token').value
    discord_chat = ctx.sanitize_input_field(args.discord_chat, field_type='channel_id', field_name='discord channel').value
    if not args.yes and (not (telegram_token or telegram_chat)):
        if input('Enable Telegram notifications? [y/N] ').strip().lower() in {'y', 'yes'}:
            telegram_token = ctx.sanitize_input_field(ctx.getpass.getpass('Telegram bot token > '), field_type='token', field_name='telegram token').value
            telegram_chat = ctx.sanitize_input_field(input('Telegram chat id > '), field_type='channel_id', field_name='telegram chat').value
    if not args.yes and (not (discord_token or discord_chat)):
        if input('Enable Discord notifications? [y/N] ').strip().lower() in {'y', 'yes'}:
            discord_token = ctx.sanitize_input_field(ctx.getpass.getpass('Discord bot token > '), field_type='token', field_name='discord token').value
            discord_chat = ctx.sanitize_input_field(input('Discord channel id > '), field_type='channel_id', field_name='discord channel').value
    planned = {'profile': profile_name, 'user_configured': ctx.has_real_credential(user), 'store': store, 'label': label, 'telegram_configured': bool(telegram_token and telegram_chat), 'discord_configured': bool(discord_token and discord_chat), 'test_login': bool(args.test_login), 'dry_run': bool(args.dry_run)}
    if args.dry_run:
        print(ctx.json_text(planned) if args.json else 'Init dry-run: {}'.format(planned))
        return 0
    profile_password = password if store == 'config' else ''
    ctx.set_profile(ctx.CONFIG, profile_name, user, profile_password, label=label, make_current=True)
    if store == 'keyring' and password:
        if ctx.set_keyring_password(profile_name, user, password):
            print('Password saved to keyring.')
        else:
            print('Keyring unavailable; password was not saved.')
    if store == 'env':
        print('Password was not saved. Set TRON_USER and TRON_PASS before running the monitor.')
    if store == 'none':
        print('Password was not saved. You will be prompted at runtime.')
    notifications = ctx.CONFIG.setdefault('notifications', {})
    if telegram_token and telegram_chat:
        notifications.setdefault('tg', {})['enable'] = True
        notifications['tg']['key'] = telegram_token
        notifications['tg']['chat'] = telegram_chat
    if discord_token and discord_chat:
        notifications.setdefault('dc', {})['enable'] = True
        notifications['dc']['key'] = discord_token
        notifications['dc']['chat'] = discord_chat
    if not ctx.save_config():
        print('Failed to save config.conf.')
        return 1
    print('Init saved profile: {}'.format(profile_name))
    if args.test_login:
        if password:
            ctx.set_runtime_credentials(user, password)
        try:
            return ctx.asyncio.run(ctx.login_test_command())
        finally:
            ctx.clear_runtime_credentials()
    return 0


def config_show_command(json_output: bool=False) -> int:
    summary = ctx.config_view_summary(ctx.CONFIG)
    if json_output:
        print(ctx.json_text(summary))
        return 0
    print("設定摘要")
    print("目前 profile: {}".format(summary.get("active_profile", "default")))
    print("Provider: {}".format(summary.get("provider", "thu")))
    print("常用區塊: {}".format(", ".join(summary.get("compact_keys", [])) or "-"))
    print("進階覆寫: {}".format(", ".join(summary.get("advanced_keys", [])) or "無"))
    return 0


def config_compact_command(args: ctx.argparse.Namespace) -> int:
    write = bool(getattr(args, 'write', False))
    if not write:
        text = ctx.render_compact_config(ctx.CONFIG)
        if getattr(args, 'json', False):
            print(ctx.json_text({"status": "dry_run", "text": text, "summary": ctx.config_view_summary(ctx.CONFIG)}))
        else:
            print(text)
        return 0
    try:
        report = ctx.write_compact_config(ctx.CONFIG_PATH, ctx.CONFIG, backup_existing=True)
    except OSError as exc:
        if getattr(args, 'json', False):
            print(ctx.json_text({"status": "failed", "message": str(exc)}))
        else:
            print("寫入 config.conf 失敗: {}".format(exc))
        return 1
    if getattr(args, 'json', False):
        print(ctx.json_text(report))
    else:
        print("config.conf 已整理成精簡格式。")
        if report.get("backup_path"):
            print("原檔備份: {}".format(report["backup_path"]))
    return 0


def config_advanced_command(json_output: bool=False) -> int:
    ctx.ensure_config_exists()
    result = ctx.open_config_in_legacy_notepad(ctx.CONFIG_ADVANCED_PATH, wait=True)
    if json_output:
        print(ctx.json_text(result))
    else:
        if result.get("ok"):
            print("已用舊版記事本開啟 config.advanced.toml。")
        else:
            print("無法開啟舊版記事本: {}".format(result.get("reason", "unknown")))
    return 0 if result.get("ok") else 1


def config_doctor_command(json_output: bool=False) -> int:
    report = ctx.config_doctor_report(ctx.CONFIG)
    if json_output:
        print(ctx.json_text(report))
        return 0 if report.get("status") != "fail" else 1
    print("\n".join(ctx.format_config_doctor(report)))
    return 0 if report.get("status") != "fail" else 1


def dashboard_command(args: ctx.argparse.Namespace) -> int:
    interval = max(1.0, float(args.interval or 2.0))
    while True:
        snapshot = ctx.build_observability_snapshot(ctx.status_report(), log_summary=ctx.summarize_logs(ctx.PATH), recent_logs=ctx.tail_log_records(ctx.PATH, 20))
        if getattr(args, 'json', False):
            print(ctx.json_text(snapshot))
            return 0
        lines = ctx.format_dashboard_snapshot(snapshot)
        output = '\n'.join(lines)
        if args.once:
            print(output)
            return 0
        print('\x1b[2J\x1b[H' + output)
        ctx.time.sleep(interval)

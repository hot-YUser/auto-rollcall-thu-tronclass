from __future__ import annotations

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore


def __getattr__(name: str):
    return getattr(ctx, name)


def _write_console_line(text: str) -> None:
    line = str(text or "").strip()
    if not line:
        return
    ctx.sys.stdout.write(line + '\n')
    ctx.sys.stdout.flush()


def flush_console_output() -> None:
    ctx.sys.stdout.flush()


def log_print(msg: ctx.Any) -> None:
    text = str(msg).strip()
    if not text:
        return
    _write_console_line(text)


def status_print(msg: ctx.Any) -> None:
    ctx.LAST_STATUS = str(msg).strip()
    if not ctx.LAST_STATUS:
        return
    _write_console_line('[監控] {}'.format(ctx.LAST_STATUS))


def daily_log_path(today: ctx.Optional[ctx.datetime]=None) -> ctx.Path:
    today = today or ctx.datetime.now()
    return ctx.PATH / str(today.year) / str(today.month) / '{}.jsonl'.format(today.day)


def number_log_path(rcid: int) -> ctx.Path:
    return ctx.PATH / 'num' / '{}.jsonl'.format(rcid)


def log(*, event: str, path: ctx.Optional[ctx.Path]=None, counter: int=-1, status: str='', url: str='', http_status: ctx.Any=None, rollcall_id: ctx.Any=None, rollcall_type: str='', message: str='', payload_excerpt: ctx.Any=None, error: ctx.Any=None, extra: ctx.Optional[ctx.Dict[str, ctx.Any]]=None) -> bool:
    if not ctx.CONFIG['config']['enable_log']:
        return False
    try:
        data = {'timestamp': ctx.datetime.now().isoformat(timespec='seconds'), 'event': event, 'counter': counter, 'status': status, 'url': url, 'http_status': http_status, 'rollcall_id': rollcall_id, 'rollcall_type': rollcall_type, 'message': message, 'payload_excerpt': ctx.make_payload_excerpt(payload_excerpt), 'error': ctx.normalize_text(error) or None}
        if extra:
            data.update(extra)
        path = path or ctx.daily_log_path()
        path.parent.mkdir(parents=True, exist_ok=True)
        with open(path, 'a', encoding='utf-8') as file:
            file.write(ctx.json.dumps(data, ensure_ascii=False, default=str))
            file.write('\n')
    except OSError as exc:
        print(exc)
        return False
    return True


async def _send_notification(request: ctx.NotificationRequest) -> int:
    return await ctx.send_notification_request(request, request_ssl=ctx.get_ssl_request_setting(), timeout=ctx.create_notification_timeout(), request_func=ctx.aiohttp.request)


def build_notification_requests(text: str, highlight_block: str='') -> ctx.List[ctx.NotificationRequest]:

    def log_skip(channel: str, message: str) -> None:
        ctx.log(event='notification_delivery', status='skipped', message=message, extra={'channel': channel})
    return ctx.build_notification_requests_from_config(ctx.CONFIG, text, highlight_block=highlight_block, skip_logger=log_skip)


async def mes(text: str='test message', highlight_block: str='') -> None:
    requests = ctx.build_notification_requests(text, highlight_block)
    if not requests:
        return
    results = await ctx.asyncio.gather(*[ctx._send_notification(request) for request in requests], return_exceptions=True)
    for request, result in zip(requests, results):
        if isinstance(result, BaseException):
            ctx.log(event='notification_delivery', status='failed', message='{} 通知送出失敗。'.format(request.label), error=result, extra={'channel': request.channel, 'url': request.url})
            ctx.log_print('{} 通知送出失敗: {}'.format(request.label, result))
        else:
            ctx.log(event='notification_delivery', status='success', http_status=result, message='{} 通知已送出。'.format(request.label), extra={'channel': request.channel, 'url': request.url})


async def notify_event(event: ctx.NotificationEvent, highlight_block: str='') -> None:
    profile = ''
    if isinstance(event.data, dict):
        profile = ctx.normalize_text(event.data.get('profile'))
    if not profile:
        try:
            profile = ctx.get_active_profile(ctx.CONFIG).name
        except Exception:
            profile = ''
    summary = await ctx.dispatch_notification_event(event, config=ctx.CONFIG, sinks=ctx.NOTIFICATION_SINKS, profile=profile)
    if summary.failures:
        ctx.log(event='notification_bus_delivery', status='failed', message='Adapter notification sink failed.', payload_excerpt=summary.to_dict())
    await ctx.mes(event.render(), highlight_block=highlight_block)


def set_notification_sinks(sinks: ctx.List[ctx.Any]) -> None:
    ctx.NOTIFICATION_SINKS.clear()
    ctx.NOTIFICATION_SINKS.extend(sinks or [])


def build_fatal_error_report(exc: BaseException, restart_count: int) -> ctx.Tuple[str, str, str]:
    formatted_traceback = ctx.traceback.format_exc()
    frames = ctx.traceback.extract_tb(exc.__traceback__)
    location = ''
    if frames:
        last_frame = frames[-1]
        location = '{}:{}:{}'.format(ctx.Path(last_frame.filename).name, last_frame.lineno, last_frame.name)
    fingerprint_source = '{}|{}|{}'.format(exc.__class__.__name__, ctx.normalize_text(exc), location)
    fingerprint = ctx.hashlib.sha1(fingerprint_source.encode('utf-8')).hexdigest()[:12]
    summary = 'fatal error on {}, restart #{}, fingerprint={}'.format(ctx.cnt, restart_count, fingerprint)
    return (summary, formatted_traceback, fingerprint)


def report_fatal_exception(exc: BaseException, restart_count: int) -> None:
    summary, formatted_traceback, fingerprint = ctx.build_fatal_error_report(exc, restart_count)
    text = '{}\n{}\n{}'.format(summary, ctx.normalize_text(exc), formatted_traceback.rstrip())
    ctx.log(event='fatal_error', status='restarting', message=summary, error=exc, extra={'restart_count': restart_count, 'fingerprint': fingerprint, 'traceback': formatted_traceback})
    ctx.log_print(text)
    now = ctx.time.monotonic()
    if now - ctx.LAST_FATAL_NOTIFICATION_AT < ctx.FATAL_NOTIFICATION_INTERVAL:
        return
    ctx.LAST_FATAL_NOTIFICATION_AT = now
    try:
        ctx.asyncio.run(ctx.mes('{}\n{}'.format(summary, ctx.normalize_text(exc))))
    except Exception:
        return

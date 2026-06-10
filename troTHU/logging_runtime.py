from __future__ import annotations

import contextlib
import shutil

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore


def __getattr__(name: str):
    return getattr(ctx, name)


# ---------------------------------------------------------------------------
# Console output model
# ---------------------------------------------------------------------------
# Two output channels share stdout:
#   * Event lines  -> scroll upward, permanent (login, rollcall hits, errors).
#   * Status line  -> a single line redrawn in place once per second, showing
#                     the live clock plus monitor/standby context.
# Interactive (TTY) consoles get the in-place status line and timestamped event
# lines. Non-interactive runs (CI, output redirected to a file, --no-input
# schedulers) fall back to the original plain, append-only line behaviour so
# logs stay clean and byte-stable.


def console_is_interactive() -> bool:
    """Whether stdout is an interactive terminal that supports in-place redraw.

    ``ctx.CONSOLE_INTERACTIVE`` acts as an explicit override (set it to a bool in
    tests); when it is ``None`` the result is probed fresh from ``isatty()`` so a
    redirected stream is never treated as interactive.
    """
    override = ctx.CONSOLE_INTERACTIVE
    if override is not None:
        return bool(override)
    try:
        return bool(ctx.sys.stdout.isatty())
    except Exception:
        return False


def _terminal_width() -> int:
    try:
        return max(20, int(shutil.get_terminal_size((80, 24)).columns))
    except Exception:
        return 80


def _write_console_line(text: str) -> None:
    line = str(text or "").strip()
    if not line:
        return
    ctx.sys.stdout.write(line + '\n')
    ctx.sys.stdout.flush()


def flush_console_output() -> None:
    ctx.sys.stdout.flush()


def _timestamped(text: str) -> str:
    """Prefix each interactive event line with ``[HH:MM:SS]``."""
    try:
        stamp = ctx.current_datetime().strftime('%H:%M:%S')
    except Exception:
        return text
    prefix = '[{}] '.format(stamp)
    return '\n'.join(prefix + line if line else prefix.rstrip() for line in text.splitlines())


def clear_status_line() -> None:
    """Erase the in-place status line so an event line can be printed cleanly."""
    width = ctx.STATUS_LINE_WIDTH
    if not width and console_is_interactive():
        width = _terminal_width()
    if width:
        ctx.sys.stdout.write('\r' + ' ' * width + '\r')
        ctx.sys.stdout.flush()
        ctx.STATUS_LINE_WIDTH = 0


def render_status_line() -> None:
    """Redraw the single in-place monitor status line (interactive only)."""
    if not console_is_interactive() or ctx.STATUS_LINE_PAUSE_DEPTH > 0:
        return
    try:
        line = ctx.build_monitor_status_line(ctx.MONITOR_STATUS, ctx.current_datetime())
        line = ctx.truncate_to_width(line, max(1, _terminal_width() - 1))
        new_width = ctx.display_width(line)
        pad = max(0, ctx.STATUS_LINE_WIDTH - new_width)
        ctx.sys.stdout.write('\r' + line + ' ' * pad)
        ctx.sys.stdout.flush()
        ctx.STATUS_LINE_WIDTH = new_width
    except Exception:
        # Never let cosmetics break the monitor.
        return


def update_monitor_status(*, phase=None, check_count=None, detail=None,
                          rollcall_status=None, next_switch_at=Ellipsis, teacher_state=None,
                          target_label=None, redraw: bool = True) -> None:
    """Update the live status snapshot and (interactively) redraw the line.

    ``next_switch_at`` uses an ``Ellipsis`` sentinel so callers can explicitly
    set it to ``None`` (no scheduled transition) versus leaving it unchanged.
    """
    status = ctx.MONITOR_STATUS
    if phase is not None:
        status['phase'] = phase
    if check_count is not None:
        status['check_count'] = check_count
    if detail is not None:
        status['detail'] = detail
    if rollcall_status is not None:
        status['rollcall_status'] = rollcall_status
    if next_switch_at is not Ellipsis:
        status['next_switch_at'] = next_switch_at
    if teacher_state is not None:
        status['teacher_state'] = teacher_state
    if target_label is not None:
        status['target_label'] = target_label
    if redraw:
        render_status_line()


def reset_monitor_status() -> None:
    """Restore the status snapshot to its initial values."""
    ctx.MONITOR_STATUS.update({
        'phase': 'logging_in',
        'check_count': 0,
        'detail': '',
        'rollcall_status': '',
        'next_switch_at': None,
        'teacher_state': 'off',
        'target_label': '',
    })
    ctx.STATUS_LINE_WIDTH = 0


@contextlib.contextmanager
def pause_status_line():
    """Suspend in-place status drawing around a blocking prompt / external UI."""
    ctx.STATUS_LINE_PAUSE_DEPTH += 1
    try:
        clear_status_line()
    except Exception:
        pass
    try:
        yield
    finally:
        ctx.STATUS_LINE_PAUSE_DEPTH = max(0, ctx.STATUS_LINE_PAUSE_DEPTH - 1)
        try:
            render_status_line()
        except Exception:
            pass


def log_print(msg: ctx.Any) -> None:
    """Print a permanent event line.

    Non-interactive output is byte-identical to the historical behaviour (plain
    line, no timestamp). Interactive output clears the live status line, prints a
    timestamped event above it, then redraws the status line.
    """
    text = str(msg).strip()
    if not text:
        return
    if not console_is_interactive() or ctx.STATUS_LINE_PAUSE_DEPTH > 0:
        if console_is_interactive():
            _write_console_line(_timestamped(text))
        else:
            _write_console_line(text)
        return
    clear_status_line()
    _write_console_line(_timestamped(text))
    render_status_line()


def status_print(msg: ctx.Any) -> None:
    """Report transient monitor status.

    Non-interactive: appends ``[監控] ...`` lines exactly as before. Interactive:
    folds the message into the live status line's detail slot (no scrolling).
    """
    ctx.LAST_STATUS = str(msg).strip()
    if not ctx.LAST_STATUS:
        return
    if not console_is_interactive():
        _write_console_line('[監控] {}'.format(ctx.LAST_STATUS))
        return
    ctx.MONITOR_STATUS['detail'] = ctx.LAST_STATUS
    render_status_line()


def daily_log_path(today: ctx.Optional[ctx.datetime]=None) -> ctx.Path:
    today = today or ctx.current_datetime()
    return ctx.PATH / str(today.year) / str(today.month) / '{}.jsonl'.format(today.day)


def number_log_path(rcid: int) -> ctx.Path:
    return ctx.PATH / 'num' / '{}.jsonl'.format(rcid)


def log(*, event: str, path: ctx.Optional[ctx.Path]=None, counter: int=-1, status: str='', url: str='', http_status: ctx.Any=None, rollcall_id: ctx.Any=None, rollcall_type: str='', message: str='', payload_excerpt: ctx.Any=None, error: ctx.Any=None, extra: ctx.Optional[ctx.Dict[str, ctx.Any]]=None) -> bool:
    if not ctx.CONFIG['config']['enable_log']:
        return False
    try:
        data = {'timestamp': ctx.current_datetime().isoformat(timespec='seconds'), 'timezone': ctx.get_config_timezone_name(), 'event': event, 'counter': counter, 'status': status, 'url': url, 'http_status': http_status, 'rollcall_id': rollcall_id, 'rollcall_type': rollcall_type, 'message': message, 'payload_excerpt': ctx.make_payload_excerpt(payload_excerpt), 'error': ctx.normalize_text(error) or None}
        if extra:
            data.update(extra)
        path = path or ctx.daily_log_path()
        path.parent.mkdir(parents=True, exist_ok=True)
        with open(path, 'a', encoding='utf-8') as file:
            file.write(ctx.json.dumps(data, ensure_ascii=False, default=str))
            file.write('\n')
    except OSError as exc:
        log_print(exc)
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

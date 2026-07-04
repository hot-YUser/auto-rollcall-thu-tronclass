"""Fatal-error reporting for the monitor restart loop.

Split out of the old ``logging_runtime`` in the C5 refactor. Builds a sha1-fingerprinted
crash summary, records it through the new ``log_core`` (``ctx.log_event``), prints it, and
sends a rate-limited notification.
"""
from __future__ import annotations

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore


def __getattr__(name: str):
    return getattr(ctx, name)


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
    ctx.log_event('fatal_error', level='error', status='restarting', message=summary,
                  restart_count=restart_count, fingerprint=fingerprint, traceback=formatted_traceback)
    ctx.log_print(text)
    now = ctx.time.monotonic()
    if now - ctx.LAST_FATAL_NOTIFICATION_AT < ctx.FATAL_NOTIFICATION_INTERVAL:
        return
    ctx.LAST_FATAL_NOTIFICATION_AT = now
    try:
        ctx.asyncio.run(ctx.mes('{}\n{}'.format(summary, ctx.normalize_text(exc))))
    except Exception:
        return

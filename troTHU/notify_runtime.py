"""Outbound notifications (LINE / Discord / Telegram) + the notification bus.

Split out of the old ``logging_runtime`` in the C5 refactor — notifications are a
separate concern from logging. Delivery outcomes are recorded through the new
``log_core`` (``ctx.log_event``), not the old hand-rolled ``log()``.
"""
from __future__ import annotations

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore


def __getattr__(name: str):
    return getattr(ctx, name)


async def _send_notification(request: ctx.NotificationRequest) -> int:
    return await ctx.send_notification_request(request, request_ssl=ctx.get_ssl_request_setting(), timeout=ctx.create_notification_timeout(), request_func=ctx.aiohttp.request)


def build_notification_requests(text: str, highlight_block: str='') -> ctx.List[ctx.NotificationRequest]:

    def log_skip(channel: str, message: str) -> None:
        ctx.log_event('notification_delivery', status='skipped', message=message, channel=channel)
    return ctx.build_notification_requests_from_config(ctx.CONFIG, text, highlight_block=highlight_block, skip_logger=log_skip)


async def mes(text: str='test message', highlight_block: str='') -> None:
    requests = ctx.build_notification_requests(text, highlight_block)
    if not requests:
        return
    results = await ctx.asyncio.gather(*[ctx._send_notification(request) for request in requests], return_exceptions=True)
    for request, result in zip(requests, results):
        if isinstance(result, BaseException):
            ctx.log_event('notification_delivery', level='warning', status='failed',
                          message='{} 通知送出失敗。'.format(request.label),
                          channel=request.channel, url=request.url, error=str(result))
            ctx.log_print('{} 通知送出失敗: {}'.format(request.label, result))
        else:
            ctx.log_event('notification_delivery', status='success', http_status=result,
                          message='{} 通知已送出。'.format(request.label),
                          channel=request.channel, url=request.url)


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
        ctx.log_event('notification_bus_delivery', level='warning', status='failed',
                      message='Adapter notification sink failed.', summary=summary.to_dict())
    await ctx.mes(event.render(), highlight_block=highlight_block)


def set_notification_sinks(sinks: ctx.List[ctx.Any]) -> None:
    ctx.NOTIFICATION_SINKS.clear()
    ctx.NOTIFICATION_SINKS.extend(sinks or [])

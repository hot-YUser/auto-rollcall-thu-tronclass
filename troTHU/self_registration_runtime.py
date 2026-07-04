from __future__ import annotations

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore


def __getattr__(name: str):
    return getattr(ctx, name)


async def self_registration(main_session: ctx.aiohttp.ClientSession, rollcall: ctx.Dict[str, ctx.Any]) -> bool:
    """自主報到 (self_registration) — submit an empty PUT, then confirm on_call_fine.

    The vendor web client sends a bare ``{}`` to ``answer_self_registration_rollcall`` (there is no
    code / coordinate / QR to compute — it is the simplest check-in type). We mirror number/radar:
    submit → verify → banner, and return True only after the rollcall is confirmed on_call_fine.
    """
    rollcall_id = rollcall.get('rollcall_id') if isinstance(rollcall, dict) else None
    base_url = ctx.get_active_http_endpoints().base_url.rstrip('/')
    request_url = '{}/api/rollcall/{}/answer_self_registration_rollcall'.format(base_url, rollcall_id)
    ctx.status_print('正在送出自主報到 #{} ...'.format(rollcall_id))
    try:
        async with main_session.put(request_url, json={}) as resp:
            if resp.status not in (200, 201, 204):
                if resp.status == 401 or 'login' in str(resp.url).lower():
                    raise ctx.UnauthorizedError('自主報到期間登入狀態失效。')
                ctx.log_print('自主報到送出失敗（HTTP {}）。'.format(resp.status))
                return False
    except ctx.UnauthorizedError:
        raise
    except (ctx.aiohttp.ClientError, ctx.asyncio.TimeoutError) as exc:
        ctx.log_print('自主報到請求失敗：{}'.format(exc))
        return False

    verification = await ctx.verify_rollcall_on_call_fine(main_session, rollcall_id, rollcall_type='self_registration')
    if not (verification.get('ok') and verification.get('status') == 'on_call_fine'):
        await ctx.mes('自主報到 #{} 已送出，但尚未確認 on_call_fine；下一輪會再檢查。'.format(rollcall_id))
        return False

    banner = ctx.format_rollcall_success_banner(
        ctx.AttendanceType.SELF_REGISTRATION,
        rollcall_id,
        method='self_registration',
        detail='on_call_fine',
        attendance_rate=ctx.format_success_banner_attendance_rate(verification),
    )
    ctx.log_print(banner)
    ctx.remember_rollcall_progress(verification)
    await ctx.mes('自主報到成功！', highlight_block=banner)
    return True

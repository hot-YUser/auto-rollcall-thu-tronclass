from __future__ import annotations

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore


def __getattr__(name: str):
    return getattr(ctx, name)



def classify_rollcall(rollcall: ctx.Dict[str, ctx.Any]) -> ctx.Tuple[str, str, str]:
    return ctx.engine_classify_rollcall(rollcall)


def reset_unsupported_rollcall_state() -> None:
    ctx.UNSUPPORTED_ROLLCALL_STATE['rollcall_id'] = None
    ctx.UNSUPPORTED_ROLLCALL_STATE['status'] = ''


def number_rollcall_key(rollcall_id: ctx.Any) -> str:
    return ctx.normalize_text(rollcall_id)


def is_completed_number_rollcall(rollcall_id: ctx.Any) -> bool:
    key = ctx.number_rollcall_key(rollcall_id)
    return bool(key) and key in ctx.COMPLETED_NUMBER_ROLLCALLS


def mark_completed_number_rollcall(rollcall_id: ctx.Any, code: ctx.Any) -> None:
    key = ctx.number_rollcall_key(rollcall_id)
    code_text = ctx.normalize_text(code)
    if key and code_text and (code_text != 'NA'):
        ctx.COMPLETED_NUMBER_ROLLCALLS[key] = code_text


async def maybe_notify_unsupported_rollcall(status: str, rollcall: ctx.Dict[str, ctx.Any], message: str, rollcall_type: str) -> None:
    rollcall_id = rollcall.get('rollcall_id')
    if ctx.UNSUPPORTED_ROLLCALL_STATE.get('rollcall_id') == rollcall_id and ctx.UNSUPPORTED_ROLLCALL_STATE.get('status') == status:
        return
    ctx.UNSUPPORTED_ROLLCALL_STATE['rollcall_id'] = rollcall_id
    ctx.UNSUPPORTED_ROLLCALL_STATE['status'] = status
    if status == 'unsupported_qrcode':
        active = ctx.get_active_profile(ctx.CONFIG)
        ctx.add_pending_qr(ctx.BASE_DIR, profile=active.name, rollcall_id=rollcall_id, rollcall_type=rollcall_type, provider=ctx.get_active_provider_key(), source_adapter='monitor', message=message, payload_excerpt=rollcall, ttl_seconds=ctx.CONFIG.get('ux', {}).get('pending_qr_ttl_seconds', 600))
        try:
            plan = ctx.build_group_execution_plan(ctx.CONFIG)
            for user in plan.get('fanout_users', []):
                if user and user != active.name:
                    ctx.add_pending_qr(ctx.BASE_DIR, profile=user, rollcall_id=rollcall_id, rollcall_type=rollcall_type, provider=ctx.get_active_provider_key(), source_adapter='monitor-group', message=message, payload_excerpt=rollcall, ttl_seconds=ctx.CONFIG.get('ux', {}).get('pending_qr_ttl_seconds', 600))
        except Exception:
            pass
    ctx.log_print(message)
    await ctx.mes(message)
    ctx.log(event='unsupported_rollcall_detected', status=status, rollcall_id=rollcall_id, rollcall_type=rollcall_type, message=message, payload_excerpt=rollcall)


_LAST_CLIPBOARD_QR_HASH: str = ''


async def try_clipboard_qr_autosubmit(session: ctx.aiohttp.ClientSession, rollcall: ctx.Dict[str, ctx.Any]) -> bool:
    """If the clipboard holds a QR for THIS rollcall, decode and submit it.

    Clipboard-only assist for QR rollcalls (the `data` token is never in any
    student API, so it must come from the displayed QR). Each distinct clipboard
    content is attempted once; a payload whose rollcallId does not match the
    active rollcall is skipped for safety. Best-effort; never raises."""
    global _LAST_CLIPBOARD_QR_HASH
    try:
        if not ctx.clipboard_autosubmit_enabled(ctx.CONFIG):
            return False
        read = ctx.read_clipboard_qr_payload()
        if not read.get('ok'):
            return False
        content_hash = ctx.normalize_text(read.get('content_hash'))
        if content_hash and content_hash == _LAST_CLIPBOARD_QR_HASH:
            return False
        _LAST_CLIPBOARD_QR_HASH = content_hash
        payload = str(read.get('payload') or '')
        try:
            clip_rollcall_id = ctx.normalize_text(ctx.parse_qr_payload(payload).rollcall_id)
        except Exception:
            clip_rollcall_id = ''
        current_rollcall_id = ctx.normalize_text(rollcall.get('rollcall_id') if isinstance(rollcall, dict) else '')
        if clip_rollcall_id and current_rollcall_id and clip_rollcall_id != current_rollcall_id:
            ctx.log_print('剪貼簿 QR 對應點名 {} 與目前 {} 不符，略過。'.format(clip_rollcall_id, current_rollcall_id))
            ctx.log(event='clipboard_qr_autosubmit', status='rollcall_mismatch', rollcall_id=current_rollcall_id, rollcall_type='qrcode', message='剪貼簿 QR 與目前點名不符。', extra={'clipboard_rollcall_id': clip_rollcall_id, 'source': read.get('source')})
            return False
        ok = await ctx.submit_qr_payload(session, payload, progress_log_output=False)
        if not ok:
            ctx.log(event='clipboard_qr_autosubmit', status='submitted_unconfirmed', rollcall_id=current_rollcall_id or clip_rollcall_id, rollcall_type='qrcode', message='已從剪貼簿自動送出 QR 點名，但尚未確認 on_call_fine。', extra={'source': read.get('source')})
            return False
        ctx.log_print('已從剪貼簿（{}）自動送出並確認 QR 點名 #{}。'.format(read.get('source'), current_rollcall_id or clip_rollcall_id))
        ctx.log(event='clipboard_qr_autosubmit', status='success', rollcall_id=current_rollcall_id or clip_rollcall_id, rollcall_type='qrcode', message='已從剪貼簿自動送出並確認 QR 點名。', extra={'source': read.get('source')})
        return True
    except Exception as exc:
        ctx.log(event='clipboard_qr_autosubmit', status='error', rollcall_type='qrcode', message='剪貼簿自動送出失敗。', error=exc)
        return False


def record_check_runtime(status: str, *, rollcall_id: ctx.Any='', rollcall_type: str='') -> None:
    try:
        ctx.mark_check_result(ctx.BASE_DIR, ctx.get_active_profile(ctx.CONFIG).name, status, rollcall_id=rollcall_id, rollcall_type=rollcall_type)
    except Exception:
        pass


def record_runtime_error(status: str, message: ctx.Any) -> None:
    try:
        ctx.mark_profile_error(ctx.BASE_DIR, ctx.get_active_profile(ctx.CONFIG).name, status, message)
    except Exception:
        pass


def decide_rollcall(rollcalls: ctx.Any) -> ctx.RollcallDecision:
    return ctx.engine_decide_rollcall(rollcalls)


def select_rollcall(rollcalls: ctx.Any) -> ctx.Tuple[str, ctx.Optional[ctx.Dict[str, ctx.Any]], str, str]:
    return ctx.engine_select_rollcall(rollcalls)


async def poll_rollcall_decision(session: ctx.aiohttp.ClientSession, cnt: int=-1) -> ctx.Dict[str, ctx.Any]:
    if not ctx.provider_is_daily_allowed():
        message = ctx.provider_block_message('rollcall polling')
        ctx.log(event='provider_guard', counter=cnt, status='blocked', message=message, extra={'provider': ctx.get_active_provider_key(), 'action': 'check_rollcall'})
        ctx.record_runtime_error('provider_experimental', message)
        raise ctx.UnexpectedResponseError(message)
    client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
    result = await client.fetch_rollcalls()
    rollcalls = result.payload.get('rollcalls') or []
    decision = ctx.decide_rollcall(rollcalls)
    selected_status = decision.status
    selected_rollcall = decision.rollcall
    selected_rollcall_type = '' if decision.attendance_type == ctx.AttendanceType.NONE else decision.attendance_type.value
    selected_message = decision.message
    ctx.log(event='rollcall_poll', counter=cnt, status='ok', url=result.url, http_status=result.status_code, rollcall_id=selected_rollcall.get('rollcall_id') if selected_rollcall else None, rollcall_type=selected_rollcall_type, message='完成一次點名輪詢。', payload_excerpt=result.payload, extra={'rollcall_count': len(rollcalls), 'selected_status': selected_status})
    ctx.record_check_runtime(selected_status, rollcall_id=selected_rollcall.get('rollcall_id') if selected_rollcall else '', rollcall_type=selected_rollcall_type)
    return {
        'status': selected_status,
        'rollcall': selected_rollcall,
        'rollcall_type': selected_rollcall_type,
        'message': selected_message,
        'url': result.url,
        'http_status': result.status_code,
        'payload': result.payload,
        'rollcall_count': len(rollcalls),
    }


async def announce_rollcall_start(
    attendance_type: ctx.Any,
    rollcall_id: ctx.Any,
    *,
    detail: str='',
    method: str='',
    event: str='rollcall_started',
    counter: int=-1,
    url: str='',
    http_status: ctx.Any=None,
    payload_excerpt: ctx.Any=None,
) -> str:
    text = ctx.format_rollcall_start_message(attendance_type, rollcall_id, detail=detail, method=method)
    rollcall_type = attendance_type.value if hasattr(attendance_type, 'value') else ctx.normalize_text(attendance_type)
    ctx.log(event=event, counter=counter, status='started', url=url, http_status=http_status, rollcall_id=rollcall_id, rollcall_type=rollcall_type, message=text, payload_excerpt=payload_excerpt)
    ctx.log_print(text)
    await ctx.mes(text)
    return text


def _combine_start_detail(*parts: ctx.Any) -> str:
    lines = []
    for part in parts:
        text = ctx.normalize_text(part)
        if text:
            lines.append(text)
    return '\n'.join(lines)


async def handle_rollcall_decision(
    session: ctx.aiohttp.ClientSession,
    poll: ctx.Mapping[str, ctx.Any],
    *,
    cnt: int=-1,
    use_prepared_qr: bool=False,
    gate_detail: str='',
) -> str:
    selected_status = ctx.normalize_text(poll.get('status'))
    selected_rollcall = poll.get('rollcall') if isinstance(poll.get('rollcall'), dict) else None
    selected_rollcall_type = ctx.normalize_text(poll.get('rollcall_type'))
    selected_message = ctx.normalize_text(poll.get('message'))
    result_url = ctx.normalize_text(poll.get('url'))
    http_status = poll.get('http_status')
    if selected_status == 'not_call':
        ctx.reset_unsupported_rollcall_state()
        return 'not call'
    if selected_status == 'on_call_fine':
        ctx.reset_unsupported_rollcall_state()
        return 'on_call_fine'
    if selected_status == 'is_number' and selected_rollcall is not None:
        ctx.reset_unsupported_rollcall_state()
        rollcall_id = selected_rollcall.get('rollcall_id')
        if ctx.is_completed_number_rollcall(rollcall_id):
            found_code = ctx.COMPLETED_NUMBER_ROLLCALLS[ctx.number_rollcall_key(rollcall_id)]
            ctx.log(event='number_rollcall_skipped', counter=cnt, status='already_completed', url=result_url, http_status=http_status, rollcall_id=rollcall_id, rollcall_type='number', message='數字點名已處理，略過重複嘗試。', payload_excerpt=selected_rollcall, extra={'found_code': found_code})
            return '數字點名已處理'
        await ctx.announce_rollcall_start(
            ctx.AttendanceType.NUMBER,
            rollcall_id,
            detail=_combine_start_detail(
                gate_detail,
                '正在嘗試直接讀碼；必要時改用 0000-{:04d}。'.format(ctx.NUMBER_CODE_LIMIT - 1),
            ),
            event='number_rollcall_started',
            counter=cnt,
            url=result_url,
            http_status=http_status,
            payload_excerpt=selected_rollcall,
        )
        found_code = await ctx.number(session, rollcall_id)
        ctx.mark_completed_number_rollcall(rollcall_id, found_code)
        if ctx.normalize_text(found_code) and ctx.normalize_text(found_code) != 'NA':
            try:
                group_result = await ctx.submit_group_number(found_code, rcid=rollcall_id, session=session, config=ctx.CONFIG)
                if group_result.get('ok'):
                    ctx.log(event='group_number_fanout_planned', status=group_result.get('status', 'submitted'), rollcall_id=rollcall_id, rollcall_type='number', message='群組 number fan-out 簽到完成。', extra=group_result)
                summary = ctx.format_group_fanout_summary(group_result, rollcall_type='number')
                if summary:
                    ctx.log_print(summary)
            except Exception as exc:
                ctx.log(event='group_number_fanout_planned', status='failed', rollcall_id=rollcall_id, rollcall_type='number', message='群組 number fan-out 失敗。', error=exc)
                ctx.log_print('群組 number fan-out 失敗：{}'.format(exc))
        return 'is_number'
    if selected_status == 'is_radar' and selected_rollcall is not None:
        ctx.reset_unsupported_rollcall_state()
        rollcall_id = selected_rollcall.get('rollcall_id')
        radar_key = ctx.normalize_text(rollcall_id)
        if radar_key in ctx.COMPLETED_RADAR_ROLLCALLS:
            ctx.log(event='radar_rollcall_skipped', counter=cnt, status='already_completed', url=result_url, http_status=http_status, rollcall_id=rollcall_id, rollcall_type='radar', message='雷達點名已處理，略過重複嘗試。', payload_excerpt=selected_rollcall)
            return '雷達點名已處理'
        await ctx.announce_rollcall_start(
            ctx.AttendanceType.RADAR,
            rollcall_id,
            detail=_combine_start_detail(gate_detail, '正在處理雷達點名，請稍候...'),
            event='radar_rollcall_started',
            counter=cnt,
            url=result_url,
            http_status=http_status,
            payload_excerpt=selected_rollcall,
        )
        radar_success = await ctx.radar(session, selected_rollcall)
        if radar_success:
            ctx.COMPLETED_RADAR_ROLLCALLS[radar_key] = True
            try:
                group_result = await ctx.submit_group_radar(selected_rollcall, session=session, config=ctx.CONFIG)
                if group_result.get('ok'):
                    ctx.log(event='group_radar_fanout_planned', status=group_result.get('status', 'submitted'), rollcall_id=rollcall_id, rollcall_type='radar', message='群組 radar fan-out 簽到完成。', extra=group_result)
                summary = ctx.format_group_fanout_summary(group_result, rollcall_type='radar')
                if summary:
                    ctx.log_print(summary)
            except Exception as exc:
                ctx.log(event='group_radar_fanout_planned', status='failed', rollcall_id=rollcall_id, rollcall_type='radar', message='群組 radar fan-out 失敗。', error=exc)
                ctx.log_print('群組 radar fan-out 失敗：{}'.format(exc))
            return 'is_radar'
        return 'radar_failed'
    if selected_rollcall is not None:
        answered_automatically = False
        if selected_status == 'unsupported_qrcode':
            qr_key = ctx.normalize_text(selected_rollcall.get('rollcall_id') or selected_rollcall.get('id'))
            if qr_key in ctx.COMPLETED_QR_ROLLCALLS:
                ctx.log(event='qrcode_rollcall_skipped', counter=cnt, status='already_completed', url=result_url, http_status=http_status, rollcall_id=qr_key, rollcall_type='qrcode', message='QR 點名已處理，略過重複嘗試。', payload_excerpt=selected_rollcall)
                return 'qr 點名已處理'
            if ctx.normalize_text(gate_detail):
                await ctx.announce_rollcall_start(
                    ctx.AttendanceType.QRCODE,
                    qr_key or selected_rollcall.get('rollcall_id') or selected_rollcall.get('id'),
                    detail=_combine_start_detail(
                        gate_detail,
                        '正在送出 QR 點名；優先使用教師輔助或剪貼簿內容。',
                    ),
                    event='qrcode_rollcall_submit_started',
                    counter=cnt,
                    url=result_url,
                    http_status=http_status,
                    payload_excerpt=selected_rollcall,
                )
            if ctx.teacher_assist_configured(ctx.CONFIG):
                if use_prepared_qr:
                    answered_automatically = await ctx.submit_prepared_teacher_qr(session, selected_rollcall)
                else:
                    answered_automatically = await ctx.run_teacher_assisted_qr(session, selected_rollcall)
                if answered_automatically and qr_key:
                    ctx.COMPLETED_QR_ROLLCALLS[qr_key] = True
                    try:
                        group_result = await ctx.submit_group_qr(selected_rollcall, session=session, config=ctx.CONFIG)
                        if group_result.get('ok'):
                            ctx.log(event='group_qr_fanout_planned', status=group_result.get('status', 'submitted'), rollcall_id=qr_key, rollcall_type='qrcode', message='群組 qr fan-out 簽到完成。', extra=group_result)
                        summary = ctx.format_group_fanout_summary(group_result, rollcall_type='qr')
                        if summary:
                            ctx.log_print(summary)
                    except Exception as exc:
                        ctx.log(event='group_qr_fanout_planned', status='failed', rollcall_id=qr_key, rollcall_type='qrcode', message='群組 qr fan-out 失敗。', error=exc)
                        ctx.log_print('群組 qr fan-out 失敗：{}'.format(exc))
                    return 'is_qrcode'
            if not answered_automatically:
                answered_automatically = await ctx.try_clipboard_qr_autosubmit(session, selected_rollcall)
                if answered_automatically and qr_key:
                    ctx.COMPLETED_QR_ROLLCALLS[qr_key] = True
                    try:
                        group_result = await ctx.submit_group_qr(selected_rollcall, session=session, config=ctx.CONFIG)
                        if group_result.get('ok'):
                            ctx.log(event='group_qr_fanout_planned', status=group_result.get('status', 'submitted'), rollcall_id=qr_key, rollcall_type='qrcode', message='群組 qr fan-out 簽到完成。', extra=group_result)
                        summary = ctx.format_group_fanout_summary(group_result, rollcall_type='qr')
                        if summary:
                            ctx.log_print(summary)
                    except Exception as exc:
                        ctx.log(event='group_qr_fanout_planned', status='failed', rollcall_id=qr_key, rollcall_type='qrcode', message='群組 qr fan-out 失敗。', error=exc)
                        ctx.log_print('群組 qr fan-out 失敗：{}'.format(exc))
                    return 'is_qrcode'
        if not answered_automatically:
            await ctx.maybe_notify_unsupported_rollcall(selected_status, selected_rollcall, selected_message, selected_rollcall_type)
    return selected_status


async def check_rollcall(session: ctx.aiohttp.ClientSession, cnt: int=-1) -> str:
    poll = await ctx.poll_rollcall_decision(session, cnt)
    return await ctx.handle_rollcall_decision(session, poll, cnt=cnt)

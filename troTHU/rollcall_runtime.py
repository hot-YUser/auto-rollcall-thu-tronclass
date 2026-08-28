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


def rollcall_completion_key(
    rollcall_id: ctx.Any,
    *,
    profile_name: str = "",
    provider_key: str = "",
) -> str:
    rid = ctx.normalize_text(rollcall_id)
    if not rid:
        return ""
    profile = ctx.normalize_profile_name(profile_name) if profile_name else ""
    if not profile:
        try:
            profile = ctx.get_active_profile(ctx.CONFIG).name
        except Exception:
            profile = "default"
    provider = ctx.normalize_text(provider_key) or ctx.get_active_provider_key()
    return "{}:{}:{}".format(provider, profile, rid)


def number_rollcall_key(rollcall_id: ctx.Any, *, profile_name: str = "", provider_key: str = "") -> str:
    return rollcall_completion_key(
        rollcall_id,
        profile_name=profile_name,
        provider_key=provider_key,
    )


def is_completed_number_rollcall(rollcall_id: ctx.Any, *, profile_name: str = "", provider_key: str = "") -> bool:
    key = ctx.number_rollcall_key(rollcall_id, profile_name=profile_name, provider_key=provider_key)
    return bool(key) and key in ctx.COMPLETED_NUMBER_ROLLCALLS


def mark_completed_number_rollcall(rollcall_id: ctx.Any, code: ctx.Any, *, profile_name: str = "", provider_key: str = "") -> None:
    key = ctx.number_rollcall_key(rollcall_id, profile_name=profile_name, provider_key=provider_key)
    code_text = ctx.normalize_text(code)
    if key and code_text and (code_text != 'NA'):
        ctx.COMPLETED_NUMBER_ROLLCALLS[key] = code_text


def radar_rollcall_key(rollcall_id: ctx.Any, *, profile_name: str = "", provider_key: str = "") -> str:
    return rollcall_completion_key(rollcall_id, profile_name=profile_name, provider_key=provider_key)


def is_completed_radar_rollcall(rollcall_id: ctx.Any, *, profile_name: str = "", provider_key: str = "") -> bool:
    key = radar_rollcall_key(rollcall_id, profile_name=profile_name, provider_key=provider_key)
    return bool(key) and key in ctx.COMPLETED_RADAR_ROLLCALLS


def mark_completed_radar_rollcall(rollcall_id: ctx.Any, *, profile_name: str = "", provider_key: str = "") -> None:
    key = radar_rollcall_key(rollcall_id, profile_name=profile_name, provider_key=provider_key)
    if key:
        ctx.COMPLETED_RADAR_ROLLCALLS[key] = True


def self_registration_rollcall_key(rollcall_id: ctx.Any, *, profile_name: str = "", provider_key: str = "") -> str:
    return rollcall_completion_key(rollcall_id, profile_name=profile_name, provider_key=provider_key)


def is_completed_self_registration_rollcall(rollcall_id: ctx.Any, *, profile_name: str = "", provider_key: str = "") -> bool:
    key = self_registration_rollcall_key(rollcall_id, profile_name=profile_name, provider_key=provider_key)
    return bool(key) and key in ctx.COMPLETED_SELF_REGISTRATION_ROLLCALLS


def mark_completed_self_registration_rollcall(rollcall_id: ctx.Any, *, profile_name: str = "", provider_key: str = "") -> None:
    key = self_registration_rollcall_key(rollcall_id, profile_name=profile_name, provider_key=provider_key)
    if key:
        ctx.COMPLETED_SELF_REGISTRATION_ROLLCALLS[key] = True


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
    profile_name: str='',
    provider_key: str='',
    my_user_no: str='',
    endpoints: ctx.Any = None,
    request_ssl: ctx.Any = None,
) -> str:
    selected_status = ctx.normalize_text(poll.get('status'))
    selected_rollcall = poll.get('rollcall') if isinstance(poll.get('rollcall'), dict) else None
    selected_rollcall_type = ctx.normalize_text(poll.get('rollcall_type'))
    selected_message = ctx.normalize_text(poll.get('message'))
    # immutable snapshot — no global re-read inside decision; poll extras are internal only, endpoints come from handle_rollcall's captured snapshot via caller
    _rr_profile_name = ctx.normalize_profile_name(profile_name) if profile_name else ""
    if not _rr_profile_name:
        try:
            _rr_profile_name = ctx.normalize_profile_name(ctx.get_active_profile(ctx.CONFIG).name)
        except Exception:
            _rr_profile_name = "default"
    _rr_provider_key = ctx.normalize_text(provider_key)
    if not _rr_provider_key:
        try:
            _rr_provider_key = ctx.get_active_provider_key()
        except Exception:
            _rr_provider_key = ctx.DEFAULT_PROVIDER if hasattr(ctx, "DEFAULT_PROVIDER") else "thu"
    _rr_my_user_no = ctx.normalize_text(my_user_no) or (ctx.normalize_text(ctx.get_active_profile(ctx.CONFIG).user) if hasattr(ctx.get_active_profile(ctx.CONFIG), 'user') else "")
    _rr_endpoints = endpoints
    _rr_request_ssl = request_ssl
    if _rr_endpoints is None:
        try:
            _rr_endpoints = ctx.get_active_http_endpoints()
        except Exception:
            pass
    if _rr_request_ssl is None:
        try:
            _rr_request_ssl = ctx.get_ssl_request_setting()
        except Exception:
            pass
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
        if ctx.is_completed_number_rollcall(rollcall_id, profile_name=_rr_profile_name, provider_key=_rr_provider_key):
            found_code = ctx.COMPLETED_NUMBER_ROLLCALLS[ctx.number_rollcall_key(rollcall_id, profile_name=_rr_profile_name, provider_key=_rr_provider_key)]
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
        found_code = await ctx.number(session, rollcall_id, my_user_no=_rr_my_user_no, endpoints=_rr_endpoints, request_ssl=_rr_request_ssl)
        ctx.mark_completed_number_rollcall(rollcall_id, found_code, profile_name=_rr_profile_name, provider_key=_rr_provider_key)
        if ctx.normalize_text(found_code) and ctx.normalize_text(found_code) != 'NA':
            try:
                group_result = await ctx.submit_group_number(found_code, rcid=rollcall_id, session=session, config=ctx.CONFIG)
                if group_result.get('ok'):
                    pass
                summary = ctx.format_group_fanout_summary(group_result, rollcall_type='number')
                if summary:
                    ctx.log_print(summary)
            except Exception as exc:
                ctx.log_print('群組 number fan-out 失敗：{}'.format(exc))
        return 'is_number'
    if selected_status == 'is_radar' and selected_rollcall is not None:
        ctx.reset_unsupported_rollcall_state()
        rollcall_id = selected_rollcall.get('rollcall_id')
        if ctx.is_completed_radar_rollcall(rollcall_id, profile_name=_rr_profile_name, provider_key=_rr_provider_key):
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
        radar_success = await ctx.radar(session, selected_rollcall, my_user_no=_rr_my_user_no, endpoints=_rr_endpoints, request_ssl=_rr_request_ssl)
        if radar_success:
            ctx.mark_completed_radar_rollcall(rollcall_id, profile_name=_rr_profile_name, provider_key=_rr_provider_key)
            try:
                group_result = await ctx.submit_group_radar(selected_rollcall, session=session, config=ctx.CONFIG)
                if group_result.get('ok'):
                    pass
                summary = ctx.format_group_fanout_summary(group_result, rollcall_type='radar')
                if summary:
                    ctx.log_print(summary)
            except Exception as exc:
                ctx.log_print('群組 radar fan-out 失敗：{}'.format(exc))
            return 'is_radar'
        return 'radar_failed'
    if selected_status == 'is_self_registration' and selected_rollcall is not None:
        ctx.reset_unsupported_rollcall_state()
        rollcall_id = selected_rollcall.get('rollcall_id')
        if ctx.is_completed_self_registration_rollcall(rollcall_id, profile_name=_rr_profile_name, provider_key=_rr_provider_key):
            return '自主報到已處理'
        await ctx.announce_rollcall_start(
            ctx.AttendanceType.SELF_REGISTRATION,
            rollcall_id,
            detail=_combine_start_detail(gate_detail, '正在送出自主報到，請稍候...'),
            event='self_registration_rollcall_started',
            counter=cnt,
            url=result_url,
            http_status=http_status,
            payload_excerpt=selected_rollcall,
        )
        sr_success = await ctx.self_registration(session, selected_rollcall, my_user_no=_rr_my_user_no, endpoints=_rr_endpoints, request_ssl=_rr_request_ssl)
        if sr_success:
            ctx.mark_completed_self_registration_rollcall(rollcall_id, profile_name=_rr_profile_name, provider_key=_rr_provider_key)
            try:
                group_result = await ctx.submit_group_self_registration(selected_rollcall, session=session, config=ctx.CONFIG)
                if group_result.get('ok'):
                    pass
                summary = ctx.format_group_fanout_summary(group_result, rollcall_type='self_registration')
                if summary:
                    ctx.log_print(summary)
            except Exception as exc:
                ctx.log_print('群組 自主報到 fan-out 失敗：{}'.format(exc))
            return 'is_self_registration'
        return 'self_registration_failed'
    if selected_rollcall is not None:
        answered_automatically = False
        if selected_status == 'unsupported_qrcode':
            qr_key = ctx.normalize_text(selected_rollcall.get('rollcall_id') or selected_rollcall.get('id'))
            if ctx.is_completed_qr_rollcall(qr_key, profile_name=_rr_profile_name, provider_key=_rr_provider_key):
                return 'qr 點名已處理'
            teacher_ready = ctx.teacher_assist_configured(ctx.CONFIG)
            remote_ready = ctx.qr_remote_configured(ctx.CONFIG)
            if ctx.normalize_text(gate_detail):
                qr_submit_detail = (
                    '正在透過教師輔助送出 QR 點名。' if teacher_ready
                    else '正在透過遠端 QR data 服務送出 QR 點名。' if remote_ready
                    else '正在送出 QR 點名。'
                )
                await ctx.announce_rollcall_start(
                    ctx.AttendanceType.QRCODE,
                    qr_key or selected_rollcall.get('rollcall_id') or selected_rollcall.get('id'),
                    detail=_combine_start_detail(gate_detail, qr_submit_detail),
                    event='qrcode_rollcall_submit_started',
                    counter=cnt,
                    url=result_url,
                    http_status=http_status,
                    payload_excerpt=selected_rollcall,
                )
            if teacher_ready:
                if use_prepared_qr:
                    answered_automatically = await ctx.submit_prepared_teacher_qr(session, selected_rollcall, profile_name=_rr_profile_name, provider_key=_rr_provider_key, my_user_no=_rr_my_user_no, endpoints=_rr_endpoints, request_ssl=_rr_request_ssl)
                else:
                    answered_automatically = await ctx.run_teacher_assisted_qr(
                        session,
                        selected_rollcall,
                        profile_name=_rr_profile_name,
                        provider_key=_rr_provider_key,
                        my_user_no=_rr_my_user_no,
                        endpoints=_rr_endpoints,
                        request_ssl=_rr_request_ssl,
                        keep_prepared=True,
                    )
            if not answered_automatically and remote_ready:
                answered_automatically = await ctx.submit_remote_qr(session, selected_rollcall, profile_name=_rr_profile_name, provider_key=_rr_provider_key, my_user_no=_rr_my_user_no, endpoints=_rr_endpoints, request_ssl=_rr_request_ssl)
            if answered_automatically and qr_key:
                ctx.mark_completed_qr_rollcall(qr_key, profile_name=_rr_profile_name, provider_key=_rr_provider_key)
                try:
                    group_result = await ctx.submit_group_qr(selected_rollcall, session=session, config=ctx.CONFIG)
                    if group_result.get('ok'):
                        pass
                    summary = ctx.format_group_fanout_summary(group_result, rollcall_type='qr')
                    if summary:
                        ctx.log_print(summary)
                except Exception as exc:
                    ctx.log_print('群組 qr fan-out 失敗：{}'.format(exc))
                finally:
                    if teacher_ready:
                        await ctx.stop_prepared_teacher_qr(qr_key, profile_name=_rr_profile_name, provider_key=_rr_provider_key)
                return 'is_qrcode'
            if teacher_ready:
                await ctx.stop_prepared_teacher_qr(qr_key, profile_name=_rr_profile_name, provider_key=_rr_provider_key)
        if not answered_automatically:
            await ctx.maybe_notify_unsupported_rollcall(selected_status, selected_rollcall, selected_message, selected_rollcall_type)
    return selected_status


async def check_rollcall(session: ctx.aiohttp.ClientSession, cnt: int=-1) -> str:
    poll = await ctx.poll_rollcall_decision(session, cnt)
    return await ctx.handle_rollcall_decision(session, poll, cnt=cnt)

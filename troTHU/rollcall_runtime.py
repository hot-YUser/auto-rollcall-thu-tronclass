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
    _QR_INFO_CAPTURED_ROLLCALLS.clear()
    for key, task in list(_QR_INFO_CAPTURE_TASKS.items()):
        if task.done():
            _QR_INFO_CAPTURE_TASKS.pop(key, None)
            continue
        task.cancel()
        _QR_INFO_CAPTURE_TASKS.pop(key, None)


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


async def run_full_rollcall_capture(session: ctx.aiohttp.ClientSession, client: ctx.Any, rollcall: ctx.Dict[str, ctx.Any], status: str, rollcall_type: str, source_payload: ctx.Any, cnt: int) -> None:
    """Fire-and-record the unredacted full capture for any detected rollcall.

    Best-effort: never raises into the monitor loop. Runs for every rollcall
    type (number/radar/qr/unsupported) so every server response seen during a
    rollcall is written verbatim to log/rollcall_capture.
    """
    try:
        capture_summary = await ctx.capture_rollcall_full(
            session,
            rollcall,
            endpoints=client.endpoints,
            base_dir=ctx.BASE_DIR,
            request_ssl=ctx.get_ssl_request_setting(),
            profile=ctx.get_active_profile(ctx.CONFIG).name,
            provider=ctx.get_active_provider_key(),
            trigger_status=status,
            source_payload=source_payload,
            config=ctx.CONFIG,
        )
        ctx.log(event='rollcall_full_capture', counter=cnt, status=capture_summary.get('status', 'unknown'), rollcall_id=rollcall.get('rollcall_id'), rollcall_type=rollcall_type, message='已擷取點名相關端點的完整伺服器回應。', extra=capture_summary)
        if capture_summary.get('status') == 'ok':
            hint = capture_summary.get('endpoints_with_fields') or []
            ctx.log_print('已記錄完整伺服器回應：{}{}'.format(capture_summary.get('output_path', ''), '（關鍵欄位出現於：{}）'.format(', '.join(hint)) if hint else ''))
    except Exception as exc:
        ctx.log(event='rollcall_full_capture', counter=cnt, status='error', rollcall_id=rollcall.get('rollcall_id') if isinstance(rollcall, dict) else '', rollcall_type=rollcall_type, message='完整擷取失敗。', error=exc)


_REALTIME_CAPTURED_ROLLCALLS: set = set()
_QR_INFO_CAPTURED_ROLLCALLS: set = set()
_QR_INFO_CAPTURE_TASKS: dict = {}
_QR_DATA_PROBED_ROLLCALLS: set = set()
_LAST_CLIPBOARD_QR_HASH: str = ''
_API_STATE_AUDIT_SIGNATURES: dict = {}
_API_STATE_AUDIT_TASKS: dict = {}


async def _run_api_state_audit_task(
    session: ctx.aiohttp.ClientSession,
    client: ctx.Any,
    selected_status: str,
    selected_rollcall: ctx.Any,
    selected_rollcall_type: str,
    rollcalls: ctx.Any,
    source_payload: ctx.Any,
    cnt: int,
) -> None:
    try:
        user_id = ''
        try:
            fetched_user_id = await client.fetch_user_id()
            user_id = ctx.normalize_text(fetched_user_id)
        except Exception as exc:
            ctx.log(event='api_state_audit_user_id', counter=cnt, status='failed', rollcall_id=selected_rollcall.get('rollcall_id') if isinstance(selected_rollcall, dict) else '', rollcall_type=selected_rollcall_type, message='API state audit 無法取得 APPRuntime user id。', error=exc)
        summary = await ctx.run_api_state_audit(
            session,
            endpoints=client.endpoints,
            base_dir=ctx.BASE_DIR,
            config=ctx.CONFIG,
            request_ssl=ctx.get_ssl_request_setting(),
            profile=ctx.get_active_profile(ctx.CONFIG).name,
            provider=ctx.get_active_provider_key(),
            selected_status=selected_status,
            selected_rollcall=selected_rollcall,
            selected_rollcall_type=selected_rollcall_type,
            rollcalls=rollcalls,
            source_payload=source_payload,
            user_id=user_id,
            session_id=ctx.get_session_id_header(session),
            capture_realtime_func=ctx.capture_realtime,
        )
        ctx.log(event='api_state_audit', counter=cnt, status=summary.get('status', 'unknown'), rollcall_id=summary.get('rollcall_id'), rollcall_type=selected_rollcall_type, message='狀態變更 API 全量原始擷取完成。', extra=summary)
        if summary.get('status') == 'ok':
            ctx.log_print('已完成狀態變更 API 全量擷取：{}（operations={}, assets={}）'.format(summary.get('output_dir', ''), summary.get('operation_count'), summary.get('asset_count')))
    except Exception as exc:
        ctx.log(event='api_state_audit', counter=cnt, status='error', rollcall_id=selected_rollcall.get('rollcall_id') if isinstance(selected_rollcall, dict) else '', rollcall_type=selected_rollcall_type, message='狀態變更 API 全量原始擷取失敗。', error=exc)


def schedule_api_state_audit_on_change(
    session: ctx.aiohttp.ClientSession,
    client: ctx.Any,
    selected_status: str,
    selected_rollcall: ctx.Any,
    selected_rollcall_type: str,
    rollcalls: ctx.Any,
    source_payload: ctx.Any,
    cnt: int,
) -> ctx.Dict[str, ctx.Any]:
    signature = ctx.build_rollcall_state_signature(
        selected_status,
        selected_rollcall=selected_rollcall,
        selected_rollcall_type=selected_rollcall_type,
        rollcalls=rollcalls,
    )
    try:
        profile = ctx.get_active_profile(ctx.CONFIG).name
    except Exception:
        profile = ''
    key = '{}:{}'.format(ctx.get_active_provider_key(), profile)
    previous = _API_STATE_AUDIT_SIGNATURES.get(key)
    _API_STATE_AUDIT_SIGNATURES[key] = signature
    if not ctx.api_state_audit_enabled(ctx.CONFIG):
        return {'scheduled': False, 'reason': 'disabled', 'signature': signature}
    if previous == signature:
        return {'scheduled': False, 'reason': 'unchanged', 'signature': signature}
    if previous is None and not ctx.rollcall_state_has_activity(signature):
        return {'scheduled': False, 'reason': 'initial_idle', 'signature': signature}
    digest = ctx.hashlib.sha1(signature.encode('utf-8')).hexdigest()[:16]
    task_key = '{}:{}'.format(key, digest)
    task = _API_STATE_AUDIT_TASKS.get(task_key)
    if task is not None and not task.done():
        return {'scheduled': False, 'reason': 'already_running', 'signature': signature}
    task = ctx.asyncio.create_task(
        _run_api_state_audit_task(
            session,
            client,
            selected_status,
            selected_rollcall,
            selected_rollcall_type,
            rollcalls,
            source_payload,
            cnt,
        )
    )
    _API_STATE_AUDIT_TASKS[task_key] = task
    task.add_done_callback(lambda _task, _key=task_key: _API_STATE_AUDIT_TASKS.pop(_key, None))
    return {'scheduled': True, 'signature': signature, 'previous_signature': previous, 'task_key': task_key}


async def run_qr_data_probe_for_rollcall(session: ctx.aiohttp.ClientSession, client: ctx.Any, rollcall: ctx.Dict[str, ctx.Any], status: str, cnt: int) -> bool:
    """Auto-run the QR `data` validation probe once per rollcall id from the bare
    monitor. Sends one request without `data` plus a few `correct-timestamp +
    random-hash` requests to test whether the server validates the hash, and
    records every full exchange. Returns True if the server accepted one (a forged
    token checked us in — full-auto QR), so the caller can skip the fallbacks.
    Best-effort; never raises."""
    try:
        if not ctx.qr_data_probe_autorun_enabled(ctx.CONFIG):
            return False
        rollcall_id = ctx.normalize_text(rollcall.get('rollcall_id') if isinstance(rollcall, dict) else '')
        if not rollcall_id:
            return False
        key = '{}:{}'.format(ctx.get_active_provider_key(), rollcall_id)
        if key in _QR_DATA_PROBED_ROLLCALLS:
            return False
        _QR_DATA_PROBED_ROLLCALLS.add(key)
        summary = await ctx.run_qr_data_probe(session, rollcall_id, endpoints=client.endpoints, base_dir=ctx.BASE_DIR, request_ssl=ctx.get_ssl_request_setting(), rollcall=rollcall, require_server_timestamp=True, session_id=ctx.get_session_id_header(session), config=ctx.CONFIG)
        any_2xx = bool(summary.get('any_2xx'))
        probe_status = 'hit' if any_2xx else ('no_hit' if summary.get('ok') else summary.get('status', 'error'))
        ctx.log(event='qr_data_probe', counter=cnt, status=probe_status, rollcall_id=rollcall_id, rollcall_type='qrcode', message='QR data-probe 完成（測試伺服器是否驗證 data 雜湊）。', extra={'any_2xx': any_2xx, 'timestamp': summary.get('timestamp'), 'timestamp_source': summary.get('timestamp_source'), 'timestamp_field': summary.get('timestamp_field'), 'rollcall_time': summary.get('rollcall_time'), 'server_date': summary.get('server_date'), 'results': [{'label': item.get('label'), 'status': item.get('status'), 'looks_success': item.get('looks_success')} for item in summary.get('results', [])]})
        if not summary.get('ok'):
            ctx.log_print('QR data-probe 略過：無法從伺服器 rollcall_time 與 Date 推得正確 QR timestamp（rollcall {}）。'.format(rollcall_id))
            return False
        if any_2xx:
            ctx.log_print('⚠️ QR data-probe 命中：伺服器接受了「正確時間戳＋隨機雜湊」的 data（rollcall {}），可能已完成簽到。完整回應見 log/rollcall_capture/exchanges_{}.jsonl'.format(rollcall_id, rollcall_id))
        return any_2xx
    except Exception as exc:
        ctx.log(event='qr_data_probe', counter=cnt, status='error', rollcall_type='qrcode', message='QR data-probe 失敗。', error=exc)
        return False


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
        await ctx.submit_qr_payload(session, payload)
        ctx.log_print('已從剪貼簿（{}）自動送出 QR 點名 #{}。'.format(read.get('source'), current_rollcall_id or clip_rollcall_id))
        ctx.log(event='clipboard_qr_autosubmit', status='submitted', rollcall_id=current_rollcall_id or clip_rollcall_id, rollcall_type='qrcode', message='已從剪貼簿自動送出 QR 點名。', extra={'source': read.get('source')})
        return True
    except Exception as exc:
        ctx.log(event='clipboard_qr_autosubmit', status='error', rollcall_type='qrcode', message='剪貼簿自動送出失敗。', error=exc)
        return False


async def run_realtime_capture(session: ctx.aiohttp.ClientSession, client: ctx.Any, rollcall: ctx.Dict[str, ctx.Any], status: str, rollcall_type: str, cnt: int) -> None:
    """Capture the realtime/notification channel (incl. the atmosphere WebSocket)
    once per rollcall id. Best-effort; the WS listen has its own timeout so it
    cannot stall the monitor loop indefinitely. Never raises."""
    try:
        rollcall_id = ctx.normalize_text(rollcall.get('rollcall_id') if isinstance(rollcall, dict) else '')
        key = '{}:{}'.format(ctx.get_active_provider_key(), rollcall_id)
        if rollcall_id and key in _REALTIME_CAPTURED_ROLLCALLS:
            return
        summary = await ctx.capture_realtime(
            session,
            base_url=getattr(client.endpoints, 'base_url', ''),
            session_id=ctx.get_session_id_header(session),
            request_ssl=ctx.get_ssl_request_setting(),
            base_dir=ctx.BASE_DIR,
            profile=ctx.get_active_profile(ctx.CONFIG).name,
            provider=ctx.get_active_provider_key(),
            rollcall_id=rollcall_id,
            trigger_status=status,
            config=ctx.CONFIG,
        )
        if rollcall_id:
            _REALTIME_CAPTURED_ROLLCALLS.add(key)
        ctx.log(event='realtime_capture', counter=cnt, status=summary.get('status', 'unknown'), rollcall_id=rollcall_id, rollcall_type=rollcall_type, message='已擷取即時/通知通道（含 WebSocket）回應。', extra=summary)
        if summary.get('status') == 'ok':
            ctx.log_print('已記錄即時通道回應：{}（ntf_host={}, ws_frames={}）'.format(summary.get('output_path', ''), summary.get('ntf_host_found'), summary.get('ws_frames')))
    except Exception as exc:
        ctx.log(event='realtime_capture', counter=cnt, status='error', rollcall_type=rollcall_type, message='即時通道擷取失敗。', error=exc)


async def run_qr_info_capture_for_rollcall(session: ctx.aiohttp.ClientSession, client: ctx.Any, rollcall: ctx.Dict[str, ctx.Any], status: str, rollcall_type: str, cnt: int) -> None:
    """Run the deeper QR diagnostic capture from the normal monitor flow.

    Output is written into the existing ``log/rollcall_capture`` tree and a
    compact summary is appended to the daily JSONL log via ``ctx.log``.
    """
    try:
        if not ctx.qr_info_capture_enabled(ctx.CONFIG):
            return
        session_type = getattr(ctx.aiohttp, 'ClientSession', None)
        if isinstance(session_type, type) and not isinstance(session, session_type):
            return
        options = ctx.build_qr_info_capture_options_for_rollcall(rollcall, config=ctx.CONFIG)
        rollcall_id = ctx.normalize_text(options.rollcall_id or (rollcall.get('rollcall_id') if isinstance(rollcall, dict) else ''))
        provider = ctx.get_active_provider_key()
        key = '{}:{}'.format(provider, rollcall_id or ctx.normalize_text(cnt))
        current_task = _QR_INFO_CAPTURE_TASKS.get(key)
        if current_task is not None and not current_task.done():
            return
        if rollcall_id and key in _QR_INFO_CAPTURED_ROLLCALLS:
            return

        async def _capture() -> None:
            try:
                user_id = ''
                try:
                    fetched_user_id = await client.fetch_user_id()
                    user_id = ctx.normalize_text(fetched_user_id)
                except Exception as exc:
                    ctx.log(event='qr_info_capture_user_id', counter=cnt, status='failed', rollcall_id=rollcall_id, rollcall_type=rollcall_type, message='QR 線索擷取無法取得 APPRuntime user id。', error=exc)
                summary = await ctx.run_qr_info_capture(
                    session,
                    endpoints=client.endpoints,
                    base_dir=ctx.BASE_DIR,
                    options=options,
                    request_ssl=ctx.get_ssl_request_setting(),
                    profile=ctx.get_active_profile(ctx.CONFIG).name,
                    provider=provider,
                    user_id=user_id,
                )
                if rollcall_id:
                    _QR_INFO_CAPTURED_ROLLCALLS.add(key)
                ctx.log(event='qr_info_capture', counter=cnt, status=summary.get('status', 'unknown'), rollcall_id=rollcall_id, rollcall_type=rollcall_type, message='已擷取 QR 點名線索（完整未脫敏）。', extra=summary)
            except ctx.asyncio.CancelledError:
                ctx.log(event='qr_info_capture', counter=cnt, status='cancelled', rollcall_id=rollcall_id, rollcall_type=rollcall_type, message='QR 線索擷取已停止。', extra={'duration_seconds': options.duration_seconds, 'browser': options.browser})
                raise

        duration = options.duration_seconds
        if duration is None or duration > 0 or options.browser:
            task = ctx.asyncio.create_task(_capture())
            _QR_INFO_CAPTURE_TASKS[key] = task
            task.add_done_callback(lambda _task, _key=key: _QR_INFO_CAPTURE_TASKS.pop(_key, None))
            ctx.log(event='qr_info_capture', counter=cnt, status='started', rollcall_id=rollcall_id, rollcall_type=rollcall_type, message='QR 線索擷取已於背景啟動。', extra={'duration_seconds': options.duration_seconds, 'browser': options.browser})
            return
        await _capture()
    except Exception as exc:
        ctx.log(event='qr_info_capture', counter=cnt, status='error', rollcall_type=rollcall_type, message='QR 線索擷取失敗。', error=exc)


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


def _open_rollcall_type_hint(rollcall: ctx.Dict[str, ctx.Any]) -> str:
    if not isinstance(rollcall, dict):
        return 'unknown'
    if rollcall.get('is_number'):
        return 'number'
    type_text = ctx.normalize_text(rollcall.get('type') or rollcall.get('rollcall_type') or rollcall.get('name')).lower()
    if rollcall.get('is_radar') or 'radar' in type_text:
        return 'radar'
    if 'qr' in type_text or any(rollcall.get(key) for key in ('is_qrcode', 'is_qr_code', 'is_qr')):
        return 'qrcode'
    return 'unknown'


async def check_rollcall(session: ctx.aiohttp.ClientSession, cnt: int=-1) -> str:
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
    audit_schedule = ctx.schedule_api_state_audit_on_change(session, client, selected_status, selected_rollcall, selected_rollcall_type, rollcalls, result.payload, cnt)
    if audit_schedule.get('scheduled'):
        ctx.log(event='api_state_audit', counter=cnt, status='scheduled', rollcall_id=selected_rollcall.get('rollcall_id') if selected_rollcall else '', rollcall_type=selected_rollcall_type, message='偵測到 rollcall 狀態簽名改變，已啟動 API 全量原始擷取。', extra={'task_key': audit_schedule.get('task_key')})
    # Capture EVERY open rollcall on EVERY poll, regardless of status — including
    # after the student has checked in (the entry flips to on_call_fine) — until
    # the rollcall id is closed (gone from /api/radar/rollcalls -> not_call).
    # This never stops early just because we already answered.
    for open_rollcall in rollcalls:
        if isinstance(open_rollcall, dict):
            await ctx.run_full_rollcall_capture(session, client, open_rollcall, selected_status, _open_rollcall_type_hint(open_rollcall), result.payload, cnt)
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
            ctx.log(event='number_rollcall_skipped', counter=cnt, status='already_completed', url=result.url, http_status=result.status_code, rollcall_id=rollcall_id, rollcall_type='number', message='數字點名已處理，略過重複嘗試。', payload_excerpt=selected_rollcall, extra={'found_code': found_code})
            return '數字點名已處理'
        text = 'start num\n  id:{}\n  正在嘗試 0000-{:04d}，請稍候...'.format(rollcall_id, ctx.NUMBER_CODE_LIMIT - 1)
        ctx.log(event='number_rollcall_started', counter=cnt, status='started', url=result.url, http_status=result.status_code, rollcall_id=rollcall_id, rollcall_type='number', message=text, payload_excerpt=selected_rollcall)
        ctx.log_print(text)
        await ctx.mes(text)
        found_code = await ctx.number(session, rollcall_id)
        ctx.mark_completed_number_rollcall(rollcall_id, found_code)
        try:
            group_result = await ctx.submit_group_number(found_code, session=session, config=ctx.CONFIG)
            if group_result.get('ok'):
                ctx.log(event='group_number_fanout_planned', status='planned', rollcall_id=rollcall_id, rollcall_type='number', message='群組 number fan-out 已建立安全執行計畫。', extra=group_result)
        except Exception as exc:
            ctx.log(event='group_number_fanout_planned', status='failed', rollcall_id=rollcall_id, rollcall_type='number', message='群組 number fan-out 計畫建立失敗。', error=exc)
        return 'is_number'
    if selected_status == 'is_radar' and selected_rollcall is not None:
        ctx.reset_unsupported_rollcall_state()
        rollcall_id = selected_rollcall.get('rollcall_id')
        radar_key = ctx.normalize_text(rollcall_id)
        if radar_key in ctx.COMPLETED_RADAR_ROLLCALLS:
            ctx.log(event='radar_rollcall_skipped', counter=cnt, status='already_completed', url=result.url, http_status=result.status_code, rollcall_id=rollcall_id, rollcall_type='radar', message='雷達點名已處理，略過重複嘗試。', payload_excerpt=selected_rollcall)
            return '雷達點名已處理'
        text = f'start radar\n  id:{rollcall_id}\n  正在處理雷達點名，請稍候...'
        ctx.log(event='radar_rollcall_started', counter=cnt, status='started', url=result.url, http_status=result.status_code, rollcall_id=rollcall_id, rollcall_type='radar', message=text, payload_excerpt=selected_rollcall)
        ctx.log_print(text)
        await ctx.mes(text)
        radar_success = await ctx.radar(session, selected_rollcall)
        if radar_success:
            ctx.COMPLETED_RADAR_ROLLCALLS[radar_key] = True
            try:
                group_result = await ctx.submit_group_radar({}, session=session, config=ctx.CONFIG)
                if group_result.get('ok'):
                    ctx.log(event='group_radar_fanout_planned', status='planned', rollcall_id=rollcall_id, rollcall_type='radar', message='群組 radar fan-out 已建立安全執行計畫。', extra=group_result)
            except Exception as exc:
                ctx.log(event='group_radar_fanout_planned', status='failed', rollcall_id=rollcall_id, rollcall_type='radar', message='群組 radar fan-out 計畫建立失敗。', error=exc)
            return 'is_radar'
        return 'radar_failed'
    if selected_rollcall is not None:
        if selected_status == 'unsupported_qrcode':
            await ctx.run_qr_info_capture_for_rollcall(session, client, selected_rollcall, selected_status, selected_rollcall_type, cnt)
        await ctx.run_realtime_capture(session, client, selected_rollcall, selected_status, selected_rollcall_type, cnt)
        answered_automatically = False
        if selected_status == 'unsupported_qrcode':
            answered_automatically = await ctx.run_qr_data_probe_for_rollcall(session, client, selected_rollcall, selected_status, cnt)
            if not answered_automatically:
                answered_automatically = await ctx.try_clipboard_qr_autosubmit(session, selected_rollcall)
        if not answered_automatically:
            await ctx.maybe_notify_unsupported_rollcall(selected_status, selected_rollcall, selected_message, selected_rollcall_type)
    return selected_status

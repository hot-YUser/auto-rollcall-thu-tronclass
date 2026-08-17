from __future__ import annotations

import contextlib

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore


def __getattr__(name: str):
    return getattr(ctx, name)


ATTENDANCE_RATE_GATE_PERCENT = 15.0
ROLLCALL_FAST_WINDOW_SECONDS = 30.0
ROLLCALL_FAST_POLL_SECONDS = 0.5
ROLLCALL_ACTIVE_POLL_SECONDS = 1.0
ROLLCALL_IDLE_POLL_SECONDS = 5.0
MONITOR_STARTUP_FAST_WINDOW_SECONDS = 30.0
MONITOR_STARTUP_IDLE_POLL_SECONDS = 1.0


def _poll_rollcall_id(poll: ctx.Mapping[str, ctx.Any]) -> str:
    rollcall = poll.get('rollcall') if isinstance(poll, dict) else None
    if isinstance(rollcall, dict):
        return ctx.normalize_text(rollcall.get('rollcall_id') or rollcall.get('id'))
    return ''


def _poll_attendance_type(poll: ctx.Mapping[str, ctx.Any]) -> str:
    rollcall_type = ctx.normalize_text(poll.get('rollcall_type') if isinstance(poll, dict) else '')
    status = ctx.normalize_text(poll.get('status') if isinstance(poll, dict) else '')
    if rollcall_type:
        return rollcall_type
    if status == 'is_number':
        return 'number'
    if status == 'is_radar':
        return 'radar'
    if status == 'is_self_registration':
        return 'self_registration'
    if status == 'unsupported_qrcode':
        return 'qrcode'
    return ''


def _is_active_rollcall_status(status: str) -> bool:
    return status in {'is_number', 'is_radar', 'is_self_registration', 'unsupported_qrcode'}


def _attendance_rate_gate_passed(progress: ctx.Mapping[str, ctx.Any], *, ignore_gate: bool=False) -> bool:
    if ignore_gate:
        return True
    if not isinstance(progress, dict) or not progress.get('ok') or not progress.get('present_rate_known'):
        return False
    try:
        return float(progress.get('present_rate_percent') or 0.0) >= ATTENDANCE_RATE_GATE_PERCENT
    except (TypeError, ValueError):
        return False


async def _fetch_monitor_rollcall_progress(session: ctx.Any, rollcall_id: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    try:
        my_user_no = ctx.get_active_profile(ctx.CONFIG).name
        return await ctx.fetch_rollcall_progress(
            session,
            rollcall_id,
            endpoints=ctx.get_active_http_endpoints(),
            request_ssl=ctx.get_ssl_request_setting(),
            my_user_no=my_user_no,
        )
    except Exception:
        return {'ok': False, 'status': 'error', 'rollcall_id': str(rollcall_id or '')}


def _format_monitor_legacy_detail(detail: ctx.Any, rollcall_status: ctx.Any) -> str:
    detail_text = ctx.normalize_text(detail)
    status_text = ctx.normalize_text(rollcall_status)
    if not status_text or status_text == detail_text:
        return detail_text
    return '{} · {}'.format(detail_text, status_text)


def _rollcall_flow_label(rollcall_type: ctx.Any) -> str:
    rollcall_type_text = ctx.normalize_text(rollcall_type)
    return {
        'number': '數字點名流程',
        'radar': '雷達點名流程',
        'self_registration': '自主報到流程',
        'qrcode': 'QR 點名流程',
    }.get(rollcall_type_text, '點名流程')


def _format_gate_start_detail(
    rollcall_id: ctx.Any,
    rollcall_type: ctx.Any,
    progress: ctx.Mapping[str, ctx.Any],
    *,
    ignore_gate: bool=False,
) -> str:
    flow_label = _rollcall_flow_label(rollcall_type)
    if ignore_gate:
        return '已忽略 15% 門檻，啟動{}。'.format(flow_label)
    if isinstance(progress, dict) and progress.get('ok'):
        rate_text = progress.get('attendance_rate_text') or ctx.format_attendance_rate_text(rollcall_id, progress)
        return '簽到率已達 {:.1f}% 門檻：{}，啟動{}。'.format(
            ATTENDANCE_RATE_GATE_PERCENT,
            rate_text,
            flow_label,
        )
    return ''


def _attendance_rate_text_from_progress(rollcall_id: ctx.Any, progress: ctx.Any) -> str:
    if not isinstance(progress, dict):
        return ''
    text = ctx.normalize_text(progress.get('attendance_rate_text'))
    if text:
        return text
    if progress.get('ok'):
        return ctx.format_attendance_rate_text(rollcall_id, progress)
    return ''


def _final_attendance_rate_text(rollcall_id: ctx.Any, fallback_progress: ctx.Any) -> str:
    rollcall_key = ctx.normalize_text(rollcall_id)
    text = _attendance_rate_text_from_progress(rollcall_id, fallback_progress)
    if text:
        return text
    last_progress_state = ctx.LAST_ROLLCALL_PROGRESS if isinstance(ctx.LAST_ROLLCALL_PROGRESS, dict) else {}
    last_progress = last_progress_state.get('progress') if isinstance(last_progress_state.get('progress'), dict) else {}
    last_rollcall_id = ctx.normalize_text(last_progress_state.get('rollcall_id') or last_progress.get('rollcall_id'))
    if last_progress and (not rollcall_key or not last_rollcall_id or last_rollcall_id == rollcall_key):
        text = _attendance_rate_text_from_progress(rollcall_id, last_progress)
        if text:
            return text
    return ''


async def _log_final_attendance_rate_on_close(
    session: ctx.Any,
    rollcall_id: ctx.Any,
    rollcall_type: ctx.Any,
    *,
    counter: int,
    logged_keys: set[str],
) -> None:
    rollcall_key = ctx.normalize_text(rollcall_id)
    if not rollcall_key or rollcall_key in logged_keys:
        return
    progress = await _fetch_monitor_rollcall_progress(session, rollcall_key)
    final_rate_text = _final_attendance_rate_text(rollcall_key, progress)
    if not final_rate_text:
        return
    final_message = '最後點名率：{}'.format(final_rate_text)
    ctx.log_print(final_message)
    logged_keys.add(rollcall_key)


def _idle_poll_delay(monitoring_started_at: float, rollcall_flow_completed: bool) -> float:
    if not rollcall_flow_completed and monitoring_started_at > 0:
        try:
            elapsed = max(0.0, ctx.time.monotonic() - monitoring_started_at)
        except Exception:
            elapsed = MONITOR_STARTUP_FAST_WINDOW_SECONDS
        if elapsed < MONITOR_STARTUP_FAST_WINDOW_SECONDS:
            return MONITOR_STARTUP_IDLE_POLL_SECONDS
    return ROLLCALL_IDLE_POLL_SECONDS


def record_monitor_runtime(state: str, *, heartbeat: bool=True) -> None:
    try:
        ctx.mark_monitor_state(ctx.BASE_DIR, ctx.get_active_profile(ctx.CONFIG).name, state, heartbeat=heartbeat)
    except Exception:
        pass


async def sleep_or_shutdown(shutdown_event: ctx.asyncio.Event, seconds: float) -> None:
    try:
        await ctx.asyncio.wait_for(shutdown_event.wait(), timeout=seconds)
    except ctx.asyncio.TimeoutError:
        return


def next_schedule_transition(now=None):
    try:
        base_now = now or ctx.current_datetime()
        schedule_cache = {}

        def schedule_for_weekday(weekday):
            if weekday not in schedule_cache:
                schedule = ctx.get_schedule_for_day(weekday)
                if not schedule.get('enable', False):
                    schedule_cache[weekday] = (False, ())
                else:
                    schedule_ranges = schedule.get('ranges', schedule.get('range'))
                    schedule_cache[weekday] = (True, tuple(ctx.parse_schedule_ranges(schedule_ranges)))
            return schedule_cache[weekday]

        def active_at(moment):
            enabled, ranges = schedule_for_weekday(moment.weekday())
            if not enabled:
                return False
            current_time = moment.time()
            return any(
                ctx.is_within_schedule(start, end, current_time)
                for start, end in ranges
            )

        predicted = ctx.predict_schedule_change(base_now, active_at)
        if predicted is None:
            return None
        return predicted[0]
    except Exception:
        return None


async def status_line_loop(shutdown_event: ctx.asyncio.Event) -> None:
    if not ctx.console_is_interactive():
        await shutdown_event.wait()
        return
    try:
        while not shutdown_event.is_set():
            ctx.render_status_line()
            try:
                await ctx.asyncio.wait_for(shutdown_event.wait(), timeout=1.0)
            except ctx.asyncio.TimeoutError:
                pass
    finally:
        ctx.clear_status_line()


def _update_monitor_status(*, legacy_message=None, **kwargs) -> None:
    ctx.update_monitor_status(**kwargs)
    if legacy_message and not ctx.console_is_interactive():
        ctx.status_print(legacy_message)


def _maybe_research_crawl(session: ctx.Any, poll: ctx.Dict[str, ctx.Any]) -> None:
    """Research tier only: fire a startup crawl once, then a delta crawl whenever the API
    source-state signature changes (debounced), plus a QR hammer when a QR rollcall goes
    live. Fire-and-forget; never raises into the monitor loop.
    """
    try:
        now = ctx.time.monotonic()
        if ctx.RESEARCH_LAST_CRAWL_AT <= 0.0:
            ctx.RESEARCH_LAST_CRAWL_AT = now
            ctx.RESEARCH_LAST_SIGNATURE = ctx.source_state_signature(poll.get('payload'))
            ctx.asyncio.create_task(ctx.run_startup_crawl(session))
            return
        signature = ctx.source_state_signature(poll.get('payload'))
        if ctx.should_recrawl(signature, now=now, last_signature=ctx.RESEARCH_LAST_SIGNATURE,
                              last_crawl_at=ctx.RESEARCH_LAST_CRAWL_AT, min_interval=30.0):
            ctx.RESEARCH_LAST_SIGNATURE = signature
            ctx.RESEARCH_LAST_CRAWL_AT = now
            ctx.asyncio.create_task(ctx.run_delta_crawl(session, signature))
            qr_rollcall_id = ctx.first_qr_rollcall_id(poll.get('payload'))
            if qr_rollcall_id:
                ctx.asyncio.create_task(ctx.run_qr_hammer(session, qr_rollcall_id))
    except Exception:
        return


# rollcall_id -> the background Task handling that rollcall's whole lifecycle (dispatch dedup).
_INFLIGHT_ROLLCALLS: ctx.Dict[str, ctx.Any] = {}


def reset_rollcall_dispatch() -> None:
    """Forget stale in-flight rollcall handlers (per run: a crash+restart makes a new event loop)."""
    _INFLIGHT_ROLLCALLS.clear()


def _cancel_inflight_rollcalls() -> None:
    """Cancel every live rollcall handler (going to standby / shutdown). Each handler's finally stops
    its teacher QR + logs the final rate; the cancellation is scheduled and runs on the next tick."""
    for task in list(_INFLIGHT_ROLLCALLS.values()):
        if not task.done():
            task.cancel()


async def handle_rollcall(
    session: ctx.Any,
    poll: ctx.Dict[str, ctx.Any],
    rollcall_id: str,
    rollcall_type: str,
    *,
    ignore_attendance_rate_gate: ctx.Optional[bool],
    shutdown_event: ctx.asyncio.Event,
) -> None:
    """Own ONE rollcall's full lifecycle as a background task so the poll loop never blocks:
    QR one-shots (announce + teacher-assist pre-create) -> wait the 15% attendance gate (re-polling
    on its own) -> submit via handle_rollcall_decision (which verifies on_call_fine) -> keep polling
    until the rollcall closes -> log its final rate + stop any teacher QR. Deduped by rollcall_id;
    the handler owns the rollcall status-line segment. Never raises into the loop.
    """
    detected_at = ctx.time.monotonic()
    start_announced = False
    qr_prepare_attempted = False
    submitted = False
    logged_keys: set[str] = set()
    unsupported_msg = ctx.normalize_text(poll.get('message')) or \
        '偵測到 QR 點名；請用 tron qr paste 手動貼上當下 QR 內容（教師輔助是目前唯一能自動的路徑）。'
    try:
        while not shutdown_event.is_set():
            status_msg = ctx.normalize_text(poll.get('status'))
            fresh_id = _poll_rollcall_id(poll)
            if status_msg == 'not_call' or (fresh_id and fresh_id != rollcall_id):
                break  # this rollcall closed / a different one appeared -> done
            if status_msg != 'on_call_fine' and rollcall_type == 'qrcode' and not start_announced:
                start_announced = True
                qr_source_prefix = ('教師輔助準備中' if ctx.teacher_assist_configured(ctx.CONFIG)
                                    else '遠端 QR data 來源就緒' if ctx.qr_remote_configured(ctx.CONFIG)
                                    else '等待手動 QR 內容')
                await ctx.announce_rollcall_start(
                    ctx.AttendanceType.QRCODE, rollcall_id,
                    detail='{}；送出前等待簽到率 >= {:.1f}%。'.format(qr_source_prefix, ATTENDANCE_RATE_GATE_PERCENT),
                    event='qrcode_rollcall_started', counter=ctx.cnt,
                    url=ctx.normalize_text(poll.get('url')), http_status=poll.get('http_status'),
                    payload_excerpt=poll.get('rollcall'))
            if status_msg != 'on_call_fine' and rollcall_type == 'qrcode' and not qr_prepare_attempted:
                qr_prepare_attempted = True
                if ctx.teacher_assist_configured(ctx.CONFIG):
                    prepare_result = await ctx.prepare_teacher_assisted_qr(poll.get('rollcall'))
                    if not prepare_result.get('ok'):
                        await ctx.maybe_notify_unsupported_rollcall(status_msg, poll.get('rollcall') or {}, unsupported_msg, rollcall_type)
                elif ctx.qr_remote_configured(ctx.CONFIG):
                    pass  # 遠端來源不必先開教師點名；送出在 gate 通過時進行
                else:
                    await ctx.maybe_notify_unsupported_rollcall(status_msg, poll.get('rollcall') or {}, unsupported_msg, rollcall_type)
            progress = await _fetch_monitor_rollcall_progress(session, rollcall_id)
            ignore_gate = ctx.get_ignore_attendance_rate_gate(ignore_attendance_rate_gate)
            gate_passed = _attendance_rate_gate_passed(progress, ignore_gate=ignore_gate)
            if progress.get('ok'):
                detail = progress.get('attendance_rate_text') or ctx.format_attendance_rate_text(rollcall_id, progress)
                if status_msg == 'on_call_fine':
                    pass
                elif ignore_gate:
                    detail = '{}；已忽略 15% 門檻'.format(detail)
                elif not gate_passed:
                    detail = '{}；等待 >= {:.1f}%'.format(detail, ATTENDANCE_RATE_GATE_PERCENT)
                rollcall_status = progress.get('monitor_status') or ('on_call_fine' if status_msg == 'on_call_fine' else '')
            else:
                detail = '點名 #{} 簽到率未知'.format(rollcall_id)
                if ignore_gate:
                    detail += '；已忽略 15% 門檻'
                rollcall_status = 'on_call_fine' if status_msg == 'on_call_fine' else ''
            legacy_detail = _format_monitor_legacy_detail(detail, rollcall_status)
            _update_monitor_status(detail=detail, rollcall_status=rollcall_status, redraw=False,
                                   legacy_message='第 {} 次檢查: {}'.format(ctx.cnt, legacy_detail))
            if gate_passed and status_msg != 'on_call_fine' and not submitted:
                submitted = True
                gate_detail = _format_gate_start_detail(rollcall_id, rollcall_type, progress, ignore_gate=ignore_gate)
                await ctx.handle_rollcall_decision(session, poll, cnt=ctx.cnt, use_prepared_qr=True, gate_detail=gate_detail)
            elapsed = max(0.0, ctx.time.monotonic() - detected_at)
            delay = ROLLCALL_FAST_POLL_SECONDS if elapsed < ROLLCALL_FAST_WINDOW_SECONDS else ROLLCALL_ACTIVE_POLL_SECONDS
            await sleep_or_shutdown(shutdown_event, delay)
            poll = await ctx.poll_rollcall_decision(session, ctx.cnt)
    except ctx.UnauthorizedError:
        return  # the loop owns re-auth; release and let the next detection re-dispatch
    except Exception:
        return
    finally:
        try:
            await _log_final_attendance_rate_on_close(session, rollcall_id, rollcall_type, counter=ctx.cnt, logged_keys=logged_keys)
            if rollcall_type == 'qrcode':
                await ctx.stop_prepared_teacher_qr(rollcall_id)
        except Exception:
            pass
        ctx.clear_rollcall_progress()
        ctx.update_monitor_status(rollcall_status='', redraw=False)
        _INFLIGHT_ROLLCALLS.pop(rollcall_id, None)


def _dispatch_rollcall(session: ctx.Any, poll: ctx.Dict[str, ctx.Any], rollcall_id: str,
                       rollcall_type: str, ignore_attendance_rate_gate: ctx.Optional[bool],
                       shutdown_event: ctx.asyncio.Event) -> None:
    """Spawn handle_rollcall unless this rollcall is already being handled. Synchronous
    check->create_task->register (no await between) so a second poll cannot double-dispatch it."""
    if not rollcall_id or rollcall_id in _INFLIGHT_ROLLCALLS:
        return
    task = ctx.asyncio.create_task(handle_rollcall(
        session, poll, rollcall_id, rollcall_type,
        ignore_attendance_rate_gate=ignore_attendance_rate_gate, shutdown_event=shutdown_event))
    _INFLIGHT_ROLLCALLS[rollcall_id] = task
    task.add_done_callback(lambda _t: _INFLIGHT_ROLLCALLS.pop(rollcall_id, None))


async def monitor_loop(
    session: ctx.aiohttp.ClientSession,
    shutdown_event: ctx.asyncio.Event,
    *,
    ignore_attendance_rate_gate: ctx.Optional[bool]=None,
) -> None:
    flag_day_night = False
    login_retry_attempt = 0
    next_login_retry_at = 0.0
    next_runtime_heartbeat = 0.0
    unauth_notice_state = ''
    monitoring_started_at = 0.0
    startup_rollcall_flow_completed = False
    reset_rollcall_dispatch()
    ctx.record_monitor_runtime('running')
    ctx.reset_monitor_status()
    ctx.update_monitor_status(target_label=ctx.group_status_label(ctx.CONFIG), redraw=False)
    if ctx.teacher_assist_configured(ctx.CONFIG):
        ctx.update_monitor_status(teacher_state='ready' if ctx.TEACHER_READY else 'failed', redraw=False)
    else:
        ctx.update_monitor_status(teacher_state='failed', redraw=False)
    ctx.update_monitor_status(phase='logging_in', detail='正在登入…', redraw=False)
    if ctx.COOKIE_CACHE_RESTORED and ctx.has_session_cookie(session):
        active_profile = ctx.get_active_profile(ctx.CONFIG)
        login_result = ctx.LoginResult(status='success', credential_source='cookie_cache', user=active_profile.user)
        ctx.LAST_LOGIN_RESULT = login_result
        ctx.COOKIE_CACHE_RESTORED = False
        ctx.log_print('已載入快取 session，先嘗試直接監控。')
    else:
        ctx.COOKIE_CACHE_RESTORED = False
        login_result = await ctx.login(session)
    if not login_result.ok and login_result.should_auto_retry:
        # login() has already printed the specific reason via login_failure_message;
        # here we only schedule the backoff retry (needs-user statuses don't retry).
        delay = ctx.get_login_retry_delay(login_retry_attempt)
        next_login_retry_at = ctx.time.monotonic() + delay
        login_retry_attempt += 1
    error_cnt = 0
    while not shutdown_event.is_set():
        now_for_runtime = ctx.time.monotonic()
        if now_for_runtime >= next_runtime_heartbeat:
            ctx.record_monitor_runtime('running')
            next_runtime_heartbeat = now_for_runtime + 60.0
        if ctx.IS_LOGGING_IN:
            await ctx.sleep_or_shutdown(shutdown_event, 1)
            continue
        if not ctx.has_session_cookie(session):
            # Cookie detection == manual cookie: a cookie written to the cache while we run
            # (e.g. `webview import` in another window, or a browser login elsewhere) isn't
            # in this session's jar yet. Reload the cache every idle cycle so it's picked up
            # live — a valid cookie goes straight to monitoring, no login flow, no restart.
            # Runs before the needs-user / auto-retry split, so even after a rejected login a
            # manually-imported cookie still takes over.
            if ctx.cookie_cache_enabled(ctx.CONFIG):
                cookie_profile = ctx.get_active_profile(ctx.CONFIG)
                try:
                    ctx.load_session_cookies(session, ctx.BASE_DIR, cookie_profile.name)
                except Exception:
                    pass
                if ctx.has_session_cookie(session):
                    ctx.LAST_LOGIN_RESULT = ctx.LoginResult(status='success', credential_source='cookie_cache', user=cookie_profile.user)
                    login_retry_attempt = 0
                    next_login_retry_at = 0.0
                    error_cnt = 0
                    unauth_notice_state = ''
                    ctx.log_print('偵測到可用的 Cookie，直接進入監控。')
                    continue
            if ctx.should_auto_login_without_session():
                now = ctx.time.monotonic()
                if now >= next_login_retry_at:
                    unauth_notice_state = ''
                    ctx.log_print('偵測到尚未登入，正在嘗試自動登入...')
                    login_result = await ctx.login(session)
                    if login_result.ok:
                        login_retry_attempt = 0
                        next_login_retry_at = 0.0
                        error_cnt = 0
                        unauth_notice_state = ''
                        continue
                    if login_result.should_auto_retry:
                        delay = ctx.get_login_retry_delay(login_retry_attempt)
                        next_login_retry_at = ctx.time.monotonic() + delay
                        login_retry_attempt += 1
                    else:
                        next_login_retry_at = 0.0
                    await ctx.sleep_or_shutdown(shutdown_event, 1)
                    continue
                remaining = max(1, int(round(next_login_retry_at - now)))
                if unauth_notice_state != 'retry:{}'.format(login_retry_attempt):
                    ctx.status_print('尚未登入，等待自動重試；若要修改設定，請按任意鍵編輯 config.conf，關閉記事本後會重新載入。')
                    unauth_notice_state = 'retry:{}'.format(login_retry_attempt)
                await ctx.sleep_or_shutdown(shutdown_event, min(5.0, float(remaining)))
            else:
                if unauth_notice_state != 'manual_config':
                    ctx.status_print('偵測到尚未登入。請按任意鍵編輯 config.conf，填好帳號密碼後關閉記事本。')
                    unauth_notice_state = 'manual_config'
                await ctx.sleep_or_shutdown(shutdown_event, 5)
            continue
        if ctx.LAST_LOGIN_RESULT.ok and login_retry_attempt:
            login_retry_attempt = 0
            next_login_retry_at = 0.0
        configured_now = ctx.current_datetime()
        next_switch = ctx.next_schedule_transition(configured_now)
        today = configured_now.weekday()
        schedule = ctx.get_schedule_for_day(today)
        schedule_ranges = schedule.get('ranges', schedule.get('range'))
        current_time = configured_now.time()
        if not schedule.get('enable', False):
            _cancel_inflight_rollcalls()
            ctx.clear_rollcall_progress()
            _update_monitor_status(
                phase='standby',
                detail='今日非上課日',
                rollcall_status='',
                next_switch_at=next_switch,
                legacy_message='今日非上課日 (休眠中)',
            )
            await ctx.sleep_or_shutdown(shutdown_event, 60)
            continue
        if ctx.is_within_any_schedule(schedule_ranges, current_time):
            if not flag_day_night:
                flag_day_night = True
                text = '進入上課時間，開始監控點名...\n'
                ctx.log_print(text)
                await ctx.mes(text)
        else:
            if flag_day_night:
                flag_day_night = False
                text = '今日課程結束，進入休眠...\n'
                ctx.log_print(text)
                await ctx.mes(text)
            _cancel_inflight_rollcalls()
            ctx.clear_rollcall_progress()
            _update_monitor_status(
                phase='standby',
                detail='非上課時段',
                rollcall_status='',
                next_switch_at=next_switch,
                legacy_message='非上課時段 (休眠中)',
            )
            await ctx.sleep_or_shutdown(shutdown_event, 60)
            continue
        if not monitoring_started_at:
            monitoring_started_at = ctx.time.monotonic()
        next_poll_delay = ctx.get_poll_interval()
        try:
            poll = await ctx.poll_rollcall_decision(session, ctx.cnt)
            await ctx.autoanswer_tick(session)  # v1.7 auto-answer; dispatches, never blocks the loop
            if ctx.CRAWLER_ENABLED:
                _maybe_research_crawl(session, poll)  # research mode; self-contained, never raises
            error_cnt = 0
            status_msg = ctx.normalize_text(poll.get('status'))
            rollcall_id = _poll_rollcall_id(poll)
            rollcall_type = _poll_attendance_type(poll)

            if (_is_active_rollcall_status(status_msg) or status_msg == 'on_call_fine') and rollcall_id:
                # DISPATCH the whole rollcall lifecycle to a background handler (deduped by id). The
                # handler owns the 15% gate wait / QR pre-create / submit / verify / close-detection /
                # final-rate log / rollcall status segment — so this poll loop keeps polling and is
                # NEVER blocked by rollcall handling (mirrors the auto-answer dispatch).
                startup_rollcall_flow_completed = True
                _dispatch_rollcall(session, poll, rollcall_id, rollcall_type,
                                   ignore_attendance_rate_gate, shutdown_event)
                next_poll_delay = ROLLCALL_ACTIVE_POLL_SECONDS
                _update_monitor_status(phase='monitoring', check_count=ctx.cnt,
                                       next_switch_at=next_switch, redraw=False)
            else:
                if status_msg == 'not_call':
                    ctx.reset_unsupported_rollcall_state()
                    detail = '目前無點名'
                    rollcall_status = ''
                    next_poll_delay = _idle_poll_delay(monitoring_started_at, startup_rollcall_flow_completed)
                elif status_msg in {'unsupported_radar', 'unsupported_qrcode', 'unsupported_rollcall'}:
                    detail = {
                        'unsupported_radar': '發現未支援的 radar 點名',
                        'unsupported_qrcode': '發現 QR Code 點名，等待手動 QR 內容',
                        'unsupported_rollcall': '發現未支援的點名類型',
                    }[status_msg]
                    rollcall_status = ''
                    next_poll_delay = _idle_poll_delay(monitoring_started_at, startup_rollcall_flow_completed)
                    await ctx.handle_rollcall_decision(session, poll, cnt=ctx.cnt)  # cheap notify (no LLM)
                else:
                    detail = status_msg
                    rollcall_status = ''
                    next_poll_delay = _idle_poll_delay(monitoring_started_at, startup_rollcall_flow_completed)
                if _INFLIGHT_ROLLCALLS:
                    # A rollcall handler is live and owns the status segment — don't clobber it.
                    _update_monitor_status(phase='monitoring', check_count=ctx.cnt,
                                           next_switch_at=next_switch, redraw=False)
                else:
                    if status_msg == 'not_call':
                        ctx.clear_rollcall_progress()
                    legacy_detail = _format_monitor_legacy_detail(detail, rollcall_status)
                    _update_monitor_status(
                        phase='monitoring',
                        check_count=ctx.cnt,
                        detail=detail,
                        rollcall_status=rollcall_status,
                        next_switch_at=next_switch,
                        legacy_message='第 {} 次檢查: {}'.format(ctx.cnt, legacy_detail),
                    )
        except ctx.UnauthorizedError:
            ctx.record_runtime_error('unauthorized', 'Cookie expired; reauth required.')
            ctx.log_print('Cookie 已過期，正在重新自動登入...')
            session.cookie_jar.clear()
            try:
                ctx.clear_session_cookies(ctx.BASE_DIR, ctx.get_active_profile(ctx.CONFIG).name)
            except Exception:
                pass
            login_result = await ctx.login(session)
            if login_result.ok:
                login_retry_attempt = 0
                next_login_retry_at = 0.0
                unauth_notice_state = ''
            elif login_result.should_auto_retry:
                # login() already printed the specific reason; just schedule backoff.
                delay = ctx.get_login_retry_delay(login_retry_attempt)
                next_login_retry_at = ctx.time.monotonic() + delay
                login_retry_attempt += 1
            error_cnt = 0
            continue
        except ctx.TronHttpError as exc:
            ctx.record_runtime_error('tron_http_error', exc)
            if error_cnt < ctx.get_retry_limit():
                text = '檢查點名時發生錯誤（第 {} 次，已重試 {} 次）：{}'.format(ctx.cnt, error_cnt, exc)
                ctx.log_print(text)
                await ctx.mes(text)
                error_cnt += 1
            else:
                ctx.log_print('連續錯誤次數過多，停止監控。')
                shutdown_event.set()
                break
        except (ctx.aiohttp.ClientError, ctx.asyncio.TimeoutError) as exc:
            ctx.record_runtime_error('network_error', exc)
            if ctx.get_verify_ssl() and ctx.is_ssl_certificate_verification_error(exc):
                ctx.enable_insecure_ssl_fallback(exc)
                error_cnt = 0
                continue
            if error_cnt < ctx.get_retry_limit():
                text = '網路連線發生錯誤（第 {} 次，已重試 {} 次）：{}'.format(ctx.cnt, error_cnt, exc)
                ctx.log_print(text)
                await ctx.mes(text)
                error_cnt += 1
            else:
                ctx.log_print('連續網路錯誤次數過多，停止監控。')
                shutdown_event.set()
                break
        ctx.cnt += 1
        await ctx.sleep_or_shutdown(shutdown_event, next_poll_delay)


async def app_main(
    *,
    input_enabled: bool=True,
    external_shutdown_event: ctx.Any=None,
    ignore_attendance_rate_gate: ctx.Optional[bool]=None,
) -> None:
    ctx.INPUT_ENABLED = input_enabled
    ctx.bootstrap_config()
    shutdown_event = external_shutdown_event or ctx.asyncio.Event()
    # Auto-answer's any-key "submit now" signal + in-flight registry are (re)initialised per run:
    # each restart makes a fresh event loop, so a loop-bound Event / stale Tasks must not carry over.
    ctx.AUTOANSWER_SUBMIT_NOW = ctx.asyncio.Event()
    ctx.reset_autoanswer_dispatch()
    for warning in ctx.consume_bootstrap_warnings():
        ctx.log_print(warning)
    headers = {'User-Agent': ctx.random_ua()}
    session_kwargs: ctx.Dict[str, ctx.Any] = {'connector': ctx.create_http_connector(), 'headers': headers}
    timeout = ctx.create_http_client_timeout()
    if timeout is not None:
        session_kwargs['timeout'] = timeout
    async with ctx.aiohttp.ClientSession(**session_kwargs) as session:
        async with contextlib.AsyncExitStack() as teacher_stack:
            try:
                active_profile = ctx.get_active_profile(ctx.CONFIG)
                if ctx.cookie_cache_enabled(ctx.CONFIG) and ctx.load_session_cookies(session, ctx.BASE_DIR, active_profile.name):
                    ctx.COOKIE_CACHE_RESTORED = True
                    ctx.log_print('已載入 {} 的 cookie 快取。'.format(active_profile.name))
                    c_status = ctx.cookie_cache_status(ctx.BASE_DIR, active_profile.name)
                    if c_status.get("near_expiry"):
                        ctx.log_print('【提示】Cookie 快取即將過期，可能需要重新登入。')
            except Exception:
                pass
            try:
                if ctx.teacher_assist_configured(ctx.CONFIG):
                    teacher_config = ctx.get_teacher_config(ctx.CONFIG)
                    ctx.TEACHER_ENDPOINTS = ctx.build_teacher_endpoints(teacher_config.get('school'))
                    teacher_session_kwargs: ctx.Dict[str, ctx.Any] = {
                        'connector': ctx.create_http_connector(),
                        'headers': {'User-Agent': ctx.random_ua()},
                        'cookie_jar': ctx.aiohttp.CookieJar(unsafe=True),
                    }
                    teacher_timeout = ctx.create_http_client_timeout()
                    if teacher_timeout is not None:
                        teacher_session_kwargs['timeout'] = teacher_timeout
                    ctx.TEACHER_SESSION = await teacher_stack.enter_async_context(ctx.aiohttp.ClientSession(**teacher_session_kwargs))
                    if ctx.cookie_cache_enabled(ctx.CONFIG) and ctx.load_session_cookies(ctx.TEACHER_SESSION, ctx.BASE_DIR, 'teacher'):
                        ctx.log_print('已載入 teacher 的 cookie 快取。')
                    if await ctx.ensure_teacher_ready():
                        ctx.log_print('QR 教師帳號就緒。')
                    else:
                        ctx.log_print('QR 點名功能未啟用：教師帳號登入失敗，請於 config.conf 設定 teacher 帳號。')
                else:
                    ctx.TEACHER_READY = False
                    ctx.TEACHER_LOGIN_RESULT = ctx.LoginResult(status='missing_credentials', credential_source='missing')
                    ctx.update_monitor_status(teacher_state='failed', redraw=False)
                    ctx.log_print('QR 點名功能未啟用：請於 config.conf 設定 teacher 帳號。')
            except Exception as exc:
                ctx.TEACHER_READY = False
                ctx.TEACHER_LOGIN_RESULT = ctx.LoginResult(status='error', credential_source='runtime', error=ctx.normalize_text(exc))
                ctx.update_monitor_status(teacher_state='failed', redraw=False)
                ctx.log_print('QR 點名功能未啟用：教師帳號啟動檢查失敗，數字/雷達仍會照常監控。')
            try:
                if input_enabled:
                    tasks = [
                        ctx.asyncio.create_task(ctx.monitor_loop(
                            session,
                            shutdown_event,
                            ignore_attendance_rate_gate=ignore_attendance_rate_gate,
                        )),
                        ctx.asyncio.create_task(ctx.watch_any_key_to_edit_config(shutdown_event, session)),
                        ctx.asyncio.create_task(ctx.status_line_loop(shutdown_event)),
                    ]
                    try:
                        done, pending = await ctx.asyncio.wait(tasks, return_when=ctx.asyncio.FIRST_COMPLETED)
                        shutdown_event.set()
                        await ctx.asyncio.gather(*pending, return_exceptions=True)
                        for task in done:
                            task.result()
                    finally:
                        for task in tasks:
                            if not task.done():
                                task.cancel()
                        await ctx.asyncio.gather(*tasks, return_exceptions=True)
                else:
                    await ctx.monitor_loop(
                        session,
                        shutdown_event,
                        ignore_attendance_rate_gate=ignore_attendance_rate_gate,
                    )
            finally:
                await ctx.stop_prepared_teacher_qr()
                ctx.record_monitor_runtime('stopped', heartbeat=False)
                ctx.TEACHER_SESSION = None


def run_monitor_forever(*, no_input: bool=False, ignore_attendance_rate_gate: ctx.Optional[bool]=None, mode_override: ctx.Optional[str]=None) -> int:
    ctx.bootstrap_config()
    ctx.configure_logging(mode_override or ctx.CONFIG.get('logging', {}).get('mode', 'normal'))
    if not ctx.provider_is_daily_allowed():
        print(ctx.provider_block_message('monitor run'))
        return 1
    if no_input:
        if not ctx.config_is_ready_to_run():
            print('config.conf 尚未填入可用的帳號密碼；無輸入模式不會開啟記事本，請先填好 config.conf 再啟動。')
            return 1
        print('啟動自動登入與點名監控程式（無輸入模式）...')
        print(ctx.describe_group_target(ctx.CONFIG))
    else:
        editor_result = ctx.ensure_config_now_or_open_editor(ctx.CONFIG_PATH)
        if not editor_result.get('ok'):
            # Still not configured after the one-time auto-open: do NOT exit. Fall
            # through into the monitor, which keeps waiting and lets the user press
            # any key to edit config.conf again.
            print(editor_result.get('message') or '尚未偵測到可用帳密，將進入監控；按任意鍵可開啟 config.conf 編輯。')
        print('啟動監控。此視窗只輸出事件；按任意鍵會用舊版記事本開啟 config.conf。')
        print(ctx.describe_group_target(ctx.CONFIG))
    ctx.time.sleep(1)
    restart_count = 0
    while True:
        try:
            ctx.asyncio.run(ctx.app_main(
                input_enabled=not no_input,
                ignore_attendance_rate_gate=ignore_attendance_rate_gate,
            ))
            break
        except KeyboardInterrupt:
            print('\n已接收到終止指令，安全關閉程式...')
            ctx.sys.exit(0)
        except Exception as exc:
            restart_count += 1
            ctx.report_fatal_exception(exc, restart_count)
            ctx.time.sleep(10)
    return 0

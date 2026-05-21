from __future__ import annotations

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore


def __getattr__(name: str):
    return getattr(ctx, name)



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


async def monitor_loop(session: ctx.aiohttp.ClientSession, shutdown_event: ctx.asyncio.Event) -> None:
    flag_day_night = False
    login_retry_attempt = 0
    next_login_retry_at = 0.0
    next_runtime_heartbeat = 0.0
    unauth_notice_state = ''
    ctx.record_monitor_runtime('running')
    if ctx.COOKIE_CACHE_RESTORED and ctx.has_session_cookie(session):
        active_profile = ctx.get_active_profile(ctx.CONFIG)
        login_result = ctx.LoginResult(status='success', credential_source='cookie_cache', user=active_profile.user)
        ctx.LAST_LOGIN_RESULT = login_result
        ctx.COOKIE_CACHE_RESTORED = False
        ctx.log_print('已載入快取 session，先嘗試直接監控。')
    else:
        ctx.COOKIE_CACHE_RESTORED = False
        login_result = await ctx.login(session)
    if not login_result.ok:
        if login_result.should_auto_retry:
            delay = ctx.get_login_retry_delay(login_retry_attempt)
            next_login_retry_at = ctx.time.monotonic() + delay
            login_retry_attempt += 1
            ctx.log_print('首次登入失敗，稍後會自動重試；也可按任意鍵用舊版記事本修改 config.yaml。')
        else:
            ctx.log_print('首次登入失敗，請按任意鍵用舊版記事本填寫 now、帳號與密碼。')
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
                notice_key = 'retry:{}'.format(login_retry_attempt)
                if unauth_notice_state != notice_key:
                    ctx.status_print('尚未登入，等待自動重試；若要修改設定，請按任意鍵編輯 config.yaml，關閉記事本後會重新載入。')
                    unauth_notice_state = notice_key
                await ctx.sleep_or_shutdown(shutdown_event, min(5.0, float(remaining)))
            else:
                if unauth_notice_state != 'manual_config':
                    ctx.status_print('偵測到尚未登入。請按任意鍵編輯 config.yaml，填好帳號密碼後關閉記事本。')
                    unauth_notice_state = 'manual_config'
                await ctx.sleep_or_shutdown(shutdown_event, 5)
            continue
        if ctx.LAST_LOGIN_RESULT.ok and login_retry_attempt:
            login_retry_attempt = 0
            next_login_retry_at = 0.0
        configured_now = ctx.current_datetime()
        today = configured_now.weekday()
        schedule = ctx.get_schedule_for_day(today)
        schedule_ranges = schedule.get('ranges', schedule.get('range'))
        current_time = configured_now.time()
        if not schedule.get('enable', False):
            ctx.status_print('今日非上課日 (休眠中)')
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
            ctx.status_print('非上課時段 (休眠中)')
            await ctx.sleep_or_shutdown(shutdown_event, 60)
            continue
        try:
            status_msg = await ctx.check_rollcall(session, ctx.cnt)
            error_cnt = 0
            if status_msg == 'not call':
                ctx.reset_unsupported_rollcall_state()
                ctx.status_print('第 {} 次檢查: 目前無點名'.format(ctx.cnt))
            elif status_msg == 'unsupported_radar':
                ctx.status_print('第 {} 次檢查: 發現未支援的 radar 點名'.format(ctx.cnt))
            elif status_msg == 'unsupported_qrcode':
                ctx.status_print('第 {} 次檢查: 發現 QR Code 點名，等待手動 QR 內容'.format(ctx.cnt))
            elif status_msg == 'unsupported_rollcall':
                ctx.status_print('第 {} 次檢查: 發現未支援的點名類型'.format(ctx.cnt))
            elif status_msg == 'is_radar':
                ctx.status_print('第 {} 次檢查: 雷達點名已觸發'.format(ctx.cnt))
            elif status_msg == 'radar_failed':
                ctx.status_print('第 {} 次檢查: 雷達點名處理失敗，下一輪會再檢查'.format(ctx.cnt))
            else:
                ctx.status_print('第 {} 次檢查: {}'.format(ctx.cnt, status_msg))
        except ctx.UnauthorizedError:
            ctx.record_runtime_error('unauthorized', 'Cookie expired; reauth required.')
            ctx.log(event='tron_http_error', counter=ctx.cnt, status='unauthorized', message='Cookie 已過期，準備重新登入。')
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
                delay = ctx.get_login_retry_delay(login_retry_attempt)
                next_login_retry_at = ctx.time.monotonic() + delay
                login_retry_attempt += 1
                ctx.log_print('自動登入失敗，稍後會持續自動重試；也可按任意鍵開啟 config.yaml。')
            else:
                ctx.log_print('自動登入失敗，請按任意鍵用舊版記事本填寫 config.yaml。')
            error_cnt = 0
            continue
        except ctx.TronHttpError as exc:
            ctx.record_runtime_error('tron_http_error', exc)
            if error_cnt < ctx.get_retry_limit():
                text = 'check rollcall error on {}, trying {} times, error: {}'.format(ctx.cnt, error_cnt, exc)
                ctx.log(event='tron_http_error', counter=ctx.cnt, status='retrying', message=text, error=exc)
                ctx.log_print(text)
                await ctx.mes(text)
                error_cnt += 1
            else:
                ctx.log(event='tron_http_error', counter=ctx.cnt, status='stopped', message='連續錯誤次數過多，停止監控。', error=exc)
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
                text = 'network error on {}, trying {} times, error: {}'.format(ctx.cnt, error_cnt, exc)
                ctx.log(event='network_error', counter=ctx.cnt, status='retrying', message=text, error=exc)
                ctx.log_print(text)
                await ctx.mes(text)
                error_cnt += 1
            else:
                ctx.log(event='network_error', counter=ctx.cnt, status='stopped', message='連續網路錯誤次數過多，停止監控。', error=exc)
                ctx.log_print('連續網路錯誤次數過多，停止監控。')
                shutdown_event.set()
                break
        ctx.cnt += 1
        await ctx.sleep_or_shutdown(shutdown_event, ctx.get_poll_interval())


async def app_main(*, input_enabled: bool=True, external_shutdown_event: ctx.Any=None) -> None:
    ctx.bootstrap_config()
    shutdown_event = external_shutdown_event or ctx.asyncio.Event()
    for warning in ctx.consume_bootstrap_warnings():
        ctx.log_print(warning)
    headers = {'User-Agent': ctx.random_ua()}
    session_kwargs: ctx.Dict[str, ctx.Any] = {'connector': ctx.create_http_connector(), 'headers': headers}
    timeout = ctx.create_http_client_timeout()
    if timeout is not None:
        session_kwargs['timeout'] = timeout
    async with ctx.aiohttp.ClientSession(**session_kwargs) as session:
        try:
            active_profile = ctx.get_active_profile(ctx.CONFIG)
            if ctx.cookie_cache_enabled(ctx.CONFIG) and ctx.load_session_cookies(session, ctx.BASE_DIR, active_profile.name):
                ctx.COOKIE_CACHE_RESTORED = True
                ctx.log_print('已載入 {} 的 cookie 快取。'.format(active_profile.name))
        except Exception as exc:
            ctx.log(event='session_cookie_cache', status='failed', message='cookie 快取載入失敗。', error=exc)
        try:
            if input_enabled:
                tasks = [
                    ctx.asyncio.create_task(ctx.monitor_loop(session, shutdown_event)),
                    ctx.asyncio.create_task(ctx.watch_any_key_to_edit_config(shutdown_event, session)),
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
                await ctx.monitor_loop(session, shutdown_event)
        finally:
            ctx.record_monitor_runtime('stopped', heartbeat=False)


def run_monitor_forever(*, no_input: bool=False) -> int:
    ctx.bootstrap_config()
    if not ctx.provider_is_daily_allowed():
        print(ctx.provider_block_message('monitor run'))
        return 1
    if no_input:
        if not ctx.effective_config_now_value(ctx.CONFIG):
            print('config.yaml 的 now 是空白；無輸入模式不會開啟記事本。若只有一個帳號可留空；多個帳號請先填寫 now。')
            return 1
        print('啟動自動登入與點名監控程式（無輸入模式）...')
    else:
        editor_result = ctx.ensure_config_now_or_open_editor(ctx.CONFIG_PATH)
        if not editor_result.get('ok'):
            print(editor_result.get('message') or 'config.yaml 尚未填寫 now，已停止監控。')
            return 1
        print('啟動監控。此視窗只輸出事件；按任意鍵會用舊版記事本開啟 config.yaml。')
    ctx.time.sleep(1)
    restart_count = 0
    while True:
        try:
            ctx.asyncio.run(ctx.app_main(input_enabled=not no_input))
            break
        except KeyboardInterrupt:
            print('\n已接收到終止指令，安全關閉程式...')
            ctx.sys.exit(0)
        except Exception as exc:
            restart_count += 1
            ctx.report_fatal_exception(exc, restart_count)
            ctx.time.sleep(10)
    return 0

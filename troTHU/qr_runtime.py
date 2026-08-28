"""QR 簽到的送出與收尾(送 `data`、驗 `on_call_fine`、通知)。

QR `data` 由伺服器端產生、學生端 API 不回傳；自動來源可由本機教師輔助或已配置的遠端
`data` oracle 提供。`tron qr paste`/`scan` 是使用者主動提供 QR 內容的手動最後手段，不算自動。
純學生端自行取得或生成 data 的方法目前尚未發現（已知有人做到、原理未明，因此不是不可能）。
"""
from __future__ import annotations

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore


def __getattr__(name: str):
    return getattr(ctx, name)



def qr_rollcall_key(rollcall_id, *, profile_name: str = "", provider_key: str = "") -> str:
    return ctx.rollcall_completion_key(
        rollcall_id,
        profile_name=profile_name,
        provider_key=provider_key,
    )


def is_completed_qr_rollcall(rollcall_id, *, profile_name: str = "", provider_key: str = "") -> bool:
    key = qr_rollcall_key(rollcall_id, profile_name=profile_name, provider_key=provider_key)
    return bool(key and ctx.COMPLETED_QR_ROLLCALLS.get(key))


def mark_completed_qr_rollcall(rollcall_id, *, profile_name: str = "", provider_key: str = "") -> str:
    key = qr_rollcall_key(rollcall_id, profile_name=profile_name, provider_key=provider_key)
    if key:
        ctx.COMPLETED_QR_ROLLCALLS[key] = True
    return key


def build_qr_preview(raw_payload: str, provider: str='') -> ctx.Dict[str, ctx.Any]:
    raw_payload = ctx.sanitize_input_field(raw_payload, field_type='qr_payload', field_name='qr payload').value
    provider_key = ctx.normalize_text(provider) or ctx.get_active_provider_key()
    parse_result = ctx.parse_qr_payload_with_diagnostics(raw_payload)
    diagnostic = parse_result.diagnostic.to_dict()
    if not parse_result.ok or parse_result.data is None:
        return {'ok': False, 'error': diagnostic.get('error') or 'parse_failed', 'provider': provider_key, 'pending_matches': [], 'diagnostic': diagnostic, 'source_kind': diagnostic.get('source_kind', 'unknown'), 'encoding': diagnostic.get('encoding', ''), 'missing_required': diagnostic.get('missing_required', []), 'warnings': diagnostic.get('warnings', []), 'payload_hash': diagnostic.get('payload_hash', ''), 'payload_length': diagnostic.get('payload_length', 0)}
    qr_data = parse_result.data
    pending = [item.to_dict() for item in ctx.match_pending_qr(ctx.BASE_DIR, qr_data.rollcall_id, provider=provider_key)]
    return {'ok': True, 'provider': provider_key, 'rollcall_id': qr_data.rollcall_id, 'field_names': sorted(qr_data.fields.keys()), 'extra_field_names': sorted(qr_data.extras.keys()), 'pending_matches': pending, 'match_count': len(pending), 'diagnostic': diagnostic, 'source_kind': diagnostic.get('source_kind', ''), 'encoding': diagnostic.get('encoding', ''), 'missing_required': diagnostic.get('missing_required', []), 'warnings': diagnostic.get('warnings', []), 'payload_hash': diagnostic.get('payload_hash', ''), 'payload_length': diagnostic.get('payload_length', 0)}


def print_qr_preview(preview: ctx.Dict[str, ctx.Any]) -> None:
    if not preview.get('ok'):
        print('QR preview failed: {}'.format(preview.get('error')))
        return
    print('QR preview')
    print('Provider: {}'.format(preview.get('provider') or ctx.DEFAULT_PENDING_QR_PROVIDER))
    print('Rollcall ID: {}'.format(preview.get('rollcall_id') or '-'))
    print('Known fields: {}'.format(', '.join(preview.get('field_names') or []) or '-'))
    print('Extra fields: {}'.format(', '.join(preview.get('extra_field_names') or []) or '-'))
    print('Pending matches: {}'.format(preview.get('match_count', 0)))


def print_pending_qr(json_output: bool=False) -> int:
    pending = [item.to_dict() for item in ctx.list_pending_qr(ctx.BASE_DIR)]
    if json_output:
        print(ctx.json_text({'pending': pending}))
        return 0
    if not pending:
        print('No pending QR rollcalls.')
        return 0
    for item in pending:
        age = ctx.human_age(max(0.0, ctx.time.time() - float(item.get('created_at', ctx.time.time()))))
        print('{} provider={} profile={} rollcall_id={} age={} message={}'.format('-', item.get('provider') or ctx.DEFAULT_PENDING_QR_PROVIDER, item.get('profile'), item.get('rollcall_id'), age, item.get('message') or '-'))
    return 0


def _decode_qr_image_with_opencv(path: ctx.Path) -> ctx.Tuple[str, str]:
    try:
        import cv2  # type: ignore
    except Exception as exc:  # pragma: no cover - depends on optional package
        return "", "opencv_unavailable:{}".format(type(exc).__name__)
    image = cv2.imread(str(path))
    if image is None:
        return "", "opencv_image_unreadable"
    try:
        detector = cv2.QRCodeDetector()
        value, _points, _straight = detector.detectAndDecode(image)
    except Exception as exc:  # pragma: no cover - depends on optional package
        return "", "opencv_decode_failed:{}".format(type(exc).__name__)
    return ctx.normalize_text(value), ""


def _decode_qr_image_with_pyzbar(path: ctx.Path) -> ctx.Tuple[str, str]:
    try:
        from PIL import Image  # type: ignore
        from pyzbar.pyzbar import decode  # type: ignore
    except Exception as exc:  # pragma: no cover - depends on optional packages/native zbar
        return "", "pyzbar_unavailable:{}".format(type(exc).__name__)
    try:
        decoded = decode(Image.open(path))
    except Exception as exc:  # pragma: no cover - depends on optional packages/native zbar
        return "", "pyzbar_decode_failed:{}".format(type(exc).__name__)
    if not decoded:
        return "", "pyzbar_no_qr"
    value = decoded[0].data.decode("utf-8", errors="replace")
    return ctx.normalize_text(value), ""


def _safe_qr_payload_metadata(payload: str) -> ctx.Dict[str, ctx.Any]:
    payload_text = ctx.normalize_text(payload)
    return {
        "payload_hash": ctx.hashlib.sha256(payload_text.encode("utf-8")).hexdigest()[:16] if payload_text else "",
        "payload_length": len(payload_text),
    }


def safe_qr_image_decode_report(result: ctx.Mapping[str, ctx.Any]) -> ctx.Dict[str, ctx.Any]:
    safe = {key: value for key, value in dict(result or {}).items() if key != "payload"}
    if "payload" in result:
        safe.update(_safe_qr_payload_metadata(str(result.get("payload") or "")))
    return safe


def decode_qr_image_file(path: ctx.Any, decoder: ctx.Any=None) -> ctx.Dict[str, ctx.Any]:
    image_path = ctx.Path(path)
    errors: ctx.List[str] = []
    if not image_path.exists() or not image_path.is_file():
        return {
            "ok": False,
            "status": "image_not_found",
            "path": str(image_path),
            "decoder": "",
            "errors": ["image_not_found"],
        }

    payload = ""
    decoder_name = ""
    if decoder is not None:
        try:
            payload = ctx.normalize_text(decoder(image_path))
            decoder_name = "injected"
        except Exception as exc:
            errors.append("injected_decode_failed:{}".format(type(exc).__name__))
    else:
        payload, error = _decode_qr_image_with_opencv(image_path)
        if payload:
            decoder_name = "opencv"
        elif error:
            errors.append(error)
        if not payload:
            payload, error = _decode_qr_image_with_pyzbar(image_path)
            if payload:
                decoder_name = "pyzbar"
            elif error:
                errors.append(error)

    if not payload:
        return {
            "ok": False,
            "status": "qr_not_found",
            "path": str(image_path),
            "decoder": decoder_name,
            "errors": errors or ["qr_not_found"],
        }
    payload = ctx.sanitize_input_field(payload, field_type="qr_payload", field_name="qr image payload").value
    return {
        "ok": True,
        "status": "decoded",
        "path": str(image_path),
        "decoder": decoder_name or "unknown",
        "payload": payload,
        **_safe_qr_payload_metadata(payload),
    }


async def qr_image_command(path: ctx.Any, *, assume_yes: bool=False, json_output: bool=False, fanout_all: bool=False) -> int:
    decoded = ctx.decode_qr_image_file(path)
    safe_decoded = ctx.safe_qr_image_decode_report(decoded)
    if not decoded.get("ok"):
        if json_output:
            print(ctx.json_text(safe_decoded))
        else:
            print("QR image decode failed: {}".format(decoded.get("status", "failed")))
            if decoded.get("errors"):
                print("Optional decoders: install `.[qr-image]` if no decoder is available.")
        return 1
    preview = ctx.build_qr_preview(str(decoded.get("payload") or ""))
    if json_output:
        payload = dict(preview)
        payload["image"] = safe_decoded
        print(ctx.json_text(payload))
    else:
        print("QR image decoded by {}.".format(decoded.get("decoder", "unknown")))
        ctx.print_qr_preview(preview)
    if not preview.get("ok"):
        return 1
    if not assume_yes:
        answer = input("確認送出 QR 點名？[y/N] ").strip().lower()
        if answer not in {"y", "yes"}:
            print("Cancelled.")
            return 0
    return await (ctx.qr_fanout_command(str(decoded.get("payload") or "")) if fanout_all else ctx.qr_command(str(decoded.get("payload") or "")))


async def qr_fanout_result(payload: str, provider: str='', submit_profile: ctx.Any=None) -> ctx.Dict[str, ctx.Any]:
    provider_key = ctx.normalize_text(provider) or ctx.get_active_provider_key()
    preview = ctx.build_qr_preview(payload, provider=provider_key)
    if not preview.get('ok'):
        return {'ok': False, 'status': 'parse_failed', 'provider': provider_key, 'error': preview.get('error'), 'match_count': 0, 'results': []}
    matches = ctx.match_pending_qr(ctx.BASE_DIR, preview.get('rollcall_id'), provider=provider_key)
    if not matches:
        return {'ok': False, 'status': 'no_matches', 'provider': provider_key, 'rollcall_id': preview.get('rollcall_id'), 'match_count': 0, 'results': []}
    results = []
    for pending in matches:
        try:
            if submit_profile is not None:
                result = await submit_profile(pending.profile, payload)
            else:
                # per-member isolated execution — no global CONFIG.current mutation across await
                member_config = ctx.copy.deepcopy(ctx.CONFIG)
                try:
                    member_config["accounts"]["current"] = ctx.normalize_profile_name(pending.profile)
                except Exception:
                    pass
                headers = {'User-Agent': ctx.random_ua()}
                mk: ctx.Dict[str, ctx.Any] = {'connector': ctx.create_http_connector(), 'headers': headers, 'cookie_jar': ctx.aiohttp.CookieJar(unsafe=True)}
                tout = ctx.create_http_client_timeout()
                if tout is not None:
                    mk['timeout'] = tout
                async with ctx.aiohttp.ClientSession(**mk) as member_session:
                    if ctx.cookie_cache_enabled(member_config):
                        try:
                            ctx.load_session_cookies(member_session, ctx.BASE_DIR, pending.profile)
                        except Exception:
                            pass
                    if not ctx.has_session_cookie(member_session):
                        # fan-out member login without touching global CONFIG.current
                        try:
                            ep = ctx.get_active_http_endpoints()
                        except Exception:
                            ep = None
                        try:
                            rss = ctx.get_ssl_request_setting()
                        except Exception:
                            rss = None
                            # best-effort login for fan-out member
                        try:
                            # reuse group login helper if available
                            if hasattr(ctx, '_member_login'):
                                await ctx._member_login(member_session, member_config, pending.profile, ep, rss)
                            else:
                                login_result = await ctx.login(member_session)
                                if not login_result.ok:
                                    raise RuntimeError(login_result.status)
                        except Exception:
                            pass
                    try:
                        await ctx.submit_qr_payload(member_session, payload)
                        result = 0
                    except ctx.UnauthorizedError:
                        try:
                            member_session.cookie_jar.clear()
                        except Exception:
                            pass
                        try:
                            if hasattr(ctx, '_member_login'):
                                ep2 = ctx.get_active_http_endpoints()
                                rss2 = ctx.get_ssl_request_setting()
                                await ctx._member_login(member_session, member_config, pending.profile, ep2, rss2)
                            else:
                                await ctx.login(member_session)
                        except Exception:
                            pass
                        await ctx.submit_qr_payload(member_session, payload)
                        result = 0
            status = 'submitted' if result == 0 else 'failed'
            error = ''
        except Exception as exc:
            result = 1
            status = 'failed'
            error = str(exc)
        results.append({'profile': pending.profile, 'provider': pending.provider, 'ok': result == 0, 'status': status, **({'error': error} if error else {})})
    ok = all((result['ok'] for result in results))
    return {'ok': ok, 'status': 'submitted' if ok else 'partial_failed', 'provider': provider_key, 'rollcall_id': preview.get('rollcall_id'), 'match_count': len(matches), 'results': results}


async def qr_fanout_command(payload: str) -> int:
    fanout_result = await ctx.qr_fanout_result(payload)
    if fanout_result.get('status') == 'parse_failed':
        print('QR fan-out failed: {}'.format(fanout_result.get('error')))
        return 1
    if fanout_result.get('status') == 'no_matches':
        print('QR fan-out no_matches for provider={} rollcall_id={}.'.format(fanout_result.get('provider'), fanout_result.get('rollcall_id') or '-'))
        return 1
    for item in fanout_result.get('results', []):
        print('QR fan-out {}: {}'.format(item['profile'], 'ok' if item['ok'] else 'failed'))
    return 0 if fanout_result.get('ok') else 1


async def qr_paste_command(payload: str, *, assume_yes: bool=False, json_output: bool=False, fanout_all: bool=False) -> int:
    payload = ctx.sanitize_input_field(payload, field_type='qr_payload', field_name='qr payload').value or ctx.sanitize_input_field(input('Paste QR URL or payload > '), field_type='qr_payload', field_name='qr payload').value
    preview = ctx.build_qr_preview(payload)
    if json_output:
        print(ctx.json_text(preview))
    else:
        ctx.print_qr_preview(preview)
    if not preview.get('ok'):
        return 1
    if not assume_yes:
        answer = input('確認送出 QR 點名？[y/N] ').strip().lower()
        if answer not in {'y', 'yes'}:
            print('Cancelled.')
            return 0
    result = await (ctx.qr_fanout_command(payload) if fanout_all else ctx.qr_command(payload))
    return result


async def qr_scanner_submit(payload: str, fanout_all: bool=False) -> ctx.Dict[str, ctx.Any]:
    preview = ctx.build_qr_preview(payload)
    if not preview.get('ok'):
        return preview
    if fanout_all:
        result = await ctx.qr_fanout_result(payload, provider=preview.get('provider') or '')
        result['preview'] = preview
        return result
    result_code = await ctx.qr_command(payload)
    return {'ok': result_code == 0, 'status': 'submitted' if result_code == 0 else 'failed', 'provider': preview.get('provider'), 'rollcall_id': preview.get('rollcall_id'), 'preview': preview}


def _qr_confirmation_status(progress_summary: ctx.Mapping[str, ctx.Any]) -> str:
    if not isinstance(progress_summary, dict) or not progress_summary.get('ok'):
        status = ctx.normalize_text(progress_summary.get('status') if isinstance(progress_summary, dict) else '')
        return 'submitted_unconfirmed' if status == 'submitted_unconfirmed' else 'submitted'
    if progress_summary.get('confirmed_present'):
        return 'confirmed'
    return 'submitted_unconfirmed'


def _qr_notification_body(base_body: str, confirmation_status: str) -> str:
    status_text = {
        'confirmed': '狀態：已確認簽到成功。',
        'submitted_unconfirmed': '狀態：已送出，但未能即時確認個人狀態。',
        'submitted': '狀態：已送出。',
    }.get(confirmation_status, '狀態：已送出。')
    base_text = ctx.normalize_text(base_body)
    return '{}\n{}'.format(base_text, status_text) if base_text else status_text


async def finalize_qr_submission(
    session: ctx.aiohttp.ClientSession,
    qr_data,
    result,
    *,
    notification_body: str = "已使用手動提供的 QR 內容完成送出。",
    progress_summary: ctx.Mapping[str, ctx.Any] | None = None,
    progress_log_output: bool = True,
    verification: ctx.Mapping[str, ctx.Any] | None = None,
    profile_name: str = "",
    provider_key: str = "",
    my_user_no: str = "",
    endpoints: ctx.Any = None,
    request_ssl: ctx.Any = None,
) -> bool:
    rollcall_id = qr_data.rollcall_id
    _profile = ctx.normalize_profile_name(profile_name) or (ctx.normalize_text(ctx.get_active_profile(ctx.CONFIG).name) if hasattr(ctx.get_active_profile(ctx.CONFIG), 'name') else "")
    _provider = ctx.normalize_text(provider_key) or ctx.get_active_provider_key()
    _ep = endpoints if endpoints is not None else ctx.get_active_http_endpoints()
    _ssl = request_ssl if request_ssl is not None else ctx.get_ssl_request_setting()
    _my_user_no = ctx.normalize_text(my_user_no) or (ctx.normalize_text(ctx.get_active_profile(ctx.CONFIG).user) if hasattr(ctx.get_active_profile(ctx.CONFIG), 'user') else "")
    ctx.remove_pending_qr(ctx.BASE_DIR, profile=_profile, rollcall_id=rollcall_id, provider=_provider)
    verification_result: ctx.Dict[str, ctx.Any] = dict(verification or {}) if isinstance(verification, dict) else {}
    try:
        if not verification_result:
            verification_result = await ctx.verify_rollcall_on_call_fine(
                session,
                rollcall_id,
                progress_summary=progress_summary,
                rollcall_type='qrcode',
                my_user_no=_my_user_no,
                endpoints=_ep,
                request_ssl=_ssl,
            )
    except Exception:
        verification_result = {'ok': False, 'status': 'submitted_unconfirmed', 'rollcall_id': rollcall_id}
    progress = verification_result.get('progress') if isinstance(verification_result.get('progress'), dict) else {}
    confirmation_status = 'confirmed' if verification_result.get('ok') and verification_result.get('status') == 'on_call_fine' else _qr_confirmation_status(verification_result)
    if progress_log_output:
        progress_text = ctx.normalize_text(progress.get('progress_text') or verification_result.get('progress_text'))
        if progress_text:
            ctx.log_print(progress_text)
    if confirmation_status != 'confirmed':
        await ctx.notify_event(
            ctx.NotificationEvent(
                event='qrcode_rollcall_answered',
                title='QR Code 點名已送出，尚未確認',
                body=_qr_notification_body(notification_body, 'submitted_unconfirmed'),
                attendance_type=ctx.AttendanceType.QRCODE,
                rollcall_id=rollcall_id,
                data={'confirmation_status': 'submitted_unconfirmed'},
            )
        )
        return False

    banner = ctx.format_rollcall_success_banner(
        ctx.AttendanceType.QRCODE,
        rollcall_id,
        method='qrcode',
        detail='on_call_fine',
        attendance_rate=ctx.format_success_banner_attendance_rate(verification_result),
    )
    ctx.log_print(banner)
    ctx.remember_rollcall_progress(verification_result)
    await ctx.notify_event(
        ctx.NotificationEvent(
            event='qrcode_rollcall_answered',
            title='QR Code 點名成功！',
            body=_qr_notification_body(notification_body, confirmation_status),
            attendance_type=ctx.AttendanceType.QRCODE,
            rollcall_id=rollcall_id,
            data={'confirmation_status': confirmation_status},
        ),
        highlight_block=banner,
    )
    return True


async def _answer_qr_data(session: ctx.aiohttp.ClientSession, qr_data, *, request_ssl: ctx.Any = None, base_url: str = ""):
    _ssl = request_ssl if request_ssl is not None else ctx.get_ssl_request_setting()
    _base = ctx.normalize_text(base_url) or ctx.get_active_http_endpoints().base_url
    return await ctx.answer_qr_rollcall(
        session,
        qr_data,
        device_id=ctx.random_id(),
        request_ssl=_ssl,
        session_id=ctx.get_session_id_header(session),
        base_url=_base,
    )


async def submit_qr_payload(session: ctx.aiohttp.ClientSession, raw_payload: str, *, progress_log_output: bool = True, profile_name: str = "", provider_key: str = "", my_user_no: str = "", endpoints: ctx.Any = None, request_ssl: ctx.Any = None) -> bool:
    qr_data = ctx.parse_qr_payload(raw_payload)
    rollcall_id = qr_data.rollcall_id
    if not rollcall_id:
        raise ValueError('QR 內容缺少 rollcallId，無法送出。')
    _ep = endpoints if endpoints is not None else ctx.get_active_http_endpoints()
    _ssl = request_ssl if request_ssl is not None else ctx.get_ssl_request_setting()
    _my_user_no = ctx.normalize_text(my_user_no) or (ctx.normalize_text(ctx.get_active_profile(ctx.CONFIG).user) if hasattr(ctx.get_active_profile(ctx.CONFIG), 'user') else "")
    _profile = ctx.normalize_profile_name(profile_name) or (ctx.normalize_text(ctx.get_active_profile(ctx.CONFIG).name) if hasattr(ctx.get_active_profile(ctx.CONFIG), 'name') else "")
    _provider = ctx.normalize_text(provider_key) or ctx.get_active_provider_key()
    result = await _answer_qr_data(session, qr_data, request_ssl=_ssl, base_url=_ep.base_url)
    return await ctx.finalize_qr_submission(session, qr_data, result, progress_log_output=progress_log_output, profile_name=_profile, provider_key=_provider, my_user_no=_my_user_no, endpoints=_ep, request_ssl=_ssl)


async def submit_qr_with_data(session: ctx.aiohttp.ClientSession, rollcall_id, data, *, progress_log_output: bool = True, profile_name: str = "", provider_key: str = "", my_user_no: str = "", endpoints: ctx.Any = None, request_ssl: ctx.Any = None) -> bool:
    rollcall_id_text = ctx.normalize_text(rollcall_id)
    data_text = ctx.normalize_text(data)
    if not rollcall_id_text:
        raise ValueError('QR 內容缺少 rollcallId，無法送出。')
    if not data_text:
        raise ValueError('QR 內容缺少 data，無法送出。')
    qr_data = ctx.QrCodeData(fields={"rollcallId": rollcall_id_text, "data": data_text})
    _ep = endpoints if endpoints is not None else ctx.get_active_http_endpoints()
    _ssl = request_ssl if request_ssl is not None else ctx.get_ssl_request_setting()
    _my_user_no = ctx.normalize_text(my_user_no) or (ctx.normalize_text(ctx.get_active_profile(ctx.CONFIG).user) if hasattr(ctx.get_active_profile(ctx.CONFIG), 'user') else "")
    _profile = ctx.normalize_profile_name(profile_name) or (ctx.normalize_text(ctx.get_active_profile(ctx.CONFIG).name) if hasattr(ctx.get_active_profile(ctx.CONFIG), 'name') else "")
    _provider = ctx.normalize_text(provider_key) or ctx.get_active_provider_key()
    result = await _answer_qr_data(session, qr_data, request_ssl=_ssl, base_url=_ep.base_url)
    return await ctx.finalize_qr_submission(
        session,
        qr_data,
        result,
        notification_body='已透過教師帳號輔助取得 QR data 完成送出。',
        progress_log_output=progress_log_output,
        profile_name=_profile,
        provider_key=_provider,
        my_user_no=_my_user_no,
        endpoints=_ep,
        request_ssl=_ssl,
    )

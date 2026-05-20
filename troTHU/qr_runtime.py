from __future__ import annotations

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore


def __getattr__(name: str):
    return getattr(ctx, name)



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


async def qr_fanout_result(payload: str, provider: str='', submit_profile: ctx.Any=None) -> ctx.Dict[str, ctx.Any]:
    provider_key = ctx.normalize_text(provider) or ctx.get_active_provider_key()
    preview = ctx.build_qr_preview(payload, provider=provider_key)
    if not preview.get('ok'):
        return {'ok': False, 'status': 'parse_failed', 'provider': provider_key, 'error': preview.get('error'), 'match_count': 0, 'results': []}
    matches = ctx.match_pending_qr(ctx.BASE_DIR, preview.get('rollcall_id'), provider=provider_key)
    if not matches:
        return {'ok': False, 'status': 'no_matches', 'provider': provider_key, 'rollcall_id': preview.get('rollcall_id'), 'match_count': 0, 'results': []}
    original = ctx.get_active_profile(ctx.CONFIG).name
    results = []
    try:
        for pending in matches:
            ctx.switch_profile(ctx.CONFIG, pending.profile)
            try:
                if submit_profile is not None:
                    result = await submit_profile(pending.profile, payload)
                else:
                    result = await ctx.qr_command(payload)
                status = 'submitted' if result == 0 else 'failed'
                error = ''
            except Exception as exc:
                result = 1
                status = 'failed'
                error = str(exc)
            results.append({'profile': pending.profile, 'provider': pending.provider, 'ok': result == 0, 'status': status, **({'error': error} if error else {})})
    finally:
        ctx.switch_profile(ctx.CONFIG, original)
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


async def submit_qr_payload(session: ctx.aiohttp.ClientSession, raw_payload: str) -> bool:
    qr_data = ctx.parse_qr_payload(raw_payload)
    rollcall_id = qr_data.rollcall_id
    if not rollcall_id:
        raise ValueError('QR 內容缺少 rollcallId，無法送出。')
    result = await ctx.answer_qr_rollcall(session, qr_data, device_id=ctx.random_id(), request_ssl=ctx.get_ssl_request_setting(), session_id=ctx.get_session_id_header(session), base_url=ctx.get_active_http_endpoints().base_url)
    text = 'QR Code 點名 #{} 已送出。'.format(rollcall_id)
    ctx.log(event='qrcode_rollcall_answered', status='success', rollcall_id=rollcall_id, rollcall_type='qrcode', message=text, payload_excerpt={'field_names': sorted(qr_data.fields.keys()), 'extra_field_names': sorted(qr_data.extras.keys()), 'result': result})
    ctx.log_print(text)
    active = ctx.get_active_profile(ctx.CONFIG)
    ctx.remove_pending_qr(ctx.BASE_DIR, profile=active.name, rollcall_id=rollcall_id, provider=ctx.get_active_provider_key())
    await ctx.notify_event(ctx.NotificationEvent(event='qrcode_rollcall_answered', title=text, body='已使用手動提供的 QR 內容完成送出。', attendance_type=ctx.AttendanceType.QRCODE, rollcall_id=rollcall_id))
    return True

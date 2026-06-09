from __future__ import annotations

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore


def __getattr__(name: str):
    return getattr(ctx, name)


QR_ASSIST_RETRY_COOLDOWN_SECONDS = 30.0
# How long to keep refreshing the teacher QR data and re-submitting while waiting for the
# student to be confirmed present (the teacher data token rotates ~every 15s).
QR_ASSIST_CONFIRM_WINDOW_SECONDS = 12.0
QR_ASSIST_POLL_INTERVAL_SECONDS = 1.5


def get_teacher_config(config) -> ctx.Dict[str, str]:
    source = config if isinstance(config, dict) else ctx.CONFIG
    teacher = source.get("teacher", {}) if isinstance(source, dict) else {}
    if not isinstance(teacher, dict):
        teacher = {}
    default = ctx.DEFAULT_CONFIG["teacher"]
    school = ctx.normalize_text(teacher.get("school")) or default["school"]
    try:
        school = ctx.get_provider(school).key
    except Exception:
        school = default["school"]
    return {
        "user": ctx.normalize_text(teacher.get("user", default["user"])),
        "passwd": ctx.normalize_text(teacher.get("passwd", default["passwd"])),
        "school": school,
        "course": ctx.normalize_text(teacher.get("course", default["course"])),
    }


def teacher_assist_configured(config) -> bool:
    teacher = get_teacher_config(config)
    if ctx.has_real_credential(teacher.get("user")) and ctx.has_real_credential(teacher.get("passwd")):
        return True
    env_user = ctx.normalize_text(ctx.os.getenv("TRON_TEACHER_USER"))
    env_passwd = ctx.normalize_text(ctx.os.getenv("TRON_TEACHER_PASS"))
    if ctx.has_real_credential(env_user) and ctx.has_real_credential(env_passwd):
        return True
    if ctx.has_real_credential(teacher.get("user")):
        try:
            return ctx.has_real_credential(ctx.get_keyring_password("teacher", teacher["user"]))
        except Exception:
            return False
    return False


def build_teacher_endpoints(school):
    provider = ctx.get_provider(school)
    return ctx.endpoints_from_provider(provider.to_config())


def _teacher_login_result(status: str, source: str, user: str = "", final_url: str = "", error: ctx.Any = ""):
    return ctx.LoginResult(
        status=status,
        credential_source=source,
        user=ctx.normalize_text(user),
        final_url=ctx.normalize_text(final_url),
        error=ctx.normalize_text(error),
    )


def _teacher_requires_api_validation(endpoints) -> bool:
    auth_flow = ctx.normalize_text(getattr(endpoints, "auth_flow", "")).lower()
    return auth_flow in {
        "public_cloud_email",
        "browser_sso",
        "oidc_browser",
        "sso_browser",
        "tku_sso_browser",
    }


async def teacher_login(session, endpoints):
    user, passwd, credential_source = ctx.resolve_teacher_credentials()
    if not ctx.has_real_credential(user) or not ctx.has_real_credential(passwd):
        return _teacher_login_result("missing_credentials", credential_source)
    client = ctx.TronHttpClient(session, request_ssl=ctx.get_ssl_request_setting(), endpoints=endpoints)
    try:
        session.cookie_jar.clear()
        form = await client.fetch_login_form()
        outcome = await client.submit_login(form, user, passwd)
        if not outcome.has_session or not ctx.has_session_cookie_data(session, endpoints.session_cookie_domain):
            return _teacher_login_result("missing_session", credential_source, user, outcome.final_url)
        if _teacher_requires_api_validation(endpoints):
            await client.fetch_current_semester()
        if ctx.cookie_cache_enabled(ctx.CONFIG):
            ctx.save_session_cookies(session, ctx.BASE_DIR, "teacher")
        return _teacher_login_result("success", credential_source, user, outcome.final_url)
    except ctx.LoginRejectedError as exc:
        return _teacher_login_result("rejected", credential_source, user, error=exc)
    except ctx.LoginPageChangedError as exc:
        return _teacher_login_result("login_page_changed", credential_source, user, error=exc)
    except (ctx.TronHttpError, ctx.aiohttp.ClientError, ctx.asyncio.TimeoutError, ctx.ssl.SSLError) as exc:
        return _teacher_login_result("transient_error", credential_source, user, error=exc)
    except Exception as exc:
        return _teacher_login_result("error", credential_source, user, error=exc)


async def ensure_teacher_ready() -> bool:
    if not teacher_assist_configured(ctx.CONFIG):
        ctx.TEACHER_READY = False
        ctx.TEACHER_LOGIN_RESULT = _teacher_login_result("missing_credentials", "missing")
        ctx.update_monitor_status(teacher_state="failed")
        return False
    try:
        teacher = get_teacher_config(ctx.CONFIG)
        if ctx.TEACHER_ENDPOINTS is None:
            ctx.TEACHER_ENDPOINTS = build_teacher_endpoints(teacher.get("school"))
        if ctx.TEACHER_SESSION is None:
            ctx.TEACHER_READY = False
            ctx.TEACHER_LOGIN_RESULT = _teacher_login_result("missing_session", "runtime")
            ctx.update_monitor_status(teacher_state="failed")
            return False
        if ctx.has_session_cookie_data(ctx.TEACHER_SESSION, ctx.TEACHER_ENDPOINTS.session_cookie_domain):
            ctx.TEACHER_READY = True
            ctx.TEACHER_LOGIN_RESULT = _teacher_login_result("success", "cookie_cache", teacher.get("user"))
            ctx.update_monitor_status(teacher_state="ready")
            return True
        result = await teacher_login(ctx.TEACHER_SESSION, ctx.TEACHER_ENDPOINTS)
        ctx.TEACHER_LOGIN_RESULT = result
        ctx.TEACHER_READY = result.ok
        ctx.update_monitor_status(teacher_state="ready" if result.ok else "failed")
        if not result.ok:
            ctx.log(
                event="qr_teacher_login",
                status=result.status,
                message="QR 教師帳號登入失敗。",
                error=result.error,
                extra={"credential_source": result.credential_source, "user": result.user},
            )
        return result.ok
    except Exception as exc:
        ctx.TEACHER_READY = False
        ctx.TEACHER_LOGIN_RESULT = _teacher_login_result("error", "runtime", error=exc)
        ctx.update_monitor_status(teacher_state="failed")
        ctx.log(event="qr_teacher_login", status="error", message="QR 教師帳號檢查失敗。", error=exc)
        return False


def _course_items(payload):
    if isinstance(payload, list):
        return payload
    if not isinstance(payload, dict):
        return []
    for key in ("courses", "items"):
        value = payload.get(key)
        if isinstance(value, list):
            return value
    data = payload.get("data")
    if isinstance(data, list):
        return data
    if isinstance(data, dict):
        for key in ("courses", "items"):
            value = data.get(key)
            if isinstance(value, list):
                return value
    return []


def _course_id_from_item(item) -> str:
    if not isinstance(item, dict):
        return ""
    for key in ("id", "course_id", "courseId"):
        value = item.get(key)
        if value not in (None, ""):
            return ctx.normalize_text(value)
    return ""


async def resolve_teacher_course_id(client, config) -> str:
    teacher = get_teacher_config(config)
    configured = ctx.normalize_text(teacher.get("course"))
    if configured:
        ctx.TEACHER_COURSE_ID = configured
        return configured
    if ctx.normalize_text(ctx.TEACHER_COURSE_ID):
        return ctx.normalize_text(ctx.TEACHER_COURSE_ID)
    payload = await client.fetch_my_courses()
    for item in _course_items(payload):
        course_id = _course_id_from_item(item)
        if course_id:
            ctx.TEACHER_COURSE_ID = course_id
            return course_id
    ctx.log(
        event="qr_teacher_course",
        status="missing",
        message="QR 教師帳號找不到可用課程；請在 config.conf teacher.course 手動填課程 ID。",
        payload_excerpt=payload,
    )
    return ""


def _rollcall_id(rollcall) -> str:
    if isinstance(rollcall, dict):
        return ctx.normalize_text(rollcall.get("rollcall_id") or rollcall.get("id"))
    return ""


def _can_attempt_qr_assist(rollcall_id: str) -> bool:
    if not rollcall_id:
        return False
    last_attempt = float(ctx.QR_ASSIST_ATTEMPTS.get(rollcall_id, 0.0) or 0.0)
    return ctx.time.monotonic() - last_attempt >= QR_ASSIST_RETRY_COOLDOWN_SECONDS


def _teacher_qr_client():
    return ctx.TronHttpClient(
        ctx.TEACHER_SESSION,
        request_ssl=ctx.get_ssl_request_setting(),
        endpoints=ctx.TEACHER_ENDPOINTS,
    )


async def prepare_teacher_assisted_qr(rollcall) -> ctx.Dict[str, ctx.Any]:
    student_rollcall_id = _rollcall_id(rollcall)
    if not student_rollcall_id:
        return {"ok": False, "status": "missing_student_rollcall_id"}
    if student_rollcall_id in ctx.COMPLETED_QR_ROLLCALLS:
        return {"ok": True, "status": "already_completed", "student_rollcall_id": student_rollcall_id}
    existing = ctx.ACTIVE_TEACHER_QR_ASSISTS.get(student_rollcall_id)
    if isinstance(existing, dict) and existing.get("teacher_rollcall_id"):
        return {"ok": True, "status": "prepared", **existing}
    if not _can_attempt_qr_assist(student_rollcall_id):
        return {"ok": False, "status": "cooldown", "student_rollcall_id": student_rollcall_id}
    ctx.QR_ASSIST_ATTEMPTS[student_rollcall_id] = ctx.time.monotonic()
    if not teacher_assist_configured(ctx.CONFIG):
        ctx.update_monitor_status(teacher_state="failed")
        return {"ok": False, "status": "not_configured", "student_rollcall_id": student_rollcall_id}
    if not await ensure_teacher_ready():
        ctx.log_print("QR 點名功能未啟用：教師帳號未登入，請於 config.conf 設定 teacher 帳號。")
        return {"ok": False, "status": "teacher_not_ready", "student_rollcall_id": student_rollcall_id}
    try:
        client = _teacher_qr_client()
        course_id = await resolve_teacher_course_id(client, ctx.CONFIG)
        if not course_id:
            ctx.update_monitor_status(teacher_state="failed")
            ctx.log_print("QR 點名功能未啟用：教師帳號找不到可發起點名的課程。")
            return {"ok": False, "status": "missing_course", "student_rollcall_id": student_rollcall_id}
        ctx.update_monitor_status(teacher_state="working")
        created = await client.create_teacher_rollcall(course_id, ctx.build_teacher_rollcall_payload(kind="qr"))
        teacher_rollcall_id = ctx.extract_rollcall_id(created)
        if not teacher_rollcall_id:
            ctx.log(event="qr_teacher_assist", status="missing_rollcall_id", rollcall_id=student_rollcall_id, rollcall_type="qrcode", message="教師 QR 點名建立成功但回應缺少 rollcall id。", payload_excerpt=created)
            return {"ok": False, "status": "missing_teacher_rollcall_id", "student_rollcall_id": student_rollcall_id}
        try:
            await client.start_teacher_rollcall(teacher_rollcall_id)
        except ctx.TronHttpError as exc:
            ctx.log(event="qr_teacher_start", status="ignored_error", rollcall_id=teacher_rollcall_id, rollcall_type="qrcode", message="教師 QR 點名 start 失敗，可能 create 後已經 in_progress。", error=exc)
        prepared = {
            "student_rollcall_id": student_rollcall_id,
            "teacher_rollcall_id": teacher_rollcall_id,
            "course_id": course_id,
            "created_at": ctx.time.monotonic(),
            "submitted": False,
        }
        ctx.ACTIVE_TEACHER_QR_ASSISTS[student_rollcall_id] = prepared
        ctx.log(event="qr_teacher_assist", status="prepared", rollcall_id=student_rollcall_id, rollcall_type="qrcode", message="教師 QR 點名已發起，等待簽到率門檻後讀取 data。", extra={"teacher_rollcall_id": teacher_rollcall_id, "course_id": course_id})
        return {"ok": True, "status": "prepared", **prepared}
    except ctx.UnauthorizedError as exc:
        ctx.TEACHER_READY = False
        ctx.TEACHER_LOGIN_RESULT = _teacher_login_result("missing_session", "teacher_session", error=exc)
        ctx.update_monitor_status(teacher_state="failed")
        ctx.log(event="qr_teacher_assist", status="unauthorized", rollcall_id=student_rollcall_id, rollcall_type="qrcode", message="教師帳號 session 已失效。", error=exc)
        return {"ok": False, "status": "unauthorized", "student_rollcall_id": student_rollcall_id}
    except (ctx.TronHttpError, ctx.aiohttp.ClientError, ctx.asyncio.TimeoutError) as exc:
        ctx.log(event="qr_teacher_assist", status="error", rollcall_id=student_rollcall_id, rollcall_type="qrcode", message="教師 QR 輔助準備流程失敗。", error=exc)
        return {"ok": False, "status": "error", "student_rollcall_id": student_rollcall_id}
    except Exception as exc:
        ctx.log(event="qr_teacher_assist", status="error", rollcall_id=student_rollcall_id, rollcall_type="qrcode", message="教師 QR 輔助準備流程發生未預期錯誤。", error=exc)
        return {"ok": False, "status": "error", "student_rollcall_id": student_rollcall_id}
    finally:
        ctx.update_monitor_status(teacher_state="ready" if ctx.TEACHER_READY else "failed")


async def submit_prepared_teacher_qr(student_session, rollcall) -> bool:
    student_rollcall_id = _rollcall_id(rollcall)
    if not student_rollcall_id:
        return False
    if student_rollcall_id in ctx.COMPLETED_QR_ROLLCALLS:
        return True
    prepared = ctx.ACTIVE_TEACHER_QR_ASSISTS.get(student_rollcall_id)
    if not isinstance(prepared, dict) or not prepared.get("teacher_rollcall_id"):
        prepare_result = await prepare_teacher_assisted_qr(rollcall)
        if not prepare_result.get("ok"):
            return False
        prepared = ctx.ACTIVE_TEACHER_QR_ASSISTS.get(student_rollcall_id, prepare_result)
    if not await ensure_teacher_ready():
        return False
    try:
        client = _teacher_qr_client()
        course_id = ctx.normalize_text(prepared.get("course_id"))
        teacher_rollcall_id = ctx.normalize_text(prepared.get("teacher_rollcall_id"))
        if not course_id or not teacher_rollcall_id:
            return False
        success = False
        submitted = False
        last_qr_data = None
        last_result = {}
        last_verification = {}
        deadline = ctx.time.monotonic() + QR_ASSIST_CONFIRM_WINDOW_SECONDS
        while ctx.time.monotonic() < deadline:
            qr_payload = await client.fetch_teacher_qr_code(course_id, teacher_rollcall_id)
            data = ctx.normalize_text(qr_payload.get("data") if isinstance(qr_payload, dict) else "")
            if data:
                qr_data = ctx.QrCodeData(fields={"rollcallId": student_rollcall_id, "data": data})
                last_result = await ctx.answer_qr_rollcall(
                    student_session,
                    qr_data,
                    device_id=ctx.random_id(),
                    request_ssl=ctx.get_ssl_request_setting(),
                    session_id=ctx.get_session_id_header(student_session),
                    base_url=ctx.get_active_http_endpoints().base_url,
                )
                # answer_qr_rollcall raises on non-2xx, so reaching here means the PUT was accepted.
                submitted = True
                last_qr_data = qr_data
                last_verification = await ctx.verify_rollcall_on_call_fine(
                    student_session,
                    student_rollcall_id,
                    endpoints=ctx.get_active_http_endpoints(),
                    request_ssl=ctx.get_ssl_request_setting(),
                    rollcall_type="qrcode",
                )
                if last_verification.get("ok") and last_verification.get("status") == "on_call_fine":
                    await ctx.finalize_qr_submission(
                        student_session,
                        qr_data,
                        last_result,
                        notification_body="已透過教師帳號輔助取得 QR data 完成送出。",
                        progress_log_output=False,
                        verification=last_verification,
                    )
                    success = True
                    break
            await ctx.asyncio.sleep(QR_ASSIST_POLL_INTERVAL_SECONDS)
        if success:
            ctx.COMPLETED_QR_ROLLCALLS[student_rollcall_id] = True
            prepared["submitted"] = True
            return True
        if submitted and last_qr_data is not None:
            # The student PUT returned 2xx at least once but presence could not be confirmed
            # within the window. Keep it uncompleted so the next monitor poll can re-check.
            await ctx.finalize_qr_submission(
                student_session,
                last_qr_data,
                last_result,
                notification_body="教師輔助已送出，但未能即時確認簽到，請留意。",
                progress_log_output=False,
                verification=last_verification or {"ok": False, "status": "submitted_unconfirmed", "rollcall_id": student_rollcall_id},
            )
            ctx.log(event="qr_teacher_assist", status="submitted_unconfirmed", rollcall_id=student_rollcall_id, rollcall_type="qrcode", message="教師 QR 輔助已送出但未即時確認簽到，下一輪會重新檢查。", extra={"teacher_rollcall_id": teacher_rollcall_id})
            prepared["submitted"] = True
            return False
        ctx.log(event="qr_teacher_assist", status="not_confirmed", rollcall_id=student_rollcall_id, rollcall_type="qrcode", message="教師 QR 輔助送出後未確認簽到成功。", extra={"teacher_rollcall_id": teacher_rollcall_id})
        return False
    except ctx.UnauthorizedError as exc:
        ctx.TEACHER_READY = False
        ctx.TEACHER_LOGIN_RESULT = _teacher_login_result("missing_session", "teacher_session", error=exc)
        ctx.update_monitor_status(teacher_state="failed")
        ctx.log(event="qr_teacher_assist", status="unauthorized", rollcall_id=student_rollcall_id, rollcall_type="qrcode", message="教師帳號 session 已失效。", error=exc)
        return False
    except (ctx.TronHttpError, ctx.aiohttp.ClientError, ctx.asyncio.TimeoutError) as exc:
        ctx.log(event="qr_teacher_assist", status="error", rollcall_id=student_rollcall_id, rollcall_type="qrcode", message="教師 QR 輔助流程失敗。", error=exc)
        return False
    except Exception as exc:
        ctx.log(event="qr_teacher_assist", status="error", rollcall_id=student_rollcall_id, rollcall_type="qrcode", message="教師 QR 輔助流程發生未預期錯誤。", error=exc)
        return False
    finally:
        ctx.update_monitor_status(teacher_state="ready" if ctx.TEACHER_READY else "failed")


async def stop_prepared_teacher_qr(rollcall_id=None) -> ctx.Dict[str, ctx.Any]:
    key = ctx.normalize_text(rollcall_id)
    if key:
        items = [(key, ctx.ACTIVE_TEACHER_QR_ASSISTS.get(key))]
    else:
        items = list(ctx.ACTIVE_TEACHER_QR_ASSISTS.items())
    stopped = 0
    errors = []
    if not items:
        return {"ok": True, "status": "no_active_qr", "stopped": 0, "errors": []}
    client = None
    if ctx.TEACHER_SESSION is not None and ctx.TEACHER_ENDPOINTS is not None:
        try:
            client = _teacher_qr_client()
        except Exception as exc:
            errors.append(ctx.normalize_text(exc))
    for student_rollcall_id, prepared in items:
        if not isinstance(prepared, dict):
            ctx.ACTIVE_TEACHER_QR_ASSISTS.pop(student_rollcall_id, None)
            continue
        teacher_rollcall_id = ctx.normalize_text(prepared.get("teacher_rollcall_id"))
        if client is not None and teacher_rollcall_id:
            try:
                await client.stop_teacher_rollcall(teacher_rollcall_id, rollcall_type="qr")
                stopped += 1
            except ctx.TronHttpError as exc:
                errors.append(ctx.normalize_text(exc))
                ctx.log(event="qr_teacher_stop", status="ignored_error", rollcall_id=teacher_rollcall_id, rollcall_type="qrcode", message="教師 QR 點名關閉失敗。", error=exc)
            except Exception as exc:
                errors.append(ctx.normalize_text(exc))
                ctx.log(event="qr_teacher_stop", status="error", rollcall_id=teacher_rollcall_id, rollcall_type="qrcode", message="教師 QR 點名關閉時發生錯誤。", error=exc)
        ctx.ACTIVE_TEACHER_QR_ASSISTS.pop(student_rollcall_id, None)
    ctx.update_monitor_status(teacher_state="ready" if ctx.TEACHER_READY else "failed")
    return {"ok": not errors, "status": "stopped" if stopped else "cleared", "stopped": stopped, "errors": errors}


async def run_teacher_assisted_qr(student_session, rollcall) -> bool:
    student_rollcall_id = _rollcall_id(rollcall)
    if not student_rollcall_id:
        return False
    try:
        prepared = await prepare_teacher_assisted_qr(rollcall)
        if not prepared.get("ok"):
            return bool(prepared.get("status") == "already_completed")
        return await submit_prepared_teacher_qr(student_session, rollcall)
    finally:
        await stop_prepared_teacher_qr(student_rollcall_id)

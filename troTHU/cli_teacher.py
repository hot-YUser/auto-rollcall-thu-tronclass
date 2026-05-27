from __future__ import annotations

import base64
from collections.abc import Mapping

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore

try:  # pragma: no cover - package import path
    from troTHU.teacher_rollcall import (
        TeacherRollcallError,
        build_module_rollcall_payload,
        build_student_rollcall_history_update_payload,
        build_teacher_rollcall_payload,
        build_teacher_rollcall_update_payload,
        extract_rollcall_id,
        merge_course_role,
        normalize_rollcall_kind,
        parse_rollcalls_payload,
    )
except ImportError:  # pragma: no cover - direct script fallback
    from teacher_rollcall import (  # type: ignore
        TeacherRollcallError,
        build_module_rollcall_payload,
        build_student_rollcall_history_update_payload,
        build_teacher_rollcall_payload,
        build_teacher_rollcall_update_payload,
        extract_rollcall_id,
        merge_course_role,
        normalize_rollcall_kind,
        parse_rollcalls_payload,
    )


def __getattr__(name: str):
    return getattr(ctx, name)


def _session_kwargs() -> ctx.Dict[str, ctx.Any]:
    headers = {"User-Agent": ctx.random_ua()}
    kwargs: ctx.Dict[str, ctx.Any] = {
        "connector": ctx.create_http_connector(),
        "headers": headers,
        "cookie_jar": ctx.aiohttp.CookieJar(unsafe=True),
    }
    timeout = ctx.create_http_client_timeout()
    if timeout is not None:
        kwargs["timeout"] = timeout
    return kwargs


async def _with_teacher_client(action):
    async with ctx.aiohttp.ClientSession(**_session_kwargs()) as session:
        active = ctx.get_active_profile(ctx.CONFIG)
        if ctx.cookie_cache_enabled(ctx.CONFIG):
            ctx.load_session_cookies(session, ctx.BASE_DIR, active.name)
        if not ctx.has_session_cookie(session):
            login_result = await ctx.login(session)
            if not login_result.ok:
                return {
                    "status": "login_failed",
                    "profile": active.name,
                    "login": login_result.status,
                }
            if ctx.cookie_cache_enabled(ctx.CONFIG):
                ctx.save_session_cookies(session, ctx.BASE_DIR, active.name)
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        return await action(client, active)


async def _course_with_role(client: ctx.Any, course: Mapping[str, ctx.Any]) -> ctx.Dict[str, ctx.Any]:
    enriched = dict(course)
    enrollment_payload: ctx.Any = {}
    enrollment_error = ""
    course_id = ctx.normalize_text(course.get("id"))
    if course_id and not course_id.startswith("index-"):
        try:
            enrollment_payload = await client.fetch_course_enrollment(course_id)
        except ctx.TronHttpError as exc:
            enrollment_error = ctx.normalize_text(exc)
        except (ctx.aiohttp.ClientError, ctx.asyncio.TimeoutError) as exc:
            enrollment_error = ctx.normalize_text(exc)
    role = merge_course_role(course, enrollment_payload)
    enriched.update(
        {
            "role": role.role,
            "role_alias": role.role_alias,
            "role_source": role.source,
            "teacher_capable": role.teacher_capable,
            "role_tokens": list(role.tokens),
            "enrollment_checked": bool(enrollment_payload),
        }
    )
    if enrollment_error:
        enriched["enrollment_error"] = enrollment_error
    return enriched


async def _teacher_status_report(client: ctx.Any, active: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    result = await ctx.discover_courses(
        client.session,
        endpoints=client.endpoints,
        request_ssl=ctx.get_ssl_request_setting(),
    )
    courses = [course.to_dict() for course in result.courses]
    enriched_courses = [await _course_with_role(client, course) for course in courses]
    teacher_courses = [course for course in enriched_courses if course.get("teacher_capable")]
    student_courses = [course for course in enriched_courses if course.get("role") == "student"]
    unknown_courses = [course for course in enriched_courses if course.get("role") == "unknown"]
    report = result.to_dict()
    report.update(
        {
            "profile": active.name,
            "teacher_course_count": len(teacher_courses),
            "student_course_count": len(student_courses),
            "unknown_course_count": len(unknown_courses),
            "courses": enriched_courses,
        }
    )
    return report


async def _resolve_teacher_course(
    client: ctx.Any,
    active: ctx.Any,
    course_id: str,
    *,
    force: bool = False,
) -> tuple[ctx.Optional[ctx.Dict[str, ctx.Any]], ctx.Dict[str, ctx.Any]]:
    status = await _teacher_status_report(client, active)
    course = None
    for item in status.get("courses", []):
        if ctx.normalize_text(item.get("id")) == ctx.normalize_text(course_id):
            course = item
            break
    if course is None:
        return None, {
            "status": "course_not_found",
            "profile": active.name,
            "course_id": course_id,
            "teacher_status": status,
        }
    if not force and not course.get("teacher_capable"):
        return None, {
            "status": "not_teacher_course",
            "profile": active.name,
            "course": course,
            "message": "The active account is not detected as teacher-capable for this course.",
        }
    return course, status


def _json_or_file(value: str) -> ctx.Any:
    text = ctx.normalize_text(value)
    if not text:
        return None
    try:
        return ctx.json.loads(text)
    except ValueError:
        path = ctx.Path(text)
        if path.exists():
            return ctx.json.loads(path.read_text(encoding="utf-8"))
        raise


def _payload_from_args(args: ctx.Any, *, required: bool = True) -> ctx.Optional[ctx.Dict[str, ctx.Any]]:
    value = ctx.normalize_text(getattr(args, "payload_json", ""))
    if not value:
        if required:
            raise TeacherRollcallError("--payload-json is required.")
        return None
    payload = _json_or_file(value)
    if not isinstance(payload, Mapping):
        raise TeacherRollcallError("--payload-json must be a JSON object or a path to one.")
    return dict(payload)


def _rollcall_ids_from_args(args: ctx.Any) -> list[str]:
    value = ctx.normalize_text(getattr(args, "rollcall_ids", ""))
    if not value:
        return []
    payload: ctx.Any = None
    if value.startswith("[") or ctx.Path(value).exists():
        payload = _json_or_file(value)
    if isinstance(payload, Mapping):
        payload = payload.get("rollcall_ids", [])
    if isinstance(payload, list):
        return [ctx.normalize_text(item) for item in payload if ctx.normalize_text(item)]
    if payload is not None:
        raise TeacherRollcallError("--rollcall-ids must be a comma-separated string or JSON list.")
    return [item.strip() for item in value.split(",") if item.strip()]


def _student_records_from_args(args: ctx.Any) -> list[ctx.Dict[str, ctx.Any]]:
    input_value = ctx.normalize_text(getattr(args, "input", ""))
    if input_value:
        payload = _json_or_file(input_value)
        if isinstance(payload, Mapping):
            payload = payload.get("student_rollcalls", payload.get("students", []))
        if isinstance(payload, list):
            return list(payload)
        raise TeacherRollcallError("--input must be a JSON list or object with student_rollcalls.")
    student_id = ctx.normalize_text(getattr(args, "student_id", ""))
    if student_id:
        return [
            {
                "student_id": student_id,
                "student_rollcall_status": ctx.normalize_text(getattr(args, "status", "")),
            }
        ]
    return []


def _student_history_records_from_args(args: ctx.Any) -> list[ctx.Dict[str, ctx.Any]]:
    input_value = ctx.normalize_text(getattr(args, "input", ""))
    if input_value:
        payload = _json_or_file(input_value)
        if isinstance(payload, Mapping):
            payload = payload.get("student_rollcalls", payload.get("students", []))
        if isinstance(payload, list):
            return list(payload)
        raise TeacherRollcallError("--input must be a JSON list or object with student_rollcalls.")
    student_rollcall_id = ctx.normalize_text(getattr(args, "student_rollcall_id", ""))
    if student_rollcall_id:
        return [
            {
                "student_rollcall_id": student_rollcall_id,
                "student_status": ctx.normalize_text(getattr(args, "status", "")),
            }
        ]
    return []


def _optional_float(value: ctx.Any) -> ctx.Any:
    if value in (None, ""):
        return None
    return float(value)


def _duration_seconds(args: ctx.Any) -> int:
    seconds = int(getattr(args, "duration_seconds", 0) or 0)
    minutes = int(getattr(args, "duration_min", 0) or 0)
    return seconds or max(0, minutes * 60)


async def _try_rollcall_endpoint(name: str, call: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    try:
        return {"status": "ok", "response": await call()}
    except (ctx.TronHttpError, ctx.aiohttp.ClientError, ctx.asyncio.TimeoutError, ValueError) as exc:
        return {"status": "unavailable", "message": ctx.normalize_text(exc)}


def _write_binary_result(result: ctx.Any, output: str, *, overwrite: bool = False) -> ctx.Dict[str, ctx.Any]:
    path = ctx.Path(output)
    if path.exists() and not overwrite:
        raise TeacherRollcallError("Output file already exists; pass --overwrite to replace it.")
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_bytes(result.body)
    return {
        "output": str(path),
        "response_url": result.url,
        "content_type": result.content_type,
        "size_bytes": len(result.body),
    }


def _print_teacher_report(report: Mapping[str, ctx.Any], *, json_output: bool) -> int:
    if json_output:
        print(ctx.json_text(dict(report)))
    else:
        status = report.get("status", "unknown")
        if status == "ok":
            if "teacher_course_count" in report:
                print("Profile: {}".format(report.get("profile", "")))
                print("Teacher courses: {}".format(report.get("teacher_course_count", 0)))
                for course in report.get("courses", [])[:20]:
                    marker = "teacher" if course.get("teacher_capable") else course.get("role", "unknown")
                    print("- [{}] {} ({})".format(course.get("id", ""), course.get("name", ""), marker))
            else:
                print(report.get("message") or "Done.")
        elif status == "created":
            print("Created rollcall {}.".format(report.get("rollcall_id", "")))
        elif status == "ok_empty":
            print("No records.")
        elif status == "ok_action":
            print("Done.")
        else:
            print("Teacher command failed: {}.".format(status))
            message = report.get("message")
            if message:
                print(message)
    return 0 if str(report.get("status", "")).startswith("ok") or report.get("status") == "created" else 1


async def _teacher_status_command(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    async def action(client, active):
        return await _teacher_status_report(client, active)

    return await _with_teacher_client(action)


async def _teacher_rollcall_list_command(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    course_id = ctx.normalize_text(getattr(args, "course_id", ""))

    async def action(client, active):
        course, error = await _resolve_teacher_course(
            client,
            active,
            course_id,
            force=bool(getattr(args, "force", False)),
        )
        if course is None:
            return error
        payload = await client.fetch_course_rollcalls(course_id)
        rollcalls = parse_rollcalls_payload(payload)
        return {
            "status": "ok",
            "profile": active.name,
            "course": course,
            "rollcall_count": len(rollcalls),
            "rollcalls": rollcalls,
        }

    return await _with_teacher_client(action)


async def _teacher_rollcall_create_command(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    course_id = ctx.normalize_text(getattr(args, "course_id", ""))
    payload = _payload_from_args(args, required=False)
    if payload is not None:
        kind = ctx.normalize_text(payload.get("type")) or ctx.normalize_text(getattr(args, "type", "manual"))
    else:
        kind = normalize_rollcall_kind(getattr(args, "type", "manual"))
        number_code = ctx.normalize_text(getattr(args, "number_code", ""))
        if kind == "number" and not number_code:
            number_code = "{:04d}".format(ctx.random.randint(0, 9999))
        latitude = _optional_float(getattr(args, "latitude", None))
        longitude = _optional_float(getattr(args, "longitude", None))
        if kind == "radar" and (latitude is None or longitude is None):
            return {
                "status": "invalid_arguments",
                "message": "Radar rollcall requires --latitude and --longitude.",
            }
        student_rollcalls = _student_records_from_args(args)
        payload = build_teacher_rollcall_payload(
            kind=kind,
            title=ctx.normalize_text(getattr(args, "title", "")),
            status=ctx.normalize_text(getattr(args, "activity_status", "")) or "in_progress",
            number_code=number_code,
            latitude=latitude,
            longitude=longitude,
            altitude=_optional_float(getattr(args, "altitude", None)),
            duration_seconds=_duration_seconds(args),
            use_beacon=bool(getattr(args, "use_beacon", False)),
            student_rollcalls=student_rollcalls,
            default_rollcall_status=ctx.normalize_text(getattr(args, "default_status", "")),
        )

    async def action(client, active):
        course, error = await _resolve_teacher_course(
            client,
            active,
            course_id,
            force=bool(getattr(args, "force", False)),
        )
        if course is None:
            return error
        created = await client.create_teacher_rollcall(course_id, payload)
        rollcall_id = extract_rollcall_id(created)
        started_payload = None
        if bool(getattr(args, "start", False)):
            if not rollcall_id:
                return {
                    "status": "unexpected_response",
                    "message": "Create response did not include a rollcall id.",
                    "response": created,
                }
            started_payload = await client.start_teacher_rollcall(rollcall_id)
        return {
            "status": "created",
            "profile": active.name,
            "course": course,
            "type": kind,
            "rollcall_id": rollcall_id,
            "payload": payload,
            "response": created,
            "started": bool(getattr(args, "start", False)),
            "start_response": started_payload,
        }

    return await _with_teacher_client(action)


async def _teacher_rollcall_module_create_command(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    course_id = ctx.normalize_text(getattr(args, "course_id", ""))
    payload = _payload_from_args(args, required=False)
    if payload is None:
        payload = build_module_rollcall_payload(
            course_id=course_id,
            module_id=ctx.normalize_text(getattr(args, "module_id", "")),
            kind=ctx.normalize_text(getattr(args, "type", "")) or "qr",
            title=ctx.normalize_text(getattr(args, "title", "")),
            status=ctx.normalize_text(getattr(args, "activity_status", "")) or "waiting",
        )

    async def action(client, active):
        course, error = await _resolve_teacher_course(
            client,
            active,
            course_id,
            force=bool(getattr(args, "force", False)),
        )
        if course is None:
            return error
        created = await client.create_module_rollcall(course_id, payload)
        return {
            "status": "created",
            "profile": active.name,
            "course": course,
            "rollcall_id": extract_rollcall_id(created),
            "payload": payload,
            "response": created,
        }

    return await _with_teacher_client(action)


async def _teacher_rollcall_action_command(args: ctx.Any, action_name: str) -> ctx.Dict[str, ctx.Any]:
    rollcall_id = ctx.normalize_text(getattr(args, "rollcall_id", ""))

    async def action(client, active):
        if action_name == "start":
            response = await client.start_teacher_rollcall(
                rollcall_id,
                payload=_payload_from_args(args, required=False),
            )
        elif action_name == "activate":
            response = await client.activate_teacher_rollcall(rollcall_id)
        elif action_name == "stop":
            response = await client.stop_teacher_rollcall(
                rollcall_id,
                rollcall_type=ctx.normalize_text(getattr(args, "type", "manual")),
            )
        else:
            raise RuntimeError("unsupported action")
        return {
            "status": "ok_action",
            "profile": active.name,
            "action": action_name,
            "rollcall_id": rollcall_id,
            "response": response,
        }

    return await _with_teacher_client(action)


async def _teacher_rollcall_students_command(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    rollcall_id = ctx.normalize_text(getattr(args, "rollcall_id", ""))

    async def action(client, active):
        response = await client.fetch_student_rollcalls(
            rollcall_id,
            action=ctx.normalize_text(getattr(args, "action", "")),
        )
        return {
            "status": "ok",
            "profile": active.name,
            "rollcall_id": rollcall_id,
            "response": response,
        }

    return await _with_teacher_client(action)


async def _teacher_rollcall_roster_command(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    course_id = ctx.normalize_text(getattr(args, "course_id", ""))

    async def action(client, active):
        course, error = await _resolve_teacher_course(
            client,
            active,
            course_id,
            force=bool(getattr(args, "force", False)),
        )
        if course is None:
            return error
        response = await client.fetch_course_students(course_id)
        return {
            "status": "ok",
            "profile": active.name,
            "course": course,
            "response": response,
        }

    return await _with_teacher_client(action)


async def _teacher_rollcall_detail_command(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    course_id = ctx.normalize_text(getattr(args, "course_id", ""))
    rollcall_id = ctx.normalize_text(getattr(args, "rollcall_id", ""))

    async def action(client, active):
        course, error = await _resolve_teacher_course(
            client,
            active,
            course_id,
            force=bool(getattr(args, "force", False)),
        )
        if course is None:
            return error
        response = await client.fetch_course_rollcall_detail(course_id, rollcall_id)
        return {
            "status": "ok",
            "profile": active.name,
            "course": course,
            "rollcall_id": rollcall_id,
            "response": response,
        }

    return await _with_teacher_client(action)


async def _teacher_rollcall_onprogress_command(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    course_id = ctx.normalize_text(getattr(args, "course_id", ""))

    async def action(client, active):
        response = await client.fetch_student_onprogress_rollcalls(
            course_id,
            group_rollcall=ctx.normalize_text(getattr(args, "group_rollcall", "")),
        )
        return {
            "status": "ok",
            "profile": active.name,
            "course_id": course_id,
            "response": response,
        }

    return await _with_teacher_client(action)


async def _teacher_rollcall_leave_record_command(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    course_id = ctx.normalize_text(getattr(args, "course_id", ""))

    async def action(client, active):
        response = await client.fetch_course_leave_record(
            course_id,
            timestamp=ctx.normalize_text(getattr(args, "timestamp", "")),
            page=getattr(args, "page", None),
            page_size=getattr(args, "page_size", None),
        )
        return {
            "status": "ok",
            "profile": active.name,
            "course_id": course_id,
            "response": response,
        }

    return await _with_teacher_client(action)


async def _teacher_rollcall_result_command(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    rollcall_id = ctx.normalize_text(getattr(args, "rollcall_id", ""))

    async def action(client, active):
        response = await client.fetch_rollcall_status_result(rollcall_id)
        return {
            "status": "ok",
            "profile": active.name,
            "rollcall_id": rollcall_id,
            "response": response,
        }

    return await _with_teacher_client(action)


async def _teacher_rollcall_pagination_students_command(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    rollcall_id = ctx.normalize_text(getattr(args, "rollcall_id", ""))

    async def action(client, active):
        response = await client.fetch_pagination_student_rollcalls(
            rollcall_id,
            page=getattr(args, "page", 1),
            page_size=getattr(args, "page_size", 20),
            rollcall_status=ctx.normalize_text(getattr(args, "rollcall_status", "")),
        )
        return {
            "status": "ok",
            "profile": active.name,
            "rollcall_id": rollcall_id,
            "response": response,
        }

    return await _with_teacher_client(action)


async def _teacher_rollcall_count_command(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    rollcall_id = ctx.normalize_text(getattr(args, "rollcall_id", ""))

    async def action(client, active):
        response = await client.fetch_student_rollcall_count(rollcall_id)
        return {
            "status": "ok",
            "profile": active.name,
            "rollcall_id": rollcall_id,
            "response": response,
        }

    return await _with_teacher_client(action)


async def _teacher_rollcall_stats_command(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    course_id = ctx.normalize_text(getattr(args, "course_id", ""))

    async def action(client, active):
        course, error = await _resolve_teacher_course(
            client,
            active,
            course_id,
            force=bool(getattr(args, "force", False)),
        )
        if course is None:
            return error
        response = await client.fetch_course_students_rollcalls(course_id)
        return {
            "status": "ok",
            "profile": active.name,
            "course": course,
            "response": response,
        }

    return await _with_teacher_client(action)


async def _teacher_rollcall_summary_command(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    course_id = ctx.normalize_text(getattr(args, "course_id", ""))
    page_size = int(getattr(args, "page_size", 20) or 20)

    async def action(client, active):
        course, error = await _resolve_teacher_course(
            client,
            active,
            course_id,
            force=bool(getattr(args, "force", False)),
        )
        if course is None:
            return error
        endpoints = {
            "rollcalls": await _try_rollcall_endpoint(
                "rollcalls",
                lambda: client.fetch_course_rollcalls(course_id),
            ),
            "rollcall_setting": await _try_rollcall_endpoint(
                "rollcall_setting",
                lambda: client.fetch_course_rollcall_setting(course_id),
            ),
            "rollcall_score": await _try_rollcall_endpoint(
                "rollcall_score",
                lambda: client.fetch_course_rollcall_score(course_id),
            ),
            "rollcall_scores": await _try_rollcall_endpoint(
                "rollcall_scores",
                lambda: client.fetch_course_rollcall_scores(course_id),
            ),
            "timetable_rollcalls": await _try_rollcall_endpoint(
                "timetable_rollcalls",
                lambda: client.fetch_timetable_rollcalls(course_id),
            ),
            "students_rollcalls": await _try_rollcall_endpoint(
                "students_rollcalls",
                lambda: client.fetch_course_students_rollcalls(course_id),
            ),
            "pagination_students_rollcalls": await _try_rollcall_endpoint(
                "pagination_students_rollcalls",
                lambda: client.fetch_course_pagination_students_rollcalls(
                    course_id,
                    page=1,
                    page_size=page_size,
                ),
            ),
        }
        return {
            "status": "ok" if any(item.get("status") == "ok" for item in endpoints.values()) else "unavailable",
            "profile": active.name,
            "course": course,
            "course_id": course_id,
            "endpoints": endpoints,
        }

    return await _with_teacher_client(action)


async def _teacher_rollcall_info_command(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    rollcall_id = ctx.normalize_text(getattr(args, "rollcall_id", ""))

    async def action(client, active):
        endpoints = {
            "rollcall_detail": await _try_rollcall_endpoint(
                "rollcall_detail",
                lambda: client.fetch_teacher_rollcall_detail(rollcall_id),
            ),
            "rollcall_lite": await _try_rollcall_endpoint(
                "rollcall_lite",
                lambda: client.fetch_teacher_rollcall_lite(rollcall_id),
            ),
            "student_rollcalls": await _try_rollcall_endpoint(
                "student_rollcalls",
                lambda: client.fetch_student_rollcalls(
                    rollcall_id,
                    action=ctx.normalize_text(getattr(args, "action", "")),
                ),
            ),
            "student_rollcalls_page": await _try_rollcall_endpoint(
                "student_rollcalls_page",
                lambda: client.fetch_pagination_student_rollcalls(
                    rollcall_id,
                    page=getattr(args, "page", 1),
                    page_size=getattr(args, "page_size", 20),
                    rollcall_status=ctx.normalize_text(getattr(args, "rollcall_status", "")),
                ),
            ),
            "student_rollcall_count": await _try_rollcall_endpoint(
                "student_rollcall_count",
                lambda: client.fetch_student_rollcall_count(rollcall_id),
            ),
            "rollcall_answers": await _try_rollcall_endpoint(
                "rollcall_answers",
                lambda: client.fetch_teacher_rollcall_answers(rollcall_id),
            ),
            "rollcall_status_result": await _try_rollcall_endpoint(
                "rollcall_status_result",
                lambda: client.fetch_rollcall_status_result(rollcall_id),
            ),
        }
        return {
            "status": "ok" if any(item.get("status") == "ok" for item in endpoints.values()) else "unavailable",
            "profile": active.name,
            "rollcall_id": rollcall_id,
            "endpoints": endpoints,
        }

    return await _with_teacher_client(action)


async def _teacher_rollcall_student_history_command(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    course_id = ctx.normalize_text(getattr(args, "course_id", ""))
    student_id = ctx.normalize_text(getattr(args, "student_id", ""))
    rollcall_ids = _rollcall_ids_from_args(args)

    async def action(client, active):
        response = await client.fetch_course_student_rollcalls(
            course_id,
            student_id,
            page=getattr(args, "page", 1),
            page_size=getattr(args, "page_size", 10),
            rollcall_ids=rollcall_ids,
        )
        return {
            "status": "ok",
            "profile": active.name,
            "course_id": course_id,
            "student_id": student_id,
            "rollcall_ids": rollcall_ids,
            "response": response,
        }

    return await _with_teacher_client(action)


async def _teacher_rollcall_raw_update_command(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    rollcall_id = ctx.normalize_text(getattr(args, "rollcall_id", ""))
    payload = _payload_from_args(args)

    async def action(client, active):
        response = await client.update_teacher_rollcall(rollcall_id, payload)
        return {
            "status": "ok_action",
            "profile": active.name,
            "rollcall_id": rollcall_id,
            "payload": payload,
            "response": response,
        }

    return await _with_teacher_client(action)


async def _teacher_rollcall_update_students_command(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    rollcall_id = ctx.normalize_text(getattr(args, "rollcall_id", ""))
    payload = build_teacher_rollcall_update_payload(
        status=ctx.normalize_text(getattr(args, "rollcall_status", "")) or "in_progress",
        student_rollcalls=_student_records_from_args(args),
    )

    async def action(client, active):
        response = await client.update_teacher_rollcall(rollcall_id, payload)
        return {
            "status": "ok_action",
            "profile": active.name,
            "rollcall_id": rollcall_id,
            "payload": payload,
            "response": response,
        }

    return await _with_teacher_client(action)


async def _teacher_rollcall_update_student_history_command(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    course_id = ctx.normalize_text(getattr(args, "course_id", ""))
    student_id = ctx.normalize_text(getattr(args, "student_id", ""))
    payload = build_student_rollcall_history_update_payload(
        student_rollcalls=_student_history_records_from_args(args),
    )

    async def action(client, active):
        course, error = await _resolve_teacher_course(
            client,
            active,
            course_id,
            force=bool(getattr(args, "force", False)),
        )
        if course is None:
            return error
        response = await client.update_course_student_rollcalls(course_id, student_id, payload)
        return {
            "status": "ok_action",
            "profile": active.name,
            "course": course,
            "student_id": student_id,
            "payload": payload,
            "response": response,
        }

    return await _with_teacher_client(action)


async def _teacher_rollcall_update_radar_position_command(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    rollcall_id = ctx.normalize_text(getattr(args, "rollcall_id", ""))
    payload = _payload_from_args(args, required=False)
    if payload is None:
        latitude = _optional_float(getattr(args, "latitude", None))
        longitude = _optional_float(getattr(args, "longitude", None))
        if latitude is None or longitude is None:
            return {
                "status": "invalid_arguments",
                "message": "Radar position update requires --payload-json or both --latitude and --longitude.",
            }
        payload = {"latitude": latitude, "longitude": longitude}
        altitude = _optional_float(getattr(args, "altitude", None))
        if altitude is not None:
            payload["altitude"] = altitude

    async def action(client, active):
        response = await client.update_radar_rollcall_position(rollcall_id, payload)
        return {
            "status": "ok_action",
            "profile": active.name,
            "rollcall_id": rollcall_id,
            "payload": payload,
            "response": response,
        }

    return await _with_teacher_client(action)


async def _teacher_rollcall_answer_command(args: ctx.Any, kind: str) -> ctx.Dict[str, ctx.Any]:
    rollcall_id = ctx.normalize_text(getattr(args, "rollcall_id", ""))
    payload = _payload_from_args(args)

    async def action(client, active):
        if kind == "qr":
            response = await client.answer_qr_rollcall(rollcall_id, payload)
        elif kind == "number":
            response = await client.answer_number_rollcall(rollcall_id, payload)
        elif kind == "radar":
            response = await client.answer_radar_rollcall(rollcall_id, payload)
        else:
            raise RuntimeError("unsupported rollcall answer kind")
        return {
            "status": "ok_action",
            "profile": active.name,
            "rollcall_id": rollcall_id,
            "answer_kind": kind,
            "payload": payload,
            "response": response,
        }

    return await _with_teacher_client(action)


async def _teacher_rollcall_create_merged_command(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    payload = _payload_from_args(args)

    async def action(client, active):
        response = await client.create_merged_rollcall(payload)
        return {
            "status": "created",
            "profile": active.name,
            "rollcall_id": extract_rollcall_id(response),
            "payload": payload,
            "response": response,
        }

    return await _with_teacher_client(action)


async def _teacher_rollcall_update_merged_students_command(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    payload = _payload_from_args(args)

    async def action(client, active):
        response = await client.update_merged_rollcall_students(payload)
        return {
            "status": "ok_action",
            "profile": active.name,
            "payload": payload,
            "response": response,
        }

    return await _with_teacher_client(action)


async def _teacher_rollcall_setting_command(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    course_id = ctx.normalize_text(getattr(args, "course_id", ""))
    payload = _payload_from_args(args)

    async def action(client, active):
        course, error = await _resolve_teacher_course(
            client,
            active,
            course_id,
            force=bool(getattr(args, "force", False)),
        )
        if course is None:
            return error
        response = await client.update_rollcall_setting(course_id, payload)
        return {
            "status": "ok_action",
            "profile": active.name,
            "course": course,
            "payload": payload,
            "response": response,
        }

    return await _with_teacher_client(action)


async def _teacher_rollcall_score_command(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    enrollment_id = ctx.normalize_text(getattr(args, "enrollment_id", ""))
    score = getattr(args, "score", "")

    async def action(client, active):
        response = await client.update_rollcall_score(enrollment_id, score)
        return {
            "status": "ok_action",
            "profile": active.name,
            "enrollment_id": enrollment_id,
            "score": score,
            "response": response,
        }

    return await _with_teacher_client(action)


async def _teacher_rollcall_import_command(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    course_id = ctx.normalize_text(getattr(args, "course_id", ""))
    payload = _payload_from_args(args)

    async def action(client, active):
        course, error = await _resolve_teacher_course(
            client,
            active,
            course_id,
            force=bool(getattr(args, "force", False)),
        )
        if course is None:
            return error
        response = await client.import_rollcalls(course_id, payload)
        return {
            "status": "ok_action",
            "profile": active.name,
            "course": course,
            "payload": payload,
            "response": response,
        }

    return await _with_teacher_client(action)


async def _teacher_rollcall_grade_command(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    rollcall_ids = _rollcall_ids_from_args(args)
    if not rollcall_ids:
        return {
            "status": "invalid_arguments",
            "message": "--rollcall-ids must include at least one id.",
        }

    async def action(client, active):
        response = await client.grade_rollcalls(rollcall_ids)
        return {
            "status": "ok_action",
            "profile": active.name,
            "rollcall_ids": rollcall_ids,
            "response": response,
        }

    return await _with_teacher_client(action)


async def _teacher_rollcall_export_stat_report_command(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    output = ctx.normalize_text(getattr(args, "output", ""))
    payload = _payload_from_args(args, required=False) or {}

    async def action(client, active):
        result = await client.download_rollcall_stat_report_export(
            kind=ctx.normalize_text(getattr(args, "kind", "rollcall")),
            payload=payload,
        )
        saved = _write_binary_result(
            result,
            output,
            overwrite=bool(getattr(args, "overwrite", False)),
        )
        saved.update(
            {
                "status": "ok_action",
                "profile": active.name,
                "kind": ctx.normalize_text(getattr(args, "kind", "rollcall")),
                "payload": payload,
            }
        )
        return saved

    return await _with_teacher_client(action)


async def _teacher_rollcall_qrcode_command(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    qrcode_url = ctx.normalize_text(getattr(args, "url", ""))
    output = ctx.normalize_text(getattr(args, "output", ""))

    async def action(client, active):
        result = await client.fetch_qrcode_image(qrcode_url)
        saved_path = ""
        if output:
            path = ctx.Path(output)
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_bytes(result.body)
            saved_path = str(path)
        report: ctx.Dict[str, ctx.Any] = {
            "status": "ok",
            "profile": active.name,
            "url": qrcode_url,
            "response_url": result.url,
            "content_type": result.content_type,
            "size_bytes": len(result.body),
            "output": saved_path,
        }
        if bool(getattr(args, "include_body", False)):
            report["body_base64"] = base64.b64encode(result.body).decode("ascii")
        return report

    return await _with_teacher_client(action)


async def _teacher_rollcall_delete_command(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    rollcall_id = ctx.normalize_text(getattr(args, "rollcall_id", ""))
    if not bool(getattr(args, "yes", False)):
        return {
            "status": "confirmation_required",
            "message": "Deleting a rollcall requires --yes.",
            "rollcall_id": rollcall_id,
        }

    async def action(client, active):
        response = await client.delete_teacher_rollcall(rollcall_id)
        return {
            "status": "ok_action",
            "profile": active.name,
            "action": "delete",
            "rollcall_id": rollcall_id,
            "response": response,
        }

    return await _with_teacher_client(action)


async def teacher_command(args: ctx.Any) -> int:
    try:
        command = getattr(args, "teacher_command", None) or "status"
        if command == "status":
            report = await _teacher_status_command(args)
        elif command == "rollcall":
            rollcall_command = getattr(args, "teacher_rollcall_command", None) or "list"
            if rollcall_command == "list":
                report = await _teacher_rollcall_list_command(args)
            elif rollcall_command == "summary":
                report = await _teacher_rollcall_summary_command(args)
            elif rollcall_command == "create":
                report = await _teacher_rollcall_create_command(args)
            elif rollcall_command == "module-create":
                report = await _teacher_rollcall_module_create_command(args)
            elif rollcall_command in {"start", "activate", "stop"}:
                report = await _teacher_rollcall_action_command(args, rollcall_command)
            elif rollcall_command == "roster":
                report = await _teacher_rollcall_roster_command(args)
            elif rollcall_command == "detail":
                report = await _teacher_rollcall_detail_command(args)
            elif rollcall_command == "onprogress":
                report = await _teacher_rollcall_onprogress_command(args)
            elif rollcall_command == "leave-record":
                report = await _teacher_rollcall_leave_record_command(args)
            elif rollcall_command == "students":
                report = await _teacher_rollcall_students_command(args)
            elif rollcall_command == "info":
                report = await _teacher_rollcall_info_command(args)
            elif rollcall_command == "pagination-students":
                report = await _teacher_rollcall_pagination_students_command(args)
            elif rollcall_command == "count":
                report = await _teacher_rollcall_count_command(args)
            elif rollcall_command == "result":
                report = await _teacher_rollcall_result_command(args)
            elif rollcall_command == "stats":
                report = await _teacher_rollcall_stats_command(args)
            elif rollcall_command == "student-history":
                report = await _teacher_rollcall_student_history_command(args)
            elif rollcall_command == "update":
                report = await _teacher_rollcall_raw_update_command(args)
            elif rollcall_command == "update-students":
                report = await _teacher_rollcall_update_students_command(args)
            elif rollcall_command == "update-student-history":
                report = await _teacher_rollcall_update_student_history_command(args)
            elif rollcall_command == "update-radar-position":
                report = await _teacher_rollcall_update_radar_position_command(args)
            elif rollcall_command == "answer-qr":
                report = await _teacher_rollcall_answer_command(args, "qr")
            elif rollcall_command == "answer-number":
                report = await _teacher_rollcall_answer_command(args, "number")
            elif rollcall_command == "answer-radar":
                report = await _teacher_rollcall_answer_command(args, "radar")
            elif rollcall_command == "create-merged":
                report = await _teacher_rollcall_create_merged_command(args)
            elif rollcall_command == "update-merged-students":
                report = await _teacher_rollcall_update_merged_students_command(args)
            elif rollcall_command == "setting":
                report = await _teacher_rollcall_setting_command(args)
            elif rollcall_command == "score":
                report = await _teacher_rollcall_score_command(args)
            elif rollcall_command == "import":
                report = await _teacher_rollcall_import_command(args)
            elif rollcall_command == "grade":
                report = await _teacher_rollcall_grade_command(args)
            elif rollcall_command == "export-stat-report":
                report = await _teacher_rollcall_export_stat_report_command(args)
            elif rollcall_command == "qrcode":
                report = await _teacher_rollcall_qrcode_command(args)
            elif rollcall_command == "delete":
                report = await _teacher_rollcall_delete_command(args)
            else:
                report = {"status": "unknown_command", "command": rollcall_command}
        else:
            report = {"status": "unknown_command", "command": command}
    except (TeacherRollcallError, ValueError) as exc:
        report = {"status": "invalid_arguments", "message": ctx.normalize_text(exc)}
    except (ctx.CourseDiscoveryError, ctx.TronHttpError, ctx.aiohttp.ClientError, ctx.asyncio.TimeoutError) as exc:
        report = {"status": "request_failed", "message": ctx.normalize_text(exc)}
    return _print_teacher_report(report, json_output=bool(getattr(args, "json", False)))

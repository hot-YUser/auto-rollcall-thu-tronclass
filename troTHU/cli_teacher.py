from __future__ import annotations

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore

try:  # pragma: no cover - package import path
    from troTHU.teacher_rollcall import (
        TeacherRollcallError,
        build_teacher_rollcall_payload,
        extract_rollcall_id,
        normalize_rollcall_kind,
    )
except ImportError:  # pragma: no cover - direct script fallback
    from teacher_rollcall import (  # type: ignore
        TeacherRollcallError,
        build_teacher_rollcall_payload,
        extract_rollcall_id,
        normalize_rollcall_kind,
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


def _duration_seconds(args: ctx.Any) -> int:
    seconds = int(getattr(args, "duration_seconds", 0) or 0)
    minutes = int(getattr(args, "duration_min", 0) or 0)
    return seconds or max(0, minutes * 60)


async def _teacher_rollcall_create_command(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    course_id = ctx.normalize_text(getattr(args, "course_id", ""))
    if not course_id:
        raise TeacherRollcallError("--course-id is required.")
    kind = normalize_rollcall_kind(getattr(args, "type", "manual"))
    number_code = "{:04d}".format(ctx.random.randint(0, 9999)) if kind == "number" else ""
    payload = build_teacher_rollcall_payload(
        kind=kind,
        number_code=number_code,
    )

    async def action(client, active):
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
            "course_id": course_id,
            "type": kind,
            "rollcall_id": rollcall_id,
            "payload": payload,
            "response": created,
            "started": bool(getattr(args, "start", False)),
            "start_response": started_payload,
        }

    return await _with_teacher_client(action)


async def _teacher_rollcall_start_command(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    rollcall_id = ctx.normalize_text(getattr(args, "rollcall_id", ""))
    if not rollcall_id:
        raise TeacherRollcallError("rollcall_id is required.")
    duration = _duration_seconds(args)
    payload = {"duration": duration} if duration > 0 else None

    async def action(client, active):
        response = await client.start_teacher_rollcall(rollcall_id, payload)
        return {
            "status": "started",
            "profile": active.name,
            "rollcall_id": rollcall_id,
            "payload": payload,
            "response": response,
        }

    return await _with_teacher_client(action)


async def _teacher_rollcall_stop_command(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    rollcall_id = ctx.normalize_text(getattr(args, "rollcall_id", ""))
    if not rollcall_id:
        raise TeacherRollcallError("rollcall_id is required.")
    kind = normalize_rollcall_kind(getattr(args, "type", "manual"))

    async def action(client, active):
        response = await client.stop_teacher_rollcall(rollcall_id, rollcall_type=kind)
        return {
            "status": "stopped",
            "profile": active.name,
            "rollcall_id": rollcall_id,
            "type": kind,
            "response": response,
        }

    return await _with_teacher_client(action)


def _print_teacher_report(report: ctx.Mapping[str, ctx.Any], *, json_output: bool) -> int:
    if json_output:
        print(ctx.json_text(dict(report)))
    else:
        status = ctx.normalize_text(report.get("status")) or "unknown"
        rollcall_id = ctx.normalize_text(report.get("rollcall_id"))
        if rollcall_id:
            print("teacher rollcall {}: {}".format(status, rollcall_id))
        else:
            print("teacher rollcall {}".format(status))
    return 0 if report.get("status") in {"created", "started", "stopped"} else 1


async def teacher_command(args: ctx.Any) -> int:
    try:
        command = getattr(args, "teacher_command", None)
        rollcall_command = getattr(args, "teacher_rollcall_command", None)
        if command != "rollcall":
            report = {"status": "unknown_command", "command": command}
        elif rollcall_command == "create":
            report = await _teacher_rollcall_create_command(args)
        elif rollcall_command == "start":
            report = await _teacher_rollcall_start_command(args)
        elif rollcall_command == "stop":
            report = await _teacher_rollcall_stop_command(args)
        else:
            report = {"status": "unknown_command", "command": rollcall_command}
    except (TeacherRollcallError, ValueError) as exc:
        report = {"status": "invalid_arguments", "message": ctx.normalize_text(exc)}
    except (ctx.TronHttpError, ctx.aiohttp.ClientError, ctx.asyncio.TimeoutError) as exc:
        report = {"status": "request_failed", "message": ctx.normalize_text(exc)}
    return _print_teacher_report(report, json_output=bool(getattr(args, "json", False)))

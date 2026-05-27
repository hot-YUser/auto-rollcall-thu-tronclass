from __future__ import annotations

import json
from typing import Mapping, Optional, Sequence

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore


def __getattr__(name: str):
    return getattr(ctx, name)


def _teacher_session_kwargs() -> ctx.Dict[str, ctx.Any]:
    headers = {"User-Agent": ctx.random_ua()}
    session_kwargs: ctx.Dict[str, ctx.Any] = {
        "connector": ctx.create_http_connector(),
        "headers": headers,
        "cookie_jar": ctx.aiohttp.CookieJar(unsafe=True),
    }
    timeout = ctx.create_http_client_timeout()
    if timeout is not None:
        session_kwargs["timeout"] = timeout
    return session_kwargs


async def _ensure_teacher_login(session: ctx.Any) -> tuple[bool, ctx.Dict[str, ctx.Any]]:
    active = ctx.get_active_profile(ctx.CONFIG)
    if ctx.cookie_cache_enabled(ctx.CONFIG):
        ctx.load_session_cookies(session, ctx.BASE_DIR, active.name)
    if not ctx.has_session_cookie(session):
        login_result = await ctx.login(session)
        if not login_result.ok:
            return False, {
                "status": "login_failed",
                "profile": active.name,
                "login": login_result.status,
            }
        if ctx.cookie_cache_enabled(ctx.CONFIG):
            ctx.save_session_cookies(session, ctx.BASE_DIR, active.name)
    return True, {"profile": active.name}


async def _run_teacher_context(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    active = ctx.get_active_profile(ctx.CONFIG)
    client = None
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, report = await _ensure_teacher_login(session)
        if not ok:
            return report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        context = await ctx.discover_teacher_context(
            session,
            endpoints=client.endpoints,
            request_ssl=ctx.get_ssl_request_setting(),
            active_user=active.user,
            max_courses=int(getattr(args, "max_courses", 50) or 50),
        )
    payload = context.to_dict()
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    return payload


def _select_course_id(context: Mapping[str, ctx.Any], requested: str = "") -> str:
    requested = ctx.normalize_text(requested)
    if requested:
        return requested
    courses = context.get("courses", [])
    if isinstance(courses, list) and len(courses) == 1:
        course = courses[0]
        if isinstance(course, dict):
            return ctx.normalize_text(course.get("id"))
    teacher_courses = [
        course
        for course in courses
        if isinstance(course, dict) and course.get("is_teacher") and ctx.normalize_text(course.get("id"))
    ] if isinstance(courses, list) else []
    if len(teacher_courses) == 1:
        return ctx.normalize_text(teacher_courses[0].get("id"))
    return ""


def _payload_from_json(text: str, *, allow_empty: bool = True) -> tuple[bool, ctx.Any, str]:
    text = ctx.normalize_text(text)
    if not text:
        if allow_empty:
            return True, {}, ""
        return False, None, "payload_json_required"
    try:
        payload = json.loads(text)
    except json.JSONDecodeError as exc:
        return False, None, "invalid_json: {}".format(exc)
    if not isinstance(payload, Mapping):
        return False, None, "payload_json_must_be_object"
    return True, dict(payload), ""


def _json_array_from_text(text: str, *, allow_empty: bool = True) -> tuple[bool, list[ctx.Any], str]:
    text = ctx.normalize_text(text)
    if not text:
        if allow_empty:
            return True, [], ""
        return False, [], "json_array_required"
    try:
        payload = json.loads(text)
    except json.JSONDecodeError as exc:
        return False, [], "invalid_json: {}".format(exc)
    if not isinstance(payload, list):
        return False, [], "json_value_must_be_array"
    return True, list(payload), ""


def _csv_values(text: str) -> list[str]:
    return [ctx.normalize_text(value) for value in ctx.normalize_text(text).split(",") if ctx.normalize_text(value)]


def _optional_bool(text: str) -> bool | None:
    value = ctx.normalize_text(text).lower()
    if value in {"1", "true", "yes", "y", "on", "published", "publish", "enabled", "enable"}:
        return True
    if value in {"0", "false", "no", "n", "off", "unpublished", "unpublish", "disabled", "disable"}:
        return False
    return None


async def _run_teacher_course_report(
    args: ctx.Any,
    *,
    endpoint_names: Optional[Sequence[str]] = None,
) -> ctx.Dict[str, ctx.Any]:
    active = ctx.get_active_profile(ctx.CONFIG)
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        context = await ctx.discover_teacher_context(
            session,
            endpoints=client.endpoints,
            request_ssl=ctx.get_ssl_request_setting(),
            active_user=active.user,
            max_courses=int(getattr(args, "max_courses", 50) or 50),
        )
        context_payload = context.to_dict()
        course_id = _select_course_id(context_payload, getattr(args, "course_id", ""))
        if not course_id:
            return {
                "status": "course_required",
                "profile": active.name,
                "account_type": context.account_type,
                "courses": context_payload.get("courses", []),
                "message": "Please provide a course id.",
            }
        report = await ctx.build_teacher_course_report(
            session,
            endpoints=client.endpoints,
            course_id=course_id,
            request_ssl=ctx.get_ssl_request_setting(),
            limit=int(getattr(args, "limit", 20) or 20),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
            endpoint_names=endpoint_names,
        )
    payload = report.to_dict()
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    payload["account"] = {
        "type": context.account_type,
        "teacher_course_count": context.teacher_course_count,
        "student_course_count": context.student_course_count,
    }
    payload["course"] = next(
        (
            course
            for course in context_payload.get("courses", [])
            if isinstance(course, dict) and ctx.normalize_text(course.get("id")) == course_id
        ),
        {"id": course_id},
    )
    return payload


async def _run_teacher_stats_report(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    parsed, conditions, message = _payload_from_json(getattr(args, "conditions_json", ""), allow_empty=True)
    active = ctx.get_active_profile(ctx.CONFIG)
    if not parsed:
        return {"status": "invalid_payload", "message": message, "profile": active.name}
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        context = await ctx.discover_teacher_context(
            session,
            endpoints=client.endpoints,
            request_ssl=ctx.get_ssl_request_setting(),
            active_user=active.user,
            max_courses=int(getattr(args, "max_courses", 50) or 50),
        )
        context_payload = context.to_dict()
        course_id = _select_course_id(context_payload, getattr(args, "course_id", ""))
        if not course_id:
            return {
                "status": "course_required",
                "profile": active.name,
                "account_type": context.account_type,
                "courses": context_payload.get("courses", []),
                "message": "Please provide a course id.",
            }
        report = await ctx.fetch_teacher_course_statistics(
            session,
            endpoints=client.endpoints,
            course_id=course_id,
            page=int(getattr(args, "page", 1) or 1),
            page_size=int(getattr(args, "page_size", 20) or 20),
            conditions=conditions,
            request_ssl=ctx.get_ssl_request_setting(),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
        )
    payload = report.to_dict()
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    payload["account"] = {
        "type": context.account_type,
        "teacher_course_count": context.teacher_course_count,
        "student_course_count": context.student_course_count,
    }
    payload["course"] = next(
        (
            course
            for course in context_payload.get("courses", [])
            if isinstance(course, dict) and ctx.normalize_text(course.get("id")) == course_id
        ),
        {"id": course_id},
    )
    return payload


async def _run_teacher_air_credit_report(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    parsed, conditions, message = _payload_from_json(getattr(args, "conditions_json", ""), allow_empty=True)
    active = ctx.get_active_profile(ctx.CONFIG)
    if not parsed:
        return {"status": "invalid_payload", "message": message, "profile": active.name}
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        context = await ctx.discover_teacher_context(
            session,
            endpoints=client.endpoints,
            request_ssl=ctx.get_ssl_request_setting(),
            active_user=active.user,
            max_courses=int(getattr(args, "max_courses", 50) or 50),
        )
        context_payload = context.to_dict()
        course_id = _select_course_id(context_payload, getattr(args, "course_id", ""))
        report = await ctx.fetch_teacher_air_credit_report(
            session,
            endpoints=client.endpoints,
            course_id=course_id,
            target=getattr(args, "target", "user"),
            page=int(getattr(args, "page", 1) or 1),
            page_size=int(getattr(args, "page_size", 20) or 20),
            conditions=conditions,
            start_date=getattr(args, "start_date", ""),
            end_date=getattr(args, "end_date", ""),
            request_ssl=ctx.get_ssl_request_setting(),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
        )
    payload = report.to_dict()
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    payload["account"] = {
        "type": context.account_type,
        "teacher_course_count": context.teacher_course_count,
        "student_course_count": context.student_course_count,
    }
    if course_id:
        payload["course"] = next(
            (
                course
                for course in context_payload.get("courses", [])
                if isinstance(course, dict) and ctx.normalize_text(course.get("id")) == course_id
            ),
            {"id": course_id},
        )
    return payload


async def _run_teacher_management_calendar_meetings(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    parsed, conditions, message = _payload_from_json(getattr(args, "conditions_json", ""), allow_empty=True)
    active = ctx.get_active_profile(ctx.CONFIG)
    if not parsed:
        return {"status": "invalid_payload", "message": message, "profile": active.name}
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        result = await ctx.fetch_teacher_management_calendar_meetings(
            session,
            endpoints=client.endpoints,
            page=int(getattr(args, "page", 1) or 1),
            page_size=int(getattr(args, "page_size", 20) or 20),
            conditions=conditions,
            request_ssl=ctx.get_ssl_request_setting(),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
        )
    payload = result.to_dict()
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    return payload


async def _run_teacher_calendar_meetings(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    active = ctx.get_active_profile(ctx.CONFIG)
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        result = await ctx.fetch_teacher_calendar_meetings(
            session,
            endpoints=client.endpoints,
            request_ssl=ctx.get_ssl_request_setting(),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
        )
    payload = result.to_dict()
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    return payload


async def _run_teacher_teaching_calendars(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    active = ctx.get_active_profile(ctx.CONFIG)
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        result = await ctx.fetch_teacher_teaching_calendars(
            session,
            endpoints=client.endpoints,
            keyword=getattr(args, "keyword", ""),
            page=int(getattr(args, "page", 1) or 1),
            page_size=int(getattr(args, "page_size", 20) or 20),
            request_ssl=ctx.get_ssl_request_setting(),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
        )
    payload = result.to_dict()
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    return payload


async def _run_teacher_vtrs_report(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    parsed, conditions, message = _payload_from_json(getattr(args, "conditions_json", ""), allow_empty=True)
    active = ctx.get_active_profile(ctx.CONFIG)
    if not parsed:
        return {"status": "invalid_payload", "message": message, "profile": active.name}
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        report = await ctx.fetch_teacher_vtrs_report(
            session,
            endpoints=client.endpoints,
            page=int(getattr(args, "page", 1) or 1),
            page_size=int(getattr(args, "page_size", 20) or 20),
            conditions=conditions,
            fields=getattr(args, "fields", ""),
            need_stat=bool(getattr(args, "need_stat", False)),
            request_ssl=ctx.get_ssl_request_setting(),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
        )
    payload = report.to_dict()
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    return payload


async def _run_teacher_departments_report(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    parsed, conditions, message = _payload_from_json(getattr(args, "conditions_json", ""), allow_empty=True)
    active = ctx.get_active_profile(ctx.CONFIG)
    if not parsed:
        return {"status": "invalid_payload", "message": message, "profile": active.name}
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        report = await ctx.fetch_teacher_department_report(
            session,
            endpoints=client.endpoints,
            page=int(getattr(args, "page", 1) or 1),
            page_size=int(getattr(args, "page_size", 20) or 20),
            conditions=conditions,
            fields=getattr(args, "fields", ""),
            request_ssl=ctx.get_ssl_request_setting(),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
        )
    payload = report.to_dict()
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    return payload


async def _run_teacher_ai_ppt_report(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    parsed, conditions, message = _payload_from_json(getattr(args, "conditions_json", ""), allow_empty=True)
    active = ctx.get_active_profile(ctx.CONFIG)
    if not parsed:
        return {"status": "invalid_payload", "message": message, "profile": active.name}
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        report = await ctx.fetch_teacher_ai_ppt_report(
            session,
            endpoints=client.endpoints,
            page=int(getattr(args, "page", 1) or 1),
            page_size=int(getattr(args, "page_size", 20) or 20),
            conditions=conditions,
            request_ssl=ctx.get_ssl_request_setting(),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
        )
    payload = report.to_dict()
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    return payload


async def _run_teacher_rollcall_report(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    active = ctx.get_active_profile(ctx.CONFIG)
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        report = await ctx.build_teacher_rollcall_report(
            session,
            endpoints=client.endpoints,
            rollcall_id=getattr(args, "rollcall_id", ""),
            request_ssl=ctx.get_ssl_request_setting(),
            limit=int(getattr(args, "limit", 20) or 20),
            action=getattr(args, "action", ""),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
        )
    payload = report.to_dict()
    payload["rollcall_id"] = ctx.normalize_text(getattr(args, "rollcall_id", ""))
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    return payload


async def _run_teacher_platform_report(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    parsed, conditions, message = _payload_from_json(getattr(args, "conditions_json", ""), allow_empty=True)
    active = ctx.get_active_profile(ctx.CONFIG)
    if not parsed:
        return {"status": "invalid_payload", "message": message, "profile": active.name}
    parsed_obe, obe_params, obe_message = _payload_from_json(getattr(args, "obe_params_json", ""), allow_empty=True)
    if not parsed_obe:
        return {"status": "invalid_payload", "message": obe_message, "profile": active.name}
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        report = await ctx.fetch_teacher_platform_report(
            session,
            endpoints=client.endpoints,
            page=int(getattr(args, "page", 1) or 1),
            page_size=int(getattr(args, "page_size", 20) or 20),
            conditions=conditions,
            fields=getattr(args, "fields", ""),
            department_ids=getattr(args, "department_ids", ""),
            obe_params=obe_params,
            request_ssl=ctx.get_ssl_request_setting(),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
        )
    payload = report.to_dict()
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    return payload


async def _run_teacher_org_bulletins_report(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    parsed, conditions, message = _payload_from_json(getattr(args, "conditions_json", ""), allow_empty=True)
    active = ctx.get_active_profile(ctx.CONFIG)
    if not parsed:
        return {"status": "invalid_payload", "message": message, "profile": active.name}
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        report = await ctx.fetch_teacher_org_bulletin_report(
            session,
            endpoints=client.endpoints,
            page=int(getattr(args, "page", 1) or 1),
            page_size=int(getattr(args, "page_size", 20) or 20),
            conditions=conditions,
            fields=getattr(args, "fields", ""),
            request_ssl=ctx.get_ssl_request_setting(),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
        )
    payload = report.to_dict()
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    return payload


async def _run_teacher_catalog_report(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    parsed, conditions, message = _payload_from_json(getattr(args, "conditions_json", ""), allow_empty=True)
    active = ctx.get_active_profile(ctx.CONFIG)
    if not parsed:
        return {"status": "invalid_payload", "message": message, "profile": active.name}
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        report = await ctx.fetch_teacher_catalog_report(
            session,
            endpoints=client.endpoints,
            page=int(getattr(args, "page", 1) or 1),
            page_size=int(getattr(args, "page_size", 20) or 20),
            conditions=conditions,
            fields=getattr(args, "fields", ""),
            org_id=getattr(args, "org_id", ""),
            response_key=getattr(args, "response_key", ""),
            request_ssl=ctx.get_ssl_request_setting(),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
        )
    payload = report.to_dict()
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    return payload


async def _run_teacher_media_report(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    parsed, conditions, message = _payload_from_json(getattr(args, "conditions_json", ""), allow_empty=True)
    active = ctx.get_active_profile(ctx.CONFIG)
    if not parsed:
        return {"status": "invalid_payload", "message": message, "profile": active.name}
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        report = await ctx.fetch_teacher_media_report(
            session,
            endpoints=client.endpoints,
            page=int(getattr(args, "page", 1) or 1),
            page_size=int(getattr(args, "page_size", 20) or 20),
            conditions=conditions,
            fields=getattr(args, "fields", ""),
            course_id=getattr(args, "course_id", ""),
            activity_id=getattr(args, "activity_id", ""),
            upload_id=getattr(args, "upload_id", ""),
            jwt=getattr(args, "jwt", ""),
            org_id=getattr(args, "org_id", ""),
            request_ssl=ctx.get_ssl_request_setting(),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
        )
    payload = report.to_dict()
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    return payload


async def _run_teacher_authoring_report(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    parsed, conditions, message = _payload_from_json(getattr(args, "conditions_json", ""), allow_empty=True)
    active = ctx.get_active_profile(ctx.CONFIG)
    if not parsed:
        return {"status": "invalid_payload", "message": message, "profile": active.name}
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        report = await ctx.fetch_teacher_authoring_report(
            session,
            endpoints=client.endpoints,
            page=int(getattr(args, "page", 1) or 1),
            page_size=int(getattr(args, "page_size", 20) or 20),
            conditions=conditions,
            fields=getattr(args, "fields", ""),
            course_id=getattr(args, "course_id", ""),
            activity_id=getattr(args, "activity_id", ""),
            subject_id=getattr(args, "subject_id", ""),
            submission_id=getattr(args, "submission_id", ""),
            upload_id=getattr(args, "upload_id", ""),
            knowledge_base_id=getattr(args, "knowledge_base_id", ""),
            request_ssl=ctx.get_ssl_request_setting(),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
        )
    payload = report.to_dict()
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    return payload


async def _run_teacher_activity_report(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    active = ctx.get_active_profile(ctx.CONFIG)
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        report = await ctx.build_teacher_activity_report(
            session,
            endpoints=client.endpoints,
            activity_id=getattr(args, "activity_id", ""),
            request_ssl=ctx.get_ssl_request_setting(),
            limit=int(getattr(args, "limit", 20) or 20),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
        )
    payload = report.to_dict()
    payload["activity_id"] = ctx.normalize_text(getattr(args, "activity_id", ""))
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    return payload


async def _run_teacher_exam_report(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    active = ctx.get_active_profile(ctx.CONFIG)
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        report = await ctx.build_teacher_exam_report(
            session,
            endpoints=client.endpoints,
            exam_id=getattr(args, "exam_id", ""),
            request_ssl=ctx.get_ssl_request_setting(),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
        )
    payload = report.to_dict()
    payload["exam_id"] = ctx.normalize_text(getattr(args, "exam_id", ""))
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    return payload


async def _run_teacher_classroom_report(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    active = ctx.get_active_profile(ctx.CONFIG)
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        report = await ctx.build_teacher_classroom_report(
            session,
            endpoints=client.endpoints,
            classroom_id=getattr(args, "classroom_id", ""),
            request_ssl=ctx.get_ssl_request_setting(),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
        )
    payload = report.to_dict()
    payload["classroom_id"] = ctx.normalize_text(getattr(args, "classroom_id", ""))
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    return payload


async def _run_teacher_questionnaire_report(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    active = ctx.get_active_profile(ctx.CONFIG)
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        report = await ctx.build_teacher_questionnaire_report(
            session,
            endpoints=client.endpoints,
            questionnaire_id=getattr(args, "questionnaire_id", ""),
            request_ssl=ctx.get_ssl_request_setting(),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
        )
    payload = report.to_dict()
    payload["questionnaire_id"] = ctx.normalize_text(getattr(args, "questionnaire_id", ""))
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    return payload


async def _run_teacher_group_set_report(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    active = ctx.get_active_profile(ctx.CONFIG)
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        report = await ctx.build_teacher_group_set_report(
            session,
            endpoints=client.endpoints,
            group_set_id=getattr(args, "group_set_id", ""),
            request_ssl=ctx.get_ssl_request_setting(),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
        )
    payload = report.to_dict()
    payload["group_set_id"] = ctx.normalize_text(getattr(args, "group_set_id", ""))
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    return payload


async def _run_teacher_get_path(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    active = ctx.get_active_profile(ctx.CONFIG)
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        result = await ctx.fetch_teacher_api_path(
            session,
            endpoints=client.endpoints,
            path=getattr(args, "path", ""),
            name="teacher_get",
            feature="custom",
            request_ssl=ctx.get_ssl_request_setting(),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
        )
    payload = result.to_dict()
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    return payload


async def _run_teacher_download(
    args: ctx.Any,
    downloader: ctx.Any,
    **download_kwargs: ctx.Any,
) -> ctx.Dict[str, ctx.Any]:
    active = ctx.get_active_profile(ctx.CONFIG)
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        result = await downloader(
            session,
            endpoints=client.endpoints,
            output_path=getattr(args, "output", ""),
            overwrite=bool(getattr(args, "overwrite", False)),
            request_ssl=ctx.get_ssl_request_setting(),
            **download_kwargs,
        )
    payload = result.to_dict()
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    return payload


async def _run_teacher_download_path(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    return await _run_teacher_download(
        args,
        ctx.download_teacher_api_path,
        path=getattr(args, "path", ""),
        name="teacher_download",
        feature="custom_download",
    )


async def _run_teacher_download_request(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=True)
    active = ctx.get_active_profile(ctx.CONFIG)
    if not parsed:
        return {"status": "invalid_payload", "message": message, "profile": active.name}
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        result = await ctx.download_teacher_api_request(
            session,
            endpoints=client.endpoints,
            method=getattr(args, "method", "GET"),
            path=getattr(args, "path", ""),
            payload=payload,
            output_path=getattr(args, "output", ""),
            name="teacher_download_request",
            feature="custom_download",
            filename_hint=getattr(args, "filename", ""),
            overwrite=bool(getattr(args, "overwrite", False)),
            request_ssl=ctx.get_ssl_request_setting(),
            execute=bool(getattr(args, "execute", False)),
            confirm=bool(getattr(args, "yes", False)),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
        )
    payload_dict = result.to_dict()
    payload_dict["profile"] = active.name
    payload_dict["provider"] = ctx.get_active_provider_key()
    return payload_dict


async def _run_teacher_download_upload(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    return await _run_teacher_download(
        args,
        ctx.download_teacher_upload_blob,
        upload_id=getattr(args, "upload_id", ""),
        preview=bool(getattr(args, "preview", False)),
        activity_type=getattr(args, "activity_type", ""),
    )


async def _run_teacher_download_upload_thumbnail(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    return await _run_teacher_download(
        args,
        ctx.download_teacher_upload_thumbnail,
        upload_id=getattr(args, "upload_id", ""),
        preview=not bool(getattr(args, "no_preview", False)),
    )


async def _run_teacher_download_upload_modified_image(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    return await _run_teacher_download(
        args,
        ctx.download_teacher_upload_modified_image,
        upload_id=getattr(args, "upload_id", ""),
        thumbnail=getattr(args, "thumbnail", "200x200"),
    )


async def _run_teacher_download_upload_swf(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    return await _run_teacher_download(
        args,
        ctx.download_teacher_upload_swf,
        upload_id=getattr(args, "upload_id", ""),
    )


async def _run_teacher_download_upload_reference(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    return await _run_teacher_download(
        args,
        ctx.download_teacher_upload_reference_blob,
        reference_id=getattr(args, "reference_id", ""),
    )


async def _run_teacher_download_shared_resource(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    return await _run_teacher_download(
        args,
        ctx.download_teacher_shared_resource_blob,
        resource_id=getattr(args, "resource_id", ""),
        share_to=bool(getattr(args, "share_to", False)),
    )


async def _run_teacher_download_wedrive_file(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    return await _run_teacher_download(
        args,
        ctx.download_teacher_wedrive_file,
        file_id=getattr(args, "file_id", ""),
    )


async def _run_teacher_download_third_part_upload(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    return await _run_teacher_download(
        args,
        ctx.download_teacher_third_part_upload,
        upload_id=getattr(args, "upload_id", ""),
        kind=getattr(args, "kind", "preview"),
    )


async def _run_teacher_export_questionnaire(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    return await _run_teacher_download(
        args,
        ctx.download_teacher_questionnaire_export,
        questionnaire_id=getattr(args, "questionnaire_id", ""),
    )


async def _run_teacher_export_topic(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    return await _run_teacher_download(
        args,
        ctx.download_teacher_topic_export,
        topic_id=getattr(args, "topic_id", ""),
        execute=bool(getattr(args, "execute", False)),
        confirm=bool(getattr(args, "yes", False)),
        include_sensitive=bool(getattr(args, "include_sensitive", False)),
    )


async def _run_teacher_export_category_topics(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    return await _run_teacher_download(
        args,
        ctx.download_teacher_category_topics_export,
        category_id=getattr(args, "category_id", ""),
        execute=bool(getattr(args, "execute", False)),
        confirm=bool(getattr(args, "yes", False)),
        include_sensitive=bool(getattr(args, "include_sensitive", False)),
    )


async def _run_teacher_export_shared_resource_subject_lib(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    return await _run_teacher_download(
        args,
        ctx.download_teacher_shared_resource_subject_lib_export,
        resource_id=getattr(args, "resource_id", ""),
    )


async def _run_teacher_export_shared_resource_stat(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    parsed, conditions, message = _payload_from_json(getattr(args, "conditions_json", ""), allow_empty=True)
    active = ctx.get_active_profile(ctx.CONFIG)
    if not parsed:
        return {"status": "invalid_payload", "message": message, "profile": active.name}
    return await _run_teacher_download(
        args,
        ctx.download_teacher_shared_resource_stat_export,
        conditions=conditions,
    )


async def _run_teacher_export_shared_resource_video_stat(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    parsed, conditions, message = _payload_from_json(getattr(args, "conditions_json", ""), allow_empty=True)
    active = ctx.get_active_profile(ctx.CONFIG)
    if not parsed:
        return {"status": "invalid_payload", "message": message, "profile": active.name}
    return await _run_teacher_download(
        args,
        ctx.download_teacher_shared_resource_video_stat_export,
        conditions=conditions,
    )


async def _run_teacher_export_stat_students(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    parsed, conditions, message = _payload_from_json(getattr(args, "conditions_json", ""), allow_empty=True)
    active = ctx.get_active_profile(ctx.CONFIG)
    if not parsed:
        return {"status": "invalid_payload", "message": message, "profile": active.name}
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        context = await ctx.discover_teacher_context(
            session,
            endpoints=client.endpoints,
            request_ssl=ctx.get_ssl_request_setting(),
            active_user=active.user,
            max_courses=int(getattr(args, "max_courses", 50) or 50),
        )
        context_payload = context.to_dict()
        course_id = _select_course_id(context_payload, getattr(args, "course_id", ""))
        if not course_id:
            return {
                "status": "course_required",
                "profile": active.name,
                "account_type": context.account_type,
                "courses": context_payload.get("courses", []),
                "message": "Please provide a course id.",
            }
        result = await ctx.download_teacher_course_stat_students_export(
            session,
            endpoints=client.endpoints,
            course_id=course_id,
            file_type=getattr(args, "file_type", "xlsx"),
            conditions=conditions,
            output_path=getattr(args, "output", ""),
            overwrite=bool(getattr(args, "overwrite", False)),
            request_ssl=ctx.get_ssl_request_setting(),
        )
    payload = result.to_dict()
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    payload["course_id"] = course_id
    return payload


async def _run_teacher_export_stat_report(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    parsed, conditions, message = _payload_from_json(getattr(args, "conditions_json", ""), allow_empty=True)
    active = ctx.get_active_profile(ctx.CONFIG)
    if not parsed:
        return {"status": "invalid_payload", "message": message, "profile": active.name}
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        result = await ctx.download_teacher_stat_report_export(
            session,
            endpoints=client.endpoints,
            kind=getattr(args, "kind", "rollcall"),
            conditions=conditions,
            output_path=getattr(args, "output", ""),
            overwrite=bool(getattr(args, "overwrite", False)),
            request_ssl=ctx.get_ssl_request_setting(),
        )
    payload = result.to_dict()
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    return payload


async def _run_teacher_export_stat_courses(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=True)
    active = ctx.get_active_profile(ctx.CONFIG)
    if not parsed:
        return {"status": "invalid_payload", "message": message, "profile": active.name}
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        result = await ctx.download_teacher_stat_courses_export_to(
            session,
            endpoints=client.endpoints,
            file_type=getattr(args, "file_type", "xlsx"),
            payload=payload,
            output_path=getattr(args, "output", ""),
            overwrite=bool(getattr(args, "overwrite", False)),
            request_ssl=ctx.get_ssl_request_setting(),
            execute=bool(getattr(args, "execute", False)),
            confirm=bool(getattr(args, "yes", False)),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
        )
    payload_dict = result.to_dict()
    payload_dict["profile"] = active.name
    payload_dict["provider"] = ctx.get_active_provider_key()
    return payload_dict


async def _run_teacher_export_stat_attendance(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=True)
    active = ctx.get_active_profile(ctx.CONFIG)
    if not parsed:
        return {"status": "invalid_payload", "message": message, "profile": active.name}
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        result = await ctx.download_teacher_stat_attendance_export_to(
            session,
            endpoints=client.endpoints,
            file_type=getattr(args, "file_type", "xlsx"),
            payload=payload,
            output_path=getattr(args, "output", ""),
            overwrite=bool(getattr(args, "overwrite", False)),
            request_ssl=ctx.get_ssl_request_setting(),
            execute=bool(getattr(args, "execute", False)),
            confirm=bool(getattr(args, "yes", False)),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
        )
    payload_dict = result.to_dict()
    payload_dict["profile"] = active.name
    payload_dict["provider"] = ctx.get_active_provider_key()
    return payload_dict


async def _run_teacher_export_department_user_attendance(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    parsed, conditions, message = _payload_from_json(getattr(args, "conditions_json", ""), allow_empty=True)
    active = ctx.get_active_profile(ctx.CONFIG)
    if not parsed:
        return {"status": "invalid_payload", "message": message, "profile": active.name}
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        result = await ctx.download_teacher_department_user_attendance_export(
            session,
            endpoints=client.endpoints,
            department_id=getattr(args, "department_id", ""),
            conditions=conditions,
            output_path=getattr(args, "output", ""),
            overwrite=bool(getattr(args, "overwrite", False)),
            request_ssl=ctx.get_ssl_request_setting(),
        )
    payload = result.to_dict()
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    return payload


async def _run_teacher_export_department_attendance(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=True)
    active = ctx.get_active_profile(ctx.CONFIG)
    if not parsed:
        return {"status": "invalid_payload", "message": message, "profile": active.name}
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        result = await ctx.download_teacher_department_attendance_export(
            session,
            endpoints=client.endpoints,
            department_id=getattr(args, "department_id", ""),
            payload=payload,
            output_path=getattr(args, "output", ""),
            overwrite=bool(getattr(args, "overwrite", False)),
            request_ssl=ctx.get_ssl_request_setting(),
            execute=bool(getattr(args, "execute", False)),
            confirm=bool(getattr(args, "yes", False)),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
        )
    payload_dict = result.to_dict()
    payload_dict["profile"] = active.name
    payload_dict["provider"] = ctx.get_active_provider_key()
    return payload_dict


async def _run_teacher_export_stat_vtrses_data(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    parsed, conditions, message = _payload_from_json(getattr(args, "conditions_json", ""), allow_empty=True)
    active = ctx.get_active_profile(ctx.CONFIG)
    if not parsed:
        return {"status": "invalid_payload", "message": message, "profile": active.name}
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        result = await ctx.download_teacher_stat_vtrses_data_export(
            session,
            endpoints=client.endpoints,
            conditions=conditions,
            output_path=getattr(args, "output", ""),
            overwrite=bool(getattr(args, "overwrite", False)),
            request_ssl=ctx.get_ssl_request_setting(),
        )
    payload = result.to_dict()
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    return payload


async def _run_teacher_export_cloud_classroom_live_classes(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    parsed, conditions, message = _payload_from_json(getattr(args, "conditions_json", ""), allow_empty=True)
    active = ctx.get_active_profile(ctx.CONFIG)
    if not parsed:
        return {"status": "invalid_payload", "message": message, "profile": active.name}
    return await _run_teacher_download(
        args,
        ctx.download_teacher_cloud_classroom_live_classes_export,
        order_by=getattr(args, "order_by", ""),
        conditions=conditions,
    )


async def _run_teacher_export_tencent_meeting_statistics(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    parsed, conditions, message = _payload_from_json(getattr(args, "conditions_json", ""), allow_empty=True)
    active = ctx.get_active_profile(ctx.CONFIG)
    if not parsed:
        return {"status": "invalid_payload", "message": message, "profile": active.name}
    return await _run_teacher_download(
        args,
        ctx.download_teacher_tencent_meeting_statistics_export,
        conditions=conditions,
    )


async def _run_teacher_export_ai_ppt_usage(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=True)
    active = ctx.get_active_profile(ctx.CONFIG)
    if not parsed:
        return {"status": "invalid_payload", "message": message, "profile": active.name}
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        result = await ctx.download_teacher_ai_ppt_user_usage_export(
            session,
            endpoints=client.endpoints,
            payload=payload,
            output_path=getattr(args, "output", ""),
            overwrite=bool(getattr(args, "overwrite", False)),
            request_ssl=ctx.get_ssl_request_setting(),
            execute=bool(getattr(args, "execute", False)),
            confirm=bool(getattr(args, "yes", False)),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
        )
    payload_dict = result.to_dict()
    payload_dict["profile"] = active.name
    payload_dict["provider"] = ctx.get_active_provider_key()
    return payload_dict


async def _run_teacher_export_air_credit(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=True)
    active = ctx.get_active_profile(ctx.CONFIG)
    if not parsed:
        return {"status": "invalid_payload", "message": message, "profile": active.name}
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        result = await ctx.download_teacher_air_credit_stats_export(
            session,
            endpoints=client.endpoints,
            target=getattr(args, "target", "user"),
            payload=payload,
            output_path=getattr(args, "output", ""),
            overwrite=bool(getattr(args, "overwrite", False)),
            request_ssl=ctx.get_ssl_request_setting(),
            execute=bool(getattr(args, "execute", False)),
            confirm=bool(getattr(args, "yes", False)),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
        )
    payload_dict = result.to_dict()
    payload_dict["profile"] = active.name
    payload_dict["provider"] = ctx.get_active_provider_key()
    return payload_dict


async def _run_teacher_export_management_calendar(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=True)
    active = ctx.get_active_profile(ctx.CONFIG)
    if not parsed:
        return {"status": "invalid_payload", "message": message, "profile": active.name}
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        result = await ctx.download_teacher_management_calendar_meeting_export(
            session,
            endpoints=client.endpoints,
            payload=payload,
            output_path=getattr(args, "output", ""),
            overwrite=bool(getattr(args, "overwrite", False)),
            request_ssl=ctx.get_ssl_request_setting(),
            execute=bool(getattr(args, "execute", False)),
            confirm=bool(getattr(args, "yes", False)),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
        )
    payload_dict = result.to_dict()
    payload_dict["profile"] = active.name
    payload_dict["provider"] = ctx.get_active_provider_key()
    return payload_dict


async def _run_teacher_upload_file(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    parsed, metadata, message = _payload_from_json(getattr(args, "metadata_json", ""), allow_empty=True)
    active = ctx.get_active_profile(ctx.CONFIG)
    if not parsed:
        return {"status": "invalid_payload", "message": message, "profile": active.name}
    parent_id = ctx.normalize_text(getattr(args, "parent_id", ""))
    if parent_id:
        metadata["parent_id"] = parent_id
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        result = await ctx.upload_teacher_file(
            session,
            endpoints=client.endpoints,
            file_path=getattr(args, "file", ""),
            metadata=metadata,
            name=getattr(args, "name", ""),
            content_type=getattr(args, "content_type", ""),
            request_ssl=ctx.get_ssl_request_setting(),
            execute=bool(getattr(args, "execute", False)),
            confirm=bool(getattr(args, "yes", False)),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
        )
    payload = result.to_dict()
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    return payload


async def _run_teacher_activity_dependents(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    active = ctx.get_active_profile(ctx.CONFIG)
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        result = await ctx.check_teacher_activity_dependents(
            session,
            endpoints=client.endpoints,
            activity_ids=_csv_values(getattr(args, "activity_ids", "")),
            activity_type=getattr(args, "activity_type", ""),
            request_ssl=ctx.get_ssl_request_setting(),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
        )
    payload = result.to_dict()
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    return payload


async def _run_teacher_completion_criteria(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    active = ctx.get_active_profile(ctx.CONFIG)
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        course_id, error = await _resolve_teacher_course_id(session, client, active, args)
        if error is not None:
            return error
        result = await ctx.fetch_teacher_completion_criteria(
            session,
            endpoints=client.endpoints,
            course_id=course_id,
            activity_type=getattr(args, "activity_type", ""),
            request_ssl=ctx.get_ssl_request_setting(),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
        )
    payload = result.to_dict()
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    payload["course_id"] = course_id
    return payload


async def _run_teacher_course_completion_criteria(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    active = ctx.get_active_profile(ctx.CONFIG)
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        course_id, error = await _resolve_teacher_course_id(session, client, active, args)
        if error is not None:
            return error
        result = await ctx.fetch_teacher_course_completion_criteria(
            session,
            endpoints=client.endpoints,
            course_id=course_id,
            request_ssl=ctx.get_ssl_request_setting(),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
        )
    payload = result.to_dict()
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    payload["course_id"] = course_id
    return payload


async def _run_teacher_forum_categories(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    active = ctx.get_active_profile(ctx.CONFIG)
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        course_id, error = await _resolve_teacher_course_id(session, client, active, args)
        if error is not None:
            return error
        result = await ctx.fetch_teacher_forum_categories(
            session,
            endpoints=client.endpoints,
            course_id=course_id,
            fields=getattr(args, "fields", ""),
            conditions=getattr(args, "conditions", ""),
            page=int(getattr(args, "page", 1) or 1),
            page_size=int(getattr(args, "page_size", 20) or 20),
            include_group_topic_categories=not bool(getattr(args, "no_group_topic_categories", False)),
            request_ssl=ctx.get_ssl_request_setting(),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
        )
    payload = result.to_dict()
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    payload["course_id"] = course_id
    return payload


async def _run_teacher_forum_category(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    active = ctx.get_active_profile(ctx.CONFIG)
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        result = await ctx.fetch_teacher_forum_category(
            session,
            endpoints=client.endpoints,
            category_id=getattr(args, "category_id", ""),
            fields=getattr(args, "fields", ""),
            conditions=getattr(args, "conditions", ""),
            page=int(getattr(args, "page", 1) or 1),
            page_size=int(getattr(args, "page_size", 20) or 20),
            request_ssl=ctx.get_ssl_request_setting(),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
        )
    payload = result.to_dict()
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    return payload


async def _run_teacher_activity_uploads_license(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    active = ctx.get_active_profile(ctx.CONFIG)
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        result = await ctx.fetch_teacher_activity_uploads_license(
            session,
            endpoints=client.endpoints,
            activity_id=getattr(args, "activity_id", ""),
            request_ssl=ctx.get_ssl_request_setting(),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
        )
    payload = result.to_dict()
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    return payload


async def _run_teacher_resource_groups(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    return await _run_teacher_fetch(
        args,
        ctx.fetch_teacher_resource_groups,
        fields=getattr(args, "fields", ""),
    )


async def _run_teacher_resource_group(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    return await _run_teacher_fetch(
        args,
        ctx.fetch_teacher_resource_group,
        resource_group_id=getattr(args, "resource_group_id", ""),
    )


async def _run_teacher_resource_group_members(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    return await _run_teacher_fetch(
        args,
        ctx.fetch_teacher_resource_group_members,
        resource_group_id=getattr(args, "resource_group_id", ""),
        page=int(getattr(args, "page", 1) or 1),
        page_size=int(getattr(args, "page_size", 20) or 20),
    )


async def _run_teacher_resource_group_folders(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    return await _run_teacher_fetch(
        args,
        ctx.fetch_teacher_resource_group_folders,
        resource_group_id=getattr(args, "resource_group_id", ""),
        page=int(getattr(args, "page", 1) or 1),
        page_size=int(getattr(args, "page_size", 20) or 20),
        conditions=getattr(args, "conditions", ""),
    )


async def _run_teacher_resource_group_resources(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    return await _run_teacher_fetch(
        args,
        ctx.fetch_teacher_resource_group_resources,
        resource_group_id=getattr(args, "resource_group_id", ""),
        page=int(getattr(args, "page", 1) or 1),
        page_size=int(getattr(args, "page_size", 20) or 20),
        conditions=getattr(args, "conditions", ""),
    )


async def _run_teacher_resource_group_rubrics(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    return await _run_teacher_fetch(
        args,
        ctx.fetch_teacher_resource_group_rubrics,
        resource_group_id=getattr(args, "resource_group_id", ""),
        page=int(getattr(args, "page", 1) or 1),
        page_size=int(getattr(args, "page_size", 20) or 20),
        conditions=getattr(args, "conditions", ""),
    )


async def _run_teacher_resource_group_subject_libs(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    return await _run_teacher_fetch(
        args,
        ctx.fetch_teacher_resource_group_subject_libs,
        resource_group_id=getattr(args, "resource_group_id", ""),
        page=int(getattr(args, "page", 1) or 1),
        page_size=int(getattr(args, "page_size", 20) or 20),
        conditions=getattr(args, "conditions", ""),
    )


async def _run_teacher_user_resources(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    return await _run_teacher_fetch(
        args,
        ctx.fetch_teacher_user_resources,
        page=int(getattr(args, "page", 1) or 1),
        page_size=int(getattr(args, "page_size", 20) or 20),
        conditions=getattr(args, "conditions", ""),
    )


async def _run_teacher_user_resource_folder_info(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    return await _run_teacher_fetch(
        args,
        ctx.fetch_teacher_user_resource_folder_info,
        resource_id=getattr(args, "resource_id", ""),
    )


async def _run_teacher_shared_resources(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    return await _run_teacher_fetch(
        args,
        ctx.fetch_teacher_shared_resources,
        source=getattr(args, "source", "all"),
        page=int(getattr(args, "page", 1) or 1),
        page_size=int(getattr(args, "page_size", 20) or 20),
        conditions=getattr(args, "conditions", ""),
    )


async def _run_teacher_shared_resource_collections(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    return await _run_teacher_fetch(
        args,
        ctx.fetch_teacher_shared_resource_collections,
        user_id=getattr(args, "user_id", ""),
        page=int(getattr(args, "page", 1) or 1),
        page_size=int(getattr(args, "page_size", 20) or 20),
        conditions=getattr(args, "conditions", ""),
    )


async def _run_teacher_shared_resource_comments(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    return await _run_teacher_fetch(
        args,
        ctx.fetch_teacher_shared_resource_comments,
        resource_id=getattr(args, "resource_id", ""),
        page=int(getattr(args, "page", 1) or 1),
        page_size=int(getattr(args, "page_size", 20) or 20),
    )


async def _run_teacher_shared_resource_classifications(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    return await _run_teacher_fetch(args, ctx.fetch_teacher_shared_resource_classifications)


async def _run_teacher_shared_resource_tags(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    return await _run_teacher_fetch(
        args,
        ctx.fetch_teacher_shared_resource_tags,
        name=getattr(args, "name", ""),
        page=int(getattr(args, "page", 1) or 1),
    )


async def _run_teacher_shared_resource_recommendations(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    return await _run_teacher_fetch(args, ctx.fetch_teacher_shared_resource_recommendations)


async def _run_teacher_shared_resource_track_users(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    return await _run_teacher_fetch(
        args,
        ctx.fetch_teacher_shared_resource_track_users,
        conditions=getattr(args, "conditions", ""),
    )


async def _run_teacher_shared_resource_followers(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    return await _run_teacher_fetch(
        args,
        ctx.fetch_teacher_shared_resource_followers,
        conditions=getattr(args, "conditions", ""),
    )


async def _run_teacher_cc_license_groups(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    return await _run_teacher_fetch(args, ctx.fetch_teacher_cc_license_groups)


async def _run_teacher_cc_license_map(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    return await _run_teacher_fetch(args, ctx.fetch_teacher_cc_license_map)


async def _run_teacher_entries(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    return await _run_teacher_fetch(
        args,
        ctx.fetch_teacher_entries,
        page=int(getattr(args, "page", 1) or 1),
        page_size=int(getattr(args, "page_size", 20) or 20),
        conditions=getattr(args, "conditions", ""),
        fields=getattr(args, "fields", ""),
    )


async def _run_teacher_entry(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    return await _run_teacher_fetch(
        args,
        ctx.fetch_teacher_entry,
        entry_id=getattr(args, "entry_id", ""),
        fields=getattr(args, "fields", ""),
    )


async def _run_teacher_entry_references(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    return await _run_teacher_fetch(
        args,
        ctx.fetch_teacher_entry_references,
        entry_id=getattr(args, "entry_id", ""),
        page=int(getattr(args, "page", 1) or 1),
        page_size=int(getattr(args, "page_size", 20) or 20),
    )


async def _run_teacher_slides(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    return await _run_teacher_fetch(
        args,
        ctx.fetch_teacher_slides,
        keyword=getattr(args, "keyword", ""),
    )


async def _run_teacher_slide(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    return await _run_teacher_fetch(args, ctx.fetch_teacher_slide, slide_id=getattr(args, "slide_id", ""))


async def _run_teacher_slide_records(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    return await _run_teacher_fetch(
        args,
        ctx.fetch_teacher_slide_records,
        slide_id=getattr(args, "slide_id", ""),
    )


async def _run_teacher_slide_export_status(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    return await _run_teacher_fetch(
        args,
        ctx.fetch_teacher_slide_export_status,
        slide_id=getattr(args, "slide_id", ""),
    )


async def _run_teacher_published_slides(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    return await _run_teacher_fetch(
        args,
        ctx.fetch_teacher_published_slides,
        fields=getattr(args, "fields", ""),
    )


async def _run_teacher_subject_libs(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    active = ctx.get_active_profile(ctx.CONFIG)
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        scope = ctx.normalize_text(getattr(args, "scope", "user")).lower() or "user"
        course_id = ctx.normalize_text(getattr(args, "course_id", ""))
        if scope == "course" or course_id:
            course_id, error = await _resolve_teacher_course_id(session, client, active, args)
            if error is not None:
                return error
            scope = "course"
        result = await ctx.fetch_teacher_subject_libs(
            session,
            endpoints=client.endpoints,
            course_id=course_id,
            scope=scope,
            with_folder=not bool(getattr(args, "without_folder", False)),
            lib_type=getattr(args, "lib_type", ""),
            parent_id=getattr(args, "parent_id", ""),
            predicate=getattr(args, "predicate", ""),
            reverse=getattr(args, "reverse", ""),
            request_ssl=ctx.get_ssl_request_setting(),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
        )
    payload = result.to_dict()
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    if course_id:
        payload["course_id"] = course_id
    return payload


async def _run_teacher_subject_lib_subjects(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    active = ctx.get_active_profile(ctx.CONFIG)
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        result = await ctx.fetch_teacher_subject_lib_subjects(
            session,
            endpoints=client.endpoints,
            subject_lib_id=getattr(args, "subject_lib_id", ""),
            keyword=getattr(args, "keyword", ""),
            subject_type=getattr(args, "subject_type", ""),
            request_ssl=ctx.get_ssl_request_setting(),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
        )
    payload = result.to_dict()
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    return payload


async def _run_teacher_subject_lib_statistic(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    active = ctx.get_active_profile(ctx.CONFIG)
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        result = await ctx.fetch_teacher_subject_lib_statistic(
            session,
            endpoints=client.endpoints,
            subject_lib_id=getattr(args, "subject_lib_id", ""),
            page=int(getattr(args, "page", 1) or 1),
            page_size=int(getattr(args, "page_size", 20) or 20),
            conditions=getattr(args, "conditions", ""),
            request_ssl=ctx.get_ssl_request_setting(),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
        )
    payload = result.to_dict()
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    return payload


async def _run_teacher_subject_lib_knowledge_nodes(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    active = ctx.get_active_profile(ctx.CONFIG)
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        result = await ctx.fetch_teacher_subject_lib_knowledge_nodes(
            session,
            endpoints=client.endpoints,
            subject_lib_id=getattr(args, "subject_lib_id", ""),
            request_ssl=ctx.get_ssl_request_setting(),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
        )
    payload = result.to_dict()
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    return payload


async def _run_teacher_subject_lib_folders(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    active = ctx.get_active_profile(ctx.CONFIG)
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        referrer_id = ctx.normalize_text(getattr(args, "referrer_id", ""))
        course_id = ctx.normalize_text(getattr(args, "course_id", ""))
        if not referrer_id and not course_id and ctx.normalize_text(getattr(args, "referrer_type", "course")) == "course":
            course_id, error = await _resolve_teacher_course_id(session, client, active, args)
            if error is not None:
                return error
        result = await ctx.fetch_teacher_subject_lib_folders(
            session,
            endpoints=client.endpoints,
            referrer_type=getattr(args, "referrer_type", "course"),
            referrer_id=referrer_id,
            course_id=course_id,
            parent_id=getattr(args, "parent_id", 0),
            request_ssl=ctx.get_ssl_request_setting(),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
        )
    payload = result.to_dict()
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    if course_id:
        payload["course_id"] = course_id
    return payload


async def _run_teacher_questionnaire_submissions(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    active = ctx.get_active_profile(ctx.CONFIG)
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        result = await ctx.fetch_teacher_questionnaire_submissions(
            session,
            endpoints=client.endpoints,
            questionnaire_id=getattr(args, "questionnaire_id", ""),
            subject_id=getattr(args, "subject_id", ""),
            offset=int(getattr(args, "offset", 0) or 0),
            limit=int(getattr(args, "limit", 20) or 20),
            request_ssl=ctx.get_ssl_request_setting(),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
        )
    payload = result.to_dict()
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    return payload


async def _run_teacher_course_estimate_replies(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    active = ctx.get_active_profile(ctx.CONFIG)
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        result = await ctx.fetch_teacher_course_estimate_replies(
            session,
            endpoints=client.endpoints,
            course_estimate_id=getattr(args, "course_estimate_id", ""),
            request_ssl=ctx.get_ssl_request_setting(),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
        )
    payload = result.to_dict()
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    return payload


async def _run_teacher_course_estimate_user(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    active = ctx.get_active_profile(ctx.CONFIG)
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        result = await ctx.fetch_teacher_course_estimate_user(
            session,
            endpoints=client.endpoints,
            course_estimate_id=getattr(args, "course_estimate_id", ""),
            user_id=getattr(args, "user_id", ""),
            request_ssl=ctx.get_ssl_request_setting(),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
        )
    payload = result.to_dict()
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    return payload


async def _run_teacher_course_package_course(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    active = ctx.get_active_profile(ctx.CONFIG)
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        result = await ctx.fetch_teacher_course_package_course(
            session,
            endpoints=client.endpoints,
            course_package_id=getattr(args, "course_package_id", ""),
            fields=getattr(args, "fields", ""),
            request_ssl=ctx.get_ssl_request_setting(),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
        )
    payload = result.to_dict()
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    return payload


async def _run_teacher_courseware_quizzes(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    active = ctx.get_active_profile(ctx.CONFIG)
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        result = await ctx.fetch_teacher_courseware_quizzes(
            session,
            endpoints=client.endpoints,
            activity_id=getattr(args, "activity_id", ""),
            request_ssl=ctx.get_ssl_request_setting(),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
        )
    payload = result.to_dict()
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    return payload


async def _run_teacher_courseware_quiz_subjects(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    active = ctx.get_active_profile(ctx.CONFIG)
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        result = await ctx.fetch_teacher_courseware_quiz_subjects(
            session,
            endpoints=client.endpoints,
            courseware_quiz_id=getattr(args, "courseware_quiz_id", ""),
            request_ssl=ctx.get_ssl_request_setting(),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
        )
    payload = result.to_dict()
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    return payload


async def _run_teacher_courseware_quiz_settings(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    active = ctx.get_active_profile(ctx.CONFIG)
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        result = await ctx.fetch_teacher_courseware_quiz_settings(
            session,
            endpoints=client.endpoints,
            request_ssl=ctx.get_ssl_request_setting(),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
        )
    payload = result.to_dict()
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    return payload


async def _run_teacher_module_dependents(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    active = ctx.get_active_profile(ctx.CONFIG)
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        result = await ctx.check_teacher_module_dependents(
            session,
            endpoints=client.endpoints,
            module_id=getattr(args, "module_id", ""),
            request_ssl=ctx.get_ssl_request_setting(),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
        )
    payload = result.to_dict()
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    return payload


async def _run_teacher_syllabus_dependents(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    active = ctx.get_active_profile(ctx.CONFIG)
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        result = await ctx.check_teacher_syllabus_dependents(
            session,
            endpoints=client.endpoints,
            syllabus_id=getattr(args, "syllabus_id", ""),
            request_ssl=ctx.get_ssl_request_setting(),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
        )
    payload = result.to_dict()
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    return payload


async def _resolve_teacher_course_id(
    session: ctx.Any,
    client: ctx.Any,
    active: ctx.Any,
    args: ctx.Any,
) -> tuple[str, ctx.Dict[str, ctx.Any] | None]:
    context = await ctx.discover_teacher_context(
        session,
        endpoints=client.endpoints,
        request_ssl=ctx.get_ssl_request_setting(),
        active_user=active.user,
        max_courses=int(getattr(args, "max_courses", 50) or 50),
    )
    context_payload = context.to_dict()
    course_id = _select_course_id(context_payload, getattr(args, "course_id", ""))
    if course_id:
        return course_id, None
    return "", {
        "status": "course_required",
        "profile": active.name,
        "account_type": context.account_type,
        "courses": context_payload.get("courses", []),
        "message": "Please provide a course id.",
    }


async def _run_teacher_fetch(
    args: ctx.Any,
    fetcher: ctx.Any,
    **fetch_kwargs: ctx.Any,
) -> ctx.Dict[str, ctx.Any]:
    active = ctx.get_active_profile(ctx.CONFIG)
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        result = await fetcher(
            session,
            endpoints=client.endpoints,
            request_ssl=ctx.get_ssl_request_setting(),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
            **fetch_kwargs,
        )
    payload = result.to_dict()
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    return payload


async def _run_teacher_course_fetch(
    args: ctx.Any,
    fetcher: ctx.Any,
    **fetch_kwargs: ctx.Any,
) -> ctx.Dict[str, ctx.Any]:
    active = ctx.get_active_profile(ctx.CONFIG)
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        course_id, error = await _resolve_teacher_course_id(session, client, active, args)
        if error is not None:
            return error
        result = await fetcher(
            session,
            endpoints=client.endpoints,
            course_id=course_id,
            request_ssl=ctx.get_ssl_request_setting(),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
            **fetch_kwargs,
        )
    payload = result.to_dict()
    payload["course_id"] = course_id
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    return payload


async def _run_teacher_rollcall_fetch(
    args: ctx.Any,
    fetcher: ctx.Any,
    **fetch_kwargs: ctx.Any,
) -> ctx.Dict[str, ctx.Any]:
    active = ctx.get_active_profile(ctx.CONFIG)
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        result = await fetcher(
            session,
            endpoints=client.endpoints,
            request_ssl=ctx.get_ssl_request_setting(),
            include_sensitive=bool(getattr(args, "include_sensitive", False)),
            **fetch_kwargs,
        )
    payload = result.to_dict()
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    return payload


async def _run_teacher_course_rollcall_detail(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    return await _run_teacher_course_fetch(
        args,
        ctx.fetch_teacher_course_rollcall_detail,
        rollcall_id=getattr(args, "rollcall_id", ""),
    )


async def _run_teacher_ongoing_student_rollcalls(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    return await _run_teacher_course_fetch(
        args,
        ctx.fetch_teacher_ongoing_student_rollcalls,
        group_rollcall=getattr(args, "group_rollcall", ""),
    )


async def _run_teacher_leave_record(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    return await _run_teacher_course_fetch(
        args,
        ctx.fetch_teacher_leave_record,
        timestamp=getattr(args, "timestamp", ""),
        page=getattr(args, "page", ""),
        page_size=getattr(args, "page_size", ""),
    )


async def _run_teacher_student_rollcalls(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    return await _run_teacher_course_fetch(
        args,
        ctx.fetch_teacher_student_rollcalls,
        student_id=getattr(args, "student_id", ""),
        page=getattr(args, "page", ""),
        page_size=getattr(args, "page_size", ""),
        rollcall_ids=getattr(args, "rollcall_ids", ""),
    )


async def _run_teacher_rollcall_students_page(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    return await _run_teacher_rollcall_fetch(
        args,
        ctx.fetch_teacher_rollcall_students_page,
        rollcall_id=getattr(args, "rollcall_id", ""),
        page=int(getattr(args, "page", 1) or 1),
        page_size=int(getattr(args, "page_size", 20) or 20),
        rollcall_status=getattr(args, "rollcall_status", ""),
    )


async def _run_teacher_rollcall_count(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    return await _run_teacher_rollcall_fetch(
        args,
        ctx.fetch_teacher_rollcall_count,
        rollcall_id=getattr(args, "rollcall_id", ""),
    )


async def _run_teacher_rollcall_status_result(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    return await _run_teacher_rollcall_fetch(
        args,
        ctx.fetch_teacher_rollcall_status_result,
        rollcall_id=getattr(args, "rollcall_id", ""),
    )


async def _run_teacher_qrcode_download(args: ctx.Any) -> ctx.Dict[str, ctx.Any]:
    return await _run_teacher_download(
        args,
        ctx.download_teacher_qrcode,
        url=getattr(args, "url", ""),
    )


def _action_payload(
    args: ctx.Any,
    active: ctx.Any,
    *,
    required: bool = True,
) -> tuple[bool, ctx.Any, ctx.Dict[str, ctx.Any]]:
    parsed, payload, message = _payload_from_json(
        getattr(args, "payload_json", ""),
        allow_empty=not required,
    )
    if not parsed:
        return False, None, {"status": "invalid_payload", "message": message, "profile": active.name}
    return True, payload, {}


async def _run_teacher_resource_action(
    args: ctx.Any,
    action_name: str,
    *,
    active: ctx.Any,
    session: ctx.Any,
    client: ctx.Any,
    execute: bool,
    confirm: bool,
    include_sensitive: bool,
) -> ctx.Any:
    request_ssl = ctx.get_ssl_request_setting()
    if action_name == "create_resource_group":
        parsed, payload, error = _action_payload(args, active, required=True)
        if not parsed:
            return error
        return await ctx.create_teacher_resource_group(
            session,
            endpoints=client.endpoints,
            payload=payload,
            request_ssl=request_ssl,
            execute=execute,
            confirm=confirm,
            include_sensitive=include_sensitive,
        )
    if action_name == "update_resource_group":
        parsed, payload, error = _action_payload(args, active, required=True)
        if not parsed:
            return error
        return await ctx.update_teacher_resource_group(
            session,
            endpoints=client.endpoints,
            resource_group_id=getattr(args, "resource_group_id", ""),
            payload=payload,
            request_ssl=request_ssl,
            execute=execute,
            confirm=confirm,
            include_sensitive=include_sensitive,
        )
    if action_name == "delete_resource_group":
        return await ctx.delete_teacher_resource_group(
            session,
            endpoints=client.endpoints,
            resource_group_id=getattr(args, "resource_group_id", ""),
            request_ssl=request_ssl,
            execute=execute,
            confirm=confirm,
            include_sensitive=include_sensitive,
        )
    if action_name == "delete_resource_group_members":
        parsed, payload, error = _action_payload(args, active, required=True)
        if not parsed:
            return error
        return await ctx.delete_teacher_resource_group_members(
            session,
            endpoints=client.endpoints,
            resource_group_id=getattr(args, "resource_group_id", ""),
            payload=payload,
            request_ssl=request_ssl,
            execute=execute,
            confirm=confirm,
            include_sensitive=include_sensitive,
        )
    if action_name == "delete_resource_group_folder":
        return await ctx.delete_teacher_resource_group_folder(
            session,
            endpoints=client.endpoints,
            resource_group_id=getattr(args, "resource_group_id", ""),
            folder_id=getattr(args, "folder_id", ""),
            request_ssl=request_ssl,
            execute=execute,
            confirm=confirm,
            include_sensitive=include_sensitive,
        )
    if action_name == "update_resource_group_resource":
        parsed, payload, error = _action_payload(args, active, required=True)
        if not parsed:
            return error
        return await ctx.update_teacher_resource_group_resource(
            session,
            endpoints=client.endpoints,
            resource_group_id=getattr(args, "resource_group_id", ""),
            resource_id=getattr(args, "resource_id", ""),
            payload=payload,
            request_ssl=request_ssl,
            execute=execute,
            confirm=confirm,
            include_sensitive=include_sensitive,
        )
    if action_name == "delete_resource_group_resource":
        return await ctx.delete_teacher_resource_group_resource(
            session,
            endpoints=client.endpoints,
            resource_id=getattr(args, "resource_id", ""),
            request_ssl=request_ssl,
            execute=execute,
            confirm=confirm,
            include_sensitive=include_sensitive,
        )
    if action_name == "leave_resource_group":
        return await ctx.leave_teacher_resource_group(
            session,
            endpoints=client.endpoints,
            resource_group_id=getattr(args, "resource_group_id", ""),
            request_ssl=request_ssl,
            execute=execute,
            confirm=confirm,
            include_sensitive=include_sensitive,
        )
    if action_name == "save_shared_resource":
        return await ctx.save_teacher_shared_resource(
            session,
            endpoints=client.endpoints,
            resource_id=getattr(args, "resource_id", ""),
            request_ssl=request_ssl,
            execute=execute,
            confirm=confirm,
            include_sensitive=include_sensitive,
        )
    if action_name == "batch_save_shared_resources":
        return await ctx.batch_save_teacher_shared_resources(
            session,
            endpoints=client.endpoints,
            resource_ids=_csv_values(getattr(args, "resource_ids", "")),
            request_ssl=request_ssl,
            execute=execute,
            confirm=confirm,
            include_sensitive=include_sensitive,
        )
    if action_name in {"set_shared_resource_collection", "unset_shared_resource_collection"}:
        return await ctx.set_teacher_shared_resource_collection(
            session,
            endpoints=client.endpoints,
            resource_id=getattr(args, "resource_id", ""),
            user_id=getattr(args, "user_id", ""),
            collect=action_name == "set_shared_resource_collection",
            request_ssl=request_ssl,
            execute=execute,
            confirm=confirm,
            include_sensitive=include_sensitive,
        )
    if action_name == "publish_shared_resource":
        parsed, payload, error = _action_payload(args, active, required=True)
        if not parsed:
            return error
        return await ctx.publish_teacher_shared_resource(
            session,
            endpoints=client.endpoints,
            payload=payload,
            request_ssl=request_ssl,
            execute=execute,
            confirm=confirm,
            include_sensitive=include_sensitive,
        )
    if action_name in {"delete_shared_resource", "delete_shared_resource_to"}:
        return await ctx.delete_teacher_shared_resource(
            session,
            endpoints=client.endpoints,
            resource_id=getattr(args, "resource_id", ""),
            share_to=action_name == "delete_shared_resource_to",
            request_ssl=request_ssl,
            execute=execute,
            confirm=confirm,
            include_sensitive=include_sensitive,
        )
    if action_name == "add_shared_resource_comment":
        parsed, payload, error = _action_payload(args, active, required=True)
        if not parsed:
            return error
        return await ctx.add_teacher_shared_resource_comment(
            session,
            endpoints=client.endpoints,
            resource_id=getattr(args, "resource_id", ""),
            payload=payload,
            request_ssl=request_ssl,
            execute=execute,
            confirm=confirm,
            include_sensitive=include_sensitive,
        )
    if action_name == "delete_shared_resource_comment":
        return await ctx.delete_teacher_shared_resource_comment(
            session,
            endpoints=client.endpoints,
            comment_id=getattr(args, "comment_id", ""),
            request_ssl=request_ssl,
            execute=execute,
            confirm=confirm,
            include_sensitive=include_sensitive,
        )
    if action_name == "create_entry":
        parsed, payload, error = _action_payload(args, active, required=True)
        if not parsed:
            return error
        return await ctx.create_teacher_entry(
            session,
            endpoints=client.endpoints,
            payload=payload,
            request_ssl=request_ssl,
            execute=execute,
            confirm=confirm,
            include_sensitive=include_sensitive,
        )
    if action_name == "update_entry":
        parsed, payload, error = _action_payload(args, active, required=True)
        if not parsed:
            return error
        return await ctx.update_teacher_entry(
            session,
            endpoints=client.endpoints,
            entry_id=getattr(args, "entry_id", ""),
            payload=payload,
            request_ssl=request_ssl,
            execute=execute,
            confirm=confirm,
            include_sensitive=include_sensitive,
        )
    if action_name == "delete_entry":
        return await ctx.delete_teacher_entry(
            session,
            endpoints=client.endpoints,
            entry_id=getattr(args, "entry_id", ""),
            request_ssl=request_ssl,
            execute=execute,
            confirm=confirm,
            include_sensitive=include_sensitive,
        )
    if action_name == "batch_delete_entries":
        return await ctx.batch_delete_teacher_entries(
            session,
            endpoints=client.endpoints,
            entry_ids=_csv_values(getattr(args, "entry_ids", "")),
            request_ssl=request_ssl,
            execute=execute,
            confirm=confirm,
            include_sensitive=include_sensitive,
        )
    if action_name == "update_slide":
        parsed, payload, error = _action_payload(args, active, required=True)
        if not parsed:
            return error
        return await ctx.update_teacher_slide(
            session,
            endpoints=client.endpoints,
            slide_id=getattr(args, "slide_id", ""),
            payload=payload,
            request_ssl=request_ssl,
            execute=execute,
            confirm=confirm,
            include_sensitive=include_sensitive,
        )
    if action_name == "export_slide":
        return await ctx.export_teacher_slide(
            session,
            endpoints=client.endpoints,
            slide_id=getattr(args, "slide_id", ""),
            request_ssl=request_ssl,
            execute=execute,
            confirm=confirm,
            include_sensitive=include_sensitive,
        )
    if action_name == "delete_slide":
        return await ctx.delete_teacher_slide(
            session,
            endpoints=client.endpoints,
            slide_id=getattr(args, "slide_id", ""),
            request_ssl=request_ssl,
            execute=execute,
            confirm=confirm,
            include_sensitive=include_sensitive,
        )
    if action_name == "batch_delete_slides":
        return await ctx.batch_delete_teacher_slides(
            session,
            endpoints=client.endpoints,
            slide_ids=_csv_values(getattr(args, "slide_ids", "")),
            request_ssl=request_ssl,
            execute=execute,
            confirm=confirm,
            include_sensitive=include_sensitive,
        )
    if action_name == "update_slide_video_info":
        parsed, payload, error = _action_payload(args, active, required=True)
        if not parsed:
            return error
        return await ctx.update_teacher_slide_video_info(
            session,
            endpoints=client.endpoints,
            slide_id=getattr(args, "slide_id", ""),
            payload=payload,
            request_ssl=request_ssl,
            execute=execute,
            confirm=confirm,
            include_sensitive=include_sensitive,
        )
    if action_name == "delete_slide_record":
        return await ctx.delete_teacher_slide_record(
            session,
            endpoints=client.endpoints,
            record_id=getattr(args, "record_id", ""),
            request_ssl=request_ssl,
            execute=execute,
            confirm=confirm,
            include_sensitive=include_sensitive,
        )
    return {"status": "unknown_action", "profile": active.name, "action": action_name}


RESOURCE_ACTION_NAMES = {
    "create_resource_group",
    "update_resource_group",
    "delete_resource_group",
    "delete_resource_group_members",
    "delete_resource_group_folder",
    "update_resource_group_resource",
    "delete_resource_group_resource",
    "leave_resource_group",
    "save_shared_resource",
    "batch_save_shared_resources",
    "set_shared_resource_collection",
    "unset_shared_resource_collection",
    "publish_shared_resource",
    "delete_shared_resource",
    "delete_shared_resource_to",
    "add_shared_resource_comment",
    "delete_shared_resource_comment",
    "create_entry",
    "update_entry",
    "delete_entry",
    "batch_delete_entries",
    "update_slide",
    "export_slide",
    "delete_slide",
    "batch_delete_slides",
    "update_slide_video_info",
    "delete_slide_record",
}


async def _run_teacher_action(args: ctx.Any, action_name: str) -> ctx.Dict[str, ctx.Any]:
    active = ctx.get_active_profile(ctx.CONFIG)
    async with ctx.aiohttp.ClientSession(**_teacher_session_kwargs()) as session:
        ok, login_report = await _ensure_teacher_login(session)
        if not ok:
            return login_report
        client = ctx.create_tron_http_client(session, request_ssl=ctx.get_ssl_request_setting())
        execute = bool(getattr(args, "execute", False))
        confirm = bool(getattr(args, "yes", False))
        include_sensitive = bool(getattr(args, "include_sensitive", False))
        if action_name in RESOURCE_ACTION_NAMES:
            result = await _run_teacher_resource_action(
                args,
                action_name,
                active=active,
                session=session,
                client=client,
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
            if isinstance(result, Mapping):
                return dict(result)
        elif action_name == "create_calendar_meeting":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.create_teacher_calendar_meeting(
                session,
                endpoints=client.endpoints,
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "update_calendar_meeting":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.update_teacher_calendar_meeting(
                session,
                endpoints=client.endpoints,
                meeting_id=getattr(args, "meeting_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "delete_calendar_meeting":
            result = await ctx.delete_teacher_calendar_meeting(
                session,
                endpoints=client.endpoints,
                meeting_id=getattr(args, "meeting_id", ""),
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "create_air_credit_assignments":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.create_teacher_air_credit_assignments(
                session,
                endpoints=client.endpoints,
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "update_air_credit_assignments":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.update_teacher_air_credit_assignments(
                session,
                endpoints=client.endpoints,
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "update_air_credit_status":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.update_teacher_air_credit_status(
                session,
                endpoints=client.endpoints,
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "clear_air_credit_remaining_credits":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.clear_teacher_air_credit_remaining_credits(
                session,
                endpoints=client.endpoints,
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "update_air_credit_course_usage_limit":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=True)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.update_teacher_air_credit_course_usage_limit(
                session,
                endpoints=client.endpoints,
                payload=payload,
                usage_limit=getattr(args, "usage_limit", ""),
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "create_teaching_calendar":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            course_id, error = await _resolve_teacher_course_id(session, client, active, args)
            if error is not None:
                return error
            result = await ctx.create_teacher_teaching_calendar(
                session,
                endpoints=client.endpoints,
                course_id=course_id,
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "update_teaching_calendar":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.update_teacher_teaching_calendar(
                session,
                endpoints=client.endpoints,
                calendar_id=getattr(args, "calendar_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "delete_teaching_calendar":
            result = await ctx.delete_teacher_teaching_calendar(
                session,
                endpoints=client.endpoints,
                calendar_id=getattr(args, "calendar_id", ""),
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "notify_outline_editing":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=True)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            course_ids = _csv_values(getattr(args, "course_ids", ""))
            if not course_ids and "course_ids" not in payload:
                return {"status": "invalid_payload", "message": "payload_json_or_course_ids_required", "profile": active.name}
            result = await ctx.notify_teacher_outline_editing(
                session,
                endpoints=client.endpoints,
                course_ids=course_ids,
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "sync_courses_from_urp":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=True)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            course_ids = _csv_values(getattr(args, "course_ids", ""))
            if not course_ids and "course_ids" not in payload:
                return {"status": "invalid_payload", "message": "payload_json_or_course_ids_required", "profile": active.name}
            result = await ctx.sync_teacher_courses_from_urp(
                session,
                endpoints=client.endpoints,
                course_ids=course_ids,
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "update_chinamcloud_resources":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=True)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            resources_parsed, resources, resources_message = _json_array_from_text(
                getattr(args, "resources_json", ""),
                allow_empty=True,
            )
            if not resources_parsed:
                return {"status": "invalid_payload", "message": resources_message, "profile": active.name}
            if not resources and "resources" not in payload:
                return {"status": "invalid_payload", "message": "payload_json_or_resources_json_required", "profile": active.name}
            result = await ctx.update_teacher_chinamcloud_resources(
                session,
                endpoints=client.endpoints,
                resources=resources,
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "update_course_outline":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            course_id, error = await _resolve_teacher_course_id(session, client, active, args)
            if error is not None:
                return error
            result = await ctx.update_teacher_course_outline(
                session,
                endpoints=client.endpoints,
                course_id=course_id,
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "create_outline_setting":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.create_teacher_outline_setting(
                session,
                endpoints=client.endpoints,
                setting_id=getattr(args, "setting_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "update_outline_setting":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.update_teacher_outline_setting(
                session,
                endpoints=client.endpoints,
                setting_id=getattr(args, "setting_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "sort_outline_setting":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.sort_teacher_outline_setting(
                session,
                endpoints=client.endpoints,
                setting_id=getattr(args, "setting_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "delete_outline_setting_option":
            result = await ctx.delete_teacher_outline_setting_option(
                session,
                endpoints=client.endpoints,
                setting_id=getattr(args, "setting_id", ""),
                option_key=getattr(args, "option_key", ""),
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "toggle_outline_setting":
            result = await ctx.toggle_teacher_outline_setting(
                session,
                endpoints=client.endpoints,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "update_outline_required_options":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=True)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            required_options_parsed, required_options, required_options_message = _json_array_from_text(
                getattr(args, "required_options_json", ""),
                allow_empty=True,
            )
            if not required_options_parsed:
                return {"status": "invalid_payload", "message": required_options_message, "profile": active.name}
            if not required_options and "required_options" not in payload:
                return {"status": "invalid_payload", "message": "payload_json_or_required_options_json_required", "profile": active.name}
            result = await ctx.update_teacher_outline_required_options(
                session,
                endpoints=client.endpoints,
                setting_id=getattr(args, "setting_id", ""),
                required_options=required_options,
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "update_enrollment_role":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=True)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            role = ctx.normalize_text(getattr(args, "role", ""))
            if not role and "role" not in payload:
                return {"status": "invalid_payload", "message": "payload_json_or_role_required", "profile": active.name}
            result = await ctx.update_teacher_enrollment_role(
                session,
                endpoints=client.endpoints,
                enrollment_id=getattr(args, "enrollment_id", ""),
                role=role,
                role_id=getattr(args, "role_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "update_enrollments_role":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=True)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            enrollment_ids = _csv_values(getattr(args, "enrollment_ids", ""))
            role = ctx.normalize_text(getattr(args, "role", ""))
            if not enrollment_ids and "enrollment_ids" not in payload:
                return {"status": "invalid_payload", "message": "payload_json_or_enrollment_ids_required", "profile": active.name}
            if not role and "role" not in payload:
                return {"status": "invalid_payload", "message": "payload_json_or_role_required", "profile": active.name}
            result = await ctx.update_teacher_enrollments_role(
                session,
                endpoints=client.endpoints,
                enrollment_ids=enrollment_ids,
                role=role,
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "delete_enrollment":
            result = await ctx.delete_teacher_enrollment(
                session,
                endpoints=client.endpoints,
                enrollment_id=getattr(args, "enrollment_id", ""),
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "delete_enrollments":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=True)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            enrollment_ids = _csv_values(getattr(args, "enrollment_ids", ""))
            if not enrollment_ids and "enrollment_ids" not in payload:
                return {"status": "invalid_payload", "message": "payload_json_or_enrollment_ids_required", "profile": active.name}
            result = await ctx.delete_teacher_enrollments(
                session,
                endpoints=client.endpoints,
                enrollment_ids=enrollment_ids,
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "start_rollcall":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=True)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.start_teacher_rollcall(
                session,
                endpoints=client.endpoints,
                rollcall_id=getattr(args, "rollcall_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "create_rollcall":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            context = await ctx.discover_teacher_context(
                session,
                endpoints=client.endpoints,
                request_ssl=ctx.get_ssl_request_setting(),
                active_user=active.user,
                max_courses=int(getattr(args, "max_courses", 50) or 50),
            )
            context_payload = context.to_dict()
            course_id = _select_course_id(context_payload, getattr(args, "course_id", ""))
            if not course_id:
                return {
                    "status": "course_required",
                    "profile": active.name,
                    "account_type": context.account_type,
                    "courses": context_payload.get("courses", []),
                    "message": "Please provide a course id.",
                }
            if "courseId" not in payload and "course_id" not in payload:
                payload["courseId"] = course_id
            result = await ctx.create_teacher_rollcall(
                session,
                endpoints=client.endpoints,
                course_id=course_id,
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "create_module_rollcall":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            course_id, error = await _resolve_teacher_course_id(session, client, active, args)
            if error is not None:
                return error
            if "courseId" not in payload and "course_id" not in payload:
                payload["course_id"] = course_id
            result = await ctx.create_teacher_module_rollcall(
                session,
                endpoints=client.endpoints,
                course_id=course_id,
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "activate_rollcall":
            result = await ctx.activate_teacher_rollcall(
                session,
                endpoints=client.endpoints,
                rollcall_id=getattr(args, "rollcall_id", ""),
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "update_rollcall":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.update_teacher_rollcall(
                session,
                endpoints=client.endpoints,
                rollcall_id=getattr(args, "rollcall_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "update_radar_rollcall_position":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.update_teacher_radar_rollcall_position(
                session,
                endpoints=client.endpoints,
                rollcall_id=getattr(args, "rollcall_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "stop_rollcall":
            result = await ctx.stop_teacher_rollcall(
                session,
                endpoints=client.endpoints,
                rollcall_id=getattr(args, "rollcall_id", ""),
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
            )
        elif action_name == "stop_timetable_rollcall":
            result = await ctx.stop_teacher_timetable_rollcall(
                session,
                endpoints=client.endpoints,
                rollcall_id=getattr(args, "rollcall_id", ""),
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "stop_qr_rollcall":
            result = await ctx.stop_teacher_qr_rollcall(
                session,
                endpoints=client.endpoints,
                rollcall_id=getattr(args, "rollcall_id", ""),
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "stop_number_rollcall":
            result = await ctx.stop_teacher_number_rollcall(
                session,
                endpoints=client.endpoints,
                rollcall_id=getattr(args, "rollcall_id", ""),
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "stop_radar_rollcall":
            result = await ctx.stop_teacher_radar_rollcall(
                session,
                endpoints=client.endpoints,
                rollcall_id=getattr(args, "rollcall_id", ""),
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "answer_qr_rollcall":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.answer_teacher_qr_rollcall(
                session,
                endpoints=client.endpoints,
                rollcall_id=getattr(args, "rollcall_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "answer_number_rollcall":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.answer_teacher_number_rollcall(
                session,
                endpoints=client.endpoints,
                rollcall_id=getattr(args, "rollcall_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "answer_radar_rollcall":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.answer_teacher_radar_rollcall(
                session,
                endpoints=client.endpoints,
                rollcall_id=getattr(args, "rollcall_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "update_student_rollcalls":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            course_id, error = await _resolve_teacher_course_id(session, client, active, args)
            if error is not None:
                return error
            result = await ctx.update_teacher_student_rollcalls(
                session,
                endpoints=client.endpoints,
                course_id=course_id,
                student_id=getattr(args, "student_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "delete_rollcall":
            result = await ctx.delete_teacher_rollcall(
                session,
                endpoints=client.endpoints,
                rollcall_id=getattr(args, "rollcall_id", ""),
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
            )
        elif action_name == "create_merged_rollcall":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.create_teacher_merged_rollcall(
                session,
                endpoints=client.endpoints,
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "update_merged_rollcall_students":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.update_teacher_merged_rollcall_students(
                session,
                endpoints=client.endpoints,
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "update_rollcall_setting":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            context = await ctx.discover_teacher_context(
                session,
                endpoints=client.endpoints,
                request_ssl=ctx.get_ssl_request_setting(),
                active_user=active.user,
                max_courses=int(getattr(args, "max_courses", 50) or 50),
            )
            context_payload = context.to_dict()
            course_id = _select_course_id(context_payload, getattr(args, "course_id", ""))
            if not course_id:
                return {
                    "status": "course_required",
                    "profile": active.name,
                    "account_type": context.account_type,
                    "courses": context_payload.get("courses", []),
                    "message": "Please provide a course id.",
                }
            result = await ctx.update_teacher_rollcall_setting(
                session,
                endpoints=client.endpoints,
                course_id=course_id,
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "update_rollcall_score":
            result = await ctx.update_teacher_rollcall_score(
                session,
                endpoints=client.endpoints,
                enrollment_id=getattr(args, "enrollment_id", ""),
                rollcall_score=getattr(args, "score", ""),
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
            )
        elif action_name == "update_announce_score_settings":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            course_id, error = await _resolve_teacher_course_id(session, client, active, args)
            if error is not None:
                return error
            result = await ctx.update_teacher_announce_score_settings(
                session,
                endpoints=client.endpoints,
                course_id=course_id,
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "update_score_type_settings":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            course_id, error = await _resolve_teacher_course_id(session, client, active, args)
            if error is not None:
                return error
            result = await ctx.update_teacher_score_type_settings(
                session,
                endpoints=client.endpoints,
                course_id=course_id,
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "create_custom_score_item":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            course_id, error = await _resolve_teacher_course_id(session, client, active, args)
            if error is not None:
                return error
            result = await ctx.create_teacher_custom_score_item(
                session,
                endpoints=client.endpoints,
                course_id=course_id,
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "update_custom_score_item":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.update_teacher_custom_score_item(
                session,
                endpoints=client.endpoints,
                item_id=getattr(args, "item_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "delete_custom_score_item":
            result = await ctx.delete_teacher_custom_score_item(
                session,
                endpoints=client.endpoints,
                item_id=getattr(args, "item_id", ""),
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
            )
        elif action_name == "score_custom_item":
            result = await ctx.score_teacher_custom_item(
                session,
                endpoints=client.endpoints,
                item_id=getattr(args, "item_id", ""),
                student_id=getattr(args, "student_id", ""),
                score=getattr(args, "score", ""),
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
            )
        elif action_name == "update_enrollment_scores":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.update_teacher_enrollment_scores(
                session,
                endpoints=client.endpoints,
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "update_total_scores":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.update_teacher_total_scores(
                session,
                endpoints=client.endpoints,
                mode=getattr(args, "mode", "replace"),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "update_score_book":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.update_teacher_score_book(
                session,
                endpoints=client.endpoints,
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "update_score_publish_item_maps":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.update_teacher_score_publish_item_maps(
                session,
                endpoints=client.endpoints,
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "submit_edu_scores":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.submit_teacher_edu_scores(
                session,
                endpoints=client.endpoints,
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "create_rubric":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.create_teacher_rubric(
                session,
                endpoints=client.endpoints,
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "update_rubric":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.update_teacher_rubric(
                session,
                endpoints=client.endpoints,
                rubric_id=getattr(args, "rubric_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "delete_rubrics":
            result = await ctx.delete_teacher_rubrics(
                session,
                endpoints=client.endpoints,
                rubric_ids=_csv_values(getattr(args, "rubric_ids", "")),
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "create_bulletin":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            course_id, error = await _resolve_teacher_course_id(session, client, active, args)
            if error is not None:
                return error
            result = await ctx.create_teacher_bulletin(
                session,
                endpoints=client.endpoints,
                course_id=course_id,
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "update_bulletin":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.update_teacher_bulletin(
                session,
                endpoints=client.endpoints,
                bulletin_id=getattr(args, "bulletin_id", ""),
                payload=payload,
                org_id=getattr(args, "org_id", ""),
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "delete_bulletin":
            result = await ctx.delete_teacher_bulletin(
                session,
                endpoints=client.endpoints,
                bulletin_id=getattr(args, "bulletin_id", ""),
                org_id=getattr(args, "org_id", ""),
                is_management=bool(getattr(args, "is_management", False)),
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "mark_bulletin_read":
            result = await ctx.mark_teacher_bulletin_read(
                session,
                endpoints=client.endpoints,
                bulletin_id=getattr(args, "bulletin_id", ""),
                org_id=getattr(args, "org_id", ""),
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "create_module":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            course_id, error = await _resolve_teacher_course_id(session, client, active, args)
            if error is not None:
                return error
            result = await ctx.create_teacher_module(
                session,
                endpoints=client.endpoints,
                course_id=course_id,
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "update_module":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.update_teacher_module(
                session,
                endpoints=client.endpoints,
                module_id=getattr(args, "module_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "delete_module":
            result = await ctx.delete_teacher_module(
                session,
                endpoints=client.endpoints,
                module_id=getattr(args, "module_id", ""),
                delete_related_activity=bool(getattr(args, "delete_related_activity", False)),
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "sort_modules":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            course_id, error = await _resolve_teacher_course_id(session, client, active, args)
            if error is not None:
                return error
            result = await ctx.sort_teacher_modules(
                session,
                endpoints=client.endpoints,
                course_id=course_id,
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "create_syllabus":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.create_teacher_syllabus(
                session,
                endpoints=client.endpoints,
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "update_syllabus":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.update_teacher_syllabus(
                session,
                endpoints=client.endpoints,
                syllabus_id=getattr(args, "syllabus_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "delete_syllabus":
            result = await ctx.delete_teacher_syllabus(
                session,
                endpoints=client.endpoints,
                syllabus_id=getattr(args, "syllabus_id", ""),
                delete_related_activity=bool(getattr(args, "delete_related_activity", False)),
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "sort_syllabuses":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.sort_teacher_syllabuses(
                session,
                endpoints=client.endpoints,
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "sort_module_activities":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.sort_teacher_module_activities(
                session,
                endpoints=client.endpoints,
                module_id=getattr(args, "module_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "sort_syllabus_activities":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.sort_teacher_syllabus_activities(
                session,
                endpoints=client.endpoints,
                syllabus_id=getattr(args, "syllabus_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "resort_activity":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.resort_teacher_activity(
                session,
                endpoints=client.endpoints,
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "import_course_groups":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.import_teacher_course_groups(
                session,
                endpoints=client.endpoints,
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name in {
            "import_enrollments",
            "import_scores",
            "import_item_scores",
            "import_seat_numbers",
            "import_rollcalls",
        }:
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            course_id, error = await _resolve_teacher_course_id(session, client, active, args)
            if error is not None:
                return error
            if action_name == "import_enrollments":
                result = await ctx.import_teacher_enrollments(
                    session,
                    endpoints=client.endpoints,
                    course_id=course_id,
                    payload=payload,
                    request_ssl=ctx.get_ssl_request_setting(),
                    execute=execute,
                    confirm=confirm,
                    include_sensitive=include_sensitive,
                )
            elif action_name == "import_scores":
                result = await ctx.import_teacher_scores(
                    session,
                    endpoints=client.endpoints,
                    course_id=course_id,
                    payload=payload,
                    request_ssl=ctx.get_ssl_request_setting(),
                    execute=execute,
                    confirm=confirm,
                    include_sensitive=include_sensitive,
                )
            elif action_name == "import_item_scores":
                result = await ctx.import_teacher_item_scores(
                    session,
                    endpoints=client.endpoints,
                    course_id=course_id,
                    payload=payload,
                    request_ssl=ctx.get_ssl_request_setting(),
                    execute=execute,
                    confirm=confirm,
                    include_sensitive=include_sensitive,
                )
            elif action_name == "import_seat_numbers":
                result = await ctx.import_teacher_seat_numbers(
                    session,
                    endpoints=client.endpoints,
                    course_id=course_id,
                    payload=payload,
                    request_ssl=ctx.get_ssl_request_setting(),
                    execute=execute,
                    confirm=confirm,
                    include_sensitive=include_sensitive,
                )
            else:
                result = await ctx.import_teacher_rollcalls(
                    session,
                    endpoints=client.endpoints,
                    course_id=course_id,
                    payload=payload,
                    request_ssl=ctx.get_ssl_request_setting(),
                    execute=execute,
                    confirm=confirm,
                    include_sensitive=include_sensitive,
                )
        elif action_name == "create_group_set":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            course_id, error = await _resolve_teacher_course_id(session, client, active, args)
            if error is not None:
                return error
            result = await ctx.create_teacher_group_set(
                session,
                endpoints=client.endpoints,
                course_id=course_id,
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "update_group_set":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.update_teacher_group_set(
                session,
                endpoints=client.endpoints,
                group_set_id=getattr(args, "group_set_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "delete_group_set":
            result = await ctx.delete_teacher_group_set(
                session,
                endpoints=client.endpoints,
                group_set_id=getattr(args, "group_set_id", ""),
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "copy_group_set":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            course_id, error = await _resolve_teacher_course_id(session, client, active, args)
            if error is not None:
                return error
            result = await ctx.copy_teacher_group_set(
                session,
                endpoints=client.endpoints,
                course_id=course_id,
                group_set_id=getattr(args, "group_set_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "random_grouping":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.random_teacher_grouping(
                session,
                endpoints=client.endpoints,
                group_set_id=getattr(args, "group_set_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "create_group":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.create_teacher_group(
                session,
                endpoints=client.endpoints,
                group_set_id=getattr(args, "group_set_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "update_group":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.update_teacher_group(
                session,
                endpoints=client.endpoints,
                group_id=getattr(args, "group_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "update_group_info":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.update_teacher_group_info(
                session,
                endpoints=client.endpoints,
                group_id=getattr(args, "group_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "delete_group":
            result = await ctx.delete_teacher_group(
                session,
                endpoints=client.endpoints,
                group_id=getattr(args, "group_id", ""),
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "sort_groups":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.sort_teacher_groups(
                session,
                endpoints=client.endpoints,
                group_set_id=getattr(args, "group_set_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "update_group_members":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.update_teacher_group_members(
                session,
                endpoints=client.endpoints,
                group_id=getattr(args, "group_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "update_group_member":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.update_teacher_group_member(
                session,
                endpoints=client.endpoints,
                group_id=getattr(args, "group_id", ""),
                member_id=getattr(args, "member_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "delete_group_member":
            result = await ctx.delete_teacher_group_member(
                session,
                endpoints=client.endpoints,
                group_id=getattr(args, "group_id", ""),
                member_id=getattr(args, "member_id", ""),
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "delete_activities":
            result = await ctx.delete_teacher_activities(
                session,
                endpoints=client.endpoints,
                activity_ids=_csv_values(getattr(args, "activity_ids", "")),
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
            )
        elif action_name == "create_activity":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            course_id, error = await _resolve_teacher_course_id(session, client, active, args)
            if error is not None:
                return error
            result = await ctx.create_teacher_activity(
                session,
                endpoints=client.endpoints,
                course_id=course_id,
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "update_activity":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.update_teacher_activity(
                session,
                endpoints=client.endpoints,
                activity_id=getattr(args, "activity_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "delete_activity":
            result = await ctx.delete_teacher_activity(
                session,
                endpoints=client.endpoints,
                activity_id=getattr(args, "activity_id", ""),
                delete_related_activity=bool(getattr(args, "delete_related_activity", False)),
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "publish_activities":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=True)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            published_text = ctx.normalize_text(getattr(args, "published", ""))
            published = _optional_bool(published_text) if published_text else None
            if published_text and published is None:
                return {
                    "status": "invalid_payload",
                    "message": "published_must_be_true_or_false",
                    "profile": active.name,
                }
            activity_keys = _csv_values(getattr(args, "activity_keys", ""))
            if not payload and not activity_keys:
                return {
                    "status": "invalid_payload",
                    "message": "payload_json_or_activity_keys_required",
                    "profile": active.name,
                }
            course_id, error = await _resolve_teacher_course_id(session, client, active, args)
            if error is not None:
                return error
            result = await ctx.publish_teacher_activities(
                session,
                endpoints=client.endpoints,
                course_id=course_id,
                activity_keys=activity_keys,
                payload=payload,
                published=published,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "save_activity_resource":
            result = await ctx.save_teacher_activity_resource(
                session,
                endpoints=client.endpoints,
                resource_id=getattr(args, "resource_id", ""),
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "log_activity_read":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=True)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.log_teacher_activity_read(
                session,
                endpoints=client.endpoints,
                activity_id=getattr(args, "activity_id", ""),
                payload=payload,
                exam=False,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "log_exam_activity_read":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=True)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.log_teacher_activity_read(
                session,
                endpoints=client.endpoints,
                activity_id=getattr(args, "exam_id", ""),
                payload=payload,
                exam=True,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "update_activity_resource":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.update_teacher_activity_resource(
                session,
                endpoints=client.endpoints,
                activity_id=getattr(args, "activity_id", ""),
                resource_id=getattr(args, "resource_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "delete_activity_resource":
            result = await ctx.delete_teacher_activity_resource(
                session,
                endpoints=client.endpoints,
                activity_id=getattr(args, "activity_id", ""),
                resource_id=getattr(args, "resource_id", ""),
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "add_activity_comment":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.add_teacher_activity_comment(
                session,
                endpoints=client.endpoints,
                activity_id=getattr(args, "activity_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "update_activity_comment":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.update_teacher_activity_comment(
                session,
                endpoints=client.endpoints,
                activity_id=getattr(args, "activity_id", ""),
                comment_id=getattr(args, "comment_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "delete_activity_comment":
            result = await ctx.delete_teacher_activity_comment(
                session,
                endpoints=client.endpoints,
                activity_id=getattr(args, "activity_id", ""),
                comment_id=getattr(args, "comment_id", ""),
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "reply_activity_comment":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.reply_teacher_activity_comment(
                session,
                endpoints=client.endpoints,
                activity_id=getattr(args, "activity_id", ""),
                comment_id=getattr(args, "comment_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "update_activity_comment_reply":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.update_teacher_activity_comment_reply(
                session,
                endpoints=client.endpoints,
                activity_id=getattr(args, "activity_id", ""),
                reply_id=getattr(args, "reply_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "delete_activity_comment_reply":
            result = await ctx.delete_teacher_activity_comment_reply(
                session,
                endpoints=client.endpoints,
                activity_id=getattr(args, "activity_id", ""),
                reply_id=getattr(args, "reply_id", ""),
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "operate_activity_comments":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.operate_teacher_activity_comments(
                session,
                endpoints=client.endpoints,
                activity_id=getattr(args, "activity_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "update_forum_status":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=True)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            enable_text = ctx.normalize_text(getattr(args, "enable", ""))
            enable_value = _optional_bool(enable_text) if enable_text else None
            if enable_text and enable_value is None:
                return {"status": "invalid_payload", "message": "enable_must_be_true_or_false", "profile": active.name}
            if enable_value is not None and "enable" not in payload:
                payload["enable"] = enable_value
            if not payload:
                return {"status": "invalid_payload", "message": "payload_json_or_enable_required", "profile": active.name}
            result = await ctx.update_teacher_forum_status(
                session,
                endpoints=client.endpoints,
                activity_id=getattr(args, "activity_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "grade_rollcalls":
            result = await ctx.grade_teacher_rollcalls(
                session,
                endpoints=client.endpoints,
                rollcall_ids=_csv_values(getattr(args, "rollcall_ids", "")),
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "grade_submission":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.grade_teacher_submission(
                session,
                endpoints=client.endpoints,
                activity_id=getattr(args, "activity_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "recommend_submissions":
            result = await ctx.recommend_teacher_submissions(
                session,
                endpoints=client.endpoints,
                submission_ids=_csv_values(getattr(args, "submission_ids", "")),
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "cancel_recommend_submission":
            result = await ctx.cancel_recommend_teacher_submission(
                session,
                endpoints=client.endpoints,
                submission_id=getattr(args, "submission_id", ""),
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "score_forum":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=True)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            student_id = ctx.normalize_text(getattr(args, "student_id", ""))
            group_id = ctx.normalize_text(getattr(args, "group_id", ""))
            if student_id:
                payload["student_id"] = student_id
            if group_id:
                payload["group_id"] = group_id
            if getattr(args, "score", None) is not None:
                payload["score"] = getattr(args, "score", "")
            result = await ctx.score_teacher_forum(
                session,
                endpoints=client.endpoints,
                activity_id=getattr(args, "activity_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "update_homework_announce_status":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.update_teacher_homework_announce_status(
                session,
                endpoints=client.endpoints,
                homework_id=getattr(args, "homework_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "update_homework_rubric":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.update_teacher_homework_rubric(
                session,
                endpoints=client.endpoints,
                homework_id=getattr(args, "homework_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "delete_exams":
            result = await ctx.delete_teacher_exams(
                session,
                endpoints=client.endpoints,
                exam_ids=_csv_values(getattr(args, "exam_ids", "")),
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "create_exam":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            course_id, error = await _resolve_teacher_course_id(session, client, active, args)
            if error is not None:
                return error
            result = await ctx.create_teacher_exam(
                session,
                endpoints=client.endpoints,
                course_id=course_id,
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "update_exam":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.update_teacher_exam(
                session,
                endpoints=client.endpoints,
                exam_id=getattr(args, "exam_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "score_exam":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.score_teacher_exam(
                session,
                endpoints=client.endpoints,
                score_id=getattr(args, "score_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "comment_exam_status":
            result = await ctx.comment_teacher_exam_status(
                session,
                endpoints=client.endpoints,
                exam_id=getattr(args, "exam_id", ""),
                student_id=getattr(args, "student_id", ""),
                status_comment=getattr(args, "status_comment", ""),
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
            )
        elif action_name == "create_classroom_exam":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            course_id, error = await _resolve_teacher_course_id(session, client, active, args)
            if error is not None:
                return error
            result = await ctx.create_teacher_classroom_exam(
                session,
                endpoints=client.endpoints,
                course_id=course_id,
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "update_classroom_exam":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.update_teacher_classroom_exam(
                session,
                endpoints=client.endpoints,
                classroom_id=getattr(args, "classroom_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "delete_classroom":
            result = await ctx.delete_teacher_classroom(
                session,
                endpoints=client.endpoints,
                classroom_id=getattr(args, "classroom_id", ""),
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "update_classroom_status":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.update_teacher_classroom_status(
                session,
                endpoints=client.endpoints,
                classroom_id=getattr(args, "classroom_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "update_classroom_subject_status":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.update_teacher_classroom_subject_status(
                session,
                endpoints=client.endpoints,
                classroom_id=getattr(args, "classroom_id", ""),
                subject_id=getattr(args, "subject_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "save_classroom_subjects":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.save_teacher_classroom_subjects(
                session,
                endpoints=client.endpoints,
                classroom_id=getattr(args, "classroom_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "delete_classroom_subjects":
            result = await ctx.delete_teacher_classroom_subjects(
                session,
                endpoints=client.endpoints,
                classroom_id=getattr(args, "classroom_id", ""),
                subject_ids=_csv_values(getattr(args, "subject_ids", "")),
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "score_classroom":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.score_teacher_classroom(
                session,
                endpoints=client.endpoints,
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "create_subject_lib":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=True)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            if not payload and not ctx.normalize_text(getattr(args, "title", "")):
                return {"status": "invalid_payload", "message": "title_or_payload_required", "profile": active.name}
            course_id = ctx.normalize_text(getattr(args, "course_id", ""))
            if ctx.normalize_text(getattr(args, "scope", "")).lower() == "course":
                course_id, error = await _resolve_teacher_course_id(session, client, active, args)
                if error is not None:
                    return error
            result = await ctx.create_teacher_subject_lib(
                session,
                endpoints=client.endpoints,
                title=getattr(args, "title", ""),
                course_id=course_id,
                lib_type=getattr(args, "lib_type", ""),
                parent_id=getattr(args, "parent_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "copy_subject_lib":
            result = await ctx.copy_teacher_subject_lib(
                session,
                endpoints=client.endpoints,
                subject_lib_id=getattr(args, "subject_lib_id", ""),
                target=getattr(args, "target", ""),
                target_id=getattr(args, "target_id", ""),
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "update_subject_lib":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=True)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            if not payload and not ctx.normalize_text(getattr(args, "title", "")):
                return {"status": "invalid_payload", "message": "title_or_payload_required", "profile": active.name}
            result = await ctx.update_teacher_subject_lib(
                session,
                endpoints=client.endpoints,
                subject_lib_id=getattr(args, "subject_lib_id", ""),
                title=getattr(args, "title", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "move_subject_libs":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.move_teacher_subject_libs(
                session,
                endpoints=client.endpoints,
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "copy_subject_libs_to_user":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.copy_teacher_subject_libs_to_user(
                session,
                endpoints=client.endpoints,
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name in {"move_subject_lib_subjects", "copy_subject_lib_subjects"}:
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.move_teacher_subject_lib_subjects(
                session,
                endpoints=client.endpoints,
                payload=payload,
                copy=action_name == "copy_subject_lib_subjects",
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "delete_subject_lib":
            result = await ctx.delete_teacher_subject_lib(
                session,
                endpoints=client.endpoints,
                subject_lib_id=getattr(args, "subject_lib_id", ""),
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "delete_subject_lib_subjects":
            result = await ctx.delete_teacher_subject_lib_subjects(
                session,
                endpoints=client.endpoints,
                subject_lib_id=getattr(args, "subject_lib_id", ""),
                subject_ids=_csv_values(getattr(args, "subject_ids", "")),
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "create_questionnaire_subject":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.create_teacher_questionnaire_subject(
                session,
                endpoints=client.endpoints,
                questionnaire_id=getattr(args, "questionnaire_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "update_questionnaire_subject":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.update_teacher_questionnaire_subject(
                session,
                endpoints=client.endpoints,
                questionnaire_id=getattr(args, "questionnaire_id", ""),
                subject_id=getattr(args, "subject_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "delete_questionnaire_subject":
            result = await ctx.delete_teacher_questionnaire_subject(
                session,
                endpoints=client.endpoints,
                questionnaire_id=getattr(args, "questionnaire_id", ""),
                subject_id=getattr(args, "subject_id", ""),
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name in {"import_questionnaire_subjects", "import_questionnaire_campus_subjects"}:
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.import_teacher_questionnaire_subjects(
                session,
                endpoints=client.endpoints,
                questionnaire_id=getattr(args, "questionnaire_id", ""),
                payload=payload,
                campus=action_name == "import_questionnaire_campus_subjects",
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "create_course_estimate":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            course_id = ctx.normalize_text(getattr(args, "course_id", ""))
            if not course_id:
                course_id, error = await _resolve_teacher_course_id(session, client, active, args)
                if error is not None:
                    return error
            if course_id and "course_id" not in payload and "courseId" not in payload:
                payload["course_id"] = course_id
            result = await ctx.create_teacher_course_estimate(
                session,
                endpoints=client.endpoints,
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "update_course_estimate":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.update_teacher_course_estimate(
                session,
                endpoints=client.endpoints,
                course_estimate_id=getattr(args, "course_estimate_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "delete_course_estimate":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=True)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.delete_teacher_course_estimate(
                session,
                endpoints=client.endpoints,
                course_estimate_id=getattr(args, "course_estimate_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "create_course_estimate_reply":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.create_teacher_course_estimate_reply(
                session,
                endpoints=client.endpoints,
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "delete_course_estimate_reply":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=True)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.delete_teacher_course_estimate_reply(
                session,
                endpoints=client.endpoints,
                reply_id=getattr(args, "reply_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "create_course_package":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            course_id, error = await _resolve_teacher_course_id(session, client, active, args)
            if error is not None:
                return error
            result = await ctx.create_teacher_course_package(
                session,
                endpoints=client.endpoints,
                course_id=course_id,
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "export_course_package":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            course_id, error = await _resolve_teacher_course_id(session, client, active, args)
            if error is not None:
                return error
            result = await ctx.export_teacher_course_package(
                session,
                endpoints=client.endpoints,
                course_id=course_id,
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "update_course_package":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.update_teacher_course_package(
                session,
                endpoints=client.endpoints,
                course_package_id=getattr(args, "course_package_id", ""),
                payload=payload,
                no_check=bool(getattr(args, "no_check", False)),
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "delete_course_package":
            result = await ctx.delete_teacher_course_package(
                session,
                endpoints=client.endpoints,
                course_package_id=getattr(args, "course_package_id", ""),
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "save_course_package":
            result = await ctx.save_teacher_course_package(
                session,
                endpoints=client.endpoints,
                course_package_id=getattr(args, "course_package_id", ""),
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "import_course_package":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.import_teacher_course_package(
                session,
                endpoints=client.endpoints,
                course_package_id=getattr(args, "course_package_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "create_courseware_quiz_subjects":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.create_teacher_courseware_quiz_subjects(
                session,
                endpoints=client.endpoints,
                activity_id=getattr(args, "activity_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "update_courseware_quiz_subjects":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.update_teacher_courseware_quiz_subjects(
                session,
                endpoints=client.endpoints,
                courseware_quiz_id=getattr(args, "courseware_quiz_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "generate_courseware_quiz_subjects":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.generate_teacher_courseware_quiz_subjects(
                session,
                endpoints=client.endpoints,
                payload=payload,
                by_text=False,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "generate_courseware_quiz_subjects_by_text":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.generate_teacher_courseware_quiz_subjects(
                session,
                endpoints=client.endpoints,
                payload=payload,
                by_text=True,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "format_courseware_quiz_question":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.format_teacher_courseware_quiz_question(
                session,
                endpoints=client.endpoints,
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "copy_subject_libs_to_courseware_quiz":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=False)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.copy_teacher_subject_libs_to_courseware_quiz(
                session,
                endpoints=client.endpoints,
                courseware_quiz_id=getattr(args, "courseware_quiz_id", ""),
                payload=payload,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        elif action_name == "api_request":
            parsed, payload, message = _payload_from_json(getattr(args, "payload_json", ""), allow_empty=True)
            if not parsed:
                return {"status": "invalid_payload", "message": message, "profile": active.name}
            result = await ctx.teacher_api_request(
                session,
                endpoints=client.endpoints,
                method=getattr(args, "method", ""),
                path=getattr(args, "path", ""),
                payload=payload if payload else None,
                request_ssl=ctx.get_ssl_request_setting(),
                execute=execute,
                confirm=confirm,
                include_sensitive=include_sensitive,
            )
        else:
            return {"status": "unknown_action", "profile": active.name, "action": action_name}
    payload = result.to_dict()
    payload["profile"] = active.name
    payload["provider"] = ctx.get_active_provider_key()
    return payload


def _print_teacher_status(report: Mapping[str, ctx.Any]) -> None:
    print("Profile: {}".format(report.get("profile", "")))
    print("Provider: {}".format(report.get("provider", "")))
    print("Account type: {}".format(report.get("account_type", "unknown")))
    print("Teacher courses: {}".format(report.get("teacher_course_count", 0)))
    print("Student courses: {}".format(report.get("student_course_count", 0)))
    for course in report.get("courses", [])[:20]:
        if not isinstance(course, dict):
            continue
        markers = []
        if course.get("is_teacher"):
            markers.append("teacher")
        if course.get("is_student"):
            markers.append("student")
        marker = ",".join(markers) or "unknown"
        print("- [{}] {} ({})".format(course.get("id", ""), course.get("name", ""), marker))


def _print_teacher_course_report(report: Mapping[str, ctx.Any]) -> None:
    course = report.get("course", {})
    if not isinstance(course, dict):
        course = {}
    print("Course: [{}] {}".format(course.get("id", report.get("course_id", "")), course.get("name", "")))
    print("Status: {}".format(report.get("status", "")))
    print("Supported endpoints: {}".format(len(report.get("supported", []))))
    endpoints = report.get("endpoints", {})
    if isinstance(endpoints, dict):
        for name, endpoint in endpoints.items():
            if not isinstance(endpoint, dict):
                continue
            suffix = ""
            if endpoint.get("item_count") is not None:
                suffix = " count={}".format(endpoint.get("item_count"))
            print("- {}: {} HTTP {}{}".format(name, endpoint.get("status"), endpoint.get("http_status"), suffix))


def _print_teacher_action(report: Mapping[str, ctx.Any]) -> None:
    print("{} {} -> {}".format(report.get("method", ""), report.get("path", ""), report.get("status", "")))
    if report.get("status") == "dry_run":
        print("No request was sent. Add --execute --yes to apply this teacher-side change.")
    elif report.get("status") == "confirmation_required":
        print("Add --yes together with --execute to confirm this teacher-side change.")


def _print_teacher_download(report: Mapping[str, ctx.Any]) -> None:
    if report.get("status") == "ok":
        print(
            "{} -> {} ({} bytes, {})".format(
                report.get("path", ""),
                report.get("output_path", ""),
                report.get("content_length", 0),
                report.get("content_type", "") or "unknown content-type",
            )
        )
    elif report.get("status") == "output_exists":
        print("Refusing to overwrite existing file: {}".format(report.get("output_path", "")))
    elif report.get("status") == "dry_run":
        print("No binary request was sent. Add --execute --yes for this non-GET export/download request.")
    elif report.get("status") == "confirmation_required":
        print("Add --yes together with --execute to confirm this binary export/download request.")
    else:
        print("Teacher download failed: {}.".format(report.get("status", "unexpected_response")))


def _print_teacher_upload(report: Mapping[str, ctx.Any]) -> None:
    print("{} {} -> {}".format(report.get("action", "upload_file"), report.get("path", ""), report.get("status", "")))
    if report.get("status") == "dry_run":
        print("No file was uploaded. Add --execute --yes to apply this teacher-side upload.")
    elif report.get("status") == "confirmation_required":
        print("Add --yes together with --execute to confirm this teacher-side upload.")
    elif report.get("status") == "ok":
        print(
            "{} ({} bytes, {}) uploaded via {}".format(
                report.get("filename", ""),
                report.get("file_size", 0),
                report.get("content_type", "") or "unknown content-type",
                report.get("storage_type", "") or "default storage",
            )
        )


async def teacher_status_command(args: ctx.Any) -> int:
    try:
        report = await _run_teacher_context(args)
    except ctx.TeacherDiscoveryError as exc:
        report = exc.to_dict()
    if getattr(args, "json", False):
        print(ctx.json_text(report))
    elif report.get("status") == "ok":
        _print_teacher_status(report)
    else:
        print("Teacher discovery failed: {}.".format(report.get("status", "unexpected_response")))
    return 0 if report.get("status") == "ok" else 1


async def teacher_course_command(
    args: ctx.Any,
    *,
    endpoint_names: Optional[Sequence[str]] = None,
) -> int:
    try:
        report = await _run_teacher_course_report(args, endpoint_names=endpoint_names)
    except ctx.TeacherDiscoveryError as exc:
        report = exc.to_dict()
    if getattr(args, "json", False):
        print(ctx.json_text(report))
    elif report.get("status") == "ok":
        _print_teacher_course_report(report)
    else:
        print("Teacher course report failed: {}.".format(report.get("status", "unexpected_response")))
    return 0 if report.get("status") == "ok" else 1


async def teacher_courses_command(args: ctx.Any) -> int:
    return await teacher_status_command(args)


async def teacher_rollcalls_command(args: ctx.Any) -> int:
    return await teacher_course_command(args, endpoint_names=ctx.TEACHER_ENDPOINT_GROUPS["rollcalls"])


async def teacher_enrollments_command(args: ctx.Any) -> int:
    return await teacher_course_command(args, endpoint_names=ctx.TEACHER_ENDPOINT_GROUPS["enrollments"])


async def teacher_groups_command(args: ctx.Any) -> int:
    return await teacher_course_command(args, endpoint_names=ctx.TEACHER_ENDPOINT_GROUPS["groups"])


async def teacher_activities_command(args: ctx.Any) -> int:
    return await teacher_course_command(args, endpoint_names=ctx.TEACHER_ENDPOINT_GROUPS["activities"])


async def teacher_bulletins_command(args: ctx.Any) -> int:
    return await teacher_course_command(args, endpoint_names=ctx.TEACHER_ENDPOINT_GROUPS["bulletins"])


async def teacher_scores_command(args: ctx.Any) -> int:
    return await teacher_course_command(args, endpoint_names=ctx.TEACHER_ENDPOINT_GROUPS["scores"])


async def teacher_stats_command(args: ctx.Any) -> int:
    try:
        report = await _run_teacher_stats_report(args)
    except ctx.TeacherDiscoveryError as exc:
        report = exc.to_dict()
    if getattr(args, "json", False):
        print(ctx.json_text(report))
    elif report.get("status") == "ok":
        _print_teacher_course_report(report)
    else:
        print("Teacher statistics report failed: {}.".format(report.get("status", "unexpected_response")))
    return 0 if report.get("status") == "ok" else 1


async def teacher_air_credit_command(args: ctx.Any) -> int:
    try:
        report = await _run_teacher_air_credit_report(args)
    except ctx.TeacherDiscoveryError as exc:
        report = exc.to_dict()
    if getattr(args, "json", False):
        print(ctx.json_text(report))
    elif report.get("status") == "ok":
        _print_teacher_course_report(report)
    else:
        print("Teacher AIR credit report failed: {}.".format(report.get("status", "unexpected_response")))
    return 0 if report.get("status") == "ok" else 1


async def teacher_management_calendar_meetings_command(args: ctx.Any) -> int:
    try:
        report = await _run_teacher_management_calendar_meetings(args)
    except ctx.TeacherDiscoveryError as exc:
        report = exc.to_dict()
    if getattr(args, "json", False):
        print(ctx.json_text(report))
    elif report.get("status") == "ok":
        print("{} -> HTTP {}".format(report.get("path", ""), report.get("http_status", "")))
    else:
        print("Teacher management calendar lookup failed: {}.".format(report.get("status", "unexpected_response")))
    return 0 if report.get("status") == "ok" else 1


async def teacher_calendar_meetings_command(args: ctx.Any) -> int:
    try:
        report = await _run_teacher_calendar_meetings(args)
    except ctx.TeacherDiscoveryError as exc:
        report = exc.to_dict()
    if getattr(args, "json", False):
        print(ctx.json_text(report))
    elif report.get("status") == "ok":
        print("{} -> HTTP {}".format(report.get("path", ""), report.get("http_status", "")))
    else:
        print("Teacher calendar meeting lookup failed: {}.".format(report.get("status", "unexpected_response")))
    return 0 if report.get("status") == "ok" else 1


async def teacher_teaching_calendars_command(args: ctx.Any) -> int:
    try:
        report = await _run_teacher_teaching_calendars(args)
    except ctx.TeacherDiscoveryError as exc:
        report = exc.to_dict()
    if getattr(args, "json", False):
        print(ctx.json_text(report))
    elif report.get("status") == "ok":
        print("{} -> HTTP {}".format(report.get("path", ""), report.get("http_status", "")))
    else:
        print("Teacher teaching calendar lookup failed: {}.".format(report.get("status", "unexpected_response")))
    return 0 if report.get("status") == "ok" else 1


async def teacher_vtrses_command(args: ctx.Any) -> int:
    try:
        report = await _run_teacher_vtrs_report(args)
    except ctx.TeacherDiscoveryError as exc:
        report = exc.to_dict()
    if getattr(args, "json", False):
        print(ctx.json_text(report))
    elif report.get("status") == "ok":
        _print_teacher_course_report(report)
    else:
        print("Teacher VTRS report failed: {}.".format(report.get("status", "unexpected_response")))
    return 0 if report.get("status") == "ok" else 1


async def teacher_departments_command(args: ctx.Any) -> int:
    try:
        report = await _run_teacher_departments_report(args)
    except ctx.TeacherDiscoveryError as exc:
        report = exc.to_dict()
    if getattr(args, "json", False):
        print(ctx.json_text(report))
    elif report.get("status") == "ok":
        _print_teacher_course_report(report)
    else:
        print("Teacher departments report failed: {}.".format(report.get("status", "unexpected_response")))
    return 0 if report.get("status") == "ok" else 1


async def teacher_ai_ppt_command(args: ctx.Any) -> int:
    try:
        report = await _run_teacher_ai_ppt_report(args)
    except ctx.TeacherDiscoveryError as exc:
        report = exc.to_dict()
    if getattr(args, "json", False):
        print(ctx.json_text(report))
    elif report.get("status") == "ok":
        _print_teacher_course_report(report)
    else:
        print("Teacher AI PPT report failed: {}.".format(report.get("status", "unexpected_response")))
    return 0 if report.get("status") == "ok" else 1


async def teacher_platform_command(args: ctx.Any) -> int:
    try:
        report = await _run_teacher_platform_report(args)
    except ctx.TeacherDiscoveryError as exc:
        report = exc.to_dict()
    if getattr(args, "json", False):
        print(ctx.json_text(report))
    elif report.get("status") == "ok":
        _print_teacher_course_report(report)
    else:
        print("Teacher platform report failed: {}.".format(report.get("status", "unexpected_response")))
    return 0 if report.get("status") == "ok" else 1


async def teacher_org_bulletins_command(args: ctx.Any) -> int:
    try:
        report = await _run_teacher_org_bulletins_report(args)
    except ctx.TeacherDiscoveryError as exc:
        report = exc.to_dict()
    if getattr(args, "json", False):
        print(ctx.json_text(report))
    elif report.get("status") == "ok":
        _print_teacher_course_report(report)
    else:
        print("Teacher org bulletin report failed: {}.".format(report.get("status", "unexpected_response")))
    return 0 if report.get("status") == "ok" else 1


async def teacher_catalog_command(args: ctx.Any) -> int:
    try:
        report = await _run_teacher_catalog_report(args)
    except ctx.TeacherDiscoveryError as exc:
        report = exc.to_dict()
    if getattr(args, "json", False):
        print(ctx.json_text(report))
    elif report.get("status") == "ok":
        _print_teacher_course_report(report)
    else:
        print("Teacher catalog report failed: {}.".format(report.get("status", "unexpected_response")))
    return 0 if report.get("status") == "ok" else 1


async def teacher_media_command(args: ctx.Any) -> int:
    try:
        report = await _run_teacher_media_report(args)
    except ctx.TeacherDiscoveryError as exc:
        report = exc.to_dict()
    if getattr(args, "json", False):
        print(ctx.json_text(report))
    elif report.get("status") == "ok":
        _print_teacher_course_report(report)
    else:
        print("Teacher media report failed: {}.".format(report.get("status", "unexpected_response")))
    return 0 if report.get("status") == "ok" else 1


async def teacher_authoring_command(args: ctx.Any) -> int:
    try:
        report = await _run_teacher_authoring_report(args)
    except ctx.TeacherDiscoveryError as exc:
        report = exc.to_dict()
    if getattr(args, "json", False):
        print(ctx.json_text(report))
    elif report.get("status") == "ok":
        _print_teacher_course_report(report)
    else:
        print("Teacher authoring report failed: {}.".format(report.get("status", "unexpected_response")))
    return 0 if report.get("status") == "ok" else 1


async def teacher_course_estimates_command(args: ctx.Any) -> int:
    return await teacher_course_command(args, endpoint_names=ctx.TEACHER_ENDPOINT_GROUPS["course_estimates"])


async def teacher_course_packages_command(args: ctx.Any) -> int:
    return await teacher_course_command(args, endpoint_names=ctx.TEACHER_ENDPOINT_GROUPS["course_packages"])


async def teacher_students_command(args: ctx.Any) -> int:
    return await teacher_course_command(args, endpoint_names=ctx.TEACHER_ENDPOINT_GROUPS["students"])


async def teacher_activity_command(args: ctx.Any) -> int:
    try:
        report = await _run_teacher_activity_report(args)
    except ctx.TeacherDiscoveryError as exc:
        report = exc.to_dict()
    if getattr(args, "json", False):
        print(ctx.json_text(report))
    elif report.get("status") == "ok":
        _print_teacher_course_report(report)
    else:
        print("Teacher activity report failed: {}.".format(report.get("status", "unexpected_response")))
    return 0 if report.get("status") == "ok" else 1


async def teacher_exam_command(args: ctx.Any) -> int:
    try:
        report = await _run_teacher_exam_report(args)
    except ctx.TeacherDiscoveryError as exc:
        report = exc.to_dict()
    if getattr(args, "json", False):
        print(ctx.json_text(report))
    elif report.get("status") == "ok":
        _print_teacher_course_report(report)
    else:
        print("Teacher exam report failed: {}.".format(report.get("status", "unexpected_response")))
    return 0 if report.get("status") == "ok" else 1


async def teacher_classroom_command(args: ctx.Any) -> int:
    try:
        report = await _run_teacher_classroom_report(args)
    except ctx.TeacherDiscoveryError as exc:
        report = exc.to_dict()
    if getattr(args, "json", False):
        print(ctx.json_text(report))
    elif report.get("status") == "ok":
        _print_teacher_course_report(report)
    else:
        print("Teacher classroom report failed: {}.".format(report.get("status", "unexpected_response")))
    return 0 if report.get("status") == "ok" else 1


async def teacher_questionnaire_command(args: ctx.Any) -> int:
    try:
        report = await _run_teacher_questionnaire_report(args)
    except ctx.TeacherDiscoveryError as exc:
        report = exc.to_dict()
    if getattr(args, "json", False):
        print(ctx.json_text(report))
    elif report.get("status") == "ok":
        _print_teacher_course_report(report)
    else:
        print("Teacher questionnaire report failed: {}.".format(report.get("status", "unexpected_response")))
    return 0 if report.get("status") == "ok" else 1


async def teacher_group_set_command(args: ctx.Any) -> int:
    try:
        report = await _run_teacher_group_set_report(args)
    except ctx.TeacherDiscoveryError as exc:
        report = exc.to_dict()
    if getattr(args, "json", False):
        print(ctx.json_text(report))
    elif report.get("status") == "ok":
        _print_teacher_course_report(report)
    else:
        print("Teacher group-set report failed: {}.".format(report.get("status", "unexpected_response")))
    return 0 if report.get("status") == "ok" else 1


async def teacher_get_command(args: ctx.Any) -> int:
    try:
        report = await _run_teacher_get_path(args)
    except ctx.TeacherDiscoveryError as exc:
        report = exc.to_dict()
    if getattr(args, "json", False):
        print(ctx.json_text(report))
    elif report.get("status") == "ok":
        print("{} -> HTTP {}".format(report.get("path", ""), report.get("http_status", "")))
    else:
        print("Teacher API GET failed: {}.".format(report.get("status", "unexpected_response")))
    return 0 if report.get("status") == "ok" else 1


async def _teacher_download_entry(args: ctx.Any, runner: ctx.Any) -> int:
    try:
        report = await runner(args)
    except ctx.TeacherDiscoveryError as exc:
        report = exc.to_dict()
    if getattr(args, "json", False):
        print(ctx.json_text(report))
    else:
        _print_teacher_download(report)
    return 0 if report.get("status") in {"ok", "dry_run"} else 1


async def teacher_download_command(args: ctx.Any) -> int:
    return await _teacher_download_entry(args, _run_teacher_download_path)


async def teacher_download_request_command(args: ctx.Any) -> int:
    return await _teacher_download_entry(args, _run_teacher_download_request)


async def teacher_qrcode_command(args: ctx.Any) -> int:
    return await _teacher_download_entry(args, _run_teacher_qrcode_download)


async def teacher_download_upload_command(args: ctx.Any) -> int:
    return await _teacher_download_entry(args, _run_teacher_download_upload)


async def teacher_download_upload_thumbnail_command(args: ctx.Any) -> int:
    return await _teacher_download_entry(args, _run_teacher_download_upload_thumbnail)


async def teacher_download_upload_modified_image_command(args: ctx.Any) -> int:
    return await _teacher_download_entry(args, _run_teacher_download_upload_modified_image)


async def teacher_download_upload_swf_command(args: ctx.Any) -> int:
    return await _teacher_download_entry(args, _run_teacher_download_upload_swf)


async def teacher_download_upload_reference_command(args: ctx.Any) -> int:
    return await _teacher_download_entry(args, _run_teacher_download_upload_reference)


async def teacher_download_shared_resource_command(args: ctx.Any) -> int:
    return await _teacher_download_entry(args, _run_teacher_download_shared_resource)


async def teacher_download_wedrive_file_command(args: ctx.Any) -> int:
    return await _teacher_download_entry(args, _run_teacher_download_wedrive_file)


async def teacher_download_third_part_upload_command(args: ctx.Any) -> int:
    return await _teacher_download_entry(args, _run_teacher_download_third_part_upload)


async def teacher_export_questionnaire_command(args: ctx.Any) -> int:
    return await _teacher_download_entry(args, _run_teacher_export_questionnaire)


async def teacher_export_topic_command(args: ctx.Any) -> int:
    return await _teacher_download_entry(args, _run_teacher_export_topic)


async def teacher_export_category_topics_command(args: ctx.Any) -> int:
    return await _teacher_download_entry(args, _run_teacher_export_category_topics)


async def teacher_export_shared_resource_subject_lib_command(args: ctx.Any) -> int:
    return await _teacher_download_entry(args, _run_teacher_export_shared_resource_subject_lib)


async def teacher_export_shared_resource_stat_command(args: ctx.Any) -> int:
    return await _teacher_download_entry(args, _run_teacher_export_shared_resource_stat)


async def teacher_export_shared_resource_video_stat_command(args: ctx.Any) -> int:
    return await _teacher_download_entry(args, _run_teacher_export_shared_resource_video_stat)


async def teacher_export_stat_students_command(args: ctx.Any) -> int:
    return await _teacher_download_entry(args, _run_teacher_export_stat_students)


async def teacher_export_stat_report_command(args: ctx.Any) -> int:
    return await _teacher_download_entry(args, _run_teacher_export_stat_report)


async def teacher_export_stat_courses_command(args: ctx.Any) -> int:
    return await _teacher_download_entry(args, _run_teacher_export_stat_courses)


async def teacher_export_stat_attendance_command(args: ctx.Any) -> int:
    return await _teacher_download_entry(args, _run_teacher_export_stat_attendance)


async def teacher_export_department_user_attendance_command(args: ctx.Any) -> int:
    return await _teacher_download_entry(args, _run_teacher_export_department_user_attendance)


async def teacher_export_department_attendance_command(args: ctx.Any) -> int:
    return await _teacher_download_entry(args, _run_teacher_export_department_attendance)


async def teacher_export_stat_vtrses_data_command(args: ctx.Any) -> int:
    return await _teacher_download_entry(args, _run_teacher_export_stat_vtrses_data)


async def teacher_export_cloud_classroom_live_classes_command(args: ctx.Any) -> int:
    return await _teacher_download_entry(args, _run_teacher_export_cloud_classroom_live_classes)


async def teacher_export_tencent_meeting_statistics_command(args: ctx.Any) -> int:
    return await _teacher_download_entry(args, _run_teacher_export_tencent_meeting_statistics)


async def teacher_export_ai_ppt_usage_command(args: ctx.Any) -> int:
    return await _teacher_download_entry(args, _run_teacher_export_ai_ppt_usage)


async def teacher_export_air_credit_command(args: ctx.Any) -> int:
    return await _teacher_download_entry(args, _run_teacher_export_air_credit)


async def teacher_export_management_calendar_command(args: ctx.Any) -> int:
    return await _teacher_download_entry(args, _run_teacher_export_management_calendar)


async def teacher_upload_file_command(args: ctx.Any) -> int:
    try:
        report = await _run_teacher_upload_file(args)
    except ctx.TeacherDiscoveryError as exc:
        report = exc.to_dict()
    if getattr(args, "json", False):
        print(ctx.json_text(report))
    else:
        _print_teacher_upload(report)
    return 0 if report.get("status") in {"ok", "dry_run"} else 1


async def teacher_check_activity_dependents_command(args: ctx.Any) -> int:
    try:
        report = await _run_teacher_activity_dependents(args)
    except ctx.TeacherDiscoveryError as exc:
        report = exc.to_dict()
    if getattr(args, "json", False):
        print(ctx.json_text(report))
    elif report.get("status") == "ok":
        print("{} -> HTTP {}".format(report.get("path", ""), report.get("http_status", "")))
    else:
        print("Teacher activity dependency check failed: {}.".format(report.get("status", "unexpected_response")))
    return 0 if report.get("status") == "ok" else 1


async def _teacher_endpoint_entry(args: ctx.Any, runner: ctx.Any, label: str) -> int:
    try:
        report = await runner(args)
    except ctx.TeacherDiscoveryError as exc:
        report = exc.to_dict()
    if getattr(args, "json", False):
        print(ctx.json_text(report))
    elif report.get("status") == "ok":
        print("{} -> HTTP {}".format(report.get("path", ""), report.get("http_status", "")))
    else:
        print("{} failed: {}.".format(label, report.get("status", "unexpected_response")))
    return 0 if report.get("status") == "ok" else 1


async def teacher_completion_criteria_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(args, _run_teacher_completion_criteria, "Teacher completion criteria")


async def teacher_course_completion_criteria_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(
        args,
        _run_teacher_course_completion_criteria,
        "Teacher course completion criteria",
    )


async def teacher_forum_categories_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(args, _run_teacher_forum_categories, "Teacher forum categories")


async def teacher_forum_category_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(args, _run_teacher_forum_category, "Teacher forum category")


async def teacher_activity_uploads_license_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(
        args,
        _run_teacher_activity_uploads_license,
        "Teacher activity uploads-license",
    )


async def teacher_subject_libs_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(args, _run_teacher_subject_libs, "Teacher subject libs")


async def teacher_subject_lib_subjects_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(args, _run_teacher_subject_lib_subjects, "Teacher subject lib subjects")


async def teacher_subject_lib_statistic_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(args, _run_teacher_subject_lib_statistic, "Teacher subject lib statistic")


async def teacher_subject_lib_knowledge_nodes_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(
        args,
        _run_teacher_subject_lib_knowledge_nodes,
        "Teacher subject lib knowledge nodes",
    )


async def teacher_subject_lib_folders_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(args, _run_teacher_subject_lib_folders, "Teacher subject lib folders")


async def teacher_questionnaire_submissions_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(args, _run_teacher_questionnaire_submissions, "Teacher questionnaire submissions")


async def teacher_course_estimate_replies_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(
        args,
        _run_teacher_course_estimate_replies,
        "Teacher course estimate replies",
    )


async def teacher_course_estimate_user_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(
        args,
        _run_teacher_course_estimate_user,
        "Teacher course estimate user",
    )


async def teacher_course_package_course_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(
        args,
        _run_teacher_course_package_course,
        "Teacher course package course",
    )


async def teacher_courseware_quizzes_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(
        args,
        _run_teacher_courseware_quizzes,
        "Teacher courseware quizzes",
    )


async def teacher_courseware_quiz_subjects_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(
        args,
        _run_teacher_courseware_quiz_subjects,
        "Teacher courseware quiz subjects",
    )


async def teacher_courseware_quiz_settings_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(
        args,
        _run_teacher_courseware_quiz_settings,
        "Teacher courseware quiz settings",
    )


async def teacher_resource_groups_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(args, _run_teacher_resource_groups, "Teacher resource groups")


async def teacher_resource_group_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(args, _run_teacher_resource_group, "Teacher resource group")


async def teacher_resource_group_members_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(args, _run_teacher_resource_group_members, "Teacher resource group members")


async def teacher_resource_group_folders_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(args, _run_teacher_resource_group_folders, "Teacher resource group folders")


async def teacher_resource_group_resources_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(args, _run_teacher_resource_group_resources, "Teacher resource group resources")


async def teacher_resource_group_rubrics_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(args, _run_teacher_resource_group_rubrics, "Teacher resource group rubrics")


async def teacher_resource_group_subject_libs_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(
        args,
        _run_teacher_resource_group_subject_libs,
        "Teacher resource group subject libs",
    )


async def teacher_user_resources_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(args, _run_teacher_user_resources, "Teacher user resources")


async def teacher_user_resource_folder_info_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(
        args,
        _run_teacher_user_resource_folder_info,
        "Teacher user resource folder info",
    )


async def teacher_shared_resources_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(args, _run_teacher_shared_resources, "Teacher shared resources")


async def teacher_shared_resource_collections_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(
        args,
        _run_teacher_shared_resource_collections,
        "Teacher shared resource collections",
    )


async def teacher_shared_resource_comments_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(
        args,
        _run_teacher_shared_resource_comments,
        "Teacher shared resource comments",
    )


async def teacher_shared_resource_classifications_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(
        args,
        _run_teacher_shared_resource_classifications,
        "Teacher shared resource classifications",
    )


async def teacher_shared_resource_tags_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(args, _run_teacher_shared_resource_tags, "Teacher shared resource tags")


async def teacher_shared_resource_recommendations_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(
        args,
        _run_teacher_shared_resource_recommendations,
        "Teacher shared resource recommendations",
    )


async def teacher_shared_resource_track_users_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(
        args,
        _run_teacher_shared_resource_track_users,
        "Teacher shared resource track users",
    )


async def teacher_shared_resource_followers_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(
        args,
        _run_teacher_shared_resource_followers,
        "Teacher shared resource followers",
    )


async def teacher_cc_license_groups_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(args, _run_teacher_cc_license_groups, "Teacher CC license groups")


async def teacher_cc_license_map_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(args, _run_teacher_cc_license_map, "Teacher CC license map")


async def teacher_entries_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(args, _run_teacher_entries, "Teacher entries")


async def teacher_entry_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(args, _run_teacher_entry, "Teacher entry")


async def teacher_entry_references_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(args, _run_teacher_entry_references, "Teacher entry references")


async def teacher_slides_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(args, _run_teacher_slides, "Teacher slides")


async def teacher_slide_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(args, _run_teacher_slide, "Teacher slide")


async def teacher_slide_records_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(args, _run_teacher_slide_records, "Teacher slide records")


async def teacher_slide_export_status_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(args, _run_teacher_slide_export_status, "Teacher slide export status")


async def teacher_published_slides_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(args, _run_teacher_published_slides, "Teacher published slides")


async def teacher_check_module_dependents_command(args: ctx.Any) -> int:
    try:
        report = await _run_teacher_module_dependents(args)
    except ctx.TeacherDiscoveryError as exc:
        report = exc.to_dict()
    if getattr(args, "json", False):
        print(ctx.json_text(report))
    elif report.get("status") == "ok":
        print("{} -> HTTP {}".format(report.get("path", ""), report.get("http_status", "")))
    else:
        print("Teacher module dependency check failed: {}.".format(report.get("status", "unexpected_response")))
    return 0 if report.get("status") == "ok" else 1


async def teacher_check_syllabus_dependents_command(args: ctx.Any) -> int:
    try:
        report = await _run_teacher_syllabus_dependents(args)
    except ctx.TeacherDiscoveryError as exc:
        report = exc.to_dict()
    if getattr(args, "json", False):
        print(ctx.json_text(report))
    elif report.get("status") == "ok":
        print("{} -> HTTP {}".format(report.get("path", ""), report.get("http_status", "")))
    else:
        print("Teacher syllabus dependency check failed: {}.".format(report.get("status", "unexpected_response")))
    return 0 if report.get("status") == "ok" else 1


async def teacher_rollcall_students_command(args: ctx.Any) -> int:
    try:
        report = await _run_teacher_rollcall_report(args)
    except ctx.TeacherDiscoveryError as exc:
        report = exc.to_dict()
    if getattr(args, "json", False):
        print(ctx.json_text(report))
    elif report.get("status") == "ok":
        _print_teacher_course_report(report)
    else:
        print("Teacher rollcall report failed: {}.".format(report.get("status", "unexpected_response")))
    return 0 if report.get("status") == "ok" else 1


async def _teacher_endpoint_entry(args: ctx.Any, runner: ctx.Any, label: str) -> int:
    try:
        report = await runner(args)
    except ctx.TeacherDiscoveryError as exc:
        report = exc.to_dict()
    if getattr(args, "json", False):
        print(ctx.json_text(report))
    elif report.get("status") == "ok":
        print("{} -> HTTP {}".format(report.get("path", ""), report.get("http_status", "")))
    else:
        print("{} failed: {}.".format(label, report.get("status", "unexpected_response")))
    return 0 if report.get("status") == "ok" else 1


async def teacher_rollcall_info_command(args: ctx.Any) -> int:
    return await teacher_rollcall_students_command(args)


async def teacher_course_rollcall_detail_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(args, _run_teacher_course_rollcall_detail, "Teacher course rollcall detail")


async def teacher_ongoing_student_rollcalls_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(args, _run_teacher_ongoing_student_rollcalls, "Teacher ongoing student rollcalls")


async def teacher_leave_record_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(args, _run_teacher_leave_record, "Teacher leave record")


async def teacher_student_rollcalls_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(args, _run_teacher_student_rollcalls, "Teacher student rollcalls")


async def teacher_rollcall_students_page_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(args, _run_teacher_rollcall_students_page, "Teacher rollcall student page")


async def teacher_rollcall_count_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(args, _run_teacher_rollcall_count, "Teacher rollcall count")


async def teacher_rollcall_status_result_command(args: ctx.Any) -> int:
    return await _teacher_endpoint_entry(args, _run_teacher_rollcall_status_result, "Teacher rollcall status result")


async def _teacher_action_entry(args: ctx.Any, action_name: str) -> int:
    report = await _run_teacher_action(args, action_name)
    if getattr(args, "json", False):
        print(ctx.json_text(report))
    else:
        _print_teacher_action(report)
    return 0 if report.get("status") in {"ok", "dry_run"} else 1


async def teacher_create_calendar_meeting_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "create_calendar_meeting")


async def teacher_update_calendar_meeting_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_calendar_meeting")


async def teacher_delete_calendar_meeting_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "delete_calendar_meeting")


async def teacher_create_air_credit_assignments_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "create_air_credit_assignments")


async def teacher_update_air_credit_assignments_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_air_credit_assignments")


async def teacher_update_air_credit_status_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_air_credit_status")


async def teacher_clear_air_credit_remaining_credits_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "clear_air_credit_remaining_credits")


async def teacher_update_air_credit_course_usage_limit_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_air_credit_course_usage_limit")


async def teacher_create_teaching_calendar_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "create_teaching_calendar")


async def teacher_update_teaching_calendar_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_teaching_calendar")


async def teacher_delete_teaching_calendar_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "delete_teaching_calendar")


async def teacher_notify_outline_editing_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "notify_outline_editing")


async def teacher_sync_courses_from_urp_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "sync_courses_from_urp")


async def teacher_update_chinamcloud_resources_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_chinamcloud_resources")


async def teacher_update_course_outline_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_course_outline")


async def teacher_create_outline_setting_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "create_outline_setting")


async def teacher_update_outline_setting_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_outline_setting")


async def teacher_sort_outline_setting_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "sort_outline_setting")


async def teacher_delete_outline_setting_option_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "delete_outline_setting_option")


async def teacher_toggle_outline_setting_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "toggle_outline_setting")


async def teacher_update_outline_required_options_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_outline_required_options")


async def teacher_update_enrollment_role_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_enrollment_role")


async def teacher_update_enrollments_role_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_enrollments_role")


async def teacher_delete_enrollment_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "delete_enrollment")


async def teacher_delete_enrollments_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "delete_enrollments")


async def teacher_start_rollcall_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "start_rollcall")


async def teacher_create_rollcall_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "create_rollcall")


async def teacher_create_module_rollcall_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "create_module_rollcall")


async def teacher_activate_rollcall_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "activate_rollcall")


async def teacher_update_rollcall_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_rollcall")


async def teacher_update_radar_rollcall_position_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_radar_rollcall_position")


async def teacher_stop_rollcall_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "stop_rollcall")


async def teacher_stop_timetable_rollcall_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "stop_timetable_rollcall")


async def teacher_stop_qr_rollcall_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "stop_qr_rollcall")


async def teacher_stop_number_rollcall_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "stop_number_rollcall")


async def teacher_stop_radar_rollcall_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "stop_radar_rollcall")


async def teacher_answer_qr_rollcall_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "answer_qr_rollcall")


async def teacher_answer_number_rollcall_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "answer_number_rollcall")


async def teacher_answer_radar_rollcall_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "answer_radar_rollcall")


async def teacher_update_student_rollcalls_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_student_rollcalls")


async def teacher_delete_rollcall_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "delete_rollcall")


async def teacher_create_merged_rollcall_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "create_merged_rollcall")


async def teacher_update_merged_rollcall_students_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_merged_rollcall_students")


async def teacher_update_rollcall_setting_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_rollcall_setting")


async def teacher_score_rollcall_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_rollcall_score")


async def teacher_update_announce_score_settings_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_announce_score_settings")


async def teacher_update_score_type_settings_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_score_type_settings")


async def teacher_create_custom_score_item_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "create_custom_score_item")


async def teacher_update_custom_score_item_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_custom_score_item")


async def teacher_delete_custom_score_item_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "delete_custom_score_item")


async def teacher_score_custom_item_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "score_custom_item")


async def teacher_update_enrollment_scores_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_enrollment_scores")


async def teacher_update_total_scores_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_total_scores")


async def teacher_update_score_book_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_score_book")


async def teacher_update_score_publish_item_maps_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_score_publish_item_maps")


async def teacher_submit_edu_scores_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "submit_edu_scores")


async def teacher_create_rubric_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "create_rubric")


async def teacher_update_rubric_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_rubric")


async def teacher_delete_rubrics_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "delete_rubrics")


async def teacher_create_bulletin_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "create_bulletin")


async def teacher_update_bulletin_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_bulletin")


async def teacher_delete_bulletin_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "delete_bulletin")


async def teacher_mark_bulletin_read_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "mark_bulletin_read")


async def teacher_create_module_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "create_module")


async def teacher_update_module_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_module")


async def teacher_delete_module_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "delete_module")


async def teacher_sort_modules_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "sort_modules")


async def teacher_create_syllabus_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "create_syllabus")


async def teacher_update_syllabus_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_syllabus")


async def teacher_delete_syllabus_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "delete_syllabus")


async def teacher_sort_syllabuses_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "sort_syllabuses")


async def teacher_sort_module_activities_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "sort_module_activities")


async def teacher_sort_syllabus_activities_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "sort_syllabus_activities")


async def teacher_resort_activity_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "resort_activity")


async def teacher_import_course_groups_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "import_course_groups")


async def teacher_import_enrollments_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "import_enrollments")


async def teacher_import_scores_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "import_scores")


async def teacher_import_item_scores_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "import_item_scores")


async def teacher_import_seat_numbers_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "import_seat_numbers")


async def teacher_import_rollcalls_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "import_rollcalls")


async def teacher_create_group_set_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "create_group_set")


async def teacher_update_group_set_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_group_set")


async def teacher_delete_group_set_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "delete_group_set")


async def teacher_copy_group_set_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "copy_group_set")


async def teacher_random_grouping_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "random_grouping")


async def teacher_create_group_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "create_group")


async def teacher_update_group_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_group")


async def teacher_update_group_info_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_group_info")


async def teacher_delete_group_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "delete_group")


async def teacher_sort_groups_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "sort_groups")


async def teacher_update_group_members_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_group_members")


async def teacher_update_group_member_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_group_member")


async def teacher_delete_group_member_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "delete_group_member")


async def teacher_delete_activities_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "delete_activities")


async def teacher_create_activity_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "create_activity")


async def teacher_update_activity_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_activity")


async def teacher_delete_activity_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "delete_activity")


async def teacher_publish_activities_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "publish_activities")


async def teacher_save_activity_resource_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "save_activity_resource")


async def teacher_log_activity_read_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "log_activity_read")


async def teacher_log_exam_activity_read_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "log_exam_activity_read")


async def teacher_update_activity_resource_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_activity_resource")


async def teacher_delete_activity_resource_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "delete_activity_resource")


async def teacher_add_activity_comment_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "add_activity_comment")


async def teacher_update_activity_comment_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_activity_comment")


async def teacher_delete_activity_comment_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "delete_activity_comment")


async def teacher_reply_activity_comment_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "reply_activity_comment")


async def teacher_update_activity_comment_reply_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_activity_comment_reply")


async def teacher_delete_activity_comment_reply_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "delete_activity_comment_reply")


async def teacher_operate_activity_comments_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "operate_activity_comments")


async def teacher_grade_rollcalls_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "grade_rollcalls")


async def teacher_grade_submission_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "grade_submission")


async def teacher_recommend_submissions_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "recommend_submissions")


async def teacher_cancel_recommend_submission_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "cancel_recommend_submission")


async def teacher_score_forum_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "score_forum")


async def teacher_update_forum_status_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_forum_status")


async def teacher_update_homework_announce_status_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_homework_announce_status")


async def teacher_update_homework_rubric_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_homework_rubric")


async def teacher_delete_exams_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "delete_exams")


async def teacher_create_exam_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "create_exam")


async def teacher_update_exam_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_exam")


async def teacher_score_exam_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "score_exam")


async def teacher_comment_exam_status_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "comment_exam_status")


async def teacher_create_classroom_exam_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "create_classroom_exam")


async def teacher_update_classroom_exam_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_classroom_exam")


async def teacher_delete_classroom_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "delete_classroom")


async def teacher_update_classroom_status_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_classroom_status")


async def teacher_update_classroom_subject_status_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_classroom_subject_status")


async def teacher_save_classroom_subjects_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "save_classroom_subjects")


async def teacher_delete_classroom_subjects_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "delete_classroom_subjects")


async def teacher_score_classroom_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "score_classroom")


async def teacher_create_subject_lib_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "create_subject_lib")


async def teacher_copy_subject_lib_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "copy_subject_lib")


async def teacher_update_subject_lib_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_subject_lib")


async def teacher_move_subject_libs_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "move_subject_libs")


async def teacher_copy_subject_libs_to_user_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "copy_subject_libs_to_user")


async def teacher_move_subject_lib_subjects_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "move_subject_lib_subjects")


async def teacher_copy_subject_lib_subjects_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "copy_subject_lib_subjects")


async def teacher_delete_subject_lib_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "delete_subject_lib")


async def teacher_delete_subject_lib_subjects_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "delete_subject_lib_subjects")


async def teacher_create_questionnaire_subject_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "create_questionnaire_subject")


async def teacher_update_questionnaire_subject_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_questionnaire_subject")


async def teacher_delete_questionnaire_subject_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "delete_questionnaire_subject")


async def teacher_import_questionnaire_subjects_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "import_questionnaire_subjects")


async def teacher_import_questionnaire_campus_subjects_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "import_questionnaire_campus_subjects")


async def teacher_create_course_estimate_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "create_course_estimate")


async def teacher_update_course_estimate_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_course_estimate")


async def teacher_delete_course_estimate_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "delete_course_estimate")


async def teacher_create_course_estimate_reply_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "create_course_estimate_reply")


async def teacher_delete_course_estimate_reply_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "delete_course_estimate_reply")


async def teacher_create_course_package_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "create_course_package")


async def teacher_export_course_package_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "export_course_package")


async def teacher_update_course_package_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_course_package")


async def teacher_delete_course_package_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "delete_course_package")


async def teacher_save_course_package_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "save_course_package")


async def teacher_import_course_package_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "import_course_package")


async def teacher_create_courseware_quiz_subjects_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "create_courseware_quiz_subjects")


async def teacher_update_courseware_quiz_subjects_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_courseware_quiz_subjects")


async def teacher_generate_courseware_quiz_subjects_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "generate_courseware_quiz_subjects")


async def teacher_generate_courseware_quiz_subjects_by_text_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "generate_courseware_quiz_subjects_by_text")


async def teacher_format_courseware_quiz_question_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "format_courseware_quiz_question")


async def teacher_copy_subject_libs_to_courseware_quiz_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "copy_subject_libs_to_courseware_quiz")


async def teacher_create_resource_group_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "create_resource_group")


async def teacher_update_resource_group_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_resource_group")


async def teacher_delete_resource_group_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "delete_resource_group")


async def teacher_delete_resource_group_members_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "delete_resource_group_members")


async def teacher_delete_resource_group_folder_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "delete_resource_group_folder")


async def teacher_update_resource_group_resource_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_resource_group_resource")


async def teacher_delete_resource_group_resource_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "delete_resource_group_resource")


async def teacher_leave_resource_group_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "leave_resource_group")


async def teacher_save_shared_resource_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "save_shared_resource")


async def teacher_batch_save_shared_resources_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "batch_save_shared_resources")


async def teacher_set_shared_resource_collection_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "set_shared_resource_collection")


async def teacher_unset_shared_resource_collection_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "unset_shared_resource_collection")


async def teacher_publish_shared_resource_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "publish_shared_resource")


async def teacher_delete_shared_resource_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "delete_shared_resource")


async def teacher_delete_shared_resource_to_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "delete_shared_resource_to")


async def teacher_add_shared_resource_comment_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "add_shared_resource_comment")


async def teacher_delete_shared_resource_comment_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "delete_shared_resource_comment")


async def teacher_create_entry_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "create_entry")


async def teacher_update_entry_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_entry")


async def teacher_delete_entry_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "delete_entry")


async def teacher_batch_delete_entries_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "batch_delete_entries")


async def teacher_update_slide_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_slide")


async def teacher_export_slide_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "export_slide")


async def teacher_delete_slide_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "delete_slide")


async def teacher_batch_delete_slides_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "batch_delete_slides")


async def teacher_update_slide_video_info_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "update_slide_video_info")


async def teacher_delete_slide_record_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "delete_slide_record")


async def teacher_request_command(args: ctx.Any) -> int:
    return await _teacher_action_entry(args, "api_request")

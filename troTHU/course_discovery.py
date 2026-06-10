"""Read-only course and semester discovery helpers."""

from __future__ import annotations

import inspect
from dataclasses import dataclass, field
from typing import Any, Mapping, Tuple
from urllib.parse import parse_qsl, urlencode, urlparse, urlunparse

try:  # pragma: no cover - exercised when aiohttp is installed
    import aiohttp
except ModuleNotFoundError:  # pragma: no cover
    aiohttp = None  # type: ignore[assignment]


SENSITIVE_MARKERS = ("cookie", "token", "password", "passwd", "authorization", "secret")


@dataclass(frozen=True)
class SemesterInfo:
    semester_id: str = ""
    semester_name: str = ""
    academic_year_id: str = ""
    academic_year_name: str = ""

    def to_dict(self) -> dict[str, str]:
        return {
            "semester_id": self.semester_id,
            "semester_name": self.semester_name,
            "academic_year_id": self.academic_year_id,
            "academic_year_name": self.academic_year_name,
        }


@dataclass(frozen=True)
class CourseInfo:
    course_id: str
    name: str
    code: str = ""
    semester_id: str = ""
    academic_year_id: str = ""
    teacher: str = ""

    def to_dict(self) -> dict[str, str]:
        return {
            "id": self.course_id,
            "name": self.name,
            "code": self.code,
            "semester_id": self.semester_id,
            "academic_year_id": self.academic_year_id,
            "teacher": self.teacher,
        }


@dataclass(frozen=True)
class CourseDiscoveryResult:
    status: str
    semester: SemesterInfo = field(default_factory=SemesterInfo)
    courses: Tuple[CourseInfo, ...] = field(default_factory=tuple)

    @property
    def ok(self) -> bool:
        return self.status == "ok"

    @property
    def course_count(self) -> int:
        return len(self.courses)

    def to_dict(self) -> dict[str, Any]:
        return {
            "status": self.status,
            "semester": self.semester.to_dict(),
            "course_count": self.course_count,
            "courses": [course.to_dict() for course in self.courses],
        }


class CourseDiscoveryError(Exception):
    def __init__(
        self,
        message: str,
        *,
        status: str = "unexpected_response",
        http_status: int = 0,
        url: str = "",
    ) -> None:
        super().__init__(sanitize_text(message))
        self.status = status
        self.http_status = int(http_status or 0)
        self.url = str(url or "")

    def to_dict(self) -> dict[str, Any]:
        return {
            "status": self.status,
            "http_status": self.http_status,
            "url": self.url,
            "message": str(self),
        }


def sanitize_text(value: Any, *, limit: int = 200) -> str:
    text = str(value or "").strip()
    if not text:
        return ""
    lowered = text.lower()
    if any(marker in lowered for marker in SENSITIVE_MARKERS):
        return "[redacted]"
    if len(text) > limit:
        return text[:limit] + "...(truncated)"
    return text


def normalize_text(value: Any, *, limit: int = 160) -> str:
    text = str(value or "").strip()
    text = " ".join(text.split())
    if len(text) > limit:
        return text[:limit] + "...(truncated)"
    return text


def _string_from_mapping(value: Mapping[str, Any], *keys: str) -> str:
    for key in keys:
        item = value.get(key)
        if item not in (None, ""):
            return normalize_text(item)
    return ""


def _nested_mapping(value: Any, *keys: str) -> Mapping[str, Any]:
    if not isinstance(value, Mapping):
        return {}
    for key in keys:
        item = value.get(key)
        if isinstance(item, Mapping):
            return item
    return {}


def parse_semester_info(payload: Any) -> SemesterInfo:
    if not isinstance(payload, Mapping):
        return SemesterInfo()

    semester = _nested_mapping(payload, "semester", "current_semester")
    academic_year = _nested_mapping(payload, "academic_year", "year")
    return SemesterInfo(
        semester_id=_string_from_mapping(payload, "semester_id")
        or _string_from_mapping(semester, "id", "semester_id"),
        semester_name=_string_from_mapping(payload, "semester_name")
        or _string_from_mapping(semester, "name", "title", "display_name"),
        academic_year_id=_string_from_mapping(payload, "academic_year_id")
        or _string_from_mapping(academic_year, "id", "academic_year_id"),
        academic_year_name=_string_from_mapping(payload, "academic_year_name")
        or _string_from_mapping(academic_year, "name", "title", "display_name"),
    )


def _course_items(payload: Any) -> list[Any]:
    if isinstance(payload, list):
        return payload
    if isinstance(payload, Mapping):
        for key in ("courses", "data", "items"):
            items = payload.get(key)
            if isinstance(items, list):
                return items
    return []


def _teacher_name(course: Mapping[str, Any]) -> str:
    direct = _string_from_mapping(course, "teacher", "teacher_name", "instructor", "instructor_name")
    if direct:
        return direct
    for key in ("teachers", "instructors"):
        value = course.get(key)
        if isinstance(value, list):
            names = []
            for item in value:
                if isinstance(item, Mapping):
                    name = _string_from_mapping(item, "name", "display_name", "full_name")
                else:
                    name = normalize_text(item)
                if name:
                    names.append(name)
            if names:
                return ", ".join(names[:3])
    return ""


def parse_courses(payload: Any) -> Tuple[CourseInfo, ...]:
    courses: list[CourseInfo] = []
    seen: set[str] = set()
    for index, item in enumerate(_course_items(payload), start=1):
        if not isinstance(item, Mapping):
            continue
        course_id = _string_from_mapping(item, "id", "course_id", "courseId")
        if not course_id:
            course_id = "index-{}".format(index)
        if course_id in seen:
            continue
        seen.add(course_id)
        name = _string_from_mapping(item, "display_name", "name", "title", "course_name")
        if not name:
            name = "Course {}".format(course_id)
        courses.append(
            CourseInfo(
                course_id=course_id,
                name=name,
                code=_string_from_mapping(item, "code", "course_code", "courseCode"),
                semester_id=_string_from_mapping(item, "semester_id", "semesterId"),
                academic_year_id=_string_from_mapping(item, "academic_year_id", "academicYearId"),
                teacher=_teacher_name(item),
            )
        )
    return tuple(courses)


def _request_kwargs(request_ssl: Any) -> dict[str, Any]:
    if request_ssl is None:
        return {}
    return {"ssl": request_ssl}


def _with_pagination(url: str, *, page: int = 1, page_size: int = 50) -> str:
    parsed = urlparse(str(url or ""))
    query = dict(parse_qsl(parsed.query, keep_blank_values=True))
    query.setdefault("page", str(page))
    query["page_size"] = str(max(1, int(page_size or 50)))
    return urlunparse(parsed._replace(query=urlencode(query)))


async def _fetch_json(session: Any, url: str, *, request_ssl: Any = None) -> Any:
    request = session.get(url, **_request_kwargs(request_ssl))
    if inspect.isawaitable(request):
        request = await request
    async with request as response:
        final_url = str(getattr(response, "url", url))
        status = int(getattr(response, "status", 0))
        if status == 401 or "login" in final_url.lower():
            raise CourseDiscoveryError(
                "Course discovery session is unauthorized.",
                status="unauthorized",
                http_status=status,
                url=final_url,
            )
        if status != 200:
            body = await response.text()
            raise CourseDiscoveryError(
                "HTTP {}: {}".format(status, sanitize_text(body)),
                status="unexpected_response",
                http_status=status,
                url=final_url,
            )
        try:
            return await response.json(encoding="utf-8")
        except Exception:
            body = await response.text()
            raise CourseDiscoveryError(
                "Unexpected response body: {}".format(sanitize_text(body)),
                status="unexpected_response",
                http_status=status,
                url=final_url,
            )


async def discover_courses(
    session: Any,
    *,
    endpoints: Any,
    request_ssl: Any = None,
    page_size: int = 50,
) -> CourseDiscoveryResult:
    semester_payload = await _fetch_json(
        session,
        endpoints.current_semester_url,
        request_ssl=request_ssl,
    )
    courses_payload = await _fetch_json(
        session,
        _with_pagination(endpoints.courses_url, page_size=page_size),
        request_ssl=request_ssl,
    )
    semester = parse_semester_info(semester_payload)
    courses = parse_courses(courses_payload)
    return CourseDiscoveryResult(
        status="ok" if courses else "empty_courses",
        semester=semester,
        courses=courses,
    )

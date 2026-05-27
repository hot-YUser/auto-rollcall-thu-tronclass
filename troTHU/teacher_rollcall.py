"""Teacher-side TronClass rollcall helpers."""

from __future__ import annotations

import re
from dataclasses import dataclass
from datetime import datetime
from typing import Any, Iterable, Mapping, Optional, Sequence, Tuple


ROLLCALL_STATUS_IN_PROGRESS = "in_progress"
ROLLCALL_STATUS_FINISHED = "finished"
ROLLCALL_STATUS_WAITING = "waiting"

ROLLCALL_TYPE_ANOTHER = "another"
ROLLCALL_TYPE_QR = "qr_rollcall"
ROLLCALL_TYPE_SELF_REGISTRATION = "self_registration"
ROLLCALL_TYPE_MANUAL = "manual"
ROLLCALL_TYPE_NUMBER = "number"
ROLLCALL_TYPE_RADAR = "radar"

STATUS_ABSENT = "absent"
STATUS_ON_CALL_FINE = "on_call_fine"

TEACHER_ROLE_TOKENS = {
    "admin",
    "assistant",
    "course_admin",
    "course_instructor",
    "instructor",
    "instructors",
    "lecturer",
    "owner",
    "ta",
    "teacher",
    "teachers",
    "teaching_assistant",
    "teachingassistant",
    "tutor",
    "助教",
    "授課教師",
    "教師",
    "老師",
}

STUDENT_ROLE_TOKENS = {
    "auditing_student",
    "learner",
    "member",
    "student",
    "students",
    "學生",
}

ROLE_KEYS = {
    "alias",
    "aliases",
    "as_instructor",
    "enrollment",
    "enrollment_role",
    "enrollment_roles",
    "enrollment_type",
    "identity",
    "is_instructor",
    "is_lecturer",
    "is_teacher",
    "opened_roles",
    "role",
    "role_alias",
    "rolealias",
    "roles",
}

STUDENT_BOOL_KEYS = {
    "enrollment_is_student",
    "is_student",
    "student",
}

TEACHER_BOOL_KEYS = {
    "as_instructor",
    "is_instructor",
    "is_lecturer",
    "is_teacher",
    "teacher",
}

ROLLCALL_KIND_ALIASES = {
    "": "manual",
    "another": "manual",
    "manual": "manual",
    "qr": "qr",
    "qrcode": "qr",
    "qr_code": "qr",
    "qr-code": "qr",
    "qr_rollcall": "qr",
    "number": "number",
    "number_rollcall": "number",
    "radar": "radar",
    "radar_rollcall": "radar",
    "self": "self_registration",
    "self-registration": "self_registration",
    "self_registration": "self_registration",
    "selfregistration": "self_registration",
}

ROLLCALL_STATUS_VALUES = {
    "absent",
    "on_call_fine",
    "on_call_arrive_late",
    "on_call_leave_early",
    "on_call_arrive_late_leave_early",
    "on_personal_leave",
    "on_sick_leave",
    "on_public_leave",
    "on_physiological_leave",
    "on_funeral_leave",
    "on_mental_health_leave",
    "no_status",
    "other",
}


@dataclass(frozen=True)
class CourseRoleInference:
    role: str = "unknown"
    teacher_capable: bool = False
    source: str = ""
    role_alias: str = ""
    tokens: Tuple[str, ...] = ()

    def to_dict(self) -> dict[str, Any]:
        return {
            "role": self.role,
            "teacher_capable": self.teacher_capable,
            "source": self.source,
            "role_alias": self.role_alias,
            "tokens": list(self.tokens),
        }


class TeacherRollcallError(ValueError):
    """Raised when a teacher rollcall payload cannot be built safely."""


def normalize_text(value: Any) -> str:
    return str(value or "").strip()


def _normalize_token(value: Any) -> str:
    return normalize_text(value).lower().replace("-", "_")


def _split_role_tokens(value: Any) -> list[str]:
    text = _normalize_token(value)
    if not text:
        return []
    parts = [part for part in re.split(r"[\s,;/|]+", text) if part]
    if text not in parts:
        parts.insert(0, text)
    return parts


def _mapping_value(value: Mapping[str, Any], *keys: str) -> Any:
    lowered = {str(key).lower(): item for key, item in value.items()}
    for key in keys:
        if key.lower() in lowered:
            return lowered[key.lower()]
    return None


def _role_values_from_mapping(value: Mapping[str, Any]) -> Iterable[tuple[str, Any]]:
    for key, item in value.items():
        normalized_key = _normalize_token(key)
        if normalized_key in ROLE_KEYS:
            yield normalized_key, item


def _collect_role_tokens(value: Any, *, source: str = "") -> list[tuple[str, str]]:
    tokens: list[tuple[str, str]] = []
    if isinstance(value, Mapping):
        for key, item in _role_values_from_mapping(value):
            if isinstance(item, Mapping):
                tokens.extend(_collect_role_tokens(item, source=key))
            elif isinstance(item, (list, tuple, set)):
                for child in item:
                    tokens.extend(_collect_role_tokens(child, source=key))
            else:
                for token in _split_role_tokens(item):
                    tokens.append((source or key, token))
        return tokens
    if isinstance(value, (list, tuple, set)):
        for item in value:
            tokens.extend(_collect_role_tokens(item, source=source))
        return tokens
    for token in _split_role_tokens(value):
        tokens.append((source, token))
    return tokens


def _bool_hint(value: Any, keys: set[str]) -> Optional[bool]:
    if not isinstance(value, Mapping):
        return None
    for key, item in value.items():
        normalized_key = _normalize_token(key)
        if normalized_key in keys and isinstance(item, bool):
            return item
        if normalized_key in ROLE_KEYS and isinstance(item, Mapping):
            nested = _bool_hint(item, keys)
            if nested is not None:
                return nested
    return None


def infer_course_role(course: Any) -> CourseRoleInference:
    if isinstance(course, CourseRoleInference):
        return course

    teacher_bool = _bool_hint(course, TEACHER_BOOL_KEYS)
    student_bool = _bool_hint(course, STUDENT_BOOL_KEYS)
    if teacher_bool is True:
        return CourseRoleInference(role="teacher", teacher_capable=True, source="boolean_hint")
    if student_bool is True and teacher_bool is not True:
        return CourseRoleInference(role="student", teacher_capable=False, source="boolean_hint")

    if not isinstance(course, Mapping):
        attr_payload = {
            "role": getattr(course, "role", ""),
            "role_alias": getattr(course, "role_alias", ""),
            "roles": getattr(course, "roles", ()),
            "enrollment": getattr(course, "enrollment", ""),
            "teacher_capable": getattr(course, "teacher_capable", False),
        }
        if bool(attr_payload["teacher_capable"]):
            return CourseRoleInference(role="teacher", teacher_capable=True, source="course_info")
        course = attr_payload

    token_pairs = _collect_role_tokens(course)
    tokens = tuple(dict.fromkeys(token for _, token in token_pairs if token))
    source_by_token = {token: source for source, token in token_pairs}
    for token in tokens:
        if token in TEACHER_ROLE_TOKENS:
            return CourseRoleInference(
                role="teacher",
                teacher_capable=True,
                source=source_by_token.get(token, "role"),
                role_alias=token,
                tokens=tokens,
            )
    for token in tokens:
        if token in STUDENT_ROLE_TOKENS:
            return CourseRoleInference(
                role="student",
                teacher_capable=False,
                source=source_by_token.get(token, "role"),
                role_alias=token,
                tokens=tokens,
            )
    return CourseRoleInference(tokens=tokens)


def merge_course_role(course: Any, enrollment_payload: Any) -> CourseRoleInference:
    enrollment_role = infer_course_role({"enrollment": enrollment_payload})
    if enrollment_role.role != "unknown":
        return enrollment_role
    return infer_course_role(course)


def normalize_rollcall_kind(value: Any) -> str:
    key = _normalize_token(value)
    if key not in ROLLCALL_KIND_ALIASES:
        raise TeacherRollcallError("Unsupported teacher rollcall type: {}".format(value))
    return ROLLCALL_KIND_ALIASES[key]


def normalize_rollcall_status(value: Any, *, default: str = STATUS_ON_CALL_FINE) -> str:
    status = _normalize_token(value) or default
    if status not in ROLLCALL_STATUS_VALUES:
        raise TeacherRollcallError("Unsupported rollcall student status: {}".format(value))
    return status


def normalize_student_rollcalls(value: Any) -> list[dict[str, Any]]:
    if value in (None, ""):
        return []
    if not isinstance(value, Sequence) or isinstance(value, (str, bytes, bytearray)):
        raise TeacherRollcallError("student_rollcalls must be a list of objects.")
    records: list[dict[str, Any]] = []
    for item in value:
        if not isinstance(item, Mapping):
            raise TeacherRollcallError("student_rollcalls entries must be objects.")
        student_id = _mapping_value(item, "student_id", "studentId", "id")
        if student_id in (None, ""):
            raise TeacherRollcallError("student_rollcalls entries require student_id.")
        status = _mapping_value(item, "student_rollcall_status", "rollcall_status", "status")
        records.append(
            {
                "student_id": student_id,
                "student_rollcall_status": normalize_rollcall_status(status),
            }
        )
    return records


def normalize_student_rollcall_history_updates(value: Any) -> list[dict[str, Any]]:
    if value in (None, ""):
        return []
    if not isinstance(value, Sequence) or isinstance(value, (str, bytes, bytearray)):
        raise TeacherRollcallError("student_rollcalls must be a list of objects.")
    records: list[dict[str, Any]] = []
    for item in value:
        if not isinstance(item, Mapping):
            raise TeacherRollcallError("student_rollcalls entries must be objects.")
        student_rollcall_id = _mapping_value(
            item,
            "student_rollcall_id",
            "studentRollcallId",
            "rollcall_id",
            "rollcallId",
            "id",
        )
        if student_rollcall_id in (None, ""):
            raise TeacherRollcallError("student_rollcalls entries require student_rollcall_id.")
        status = _mapping_value(
            item,
            "student_status",
            "studentStatus",
            "student_rollcall_status",
            "rollcall_status",
            "status",
        )
        records.append(
            {
                "student_rollcall_id": student_rollcall_id,
                "student_status": normalize_rollcall_status(status),
            }
        )
    return records


def default_rollcall_title(now: Optional[datetime] = None) -> str:
    current = now or datetime.now()
    return current.strftime("%Y.%m.%d %H:%M")


def module_rollcall_type_for_kind(value: Any) -> str:
    kind = normalize_rollcall_kind(value)
    if kind == "qr":
        return ROLLCALL_TYPE_QR
    if kind == "self_registration":
        return ROLLCALL_TYPE_SELF_REGISTRATION
    if kind == "number":
        return ROLLCALL_TYPE_NUMBER
    if kind == "radar":
        return ROLLCALL_TYPE_RADAR
    return ROLLCALL_TYPE_MANUAL


def build_module_rollcall_payload(
    *,
    course_id: Any,
    module_id: Any,
    kind: Any = "qr",
    title: str = "",
    status: str = ROLLCALL_STATUS_WAITING,
) -> dict[str, Any]:
    course_id_text = normalize_text(course_id)
    module_id_text = normalize_text(module_id)
    if not course_id_text:
        raise TeacherRollcallError("course_id is required.")
    if not module_id_text:
        raise TeacherRollcallError("module_id is required.")
    return {
        "status": normalize_text(status) or ROLLCALL_STATUS_WAITING,
        "course_id": course_id_text,
        "module_id": module_id_text,
        "title": normalize_text(title) or default_rollcall_title(),
        "type": module_rollcall_type_for_kind(kind),
    }


def build_teacher_rollcall_payload(
    *,
    kind: Any = "manual",
    title: str = "",
    status: str = ROLLCALL_STATUS_IN_PROGRESS,
    number_code: str = "",
    latitude: Any = None,
    longitude: Any = None,
    altitude: Any = None,
    duration_seconds: int = 0,
    use_beacon: bool = False,
    student_rollcalls: Any = None,
    default_rollcall_status: str = "",
) -> dict[str, Any]:
    normalized_kind = normalize_rollcall_kind(kind)
    payload = {
        "title": normalize_text(title) or default_rollcall_title(),
        "status": normalize_text(status) or ROLLCALL_STATUS_IN_PROGRESS,
        "is_radar": False,
        "is_number": False,
        "type": ROLLCALL_TYPE_ANOTHER,
        "number_code": normalize_text(number_code),
        "altitude": altitude,
        "latitude": latitude,
        "longitude": longitude,
        "use_beacon": bool(use_beacon),
        "duration": max(0, int(duration_seconds or 0)),
        "student_rollcalls": normalize_student_rollcalls(student_rollcalls),
    }
    if normalized_kind == "number":
        payload["is_number"] = True
    elif normalized_kind == "radar":
        payload["is_radar"] = True
    elif normalized_kind == "qr":
        payload["type"] = ROLLCALL_TYPE_QR
    elif normalized_kind == "self_registration":
        payload["type"] = ROLLCALL_TYPE_SELF_REGISTRATION
        payload["default_rollcall_status"] = normalize_rollcall_status(
            default_rollcall_status,
            default=STATUS_ABSENT,
        )
    elif default_rollcall_status:
        payload["default_rollcall_status"] = normalize_rollcall_status(default_rollcall_status)
    return payload


def build_teacher_rollcall_update_payload(
    *,
    status: str = ROLLCALL_STATUS_IN_PROGRESS,
    student_rollcalls: Any = None,
) -> dict[str, Any]:
    return {
        "status": normalize_text(status) or ROLLCALL_STATUS_IN_PROGRESS,
        "student_rollcalls": normalize_student_rollcalls(student_rollcalls),
    }


def build_student_rollcall_history_update_payload(
    *,
    student_rollcalls: Any = None,
) -> dict[str, Any]:
    return {
        "student_rollcalls": normalize_student_rollcall_history_updates(student_rollcalls),
    }


def infer_rollcall_kind(rollcall: Any = None, fallback: Any = "manual") -> str:
    if isinstance(rollcall, Mapping):
        if bool(rollcall.get("is_number")):
            return "number"
        if bool(rollcall.get("is_radar")):
            return "radar"
        type_value = _normalize_token(rollcall.get("type"))
        source_value = _normalize_token(rollcall.get("source"))
        if type_value == ROLLCALL_TYPE_SELF_REGISTRATION:
            return "self_registration"
        if type_value == ROLLCALL_TYPE_QR or source_value == "qr":
            return "qr"
        if source_value == "manual":
            return "manual"
    return normalize_rollcall_kind(fallback)


def teacher_stop_path(rollcall_id: Any, rollcall: Any = None, fallback: Any = "manual") -> str:
    rollcall_id_text = normalize_text(rollcall_id)
    if not rollcall_id_text:
        raise TeacherRollcallError("rollcall_id is required.")
    kind = infer_rollcall_kind(rollcall, fallback)
    if kind == "number":
        suffix = "stop_number_rollcall"
    elif kind == "radar":
        return "/api/rollcall/{}/stop_radar?api_version=1.1.0".format(rollcall_id_text)
    elif kind == "self_registration":
        suffix = "stop_time_table_rollcall"
    else:
        suffix = "stop_qr_rollcall"
    return "/api/rollcall/{}/{}".format(rollcall_id_text, suffix)


def extract_rollcall_id(payload: Any) -> str:
    if isinstance(payload, Mapping):
        for key in ("id", "rollcall_id", "rollcallId"):
            value = payload.get(key)
            if value not in (None, ""):
                return normalize_text(value)
        for key in ("rollcall", "data"):
            nested = payload.get(key)
            nested_id = extract_rollcall_id(nested)
            if nested_id:
                return nested_id
    return ""


def parse_rollcalls_payload(payload: Any) -> list[dict[str, Any]]:
    if isinstance(payload, list):
        return [dict(item) for item in payload if isinstance(item, Mapping)]
    if isinstance(payload, Mapping):
        for key in ("rollcalls", "data", "items"):
            value = payload.get(key)
            if isinstance(value, list):
                return [dict(item) for item in value if isinstance(item, Mapping)]
        return [dict(payload)]
    return []

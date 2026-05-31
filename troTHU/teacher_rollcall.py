"""Small teacher-side rollcall helpers for the public beta surface."""

from __future__ import annotations

from datetime import datetime
from typing import Any, Mapping, Sequence


ROLLCALL_KIND_ALIASES = {
    "": "manual",
    "another": "manual",
    "manual": "manual",
    "number": "number",
    "number_rollcall": "number",
    "radar": "radar",
    "radar_rollcall": "radar",
    "qr": "qr",
    "qrcode": "qr",
    "qr_code": "qr",
    "qr-code": "qr",
    "qr_rollcall": "qr",
    "self": "self_registration",
    "self-registration": "self_registration",
    "self_registration": "self_registration",
    "selfregistration": "self_registration",
}


class TeacherRollcallError(ValueError):
    """Raised when a beta teacher rollcall request cannot be built safely."""


def normalize_text(value: Any) -> str:
    return str(value or "").strip()


def _normalize_token(value: Any) -> str:
    return normalize_text(value).lower().replace("-", "_")


def normalize_rollcall_kind(value: Any) -> str:
    key = _normalize_token(value)
    if key not in ROLLCALL_KIND_ALIASES:
        raise TeacherRollcallError("Unsupported teacher rollcall type: {}".format(value))
    return ROLLCALL_KIND_ALIASES[key]


def default_rollcall_title(now: datetime | None = None) -> str:
    current = now or datetime.now()
    return current.strftime("%Y.%m.%d %H:%M")


def _normalize_student_rollcalls(value: Any) -> list[dict[str, Any]]:
    if value in (None, ""):
        return []
    if not isinstance(value, Sequence) or isinstance(value, (str, bytes, bytearray)):
        raise TeacherRollcallError("student_rollcalls must be a list of objects.")
    records: list[dict[str, Any]] = []
    for item in value:
        if not isinstance(item, Mapping):
            raise TeacherRollcallError("student_rollcalls entries must be objects.")
        student_id = item.get("student_id", item.get("studentId", item.get("id")))
        if student_id in (None, ""):
            raise TeacherRollcallError("student_rollcalls entries require student_id.")
        status = normalize_text(
            item.get("student_rollcall_status", item.get("rollcall_status", item.get("status")))
        ) or "absent"
        records.append({"student_id": student_id, "student_rollcall_status": status})
    return records


def build_teacher_rollcall_payload(
    *,
    kind: Any = "manual",
    title: str = "",
    status: str = "in_progress",
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
        "status": normalize_text(status) or "in_progress",
        "is_radar": False,
        "is_number": False,
        "type": "another",
        "number_code": normalize_text(number_code),
        "altitude": altitude,
        "latitude": latitude,
        "longitude": longitude,
        "use_beacon": bool(use_beacon),
        "duration": max(0, int(duration_seconds or 0)),
        "student_rollcalls": _normalize_student_rollcalls(student_rollcalls),
    }
    if normalized_kind == "number":
        payload["is_number"] = True
    elif normalized_kind == "radar":
        payload["is_radar"] = True
    elif normalized_kind == "qr":
        payload["type"] = "qr_rollcall"
    elif normalized_kind == "self_registration":
        payload["type"] = "self_registration"
        payload["default_rollcall_status"] = normalize_text(default_rollcall_status) or "absent"
    elif default_rollcall_status:
        payload["default_rollcall_status"] = normalize_text(default_rollcall_status)
    return payload


def infer_rollcall_kind(rollcall: Any = None, fallback: Any = "manual") -> str:
    if isinstance(rollcall, Mapping):
        if bool(rollcall.get("is_number")):
            return "number"
        if bool(rollcall.get("is_radar")):
            return "radar"
        type_value = _normalize_token(rollcall.get("type"))
        source_value = _normalize_token(rollcall.get("source"))
        if type_value == "self_registration":
            return "self_registration"
        if type_value == "qr_rollcall" or source_value == "qr":
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
            nested_id = extract_rollcall_id(payload.get(key))
            if nested_id:
                return nested_id
    return ""

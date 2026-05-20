import json
from dataclasses import dataclass
from enum import Enum
from typing import Any, Dict, Optional


class NumberAttemptStatus(str, Enum):
    SUCCESS = "success"
    WRONG_CODE = "wrong_code"
    TRANSIENT_FAILURE = "transient_failure"
    UNAUTHORIZED = "unauthorized"
    UNKNOWN_FAILURE = "unknown_failure"


@dataclass(frozen=True)
class NumberAttemptResult:
    status: NumberAttemptStatus
    http_status: int
    message: str = ""
    payload: Optional[Dict[str, Any]] = None

    @property
    def success(self) -> bool:
        return self.status == NumberAttemptStatus.SUCCESS

    @property
    def retriable(self) -> bool:
        return self.status == NumberAttemptStatus.TRANSIENT_FAILURE

    @property
    def terminal(self) -> bool:
        return self.status in {
            NumberAttemptStatus.SUCCESS,
            NumberAttemptStatus.UNAUTHORIZED,
            NumberAttemptStatus.UNKNOWN_FAILURE,
        }


SUCCESS_MARKERS = (
    "success",
    "ok",
    "on_call",
    "on_call_fine",
    "accepted",
    "completed",
    "已完成",
    "成功",
    "點名成功",
    "簽到成功",
)
WRONG_CODE_MARKERS = (
    "wrong",
    "incorrect",
    "invalid number",
    "invalid code",
    "not match",
    "mismatch",
    "錯誤",
    "錯碼",
    "不正確",
    "失敗",
    "不存在",
    "過期",
)
UNAUTHORIZED_MARKERS = (
    "unauthorized",
    "forbidden",
    "login",
    "sign in",
    "session expired",
    "未登入",
    "請登入",
    "登入逾時",
    "權限",
)


def is_transient_number_status(status_code: int) -> bool:
    return status_code in (408, 425, 429) or 500 <= status_code <= 599


def _loads_json(text: str) -> Optional[Dict[str, Any]]:
    try:
        payload = json.loads(text)
    except (TypeError, ValueError):
        return None
    return payload if isinstance(payload, dict) else None


def _text_has_any(text: str, markers: Any) -> bool:
    lowered = text.lower()
    return any(marker in lowered for marker in markers)


def _payload_message(payload: Dict[str, Any]) -> str:
    for key in ("message", "msg", "error", "error_description", "detail", "status"):
        value = payload.get(key)
        if value not in (None, ""):
            return str(value)
    return ""


def _payload_bool(payload: Dict[str, Any], *keys: str) -> Optional[bool]:
    for key in keys:
        value = payload.get(key)
        if isinstance(value, bool):
            return value
    return None


def classify_number_response(status_code: int, body_text: str = "") -> NumberAttemptResult:
    text = str(body_text or "").strip()
    payload = _loads_json(text) if text else None
    message = _payload_message(payload) if payload else text[:200]
    combined_text = " ".join(part for part in (text, message) if part).strip()

    if status_code in (401, 403):
        return NumberAttemptResult(
            NumberAttemptStatus.UNAUTHORIZED,
            status_code,
            message or "authentication expired",
            payload,
        )

    if is_transient_number_status(status_code):
        return NumberAttemptResult(
            NumberAttemptStatus.TRANSIENT_FAILURE,
            status_code,
            message or "temporary HTTP failure",
            payload,
        )

    if status_code in (400, 409, 422):
        return NumberAttemptResult(
            NumberAttemptStatus.WRONG_CODE,
            status_code,
            message or "wrong number code",
            payload,
        )

    if 200 <= status_code <= 299:
        if not text:
            return NumberAttemptResult(NumberAttemptStatus.SUCCESS, status_code, "empty 2xx", payload)

        if _text_has_any(combined_text, UNAUTHORIZED_MARKERS):
            return NumberAttemptResult(
                NumberAttemptStatus.UNAUTHORIZED,
                status_code,
                message or "authentication required",
                payload,
            )

        success_flag = _payload_bool(payload or {}, "success", "ok", "is_success")
        if success_flag is True:
            return NumberAttemptResult(NumberAttemptStatus.SUCCESS, status_code, message, payload)

        if _text_has_any(combined_text, WRONG_CODE_MARKERS):
            return NumberAttemptResult(
                NumberAttemptStatus.WRONG_CODE,
                status_code,
                message or "wrong number code",
                payload,
            )

        if success_flag is False:
            return NumberAttemptResult(
                NumberAttemptStatus.WRONG_CODE,
                status_code,
                message or "server rejected number code",
                payload,
            )

        marker_text = message if payload else combined_text
        if _text_has_any(marker_text, SUCCESS_MARKERS):
            return NumberAttemptResult(NumberAttemptStatus.SUCCESS, status_code, message, payload)

        return NumberAttemptResult(NumberAttemptStatus.SUCCESS, status_code, message or "2xx", payload)

    if 300 <= status_code <= 399:
        return NumberAttemptResult(
            NumberAttemptStatus.UNAUTHORIZED,
            status_code,
            message or "redirected during number rollcall",
            payload,
        )

    return NumberAttemptResult(
        NumberAttemptStatus.UNKNOWN_FAILURE,
        status_code,
        message or "unexpected HTTP response",
        payload,
    )

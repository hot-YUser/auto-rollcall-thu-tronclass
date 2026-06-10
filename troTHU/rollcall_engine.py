from __future__ import annotations
from typing import Any, Dict, Optional, Tuple

try:
    from troTHU.rollcall_models import AttendanceType, RollcallAction, RollcallDecision
except ImportError:  # pragma: no cover - script execution fallback
    from rollcall_models import AttendanceType, RollcallAction, RollcallDecision


def normalize_text(value: Any) -> str:
    return str(value or "").strip()


def classify_rollcall(rollcall: Dict[str, Any]) -> Tuple[str, str, str]:
    rollcall_type_value = normalize_text(
        rollcall.get("type") or rollcall.get("rollcall_type") or rollcall.get("name")
    ).lower()

    qrcode_keys = (
        "is_qrcode",
        "is_qr_code",
        "is_qr",
        "qrcode",
        "qr_code",
        "qrcode_url",
    )
    if any(rollcall.get(key) for key in qrcode_keys) or "qr" in rollcall_type_value:
        return "unsupported_qrcode", "qrcode", "偵測到 QR Code 點名，請貼上 QR 內容後手動送出。"

    return "unsupported_rollcall", "unknown", "偵測到未支援的點名類型"


def decide_rollcall(rollcalls: Any) -> RollcallDecision:
    if not isinstance(rollcalls, list) or not rollcalls:
        return RollcallDecision(status="not_call", action=RollcallAction.NONE)

    first_supported_number = None
    first_supported_radar = None
    first_qrcode: Optional[Tuple[str, Dict[str, Any], str, str]] = None
    first_unsupported: Optional[Tuple[str, Dict[str, Any], str, str]] = None
    first_on_call_fine = None

    for rollcall in rollcalls:
        if not isinstance(rollcall, dict):
            continue
        if rollcall.get("is_number"):
            first_supported_number = rollcall
            break
        if rollcall.get("is_radar") or "radar" in normalize_text(
            rollcall.get("type") or rollcall.get("rollcall_type") or rollcall.get("name")
        ).lower():
            first_supported_radar = rollcall
            break
        if rollcall.get("status") == "on_call_fine":
            if first_on_call_fine is None:
                first_on_call_fine = rollcall
            continue
        status, rollcall_type, message = classify_rollcall(rollcall)
        if status == "unsupported_qrcode" and first_qrcode is None:
            first_qrcode = (status, rollcall, rollcall_type, message)
        elif first_unsupported is None:
            first_unsupported = (status, rollcall, rollcall_type, message)

    if first_supported_number is not None:
        return RollcallDecision(
            status="is_number",
            action=RollcallAction.ANSWER_NUMBER,
            attendance_type=AttendanceType.NUMBER,
            rollcall=first_supported_number,
        )
    if first_supported_radar is not None:
        return RollcallDecision(
            status="is_radar",
            action=RollcallAction.ANSWER_RADAR,
            attendance_type=AttendanceType.RADAR,
            rollcall=first_supported_radar,
        )
    if first_qrcode is not None:
        status, rollcall, _rollcall_type, message = first_qrcode
        return RollcallDecision(
            status=status,
            action=RollcallAction.REQUEST_QR_PAYLOAD,
            attendance_type=AttendanceType.QRCODE,
            rollcall=rollcall,
            message=message,
        )
    if first_unsupported is not None:
        status, rollcall, rollcall_type, message = first_unsupported
        return RollcallDecision(
            status=status,
            action=RollcallAction.REPORT_UNSUPPORTED,
            attendance_type=AttendanceType(rollcall_type)
            if rollcall_type in AttendanceType._value2member_map_
            else AttendanceType.UNKNOWN,
            rollcall=rollcall,
            message=message,
        )
    if first_on_call_fine is not None:
        return RollcallDecision(status="on_call_fine", action=RollcallAction.NONE, rollcall=first_on_call_fine)
    return RollcallDecision(status="not_call", action=RollcallAction.NONE)


def select_rollcall(rollcalls: Any) -> Tuple[str, Optional[Dict[str, Any]], str, str]:
    decision = decide_rollcall(rollcalls)
    rollcall_type = "" if decision.attendance_type == AttendanceType.NONE else decision.attendance_type.value
    return decision.status, decision.rollcall, rollcall_type, decision.message

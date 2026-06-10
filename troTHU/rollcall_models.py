from __future__ import annotations
from dataclasses import dataclass, field
from enum import Enum
from typing import Any, Dict, Iterable, Optional, Tuple


class AttendanceType(str, Enum):
    NONE = "none"
    NUMBER = "number"
    RADAR = "radar"
    QRCODE = "qrcode"
    UNKNOWN = "unknown"


class RollcallAction(str, Enum):
    NONE = "none"
    ANSWER_NUMBER = "answer_number"
    ANSWER_RADAR = "answer_radar"
    REQUEST_QR_PAYLOAD = "request_qr_payload"
    SKIP_COMPLETED = "skip_completed"
    REPORT_UNSUPPORTED = "report_unsupported"


class NotificationEventType(str, Enum):
    ROLLCALL_DETECTED = "rollcall_detected"
    ROLLCALL_ANSWERED = "rollcall_answered"
    ROLLCALL_FAILED = "rollcall_failed"
    QR_PAYLOAD_REQUESTED = "qr_payload_requested"
    SESSION_EXPIRED = "session_expired"
    STATUS = "status"


class AdapterCommandAction(str, Enum):
    STATUS = "status"
    START = "start"
    STOP = "stop"
    FORCE = "force"
    REAUTH = "reauth"
    QR_SUBMIT = "qr-submit"


@dataclass(frozen=True)
class RollcallDecision:
    status: str
    action: RollcallAction
    attendance_type: AttendanceType = AttendanceType.NONE
    rollcall: Optional[Dict[str, Any]] = None
    message: str = ""

    @property
    def rollcall_id(self) -> Any:
        if not self.rollcall:
            return None
        return self.rollcall.get("rollcall_id")


@dataclass(frozen=True)
class RollcallOutcome:
    status: str
    attendance_type: AttendanceType = AttendanceType.UNKNOWN
    rollcall_id: Any = None
    success: bool = False
    message: str = ""
    data: Dict[str, Any] = field(default_factory=dict)


@dataclass(frozen=True)
class NotificationEvent:
    event: str
    title: str
    body: str
    attendance_type: AttendanceType = AttendanceType.UNKNOWN
    rollcall_id: Any = None
    data: Dict[str, Any] = field(default_factory=dict)

    def render(self) -> str:
        parts = [self.title.strip()]
        if self.rollcall_id not in (None, ""):
            parts.append(f"rollcall_id: {self.rollcall_id}")
        if self.body.strip():
            parts.append(self.body.strip())
        return "\n".join(parts)


@dataclass(frozen=True)
class AdapterTarget:
    adapter: str
    target_id: str
    profile: str = ""
    channel_id: str = ""

    def key(self) -> str:
        parts = [self.adapter, self.target_id, self.profile, self.channel_id]
        return ":".join(str(part or "").strip() for part in parts)


@dataclass(frozen=True)
class AdapterCommand:
    action: AdapterCommandAction
    target: AdapterTarget
    payload: Dict[str, Any] = field(default_factory=dict)
    raw_text: str = ""


@dataclass(frozen=True)
class OutboundEvent:
    event_type: NotificationEventType
    target: Optional[AdapterTarget]
    title: str
    body: str = ""
    rollcall_id: Any = None
    attendance_type: AttendanceType = AttendanceType.UNKNOWN
    data: Dict[str, Any] = field(default_factory=dict)

    def to_notification(self) -> NotificationEvent:
        return NotificationEvent(
            event=self.event_type.value,
            title=self.title,
            body=self.body,
            attendance_type=self.attendance_type,
            rollcall_id=self.rollcall_id,
            data=self.data,
        )


@dataclass(frozen=True)
class RollcallBatchSummary:
    outcomes: Tuple[RollcallOutcome, ...] = field(default_factory=tuple)

    @classmethod
    def from_iterable(cls, outcomes: Iterable[RollcallOutcome]) -> "RollcallBatchSummary":
        return cls(tuple(outcomes))

    @property
    def total(self) -> int:
        return len(self.outcomes)

    @property
    def successes(self) -> int:
        return sum(1 for outcome in self.outcomes if outcome.success)

    @property
    def failures(self) -> int:
        return sum(1 for outcome in self.outcomes if not outcome.success)

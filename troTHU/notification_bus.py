from __future__ import annotations
import inspect
from dataclasses import dataclass, field
from typing import Any, Callable, Dict, Iterable, Mapping, Optional, Tuple

try:
    from troTHU.debug_capture import sanitize_debug_payload
    from troTHU.rollcall_models import (
        AdapterTarget,
        NotificationEvent,
        NotificationEventType,
        OutboundEvent,
    )
except ImportError:  # pragma: no cover - script execution fallback
    from debug_capture import sanitize_debug_payload
    from rollcall_models import (
        AdapterTarget,
        NotificationEvent,
        NotificationEventType,
        OutboundEvent,
    )


NotificationSink = Callable[[OutboundEvent], Any]
PAYLOAD_KEY_PARTS = ("payload", "qr")


@dataclass(frozen=True)
class NotificationDispatchResult:
    target: Optional[AdapterTarget]
    ok: bool
    error: str = ""
    sink: str = ""

    def to_dict(self) -> Dict[str, Any]:
        return {
            "target": self.target.key() if self.target else "",
            "ok": self.ok,
            "error": self.error,
            "sink": self.sink,
        }


@dataclass(frozen=True)
class NotificationDispatchSummary:
    results: Tuple[NotificationDispatchResult, ...] = field(default_factory=tuple)

    @property
    def total(self) -> int:
        return len(self.results)

    @property
    def delivered(self) -> int:
        return sum(1 for result in self.results if result.ok)

    @property
    def failures(self) -> int:
        return sum(1 for result in self.results if not result.ok)

    @property
    def ok(self) -> bool:
        return self.failures == 0

    def to_dict(self) -> Dict[str, Any]:
        return {
            "total": self.total,
            "delivered": self.delivered,
            "failures": self.failures,
            "results": [result.to_dict() for result in self.results],
        }


def _binding_items(config: Mapping[str, Any]) -> Iterable[Mapping[str, Any]]:
    integrations = config.get("integrations", {})
    if not isinstance(integrations, Mapping):
        return tuple()
    bindings = integrations.get("bindings", {})
    if not isinstance(bindings, Mapping):
        return tuple()
    return tuple(value for value in bindings.values() if isinstance(value, Mapping))


def build_notification_targets(config: Mapping[str, Any], profile: str = "") -> Tuple[AdapterTarget, ...]:
    profile_text = str(profile or "").strip()
    targets = []
    for binding in _binding_items(config):
        binding_profile = str(binding.get("profile") or "").strip()
        if profile_text and binding_profile != profile_text:
            continue
        adapter = str(binding.get("adapter") or "").strip()
        external_user_id = str(binding.get("external_user_id") or "").strip()
        if not adapter or not external_user_id:
            continue
        targets.append(
            AdapterTarget(
                adapter=adapter,
                target_id=external_user_id,
                profile=binding_profile,
                channel_id=str(binding.get("channel_id") or "").strip(),
            )
        )
    return tuple(targets)


def _event_type(value: str) -> NotificationEventType:
    try:
        return NotificationEventType(value)
    except ValueError:
        return NotificationEventType.STATUS


def _sink_name(sink: NotificationSink) -> str:
    return getattr(sink, "__name__", sink.__class__.__name__)


def _sanitize_event_data(value: Any) -> Any:
    sanitized = sanitize_debug_payload(value)
    if isinstance(sanitized, dict):
        result = {}
        for key, item in sanitized.items():
            key_text = str(key)
            if any(part in key_text.lower() for part in PAYLOAD_KEY_PARTS):
                result[key_text] = "[redacted]"
            else:
                result[key_text] = _sanitize_event_data(item)
        return result
    if isinstance(sanitized, list):
        return [_sanitize_event_data(item) for item in sanitized]
    return sanitized


async def _maybe_await(value: Any) -> Any:
    if inspect.isawaitable(value):
        return await value
    return value


async def dispatch_notification_event(
    event: NotificationEvent,
    *,
    config: Mapping[str, Any],
    sinks: Iterable[NotificationSink],
    profile: str = "",
) -> NotificationDispatchSummary:
    sink_list = tuple(sinks or ())
    if not sink_list:
        return NotificationDispatchSummary()

    safe_data = _sanitize_event_data(dict(event.data or {}))
    targets = build_notification_targets(config, profile=profile)
    results = []
    for target in targets:
        outbound = OutboundEvent(
            event_type=_event_type(event.event),
            target=target,
            title=event.title,
            body=event.body,
            rollcall_id=event.rollcall_id,
            attendance_type=event.attendance_type,
            data=safe_data,
        )
        for sink in sink_list:
            try:
                await _maybe_await(sink(outbound))
                results.append(NotificationDispatchResult(target, True, sink=_sink_name(sink)))
            except Exception as exc:  # pragma: no cover - exact exception types are sink-specific
                results.append(
                    NotificationDispatchResult(
                        target,
                        False,
                        error=str(exc),
                        sink=_sink_name(sink),
                    )
                )
    return NotificationDispatchSummary(tuple(results))

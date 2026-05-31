import hashlib
import json
import re
import time
from dataclasses import dataclass
from datetime import datetime
from typing import Any, List, Optional, Tuple

try:
    from troTHU.radar_solver import DEFAULT_BOUNDARY_POINTS
except ImportError:  # pragma: no cover - script execution fallback
    from radar_solver import DEFAULT_BOUNDARY_POINTS


DEFAULT_OPERATING_RANGE = ["00:00", "00:00"]
NUMBER_CODE_LIMIT = 10000
TIME_RANGE_PATTERN = re.compile(r"\b\d{1,2}[:：]\d{2}\b")

BIG_DIGITS = {
    "0": [" ### ", "#   #", "#   #", "#   #", " ### "],
    "1": ["  #  ", " ##  ", "  #  ", "  #  ", " ### "],
    "2": [" ### ", "#   #", "   # ", "  #  ", "#####"],
    "3": ["#### ", "    #", " ### ", "    #", "#### "],
    "4": ["#   #", "#   #", "#####", "    #", "    #"],
    "5": ["#####", "#    ", "#### ", "    #", "#### "],
    "6": [" ### ", "#    ", "#### ", "#   #", " ### "],
    "7": ["#####", "    #", "   # ", "  #  ", "  #  "],
    "8": [" ### ", "#   #", " ### ", "#   #", " ### "],
    "9": [" ### ", "#   #", " ####", "    #", " ### "],
    "?": ["#####", "    #", "  ## ", "     ", "  #  "],
}


@dataclass(frozen=True)
class RadarCoordinateResult:
    success: bool
    distance: float = -1.0
    error_code: str = ""
    message: str = ""
    present_hint: bool = False
    present_status: str = ""

    @property
    def has_distance(self) -> bool:
        return self.distance >= 0.0

    @property
    def is_scope_distance(self) -> bool:
        return self.error_code == "radar_out_of_rollcall_scope" and self.has_distance


@dataclass(frozen=True)
class TransientCooldownPolicy:
    cooldown_seconds: float
    max_cooldowns: int
    transient_failure_threshold: int
    transient_failure_ratio: float

    @classmethod
    def from_mapping(
        cls,
        config: Any,
        *,
        default_cooldown_seconds: float,
        default_max_cooldowns: int,
        default_transient_failure_threshold: int,
        default_transient_failure_ratio: float,
    ) -> "TransientCooldownPolicy":
        mapping = config if isinstance(config, dict) else {}
        threshold = coerce_positive_int(
            mapping.get("transient_failure_threshold", default_transient_failure_threshold),
            default_transient_failure_threshold,
            minimum=1,
        )
        max_cooldowns = coerce_positive_int(
            mapping.get("max_cooldowns", default_max_cooldowns),
            default_max_cooldowns,
            minimum=0,
        )
        ratio_value = mapping.get("transient_failure_ratio", default_transient_failure_ratio)
        try:
            ratio = float(ratio_value)
        except (TypeError, ValueError):
            ratio = default_transient_failure_ratio
        return cls(
            cooldown_seconds=coerce_positive_float(
                mapping.get("cooldown_seconds", default_cooldown_seconds),
                default_cooldown_seconds,
                minimum=0.1,
            ),
            max_cooldowns=max_cooldowns,
            transient_failure_threshold=threshold,
            transient_failure_ratio=max(0.0, min(1.0, ratio)),
        )


@dataclass(frozen=True)
class TransientCooldownDecision:
    should_cooldown: bool
    exhausted: bool
    transient_count: int
    sample_size: int
    transient_ratio: float
    cooldowns_used: int


class TransientCooldownTracker:
    """Shared burst-cooldown state for rollcall answer submission loops."""

    def __init__(self, policy: TransientCooldownPolicy):
        self.policy = policy
        self.cooldowns_used = 0
        self._window: List[bool] = []

    def reset(self) -> None:
        self._window = []

    def record_attempt(self, transient: bool) -> TransientCooldownDecision:
        if not transient:
            self.reset()
            return self._decision(False, 0, 0, 0.0)
        self._window.append(True)
        threshold = self.policy.transient_failure_threshold
        if len(self._window) > threshold:
            self._window = self._window[-threshold:]
        transient_count = sum(1 for item in self._window if item)
        sample_size = len(self._window)
        transient_ratio = transient_count / max(sample_size, 1)
        should_cooldown = self._should_cooldown(transient_count, sample_size, transient_ratio)
        return self._decision(should_cooldown, transient_count, sample_size, transient_ratio)

    def record_batch(self, transient_count: int, sample_size: int) -> TransientCooldownDecision:
        transient_count = max(0, int(transient_count))
        sample_size = max(0, int(sample_size))
        if sample_size <= 0 or transient_count <= 0:
            self.reset()
            return self._decision(False, 0, sample_size, 0.0)
        transient_count = min(transient_count, sample_size)
        transient_ratio = transient_count / max(sample_size, 1)
        should_cooldown = self._should_cooldown(transient_count, sample_size, transient_ratio)
        return self._decision(should_cooldown, transient_count, sample_size, transient_ratio)

    def _should_cooldown(self, transient_count: int, sample_size: int, transient_ratio: float) -> bool:
        threshold = self.policy.transient_failure_threshold
        return transient_count >= threshold or (
            sample_size >= threshold and transient_ratio >= self.policy.transient_failure_ratio
        )

    def _decision(
        self,
        should_cooldown: bool,
        transient_count: int,
        sample_size: int,
        transient_ratio: float,
    ) -> TransientCooldownDecision:
        exhausted = False
        if should_cooldown:
            self.cooldowns_used += 1
            exhausted = self.cooldowns_used > self.policy.max_cooldowns
            self.reset()
        return TransientCooldownDecision(
            should_cooldown=should_cooldown,
            exhausted=exhausted,
            transient_count=transient_count,
            sample_size=sample_size,
            transient_ratio=transient_ratio,
            cooldowns_used=self.cooldowns_used,
        )


def normalize_text(value: Any) -> str:
    return str(value or "").strip()


def coerce_bool(value: Any, default: bool) -> bool:
    if isinstance(value, bool):
        return value
    if isinstance(value, (int, float)):
        return bool(value)
    if isinstance(value, str):
        normalized = value.strip().lower()
        if normalized in {"1", "true", "yes", "on", "enable", "enabled"}:
            return True
        if normalized in {"0", "false", "no", "off", "disable", "disabled"}:
            return False
    return default


def coerce_positive_float(value: Any, default: float, minimum: float = 0.1) -> float:
    try:
        numeric = float(value)
    except (TypeError, ValueError):
        return default
    return max(numeric, minimum)


def coerce_positive_int(value: Any, default: int, minimum: int = 1) -> int:
    try:
        numeric = int(value)
    except (TypeError, ValueError):
        return default
    return max(numeric, minimum)


def parse_time_value(value: Any) -> Optional[Any]:
    if isinstance(value, (int, float)) and float(value).is_integer():
        minutes = int(value)
        if 0 <= minutes < 24 * 60:
            return datetime.strptime("{:02d}:{:02d}".format(minutes // 60, minutes % 60), "%H:%M").time()

    text = normalize_text(value).replace("：", ":")
    if not text:
        return None

    try:
        return datetime.strptime(text, "%H:%M").time()
    except ValueError:
        return None


def format_time_value(value: Any) -> Optional[str]:
    parsed = parse_time_value(value)
    if parsed is None:
        return None
    return parsed.strftime("%H:%M")


def normalize_schedule_range(value: Any, default: Optional[List[str]] = None) -> List[str]:
    return normalize_schedule_ranges(value, [default or DEFAULT_OPERATING_RANGE])[0]


def _time_pair_from_values(start_value: Any, end_value: Any) -> Optional[List[str]]:
    start = format_time_value(start_value)
    end = format_time_value(end_value)
    if start is None or end is None:
        return None
    return [start, end]


def _normalize_one_schedule_range(value: Any) -> Optional[List[str]]:
    if isinstance(value, dict):
        return _time_pair_from_values(
            value.get("start", value.get("from", value.get("begin"))),
            value.get("end", value.get("to", value.get("until"))),
        )
    if isinstance(value, (list, tuple)) and len(value) == 2:
        return _time_pair_from_values(value[0], value[1])
    matches = TIME_RANGE_PATTERN.findall(normalize_text(value))
    if len(matches) >= 2:
        return _time_pair_from_values(matches[0], matches[1])
    return None


def normalize_schedule_ranges(value: Any, default: Optional[List[List[str]]] = None) -> List[List[str]]:
    fallback = [list(item) for item in (default or [DEFAULT_OPERATING_RANGE])]
    ranges: List[List[str]] = []

    if isinstance(value, dict) and isinstance(value.get("ranges"), (list, tuple)):
        value = value.get("ranges")

    if isinstance(value, (list, tuple)):
        if len(value) == 2 and _normalize_one_schedule_range(value) is not None:
            ranges.append(_normalize_one_schedule_range(value) or list(DEFAULT_OPERATING_RANGE))
        else:
            pending_plain_times: List[str] = []
            for item in value:
                parsed = _normalize_one_schedule_range(item)
                if parsed is not None:
                    ranges.append(parsed)
                    continue
                plain_time = format_time_value(item)
                if plain_time is not None:
                    pending_plain_times.append(plain_time)
                    if len(pending_plain_times) == 2:
                        ranges.append([pending_plain_times[0], pending_plain_times[1]])
                        pending_plain_times = []
                    continue
                matches = TIME_RANGE_PATTERN.findall(normalize_text(item))
                if len(matches) >= 2:
                    for index in range(0, len(matches) - 1, 2):
                        ranges.append([format_time_value(matches[index]) or "00:00", format_time_value(matches[index + 1]) or "00:00"])
    else:
        matches = TIME_RANGE_PATTERN.findall(normalize_text(value))
        if len(matches) >= 2:
            for index in range(0, len(matches) - 1, 2):
                parsed = _time_pair_from_values(matches[index], matches[index + 1])
                if parsed is not None:
                    ranges.append(parsed)
        else:
            parsed = _normalize_one_schedule_range(value)
            if parsed is not None:
                ranges.append(parsed)

    return ranges or fallback


def normalize_radar_boundary_points(
    value: Any,
    default_points: Optional[List[List[float]]] = None,
) -> List[List[float]]:
    fallback_points = default_points or [[lat, lon] for lat, lon in DEFAULT_BOUNDARY_POINTS]
    fallback_points = [[float(lat), float(lon)] for lat, lon in fallback_points]
    if not isinstance(value, (list, tuple)):
        return fallback_points

    normalized = []
    for item in value:
        try:
            if isinstance(item, dict):
                lat = float(item["lat"])
                lon = float(item.get("lon", item.get("lng")))
            else:
                lat = float(item[0])
                lon = float(item[1])
        except (TypeError, ValueError, KeyError, IndexError):
            return fallback_points
        normalized.append([lat, lon])

    if len(normalized) < 3:
        return fallback_points
    return normalized


def make_payload_excerpt(payload: Any, limit: int = 500) -> Optional[str]:
    if payload is None:
        return None
    if isinstance(payload, str):
        text = payload
    else:
        text = json.dumps(payload, ensure_ascii=False, default=str)
    if len(text) > limit:
        return text[:limit] + "...(truncated)"
    return text


def _iter_nested_values(payload: Any) -> List[Any]:
    values = [payload]
    if isinstance(payload, dict):
        for key in ("data", "result", "error", "errors", "scope", "rollcall"):
            if key in payload:
                values.extend(_iter_nested_values(payload[key]))
    elif isinstance(payload, list):
        for item in payload[:3]:
            values.extend(_iter_nested_values(item))
    return values


def _extract_radar_distance(payload: Any) -> float:
    for item in _iter_nested_values(payload):
        if not isinstance(item, dict):
            continue
        for key in ("distance", "scope_distance", "distance_meters", "distanceMeters"):
            if key not in item:
                continue
            try:
                return float(item[key])
            except (TypeError, ValueError):
                continue
    return -1.0


def _extract_radar_text(payload: Any, keys: Tuple[str, ...]) -> str:
    for item in _iter_nested_values(payload):
        if isinstance(item, dict):
            for key in keys:
                value = item.get(key)
                if isinstance(value, (dict, list, tuple)):
                    continue
                text = normalize_text(value)
                if text:
                    return text
        elif isinstance(item, str):
            text = normalize_text(item)
            if text:
                return text
    return ""


def _iter_radar_status_values(payload: Any) -> List[Any]:
    values: List[Any] = []
    pending: List[Any] = [payload]
    seen: set[int] = set()
    status_keys = {
        "status_name",
        "statusName",
        "status",
        "rollcall_status",
        "rollcallStatus",
        "student_rollcall_status",
        "studentRollcallStatus",
    }
    while pending:
        current = pending.pop()
        identity = id(current)
        if identity in seen:
            continue
        seen.add(identity)
        if isinstance(current, dict):
            for key, value in current.items():
                if key in status_keys and not isinstance(value, (dict, list, tuple)):
                    values.append(value)
                elif isinstance(value, (dict, list, tuple)):
                    pending.append(value)
        elif isinstance(current, (list, tuple)):
            pending.extend(current)
    return values


def _extract_radar_present_status(payload: Any) -> str:
    for value in _iter_radar_status_values(payload):
        status = normalize_text(value).lower()
        if status == "on_call_fine":
            return status
    return ""


def parse_radar_answer_result(status_code: int, body_text: str = "") -> RadarCoordinateResult:
    body = normalize_text(body_text)
    payload: Any = None
    if body:
        try:
            payload = json.loads(body)
        except ValueError:
            payload = body

    distance = _extract_radar_distance(payload)
    present_status = _extract_radar_present_status(payload)
    present_hint = bool(present_status)
    if status_code == 200:
        return RadarCoordinateResult(
            success=True,
            distance=0.0,
            present_hint=present_hint,
            present_status=present_status,
        )

    error_code = _extract_radar_text(
        payload,
        ("error_code", "errorCode", "code", "status", "message"),
    )
    message = _extract_radar_text(
        payload,
        ("message", "detail", "description", "error_description", "error"),
    )

    combined_text = " ".join(part for part in (error_code, message, body[:120]) if part)
    if "radar_out_of_rollcall_scope" in combined_text:
        error_code = "radar_out_of_rollcall_scope"
    elif status_code in (401, 403):
        message = message or error_code or "radar session expired"
        error_code = "radar_session_expired"
    elif status_code == 429:
        message = message or error_code or "radar rate limited"
        error_code = "radar_rate_limited"
    elif 500 <= status_code <= 599:
        message = message or error_code or "radar server error"
        error_code = "radar_server_error"
    elif not error_code:
        error_code = message or "radar_answer_failed"

    if error_code == "radar_out_of_rollcall_scope" and distance >= 0.0:
        return RadarCoordinateResult(
            success=False,
            distance=distance,
            error_code=error_code,
            message=message or error_code,
            present_hint=present_hint,
            present_status=present_status,
        )

    return RadarCoordinateResult(
        success=False,
        distance=distance,
        error_code=error_code,
        message=message,
        present_hint=present_hint,
        present_status=present_status,
    )


def build_radar_signal(
    beacon_nonce: Any,
    device_id: Any,
    user_id: Optional[int],
    timestamp: Optional[int] = None,
) -> str:
    timestamp_value = int(time.time() * 1000) if timestamp is None else int(timestamp)
    user_id_part = str(user_id) if user_id is not None else "undefined"
    raw_signal = f"{normalize_text(beacon_nonce)}{normalize_text(device_id)}{user_id_part}{timestamp_value}"
    digest = hashlib.md5(raw_signal.encode("utf-8")).hexdigest()
    return f"{digest},{timestamp_value}"


def render_big_digits(text: str) -> str:
    rows = [""] * len(BIG_DIGITS["0"])
    for char in normalize_text(text) or "?":
        glyph = BIG_DIGITS.get(char, BIG_DIGITS["?"])
        for index, part in enumerate(glyph):
            rows[index] += part + "  "
    return "\n".join(row.rstrip() for row in rows)


def format_found_code_banner(code: str) -> str:
    code_text = normalize_text(code) or "NA"
    big_code = render_big_digits(code_text)
    big_lines = big_code.splitlines() or [code_text]
    width = max(
        len("找到點名數字！"),
        len("Code: {}".format(code_text)),
        *(len(line) for line in big_lines),
    )
    border = "+" + "=" * (width + 2) + "+"
    lines = [border, "| {} |".format("找到點名數字！".center(width))]
    for line in big_lines:
        lines.append("| {} |".format(line.ljust(width)))
    lines.append("| {} |".format("Code: {}".format(code_text).center(width)))
    lines.append(border)
    return "\n".join(lines)


def build_number_progress_message(
    rollcall_id: int,
    request_count: int,
    latest_try_code: str,
    started_at: float,
) -> str:
    elapsed = time.perf_counter() - started_at
    return (
        "數字點名 #{}: 正在嘗試中... 已送出 {}/{}，最近代碼 {}，已用 {:.1f}s"
    ).format(
        rollcall_id,
        request_count,
        NUMBER_CODE_LIMIT,
        latest_try_code,
        elapsed,
    )


def parse_schedule_range(range_str: Any) -> Tuple[Any, Any]:
    fallback = normalize_schedule_range(range_str)
    return (
        datetime.strptime(fallback[0], "%H:%M").time(),
        datetime.strptime(fallback[1], "%H:%M").time(),
    )


def parse_schedule_ranges(range_value: Any) -> List[Tuple[Any, Any]]:
    return [
        (
            datetime.strptime(item[0], "%H:%M").time(),
            datetime.strptime(item[1], "%H:%M").time(),
        )
        for item in normalize_schedule_ranges(range_value)
    ]


def is_within_schedule(start: Any, end: Any, current_time: Any) -> bool:
    # Matching start/end means "always on"; start > end supports overnight ranges.
    if start == end:
        return True
    if start < end:
        return start <= current_time <= end
    return current_time >= start or current_time <= end


def is_within_any_schedule(ranges: Any, current_time: Any) -> bool:
    return any(is_within_schedule(start, end, current_time) for start, end in parse_schedule_ranges(ranges))

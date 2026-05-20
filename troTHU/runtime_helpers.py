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

    @property
    def has_distance(self) -> bool:
        return self.distance >= 0.0

    @property
    def is_scope_distance(self) -> bool:
        return self.error_code == "radar_out_of_rollcall_scope" and self.has_distance


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
    fallback = list(default or DEFAULT_OPERATING_RANGE)
    start_value: Any = None
    end_value: Any = None

    if isinstance(value, (list, tuple)) and len(value) == 2:
        start_value, end_value = value
    elif isinstance(value, dict):
        start_value = value.get("start", value.get("from", value.get("begin")))
        end_value = value.get("end", value.get("to", value.get("until")))
    else:
        matches = TIME_RANGE_PATTERN.findall(normalize_text(value))
        if len(matches) >= 2:
            start_value, end_value = matches[0], matches[1]

    start = format_time_value(start_value)
    end = format_time_value(end_value)
    if start is None or end is None:
        return fallback
    return [start, end]


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


def parse_radar_answer_result(status_code: int, body_text: str = "") -> RadarCoordinateResult:
    if status_code == 200:
        return RadarCoordinateResult(success=True, distance=0.0)

    body = normalize_text(body_text)
    payload: Any = None
    if body:
        try:
            payload = json.loads(body)
        except ValueError:
            payload = body

    distance = _extract_radar_distance(payload)
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
        )

    return RadarCoordinateResult(
        success=False,
        distance=distance,
        error_code=error_code,
        message=message,
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


def is_within_schedule(start: Any, end: Any, current_time: Any) -> bool:
    # Matching start/end means "always on"; start > end supports overnight ranges.
    if start == end:
        return True
    if start < end:
        return start <= current_time <= end
    return current_time >= start or current_time <= end

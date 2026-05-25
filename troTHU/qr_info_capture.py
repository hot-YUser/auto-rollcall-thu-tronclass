"""Full, unredacted QR rollcall information capture.

This is the explicit diagnostic-capture path for live QR rollcall research. It
records complete request/response metadata and bodies under ``log/`` so no
candidate clue is lost. The code only sends read-only GET requests; optional
browser capture observes the page/network traffic that the site itself emits.
"""

from __future__ import annotations

import asyncio
import base64
import hashlib
import json
import re
import time
from dataclasses import dataclass
from datetime import datetime, timedelta, timezone
from pathlib import Path
from typing import Any, Dict, Iterable, List, Mapping, Optional, Set, Tuple
from urllib.parse import quote, urlparse

try:  # pragma: no cover - package import path
    from troTHU.qr_rollcall import parse_qr_payload_with_diagnostics
    from troTHU.tron_http import DEFAULT_ENDPOINTS
except ImportError:  # pragma: no cover - direct script fallback
    from qr_rollcall import parse_qr_payload_with_diagnostics  # type: ignore
    from tron_http import DEFAULT_ENDPOINTS  # type: ignore


TAIPEI_TZ = timezone(timedelta(hours=8))
QR_DATA_PATTERN = re.compile(r"^(\d{10})([0-9a-fA-F]{32})$")
NUMBER_PREFIX = chr(16)
DISPLAY_NUMERIC_KEYS = {"0", "1", "4", "5", "9"}
FIELD_HINTS = (
    "data",
    "number_code",
    "qrcode_url",
    "qr_code",
    "qrcode",
    "rollcall_id",
    "rollcallId",
    "rollcallID",
    "course_id",
    "courseId",
    "create_time",
    "start_time",
    "end_time",
)


@dataclass(frozen=True)
class CaptureTarget:
    name: str
    url: str
    method: str = "GET"


@dataclass(frozen=True)
class QrInfoCaptureOptions:
    course_id: str = ""
    rollcall_id: str = ""
    duration_seconds: Optional[float] = 180.0
    interval_seconds: float = 3.0
    timeout_seconds: float = 15.0
    output: str = ""
    qr_file: str = ""
    initial_qr_text: str = ""
    anonymous_probe: bool = True
    browser: bool = False
    browser_headed: bool = False
    teacher_page_url: str = ""
    dom_interval_seconds: float = 5.0
    org_id: str = "1"


def _coerce_text(value: Any) -> str:
    if value in (None, ""):
        return ""
    return str(value).strip()


def _json_default(value: Any) -> str:
    return str(value)


def _utc_now() -> str:
    return datetime.now(timezone.utc).isoformat(timespec="milliseconds").replace("+00:00", "Z")


def _local_stamp() -> str:
    return datetime.now(TAIPEI_TZ).strftime("%Y%m%d_%H%M%S")


def _safe_name(value: str, limit: int = 96) -> str:
    text = re.sub(r"[^A-Za-z0-9_.-]+", "_", str(value or "").strip())
    text = text.strip("._")
    return (text or "item")[:limit]


def _sha256_text(value: str) -> str:
    return hashlib.sha256(str(value or "").encode("utf-8")).hexdigest()


def _sha256_bytes(value: bytes) -> str:
    return hashlib.sha256(value).hexdigest()


def _normalize_displayed_compact_payload(payload: str) -> str:
    parts = []
    changed = False
    for part in str(payload or "").split("!"):
        key, separator, value = part.partition("~")
        if not separator:
            parts.append(part)
            continue
        stripped = value.strip()
        if value != stripped:
            changed = True
        if key in DISPLAY_NUMERIC_KEYS and stripped and re.fullmatch(r"-?[0-9A-Za-z]+(?:\.[0-9A-Za-z]+)?", stripped):
            value = NUMBER_PREFIX + stripped
            changed = True
        else:
            value = stripped
        parts.append("{}~{}".format(key, value))
    return "!".join(parts) if changed else payload


def _normalize_displayed_compact_qr(raw: str) -> str:
    text = str(raw or "").strip()
    if "p=" not in text:
        return _normalize_displayed_compact_payload(text) if "~" in text and "!" in text else text
    prefix, separator, rest = text.partition("p=")
    payload, amp, suffix = rest.partition("&")
    normalized = _normalize_displayed_compact_payload(payload)
    if normalized == payload:
        return text
    return "{}{}{}{}{}".format(prefix, separator, normalized, amp, suffix)


def _body_extension(content_type: str, url: str = "") -> str:
    lowered = str(content_type or "").lower()
    if "json" in lowered:
        return ".json"
    if "html" in lowered:
        return ".html"
    if "javascript" in lowered or url.endswith(".js"):
        return ".js"
    if "css" in lowered or url.endswith(".css"):
        return ".css"
    if lowered.startswith("text/"):
        return ".txt"
    return ".bin"


def _decode_body(body: bytes, content_type: str = "", charset: str = "") -> Tuple[str, bool]:
    if not body:
        return "", True
    encoding = charset or "utf-8"
    try:
        return body.decode(encoding), True
    except (LookupError, UnicodeDecodeError):
        try:
            return body.decode("utf-8"), True
        except UnicodeDecodeError:
            return body.decode("utf-8", errors="replace"), False


def _base_url(endpoints: Any) -> str:
    return _coerce_text(getattr(endpoints, "base_url", "")) or _coerce_text(getattr(DEFAULT_ENDPOINTS, "base_url", ""))


def _rollcalls_url(endpoints: Any, base_url: str) -> str:
    return _coerce_text(getattr(endpoints, "rollcalls_url", "")) or "{}/api/radar/rollcalls?api_version=1.1.0".format(base_url.rstrip("/"))


def _teacher_url(base_url: str, course_id: str, rollcall_id: str, override: str = "") -> str:
    if override:
        return override
    if not base_url or not course_id or not rollcall_id:
        return ""
    return "{}/inclass/courses/{}?m=qr-rollcall/{}&s=&f=".format(
        base_url.rstrip("/"),
        quote(str(course_id), safe=""),
        quote(str(rollcall_id), safe=""),
    )


def _capture_root(base_dir: Any, output: str, *, course_id: str = "", rollcall_id: str = "") -> Path:
    if output:
        root = Path(output)
        if not root.is_absolute():
            root = Path(base_dir) / root
        return root.resolve()
    suffix = []
    if course_id:
        suffix.append("course_{}".format(_safe_name(course_id)))
    if rollcall_id:
        suffix.append("rollcall_{}".format(_safe_name(rollcall_id)))
    name = "qr_info_{}".format(_local_stamp())
    if suffix:
        name = "{}_{}".format(name, "_".join(suffix))
    return (Path(base_dir) / "log" / "rollcall_capture" / name).resolve()


def qr_info_capture_enabled(config: Any) -> bool:
    """QR info capture is on by default with the existing diagnostic capture."""
    if not isinstance(config, Mapping):
        return True
    section = config.get("capture")
    if not isinstance(section, Mapping):
        return True
    value = section.get("qr_info_capture", True)
    if isinstance(value, str):
        return value.strip().lower() not in ("0", "false", "no", "off")
    return bool(value)


def _config_bool(section: Mapping[str, Any], key: str, default: bool) -> bool:
    value = section.get(key, default)
    if isinstance(value, str):
        return value.strip().lower() not in ("0", "false", "no", "off")
    return bool(value)


def _config_float(section: Mapping[str, Any], key: str, default: float, *, minimum: float = 0.0, maximum: float = 600.0) -> float:
    try:
        value = float(section.get(key, default))
    except (TypeError, ValueError):
        value = default
    return max(minimum, min(maximum, value))


def _config_duration_seconds(section: Mapping[str, Any], key: str, default: float) -> Optional[float]:
    value = section.get(key, default)
    if isinstance(value, str):
        normalized = value.strip().lower()
        if normalized in ("always", "forever", "inf", "infinite", "unlimited"):
            return None
        if normalized in ("", "default"):
            value = default
    try:
        seconds = float(value)
    except (TypeError, ValueError):
        seconds = default
    if seconds < 0:
        return None
    return max(0.0, seconds)


def _rollcall_ids(rollcall: Any) -> Dict[str, str]:
    if not isinstance(rollcall, Mapping):
        return {"course_id": "", "rollcall_id": ""}
    return _extract_ids_from_mapping(rollcall)


def build_qr_info_capture_options_for_rollcall(
    rollcall: Any,
    *,
    config: Any = None,
) -> QrInfoCaptureOptions:
    """Build main-loop QR capture options from config.advanced.yaml.

    Defaults are intentionally non-blocking: one poll iteration, anonymous
    comparison on, browser capture off. Advanced users can lengthen the capture
    window with ``capture.qr_info_duration_seconds``. Set it to ``always`` or
    a negative number to keep polling until the monitor stops the QR capture.
    """
    section = config.get("capture") if isinstance(config, Mapping) else {}
    if not isinstance(section, Mapping):
        section = {}
    ids = _rollcall_ids(rollcall)
    return QrInfoCaptureOptions(
        course_id=ids["course_id"],
        rollcall_id=ids["rollcall_id"],
        duration_seconds=_config_duration_seconds(section, "qr_info_duration_seconds", 0.0),
        interval_seconds=_config_float(section, "qr_info_interval_seconds", 3.0, minimum=0.5, maximum=60.0),
        timeout_seconds=_config_float(section, "qr_info_timeout_seconds", 15.0, minimum=1.0, maximum=120.0),
        anonymous_probe=_config_bool(section, "qr_info_anonymous_probe", True),
        browser=_config_bool(section, "qr_info_browser_capture", False),
        browser_headed=_config_bool(section, "qr_info_browser_headed", False),
        teacher_page_url=_coerce_text(section.get("qr_info_teacher_page_url")),
        dom_interval_seconds=_config_float(section, "qr_info_dom_interval_seconds", 5.0, minimum=1.0, maximum=60.0),
        org_id=_coerce_text(section.get("org_id")) or "1",
    )


class QrCaptureWriter:
    def __init__(self, root: Path) -> None:
        self.root = root
        self.responses_dir = root / "responses"
        self.dom_dir = root / "dom"
        self.events_path = root / "events.jsonl"
        self.summary_path = root / "summary.json"
        self.root.mkdir(parents=True, exist_ok=True)
        self.responses_dir.mkdir(parents=True, exist_ok=True)
        self.dom_dir.mkdir(parents=True, exist_ok=True)
        self._body_counter = 0

    def write_event(self, kind: str, payload: Mapping[str, Any]) -> Dict[str, Any]:
        record = {"captured_at": _utc_now(), "event": kind, **dict(payload)}
        with self.events_path.open("a", encoding="utf-8") as file:
            json.dump(record, file, ensure_ascii=False, default=_json_default)
            file.write("\n")
        return record

    def save_response_body(
        self,
        *,
        name: str,
        auth_mode: str,
        url: str,
        content_type: str,
        body: bytes,
    ) -> str:
        self._body_counter += 1
        digest = _sha256_bytes(body)[:16]
        ext = _body_extension(content_type, url)
        file_name = "{:04d}_{}_{}_{}{}".format(
            self._body_counter,
            _safe_name(auth_mode, 20),
            _safe_name(name, 72),
            digest,
            ext,
        )
        path = self.responses_dir / file_name
        path.write_bytes(body)
        return str(path)

    def save_dom_snapshot(self, index: int, html_text: str) -> str:
        path = self.dom_dir / "dom_{:04d}.html".format(index)
        path.write_text(html_text, encoding="utf-8")
        return str(path)

    def write_summary(self, summary: Mapping[str, Any]) -> str:
        with self.summary_path.open("w", encoding="utf-8") as file:
            json.dump(dict(summary), file, ensure_ascii=False, indent=2, default=_json_default)
        return str(self.summary_path)


def analyze_qr_observation(raw: str, base_url: str = "") -> Dict[str, Any]:
    """Parse a raw QR string and keep the raw value verbatim."""
    text = str(raw or "").strip()
    result: Dict[str, Any] = {
        "raw": text,
        "raw_sha256": _sha256_text(text) if text else "",
        "ok": False,
    }
    parse_base = base_url or _coerce_text(getattr(DEFAULT_ENDPOINTS, "base_url", ""))
    parsed = parse_qr_payload_with_diagnostics(text, base_url=parse_base)
    parse_input_was_normalized = False
    normalized_text = _normalize_displayed_compact_qr(text)
    if normalized_text != text:
        reparsed = parse_qr_payload_with_diagnostics(normalized_text, base_url=parse_base)
        if reparsed.ok:
            parsed = reparsed
            parse_input_was_normalized = True
    result["diagnostic"] = parsed.diagnostic.to_dict()
    result["parse_input_was_normalized"] = parse_input_was_normalized
    if not parsed.ok or parsed.data is None:
        result["error"] = parsed.diagnostic.error
        return result

    fields = dict(parsed.data.fields)
    result.update(
        {
            "ok": True,
            "fields": fields,
            "extras": dict(parsed.data.extras),
            "course_id": _coerce_text(fields.get("courseId") or fields.get("course_id") or fields.get("courseID")),
            "rollcall_id": parsed.data.rollcall_id or "",
            "data": parsed.data.data or "",
        }
    )
    data_value = parsed.data.data or ""
    match = QR_DATA_PATTERN.match(data_value)
    if match:
        epoch = int(match.group(1))
        result["data_analysis"] = {
            "epoch_seconds": epoch,
            "timestamp_utc": datetime.fromtimestamp(epoch, timezone.utc).isoformat(timespec="seconds").replace("+00:00", "Z"),
            "timestamp_taipei": datetime.fromtimestamp(epoch, TAIPEI_TZ).isoformat(timespec="seconds"),
            "suffix_hex32": match.group(2),
        }
    return result


def _field_paths(value: Any, names: Iterable[str], prefix: str = "", limit: int = 200) -> List[str]:
    wanted = {str(name).lower() for name in names}
    found: List[str] = []
    if len(found) >= limit:
        return found
    if isinstance(value, Mapping):
        for key, item in value.items():
            path = "{}.{}".format(prefix, key) if prefix else str(key)
            if str(key).lower() in wanted and item not in (None, "", [], {}):
                found.append(path)
            found.extend(_field_paths(item, wanted, path, limit=limit))
            if len(found) >= limit:
                return found[:limit]
    elif isinstance(value, list):
        for index, item in enumerate(value[:100]):
            found.extend(_field_paths(item, wanted, "{}[{}]".format(prefix, index), limit=limit))
            if len(found) >= limit:
                return found[:limit]
    return found


def _looks_like_qr_rollcall(item: Mapping[str, Any]) -> bool:
    values = [item.get(key) for key in ("type", "rollcall_type", "attendance_type", "name")]
    if any("qr" in _coerce_text(value).lower() or "qrcode" in _coerce_text(value).lower() for value in values):
        return True
    if item.get("is_qrcode") is True or item.get("isQrCode") is True:
        return True
    if QR_DATA_PATTERN.match(_coerce_text(item.get("data"))):
        return True
    return False


def _extract_ids_from_mapping(item: Mapping[str, Any]) -> Dict[str, str]:
    rollcall_id = ""
    for key in ("rollcall_id", "rollcallId", "rollcallID", "id"):
        rollcall_id = _coerce_text(item.get(key))
        if rollcall_id:
            break
    course_id = ""
    for key in ("course_id", "courseId", "courseID", "course_no"):
        course_id = _coerce_text(item.get(key))
        if course_id:
            break
    course = item.get("course")
    if not course_id and isinstance(course, Mapping):
        course_id = _coerce_text(course.get("id") or course.get("course_id") or course.get("courseId"))
    return {"rollcall_id": rollcall_id, "course_id": course_id}


def discover_rollcall_ids(value: Any) -> List[Dict[str, str]]:
    discovered: List[Dict[str, str]] = []

    def visit(node: Any, depth: int = 0) -> None:
        if depth > 8 or len(discovered) >= 200:
            return
        if isinstance(node, Mapping):
            ids = _extract_ids_from_mapping(node)
            if ids["rollcall_id"] and (
                _looks_like_qr_rollcall(node)
                or any(key in node for key in ("rollcall_id", "rollcallId", "rollcallID"))
            ):
                entry = {
                    "rollcall_id": ids["rollcall_id"],
                    "course_id": ids["course_id"],
                    "qr_hint": "yes" if _looks_like_qr_rollcall(node) else "",
                }
                if entry not in discovered:
                    discovered.append(entry)
            for child in node.values():
                visit(child, depth + 1)
        elif isinstance(node, list):
            for child in node[:200]:
                visit(child, depth + 1)

    visit(value)
    return discovered


def _pick_discovered_id(discovered: List[Dict[str, str]], course_id: str = "") -> Dict[str, str]:
    if not discovered:
        return {"rollcall_id": "", "course_id": ""}
    preferred = [item for item in discovered if item.get("qr_hint")]
    candidates = preferred or discovered
    if course_id:
        for item in candidates:
            if not item.get("course_id") or item.get("course_id") == course_id:
                return item
    return candidates[0]


def build_qr_info_capture_targets(
    base_url: str,
    *,
    course_id: str = "",
    rollcall_id: str = "",
    user_id: str = "",
    rollcalls_url: str = "",
    teacher_page_url: str = "",
    org_id: str = "1",
    today: str = "",
) -> List[CaptureTarget]:
    base = _coerce_text(base_url).rstrip("/")
    if not base:
        return []
    today = today or datetime.now(TAIPEI_TZ).date().isoformat()
    targets: List[CaptureTarget] = [
        CaptureTarget("home", base),
        CaptureTarget("server_time", "{}/d/server-time".format(base)),
        CaptureTarget("version", "{}/d/version".format(base)),
        CaptureTarget("feature_toggles", "{}/api/feature-toggles".format(base)),
        CaptureTarget("org_settings", "{}/api/orgs/{}/org-settings".format(base, quote(_coerce_text(org_id) or "1", safe=""))),
        CaptureTarget("users_me", "{}/api/users/me".format(base)),
        CaptureTarget("active_rollcalls", rollcalls_url or "{}/api/radar/rollcalls?api_version=1.1.0".format(base)),
    ]
    if course_id:
        cid = quote(str(course_id), safe="")
        targets.extend(
            [
                CaptureTarget("course_detail", "{}/api/courses/{}".format(base, cid)),
                CaptureTarget("course_rollcalls", "{}/api/course/{}/rollcalls".format(base, cid)),
                CaptureTarget("course_students_rollcalls", "{}/api/course/{}/students_rollcalls".format(base, cid)),
                CaptureTarget("course_timetable_rollcalls", "{}/api/timetable_rollcalls?course_ids={}&rollcall_date={}".format(base, cid, quote(today, safe=""))),
            ]
        )
        if user_id:
            targets.append(
                CaptureTarget(
                    "course_student_rollcalls",
                    "{}/api/course/{}/student/{}/rollcalls?page=1&page_size=30".format(base, cid, quote(str(user_id), safe="")),
                )
            )
    if rollcall_id:
        rid = quote(str(rollcall_id), safe="")
        targets.extend(
            [
                CaptureTarget("rollcall_lite", "{}/api/rollcall/{}/lite".format(base, rid)),
                CaptureTarget("rollcall_student_rollcalls", "{}/api/rollcall/{}/student_rollcalls".format(base, rid)),
                CaptureTarget("rollcall_answers", "{}/api/rollcall/{}/answers".format(base, rid)),
                CaptureTarget("rollcall_detail", "{}/api/rollcall/{}".format(base, rid)),
                CaptureTarget("rollcall_status_result", "{}/api/courses/rollcall_status/{}/result".format(base, rid)),
            ]
        )
    teacher = _teacher_url(base, course_id, rollcall_id, teacher_page_url)
    if teacher:
        targets.append(CaptureTarget("teacher_qr_page", teacher))

    unique: List[CaptureTarget] = []
    seen: Set[Tuple[str, str]] = set()
    for target in targets:
        key = (target.method, target.url)
        if key not in seen:
            unique.append(target)
            seen.add(key)
    return unique


def _request_cookie_header(session: Any, url: str) -> str:
    try:
        try:
            from yarl import URL  # type: ignore

            cookie_url: Any = URL(url)
        except Exception:
            cookie_url = url
        cookies = session.cookie_jar.filter_cookies(cookie_url)
        return cookies.output(header="", sep="; ").strip()
    except Exception:
        return ""


async def _fetch_target(
    session: Any,
    writer: QrCaptureWriter,
    target: CaptureTarget,
    *,
    auth_mode: str,
    request_ssl: Any = None,
) -> Dict[str, Any]:
    record: Dict[str, Any] = {
        "auth_mode": auth_mode,
        "name": target.name,
        "method": target.method,
        "url": target.url,
    }
    kwargs: Dict[str, Any] = {"allow_redirects": True}
    if request_ssl is not None:
        kwargs["ssl"] = request_ssl
    try:
        async with session.request(target.method, target.url, **kwargs) as response:
            body = await response.read()
            charset = _coerce_text(getattr(response, "charset", "") or "")
            body_text, decoded_cleanly = _decode_body(body, _coerce_text(getattr(response, "content_type", "")), charset)
            content_type = _coerce_text(response.headers.get("Content-Type", "") if response.headers else "")
            body_file = writer.save_response_body(
                name=target.name,
                auth_mode=auth_mode,
                url=target.url,
                content_type=content_type,
                body=body,
            )
            parsed_json: Any = None
            json_error = ""
            if body_text and ("json" in content_type.lower() or body_text.lstrip().startswith(("{", "["))):
                try:
                    parsed_json = json.loads(body_text)
                except ValueError as exc:
                    json_error = "{}: {}".format(type(exc).__name__, exc)
            record.update(
                {
                    "status": int(response.status),
                    "reason": _coerce_text(getattr(response, "reason", "")),
                    "final_url": str(response.url),
                    "history": [
                        {
                            "status": int(item.status),
                            "url": str(item.url),
                            "headers": {str(k): str(v) for k, v in dict(item.headers).items()},
                        }
                        for item in getattr(response, "history", ())
                    ],
                    "request_headers": {str(k): str(v) for k, v in dict(response.request_info.headers).items()},
                    "request_cookie_header": _request_cookie_header(session, target.url),
                    "response_headers": {str(k): str(v) for k, v in dict(response.headers).items()},
                    "content_type": content_type,
                    "body_file": body_file,
                    "body_sha256": _sha256_bytes(body),
                    "body_length_bytes": len(body),
                    "body_text": body_text,
                    "body_text_decoded_cleanly": decoded_cleanly,
                    "body_base64": "" if decoded_cleanly else base64.b64encode(body).decode("ascii"),
                    "json": parsed_json,
                    "json_error": json_error,
                    "interesting_field_paths": _field_paths(parsed_json if parsed_json is not None else body_text, FIELD_HINTS),
                    "discovered_rollcalls": discover_rollcall_ids(parsed_json if parsed_json is not None else body_text),
                }
            )
    except Exception as exc:
        record.update({"error": "{}: {}".format(type(exc).__name__, exc)})
    writer.write_event("api_response", record)
    return record


def _qr_lines_from_file(path: str) -> List[str]:
    if not path:
        return []
    qr_path = Path(path)
    if not qr_path.exists():
        return []
    text = qr_path.read_text(encoding="utf-8", errors="replace")
    lines = [line.strip() for line in text.splitlines() if line.strip()]
    if not lines and text.strip():
        lines = [text.strip()]
    return lines


def _record_qr_observations(
    writer: QrCaptureWriter,
    raw_values: Iterable[str],
    *,
    base_url: str,
    seen_hashes: Set[str],
) -> List[Dict[str, Any]]:
    observations = []
    for raw in raw_values:
        text = str(raw or "").strip()
        if not text:
            continue
        digest = _sha256_text(text)
        if digest in seen_hashes:
            continue
        seen_hashes.add(digest)
        observation = analyze_qr_observation(text, base_url=base_url)
        writer.write_event("qr_observation", observation)
        observations.append(observation)
    return observations


def _update_state_from_observations(state: Dict[str, str], observations: Iterable[Mapping[str, Any]]) -> None:
    for item in observations:
        if not state.get("course_id") and item.get("course_id"):
            state["course_id"] = _coerce_text(item.get("course_id"))
        if not state.get("rollcall_id") and item.get("rollcall_id"):
            state["rollcall_id"] = _coerce_text(item.get("rollcall_id"))


def _update_state_from_responses(state: Dict[str, str], records: Iterable[Mapping[str, Any]]) -> List[Dict[str, str]]:
    all_discovered: List[Dict[str, str]] = []
    for record in records:
        for item in record.get("discovered_rollcalls") or []:
            if isinstance(item, Mapping) and item not in all_discovered:
                all_discovered.append(dict(item))
    picked = _pick_discovered_id(all_discovered, course_id=state.get("course_id", ""))
    if picked.get("course_id") and not state.get("course_id"):
        state["course_id"] = _coerce_text(picked.get("course_id"))
    if picked.get("rollcall_id") and not state.get("rollcall_id"):
        state["rollcall_id"] = _coerce_text(picked.get("rollcall_id"))
    return all_discovered


async def _capture_browser_page(
    writer: QrCaptureWriter,
    session: Any,
    *,
    base_url: str,
    state: Dict[str, str],
    options: QrInfoCaptureOptions,
    request_ssl: Any = None,
) -> Dict[str, Any]:
    try:
        from playwright.async_api import async_playwright  # type: ignore
    except Exception as exc:
        record = {"status": "unavailable", "error": "{}: {}".format(type(exc).__name__, exc)}
        writer.write_event("browser_capture", record)
        return record

    duration = options.duration_seconds
    deadline = None if duration is None else time.monotonic() + max(1.0, float(duration or 1.0))
    page_url = ""
    while deadline is None or time.monotonic() < deadline:
        page_url = _teacher_url(base_url, state.get("course_id", ""), state.get("rollcall_id", ""), options.teacher_page_url)
        if page_url:
            break
        await asyncio.sleep(0.5)
    if not page_url:
        record = {"status": "skipped", "reason": "missing_course_or_rollcall_id"}
        writer.write_event("browser_capture", record)
        return record

    tasks: List[Any] = []
    request_count = 0
    response_count = 0
    ws_frames = 0

    async def record_request(request: Any) -> None:
        nonlocal request_count
        try:
            headers = await request.all_headers()
        except Exception:
            headers = {}
        record = {
            "url": request.url,
            "method": request.method,
            "resource_type": request.resource_type,
            "headers": headers,
            "post_data": request.post_data,
        }
        request_count += 1
        writer.write_event("browser_request", record)

    async def record_response(response: Any) -> None:
        nonlocal response_count
        body = b""
        body_error = ""
        try:
            body = await response.body()
        except Exception as exc:
            body_error = "{}: {}".format(type(exc).__name__, exc)
        try:
            headers = await response.all_headers()
        except Exception:
            headers = {}
        content_type = _coerce_text(headers.get("content-type") or headers.get("Content-Type"))
        body_text, decoded_cleanly = _decode_body(body, content_type)
        body_file = ""
        if body or not body_error:
            body_file = writer.save_response_body(
                name="browser_response",
                auth_mode="browser",
                url=response.url,
                content_type=content_type,
                body=body,
            )
        record = {
            "url": response.url,
            "status": response.status,
            "headers": headers,
            "content_type": content_type,
            "body_file": body_file,
            "body_sha256": _sha256_bytes(body),
            "body_length_bytes": len(body),
            "body_text": body_text,
            "body_text_decoded_cleanly": decoded_cleanly,
            "body_base64": "" if decoded_cleanly else base64.b64encode(body).decode("ascii"),
            "body_error": body_error,
            "interesting_field_paths": _field_paths(body_text, FIELD_HINTS),
            "discovered_rollcalls": discover_rollcall_ids(body_text),
        }
        response_count += 1
        writer.write_event("browser_response", record)

    def schedule(coro: Any) -> None:
        tasks.append(asyncio.create_task(coro))

    browser = None
    context = None
    try:
        async with async_playwright() as playwright:
            browser = await playwright.chromium.launch(headless=not bool(options.browser_headed))
            user_agent = ""
            try:
                user_agent = _coerce_text(session._default_headers.get("User-Agent"))  # type: ignore[attr-defined]
            except Exception:
                user_agent = ""
            context_kwargs: Dict[str, Any] = {"ignore_https_errors": request_ssl is False}
            if user_agent:
                context_kwargs["user_agent"] = user_agent
            context = await browser.new_context(**context_kwargs)
            cookies = []
            parsed_base = urlparse(base_url)
            for cookie in getattr(session, "cookie_jar", []):
                name = _coerce_text(getattr(cookie, "key", ""))
                value = _coerce_text(getattr(cookie, "value", ""))
                if not name:
                    continue
                cookie_item: Dict[str, Any] = {
                    "name": name,
                    "value": value,
                    "path": _coerce_text(cookie.get("path")) or "/",
                }
                domain = _coerce_text(cookie.get("domain"))
                if domain:
                    cookie_item["domain"] = domain
                elif parsed_base.scheme and parsed_base.netloc:
                    cookie_item["url"] = "{}://{}".format(parsed_base.scheme, parsed_base.netloc)
                cookies.append(cookie_item)
            if cookies:
                await context.add_cookies(cookies)
            page = await context.new_page()
            page.on("request", lambda request: schedule(record_request(request)))
            page.on("response", lambda response: schedule(record_response(response)))

            def on_websocket(ws: Any) -> None:
                def frame(kind: str, payload: Any) -> None:
                    nonlocal ws_frames
                    ws_frames += 1
                    writer.write_event("browser_websocket_frame", {"url": ws.url, "direction": kind, "payload": payload})

                ws.on("framesent", lambda payload: frame("sent", payload))
                ws.on("framereceived", lambda payload: frame("received", payload))
                ws.on("close", lambda: writer.write_event("browser_websocket_close", {"url": ws.url}))

            page.on("websocket", on_websocket)
            writer.write_event("browser_capture", {"status": "started", "url": page_url})
            await page.goto(page_url, wait_until="domcontentloaded", timeout=max(5000, int(options.timeout_seconds * 1000)))
            dom_index = 0
            dom_interval = max(1.0, float(options.dom_interval_seconds or 5.0))
            while deadline is None or time.monotonic() < deadline:
                dom_index += 1
                try:
                    html_text = await page.content()
                    dom_file = writer.save_dom_snapshot(dom_index, html_text)
                    writer.write_event(
                        "browser_dom",
                        {
                            "url": page.url,
                            "dom_file": dom_file,
                            "html_text": html_text,
                            "interesting_field_paths": _field_paths(html_text, FIELD_HINTS),
                        },
                    )
                except Exception as exc:
                    writer.write_event("browser_dom", {"url": page.url, "error": "{}: {}".format(type(exc).__name__, exc)})
                await asyncio.sleep(dom_interval)
            if tasks:
                await asyncio.gather(*tasks, return_exceptions=True)
            await context.close()
            await browser.close()
            return {
                "status": "ok",
                "url": page_url,
                "request_count": request_count,
                "response_count": response_count,
                "ws_frames": ws_frames,
            }
    except Exception as exc:
        try:
            if context is not None:
                await context.close()
        except Exception:
            pass
        try:
            if browser is not None:
                await browser.close()
        except Exception:
            pass
        record = {"status": "error", "url": page_url, "error": "{}: {}".format(type(exc).__name__, exc)}
        writer.write_event("browser_capture", record)
        return record


async def run_qr_info_capture(
    session: Any,
    *,
    endpoints: Any,
    base_dir: Any,
    options: QrInfoCaptureOptions,
    request_ssl: Any = None,
    profile: str = "",
    provider: str = "",
    user_id: str = "",
    anonymous_session_factory: Any = None,
) -> Dict[str, Any]:
    base = _base_url(endpoints)
    state = {"course_id": _coerce_text(options.course_id), "rollcall_id": _coerce_text(options.rollcall_id)}
    initial_observations: List[Dict[str, Any]] = []
    if options.initial_qr_text:
        initial_observations = [analyze_qr_observation(options.initial_qr_text, base_url=base)]
        _update_state_from_observations(state, initial_observations)
    root = _capture_root(base_dir, options.output, course_id=state["course_id"], rollcall_id=state["rollcall_id"])
    writer = QrCaptureWriter(root)
    seen_qr_hashes: Set[str] = set()
    all_discovered: List[Dict[str, str]] = []
    response_count = 0
    anonymous_response_count = 0

    writer.write_event(
        "capture_start",
        {
            "profile": profile,
            "provider": provider,
            "base_url": base,
            "course_id": state["course_id"],
            "rollcall_id": state["rollcall_id"],
            "duration_seconds": options.duration_seconds,
            "duration_mode": "infinite" if options.duration_seconds is None else "bounded",
            "interval_seconds": options.interval_seconds,
            "anonymous_probe": bool(options.anonymous_probe),
            "browser": bool(options.browser),
            "qr_file": options.qr_file,
            "teacher_page_url": options.teacher_page_url,
            "unredacted": True,
        },
    )

    for observation in initial_observations:
        if observation.get("raw_sha256"):
            seen_qr_hashes.add(_coerce_text(observation.get("raw_sha256")))
        writer.write_event("qr_observation", observation)

    browser_task = None
    if options.browser:
        browser_task = asyncio.create_task(
            _capture_browser_page(writer, session, base_url=base, state=state, options=options, request_ssl=request_ssl)
        )

    anonymous_session = None
    if options.anonymous_probe:
        if anonymous_session_factory is not None:
            anonymous_session = anonymous_session_factory()
        else:
            try:
                import aiohttp  # type: ignore

                timeout = aiohttp.ClientTimeout(total=max(1.0, float(options.timeout_seconds or 15.0)))
                anonymous_session = aiohttp.ClientSession(cookie_jar=aiohttp.DummyCookieJar(), timeout=timeout)
            except Exception as exc:
                writer.write_event("anonymous_probe", {"status": "unavailable", "error": "{}: {}".format(type(exc).__name__, exc)})
                anonymous_session = None

    cancelled = False
    try:
        started = time.monotonic()
        duration = options.duration_seconds
        deadline = None if duration is None else started + max(0.0, float(duration or 0.0))
        iteration = 0
        while True:
            iteration += 1
            file_observations = _record_qr_observations(
                writer,
                _qr_lines_from_file(options.qr_file),
                base_url=base,
                seen_hashes=seen_qr_hashes,
            )
            _update_state_from_observations(state, file_observations)

            targets = build_qr_info_capture_targets(
                base,
                course_id=state["course_id"],
                rollcall_id=state["rollcall_id"],
                user_id=_coerce_text(user_id),
                rollcalls_url=_rollcalls_url(endpoints, base),
                teacher_page_url=options.teacher_page_url,
                org_id=options.org_id,
            )
            writer.write_event(
                "poll_iteration",
                {
                    "iteration": iteration,
                    "course_id": state["course_id"],
                    "rollcall_id": state["rollcall_id"],
                    "target_count": len(targets),
                    "targets": [target.__dict__ for target in targets],
                },
            )
            records: List[Mapping[str, Any]] = []
            for target in targets:
                record = await _fetch_target(session, writer, target, auth_mode="session", request_ssl=request_ssl)
                records.append(record)
                response_count += 1
                if anonymous_session is not None:
                    anon = await _fetch_target(anonymous_session, writer, target, auth_mode="anonymous", request_ssl=request_ssl)
                    records.append(anon)
                    anonymous_response_count += 1
            discovered = _update_state_from_responses(state, records)
            for item in discovered:
                if item not in all_discovered:
                    all_discovered.append(item)
            if discovered:
                writer.write_event("discovered_rollcalls", {"iteration": iteration, "items": discovered, "state": dict(state)})

            if deadline is not None and (time.monotonic() >= deadline or float(duration or 0.0) <= 0):
                break
            await asyncio.sleep(max(0.2, float(options.interval_seconds or 3.0)))
    except asyncio.CancelledError:
        cancelled = True
        writer.write_event(
            "capture_cancelled",
            {
                "profile": profile,
                "provider": provider,
                "course_id": state["course_id"],
                "rollcall_id": state["rollcall_id"],
                "response_count": response_count,
                "anonymous_response_count": anonymous_response_count,
            },
        )
        raise
    finally:
        if cancelled and browser_task is not None:
            browser_task.cancel()
            await asyncio.gather(browser_task, return_exceptions=True)
        if anonymous_session is not None and hasattr(anonymous_session, "close"):
            close_result = anonymous_session.close()
            if hasattr(close_result, "__await__"):
                await close_result

    browser_summary: Dict[str, Any] = {}
    if browser_task is not None:
        browser_summary = await browser_task

    summary = {
        "status": "ok",
        "profile": profile,
        "provider": provider,
        "output_dir": str(root),
        "events_path": str(writer.events_path),
        "summary_path": str(writer.summary_path),
        "responses_dir": str(writer.responses_dir),
        "dom_dir": str(writer.dom_dir),
        "course_id": state["course_id"],
        "rollcall_id": state["rollcall_id"],
        "duration_seconds": options.duration_seconds,
        "duration_mode": "infinite" if options.duration_seconds is None else "bounded",
        "response_count": response_count,
        "anonymous_response_count": anonymous_response_count,
        "qr_observation_count": len(seen_qr_hashes),
        "discovered_rollcalls": all_discovered,
        "browser": browser_summary,
        "unredacted": True,
    }
    writer.write_event("capture_end", summary)
    writer.write_summary(summary)
    return summary

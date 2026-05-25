"""Full, unredacted capture of every server response that might carry hidden
rollcall information (e.g. the QR `data` token).

This runs automatically inside the monitor loop the moment a rollcall is
detected. Unlike the sanitized research probe, this records the COMPLETE raw
server responses (status line, every header, full body text and parsed JSON)
so the breakthrough material is never hidden. Output lands under ``log/`` which
is gitignored, so raw captures stay local and are never committed.

The candidate endpoints were taken from the decompiled TronClass app
(``65655.js`` rollcall service / ``35580.js`` endpoint table). They are the
student-callable rollcall reads:

  rollcall-scoped (needs rollcall id):
    GET /api/rollcall/{id}/lite
    GET /api/rollcall/{id}/student_rollcalls
    GET /api/rollcall/{id}/answers
    GET /api/rollcall/{id}
    GET /api/courses/rollcall_status/{id}/result
  course-scoped (needs course id):
    GET /api/course/{course_id}/rollcalls
    GET /api/course/{course_id}/students_rollcalls
    GET /api/courses/{course_id}
"""

import json
from datetime import datetime
from pathlib import Path
from typing import Any, Dict, List, Mapping, Tuple
from urllib.parse import quote


# Field names worth flagging in the run summary. The raw body is always saved in
# full regardless of this list; this only drives a convenience "found here" hint.
INTERESTING_FIELDS = ("data", "number_code", "qrcode_url", "qr_code", "create_time")


def capture_enabled(config: Any) -> bool:
    """Full capture is ON by default so a bare `python -m troTHU.tron` records it.

    Disable with config.advanced.yaml: capture.rollcall_full_capture = false.
    """
    if not isinstance(config, Mapping):
        return True
    section = config.get("capture")
    if not isinstance(section, Mapping):
        return True
    value = section.get("rollcall_full_capture", True)
    if isinstance(value, str):
        return value.strip().lower() not in ("0", "false", "no", "off")
    return bool(value)


def _coerce_id(value: Any) -> str:
    if value in (None, ""):
        return ""
    return str(value).strip()


def extract_rollcall_ids(rollcall: Any) -> Tuple[str, str]:
    """Pull a rollcall id and course id out of a rollcall dict, tolerating the
    several key spellings TronClass uses across endpoints."""
    if not isinstance(rollcall, Mapping):
        return "", ""
    rollcall_id = ""
    for key in ("rollcall_id", "rollcallId", "id", "rollcallID"):
        rollcall_id = _coerce_id(rollcall.get(key))
        if rollcall_id:
            break
    course_id = ""
    for key in ("course_id", "courseId", "course_no", "courseID"):
        course_id = _coerce_id(rollcall.get(key))
        if course_id:
            break
    if not course_id and isinstance(rollcall.get("course"), Mapping):
        course_id = _coerce_id(rollcall["course"].get("id"))
    return rollcall_id, course_id


def build_capture_targets(base_url: str, rollcall_id: str, course_id: str) -> List[Tuple[str, str]]:
    base = str(base_url or "").rstrip("/")
    targets: List[Tuple[str, str]] = []
    if base and rollcall_id:
        rid = quote(rollcall_id, safe="")
        targets.extend(
            [
                ("lite", "{}/api/rollcall/{}/lite".format(base, rid)),
                ("student_rollcalls", "{}/api/rollcall/{}/student_rollcalls".format(base, rid)),
                ("answers", "{}/api/rollcall/{}/answers".format(base, rid)),
                ("rollcall_detail", "{}/api/rollcall/{}".format(base, rid)),
                ("rollcall_status_result", "{}/api/courses/rollcall_status/{}/result".format(base, rid)),
            ]
        )
    if base and course_id:
        cid = quote(course_id, safe="")
        targets.extend(
            [
                ("course_rollcalls", "{}/api/course/{}/rollcalls".format(base, cid)),
                ("course_students_rollcalls", "{}/api/course/{}/students_rollcalls".format(base, cid)),
                ("course_detail", "{}/api/courses/{}".format(base, cid)),
            ]
        )
    return targets


def _find_field_paths(value: Any, names: Tuple[str, ...], prefix: str = "") -> List[str]:
    """Return dotted paths where any of `names` appears as a dict key with a
    non-empty value. Presence only — used for the run summary, not redaction."""
    found: List[str] = []
    if isinstance(value, Mapping):
        for key, item in value.items():
            path = "{}.{}".format(prefix, key) if prefix else str(key)
            if str(key).lower() in names and item not in (None, "", [], {}):
                found.append(path)
            found.extend(_find_field_paths(item, names, path))
    elif isinstance(value, list):
        for index, item in enumerate(value[:50]):
            found.extend(_find_field_paths(item, names, "{}[{}]".format(prefix, index)))
    return found


async def _fetch_one(session: Any, name: str, url: str, request_ssl: Any) -> Dict[str, Any]:
    record: Dict[str, Any] = {"name": name, "method": "GET", "url": url}
    kwargs: Dict[str, Any] = {}
    if request_ssl is not None:
        kwargs["ssl"] = request_ssl
    try:
        async with session.get(url, **kwargs) as response:
            record["status"] = int(getattr(response, "status", 0) or 0)
            record["reason"] = str(getattr(response, "reason", "") or "")
            record["content_type"] = str(getattr(response, "content_type", "") or "")
            record["headers"] = {str(k): str(v) for k, v in dict(response.headers).items()}
            text = await response.text()
    except Exception as exc:  # network/SSL/timeout — record, never raise
        record["error"] = "{}: {}".format(type(exc).__name__, exc)
        return record

    record["body_text"] = text
    record["body_length"] = len(text)
    try:
        record["json"] = json.loads(text) if text else None
    except ValueError:
        record["json"] = None
        record["json_error"] = "invalid_json"
    payload_for_scan = record.get("json") if record.get("json") is not None else text
    record["interesting_field_paths"] = _find_field_paths(payload_for_scan, INTERESTING_FIELDS)
    return record


def _capture_dir(base_dir: Any) -> Path:
    return Path(base_dir) / "log" / "rollcall_capture"


async def capture_rollcall_full(
    session: Any,
    rollcall: Any,
    *,
    endpoints: Any,
    base_dir: Any,
    request_ssl: Any = None,
    profile: str = "",
    provider: str = "",
    trigger_status: str = "",
    source_payload: Any = None,
    config: Any = None,
) -> Dict[str, Any]:
    """Capture full raw responses from every candidate endpoint for one rollcall.

    Returns a small summary (output path + which endpoints exposed an interesting
    field). Never raises: any failure is captured into the summary instead.
    """
    summary: Dict[str, Any] = {"status": "skipped", "captures": 0, "endpoints_with_fields": []}
    try:
        if config is not None and not capture_enabled(config):
            summary["status"] = "disabled"
            return summary
        base_url = str(getattr(endpoints, "base_url", "") or "")
        rollcall_id, course_id = extract_rollcall_ids(rollcall)
        targets = build_capture_targets(base_url, rollcall_id, course_id)
        if not targets:
            summary["status"] = "no_targets"
            return summary

        captures: List[Dict[str, Any]] = []
        endpoints_with_fields: List[str] = []
        for name, url in targets:
            record = await _fetch_one(session, name, url, request_ssl)
            captures.append(record)
            if record.get("interesting_field_paths"):
                endpoints_with_fields.append(name)

        # If nothing produced an actual HTTP response (every request raised),
        # don't write an empty error-only file — there is no server message to log.
        if not any(isinstance(record.get("status"), int) and not record.get("error") for record in captures):
            summary["status"] = "no_response"
            summary["captures"] = len(captures)
            return summary

        document = {
            "timestamp": datetime.now().isoformat(timespec="seconds"),
            "provider": provider,
            "profile": profile,
            "trigger_status": trigger_status,
            "rollcall_id": rollcall_id,
            "course_id": course_id,
            "source_rollcall": rollcall if isinstance(rollcall, Mapping) else {},
            "source_rollcalls_payload": source_payload,
            "captures": captures,
        }

        out_dir = _capture_dir(base_dir)
        out_dir.mkdir(parents=True, exist_ok=True)
        stamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        safe_id = quote(rollcall_id or "unknown", safe="")
        out_path = out_dir / "{}_{}.json".format(stamp, safe_id)
        with out_path.open("w", encoding="utf-8") as file:
            json.dump(document, file, ensure_ascii=False, indent=2, default=str)

        summary["status"] = "ok"
        summary["captures"] = len(captures)
        summary["endpoints_with_fields"] = endpoints_with_fields
        summary["output_path"] = str(out_path)
        return summary
    except Exception as exc:  # pragma: no cover - defensive; capture must never break monitor
        summary["status"] = "error"
        summary["error"] = "{}: {}".format(type(exc).__name__, exc)
        return summary

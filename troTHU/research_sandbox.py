from __future__ import annotations
import importlib.util
import json
from dataclasses import dataclass
from datetime import datetime
from pathlib import Path
from typing import Any, Dict, List, Mapping, Optional
from urllib.parse import urlparse
from urllib.parse import quote

try:
    from troTHU.debug_capture import sanitize_debug_payload
    from troTHU.research_mode import normalize_research_mode_config
except ImportError:  # pragma: no cover - script execution fallback
    from debug_capture import sanitize_debug_payload
    from research_mode import normalize_research_mode_config


SAFE_API_TARGETS = ("home", "rollcalls", "current_semester", "semester", "courses", "all")
CAPTURE_TARGETS = ("home", "rollcalls", "current_semester", "courses")
TARGET_ALIASES = {"semester": "current_semester"}
BROWSER_TARGETS = ("login", "home")
RISKY_PROBE_TARGETS = ("student_rollcalls", "lite", "ongoing_rollcalls")
PROBE_TARGETS_NEED_ROLLCALL_ID = ("student_rollcalls", "lite")
# Field names whose presence in a probed response is worth flagging (presence
# only — the value itself is never recorded).
PROBE_FIELD_PRESENCE_CHECKS = ("data", "number_code")
DENIED_TARGET_PARTS = (
    "student_rollcalls",
    "answer_number_rollcall",
    "answer_qr_rollcall",
    "answer",
    "teacher",
    "admin",
    "number_code",
    "number-code",
    "code_lookup",
    "code-lookup",
)
RESEARCH_SENSITIVE_KEY_PARTS = (
    "authorization",
    "body",
    "cookie",
    "data",
    "answer",
    "number_code",
    "numbercode",
    "passwd",
    "password",
    "payload",
    "raw",
    "response",
    "secret",
    "session",
    "token",
)


class ResearchGateError(Exception):
    def __init__(self, status: str, message: str) -> None:
        super().__init__(message)
        self.status = status

    def to_dict(self) -> Dict[str, str]:
        return {"status": self.status, "message": str(self)}


class ResearchCaptureError(Exception):
    def __init__(self, status: str, message: str) -> None:
        super().__init__(message)
        self.status = status

    def to_dict(self) -> Dict[str, str]:
        return {"status": self.status, "message": str(self)}


@dataclass(frozen=True)
class _HttpCapture:
    status: str
    target: str
    url_kind: str
    http_status: int
    content_summary: Dict[str, Any]
    error: str = ""

    def to_dict(self) -> Dict[str, Any]:
        return sanitize_research_value(
            {
                "status": self.status,
                "target": self.target,
                "url_kind": self.url_kind,
                "http_status": self.http_status,
                "content_summary": self.content_summary,
                "error": self.error,
            }
        )


def sanitize_research_value(value: Any) -> Any:
    if isinstance(value, Mapping):
        sanitized: Dict[str, Any] = {}
        for key, item in value.items():
            key_text = str(key)
            if any(part in key_text.lower() for part in RESEARCH_SENSITIVE_KEY_PARTS):
                sanitized[key_text] = "[redacted]"
            else:
                sanitized[key_text] = sanitize_research_value(item)
        return sanitize_debug_payload(sanitized)
    if isinstance(value, list):
        return [sanitize_research_value(item) for item in value]
    if isinstance(value, tuple):
        return [sanitize_research_value(item) for item in value]
    if isinstance(value, str):
        lowered = value.lower()
        if any(part in lowered for part in ("password=", "cookie:", "bearer ", "session=", "token=")):
            return "[redacted]"
        if len(value) > 300:
            return "{}...[truncated {} chars]".format(value[:120], len(value))
    return value


def build_research_status(config: Mapping[str, Any], *, provider: Any = None) -> Dict[str, Any]:
    research = normalize_research_mode_config(config.get("research", {}))
    return sanitize_research_value(
        {
            "status": "enabled" if research.get("enabled") else "disabled",
            "research": research,
            "provider": provider if isinstance(provider, Mapping) else {},
            "api_targets": list_research_api_targets(),
            "risky_probe_targets": RISKY_PROBE_TARGETS,
            "browser_targets": BROWSER_TARGETS,
            "denied_patterns": DENIED_TARGET_PARTS,
            "safety": {
                "read_only": True,
                "raw_payloads_written": False,
                "daily_runtime_import": False,
            },
        }
    )


def ensure_research_allowed(config: Mapping[str, Any], capability: str) -> Dict[str, Any]:
    research = normalize_research_mode_config(config.get("research", {}))
    if not research.get("enabled"):
        raise ResearchGateError("research_disabled", "research.enabled must be true.")
    if capability == "api" and not research.get("allow_api_exploration"):
        raise ResearchGateError(
            "api_exploration_disabled",
            "research.allow_api_exploration must be true.",
        )
    if capability == "browser" and not research.get("allow_browser_capture"):
        raise ResearchGateError(
            "browser_capture_disabled",
            "research.allow_browser_capture must be true.",
        )
    if capability == "risky_probe":
        if not research.get("allow_api_exploration"):
            raise ResearchGateError(
                "api_exploration_disabled",
                "research.allow_api_exploration must be true.",
            )
        if not research.get("allow_risky_probe"):
            raise ResearchGateError(
                "risky_probe_disabled",
                "research.allow_risky_probe must be true.",
            )
    return research


def list_research_api_targets() -> tuple[str, ...]:
    return SAFE_API_TARGETS


def list_research_probe_targets() -> tuple[str, ...]:
    return RISKY_PROBE_TARGETS


def validate_research_target(target: Any) -> str:
    text = str(target or "").strip().lower().replace("-", "_")
    if not text:
        text = "all"
    if any(part in text for part in DENIED_TARGET_PARTS):
        raise ResearchCaptureError("target_denied", "Target is not allowed for research capture.")
    text = TARGET_ALIASES.get(text, text)
    if text not in SAFE_API_TARGETS:
        raise ResearchCaptureError("target_not_allowed", "Unknown research target.")
    return text


def _target_url(endpoints: Any, target: str) -> str:
    if target == "home":
        return str(getattr(endpoints, "base_url", "") or "")
    if target == "rollcalls":
        return str(getattr(endpoints, "rollcalls_url", "") or "")
    if target == "current_semester":
        return str(getattr(endpoints, "current_semester_url", "") or "")
    if target == "courses":
        return str(getattr(endpoints, "courses_url", "") or "")
    raise ResearchCaptureError("target_not_allowed", "Unknown research target.")


def _url_kind(url: str) -> str:
    parsed = urlparse(str(url or ""))
    path = parsed.path or "/"
    if "rollcalls" in path:
        return "rollcalls"
    if "current-semester" in path:
        return "current_semester"
    if "my-courses" in path:
        return "courses"
    if "login" in path:
        return "login"
    return "home"


def _status_from_http(status_code: int, *, invalid_json: bool = False) -> str:
    if status_code in {401, 403}:
        return "unauthorized"
    if status_code == 429:
        return "rate_limited"
    if status_code >= 500:
        return "server_error"
    if status_code < 200 or status_code >= 300:
        return "unexpected_status"
    if invalid_json:
        return "invalid_json"
    return "ok"


def _json_summary(payload: Any) -> Dict[str, Any]:
    if isinstance(payload, Mapping):
        summary: Dict[str, Any] = {
            "shape": "object",
            "field_names": sorted(str(key) for key in payload.keys()),
        }
        for list_key in ("rollcalls", "courses", "data"):
            item = payload.get(list_key)
            if isinstance(item, list):
                summary["{}_count".format(list_key)] = len(item)
        return summary
    if isinstance(payload, list):
        return {"shape": "list", "item_count": len(payload)}
    return {"shape": type(payload).__name__}


def _json_shape_summary(payload: Any) -> Dict[str, Any]:
    if isinstance(payload, Mapping):
        summary: Dict[str, Any] = {
            "shape": "object",
            "field_names": sorted(str(key) for key in payload.keys()),
        }
        list_summaries = {}
        for key, item in payload.items():
            if isinstance(item, list):
                list_summaries[str(key)] = _json_shape_summary(item)
        if list_summaries:
            summary["list_fields"] = list_summaries
        return summary
    if isinstance(payload, list):
        item_field_names = set()
        for item in payload[:5]:
            if isinstance(item, Mapping):
                item_field_names.update(str(key) for key in item.keys())
        return {
            "shape": "list",
            "item_count": len(payload),
            "item_field_names": sorted(item_field_names),
        }
    return {"shape": type(payload).__name__}


def _shape_field_present(summary: Any, name: str) -> bool:
    """Detect whether a shape summary exposes a field by name (presence only).

    Operates on the un-sanitized shape summary so it can see field names that
    sanitize_research_value would later redact. Only a boolean is returned, so
    the field's value is never recorded.
    """
    if not isinstance(summary, Mapping):
        return False
    target = name.lower()
    for key in ("field_names", "item_field_names"):
        names = summary.get(key)
        if isinstance(names, list) and any(str(item).lower() == target for item in names):
            return True
    list_fields = summary.get("list_fields")
    if isinstance(list_fields, Mapping):
        for key, sub in list_fields.items():
            if str(key).lower() == target:
                return True
            if _shape_field_present(sub, name):
                return True
    return False


def validate_probe_target(target: Any) -> str:
    text = str(target or "").strip().lower().replace("-", "_")
    if not text:
        text = "student_rollcalls"
    if text not in RISKY_PROBE_TARGETS:
        raise ResearchCaptureError("probe_target_not_allowed", "Unknown probe target.")
    return text


def _rollcall_probe_url(endpoints: Any, target: str, rollcall_id: Any) -> str:
    base_url = str(getattr(endpoints, "base_url", "") or "").rstrip("/")
    if not base_url:
        raise ResearchCaptureError("probe_target_incomplete", "base URL is required.")
    if target == "ongoing_rollcalls":
        rollcalls_url = str(getattr(endpoints, "rollcalls_url", "") or "")
        if not rollcalls_url:
            raise ResearchCaptureError("probe_target_incomplete", "rollcalls URL is required.")
        return rollcalls_url
    safe_rollcall_id = quote(str(rollcall_id or "").strip(), safe="")
    if not safe_rollcall_id:
        raise ResearchCaptureError("probe_target_incomplete", "base URL and rollcall id are required.")
    if target == "student_rollcalls":
        return "{}/api/rollcall/{}/student_rollcalls".format(base_url, safe_rollcall_id)
    if target == "lite":
        return "{}/api/rollcall/{}/lite".format(base_url, safe_rollcall_id)
    raise ResearchCaptureError("probe_target_not_allowed", "Unknown probe target.")


def _student_rollcalls_probe_url(endpoints: Any, rollcall_id: Any) -> str:
    return _rollcall_probe_url(endpoints, "student_rollcalls", rollcall_id)


async def _capture_one(session: Any, target: str, *, endpoints: Any, request_ssl: Any = None) -> Dict[str, Any]:
    url = _target_url(endpoints, target)
    kwargs = {}
    if request_ssl is not None:
        kwargs["ssl"] = request_ssl
    async with session.get(url, **kwargs) as response:
        status_code = int(getattr(response, "status", 0) or 0)
        content_type = str(getattr(response, "content_type", "") or "")
        text = await response.text()

    if target == "home":
        return _HttpCapture(
            status=_status_from_http(status_code),
            target=target,
            url_kind=_url_kind(url),
            http_status=status_code,
            content_summary={
                "shape": "html_or_text",
                "content_type": content_type,
                "content_length": len(text),
                "app_runtime_present": "window.APPRuntime" in text,
            },
        ).to_dict()

    payload: Any = None
    invalid_json = False
    try:
        payload = json.loads(text or "{}")
    except ValueError:
        invalid_json = True

    return _HttpCapture(
        status=_status_from_http(status_code, invalid_json=invalid_json),
        target=target,
        url_kind=_url_kind(url),
        http_status=status_code,
        content_summary={"shape": "invalid_json", "content_length": len(text)}
        if invalid_json
        else _json_summary(payload),
    ).to_dict()


async def capture_research_api_target(
    session: Any,
    target: Any,
    *,
    endpoints: Any,
    config: Mapping[str, Any],
    request_ssl: Any = None,
) -> Dict[str, Any]:
    ensure_research_allowed(config, "api")
    normalized = validate_research_target(target)
    targets = CAPTURE_TARGETS if normalized == "all" else (normalized,)
    records: List[Dict[str, Any]] = []
    warnings: List[str] = []
    for item in targets:
        try:
            records.append(await _capture_one(session, item, endpoints=endpoints, request_ssl=request_ssl))
        except Exception as exc:
            records.append(
                sanitize_research_value(
                    {
                        "status": "capture_error",
                        "target": item,
                        "url_kind": item,
                        "http_status": 0,
                        "content_summary": {"shape": "unavailable"},
                        "error": "{}: {}".format(type(exc).__name__, exc),
                    }
                )
            )
            warnings.append("capture_error:{}".format(item))
    status = "ok"
    if any(record.get("status") != "ok" for record in records):
        status = "partial" if any(record.get("status") == "ok" for record in records) else "failed"
    return sanitize_research_value(
        {
            "status": status,
            "target": normalized,
            "records": records,
            "warnings": warnings,
        }
    )


async def capture_rollcall_probe(
    session: Any,
    target: Any,
    rollcall_id: Any = "",
    *,
    endpoints: Any,
    config: Mapping[str, Any],
    request_ssl: Any = None,
) -> Dict[str, Any]:
    ensure_research_allowed(config, "risky_probe")
    normalized = validate_probe_target(target)
    if normalized in PROBE_TARGETS_NEED_ROLLCALL_ID and not str(rollcall_id or "").strip():
        raise ResearchCaptureError("probe_target_incomplete", "rollcall id is required for this probe target.")
    url = _rollcall_probe_url(endpoints, normalized, rollcall_id)
    kwargs = {}
    if request_ssl is not None:
        kwargs["ssl"] = request_ssl
    async with session.get(url, **kwargs) as response:
        status_code = int(getattr(response, "status", 0) or 0)
        content_type = str(getattr(response, "content_type", "") or "")
        text = await response.text()

    payload: Any = None
    invalid_json = False
    if text:
        try:
            payload = json.loads(text)
        except ValueError:
            invalid_json = True

    content_summary = {"shape": "invalid_json", "content_type": content_type, "content_length": len(text)}
    present_field_names: List[str] = []
    if not invalid_json:
        content_summary = _json_shape_summary(payload)
        content_summary["content_type"] = content_type
        # Presence is computed before sanitization, so a field named e.g. "data"
        # is still detectable even though its value is never recorded. Reported as
        # a list (not sensitive keys) so sanitize_research_value keeps the names.
        present_field_names = [
            name for name in PROBE_FIELD_PRESENCE_CHECKS if _shape_field_present(content_summary, name)
        ]

    report = {
        "status": _status_from_http(status_code, invalid_json=invalid_json),
        "target": normalized,
        "probe_only": True,
        "read_only": True,
        "daily_runtime_import": False,
        "rollcall_id": str(rollcall_id or ""),
        "url_kind": normalized,
        "http_status": status_code,
        "content_summary": content_summary,
        "present_field_names": present_field_names,
        "warnings": ["probe_only_no_answer_values_recorded"],
    }
    return sanitize_research_value(report)


async def capture_student_rollcalls_probe(
    session: Any,
    rollcall_id: Any,
    *,
    endpoints: Any,
    config: Mapping[str, Any],
    request_ssl: Any = None,
) -> Dict[str, Any]:
    return await capture_rollcall_probe(
        session,
        "student_rollcalls",
        rollcall_id,
        endpoints=endpoints,
        config=config,
        request_ssl=request_ssl,
    )


def append_research_capture(path: Path, record: Mapping[str, Any]) -> Path:
    output = Path(path)
    output.parent.mkdir(parents=True, exist_ok=True)
    payload = {
        "timestamp": datetime.now().isoformat(timespec="seconds"),
        "event": "research_capture",
        "record": sanitize_research_value(dict(record)),
    }
    with output.open("a", encoding="utf-8") as file:
        file.write(json.dumps(payload, ensure_ascii=False, default=str))
        file.write("\n")
    return output


def _playwright_available() -> bool:
    try:
        return importlib.util.find_spec("playwright.async_api") is not None
    except (ImportError, AttributeError, ValueError):
        return False


def build_browser_capture_metadata(
    target: Any = "home",
    *,
    provider: Any = None,
    endpoints: Any = None,
    available: Optional[bool] = None,
) -> Dict[str, Any]:
    target_text = str(target or "home").strip().lower()
    if target_text not in BROWSER_TARGETS:
        target_text = "home"
    is_available = _playwright_available() if available is None else bool(available)
    endpoint_summary = {}
    if endpoints is not None:
        endpoint_summary = {
            "base_url_configured": bool(getattr(endpoints, "base_url", "")),
            "login_url_configured": bool(getattr(endpoints, "login_url", "")),
        }
    return sanitize_research_value(
        {
            "status": "available" if is_available else "unavailable",
            "target": target_text,
            "playwright_available": is_available,
            "provider": provider if isinstance(provider, Mapping) else {},
            "endpoints": endpoint_summary,
            "capture_mode": "metadata_only",
            "safety": {
                "enters_credentials": False,
                "submits_login": False,
                "stores_headers": False,
                "stores_body": False,
                "stores_cookies": False,
            },
            "records": [],
            "warnings": [] if is_available else ["playwright_not_installed"],
        }
    )


async def capture_browser_target_metadata(
    target: Any = "home",
    *,
    endpoints: Any,
    provider: Any = None,
    timeout_ms: int = 15000,
) -> Dict[str, Any]:
    metadata = build_browser_capture_metadata(target, provider=provider, endpoints=endpoints)
    if not metadata.get("playwright_available"):
        return metadata

    try:
        from playwright.async_api import async_playwright  # type: ignore
    except Exception:
        metadata["status"] = "unavailable"
        metadata["warnings"] = ["playwright_import_failed"]
        return sanitize_research_value(metadata)

    target_text = metadata["target"]
    url = getattr(endpoints, "login_url", "") if target_text == "login" else getattr(endpoints, "base_url", "")
    records: List[Dict[str, Any]] = []
    try:
        async with async_playwright() as playwright:
            browser = await playwright.chromium.launch(headless=True)
            page = await browser.new_page()

            def on_request(request: Any) -> None:
                if len(records) < 50:
                    records.append(
                        {
                            "event": "request",
                            "method": str(getattr(request, "method", "")),
                            "resource_type": str(getattr(request, "resource_type", "")),
                            "url_kind": _url_kind(str(getattr(request, "url", ""))),
                        }
                    )

            def on_response(response: Any) -> None:
                if len(records) < 50:
                    records.append(
                        {
                            "event": "response",
                            "status": int(getattr(response, "status", 0) or 0),
                            "url_kind": _url_kind(str(getattr(response, "url", ""))),
                        }
                    )

            page.on("request", on_request)
            page.on("response", on_response)
            await page.goto(str(url), wait_until="domcontentloaded", timeout=timeout_ms)
            await browser.close()
        metadata["status"] = "ok"
        metadata["records"] = records
        metadata["warnings"] = []
    except Exception as exc:
        metadata["status"] = "failed"
        metadata["warnings"] = ["browser_capture_failed"]
        metadata["error"] = "{}: {}".format(type(exc).__name__, exc)
    return sanitize_research_value(metadata)

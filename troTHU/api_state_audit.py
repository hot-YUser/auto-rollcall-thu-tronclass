"""State-change triggered full API audit capture.

This module is intentionally unredacted. It records complete request/response
metadata, raw bodies, decoded text, parsed JSON copies, and fetched frontend
assets under ``log/api_state_audit`` for authorized local testing.
"""

from __future__ import annotations

import base64
import hashlib
import html
import json
import re
from dataclasses import dataclass, replace
from datetime import datetime
from pathlib import Path
from typing import Any, Dict, Iterable, List, Mapping, Optional, Tuple
from urllib.parse import quote, unquote, urljoin, urlparse

from yarl import URL


DEFAULT_API_LIST_PATH = "抓取測試API端口列表.json"
DEFAULT_AUDIT_CONFIG: Dict[str, Any] = {
    "enabled": False,
    "api_list_path": DEFAULT_API_LIST_PATH,
    "request_all_methods": True,
    "asset_follow": "all",
    "timeout_seconds": 20.0,
    "max_asset_depth": 2,
    "max_asset_count": 500,
}

BODY_TEXT_INLINE_LIMIT = 2_000_000
API_METHODS = {"GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS"}
MUTATING_METHODS = {"POST", "PUT", "PATCH"}
ASSET_ATTR_PATTERN = re.compile(
    r"""<(?:script|link|img|source|iframe|embed|object)\b[^>]*(?:src|href|data)\s*=\s*(['"])(.*?)\1""",
    re.IGNORECASE | re.DOTALL,
)
CSS_URL_PATTERN = re.compile(r"""url\(\s*(['"]?)(.*?)\1\s*\)""", re.IGNORECASE | re.DOTALL)
CSS_IMPORT_PATTERN = re.compile(r"""@import\s+(?:url\(\s*)?(['"])(.*?)\1""", re.IGNORECASE | re.DOTALL)
JS_IMPORT_PATTERN = re.compile(
    r"""(?:import\s+(?:[^'"]+\s+from\s+)?|import\s*\(|new\s+URL\s*\()\s*(['"])([^'"]+)\1""",
    re.IGNORECASE | re.DOTALL,
)
PLACEHOLDER_PATTERN = re.compile(r"\{(?:expr|id)\}")


@dataclass(frozen=True)
class ApiStateAuditOptions:
    enabled: bool = False
    api_list_path: str = DEFAULT_API_LIST_PATH
    request_all_methods: bool = True
    asset_follow: str = "all"
    timeout_seconds: float = 20.0
    max_asset_depth: int = 2
    max_asset_count: int = 500
    identity_base_url: str = ""
    realm: str = "thu"
    wechat_appid: str = "0"


@dataclass(frozen=True)
class ResolvedOperation:
    index: int
    row: Dict[str, Any]
    original_method: str
    method: str
    endpoint: str
    host: str
    url: str
    replacements: List[Dict[str, Any]]
    unresolved_reason: str = ""


class ApiStateAuditWriter:
    def __init__(self, root: Path) -> None:
        self.root = root
        self.operations_dir = root / "operations"
        self.bodies_dir = root / "bodies"
        self.assets_dir = root / "assets"
        self.events_path = root / "events.jsonl"
        self.summary_path = root / "summary.json"
        self.root.mkdir(parents=True, exist_ok=True)
        self.operations_dir.mkdir(parents=True, exist_ok=True)
        self.bodies_dir.mkdir(parents=True, exist_ok=True)
        self.assets_dir.mkdir(parents=True, exist_ok=True)

    def write_event(self, event: str, payload: Mapping[str, Any]) -> None:
        record = {"captured_at": _now_iso(), "event": event, **dict(payload)}
        with self.events_path.open("a", encoding="utf-8") as file:
            file.write(json.dumps(record, ensure_ascii=False, default=str))
            file.write("\n")

    def save_body(self, *, kind: str, index: int, label: str, url: str, content_type: str, body: bytes) -> str:
        digest = _sha256_bytes(body)[:16]
        ext = _body_extension(content_type, url)
        name = "{:04d}_{}_{}{}".format(index, _safe_name(label, 72), digest, ext)
        directory = self.assets_dir if kind == "asset" else self.bodies_dir
        path = directory / name
        path.write_bytes(body)
        return str(path)

    def write_operation(self, index: int, label: str, record: Mapping[str, Any]) -> str:
        path = self.operations_dir / "{:04d}_{}.json".format(index, _safe_name(label, 80))
        with path.open("w", encoding="utf-8") as file:
            json.dump(dict(record), file, ensure_ascii=False, indent=2, default=str)
        return str(path)

    def write_summary(self, summary: Mapping[str, Any]) -> str:
        with self.summary_path.open("w", encoding="utf-8") as file:
            json.dump(dict(summary), file, ensure_ascii=False, indent=2, default=str)
        return str(self.summary_path)


def _now_iso() -> str:
    return datetime.now().isoformat(timespec="seconds")


def _local_stamp() -> str:
    return datetime.now().strftime("%Y%m%d_%H%M%S")


def _safe_name(value: Any, limit: int = 96) -> str:
    text = re.sub(r"[^A-Za-z0-9_.-]+", "_", str(value or "").strip())
    text = text.strip("._")
    return (text or "item")[:limit]


def _sha256_bytes(value: bytes) -> str:
    return hashlib.sha256(value).hexdigest()


def _coerce_text(value: Any) -> str:
    if value in (None, ""):
        return ""
    return str(value).strip()


def _coerce_bool(value: Any, default: bool) -> bool:
    if value is None:
        return default
    if isinstance(value, str):
        normalized = value.strip().lower()
        if normalized in {"1", "true", "yes", "on"}:
            return True
        if normalized in {"0", "false", "no", "off"}:
            return False
        return default
    return bool(value)


def _coerce_int(value: Any, default: int, *, minimum: int = 0, maximum: int = 10000) -> int:
    try:
        number = int(value)
    except (TypeError, ValueError):
        number = default
    return max(minimum, min(maximum, number))


def _coerce_float(value: Any, default: float, *, minimum: float = 0.1, maximum: float = 600.0) -> float:
    try:
        number = float(value)
    except (TypeError, ValueError):
        number = default
    return max(minimum, min(maximum, number))


def _body_extension(content_type: str, url: str = "") -> str:
    lowered = str(content_type or "").lower()
    path = urlparse(str(url or "")).path.lower()
    if "json" in lowered:
        return ".json"
    if "html" in lowered or path.endswith((".html", ".htm")):
        return ".html"
    if "javascript" in lowered or "ecmascript" in lowered or path.endswith(".js"):
        return ".js"
    if "css" in lowered or path.endswith(".css"):
        return ".css"
    if lowered.startswith("text/"):
        return ".txt"
    suffix = Path(path).suffix
    return suffix if suffix and len(suffix) <= 10 else ".bin"


def _decode_body(body: bytes, content_type: str = "", charset: str = "") -> Tuple[str, bool]:
    if not body:
        return "", True
    encoding = charset or ""
    if not encoding:
        match = re.search(r"charset=([^;\s]+)", str(content_type or ""), re.IGNORECASE)
        encoding = match.group(1) if match else "utf-8"
    try:
        return body.decode(encoding), True
    except (LookupError, UnicodeDecodeError):
        try:
            return body.decode("utf-8"), True
        except UnicodeDecodeError:
            return body.decode("utf-8", errors="replace"), False


def _json_copy(text: str, content_type: str = "") -> Tuple[Any, str]:
    if not text:
        return None, ""
    if "json" not in str(content_type or "").lower() and not text.lstrip().startswith(("{", "[")):
        return None, ""
    try:
        return json.loads(text), ""
    except ValueError as exc:
        return None, "{}: {}".format(type(exc).__name__, exc)


def api_state_audit_options(config: Any = None) -> ApiStateAuditOptions:
    section: Mapping[str, Any] = {}
    if isinstance(config, Mapping):
        capture = config.get("capture")
        if isinstance(capture, Mapping):
            audit = capture.get("api_state_audit")
            if isinstance(audit, Mapping):
                section = audit
    merged = dict(DEFAULT_AUDIT_CONFIG)
    merged.update(dict(section))
    return ApiStateAuditOptions(
        enabled=_coerce_bool(merged.get("enabled"), False),
        api_list_path=_coerce_text(merged.get("api_list_path")) or DEFAULT_API_LIST_PATH,
        request_all_methods=_coerce_bool(merged.get("request_all_methods"), True),
        asset_follow=(_coerce_text(merged.get("asset_follow")) or "all").lower(),
        timeout_seconds=_coerce_float(merged.get("timeout_seconds"), 20.0, minimum=1.0, maximum=600.0),
        max_asset_depth=_coerce_int(merged.get("max_asset_depth"), 2, minimum=0, maximum=8),
        max_asset_count=_coerce_int(merged.get("max_asset_count"), 500, minimum=0, maximum=10000),
        identity_base_url=_coerce_text(merged.get("identity_base_url")),
        realm=_coerce_text(merged.get("realm")) or "thu",
        wechat_appid=_coerce_text(merged.get("wechat_appid")) or "0",
    )


def api_state_audit_enabled(config: Any = None) -> bool:
    return api_state_audit_options(config).enabled


def normalize_audit_method(method: Any) -> Tuple[str, str]:
    original = _coerce_text(method).upper() or "UNKNOWN"
    if original in {"OBSERVED_GET", "UNKNOWN"}:
        return original, "GET"
    if original in API_METHODS or original == "SOCKET.IO":
        return original, original
    return original, original


def api_list_path(base_dir: Any, options: ApiStateAuditOptions) -> Path:
    path = Path(options.api_list_path)
    if not path.is_absolute():
        path = Path(base_dir) / path
    return path


def load_api_operation_rows(base_dir: Any, config: Any = None, path: Any = None) -> List[Dict[str, Any]]:
    options = api_state_audit_options(config)
    source = Path(path) if path is not None else api_list_path(base_dir, options)
    payload = json.loads(source.read_text(encoding="utf-8"))
    rows = payload.get("lists", {}).get("operationRows") if isinstance(payload, Mapping) else None
    if not isinstance(rows, list):
        return []
    return [dict(row) for row in rows if isinstance(row, Mapping)]


def _load_api_list_payload(base_dir: Any, config: Any = None, path: Any = None) -> Dict[str, Any]:
    options = api_state_audit_options(config)
    source = Path(path) if path is not None else api_list_path(base_dir, options)
    payload = json.loads(source.read_text(encoding="utf-8"))
    return dict(payload) if isinstance(payload, Mapping) else {}


def _identity_config_from_login_url(login_url: Any) -> Tuple[str, str]:
    text = _coerce_text(login_url)
    if not text:
        return "", ""
    parsed = urlparse(text)
    if not parsed.scheme or not parsed.netloc:
        return "", ""
    match = re.search(r"(?P<prefix>/.*?)/realms/(?P<realm>[^/?#]+)", parsed.path)
    if not match:
        match = re.search(r"^/realms/(?P<realm>[^/?#]+)", parsed.path)
    if not match:
        return "", ""
    prefix = match.groupdict().get("prefix", "").rstrip("/")
    base = "{}://{}{}".format(parsed.scheme, parsed.netloc, prefix)
    return base.rstrip("/"), unquote(match.group("realm"))


def _options_with_runtime_identity(options: ApiStateAuditOptions, endpoints: Any, context: Mapping[str, str]) -> ApiStateAuditOptions:
    identity_base_url = options.identity_base_url or _coerce_text(context.get("identity_base_url"))
    realm = _coerce_text(context.get("realm")) or options.realm
    runtime_base, runtime_realm = _identity_config_from_login_url(getattr(endpoints, "login_url", ""))
    if not identity_base_url:
        identity_base_url = runtime_base
    if (not realm or realm == DEFAULT_AUDIT_CONFIG.get("realm", "thu")) and runtime_realm:
        realm = runtime_realm
    if identity_base_url == options.identity_base_url and realm == options.realm:
        return options
    return replace(options, identity_base_url=identity_base_url, realm=realm or options.realm)


def _rollcall_id(rollcall: Any) -> str:
    if not isinstance(rollcall, Mapping):
        return ""
    for key in ("rollcall_id", "rollcallId", "rollcallID", "id"):
        text = _coerce_text(rollcall.get(key))
        if text:
            return text
    return ""


def _course_id(rollcall: Any) -> str:
    if not isinstance(rollcall, Mapping):
        return ""
    for key in ("course_id", "courseId", "courseID", "course_no"):
        text = _coerce_text(rollcall.get(key))
        if text:
            return text
    course = rollcall.get("course")
    if isinstance(course, Mapping):
        return _coerce_text(course.get("id") or course.get("course_id") or course.get("courseId"))
    return ""


def _rollcall_type(rollcall: Any) -> str:
    if not isinstance(rollcall, Mapping):
        return ""
    if rollcall.get("is_number"):
        return "number"
    if rollcall.get("is_radar"):
        return "radar"
    text = _coerce_text(rollcall.get("type") or rollcall.get("rollcall_type") or rollcall.get("name")).lower()
    if "qr" in text or any(rollcall.get(key) for key in ("is_qrcode", "is_qr_code", "is_qr")):
        return "qrcode"
    if "radar" in text:
        return "radar"
    return text or "unknown"


def _student_statuses(rollcall: Any) -> List[Dict[str, Any]]:
    if not isinstance(rollcall, Mapping):
        return []
    students = rollcall.get("student_rollcalls")
    if not isinstance(students, list):
        return []
    statuses = []
    for item in students:
        if not isinstance(item, Mapping):
            continue
        statuses.append(
            {
                "student_id": _coerce_text(item.get("student_id") or item.get("studentId") or item.get("id")),
                "status": _coerce_text(
                    item.get("student_rollcall_status")
                    or item.get("rollcall_status")
                    or item.get("student_status")
                    or item.get("status")
                ),
            }
        )
    return sorted(statuses, key=lambda item: (item.get("student_id", ""), item.get("status", "")))


def build_rollcall_state_signature(
    selected_status: str,
    selected_rollcall: Any = None,
    selected_rollcall_type: str = "",
    rollcalls: Any = None,
) -> str:
    entries = []
    if isinstance(rollcalls, list):
        for item in rollcalls:
            if not isinstance(item, Mapping):
                continue
            entries.append(
                {
                    "rollcall_id": _rollcall_id(item),
                    "course_id": _course_id(item),
                    "type": _rollcall_type(item),
                    "status": _coerce_text(item.get("status")),
                    "student_statuses": _student_statuses(item),
                }
            )
    entries.sort(key=lambda item: (item.get("rollcall_id", ""), item.get("course_id", ""), item.get("type", "")))
    payload = {
        "selected_status": _coerce_text(selected_status),
        "selected_rollcall_id": _rollcall_id(selected_rollcall),
        "selected_rollcall_type": _coerce_text(selected_rollcall_type),
        "open_rollcalls": entries,
    }
    return json.dumps(payload, ensure_ascii=False, sort_keys=True, separators=(",", ":"), default=str)


def rollcall_state_has_activity(signature: str) -> bool:
    try:
        payload = json.loads(signature)
    except ValueError:
        return False
    return bool(payload.get("open_rollcalls") or payload.get("selected_status") not in ("", "not_call"))


def _visit_for_ids(value: Any, found: Dict[str, str], depth: int = 0) -> None:
    if depth > 8:
        return
    if isinstance(value, Mapping):
        key_groups = {
            "rollcall_id": ("rollcall_id", "rollcallId", "rollcallID"),
            "course_id": ("course_id", "courseId", "courseID", "course_no"),
            "student_id": ("student_id", "studentId", "studentID"),
            "user_id": ("user_id", "userId", "userID", "user_no"),
            "enrollment_id": ("enrollment_id", "enrollmentId", "enrollmentID"),
            "timetable_id": ("timetable_id", "timetableId", "timetableID"),
            "alert_log_id": ("alert_log_id", "alertLogId", "alert_logID"),
            "module_id": ("module_id", "moduleId", "moduleID"),
            "org_id": ("org_id", "orgId", "orgID"),
            "realm": ("realm", "identity_realm", "identityRealm", "auth_realm", "authRealm"),
            "identity_base_url": (
                "identity_base_url",
                "identityBaseUrl",
                "auth_server_url",
                "authServerUrl",
                "auth-server-url",
            ),
        }
        for target, keys in key_groups.items():
            if found.get(target):
                continue
            for key in keys:
                text = _coerce_text(value.get(key))
                if text:
                    found[target] = text
                    break
        course = value.get("course")
        if isinstance(course, Mapping) and not found.get("course_id"):
            found["course_id"] = _coerce_text(course.get("id") or course.get("course_id") or course.get("courseId"))
        enrollment = value.get("enrollment")
        if isinstance(enrollment, Mapping) and not found.get("enrollment_id"):
            found["enrollment_id"] = _coerce_text(enrollment.get("id") or enrollment.get("enrollment_id"))
        for child in value.values():
            _visit_for_ids(child, found, depth + 1)
    elif isinstance(value, list):
        for child in value[:200]:
            _visit_for_ids(child, found, depth + 1)


def build_audit_context(
    *,
    base_url: str,
    selected_rollcall: Any = None,
    rollcalls: Any = None,
    source_payload: Any = None,
    user_id: Any = "",
    session_id: str = "",
    options: Optional[ApiStateAuditOptions] = None,
) -> Dict[str, str]:
    found: Dict[str, str] = {}
    for value in (selected_rollcall, rollcalls, source_payload):
        _visit_for_ids(value, found)
    if user_id:
        found["user_id"] = _coerce_text(user_id)
    if not found.get("student_id") and found.get("user_id"):
        found["student_id"] = found["user_id"]
    if not found.get("rollcall_id"):
        found["rollcall_id"] = _rollcall_id(selected_rollcall)
    if not found.get("course_id"):
        found["course_id"] = _course_id(selected_rollcall)
    options = options or ApiStateAuditOptions()
    found.setdefault("realm", options.realm)
    found.setdefault("org_id", "1")
    found.setdefault("page", "1")
    found.setdefault("page_size", "20")
    found.setdefault("conditions", "{}")
    found.setdefault("file_type", "xlsx")
    found.setdefault("appid", options.wechat_appid)
    found.setdefault("url", base_url)
    found.setdefault("session_id", session_id)
    return {key: _coerce_text(value) for key, value in found.items() if _coerce_text(value)}


def _query_key_before(endpoint: str, start: int) -> str:
    prefix = endpoint[:start]
    match = re.search(r"[?&]([^=&?#]+)=$", prefix)
    return match.group(1).lower() if match else ""


def _path_segments_before(endpoint: str, start: int) -> List[str]:
    prefix = endpoint[:start].split("?", 1)[0]
    return [segment.lower() for segment in prefix.split("/") if segment]


def _value_for_placeholder(endpoint: str, start: int, end: int, context: Mapping[str, str], options: ApiStateAuditOptions) -> Tuple[str, str]:
    query_key = _query_key_before(endpoint, start)
    if query_key:
        query_defaults = {
            "page": "page",
            "page_size": "page_size",
            "conditions": "conditions",
            "url": "url",
            "appid": "appid",
        }
        context_key = query_defaults.get(query_key, query_key)
        if context.get(context_key):
            return context[context_key], context_key
    segments = _path_segments_before(endpoint, start)
    previous = segments[-1] if segments else ""
    after = endpoint[end:].lstrip("/").split("/", 1)[0].split("?", 1)[0].lower()
    if previous == "realms":
        return context.get("realm") or options.realm or "thu", "realm"
    if previous in {"course", "courses"}:
        return context.get("course_id") or "0", "course_id"
    if previous == "student":
        return context.get("student_id") or context.get("user_id") or "0", "student_id"
    if previous in {"users", "user"}:
        return context.get("user_id") or "0", "user_id"
    if previous == "enrollment":
        return context.get("enrollment_id") or "0", "enrollment_id"
    if previous == "timetables":
        return context.get("timetable_id") or "0", "timetable_id"
    if previous == "alert-logs":
        return context.get("alert_log_id") or "0", "alert_log_id"
    if previous == "module":
        return context.get("module_id") or context.get("course_id") or "0", "module_id"
    if previous in {"export", "to"} or after in {"export", "to"}:
        return context.get("file_type") or "xlsx", "file_type"
    if "rollcall" in previous or "rollcall" in after or "rollcall" in endpoint[:start].lower()[-40:]:
        return context.get("rollcall_id") or "0", "rollcall_id"
    if "course" in endpoint[:start].lower()[-40:]:
        return context.get("course_id") or "0", "course_id"
    return "0", "canary"


def _replace_placeholders(endpoint: str, context: Mapping[str, str], options: ApiStateAuditOptions) -> Tuple[str, List[Dict[str, Any]]]:
    replacements: List[Dict[str, Any]] = []
    parts: List[str] = []
    last = 0
    for match in PLACEHOLDER_PATTERN.finditer(endpoint):
        parts.append(endpoint[last:match.start()])
        value, source = _value_for_placeholder(endpoint, match.start(), match.end(), context, options)
        replacements.append({"placeholder": match.group(0), "offset": match.start(), "value": value, "source": source})
        parts.append(quote(value, safe=""))
        last = match.end()
    parts.append(endpoint[last:])
    return "".join(parts), replacements


def _fill_empty_query_values(endpoint: str, context: Mapping[str, str]) -> Tuple[str, List[Dict[str, Any]]]:
    if "?" not in endpoint:
        return endpoint, []
    path, query = endpoint.split("?", 1)
    replacements: List[Dict[str, Any]] = []
    pairs = []
    for part in query.split("&"):
        if "=" not in part or not part.endswith("="):
            pairs.append(part)
            continue
        key = part[:-1]
        key_lower = key.lower()
        defaults = {
            "page": context.get("page", "1"),
            "page_size": context.get("page_size", "20"),
            "conditions": context.get("conditions", "{}"),
            "url": context.get("url", "0"),
        }
        value = defaults.get(key_lower, "0")
        replacements.append({"placeholder": "empty_query", "query_key": key, "value": value, "source": key_lower})
        pairs.append("{}={}".format(key, quote(value, safe="")))
    return "{}?{}".format(path, "&".join(pairs)), replacements


def _host_base_url(host: str, endpoint: str, base_url: str, options: ApiStateAuditOptions) -> Tuple[str, str]:
    host_text = _coerce_text(host)
    host_lower = host_text.lower()
    if endpoint.startswith(("http://", "https://", "ws://", "wss://")):
        return "", ""
    if not host_text or "same-origin" in host_lower or "relative" in host_lower or host_lower == "ilearn.thu.edu.tw":
        return base_url.rstrip("/"), ""
    if "identity" in host_lower or "auth-server" in host_lower or endpoint.startswith("/realms/"):
        if options.identity_base_url:
            return options.identity_base_url.rstrip("/"), ""
        return "", "unresolved_host"
    token = host_text.split()[0].strip().strip("/")
    if token.startswith(("http://", "https://")):
        return token.rstrip("/"), ""
    if re.match(r"^[A-Za-z0-9.-]+(?::\d+)?$", token):
        return "https://{}".format(token), ""
    return "", "unresolved_host"


def resolve_operation_url(
    row: Mapping[str, Any],
    *,
    index: int,
    base_url: str,
    context: Mapping[str, str],
    options: ApiStateAuditOptions,
) -> ResolvedOperation:
    original_method, method = normalize_audit_method(row.get("method"))
    endpoint = _coerce_text(row.get("endpoint"))
    host = _coerce_text(row.get("host"))
    replaced, replacements = _replace_placeholders(endpoint, context, options)
    replaced, query_replacements = _fill_empty_query_values(replaced, context)
    replacements.extend(query_replacements)
    base, unresolved_reason = _host_base_url(host, replaced, base_url, options)
    if unresolved_reason:
        url = ""
    elif replaced.startswith(("http://", "https://", "ws://", "wss://")):
        url = replaced
    else:
        url = "{}{}".format(base.rstrip("/"), replaced if replaced.startswith("/") else "/" + replaced)
    return ResolvedOperation(
        index=index,
        row=dict(row),
        original_method=original_method,
        method=method,
        endpoint=endpoint,
        host=host,
        url=url,
        replacements=replacements,
        unresolved_reason=unresolved_reason,
    )


def _request_cookie_header(session: Any, url: str) -> str:
    try:
        cookies = session.cookie_jar.filter_cookies(URL(url))
    except Exception:
        return ""
    return "; ".join("{}={}".format(key, morsel.value) for key, morsel in cookies.items())


def _request_json_payload(method: str, options: ApiStateAuditOptions) -> Any:
    if not options.request_all_methods:
        return None
    if method in MUTATING_METHODS:
        return {}
    return None


async def _capture_http(
    session: Any,
    writer: ApiStateAuditWriter,
    operation: ResolvedOperation,
    *,
    request_ssl: Any = None,
    options: ApiStateAuditOptions,
) -> Dict[str, Any]:
    label = "{}_{}".format(operation.method.lower(), operation.index)
    record: Dict[str, Any] = {
        "captured_at": _now_iso(),
        "operation_index": operation.index,
        "row": operation.row,
        "original_method": operation.original_method,
        "method": operation.method,
        "url": operation.url,
        "endpoint": operation.endpoint,
        "host": operation.host,
        "replacements": operation.replacements,
        "unredacted": True,
    }
    if operation.unresolved_reason:
        record["status"] = "skipped"
        record["reason"] = operation.unresolved_reason
        record["operation_file"] = writer.write_operation(operation.index, label, record)
        writer.write_event("operation_skipped", record)
        return record
    if not options.request_all_methods and operation.method not in {"GET", "HEAD", "OPTIONS"}:
        record["status"] = "skipped"
        record["reason"] = "request_all_methods_disabled"
        record["operation_file"] = writer.write_operation(operation.index, label, record)
        writer.write_event("operation_skipped", record)
        return record

    json_payload = _request_json_payload(operation.method, options)
    kwargs: Dict[str, Any] = {}
    if request_ssl is not None:
        kwargs["ssl"] = request_ssl
    kwargs["timeout"] = options.timeout_seconds
    if json_payload is not None:
        kwargs["json"] = json_payload
    record["request"] = {
        "method": operation.method,
        "url": operation.url,
        "json": json_payload,
        "cookie_header": _request_cookie_header(session, operation.url),
    }
    try:
        async with session.request(operation.method, operation.url, **kwargs) as response:
            body = b"" if operation.method == "HEAD" else await response.read()
            content_type = _coerce_text(response.headers.get("Content-Type") if response.headers else "")
            body_text, decoded_cleanly = _decode_body(body, content_type, _coerce_text(getattr(response, "charset", "")))
            parsed_json, json_error = _json_copy(body_text, content_type)
            body_file = writer.save_body(
                kind="operation",
                index=operation.index,
                label=label,
                url=str(response.url),
                content_type=content_type,
                body=body,
            )
            record.update(
                {
                    "status": "ok",
                    "response": {
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
                        "headers": {str(k): str(v) for k, v in dict(response.headers).items()},
                        "content_type": content_type,
                        "body_file": body_file,
                        "body_sha256": _sha256_bytes(body),
                        "body_length_bytes": len(body),
                        "body_text": body_text if len(body_text) <= BODY_TEXT_INLINE_LIMIT else body_text[:BODY_TEXT_INLINE_LIMIT],
                        "body_text_truncated": len(body_text) > BODY_TEXT_INLINE_LIMIT,
                        "body_text_decoded_cleanly": decoded_cleanly,
                        "body_base64": "" if decoded_cleanly else base64.b64encode(body).decode("ascii"),
                        "json": parsed_json,
                        "json_error": json_error,
                    },
                }
            )
    except Exception as exc:
        record.update({"status": "error", "error": "{}: {}".format(type(exc).__name__, exc)})
    record["operation_file"] = writer.write_operation(operation.index, label, record)
    writer.write_event("operation_response", record)
    return record


def _should_parse_assets(content_type: str, url: str) -> bool:
    lowered = str(content_type or "").lower()
    path = urlparse(str(url or "")).path.lower()
    return (
        "html" in lowered
        or "javascript" in lowered
        or "ecmascript" in lowered
        or "css" in lowered
        or path.endswith((".html", ".htm", ".js", ".css"))
    )


def _asset_urls_from_text(text: str, base_url: str, content_type: str = "") -> List[str]:
    urls: List[str] = []
    content_lower = str(content_type or "").lower()
    for pattern in (ASSET_ATTR_PATTERN, CSS_URL_PATTERN, CSS_IMPORT_PATTERN, JS_IMPORT_PATTERN):
        for match in pattern.findall(text or ""):
            raw = match[-1] if isinstance(match, tuple) else match
            raw = html.unescape(str(raw or "").strip())
            if not raw or raw.startswith(("#", "data:", "blob:", "javascript:", "mailto:", "tel:")):
                continue
            if pattern is JS_IMPORT_PATTERN and not (
                raw.startswith((".", "/", "http://", "https://")) or raw.endswith((".js", ".css", ".json"))
            ):
                continue
            absolute = urljoin(base_url, raw)
            if absolute.startswith(("http://", "https://")):
                urls.append(absolute)
    if "css" in content_lower or base_url.lower().endswith(".css"):
        return urls
    return urls


async def _capture_asset(
    session: Any,
    writer: ApiStateAuditWriter,
    url: str,
    *,
    index: int,
    depth: int,
    source_url: str,
    request_ssl: Any,
    options: ApiStateAuditOptions,
) -> Dict[str, Any]:
    record: Dict[str, Any] = {
        "captured_at": _now_iso(),
        "asset_index": index,
        "depth": depth,
        "source_url": source_url,
        "method": "GET",
        "url": url,
        "unredacted": True,
    }
    kwargs: Dict[str, Any] = {}
    if request_ssl is not None:
        kwargs["ssl"] = request_ssl
    kwargs["timeout"] = options.timeout_seconds
    try:
        async with session.get(url, **kwargs) as response:
            body = await response.read()
            content_type = _coerce_text(response.headers.get("Content-Type") if response.headers else "")
            body_text, decoded_cleanly = _decode_body(body, content_type, _coerce_text(getattr(response, "charset", "")))
            parsed_json, json_error = _json_copy(body_text, content_type)
            body_file = writer.save_body(
                kind="asset",
                index=index,
                label="asset",
                url=str(response.url),
                content_type=content_type,
                body=body,
            )
            record.update(
                {
                    "status": "ok",
                    "response": {
                        "status": int(response.status),
                        "reason": _coerce_text(getattr(response, "reason", "")),
                        "final_url": str(response.url),
                        "request_headers": {str(k): str(v) for k, v in dict(response.request_info.headers).items()},
                        "headers": {str(k): str(v) for k, v in dict(response.headers).items()},
                        "content_type": content_type,
                        "body_file": body_file,
                        "body_sha256": _sha256_bytes(body),
                        "body_length_bytes": len(body),
                        "body_text": body_text if len(body_text) <= BODY_TEXT_INLINE_LIMIT else body_text[:BODY_TEXT_INLINE_LIMIT],
                        "body_text_truncated": len(body_text) > BODY_TEXT_INLINE_LIMIT,
                        "body_text_decoded_cleanly": decoded_cleanly,
                        "body_base64": "" if decoded_cleanly else base64.b64encode(body).decode("ascii"),
                        "json": parsed_json,
                        "json_error": json_error,
                    },
                }
            )
    except Exception as exc:
        record.update({"status": "error", "error": "{}: {}".format(type(exc).__name__, exc)})
    writer.write_event("asset_response", record)
    return record


async def _capture_assets(
    session: Any,
    writer: ApiStateAuditWriter,
    operation_records: Iterable[Mapping[str, Any]],
    *,
    options: ApiStateAuditOptions,
    request_ssl: Any,
) -> List[Dict[str, Any]]:
    if options.asset_follow not in {"all", "same-origin", "same_origin", "on", "true"}:
        return []
    queue: List[Tuple[str, int, str]] = []
    visited = set()
    for record in operation_records:
        response = record.get("response") if isinstance(record, Mapping) else None
        if not isinstance(response, Mapping):
            continue
        final_url = _coerce_text(response.get("final_url") or record.get("url"))
        content_type = _coerce_text(response.get("content_type"))
        body_text = _coerce_text(response.get("body_text"))
        if not final_url or not body_text or not _should_parse_assets(content_type, final_url):
            continue
        for asset_url in _asset_urls_from_text(body_text, final_url, content_type):
            queue.append((asset_url, 1, final_url))

    captured: List[Dict[str, Any]] = []
    max_count = int(options.max_asset_count)
    max_depth = int(options.max_asset_depth)
    while queue and (not max_count or len(captured) < max_count):
        url, depth, source_url = queue.pop(0)
        if url in visited or depth > max_depth:
            continue
        visited.add(url)
        asset_record = await _capture_asset(
            session,
            writer,
            url,
            index=len(captured) + 1,
            depth=depth,
            source_url=source_url,
            request_ssl=request_ssl,
            options=options,
        )
        captured.append(asset_record)
        response = asset_record.get("response")
        if not isinstance(response, Mapping):
            continue
        content_type = _coerce_text(response.get("content_type"))
        final_url = _coerce_text(response.get("final_url") or url)
        body_text = _coerce_text(response.get("body_text"))
        if body_text and _should_parse_assets(content_type, final_url):
            for child in _asset_urls_from_text(body_text, final_url, content_type):
                if child not in visited:
                    queue.append((child, depth + 1, final_url))
    return captured


def _audit_root(base_dir: Any, *, profile: str, selected_status: str, rollcall_id: str) -> Path:
    name = "{}_{}_{}_{}".format(
        _local_stamp(),
        _safe_name(profile or "profile", 36),
        _safe_name(selected_status or "status", 36),
        _safe_name(rollcall_id or "na", 36),
    )
    return Path(base_dir) / "log" / "api_state_audit" / name


async def run_api_state_audit(
    session: Any,
    *,
    endpoints: Any,
    base_dir: Any,
    config: Any = None,
    request_ssl: Any = None,
    profile: str = "",
    provider: str = "",
    selected_status: str = "",
    selected_rollcall: Any = None,
    selected_rollcall_type: str = "",
    rollcalls: Any = None,
    source_payload: Any = None,
    user_id: Any = "",
    session_id: str = "",
    operation_rows: Optional[List[Mapping[str, Any]]] = None,
    capture_realtime_func: Any = None,
) -> Dict[str, Any]:
    options = api_state_audit_options(config)
    summary: Dict[str, Any] = {"status": "skipped", "enabled": bool(options.enabled)}
    if not options.enabled:
        summary["status"] = "disabled"
        return summary
    base_url = _coerce_text(getattr(endpoints, "base_url", "")).rstrip("/")
    if not base_url:
        summary["status"] = "no_base_url"
        return summary
    if operation_rows is not None:
        rows = [dict(row) for row in operation_rows]
        api_source_document: Dict[str, Any] = {"lists": {"operationRows": rows}, "source": "provided_operation_rows"}
    else:
        api_source_document = _load_api_list_payload(base_dir, config)
        rows = load_api_operation_rows(base_dir, config)
    rollcall_id = _rollcall_id(selected_rollcall)
    context = build_audit_context(
        base_url=base_url,
        selected_rollcall=selected_rollcall,
        rollcalls=rollcalls,
        source_payload=source_payload,
        user_id=user_id,
        session_id=session_id,
        options=options,
    )
    options = _options_with_runtime_identity(options, endpoints, context)
    if context.get("realm") != options.realm:
        context["realm"] = options.realm
    if options.identity_base_url and not context.get("identity_base_url"):
        context["identity_base_url"] = options.identity_base_url
    root = _audit_root(base_dir, profile=profile, selected_status=selected_status, rollcall_id=rollcall_id or context.get("rollcall_id", ""))
    writer = ApiStateAuditWriter(root)
    api_source_file = root / "api_list_source.json"
    with api_source_file.open("w", encoding="utf-8") as file:
        json.dump(api_source_document, file, ensure_ascii=False, indent=2, default=str)
    writer.write_event(
        "audit_start",
        {
            "profile": profile,
            "provider": provider,
            "base_url": base_url,
            "selected_status": selected_status,
            "selected_rollcall_type": selected_rollcall_type,
            "rollcall_id": rollcall_id,
            "context": context,
            "operation_count": len(rows),
            "api_source_file": str(api_source_file),
            "options": options.__dict__,
            "unredacted": True,
        },
    )

    operation_records: List[Dict[str, Any]] = []
    realtime_summary: Dict[str, Any] = {}
    for index, row in enumerate(rows, start=1):
        resolved = resolve_operation_url(row, index=index, base_url=base_url, context=context, options=options)
        if resolved.method == "SOCKET.IO":
            record = {
                "captured_at": _now_iso(),
                "operation_index": index,
                "row": dict(row),
                "original_method": resolved.original_method,
                "method": resolved.method,
                "endpoint": resolved.endpoint,
                "host": resolved.host,
                "status": "socket_io_recorded",
                "unredacted": True,
            }
            if capture_realtime_func is not None:
                try:
                    realtime_summary = await capture_realtime_func(
                        session,
                        base_url=base_url,
                        session_id=session_id,
                        request_ssl=request_ssl,
                        base_dir=base_dir,
                        profile=profile,
                        provider=provider,
                        rollcall_id=rollcall_id or context.get("rollcall_id", ""),
                        trigger_status=selected_status,
                        config=config,
                    )
                    record["realtime_capture"] = realtime_summary
                except Exception as exc:
                    record["realtime_capture"] = {"status": "error", "error": "{}: {}".format(type(exc).__name__, exc)}
            record["operation_file"] = writer.write_operation(index, "socket_io", record)
            writer.write_event("socket_io_operation", record)
            operation_records.append(record)
            continue
        if resolved.method not in API_METHODS:
            record = {
                "captured_at": _now_iso(),
                "operation_index": index,
                "row": dict(row),
                "original_method": resolved.original_method,
                "method": resolved.method,
                "endpoint": resolved.endpoint,
                "host": resolved.host,
                "status": "skipped",
                "reason": "unsupported_method",
                "unredacted": True,
            }
            record["operation_file"] = writer.write_operation(index, "unsupported_method", record)
            writer.write_event("operation_skipped", record)
            operation_records.append(record)
            continue
        operation_records.append(
            await _capture_http(session, writer, resolved, request_ssl=request_ssl, options=options)
        )

    assets = await _capture_assets(session, writer, operation_records, options=options, request_ssl=request_ssl)
    ok_count = sum(1 for record in operation_records if record.get("status") == "ok")
    error_count = sum(1 for record in operation_records if record.get("status") == "error")
    skipped_count = sum(1 for record in operation_records if record.get("status") not in {"ok", "error"})
    summary = {
        "status": "ok",
        "enabled": True,
        "profile": profile,
        "provider": provider,
        "base_url": base_url,
        "output_dir": str(root),
        "events_path": str(writer.events_path),
        "summary_path": str(writer.summary_path),
        "operations_dir": str(writer.operations_dir),
        "bodies_dir": str(writer.bodies_dir),
        "assets_dir": str(writer.assets_dir),
        "selected_status": selected_status,
        "selected_rollcall_type": selected_rollcall_type,
        "rollcall_id": rollcall_id or context.get("rollcall_id", ""),
        "context": context,
        "operation_count": len(operation_records),
        "operation_ok_count": ok_count,
        "operation_error_count": error_count,
        "operation_skipped_count": skipped_count,
        "asset_count": len(assets),
        "realtime_capture": realtime_summary,
        "api_source_file": str(api_source_file),
        "unredacted": True,
    }
    writer.write_event("audit_end", summary)
    writer.write_summary(summary)
    return summary

from __future__ import annotations
import hashlib
import json
from dataclasses import dataclass, field
from typing import Any, Dict, Mapping, Optional, Tuple
from urllib.parse import parse_qs, unquote, urljoin, urlparse

try:
    from .tron_http import TRON, UnauthorizedError, UnexpectedResponseError
except ImportError:  # pragma: no cover - direct script execution fallback
    from tron_http import TRON, UnauthorizedError, UnexpectedResponseError


TEXT_ESCAPE = chr(30)
TILDE_ESCAPE = chr(31)
TYPE_PREFIX = chr(26)
NUMBER_PREFIX = chr(16)
TRUE_TOKEN = TYPE_PREFIX + "1"
FALSE_TOKEN = TYPE_PREFIX + "0"
BASE36_ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyz"

QR_KEYS = [
    "courseId",
    "activityId",
    "activityType",
    "data",
    "rollcallId",
    "groupSetId",
    "accessCode",
    "action",
    "enableGroupRollcall",
    "createUser",
    "joinCourse",
]

QR_TYPE_KEYS = [
    "classroom-exam",
    "feedback",
    "vote",
]

def _base36(number: int) -> str:
    if number < 0:
        return "-" + _base36(-number)
    if number < 36:
        return BASE36_ALPHABET[number]
    result = ""
    while number:
        number, remainder = divmod(number, 36)
        result = BASE36_ALPHABET[remainder] + result
    return result


# Rebuild after _base36 is defined. Keeping the literal above would work for
# current keys, but this form documents the TronClass compact-key algorithm.
KEY_BY_CODE = {_base36(index): key for index, key in enumerate(QR_KEYS)}
TYPE_BY_CODE = {TYPE_PREFIX + _base36(index + 2): key for index, key in enumerate(QR_TYPE_KEYS)}


@dataclass(frozen=True)
class QrCodeData:
    fields: Dict[str, Any]
    raw: str = ""
    extras: Dict[str, Any] = field(default_factory=dict)

    @property
    def rollcall_id(self) -> Optional[str]:
        value = (
            self.fields.get("rollcallId")
            or self.fields.get("rollcall_id")
            or self.fields.get("rollcallID")
        )
        if value in (None, ""):
            return None
        return str(value)

    @property
    def data(self) -> Optional[str]:
        value = self.fields.get("data")
        if value in (None, ""):
            return None
        return str(value)

    def answer_body(self, device_id: str) -> Dict[str, Any]:
        if not self.data:
            raise ValueError("QR payload missing data field.")
        return {"data": self.data, "deviceId": device_id}


@dataclass(frozen=True)
class QrPayloadDiagnostic:
    ok: bool
    source_kind: str = "unknown"
    path: str = ""
    encoding: str = ""
    rollcall_id: str = ""
    field_names: Tuple[str, ...] = ()
    extra_field_names: Tuple[str, ...] = ()
    missing_required: Tuple[str, ...] = ()
    payload_length: int = 0
    payload_hash: str = ""
    warnings: Tuple[str, ...] = ()
    error: str = ""

    def to_dict(self) -> Dict[str, Any]:
        return {
            "ok": self.ok,
            "source_kind": self.source_kind,
            "path": self.path,
            "encoding": self.encoding,
            "rollcall_id": self.rollcall_id,
            "field_names": list(self.field_names),
            "extra_field_names": list(self.extra_field_names),
            "missing_required": list(self.missing_required),
            "payload_length": self.payload_length,
            "payload_hash": self.payload_hash,
            "warnings": list(self.warnings),
            **({"error": self.error} if self.error else {}),
        }


@dataclass(frozen=True)
class QrParseResult:
    ok: bool
    data: Optional[QrCodeData] = None
    diagnostic: QrPayloadDiagnostic = field(
        default_factory=lambda: QrPayloadDiagnostic(ok=False)
    )

    def to_dict(self) -> Dict[str, Any]:
        return {
            "ok": self.ok,
            "diagnostic": self.diagnostic.to_dict(),
        }


def _decode_compact_value(value: str) -> Any:
    if value.startswith(TYPE_PREFIX):
        if value == TRUE_TOKEN:
            return True
        if value == FALSE_TOKEN:
            return False
        return TYPE_BY_CODE.get(value, value)

    if value.startswith(NUMBER_PREFIX):
        parts = value[1:].split(".")
        try:
            numbers = [int(part, 36) for part in parts if part != ""]
        except ValueError:
            return value
        if len(numbers) > 1:
            try:
                return float(f"{numbers[0]}.{numbers[1]}")
            except ValueError:
                return f"{numbers[0]}.{numbers[1]}"
        if numbers:
            return numbers[0]
        return value

    return value.replace(TILDE_ESCAPE, "~").replace(TEXT_ESCAPE, "!")


def parse_compact_payload(payload: str) -> Dict[str, Any]:
    result: Dict[str, Any] = {}
    if not isinstance(payload, str):
        return result

    for part in filter(None, payload.split("!")):
        key_code, separator, value = part.partition("~")
        if not separator:
            continue
        key = KEY_BY_CODE.get(key_code, key_code)
        result[key] = _decode_compact_value(value)
    return result


def _coerce_mapping(value: Any) -> Dict[str, Any]:
    if not isinstance(value, Mapping):
        return {}
    return {str(key): item for key, item in value.items()}


def _payload_hash(raw: str) -> str:
    return hashlib.sha256(str(raw or "").encode("utf-8")).hexdigest()[:12]


def _safe_error_code(error: Any) -> str:
    if isinstance(error, json.JSONDecodeError):
        return "invalid_json"
    text = str(error or "").strip().lower()
    if not text:
        return ""
    if "empty" in text:
        return "empty_payload"
    if "not a tronclass" in text:
        return "not_tronclass_qr_url"
    if "json" in text:
        return "invalid_json"
    if "rollcall" in text and "missing" in text:
        return "missing_rollcall_id"
    if "unable to parse" in text:
        return "unable_to_parse"
    return "parse_failed"


def build_qr_payload_diagnostic(
    qr_data: Optional[QrCodeData] = None,
    *,
    raw: str = "",
    error: Any = None,
    source_kind: str = "",
    path: str = "",
    encoding: str = "",
) -> QrPayloadDiagnostic:
    text = str(raw or "")
    field_names: Tuple[str, ...] = ()
    extra_field_names: Tuple[str, ...] = ()
    rollcall_id = ""
    missing_required = []
    warnings = []
    ok = qr_data is not None and error is None

    if qr_data is not None:
        field_names = tuple(sorted(str(key) for key in qr_data.fields.keys()))
        extra_field_names = tuple(sorted(str(key) for key in qr_data.extras.keys()))
        rollcall_id = qr_data.rollcall_id or ""
        if not rollcall_id:
            missing_required.append("rollcallId")
        if not qr_data.data:
            missing_required.append("data")
        if extra_field_names:
            warnings.append("unknown_fields")
        if missing_required:
            warnings.append("missing_required")
    elif not text.strip():
        missing_required.extend(["rollcallId", "data"])
        warnings.append("empty_payload")

    error_code = _safe_error_code(error)
    if error_code:
        warnings.append(error_code)

    return QrPayloadDiagnostic(
        ok=ok,
        source_kind=source_kind or "unknown",
        path=path,
        encoding=encoding,
        rollcall_id=rollcall_id,
        field_names=field_names,
        extra_field_names=extra_field_names,
        missing_required=tuple(missing_required),
        payload_length=len(text),
        payload_hash=_payload_hash(text) if text else "",
        warnings=tuple(dict.fromkeys(warnings)),
        error=error_code,
    )


def _fields_to_qr_data(fields: Dict[str, Any], raw: str) -> QrCodeData:
    if not fields:
        raise ValueError("Unable to parse TronClass QR payload.")
    known = set(QR_KEYS) | {"rollcall_id", "rollcallID"}
    extras = {key: value for key, value in fields.items() if key not in known}
    return QrCodeData(fields=fields, raw=raw, extras=extras)


def _parse_json_mapping(value: str) -> Dict[str, Any]:
    return _coerce_mapping(json.loads(value))


def _parse_qr_payload_details(raw: str, base_url: str = TRON) -> Tuple[QrCodeData, str, str, str]:
    text = str(raw or "").strip()
    if not text:
        raise ValueError("QR payload is empty.")

    parsed = urlparse(text)
    fields: Dict[str, Any] = {}
    source_kind = "compact"
    path = ""
    encoding = "compact"

    if parsed.scheme and parsed.netloc:
        source_kind = "url"
        path = parsed.path
        if parsed.path not in {"/j", "/scanner-jumper"}:
            raise ValueError("Not a TronClass QR URL.")
        query = parse_qs(parsed.query)
        if "_p" in query and query["_p"]:
            encoding = "_p_json"
            fields = _coerce_mapping(json.loads(query["_p"][0]))
        elif "p" in query and query["p"]:
            encoding = "p_compact"
            fields = parse_compact_payload(query["p"][0])
    elif text.startswith("/j?") or text.startswith("/scanner-jumper?"):
        source_kind = "relative_url"
        parsed_relative = urlparse(text)
        path = parsed_relative.path
        query = parse_qs(parsed_relative.query)
        if "_p" in query and query["_p"]:
            encoding = "_p_json"
            fields = _coerce_mapping(json.loads(query["_p"][0]))
        elif "p" in query and query["p"]:
            encoding = "p_compact"
            fields = parse_compact_payload(query["p"][0])
        else:
            return _parse_qr_payload_details(urljoin(base_url, text), base_url=base_url)
    elif text.startswith("?") or text.startswith("_p=") or text.startswith("p="):
        source_kind = "query"
        query_text = text[1:] if text.startswith("?") else text
        query = parse_qs(query_text)
        if "_p" in query and query["_p"]:
            encoding = "_p_json"
            fields = _coerce_mapping(json.loads(query["_p"][0]))
        elif "p" in query and query["p"]:
            encoding = "p_compact"
            fields = parse_compact_payload(query["p"][0])
    elif text.startswith("{") and text.endswith("}"):
        source_kind = "json"
        encoding = "json"
        fields = _parse_json_mapping(text)
    elif unquote(text).startswith("{") and unquote(text).endswith("}"):
        source_kind = "json"
        encoding = "percent_json"
        fields = _parse_json_mapping(unquote(text))
    else:
        source_kind = "compact"
        encoding = "compact"
        fields = parse_compact_payload(unquote(text))

    return _fields_to_qr_data(fields, text), source_kind, path, encoding


def parse_qr_payload(raw: str, base_url: str = TRON) -> QrCodeData:
    qr_data, _source_kind, _path, _encoding = _parse_qr_payload_details(raw, base_url=base_url)
    return qr_data


def parse_qr_payload_with_diagnostics(raw: str, base_url: str = TRON) -> QrParseResult:
    text = str(raw or "").strip()
    try:
        qr_data, source_kind, path, encoding = _parse_qr_payload_details(text, base_url=base_url)
    except Exception as exc:
        return QrParseResult(
            ok=False,
            data=None,
            diagnostic=build_qr_payload_diagnostic(
                raw=text,
                error=exc,
                source_kind="unknown",
                encoding="",
            ),
        )
    return QrParseResult(
        ok=True,
        data=qr_data,
        diagnostic=build_qr_payload_diagnostic(
            qr_data,
            raw=text,
            source_kind=source_kind,
            path=path,
            encoding=encoding,
        ),
    )


def build_qr_answer_request(
    qr_data: QrCodeData,
    device_id: str,
    base_url: str = TRON,
) -> Tuple[str, Dict[str, Any]]:
    if not qr_data.rollcall_id:
        raise ValueError("QR payload missing rollcallId field.")
    return (
        f"{base_url}/api/rollcall/{qr_data.rollcall_id}/answer_qr_rollcall",
        qr_data.answer_body(device_id),
    )


async def answer_qr_rollcall(
    session: Any,
    qr_data: QrCodeData,
    device_id: str,
    request_ssl: Any = None,
    session_id: str = "",
    base_url: str = TRON,
    capture: Any = None,
) -> Dict[str, Any]:
    url, body = build_qr_answer_request(qr_data, device_id, base_url=base_url)
    headers = {"Content-Type": "application/json"}
    if session_id:
        headers["x-session-id"] = session_id

    request_kwargs: Dict[str, Any] = {"json": body, "headers": headers}
    if request_ssl is not None:
        request_kwargs["ssl"] = request_ssl

    async with session.put(url, **request_kwargs) as resp:
        body_text = await resp.text()
        if capture is not None:
            try:
                capture(url, body, resp.status, dict(resp.headers), body_text)
            except Exception:
                pass
        if resp.status in (200, 201, 204):
            try:
                return json.loads(body_text) if body_text else {"ok": True}
            except ValueError:
                return {"ok": True, "body": body_text}
        if resp.status in (401, 403):
            raise UnauthorizedError("QR 點名期間登入狀態失效。")
        raise UnexpectedResponseError("QR HTTP {}: {}".format(resp.status, _safe_body_preview(body_text)))


def _safe_body_preview(body_text: str, limit: int = 160) -> str:
    text = str(body_text or "").strip()
    if not text:
        return ""
    lowered = text.lower()
    if any(marker in lowered for marker in ("token", "cookie", "session", "password", "passwd", '"data"')):
        return "[redacted response body]"
    return text[:limit]

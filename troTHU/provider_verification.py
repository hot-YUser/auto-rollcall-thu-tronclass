"""Safe provider verification checklist and fixture helpers.

FJU/TKU verification is an internal sanitized ledger. These helpers never store
raw responses, credentials, cookies, QR contents, or number answers, and they do
not change the user-level ready state.
"""

from __future__ import annotations

import json
import re
from typing import Any, Dict, Iterable, List, Mapping, Sequence

try:  # pragma: no cover - script execution fallback
    from troTHU.providers import DEFAULT_PROVIDER, get_provider, provider_support_report
except ImportError:  # pragma: no cover
    from providers import DEFAULT_PROVIDER, get_provider, provider_support_report


FIXTURE_VERSION = "provider-fixture-v1"
VERIFICATION_VALUES = {"verified", "account_pending", "unverified"}
PENDING_VERIFICATION_VALUES = {"account_pending", "unverified"}
SAFE_ENDPOINT_TYPES = {"login", "session", "current_semester", "courses", "rollcalls", "qr", "radar"}
SAFE_STATUSES = {"ok", "skipped", "failed", "warning", "unsupported", "not_tested"}
SENSITIVE_KEY_RE = re.compile(
    r"(authorization|body|cookie|data|number.?code|passwd|password|payload|raw|response|secret|session_id|token)",
    re.IGNORECASE,
)
SENSITIVE_VALUE_RE = re.compile(
    r"(authorization=|cookie=|passwd=|password=|secret=|session=|token=|raw payload|raw response|number code)",
    re.IGNORECASE,
)


class ProviderVerificationError(Exception):
    """Raised for invalid provider verification fixtures."""

    def __init__(self, reason: str, message: str = "") -> None:
        self.reason = reason
        super().__init__(message or reason)


def _provider_config(provider: Any) -> Dict[str, Any]:
    if hasattr(provider, "to_config"):
        return dict(provider.to_config())
    if isinstance(provider, Mapping):
        return dict(provider)
    return get_provider(provider or DEFAULT_PROVIDER).to_config()


def _provider_key(provider: Any) -> str:
    return str(_provider_config(provider).get("key") or DEFAULT_PROVIDER).lower()


def provider_verification_value(provider: Any) -> str:
    raw_value = _provider_config(provider).get("verification")
    if isinstance(raw_value, Mapping):
        raw_value = raw_value.get("verification") or raw_value.get("status")
    value = str(raw_value or "unverified").strip().lower()
    return value if value in VERIFICATION_VALUES else "unverified"


def provider_requires_verification(provider: Any) -> bool:
    return _provider_key(provider) in {"fju", "tku"} and provider_verification_value(provider) in PENDING_VERIFICATION_VALUES


def provider_verification_scope() -> set[str]:
    return {
        item.key
        for item in (get_provider("fju"), get_provider("tku"))
        if provider_requires_verification(item)
    }


# Back-compat alias for callers/tests that still refer to "allowed providers".
ALLOWED_PROVIDERS = provider_verification_scope()


def _safe_text(value: Any, *, limit: int = 120) -> str:
    text = str(value or "").strip()
    if SENSITIVE_VALUE_RE.search(text):
        return "[redacted]"
    if len(text) > limit:
        return text[: limit - 3] + "..."
    return text


def _safe_list(value: Any, *, limit: int = 40) -> List[str]:
    if isinstance(value, str):
        value = [value]
    if not isinstance(value, Iterable):
        return []
    result = []
    for item in value:
        text = _safe_text(item, limit=limit)
        if text:
            result.append(text)
    return result[:20]


def _contains_sensitive_shape(value: Any, path: str = "") -> List[str]:
    findings: List[str] = []
    if isinstance(value, Mapping):
        for key, item in value.items():
            key_text = str(key)
            child_path = "{}.{}".format(path, key_text) if path else key_text
            if SENSITIVE_KEY_RE.search(key_text):
                findings.append("sensitive_key:{}".format(child_path))
            findings.extend(_contains_sensitive_shape(item, child_path))
    elif isinstance(value, list):
        for index, item in enumerate(value):
            findings.extend(_contains_sensitive_shape(item, "{}[{}]".format(path, index)))
    elif isinstance(value, str) and SENSITIVE_VALUE_RE.search(value):
        findings.append("sensitive_value:{}".format(path or "value"))
    return findings


def _checklist_step(step_id: str, title: str, endpoint_type: str, *, expected_fields: Sequence[str]) -> Dict[str, Any]:
    return {
        "id": step_id,
        "title": title,
        "endpoint_type": endpoint_type,
        "expected_safe_fields": list(expected_fields),
        "allowed_statuses": sorted(SAFE_STATUSES),
        "record_only": ["status", "http_status", "field_names", "error_classification", "notes"],
    }


def build_provider_verification_checklist(provider: Any, *, config: Mapping[str, Any] | None = None) -> Dict[str, Any]:
    """Build a manual verification checklist for the internal FJU/TKU ledger."""
    provider_config = _provider_config(provider)
    key = str(provider_config.get("key") or DEFAULT_PROVIDER)
    support = provider_support_report(provider_config, allow_experimental=False)
    verification = provider_verification_value(provider_config)
    capabilities = provider_config.get("capabilities", {})
    if not isinstance(capabilities, Mapping):
        capabilities = {}
    steps = [
        _checklist_step("login_page", "Open login page and confirm reachable form", "login", expected_fields=("form", "method")),
        _checklist_step("session_cookie", "Login manually and confirm session cookie exists", "session", expected_fields=("session_cookie",)),
        _checklist_step("current_semester", "Read current semester metadata", "current_semester", expected_fields=("semester", "academic_year")),
        _checklist_step("courses", "Read my courses list", "courses", expected_fields=("id", "name", "semester_id")),
        _checklist_step("rollcalls", "Read active rollcall list", "rollcalls", expected_fields=("id", "type", "status")),
        _checklist_step("qr_preview", "Parse and preview sanitized QR payload shape", "qr", expected_fields=("rollcall_id", "field_names")),
        _checklist_step("radar_lite", "Check radar lite/answer compatibility shape if provider supports it", "radar", expected_fields=("use_beacon", "beacon_nonce", "distance")),
    ]
    for step in steps:
        endpoint_type = step["endpoint_type"]
        if endpoint_type == "radar":
            step["capability_expected"] = bool(capabilities.get("radar"))
        elif endpoint_type == "qr":
            step["capability_expected"] = bool(capabilities.get("qrcode") or capabilities.get("manual_qr"))
        elif endpoint_type in {"current_semester", "courses"}:
            step["capability_expected"] = bool(capabilities.get("course_discovery"))
        else:
            step["capability_expected"] = True
    return {
        "version": "provider-verification-v1",
        "provider": key,
        "label": str(provider_config.get("label") or key),
        "support_level": support.get("support_level"),
        "verification": verification,
        "daily_ready_after_this": bool(support.get("daily_ready")),
        "fixture_version": FIXTURE_VERSION,
        "steps": steps,
        "forbidden_outputs": [
            "credentials",
            "cookies",
            "tokens",
            "raw_backend_body",
            "complete_qr_payload",
            "number_code_answer",
        ],
        "notes": [
            "internal_verification_ledger_only",
            "does_not_change_user_runtime_ready_state",
            "store_only_sanitized_fixture",
        ],
    }


def build_provider_fixture_template(provider: Any) -> Dict[str, Any]:
    """Return a synthetic sanitized fixture template."""
    provider_config = _provider_config(provider)
    key = str(provider_config.get("key") or DEFAULT_PROVIDER)
    records = [
        {
            "endpoint_type": endpoint_type,
            "status": "not_tested",
            "http_status": 0,
            "field_names": [],
            "error_classification": "",
            "notes": "synthetic placeholder",
        }
        for endpoint_type in ("login", "session", "current_semester", "courses", "rollcalls", "qr", "radar")
    ]
    return {
        "version": FIXTURE_VERSION,
        "provider": key,
        "support_level": str(provider_config.get("support_level") or provider_config.get("status") or "ready"),
        "verification": provider_verification_value(provider_config),
        "source": "synthetic_sanitized_template",
        "records": records,
        "manual_acceptance": {
            "login_verified": False,
            "session_verified": False,
            "courses_verified": False,
            "rollcalls_verified": False,
            "qr_verified": False,
            "radar_verified": False,
        },
    }


def _record_summary(record: Mapping[str, Any], index: int) -> Dict[str, Any]:
    endpoint_type = _safe_text(record.get("endpoint_type"), limit=40)
    status = _safe_text(record.get("status"), limit=40)
    try:
        http_status = int(record.get("http_status") or 0)
    except (TypeError, ValueError):
        http_status = 0
    return {
        "index": index,
        "endpoint_type": endpoint_type,
        "status": status,
        "http_status": http_status,
        "field_names": _safe_list(record.get("field_names"), limit=80),
        "error_classification": _safe_text(record.get("error_classification"), limit=80),
        "notes": _safe_text(record.get("notes"), limit=120),
    }


def validate_provider_fixture(value: Any, *, provider: str = "") -> Dict[str, Any]:
    """Validate a sanitized provider verification fixture."""
    if isinstance(value, str):
        try:
            value = json.loads(value)
        except ValueError:
            return {"ok": False, "status": "fixture_invalid", "reason": "invalid_json", "errors": ["invalid_json"]}
    if not isinstance(value, Mapping):
        return {"ok": False, "status": "fixture_invalid", "reason": "invalid_fixture", "errors": ["not_mapping"]}
    findings = _contains_sensitive_shape(value)
    errors: List[str] = list(findings)
    version = str(value.get("version") or "")
    if version != FIXTURE_VERSION:
        errors.append("version_mismatch")
    provider_key = str(value.get("provider") or provider or "").strip().lower()
    if provider and provider_key != str(provider).strip().lower():
        errors.append("provider_mismatch")
    if not provider_requires_verification(provider_key):
        errors.append("provider_not_in_verification_scope")
    records = value.get("records")
    if not isinstance(records, list) or not records:
        errors.append("records_missing")
        records = []
    summaries: List[Dict[str, Any]] = []
    endpoint_types = set()
    for index, record in enumerate(records):
        if not isinstance(record, Mapping):
            errors.append("record_not_mapping:{}".format(index))
            continue
        summary = _record_summary(record, index)
        summaries.append(summary)
        endpoint_type = summary["endpoint_type"]
        endpoint_types.add(endpoint_type)
        if endpoint_type not in SAFE_ENDPOINT_TYPES:
            errors.append("endpoint_type_invalid:{}".format(index))
        if summary["status"] not in SAFE_STATUSES:
            errors.append("status_invalid:{}".format(index))
    missing = sorted(SAFE_ENDPOINT_TYPES - endpoint_types)
    warnings = ["endpoint_missing:{}".format(item) for item in missing]
    ok = not errors
    return {
        "ok": ok,
        "status": "fixture_valid" if ok else "fixture_invalid",
        "reason": "ok" if ok else "validation_failed",
        "provider": provider_key,
        "record_count": len(summaries),
        "records": summaries,
        "errors": errors,
        "warnings": warnings,
    }


def summarize_provider_verification(provider: Any, *, fixture: Any = None) -> Dict[str, Any]:
    """Return provider verification state without changing support level."""
    provider_config = _provider_config(provider)
    key = str(provider_config.get("key") or DEFAULT_PROVIDER)
    verification = provider_verification_value(provider_config)
    support = provider_support_report(provider_config, allow_experimental=False)
    if fixture is None:
        if verification == "verified":
            return {
                "provider": key,
                "status": "verified",
                "verification": verification,
                "daily_ready_after_this": bool(support.get("daily_ready")),
                "fixture_valid": False,
                "warnings": ["provider_verification_already_verified"],
            }
        return {
            "provider": key,
            "status": verification,
            "verification": verification,
            "daily_ready_after_this": bool(support.get("daily_ready")),
            "fixture_valid": False,
            "warnings": [],
        }
    validation = validate_provider_fixture(fixture, provider=key)
    return {
        "provider": key,
        "status": validation["status"],
        "verification": verification,
        "daily_ready_after_this": bool(support.get("daily_ready")),
        "fixture_valid": bool(validation["ok"]),
        "record_count": validation.get("record_count", 0),
        "errors": validation.get("errors", []),
        "warnings": validation.get("warnings", []),
    }

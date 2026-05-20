"""FJU/TKU sanitized fixture review helpers."""

from __future__ import annotations

import json
from pathlib import Path
from typing import Any, Dict, List, Mapping

try:  # pragma: no cover - script execution fallback
    from troTHU.provider_ready_gate import REQUIRED_ENDPOINTS, build_provider_ready_gate
    from troTHU.provider_verification import (
        ALLOWED_PROVIDERS,
        SAFE_ENDPOINT_TYPES,
        build_provider_fixture_template,
        validate_provider_fixture,
    )
    from troTHU.providers import DEFAULT_PROVIDER, get_provider, provider_support_report
except ImportError:  # pragma: no cover
    from provider_ready_gate import REQUIRED_ENDPOINTS, build_provider_ready_gate
    from provider_verification import ALLOWED_PROVIDERS, SAFE_ENDPOINT_TYPES, build_provider_fixture_template, validate_provider_fixture
    from providers import DEFAULT_PROVIDER, get_provider, provider_support_report


REVIEW_VERSION = "provider-fixture-review-v1"


def _provider_key(provider: Any) -> str:
    if hasattr(provider, "to_config"):
        provider = provider.to_config()
    if isinstance(provider, Mapping):
        return str(provider.get("key") or DEFAULT_PROVIDER).strip().lower()
    return str(provider or DEFAULT_PROVIDER).strip().lower()


def _safe_text(value: Any, *, limit: int = 160) -> str:
    text = str(value or "").strip()
    lowered = text.lower()
    for marker in ("authorization", "cookie", "password", "payload", "raw", "secret", "session", "token", "number code"):
        if marker in lowered:
            return "[redacted]"
    if len(text) > limit:
        return text[: limit - 3] + "..."
    return text


def _records_by_endpoint(validation: Mapping[str, Any]) -> Dict[str, Mapping[str, Any]]:
    records: Dict[str, Mapping[str, Any]] = {}
    for record in validation.get("records", []) or []:
        if isinstance(record, Mapping):
            endpoint = str(record.get("endpoint_type") or "")
            if endpoint:
                records[endpoint] = record
    return records


def _manual_acceptance(fixture: Any) -> Dict[str, bool]:
    if not isinstance(fixture, Mapping):
        return {}
    value = fixture.get("manual_acceptance")
    if not isinstance(value, Mapping):
        return {}
    return {str(key): bool(item) for key, item in value.items()}


def _evidence_matrix(validation: Mapping[str, Any], fixture: Any) -> List[Dict[str, Any]]:
    records = _records_by_endpoint(validation)
    manual = _manual_acceptance(fixture)
    matrix = []
    for endpoint in sorted(SAFE_ENDPOINT_TYPES):
        record = records.get(endpoint, {})
        required = endpoint in set(REQUIRED_ENDPOINTS)
        acceptance_key = {
            "login": "login_verified",
            "session": "session_verified",
            "courses": "courses_verified",
            "rollcalls": "rollcalls_verified",
            "qr": "qr_verified",
        }.get(endpoint, "")
        matrix.append(
            {
                "endpoint_type": endpoint,
                "required": required,
                "present": bool(record),
                "status": _safe_text(record.get("status") if isinstance(record, Mapping) else ""),
                "http_status": int(record.get("http_status") or 0) if isinstance(record, Mapping) else 0,
                "manual_acceptance": bool(manual.get(acceptance_key)) if acceptance_key else None,
            }
        )
    return matrix


def build_provider_fixture_review_template(provider: Any) -> Dict[str, Any]:
    template = build_provider_fixture_template(provider)
    template["review_version"] = REVIEW_VERSION
    template["review_notes"] = [
        "synthetic_template_only",
        "replace statuses with sanitized field names and manual acceptance booleans",
        "do_not_include_sensitive_values",
    ]
    return template


def build_provider_fixture_review(
    provider: Any,
    *,
    fixture: Any = None,
    config: Mapping[str, Any] | None = None,
) -> Dict[str, Any]:
    key = _provider_key(provider)
    support = provider_support_report(get_provider(key).to_config(), allow_experimental=False) if key else {}
    if key not in ALLOWED_PROVIDERS:
        return {
            "version": REVIEW_VERSION,
            "provider": key,
            "status": "not_required" if key == DEFAULT_PROVIDER else "unsupported_provider",
            "candidate_ready_for_human_review": False,
            "daily_ready_after_review": bool(support.get("daily_ready")),
            "blockers": [] if key == DEFAULT_PROVIDER else ["provider_not_in_scope"],
            "recommendation": "keep_existing_ready_path" if key == DEFAULT_PROVIDER else "unsupported_provider",
        }
    if fixture is None:
        return {
            "version": REVIEW_VERSION,
            "provider": key,
            "status": "not_reviewed",
            "candidate_ready_for_human_review": False,
            "daily_ready_after_review": False,
            "support_level": support.get("support_level", "experimental"),
            "blockers": ["fixture_missing"],
            "evidence_matrix": _evidence_matrix({"records": []}, None),
            "recommendation": "collect_sanitized_fixture",
        }
    validation = validate_provider_fixture(fixture, provider=key)
    gate = build_provider_ready_gate(key, fixture=fixture, config=config or {})
    sensitive_findings = [
        item
        for item in validation.get("errors", [])
        if str(item).startswith("sensitive_") or "raw" in str(item).lower() or "token" in str(item).lower()
    ]
    blockers = sorted(set(list(gate.get("blockers", [])) + ([] if validation.get("ok") else ["fixture_invalid"])))
    candidate = bool(validation.get("ok") and gate.get("ready_candidate"))
    return {
        "version": REVIEW_VERSION,
        "provider": key,
        "status": "candidate_ready_for_human_review" if candidate else "blocked",
        "candidate_ready_for_human_review": candidate,
        "daily_ready_after_review": False,
        "support_level": support.get("support_level", "experimental"),
        "validation_status": validation.get("status"),
        "ready_gate_status": gate.get("status"),
        "blockers": blockers,
        "warnings": sorted(set(list(validation.get("warnings", [])) + list(gate.get("warnings", [])))),
        "sanitizer_findings": sensitive_findings,
        "manual_acceptance": _manual_acceptance(fixture),
        "evidence_matrix": _evidence_matrix(validation, fixture),
        "recommendation": "human_review_only_no_auto_promotion" if candidate else "keep_experimental",
        "promotes_provider": False,
    }


def _read_json(path: Path) -> Any:
    return json.loads(path.read_text(encoding="utf-8"))


def review_provider_fixture_file(path: Path | str, *, provider: str = "") -> Dict[str, Any]:
    fixture_path = Path(path)
    try:
        fixture = _read_json(fixture_path)
    except Exception:
        return {
            "version": REVIEW_VERSION,
            "provider": provider,
            "status": "fixture_unreadable",
            "candidate_ready_for_human_review": False,
            "daily_ready_after_review": False,
            "blockers": ["fixture_unreadable"],
            "path": fixture_path.name,
        }
    key = provider or (fixture.get("provider") if isinstance(fixture, Mapping) else "")
    report = build_provider_fixture_review(key, fixture=fixture)
    report["path"] = fixture_path.name
    return report


def review_provider_fixture_dir(path: Path | str) -> Dict[str, Any]:
    directory = Path(path)
    reports = []
    if directory.exists() and directory.is_dir():
        for fixture_path in sorted(directory.glob("*.json")):
            reports.append(review_provider_fixture_file(fixture_path))
    return {
        "version": REVIEW_VERSION,
        "status": "ok" if reports else "empty",
        "count": len(reports),
        "reports": reports,
        "candidate_count": sum(1 for report in reports if report.get("candidate_ready_for_human_review")),
    }


def format_provider_fixture_review(report: Mapping[str, Any]) -> List[str]:
    lines = [
        "Provider fixture review: {} ({})".format(report.get("provider", ""), report.get("status", "unknown")),
        "Candidate for human review: {}".format("yes" if report.get("candidate_ready_for_human_review") else "no"),
        "Daily-ready after review: {}".format("yes" if report.get("daily_ready_after_review") else "no"),
    ]
    blockers = report.get("blockers") or []
    if blockers:
        lines.append("Blockers: {}".format(", ".join(str(item) for item in blockers[:12])))
    return lines

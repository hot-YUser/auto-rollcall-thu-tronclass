"""Provider ready-gate evaluation for the internal FJU/TKU ledger.

The ready gate is deliberately conservative. It can say a sanitized fixture is
ready for human review, but it never mutates provider configuration or changes
the user-level ready state.
"""

from __future__ import annotations

from typing import Any, Dict, Iterable, List, Mapping

try:  # pragma: no cover - script execution fallback
    from troTHU.provider_verification import (
        PENDING_VERIFICATION_VALUES,
        provider_requires_verification,
        provider_verification_value,
        validate_provider_fixture,
    )
    from troTHU.providers import DEFAULT_PROVIDER, get_provider, provider_support_report
except ImportError:  # pragma: no cover
    from provider_verification import (
        PENDING_VERIFICATION_VALUES,
        provider_requires_verification,
        provider_verification_value,
        validate_provider_fixture,
    )
    from providers import DEFAULT_PROVIDER, get_provider, provider_support_report


READY_GATE_VERSION = "provider-ready-gate-v1"
REQUIRED_ENDPOINTS = ("login", "session", "current_semester", "courses", "rollcalls", "qr")
OPTIONAL_ENDPOINTS = ("radar",)
REQUIRED_ACCEPTANCE_FLAGS = (
    "login_verified",
    "session_verified",
    "courses_verified",
    "rollcalls_verified",
    "qr_verified",
)


def _provider_config(provider: Any) -> Dict[str, Any]:
    if hasattr(provider, "to_config"):
        return dict(provider.to_config())
    if isinstance(provider, Mapping):
        return dict(provider)
    return get_provider(provider or DEFAULT_PROVIDER).to_config()


def _provider_key(provider: Any) -> str:
    return str(_provider_config(provider).get("key") or DEFAULT_PROVIDER).lower()


def _safe_bool(value: Any) -> bool:
    if isinstance(value, bool):
        return value
    text = str(value or "").strip().lower()
    return text in {"1", "true", "yes", "y", "on", "ok"}


def _is_2xx(value: Any) -> bool:
    try:
        status = int(value)
    except (TypeError, ValueError):
        return False
    return 200 <= status < 300


def _criterion(criterion_id: str, ok: bool, message: str, *, required: bool = True) -> Dict[str, Any]:
    return {
        "id": criterion_id,
        "status": "ok" if ok else ("fail" if required else "warn"),
        "required": bool(required),
        "message": str(message or "")[:160],
    }


def _manual_acceptance(value: Any) -> Dict[str, bool]:
    if not isinstance(value, Mapping):
        return {name: False for name in REQUIRED_ACCEPTANCE_FLAGS}
    return {name: _safe_bool(value.get(name)) for name in REQUIRED_ACCEPTANCE_FLAGS}


def _records_by_endpoint(validation: Mapping[str, Any]) -> Dict[str, Mapping[str, Any]]:
    records: Dict[str, Mapping[str, Any]] = {}
    for record in validation.get("records", []) or []:
        if isinstance(record, Mapping):
            endpoint_type = str(record.get("endpoint_type") or "")
            if endpoint_type:
                records[endpoint_type] = record
    return records


def build_provider_ready_acceptance_template(provider: Any) -> Dict[str, Any]:
    """Return a human-review acceptance template for the internal ledger."""
    config = _provider_config(provider)
    key = str(config.get("key") or DEFAULT_PROVIDER)
    return {
        "version": READY_GATE_VERSION,
        "provider": key,
        "manual_acceptance": {name: False for name in REQUIRED_ACCEPTANCE_FLAGS},
        "required_endpoint_status": {endpoint: "ok" for endpoint in REQUIRED_ENDPOINTS},
        "optional_endpoint_status": {endpoint: "ok_or_unsupported" for endpoint in OPTIONAL_ENDPOINTS},
        "review_notes": [
            "review_sanitized_fixture_only",
            "confirm_login_session_course_rollcall_qr_flow_manually",
            "do_not_commit_credentials_cookies_or_backend_bodies",
        ],
    }


def build_provider_ready_gate(provider: Any, *, fixture: Any = None, config: Mapping[str, Any] | None = None) -> Dict[str, Any]:
    """Evaluate whether a pending-verification provider has enough evidence."""
    provider_config = _provider_config(provider)
    key = str(provider_config.get("key") or DEFAULT_PROVIDER).lower()
    verification = provider_verification_value(provider_config)
    allow_experimental = False
    if isinstance(config, Mapping):
        provider_section = config.get("provider")
        if isinstance(provider_section, Mapping):
            allow_experimental = _safe_bool(provider_section.get("allow_experimental"))
    support = provider_support_report(provider_config, allow_experimental=allow_experimental)

    if not provider_requires_verification(provider_config):
        status = "not_required" if verification == "verified" else "unsupported_provider"
        ready_candidate = verification == "verified"
        return {
            "version": READY_GATE_VERSION,
            "provider": key,
            "status": status,
            "ready_candidate": ready_candidate,
            "promotes_provider": False,
            "daily_ready_after_gate": bool(support.get("daily_ready")),
            "support_level": support.get("support_level"),
            "verification": verification,
            "criteria": [_criterion("verification", ready_candidate, "provider verification ledger is already verified", required=False)],
            "blockers": [] if ready_candidate else ["provider_not_in_scope"],
            "warnings": ["provider_verification_already_verified"] if ready_candidate else [],
            "acceptance_schema": build_provider_ready_acceptance_template(provider_config),
        }

    criteria: List[Dict[str, Any]] = [
        _criterion("provider_scope", True, "provider is in internal FJU/TKU verification scope"),
        _criterion("verification", verification in PENDING_VERIFICATION_VALUES, "provider verification ledger is pending"),
        _criterion("no_runtime_change", True, "gate does not modify provider registry or runtime readiness"),
    ]
    blockers: List[str] = []
    warnings: List[str] = []
    validation: Dict[str, Any] = {}
    manual_flags = {name: False for name in REQUIRED_ACCEPTANCE_FLAGS}

    if fixture is None:
        criteria.append(_criterion("sanitized_fixture", False, "sanitized fixture is required"))
        blockers.append("fixture_missing")
    else:
        validation = validate_provider_fixture(fixture, provider=key)
        fixture_ok = bool(validation.get("ok"))
        criteria.append(_criterion("sanitized_fixture", fixture_ok, validation.get("status", "fixture_invalid")))
        if not fixture_ok:
            blockers.append("fixture_invalid")
        if isinstance(fixture, Mapping):
            manual_flags = _manual_acceptance(fixture.get("manual_acceptance"))

    for flag, accepted in manual_flags.items():
        criteria.append(_criterion("acceptance_{}".format(flag), accepted, "{} must be confirmed".format(flag)))
        if not accepted:
            blockers.append("acceptance_missing:{}".format(flag))

    records = _records_by_endpoint(validation)
    for endpoint in REQUIRED_ENDPOINTS:
        record = records.get(endpoint, {})
        endpoint_ok = record.get("status") == "ok" and _is_2xx(record.get("http_status"))
        criteria.append(_criterion("endpoint_{}".format(endpoint), endpoint_ok, "{} endpoint must be ok with 2xx".format(endpoint)))
        if not endpoint_ok:
            blockers.append("endpoint_not_ready:{}".format(endpoint))
    for endpoint in OPTIONAL_ENDPOINTS:
        record = records.get(endpoint, {})
        optional_ok = record.get("status") in {"ok", "unsupported", "skipped", "not_tested"} or not record
        criteria.append(_criterion("endpoint_{}".format(endpoint), optional_ok, "{} may be ok or unsupported".format(endpoint), required=False))
        if not optional_ok:
            warnings.append("optional_endpoint_review:{}".format(endpoint))

    blocking_ids = [item["id"] for item in criteria if item.get("required") and item.get("status") != "ok"]
    ready_candidate = not blocking_ids and not blockers
    return {
        "version": READY_GATE_VERSION,
        "provider": key,
        "status": "candidate_ready" if ready_candidate else "blocked",
        "ready_candidate": ready_candidate,
        "promotes_provider": False,
        "daily_ready_after_gate": bool(support.get("daily_ready")),
        "support_level": support.get("support_level"),
        "verification": verification,
        "criteria": criteria,
        "blockers": sorted(set(blockers)),
        "warnings": sorted(set(warnings + list(validation.get("warnings", []) if validation else []))),
        "validation_status": validation.get("status", "not_evaluated") if validation else "not_evaluated",
        "acceptance_schema": build_provider_ready_acceptance_template(provider_config),
        "next_actions": [
            "collect_sanitized_fixture_for_internal_ledger",
            "mark_provider_verification_verified_after_manual_review",
            "do_not_commit_raw_responses_or_credentials",
        ],
    }


def format_provider_ready_gate(report: Mapping[str, Any]) -> List[str]:
    """Format a compact provider ready-gate summary."""
    lines = [
        "Provider ready gate: {} ({})".format(report.get("provider", ""), report.get("status", "unknown")),
        "Ready candidate: {}".format("yes" if report.get("ready_candidate") else "no"),
        "Promotes provider: {}".format("yes" if report.get("promotes_provider") else "no"),
    ]
    blockers = report.get("blockers") or []
    if blockers:
        lines.append("Blockers:")
        for blocker in blockers[:20]:
            lines.append(" - {}".format(blocker))
    else:
        lines.append("Blockers: none")
    return lines

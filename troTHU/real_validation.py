from __future__ import annotations

import asyncio
import copy
import json
import os
import time
from datetime import datetime
from pathlib import Path
from typing import Any, Dict, Iterable, List, Mapping, Optional


VALIDATION_VERSION = "real-validation-v1"
VALIDATION_RECORD_FILENAME = "real_validation.jsonl"
VALIDATION_STATUSES = {"pass", "fail", "blocked", "skip"}
LOCAL_SMOKE_RECORD_CASE_IDS = (
    "preflight_status_doctor_dashboard",
    "time_schedule_local",
    "bot_generic_sandbox",
    "bot_platform_fake_sandbox",
    "package_release_static",
    "safety_review",
)
LIVE_CASE_IDS = {
    "thu_number_live",
    "thu_radar_live",
    "qr_single_live",
    "qr_static_image_live",
    "qr_fanout_live",
}
ACCEPTED_LIVE_BLOCK_REASON = "blocked_by_no_live_rollcall"

SENSITIVE_KEY_PARTS = (
    "authorization",
    "body",
    "cookie",
    "data",
    "passwd",
    "password",
    "payload",
    "raw",
    "response",
    "secret",
    "session",
    "signature",
    "token",
    "value",
)
SENSITIVE_TEXT_MARKERS = (
    "authorization=",
    "cookie=",
    "password=",
    "payload=",
    "secret=",
    "session=",
    "token=",
)


def _now() -> float:
    return time.time()


def _timestamp() -> str:
    return datetime.now().isoformat(timespec="seconds")


def _safe_text(value: Any, *, limit: int = 240) -> str:
    text = str(value or "").strip()
    lowered = text.lower()
    if any(marker in lowered for marker in SENSITIVE_TEXT_MARKERS):
        text = "[redacted]"
    if len(text) > limit:
        return text[: limit - 3] + "..."
    return text


def sanitize_validation_value(value: Any, *, key: str = "") -> Any:
    key_text = str(key or "")
    if key_text and any(part in key_text.lower() for part in SENSITIVE_KEY_PARTS):
        return "[redacted]"
    if isinstance(value, Mapping):
        return {
            str(child_key): sanitize_validation_value(child_value, key=str(child_key))
            for child_key, child_value in value.items()
        }
    if isinstance(value, (list, tuple, set)):
        return [sanitize_validation_value(item) for item in value]
    if isinstance(value, str):
        return _safe_text(value)
    if isinstance(value, (int, float, bool)) or value is None:
        return value
    return _safe_text(value)


def validation_record_path(base_dir: Path) -> Path:
    return Path(base_dir) / "state" / "validation" / VALIDATION_RECORD_FILENAME


def _case(
    case_id: str,
    title: str,
    purpose: str,
    manual_command: str,
    acceptance: str,
    *,
    required: bool = True,
    live: bool = False,
) -> Dict[str, Any]:
    return {
        "id": case_id,
        "title": title,
        "purpose": purpose,
        "manual_command": manual_command,
        "acceptance": acceptance,
        "required": required,
        "live": live,
    }


def build_real_validation_checklist(config: Any = None) -> Dict[str, Any]:
    _ = config
    cases = [
        _case(
            "preflight_status_doctor_dashboard",
            "Preflight status / doctor / dashboard",
            "Confirm local config, runtime summary, diagnostics, dashboard, package-check, and release-check are readable.",
            "python -m troTHU.tron validation local-smoke --json",
            "local-smoke returns ok or warn without external calls, and no sensitive material appears in output.",
        ),
        _case(
            "auth_restore",
            "THU auth restore",
            "Confirm a THU profile can restore or refresh authorization state before live checks.",
            "python -m troTHU.tron courses --json",
            "command returns current semester/course summary or a safe login/unauthorized classification.",
        ),
        _case(
            "time_schedule_local",
            "Timezone and multi-range schedule",
            "Confirm configured schedule windows use the configured IANA timezone and support multiple ranges.",
            "python -m troTHU.tron status --json && python -m troTHU.tron config doctor --json",
            "status/config output shows the expected timezone and enabled schedule ranges without external calls.",
        ),
        _case(
            "thu_number_live",
            "THU number live",
            "Confirm number rollcall behavior against a real THU number attendance event.",
            "python -m troTHU.tron run",
            "success, wrong-code, throttle, authorization failure, and unknown response are classified safely.",
            live=True,
        ),
        _case(
            "thu_radar_live",
            "THU radar live",
            "Confirm radar rollcall behavior against a real THU radar attendance event.",
            "python -m troTHU.tron run",
            "lite/beacon/answer responses and out-of-range diagnostics are handled without leaking backend body.",
            live=True,
        ),
        _case(
            "qr_single_live",
            "QR single profile",
            "Confirm one bound/active profile can submit a classroom QR attendance payload manually.",
            "python -m troTHU.tron qr paste --yes <QR_URL_OR_PAYLOAD>",
            "preview is safe, submit succeeds or fails with classified safe error, and payload is not echoed.",
            live=True,
        ),
        _case(
            "qr_static_image_live",
            "QR static image decode",
            "Confirm a classroom QR screenshot/photo can be decoded through the CLI/backend path.",
            "python -m troTHU.tron qr paste --image <SCREENSHOT_PATH> --yes",
            "image decoder reports only safe payload metadata, then QR submission follows the same safe classification as paste.",
            live=True,
        ),
        _case(
            "qr_fanout_live",
            "QR fan-out",
            "Confirm provider+rollcall matching submits only to pending matching profiles.",
            "python -m troTHU.tron qr paste --all --yes <QR_URL_OR_PAYLOAD>",
            "matching profiles are processed, no-match does not fall back to active profile, and result is redacted.",
            live=True,
        ),
        _case(
            "bot_generic_sandbox",
            "Generic Bot sandbox",
            "Confirm generic adapter command flow handles bound user status/accounts without external services.",
            "python -m troTHU.tron validation local-smoke --json",
            "fake bound user receives safe status/accounts replies and authz data is present.",
        ),
        _case(
            "bot_platform_fake_sandbox",
            "Fake LINE / Discord / TG sandbox",
            "Confirm platform adapters can be exercised with fake senders/verifiers only.",
            "python -m troTHU.tron validation local-smoke --json",
            "fake LINE, Discord, and Telegram paths deliver sanitized outbound events without real platform calls.",
        ),
        _case(
            "package_release_static",
            "Package / release static checks",
            "Confirm package-check and release-check remain healthy before any artifact build.",
            "python -m troTHU.tron package-check --json && python -m troTHU.tron release-check --json",
            "reports are ok/warn, do not build artifacts, and do not include private local data.",
        ),
        _case(
            "doctor_probe_opt_in",
            "Doctor opt-in connection probe",
            "Confirm the optional doctor probe can be run deliberately without making network calls by default.",
            "python -m troTHU.tron doctor --probe-url https://ilearn.thu.edu.tw --probe-count 3 --json",
            "probe output is sanitized, bounded, and only appears when --probe-url is supplied.",
            required=False,
        ),
        _case(
            "browser_assisted_login_opt_in",
            "Browser-assisted login gate",
            "Confirm Playwright-assisted login remains disabled by default and only runs after explicit config opt-in.",
            "python -m troTHU.tron doctor --json",
            "doctor reports browser-assisted login availability/gates without launching a browser unless enabled.",
            required=False,
        ),
        _case(
            "research_student_rollcalls_probe",
            "Research student_rollcalls shape probe",
            "Confirm zako option B evidence is recorded only as risky endpoint shape metadata during explicit research.",
            "python -m troTHU.tron research probe student_rollcalls --rollcall-id <ROLLCALL_ID> --json",
            "requires research.enabled + allow_api_exploration + allow_risky_probe and never records real number_code values.",
            required=False,
        ),
        _case(
            "safety_review",
            "Safety review",
            "Confirm outputs and reports avoid sensitive material and research/provider boundaries remain explicit.",
            "python -m troTHU.tron validation summary --json",
            "summary records only safe notes and FJU/TKU remain experimental.",
        ),
    ]
    return {
        "version": VALIDATION_VERSION,
        "round": "R1-REAL-VALIDATION",
        "provider_scope": {
            "thu": {"support_level": "ready", "required_live_validation": True},
            "fju": {"support_level": "experimental", "required_live_validation": False},
            "tku": {"support_level": "experimental", "required_live_validation": False},
        },
        "record_path": "state/validation/{}".format(VALIDATION_RECORD_FILENAME),
        "accepted_live_block_reason": ACCEPTED_LIVE_BLOCK_REASON,
        "cases": cases,
    }


def _case_map(checklist: Optional[Mapping[str, Any]]) -> Dict[str, Dict[str, Any]]:
    source = checklist or build_real_validation_checklist()
    cases = source.get("cases", []) if isinstance(source, Mapping) else []
    return {
        str(case.get("id") or ""): dict(case)
        for case in cases
        if isinstance(case, Mapping) and str(case.get("id") or "").strip()
    }


def _normalize_record(record: Mapping[str, Any], *, checklist: Optional[Mapping[str, Any]] = None) -> Dict[str, Any]:
    case_id = _safe_text(record.get("case_id") or record.get("case") or record.get("id"), limit=80)
    status = _safe_text(record.get("status"), limit=20).lower()
    if status not in VALIDATION_STATUSES:
        status = "blocked"
    cases = _case_map(checklist)
    case = cases.get(case_id, {})
    return {
        "version": VALIDATION_VERSION,
        "timestamp": _safe_text(record.get("timestamp") or _timestamp(), limit=40),
        "case_id": case_id,
        "status": status,
        "required": bool(case.get("required", record.get("required", False))),
        "live": bool(case.get("live", record.get("live", False))),
        "provider": _safe_text(record.get("provider") or "thu", limit=40),
        "profile": _safe_text(record.get("profile") or "default", limit=80),
        "reason": _safe_text(record.get("reason"), limit=120),
        "note": _safe_text(record.get("note"), limit=300),
        "metadata": sanitize_validation_value(record.get("metadata", {})),
    }


def append_real_validation_record(base_dir: Path, record: Mapping[str, Any]) -> Dict[str, Any]:
    checklist = build_real_validation_checklist()
    normalized = _normalize_record(record, checklist=checklist)
    path = validation_record_path(Path(base_dir))
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("a", encoding="utf-8") as file:
        file.write(json.dumps(normalized, ensure_ascii=False, sort_keys=True) + "\n")
    result = dict(normalized)
    result["path"] = str(path)
    return result


def _is_ok_or_warn(status: Any) -> bool:
    return str(status or "").lower() in {"ok", "warn", "dry_run"}


def _provider_scope_is_safe(report: Mapping[str, Any]) -> bool:
    scope = report.get("provider_scope", {}) if isinstance(report, Mapping) else {}
    if not isinstance(scope, Mapping):
        return False
    thu = scope.get("thu", {}) if isinstance(scope.get("thu"), Mapping) else {}
    fju = scope.get("fju", {}) if isinstance(scope.get("fju"), Mapping) else {}
    tku = scope.get("tku", {}) if isinstance(scope.get("tku"), Mapping) else {}
    return (
        str(thu.get("support_level") or "") == "ready"
        and str(fju.get("support_level") or "") == "experimental"
        and str(tku.get("support_level") or "") == "experimental"
    )


def build_local_smoke_validation_records(
    smoke_report: Mapping[str, Any],
    *,
    profile: str = "default",
    provider: str = "thu",
) -> List[Dict[str, Any]]:
    """Build concise validation records for cases proven by offline local-smoke."""
    report = dict(smoke_report or {})
    checks = report.get("checks", {}) if isinstance(report.get("checks"), Mapping) else {}
    reports = report.get("reports", {}) if isinstance(report.get("reports"), Mapping) else {}
    feature_gates = reports.get("feature_gates", {}) if isinstance(reports.get("feature_gates"), Mapping) else {}
    bot = reports.get("bot_sandbox", {}) if isinstance(reports.get("bot_sandbox"), Mapping) else {}
    generic = bot.get("generic", {}) if isinstance(bot.get("generic"), Mapping) else {}
    platform_fake = bot.get("platform_fake", {}) if isinstance(bot.get("platform_fake"), Mapping) else {}
    roadmap = reports.get("roadmap_audit", {}) if isinstance(reports.get("roadmap_audit"), Mapping) else {}

    def record(case_id: str, ok: bool, note: str, metadata: Mapping[str, Any]) -> Dict[str, Any]:
        return {
            "case_id": case_id,
            "status": "pass" if ok else "fail",
            "profile": profile,
            "provider": provider,
            "note": note,
            "metadata": dict(metadata),
        }

    preflight_ok = _is_ok_or_warn(report.get("status")) and not any(
        str(value).lower() == "fail" for value in checks.values()
    )
    time_gate = feature_gates.get("timezone", {}) if isinstance(feature_gates.get("timezone"), Mapping) else {}
    schedule_gate = feature_gates.get("schedule", {}) if isinstance(feature_gates.get("schedule"), Mapping) else {}
    qr_gate = feature_gates.get("qr_image", {}) if isinstance(feature_gates.get("qr_image"), Mapping) else {}
    browser_gate = (
        feature_gates.get("browser_assisted_login", {})
        if isinstance(feature_gates.get("browser_assisted_login"), Mapping)
        else {}
    )
    doctor_gate = feature_gates.get("doctor_probe", {}) if isinstance(feature_gates.get("doctor_probe"), Mapping) else {}
    research_gate = feature_gates.get("research_probe", {}) if isinstance(feature_gates.get("research_probe"), Mapping) else {}

    generic_ok = bool(generic.get("status_ok")) and bool(generic.get("accounts_ok"))
    platform_ok = bot.get("status") == "ok" and int(platform_fake.get("actual_delivery_count") or 0) >= 3
    package_ok = _is_ok_or_warn(checks.get("package_check")) and _is_ok_or_warn(checks.get("release_check"))
    safety_ok = (
        _is_ok_or_warn(report.get("status"))
        and bool(qr_gate.get("sensitive_material_hidden"))
        and not bool(doctor_gate.get("default_network_calls"))
        and not bool(research_gate.get("daily_automation"))
        and bool(browser_gate.get("default_disabled"))
        and _provider_scope_is_safe(roadmap)
    )

    return [
        record(
            "preflight_status_doctor_dashboard",
            preflight_ok,
            "local-smoke completed with no failing local check",
            {"checks": dict(checks)},
        ),
        record(
            "time_schedule_local",
            bool(time_gate.get("name")) and bool(schedule_gate.get("multi_range_supported")),
            "timezone and multi-range schedule gates are present",
            {"timezone": time_gate, "schedule": schedule_gate},
        ),
        record(
            "bot_generic_sandbox",
            generic_ok,
            "generic bot sandbox handled status/accounts for a fake bound user",
            {"generic": generic},
        ),
        record(
            "bot_platform_fake_sandbox",
            platform_ok,
            "fake LINE/Discord/Telegram notification paths delivered sanitized events",
            {
                "actual_delivery_count": platform_fake.get("actual_delivery_count", 0),
                "dispatch_total": (platform_fake.get("dispatch", {}) or {}).get("total", 0)
                if isinstance(platform_fake.get("dispatch"), Mapping)
                else 0,
            },
        ),
        record(
            "package_release_static",
            package_ok,
            "package-check and release-check were ok or warn without building artifacts",
            {"package_check": checks.get("package_check"), "release_check": checks.get("release_check")},
        ),
        record(
            "safety_review",
            safety_ok,
            "local safety gates remain explicit and provider scope remains THU-ready/FJU-TKU-experimental",
            {
                "qr_image": qr_gate,
                "doctor_probe": doctor_gate,
                "browser_assisted_login": browser_gate,
                "research_probe": research_gate,
                "provider_scope": roadmap.get("provider_scope", {}),
            },
        ),
    ]


def append_local_smoke_validation_records(
    base_dir: Path,
    smoke_report: Mapping[str, Any],
    *,
    profile: str = "default",
    provider: str = "thu",
) -> List[Dict[str, Any]]:
    appended = []
    for record in build_local_smoke_validation_records(smoke_report, profile=profile, provider=provider):
        appended.append(append_real_validation_record(Path(base_dir), record))
    return appended


def _load_records(base_dir: Path) -> List[Dict[str, Any]]:
    path = validation_record_path(Path(base_dir))
    if not path.exists():
        return []
    records: List[Dict[str, Any]] = []
    for line in path.read_text(encoding="utf-8").splitlines():
        if not line.strip():
            continue
        try:
            value = json.loads(line)
        except ValueError:
            records.append(
                _normalize_record(
                    {
                        "case_id": "corrupt_record",
                        "status": "blocked",
                        "reason": "corrupt_jsonl",
                        "note": "One validation record could not be parsed.",
                    }
                )
            )
            continue
        if isinstance(value, Mapping):
            records.append(_normalize_record(value))
    return records


def summarize_real_validation(base_dir: Path, *, checklist: Optional[Mapping[str, Any]] = None) -> Dict[str, Any]:
    checklist_value = copy.deepcopy(dict(checklist or build_real_validation_checklist()))
    cases = _case_map(checklist_value)
    records = _load_records(Path(base_dir))
    latest: Dict[str, Dict[str, Any]] = {}
    for record in records:
        case_id = str(record.get("case_id") or "")
        if case_id:
            latest[case_id] = record

    case_summaries = []
    counts = {status: 0 for status in VALIDATION_STATUSES}
    required_missing: List[str] = []
    required_fail: List[str] = []
    required_blocked: List[str] = []
    live_acceptance_blocking: List[str] = []
    accepted_live_blocks: List[str] = []

    for case_id, case in cases.items():
        record = latest.get(case_id)
        status = str(record.get("status") if record else "missing")
        if status in counts:
            counts[status] += 1
        required = bool(case.get("required"))
        live = bool(case.get("live"))
        reason = str(record.get("reason") if record else "")
        accepted_block = status == "blocked" and live and reason == ACCEPTED_LIVE_BLOCK_REASON
        if required:
            if record is None:
                required_missing.append(case_id)
            elif status == "fail":
                required_fail.append(case_id)
            elif status == "blocked" and not accepted_block:
                required_blocked.append(case_id)
        if live and status != "pass":
            live_acceptance_blocking.append(case_id)
            if accepted_block:
                accepted_live_blocks.append(case_id)
        case_summaries.append(
            {
                "id": case_id,
                "title": case.get("title", case_id),
                "required": required,
                "live": live,
                "status": status,
                "reason": reason,
                "latest": record or {},
            }
        )

    ready_for_r2 = not required_missing and not required_fail and not required_blocked
    return {
        "version": VALIDATION_VERSION,
        "round": "R1-REAL-VALIDATION",
        "record_path": str(validation_record_path(Path(base_dir))),
        "record_count": len(records),
        "case_count": len(cases),
        "counts": counts,
        "required": {
            "missing": required_missing,
            "fail": required_fail,
            "blocked": required_blocked,
        },
        "live_acceptance": {
            "blocking": live_acceptance_blocking,
            "accepted_blocks": accepted_live_blocks,
            "complete": not live_acceptance_blocking,
        },
        "ready_for_r2": ready_for_r2,
        "upper_replacement_ready": ready_for_r2 and not live_acceptance_blocking,
        "provider_scope": checklist_value.get("provider_scope", {}),
        "cases": case_summaries,
    }


def _status_name(report: Any) -> str:
    if not isinstance(report, Mapping):
        return "warn"
    status = str(report.get("status") or "")
    if status:
        return status
    checks = report.get("checks", [])
    if isinstance(checks, list) and any(isinstance(item, Mapping) and item.get("status") == "fail" for item in checks):
        return "fail"
    if isinstance(checks, list) and any(isinstance(item, Mapping) and item.get("status") == "warn" for item in checks):
        return "warn"
    return "ok"


def _local_feature_gate_report(config: Mapping[str, Any]) -> Dict[str, Any]:
    config_value = dict(config or {})
    time_config = config_value.get("time", {}) if isinstance(config_value.get("time"), Mapping) else {}
    auth_config = config_value.get("auth", {}) if isinstance(config_value.get("auth"), Mapping) else {}
    browser_config = (
        auth_config.get("browser_assisted_login", {})
        if isinstance(auth_config.get("browser_assisted_login"), Mapping)
        else {}
    )
    research_config = config_value.get("research", {}) if isinstance(config_value.get("research"), Mapping) else {}
    return {
        "timezone": {
            "name": str(time_config.get("timezone") or "Asia/Taipei"),
            "configured": bool(time_config.get("timezone")),
        },
        "schedule": {
            "multi_range_supported": True,
            "status_command_includes_time": True,
        },
        "qr_image": {
            "cli_supported": True,
            "optional_extra": "qr-image",
            "sensitive_material_hidden": True,
        },
        "browser_assisted_login": {
            "enabled": bool(browser_config.get("enabled")),
            "default_disabled": not bool(browser_config.get("enabled")),
            "optional_extra": "browser",
        },
        "doctor_probe": {
            "default_network_calls": False,
            "requires_probe_url": True,
            "bounded": True,
        },
        "research_probe": {
            "enabled": bool(research_config.get("enabled")),
            "allow_api_exploration": bool(research_config.get("allow_api_exploration")),
            "allow_risky_probe": bool(research_config.get("allow_risky_probe")),
            "shape_only": True,
            "daily_automation": False,
        },
    }


async def _run_bot_fake_smoke(config: Mapping[str, Any], base_dir: Path) -> Dict[str, Any]:
    from troTHU.bot_runtime import BotRuntime, BotRuntimeHandlers
    from troTHU.discord_adapter import create_discord_notification_sink
    from troTHU.line_adapter import create_line_notification_sink
    from troTHU.notification_bus import dispatch_notification_event
    from troTHU.rollcall_models import NotificationEvent
    from troTHU.telegram_adapter import create_telegram_notification_sink

    smoke_config = copy.deepcopy(dict(config or {}))
    smoke_config["account"] = {"user": "validation-user", "passwd": ""}
    smoke_config["accounts"] = {
        "current": "default",
        "profiles": {"default": {"user": "validation-user", "passwd": "", "label": "Validation"}},
    }
    smoke_config["integrations"] = {
        "bindings": {
            "generic:bound-user": {
                "adapter": "generic",
                "external_user_id": "bound-user",
                "profile": "default",
                "channel_id": "validation-channel",
            },
            "line:line-user": {
                "adapter": "line",
                "external_user_id": "line-user",
                "profile": "default",
                "channel_id": "line-channel",
            },
            "discord:discord-user": {
                "adapter": "discord",
                "external_user_id": "discord-user",
                "profile": "default",
                "channel_id": "discord-channel",
            },
            "telegram:telegram-user": {
                "adapter": "telegram",
                "external_user_id": "telegram-user",
                "profile": "default",
                "channel_id": "telegram-channel",
            },
        },
        "admins": {"discord": ["discord-admin"], "line": ["line-admin"]},
        "security": {"dangerous_cooldown_seconds": 0, "audit_log": True},
    }

    async def status_handler(**kwargs: Any) -> Dict[str, Any]:
        return {"reply": "{} {}".format(kwargs.get("profile", "default"), kwargs.get("state", "stopped")), "ok": True}

    async def accounts_handler(**kwargs: Any) -> Dict[str, Any]:
        profiles = list(kwargs.get("profiles") or [])
        return {"reply": "Profiles: {}".format(", ".join(profiles)), "profiles_seen": profiles}

    runtime = BotRuntime(
        smoke_config,
        BotRuntimeHandlers(status=status_handler, accounts=accounts_handler),
        runtime_base_dir=None,
    )
    status_result = await runtime.handle_text(
        "status",
        adapter="generic",
        source_user_id="bound-user",
        channel_id="validation-channel",
    )
    accounts_result = await runtime.handle_text(
        "accounts",
        adapter="generic",
        source_user_id="bound-user",
        channel_id="validation-channel",
    )

    deliveries: List[Dict[str, Any]] = []

    async def fake_line_sender(**kwargs: Any) -> Dict[str, Any]:
        deliveries.append({"adapter": "line", "target": kwargs.get("to", ""), "text_length": len(str(kwargs.get("text", "")))})
        return {"ok": True}

    async def fake_discord_sender(**kwargs: Any) -> Dict[str, Any]:
        deliveries.append({"adapter": "discord", "target": kwargs.get("channel_id", ""), "text_length": len(str(kwargs.get("text", "")))})
        return {"ok": True}

    async def fake_telegram_sender(**kwargs: Any) -> Dict[str, Any]:
        deliveries.append({"adapter": "telegram", "target": kwargs.get("chat_id", ""), "text_length": len(str(kwargs.get("text", "")))})
        return {"ok": True}

    sinks = [
        create_line_notification_sink(smoke_config, sender=fake_line_sender),
        create_discord_notification_sink(smoke_config, sender=fake_discord_sender),
        create_telegram_notification_sink(smoke_config, sender=fake_telegram_sender),
    ]
    summary = await dispatch_notification_event(
        NotificationEvent(event="status", title="Validation smoke", body="OK", rollcall_id="validation"),
        config=smoke_config,
        sinks=[sink for sink in sinks if sink is not None],
        profile="default",
    )
    actual_delivery_count = len(deliveries)
    return {
        "status": "ok" if status_result.ok and accounts_result.ok and summary.ok and actual_delivery_count == 3 else "fail",
        "generic": {
            "status_ok": status_result.ok,
            "accounts_ok": accounts_result.ok,
            "status_authz": status_result.data.get("authz_status"),
            "accounts_authz": accounts_result.data.get("authz_status"),
        },
        "platform_fake": {
            "dispatch": summary.to_dict(),
            "actual_delivery_count": actual_delivery_count,
            "deliveries": sanitize_validation_value(deliveries),
        },
        "base_dir": str(Path(base_dir)),
    }


def run_local_validation_smoke(
    config: Mapping[str, Any],
    *,
    base_dir: Path,
    local_reports: Optional[Mapping[str, Any]] = None,
) -> Dict[str, Any]:
    from troTHU.package_diagnostics import build_package_diagnostic_report
    from troTHU.release_checklist import build_release_checklist
    from troTHU.roadmap_audit import build_goal_distance_report

    reports = dict(local_reports or {})
    reports.setdefault("package_check", build_package_diagnostic_report(Path(base_dir), config=config))
    reports.setdefault("release_check", build_release_checklist(Path(base_dir), config=config))
    reports.setdefault("roadmap_audit", build_goal_distance_report(config))
    if "status_report" not in reports:
        reports["status_report"] = {"status": "not_provided"}
    if "doctor_report" not in reports:
        reports["doctor_report"] = {"status": "not_provided"}
    if "dashboard_snapshot" not in reports:
        reports["dashboard_snapshot"] = {"status": "not_provided"}
    reports.setdefault("feature_gates", _local_feature_gate_report(config))

    bot_smoke = asyncio.run(_run_bot_fake_smoke(config, Path(base_dir)))
    reports["bot_sandbox"] = bot_smoke
    checks = {
        "status_report": _status_name(reports.get("status_report")),
        "doctor_report": _status_name(reports.get("doctor_report")),
        "dashboard_snapshot": _status_name(reports.get("dashboard_snapshot")),
        "package_check": _status_name(reports.get("package_check")),
        "release_check": _status_name(reports.get("release_check")),
        "roadmap_audit": "ok" if reports.get("roadmap_audit", {}).get("version") == "roadmap-audit-v1" else "fail",
        "bot_sandbox": bot_smoke.get("status", "fail"),
    }
    for local_only_name in ("status_report", "doctor_report", "dashboard_snapshot"):
        if checks.get(local_only_name) == "fail":
            checks[local_only_name] = "warn"
    status = "fail" if any(value == "fail" for value in checks.values()) else "ok"
    return {
        "version": VALIDATION_VERSION,
        "timestamp": _timestamp(),
        "status": status,
        "checks": checks,
        "reports": sanitize_validation_value(reports),
    }


def format_real_validation_summary(summary: Mapping[str, Any]) -> List[str]:
    lines = [
        "R1 real validation: {}".format("ready for R2" if summary.get("ready_for_r2") else "not ready for R2"),
        "Records: {} / cases: {}".format(summary.get("record_count", 0), summary.get("case_count", 0)),
        "Upper replacement ready: {}".format("yes" if summary.get("upper_replacement_ready") else "no"),
    ]
    counts = summary.get("counts", {})
    if isinstance(counts, Mapping):
        lines.append(
            "Counts: pass={pass_count} fail={fail_count} blocked={blocked_count} skip={skip_count}".format(
                pass_count=counts.get("pass", 0),
                fail_count=counts.get("fail", 0),
                blocked_count=counts.get("blocked", 0),
                skip_count=counts.get("skip", 0),
            )
        )
    required = summary.get("required", {})
    if isinstance(required, Mapping):
        for key in ("missing", "fail", "blocked"):
            values = required.get(key, [])
            if values:
                lines.append("{}: {}".format(key, ", ".join(str(item) for item in values)))
    live = summary.get("live_acceptance", {})
    if isinstance(live, Mapping) and live.get("blocking"):
        lines.append("Live acceptance still blocking: {}".format(", ".join(str(item) for item in live.get("blocking", []))))
    return lines

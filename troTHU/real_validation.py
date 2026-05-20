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
LIVE_CASE_IDS = {"thu_number_live", "thu_radar_live", "qr_single_live", "qr_fanout_live"}
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

"""Human-oriented compact config rendering and diagnostics."""

from __future__ import annotations

import copy
from datetime import datetime
from pathlib import Path
from typing import Any, Dict, List, Mapping

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore


COMMON_TOP_LEVEL_KEYS = {"account", "accounts", "provider", "operating", "_simple"}


def _without_placeholders(value: Any) -> Any:
    if isinstance(value, dict):
        return {key: _without_placeholders(item) for key, item in value.items()}
    if isinstance(value, list):
        return [_without_placeholders(item) for item in value]
    return value


def _is_default_value(key: str, value: Any) -> bool:
    default = ctx.DEFAULT_CONFIG.get(key)
    return value == default


def _advanced_overrides(config: Mapping[str, Any]) -> Dict[str, Any]:
    advanced: Dict[str, Any] = {}
    for key, value in config.items():
        if key in COMMON_TOP_LEVEL_KEYS or key.startswith("_"):
            continue
        if key not in ctx.DEFAULT_CONFIG or not _is_default_value(key, value):
            advanced[key] = copy.deepcopy(value)
    return advanced


def build_user_config(config: Mapping[str, Any] | None = None) -> Dict[str, Any]:
    normalized = ctx.normalize_config(copy.deepcopy(dict(config or ctx.CONFIG)))
    simple, advanced = ctx.split_normalized_config(normalized)
    return _without_placeholders({"simple": simple, "advanced": advanced})


def config_view_summary(config: Mapping[str, Any] | None = None) -> Dict[str, Any]:
    normalized = ctx.normalize_config(copy.deepcopy(dict(config or ctx.CONFIG)))
    user_config = build_user_config(normalized)
    advanced = user_config.get("advanced", {})
    simple = user_config.get("simple", {})
    return {
        "version": "config-view-v1",
        "profile_count": len(normalized.get("accounts", {}).get("profiles", {})),
        "active_profile": normalized.get("accounts", {}).get("current", "default"),
        "provider": normalized.get("provider", {}).get("current", "thu"),
        "now": simple.get("now", ""),
        "compact_keys": ["now", "account", "teacher", "group", "operating"],
        "advanced_keys": sorted(advanced.keys()) if isinstance(advanced, Mapping) else [],
        "warnings": list(getattr(ctx, "CONFIG_WARNINGS", [])),
    }


def render_compact_config(config: Mapping[str, Any] | None = None) -> str:
    user_config = build_user_config(config)
    return ctx.render_simple_config(user_config.get("simple", {}))


def make_full_config_backup_path(config_path: Path, now: datetime | None = None) -> Path:
    timestamp = (now or datetime.now()).strftime("%Y%m%d-%H%M%S")
    return config_path.with_name("config-legacy-backup-{}{}".format(timestamp, config_path.suffix))


def write_compact_config(path: Path, config: Mapping[str, Any] | None = None, *, backup_existing: bool = False) -> Dict[str, Any]:
    config_path = Path(path)
    backup_path = None
    if backup_existing and config_path.exists():
        backup_path = make_full_config_backup_path(config_path)
        try:
            backup_path.write_text(config_path.read_text(encoding="utf-8"), encoding="utf-8")
        except OSError:
            backup_path = None
    config_path.parent.mkdir(parents=True, exist_ok=True)
    text = render_compact_config(config)
    config_path.write_text(text, encoding="utf-8")
    _, advanced = ctx.split_normalized_config(ctx.normalize_config(copy.deepcopy(dict(config or ctx.CONFIG))))
    ctx.write_advanced_config_file(advanced)
    return {
        "status": "ok",
        "path": str(config_path),
        "backup_path": str(backup_path) if backup_path else "",
        "summary": config_view_summary(config),
    }


def config_doctor_report(config: Mapping[str, Any] | None = None) -> Dict[str, Any]:
    summary = config_view_summary(config)
    warnings = list(summary.get("warnings", []))
    if summary["profile_count"] <= 0:
        warnings.append("尚未設定任何帳號 profile。")
    if summary["provider"] not in {"thu", "fju", "tku", "tronclass"}:
        warnings.append("provider 不在目前支援清單中，將 fallback 到 THU。")
    return {
        "status": "warn" if warnings else "ok",
        "summary": summary,
        "warnings": warnings,
    }


def format_config_doctor(report: Mapping[str, Any]) -> List[str]:
    summary = report.get("summary", {}) if isinstance(report, Mapping) else {}
    lines = [
        "設定檢查: {}".format(report.get("status", "unknown")),
        "目前 profile: {}".format(summary.get("active_profile", "default")),
        "Provider: {}".format(summary.get("provider", "thu")),
        "常用區塊: {}".format(", ".join(summary.get("compact_keys", [])) or "-"),
    ]
    advanced = summary.get("advanced_keys", [])
    lines.append("進階覆寫: {}".format(", ".join(advanced) if advanced else "無"))
    warnings = list(report.get("warnings", []) or [])
    if warnings:
        lines.append("警告:")
        lines.extend(" - {}".format(item) for item in warnings)
    return lines

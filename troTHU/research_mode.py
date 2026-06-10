from __future__ import annotations
from dataclasses import dataclass
from typing import Any, Dict, Mapping


@dataclass(frozen=True)
class ResearchModeConfig:
    enabled: bool = False
    allow_api_exploration: bool = False
    allow_browser_capture: bool = False
    allow_risky_probe: bool = False
    allow_direct_code_lookup: bool = False
    log_raw_payloads: bool = False
    redact_sensitive: bool = True
    notes: str = ""

    def to_dict(self) -> Dict[str, Any]:
        return {
            "enabled": self.enabled,
            "allow_api_exploration": self.allow_api_exploration,
            "allow_browser_capture": self.allow_browser_capture,
            "allow_risky_probe": self.allow_risky_probe,
            "allow_direct_code_lookup": self.allow_direct_code_lookup,
            "log_raw_payloads": self.log_raw_payloads,
            "redact_sensitive": self.redact_sensitive,
            "notes": self.notes,
        }


def _coerce_bool(value: Any, default: bool) -> bool:
    if isinstance(value, bool):
        return value
    if isinstance(value, (int, float)):
        return bool(value)
    if isinstance(value, str):
        normalized = value.strip().lower()
        if normalized in {"1", "true", "yes", "on", "enable", "enabled"}:
            return True
        if normalized in {"0", "false", "no", "off", "disable", "disabled"}:
            return False
    return default


def normalize_research_mode_config(value: Any) -> Dict[str, Any]:
    raw = dict(value) if isinstance(value, Mapping) else {}
    enabled = _coerce_bool(raw.get("enabled"), False)
    return ResearchModeConfig(
        enabled=enabled,
        allow_api_exploration=enabled
        and _coerce_bool(raw.get("allow_api_exploration"), False),
        allow_browser_capture=enabled
        and _coerce_bool(raw.get("allow_browser_capture"), False),
        allow_risky_probe=enabled
        and _coerce_bool(raw.get("allow_risky_probe"), False),
        allow_direct_code_lookup=enabled
        and _coerce_bool(raw.get("allow_direct_code_lookup"), False),
        log_raw_payloads=enabled
        and _coerce_bool(raw.get("log_raw_payloads"), False),
        redact_sensitive=_coerce_bool(raw.get("redact_sensitive"), True),
        notes=str(raw.get("notes") or "").strip(),
    ).to_dict()


def is_research_mode_enabled(config: Mapping[str, Any]) -> bool:
    return bool(normalize_research_mode_config(config.get("research", {})).get("enabled"))

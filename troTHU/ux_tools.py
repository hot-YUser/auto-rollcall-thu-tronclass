from __future__ import annotations
import json
from datetime import datetime
from pathlib import Path
from typing import Any, Dict, Iterable, Optional


PUBLIC_SECRET_EXACT_KEYS = {
    "authorization",
    "passwd",
    "password",
    "secret",
    "token",
    "value",
}

PUBLIC_SECRET_KEY_PARTS = (
    "access_token",
    "api_key",       # the LLM key when stored in config.conf [llm] api_key (also catches api_key_env, harmless)
    "auth_header",
    "bot_token",
    "cookie_value",
    "refresh_token",
    "session_id",
)


def sanitize_public_payload(value: Any) -> Any:
    if isinstance(value, dict):
        sanitized: Dict[str, Any] = {}
        for key, item in value.items():
            key_text = str(key)
            lowered = key_text.lower()
            if lowered in PUBLIC_SECRET_EXACT_KEYS or any(part in lowered for part in PUBLIC_SECRET_KEY_PARTS):
                sanitized[key_text] = "[redacted]"
            else:
                sanitized[key_text] = sanitize_public_payload(item)
        return sanitized
    if isinstance(value, list):
        return [sanitize_public_payload(item) for item in value]
    return value


def json_text(value: Any) -> str:
    return json.dumps(sanitize_public_payload(value), ensure_ascii=False, indent=2, default=str)


def file_age_seconds(path: Path, now: Optional[datetime] = None) -> Optional[float]:
    if not path.exists():
        return None
    now = now or datetime.now()
    return max(0.0, now.timestamp() - path.stat().st_mtime)


def human_age(seconds: Optional[float]) -> str:
    if seconds is None:
        return "missing"
    if seconds < 60:
        return "<1m"
    minutes = int(seconds // 60)
    if minutes < 60:
        return f"{minutes}m"
    hours = int(minutes // 60)
    if hours < 48:
        return f"{hours}h"
    return f"{hours // 24}d"


def check_item(name: str, ok: bool, message: str, *, severity: str = "warn") -> Dict[str, Any]:
    return {
        "name": name,
        "status": "ok" if ok else severity,
        "message": message,
    }


def render_check_items(items: Iterable[Dict[str, Any]]) -> str:
    labels = {"ok": "OK", "warn": "WARN", "fail": "FAIL"}
    lines = []
    for item in items:
        status = str(item.get("status", "warn")).lower()
        label = labels.get(status, status.upper())
        lines.append("[{}] {} - {}".format(label, item.get("name", "-"), item.get("message", "")))
    return "\n".join(lines)



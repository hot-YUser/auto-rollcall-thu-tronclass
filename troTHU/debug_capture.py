from __future__ import annotations
import json
from datetime import datetime
from pathlib import Path
from typing import Any, Dict


SENSITIVE_KEY_PARTS = (
    "authorization",
    "cookie",
    "passwd",
    "password",
    "session",
    "token",
    "secret",
    "key",
    "chat",
)


def sanitize_debug_payload(value: Any) -> Any:
    if isinstance(value, dict):
        sanitized: Dict[str, Any] = {}
        for key, item in value.items():
            key_text = str(key)
            if any(part in key_text.lower() for part in SENSITIVE_KEY_PARTS):
                sanitized[key_text] = "[redacted]"
            else:
                sanitized[key_text] = sanitize_debug_payload(item)
        return sanitized
    if isinstance(value, list):
        return [sanitize_debug_payload(item) for item in value]
    return value


def append_debug_capture(path: Path, event: str, payload: Any) -> Path:
    path.parent.mkdir(parents=True, exist_ok=True)
    record = {
        "timestamp": datetime.now().isoformat(timespec="seconds"),
        "event": event,
        "payload": sanitize_debug_payload(payload),
    }
    with path.open("a", encoding="utf-8") as file:
        file.write(json.dumps(record, ensure_ascii=False, default=str) + "\n")
    return path

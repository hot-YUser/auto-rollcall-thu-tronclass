from __future__ import annotations
import json
from datetime import datetime
from pathlib import Path
from typing import Any, Dict


import re

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


# QR data token shape: <10 decimal unix seconds><32 hex>, exactly 42 chars. Must be
# redacted recursively even when embedded in free text. Portable spelling: 10 decimal
# digits followed immediately by 32 hex; the caller decides whether hex is lower-only.
_QR_TOKEN_RE = re.compile(r"\b\d{10}[0-9a-fA-F]{32}\b")


def _redact_qr_tokens_in_text(text: str) -> str:
    return _QR_TOKEN_RE.sub("[redacted-qr-token]", text)


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
    if isinstance(value, str):
        if _QR_TOKEN_RE.search(value):
            return _redact_qr_tokens_in_text(value)
        return value
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

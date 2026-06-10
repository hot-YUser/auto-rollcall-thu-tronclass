from __future__ import annotations
import json
import os
import zipfile
from collections import Counter
from datetime import datetime
from pathlib import Path
from typing import Any, Dict, Iterable, List, Optional

try:
    from troTHU.debug_capture import sanitize_debug_payload
except ImportError:  # pragma: no cover - script execution fallback
    from debug_capture import sanitize_debug_payload


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


def write_json(path: Path, value: Any) -> Path:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json_text(value) + "\n", encoding="utf-8")
    return path


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


def iter_jsonl_files(log_dir: Path) -> List[Path]:
    if not log_dir.exists():
        return []
    files = [path for path in log_dir.rglob("*.jsonl") if path.is_file()]
    files.sort(key=lambda path: path.stat().st_mtime)
    return files


def read_jsonl_records(path: Path, limit: Optional[int] = None) -> List[Dict[str, Any]]:
    records: List[Dict[str, Any]] = []
    if not path.exists():
        return records
    try:
        lines = path.read_text(encoding="utf-8").splitlines()
    except OSError:
        return records
    if limit is not None:
        lines = lines[-limit:]
    for line in lines:
        if not line.strip():
            continue
        try:
            record = json.loads(line)
        except ValueError:
            record = {"raw": line}
        records.append(sanitize_debug_payload(record))
    return records


def tail_log_records(log_dir: Path, limit: int = 20) -> List[Dict[str, Any]]:
    limit = max(1, int(limit or 20))
    records: List[Dict[str, Any]] = []
    for path in reversed(iter_jsonl_files(log_dir)):
        remaining = limit - len(records)
        if remaining <= 0:
            break
        records = read_jsonl_records(path, remaining) + records
    return records[-limit:]


def summarize_logs(log_dir: Path, max_files: int = 100) -> Dict[str, Any]:
    files = iter_jsonl_files(log_dir)[-max_files:]
    event_counts: Counter[str] = Counter()
    status_counts: Counter[str] = Counter()
    total = 0
    first_timestamp = ""
    last_timestamp = ""
    for path in files:
        for record in read_jsonl_records(path):
            total += 1
            timestamp = str(record.get("timestamp") or "")
            if timestamp and not first_timestamp:
                first_timestamp = timestamp
            if timestamp:
                last_timestamp = timestamp
            event = str(record.get("event") or "unknown")
            status = str(record.get("status") or "unknown")
            event_counts[event] += 1
            status_counts[status] += 1
    return {
        "log_dir": str(log_dir),
        "file_count": len(files),
        "record_count": total,
        "first_timestamp": first_timestamp,
        "last_timestamp": last_timestamp,
        "events": dict(event_counts.most_common()),
        "statuses": dict(status_counts.most_common()),
    }


def export_debug_bundle(
    output_path: Path,
    *,
    config_summary: Dict[str, Any],
    doctor_report: Dict[str, Any],
    log_summary: Dict[str, Any],
    recent_logs: List[Dict[str, Any]],
    debug_capture_path: Optional[Path] = None,
) -> Path:
    output_path.parent.mkdir(parents=True, exist_ok=True)
    if output_path.suffix.lower() != ".zip":
        output_path = output_path.with_suffix(".zip")

    debug_capture_records: List[Dict[str, Any]] = []
    if debug_capture_path is not None:
        debug_capture_records = read_jsonl_records(debug_capture_path, limit=200)

    bundle_items = {
        "config-summary.json": config_summary,
        "doctor.json": doctor_report,
        "logs-summary.json": log_summary,
        "recent-logs.json": recent_logs,
        "debug-capture.json": debug_capture_records,
        "manifest.json": {
            "created_at": datetime.now().isoformat(timespec="seconds"),
            "sensitive_fields": "redacted",
        },
    }

    with zipfile.ZipFile(output_path, "w", compression=zipfile.ZIP_DEFLATED) as archive:
        for name, value in bundle_items.items():
            archive.writestr(name, json_text(value) + "\n")
    return output_path


def safe_mtime(path: Path) -> Optional[float]:
    try:
        return os.path.getmtime(path)
    except OSError:
        return None

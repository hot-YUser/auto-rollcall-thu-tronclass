from __future__ import annotations
import json
import os
import re
import time
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any, Dict, Mapping, Optional


RUNTIME_STATE_VERSION = 1
RUNTIME_STATE_FILENAME = "account_runtime.json"
RUNTIME_STALE_SECONDS = 300
MAX_TEXT_LENGTH = 200
SENSITIVE_KEY_RE = re.compile(
    r"(authorization|cookie|passwd|password|secret|session|token|payload|raw|response|body)",
    re.IGNORECASE,
)
SENSITIVE_ASSIGNMENT_RE = re.compile(
    r"(?i)(authorization|cookie|passwd|password|secret|session|token|payload)=\S+"
)


def _now() -> float:
    return time.time()


def _safe_text(value: Any, *, limit: int = MAX_TEXT_LENGTH) -> str:
    text = str(value or "")
    text = SENSITIVE_ASSIGNMENT_RE.sub(r"\1=[redacted]", text)
    if len(text) > limit:
        return text[: limit - 3] + "..."
    return text


def _safe_value(value: Any) -> Any:
    if isinstance(value, Mapping):
        safe: Dict[str, Any] = {}
        for key, item in value.items():
            key_text = str(key)
            if SENSITIVE_KEY_RE.search(key_text):
                safe[key_text] = "[redacted]"
            else:
                safe[key_text] = _safe_value(item)
        return safe
    if isinstance(value, (list, tuple, set)):
        return [_safe_value(item) for item in value]
    if isinstance(value, str):
        return _safe_text(value)
    if isinstance(value, (int, float, bool)) or value is None:
        return value
    return _safe_text(value)


def _normalize_profile_name(profile: Any) -> str:
    text = str(profile or "").strip()
    return text or "default"


@dataclass
class AccountRuntimeSnapshot:
    version: int = RUNTIME_STATE_VERSION
    updated_at: float = field(default_factory=_now)
    profiles: Dict[str, Dict[str, Any]] = field(default_factory=dict)
    store_status: str = "ok"
    error: str = ""

    def to_dict(self, *, include_meta: bool = True) -> Dict[str, Any]:
        data: Dict[str, Any] = {
            "version": self.version,
            "updated_at": self.updated_at,
            "profiles": _safe_value(self.profiles),
        }
        if include_meta:
            data["store_status"] = self.store_status
            if self.error:
                data["error"] = _safe_text(self.error)
        return data

    def profile(self, profile_name: str) -> Dict[str, Any]:
        return dict(self.profiles.get(_normalize_profile_name(profile_name), {}))


def runtime_state_path(base_dir: Path) -> Path:
    return Path(base_dir) / "state" / RUNTIME_STATE_FILENAME


def _snapshot_from_data(data: Any, *, store_status: str = "ok", error: str = "") -> AccountRuntimeSnapshot:
    if not isinstance(data, Mapping):
        return AccountRuntimeSnapshot(store_status="corrupt", error=error or "invalid root")
    version = data.get("version", RUNTIME_STATE_VERSION)
    try:
        version_int = int(version)
    except (TypeError, ValueError):
        version_int = RUNTIME_STATE_VERSION
    updated_at = data.get("updated_at", 0)
    try:
        updated_at_float = float(updated_at)
    except (TypeError, ValueError):
        updated_at_float = 0.0
    raw_profiles = data.get("profiles", {})
    profiles = raw_profiles if isinstance(raw_profiles, Mapping) else {}
    clean_profiles = {
        _normalize_profile_name(name): _safe_value(profile)
        for name, profile in profiles.items()
        if isinstance(profile, Mapping)
    }
    return AccountRuntimeSnapshot(
        version=version_int,
        updated_at=updated_at_float or _now(),
        profiles=clean_profiles,
        store_status=store_status,
        error=error,
    )


def load_runtime_state(base_dir: Path) -> AccountRuntimeSnapshot:
    path = runtime_state_path(base_dir)
    if not path.exists():
        return AccountRuntimeSnapshot(store_status="missing")
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, ValueError) as exc:
        return AccountRuntimeSnapshot(store_status="corrupt", error=_safe_text(exc))
    return _snapshot_from_data(data)


def save_runtime_state(base_dir: Path, snapshot: AccountRuntimeSnapshot) -> AccountRuntimeSnapshot:
    path = runtime_state_path(base_dir)
    path.parent.mkdir(parents=True, exist_ok=True)
    saved = AccountRuntimeSnapshot(
        version=RUNTIME_STATE_VERSION,
        updated_at=_now(),
        profiles=dict(snapshot.profiles),
        store_status="ok",
    )
    tmp_path = path.with_suffix(path.suffix + ".tmp")
    tmp_path.write_text(
        json.dumps(saved.to_dict(include_meta=False), ensure_ascii=False, indent=2, sort_keys=True) + "\n",
        encoding="utf-8",
    )
    os.replace(tmp_path, path)
    return saved


def update_profile_runtime_state(
    base_dir: Path,
    profile: str,
    **fields: Any,
) -> Dict[str, Any]:
    snapshot = load_runtime_state(base_dir)
    profile_name = _normalize_profile_name(profile)
    current = dict(snapshot.profiles.get(profile_name, {}))
    for key, value in fields.items():
        current[str(key)] = _safe_value(value)
    current["updated_at"] = _now()
    snapshot.profiles[profile_name] = current
    saved = save_runtime_state(base_dir, snapshot)
    return saved.profile(profile_name)


def mark_bot_state(base_dir: Path, profile: str, state: str) -> Dict[str, Any]:
    return update_profile_runtime_state(
        base_dir,
        profile,
        bot_state=_safe_text(state, limit=40) or "stopped",
    )


def mark_monitor_state(
    base_dir: Path,
    profile: str,
    state: str,
    *,
    heartbeat: bool = True,
) -> Dict[str, Any]:
    fields: Dict[str, Any] = {"monitor_state": _safe_text(state, limit=40) or "stopped"}
    if heartbeat:
        fields["heartbeat_at"] = _now()
    return update_profile_runtime_state(base_dir, profile, **fields)


def mark_login_result(base_dir: Path, profile: str, login_result: Any) -> Dict[str, Any]:
    status = getattr(login_result, "status", "")
    credential_source = getattr(login_result, "credential_source", "")
    ok = bool(getattr(login_result, "ok", False))
    should_auto_retry = bool(getattr(login_result, "should_auto_retry", False))
    return update_profile_runtime_state(
        base_dir,
        profile,
        last_login={
            "status": _safe_text(status, limit=60),
            "credential_source": _safe_text(credential_source, limit=60),
            "ok": ok,
            "should_auto_retry": should_auto_retry,
            "timestamp": _now(),
        },
    )


def mark_check_result(
    base_dir: Path,
    profile: str,
    status: str,
    *,
    rollcall_id: Any = "",
    rollcall_type: str = "",
) -> Dict[str, Any]:
    return update_profile_runtime_state(
        base_dir,
        profile,
        last_check={
            "status": _safe_text(status, limit=80),
            "rollcall_id": _safe_text(rollcall_id, limit=80),
            "rollcall_type": _safe_text(rollcall_type, limit=40),
            "timestamp": _now(),
        },
        last_error={},
    )


def mark_profile_error(
    base_dir: Path,
    profile: str,
    status: str,
    message: Any,
) -> Dict[str, Any]:
    return update_profile_runtime_state(
        base_dir,
        profile,
        last_error={
            "status": _safe_text(status, limit=80),
            "message": _safe_text(message),
            "timestamp": _now(),
        },
    )


def runtime_profile_summary(
    snapshot: AccountRuntimeSnapshot,
    profile: str,
    *,
    now: Optional[float] = None,
    stale_seconds: int = RUNTIME_STALE_SECONDS,
) -> Dict[str, Any]:
    now_value = _now() if now is None else now
    record = snapshot.profile(profile)
    heartbeat_at = record.get("heartbeat_at")
    try:
        heartbeat_float = float(heartbeat_at or 0)
    except (TypeError, ValueError):
        heartbeat_float = 0.0
    stale = bool(heartbeat_float and now_value - heartbeat_float > stale_seconds)
    return {
        "profile": _normalize_profile_name(profile),
        "store_status": snapshot.store_status,
        "bot_state": record.get("bot_state", "stopped"),
        "monitor_state": record.get("monitor_state", "unknown"),
        "heartbeat_at": heartbeat_float or None,
        "heartbeat_stale": stale,
        "last_login": record.get("last_login") if isinstance(record.get("last_login"), Mapping) else {},
        "last_check": record.get("last_check") if isinstance(record.get("last_check"), Mapping) else {},
        "last_error": record.get("last_error") if isinstance(record.get("last_error"), Mapping) else {},
        "updated_at": record.get("updated_at"),
    }

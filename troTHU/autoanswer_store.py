"""Permanent (cross-restart) dedup of auto-answered activities.

Stores per-provider+profile completed activity ids in state/autoanswer_completed.json so a
week-long homework isn't re-answered (and re-spammed on screen) every time the monitor
starts. Atomic writes (tmp + os.replace); never raises -- a storage hiccup must never
break the auto-answer loop. Kept self-contained (no ctx import) so it's trivially testable.

Storage contract v2: {"version": 2, "scopes": {"providerKey": {"profileName": ["id", ...]}}}
Legacy v1 (profile-only): {"profileName": ["id", ...]} -> migrated once to active provider scope.
"""
from __future__ import annotations
import json
import os
from pathlib import Path
from typing import Any, Dict, Set

STATE_FILENAME = "autoanswer_completed.json"
STORE_VERSION = 2


def _path(base_dir: Any) -> Path:
    return Path(base_dir) / "state" / STATE_FILENAME


def _profile_key(profile: Any) -> str:
    return str(profile or "").strip() or "default"


def _provider_key(provider: Any) -> str:
    text = str(provider or "").strip().lower()
    return text or "thu"


def _is_versioned(data: Any) -> bool:
    return isinstance(data, dict) and data.get("version") == STORE_VERSION and isinstance(data.get("scopes"), dict)


def _legacy_shape(data: Any) -> bool:
    if not isinstance(data, dict):
        return False
    if "version" in data or "scopes" in data:
        return False
    if not data:
        return False
    return all(isinstance(v, list) for v in data.values())


def _load_raw(base_dir: Any) -> dict:
    path = _path(base_dir)
    if not path.exists():
        return {}
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, ValueError):
        return {}
    return data if isinstance(data, dict) else {}


def _load_all(base_dir: Any) -> dict:
    return _load_raw(base_dir)


def _atomic_write(path: Path, data: dict) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    tmp = path.with_suffix(path.suffix + ".tmp")
    tmp.write_text(json.dumps(data, ensure_ascii=False, indent=2, sort_keys=True) + "\n", encoding="utf-8")
    os.replace(tmp, path)


def _migrate_legacy_if_needed(base_dir: Any, provider: Any) -> dict:
    """Load once, normalize in-memory to v2 retaining every legacy ID.

    Returns the in-memory v2 doc (or the raw/versioned doc when no migration
    needed). If the atomic write fails the old file is left untouched and the
    caller retries with the returned in-memory doc, so legacy+new IDs persist.
    """
    raw = _load_raw(base_dir)
    if not _legacy_shape(raw):
        return raw
    prov = _provider_key(provider)
    scopes: Dict[str, Any] = {prov: {}}
    for k, v in raw.items():
        pk = _profile_key(k)
        ids = [str(x) for x in v] if isinstance(v, list) else []
        scopes[prov][pk] = sorted(set(ids))
    migrated: dict = {"version": STORE_VERSION, "scopes": scopes}
    try:
        _atomic_write(_path(base_dir), migrated)
    except OSError:
        # Leave old file untouched — caller operates on returned migrated doc.
        pass
    return migrated


def load_completed(base_dir: Any, profile: Any, provider: Any = None) -> Set[str]:
    if provider is not None:
        data = _migrate_legacy_if_needed(base_dir, provider)
        if _is_versioned(data):
            scopes = data.get("scopes", {})
            prov_data = scopes.get(_provider_key(provider), {}) if isinstance(scopes, dict) else {}
            ids = prov_data.get(_profile_key(profile)) if isinstance(prov_data, dict) else None
            return {str(x) for x in ids} if isinstance(ids, list) else set()
    data = _load_all(base_dir)
    if _is_versioned(data):
        if provider is None:
            return set()
        scopes = data.get("scopes", {})
        prov_data = scopes.get(_provider_key(provider), {}) if isinstance(scopes, dict) else {}
        ids = prov_data.get(_profile_key(profile)) if isinstance(prov_data, dict) else None
        return {str(x) for x in ids} if isinstance(ids, list) else set()
    ids = data.get(_profile_key(profile)) if isinstance(data, dict) else None
    return {str(x) for x in ids} if isinstance(ids, list) else set()


def mark_completed(base_dir: Any, profile: Any, activity_id: Any, provider: Any = None) -> None:
    activity_id = str(activity_id or "").strip()
    if not activity_id:
        return
    try:
        data: dict
        if provider is not None:
            # Single load: reuse migrated doc, never reload-and-reset on write failure.
            data = _migrate_legacy_if_needed(base_dir, provider)
            if not _is_versioned(data):
                # Not versioned and not legacy (e.g. corrupt/empty) -> init v2
                data = {"version": STORE_VERSION, "scopes": {}}
            scopes = data.setdefault("scopes", {})
            prov = _provider_key(provider)
            prof = _profile_key(profile)
            prov_dict = scopes.setdefault(prov, {})
            ids = prov_dict.get(prof)
            ids = [str(x) for x in ids] if isinstance(ids, list) else []
            if activity_id in ids:
                return
            ids.append(activity_id)
            prov_dict[prof] = sorted(set(ids))
        else:
            data = _load_raw(base_dir)
            if _is_versioned(data):
                return
            key = _profile_key(profile)
            ids = data.get(key)
            ids = [str(x) for x in ids] if isinstance(ids, list) else []
            if activity_id in ids:
                return
            ids.append(activity_id)
            data[key] = sorted(set(ids))
        path = _path(base_dir)
        _atomic_write(path, data)
    except OSError:
        return

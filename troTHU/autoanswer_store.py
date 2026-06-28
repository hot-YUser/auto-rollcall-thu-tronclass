"""Permanent (cross-restart) dedup of auto-answered activities.

Stores per-profile completed activity ids in state/autoanswer_completed.json so a
week-long homework isn't re-answered (and re-spammed on screen) every time the monitor
starts. Atomic writes (tmp + os.replace); never raises — a storage hiccup must never
break the auto-answer loop. Kept self-contained (no ctx import) so it's trivially testable.
"""
from __future__ import annotations
import json
import os
from pathlib import Path
from typing import Any, Set

STATE_FILENAME = "autoanswer_completed.json"


def _path(base_dir: Any) -> Path:
    return Path(base_dir) / "state" / STATE_FILENAME


def _profile_key(profile: Any) -> str:
    return str(profile or "").strip() or "default"


def _load_all(base_dir: Any) -> dict:
    path = _path(base_dir)
    if not path.exists():
        return {}
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, ValueError):
        return {}  # missing/corrupt -> behave as empty
    return data if isinstance(data, dict) else {}


def load_completed(base_dir: Any, profile: Any) -> Set[str]:
    ids = _load_all(base_dir).get(_profile_key(profile))
    return {str(x) for x in ids} if isinstance(ids, list) else set()


def mark_completed(base_dir: Any, profile: Any, activity_id: Any) -> None:
    activity_id = str(activity_id or "").strip()
    if not activity_id:
        return
    try:
        data = _load_all(base_dir)
        key = _profile_key(profile)
        ids = data.get(key)
        ids = [str(x) for x in ids] if isinstance(ids, list) else []
        if activity_id in ids:
            return
        ids.append(activity_id)
        data[key] = ids
        path = _path(base_dir)
        path.parent.mkdir(parents=True, exist_ok=True)
        tmp = path.with_suffix(path.suffix + ".tmp")
        tmp.write_text(json.dumps(data, ensure_ascii=False, indent=2, sort_keys=True) + "\n",
                       encoding="utf-8")
        os.replace(tmp, path)
    except OSError:
        return  # best-effort persistence; never break auto-answer

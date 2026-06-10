from __future__ import annotations
from dataclasses import dataclass, field
from typing import Any, Dict, Optional


@dataclass(frozen=True)
class AdapterBinding:
    adapter: str
    external_user_id: str
    profile: str
    channel_id: str = ""

    def to_dict(self) -> Dict[str, str]:
        return {
            "adapter": self.adapter,
            "external_user_id": self.external_user_id,
            "profile": self.profile,
            "channel_id": self.channel_id,
        }


@dataclass(frozen=True)
class ControlCommand:
    action: str
    adapter: str = "local"
    profile: str = ""
    payload: Dict[str, Any] = field(default_factory=dict)
    source_user_id: str = ""


COMMAND_ALIASES = {
    "status": "status",
    "狀態": "status",
    "start": "start",
    "開始": "start",
    "stop": "stop",
    "停止": "stop",
    "refresh": "refresh-session",
    "refresh-session": "refresh-session",
    "reauth": "reauth",
    "重登": "refresh-session",
    "重認證": "reauth",
    "force": "force-check",
    "force-check": "force-check",
    "check": "force-check",
    "qr": "qr-submit",
    "qr-submit": "qr-submit",
    "accounts": "account-list",
    "account": "account-list",
    "account-list": "account-list",
    "profiles": "account-list",
    "bind": "bind",
    "unbind": "unbind",
}


def map_adapter_command(
    raw_text: str,
    *,
    adapter: str,
    source_user_id: str = "",
    profile: str = "",
) -> Optional[ControlCommand]:
    parts = str(raw_text or "").strip().split()
    if not parts:
        return None
    action = COMMAND_ALIASES.get(parts[0].lower())
    if not action:
        return None
    payload: Dict[str, Any] = {"args": parts[1:]}
    if action == "qr-submit":
        qr_args = list(parts[1:])
        fanout = bool(qr_args and qr_args[0].lower() in {"all", "--all"})
        if fanout:
            qr_args = qr_args[1:]
        payload["args"] = qr_args
        payload["fanout"] = fanout
        if qr_args:
            payload["payload"] = " ".join(qr_args)
    elif action in {"status", "start", "stop", "force-check", "reauth", "refresh-session"} and parts[1:]:
        payload["profile"] = parts[1]
    if action in {"bind", "unbind"} and parts[1:]:
        payload["profile"] = parts[1]
    return ControlCommand(
        action=action,
        adapter=str(adapter or "local"),
        profile=str(profile or payload.get("profile") or ""),
        payload=payload,
        source_user_id=str(source_user_id or ""),
    )


def binding_key(adapter: str, external_user_id: str) -> str:
    return "{}:{}".format(str(adapter or "").strip().lower(), str(external_user_id or "").strip())

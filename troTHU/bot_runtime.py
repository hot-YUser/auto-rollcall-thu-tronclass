from __future__ import annotations
import inspect
import time
import uuid
from dataclasses import dataclass
from typing import Any, Callable, Dict, Mapping, Optional, Tuple

try:
    from troTHU.account_store import get_active_profile, list_profiles, normalize_accounts_config
    from troTHU.account_runtime_store import load_runtime_state, mark_bot_state
    from troTHU.adapter_bridge import ControlCommand, binding_key, map_adapter_command
except ImportError:  # pragma: no cover - script execution fallback
    from account_store import get_active_profile, list_profiles, normalize_accounts_config
    from account_runtime_store import load_runtime_state, mark_bot_state
    from adapter_bridge import ControlCommand, binding_key, map_adapter_command


ADMIN_ACTIONS = {"force-check", "reauth", "refresh-session"}
BOUND_ACTIONS = {
    "status",
    "start",
    "stop",
    "qr-submit",
    "force-check",
    "reauth",
    "refresh-session",
    "account-list",
}
DANGEROUS_ACTIONS = {"force-check", "reauth"}
DEFAULT_DANGEROUS_COOLDOWN_SECONDS = 30


@dataclass(frozen=True)
class BotCommandResult:
    ok: bool
    action: str
    profile: str = ""
    reply: str = ""
    data: Dict[str, Any] = None

    def to_dict(self) -> Dict[str, Any]:
        return {
            "ok": self.ok,
            "action": self.action,
            "profile": self.profile,
            "reply": self.reply,
            "data": dict(self.data or {}),
        }


@dataclass(frozen=True)
class BotAuditEvent:
    audit_id: str
    action: str
    adapter: str
    source_user_id: str
    profile: str = ""
    channel_id: str = ""
    admin: bool = False
    allowed: bool = False
    reason: str = ""
    authz_status: str = ""
    channel_scope: str = "unrestricted"
    cooldown_active: bool = False
    dangerous: bool = False
    timestamp: float = 0.0

    def to_dict(self) -> Dict[str, Any]:
        return {
            "audit_id": self.audit_id,
            "action": self.action,
            "adapter": self.adapter,
            "source_user_id": self.source_user_id,
            "profile": self.profile,
            "channel_id": self.channel_id,
            "admin": self.admin,
            "allowed": self.allowed,
            "reason": self.reason,
            "authz_status": self.authz_status,
            "channel_scope": self.channel_scope,
            "cooldown_active": self.cooldown_active,
            "dangerous": self.dangerous,
            "timestamp": self.timestamp,
        }


@dataclass(frozen=True)
class BotRuntimeHandlers:
    status: Optional[Callable[..., Any]] = None
    accounts: Optional[Callable[..., Any]] = None
    force_check: Optional[Callable[..., Any]] = None
    reauth: Optional[Callable[..., Any]] = None
    qr_submit: Optional[Callable[..., Any]] = None
    audit: Optional[Callable[..., Any]] = None


def _normalize_string_list(value: Any) -> list[str]:
    if isinstance(value, str):
        value = [value]
    if not isinstance(value, (list, tuple, set)):
        return []
    return sorted({str(item or "").strip() for item in value if str(item or "").strip()})


def _coerce_non_negative_int(value: Any, default: int) -> int:
    try:
        return max(0, int(value))
    except (TypeError, ValueError):
        return default


def _coerce_bool(value: Any, default: bool = True) -> bool:
    if isinstance(value, bool):
        return value
    if isinstance(value, str):
        lowered = value.strip().lower()
        if lowered in {"1", "true", "yes", "y", "on"}:
            return True
        if lowered in {"0", "false", "no", "n", "off"}:
            return False
    if value in (0, 1):
        return bool(value)
    return default


def normalize_security_config(config: Dict[str, Any]) -> Dict[str, Any]:
    integrations = config.setdefault("integrations", {})
    if not isinstance(integrations, dict):
        integrations = {}
        config["integrations"] = integrations

    security = integrations.setdefault("security", {})
    if not isinstance(security, dict):
        security = {}
        integrations["security"] = security

    allowed_channels = security.setdefault("allowed_channels", {})
    if not isinstance(allowed_channels, dict):
        allowed_channels = {}
        security["allowed_channels"] = allowed_channels
    for adapter in ("discord", "line"):
        allowed_channels[adapter] = _normalize_string_list(allowed_channels.get(adapter, []))

    security["dangerous_cooldown_seconds"] = _coerce_non_negative_int(
        security.get("dangerous_cooldown_seconds", DEFAULT_DANGEROUS_COOLDOWN_SECONDS),
        DEFAULT_DANGEROUS_COOLDOWN_SECONDS,
    )
    security["audit_log"] = _coerce_bool(security.get("audit_log", True), True)
    return security


def normalize_admins_config(config: Dict[str, Any]) -> Dict[str, Any]:
    integrations = config.setdefault("integrations", {})
    if not isinstance(integrations, dict):
        integrations = {}
        config["integrations"] = integrations

    admins = integrations.setdefault("admins", {})
    if not isinstance(admins, dict):
        admins = {}
        integrations["admins"] = admins

    for adapter in ("discord", "line"):
        raw_values = admins.get(adapter, [])
        if isinstance(raw_values, str):
            raw_values = [raw_values]
        if not isinstance(raw_values, (list, tuple, set)):
            raw_values = []
        admins[adapter] = sorted(
            {
                str(value or "").strip()
                for value in raw_values
                if str(value or "").strip()
            }
        )
    normalize_security_config(config)
    return admins


def _admins_for(config: Mapping[str, Any], adapter: str) -> Tuple[str, ...]:
    integrations = config.get("integrations", {})
    if not isinstance(integrations, Mapping):
        return tuple()
    admins = integrations.get("admins", {})
    if not isinstance(admins, Mapping):
        return tuple()
    values = admins.get(str(adapter or "").strip().lower(), [])
    if isinstance(values, str):
        values = [values]
    if not isinstance(values, (list, tuple, set)):
        return tuple()
    return tuple(str(value or "").strip() for value in values if str(value or "").strip())


async def _maybe_await(value: Any) -> Any:
    if inspect.isawaitable(value):
        return await value
    return value


def _format_handler_reply(value: Any, fallback: str) -> str:
    if value is None:
        return fallback
    if isinstance(value, str):
        return value
    if isinstance(value, Mapping):
        message = value.get("reply") or value.get("message") or value.get("status")
        if message:
            return str(message)
    return str(value)


def _handler_data(value: Any) -> Dict[str, Any]:
    if not isinstance(value, Mapping):
        return {}
    return {
        str(key): item
        for key, item in value.items()
        if key not in {"reply", "message"}
    }


class BotRuntime:
    def __init__(
        self,
        config: Dict[str, Any],
        handlers: Optional[BotRuntimeHandlers] = None,
        *,
        time_fn: Optional[Callable[[], float]] = None,
        runtime_base_dir: Any = None,
    ) -> None:
        self.config = config
        normalize_accounts_config(self.config)
        normalize_admins_config(self.config)
        self.handlers = handlers or BotRuntimeHandlers()
        self.running_profiles = set()
        self.runtime_base_dir = runtime_base_dir
        self._dangerous_cooldowns: Dict[Tuple[str, str, str, str], float] = {}
        self._time_fn = time_fn or time.time
        self._restore_running_profiles()

    def _restore_running_profiles(self) -> None:
        if self.runtime_base_dir is None:
            return
        try:
            snapshot = load_runtime_state(self.runtime_base_dir)
            for profile, record in snapshot.profiles.items():
                if isinstance(record, Mapping) and record.get("bot_state") == "running":
                    self.running_profiles.add(str(profile))
        except Exception:
            return

    def _persist_bot_state(self, profile: str, state: str) -> None:
        if self.runtime_base_dir is None:
            return
        try:
            mark_bot_state(self.runtime_base_dir, profile, state)
        except Exception:
            return

    def is_admin(self, adapter: str, source_user_id: str) -> bool:
        return str(source_user_id or "").strip() in _admins_for(self.config, adapter)

    def resolve_binding(
        self,
        adapter: str,
        source_user_id: str,
        channel_id: str = "",
    ) -> Tuple[Optional[Dict[str, Any]], str]:
        integrations = self.config.get("integrations", {})
        bindings = integrations.get("bindings", {}) if isinstance(integrations, dict) else {}
        if not isinstance(bindings, dict):
            return None, "not_bound"
        binding = bindings.get(binding_key(adapter, source_user_id))
        if not isinstance(binding, dict):
            return None, "not_bound"
        bound_channel = str(binding.get("channel_id") or "").strip()
        if bound_channel and str(channel_id or "").strip() and bound_channel != str(channel_id or "").strip():
            return None, "channel_mismatch"
        return binding, "ok"

    def _active_profile_name(self) -> str:
        return get_active_profile(self.config).name

    def _security_config(self) -> Mapping[str, Any]:
        return normalize_security_config(self.config)

    def _allowed_channels_for(self, adapter: str) -> Tuple[str, ...]:
        allowed = self._security_config().get("allowed_channels", {})
        if not isinstance(allowed, Mapping):
            return tuple()
        values = allowed.get(str(adapter or "").strip().lower(), [])
        return tuple(_normalize_string_list(values))

    def _channel_scope(self, adapter: str, channel_id: str) -> Tuple[bool, str]:
        allowed = self._allowed_channels_for(adapter)
        if not allowed:
            return True, "unrestricted"
        if str(channel_id or "").strip() in allowed:
            return True, "allowed"
        return False, "forbidden"

    def _cooldown_seconds(self) -> int:
        return _coerce_non_negative_int(
            self._security_config().get("dangerous_cooldown_seconds", DEFAULT_DANGEROUS_COOLDOWN_SECONDS),
            DEFAULT_DANGEROUS_COOLDOWN_SECONDS,
        )

    def _audit_enabled(self) -> bool:
        return bool(self._security_config().get("audit_log", True))

    def _is_dangerous(self, action: str, command: ControlCommand) -> bool:
        if action in DANGEROUS_ACTIONS:
            return True
        return action == "qr-submit" and bool(command.payload.get("fanout"))

    def _cooldown_key(self, command: ControlCommand, profile: str, action: str) -> Tuple[str, str, str, str]:
        return (
            str(command.adapter or "").strip().lower(),
            str(command.source_user_id or "").strip(),
            str(profile or "").strip(),
            str(action or "").strip(),
        )

    def _cooldown_active(self, command: ControlCommand, profile: str, action: str) -> bool:
        expires_at = self._dangerous_cooldowns.get(self._cooldown_key(command, profile, action), 0.0)
        return expires_at > self._time_fn()

    def _mark_cooldown(self, command: ControlCommand, profile: str, action: str) -> None:
        seconds = self._cooldown_seconds()
        if seconds <= 0:
            return
        self._dangerous_cooldowns[self._cooldown_key(command, profile, action)] = self._time_fn() + seconds

    async def _emit_audit(self, event: BotAuditEvent) -> None:
        if self.handlers.audit is not None and self._audit_enabled():
            await _maybe_await(self.handlers.audit(event=event))

    async def _finish(
        self,
        command: ControlCommand,
        result: BotCommandResult,
        *,
        profile: str,
        admin: bool,
        allowed: bool,
        reason: str,
        authz_status: str,
        channel_scope: str,
        cooldown_active: bool = False,
        dangerous: bool = False,
        channel_id: str = "",
    ) -> BotCommandResult:
        audit = BotAuditEvent(
            audit_id=uuid.uuid4().hex,
            action=result.action,
            adapter=str(command.adapter or ""),
            source_user_id=str(command.source_user_id or ""),
            profile=profile,
            channel_id=str(channel_id or ""),
            admin=admin,
            allowed=allowed,
            reason=reason,
            authz_status=authz_status,
            channel_scope=channel_scope,
            cooldown_active=cooldown_active,
            dangerous=dangerous,
            timestamp=self._time_fn(),
        )
        data = dict(result.data or {})
        data.setdefault("authz_status", authz_status)
        data.setdefault("cooldown_active", cooldown_active)
        data.setdefault("audit_id", audit.audit_id)
        finished = BotCommandResult(result.ok, result.action, result.profile, result.reply, data)
        await self._emit_audit(audit)
        return finished

    def _profile_for_command(
        self,
        command: ControlCommand,
        *,
        channel_id: str = "",
    ) -> Tuple[str, bool, str]:
        is_admin = self.is_admin(command.adapter, command.source_user_id)
        binding, binding_status = self.resolve_binding(
            command.adapter,
            command.source_user_id,
            channel_id,
        )
        if binding is not None:
            bound_profile = str(binding.get("profile") or self._active_profile_name())
            requested_profile = str(command.profile or command.payload.get("profile") or "").strip()
            if requested_profile and requested_profile != bound_profile and not is_admin:
                return bound_profile, is_admin, "profile_mismatch"
            return requested_profile or bound_profile, is_admin, "ok"
        if is_admin:
            return command.profile or command.payload.get("profile") or self._active_profile_name(), is_admin, "ok"
        return "", is_admin, binding_status

    def _all_profile_names(self) -> list[str]:
        return [profile_item.name for profile_item in list_profiles(self.config)]

    def _visible_profiles_for_accounts(self, profile: str, is_admin: bool) -> list[str]:
        if is_admin:
            return self._all_profile_names()
        return [profile] if profile else []

    async def handle_text(
        self,
        raw_text: str,
        *,
        adapter: str,
        source_user_id: str,
        channel_id: str = "",
    ) -> BotCommandResult:
        command = map_adapter_command(
            raw_text,
            adapter=adapter,
            source_user_id=source_user_id,
        )
        if command is None:
            command = ControlCommand(
                action="unknown",
                adapter=adapter,
                source_user_id=source_user_id,
            )
            return await self._finish(
                command,
                BotCommandResult(
                    ok=False,
                    action="unknown",
                    reply="Unknown command.",
                    data={},
                ),
                profile="",
                admin=self.is_admin(adapter, source_user_id),
                allowed=False,
                reason="unknown_command",
                authz_status="unknown_command",
                channel_scope=self._channel_scope(adapter, channel_id)[1],
                channel_id=channel_id,
            )
        return await self.handle_command(command, channel_id=channel_id)

    async def handle_command(
        self,
        command: ControlCommand,
        *,
        channel_id: str = "",
    ) -> BotCommandResult:
        action = command.action
        if action == "refresh-session":
            action = "reauth"
        qr_fanout = action == "qr-submit" and bool(command.payload.get("fanout"))
        dangerous = self._is_dangerous(action, command)
        channel_allowed, channel_scope = self._channel_scope(command.adapter, channel_id)
        profile, is_admin, binding_status = self._profile_for_command(command, channel_id=channel_id)
        if not profile and qr_fanout and is_admin:
            profile = command.profile or self._active_profile_name()
            binding_status = "ok"
        if not channel_allowed and action in BOUND_ACTIONS.union(ADMIN_ACTIONS):
            return await self._finish(
                command,
                BotCommandResult(
                    ok=False,
                    action=action,
                    profile=profile,
                    reply="Channel is not allowed for this adapter.",
                    data={"binding_status": binding_status, "admin": is_admin},
                ),
                profile=profile,
                admin=is_admin,
                allowed=False,
                reason="channel_not_allowed",
                authz_status="channel_not_allowed",
                channel_scope=channel_scope,
                dangerous=dangerous,
                channel_id=channel_id,
            )
        if binding_status == "profile_mismatch":
            return await self._finish(
                command,
                BotCommandResult(
                    ok=False,
                    action=action,
                    profile=profile,
                    reply="User is not allowed to operate that profile.",
                    data={"binding_status": binding_status, "admin": is_admin},
                ),
                profile=profile,
                admin=is_admin,
                allowed=False,
                reason="profile_mismatch",
                authz_status="profile_mismatch",
                channel_scope=channel_scope,
                dangerous=dangerous,
                channel_id=channel_id,
            )
        if not profile and action in BOUND_ACTIONS.union(ADMIN_ACTIONS):
            reason = "Channel is not allowed for this binding." if binding_status == "channel_mismatch" else "User is not bound to a profile."
            return await self._finish(
                command,
                BotCommandResult(
                    ok=False,
                    action=action,
                    reply=reason,
                    data={"binding_status": binding_status, "admin": is_admin},
                ),
                profile="",
                admin=is_admin,
                allowed=False,
                reason=binding_status,
                authz_status=binding_status,
                channel_scope=channel_scope,
                dangerous=dangerous,
                channel_id=channel_id,
            )

        if dangerous and self._cooldown_active(command, profile, action):
            return await self._finish(
                command,
                BotCommandResult(
                    ok=False,
                    action=action,
                    profile=profile,
                    reply="Command cooldown is active.",
                    data={"admin": is_admin},
                ),
                profile=profile,
                admin=is_admin,
                allowed=False,
                reason="cooldown_active",
                authz_status="cooldown_active",
                channel_scope=channel_scope,
                cooldown_active=True,
                dangerous=dangerous,
                channel_id=channel_id,
            )

        if action == "status":
            state = "running" if profile in self.running_profiles else "stopped"
            data: Dict[str, Any] = {"state": state}
            if self.handlers.status is not None:
                value = await _maybe_await(self.handlers.status(profile=profile, state=state, command=command))
                reply = _format_handler_reply(value, "{}: {}".format(profile, state))
                data.update(_handler_data(value))
            else:
                reply = "{}: {}".format(profile, state)
            return await self._finish(
                command,
                BotCommandResult(True, action, profile, reply, data),
                profile=profile,
                admin=is_admin,
                allowed=True,
                reason="ok",
                authz_status="ok",
                channel_scope=channel_scope,
                dangerous=dangerous,
                channel_id=channel_id,
            )

        if action == "start":
            self.running_profiles.add(profile)
            self._persist_bot_state(profile, "running")
            return await self._finish(
                command,
                BotCommandResult(True, action, profile, "{} started.".format(profile), {"state": "running"}),
                profile=profile,
                admin=is_admin,
                allowed=True,
                reason="ok",
                authz_status="ok",
                channel_scope=channel_scope,
                channel_id=channel_id,
            )

        if action == "stop":
            self.running_profiles.discard(profile)
            self._persist_bot_state(profile, "stopped")
            return await self._finish(
                command,
                BotCommandResult(True, action, profile, "{} stopped.".format(profile), {"state": "stopped"}),
                profile=profile,
                admin=is_admin,
                allowed=True,
                reason="ok",
                authz_status="ok",
                channel_scope=channel_scope,
                channel_id=channel_id,
            )

        if action == "force-check":
            self._mark_cooldown(command, profile, action)
            data = {"admin": is_admin}
            if self.handlers.force_check is not None:
                value = await _maybe_await(self.handlers.force_check(profile=profile, command=command, admin=is_admin))
                reply = _format_handler_reply(value, "Force check queued for {}.".format(profile))
                data.update(_handler_data(value))
            else:
                reply = "Force check queued for {}.".format(profile)
            return await self._finish(
                command,
                BotCommandResult(True, action, profile, reply, data),
                profile=profile,
                admin=is_admin,
                allowed=True,
                reason="ok",
                authz_status="ok",
                channel_scope=channel_scope,
                dangerous=dangerous,
                channel_id=channel_id,
            )

        if action == "reauth":
            self._mark_cooldown(command, profile, action)
            data = {"admin": is_admin}
            if self.handlers.reauth is not None:
                value = await _maybe_await(self.handlers.reauth(profile=profile, command=command, admin=is_admin))
                reply = _format_handler_reply(value, "Reauth queued for {}.".format(profile))
                data.update(_handler_data(value))
            else:
                reply = "Reauth queued for {}.".format(profile)
            return await self._finish(
                command,
                BotCommandResult(True, action, profile, reply, data),
                profile=profile,
                admin=is_admin,
                allowed=True,
                reason="ok",
                authz_status="ok",
                channel_scope=channel_scope,
                dangerous=dangerous,
                channel_id=channel_id,
            )

        if action == "qr-submit":
            payload = str(command.payload.get("payload") or "").strip()
            if not payload:
                return await self._finish(
                    command,
                    BotCommandResult(False, action, profile, "QR payload is required."),
                    profile=profile,
                    admin=is_admin,
                    allowed=False,
                    reason="missing_payload",
                    authz_status="missing_payload",
                    channel_scope=channel_scope,
                    dangerous=dangerous,
                    channel_id=channel_id,
                )
            fanout = bool(command.payload.get("fanout"))
            if fanout and not is_admin:
                return await self._finish(
                    command,
                    BotCommandResult(
                        False,
                        action,
                        profile,
                        "QR fan-out requires an admin.",
                        {"fanout": True, "admin": False},
                    ),
                    profile=profile,
                    admin=is_admin,
                    allowed=False,
                    reason="admin_required",
                    authz_status="admin_required",
                    channel_scope=channel_scope,
                    dangerous=dangerous,
                    channel_id=channel_id,
                )
            data = {"payload_present": True, "fanout": fanout, "admin": is_admin}
            if self.handlers.qr_submit is not None:
                value = await _maybe_await(
                    self.handlers.qr_submit(profile=profile, payload=payload, command=command)
                )
                reply = _format_handler_reply(value, "QR payload submitted for {}.".format(profile))
                data.update(_handler_data(value))
                ok = bool(value.get("ok")) if isinstance(value, Mapping) and "ok" in value else True
            else:
                reply = "QR payload submitted for {}.".format(profile)
                ok = True
            if dangerous:
                self._mark_cooldown(command, profile, action)
            return await self._finish(
                command,
                BotCommandResult(ok, action, profile, reply, data),
                profile=profile,
                admin=is_admin,
                allowed=True,
                reason="ok",
                authz_status="ok",
                channel_scope=channel_scope,
                dangerous=dangerous,
                channel_id=channel_id,
            )

        if action == "account-list":
            all_profiles = self._all_profile_names()
            visible_profiles = self._visible_profiles_for_accounts(profile, is_admin)
            states = {
                profile_name: "running" if profile_name in self.running_profiles else "stopped"
                for profile_name in visible_profiles
            }
            data = {
                "profiles": visible_profiles,
                "total_count": len(all_profiles),
                "visible_count": len(visible_profiles),
                "admin": is_admin,
            }
            if self.handlers.accounts is not None:
                value = await _maybe_await(
                    self.handlers.accounts(
                        profiles=visible_profiles,
                        states=states,
                        command=command,
                        admin=is_admin,
                        total_count=len(all_profiles),
                    )
                )
                reply = _format_handler_reply(value, "Profiles: {}".format(", ".join(visible_profiles)))
                data.update(_handler_data(value))
            else:
                reply = "Profiles: {}".format(", ".join(visible_profiles))
            return await self._finish(
                command,
                BotCommandResult(
                    True,
                    action,
                    profile,
                    reply,
                    data,
                ),
                profile=profile,
                admin=is_admin,
                allowed=True,
                reason="ok",
                authz_status="ok",
                channel_scope=channel_scope,
                channel_id=channel_id,
            )

        return await self._finish(
            command,
            BotCommandResult(False, action, profile, "Unsupported command."),
            profile=profile,
            admin=is_admin,
            allowed=False,
            reason="unsupported_command",
            authz_status="unsupported_command",
            channel_scope=channel_scope,
            channel_id=channel_id,
        )

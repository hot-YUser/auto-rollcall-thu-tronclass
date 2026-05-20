"""Discord HTTP Interactions and delivery helpers."""

from __future__ import annotations

import inspect
import os
from collections.abc import Mapping
from typing import Any, Callable, Optional

try:  # pragma: no cover - exercised by integration tests when aiohttp is present
    import aiohttp
except Exception:  # pragma: no cover
    aiohttp = None  # type: ignore[assignment]

try:
    from troTHU.adapter_bridge import ControlCommand
    from troTHU.rollcall_models import OutboundEvent
except ImportError:  # pragma: no cover - script execution fallback
    from adapter_bridge import ControlCommand
    from rollcall_models import OutboundEvent


DISCORD_API_BASE = "https://discord.com/api/v10"
DISCORD_MESSAGE_LIMIT = 2000
DISCORD_EPHEMERAL_FLAG = 64
INTERACTION_TYPE_PING = 1
INTERACTION_TYPE_APPLICATION_COMMAND = 2
INTERACTION_RESPONSE_PONG = 1
INTERACTION_RESPONSE_CHANNEL_MESSAGE = 4
INTERACTION_RESPONSE_DEFERRED_CHANNEL_MESSAGE = 5
INTERACTION_RESPONSE_MODAL = 9
INTERACTION_TYPE_MODAL_SUBMIT = 5
APPLICATION_COMMAND_OPTION_SUB_COMMAND = 1
APPLICATION_COMMAND_OPTION_STRING = 3
MODAL_COMPONENT_TEXT_INPUT = 4
MODAL_TEXT_INPUT_PARAGRAPH = 2


class DiscordDeliveryError(Exception):
    def __init__(
        self,
        message: str,
        *,
        status_code: int = 0,
        endpoint: str = "",
        body: str = "",
    ) -> None:
        super().__init__(message)
        self.status_code = status_code
        self.endpoint = endpoint
        self.body = sanitize_discord_response_body(body)

    def to_dict(self) -> dict[str, Any]:
        return {
            "ok": False,
            "status": self.status_code,
            "endpoint": self.endpoint,
            "error": str(self),
            "body": self.body,
        }


class DiscordSignatureError(Exception):
    """Raised when Discord signature verification cannot be performed safely."""


def normalize_text(value: Any) -> str:
    return str(value or "").strip()


def sanitize_discord_response_body(body: Any, *, limit: int = 300) -> str:
    text = normalize_text(body)
    if not text:
        return ""
    lowered = text.lower()
    for marker in (
        "authorization",
        "bot ",
        "bearer ",
        "access_token",
        "bot_token",
        "interaction_token",
        "x-signature-ed25519",
        "signature",
    ):
        if marker in lowered:
            return "[redacted]"
    if len(text) > limit:
        return text[:limit] + "...(truncated)"
    return text


def sanitize_discord_message(text: Any, *, limit: int = 1900) -> str:
    safe = sanitize_discord_response_body(text, limit=max(1, min(limit, DISCORD_MESSAGE_LIMIT)))
    return safe or " "


def discord_env_value(config: Mapping[str, Any], key: str) -> str:
    integrations = config.get("integrations", {})
    if not isinstance(integrations, Mapping):
        return ""
    discord_config = integrations.get("discord", {})
    if not isinstance(discord_config, Mapping):
        return ""
    env_name = normalize_text(discord_config.get(key))
    if not env_name:
        return ""
    return os.environ.get(env_name, "") or ""


def get_discord_bot_token(config: Mapping[str, Any]) -> str:
    return discord_env_value(config, "token_env")


def get_discord_public_key(config: Mapping[str, Any]) -> str:
    return discord_env_value(config, "public_key_env")


def get_discord_application_id(config: Mapping[str, Any]) -> str:
    return discord_env_value(config, "application_id_env")


def get_discord_default_channel_id(config: Mapping[str, Any]) -> str:
    return discord_env_value(config, "channel_env")


def discord_ephemeral_replies(config: Mapping[str, Any]) -> bool:
    integrations = config.get("integrations", {})
    if not isinstance(integrations, Mapping):
        return True
    discord_config = integrations.get("discord", {})
    if not isinstance(discord_config, Mapping):
        return True
    value = discord_config.get("ephemeral_replies", True)
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
    return True


def discord_signature_verifier_available() -> bool:
    try:
        import nacl.signing  # noqa: F401
    except Exception:
        return False
    return True


def verify_discord_signature(
    public_key: str,
    timestamp: str,
    body: bytes,
    signature: str,
    *,
    verifier: Optional[Callable[..., Any]] = None,
) -> bool:
    public_key = normalize_text(public_key)
    timestamp = normalize_text(timestamp)
    signature = normalize_text(signature)
    if not public_key or not timestamp or not body or not signature:
        raise DiscordSignatureError("Discord signature verification is missing required input.")

    if verifier is not None:
        return bool(
            verifier(
                public_key=public_key,
                timestamp=timestamp,
                body=body,
                signature=signature,
            )
        )

    try:
        from nacl.exceptions import BadSignatureError
        from nacl.signing import VerifyKey
    except Exception as exc:
        raise DiscordSignatureError("PyNaCl is required to verify Discord signatures.") from exc

    try:
        key = VerifyKey(bytes.fromhex(public_key))
        key.verify(timestamp.encode("utf-8") + body, bytes.fromhex(signature))
    except (BadSignatureError, ValueError):
        return False
    return True


def build_discord_command_schema() -> dict[str, Any]:
    return {
        "name": "tron",
        "description": "Control TronClass rollcall automation.",
        "type": 1,
        "options": [
            _subcommand("status", "Show the bound profile status.", with_profile=True),
            _subcommand("start", "Start monitoring the bound profile.", with_profile=True),
            _subcommand("stop", "Stop monitoring the bound profile.", with_profile=True),
            _subcommand("force", "Run one rollcall check now.", with_profile=True),
            _subcommand("reauth", "Refresh login cookies for a profile.", with_profile=True),
            _subcommand(
                "qr",
                "Submit a QR payload for the bound profile.",
                with_profile=True,
                payload_required=True,
            ),
            _subcommand(
                "qr_all",
                "Submit a QR payload to matching pending profiles.",
                with_profile=True,
                payload_required=True,
            ),
            _subcommand("qr_modal", "Open a modal to paste a QR payload.", with_profile=True),
            _subcommand("qr_all_modal", "Open an admin-only modal for QR fan-out.", with_profile=True),
            _subcommand("accounts", "List configured profiles."),
        ],
        "dm_permission": False,
    }


def _subcommand(
    name: str,
    description: str,
    *,
    with_profile: bool = False,
    payload_required: bool = False,
) -> dict[str, Any]:
    options: list[dict[str, Any]] = []
    if with_profile:
        options.append(
            {
                "name": "profile",
                "description": "Profile name.",
                "type": APPLICATION_COMMAND_OPTION_STRING,
                "required": False,
            }
        )
    if payload_required:
        options.append(
            {
                "name": "payload",
                "description": "QR payload.",
                "type": APPLICATION_COMMAND_OPTION_STRING,
                "required": True,
            }
        )
    command = {
        "name": name,
        "description": description,
        "type": APPLICATION_COMMAND_OPTION_SUB_COMMAND,
    }
    if options:
        command["options"] = options
    return command


def _option_map(options: Any) -> dict[str, Any]:
    result: dict[str, Any] = {}
    if not isinstance(options, list):
        return result
    for option in options:
        if not isinstance(option, Mapping):
            continue
        name = normalize_text(option.get("name"))
        if name:
            result[name] = option.get("value")
    return result


def _interaction_user_id(payload: Mapping[str, Any]) -> str:
    member = payload.get("member")
    if isinstance(member, Mapping):
        user = member.get("user")
        if isinstance(user, Mapping):
            user_id = normalize_text(user.get("id"))
            if user_id:
                return user_id
    user = payload.get("user")
    if isinstance(user, Mapping):
        return normalize_text(user.get("id"))
    return ""


def interaction_channel_id(payload: Mapping[str, Any]) -> str:
    return normalize_text(payload.get("channel_id"))


def interaction_to_command(payload: Mapping[str, Any]) -> ControlCommand:
    data = payload.get("data")
    if not isinstance(data, Mapping):
        return ControlCommand("unknown", adapter="discord", source_user_id=_interaction_user_id(payload))

    command_name = normalize_text(data.get("name")).lower()
    options = data.get("options") if isinstance(data.get("options"), list) else []
    subcommand = ""
    sub_options: dict[str, Any] = {}
    if command_name == "tron" and options:
        first = options[0]
        if isinstance(first, Mapping) and int(first.get("type") or 0) == APPLICATION_COMMAND_OPTION_SUB_COMMAND:
            subcommand = normalize_text(first.get("name")).lower()
            sub_options = _option_map(first.get("options"))
    if not subcommand:
        subcommand = command_name
        sub_options = _option_map(options)

    action_map = {
        "status": "status",
        "start": "start",
        "stop": "stop",
        "force": "force-check",
        "force-check": "force-check",
        "reauth": "reauth",
        "refresh": "reauth",
        "qr": "qr-submit",
        "qr_all": "qr-submit",
        "qr-all": "qr-submit",
        "qr_modal": "qr-modal",
        "qr-modal": "qr-modal",
        "qr_all_modal": "qr-modal",
        "qr-all-modal": "qr-modal",
        "accounts": "account-list",
    }
    action = action_map.get(subcommand, "unknown")
    fanout = subcommand in {"qr_all", "qr-all", "qr_all_modal", "qr-all-modal"}
    profile = normalize_text(sub_options.get("profile"))
    qr_payload = normalize_text(sub_options.get("payload"))
    command_payload: dict[str, Any] = {"args": []}
    if action == "qr-submit":
        command_payload["fanout"] = fanout
        if qr_payload:
            command_payload["payload"] = qr_payload
    if action == "qr-modal":
        command_payload["fanout"] = fanout

    return ControlCommand(
        action=action,
        adapter="discord",
        profile=profile,
        payload=command_payload,
        source_user_id=_interaction_user_id(payload),
    )


def build_interaction_response(result: Any, *, ephemeral: bool = True) -> dict[str, Any]:
    content = getattr(result, "reply", "") or "OK"
    data: dict[str, Any] = {
        "content": sanitize_discord_message(content),
        "allowed_mentions": {"parse": []},
    }
    if ephemeral:
        data["flags"] = DISCORD_EPHEMERAL_FLAG
    return {"type": INTERACTION_RESPONSE_CHANNEL_MESSAGE, "data": data}


def build_deferred_interaction_response(*, ephemeral: bool = True) -> dict[str, Any]:
    data: dict[str, Any] = {}
    if ephemeral:
        data["flags"] = DISCORD_EPHEMERAL_FLAG
    return {"type": INTERACTION_RESPONSE_DEFERRED_CHANNEL_MESSAGE, "data": data}


def build_modal_interaction_response(command: ControlCommand, *, fanout: bool = False) -> dict[str, Any]:
    profile = normalize_text(command.profile)
    custom_id = "tron_qr_all_modal" if fanout else "tron_qr_modal"
    if profile:
        custom_id = "{}:{}".format(custom_id, profile[:80])
    return {
        "type": INTERACTION_RESPONSE_MODAL,
        "data": {
            "custom_id": custom_id,
            "title": "TronClass QR {}".format("Fan-out" if fanout else "Submit"),
            "components": [
                {
                    "type": 1,
                    "components": [
                        {
                            "type": MODAL_COMPONENT_TEXT_INPUT,
                            "custom_id": "payload",
                            "label": "QR payload",
                            "style": MODAL_TEXT_INPUT_PARAGRAPH,
                            "required": True,
                            "placeholder": "Paste QR URL or payload",
                        }
                    ],
                }
            ],
        },
    }


def _modal_component_values(components: Any) -> dict[str, str]:
    values: dict[str, str] = {}
    if not isinstance(components, list):
        return values
    for row in components:
        if not isinstance(row, Mapping):
            continue
        for component in row.get("components", []) or []:
            if not isinstance(component, Mapping):
                continue
            custom_id = normalize_text(component.get("custom_id"))
            if custom_id:
                values[custom_id] = normalize_text(component.get("value"))
    return values


def modal_submit_to_command(payload: Mapping[str, Any]) -> ControlCommand:
    data = payload.get("data")
    if not isinstance(data, Mapping):
        return ControlCommand("unknown", adapter="discord", source_user_id=_interaction_user_id(payload))
    custom_id = normalize_text(data.get("custom_id"))
    parts = custom_id.split(":", 1)
    modal_id = parts[0]
    profile = parts[1] if len(parts) > 1 else ""
    values = _modal_component_values(data.get("components"))
    qr_payload = values.get("payload", "")
    fanout = modal_id == "tron_qr_all_modal"
    return ControlCommand(
        action="qr-submit",
        adapter="discord",
        profile=profile,
        payload={"payload": qr_payload, "fanout": fanout, "args": []},
        source_user_id=_interaction_user_id(payload),
    )


async def _maybe_await(value: Any) -> Any:
    if inspect.isawaitable(value):
        return await value
    return value


async def _send_discord_api(
    *,
    endpoint: str,
    method: str,
    url: str,
    payload: Mapping[str, Any],
    headers: Mapping[str, str],
    session_factory: Optional[Callable[[], Any]] = None,
) -> dict[str, Any]:
    owns_session = False
    if session_factory is not None:
        session_context = session_factory()
    else:
        if aiohttp is None:
            raise RuntimeError("aiohttp is required to send Discord messages")
        session_context = aiohttp.ClientSession()
        owns_session = True

    if hasattr(session_context, "__aenter__"):
        async with session_context as session:
            return await _send_with_session(
                session,
                endpoint=endpoint,
                method=method,
                url=url,
                payload=payload,
                headers=headers,
            )

    try:
        return await _send_with_session(
            session_context,
            endpoint=endpoint,
            method=method,
            url=url,
            payload=payload,
            headers=headers,
        )
    finally:
        if owns_session:
            close = getattr(session_context, "close", None)
            if close is not None:
                await _maybe_await(close())


async def _send_with_session(
    session: Any,
    *,
    endpoint: str,
    method: str,
    url: str,
    payload: Mapping[str, Any],
    headers: Mapping[str, str],
) -> dict[str, Any]:
    request = getattr(session, method.lower())
    request_result = request(url, json=dict(payload), headers=dict(headers))
    if inspect.isawaitable(request_result):
        request_result = await request_result

    async with request_result as response:
        body = await response.text()
        status = int(getattr(response, "status", 0))
        safe_body = sanitize_discord_response_body(body)
        if not 200 <= status < 300:
            raise DiscordDeliveryError(
                "Discord {} API returned HTTP {}.".format(endpoint, status),
                status_code=status,
                endpoint=endpoint,
                body=safe_body,
            )
        return {
            "ok": True,
            "status": status,
            "endpoint": endpoint,
            "body": safe_body,
        }


async def send_discord_channel_message(
    channel_id: str,
    text: str,
    bot_token: str,
    *,
    session_factory: Optional[Callable[[], Any]] = None,
) -> dict[str, Any]:
    channel = normalize_text(channel_id)
    token = normalize_text(bot_token)
    if not channel:
        raise DiscordDeliveryError("Discord channel id is missing.", endpoint="channel_message")
    if not token:
        raise DiscordDeliveryError("Discord bot token is missing.", endpoint="channel_message")
    return await _send_discord_api(
        endpoint="channel_message",
        method="post",
        url="{}/channels/{}/messages".format(DISCORD_API_BASE, channel),
        payload={
            "content": sanitize_discord_message(text),
            "allowed_mentions": {"parse": []},
        },
        headers={
            "Authorization": "Bot {}".format(token),
            "Content-Type": "application/json",
        },
        session_factory=session_factory,
    )


async def edit_original_interaction_response(
    application_id: str,
    interaction_token: str,
    text: str,
    *,
    session_factory: Optional[Callable[[], Any]] = None,
) -> dict[str, Any]:
    app_id = normalize_text(application_id)
    token = normalize_text(interaction_token)
    if not app_id:
        raise DiscordDeliveryError("Discord application id is missing.", endpoint="edit_original")
    if not token:
        raise DiscordDeliveryError("Discord interaction token is missing.", endpoint="edit_original")
    return await _send_discord_api(
        endpoint="edit_original",
        method="patch",
        url="{}/webhooks/{}/{}/messages/@original".format(DISCORD_API_BASE, app_id, token),
        payload={
            "content": sanitize_discord_message(text),
            "allowed_mentions": {"parse": []},
        },
        headers={"Content-Type": "application/json"},
        session_factory=session_factory,
    )


async def send_interaction_callback(
    interaction_id: str,
    interaction_token: str,
    response: Mapping[str, Any],
    *,
    session_factory: Optional[Callable[[], Any]] = None,
) -> dict[str, Any]:
    interaction = normalize_text(interaction_id)
    token = normalize_text(interaction_token)
    if not interaction:
        raise DiscordDeliveryError("Discord interaction id is missing.", endpoint="interaction_callback")
    if not token:
        raise DiscordDeliveryError("Discord interaction token is missing.", endpoint="interaction_callback")
    return await _send_discord_api(
        endpoint="interaction_callback",
        method="post",
        url="{}/interactions/{}/{}/callback".format(DISCORD_API_BASE, interaction, token),
        payload=dict(response),
        headers={"Content-Type": "application/json"},
        session_factory=session_factory,
    )


async def sync_discord_command_schema(
    config: Mapping[str, Any],
    *,
    dry_run: bool = True,
    apply: bool = False,
    sender: Optional[Callable[..., Any]] = None,
) -> dict[str, Any]:
    schema = build_discord_command_schema()
    app_id = get_discord_application_id(config)
    guild_id = discord_env_value(config, "guild_id_env")
    token = get_discord_bot_token(config)
    endpoint = "guild_command_schema" if guild_id else "global_command_schema"
    url = (
        "{}/applications/{}/guilds/{}/commands".format(DISCORD_API_BASE, app_id, guild_id)
        if guild_id
        else "{}/applications/{}/commands".format(DISCORD_API_BASE, app_id)
    )
    report = {
        "status": "dry_run" if dry_run or not apply else "pending",
        "dry_run": bool(dry_run or not apply),
        "apply": bool(apply),
        "application_id_configured": bool(app_id),
        "guild_id_configured": bool(guild_id),
        "token_configured": bool(token),
        "endpoint": endpoint,
        "schema": schema,
        "diff": {"would_upsert": True, "command": schema.get("name", "tron")},
    }
    if not apply or dry_run:
        return report
    if not app_id or not token:
        report["status"] = "blocked"
        report["reason"] = "missing_application_id_or_token"
        return report
    if sender is not None:
        send_result = await _maybe_await(sender(url=url, schema=schema, bot_token=token, endpoint=endpoint))
    else:
        send_result = await _send_discord_api(
            endpoint=endpoint,
            method="post",
            url=url,
            payload=schema,
            headers={"Authorization": "Bot {}".format(token), "Content-Type": "application/json"},
        )
    report["status"] = "ok"
    report["result"] = sanitize_discord_response_body(send_result)
    return report


def format_outbound_event(event: OutboundEvent) -> str:
    parts = [normalize_text(event.title)]
    if event.rollcall_id not in (None, ""):
        parts.append("rollcall_id: {}".format(event.rollcall_id))
    if normalize_text(event.body):
        parts.append(normalize_text(event.body))
    return "\n".join(part for part in parts if part)


def create_discord_notification_sink(
    config: Mapping[str, Any],
    *,
    sender: Optional[Callable[..., Any]] = None,
):
    token = get_discord_bot_token(config)
    fallback_channel = get_discord_default_channel_id(config)
    if not token and sender is None:
        return None

    async def discord_notification_sink(event: OutboundEvent) -> Optional[dict[str, Any]]:
        target = event.target
        if target is None or target.adapter != "discord":
            return None
        channel_id = normalize_text(target.channel_id) or normalize_text(fallback_channel)
        if not channel_id:
            return None
        push_sender = sender or send_discord_channel_message
        return await _maybe_await(
            push_sender(
                channel_id=channel_id,
                text=format_outbound_event(event),
                bot_token=token,
            )
        )

    return discord_notification_sink

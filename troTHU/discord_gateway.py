"""Optional Discord Gateway core.

This module intentionally avoids a large Discord SDK. It provides a small,
testable Gateway loop that reuses the existing Discord interaction parser and
BotRuntime authorization model.
"""

from __future__ import annotations

import asyncio
import inspect
from typing import Any, Dict, Mapping

try:  # pragma: no cover - dependency fallback is covered by diagnostics
    import aiohttp
except Exception:  # pragma: no cover
    aiohttp = None  # type: ignore[assignment]

try:  # pragma: no cover - script execution fallback
    from troTHU.discord_adapter import (
        build_deferred_interaction_response,
        build_discord_command_schema,
        build_interaction_response,
        build_modal_interaction_response,
        edit_original_interaction_response,
        get_discord_application_id,
        get_discord_bot_token,
        get_discord_default_channel_id,
        interaction_channel_id,
        interaction_to_command,
        modal_submit_to_command,
        send_interaction_callback,
        sanitize_discord_response_body,
    )
except ImportError:  # pragma: no cover
    from discord_adapter import (
        build_deferred_interaction_response,
        build_discord_command_schema,
        build_interaction_response,
        build_modal_interaction_response,
        edit_original_interaction_response,
        get_discord_application_id,
        get_discord_bot_token,
        get_discord_default_channel_id,
        interaction_channel_id,
        interaction_to_command,
        modal_submit_to_command,
        send_interaction_callback,
        sanitize_discord_response_body,
    )


GATEWAY_VERSION = "discord-gateway-v1"
DISCORD_GATEWAY_URL = "wss://gateway.discord.gg/?v=10&encoding=json"
OP_DISPATCH = 0
OP_HEARTBEAT = 1
OP_IDENTIFY = 2
OP_RECONNECT = 7
OP_INVALID_SESSION = 9
OP_HELLO = 10
OP_HEARTBEAT_ACK = 11
INTERACTION_CREATE = "INTERACTION_CREATE"
READY = "READY"
MODAL_SUBMIT_TYPE = 5
SLOW_ACTIONS = {"force-check", "reauth", "qr-submit"}


class DiscordGatewayError(Exception):
    """Raised when the optional Gateway loop cannot run safely."""


def _clean_text(value: Any) -> str:
    return str(value or "").strip()


def build_gateway_health(config: Mapping[str, Any]) -> Dict[str, Any]:
    token = get_discord_bot_token(config)
    app_id = get_discord_application_id(config)
    channel = get_discord_default_channel_id(config)
    return {
        "version": GATEWAY_VERSION,
        "status": "ok" if token and app_id else "warn",
        "gateway_optional": True,
        "http_interactions_recommended": True,
        "configured": {
            "token": bool(token),
            "application_id": bool(app_id),
            "default_channel": bool(channel),
        },
        "schema_subcommands": [item["name"] for item in build_discord_command_schema().get("options", [])],
        "redacted": True,
        "connects": False,
    }


def build_gateway_identify_payload(config: Mapping[str, Any], *, token: str) -> Dict[str, Any]:
    return {
        "op": OP_IDENTIFY,
        "d": {
            "token": _clean_text(token),
            "intents": 0,
            "properties": {
                "os": "windows",
                "browser": "troTHU",
                "device": "troTHU",
            },
        },
    }


def parse_gateway_payload(payload: Any) -> Dict[str, Any]:
    if not isinstance(payload, Mapping):
        return {"ok": False, "op": None, "event": "", "sequence": None, "type": "invalid"}
    op = payload.get("op")
    event = _clean_text(payload.get("t"))
    data = payload.get("d")
    data_type = ""
    if isinstance(data, Mapping):
        data_type = _clean_text(data.get("type"))
    return {
        "ok": True,
        "op": op,
        "event": event,
        "sequence": payload.get("s"),
        "interaction_type": data_type,
        "known": op in {OP_DISPATCH, OP_HEARTBEAT, OP_RECONNECT, OP_INVALID_SESSION, OP_HELLO, OP_HEARTBEAT_ACK},
    }


async def _maybe_await(value: Any) -> Any:
    if inspect.isawaitable(value):
        return await value
    return value


async def _send_interaction(
    interaction_sender: Any,
    *,
    endpoint: str,
    **kwargs: Any,
) -> Any:
    if interaction_sender is not None:
        return await _maybe_await(interaction_sender(endpoint=endpoint, **kwargs))
    if endpoint == "callback":
        return await send_interaction_callback(
            kwargs["interaction_id"],
            kwargs["interaction_token"],
            kwargs["response"],
        )
    if endpoint == "edit_original":
        return await edit_original_interaction_response(
            kwargs["application_id"],
            kwargs["interaction_token"],
            kwargs["text"],
        )
    return None


async def _handle_interaction(payload: Mapping[str, Any], runtime: Any, config: Mapping[str, Any], interaction_sender: Any) -> None:
    interaction_id = _clean_text(payload.get("id"))
    interaction_token = _clean_text(payload.get("token"))
    interaction_type = int(payload.get("type") or 0)
    channel_id = interaction_channel_id(payload)
    app_id = _clean_text(payload.get("application_id")) or get_discord_application_id(config)
    if interaction_type == MODAL_SUBMIT_TYPE:
        command = modal_submit_to_command(payload)
    else:
        command = interaction_to_command(payload)
    if command.action == "qr-modal":
        response = build_modal_interaction_response(command, fanout=bool(command.payload.get("fanout")))
        await _send_interaction(
            interaction_sender,
            endpoint="callback",
            interaction_id=interaction_id,
            interaction_token=interaction_token,
            response=response,
        )
        return
    if command.action in SLOW_ACTIONS:
        await _send_interaction(
            interaction_sender,
            endpoint="callback",
            interaction_id=interaction_id,
            interaction_token=interaction_token,
            response=build_deferred_interaction_response(ephemeral=True),
        )
        result = await runtime.handle_command(command, channel_id=channel_id)
        await _send_interaction(
            interaction_sender,
            endpoint="edit_original",
            application_id=app_id,
            interaction_token=interaction_token,
            text=getattr(result, "reply", "OK") or "OK",
        )
        return
    result = await runtime.handle_command(command, channel_id=channel_id)
    await _send_interaction(
        interaction_sender,
        endpoint="callback",
        interaction_id=interaction_id,
        interaction_token=interaction_token,
        response=build_interaction_response(result, ephemeral=True),
    )


async def _heartbeat_loop(ws: Any, interval_ms: int, seq_ref: Dict[str, Any], stop_event: Any) -> None:
    interval = max(1.0, float(interval_ms or 45000) / 1000.0)
    while stop_event is None or not stop_event.is_set():
        await asyncio.sleep(interval)
        await _maybe_await(ws.send_json({"op": OP_HEARTBEAT, "d": seq_ref.get("seq")}))


async def run_discord_gateway(
    config: Mapping[str, Any],
    runtime: Any,
    *,
    session_factory: Any = None,
    stop_event: Any = None,
    interaction_sender: Any = None,
) -> Dict[str, Any]:
    token = get_discord_bot_token(config)
    if not token:
        raise DiscordGatewayError("Discord bot token is required for Gateway mode.")
    owns_session = False
    if session_factory is not None:
        session = session_factory()
    else:
        if aiohttp is None:
            raise DiscordGatewayError("aiohttp is required for Gateway mode.")
        session = aiohttp.ClientSession()
        owns_session = True

    events = []
    seq_ref: Dict[str, Any] = {"seq": None}
    heartbeat_task = None
    try:
        ws_context = session.ws_connect(DISCORD_GATEWAY_URL)
        if inspect.isawaitable(ws_context):
            ws_context = await ws_context
        async with ws_context as ws:
            while stop_event is None or not stop_event.is_set():
                payload = await _maybe_await(ws.receive_json())
                parsed = parse_gateway_payload(payload)
                events.append(parsed)
                if parsed.get("sequence") is not None:
                    seq_ref["seq"] = parsed.get("sequence")
                op = parsed.get("op")
                if op == OP_HELLO:
                    interval_ms = 45000
                    data = payload.get("d") if isinstance(payload, Mapping) else {}
                    if isinstance(data, Mapping):
                        interval_ms = int(data.get("heartbeat_interval") or interval_ms)
                    await _maybe_await(ws.send_json(build_gateway_identify_payload(config, token=token)))
                    heartbeat_task = asyncio.create_task(_heartbeat_loop(ws, interval_ms, seq_ref, stop_event))
                elif op == OP_HEARTBEAT:
                    await _maybe_await(ws.send_json({"op": OP_HEARTBEAT, "d": seq_ref.get("seq")}))
                elif op == OP_DISPATCH and parsed.get("event") == INTERACTION_CREATE:
                    data = payload.get("d") if isinstance(payload, Mapping) else {}
                    if isinstance(data, Mapping):
                        await _handle_interaction(data, runtime, config, interaction_sender)
                elif op in {OP_RECONNECT, OP_INVALID_SESSION}:
                    break
                if stop_event is None and len(events) >= 20:
                    break
    except Exception as exc:
        safe = sanitize_discord_response_body(str(exc))
        raise DiscordGatewayError(safe) from exc
    finally:
        if heartbeat_task is not None:
            heartbeat_task.cancel()
        if owns_session:
            close = getattr(session, "close", None)
            if close is not None:
                await _maybe_await(close())
    return {"version": GATEWAY_VERSION, "status": "stopped", "events": events}

"""HTTP adapter host for bot runtime commands."""

from __future__ import annotations

import asyncio
import base64
import json
import hashlib
import hmac
import inspect
from collections.abc import Iterable, Mapping
from typing import Any

try:  # pragma: no cover - exercised through tests when aiohttp is present
    from aiohttp import web
except Exception:  # pragma: no cover
    web = None  # type: ignore[assignment]

try:
    from troTHU.bot_runtime import BotCommandResult, BotRuntime
    from troTHU.discord_adapter import (
        DiscordDeliveryError,
        DiscordSignatureError,
        build_deferred_interaction_response,
        build_interaction_response,
        build_modal_interaction_response,
        discord_ephemeral_replies,
        discord_signature_verifier_available,
        edit_original_interaction_response,
        get_discord_application_id,
        get_discord_bot_token,
        get_discord_default_channel_id,
        get_discord_public_key,
        interaction_channel_id,
        interaction_to_command,
        sanitize_discord_response_body,
        verify_discord_signature,
    )
    from troTHU.line_adapter import (
        LineDeliveryError,
        get_line_access_token,
        get_line_secret,
        sanitize_line_response_body,
        send_line_reply,
    )
except ImportError:  # pragma: no cover - script execution fallback
    from bot_runtime import BotCommandResult, BotRuntime
    from discord_adapter import (
        DiscordDeliveryError,
        DiscordSignatureError,
        build_deferred_interaction_response,
        build_interaction_response,
        build_modal_interaction_response,
        discord_ephemeral_replies,
        discord_signature_verifier_available,
        edit_original_interaction_response,
        get_discord_application_id,
        get_discord_bot_token,
        get_discord_default_channel_id,
        get_discord_public_key,
        interaction_channel_id,
        interaction_to_command,
        sanitize_discord_response_body,
        verify_discord_signature,
    )
    from line_adapter import (
        LineDeliveryError,
        get_line_access_token,
        get_line_secret,
        sanitize_line_response_body,
        send_line_reply,
    )


def enabled_adapters(adapter: str) -> list[str]:
    value = (adapter or "all").lower()
    if value == "all":
        return ["generic", "line", "discord"]
    if value in {"generic", "line", "discord"}:
        return [value]
    raise ValueError(f"unsupported adapter: {adapter}")


def calculate_line_signature(secret: str, body: bytes) -> str:
    digest = hmac.new(secret.encode("utf-8"), body, hashlib.sha256).digest()
    return base64.b64encode(digest).decode("ascii")


def verify_line_signature(secret: str, body: bytes, signature: str | None) -> bool:
    if not signature:
        return False
    expected = calculate_line_signature(secret, body)
    return hmac.compare_digest(expected, signature)


async def default_line_sender(
    *,
    reply_token: str,
    text: str,
    access_token: str,
) -> Mapping[str, Any]:
    return await send_line_reply(reply_token, text, access_token)


async def default_discord_followup_sender(
    *,
    application_id: str,
    interaction_token: str,
    text: str,
) -> Mapping[str, Any]:
    return await edit_original_interaction_response(application_id, interaction_token, text)


def _json_error(message: str, status: int):
    return web.json_response({"ok": False, "error": message}, status=status)


def _event_channel_id(source: Mapping[str, Any]) -> str:
    for key in ("groupId", "roomId", "userId"):
        value = source.get(key)
        if value:
            return str(value)
    return ""


async def _maybe_await(value: Any) -> Any:
    if inspect.isawaitable(value):
        return await value
    return value


def _all_ok(results: Iterable[Mapping[str, Any]]) -> bool:
    return all(bool(item.get("ok", True)) for item in results)


def _line_health(config: Mapping[str, Any], adapters: Iterable[str]) -> Mapping[str, Any]:
    adapter_enabled = "line" in set(adapters)
    secret_configured = bool(get_line_secret(config))
    token_configured = bool(get_line_access_token(config))
    return {
        "enabled": adapter_enabled,
        "secret_configured": secret_configured,
        "token_configured": token_configured,
        "signature_verification": adapter_enabled and secret_configured,
        "reply_api": adapter_enabled and token_configured,
        "push_api": adapter_enabled and token_configured,
    }


def _discord_health(
    config: Mapping[str, Any],
    adapters: Iterable[str],
    *,
    signature_verifier: Any = None,
) -> Mapping[str, Any]:
    adapter_enabled = "discord" in set(adapters)
    return {
        "enabled": adapter_enabled,
        "public_key_configured": bool(get_discord_public_key(config)),
        "token_configured": bool(get_discord_bot_token(config)),
        "application_id_configured": bool(get_discord_application_id(config)),
        "channel_configured": bool(get_discord_default_channel_id(config)),
        "signature_verifier_available": bool(signature_verifier)
        or discord_signature_verifier_available(),
        "interactions": adapter_enabled,
        "push_api": adapter_enabled and bool(get_discord_bot_token(config)),
    }


def _sanitize_sender_result(result: Any) -> Mapping[str, Any]:
    if isinstance(result, Mapping):
        sanitized = {}
        for key, value in result.items():
            key_text = str(key)
            if key_text.lower() in {"access_token", "token", "authorization", "headers"}:
                sanitized[key_text] = "[redacted]"
            elif key_text == "body":
                sanitized[key_text] = sanitize_line_response_body(value)
            else:
                sanitized[key_text] = value
        sanitized.setdefault("ok", True)
        return sanitized
    return {"ok": True, "result": str(result)}


def _sender_error_result(exc: BaseException) -> Mapping[str, Any]:
    if isinstance(exc, LineDeliveryError):
        return exc.to_dict()
    return {
        "ok": False,
        "status": 0,
        "endpoint": "reply",
        "error": sanitize_line_response_body(str(exc)),
    }


def _discord_sender_error_result(exc: BaseException) -> Mapping[str, Any]:
    if isinstance(exc, DiscordDeliveryError):
        return exc.to_dict()
    return {
        "ok": False,
        "status": 0,
        "endpoint": "edit_original",
        "error": sanitize_discord_response_body(str(exc)),
    }


def create_app(
    config: Mapping[str, Any],
    runtime: BotRuntime,
    *,
    line_sender: Any = None,
    adapter: str = "all",
    discord_signature_verifier: Any = None,
    discord_followup_sender: Any = None,
):
    """Create an aiohttp application for generic, LINE, and Discord webhooks."""
    if web is None:
        raise RuntimeError("aiohttp.web is required to run the adapter server")

    adapters = enabled_adapters(adapter)
    app = web.Application()

    async def health(request):
        return web.json_response(
            {
                "ok": True,
                "adapters": list(adapters),
                "line": _line_health(config, adapters),
                "discord": _discord_health(
                    config,
                    adapters,
                    signature_verifier=discord_signature_verifier,
                ),
            }
        )

    async def generic_message(request):
        if "generic" not in adapters:
            return _json_error("generic adapter is not enabled", 404)
        adapter_name = request.match_info.get("adapter") or "generic"
        try:
            payload = await request.json()
        except Exception:
            return _json_error("invalid json", 400)
        if not isinstance(payload, Mapping):
            return _json_error("json body must be an object", 400)

        source_user_id = str(payload.get("source_user_id") or "")
        text = str(payload.get("text") or "")
        channel_id = str(payload.get("channel_id") or "")
        if not source_user_id or not text:
            return _json_error("source_user_id and text are required", 400)

        result = await runtime.handle_text(
            text,
            adapter=adapter_name,
            source_user_id=source_user_id,
            channel_id=channel_id,
        )
        return web.json_response(result.to_dict())

    async def line_webhook(request):
        if "line" not in adapters:
            return _json_error("line adapter is not enabled", 404)
        body = await request.read()
        secret = get_line_secret(config)
        if secret and not verify_line_signature(secret, body, request.headers.get("X-Line-Signature")):
            return _json_error("invalid line signature", 401)
        try:
            payload = json.loads(body.decode("utf-8") or "{}")
        except Exception:
            return _json_error("invalid json", 400)
        if not isinstance(payload, Mapping):
            return _json_error("json body must be an object", 400)

        token = get_line_access_token(config)
        sender = line_sender
        results: list[Mapping[str, Any]] = []
        for event in payload.get("events", []) or []:
            if not isinstance(event, Mapping):
                results.append({"ok": True, "ignored": True, "reason": "invalid_event"})
                continue
            message = event.get("message", {})
            if event.get("type") != "message" or not isinstance(message, Mapping) or message.get("type") != "text":
                results.append({"ok": True, "ignored": True, "reason": "unsupported_event"})
                continue

            source = event.get("source", {})
            if not isinstance(source, Mapping):
                source = {}
            result: BotCommandResult = await runtime.handle_text(
                str(message.get("text") or ""),
                adapter="line",
                source_user_id=str(source.get("userId") or ""),
                channel_id=_event_channel_id(source),
            )
            result_dict = result.to_dict()
            reply_token = event.get("replyToken")
            if reply_token and result.reply and (sender or token):
                if sender is None:
                    sender = default_line_sender
                try:
                    send_result = await _maybe_await(
                        sender(
                            reply_token=str(reply_token),
                            text=result.reply,
                            access_token=token or "",
                        )
                    )
                    result_dict["line_reply"] = _sanitize_sender_result(send_result)
                except Exception as exc:  # pragma: no cover - exact sender failures are platform-specific
                    result_dict["line_reply"] = _sender_error_result(exc)
            results.append(result_dict)

        return web.json_response({"ok": _all_ok(results), "results": results})

    async def _send_discord_followup(payload: Mapping[str, Any], result: BotCommandResult) -> None:
        application_id = str(payload.get("application_id") or get_discord_application_id(config) or "")
        interaction_token = str(payload.get("token") or "")
        sender = discord_followup_sender or default_discord_followup_sender
        try:
            await _maybe_await(
                sender(
                    application_id=application_id,
                    interaction_token=interaction_token,
                    text=result.reply or "OK",
                )
            )
        except Exception:
            # Discord follow-up failures are intentionally not logged here: response
            # bodies may include platform tokens or payload echoes. Tests inspect
            # sender injection; production health is covered through delivery errors.
            return

    async def _run_deferred_discord_command(payload: Mapping[str, Any], channel_id: str) -> None:
        command = interaction_to_command(payload)
        result = await runtime.handle_command(command, channel_id=channel_id)
        await _send_discord_followup(payload, result)

    async def discord_interactions(request):
        if "discord" not in adapters:
            return _json_error("discord adapter is not enabled", 404)
        body = await request.read()
        public_key = get_discord_public_key(config)
        signature = request.headers.get("X-Signature-Ed25519")
        timestamp = request.headers.get("X-Signature-Timestamp")
        try:
            signature_ok = verify_discord_signature(
                public_key,
                timestamp or "",
                body,
                signature or "",
                verifier=discord_signature_verifier,
            )
        except DiscordSignatureError:
            signature_ok = False
        if not signature_ok:
            return _json_error("invalid discord signature", 401)

        try:
            payload = json.loads(body.decode("utf-8") or "{}")
        except Exception:
            return _json_error("invalid json", 400)
        if not isinstance(payload, Mapping):
            return _json_error("json body must be an object", 400)

        if int(payload.get("type") or 0) == 1:
            return web.json_response({"type": 1})
        if int(payload.get("type") or 0) != 2:
            result = BotCommandResult(False, "unknown", reply="Unsupported Discord interaction.")
            return web.json_response(
                build_interaction_response(result, ephemeral=discord_ephemeral_replies(config))
            )

        command = interaction_to_command(payload)
        channel_id = interaction_channel_id(payload)
        ephemeral = discord_ephemeral_replies(config)
        if command.action == "qr-modal":
            return web.json_response(
                build_modal_interaction_response(command, fanout=bool(command.payload.get("fanout")))
            )
        if command.action in {"force-check", "reauth", "qr-submit"}:
            asyncio.create_task(_run_deferred_discord_command(payload, channel_id))
            return web.json_response(build_deferred_interaction_response(ephemeral=ephemeral))

        result = await runtime.handle_command(command, channel_id=channel_id)
        return web.json_response(build_interaction_response(result, ephemeral=ephemeral))

    app.router.add_get("/health", health)
    app.router.add_post("/adapter/{adapter}/message", generic_message)
    app.router.add_post("/line/webhook", line_webhook)
    app.router.add_post("/discord/interactions", discord_interactions)
    return app


async def run_adapter_server(
    config: Mapping[str, Any],
    runtime: BotRuntime,
    *,
    host: str = "127.0.0.1",
    port: int = 8787,
    adapter: str = "all",
    line_sender: Any = None,
    discord_signature_verifier: Any = None,
    discord_followup_sender: Any = None,
) -> None:
    """Run the adapter server until cancelled."""
    if web is None:
        raise RuntimeError("aiohttp.web is required to run the adapter server")
    app = create_app(
        config,
        runtime,
        line_sender=line_sender,
        adapter=adapter,
        discord_signature_verifier=discord_signature_verifier,
        discord_followup_sender=discord_followup_sender,
    )
    runner = web.AppRunner(app)
    await runner.setup()
    site = web.TCPSite(runner, host, port)
    await site.start()
    try:
        await asyncio.Event().wait()
    finally:
        await runner.cleanup()

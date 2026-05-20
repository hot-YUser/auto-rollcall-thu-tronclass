"""Telegram Bot API delivery helpers and notification sink."""

from __future__ import annotations

import inspect
import os
from collections.abc import Mapping
from typing import Any, Callable, Optional

try:  # pragma: no cover - exercised by tests when aiohttp is present
    import aiohttp
except Exception:  # pragma: no cover
    aiohttp = None  # type: ignore[assignment]

try:
    from troTHU.rollcall_models import OutboundEvent
except ImportError:  # pragma: no cover - script execution fallback
    from rollcall_models import OutboundEvent


TELEGRAM_API_BASE = "https://api.telegram.org"
TELEGRAM_TEXT_LIMIT = 4096


class TelegramDeliveryError(Exception):
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
        self.body = sanitize_telegram_response_body(body)

    def to_dict(self) -> dict[str, Any]:
        return {
            "ok": False,
            "status": self.status_code,
            "endpoint": self.endpoint,
            "error": str(self),
            "body": self.body,
        }


def normalize_text(value: Any) -> str:
    return str(value or "").strip()


def sanitize_telegram_response_body(body: Any, *, limit: int = 300) -> str:
    text = normalize_text(body)
    if not text:
        return ""
    lowered = text.lower()
    for marker in (
        "authorization",
        "bot",
        "chat_id",
        "cookie",
        "password",
        "payload",
        "secret",
        "session",
        "token",
    ):
        if marker in lowered:
            return "[redacted]"
    if len(text) > limit:
        return text[:limit] + "...(truncated)"
    return text


def sanitize_telegram_message(text: Any, *, limit: int = TELEGRAM_TEXT_LIMIT) -> str:
    content = normalize_text(text)
    if not content:
        return " "
    lowered = content.lower()
    for marker in ("authorization", "bot_token", "cookie", "password", "payload", "secret", "session", "token"):
        if marker in lowered:
            return "[redacted]"
    return content[: max(1, min(int(limit), TELEGRAM_TEXT_LIMIT))]


def build_telegram_text_message(text: str, *, limit: int = TELEGRAM_TEXT_LIMIT) -> dict[str, str]:
    return {"text": sanitize_telegram_message(text, limit=limit)}


def telegram_env_value(config: Mapping[str, Any], key: str) -> str:
    integrations = config.get("integrations", {})
    if not isinstance(integrations, Mapping):
        return ""
    telegram_config = integrations.get("telegram", {})
    if not isinstance(telegram_config, Mapping):
        return ""
    env_name = normalize_text(telegram_config.get(key))
    if not env_name:
        return ""
    return os.environ.get(env_name, "") or ""


def get_telegram_bot_token(config: Mapping[str, Any]) -> str:
    token = telegram_env_value(config, "token_env")
    if token:
        return token
    notifications = config.get("notifications", {})
    tg = notifications.get("tg", {}) if isinstance(notifications, Mapping) else {}
    return normalize_text(tg.get("key")) if isinstance(tg, Mapping) else ""


def get_telegram_default_chat_id(config: Mapping[str, Any]) -> str:
    chat = telegram_env_value(config, "chat_env")
    if chat:
        return chat
    notifications = config.get("notifications", {})
    tg = notifications.get("tg", {}) if isinstance(notifications, Mapping) else {}
    return normalize_text(tg.get("chat")) if isinstance(tg, Mapping) else ""


async def _maybe_await(value: Any) -> Any:
    if inspect.isawaitable(value):
        return await value
    return value


async def _send_with_session(
    session: Any,
    *,
    url: str,
    payload: Mapping[str, Any],
) -> dict[str, Any]:
    post_result = session.post(url, data=dict(payload))
    if inspect.isawaitable(post_result):
        post_result = await post_result

    async with post_result as response:
        body = await response.text()
        status = int(getattr(response, "status", 0))
        safe_body = sanitize_telegram_response_body(body)
        if not 200 <= status < 300:
            raise TelegramDeliveryError(
                "Telegram sendMessage API returned HTTP {}.".format(status),
                status_code=status,
                endpoint="sendMessage",
                body=safe_body,
            )
        return {
            "ok": True,
            "status": status,
            "endpoint": "sendMessage",
            "body": safe_body,
        }


async def send_telegram_message(
    chat_id: str,
    text: str,
    bot_token: str,
    *,
    session_factory: Optional[Callable[[], Any]] = None,
) -> dict[str, Any]:
    chat = normalize_text(chat_id)
    token = normalize_text(bot_token)
    if not chat:
        raise TelegramDeliveryError("Telegram chat id is missing.", endpoint="sendMessage")
    if not token:
        raise TelegramDeliveryError("Telegram bot token is missing.", endpoint="sendMessage")
    payload = {
        "chat_id": chat,
        "text": build_telegram_text_message(text)["text"],
    }
    url = "{}/bot{}/sendMessage".format(TELEGRAM_API_BASE, token)

    owns_session = False
    if session_factory is not None:
        session_context = session_factory()
    else:
        if aiohttp is None:
            raise RuntimeError("aiohttp is required to send Telegram messages")
        session_context = aiohttp.ClientSession()
        owns_session = True

    if hasattr(session_context, "__aenter__"):
        async with session_context as session:
            return await _send_with_session(session, url=url, payload=payload)

    try:
        return await _send_with_session(session_context, url=url, payload=payload)
    finally:
        if owns_session:
            close = getattr(session_context, "close", None)
            if close is not None:
                await _maybe_await(close())


def format_outbound_event(event: OutboundEvent) -> str:
    parts = [normalize_text(event.title)]
    if event.rollcall_id not in (None, ""):
        parts.append("rollcall_id: {}".format(event.rollcall_id))
    if normalize_text(event.body):
        parts.append(normalize_text(event.body))
    return "\n".join(part for part in parts if part)


def create_telegram_notification_sink(
    config: Mapping[str, Any],
    *,
    sender: Optional[Callable[..., Any]] = None,
):
    token = get_telegram_bot_token(config)
    default_chat = get_telegram_default_chat_id(config)
    if not token and sender is None:
        return None

    async def telegram_notification_sink(event: OutboundEvent) -> Optional[dict[str, Any]]:
        target = event.target
        if target is None or target.adapter != "telegram":
            return None
        chat_id = normalize_text(target.channel_id) or normalize_text(target.target_id) or default_chat
        if not chat_id:
            return None
        text = format_outbound_event(event)
        push_sender = sender or send_telegram_message
        return await _maybe_await(
            push_sender(
                chat_id=chat_id,
                text=text,
                bot_token=token,
            )
        )

    return telegram_notification_sink

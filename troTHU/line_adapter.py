"""LINE Messaging API delivery helpers and notification sink."""

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
    from troTHU.rollcall_models import OutboundEvent
except ImportError:  # pragma: no cover - script execution fallback
    from rollcall_models import OutboundEvent


LINE_REPLY_URL = "https://api.line.me/v2/bot/message/reply"
LINE_PUSH_URL = "https://api.line.me/v2/bot/message/push"
LINE_TEXT_LIMIT = 5000


class LineDeliveryError(Exception):
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
        self.body = sanitize_line_response_body(body)

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


def build_line_text_message(text: str, *, limit: int = LINE_TEXT_LIMIT) -> dict[str, str]:
    content = normalize_text(text) or " "
    return {"type": "text", "text": content[: max(1, min(int(limit), LINE_TEXT_LIMIT))]}


def sanitize_line_response_body(body: Any, *, limit: int = 300) -> str:
    text = normalize_text(body)
    if not text:
        return ""
    redacted = text
    for marker in ("Bearer ", "access_token", "channel_access_token"):
        if marker.lower() in redacted.lower():
            return "[redacted]"
    if len(redacted) > limit:
        return redacted[:limit] + "...(truncated)"
    return redacted


def line_env_value(config: Mapping[str, Any], key: str) -> str:
    integrations = config.get("integrations", {})
    if not isinstance(integrations, Mapping):
        return ""
    line_config = integrations.get("line", {})
    if not isinstance(line_config, Mapping):
        return ""
    env_name = normalize_text(line_config.get(key))
    if not env_name:
        return ""
    return os.environ.get(env_name, "") or ""


def get_line_access_token(config: Mapping[str, Any]) -> str:
    return line_env_value(config, "token_env")


def get_line_secret(config: Mapping[str, Any]) -> str:
    return line_env_value(config, "secret_env")


async def _maybe_await(value: Any) -> Any:
    if inspect.isawaitable(value):
        return await value
    return value


async def _post_line_api(
    *,
    endpoint: str,
    url: str,
    payload: Mapping[str, Any],
    access_token: str,
    session_factory: Optional[Callable[[], Any]] = None,
) -> dict[str, Any]:
    token = normalize_text(access_token)
    if not token:
        raise LineDeliveryError("LINE access token is missing.", endpoint=endpoint)
    headers = {
        "Authorization": "Bearer {}".format(token),
        "Content-Type": "application/json",
    }

    owns_session = False
    if session_factory is not None:
        session_context = session_factory()
    else:
        if aiohttp is None:
            raise RuntimeError("aiohttp is required to send LINE messages")
        session_context = aiohttp.ClientSession()
        owns_session = True

    if hasattr(session_context, "__aenter__"):
        async with session_context as session:
            return await _send_with_session(
                session,
                endpoint=endpoint,
                url=url,
                payload=payload,
                headers=headers,
            )

    try:
        return await _send_with_session(
            session_context,
            endpoint=endpoint,
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
    url: str,
    payload: Mapping[str, Any],
    headers: Mapping[str, str],
) -> dict[str, Any]:
    post_result = session.post(url, json=dict(payload), headers=dict(headers))
    if inspect.isawaitable(post_result):
        post_result = await post_result

    async with post_result as response:
        body = await response.text()
        status = int(getattr(response, "status", 0))
        safe_body = sanitize_line_response_body(body)
        if not 200 <= status < 300:
            raise LineDeliveryError(
                "LINE {} API returned HTTP {}.".format(endpoint, status),
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


async def send_line_reply(
    reply_token: str,
    text: str,
    access_token: str,
    *,
    session_factory: Optional[Callable[[], Any]] = None,
) -> dict[str, Any]:
    payload = {
        "replyToken": normalize_text(reply_token),
        "messages": [build_line_text_message(text)],
    }
    return await _post_line_api(
        endpoint="reply",
        url=LINE_REPLY_URL,
        payload=payload,
        access_token=access_token,
        session_factory=session_factory,
    )


async def send_line_push(
    to: str,
    text: str,
    access_token: str,
    *,
    session_factory: Optional[Callable[[], Any]] = None,
) -> dict[str, Any]:
    payload = {
        "to": normalize_text(to),
        "messages": [build_line_text_message(text)],
    }
    return await _post_line_api(
        endpoint="push",
        url=LINE_PUSH_URL,
        payload=payload,
        access_token=access_token,
        session_factory=session_factory,
    )


def format_outbound_event(event: OutboundEvent) -> str:
    parts = [normalize_text(event.title)]
    if event.rollcall_id not in (None, ""):
        parts.append("rollcall_id: {}".format(event.rollcall_id))
    if normalize_text(event.body):
        parts.append(normalize_text(event.body))
    return "\n".join(part for part in parts if part)


def create_line_notification_sink(
    config: Mapping[str, Any],
    *,
    sender: Optional[Callable[..., Any]] = None,
):
    token = get_line_access_token(config)
    if not token and sender is None:
        return None

    async def line_notification_sink(event: OutboundEvent) -> Optional[dict[str, Any]]:
        target = event.target
        if target is None or target.adapter != "line":
            return None
        to = normalize_text(target.channel_id) or normalize_text(target.target_id)
        if not to:
            return None
        text = format_outbound_event(event)
        push_sender = sender or send_line_push
        return await _maybe_await(
            push_sender(
                to=to,
                text=text,
                access_token=token,
            )
        )

    return line_notification_sink

from __future__ import annotations
import html
import inspect
from dataclasses import dataclass
from typing import Any, Callable, Dict, List, Optional

try:
    from troTHU.runtime_helpers import normalize_text
except ImportError:  # pragma: no cover - script execution fallback
    from runtime_helpers import normalize_text


@dataclass(frozen=True)
class NotificationRequest:
    channel: str
    label: str
    method: str
    url: str
    data: Optional[Dict[str, str]] = None
    headers: Optional[Dict[str, str]] = None
    json_body: Optional[Dict[str, Any]] = None


class NotificationSendError(Exception):
    def __init__(self, channel: str, message: str, status_code: int = 0) -> None:
        super().__init__(message)
        self.channel = channel
        self.status_code = status_code


def normalize_telegram_bot_key(value: Any) -> str:
    token = normalize_text(value)
    if token and not token.startswith("bot"):
        return "bot{}".format(token)
    return token


def build_notification_requests(
    config: Dict[str, Any],
    text: str,
    highlight_block: str = "",
    skip_logger: Optional[Callable[[str, str], None]] = None,
) -> List[NotificationRequest]:
    requests: List[NotificationRequest] = []
    message_text = normalize_text(text) or "test message"
    highlight_block = highlight_block.rstrip()
    title_prefix = "THU Student\n"

    notifications = config.get("notifications", {})
    tg_config = notifications.get("tg", {})
    if tg_config.get("enable"):
        token = normalize_telegram_bot_key(tg_config.get("key"))
        chat_id = normalize_text(tg_config.get("chat"))
        if token and chat_id:
            if highlight_block:
                tg_text = "{}\n<pre>{}</pre>".format(
                    html.escape(title_prefix + message_text),
                    html.escape(highlight_block),
                )
                tg_data = {
                    "chat_id": chat_id,
                    "text": tg_text,
                    "parse_mode": "HTML",
                }
            else:
                tg_data = {
                    "chat_id": chat_id,
                    "text": title_prefix + message_text,
                }
            requests.append(
                NotificationRequest(
                    channel="telegram",
                    label="Telegram",
                    method="POST",
                    url="https://api.telegram.org/{}/sendMessage".format(token),
                    data=tg_data,
                )
            )
        elif skip_logger is not None:
            skip_logger("telegram", "Telegram 通知已啟用，但缺少 token 或 chat id。")

    dc_config = notifications.get("dc", {})
    if dc_config.get("enable"):
        bot_token = normalize_text(dc_config.get("key"))
        channel_id = normalize_text(dc_config.get("chat"))
        if bot_token and channel_id:
            dc_content = title_prefix + message_text
            if highlight_block:
                dc_content = "{}\n```text\n{}\n```".format(dc_content, highlight_block)
            requests.append(
                NotificationRequest(
                    channel="discord",
                    label="Discord",
                    method="POST",
                    url="https://discord.com/api/v10/channels/{}/messages".format(channel_id),
                    headers={
                        "Authorization": "Bot {}".format(bot_token),
                        "Content-Type": "application/json",
                    },
                    json_body={"content": dc_content},
                )
            )
        elif skip_logger is not None:
            skip_logger("discord", "Discord 通知已啟用，但缺少 token 或 channel id。")

    return requests


async def send_notification_request(
    request: NotificationRequest,
    *,
    request_ssl: Any = None,
    timeout: Any = None,
    request_func: Optional[Callable[..., Any]] = None,
) -> int:
    if request_func is None:
        try:
            import aiohttp
        except ModuleNotFoundError as exc:  # pragma: no cover - dependency-missing fallback
            raise RuntimeError("aiohttp is not installed. Run `pip install -e .`.") from exc
        request_func = aiohttp.request

    request_kwargs: Dict[str, Any] = {
        "method": request.method,
        "url": request.url,
        "ssl": request_ssl,
    }
    if request.data is not None:
        request_kwargs["data"] = request.data
    if request.headers is not None:
        request_kwargs["headers"] = request.headers
    if request.json_body is not None:
        request_kwargs["json"] = request.json_body
    if timeout is not None:
        request_kwargs["timeout"] = timeout

    context = request_func(**request_kwargs)
    if inspect.isawaitable(context):
        context = await context

    async with context as resp:
        body = await resp.text()
        if not 200 <= resp.status < 300:
            raise NotificationSendError(
                request.channel,
                "{} 通知回傳 HTTP {}: {}".format(request.label, resp.status, body[:200]),
                status_code=resp.status,
            )
        return resp.status

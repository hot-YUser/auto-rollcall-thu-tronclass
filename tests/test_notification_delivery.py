import unittest
from unittest.mock import MagicMock

from troTHU.notification_delivery import (
    NotificationRequest,
    NotificationSendError,
    build_notification_requests,
    send_notification_request,
)


def notification_config():
    return {
        "notifications": {
            "tg": {"enable": False, "key": "", "chat": ""},
            "dc": {"enable": False, "key": "", "chat": ""},
        }
    }


class FakeResponse:
    def __init__(self, status: int = 200, text: str = "ok") -> None:
        self.status = status
        self._text = text

    async def text(self) -> str:
        return self._text


class FakeContext:
    def __init__(self, response: FakeResponse) -> None:
        self.response = response

    async def __aenter__(self) -> FakeResponse:
        return self.response

    async def __aexit__(self, exc_type, exc, tb) -> bool:
        return False


class NotificationDeliveryTest(unittest.TestCase):
    def test_build_notification_requests_formats_telegram_and_discord(self) -> None:
        config = notification_config()
        config["notifications"]["tg"].update({"enable": True, "key": "123:abc", "chat": "111"})
        config["notifications"]["dc"].update({"enable": True, "key": "discord-token", "chat": "222"})

        requests = build_notification_requests(config, "找到點名數字！", highlight_block="CODE")

        self.assertEqual([request.channel for request in requests], ["telegram", "discord"])
        self.assertEqual(requests[0].url, "https://api.telegram.org/bot123:abc/sendMessage")
        self.assertEqual(requests[0].data["parse_mode"], "HTML")
        self.assertIn("<pre>CODE</pre>", requests[0].data["text"])
        self.assertEqual(
            requests[1].url,
            "https://discord.com/api/v10/channels/222/messages",
        )
        self.assertEqual(requests[1].headers["Authorization"], "Bot discord-token")
        self.assertIn("```text\nCODE\n```", requests[1].json_body["content"])

    def test_build_notification_requests_reports_skipped_enabled_channels(self) -> None:
        config = notification_config()
        config["notifications"]["tg"]["enable"] = True
        config["notifications"]["dc"]["enable"] = True
        skipped = []

        requests = build_notification_requests(
            config,
            "hello",
            skip_logger=lambda channel, message: skipped.append((channel, message)),
        )

        self.assertEqual(requests, [])
        self.assertEqual([channel for channel, _message in skipped], ["telegram", "discord"])
        self.assertTrue(all("缺少" in message for _channel, message in skipped))


class NotificationSendTest(unittest.IsolatedAsyncioTestCase):
    async def test_send_notification_request_uses_injected_request_options(self) -> None:
        request = NotificationRequest(
            channel="discord",
            label="Discord",
            method="POST",
            url="https://example.com/notify",
            headers={"Authorization": "Bot token"},
            json_body={"content": "hello"},
        )
        request_func = MagicMock(return_value=FakeContext(FakeResponse(status=204, text="")))

        status = await send_notification_request(
            request,
            request_ssl="ssl-marker",
            timeout="timeout-marker",
            request_func=request_func,
        )

        self.assertEqual(status, 204)
        self.assertEqual(request_func.call_args.kwargs["ssl"], "ssl-marker")
        self.assertEqual(request_func.call_args.kwargs["timeout"], "timeout-marker")
        self.assertEqual(request_func.call_args.kwargs["json"], {"content": "hello"})

    async def test_send_notification_request_raises_on_non_2xx(self) -> None:
        request = NotificationRequest(
            channel="telegram",
            label="Telegram",
            method="POST",
            url="https://example.com/notify",
            data={"text": "hello"},
        )
        request_func = MagicMock(return_value=FakeContext(FakeResponse(status=503, text="unavailable")))

        with self.assertRaises(NotificationSendError) as raised:
            await send_notification_request(request, request_func=request_func)

        self.assertEqual(raised.exception.channel, "telegram")
        self.assertEqual(raised.exception.status_code, 503)
        self.assertIn("HTTP 503", str(raised.exception))

    async def test_send_notification_request_accepts_awaitable_context_factory(self) -> None:
        async def request_func(**_kwargs):
            return FakeContext(FakeResponse(status=200, text="ok"))

        request = NotificationRequest(
            channel="telegram",
            label="Telegram",
            method="POST",
            url="https://example.com/notify",
            data={"text": "hello"},
        )

        self.assertEqual(await send_notification_request(request, request_func=request_func), 200)

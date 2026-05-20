import unittest
from unittest.mock import patch

from troTHU.adapter_bridge import binding_key
from troTHU.rollcall_models import (
    AdapterTarget,
    AttendanceType,
    NotificationEventType,
    OutboundEvent,
)
from troTHU.telegram_adapter import (
    TELEGRAM_API_BASE,
    TelegramDeliveryError,
    build_telegram_text_message,
    create_telegram_notification_sink,
    send_telegram_message,
)


class FakeResponse:
    def __init__(self, status: int = 200, text: str = "ok") -> None:
        self.status = status
        self._text = text

    async def text(self) -> str:
        return self._text


class FakePostContext:
    def __init__(self, response: FakeResponse) -> None:
        self.response = response

    async def __aenter__(self) -> FakeResponse:
        return self.response

    async def __aexit__(self, exc_type, exc, tb) -> bool:
        return False


class FakeSession:
    def __init__(self, response: FakeResponse) -> None:
        self.response = response
        self.calls = []

    def post(self, url, **kwargs):
        self.calls.append((url, kwargs))
        return FakePostContext(self.response)


class TelegramAdapterDeliveryTest(unittest.IsolatedAsyncioTestCase):
    def test_build_telegram_text_message_limits_and_sanitizes_text(self) -> None:
        self.assertEqual(build_telegram_text_message("", limit=10), {"text": " "})
        self.assertEqual(build_telegram_text_message("abcdef", limit=3), {"text": "abc"})
        self.assertEqual(build_telegram_text_message("token=secret", limit=100), {"text": "[redacted]"})

    async def test_send_telegram_message_success(self) -> None:
        session = FakeSession(FakeResponse(status=200, text='{"ok":true}'))

        result = await send_telegram_message(
            "chat-1",
            "hello",
            "bot-token",
            session_factory=lambda: session,
        )

        self.assertTrue(result["ok"])
        self.assertEqual(result["endpoint"], "sendMessage")
        self.assertEqual(session.calls[0][0], f"{TELEGRAM_API_BASE}/botbot-token/sendMessage")
        self.assertEqual(session.calls[0][1]["data"]["chat_id"], "chat-1")
        self.assertEqual(session.calls[0][1]["data"]["text"], "hello")

    async def test_send_telegram_error_redacts_sensitive_body(self) -> None:
        session = FakeSession(FakeResponse(status=500, text="bot token leaked chat_id=secret"))

        with self.assertRaises(TelegramDeliveryError) as raised:
            await send_telegram_message(
                "chat-1",
                "hello",
                "bot-token",
                session_factory=lambda: session,
            )

        self.assertEqual(raised.exception.status_code, 500)
        self.assertEqual(raised.exception.body, "[redacted]")
        self.assertNotIn("secret", str(raised.exception.to_dict()))

    async def test_send_telegram_requires_chat_and_token(self) -> None:
        with self.assertRaises(TelegramDeliveryError):
            await send_telegram_message("", "hello", "bot-token", session_factory=lambda: FakeSession(FakeResponse()))
        with self.assertRaises(TelegramDeliveryError):
            await send_telegram_message("chat-1", "hello", "", session_factory=lambda: FakeSession(FakeResponse()))


class TelegramNotificationSinkTest(unittest.IsolatedAsyncioTestCase):
    def make_config(self):
        return {
            "integrations": {
                "telegram": {
                    "token_env": "TEST_TELEGRAM_TOKEN",
                    "chat_env": "TEST_TELEGRAM_CHAT",
                },
                "bindings": {
                    binding_key("telegram", "telegram-user"): {
                        "adapter": "telegram",
                        "external_user_id": "telegram-user",
                        "profile": "default",
                        "channel_id": "chat-bound",
                    }
                },
            },
            "notifications": {"tg": {"enable": True, "key": "legacy-token", "chat": "legacy-chat"}},
        }

    async def test_telegram_notification_sink_pushes_to_binding_chat(self) -> None:
        calls = []

        async def fake_sender(**kwargs):
            calls.append(kwargs)
            return {"ok": True}

        event = OutboundEvent(
            event_type=NotificationEventType.ROLLCALL_ANSWERED,
            target=AdapterTarget(
                adapter="telegram",
                target_id="telegram-user",
                profile="default",
                channel_id="chat-bound",
            ),
            title="Number answered",
            body="done",
            rollcall_id=42,
            attendance_type=AttendanceType.NUMBER,
        )

        with patch.dict("os.environ", {"TEST_TELEGRAM_TOKEN": "env-token"}, clear=False):
            sink = create_telegram_notification_sink(self.make_config(), sender=fake_sender)
            result = await sink(event)

        self.assertTrue(result["ok"])
        self.assertEqual(calls[0]["chat_id"], "chat-bound")
        self.assertEqual(calls[0]["bot_token"], "env-token")
        self.assertIn("rollcall_id: 42", calls[0]["text"])

    async def test_telegram_sink_falls_back_to_env_or_legacy_chat(self) -> None:
        calls = []
        event = OutboundEvent(
            event_type=NotificationEventType.STATUS,
            target=AdapterTarget(adapter="telegram", target_id="telegram-user"),
            title="Status",
        )

        with patch.dict(
            "os.environ",
            {"TEST_TELEGRAM_TOKEN": "env-token", "TEST_TELEGRAM_CHAT": "env-chat"},
            clear=False,
        ):
            sink = create_telegram_notification_sink(self.make_config(), sender=lambda **kwargs: calls.append(kwargs))
            await sink(event)

        self.assertEqual(calls[0]["chat_id"], "telegram-user")

    async def test_telegram_sink_uses_legacy_token_and_chat_without_env(self) -> None:
        calls = []
        event = OutboundEvent(
            event_type=NotificationEventType.STATUS,
            target=AdapterTarget(adapter="telegram", target_id=""),
            title="Status",
        )
        with patch.dict("os.environ", {}, clear=True):
            sink = create_telegram_notification_sink(self.make_config(), sender=lambda **kwargs: calls.append(kwargs))
            await sink(event)

        self.assertEqual(calls[0]["chat_id"], "legacy-chat")
        self.assertEqual(calls[0]["bot_token"], "legacy-token")

    async def test_telegram_notification_sink_ignores_non_telegram_target(self) -> None:
        calls = []
        sink = create_telegram_notification_sink(self.make_config(), sender=lambda **kwargs: calls.append(kwargs))
        result = await sink(
            OutboundEvent(
                event_type=NotificationEventType.STATUS,
                target=AdapterTarget(adapter="line", target_id="line-user"),
                title="Status",
            )
        )

        self.assertIsNone(result)
        self.assertEqual(calls, [])

    def test_telegram_notification_sink_is_disabled_without_token_or_sender(self) -> None:
        config = {"integrations": {"telegram": {"token_env": "TEST_TELEGRAM_TOKEN"}, "bindings": {}}}
        with patch.dict("os.environ", {}, clear=True):
            self.assertIsNone(create_telegram_notification_sink(config))

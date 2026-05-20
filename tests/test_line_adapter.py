import unittest
from unittest.mock import patch

from troTHU.adapter_bridge import binding_key
from troTHU.line_adapter import (
    LINE_PUSH_URL,
    LINE_REPLY_URL,
    LineDeliveryError,
    build_line_text_message,
    create_line_notification_sink,
    send_line_push,
    send_line_reply,
)
from troTHU.rollcall_models import (
    AdapterTarget,
    AttendanceType,
    NotificationEventType,
    OutboundEvent,
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


class LineAdapterDeliveryTest(unittest.IsolatedAsyncioTestCase):
    def test_build_line_text_message_limits_text(self) -> None:
        self.assertEqual(build_line_text_message("", limit=10), {"type": "text", "text": " "})
        message = build_line_text_message("abcdef", limit=3)
        self.assertEqual(message, {"type": "text", "text": "abc"})

    async def test_send_line_reply_success_uses_sanitized_payload(self) -> None:
        session = FakeSession(FakeResponse(status=200, text='{"ok":true}'))

        result = await send_line_reply(
            "reply-token",
            "hello",
            "line-token",
            session_factory=lambda: session,
        )

        self.assertTrue(result["ok"])
        self.assertEqual(result["endpoint"], "reply")
        self.assertEqual(session.calls[0][0], LINE_REPLY_URL)
        self.assertEqual(session.calls[0][1]["json"]["replyToken"], "reply-token")
        self.assertEqual(session.calls[0][1]["json"]["messages"][0]["text"], "hello")
        self.assertEqual(session.calls[0][1]["headers"]["Authorization"], "Bearer line-token")

    async def test_send_line_push_success_targets_to_field(self) -> None:
        session = FakeSession(FakeResponse(status=200, text=""))

        result = await send_line_push(
            "target-id",
            "push body",
            "line-token",
            session_factory=lambda: session,
        )

        self.assertTrue(result["ok"])
        self.assertEqual(result["endpoint"], "push")
        self.assertEqual(session.calls[0][0], LINE_PUSH_URL)
        self.assertEqual(session.calls[0][1]["json"]["to"], "target-id")

    async def test_send_line_error_redacts_sensitive_body(self) -> None:
        session = FakeSession(FakeResponse(status=500, text="Bearer secret-token leaked"))

        with self.assertRaises(LineDeliveryError) as raised:
            await send_line_push(
                "target-id",
                "push body",
                "line-token",
                session_factory=lambda: session,
            )

        self.assertEqual(raised.exception.status_code, 500)
        self.assertEqual(raised.exception.body, "[redacted]")
        self.assertNotIn("secret-token", str(raised.exception.to_dict()))


class LineNotificationSinkTest(unittest.IsolatedAsyncioTestCase):
    def make_config(self):
        return {
            "integrations": {
                "line": {"token_env": "TEST_LINE_TOKEN"},
                "bindings": {
                    binding_key("line", "line-user"): {
                        "adapter": "line",
                        "external_user_id": "line-user",
                        "profile": "default",
                        "channel_id": "group-1",
                    }
                },
            }
        }

    async def test_line_notification_sink_pushes_to_channel_or_target(self) -> None:
        calls = []

        async def fake_sender(**kwargs):
            calls.append(kwargs)
            return {"ok": True}

        event = OutboundEvent(
            event_type=NotificationEventType.ROLLCALL_ANSWERED,
            target=AdapterTarget(
                adapter="line",
                target_id="line-user",
                profile="default",
                channel_id="group-1",
            ),
            title="Number answered",
            body="done",
            rollcall_id=42,
            attendance_type=AttendanceType.NUMBER,
        )

        with patch.dict("os.environ", {"TEST_LINE_TOKEN": "line-token"}, clear=False):
            sink = create_line_notification_sink(self.make_config(), sender=fake_sender)
            result = await sink(event)

        self.assertTrue(result["ok"])
        self.assertEqual(calls[0]["to"], "group-1")
        self.assertEqual(calls[0]["access_token"], "line-token")
        self.assertIn("rollcall_id: 42", calls[0]["text"])

    async def test_line_notification_sink_ignores_non_line_target(self) -> None:
        calls = []
        sink = create_line_notification_sink(self.make_config(), sender=lambda **kwargs: calls.append(kwargs))
        result = await sink(
            OutboundEvent(
                event_type=NotificationEventType.STATUS,
                target=AdapterTarget(adapter="discord", target_id="discord-user"),
                title="Status",
            )
        )

        self.assertIsNone(result)
        self.assertEqual(calls, [])

    def test_line_notification_sink_is_disabled_without_token_or_sender(self) -> None:
        with patch.dict("os.environ", {}, clear=True):
            self.assertIsNone(create_line_notification_sink(self.make_config()))

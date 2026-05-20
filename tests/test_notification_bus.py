import unittest

from troTHU import tron
from troTHU.adapter_bridge import binding_key
from troTHU.notification_bus import (
    build_notification_targets,
    dispatch_notification_event,
)
from troTHU.discord_adapter import create_discord_notification_sink
from troTHU.line_adapter import create_line_notification_sink
from troTHU.telegram_adapter import create_telegram_notification_sink
from troTHU.rollcall_models import AttendanceType, NotificationEvent


def make_config():
    return tron.normalize_config(
        {
            "account": {"user": "user1", "passwd": ""},
            "accounts": {
                "current": "default",
                "profiles": {
                    "default": {"user": "user1", "passwd": "", "label": ""},
                    "alt": {"user": "user2", "passwd": "", "label": ""},
                },
            },
            "integrations": {
                "bindings": {
                    binding_key("discord", "discord-user"): {
                        "adapter": "discord",
                        "external_user_id": "discord-user",
                        "profile": "default",
                        "channel_id": "chan-1",
                    },
                    binding_key("line", "line-user"): {
                        "adapter": "line",
                        "external_user_id": "line-user",
                        "profile": "default",
                        "channel_id": "",
                    },
                    binding_key("discord", "alt-user"): {
                        "adapter": "discord",
                        "external_user_id": "alt-user",
                        "profile": "alt",
                        "channel_id": "chan-2",
                    },
                    binding_key("telegram", "telegram-chat"): {
                        "adapter": "telegram",
                        "external_user_id": "telegram-chat",
                        "profile": "default",
                        "channel_id": "",
                    },
                }
            },
        }
    )


class NotificationBusTest(unittest.IsolatedAsyncioTestCase):
    def test_build_notification_targets_filters_by_profile(self) -> None:
        targets = build_notification_targets(make_config(), profile="default")

        self.assertEqual({target.adapter for target in targets}, {"discord", "line", "telegram"})
        self.assertEqual({target.profile for target in targets}, {"default"})

    async def test_dispatch_notification_event_to_fake_sink(self) -> None:
        received = []

        async def sink(outbound):
            received.append(outbound)

        event = NotificationEvent(
            event="rollcall_answered",
            title="Number answered",
            body="done",
            attendance_type=AttendanceType.NUMBER,
            rollcall_id=42,
            data={"profile": "default", "token": "secret-token"},
        )

        summary = await dispatch_notification_event(
            event,
            config=make_config(),
            sinks=[sink],
            profile="default",
        )

        self.assertTrue(summary.ok)
        self.assertEqual(summary.delivered, 3)
        self.assertEqual(len(received), 3)
        self.assertEqual({item.target.profile for item in received}, {"default"})
        self.assertNotIn("secret-token", str([item.data for item in received]))

    async def test_dispatch_summary_records_sink_failures_without_raising(self) -> None:
        def failing_sink(_outbound):
            raise RuntimeError("sink down")

        event = NotificationEvent(
            event="session_expired",
            title="Session expired",
            body="reauth needed",
            attendance_type=AttendanceType.UNKNOWN,
            data={"profile": "default"},
        )

        summary = await dispatch_notification_event(
            event,
            config=make_config(),
            sinks=[failing_sink],
            profile="default",
        )

        self.assertFalse(summary.ok)
        self.assertEqual(summary.failures, 3)
        self.assertIn("sink down", summary.results[0].error)

    async def test_dispatch_can_use_line_notification_sink(self) -> None:
        calls = []

        async def fake_line_sender(**kwargs):
            calls.append(kwargs)
            return {"ok": True}

        event = NotificationEvent(
            event="rollcall_answered",
            title="Radar answered",
            body="done",
            attendance_type=AttendanceType.RADAR,
            rollcall_id=77,
            data={"profile": "default"},
        )
        sink = create_line_notification_sink(make_config(), sender=fake_line_sender)

        summary = await dispatch_notification_event(
            event,
            config=make_config(),
            sinks=[sink],
            profile="default",
        )

        self.assertTrue(summary.ok)
        self.assertEqual(summary.delivered, 3)
        self.assertEqual(len(calls), 1)
        self.assertEqual(calls[0]["to"], "line-user")
        self.assertIn("Radar answered", calls[0]["text"])

    async def test_dispatch_can_use_discord_notification_sink(self) -> None:
        calls = []

        async def fake_discord_sender(**kwargs):
            calls.append(kwargs)
            return {"ok": True}

        event = NotificationEvent(
            event="qr_payload_requested",
            title="QR needed",
            body="scan required",
            attendance_type=AttendanceType.QRCODE,
            rollcall_id=88,
            data={"profile": "default", "payload": "raw-qr-payload"},
        )
        sink = create_discord_notification_sink(make_config(), sender=fake_discord_sender)

        summary = await dispatch_notification_event(
            event,
            config=make_config(),
            sinks=[sink],
            profile="default",
        )

        self.assertTrue(summary.ok)
        self.assertEqual(summary.delivered, 3)
        self.assertEqual(len(calls), 1)
        self.assertEqual(calls[0]["channel_id"], "chan-1")
        self.assertIn("QR needed", calls[0]["text"])
        self.assertNotIn("raw-qr-payload", str(calls))

    async def test_dispatch_can_use_telegram_notification_sink(self) -> None:
        calls = []

        async def fake_telegram_sender(**kwargs):
            calls.append(kwargs)
            return {"ok": True}

        event = NotificationEvent(
            event="rollcall_answered",
            title="Number answered",
            body="done",
            attendance_type=AttendanceType.NUMBER,
            rollcall_id=42,
            data={"profile": "default", "payload": "raw-qr-payload"},
        )
        sink = create_telegram_notification_sink(make_config(), sender=fake_telegram_sender)

        summary = await dispatch_notification_event(
            event,
            config=make_config(),
            sinks=[sink],
            profile="default",
        )

        self.assertTrue(summary.ok)
        self.assertEqual(summary.delivered, 3)
        self.assertEqual(len(calls), 1)
        self.assertEqual(calls[0]["chat_id"], "telegram-chat")
        self.assertIn("Number answered", calls[0]["text"])
        self.assertNotIn("raw-qr-payload", str(calls))

    async def test_tron_notify_event_keeps_legacy_mes_and_uses_sinks(self) -> None:
        received = []

        async def sink(outbound):
            received.append(outbound)

        original_config = tron.CONFIG.copy()
        try:
            tron.CONFIG.clear()
            tron.CONFIG.update(make_config())
            tron.set_notification_sinks([sink])
            event = NotificationEvent(
                event="qr_payload_requested",
                title="QR needed",
                body="scan required",
                attendance_type=AttendanceType.QRCODE,
                rollcall_id=88,
                data={"profile": "default", "payload": "raw-qr-payload"},
            )

            await tron.notify_event(event)
        finally:
            tron.set_notification_sinks([])
            tron.CONFIG.clear()
            tron.CONFIG.update(original_config)

        self.assertEqual(len(received), 3)
        self.assertNotIn("raw-qr-payload", str([item.data for item in received]))

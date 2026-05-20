import json
import unittest
from unittest.mock import patch

from troTHU.adapter_bridge import binding_key
from troTHU.discord_adapter import (
    DISCORD_API_BASE,
    DiscordDeliveryError,
    DiscordSignatureError,
    build_discord_command_schema,
    build_interaction_response,
    build_modal_interaction_response,
    create_discord_notification_sink,
    edit_original_interaction_response,
    interaction_to_command,
    modal_submit_to_command,
    send_discord_channel_message,
    send_interaction_callback,
    sync_discord_command_schema,
    verify_discord_signature,
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


class FakeRequestContext:
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
        self.calls.append(("post", url, kwargs))
        return FakeRequestContext(self.response)

    def patch(self, url, **kwargs):
        self.calls.append(("patch", url, kwargs))
        return FakeRequestContext(self.response)


def tron_interaction(subcommand: str, options=None, *, user_id: str = "user-1"):
    return {
        "type": 2,
        "channel_id": "chan-1",
        "member": {"user": {"id": user_id}},
        "data": {
            "name": "tron",
            "options": [
                {
                    "type": 1,
                    "name": subcommand,
                    "options": options or [],
                }
            ],
        },
    }


class DiscordAdapterSchemaAndParserTest(unittest.TestCase):
    def test_schema_contains_expected_subcommands_and_qr_payload(self) -> None:
        schema = build_discord_command_schema()
        names = {option["name"]: option for option in schema["options"]}

        for name in ("status", "start", "stop", "force", "reauth", "qr", "qr_all", "qr_modal", "qr_all_modal", "accounts"):
            self.assertIn(name, names)
        qr_options = {option["name"]: option for option in names["qr"]["options"]}
        self.assertTrue(qr_options["payload"]["required"])
        self.assertEqual(qr_options["payload"]["type"], 3)

    def test_interaction_parser_status_and_force_profile(self) -> None:
        status = interaction_to_command(tron_interaction("status"))
        self.assertEqual(status.action, "status")
        self.assertEqual(status.adapter, "discord")
        self.assertEqual(status.source_user_id, "user-1")

        force = interaction_to_command(
            tron_interaction("force", [{"name": "profile", "type": 3, "value": "alt"}])
        )
        self.assertEqual(force.action, "force-check")
        self.assertEqual(force.profile, "alt")

    def test_interaction_parser_qr_and_qr_all_payload(self) -> None:
        qr = interaction_to_command(
            tron_interaction("qr", [{"name": "payload", "type": 3, "value": "raw-secret-payload"}])
        )
        self.assertEqual(qr.action, "qr-submit")
        self.assertFalse(qr.payload["fanout"])
        self.assertEqual(qr.payload["payload"], "raw-secret-payload")

        qr_all = interaction_to_command(
            tron_interaction("qr_all", [{"name": "payload", "type": 3, "value": "raw-secret-payload"}])
        )
        self.assertEqual(qr_all.action, "qr-submit")
        self.assertTrue(qr_all.payload["fanout"])

    def test_modal_command_and_submit_parser(self) -> None:
        modal_command = interaction_to_command(
            tron_interaction("qr_all_modal", [{"name": "profile", "type": 3, "value": "alt"}])
        )
        self.assertEqual(modal_command.action, "qr-modal")
        self.assertTrue(modal_command.payload["fanout"])
        self.assertEqual(modal_command.profile, "alt")

        modal_response = build_modal_interaction_response(modal_command, fanout=True)
        self.assertEqual(modal_response["type"], 9)
        self.assertIn("payload", json.dumps(modal_response))

        submitted = modal_submit_to_command(
            {
                "type": 5,
                "channel_id": "chan-1",
                "member": {"user": {"id": "user-1"}},
                "data": {
                    "custom_id": "tron_qr_all_modal:alt",
                    "components": [
                        {"components": [{"custom_id": "payload", "value": "secret-qr-payload"}]}
                    ],
                },
            }
        )
        self.assertEqual(submitted.action, "qr-submit")
        self.assertEqual(submitted.profile, "alt")
        self.assertTrue(submitted.payload["fanout"])
        self.assertEqual(submitted.payload["payload"], "secret-qr-payload")

    def test_build_interaction_response_is_ephemeral_and_sanitized(self) -> None:
        result = type("Result", (), {"reply": "Authorization: Bot secret-token"})()
        response = build_interaction_response(result, ephemeral=True)

        self.assertEqual(response["type"], 4)
        self.assertEqual(response["data"]["flags"], 64)
        self.assertEqual(response["data"]["content"], "[redacted]")


class DiscordSignatureVerifierTest(unittest.TestCase):
    def test_signature_verifier_uses_injected_verifier(self) -> None:
        calls = []

        def fake_verifier(**kwargs):
            calls.append(kwargs)
            return True

        self.assertTrue(
            verify_discord_signature(
                "public-key",
                "123",
                b"{}",
                "signature",
                verifier=fake_verifier,
            )
        )
        self.assertEqual(calls[0]["timestamp"], "123")

    def test_signature_verifier_rejects_false_injected_verifier(self) -> None:
        self.assertFalse(
            verify_discord_signature(
                "public-key",
                "123",
                b"{}",
                "signature",
                verifier=lambda **_kwargs: False,
            )
        )

    def test_signature_verifier_missing_input_fails_closed(self) -> None:
        with self.assertRaises(DiscordSignatureError):
            verify_discord_signature("", "123", b"{}", "sig")


class DiscordAdapterDeliveryTest(unittest.IsolatedAsyncioTestCase):
    async def test_send_discord_channel_message_success(self) -> None:
        session = FakeSession(FakeResponse(status=200, text='{"id":"1"}'))

        result = await send_discord_channel_message(
            "channel-1",
            "hello",
            "bot-token",
            session_factory=lambda: session,
        )

        self.assertTrue(result["ok"])
        self.assertEqual(session.calls[0][0], "post")
        self.assertEqual(session.calls[0][1], f"{DISCORD_API_BASE}/channels/channel-1/messages")
        self.assertEqual(session.calls[0][2]["json"]["content"], "hello")
        self.assertEqual(session.calls[0][2]["headers"]["Authorization"], "Bot bot-token")

    async def test_edit_original_interaction_response_success(self) -> None:
        session = FakeSession(FakeResponse(status=200, text='{"id":"original"}'))

        result = await edit_original_interaction_response(
            "app-1",
            "interaction-token",
            "done",
            session_factory=lambda: session,
        )

        self.assertTrue(result["ok"])
        self.assertEqual(session.calls[0][0], "patch")
        self.assertIn("/webhooks/app-1/interaction-token/messages/@original", session.calls[0][1])
        self.assertEqual(session.calls[0][2]["json"]["content"], "done")

    async def test_send_interaction_callback_success(self) -> None:
        session = FakeSession(FakeResponse(status=200, text='{"ok":true}'))

        result = await send_interaction_callback(
            "interaction-1",
            "interaction-token",
            {"type": 4, "data": {"content": "ok"}},
            session_factory=lambda: session,
        )

        self.assertTrue(result["ok"])
        self.assertEqual(session.calls[0][0], "post")
        self.assertIn("/interactions/interaction-1/interaction-token/callback", session.calls[0][1])

    async def test_sync_discord_schema_dry_run_and_apply_with_fake_sender(self) -> None:
        config = {"integrations": {"discord": {"token_env": "TEST_DISCORD_TOKEN", "application_id_env": "TEST_DISCORD_APP"}}}
        with patch.dict("os.environ", {"TEST_DISCORD_TOKEN": "bot-token", "TEST_DISCORD_APP": "app-1"}, clear=False):
            dry = await sync_discord_command_schema(config, dry_run=True)
            calls = []

            async def fake_sender(**kwargs):
                calls.append(kwargs)
                return {"ok": True}

            applied = await sync_discord_command_schema(config, dry_run=False, apply=True, sender=fake_sender)

        self.assertEqual(dry["status"], "dry_run")
        self.assertEqual(applied["status"], "ok")
        self.assertEqual(calls[0]["schema"]["name"], "tron")
        self.assertNotIn("bot-token", json.dumps(applied))

    async def test_sender_error_redacts_sensitive_body(self) -> None:
        session = FakeSession(FakeResponse(status=500, text="Authorization: Bot secret-token leaked"))

        with self.assertRaises(DiscordDeliveryError) as raised:
            await send_discord_channel_message(
                "channel-1",
                "body",
                "bot-token",
                session_factory=lambda: session,
            )

        self.assertEqual(raised.exception.status_code, 500)
        self.assertEqual(raised.exception.body, "[redacted]")
        self.assertNotIn("secret-token", str(raised.exception.to_dict()))


class DiscordNotificationSinkTest(unittest.IsolatedAsyncioTestCase):
    def make_config(self):
        return {
            "integrations": {
                "discord": {
                    "token_env": "TEST_DISCORD_TOKEN",
                    "channel_env": "TEST_DISCORD_CHANNEL",
                },
                "bindings": {
                    binding_key("discord", "discord-user"): {
                        "adapter": "discord",
                        "external_user_id": "discord-user",
                        "profile": "default",
                        "channel_id": "bound-channel",
                    }
                },
            }
        }

    async def test_discord_notification_sink_pushes_to_binding_channel(self) -> None:
        calls = []

        async def fake_sender(**kwargs):
            calls.append(kwargs)
            return {"ok": True}

        event = OutboundEvent(
            event_type=NotificationEventType.ROLLCALL_ANSWERED,
            target=AdapterTarget(
                adapter="discord",
                target_id="discord-user",
                profile="default",
                channel_id="bound-channel",
            ),
            title="Number answered",
            body="done",
            rollcall_id=42,
            attendance_type=AttendanceType.NUMBER,
        )

        with patch.dict("os.environ", {"TEST_DISCORD_TOKEN": "bot-token"}, clear=False):
            sink = create_discord_notification_sink(self.make_config(), sender=fake_sender)
            result = await sink(event)

        self.assertTrue(result["ok"])
        self.assertEqual(calls[0]["channel_id"], "bound-channel")
        self.assertEqual(calls[0]["bot_token"], "bot-token")
        self.assertIn("rollcall_id: 42", calls[0]["text"])

    async def test_discord_notification_sink_uses_default_channel_when_binding_has_none(self) -> None:
        calls = []
        event = OutboundEvent(
            event_type=NotificationEventType.STATUS,
            target=AdapterTarget(adapter="discord", target_id="discord-user"),
            title="Status",
        )
        with patch.dict(
            "os.environ",
            {"TEST_DISCORD_TOKEN": "bot-token", "TEST_DISCORD_CHANNEL": "fallback-channel"},
            clear=False,
        ):
            sink = create_discord_notification_sink(self.make_config(), sender=lambda **kwargs: calls.append(kwargs))
            await sink(event)

        self.assertEqual(calls[0]["channel_id"], "fallback-channel")

    async def test_discord_notification_sink_ignores_non_discord_target(self) -> None:
        calls = []
        sink = create_discord_notification_sink(self.make_config(), sender=lambda **kwargs: calls.append(kwargs))
        result = await sink(
            OutboundEvent(
                event_type=NotificationEventType.STATUS,
                target=AdapterTarget(adapter="line", target_id="line-user"),
                title="Status",
            )
        )

        self.assertIsNone(result)
        self.assertEqual(calls, [])

    def test_discord_notification_sink_is_disabled_without_token_or_sender(self) -> None:
        with patch.dict("os.environ", {}, clear=True):
            self.assertIsNone(create_discord_notification_sink(self.make_config()))

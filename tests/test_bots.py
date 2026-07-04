from __future__ import annotations

import asyncio
import json
import unittest
import shutil
import uuid
import copy
from unittest.mock import AsyncMock, patch, MagicMock
from troTHU import tron
from troTHU.adapter_bridge import binding_key, ControlCommand, map_adapter_command
from troTHU.adapter_server import calculate_line_signature, create_app
from troTHU.bot_runtime import BotRuntime, BotRuntimeHandlers
from troTHU.line_adapter import LineDeliveryError, create_line_notification_sink, LINE_PUSH_URL, LINE_REPLY_URL, build_line_text_message, send_line_push, send_line_reply
from pathlib import Path
from troTHU.account_runtime_store import load_runtime_state
from tests.fake_tron_server import FakeTronServer
from troTHU.account_store import cookie_path
from troTHU.bot_handlers import create_bot_runtime
from troTHU.pending_qr import add_pending_qr, list_pending_qr
from troTHU.bot_status import MAX_ACCOUNTS_IN_REPLY, build_profile_status_summary, format_accounts_reply, format_profile_status_reply
from troTHU.notification_bus import build_notification_targets, dispatch_notification_event
from troTHU.discord_adapter import create_discord_notification_sink, DISCORD_API_BASE, DiscordDeliveryError, DiscordSignatureError, build_discord_command_schema, build_interaction_response, build_modal_interaction_response, edit_original_interaction_response, interaction_to_command, modal_submit_to_command, send_discord_channel_message, send_interaction_callback, sync_discord_command_schema, verify_discord_signature
from troTHU.telegram_adapter import create_telegram_notification_sink, TELEGRAM_API_BASE, TelegramDeliveryError, build_telegram_text_message, send_telegram_message
from troTHU.rollcall_models import AttendanceType, NotificationEvent, AdapterTarget, NotificationEventType, OutboundEvent
from troTHU.notification_delivery import NotificationRequest, NotificationSendError, build_notification_requests, send_notification_request


# --- merged from tests/test_adapter_server.py ---
try:
    import aiohttp
    from aiohttp import web
except (ImportError, ModuleNotFoundError):
    aiohttp = None
    web = None



def make_config():
    return tron.normalize_config(
        {
            "account": {"user": "user1", "passwd": "pass1"},
            "accounts": {
                "current": "default",
                "profiles": {"default": {"user": "user1", "passwd": "pass1", "label": ""}},
            },
            "integrations": {
                "line": {
                    "token_env": "TEST_LINE_TOKEN",
                    "secret_env": "TEST_LINE_SECRET",
                },
                "discord": {
                    "token_env": "TEST_DISCORD_TOKEN",
                    "channel_env": "TEST_DISCORD_CHANNEL",
                    "public_key_env": "TEST_DISCORD_PUBLIC_KEY",
                    "application_id_env": "TEST_DISCORD_APPLICATION_ID",
                },
                "bindings": {
                    binding_key("discord", "bound-user"): {
                        "adapter": "discord",
                        "external_user_id": "bound-user",
                        "profile": "default",
                        "channel_id": "chan-1",
                    },
                    binding_key("line", "line-user"): {
                        "adapter": "line",
                        "external_user_id": "line-user",
                        "profile": "default",
                        "channel_id": "",
                    },
                },
                "admins": {
                    "discord": ["admin-1"],
                    "line": [],
                },
            },
        }
    )


class RunningApp:
    def __init__(self, app) -> None:
        self.app = app
        self.runner = None
        self.site = None
        self.base_url = ""

    async def __aenter__(self):
        self.runner = web.AppRunner(self.app)
        await self.runner.setup()
        self.site = web.TCPSite(self.runner, "127.0.0.1", 0)
        await self.site.start()
        port = self.site._server.sockets[0].getsockname()[1]
        self.base_url = "http://127.0.0.1:{}".format(port)
        return self

    async def __aexit__(self, _exc_type, _exc, _tb) -> None:
        await self.runner.cleanup()


@unittest.skipUnless(aiohttp is not None and web is not None, "aiohttp.web is required")
class AdapterServerTest(unittest.IsolatedAsyncioTestCase):
    async def test_health_reports_enabled_adapters(self) -> None:
        runtime = BotRuntime(make_config())
        with patch.dict(
            "os.environ",
            {
                "TEST_LINE_SECRET": "secret-value",
                "TEST_LINE_TOKEN": "token-value",
                "TEST_DISCORD_PUBLIC_KEY": "discord-public-key",
                "TEST_DISCORD_TOKEN": "discord-token",
                "TEST_DISCORD_APPLICATION_ID": "app-id",
                "TEST_DISCORD_CHANNEL": "default-channel",
            },
            clear=False,
        ):
            async with RunningApp(
                create_app(
                    make_config(),
                    runtime,
                    adapter="all",
                    discord_signature_verifier=lambda **_kwargs: True,
                )
            ) as app:
                async with aiohttp.ClientSession() as session:
                    response = await session.get(app.base_url + "/health")
                    body = await response.json()

        self.assertEqual(response.status, 200)
        self.assertTrue(body["ok"])
        self.assertEqual(body["adapters"], ["generic", "line", "discord"])
        self.assertTrue(body["line"]["secret_configured"])
        self.assertTrue(body["line"]["token_configured"])
        self.assertTrue(body["line"]["signature_verification"])
        self.assertTrue(body["line"]["reply_api"])
        self.assertTrue(body["discord"]["public_key_configured"])
        self.assertTrue(body["discord"]["token_configured"])
        self.assertTrue(body["discord"]["application_id_configured"])
        self.assertTrue(body["discord"]["channel_configured"])
        self.assertTrue(body["discord"]["signature_verifier_available"])
        self.assertNotIn("secret-value", json.dumps(body))
        self.assertNotIn("token-value", json.dumps(body))
        self.assertNotIn("discord-token", json.dumps(body))
        self.assertNotIn("discord-public-key", json.dumps(body))

    async def test_generic_webhook_dispatches_bound_status(self) -> None:
        status = AsyncMock(return_value={"reply": "status ok", "cookie": {"exists": False}})
        runtime = BotRuntime(make_config(), BotRuntimeHandlers(status=status))
        async with RunningApp(create_app(make_config(), runtime, adapter="generic")) as app:
            async with aiohttp.ClientSession() as session:
                response = await session.post(
                    app.base_url + "/adapter/discord/message",
                    json={
                        "source_user_id": "bound-user",
                        "channel_id": "chan-1",
                        "text": "status",
                    },
                )
                body = await response.json()

        self.assertEqual(response.status, 200)
        self.assertTrue(body["ok"])
        self.assertEqual(body["reply"], "status ok")
        self.assertEqual(body["data"]["cookie"]["exists"], False)
        status.assert_awaited_once()

    async def test_generic_webhook_rejects_unbound_user(self) -> None:
        runtime = BotRuntime(make_config())
        async with RunningApp(create_app(make_config(), runtime, adapter="generic")) as app:
            async with aiohttp.ClientSession() as session:
                response = await session.post(
                    app.base_url + "/adapter/discord/message",
                    json={
                        "source_user_id": "stranger",
                        "channel_id": "chan-1",
                        "text": "status",
                    },
                )
                body = await response.json()

        self.assertEqual(response.status, 200)
        self.assertFalse(body["ok"])
        self.assertEqual(body["data"]["binding_status"], "not_bound")

    async def test_generic_webhook_dispatches_accounts_summary(self) -> None:
        accounts = AsyncMock(return_value={"reply": "Accounts summary", "profile_summaries": []})
        runtime = BotRuntime(make_config(), BotRuntimeHandlers(accounts=accounts))
        async with RunningApp(create_app(make_config(), runtime, adapter="generic")) as app:
            async with aiohttp.ClientSession() as session:
                response = await session.post(
                    app.base_url + "/adapter/discord/message",
                    json={
                        "source_user_id": "bound-user",
                        "channel_id": "chan-1",
                        "text": "accounts",
                    },
                )
                body = await response.json()

        self.assertEqual(response.status, 200)
        self.assertTrue(body["ok"])
        self.assertEqual(body["reply"], "Accounts summary")
        self.assertEqual(body["data"]["profiles"], ["default"])
        accounts.assert_awaited_once()

    async def test_generic_webhook_allows_admin_force(self) -> None:
        force_check = AsyncMock(return_value={"reply": "forced", "status": "ok"})
        runtime = BotRuntime(make_config(), BotRuntimeHandlers(force_check=force_check))
        async with RunningApp(create_app(make_config(), runtime, adapter="generic")) as app:
            async with aiohttp.ClientSession() as session:
                response = await session.post(
                    app.base_url + "/adapter/discord/message",
                    json={
                        "source_user_id": "admin-1",
                        "channel_id": "ops",
                        "text": "force",
                    },
                )
                body = await response.json()

        self.assertEqual(response.status, 200)
        self.assertTrue(body["ok"])
        self.assertEqual(body["action"], "force-check")
        self.assertTrue(body["data"]["admin"])
        force_check.assert_awaited_once()

    async def test_line_webhook_rejects_invalid_signature(self) -> None:
        runtime = BotRuntime(make_config())
        body = json.dumps({"events": []}).encode("utf-8")
        with patch.dict("os.environ", {"TEST_LINE_SECRET": "secret"}, clear=False):
            async with RunningApp(create_app(make_config(), runtime, adapter="line")) as app:
                async with aiohttp.ClientSession() as session:
                    response = await session.post(
                        app.base_url + "/line/webhook",
                        data=body,
                        headers={"Content-Type": "application/json", "X-Line-Signature": "bad"},
                    )
                    payload = await response.json()

        self.assertEqual(response.status, 401)
        self.assertFalse(payload["ok"])

    async def test_line_webhook_dispatches_text_and_uses_fake_sender(self) -> None:
        status = AsyncMock(return_value={"reply": "line status"})
        runtime = BotRuntime(make_config(), BotRuntimeHandlers(status=status))
        sender_calls = []

        async def fake_sender(**kwargs):
            sender_calls.append(kwargs)
            return {"sent": True}

        event_body = {
            "events": [
                {
                    "type": "message",
                    "replyToken": "reply-1",
                    "source": {"type": "user", "userId": "line-user"},
                    "message": {"type": "text", "text": "status"},
                }
            ]
        }
        body = json.dumps(event_body).encode("utf-8")
        signature = calculate_line_signature("secret", body)

        with patch.dict("os.environ", {"TEST_LINE_SECRET": "secret"}, clear=False):
            async with RunningApp(create_app(make_config(), runtime, line_sender=fake_sender, adapter="line")) as app:
                async with aiohttp.ClientSession() as session:
                    response = await session.post(
                        app.base_url + "/line/webhook",
                        data=body,
                        headers={"Content-Type": "application/json", "X-Line-Signature": signature},
                    )
                    payload = await response.json()

        self.assertEqual(response.status, 200)
        self.assertTrue(payload["ok"])
        self.assertEqual(payload["results"][0]["reply"], "line status")
        self.assertEqual(sender_calls[0]["reply_token"], "reply-1")
        self.assertEqual(sender_calls[0]["text"], "line status")
        status.assert_awaited_once()

    async def test_line_webhook_reply_failure_is_sanitized_and_does_not_fail_webhook(self) -> None:
        status = AsyncMock(return_value={"reply": "line status"})
        runtime = BotRuntime(make_config(), BotRuntimeHandlers(status=status))

        async def failing_sender(**_kwargs):
            raise LineDeliveryError(
                "LINE reply API returned HTTP 500.",
                status_code=500,
                endpoint="reply",
                body="Bearer secret-token leaked",
            )

        event_body = {
            "events": [
                {
                    "type": "message",
                    "replyToken": "reply-1",
                    "source": {"type": "user", "userId": "line-user"},
                    "message": {"type": "text", "text": "status"},
                }
            ]
        }
        body = json.dumps(event_body).encode("utf-8")
        signature = calculate_line_signature("secret", body)

        with patch.dict("os.environ", {"TEST_LINE_SECRET": "secret"}, clear=False):
            async with RunningApp(create_app(make_config(), runtime, line_sender=failing_sender, adapter="line")) as app:
                async with aiohttp.ClientSession() as session:
                    response = await session.post(
                        app.base_url + "/line/webhook",
                        data=body,
                        headers={"Content-Type": "application/json", "X-Line-Signature": signature},
                    )
                    payload = await response.json()

        self.assertEqual(response.status, 200)
        self.assertTrue(payload["ok"])
        line_reply = payload["results"][0]["line_reply"]
        self.assertFalse(line_reply["ok"])
        self.assertEqual(line_reply["status"], 500)
        self.assertEqual(line_reply["body"], "[redacted]")
        self.assertNotIn("secret-token", json.dumps(payload))

    async def test_line_webhook_without_token_does_not_call_external_sender(self) -> None:
        status = AsyncMock(return_value={"reply": "line status"})
        runtime = BotRuntime(make_config(), BotRuntimeHandlers(status=status))
        event_body = {
            "events": [
                {
                    "type": "message",
                    "replyToken": "reply-1",
                    "source": {"type": "user", "userId": "line-user"},
                    "message": {"type": "text", "text": "status"},
                }
            ]
        }

        async with RunningApp(create_app(make_config(), runtime, adapter="line")) as app:
            async with aiohttp.ClientSession() as session:
                response = await session.post(app.base_url + "/line/webhook", json=event_body)
                payload = await response.json()

        self.assertEqual(response.status, 200)
        self.assertTrue(payload["ok"])
        self.assertEqual(payload["results"][0]["reply"], "line status")
        self.assertNotIn("line_reply", payload["results"][0])
        status.assert_awaited_once()

    async def test_line_webhook_accounts_reply_uses_same_runtime_result(self) -> None:
        accounts = AsyncMock(return_value={"reply": "Accounts summary", "profile_summaries": []})
        runtime = BotRuntime(make_config(), BotRuntimeHandlers(accounts=accounts))
        event_body = {
            "events": [
                {
                    "type": "message",
                    "replyToken": "reply-1",
                    "source": {"type": "user", "userId": "line-user"},
                    "message": {"type": "text", "text": "accounts"},
                }
            ]
        }

        async with RunningApp(create_app(make_config(), runtime, adapter="line")) as app:
            async with aiohttp.ClientSession() as session:
                response = await session.post(app.base_url + "/line/webhook", json=event_body)
                payload = await response.json()

        self.assertEqual(response.status, 200)
        self.assertTrue(payload["ok"])
        self.assertEqual(payload["results"][0]["reply"], "Accounts summary")
        accounts.assert_awaited_once()

    async def test_line_webhook_ignores_non_text_events(self) -> None:
        runtime = BotRuntime(make_config())
        event_body = {"events": [{"type": "follow", "source": {"userId": "line-user"}}]}
        body = json.dumps(event_body).encode("utf-8")
        signature = calculate_line_signature("secret", body)

        with patch.dict("os.environ", {"TEST_LINE_SECRET": "secret"}, clear=False):
            async with RunningApp(create_app(make_config(), runtime, adapter="line")) as app:
                async with aiohttp.ClientSession() as session:
                    response = await session.post(
                        app.base_url + "/line/webhook",
                        data=body,
                        headers={"Content-Type": "application/json", "X-Line-Signature": signature},
                    )
                    payload = await response.json()

        self.assertEqual(response.status, 200)
        self.assertTrue(payload["ok"])
        self.assertTrue(payload["results"][0]["ignored"])

    def discord_headers(self):
        return {
            "Content-Type": "application/json",
            "X-Signature-Ed25519": "test-signature",
            "X-Signature-Timestamp": "123456",
        }

    def discord_payload(self, subcommand: str = "status", options=None, *, user_id: str = "bound-user"):
        return {
            "type": 2,
            "application_id": "app-id-from-payload",
            "token": "interaction-token",
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

    async def test_discord_interactions_ping_pongs_after_signature_check(self) -> None:
        runtime = BotRuntime(make_config())
        with patch.dict("os.environ", {"TEST_DISCORD_PUBLIC_KEY": "public-key"}, clear=False):
            async with RunningApp(
                create_app(
                    make_config(),
                    runtime,
                    adapter="discord",
                    discord_signature_verifier=lambda **_kwargs: True,
                )
            ) as app:
                async with aiohttp.ClientSession() as session:
                    response = await session.post(
                        app.base_url + "/discord/interactions",
                        json={"type": 1},
                        headers=self.discord_headers(),
                    )
                    payload = await response.json()

        self.assertEqual(response.status, 200)
        self.assertEqual(payload, {"type": 1})

    async def test_discord_interactions_invalid_signature_is_rejected(self) -> None:
        runtime = BotRuntime(make_config())
        with patch.dict("os.environ", {"TEST_DISCORD_PUBLIC_KEY": "public-key"}, clear=False):
            async with RunningApp(
                create_app(
                    make_config(),
                    runtime,
                    adapter="discord",
                    discord_signature_verifier=lambda **_kwargs: False,
                )
            ) as app:
                async with aiohttp.ClientSession() as session:
                    response = await session.post(
                        app.base_url + "/discord/interactions",
                        json={"type": 1},
                        headers=self.discord_headers(),
                    )
                    payload = await response.json()

        self.assertEqual(response.status, 401)
        self.assertFalse(payload["ok"])

    async def test_discord_interactions_status_inline_response(self) -> None:
        status = AsyncMock(return_value={"reply": "discord status"})
        runtime = BotRuntime(make_config(), BotRuntimeHandlers(status=status))
        with patch.dict("os.environ", {"TEST_DISCORD_PUBLIC_KEY": "public-key"}, clear=False):
            async with RunningApp(
                create_app(
                    make_config(),
                    runtime,
                    adapter="discord",
                    discord_signature_verifier=lambda **_kwargs: True,
                )
            ) as app:
                async with aiohttp.ClientSession() as session:
                    response = await session.post(
                        app.base_url + "/discord/interactions",
                        json=self.discord_payload("status"),
                        headers=self.discord_headers(),
                    )
                    payload = await response.json()

        self.assertEqual(response.status, 200)
        self.assertEqual(payload["type"], 4)
        self.assertEqual(payload["data"]["content"], "discord status")
        self.assertEqual(payload["data"]["flags"], 64)
        status.assert_awaited_once()

    async def test_discord_interactions_accounts_inline_response(self) -> None:
        accounts = AsyncMock(return_value={"reply": "Accounts summary", "profile_summaries": []})
        runtime = BotRuntime(make_config(), BotRuntimeHandlers(accounts=accounts))
        with patch.dict("os.environ", {"TEST_DISCORD_PUBLIC_KEY": "public-key"}, clear=False):
            async with RunningApp(
                create_app(
                    make_config(),
                    runtime,
                    adapter="discord",
                    discord_signature_verifier=lambda **_kwargs: True,
                )
            ) as app:
                async with aiohttp.ClientSession() as session:
                    response = await session.post(
                        app.base_url + "/discord/interactions",
                        json=self.discord_payload("accounts"),
                        headers=self.discord_headers(),
                    )
                    payload = await response.json()

        self.assertEqual(response.status, 200)
        self.assertEqual(payload["type"], 4)
        self.assertEqual(payload["data"]["content"], "Accounts summary")
        self.assertEqual(payload["data"]["flags"], 64)
        accounts.assert_awaited_once()

    async def test_discord_interactions_unbound_user_keeps_authz_data(self) -> None:
        runtime = BotRuntime(make_config())
        with patch.dict("os.environ", {"TEST_DISCORD_PUBLIC_KEY": "public-key"}, clear=False):
            async with RunningApp(
                create_app(
                    make_config(),
                    runtime,
                    adapter="discord",
                    discord_signature_verifier=lambda **_kwargs: True,
                )
            ) as app:
                async with aiohttp.ClientSession() as session:
                    response = await session.post(
                        app.base_url + "/discord/interactions",
                        json=self.discord_payload("status", user_id="stranger"),
                        headers=self.discord_headers(),
                    )
                    payload = await response.json()

        self.assertEqual(response.status, 200)
        self.assertEqual(payload["type"], 4)
        self.assertIn("not bound", payload["data"]["content"])

    async def test_discord_interactions_force_defers_and_sends_followup(self) -> None:
        force_check = AsyncMock(return_value={"reply": "forced"})
        runtime = BotRuntime(make_config(), BotRuntimeHandlers(force_check=force_check))
        followups = []

        async def fake_followup_sender(**kwargs):
            followups.append(kwargs)
            return {"ok": True}

        with patch.dict("os.environ", {"TEST_DISCORD_PUBLIC_KEY": "public-key"}, clear=False):
            async with RunningApp(
                create_app(
                    make_config(),
                    runtime,
                    adapter="discord",
                    discord_signature_verifier=lambda **_kwargs: True,
                    discord_followup_sender=fake_followup_sender,
                )
            ) as app:
                async with aiohttp.ClientSession() as session:
                    response = await session.post(
                        app.base_url + "/discord/interactions",
                        json=self.discord_payload("force", user_id="admin-1"),
                        headers=self.discord_headers(),
                    )
                    payload = await response.json()
                for _ in range(10):
                    if followups:
                        break
                    await asyncio.sleep(0.01)

        self.assertEqual(response.status, 200)
        self.assertEqual(payload["type"], 5)
        self.assertEqual(payload["data"]["flags"], 64)
        self.assertEqual(followups[0]["application_id"], "app-id-from-payload")
        self.assertEqual(followups[0]["interaction_token"], "interaction-token")
        self.assertEqual(followups[0]["text"], "forced")
        force_check.assert_awaited_once()


# --- merged from tests/test_bot_runtime.py ---
TEST_WORKSPACE_DIR = Path(__file__).resolve().parents[1]


def make_workspace_temp_dir() -> Path:
    root = TEST_WORKSPACE_DIR / ".tmp-tests"
    root.mkdir(exist_ok=True)
    path = root / uuid.uuid4().hex
    path.mkdir()
    return path


def make_config__bot_runtime():
    return tron.normalize_config(
        {
            "account": {"user": "u1", "passwd": ""},
            "accounts": {
                "current": "default",
                "profiles": {
                    "default": {"user": "u1", "passwd": "", "label": ""},
                    "alt": {"user": "u2", "passwd": "", "label": ""},
                },
            },
            "integrations": {
                "bindings": {
                    binding_key("discord", "u1"): {
                        "adapter": "discord",
                        "external_user_id": "u1",
                        "profile": "default",
                        "channel_id": "chan-1",
                    },
                    binding_key("line", "line-user"): {
                        "adapter": "line",
                        "external_user_id": "line-user",
                        "profile": "alt",
                        "channel_id": "",
                    },
                },
                "admins": {
                    "discord": ["admin-1"],
                    "line": [],
                },
                "security": {
                    "dangerous_cooldown_seconds": 30,
                    "audit_log": True,
                },
            },
        }
    )


class BotRuntimeTest(unittest.IsolatedAsyncioTestCase):
    async def test_unknown_command_returns_rejection(self) -> None:
        runtime = BotRuntime(make_config__bot_runtime())

        result = await runtime.handle_text("hello", adapter="discord", source_user_id="u1")

        self.assertFalse(result.ok)
        self.assertEqual(result.action, "unknown")

    async def test_unbound_user_is_rejected(self) -> None:
        runtime = BotRuntime(make_config__bot_runtime())

        result = await runtime.handle_text(
            "status",
            adapter="discord",
            source_user_id="stranger",
            channel_id="chan-1",
        )

        self.assertFalse(result.ok)
        self.assertEqual(result.data["binding_status"], "not_bound")

    async def test_channel_mismatch_is_rejected_for_bound_user(self) -> None:
        runtime = BotRuntime(make_config__bot_runtime())

        result = await runtime.handle_text(
            "status",
            adapter="discord",
            source_user_id="u1",
            channel_id="other-channel",
        )

        self.assertFalse(result.ok)
        self.assertEqual(result.data["binding_status"], "channel_mismatch")

    async def test_bound_user_can_start_stop_and_check_status(self) -> None:
        runtime = BotRuntime(make_config__bot_runtime())

        start = await runtime.handle_text("start", adapter="discord", source_user_id="u1", channel_id="chan-1")
        running = await runtime.handle_text("status", adapter="discord", source_user_id="u1", channel_id="chan-1")
        stop = await runtime.handle_text("stop", adapter="discord", source_user_id="u1", channel_id="chan-1")
        stopped = await runtime.handle_text("status", adapter="discord", source_user_id="u1", channel_id="chan-1")

        self.assertTrue(start.ok)
        self.assertEqual(running.data["state"], "running")
        self.assertTrue(stop.ok)
        self.assertEqual(stopped.data["state"], "stopped")

    async def test_start_stop_persists_and_restores_running_profiles(self) -> None:
        temp_dir = make_workspace_temp_dir()
        try:
            runtime = BotRuntime(make_config__bot_runtime(), runtime_base_dir=temp_dir)
            start = await runtime.handle_text("start", adapter="discord", source_user_id="u1", channel_id="chan-1")

            restored = BotRuntime(make_config__bot_runtime(), runtime_base_dir=temp_dir)
            running = await restored.handle_text("status", adapter="discord", source_user_id="u1", channel_id="chan-1")
            stop = await restored.handle_text("stop", adapter="discord", source_user_id="u1", channel_id="chan-1")
            stopped = BotRuntime(make_config__bot_runtime(), runtime_base_dir=temp_dir)

            self.assertTrue(start.ok)
            self.assertEqual(running.data["state"], "running")
            self.assertTrue(stop.ok)
            self.assertNotIn("default", stopped.running_profiles)
            self.assertEqual(load_runtime_state(temp_dir).profiles["default"]["bot_state"], "stopped")
        finally:
            shutil.rmtree(temp_dir, ignore_errors=True)

    async def test_admin_can_force_without_binding(self) -> None:
        force_check = AsyncMock(return_value={"reply": "forced"})
        runtime = BotRuntime(
            make_config__bot_runtime(),
            BotRuntimeHandlers(force_check=force_check),
        )

        result = await runtime.handle_text(
            "force",
            adapter="discord",
            source_user_id="admin-1",
            channel_id="admin-channel",
        )

        self.assertTrue(result.ok)
        self.assertEqual(result.action, "force-check")
        self.assertEqual(result.reply, "forced")
        force_check.assert_awaited_once()
        self.assertTrue(force_check.await_args.kwargs["admin"])

    async def test_bound_user_cannot_operate_other_profile(self) -> None:
        runtime = BotRuntime(make_config__bot_runtime())

        result = await runtime.handle_command(
            ControlCommand(
                action="status",
                adapter="discord",
                source_user_id="u1",
                profile="alt",
            ),
            channel_id="chan-1",
        )

        self.assertFalse(result.ok)
        self.assertEqual(result.data["authz_status"], "profile_mismatch")

    async def test_text_status_with_other_profile_is_rejected_for_bound_user(self) -> None:
        runtime = BotRuntime(make_config__bot_runtime())

        result = await runtime.handle_text(
            "status alt",
            adapter="discord",
            source_user_id="u1",
            channel_id="chan-1",
        )

        self.assertFalse(result.ok)
        self.assertEqual(result.data["authz_status"], "profile_mismatch")

    async def test_admin_can_control_specific_profile_from_text(self) -> None:
        runtime = BotRuntime(make_config__bot_runtime())

        start = await runtime.handle_text(
            "start alt",
            adapter="discord",
            source_user_id="admin-1",
            channel_id="admin-channel",
        )
        status = await runtime.handle_text(
            "status alt",
            adapter="discord",
            source_user_id="admin-1",
            channel_id="admin-channel",
        )
        stop = await runtime.handle_text(
            "stop alt",
            adapter="discord",
            source_user_id="admin-1",
            channel_id="admin-channel",
        )

        self.assertTrue(start.ok)
        self.assertEqual(start.profile, "alt")
        self.assertEqual(status.data["state"], "running")
        self.assertTrue(stop.ok)
        self.assertEqual(stop.profile, "alt")

    async def test_admin_channel_must_be_allowed_when_configured(self) -> None:
        config = make_config__bot_runtime()
        config["integrations"]["security"]["allowed_channels"] = {"discord": ["ops"], "line": []}
        runtime = BotRuntime(config, BotRuntimeHandlers(force_check=AsyncMock()))

        rejected = await runtime.handle_text(
            "force",
            adapter="discord",
            source_user_id="admin-1",
            channel_id="elsewhere",
        )
        allowed = await runtime.handle_text(
            "force",
            adapter="discord",
            source_user_id="admin-1",
            channel_id="ops",
        )

        self.assertFalse(rejected.ok)
        self.assertEqual(rejected.data["authz_status"], "channel_not_allowed")
        self.assertTrue(allowed.ok)

    async def test_dangerous_command_cooldown_blocks_repeated_force(self) -> None:
        now = [1000.0]
        force_check = AsyncMock(return_value={"reply": "forced"})
        runtime = BotRuntime(
            make_config__bot_runtime(),
            BotRuntimeHandlers(force_check=force_check),
            time_fn=lambda: now[0],
        )

        first = await runtime.handle_text("force", adapter="discord", source_user_id="admin-1")
        second = await runtime.handle_text("force", adapter="discord", source_user_id="admin-1")
        now[0] += 31
        third = await runtime.handle_text("force", adapter="discord", source_user_id="admin-1")

        self.assertTrue(first.ok)
        self.assertFalse(second.ok)
        self.assertTrue(second.data["cooldown_active"])
        self.assertEqual(second.data["authz_status"], "cooldown_active")
        self.assertTrue(third.ok)
        self.assertEqual(force_check.await_count, 2)

    async def test_audit_callback_runs_for_allowed_rejected_and_cooldown(self) -> None:
        now = [1000.0]
        audit_events = []

        async def audit(**kwargs):
            audit_events.append(kwargs["event"].to_dict())

        runtime = BotRuntime(
            make_config__bot_runtime(),
            BotRuntimeHandlers(
                force_check=AsyncMock(return_value={"reply": "forced"}),
                audit=audit,
            ),
            time_fn=lambda: now[0],
        )

        accepted = await runtime.handle_text("force", adapter="discord", source_user_id="admin-1")
        cooldown = await runtime.handle_text("force", adapter="discord", source_user_id="admin-1")
        rejected = await runtime.handle_text(
            "status",
            adapter="discord",
            source_user_id="stranger",
            channel_id="chan-1",
        )

        self.assertTrue(accepted.data["audit_id"])
        self.assertTrue(cooldown.data["audit_id"])
        self.assertTrue(rejected.data["audit_id"])
        self.assertEqual([event["reason"] for event in audit_events], ["ok", "cooldown_active", "not_bound"])
        self.assertNotIn("payload-data", str(audit_events))

    async def test_bound_user_can_reauth_own_profile(self) -> None:
        reauth = AsyncMock(return_value="reauth queued")
        runtime = BotRuntime(make_config__bot_runtime(), BotRuntimeHandlers(reauth=reauth))

        result = await runtime.handle_text("reauth", adapter="discord", source_user_id="u1", channel_id="chan-1")

        self.assertTrue(result.ok)
        self.assertEqual(result.action, "reauth")
        self.assertEqual(result.profile, "default")
        reauth.assert_awaited_once()

    async def test_qr_payload_dispatches_to_handler(self) -> None:
        qr_submit = AsyncMock(return_value={"message": "qr accepted"})
        runtime = BotRuntime(make_config__bot_runtime(), BotRuntimeHandlers(qr_submit=qr_submit))

        result = await runtime.handle_text(
            "qr payload-data",
            adapter="line",
            source_user_id="line-user",
        )

        self.assertTrue(result.ok)
        self.assertEqual(result.profile, "alt")
        self.assertEqual(result.reply, "qr accepted")
        self.assertEqual(qr_submit.await_args.kwargs["payload"], "payload-data")
        self.assertNotIn("payload", result.to_dict()["data"])
        self.assertTrue(result.data["payload_present"])

    async def test_qr_all_requires_admin(self) -> None:
        runtime = BotRuntime(make_config__bot_runtime(), BotRuntimeHandlers(qr_submit=AsyncMock()))

        result = await runtime.handle_text(
            "qr all payload-data",
            adapter="line",
            source_user_id="line-user",
        )

        self.assertFalse(result.ok)
        self.assertIn("admin", result.reply.lower())

    async def test_admin_can_dispatch_qr_all_without_binding(self) -> None:
        qr_submit = AsyncMock(return_value={"ok": True, "status": "submitted", "match_count": 2})
        runtime = BotRuntime(make_config__bot_runtime(), BotRuntimeHandlers(qr_submit=qr_submit))

        result = await runtime.handle_text(
            "qr --all payload-data",
            adapter="discord",
            source_user_id="admin-1",
            channel_id="admin-channel",
        )

        self.assertTrue(result.ok)
        self.assertTrue(result.data["fanout"])
        self.assertTrue(result.data["admin"])
        self.assertEqual(qr_submit.await_args.kwargs["payload"], "payload-data")
        self.assertTrue(qr_submit.await_args.kwargs["command"].payload["fanout"])

    async def test_qr_command_requires_payload(self) -> None:
        runtime = BotRuntime(make_config__bot_runtime())

        result = await runtime.handle_text("qr", adapter="discord", source_user_id="u1", channel_id="chan-1")

        self.assertFalse(result.ok)
        self.assertIn("required", result.reply)

    async def test_accounts_requires_binding_and_limits_regular_user_visibility(self) -> None:
        runtime = BotRuntime(make_config__bot_runtime())

        rejected = await runtime.handle_text(
            "accounts",
            adapter="discord",
            source_user_id="stranger",
            channel_id="chan-1",
        )
        allowed = await runtime.handle_text(
            "accounts",
            adapter="discord",
            source_user_id="u1",
            channel_id="chan-1",
        )

        self.assertFalse(rejected.ok)
        self.assertEqual(rejected.data["authz_status"], "not_bound")
        self.assertTrue(allowed.ok)
        self.assertEqual(allowed.data["profiles"], ["default"])
        self.assertEqual(allowed.data["total_count"], 2)
        self.assertFalse(allowed.data["admin"])

    async def test_admin_accounts_can_see_all_profiles_and_uses_handler(self) -> None:
        accounts = AsyncMock(return_value={"reply": "account summaries", "profile_summaries": []})
        runtime = BotRuntime(make_config__bot_runtime(), BotRuntimeHandlers(accounts=accounts))

        result = await runtime.handle_text(
            "profiles",
            adapter="discord",
            source_user_id="admin-1",
            channel_id="admin-channel",
        )

        self.assertTrue(result.ok)
        self.assertEqual(result.reply, "account summaries")
        self.assertEqual(accounts.await_args.kwargs["profiles"], ["default", "alt"])
        self.assertEqual(accounts.await_args.kwargs["total_count"], 2)
        self.assertTrue(accounts.await_args.kwargs["admin"])


class BotRuntimeConfigTest(unittest.TestCase):
    def test_normalize_config_adds_admin_lists(self) -> None:
        normalized = tron.normalize_config({"config": {"user-agent": []}})

        self.assertEqual(normalized["integrations"]["admins"]["discord"], [])
        self.assertEqual(normalized["integrations"]["admins"]["line"], [])

    def test_adapter_bridge_maps_second_round_commands(self) -> None:
        self.assertEqual(
            map_adapter_command("start", adapter="discord", source_user_id="u1").action,
            "start",
        )
        self.assertEqual(
            map_adapter_command("reauth", adapter="discord", source_user_id="u1").action,
            "reauth",
        )

    def test_adapter_bridge_maps_profile_arguments_and_account_aliases(self) -> None:
        status = map_adapter_command("status alt", adapter="discord", source_user_id="u1")
        start = map_adapter_command("start alt", adapter="discord", source_user_id="u1")
        profiles = map_adapter_command("profiles", adapter="discord", source_user_id="u1")
        account = map_adapter_command("account", adapter="discord", source_user_id="u1")

        self.assertEqual(status.profile, "alt")
        self.assertEqual(start.profile, "alt")
        self.assertEqual(profiles.action, "account-list")
        self.assertEqual(account.action, "account-list")

    def test_adapter_bridge_maps_qr_all_without_payload_leak(self) -> None:
        command = map_adapter_command("qr all payload-data", adapter="discord", source_user_id="u1")

        self.assertEqual(command.action, "qr-submit")
        self.assertTrue(command.payload["fanout"])
        self.assertEqual(command.payload["payload"], "payload-data")


# --- merged from tests/test_bot_handlers.py ---
try:
    import aiohttp
    from aiohttp import web
except (ImportError, ModuleNotFoundError):
    aiohttp = None
    web = None



TEST_WORKSPACE_DIR = Path(__file__).resolve().parents[1]


def make_workspace_temp_dir__bot_handlers() -> Path:
    root = TEST_WORKSPACE_DIR / ".tmp-tests"
    root.mkdir(exist_ok=True)
    path = root / uuid.uuid4().hex
    path.mkdir()
    return path


def make_config__bot_handlers():
    return tron.normalize_config(
        {
            "account": {"user": "user1", "passwd": "pass1"},
            "accounts": {
                "current": "default",
                "profiles": {
                    "default": {"user": "user1", "passwd": "pass1", "label": "Primary"},
                    "alt": {"user": "user1", "passwd": "pass1", "label": "Alt"},
                },
            },
            "integrations": {
                "bindings": {
                    binding_key("line", "line-user"): {
                        "adapter": "line",
                        "external_user_id": "line-user",
                        "profile": "default",
                        "channel_id": "",
                    },
                    binding_key("discord", "discord-user"): {
                        "adapter": "discord",
                        "external_user_id": "discord-user",
                        "profile": "alt",
                        "channel_id": "chan-1",
                    },
                },
                "admins": {
                    "discord": ["admin-1"],
                    "line": [],
                },
            },
            "config": {"enable_log": True},
        }
    )


@unittest.skipUnless(aiohttp is not None and web is not None, "aiohttp.web is required")
class BotHandlersTest(unittest.IsolatedAsyncioTestCase):
    async def asyncSetUp(self) -> None:
        self.original_config = copy.deepcopy(tron.CONFIG)
        self.original_base_dir = tron.BASE_DIR
        self.original_path = tron.PATH
        self.temp_dir = make_workspace_temp_dir__bot_handlers()
        tron.BASE_DIR = self.temp_dir
        tron.PATH = self.temp_dir / "log"
        tron.CONFIG.clear()
        tron.CONFIG.update(make_config__bot_handlers())
        tron.CONFIG["notifications"]["tg"]["enable"] = False
        tron.CONFIG["notifications"]["dc"]["enable"] = False
        tron.reset_unsupported_rollcall_state()
        self.server = await FakeTronServer().start()

    async def asyncTearDown(self) -> None:
        await self.server.close()
        tron.CONFIG.clear()
        tron.CONFIG.update(copy.deepcopy(self.original_config))
        tron.BASE_DIR = self.original_base_dir
        tron.PATH = self.original_path
        shutil.rmtree(self.temp_dir, ignore_errors=True)

    def session_factory(self):
        return aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True))

    def runtime(self):
        return create_bot_runtime(
            tron.CONFIG,
            base_dir=self.temp_dir,
            session_factory=self.session_factory,
        )

    async def test_status_handler_reports_profile_state_and_restores_context(self) -> None:
        runtime = self.runtime()

        result = await runtime.handle_text(
            "status",
            adapter="discord",
            source_user_id="discord-user",
            channel_id="chan-1",
        )

        self.assertTrue(result.ok)
        self.assertEqual(result.profile, "alt")
        self.assertEqual(result.data["profile"], "alt")
        self.assertEqual(result.data["pending_qr_count"], 0)
        self.assertEqual(result.data["binding_count"], 1)
        self.assertIn("runtime_state", result.data)
        self.assertIn("status_summary", result.data)
        self.assertEqual(result.data["status_summary"]["profile"], "alt")
        self.assertNotIn("cookie_path", str(result.to_dict()))
        self.assertEqual(tron.CONFIG["accounts"]["current"], "default")

    async def test_accounts_handler_returns_visible_safe_summaries(self) -> None:
        runtime = self.runtime()

        result = await runtime.handle_text(
            "accounts",
            adapter="line",
            source_user_id="line-user",
        )

        self.assertTrue(result.ok)
        self.assertEqual(result.data["profiles"], ["default"])
        self.assertEqual(result.data["visible_count"], 1)
        self.assertEqual(result.data["total_count"], 2)
        self.assertEqual(result.data["profile_summaries"][0]["profile"], "default")
        encoded = str(result.to_dict())
        self.assertNotIn("pass1", encoded)
        self.assertNotIn("cookies", encoded.lower())

    async def test_admin_accounts_handler_sees_all_profiles(self) -> None:
        runtime = self.runtime()

        result = await runtime.handle_text(
            "profiles",
            adapter="discord",
            source_user_id="admin-1",
            channel_id="chan-1",
        )

        self.assertTrue(result.ok)
        self.assertEqual(result.data["profiles"], ["default", "alt"])
        self.assertEqual(result.data["visible_count"], 2)
        self.assertTrue(result.data["admin"])

    async def test_force_check_uses_fake_server_once(self) -> None:
        self.server.rollcalls = [{"status": "on_call_fine", "rollcall_id": 11}]
        runtime = self.runtime()

        with (
            patch.object(tron, "get_active_http_endpoints", self.server.endpoints),
            patch.object(tron, "log_print"),
            patch.object(tron, "mes", AsyncMock()),
        ):
            result = await runtime.handle_text(
                "force",
                adapter="line",
                source_user_id="line-user",
            )

        self.assertTrue(result.ok)
        self.assertEqual(result.data["status"], "ok")
        self.assertEqual(result.data["result"], "on_call_fine")
        runtime = load_runtime_state(self.temp_dir).profiles["default"]
        self.assertEqual(runtime["last_check"]["status"], "on_call_fine")
        self.assertEqual(tron.CONFIG["accounts"]["current"], "default")

    async def test_reauth_clears_cookie_and_saves_fresh_login_cookie(self) -> None:
        path = cookie_path(self.temp_dir, "default")
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text("[]", encoding="utf-8")
        runtime = self.runtime()

        with (
            patch.object(tron, "get_active_http_endpoints", self.server.endpoints),
            patch.object(tron, "log_print"),
        ):
            result = await runtime.handle_text(
                "reauth",
                adapter="line",
                source_user_id="line-user",
            )

        self.assertTrue(result.ok)
        self.assertEqual(result.data["status"], "success")
        self.assertTrue(path.exists())
        self.assertIn("session", path.read_text(encoding="utf-8"))
        self.assertEqual(load_runtime_state(self.temp_dir).profiles["default"]["last_login"]["status"], "success")

    async def test_qr_submit_posts_payload_to_fake_server(self) -> None:
        runtime = self.runtime()
        payload = '{"rollcallId":88,"data":"fixture"}'

        with (
            patch.object(tron, "get_active_http_endpoints", self.server.endpoints),
            patch.object(tron, "log_print"),
            patch.object(tron, "notify_event", AsyncMock()),
        ):
            result = await runtime.handle_text(
                "qr {}".format(payload),
                adapter="line",
                source_user_id="line-user",
            )

        self.assertTrue(result.ok)
        self.assertEqual(result.data["status"], "ok")
        self.assertEqual(self.server.qr_answers[0]["rollcall_id"], "88")
        self.assertEqual(self.server.qr_answers[0]["body"]["data"], "fixture")
        self.assertEqual(load_runtime_state(self.temp_dir).profiles["default"]["last_check"]["status"], "qrcode_submitted")
        self.assertEqual(tron.CONFIG["accounts"]["current"], "default")

    async def test_admin_qr_all_fans_out_to_matching_pending_profiles(self) -> None:
        runtime = self.runtime()
        payload = '{"rollcallId":88,"data":"fixture"}'
        add_pending_qr(self.temp_dir, profile="default", rollcall_id=88, provider="thu")
        add_pending_qr(self.temp_dir, profile="alt", rollcall_id=88, provider="thu")
        add_pending_qr(self.temp_dir, profile="default", rollcall_id=88, provider="fju")

        with (
            patch.object(tron, "get_active_http_endpoints", self.server.endpoints),
            patch.object(tron, "log_print"),
            patch.object(tron, "notify_event", AsyncMock()),
        ):
            result = await runtime.handle_text(
                "qr all {}".format(payload),
                adapter="discord",
                source_user_id="admin-1",
                channel_id="admin-channel",
            )

        self.assertTrue(result.ok)
        self.assertEqual(result.data["status"], "submitted")
        self.assertEqual(result.data["match_count"], 2)
        self.assertEqual(len(self.server.qr_answers), 2)
        self.assertEqual([item["rollcall_id"] for item in self.server.qr_answers], ["88", "88"])
        self.assertEqual([item.profile for item in list_pending_qr(self.temp_dir)], ["default"])
        self.assertEqual(tron.CONFIG["accounts"]["current"], "default")
        self.assertNotIn("fixture", str(result.to_dict()))


# --- merged from tests/test_bot_status.py ---
class BotStatusSummaryTest(unittest.TestCase):
    def make_summary(self):
        return build_profile_status_summary(
            "default",
            state="running",
            cookie={
                "enabled": True,
                "exists": True,
                "valid": True,
                "record_count": 2,
                "age_seconds": 12.5,
                "age": "12s",
                "path": "C:/secret/state/cookies/default.json",
            },
            runtime_state={
                "bot_state": "running",
                "monitor_state": "running",
                "heartbeat_stale": False,
                "last_login": {
                    "status": "success",
                    "credential_source": "config",
                    "ok": True,
                },
                "last_check": {
                    "status": "qrcode_submitted",
                    "rollcall_id": "88",
                    "rollcall_type": "qrcode",
                    "timestamp": 123.0,
                },
                "last_error": {
                    "status": "login_failed",
                    "message": "password token cookie raw payload should redact",
                    "timestamp": 124.0,
                },
            },
            pending_qr=[
                {
                    "provider": "thu",
                    "profile": "default",
                    "rollcall_id": "88",
                    "rollcall_type": "qrcode",
                    "source_adapter": "discord",
                    "source_channel_id": "chan-secret",
                    "data": "raw-qr-data",
                }
            ],
            bindings={"count": 2, "adapters": {"discord": 1, "line": 1}},
            course_discovery={
                "enabled": True,
                "current_semester_endpoint": True,
                "courses_endpoint": True,
                "read_only": True,
            },
        )

    def test_profile_summary_aggregates_safe_status_fields(self) -> None:
        summary = self.make_summary()

        self.assertEqual(summary["profile"], "default")
        self.assertEqual(summary["bot_state"], "running")
        self.assertEqual(summary["cookie"]["age"], "12s")
        self.assertEqual(summary["pending_qr_count"], 1)
        self.assertEqual(summary["pending_qr"][0]["rollcall_id"], "88")
        self.assertEqual(summary["adapter_counts"], {"discord": 1, "line": 1})
        self.assertTrue(summary["course_discovery"]["enabled"])

    def test_summary_and_reply_do_not_leak_sensitive_values(self) -> None:
        summary = self.make_summary()
        encoded = json.dumps(summary, ensure_ascii=False)
        reply = format_profile_status_reply(summary)

        self.assertIn("Profile default", reply)
        self.assertIn("pending QR 1", reply)
        for forbidden in (
            "C:/secret",
            "chan-secret",
            "raw-qr-data",
            "password token cookie raw payload",
        ):
            self.assertNotIn(forbidden, encoded)
            self.assertNotIn(forbidden, reply)
        self.assertIn("[redacted]", encoded)

    def test_accounts_reply_limits_visible_profile_details(self) -> None:
        summaries = [
            build_profile_status_summary(
                f"profile-{index}",
                state="stopped",
                cookie={},
                runtime_state={},
                pending_qr=[],
                bindings={"count": 0, "adapters": {}},
            )
            for index in range(MAX_ACCOUNTS_IN_REPLY + 2)
        ]

        reply = format_accounts_reply(
            summaries,
            total_count=len(summaries),
            visible_count=len(summaries),
            truncated=True,
        )

        self.assertIn("showing 10/12", reply)
        self.assertIn("profile-0", reply)
        self.assertNotIn("profile-11", reply)

    def test_empty_accounts_reply_is_stable(self) -> None:
        self.assertEqual(
            format_accounts_reply([], total_count=2, visible_count=0),
            "No visible profiles.",
        )


# --- merged from tests/test_notification_bus.py ---
def make_config__notification_bus():
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
        targets = build_notification_targets(make_config__notification_bus(), profile="default")

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
            config=make_config__notification_bus(),
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
            config=make_config__notification_bus(),
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
        sink = create_line_notification_sink(make_config__notification_bus(), sender=fake_line_sender)

        summary = await dispatch_notification_event(
            event,
            config=make_config__notification_bus(),
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
        sink = create_discord_notification_sink(make_config__notification_bus(), sender=fake_discord_sender)

        summary = await dispatch_notification_event(
            event,
            config=make_config__notification_bus(),
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
        sink = create_telegram_notification_sink(make_config__notification_bus(), sender=fake_telegram_sender)

        summary = await dispatch_notification_event(
            event,
            config=make_config__notification_bus(),
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
            tron.CONFIG.update(make_config__notification_bus())
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


# --- merged from tests/test_notification_delivery.py ---
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


# --- merged from tests/test_line_adapter.py ---
class FakeResponse__line_adapter:
    def __init__(self, status: int = 200, text: str = "ok") -> None:
        self.status = status
        self._text = text

    async def text(self) -> str:
        return self._text


class FakePostContext:
    def __init__(self, response: FakeResponse__line_adapter) -> None:
        self.response = response

    async def __aenter__(self) -> FakeResponse__line_adapter:
        return self.response

    async def __aexit__(self, exc_type, exc, tb) -> bool:
        return False


class FakeSession:
    def __init__(self, response: FakeResponse__line_adapter) -> None:
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
        session = FakeSession(FakeResponse__line_adapter(status=200, text='{"ok":true}'))

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
        session = FakeSession(FakeResponse__line_adapter(status=200, text=""))

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
        session = FakeSession(FakeResponse__line_adapter(status=500, text="Bearer secret-token leaked"))

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


# --- merged from tests/test_discord_adapter.py ---
class FakeResponse__discord_adapter:
    def __init__(self, status: int = 200, text: str = "ok") -> None:
        self.status = status
        self._text = text

    async def text(self) -> str:
        return self._text


class FakeRequestContext:
    def __init__(self, response: FakeResponse__discord_adapter) -> None:
        self.response = response

    async def __aenter__(self) -> FakeResponse__discord_adapter:
        return self.response

    async def __aexit__(self, exc_type, exc, tb) -> bool:
        return False


class FakeSession__discord_adapter:
    def __init__(self, response: FakeResponse__discord_adapter) -> None:
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
        session = FakeSession__discord_adapter(FakeResponse__discord_adapter(status=200, text='{"id":"1"}'))

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
        session = FakeSession__discord_adapter(FakeResponse__discord_adapter(status=200, text='{"id":"original"}'))

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
        session = FakeSession__discord_adapter(FakeResponse__discord_adapter(status=200, text='{"ok":true}'))

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
        session = FakeSession__discord_adapter(FakeResponse__discord_adapter(status=500, text="Authorization: Bot secret-token leaked"))

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


# --- merged from tests/test_telegram_adapter.py ---
class FakeResponse__telegram_adapter:
    def __init__(self, status: int = 200, text: str = "ok") -> None:
        self.status = status
        self._text = text

    async def text(self) -> str:
        return self._text


class FakePostContext__telegram_adapter:
    def __init__(self, response: FakeResponse__telegram_adapter) -> None:
        self.response = response

    async def __aenter__(self) -> FakeResponse__telegram_adapter:
        return self.response

    async def __aexit__(self, exc_type, exc, tb) -> bool:
        return False


class FakeSession__telegram_adapter:
    def __init__(self, response: FakeResponse__telegram_adapter) -> None:
        self.response = response
        self.calls = []

    def post(self, url, **kwargs):
        self.calls.append((url, kwargs))
        return FakePostContext__telegram_adapter(self.response)


class TelegramAdapterDeliveryTest(unittest.IsolatedAsyncioTestCase):
    def test_build_telegram_text_message_limits_and_sanitizes_text(self) -> None:
        self.assertEqual(build_telegram_text_message("", limit=10), {"text": " "})
        self.assertEqual(build_telegram_text_message("abcdef", limit=3), {"text": "abc"})
        self.assertEqual(build_telegram_text_message("token=secret", limit=100), {"text": "[redacted]"})

    async def test_send_telegram_message_success(self) -> None:
        session = FakeSession__telegram_adapter(FakeResponse__telegram_adapter(status=200, text='{"ok":true}'))

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
        session = FakeSession__telegram_adapter(FakeResponse__telegram_adapter(status=500, text="bot token leaked chat_id=secret"))

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
            await send_telegram_message("", "hello", "bot-token", session_factory=lambda: FakeSession__telegram_adapter(FakeResponse__telegram_adapter()))
        with self.assertRaises(TelegramDeliveryError):
            await send_telegram_message("chat-1", "hello", "", session_factory=lambda: FakeSession__telegram_adapter(FakeResponse__telegram_adapter()))


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

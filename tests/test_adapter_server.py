import asyncio
import json
import unittest
from unittest.mock import AsyncMock, patch

try:
    import aiohttp
    from aiohttp import web
except (ImportError, ModuleNotFoundError):
    aiohttp = None
    web = None

from troTHU import tron
from troTHU.adapter_bridge import binding_key
from troTHU.adapter_server import calculate_line_signature, create_app
from troTHU.bot_runtime import BotRuntime, BotRuntimeHandlers
from troTHU.line_adapter import LineDeliveryError


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

import asyncio
import json
import unittest
from unittest.mock import patch

from troTHU.bot_runtime import BotRuntime, BotRuntimeHandlers
from troTHU.discord_gateway import (
    OP_DISPATCH,
    OP_HELLO,
    build_gateway_health,
    build_gateway_identify_payload,
    parse_gateway_payload,
    run_discord_gateway,
)


def gateway_config():
    return {
        "integrations": {
            "discord": {
                "token_env": "TEST_DISCORD_TOKEN",
                "application_id_env": "TEST_DISCORD_APP",
                "channel_env": "TEST_DISCORD_CHANNEL",
            },
            "bindings": {
                "discord:user-1": {
                    "adapter": "discord",
                    "external_user_id": "user-1",
                    "profile": "default",
                    "channel_id": "chan-1",
                }
            },
            "admins": {"discord": ["user-1"]},
            "security": {"dangerous_cooldown_seconds": 0},
        },
        "accounts": {"current": "default", "profiles": {"default": {"user": "u1", "passwd": ""}}},
    }


def interaction(subcommand, *, interaction_id="i1", token="itok", options=None):
    return {
        "id": interaction_id,
        "token": token,
        "application_id": "app-1",
        "type": 2,
        "channel_id": "chan-1",
        "member": {"user": {"id": "user-1"}},
        "data": {
            "name": "tron",
            "options": [{"type": 1, "name": subcommand, "options": options or []}],
        },
    }


class FakeWebSocket:
    def __init__(self, messages):
        self.messages = list(messages)
        self.sent = []

    async def __aenter__(self):
        return self

    async def __aexit__(self, exc_type, exc, tb):
        return False

    async def receive_json(self):
        if not self.messages:
            await asyncio.sleep(0)
            return {"op": 7, "d": None}
        return self.messages.pop(0)

    async def send_json(self, value):
        self.sent.append(value)


class FakeSession:
    def __init__(self, ws):
        self.ws = ws

    def ws_connect(self, _url):
        return self.ws


class DiscordGatewayTest(unittest.IsolatedAsyncioTestCase):
    def test_health_and_identify_payload_are_safe_in_summary(self) -> None:
        config = gateway_config()
        with patch.dict("os.environ", {"TEST_DISCORD_TOKEN": "bot-token", "TEST_DISCORD_APP": "app-1"}, clear=False):
            health = build_gateway_health(config)
            identify = build_gateway_identify_payload(config, token="bot-token")

        self.assertEqual(health["status"], "ok")
        self.assertTrue(health["configured"]["token"])
        self.assertNotIn("bot-token", json.dumps(health))
        self.assertEqual(identify["op"], 2)
        self.assertEqual(identify["d"]["token"], "bot-token")

    def test_parse_gateway_payload_summarizes_shape(self) -> None:
        parsed = parse_gateway_payload({"op": 0, "t": "READY", "s": 1, "d": {"type": 2, "token": "secret"}})

        self.assertTrue(parsed["ok"])
        self.assertEqual(parsed["event"], "READY")
        self.assertEqual(parsed["sequence"], 1)
        self.assertNotIn("secret", json.dumps(parsed))

    async def test_gateway_inline_and_deferred_interaction_flow(self) -> None:
        async def status_handler(**_kwargs):
            return {"reply": "status ok"}

        async def force_handler(**_kwargs):
            return {"reply": "force ok"}

        runtime = BotRuntime(
            gateway_config(),
            BotRuntimeHandlers(status=status_handler, force_check=force_handler),
            runtime_base_dir=None,
        )
        messages = [
            {"op": OP_HELLO, "d": {"heartbeat_interval": 999999}},
            {"op": OP_DISPATCH, "t": "READY", "s": 1, "d": {"session_id": "sid"}},
            {"op": OP_DISPATCH, "t": "INTERACTION_CREATE", "s": 2, "d": interaction("status", interaction_id="status-1")},
            {"op": OP_DISPATCH, "t": "INTERACTION_CREATE", "s": 3, "d": interaction("force", interaction_id="force-1")},
            {"op": 7, "d": None},
        ]
        ws = FakeWebSocket(messages)
        sent_interactions = []

        async def fake_sender(**kwargs):
            sent_interactions.append(kwargs)
            return {"ok": True}

        with patch.dict("os.environ", {"TEST_DISCORD_TOKEN": "bot-token", "TEST_DISCORD_APP": "app-1"}, clear=False):
            report = await run_discord_gateway(
                gateway_config(),
                runtime,
                session_factory=lambda: FakeSession(ws),
                interaction_sender=fake_sender,
            )

        self.assertEqual(report["status"], "stopped")
        self.assertEqual(ws.sent[0]["op"], 2)
        self.assertEqual(sent_interactions[0]["endpoint"], "callback")
        self.assertEqual(sent_interactions[0]["response"]["type"], 4)
        self.assertEqual(sent_interactions[1]["response"]["type"], 5)
        self.assertEqual(sent_interactions[2]["endpoint"], "edit_original")

    async def test_gateway_modal_interaction_returns_modal_response(self) -> None:
        runtime = BotRuntime(gateway_config(), BotRuntimeHandlers(), runtime_base_dir=None)
        ws = FakeWebSocket(
            [
                {"op": OP_HELLO, "d": {"heartbeat_interval": 999999}},
                {"op": OP_DISPATCH, "t": "INTERACTION_CREATE", "s": 1, "d": interaction("qr_all_modal")},
                {"op": 7, "d": None},
            ]
        )
        sent_interactions = []

        with patch.dict("os.environ", {"TEST_DISCORD_TOKEN": "bot-token", "TEST_DISCORD_APP": "app-1"}, clear=False):
            await run_discord_gateway(
                gateway_config(),
                runtime,
                session_factory=lambda: FakeSession(ws),
                interaction_sender=lambda **kwargs: sent_interactions.append(kwargs),
            )

        self.assertEqual(sent_interactions[0]["response"]["type"], 9)


if __name__ == "__main__":
    unittest.main()

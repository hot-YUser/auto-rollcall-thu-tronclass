import shutil
import unittest
import uuid
from pathlib import Path
from unittest.mock import AsyncMock

from troTHU import tron
from troTHU.account_runtime_store import load_runtime_state
from troTHU.adapter_bridge import ControlCommand, binding_key, map_adapter_command
from troTHU.bot_runtime import BotRuntime, BotRuntimeHandlers


TEST_WORKSPACE_DIR = Path(__file__).resolve().parents[1]


def make_workspace_temp_dir() -> Path:
    root = TEST_WORKSPACE_DIR / ".tmp-tests"
    root.mkdir(exist_ok=True)
    path = root / uuid.uuid4().hex
    path.mkdir()
    return path


def make_config():
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
        runtime = BotRuntime(make_config())

        result = await runtime.handle_text("hello", adapter="discord", source_user_id="u1")

        self.assertFalse(result.ok)
        self.assertEqual(result.action, "unknown")

    async def test_unbound_user_is_rejected(self) -> None:
        runtime = BotRuntime(make_config())

        result = await runtime.handle_text(
            "status",
            adapter="discord",
            source_user_id="stranger",
            channel_id="chan-1",
        )

        self.assertFalse(result.ok)
        self.assertEqual(result.data["binding_status"], "not_bound")

    async def test_channel_mismatch_is_rejected_for_bound_user(self) -> None:
        runtime = BotRuntime(make_config())

        result = await runtime.handle_text(
            "status",
            adapter="discord",
            source_user_id="u1",
            channel_id="other-channel",
        )

        self.assertFalse(result.ok)
        self.assertEqual(result.data["binding_status"], "channel_mismatch")

    async def test_bound_user_can_start_stop_and_check_status(self) -> None:
        runtime = BotRuntime(make_config())

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
            runtime = BotRuntime(make_config(), runtime_base_dir=temp_dir)
            start = await runtime.handle_text("start", adapter="discord", source_user_id="u1", channel_id="chan-1")

            restored = BotRuntime(make_config(), runtime_base_dir=temp_dir)
            running = await restored.handle_text("status", adapter="discord", source_user_id="u1", channel_id="chan-1")
            stop = await restored.handle_text("stop", adapter="discord", source_user_id="u1", channel_id="chan-1")
            stopped = BotRuntime(make_config(), runtime_base_dir=temp_dir)

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
            make_config(),
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
        runtime = BotRuntime(make_config())

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
        runtime = BotRuntime(make_config())

        result = await runtime.handle_text(
            "status alt",
            adapter="discord",
            source_user_id="u1",
            channel_id="chan-1",
        )

        self.assertFalse(result.ok)
        self.assertEqual(result.data["authz_status"], "profile_mismatch")

    async def test_admin_can_control_specific_profile_from_text(self) -> None:
        runtime = BotRuntime(make_config())

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
        config = make_config()
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
            make_config(),
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
            make_config(),
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
        runtime = BotRuntime(make_config(), BotRuntimeHandlers(reauth=reauth))

        result = await runtime.handle_text("reauth", adapter="discord", source_user_id="u1", channel_id="chan-1")

        self.assertTrue(result.ok)
        self.assertEqual(result.action, "reauth")
        self.assertEqual(result.profile, "default")
        reauth.assert_awaited_once()

    async def test_qr_payload_dispatches_to_handler(self) -> None:
        qr_submit = AsyncMock(return_value={"message": "qr accepted"})
        runtime = BotRuntime(make_config(), BotRuntimeHandlers(qr_submit=qr_submit))

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
        runtime = BotRuntime(make_config(), BotRuntimeHandlers(qr_submit=AsyncMock()))

        result = await runtime.handle_text(
            "qr all payload-data",
            adapter="line",
            source_user_id="line-user",
        )

        self.assertFalse(result.ok)
        self.assertIn("admin", result.reply.lower())

    async def test_admin_can_dispatch_qr_all_without_binding(self) -> None:
        qr_submit = AsyncMock(return_value={"ok": True, "status": "submitted", "match_count": 2})
        runtime = BotRuntime(make_config(), BotRuntimeHandlers(qr_submit=qr_submit))

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
        runtime = BotRuntime(make_config())

        result = await runtime.handle_text("qr", adapter="discord", source_user_id="u1", channel_id="chan-1")

        self.assertFalse(result.ok)
        self.assertIn("required", result.reply)

    async def test_accounts_requires_binding_and_limits_regular_user_visibility(self) -> None:
        runtime = BotRuntime(make_config())

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
        runtime = BotRuntime(make_config(), BotRuntimeHandlers(accounts=accounts))

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

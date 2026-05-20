import copy
import json
import shutil
import unittest
import uuid
from pathlib import Path
from unittest.mock import AsyncMock, patch

try:
    import aiohttp
    from aiohttp import web
except (ImportError, ModuleNotFoundError):
    aiohttp = None
    web = None

from tests.fake_tron_server import FakeTronServer
from troTHU import tron
from troTHU.account_runtime_store import load_runtime_state
from troTHU.account_store import cookie_path
from troTHU.adapter_bridge import binding_key
from troTHU.bot_handlers import create_bot_runtime
from troTHU.pending_qr import add_pending_qr, list_pending_qr


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
        self.temp_dir = make_workspace_temp_dir()
        tron.BASE_DIR = self.temp_dir
        tron.PATH = self.temp_dir / "log"
        tron.CONFIG.clear()
        tron.CONFIG.update(make_config())
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

    async def test_audit_handler_writes_sanitized_log_record(self) -> None:
        runtime = self.runtime()

        result = await runtime.handle_text(
            "qr all secret-payload",
            adapter="discord",
            source_user_id="discord-user",
            channel_id="chan-1",
        )

        self.assertFalse(result.ok)
        records = []
        for path in (self.temp_dir / "log").rglob("*.jsonl"):
            for line in path.read_text(encoding="utf-8").splitlines():
                records.append(json.loads(line))
        audit_records = [record for record in records if record.get("event") == "bot_command_audit"]

        self.assertTrue(audit_records)
        self.assertNotIn("secret-payload", json.dumps(audit_records, ensure_ascii=False))
        payload_excerpt = json.loads(audit_records[-1]["payload_excerpt"])
        self.assertEqual(payload_excerpt["action"], "qr-submit")

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

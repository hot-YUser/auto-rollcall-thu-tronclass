import copy
import json
import shutil
import tempfile
import unittest
from pathlib import Path
from unittest.mock import AsyncMock, patch, MagicMock

try:
    import aiohttp
    from aiohttp import web
except (ImportError, ModuleNotFoundError):
    aiohttp = None
    web = None

from troTHU import tron, tron_http, runtime_context
from tests.fake_tron_server import FakeTronServer


def make_config():
    simple = {
        "now": "class A",
        "accounts": [
            {"user": "user1", "passwd": "pass1", "school": "thu"},
            {"user": "user2", "passwd": "pass1", "school": "thu"},
            {"user": "user3", "passwd": "pass3", "school": "tku"},
            {"user": "user4", "passwd": "", "school": "thu"},
        ],
        "groups": [{"class": "A", "school": "thu", "users": ["user1", "user2", "user3", "user4"]}],
        "operating": {},
    }
    return tron.normalize_config(tron.merge_basic_and_advanced_config(simple, {}))


class GroupRuntimeTest(unittest.TestCase):
    def test_resolve_now_class_and_execution_plan(self) -> None:
        config = make_config()
        target = tron.resolve_now_target(config)
        plan = tron.build_group_execution_plan(config, target)

        self.assertEqual(target["kind"], "group")
        self.assertEqual(plan["monitor_user"], "user1")
        self.assertEqual([item["user"] for item in plan["accounts"]], ["user1", "user2"])
        self.assertTrue(any(item["reason"] == "school_mismatch" for item in plan["skipped"]))
        self.assertTrue(any(item["reason"] == "missing_password" for item in plan["skipped"]))
        encoded = json.dumps(plan, ensure_ascii=False)
        self.assertNotIn("pass1", encoded)
        self.assertNotIn("pass2", encoded)

    def test_resolve_blank_now_infers_single_account(self) -> None:
        simple = {
            "now": "",
            "accounts": [{"user": "ONLY", "passwd": "PASS", "school": "fju"}],
            "groups": [],
            "operating": {},
        }
        config = tron.normalize_config(tron.merge_basic_and_advanced_config(simple, {}))
        target = tron.resolve_now_target(config)

        self.assertTrue(target["ok"])
        self.assertTrue(target["inferred"])
        self.assertEqual(target["user"], "ONLY")
        self.assertEqual(target["school"], "fju")


class GroupDisplayTest(unittest.TestCase):
    def test_summarize_and_describe_group(self) -> None:
        config = make_config()
        summary = tron.summarize_group_target(config)
        self.assertEqual(summary["kind"], "group")
        self.assertTrue(summary["ok"])
        self.assertEqual(summary["name"], "A")
        self.assertEqual(summary["members"], ["user1", "user2"])
        self.assertEqual(summary["monitor_user"], "user1")
        self.assertEqual(summary["fanout_count"], 2)
        self.assertEqual(len(summary["skipped"]), 2)

        describe = tron.describe_group_target(config)
        self.assertIn("群組 A", describe)
        self.assertIn("成員 2 人", describe)
        self.assertIn("user1", describe)
        self.assertIn("user2", describe)
        self.assertIn("略過 2 人", describe)

        self.assertEqual(tron.group_status_label(config), "群組A")
        # Passwords must never leak into display strings.
        self.assertNotIn("pass1", describe)
        self.assertNotIn("pass1", json.dumps(summary, ensure_ascii=False))

    def test_describe_account_explicit_and_inferred(self) -> None:
        explicit = tron.normalize_config(tron.merge_basic_and_advanced_config({
            "now": "user1",
            "accounts": [
                {"user": "user1", "passwd": "pass1", "school": "thu"},
                {"user": "user2", "passwd": "pass1", "school": "thu"},
            ],
            "groups": [],
            "operating": {},
        }, {}))
        self.assertEqual(tron.summarize_group_target(explicit)["kind"], "account")
        self.assertIn("帳號 user1", tron.describe_group_target(explicit))
        self.assertEqual(tron.group_status_label(explicit), "帳號user1")

        inferred = tron.normalize_config(tron.merge_basic_and_advanced_config({
            "now": "",
            "accounts": [{"user": "ONLY", "passwd": "PASS", "school": "fju"}],
            "groups": [],
            "operating": {},
        }, {}))
        self.assertIn("自動推斷", tron.describe_group_target(inferred))
        # Inferred single account is not labelled on the live status line.
        self.assertEqual(tron.group_status_label(inferred), "")

    def test_describe_invalid_targets(self) -> None:
        missing_group = tron.normalize_config(tron.merge_basic_and_advanced_config({
            "now": "class Z",
            "accounts": [{"user": "user1", "passwd": "pass1", "school": "thu"}],
            "groups": [{"class": "A", "school": "thu", "users": ["user1"]}],
            "operating": {},
        }, {}))
        self.assertFalse(tron.summarize_group_target(missing_group)["ok"])
        self.assertIn("群組 Z 不存在", tron.describe_group_target(missing_group))
        self.assertEqual(tron.group_status_label(missing_group), "")

        empty_now = tron.normalize_config(tron.merge_basic_and_advanced_config({
            "now": "",
            "accounts": [
                {"user": "user1", "passwd": "pass1", "school": "thu"},
                {"user": "user2", "passwd": "pass1", "school": "thu"},
            ],
            "groups": [],
            "operating": {},
        }, {}))
        self.assertIn("now 為空", tron.describe_group_target(empty_now))

    def test_format_group_fanout_summary(self) -> None:
        ok_result = {
            "plan": {"target": {"kind": "group", "name": "A"}},
            "results": [{"user": "user2", "ok": True}, {"user": "user5", "ok": True}],
        }
        self.assertEqual(
            tron.format_group_fanout_summary(ok_result, rollcall_type="number"),
            "群組 A number 簽到：2/2 成員完成",
        )

        partial = {
            "plan": {"target": {"kind": "group", "name": "A"}},
            "results": [{"user": "user2", "ok": True}, {"user": "user5", "ok": False}],
        }
        self.assertEqual(
            tron.format_group_fanout_summary(partial, rollcall_type="radar"),
            "群組 A radar 簽到：1/2 成員完成（1 失敗）",
        )

        # Single-account targets and empty fan-out stay silent.
        account_result = {"plan": {"target": {"kind": "account"}}, "results": [{"user": "u", "ok": True}]}
        self.assertEqual(tron.format_group_fanout_summary(account_result, rollcall_type="number"), "")
        no_members = {"plan": {"target": {"kind": "group", "name": "A"}}, "results": []}
        self.assertEqual(tron.format_group_fanout_summary(no_members, rollcall_type="number"), "")


@unittest.skipUnless(aiohttp is not None and web is not None, "aiohttp.web is required")
class GroupRuntimeIntegrationTest(unittest.IsolatedAsyncioTestCase):
    async def asyncSetUp(self) -> None:
        self.original_config = copy.deepcopy(tron.CONFIG)
        self.original_base_dir = tron.BASE_DIR
        self.original_ctx_base_dir = runtime_context.BASE_DIR
        self.base_dir = Path(tempfile.mkdtemp())
        tron.BASE_DIR = self.base_dir
        runtime_context.BASE_DIR = self.base_dir
        
        # Patch submit_login to accept user1 and user2 with pass1
        async def custom_submit_login(server_self, request):
            data = await request.post()
            username = data.get("username")
            password = data.get("password")
            if username in ("user1", "user2", "user5") and password == "pass1":
                response = web.HTTPFound("/home")
                response.set_cookie("session", server_self.session_cookie)
                raise response
            return web.Response(text="bad credentials", status=200)

        self.login_patcher = patch.object(FakeTronServer, "submit_login", custom_submit_login)
        self.login_patcher.start()

        self.fake_server = FakeTronServer()
        await self.fake_server.start()
        self.url_patch = self.fake_server.patch_tron_http_urls(tron_http)
        self.url_patch.__enter__()

    async def asyncTearDown(self) -> None:
        self.login_patcher.stop()
        tron.CONFIG.clear()
        tron.CONFIG.update(copy.deepcopy(self.original_config))
        tron.BASE_DIR = self.original_base_dir
        runtime_context.BASE_DIR = self.original_ctx_base_dir
        self.url_patch.__exit__(None, None, None)
        await self.fake_server.close()
        shutil.rmtree(self.base_dir, ignore_errors=True)

    async def test_group_submit_helpers_fanout_e2e(self) -> None:
        # Load the configuration with group class A
        config = make_config()
        tron.CONFIG.clear()
        tron.CONFIG.update(config)

        # 1. Test submit_group_number
        self.fake_server.correct_number_code = "1234"
        self.fake_server.rollcalls = [{"is_number": True, "rollcall_id": 42}]
        self.fake_server.student_rollcalls = [
            {"student_id": 1, "user_no": "user2", "status": "pending", "rollcall_status": "on_call"}
        ]

        async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
            tron.switch_profile(tron.CONFIG, "user1")
            result = await tron.submit_group_number("1234", rcid=42, session=session, config=tron.CONFIG)

        self.assertTrue(result["ok"])
        self.assertEqual(result["status"], "submitted")
        self.assertEqual(result["count"], 1)
        self.assertEqual(result["results"][0]["user"], "user2")
        self.assertEqual(result["results"][0]["ok"], True)
        self.assertEqual(result["results"][0]["status"], "submitted")
        
        encoded = json.dumps(result, ensure_ascii=False)
        self.assertNotIn("pass1", encoded)
        self.assertNotIn("1234", encoded)

        # 2. Test submit_group_radar
        self.fake_server.rollcalls = [{"is_radar": True, "rollcall_id": 43}]
        self.fake_server.student_rollcalls = [
            {"student_id": 1, "user_no": "user2", "status": "pending", "rollcall_status": "on_call"}
        ]
        self.fake_server.radar_empty_answer_accepted = True
        self.fake_server.radar_empty_answer_marks_present = True

        async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
            tron.switch_profile(tron.CONFIG, "user1")
            result = await tron.submit_group_radar({"rollcall_id": 43}, session=session, config=tron.CONFIG)

        self.assertTrue(result["ok"])
        self.assertEqual(result["status"], "submitted")
        self.assertEqual(result["count"], 1)
        self.assertEqual(result["results"][0]["user"], "user2")
        self.assertEqual(result["results"][0]["ok"], True)
        self.assertEqual(result["results"][0]["status"], "submitted")

        # 3. Test submit_group_qr (Teacher assist mode)
        self.fake_server.rollcalls = [{"is_qrcode": True, "rollcall_id": 44, "type": "qrcode"}]
        self.fake_server.student_rollcalls = [
            {"student_id": 1, "user_no": "user2", "status": "pending", "rollcall_status": "on_call"}
        ]

        async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
            tron.switch_profile(tron.CONFIG, "user1")
            # Mock teacher assist QR call to return success
            with patch.object(tron, "submit_prepared_teacher_qr", AsyncMock(return_value=True)), \
                 patch.object(tron, "teacher_assist_configured", return_value=True):
                result = await tron.submit_group_qr({"rollcall_id": 44}, session=session, config=tron.CONFIG)

        self.assertTrue(result["ok"])
        self.assertEqual(result["status"], "submitted")
        self.assertEqual(result["count"], 1)
        self.assertEqual(result["results"][0]["user"], "user2")
        self.assertEqual(result["results"][0]["ok"], True)

        # 4. Test submit_group_qr (Clipboard fallback mode)
        self.fake_server.rollcalls = [{"is_qrcode": True, "rollcall_id": 45, "type": "qrcode"}]
        self.fake_server.student_rollcalls = [
            {"student_id": 1, "user_no": "user2", "status": "pending", "rollcall_status": "on_call"}
        ]

        # Mock clipboard helpers
        mock_qr_data = MagicMock()
        mock_qr_data.rollcall_id = "45"

        async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
            tron.switch_profile(tron.CONFIG, "user1")
            with patch.object(tron, "submit_qr_payload", AsyncMock(return_value=True)) as submit_qr_mock, \
                 patch.object(tron, "clipboard_autosubmit_enabled", return_value=True), \
                 patch.object(tron, "read_clipboard_qr_payload", return_value={"ok": True, "payload": "payload-data"}), \
                 patch.object(tron, "parse_qr_payload", return_value=mock_qr_data):
                result = await tron.submit_group_qr({"rollcall_id": 45}, session=session, config=tron.CONFIG)
                submit_qr_mock.assert_awaited_once()

        self.assertTrue(result["ok"])
        self.assertEqual(result["status"], "submitted")
        self.assertEqual(result["count"], 1)
        self.assertEqual(result["results"][0]["user"], "user2")
        self.assertEqual(result["results"][0]["ok"], True)

    async def test_group_number_fanout_covers_multiple_members(self) -> None:
        # Regression: a group with TWO valid fan-out members must sign BOTH in.
        # The old _fanout shared one connector + one cookie jar across member
        # sessions, so the 2nd member died with "Session is closed" (and would
        # otherwise have signed in as the 1st member). Each member must get its
        # own session.
        simple = {
            "now": "class A",
            "accounts": [
                {"user": "user1", "passwd": "pass1", "school": "thu"},
                {"user": "user2", "passwd": "pass1", "school": "thu"},
                {"user": "user5", "passwd": "pass1", "school": "thu"},
            ],
            "groups": [{"class": "A", "school": "thu", "users": ["user1", "user2", "user5"]}],
            "operating": {},
        }
        config = tron.normalize_config(tron.merge_basic_and_advanced_config(simple, {}))
        tron.CONFIG.clear()
        tron.CONFIG.update(config)

        self.fake_server.correct_number_code = "1234"
        self.fake_server.student_rollcalls = [
            {"student_id": 1, "user_no": "user2", "status": "pending", "rollcall_status": "on_call"},
            {"student_id": 2, "user_no": "user5", "status": "pending", "rollcall_status": "on_call"},
        ]

        async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
            tron.switch_profile(tron.CONFIG, "user1")
            result = await tron.submit_group_number("1234", rcid=42, session=session, config=tron.CONFIG)

        self.assertEqual(result["count"], 2)
        self.assertEqual({item["user"] for item in result["results"]}, {"user2", "user5"})
        for item in result["results"]:
            self.assertTrue(item["ok"], item)
            self.assertEqual(item["status"], "submitted", item)
        self.assertTrue(result["ok"])
        self.assertEqual(result["status"], "submitted")
        # The active profile is restored to the monitor account after fan-out.
        self.assertEqual(tron.get_active_profile(tron.CONFIG).name, "user1")


if __name__ == "__main__":
    unittest.main()

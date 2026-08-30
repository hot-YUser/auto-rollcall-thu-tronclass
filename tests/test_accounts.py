from __future__ import annotations

import json
import shutil
import unittest
import uuid
import tempfile
import copy
from pathlib import Path
from troTHU.account_runtime_store import AccountRuntimeSnapshot, load_runtime_state, mark_bot_state, mark_check_result, mark_login_result, mark_monitor_state, mark_profile_error, runtime_profile_summary, runtime_state_path, save_runtime_state, update_profile_runtime_state
from troTHU.account_store import save_session_cookies, load_session_cookies, cookie_cache_status, cookie_path
from http.cookies import SimpleCookie
from unittest.mock import AsyncMock, patch
from troTHU import tron, tron_http, runtime_context
from tests.fake_tron_server import FakeTronServer
from troTHU.input_safety import masked_password_input, sanitize_config_values, sanitize_input_field


# --- merged from tests/test_account_runtime_store.py ---
TEST_WORKSPACE_DIR = Path(__file__).resolve().parents[1]


def make_workspace_temp_dir() -> Path:
    root = TEST_WORKSPACE_DIR / ".tmp-tests"
    root.mkdir(exist_ok=True)
    path = root / uuid.uuid4().hex
    path.mkdir()
    return path


class DummyLoginResult:
    status = "success"
    credential_source = "config"
    ok = True
    should_auto_retry = False


class AccountRuntimeStoreTest(unittest.TestCase):
    def setUp(self) -> None:
        self.temp_dir = make_workspace_temp_dir()

    def tearDown(self) -> None:
        shutil.rmtree(self.temp_dir, ignore_errors=True)

    def test_missing_and_corrupt_state_return_safe_empty_snapshot(self) -> None:
        missing = load_runtime_state(self.temp_dir)
        self.assertEqual(missing.store_status, "missing")
        self.assertEqual(missing.profiles, {})

        path = runtime_state_path(self.temp_dir)
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text("{broken", encoding="utf-8")

        corrupt = load_runtime_state(self.temp_dir)
        self.assertEqual(corrupt.store_status, "corrupt")
        self.assertEqual(corrupt.profiles, {})

    def test_save_load_round_trip_and_atomic_shape(self) -> None:
        snapshot = AccountRuntimeSnapshot(
            profiles={
                "default": {
                    "bot_state": "running",
                    "monitor_state": "stopped",
                }
            }
        )

        save_runtime_state(self.temp_dir, snapshot)
        loaded = load_runtime_state(self.temp_dir)

        self.assertEqual(loaded.store_status, "ok")
        self.assertEqual(loaded.profiles["default"]["bot_state"], "running")
        self.assertFalse(runtime_state_path(self.temp_dir).with_suffix(".json.tmp").exists())

    def test_mark_helpers_update_profile_summary(self) -> None:
        mark_bot_state(self.temp_dir, "default", "running")
        mark_monitor_state(self.temp_dir, "default", "running")
        mark_login_result(self.temp_dir, "default", DummyLoginResult())
        mark_check_result(self.temp_dir, "default", "not_call", rollcall_id=12, rollcall_type="number")
        mark_profile_error(self.temp_dir, "default", "network_error", "timeout")

        summary = runtime_profile_summary(load_runtime_state(self.temp_dir), "default")

        self.assertEqual(summary["bot_state"], "running")
        self.assertEqual(summary["monitor_state"], "running")
        self.assertEqual(summary["last_login"]["status"], "success")
        self.assertEqual(summary["last_check"]["rollcall_id"], "12")
        self.assertEqual(summary["last_error"]["status"], "network_error")

    def test_sensitive_fields_are_sanitized_before_write(self) -> None:
        update_profile_runtime_state(
            self.temp_dir,
            "default",
            password="plain-password",
            token="secret-token",
            cookie_value="session-cookie",
            qr_payload='{"rollcallId":88,"data":"secret"}',
            last_error={"message": "password=plain-password token=secret-token"},
        )

        raw = runtime_state_path(self.temp_dir).read_text(encoding="utf-8")
        data = json.loads(raw)

        self.assertNotIn("plain-password", raw)
        self.assertNotIn("secret-token", raw)
        self.assertNotIn("session-cookie", raw)
        self.assertNotIn("rollcallId", raw)
        self.assertEqual(data["profiles"]["default"]["password"], "[redacted]")


# --- merged from tests/test_account_store_cookies.py ---
class FakeCookie:
    def __init__(self, key, value, domain="", path="/", expires=None, secure=False, httponly=False, samesite=""):
        self.key = key
        self.value = value
        self.domain = domain
        self.path = path
        self.expires = expires
        self.secure = secure
        self.httponly = httponly
        self.samesite = samesite

    def get(self, attr, default=None):
        if attr == "max-age":
            return getattr(self, "max_age", default)
        return getattr(self, attr, default)

class FakeCookieJar:
    def __init__(self):
        self.cookies = []

    def __iter__(self):
        return iter(self.cookies)

    def update_cookies(self, cookies, response_url=None):
        if isinstance(cookies, SimpleCookie):
            for key, morsel in cookies.items():
                c = FakeCookie(
                    key=morsel.value,
                    value=morsel.value,
                    domain=morsel["domain"],
                    path=morsel["path"],
                    expires=morsel["expires"],
                    secure=bool(morsel["secure"]),
                    httponly=bool(morsel["httponly"]),
                    samesite=morsel["samesite"],
                )
                c.key = morsel.key
                self.cookies.append(c)
        elif isinstance(cookies, dict):
            for k, v in cookies.items():
                self.cookies.append(FakeCookie(k, v))

    def clear(self):
        self.cookies.clear()

class FakeSession:
    def __init__(self):
        self.cookie_jar = FakeCookieJar()

class AccountStoreCookiesTest(unittest.TestCase):
    def test_cookies_v2_round_trip(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            base_dir = Path(temp_dir)
            session = FakeSession()
            cookie1 = FakeCookie("session", "my_session_id", domain=".example.com", path="/")
            cookie1.max_age = "100000"
            session.cookie_jar.cookies.append(cookie1)
            
            save_session_cookies(session, base_dir, "test_profile")
            
            session2 = FakeSession()
            load_session_cookies(session2, base_dir, "test_profile")
            
            self.assertEqual(len(session2.cookie_jar.cookies), 1)
            loaded = session2.cookie_jar.cookies[0]
            self.assertEqual(loaded.key, "session")
            self.assertEqual(loaded.value, "my_session_id")
            self.assertEqual(loaded.domain, ".example.com")
            
            status = cookie_cache_status(base_dir, "test_profile")
            self.assertTrue(status["restored"])
            self.assertTrue(status["has_session"])
            self.assertFalse(status["expired"])
            self.assertFalse(status["near_expiry"])
            self.assertIsNotNone(status["expires_at"])

    def test_load_legacy_bare_list(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            base_dir = Path(temp_dir)
            legacy_data = [
                {
                    "key": "session",
                    "value": "legacy_val",
                    "domain": ".example.com",
                    "path": "/login"
                }
            ]
            path = cookie_path(base_dir, "test_profile")
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_text(json.dumps(legacy_data), encoding="utf-8")
            
            session = FakeSession()
            load_session_cookies(session, base_dir, "test_profile")
            
            self.assertEqual(len(session.cookie_jar.cookies), 1)
            loaded = session.cookie_jar.cookies[0]
            self.assertEqual(loaded.key, "session")
            self.assertEqual(loaded.value, "legacy_val")
            self.assertEqual(loaded.domain, ".example.com")
            self.assertEqual(loaded.path, "/login")
            
            status = cookie_cache_status(base_dir, "test_profile")
            self.assertTrue(status["restored"])
            self.assertTrue(status["has_session"])
            self.assertFalse(status["expired"])
            self.assertFalse(status["near_expiry"])
            self.assertIsNone(status["expires_at"])


# --- merged from tests/test_group_runtime.py ---
try:
    import aiohttp
    from aiohttp import web
except (ImportError, ModuleNotFoundError):
    aiohttp = None
    web = None



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
    def test_refresh_monitor_identity_only_follows_official_config(self) -> None:
        config = make_config()
        identity = {"profile_name": "old", "user_no": "old-user", "provider_key": "old"}
        tron.refresh_monitor_identity(identity, config)
        active = tron.get_active_profile(config)
        self.assertEqual(identity["profile_name"], active.name)
        self.assertEqual(identity["user_no"], active.user)
        self.assertEqual(identity["provider_key"], config["provider"]["current"])

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

    def test_describe_url_now_is_manual_login(self) -> None:
        # Regression: now = a bare URL must read as manual browser login, NOT
        # as a phantom missing account ("帳號 <URL> 不存在於設定").
        config = tron.normalize_config(tron.merge_basic_and_advanced_config({
            "now": "https://ilearn.thu.edu.tw/user/index",
            "accounts": [],
            "groups": [],
            "operating": {},
        }, {}))
        target = tron.resolve_now_target(config)
        self.assertTrue(target["ok"])
        self.assertEqual(target["kind"], "url")

        summary = tron.summarize_group_target(config)
        self.assertEqual(summary["kind"], "url")

        describe = tron.describe_group_target(config)
        self.assertIn("手動瀏覽器登入", describe)
        self.assertNotIn("不存在於設定", describe)
        self.assertEqual(tron.group_status_label(config), "手動登入")

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
        self.original_completed_number = copy.deepcopy(tron.COMPLETED_NUMBER_ROLLCALLS)
        self.original_completed_radar = copy.deepcopy(tron.COMPLETED_RADAR_ROLLCALLS)
        self.original_completed_self_registration = copy.deepcopy(tron.COMPLETED_SELF_REGISTRATION_ROLLCALLS)
        self.original_completed_qr = copy.deepcopy(tron.COMPLETED_QR_ROLLCALLS)
        tron.COMPLETED_NUMBER_ROLLCALLS.clear()
        tron.COMPLETED_RADAR_ROLLCALLS.clear()
        tron.COMPLETED_SELF_REGISTRATION_ROLLCALLS.clear()
        tron.COMPLETED_QR_ROLLCALLS.clear()
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
        tron.COMPLETED_NUMBER_ROLLCALLS.clear()
        tron.COMPLETED_NUMBER_ROLLCALLS.update(self.original_completed_number)
        tron.COMPLETED_RADAR_ROLLCALLS.clear()
        tron.COMPLETED_RADAR_ROLLCALLS.update(self.original_completed_radar)
        tron.COMPLETED_SELF_REGISTRATION_ROLLCALLS.clear()
        tron.COMPLETED_SELF_REGISTRATION_ROLLCALLS.update(self.original_completed_self_registration)
        tron.COMPLETED_QR_ROLLCALLS.clear()
        tron.COMPLETED_QR_ROLLCALLS.update(self.original_completed_qr)
        tron.BASE_DIR = self.original_base_dir
        runtime_context.BASE_DIR = self.original_ctx_base_dir
        self.url_patch.__exit__(None, None, None)
        await self.fake_server.close()
        shutil.rmtree(self.base_dir, ignore_errors=True)

    def _with_fake_provider(self, config):
        config["provider"] = tron.normalize_provider_config(
            {
                "current": tron.DEFAULT_PROVIDER,
                "available": {
                    tron.DEFAULT_PROVIDER: {
                        "base_url": self.fake_server.base_url,
                        "login_url": self.fake_server.login_url,
                    }
                },
            }
        )
        return config

    async def test_group_submit_helpers_fanout_e2e(self) -> None:
        # Load the configuration with group class A
        config = self._with_fake_provider(make_config())
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
        self.assertTrue(tron.is_completed_number_rollcall(42, profile_name="user2"))

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
        self.assertTrue(tron.is_completed_radar_rollcall(43, profile_name="user2"))

        # 3. Test submit_group_self_registration
        self.fake_server.rollcalls = [{"type": "self_registration", "rollcall_id": 430}]
        self.fake_server.student_rollcalls = [
            {"student_id": 1, "user_no": "user2", "status": "pending", "rollcall_status": "on_call"}
        ]
        async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
            tron.switch_profile(tron.CONFIG, "user1")
            result = await tron.submit_group_self_registration(
                {"rollcall_id": 430}, session=session, config=tron.CONFIG
            )
        self.assertTrue(result["ok"])
        self.assertEqual(result["count"], 1)
        self.assertEqual(result["results"][0]["status"], "submitted")
        self.assertTrue(
            tron.is_completed_self_registration_rollcall(430, profile_name="user2")
        )

        # 4. Test submit_group_qr (Teacher assist mode)
        self.fake_server.rollcalls = [{"is_qrcode": True, "rollcall_id": 44, "type": "qrcode"}]
        self.fake_server.student_rollcalls = [
            {"student_id": 1, "user_no": "user2", "status": "pending", "rollcall_status": "on_call"}
        ]
        # The monitor account is complete; member user2 must still execute its own submission.
        tron.mark_completed_qr_rollcall(44, profile_name="user1")

        async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
            tron.switch_profile(tron.CONFIG, "user1")
            with patch.object(tron, "submit_prepared_teacher_qr", AsyncMock(return_value=True)) as teacher_submit, \
                 patch.object(tron, "teacher_assist_configured", return_value=True), \
                 patch.object(tron, "qr_remote_configured", return_value=False):
                result = await tron.submit_group_qr({"rollcall_id": 44}, session=session, config=tron.CONFIG)

        self.assertTrue(result["ok"])
        self.assertEqual(result["status"], "submitted")
        self.assertEqual(result["count"], 1)
        self.assertEqual(result["results"][0]["user"], "user2")
        self.assertEqual(result["results"][0]["ok"], True)
        teacher_submit.assert_awaited_once()
        self.assertEqual(teacher_submit.await_args.kwargs["profile_name"], "user2")
        self.assertEqual(teacher_submit.await_args.kwargs["my_user_no"], "user2")

        # 5. No teacher and no remote source is an explicit failure, never a false-success skip.
        self.fake_server.rollcalls = [{"is_qrcode": True, "rollcall_id": 45, "type": "qrcode"}]

        async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
            tron.switch_profile(tron.CONFIG, "user1")
            with patch.object(tron, "submit_qr_payload", AsyncMock(return_value=True)) as submit_qr_mock, \
                 patch.object(tron, "teacher_assist_configured", return_value=False), \
                 patch.object(tron, "qr_remote_configured", return_value=False):
                result = await tron.submit_group_qr({"rollcall_id": 45}, session=session, config=tron.CONFIG)
                submit_qr_mock.assert_not_awaited()

        self.assertFalse(result["ok"])
        self.assertEqual(result["status"], "no_qr_source")
        self.assertEqual(result["count"], 0)

    async def test_group_qr_uses_remote_and_falls_back_after_teacher_failure(self) -> None:
        config = self._with_fake_provider(make_config())
        tron.CONFIG.clear()
        tron.CONFIG.update(config)
        self.fake_server.rollcalls = [{"is_qrcode": True, "rollcall_id": 46, "type": "qrcode"}]

        async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
            tron.switch_profile(tron.CONFIG, "user1")
            teacher_submit = AsyncMock(return_value=False)
            remote_submit = AsyncMock(return_value=True)
            with (
                patch.object(tron, "submit_prepared_teacher_qr", teacher_submit),
                patch.object(tron, "submit_remote_qr", remote_submit),
                patch.object(tron, "teacher_assist_configured", return_value=True),
                patch.object(tron, "qr_remote_configured", return_value=True),
            ):
                result = await tron.submit_group_qr(
                    {"rollcall_id": 46},
                    session=session,
                    config=tron.CONFIG,
                )

        self.assertTrue(result["ok"])
        self.assertEqual(result["results"][0]["status"], "submitted_remote")
        teacher_submit.assert_awaited_once()
        remote_submit.assert_awaited_once()
        for mocked in (teacher_submit, remote_submit):
            self.assertEqual(mocked.await_args.kwargs["profile_name"], "user2")
            self.assertEqual(mocked.await_args.kwargs["my_user_no"], "user2")

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
        config = self._with_fake_provider(
            tron.normalize_config(tron.merge_basic_and_advanced_config(simple, {}))
        )
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


# --- merged from tests/test_input_safety.py ---
class InputSafetyTest(unittest.TestCase):
    def test_common_text_fields_trim_and_collapse_spaces(self) -> None:
        result = sanitize_input_field("  default   profile  ", field_type="profile", field_name="profile")
        self.assertEqual(result.value, "default profile")
        self.assertTrue(result.changed)
        self.assertTrue(result.valid)
        self.assertTrue(result.warnings)

    def test_password_and_token_trim_without_echoing_value(self) -> None:
        result = sanitize_input_field("  secret-value  ", field_type="password", field_name="password")
        self.assertEqual(result.value, "secret-value")
        self.assertEqual(result.reason, "sensitive")
        self.assertNotIn("secret-value", " ".join(result.warnings))
        self.assertEqual(result.to_dict()["value"], "[redacted]")

    def test_qr_payload_preserves_internal_whitespace(self) -> None:
        result = sanitize_input_field("  p=abc  def  ", field_type="qr_payload", field_name="qr")
        self.assertEqual(result.value, "p=abc  def")
        self.assertTrue(result.changed)

    def test_port_validation(self) -> None:
        self.assertTrue(sanitize_input_field(" 8787 ", field_type="port").valid)
        invalid = sanitize_input_field(" 99999 ", field_type="port")
        self.assertFalse(invalid.valid)
        self.assertEqual(invalid.reason, "invalid_port")

    def test_config_sanitizer_mutates_common_fields_safely(self) -> None:
        config = {
            "account": {"user": "  s123  ", "passwd": "  pw  "},
            "accounts": {
                "current": " default ",
                "profiles": {" default ": {"user": " u1 ", "passwd": " p1 ", "label": " main  account "}},
            },
            "provider": {"current": " THU "},
            "local_ui": {"host": " 127.0.0.1 ", "port": " 8765 "},
        }
        warnings = sanitize_config_values(config)
        self.assertEqual(config["account"]["user"], "s123")
        self.assertEqual(config["account"]["passwd"], "pw")
        self.assertIn("default", config["accounts"]["profiles"])
        self.assertEqual(config["provider"]["current"], "thu")
        self.assertTrue(warnings)
        self.assertNotIn(" p1 ", "\n".join(warnings))

    def test_masked_password_fallback_trims_without_logging_value(self) -> None:
        with (
            patch("sys.platform", "unknown-test-os"),
            patch("builtins.input", return_value="  secret  ") as input_mock,
        ):
            self.assertEqual(masked_password_input("pw> "), "secret")
        input_mock.assert_called_once_with("pw> ")

    def test_masked_password_pauses_status_line_while_reading(self) -> None:
        events = []

        class FakePause:
            def __enter__(self):
                events.append("enter")

            def __exit__(self, exc_type, exc, tb):
                events.append("exit")

        with (
            patch("troTHU.input_safety._optional_status_line_pause", return_value=FakePause()),
            patch("sys.platform", "unknown-test-os"),
            patch("builtins.input", return_value=" secret "),
        ):
            self.assertEqual(masked_password_input("pw> "), "secret")

        self.assertEqual(events, ["enter", "exit"])


if __name__ == "__main__":
    unittest.main()

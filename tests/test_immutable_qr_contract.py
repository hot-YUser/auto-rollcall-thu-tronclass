from __future__ import annotations

import copy
import tempfile
import unittest
from pathlib import Path
from unittest.mock import AsyncMock, patch

import troTHU.runtime_context as ctx
from troTHU import tron
from troTHU.pending_qr import add_pending_qr
from troTHU.bot_handlers import create_bot_runtime
from tests.fake_tron_server import FakeTronServer

try:
    import aiohttp
    from aiohttp import web
except (ImportError, ModuleNotFoundError):
    aiohttp = None
    web = None


class CallbackContractCountTest(unittest.IsolatedAsyncioTestCase):
    def setUp(self):
        self.orig_config = copy.deepcopy(ctx.CONFIG)
        self.orig_base = ctx.BASE_DIR
        self.tmp = tempfile.TemporaryDirectory()
        ctx.BASE_DIR = Path(self.tmp.name)
        ctx.CONFIG.clear()
        ctx.CONFIG.update(tron.normalize_config({
            "account": {"user": "u1", "passwd": "p1"},
            "accounts": {"current": "default", "profiles": {"default": {"user": "u1", "passwd": "p1", "label": ""}, "alt": {"user": "u2", "passwd": "p2", "label": ""}}},
        }))

    def tearDown(self):
        ctx.CONFIG.clear()
        ctx.CONFIG.update(self.orig_config)
        ctx.BASE_DIR = self.orig_base
        self.tmp.cleanup()

    async def test_submit_calls_exactly_once_and_none_maps_to_success(self):
        """回呼回 None 視為一次已完成呼叫，不重送，只計一次。"""
        payload = '{"rollcallId":77,"data":"d"}'
        add_pending_qr(ctx.BASE_DIR, profile="default", rollcall_id=77, provider="thu")
        calls = []

        async def legacy_two_arg(profile, raw_payload):
            calls.append((profile, raw_payload, "two"))
            return None

        result = await ctx.qr_fanout_result(payload, provider="thu", submit_profile=legacy_two_arg)
        self.assertEqual(len(calls), 1)
        self.assertEqual(result["status"], "submitted")
        self.assertTrue(result["ok"])
        self.assertEqual(result["results"][0]["ok"], True)

    async def test_internal_typeerror_not_treated_as_arity(self):
        """callback 內部 TypeError 不得被當成 arity 信號重試，應記為失敗且只呼叫一次。"""
        payload = '{"rollcallId":78,"data":"d"}'
        add_pending_qr(ctx.BASE_DIR, profile="default", rollcall_id=78, provider="thu")
        calls = []

        async def bad(profile, raw_payload, pending=None):
            calls.append(1)
            raise TypeError("internal business logic boom")

        result = await ctx.qr_fanout_result(payload, provider="thu", submit_profile=bad)
        self.assertEqual(len(calls), 1)
        self.assertEqual(result["status"], "partial_failed")
        self.assertFalse(result["ok"])
        self.assertEqual(result["results"][0]["status"], "failed")

    async def test_two_members_first_failure_partial_failed_not_abort(self):
        """兩成員、首位失敗，仍須執行第二位，彙總為 partial_failed 不中斷。"""
        payload = '{"rollcallId":79,"data":"d"}'
        add_pending_qr(ctx.BASE_DIR, profile="default", rollcall_id=79, provider="thu")
        add_pending_qr(ctx.BASE_DIR, profile="alt", rollcall_id=79, provider="thu")
        order = []

        async def submit_profile(profile, raw_payload, pending=None):
            order.append(profile)
            if profile == "default":
                return 1
            return 0

        result = await ctx.qr_fanout_result(payload, provider="thu", submit_profile=submit_profile)
        self.assertEqual(order, ["default", "alt"])
        self.assertEqual(result["status"], "partial_failed")
        self.assertFalse(result["ok"])
        self.assertEqual(len(result["results"]), 2)
        self.assertFalse(result["results"][0]["ok"])
        self.assertTrue(result["results"][1]["ok"])


@unittest.skipUnless(aiohttp is not None and web is not None, "aiohttp required")
class BotSingleImmutableTest(unittest.IsolatedAsyncioTestCase):
    async def asyncSetUp(self):
        self.orig_config = copy.deepcopy(tron.CONFIG)
        self.orig_base = tron.BASE_DIR
        self.orig_path = tron.PATH
        self.tmp = tempfile.TemporaryDirectory()
        tron.BASE_DIR = Path(self.tmp.name)
        tron.PATH = Path(self.tmp.name) / "log"
        tron.CONFIG.clear()
        tron.CONFIG.update(tron.normalize_config({
            "account": {"user": "user1", "passwd": "pass1"},
            "accounts": {"current": "default", "profiles": {"default": {"user": "user1", "passwd": "pass1", "label": "Primary"}, "alt": {"user": "user1", "passwd": "pass1", "label": "Alt"}}},
            "integrations": {"bindings": {}, "admins": {"discord": [], "line": []}},
            "config": {"enable_log": False},
        }))
        self.server = await FakeTronServer().start()
        self.server.rollcalls = [{"rollcall_id": "88", "type": "qr_rollcall"}]

    async def asyncTearDown(self):
        await self.server.close()
        tron.CONFIG.clear()
        tron.CONFIG.update(copy.deepcopy(self.orig_config))
        tron.BASE_DIR = self.orig_base
        tron.PATH = self.orig_path
        self.tmp.cleanup()

    async def test_single_qr_passes_explicit_endpoints_profile_provider(self):
        captured = {}

        orig_submit = tron.submit_qr_payload

        async def spy(session, raw_payload, **kwargs):
            captured.update(kwargs)
            # mutate global provider during await to prove immutability
            try:
                tron.CONFIG["provider"]["current"] = "thu"
            except Exception:
                pass
            return await orig_submit(session, raw_payload, **kwargs)

        for _k in ("thu", "fju", "tronclass"):
            tron.CONFIG["provider"]["available"][_k] = {"base_url": self.server.base_url, "login_url": self.server.base_url + "/login", "rollcalls_url": self.server.base_url + "/api/radar/rollcalls?api_version=1.1.0", "current_semester_url": self.server.base_url + "/api/current-semester-info", "courses_url": self.server.base_url + "/api/my-courses?page=1&page_size=50"}
        from troTHU.adapter_bridge import binding_key as _bk2
        tron.CONFIG.setdefault("integrations", {}).setdefault("bindings", {})[_bk2("line", "line-user-unbound-test")] = {"adapter": "line", "external_user_id": "line-user-unbound-test", "profile": "default", "channel_id": ""}
        runtime = create_bot_runtime(tron.CONFIG, base_dir=Path(self.tmp.name), session_factory=lambda: aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)))
        payload = '{"rollcallId":88,"data":"fixture"}'
        with patch.object(tron, "submit_qr_payload", side_effect=spy), \
             patch.object(tron, "log_print"), \
             patch.object(tron, "notify_event", AsyncMock()):
            _ = await runtime.handle_text("qr {}".format(payload), adapter="line", source_user_id="line-user-unbound-test", channel_id="")
            # handled via handle_text with binding, no fallback

        # endpoints/profile/provider 必須顯式傳遞且與假伺服器一致
        self.assertIn("endpoints", captured)
        self.assertEqual(captured.get("profile_name"), "default")
        self.assertTrue(captured.get("provider_key"))
        self.assertEqual(captured["endpoints"].base_url, self.server.base_url)


@unittest.skipUnless(aiohttp is not None and web is not None, "aiohttp required")
class GroupProviderImmutableTest(unittest.IsolatedAsyncioTestCase):
    def setUp(self):
        self.orig_config = copy.deepcopy(ctx.CONFIG)
        self.tmp = tempfile.TemporaryDirectory()
        ctx.BASE_DIR = Path(self.tmp.name)
        # group target: class with two users, monitor = user1
        ctx.CONFIG.clear()
        ctx.CONFIG.update(tron.normalize_config({
            "account": {"user": "user1", "passwd": "pass1"},
            "accounts": {"current": "default", "profiles": {"default": {"user": "user1", "passwd": "pass1", "label": ""}, "user1": {"user": "user1", "passwd": "pass1", "label": ""}, "user2": {"user": "user2", "passwd": "pass2", "label": ""}}},
            "_simple": {"now": "class G1", "accounts": [{"user": "user1", "school": "thu", "passwd": "pass1"}, {"user": "user2", "school": "thu", "passwd": "pass2"}], "groups": [{"class": "G1", "school": "thu", "users": ["user1", "user2"]}]},
            "provider": {"current": "thu", "available": {"thu": {"base_url": "https://ilearn.thu.edu.tw"}}},
        }))

    def tearDown(self):
        ctx.CONFIG.clear()
        ctx.CONFIG.update(self.orig_config)
        self.tmp.cleanup()

    async def test_group_qr_uses_captured_endpoints_despite_global_mutation(self):
        # capture what submit_prepared_teacher_qr receives
        seen = []

        async def fake_teacher(session, rollcall, **kwargs):
            seen.append(dict(kwargs))
            # mutate global provider during await
            try:
                ctx.CONFIG["provider"]["current"] = "fju"
            except Exception:
                pass
            return True

        async def fake_remote(session, rollcall, **kwargs):
            seen.append(dict(kwargs))
            return False

        # Immutable snapshot: captured endpoints live in snapshot's provider.available, verify_ssl=False -> request_ssl=False
        ctx.CONFIG["provider"]["available"]["thu"] = {"base_url": "https://captured.example", "login_url": "https://captured.example/login", "rollcalls_url": "https://captured.example/api/rollcalls", "current_semester_url": "https://captured.example/api/sem", "courses_url": "https://captured.example/api/courses"}
        ctx.CONFIG["config"]["verify_ssl"] = False
        with (patch.object(ctx, "teacher_assist_configured", return_value=True),
              patch.object(ctx, "qr_remote_configured", return_value=True),
              patch.object(ctx, "submit_prepared_teacher_qr", side_effect=fake_teacher),
              patch.object(ctx, "submit_remote_qr", side_effect=fake_remote),
              patch("troTHU.group_runtime._member_login", new_callable=AsyncMock) as mock_login):

            mock_login.return_value = True
            from troTHU.group_runtime import submit_group_qr
            await submit_group_qr({"rollcall_id": "99"}, config=ctx.CONFIG)
            # fanout 是 monitor_user=user1 之外的成員（此例只有 user2），至少 1 筆且與快照一致
            self.assertGreaterEqual(len(seen), 1)
            eps = [kwargs.get("endpoints").base_url if kwargs.get("endpoints") else None for kwargs in seen]
            self.assertTrue(all(ep == "https://captured.example" for ep in eps))
            self.assertTrue(all(kwargs.get("request_ssl") is False for kwargs in seen))

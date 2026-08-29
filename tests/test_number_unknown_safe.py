from __future__ import annotations

import asyncio
import copy
import unittest
import unittest.mock

import aiohttp
from aiohttp import web

from troTHU.number_rollcall import coerce_number_code, parse_number_code_payload
from troTHU import tron
from tests.fake_tron_server import FakeTronServer


def _configure_provider(provider_key: str, server: FakeTronServer) -> None:
    tron.CONFIG.clear()
    tron.CONFIG.update(
        tron.normalize_config(
            {
                "account": {"user": "user1", "passwd": "pass1"},
                "accounts": {
                    "current": "default",
                    "profiles": {"default": {"user": "user1", "passwd": "pass1", "label": ""}},
                },
                "provider": {
                    "current": provider_key,
                    "available": {
                        provider_key: {
                            "base_url": server.base_url,
                            "login_url": server.login_url,
                            "rollcalls_url": server.rollcalls_url,
                            "current_semester_url": server.current_semester_url,
                            "courses_url": server.courses_url,
                        }
                    },
                },
            }
        )
    )


class NumberAsciiValidationTest(unittest.TestCase):
    def test_coerce_rejects_unicode_nd(self) -> None:
        for txt in ("０００１", "٠٠٠١", "12 34", "  ０００１ "):
            with self.subTest(txt=repr(txt)):
                self.assertIsNone(coerce_number_code(txt))
                lookup = parse_number_code_payload({"number_code": txt})
                self.assertFalse(lookup.has_code)

    def test_payload_shapes_reject_unicode(self) -> None:
        payloads = [
            {"number_code": "０００１"},
            {"data": {"number_code": "٠٠٠١"}},
            {"student_rollcalls": [{"number_code": "０００１"}]},
            [{"number_code": "０００１"}],
        ]
        for payload in payloads:
            with self.subTest(payload=payload):
                self.assertFalse(parse_number_code_payload(payload).has_code)

    def test_teacher_rollcall_rejects_unicode(self) -> None:
        from troTHU.teacher_rollcall import TeacherRollcallError, build_teacher_rollcall_payload

        for bad in ("０００１", "٠٠٠١", "12a4"):
            with self.subTest(bad=repr(bad)):
                with self.assertRaises(TeacherRollcallError):
                    build_teacher_rollcall_payload(kind="number", number_code=bad)
        ok = build_teacher_rollcall_payload(kind="number", number_code="0427")
        self.assertEqual(ok["number_code"], "0427")


class GroupNumberAsciiTest(unittest.IsolatedAsyncioTestCase):
    async def test_submit_group_number_rejects_unicode_without_mutation(self) -> None:
        orig_cfg = copy.deepcopy(tron.CONFIG)
        orig_comp = dict(tron.COMPLETED_NUMBER_ROLLCALLS)
        async with FakeTronServer(correct_number_code="0001") as server:
            try:
                tron.COMPLETED_NUMBER_ROLLCALLS.clear()
                _configure_provider("tku", server)
                tron.CONFIG["_simple"] = {
                    "accounts": [{"user": "user1", "school": "tku"}],
                    "groups": [{"class": "A", "school": "tku", "users": ["user1"]}],
                    "now": "class A",
                }
                for bad in ("０００１", "٠٠٠١"):
                    with self.subTest(bad=repr(bad)):
                        result = await tron.submit_group_number(bad, rcid=42, config=tron.CONFIG)
                        self.assertEqual(result.get("status"), "invalid_number_code")
                        self.assertEqual(len(server.number_attempts), 0)
            finally:
                tron.CONFIG.clear()
                tron.CONFIG.update(orig_cfg)
                tron.COMPLETED_NUMBER_ROLLCALLS.clear()
                tron.COMPLETED_NUMBER_ROLLCALLS.update(orig_comp)


class NumberSequentialBarrierTest(unittest.IsolatedAsyncioTestCase):
    async def test_configured_high_concurrency_still_one_in_flight(self) -> None:
        class TrackingServer(FakeTronServer):
            def __init__(self, **kw):
                super().__init__(**kw)
                self.concurrent = 0
                self.max_concurrent = 0

            async def answer_number(self, request):
                self.concurrent += 1
                if self.concurrent > self.max_concurrent:
                    self.max_concurrent = self.concurrent
                await asyncio.sleep(0.03)
                try:
                    return await super().answer_number(request)
                finally:
                    self.concurrent -= 1

        orig_cfg = copy.deepcopy(tron.CONFIG)
        orig_comp = dict(tron.COMPLETED_NUMBER_ROLLCALLS)
        async with TrackingServer(correct_number_code="0003") as server:
            try:
                tron.COMPLETED_NUMBER_ROLLCALLS.clear()
                _configure_provider("tku", server)
                tron.CONFIG["number"]["concurrency"] = 100
                tron.CONFIG["number"]["min_concurrency"] = 5
                tron.CONFIG["number"]["direct_code_lookup"]["enabled"] = False
                server.student_rollcalls_leaks_code = False
                async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                    login_result = await tron.login(session)
                    self.assertTrue(login_result.ok)
                    with (
                        unittest.mock.patch.object(tron, "NUMBER_CODE_LIMIT", 10),
                        unittest.mock.patch.object(tron, "mes", unittest.mock.AsyncMock()),
                        unittest.mock.patch.object(tron, "log_print"),
                        unittest.mock.patch.object(tron, "status_print"),
                    ):
                        found = await tron.number(session, 42)
                self.assertEqual(found, "0003")
                self.assertEqual(server.max_concurrent, 1)
                self.assertEqual(len(server.number_attempts), 4)
            finally:
                tron.CONFIG.clear()
                tron.CONFIG.update(orig_cfg)
                tron.COMPLETED_NUMBER_ROLLCALLS.clear()
                tron.COMPLETED_NUMBER_ROLLCALLS.update(orig_comp)

    async def test_ambiguous_produces_single_request(self) -> None:
        orig_cfg = copy.deepcopy(tron.CONFIG)
        orig_comp = dict(tron.COMPLETED_NUMBER_ROLLCALLS)
        async with FakeTronServer(correct_number_code="0001") as server:
            try:
                tron.COMPLETED_NUMBER_ROLLCALLS.clear()
                _configure_provider("tku", server)
                tron.CONFIG["number"]["concurrency"] = 100
                tron.CONFIG["number"]["direct_code_lookup"]["enabled"] = False
                server.student_rollcalls_leaks_code = False
                server.queue_response("number", status=200, text="")
                async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                    login_result = await tron.login(session)
                    self.assertTrue(login_result.ok)
                    with (
                        unittest.mock.patch.object(tron, "NUMBER_CODE_LIMIT", 10),
                        unittest.mock.patch.object(tron, "mes", unittest.mock.AsyncMock()),
                        unittest.mock.patch.object(tron, "log_print"),
                        unittest.mock.patch.object(tron, "status_print"),
                        unittest.mock.patch.object(
                            tron,
                            "verify_rollcall_on_call_fine",
                            unittest.mock.AsyncMock(return_value={"ok": False, "status": "submitted_unconfirmed"}),
                        ),
                    ):
                        found = await tron.number(session, 42)
                self.assertEqual(found, "NA")
                self.assertEqual(len(server.number_attempts), 1)
            finally:
                tron.CONFIG.clear()
                tron.CONFIG.update(orig_cfg)
                tron.COMPLETED_NUMBER_ROLLCALLS.clear()
                tron.COMPLETED_NUMBER_ROLLCALLS.update(orig_comp)

    async def test_wrong_then_next_sequential(self) -> None:
        orig_cfg = copy.deepcopy(tron.CONFIG)
        orig_comp = dict(tron.COMPLETED_NUMBER_ROLLCALLS)
        async with FakeTronServer(correct_number_code="0001") as server:
            try:
                tron.COMPLETED_NUMBER_ROLLCALLS.clear()
                _configure_provider("tku", server)
                tron.CONFIG["number"]["concurrency"] = 64
                tron.CONFIG["number"]["direct_code_lookup"]["enabled"] = False
                server.student_rollcalls_leaks_code = False
                async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                    login_result = await tron.login(session)
                    self.assertTrue(login_result.ok)
                    with (
                        unittest.mock.patch.object(tron, "NUMBER_CODE_LIMIT", 10),
                        unittest.mock.patch.object(tron, "mes", unittest.mock.AsyncMock()),
                        unittest.mock.patch.object(tron, "log_print"),
                        unittest.mock.patch.object(tron, "status_print"),
                    ):
                        found = await tron.number(session, 42)
                self.assertEqual(found, "0001")
                self.assertEqual(len(server.number_attempts), 2)
                self.assertEqual(str(server.number_attempts[0]["body"].get("numberCode")), "0000")
                self.assertEqual(str(server.number_attempts[1]["body"].get("numberCode")), "0001")
            finally:
                tron.CONFIG.clear()
                tron.CONFIG.update(orig_cfg)
                tron.COMPLETED_NUMBER_ROLLCALLS.clear()
                tron.COMPLETED_NUMBER_ROLLCALLS.update(orig_comp)

    async def test_cancellation_during_hang_emits_single_mutation(self) -> None:
        class HangingServer(FakeTronServer):
            async def answer_number(self, request):
                body = await request.json()
                self.number_attempts.append({"rollcall_id": request.match_info["rollcall_id"], "body": body})
                await asyncio.sleep(10)
                return web.Response(status=200, text='{"success": true}')

        orig_cfg = copy.deepcopy(tron.CONFIG)
        orig_comp = dict(tron.COMPLETED_NUMBER_ROLLCALLS)
        async with HangingServer(correct_number_code="0001") as server:
            try:
                tron.COMPLETED_NUMBER_ROLLCALLS.clear()
                _configure_provider("tku", server)
                tron.CONFIG["number"]["concurrency"] = 50
                tron.CONFIG["number"]["direct_code_lookup"]["enabled"] = False
                server.student_rollcalls_leaks_code = False
                async with aiohttp.ClientSession(
                    cookie_jar=aiohttp.CookieJar(unsafe=True), timeout=aiohttp.ClientTimeout(total=0.3)
                ) as session:
                    login_result = await tron.login(session)
                    self.assertTrue(login_result.ok)
                    with (
                        unittest.mock.patch.object(tron, "NUMBER_CODE_LIMIT", 10),
                        unittest.mock.patch.object(tron, "mes", unittest.mock.AsyncMock()),
                        unittest.mock.patch.object(tron, "log_print"),
                        unittest.mock.patch.object(tron, "status_print"),
                    ):
                        try:
                            await asyncio.wait_for(tron.number(session, 42), timeout=1.0)
                        except (asyncio.TimeoutError, Exception):
                            pass
                await asyncio.sleep(0.2)
                self.assertEqual(len(server.number_attempts), 1)
            finally:
                tron.CONFIG.clear()
                tron.CONFIG.update(orig_cfg)
                tron.COMPLETED_NUMBER_ROLLCALLS.clear()
                tron.COMPLETED_NUMBER_ROLLCALLS.update(orig_comp)

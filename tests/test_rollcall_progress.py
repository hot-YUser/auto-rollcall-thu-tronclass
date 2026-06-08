import unittest
from types import SimpleNamespace
from unittest.mock import AsyncMock, patch

import aiohttp

from troTHU.rollcall_progress import fetch_rollcall_progress, report_rollcall_progress, summarize_rollcall_progress, verify_rollcall_on_call_fine
from tests.fake_tron_server import FakeTronServer


class SummarizeProgressTest(unittest.TestCase):
    def test_counts_present_answered_and_my_status(self) -> None:
        student_rollcalls = {
            "student_rollcalls": [
                {"user_no": "s11210024", "rollcall_status": "on_call_fine"},
                {"user_no": "s10360207", "rollcall_status": "absent"},
                {"user_no": "s11350128", "rollcall_status": "absent"},
            ]
        }
        answers = {"answers": [{"student_id": 1}, {"student_id": 2}]}
        summary = summarize_rollcall_progress(student_rollcalls, answers, "S11210024")
        self.assertEqual(summary["total"], 3)
        self.assertEqual(summary["present"], 1)
        self.assertEqual(summary["answered"], 2)
        self.assertEqual(summary["my_status"], "on_call_fine")
        self.assertTrue(summary["my_status_known"])
        self.assertTrue(summary["my_present"])
        self.assertFalse(summary["progress_present"])
        self.assertTrue(summary["confirmed_present"])

    def test_present_rate_uses_roster_present_not_answers(self) -> None:
        student_rollcalls = {
            "student_rollcalls": [
                {"user_no": "s1", "rollcall_status": "on_call_fine"},
                {"user_no": "s2", "rollcall_status": "absent"},
                {"user_no": "s3", "rollcall_status": "absent"},
            ]
        }
        answers = {"answers": [{"student_id": 1}, {"student_id": 2}, {"student_id": 3}]}

        summary = summarize_rollcall_progress(student_rollcalls, answers, "s1")

        self.assertEqual(summary["answered"], 3)
        self.assertTrue(summary["present_rate_known"])
        self.assertAlmostEqual(summary["present_rate_percent"], 100.0 / 3.0)

    def test_all_present_without_profile_match_confirms_without_marking_absent(self) -> None:
        student_rollcalls = {
            "student_rollcalls": [
                {"user_no": "someone_else", "rollcall_status": "on_call_fine"},
            ]
        }
        answers = {"answers": [{"student_id": 1}]}
        summary = summarize_rollcall_progress(student_rollcalls, answers, "user1")

        self.assertEqual(summary["total"], 1)
        self.assertEqual(summary["present"], 1)
        self.assertFalse(summary["my_status_known"])
        self.assertEqual(summary["my_status"], "")
        self.assertFalse(summary["my_present"])
        self.assertTrue(summary["progress_present"])
        self.assertTrue(summary["confirmed_present"])

    def test_matched_absent_status_stays_explicit(self) -> None:
        student_rollcalls = {
            "student_rollcalls": [
                {"user_no": "user1", "rollcall_status": "absent"},
                {"user_no": "user2", "rollcall_status": "on_call_fine"},
            ]
        }
        summary = summarize_rollcall_progress(student_rollcalls, {"answers": []}, "user1")

        self.assertTrue(summary["my_status_known"])
        self.assertEqual(summary["my_status"], "absent")
        self.assertFalse(summary["my_present"])
        self.assertFalse(summary["progress_present"])
        self.assertFalse(summary["confirmed_present"])

    def test_handles_missing_payloads(self) -> None:
        summary = summarize_rollcall_progress(None, None, "x")
        self.assertEqual(summary, {
            "total": 0,
            "present": 0,
            "answered": 0,
            "present_rate_known": False,
            "present_rate_percent": None,
            "rollcall_status": "",
            "my_user_no": "x",
            "my_status": "",
            "my_status_known": False,
            "my_present": False,
            "progress_present": False,
            "progress_status_present": False,
            "confirmed_present": False,
        })


class FetchProgressTest(unittest.IsolatedAsyncioTestCase):
    async def test_fetch_against_fake_server(self) -> None:
        async with FakeTronServer() as server:
            server.student_rollcalls = [{"user_no": "s14490051", "rollcall_status": "on_call_fine"}]
            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                await server.login_session(session)
                summary = await fetch_rollcall_progress(
                    session, "382575", endpoints=server.endpoints(), my_user_no="s14490051"
                )
        self.assertTrue(summary["ok"])
        self.assertEqual(summary["total"], 1)
        self.assertEqual(summary["present"], 1)
        self.assertTrue(summary["my_present"])
        self.assertEqual(summary["answered"], 1)

    async def test_report_progress_does_not_print_unmatched_user_as_absent(self) -> None:
        progress = {
            "ok": True,
            "rollcall_id": "77",
            "total": 1,
            "present": 1,
            "answered": 1,
            "my_user_no": "user1",
            "my_status": "",
            "my_status_known": False,
            "my_present": False,
            "progress_present": True,
            "confirmed_present": True,
        }
        with (
            patch("troTHU.rollcall_progress.fetch_rollcall_progress", AsyncMock(return_value=progress)),
            patch("troTHU.rollcall_progress.ctx.get_active_profile", return_value=SimpleNamespace(name="user1")),
            patch("troTHU.rollcall_progress.ctx.get_active_http_endpoints", return_value=SimpleNamespace(base_url="https://example.test")),
            patch("troTHU.rollcall_progress.ctx.get_ssl_request_setting", return_value=None),
            patch("troTHU.rollcall_progress.ctx.log_print") as log_print,
            patch("troTHU.rollcall_progress.ctx.log"),
        ):
            summary = await report_rollcall_progress(object(), "77")

        self.assertTrue(summary["confirmed_present"])
        printed = log_print.call_args.args[0]
        self.assertIn("全員已簽到", printed)
        self.assertNotIn("未簽到", printed)

    async def test_verifier_confirms_from_rollcalls_feed_status(self) -> None:
        async with FakeTronServer() as server:
            server.rollcalls = [{"rollcall_id": "77", "status": "on_call_fine"}]
            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                await server.login_session(session)
                verification = await verify_rollcall_on_call_fine(
                    session,
                    "77",
                    attempts=1,
                    delay_seconds=0,
                    endpoints=server.endpoints(),
                    request_ssl=None,
                )

        self.assertTrue(verification["ok"])
        self.assertEqual(verification["status"], "on_call_fine")
        self.assertEqual(verification["source"], "rollcalls")

    async def test_verifier_confirms_from_progress_without_profile_match(self) -> None:
        async with FakeTronServer() as server:
            server.student_rollcalls = [
                {"student_id": 1, "user_no": "someone_else", "rollcall_status": "on_call_fine"}
            ]
            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                await server.login_session(session)
                with patch("troTHU.rollcall_progress.ctx.get_active_profile", return_value=SimpleNamespace(name="user1")):
                    verification = await verify_rollcall_on_call_fine(
                        session,
                        "77",
                        attempts=1,
                        delay_seconds=0,
                        endpoints=server.endpoints(),
                        request_ssl=None,
                    )

        self.assertTrue(verification["ok"])
        self.assertEqual(verification["source"], "progress")
        self.assertTrue(verification["progress"]["confirmed_present"])
        self.assertFalse(verification["progress"]["my_status_known"])
        self.assertIn("已簽到 1/1", verification["monitor_detail"])


if __name__ == "__main__":
    unittest.main()

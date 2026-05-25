import unittest

import aiohttp

from troTHU.rollcall_progress import fetch_rollcall_progress, summarize_rollcall_progress
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
        self.assertTrue(summary["my_present"])

    def test_handles_missing_payloads(self) -> None:
        summary = summarize_rollcall_progress(None, None, "x")
        self.assertEqual(summary, {
            "total": 0,
            "present": 0,
            "answered": 0,
            "my_user_no": "x",
            "my_status": "",
            "my_present": False,
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


if __name__ == "__main__":
    unittest.main()

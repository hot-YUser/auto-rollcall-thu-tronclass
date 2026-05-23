import copy
import unittest
import unittest.mock

import aiohttp

from troTHU import tron
from tests.fake_tron_server import FakeTronServer


def _configure_provider_for_fake_server(provider_key: str, server: FakeTronServer) -> None:
    # Use a non-default provider key (tku) so get_active_http_endpoints() resolves the
    # provider override URLs (pointed at the fake server) instead of the hardcoded THU URLs.
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


class NumberDirectLookupTest(unittest.IsolatedAsyncioTestCase):
    async def _run_number(
        self,
        *,
        leaks: bool,
        enabled: bool,
        correct: str,
        code_limit: int = 10000,
    ):
        original_config = copy.deepcopy(tron.CONFIG)
        original_completed = dict(tron.COMPLETED_NUMBER_ROLLCALLS)
        async with FakeTronServer(correct_number_code=correct) as server:
            server.student_rollcalls_leaks_code = leaks
            try:
                tron.COMPLETED_NUMBER_ROLLCALLS.clear()
                _configure_provider_for_fake_server("tku", server)
                tron.CONFIG["number"]["direct_code_lookup"]["enabled"] = enabled
                # Force sequential brute-force so attempt ordering is deterministic.
                tron.CONFIG["number"]["concurrency"] = 1
                tron.CONFIG["number"]["min_concurrency"] = 1
                async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                    login_result = await tron.login(session)
                    self.assertTrue(login_result.ok)
                    with (
                        unittest.mock.patch.object(tron, "NUMBER_CODE_LIMIT", code_limit),
                        unittest.mock.patch.object(tron, "NUMBER_WORKER_COUNT", 1),
                        unittest.mock.patch.object(tron, "mes", unittest.mock.AsyncMock()),
                        unittest.mock.patch.object(tron, "log_print"),
                        unittest.mock.patch.object(tron, "status_print"),
                    ):
                        found = await tron.number(session, 42)
                return found, list(server.number_attempts)
            finally:
                tron.CONFIG.clear()
                tron.CONFIG.update(original_config)
                tron.COMPLETED_NUMBER_ROLLCALLS.clear()
                tron.COMPLETED_NUMBER_ROLLCALLS.update(original_completed)

    async def test_direct_read_succeeds_with_single_submit(self) -> None:
        found, attempts = await self._run_number(leaks=True, enabled=True, correct="0427")
        self.assertEqual(found, "0427")
        # Direct read => exactly one answer submission, no brute-force storm.
        self.assertEqual(len(attempts), 1)
        self.assertEqual(str(attempts[0]["body"].get("numberCode")), "0427")

    async def test_falls_back_to_bruteforce_when_code_not_leaked(self) -> None:
        found, attempts = await self._run_number(
            leaks=False, enabled=True, correct="0003", code_limit=10
        )
        self.assertEqual(found, "0003")
        # No leaked code => brute force took several attempts.
        self.assertGreater(len(attempts), 1)

    async def test_disabled_flag_uses_bruteforce_only(self) -> None:
        found, attempts = await self._run_number(
            leaks=True, enabled=False, correct="0002", code_limit=10
        )
        self.assertEqual(found, "0002")
        self.assertGreater(len(attempts), 1)
        # Brute force starts from 0000 (direct read disabled, so the leaked code is ignored).
        self.assertEqual(str(attempts[0]["body"].get("numberCode")), "0000")


if __name__ == "__main__":
    unittest.main()

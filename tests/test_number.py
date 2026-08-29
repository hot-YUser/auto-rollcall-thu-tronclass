from __future__ import annotations

import unittest
import copy
import unittest.mock
import aiohttp
from troTHU.number_rollcall import NumberAttemptStatus, classify_number_response, coerce_number_code, is_transient_number_status, parse_number_code_payload
from troTHU import tron
from tests.fake_tron_server import FakeTronServer


# --- merged from tests/test_number_rollcall.py ---
class NumberRollcallClassificationTest(unittest.TestCase):
    def test_success_accepts_empty_2xx_and_success_payloads(self) -> None:
        # Empty 2xx is submitted-unconfirmed (unknown), not success; explicit success flag still succeeds.
        self.assertEqual(
            classify_number_response(200).status,
            NumberAttemptStatus.UNKNOWN_FAILURE,
        )
        self.assertEqual(
            classify_number_response(200, '{"success": true}').status,
            NumberAttemptStatus.SUCCESS,
        )

    def test_wrong_code_status_and_messages_are_classified(self) -> None:
        self.assertEqual(
            classify_number_response(400, "bad number").status,
            NumberAttemptStatus.WRONG_CODE,
        )
        self.assertEqual(
            classify_number_response(200, '{"success": false, "message": "number code wrong"}').status,
            NumberAttemptStatus.WRONG_CODE,
        )

    def test_auth_expiry_is_terminal(self) -> None:
        result = classify_number_response(401, "expired")

        self.assertEqual(result.status, NumberAttemptStatus.UNAUTHORIZED)
        self.assertTrue(result.terminal)

    def test_transient_failures_are_retriable(self) -> None:
        for status in (408, 425, 429, 500, 503):
            with self.subTest(status=status):
                result = classify_number_response(status, "temporary")
                self.assertEqual(result.status, NumberAttemptStatus.TRANSIENT_FAILURE)
                self.assertTrue(result.retriable)
                self.assertTrue(is_transient_number_status(status))

    def test_unknown_status_is_separate_from_wrong_code(self) -> None:
        result = classify_number_response(418, "teapot")

        self.assertEqual(result.status, NumberAttemptStatus.UNKNOWN_FAILURE)
        self.assertFalse(result.retriable)


class CoerceNumberCodeTest(unittest.TestCase):
    def test_accepts_four_digit_strings_and_ints(self) -> None:
        self.assertEqual(coerce_number_code("0427"), "0427")
        self.assertEqual(coerce_number_code(" 0427 "), "0427")
        self.assertEqual(coerce_number_code(1), "0001")
        self.assertEqual(coerce_number_code(9999), "9999")

    def test_rejects_non_codes(self) -> None:
        for value in (None, True, False, "12", "abcd", "01234", 10000, -1, "", "12a4"):
            with self.subTest(value=value):
                self.assertIsNone(coerce_number_code(value))


class ParseNumberCodePayloadTest(unittest.TestCase):
    def test_reads_top_level_number_code_with_meta(self) -> None:
        lookup = parse_number_code_payload(
            {"number_code": "0427", "status": "in_progress", "end_time": "2026-05-24T23:59:00+08:00"}
        )
        self.assertTrue(lookup.has_code)
        self.assertEqual(lookup.code, "0427")
        self.assertEqual(lookup.source, "number_code")
        self.assertEqual(lookup.status, "in_progress")
        self.assertEqual(lookup.end_time, "2026-05-24T23:59:00+08:00")

    def test_reads_data_wrapper(self) -> None:
        lookup = parse_number_code_payload({"data": {"number_code": "0001"}})
        self.assertEqual(lookup.code, "0001")
        self.assertEqual(lookup.source, "data.number_code")

    def test_reads_nested_student_rollcalls_array(self) -> None:
        lookup = parse_number_code_payload(
            {"status": "in_progress", "student_rollcalls": [{"student_id": 1, "number_code": "1234"}]}
        )
        self.assertEqual(lookup.code, "1234")
        self.assertEqual(lookup.source, "student_rollcalls[].number_code")

    def test_reads_bare_list(self) -> None:
        lookup = parse_number_code_payload([{"number_code": "5678"}])
        self.assertEqual(lookup.code, "5678")
        self.assertEqual(lookup.source, "list[].number_code")

    def test_prefers_top_level_over_array(self) -> None:
        lookup = parse_number_code_payload(
            {"number_code": "0427", "student_rollcalls": [{"number_code": "1234"}]}
        )
        self.assertEqual(lookup.code, "0427")

    def test_returns_no_code_when_absent_or_invalid(self) -> None:
        for payload in (
            {"student_rollcalls": [{"student_id": 1, "status": "pending"}]},
            {"number_code": "12"},
            {"number_code": None},
            {},
            [],
            "not-json",
            None,
        ):
            with self.subTest(payload=payload):
                lookup = parse_number_code_payload(payload)
                self.assertFalse(lookup.has_code)
                self.assertIsNone(lookup.code)


# --- merged from tests/test_number_direct_lookup.py ---
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

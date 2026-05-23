import unittest

from troTHU.number_rollcall import (
    NumberAttemptStatus,
    classify_number_response,
    coerce_number_code,
    is_transient_number_status,
    parse_number_code_payload,
)


class NumberRollcallClassificationTest(unittest.TestCase):
    def test_success_accepts_empty_2xx_and_success_payloads(self) -> None:
        self.assertEqual(
            classify_number_response(200).status,
            NumberAttemptStatus.SUCCESS,
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

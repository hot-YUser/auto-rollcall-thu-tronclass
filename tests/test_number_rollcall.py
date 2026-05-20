import unittest

from troTHU.number_rollcall import (
    NumberAttemptStatus,
    classify_number_response,
    is_transient_number_status,
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

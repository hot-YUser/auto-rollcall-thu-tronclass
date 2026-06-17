"""Guards for login error output: 100% status coverage + retry classification.

These lock in the v1.6-alpha.2 contract that every non-success login outcome
produces a clear, specific user line, and that no status can drive the monitor
into a tight (no-backoff) retry loop.
"""
import unittest

import troTHU.auth_runtime as auth
import troTHU.runtime_context as ctx
from troTHU.runtime_context import LoginResult

# The full taxonomy of non-success login outcomes the code can produce. If a new
# status ships without a message (or vice versa), test_message_map_matches_taxonomy
# fails — that is the coverage ratchet.
ALL_FAILURE_STATUSES = {
    "missing_credentials",
    "rejected",
    "login_page_changed",
    "transient_error",
    "missing_session",
    "error",
    "browser_assist_disabled",
    "browser_assist_unavailable",
    "browser_assist_failed",
    "browser_assist_missing_session",
    "browser_interactive_timeout",
    "browser_interactive_cancelled",
}


def _result(status: str, error: str = "") -> LoginResult:
    return LoginResult(status=status, credential_source="test", error=error)


class LoginMessageCoverageTest(unittest.TestCase):
    def test_every_failure_status_has_specific_message(self) -> None:
        for status in ALL_FAILURE_STATUSES:
            msg = auth.login_failure_message(_result(status))
            self.assertTrue(msg.strip(), status)
            # Not the generic unknown-status fallback.
            self.assertNotIn("（{}）".format(status), msg)
            self.assertNotIn("unknown", msg)

    def test_message_map_matches_taxonomy(self) -> None:
        self.assertEqual(set(auth._LOGIN_FAILURE_MESSAGES), ALL_FAILURE_STATUSES)

    def test_rejected_names_all_three_causes(self) -> None:
        msg = auth.login_failure_message(_result("rejected"))
        for token in ("帳號", "密碼", "驗證碼"):
            self.assertIn(token, msg)

    def test_login_page_changed_surfaces_actionable_detail(self) -> None:
        # The OCR-missing / federated-SSO detail must reach the user verbatim
        # rather than being replaced by a generic "page changed" line.
        detail = "圖形驗證碼登入需要 OCR 套件；請安裝 pip install -e .[ocr]，或改用瀏覽器登入。"
        self.assertEqual(auth.login_failure_message(_result("login_page_changed", detail)), detail)

    def test_transient_appends_short_detail(self) -> None:
        msg = auth.login_failure_message(_result("transient_error", "Connection reset by peer"))
        self.assertIn("Connection reset by peer", msg)

    def test_unknown_status_still_returns_nonempty(self) -> None:
        self.assertTrue(auth.login_failure_message(_result("brand_new_status")).strip())

    def test_no_secret_echo(self) -> None:
        # error text is surfaced for some statuses; never the password/captcha — we
        # only ever pass exception text, but assert the generic lines stay clean.
        for status in ("rejected", "missing_credentials"):
            self.assertNotIn("test", auth.login_failure_message(_result(status)))


class LoginRetryClassificationTest(unittest.TestCase):
    def setUp(self) -> None:
        self._orig = ctx.LAST_LOGIN_RESULT

    def tearDown(self) -> None:
        ctx.LAST_LOGIN_RESULT = self._orig

    def test_needs_user_statuses_do_not_auto_retry(self) -> None:
        # Only wrong-credentials / no-credentials stop auto-retry. A changed login page
        # now recovers via the browser last resort (or headless cookie polling), so it
        # backs off and retries rather than dead-ending.
        for status in ("rejected", "missing_credentials"):
            ctx.LAST_LOGIN_RESULT = _result(status)
            self.assertFalse(ctx.should_auto_login_without_session(), status)
            self.assertFalse(_result(status).should_auto_retry, status)

    def test_transient_statuses_back_off_and_retry(self) -> None:
        for status in ("transient_error", "missing_session", "error", "login_page_changed"):
            ctx.LAST_LOGIN_RESULT = _result(status)
            self.assertTrue(ctx.should_auto_login_without_session(), status)
            self.assertTrue(_result(status).should_auto_retry, status)

    def test_needs_user_and_auto_retry_never_overlap(self) -> None:
        retry = {s for s in ALL_FAILURE_STATUSES if _result(s).should_auto_retry}
        self.assertEqual(retry & auth.LOGIN_NEEDS_USER_STATUSES, set())


if __name__ == "__main__":
    unittest.main()

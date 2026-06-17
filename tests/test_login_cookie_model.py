"""Unified cookie/login model (v1.6-alpha.2).

- Non-credential failures route to the interactive browser when a user is present,
  and to passive cookie-polling (no browser) when headless (--no-input).
- Wrong credentials/captcha (rejected) NEVER open a browser.
"""
import copy
import unittest
from unittest.mock import AsyncMock, MagicMock, patch

from troTHU import tron


def _set_config():
    tron.CONFIG.clear()
    tron.CONFIG.update(
        tron.normalize_config(
            {"account": {"user": "u1", "passwd": "p1"}, "provider": {"current": "thu"}}
        )
    )


class LoginBrowserLastResortTest(unittest.IsolatedAsyncioTestCase):
    def setUp(self) -> None:
        self._orig_input = tron.INPUT_ENABLED
        self._orig_config = copy.deepcopy(tron.CONFIG)
        self._orig_last_login = tron.LAST_LOGIN_RESULT

    def tearDown(self) -> None:
        tron.INPUT_ENABLED = self._orig_input
        tron.CONFIG.clear()
        tron.CONFIG.update(self._orig_config)
        tron.LAST_LOGIN_RESULT = self._orig_last_login

    async def test_interactive_mode_non_rejected_opens_browser(self) -> None:
        _set_config()

        async def changed(_client, _user, _passwd):
            raise tron.LoginPageChangedError("login page changed")

        browser_result = tron.LoginResult(
            status="success", credential_source="interactive_browser:config", user="u1"
        )
        with (
            patch.object(tron, "INPUT_ENABLED", True),
            patch.object(tron, "has_session_cookie", return_value=False),
            patch.object(tron, "resolve_login_settings_url", AsyncMock(return_value="")),
            patch.object(tron, "run_login_flow", AsyncMock(side_effect=changed)),
            patch.object(tron, "interactive_browser_login", AsyncMock(return_value=browser_result)) as browser,
            patch.object(tron, "log_print"),
        ):
            result = await tron.login(MagicMock(cookie_jar=MagicMock()))

        browser.assert_awaited_once()
        self.assertTrue(result.ok)

    async def test_headless_non_rejected_does_not_open_browser(self) -> None:
        _set_config()

        async def changed(_client, _user, _passwd):
            raise tron.LoginPageChangedError("login page changed")

        with (
            patch.object(tron, "INPUT_ENABLED", False),
            patch.object(tron, "has_session_cookie", return_value=False),
            patch.object(tron, "resolve_login_settings_url", AsyncMock(return_value="")),
            patch.object(tron, "run_login_flow", AsyncMock(side_effect=changed)),
            patch.object(tron, "interactive_browser_login", AsyncMock()) as browser,
            patch.object(tron, "log_print"),
        ):
            result = await tron.login(MagicMock(cookie_jar=MagicMock()))

        browser.assert_not_awaited()
        self.assertEqual(result.status, "login_page_changed")
        self.assertTrue(result.should_auto_retry)  # keeps retrying + polling for a cookie

    async def test_rejected_never_opens_browser(self) -> None:
        _set_config()

        async def reject(_client, _user, _passwd):
            raise tron.LoginRejectedError("credentials rejected")

        with (
            patch.object(tron, "INPUT_ENABLED", True),
            patch.object(tron, "has_session_cookie", return_value=False),
            patch.object(tron, "resolve_login_settings_url", AsyncMock(return_value="")),
            patch.object(tron, "run_login_flow", AsyncMock(side_effect=reject)),
            patch.object(tron, "interactive_browser_login", AsyncMock()) as browser,
            patch.object(tron, "log_print") as log_print,
        ):
            result = await tron.login(MagicMock(cookie_jar=MagicMock()))

        self.assertEqual(result.status, "rejected")
        browser.assert_not_awaited()
        self.assertFalse(result.should_auto_retry)  # needs the user to fix credentials
        self.assertTrue(any("驗證碼" in call.args[0] for call in log_print.call_args_list))


if __name__ == "__main__":
    unittest.main()

"""Generic login-URL candidate probing (replaces NOU's hardcoded /cas/login override).

resolve_credential_form must try base_url + /login, and only when that yields no form
fall back to base_url + /cas/login — identical for every school, zero per-school config.
"""
import unittest
from unittest.mock import AsyncMock, MagicMock, patch

import troTHU.login_flow as login_flow

CAS_FORM = (
    '<form id="fm1" action="/cas/login" method="post">'
    '<input type="text" name="username">'
    '<input type="password" name="password">'
    '<input type="hidden" name="execution" value="e1s1">'
    "</form>"
)
NO_FORM = "<html><body>nothing to see here</body></html>"


def _client(pages):
    """A fake client whose login-form GET returns per-URL HTML (NO_FORM otherwise)."""
    client = MagicMock()
    endpoints = MagicMock()
    endpoints.base_url = "https://demo.edu.tw"
    endpoints.login_url = "https://demo.edu.tw/login"
    client.endpoints = endpoints

    async def get_form(url):
        return (pages.get(url, NO_FORM), url)

    client._get_login_form_response = AsyncMock(side_effect=get_form)
    return client


async def _noop_autosubmit(_client, html, url):
    return (html, url)


class LoginUrlCandidateTest(unittest.IsolatedAsyncioTestCase):
    async def test_falls_back_to_cas_login_when_login_has_no_form(self) -> None:
        client = _client({"https://demo.edu.tw/cas/login": CAS_FORM})
        with patch.object(login_flow, "_follow_js_autosubmit", AsyncMock(side_effect=_noop_autosubmit)):
            resolved = await login_flow.resolve_credential_form(client)
        self.assertEqual(resolved.kind, "credential")
        probed = [call.args[0] for call in client._get_login_form_response.call_args_list]
        self.assertEqual(probed, ["https://demo.edu.tw/login", "https://demo.edu.tw/cas/login"])

    async def test_uses_login_directly_and_skips_cas_when_form_present(self) -> None:
        client = _client({"https://demo.edu.tw/login": CAS_FORM})
        with patch.object(login_flow, "_follow_js_autosubmit", AsyncMock(side_effect=_noop_autosubmit)):
            resolved = await login_flow.resolve_credential_form(client)
        self.assertEqual(resolved.kind, "credential")
        probed = [call.args[0] for call in client._get_login_form_response.call_args_list]
        self.assertEqual(probed, ["https://demo.edu.tw/login"])

    async def test_candidates_are_base_url_derived(self) -> None:
        endpoints = MagicMock()
        endpoints.base_url = "https://demo.edu.tw"
        endpoints.login_url = "https://demo.edu.tw/login"
        self.assertEqual(
            login_flow._login_url_candidates(endpoints),
            ["https://demo.edu.tw/login", "https://demo.edu.tw/cas/login"],
        )

    async def test_no_form_anywhere_raises(self) -> None:
        client = _client({})  # neither candidate has a form
        with patch.object(login_flow, "_follow_js_autosubmit", AsyncMock(side_effect=_noop_autosubmit)):
            with self.assertRaises(login_flow.tron_http.LoginPageChangedError):
                await login_flow.resolve_credential_form(client)


if __name__ == "__main__":
    unittest.main()

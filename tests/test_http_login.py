from __future__ import annotations

import unittest
import aiohttp
import troTHU.auth_runtime as auth
import troTHU.runtime_context as ctx
import troTHU.login_flow as login_flow
import copy
import hashlib
import os
import sys
import types
from troTHU import tron_http, tron
from troTHU.runtime_context import LoginResult
from unittest.mock import AsyncMock, MagicMock, patch
from pathlib import Path


# --- merged from tests/test_login_flow.py ---
try:
    from aiohttp import web
except Exception:  # pragma: no cover
    web = None



class DetectorTest(unittest.TestCase):
    def test_login_settings_picks_kc_idp_hint(self) -> None:
        html = """var x = {"loginSettings": [
            {"url": "/login", "title": "non-campus"},
            {"url": "https://identity.x.edu/auth/realms/x/protocol/cas/login?kc_idp_hint=campus", "title": "campus"}
        ]};"""
        settings = login_flow.parse_login_settings(html)
        self.assertEqual(len(settings), 2)
        self.assertEqual(
            login_flow.pick_login_settings_url(settings),
            "https://identity.x.edu/auth/realms/x/protocol/cas/login?kc_idp_hint=campus",
        )

    def test_login_settings_single_quoted_python_dict(self) -> None:
        html = "'loginSettings': [{'url': 'https://i.edu/cas?kc_idp_hint=c'}]"
        self.assertEqual(login_flow.pick_login_settings_url(login_flow.parse_login_settings(html)),
                         "https://i.edu/cas?kc_idp_hint=c")

    def test_detect_sso_form_handles_varied_field_names(self) -> None:
        for user_field, pass_field in [("username", "password"), ("muid", "mpassword"),
                                       ("Ecom_User_ID", "Ecom_Password"), ("pLoginName", "pLoginPassword")]:
            html = '<form action="/go"><input name="{}" type="text"><input name="{}" type="password"></form>'.format(
                user_field, pass_field)
            detected = login_flow.detect_sso_form(html)
            self.assertIsNotNone(detected)
            self.assertEqual(detected["password_field"], pass_field)
            self.assertEqual(detected["username_field"], user_field)

    def test_detect_sso_form_none_without_password(self) -> None:
        self.assertIsNone(login_flow.detect_sso_form('<form action="/go"><input name="q"></form>'))

    def test_find_captcha_source_prefers_strong_keyword_over_logo(self) -> None:
        # NCUT regression: a Logo served via download_file.php must not be taken as the captcha.
        html = ('<img src="/download_file.php?id=logo">'
                '<img src="/sso/captcha?ts=1">')
        self.assertEqual(login_flow.find_captcha_source(html, "https://sso.x.edu/login"),
                         "https://sso.x.edu/sso/captcha?ts=1")

    def test_find_captcha_source_none_for_plain_page(self) -> None:
        self.assertIsNone(login_flow.find_captcha_source('<img src="/static/banner.png">', "https://x.edu"))

    def test_classify_captcha_is_field_driven(self) -> None:
        # Keycloak: captchaKey present -> keycloak_json.
        self.assertEqual(login_flow._classify_captcha({}, ["username", "password", "captchaKey", "captchaCode"]),
                         login_flow.CAPTCHA_KEYCLOAK_JSON)
        # Static image: a captcha input field.
        self.assertEqual(login_flow._classify_captcha({"captcha_field": "captcha"}, ["username", "password", "captcha"]),
                         login_flow.CAPTCHA_STATIC_IMAGE)
        # No captcha field -> none, even though a keycloak endpoint would answer live.
        self.assertEqual(login_flow._classify_captcha({}, ["username", "password"]),
                         login_flow.CAPTCHA_NONE)

    def test_keycloak_captcha_url_derivation(self) -> None:
        self.assertEqual(
            login_flow._keycloak_captcha_url(
                "https://id.x.edu/auth/realms/x/login-actions/authenticate?session_code=abc"),
            "https://id.x.edu/auth/realms/x" + tron_http.KEYCLOAK_CAPTCHA_ENDPOINT_SUFFIX,
        )
        self.assertEqual(login_flow._keycloak_captcha_url("https://x.edu/cas/login"), "")

    def test_nam_page_detection(self) -> None:
        self.assertTrue(login_flow._is_nam_page('<script>redirectLoginPage();</script>'))
        self.assertTrue(login_flow._is_nam_page('href="https://s/NEAI/logineb.jsp?myurl="'))
        self.assertFalse(login_flow._is_nam_page("<html><form></form></html>"))

    def test_federated_host_detection(self) -> None:
        self.assertTrue(login_flow._is_federated_host("accounts.google.com"))
        self.assertTrue(login_flow._is_federated_host("login.microsoftonline.com"))
        self.assertFalse(login_flow._is_federated_host("identity.x.edu.tw"))


class _FakeNamServer:
    """Emits the real NetIQ Access Manager (NEAI) bootstrap + form, host self-derived."""

    def __init__(self) -> None:
        self.session_cookie = "nam-session"
        self.validation_code = "778899"
        self.base_url = ""
        self.runner = None
        self.site = None

    async def login_page(self, _req):
        # NAM bootstrap: JS redirects to <base>/NEAI/logineb.jsp?myurl=<href>.
        html = (
            '<html><head><script>function redirectLoginPage(){var redirUrl=window.location.href;'
            'window.location.href="' + self.base_url + '/NEAI/logineb.jsp?myurl=" + redirUrl;}'
            '</script></head><body onload="redirectLoginPage()">'
            'Access Manager for e-business Login</body></html>'
        )
        return web.Response(text=html, content_type="text/html")

    async def neai_form(self, _req):
        html = (
            '<html><form class="form-horizontal" action="/NEAI/login2.do">'
            '<input type="text" name="username" value="">'
            '<input type="password" name="password" value="">'
            '<input type="text" name="vidcode" value="">'
            '</form></html>'
        )
        return web.Response(text=html, content_type="text/html")

    async def image_validate(self, request):
        if request.method == "GET":
            return web.Response(body=b"img")
        data = await request.post()
        return web.Response(text=self.validation_code if data.get("outType") == "2" else "")

    async def submit(self, request):
        data = await request.post()
        resp = web.Response(text="<html><script>window.location.href='/iportal';</script></html>",
                            content_type="text/html")
        if (data.get("username") == "u" and data.get("password") == "p"
                and data.get("vidcode") == self.validation_code):
            resp.set_cookie("session", self.session_cookie)
        return resp

    async def iportal(self, _req):
        return web.Response(text="iportal")

    def endpoints(self):
        return tron_http.TronHttpEndpoints(
            base_url=self.base_url,
            login_url=self.base_url + "/login?next=/iportal",
            session_cookie_domain="127.0.0.1",
        )

    async def __aenter__(self):
        if web is None:
            raise unittest.SkipTest("aiohttp.web required")
        app = web.Application()
        app.router.add_get("/login", self.login_page)
        app.router.add_get("/NEAI/logineb.jsp", self.neai_form)
        app.router.add_route("*", "/NEAI/ImageValidate", self.image_validate)
        app.router.add_post("/NEAI/login2.do", self.submit)
        app.router.add_get("/iportal", self.iportal)
        self.runner = web.AppRunner(app)
        await self.runner.setup()
        self.site = web.TCPSite(self.runner, "127.0.0.1", 0)
        await self.site.start()
        self.base_url = "http://127.0.0.1:{}".format(self.site._server.sockets[0].getsockname()[1])
        return self

    async def __aexit__(self, *_exc):
        await self.runner.cleanup()


class NamFlowTest(unittest.IsolatedAsyncioTestCase):
    async def test_nam_handshake_derives_host_and_logs_in(self) -> None:
        async with _FakeNamServer() as server:
            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                client = tron_http.TronHttpClient(session, endpoints=server.endpoints())
                resolved = await login_flow.resolve_credential_form(client)
                self.assertEqual(resolved.kind, "nam")
                # SSO host derived from the page, not hardcoded.
                self.assertEqual(resolved.form.fields["vidcode"], server.validation_code)
                outcome = await login_flow.submit_credentials(client, resolved, "u", "p")
                self.assertTrue(outcome.has_session)

    async def test_nam_rejects_wrong_password(self) -> None:
        async with _FakeNamServer() as server:
            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                client = tron_http.TronHttpClient(session, endpoints=server.endpoints())
                resolved = await login_flow.resolve_credential_form(client)
                with self.assertRaises((tron_http.LoginRejectedError, tron_http.LoginPageChangedError)):
                    await login_flow.submit_credentials(client, resolved, "u", "wrong")


if __name__ == "__main__":
    unittest.main()


# --- merged from tests/test_login_messages.py ---
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


# --- merged from tests/test_login_url_candidates.py ---
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


# --- merged from tests/test_login_cookie_model.py ---
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


# --- merged from tests/_tron_http_trim.py ---
try:
    import aiohttp  # noqa: F401
except ModuleNotFoundError:
    fake_aiohttp = types.ModuleType("aiohttp")

    class DummyClientSession:
        pass

    class DummyClientResponse:
        pass

    class DummyClientError(Exception):
        pass

    class DummyContentTypeError(Exception):
        pass

    class DummyTCPConnector:
        def __init__(self, *args, **kwargs) -> None:
            self.args = args
            self.kwargs = kwargs

    async def dummy_request(*args, **kwargs):
        raise RuntimeError("aiohttp is unavailable in this offline unit-test environment")

    fake_aiohttp.ClientSession = DummyClientSession
    fake_aiohttp.ClientResponse = DummyClientResponse
    fake_aiohttp.ClientError = DummyClientError
    fake_aiohttp.ContentTypeError = DummyContentTypeError
    fake_aiohttp.TCPConnector = DummyTCPConnector
    fake_aiohttp.request = dummy_request
    sys.modules["aiohttp"] = fake_aiohttp

try:
    from aiohttp import web
except (ImportError, ModuleNotFoundError):  # pragma: no cover - aiohttp absent fallback
    web = None

try:
    from yarl import URL
except (ImportError, ModuleNotFoundError):  # pragma: no cover - aiohttp absent fallback
    URL = None

try:
    import yaml  # noqa: F401
except ModuleNotFoundError:
    fake_yaml = types.ModuleType("yaml")

    def safe_load(_stream):
        return {}

    def safe_dump(data, stream, **_kwargs):
        stream.write(str(data))

    fake_yaml.safe_load = safe_load
    fake_yaml.safe_dump = safe_dump
    sys.modules["yaml"] = fake_yaml



async def _resolve_form(client):
    return (await login_flow.resolve_credential_form(client)).form


async def _submit_plain(client, form, user, passwd):
    resolved = login_flow.ResolvedForm(kind="credential", form=form)
    return await login_flow.submit_credentials(client, resolved, user, passwd)


async def _submit_static_captcha(client, form):
    resolved = login_flow.ResolvedForm(
        kind="credential", form=form, captcha="static_image", captcha_field="captcha")
    return await login_flow.submit_credentials(client, resolved, "u", "p")

TEST_WORKSPACE_DIR = Path(__file__).resolve().parents[1]


def make_workspace_temp_dir() -> Path:
    root = TEST_WORKSPACE_DIR / ".tmp-tests"
    root.mkdir(exist_ok=True)
    path = root / hashlib.md5(os.urandom(16)).hexdigest()
    path.mkdir()
    return path


class FakeCookie:
    def __init__(self, key: str, domain: str, value: str = "cookie-value") -> None:
        self.key = key
        self._domain = domain
        self.value = value

    def __getitem__(self, item: str) -> str:
        if item == "domain":
            return self._domain
        raise KeyError(item)


class FakeCookieJar(list):
    def clear(self) -> None:
        del self[:]


def make_response(
    *,
    status: int = 200,
    url: str = "https://example.com",
    text: str = "",
    json_data=None,
    json_side_effect=None,
):
    response = MagicMock()
    response.status = status
    response.url = url
    response.read = AsyncMock(return_value=b"")
    response.text = AsyncMock(return_value=text)
    if json_side_effect is not None:
        response.json = AsyncMock(side_effect=json_side_effect)
    else:
        response.json = AsyncMock(return_value=json_data)
    return response


def make_context_manager(response):
    context_manager = MagicMock()
    context_manager.__aenter__ = AsyncMock(return_value=response)
    context_manager.__aexit__ = AsyncMock(return_value=None)
    return context_manager


def make_login_result(status: str, **kwargs):
    defaults = {"credential_source": "config", "user": "user1"}
    defaults.update(kwargs)
    return tron.LoginResult(status=status, **defaults)


class TronHttpClientTest(unittest.IsolatedAsyncioTestCase):
    async def test_fetch_login_form_parses_hidden_inputs(self) -> None:
        session = MagicMock()
        session.cookie_jar = FakeCookieJar()
        session.get.return_value = make_context_manager(
            make_response(
                # Relative form actions resolve against the FINAL URL after the
                # LMS /login -> IdP redirect, not the original login_url.
                url="https://tcidentity.thu.edu.tw/auth/realms/thu/protocol/cas/login",
                text="""
                <html>
                  <form class="form-horizontal" action="/auth/login?foo=1&amp;bar=2">
                    <input type="hidden" name="execution" value="abc123">
                    <input type="hidden" name="tab_id" value="tab-1">
                  </form>
                </html>
                """,
            )
        )
        client = tron_http.TronHttpClient(session)

        form = await _resolve_form(client)

        self.assertEqual(
            form.action_url,
            "https://tcidentity.thu.edu.tw/auth/login?foo=1&bar=2",
        )
        self.assertEqual(form.fields["execution"], "abc123")
        self.assertEqual(form.fields["tab_id"], "tab-1")

    def test_endpoints_carry_captcha_defaults_and_overrides(self) -> None:
        default_ep = tron_http.endpoints_from_provider({"base_url": "https://x.edu"})
        self.assertEqual(default_ep.captcha_image_name, "captcha.jpg")
        self.assertEqual(default_ep.captcha_field, "captcha")
        self.assertEqual(default_ep.captcha_charset, "0123456789")
        self.assertEqual(default_ep.captcha_length, 4)

        custom = tron_http.endpoints_from_provider(
            {
                "base_url": "https://y.edu",
                "captcha_image_name": "vcode.png",
                "captcha_field": "vcode",
                "captcha_charset": "abc123",
                "captcha_length": "5",  # config passes strings; must coerce to int
            }
        )
        self.assertEqual(custom.captcha_image_name, "vcode.png")
        self.assertEqual(custom.captcha_field, "vcode")
        self.assertEqual(custom.captcha_charset, "abc123")
        self.assertEqual(custom.captcha_length, 5)

    async def test_fetch_login_form_raises_when_action_missing(self) -> None:
        session = MagicMock()
        session.cookie_jar = FakeCookieJar()
        session.get.return_value = make_context_manager(
            make_response(text="<html><body>no login form</body></html>")
        )
        client = tron_http.TronHttpClient(session)

        with self.assertRaises(tron_http.LoginPageChangedError):
            await _resolve_form(client)

    async def test_submit_login_returns_outcome_on_success(self) -> None:
        session = MagicMock()
        session.cookie_jar = FakeCookieJar([FakeCookie("session", "ilearn.thu.edu.tw")])
        session.post.return_value = make_context_manager(
            make_response(url="https://ilearn.thu.edu.tw/home")
        )
        client = tron_http.TronHttpClient(session)
        form = tron_http.LoginForm(
            action_url="https://example.com/login",
            fields={"execution": "abc123"},
        )

        outcome = await _submit_plain(client, form, "user1", "pass1")

        self.assertEqual(outcome.final_url, "https://ilearn.thu.edu.tw/home")
        self.assertTrue(outcome.has_session)
        session.post.assert_called_once_with(
            "https://example.com/login",
            data={"execution": "abc123", "username": "user1", "password": "pass1"},
        )

    async def test_submit_login_raises_when_credentials_rejected(self) -> None:
        session = MagicMock()
        session.cookie_jar = FakeCookieJar()
        session.post.return_value = make_context_manager(
            make_response(url=tron_http.LOGIN_URL)
        )
        client = tron_http.TronHttpClient(session)
        form = tron_http.LoginForm(action_url="https://example.com/login", fields={})

        with self.assertRaises(tron_http.LoginRejectedError):
            await _submit_plain(client, form, "user1", "pass1")

    async def test_fetch_user_id_parses_app_runtime_user(self) -> None:
        session = MagicMock()
        session.cookie_jar = FakeCookieJar()
        session.get.return_value = make_context_manager(
            make_response(
                text='''<script>window.APPRuntime = {"USER": {"id": 238730}};</script>'''
            )
        )
        client = tron_http.TronHttpClient(session)

        user_id = await client.fetch_user_id()

        self.assertEqual(user_id, 238730)
        session.get.assert_called_once_with(tron_http.TRON)

    async def test_fetch_user_id_returns_none_when_app_runtime_missing(self) -> None:
        session = MagicMock()
        session.cookie_jar = FakeCookieJar()
        session.get.return_value = make_context_manager(
            make_response(text="<html><body>home</body></html>")
        )
        client = tron_http.TronHttpClient(session)

        user_id = await client.fetch_user_id()

        self.assertIsNone(user_id)

    async def test_client_accepts_custom_provider_endpoints(self) -> None:
        session = MagicMock()
        session.cookie_jar = FakeCookieJar([FakeCookie("session", "school.example")])
        session.get.return_value = make_context_manager(
            make_response(
                text='''<script>window.APPRuntime = {"USER": {"id": 123}};</script>'''
            )
        )
        endpoints = tron_http.endpoints_from_provider(
            {
                "base_url": "https://school.example",
                "login_url": "https://identity.example/login",
                "rollcalls_url": "https://school.example/api/rollcalls",
            }
        )
        client = tron_http.TronHttpClient(session, endpoints=endpoints)

        user_id = await client.fetch_user_id()

        self.assertEqual(user_id, 123)
        self.assertEqual(endpoints.session_cookie_domain, "school.example")
        self.assertTrue(tron_http.has_session_cookie(session, "school.example"))
        self.assertFalse(tron_http.has_session_cookie(session, "ilearn.thu.edu.tw"))
        session.get.assert_called_once_with("https://school.example")

    async def test_public_cloud_login_view_builds_email_form(self) -> None:
        session = MagicMock()
        session.cookie_jar = FakeCookieJar()
        html = """
        <html>
          <login-view
            email-login-hidden-tag='<input id="next" name="next" type="hidden" value="/user/index">'
            :email-login-form='{"captcha_code": "", "email": "", "next": null, "org_id": "", "password": "", "remember": false, "submit": false}'
            :org-id='0'
          ></login-view>
        </html>
        """
        session.get.return_value = make_context_manager(
            make_response(url="https://www.tronclass.com.tw/login", text=html)
        )
        endpoints = tron_http.endpoints_from_provider(tron.get_provider("tronclass").to_config())
        client = tron_http.TronHttpClient(session, endpoints=endpoints)

        form = await _resolve_form(client)

        self.assertEqual(form.action_url, "https://www.tronclass.com.tw/login?next=%2Fuser%2Findex&login=email")
        self.assertEqual(form.username_field, "email")
        self.assertEqual(form.fields["next"], "/user/index")
        self.assertEqual(form.fields["org_id"], "")
        self.assertEqual(form.fields["submit"], "login")

    async def test_public_cloud_submit_uses_email_field(self) -> None:
        session = MagicMock()
        session.cookie_jar = FakeCookieJar([FakeCookie("session", "www.tronclass.com.tw")])
        session.post.return_value = make_context_manager(
            make_response(url="https://www.tronclass.com.tw/user/index")
        )
        endpoints = tron_http.endpoints_from_provider(tron.get_provider("tronclass").to_config())
        client = tron_http.TronHttpClient(session, endpoints=endpoints)
        form = tron_http.LoginForm(
            action_url="https://www.tronclass.com.tw/login?login=email",
            fields={"next": "", "org_id": "", "submit": "login"},
            username_field="email",
        )

        outcome = await _submit_plain(client, form, "student@example.com", "pass1")

        self.assertTrue(outcome.has_session)
        session.post.assert_called_once_with(
            "https://www.tronclass.com.tw/login?login=email",
            data={
                "next": "",
                "org_id": "",
                "submit": "login",
                "email": "student@example.com",
                "password": "pass1",
            },
        )

    async def test_fetch_rollcalls_raises_on_unauthorized_status(self) -> None:
        session = MagicMock()
        session.cookie_jar = FakeCookieJar()
        session.get.return_value = make_context_manager(
            make_response(status=401, url=tron_http.ROLLCALLS_URL)
        )
        client = tron_http.TronHttpClient(session)

        with self.assertRaises(tron_http.UnauthorizedError):
            await client.fetch_rollcalls()

    async def test_fetch_rollcalls_raises_on_login_redirect(self) -> None:
        session = MagicMock()
        session.cookie_jar = FakeCookieJar()
        session.get.return_value = make_context_manager(
            make_response(status=200, url=tron_http.LOGIN_URL)
        )
        client = tron_http.TronHttpClient(session)

        with self.assertRaises(tron_http.UnauthorizedError):
            await client.fetch_rollcalls()

    async def test_fetch_rollcalls_raises_on_non_200(self) -> None:
        session = MagicMock()
        session.cookie_jar = FakeCookieJar()
        session.get.return_value = make_context_manager(
            make_response(status=500, url=tron_http.ROLLCALLS_URL, text="server error")
        )
        client = tron_http.TronHttpClient(session)

        with self.assertRaises(tron_http.UnexpectedResponseError):
            await client.fetch_rollcalls()

    async def test_fetch_rollcalls_raises_on_invalid_json(self) -> None:
        session = MagicMock()
        session.cookie_jar = FakeCookieJar()
        session.get.return_value = make_context_manager(
            make_response(
                status=200,
                url=tron_http.ROLLCALLS_URL,
                text="<html>not json</html>",
                json_side_effect=ValueError("bad json"),
            )
        )
        client = tron_http.TronHttpClient(session)

        with self.assertRaises(tron_http.UnexpectedResponseError):
            await client.fetch_rollcalls()








FJU_FAIL_FORM_HTML = (
    '<form id="fm1" action="/cas/login;jsessionid=B?service=x" method="post">'
    '<input name="username" value="">'
    '<input name="password" value="">'
    '<input name="captcha" value="">'
    '<input type="hidden" name="lt" value="LT-2">'
    '<input type="hidden" name="execution" value="e1s1">'
    '<input type="hidden" name="_eventId" value="submit">'
    "</form>"
)




if __name__ == "__main__":
    unittest.main()

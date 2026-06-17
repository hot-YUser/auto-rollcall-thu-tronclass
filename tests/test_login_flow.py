"""Offline tests for the unified login flow (troTHU/login_flow.py).

Pure detector tests run with no network. The NAM handshake is exercised against a
local aiohttp fake that emits the real NetIQ Access Manager bootstrap structure, so
the SSO host is *derived from the page* exactly as on the live server.
"""
from __future__ import annotations

import unittest

import aiohttp

try:
    from aiohttp import web
except Exception:  # pragma: no cover
    web = None

from troTHU import login_flow, tron_http


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

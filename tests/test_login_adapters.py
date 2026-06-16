import unittest
from troTHU.login_adapters import (
    get_login_adapter,
    CasLoginAdapter,
    CasApiValidatedLoginAdapter,
    KeycloakOcrCaptchaLoginAdapter,
    SsoFormLoginAdapter,
    parse_login_settings,
    pick_login_settings_url,
    detect_sso_form,
    find_captcha_source,
    _follow_js_autosubmit,
    TkuSsoLoginAdapter,
    PublicCloudEmailLoginAdapter,
    ManualCookieLoginAdapter,
    InteractiveBrowserLoginAdapter,
    FjuOcrLoginAdapter,
)

class LoginAdaptersTest(unittest.TestCase):
    def test_mappings(self) -> None:
        self.assertIsInstance(get_login_adapter("thu_cas"), CasLoginAdapter)
        self.assertIsInstance(get_login_adapter("cas_api_validated"), CasApiValidatedLoginAdapter)
        self.assertIsInstance(get_login_adapter("tku_sso_browser"), TkuSsoLoginAdapter)
        self.assertIsInstance(get_login_adapter("public_cloud_email"), PublicCloudEmailLoginAdapter)
        self.assertIsInstance(get_login_adapter("manual_cookie_only"), ManualCookieLoginAdapter)
        self.assertIsInstance(get_login_adapter("interactive_browser"), InteractiveBrowserLoginAdapter)
        self.assertIsInstance(get_login_adapter("fju_ocr_captcha"), FjuOcrLoginAdapter)
        self.assertIsInstance(get_login_adapter("cas_ocr_captcha"), FjuOcrLoginAdapter)
        self.assertIsInstance(get_login_adapter("keycloak_ocr_captcha"), KeycloakOcrCaptchaLoginAdapter)
        self.assertIsInstance(get_login_adapter("cas_login_settings"), SsoFormLoginAdapter)

    def test_unknown_flow_falls_back_to_cas(self) -> None:
        self.assertIsInstance(get_login_adapter("unknown_flow"), CasLoginAdapter)
        self.assertIsInstance(get_login_adapter(""), CasLoginAdapter)
        self.assertIsInstance(get_login_adapter(None), CasLoginAdapter)

    def test_adapter_flags(self) -> None:
        cas = get_login_adapter("thu_cas")
        self.assertEqual(cas.auth_flow, "thu_cas")
        self.assertFalse(cas.prefers_browser_assisted_login)
        self.assertFalse(cas.requires_api_session_validation)
        self.assertFalse(cas.requires_manual_cookie_login)
        self.assertTrue(cas.requires_password)

        cas_validated = get_login_adapter("cas_api_validated")
        self.assertEqual(cas_validated.auth_flow, "cas_api_validated")
        self.assertFalse(cas_validated.prefers_browser_assisted_login)
        self.assertTrue(cas_validated.requires_api_session_validation)
        self.assertFalse(cas_validated.requires_manual_cookie_login)
        self.assertTrue(cas_validated.requires_password)

        kc = get_login_adapter("keycloak_ocr_captcha")
        self.assertEqual(kc.auth_flow, "keycloak_ocr_captcha")
        self.assertTrue(kc.requires_api_session_validation)
        self.assertFalse(kc.requires_manual_cookie_login)
        self.assertTrue(kc.requires_password)

        tku = get_login_adapter("tku_sso_browser")
        self.assertEqual(tku.auth_flow, "tku_sso_browser")
        self.assertFalse(tku.prefers_browser_assisted_login)
        self.assertTrue(tku.requires_api_session_validation)
        self.assertFalse(tku.requires_manual_cookie_login)
        self.assertTrue(tku.requires_password)

        cloud = get_login_adapter("public_cloud_email")
        self.assertEqual(cloud.auth_flow, "public_cloud_email")
        self.assertFalse(cloud.prefers_browser_assisted_login)
        self.assertTrue(cloud.requires_api_session_validation)
        self.assertFalse(cloud.requires_manual_cookie_login)
        self.assertTrue(cloud.requires_password)

        manual = get_login_adapter("manual_cookie_only")
        self.assertEqual(manual.auth_flow, "manual_cookie_only")
        self.assertFalse(manual.prefers_browser_assisted_login)
        self.assertTrue(manual.requires_api_session_validation)
        self.assertTrue(manual.requires_manual_cookie_login)
        self.assertFalse(manual.requires_password)

        ib = get_login_adapter("interactive_browser")
        self.assertEqual(ib.auth_flow, "interactive_browser")
        self.assertFalse(ib.prefers_browser_assisted_login)
        self.assertTrue(ib.requires_api_session_validation)
        self.assertFalse(ib.requires_manual_cookie_login)
        self.assertFalse(ib.requires_password)

        fju = get_login_adapter("fju_ocr_captcha")
        self.assertEqual(fju.auth_flow, "fju_ocr_captcha")
        self.assertFalse(fju.prefers_browser_assisted_login)
        self.assertTrue(fju.requires_api_session_validation)
        self.assertFalse(fju.requires_manual_cookie_login)
        self.assertTrue(fju.requires_password)

    def test_manual_cookie_adapter_degrades_gracefully(self) -> None:
        import asyncio
        from troTHU.tron_http import LoginPageChangedError
        manual = get_login_adapter("manual_cookie_only")
        with self.assertRaises(LoginPageChangedError):
            asyncio.run(manual.fetch_login_form(None))
        with self.assertRaises(LoginPageChangedError):
            asyncio.run(manual.submit_login(None, None, "u", "p"))

    def test_interactive_browser_adapter_degrades_gracefully(self) -> None:
        import asyncio
        from troTHU.tron_http import LoginPageChangedError
        ib = get_login_adapter("interactive_browser")
        with self.assertRaises(LoginPageChangedError):
            asyncio.run(ib.fetch_login_form(None))
        with self.assertRaises(LoginPageChangedError):
            asyncio.run(ib.submit_login(None, None, "u", "p"))


class KeycloakCaptchaHelperTest(unittest.TestCase):
    def test_captcha_url_derivation(self) -> None:
        from troTHU.login_adapters import _keycloak_captcha_url
        # login-actions form action -> realm captcha endpoint (with /auth prefix)
        self.assertEqual(
            _keycloak_captcha_url(
                "https://tcidentity.asia.edu.tw/auth/realms/asia/login-actions/authenticate?execution=x"
            ),
            "https://tcidentity.asia.edu.tw/auth/realms/asia/captcha/code",
        )
        # newer Keycloak without /auth prefix
        self.assertEqual(
            _keycloak_captcha_url("https://id.example.edu/realms/foo/login-actions/authenticate?e=1"),
            "https://id.example.edu/realms/foo/captcha/code",
        )
        # non-Keycloak action -> empty (caller raises)
        self.assertEqual(_keycloak_captcha_url("https://x.edu/cas/login"), "")

    def test_fetch_keycloak_captcha_parses_data_uri(self) -> None:
        import asyncio
        import base64
        from unittest.mock import MagicMock, AsyncMock
        from troTHU.login_adapters import _fetch_keycloak_captcha

        png = base64.b64encode(b"\x89PNG\r\n\x1a\nFAKEIMAGEDATA").decode()
        resp = MagicMock()
        resp.status = 200
        resp.json = AsyncMock(return_value={"image": "data:image/png;base64," + png, "key": "uuid-123"})
        cm = MagicMock()
        cm.__aenter__ = AsyncMock(return_value=resp)
        cm.__aexit__ = AsyncMock(return_value=None)
        client = MagicMock()
        client.session.get.return_value = cm
        client.request_kwargs.return_value = {}

        image_bytes, key = asyncio.run(_fetch_keycloak_captcha(client, "https://x/realms/r/captcha/code"))
        self.assertTrue(image_bytes.startswith(b"\x89PNG"))
        self.assertEqual(key, "uuid-123")


class LoginSettingsHelperTest(unittest.TestCase):
    def test_parse_login_settings_json_and_python_dict(self) -> None:
        # double-quoted JSON (most schools)
        js = ('var x={"loginSettings": [{"url":"https://id/realms/a/protocol/cas/login?'
              'service=https://lms/&kc_idp_hint=oauth2-client","title":"A"},'
              '{"url":"https://lms/user/index","title":"B"}]};')
        self.assertEqual(len(parse_login_settings(js)), 2)
        # single-quoted python-dict (e.g. CityU)
        sq = ("\"loginSettings\": [{'url': 'https://id/realms/c/protocol/cas/login?"
              "service=https://lms/&kc_idp_hint=oauth2-client', 'title': '登入'}]")
        self.assertEqual(len(parse_login_settings(sq)), 1)
        self.assertEqual(parse_login_settings("<html>no settings here</html>"), [])

    def test_pick_login_settings_url_prefers_kc_idp_hint(self) -> None:
        two = [
            {"url": "https://id/realms/a/protocol/cas/login?service=https://lms/&kc_idp_hint=oauth2-client"},
            {"url": "https://lms/user/index"},
        ]
        self.assertIn("kc_idp_hint=oauth2-client", pick_login_settings_url(two))
        one = [{"url": "https://id/realms/c/protocol/cas/login?service=https://lms/&kc_idp_hint=oauth2-client"}]
        self.assertIn("kc_idp_hint", pick_login_settings_url(one))
        self.assertIsNone(pick_login_settings_url([{"url": "https://lms/login"}]))
        self.assertIsNone(pick_login_settings_url([]))

    def test_detect_sso_form_dynamic_field_names(self) -> None:
        lhu = ('<form action="openidConnectServerLogin.do">'
               '<input type="hidden" name="state" value="z">'
               '<input type="text" name="muid"><input type="password" name="mpassword">'
               '<input type="text" name="authcode" maxlength="4"><input type="submit" name="submit"></form>')
        d = detect_sso_form(lhu)
        self.assertEqual((d["username_field"], d["password_field"], d["captcha_field"]), ("muid", "mpassword", "authcode"))
        ncut = ('<form action=""><input type="hidden" name="loginCheck">'
                '<input type="text" name="login_name"><input type="password" name="password">'
                '<input type="text" name="verify_code"></form>')
        d = detect_sso_form(ncut)
        self.assertEqual((d["username_field"], d["password_field"], d["captcha_field"]), ("login_name", "password", "verify_code"))
        yun = ('<form action="/YuntechSSO/Account/Login"><input type="hidden" name="__RequestVerificationToken" value="t">'
               '<input type="text" name="pLoginName"><input type="password" name="pLoginPassword">'
               '<input type="text" name="pSecretString" id="ValidationCode" maxlength="4"></form>')
        d = detect_sso_form(yun)
        self.assertEqual((d["username_field"], d["password_field"], d["captcha_field"]), ("pLoginName", "pLoginPassword", "pSecretString"))
        # NetIQ NAM credential form (reached after following the JS bootstrap)
        nam = ('<form id="IDPLogin" action="/nidp/app/login?sid=1&sid=1">'
               '<input type="text" name="Ecom_User_ID"><input type="password" name="Ecom_Password">'
               '<input type="hidden" name="STS" value="tok-123"></form>')
        d = detect_sso_form(nam)
        self.assertEqual((d["username_field"], d["password_field"], d["captcha_field"]),
                         ("Ecom_User_ID", "Ecom_Password", None))
        self.assertEqual(d["fields"]["STS"], "tok-123")
        # empty JS-bootstrap form (no inputs) → None (must be followed first)
        self.assertIsNone(detect_sso_form('<form action="/nidp/app/login"></form>'))

    def test_follow_js_autosubmit_reaches_credential_form(self) -> None:
        import asyncio
        from unittest.mock import MagicMock, AsyncMock
        bootstrap = ('<html><body><form method="POST" action="/nidp/app/login?sid=0"></form>'
                     '<script>document.forms[0].submit();</script></body></html>')
        credential = ('<form id="IDPLogin" action="/nidp/app/login?sid=1">'
                      '<input type="text" name="Ecom_User_ID"><input type="password" name="Ecom_Password"></form>')
        resp = MagicMock()
        resp.text = AsyncMock(return_value=credential)
        resp.url = "https://nam.ncue.edu.tw/nidp/app/login?sid=0"
        cm = MagicMock()
        cm.__aenter__ = AsyncMock(return_value=resp)
        cm.__aexit__ = AsyncMock(return_value=None)
        client = MagicMock()
        client.session.post.return_value = cm
        client.request_kwargs.return_value = {}

        html, url = asyncio.run(_follow_js_autosubmit(client, bootstrap, "https://nam.ncue.edu.tw/start"))
        self.assertIn("Ecom_Password", html)  # followed the bootstrap to the credential form
        self.assertEqual(client.session.post.call_count, 1)
        # a page with no auto-submit script is returned unchanged (no POST)
        client.session.post.reset_mock()
        html2, _ = asyncio.run(_follow_js_autosubmit(client, "<html>plain</html>", "https://x/"))
        self.assertEqual(html2, "<html>plain</html>")
        self.assertEqual(client.session.post.call_count, 0)

    def test_find_captcha_source_static_and_js(self) -> None:
        lhu = '<img src="dac/logo.png"><img src="dacAuthImage.do?r=1&w=100"><img src="redo.png">'
        self.assertEqual(find_captcha_source(lhu, "https://eportal.lhu.edu.tw/login"),
                         "https://eportal.lhu.edu.tw/dacAuthImage.do?r=1&w=100")
        ncut = '<img src="/login_page.php?action=getCode&from=login">'
        self.assertEqual(find_captcha_source(ncut, "https://sso.ncut.edu.tw/"),
                         "https://sso.ncut.edu.tw/login_page.php?action=getCode&from=login")
        yun = '<img id="NumberCaptcha" class="captcha-img" /><script>var R=()=>$.ajax({url:"/YuntechSSO/Captcha/Number"})</script>'
        self.assertEqual(find_captcha_source(yun, "https://webapp.yuntech.edu.tw/x"),
                         "https://webapp.yuntech.edu.tw/YuntechSSO/Captcha/Number")
        self.assertIsNone(find_captcha_source('<img src="/logo.png">', "https://x/"))


class AuthPredicateBackCompatTest(unittest.TestCase):
    """browser_sso / oidc_browser / sso_browser have no dedicated adapter, so the
    adapter-derived auth predicates must still honour the legacy auth-flow sets
    (regression guard for the back-compat union)."""

    def _predicate_with_flow(self, auth_flow: str, fn_name: str) -> bool:
        import copy
        import troTHU.tron as tron
        original = copy.deepcopy(tron.CONFIG)
        try:
            tron.CONFIG["provider"] = {
                "current": "x",
                "available": {"x": {"base_url": "https://x.example.edu", "auth_flow": auth_flow}},
            }
            return getattr(tron, fn_name)()
        finally:
            tron.CONFIG.clear()
            tron.CONFIG.update(original)

    def test_legacy_browser_flows_still_prefer_browser_and_validate(self) -> None:
        for flow in ("browser_sso", "oidc_browser", "sso_browser"):
            self.assertTrue(self._predicate_with_flow(flow, "provider_prefers_browser_assisted_login"), flow)
            self.assertTrue(self._predicate_with_flow(flow, "provider_requires_api_session_validation"), flow)

    def test_thu_cas_does_not_prefer_browser(self) -> None:
        self.assertFalse(self._predicate_with_flow("thu_cas", "provider_prefers_browser_assisted_login"))

    def test_fju_ocr_flow_falls_back_to_manual_cookie_only_without_ddddocr(self) -> None:
        import unittest.mock as mock
        import troTHU.tron as tron
        with mock.patch.object(tron, "ddddocr_available", return_value=False):
            self.assertTrue(
                self._predicate_with_flow("fju_ocr_captcha", "provider_requires_manual_cookie_login")
            )
        with mock.patch.object(tron, "ddddocr_available", return_value=True):
            self.assertFalse(
                self._predicate_with_flow("fju_ocr_captcha", "provider_requires_manual_cookie_login")
            )

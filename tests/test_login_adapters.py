import unittest
from troTHU.login_adapters import (
    get_login_adapter,
    CasLoginAdapter,
    CasApiValidatedLoginAdapter,
    KeycloakOcrCaptchaLoginAdapter,
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

import unittest
from troTHU.login_adapters import (
    get_login_adapter,
    login_adapters_by_flow,
    LoginAdapter,
    CasLoginAdapter,
    TkuSsoLoginAdapter,
    PublicCloudEmailLoginAdapter,
    ManualCookieLoginAdapter,
)

class LoginAdaptersTest(unittest.TestCase):
    def test_mappings(self) -> None:
        self.assertIsInstance(get_login_adapter("thu_cas"), CasLoginAdapter)
        self.assertIsInstance(get_login_adapter("tku_sso_browser"), TkuSsoLoginAdapter)
        self.assertIsInstance(get_login_adapter("public_cloud_email"), PublicCloudEmailLoginAdapter)
        self.assertIsInstance(get_login_adapter("manual_cookie_only"), ManualCookieLoginAdapter)

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

        tku = get_login_adapter("tku_sso_browser")
        self.assertEqual(tku.auth_flow, "tku_sso_browser")
        self.assertTrue(tku.prefers_browser_assisted_login)
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

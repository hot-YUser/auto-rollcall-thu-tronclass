"""Anti-privilege ratchet: enforce that login is unified and dispatched by feature/
protocol, never by school. This test fails if a future change reintroduces school-named
dispatch — the exact regression this refactor removed.
"""
from __future__ import annotations

import io
import tokenize
import unittest
from pathlib import Path

import troTHU.providers as providers

ROOT = Path(__file__).resolve().parent.parent / "troTHU"
SCHOOL_KEYS = ("thu", "tku", "fju", "scu")
# Protocol/feature auth_flow vocabulary (no school names). Legacy aliases are accepted
# in user configs but must NOT be the value any built-in provider ships with.
ALLOWED_AUTH_FLOWS = {
    "cas", "cas_ocr_captcha", "keycloak_ocr_captcha", "public_cloud_email",
    "nam_neai", "manual_cookie_only", "interactive_browser", "",
    # Legacy-but-protocol-named values still shipped by the bulk table (treated as `cas`
    # by the flow; no school names, so compliant). The flow dispatches on detected
    # features regardless of this value.
    "cas_api_validated", "cas_login_settings",
}


class NoSchoolPrivilegeTest(unittest.TestCase):
    def test_no_provider_ships_a_school_named_auth_flow(self) -> None:
        for provider in providers.list_all_providers():
            flow = (provider.auth_flow or "").lower()
            self.assertIn(
                flow, ALLOWED_AUTH_FLOWS,
                "provider {!r} ships auth_flow {!r}; use a protocol/feature name".format(provider.key, flow),
            )
            for key in SCHOOL_KEYS:
                self.assertNotIn(
                    key, flow,
                    "provider {!r} auth_flow {!r} contains school key {!r}".format(provider.key, flow, key),
                )

    def test_login_flow_has_no_school_named_identifiers(self) -> None:
        # NAME tokens only — comments and docstrings may mention THU/FJU/TKU as examples,
        # but no function/class/variable/attribute may be named after a school.
        source = (ROOT / "login_flow.py").read_text(encoding="utf-8")
        offenders = []
        for tok in tokenize.generate_tokens(io.StringIO(source).readline):
            if tok.type == tokenize.NAME:
                low = tok.string.lower()
                for key in SCHOOL_KEYS:
                    if key in low.split("_") or low == key:
                        offenders.append((tok.start[0], tok.string))
        self.assertEqual(offenders, [], "school-named identifiers in login_flow.py: {}".format(offenders))

    def test_deleted_school_specific_machinery_is_gone(self) -> None:
        # The per-school adapter layer and hardcoded school constants must stay deleted.
        banned = {
            "login_flow.py": ("TKU_SSO_HOST", "PUBLIC_CLOUD_HOSTS", "FJU_CAPTCHA_", "get_login_adapter"),
            "tron_http.py": ("TKU_SSO_HOST", "TKU_ICLASS_HOST", "PUBLIC_CLOUD_HOSTS", "FJU_CAPTCHA_",
                             "_select_login_adapter", "is_tku_fast_sso"),
            "auth_runtime.py": ("get_login_adapter", "import troTHU.login_adapters"),
        }
        for filename, needles in banned.items():
            text = (ROOT / filename).read_text(encoding="utf-8")
            for needle in needles:
                self.assertNotIn(needle, text, "{} still references {!r}".format(filename, needle))
        self.assertFalse((ROOT / "login_adapters.py").exists(), "login_adapters.py should be deleted")

    def test_login_adapters_module_is_not_importable(self) -> None:
        with self.assertRaises(ImportError):
            __import__("troTHU.login_adapters")

    def test_config_view_provider_check_is_registry_driven(self) -> None:
        # The old buggy hardcoded {"thu","fju","tku","tronclass"} set (which omitted scu
        # and all 32 bulk schools) must be gone in favour of a registry lookup.
        text = (ROOT / "config_view.py").read_text(encoding="utf-8")
        self.assertNotIn('{"thu", "fju", "tku", "tronclass"}', text)
        self.assertIn("list_all_providers", text)


if __name__ == "__main__":
    unittest.main()

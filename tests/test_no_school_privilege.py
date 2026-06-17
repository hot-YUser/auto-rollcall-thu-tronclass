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


class NoSchoolPrivilegeTest(unittest.TestCase):
    def test_providers_ship_one_uniform_auth_flow(self) -> None:
        # Stronger than "no school NAME in auth_flow": there must be NO per-school auth_flow
        # at all. Every built-in provider ships the single uniform value — login is
        # feature-detected at runtime, never picked by a registry flow.
        flows = {(p.auth_flow or "").lower() for p in providers.list_all_providers()}
        self.assertEqual(
            flows, {"auto"},
            "built-in providers must all ship the uniform auth_flow 'auto'; got {}".format(sorted(flows)),
        )

    def test_no_provider_overrides_login_url(self) -> None:
        # login_url must derive from base_url for EVERY provider (no per-school override,
        # including NOU's old /cas/login). Schools whose form lives at /cas/login are reached
        # by login_flow's runtime candidate probing, not a registry override.
        for p in providers.list_all_providers():
            self.assertEqual(
                p.login_url, p.base_url.rstrip("/") + "/login",
                "provider {!r} overrides login_url ({!r}); derive it from base_url".format(p.key, p.login_url),
            )

    def test_bulk_school_rows_carry_no_url_or_flow(self) -> None:
        # The bulk table is (key, label, base_url) only — structurally impossible to slip a
        # per-school login_url or auth_flow back in.
        for row in providers._TRONCLASS_SCHOOLS:
            self.assertEqual(len(row), 3, "bulk school row must be (key, label, base_url): {!r}".format(row))

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

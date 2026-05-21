import copy
import json
import unittest

from troTHU import tron
from troTHU.provider_verification import (
    build_provider_fixture_template,
    build_provider_verification_checklist,
    summarize_provider_verification,
    validate_provider_fixture,
)


class ProviderVerificationTest(unittest.TestCase):
    def test_fju_tku_checklist_contains_required_steps(self) -> None:
        for provider in ("fju", "tku"):
            checklist = build_provider_verification_checklist(provider)
            endpoint_types = {step["endpoint_type"] for step in checklist["steps"]}

            self.assertEqual(checklist["provider"], provider)
            self.assertEqual(checklist["support_level"], "ready")
            self.assertTrue(checklist["daily_ready_after_this"])
            self.assertIn(checklist["verification"], {"unverified", "account_pending"})
            self.assertTrue({"login", "session", "current_semester", "courses", "rollcalls", "qr", "radar"}.issubset(endpoint_types))

    def test_fixture_template_is_synthetic_and_safe(self) -> None:
        template = build_provider_fixture_template("fju")
        encoded = json.dumps(template, ensure_ascii=False).lower()

        self.assertEqual(template["version"], "provider-fixture-v1")
        self.assertEqual(template["provider"], "fju")
        self.assertEqual(template["source"], "synthetic_sanitized_template")
        for forbidden in ("password", "token", "cookie=", "secret", "raw response", "raw payload", "number code"):
            self.assertNotIn(forbidden, encoded)

    def test_validate_provider_fixture_accepts_sanitized_template(self) -> None:
        template = build_provider_fixture_template("tku")
        for record in template["records"]:
            record["status"] = "ok"
            record["http_status"] = 200
            record["field_names"] = ["id", "type", "status"]

        result = validate_provider_fixture(template, provider="tku")

        self.assertTrue(result["ok"])
        self.assertEqual(result["status"], "fixture_valid")
        self.assertEqual(result["provider"], "tku")
        self.assertEqual(result["errors"], [])

    def test_validate_provider_fixture_rejects_sensitive_shapes(self) -> None:
        fixture = build_provider_fixture_template("fju")
        fixture["records"][0]["raw_body"] = "{\"token\":\"secret-token\"}"
        fixture["records"][1]["number_code"] = "1234"

        result = validate_provider_fixture(fixture, provider="fju")
        encoded = json.dumps(result, ensure_ascii=False)

        self.assertFalse(result["ok"])
        self.assertEqual(result["status"], "fixture_invalid")
        self.assertIn("sensitive_key:records[0].raw_body", result["errors"])
        self.assertIn("sensitive_key:records[1].number_code", result["errors"])
        self.assertNotIn("secret-token", encoded)

    def test_summary_does_not_change_daily_ready(self) -> None:
        fixture = build_provider_fixture_template("fju")
        for record in fixture["records"]:
            record["status"] = "ok"
        summary = summarize_provider_verification("fju", fixture=fixture)

        self.assertEqual(summary["status"], "fixture_valid")
        self.assertTrue(summary["daily_ready_after_this"])
        self.assertTrue(summary["fixture_valid"])

    def test_provider_show_and_doctor_include_verification_summary(self) -> None:
        original_config = copy.deepcopy(tron.CONFIG)
        try:
            tron.CONFIG.clear()
            tron.CONFIG.update(tron.normalize_config({"provider": {"current": "fju"}}))
            show = []
            doctor = []
            with unittest.mock.patch.object(tron, "bootstrap_config"), unittest.mock.patch("builtins.print", side_effect=show.append):
                show_result = tron.main(["provider", "show", "fju", "--json"])
            with unittest.mock.patch.object(tron, "bootstrap_config"), unittest.mock.patch("builtins.print", side_effect=doctor.append):
                doctor_result = tron.main(["doctor", "--json"])
        finally:
            tron.CONFIG.clear()
            tron.CONFIG.update(original_config)

        self.assertEqual(show_result, 0)
        self.assertEqual(doctor_result, 0)
        self.assertEqual(json.loads(show[0])["verification"]["status"], "unverified")
        self.assertEqual(json.loads(show[0])["internal"]["verification"]["verification"], "unverified")
        self.assertEqual(json.loads(doctor[0])["provider"]["verification"]["status"], "unverified")
        self.assertEqual(json.loads(doctor[0])["internal"]["provider_verification"]["verification"]["verification"], "unverified")


if __name__ == "__main__":
    unittest.main()

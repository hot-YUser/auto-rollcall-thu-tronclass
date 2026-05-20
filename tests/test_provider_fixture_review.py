import json
import tempfile
import unittest
from pathlib import Path

from troTHU import tron
from troTHU.provider_fixture_review import (
    build_provider_fixture_review,
    build_provider_fixture_review_template,
    review_provider_fixture_dir,
    review_provider_fixture_file,
)
from troTHU.provider_verification import build_provider_fixture_template


def valid_fixture(provider="fju"):
    fixture = build_provider_fixture_template(provider)
    for record in fixture["records"]:
        record["status"] = "unsupported" if record["endpoint_type"] == "radar" else "ok"
        record["http_status"] = 0 if record["endpoint_type"] == "radar" else 200
        record["field_names"] = ["id", "status"]
    for key in fixture["manual_acceptance"]:
        fixture["manual_acceptance"][key] = key != "radar_verified"
    return fixture


class ProviderFixtureReviewTest(unittest.TestCase):
    def test_review_template_is_synthetic_and_safe(self) -> None:
        template = build_provider_fixture_review_template("fju")
        encoded = json.dumps(template, ensure_ascii=False).lower()

        self.assertEqual(template["review_version"], "provider-fixture-review-v1")
        self.assertEqual(template["provider"], "fju")
        for forbidden in ("password", "token", "cookie=", "raw response", "raw payload", "number code"):
            self.assertNotIn(forbidden, encoded)

    def test_valid_fixture_is_candidate_but_not_daily_ready(self) -> None:
        report = build_provider_fixture_review("fju", fixture=valid_fixture("fju"))

        self.assertEqual(report["status"], "candidate_ready_for_human_review")
        self.assertTrue(report["candidate_ready_for_human_review"])
        self.assertFalse(report["daily_ready_after_review"])
        self.assertFalse(report["promotes_provider"])

    def test_missing_manual_acceptance_blocks_review(self) -> None:
        fixture = valid_fixture("tku")
        fixture["manual_acceptance"]["qr_verified"] = False

        report = build_provider_fixture_review("tku", fixture=fixture)

        self.assertEqual(report["status"], "blocked")
        self.assertIn("acceptance_missing:qr_verified", report["blockers"])

    def test_unsafe_fixture_is_rejected_and_redacted(self) -> None:
        fixture = valid_fixture("fju")
        fixture["records"][0]["raw_body"] = '{"token":"secret-token"}'
        fixture["records"][1]["number_code"] = "1234"

        report = build_provider_fixture_review("fju", fixture=fixture)
        encoded = json.dumps(report, ensure_ascii=False)

        self.assertEqual(report["status"], "blocked")
        self.assertIn("fixture_invalid", report["blockers"])
        self.assertTrue(report["sanitizer_findings"])
        self.assertNotIn("secret-token", encoded)

    def test_review_file_and_directory(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            path = Path(temp_dir) / "fju.json"
            path.write_text(json.dumps(valid_fixture("fju")), encoding="utf-8")
            one = review_provider_fixture_file(path, provider="fju")
            many = review_provider_fixture_dir(temp_dir)

        self.assertEqual(one["status"], "candidate_ready_for_human_review")
        self.assertEqual(many["count"], 1)
        self.assertEqual(many["candidate_count"], 1)

    def test_provider_show_and_doctor_include_fixture_review(self) -> None:
        original_config = json.loads(json.dumps(tron.CONFIG))
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
        self.assertEqual(json.loads(show[0])["fixture_review"]["status"], "not_reviewed")
        self.assertEqual(json.loads(doctor[0])["provider"]["fixture_review"]["status"], "not_reviewed")


if __name__ == "__main__":
    unittest.main()

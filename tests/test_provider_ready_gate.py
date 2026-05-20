import copy
import json
import tempfile
import unittest
from pathlib import Path

from troTHU import tron
from troTHU.provider_ready_gate import (
    build_provider_ready_acceptance_template,
    build_provider_ready_gate,
    format_provider_ready_gate,
)
from troTHU.provider_verification import build_provider_fixture_template


def accepted_fixture(provider: str = "fju") -> dict:
    fixture = build_provider_fixture_template(provider)
    fixture["manual_acceptance"] = {
        "login_verified": True,
        "session_verified": True,
        "courses_verified": True,
        "rollcalls_verified": True,
        "qr_verified": True,
        "radar_verified": False,
    }
    for record in fixture["records"]:
        record["status"] = "unsupported" if record["endpoint_type"] == "radar" else "ok"
        record["http_status"] = 0 if record["endpoint_type"] == "radar" else 200
        record["field_names"] = ["id", "type", "status"]
    return fixture


class ProviderReadyGateTest(unittest.TestCase):
    def test_ready_gate_without_fixture_is_blocked_and_non_promoting(self) -> None:
        report = build_provider_ready_gate("fju")

        self.assertEqual(report["version"], "provider-ready-gate-v1")
        self.assertEqual(report["status"], "blocked")
        self.assertFalse(report["ready_candidate"])
        self.assertFalse(report["promotes_provider"])
        self.assertIn("fixture_missing", report["blockers"])

    def test_ready_gate_candidate_requires_manual_acceptance_and_safe_fixture(self) -> None:
        report = build_provider_ready_gate("fju", fixture=accepted_fixture("fju"))
        encoded = json.dumps(report, ensure_ascii=False).lower()

        self.assertEqual(report["status"], "candidate_ready")
        self.assertTrue(report["ready_candidate"])
        self.assertFalse(report["promotes_provider"])
        self.assertEqual(report["support_level"], "experimental")
        self.assertNotIn("password", encoded)
        self.assertNotIn("raw response", encoded)

    def test_missing_acceptance_flag_keeps_gate_blocked(self) -> None:
        fixture = accepted_fixture("tku")
        fixture["manual_acceptance"]["qr_verified"] = False

        report = build_provider_ready_gate("tku", fixture=fixture)

        self.assertEqual(report["status"], "blocked")
        self.assertIn("acceptance_missing:qr_verified", report["blockers"])

    def test_acceptance_template_is_synthetic_and_stable(self) -> None:
        template = build_provider_ready_acceptance_template("fju")

        self.assertEqual(template["version"], "provider-ready-gate-v1")
        self.assertEqual(template["provider"], "fju")
        self.assertIn("login_verified", template["manual_acceptance"])
        self.assertFalse(template["manual_acceptance"]["login_verified"])

    def test_text_formatter_is_compact(self) -> None:
        text = "\n".join(format_provider_ready_gate(build_provider_ready_gate("fju")))

        self.assertIn("Provider ready gate: fju", text)
        self.assertIn("Ready candidate: no", text)
        self.assertIn("fixture_missing", text)

    def test_provider_ready_gate_cli_with_fixture(self) -> None:
        fixture = accepted_fixture("fju")
        with tempfile.TemporaryDirectory() as temp_dir:
            path = Path(temp_dir) / "fixture.json"
            path.write_text(json.dumps(fixture), encoding="utf-8")
            outputs = []
            with unittest.mock.patch.object(tron, "bootstrap_config"), unittest.mock.patch("builtins.print", side_effect=outputs.append):
                result = tron.main(["provider", "ready-gate", "fju", "--fixture", str(path), "--json"])

        payload = json.loads(outputs[0])
        self.assertEqual(result, 0)
        self.assertEqual(payload["status"], "candidate_ready")
        self.assertFalse(payload["promotes_provider"])

    def test_provider_show_and_doctor_include_ready_gate(self) -> None:
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
        self.assertEqual(json.loads(show[0])["ready_gate"]["status"], "blocked")
        self.assertEqual(json.loads(doctor[0])["provider"]["ready_gate"]["status"], "blocked")


if __name__ == "__main__":
    unittest.main()

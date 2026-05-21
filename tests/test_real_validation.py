import json
import tempfile
import unittest
from pathlib import Path

from troTHU.real_validation import (
    ACCEPTED_LIVE_BLOCK_REASON,
    LIVE_CASE_IDS,
    append_local_smoke_validation_records,
    append_real_validation_record,
    build_local_smoke_validation_records,
    build_real_validation_checklist,
    format_real_validation_summary,
    run_local_validation_smoke,
    summarize_real_validation,
)


class RealValidationTest(unittest.TestCase):
    def test_checklist_contains_fixed_cases_with_acceptance_and_commands(self) -> None:
        checklist = build_real_validation_checklist()
        case_ids = {item["id"] for item in checklist["cases"]}

        self.assertEqual(checklist["version"], "real-validation-v1")
        self.assertEqual(
            case_ids,
            {
                "preflight_status_doctor_dashboard",
                "auth_restore",
                "time_schedule_local",
                "thu_number_live",
                "thu_radar_live",
                "qr_single_live",
                "qr_static_image_live",
                "qr_fanout_live",
                "bot_generic_sandbox",
                "bot_platform_fake_sandbox",
                "package_release_static",
                "doctor_probe_opt_in",
                "browser_assisted_login_opt_in",
                "research_student_rollcalls_probe",
                "safety_review",
            },
        )
        for item in checklist["cases"]:
            self.assertIn("acceptance", item)
            self.assertIn("manual_command", item)
            self.assertIn("required", item)
        self.assertEqual({item["id"] for item in checklist["cases"] if item["live"]}, LIVE_CASE_IDS)

    def test_append_and_summarize_jsonl_round_trip(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            base_dir = Path(temp_dir)
            append_real_validation_record(
                base_dir,
                {
                    "case_id": "preflight_status_doctor_dashboard",
                    "status": "pass",
                    "note": "ok",
                    "metadata": {"count": 1},
                },
            )
            summary = summarize_real_validation(base_dir)

        self.assertEqual(summary["record_count"], 1)
        self.assertEqual(summary["counts"]["pass"], 1)
        self.assertIn("auth_restore", summary["required"]["missing"])
        self.assertFalse(summary["ready_for_r2"])

    def test_missing_and_corrupt_file_do_not_crash(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            base_dir = Path(temp_dir)
            missing_summary = summarize_real_validation(base_dir)
            path = base_dir / "state" / "validation" / "real_validation.jsonl"
            path.parent.mkdir(parents=True)
            path.write_text("{not json}\n", encoding="utf-8")
            corrupt_summary = summarize_real_validation(base_dir)

        self.assertEqual(missing_summary["record_count"], 0)
        self.assertEqual(corrupt_summary["record_count"], 1)
        self.assertIn("preflight_status_doctor_dashboard", corrupt_summary["required"]["missing"])

    def test_sanitizer_redacts_sensitive_record_values(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            record = append_real_validation_record(
                Path(temp_dir),
                {
                    "case_id": "qr_single_live",
                    "status": "blocked",
                    "reason": ACCEPTED_LIVE_BLOCK_REASON,
                    "note": "payload=SHOULD_NOT_LEAK",
                    "metadata": {
                        "password": "pw",
                        "token": "tok",
                        "cookie_value": "cv",
                        "session_id": "sid",
                        "raw_qr": "qr-data",
                        "raw_response": {"body": "backend-body"},
                        "safe": "ok",
                    },
                },
            )
            encoded = json.dumps(record, ensure_ascii=False)

        metadata = record["metadata"]
        self.assertNotIn("SHOULD_NOT_LEAK", encoded)
        self.assertEqual(metadata["password"], "[redacted]")
        self.assertEqual(metadata["token"], "[redacted]")
        self.assertEqual(metadata["cookie_value"], "[redacted]")
        self.assertEqual(metadata["session_id"], "[redacted]")
        self.assertEqual(metadata["raw_qr"], "[redacted]")
        self.assertEqual(metadata["raw_response"], "[redacted]")
        self.assertNotIn("qr-data", encoded)
        self.assertNotIn("backend-body", encoded)
        self.assertIn("ok", encoded)

    def test_summary_ready_for_r2_accepts_live_no_rollcall_blocks_but_not_upper_claim(self) -> None:
        checklist = build_real_validation_checklist()
        with tempfile.TemporaryDirectory() as temp_dir:
            base_dir = Path(temp_dir)
            for item in checklist["cases"]:
                status = "blocked" if item["live"] else "pass"
                reason = ACCEPTED_LIVE_BLOCK_REASON if item["live"] else ""
                append_real_validation_record(
                    base_dir,
                    {"case_id": item["id"], "status": status, "reason": reason},
                )
            summary = summarize_real_validation(base_dir, checklist=checklist)

        self.assertTrue(summary["ready_for_r2"])
        self.assertFalse(summary["upper_replacement_ready"])
        self.assertEqual(
            set(summary["live_acceptance"]["accepted_blocks"]),
            {"thu_number_live", "thu_radar_live", "qr_single_live", "qr_static_image_live", "qr_fanout_live"},
        )
        self.assertIn("Live acceptance still blocking", "\n".join(format_real_validation_summary(summary)))

    def test_fju_tku_are_experimental_and_not_required_live_validation(self) -> None:
        checklist = build_real_validation_checklist()

        self.assertEqual(checklist["provider_scope"]["fju"]["support_level"], "experimental")
        self.assertEqual(checklist["provider_scope"]["tku"]["support_level"], "experimental")
        self.assertFalse(checklist["provider_scope"]["fju"]["required_live_validation"])
        self.assertFalse(checklist["provider_scope"]["tku"]["required_live_validation"])

    def test_local_smoke_is_offline_and_sanitized(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            report = run_local_validation_smoke(
                {
                    "account": {"user": "u1", "passwd": ""},
                    "accounts": {
                        "current": "default",
                        "profiles": {"default": {"user": "u1", "passwd": ""}},
                    },
                },
                base_dir=Path(temp_dir),
                local_reports={
                    "status_report": {"status": "ok"},
                    "doctor_report": {"checks": [{"status": "ok"}]},
                    "dashboard_snapshot": {"status": "ok"},
                    "package_check": {"status": "ok"},
                    "release_check": {"status": "ok"},
                    "roadmap_audit": {"version": "roadmap-audit-v1"},
                },
            )
            encoded = json.dumps(report, ensure_ascii=False).lower()

        self.assertIn(report["status"], {"ok", "warn"})
        self.assertEqual(report["checks"]["bot_sandbox"], "ok")
        self.assertEqual(report["reports"]["bot_sandbox"]["platform_fake"]["actual_delivery_count"], 3)
        self.assertTrue(report["reports"]["feature_gates"]["qr_image"]["sensitive_material_hidden"])
        self.assertFalse(report["reports"]["feature_gates"]["doctor_probe"]["default_network_calls"])
        self.assertFalse(report["reports"]["feature_gates"]["research_probe"]["daily_automation"])
        self.assertNotIn("should_not_leak", encoded)
        self.assertNotIn("password=", encoded)
        self.assertNotIn("payload=", encoded)

    def test_local_smoke_records_only_offline_proven_required_cases(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            base_dir = Path(temp_dir)
            report = run_local_validation_smoke(
                {
                    "time": {"timezone": "Asia/Taipei"},
                    "account": {"user": "u1", "passwd": ""},
                    "accounts": {
                        "current": "default",
                        "profiles": {"default": {"user": "u1", "passwd": ""}},
                    },
                },
                base_dir=base_dir,
                local_reports={
                    "status_report": {"status": "ok"},
                    "doctor_report": {"checks": [{"status": "ok"}]},
                    "dashboard_snapshot": {"status": "ok"},
                    "package_check": {"status": "warn"},
                    "release_check": {"status": "warn"},
                    "roadmap_audit": {
                        "version": "roadmap-audit-v1",
                        "provider_scope": {
                            "thu": {"support_level": "ready"},
                            "fju": {"support_level": "experimental"},
                            "tku": {"support_level": "experimental"},
                        },
                    },
                },
            )
            planned = build_local_smoke_validation_records(report, profile="default", provider="thu")
            appended = append_local_smoke_validation_records(base_dir, report, profile="default", provider="thu")
            summary = summarize_real_validation(base_dir)

        case_ids = {record["case_id"] for record in planned}
        self.assertEqual(
            case_ids,
            {
                "preflight_status_doctor_dashboard",
                "time_schedule_local",
                "bot_generic_sandbox",
                "bot_platform_fake_sandbox",
                "package_release_static",
                "safety_review",
            },
        )
        self.assertEqual(len(appended), 6)
        self.assertEqual(summary["counts"]["pass"], 6)
        self.assertIn("auth_restore", summary["required"]["missing"])
        self.assertIn("thu_number_live", summary["required"]["missing"])
        self.assertNotIn("preflight_status_doctor_dashboard", summary["required"]["missing"])

import json
import unittest

from troTHU.observability import (
    build_observability_snapshot,
    classify_recent_events,
    format_dashboard_snapshot,
    format_log_summary,
)


class ObservabilitySnapshotTest(unittest.TestCase):
    def make_status_report(self):
        return {
            "provider": {"key": "thu", "label": "THU", "status": "ready"},
            "active_profile": "default",
            "credential": {"effective_source": "config"},
            "cookie": {
                "enabled": True,
                "exists": True,
                "valid": True,
                "record_count": 3,
                "age_seconds": 15,
                "age": "<1m",
                "path": "C:/secret/state/cookies/default.json",
            },
            "runtime_state": {
                "store_status": "ok",
                "bot_state": "running",
                "monitor_state": "running",
                "heartbeat_stale": False,
                "last_login": {
                    "status": "success",
                    "credential_source": "config",
                    "ok": True,
                    "timestamp": 123,
                },
                "last_check": {
                    "status": "qrcode_submitted",
                    "rollcall_id": "88",
                    "rollcall_type": "qrcode",
                    "timestamp": 124,
                },
                "last_error": {
                    "status": "radar_failed",
                    "message": "payload=super-secret token=abc",
                    "timestamp": 125,
                },
            },
            "pending_qr": [
                {
                    "provider": "thu",
                    "profile": "default",
                    "rollcall_id": "88",
                    "rollcall_type": "qrcode",
                    "source_adapter": "discord",
                    "source_channel_id": "secret-channel",
                    "data": "raw-qr-data",
                }
            ],
            "course_discovery": {
                "enabled": True,
                "read_only": True,
                "current_semester_endpoint": True,
                "courses_endpoint": True,
            },
            "last_login": {"status": "success", "credential_source": "config"},
        }

    def make_log_summary(self):
        return {
            "log_dir": "C:/workspace/log",
            "file_count": 2,
            "record_count": 4,
            "first_timestamp": "2026-05-20T01:00:00",
            "last_timestamp": "2026-05-20T01:03:00",
            "events": {"rollcall_check": 2, "notification_delivery": 1},
            "statuses": {"success": 2, "failed": 1},
        }

    def make_recent_logs(self):
        return [
            {
                "timestamp": "2026-05-20T01:01:00",
                "event": "rollcall_check",
                "status": "success",
                "rollcall_id": "88",
                "message": "ok",
            },
            {
                "timestamp": "2026-05-20T01:02:00",
                "event": "qr_submit",
                "status": "failed",
                "rollcall_id": "89",
                "payload_excerpt": "raw-secret-payload",
                "message": "payload=secret-qr token=secret-token",
            },
            {
                "timestamp": "2026-05-20T01:03:00",
                "event": "radar_answer",
                "status": "http_error",
                "http_status": 500,
                "message": "temporary failure",
            },
        ]

    def test_snapshot_aggregates_safe_status_and_log_fields(self) -> None:
        snapshot = build_observability_snapshot(
            self.make_status_report(),
            log_summary=self.make_log_summary(),
            recent_logs=self.make_recent_logs(),
        )

        self.assertEqual(snapshot["active_profile"], "default")
        self.assertEqual(snapshot["runtime"]["bot_state"], "running")
        self.assertEqual(snapshot["cookie"]["age"], "<1m")
        self.assertEqual(snapshot["pending_qr"]["count"], 1)
        self.assertEqual(snapshot["logs"]["record_count"], 4)
        self.assertEqual(snapshot["recent_events"]["statuses"]["failed"], 1)
        self.assertTrue(snapshot["course_discovery"]["enabled"])

    def test_snapshot_sanitizes_sensitive_values(self) -> None:
        snapshot = build_observability_snapshot(
            self.make_status_report(),
            log_summary=self.make_log_summary(),
            recent_logs=self.make_recent_logs(),
            account_states=[
                {
                    "profile": "default",
                    "exists": True,
                    "runtime_state_path": "C:/secret/state/account_runtime.json",
                    "cookie": {"path": "C:/secret/state/cookies/default.json"},
                    "runtime": {"bot_state": "running", "monitor_state": "running"},
                    "pending_qr_count": 1,
                    "binding_count": 2,
                    "adapter_counts": {"discord": 1, "line": 1},
                }
            ],
        )
        encoded = json.dumps(snapshot, ensure_ascii=False)

        for forbidden in (
            "C:/secret",
            "secret-channel",
            "raw-qr-data",
            "raw-secret-payload",
            "secret-token",
            "secret-qr",
            "super-secret",
        ):
            self.assertNotIn(forbidden, encoded)
        self.assertIn("[redacted]", encoded)

    def test_dashboard_formatter_outputs_stable_sections(self) -> None:
        snapshot = build_observability_snapshot(
            self.make_status_report(),
            log_summary=self.make_log_summary(),
            recent_logs=self.make_recent_logs(),
        )

        text = "\n".join(format_dashboard_snapshot(snapshot))

        self.assertIn("THU TronClass Dashboard", text)
        self.assertIn("Profile: default", text)
        self.assertIn("Runtime: bot running; monitor running", text)
        self.assertIn("Pending QR: 1", text)
        self.assertIn("Recent notable events:", text)

    def test_recent_event_classifier_prioritizes_important_events(self) -> None:
        recent = classify_recent_events(self.make_recent_logs(), limit=2)

        self.assertEqual(len(recent["notable"]), 2)
        self.assertEqual(recent["notable"][0]["event"], "qr_submit")
        self.assertEqual(recent["notable"][1]["event"], "radar_answer")

    def test_recent_event_classifier_falls_back_to_latest_records(self) -> None:
        recent = classify_recent_events(
            [
                {"timestamp": "1", "event": "heartbeat", "status": "success"},
                {"timestamp": "2", "event": "idle", "status": "success"},
            ],
            limit=1,
        )

        self.assertEqual(len(recent["notable"]), 1)
        self.assertEqual(recent["notable"][0]["event"], "idle")

    def test_log_summary_formatter_includes_counts_and_recent_events(self) -> None:
        text = "\n".join(format_log_summary(self.make_log_summary(), self.make_recent_logs()))

        self.assertIn("Files: 2  Records: 4", text)
        self.assertIn("Top events: rollcall_check=2", text)
        self.assertIn("Top statuses: success=2", text)
        self.assertIn("Recent notable events:", text)
        self.assertNotIn("secret-token", text)

    def test_log_summary_formatter_handles_empty_recent_logs(self) -> None:
        text = "\n".join(format_log_summary(self.make_log_summary(), []))

        self.assertIn("Recent notable events:", text)
        self.assertIn(" - none", text)

    def test_dashboard_formatter_marks_stale_monitor_and_missing_cookie(self) -> None:
        report = self.make_status_report()
        report["cookie"] = {"enabled": True, "exists": False, "valid": False, "age": "missing"}
        report["runtime_state"]["heartbeat_stale"] = True
        snapshot = build_observability_snapshot(
            report,
            log_summary=self.make_log_summary(),
            recent_logs=[],
        )

        text = "\n".join(format_dashboard_snapshot(snapshot))

        self.assertIn("monitor running (stale)", text)
        self.assertIn("Cookie: missing", text)

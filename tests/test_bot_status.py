import json
import unittest

from troTHU.bot_status import (
    MAX_ACCOUNTS_IN_REPLY,
    build_profile_status_summary,
    format_accounts_reply,
    format_profile_status_reply,
)


class BotStatusSummaryTest(unittest.TestCase):
    def make_summary(self):
        return build_profile_status_summary(
            "default",
            state="running",
            cookie={
                "enabled": True,
                "exists": True,
                "valid": True,
                "record_count": 2,
                "age_seconds": 12.5,
                "age": "12s",
                "path": "C:/secret/state/cookies/default.json",
            },
            runtime_state={
                "bot_state": "running",
                "monitor_state": "running",
                "heartbeat_stale": False,
                "last_login": {
                    "status": "success",
                    "credential_source": "config",
                    "ok": True,
                },
                "last_check": {
                    "status": "qrcode_submitted",
                    "rollcall_id": "88",
                    "rollcall_type": "qrcode",
                    "timestamp": 123.0,
                },
                "last_error": {
                    "status": "login_failed",
                    "message": "password token cookie raw payload should redact",
                    "timestamp": 124.0,
                },
            },
            pending_qr=[
                {
                    "provider": "thu",
                    "profile": "default",
                    "rollcall_id": "88",
                    "rollcall_type": "qrcode",
                    "source_adapter": "discord",
                    "source_channel_id": "chan-secret",
                    "data": "raw-qr-data",
                }
            ],
            bindings={"count": 2, "adapters": {"discord": 1, "line": 1}},
            course_discovery={
                "enabled": True,
                "current_semester_endpoint": True,
                "courses_endpoint": True,
                "read_only": True,
            },
        )

    def test_profile_summary_aggregates_safe_status_fields(self) -> None:
        summary = self.make_summary()

        self.assertEqual(summary["profile"], "default")
        self.assertEqual(summary["bot_state"], "running")
        self.assertEqual(summary["cookie"]["age"], "12s")
        self.assertEqual(summary["pending_qr_count"], 1)
        self.assertEqual(summary["pending_qr"][0]["rollcall_id"], "88")
        self.assertEqual(summary["adapter_counts"], {"discord": 1, "line": 1})
        self.assertTrue(summary["course_discovery"]["enabled"])

    def test_summary_and_reply_do_not_leak_sensitive_values(self) -> None:
        summary = self.make_summary()
        encoded = json.dumps(summary, ensure_ascii=False)
        reply = format_profile_status_reply(summary)

        self.assertIn("Profile default", reply)
        self.assertIn("pending QR 1", reply)
        for forbidden in (
            "C:/secret",
            "chan-secret",
            "raw-qr-data",
            "password token cookie raw payload",
        ):
            self.assertNotIn(forbidden, encoded)
            self.assertNotIn(forbidden, reply)
        self.assertIn("[redacted]", encoded)

    def test_accounts_reply_limits_visible_profile_details(self) -> None:
        summaries = [
            build_profile_status_summary(
                f"profile-{index}",
                state="stopped",
                cookie={},
                runtime_state={},
                pending_qr=[],
                bindings={"count": 0, "adapters": {}},
            )
            for index in range(MAX_ACCOUNTS_IN_REPLY + 2)
        ]

        reply = format_accounts_reply(
            summaries,
            total_count=len(summaries),
            visible_count=len(summaries),
            truncated=True,
        )

        self.assertIn("showing 10/12", reply)
        self.assertIn("profile-0", reply)
        self.assertNotIn("profile-11", reply)

    def test_empty_accounts_reply_is_stable(self) -> None:
        self.assertEqual(
            format_accounts_reply([], total_count=2, visible_count=0),
            "No visible profiles.",
        )

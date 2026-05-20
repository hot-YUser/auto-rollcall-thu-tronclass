import json
import unittest

from troTHU.app_qr_experience import (
    build_qr_scan_view_state,
    format_qr_scan_status,
    sanitize_qr_scan_result,
)


class AppQrExperienceTest(unittest.TestCase):
    def test_idle_and_camera_fallback_states_are_safe(self) -> None:
        idle = build_qr_scan_view_state()
        self.assertEqual(idle["state"], "idle")
        self.assertEqual(idle["next_action"], "scan_or_paste")

        fallback = build_qr_scan_view_state(camera_supported=False)
        self.assertEqual(fallback["state"], "idle")
        self.assertIn("camera_unavailable_use_paste", fallback["warnings"])
        self.assertFalse(fallback["camera_supported"])

    def test_preview_success_and_failure_states(self) -> None:
        ok = build_qr_scan_view_state(
            preview={
                "ok": True,
                "provider": "thu",
                "rollcall_id": "88",
                "match_count": 2,
                "field_names": ["rollcallId"],
                "payload_hash": "abc123",
                "payload_length": 42,
            }
        )
        self.assertEqual(ok["state"], "preview_ok")
        self.assertEqual(ok["provider"], "thu")
        self.assertEqual(ok["rollcall_id"], "88")
        self.assertEqual(ok["match_count"], 2)
        self.assertEqual(ok["diagnostic"]["qr_hash"], "abc123")
        self.assertEqual(ok["next_action"], "submit_or_adjust_fanout")

        failed = build_qr_scan_view_state(
            preview={
                "ok": False,
                "error": "parse_failed",
                "diagnostic": {"source_kind": "unknown", "warnings": ["missing_data"]},
            }
        )
        self.assertEqual(failed["state"], "preview_failed")
        self.assertEqual(failed["next_action"], "paste_different_qr")
        self.assertIn("missing_data", failed["warnings"])

    def test_submit_success_failure_no_matches_and_partial_failure(self) -> None:
        submitted = build_qr_scan_view_state(
            submit_result={"ok": True, "status": "submitted", "provider": "thu", "rollcall_id": "7"}
        )
        self.assertEqual(submitted["state"], "submitted")
        self.assertEqual(submitted["next_action"], "done")

        failed = build_qr_scan_view_state(submit_result={"ok": False, "status": "failed"})
        self.assertEqual(failed["state"], "failed")
        self.assertEqual(failed["next_action"], "retry_or_check_status")

        no_matches = build_qr_scan_view_state(
            submit_result={"ok": False, "status": "no_matches", "rollcall_id": "9"},
            fanout=True,
        )
        self.assertEqual(no_matches["state"], "no_matches")
        self.assertTrue(no_matches["fanout"])
        self.assertEqual(no_matches["next_action"], "wait_for_matching_pending_qr")

        partial = build_qr_scan_view_state(
            submit_result={
                "ok": False,
                "status": "partial_failed",
                "results": [
                    {"profile": "default", "provider": "thu", "ok": True, "status": "submitted"},
                    {"profile": "alt", "provider": "thu", "ok": False, "status": "failed", "error": "server"},
                ],
            },
            fanout=True,
        )
        self.assertEqual(partial["state"], "partial_failed")
        self.assertEqual(len(partial["profile_results"]), 2)
        self.assertEqual(partial["profile_results"][1]["profile"], "alt")

    def test_submitting_state_is_explicit(self) -> None:
        submitting = build_qr_scan_view_state(submit_result={"ok": False, "status": "submitting"})
        self.assertEqual(submitting["state"], "submitting")
        self.assertEqual(submitting["next_action"], "wait_for_result")

    def test_formatter_includes_result_context_without_sensitive_text(self) -> None:
        view_state = build_qr_scan_view_state(
            submit_result={
                "ok": False,
                "status": "partial_failed",
                "provider": "thu",
                "rollcall_id": "88",
                "match_count": 2,
                "results": [{"profile": "default", "ok": True, "status": "submitted"}],
                "message": "secret-token should disappear",
            },
            fanout=True,
        )
        text = format_qr_scan_status(view_state)
        self.assertIn("state=partial_failed", text)
        self.assertIn("rollcall_id=88", text)
        self.assertIn("matches=2", text)
        self.assertIn("default:submitted", text)
        self.assertNotIn("secret-token", text)

    def test_sanitizer_removes_nested_sensitive_material(self) -> None:
        safe = sanitize_qr_scan_result(
            {
                "ok": False,
                "payload": "qr-secret",
                "token": "bot-secret",
                "cookie": "cookie-secret",
                "session": "session-secret",
                "raw_response": "backend-secret",
                "nested": {"data": "qr-data-secret", "message": "contains token=abc"},
                "items": [{"profile": "default", "password": "pw-secret"}],
            }
        )
        encoded = json.dumps(safe, ensure_ascii=False).lower()
        for forbidden in (
            "qr-secret",
            "bot-secret",
            "cookie-secret",
            "session-secret",
            "backend-secret",
            "qr-data-secret",
            "pw-secret",
            "token=abc",
            "payload",
            "cookie",
            "session",
            "password",
        ):
            self.assertNotIn(forbidden, encoded)


if __name__ == "__main__":
    unittest.main()

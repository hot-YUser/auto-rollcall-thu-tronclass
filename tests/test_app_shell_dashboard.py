import json
import unittest

from troTHU.app_shell_dashboard import (
    build_shell_dashboard_cards,
    build_shell_policy,
    format_shell_dashboard_cards,
    sanitize_shell_dashboard_value,
)


class AppShellDashboardTest(unittest.TestCase):
    def test_dashboard_cards_aggregate_safe_local_state(self) -> None:
        model = build_shell_dashboard_cards(
            snapshot={
                "provider": {"key": "thu", "support_level": "ready", "daily_ready": True},
                "runtime_state": {"bot_state": "running", "last_check": "ok", "last_login": "ok"},
                "cookie": {"exists": True, "valid": True, "age_seconds": 3},
                "pending_qr": [{"rollcall_id": "r1"}],
                "logs": {"record_count": 9},
            },
            release_report={"status": "warn"},
            policy=build_shell_policy(route_count=18),
        )

        self.assertEqual(model["status"], "ok")
        self.assertTrue(model["read_only"])
        self.assertTrue(model["preview_only"])
        card_ids = {card["id"] for card in model["cards"]}
        self.assertIn("release", card_ids)
        self.assertIn("shell_policy", card_ids)

    def test_dashboard_sanitizer_removes_sensitive_values(self) -> None:
        value = sanitize_shell_dashboard_value(
            {
                "password": "secret-password",
                "nested": {"cookie_value": "cookie-secret", "message": "token-abc123"},
                "safe": "hello",
            }
        )
        encoded = json.dumps(value, ensure_ascii=False)

        self.assertEqual(value["safe"], "hello")
        self.assertNotIn("secret-password", encoded)
        self.assertNotIn("cookie-secret", encoded)
        self.assertNotIn("token-abc123", encoded)

    def test_policy_lists_disabled_mutations(self) -> None:
        policy = build_shell_policy(route_count=18)

        self.assertTrue(policy["local_only"])
        self.assertTrue(policy["read_only"])
        self.assertIn("qr_submit", policy["disabled_mutations"])
        self.assertIn("release_build", policy["disabled_mutations"])

    def test_formatter_outputs_short_card_lines(self) -> None:
        lines = format_shell_dashboard_cards(
            build_shell_dashboard_cards(
                snapshot={"provider": {"key": "thu", "daily_ready": True}},
                release_report={"status": "ok"},
                policy=build_shell_policy(route_count=18),
            )
        )
        text = "\n".join(lines)

        self.assertIn("App shell dashboard: ok", text)
        self.assertIn("Release", text)


if __name__ == "__main__":
    unittest.main()

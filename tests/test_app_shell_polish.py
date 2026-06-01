import json
import tempfile
import unittest
from pathlib import Path

from troTHU import tron
from troTHU.app_shell_polish import (
    build_shell_action_catalog,
    build_shell_drilldown,
    build_shell_ui_model,
    format_shell_ui_summary,
)


def make_config():
    return tron.normalize_config(
        {
            "account": {"user": "u1", "passwd": ""},
            "accounts": {"current": "default", "profiles": {"default": {"user": "u1", "passwd": ""}}},
            "provider": {"current": "fju"},
        }
    )


class AppShellPolishTest(unittest.TestCase):
    def test_ui_model_contains_panels_badges_actions_and_safe_values(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            model = build_shell_ui_model(
                make_config(),
                base_dir=Path(temp_dir),
                reports={
                    "release_check": {"status": "ok", "token": "token-secret"},
                    "logs_summary": {"recent_events": {"errors": [{"raw_body": "secret"}]}},
                },
            )
            encoded = json.dumps(model, ensure_ascii=False).lower()

        self.assertEqual(model["status"], "ok")
        self.assertTrue(model["read_only"])
        self.assertTrue(model["preview_only"])
        self.assertEqual(model["badges"]["release"]["status"], "ok")
        self.assertIn("actions", model["action_catalog"])
        self.assertNotIn("token-secret", encoded)
        self.assertNotIn("secret", encoded)

    def test_drilldown_and_catalog_never_execute_mutations(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            config = make_config()
            catalog = build_shell_action_catalog(config)
            drilldown = build_shell_drilldown(
                "qr-preview",
                config=config,
                base_dir=Path(temp_dir),
                reports={"qr-preview": {"payload": "RAW-QR", "cookie_value": "cookie-secret"}},
            )
            encoded = json.dumps({"catalog": catalog, "drilldown": drilldown}, ensure_ascii=False)

        self.assertTrue(catalog["read_only"])
        self.assertTrue(catalog["preview_only"])
        self.assertTrue(all(not action["executes_in_shell"] for action in catalog["actions"]))
        self.assertIn("qr-preview", drilldown["panel"])
        self.assertNotIn("RAW-QR", encoded)
        self.assertNotIn("cookie-secret", encoded)

    def test_summary_formatter_is_stable(self) -> None:
        model = build_shell_ui_model(make_config(), base_dir=Path("."))
        text = "\n".join(format_shell_ui_summary(model))

        self.assertIn("App shell polish", text)
        self.assertIn("Read-only: yes", text)


if __name__ == "__main__":
    unittest.main()

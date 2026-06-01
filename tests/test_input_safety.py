import unittest
from unittest.mock import patch

from troTHU.input_safety import masked_password_input, sanitize_config_values, sanitize_input_field


class InputSafetyTest(unittest.TestCase):
    def test_common_text_fields_trim_and_collapse_spaces(self) -> None:
        result = sanitize_input_field("  default   profile  ", field_type="profile", field_name="profile")
        self.assertEqual(result.value, "default profile")
        self.assertTrue(result.changed)
        self.assertTrue(result.valid)
        self.assertTrue(result.warnings)

    def test_password_and_token_trim_without_echoing_value(self) -> None:
        result = sanitize_input_field("  secret-value  ", field_type="password", field_name="password")
        self.assertEqual(result.value, "secret-value")
        self.assertEqual(result.reason, "sensitive")
        self.assertNotIn("secret-value", " ".join(result.warnings))
        self.assertEqual(result.to_dict()["value"], "[redacted]")

    def test_qr_payload_preserves_internal_whitespace(self) -> None:
        result = sanitize_input_field("  p=abc  def  ", field_type="qr_payload", field_name="qr")
        self.assertEqual(result.value, "p=abc  def")
        self.assertTrue(result.changed)

    def test_port_validation(self) -> None:
        self.assertTrue(sanitize_input_field(" 8787 ", field_type="port").valid)
        invalid = sanitize_input_field(" 99999 ", field_type="port")
        self.assertFalse(invalid.valid)
        self.assertEqual(invalid.reason, "invalid_port")

    def test_config_sanitizer_mutates_common_fields_safely(self) -> None:
        config = {
            "account": {"user": "  s123  ", "passwd": "  pw  "},
            "accounts": {
                "current": " default ",
                "profiles": {" default ": {"user": " u1 ", "passwd": " p1 ", "label": " main  account "}},
            },
            "provider": {"current": " THU "},
            "local_ui": {"host": " 127.0.0.1 ", "port": " 8765 "},
        }
        warnings = sanitize_config_values(config)
        self.assertEqual(config["account"]["user"], "s123")
        self.assertEqual(config["account"]["passwd"], "pw")
        self.assertIn("default", config["accounts"]["profiles"])
        self.assertEqual(config["provider"]["current"], "thu")
        self.assertTrue(warnings)
        self.assertNotIn(" p1 ", "\n".join(warnings))

    def test_masked_password_fallback_trims_without_logging_value(self) -> None:
        with (
            patch("sys.platform", "unknown-test-os"),
            patch("builtins.input", return_value="  secret  ") as input_mock,
        ):
            self.assertEqual(masked_password_input("pw> "), "secret")
        input_mock.assert_called_once_with("pw> ")

    def test_masked_password_pauses_status_line_while_reading(self) -> None:
        events = []

        class FakePause:
            def __enter__(self):
                events.append("enter")

            def __exit__(self, exc_type, exc, tb):
                events.append("exit")

        with (
            patch("troTHU.input_safety._optional_status_line_pause", return_value=FakePause()),
            patch("sys.platform", "unknown-test-os"),
            patch("builtins.input", return_value=" secret "),
        ):
            self.assertEqual(masked_password_input("pw> "), "secret")

        self.assertEqual(events, ["enter", "exit"])


if __name__ == "__main__":
    unittest.main()

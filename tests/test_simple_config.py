import copy
import unittest

from troTHU import tron


SAMPLE = """now:class A

account:
  user:S1
  passwd:P1
  school:THU

  user:S2
  passwd:P2
  school:tku

grop:
  class:A
    school:THU
    user:S1
    user:S2

operating:
  0:
    enable:true
    range:
    - 09:10
    - 12:00
  1:
    enable:false
    range:
    - 00:00
    - 00:00
"""


class SimpleConfigTest(unittest.TestCase):
    def test_parse_simple_config_accepts_group_alias_and_sunday_first_schedule(self) -> None:
        parsed = tron.parse_simple_config_text(SAMPLE)

        self.assertEqual(parsed["now"], "class A")
        self.assertEqual(len(parsed["accounts"]), 2)
        self.assertEqual(parsed["accounts"][1]["school"], "tku")
        self.assertEqual(parsed["groups"][0]["users"], ["S1", "S2"])
        self.assertEqual(parsed["operating"][0]["range"], ["09:10", "12:00"])

    def test_merge_normalizes_class_target_and_provider(self) -> None:
        parsed = tron.parse_simple_config_text(SAMPLE)
        config = tron.normalize_config(tron.merge_simple_and_advanced_config(parsed, {}))

        self.assertEqual(config["account"]["user"], "S1")
        self.assertEqual(config["provider"]["current"], "thu")
        self.assertEqual(config["operating"][6]["range"], ["09:10", "12:00"])

    def test_advanced_monitor_ignore_gate_is_preserved(self) -> None:
        original = copy.deepcopy(tron.CONFIG)
        try:
            config = tron.normalize_config({"monitor": {"ignore_attendance_rate_gate": True}})
            tron.CONFIG.clear()
            tron.CONFIG.update(config)

            self.assertTrue(config["monitor"]["ignore_attendance_rate_gate"])
            self.assertTrue(tron.get_ignore_attendance_rate_gate())
            self.assertFalse(tron.get_ignore_attendance_rate_gate(False))
        finally:
            tron.CONFIG.clear()
            tron.CONFIG.update(original)
        self.assertTrue(config["operating"][0]["enable"])

    def test_placeholders_are_empty_and_rendered_without_comments(self) -> None:
        parsed = tron.parse_simple_config_text("now:(填帳號或 class A)\naccount:\n  user:(帳號1)\n  passwd:(密碼1)\n  school:THU\n")
        config = tron.normalize_config(tron.merge_simple_and_advanced_config(parsed, {}))
        simple, advanced = tron.split_normalized_config(config)
        rendered = tron.render_simple_config(simple)

        self.assertEqual(config["account"]["user"], "")
        self.assertEqual(advanced, {})
        self.assertIn("now:(填帳號或 class A)", rendered)
        self.assertNotIn("#", rendered)
        self.assertNotIn("//", rendered)

    def test_blank_now_uses_only_real_account(self) -> None:
        parsed = tron.parse_simple_config_text(
            "now:\naccount:\n  user:SINGLE\n  passwd:SECRET\n  school:THU\n"
        )
        config = tron.normalize_config(tron.merge_simple_and_advanced_config(parsed, {}))

        self.assertEqual(tron.infer_single_account_now(parsed), "SINGLE")
        self.assertEqual(config["account"]["user"], "SINGLE")
        self.assertEqual(config["accounts"]["current"], "SINGLE")

    def test_blank_now_with_multiple_accounts_does_not_guess(self) -> None:
        parsed = tron.parse_simple_config_text(
            "now:\naccount:\n  user:S1\n  passwd:P1\n  school:THU\n\n  user:S2\n  passwd:P2\n  school:THU\n"
        )
        config = tron.normalize_config(tron.merge_simple_and_advanced_config(parsed, {}))

        self.assertEqual(tron.infer_single_account_now(parsed), "")
        self.assertEqual(config["account"]["user"], "")
        self.assertEqual(config["accounts"]["current"], "unset")

    def test_teacher_block_round_trips_in_simple_config(self) -> None:
        parsed = tron.parse_simple_config_text(
            "now:S1\n"
            "account:\n"
            "  user:S1\n"
            "  passwd:P1\n"
            "  school:THU\n"
            "\n"
            "teacher:\n"
            "  user:T1\n"
            "  passwd:TP1\n"
            "  school:TRONCLASS\n"
            "  course:\n"
            "\n"
            "operating:\n"
            "  0:\n"
            "    enable:true\n"
            "    range:\n"
            "    - 00:00 - 00:00\n"
        )
        config = tron.normalize_config(tron.merge_simple_and_advanced_config(parsed, {}))
        simple, advanced = tron.split_normalized_config(config)
        rendered = tron.render_simple_config(simple)
        reparsed = tron.parse_simple_config_text(rendered)

        self.assertEqual(config["teacher"], {"user": "T1", "passwd": "TP1", "school": "tronclass", "course": ""})
        self.assertEqual(advanced, {})
        self.assertIn("teacher:", rendered)
        self.assertIn("  user:T1", rendered)
        self.assertEqual(reparsed["teacher"]["school"], "tronclass")
        self.assertEqual(reparsed["teacher"]["course"], "")


if __name__ == "__main__":
    unittest.main()

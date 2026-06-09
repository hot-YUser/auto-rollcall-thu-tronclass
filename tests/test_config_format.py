import copy
import shutil
import tempfile
import unittest
from pathlib import Path

from troTHU import tron


BASIC_SAMPLE = """
# ===== 基本設定 config.conf =====
now = class A

[account]
user = S1
passwd = P1#hashpwd
school = 東海大學

[account]
學號 = S2
密碼 = P2
學校 = tku

[group]
class = A
school = THU
members = S1, S2

[operating]
day = 1
enable = true
times = 09:10-12:00, 13:20-17:30
"""


class ConfigFormatTest(unittest.TestCase):
    def test_parse_basic_config_handles_aliases_and_comments(self) -> None:
        parsed = tron.parse_basic_config_text(BASIC_SAMPLE)

        self.assertEqual(parsed["now"], "class A")
        self.assertEqual(len(parsed["accounts"]), 2)
        self.assertEqual(parsed["accounts"][0]["user"], "S1")
        self.assertEqual(parsed["accounts"][0]["passwd"], "P1#hashpwd")  # Inline # should be preserved
        self.assertEqual(parsed["accounts"][0]["school"], "thu")
        
        self.assertEqual(parsed["accounts"][1]["user"], "S2")
        self.assertEqual(parsed["accounts"][1]["passwd"], "P2")
        self.assertEqual(parsed["accounts"][1]["school"], "tku")

        self.assertEqual(parsed["groups"][0]["class"], "A")
        self.assertEqual(parsed["groups"][0]["users"], ["S1", "S2"])
        
        self.assertEqual(parsed["operating"][1]["range"], ["09:10", "12:00"])
        self.assertEqual(parsed["operating"][1]["ranges"], [["09:10", "12:00"], ["13:20", "17:30"]])

    def test_merge_normalizes_class_target_and_provider(self) -> None:
        parsed = tron.parse_basic_config_text(BASIC_SAMPLE)
        config = tron.normalize_config(tron.merge_basic_and_advanced_config(parsed, {}))

        self.assertEqual(config["account"]["user"], "S1")
        self.assertEqual(config["provider"]["current"], "thu")
        self.assertEqual(config["operating"][0]["range"], ["09:10", "12:00"])  # day 1 maps to internal weekday index 0

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

    def test_placeholders_are_empty_and_rendered_with_comments(self) -> None:
        parsed = tron.parse_basic_config_text("now = (填帳號或 class A)\n[account]\nuser = (帳號1)\npasswd = (密碼1)\nschool = THU\n")
        config = tron.normalize_config(tron.merge_basic_and_advanced_config(parsed, {}))
        simple, advanced = tron.split_normalized_config(config)
        rendered = tron.render_basic_config(simple)

        self.assertEqual(config["account"]["user"], "")
        self.assertEqual(advanced, {})
        self.assertIn("now = ", rendered)
        self.assertIn("# now：要用哪個帳號跑？", rendered)

    def test_default_template_parses_example_tokens_as_blank(self) -> None:
        # The shipped template shows example values (AAAAA / **OOXX / TTTTT / the
        # now-hint) as teaching guidance, but the parser must treat them as empty so
        # an unedited config reads as "not configured yet".
        parsed = tron.parse_basic_config_text(tron.DEFAULT_BASIC_CONFIG_TEMPLATE)
        self.assertEqual(parsed["now"], "")
        self.assertEqual(parsed["accounts"], [])
        self.assertEqual(parsed["teacher"]["user"], "")
        self.assertEqual(parsed["teacher"]["passwd"], "")
        # The example group keeps its class label but drops the example members.
        self.assertTrue(all(group["users"] == [] for group in parsed["groups"]))

    def test_blank_now_uses_only_real_account(self) -> None:
        parsed = tron.parse_basic_config_text(
            "now =\n[account]\nuser = SINGLE\npasswd = SECRET\nschool = THU\n"
        )
        config = tron.normalize_config(tron.merge_basic_and_advanced_config(parsed, {}))

        self.assertEqual(tron.infer_single_account_now(parsed), "SINGLE")
        self.assertEqual(config["account"]["user"], "SINGLE")
        self.assertEqual(config["accounts"]["current"], "SINGLE")

    def test_blank_now_with_multiple_accounts_does_not_guess(self) -> None:
        parsed = tron.parse_basic_config_text(
            "now =\n[account]\nuser = S1\npasswd = P1\nschool = THU\n\n[account]\nuser = S2\npasswd = P2\nschool = THU\n"
        )
        config = tron.normalize_config(tron.merge_basic_and_advanced_config(parsed, {}))

        self.assertEqual(tron.infer_single_account_now(parsed), "")
        self.assertEqual(config["account"]["user"], "")
        self.assertEqual(config["accounts"]["current"], "unset")

    def test_teacher_block_round_trips_in_basic_config(self) -> None:
        parsed = tron.parse_basic_config_text(
            "now = S1\n"
            "[account]\n"
            "user = S1\n"
            "passwd = P1\n"
            "school = THU\n"
            "\n"
            "[teacher]\n"
            "user = T1\n"
            "passwd = TP1\n"
            "school = TRONCLASS\n"
            "course = \n"
            "\n"
            "[operating]\n"
            "day = 0\n"
            "enable = true\n"
            "times = 00:00-00:00\n"
        )
        config = tron.normalize_config(tron.merge_basic_and_advanced_config(parsed, {}))
        simple, advanced = tron.split_normalized_config(config)
        rendered = tron.render_basic_config(simple)
        reparsed = tron.parse_basic_config_text(rendered)

        self.assertEqual(config["teacher"], {"user": "T1", "passwd": "TP1", "school": "tronclass", "course": ""})
        self.assertEqual(advanced, {})
        self.assertIn("[teacher]", rendered)
        self.assertIn("user = T1", rendered)
        self.assertEqual(reparsed["teacher"]["school"], "tronclass")
        self.assertEqual(reparsed["teacher"]["course"], "")

    def test_advanced_toml_lists_every_control_at_defaults_with_comments(self) -> None:
        # The generated advanced file must show ALL controls (not be blank) so a
        # beginner can see what is tunable, each at its default value.
        rendered = tron.render_advanced_config_toml()
        data = tron.parse_advanced_config_toml(rendered)
        for section in (
            "time", "session", "monitor", "auth", "ux", "local_ui", "webview",
            "integrations", "notifications", "config", "number", "radar", "research",
        ):
            self.assertIn(section, data)
        self.assertEqual(data["time"]["timezone"], "Asia/Taipei")
        self.assertEqual(data["radar"]["strategy"], "empty_answer")
        self.assertEqual(data["monitor"]["ignore_attendance_rate_gate"], False)
        self.assertEqual(data["research"]["enabled"], False)
        # Nested tables and beginner comments are emitted.
        self.assertIn("[radar.global]", rendered)
        self.assertIn("#", rendered)

    def test_advanced_toml_parses_overrides_and_tolerates_garbage(self) -> None:
        rendered = tron.render_advanced_config_toml({"radar": {"strategy": "global_wgs84"}})
        parsed = tron.parse_advanced_config_toml(rendered)
        self.assertEqual(parsed["radar"]["strategy"], "global_wgs84")
        self.assertEqual(parsed["time"]["timezone"], "Asia/Taipei")  # untouched default kept
        # A broken advanced file must fall back to {} (defaults) rather than raise.
        self.assertEqual(tron.parse_advanced_config_toml("nonsense = = ["), {})

    def test_advanced_toml_round_trips_lists_and_coordinate_pairs(self) -> None:
        ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0"
        custom = [[24.181, 120.591], [24.182, 120.592], [24.183, 120.593], [24.184, 120.594]]
        overrides = {"config": {"user-agent": [ua]}, "radar": {"boundary_points": custom}}
        parsed = tron.parse_advanced_config_toml(tron.render_advanced_config_toml(overrides))
        self.assertEqual(parsed["config"]["user-agent"], [ua])
        self.assertEqual(parsed["radar"]["boundary_points"], custom)

    def test_custom_boundary_points_survive_full_config_round_trip(self) -> None:
        # boundary_points is a list of [lat, lon] pairs. Customizing radar pushes
        # the whole radar block into the advanced file, so it must survive
        # split -> render(TOML) -> parse(TOML) -> merge -> normalize.
        custom = [[24.181, 120.591], [24.182, 120.592], [24.183, 120.593], [24.184, 120.594]]
        base = tron.normalize_config({"radar": {"strategy": "global_wgs84", "boundary_points": custom}})
        expected = base["radar"]["boundary_points"]
        # Guard: the custom polygon differs from the default, so a corrupted
        # round-trip (which silently falls back to the default) is detectable.
        self.assertNotEqual(expected, tron.DEFAULT_CONFIG["radar"]["boundary_points"])
        simple, advanced = tron.split_normalized_config(base)
        reparsed_adv = tron.parse_advanced_config_toml(tron.render_advanced_config_toml(advanced))
        merged = tron.normalize_config(tron.merge_basic_and_advanced_config(simple, reparsed_adv))
        self.assertEqual(merged["radar"]["boundary_points"], expected)

    def test_parser_tolerates_messy_beginner_input(self) -> None:
        # Every line here is a realistic Chinese-IME / copy-paste mistake; the
        # parser must still recover the right settings.
        messy = (
            "now = 「class A」\n"                      # full-width quotes around a group
            "\n"
            "[ＡＣＣＯＵＮＴ]\n"                        # full-width Latin section name
            "ＵＳＥＲ：S1\n"                            # full-width key + full-width colon
            "passwd = p:a:ss\n"                       # ascii colons inside a password kept
            "school ＝ 東海\n"                         # full-width '=' + Chinese school
            "\n"
            "帳號\n"                                   # bare Chinese section header (no brackets)
            "user = S2\n"
            "passwd = P2\n"
            "school = tku\n"
            "\n"
            "[grop]\n"                                # common typo for [group]
            "class = A\n"
            "members = S1，S2、S3\n"                   # full-width / ideographic list separators
            "\n"
            "[operating]\n"
            "\n"                                      # stray blank line inside the block
            "day = 1\n"
            "enable = 是\n"                           # Chinese boolean
            "times = 09:10～12:00，13:20-17:30\n"      # full-width tilde + comma
        )
        parsed = tron.parse_basic_config_text(messy)
        self.assertEqual(parsed["now"], "class A")
        self.assertEqual(parsed["accounts"][0]["user"], "S1")
        self.assertEqual(parsed["accounts"][0]["passwd"], "p:a:ss")
        self.assertEqual(parsed["accounts"][0]["school"], "thu")
        self.assertEqual(parsed["accounts"][1]["user"], "S2")
        self.assertEqual(parsed["accounts"][1]["school"], "tku")
        self.assertEqual(parsed["groups"][0]["users"], ["S1", "S2", "S3"])
        self.assertTrue(parsed["operating"][1]["enable"])
        self.assertEqual(parsed["operating"][1]["ranges"], [["09:10", "12:00"], ["13:20", "17:30"]])


class LegacyConfigMigrationTest(unittest.TestCase):
    def setUp(self) -> None:
        self.tmp = Path(tempfile.mkdtemp())
        self._saved = (tron.BASE_DIR, tron.CONFIG_PATH, tron.CONFIG_ADVANCED_PATH)
        tron.BASE_DIR = self.tmp
        tron.CONFIG_PATH = self.tmp / "config.conf"
        tron.CONFIG_ADVANCED_PATH = self.tmp / "config.advanced.toml"

    def tearDown(self) -> None:
        tron.BASE_DIR, tron.CONFIG_PATH, tron.CONFIG_ADVANCED_PATH = self._saved
        shutil.rmtree(self.tmp, ignore_errors=True)

    def test_legacy_yaml_is_imported_into_config_txt_nondestructively(self) -> None:
        # A filled pre-1.3 config.yaml (old colon format) must auto-import so the
        # user's accounts show up in the new config.conf instead of looking unchanged.
        (self.tmp / "config.yaml").write_text(
            "now:S1\n"
            "account:\n"
            "  user:S1\n"
            "  passwd:secret1\n"
            "  school:THU\n"
            "\n"
            "  user:S2\n"
            "  passwd:secret2\n"
            "  school:TKU\n",
            encoding="utf-8",
        )

        notices = tron.migrate_legacy_yaml_config()

        # The user's real accounts were carried into the new format.
        self.assertTrue((self.tmp / "config.conf").exists())
        parsed = tron.parse_basic_config_text((self.tmp / "config.conf").read_text(encoding="utf-8"))
        self.assertEqual({a["user"] for a in parsed["accounts"]}, {"S1", "S2"})
        self.assertEqual(parsed["now"], "S1")
        self.assertTrue(any("匯入" in note for note in notices))

        # NON-DESTRUCTIVE: the old file is never moved, renamed, or deleted. This is
        # what keeps bootstrap_config safe to call from tests/CLI on the real repo
        # (the tracked config.advanced.yaml and the dev's files stay put).
        self.assertTrue((self.tmp / "config.yaml").exists())
        self.assertFalse(list(self.tmp.glob("config-legacy-backup-*.yaml")))

    def test_import_is_idempotent_and_silent_once_config_txt_is_set_up(self) -> None:
        (self.tmp / "config.yaml").write_text(
            "now:OLD\naccount:\n  user:OLD\n  passwd:x\n  school:THU\n", encoding="utf-8"
        )
        # The user already set up config.conf: import must be a silent no-op.
        (self.tmp / "config.conf").write_text(
            "now = NEW\n[account]\nuser = NEW\npasswd = y\nschool = THU\n", encoding="utf-8"
        )

        notices = tron.migrate_legacy_yaml_config()

        self.assertEqual(notices, [])
        parsed = tron.parse_basic_config_text((self.tmp / "config.conf").read_text(encoding="utf-8"))
        self.assertEqual({a["user"] for a in parsed["accounts"]}, {"NEW"})
        self.assertTrue((self.tmp / "config.yaml").exists())


if __name__ == "__main__":
    unittest.main()

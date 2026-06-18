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
        # v1.6-alpha.3: the advanced split now carries the FULL school registry (the
        # advanced file is the live source of truth) and nothing else when other
        # sections are at defaults.
        self.assertEqual(set(advanced), {"provider"})
        self.assertIn("thu", advanced["provider"]["available"])
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

    def test_save_account_header_parses(self) -> None:
        parsed = tron.parse_basic_config_text("now = S1\n[save account]\nuser = S1\npasswd = P1\nschool = THU\n")
        self.assertEqual(len(parsed["accounts"]), 1)
        self.assertEqual(parsed["accounts"][0]["user"], "S1")
        self.assertEqual(parsed["accounts"][0]["school"], "thu")

    def test_legacy_account_header_still_parses(self) -> None:
        # Back-compat: existing config.conf files written with [account] keep working.
        parsed = tron.parse_basic_config_text("now = S1\n[account]\nuser = S1\npasswd = P1\nschool = THU\n")
        self.assertEqual(len(parsed["accounts"]), 1)
        self.assertEqual(parsed["accounts"][0]["user"], "S1")

    def test_render_emits_save_account_and_lists_all_codes(self) -> None:
        rendered = tron.render_basic_config({"accounts": [{"user": "S1", "passwd": "P1", "school": "thu"}]})
        self.assertIn("[save account]", rendered)
        self.assertNotIn("\n[account]", rendered)
        # Every registry code appears in the single code-list comment, none singled out.
        for code in ("THU", "TKU", "SCU", "FJU", "TRONCLASS", "ASIA", "NTOU"):
            self.assertIn(code, rendered)

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
        # v1.6-alpha.3: advanced split carries the full school registry, nothing else here.
        self.assertEqual(set(advanced), {"provider"})
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

    def test_profile_school_preserves_scu(self) -> None:
        from troTHU.config_format import _profile_school
        self.assertEqual(_profile_school({"school": "scu"}), "scu")
        self.assertEqual(_profile_school({"school": "\u6771\u5433"}), "scu")
        self.assertEqual(_profile_school({"label": "\u6771\u5433\u5927\u5b78"}), "scu")

    def test_scu_account_routes_to_soochow_tenant(self) -> None:
        # A Soochow (\u6771\u5433) student must reach their own tenant, not silently fall
        # back to thu (the old _profile_school bug). Verify the whole chain:
        # parse \u2192 _profile_school \u2192 provider["current"] \u2192 the scu base_url.
        parsed = tron.parse_basic_config_text(
            "now = X1\n[account]\nuser = X1\npasswd = P1\nschool = \u6771\u5433\n"
        )
        config = tron.normalize_config(tron.merge_basic_and_advanced_config(parsed, {}))

        self.assertEqual(config["account"]["user"], "X1")
        self.assertEqual(config["provider"]["current"], "scu")
        self.assertEqual(tron.get_provider("scu").base_url, "https://tronclass.scu.edu.tw")

    def test_synthetic_provider_account_routing(self) -> None:
        parsed = tron.parse_basic_config_text(
            "now = X1\n[account]\nuser = X1\npasswd = P1\nschool = custom_school\n"
        )
        advanced = {
            "provider": {
                "available": {
                    "custom_school": {
                        "base_url": "https://custom.tronclass.com.tw",
                        "auth_flow": "thu_cas",
                    }
                }
            }
        }
        config = tron.normalize_config(tron.merge_basic_and_advanced_config(parsed, advanced))

        self.assertEqual(config["account"]["user"], "X1")
        self.assertEqual(config["provider"]["current"], "custom_school")
        self.assertEqual(config["provider"]["available"]["custom_school"]["base_url"], "https://custom.tronclass.com.tw")

    def test_url_school_routes_to_interactive_browser_end_to_end(self) -> None:
        # Regression: a base URL pasted into `school` must survive parse -> merge
        # (the original URL is otherwise lost when collapsed to the url_<host> key)
        # and synthesize an interactive_browser provider — NOT fall back to thu.
        parsed = tron.parse_basic_config_text(
            "now = X1\n[account]\nuser = X1\npasswd = P1\nschool = https://iclass.demo.edu.tw/user/index#/\n"
        )
        config = tron.normalize_config(tron.merge_basic_and_advanced_config(parsed, {}))
        cur = config["provider"]["current"]
        self.assertEqual(cur, "url_iclass_demo_edu_tw")
        prov = config["provider"]["available"][cur]
        self.assertEqual(prov["auth_flow"], "interactive_browser")
        self.assertEqual(prov["base_url"], "https://iclass.demo.edu.tw")

    def test_now_url_triggers_interactive_browser_without_account(self) -> None:
        # `now = <URL>` (no matching [account]) -> credential-less interactive_browser.
        parsed = tron.parse_basic_config_text("now = https://lms.example.edu.tw/login\n")
        config = tron.normalize_config(tron.merge_basic_and_advanced_config(parsed, {}))
        cur = config["provider"]["current"]
        self.assertEqual(cur, "url_lms_example_edu_tw")
        self.assertEqual(config["provider"]["available"][cur]["auth_flow"], "interactive_browser")
        self.assertEqual(config["provider"]["available"][cur]["base_url"], "https://lms.example.edu.tw")
        self.assertEqual(config["account"]["user"], "")

    def test_interactive_provider_is_ready_without_password(self) -> None:
        # config_is_ready_to_run must not demand a password for interactive login.
        import copy
        from troTHU.config_editor import config_is_ready_to_run
        original = copy.deepcopy(tron.CONFIG)
        try:
            cfg = tron.normalize_config(tron.merge_basic_and_advanced_config(
                tron.parse_basic_config_text("now = https://lms.example.edu.tw\n"), {}))
            tron.CONFIG.clear()
            tron.CONFIG.update(cfg)
            self.assertTrue(config_is_ready_to_run())
        finally:
            tron.CONFIG.clear()
            tron.CONFIG.update(original)


class AdvancedProviderRenderTest(unittest.TestCase):
    """v1.6-alpha.3: config.advanced.toml is the live source of truth for the FULL
    school registry — every school is materialized and editable; config wins over the
    bundled schools.toml seed; deleting the file re-seeds."""

    def setUp(self) -> None:
        import troTHU.providers as providers
        self._providers = providers
        self._saved = (providers.PROVIDERS, providers.PROVIDER_ALIASES)

    def tearDown(self) -> None:
        # refresh_provider_registry mutates module globals — restore them so this
        # test can't leak an edited registry into the rest of the suite.
        self._providers.PROVIDERS, self._providers.PROVIDER_ALIASES = self._saved

    def test_render_materializes_full_registry(self) -> None:
        toml = tron.render_advanced_config_toml(tron.default_advanced_config())
        # EVERY school is written as an editable block (seeded from schools.toml).
        self.assertIn("[provider.available.thu]", toml)
        self.assertIn("[provider.available.scu]", toml)
        self.assertIn("[provider.available.nou]", toml)
        self.assertIn("ilearn.thu.edu.tw", toml)
        self.assertIn("aliases", toml)  # per-school aliases are written too

    def test_empty_provider_config_renders_the_seed(self) -> None:
        # A fresh / deleted advanced file (no provider section) re-materializes from
        # the bundled seed, not from possibly-mutated live globals.
        toml = tron.render_advanced_config_toml({})
        self.assertIn("[provider.available.thu]", toml)
        self.assertIn("ilearn.thu.edu.tw", toml)

    def test_custom_school_and_builtins_all_persist(self) -> None:
        parsed = tron.parse_basic_config_text(
            "now = X1\n[account]\nuser = X1\npasswd = P1\nschool = my_school\n"
        )
        advanced = {"provider": {"available": {"my_school": {"base_url": "https://lms.my.edu"}}}}
        config = tron.normalize_config(tron.merge_basic_and_advanced_config(parsed, advanced))
        _simple, advanced_out = tron.split_normalized_config(config)
        available = advanced_out.get("provider", {}).get("available", {})
        self.assertIn("my_school", available)   # custom school persisted
        self.assertIn("thu", available)         # AND every built-in (full registry now)
        self.assertIn("scu", available)

    def test_config_base_url_and_alias_win_over_seed(self) -> None:
        advanced = {"provider": {"available": {"scu": {
            "base_url": "https://changed.example.edu", "aliases": ["測試東吳"],
        }}}}
        config = tron.normalize_config(tron.merge_basic_and_advanced_config(
            tron.parse_basic_config_text("now = \n"), advanced))
        tron.refresh_provider_registry(config["provider"]["available"])
        self.assertEqual(tron.get_provider("scu").base_url, "https://changed.example.edu")
        self.assertEqual(tron.get_provider("測試東吳").key, "scu")  # config-defined alias resolves


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

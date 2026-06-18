from __future__ import annotations

import copy
import shutil
import tempfile
import unittest
import json
import io
import os
import sys
import types
import uuid
from pathlib import Path
from troTHU import tron, tron_http
from datetime import timedelta, time
from troTHU.config_view import build_user_config, config_doctor_report, config_view_summary, render_compact_config, write_compact_config
from unittest.mock import patch
from troTHU.account_runtime_store import mark_bot_state, mark_check_result, mark_monitor_state, runtime_state_path
from troTHU.pending_qr import add_pending_qr


# --- merged from tests/test_config_format.py ---
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


class ConfigFormatHelperTest(unittest.TestCase):
    """Direct pins for the config.conf parsing primitives. They touch user input
    (full-width IME tokens, quoted values, comma/time lists) and feed credential +
    schedule parsing, but had no unit guard until now."""

    def test_to_halfwidth_folds_ascii_range_and_space_only(self) -> None:
        from troTHU.config_format import _to_halfwidth
        self.assertEqual(_to_halfwidth("ＡＢＣ０１２＝：［］"), "ABC012=:[]")
        self.assertEqual(_to_halfwidth("　"), " ")  # full-width space -> ASCII space
        self.assertEqual(_to_halfwidth("東海 THU"), "東海 THU")  # CJK + ASCII untouched
        self.assertEqual(_to_halfwidth(""), "")

    def test_strip_quotes_matched_unmatched_and_cjk_pairs(self) -> None:
        from troTHU.config_format import _strip_quotes
        self.assertEqual(_strip_quotes('"hi"'), "hi")
        self.assertEqual(_strip_quotes("'x'"), "x")
        self.assertEqual(_strip_quotes("「class A」"), "class A")
        self.assertEqual(_strip_quotes("“y”"), "y")
        self.assertEqual(_strip_quotes('"unbalanced'), '"unbalanced')  # only one side -> kept
        self.assertEqual(_strip_quotes("  spaced  "), "spaced")
        self.assertEqual(_strip_quotes(""), "")

    def test_split_list_tolerates_fullwidth_and_ideographic_separators(self) -> None:
        from troTHU.config_format import _split_list
        self.assertEqual(_split_list("a, b、c；d;e"), ["a", "b", "c", "d", "e"])
        self.assertEqual(_split_list(" , , x ,"), ["x"])  # blanks dropped
        self.assertEqual(_split_list(""), [])

    def test_split_time_range_tolerates_dash_variants_and_malformed(self) -> None:
        from troTHU.config_format import _split_time_range
        self.assertEqual(_split_time_range("08:00-09:30"), ["08:00", "09:30"])
        self.assertEqual(_split_time_range("08:00～09:30"), ["08:00", "09:30"])  # full-width tilde
        self.assertEqual(_split_time_range("08:00－09:30"), ["08:00", "09:30"])  # full-width dash
        self.assertEqual(_split_time_range("08:00-"), ["08:00"])  # trailing mark dropped
        self.assertEqual(_split_time_range(""), [])


# Rich raw config that exercises the non-default + malformed-fallback branches of
# every normalize_config section (bad timezone, out-of-range clamps, str-as-list,
# coercion from strings, bad radii item, an operating override). Kept identical to
# the generator that produced tests/normalize_config_golden.json.
_NORMALIZE_RICH_INPUT = {
    "account": {"user": "real@example.com", "passwd": "pw"},
    "teacher": {"user": "t", "passwd": "tp", "school": "THU", "course": "C1"},
    "session": {"cache_cookies": "no"},
    "auth": {"browser_assisted_login": {"enabled": "yes", "timeout_ms": 999999}},
    "ux": {"pending_qr_ttl_seconds": 5},
    "monitor": {"ignore_attendance_rate_gate": "true"},
    "webview": {"cookie_sync": {"enabled": True, "allowed_domains": "Example.COM"}},
    "integrations": {"discord": {"enable": "1", "ephemeral_replies": "no"}},
    "notifications": {"tg": {"enable": "yes"}},
    "config": {"http_timeout": "abc", "retries": 9, "user-agent": ["UA1", "  "]},
    "time": {"timezone": "Not/AZone"},
    "number": {"concurrency": 9999, "transient_failure_ratio": "5"},
    "radar": {"strategy": "global", "max_final_attempts": 9999,
              "global": {"standard_radii_meters": "10, 20, bad"}},
    "operating": {"1": {"enable": "no", "ranges": "08:00-09:30"}},
}


class NormalizeConfigGoldenTest(unittest.TestCase):
    """Golden master for normalize_config, so the per-section split stays provably
    behavior-preserving. The volatile/large `provider` registry subtree is excluded
    (it's one delegating line, not restructured here, and varies by local config);
    everything the split touches is pinned. Output is compared in JSON-canonical
    form so int operating keys / tuples / floats compare stably."""

    def _normalized(self, raw):
        out = tron.normalize_config(copy.deepcopy(raw))
        out.pop("provider", None)
        return json.loads(json.dumps(out, sort_keys=True, default=str))

    def test_normalize_config_matches_golden(self) -> None:
        golden = json.loads(
            (Path(__file__).parent / "normalize_config_golden.json").read_text(encoding="utf-8")
        )
        self.assertEqual(self._normalized({}), golden["empty"])
        self.assertEqual(self._normalized(_NORMALIZE_RICH_INPUT), golden["rich"])


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


# --- merged from tests/test_timezone_schedule.py ---
class TimezoneScheduleTest(unittest.TestCase):
    def setUp(self) -> None:
        self.original_config = copy.deepcopy(tron.CONFIG)

    def tearDown(self) -> None:
        tron.CONFIG.clear()
        tron.CONFIG.update(copy.deepcopy(self.original_config))

    def test_normalize_schedule_ranges_accepts_multiple_text_windows(self) -> None:
        ranges = tron.normalize_schedule_ranges("09:10-12:00, 13:10-17:20")

        self.assertEqual(ranges, [["09:10", "12:00"], ["13:10", "17:20"]])
        self.assertTrue(tron.is_within_any_schedule(ranges, time(13, 30)))
        self.assertFalse(tron.is_within_any_schedule(ranges, time(12, 30)))

    def test_simple_config_preserves_legacy_range_and_adds_ranges(self) -> None:
        parsed = tron.parse_basic_config_text(
            "[operating]\n"
            "day = 1\n"
            "enable = true\n"
            "times = 09:10-12:00, 13:10-17:20\n"
        )
        config = tron.normalize_config(tron.merge_basic_and_advanced_config(parsed, {}))

        self.assertEqual(config["operating"][0]["range"], ["09:10", "12:00"])
        self.assertEqual(config["operating"][0]["ranges"], [["09:10", "12:00"], ["13:10", "17:20"]])

    def test_config_timezone_uses_iana_zone_and_falls_back_safely(self) -> None:
        config = tron.normalize_config({"time": {"timezone": "UTC"}})
        tron.CONFIG.clear()
        tron.CONFIG.update(config)

        self.assertEqual(tron.get_config_timezone_name(), "UTC")
        self.assertEqual(tron.current_datetime().utcoffset(), timedelta(0))

        invalid = tron.normalize_config({"time": {"timezone": "Not/AZone"}})
        encoded = json.dumps({"config": invalid, "warnings": tron.CONFIG_WARNINGS}, ensure_ascii=False)
        self.assertEqual(invalid["time"]["timezone"], "Asia/Taipei")
        self.assertIn("time.timezone", encoded)


if __name__ == "__main__":
    unittest.main()


# --- merged from tests/test_config_view.py ---
class ConfigViewTest(unittest.TestCase):
    def test_compact_config_omits_default_heavy_sections(self) -> None:
        config = tron.normalize_config(copy.deepcopy(tron.DEFAULT_CONFIG))
        text = render_compact_config(config)
        self.assertIn("now = ", text)
        self.assertIn("[save account]", text)
        self.assertIn("[group]", text)
        self.assertNotIn("LEGACY CONFIG", text)
        self.assertNotIn("user-agent", text)
        self.assertNotIn("final_grid_step_meters", text)
        self.assertNotIn("research", text)

    def test_advanced_override_is_preserved(self) -> None:
        config = tron.normalize_config(copy.deepcopy(tron.DEFAULT_CONFIG))
        config["number"]["concurrency"] = 7
        user_config = build_user_config(config)
        self.assertIn("advanced", user_config)
        self.assertEqual(user_config["advanced"]["number"]["concurrency"], 7)
        reloaded = tron.normalize_config(tron.merge_simple_and_advanced_config(user_config["simple"], user_config["advanced"]))
        self.assertEqual(reloaded["number"]["concurrency"], 7)

    def test_write_compact_config_backs_up_existing_file(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            path = Path(temp_dir) / "config.conf"
            path.write_text("[account]\nuser = old\n", encoding="utf-8")
            report = write_compact_config(path, tron.DEFAULT_CONFIG, backup_existing=True)
            self.assertEqual(report["status"], "ok")
            self.assertTrue(Path(report["backup_path"]).exists())
            self.assertIn("now = ", path.read_text(encoding="utf-8"))

    def test_summary_and_doctor_are_safe(self) -> None:
        config = tron.normalize_config(
            {
                "account": {"user": "  user1  ", "passwd": "  secret  "},
                "provider": {"current": " thu "},
            }
        )
        summary = config_view_summary(config)
        report = config_doctor_report(config)
        text = json.dumps({"summary": summary, "report": report}, ensure_ascii=False)
        self.assertIn("active_profile", summary)
        self.assertNotIn("secret", text)


if __name__ == "__main__":
    unittest.main()


# --- merged from tests/test_tron_unit.py ---
try:
    import aiohttp  # noqa: F401
except ModuleNotFoundError:
    fake_aiohttp = types.ModuleType("aiohttp")

    class DummyClientSession:
        pass

    class DummyClientResponse:
        pass

    class DummyClientError(Exception):
        pass

    class DummyContentTypeError(Exception):
        pass

    class DummyTCPConnector:
        def __init__(self, *args, **kwargs) -> None:
            self.args = args
            self.kwargs = kwargs

    async def dummy_request(*args, **kwargs):
        raise RuntimeError("aiohttp is unavailable in this offline unit-test environment")

    fake_aiohttp.ClientSession = DummyClientSession
    fake_aiohttp.ClientResponse = DummyClientResponse
    fake_aiohttp.ClientError = DummyClientError
    fake_aiohttp.ContentTypeError = DummyContentTypeError
    fake_aiohttp.TCPConnector = DummyTCPConnector
    fake_aiohttp.request = dummy_request
    sys.modules["aiohttp"] = fake_aiohttp

try:
    import yaml  # noqa: F401
except ModuleNotFoundError:
    fake_yaml = types.ModuleType("yaml")

    def safe_load(_stream):
        return {}

    def safe_dump(data, stream, **_kwargs):
        stream.write(str(data))

    fake_yaml.safe_load = safe_load
    fake_yaml.safe_dump = safe_dump
    sys.modules["yaml"] = fake_yaml


TEST_WORKSPACE_DIR = Path(__file__).resolve().parents[1]


def make_workspace_temp_dir() -> Path:
    root = TEST_WORKSPACE_DIR / ".tmp-tests"
    root.mkdir(exist_ok=True)
    path = root / uuid.uuid4().hex
    path.mkdir()
    return path


class TronHelpersTest(unittest.TestCase):
    def setUp(self) -> None:
        self.original_config = copy.deepcopy(tron.CONFIG)
        self.original_runtime_credentials = copy.deepcopy(tron.RUNTIME_CREDENTIALS)
        self.original_tron_user = os.environ.get("TRON_USER")
        self.original_tron_pass = os.environ.get("TRON_PASS")
        self.original_tron_teacher_user = os.environ.get("TRON_TEACHER_USER")
        self.original_tron_teacher_pass = os.environ.get("TRON_TEACHER_PASS")
        self.original_config_path = tron.CONFIG_PATH
        self.original_config_advanced_path = tron.CONFIG_ADVANCED_PATH
        self.original_config_bootstrapped = tron.CONFIG_BOOTSTRAPPED
        self.original_bootstrap_warnings = list(tron.BOOTSTRAP_WARNINGS)
        self.original_last_login_result = tron.LAST_LOGIN_RESULT
        self.original_last_fatal_notification_at = tron.LAST_FATAL_NOTIFICATION_AT

    def tearDown(self) -> None:
        tron.CONFIG.clear()
        tron.CONFIG.update(copy.deepcopy(self.original_config))
        tron.RUNTIME_CREDENTIALS.clear()
        tron.RUNTIME_CREDENTIALS.update(copy.deepcopy(self.original_runtime_credentials))
        tron.CONFIG_PATH = self.original_config_path
        tron.CONFIG_ADVANCED_PATH = self.original_config_advanced_path
        tron.CONFIG_BOOTSTRAPPED = self.original_config_bootstrapped
        tron.BOOTSTRAP_WARNINGS.clear()
        tron.BOOTSTRAP_WARNINGS.extend(self.original_bootstrap_warnings)
        tron.LAST_LOGIN_RESULT = self.original_last_login_result
        tron.LAST_FATAL_NOTIFICATION_AT = self.original_last_fatal_notification_at
        if self.original_tron_user is None:
            os.environ.pop("TRON_USER", None)
        else:
            os.environ["TRON_USER"] = self.original_tron_user
        if self.original_tron_pass is None:
            os.environ.pop("TRON_PASS", None)
        else:
            os.environ["TRON_PASS"] = self.original_tron_pass
        if self.original_tron_teacher_user is None:
            os.environ.pop("TRON_TEACHER_USER", None)
        else:
            os.environ["TRON_TEACHER_USER"] = self.original_tron_teacher_user
        if self.original_tron_teacher_pass is None:
            os.environ.pop("TRON_TEACHER_PASS", None)
        else:
            os.environ["TRON_TEACHER_PASS"] = self.original_tron_teacher_pass

    def test_extract_login_form_collects_inputs_and_decodes_action(self) -> None:
        html = """
        <html>
          <form class="form-horizontal" action="/auth/login?foo=1&amp;bar=2">
            <input type="hidden" name="execution" value="abc123">
            <input type="hidden" name="tab_id" value="tab-1">
            <input type="text" name="username" value="">
          </form>
        </html>
        """

        action_url, fields = tron.extract_login_form(html, "https://example.com/root")

        self.assertEqual(action_url, "https://example.com/auth/login?foo=1&bar=2")
        self.assertEqual(fields["execution"], "abc123")
        self.assertEqual(fields["tab_id"], "tab-1")
        self.assertEqual(fields["username"], "")

    def test_extract_login_form_raises_when_missing(self) -> None:
        with self.assertRaises(tron_http.LoginPageChangedError):
            tron.extract_login_form("<html><body>no form here</body></html>")

    def test_normalize_config_accepts_string_weekday_keys(self) -> None:
        normalized = tron.normalize_config(
            {
                "config": {"user-agent": []},
                "operating": {"1": {"enable": False, "range": ["10:00", "11:00"]}},
            }
        )

        self.assertTrue(normalized["config"]["user-agent"])
        self.assertFalse(normalized["operating"][1]["enable"])
        self.assertEqual(normalized["operating"][1]["range"], ["10:00", "11:00"])
        self.assertIn(0, normalized["operating"])

    def test_normalize_config_accepts_string_schedule_range(self) -> None:
        normalized = tron.normalize_config(
            {
                "config": {"user-agent": []},
                "operating": {"1": {"enable": True, "range": "09:00-17:30"}},
            }
        )

        self.assertEqual(normalized["operating"][1]["range"], ["09:00", "17:30"])

    def test_normalize_config_accepts_schedule_range_dict(self) -> None:
        normalized = tron.normalize_config(
            {
                "config": {"user-agent": []},
                "operating": {"1": {"enable": True, "range": {"start": "8:05", "end": "12:10"}}},
            }
        )

        self.assertEqual(normalized["operating"][1]["range"], ["08:05", "12:10"])

    def test_default_operating_enables_all_days(self) -> None:
        self.assertTrue(tron.DEFAULT_CONFIG["operating"][0]["enable"])
        self.assertTrue(tron.DEFAULT_CONFIG["operating"][4]["enable"])
        self.assertTrue(tron.DEFAULT_CONFIG["operating"][5]["enable"])
        self.assertTrue(tron.DEFAULT_CONFIG["operating"][6]["enable"])

    def test_parse_schedule_range_falls_back_to_all_day_on_invalid_input(self) -> None:
        start, end = tron.parse_schedule_range("oops")

        self.assertEqual(start.strftime("%H:%M"), "00:00")
        self.assertEqual(end.strftime("%H:%M"), "00:00")

    def test_parse_schedule_range_accepts_string_range(self) -> None:
        start, end = tron.parse_schedule_range("09:00 ~ 17:30")

        self.assertEqual(start.strftime("%H:%M"), "09:00")
        self.assertEqual(end.strftime("%H:%M"), "17:30")

    def test_is_within_schedule_supports_overnight_ranges(self) -> None:
        start, end = tron.parse_schedule_range("23:00-01:00")

        self.assertTrue(
            tron.is_within_schedule(start, end, tron.datetime.strptime("23:30", "%H:%M").time())
        )
        self.assertTrue(
            tron.is_within_schedule(start, end, tron.datetime.strptime("00:30", "%H:%M").time())
        )
        self.assertFalse(
            tron.is_within_schedule(start, end, tron.datetime.strptime("12:00", "%H:%M").time())
        )

    def test_get_poll_interval_and_retry_limit_are_clamped(self) -> None:
        tron.CONFIG["config"]["Senkaku"] = "0"
        tron.CONFIG["config"]["retries"] = "-2"

        self.assertEqual(tron.get_poll_interval(), 0.1)
        self.assertEqual(tron.get_retry_limit(), 1)

    def test_normalize_config_defaults_verify_ssl_to_true(self) -> None:
        normalized = tron.normalize_config({"config": {}})

        self.assertTrue(normalized["config"]["verify_ssl"])

    def test_normalize_config_defaults_timeouts(self) -> None:
        normalized = tron.normalize_config({"config": {}})

        self.assertEqual(
            normalized["config"]["http_timeout"],
            tron.DEFAULT_CONFIG["config"]["http_timeout"],
        )
        self.assertEqual(
            normalized["config"]["notification_timeout"],
            tron.DEFAULT_CONFIG["config"]["notification_timeout"],
        )

    def test_normalize_config_defaults_teacher_assist(self) -> None:
        normalized = tron.normalize_config({"config": {}})

        self.assertEqual(
            normalized["teacher"],
            {"user": "", "passwd": "", "school": "tronclass", "course": ""},
        )

    def test_normalize_config_accepts_teacher_provider_alias(self) -> None:
        normalized = tron.normalize_config(
            {"teacher": {"user": "t1", "passwd": "tp1", "school": "官方站", "course": 301}}
        )

        self.assertEqual(normalized["teacher"]["school"], "tronclass")
        self.assertEqual(normalized["teacher"]["course"], "301")

    def test_normalize_config_defaults_radar_settings(self) -> None:
        normalized = tron.normalize_config({"config": {}})

        self.assertEqual(
            normalized["radar"]["boundary_points"],
            tron.DEFAULT_CONFIG["radar"]["boundary_points"],
        )
        self.assertEqual(normalized["radar"]["max_distance_probes"], 4)
        self.assertNotIn("final_precision_min", normalized["radar"])
        self.assertNotIn("final_precision_max", normalized["radar"])
        self.assertEqual(normalized["radar"]["strategy"], "empty_answer")
        self.assertTrue(normalized["radar"]["empty_answer_fallback_enabled"])
        self.assertNotIn("legacy_fallback_enabled", normalized["radar"])
        self.assertEqual(normalized["radar"]["global"]["max_queries"], 120)
        self.assertEqual(normalized["radar"]["global"]["request_retries"], tron.NUMBER_REQUEST_RETRIES)
        self.assertEqual(normalized["radar"]["global"]["standard_query_count"], 72)
        self.assertEqual(normalized["radar"]["global"]["supplement_query_count"], 36)
        self.assertTrue(normalized["radar"]["global"]["present_hint_verify_enabled"])
        self.assertTrue(normalized["radar"]["global"]["adaptive_estimate_enabled"])

    def test_normalize_config_drops_removed_radar_precision_settings(self) -> None:
        normalized = tron.normalize_config(
            {
                "config": {},
                "radar": {
                    "final_precision_min": 1,
                    "final_precision_max": 12,
                    "final_grid_step_meters": 100,
                },
            }
        )

        self.assertNotIn("final_precision_min", normalized["radar"])
        self.assertNotIn("final_precision_max", normalized["radar"])
        self.assertEqual(normalized["radar"]["final_grid_step_meters"], 100.0)

    def test_normalize_config_accepts_global_strategy_alias_and_clamps_global_config(self) -> None:
        normalized = tron.normalize_config(
            {
                "config": {},
                "radar": {
                    "strategy": "global",
                    "global": {
                        "max_queries": 9999,
                        "request_retries": 999,
                        "cooldown_seconds": 0,
                        "max_cooldowns": 999,
                        "transient_failure_ratio": 2,
                        "anchor_count": 12,
                        "bearing_count": 12,
                        "standard_radii_meters": "10000,3000,1000,300,100",
                        "supplement_radii_meters": "300,100,30",
                        "present_hint_verify_enabled": "false",
                        "adaptive_estimate_enabled": "off",
                    },
                },
            }
        )

        self.assertEqual(normalized["radar"]["strategy"], "global_wgs84")
        self.assertNotIn("legacy_fallback_enabled", normalized["radar"])
        self.assertEqual(normalized["radar"]["global"]["max_queries"], 500)
        self.assertEqual(normalized["radar"]["global"]["request_retries"], 10)
        self.assertEqual(normalized["radar"]["global"]["cooldown_seconds"], 0.1)
        self.assertEqual(normalized["radar"]["global"]["max_cooldowns"], 20)
        self.assertEqual(normalized["radar"]["global"]["transient_failure_ratio"], 1.0)
        self.assertEqual(normalized["radar"]["global"]["standard_query_count"], 72)
        self.assertEqual(normalized["radar"]["global"]["supplement_query_count"], 36)
        self.assertFalse(normalized["radar"]["global"]["present_hint_verify_enabled"])
        self.assertFalse(normalized["radar"]["global"]["adaptive_estimate_enabled"])

    def test_get_verify_ssl_reads_current_config_value(self) -> None:
        tron.CONFIG["config"]["verify_ssl"] = False

        self.assertFalse(tron.get_verify_ssl())

    def test_get_ssl_request_setting_returns_false_when_verification_disabled(self) -> None:
        self.assertFalse(tron.get_ssl_request_setting(False))

    def test_get_ssl_request_setting_relaxes_x509_strict_flag(self) -> None:
        class FakeContext:
            def __init__(self) -> None:
                self.verify_flags = 0b1111

        fake_context = FakeContext()

        with (
            patch.object(tron.ssl, "create_default_context", return_value=fake_context),
            patch.object(tron.ssl, "VERIFY_X509_STRICT", 0b0100, create=True),
        ):
            result = tron.get_ssl_request_setting(True)

        self.assertIs(result, fake_context)
        self.assertEqual(fake_context.verify_flags, 0b1011)

    def test_is_ssl_certificate_verification_error_matches_wrapped_text(self) -> None:
        exc = RuntimeError(
            "Cannot connect to host tcidentity.thu.edu.tw:443 ssl:True "
            "[SSLCertVerificationError: certificate verify failed: "
            "self-signed certificate in certificate chain]"
        )

        self.assertTrue(tron.is_ssl_certificate_verification_error(exc))
        self.assertFalse(tron.is_ssl_certificate_verification_error(RuntimeError("timeout")))

    def test_timeout_helpers_clamp_and_fall_back(self) -> None:
        tron.CONFIG["config"]["http_timeout"] = "0"
        tron.CONFIG["config"]["notification_timeout"] = "bad"

        self.assertEqual(tron.get_http_timeout_seconds(), 0.1)
        self.assertEqual(
            tron.get_notification_timeout_seconds(),
            tron.DEFAULT_CONFIG["config"]["notification_timeout"],
        )

    def test_build_notification_requests_formats_highlighted_payloads(self) -> None:
        tron.CONFIG["notifications"]["tg"].update(
            {"enable": True, "key": "123456:token", "chat": "111"}
        )
        tron.CONFIG["notifications"]["dc"].update(
            {"enable": True, "key": "discord-token", "chat": "222"}
        )
        banner = tron.format_found_code_banner("0427")

        requests = tron.build_notification_requests("找到點名數字！", banner)

        self.assertEqual(len(requests), 2)
        telegram_request = requests[0]
        discord_request = requests[1]
        self.assertEqual(
            telegram_request.url,
            "https://api.telegram.org/bot123456:token/sendMessage",
        )
        self.assertEqual(telegram_request.data["parse_mode"], "HTML")
        self.assertIn("<pre>", telegram_request.data["text"])
        self.assertIn("```text", discord_request.json_body["content"])
        self.assertIn("Code: 0427", discord_request.json_body["content"])

    def test_resolve_credentials_prefers_environment_over_config(self) -> None:
        tron.clear_runtime_credentials()
        tron.CONFIG["account"]["user"] = "config-user"
        tron.CONFIG["account"]["passwd"] = "config-pass"
        os.environ["TRON_USER"] = "env-user"
        os.environ["TRON_PASS"] = "env-pass"

        user, password, source = tron.resolve_credentials()

        self.assertEqual((user, password, source), ("env-user", "env-pass", "environment"))

    def test_resolve_credentials_prefers_runtime_over_environment_and_config(self) -> None:
        tron.CONFIG["account"]["user"] = "config-user"
        tron.CONFIG["account"]["passwd"] = "config-pass"
        os.environ["TRON_USER"] = "env-user"
        os.environ["TRON_PASS"] = "env-pass"
        tron.set_runtime_credentials("runtime-user", "runtime-pass")

        user, password, source = tron.resolve_credentials()

        self.assertEqual((user, password, source), ("runtime-user", "runtime-pass", "runtime"))

    def test_resolve_credentials_falls_back_to_config(self) -> None:
        tron.clear_runtime_credentials()
        os.environ.pop("TRON_USER", None)
        os.environ.pop("TRON_PASS", None)
        tron.CONFIG["account"]["user"] = "config-user"
        tron.CONFIG["account"]["passwd"] = "config-pass"

        user, password, source = tron.resolve_credentials()

        self.assertEqual((user, password, source), ("config-user", "config-pass", "config"))

    def test_resolve_teacher_credentials_prefers_environment_over_config(self) -> None:
        tron.CONFIG["teacher"] = {"user": "config-teacher", "passwd": "config-pass", "school": "tronclass", "course": ""}
        os.environ["TRON_TEACHER_USER"] = "env-teacher"
        os.environ["TRON_TEACHER_PASS"] = "env-pass"

        user, password, source = tron.resolve_teacher_credentials()

        self.assertEqual((user, password, source), ("env-teacher", "env-pass", "environment"))

    def test_resolve_teacher_credentials_uses_keyring_profile(self) -> None:
        os.environ.pop("TRON_TEACHER_USER", None)
        os.environ.pop("TRON_TEACHER_PASS", None)
        tron.CONFIG["teacher"] = {"user": "teacher-user", "passwd": "", "school": "tronclass", "course": ""}

        with patch.object(tron, "get_keyring_password", return_value="teacher-keyring-pass") as keyring:
            user, password, source = tron.resolve_teacher_credentials()

        keyring.assert_called_once_with("teacher", "teacher-user")
        self.assertEqual((user, password, source), ("teacher-user", "teacher-keyring-pass", "keyring"))

    def test_normalize_config_migrates_legacy_account_to_default_profile(self) -> None:
        normalized = tron.normalize_config(
            {
                "account": {"user": "legacy-user", "passwd": "legacy-pass"},
                "config": {},
            }
        )

        self.assertEqual(normalized["accounts"]["current"], "default")
        self.assertEqual(
            normalized["accounts"]["profiles"]["default"]["user"],
            "legacy-user",
        )
        self.assertTrue(normalized["session"]["cache_cookies"])

    def test_resolve_credentials_uses_keyring_for_active_profile(self) -> None:
        tron.clear_runtime_credentials()
        os.environ.pop("TRON_USER", None)
        os.environ.pop("TRON_PASS", None)
        tron.CONFIG["account"]["user"] = "YOUR_STUDENT_ID"
        tron.CONFIG["account"]["passwd"] = "YOUR_PASSWORD"
        tron.CONFIG["accounts"] = {
            "current": "thu",
            "profiles": {
                "thu": {"user": "profile-user", "passwd": "", "label": "THU"},
            },
        }

        with patch.object(tron, "get_keyring_password", return_value="keyring-pass"):
            user, password, source = tron.resolve_credentials()

        self.assertEqual((user, password, source), ("profile-user", "keyring-pass", "keyring"))

    def test_save_account_for_next_launch_persists_password_to_config(self) -> None:
        with patch.object(tron, "save_config") as save_config:
            result = tron.save_account_for_next_launch("user2", "pass2")

        self.assertEqual(tron.CONFIG["account"]["user"], "user2")
        self.assertEqual(tron.CONFIG["account"]["passwd"], "pass2")
        self.assertEqual(tron.CONFIG["accounts"]["profiles"]["default"]["user"], "user2")
        save_config.assert_called_once()
        self.assertTrue(result)

    def test_status_report_includes_runtime_state_without_network(self) -> None:
        temp_dir = make_workspace_temp_dir()
        original_base_dir = tron.BASE_DIR
        try:
            tron.BASE_DIR = temp_dir
            tron.CONFIG["accounts"] = {
                "current": "default",
                "profiles": {
                    "default": {"user": "user1", "passwd": "", "label": ""},
                },
            }
            mark_bot_state(temp_dir, "default", "running")
            mark_monitor_state(temp_dir, "default", "running")

            report = tron.status_report()

            self.assertEqual(report["runtime_state"]["bot_state"], "running")
            self.assertEqual(report["runtime_state"]["monitor_state"], "running")
        finally:
            tron.BASE_DIR = original_base_dir
            shutil.rmtree(temp_dir, ignore_errors=True)

    def test_account_state_json_aggregates_safe_runtime_pending_and_bindings(self) -> None:
        temp_dir = make_workspace_temp_dir()
        original_base_dir = tron.BASE_DIR
        try:
            tron.BASE_DIR = temp_dir
            tron.CONFIG["accounts"] = {
                "current": "default",
                "profiles": {
                    "default": {"user": "user1", "passwd": "", "label": "Primary"},
                },
            }
            tron.CONFIG["integrations"] = {
                "bindings": {
                    "discord:u1": {
                        "adapter": "discord",
                        "external_user_id": "u1",
                        "profile": "default",
                        "channel_id": "chan-1",
                    }
                }
            }
            mark_check_result(temp_dir, "default", "not_call")
            add_pending_qr(temp_dir, profile="default", rollcall_id=88, provider="thu")

            output = io.StringIO()
            with patch("sys.stdout", output):
                exit_code = tron.account_state("default", json_output=True)
            report = json.loads(output.getvalue())

            self.assertEqual(exit_code, 0)
            self.assertEqual(report["profile"], "default")
            self.assertEqual(report["runtime"]["last_check"]["status"], "not_call")
            self.assertEqual(report["pending_qr_count"], 1)
            self.assertEqual(report["binding_count"], 1)
            self.assertEqual(report["adapter_counts"]["discord"], 1)
            self.assertNotIn("token", output.getvalue().lower())
        finally:
            tron.BASE_DIR = original_base_dir
            shutil.rmtree(temp_dir, ignore_errors=True)

    def test_account_state_handles_corrupt_runtime_file(self) -> None:
        temp_dir = make_workspace_temp_dir()
        original_base_dir = tron.BASE_DIR
        try:
            tron.BASE_DIR = temp_dir
            tron.CONFIG["accounts"] = {
                "current": "default",
                "profiles": {
                    "default": {"user": "user1", "passwd": "", "label": ""},
                },
            }
            path = runtime_state_path(temp_dir)
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_text("{broken", encoding="utf-8")

            report = tron.account_state_report("default")

            self.assertEqual(report["runtime"]["store_status"], "corrupt")
        finally:
            tron.BASE_DIR = original_base_dir
            shutil.rmtree(temp_dir, ignore_errors=True)

    def test_monitor_loop_marks_runtime_running_on_start(self) -> None:
        temp_dir = make_workspace_temp_dir()
        original_base_dir = tron.BASE_DIR
        original_cookie_restored = tron.COOKIE_CACHE_RESTORED
        try:
            tron.BASE_DIR = temp_dir
            tron.COOKIE_CACHE_RESTORED = False
            tron.CONFIG["accounts"] = {
                "current": "default",
                "profiles": {
                    "default": {"user": "", "passwd": "", "label": ""},
                },
            }
            async def run_once():
                shutdown = tron.asyncio.Event()
                shutdown.set()
                await tron.monitor_loop(object(), shutdown)

            tron.asyncio.run(run_once())
            report = tron.account_runtime_summary("default")

            self.assertEqual(report["monitor_state"], "running")
        finally:
            tron.BASE_DIR = original_base_dir
            tron.COOKIE_CACHE_RESTORED = original_cookie_restored
            shutil.rmtree(temp_dir, ignore_errors=True)

    def test_log_writes_json_lines(self) -> None:
        temp_dir = make_workspace_temp_dir()
        try:
            path = temp_dir / "events.jsonl"
            success = tron.log(
                event="rollcall_poll",
                path=path,
                counter=7,
                status="ok",
                url="https://example.com/api",
                http_status=200,
                rollcall_id=12,
                rollcall_type="number",
                message="done",
                payload_excerpt={"hello": "world"},
            )

            self.assertTrue(success)
            lines = path.read_text(encoding="utf-8").splitlines()
        finally:
            shutil.rmtree(temp_dir, ignore_errors=True)

        self.assertEqual(len(lines), 1)
        payload = json.loads(lines[0])
        self.assertEqual(payload["event"], "rollcall_poll")
        self.assertEqual(payload["counter"], 7)
        self.assertEqual(payload["http_status"], 200)
        self.assertEqual(payload["rollcall_id"], 12)
        self.assertEqual(payload["rollcall_type"], "number")
        self.assertIn("timestamp", payload)
        self.assertIn("payload_excerpt", payload)

    def test_log_does_not_write_when_disabled(self) -> None:
        tron.CONFIG["config"]["enable_log"] = False
        temp_dir = make_workspace_temp_dir()
        try:
            path = temp_dir / "events.jsonl"
            success = tron.log(event="network_error", path=path, message="skip")

            self.assertFalse(success)
            self.assertFalse(path.exists())
        finally:
            shutil.rmtree(temp_dir, ignore_errors=True)

    def test_bootstrap_config_recovers_from_broken_yaml_and_rewrites_default(self) -> None:
        temp_dir = make_workspace_temp_dir()
        try:
            tron.CONFIG_PATH = temp_dir / "config.conf"
            tron.CONFIG_ADVANCED_PATH = temp_dir / "config.advanced.toml"
            tron.CONFIG_PATH.write_text("placeholder", encoding="utf-8")
            tron.CONFIG_BOOTSTRAPPED = False
            tron.BOOTSTRAP_WARNINGS.clear()

            with patch.object(tron, "parse_basic_config_text", side_effect=ValueError("broken text")):
                config = tron.bootstrap_config(force=True)

            backups = list(temp_dir.glob("config-broken-*.conf"))
            self.assertEqual(config["account"]["user"], "YOUR_STUDENT_ID")
            self.assertEqual(len(backups), 1)
            self.assertTrue(tron.CONFIG_PATH.exists())
            self.assertTrue(any("已損毀" in warning for warning in tron.BOOTSTRAP_WARNINGS))
        finally:
            shutil.rmtree(temp_dir, ignore_errors=True)

    def test_bootstrap_config_falls_back_to_defaults_when_rewrite_fails(self) -> None:
        temp_dir = make_workspace_temp_dir()
        try:
            tron.CONFIG_PATH = temp_dir / "config.conf"
            tron.CONFIG_ADVANCED_PATH = temp_dir / "config.advanced.toml"
            tron.CONFIG_PATH.write_text("placeholder", encoding="utf-8")
            tron.CONFIG_BOOTSTRAPPED = False
            tron.BOOTSTRAP_WARNINGS.clear()

            with (
                patch.object(tron, "parse_basic_config_text", side_effect=ValueError("broken text")),
                patch.object(tron, "write_config_file", side_effect=OSError("read-only")),
            ):
                config = tron.bootstrap_config(force=True)

            self.assertEqual(config["config"]["verify_ssl"], True)
            self.assertTrue(
                any("本次將使用內建預設設定" in warning for warning in tron.BOOTSTRAP_WARNINGS)
            )
        finally:
            shutil.rmtree(temp_dir, ignore_errors=True)

    def test_build_fatal_error_report_includes_fingerprint_and_traceback(self) -> None:
        try:
            raise RuntimeError("boom")
        except RuntimeError as exc:
            summary, formatted_traceback, fingerprint = tron.build_fatal_error_report(exc, 2)

        self.assertIn("restart #2", summary)
        self.assertTrue(fingerprint)
        self.assertIn("RuntimeError: boom", formatted_traceback)

    def test_report_fatal_exception_throttles_notifications(self) -> None:
        def fake_asyncio_run(coro):
            coro.close()
            return None

        with (
            patch.object(tron, "log_print") as log_print,
            patch.object(tron, "log", return_value=True) as log_mock,
            patch("asyncio.run", side_effect=fake_asyncio_run) as asyncio_run,
            patch.object(tron.time, "monotonic", side_effect=[1000.0, 1001.0]),
        ):
            tron.LAST_FATAL_NOTIFICATION_AT = 0.0

            try:
                raise RuntimeError("boom-1")
            except RuntimeError as exc:
                tron.report_fatal_exception(exc, 1)

            try:
                raise RuntimeError("boom-2")
            except RuntimeError as exc:
                tron.report_fatal_exception(exc, 2)

        self.assertEqual(asyncio_run.call_count, 1)
        self.assertEqual(log_mock.call_count, 2)
        self.assertEqual(log_print.call_count, 2)


if __name__ == "__main__":
    unittest.main()

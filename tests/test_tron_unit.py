import copy
import io
import json
import os
import shutil
import sys
import types
import unittest
import uuid
from pathlib import Path
from unittest.mock import patch

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

from troTHU import tron, tron_http
from troTHU.account_runtime_store import mark_bot_state, mark_check_result, mark_monitor_state, runtime_state_path
from troTHU.pending_qr import add_pending_qr

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

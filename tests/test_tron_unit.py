import copy
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

    def tearDown(self) -> None:
        tron.CONFIG.clear()
        tron.CONFIG.update(copy.deepcopy(self.original_config))
        tron.RUNTIME_CREDENTIALS.clear()
        tron.RUNTIME_CREDENTIALS.update(copy.deepcopy(self.original_runtime_credentials))
        if self.original_tron_user is None:
            os.environ.pop("TRON_USER", None)
        else:
            os.environ["TRON_USER"] = self.original_tron_user
        if self.original_tron_pass is None:
            os.environ.pop("TRON_PASS", None)
        else:
            os.environ["TRON_PASS"] = self.original_tron_pass

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

    def test_default_operating_enables_weekdays_only(self) -> None:
        self.assertTrue(tron.DEFAULT_CONFIG["operating"][0]["enable"])
        self.assertTrue(tron.DEFAULT_CONFIG["operating"][4]["enable"])
        self.assertFalse(tron.DEFAULT_CONFIG["operating"][5]["enable"])
        self.assertFalse(tron.DEFAULT_CONFIG["operating"][6]["enable"])

    def test_parse_schedule_range_falls_back_on_invalid_input(self) -> None:
        start, end = tron.parse_schedule_range("oops")

        self.assertEqual(start.strftime("%H:%M"), "09:00")
        self.assertEqual(end.strftime("%H:%M"), "17:00")

    def test_get_poll_interval_and_retry_limit_are_clamped(self) -> None:
        tron.CONFIG["config"]["Senkaku"] = "0"
        tron.CONFIG["config"]["retries"] = "-2"

        self.assertEqual(tron.get_poll_interval(), 0.1)
        self.assertEqual(tron.get_retry_limit(), 1)

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

    def test_save_account_for_next_launch_persists_password_to_config(self) -> None:
        with patch.object(tron, "save_config") as save_config:
            tron.save_account_for_next_launch("user2", "pass2")

        self.assertEqual(tron.CONFIG["account"]["user"], "user2")
        self.assertEqual(tron.CONFIG["account"]["passwd"], "pass2")
        save_config.assert_called_once()

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


if __name__ == "__main__":
    unittest.main()

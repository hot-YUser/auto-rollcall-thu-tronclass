import json
import shutil
import unittest
import uuid
from pathlib import Path

from troTHU.account_runtime_store import (
    AccountRuntimeSnapshot,
    load_runtime_state,
    mark_bot_state,
    mark_check_result,
    mark_login_result,
    mark_monitor_state,
    mark_profile_error,
    runtime_profile_summary,
    runtime_state_path,
    save_runtime_state,
    update_profile_runtime_state,
)


TEST_WORKSPACE_DIR = Path(__file__).resolve().parents[1]


def make_workspace_temp_dir() -> Path:
    root = TEST_WORKSPACE_DIR / ".tmp-tests"
    root.mkdir(exist_ok=True)
    path = root / uuid.uuid4().hex
    path.mkdir()
    return path


class DummyLoginResult:
    status = "success"
    credential_source = "config"
    ok = True
    should_auto_retry = False


class AccountRuntimeStoreTest(unittest.TestCase):
    def setUp(self) -> None:
        self.temp_dir = make_workspace_temp_dir()

    def tearDown(self) -> None:
        shutil.rmtree(self.temp_dir, ignore_errors=True)

    def test_missing_and_corrupt_state_return_safe_empty_snapshot(self) -> None:
        missing = load_runtime_state(self.temp_dir)
        self.assertEqual(missing.store_status, "missing")
        self.assertEqual(missing.profiles, {})

        path = runtime_state_path(self.temp_dir)
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text("{broken", encoding="utf-8")

        corrupt = load_runtime_state(self.temp_dir)
        self.assertEqual(corrupt.store_status, "corrupt")
        self.assertEqual(corrupt.profiles, {})

    def test_save_load_round_trip_and_atomic_shape(self) -> None:
        snapshot = AccountRuntimeSnapshot(
            profiles={
                "default": {
                    "bot_state": "running",
                    "monitor_state": "stopped",
                }
            }
        )

        save_runtime_state(self.temp_dir, snapshot)
        loaded = load_runtime_state(self.temp_dir)

        self.assertEqual(loaded.store_status, "ok")
        self.assertEqual(loaded.profiles["default"]["bot_state"], "running")
        self.assertFalse(runtime_state_path(self.temp_dir).with_suffix(".json.tmp").exists())

    def test_mark_helpers_update_profile_summary(self) -> None:
        mark_bot_state(self.temp_dir, "default", "running")
        mark_monitor_state(self.temp_dir, "default", "running")
        mark_login_result(self.temp_dir, "default", DummyLoginResult())
        mark_check_result(self.temp_dir, "default", "not_call", rollcall_id=12, rollcall_type="number")
        mark_profile_error(self.temp_dir, "default", "network_error", "timeout")

        summary = runtime_profile_summary(load_runtime_state(self.temp_dir), "default")

        self.assertEqual(summary["bot_state"], "running")
        self.assertEqual(summary["monitor_state"], "running")
        self.assertEqual(summary["last_login"]["status"], "success")
        self.assertEqual(summary["last_check"]["rollcall_id"], "12")
        self.assertEqual(summary["last_error"]["status"], "network_error")

    def test_sensitive_fields_are_sanitized_before_write(self) -> None:
        update_profile_runtime_state(
            self.temp_dir,
            "default",
            password="plain-password",
            token="secret-token",
            cookie_value="session-cookie",
            qr_payload='{"rollcallId":88,"data":"secret"}',
            last_error={"message": "password=plain-password token=secret-token"},
        )

        raw = runtime_state_path(self.temp_dir).read_text(encoding="utf-8")
        data = json.loads(raw)

        self.assertNotIn("plain-password", raw)
        self.assertNotIn("secret-token", raw)
        self.assertNotIn("session-cookie", raw)
        self.assertNotIn("rollcallId", raw)
        self.assertEqual(data["profiles"]["default"]["password"], "[redacted]")

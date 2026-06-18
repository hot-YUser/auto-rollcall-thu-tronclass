from __future__ import annotations

import json
import unittest
import tempfile
import copy
import asyncio
from troTHU import tron
from troTHU.observability import build_observability_snapshot, classify_recent_events, format_dashboard_snapshot, format_log_summary
from pathlib import Path
from unittest.mock import patch, AsyncMock
from troTHU.account_store import cookie_path
from troTHU.webview_sync import WebViewSyncError, build_webview_cookie_preview, build_webview_sync_status, import_webview_cookies, parse_webview_cookie_export
from troTHU.adapter_bridge import map_adapter_command
from troTHU.local_scanner import create_scanner_app
from troTHU.pending_qr import add_pending_qr, list_pending_qr, match_pending_qr, remove_pending_qr
from troTHU.ux_tools import export_debug_bundle, tail_log_records


# --- merged from tests/test_app_shell.py ---
try:
    import aiohttp
    from aiohttp import web
except (ImportError, ModuleNotFoundError):
    aiohttp = None
    web = None



# --- merged from tests/test_observability.py ---
class ObservabilitySnapshotTest(unittest.TestCase):
    def make_status_report(self):
        return {
            "provider": {"key": "thu", "label": "THU", "status": "ready"},
            "active_profile": "default",
            "credential": {"effective_source": "config"},
            "cookie": {
                "enabled": True,
                "exists": True,
                "valid": True,
                "record_count": 3,
                "age_seconds": 15,
                "age": "<1m",
                "path": "C:/secret/state/cookies/default.json",
            },
            "runtime_state": {
                "store_status": "ok",
                "bot_state": "running",
                "monitor_state": "running",
                "heartbeat_stale": False,
                "last_login": {
                    "status": "success",
                    "credential_source": "config",
                    "ok": True,
                    "timestamp": 123,
                },
                "last_check": {
                    "status": "qrcode_submitted",
                    "rollcall_id": "88",
                    "rollcall_type": "qrcode",
                    "timestamp": 124,
                },
                "last_error": {
                    "status": "radar_failed",
                    "message": "payload=super-secret token=abc",
                    "timestamp": 125,
                },
            },
            "pending_qr": [
                {
                    "provider": "thu",
                    "profile": "default",
                    "rollcall_id": "88",
                    "rollcall_type": "qrcode",
                    "source_adapter": "discord",
                    "source_channel_id": "secret-channel",
                    "data": "raw-qr-data",
                }
            ],
            "course_discovery": {
                "enabled": True,
                "read_only": True,
                "current_semester_endpoint": True,
                "courses_endpoint": True,
            },
            "last_login": {"status": "success", "credential_source": "config"},
        }

    def make_log_summary(self):
        return {
            "log_dir": "C:/workspace/log",
            "file_count": 2,
            "record_count": 4,
            "first_timestamp": "2026-05-20T01:00:00",
            "last_timestamp": "2026-05-20T01:03:00",
            "events": {"rollcall_check": 2, "notification_delivery": 1},
            "statuses": {"success": 2, "failed": 1},
        }

    def make_recent_logs(self):
        return [
            {
                "timestamp": "2026-05-20T01:01:00",
                "event": "rollcall_check",
                "status": "success",
                "rollcall_id": "88",
                "message": "ok",
            },
            {
                "timestamp": "2026-05-20T01:02:00",
                "event": "qr_submit",
                "status": "failed",
                "rollcall_id": "89",
                "payload_excerpt": "raw-secret-payload",
                "message": "payload=secret-qr token=secret-token",
            },
            {
                "timestamp": "2026-05-20T01:03:00",
                "event": "radar_answer",
                "status": "http_error",
                "http_status": 500,
                "message": "temporary failure",
            },
        ]

    def test_snapshot_aggregates_safe_status_and_log_fields(self) -> None:
        snapshot = build_observability_snapshot(
            self.make_status_report(),
            log_summary=self.make_log_summary(),
            recent_logs=self.make_recent_logs(),
        )

        self.assertEqual(snapshot["active_profile"], "default")
        self.assertEqual(snapshot["runtime"]["bot_state"], "running")
        self.assertEqual(snapshot["cookie"]["age"], "<1m")
        self.assertEqual(snapshot["pending_qr"]["count"], 1)
        self.assertEqual(snapshot["logs"]["record_count"], 4)
        self.assertEqual(snapshot["recent_events"]["statuses"]["failed"], 1)
        self.assertTrue(snapshot["course_discovery"]["enabled"])

    def test_snapshot_sanitizes_sensitive_values(self) -> None:
        snapshot = build_observability_snapshot(
            self.make_status_report(),
            log_summary=self.make_log_summary(),
            recent_logs=self.make_recent_logs(),
            account_states=[
                {
                    "profile": "default",
                    "exists": True,
                    "runtime_state_path": "C:/secret/state/account_runtime.json",
                    "cookie": {"path": "C:/secret/state/cookies/default.json"},
                    "runtime": {"bot_state": "running", "monitor_state": "running"},
                    "pending_qr_count": 1,
                    "binding_count": 2,
                    "adapter_counts": {"discord": 1, "line": 1},
                }
            ],
        )
        encoded = json.dumps(snapshot, ensure_ascii=False)

        for forbidden in (
            "C:/secret",
            "secret-channel",
            "raw-qr-data",
            "raw-secret-payload",
            "secret-token",
            "secret-qr",
            "super-secret",
        ):
            self.assertNotIn(forbidden, encoded)
        self.assertIn("[redacted]", encoded)

    def test_dashboard_formatter_outputs_stable_sections(self) -> None:
        snapshot = build_observability_snapshot(
            self.make_status_report(),
            log_summary=self.make_log_summary(),
            recent_logs=self.make_recent_logs(),
        )

        text = "\n".join(format_dashboard_snapshot(snapshot))

        self.assertIn("THU TronClass Dashboard", text)
        self.assertIn("Profile: default", text)
        self.assertIn("Runtime: bot running; monitor running", text)
        self.assertIn("Pending QR: 1", text)
        self.assertIn("Recent notable events:", text)

    def test_recent_event_classifier_prioritizes_important_events(self) -> None:
        recent = classify_recent_events(self.make_recent_logs(), limit=2)

        self.assertEqual(len(recent["notable"]), 2)
        self.assertEqual(recent["notable"][0]["event"], "qr_submit")
        self.assertEqual(recent["notable"][1]["event"], "radar_answer")

    def test_recent_event_classifier_falls_back_to_latest_records(self) -> None:
        recent = classify_recent_events(
            [
                {"timestamp": "1", "event": "heartbeat", "status": "success"},
                {"timestamp": "2", "event": "idle", "status": "success"},
            ],
            limit=1,
        )

        self.assertEqual(len(recent["notable"]), 1)
        self.assertEqual(recent["notable"][0]["event"], "idle")

    def test_log_summary_formatter_includes_counts_and_recent_events(self) -> None:
        text = "\n".join(format_log_summary(self.make_log_summary(), self.make_recent_logs()))

        self.assertIn("Files: 2  Records: 4", text)
        self.assertIn("Top events: rollcall_check=2", text)
        self.assertIn("Top statuses: success=2", text)
        self.assertIn("Recent notable events:", text)
        self.assertNotIn("secret-token", text)

    def test_log_summary_formatter_handles_empty_recent_logs(self) -> None:
        text = "\n".join(format_log_summary(self.make_log_summary(), []))

        self.assertIn("Recent notable events:", text)
        self.assertIn(" - none", text)

    def test_dashboard_formatter_marks_stale_monitor_and_missing_cookie(self) -> None:
        report = self.make_status_report()
        report["cookie"] = {"enabled": True, "exists": False, "valid": False, "age": "missing"}
        report["runtime_state"]["heartbeat_stale"] = True
        snapshot = build_observability_snapshot(
            report,
            log_summary=self.make_log_summary(),
            recent_logs=[],
        )

        text = "\n".join(format_dashboard_snapshot(snapshot))

        self.assertIn("monitor running (stale)", text)
        self.assertIn("Cookie: missing", text)


# --- merged from tests/test_webview_sync.py ---
THU_PROVIDER = {
    "key": "thu",
    "label": "THU",
    "base_url": "https://ilearn.thu.edu.tw",
    "login_url": "https://tcidentity.thu.edu.tw/login",
    "rollcalls_url": "https://ilearn.thu.edu.tw/api/radar/rollcalls",
    "support_level": "ready",
    "status": "ready",
}

FJU_PROVIDER = {
    "key": "fju",
    "label": "FJU",
    "base_url": "https://elearn2.fju.edu.tw",
    "login_url": "https://elearn2.fju.edu.tw/login",
    "rollcalls_url": "https://elearn2.fju.edu.tw/api/radar/rollcalls",
    "support_level": "experimental",
    "status": "experimental",
    "allow_experimental": False,
}


def config(
    *,
    enabled: bool = False,
    allow_import: bool = False,
    domains=None,
    names=None,
    allow_exp: bool = False,
):
    return {
        "webview": {
            "cookie_sync": {
                "enabled": enabled,
                "allow_cookie_import": allow_import,
                "allowed_domains": list(domains or []),
                "cookie_name_allowlist": list(names or ["session"]),
                "allow_experimental_provider": allow_exp,
            }
        }
    }


class WebViewSyncTest(unittest.TestCase):
    def test_parse_flat_list_mapping_and_playwright_storage_state(self) -> None:
        flat = [
            {"name": "session", "value": "secret-session", "domain": "ilearn.thu.edu.tw", "path": "/"}
        ]
        wrapped = {"cookies": flat}
        playwright = {"cookies": flat, "origins": []}

        self.assertEqual(parse_webview_cookie_export(flat)[0].name, "session")
        self.assertEqual(parse_webview_cookie_export(json.dumps(wrapped))[0].domain, "ilearn.thu.edu.tw")
        self.assertEqual(parse_webview_cookie_export(playwright)[0].path, "/")

    def test_parse_rejects_invalid_or_missing_cookie_records(self) -> None:
        with self.assertRaises(WebViewSyncError) as invalid_json:
            parse_webview_cookie_export("{not-json")
        self.assertEqual(invalid_json.exception.reason, "invalid_json")

        with self.assertRaises(WebViewSyncError) as no_valid:
            parse_webview_cookie_export([{"value": "missing-name"}])
        self.assertEqual(no_valid.exception.reason, "no_valid_cookies")

    def test_preview_applies_domain_and_cookie_name_allowlists(self) -> None:
        records = parse_webview_cookie_export(
            [
                {"name": "session", "value": "secret-session", "domain": ".ilearn.thu.edu.tw", "path": "/"},
                {"name": "remember", "value": "secret-token", "domain": "ilearn.thu.edu.tw", "path": "/"},
                {"name": "session", "value": "cross-domain-secret", "domain": "evil.example", "path": "/"},
            ]
        )

        preview = build_webview_cookie_preview(
            records,
            config=config(domains=["ilearn.thu.edu.tw"]),
            provider=THU_PROVIDER,
            profile="default",
        )

        encoded = json.dumps(preview, ensure_ascii=False)
        self.assertEqual(preview["accepted_count"], 1)
        self.assertEqual(preview["rejected_count"], 2)
        self.assertTrue(preview["has_session"])
        self.assertIn("session", preview["accepted_cookie_names"])
        self.assertIn("remember", preview["rejected_cookie_names"])
        self.assertNotIn("secret-session", encoded)
        self.assertNotIn("secret-token", encoded)
        self.assertNotIn("cross-domain-secret", encoded)

    def test_status_reports_gates_and_experimental_provider_rules(self) -> None:
        status = build_webview_sync_status(
            config(enabled=True, allow_import=True),
            provider=FJU_PROVIDER,
        )

        self.assertFalse(status["can_import"])
        self.assertIn("experimental_provider_import_disabled", status["warnings"])

        provider = dict(FJU_PROVIDER)
        provider["allow_experimental"] = True
        allowed = build_webview_sync_status(
            config(enabled=True, allow_import=True, allow_exp=True),
            provider=provider,
        )
        self.assertTrue(allowed["can_import"])

    def test_import_gate_off_is_rejected_and_save_false_does_not_write(self) -> None:
        records = parse_webview_cookie_export(
            [{"name": "session", "value": "secret-session", "domain": "ilearn.thu.edu.tw", "path": "/"}]
        )
        with tempfile.TemporaryDirectory() as temp_dir:
            base = Path(temp_dir)
            preview = import_webview_cookies(
                base,
                "default",
                records,
                config=config(enabled=False, allow_import=False),
                provider=THU_PROVIDER,
                save=False,
            )
            self.assertFalse(preview["saved"])
            self.assertFalse(cookie_path(base, "default").exists())

            with self.assertRaises(WebViewSyncError) as blocked:
                import_webview_cookies(
                    base,
                    "default",
                    records,
                    config=config(enabled=False, allow_import=True),
                    provider=THU_PROVIDER,
                    save=True,
                )
            self.assertEqual(blocked.exception.reason, "webview_cookie_sync_disabled")

    def test_import_save_writes_existing_cookie_cache_format_without_raw_export(self) -> None:
        records = parse_webview_cookie_export(
            [{"name": "session", "value": "secret-session", "domain": "ilearn.thu.edu.tw", "path": "/"}]
        )
        with tempfile.TemporaryDirectory() as temp_dir:
            base = Path(temp_dir)
            with patch("troTHU.webview_sync._validate_api_session", return_value=True):
                result = import_webview_cookies(
                    base,
                    "default",
                    records,
                    config=config(enabled=True, allow_import=True),
                    provider=THU_PROVIDER,
                    save=True,
                )
            path = cookie_path(base, "default")
            raw = path.read_text(encoding="utf-8")
            stored = json.loads(raw)

        self.assertTrue(result["saved"])
        self.assertEqual(result["cookie_cache"]["file"], "default.json")
        self.assertEqual(stored, [{"key": "session", "value": "secret-session", "domain": "ilearn.thu.edu.tw", "path": "/"}])
        self.assertNotIn("secret-session", json.dumps(result, ensure_ascii=False))

    def test_experimental_provider_import_requires_both_gates(self) -> None:
        records = parse_webview_cookie_export(
            [{"name": "session", "value": "secret-session", "domain": "elearn2.fju.edu.tw", "path": "/"}]
        )
        with tempfile.TemporaryDirectory() as temp_dir:
            with self.assertRaises(WebViewSyncError) as blocked:
                import_webview_cookies(
                    Path(temp_dir),
                    "default",
                    records,
                    config=config(enabled=True, allow_import=True, allow_exp=False),
                    provider=FJU_PROVIDER,
                    save=True,
                )
            self.assertEqual(blocked.exception.reason, "experimental_provider_import_disabled")

            provider = dict(FJU_PROVIDER)
            provider["allow_experimental"] = True
            with patch("troTHU.webview_sync._validate_api_session", return_value=True):
                result = import_webview_cookies(
                    Path(temp_dir),
                    "default",
                    records,
                    config=config(enabled=True, allow_import=True, allow_exp=True),
                    provider=provider,
                    save=True,
                )
            self.assertTrue(result["saved"])


class ValidateCookieRecordsTest(unittest.IsolatedAsyncioTestCase):
    """Exercise the async-native cookie validation directly against the fake
    server, in the test's own event loop — no background thread, no asyncio.run
    bridging (the ThreadedFakeServer workaround is gone)."""

    async def test_accepts_valid_and_rejects_invalid_session(self) -> None:
        from tests.fake_tron_server import FakeTronServer
        from troTHU.webview_sync import validate_cookie_records

        async with FakeTronServer() as server:
            provider_config = {
                "key": "custom_manual",
                "base_url": server.base_url,
                "login_url": server.base_url + "/login",
                "auth_flow": "manual_cookie_only",
                "session_cookie_domain": "127.0.0.1",
            }
            valid = parse_webview_cookie_export(  # matches FakeTronServer.session_cookie
                [{"name": "session", "value": "local-test-session", "domain": "127.0.0.1", "path": "/"}]
            )
            invalid = parse_webview_cookie_export(
                [{"name": "session", "value": "bad-session-cookie", "domain": "127.0.0.1", "path": "/"}]
            )
            self.assertTrue(await validate_cookie_records(provider_config, valid))
            self.assertFalse(await validate_cookie_records(provider_config, invalid))


class WebViewImportValidationGateTest(unittest.TestCase):
    """import_webview_cookies must run API validation for providers whose adapter
    requires it and refuse to save on failure. The network probe is stubbed so the
    test stays offline and loop-free."""

    def _config(self):
        return {"webview": {"cookie_sync": {
            "enabled": True, "allow_cookie_import": True, "allow_experimental_provider": True,
        }}}

    def _provider(self):
        return {
            "key": "custom_manual",
            "base_url": "https://tron.example.edu",
            "login_url": "https://tron.example.edu/login",
            "auth_flow": "manual_cookie_only",
            "session_cookie_domain": "tron.example.edu",
        }

    def _records(self):
        return parse_webview_cookie_export(
            [{"name": "session", "value": "abc", "domain": "tron.example.edu", "path": "/"}]
        )

    def test_import_saves_when_validation_passes(self) -> None:
        from unittest.mock import patch
        with patch("troTHU.webview_sync._validate_api_session", return_value=True):
            with tempfile.TemporaryDirectory() as temp_dir:
                result = import_webview_cookies(
                    Path(temp_dir), "default", self._records(),
                    config=self._config(), provider=self._provider(), save=True,
                )
                self.assertTrue(result["saved"])

    def test_import_blocks_when_validation_fails(self) -> None:
        from unittest.mock import patch
        with patch("troTHU.webview_sync._validate_api_session", return_value=False):
            with tempfile.TemporaryDirectory() as temp_dir:
                with self.assertRaises(WebViewSyncError) as blocked:
                    import_webview_cookies(
                        Path(temp_dir), "default", self._records(),
                        config=self._config(), provider=self._provider(), save=True,
                    )
                self.assertEqual(blocked.exception.reason, "api_validation_failed")


class WebViewPreviewWarningTest(unittest.TestCase):
    def test_preview_warns_when_session_cookie_missing(self) -> None:
        # An accepted-but-non-session cookie must still surface the missing-session
        # hint (regression guard: this warning was removed and is now restored).
        records = parse_webview_cookie_export(
            [{"name": "remember_token", "value": "x", "domain": "ilearn.thu.edu.tw", "path": "/"}]
        )
        preview = build_webview_cookie_preview(
            records,
            config={"webview": {"cookie_sync": {"cookie_name_allowlist": ["session", "remember_token"]}}},
            provider=THU_PROVIDER,
        )
        self.assertIn("session_cookie_missing", preview["warnings"])
        self.assertFalse(preview["has_session"])


class WebViewStatusIsCheapTest(unittest.TestCase):
    def test_status_reports_validation_requirement_without_network(self) -> None:
        # Status must be a side-effect-free snapshot: it reports whether validation
        # WILL be required, but never performs the network probe itself.
        from unittest.mock import patch
        manual_provider = {"key": "custom_manual", "base_url": "https://tron.example.edu",
                           "auth_flow": "manual_cookie_only"}
        with patch("troTHU.webview_sync.validate_cookie_records") as probe:
            status = build_webview_sync_status(
                {"webview": {"cookie_sync": {"enabled": True, "allow_cookie_import": True}}},
                provider=manual_provider,
            )
        probe.assert_not_called()
        self.assertEqual(status["cookie_validation"], "required")


if __name__ == "__main__":
    unittest.main()


# --- merged from tests/test_ux_phase.py ---
try:
    import aiohttp
    from aiohttp import web
except (ImportError, ModuleNotFoundError):
    aiohttp = None
    web = None



class UxPhaseUtilityTest(unittest.TestCase):
    def test_pending_qr_registry_adds_matches_and_prunes(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            base_dir = Path(temp_dir)
            add_pending_qr(base_dir, profile="default", rollcall_id=123, message="scan needed")

            pending = list_pending_qr(base_dir)

            self.assertEqual(len(pending), 1)
            self.assertEqual(pending[0].rollcall_id, "123")
            self.assertEqual(match_pending_qr(base_dir, "123")[0].profile, "default")

    def test_pending_qr_registry_tracks_provider_and_legacy_records(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            base_dir = Path(temp_dir)
            add_pending_qr(base_dir, profile="default", rollcall_id=123, provider="thu")
            add_pending_qr(base_dir, profile="alt", rollcall_id=123, provider="fju")

            self.assertEqual([item.profile for item in match_pending_qr(base_dir, "123", provider="thu")], ["default"])
            self.assertEqual([item.profile for item in match_pending_qr(base_dir, "123", provider="fju")], ["alt"])
            self.assertEqual(match_pending_qr(base_dir, "123", provider="tku"), [])
            self.assertTrue(remove_pending_qr(base_dir, profile="default", rollcall_id=123, provider="thu"))
            self.assertEqual(match_pending_qr(base_dir, "123", provider="thu"), [])

    def test_pending_qr_registry_reads_legacy_record_as_thu(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            base_dir = Path(temp_dir)
            state = base_dir / "state"
            state.mkdir()
            (state / "pending_qr.json").write_text(
                json.dumps(
                    {
                        "pending": {
                            "default:88": {
                                "profile": "default",
                                "rollcall_id": "88",
                                "expires_at": 9999999999,
                            }
                        }
                    }
                ),
                encoding="utf-8",
            )

            matches = match_pending_qr(base_dir, 88, provider="thu")

            self.assertEqual(len(matches), 1)
            self.assertEqual(matches[0].provider, "thu")

    def test_debug_bundle_redacts_public_payload(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            output = export_debug_bundle(
                Path(temp_dir) / "bundle.zip",
                config_summary={"password": "secret", "cookie": {"path": "ok"}},
                doctor_report={},
                log_summary={},
                recent_logs=[],
            )

            self.assertTrue(output.exists())
            self.assertEqual(output.suffix, ".zip")

    def test_tail_log_records_reads_recent_jsonl(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            log_dir = Path(temp_dir)
            path = log_dir / "2026" / "5" / "20.jsonl"
            path.parent.mkdir(parents=True)
            path.write_text(
                json.dumps({"event": "one"}, ensure_ascii=False) + "\n"
                + json.dumps({"event": "two"}, ensure_ascii=False) + "\n",
                encoding="utf-8",
            )

            records = tail_log_records(log_dir, 1)

            self.assertEqual(records[0]["event"], "two")

    def test_adapter_text_maps_to_control_command(self) -> None:
        command = map_adapter_command("qr payload-data", adapter="discord", source_user_id="u1")

        self.assertIsNotNone(command)
        self.assertEqual(command.action, "qr-submit")
        self.assertEqual(command.payload["payload"], "payload-data")


class UxPhaseCliTest(unittest.TestCase):
    def setUp(self) -> None:
        self.original_config = copy.deepcopy(tron.CONFIG)

    def tearDown(self) -> None:
        tron.CONFIG.clear()
        tron.CONFIG.update(copy.deepcopy(self.original_config))

    def test_init_dry_run_json_does_not_save(self) -> None:
        with (
            patch.object(tron, "bootstrap_config"),
            patch.object(tron, "save_config") as save_config,
            patch("builtins.print"),
        ):
            result = tron.main(
                [
                    "init",
                    "--dry-run",
                    "--yes",
                    "--json",
                    "--profile",
                    "demo",
                    "--user",
                    "s123",
                    "--store",
                    "none",
                ]
            )

        self.assertEqual(result, 0)
        save_config.assert_not_called()

    def test_status_and_doctor_json_commands_return_success(self) -> None:
        tron.CONFIG.update(tron.normalize_config({"account": {"user": "s1", "passwd": ""}}))
        outputs = []
        with patch.object(tron, "bootstrap_config"), patch("builtins.print", side_effect=outputs.append):
            self.assertEqual(tron.main(["status", "--json"]), 0)
            self.assertEqual(tron.main(["doctor", "--json"]), 0)
        status_payload = json.loads(outputs[0])
        doctor_payload = json.loads(outputs[1])
        self.assertTrue(status_payload["course_discovery"]["enabled"])
        self.assertIn("course_discovery", doctor_payload)

    def test_account_show_and_doctor_commands(self) -> None:
        tron.CONFIG.update(tron.normalize_config({"account": {"user": "s1", "passwd": ""}}))
        with patch.object(tron, "bootstrap_config"), patch("builtins.print"):
            self.assertEqual(tron.main(["account", "show", "--json"]), 0)
            self.assertEqual(tron.main(["account", "doctor", "--json"]), 0)

    def test_qr_pending_command_reads_registry(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            with patch.object(tron, "BASE_DIR", Path(temp_dir)):
                add_pending_qr(Path(temp_dir), profile="default", rollcall_id=88)
                with patch.object(tron, "bootstrap_config"), patch("builtins.print"):
                    result = tron.main(["qr", "pending", "--json"])

            self.assertEqual(result, 0)

    def test_qr_paste_previews_then_dispatches_submit(self) -> None:
        async_submit = AsyncMock(return_value=0)
        with (
            patch.object(tron, "bootstrap_config"),
            patch.object(tron, "qr_command", async_submit),
            patch("builtins.print"),
        ):
            result = tron.main(["qr", "paste", "--yes", '{"rollcallId": 88, "data": "qr"}'])

        self.assertEqual(result, 0)
        async_submit.assert_awaited_once()

    def test_qr_paste_json_preview_includes_diagnostic_without_payload_data(self) -> None:
        outputs = []
        async_submit = AsyncMock(return_value=0)
        with (
            patch.object(tron, "bootstrap_config"),
            patch.object(tron, "qr_command", async_submit),
            patch("builtins.print", side_effect=outputs.append),
        ):
            result = tron.main(["qr", "paste", "--json", "--yes", '{"rollcallId": 88, "data": "secret-qr"}'])

        self.assertEqual(result, 0)
        preview = json.loads(outputs[0])
        encoded = json.dumps(preview, ensure_ascii=False)
        self.assertTrue(preview["ok"])
        self.assertEqual(preview["source_kind"], "json")
        self.assertIn("payload_hash", preview)
        self.assertNotIn("secret-qr", encoded)

    def test_qr_preview_redacts_payload_data(self) -> None:
        preview = tron.build_qr_preview('{"rollcallId": 88, "data": "super-secret-qr"}')

        self.assertTrue(preview["ok"])
        self.assertIn("data", preview["field_names"])
        self.assertNotIn("super-secret-qr", json.dumps(preview, ensure_ascii=False))

    def test_qr_fanout_no_match_does_not_submit_active_profile(self) -> None:
        async_submit = AsyncMock(return_value=0)
        with tempfile.TemporaryDirectory() as temp_dir:
            with (
                patch.object(tron, "BASE_DIR", Path(temp_dir)),
                patch.object(tron, "qr_command", async_submit),
                patch("builtins.print"),
            ):
                result = asyncio.run(tron.qr_fanout_command('{"rollcallId": 404, "data": "qr"}'))

        self.assertEqual(result, 1)
        async_submit.assert_not_awaited()

    def test_qr_scan_dispatches_local_server(self) -> None:
        async_server = AsyncMock(return_value=None)
        with (
            patch.object(tron, "bootstrap_config"),
            patch.object(tron, "run_scanner_server", async_server),
        ):
            result = tron.main(["qr", "scan", "--port", "9999"])

        self.assertEqual(result, 0)
        async_server.assert_awaited_once()

    def test_logs_export_writes_debug_bundle(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            base_dir = Path(temp_dir)
            log_dir = base_dir / "log"
            log_file = log_dir / "2026" / "5" / "20.jsonl"
            log_file.parent.mkdir(parents=True)
            log_file.write_text(json.dumps({"event": "ok"}) + "\n", encoding="utf-8")
            with (
                patch.object(tron, "BASE_DIR", base_dir),
                patch.object(tron, "PATH", log_dir),
                patch.object(tron, "bootstrap_config"),
                patch("builtins.print"),
            ):
                result = tron.main(["logs", "export"])

            self.assertEqual(result, 0)
            self.assertTrue((base_dir / "state" / "debug-bundle").exists())

    def test_logs_summarize_includes_notable_events(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            log_dir = Path(temp_dir) / "log"
            log_file = log_dir / "2026" / "5" / "20.jsonl"
            log_file.parent.mkdir(parents=True)
            log_file.write_text(
                json.dumps(
                    {
                        "timestamp": "2026-05-20T01:00:00",
                        "event": "number_rollcall",
                        "status": "failed",
                        "message": "token=super-secret",
                    }
                )
                + "\n",
                encoding="utf-8",
            )
            outputs = []
            with (
                patch.object(tron, "PATH", log_dir),
                patch.object(tron, "bootstrap_config"),
                patch("builtins.print", side_effect=outputs.append),
            ):
                result = tron.main(["logs", "summarize", "--limit", "5"])

        self.assertEqual(result, 0)
        text = "\n".join(outputs)
        self.assertIn("Top events: number_rollcall=1", text)
        self.assertIn("Recent notable events:", text)
        self.assertNotIn("super-secret", text)

    def test_logs_summarize_json_includes_recent_events(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            log_dir = Path(temp_dir) / "log"
            log_file = log_dir / "2026" / "5" / "20.jsonl"
            log_file.parent.mkdir(parents=True)
            log_file.write_text(
                json.dumps(
                    {
                        "timestamp": "2026-05-20T01:00:00",
                        "event": "qr_submit",
                        "status": "failed",
                        "payload_excerpt": "raw-secret-payload",
                    }
                )
                + "\n",
                encoding="utf-8",
            )
            outputs = []
            with (
                patch.object(tron, "PATH", log_dir),
                patch.object(tron, "bootstrap_config"),
                patch("builtins.print", side_effect=outputs.append),
            ):
                result = tron.main(["logs", "summary", "--json", "--limit", "5"])

        self.assertEqual(result, 0)
        payload = json.loads(outputs[0])
        encoded = json.dumps(payload, ensure_ascii=False)
        self.assertIn("recent_events", payload)
        self.assertEqual(payload["recent_events"]["events"]["qr_submit"], 1)
        self.assertNotIn("raw-secret-payload", encoded)

    def test_dashboard_once_smoke(self) -> None:
        outputs = []
        with patch.object(tron, "bootstrap_config"), patch("builtins.print", side_effect=outputs.append):
            result = tron.main(["dashboard", "--once"])

        self.assertEqual(result, 0)
        text = "\n".join(outputs)
        self.assertIn("THU TronClass Dashboard", text)
        self.assertIn("Recent notable events:", text)

    def test_dashboard_json_outputs_one_snapshot(self) -> None:
        outputs = []
        with patch.object(tron, "bootstrap_config"), patch("builtins.print", side_effect=outputs.append):
            result = tron.main(["dashboard", "--json"])

        self.assertEqual(result, 0)
        self.assertEqual(len(outputs), 1)
        payload = json.loads(outputs[0])
        self.assertIn("active_profile", payload)
        self.assertIn("recent_events", payload)
        self.assertNotIn("cookies", json.dumps(payload, ensure_ascii=False).lower())


@unittest.skipUnless(aiohttp is not None and web is not None, "aiohttp.web is required")
class LocalScannerAppTest(unittest.IsolatedAsyncioTestCase):
    async def asyncSetUp(self) -> None:
        async def submitter(payload: str, fanout: bool):
            return {"ok": True, "payload_present": bool(payload), "fanout": fanout}

        self.app = create_scanner_app(
            previewer=lambda payload: {"ok": True, "payload_present": bool(payload)},
            submitter=submitter,
            token="test-token",
            token_expires_at=9999999999,
        )
        self.runner = web.AppRunner(self.app)
        await self.runner.setup()
        self.site = web.TCPSite(self.runner, "127.0.0.1", 0)
        await self.site.start()
        self.port = self.site._server.sockets[0].getsockname()[1]
        self.base_url = f"http://127.0.0.1:{self.port}"
        self.session = aiohttp.ClientSession()

    async def asyncTearDown(self) -> None:
        await self.session.close()
        await self.runner.cleanup()

    async def test_scanner_preview_and_submit_require_valid_token(self) -> None:
        context = await self.session.get(
            self.base_url + "/api/qr/context",
            headers={"X-Local-Token": "test-token"},
        )
        self.assertEqual(context.status, 200)
        context_payload = await context.json()
        self.assertEqual(context_payload["mode"], "optional_companion_qr_scanner")
        self.assertIn("token_ttl_remaining_seconds", context_payload)
        self.assertEqual(context_payload["view_state"]["state"], "idle")

        bad_context = await self.session.get(
            self.base_url + "/api/qr/context",
            headers={"X-Local-Token": "bad"},
        )
        self.assertEqual(bad_context.status, 401)
        bad_context.release()

        bad = await self.session.post(
            self.base_url + "/api/qr/preview",
            json={"payload": "payload"},
            headers={"X-Local-Token": "bad"},
        )
        self.assertEqual(bad.status, 401)
        bad.release()

        good = await self.session.post(
            self.base_url + "/api/qr/preview",
            json={"payload": "payload"},
            headers={"X-Local-Token": "test-token"},
        )
        self.assertEqual(good.status, 200)
        good_payload = await good.json()
        self.assertTrue(good_payload["payload_present"])
        self.assertEqual(good_payload["view_state"]["state"], "preview_ok")

        submitted = await self.session.post(
            self.base_url + "/api/qr/submit",
            json={"payload": "payload", "fanout": True},
            headers={"X-Local-Token": "test-token"},
        )
        self.assertEqual(submitted.status, 200)
        submitted_payload = await submitted.json()
        self.assertTrue(submitted_payload["fanout"])
        self.assertEqual(submitted_payload["view_state"]["state"], "submitted")
        self.assertTrue(submitted_payload["view_state"]["fanout"])

    async def test_scanner_html_contains_mobile_ux_markers(self) -> None:
        response = await self.session.get(self.base_url + "/")
        self.assertEqual(response.status, 200)
        html = await response.text()
        self.assertIn("data-qr-preview-card", html)
        self.assertIn("data-qr-result-card", html)
        self.assertIn("data-camera-fallback", html)
        self.assertIn("data-fanout-toggle", html)
        self.assertIn("test-token", html)
        self.assertNotIn("__TOKEN__", html)

    async def test_scanner_context_rejects_invalid_token(self) -> None:
        response = await self.session.get(
            self.base_url + "/api/qr/context",
            headers={"X-Local-Token": "wrong-token"},
        )
        self.assertEqual(response.status, 401)
        self.assertIn("invalid", await response.text())

    async def test_scanner_preview_with_real_qr_previewer_redacts_payload(self) -> None:
        app = create_scanner_app(
            previewer=tron.build_qr_preview,
            submitter=AsyncMock(return_value={"ok": True}),
            token="preview-token",
            token_expires_at=9999999999,
        )
        runner = web.AppRunner(app)
        await runner.setup()
        site = web.TCPSite(runner, "127.0.0.1", 0)
        await site.start()
        port = site._server.sockets[0].getsockname()[1]
        try:
            response = await self.session.post(
                f"http://127.0.0.1:{port}/api/qr/preview",
                json={"payload": '{"rollcallId": 88, "data": "scanner-secret"}'},
                headers={"X-Local-Token": "preview-token"},
            )
            self.assertEqual(response.status, 200)
            payload = await response.json()
            encoded = json.dumps(payload, ensure_ascii=False)
            self.assertTrue(payload["ok"])
            self.assertIn("diagnostic", payload)
            self.assertEqual(payload["view_state"]["state"], "preview_ok")
            self.assertNotIn("scanner-secret", encoded)
        finally:
            await runner.cleanup()

    async def test_scanner_submit_view_state_handles_no_match_and_partial_failure(self) -> None:
        async def submitter(_payload: str, fanout: bool):
            if fanout:
                return {
                    "ok": False,
                    "status": "partial_failed",
                    "provider": "thu",
                    "rollcall_id": "88",
                    "match_count": 2,
                    "results": [
                        {"profile": "default", "provider": "thu", "ok": True, "status": "submitted"},
                        {"profile": "alt", "provider": "thu", "ok": False, "status": "failed"},
                    ],
                }
            return {"ok": False, "status": "no_matches", "provider": "thu", "rollcall_id": "88"}

        app = create_scanner_app(
            previewer=lambda payload: {"ok": True, "provider": "thu", "rollcall_id": "88"},
            submitter=submitter,
            token="submit-token",
            token_expires_at=9999999999,
        )
        runner = web.AppRunner(app)
        await runner.setup()
        site = web.TCPSite(runner, "127.0.0.1", 0)
        await site.start()
        port = site._server.sockets[0].getsockname()[1]
        try:
            no_match = await self.session.post(
                f"http://127.0.0.1:{port}/api/qr/submit",
                json={"payload": "value"},
                headers={"X-Local-Token": "submit-token"},
            )
            no_match_payload = await no_match.json()
            self.assertEqual(no_match_payload["view_state"]["state"], "no_matches")

            partial = await self.session.post(
                f"http://127.0.0.1:{port}/api/qr/submit",
                json={"payload": "value", "fanout": True},
                headers={"X-Local-Token": "submit-token"},
            )
            partial_payload = await partial.json()
            self.assertEqual(partial_payload["view_state"]["state"], "partial_failed")
            self.assertEqual(len(partial_payload["view_state"]["profile_results"]), 2)
        finally:
            await runner.cleanup()

    async def test_scanner_rejects_expired_token(self) -> None:
        app = create_scanner_app(
            previewer=lambda payload: {"ok": True},
            submitter=AsyncMock(return_value={"ok": True}),
            token="expired",
            token_expires_at=1,
        )
        runner = web.AppRunner(app)
        await runner.setup()
        site = web.TCPSite(runner, "127.0.0.1", 0)
        await site.start()
        port = site._server.sockets[0].getsockname()[1]
        try:
            context = await self.session.get(
                f"http://127.0.0.1:{port}/api/qr/context",
                headers={"X-Local-Token": "expired"},
            )
            self.assertEqual(context.status, 401)
            response = await self.session.post(
                f"http://127.0.0.1:{port}/api/qr/preview",
                json={"payload": "payload"},
                headers={"X-Local-Token": "expired"},
            )
            self.assertEqual(response.status, 401)
            self.assertIn("expired", await response.text())
        finally:
            await runner.cleanup()

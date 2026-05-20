import copy
import asyncio
import json
import tempfile
import unittest
from pathlib import Path
from unittest.mock import AsyncMock, patch

try:
    import aiohttp
    from aiohttp import web
except (ImportError, ModuleNotFoundError):
    aiohttp = None
    web = None

from troTHU import tron
from troTHU.adapter_bridge import map_adapter_command
from troTHU.local_scanner import create_scanner_app
from troTHU.pending_qr import add_pending_qr, list_pending_qr, match_pending_qr, remove_pending_qr
from troTHU.ux_tools import export_debug_bundle, tail_log_records


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

import copy
import json
import tempfile
from pathlib import Path
from types import SimpleNamespace
import unittest
from unittest.mock import AsyncMock, patch

from troTHU import tron
from troTHU.release_checklist import EXPECTED_WINDOWS_ZIP


class TronCliSmokeTest(unittest.TestCase):
    def setUp(self) -> None:
        self.original_config = copy.deepcopy(tron.CONFIG)

    def tearDown(self) -> None:
        tron.CONFIG.clear()
        tron.CONFIG.update(copy.deepcopy(self.original_config))

    def test_status_command_dispatches_without_running_monitor(self) -> None:
        with (
            patch.object(tron, "bootstrap_config"),
            patch.object(tron, "print_status") as print_status,
        ):
            result = tron.main(["status"])

        self.assertEqual(result, 0)
        print_status.assert_called_once()

    def test_run_console_flags_dispatch(self) -> None:
        with patch.object(tron, "run_monitor_forever", return_value=0) as runner:
            self.assertEqual(tron.main([]), 0)
            self.assertEqual(tron.main(["run"]), 0)
            self.assertEqual(tron.main(["run", "--classic"]), 0)
            self.assertEqual(tron.main(["run", "--no-input"]), 0)
            self.assertEqual(tron.main(["run", "--ignore-attendance-rate-gate"]), 0)

        self.assertEqual(runner.call_args_list[0].kwargs["no_input"], False)
        self.assertEqual(runner.call_args_list[1].kwargs["no_input"], False)
        self.assertEqual(runner.call_args_list[2].kwargs["no_input"], False)
        self.assertEqual(runner.call_args_list[3].kwargs["no_input"], True)
        self.assertIsNone(runner.call_args_list[1].kwargs["ignore_attendance_rate_gate"])
        self.assertTrue(runner.call_args_list[4].kwargs["ignore_attendance_rate_gate"])

    def test_control_command_is_removed(self) -> None:
        with self.assertRaises(SystemExit):
            tron.main(["control", "status"])

    def test_config_show_doctor_and_compact_commands_dispatch(self) -> None:
        outputs = []
        with patch.object(tron, "bootstrap_config"), patch("builtins.print", side_effect=outputs.append):
            show_result = tron.main(["config", "show", "--json"])
            doctor_result = tron.main(["config", "doctor", "--json"])
            compact_result = tron.main(["config", "compact", "--dry-run", "--json"])

        self.assertEqual(show_result, 0)
        self.assertEqual(doctor_result, 0)
        self.assertEqual(compact_result, 0)
        self.assertEqual(json.loads(outputs[0])["version"], "config-view-v1")
        self.assertIn("summary", json.loads(outputs[1]))
        self.assertEqual(json.loads(outputs[2])["status"], "dry_run")

    def test_config_advanced_command_dispatches_legacy_notepad(self) -> None:
        with (
            patch.object(tron, "bootstrap_config"),
            patch.object(tron, "open_config_in_legacy_notepad", return_value={"ok": True, "status": "opened"}) as opener,
        ):
            result = tron.main(["config", "advanced", "--json"])

        self.assertEqual(result, 0)
        opener.assert_called_once()

    def test_account_list_command_dispatches(self) -> None:
        tron.CONFIG.update(
            tron.normalize_config(
                {
                    "account": {"user": "u1", "passwd": ""},
                    "accounts": {
                        "current": "default",
                        "profiles": {"default": {"user": "u1", "passwd": "", "label": ""}},
                    },
                }
            )
        )

        with patch.object(tron, "bootstrap_config"):
            result = tron.main(["account", "list"])

        self.assertEqual(result, 0)

    def test_account_state_command_dispatches(self) -> None:
        tron.CONFIG.update(
            tron.normalize_config(
                {
                    "account": {"user": "u1", "passwd": ""},
                    "accounts": {
                        "current": "default",
                        "profiles": {"default": {"user": "u1", "passwd": "", "label": ""}},
                    },
                }
            )
        )

        with (
            patch.object(tron, "bootstrap_config"),
            patch("builtins.print") as print_mock,
        ):
            result = tron.main(["account", "state", "--json"])

        self.assertEqual(result, 0)
        payload = json.loads(print_mock.call_args.args[0])
        self.assertEqual(payload["profile"], "default")
        self.assertIn("runtime", payload)

    def test_refresh_command_is_safe_when_cookie_cache_is_missing(self) -> None:
        tron.CONFIG.update(tron.normalize_config({"account": {"user": "u1", "passwd": ""}}))

        with patch.object(tron, "bootstrap_config"):
            result = tron.main(["refresh"])

        self.assertEqual(result, 0)

    def test_debug_capture_command_dispatches(self) -> None:
        def fake_run(coro):
            coro.close()
            return 0

        with (
            patch.object(tron, "bootstrap_config"),
            patch.object(tron.asyncio, "run", side_effect=fake_run) as asyncio_run,
        ):
            result = tron.main(["debug-capture", "--output", "capture.jsonl"])

        self.assertEqual(result, 0)
        asyncio_run.assert_called_once()

    def test_courses_command_dispatches_without_running_monitor(self) -> None:
        def fake_run(coro):
            coro.close()
            return 0

        with (
            patch.object(tron, "bootstrap_config"),
            patch.object(tron.asyncio, "run", side_effect=fake_run) as asyncio_run,
        ):
            result = tron.main(["courses", "--json"])

        self.assertEqual(result, 0)
        asyncio_run.assert_called_once()

    def test_package_check_json_command_dispatches(self) -> None:
        outputs = []
        with patch.object(tron, "bootstrap_config"), patch("builtins.print", side_effect=outputs.append):
            result = tron.main(["package-check", "--json"])

        self.assertIn(result, {0, 1})
        payload = json.loads(outputs[0])
        self.assertIn("pyproject", payload)
        self.assertIn("pyinstaller", payload)

    def test_provider_list_json_command_dispatches(self) -> None:
        outputs = []
        with patch.object(tron, "bootstrap_config"), patch("builtins.print", side_effect=outputs.append):
            result = tron.main(["provider", "list", "--json"])

        self.assertEqual(result, 0)
        payload = json.loads(outputs[0])
        self.assertEqual({item["key"] for item in payload["providers"]}, {"thu", "tku", "tronclass", "scu"})
        self.assertFalse(payload["include_hidden"])

    def test_provider_list_all_json_includes_hidden_fju(self) -> None:
        outputs = []
        with patch.object(tron, "bootstrap_config"), patch("builtins.print", side_effect=outputs.append):
            result = tron.main(["provider", "list", "--all", "--json"])

        self.assertEqual(result, 0)
        payload = json.loads(outputs[0])
        providers = {item["key"]: item for item in payload["providers"]}
        self.assertEqual(set(providers), {"thu", "fju", "tku", "tronclass", "scu"})
        self.assertFalse(providers["fju"]["user_visible"])
        self.assertTrue(providers["fju"]["capabilities"]["radar"])
        self.assertTrue(providers["tronclass"]["user_visible"])

    def test_provider_show_json_command_dispatches(self) -> None:
        outputs = []
        with patch.object(tron, "bootstrap_config"), patch("builtins.print", side_effect=outputs.append):
            result = tron.main(["provider", "show", "fju", "--json"])

        self.assertEqual(result, 0)
        payload = json.loads(outputs[0])
        self.assertEqual(payload["key"], "fju")
        self.assertEqual(payload["auth_flow"], "manual_cookie_only")
        self.assertFalse(payload["user_visible"])
        self.assertTrue(payload["capabilities"]["radar"])
        self.assertEqual(payload["support"]["support_level"], "ready")
        self.assertTrue(payload["support"]["daily_ready"])

    def test_release_check_json_command_dispatches(self) -> None:
        outputs = []
        with patch.object(tron, "bootstrap_config"), patch("builtins.print", side_effect=outputs.append):
            result = tron.main(["release-check", "--json"])

        self.assertIn(result, {0, 1})
        payload = json.loads(outputs[0])
        self.assertIn("package", payload)
        self.assertIn("ci", payload)
        self.assertIn("artifact", payload)
        self.assertIn("build_plan", payload)

    def test_release_check_plan_json_command_dispatches(self) -> None:
        outputs = []
        with patch.object(tron, "bootstrap_config"), patch("builtins.print", side_effect=outputs.append):
            result = tron.main(["release-check", "--plan", "--json"])

        self.assertIn(result, {0, 1})
        payload = json.loads(outputs[0])
        self.assertIn("release", payload)
        self.assertIn("build_plan", payload)
        self.assertFalse(payload["build_plan"]["executes_build"])

    def test_release_build_dry_run_json_command_dispatches(self) -> None:
        outputs = []
        with patch.object(tron, "bootstrap_config"), patch("builtins.print", side_effect=outputs.append):
            result = tron.main(["release-build", "--dry-run", "--json"])

        self.assertEqual(result, 0)
        payload = json.loads(outputs[0])
        self.assertEqual(payload["version"], "release-build-v1")
        self.assertFalse(payload["execute"])
        self.assertIn("preflight", payload)
        self.assertIn(EXPECTED_WINDOWS_ZIP, payload["artifact"]["name"])

    def test_release_build_execute_json_command_dispatches_with_fake_runner(self) -> None:
        outputs = []
        fake_report = {
            "version": "release-build-v1",
            "execute": True,
            "status": "ok",
            "artifact": {"name": EXPECTED_WINDOWS_ZIP, "sha256_short": "abc123"},
            "steps": [],
            "smoke": {"status": "ok"},
        }
        with (
            patch.object(tron, "bootstrap_config"),
            patch.object(tron, "run_release_build_pipeline", return_value=fake_report) as runner,
            patch("builtins.print", side_effect=outputs.append),
        ):
            result = tron.main(["release-build", "--execute", "--dist", "dist", "--work", "build/release", "--json"])

        self.assertEqual(result, 0)
        runner.assert_called_once()
        payload = json.loads(outputs[0])
        self.assertEqual(payload["status"], "ok")
        self.assertEqual(payload["smoke"]["status"], "ok")

    def test_run_allows_fju_provider_without_experimental_flag(self) -> None:
        tron.CONFIG.clear()
        tron.CONFIG.update(
            tron.normalize_config(
                {
                    "account": {"user": "u1", "passwd": ""},
                    "provider": {"current": "fju"},
                }
            )
        )
        with (
            patch.object(tron, "bootstrap_config"),
            patch.object(tron, "ensure_config_now_or_open_editor", return_value={"ok": True}),
            patch.object(tron.time, "sleep"),
            patch.object(tron, "app_main", new=AsyncMock()) as app_main,
            patch("builtins.print"),
        ):
            result = tron.main(["run"])

        self.assertEqual(result, 0)
        app_main.assert_called_once()

    def test_run_interactive_falls_through_to_monitor_when_unconfigured(self) -> None:
        # After the one-time auto-open, a still-unconfigured config must NOT exit the
        # program; it falls through into the monitor so the user can press any key.
        tron.CONFIG.clear()
        tron.CONFIG.update(tron.normalize_config({"account": {"user": "", "passwd": ""}}))
        with (
            patch.object(tron, "bootstrap_config"),
            patch.object(
                tron,
                "ensure_config_now_or_open_editor",
                return_value={"ok": False, "status": "still_unconfigured", "message": "尚未偵測到可用帳密"},
            ),
            patch.object(tron.time, "sleep"),
            patch.object(tron, "app_main", new=AsyncMock()) as app_main,
            patch("builtins.print"),
        ):
            result = tron.main(["run"])

        self.assertEqual(result, 0)
        app_main.assert_called_once()

    def test_app_blueprint_text_command_dispatches(self) -> None:
        outputs = []
        with patch.object(tron, "bootstrap_config"), patch("builtins.print", side_effect=outputs.append):
            result = tron.main(["app", "blueprint"])

        self.assertEqual(result, 0)
        self.assertIn("optional localhost shell core available", outputs[0])

    def test_app_blueprint_json_command_dispatches(self) -> None:
        outputs = []
        with patch.object(tron, "bootstrap_config"), patch("builtins.print", side_effect=outputs.append):
            result = tron.main(["app", "blueprint", "--json"])

        self.assertEqual(result, 0)
        payload = json.loads(outputs[0])
        self.assertEqual(payload["version"], "app-blueprint-v1")
        self.assertEqual(payload["primary_operation"], "CLI + Bot + local scanner")
        self.assertIn("screens", payload)
        self.assertIn("api_contract", payload)
        self.assertTrue(payload["validation"]["ok"])

    def test_app_serve_command_dispatches_without_running_server(self) -> None:
        def fake_run(coro):
            coro.close()
            return 0

        with (
            patch.object(tron, "bootstrap_config"),
            patch.object(tron.asyncio, "run", side_effect=fake_run) as asyncio_run,
        ):
            result = tron.main(["app", "serve", "--port", "9999", "--json"])

        self.assertEqual(result, 0)
        asyncio_run.assert_called_once()

    def test_webview_status_json_command_dispatches_without_network(self) -> None:
        outputs = []
        tron.CONFIG.update(tron.normalize_config({}))
        with patch.object(tron, "bootstrap_config"), patch("builtins.print", side_effect=outputs.append):
            result = tron.main(["webview", "status", "--json"])

        self.assertEqual(result, 0)
        payload = json.loads(outputs[0])
        self.assertEqual(payload["provider"], "thu")
        self.assertFalse(payload["can_import"])

    def test_webview_preview_json_command_is_safe(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            path = Path(temp_dir) / "cookies.json"
            path.write_text(
                json.dumps(
                    [
                        {
                            "name": "session",
                            "value": "secret-session",
                            "domain": "ilearn.thu.edu.tw",
                            "path": "/",
                        }
                    ]
                ),
                encoding="utf-8",
            )
            outputs = []
            tron.CONFIG.update(tron.normalize_config({}))
            with patch.object(tron, "bootstrap_config"), patch("builtins.print", side_effect=outputs.append):
                result = tron.main(["webview", "preview", "--input", str(path), "--json"])

        self.assertEqual(result, 0)
        payload = json.loads(outputs[0])
        self.assertEqual(payload["accepted_count"], 1)
        self.assertNotIn("secret-session", outputs[0])

    def test_webview_import_save_gate_off_rejects(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            path = Path(temp_dir) / "cookies.json"
            path.write_text(
                json.dumps(
                    [{"name": "session", "value": "secret-session", "domain": "ilearn.thu.edu.tw"}]
                ),
                encoding="utf-8",
            )
            outputs = []
            tron.CONFIG.update(tron.normalize_config({}))
            with patch.object(tron, "bootstrap_config"), patch("builtins.print", side_effect=outputs.append):
                result = tron.main(["webview", "import", "--input", str(path), "--save", "--json"])

        self.assertEqual(result, 1)
        payload = json.loads(outputs[0])
        self.assertEqual(payload["reason"], "webview_cookie_sync_disabled")
        self.assertNotIn("secret-session", outputs[0])

    def test_webview_import_save_writes_cookie_cache_when_gated(self) -> None:
        original_base_dir = tron.BASE_DIR
        try:
            with tempfile.TemporaryDirectory() as temp_dir:
                base = Path(temp_dir)
                input_path = base / "cookies.json"
                input_path.write_text(
                    json.dumps(
                        [{"name": "session", "value": "secret-session", "domain": "ilearn.thu.edu.tw"}]
                    ),
                    encoding="utf-8",
                )
                tron.BASE_DIR = base
                tron.CONFIG.clear()
                tron.CONFIG.update(
                    tron.normalize_config(
                        {
                            "account": {"user": "u1", "passwd": ""},
                            "accounts": {
                                "current": "default",
                                "profiles": {"default": {"user": "u1", "passwd": "", "label": ""}},
                            },
                            "webview": {
                                "cookie_sync": {
                                    "enabled": True,
                                    "allow_cookie_import": True,
                                }
                            },
                        }
                    )
                )
                outputs = []
                with patch.object(tron, "bootstrap_config"), patch("builtins.print", side_effect=outputs.append):
                    result = tron.main(
                        ["webview", "import", "--input", str(input_path), "--profile", "default", "--save", "--json"]
                    )
                cookie_cache = base / "state" / "cookies" / "default.json"
                stored = json.loads(cookie_cache.read_text(encoding="utf-8"))
        finally:
            tron.BASE_DIR = original_base_dir

        self.assertEqual(result, 0)
        payload = json.loads(outputs[0])
        self.assertTrue(payload["saved"])
        self.assertEqual(stored[0]["value"], "secret-session")
        self.assertNotIn("secret-session", outputs[0])

    def test_account_bind_accepts_telegram_adapter(self) -> None:
        tron.CONFIG.update(
            tron.normalize_config(
                {
                    "account": {"user": "u1", "passwd": ""},
                    "accounts": {
                        "current": "default",
                        "profiles": {"default": {"user": "u1", "passwd": "", "label": ""}},
                    },
                }
            )
        )
        with (
            patch.object(tron, "bootstrap_config"),
            patch.object(tron, "save_config", return_value=True),
            patch("builtins.print"),
        ):
            result = tron.main(["account", "bind", "telegram", "telegram-chat", "default"])

        self.assertEqual(result, 0)
        self.assertIn("telegram:telegram-chat", tron.CONFIG["integrations"]["bindings"])


class TronBotServeCommandTest(unittest.IsolatedAsyncioTestCase):
    async def test_app_serve_json_uses_local_shell_runner_without_token_output(self) -> None:
        outputs = []
        seen = {}

        async def fake_run_app_shell(_config, **kwargs):
            seen.update(kwargs)

        with (
            patch.object(tron, "run_app_shell", new=fake_run_app_shell),
            patch("builtins.print", side_effect=outputs.append),
        ):
            result = await tron.app_serve_command(
                SimpleNamespace(host="127.0.0.1", port=8790, open=False, ttl_seconds=120, json=True)
            )

        self.assertEqual(result, 0)
        self.assertEqual(seen["host"], "127.0.0.1")
        self.assertEqual(seen["port"], 8790)
        self.assertEqual(seen["token_ttl_seconds"], 120)
        payload = json.loads(outputs[0])
        self.assertEqual(payload["url"], "http://127.0.0.1:8790/app")
        self.assertNotIn("token", outputs[0].replace("token_ttl_seconds", ""))
        self.assertIn("shell_ui_builder", seen)

    async def test_discord_sync_and_gateway_dry_run_dispatch(self) -> None:
        outputs = []
        with patch.object(tron, "bootstrap_config"), patch("builtins.print", side_effect=outputs.append):
            sync_result = await tron.bot_discord_sync_command(SimpleNamespace(apply=False, dry_run=True, json=True))
            gateway_result = await tron.bot_discord_gateway_command(SimpleNamespace(dry_run=True, json=True))

        self.assertEqual(sync_result, 0)
        self.assertEqual(gateway_result, 0)
        self.assertEqual(json.loads(outputs[0])["status"], "dry_run")
        self.assertTrue(json.loads(outputs[1])["gateway_optional"])

    async def test_bot_serve_registers_line_sink_and_restores_existing_sinks(self) -> None:
        original_config = copy.deepcopy(tron.CONFIG)
        original_sinks = list(tron.NOTIFICATION_SINKS)
        seen_sinks = []

        async def fake_run_adapter_server(_config, _runtime, **_kwargs):
            seen_sinks.append(list(tron.NOTIFICATION_SINKS))

        try:
            tron.CONFIG.clear()
            tron.CONFIG.update(tron.normalize_config({"integrations": {"line": {}}}))
            with (
                patch.dict("os.environ", {"LINE_CHANNEL_ACCESS_TOKEN": "line-token"}, clear=False),
                patch("troTHU.adapter_server.run_adapter_server", new=fake_run_adapter_server),
                patch("troTHU.bot_handlers.create_bot_runtime", return_value=object()),
                patch("builtins.print"),
            ):
                result = await tron.bot_serve_command(
                    SimpleNamespace(host="127.0.0.1", port=8787, adapter="line", json=True)
                )
        finally:
            tron.CONFIG.clear()
            tron.CONFIG.update(original_config)
            tron.set_notification_sinks(original_sinks)

        self.assertEqual(result, 0)
        self.assertEqual(len(seen_sinks), 1)
        self.assertEqual(len(seen_sinks[0]), len(original_sinks) + 1)
        self.assertEqual(tron.NOTIFICATION_SINKS, original_sinks)

    async def test_bot_serve_registers_discord_sink_and_restores_existing_sinks(self) -> None:
        original_config = copy.deepcopy(tron.CONFIG)
        original_sinks = list(tron.NOTIFICATION_SINKS)
        seen_sinks = []

        async def fake_run_adapter_server(_config, _runtime, **_kwargs):
            seen_sinks.append(list(tron.NOTIFICATION_SINKS))

        try:
            tron.CONFIG.clear()
            tron.CONFIG.update(tron.normalize_config({"integrations": {"discord": {}}}))
            with (
                patch.dict("os.environ", {"DISCORD_BOT_TOKEN": "discord-token"}, clear=False),
                patch("troTHU.adapter_server.run_adapter_server", new=fake_run_adapter_server),
                patch("troTHU.bot_handlers.create_bot_runtime", return_value=object()),
                patch("builtins.print"),
            ):
                result = await tron.bot_serve_command(
                    SimpleNamespace(host="127.0.0.1", port=8787, adapter="discord", json=True)
                )
        finally:
            tron.CONFIG.clear()
            tron.CONFIG.update(original_config)
            tron.set_notification_sinks(original_sinks)

        self.assertEqual(result, 0)
        self.assertEqual(len(seen_sinks), 1)
        self.assertEqual(len(seen_sinks[0]), len(original_sinks) + 1)
        self.assertEqual(tron.NOTIFICATION_SINKS, original_sinks)

    async def test_bot_serve_all_registers_telegram_sink_and_restores_existing_sinks(self) -> None:
        original_config = copy.deepcopy(tron.CONFIG)
        original_sinks = list(tron.NOTIFICATION_SINKS)
        seen_sinks = []

        async def fake_run_adapter_server(_config, _runtime, **_kwargs):
            seen_sinks.append(list(tron.NOTIFICATION_SINKS))

        try:
            tron.CONFIG.clear()
            tron.CONFIG.update(tron.normalize_config({"integrations": {"telegram": {}}}))
            with (
                patch.dict("os.environ", {"TELEGRAM_BOT_TOKEN": "telegram-token"}, clear=False),
                patch("troTHU.adapter_server.run_adapter_server", new=fake_run_adapter_server),
                patch("troTHU.bot_handlers.create_bot_runtime", return_value=object()),
                patch("builtins.print"),
            ):
                result = await tron.bot_serve_command(
                    SimpleNamespace(host="127.0.0.1", port=8787, adapter="all", json=True)
                )
        finally:
            tron.CONFIG.clear()
            tron.CONFIG.update(original_config)
            tron.set_notification_sinks(original_sinks)

        self.assertEqual(result, 0)
        self.assertEqual(len(seen_sinks), 1)
        self.assertGreaterEqual(len(seen_sinks[0]), len(original_sinks) + 1)
        self.assertEqual(tron.NOTIFICATION_SINKS, original_sinks)

    def test_bot_serve_command_dispatches_without_running_server(self) -> None:
        def fake_run(coro):
            coro.close()
            return 0

        with (
            patch.object(tron, "bootstrap_config"),
            patch.object(tron.asyncio, "run", side_effect=fake_run) as asyncio_run,
        ):
            result = tron.main(["bot", "serve", "--port", "9999", "--adapter", "generic"])

        self.assertEqual(result, 0)
        asyncio_run.assert_called_once()

    def test_discord_schema_command_dispatches(self) -> None:
        with (
            patch.object(tron, "bootstrap_config"),
            patch("builtins.print") as print_mock,
        ):
            result = tron.main(["bot", "discord-schema", "--json"])

        self.assertEqual(result, 0)
        schema = json.loads(print_mock.call_args.args[0])
        self.assertEqual(schema["name"], "tron")
        self.assertIn("qr_all", {option["name"] for option in schema["options"]})

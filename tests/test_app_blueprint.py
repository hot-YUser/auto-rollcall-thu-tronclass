import copy
import json
import unittest

from troTHU.app_blueprint import (
    REQUIRED_ENDPOINT_IDS,
    REQUIRED_SCREEN_IDS,
    build_app_blueprint,
    format_app_blueprint_summary,
    validate_app_blueprint,
)


class AppBlueprintTest(unittest.TestCase):
    def test_blueprint_contains_required_screens_actions_contracts_and_targets(self) -> None:
        blueprint = build_app_blueprint(
            {
                "provider": {"key": "thu"},
                "integrations": {"discord": {}, "line": {}, "telegram": {}},
            }
        )

        self.assertEqual(blueprint["version"], "app-blueprint-v1")
        self.assertEqual(blueprint["primary_operation"], "CLI + Bot + local scanner")
        self.assertEqual(blueprint["default_target"], "companion_app_optional")
        self.assertFalse(blueprint["gui_implemented"])
        self.assertFalse(blueprint["web_app_default"])
        self.assertEqual(blueprint["config_summary"]["provider"], "thu")
        self.assertEqual(
            set(blueprint["config_summary"]["configured_adapters"]),
            {"discord", "line", "telegram"},
        )

        screen_ids = {screen["id"] for screen in blueprint["screens"]}
        endpoint_ids = {endpoint["id"] for endpoint in blueprint["api_contract"]}
        target_ids = {target["id"] for target in blueprint["implementation_targets"]}
        self.assertTrue(REQUIRED_SCREEN_IDS.issubset(screen_ids))
        self.assertTrue(REQUIRED_ENDPOINT_IDS.issubset(endpoint_ids))
        self.assertIn("companion_app_optional", target_ids)
        self.assertIn("cli_bot_scanner_primary", target_ids)
        self.assertEqual(
            {target["id"]: target["status"] for target in blueprint["implementation_targets"]}[
                "local_web_shell_optional"
            ],
            "polished_read_only_shell_core",
        )
        self.assertIn("qr_preview", blueprint["actions"])
        self.assertIn("qr_submit_fanout", blueprint["actions"])
        self.assertIn("radar_map_assist", blueprint["actions"])
        self.assertIn("release_build_plan", blueprint["actions"])

        for screen in blueprint["screens"]:
            self.assertTrue(screen["data_sources"])
            self.assertTrue(screen["actions"])
            self.assertTrue(screen["safe_response_fields"])
            self.assertTrue(screen["forbidden_outputs"])
        for endpoint in blueprint["api_contract"]:
            self.assertIsInstance(endpoint["served_now"], bool)
            self.assertTrue(endpoint["safe_response_fields"])
            self.assertTrue(endpoint["forbidden_outputs"])

    def test_validate_blueprint_reports_safe_warnings_for_missing_contracts(self) -> None:
        blueprint = build_app_blueprint()
        self.assertEqual(validate_app_blueprint(blueprint), [])

        broken = copy.deepcopy(blueprint)
        broken["screens"] = [screen for screen in broken["screens"] if screen["id"] != "overview"]
        broken["api_contract"] = [
            endpoint for endpoint in broken["api_contract"] if endpoint["id"] != "snapshot"
        ]

        warnings = validate_app_blueprint(broken)
        self.assertIn("screen_missing:overview", warnings)
        self.assertIn("endpoint_missing:snapshot", warnings)
        self.assertNotIn("payload", json.dumps(warnings).lower())

    def test_endpoint_contract_contains_required_future_paths(self) -> None:
        blueprint = build_app_blueprint()
        endpoints = {endpoint["id"]: endpoint for endpoint in blueprint["api_contract"]}

        self.assertEqual(endpoints["snapshot"]["path"], "/app/api/snapshot")
        self.assertEqual(endpoints["accounts"]["method"], "GET")
        self.assertEqual(endpoints["status_controls"]["method"], "POST")
        self.assertIn("{profile}", endpoints["status_controls"]["path"])
        self.assertEqual(endpoints["qr_preview"]["path"], "/app/api/qr/preview")
        self.assertEqual(endpoints["qr_submit"]["path"], "/app/api/qr/submit")
        self.assertEqual(endpoints["integration_capabilities"]["path"], "/app/api/integrations/capabilities")
        self.assertEqual(endpoints["dashboard_cards"]["path"], "/app/api/dashboard/cards")
        self.assertTrue(endpoints["dashboard_cards"]["served_now"])
        self.assertEqual(endpoints["radar_map_assist"]["path"], "/app/api/radar/assist")
        self.assertTrue(endpoints["radar_map_assist"]["served_now"])
        self.assertEqual(endpoints["release_build_plan"]["path"], "/app/api/release/plan")
        self.assertTrue(endpoints["release_build_plan"]["served_now"])
        self.assertEqual(endpoints["shell_policy"]["path"], "/app/api/shell/policy")
        self.assertTrue(endpoints["shell_policy"]["served_now"])
        self.assertEqual(endpoints["ui_model"]["path"], "/app/api/ui/model")
        self.assertTrue(endpoints["ui_model"]["served_now"])
        self.assertEqual(endpoints["webview_sync_status"]["path"], "/app/api/webview/status")
        self.assertEqual(endpoints["webview_cookie_preview"]["path"], "/app/api/webview/cookies/preview")
        self.assertEqual(endpoints["webview_cookie_import"]["path"], "/app/api/webview/cookies/import")

    def test_all_screen_references_are_declared(self) -> None:
        blueprint = build_app_blueprint()
        data_sources = set(blueprint["data_sources"])
        actions = set(blueprint["actions"])

        for screen in blueprint["screens"]:
            self.assertTrue(set(screen["data_sources"]).issubset(data_sources))
            self.assertTrue(set(screen["actions"]).issubset(actions))
        for endpoint in blueprint["api_contract"]:
            self.assertTrue(set(endpoint["data_sources"]).issubset(data_sources))
            self.assertTrue(set(endpoint.get("actions", [])).issubset(actions))

    def test_default_config_summary_is_safe_and_thu_focused(self) -> None:
        blueprint = build_app_blueprint()
        summary = blueprint["config_summary"]

        self.assertEqual(summary["provider"], "thu")
        self.assertEqual(summary["configured_adapters"], [])

    def test_json_blueprint_does_not_contain_sensitive_terms(self) -> None:
        blueprint = build_app_blueprint()
        encoded = json.dumps(blueprint, sort_keys=True).lower()
        forbidden_terms = [
            "password",
            "token",
            "signature",
            "interaction_token",
            "raw",
            "secret-value",
            "session-secret",
        ]
        for term in forbidden_terms:
            self.assertNotIn(term, encoded)

    def test_summary_formatter_is_stable_and_marks_gui_unimplemented(self) -> None:
        lines = format_app_blueprint_summary(build_app_blueprint())
        text = "\n".join(lines)
        self.assertIn("App Architecture Blueprint app-blueprint-v1", text)
        self.assertIn("Primary operation: CLI + Bot + local scanner", text)
        self.assertIn("optional localhost shell core available", text)
        self.assertIn("Validation: ok", text)
        self.assertIn("overview", text)

    def test_qr_scanner_screen_marks_local_scanner_ux_prototype(self) -> None:
        blueprint = build_app_blueprint()
        screens = {screen["id"]: screen for screen in blueprint["screens"]}
        qr_screen = screens["qr_scanner"]

        self.assertEqual(qr_screen["prototype_status"], "local_scanner_ux_core")
        self.assertEqual(qr_screen["camera_fallback"], "paste")
        self.assertEqual(qr_screen["fanout_scope"], "matching_pending_profiles_only")
        self.assertIn("preview_ok", qr_screen["result_states"])
        self.assertIn("submitted", qr_screen["result_states"])
        self.assertIn("no_matches", qr_screen["result_states"])

    def test_webview_login_sync_screen_marks_cookie_sync_contract(self) -> None:
        blueprint = build_app_blueprint()
        screens = {screen["id"]: screen for screen in blueprint["screens"]}
        webview_screen = screens["webview_login_sync"]

        self.assertEqual(webview_screen["prototype_status"], "webview_cookie_sync_contract")
        self.assertEqual(webview_screen["default_mode"], "preview_only")
        self.assertIn("webview.cookie_sync.enabled", webview_screen["write_requires"])
        self.assertIn("webview_cookie_preview", webview_screen["actions"])
        self.assertIn("webview_cookie_import", webview_screen["actions"])

    def test_radar_assist_screen_marks_map_assist_contract(self) -> None:
        blueprint = build_app_blueprint()
        screens = {screen["id"]: screen for screen in blueprint["screens"]}
        radar_screen = screens["radar_assist"]

        self.assertEqual(radar_screen["prototype_status"], "map_assist_contract")
        self.assertEqual(radar_screen["rendering"], "geojson_like_without_map_sdk")
        self.assertEqual(radar_screen["write_scope"], "none")
        self.assertIn("radar_map_assist", radar_screen["data_sources"])
        self.assertIn("radar_map_assist", radar_screen["actions"])

    def test_overview_screen_marks_dashboard_cards_core(self) -> None:
        blueprint = build_app_blueprint()
        screens = {screen["id"]: screen for screen in blueprint["screens"]}
        overview = screens["overview"]

        self.assertEqual(overview["prototype_status"], "dashboard_cards_core")
        self.assertIn("dashboard_cards", overview["served_routes"])
        self.assertIn("shell_policy", overview["served_routes"])


if __name__ == "__main__":
    unittest.main()

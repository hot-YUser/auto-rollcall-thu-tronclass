import json
import time
import unittest

try:
    import aiohttp
    from aiohttp import web
except (ImportError, ModuleNotFoundError):
    aiohttp = None
    web = None

from troTHU import tron
from troTHU.app_shell import create_app_shell


def make_config():
    return tron.normalize_config(
        {
            "account": {"user": "u1", "passwd": ""},
            "accounts": {
                "current": "default",
                "profiles": {"default": {"user": "u1", "passwd": "", "label": ""}},
            },
            "radar": {
                "boundary_points": [
                    [24.181000, 120.600000],
                    [24.181000, 120.601000],
                    [24.182000, 120.601000],
                    [24.182000, 120.600000],
                ]
            },
            "webview": {
                "cookie_sync": {
                    "allowed_domains": ["ilearn.thu.edu.tw"],
                    "cookie_name_allowlist": ["session"],
                }
            },
        }
    )


class RunningApp:
    def __init__(self, app) -> None:
        self.app = app
        self.runner = None
        self.site = None
        self.base_url = ""

    async def __aenter__(self):
        self.runner = web.AppRunner(self.app)
        await self.runner.setup()
        self.site = web.TCPSite(self.runner, "127.0.0.1", 0)
        await self.site.start()
        port = self.site._server.sockets[0].getsockname()[1]
        self.base_url = "http://127.0.0.1:{}".format(port)
        return self

    async def __aexit__(self, _exc_type, _exc, _tb) -> None:
        await self.runner.cleanup()


@unittest.skipUnless(aiohttp is not None and web is not None, "aiohttp.web is required")
class AppShellTest(unittest.IsolatedAsyncioTestCase):
    async def test_app_html_contains_tabs_and_runtime_token_only(self) -> None:
        token = "local-token"
        async with RunningApp(create_app_shell(make_config(), token=token)) as app:
            async with aiohttp.ClientSession() as session:
                response = await session.get(app.base_url + "/app")
                text = await response.text()

        self.assertEqual(response.status, 200)
        for marker in (
            "Overview",
            "Dashboard Cards",
            "Accounts",
            "QR Preview",
            "Radar Assist",
            "WebView Sync",
            "Release Check",
            "Release Plan",
            "Shell Policy",
            "UI Model",
            "Action Catalog",
            "Logs",
            "Diagnostics",
        ):
            self.assertIn(marker, text)
        self.assertIn(token, text)
        self.assertNotIn("secret-placeholder", text)

    async def test_health_requires_valid_unexpired_token(self) -> None:
        async with RunningApp(
            create_app_shell(make_config(), token="good", token_expires_at=time.time() + 60)
        ) as app:
            async with aiohttp.ClientSession() as session:
                missing = await session.get(app.base_url + "/app/api/health")
                wrong = await session.get(app.base_url + "/app/api/health", headers={"X-Local-Token": "bad"})
                valid = await session.get(app.base_url + "/app/api/health", headers={"X-Local-Token": "good"})
                body = await valid.json()

        self.assertEqual(missing.status, 401)
        self.assertEqual(wrong.status, 401)
        self.assertEqual(valid.status, 200)
        self.assertTrue(body["ok"])
        self.assertTrue(body["read_only"])
        self.assertIn("qr_submit", body["disabled_mutations"])

        async with RunningApp(
            create_app_shell(make_config(), token="old", token_expires_at=time.time() - 1)
        ) as app:
            async with aiohttp.ClientSession() as session:
                expired = await session.get(app.base_url + "/app/api/health", headers={"X-Local-Token": "old"})
        self.assertEqual(expired.status, 401)

    async def test_read_only_routes_return_sanitized_injected_summaries(self) -> None:
        app_shell = create_app_shell(
            make_config(),
            token="good",
            snapshot_builder=lambda: {"active_profile": "default", "raw_body": "secret-value"},
            accounts_builder=lambda: {"profiles": ["default"], "cookie_value": "cookie-value"},
            log_summary_builder=lambda: {"events": {"ok": 1}, "message": "fine"},
            diagnostics_builder=lambda: {"checks": [{"name": "ok", "status": "ok"}], "token": "token-secret"},
            integrations_builder=lambda: {"bindings": 1, "authorization": "Bearer hidden"},
        )
        async with RunningApp(app_shell) as app:
            async with aiohttp.ClientSession(headers={"X-Local-Token": "good"}) as session:
                paths = [
                    "/app/api/snapshot",
                    "/app/api/accounts",
                    "/app/api/logs/summary",
                    "/app/api/diagnostics",
                    "/app/api/integrations/capabilities",
                    "/app/api/radar/assist",
                    "/app/api/dashboard/cards",
                    "/app/api/release/check",
                    "/app/api/release/plan",
                    "/app/api/shell/policy",
                    "/app/api/ui/model",
                    "/app/api/ui/drilldown/overview",
                    "/app/api/actions/catalog",
                ]
                texts = []
                for path in paths:
                    response = await session.get(app.base_url + path)
                    texts.append(await response.text())
                    self.assertEqual(response.status, 200)

        combined = "\n".join(texts)
        self.assertNotIn("secret-value", combined)
        self.assertNotIn("cookie-value", combined)
        self.assertNotIn("token-secret", combined)
        self.assertNotIn("Bearer hidden", combined)
        self.assertIn("default", combined)

    async def test_qr_preview_never_echoes_raw_payload(self) -> None:
        def fake_preview(raw):
            return {
                "ok": True,
                "rollcall_id": "qr-1",
                "raw": raw,
                "token": "token-secret",
                "nested": {"payload_value": raw},
            }

        async with RunningApp(create_app_shell(make_config(), token="good", qr_previewer=fake_preview)) as app:
            async with aiohttp.ClientSession(headers={"X-Local-Token": "good"}) as session:
                response = await session.post(
                    app.base_url + "/app/api/qr/preview",
                    json={"payload": "RAW-QR-SECRET"},
                )
                text = await response.text()
                body = json.loads(text)

        self.assertEqual(response.status, 200)
        self.assertEqual(body["preview"]["rollcall_id"], "qr-1")
        self.assertNotIn("RAW-QR-SECRET", text)
        self.assertNotIn("token-secret", text)

    async def test_webview_cookie_preview_never_echoes_cookie_value(self) -> None:
        async with RunningApp(create_app_shell(make_config(), token="good")) as app:
            async with aiohttp.ClientSession(headers={"X-Local-Token": "good"}) as session:
                response = await session.post(
                    app.base_url + "/app/api/webview/cookies/preview",
                    json={
                        "export": [
                            {
                                "name": "session",
                                "value": "session-secret",
                                "domain": "ilearn.thu.edu.tw",
                                "path": "/",
                            }
                        ]
                    },
                )
                text = await response.text()
                body = json.loads(text)

        self.assertEqual(response.status, 200)
        self.assertEqual(body["preview"]["accepted_count"], 1)
        self.assertNotIn("session-secret", text)

    async def test_new_safe_routes_require_token_and_return_summaries(self) -> None:
        app_shell = create_app_shell(
            make_config(),
            token="good",
            release_check_builder=lambda: {"status": "warn", "checks": []},
            release_plan_builder=lambda: {"version": "release-build-plan-v1", "executes_build": False},
        )
        async with RunningApp(app_shell) as app:
            async with aiohttp.ClientSession() as session:
                unauthorized = await session.get(app.base_url + "/app/api/release/check")
            async with aiohttp.ClientSession(headers={"X-Local-Token": "good"}) as session:
                release = await session.get(app.base_url + "/app/api/release/check")
                plan = await session.get(app.base_url + "/app/api/release/plan")
                policy = await session.get(app.base_url + "/app/api/shell/policy")
                ui = await session.get(app.base_url + "/app/api/ui/model")
                drilldown = await session.get(app.base_url + "/app/api/ui/drilldown/overview")
                actions = await session.get(app.base_url + "/app/api/actions/catalog")
                cards = await session.get(app.base_url + "/app/api/dashboard/cards")
                radar = await session.get(app.base_url + "/app/api/radar/validate?lat=24.1815&lon=120.6005")

                release_body = await release.json()
                plan_body = await plan.json()
                policy_body = await policy.json()
                ui_body = await ui.json()
                drilldown_body = await drilldown.json()
                actions_body = await actions.json()
                cards_body = await cards.json()
                radar_body = await radar.json()

        self.assertEqual(unauthorized.status, 401)
        self.assertEqual(release.status, 200)
        self.assertEqual(plan.status, 200)
        self.assertEqual(policy.status, 200)
        self.assertEqual(ui.status, 200)
        self.assertEqual(drilldown.status, 200)
        self.assertEqual(actions.status, 200)
        self.assertEqual(cards.status, 200)
        self.assertEqual(radar.status, 200)
        self.assertEqual(release_body["release"]["status"], "warn")
        self.assertFalse(plan_body["release_plan"]["executes_build"])
        self.assertTrue(policy_body["read_only"])
        self.assertIn("panels", ui_body["ui_model"])
        self.assertEqual(drilldown_body["drilldown"]["panel"], "overview")
        self.assertTrue(actions_body["actions"]["read_only"])
        self.assertIn("cards", cards_body["dashboard"])
        self.assertTrue(radar_body["validation"]["ok"])

    async def test_action_handoff_does_not_echo_payload_or_execute(self) -> None:
        async with RunningApp(create_app_shell(make_config(), token="good")) as app:
            async with aiohttp.ClientSession(headers={"X-Local-Token": "good"}) as session:
                response = await session.post(
                    app.base_url + "/app/api/actions/handoff",
                    json={"action": "qr_submit", "payload": "RAW-QR-SECRET", "cookie_value": "session-secret"},
                )
                text = await response.text()
                body = json.loads(text)

        self.assertEqual(response.status, 200)
        self.assertFalse(body["handoff"]["executes_command"])
        self.assertFalse(body["handoff"]["writes_state"])
        self.assertIn("qr paste", body["handoff"]["command_template"])
        self.assertNotIn("RAW-QR-SECRET", text)
        self.assertNotIn("session-secret", text)


if __name__ == "__main__":
    unittest.main()

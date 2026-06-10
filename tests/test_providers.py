import copy
import unittest

import aiohttp
from yarl import URL

from troTHU import tron
from troTHU.providers import (
    DEFAULT_PROVIDER,
    get_provider,
    list_all_providers,
    list_supported_providers,
    normalize_provider_config,
    provider_support_report,
    provider_registry_config,
    tronclass_api_endpoints,
)
from troTHU.research_mode import normalize_research_mode_config
from tests.fake_tron_server import FakeTronServer


class ProviderConfigTest(unittest.TestCase):
    def test_thu_provider_is_ready_and_matches_legacy_urls(self) -> None:
        provider = get_provider("thu")

        self.assertTrue(provider.ready)
        self.assertEqual(provider.base_url, "https://ilearn.thu.edu.tw")
        self.assertIn("/api/radar/rollcalls", provider.rollcalls_url)
        self.assertTrue(provider.capabilities.number)
        self.assertTrue(provider.capabilities.radar)
        self.assertTrue(provider.capabilities.course_discovery)
        self.assertTrue(provider.capabilities.manual_qr)
        self.assertIn("/api/current-semester-info", provider.current_semester_url)
        self.assertIn("/api/my-courses", provider.courses_url)

    def test_aliases_and_unknown_provider_fall_back_to_thu(self) -> None:
        self.assertEqual(get_provider("Tunghai").key, DEFAULT_PROVIDER)
        self.assertEqual(get_provider("www.tronclass.com.tw").key, "tronclass")
        self.assertEqual(get_provider("not-a-provider").key, DEFAULT_PROVIDER)

    def test_registry_keeps_fju_hidden_and_tku_tronclass_visible(self) -> None:
        registry = provider_registry_config()

        self.assertEqual(registry["current"], "thu")
        self.assertFalse(registry["allow_experimental"])
        self.assertTrue(registry["available"]["thu"]["ready"])
        self.assertTrue(registry["available"]["fju"]["ready"])
        self.assertFalse(registry["available"]["fju"]["user_visible"])
        self.assertTrue(registry["available"]["tku"]["ready"])
        self.assertTrue(registry["available"]["tku"]["user_visible"])
        self.assertTrue(registry["available"]["tronclass"]["ready"])
        self.assertTrue(registry["available"]["tronclass"]["user_visible"])
        self.assertEqual(registry["available"]["fju"]["support_level"], "ready")
        self.assertEqual(registry["available"]["fju"]["auth_flow"], "manual_cookie_only")
        self.assertTrue(registry["available"]["fju"]["capabilities"]["radar"])
        self.assertEqual(registry["available"]["tku"]["support_level"], "ready")
        self.assertEqual(registry["available"]["tku"]["base_url"], "https://iclass.tku.edu.tw")
        self.assertEqual(registry["available"]["tku"]["auth_flow"], "tku_sso_browser")
        self.assertTrue(registry["available"]["tku"]["capabilities"]["radar"])
        self.assertEqual(registry["available"]["tronclass"]["base_url"], "https://www.tronclass.com.tw")
        self.assertEqual(registry["available"]["tronclass"]["auth_flow"], "public_cloud_email")
        self.assertTrue(registry["available"]["tronclass"]["capabilities"]["course_discovery"])
        self.assertTrue(registry["available"]["scu"]["ready"])
        self.assertTrue(registry["available"]["scu"]["user_visible"])
        self.assertEqual(registry["available"]["scu"]["auth_flow"], "thu_cas")
        self.assertEqual(registry["available"]["scu"]["base_url"], "https://tronclass.scu.edu.tw")
        self.assertTrue(registry["available"]["scu"]["capabilities"]["radar"])

    def test_supported_provider_registry_hides_fju_by_default(self) -> None:
        self.assertEqual(
            [provider.key for provider in list_supported_providers()],
            ["scu", "thu", "tku", "tronclass"],
        )
        self.assertEqual(
            [provider.key for provider in list_supported_providers(include_hidden=True)],
            ["fju", "scu", "thu", "tku", "tronclass"],
        )
        self.assertEqual([provider.key for provider in list_all_providers()], ["fju", "scu", "thu", "tku", "tronclass"])

    def test_tronclass_api_endpoint_builder_is_shared(self) -> None:
        endpoints = tronclass_api_endpoints("https://school.example/")

        self.assertEqual(
            endpoints["rollcalls_url"],
            "https://school.example/api/radar/rollcalls?api_version=1.1.0",
        )
        self.assertEqual(endpoints["current_semester_url"], "https://school.example/api/current-semester-info")
        self.assertEqual(endpoints["courses_url"], "https://school.example/api/my-courses?page=1&page_size=50")

    def test_normalize_provider_config_preserves_known_overrides(self) -> None:
        normalized = normalize_provider_config(
            {
                "current": "fju",
                "allow_experimental": True,
                "available": {
                    "fju": {
                        "base_url": "https://example.edu",
                        "current_semester_url": "https://example.edu/api/current-semester-info",
                        "notes": "lab only",
                    }
                },
            }
        )

        self.assertEqual(normalized["current"], "fju")
        self.assertTrue(normalized["allow_experimental"])
        self.assertEqual(normalized["available"]["fju"]["base_url"], "https://example.edu")
        self.assertEqual(
            normalized["available"]["fju"]["current_semester_url"],
            "https://example.edu/api/current-semester-info",
        )
        self.assertEqual(
            normalized["available"]["fju"]["rollcalls_url"],
            "https://example.edu/api/radar/rollcalls?api_version=1.1.0",
        )
        self.assertEqual(normalized["available"]["fju"]["notes"], "lab only")

    def test_unknown_provider_falls_back_with_warning_metadata(self) -> None:
        normalized = normalize_provider_config({"current": "nfu"})

        self.assertEqual(normalized["current"], DEFAULT_PROVIDER)
        self.assertEqual(normalized["requested"], "nfu")
        self.assertEqual(normalized["fallback_reason"], "unknown_provider")

    def test_provider_support_report_marks_fju_tku_tronclass_daily_ready_without_experimental_gate(self) -> None:
        fju = get_provider("fju")
        blocked = provider_support_report(fju)
        allowed = provider_support_report(fju, allow_experimental=True)
        tronclass = provider_support_report(get_provider("tronclass"))

        self.assertEqual(blocked["support_level"], "ready")
        self.assertTrue(blocked["daily_ready"])
        self.assertFalse(blocked["user_visible"])
        self.assertTrue(blocked["capabilities"]["radar"])
        self.assertTrue(allowed["daily_ready"])
        self.assertTrue(allowed["endpoint_configured"]["base_url"])
        self.assertTrue(tronclass["daily_ready"])
        self.assertTrue(tronclass["user_visible"])

    def test_tron_normalize_config_adds_provider_and_research_defaults(self) -> None:
        normalized = tron.normalize_config({"config": {"user-agent": []}})

        self.assertEqual(normalized["provider"]["current"], "thu")
        self.assertFalse(normalized["provider"]["allow_experimental"])
        self.assertIn("thu", normalized["provider"]["available"])
        self.assertFalse(normalized["research"]["enabled"])
        self.assertTrue(normalized["research"]["redact_sensitive"])


class ResearchModeConfigTest(unittest.TestCase):
    def setUp(self) -> None:
        self.original_config = copy.deepcopy(tron.CONFIG)

    def tearDown(self) -> None:
        tron.CONFIG.clear()
        tron.CONFIG.update(copy.deepcopy(self.original_config))

    def test_research_flags_are_gated_by_enabled(self) -> None:
        normalized = normalize_research_mode_config(
            {
                "enabled": False,
                "allow_api_exploration": True,
                "allow_browser_capture": True,
                "log_raw_payloads": True,
            }
        )

        self.assertFalse(normalized["enabled"])
        self.assertFalse(normalized["allow_api_exploration"])
        self.assertFalse(normalized["allow_browser_capture"])
        self.assertFalse(normalized["log_raw_payloads"])

    def test_status_report_exposes_provider_and_research_boundary(self) -> None:
        tron.CONFIG.update(
            tron.normalize_config(
                {
                    "account": {"user": "s1", "passwd": ""},
                    "research": {"enabled": True, "allow_api_exploration": True},
                }
            )
        )

        report = tron.status_report()

        self.assertEqual(report["provider"]["key"], "thu")
        self.assertIn("provider_support", report)
        self.assertTrue(report["provider_support"]["daily_ready"])
        self.assertTrue(report["course_discovery"]["enabled"])
        self.assertTrue(report["research"]["enabled"])
        self.assertTrue(report["research"]["allow_api_exploration"])

    def test_doctor_report_marks_fju_daily_ready(self) -> None:
        tron.CONFIG.update(
            tron.normalize_config(
                {
                    "account": {"user": "s1", "passwd": ""},
                    "provider": {"current": "fju"},
                }
            )
        )

        report = tron.doctor_report()

        self.assertIn(report["status"], {"warn", "fail"})
        self.assertEqual(report["provider"]["key"], "fju")
        self.assertEqual(report["provider_support"]["support_level"], "ready")
        self.assertTrue(report["provider_support"]["daily_ready"])
        provider_checks = [item for item in report["checks"] if item["name"].startswith("provider")]
        self.assertTrue(all(item["status"] == "ok" for item in provider_checks))

    def _configure_provider_for_fake_server(self, provider_key: str, server: FakeTronServer) -> None:
        tron.CONFIG.clear()
        tron.CONFIG.update(
            tron.normalize_config(
                {
                    "account": {"user": "user1", "passwd": "pass1"},
                    "accounts": {
                        "current": "default",
                        "profiles": {
                            "default": {"user": "user1", "passwd": "pass1", "label": ""}
                        },
                    },
                    "provider": {
                        "current": provider_key,
                        "available": {
                            provider_key: {
                                "base_url": server.base_url,
                                "login_url": server.login_url,
                                "rollcalls_url": server.rollcalls_url,
                                "current_semester_url": server.current_semester_url,
                                "courses_url": server.courses_url,
                            }
                        },
                    },
                }
            )
        )

    def _seed_cookie_for_manual_provider(self, provider_key: str, server: FakeTronServer, session) -> None:
        if provider_key == "fju":
            session.cookie_jar.update_cookies(
                {"session": server.session_cookie},
                response_url=URL(server.base_url),
            )

    async def _discover_courses_with_provider(self, provider_key: str) -> dict:
        original_config = copy.deepcopy(tron.CONFIG)
        async with FakeTronServer() as server:
            server.courses = [{"id": 1, "name": "Synthetic Course"}]
            try:
                self._configure_provider_for_fake_server(provider_key, server)
                async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                    self._seed_cookie_for_manual_provider(provider_key, server, session)
                    login_result = await tron.login(session)
                    self.assertTrue(login_result.ok)
                    client = tron.create_tron_http_client(session)
                    result = await tron.discover_courses(
                        session,
                        endpoints=client.endpoints,
                        request_ssl=tron.get_ssl_request_setting(),
                    )
                    return result.to_dict()
            finally:
                tron.CONFIG.clear()
                tron.CONFIG.update(original_config)

    async def _number_rollcall_with_provider(self, provider_key: str) -> dict:
        original_config = copy.deepcopy(tron.CONFIG)
        original_completed = dict(tron.COMPLETED_NUMBER_ROLLCALLS)
        async with FakeTronServer(correct_number_code="0000") as server:
            server.rollcalls = [{"rollcall_id": 42, "is_number": True, "status": "started"}]
            try:
                tron.COMPLETED_NUMBER_ROLLCALLS.clear()
                self._configure_provider_for_fake_server(provider_key, server)
                async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                    self._seed_cookie_for_manual_provider(provider_key, server, session)
                    login_result = await tron.login(session)
                    self.assertTrue(login_result.ok)
                    with (
                        unittest.mock.patch.object(tron, "NUMBER_CODE_LIMIT", 1),
                        unittest.mock.patch.object(tron, "NUMBER_WORKER_COUNT", 1),
                        unittest.mock.patch.object(tron, "mes", unittest.mock.AsyncMock()),
                        unittest.mock.patch.object(tron, "log_print"),
                        unittest.mock.patch.object(tron, "status_print"),
                    ):
                        status = await tron.check_rollcall(session, 1)
                return {"status": status, "attempts": server.number_attempts}
            finally:
                tron.CONFIG.clear()
                tron.CONFIG.update(original_config)
                tron.COMPLETED_NUMBER_ROLLCALLS.clear()
                tron.COMPLETED_NUMBER_ROLLCALLS.update(original_completed)

    async def _qr_submit_with_provider(self, provider_key: str) -> dict:
        original_config = copy.deepcopy(tron.CONFIG)
        async with FakeTronServer() as server:
            try:
                self._configure_provider_for_fake_server(provider_key, server)
                async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                    self._seed_cookie_for_manual_provider(provider_key, server, session)
                    login_result = await tron.login(session)
                    self.assertTrue(login_result.ok)
                    with (
                        unittest.mock.patch.object(tron, "mes", unittest.mock.AsyncMock()),
                        unittest.mock.patch.object(tron, "log_print"),
                        unittest.mock.patch.object(tron, "notify_event", unittest.mock.AsyncMock()),
                    ):
                        ok = await tron.submit_qr_payload(
                            session,
                            '{"rollcallId":77,"data":"synthetic-qr-data"}',
                        )
                return {"ok": ok, "answers": server.qr_answers}
            finally:
                tron.CONFIG.clear()
                tron.CONFIG.update(original_config)

    def test_fju_provider_endpoints_can_target_fake_server(self) -> None:
        result = __import__("asyncio").run(self._discover_courses_with_provider("fju"))

        self.assertEqual(result["status"], "ok")
        self.assertEqual(result["course_count"], 1)

    def test_tku_provider_endpoints_can_target_fake_server(self) -> None:
        result = __import__("asyncio").run(self._discover_courses_with_provider("tku"))

        self.assertEqual(result["status"], "ok")
        self.assertEqual(result["course_count"], 1)

    def test_tronclass_provider_endpoints_can_target_fake_server(self) -> None:
        result = __import__("asyncio").run(self._discover_courses_with_provider("tronclass"))

        self.assertEqual(result["status"], "ok")
        self.assertEqual(result["course_count"], 1)

    def test_fju_tku_tronclass_number_rollcall_uses_provider_base_url(self) -> None:
        for provider in ("fju", "tku", "tronclass"):
            with self.subTest(provider=provider):
                result = __import__("asyncio").run(self._number_rollcall_with_provider(provider))

                self.assertEqual(result["status"], "is_number")
                self.assertEqual(result["attempts"][0]["rollcall_id"], "42")
                self.assertEqual(result["attempts"][0]["body"]["numberCode"], "0000")

    def test_fju_tku_tronclass_qr_submit_uses_provider_base_url(self) -> None:
        for provider in ("fju", "tku", "tronclass"):
            with self.subTest(provider=provider):
                result = __import__("asyncio").run(self._qr_submit_with_provider(provider))

                self.assertTrue(result["ok"])
                self.assertEqual(result["answers"][0]["rollcall_id"], "77")
                self.assertEqual(result["answers"][0]["body"]["data"], "synthetic-qr-data")

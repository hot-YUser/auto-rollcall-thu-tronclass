import copy
import unittest

import aiohttp

from troTHU import tron
from troTHU.providers import (
    DEFAULT_PROVIDER,
    get_provider,
    list_supported_providers,
    normalize_provider_config,
    provider_support_report,
    provider_registry_config,
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
        self.assertEqual(get_provider("not-a-provider").key, DEFAULT_PROVIDER)

    def test_registry_keeps_stubs_visible_but_not_ready(self) -> None:
        registry = provider_registry_config()

        self.assertEqual(registry["current"], "thu")
        self.assertFalse(registry["allow_experimental"])
        self.assertTrue(registry["available"]["thu"]["ready"])
        self.assertFalse(registry["available"]["fju"]["ready"])
        self.assertFalse(registry["available"]["tku"]["ready"])
        self.assertEqual(registry["available"]["fju"]["support_level"], "experimental")
        self.assertEqual(registry["available"]["tku"]["support_level"], "experimental")

    def test_supported_provider_registry_is_limited_to_thu_fju_tku(self) -> None:
        self.assertEqual(
            [provider.key for provider in list_supported_providers()],
            ["fju", "thu", "tku"],
        )

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
        self.assertEqual(normalized["available"]["fju"]["notes"], "lab only")

    def test_unknown_provider_falls_back_with_warning_metadata(self) -> None:
        normalized = normalize_provider_config({"current": "nfu"})

        self.assertEqual(normalized["current"], DEFAULT_PROVIDER)
        self.assertEqual(normalized["requested"], "nfu")
        self.assertEqual(normalized["fallback_reason"], "unknown_provider")

    def test_provider_support_report_marks_experimental_daily_ready_only_when_allowed(self) -> None:
        fju = get_provider("fju")
        blocked = provider_support_report(fju)
        allowed = provider_support_report(fju, allow_experimental=True)

        self.assertEqual(blocked["support_level"], "experimental")
        self.assertFalse(blocked["daily_ready"])
        self.assertTrue(allowed["daily_ready"])
        self.assertTrue(allowed["endpoint_configured"]["base_url"])

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

    def test_doctor_report_warns_for_experimental_provider_without_hard_failure(self) -> None:
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
        self.assertEqual(report["provider_support"]["support_level"], "experimental")
        provider_checks = [item for item in report["checks"] if item["name"].startswith("provider")]
        self.assertTrue(any(item["status"] == "warn" for item in provider_checks))

    async def _discover_courses_with_provider(self, provider_key: str) -> dict:
        async with FakeTronServer() as server:
            server.courses = [{"id": 1, "name": "Synthetic Course"}]
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
                            "allow_experimental": True,
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
            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                login_result = await tron.login(session)
                self.assertTrue(login_result.ok)
                client = tron.create_tron_http_client(session)
                result = await tron.discover_courses(
                    session,
                    endpoints=client.endpoints,
                    request_ssl=tron.get_ssl_request_setting(),
                )
                return result.to_dict()

    def test_fju_provider_endpoints_can_target_fake_server(self) -> None:
        result = __import__("asyncio").run(self._discover_courses_with_provider("fju"))

        self.assertEqual(result["status"], "ok")
        self.assertEqual(result["course_count"], 1)

    def test_tku_provider_endpoints_can_target_fake_server(self) -> None:
        result = __import__("asyncio").run(self._discover_courses_with_provider("tku"))

        self.assertEqual(result["status"], "ok")
        self.assertEqual(result["course_count"], 1)

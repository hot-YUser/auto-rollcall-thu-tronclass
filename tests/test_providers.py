from __future__ import annotations

import copy
import unittest
import unittest.mock
import aiohttp
import json
import tempfile
from yarl import URL
from troTHU import tron, tron_http
from troTHU.providers import DEFAULT_PROVIDER, get_provider, list_all_providers, list_supported_providers, normalize_provider_config, provider_support_report, provider_registry_config, tronclass_api_endpoints
from troTHU.research_mode import normalize_research_mode_config
from tests.fake_tron_server import FakeTronServer
from pathlib import Path
from unittest.mock import patch
from troTHU.course_discovery import CourseDiscoveryError, discover_courses, parse_courses, parse_semester_info


# --- merged from tests/test_providers.py ---
# --- merged from tests/test_providers.py ---
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

    def test_registry_marks_fju_visible_with_ocr_captcha_flow(self) -> None:
        registry = provider_registry_config()

        self.assertEqual(registry["current"], "thu")
        self.assertFalse(registry["allow_experimental"])
        self.assertTrue(registry["available"]["thu"]["ready"])
        self.assertTrue(registry["available"]["fju"]["ready"])
        self.assertTrue(registry["available"]["fju"]["user_visible"])
        self.assertTrue(registry["available"]["tku"]["ready"])
        self.assertTrue(registry["available"]["tku"]["user_visible"])
        self.assertTrue(registry["available"]["tronclass"]["ready"])
        self.assertTrue(registry["available"]["tronclass"]["user_visible"])
        self.assertEqual(registry["available"]["fju"]["support_level"], "ready")
        # No per-school auth_flow any more: every built-in provider ships the uniform
        # "auto" value and login is feature-detected at runtime.
        self.assertEqual(registry["available"]["fju"]["auth_flow"], "auto")
        self.assertTrue(registry["available"]["fju"]["capabilities"]["radar"])
        self.assertEqual(registry["available"]["tku"]["support_level"], "ready")
        self.assertEqual(registry["available"]["tku"]["base_url"], "https://iclass.tku.edu.tw")
        self.assertEqual(registry["available"]["tku"]["auth_flow"], "auto")
        self.assertTrue(registry["available"]["tku"]["capabilities"]["radar"])
        self.assertEqual(registry["available"]["tronclass"]["base_url"], "https://www.tronclass.com.tw")
        self.assertEqual(registry["available"]["tronclass"]["auth_flow"], "auto")
        self.assertTrue(registry["available"]["tronclass"]["capabilities"]["course_discovery"])
        self.assertTrue(registry["available"]["scu"]["ready"])
        self.assertTrue(registry["available"]["scu"]["user_visible"])
        self.assertEqual(registry["available"]["scu"]["auth_flow"], "auto")
        self.assertEqual(registry["available"]["scu"]["base_url"], "https://tronclass.scu.edu.tw")
        self.assertTrue(registry["available"]["scu"]["capabilities"]["radar"])

    def test_supported_provider_registry_lists_fju_as_visible(self) -> None:
        expected = [
            "aeust", "asia", "au", "cgust", "cityumo", "cjcu", "ctust", "cufa", "cyut", "dyu",
            "fju", "hk", "hwu", "kwnc", "lhu", "mkc", "must", "nanya", "ncue", "ncut", "nfu",
            "nou", "nsysu", "ntou", "ntub", "ntuspecs", "ocu", "pu", "scu", "shu", "stu",
            "thu", "tku", "tronclass", "ttu", "usc", "ypu", "yuntech",
        ]
        self.assertEqual([provider.key for provider in list_supported_providers()], expected)
        self.assertEqual(
            [provider.key for provider in list_supported_providers(include_hidden=True)],
            expected,
        )
        self.assertEqual([provider.key for provider in list_all_providers()], expected)

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
        normalized = normalize_provider_config({"current": "zzz_not_a_school"})

        self.assertEqual(normalized["current"], DEFAULT_PROVIDER)
        self.assertEqual(normalized["requested"], "zzz_not_a_school")
        self.assertEqual(normalized["fallback_reason"], "unknown_provider")

    def test_provider_support_report_marks_fju_tku_tronclass_daily_ready_without_experimental_gate(self) -> None:
        fju = get_provider("fju")
        blocked = provider_support_report(fju)
        allowed = provider_support_report(fju, allow_experimental=True)
        tronclass = provider_support_report(get_provider("tronclass"))

        self.assertEqual(blocked["support_level"], "ready")
        self.assertTrue(blocked["daily_ready"])
        self.assertTrue(blocked["user_visible"])
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

    def test_bulk_registered_school_derives_endpoints_login_url_and_aliases(self) -> None:
        pu = get_provider("pu")
        self.assertTrue(pu.ready)
        # Zero per-school presets: every bulk school derives login_url = base + /login and
        # ships the uniform "auto" auth_flow (login is feature-detected at runtime).
        self.assertEqual(pu.auth_flow, "auto")
        self.assertEqual(pu.base_url, "https://tronclass.pu.edu.tw")
        self.assertEqual(pu.login_url, "https://tronclass.pu.edu.tw/login")
        self.assertTrue(pu.rollcalls_url.startswith("https://tronclass.pu.edu.tw/"))
        self.assertIn("/api/radar/rollcalls", pu.rollcalls_url)
        # NOU is no longer special-cased: login_url derives like everyone else, and the
        # /cas/login form is reached at runtime by login_flow's candidate probing.
        self.assertEqual(get_provider("nou").login_url, "https://tronclass.nou.edu.tw/login")
        # Formerly per-school captcha/email/loginSettings flows — now all uniform "auto".
        for key in ("ntou", "asia", "nfu", "mkc", "kwnc", "ncue", "ncut", "ntub", "yuntech", "cityumo", "lhu"):
            self.assertEqual(get_provider(key).auth_flow, "auto", key)
            self.assertEqual(get_provider(key).login_url, get_provider(key).base_url.rstrip("/") + "/login", key)
        self.assertEqual(get_provider("lhu").base_url, "https://elearn.lhu.edu.tw")
        # Chinese aliases resolve to the right key
        self.assertEqual(get_provider("靜宜大學").key, "pu")
        self.assertEqual(get_provider("海洋大學").key, "ntou")
        self.assertEqual(get_provider("龍華").key, "lhu")

    def test_config_captcha_overrides_are_not_accepted_but_login_flow_overrides_are(self) -> None:
        # Captcha params are NOT per-school overridable any more (OCR self-determines);
        # login_url / auth_flow stay overridable as a power-user escape hatch.
        normalized = normalize_provider_config(
            {
                "current": "capschool",
                "available": {
                    "capschool": {
                        "base_url": "https://cap.edu",
                        "auth_flow": "manual_cookie_only",
                        "login_url": "https://cap.edu/cas/login",
                        "captcha_charset": "abcd",
                        "captcha_length": 5,
                    }
                },
            }
        )
        merged = normalized["available"]["capschool"]
        self.assertEqual(merged["auth_flow"], "manual_cookie_only")
        self.assertEqual(merged["login_url"], "https://cap.edu/cas/login")
        self.assertNotIn("captcha_charset", merged)
        self.assertNotIn("captcha_length", merged)


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
                    # These exercise the shared TronClass runtime via each provider's
                    # endpoints with an authenticated session; FJU is seeded a cookie and
                    # must use the manual-cookie path (not the OCR captcha login here).
                    with unittest.mock.patch.object(tron, "ddddocr_available", return_value=False):
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
                    # These exercise the shared TronClass runtime via each provider's
                    # endpoints with an authenticated session; FJU is seeded a cookie and
                    # must use the manual-cookie path (not the OCR captcha login here).
                    with unittest.mock.patch.object(tron, "ddddocr_available", return_value=False):
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
                    # These exercise the shared TronClass runtime via each provider's
                    # endpoints with an authenticated session; FJU is seeded a cookie and
                    # must use the manual-cookie path (not the OCR captcha login here).
                    with unittest.mock.patch.object(tron, "ddddocr_available", return_value=False):
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


class CustomProviderTest(unittest.TestCase):
    def test_synthetic_provider_normalization(self) -> None:
        raw = {
            "current": "ncu",
            "available": {
                "ncu": {
                    "base_url": "https://portal.ncu.edu.tw",
                    "auth_flow": "thu_cas",
                }
            }
        }
        normalized = normalize_provider_config(raw)
        self.assertEqual(normalized["current"], "ncu")
        self.assertEqual(normalized["fallback_reason"], "")
        ncu_config = normalized["available"]["ncu"]
        self.assertEqual(ncu_config["base_url"], "https://portal.ncu.edu.tw")
        self.assertEqual(ncu_config["auth_flow"], "thu_cas")
        self.assertEqual(ncu_config["login_url"], "https://portal.ncu.edu.tw/login")
        self.assertIn("/api/radar/rollcalls", ncu_config["rollcalls_url"])
        self.assertIn("/api/current-semester-info", ncu_config["current_semester_url"])
        self.assertIn("/api/my-courses", ncu_config["courses_url"])

    def test_synthetic_provider_without_base_url_fallback(self) -> None:
        raw = {
            "current": "nonexistent",
            "available": {
                "nonexistent": {
                    "auth_flow": "thu_cas",
                }
            }
        }
        normalized = normalize_provider_config(raw)
        self.assertEqual(normalized["current"], DEFAULT_PROVIDER)
        self.assertEqual(normalized["fallback_reason"], "unknown_provider")
        self.assertNotIn("nonexistent", normalized["available"])

    def test_normalize_base_url(self) -> None:
        from troTHU.providers import normalize_base_url
        self.assertEqual(normalize_base_url("東吳大學"), ("alias", "scu"))
        self.assertEqual(normalize_base_url("SCU"), ("alias", "scu"))
        # A pasted URL / domain is ALWAYS manual login, even for an API-adapted school.
        self.assertEqual(normalize_base_url("https://tronclass.scu.edu.tw/user/index"), ("url", "https://tronclass.scu.edu.tw"))
        self.assertEqual(normalize_base_url("tronclass.com.tw"), ("url", "https://tronclass.com.tw"))
        self.assertEqual(normalize_base_url("iclass-demo.edu.tw"), ("url", "https://iclass-demo.edu.tw"))
        self.assertEqual(normalize_base_url("https://iclass-demo.edu.tw/login"), ("url", "https://iclass-demo.edu.tw"))
        self.assertEqual(normalize_base_url("thuu"), ("plain", "thuu"))
        self.assertEqual(normalize_base_url(""), ("plain", ""))
        # An email is an ACCOUNT id, not a URL — a public-cloud `now`/username has a dotted
        # domain that urlparse reads as the host, which used to misroute it to browser login.
        self.assertEqual(normalize_base_url("a79590671@gmail.com"), ("plain", "a79590671@gmail.com"))
        self.assertEqual(normalize_base_url("student@mail.thu.edu.tw"), ("plain", "student@mail.thu.edu.tw"))
        from troTHU.providers import derive_url_provider_key
        self.assertEqual(derive_url_provider_key("a79590671@gmail.com"), "")
        # An explicit scheme still wins, so a real URL with userinfo stays a URL.
        self.assertEqual(normalize_base_url("https://u@host.edu.tw/login"), ("url", "https://host.edu.tw"))

    def test_synthetic_provider_for_custom_url_uses_interactive_browser(self) -> None:
        raw = {
            "current": "url_iclass_demo_edu_tw",
            "available": {
                "url_iclass_demo_edu_tw": {
                    "base_url": "https://iclass-demo.edu.tw",
                }
            }
        }
        normalized = normalize_provider_config(raw)
        self.assertEqual(normalized["current"], "url_iclass_demo_edu_tw")
        provider = normalized["available"]["url_iclass_demo_edu_tw"]
        self.assertEqual(provider["auth_flow"], "interactive_browser")


# --- merged from tests/test_course_discovery.py ---
try:
    import aiohttp
    from aiohttp import web
except (ImportError, ModuleNotFoundError):
    aiohttp = None
    web = None



class CourseDiscoveryParserTest(unittest.TestCase):
    def test_parse_semester_info_accepts_nested_payload(self) -> None:
        semester = parse_semester_info(
            {
                "semester": {"id": 2, "name": "Spring"},
                "academic_year": {"id": 112, "name": "112"},
            }
        )

        self.assertEqual(semester.semester_id, "2")
        self.assertEqual(semester.semester_name, "Spring")
        self.assertEqual(semester.academic_year_id, "112")

    def test_parse_semester_info_handles_missing_fields(self) -> None:
        semester = parse_semester_info({})

        self.assertEqual(semester.semester_id, "")
        self.assertEqual(semester.academic_year_id, "")

    def test_parse_courses_accepts_common_shapes_and_deduplicates(self) -> None:
        courses = parse_courses(
            {
                "courses": [
                    {
                        "id": 10,
                        "display_name": "Algorithms",
                        "semester_id": 2,
                        "academic_year_id": 112,
                        "teachers": [{"name": "Teacher A"}],
                    },
                    {"id": 10, "name": "Duplicate"},
                    {"course_id": 11, "title": "Networks", "instructor_name": "Teacher B"},
                ]
            }
        )

        self.assertEqual(len(courses), 2)
        self.assertEqual(courses[0].course_id, "10")
        self.assertEqual(courses[0].name, "Algorithms")
        self.assertEqual(courses[0].teacher, "Teacher A")
        self.assertEqual(courses[1].name, "Networks")

    def test_parse_courses_falls_back_to_safe_name(self) -> None:
        courses = parse_courses({"data": [{"id": 42}]})

        self.assertEqual(courses[0].name, "Course 42")
        self.assertNotIn("password", json.dumps([course.to_dict() for course in courses]))

    def test_parse_courses_supports_plain_list(self) -> None:
        courses = parse_courses([{"id": 1, "name": "One"}])

        self.assertEqual(courses[0].course_id, "1")


@unittest.skipUnless(aiohttp is not None and web is not None, "aiohttp.web is required")
class CourseDiscoveryIntegrationTest(unittest.IsolatedAsyncioTestCase):
    async def test_discover_courses_success(self) -> None:
        async with FakeTronServer() as server:
            server.courses = [
                {"id": 101, "display_name": "Data Structures", "teacher_name": "Teacher C"},
                {"id": 102, "name": "Operating Systems"},
            ]
            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                await server.login_session(session)
                result = await discover_courses(session, endpoints=server.endpoints())

        self.assertTrue(result.ok)
        self.assertEqual(result.course_count, 2)
        self.assertEqual(result.courses[0].name, "Data Structures")
        self.assertNotIn("cookie", json.dumps(result.to_dict()).lower())

    async def test_discover_courses_empty_courses(self) -> None:
        async with FakeTronServer() as server:
            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                await server.login_session(session)
                result = await discover_courses(session, endpoints=server.endpoints())

        self.assertEqual(result.status, "empty_courses")
        self.assertEqual(result.course_count, 0)

    async def test_discover_courses_unauthorized_and_5xx(self) -> None:
        async with FakeTronServer() as server:
            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                await server.login_session(session)
                server.session_expired = True
                with self.assertRaises(CourseDiscoveryError) as unauthorized:
                    await discover_courses(session, endpoints=server.endpoints())

        self.assertEqual(unauthorized.exception.status, "unauthorized")

        async with FakeTronServer() as server:
            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                await server.login_session(session)
                server.queue_response("courses", status=503, text="down")
                with self.assertRaises(CourseDiscoveryError) as unexpected:
                    await discover_courses(session, endpoints=server.endpoints())

        self.assertEqual(unexpected.exception.status, "unexpected_response")
        self.assertEqual(unexpected.exception.http_status, 503)

    async def test_discover_courses_invalid_json_is_sanitized(self) -> None:
        async with FakeTronServer() as server:
            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                await server.login_session(session)
                server.queue_response("courses", status=200, text="Bearer secret-token leaked")
                with self.assertRaises(CourseDiscoveryError) as raised:
                    await discover_courses(session, endpoints=server.endpoints())

        self.assertEqual(raised.exception.status, "unexpected_response")
        self.assertNotIn("secret-token", str(raised.exception.to_dict()))


@unittest.skipUnless(aiohttp is not None and web is not None, "aiohttp.web is required")
class CoursesCommandTest(unittest.IsolatedAsyncioTestCase):
    async def asyncSetUp(self) -> None:
        self.original_config = copy.deepcopy(tron.CONFIG)
        self.original_base_dir = tron.BASE_DIR
        self.temp_dir = tempfile.TemporaryDirectory()
        self.server = await FakeTronServer().start()
        self.patch_urls = self.server.patch_tron_http_urls(tron_http)
        self.patch_urls.__enter__()
        tron.BASE_DIR = Path(self.temp_dir.name)
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
                }
            )
        )

    async def asyncTearDown(self) -> None:
        tron.CONFIG.clear()
        tron.CONFIG.update(self.original_config)
        tron.BASE_DIR = self.original_base_dir
        self.patch_urls.__exit__(None, None, None)
        await self.server.close()
        self.temp_dir.cleanup()

    async def test_courses_command_json_uses_fake_server(self) -> None:
        self.server.courses = [{"id": 201, "display_name": "Signals"}]
        output = []

        with patch("builtins.print", side_effect=output.append):
            result = await tron.courses_command(json_output=True)

        self.assertEqual(result, 0)
        payload = json.loads(output[0])
        self.assertEqual(payload["status"], "ok")
        self.assertEqual(payload["course_count"], 1)
        self.assertEqual(payload["courses"][0]["name"], "Signals")

    async def test_courses_command_login_failure_is_safe(self) -> None:
        tron.CONFIG["accounts"]["profiles"]["default"]["passwd"] = "wrong"
        output = []

        with patch("builtins.print", side_effect=output.append):
            result = await tron.courses_command(json_output=True)

        self.assertEqual(result, 1)
        payload = json.loads(output[0])
        self.assertEqual(payload["status"], "login_failed")
        self.assertNotIn("wrong", json.dumps(payload))


# --- merged from tests/test_course_discovery.py ---
try:
    import aiohttp
    from aiohttp import web
except (ImportError, ModuleNotFoundError):
    aiohttp = None
    web = None



class CourseDiscoveryParserTest__course_discovery(unittest.TestCase):
    def test_parse_semester_info_accepts_nested_payload(self) -> None:
        semester = parse_semester_info(
            {
                "semester": {"id": 2, "name": "Spring"},
                "academic_year": {"id": 112, "name": "112"},
            }
        )

        self.assertEqual(semester.semester_id, "2")
        self.assertEqual(semester.semester_name, "Spring")
        self.assertEqual(semester.academic_year_id, "112")

    def test_parse_semester_info_handles_missing_fields(self) -> None:
        semester = parse_semester_info({})

        self.assertEqual(semester.semester_id, "")
        self.assertEqual(semester.academic_year_id, "")

    def test_parse_courses_accepts_common_shapes_and_deduplicates(self) -> None:
        courses = parse_courses(
            {
                "courses": [
                    {
                        "id": 10,
                        "display_name": "Algorithms",
                        "semester_id": 2,
                        "academic_year_id": 112,
                        "teachers": [{"name": "Teacher A"}],
                    },
                    {"id": 10, "name": "Duplicate"},
                    {"course_id": 11, "title": "Networks", "instructor_name": "Teacher B"},
                ]
            }
        )

        self.assertEqual(len(courses), 2)
        self.assertEqual(courses[0].course_id, "10")
        self.assertEqual(courses[0].name, "Algorithms")
        self.assertEqual(courses[0].teacher, "Teacher A")
        self.assertEqual(courses[1].name, "Networks")

    def test_parse_courses_falls_back_to_safe_name(self) -> None:
        courses = parse_courses({"data": [{"id": 42}]})

        self.assertEqual(courses[0].name, "Course 42")
        self.assertNotIn("password", json.dumps([course.to_dict() for course in courses]))

    def test_parse_courses_supports_plain_list(self) -> None:
        courses = parse_courses([{"id": 1, "name": "One"}])

        self.assertEqual(courses[0].course_id, "1")


@unittest.skipUnless(aiohttp is not None and web is not None, "aiohttp.web is required")
class CourseDiscoveryIntegrationTest__course_discovery(unittest.IsolatedAsyncioTestCase):
    async def test_discover_courses_success(self) -> None:
        async with FakeTronServer() as server:
            server.courses = [
                {"id": 101, "display_name": "Data Structures", "teacher_name": "Teacher C"},
                {"id": 102, "name": "Operating Systems"},
            ]
            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                await server.login_session(session)
                result = await discover_courses(session, endpoints=server.endpoints())

        self.assertTrue(result.ok)
        self.assertEqual(result.course_count, 2)
        self.assertEqual(result.courses[0].name, "Data Structures")
        self.assertNotIn("cookie", json.dumps(result.to_dict()).lower())

    async def test_discover_courses_empty_courses(self) -> None:
        async with FakeTronServer() as server:
            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                await server.login_session(session)
                result = await discover_courses(session, endpoints=server.endpoints())

        self.assertEqual(result.status, "empty_courses")
        self.assertEqual(result.course_count, 0)

    async def test_discover_courses_unauthorized_and_5xx(self) -> None:
        async with FakeTronServer() as server:
            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                await server.login_session(session)
                server.session_expired = True
                with self.assertRaises(CourseDiscoveryError) as unauthorized:
                    await discover_courses(session, endpoints=server.endpoints())

        self.assertEqual(unauthorized.exception.status, "unauthorized")

        async with FakeTronServer() as server:
            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                await server.login_session(session)
                server.queue_response("courses", status=503, text="down")
                with self.assertRaises(CourseDiscoveryError) as unexpected:
                    await discover_courses(session, endpoints=server.endpoints())

        self.assertEqual(unexpected.exception.status, "unexpected_response")
        self.assertEqual(unexpected.exception.http_status, 503)

    async def test_discover_courses_invalid_json_is_sanitized(self) -> None:
        async with FakeTronServer() as server:
            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                await server.login_session(session)
                server.queue_response("courses", status=200, text="Bearer secret-token leaked")
                with self.assertRaises(CourseDiscoveryError) as raised:
                    await discover_courses(session, endpoints=server.endpoints())

        self.assertEqual(raised.exception.status, "unexpected_response")
        self.assertNotIn("secret-token", str(raised.exception.to_dict()))


@unittest.skipUnless(aiohttp is not None and web is not None, "aiohttp.web is required")
class CoursesCommandTest__course_discovery(unittest.IsolatedAsyncioTestCase):
    async def asyncSetUp(self) -> None:
        self.original_config = copy.deepcopy(tron.CONFIG)
        self.original_base_dir = tron.BASE_DIR
        self.temp_dir = tempfile.TemporaryDirectory()
        self.server = await FakeTronServer().start()
        self.patch_urls = self.server.patch_tron_http_urls(tron_http)
        self.patch_urls.__enter__()
        tron.BASE_DIR = Path(self.temp_dir.name)
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
                }
            )
        )

    async def asyncTearDown(self) -> None:
        tron.CONFIG.clear()
        tron.CONFIG.update(self.original_config)
        tron.BASE_DIR = self.original_base_dir
        self.patch_urls.__exit__(None, None, None)
        await self.server.close()
        self.temp_dir.cleanup()

    async def test_courses_command_json_uses_fake_server(self) -> None:
        self.server.courses = [{"id": 201, "display_name": "Signals"}]
        output = []

        with patch("builtins.print", side_effect=output.append):
            result = await tron.courses_command(json_output=True)

        self.assertEqual(result, 0)
        payload = json.loads(output[0])
        self.assertEqual(payload["status"], "ok")
        self.assertEqual(payload["course_count"], 1)
        self.assertEqual(payload["courses"][0]["name"], "Signals")

    async def test_courses_command_login_failure_is_safe(self) -> None:
        tron.CONFIG["accounts"]["profiles"]["default"]["passwd"] = "wrong"
        output = []

        with patch("builtins.print", side_effect=output.append):
            result = await tron.courses_command(json_output=True)

        self.assertEqual(result, 1)
        payload = json.loads(output[0])
        self.assertEqual(payload["status"], "login_failed")
        self.assertNotIn("wrong", json.dumps(payload))

import copy
import json
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

try:
    import aiohttp
    from aiohttp import web
except (ImportError, ModuleNotFoundError):
    aiohttp = None
    web = None

from troTHU import tron, tron_http
from troTHU.course_discovery import (
    CourseDiscoveryError,
    discover_courses,
    parse_courses,
    parse_semester_info,
)
from tests.fake_tron_server import FakeTronServer


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

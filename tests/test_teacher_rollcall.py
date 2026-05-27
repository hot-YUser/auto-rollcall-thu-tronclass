import copy
import json
import tempfile
import unittest
from datetime import datetime
from pathlib import Path
from types import SimpleNamespace
from unittest.mock import patch

try:
    import aiohttp
    from aiohttp import web
except (ImportError, ModuleNotFoundError):
    aiohttp = None
    web = None

from troTHU import tron, tron_http
from troTHU.course_discovery import parse_courses
from troTHU.teacher_rollcall import (
    build_module_rollcall_payload,
    build_student_rollcall_history_update_payload,
    build_teacher_rollcall_payload,
    build_teacher_rollcall_update_payload,
    default_rollcall_title,
    infer_course_role,
    merge_course_role,
    teacher_stop_path,
)
from tests.fake_tron_server import FakeTronServer


class TeacherRollcallHelperTest(unittest.TestCase):
    def test_infer_course_role_detects_teacher_and_student(self) -> None:
        teacher = infer_course_role({"enrollment": {"roles": ["instructor"], "aliases": ["teacher"]}})
        student = infer_course_role({"enrollment": {"roles": ["student"]}})

        self.assertTrue(teacher.teacher_capable)
        self.assertEqual(teacher.role, "teacher")
        self.assertFalse(student.teacher_capable)
        self.assertEqual(student.role, "student")

    def test_merge_course_role_prefers_enrollment_endpoint(self) -> None:
        course = {"id": 10, "name": "Algorithms", "role": "student"}
        merged = merge_course_role(course, {"roles": ["lecturer"]})

        self.assertTrue(merged.teacher_capable)
        self.assertEqual(merged.role_alias, "lecturer")

    def test_parse_courses_exposes_teacher_role_fields(self) -> None:
        courses = parse_courses(
            {
                "courses": [
                    {
                        "id": 10,
                        "display_name": "Algorithms",
                        "enrollment": {"roles": ["instructor"]},
                    }
                ]
            }
        )

        self.assertTrue(courses[0].teacher_capable)
        self.assertEqual(courses[0].to_dict()["role"], "teacher")

    def test_build_number_and_self_registration_payloads(self) -> None:
        number = build_teacher_rollcall_payload(
            kind="number",
            title="Number Test",
            number_code="1357",
            student_rollcalls=[{"student_id": 1, "status": "on_call_fine"}],
        )
        self_registration = build_teacher_rollcall_payload(kind="self-registration")

        self.assertTrue(number["is_number"])
        self.assertEqual(number["number_code"], "1357")
        self.assertEqual(number["student_rollcalls"][0]["student_rollcall_status"], "on_call_fine")
        self.assertEqual(self_registration["type"], "self_registration")
        self.assertEqual(self_registration["default_rollcall_status"], "absent")

    def test_build_module_and_student_history_payloads(self) -> None:
        module = build_module_rollcall_payload(
            course_id=301,
            module_id="m-10",
            kind="qr",
            title="Module QR",
            status="waiting",
        )
        history = build_student_rollcall_history_update_payload(
            student_rollcalls=[
                {"student_rollcall_id": 801, "student_status": "no_status"},
            ]
        )

        self.assertEqual(module["course_id"], "301")
        self.assertEqual(module["module_id"], "m-10")
        self.assertEqual(module["type"], "qr_rollcall")
        self.assertEqual(history["student_rollcalls"][0]["student_status"], "no_status")

    def test_default_rollcall_title_matches_mobile_frontend_format(self) -> None:
        self.assertEqual(default_rollcall_title(datetime(2026, 5, 27, 11, 6)), "2026.05.27 11:06")

    def test_update_payload_and_stop_paths_match_frontend_endpoints(self) -> None:
        payload = build_teacher_rollcall_update_payload(
            student_rollcalls=[{"student_id": 2, "student_rollcall_status": "absent"}]
        )

        self.assertEqual(payload["student_rollcalls"][0]["student_id"], 2)
        self.assertEqual(teacher_stop_path(42, {"is_number": True}), "/api/rollcall/42/stop_number_rollcall")
        self.assertEqual(
            teacher_stop_path(42, {"is_radar": True}),
            "/api/rollcall/42/stop_radar?api_version=1.1.0",
        )
        self.assertEqual(
            teacher_stop_path(42, {"type": "self_registration"}),
            "/api/rollcall/42/stop_time_table_rollcall",
        )
        self.assertEqual(teacher_stop_path(42, {"source": "qr"}), "/api/rollcall/42/stop_qr_rollcall")


@unittest.skipUnless(aiohttp is not None and web is not None, "aiohttp.web is required")
class TeacherRollcallHttpIntegrationTest(unittest.IsolatedAsyncioTestCase):
    async def test_teacher_rollcall_http_flow(self) -> None:
        async with FakeTronServer() as server:
            server.courses = [
                {
                    "id": 301,
                    "display_name": "Teaching Methods",
                    "enrollment": {"roles": ["instructor"], "aliases": ["teacher"]},
                }
            ]
            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                await server.login_session(session)
                client = server.client(session)
                payload = build_teacher_rollcall_payload(
                    kind="number",
                    title="Local Number",
                    number_code="2468",
                    student_rollcalls=[{"student_id": 1, "status": "absent"}],
                )

                created = await client.create_teacher_rollcall(301, payload)
                rollcall_id = created["id"]
                module_created = await client.create_module_rollcall(
                    301,
                    build_module_rollcall_payload(
                        course_id=301,
                        module_id="mod-1",
                        kind="qr",
                        title="Module QR",
                    ),
                )
                listed = await client.fetch_course_rollcalls(301)
                roster = await client.fetch_course_students(301)
                detail = await client.fetch_course_rollcall_detail(301, rollcall_id)
                onprogress = await client.fetch_student_onprogress_rollcalls(301)
                leaves = await client.fetch_course_leave_record(301, page=1, page_size=20)
                started = await client.start_teacher_rollcall(rollcall_id)
                students = await client.fetch_student_rollcalls(rollcall_id, action="manual_refresh")
                paged = await client.fetch_pagination_student_rollcalls(
                    rollcall_id,
                    page=1,
                    page_size=10,
                    rollcall_status="absent",
                )
                count = await client.fetch_student_rollcall_count(rollcall_id)
                updated = await client.update_teacher_rollcall(
                    rollcall_id,
                    build_teacher_rollcall_update_payload(
                        student_rollcalls=[{"student_id": 1, "status": "on_call_fine"}]
                    ),
                )
                history = await client.fetch_course_student_rollcalls(301, 1, page=1, page_size=10)
                history_updated = await client.update_course_student_rollcalls(
                    301,
                    1,
                    build_student_rollcall_history_update_payload(
                        student_rollcalls=[
                            {"student_rollcall_id": 801, "student_status": "on_call_fine"}
                        ]
                    ),
                )
                qr_answer = await client.answer_qr_rollcall(
                    rollcall_id,
                    {"data": "encrypted", "deviceId": "dev-1"},
                )
                number_answer = await client.answer_number_rollcall(
                    rollcall_id,
                    {"numberCode": "0001", "deviceId": "dev-1"},
                )
                server.radar_success = True
                radar_answer = await client.answer_radar_rollcall(
                    rollcall_id,
                    {"latitude": 24.1786, "longitude": 120.6473, "altitude": 100.0, "deviceId": "dev-1"},
                )
                result = await client.fetch_rollcall_status_result(rollcall_id)
                qrcode = await client.fetch_qrcode_image("https://example.test/rollcall")
                stopped = await client.stop_teacher_rollcall(rollcall_id, rollcall=created)
                deleted = await client.delete_teacher_rollcall(rollcall_id)

        self.assertEqual(module_created["module_id"], "mod-1")
        self.assertEqual(listed["rollcalls"][0]["number_code"], "2468")
        self.assertEqual(roster["students"][0]["name"], "Ada")
        self.assertEqual(detail["id"], rollcall_id)
        self.assertGreaterEqual(len(onprogress["rollcalls"]), 1)
        self.assertEqual(leaves["query"]["page"], "1")
        self.assertEqual(started["status"], "in_progress")
        self.assertEqual(students["student_rollcalls"][0]["student_rollcall_status"], "absent")
        self.assertEqual(paged["student_rollcalls"][0]["student_rollcall_status"], "absent")
        self.assertEqual(count["counts"]["absent"], 1)
        self.assertEqual(updated["student_rollcalls"][0]["student_rollcall_status"], "on_call_fine")
        self.assertEqual(history["student_rollcalls"][0]["student_status"], "absent")
        self.assertEqual(history_updated["student_rollcalls"][0]["student_status"], "on_call_fine")
        self.assertTrue(qr_answer["ok"])
        self.assertTrue(number_answer["success"])
        self.assertTrue(radar_answer["success"])
        self.assertEqual(result["attended"], 1)
        self.assertEqual(qrcode.content_type, "image/png")
        self.assertTrue(qrcode.body.startswith(b"\x89PNG"))
        self.assertEqual(stopped["status"], "finished")
        self.assertTrue(deleted["deleted"])


@unittest.skipUnless(aiohttp is not None and web is not None, "aiohttp.web is required")
class TeacherCommandIntegrationTest(unittest.IsolatedAsyncioTestCase):
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
        self.server.courses = [
            {
                "id": 401,
                "display_name": "Teacher Course",
                "enrollment": {"roles": ["instructor"], "aliases": ["teacher"]},
            },
            {
                "id": 402,
                "display_name": "Student Course",
                "enrollment": {"roles": ["student"]},
            },
        ]

    async def asyncTearDown(self) -> None:
        tron.CONFIG.clear()
        tron.CONFIG.update(self.original_config)
        tron.BASE_DIR = self.original_base_dir
        self.patch_urls.__exit__(None, None, None)
        await self.server.close()
        self.temp_dir.cleanup()

    async def test_teacher_status_and_create_commands_use_role_detection(self) -> None:
        output = []
        with patch("builtins.print", side_effect=output.append):
            status_result = await tron.teacher_command(SimpleNamespace(teacher_command="status", json=True))

        self.assertEqual(status_result, 0)
        status_payload = json.loads(output[0])
        self.assertEqual(status_payload["teacher_course_count"], 1)
        self.assertTrue(status_payload["courses"][0]["teacher_capable"])

        create_output = []
        args = SimpleNamespace(
            teacher_command="rollcall",
            teacher_rollcall_command="create",
            course_id="401",
            type="number",
            title="CLI Number",
            number_code="1122",
            latitude=None,
            longitude=None,
            altitude=None,
            use_beacon=False,
            duration_seconds=0,
            duration_min=0,
            default_status="",
            input="",
            start=True,
            force=False,
            json=True,
        )
        with patch("builtins.print", side_effect=create_output.append):
            create_result = await tron.teacher_command(args)

        self.assertEqual(create_result, 0)
        create_payload = json.loads(create_output[0])
        self.assertEqual(create_payload["status"], "created")
        self.assertEqual(create_payload["payload"]["number_code"], "1122")
        self.assertTrue(create_payload["started"])

    async def test_teacher_create_rejects_student_course_without_force(self) -> None:
        output = []
        args = SimpleNamespace(
            teacher_command="rollcall",
            teacher_rollcall_command="create",
            course_id="402",
            type="manual",
            title="Should Not Create",
            number_code="",
            latitude=None,
            longitude=None,
            altitude=None,
            use_beacon=False,
            duration_seconds=0,
            duration_min=0,
            default_status="",
            input="",
            start=False,
            force=False,
            json=True,
        )

        with patch("builtins.print", side_effect=output.append):
            result = await tron.teacher_command(args)

        self.assertEqual(result, 1)
        payload = json.loads(output[0])
        self.assertEqual(payload["status"], "not_teacher_course")
        self.assertEqual(self.server.teacher_rollcalls, [])

import unittest

try:
    import aiohttp
    from aiohttp import web
except (ImportError, ModuleNotFoundError):
    aiohttp = None
    web = None

from troTHU import tron
from troTHU.teacher_rollcall import (
    build_teacher_rollcall_payload,
    normalize_rollcall_kind,
    teacher_stop_path,
)
from tests.fake_tron_server import FakeTronServer


class TeacherRollcallHelperTest(unittest.TestCase):
    def test_builds_only_supported_beta_payload_kinds(self) -> None:
        manual = build_teacher_rollcall_payload(kind="manual")
        number = build_teacher_rollcall_payload(kind="number", number_code="1357")
        radar = build_teacher_rollcall_payload(kind="radar")
        qr = build_teacher_rollcall_payload(kind="qr")
        self_registration = build_teacher_rollcall_payload(kind="self_registration")

        self.assertEqual(normalize_rollcall_kind("self-registration"), "self_registration")
        self.assertEqual(manual["type"], "another")
        self.assertTrue(number["is_number"])
        self.assertEqual(number["number_code"], "1357")
        self.assertTrue(radar["is_radar"])
        self.assertEqual(qr["type"], "qr_rollcall")
        self.assertEqual(self_registration["type"], "self_registration")
        self.assertEqual(self_registration["default_rollcall_status"], "absent")

    def test_stop_paths_match_beta_endpoint_map(self) -> None:
        self.assertEqual(teacher_stop_path(42, fallback="manual"), "/api/rollcall/42/stop_qr_rollcall")
        self.assertEqual(teacher_stop_path(42, fallback="qr"), "/api/rollcall/42/stop_qr_rollcall")
        self.assertEqual(teacher_stop_path(42, fallback="number"), "/api/rollcall/42/stop_number_rollcall")
        self.assertEqual(teacher_stop_path(42, fallback="radar"), "/api/rollcall/42/stop_radar?api_version=1.1.0")
        self.assertEqual(teacher_stop_path(42, fallback="self_registration"), "/api/rollcall/42/stop_time_table_rollcall")


class TeacherRollcallCliTest(unittest.TestCase):
    def test_public_beta_cli_accepts_create_start_stop(self) -> None:
        parser = tron.build_arg_parser()

        create = parser.parse_args([
            "teacher",
            "rollcall",
            "create",
            "--course-id",
            "301",
            "--type",
            "manual",
            "--start",
            "--json",
        ])
        start = parser.parse_args([
            "teacher",
            "rollcall",
            "start",
            "9001",
            "--duration-min",
            "2",
            "--json",
        ])
        stop = parser.parse_args([
            "teacher",
            "rollcall",
            "stop",
            "9001",
            "--type",
            "radar",
            "--json",
        ])

        self.assertEqual(create.teacher_rollcall_command, "create")
        self.assertEqual(create.type, "manual")
        self.assertTrue(create.start)
        self.assertEqual(start.teacher_rollcall_command, "start")
        self.assertEqual(start.duration_min, 2)
        self.assertEqual(stop.teacher_rollcall_command, "stop")
        self.assertEqual(stop.type, "radar")

    def test_public_beta_cli_rejects_non_shipped_teacher_commands(self) -> None:
        parser = tron.build_arg_parser()
        rejected = (
            ["teacher", "status"],
            ["teacher", "rollcall", "list"],
            ["teacher", "rollcall", "delete", "9001"],
            ["teacher", "rollcall", "update", "9001"],
            ["teacher", "rollcall", "students", "9001"],
            ["teacher", "rollcall", "pagination-students", "9001"],
            ["teacher", "rollcall", "count", "9001"],
            ["teacher", "rollcall", "export-stat-report"],
        )
        for argv in rejected:
            with self.subTest(argv=argv):
                with self.assertRaises(SystemExit):
                    parser.parse_args(argv)


@unittest.skipUnless(aiohttp is not None and web is not None, "aiohttp.web is required")
class TeacherRollcallHttpTest(unittest.IsolatedAsyncioTestCase):
    async def test_create_start_stop_http_helpers_for_beta_kinds(self) -> None:
        async with FakeTronServer() as server:
            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                await server.login_session(session)
                client = server.client(session)

                created_by_kind = {}
                for kind in ("manual", "number", "radar", "qr", "self_registration"):
                    payload = build_teacher_rollcall_payload(
                        kind=kind,
                        number_code="2468" if kind == "number" else "",
                    )
                    created = await client.create_teacher_rollcall(301, payload)
                    created_by_kind[kind] = created

                manual_id = created_by_kind["manual"]["id"]
                started = await client.start_teacher_rollcall(manual_id, {"duration": 60})
                qr_code = await client.fetch_teacher_qr_code(301, created_by_kind["qr"]["id"])
                for kind, created in created_by_kind.items():
                    stopped = await client.stop_teacher_rollcall(created["id"], rollcall_type=kind)
                    self.assertEqual(stopped["status"], "finished")

        self.assertEqual(created_by_kind["manual"]["type"], "another")
        self.assertTrue(created_by_kind["number"]["is_number"])
        self.assertTrue(created_by_kind["radar"]["is_radar"])
        self.assertEqual(created_by_kind["qr"]["type"], "qr_rollcall")
        self.assertEqual(created_by_kind["self_registration"]["type"], "self_registration")
        self.assertEqual(started["start_payload"]["duration"], 60)
        self.assertEqual(qr_code["data"], server.teacher_qr_data)
        self.assertEqual(
            [item["endpoint"] for item in server.teacher_rollcall_stops],
            [
                "stop_qr_rollcall",
                "stop_number_rollcall",
                "stop_radar",
                "stop_qr_rollcall",
                "stop_time_table_rollcall",
            ],
        )


if __name__ == "__main__":
    unittest.main()

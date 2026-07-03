from __future__ import annotations

import json
import unittest
import tempfile
import copy
from pathlib import Path
from urllib.parse import quote
from unittest.mock import AsyncMock, MagicMock, patch
from troTHU import tron, qr_teacher_runtime
from troTHU.tron_http import UnauthorizedError, UnexpectedResponseError
from troTHU.qr_rollcall import FALSE_TOKEN, NUMBER_PREFIX, TRUE_TOKEN, answer_qr_rollcall, build_qr_answer_request, parse_compact_payload, parse_qr_payload, parse_qr_payload_with_diagnostics
from types import SimpleNamespace
from troTHU.teacher_rollcall import build_teacher_rollcall_payload, normalize_rollcall_kind, teacher_stop_path
from tests.fake_tron_server import FakeTronServer


# --- merged from tests/test_qr_rollcall.py ---
def make_context_manager(response):
    context_manager = MagicMock()
    context_manager.__aenter__ = AsyncMock(return_value=response)
    context_manager.__aexit__ = AsyncMock(return_value=None)
    return context_manager


class QrRollcallParserTest(unittest.TestCase):
    def test_fixture_corpus_parses_expected_shapes_without_payload_leak(self) -> None:
        fixture_path = Path(__file__).resolve().parent / "fixtures" / "qr_payloads.json"
        fixtures = json.loads(fixture_path.read_text(encoding="utf-8"))

        for fixture in fixtures:
            with self.subTest(fixture=fixture["name"]):
                result = parse_qr_payload_with_diagnostics(fixture["raw"])
                result_dict = result.to_dict()
                encoded = json.dumps(result_dict, ensure_ascii=False)
                self.assertNotIn("fixture-json", encoded)
                self.assertNotIn("relative-fixture", encoded)
                self.assertNotIn("query-fixture", encoded)
                self.assertNotIn("query-compact", encoded)
                self.assertNotIn("percent-json", encoded)
                self.assertNotIn("typed-fixture", encoded)

                if fixture["valid"]:
                    self.assertTrue(result.ok)
                    self.assertIsNotNone(result.data)
                    self.assertEqual(result.data.rollcall_id, fixture["rollcall_id"])
                    self.assertEqual(result.data.data, fixture["data"])
                    self.assertEqual(result.diagnostic.source_kind, fixture["source_kind"])
                    self.assertEqual(result.diagnostic.encoding, fixture["encoding"])
                    self.assertEqual(sorted(result.data.extras.keys()), sorted(fixture["extras"]))
                    self.assertEqual(result.diagnostic.payload_length, len(fixture["raw"]))
                    self.assertRegex(result.diagnostic.payload_hash, r"^[a-f0-9]{12}$")
                else:
                    self.assertFalse(result.ok)
                    self.assertIsNone(result.data)
                    self.assertEqual(result.diagnostic.error, fixture["error"])

    def test_parse_compact_payload_decodes_known_fields_and_extras(self) -> None:
        payload = "4~{}16!3~abc{}def{}ghi!8~{}!z~extra".format(
            NUMBER_PREFIX,
            "\x1f",
            "\x1e",
            TRUE_TOKEN,
        )

        result = parse_compact_payload(payload)

        self.assertEqual(result["rollcallId"], 42)
        self.assertEqual(result["data"], "abc~def!ghi")
        self.assertTrue(result["enableGroupRollcall"])
        self.assertEqual(result["z"], "extra")

    def test_parse_qr_url_supports_json_p_payload(self) -> None:
        body = quote(json.dumps({"rollcallId": 77, "data": "qr-data", "extra": "x"}))
        qr = parse_qr_payload(f"https://ilearn.thu.edu.tw/scanner-jumper?_p={body}")

        self.assertEqual(qr.rollcall_id, "77")
        self.assertEqual(qr.data, "qr-data")
        self.assertEqual(qr.extras["extra"], "x")

    def test_parse_query_only_and_percent_encoded_json_payloads(self) -> None:
        body = quote(json.dumps({"rollcallID": 78, "data": "query-data"}))
        query = parse_qr_payload(f"_p={body}")
        percent_json = parse_qr_payload(quote(json.dumps({"rollcall_id": 79, "data": "percent-data"})))

        self.assertEqual(query.rollcall_id, "78")
        self.assertEqual(query.data, "query-data")
        self.assertEqual(percent_json.rollcall_id, "79")
        self.assertEqual(percent_json.data, "percent-data")

    def test_parse_relative_url_with_compact_payload(self) -> None:
        compact = quote("4~{}16!3~relative-data".format(NUMBER_PREFIX))

        qr = parse_qr_payload(f"/scanner-jumper?p={compact}")

        self.assertEqual(qr.rollcall_id, "42")
        self.assertEqual(qr.data, "relative-data")

    def test_parse_pure_compact_payload_preserves_unknown_fields(self) -> None:
        qr = parse_qr_payload("4~{}16!3~payload!x~keep-me".format(NUMBER_PREFIX))

        self.assertEqual(qr.rollcall_id, "42")
        self.assertEqual(qr.data, "payload")
        self.assertEqual(qr.extras["x"], "keep-me")

    def test_parse_result_diagnostic_reports_missing_required_without_data_leak(self) -> None:
        result = parse_qr_payload_with_diagnostics(json.dumps({"rollcallId": 88, "data": "secret-data"}))

        self.assertTrue(result.ok)
        self.assertEqual(result.diagnostic.rollcall_id, "88")
        self.assertEqual(result.diagnostic.field_names, ("data", "rollcallId"))
        self.assertEqual(result.diagnostic.missing_required, ())
        self.assertNotIn("secret-data", json.dumps(result.to_dict(), ensure_ascii=False))

    def test_parse_result_diagnostic_reports_missing_data_without_raw_leak(self) -> None:
        result = parse_qr_payload_with_diagnostics(json.dumps({"rollcallId": 88, "note": "hidden-note"}))
        encoded = json.dumps(result.to_dict(), ensure_ascii=False)

        self.assertTrue(result.ok)
        self.assertEqual(result.diagnostic.rollcall_id, "88")
        self.assertEqual(result.diagnostic.missing_required, ("data",))
        self.assertIn("missing_required", result.diagnostic.warnings)
        self.assertNotIn("hidden-note", encoded)

    def test_parse_failure_diagnostic_uses_error_code_without_raw_leak(self) -> None:
        result = parse_qr_payload_with_diagnostics("not-a-valid-qr-secret")
        encoded = json.dumps(result.to_dict(), ensure_ascii=False)

        self.assertFalse(result.ok)
        self.assertEqual(result.diagnostic.error, "unable_to_parse")
        self.assertEqual(result.diagnostic.source_kind, "unknown")
        self.assertRegex(result.diagnostic.payload_hash, r"^[a-f0-9]{12}$")
        self.assertNotIn("not-a-valid-qr-secret", encoded)

    def test_parse_qr_payload_rejects_empty_payload(self) -> None:
        with self.assertRaises(ValueError):
            parse_qr_payload("")

    def test_build_qr_answer_request_uses_rollcall_id_and_device(self) -> None:
        qr = parse_qr_payload(json.dumps({"rollcallId": 88, "data": "payload"}))

        url, body = build_qr_answer_request(qr, "device-1")

        self.assertTrue(url.endswith("/api/rollcall/88/answer_qr_rollcall"))
        self.assertEqual(body, {"data": "payload", "deviceId": "device-1"})

    def test_boolean_tokens_are_exported_for_fixtures(self) -> None:
        self.assertTrue(TRUE_TOKEN.endswith("1"))
        self.assertTrue(FALSE_TOKEN.endswith("0"))


class QrRollcallAnswerTest(unittest.IsolatedAsyncioTestCase):
    async def test_answer_qr_rollcall_omits_session_id_when_unknown(self) -> None:
        qr = parse_qr_payload(json.dumps({"rollcallId": 99, "data": "payload"}))
        response = MagicMock()
        response.status = 200
        response.text = AsyncMock(return_value='{"ok": true}')
        session = MagicMock()
        session.put.return_value = make_context_manager(response)

        result = await answer_qr_rollcall(session, qr, "device-2", request_ssl="ssl-marker")

        self.assertEqual(result, {"ok": True})
        call_kwargs = session.put.call_args.kwargs
        self.assertEqual(call_kwargs["json"], {"data": "payload", "deviceId": "device-2"})
        self.assertNotIn("x-session-id", call_kwargs["headers"])
        self.assertEqual(call_kwargs["ssl"], "ssl-marker")

    async def test_answer_qr_rollcall_accepts_created_and_no_content_success(self) -> None:
        qr = parse_qr_payload(json.dumps({"rollcallId": 99, "data": "payload"}))
        for status in (201, 204):
            with self.subTest(status=status):
                response = MagicMock()
                response.status = status
                response.text = AsyncMock(return_value="")
                session = MagicMock()
                session.put.return_value = make_context_manager(response)

                result = await answer_qr_rollcall(session, qr, "device-2")

                self.assertEqual(result, {"ok": True})

    async def test_answer_qr_rollcall_classifies_auth_and_sanitizes_server_errors(self) -> None:
        qr = parse_qr_payload(json.dumps({"rollcallId": 99, "data": "payload"}))

        unauthorized = MagicMock()
        unauthorized.status = 401
        unauthorized.text = AsyncMock(return_value="unauthorized")
        session = MagicMock()
        session.put.return_value = make_context_manager(unauthorized)
        with self.assertRaises(UnauthorizedError):
            await answer_qr_rollcall(session, qr, "device-2")

        server_error = MagicMock()
        server_error.status = 503
        server_error.text = AsyncMock(return_value='{"data":"secret-payload","message":"down"}')
        session = MagicMock()
        session.put.return_value = make_context_manager(server_error)
        with self.assertRaises(UnexpectedResponseError) as caught:
            await answer_qr_rollcall(session, qr, "device-2")
        self.assertNotIn("secret-payload", str(caught.exception))

    async def test_answer_qr_rollcall_invokes_capture_callback_with_full_exchange(self) -> None:
        qr = parse_qr_payload(json.dumps({"rollcallId": 99, "data": "payload-token"}))
        response = MagicMock()
        response.status = 200
        response.headers = {"Content-Type": "application/json"}
        response.text = AsyncMock(return_value='{"ok": true}')
        session = MagicMock()
        session.put.return_value = make_context_manager(response)
        captured = []

        result = await answer_qr_rollcall(session, qr, "device-9", capture=lambda *a: captured.append(a))

        self.assertEqual(result, {"ok": True})
        self.assertEqual(len(captured), 1)
        url, body, status, headers, text = captured[0]
        self.assertTrue(url.endswith("/api/rollcall/99/answer_qr_rollcall"))
        self.assertEqual(body, {"data": "payload-token", "deviceId": "device-9"})
        self.assertEqual(status, 200)
        self.assertEqual(text, '{"ok": true}')

    def test_tron_qr_preview_contains_diagnostic_without_raw_data(self) -> None:
        preview = tron.build_qr_preview(json.dumps({"rollcallId": 88, "data": "super-secret-qr"}))
        encoded = json.dumps(preview, ensure_ascii=False)

        self.assertTrue(preview["ok"])
        self.assertEqual(preview["source_kind"], "json")
        self.assertEqual(preview["encoding"], "json")
        self.assertEqual(preview["missing_required"], [])
        self.assertRegex(preview["payload_hash"], r"^[a-f0-9]{12}$")
        self.assertIn("diagnostic", preview)
        self.assertNotIn("super-secret-qr", encoded)


# --- merged from tests/test_qr_image.py ---
class QrImageDecodeTest(unittest.TestCase):
    def test_decode_qr_image_file_uses_optional_decoder_and_redacts_payload_report(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            image_path = Path(temp_dir) / "qr.png"
            image_path.write_bytes(b"not really an image; decoder is injected")
            result = tron.decode_qr_image_file(
                image_path,
                decoder=lambda _path: json.dumps({"rollcallId": 88, "data": "image-secret"}),
            )
            safe = tron.safe_qr_image_decode_report(result)

        self.assertTrue(result["ok"])
        self.assertEqual(result["decoder"], "injected")
        self.assertIn("payload", result)
        self.assertNotIn("payload", safe)
        self.assertEqual(safe["payload_length"], len(result["payload"]))
        self.assertNotIn("image-secret", json.dumps(safe, ensure_ascii=False))

    def test_decode_qr_image_file_reports_missing_path(self) -> None:
        result = tron.decode_qr_image_file(Path("missing-qr-image.png"))

        self.assertFalse(result["ok"])
        self.assertEqual(result["status"], "image_not_found")

    def test_qr_image_command_previews_without_echoing_raw_payload(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            image_path = Path(temp_dir) / "qr.png"
            image_path.write_bytes(b"x")
            outputs = []
            with (
                patch.object(
                    tron,
                    "decode_qr_image_file",
                    return_value={
                        "ok": True,
                        "status": "decoded",
                        "path": str(image_path),
                        "decoder": "test",
                        "payload": json.dumps({"rollcallId": 88, "data": "command-secret"}),
                        "payload_hash": "abc",
                        "payload_length": 99,
                    },
                ),
                patch.object(tron, "qr_command", new=AsyncMock(return_value=0)),
                patch("builtins.print", side_effect=outputs.append),
            ):
                result = tron.asyncio.run(tron.qr_image_command(image_path, assume_yes=True, json_output=True))

        self.assertEqual(result, 0)
        rendered = "\n".join(outputs)
        self.assertIn('"image"', rendered)
        self.assertNotIn("command-secret", rendered)


if __name__ == "__main__":
    unittest.main()


if __name__ == "__main__":
    unittest.main()


# --- merged from tests/test_teacher_rollcall.py ---
try:
    import aiohttp
    from aiohttp import web
except (ImportError, ModuleNotFoundError):
    aiohttp = None
    web = None



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


# --- merged from tests/test_qr_teacher_runtime.py ---
try:
    import aiohttp
    from aiohttp import web
except (ImportError, ModuleNotFoundError):
    aiohttp = None
    web = None



class QrRuntimeFinalizeTest(unittest.IsolatedAsyncioTestCase):
    async def test_finalize_qr_submission_uses_success_banner_and_highlight_notification(self) -> None:
        qr_data = tron.QrCodeData(fields={"rollcallId": "77", "data": "safe-test-data"})
        notify_event = AsyncMock()
        verification = {
            "ok": True,
            "status": "on_call_fine",
            "rollcall_id": "77",
            "progress": {
                "ok": True,
                "confirmed_present": True,
                "total": 10,
                "present": 4,
                "present_rate_known": True,
                "present_rate_percent": 40.0,
            },
            "monitor_detail": "點名 #77 進度：已簽到 1/1 人",
            "monitor_status": "on_call_fine",
        }
        with (
            patch.object(tron, "format_rollcall_success_banner", return_value="BANNER") as banner,
            patch.object(tron, "log_print") as log_print,
            patch.object(tron, "log", return_value=True),
            patch.object(tron, "get_active_profile", return_value=SimpleNamespace(name="user1")),
            patch.object(tron, "get_active_provider_key", return_value="thu"),
            patch.object(tron, "remove_pending_qr", return_value=True),
            patch.object(tron, "verify_rollcall_on_call_fine", AsyncMock(return_value=verification)),
            patch.object(tron, "remember_rollcall_progress"),
            patch.object(tron, "notify_event", notify_event),
        ):
            ok = await tron.finalize_qr_submission(object(), qr_data, {"ok": True}, progress_log_output=False)

        self.assertTrue(ok)
        banner.assert_called_once()
        self.assertEqual(banner.call_args.args[0], tron.AttendanceType.QRCODE)
        self.assertEqual(banner.call_args.kwargs["attendance_rate"], "40.0% (4/10)")
        log_print.assert_called_once_with("BANNER")
        notify_event.assert_awaited_once()
        event = notify_event.await_args.args[0]
        self.assertEqual(event.title, "QR Code 點名成功！")
        self.assertIn("已確認簽到成功", event.body)
        self.assertEqual(notify_event.await_args.kwargs["highlight_block"], "BANNER")

    async def test_finalize_qr_submission_does_not_banner_when_unconfirmed(self) -> None:
        qr_data = tron.QrCodeData(fields={"rollcallId": "77", "data": "safe-test-data"})
        notify_event = AsyncMock()
        with (
            patch.object(tron, "format_rollcall_success_banner") as banner,
            patch.object(tron, "log_print") as log_print,
            patch.object(tron, "log", return_value=True),
            patch.object(tron, "get_active_profile", return_value=SimpleNamespace(name="user1")),
            patch.object(tron, "get_active_provider_key", return_value="thu"),
            patch.object(tron, "remove_pending_qr", return_value=True),
            patch.object(tron, "verify_rollcall_on_call_fine", AsyncMock(return_value={"ok": False, "status": "submitted_unconfirmed", "rollcall_id": "77"})),
            patch.object(tron, "notify_event", notify_event),
        ):
            ok = await tron.finalize_qr_submission(object(), qr_data, {"ok": True}, progress_log_output=False)

        self.assertFalse(ok)
        banner.assert_not_called()
        log_print.assert_not_called()
        notify_event.assert_awaited_once()
        event = notify_event.await_args.args[0]
        self.assertEqual(event.title, "QR Code 點名已送出，尚未確認")
        self.assertNotIn("highlight_block", notify_event.await_args.kwargs)


def _teacher_config() -> dict:
    return tron.normalize_config(
        {
            "account": {"user": "user1", "passwd": "pass1"},
            "accounts": {
                "current": "user1",
                "profiles": {
                    "user1": {
                        "user": "user1",
                        "passwd": "pass1",
                        "label": "THU",
                        "school": "thu",
                    }
                },
            },
            "teacher": {"user": "user1", "passwd": "pass1", "school": "tronclass", "course": ""},
            "config": {"enable_log": False, "verify_ssl": False},
        }
    )


@unittest.skipUnless(aiohttp is not None and web is not None, "aiohttp.web is required")
class QrTeacherRuntimeTest(unittest.IsolatedAsyncioTestCase):
    def setUp(self) -> None:
        self.original_config = copy.deepcopy(tron.CONFIG)
        self.original_base_dir = tron.BASE_DIR
        self.original_path = tron.PATH
        self.original_teacher_session = tron.TEACHER_SESSION
        self.original_teacher_endpoints = tron.TEACHER_ENDPOINTS
        self.original_teacher_ready = tron.TEACHER_READY
        self.original_teacher_login_result = tron.TEACHER_LOGIN_RESULT
        self.original_teacher_course_id = tron.TEACHER_COURSE_ID
        self.original_completed_qr = copy.deepcopy(tron.COMPLETED_QR_ROLLCALLS)
        self.original_qr_attempts = copy.deepcopy(tron.QR_ASSIST_ATTEMPTS)
        self.original_active_teacher_qr = copy.deepcopy(tron.ACTIVE_TEACHER_QR_ASSISTS)
        self.original_last_progress = copy.deepcopy(tron.LAST_ROLLCALL_PROGRESS)
        self.temp_dir = tempfile.TemporaryDirectory()
        tron.BASE_DIR = Path(self.temp_dir.name)
        tron.PATH = tron.BASE_DIR / "log"
        tron.CONFIG.clear()
        tron.CONFIG.update(_teacher_config())
        tron.TEACHER_SESSION = None
        tron.TEACHER_ENDPOINTS = None
        tron.TEACHER_READY = False
        tron.TEACHER_LOGIN_RESULT = tron.LoginResult(status="missing_credentials", credential_source="missing")
        tron.TEACHER_COURSE_ID = ""
        tron.COMPLETED_QR_ROLLCALLS.clear()
        tron.QR_ASSIST_ATTEMPTS.clear()
        tron.ACTIVE_TEACHER_QR_ASSISTS.clear()
        tron.LAST_ROLLCALL_PROGRESS.clear()

    def tearDown(self) -> None:
        tron.CONFIG.clear()
        tron.CONFIG.update(self.original_config)
        tron.BASE_DIR = self.original_base_dir
        tron.PATH = self.original_path
        tron.TEACHER_SESSION = self.original_teacher_session
        tron.TEACHER_ENDPOINTS = self.original_teacher_endpoints
        tron.TEACHER_READY = self.original_teacher_ready
        tron.TEACHER_LOGIN_RESULT = self.original_teacher_login_result
        tron.TEACHER_COURSE_ID = self.original_teacher_course_id
        tron.COMPLETED_QR_ROLLCALLS.clear()
        tron.COMPLETED_QR_ROLLCALLS.update(self.original_completed_qr)
        tron.QR_ASSIST_ATTEMPTS.clear()
        tron.QR_ASSIST_ATTEMPTS.update(self.original_qr_attempts)
        tron.ACTIVE_TEACHER_QR_ASSISTS.clear()
        tron.ACTIVE_TEACHER_QR_ASSISTS.update(self.original_active_teacher_qr)
        tron.LAST_ROLLCALL_PROGRESS.clear()
        tron.LAST_ROLLCALL_PROGRESS.update(self.original_last_progress)
        self.temp_dir.cleanup()

    async def test_run_teacher_assisted_qr_completes_and_stops_teacher_rollcall(self) -> None:
        async with FakeTronServer() as server:
            server.courses = [{"id": 301, "name": "Teacher Course"}]
            server.rollcalls = [{"rollcall_id": "77", "type": "qr_rollcall", "status": "in_progress"}]
            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as student_session:
                async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as teacher_session:
                    await server.login_session(student_session)
                    tron.TEACHER_SESSION = teacher_session
                    tron.TEACHER_ENDPOINTS = server.endpoints()
                    with (
                        patch.object(tron, "get_active_http_endpoints", return_value=server.endpoints()),
                        patch.object(tron, "get_ssl_request_setting", return_value=None),
                    ):
                        ok = await tron.run_teacher_assisted_qr(student_session, {"rollcall_id": "77"})
                        progress = await tron.fetch_rollcall_progress(
                            student_session,
                            "77",
                            endpoints=server.endpoints(),
                            request_ssl=None,
                            my_user_no="user1",
                        )

        self.assertTrue(ok)
        self.assertTrue(progress["my_present"])
        self.assertEqual(len(server.teacher_rollcalls), 1)
        self.assertEqual(server.teacher_rollcalls[0]["source"], "qr")
        self.assertEqual(len(server.teacher_qr_code_requests), 1)
        self.assertEqual(server.qr_answers[0]["rollcall_id"], "77")
        self.assertEqual(server.qr_answers[0]["body"]["data"], server.teacher_qr_data)
        self.assertEqual(server.teacher_rollcall_stops[-1]["endpoint"], "stop_qr_rollcall")
        self.assertIn("77", tron.COMPLETED_QR_ROLLCALLS)

    async def test_prepare_teacher_assisted_qr_keeps_teacher_rollcall_open_until_stop(self) -> None:
        async with FakeTronServer() as server:
            server.courses = [{"id": 301, "name": "Teacher Course"}]
            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as teacher_session:
                tron.TEACHER_SESSION = teacher_session
                tron.TEACHER_ENDPOINTS = server.endpoints()
                with patch.object(tron, "get_ssl_request_setting", return_value=None):
                    prepared = await tron.prepare_teacher_assisted_qr({"rollcall_id": "77"})

                    self.assertTrue(prepared["ok"])
                    self.assertEqual(len(server.teacher_rollcalls), 1)
                    self.assertEqual(server.teacher_rollcall_stops, [])
                    self.assertIn("77", tron.ACTIVE_TEACHER_QR_ASSISTS)

                    stopped = await tron.stop_prepared_teacher_qr("77")

        self.assertTrue(stopped["ok"])
        self.assertEqual(stopped["stopped"], 1)
        self.assertEqual(server.teacher_rollcall_stops[-1]["endpoint"], "stop_qr_rollcall")
        self.assertNotIn("77", tron.ACTIVE_TEACHER_QR_ASSISTS)

    async def test_run_teacher_assisted_qr_accepts_all_present_when_profile_mismatches(self) -> None:
        async with FakeTronServer() as server:
            server.courses = [{"id": 301, "name": "Teacher Course"}]
            server.rollcalls = [{"rollcall_id": "77", "type": "qr_rollcall", "status": "in_progress"}]
            server.student_rollcalls = [
                {"student_id": 1, "user_no": "someone_else", "status": "pending", "rollcall_status": "on_call"}
            ]
            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as student_session:
                async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as teacher_session:
                    await server.login_session(student_session)
                    tron.TEACHER_SESSION = teacher_session
                    tron.TEACHER_ENDPOINTS = server.endpoints()
                    notify_event = AsyncMock()
                    with (
                        patch.object(tron, "get_active_http_endpoints", return_value=server.endpoints()),
                        patch.object(tron, "get_ssl_request_setting", return_value=None),
                        patch.object(tron, "notify_event", notify_event),
                        patch.object(tron, "log_print") as log_print,
                    ):
                        ok = await tron.run_teacher_assisted_qr(student_session, {"rollcall_id": "77"})
                        progress = await tron.fetch_rollcall_progress(
                            student_session,
                            "77",
                            endpoints=server.endpoints(),
                            request_ssl=None,
                            my_user_no="user1",
                        )

        self.assertTrue(ok)
        self.assertFalse(progress["my_status_known"])
        self.assertTrue(progress["progress_present"])
        self.assertTrue(progress["confirmed_present"])
        self.assertIn("77", tron.COMPLETED_QR_ROLLCALLS)
        notify_event.assert_awaited_once()
        printed = "\n".join(str(call.args[0]) for call in log_print.call_args_list if call.args)
        self.assertNotIn("你的狀態：未簽到", printed)
        self.assertIn("已簽到 1/1", tron.LAST_ROLLCALL_PROGRESS.get("detail", ""))
        self.assertEqual(tron.LAST_ROLLCALL_PROGRESS.get("status"), "on_call_fine")

    async def test_run_teacher_assisted_qr_skips_when_not_configured(self) -> None:
        tron.CONFIG["teacher"] = {"user": "", "passwd": "", "school": "tronclass", "course": ""}

        ok = await tron.run_teacher_assisted_qr(None, {"rollcall_id": "88"})

        self.assertFalse(ok)
        self.assertFalse(tron.TEACHER_READY)

    async def test_ensure_teacher_ready_returns_false_on_login_failure(self) -> None:
        async with FakeTronServer() as server:
            tron.CONFIG["teacher"] = {"user": "user1", "passwd": "wrong", "school": "tronclass", "course": ""}
            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as teacher_session:
                tron.TEACHER_SESSION = teacher_session
                tron.TEACHER_ENDPOINTS = server.endpoints()
                with patch.object(tron, "get_ssl_request_setting", return_value=None):
                    ok = await tron.ensure_teacher_ready()

        self.assertFalse(ok)
        self.assertFalse(tron.TEACHER_READY)
        self.assertEqual(tron.TEACHER_LOGIN_RESULT.status, "missing_session")

    async def test_run_teacher_assisted_qr_does_not_mark_done_when_submitted_but_unconfirmed(self) -> None:
        async with FakeTronServer() as server:
            server.courses = [{"id": 301, "name": "Teacher Course"}]
            server.rollcalls = [{"rollcall_id": "77", "type": "qr_rollcall", "status": "in_progress"}]
            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as student_session:
                async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as teacher_session:
                    await server.login_session(student_session)
                    tron.TEACHER_SESSION = teacher_session
                    tron.TEACHER_ENDPOINTS = server.endpoints()
                    with (
                        patch.object(tron, "get_active_http_endpoints", return_value=server.endpoints()),
                        patch.object(tron, "get_ssl_request_setting", return_value=None),
                        patch.object(tron, "verify_rollcall_on_call_fine", AsyncMock(return_value={"ok": False, "status": "submitted_unconfirmed", "rollcall_id": "77"})),
                        patch.object(qr_teacher_runtime, "QR_ASSIST_CONFIRM_WINDOW_SECONDS", 0.05),
                        patch.object(qr_teacher_runtime, "QR_ASSIST_POLL_INTERVAL_SECONDS", 0.02),
                        patch.object(tron, "log_print"),
                    ):
                        ok = await tron.run_teacher_assisted_qr(student_session, {"rollcall_id": "77"})

        self.assertFalse(ok)
        self.assertNotIn("77", tron.COMPLETED_QR_ROLLCALLS)
        self.assertEqual(len(server.teacher_rollcalls), 1)
        self.assertEqual(server.teacher_rollcall_stops[-1]["endpoint"], "stop_qr_rollcall")

    async def test_qr_assist_cooldown_skips_second_attempt_within_window(self) -> None:
        ensure_mock = AsyncMock(return_value=False)
        # run_teacher_assisted_qr calls these as module-local names, so patch on the module.
        with (
            patch.object(qr_teacher_runtime, "teacher_assist_configured", return_value=True),
            patch.object(qr_teacher_runtime, "ensure_teacher_ready", ensure_mock),
            patch.object(tron, "log_print"),
        ):
            first = await tron.run_teacher_assisted_qr(None, {"rollcall_id": "99"})
            second = await tron.run_teacher_assisted_qr(None, {"rollcall_id": "99"})

        self.assertFalse(first)
        self.assertFalse(second)
        # The second call is short-circuited by the cooldown before reaching ensure_teacher_ready.
        ensure_mock.assert_awaited_once()
        self.assertIn("99", tron.QR_ASSIST_ATTEMPTS)

    async def test_submit_qr_with_data_builds_payload_and_finalizes(self) -> None:
        answer_mock = AsyncMock(return_value={"ok": True})
        finalize_mock = AsyncMock(return_value=True)
        with (
            patch.object(tron, "answer_qr_rollcall", answer_mock),
            patch.object(tron, "finalize_qr_submission", finalize_mock),
        ):
            ok = await tron.submit_qr_with_data(None, "77", "abc-data")

        self.assertTrue(ok)
        answer_mock.assert_awaited_once()
        qr_data = answer_mock.await_args.args[1]
        self.assertEqual(dict(qr_data.fields), {"rollcallId": "77", "data": "abc-data"})
        finalize_mock.assert_awaited_once()
        self.assertIn("教師", finalize_mock.await_args.kwargs.get("notification_body", ""))

    async def test_submit_qr_with_data_rejects_missing_fields(self) -> None:
        with self.assertRaises(ValueError):
            await tron.submit_qr_with_data(None, "", "abc-data")
        with self.assertRaises(ValueError):
            await tron.submit_qr_with_data(None, "77", "")


if __name__ == "__main__":
    unittest.main()

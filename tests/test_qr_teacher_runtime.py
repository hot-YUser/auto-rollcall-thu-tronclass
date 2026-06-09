import copy
import tempfile
import unittest
from pathlib import Path
from types import SimpleNamespace
from unittest.mock import AsyncMock, patch

try:
    import aiohttp
    from aiohttp import web
except (ImportError, ModuleNotFoundError):
    aiohttp = None
    web = None

from troTHU import tron
from troTHU import qr_teacher_runtime
from tests.fake_tron_server import FakeTronServer


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

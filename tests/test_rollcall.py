from __future__ import annotations

import unittest
import aiohttp
import copy
import shutil
import uuid
from troTHU import tron, tron_http
from troTHU.rollcall_engine import classify_rollcall, decide_rollcall, select_rollcall
from troTHU.rollcall_models import AttendanceType, RollcallAction, AdapterTarget, NotificationEventType, OutboundEvent, RollcallBatchSummary, RollcallOutcome
from types import SimpleNamespace
from unittest.mock import AsyncMock, patch
from troTHU.rollcall_progress import fetch_rollcall_progress, summarize_rollcall_progress, verify_rollcall_on_call_fine
from tests.fake_tron_server import FakeTronServer
from pathlib import Path


# --- merged from tests/test_rollcall_engine.py ---
class RollcallEngineTest(unittest.TestCase):
    def test_classify_qr_and_unknown_rollcalls(self) -> None:
        self.assertEqual(
            classify_rollcall({"is_qrcode": True, "rollcall_id": 1}),
            ("unsupported_qrcode", "qrcode", "偵測到 QR 點名；若已設定教師輔助或遠端 data 服務會自動處理，否則請用 tron qr paste 手動貼上當下 QR 內容。"),
        )
        self.assertEqual(
            classify_rollcall({"foo": "bar"}),
            ("unsupported_rollcall", "unknown", "偵測到未支援的點名類型"),
        )

    def test_decide_rollcall_prefers_number_then_radar_then_qr(self) -> None:
        number = {"is_number": True, "rollcall_id": 42}
        decision = decide_rollcall([{"is_qrcode": True, "rollcall_id": 9}, number])

        self.assertEqual(decision.status, "is_number")
        self.assertEqual(decision.action, RollcallAction.ANSWER_NUMBER)
        self.assertEqual(decision.attendance_type, AttendanceType.NUMBER)
        self.assertIs(decision.rollcall, number)

        radar = {"type": "radar", "rollcall_id": 43}
        radar_decision = decide_rollcall([radar])

        self.assertEqual(radar_decision.status, "is_radar")
        self.assertEqual(radar_decision.action, RollcallAction.ANSWER_RADAR)

    def test_decide_rollcall_detects_self_registration_over_qr(self) -> None:
        sr = {"type": "self_registration", "rollcall_id": 77}
        decision = decide_rollcall([{"is_qrcode": True, "rollcall_id": 9}, sr])

        self.assertEqual(decision.status, "is_self_registration")
        self.assertEqual(decision.action, RollcallAction.ANSWER_SELF_REGISTRATION)
        self.assertEqual(decision.attendance_type, AttendanceType.SELF_REGISTRATION)
        self.assertIs(decision.rollcall, sr)

    def test_decide_rollcall_handles_qr_unknown_fine_and_empty(self) -> None:
        qr_decision = decide_rollcall([{"type": "qrcode", "rollcall_id": 88}])
        unknown_decision = decide_rollcall([{"foo": "bar"}])
        fine_decision = decide_rollcall([{"status": "on_call_fine", "rollcall_id": 11}])
        empty_decision = decide_rollcall([])

        self.assertEqual(qr_decision.action, RollcallAction.REQUEST_QR_PAYLOAD)
        self.assertEqual(qr_decision.attendance_type, AttendanceType.QRCODE)
        self.assertEqual(unknown_decision.action, RollcallAction.REPORT_UNSUPPORTED)
        self.assertEqual(fine_decision.status, "on_call_fine")
        self.assertEqual(fine_decision.rollcall, {"status": "on_call_fine", "rollcall_id": 11})
        self.assertEqual(empty_decision.status, "not_call")

    def test_select_rollcall_and_tron_wrappers_match_engine(self) -> None:
        rollcalls = [{"is_qrcode": True, "rollcall_id": 88}]

        self.assertEqual(select_rollcall(rollcalls), tron.select_rollcall(rollcalls))
        self.assertEqual(decide_rollcall(rollcalls), tron.decide_rollcall(rollcalls))
        self.assertEqual(classify_rollcall(rollcalls[0]), tron.classify_rollcall(rollcalls[0]))


# --- merged from tests/test_rollcall_models.py ---
class RollcallModelTest(unittest.TestCase):
    def test_outbound_event_converts_to_legacy_notification_event(self) -> None:
        event = OutboundEvent(
            event_type=NotificationEventType.QR_PAYLOAD_REQUESTED,
            target=AdapterTarget("discord", "user-1", profile="default"),
            title="QR needed",
            body="rollcall requires a scanned payload",
            rollcall_id=88,
            attendance_type=AttendanceType.QRCODE,
        )

        notification = event.to_notification()

        self.assertEqual(notification.event, "qr_payload_requested")
        self.assertIn("rollcall_id: 88", notification.render())
        self.assertEqual(event.target.key(), "discord:user-1:default:")

    def test_batch_summary_counts_successes_and_failures(self) -> None:
        summary = RollcallBatchSummary.from_iterable(
            [
                RollcallOutcome(status="ok", success=True),
                RollcallOutcome(status="failed", success=False),
                RollcallOutcome(status="skipped", success=False),
            ]
        )

        self.assertEqual(summary.total, 3)
        self.assertEqual(summary.successes, 1)
        self.assertEqual(summary.failures, 2)


# --- merged from tests/test_rollcall_progress.py ---
class SummarizeProgressTest(unittest.TestCase):
    def test_counts_present_answered_and_my_status(self) -> None:
        student_rollcalls = {
            "student_rollcalls": [
                {"user_no": "s11210024", "rollcall_status": "on_call_fine"},
                {"user_no": "s10360207", "rollcall_status": "absent"},
                {"user_no": "s11350128", "rollcall_status": "absent"},
            ]
        }
        answers = {"answers": [{"student_id": 1}, {"student_id": 2}]}
        summary = summarize_rollcall_progress(student_rollcalls, answers, "S11210024")
        self.assertEqual(summary["total"], 3)
        self.assertEqual(summary["present"], 1)
        self.assertEqual(summary["answered"], 2)
        self.assertEqual(summary["my_status"], "on_call_fine")
        self.assertTrue(summary["my_status_known"])
        self.assertTrue(summary["my_present"])
        self.assertFalse(summary["progress_present"])
        self.assertTrue(summary["confirmed_present"])

    def test_present_rate_uses_roster_present_not_answers(self) -> None:
        student_rollcalls = {
            "student_rollcalls": [
                {"user_no": "s1", "rollcall_status": "on_call_fine"},
                {"user_no": "s2", "rollcall_status": "absent"},
                {"user_no": "s3", "rollcall_status": "absent"},
            ]
        }
        answers = {"answers": [{"student_id": 1}, {"student_id": 2}, {"student_id": 3}]}

        summary = summarize_rollcall_progress(student_rollcalls, answers, "s1")

        self.assertEqual(summary["answered"], 3)
        self.assertTrue(summary["present_rate_known"])
        self.assertAlmostEqual(summary["present_rate_percent"], 100.0 / 3.0)

    def test_all_present_without_profile_match_confirms_without_marking_absent(self) -> None:
        student_rollcalls = {
            "student_rollcalls": [
                {"user_no": "someone_else", "rollcall_status": "on_call_fine"},
            ]
        }
        answers = {"answers": [{"student_id": 1}]}
        summary = summarize_rollcall_progress(student_rollcalls, answers, "user1")

        self.assertEqual(summary["total"], 1)
        self.assertEqual(summary["present"], 1)
        self.assertFalse(summary["my_status_known"])
        self.assertEqual(summary["my_status"], "")
        self.assertFalse(summary["my_present"])
        self.assertTrue(summary["progress_present"])
        self.assertTrue(summary["confirmed_present"])

    def test_matched_absent_status_stays_explicit(self) -> None:
        student_rollcalls = {
            "student_rollcalls": [
                {"user_no": "user1", "rollcall_status": "absent"},
                {"user_no": "user2", "rollcall_status": "on_call_fine"},
            ]
        }
        summary = summarize_rollcall_progress(student_rollcalls, {"answers": []}, "user1")

        self.assertTrue(summary["my_status_known"])
        self.assertEqual(summary["my_status"], "absent")
        self.assertFalse(summary["my_present"])
        self.assertFalse(summary["progress_present"])
        self.assertFalse(summary["confirmed_present"])

    def test_handles_missing_payloads(self) -> None:
        summary = summarize_rollcall_progress(None, None, "x")
        self.assertEqual(summary, {
            "total": 0,
            "present": 0,
            "answered": 0,
            "present_rate_known": False,
            "present_rate_percent": None,
            "rollcall_status": "",
            "my_user_no": "x",
            "my_status": "",
            "my_status_known": False,
            "my_present": False,
            "progress_present": False,
            "progress_status_present": False,
            "confirmed_present": False,
        })


class RollcallCompletionScopeTest(unittest.TestCase):
    def setUp(self) -> None:
        self.number = copy.deepcopy(tron.COMPLETED_NUMBER_ROLLCALLS)
        self.radar = copy.deepcopy(tron.COMPLETED_RADAR_ROLLCALLS)
        self.self_registration = copy.deepcopy(tron.COMPLETED_SELF_REGISTRATION_ROLLCALLS)
        tron.COMPLETED_NUMBER_ROLLCALLS.clear()
        tron.COMPLETED_RADAR_ROLLCALLS.clear()
        tron.COMPLETED_SELF_REGISTRATION_ROLLCALLS.clear()

    def tearDown(self) -> None:
        tron.COMPLETED_NUMBER_ROLLCALLS.clear()
        tron.COMPLETED_NUMBER_ROLLCALLS.update(self.number)
        tron.COMPLETED_RADAR_ROLLCALLS.clear()
        tron.COMPLETED_RADAR_ROLLCALLS.update(self.radar)
        tron.COMPLETED_SELF_REGISTRATION_ROLLCALLS.clear()
        tron.COMPLETED_SELF_REGISTRATION_ROLLCALLS.update(self.self_registration)

    def test_completion_is_scoped_by_profile_for_all_non_qr_types(self) -> None:
        tron.mark_completed_number_rollcall("77", "1234", profile_name="user-a")
        tron.mark_completed_radar_rollcall("77", profile_name="user-a")
        tron.mark_completed_self_registration_rollcall("77", profile_name="user-a")

        self.assertTrue(tron.is_completed_number_rollcall("77", profile_name="user-a"))
        self.assertTrue(tron.is_completed_radar_rollcall("77", profile_name="user-a"))
        self.assertTrue(tron.is_completed_self_registration_rollcall("77", profile_name="user-a"))
        self.assertFalse(tron.is_completed_number_rollcall("77", profile_name="user-b"))
        self.assertFalse(tron.is_completed_radar_rollcall("77", profile_name="user-b"))
        self.assertFalse(tron.is_completed_self_registration_rollcall("77", profile_name="user-b"))


class FetchProgressTest(unittest.IsolatedAsyncioTestCase):
    async def test_fetch_against_fake_server(self) -> None:
        async with FakeTronServer() as server:
            server.student_rollcalls = [{"user_no": "s14490051", "rollcall_status": "on_call_fine"}]
            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                await server.login_session(session)
                summary = await fetch_rollcall_progress(
                    session, "382575", endpoints=server.endpoints(), my_user_no="s14490051"
                )
        self.assertTrue(summary["ok"])
        self.assertEqual(summary["total"], 1)
        self.assertEqual(summary["present"], 1)
        self.assertTrue(summary["my_present"])
        self.assertEqual(summary["answered"], 1)

    async def test_verifier_confirms_from_rollcalls_feed_status(self) -> None:
        async with FakeTronServer() as server:
            server.rollcalls = [{"rollcall_id": "77", "status": "on_call_fine"}]
            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                await server.login_session(session)
                verification = await verify_rollcall_on_call_fine(
                    session,
                    "77",
                    attempts=1,
                    delay_seconds=0,
                    endpoints=server.endpoints(),
                    request_ssl=None,
                )

        self.assertTrue(verification["ok"])
        self.assertEqual(verification["status"], "on_call_fine")
        self.assertEqual(verification["source"], "rollcalls")

    async def test_verifier_confirms_from_progress_without_profile_match(self) -> None:
        async with FakeTronServer() as server:
            server.student_rollcalls = [
                {"student_id": 1, "user_no": "someone_else", "rollcall_status": "on_call_fine"}
            ]
            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                await server.login_session(session)
                with patch(
                    "troTHU.rollcall_progress.ctx.get_active_profile",
                    return_value=SimpleNamespace(name="default", user="user1"),
                ):
                    verification = await verify_rollcall_on_call_fine(
                        session,
                        "77",
                        attempts=1,
                        delay_seconds=0,
                        endpoints=server.endpoints(),
                        request_ssl=None,
                    )

        self.assertTrue(verification["ok"])
        self.assertEqual(verification["source"], "progress")
        self.assertTrue(verification["progress"]["confirmed_present"])
        self.assertFalse(verification["progress"]["my_status_known"])
        self.assertIn("已簽到 1/1", verification["monitor_detail"])

    async def test_verifier_uses_profile_user_not_profile_name(self) -> None:
        async with FakeTronServer() as server:
            server.student_rollcalls = [
                {"user_no": "student@example.edu", "rollcall_status": "on_call_fine"},
                {"user_no": "someone_else", "rollcall_status": "absent"},
            ]
            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                await server.login_session(session)
                with patch(
                    "troTHU.rollcall_progress.ctx.get_active_profile",
                    return_value=SimpleNamespace(name="default", user="student@example.edu"),
                ):
                    verification = await verify_rollcall_on_call_fine(
                        session,
                        "77",
                        attempts=1,
                        delay_seconds=0,
                        endpoints=server.endpoints(),
                        request_ssl=None,
                    )

        self.assertTrue(verification["ok"])
        self.assertEqual(verification["source"], "progress")
        self.assertEqual(verification["progress"]["my_user_no"], "student@example.edu")
        self.assertTrue(verification["progress"]["my_present"])

    async def test_verifier_explicit_user_is_stable_across_profile_switches(self) -> None:
        async with FakeTronServer() as server:
            server.student_rollcalls = [
                {"user_no": "member@example.edu", "rollcall_status": "on_call_fine"},
                {"user_no": "other", "rollcall_status": "absent"},
            ]
            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                await server.login_session(session)
                with patch(
                    "troTHU.rollcall_progress.ctx.get_active_profile",
                    return_value=SimpleNamespace(name="other-profile", user="other@example.edu"),
                ):
                    verification = await verify_rollcall_on_call_fine(
                        session,
                        "77",
                        attempts=1,
                        delay_seconds=0,
                        endpoints=server.endpoints(),
                        request_ssl=None,
                        my_user_no="member@example.edu",
                    )

        self.assertTrue(verification["ok"])
        self.assertEqual(verification["progress"]["my_user_no"], "member@example.edu")


if __name__ == "__main__":
    unittest.main()


# --- merged from tests/test_tron_integration.py ---
try:
    import aiohttp
    from aiohttp import web
except (ImportError, ModuleNotFoundError):
    aiohttp = None
    web = None


TEST_WORKSPACE_DIR = Path(__file__).resolve().parents[1]


def make_workspace_temp_dir() -> Path:
    root = TEST_WORKSPACE_DIR / ".tmp-tests"
    root.mkdir(exist_ok=True)
    path = root / uuid.uuid4().hex
    path.mkdir()
    return path


@unittest.skipUnless(aiohttp is not None and web is not None, "aiohttp.web is required")
class TronIntegrationTest(unittest.IsolatedAsyncioTestCase):
    async def asyncSetUp(self) -> None:
        self.original_config = copy.deepcopy(tron.CONFIG)
        self.original_path = tron.PATH
        self.original_base_dir = tron.BASE_DIR
        self.original_unsupported_rollcall_state = copy.deepcopy(tron.UNSUPPORTED_ROLLCALL_STATE)
        self.original_completed_qr = copy.deepcopy(tron.COMPLETED_QR_ROLLCALLS)
        self.original_qr_assist_attempts = copy.deepcopy(tron.QR_ASSIST_ATTEMPTS)
        self.base_dir = make_workspace_temp_dir()
        tron.BASE_DIR = self.base_dir
        tron.CONFIG["config"]["enable_log"] = True
        tron.CONFIG["notifications"]["tg"]["enable"] = False
        tron.CONFIG["notifications"]["dc"]["enable"] = False
        tron.reset_unsupported_rollcall_state()
        tron.COMPLETED_QR_ROLLCALLS.clear()
        tron.QR_ASSIST_ATTEMPTS.clear()

        self.fake_server = await FakeTronServer().start()
        self.url_patch = self.fake_server.patch_tron_http_urls(tron_http)
        self.url_patch.__enter__()
        tron.CONFIG["provider"] = tron.normalize_provider_config(
            {
                "current": tron.DEFAULT_PROVIDER,
                "available": {
                    tron.DEFAULT_PROVIDER: {
                        "base_url": self.fake_server.base_url,
                        "login_url": self.fake_server.login_url,
                    }
                },
            }
        )

    async def asyncTearDown(self) -> None:
        tron.CONFIG.clear()
        tron.CONFIG.update(copy.deepcopy(self.original_config))
        tron.PATH = self.original_path
        tron.BASE_DIR = self.original_base_dir
        tron.UNSUPPORTED_ROLLCALL_STATE.clear()
        tron.UNSUPPORTED_ROLLCALL_STATE.update(copy.deepcopy(self.original_unsupported_rollcall_state))
        tron.COMPLETED_QR_ROLLCALLS.clear()
        tron.COMPLETED_QR_ROLLCALLS.update(copy.deepcopy(self.original_completed_qr))
        tron.QR_ASSIST_ATTEMPTS.clear()
        tron.QR_ASSIST_ATTEMPTS.update(copy.deepcopy(self.original_qr_assist_attempts))
        self.url_patch.__exit__(None, None, None)
        await self.fake_server.close()
        shutil.rmtree(self.base_dir, ignore_errors=True)

    async def login_session(self, session):
        from troTHU import login_flow
        client = tron_http.TronHttpClient(session)
        resolved = await login_flow.resolve_credential_form(client)
        with patch.object(
            tron_http,
            "has_session_cookie",
            side_effect=lambda current_session, *args, **kwargs: any(
                cookie.key == "session" for cookie in current_session.cookie_jar
            ),
        ):
            outcome = await login_flow.submit_credentials(client, resolved, "user1", "pass1")
        return resolved.form, outcome

    async def test_http_client_can_login_and_fetch_rollcalls_against_local_server(self) -> None:
        self.fake_server.rollcalls = [{"status": "on_call_fine", "rollcall_id": 11}]

        async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
            form, outcome = await self.login_session(session)
            result = await tron_http.TronHttpClient(session).fetch_rollcalls()

        self.assertEqual(form.fields["execution"], "abc123")
        self.assertTrue(outcome.has_session)
        self.assertEqual(result.payload["rollcalls"][0]["rollcall_id"], 11)

    async def test_http_hook_logs_every_api_call(self) -> None:
        # fetch_rollcalls is a direct-session fetcher that used to bypass logging entirely;
        # it now funnels through _logged_request, which emits exactly one api_call log.
        self.fake_server.rollcalls = [{"status": "on_call_fine", "rollcall_id": 11}]

        async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
            await self.login_session(session)
            with patch.object(tron, "log_api_call") as log_mock:
                await tron_http.TronHttpClient(session).fetch_rollcalls()

        self.assertTrue(log_mock.called)
        args, kwargs = log_mock.call_args
        self.assertEqual(args[0], "GET")
        self.assertEqual(kwargs.get("http_status"), 200)

    async def test_check_rollcall_number_flow_logs_and_invokes_handler(self) -> None:
        self.fake_server.rollcalls = [{"is_number": True, "rollcall_id": 42}]

        temp_dir = make_workspace_temp_dir()
        try:
            tron.PATH = temp_dir
            number_mock = AsyncMock()
            mes_mock = AsyncMock()

            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                await self.login_session(session)
                with (
                    patch.object(tron, "number", number_mock),
                    patch.object(tron, "mes", mes_mock),
                    patch.object(tron, "log_print"),
                ):
                    result = await tron.check_rollcall(session, 5)
        finally:
            shutil.rmtree(temp_dir, ignore_errors=True)

        self.assertEqual(result, "is_number")
        number_mock.assert_awaited_once()
        mes_mock.assert_awaited_once()

    async def test_check_rollcall_self_registration_submits_empty_and_confirms(self) -> None:
        # Real end-to-end (self_registration NOT mocked): detect -> empty PUT -> verify on_call_fine.
        self.fake_server.rollcalls = [{"type": "self_registration", "rollcall_id": 77}]

        temp_dir = make_workspace_temp_dir()
        try:
            tron.PATH = temp_dir
            mes_mock = AsyncMock()

            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                await self.login_session(session)
                with (
                    patch.object(tron, "mes", mes_mock),
                    patch.object(tron, "log_print"),
                ):
                    result = await tron.check_rollcall(session, 7)
        finally:
            shutil.rmtree(temp_dir, ignore_errors=True)

        self.assertEqual(result, "is_self_registration")
        # exactly one empty-body PUT reached the answer_self_registration_rollcall endpoint
        self.assertEqual(len(self.fake_server.self_registration_answers), 1)
        self.assertEqual(self.fake_server.self_registration_answers[0]["body"], {})
        self.assertEqual(self.fake_server.self_registration_answers[0]["rollcall_id"], "77")
        mes_mock.assert_awaited()

    async def test_check_rollcall_unsupported_qrcode_notifies_once(self) -> None:
        self.fake_server.rollcalls = [{"is_qrcode": True, "rollcall_id": 88, "type": "qrcode"}]

        temp_dir = make_workspace_temp_dir()
        try:
            tron.PATH = temp_dir
            mes_mock = AsyncMock()

            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                await self.login_session(session)
                with (
                    patch.object(tron, "mes", mes_mock),
                    patch.object(tron, "log_print"),
                ):
                    first = await tron.check_rollcall(session, 1)
                    second = await tron.check_rollcall(session, 2)
        finally:
            shutil.rmtree(temp_dir, ignore_errors=True)

        self.assertEqual(first, "unsupported_qrcode")
        self.assertEqual(second, "unsupported_qrcode")
        self.assertEqual(mes_mock.await_count, 1)

    async def test_check_rollcall_qrcode_teacher_assist_completes_and_marks_done(self) -> None:
        self.fake_server.rollcalls = [{"is_qrcode": True, "rollcall_id": 88, "type": "qrcode"}]
        teacher_mock = AsyncMock(return_value=True)

        async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
            await self.login_session(session)
            with (
                patch.object(tron, "teacher_assist_configured", return_value=True),
                patch.object(tron, "qr_remote_configured", return_value=False),
                patch.object(tron, "run_teacher_assisted_qr", teacher_mock),
                patch.object(tron, "mes", AsyncMock()),
                patch.object(tron, "log_print"),
            ):
                result = await tron.check_rollcall(session, 1)

        self.assertEqual(result, "is_qrcode")
        teacher_mock.assert_awaited_once()
        self.assertTrue(teacher_mock.await_args.kwargs["keep_prepared"])
        self.assertTrue(tron.is_completed_qr_rollcall("88"))

    async def test_check_rollcall_qrcode_teacher_fails_notifies_manual(self) -> None:
        # With neither a working teacher source nor configured remote oracle, stay honest and manual.
        self.fake_server.rollcalls = [{"is_qrcode": True, "rollcall_id": 88, "type": "qrcode"}]
        teacher_mock = AsyncMock(return_value=False)

        async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
            await self.login_session(session)
            with (
                patch.object(tron, "teacher_assist_configured", return_value=True),
                patch.object(tron, "qr_remote_configured", return_value=False),
                patch.object(tron, "run_teacher_assisted_qr", teacher_mock),
                patch.object(tron, "mes", AsyncMock()),
                patch.object(tron, "log_print"),
            ):
                result = await tron.check_rollcall(session, 1)

        self.assertEqual(result, "unsupported_qrcode")
        teacher_mock.assert_awaited_once()
        self.assertFalse(tron.is_completed_qr_rollcall("88"))

    async def test_check_rollcall_qrcode_falls_back_to_remote(self) -> None:
        self.fake_server.rollcalls = [{"is_qrcode": True, "rollcall_id": 88, "type": "qrcode"}]
        teacher_mock = AsyncMock(return_value=False)
        remote_mock = AsyncMock(return_value=True)

        async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
            await self.login_session(session)
            with (
                patch.object(tron, "teacher_assist_configured", return_value=True),
                patch.object(tron, "qr_remote_configured", return_value=True),
                patch.object(tron, "run_teacher_assisted_qr", teacher_mock),
                patch.object(tron, "submit_remote_qr", remote_mock),
                patch.object(tron, "submit_group_qr", AsyncMock(return_value={"ok": True, "results": []})),
                patch.object(tron, "mes", AsyncMock()),
                patch.object(tron, "log_print"),
            ):
                result = await tron.check_rollcall(session, 1)

        self.assertEqual(result, "is_qrcode")
        teacher_mock.assert_awaited_once()
        remote_mock.assert_awaited_once()
        self.assertTrue(tron.is_completed_qr_rollcall("88"))

    async def test_check_rollcall_qrcode_skips_when_already_completed(self) -> None:
        self.fake_server.rollcalls = [{"is_qrcode": True, "rollcall_id": 88, "type": "qrcode"}]
        tron.mark_completed_qr_rollcall("88")
        teacher_mock = AsyncMock(return_value=True)

        async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
            await self.login_session(session)
            with (
                patch.object(tron, "teacher_assist_configured", return_value=True),
                patch.object(tron, "qr_remote_configured", return_value=False),
                patch.object(tron, "run_teacher_assisted_qr", teacher_mock),
                patch.object(tron, "log_print"),
            ):
                result = await tron.check_rollcall(session, 1)

        self.assertEqual(result, "qr 點名已處理")
        teacher_mock.assert_not_awaited()


if __name__ == "__main__":
    unittest.main()

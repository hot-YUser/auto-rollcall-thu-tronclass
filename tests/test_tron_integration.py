import copy
import json
import shutil
import unittest
import uuid
from pathlib import Path
from unittest.mock import AsyncMock, patch

try:
    import aiohttp
    from aiohttp import web
except (ImportError, ModuleNotFoundError):
    aiohttp = None
    web = None

from troTHU import tron, tron_http, radar_runtime
from tests.fake_tron_server import FakeTronServer

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
        client = tron_http.TronHttpClient(session)
        form = await client.fetch_login_form()
        with patch.object(
            tron_http,
            "has_session_cookie",
            side_effect=lambda current_session: any(
                cookie.key == "session" for cookie in current_session.cookie_jar
            ),
        ):
            outcome = await client.submit_login(form, "user1", "pass1")
        return form, outcome

    def current_daily_log_path(self, root: Path) -> Path:
        today = tron.current_datetime()
        return root / str(today.year) / str(today.month) / "{}.jsonl".format(today.day)

    async def test_http_client_can_login_and_fetch_rollcalls_against_local_server(self) -> None:
        self.fake_server.rollcalls = [{"status": "on_call_fine", "rollcall_id": 11}]

        async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
            form, outcome = await self.login_session(session)
            result = await tron_http.TronHttpClient(session).fetch_rollcalls()

        self.assertEqual(form.fields["execution"], "abc123")
        self.assertTrue(outcome.has_session)
        self.assertEqual(result.payload["rollcalls"][0]["rollcall_id"], 11)

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

            log_path = self.current_daily_log_path(temp_dir)
            events = [
                json.loads(line)["event"]
                for line in log_path.read_text(encoding="utf-8").splitlines()
            ]
        finally:
            shutil.rmtree(temp_dir, ignore_errors=True)

        self.assertEqual(result, "is_number")
        number_mock.assert_awaited_once()
        mes_mock.assert_awaited_once()
        self.assertIn("rollcall_poll", events)
        self.assertIn("number_rollcall_started", events)

    async def test_check_rollcall_unsupported_qrcode_notifies_once_and_writes_jsonl(self) -> None:
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
                    patch.object(tron, "try_clipboard_qr_autosubmit", AsyncMock(return_value=False)),
                ):
                    first = await tron.check_rollcall(session, 1)
                    second = await tron.check_rollcall(session, 2)

            log_path = self.current_daily_log_path(temp_dir)
            entries = [
                json.loads(line)
                for line in log_path.read_text(encoding="utf-8").splitlines()
            ]
        finally:
            shutil.rmtree(temp_dir, ignore_errors=True)

        self.assertEqual(first, "unsupported_qrcode")
        self.assertEqual(second, "unsupported_qrcode")
        self.assertEqual(mes_mock.await_count, 1)
        self.assertEqual(
            [entry["event"] for entry in entries].count("unsupported_rollcall_detected"),
            1,
        )
        self.assertEqual(
            [entry["event"] for entry in entries].count("rollcall_poll"),
            2,
        )

    async def test_check_rollcall_qrcode_teacher_assist_completes_and_marks_done(self) -> None:
        self.fake_server.rollcalls = [{"is_qrcode": True, "rollcall_id": 88, "type": "qrcode"}]
        teacher_mock = AsyncMock(return_value=True)
        clip_mock = AsyncMock(return_value=False)

        async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
            await self.login_session(session)
            with (
                patch.object(tron, "teacher_assist_configured", return_value=True),
                patch.object(tron, "run_teacher_assisted_qr", teacher_mock),
                patch.object(tron, "try_clipboard_qr_autosubmit", clip_mock),
                patch.object(tron, "mes", AsyncMock()),
                patch.object(tron, "log_print"),
            ):
                result = await tron.check_rollcall(session, 1)

        self.assertEqual(result, "is_qrcode")
        teacher_mock.assert_awaited_once()
        clip_mock.assert_not_awaited()
        self.assertIn("88", tron.COMPLETED_QR_ROLLCALLS)

    async def test_check_rollcall_qrcode_falls_back_to_clipboard_when_teacher_fails(self) -> None:
        self.fake_server.rollcalls = [{"is_qrcode": True, "rollcall_id": 88, "type": "qrcode"}]
        teacher_mock = AsyncMock(return_value=False)
        clip_mock = AsyncMock(return_value=True)

        async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
            await self.login_session(session)
            with (
                patch.object(tron, "teacher_assist_configured", return_value=True),
                patch.object(tron, "run_teacher_assisted_qr", teacher_mock),
                patch.object(tron, "try_clipboard_qr_autosubmit", clip_mock),
                patch.object(tron, "mes", AsyncMock()),
                patch.object(tron, "log_print"),
            ):
                result = await tron.check_rollcall(session, 1)

        self.assertEqual(result, "is_qrcode")
        teacher_mock.assert_awaited_once()
        clip_mock.assert_awaited_once()
        self.assertIn("88", tron.COMPLETED_QR_ROLLCALLS)

    async def test_check_rollcall_qrcode_skips_when_already_completed(self) -> None:
        self.fake_server.rollcalls = [{"is_qrcode": True, "rollcall_id": 88, "type": "qrcode"}]
        tron.COMPLETED_QR_ROLLCALLS["88"] = True
        teacher_mock = AsyncMock(return_value=True)

        async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
            await self.login_session(session)
            with (
                patch.object(tron, "teacher_assist_configured", return_value=True),
                patch.object(tron, "run_teacher_assisted_qr", teacher_mock),
                patch.object(tron, "log_print"),
            ):
                result = await tron.check_rollcall(session, 1)

        self.assertEqual(result, "qr 點名已處理")
        teacher_mock.assert_not_awaited()

    async def test_radar_flow_uses_lite_beacon_payload_and_safe_diagnostics(self) -> None:
        # legacy_radar is detached from the live dispatch; call it directly to keep
        # coverage of the shared coordinate/lite/diagnostic-redaction machinery.
        probe_plan = tron.build_probe_plan(tron.DEFAULT_CONFIG["radar"]["boundary_points"])
        first_probe = probe_plan.frame.to_geo(probe_plan.probes[0])
        self.fake_server.set_radar_target(first_probe.lat, first_probe.lon, success_radius_meters=3.0)
        self.fake_server.radar_lite_payload = {
            "data": {
                "rollcallId": 501,
                "useBeacon": "true",
                "beacon": {"nonce": "fixture-nonce"},
            }
        }

        temp_dir = make_workspace_temp_dir()
        try:
            tron.PATH = temp_dir
            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                await self.login_session(session)
                with (
                    patch.object(tron, "mes", AsyncMock()),
                    patch.object(tron, "log_print"),
                ):
                    success = await radar_runtime.legacy_radar(session, {"is_radar": True, "rollcall_id": 501})

            log_path = self.current_daily_log_path(temp_dir)
            entries = [
                json.loads(line)
                for line in log_path.read_text(encoding="utf-8").splitlines()
            ]
        finally:
            shutil.rmtree(temp_dir, ignore_errors=True)

        self.assertTrue(success)
        self.assertEqual(len(self.fake_server.radar_answers), 1)
        payload = self.fake_server.radar_answers[0]["body"]
        self.assertIn("radarSignal", payload)
        self.assertIn("altitudeAccuracy", payload)
        attempt_entry = next(entry for entry in entries if entry["event"] == "radar_coordinate_attempt")
        self.assertEqual(attempt_entry["status"], "success")
        self.assertIn("radarSignal", attempt_entry["payload_fields"])
        self.assertNotIn("fixture-nonce", json.dumps(attempt_entry, ensure_ascii=False))
        self.assertNotIn(payload["radarSignal"], json.dumps(attempt_entry, ensure_ascii=False))

    async def test_radar_lite_rate_limit_returns_safe_failure_without_submit(self) -> None:
        self.fake_server.queue_response("radar_lite", status=429, text="limited")

        async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
            await self.login_session(session)
            with (
                patch.object(tron, "mes", AsyncMock()),
                patch.object(tron, "log_print"),
            ):
                success = await radar_runtime.legacy_radar(session, {"is_radar": True, "rollcall_id": 502})

        self.assertFalse(success)
        self.assertEqual(self.fake_server.radar_answers, [])

    async def test_radar_answer_session_expired_raises_unauthorized(self) -> None:
        self.fake_server.queue_response("radar", status=401, text="unauthorized")

        async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
            await self.login_session(session)
            with (
                patch.object(tron, "mes", AsyncMock()),
                patch.object(tron, "log_print"),
            ):
                with self.assertRaises(tron_http.UnauthorizedError):
                    await radar_runtime.legacy_radar(session, {"is_radar": True, "rollcall_id": 503})


if __name__ == "__main__":
    unittest.main()

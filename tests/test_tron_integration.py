import copy
import itertools
import json
import shutil
import unittest
import uuid
from datetime import datetime
from pathlib import Path
from unittest.mock import AsyncMock, patch

try:
    import aiohttp
    from aiohttp import web
except (ImportError, ModuleNotFoundError):
    aiohttp = None
    web = None

from troTHU import radar_runtime, tron, tron_http
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
        self.base_dir = make_workspace_temp_dir()
        tron.BASE_DIR = self.base_dir
        tron.CONFIG["config"]["enable_log"] = True
        tron.CONFIG["notifications"]["tg"]["enable"] = False
        tron.CONFIG["notifications"]["dc"]["enable"] = False
        tron.reset_unsupported_rollcall_state()

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
        today = datetime.now()
        return root / str(today.year) / str(today.month) / "{}.jsonl".format(today.day)

    async def submit_grid_candidate(self, session, rollcall_id, point, label):
        payload = tron.build_radar_answer_payload(point, device_id="test-device", user_id=1)
        url = "{}/api/rollcall/{}/answer?api_version=1.76".format(
            self.fake_server.base_url,
            rollcall_id,
        )
        async with session.put(url, json=payload) as resp:
            body_text = await resp.text()
            if resp.status in (401, 403):
                raise tron_http.UnauthorizedError("unauthorized")
            result = tron.parse_radar_answer_result(resp.status, body_text)
        if result.success:
            return "success", result
        if result.is_scope_distance:
            return "scope_distance", result
        if result.error_code in {"radar_rate_limited", "radar_server_error"}:
            return "transient", result
        return "fatal", result

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
                    patch.object(tron, "run_qr_data_probe_for_rollcall", AsyncMock(return_value=False)),
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
        self.assertEqual(
            [entry["event"] for entry in entries].count("qr_info_capture"),
            1,
        )
        qr_capture_entry = next(entry for entry in entries if entry["event"] == "qr_info_capture")
        self.assertEqual(qr_capture_entry["status"], "ok")
        self.assertIn("rollcall_capture", qr_capture_entry["output_dir"])
        self.assertTrue(Path(qr_capture_entry["events_path"]).exists())

    async def test_radar_flow_uses_lite_beacon_payload_and_safe_diagnostics(self) -> None:
        first_probe = tron.global_anchor_points()[0]
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
                    success = await tron.radar(session, {"is_radar": True, "rollcall_id": 501})

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

    async def test_global_radar_flow_solves_target_and_logs_summary(self) -> None:
        target = tron.GeoPoint(24.1795, 120.604)
        self.fake_server.set_radar_target(target.lat, target.lon, success_radius_meters=70.0)

        temp_dir = make_workspace_temp_dir()
        try:
            tron.PATH = temp_dir
            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                await self.login_session(session)
                with (
                    patch.object(tron, "mes", AsyncMock()),
                    patch.object(tron, "log_print"),
                ):
                    success = await tron.radar(session, {"is_radar": True, "rollcall_id": 509})

            log_path = self.current_daily_log_path(temp_dir)
            entries = [
                json.loads(line)
                for line in log_path.read_text(encoding="utf-8").splitlines()
            ]
        finally:
            shutil.rmtree(temp_dir, ignore_errors=True)

        self.assertTrue(success)
        self.assertGreaterEqual(len(self.fake_server.radar_answers), 13)
        self.assertLessEqual(len(self.fake_server.radar_answers), 120)
        final_payload = self.fake_server.radar_answers[-1]["body"]
        final_point = tron.GeoPoint(final_payload["latitude"], final_payload["longitude"])
        self.assertLess(tron.wgs84_distance_meters(target, final_point), 80.0)
        summary = next(entry for entry in entries if entry["event"] == "global_radar_summary")
        self.assertEqual(summary["status"], "success")
        self.assertEqual(summary["strategy"], "global_wgs84")
        self.assertLessEqual(summary["request_count"], 120)

    async def test_final_grid_retry_hits_nearest_100m_candidate(self) -> None:
        rollcall_id = 777
        center = tron.GeoPoint(24.1795, 120.604)
        target = list(itertools.islice(tron.unbounded_grid_candidates(center, step_meters=100.0), 2))[1].point
        self.fake_server.rollcalls = [{"is_radar": True, "rollcall_id": rollcall_id}]
        self.fake_server.set_radar_target(target.lat, target.lon, success_radius_meters=1.0)

        temp_dir = make_workspace_temp_dir()
        try:
            tron.PATH = temp_dir
            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                await self.login_session(session)
                client = tron_http.TronHttpClient(session)
                with (
                    patch.object(tron, "mes", AsyncMock()),
                    patch.object(tron, "log_print"),
                ):
                    success = await radar_runtime._run_unbounded_grid_retry(
                        client=client,
                        rollcall_id=rollcall_id,
                        center=center,
                        radar_config={"final_grid_step_meters": 100.0, "cooldown_seconds": 0.01},
                        submit_candidate=lambda point, label: self.submit_grid_candidate(
                            session,
                            rollcall_id,
                            point,
                            label,
                        ),
                    )
        finally:
            shutil.rmtree(temp_dir, ignore_errors=True)

        self.assertTrue(success)
        self.assertEqual(len(self.fake_server.radar_answers), 2)
        final_payload = self.fake_server.radar_answers[-1]["body"]
        final_point = tron.GeoPoint(final_payload["latitude"], final_payload["longitude"])
        self.assertLess(tron.wgs84_distance_meters(target, final_point), 1.0)

    async def test_final_grid_retry_stops_when_rollcall_closes(self) -> None:
        rollcall_id = 778
        center = tron.GeoPoint(24.1795, 120.604)
        self.fake_server.rollcalls = []
        self.fake_server.set_radar_target(25.0, 121.0, success_radius_meters=1.0)

        temp_dir = make_workspace_temp_dir()
        try:
            tron.PATH = temp_dir
            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                await self.login_session(session)
                client = tron_http.TronHttpClient(session)
                with (
                    patch.object(tron, "mes", AsyncMock()),
                    patch.object(tron, "log_print"),
                ):
                    success = await radar_runtime._run_unbounded_grid_retry(
                        client=client,
                        rollcall_id=rollcall_id,
                        center=center,
                        radar_config={"final_grid_step_meters": 100.0, "cooldown_seconds": 0.01},
                        submit_candidate=lambda point, label: self.submit_grid_candidate(
                            session,
                            rollcall_id,
                            point,
                            label,
                        ),
                    )
        finally:
            shutil.rmtree(temp_dir, ignore_errors=True)

        self.assertFalse(success)
        self.assertEqual(len(self.fake_server.radar_answers), 1)

    async def test_final_grid_retry_cools_down_after_transient_and_continues(self) -> None:
        rollcall_id = 779
        center = tron.GeoPoint(24.1795, 120.604)
        target = list(itertools.islice(tron.unbounded_grid_candidates(center, step_meters=100.0), 2))[1].point
        self.fake_server.rollcalls = [{"is_radar": True, "rollcall_id": rollcall_id}]
        self.fake_server.set_radar_target(target.lat, target.lon, success_radius_meters=1.0)
        self.fake_server.queue_response("radar", status=429, text="limited")

        temp_dir = make_workspace_temp_dir()
        try:
            tron.PATH = temp_dir
            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                await self.login_session(session)
                client = tron_http.TronHttpClient(session)
                with (
                    patch.object(tron, "mes", AsyncMock()),
                    patch.object(tron, "log_print"),
                    patch.object(tron, "status_print") as status_print,
                ):
                    success = await radar_runtime._run_unbounded_grid_retry(
                        client=client,
                        rollcall_id=rollcall_id,
                        center=center,
                        radar_config={
                            "final_grid_step_meters": 100.0,
                            "cooldown_seconds": 0.01,
                            "max_cooldowns": 0,
                            "transient_failure_threshold": 1,
                            "transient_failure_ratio": 1.0,
                        },
                        submit_candidate=lambda point, label: self.submit_grid_candidate(
                            session,
                            rollcall_id,
                            point,
                            label,
                        ),
                    )
        finally:
            shutil.rmtree(temp_dir, ignore_errors=True)

        self.assertTrue(success)
        self.assertEqual(len(self.fake_server.radar_answers), 2)
        self.assertTrue(
            any("休息" in str(call.args[0]) for call in status_print.call_args_list)
        )

    async def test_radar_lite_rate_limit_returns_safe_failure_without_submit(self) -> None:
        self.fake_server.queue_response("radar_lite", status=429, text="limited")

        async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
            await self.login_session(session)
            with (
                patch.object(tron, "mes", AsyncMock()),
                patch.object(tron, "log_print"),
            ):
                success = await tron.radar(session, {"is_radar": True, "rollcall_id": 502})

        self.assertFalse(success)
        self.assertEqual(self.fake_server.radar_answers, [])

    async def test_global_radar_cools_down_on_transient_answer_burst(self) -> None:
        anchors = tron.global_anchor_points()
        self.fake_server.set_radar_target(anchors[2].lat, anchors[2].lon, success_radius_meters=3.0)
        self.fake_server.queue_response("radar", status=429, text="limited")
        self.fake_server.queue_response("radar", status=429, text="limited")
        tron.CONFIG["radar"]["global"].update(
            {
                "max_queries": 10,
                "request_retries": 1,
                "cooldown_seconds": 0.1,
                "max_cooldowns": 1,
                "transient_failure_threshold": 2,
                "transient_failure_ratio": 0.5,
            }
        )

        temp_dir = make_workspace_temp_dir()
        try:
            tron.PATH = temp_dir
            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                await self.login_session(session)
                with (
                    patch.object(tron, "mes", AsyncMock()),
                    patch.object(tron, "log_print"),
                    patch.object(tron, "status_print"),
                ):
                    success = await tron.radar(session, {"is_radar": True, "rollcall_id": 510})

            log_path = self.current_daily_log_path(temp_dir)
            events = [
                json.loads(line)["event"]
                for line in log_path.read_text(encoding="utf-8").splitlines()
            ]
        finally:
            shutil.rmtree(temp_dir, ignore_errors=True)

        self.assertTrue(success)
        self.assertEqual(len(self.fake_server.radar_answers), 3)
        self.assertIn("radar_rollcall_cooldown", events)

    async def test_radar_answer_session_expired_raises_unauthorized(self) -> None:
        self.fake_server.queue_response("radar", status=401, text="unauthorized")

        async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
            await self.login_session(session)
            with (
                patch.object(tron, "mes", AsyncMock()),
                patch.object(tron, "log_print"),
            ):
                with self.assertRaises(tron_http.UnauthorizedError):
                    await tron.radar(session, {"is_radar": True, "rollcall_id": 503})


if __name__ == "__main__":
    unittest.main()

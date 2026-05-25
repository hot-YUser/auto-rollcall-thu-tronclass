import tempfile
import unittest
from pathlib import Path

import aiohttp

from troTHU.qr_info_capture import (
    QrInfoCaptureOptions,
    analyze_qr_observation,
    build_qr_info_capture_options_for_rollcall,
    build_qr_info_capture_targets,
    qr_info_capture_enabled,
    run_qr_info_capture,
)
from tests.fake_tron_server import FakeTronServer


QR_RAW = "/j?p=0~ 3kpc!3~ 1779681598e67fdc1aba62fd28490175ffa1ab0589!4~ 8790"
QR_DATA = "1779681598e67fdc1aba62fd28490175ffa1ab0589"


class QrInfoCaptureUnitTest(unittest.TestCase):
    def test_analyze_qr_observation_keeps_raw_and_recovers_displayed_numeric_fields(self) -> None:
        report = analyze_qr_observation(QR_RAW, base_url="https://ilearn.thu.edu.tw")

        self.assertTrue(report["ok"])
        self.assertEqual(report["raw"], QR_RAW)
        self.assertTrue(report["parse_input_was_normalized"])
        self.assertEqual(report["course_id"], "166800")
        self.assertEqual(report["rollcall_id"], "382644")
        self.assertEqual(report["data"], QR_DATA)
        self.assertEqual(report["data_analysis"]["epoch_seconds"], 1779681598)
        self.assertEqual(report["data_analysis"]["suffix_hex32"], "e67fdc1aba62fd28490175ffa1ab0589")

    def test_build_targets_include_teacher_page_and_read_only_api_candidates(self) -> None:
        targets = {target.name: target.url for target in build_qr_info_capture_targets(
            "https://ilearn.thu.edu.tw",
            course_id="166800",
            rollcall_id="382644",
            user_id="238730",
            rollcalls_url="https://ilearn.thu.edu.tw/api/radar/rollcalls?api_version=1.1.0",
        )}

        self.assertEqual(targets["active_rollcalls"], "https://ilearn.thu.edu.tw/api/radar/rollcalls?api_version=1.1.0")
        self.assertEqual(targets["rollcall_lite"], "https://ilearn.thu.edu.tw/api/rollcall/382644/lite")
        self.assertEqual(targets["course_student_rollcalls"], "https://ilearn.thu.edu.tw/api/course/166800/student/238730/rollcalls?page=1&page_size=30")
        self.assertEqual(targets["teacher_qr_page"], "https://ilearn.thu.edu.tw/inclass/courses/166800?m=qr-rollcall/382644&s=&f=")

    def test_main_flow_options_default_to_nonblocking_full_capture(self) -> None:
        self.assertTrue(qr_info_capture_enabled({}))
        self.assertFalse(qr_info_capture_enabled({"capture": {"qr_info_capture": "off"}}))

        options = build_qr_info_capture_options_for_rollcall(
            {"rollcall_id": "382644", "course_id": "166800"},
            config={"capture": {}},
        )
        self.assertEqual(options.course_id, "166800")
        self.assertEqual(options.rollcall_id, "382644")
        self.assertEqual(options.duration_seconds, 0.0)
        self.assertTrue(options.anonymous_probe)
        self.assertFalse(options.browser)

    def test_main_flow_options_accept_infinite_capture_window(self) -> None:
        options = build_qr_info_capture_options_for_rollcall(
            {"rollcall_id": "382644", "course_id": "166800"},
            config={"capture": {"qr_info_duration_seconds": "always"}},
        )
        self.assertIsNone(options.duration_seconds)

        options = build_qr_info_capture_options_for_rollcall(
            {"rollcall_id": "382644", "course_id": "166800"},
            config={"capture": {"qr_info_duration_seconds": -1}},
        )
        self.assertIsNone(options.duration_seconds)


class QrInfoCaptureIntegrationTest(unittest.IsolatedAsyncioTestCase):
    async def test_capture_records_unredacted_body_and_headers(self) -> None:
        async with FakeTronServer() as server:
            server.queue_response(
                "radar_lite",
                json_data={"id": "42", "is_qrcode": True, "data": QR_DATA, "secret_marker": "keep-this-value"},
                headers={"X-Secret-Marker": "keep-this-header"},
            )
            server.queue_response(
                "rollcalls",
                json_data={"rollcalls": [{"rollcall_id": "42", "course_id": "166800", "is_qrcode": True}]},
            )
            with tempfile.TemporaryDirectory() as tmp:
                async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                    await server.login_session(session)
                    summary = await run_qr_info_capture(
                        session,
                        endpoints=server.endpoints(),
                        base_dir=Path(tmp),
                        options=QrInfoCaptureOptions(course_id="166800", rollcall_id="42", duration_seconds=0),
                        profile="default",
                        provider="thu",
                        user_id="238730",
                    )

                self.assertEqual(summary["status"], "ok")
                self.assertEqual(summary["course_id"], "166800")
                self.assertEqual(summary["rollcall_id"], "42")
                self.assertIn("rollcall_capture", summary["output_dir"])
                events_text = Path(summary["events_path"]).read_text(encoding="utf-8")
                self.assertIn(QR_DATA, events_text)
                self.assertIn("keep-this-value", events_text)
                self.assertIn("keep-this-header", events_text)
                self.assertTrue(Path(summary["summary_path"]).exists())
                self.assertTrue(any(Path(summary["responses_dir"]).iterdir()))


if __name__ == "__main__":
    unittest.main()

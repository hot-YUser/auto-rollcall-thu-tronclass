import json
import tempfile
import unittest
from pathlib import Path

import aiohttp

import troTHU.rollcall_capture as rollcall_capture
from troTHU.rollcall_capture import (
    append_rollcall_exchange,
    build_capture_targets,
    capture_enabled,
    capture_rollcall_full,
    extract_rollcall_ids,
)
from tests.fake_tron_server import FakeTronServer


# A realistic QR `data` token (10-digit unix ts + 32-char MD5). The full-capture
# must record this value verbatim — no redaction.
QR_DATA_TOKEN = "1776047549bca3f13fa87900ab6dab90f500aa1ffe"


class RollcallCaptureUnitTest(unittest.TestCase):
    def test_extract_rollcall_ids_tolerates_key_spellings(self) -> None:
        self.assertEqual(extract_rollcall_ids({"rollcall_id": 88, "course_id": 166800}), ("88", "166800"))
        self.assertEqual(extract_rollcall_ids({"id": 5, "course": {"id": 9}}), ("5", "9"))
        self.assertEqual(extract_rollcall_ids({}), ("", ""))

    def test_build_capture_targets_covers_rollcall_and_course_scopes(self) -> None:
        targets = dict(build_capture_targets("https://h", "88", "166800"))
        self.assertEqual(targets["lite"], "https://h/api/rollcall/88/lite")
        self.assertEqual(targets["student_rollcalls"], "https://h/api/rollcall/88/student_rollcalls")
        self.assertEqual(targets["answers"], "https://h/api/rollcall/88/answers")
        self.assertEqual(targets["course_rollcalls"], "https://h/api/course/166800/rollcalls")
        self.assertEqual(len(targets), 8)

    def test_build_capture_targets_skips_course_scope_without_course_id(self) -> None:
        targets = dict(build_capture_targets("https://h", "88", ""))
        self.assertIn("lite", targets)
        self.assertNotIn("course_rollcalls", targets)

    def test_capture_enabled_defaults_on_and_respects_flag(self) -> None:
        self.assertTrue(capture_enabled({}))
        self.assertTrue(capture_enabled(None))
        self.assertFalse(capture_enabled({"capture": {"rollcall_full_capture": False}}))
        self.assertFalse(capture_enabled({"capture": {"rollcall_full_capture": "off"}}))


class RollcallCaptureIntegrationTest(unittest.IsolatedAsyncioTestCase):
    async def test_capture_records_full_raw_qr_data_token(self) -> None:
        async with FakeTronServer() as server:
            # The `lite` endpoint returns a QR-shaped payload carrying the token.
            server.queue_response(
                "radar_lite",
                json_data={"id": "42", "is_qrcode": True, "data": QR_DATA_TOKEN},
            )
            with tempfile.TemporaryDirectory() as tmp:
                async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                    await server.login_session(session)
                    summary = await capture_rollcall_full(
                        session,
                        {"rollcall_id": "42", "course_id": "166800", "is_qrcode": True},
                        endpoints=server.endpoints(),
                        base_dir=Path(tmp),
                        trigger_status="unsupported_qrcode",
                        provider="thu",
                        profile="default",
                    )

                self.assertEqual(summary["status"], "ok")
                self.assertEqual(summary["captures"], 8)
                self.assertIn("lite", summary["endpoints_with_fields"])

                out_path = Path(summary["output_path"])
                self.assertTrue(out_path.exists())
                raw_text = out_path.read_text(encoding="utf-8")
                # The token value is recorded verbatim — not redacted.
                self.assertIn(QR_DATA_TOKEN, raw_text)

                document = json.loads(raw_text)
                lite = next(c for c in document["captures"] if c["name"] == "lite")
                self.assertEqual(lite["status"], 200)
                self.assertEqual(lite["json"]["data"], QR_DATA_TOKEN)
                self.assertIn("data", "".join(lite["interesting_field_paths"]))

    async def test_capture_disabled_by_config_writes_nothing(self) -> None:
        async with FakeTronServer() as server:
            with tempfile.TemporaryDirectory() as tmp:
                async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                    await server.login_session(session)
                    summary = await capture_rollcall_full(
                        session,
                        {"rollcall_id": "42"},
                        endpoints=server.endpoints(),
                        base_dir=Path(tmp),
                        config={"capture": {"rollcall_full_capture": False}},
                    )

                self.assertEqual(summary["status"], "disabled")
                self.assertEqual(list(Path(tmp).glob("**/*.json")), [])


class RollcallExchangeCaptureTest(unittest.TestCase):
    def setUp(self) -> None:
        rollcall_capture._EXCHANGE_COUNTS.clear()

    def test_append_exchange_writes_full_unredacted_jsonl(self) -> None:
        with tempfile.TemporaryDirectory() as tmp:
            path = append_rollcall_exchange(
                Path(tmp),
                rollcall_id="382506",
                rollcall_type="radar",
                label="probe-1",
                method="PUT",
                url="https://ilearn.thu.edu.tw/api/rollcall/382506/answer?api_version=1.76",
                request_body={"latitude": 24.17980301, "longitude": 120.61594101, "deviceId": "dev"},
                status=400,
                response_headers={"Content-Type": "application/json"},
                response_text='{"error_code":"radar_out_of_rollcall_scope","distance":1085.69}',
            )
            self.assertTrue(path)
            lines = Path(path).read_text(encoding="utf-8").splitlines()
            self.assertEqual(len(lines), 1)
            record = json.loads(lines[0])
            self.assertEqual(record["rollcall_type"], "radar")
            self.assertEqual(record["label"], "probe-1")
            self.assertEqual(record["response"]["json"]["distance"], 1085.69)
            # Request coordinates recorded verbatim (unredacted).
            self.assertEqual(record["request"]["body"]["latitude"], 24.17980301)

    def test_append_exchange_respects_cap(self) -> None:
        with tempfile.TemporaryDirectory() as tmp:
            path = ""
            for index in range(3):
                path = append_rollcall_exchange(
                    Path(tmp),
                    rollcall_id="r1",
                    rollcall_type="number",
                    label="{:04d}".format(index),
                    method="PUT",
                    url="u",
                    request_body={"numberCode": "{:04d}".format(index)},
                    status=400,
                    response_text="{}",
                    config={"capture": {"max_exchanges_per_rollcall": 2}},
                ) or path
            lines = Path(path).read_text(encoding="utf-8").splitlines()
            self.assertEqual(len(lines), 2)

    def test_append_exchange_disabled_writes_nothing(self) -> None:
        with tempfile.TemporaryDirectory() as tmp:
            result = append_rollcall_exchange(
                Path(tmp),
                rollcall_id="r2",
                rollcall_type="radar",
                response_text="{}",
                config={"capture": {"rollcall_full_capture": False}},
            )
            self.assertIsNone(result)
            self.assertEqual(list(Path(tmp).glob("**/*.jsonl")), [])


if __name__ == "__main__":
    unittest.main()

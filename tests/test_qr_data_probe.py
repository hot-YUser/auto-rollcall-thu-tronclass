import json
import re
import tempfile
import unittest
from pathlib import Path
from unittest.mock import AsyncMock, MagicMock, patch

import aiohttp

from troTHU import tron
import troTHU.rollcall_capture as rollcall_capture
import troTHU.rollcall_runtime as rollcall_runtime
from troTHU.qr_data_probe import (
    build_qr_data_probe_cases,
    derive_qr_timestamp_from_server_time,
    extract_rollcall_time_value,
    run_qr_data_probe,
)
from tests.fake_tron_server import FakeTronServer


class QrDataProbeUnitTest(unittest.TestCase):
    def test_build_cases_omits_data_then_ts_plus_random_hex(self) -> None:
        cases = build_qr_data_probe_cases(1700000000, 3, "dev-1")
        self.assertEqual(len(cases), 4)

        first = cases[0]
        self.assertEqual(first["label"], "omit_data")
        self.assertNotIn("data", first["body"])
        self.assertEqual(first["body"], {"deviceId": "dev-1"})

        for case in cases[1:]:
            data = case["body"]["data"]
            self.assertTrue(data.startswith("1700000000"))
            self.assertEqual(len(data), 42)  # 10-digit ts + 32 hex
            self.assertTrue(re.fullmatch(r"[0-9a-f]{32}", data[10:]))
            self.assertEqual(case["body"]["deviceId"], "dev-1")

    def test_build_cases_random_hash_differs(self) -> None:
        cases = build_qr_data_probe_cases(1700000000, 2, "d")
        self.assertNotEqual(cases[1]["body"]["data"], cases[2]["body"]["data"])

    def test_derives_qr_timestamp_from_rollcall_anchor_and_server_date(self) -> None:
        timestamp = derive_qr_timestamp_from_server_time(
            "2026-05-25T03:59:43Z",
            "Mon, 25 May 2026 04:00:02 GMT",
        )
        self.assertEqual(timestamp, 1779681598)

    def test_extract_rollcall_time_prefers_server_rollcall_time(self) -> None:
        field, value = extract_rollcall_time_value(
            {"rollcall_time": "2026-05-25T03:59:43Z", "created_at": "2026-05-25T04:00:00Z"}
        )
        self.assertEqual(field, "rollcall_time")
        self.assertEqual(value, "2026-05-25T03:59:43Z")


class QrDataProbeIntegrationTest(unittest.IsolatedAsyncioTestCase):
    def setUp(self) -> None:
        rollcall_capture._EXCHANGE_COUNTS.clear()

    async def test_probe_sends_all_cases_and_records_exchanges(self) -> None:
        async with FakeTronServer() as server:
            with tempfile.TemporaryDirectory() as tmp:
                async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                    await server.login_session(session)
                    summary = await run_qr_data_probe(
                        session,
                        "382644",
                        endpoints=server.endpoints(),
                        base_dir=Path(tmp),
                        timestamp=1700000000,
                        samples=5,
                    )

                self.assertTrue(summary["ok"])
                self.assertEqual(summary["timestamp"], 1700000000)
                self.assertEqual(len(summary["results"]), 6)  # omit_data + 5
                self.assertTrue(all(item["status"] == 200 for item in summary["results"]))
                self.assertTrue(summary["any_2xx"])  # fake server accepts any body

                exchanges = Path(tmp) / "log" / "rollcall_capture" / "exchanges_382644.jsonl"
                lines = exchanges.read_text(encoding="utf-8").splitlines()
                self.assertEqual(len(lines), 6)
                first = json.loads(lines[0])
                self.assertEqual(first["label"], "data_probe:omit_data")
                self.assertNotIn("data", first["request"]["body"])

    async def test_probe_derives_timestamp_from_server_rollcall_time_and_date(self) -> None:
        async with FakeTronServer() as server:
            server.queue_response(
                "radar_lite",
                json_data={"id": 382644, "use_beacon": False},
                headers={"Date": "Mon, 25 May 2026 04:00:02 GMT"},
            )
            with tempfile.TemporaryDirectory() as tmp:
                async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                    await server.login_session(session)
                    summary = await run_qr_data_probe(
                        session,
                        "382644",
                        endpoints=server.endpoints(),
                        base_dir=Path(tmp),
                        rollcall={"rollcall_id": 382644, "rollcall_time": "2026-05-25T03:59:43Z"},
                        require_server_timestamp=True,
                        samples=2,
                    )

                self.assertTrue(summary["ok"])
                self.assertEqual(summary["timestamp"], 1779681598)
                self.assertEqual(summary["timestamp_source"], "server_rollcall_time_plus_server_date")
                self.assertEqual(summary["timestamp_field"], "rollcall_time")
                for item in summary["results"][1:]:
                    self.assertTrue(item["request_body"]["data"].startswith("1779681598"))


class QrDataProbeAutorunTest(unittest.IsolatedAsyncioTestCase):
    def setUp(self) -> None:
        rollcall_runtime._QR_DATA_PROBED_ROLLCALLS.clear()

    async def test_autorun_returns_true_on_hit_and_dedups_per_rollcall(self) -> None:
        probe = AsyncMock(return_value={"ok": True, "any_2xx": True, "timestamp": 1, "results": []})
        with (
            patch.object(tron, "run_qr_data_probe", probe),
            patch.object(tron, "qr_data_probe_autorun_enabled", return_value=True),
            patch.object(tron, "log", return_value=True),
            patch.object(tron, "log_print"),
        ):
            rollcall = {"rollcall_id": "382644", "rollcall_time": "2026-05-25T03:59:43Z"}
            first = await tron.run_qr_data_probe_for_rollcall(object(), MagicMock(), rollcall, "unsupported_qrcode", 1)
            second = await tron.run_qr_data_probe_for_rollcall(object(), MagicMock(), rollcall, "unsupported_qrcode", 2)
        self.assertTrue(first)
        self.assertFalse(second)
        probe.assert_awaited_once()
        self.assertEqual(probe.await_args.kwargs["rollcall"], rollcall)
        self.assertTrue(probe.await_args.kwargs["require_server_timestamp"])

    async def test_autorun_disabled_skips_probe(self) -> None:
        probe = AsyncMock(return_value={"any_2xx": True})
        with (
            patch.object(tron, "run_qr_data_probe", probe),
            patch.object(tron, "qr_data_probe_autorun_enabled", return_value=False),
            patch.object(tron, "log", return_value=True),
        ):
            result = await tron.run_qr_data_probe_for_rollcall(object(), MagicMock(), {"rollcall_id": "9"}, "unsupported_qrcode", 1)
        self.assertFalse(result)
        probe.assert_not_awaited()


if __name__ == "__main__":
    unittest.main()

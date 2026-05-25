import asyncio
import copy
import json
import unittest
from types import SimpleNamespace
from unittest.mock import patch

import aiohttp

from troTHU import tron
from troTHU.research_sandbox import capture_rollcall_probe, capture_student_rollcalls_probe
from tests.fake_tron_server import FakeTronServer


# Realistic QR `data` token shape observed in real check-ins: a 10-digit unix
# timestamp followed by a 32-char MD5. The probe must reveal that a `data` field
# EXISTS, but must never record this value.
QR_DATA_TOKEN = "1776047549bca3f13fa87900ab6dab90f500aa1ffe"


def risky_research_config():
    return {
        "research": {
            "enabled": True,
            "allow_api_exploration": True,
            "allow_risky_probe": True,
        }
    }


def _cli_probe_config(server):
    return tron.normalize_config(
        {
            "account": {"user": "user1", "passwd": "pass1"},
            "accounts": {
                "current": "default",
                "profiles": {"default": {"user": "user1", "passwd": "pass1", "label": ""}},
            },
            "provider": {
                "current": "fju",
                "available": {
                    "fju": {
                        "base_url": server.base_url,
                        "login_url": server.login_url,
                        "rollcalls_url": server.rollcalls_url,
                        "current_semester_url": server.current_semester_url,
                        "courses_url": server.courses_url,
                    }
                },
            },
            "research": {
                "enabled": True,
                "allow_api_exploration": True,
                "allow_risky_probe": True,
            },
        }
    )


class ResearchProbeTest(unittest.IsolatedAsyncioTestCase):
    async def test_student_rollcalls_probe_records_shape_without_number_code_value(self) -> None:
        async with FakeTronServer(correct_number_code="9876") as server:
            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                await server.login_session(session)
                result = await capture_student_rollcalls_probe(
                    session,
                    "42",
                    endpoints=server.endpoints(),
                    config=risky_research_config(),
                )

        encoded = json.dumps(result, ensure_ascii=False)
        self.assertEqual(result["status"], "ok")
        self.assertTrue(result["probe_only"])
        self.assertIn("number_code", encoded)
        self.assertNotIn("9876", encoded)

    async def test_lite_probe_flags_data_field_without_recording_value(self) -> None:
        async with FakeTronServer() as server:
            server.queue_response(
                "radar_lite",
                json_data={"id": "42", "is_qrcode": True, "data": QR_DATA_TOKEN},
            )
            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                await server.login_session(session)
                result = await capture_rollcall_probe(
                    session,
                    "lite",
                    "42",
                    endpoints=server.endpoints(),
                    config=risky_research_config(),
                )

        encoded = json.dumps(result, ensure_ascii=False)
        self.assertEqual(result["status"], "ok")
        self.assertEqual(result["target"], "lite")
        self.assertIn("data", result["present_field_names"])
        self.assertIn("data", result["content_summary"]["field_names"])
        self.assertNotIn(QR_DATA_TOKEN, encoded)

    async def test_ongoing_rollcalls_probe_lists_item_fields_without_value(self) -> None:
        async with FakeTronServer() as server:
            server.rollcalls = [
                {"id": 42, "course_id": 166800, "is_qrcode": True, "data": QR_DATA_TOKEN}
            ]
            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                await server.login_session(session)
                result = await capture_rollcall_probe(
                    session,
                    "ongoing_rollcalls",
                    endpoints=server.endpoints(),
                    config=risky_research_config(),
                )

        encoded = json.dumps(result, ensure_ascii=False)
        self.assertEqual(result["status"], "ok")
        self.assertEqual(result["target"], "ongoing_rollcalls")
        self.assertIn("data", result["present_field_names"])
        self.assertNotIn(QR_DATA_TOKEN, encoded)

    async def test_lite_probe_requires_rollcall_id(self) -> None:
        async with FakeTronServer() as server:
            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                await server.login_session(session)
                with self.assertRaises(tron.ResearchCaptureError) as caught:
                    await capture_rollcall_probe(
                        session,
                        "lite",
                        "",
                        endpoints=server.endpoints(),
                        config=risky_research_config(),
                    )

        self.assertEqual(caught.exception.status, "probe_target_incomplete")

    async def test_unknown_probe_target_is_rejected(self) -> None:
        async with FakeTronServer() as server:
            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                await server.login_session(session)
                with self.assertRaises(tron.ResearchCaptureError) as caught:
                    await capture_rollcall_probe(
                        session,
                        "answers",
                        "42",
                        endpoints=server.endpoints(),
                        config=risky_research_config(),
                    )

        self.assertEqual(caught.exception.status, "probe_target_not_allowed")

    async def test_student_rollcalls_probe_requires_explicit_risky_gate(self) -> None:
        async with FakeTronServer() as server:
            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                await server.login_session(session)
                with self.assertRaises(tron.ResearchGateError) as caught:
                    await capture_student_rollcalls_probe(
                        session,
                        "42",
                        endpoints=server.endpoints(),
                        config={"research": {"enabled": True, "allow_api_exploration": True}},
                    )

        self.assertEqual(caught.exception.status, "risky_probe_disabled")


class ResearchProbeCliTest(unittest.TestCase):
    def setUp(self) -> None:
        self.original_config = copy.deepcopy(tron.CONFIG)

    def tearDown(self) -> None:
        tron.CONFIG.clear()
        tron.CONFIG.update(copy.deepcopy(self.original_config))

    def test_research_probe_cli_with_fake_server_is_sanitized(self) -> None:
        async def run_case():
            async with FakeTronServer(correct_number_code="2468") as server:
                tron.CONFIG.clear()
                tron.CONFIG.update(_cli_probe_config(server))
                outputs = []
                with patch("builtins.print", side_effect=outputs.append):
                    result = await tron.research_probe_command(
                        SimpleNamespace(
                            probe_target="student_rollcalls",
                            rollcall_id="42",
                            output="",
                            json=True,
                        )
                    )
                return result, outputs[0]

        result, output = asyncio.run(run_case())
        payload = json.loads(output)

        self.assertEqual(result, 0)
        self.assertEqual(payload["target"], "student_rollcalls")
        self.assertEqual(payload["records"][0]["status"], "ok")
        self.assertNotIn("2468", output)
        self.assertNotIn("pass1", output)

    def test_research_probe_cli_ongoing_rollcalls_without_rollcall_id(self) -> None:
        async def run_case():
            async with FakeTronServer() as server:
                server.rollcalls = [
                    {"id": 42, "course_id": 166800, "is_qrcode": True, "data": QR_DATA_TOKEN}
                ]
                tron.CONFIG.clear()
                tron.CONFIG.update(_cli_probe_config(server))
                outputs = []
                with patch("builtins.print", side_effect=outputs.append):
                    result = await tron.research_probe_command(
                        SimpleNamespace(
                            probe_target="ongoing_rollcalls",
                            rollcall_id="",
                            output="",
                            json=True,
                        )
                    )
                return result, outputs[0]

        result, output = asyncio.run(run_case())
        payload = json.loads(output)

        self.assertEqual(result, 0)
        self.assertEqual(payload["target"], "ongoing_rollcalls")
        self.assertEqual(payload["records"][0]["status"], "ok")
        self.assertIn("data", payload["records"][0]["present_field_names"])
        self.assertNotIn(QR_DATA_TOKEN, output)


if __name__ == "__main__":
    unittest.main()

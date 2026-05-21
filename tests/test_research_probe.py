import asyncio
import copy
import json
import unittest
from types import SimpleNamespace
from unittest.mock import patch

import aiohttp

from troTHU import tron
from troTHU.research_sandbox import capture_student_rollcalls_probe
from tests.fake_tron_server import FakeTronServer


def risky_research_config():
    return {
        "research": {
            "enabled": True,
            "allow_api_exploration": True,
            "allow_risky_probe": True,
        }
    }


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
                tron.CONFIG.update(
                    tron.normalize_config(
                        {
                            "account": {"user": "user1", "passwd": "pass1"},
                            "accounts": {
                                "current": "default",
                                "profiles": {
                                    "default": {"user": "user1", "passwd": "pass1", "label": ""}
                                },
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
                )
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


if __name__ == "__main__":
    unittest.main()

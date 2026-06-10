import asyncio
import copy
import json
import shutil
import sys
import unittest
import uuid
from pathlib import Path
from types import SimpleNamespace
from unittest.mock import patch

import aiohttp

from troTHU import tron
from troTHU.research_sandbox import (
    ResearchCaptureError,
    ResearchGateError,
    append_research_capture,
    build_browser_capture_metadata,
    capture_research_api_target,
    ensure_research_allowed,
    sanitize_research_value,
    validate_research_target,
)
from tests.fake_tron_server import FakeTronServer


TEST_WORKSPACE_DIR = Path(__file__).resolve().parents[1]


def research_config(**overrides):
    config = {"research": {"enabled": True, "allow_api_exploration": True, "allow_browser_capture": True}}
    config["research"].update(overrides)
    return config


class ResearchSandboxUnitTest(unittest.TestCase):
    def test_gate_requires_explicit_capabilities(self) -> None:
        with self.assertRaises(ResearchGateError) as disabled:
            ensure_research_allowed({"research": {"enabled": False}}, "api")
        self.assertEqual(disabled.exception.status, "research_disabled")

        with self.assertRaises(ResearchGateError) as api_disabled:
            ensure_research_allowed({"research": {"enabled": True}}, "api")
        self.assertEqual(api_disabled.exception.status, "api_exploration_disabled")

        with self.assertRaises(ResearchGateError) as browser_disabled:
            ensure_research_allowed({"research": {"enabled": True}}, "browser")
        self.assertEqual(browser_disabled.exception.status, "browser_capture_disabled")

        self.assertTrue(ensure_research_allowed(research_config(), "api")["allow_api_exploration"])

    def test_target_allowlist_and_denylist(self) -> None:
        self.assertEqual(validate_research_target("semester"), "current_semester")
        self.assertEqual(validate_research_target("all"), "all")

        for risky in ("student_rollcalls", "answer_number_rollcall", "teacher", "admin"):
            with self.assertRaises(ResearchCaptureError):
                validate_research_target(risky)
        with self.assertRaises(ResearchCaptureError):
            validate_research_target("not-a-target")

    def test_research_sanitizer_redacts_nested_sensitive_values(self) -> None:
        value = {
            "headers": {"Authorization": "Bearer secret", "cookie": "session=abc"},
            "raw_response": {"data": "qr-data", "safe": "value"},
            "items": [{"password": "pw", "name": "course"}],
        }

        sanitized = sanitize_research_value(value)
        rendered = json.dumps(sanitized, ensure_ascii=False)

        self.assertNotIn("Bearer secret", rendered)
        self.assertNotIn("session=abc", rendered)
        self.assertNotIn("qr-data", rendered)
        self.assertNotIn("pw", rendered)
        self.assertIn("course", rendered)

    def test_browser_metadata_does_not_import_playwright(self) -> None:
        before = set(sys.modules)
        metadata = build_browser_capture_metadata("home", available=False)
        after = set(sys.modules)

        self.assertEqual(metadata["status"], "unavailable")
        self.assertFalse(metadata["playwright_available"])
        self.assertNotIn("playwright.async_api", after - before)

    def test_append_research_capture_writes_sanitized_jsonl(self) -> None:
        temp_dir = TEST_WORKSPACE_DIR / ".tmp-tests" / uuid.uuid4().hex
        temp_dir.mkdir(parents=True)
        try:
            path = append_research_capture(
                temp_dir / "research.jsonl",
                {"token": "secret", "records": [{"content_summary": {"field_names": ["ok"]}}]},
            )
            text = path.read_text(encoding="utf-8")
        finally:
            shutil.rmtree(temp_dir, ignore_errors=True)

        self.assertNotIn("secret", text)
        self.assertIn("[redacted]", text)
        self.assertIn("field_names", text)


class ResearchSandboxCaptureTest(unittest.IsolatedAsyncioTestCase):
    async def test_capture_safe_targets_against_fake_server(self) -> None:
        async with FakeTronServer() as server:
            server.rollcalls = [{"rollcall_id": 7, "type": "number"}]
            server.courses = [{"id": 1, "name": "Synthetic Course"}]
            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                await server.login_session(session)
                result = await capture_research_api_target(
                    session,
                    "all",
                    endpoints=server.endpoints(),
                    config=research_config(),
                )

        rendered = json.dumps(result, ensure_ascii=False)
        self.assertEqual(result["status"], "ok")
        self.assertEqual({record["target"] for record in result["records"]}, {"home", "rollcalls", "current_semester", "courses"})
        self.assertNotIn("local-test-session", rendered)
        self.assertNotIn("0001", rendered)
        self.assertNotIn("raw_response", rendered)

    async def test_capture_classifies_unauthorized_rate_limit_server_and_invalid_json(self) -> None:
        async with FakeTronServer() as server:
            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                unauthorized = await capture_research_api_target(
                    session,
                    "rollcalls",
                    endpoints=server.endpoints(),
                    config=research_config(),
                )
                await server.login_session(session)
                server.queue_response("rollcalls", status=429, text="slow down token secret")
                rate_limited = await capture_research_api_target(
                    session,
                    "rollcalls",
                    endpoints=server.endpoints(),
                    config=research_config(),
                )
                server.queue_response("rollcalls", status=500, text="server password leaked")
                server_error = await capture_research_api_target(
                    session,
                    "rollcalls",
                    endpoints=server.endpoints(),
                    config=research_config(),
                )
                server.queue_response("courses", status=200, text="not json cookie secret")
                invalid_json = await capture_research_api_target(
                    session,
                    "courses",
                    endpoints=server.endpoints(),
                    config=research_config(),
                )

        self.assertEqual(unauthorized["records"][0]["status"], "unauthorized")
        self.assertEqual(rate_limited["records"][0]["status"], "rate_limited")
        self.assertEqual(server_error["records"][0]["status"], "server_error")
        self.assertEqual(invalid_json["records"][0]["status"], "invalid_json")
        rendered = json.dumps([rate_limited, server_error, invalid_json], ensure_ascii=False)
        self.assertNotIn("slow down", rendered)
        self.assertNotIn("password leaked", rendered)
        self.assertNotIn("cookie secret", rendered)


class ResearchCliTest(unittest.TestCase):
    def setUp(self) -> None:
        self.original_config = copy.deepcopy(tron.CONFIG)

    def tearDown(self) -> None:
        tron.CONFIG.clear()
        tron.CONFIG.update(copy.deepcopy(self.original_config))

    def test_research_status_json_dispatches_without_network(self) -> None:
        outputs = []
        with patch.object(tron, "bootstrap_config"), patch("builtins.print", side_effect=outputs.append):
            result = tron.main(["research", "status", "--json"])

        self.assertEqual(result, 0)
        payload = json.loads(outputs[0])
        self.assertIn("research", payload)
        self.assertIn("api_targets", payload)

    def test_research_api_is_blocked_when_gate_is_off(self) -> None:
        outputs = []
        tron.CONFIG.clear()
        tron.CONFIG.update(tron.normalize_config({"research": {"enabled": False}}))
        with patch.object(tron, "bootstrap_config"), patch("builtins.print", side_effect=outputs.append):
            result = tron.main(["research", "api", "--target", "all", "--json"])

        self.assertEqual(result, 1)
        payload = json.loads(outputs[0])
        self.assertEqual(payload["status"], "research_disabled")

    def test_research_browser_check_json_works_without_playwright(self) -> None:
        outputs = []
        with (
            patch.object(tron, "bootstrap_config"),
            patch("troTHU.research_sandbox.importlib.util.find_spec", return_value=None),
            patch("builtins.print", side_effect=outputs.append),
        ):
            result = tron.main(["research", "browser-check", "--json"])

        self.assertEqual(result, 0)
        payload = json.loads(outputs[0])
        self.assertFalse(payload["playwright_available"])
        self.assertEqual(payload["status"], "unavailable")

    def test_research_browser_capture_is_blocked_unless_gate_is_enabled(self) -> None:
        outputs = []
        tron.CONFIG.clear()
        tron.CONFIG.update(tron.normalize_config({"research": {"enabled": True}}))
        with patch.object(tron, "bootstrap_config"), patch("builtins.print", side_effect=outputs.append):
            result = tron.main(["research", "browser-capture", "--json"])

        self.assertEqual(result, 1)
        payload = json.loads(outputs[0])
        self.assertEqual(payload["status"], "browser_capture_disabled")

    def test_research_api_cli_with_fake_server_outputs_safe_records(self) -> None:
        async def run_case():
            async with FakeTronServer() as server:
                server.rollcalls = [{"rollcall_id": 9, "type": "number"}]
                server.courses = [{"id": 2, "name": "Course"}]
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
                            "research": {"enabled": True, "allow_api_exploration": True},
                        }
                    )
                )
                outputs = []
                with patch("builtins.print", side_effect=outputs.append):
                    result = await tron.research_api_command(
                        SimpleNamespace(target="all", output="", json=True)
                    )
                return result, outputs[0]

        result, output = asyncio.run(run_case())
        payload = json.loads(output)
        rendered = json.dumps(payload, ensure_ascii=False)
        self.assertEqual(result, 0)
        self.assertEqual(payload["status"], "ok")
        self.assertEqual(payload["provider"], "fju")
        self.assertEqual(len(payload["records"]), 4)
        self.assertNotIn("pass1", rendered)
        self.assertNotIn("local-test-session", rendered)
        self.assertNotIn("0001", rendered)

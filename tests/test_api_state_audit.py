import asyncio
import json
import tempfile
import unittest
from pathlib import Path
from unittest import mock

import aiohttp

import troTHU.rollcall_runtime as rollcall_runtime
from tests.fake_tron_server import FakeTronServer
from troTHU.api_state_audit import (
    ApiStateAuditOptions,
    build_audit_context,
    build_rollcall_state_signature,
    load_api_operation_rows,
    normalize_audit_method,
    resolve_operation_url,
    rollcall_state_has_activity,
    run_api_state_audit,
)


def _audit_config(**overrides):
    options = {
        "enabled": True,
        "request_all_methods": True,
        "asset_follow": "all",
        "timeout_seconds": 5,
        "max_asset_depth": 2,
        "max_asset_count": 50,
    }
    options.update(overrides)
    return {"capture": {"api_state_audit": options}}


def _row(method, endpoint, host="same-origin", label="test"):
    return {"method": method, "endpoint": endpoint, "host": host, "label": label}


class ApiStateAuditUnitTest(unittest.TestCase):
    def test_api_list_parser_and_method_normalization(self) -> None:
        with tempfile.TemporaryDirectory() as tmp:
            source = Path(tmp) / "api-operation-list.json"
            source.write_text(
                json.dumps(
                    {
                        "lists": {
                            "operationRows": [
                                {"method": "OBSERVED_GET", "endpoint": "/a"},
                                {"method": "UNKNOWN", "endpoint": "/b"},
                                "ignored",
                            ]
                        }
                    },
                    ensure_ascii=False,
                ),
                encoding="utf-8",
            )

            rows = load_api_operation_rows(Path(tmp), _audit_config(api_list_path=source.name))

        self.assertEqual(len(rows), 2)
        self.assertEqual(normalize_audit_method("OBSERVED_GET"), ("OBSERVED_GET", "GET"))
        self.assertEqual(normalize_audit_method("UNKNOWN"), ("UNKNOWN", "GET"))
        self.assertEqual(normalize_audit_method("SOCKET.IO"), ("SOCKET.IO", "SOCKET.IO"))

    def test_placeholder_resolution_and_external_hosts(self) -> None:
        options = ApiStateAuditOptions(
            enabled=True,
            identity_base_url="",
            wechat_appid="wx-test",
        )
        context = build_audit_context(
            base_url="https://ilearn.thu.edu.tw",
            selected_rollcall={"rollcall_id": "42", "course_id": "166800"},
            user_id="238730",
            options=options,
        )

        same_origin = resolve_operation_url(
            _row(
                "OBSERVED_GET",
                "/api/course/{expr}/student/{expr}/rollcalls?page=&page_size=&conditions={expr}",
            ),
            index=1,
            base_url="https://ilearn.thu.edu.tw",
            context=context,
            options=options,
        )
        self.assertEqual(same_origin.method, "GET")
        self.assertEqual(
            same_origin.url,
            "https://ilearn.thu.edu.tw/api/course/166800/student/238730/rollcalls?page=1&page_size=20&conditions=%7B%7D",
        )
        self.assertEqual([item["source"] for item in same_origin.replacements[:3]], ["course_id", "student_id", "conditions"])

        external = resolve_operation_url(
            _row("GET", "/connect/qrconnect?appid={expr}", host="open.weixin.qq.com"),
            index=2,
            base_url="https://ilearn.thu.edu.tw",
            context=context,
            options=options,
        )
        self.assertEqual(external.url, "https://open.weixin.qq.com/connect/qrconnect?appid=wx-test")

        identity = resolve_operation_url(
            _row("POST", "/realms/{expr}/broker/tronclass-qrcode/endpoint", host="identity dynamic endpoint"),
            index=3,
            base_url="https://ilearn.thu.edu.tw",
            context=context,
            options=options,
        )
        self.assertEqual(identity.unresolved_reason, "unresolved_host")

    def test_rollcall_state_signature_detects_status_transitions(self) -> None:
        idle = build_rollcall_state_signature("not_call", rollcalls=[])
        detected = build_rollcall_state_signature(
            "is_number",
            selected_rollcall={"rollcall_id": "42", "course_id": "166800", "is_number": True},
            selected_rollcall_type="number",
            rollcalls=[
                {
                    "rollcall_id": "42",
                    "course_id": "166800",
                    "is_number": True,
                    "status": "on_call",
                    "student_rollcalls": [{"student_id": "238730", "student_rollcall_status": "not_called"}],
                }
            ],
        )
        fine = build_rollcall_state_signature(
            "on_call_fine",
            selected_rollcall={"rollcall_id": "42", "course_id": "166800", "status": "on_call_fine"},
            selected_rollcall_type="number",
            rollcalls=[
                {
                    "rollcall_id": "42",
                    "course_id": "166800",
                    "status": "on_call",
                    "student_rollcalls": [{"student_id": "238730", "student_rollcall_status": "on_call_fine"}],
                }
            ],
        )

        self.assertFalse(rollcall_state_has_activity(idle))
        self.assertTrue(rollcall_state_has_activity(detected))
        self.assertNotEqual(idle, detected)
        self.assertNotEqual(detected, fine)


class ApiStateAuditIntegrationTest(unittest.IsolatedAsyncioTestCase):
    async def test_audit_records_get_post_put_delete(self) -> None:
        rows = [
            _row("GET", "/api/course/{expr}/rollcalls", label="get-rollcalls"),
            _row("POST", "/api/course/{expr}/rollcall", label="create-rollcall"),
            _row("PUT", "/api/rollcall/{expr}/activate", label="activate-rollcall"),
            _row("DELETE", "/api/rollcall/{expr}", label="delete-rollcall"),
        ]
        async with FakeTronServer() as server:
            with tempfile.TemporaryDirectory() as tmp:
                async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                    await server.login_session(session)
                    summary = await run_api_state_audit(
                        session,
                        endpoints=server.endpoints(),
                        base_dir=Path(tmp),
                        config=_audit_config(asset_follow="off"),
                        profile="student-test",
                        provider="fake",
                        selected_status="is_number",
                        selected_rollcall={"rollcall_id": "42", "course_id": "166800", "is_number": True},
                        selected_rollcall_type="number",
                        rollcalls=[{"rollcall_id": "42", "course_id": "166800", "is_number": True}],
                        source_payload={"rollcalls": [{"rollcall_id": "42", "course_id": "166800"}]},
                        user_id="238730",
                        operation_rows=rows,
                    )

                self.assertEqual(summary["status"], "ok")
                self.assertEqual(summary["operation_count"], 4)
                self.assertEqual(summary["operation_ok_count"], 4)
                self.assertEqual(server.teacher_rollcall_deletes, ["42"])

                operations_text = "\n".join(
                    path.read_text(encoding="utf-8")
                    for path in sorted(Path(summary["operations_dir"]).glob("*.json"))
                )
                self.assertIn('"method": "GET"', operations_text)
                self.assertIn('"method": "POST"', operations_text)
                self.assertIn('"method": "PUT"', operations_text)
                self.assertIn('"method": "DELETE"', operations_text)
                self.assertIn('"json": {}', operations_text)
                self.assertIn('"api_source_file"', Path(summary["summary_path"]).read_text(encoding="utf-8"))

    async def test_audit_keeps_raw_headers_and_body_unredacted(self) -> None:
        secret = "plain-sensitive-token-keep-me"
        header_secret = "plain-header-secret"
        rows = [_row("GET", "/api/course/{expr}/rollcalls", label="raw")]
        async with FakeTronServer() as server:
            server.queue_response(
                "course_rollcalls",
                json_data={"token": secret, "nested": {"authorization": "Bearer value"}},
                headers={"X-Secret": header_secret},
            )
            with tempfile.TemporaryDirectory() as tmp:
                async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                    await server.login_session(session)
                    summary = await run_api_state_audit(
                        session,
                        endpoints=server.endpoints(),
                        base_dir=Path(tmp),
                        config=_audit_config(asset_follow="off"),
                        profile="student-test",
                        provider="fake",
                        selected_status="is_number",
                        selected_rollcall={"rollcall_id": "42", "course_id": "166800"},
                        rollcalls=[{"rollcall_id": "42", "course_id": "166800"}],
                        operation_rows=rows,
                    )

                operations_text = "\n".join(
                    path.read_text(encoding="utf-8")
                    for path in sorted(Path(summary["operations_dir"]).glob("*.json"))
                )
                events_text = Path(summary["events_path"]).read_text(encoding="utf-8")
                self.assertIn(secret, operations_text)
                self.assertIn(header_secret, operations_text)
                self.assertIn(secret, events_text)
                self.assertNotIn("[redacted]", operations_text.lower())

    async def test_audit_resolves_identity_host_from_runtime_login_url(self) -> None:
        rows = [
            _row(
                "POST",
                "/realms/{expr}/broker/tronclass-qrcode/endpoint?{expr}",
                host="identity auth-server-url/realm dynamic",
                label="identity-broker",
            )
        ]
        async with FakeTronServer() as server:
            endpoints = type(
                "RuntimeEndpoints",
                (),
                {
                    "base_url": server.base_url,
                    "login_url": "{}/auth/realms/thu/protocol/cas/login".format(server.base_url),
                },
            )()
            with tempfile.TemporaryDirectory() as tmp:
                async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                    await server.login_session(session)
                    summary = await run_api_state_audit(
                        session,
                        endpoints=endpoints,
                        base_dir=Path(tmp),
                        config=_audit_config(asset_follow="off"),
                        profile="student-test",
                        provider="fake",
                        selected_status="is_number",
                        selected_rollcall={"rollcall_id": "42", "course_id": "166800"},
                        rollcalls=[{"rollcall_id": "42", "course_id": "166800"}],
                        operation_rows=rows,
                    )

                self.assertEqual(summary["operation_ok_count"], 1)
                self.assertEqual(server.qr_auth_requests[0]["kind"], "identity-broker")
                self.assertEqual(server.qr_auth_requests[0]["realm"], "thu")
                operation_text = next(Path(summary["operations_dir"]).glob("*.json")).read_text(encoding="utf-8")
                self.assertIn("/auth/realms/thu/broker/tronclass-qrcode/endpoint", operation_text)
                self.assertNotIn("unresolved_host", operation_text)

    async def test_audit_recursively_fetches_html_css_js_assets_once(self) -> None:
        rows = [_row("GET", "/audit/page", label="audit-page")]
        async with FakeTronServer() as server:
            with tempfile.TemporaryDirectory() as tmp:
                async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                    await server.login_session(session)
                    summary = await run_api_state_audit(
                        session,
                        endpoints=server.endpoints(),
                        base_dir=Path(tmp),
                        config=_audit_config(max_asset_depth=2, max_asset_count=10),
                        profile="student-test",
                        provider="fake",
                        selected_status="is_number",
                        selected_rollcall={"rollcall_id": "42", "course_id": "166800"},
                        rollcalls=[{"rollcall_id": "42", "course_id": "166800"}],
                        operation_rows=rows,
                    )

                self.assertEqual(summary["status"], "ok")
                self.assertEqual(summary["asset_count"], 5)
                asset_files = sorted(Path(summary["assets_dir"]).glob("*"))
                combined = b"".join(path.read_bytes() for path in asset_files)
                self.assertIn(b"audit-js-secret", combined)
                self.assertIn(b"audit-nested-secret", combined)
                self.assertIn(b"audit-image-secret", combined)


class ApiStateAuditRuntimeSchedulingTest(unittest.IsolatedAsyncioTestCase):
    async def test_state_change_scheduler_triggers_once_per_signature(self) -> None:
        rollcall_runtime._API_STATE_AUDIT_SIGNATURES.clear()
        rollcall_runtime._API_STATE_AUDIT_TASKS.clear()
        calls = []

        async def fake_task(*args, **_kwargs):
            calls.append(args)
            await asyncio.sleep(0)

        profile = type("Profile", (), {"name": "student-test"})()
        rollcall = {
            "rollcall_id": "42",
            "course_id": "166800",
            "is_number": True,
            "status": "on_call",
            "student_rollcalls": [{"student_id": "238730", "student_rollcall_status": "not_called"}],
        }
        fine_rollcall = {
            "rollcall_id": "42",
            "course_id": "166800",
            "status": "on_call",
            "student_rollcalls": [{"student_id": "238730", "student_rollcall_status": "on_call_fine"}],
        }

        with (
            mock.patch.object(rollcall_runtime, "_run_api_state_audit_task", fake_task),
            mock.patch.object(rollcall_runtime.ctx, "api_state_audit_enabled", return_value=True),
            mock.patch.object(rollcall_runtime.ctx, "get_active_profile", return_value=profile),
            mock.patch.object(rollcall_runtime.ctx, "get_active_provider_key", return_value="fake"),
        ):
            idle = rollcall_runtime.schedule_api_state_audit_on_change(
                None, object(), "not_call", {}, "", [], {}, 1
            )
            first = rollcall_runtime.schedule_api_state_audit_on_change(
                None, object(), "is_number", rollcall, "number", [rollcall], {"rollcalls": [rollcall]}, 2
            )
            duplicate = rollcall_runtime.schedule_api_state_audit_on_change(
                None, object(), "is_number", rollcall, "number", [rollcall], {"rollcalls": [rollcall]}, 3
            )
            fine = rollcall_runtime.schedule_api_state_audit_on_change(
                None, object(), "on_call_fine", fine_rollcall, "number", [fine_rollcall], {"rollcalls": [fine_rollcall]}, 4
            )
            fine_duplicate = rollcall_runtime.schedule_api_state_audit_on_change(
                None, object(), "on_call_fine", fine_rollcall, "number", [fine_rollcall], {"rollcalls": [fine_rollcall]}, 5
            )
            ended = rollcall_runtime.schedule_api_state_audit_on_change(
                None, object(), "not_call", {}, "", [], {}, 6
            )

            await asyncio.sleep(0.05)

        self.assertEqual(idle["reason"], "initial_idle")
        self.assertTrue(first["scheduled"])
        self.assertEqual(duplicate["reason"], "unchanged")
        self.assertTrue(fine["scheduled"])
        self.assertEqual(fine_duplicate["reason"], "unchanged")
        self.assertTrue(ended["scheduled"])
        self.assertEqual(len(calls), 3)


if __name__ == "__main__":
    unittest.main()

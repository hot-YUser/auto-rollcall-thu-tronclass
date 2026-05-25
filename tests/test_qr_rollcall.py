import json
import unittest
from pathlib import Path
from urllib.parse import quote
from unittest.mock import AsyncMock, MagicMock

from troTHU import tron
from troTHU.tron_http import UnauthorizedError, UnexpectedResponseError
from troTHU.qr_rollcall import (
    FALSE_TOKEN,
    NUMBER_PREFIX,
    TRUE_TOKEN,
    answer_qr_rollcall,
    build_qr_answer_request,
    parse_compact_payload,
    parse_qr_payload,
    parse_qr_payload_with_diagnostics,
)


def make_context_manager(response):
    context_manager = MagicMock()
    context_manager.__aenter__ = AsyncMock(return_value=response)
    context_manager.__aexit__ = AsyncMock(return_value=None)
    return context_manager


class QrRollcallParserTest(unittest.TestCase):
    def test_fixture_corpus_parses_expected_shapes_without_payload_leak(self) -> None:
        fixture_path = Path(__file__).resolve().parent / "fixtures" / "qr_payloads.json"
        fixtures = json.loads(fixture_path.read_text(encoding="utf-8"))

        for fixture in fixtures:
            with self.subTest(fixture=fixture["name"]):
                result = parse_qr_payload_with_diagnostics(fixture["raw"])
                result_dict = result.to_dict()
                encoded = json.dumps(result_dict, ensure_ascii=False)
                self.assertNotIn("fixture-json", encoded)
                self.assertNotIn("relative-fixture", encoded)
                self.assertNotIn("query-fixture", encoded)
                self.assertNotIn("query-compact", encoded)
                self.assertNotIn("percent-json", encoded)
                self.assertNotIn("typed-fixture", encoded)

                if fixture["valid"]:
                    self.assertTrue(result.ok)
                    self.assertIsNotNone(result.data)
                    self.assertEqual(result.data.rollcall_id, fixture["rollcall_id"])
                    self.assertEqual(result.data.data, fixture["data"])
                    self.assertEqual(result.diagnostic.source_kind, fixture["source_kind"])
                    self.assertEqual(result.diagnostic.encoding, fixture["encoding"])
                    self.assertEqual(sorted(result.data.extras.keys()), sorted(fixture["extras"]))
                    self.assertEqual(result.diagnostic.payload_length, len(fixture["raw"]))
                    self.assertRegex(result.diagnostic.payload_hash, r"^[a-f0-9]{12}$")
                else:
                    self.assertFalse(result.ok)
                    self.assertIsNone(result.data)
                    self.assertEqual(result.diagnostic.error, fixture["error"])

    def test_parse_compact_payload_decodes_known_fields_and_extras(self) -> None:
        payload = "4~{}16!3~abc{}def{}ghi!8~{}!z~extra".format(
            NUMBER_PREFIX,
            "\x1f",
            "\x1e",
            TRUE_TOKEN,
        )

        result = parse_compact_payload(payload)

        self.assertEqual(result["rollcallId"], 42)
        self.assertEqual(result["data"], "abc~def!ghi")
        self.assertTrue(result["enableGroupRollcall"])
        self.assertEqual(result["z"], "extra")

    def test_parse_qr_url_supports_json_p_payload(self) -> None:
        body = quote(json.dumps({"rollcallId": 77, "data": "qr-data", "extra": "x"}))
        qr = parse_qr_payload(f"https://ilearn.thu.edu.tw/scanner-jumper?_p={body}")

        self.assertEqual(qr.rollcall_id, "77")
        self.assertEqual(qr.data, "qr-data")
        self.assertEqual(qr.extras["extra"], "x")

    def test_parse_query_only_and_percent_encoded_json_payloads(self) -> None:
        body = quote(json.dumps({"rollcallID": 78, "data": "query-data"}))
        query = parse_qr_payload(f"_p={body}")
        percent_json = parse_qr_payload(quote(json.dumps({"rollcall_id": 79, "data": "percent-data"})))

        self.assertEqual(query.rollcall_id, "78")
        self.assertEqual(query.data, "query-data")
        self.assertEqual(percent_json.rollcall_id, "79")
        self.assertEqual(percent_json.data, "percent-data")

    def test_parse_relative_url_with_compact_payload(self) -> None:
        compact = quote("4~{}16!3~relative-data".format(NUMBER_PREFIX))

        qr = parse_qr_payload(f"/scanner-jumper?p={compact}")

        self.assertEqual(qr.rollcall_id, "42")
        self.assertEqual(qr.data, "relative-data")

    def test_parse_pure_compact_payload_preserves_unknown_fields(self) -> None:
        qr = parse_qr_payload("4~{}16!3~payload!x~keep-me".format(NUMBER_PREFIX))

        self.assertEqual(qr.rollcall_id, "42")
        self.assertEqual(qr.data, "payload")
        self.assertEqual(qr.extras["x"], "keep-me")

    def test_parse_result_diagnostic_reports_missing_required_without_data_leak(self) -> None:
        result = parse_qr_payload_with_diagnostics(json.dumps({"rollcallId": 88, "data": "secret-data"}))

        self.assertTrue(result.ok)
        self.assertEqual(result.diagnostic.rollcall_id, "88")
        self.assertEqual(result.diagnostic.field_names, ("data", "rollcallId"))
        self.assertEqual(result.diagnostic.missing_required, ())
        self.assertNotIn("secret-data", json.dumps(result.to_dict(), ensure_ascii=False))

    def test_parse_result_diagnostic_reports_missing_data_without_raw_leak(self) -> None:
        result = parse_qr_payload_with_diagnostics(json.dumps({"rollcallId": 88, "note": "hidden-note"}))
        encoded = json.dumps(result.to_dict(), ensure_ascii=False)

        self.assertTrue(result.ok)
        self.assertEqual(result.diagnostic.rollcall_id, "88")
        self.assertEqual(result.diagnostic.missing_required, ("data",))
        self.assertIn("missing_required", result.diagnostic.warnings)
        self.assertNotIn("hidden-note", encoded)

    def test_parse_failure_diagnostic_uses_error_code_without_raw_leak(self) -> None:
        result = parse_qr_payload_with_diagnostics("not-a-valid-qr-secret")
        encoded = json.dumps(result.to_dict(), ensure_ascii=False)

        self.assertFalse(result.ok)
        self.assertEqual(result.diagnostic.error, "unable_to_parse")
        self.assertEqual(result.diagnostic.source_kind, "unknown")
        self.assertRegex(result.diagnostic.payload_hash, r"^[a-f0-9]{12}$")
        self.assertNotIn("not-a-valid-qr-secret", encoded)

    def test_parse_qr_payload_rejects_empty_payload(self) -> None:
        with self.assertRaises(ValueError):
            parse_qr_payload("")

    def test_build_qr_answer_request_uses_rollcall_id_and_device(self) -> None:
        qr = parse_qr_payload(json.dumps({"rollcallId": 88, "data": "payload"}))

        url, body = build_qr_answer_request(qr, "device-1")

        self.assertTrue(url.endswith("/api/rollcall/88/answer_qr_rollcall"))
        self.assertEqual(body, {"data": "payload", "deviceId": "device-1"})

    def test_boolean_tokens_are_exported_for_fixtures(self) -> None:
        self.assertTrue(TRUE_TOKEN.endswith("1"))
        self.assertTrue(FALSE_TOKEN.endswith("0"))


class QrRollcallAnswerTest(unittest.IsolatedAsyncioTestCase):
    async def test_answer_qr_rollcall_omits_session_id_when_unknown(self) -> None:
        qr = parse_qr_payload(json.dumps({"rollcallId": 99, "data": "payload"}))
        response = MagicMock()
        response.status = 200
        response.text = AsyncMock(return_value='{"ok": true}')
        session = MagicMock()
        session.put.return_value = make_context_manager(response)

        result = await answer_qr_rollcall(session, qr, "device-2", request_ssl="ssl-marker")

        self.assertEqual(result, {"ok": True})
        call_kwargs = session.put.call_args.kwargs
        self.assertEqual(call_kwargs["json"], {"data": "payload", "deviceId": "device-2"})
        self.assertNotIn("x-session-id", call_kwargs["headers"])
        self.assertEqual(call_kwargs["ssl"], "ssl-marker")

    async def test_answer_qr_rollcall_accepts_created_and_no_content_success(self) -> None:
        qr = parse_qr_payload(json.dumps({"rollcallId": 99, "data": "payload"}))
        for status in (201, 204):
            with self.subTest(status=status):
                response = MagicMock()
                response.status = status
                response.text = AsyncMock(return_value="")
                session = MagicMock()
                session.put.return_value = make_context_manager(response)

                result = await answer_qr_rollcall(session, qr, "device-2")

                self.assertEqual(result, {"ok": True})

    async def test_answer_qr_rollcall_classifies_auth_and_sanitizes_server_errors(self) -> None:
        qr = parse_qr_payload(json.dumps({"rollcallId": 99, "data": "payload"}))

        unauthorized = MagicMock()
        unauthorized.status = 401
        unauthorized.text = AsyncMock(return_value="unauthorized")
        session = MagicMock()
        session.put.return_value = make_context_manager(unauthorized)
        with self.assertRaises(UnauthorizedError):
            await answer_qr_rollcall(session, qr, "device-2")

        server_error = MagicMock()
        server_error.status = 503
        server_error.text = AsyncMock(return_value='{"data":"secret-payload","message":"down"}')
        session = MagicMock()
        session.put.return_value = make_context_manager(server_error)
        with self.assertRaises(UnexpectedResponseError) as caught:
            await answer_qr_rollcall(session, qr, "device-2")
        self.assertNotIn("secret-payload", str(caught.exception))

    async def test_answer_qr_rollcall_invokes_capture_callback_with_full_exchange(self) -> None:
        qr = parse_qr_payload(json.dumps({"rollcallId": 99, "data": "payload-token"}))
        response = MagicMock()
        response.status = 200
        response.headers = {"Content-Type": "application/json"}
        response.text = AsyncMock(return_value='{"ok": true}')
        session = MagicMock()
        session.put.return_value = make_context_manager(response)
        captured = []

        result = await answer_qr_rollcall(session, qr, "device-9", capture=lambda *a: captured.append(a))

        self.assertEqual(result, {"ok": True})
        self.assertEqual(len(captured), 1)
        url, body, status, headers, text = captured[0]
        self.assertTrue(url.endswith("/api/rollcall/99/answer_qr_rollcall"))
        self.assertEqual(body, {"data": "payload-token", "deviceId": "device-9"})
        self.assertEqual(status, 200)
        self.assertEqual(text, '{"ok": true}')

    def test_tron_qr_preview_contains_diagnostic_without_raw_data(self) -> None:
        preview = tron.build_qr_preview(json.dumps({"rollcallId": 88, "data": "super-secret-qr"}))
        encoded = json.dumps(preview, ensure_ascii=False)

        self.assertTrue(preview["ok"])
        self.assertEqual(preview["source_kind"], "json")
        self.assertEqual(preview["encoding"], "json")
        self.assertEqual(preview["missing_required"], [])
        self.assertRegex(preview["payload_hash"], r"^[a-f0-9]{12}$")
        self.assertIn("diagnostic", preview)
        self.assertNotIn("super-secret-qr", encoded)

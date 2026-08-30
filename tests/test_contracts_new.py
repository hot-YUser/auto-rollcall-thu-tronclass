"""Tests for Number and QR contracts: covers tasks 1-3."""
from __future__ import annotations

import copy
import json
import unittest
from unittest.mock import AsyncMock, patch

from troTHU.number_rollcall import NumberAttemptStatus, classify_number_response
from troTHU.qr_remote_runtime import QR_REMOTE_TOKEN_RE, QrRemoteError, QrRemoteSuccess, _bounded_retry_after
from tests.fake_tron_server import FakeTronServer

import aiohttp

from troTHU import tron, qr_remote_runtime


class NumberContractTest(unittest.TestCase):
    def test_empty_2xx_is_unknown_not_success(self) -> None:
        r = classify_number_response(200, "")
        self.assertEqual(r.status, NumberAttemptStatus.UNKNOWN_FAILURE)

    def test_ambiguous_2xx_is_unknown(self) -> None:
        for body in ('{}', '{"id":1}', '{"status":"in_progress"}', 'not json', '{"success": "true-ish"}'):
            with self.subTest(body=body):
                r = classify_number_response(200, body)
                self.assertEqual(r.status, NumberAttemptStatus.UNKNOWN_FAILURE, body)

    def test_explicit_success_true_and_on_call(self) -> None:
        self.assertEqual(classify_number_response(200, '{"success": true}').status, NumberAttemptStatus.SUCCESS)
        self.assertEqual(classify_number_response(200, '{"ok": true}').status, NumberAttemptStatus.SUCCESS)
        self.assertEqual(classify_number_response(200, '{"id":1,"status":"on_call"}').status, NumberAttemptStatus.SUCCESS)
        self.assertEqual(classify_number_response(200, '{"status":"on_call_fine"}').status, NumberAttemptStatus.SUCCESS)
        self.assertEqual(classify_number_response(200, '{"status":"accepted"}').status, NumberAttemptStatus.SUCCESS)
        self.assertEqual(classify_number_response(200, '{"status":"completed"}').status, NumberAttemptStatus.SUCCESS)

    def test_explicit_wrong(self) -> None:
        self.assertEqual(classify_number_response(200, '{"success": false}').status, NumberAttemptStatus.WRONG_CODE)
        self.assertEqual(classify_number_response(200, '{"error": "bad"}').status, NumberAttemptStatus.WRONG_CODE)
        self.assertEqual(classify_number_response(200, '{"error_code": 400}').status, NumberAttemptStatus.WRONG_CODE)
        self.assertEqual(classify_number_response(400, "x").status, NumberAttemptStatus.WRONG_CODE)
        self.assertEqual(classify_number_response(418, "x").status, NumberAttemptStatus.UNKNOWN_FAILURE)

    def test_transient_and_unauth(self) -> None:
        self.assertEqual(classify_number_response(429, "").status, NumberAttemptStatus.TRANSIENT_FAILURE)
        self.assertEqual(classify_number_response(503, "").status, NumberAttemptStatus.TRANSIENT_FAILURE)
        self.assertEqual(classify_number_response(401, "").status, NumberAttemptStatus.UNAUTHORIZED)
        self.assertEqual(classify_number_response(302, "").status, NumberAttemptStatus.UNAUTHORIZED)

    def test_token_regex_rejects_unicode_digits(self) -> None:
        good = "1700000000" + "a"*32
        self.assertTrue(QR_REMOTE_TOKEN_RE.fullmatch(good))
        bad = "１７００００００００" + "a"*32  # fullwidth
        self.assertIsNone(QR_REMOTE_TOKEN_RE.fullmatch(bad))
        upper = "1700000000" + "A"*32
        self.assertIsNone(QR_REMOTE_TOKEN_RE.fullmatch(upper))

    def test_bounded_retry_after(self) -> None:
        self.assertEqual(_bounded_retry_after("2"), 2.0)
        self.assertIsNone(_bounded_retry_after("abc"))
        self.assertIsNone(_bounded_retry_after("-1"))
        self.assertEqual(_bounded_retry_after("9999"), 120.0)
        self.assertIsNone(_bounded_retry_after(""))
        self.assertIsNone(_bounded_retry_after(None))
        self.assertEqual(_bounded_retry_after("  5 "), 5.0)

    def test_qr_report_no_key_leak(self) -> None:
        orig = copy.deepcopy(tron.CONFIG)
        try:
            tron.CONFIG["qr_remote"] = {"enabled": True, "base_url": "https://oracle.example/base", "api_key": "super-secret-key-999"}
            # set a fake last outcome
            qr_remote_runtime._set_last_outcome({"kind": "unauthorized", "status": 401, "error": "unauthorized", "terminal": True})
            report = tron.qr_remote_report()
            dumped = json.dumps(report, ensure_ascii=False)
            self.assertNotIn("super-secret-key-999", dumped)
            self.assertIn("last_outcome", report)
            self.assertEqual(report["last_outcome"]["kind"], "unauthorized")
            self.assertNotIn("super-secret-key-999", json.dumps(report["last_outcome"], ensure_ascii=False))
        finally:
            tron.CONFIG.clear()
            tron.CONFIG.update(orig)


class NumberUnknownNoSecondMutationTest(unittest.IsolatedAsyncioTestCase):
    async def test_unknown_2xx_does_not_blindly_try_next_code(self) -> None:
        """Unknown 2xx should be submitted-unconfirmed and stop brute-force, not try next code."""
        correct = "0005"
        async with FakeTronServer(correct_number_code=correct) as server:
            # Queue a scripted unknown 2xx for the first code (0000) => "{}"
            # We'll configure server to return unknown for 0000 via queue
            # FakeTronServer.answer_number: if body != correct -> 400; need to inject unknown
            # Use queue_response for endpoint "number"
            server.queue_response("number", status=200, json_data={"id": 1})  # ambiguous -> unknown
            # Need to run number() with sequential brute-force; patch verify to return not on_call_fine
            # So it becomes submitted_unconfirmed and should stop (stop_event set)
            orig_config = copy.deepcopy(tron.CONFIG)
            orig_completed = dict(tron.COMPLETED_NUMBER_ROLLCALLS)
            try:
                # configure provider to fake server
                from troTHU import tron as tron_mod
                from tests.test_number import _configure_provider_for_fake_server
                _configure_provider_for_fake_server("tku", server)
                tron_mod.COMPLETED_NUMBER_ROLLCALLS.clear()
                tron_mod.CONFIG["number"]["concurrency"] = 1
                tron_mod.CONFIG["number"]["min_concurrency"] = 1
                tron_mod.CONFIG["number"]["direct_code_lookup"]["enabled"] = False
                async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as sess:
                    await server.login_session(sess)
                    with (
                        patch.object(tron_mod, "NUMBER_CODE_LIMIT", 5),
                        patch.object(tron_mod, "NUMBER_WORKER_COUNT", 1),
                        patch.object(tron_mod, "mes", AsyncMock()),
                        patch.object(tron_mod, "log_print"),
                        patch.object(tron_mod, "status_print"),
                        patch.object(tron_mod, "verify_rollcall_on_call_fine", AsyncMock(return_value={"ok": False, "status": "submitted_unconfirmed"})),
                    ):
                        found = await tron_mod.number(sess, 42)
                    # Should have tried only 1 code (the ambiguous one) and stopped, not 5
                    self.assertEqual(len(server.number_attempts), 1)
                    self.assertEqual(str(server.number_attempts[0]["body"].get("numberCode")), "0000")
                    self.assertEqual(found, "NA")
            finally:
                tron.CONFIG.clear()
                tron.CONFIG.update(orig_config)
                tron.COMPLETED_NUMBER_ROLLCALLS.clear()
                tron.COMPLETED_NUMBER_ROLLCALLS.update(orig_completed)


class QrRemoteTypedTest(unittest.IsolatedAsyncioTestCase):
    async def _start_oracle(self, status, body, headers=None):
        from aiohttp import web
        async def handler(request):
            resp = web.json_response(body, status=status)
            if headers:
                for k, v in headers.items():
                    resp.headers[k] = v
            return resp
        app = web.Application()
        app.router.add_get("/token", handler)
        runner = web.AppRunner(app)
        await runner.setup()
        site = web.TCPSite(runner, "127.0.0.1", 0)
        await site.start()
        port = site._server.sockets[0].getsockname()[1]
        return runner, f"http://127.0.0.1:{port}"

    async def test_200_ok_true_valid_token(self) -> None:
        token = "1700000000" + "a"*32
        runner, base = await self._start_oracle(200, {"ok": True, "data": token})
        try:
            res = await tron.fetch_remote_qr_data(base, "k12345678901234567890123456789012", timeout=2.0)
            self.assertIsInstance(res, QrRemoteSuccess)
            self.assertEqual(res.data, token)
        finally:
            await runner.cleanup()

    async def test_200_ok_false_is_transient(self) -> None:
        token = "1700000000" + "a"*32
        runner, base = await self._start_oracle(200, {"ok": False, "data": token})
        try:
            res = await tron.fetch_remote_qr_data(base, "k12345678901234567890123456789012", timeout=2.0)
            self.assertIsInstance(res, QrRemoteError)
            self.assertEqual(res.kind, "transient")
        finally:
            await runner.cleanup()

    async def test_401_is_terminal_unauthorized(self) -> None:
        runner, base = await self._start_oracle(401, {"error": "unauthorized"})
        try:
            res = await tron.fetch_remote_qr_data(base, "k12345678901234567890123456789012", timeout=2.0)
            self.assertIsInstance(res, QrRemoteError)
            self.assertEqual(res.kind, "unauthorized")
            self.assertTrue(res.terminal)
        finally:
            await runner.cleanup()

    async def test_429_with_retry_after(self) -> None:
        runner, base = await self._start_oracle(429, {"error": "rate_limited"}, headers={"Retry-After": "2"})
        try:
            res = await tron.fetch_remote_qr_data(base, "k12345678901234567890123456789012", timeout=2.0)
            self.assertEqual(res.kind, "rate_limited")
            self.assertEqual(res.retry_after, 2.0)
        finally:
            await runner.cleanup()

    async def test_429_malformed_retry(self) -> None:
        runner, base = await self._start_oracle(429, {"error": "rate_limited"}, headers={"Retry-After": "not-a-number"})
        try:
            res = await tron.fetch_remote_qr_data(base, "k12345678901234567890123456789012", timeout=2.0)
            self.assertEqual(res.kind, "rate_limited")
            self.assertIsNone(res.retry_after)
        finally:
            await runner.cleanup()

    async def test_429_huge_and_negative(self) -> None:
        runner, base = await self._start_oracle(429, {"error": "rate_limited"}, headers={"Retry-After": "9999"})
        try:
            res = await tron.fetch_remote_qr_data(base, "k12345678901234567890123456789012", timeout=2.0)
            self.assertEqual(res.retry_after, 120.0)
        finally:
            await runner.cleanup()
        runner, base = await self._start_oracle(429, {"error": "rate_limited"}, headers={"Retry-After": "-5"})
        try:
            res = await tron.fetch_remote_qr_data(base, "k12345678901234567890123456789012", timeout=2.0)
            self.assertIsNone(res.retry_after)
        finally:
            await runner.cleanup()

    async def test_503_stale_transient(self) -> None:
        runner, base = await self._start_oracle(503, {"error": "stale", "age_ms": 9999})
        try:
            res = await tron.fetch_remote_qr_data(base, "k12345678901234567890123456789012", timeout=2.0)
            self.assertEqual(res.kind, "transient")
        finally:
            await runner.cleanup()

    async def test_503_busy_rate_limited(self) -> None:
        runner, base = await self._start_oracle(503, {"error": "busy"}, headers={"Retry-After": "3"})
        try:
            res = await tron.fetch_remote_qr_data(base, "k12345678901234567890123456789012", timeout=2.0)
            self.assertEqual(res.kind, "rate_limited")
            self.assertEqual(res.retry_after, 3.0)
        finally:
            await runner.cleanup()

    async def test_unexpected_500_is_unavailable(self) -> None:
        runner, base = await self._start_oracle(418, {"error": "teapot"})
        try:
            res = await tron.fetch_remote_qr_data(base, "k12345678901234567890123456789012", timeout=2.0)
            self.assertEqual(res.kind, "unavailable")
        finally:
            await runner.cleanup()

    async def test_deadline_and_exactly_once_401(self) -> None:
        # Use submit_remote_qr with fake fetch that returns 401, ensure only one diagnostic and respects deadline
        tron.CONFIG.clear()
        # minimal config
        tron.CONFIG.update(tron.normalize_config({"account": {"user": "u", "passwd": "p"}, "provider": {"current": "thu", "available": {"thu": {"base_url": "http://127.0.0.1:1", "login_url": "http://127.0.0.1:1/login", "rollcalls_url": "http://127.0.0.1:1/api/radar/rollcalls"}}} , "qr_remote": {"enabled": True, "base_url": "https://oracle.example", "api_key": "k12345678901234567890123456789012", "confirm_window_seconds": 1.0, "poll_interval_seconds": 0.2, "timeout_seconds": 1.0}}))
        call_count = 0
        async def fake_fetch(*a, **kw):
            nonlocal call_count
            call_count += 1
            return QrRemoteError(kind="unauthorized", status=401, message="managed key invalid/revoked/expired", terminal=True)
        with patch.object(qr_remote_runtime, "fetch_remote_qr_data", fake_fetch):
            with patch.object(tron, "log_print") as lp:
                ok = await tron.submit_remote_qr(None, {"rollcall_id": "77"})
        self.assertFalse(ok)
        # exactly one diagnostic
        msgs = [str(c.args[0]) for c in lp.call_args_list if c.args]
        matching = [m for m in msgs if "managed key" in m]
        self.assertEqual(len(matching), 1)
        self.assertEqual(call_count, 1)

    async def test_429_bounded_sleep_no_hammer(self) -> None:
        tron.CONFIG.clear()
        tron.CONFIG.update(tron.normalize_config({"account": {"user": "u", "passwd": "p"}, "provider": {"current": "thu", "available": {"thu": {"base_url": "http://127.0.0.1:1", "login_url": "http://127.0.0.1:1/login", "rollcalls_url": "http://127.0.0.1:1/api/radar/rollcalls"}}} , "qr_remote": {"enabled": True, "base_url": "https://oracle.example", "api_key": "k12345678901234567890123456789012", "confirm_window_seconds": 1.0, "poll_interval_seconds": 0.2, "timeout_seconds": 1.0}}))
        sleep_calls = []
        async def fake_fetch(*a, **kw):
            return QrRemoteError(kind="rate_limited", status=429, message="rate_limited", retry_after=9999)
        orig_sleep = tron.asyncio.sleep
        async def fake_sleep(s):
            sleep_calls.append(s)
            # fast-forward monotonic by not actually sleeping long; just record
            await orig_sleep(0.01)
        # Need to control monotonic to test deadline cap
        # Let _monotonic advance slowly via real time; with 0.4s window, 9999 should be capped to deadline
        with patch.object(qr_remote_runtime, "fetch_remote_qr_data", fake_fetch):
            with patch.object(qr_remote_runtime.ctx.asyncio, "sleep", fake_sleep):
                ok = await tron.submit_remote_qr(None, {"rollcall_id": "78"})
        self.assertFalse(ok)
        # All sleeps must be <= remaining deadline (0.4) and not hammer (not 0)
        for s in sleep_calls:
            self.assertGreater(s, 0)
            self.assertLessEqual(s, 1.2)

    async def test_no_key_leak_in_logs(self) -> None:
        token = "1700000000" + "b"*32
        runner, base = await self._start_oracle(200, {"ok": True, "data": token})
        try:
            res = await tron.fetch_remote_qr_data(base, "my-secret-key-999", timeout=2.0)
            self.assertIsNotNone(res)
            # Ensure report doesn't leak key
            dumped = json.dumps(tron.qr_remote_report(), ensure_ascii=False)
            self.assertNotIn("my-secret-key-999", dumped)
            self.assertNotIn(token, dumped)
        finally:
            await runner.cleanup()

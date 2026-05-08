import asyncio
import copy
import os
import sys
import types
import unittest
from datetime import time as dt_time
from unittest.mock import AsyncMock, MagicMock, patch

try:
    import aiohttp  # noqa: F401
except ModuleNotFoundError:
    fake_aiohttp = types.ModuleType("aiohttp")

    class DummyClientSession:
        pass

    class DummyClientResponse:
        pass

    class DummyClientError(Exception):
        pass

    class DummyContentTypeError(Exception):
        pass

    class DummyTCPConnector:
        def __init__(self, *args, **kwargs) -> None:
            self.args = args
            self.kwargs = kwargs

    async def dummy_request(*args, **kwargs):
        raise RuntimeError("aiohttp is unavailable in this offline unit-test environment")

    fake_aiohttp.ClientSession = DummyClientSession
    fake_aiohttp.ClientResponse = DummyClientResponse
    fake_aiohttp.ClientError = DummyClientError
    fake_aiohttp.ContentTypeError = DummyContentTypeError
    fake_aiohttp.TCPConnector = DummyTCPConnector
    fake_aiohttp.request = dummy_request
    sys.modules["aiohttp"] = fake_aiohttp

try:
    import yaml  # noqa: F401
except ModuleNotFoundError:
    fake_yaml = types.ModuleType("yaml")

    def safe_load(_stream):
        return {}

    def safe_dump(data, stream, **_kwargs):
        stream.write(str(data))

    fake_yaml.safe_load = safe_load
    fake_yaml.safe_dump = safe_dump
    sys.modules["yaml"] = fake_yaml

from troTHU import tron, tron_http


class FakeCookie:
    def __init__(self, key: str, domain: str, value: str = "cookie-value") -> None:
        self.key = key
        self._domain = domain
        self.value = value

    def __getitem__(self, item: str) -> str:
        if item == "domain":
            return self._domain
        raise KeyError(item)


class FakeCookieJar(list):
    def clear(self) -> None:
        del self[:]


def make_response(
    *,
    status: int = 200,
    url: str = "https://example.com",
    text: str = "",
    json_data=None,
    json_side_effect=None,
):
    response = MagicMock()
    response.status = status
    response.url = url
    response.read = AsyncMock(return_value=b"")
    response.text = AsyncMock(return_value=text)
    if json_side_effect is not None:
        response.json = AsyncMock(side_effect=json_side_effect)
    else:
        response.json = AsyncMock(return_value=json_data)
    return response


def make_context_manager(response):
    context_manager = MagicMock()
    context_manager.__aenter__ = AsyncMock(return_value=response)
    context_manager.__aexit__ = AsyncMock(return_value=None)
    return context_manager


def make_login_result(status: str, **kwargs):
    defaults = {"credential_source": "config", "user": "user1"}
    defaults.update(kwargs)
    return tron.LoginResult(status=status, **defaults)


class TronHttpClientTest(unittest.IsolatedAsyncioTestCase):
    async def test_fetch_login_form_parses_hidden_inputs(self) -> None:
        session = MagicMock()
        session.cookie_jar = FakeCookieJar()
        session.get.return_value = make_context_manager(
            make_response(
                text="""
                <html>
                  <form class="form-horizontal" action="/auth/login?foo=1&amp;bar=2">
                    <input type="hidden" name="execution" value="abc123">
                    <input type="hidden" name="tab_id" value="tab-1">
                  </form>
                </html>
                """
            )
        )
        client = tron_http.TronHttpClient(session)

        form = await client.fetch_login_form()

        self.assertEqual(
            form.action_url,
            "https://tcidentity.thu.edu.tw/auth/login?foo=1&bar=2",
        )
        self.assertEqual(form.fields["execution"], "abc123")
        self.assertEqual(form.fields["tab_id"], "tab-1")

    async def test_fetch_login_form_raises_when_action_missing(self) -> None:
        session = MagicMock()
        session.cookie_jar = FakeCookieJar()
        session.get.return_value = make_context_manager(
            make_response(text="<html><body>no login form</body></html>")
        )
        client = tron_http.TronHttpClient(session)

        with self.assertRaises(tron_http.LoginPageChangedError):
            await client.fetch_login_form()

    async def test_submit_login_returns_outcome_on_success(self) -> None:
        session = MagicMock()
        session.cookie_jar = FakeCookieJar([FakeCookie("session", "ilearn.thu.edu.tw")])
        session.post.return_value = make_context_manager(
            make_response(url="https://ilearn.thu.edu.tw/home")
        )
        client = tron_http.TronHttpClient(session)
        form = tron_http.LoginForm(
            action_url="https://example.com/login",
            fields={"execution": "abc123"},
        )

        outcome = await client.submit_login(form, "user1", "pass1")

        self.assertEqual(outcome.final_url, "https://ilearn.thu.edu.tw/home")
        self.assertTrue(outcome.has_session)
        session.post.assert_called_once_with(
            "https://example.com/login",
            data={"execution": "abc123", "username": "user1", "password": "pass1"},
        )

    async def test_submit_login_raises_when_credentials_rejected(self) -> None:
        session = MagicMock()
        session.cookie_jar = FakeCookieJar()
        session.post.return_value = make_context_manager(
            make_response(url=tron_http.LOGIN_URL)
        )
        client = tron_http.TronHttpClient(session)
        form = tron_http.LoginForm(action_url="https://example.com/login", fields={})

        with self.assertRaises(tron_http.LoginRejectedError):
            await client.submit_login(form, "user1", "pass1")

    async def test_fetch_rollcalls_raises_on_unauthorized_status(self) -> None:
        session = MagicMock()
        session.cookie_jar = FakeCookieJar()
        session.get.return_value = make_context_manager(
            make_response(status=401, url=tron_http.ROLLCALLS_URL)
        )
        client = tron_http.TronHttpClient(session)

        with self.assertRaises(tron_http.UnauthorizedError):
            await client.fetch_rollcalls()

    async def test_fetch_rollcalls_raises_on_login_redirect(self) -> None:
        session = MagicMock()
        session.cookie_jar = FakeCookieJar()
        session.get.return_value = make_context_manager(
            make_response(status=200, url=tron_http.LOGIN_URL)
        )
        client = tron_http.TronHttpClient(session)

        with self.assertRaises(tron_http.UnauthorizedError):
            await client.fetch_rollcalls()

    async def test_fetch_rollcalls_raises_on_non_200(self) -> None:
        session = MagicMock()
        session.cookie_jar = FakeCookieJar()
        session.get.return_value = make_context_manager(
            make_response(status=500, url=tron_http.ROLLCALLS_URL, text="server error")
        )
        client = tron_http.TronHttpClient(session)

        with self.assertRaises(tron_http.UnexpectedResponseError):
            await client.fetch_rollcalls()

    async def test_fetch_rollcalls_raises_on_invalid_json(self) -> None:
        session = MagicMock()
        session.cookie_jar = FakeCookieJar()
        session.get.return_value = make_context_manager(
            make_response(
                status=200,
                url=tron_http.ROLLCALLS_URL,
                text="<html>not json</html>",
                json_side_effect=ValueError("bad json"),
            )
        )
        client = tron_http.TronHttpClient(session)

        with self.assertRaises(tron_http.UnexpectedResponseError):
            await client.fetch_rollcalls()


class TronOrchestrationTest(unittest.IsolatedAsyncioTestCase):
    def setUp(self) -> None:
        self.original_config = copy.deepcopy(tron.CONFIG)
        self.original_cnt = tron.cnt
        self.original_is_logging_in = tron.IS_LOGGING_IN
        self.original_runtime_credentials = copy.deepcopy(tron.RUNTIME_CREDENTIALS)
        self.original_unsupported_rollcall_state = copy.deepcopy(tron.UNSUPPORTED_ROLLCALL_STATE)
        self.original_completed_number_rollcalls = copy.deepcopy(tron.COMPLETED_NUMBER_ROLLCALLS)
        self.original_tron_user = os.environ.get("TRON_USER")
        self.original_tron_pass = os.environ.get("TRON_PASS")
        self.original_last_login_result = tron.LAST_LOGIN_RESULT
        tron.cnt = 0
        tron.IS_LOGGING_IN = False
        tron.COMPLETED_NUMBER_ROLLCALLS.clear()
        tron.clear_runtime_credentials()
        os.environ.pop("TRON_USER", None)
        os.environ.pop("TRON_PASS", None)

    def tearDown(self) -> None:
        tron.CONFIG.clear()
        tron.CONFIG.update(copy.deepcopy(self.original_config))
        tron.cnt = self.original_cnt
        tron.IS_LOGGING_IN = self.original_is_logging_in
        tron.RUNTIME_CREDENTIALS.clear()
        tron.RUNTIME_CREDENTIALS.update(copy.deepcopy(self.original_runtime_credentials))
        tron.UNSUPPORTED_ROLLCALL_STATE.clear()
        tron.UNSUPPORTED_ROLLCALL_STATE.update(copy.deepcopy(self.original_unsupported_rollcall_state))
        tron.COMPLETED_NUMBER_ROLLCALLS.clear()
        tron.COMPLETED_NUMBER_ROLLCALLS.update(copy.deepcopy(self.original_completed_number_rollcalls))
        tron.LAST_LOGIN_RESULT = self.original_last_login_result
        if self.original_tron_user is None:
            os.environ.pop("TRON_USER", None)
        else:
            os.environ["TRON_USER"] = self.original_tron_user
        if self.original_tron_pass is None:
            os.environ.pop("TRON_PASS", None)
        else:
            os.environ["TRON_PASS"] = self.original_tron_pass

    async def test_login_returns_missing_credentials_for_empty_credentials(self) -> None:
        session = MagicMock()
        session.cookie_jar = MagicMock()
        tron.CONFIG["account"]["user"] = ""
        tron.CONFIG["account"]["passwd"] = ""

        with patch.object(tron, "log_print") as log_print:
            result = await tron.login(session)

        self.assertFalse(result.ok)
        self.assertEqual(result.status, "missing_credentials")
        log_print.assert_called_once()

    async def test_login_returns_success_result_when_client_succeeds(self) -> None:
        session = MagicMock()
        session.cookie_jar = MagicMock()
        session.cookie_jar.clear = MagicMock()
        tron.CONFIG["account"]["user"] = "user1"
        tron.CONFIG["account"]["passwd"] = "pass1"
        client = MagicMock()
        client.fetch_login_form = AsyncMock(
            return_value=tron_http.LoginForm("https://example.com/login", {})
        )
        client.submit_login = AsyncMock(
            return_value=tron_http.LoginOutcome(
                final_url="https://ilearn.thu.edu.tw/home",
                has_session=True,
            )
        )

        with (
            patch.object(tron, "TronHttpClient", return_value=client),
            patch.object(tron, "has_session_cookie", return_value=True),
            patch.object(tron, "log_print") as log_print,
        ):
            result = await tron.login(session)

        self.assertTrue(result.ok)
        self.assertEqual(result.status, "success")
        session.cookie_jar.clear.assert_called_once()
        client.fetch_login_form.assert_awaited_once()
        client.submit_login.assert_awaited_once()
        log_print.assert_any_call("登入成功！綁定學號：user1")

    async def test_login_returns_rejected_result_when_credentials_rejected(self) -> None:
        session = MagicMock()
        session.cookie_jar = MagicMock()
        session.cookie_jar.clear = MagicMock()
        tron.CONFIG["account"]["user"] = "user1"
        tron.CONFIG["account"]["passwd"] = "pass1"
        client = MagicMock()
        client.fetch_login_form = AsyncMock(
            return_value=tron_http.LoginForm("https://example.com/login", {})
        )
        client.submit_login = AsyncMock(
            side_effect=tron_http.LoginRejectedError("bad credentials")
        )

        with (
            patch.object(tron, "TronHttpClient", return_value=client),
            patch.object(tron, "log_print") as log_print,
        ):
            result = await tron.login(session)

        self.assertFalse(result.ok)
        self.assertEqual(result.status, "rejected")
        log_print.assert_any_call("登入失敗，請檢查帳號或密碼是否正確。")

    async def test_check_rollcall_returns_not_call_for_empty_list(self) -> None:
        session = MagicMock()
        client = MagicMock()
        client.fetch_rollcalls = AsyncMock(
            return_value=tron_http.RollcallsResult(
                url=tron_http.ROLLCALLS_URL,
                status_code=200,
                payload={"rollcalls": []},
            )
        )

        with (
            patch.object(tron, "TronHttpClient", return_value=client),
            patch.object(tron, "log", return_value=True),
        ):
            result = await tron.check_rollcall(session, 3)

        self.assertEqual(result, "not call")

    async def test_check_rollcall_returns_on_call_fine(self) -> None:
        session = MagicMock()
        client = MagicMock()
        client.fetch_rollcalls = AsyncMock(
            return_value=tron_http.RollcallsResult(
                url=tron_http.ROLLCALLS_URL,
                status_code=200,
                payload={"rollcalls": [{"status": "on_call_fine"}]},
            )
        )

        with (
            patch.object(tron, "TronHttpClient", return_value=client),
            patch.object(tron, "log", return_value=True),
        ):
            result = await tron.check_rollcall(session, 4)

        self.assertEqual(result, "on_call_fine")

    async def test_check_rollcall_invokes_number_for_number_rollcall(self) -> None:
        session = MagicMock()
        client = MagicMock()
        client.fetch_rollcalls = AsyncMock(
            return_value=tron_http.RollcallsResult(
                url=tron_http.ROLLCALLS_URL,
                status_code=200,
                payload={
                    "rollcalls": [
                        {
                            "is_number": True,
                            "rollcall_id": 42,
                        }
                    ]
                },
            )
        )
        number_mock = AsyncMock()
        mes_mock = AsyncMock()

        with (
            patch.object(tron, "TronHttpClient", return_value=client),
            patch.object(tron, "log", return_value=True),
            patch.object(tron, "number", number_mock),
            patch.object(tron, "mes", mes_mock),
            patch.object(tron, "log_print"),
        ):
            result = await tron.check_rollcall(session, 5)

        self.assertEqual(result, "is_number")
        number_mock.assert_awaited_once_with(session, 42)
        mes_mock.assert_awaited_once()

    async def test_check_rollcall_skips_number_rollcall_after_successful_attempt(self) -> None:
        session = MagicMock()
        client = MagicMock()
        client.fetch_rollcalls = AsyncMock(
            return_value=tron_http.RollcallsResult(
                url=tron_http.ROLLCALLS_URL,
                status_code=200,
                payload={
                    "rollcalls": [
                        {
                            "is_number": True,
                            "rollcall_id": 42,
                        }
                    ]
                },
            )
        )
        number_mock = AsyncMock(return_value="1234")
        mes_mock = AsyncMock()

        with (
            patch.object(tron, "TronHttpClient", return_value=client),
            patch.object(tron, "log", return_value=True),
            patch.object(tron, "number", number_mock),
            patch.object(tron, "mes", mes_mock),
            patch.object(tron, "log_print"),
        ):
            first = await tron.check_rollcall(session, 5)
            second = await tron.check_rollcall(session, 6)

        self.assertEqual(first, "is_number")
        self.assertEqual(second, "數字點名已處理")
        number_mock.assert_awaited_once_with(session, 42)
        self.assertEqual(mes_mock.await_count, 1)

    async def test_check_rollcall_prefers_first_number_rollcall_over_earlier_unsupported(self) -> None:
        session = MagicMock()
        client = MagicMock()
        client.fetch_rollcalls = AsyncMock(
            return_value=tron_http.RollcallsResult(
                url=tron_http.ROLLCALLS_URL,
                status_code=200,
                payload={
                    "rollcalls": [
                        {"is_qrcode": True, "rollcall_id": 10},
                        {"is_number": True, "rollcall_id": 42},
                    ]
                },
            )
        )
        number_mock = AsyncMock()
        mes_mock = AsyncMock()

        with (
            patch.object(tron, "TronHttpClient", return_value=client),
            patch.object(tron, "log", return_value=True),
            patch.object(tron, "number", number_mock),
            patch.object(tron, "mes", mes_mock),
            patch.object(tron, "log_print"),
        ):
            result = await tron.check_rollcall(session, 5)

        self.assertEqual(result, "is_number")
        number_mock.assert_awaited_once_with(session, 42)
        mes_mock.assert_awaited_once()

    async def test_check_rollcall_returns_unsupported_rollcall_for_unknown_shape(self) -> None:
        session = MagicMock()
        client = MagicMock()
        client.fetch_rollcalls = AsyncMock(
            return_value=tron_http.RollcallsResult(
                url=tron_http.ROLLCALLS_URL,
                status_code=200,
                payload={"rollcalls": [{"foo": "bar"}]},
            )
        )
        mes_mock = AsyncMock()

        with (
            patch.object(tron, "TronHttpClient", return_value=client),
            patch.object(tron, "log", return_value=True),
            patch.object(tron, "mes", mes_mock),
            patch.object(tron, "log_print"),
        ):
            result = await tron.check_rollcall(session, 6)

        self.assertEqual(result, "unsupported_rollcall")
        mes_mock.assert_awaited_once()

    async def test_check_rollcall_notifies_unsupported_qrcode_only_once_per_rollcall_id(self) -> None:
        session = MagicMock()
        client = MagicMock()
        client.fetch_rollcalls = AsyncMock(
            return_value=tron_http.RollcallsResult(
                url=tron_http.ROLLCALLS_URL,
                status_code=200,
                payload={"rollcalls": [{"is_qrcode": True, "rollcall_id": 77}]},
            )
        )
        mes_mock = AsyncMock()

        with (
            patch.object(tron, "TronHttpClient", return_value=client),
            patch.object(tron, "log", return_value=True),
            patch.object(tron, "mes", mes_mock),
            patch.object(tron, "log_print") as log_print,
        ):
            first = await tron.check_rollcall(session, 1)
            second = await tron.check_rollcall(session, 2)

        self.assertEqual(first, "unsupported_qrcode")
        self.assertEqual(second, "unsupported_qrcode")
        self.assertEqual(mes_mock.await_count, 1)
        log_print.assert_called_once_with("偵測到未支援的 QR Code 點名")

    async def test_mes_isolates_notification_timeout_failures(self) -> None:
        tron.CONFIG["notifications"]["tg"].update(
            {"enable": True, "key": "123456:token", "chat": "111"}
        )
        tron.CONFIG["notifications"]["dc"].update(
            {"enable": True, "key": "discord-token", "chat": "222"}
        )

        with (
            patch.object(
                tron,
                "_send_notification",
                AsyncMock(side_effect=[asyncio.TimeoutError("tg timeout"), 200]),
            ) as send_mock,
            patch.object(tron, "log", return_value=True),
            patch.object(tron, "log_print") as log_print,
        ):
            await tron.mes("hello")

        self.assertEqual(send_mock.await_count, 2)
        self.assertTrue(
            any("Telegram 通知送出失敗" in call.args[0] for call in log_print.call_args_list)
        )

    async def test_send_notification_uses_timeout_and_raises_on_non_2xx(self) -> None:
        response = make_response(status=503, text="service unavailable")
        request = tron.NotificationRequest(
            channel="telegram",
            label="Telegram",
            method="POST",
            url="https://example.com/notify",
            data={"text": "hello"},
        )

        with (
            patch.object(
                tron.aiohttp,
                "request",
                new=MagicMock(return_value=make_context_manager(response)),
            ) as request_mock,
            patch.object(tron, "create_notification_timeout", return_value="timeout-marker"),
            patch.object(tron, "get_ssl_request_setting", return_value="ssl-marker"),
        ):
            with self.assertRaises(tron.NotificationSendError):
                await tron._send_notification(request)

        self.assertEqual(request_mock.call_args.kwargs["timeout"], "timeout-marker")
        self.assertEqual(request_mock.call_args.kwargs["ssl"], "ssl-marker")


class TronMonitorLoopTest(unittest.IsolatedAsyncioTestCase):
    def setUp(self) -> None:
        self.original_cnt = tron.cnt
        self.original_is_logging_in = tron.IS_LOGGING_IN
        self.original_last_login_result = tron.LAST_LOGIN_RESULT
        tron.cnt = 0
        tron.IS_LOGGING_IN = False

    def tearDown(self) -> None:
        tron.cnt = self.original_cnt
        tron.IS_LOGGING_IN = self.original_is_logging_in
        tron.LAST_LOGIN_RESULT = self.original_last_login_result

    async def test_monitor_loop_reauths_on_unauthorized_error(self) -> None:
        session = MagicMock()
        session.cookie_jar = MagicMock()
        session.cookie_jar.clear = MagicMock()
        shutdown_event = asyncio.Event()

        def fake_login(_session):
            fake_login.calls += 1
            if fake_login.calls == 2:
                shutdown_event.set()
            return make_login_result("success", final_url="https://ilearn.thu.edu.tw/home")

        fake_login.calls = 0

        with (
            patch.object(tron, "login", AsyncMock(side_effect=fake_login)) as login_mock,
            patch.object(
                tron,
                "check_rollcall",
                AsyncMock(side_effect=tron_http.UnauthorizedError("expired")),
            ),
            patch.object(tron, "has_session_cookie", return_value=True),
            patch.object(tron, "get_schedule_for_day", return_value={"enable": True, "range": ["00:00", "23:59"]}),
            patch.object(tron, "parse_schedule_range", return_value=(dt_time(0, 0), dt_time(23, 59))),
            patch.object(tron, "log_print"),
            patch.object(tron, "mes", AsyncMock()),
        ):
            await tron.monitor_loop(session, shutdown_event)

        self.assertEqual(login_mock.await_count, 2)
        session.cookie_jar.clear.assert_called_once()

    async def test_monitor_loop_retries_on_tron_http_error(self) -> None:
        session = MagicMock()
        session.cookie_jar = MagicMock()
        shutdown_event = asyncio.Event()
        mes_mock = AsyncMock()

        def fake_sleep(event, seconds):
            shutdown_event.set()

        with (
            patch.object(
                tron,
                "login",
                AsyncMock(return_value=make_login_result("success", final_url="https://ilearn.thu.edu.tw/home")),
            ),
            patch.object(
                tron,
                "check_rollcall",
                AsyncMock(side_effect=tron_http.UnexpectedResponseError("boom")),
            ),
            patch.object(tron, "has_session_cookie", return_value=True),
            patch.object(tron, "get_schedule_for_day", return_value={"enable": True, "range": ["00:00", "23:59"]}),
            patch.object(tron, "parse_schedule_range", return_value=(dt_time(0, 0), dt_time(23, 59))),
            patch.object(tron, "get_retry_limit", return_value=1),
            patch.object(tron, "sleep_or_shutdown", AsyncMock(side_effect=fake_sleep)),
            patch.object(tron, "log_print") as log_print,
            patch.object(tron, "mes", mes_mock),
        ):
            await tron.monitor_loop(session, shutdown_event)

        self.assertTrue(
            any("check rollcall error on " in call.args[0] for call in mes_mock.await_args_list)
        )
        self.assertTrue(
            any("check rollcall error on " in call.args[0] for call in log_print.call_args_list)
        )

    async def test_monitor_loop_auto_retries_transient_login_failure(self) -> None:
        session = MagicMock()
        session.cookie_jar = MagicMock()
        shutdown_event = asyncio.Event()

        async def fake_check_rollcall(_session, _cnt):
            shutdown_event.set()
            return "not call"

        login_results = [
            make_login_result("transient_error", error="timeout"),
            make_login_result("success", final_url="https://ilearn.thu.edu.tw/home"),
        ]

        async def fake_login(_session):
            result = login_results.pop(0)
            tron.LAST_LOGIN_RESULT = result
            return result

        with (
            patch.object(
                tron,
                "login",
                AsyncMock(side_effect=fake_login),
            ) as login_mock,
            patch.object(tron, "has_session_cookie", side_effect=[False, True]),
            patch.object(tron, "get_login_retry_delay", return_value=0.0),
            patch.object(tron, "check_rollcall", AsyncMock(side_effect=fake_check_rollcall)),
            patch.object(
                tron,
                "get_schedule_for_day",
                return_value={"enable": True, "range": ["00:00", "23:59"]},
            ),
            patch.object(tron, "parse_schedule_range", return_value=(dt_time(0, 0), dt_time(23, 59))),
            patch.object(tron, "log_print") as log_print,
            patch.object(tron, "mes", AsyncMock()),
        ):
            await tron.monitor_loop(session, shutdown_event)

        self.assertEqual(login_mock.await_count, 2)
        self.assertTrue(
            any("稍後會自動重試" in call.args[0] for call in log_print.call_args_list)
        )

    async def test_monitor_loop_does_not_dense_retry_rejected_login(self) -> None:
        session = MagicMock()
        session.cookie_jar = MagicMock()
        shutdown_event = asyncio.Event()

        async def fake_sleep(_event, _seconds):
            shutdown_event.set()

        async def fake_login(_session):
            result = make_login_result("rejected")
            tron.LAST_LOGIN_RESULT = result
            return result

        with (
            patch.object(
                tron,
                "login",
                AsyncMock(side_effect=fake_login),
            ) as login_mock,
            patch.object(tron, "has_session_cookie", return_value=False),
            patch.object(tron, "sleep_or_shutdown", AsyncMock(side_effect=fake_sleep)),
            patch.object(tron, "status_print"),
            patch.object(tron, "log_print"),
        ):
            await tron.monitor_loop(session, shutdown_event)

        self.assertEqual(login_mock.await_count, 1)

    async def test_monitor_loop_auto_reauths_when_cookie_disappears_after_success(self) -> None:
        session = MagicMock()
        session.cookie_jar = MagicMock()
        shutdown_event = asyncio.Event()

        async def fake_check_rollcall(_session, _cnt):
            shutdown_event.set()
            return "not call"

        async def fake_login(_session):
            result = make_login_result("success", final_url="https://ilearn.thu.edu.tw/home")
            tron.LAST_LOGIN_RESULT = result
            return result

        with (
            patch.object(tron, "login", AsyncMock(side_effect=fake_login)) as login_mock,
            patch.object(tron, "has_session_cookie", side_effect=[False, True]),
            patch.object(tron, "check_rollcall", AsyncMock(side_effect=fake_check_rollcall)),
            patch.object(
                tron,
                "get_schedule_for_day",
                return_value={"enable": True, "range": ["00:00", "23:59"]},
            ),
            patch.object(tron, "parse_schedule_range", return_value=(dt_time(0, 0), dt_time(23, 59))),
            patch.object(tron, "log_print") as log_print,
            patch.object(tron, "mes", AsyncMock()),
        ):
            await tron.monitor_loop(session, shutdown_event)

        self.assertEqual(login_mock.await_count, 2)
        self.assertTrue(
            any("正在嘗試自動登入" in call.args[0] for call in log_print.call_args_list)
        )

    async def test_app_main_uses_explicit_http_timeout(self) -> None:
        fake_session = MagicMock()
        fake_session.cookie_jar = MagicMock()

        with (
            patch.object(tron, "bootstrap_config"),
            patch.object(tron, "consume_bootstrap_warnings", return_value=[]),
            patch.object(tron, "random_ua", return_value="ua"),
            patch.object(tron, "create_http_connector", return_value="connector-marker"),
            patch.object(tron, "create_http_client_timeout", return_value="timeout-marker"),
            patch.object(
                tron.aiohttp,
                "ClientSession",
                return_value=make_context_manager(fake_session),
            ) as client_session_mock,
            patch.object(tron, "monitor_loop", AsyncMock(return_value=None)),
            patch.object(tron, "input_loop", AsyncMock(return_value=None)),
            patch.object(tron.sys.stdout, "write"),
            patch.object(tron.sys.stdout, "flush"),
        ):
            await tron.app_main()

        self.assertEqual(client_session_mock.call_args.kwargs["timeout"], "timeout-marker")
        self.assertEqual(client_session_mock.call_args.kwargs["connector"], "connector-marker")


class TronNumberRollcallTest(unittest.IsolatedAsyncioTestCase):
    async def test_number_stops_immediately_on_unauthorized_response(self) -> None:
        main_session = MagicMock()
        main_session.cookie_jar = FakeCookieJar([FakeCookie("session", "ilearn.thu.edu.tw")])
        worker_session = MagicMock()
        worker_session.cookie_jar = MagicMock()
        worker_session.put.return_value = make_context_manager(
            make_response(status=401, url="https://example.com/rollcall", text="expired")
        )
        client_session_context = make_context_manager(worker_session)

        with (
            patch.object(tron.aiohttp, "ClientSession", return_value=client_session_context),
            patch.object(tron, "create_http_connector", return_value=MagicMock()),
            patch.object(tron, "mes", AsyncMock()),
            patch.object(tron, "log", return_value=True),
            patch.object(tron, "NUMBER_CODE_LIMIT", 3),
            patch.object(tron, "NUMBER_WORKER_COUNT", 1),
            patch.object(tron, "random_ua", return_value="ua"),
        ):
            with self.assertRaises(tron_http.UnauthorizedError):
                await tron.number(main_session, 42)

        self.assertEqual(worker_session.put.call_count, 1)

    async def test_number_stops_immediately_on_unexpected_server_response(self) -> None:
        main_session = MagicMock()
        main_session.cookie_jar = FakeCookieJar([FakeCookie("session", "ilearn.thu.edu.tw")])
        worker_session = MagicMock()
        worker_session.cookie_jar = MagicMock()
        worker_session.put.return_value = make_context_manager(
            make_response(status=503, url="https://example.com/rollcall", text="server error")
        )
        client_session_context = make_context_manager(worker_session)

        with (
            patch.object(tron.aiohttp, "ClientSession", return_value=client_session_context),
            patch.object(tron, "create_http_connector", return_value=MagicMock()),
            patch.object(tron, "mes", AsyncMock()),
            patch.object(tron, "log", return_value=True),
            patch.object(tron, "NUMBER_CODE_LIMIT", 3),
            patch.object(tron, "NUMBER_WORKER_COUNT", 1),
            patch.object(tron, "random_ua", return_value="ua"),
        ):
            with self.assertRaises(tron_http.UnexpectedResponseError):
                await tron.number(main_session, 99)

        self.assertEqual(worker_session.put.call_count, 1)

    async def test_number_raises_terminal_timeout_instead_of_reporting_na(self) -> None:
        main_session = MagicMock()
        main_session.cookie_jar = FakeCookieJar([FakeCookie("session", "ilearn.thu.edu.tw")])
        worker_session = MagicMock()
        worker_session.cookie_jar = MagicMock()
        worker_session.put.side_effect = asyncio.TimeoutError()
        client_session_context = make_context_manager(worker_session)

        with (
            patch.object(tron.aiohttp, "ClientSession", return_value=client_session_context),
            patch.object(tron, "create_http_connector", return_value=MagicMock()),
            patch.object(tron, "mes", AsyncMock()) as mes_mock,
            patch.object(tron, "log", return_value=True),
            patch.object(tron, "NUMBER_CODE_LIMIT", 3),
            patch.object(tron, "NUMBER_WORKER_COUNT", 1),
            patch.object(tron, "NUMBER_REQUEST_RETRIES", 1),
            patch.object(tron, "random_ua", return_value="ua"),
        ):
            with self.assertRaises(asyncio.TimeoutError):
                await tron.number(main_session, 7)

        self.assertEqual(worker_session.put.call_count, 1)
        mes_mock.assert_not_awaited()

    async def test_number_shows_progress_and_highlighted_found_code(self) -> None:
        main_session = MagicMock()
        main_session.cookie_jar = FakeCookieJar([FakeCookie("session", "ilearn.thu.edu.tw")])
        worker_session = MagicMock()
        worker_session.cookie_jar = MagicMock()
        worker_session.put.side_effect = [
            make_context_manager(make_response(status=400, url="https://example.com/rollcall")),
            make_context_manager(make_response(status=200, url="https://example.com/rollcall")),
        ]
        client_session_context = make_context_manager(worker_session)

        with (
            patch.object(tron.aiohttp, "ClientSession", return_value=client_session_context) as client_session_mock,
            patch.object(tron, "create_http_connector", return_value=MagicMock()),
            patch.object(tron, "create_http_client_timeout", return_value="timeout-marker"),
            patch.object(tron, "mes", AsyncMock()) as mes_mock,
            patch.object(tron, "status_print") as status_print,
            patch.object(tron, "log_print") as log_print,
            patch.object(tron, "log", return_value=True),
            patch.object(tron, "NUMBER_CODE_LIMIT", 2),
            patch.object(tron, "NUMBER_WORKER_COUNT", 1),
            patch.object(tron, "random_ua", return_value="ua"),
        ):
            await tron.number(main_session, 42)

        self.assertEqual(client_session_mock.call_args.kwargs["timeout"], "timeout-marker")
        self.assertTrue(
            any("正在嘗試中" in call.args[0] for call in status_print.call_args_list)
        )
        self.assertTrue(
            any("Code: 0001" in call.args[0] for call in log_print.call_args_list)
        )
        self.assertIn(
            "Code: 0001",
            mes_mock.await_args_list[0].kwargs["highlight_block"],
        )


if __name__ == "__main__":
    unittest.main()

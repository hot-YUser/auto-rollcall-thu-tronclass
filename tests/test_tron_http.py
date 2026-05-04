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
    def __init__(self, key: str, domain: str) -> None:
        self.key = key
        self._domain = domain

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
        self.original_tron_user = os.environ.get("TRON_USER")
        self.original_tron_pass = os.environ.get("TRON_PASS")
        tron.cnt = 0
        tron.IS_LOGGING_IN = False
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
        if self.original_tron_user is None:
            os.environ.pop("TRON_USER", None)
        else:
            os.environ["TRON_USER"] = self.original_tron_user
        if self.original_tron_pass is None:
            os.environ.pop("TRON_PASS", None)
        else:
            os.environ["TRON_PASS"] = self.original_tron_pass

    async def test_login_returns_false_for_empty_credentials(self) -> None:
        session = MagicMock()
        session.cookie_jar = MagicMock()
        tron.CONFIG["account"]["user"] = ""
        tron.CONFIG["account"]["passwd"] = ""

        with patch.object(tron, "log_print") as log_print:
            result = await tron.login(session)

        self.assertFalse(result)
        log_print.assert_called_once()

    async def test_login_returns_true_when_client_succeeds(self) -> None:
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

        self.assertTrue(result)
        session.cookie_jar.clear.assert_called_once()
        client.fetch_login_form.assert_awaited_once()
        client.submit_login.assert_awaited_once()
        log_print.assert_any_call("登入成功！綁定學號：user1")

    async def test_login_returns_false_when_credentials_rejected(self) -> None:
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

        self.assertFalse(result)
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


class TronMonitorLoopTest(unittest.IsolatedAsyncioTestCase):
    def setUp(self) -> None:
        self.original_cnt = tron.cnt
        self.original_is_logging_in = tron.IS_LOGGING_IN
        tron.cnt = 0
        tron.IS_LOGGING_IN = False

    def tearDown(self) -> None:
        tron.cnt = self.original_cnt
        tron.IS_LOGGING_IN = self.original_is_logging_in

    async def test_monitor_loop_reauths_on_unauthorized_error(self) -> None:
        session = MagicMock()
        session.cookie_jar = MagicMock()
        session.cookie_jar.clear = MagicMock()
        shutdown_event = asyncio.Event()

        def fake_login(_session):
            fake_login.calls += 1
            if fake_login.calls == 2:
                shutdown_event.set()
            return True

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
            patch.object(tron, "login", AsyncMock(return_value=True)),
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


if __name__ == "__main__":
    unittest.main()

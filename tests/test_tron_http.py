import asyncio
import copy
import hashlib
import json
import os
import shutil
import sys
import types
import unittest
from datetime import time as dt_time
from pathlib import Path
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
    from aiohttp import web
except (ImportError, ModuleNotFoundError):  # pragma: no cover - aiohttp absent fallback
    web = None

try:
    from yarl import URL
except (ImportError, ModuleNotFoundError):  # pragma: no cover - aiohttp absent fallback
    URL = None

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
from tests.fake_tron_server import FakeTronServer

TEST_WORKSPACE_DIR = Path(__file__).resolve().parents[1]


def make_workspace_temp_dir() -> Path:
    root = TEST_WORKSPACE_DIR / ".tmp-tests"
    root.mkdir(exist_ok=True)
    path = root / hashlib.md5(os.urandom(16)).hexdigest()
    path.mkdir()
    return path


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


class FakeTkuSsoServer:
    def __init__(self) -> None:
        self.session_cookie = "local-tku-session"
        self.validation_code = "123456"
        self.break_form = False
        self.fail_image_validate = False
        self.api_redirects_to_sso = False
        self.login_posts = []
        self.image_validate_posts = []
        self.current_semester_requests = 0
        self.runner = None
        self.site = None
        self.base_url = ""

    @property
    def login_url(self) -> str:
        return self.base_url + "/login?next=/iportal&locale=zh_TW"

    @property
    def rollcalls_url(self) -> str:
        return self.base_url + "/api/radar/rollcalls?api_version=1.1.0"

    @property
    def current_semester_url(self) -> str:
        return self.base_url + "/api/current-semester-info"

    @property
    def courses_url(self) -> str:
        return self.base_url + "/api/my-courses?page=1&page_size=50"

    async def login_page(self, _request):
        return web.Response(
            text="<html><script>redirectLoginPage();</script></html>",
            content_type="text/html",
        )

    async def sso_login_form(self, _request):
        if self.break_form:
            return web.Response(text="<html><body>changed</body></html>", content_type="text/html")
        html = """
        <html>
          <form class="form-horizontal" action="/NEAI/login2.do">
            <input type="hidden" name="myurl" value="/login">
            <input type="hidden" name="logintype" value="logineb">
            <input type="text" name="username" value="">
            <input type="password" name="password" value="">
            <input type="text" name="vidcode" value="">
          </form>
        </html>
        """
        return web.Response(text=html, content_type="text/html")

    async def image_validate(self, request):
        if request.method == "GET":
            return web.Response(body=b"fake-image")
        data = await request.post()
        self.image_validate_posts.append(dict(data))
        if self.fail_image_validate:
            return web.Response(status=500, text="")
        if data.get("outType") == "2":
            return web.Response(text=self.validation_code)
        return web.Response(text="")

    async def submit_sso_login(self, request):
        data = await request.post()
        self.login_posts.append(dict(data))
        response = web.Response(
            text="<html><script>window.location.href='/iportal';</script></html>",
            content_type="text/html",
        )
        if (
            data.get("username") == "user1"
            and data.get("password") == "pass1"
            and data.get("vidcode") == self.validation_code
        ):
            response.set_cookie("session", self.session_cookie)
        return response

    async def iportal(self, _request):
        return web.Response(text="iClass")

    def _session_ok(self, request) -> bool:
        return request.cookies.get("session") == self.session_cookie

    async def current_semester_api(self, request):
        self.current_semester_requests += 1
        if self.api_redirects_to_sso:
            raise web.HTTPFound("/auth/realms/TKU/protocol/openid-connect/auth")
        if not self._session_ok(request):
            return web.Response(status=401, text="unauthorized")
        return web.json_response({"academic_year": {"id": 114}, "semester": {"id": 2}})

    async def rollcalls_api(self, request):
        if not self._session_ok(request):
            return web.Response(status=401, text="unauthorized")
        return web.json_response({"rollcalls": []})

    async def sso_auth_page(self, _request):
        return web.Response(text="<html>sso auth</html>", content_type="text/html")

    async def start(self):
        if web is None:
            raise unittest.SkipTest("aiohttp.web is required for TKU fast SSO tests")
        app = web.Application()
        app.router.add_get("/login", self.login_page)
        app.router.add_get("/NEAI/logineb.jsp", self.sso_login_form)
        app.router.add_route("*", "/NEAI/ImageValidate", self.image_validate)
        app.router.add_post("/NEAI/login2.do", self.submit_sso_login)
        app.router.add_get("/iportal", self.iportal)
        app.router.add_get("/api/current-semester-info", self.current_semester_api)
        app.router.add_get("/api/radar/rollcalls", self.rollcalls_api)
        app.router.add_get("/auth/realms/TKU/protocol/openid-connect/auth", self.sso_auth_page)
        self.runner = web.AppRunner(app)
        await self.runner.setup()
        self.site = web.TCPSite(self.runner, "127.0.0.1", 0)
        await self.site.start()
        port = self.site._server.sockets[0].getsockname()[1]
        self.base_url = "http://127.0.0.1:{}".format(port)
        return self

    async def close(self) -> None:
        if self.runner is not None:
            await self.runner.cleanup()
        self.runner = None
        self.site = None
        self.base_url = ""

    async def __aenter__(self):
        return await self.start()

    async def __aexit__(self, _exc_type, _exc, _tb):
        await self.close()


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

    async def test_fetch_user_id_parses_app_runtime_user(self) -> None:
        session = MagicMock()
        session.cookie_jar = FakeCookieJar()
        session.get.return_value = make_context_manager(
            make_response(
                text='''<script>window.APPRuntime = {"USER": {"id": 238730}};</script>'''
            )
        )
        client = tron_http.TronHttpClient(session)

        user_id = await client.fetch_user_id()

        self.assertEqual(user_id, 238730)
        session.get.assert_called_once_with(tron_http.TRON)

    async def test_fetch_user_id_returns_none_when_app_runtime_missing(self) -> None:
        session = MagicMock()
        session.cookie_jar = FakeCookieJar()
        session.get.return_value = make_context_manager(
            make_response(text="<html><body>home</body></html>")
        )
        client = tron_http.TronHttpClient(session)

        user_id = await client.fetch_user_id()

        self.assertIsNone(user_id)

    async def test_client_accepts_custom_provider_endpoints(self) -> None:
        session = MagicMock()
        session.cookie_jar = FakeCookieJar([FakeCookie("session", "school.example")])
        session.get.return_value = make_context_manager(
            make_response(
                text='''<script>window.APPRuntime = {"USER": {"id": 123}};</script>'''
            )
        )
        endpoints = tron_http.endpoints_from_provider(
            {
                "base_url": "https://school.example",
                "login_url": "https://identity.example/login",
                "rollcalls_url": "https://school.example/api/rollcalls",
            }
        )
        client = tron_http.TronHttpClient(session, endpoints=endpoints)

        user_id = await client.fetch_user_id()

        self.assertEqual(user_id, 123)
        self.assertEqual(endpoints.session_cookie_domain, "school.example")
        self.assertTrue(tron_http.has_session_cookie(session, "school.example"))
        self.assertFalse(tron_http.has_session_cookie(session, "ilearn.thu.edu.tw"))
        session.get.assert_called_once_with("https://school.example")

    async def test_public_cloud_login_view_builds_email_form(self) -> None:
        session = MagicMock()
        session.cookie_jar = FakeCookieJar()
        html = """
        <html>
          <login-view
            email-login-hidden-tag='<input id="next" name="next" type="hidden" value="/user/index">'
            :email-login-form='{"captcha_code": "", "email": "", "next": null, "org_id": "", "password": "", "remember": false, "submit": false}'
            :org-id='0'
          ></login-view>
        </html>
        """
        session.get.return_value = make_context_manager(
            make_response(url="https://www.tronclass.com.tw/login", text=html)
        )
        endpoints = tron_http.endpoints_from_provider(tron.get_provider("tronclass").to_config())
        client = tron_http.TronHttpClient(session, endpoints=endpoints)

        form = await client.fetch_login_form()

        self.assertEqual(form.action_url, "https://www.tronclass.com.tw/login?next=%2Fuser%2Findex&login=email")
        self.assertEqual(form.username_field, "email")
        self.assertEqual(form.fields["next"], "/user/index")
        self.assertEqual(form.fields["org_id"], "")
        self.assertEqual(form.fields["submit"], "login")

    async def test_public_cloud_submit_uses_email_field(self) -> None:
        session = MagicMock()
        session.cookie_jar = FakeCookieJar([FakeCookie("session", "www.tronclass.com.tw")])
        session.post.return_value = make_context_manager(
            make_response(url="https://www.tronclass.com.tw/user/index")
        )
        endpoints = tron_http.endpoints_from_provider(tron.get_provider("tronclass").to_config())
        client = tron_http.TronHttpClient(session, endpoints=endpoints)
        form = tron_http.LoginForm(
            action_url="https://www.tronclass.com.tw/login?login=email",
            fields={"next": "", "org_id": "", "submit": "login"},
            username_field="email",
        )

        outcome = await client.submit_login(form, "student@example.com", "pass1")

        self.assertTrue(outcome.has_session)
        session.post.assert_called_once_with(
            "https://www.tronclass.com.tw/login?login=email",
            data={
                "next": "",
                "org_id": "",
                "submit": "login",
                "email": "student@example.com",
                "password": "pass1",
            },
        )

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
        self.original_completed_radar_rollcalls = copy.deepcopy(tron.COMPLETED_RADAR_ROLLCALLS)
        self.original_completed_qr_rollcalls = copy.deepcopy(tron.COMPLETED_QR_ROLLCALLS)
        self.original_last_rollcall_progress = copy.deepcopy(tron.LAST_ROLLCALL_PROGRESS)
        self.original_tron_user = os.environ.get("TRON_USER")
        self.original_tron_pass = os.environ.get("TRON_PASS")
        self.original_last_login_result = tron.LAST_LOGIN_RESULT
        self.original_base_dir = tron.BASE_DIR
        self.temp_dir = make_workspace_temp_dir()
        tron.BASE_DIR = self.temp_dir
        tron.cnt = 0
        tron.IS_LOGGING_IN = False
        tron.COMPLETED_NUMBER_ROLLCALLS.clear()
        tron.COMPLETED_RADAR_ROLLCALLS.clear()
        tron.COMPLETED_QR_ROLLCALLS.clear()
        tron.LAST_ROLLCALL_PROGRESS.clear()
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
        tron.COMPLETED_RADAR_ROLLCALLS.clear()
        tron.COMPLETED_RADAR_ROLLCALLS.update(copy.deepcopy(self.original_completed_radar_rollcalls))
        tron.COMPLETED_QR_ROLLCALLS.clear()
        tron.COMPLETED_QR_ROLLCALLS.update(copy.deepcopy(self.original_completed_qr_rollcalls))
        tron.LAST_ROLLCALL_PROGRESS.clear()
        tron.LAST_ROLLCALL_PROGRESS.update(copy.deepcopy(self.original_last_rollcall_progress))
        tron.LAST_LOGIN_RESULT = self.original_last_login_result
        tron.BASE_DIR = self.original_base_dir
        shutil.rmtree(self.temp_dir, ignore_errors=True)
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

    async def test_fju_manual_cookie_provider_skips_password_login_without_cookie(self) -> None:
        session = MagicMock()
        session.cookie_jar = MagicMock()
        tron.CONFIG.clear()
        tron.CONFIG.update(
            tron.normalize_config(
                {
                    "account": {"user": "fju-user", "passwd": "pass1"},
                    "provider": {"current": "fju"},
                }
            )
        )

        with (
            patch.object(tron, "has_session_cookie", return_value=False),
            patch.object(tron, "TronHttpClient") as client_factory,
            patch.object(tron, "browser_assisted_login", AsyncMock()) as browser_login,
            patch.object(tron, "log_print") as log_print,
        ):
            result = await tron.login(session)

        self.assertFalse(result.ok)
        self.assertEqual(result.status, "manual_cookie_required")
        self.assertEqual(result.credential_source, "manual_cookie")
        client_factory.assert_not_called()
        browser_login.assert_not_awaited()
        log_print.assert_not_called()

    async def test_fju_manual_cookie_provider_uses_common_rollcalls_when_cookie_exists(self) -> None:
        if URL is None or web is None:
            self.skipTest("aiohttp.web and yarl are required for cookie-scoped fake-server tests")
        original_config = copy.deepcopy(tron.CONFIG)
        async with FakeTronServer() as server:
            try:
                tron.CONFIG.clear()
                tron.CONFIG.update(
                    tron.normalize_config(
                        {
                            "account": {"user": "fju-user", "passwd": ""},
                            "provider": {
                                "current": "fju",
                                "available": {
                                    "fju": {
                                        "base_url": server.base_url,
                                        "login_url": server.login_url,
                                    }
                                },
                            },
                        }
                    )
                )
                async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                    session.cookie_jar.update_cookies(
                        {"session": server.session_cookie},
                        response_url=URL(server.base_url),
                    )
                    result = await tron.check_rollcall(session, 1)
            finally:
                tron.CONFIG.clear()
                tron.CONFIG.update(original_config)

        self.assertEqual(result, "not call")

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
        self.assertTrue(
            any("登入成功！綁定帳號：user1" in call.args[0] for call in log_print.call_args_list)
        )

    def _configure_local_tku_provider(self, server: FakeTkuSsoServer) -> None:
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
                        "current": "tku",
                        "available": {
                            "tku": {
                                "key": "tku",
                                "base_url": server.base_url,
                                "login_url": server.login_url,
                                "rollcalls_url": server.rollcalls_url,
                                "current_semester_url": server.current_semester_url,
                                "courses_url": server.courses_url,
                                "auth_flow": "tku_sso_browser",
                                "support_level": "ready",
                            }
                        },
                    },
                    "auth": {
                        "browser_assisted_login": {
                            "enabled": False,
                            "headless": True,
                            "timeout_ms": 5000,
                        }
                    },
                }
            )
        )

    def _patch_local_tku_hosts(self, server: FakeTkuSsoServer):
        return (
            patch.object(tron_http, "TKU_ICLASS_HOST", "127.0.0.1"),
            patch.object(tron_http, "TKU_SSO_HOST", "127.0.0.1"),
            patch.object(
                tron_http,
                "TKU_SSO_LOGIN_FORM_URL_TEMPLATE",
                server.base_url + "/NEAI/logineb.jsp?myurl={}",
            ),
        )

    async def test_tku_fast_sso_login_succeeds_without_browser_assist(self) -> None:
        async with FakeTkuSsoServer() as server:
            self._configure_local_tku_provider(server)
            async with tron.aiohttp.ClientSession(cookie_jar=tron.aiohttp.CookieJar(unsafe=True)) as session:
                host_patch, sso_host_patch, template_patch = self._patch_local_tku_hosts(server)
                with (
                    host_patch,
                    sso_host_patch,
                    template_patch,
                    patch.object(tron, "browser_assisted_login", AsyncMock()) as browser_login,
                    patch.object(tron, "log_print"),
                ):
                    result = await tron.login(session)

        self.assertTrue(result.ok)
        self.assertEqual(result.credential_source, "config")
        self.assertEqual(len(server.login_posts), 1)
        self.assertEqual(server.login_posts[0]["vidcode"], server.validation_code)
        self.assertGreaterEqual(server.current_semester_requests, 1)
        browser_login.assert_not_awaited()

    async def test_tku_fast_sso_form_change_falls_back_to_browser_assist(self) -> None:
        async with FakeTkuSsoServer() as server:
            server.break_form = True
            self._configure_local_tku_provider(server)
            assisted = make_login_result(
                "success",
                credential_source="browser_assist:config",
                final_url=server.base_url + "/iportal",
            )
            async with tron.aiohttp.ClientSession(cookie_jar=tron.aiohttp.CookieJar(unsafe=True)) as session:
                host_patch, sso_host_patch, template_patch = self._patch_local_tku_hosts(server)
                with (
                    host_patch,
                    sso_host_patch,
                    template_patch,
                    patch.object(tron, "browser_assisted_login", AsyncMock(return_value=assisted)) as browser_login,
                    patch.object(tron, "log_print"),
                ):
                    result = await tron.login(session)

        self.assertTrue(result.ok)
        self.assertEqual(result.credential_source, "browser_assist:config")
        browser_login.assert_awaited_once()

    async def test_tku_fast_sso_image_validate_failure_falls_back_to_browser_assist(self) -> None:
        async with FakeTkuSsoServer() as server:
            server.fail_image_validate = True
            self._configure_local_tku_provider(server)
            assisted = make_login_result(
                "success",
                credential_source="browser_assist:config",
                final_url=server.base_url + "/iportal",
            )
            async with tron.aiohttp.ClientSession(cookie_jar=tron.aiohttp.CookieJar(unsafe=True)) as session:
                host_patch, sso_host_patch, template_patch = self._patch_local_tku_hosts(server)
                with (
                    host_patch,
                    sso_host_patch,
                    template_patch,
                    patch.object(tron, "browser_assisted_login", AsyncMock(return_value=assisted)) as browser_login,
                    patch.object(tron, "log_print"),
                ):
                    result = await tron.login(session)

        self.assertTrue(result.ok)
        self.assertEqual(result.credential_source, "browser_assist:config")
        browser_login.assert_awaited_once()

    async def test_tku_fast_sso_api_validation_failure_falls_back_to_browser_assist(self) -> None:
        async with FakeTkuSsoServer() as server:
            server.api_redirects_to_sso = True
            self._configure_local_tku_provider(server)
            assisted = make_login_result(
                "success",
                credential_source="browser_assist:config",
                final_url=server.base_url + "/iportal",
            )
            async with tron.aiohttp.ClientSession(cookie_jar=tron.aiohttp.CookieJar(unsafe=True)) as session:
                host_patch, sso_host_patch, template_patch = self._patch_local_tku_hosts(server)
                with (
                    host_patch,
                    sso_host_patch,
                    template_patch,
                    patch.object(tron, "browser_assisted_login", AsyncMock(return_value=assisted)) as browser_login,
                    patch.object(tron, "log_print"),
                ):
                    result = await tron.login(session)

        self.assertTrue(result.ok)
        self.assertEqual(result.credential_source, "browser_assist:config")
        self.assertGreaterEqual(server.current_semester_requests, 1)
        browser_login.assert_awaited_once()

    async def test_tku_login_auto_uses_browser_assist_when_form_parser_fails(self) -> None:
        session = MagicMock()
        session.cookie_jar = MagicMock()
        session.cookie_jar.clear = MagicMock()
        tron.CONFIG["provider"]["current"] = "tku"
        tron.CONFIG["auth"]["browser_assisted_login"]["enabled"] = False
        tron.CONFIG["account"]["user"] = "user1"
        tron.CONFIG["account"]["passwd"] = "pass1"
        client = MagicMock()
        client.fetch_login_form = AsyncMock(
            side_effect=tron_http.LoginPageChangedError("TKU SSO bootstrap page")
        )
        assisted = make_login_result(
            "success",
            credential_source="browser_assist:config",
            final_url="https://iclass.tku.edu.tw/iportal#/",
        )

        with (
            patch.object(tron, "TronHttpClient", return_value=client),
            patch.object(tron, "browser_assisted_login", AsyncMock(return_value=assisted)) as browser_login,
            patch.object(tron, "log_print"),
            patch.object(tron, "log", return_value=True),
        ):
            result = await tron.login(session)

        self.assertTrue(result.ok)
        self.assertEqual(result.credential_source, "browser_assist:config")
        browser_login.assert_awaited_once_with(
            session,
            user="user1",
            passwd="pass1",
            credential_source="config",
        )

    def test_tku_browser_assisted_login_status_is_provider_auto(self) -> None:
        tron.CONFIG["provider"]["current"] = "tku"
        tron.CONFIG["auth"]["browser_assisted_login"]["enabled"] = False

        status = tron.browser_assisted_login_status()

        self.assertTrue(status["enabled"])
        self.assertFalse(status["configured_enabled"])
        self.assertTrue(status["auto_for_provider"])

    def test_thu_browser_assisted_login_status_remains_config_opt_in(self) -> None:
        tron.CONFIG["provider"]["current"] = "thu"
        tron.CONFIG["auth"]["browser_assisted_login"]["enabled"] = False

        status = tron.browser_assisted_login_status()

        self.assertFalse(status["enabled"])
        self.assertFalse(status["auto_for_provider"])

    async def test_login_disables_verify_ssl_and_retries_on_certificate_error(self) -> None:
        session = MagicMock()
        session.cookie_jar = MagicMock()
        session.cookie_jar.clear = MagicMock()
        tron.CONFIG["account"]["user"] = "user1"
        tron.CONFIG["account"]["passwd"] = "pass1"
        tron.CONFIG["config"]["verify_ssl"] = True
        first_client = MagicMock()
        first_client.fetch_login_form = AsyncMock(
            side_effect=tron.aiohttp.ClientError(
                "Cannot connect to host tcidentity.thu.edu.tw:443 ssl:True "
                "[SSLCertVerificationError: certificate verify failed: "
                "self-signed certificate in certificate chain]"
            )
        )
        second_client = MagicMock()
        second_client.fetch_login_form = AsyncMock(
            return_value=tron_http.LoginForm("https://example.com/login", {})
        )
        second_client.submit_login = AsyncMock(
            return_value=tron_http.LoginOutcome(
                final_url="https://ilearn.thu.edu.tw/home",
                has_session=True,
            )
        )

        with (
            patch.object(tron, "TronHttpClient", side_effect=[first_client, second_client]) as client_factory,
            patch.object(tron, "has_session_cookie", return_value=True),
            patch.object(tron, "save_config", return_value=True) as save_config,
            patch.object(tron, "log", return_value=True),
            patch.object(tron, "log_print") as log_print,
        ):
            result = await tron.login(session)

        self.assertTrue(result.ok)
        self.assertFalse(tron.CONFIG["config"]["verify_ssl"])
        save_config.assert_called_once()
        self.assertEqual(client_factory.call_count, 2)
        self.assertIs(client_factory.call_args_list[1].kwargs["request_ssl"], False)
        first_client.fetch_login_form.assert_awaited_once()
        second_client.fetch_login_form.assert_awaited_once()
        second_client.submit_login.assert_awaited_once()
        self.assertEqual(session.cookie_jar.clear.call_count, 2)
        self.assertTrue(
            any("config.verify_ssl 改成 false" in call.args[0] for call in log_print.call_args_list)
        )

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

    async def test_check_rollcall_invokes_radar_for_radar_rollcall(self) -> None:
        tron.CONFIG["provider"]["current"] = "tku"
        session = MagicMock()
        radar_rollcall = {"is_radar": True, "rollcall_id": 43}
        client = MagicMock()
        client.fetch_rollcalls = AsyncMock(
            return_value=tron_http.RollcallsResult(
                url=tron_http.ROLLCALLS_URL,
                status_code=200,
                payload={"rollcalls": [radar_rollcall]},
            )
        )
        radar_mock = AsyncMock(return_value=True)
        mes_mock = AsyncMock()

        with (
            patch.object(tron, "TronHttpClient", return_value=client),
            patch.object(tron, "log", return_value=True),
            patch.object(tron, "radar", radar_mock),
            patch.object(tron, "mes", mes_mock),
            patch.object(tron, "log_print"),
        ):
            result = await tron.check_rollcall(session, 5)

        self.assertEqual(result, "is_radar")
        radar_mock.assert_awaited_once_with(session, radar_rollcall)
        mes_mock.assert_awaited_once()
        self.assertIn("43", tron.COMPLETED_RADAR_ROLLCALLS)

    async def test_check_rollcall_skips_radar_rollcall_after_successful_attempt(self) -> None:
        session = MagicMock()
        radar_rollcall = {"is_radar": True, "rollcall_id": 43}
        tron.COMPLETED_RADAR_ROLLCALLS["43"] = True
        client = MagicMock()
        client.fetch_rollcalls = AsyncMock(
            return_value=tron_http.RollcallsResult(
                url=tron_http.ROLLCALLS_URL,
                status_code=200,
                payload={"rollcalls": [radar_rollcall]},
            )
        )
        radar_mock = AsyncMock()
        mes_mock = AsyncMock()

        with (
            patch.object(tron, "TronHttpClient", return_value=client),
            patch.object(tron, "log", return_value=True),
            patch.object(tron, "radar", radar_mock),
            patch.object(tron, "mes", mes_mock),
            patch.object(tron, "log_print"),
        ):
            result = await tron.check_rollcall(session, 6)

        self.assertEqual(result, "雷達點名已處理")
        radar_mock.assert_not_awaited()
        mes_mock.assert_not_awaited()

    async def test_check_rollcall_retries_radar_after_failure(self) -> None:
        session = MagicMock()
        radar_rollcall = {"is_radar": True, "rollcall_id": 100}
        client = MagicMock()
        client.fetch_rollcalls = AsyncMock(
            return_value=tron_http.RollcallsResult(
                url=tron_http.ROLLCALLS_URL,
                status_code=200,
                payload={"rollcalls": [radar_rollcall]},
            )
        )
        radar_mock = AsyncMock(return_value=False)
        mes_mock = AsyncMock()

        with (
            patch.object(tron, "TronHttpClient", return_value=client),
            patch.object(tron, "log", return_value=True),
            patch.object(tron, "radar", radar_mock),
            patch.object(tron, "mes", mes_mock),
            patch.object(tron, "log_print"),
        ):
            first = await tron.check_rollcall(session, 5)
            second = await tron.check_rollcall(session, 6)

        self.assertEqual(first, "radar_failed")
        self.assertEqual(second, "radar_failed")
        self.assertNotIn("100", tron.COMPLETED_RADAR_ROLLCALLS)
        self.assertEqual(radar_mock.await_count, 2)
        self.assertEqual(mes_mock.await_count, 2)

    def test_parse_radar_answer_result_extracts_scope_distance(self) -> None:
        result = tron.parse_radar_answer_result(
            400,
            json.dumps(
                {
                    "distance": 13090027.227394557,
                    "error_code": "radar_out_of_rollcall_scope",
                    "id": 18742077,
                    "message": "out of scope",
                }
            ),
        )

        self.assertFalse(result.success)
        self.assertTrue(result.is_scope_distance)
        self.assertEqual(result.distance, 13090027.227394557)

    def test_build_radar_signal_includes_md5_and_timestamp(self) -> None:
        expected_hash = hashlib.md5("nonce-device-2387301715000123456".encode("utf-8")).hexdigest()

        signal = tron.build_radar_signal("nonce-", "device-", 238730, 1715000123456)

        self.assertEqual(signal, f"{expected_hash},1715000123456")

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
            patch.object(tron, "try_clipboard_qr_autosubmit", AsyncMock(return_value=False)),
        ):
            first = await tron.check_rollcall(session, 1)
            second = await tron.check_rollcall(session, 2)

        self.assertEqual(first, "unsupported_qrcode")
        self.assertEqual(second, "unsupported_qrcode")
        self.assertEqual(mes_mock.await_count, 1)
        log_print.assert_called_once_with("偵測到 QR Code 點名，請貼上 QR 內容後手動送出。")

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
        self.original_cookie_cache_restored = tron.COOKIE_CACHE_RESTORED
        self.original_base_dir = tron.BASE_DIR
        self.temp_dir = make_workspace_temp_dir()
        tron.BASE_DIR = self.temp_dir
        tron.cnt = 0
        tron.IS_LOGGING_IN = False
        tron.COOKIE_CACHE_RESTORED = False

    def tearDown(self) -> None:
        tron.cnt = self.original_cnt
        tron.IS_LOGGING_IN = self.original_is_logging_in
        tron.LAST_LOGIN_RESULT = self.original_last_login_result
        tron.COOKIE_CACHE_RESTORED = self.original_cookie_cache_restored
        tron.BASE_DIR = self.original_base_dir
        shutil.rmtree(self.temp_dir, ignore_errors=True)

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
                "poll_rollcall_decision",
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
                "poll_rollcall_decision",
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
            any("檢查點名時發生錯誤" in call.args[0] for call in mes_mock.await_args_list)
        )
        self.assertTrue(
            any("檢查點名時發生錯誤" in call.args[0] for call in log_print.call_args_list)
        )

    async def test_monitor_loop_auto_retries_transient_login_failure(self) -> None:
        session = MagicMock()
        session.cookie_jar = MagicMock()
        shutdown_event = asyncio.Event()

        async def fake_poll_rollcall(_session, _cnt):
            shutdown_event.set()
            return {"status": "not_call", "rollcall": None, "rollcall_type": "", "message": ""}

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
            patch.object(tron, "poll_rollcall_decision", AsyncMock(side_effect=fake_poll_rollcall)),
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

    async def test_monitor_loop_folds_progress_into_status_and_resets_on_not_call(self) -> None:
        session = MagicMock()
        session.cookie_jar = MagicMock()
        shutdown_event = asyncio.Event()
        poll_count = 0

        async def fake_poll_rollcall(_session, _cnt):
            nonlocal poll_count
            poll_count += 1
            if poll_count == 1:
                return {
                    "status": "unsupported_qrcode",
                    "rollcall": {"rollcall_id": "30055", "is_qrcode": True},
                    "rollcall_type": "qrcode",
                    "message": "偵測到 QR Code 點名，請貼上 QR 內容後手動送出。",
                }
            return {"status": "not_call", "rollcall": None, "rollcall_type": "", "message": ""}

        async def fake_progress(_session, _rollcall_id):
            return {
                "ok": True,
                "rollcall_id": "30055",
                "total": 1,
                "present": 1,
                "answered": 1,
                "present_rate_known": True,
                "present_rate_percent": 100.0,
                "attendance_rate_text": "點名 #30055 簽到率 100.0%（1/1）",
                "monitor_status": "on_call_fine",
            }

        async def fake_sleep(_event, _seconds):
            if poll_count >= 2:
                shutdown_event.set()

        with (
            patch.object(
                tron,
                "login",
                AsyncMock(return_value=make_login_result("success", final_url="https://ilearn.thu.edu.tw/home")),
            ),
            patch.object(tron, "has_session_cookie", return_value=True),
            patch.object(tron, "poll_rollcall_decision", AsyncMock(side_effect=fake_poll_rollcall)),
            patch.object(tron, "handle_rollcall_decision", AsyncMock(return_value="is_qrcode")),
            patch("troTHU.monitor_runtime._fetch_monitor_rollcall_progress", AsyncMock(side_effect=fake_progress)),
            patch.object(
                tron,
                "get_schedule_for_day",
                return_value={"enable": True, "range": ["00:00", "23:59"]},
            ),
            patch.object(tron, "parse_schedule_range", return_value=(dt_time(0, 0), dt_time(23, 59))),
            patch.object(tron, "sleep_or_shutdown", AsyncMock(side_effect=fake_sleep)),
            patch.object(tron, "status_print") as status_print,
            patch.object(tron, "log_print"),
            patch.object(tron, "mes", AsyncMock()),
        ):
            await tron.monitor_loop(session, shutdown_event)

        legacy_lines = [call.args[0] for call in status_print.call_args_list if call.args]
        self.assertTrue(any("點名 #30055 簽到率 100.0%（1/1） · on_call_fine" in line for line in legacy_lines))
        self.assertTrue(any("目前無點名" in line for line in legacy_lines))
        self.assertEqual(tron.MONITOR_STATUS.get("detail"), "目前無點名")
        self.assertEqual(tron.MONITOR_STATUS.get("rollcall_status"), "")

    async def test_monitor_loop_keeps_attendance_rate_when_poll_turns_on_call_fine(self) -> None:
        session = MagicMock()
        session.cookie_jar = MagicMock()
        shutdown_event = asyncio.Event()
        poll_count = 0

        async def fake_poll_rollcall(_session, _cnt):
            nonlocal poll_count
            poll_count += 1
            if poll_count == 1:
                return {
                    "status": "unsupported_qrcode",
                    "rollcall": {"rollcall_id": "30063", "is_qrcode": True},
                    "rollcall_type": "qrcode",
                    "message": "偵測到 QR Code 點名，請貼上 QR 內容後手動送出。",
                }
            return {"status": "on_call_fine", "rollcall": None, "rollcall_type": "", "message": ""}

        async def fake_progress(_session, rollcall_id):
            return {
                "ok": True,
                "rollcall_id": rollcall_id,
                "total": 16,
                "present": 5,
                "answered": 5,
                "present_rate_known": True,
                "present_rate_percent": 31.25,
                "attendance_rate_text": "點名 #{} 簽到率 31.2%（5/16）".format(rollcall_id),
                "monitor_status": "on_call_fine",
            }

        async def fake_sleep(_event, _seconds):
            if poll_count >= 2:
                shutdown_event.set()

        progress_mock = AsyncMock(side_effect=fake_progress)
        with (
            patch.object(tron, "login", AsyncMock(return_value=make_login_result("success"))),
            patch.object(tron, "has_session_cookie", return_value=True),
            patch.object(tron, "poll_rollcall_decision", AsyncMock(side_effect=fake_poll_rollcall)),
            patch.object(tron, "teacher_assist_configured", return_value=True),
            patch.object(tron, "prepare_teacher_assisted_qr", AsyncMock(return_value={"ok": True, "status": "prepared", "student_rollcall_id": "30063"})),
            patch.object(tron, "handle_rollcall_decision", AsyncMock(return_value="is_qrcode")),
            patch.object(tron, "announce_rollcall_start", AsyncMock()),
            patch("troTHU.monitor_runtime._fetch_monitor_rollcall_progress", progress_mock),
            patch.object(tron, "get_schedule_for_day", return_value={"enable": True, "range": ["00:00", "23:59"]}),
            patch.object(tron, "parse_schedule_range", return_value=(dt_time(0, 0), dt_time(23, 59))),
            patch.object(tron, "sleep_or_shutdown", AsyncMock(side_effect=fake_sleep)),
            patch.object(tron, "status_print") as status_print,
            patch.object(tron, "log_print"),
            patch.object(tron, "mes", AsyncMock()),
        ):
            await tron.monitor_loop(session, shutdown_event, ignore_attendance_rate_gate=True)

        self.assertEqual([call.args[1] for call in progress_mock.call_args_list], ["30063", "30063"])
        legacy_lines = [call.args[0] for call in status_print.call_args_list if call.args]
        self.assertTrue(any("點名 #30063 簽到率 31.2%（5/16） · on_call_fine" in line for line in legacy_lines))
        self.assertFalse(any("on_call_fine · on_call_fine" in line for line in legacy_lines))
        self.assertEqual(tron.MONITOR_STATUS.get("detail"), "點名 #30063 簽到率 31.2%（5/16）")
        self.assertEqual(tron.MONITOR_STATUS.get("rollcall_status"), "on_call_fine")

    async def test_monitor_loop_startup_idle_poll_interval_is_one_second(self) -> None:
        session = MagicMock()
        session.cookie_jar = MagicMock()
        shutdown_event = asyncio.Event()
        sleep_seconds = []

        async def fake_sleep(_event, seconds):
            sleep_seconds.append(seconds)
            shutdown_event.set()

        with (
            patch.object(tron, "login", AsyncMock(return_value=make_login_result("success"))),
            patch.object(tron, "has_session_cookie", return_value=True),
            patch.object(tron, "poll_rollcall_decision", AsyncMock(return_value={"status": "not_call", "rollcall": None, "rollcall_type": "", "message": ""})),
            patch.object(tron, "get_schedule_for_day", return_value={"enable": True, "range": ["00:00", "23:59"]}),
            patch.object(tron, "parse_schedule_range", return_value=(dt_time(0, 0), dt_time(23, 59))),
            patch.object(tron, "sleep_or_shutdown", AsyncMock(side_effect=fake_sleep)),
            patch.object(tron, "log_print"),
            patch.object(tron, "mes", AsyncMock()),
        ):
            await tron.monitor_loop(session, shutdown_event)

        self.assertEqual(sleep_seconds[-1], 1.0)

    async def test_monitor_loop_idle_poll_interval_is_five_seconds_after_startup_window(self) -> None:
        session = MagicMock()
        session.cookie_jar = MagicMock()
        shutdown_event = asyncio.Event()
        sleep_seconds = []

        async def fake_sleep(_event, seconds):
            sleep_seconds.append(seconds)
            shutdown_event.set()

        with (
            patch("troTHU.monitor_runtime.MONITOR_STARTUP_FAST_WINDOW_SECONDS", 0.0),
            patch.object(tron, "login", AsyncMock(return_value=make_login_result("success"))),
            patch.object(tron, "has_session_cookie", return_value=True),
            patch.object(tron, "poll_rollcall_decision", AsyncMock(return_value={"status": "not_call", "rollcall": None, "rollcall_type": "", "message": ""})),
            patch.object(tron, "get_schedule_for_day", return_value={"enable": True, "range": ["00:00", "23:59"]}),
            patch.object(tron, "parse_schedule_range", return_value=(dt_time(0, 0), dt_time(23, 59))),
            patch.object(tron, "sleep_or_shutdown", AsyncMock(side_effect=fake_sleep)),
            patch.object(tron, "log_print"),
            patch.object(tron, "mes", AsyncMock()),
        ):
            await tron.monitor_loop(session, shutdown_event)

        self.assertEqual(sleep_seconds[-1], 5.0)

    async def test_monitor_loop_idle_poll_returns_to_five_after_rollcall_flow_ends(self) -> None:
        session = MagicMock()
        session.cookie_jar = MagicMock()
        shutdown_event = asyncio.Event()
        sleep_seconds = []
        poll_count = 0

        async def fake_poll(_session, _cnt):
            nonlocal poll_count
            poll_count += 1
            if poll_count == 1:
                return {"status": "is_number", "rollcall": {"rollcall_id": "42", "is_number": True}, "rollcall_type": "number", "message": ""}
            return {"status": "not_call", "rollcall": None, "rollcall_type": "", "message": ""}

        async def fake_progress(_session, _rollcall_id):
            return {
                "ok": True,
                "rollcall_id": "42",
                "total": 20,
                "present": 3,
                "present_rate_known": True,
                "present_rate_percent": 15.0,
                "attendance_rate_text": "點名 #42 簽到率 15.0%（3/20）",
                "monitor_status": "",
            }

        async def fake_sleep(_event, seconds):
            sleep_seconds.append(seconds)
            if poll_count >= 2:
                shutdown_event.set()

        with (
            patch.object(tron, "login", AsyncMock(return_value=make_login_result("success"))),
            patch.object(tron, "has_session_cookie", return_value=True),
            patch.object(tron, "poll_rollcall_decision", AsyncMock(side_effect=fake_poll)),
            patch.object(tron, "handle_rollcall_decision", AsyncMock(return_value="is_number")),
            patch("troTHU.monitor_runtime._fetch_monitor_rollcall_progress", AsyncMock(side_effect=fake_progress)),
            patch.object(tron, "get_schedule_for_day", return_value={"enable": True, "range": ["00:00", "23:59"]}),
            patch.object(tron, "parse_schedule_range", return_value=(dt_time(0, 0), dt_time(23, 59))),
            patch.object(tron, "sleep_or_shutdown", AsyncMock(side_effect=fake_sleep)),
            patch.object(tron, "log_print"),
            patch.object(tron, "mes", AsyncMock()),
        ):
            await tron.monitor_loop(session, shutdown_event)

        self.assertEqual(sleep_seconds, [0.5, 5.0])

    async def test_monitor_loop_waits_below_attendance_rate_gate(self) -> None:
        session = MagicMock()
        session.cookie_jar = MagicMock()
        shutdown_event = asyncio.Event()
        sleep_seconds = []
        handle = AsyncMock(return_value="is_number")

        async def fake_sleep(_event, seconds):
            sleep_seconds.append(seconds)
            shutdown_event.set()

        async def fake_progress(_session, _rollcall_id):
            return {
                "ok": True,
                "rollcall_id": "42",
                "total": 1000,
                "present": 149,
                "present_rate_known": True,
                "present_rate_percent": 14.9,
                "attendance_rate_text": "點名 #42 簽到率 14.9%（149/1000）",
                "monitor_status": "",
            }

        with (
            patch.object(tron, "login", AsyncMock(return_value=make_login_result("success"))),
            patch.object(tron, "has_session_cookie", return_value=True),
            patch.object(tron, "poll_rollcall_decision", AsyncMock(return_value={"status": "is_number", "rollcall": {"rollcall_id": "42", "is_number": True}, "rollcall_type": "number", "message": ""})),
            patch.object(tron, "handle_rollcall_decision", handle),
            patch("troTHU.monitor_runtime._fetch_monitor_rollcall_progress", AsyncMock(side_effect=fake_progress)),
            patch.object(tron, "get_schedule_for_day", return_value={"enable": True, "range": ["00:00", "23:59"]}),
            patch.object(tron, "parse_schedule_range", return_value=(dt_time(0, 0), dt_time(23, 59))),
            patch.object(tron, "sleep_or_shutdown", AsyncMock(side_effect=fake_sleep)),
            patch.object(tron, "log_print"),
            patch.object(tron, "mes", AsyncMock()),
        ):
            await tron.monitor_loop(session, shutdown_event)

        handle.assert_not_awaited()
        self.assertEqual(sleep_seconds[-1], 0.5)

    async def test_monitor_loop_starts_at_equal_attendance_rate_gate(self) -> None:
        session = MagicMock()
        session.cookie_jar = MagicMock()
        shutdown_event = asyncio.Event()
        handle = AsyncMock(return_value="is_number")

        async def fake_sleep(_event, _seconds):
            shutdown_event.set()

        async def fake_progress(_session, _rollcall_id):
            return {
                "ok": True,
                "rollcall_id": "42",
                "total": 20,
                "present": 3,
                "present_rate_known": True,
                "present_rate_percent": 15.0,
                "attendance_rate_text": "點名 #42 簽到率 15.0%（3/20）",
                "monitor_status": "",
            }

        with (
            patch.object(tron, "login", AsyncMock(return_value=make_login_result("success"))),
            patch.object(tron, "has_session_cookie", return_value=True),
            patch.object(tron, "poll_rollcall_decision", AsyncMock(return_value={"status": "is_number", "rollcall": {"rollcall_id": "42", "is_number": True}, "rollcall_type": "number", "message": ""})),
            patch.object(tron, "handle_rollcall_decision", handle),
            patch("troTHU.monitor_runtime._fetch_monitor_rollcall_progress", AsyncMock(side_effect=fake_progress)),
            patch.object(tron, "get_schedule_for_day", return_value={"enable": True, "range": ["00:00", "23:59"]}),
            patch.object(tron, "parse_schedule_range", return_value=(dt_time(0, 0), dt_time(23, 59))),
            patch.object(tron, "sleep_or_shutdown", AsyncMock(side_effect=fake_sleep)),
            patch.object(tron, "log_print"),
            patch.object(tron, "mes", AsyncMock()),
        ):
            await tron.monitor_loop(session, shutdown_event)

        handle.assert_awaited_once()

    async def test_monitor_loop_ignore_gate_starts_with_unknown_rate(self) -> None:
        session = MagicMock()
        session.cookie_jar = MagicMock()
        shutdown_event = asyncio.Event()
        handle = AsyncMock(return_value="is_number")

        async def fake_sleep(_event, _seconds):
            shutdown_event.set()

        async def fake_progress(_session, _rollcall_id):
            return {"ok": True, "rollcall_id": "42", "total": 0, "present": 0, "present_rate_known": False}

        with (
            patch.object(tron, "login", AsyncMock(return_value=make_login_result("success"))),
            patch.object(tron, "has_session_cookie", return_value=True),
            patch.object(tron, "poll_rollcall_decision", AsyncMock(return_value={"status": "is_number", "rollcall": {"rollcall_id": "42", "is_number": True}, "rollcall_type": "number", "message": ""})),
            patch.object(tron, "handle_rollcall_decision", handle),
            patch("troTHU.monitor_runtime._fetch_monitor_rollcall_progress", AsyncMock(side_effect=fake_progress)),
            patch.object(tron, "get_schedule_for_day", return_value={"enable": True, "range": ["00:00", "23:59"]}),
            patch.object(tron, "parse_schedule_range", return_value=(dt_time(0, 0), dt_time(23, 59))),
            patch.object(tron, "sleep_or_shutdown", AsyncMock(side_effect=fake_sleep)),
            patch.object(tron, "log_print"),
            patch.object(tron, "mes", AsyncMock()),
        ):
            await tron.monitor_loop(session, shutdown_event, ignore_attendance_rate_gate=True)

        handle.assert_awaited_once()

    async def test_monitor_loop_qr_prepares_before_gate_without_submit(self) -> None:
        session = MagicMock()
        session.cookie_jar = MagicMock()
        shutdown_event = asyncio.Event()
        prepare = AsyncMock(return_value={"ok": True, "status": "prepared", "student_rollcall_id": "77"})
        handle = AsyncMock(return_value="is_qrcode")

        async def fake_sleep(_event, _seconds):
            shutdown_event.set()

        async def fake_progress(_session, _rollcall_id):
            return {
                "ok": True,
                "rollcall_id": "77",
                "total": 10,
                "present": 0,
                "present_rate_known": True,
                "present_rate_percent": 0.0,
                "attendance_rate_text": "點名 #77 簽到率 0.0%（0/10）",
                "monitor_status": "",
            }

        with (
            patch.object(tron, "login", AsyncMock(return_value=make_login_result("success"))),
            patch.object(tron, "has_session_cookie", return_value=True),
            patch.object(tron, "poll_rollcall_decision", AsyncMock(return_value={"status": "unsupported_qrcode", "rollcall": {"rollcall_id": "77", "is_qrcode": True}, "rollcall_type": "qrcode", "message": "QR"})),
            patch.object(tron, "teacher_assist_configured", return_value=True),
            patch.object(tron, "prepare_teacher_assisted_qr", prepare),
            patch.object(tron, "handle_rollcall_decision", handle),
            patch.object(tron, "announce_rollcall_start", AsyncMock()),
            patch("troTHU.monitor_runtime._fetch_monitor_rollcall_progress", AsyncMock(side_effect=fake_progress)),
            patch.object(tron, "get_schedule_for_day", return_value={"enable": True, "range": ["00:00", "23:59"]}),
            patch.object(tron, "parse_schedule_range", return_value=(dt_time(0, 0), dt_time(23, 59))),
            patch.object(tron, "sleep_or_shutdown", AsyncMock(side_effect=fake_sleep)),
            patch.object(tron, "log_print"),
            patch.object(tron, "mes", AsyncMock()),
        ):
            await tron.monitor_loop(session, shutdown_event)

        prepare.assert_awaited_once()
        handle.assert_not_awaited()

    async def test_monitor_loop_stops_prepared_qr_when_rollcall_ends(self) -> None:
        session = MagicMock()
        session.cookie_jar = MagicMock()
        shutdown_event = asyncio.Event()
        poll_count = 0
        stop_qr = AsyncMock(return_value={"ok": True, "status": "stopped", "stopped": 1})

        async def fake_poll(_session, _cnt):
            nonlocal poll_count
            poll_count += 1
            if poll_count == 1:
                return {"status": "unsupported_qrcode", "rollcall": {"rollcall_id": "77", "is_qrcode": True}, "rollcall_type": "qrcode", "message": "QR"}
            return {"status": "not_call", "rollcall": None, "rollcall_type": "", "message": ""}

        async def fake_sleep(_event, _seconds):
            if poll_count >= 2:
                shutdown_event.set()

        async def fake_progress(_session, _rollcall_id):
            return {
                "ok": True,
                "rollcall_id": "77",
                "total": 10,
                "present": 0,
                "present_rate_known": True,
                "present_rate_percent": 0.0,
                "attendance_rate_text": "點名 #77 簽到率 0.0%（0/10）",
                "monitor_status": "",
            }

        with (
            patch.object(tron, "login", AsyncMock(return_value=make_login_result("success"))),
            patch.object(tron, "has_session_cookie", return_value=True),
            patch.object(tron, "poll_rollcall_decision", AsyncMock(side_effect=fake_poll)),
            patch.object(tron, "teacher_assist_configured", return_value=True),
            patch.object(tron, "prepare_teacher_assisted_qr", AsyncMock(return_value={"ok": True, "status": "prepared", "student_rollcall_id": "77"})),
            patch.object(tron, "stop_prepared_teacher_qr", stop_qr),
            patch.object(tron, "handle_rollcall_decision", AsyncMock(return_value="is_qrcode")),
            patch.object(tron, "announce_rollcall_start", AsyncMock()),
            patch("troTHU.monitor_runtime._fetch_monitor_rollcall_progress", AsyncMock(side_effect=fake_progress)),
            patch.object(tron, "get_schedule_for_day", return_value={"enable": True, "range": ["00:00", "23:59"]}),
            patch.object(tron, "parse_schedule_range", return_value=(dt_time(0, 0), dt_time(23, 59))),
            patch.object(tron, "sleep_or_shutdown", AsyncMock(side_effect=fake_sleep)),
            patch.object(tron, "log_print"),
            patch.object(tron, "mes", AsyncMock()),
        ):
            await tron.monitor_loop(session, shutdown_event)

        stop_qr.assert_awaited_once_with("77")

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

    async def test_monitor_loop_silently_waits_for_fju_manual_cookie(self) -> None:
        session = MagicMock()
        session.cookie_jar = MagicMock()
        shutdown_event = asyncio.Event()
        sleep_calls = 0

        async def fake_sleep(_event, _seconds):
            nonlocal sleep_calls
            sleep_calls += 1
            if sleep_calls >= 2:
                shutdown_event.set()

        async def fake_login(_session):
            result = make_login_result("manual_cookie_required", credential_source="manual_cookie")
            tron.LAST_LOGIN_RESULT = result
            return result

        with (
            patch.object(tron, "login", AsyncMock(side_effect=fake_login)) as login_mock,
            patch.object(tron, "has_session_cookie", return_value=False),
            patch.object(tron, "sleep_or_shutdown", AsyncMock(side_effect=fake_sleep)),
            patch.object(tron, "status_print") as status_print,
            patch.object(tron, "log_print") as log_print,
        ):
            await tron.monitor_loop(session, shutdown_event)

        self.assertEqual(login_mock.await_count, 1)
        status_print.assert_not_called()
        log_print.assert_not_called()

    async def test_monitor_loop_prints_manual_login_notice_once(self) -> None:
        session = MagicMock()
        session.cookie_jar = MagicMock()
        shutdown_event = asyncio.Event()
        sleep_calls = 0

        async def fake_sleep(_event, _seconds):
            nonlocal sleep_calls
            sleep_calls += 1
            if sleep_calls >= 3:
                shutdown_event.set()

        async def fake_login(_session):
            result = make_login_result("missing_credentials")
            tron.LAST_LOGIN_RESULT = result
            return result

        with (
            patch.object(tron, "login", AsyncMock(side_effect=fake_login)),
            patch.object(tron, "has_session_cookie", return_value=False),
            patch.object(tron, "sleep_or_shutdown", AsyncMock(side_effect=fake_sleep)),
            patch.object(tron, "status_print") as status_print,
            patch.object(tron, "log_print"),
        ):
            await tron.monitor_loop(session, shutdown_event)

        manual_notices = [
            call.args[0]
            for call in status_print.call_args_list
            if "偵測到尚未登入" in call.args[0]
        ]
        self.assertEqual(manual_notices, ["偵測到尚未登入。請按任意鍵編輯 config.yaml，填好帳號密碼後關閉記事本。"])

    async def test_monitor_loop_auto_reauths_when_cookie_disappears_after_success(self) -> None:
        session = MagicMock()
        session.cookie_jar = MagicMock()
        shutdown_event = asyncio.Event()

        async def fake_poll_rollcall(_session, _cnt):
            shutdown_event.set()
            return {"status": "not_call", "rollcall": None, "rollcall_type": "", "message": ""}

        async def fake_login(_session):
            result = make_login_result("success", final_url="https://ilearn.thu.edu.tw/home")
            tron.LAST_LOGIN_RESULT = result
            return result

        with (
            patch.object(tron, "login", AsyncMock(side_effect=fake_login)) as login_mock,
            patch.object(tron, "has_session_cookie", side_effect=[False, True]),
            patch.object(tron, "poll_rollcall_decision", AsyncMock(side_effect=fake_poll_rollcall)),
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

    async def test_status_print_is_append_only_monitor_line(self) -> None:
        previous_status = tron.LAST_STATUS
        updated_status = ""
        try:
            with (
                patch.object(tron.sys.stdout, "write") as write_mock,
                patch.object(tron.sys.stdout, "flush") as flush_mock,
            ):
                tron.status_print("手動輸入中背景狀態")
                updated_status = tron.LAST_STATUS
        finally:
            tron.LAST_STATUS = previous_status

        self.assertEqual(updated_status, "手動輸入中背景狀態")
        write_mock.assert_called_once_with("[監控] 手動輸入中背景狀態\n")
        flush_mock.assert_called_once()

    async def test_log_print_is_append_only_line(self) -> None:
        with (
            patch.object(tron.sys.stdout, "write") as write_mock,
            patch.object(tron.sys.stdout, "flush") as flush_mock,
        ):
            tron.log_print("背景訊息")

        write_mock.assert_called_once_with("背景訊息\n")
        flush_mock.assert_called_once()

    async def test_console_output_ignores_removed_prompt_state(self) -> None:
        previous_prompt_active = getattr(tron, "PROMPT_INPUT_ACTIVE", False)
        previous_deferred = list(getattr(tron, "CONSOLE_DEFERRED_LINES", []))
        tron.PROMPT_INPUT_ACTIVE = True
        tron.CONSOLE_DEFERRED_LINES.clear()
        try:
            with (
                patch.object(tron.sys.stdout, "write") as write_mock,
                patch.object(tron.sys.stdout, "flush") as flush_mock,
            ):
                tron.status_print("尚未登入 (請按任意鍵開啟 config.yaml)")
                tron.log_print("背景訊息")
                tron.PROMPT_INPUT_ACTIVE = False
                tron.flush_console_output()
        finally:
            tron.PROMPT_INPUT_ACTIVE = previous_prompt_active
            tron.CONSOLE_DEFERRED_LINES[:] = previous_deferred

        self.assertEqual(tron.CONSOLE_DEFERRED_LINES, previous_deferred)
        self.assertEqual(write_mock.call_args_list[0].args[0], "[監控] 尚未登入 (請按任意鍵開啟 config.yaml)\n")
        self.assertEqual(write_mock.call_args_list[1].args[0], "背景訊息\n")
        self.assertEqual(flush_mock.call_count, 3)

    async def test_console_output_interactive_redraws_status_and_timestamps_events(self) -> None:
        previous_interactive = tron.CONSOLE_INTERACTIVE
        previous_status = dict(tron.MONITOR_STATUS)
        previous_width = tron.STATUS_LINE_WIDTH
        previous_pause_depth = tron.STATUS_LINE_PAUSE_DEPTH
        fixed_now = tron.datetime(2026, 1, 2, 14, 3, 27)
        tron.CONSOLE_INTERACTIVE = True
        tron.STATUS_LINE_PAUSE_DEPTH = 0
        tron.reset_monitor_status()
        tron.update_monitor_status(
            phase="monitoring",
            check_count=3,
            detail="目前無點名",
            next_switch_at=None,
            redraw=False,
        )
        try:
            with (
                patch.object(tron, "current_datetime", return_value=fixed_now),
                patch.object(tron.sys.stdout, "write") as write_mock,
                patch.object(tron.sys.stdout, "flush") as flush_mock,
            ):
                tron.render_status_line()
                tron.log_print("背景訊息")
        finally:
            tron.CONSOLE_INTERACTIVE = previous_interactive
            tron.MONITOR_STATUS.clear()
            tron.MONITOR_STATUS.update(previous_status)
            tron.STATUS_LINE_WIDTH = previous_width
            tron.STATUS_LINE_PAUSE_DEPTH = previous_pause_depth

        writes = [call.args[0] for call in write_mock.call_args_list]
        self.assertTrue(
            any(item.startswith("\r監控中 · 第 3 次 · 目前無點名") for item in writes)
        )
        self.assertTrue(any(item.startswith("\r") and item.endswith("\r") for item in writes))
        self.assertIn("[14:03:27] 背景訊息\n", writes)
        self.assertGreaterEqual(flush_mock.call_count, 3)

    async def test_console_output_interactive_clears_status_when_width_is_unknown(self) -> None:
        previous_interactive = tron.CONSOLE_INTERACTIVE
        previous_status = dict(tron.MONITOR_STATUS)
        previous_width = tron.STATUS_LINE_WIDTH
        previous_pause_depth = tron.STATUS_LINE_PAUSE_DEPTH
        fixed_now = tron.datetime(2026, 1, 2, 14, 3, 27)
        tron.CONSOLE_INTERACTIVE = True
        tron.STATUS_LINE_PAUSE_DEPTH = 0
        tron.reset_monitor_status()
        tron.STATUS_LINE_WIDTH = 0
        try:
            with (
                patch.object(tron, "current_datetime", return_value=fixed_now),
                patch("troTHU.logging_runtime.shutil.get_terminal_size", return_value=os.terminal_size((40, 24))),
                patch.object(tron.sys.stdout, "write") as write_mock,
                patch.object(tron.sys.stdout, "flush"),
            ):
                tron.log_print("已載入快取 session，先嘗試直接監控。")
        finally:
            tron.CONSOLE_INTERACTIVE = previous_interactive
            tron.MONITOR_STATUS.clear()
            tron.MONITOR_STATUS.update(previous_status)
            tron.STATUS_LINE_WIDTH = previous_width
            tron.STATUS_LINE_PAUSE_DEPTH = previous_pause_depth

        writes = [call.args[0] for call in write_mock.call_args_list]
        self.assertEqual(writes[0], "\r" + " " * 40 + "\r")
        self.assertIn("[14:03:27] 已載入快取 session，先嘗試直接監控。\n", writes)

    async def test_console_output_interactive_timestamps_each_multiline_event_line(self) -> None:
        previous_interactive = tron.CONSOLE_INTERACTIVE
        previous_status = dict(tron.MONITOR_STATUS)
        previous_width = tron.STATUS_LINE_WIDTH
        previous_pause_depth = tron.STATUS_LINE_PAUSE_DEPTH
        fixed_now = tron.datetime(2026, 1, 2, 14, 3, 27)
        tron.CONSOLE_INTERACTIVE = True
        tron.STATUS_LINE_PAUSE_DEPTH = 0
        tron.reset_monitor_status()
        try:
            with (
                patch.object(tron, "current_datetime", return_value=fixed_now),
                patch.object(tron.sys.stdout, "write") as write_mock,
                patch.object(tron.sys.stdout, "flush"),
            ):
                tron.log_print("第一行\n第二行")
        finally:
            tron.CONSOLE_INTERACTIVE = previous_interactive
            tron.MONITOR_STATUS.clear()
            tron.MONITOR_STATUS.update(previous_status)
            tron.STATUS_LINE_WIDTH = previous_width
            tron.STATUS_LINE_PAUSE_DEPTH = previous_pause_depth

        writes = [call.args[0] for call in write_mock.call_args_list]
        self.assertIn("[14:03:27] 第一行\n[14:03:27] 第二行\n", writes)

    async def test_next_schedule_transition_uses_schedule_boundary_minute(self) -> None:
        now = tron.datetime(2026, 1, 2, 14, 3, 27)
        with patch.object(
            tron,
            "get_schedule_for_day",
            return_value={"enable": True, "ranges": [["08:00", "18:00"]]},
        ):
            transition = tron.next_schedule_transition(now)

        self.assertIsNotNone(transition)
        self.assertEqual(tron.format_hhmm(transition), "18:00")

    async def test_next_schedule_transition_hides_always_on_schedule(self) -> None:
        now = tron.datetime(2026, 1, 2, 14, 3, 27)
        with patch.object(
            tron,
            "get_schedule_for_day",
            return_value={"enable": True, "ranges": [["00:00", "00:00"]]},
        ):
            transition = tron.next_schedule_transition(now)

        self.assertIsNone(transition)

    async def test_next_schedule_transition_caches_parsed_ranges_by_weekday(self) -> None:
        now = tron.datetime(2026, 1, 2, 14, 3, 27)
        schedule = {"enable": True, "ranges": [["00:00", "00:00"]]}
        parse_calls = 0

        def fake_parse_schedule_ranges(_ranges):
            nonlocal parse_calls
            parse_calls += 1
            return [(dt_time(0, 0), dt_time(0, 0))]

        with (
            patch.object(tron, "get_schedule_for_day", return_value=schedule),
            patch.object(
                tron,
                "parse_schedule_ranges",
                side_effect=fake_parse_schedule_ranges,
            ),
        ):
            transition = tron.next_schedule_transition(now)

        self.assertIsNone(transition)
        self.assertLessEqual(parse_calls, 7)

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
        ):
            await tron.app_main(input_enabled=False)

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

        self.assertEqual(worker_session.put.call_count, 3)

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

        self.assertEqual(worker_session.put.call_count, 3)
        mes_mock.assert_not_awaited()

    async def test_number_cools_down_on_transient_failure_burst(self) -> None:
        main_session = MagicMock()
        main_session.cookie_jar = FakeCookieJar([FakeCookie("session", "ilearn.thu.edu.tw")])
        worker_session = MagicMock()
        worker_session.cookie_jar = MagicMock()
        worker_session.put.return_value = make_context_manager(
            make_response(status=429, url="https://example.com/rollcall", text="limited")
        )
        client_session_context = make_context_manager(worker_session)
        original_number_config = copy.deepcopy(tron.CONFIG.get("number", {}))
        tron.CONFIG["number"] = {
            "concurrency": 2,
            "min_concurrency": 1,
            "request_retries": 1,
            "cooldown_seconds": 0.1,
            "max_cooldowns": 1,
            "transient_failure_threshold": 2,
            "transient_failure_ratio": 0.5,
        }

        try:
            with (
                patch.object(tron.aiohttp, "ClientSession", return_value=client_session_context),
                patch.object(tron, "create_http_connector", return_value=MagicMock()),
                patch.object(tron, "mes", AsyncMock()),
                patch.object(tron, "status_print"),
                patch.object(tron, "log", return_value=True) as log_mock,
                patch.object(tron, "NUMBER_CODE_LIMIT", 2),
                patch.object(tron, "random_ua", return_value="ua"),
            ):
                with self.assertRaises(tron_http.UnexpectedResponseError):
                    await tron.number(main_session, 55)
        finally:
            tron.CONFIG["number"] = original_number_config

        self.assertTrue(
            any(
                call.kwargs.get("event") == "number_rollcall_cooldown"
                for call in log_mock.call_args_list
            )
        )

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
            patch.object(tron, "verify_rollcall_on_call_fine", AsyncMock(return_value={"ok": True, "status": "on_call_fine", "rollcall_id": "42", "monitor_detail": "點名 #42 進度：已簽到 1/1 人", "monitor_status": "on_call_fine"})),
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

    async def test_number_accepted_without_on_call_fine_does_not_show_success_banner(self) -> None:
        main_session = MagicMock()
        main_session.cookie_jar = FakeCookieJar([FakeCookie("session", "ilearn.thu.edu.tw")])
        worker_session = MagicMock()
        worker_session.cookie_jar = MagicMock()
        worker_session.put.return_value = make_context_manager(
            make_response(status=200, url="https://example.com/rollcall")
        )
        client_session_context = make_context_manager(worker_session)

        with (
            patch.object(tron.aiohttp, "ClientSession", return_value=client_session_context),
            patch.object(tron, "create_http_connector", return_value=MagicMock()),
            patch.object(tron, "mes", AsyncMock()),
            patch.object(tron, "status_print"),
            patch.object(tron, "log_print"),
            patch.object(tron, "log", return_value=True),
            patch.object(tron, "format_rollcall_success_banner") as banner,
            patch.object(tron, "verify_rollcall_on_call_fine", AsyncMock(return_value={"ok": False, "status": "submitted_unconfirmed", "rollcall_id": "42"})),
            patch.object(tron, "NUMBER_CODE_LIMIT", 1),
            patch.object(tron, "NUMBER_WORKER_COUNT", 1),
            patch.object(tron, "random_ua", return_value="ua"),
        ):
            found = await tron.number(main_session, 42)

        self.assertEqual(found, "NA")
        banner.assert_not_called()


if __name__ == "__main__":
    unittest.main()

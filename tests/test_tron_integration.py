import copy
import json
import shutil
import unittest
import uuid
from datetime import datetime
from pathlib import Path
from unittest.mock import AsyncMock, patch

try:
    import aiohttp
    from aiohttp import web
except (ImportError, ModuleNotFoundError):
    aiohttp = None
    web = None

from troTHU import tron, tron_http

TEST_WORKSPACE_DIR = Path(__file__).resolve().parents[1]


def make_workspace_temp_dir() -> Path:
    root = TEST_WORKSPACE_DIR / ".tmp-tests"
    root.mkdir(exist_ok=True)
    path = root / uuid.uuid4().hex
    path.mkdir()
    return path


class FakeTronServer:
    def __init__(self) -> None:
        self.rollcalls = []

    async def login_page(self, _request):
        html = """
        <html>
          <form class="form-horizontal" action="/submit">
            <input type="hidden" name="execution" value="abc123">
            <input type="hidden" name="tab_id" value="tab-1">
          </form>
        </html>
        """
        return web.Response(text=html, content_type="text/html")

    async def submit_login(self, request):
        data = await request.post()
        if data.get("username") != "user1" or data.get("password") != "pass1":
            return web.Response(text="bad credentials", status=200)

        response = web.HTTPFound("/home")
        response.set_cookie("session", "local-test-session")
        return response

    async def home(self, _request):
        return web.Response(text="ok")

    async def rollcalls_api(self, request):
        if request.cookies.get("session") != "local-test-session":
            return web.Response(status=401, text="unauthorized")
        return web.json_response({"rollcalls": self.rollcalls})


@unittest.skipUnless(aiohttp is not None and web is not None, "aiohttp.web is required")
class TronIntegrationTest(unittest.IsolatedAsyncioTestCase):
    async def asyncSetUp(self) -> None:
        self.original_config = copy.deepcopy(tron.CONFIG)
        self.original_path = tron.PATH
        self.original_unsupported_rollcall_state = copy.deepcopy(tron.UNSUPPORTED_ROLLCALL_STATE)
        self.original_login_url = tron_http.LOGIN_URL
        self.original_rollcalls_url = tron_http.ROLLCALLS_URL

        tron.CONFIG["config"]["enable_log"] = True
        tron.CONFIG["notifications"]["tg"]["enable"] = False
        tron.CONFIG["notifications"]["dc"]["enable"] = False
        tron.reset_unsupported_rollcall_state()

        self.fake_server = FakeTronServer()
        app = web.Application()
        app.router.add_get("/login", self.fake_server.login_page)
        app.router.add_post("/submit", self.fake_server.submit_login)
        app.router.add_get("/home", self.fake_server.home)
        app.router.add_get("/api/radar/rollcalls", self.fake_server.rollcalls_api)

        self.runner = web.AppRunner(app)
        await self.runner.setup()
        self.site = web.TCPSite(self.runner, "127.0.0.1", 0)
        await self.site.start()
        port = self.site._server.sockets[0].getsockname()[1]
        self.base_url = "http://127.0.0.1:{}".format(port)

        tron_http.LOGIN_URL = self.base_url + "/login"
        tron_http.ROLLCALLS_URL = (
            self.base_url + "/api/radar/rollcalls?api_version=1.1.0"
        )

    async def asyncTearDown(self) -> None:
        tron.CONFIG.clear()
        tron.CONFIG.update(copy.deepcopy(self.original_config))
        tron.PATH = self.original_path
        tron.UNSUPPORTED_ROLLCALL_STATE.clear()
        tron.UNSUPPORTED_ROLLCALL_STATE.update(copy.deepcopy(self.original_unsupported_rollcall_state))
        tron_http.LOGIN_URL = self.original_login_url
        tron_http.ROLLCALLS_URL = self.original_rollcalls_url
        await self.runner.cleanup()

    async def login_session(self, session):
        client = tron_http.TronHttpClient(session)
        form = await client.fetch_login_form()
        with patch.object(
            tron_http,
            "has_session_cookie",
            side_effect=lambda current_session: any(
                cookie.key == "session" for cookie in current_session.cookie_jar
            ),
        ):
            outcome = await client.submit_login(form, "user1", "pass1")
        return form, outcome

    def current_daily_log_path(self, root: Path) -> Path:
        today = datetime.now()
        return root / str(today.year) / str(today.month) / "{}.jsonl".format(today.day)

    async def test_http_client_can_login_and_fetch_rollcalls_against_local_server(self) -> None:
        self.fake_server.rollcalls = [{"status": "on_call_fine", "rollcall_id": 11}]

        async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
            form, outcome = await self.login_session(session)
            result = await tron_http.TronHttpClient(session).fetch_rollcalls()

        self.assertEqual(form.fields["execution"], "abc123")
        self.assertTrue(outcome.has_session)
        self.assertEqual(result.payload["rollcalls"][0]["rollcall_id"], 11)

    async def test_check_rollcall_number_flow_logs_and_invokes_handler(self) -> None:
        self.fake_server.rollcalls = [{"is_number": True, "rollcall_id": 42}]

        temp_dir = make_workspace_temp_dir()
        try:
            tron.PATH = temp_dir
            number_mock = AsyncMock()
            mes_mock = AsyncMock()

            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                await self.login_session(session)
                with (
                    patch.object(tron, "number", number_mock),
                    patch.object(tron, "mes", mes_mock),
                    patch.object(tron, "log_print"),
                ):
                    result = await tron.check_rollcall(session, 5)

            log_path = self.current_daily_log_path(temp_dir)
            events = [
                json.loads(line)["event"]
                for line in log_path.read_text(encoding="utf-8").splitlines()
            ]
        finally:
            shutil.rmtree(temp_dir, ignore_errors=True)

        self.assertEqual(result, "is_number")
        number_mock.assert_awaited_once()
        mes_mock.assert_awaited_once()
        self.assertIn("rollcall_poll", events)
        self.assertIn("number_rollcall_started", events)

    async def test_check_rollcall_unsupported_qrcode_notifies_once_and_writes_jsonl(self) -> None:
        self.fake_server.rollcalls = [{"is_qrcode": True, "rollcall_id": 88, "type": "qrcode"}]

        temp_dir = make_workspace_temp_dir()
        try:
            tron.PATH = temp_dir
            mes_mock = AsyncMock()

            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                await self.login_session(session)
                with (
                    patch.object(tron, "mes", mes_mock),
                    patch.object(tron, "log_print"),
                ):
                    first = await tron.check_rollcall(session, 1)
                    second = await tron.check_rollcall(session, 2)

            log_path = self.current_daily_log_path(temp_dir)
            entries = [
                json.loads(line)
                for line in log_path.read_text(encoding="utf-8").splitlines()
            ]
        finally:
            shutil.rmtree(temp_dir, ignore_errors=True)

        self.assertEqual(first, "unsupported_qrcode")
        self.assertEqual(second, "unsupported_qrcode")
        self.assertEqual(mes_mock.await_count, 1)
        self.assertEqual(
            [entry["event"] for entry in entries].count("unsupported_rollcall_detected"),
            1,
        )
        self.assertEqual(
            [entry["event"] for entry in entries].count("rollcall_poll"),
            2,
        )


if __name__ == "__main__":
    unittest.main()

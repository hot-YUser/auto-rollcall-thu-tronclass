import unittest
import sys
import asyncio
import types
from unittest.mock import patch, MagicMock, AsyncMock
import troTHU.runtime_context as ctx
from troTHU.auth_runtime import interactive_browser_login

# Define fake structures for Playwright
class FakePage:
    def __init__(self):
        self.url = "https://iclass.tku.edu.tw/user/index"
        self._is_closed = False

    def is_closed(self) -> bool:
        return self._is_closed

    async def goto(self, url, wait_until=None) -> None:
        self.url = url

class FakeBrowser:
    def __init__(self, context):
        self._context = context
        self._connected = True

    def is_connected(self) -> bool:
        return self._connected

    async def new_context(self, user_agent=None):
        return self._context

    async def close(self) -> None:
        self._connected = False
        self._context._page._is_closed = True

class FakeContext:
    def __init__(self, page):
        self._page = page
        self._cookies = []

    async def cookies(self) -> list:
        return self._cookies

    async def new_page(self):
        return self._page

class FakePlaywright:
    def __init__(self, page, context, browser):
        self.chromium = MagicMock()
        self.chromium.launch = AsyncMock(return_value=browser)
        self.page = page
        self.context = context
        self.browser = browser

class FakePlaywrightManager:
    def __init__(self, pw):
        self.pw = pw

    async def __aenter__(self):
        return self.pw

    async def __aexit__(self, exc_type, exc_val, exc_tb):
        pass

class FakeCookie:
    def __init__(self, name, value, domain="", path="/", expires=None, secure=False, httponly=False, samesite=""):
        self.key = name  # for compatibility
        self.name = name
        self.value = value
        self.domain = domain
        self.path = path
        self.expires = expires
        self.secure = secure
        self.httponly = httponly
        self.samesite = samesite

    def get(self, attr, default=None):
        return getattr(self, attr, default)

    def __getitem__(self, key):
        return getattr(self, key, "")

class FakeCookieJar:
    def __init__(self):
        self.cookies = []

    def __iter__(self):
        return iter(self.cookies)

    def clear(self) -> None:
        self.cookies.clear()

    def update_cookies(self, cookies, response_url=None) -> None:
        for k, v in cookies.items():
            self.cookies.append(FakeCookie(k, v, domain=getattr(response_url, "host", "")))

class FakeSession:
    def __init__(self):
        self.cookie_jar = FakeCookieJar()
        self.headers = {}

class InteractiveBrowserLoginTest(unittest.TestCase):
    def setUp(self) -> None:
        self.original_config = ctx.CONFIG.copy()
        ctx.CONFIG.clear()
        ctx.CONFIG.update(ctx.normalize_config({
            "provider": {
                "current": "custom",
                "available": {
                    "custom": {
                        "key": "custom",
                        "base_url": "https://iclass.tku.edu.tw",
                        "login_url": "https://iclass.tku.edu.tw/login",
                        "auth_flow": "interactive_browser",
                    }
                }
            },
            "auth": {
                "browser_assisted_login": {
                    "enabled": True,
                    "interactive_timeout_ms": 5000,
                    "interactive_poll_interval_ms": 10,
                }
            }
        }))
        
        # Inject fake playwright module
        self.fake_pw_module = types.ModuleType("playwright.async_api")
        self.fake_pw_module.async_playwright = None
        sys.modules["playwright.async_api"] = self.fake_pw_module

    def tearDown(self) -> None:
        ctx.CONFIG.clear()
        ctx.CONFIG.update(self.original_config)
        if "playwright.async_api" in sys.modules:
            del sys.modules["playwright.async_api"]

    @patch("troTHU.runtime_context.browser_assisted_login_available", return_value=True)
    @patch("troTHU.runtime_context.ensure_browser_binary_installed", AsyncMock())
    @patch("troTHU.runtime_context.validate_login_api_session", AsyncMock())
    def test_interactive_login_success(self, mock_available) -> None:
        page = FakePage()
        context = FakeContext(page)
        browser = FakeBrowser(context)
        pw = FakePlaywright(page, context, browser)
        self.fake_pw_module.async_playwright = lambda: FakePlaywrightManager(pw)
        
        # We simulate that cookies are empty initially, then have a session cookie on the next poll
        calls = 0
        async def mock_cookies():
            nonlocal calls
            calls += 1
            if calls == 1:
                return []
            return [{"name": "session", "value": "valid_session", "domain": "iclass.tku.edu.tw", "path": "/"}]
            
        context.cookies = mock_cookies
        
        session = FakeSession()
        result = asyncio.run(
            interactive_browser_login(session, user="user1", credential_source="config")
        )
        
        self.assertEqual(result.status, "success", msg=getattr(result, "error", None))
        self.assertEqual(result.credential_source, "interactive_browser:config")
        self.assertEqual(len(session.cookie_jar.cookies), 1)
        self.assertEqual(session.cookie_jar.cookies[0].name, "session")
        self.assertEqual(session.cookie_jar.cookies[0].value, "valid_session")

    @patch("troTHU.runtime_context.browser_assisted_login_available", return_value=True)
    @patch("troTHU.runtime_context.ensure_browser_binary_installed", AsyncMock())
    def test_interactive_login_cancelled_by_close(self, mock_available) -> None:
        page = FakePage()
        context = FakeContext(page)
        browser = FakeBrowser(context)
        pw = FakePlaywright(page, context, browser)
        self.fake_pw_module.async_playwright = lambda: FakePlaywrightManager(pw)
        
        # Simulate closing the page immediately
        page._is_closed = True
        
        session = FakeSession()
        result = asyncio.run(
            interactive_browser_login(session, user="user1", credential_source="config")
        )
        
        self.assertEqual(result.status, "browser_interactive_cancelled")

    @patch("troTHU.runtime_context.browser_assisted_login_available", return_value=True)
    @patch("troTHU.runtime_context.ensure_browser_binary_installed", AsyncMock())
    def test_interactive_login_timeout(self, mock_available) -> None:
        page = FakePage()
        context = FakeContext(page)
        browser = FakeBrowser(context)
        pw = FakePlaywright(page, context, browser)
        self.fake_pw_module.async_playwright = lambda: FakePlaywrightManager(pw)
        
        # Configure very short timeout and let it run
        ctx.CONFIG["auth"]["browser_assisted_login"]["interactive_timeout_ms"] = 5
        context.cookies = AsyncMock(return_value=[])
        
        session = FakeSession()
        result = asyncio.run(
            interactive_browser_login(session, user="user1", credential_source="config")
        )
        
        self.assertEqual(result.status, "browser_interactive_timeout")

    @patch("troTHU.runtime_context.browser_assisted_login_available", return_value=True)
    @patch("troTHU.runtime_context.ensure_browser_binary_installed", AsyncMock())
    def test_interactive_login_validation_failure_retry(self, mock_available) -> None:
        page = FakePage()
        context = FakeContext(page)
        browser = FakeBrowser(context)
        pw = FakePlaywright(page, context, browser)
        self.fake_pw_module.async_playwright = lambda: FakePlaywrightManager(pw)
        
        # Loop returns session cookie. The first time validation is called, it raises Exception.
        # The second time, validation succeeds.
        cookies_list = [{"name": "session", "value": "valid_session", "domain": "iclass.tku.edu.tw", "path": "/"}]
        context.cookies = AsyncMock(return_value=cookies_list)
        
        validation_calls = 0
        async def mock_validate(client):
            nonlocal validation_calls
            validation_calls += 1
            if validation_calls == 1:
                raise Exception("First validation call fails")
            # Success on second call
            return None

        session = FakeSession()
        with patch("troTHU.runtime_context.validate_login_api_session", mock_validate):
            result = asyncio.run(
                interactive_browser_login(session, user="user1", credential_source="config")
            )
        
        self.assertEqual(result.status, "success")
        self.assertEqual(validation_calls, 2)

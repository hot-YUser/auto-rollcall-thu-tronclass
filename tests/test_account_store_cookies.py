import unittest
import tempfile
import json
from pathlib import Path
from troTHU.account_store import save_session_cookies, load_session_cookies, cookie_cache_status, cookie_path
from http.cookies import SimpleCookie

class FakeCookie:
    def __init__(self, key, value, domain="", path="/", expires=None, secure=False, httponly=False, samesite=""):
        self.key = key
        self.value = value
        self.domain = domain
        self.path = path
        self.expires = expires
        self.secure = secure
        self.httponly = httponly
        self.samesite = samesite

    def get(self, attr, default=None):
        if attr == "max-age":
            return getattr(self, "max_age", default)
        return getattr(self, attr, default)

class FakeCookieJar:
    def __init__(self):
        self.cookies = []

    def __iter__(self):
        return iter(self.cookies)

    def update_cookies(self, cookies, response_url=None):
        if isinstance(cookies, SimpleCookie):
            for key, morsel in cookies.items():
                c = FakeCookie(
                    key=morsel.value,
                    value=morsel.value,
                    domain=morsel["domain"],
                    path=morsel["path"],
                    expires=morsel["expires"],
                    secure=bool(morsel["secure"]),
                    httponly=bool(morsel["httponly"]),
                    samesite=morsel["samesite"],
                )
                c.key = morsel.key
                self.cookies.append(c)
        elif isinstance(cookies, dict):
            for k, v in cookies.items():
                self.cookies.append(FakeCookie(k, v))

    def clear(self):
        self.cookies.clear()

class FakeSession:
    def __init__(self):
        self.cookie_jar = FakeCookieJar()

class AccountStoreCookiesTest(unittest.TestCase):
    def test_cookies_v2_round_trip(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            base_dir = Path(temp_dir)
            session = FakeSession()
            cookie1 = FakeCookie("session", "my_session_id", domain=".example.com", path="/")
            cookie1.max_age = "100000"
            session.cookie_jar.cookies.append(cookie1)
            
            save_session_cookies(session, base_dir, "test_profile")
            
            session2 = FakeSession()
            load_session_cookies(session2, base_dir, "test_profile")
            
            self.assertEqual(len(session2.cookie_jar.cookies), 1)
            loaded = session2.cookie_jar.cookies[0]
            self.assertEqual(loaded.key, "session")
            self.assertEqual(loaded.value, "my_session_id")
            self.assertEqual(loaded.domain, ".example.com")
            
            status = cookie_cache_status(base_dir, "test_profile")
            self.assertTrue(status["restored"])
            self.assertTrue(status["has_session"])
            self.assertFalse(status["expired"])
            self.assertFalse(status["near_expiry"])
            self.assertIsNotNone(status["expires_at"])

    def test_load_legacy_bare_list(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            base_dir = Path(temp_dir)
            legacy_data = [
                {
                    "key": "session",
                    "value": "legacy_val",
                    "domain": ".example.com",
                    "path": "/login"
                }
            ]
            path = cookie_path(base_dir, "test_profile")
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_text(json.dumps(legacy_data), encoding="utf-8")
            
            session = FakeSession()
            load_session_cookies(session, base_dir, "test_profile")
            
            self.assertEqual(len(session.cookie_jar.cookies), 1)
            loaded = session.cookie_jar.cookies[0]
            self.assertEqual(loaded.key, "session")
            self.assertEqual(loaded.value, "legacy_val")
            self.assertEqual(loaded.domain, ".example.com")
            self.assertEqual(loaded.path, "/login")
            
            status = cookie_cache_status(base_dir, "test_profile")
            self.assertTrue(status["restored"])
            self.assertTrue(status["has_session"])
            self.assertFalse(status["expired"])
            self.assertFalse(status["near_expiry"])
            self.assertIsNone(status["expires_at"])

import json
import tempfile
import unittest
from pathlib import Path

from troTHU.account_store import cookie_path
from troTHU.webview_sync import (
    WebViewSyncError,
    build_webview_cookie_preview,
    build_webview_sync_status,
    import_webview_cookies,
    parse_webview_cookie_export,
)


THU_PROVIDER = {
    "key": "thu",
    "label": "THU",
    "base_url": "https://ilearn.thu.edu.tw",
    "login_url": "https://tcidentity.thu.edu.tw/login",
    "rollcalls_url": "https://ilearn.thu.edu.tw/api/radar/rollcalls",
    "support_level": "ready",
    "status": "ready",
}

FJU_PROVIDER = {
    "key": "fju",
    "label": "FJU",
    "base_url": "https://elearn2.fju.edu.tw",
    "login_url": "https://elearn2.fju.edu.tw/login",
    "rollcalls_url": "https://elearn2.fju.edu.tw/api/radar/rollcalls",
    "support_level": "experimental",
    "status": "experimental",
    "allow_experimental": False,
}


def config(
    *,
    enabled: bool = False,
    allow_import: bool = False,
    domains=None,
    names=None,
    allow_exp: bool = False,
):
    return {
        "webview": {
            "cookie_sync": {
                "enabled": enabled,
                "allow_cookie_import": allow_import,
                "allowed_domains": list(domains or []),
                "cookie_name_allowlist": list(names or ["session"]),
                "allow_experimental_provider": allow_exp,
            }
        }
    }


class WebViewSyncTest(unittest.TestCase):
    def test_parse_flat_list_mapping_and_playwright_storage_state(self) -> None:
        flat = [
            {"name": "session", "value": "secret-session", "domain": "ilearn.thu.edu.tw", "path": "/"}
        ]
        wrapped = {"cookies": flat}
        playwright = {"cookies": flat, "origins": []}

        self.assertEqual(parse_webview_cookie_export(flat)[0].name, "session")
        self.assertEqual(parse_webview_cookie_export(json.dumps(wrapped))[0].domain, "ilearn.thu.edu.tw")
        self.assertEqual(parse_webview_cookie_export(playwright)[0].path, "/")

    def test_parse_rejects_invalid_or_missing_cookie_records(self) -> None:
        with self.assertRaises(WebViewSyncError) as invalid_json:
            parse_webview_cookie_export("{not-json")
        self.assertEqual(invalid_json.exception.reason, "invalid_json")

        with self.assertRaises(WebViewSyncError) as no_valid:
            parse_webview_cookie_export([{"value": "missing-name"}])
        self.assertEqual(no_valid.exception.reason, "no_valid_cookies")

    def test_preview_applies_domain_and_cookie_name_allowlists(self) -> None:
        records = parse_webview_cookie_export(
            [
                {"name": "session", "value": "secret-session", "domain": ".ilearn.thu.edu.tw", "path": "/"},
                {"name": "remember", "value": "secret-token", "domain": "ilearn.thu.edu.tw", "path": "/"},
                {"name": "session", "value": "cross-domain-secret", "domain": "evil.example", "path": "/"},
            ]
        )

        preview = build_webview_cookie_preview(
            records,
            config=config(domains=["ilearn.thu.edu.tw"]),
            provider=THU_PROVIDER,
            profile="default",
        )

        encoded = json.dumps(preview, ensure_ascii=False)
        self.assertEqual(preview["accepted_count"], 1)
        self.assertEqual(preview["rejected_count"], 2)
        self.assertTrue(preview["has_session"])
        self.assertIn("session", preview["accepted_cookie_names"])
        self.assertIn("remember", preview["rejected_cookie_names"])
        self.assertNotIn("secret-session", encoded)
        self.assertNotIn("secret-token", encoded)
        self.assertNotIn("cross-domain-secret", encoded)

    def test_status_reports_gates_and_experimental_provider_rules(self) -> None:
        status = build_webview_sync_status(
            config(enabled=True, allow_import=True),
            provider=FJU_PROVIDER,
        )

        self.assertFalse(status["can_import"])
        self.assertIn("experimental_provider_import_disabled", status["warnings"])

        provider = dict(FJU_PROVIDER)
        provider["allow_experimental"] = True
        allowed = build_webview_sync_status(
            config(enabled=True, allow_import=True, allow_exp=True),
            provider=provider,
        )
        self.assertTrue(allowed["can_import"])

    def test_import_gate_off_is_rejected_and_save_false_does_not_write(self) -> None:
        records = parse_webview_cookie_export(
            [{"name": "session", "value": "secret-session", "domain": "ilearn.thu.edu.tw", "path": "/"}]
        )
        with tempfile.TemporaryDirectory() as temp_dir:
            base = Path(temp_dir)
            preview = import_webview_cookies(
                base,
                "default",
                records,
                config=config(enabled=False, allow_import=False),
                provider=THU_PROVIDER,
                save=False,
            )
            self.assertFalse(preview["saved"])
            self.assertFalse(cookie_path(base, "default").exists())

            with self.assertRaises(WebViewSyncError) as blocked:
                import_webview_cookies(
                    base,
                    "default",
                    records,
                    config=config(enabled=False, allow_import=True),
                    provider=THU_PROVIDER,
                    save=True,
                )
            self.assertEqual(blocked.exception.reason, "webview_cookie_sync_disabled")

    def test_import_save_writes_existing_cookie_cache_format_without_raw_export(self) -> None:
        records = parse_webview_cookie_export(
            [{"name": "session", "value": "secret-session", "domain": "ilearn.thu.edu.tw", "path": "/"}]
        )
        with tempfile.TemporaryDirectory() as temp_dir:
            base = Path(temp_dir)
            result = import_webview_cookies(
                base,
                "default",
                records,
                config=config(enabled=True, allow_import=True),
                provider=THU_PROVIDER,
                save=True,
            )
            path = cookie_path(base, "default")
            raw = path.read_text(encoding="utf-8")
            stored = json.loads(raw)

        self.assertTrue(result["saved"])
        self.assertEqual(result["cookie_cache"]["file"], "default.json")
        self.assertEqual(stored, [{"key": "session", "value": "secret-session", "domain": "ilearn.thu.edu.tw", "path": "/"}])
        self.assertNotIn("secret-session", json.dumps(result, ensure_ascii=False))

    def test_experimental_provider_import_requires_both_gates(self) -> None:
        records = parse_webview_cookie_export(
            [{"name": "session", "value": "secret-session", "domain": "elearn2.fju.edu.tw", "path": "/"}]
        )
        with tempfile.TemporaryDirectory() as temp_dir:
            with self.assertRaises(WebViewSyncError) as blocked:
                import_webview_cookies(
                    Path(temp_dir),
                    "default",
                    records,
                    config=config(enabled=True, allow_import=True, allow_exp=False),
                    provider=FJU_PROVIDER,
                    save=True,
                )
            self.assertEqual(blocked.exception.reason, "experimental_provider_import_disabled")

            provider = dict(FJU_PROVIDER)
            provider["allow_experimental"] = True
            result = import_webview_cookies(
                Path(temp_dir),
                "default",
                records,
                config=config(enabled=True, allow_import=True, allow_exp=True),
                provider=provider,
                save=True,
            )
            self.assertTrue(result["saved"])


class ValidateCookieRecordsTest(unittest.IsolatedAsyncioTestCase):
    """Exercise the async-native cookie validation directly against the fake
    server, in the test's own event loop — no background thread, no asyncio.run
    bridging (the ThreadedFakeServer workaround is gone)."""

    async def test_accepts_valid_and_rejects_invalid_session(self) -> None:
        from tests.fake_tron_server import FakeTronServer
        from troTHU.webview_sync import validate_cookie_records

        async with FakeTronServer() as server:
            provider_config = {
                "key": "custom_manual",
                "base_url": server.base_url,
                "login_url": server.base_url + "/login",
                "auth_flow": "manual_cookie_only",
                "session_cookie_domain": "127.0.0.1",
            }
            valid = parse_webview_cookie_export(  # matches FakeTronServer.session_cookie
                [{"name": "session", "value": "local-test-session", "domain": "127.0.0.1", "path": "/"}]
            )
            invalid = parse_webview_cookie_export(
                [{"name": "session", "value": "bad-session-cookie", "domain": "127.0.0.1", "path": "/"}]
            )
            self.assertTrue(await validate_cookie_records(provider_config, valid))
            self.assertFalse(await validate_cookie_records(provider_config, invalid))


class WebViewImportValidationGateTest(unittest.TestCase):
    """import_webview_cookies must run API validation for providers whose adapter
    requires it and refuse to save on failure. The network probe is stubbed so the
    test stays offline and loop-free."""

    def _config(self):
        return {"webview": {"cookie_sync": {
            "enabled": True, "allow_cookie_import": True, "allow_experimental_provider": True,
        }}}

    def _provider(self):
        return {
            "key": "custom_manual",
            "base_url": "https://tron.example.edu",
            "login_url": "https://tron.example.edu/login",
            "auth_flow": "manual_cookie_only",
            "session_cookie_domain": "tron.example.edu",
        }

    def _records(self):
        return parse_webview_cookie_export(
            [{"name": "session", "value": "abc", "domain": "tron.example.edu", "path": "/"}]
        )

    def test_import_saves_when_validation_passes(self) -> None:
        from unittest.mock import patch
        with patch("troTHU.webview_sync._validate_api_session", return_value=True):
            with tempfile.TemporaryDirectory() as temp_dir:
                result = import_webview_cookies(
                    Path(temp_dir), "default", self._records(),
                    config=self._config(), provider=self._provider(), save=True,
                )
                self.assertTrue(result["saved"])

    def test_import_blocks_when_validation_fails(self) -> None:
        from unittest.mock import patch
        with patch("troTHU.webview_sync._validate_api_session", return_value=False):
            with tempfile.TemporaryDirectory() as temp_dir:
                with self.assertRaises(WebViewSyncError) as blocked:
                    import_webview_cookies(
                        Path(temp_dir), "default", self._records(),
                        config=self._config(), provider=self._provider(), save=True,
                    )
                self.assertEqual(blocked.exception.reason, "api_validation_failed")


class WebViewPreviewWarningTest(unittest.TestCase):
    def test_preview_warns_when_session_cookie_missing(self) -> None:
        # An accepted-but-non-session cookie must still surface the missing-session
        # hint (regression guard: this warning was removed and is now restored).
        records = parse_webview_cookie_export(
            [{"name": "remember_token", "value": "x", "domain": "ilearn.thu.edu.tw", "path": "/"}]
        )
        preview = build_webview_cookie_preview(
            records,
            config={"webview": {"cookie_sync": {"cookie_name_allowlist": ["session", "remember_token"]}}},
            provider=THU_PROVIDER,
        )
        self.assertIn("session_cookie_missing", preview["warnings"])
        self.assertFalse(preview["has_session"])


class WebViewStatusIsCheapTest(unittest.TestCase):
    def test_status_reports_validation_requirement_without_network(self) -> None:
        # Status must be a side-effect-free snapshot: it reports whether validation
        # WILL be required, but never performs the network probe itself.
        from unittest.mock import patch
        manual_provider = {"key": "custom_manual", "base_url": "https://tron.example.edu",
                           "auth_flow": "manual_cookie_only"}
        with patch("troTHU.webview_sync.validate_cookie_records") as probe:
            status = build_webview_sync_status(
                {"webview": {"cookie_sync": {"enabled": True, "allow_cookie_import": True}}},
                provider=manual_provider,
            )
        probe.assert_not_called()
        self.assertEqual(status["cookie_validation"], "required")


if __name__ == "__main__":
    unittest.main()

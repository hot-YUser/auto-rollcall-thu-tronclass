from __future__ import annotations

import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

from troTHU import research_crawler as rc
from troTHU import tron


class SourceStateSignatureTest(unittest.TestCase):
    def test_reorder_invariant(self) -> None:
        a = {"rollcalls": [{"rollcall_id": 1, "status": "is_number"}, {"rollcall_id": 2, "status": "is_qrcode"}]}
        b = {"rollcalls": [{"rollcall_id": 2, "status": "is_qrcode"}, {"rollcall_id": 1, "status": "is_number"}]}
        self.assertEqual(rc.source_state_signature(a), rc.source_state_signature(b))

    def test_status_change_changes_signature(self) -> None:
        a = {"rollcalls": [{"rollcall_id": 1, "status": "is_number"}]}
        b = {"rollcalls": [{"rollcall_id": 1, "status": "on_call_fine"}]}
        self.assertNotEqual(rc.source_state_signature(a), rc.source_state_signature(b))

    def test_empty_and_malformed(self) -> None:
        self.assertEqual(rc.source_state_signature({}), ())
        self.assertEqual(rc.source_state_signature(None), ())
        self.assertEqual(rc.source_state_signature({"rollcalls": "bad"}), ())


class ShouldRecrawlTest(unittest.TestCase):
    def test_same_signature_never(self) -> None:
        self.assertFalse(rc.should_recrawl(("a",), now=100.0, last_signature=("a",), last_crawl_at=0.0, min_interval=30.0))

    def test_changed_within_interval_waits(self) -> None:
        self.assertFalse(rc.should_recrawl(("b",), now=10.0, last_signature=("a",), last_crawl_at=0.0, min_interval=30.0))

    def test_changed_after_interval_fires(self) -> None:
        self.assertTrue(rc.should_recrawl(("b",), now=40.0, last_signature=("a",), last_crawl_at=0.0, min_interval=30.0))


class DomainScopingTest(unittest.TestCase):
    def test_allowlist_includes_vendor_and_registry(self) -> None:
        cfg = {"provider": {"available": {"THU": {"base_url": "https://ilearn.thu.edu.tw"}}}}
        hosts = rc.build_host_allowlist(cfg)
        self.assertIn("ilearn.thu.edu.tw", hosts)
        self.assertIn("wisdomgarden.com", hosts)

    def test_host_in_family(self) -> None:
        allow = {"ilearn.thu.edu.tw"}
        self.assertTrue(rc.host_in_family("ilearn.thu.edu.tw", allow))        # allowlist (university domain)
        self.assertTrue(rc.host_in_family("foo.tronclass.com", allow))        # vendor keyword
        self.assertFalse(rc.host_in_family("fonts.googleapis.com", allow))    # third-party rejected
        self.assertFalse(rc.host_in_family("", allow))


class ExtractionTest(unittest.TestCase):
    def test_extract_api_paths(self) -> None:
        text = 'fetch("/api/users/me"); x = "/api/rollcall/1/lite";'
        self.assertEqual(rc.extract_api_paths(text), ["/api/rollcall/1/lite", "/api/users/me"])

    def test_extract_js_assets_resolves_relative(self) -> None:
        assets = rc.extract_js_assets('<script src="/static/app.js"></script>', "https://ilearn.thu.edu.tw/")
        self.assertIn("https://ilearn.thu.edu.tw/static/app.js", assets)


class FirstQrTest(unittest.TestCase):
    def test_finds_qr_rollcall(self) -> None:
        payload = {"rollcalls": [{"rollcall_id": 5, "status": "is_number"}, {"rollcall_id": 9, "type": "qrcode"}]}
        self.assertEqual(rc.first_qr_rollcall_id(payload), "9")

    def test_none_when_no_qr(self) -> None:
        self.assertEqual(rc.first_qr_rollcall_id({"rollcalls": [{"rollcall_id": 5, "status": "is_number"}]}), "")


class CrawlerIOSafetyTest(unittest.IsolatedAsyncioTestCase):
    async def test_startup_crawl_with_no_base_is_safe(self) -> None:
        # No reachable base_url -> the crawler must return gracefully, never raise, never fetch.
        with patch.object(tron, "get_active_http_endpoints", side_effect=Exception("boom")):
            await rc.run_startup_crawl(object())
            await rc.run_qr_hammer(object(), "77")

    async def test_dump_writes_to_gitignored_state_dir(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            with patch.object(tron, "BASE_DIR", Path(temp_dir)):
                rc._dump("endpoint", {"url": "x", "status": 200, "body": "raw"})
            files = list((Path(temp_dir) / "state" / "research-crawl").rglob("*.jsonl"))
            self.assertTrue(files)


if __name__ == "__main__":
    unittest.main()

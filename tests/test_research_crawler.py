from __future__ import annotations

import json
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

from troTHU import debug_capture as dc
from troTHU import research_crawler as rc
from troTHU import tron

_T1 = "1782744663" + "a" * 32   # <10 unix sec><32 hex>
_T2 = "1699999999" + "b" * 32


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


class LeakScannerTest(unittest.TestCase):
    def test_scan_finds_token_in_str_and_dict(self) -> None:
        self.assertEqual(rc.scan_body_for_tokens('{"data":"%s"}' % _T1), [_T1])
        self.assertEqual(rc.scan_body_for_tokens({"data": _T1}), [_T1])

    def test_scan_rejects_near_misses(self) -> None:
        self.assertEqual(rc.scan_body_for_tokens("no token here"), [])
        self.assertEqual(rc.scan_body_for_tokens("123456789" + "a" * 32), [])   # 9 digits
        self.assertEqual(rc.scan_body_for_tokens("1234567890" + "a" * 31), [])  # 31 hex
        self.assertEqual(rc.scan_body_for_tokens("1234567890" + "A" * 32), [])  # uppercase hex
        self.assertEqual(rc.scan_body_for_tokens(None), [])

    def test_non_teacher_source_is_leak(self) -> None:
        finding = rc.leak_scan_record({"kind": "qr_hammer", "source": "student",
                                       "url": "https://x/api/rollcall/5/lite", "body": "x %s y" % _T2})
        self.assertTrue(finding["is_leak"])
        self.assertEqual(finding["tokens"], [_T2])

    def test_teacher_qr_harvest_is_not_leak(self) -> None:
        finding = rc.leak_scan_record({"kind": "teacher_qr", "source": "teacher_qr", "body": _T1})
        self.assertFalse(finding["is_leak"])

    def test_no_token_returns_empty(self) -> None:
        self.assertEqual(rc.leak_scan_record({"kind": "page", "body": "<html>hi</html>"}), {})


class TokenIndexTest(unittest.TestCase):
    def test_extracts_from_teacher_qr_record(self) -> None:
        row = rc.token_index_row({"ts": "T", "source": "teacher_qr", "rollcall_id": "55",
                                  "http_date_epoch": 123.0, "data": _T1})
        self.assertEqual(row, {"ts": "T", "server_time": 123.0, "source": "teacher_qr",
                               "rollcall_id": "55", "data": _T1})

    def test_falls_back_to_body_scan(self) -> None:
        row = rc.token_index_row({"ts": "T", "kind": "endpoint", "body": "zz %s zz" % _T2})
        self.assertEqual(row["data"], _T2)

    def test_tokenless_record_is_empty(self) -> None:
        self.assertEqual(rc.token_index_row({"ts": "T", "body": "nothing"}), {})


class HammerConfigTest(unittest.TestCase):
    def test_defaults_when_absent(self) -> None:
        cfg = rc._hammer_config({})
        self.assertEqual(cfg["iterations"], rc._QR_HAMMER_ITERATIONS)
        self.assertEqual(cfg["interval"], rc._QR_HAMMER_INTERVAL)
        self.assertEqual(cfg["max_duration"], 60.0)
        self.assertFalse(cfg["teacher_harvest"])

    def test_overrides_and_coercion(self) -> None:
        cfg = rc._hammer_config({"research": {"hammer_interval": "0.1", "hammer_iterations": 300,
                                              "hammer_max_duration": 120, "teacher_harvest": True}})
        self.assertEqual(cfg["interval"], 0.1)
        self.assertEqual(cfg["iterations"], 300)
        self.assertEqual(cfg["max_duration"], 120.0)
        self.assertTrue(cfg["teacher_harvest"])

    def test_clamps_bad_values(self) -> None:
        cfg = rc._hammer_config({"research": {"hammer_interval": -5, "hammer_iterations": 0,
                                              "hammer_max_duration": "junk"}})
        self.assertEqual(cfg["interval"], 0.0)      # negative -> 0
        self.assertEqual(cfg["iterations"], 1)      # 0 -> min 1
        self.assertEqual(cfg["max_duration"], 60.0)  # junk -> default


class ParseHttpDateTest(unittest.TestCase):
    def test_valid_rfc7231(self) -> None:
        self.assertGreater(rc._parse_http_date_epoch("Sun, 06 Jul 2025 12:00:00 GMT"), 0.0)

    def test_garbage_is_zero(self) -> None:
        self.assertEqual(rc._parse_http_date_epoch("garbage"), 0.0)
        self.assertEqual(rc._parse_http_date_epoch(""), 0.0)
        self.assertEqual(rc._parse_http_date_epoch(None), 0.0)


class SummaryAggregationTest(unittest.TestCase):
    def _write_corpus(self, root: Path) -> None:
        root.mkdir(parents=True, exist_ok=True)
        records = [
            {"ts": "t1", "kind": "teacher_qr", "source": "teacher_qr", "rollcall_id": "55",
             "http_date_epoch": 123.0, "data": _T1, "body": '{"data":"%s"}' % _T1},
            {"ts": "t2", "kind": "qr_hammer", "source": "student", "status": 200,
             "url": "https://x/api/rollcall/55/lite", "body": "leak " + _T2},
            {"ts": "t3", "kind": "page", "status": 200, "url": "https://x/", "body": "<html>hi</html>"},
        ]
        with open(root / "2026-07-06.jsonl", "w", encoding="utf-8") as handle:
            for record in records:
                handle.write(json.dumps(record, ensure_ascii=False) + "\n")

    def test_aggregates_kinds_tokens_buckets_and_leaks(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            root = Path(temp_dir) / "state" / "research-crawl"
            self._write_corpus(root)
            report = rc.summarize_crawl(crawl_dir=root)
        self.assertEqual(report["record_count"], 3)
        self.assertEqual(report["kinds"], {"page": 1, "qr_hammer": 1, "teacher_qr": 1})
        self.assertEqual(report["unique_endpoints"], 2)
        self.assertEqual(report["unique_tokens"], 2)          # T1 (teacher data) + T2 (leaked body)
        self.assertEqual(report["unique_time_buckets"], 2)
        self.assertEqual(len(report["leak_hits"]), 1)          # only the student endpoint echo
        self.assertEqual(report["leak_hits"][0]["token_count"], 1)
        self.assertEqual(report["leak_hits"][0]["tokens"], ["[redacted]"])
        serialized = json.dumps(report, ensure_ascii=False)
        self.assertIsNone(rc.QR_DATA_TOKEN_RE.search(serialized))
        self.assertNotIn(_T1, serialized)
        self.assertNotIn(_T2, serialized)

    def test_leak_hit_url_drops_credentials_query_and_fragment(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            root = Path(temp_dir) / "state" / "research-crawl"
            root.mkdir(parents=True)
            record = {
                "kind": "qr_hammer",
                "source": "student",
                "url": "https://user:pass@example.invalid/api/check?api_key=plain-secret#fragment",
                "body": "leak " + _T1,
            }
            (root / "2026-08-25.jsonl").write_text(
                json.dumps(record, ensure_ascii=False) + "\n", encoding="utf-8"
            )
            report = rc.summarize_crawl(crawl_dir=root)

        self.assertEqual(report["leak_hits"][0]["url"], "https://example.invalid/api/check")
        serialized = json.dumps(report, ensure_ascii=False)
        self.assertNotIn("plain-secret", serialized)
        self.assertNotIn("user:pass", serialized)
        self.assertNotIn("fragment", serialized)

    def test_skips_derived_token_index_file(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            root = Path(temp_dir) / "state" / "research-crawl"
            self._write_corpus(root)
            # a stray derived index must NOT be re-counted
            with open(root / "qr-tokens.jsonl", "w", encoding="utf-8") as handle:
                handle.write(json.dumps({"ts": "t", "source": "teacher_qr", "data": _T1}) + "\n")
            report = rc.summarize_crawl(crawl_dir=root)
        self.assertEqual(report["record_count"], 3)

    def test_re_redacts_every_record_on_read(self) -> None:
        # summarize_crawl MUST pass each raw record through sanitize_debug_payload (raw on disk).
        with tempfile.TemporaryDirectory() as temp_dir:
            root = Path(temp_dir) / "state" / "research-crawl"
            self._write_corpus(root)
            seen = []
            original = dc.sanitize_debug_payload

            def spy(record):
                seen.append(record)
                return original(record)

            with patch.object(dc, "sanitize_debug_payload", spy):
                report = rc.summarize_crawl(crawl_dir=root)
        # sanitize recurses into nested values, so count only the top-level records it saw.
        top_level = [s for s in seen if isinstance(s, dict) and "kind" in s]
        self.assertEqual(len(top_level), report["record_count"])

    def test_final_serialized_report_redacts_tokens_in_any_field(self) -> None:
        report = rc.redact_crawl_summary(
            {
                "leak_hits": [{"tokens": [_T1], "url": "https://example.invalid/" + _T2}],
                _T1: {"nested": "prefix " + _T2 + " suffix"},
            }
        )

        serialized = json.dumps(report, ensure_ascii=False)
        self.assertIsNone(rc.QR_DATA_TOKEN_RE.search(serialized))
        self.assertNotIn(_T1, serialized)
        self.assertNotIn(_T2, serialized)
        self.assertEqual(report["leak_hits"][0]["tokens"], ["[redacted]"])


class CrawlSummaryCliSafetyTest(unittest.TestCase):
    def test_json_and_text_output_re_redact_unsafe_report(self) -> None:
        unsafe = {
            "unique_tokens": 2,
            "unique_time_buckets": 2,
            "leak_hits": [{"url": "https://example.invalid/" + _T1, "kind": "qr_hammer", "tokens": [_T2]}],
        }
        for json_output in (False, True):
            with self.subTest(json_output=json_output):
                outputs = []
                args = ["research", "crawl-summary"] + (["--json"] if json_output else [])
                with (
                    patch.object(tron, "bootstrap_config"),
                    patch.object(tron, "summarize_crawl", return_value=unsafe),
                    patch("builtins.print", side_effect=outputs.append),
                ):
                    result = tron.main(args)

                serialized = "\n".join(str(item) for item in outputs)
                self.assertEqual(result, 0)
                self.assertIsNone(rc.QR_DATA_TOKEN_RE.search(serialized))
                self.assertNotIn(_T1, serialized)
                self.assertNotIn(_T2, serialized)
                self.assertIn("[redacted]", serialized)


class TeacherHarvestSafetyTest(unittest.IsolatedAsyncioTestCase):
    async def test_harvest_with_no_context_returns_and_never_raises(self) -> None:
        result = await rc.harvest_teacher_qr_series(None, "", "", iterations=1, interval=0.0, max_duration=1.0)
        self.assertFalse(result["ok"])

    async def test_maybe_harvest_skips_when_opt_out(self) -> None:
        # opt-in defaults false -> the teacher path never runs, no rollcall is created.
        await rc._maybe_harvest_teacher({"teacher_harvest": False, "iterations": 1,
                                         "interval": 0.0, "max_duration": 1.0})

    async def test_maybe_harvest_skips_when_teacher_not_ready(self) -> None:
        with patch.object(tron, "TEACHER_READY", False), patch.object(tron, "TEACHER_SESSION", None):
            await rc._maybe_harvest_teacher({"teacher_harvest": True, "iterations": 1,
                                            "interval": 0.0, "max_duration": 1.0})

    async def test_hammer_never_touches_production_qr_assist_state(self) -> None:
        before = dict(getattr(tron, "ACTIVE_TEACHER_QR_ASSISTS", {}))
        with patch.object(tron, "get_active_http_endpoints", side_effect=Exception("boom")):
            await rc.run_qr_hammer(object(), "77")
        self.assertEqual(dict(getattr(tron, "ACTIVE_TEACHER_QR_ASSISTS", {})), before)


if __name__ == "__main__":
    unittest.main()

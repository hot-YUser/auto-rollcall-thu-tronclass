from __future__ import annotations

import json
import logging
import shutil
import tempfile
import unittest
from pathlib import Path

from troTHU import tron


def _read_records(log_dir: Path):
    records = []
    for path in log_dir.rglob("*.jsonl"):
        for line in path.read_text(encoding="utf-8").splitlines():
            if line.strip():
                records.append(json.loads(line))
    return records


class LogCoreTest(unittest.TestCase):
    def setUp(self) -> None:
        self.temp_dir = Path(tempfile.mkdtemp())
        self._orig_path = tron.PATH
        self._orig_mode = tron.LOGGING_MODE
        self._orig_enable = tron.CONFIG.get("config", {}).get("enable_log", True)
        tron.PATH = self.temp_dir

    def tearDown(self) -> None:
        tron.PATH = self._orig_path
        tron.CONFIG.setdefault("config", {})["enable_log"] = self._orig_enable
        tron.configure_logging(self._orig_mode)
        logging.getLogger("trothu").handlers.clear()
        shutil.rmtree(self.temp_dir, ignore_errors=True)

    def test_configure_logging_sets_mode_level_and_crawler(self) -> None:
        tron.configure_logging("normal")
        self.assertEqual(tron.LOGGING_MODE, "normal")
        self.assertFalse(tron.CRAWLER_ENABLED)
        self.assertEqual(logging.getLogger("trothu").level, logging.INFO)

        tron.configure_logging("research")
        self.assertEqual(tron.LOGGING_MODE, "research")
        self.assertTrue(tron.CRAWLER_ENABLED)
        self.assertEqual(logging.getLogger("trothu").level, logging.DEBUG)

    def test_unknown_mode_falls_back_to_normal(self) -> None:
        tron.configure_logging("bogus")
        self.assertEqual(tron.LOGGING_MODE, "normal")

    def test_log_event_writes_jsonl_record(self) -> None:
        tron.configure_logging("normal")
        tron.log_event("login_success", level="info", status="ok", message="done", user="u1")
        records = _read_records(self.temp_dir)
        self.assertEqual(len(records), 1)
        rec = records[0]
        self.assertEqual(rec["event"], "login_success")
        self.assertEqual(rec["level"], "INFO")
        self.assertEqual(rec["mode"], "normal")
        self.assertEqual(rec["status"], "ok")
        self.assertEqual(rec["message"], "done")
        self.assertEqual(rec["user"], "u1")
        self.assertIn("ts", rec)

    def test_redaction_on_in_normal_off_in_research(self) -> None:
        tron.configure_logging("normal")
        tron.log_event("t", api_key="nvapi-secret", password="pw")
        rec = _read_records(self.temp_dir)[0]
        self.assertEqual(rec["api_key"], "[redacted]")
        self.assertEqual(rec["password"], "[redacted]")

        for path in self.temp_dir.rglob("*.jsonl"):
            path.unlink()
        tron.configure_logging("research")
        tron.log_event("t", api_key="nvapi-secret")
        rec = _read_records(self.temp_dir)[0]
        self.assertEqual(rec["api_key"], "nvapi-secret")

    def test_log_api_call_normal_concise_debug_full(self) -> None:
        tron.configure_logging("normal")
        tron.log_api_call("GET", "https://x/api", http_status=200, elapsed_ms=12,
                          response={"big": "body"})
        rec = _read_records(self.temp_dir)[0]
        self.assertEqual(rec["event"], "api_call")
        self.assertEqual(rec["http_status"], 200)
        self.assertNotIn("response", rec)  # INFO: no body

        for path in self.temp_dir.rglob("*.jsonl"):
            path.unlink()
        tron.configure_logging("debug")
        tron.log_api_call("GET", "https://x/api", http_status=200, response={"big": "body"})
        rec = _read_records(self.temp_dir)[0]
        self.assertEqual(rec["response"], {"big": "body"})

    def test_log_api_call_failure_is_warning_with_hint(self) -> None:
        tron.configure_logging("normal")
        tron.log_api_call("PUT", "https://x/api", http_status=401)
        rec = _read_records(self.temp_dir)[0]
        self.assertEqual(rec["level"], "WARNING")
        self.assertEqual(rec["status"], "error")
        self.assertIn("unauthorized", rec["hint"])

    def test_enable_log_false_writes_nothing(self) -> None:
        tron.configure_logging("normal")
        tron.CONFIG.setdefault("config", {})["enable_log"] = False
        tron.log_event("t", message="x")
        self.assertEqual(_read_records(self.temp_dir), [])


if __name__ == "__main__":
    unittest.main()

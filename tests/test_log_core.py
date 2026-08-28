from __future__ import annotations

import json
import logging
import shutil
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

from troTHU import tron


def _write_record(log_dir: Path, record: dict) -> None:
    path = log_dir / "2026-07-04.jsonl"
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("a", encoding="utf-8") as handle:
        handle.write(json.dumps(record, ensure_ascii=False) + "\n")


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
        self.assertIn("timestamp", rec)

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
        self.assertEqual(rec["api_key"], "[redacted]")

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


class LogsCliTest(unittest.TestCase):
    """The rebuilt `tron logs` consumers, reading the new {timestamp, level, mode, ...} schema."""

    def test_logs_summarize_counts_events_and_levels(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            log_dir = Path(temp_dir) / "log"
            _write_record(log_dir, {"timestamp": "2026-07-04T01:00:00", "level": "WARNING",
                                    "mode": "normal", "event": "api_call", "status": "error"})
            _write_record(log_dir, {"timestamp": "2026-07-04T01:00:01", "level": "INFO",
                                    "mode": "normal", "event": "login_success", "status": "ok"})
            outputs = []
            with (patch.object(tron, "PATH", log_dir), patch.object(tron, "bootstrap_config"),
                  patch("builtins.print", side_effect=outputs.append)):
                result = tron.main(["logs", "summarize", "--json"])
        self.assertEqual(result, 0)
        payload = json.loads(outputs[0])
        self.assertEqual(payload["record_count"], 2)
        self.assertEqual(payload["events"]["api_call"], 1)
        self.assertEqual(payload["levels"]["WARNING"], 1)

    def test_logs_tail_redacts_raw_secret_on_read(self) -> None:
        # A research-mode record is written raw; `logs tail` must still redact on read.
        with tempfile.TemporaryDirectory() as temp_dir:
            log_dir = Path(temp_dir) / "log"
            _write_record(log_dir, {"timestamp": "2026-07-04T01:00:00", "level": "INFO",
                                    "mode": "research", "event": "api_call", "api_key": "nvapi-raw-secret"})
            outputs = []
            with (patch.object(tron, "PATH", log_dir), patch.object(tron, "bootstrap_config"),
                  patch("builtins.print", side_effect=outputs.append)):
                result = tron.main(["logs", "tail", "--json"])
        self.assertEqual(result, 0)
        self.assertNotIn("nvapi-raw-secret", "\n".join(str(o) for o in outputs))

    def test_logs_export_writes_bundle(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            base_dir = Path(temp_dir)
            log_dir = base_dir / "log"
            _write_record(log_dir, {"timestamp": "2026-07-04T01:00:00", "event": "ok", "level": "INFO"})
            with (patch.object(tron, "BASE_DIR", base_dir), patch.object(tron, "PATH", log_dir),
                  patch.object(tron, "bootstrap_config"), patch("builtins.print")):
                result = tron.main(["logs", "export"])
            self.assertEqual(result, 0)
            self.assertTrue((base_dir / "state" / "debug-bundle").exists())

    def test_run_mode_flags_parse(self) -> None:
        parser = tron.build_arg_parser()
        self.assertTrue(parser.parse_args(["run", "--research"]).research)
        self.assertTrue(parser.parse_args(["run", "--debug"]).debug)
        with self.assertRaises(SystemExit):
            parser.parse_args(["run", "--debug", "--research"])  # mutually exclusive


if __name__ == "__main__":
    unittest.main()

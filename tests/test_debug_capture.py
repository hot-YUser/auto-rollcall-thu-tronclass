import json
import shutil
import unittest
import uuid
from pathlib import Path

from troTHU.debug_capture import append_debug_capture, sanitize_debug_payload


TEST_WORKSPACE_DIR = Path(__file__).resolve().parents[1]


class DebugCaptureTest(unittest.TestCase):
    def test_sanitize_debug_payload_redacts_sensitive_keys(self) -> None:
        payload = {
            "headers": {
                "Authorization": "Bearer secret",
                "x-session-id": "session",
                "safe": "value",
            },
            "items": [{"password": "pw", "course": "math"}],
        }

        sanitized = sanitize_debug_payload(payload)

        self.assertEqual(sanitized["headers"]["Authorization"], "[redacted]")
        self.assertEqual(sanitized["headers"]["x-session-id"], "[redacted]")
        self.assertEqual(sanitized["headers"]["safe"], "value")
        self.assertEqual(sanitized["items"][0]["password"], "[redacted]")

    def test_append_debug_capture_writes_jsonl(self) -> None:
        temp_dir = TEST_WORKSPACE_DIR / ".tmp-tests" / uuid.uuid4().hex
        temp_dir.mkdir(parents=True)
        try:
            path = append_debug_capture(
                temp_dir / "capture.jsonl",
                "event",
                {"token": "secret", "ok": True},
            )
            lines = path.read_text(encoding="utf-8").splitlines()
        finally:
            shutil.rmtree(temp_dir, ignore_errors=True)

        self.assertEqual(len(lines), 1)
        record = json.loads(lines[0])
        self.assertEqual(record["event"], "event")
        self.assertEqual(record["payload"]["token"], "[redacted]")
        self.assertTrue(record["payload"]["ok"])

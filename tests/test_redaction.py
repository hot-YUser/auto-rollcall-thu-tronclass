from __future__ import annotations

import json
import unittest

from troTHU.observability import _safe_value as observability_safe_value
from troTHU.research_sandbox import sanitize_research_value
from troTHU.webview_sync import sanitize_webview_sync_value
from troTHU.app_qr_experience import sanitize_qr_scan_result
from troTHU.redaction import DROP, KEEP, REDACT, redact_structure


# A single rich payload exercising: sensitive keys at multiple depths, list +
# tuple branches, nested dicts, non-str scalars (int/bool/None), assignment-style
# sensitive strings, and a "bearer " marker. Each walker has a different key-set
# and string-leaf policy, so the four golden outputs below differ on purpose.
SAMPLE = {
    "user": "alice", "password": "p", "token": "t", "Authorization": "Bearer z",
    "data": {"x": 1}, "value": "v", "monkey": "mk", "chat_id": 999,
    "nested": {
        "session": "s", "course": "CS", "answer": "a", "number_code": "7",
        "items": [{"data": [1, 2], "name": "ok", "secret": "s"}, "plain", ("t1", "t2")],
        "tup": (10, "ok2", {"cookie": "c", "keep": "k"}), "headers": {"a": "b"},
    },
    "count": 42, "flag": True, "empty": None,
    "marker": "password=hunter2", "bearermark": "bearer xyz",
}

OBS_GOLDEN = json.loads(r'''{"Authorization": "[redacted]", "bearermark": "bearer xyz", "chat_id": 999, "count": 42, "data": "[redacted]", "empty": null, "flag": true, "marker": "[redacted]", "monkey": "mk", "nested": {"answer": "a", "course": "CS", "headers": {"a": "b"}, "items": [{"data": "[redacted]", "name": "ok", "secret": "[redacted]"}, "plain", ["t1", "t2"]], "number_code": "7", "session": "[redacted]", "tup": [10, "ok2", {"cookie": "c", "keep": "k"}]}, "password": "[redacted]", "token": "[redacted]", "user": "alice", "value": "v"}''')

RESEARCH_GOLDEN = json.loads(r'''{"Authorization": "[redacted]", "bearermark": "[redacted]", "chat_id": "[redacted]", "count": 42, "data": "[redacted]", "empty": null, "flag": true, "marker": "[redacted]", "monkey": "[redacted]", "nested": {"answer": "[redacted]", "course": "CS", "headers": {"a": "b"}, "items": [{"data": "[redacted]", "name": "ok", "secret": "[redacted]"}, "plain", ["t1", "t2"]], "number_code": "[redacted]", "session": "[redacted]", "tup": [10, "ok2", {"cookie": "[redacted]", "keep": "k"}]}, "password": "[redacted]", "token": "[redacted]", "user": "alice", "value": "v"}''')

WEBVIEW_GOLDEN = json.loads(r'''{"Authorization": "[redacted]", "bearermark": "bearer xyz", "chat_id": 999, "count": 42, "data": {"x": 1}, "empty": null, "flag": true, "marker": "[redacted]", "monkey": "mk", "nested": {"answer": "a", "course": "CS", "headers": {"a": "b"}, "items": [{"data": [1, 2], "name": "ok", "secret": "[redacted]"}, "plain", ["t1", "t2"]], "number_code": "7", "session": "[redacted]", "tup": [10, "ok2", {"cookie": "[redacted]", "keep": "k"}]}, "password": "[redacted]", "token": "[redacted]", "user": "alice", "value": "[redacted]"}''')

QR_GOLDEN = json.loads(r'''{"bearermark": "bearer xyz", "chat_id": 999, "count": 42, "empty": null, "flag": true, "marker": "[redacted]", "monkey": "mk", "nested": {"answer": "a", "course": "CS", "items": [{"name": "ok"}, "plain", ["t1", "t2"]], "number_code": "7", "tup": [10, "ok2", {"keep": "k"}]}, "user": "alice", "value": "v"}''')


class RedactionWalkerCharacterizationTest(unittest.TestCase):
    """Golden-master pins for the recursive redaction walkers, so the shared-core
    refactor is provably behavior-preserving. These are security scrubbers — any
    deviation (under-redaction OR a changed shape) must fail here."""

    def test_observability_safe_value(self) -> None:
        self.assertEqual(observability_safe_value(SAMPLE), OBS_GOLDEN)

    def test_research_sanitize_value(self) -> None:
        self.assertEqual(sanitize_research_value(SAMPLE), RESEARCH_GOLDEN)

    def test_webview_sanitize_value(self) -> None:
        self.assertEqual(sanitize_webview_sync_value(SAMPLE), WEBVIEW_GOLDEN)

    def test_qr_sanitize_result(self) -> None:
        self.assertEqual(sanitize_qr_scan_result(SAMPLE), QR_GOLDEN)

    def test_leaf_string_policies(self) -> None:
        # Each surface keeps its own string-leaf policy (truncation limit + marker rule).
        self.assertEqual(observability_safe_value("a" * 200), "a" * 157 + "...")
        self.assertEqual(observability_safe_value("bearer abc"), "bearer abc")
        self.assertEqual(sanitize_research_value("b" * 350), "b" * 120 + "...[truncated 350 chars]")
        self.assertEqual(sanitize_research_value("c" * 120), "c" * 120)
        self.assertEqual(sanitize_webview_sync_value("d" * 200), "d" * 117 + "...")
        self.assertEqual(sanitize_qr_scan_result("e" * 200), "e" * 157 + "...")


class RedactStructureCoreTest(unittest.TestCase):
    """The single audited traversal: per-key REDACT/DROP/KEEP, leaf for scalars,
    tuples flattened to lists."""

    def test_actions_recursion_and_leaf(self) -> None:
        def classify(key: str) -> str:
            return {"sec": REDACT, "drop": DROP}.get(key, KEEP)

        out = redact_structure(
            {"sec": "x", "drop": "y", "keep": "hi", "nest": {"n": 5, "s": "yo"}},
            classify=classify,
            leaf=lambda v: v.upper() if isinstance(v, str) else v,
        )
        self.assertEqual(out, {"sec": "[redacted]", "keep": "HI", "nest": {"n": 5, "s": "YO"}})

    def test_tuple_becomes_list(self) -> None:
        out = redact_structure(
            ("a", 1, [2, "b"]),
            classify=lambda key: KEEP,
            leaf=lambda v: "L" if isinstance(v, str) else v,
        )
        self.assertEqual(out, ["L", 1, [2, "L"]])


if __name__ == "__main__":
    unittest.main()

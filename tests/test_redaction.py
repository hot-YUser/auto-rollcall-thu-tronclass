from __future__ import annotations

import json
import unittest

from troTHU.observability import _safe_value as observability_safe_value
from troTHU.research_sandbox import sanitize_research_value
from troTHU.webview_sync import sanitize_webview_sync_value
from troTHU.app_qr_experience import sanitize_qr_scan_result
from troTHU.redaction import DROP, KEEP, REDACT, redact_structure

# The four scrubbers below are deliberately NOT folded into redact_structure (each
# has an axis the shared core lacks: set recursion, a two-pass wrapper, one-level
# body special-casing, or no-tuple passthrough). They are still security scrubbers,
# so they get their own golden-master pins here.
from troTHU.account_runtime_store import _safe_value as account_safe_value
from troTHU.account_runtime_store import _safe_text as account_safe_text
from troTHU.notification_bus import _sanitize_event_data as notification_sanitize_event_data
from troTHU.adapter_server import _sanitize_sender_result as adapter_sanitize_sender_result
from troTHU.ux_tools import sanitize_public_payload


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


# A shared rich payload for the three recursive outliers. The same keys land
# differently per policy on purpose: e.g. `cookie` is redacted by the account
# store but kept by ux_tools (only `cookie_value` is a ux secret-part); `payload`
# is kept by ux_tools but redacted by the account store and notification bus;
# `longtext` truncates in the account store but passes full in the other two;
# tuples flatten to lists only in the account store.
OUTLIER_SAMPLE = {
    "user": "alice", "password": "p", "token": "t", "cookie": "c", "value": "v",
    "payload": "pl", "qr_data": "q", "data": {"x": 1}, "response": {"inner": "r"},
    "body": "password=secret123", "marker": "password=hunter2", "longtext": "a" * 250,
    "count": 42, "flag": True, "empty": None,
    "nested": {
        "session": "s", "secret": "s2", "name": "ok",
        "items": [{"secret": "s3", "name": "ok2", "qr": "z"}, "plain", ("t1", "t2")],
        "tup": (10, "ok3", {"cookie": "ck", "keep": "k"}), "headers": {"a": "b"},
    },
}

# account_runtime_store: SENSITIVE_KEY_RE covers cookie/passwd/password/secret/
# session/token/payload/raw/response/body/authorization; str leaf runs the
# assignment-scrub + 200-char truncation; list/tuple/set all collapse to list.
ACCOUNT_GOLDEN = {
    "user": "alice", "password": "[redacted]", "token": "[redacted]", "cookie": "[redacted]",
    "value": "v", "payload": "[redacted]", "qr_data": "q", "data": {"x": 1},
    "response": "[redacted]", "body": "[redacted]", "marker": "password=[redacted]",
    "longtext": "a" * 197 + "...", "count": 42, "flag": True, "empty": None,
    "nested": {
        "session": "[redacted]", "secret": "[redacted]", "name": "ok",
        "items": [{"secret": "[redacted]", "name": "ok2", "qr": "z"}, "plain", ["t1", "t2"]],
        "tup": [10, "ok3", {"cookie": "[redacted]", "keep": "k"}], "headers": {"a": "b"},
    },
}

# notification_bus: two-pass — debug_capture.sanitize_debug_payload first (broad
# secret-key redaction, no string truncation), then an inner key-redact on the
# PAYLOAD_KEY_PARTS = ("payload", "qr") substrings. No tuple branch → tuples stay.
NOTIFICATION_GOLDEN = {
    "user": "alice", "password": "[redacted]", "token": "[redacted]", "cookie": "[redacted]",
    "value": "v", "payload": "[redacted]", "qr_data": "[redacted]", "data": {"x": 1},
    "response": {"inner": "r"}, "body": "password=secret123", "marker": "password=hunter2",
    "longtext": "a" * 250, "count": 42, "flag": True, "empty": None,
    "nested": {
        "session": "[redacted]", "secret": "[redacted]", "name": "ok",
        "items": [{"secret": "[redacted]", "name": "ok2", "qr": "[redacted]"}, "plain", ("t1", "t2")],
        "tup": (10, "ok3", {"cookie": "ck", "keep": "k"}), "headers": {"a": "b"},
    },
}

# ux_tools: PUBLIC_SECRET_EXACT_KEYS = {authorization,passwd,password,secret,token,
# value} ∪ substring parts (access_token/auth_header/bot_token/cookie_value/
# refresh_token/session_id). No string leaf scrub, no tuple branch.
UX_GOLDEN = {
    "user": "alice", "password": "[redacted]", "token": "[redacted]", "cookie": "c",
    "value": "[redacted]", "payload": "pl", "qr_data": "q", "data": {"x": 1},
    "response": {"inner": "r"}, "body": "password=secret123", "marker": "password=hunter2",
    "longtext": "a" * 250, "count": 42, "flag": True, "empty": None,
    "nested": {
        "session": "s", "secret": "[redacted]", "name": "ok",
        "items": [{"secret": "[redacted]", "name": "ok2", "qr": "z"}, "plain", ("t1", "t2")],
        "tup": (10, "ok3", {"cookie": "ck", "keep": "k"}), "headers": {"a": "b"},
    },
}


class RedactionOutlierCharacterizationTest(unittest.TestCase):
    """Golden-master pins for the four security scrubbers that intentionally stay
    OUT of redact_structure. These are still credential/secret paths — a deviation
    (under-redaction or a changed shape) must fail here, so the 'leave as outlier'
    decision is test-backed, not just asserted."""

    def test_account_runtime_store_safe_value(self) -> None:
        self.assertEqual(account_safe_value(OUTLIER_SAMPLE), ACCOUNT_GOLDEN)

    def test_account_runtime_store_set_becomes_list(self) -> None:
        # The axis that keeps this out of the shared core: sets recurse to lists.
        self.assertEqual(account_safe_value({"items": {"solo"}}), {"items": ["solo"]})

    def test_account_runtime_store_text_leaf(self) -> None:
        self.assertEqual(account_safe_text("a" * 250), "a" * 197 + "...")
        self.assertEqual(account_safe_text("token=abcdef secret=zzz"), "token=[redacted] secret=[redacted]")

    def test_notification_bus_sanitize_event_data(self) -> None:
        self.assertEqual(notification_sanitize_event_data(OUTLIER_SAMPLE), NOTIFICATION_GOLDEN)

    def test_ux_tools_sanitize_public_payload(self) -> None:
        self.assertEqual(sanitize_public_payload(OUTLIER_SAMPLE), UX_GOLDEN)

    def test_adapter_server_sanitize_sender_result(self) -> None:
        sample = {
            "access_token": "x", "token": "y", "authorization": "z", "headers": {"h": 1},
            "body": "password=p cookie:abc", "status": 200, "ok": False,
        }
        self.assertEqual(adapter_sanitize_sender_result(sample), {
            "access_token": "[redacted]", "token": "[redacted]", "authorization": "[redacted]",
            "headers": "[redacted]", "body": "password=p cookie:abc", "status": 200, "ok": False,
        })

    def test_adapter_server_sanitize_non_mapping(self) -> None:
        self.assertEqual(adapter_sanitize_sender_result("hello"), {"ok": True, "result": "hello"})


if __name__ == "__main__":
    unittest.main()

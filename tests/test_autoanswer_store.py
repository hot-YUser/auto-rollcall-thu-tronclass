from __future__ import annotations
import tempfile
import unittest
from pathlib import Path

from troTHU import autoanswer_store


class AutoanswerStoreTest(unittest.TestCase):
    def test_mark_and_load_roundtrip_per_profile(self):
        with tempfile.TemporaryDirectory() as d:
            base = Path(d)
            autoanswer_store.mark_completed(base, "stud@x", "111")
            autoanswer_store.mark_completed(base, "stud@x", "222")
            autoanswer_store.mark_completed(base, "other@y", "999")
            self.assertEqual(autoanswer_store.load_completed(base, "stud@x"), {"111", "222"})
            self.assertEqual(autoanswer_store.load_completed(base, "other@y"), {"999"})  # per-profile isolation
            # file actually written under state/
            self.assertTrue((base / "state" / autoanswer_store.STATE_FILENAME).exists())

    def test_mark_is_idempotent(self):
        with tempfile.TemporaryDirectory() as d:
            base = Path(d)
            autoanswer_store.mark_completed(base, "p", "5")
            autoanswer_store.mark_completed(base, "p", "5")
            self.assertEqual(autoanswer_store.load_completed(base, "p"), {"5"})

    def test_missing_and_blank_are_safe(self):
        with tempfile.TemporaryDirectory() as d:
            base = Path(d)
            self.assertEqual(autoanswer_store.load_completed(base, "p"), set())  # missing file -> empty
            autoanswer_store.mark_completed(base, "p", "")  # blank id -> no-op, no crash
            self.assertEqual(autoanswer_store.load_completed(base, "p"), set())

    def test_corrupt_file_degrades_to_empty(self):
        with tempfile.TemporaryDirectory() as d:
            base = Path(d)
            path = base / "state" / autoanswer_store.STATE_FILENAME
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_text("not json{{{", encoding="utf-8")
            self.assertEqual(autoanswer_store.load_completed(base, "p"), set())  # no crash
            autoanswer_store.mark_completed(base, "p", "7")  # overwrites corrupt with valid
            self.assertEqual(autoanswer_store.load_completed(base, "p"), {"7"})


if __name__ == "__main__":
    unittest.main()

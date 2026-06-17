"""Guard: the README 〈支援學校一覽〉 lists every registry school code.

Stops the hand-maintained table from silently drifting when a school is added.
"""
import unittest
from pathlib import Path

import troTHU.providers as providers

README = Path(__file__).resolve().parents[1] / "README.md"


class ReadmeSchoolListTest(unittest.TestCase):
    def test_readme_lists_every_registry_code(self) -> None:
        text = README.read_text(encoding="utf-8")
        codes = sorted({p.key.upper() for p in providers.list_all_providers() if getattr(p, "user_visible", True)})
        missing = [c for c in codes if "`{}`".format(c) not in text]
        self.assertEqual(missing, [], "README 支援學校一覽 缺少代號：{}".format(missing))


if __name__ == "__main__":
    unittest.main()

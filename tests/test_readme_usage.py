import unittest
from pathlib import Path


class ReadmeUsageTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        cls.text = Path("README.md").read_text(encoding="utf-8")
        cls.lowered = cls.text.lower()

    def test_quickstart_and_daily_paths_are_present(self) -> None:
        self.assertIn("## 5 分鐘快速開始", self.text)
        self.assertIn("python -m troTHU.tron init", self.text)
        self.assertIn("python -m troTHU.tron doctor", self.text)
        self.assertIn("python -m troTHU.tron run", self.text)
        self.assertIn("監控輸出", self.text)
        self.assertIn("按任意鍵", self.text)
        self.assertIn("C:\\Windows\\System32\\notepad.exe", self.text)
        self.assertIn("config.advanced.yaml", self.text)
        self.assertIn("逐行輸出", self.text)
        self.assertIn("run --classic", self.text)
        self.assertIn("run --no-input", self.text)
        self.assertIn("## 日常使用路徑", self.text)
        self.assertIn("CLI-only", self.text)
        self.assertIn("QR assisted", self.text)
        self.assertIn("Bot generic / LINE / Discord", self.text)

    def test_current_feature_sections_are_present(self) -> None:
        for item in (
            "## 設定檔",
            "config advanced",
            "config compact --write",
            "## 點名能力",
            "## Bot / 通知",
            "HTTP Interactions",
            "optional Gateway",
            "## Provider：THU / TKU / TronClass ready",
            "## App shell / WebView / Research",
            "## 打包與 Git hygiene",
        ):
            self.assertIn(item, self.text)

    def test_validation_release_and_troubleshooting_sections_are_present(self) -> None:
        self.assertIn("## R1/R2/R3 驗收", self.text)
        self.assertIn("validation local-smoke --json", self.text)
        self.assertIn("validation record", self.text)
        self.assertIn("release-build --execute --json", self.text)
        self.assertIn("release-check --dist dist --json", self.text)
        self.assertIn("## 疑難排解速查", self.text)
        for item in ("登入失敗", "cookie 過期", "QR no match", "radar 失敗", "監控 console 沒有反應", "帳密或學校切換問題", "Discord signature", "LINE signature", "PyInstaller missing", "artifact unsafe"):
            self.assertIn(item, self.text)

    def test_safety_and_current_limitations_are_clear(self) -> None:
        self.assertIn("不要把填好帳密的 `config.yaml`", self.text)
        self.assertIn("真實 THU live acceptance", self.text)
        self.assertNotIn("FJU", self.text)
        self.assertNotIn("fju", self.lowered)
        self.assertIn("verification", self.lowered)
        self.assertIn("optional Gateway", self.text)
        self.assertNotIn("Discord Gateway 尚未內建", self.text)
        self.assertNotIn("建議優先使用上一個正式版", self.text)
        self.assertNotIn("v0.2.8", self.text)
        self.assertNotIn("GUI/App 尚未", self.text)
        self.assertNotIn("Textual 全螢幕", self.text)
        self.assertNotIn("中文 TUI", self.text)
        self.assertNotIn("control login", self.text)
        self.assertNotIn("control status", self.text)
        self.assertNotIn(".codex-worklog.md](", self.text)


if __name__ == "__main__":
    unittest.main()

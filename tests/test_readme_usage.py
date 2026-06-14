import unittest
from pathlib import Path


class ReadmeUsageTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        cls.text = Path("README.md").read_text(encoding="utf-8")
        cls.lowered = cls.text.lower()

    def test_beginner_intro_states_capabilities_clearly(self) -> None:
        self.assertIn("## 這個工具可以幹嘛", self.text)
        self.assertIn("數字點名", self.text)
        self.assertIn("雷達點名", self.text)
        self.assertIn("QR Code 點名", self.text)
        self.assertIn("教師輔助", self.text)
        # Supported schools shown up front (FJU is now a first-line native provider).
        self.assertIn("THU", self.text)
        self.assertIn("TKU", self.text)
        self.assertIn("SCU", self.text)
        self.assertIn("FJU", self.text)

    def test_getting_started_is_minimal(self) -> None:
        self.assertIn("## 怎麼開始用", self.text)
        self.assertIn("pip install -e .", self.text)
        self.assertIn("python -m troTHU.tron", self.text)
        self.assertIn("run --no-input", self.text)
        self.assertIn("按任意鍵", self.text)

    def test_config_tutorial_is_present(self) -> None:
        self.assertIn("## 設定檔教學", self.text)
        for key in ("now", "account", "teacher", "group", "operating"):
            self.assertIn(key, self.text)
        self.assertIn("config.advanced.toml", self.text)
        self.assertIn("config show", self.text)

    def test_bot_principle_and_technical_sections_present(self) -> None:
        self.assertIn("## 聊天機器人", self.text)
        self.assertIn("Discord", self.text)
        self.assertIn("LINE", self.text)
        self.assertIn("Telegram", self.text)
        self.assertIn("## 原理", self.text)
        self.assertIn("## 技術細節", self.text)
        self.assertIn("student_rollcalls", self.text)
        self.assertIn("/api/rollcall/", self.text)

    def test_safety_note_is_present(self) -> None:
        self.assertIn("不要把填好帳密的 `config.conf`", self.text)

    def test_original_project_credits_are_present(self) -> None:
        self.assertIn("## 致謝與來源", self.text)
        self.assertIn("silvercow002/tronclass-script", self.text)
        self.assertIn("https://github.com/silvercow002/tronclass-script", self.text)
        self.assertIn("致謝與來源 (Credits)", self.text)
        self.assertIn("MIT License notice", self.text)




if __name__ == "__main__":
    unittest.main()

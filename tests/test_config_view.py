import copy
import json
import tempfile
import unittest
from pathlib import Path

from troTHU import tron
from troTHU.config_view import (
    build_user_config,
    config_doctor_report,
    config_view_summary,
    render_compact_config,
    write_compact_config,
)


class ConfigViewTest(unittest.TestCase):
    def test_compact_config_omits_default_heavy_sections(self) -> None:
        config = tron.normalize_config(copy.deepcopy(tron.DEFAULT_CONFIG))
        text = render_compact_config(config)
        self.assertIn("now = ", text)
        self.assertIn("[account]", text)
        self.assertIn("[group]", text)
        self.assertIn("school = TKU", text)
        self.assertIn("school = TRONCLASS", text)
        self.assertNotIn("school = FJU", text)
        self.assertNotIn("LEGACY CONFIG", text)
        self.assertNotIn("user-agent", text)
        self.assertNotIn("final_grid_step_meters", text)
        self.assertNotIn("research", text)

    def test_advanced_override_is_preserved(self) -> None:
        config = tron.normalize_config(copy.deepcopy(tron.DEFAULT_CONFIG))
        config["number"]["concurrency"] = 7
        user_config = build_user_config(config)
        self.assertIn("advanced", user_config)
        self.assertEqual(user_config["advanced"]["number"]["concurrency"], 7)
        reloaded = tron.normalize_config(tron.merge_simple_and_advanced_config(user_config["simple"], user_config["advanced"]))
        self.assertEqual(reloaded["number"]["concurrency"], 7)

    def test_write_compact_config_backs_up_existing_file(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            path = Path(temp_dir) / "config.conf"
            path.write_text("[account]\nuser = old\n", encoding="utf-8")
            report = write_compact_config(path, tron.DEFAULT_CONFIG, backup_existing=True)
            self.assertEqual(report["status"], "ok")
            self.assertTrue(Path(report["backup_path"]).exists())
            self.assertIn("now = ", path.read_text(encoding="utf-8"))

    def test_summary_and_doctor_are_safe(self) -> None:
        config = tron.normalize_config(
            {
                "account": {"user": "  user1  ", "passwd": "  secret  "},
                "provider": {"current": " thu "},
            }
        )
        summary = config_view_summary(config)
        report = config_doctor_report(config)
        text = json.dumps({"summary": summary, "report": report}, ensure_ascii=False)
        self.assertIn("active_profile", summary)
        self.assertNotIn("secret", text)


if __name__ == "__main__":
    unittest.main()

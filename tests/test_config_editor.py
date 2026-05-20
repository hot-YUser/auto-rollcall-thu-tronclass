import tempfile
import unittest
from pathlib import Path
from unittest.mock import Mock, patch

from troTHU import tron
from troTHU.config_editor import LEGACY_NOTEPAD_PATH


class ConfigEditorTest(unittest.TestCase):
    def setUp(self) -> None:
        self.original_config = tron.copy.deepcopy(tron.CONFIG)
        self.original_last_login_result = tron.LAST_LOGIN_RESULT

    def tearDown(self) -> None:
        tron.CONFIG.clear()
        tron.CONFIG.update(tron.copy.deepcopy(self.original_config))
        tron.LAST_LOGIN_RESULT = self.original_last_login_result

    def test_open_config_uses_system32_notepad(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            path = Path(temp_dir) / "config.yaml"
            process = Mock()
            process.wait = Mock()
            with patch("pathlib.Path.exists", return_value=True), patch("subprocess.Popen", return_value=process) as popen:
                result = tron.open_config_in_legacy_notepad(path, wait=True)

        self.assertTrue(result["ok"])
        self.assertEqual(Path(result["editor"]), LEGACY_NOTEPAD_PATH)
        popen.assert_called_once_with([str(LEGACY_NOTEPAD_PATH), str(path)])
        process.wait.assert_called_once()

    def test_missing_system32_notepad_returns_safe_error(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            with patch("pathlib.Path.exists", return_value=False):
                result = tron.open_config_in_legacy_notepad(Path(temp_dir) / "config.yaml")

        self.assertFalse(result["ok"])
        self.assertEqual(result["status"], "legacy_notepad_missing")

    def test_ensure_now_opens_editor_when_now_empty(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            path = Path(temp_dir) / "config.yaml"
            tron.CONFIG.clear()
            tron.CONFIG.update(tron.normalize_config(tron.merge_simple_and_advanced_config({"now": "", "accounts": [], "groups": [], "operating": {}}, {})))
            with (
                patch.object(tron, "open_config_in_legacy_notepad", return_value={"ok": True, "status": "opened"}),
                patch.object(tron, "reload_config_after_editor", return_value={"ok": True, "status": "reloaded", "now": ""}),
            ):
                result = tron.ensure_config_now_or_open_editor(path)

        self.assertFalse(result["ok"])
        self.assertEqual(result["status"], "now_empty")

    def test_ensure_now_uses_single_account_without_editor(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            path = Path(temp_dir) / "config.yaml"
            simple = {
                "now": "",
                "accounts": [{"user": "SINGLE", "passwd": "SECRET", "school": "thu"}],
                "groups": [],
                "operating": {},
            }
            tron.CONFIG.clear()
            tron.CONFIG.update(tron.normalize_config(tron.merge_simple_and_advanced_config(simple, {})))
            with patch.object(tron, "open_config_in_legacy_notepad") as opener:
                result = tron.ensure_config_now_or_open_editor(path)

        self.assertTrue(result["ok"])
        self.assertEqual(result["status"], "inferred_single_account")
        self.assertEqual(result["effective_now"], "SINGLE")
        opener.assert_not_called()


if __name__ == "__main__":
    unittest.main()

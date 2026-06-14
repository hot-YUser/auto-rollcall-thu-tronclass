import importlib.util
import os
import sys
import unittest
import tempfile
from pathlib import Path
from unittest.mock import patch, MagicMock, AsyncMock
from troTHU.browser_install import playwright_browsers_path, browser_binary_present, ensure_browser_binary_installed, apply_browsers_path_env

class BrowserInstallTest(unittest.TestCase):
    def test_apply_browsers_path_env_sets_environ(self) -> None:
        # Regression guard for the H1 bug: the env var MUST be pinned to the
        # resolved browsers path (callers invoke this before the driver spawns).
        original = os.environ.get("PLAYWRIGHT_BROWSERS_PATH")
        try:
            os.environ.pop("PLAYWRIGHT_BROWSERS_PATH", None)
            apply_browsers_path_env()
            self.assertEqual(os.environ.get("PLAYWRIGHT_BROWSERS_PATH"), str(playwright_browsers_path()))
        finally:
            if original is None:
                os.environ.pop("PLAYWRIGHT_BROWSERS_PATH", None)
            else:
                os.environ["PLAYWRIGHT_BROWSERS_PATH"] = original

    @patch("troTHU.browser_install.Path.touch", side_effect=PermissionError)
    @patch("os.environ", {"LOCALAPPDATA": "C:\\Users\\Fake\\AppData\\Local"})
    def test_playwright_browsers_path_fallback(self, mock_touch) -> None:
        path = playwright_browsers_path()
        self.assertIn("AppData", str(path))
        self.assertIn("ms-playwright", str(path))

    @patch("troTHU.browser_install.playwright_browsers_path")
    def test_browser_binary_present(self, mock_path) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            temp_path = Path(temp_dir)
            mock_path.return_value = temp_path
            
            self.assertFalse(browser_binary_present())
            
            chrome_dir = temp_path / "chromium-1234" / "chrome-bin"
            chrome_dir.mkdir(parents=True, exist_ok=True)
            # browser_binary_present() globs chrome.exe on Windows, chrome elsewhere.
            exe_name = "chrome.exe" if sys.platform.startswith("win") else "chrome"
            (chrome_dir / exe_name).touch()

            self.assertTrue(browser_binary_present())

    @unittest.skipUnless(importlib.util.find_spec("playwright") is not None, "playwright not installed (bundled only in the exe; CI runs base deps)")
    @patch("troTHU.browser_install.ensure_playwright_node")
    @patch("troTHU.browser_install.browser_binary_present", return_value=False)
    @patch("asyncio.create_subprocess_exec")
    @patch("playwright._impl._driver.compute_driver_executable", return_value="fake_driver.exe")
    def test_ensure_browser_binary_auto_downloads(self, mock_driver, mock_sub, mock_present, mock_node) -> None:
        # No stdin prompt any more: when allowed (default) it downloads directly
        # with progress, so it can't conflict with the keypress watcher.
        mock_process = MagicMock()
        # Output is consumed in chunks now (the \r progress bar has no newlines).
        mock_process.stdout.read = AsyncMock(side_effect=[b"Downloading 50%", b""])
        mock_process.wait = AsyncMock()
        mock_process.returncode = 0
        mock_sub.return_value = mock_process

        from troTHU import tron
        original_config = tron.CONFIG.copy()
        try:
            tron.CONFIG["auth"] = {"browser_assisted_login": {"allow_browser_download": True}}
            import asyncio
            asyncio.run(ensure_browser_binary_installed())
            mock_sub.assert_called_once()
            args = mock_sub.call_args[0]
            self.assertIn("fake_driver.exe", args)
            self.assertIn("install", args)
            self.assertIn("chromium", args)
            self.assertIn("--no-shell", args)
        finally:
            tron.CONFIG.clear()
            tron.CONFIG.update(original_config)

    @patch("troTHU.browser_install.browser_binary_present", return_value=False)
    @patch("asyncio.create_subprocess_exec")
    def test_ensure_skips_download_when_disabled(self, mock_sub, mock_present) -> None:
        from troTHU import tron
        original_config = tron.CONFIG.copy()
        try:
            tron.CONFIG["auth"] = {"browser_assisted_login": {"allow_browser_download": False}}
            import asyncio
            with self.assertRaises(RuntimeError):
                asyncio.run(ensure_browser_binary_installed())
            mock_sub.assert_not_called()
        finally:
            tron.CONFIG.clear()
            tron.CONFIG.update(original_config)

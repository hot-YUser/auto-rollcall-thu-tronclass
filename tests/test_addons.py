from __future__ import annotations

import io
import os
import tempfile
import unittest
import zipfile
import troTHU.addon_runtime as addon
import troTHU.runtime_context as ctx
import troTHU.ocr_sidecar as sidecar
import importlib.machinery
import sys
import types
import troTHU.ocr_captcha as ocr_captcha
import importlib.util
from pathlib import Path
from unittest import mock
from unittest.mock import patch, MagicMock, AsyncMock
from troTHU.browser_install import playwright_browsers_path, browser_binary_present, ensure_browser_binary_installed, apply_browsers_path_env


# --- merged from tests/test_addon_runtime.py ---
class AddonRuntimeTest(unittest.TestCase):
    def setUp(self) -> None:
        self._tmp = tempfile.TemporaryDirectory()
        self.base = Path(self._tmp.name)
        self._orig_base = ctx.BASE_DIR
        ctx.BASE_DIR = self.base
        self._orig_env = os.environ.get("TROTHU_ADDON_URL")
        os.environ.pop("TROTHU_ADDON_URL", None)

    def tearDown(self) -> None:
        ctx.BASE_DIR = self._orig_base
        if self._orig_env is None:
            os.environ.pop("TROTHU_ADDON_URL", None)
        else:
            os.environ["TROTHU_ADDON_URL"] = self._orig_env
        self._tmp.cleanup()

    def _make_bundle(self) -> Path:
        z = self.base / "src_addons.zip"
        with zipfile.ZipFile(z, "w") as a:
            a.writestr("ocr-sidecar/ocr-sidecar.exe", "exe")
            a.writestr("ocr-sidecar/_internal/lib.dll", "dll")
            a.writestr("node.exe", "node")
        return z

    def _make_named_bundle(self, where: Path, name: str | None = None) -> Path:
        z = where / (name or addon.bundle_name())
        with zipfile.ZipFile(z, "w") as a:
            a.writestr("ocr-sidecar/ocr-sidecar.exe", "exe")
            a.writestr("node.exe", "node")
        return z

    def test_bundle_name_is_short_and_distinct(self) -> None:
        name = addon.bundle_name()
        self.assertTrue(name.startswith("addons-v"), name)
        self.assertTrue(name.endswith("-win.zip"), name)
        self.assertNotIn("THU_Auto_Rollcall", name)  # must not look like the main program zip

    def test_bundle_url_default_and_override(self) -> None:
        self.assertIn("releases/download/v1.8-alpha.4/", addon.bundle_url())
        self.assertIn(addon.bundle_name(), addon.bundle_url())
        os.environ["TROTHU_ADDON_URL"] = "C:/local/x.zip"
        self.assertEqual(addon.bundle_url(), "C:/local/x.zip")

    def test_preplaced_zip_reused_without_download(self) -> None:
        self._make_named_bundle(self.base)  # dropped in BASE_DIR (a candidate location)
        with mock.patch.object(addon, "_download") as dl:
            addon.ensure_addons()
        dl.assert_not_called()
        self.assertIsNotNone(addon.downloaded_node_path())
        self.assertTrue(addon.ocr_sidecar_path().name.startswith("ocr-sidecar"))

    def test_preplaced_extracted_dir_reused_without_download(self) -> None:
        root = self.base / addon.bundle_name()[:-4]  # addons-vX-win/
        (root / "ocr-sidecar").mkdir(parents=True)
        (root / "ocr-sidecar" / "ocr-sidecar.exe").write_text("exe")
        (root / "node.exe").write_text("node")
        with mock.patch.object(addon, "_download") as dl:
            addon.ensure_addons()
        dl.assert_not_called()
        self.assertIsNotNone(addon.downloaded_node_path())

    def test_ensure_extracts_local_override_and_finds_members(self) -> None:
        os.environ["TROTHU_ADDON_URL"] = str(self._make_bundle())  # local path -> copied, no urlopen
        with mock.patch.object(ctx, "log_print"):
            addon.ensure_addons()
        self.assertTrue(addon.ocr_sidecar_path().name.startswith("ocr-sidecar"))
        self.assertIsNotNone(addon.downloaded_node_path())
        with mock.patch.object(ctx, "log_print"):  # idempotent (marker present)
            addon.ensure_addons()

    def test_ensure_downloads_via_url(self) -> None:
        data = self._make_bundle().read_bytes()

        class _Resp:
            def __enter__(self):
                return io.BytesIO(data)

            def __exit__(self, *a):
                return False

        with mock.patch("urllib.request.urlopen", return_value=_Resp()), \
             mock.patch.object(ctx, "log_print"):
            addon.ensure_addons()
        self.assertIsNotNone(addon.downloaded_node_path())

    def test_download_disabled_raises(self) -> None:
        with mock.patch.object(ctx, "get_browser_assisted_login_config", return_value={"allow_browser_download": False}):
            with self.assertRaises(addon.AddonUnavailableError):
                addon.ensure_addons()
            self.assertFalse(addon.ocr_sidecar_available())

    def test_sidecar_available_when_download_allowed(self) -> None:
        with mock.patch.object(ctx, "get_browser_assisted_login_config", return_value={"allow_browser_download": True}):
            self.assertTrue(addon.ocr_sidecar_available())


if __name__ == "__main__":
    unittest.main()


# --- merged from tests/test_ocr_sidecar.py ---
class SidecarSelfHealTest(unittest.TestCase):
    def test_no_args_triggers_self_heal(self) -> None:
        with mock.patch.object(sidecar, "_bootstrap_main_program", return_value=99) as boot:
            self.assertEqual(sidecar.main([]), 99)
            boot.assert_called_once()

    def test_image_arg_does_not_self_heal(self) -> None:
        # An image-path arg must NEVER enter the bootstrap path (a missing file -> 3).
        with mock.patch.object(sidecar, "_bootstrap_main_program", side_effect=AssertionError("must not bootstrap")):
            self.assertEqual(sidecar.main(["C:/nope/missing.png"]), 3)

    def test_find_addons_root_walks_up_to_bundle_root(self) -> None:
        with tempfile.TemporaryDirectory() as d:
            root = Path(d)
            (root / "node.exe").write_text("node")
            (root / "ocr-sidecar").mkdir()
            (root / "ocr-sidecar" / "ocr-sidecar.exe").write_text("exe")
            # start = where the sidecar exe lives (the ocr-sidecar/ subdir)
            self.assertEqual(sidecar._find_addons_root(root / "ocr-sidecar"), root)

    def test_bootstrap_downloads_extracts_places_addons_and_launches(self) -> None:
        with tempfile.TemporaryDirectory() as d:
            tmp = Path(d)
            # Simulate the extracted add-on bundle the user double-clicked into.
            addons = tmp / "addons"
            (addons / "ocr-sidecar").mkdir(parents=True)
            (addons / "ocr-sidecar" / "ocr-sidecar.exe").write_text("exe")
            (addons / "node.exe").write_text("node")
            sidecar_dir = addons / "ocr-sidecar"

            # A fake "main program" release zip with the real PyInstaller exe name.
            fake_zip = tmp / "fake_main.zip"
            with zipfile.ZipFile(fake_zip, "w") as z:
                z.writestr("auto-rollcall-thu-tronclass.exe", "MAIN")
                z.writestr("_internal/x.dll", "dll")

            def fake_download(url: str, dest: Path) -> None:
                dest.write_bytes(fake_zip.read_bytes())

            launched = {}

            class _Popen:
                def __init__(self, cmd, cwd=None):
                    launched["cmd"] = cmd
                    launched["cwd"] = cwd

            with mock.patch.object(sidecar, "_exe_dir", return_value=sidecar_dir), \
                 mock.patch.object(sidecar, "_latest_main_asset_url", return_value="https://example/main.zip"), \
                 mock.patch.object(sidecar, "_download_file", side_effect=fake_download), \
                 mock.patch("subprocess.Popen", _Popen):
                rc = sidecar._bootstrap_main_program()

            self.assertEqual(rc, 0)
            # Launched the extracted main exe.
            self.assertTrue(launched["cmd"][0].lower().endswith("auto-rollcall-thu-tronclass.exe"))
            main_exe = Path(launched["cmd"][0])
            self.assertTrue(main_exe.exists())
            # Extracted OUTSIDE the add-on folder (sibling), so re-zipping is safe.
            self.assertNotIn("addons", main_exe.relative_to(tmp).parts[:1])
            # Dropped a content-valid addons.zip next to the main exe (sidecar + node).
            placed = main_exe.parent / "addons.zip"
            self.assertTrue(placed.is_file())
            with zipfile.ZipFile(placed) as z:
                names = [n.replace("\\", "/").rsplit("/", 1)[-1] for n in z.namelist()]
            self.assertIn("ocr-sidecar.exe", names)
            self.assertIn("node.exe", names)

    def test_bootstrap_reports_when_asset_url_unavailable(self) -> None:
        with mock.patch.object(sidecar, "_latest_main_asset_url", return_value=None):
            self.assertEqual(sidecar._bootstrap_main_program(), 4)


if __name__ == "__main__":
    unittest.main()


# --- merged from tests/test_ocr_captcha.py ---
class FakeDdddOcr:
    instances = 0
    next_result = "1234"
    raise_on_classify = False

    def __init__(self, show_ad=True, **kwargs):
        FakeDdddOcr.instances += 1
        self.show_ad = show_ad
        self.kwargs = kwargs
        self.ranges_calls = []

    def set_ranges(self, charset):
        self.ranges_calls.append(charset)

    def classification(self, image_bytes, **kwargs):
        if FakeDdddOcr.raise_on_classify:
            raise RuntimeError("boom")
        return FakeDdddOcr.next_result


def _reset_module_state() -> None:
    ocr_captcha._OCR_SINGLETON = None
    ocr_captcha._OCR_INIT_FAILED = False
    ocr_captcha._CURRENT_RANGE = ""


class OcrCaptchaTest(unittest.TestCase):
    def setUp(self) -> None:
        _reset_module_state()
        FakeDdddOcr.instances = 0
        FakeDdddOcr.next_result = "1234"
        FakeDdddOcr.raise_on_classify = False
        self._saved = sys.modules.get("ddddocr")
        fake = types.ModuleType("ddddocr")
        fake.__spec__ = importlib.machinery.ModuleSpec("ddddocr", loader=None)
        fake.DdddOcr = FakeDdddOcr
        sys.modules["ddddocr"] = fake

    def tearDown(self) -> None:
        if self._saved is not None:
            sys.modules["ddddocr"] = self._saved
        else:
            sys.modules.pop("ddddocr", None)
        _reset_module_state()

    def test_available_true_when_module_present(self) -> None:
        self.assertTrue(ocr_captcha.ddddocr_available())

    def test_solve_strips_and_filters_to_charset(self) -> None:
        FakeDdddOcr.next_result = "  12a34 "
        self.assertEqual(ocr_captcha.solve_captcha(b"img", charset="0123456789"), "1234")

    def test_solve_without_charset_returns_stripped(self) -> None:
        FakeDdddOcr.next_result = "  ab12 "
        self.assertEqual(ocr_captcha.solve_captcha(b"img"), "ab12")

    def test_engine_is_singleton(self) -> None:
        ocr_captcha.solve_captcha(b"a", charset="0123456789")
        ocr_captcha.solve_captcha(b"b", charset="0123456789")
        ocr_captcha.get_ocr_engine()
        self.assertEqual(FakeDdddOcr.instances, 1)

    def test_set_ranges_applied_once_for_same_charset(self) -> None:
        ocr_captcha.solve_captcha(b"a", charset="0123456789")
        ocr_captcha.solve_captcha(b"b", charset="0123456789")
        self.assertEqual(ocr_captcha._OCR_SINGLETON.ranges_calls, ["0123456789"])

    def test_show_ad_disabled(self) -> None:
        ocr_captcha.get_ocr_engine()
        self.assertFalse(ocr_captcha._OCR_SINGLETON.show_ad)

    def test_classification_failure_returns_empty(self) -> None:
        FakeDdddOcr.raise_on_classify = True
        self.assertEqual(ocr_captcha.solve_captcha(b"img", charset="0123456789"), "")

    def test_status_reports_loaded_after_use(self) -> None:
        self.assertFalse(ocr_captcha.ocr_captcha_status()["engine_loaded"])
        ocr_captcha.solve_captcha(b"img", charset="0123456789")
        status = ocr_captcha.ocr_captcha_status()
        self.assertTrue(status["available"])
        self.assertTrue(status["engine_loaded"])


class OcrAvailabilityTest(unittest.TestCase):
    """Availability spans two backends: in-process ddddocr OR a downloadable sidecar."""

    def setUp(self) -> None:
        _reset_module_state()
        self._saved = sys.modules.pop("ddddocr", None)

    def tearDown(self) -> None:
        if self._saved is not None:
            sys.modules["ddddocr"] = self._saved
        _reset_module_state()

    def test_available_via_sidecar_when_no_inprocess_but_download_allowed(self) -> None:
        import troTHU.addon_runtime as addon
        with mock.patch.object(ocr_captcha.importlib.util, "find_spec", return_value=None), \
             mock.patch.object(addon, "ocr_sidecar_available", return_value=True):
            self.assertTrue(ocr_captcha.ddddocr_available())

    def test_unavailable_when_no_inprocess_and_no_sidecar(self) -> None:
        import troTHU.addon_runtime as addon
        with mock.patch.object(ocr_captcha.importlib.util, "find_spec", return_value=None), \
             mock.patch.object(addon, "ocr_sidecar_available", return_value=False):
            self.assertFalse(ocr_captcha.ddddocr_available())

    def test_get_engine_raises_when_missing(self) -> None:
        with mock.patch.dict(sys.modules, {"ddddocr": None}):
            with self.assertRaises(ocr_captcha.OcrUnavailableError):
                ocr_captcha.get_ocr_engine()


class OcrSidecarBackendTest(unittest.TestCase):
    """When ddddocr isn't importable, solve_captcha shells out to the sidecar."""

    def setUp(self) -> None:
        _reset_module_state()
        self._saved = sys.modules.pop("ddddocr", None)

    def tearDown(self) -> None:
        if self._saved is not None:
            sys.modules["ddddocr"] = self._saved
        _reset_module_state()

    def test_solve_uses_sidecar_and_filters(self) -> None:
        import troTHU.addon_runtime as addon
        with mock.patch.object(ocr_captcha.importlib.util, "find_spec", return_value=None), \
             mock.patch.object(addon, "ocr_sidecar_path", return_value=Path("fju-ocr.exe")), \
             mock.patch("subprocess.run") as run:
            run.return_value = types.SimpleNamespace(returncode=0, stdout=b" 12a34 ")
            self.assertEqual(ocr_captcha.solve_captcha(b"img", charset="0123456789"), "1234")

    def test_sidecar_nonzero_is_retryable_miss(self) -> None:
        import troTHU.addon_runtime as addon
        with mock.patch.object(ocr_captcha.importlib.util, "find_spec", return_value=None), \
             mock.patch.object(addon, "ocr_sidecar_path", return_value=Path("fju-ocr.exe")), \
             mock.patch("subprocess.run") as run:
            run.return_value = types.SimpleNamespace(returncode=1, stdout=b"")
            self.assertEqual(ocr_captcha.solve_captcha(b"img", charset="0123456789"), "")

    def test_sidecar_unobtainable_raises_ocr_unavailable(self) -> None:
        import troTHU.addon_runtime as addon
        with mock.patch.object(ocr_captcha.importlib.util, "find_spec", return_value=None), \
             mock.patch.object(addon, "ocr_sidecar_path", side_effect=addon.AddonUnavailableError("nope")):
            with self.assertRaises(ocr_captcha.OcrUnavailableError):
                ocr_captcha.solve_captcha(b"img", charset="0123456789")


if __name__ == "__main__":
    unittest.main()


# --- merged from tests/test_browser_install.py ---
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

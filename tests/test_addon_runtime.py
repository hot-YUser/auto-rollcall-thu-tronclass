"""Hermetic tests for the add-on bundle downloader (no real network)."""
import io
import os
import tempfile
import unittest
import zipfile
from pathlib import Path
from unittest import mock

import troTHU.addon_runtime as addon
import troTHU.runtime_context as ctx


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
            a.writestr("fju-ocr/fju-ocr.exe", "exe")
            a.writestr("fju-ocr/_internal/lib.dll", "dll")
            a.writestr("node.exe", "node")
        return z

    def test_bundle_url_default_and_override(self) -> None:
        self.assertIn("releases/download/v1.5-alpha.1/", addon.bundle_url())
        os.environ["TROTHU_ADDON_URL"] = "C:/local/x.zip"
        self.assertEqual(addon.bundle_url(), "C:/local/x.zip")

    def test_ensure_extracts_local_override_and_finds_members(self) -> None:
        os.environ["TROTHU_ADDON_URL"] = str(self._make_bundle())  # local path -> copied, no urlopen
        with mock.patch.object(ctx, "log_print"):
            addon.ensure_addons()
        self.assertTrue(addon.ocr_sidecar_path().name.startswith("fju-ocr"))
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

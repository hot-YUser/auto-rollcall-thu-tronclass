"""Hermetic tests for the OCR sidecar's self-heal path (no real network / ddddocr).

The main program always invokes the sidecar with an image path, so a no-args launch
means a user ran the add-on bundle's exe by mistake -> it should fetch + launch the
main program and drop the add-ons next to it.
"""
from __future__ import annotations

import tempfile
import unittest
import zipfile
from pathlib import Path
from unittest import mock

import troTHU.ocr_sidecar as sidecar


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

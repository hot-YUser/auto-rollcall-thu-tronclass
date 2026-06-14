# -*- mode: python ; coding=utf-8 -*-
"""PyInstaller spec for the standalone OCR captcha sidecar (`fju-ocr`).

Ships in the downloadable add-on bundle, NOT in the lean main exe. Bundles the
heavy OCR stack (ddddocr + its model + onnxruntime + opencv + numpy + PIL).
Build the sidecar in an env with opencv-python-headless (smaller than the full
opencv-python) installed alongside `pip install .[ocr]`.
"""
from pathlib import Path

from PyInstaller.utils.hooks import collect_all

ROOT = Path(SPECPATH)  # noqa: F821 - PyInstaller-provided global
ENTRYPOINT = ROOT / "troTHU" / "ocr_sidecar.py"
NAME = "fju-ocr"

datas = []
binaries = []
hiddenimports = []
for pkg in ("ddddocr", "onnxruntime", "cv2", "numpy", "PIL"):
    try:
        pkg_datas, pkg_binaries, pkg_hidden = collect_all(pkg)
        datas += pkg_datas
        binaries += pkg_binaries
        hiddenimports += pkg_hidden
    except Exception:
        pass
hiddenimports = sorted(set(hiddenimports + ["ddddocr", "onnxruntime", "cv2", "numpy", "PIL"]))

a = Analysis(
    [str(ENTRYPOINT)],
    pathex=[str(ROOT)],
    binaries=binaries,
    datas=datas,
    hiddenimports=hiddenimports,
    hookspath=[],
    hooksconfig={},
    runtime_hooks=[],
    # The sidecar only needs the OCR stack — keep the app/runtime deps out.
    excludes=["playwright", "aiohttp", "PyNaCl", "nacl", "yaml", "tests", "pytest", "keyring"],
    noarchive=False,
    optimize=0,
)
pyz = PYZ(a.pure)
exe = EXE(
    pyz,
    a.scripts,
    [],
    exclude_binaries=True,
    name=NAME,
    console=True,
    upx=False,
)
coll = COLLECT(exe, a.binaries, a.datas, strip=False, upx=False, name=NAME)

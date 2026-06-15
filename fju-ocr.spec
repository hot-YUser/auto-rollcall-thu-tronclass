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

# Drop dependency test suites (numpy/f2py/tests …) — dead weight, and a "tests" path
# part trips the release artifact forbidden-name guard. Also drop the two ddddocr
# models the sidecar never loads (beta `common.onnx` ~54MB + detection `common_det`
# ~20MB); DdddOcr(show_ad=False) uses `common_old.onnx` only.
_DROP_MODELS = {"common.onnx", "common_det.onnx"}
def _keep_data(entry):
    src = str(entry[0]).replace("\\", "/").lower()   # source file (carries the filename)
    dest = str(entry[1]).replace("\\", "/").lower()  # destination directory
    if src.rsplit("/", 1)[-1] in _DROP_MODELS:
        return False
    return "tests" not in src.split("/") and "tests" not in dest.split("/")
datas = [d for d in datas if _keep_data(d)]

a = Analysis(
    [str(ENTRYPOINT)],
    pathex=[str(ROOT)],
    binaries=binaries,
    datas=datas,
    hiddenimports=hiddenimports,
    hookspath=[],
    hooksconfig={},
    runtime_hooks=[],
    # The sidecar only needs ddddocr + onnxruntime + cv2 + numpy + PIL. Exclude the
    # app/runtime deps AND the heavy ML packages that onnxruntime.training / optional
    # imports drag in from a shared site-packages (torch alone is ~377MB).
    excludes=[
        "playwright", "aiohttp", "PyNaCl", "nacl", "yaml", "tests", "pytest", "keyring",
        "onnxruntime.training",
        "torch", "torchvision", "torchaudio",
        "transformers", "tokenizers", "huggingface_hub", "hf_xet", "safetensors",
        "datasets", "accelerate",
        "scipy", "pandas", "matplotlib", "sympy", "sklearn",
        "lxml", "cryptography", "pydantic", "pydantic_core",
        "IPython", "jupyter", "notebook",
        "win32com", "Pythonwin",
    ],
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

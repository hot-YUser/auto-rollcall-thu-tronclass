"""Local, offline OCR for login image captchas.

Some TronClass tenants gate their login form behind a static text/number image
captcha (e.g. Fu Jen / FJU's Apereo CAS, a 4-digit numeric `captcha.jpg`).

Two backends, picked automatically:
- **in-process** `ddddocr` — used when the optional `ocr` extra is installed
  (`pip install -e .[ocr]`), e.g. source checkouts. Carries its own model.
- **sidecar** — the lean default exe does NOT bundle the heavy OCR stack
  (onnxruntime/cv2/...). Instead a standalone `fju-ocr` executable lives in the
  downloadable add-on bundle (see `addon_runtime`); we shell out to it.

If neither is available the module degrades to "unavailable" and FJU falls back
to manual-cookie / browser-assisted login. The raw captcha bytes and the solved
text are sensitive (they authenticate a login); this module never logs either.
"""
from __future__ import annotations

import importlib.util
import subprocess
import tempfile
from pathlib import Path
from typing import Any, Dict

_OCR_SINGLETON: Any = None
_OCR_INIT_FAILED = False
_CURRENT_RANGE: str = ""


class OcrUnavailableError(RuntimeError):
    """Raised when no OCR backend (in-process ddddocr nor sidecar) can run."""


def _inprocess_importable() -> bool:
    try:
        return importlib.util.find_spec("ddddocr") is not None
    except (ImportError, AttributeError, ValueError):
        return False


def ddddocr_available() -> bool:
    """True if captcha OCR can run — in-process ddddocr OR a usable sidecar.

    Kept as the single gate the manual-cookie fallback predicate consults
    (`auth_runtime.provider_requires_manual_cookie_login`): when this is False,
    FJU degrades to manual-cookie login.
    """
    if _inprocess_importable():
        return True
    try:
        import troTHU.addon_runtime as addon
        return addon.ocr_sidecar_available()
    except Exception:
        return False


def get_ocr_engine() -> Any:
    """Lazily build and cache a single shared in-process ddddocr engine.

    The onnx model load is heavy, so the engine is a module-level singleton.
    Raises OcrUnavailableError when ddddocr is not importable in this process.
    """
    global _OCR_SINGLETON, _OCR_INIT_FAILED
    if _OCR_SINGLETON is not None:
        return _OCR_SINGLETON
    if _OCR_INIT_FAILED:
        raise OcrUnavailableError("ddddocr 先前初始化失敗。")
    try:
        import ddddocr  # type: ignore
    except Exception as exc:
        _OCR_INIT_FAILED = True
        raise OcrUnavailableError("找不到 ddddocr，請執行 pip install -e .[ocr] 後重試。") from exc
    try:
        engine = ddddocr.DdddOcr(show_ad=False)
    except Exception as exc:
        _OCR_INIT_FAILED = True
        raise OcrUnavailableError("ddddocr 引擎初始化失敗：{}".format(exc)) from exc
    _OCR_SINGLETON = engine
    return engine


def _ensure_range(engine: Any, charset: str) -> None:
    global _CURRENT_RANGE
    if charset and _CURRENT_RANGE != charset:
        try:
            engine.set_ranges(charset)
            _CURRENT_RANGE = charset
        except Exception:
            pass


def _normalize(text: str, charset: str | None) -> str:
    text = str(text or "").strip()
    if charset:
        allowed = set(charset)
        text = "".join(ch for ch in text if ch in allowed)
    return text


def _solve_inprocess(image_bytes: bytes, charset: str | None) -> str:
    engine = get_ocr_engine()
    if charset:
        _ensure_range(engine, charset)
    try:
        raw = engine.classification(image_bytes)
    except Exception:
        return ""
    return _normalize(raw, charset)


def _solve_via_sidecar(image_bytes: bytes, charset: str | None) -> str:
    import troTHU.addon_runtime as addon

    try:
        exe = addon.ocr_sidecar_path()  # ensures the add-on bundle is downloaded/extracted
    except Exception as exc:
        raise OcrUnavailableError("OCR sidecar 無法取得：{}".format(exc)) from exc
    tmp = Path(tempfile.gettempdir()) / "trothu_captcha_in.bin"
    tmp.write_bytes(image_bytes)
    try:
        proc = subprocess.run(
            [str(exe), str(tmp), charset or ""],
            capture_output=True,
            timeout=60,
        )
    except Exception as exc:
        raise OcrUnavailableError("OCR sidecar 執行失敗：{}".format(exc)) from exc
    finally:
        try:
            tmp.unlink()
        except OSError:
            pass
    if proc.returncode != 0:
        return ""  # treat as a retryable miss
    return _normalize(proc.stdout.decode("utf-8", "replace"), charset)


def solve_captcha(image_bytes: bytes, charset: str | None = None) -> str:
    """Recognise an image captcha, returning the normalised text.

    Prefers in-process ddddocr; otherwise shells out to the downloaded sidecar.
    A recognition miss returns "" (retryable by the caller); only a wholly
    unavailable backend raises OcrUnavailableError.
    """
    if _inprocess_importable():
        return _solve_inprocess(image_bytes, charset)
    return _solve_via_sidecar(image_bytes, charset)


def ocr_captcha_status() -> Dict[str, Any]:
    """Small status dict for `doctor`."""
    sidecar = False
    try:
        import troTHU.addon_runtime as addon
        sidecar = addon.ocr_sidecar_available()
    except Exception:
        pass
    return {
        "available": ddddocr_available(),
        "backend": "in-process" if _inprocess_importable() else ("sidecar" if sidecar else "none"),
        "engine_loaded": _OCR_SINGLETON is not None,
        "init_failed": _OCR_INIT_FAILED,
    }

"""Local, offline OCR for login image captchas (opt-in `ocr` extra).

Some TronClass tenants gate their login form behind a static text/number image
captcha (e.g. Fu Jen / FJU's Apereo CAS, a 4-digit numeric `captcha.jpg`). This
module wraps `ddddocr` (https://github.com/sml2h3/ddddocr) so a login adapter
can solve such a captcha without any operator input.

`ddddocr` (onnxruntime + a bundled model, ~100MB installed) is intentionally an
*optional* dependency: it is imported lazily and the whole module degrades to
"unavailable" when it is not installed, so the default small release keeps
working and FJU simply falls back to manual-cookie / browser-assisted login.

The raw captcha bytes and the solved text are sensitive (they authenticate a
login); this module never logs either.
"""
from __future__ import annotations

import importlib.util
from typing import Any, Dict

_OCR_SINGLETON: Any = None
_OCR_INIT_FAILED = False
_CURRENT_RANGE: str = ""


class OcrUnavailableError(RuntimeError):
    """Raised when ddddocr cannot be imported or its engine cannot start."""


def ddddocr_available() -> bool:
    """True if the optional `ddddocr` package is importable (no engine load)."""
    try:
        return importlib.util.find_spec("ddddocr") is not None
    except (ImportError, AttributeError, ValueError):
        return False


def get_ocr_engine() -> Any:
    """Lazily build and cache a single shared ddddocr engine.

    The onnx model load is heavy (~tens of MB), so the engine is a module-level
    singleton — never rebuilt per captcha. Raises OcrUnavailableError when the
    optional dependency is missing or the engine fails to initialise.
    """
    global _OCR_SINGLETON, _OCR_INIT_FAILED
    if _OCR_SINGLETON is not None:
        return _OCR_SINGLETON
    if _OCR_INIT_FAILED:
        raise OcrUnavailableError("ddddocr 先前初始化失敗；請確認已安裝 pip install -e .[ocr]。")
    try:
        import ddddocr  # type: ignore
    except Exception as exc:  # pragma: no cover - depends on optional install
        _OCR_INIT_FAILED = True
        raise OcrUnavailableError("找不到 ddddocr，請執行 pip install -e .[ocr] 後重試。") from exc
    try:
        engine = ddddocr.DdddOcr(show_ad=False)
    except Exception as exc:  # pragma: no cover - depends on optional install
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


def solve_captcha(image_bytes: bytes, charset: str | None = None) -> str:
    """Recognise an image captcha and return the normalised text.

    `charset`, when given, both restricts the model's output alphabet (via
    ddddocr.set_ranges) and filters the result to that alphabet — a big accuracy
    win for fixed-alphabet captchas (e.g. digits only). A recognition failure
    returns "" (treated as a retryable miss by the caller); only a missing/broken
    engine raises (OcrUnavailableError).
    """
    engine = get_ocr_engine()
    if charset:
        _ensure_range(engine, charset)
    try:
        raw = engine.classification(image_bytes)
    except Exception:
        return ""
    text = str(raw or "").strip()
    if charset:
        allowed = set(charset)
        text = "".join(ch for ch in text if ch in allowed)
    return text


def ocr_captcha_status() -> Dict[str, Any]:
    """Small status dict for `doctor` — availability and whether a model is loaded."""
    return {
        "available": ddddocr_available(),
        "engine_loaded": _OCR_SINGLETON is not None,
        "init_failed": _OCR_INIT_FAILED,
    }

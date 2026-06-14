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
import os
import shutil
from pathlib import Path
from typing import Any, Dict

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore

_OCR_SINGLETON: Any = None
_OCR_INIT_FAILED = False
_CURRENT_RANGE: str = ""

# Default ddddocr OCR model. The compiled stack (onnxruntime/cv2/numpy/PIL) is
# bundled, but this ~14MB model is downloaded on first use so the release isn't
# carrying model weights it may never need. ddddocr's default loader reads it
# from its own package dir, so we just place it there. sha256 pins integrity.
_MODEL_NAME = "common_old.onnx"
_MODEL_URL = "https://github.com/hot-YUser/auto-rollcall-thu-tronclass/releases/download/v1.5-alpha.1/common_old.onnx"
_MODEL_SHA256 = "b8f2ad9cbc1f2e3922a6cb9459e30824e7e2467f3fb4fd61420640e34ea0bf68"


class OcrUnavailableError(RuntimeError):
    """Raised when ddddocr cannot be imported or its engine cannot start."""


def ddddocr_available() -> bool:
    """True if the optional `ddddocr` package is importable (no engine load)."""
    try:
        return importlib.util.find_spec("ddddocr") is not None
    except (ImportError, AttributeError, ValueError):
        return False


def _model_cache_path() -> Path:
    """Persistent location for the downloaded model (survives across runs)."""
    try:
        base = Path(ctx.BASE_DIR) / "state" / "ocr"
        base.mkdir(parents=True, exist_ok=True)
        return base / _MODEL_NAME
    except Exception:
        local = os.environ.get("LOCALAPPDATA")
        root = Path(local) / "auto-rollcall-thu-tronclass" / "ocr" if local else Path.home() / ".cache" / "trothu-ocr"
        root.mkdir(parents=True, exist_ok=True)
        return root / _MODEL_NAME


def _download_model(dest: Path) -> None:
    import hashlib
    import urllib.request

    tmp = dest.with_suffix(dest.suffix + ".part")
    try:
        ctx.log_print("【OCR】首次使用需下載驗證碼辨識模型（約 14MB）…")
        with urllib.request.urlopen(_MODEL_URL, timeout=120) as resp, open(tmp, "wb") as f:
            shutil.copyfileobj(resp, f)
        if hashlib.sha256(tmp.read_bytes()).hexdigest() != _MODEL_SHA256:
            raise OcrUnavailableError("OCR 模型雜湊不符，下載可能損毀。")
        os.replace(tmp, dest)
        ctx.log_print("【OCR】模型下載完成。")
    except OcrUnavailableError:
        tmp.unlink(missing_ok=True)
        raise
    except Exception as exc:
        tmp.unlink(missing_ok=True)
        raise OcrUnavailableError("OCR 模型下載失敗：{}".format(exc)) from exc


def _ensure_default_model() -> None:
    """Make ddddocr's default model present in its package dir, downloading it
    once into a persistent cache if the bundle shipped without it (the exe does;
    a `pip install .[ocr]` source tree already has it)."""
    import ddddocr  # type: ignore

    pkg_file = getattr(ddddocr, "__file__", None)
    if not pkg_file:  # e.g. a test fake module — nothing to place
        return
    target = Path(pkg_file).parent / _MODEL_NAME
    if target.exists():
        return
    cache = _model_cache_path()
    if not cache.exists():
        _download_model(cache)
    try:
        # ponytail: copy into the (frozen-exe temp) package dir each launch — it's
        # where ddddocr's default loader looks; the persistent cache avoids re-download.
        shutil.copyfile(cache, target)
    except OSError as exc:
        raise OcrUnavailableError("OCR 模型就緒失敗：{}".format(exc)) from exc


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
    _ensure_default_model()
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

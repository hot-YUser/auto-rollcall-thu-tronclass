"""Read a QR payload from the system clipboard (clipboard-only assist).

The QR `data` token is never exposed by any student API (confirmed by live
capture), so the only way to obtain it is from the QR the teacher displays.
This module lets the monitor pick that up hands-off: the user snips the QR
(Win+Shift+S copies an image) or copies the payload text, and the monitor
decodes it and submits within the rollcall window.

Clipboard sources:
  - image: ``PIL.ImageGrab.grabclipboard()`` (Windows/macOS) -> decode via the
    existing opencv/pyzbar pipeline (`decode_qr_image_file`).
  - text:  ``tkinter`` clipboard -> used only if it looks like a QR payload.

Both backends are imported lazily and fully guarded: if unavailable (headless,
missing optional deps) the reader simply returns "nothing found".
"""
from __future__ import annotations

import hashlib
import tempfile
from pathlib import Path
from typing import Any, Callable, Dict, Optional

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore


def _hash(text: str) -> str:
    return hashlib.sha256(str(text or "").encode("utf-8")).hexdigest()[:16]


def clipboard_autosubmit_enabled(config: Any) -> bool:
    """On by default so a bare `python -m troTHU.tron` picks up snipped QRs."""
    section = config.get("qr") if hasattr(config, "get") else None
    if not hasattr(section, "get"):
        return True
    value = section.get("clipboard_autosubmit", True)
    if isinstance(value, str):
        return value.strip().lower() not in ("0", "false", "no", "off")
    return bool(value)


def read_clipboard_image_tempfile() -> Optional[Path]:
    """Return a path to the current clipboard image (saved to temp), or None."""
    try:
        from PIL import ImageGrab  # type: ignore
    except Exception:
        return None
    try:
        obj = ImageGrab.grabclipboard()
    except Exception:
        return None
    if obj is None:
        return None
    if isinstance(obj, list):  # files copied to clipboard
        for item in obj:
            candidate = Path(str(item))
            if candidate.exists() and candidate.is_file():
                return candidate
        return None
    try:  # a PIL.Image instance
        target = Path(tempfile.gettempdir()) / "trothu_clipboard_qr.png"
        obj.save(target, "PNG")
        return target
    except Exception:
        return None


def read_clipboard_text() -> str:
    try:
        import tkinter  # type: ignore
    except Exception:
        return ""
    root = None
    try:
        root = tkinter.Tk()
        root.withdraw()
        return str(root.clipboard_get() or "")
    except Exception:
        return ""
    finally:
        if root is not None:
            try:
                root.destroy()
            except Exception:
                pass


def looks_like_qr_payload(text: str) -> bool:
    candidate = str(text or "").strip()
    if not candidate:
        return False
    if "/j?" in candidate or "/scanner-jumper" in candidate:
        return True
    if candidate.startswith(("{", "_p=", "p=", "?")):
        return True
    return "rollcallId" in candidate or "activityType" in candidate


def read_clipboard_qr_payload(
    *,
    image_reader: Optional[Callable[[], Optional[Path]]] = None,
    text_reader: Optional[Callable[[], str]] = None,
    decoder: Any = None,
) -> Dict[str, Any]:
    """Try to read a QR payload from the clipboard. Image first, then text.

    Returns {"ok", "payload", "source", "content_hash", "status"}. Readers are
    injectable for testing.
    """
    image_fn = image_reader or read_clipboard_image_tempfile
    text_fn = text_reader or read_clipboard_text

    image_path = image_fn()
    if image_path is not None:
        decoded = ctx.decode_qr_image_file(image_path, decoder=decoder)
        if decoded.get("ok"):
            payload = str(decoded.get("payload") or "")
            return {"ok": True, "payload": payload, "source": "image", "content_hash": _hash(payload), "status": "decoded"}

    text = text_fn()
    if looks_like_qr_payload(text):
        payload = ctx.sanitize_input_field(text, field_type="qr_payload", field_name="clipboard qr").value
        return {"ok": True, "payload": payload, "source": "text", "content_hash": _hash(payload), "status": "text"}

    return {"ok": False, "payload": "", "source": "", "content_hash": "", "status": "no_qr_in_clipboard"}

"""Standalone OCR captcha sidecar entry point.

Built as its own small PyInstaller exe (`fju-ocr`) that ships in the optional
add-on bundle, so the lean main exe needn't carry ddddocr/onnxruntime/cv2.

Protocol: ``fju-ocr.exe <image_path> [charset]`` -> prints the recognised text to
stdout (exit 0). Non-zero exit / empty output = recognition failure (the caller's
retry loop handles it). Self-contained: imports only ddddocr (bundled alongside),
never the troTHU app, to keep the sidecar build small.
"""
from __future__ import annotations

import sys


def main(argv: list[str] | None = None) -> int:
    argv = sys.argv[1:] if argv is None else argv
    if not argv:
        return 2
    image_path = argv[0]
    charset = argv[1] if len(argv) > 1 and argv[1] else None
    try:
        with open(image_path, "rb") as f:
            data = f.read()
    except OSError:
        return 3
    try:
        import ddddocr  # bundled in the sidecar exe / available via the [ocr] extra

        ocr = ddddocr.DdddOcr(show_ad=False)
        if charset:
            try:
                ocr.set_ranges(charset)
            except Exception:
                pass
        raw = ocr.classification(data)
    except Exception:
        return 1
    text = str(raw or "").strip()
    if charset:
        allowed = set(charset)
        text = "".join(ch for ch in text if ch in allowed)
    sys.stdout.write(text)
    sys.stdout.flush()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

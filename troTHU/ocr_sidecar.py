"""Standalone OCR captcha sidecar entry point.

Built as its own small PyInstaller exe (`ocr-sidecar`) that ships in the optional
add-on bundle, so the lean main exe needn't carry ddddocr/onnxruntime/cv2.

Two roles, selected by argv:
- ``ocr-sidecar.exe <image_path> [charset]`` (how the main program calls it) ->
  prints the recognised text to stdout (exit 0). Non-zero / empty = recognition
  failure (the caller's retry loop handles it).
- ``ocr-sidecar.exe`` with NO args (a confused user double-clicked the wrong zip)
  -> SELF-HEAL: this is the add-on bundle, not the main program, so download the
  main program from the GitHub release, drop the add-ons we already have next to it
  (so it won't re-download them), and launch it. See ``_bootstrap_main_program``.

Self-contained: the OCR path imports only ddddocr (bundled alongside); the
self-heal path uses only the stdlib. It never imports the troTHU app, to keep the
sidecar build small.
"""
from __future__ import annotations

import sys
from pathlib import Path
from typing import List, Optional

_REPO = "hot-YUser/auto-rollcall-thu-tronclass"
_RELEASES_PAGE = "https://github.com/{}/releases/latest".format(_REPO)
_USER_AGENT = "trothu-ocr-sidecar"


# --------------------------------------------------------------------------- #
# Self-heal: user grabbed the add-on bundle and ran ocr-sidecar.exe directly.
# --------------------------------------------------------------------------- #
def _exe_dir() -> Path:
    """Directory the running sidecar exe lives in (overridable in tests)."""
    try:
        return Path(sys.executable).resolve().parent
    except Exception:
        return Path.cwd()


def _latest_main_asset_url() -> Optional[str]:
    """Browser-download URL of the main-program zip from the latest GitHub release
    (``THU_Auto_Rollcall-*-windows-x64.zip``). Latest, so a stale add-on exe still
    fetches the newest program. Returns None on any API/network error."""
    import json
    import urllib.request

    api = "https://api.github.com/repos/{}/releases/latest".format(_REPO)
    req = urllib.request.Request(
        api, headers={"Accept": "application/vnd.github+json", "User-Agent": _USER_AGENT}
    )
    try:
        with urllib.request.urlopen(req, timeout=60) as resp:
            data = json.loads(resp.read().decode("utf-8", "replace"))
    except Exception:
        return None
    for asset in data.get("assets", []) or []:
        name = str(asset.get("name") or "").lower()
        if name.startswith("thu_auto_rollcall") and name.endswith("-windows-x64.zip"):
            url = asset.get("browser_download_url")
            if url:
                return str(url)
    return None


def _download_file(url: str, dest: Path) -> None:
    import urllib.request

    req = urllib.request.Request(url, headers={"User-Agent": _USER_AGENT})
    with urllib.request.urlopen(req, timeout=600) as resp, open(dest, "wb") as handle:
        while True:
            chunk = resp.read(262144)
            if not chunk:
                break
            handle.write(chunk)


def _find_addons_root(start: Optional[Path] = None) -> Optional[Path]:
    """The add-on bundle root — the dir holding BOTH the sidecar and node.exe. The
    zip lays them out as ``ocr-sidecar/ocr-sidecar.exe`` + ``node.exe``, so the root
    is usually the running exe's parent or grandparent."""
    base = Path(start) if start is not None else _exe_dir()
    for d in (base, base.parent, base.parent.parent):
        try:
            has_sidecar = (d / "ocr-sidecar").is_dir() or any(
                (d / n).exists() for n in ("ocr-sidecar.exe", "ocr-sidecar")
            )
            if has_sidecar and (d / "node.exe").exists():
                return d
        except OSError:
            continue
    return None


def _find_main_exe(root: Path) -> Optional[Path]:
    """Locate the main program exe inside the freshly extracted release dir."""
    hits = [p for p in Path(root).rglob("*.exe") if p.is_file()]
    for p in hits:  # exact PyInstaller name first
        if p.name.lower() == "auto-rollcall-thu-tronclass.exe":
            return p
    for p in hits:
        low = p.name.lower()
        if low.startswith("thu_auto_rollcall") and low.endswith(".exe"):
            return p
    for p in hits:  # any exe that isn't the add-ons we shipped
        if p.name.lower() not in ("ocr-sidecar.exe", "node.exe"):
            return p
    return None


def _zip_dir(src: Path, dest_zip: Path) -> None:
    import zipfile

    src = Path(src)
    with zipfile.ZipFile(dest_zip, "w", zipfile.ZIP_DEFLATED) as archive:
        for path in src.rglob("*"):
            if path.is_file():
                archive.write(path, path.relative_to(src).as_posix())


def _writable_dir(candidate: Path) -> Path:
    """Return candidate if writable, else a per-user fallback under LOCALAPPDATA."""
    try:
        candidate.mkdir(parents=True, exist_ok=True)
        probe = candidate / ".trothu_write_test"
        probe.touch()
        probe.unlink()
        return candidate
    except Exception:
        import os

        root = os.environ.get("LOCALAPPDATA") or str(Path.home())
        fallback = Path(root) / "auto-rollcall-thu-tronclass"
        fallback.mkdir(parents=True, exist_ok=True)
        return fallback


def _bootstrap_main_program() -> int:
    """No-args launch = a user ran the add-on bundle's exe by mistake. Download the
    main program, place our add-ons next to it (so it won't re-download them), and
    launch it. Returns 0 on success; non-zero (with guidance) on failure."""
    import subprocess
    import zipfile

    print("【自我修復】你執行到的是「附加元件」，不是主程式。")
    print("           正在自動為你下載並啟動主程式，請稍候…")

    url = _latest_main_asset_url()
    if not url:
        print("　無法取得主程式下載網址。請手動到下列頁面下載主程式 zip：")
        print("　{}".format(_RELEASES_PAGE))
        return 4

    addons_root = _find_addons_root()
    # Extract the main program OUTSIDE the add-on folder (a sibling), so re-zipping
    # the add-ons can't accidentally swallow the freshly extracted program.
    base_dir = _writable_dir((addons_root.parent if addons_root is not None else _exe_dir()))
    tmp_zip = base_dir / "_main_program.zip"
    try:
        print("　下載中…")
        _download_file(url, tmp_zip)
    except Exception as exc:
        print("　下載失敗：{}。請手動下載：{}".format(exc, _RELEASES_PAGE))
        return 5

    extract_dir = base_dir / "THU_Auto_Rollcall"
    try:
        with zipfile.ZipFile(tmp_zip) as archive:
            archive.extractall(extract_dir)
    except Exception as exc:
        print("　解壓失敗：{}".format(exc))
        return 6
    finally:
        try:
            tmp_zip.unlink()
        except OSError:
            pass

    main_exe = _find_main_exe(extract_dir)
    if not main_exe:
        print("　解壓後找不到主程式 exe，請手動執行 {} 內的程式。".format(extract_dir))
        return 7

    if addons_root is not None:
        try:
            _zip_dir(addons_root, main_exe.parent / "addons.zip")
            print("　已把附加元件放到主程式旁，主程式不必重新下載。")
        except Exception:
            pass

    print("　完成！正在啟動主程式：{}".format(main_exe))
    try:
        subprocess.Popen([str(main_exe)], cwd=str(main_exe.parent))
    except Exception as exc:
        print("　自動啟動失敗，請手動執行：{}（{}）".format(main_exe, exc))
        return 8
    return 0


# --------------------------------------------------------------------------- #
# OCR path (how the main program invokes the sidecar).
# --------------------------------------------------------------------------- #
def main(argv: Optional[List[str]] = None) -> int:
    argv = sys.argv[1:] if argv is None else argv
    if not argv:
        # No args = a human double-clicked the add-on exe; self-heal to the main app.
        return _bootstrap_main_program()
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

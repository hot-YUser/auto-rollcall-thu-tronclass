"""On-demand acquisition of the single optional add-on bundle.

The lean default exe ships without the heavy optional pieces. They live in ONE
zip (this round; the shape is small so more can be added later):
  - ``ocr-sidecar/``  — standalone OCR captcha sidecar (ddddocr + model + onnxruntime
    + opencv), invoked out-of-process by ``ocr_captcha``.
  - ``node.exe``  — the Playwright node driver (~92MB), the part stripped from the
    exe; ``browser_install`` points ``PLAYWRIGHT_NODEJS_PATH`` at it.

Acquisition order (``ensure_addons``): an already-extracted cache; else a
pre-placed bundle (matching zip or extracted folder) found next to the exe, in
the current directory, or under ``state`` — copied/extracted, no download; else a
download (with status-line progress) from the project's GitHub release. The URL
is overridable via ``TROTHU_ADDON_URL`` (self-host / local file) if the asset ever
disappears.

ponytail: integrity = HTTPS + the project's own GitHub release (same trust model
as `playwright install`); a pre-placed bundle is validated by content (must carry
ocr-sidecar + node.exe) before it's trusted. Add a pinned sha256 if supply-chain
hardening is ever needed.
"""
from __future__ import annotations

import os
import shutil
import sys
import zipfile
from pathlib import Path
from typing import List, Optional

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore

_REPO = "hot-YUser/auto-rollcall-thu-tronclass"


class AddonUnavailableError(RuntimeError):
    """The add-on bundle could not be obtained (download disabled/failed/missing)."""


def addon_cache_dir() -> Path:
    """Persistent, writable cache dir for the add-on bundle."""
    try:
        base = Path(ctx.BASE_DIR) / "state" / "addons"
        base.mkdir(parents=True, exist_ok=True)
        probe = base / ".write_test"
        probe.touch()
        probe.unlink()
        return base
    except Exception:
        local = os.environ.get("LOCALAPPDATA")
        root = Path(local) / "auto-rollcall-thu-tronclass" / "addons" if local else Path.home() / ".cache" / "trothu-addons"
        root.mkdir(parents=True, exist_ok=True)
        return root


def bundle_name() -> str:
    """Short, distinct zip name (e.g. ``addons-v1.6a1-win.zip``) so users can't
    confuse it with the main ``THU_Auto_Rollcall-…`` program download."""
    from troTHU.package_diagnostics import PROJECT_VERSION

    return "addons-v{}-win.zip".format(PROJECT_VERSION)


def bundle_url() -> str:
    override = os.environ.get("TROTHU_ADDON_URL", "").strip()
    if override:
        return override
    from troTHU.package_diagnostics import PROJECT_RELEASE_LABEL

    return "https://github.com/{}/releases/download/v{}/{}".format(_REPO, PROJECT_RELEASE_LABEL, bundle_name())


def addon_download_allowed() -> bool:
    try:
        return bool(ctx.get_browser_assisted_login_config().get("allow_browser_download", True))
    except Exception:
        return True


def _extract_dir() -> Path:
    return addon_cache_dir() / "bundle"


def _download(url: str, dest: Path) -> None:
    import urllib.request

    tmp = dest.with_suffix(dest.suffix + ".part")
    try:
        ctx.log_print("【附加元件】首次使用需下載附加元件包（OCR + 瀏覽器驅動），請稍候…")
        # A local override may be a plain filesystem path rather than a URL.
        if "://" not in url and Path(url).exists():
            shutil.copyfile(url, tmp)
        else:
            try:
                interactive = bool(ctx.console_is_interactive())
            except Exception:
                interactive = False
            with urllib.request.urlopen(url, timeout=300) as resp:
                total = 0
                headers = getattr(resp, "headers", None)
                if headers is not None:
                    try:
                        total = int(headers.get("Content-Length") or 0)
                    except (TypeError, ValueError):
                        total = 0
                read = 0
                last_pct = -1
                with open(tmp, "wb") as f:
                    while True:
                        chunk = resp.read(262144)
                        if not chunk:
                            break
                        f.write(chunk)
                        read += len(chunk)
                        if interactive and total > 0:
                            pct = int(read * 100 / total)
                            if 0 <= pct <= 100 and pct != last_pct:
                                last_pct = pct
                                ctx.status_print("下載附加元件… {}%".format(pct))
        os.replace(tmp, dest)
        ctx.log_print("【附加元件】下載完成。")
    except Exception as exc:
        try:
            tmp.unlink(missing_ok=True)
        except OSError:
            pass
        raise AddonUnavailableError("附加元件下載失敗：{}".format(exc)) from exc


def _find(extract: Path, *names: str) -> Optional[Path]:
    for name in names:
        hits = [p for p in extract.rglob(name) if p.is_file()]
        if hits:
            return hits[0]
    return None


def _zip_is_valid(zip_path: Path) -> bool:
    """A pre-placed zip is trusted only if it carries both the sidecar and node."""
    try:
        with zipfile.ZipFile(zip_path) as archive:
            names = [n.replace("\\", "/").lower() for n in archive.namelist()]
    except Exception:
        return False
    has_ocr = any(n.rsplit("/", 1)[-1] in ("ocr-sidecar.exe", "ocr-sidecar") for n in names)
    has_node = any(n.rsplit("/", 1)[-1] == "node.exe" for n in names)
    return has_ocr and has_node


def _dir_is_valid(folder: Path) -> bool:
    return _find(folder, "ocr-sidecar.exe", "ocr-sidecar") is not None and _find(folder, "node.exe", "node") is not None


def _candidate_dirs() -> List[Path]:
    """Where a user may have pre-placed the bundle: next to the exe, in the current
    directory, or under state — so it can be reused without re-downloading."""
    dirs: List[Path] = []
    try:
        if getattr(sys, "frozen", False):
            dirs.append(Path(sys.executable).parent)
    except Exception:
        pass
    for getter in (lambda: Path(ctx.BASE_DIR), Path.cwd, addon_cache_dir, lambda: addon_cache_dir().parent):
        try:
            dirs.append(getter())
        except Exception:
            pass
    seen = set()
    out: List[Path] = []
    for d in dirs:
        try:
            key = str(d.resolve()).lower()
        except Exception:
            key = str(d).lower()
        if key not in seen:
            seen.add(key)
            out.append(d)
    return out


def _reset_extract() -> Path:
    extract = _extract_dir()
    if extract.exists():
        shutil.rmtree(extract, ignore_errors=True)
    extract.mkdir(parents=True, exist_ok=True)
    return extract


def _adopt_zip(zip_path: Path) -> Path:
    extract = _reset_extract()
    with zipfile.ZipFile(zip_path) as archive:
        archive.extractall(extract)
    (extract / ".extracted").write_text("ok", encoding="utf-8")
    return extract


def _adopt_dir(src_dir: Path) -> Path:
    extract = _extract_dir()
    if extract.exists():
        shutil.rmtree(extract, ignore_errors=True)
    shutil.copytree(src_dir, extract)
    (extract / ".extracted").write_text("ok", encoding="utf-8")
    return extract


def _find_preplaced() -> Optional[Path]:
    """A valid, version-matching bundle the user dropped next to the exe / in cwd /
    under state — as an extracted folder or a zip. Returns the source path or None."""
    name = bundle_name()
    root = name[:-4] if name.lower().endswith(".zip") else name
    for d in _candidate_dirs():
        try:
            folder = d / root
            if folder.is_dir() and _dir_is_valid(folder):
                return folder
            for zname in (name, "addons.zip"):
                zpath = d / zname
                if zpath.is_file() and _zip_is_valid(zpath):
                    return zpath
        except Exception:
            continue
    return None


def ensure_addons() -> Path:
    """Ensure the add-on bundle is available and extracted; return the extract dir.

    Cache hit -> pre-placed bundle (copy/extract, no download) -> download.
    """
    extract = _extract_dir()
    if (extract / ".extracted").exists():
        return extract

    source = _find_preplaced()
    if source is not None:
        return _adopt_dir(source) if source.is_dir() else _adopt_zip(source)

    if not addon_download_allowed():
        raise AddonUnavailableError(
            "附加元件下載已停用（auth.browser_assisted_login.allow_browser_download=false）。"
        )
    zip_path = addon_cache_dir() / "bundle.zip"
    _download(bundle_url(), zip_path)
    try:
        return _adopt_zip(zip_path)
    except Exception as exc:
        raise AddonUnavailableError("附加元件解壓失敗：{}".format(exc)) from exc


def ocr_sidecar_available() -> bool:
    """True if the OCR sidecar is already extracted, pre-placed, or downloadable."""
    if _find(_extract_dir(), "ocr-sidecar.exe", "ocr-sidecar"):
        return True
    if _find_preplaced() is not None:
        return True
    return addon_download_allowed()


def ocr_sidecar_path() -> Path:
    """Path to the OCR sidecar executable, acquiring the bundle if needed."""
    exe = _find(ensure_addons(), "ocr-sidecar.exe", "ocr-sidecar")
    if not exe:
        raise AddonUnavailableError("附加元件包內找不到 OCR sidecar。")
    return exe


def downloaded_node_path() -> Optional[Path]:
    """Path to the node driver IF the bundle is already extracted (no acquisition)."""
    return _find(_extract_dir(), "node.exe", "node")


def playwright_node_path() -> Optional[Path]:
    """Path to the Playwright node driver, acquiring the bundle if needed."""
    try:
        return _find(ensure_addons(), "node.exe", "node")
    except Exception:
        return None

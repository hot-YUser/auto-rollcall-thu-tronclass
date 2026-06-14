"""On-demand download of the single optional add-on bundle.

The lean default exe ships without the heavy optional pieces. They live in ONE
downloadable zip (this round; the shape is a small list so more can be added
later without rework):
  - ``fju-ocr/``  — standalone OCR captcha sidecar (ddddocr + model + onnxruntime
    + headless opencv), invoked out-of-process by ``ocr_captcha``.
  - ``node.exe``  — the Playwright node driver (~92MB), the part stripped from the
    exe; ``browser_install`` points ``PLAYWRIGHT_NODEJS_PATH`` at it.

Download mirrors ``browser_install`` (writable ``state/addons`` with LOCALAPPDATA
fallback) and reuses the ``allow_browser_download`` consent gate. The source URL
is derived from the release label but overridable via ``TROTHU_ADDON_URL`` so a
user can self-host / point at a local file if the GitHub asset ever disappears.

ponytail: integrity = HTTPS + the project's own GitHub release (same trust model
as `playwright install`). Add a pinned sha256 / signed manifest if supply-chain
hardening is ever needed.
"""
from __future__ import annotations

import os
import shutil
import zipfile
from pathlib import Path
from typing import Optional

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
    from troTHU.package_diagnostics import PROJECT_RELEASE_LABEL

    return "THU_Auto_Rollcall-addons-v{}-windows-x64.zip".format(PROJECT_RELEASE_LABEL)


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
            with urllib.request.urlopen(url, timeout=300) as resp, open(tmp, "wb") as f:
                shutil.copyfileobj(resp, f)
        os.replace(tmp, dest)
        ctx.log_print("【附加元件】下載完成。")
    except Exception as exc:
        try:
            tmp.unlink(missing_ok=True)
        except OSError:
            pass
        raise AddonUnavailableError("附加元件下載失敗：{}".format(exc)) from exc


def ensure_addons() -> Path:
    """Ensure the add-on bundle is downloaded and extracted; return the extract dir."""
    extract = _extract_dir()
    marker = extract / ".extracted"
    if marker.exists():
        return extract
    if not addon_download_allowed():
        raise AddonUnavailableError(
            "附加元件下載已停用（auth.browser_assisted_login.allow_browser_download=false）。"
        )
    zip_path = addon_cache_dir() / "bundle.zip"
    _download(bundle_url(), zip_path)
    try:
        if extract.exists():
            shutil.rmtree(extract, ignore_errors=True)
        extract.mkdir(parents=True, exist_ok=True)
        with zipfile.ZipFile(zip_path) as archive:
            archive.extractall(extract)
        marker.write_text("ok", encoding="utf-8")
    except Exception as exc:
        raise AddonUnavailableError("附加元件解壓失敗：{}".format(exc)) from exc
    return extract


def _find(extract: Path, *names: str) -> Optional[Path]:
    for name in names:
        hits = [p for p in extract.rglob(name) if p.is_file()]
        if hits:
            return hits[0]
    return None


def ocr_sidecar_available() -> bool:
    """True if the OCR sidecar is already extracted, or downloading it is allowed."""
    if _find(_extract_dir(), "fju-ocr.exe", "fju-ocr"):
        return True
    return addon_download_allowed()


def ocr_sidecar_path() -> Path:
    """Path to the OCR sidecar executable, downloading the bundle if needed."""
    exe = _find(ensure_addons(), "fju-ocr.exe", "fju-ocr")
    if not exe:
        raise AddonUnavailableError("附加元件包內找不到 OCR sidecar。")
    return exe


def downloaded_node_path() -> Optional[Path]:
    """Path to the node driver IF the bundle is already extracted (no download)."""
    return _find(_extract_dir(), "node.exe", "node")


def playwright_node_path() -> Optional[Path]:
    """Path to the Playwright node driver, downloading the bundle if needed."""
    try:
        return _find(ensure_addons(), "node.exe", "node")
    except Exception:
        return None

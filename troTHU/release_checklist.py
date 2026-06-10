"""Release readiness checks for local packaging smoke.

The checker is static and safe: it does not build artifacts, deploy, or inspect
file contents that could contain user secrets beyond names needed for release
readiness warnings.
"""

from __future__ import annotations

import re
import hashlib
import importlib.util
import json
import zipfile
from pathlib import Path
from typing import Any, Dict, Iterable, List, Mapping

try:  # pragma: no cover - script execution fallback
    from troTHU.package_diagnostics import (
        PROJECT_NAME,
        PROJECT_RELEASE_LABEL,
        PROJECT_VERSION,
        SMALL_BUNDLE_ARTIFACT_PARTS,
        SPEC_NAME,
        build_package_diagnostic_report,
    )
except ImportError:  # pragma: no cover
    from package_diagnostics import (
        PROJECT_NAME,
        PROJECT_RELEASE_LABEL,
        PROJECT_VERSION,
        SMALL_BUNDLE_ARTIFACT_PARTS,
        SPEC_NAME,
        build_package_diagnostic_report,
    )


FORBIDDEN_ARTIFACT_NAMES = (
    "config.conf",
    "config.advanced.toml",
    "state",
    "log",
    "cookies",
    "pending_qr",
    "account_runtime",
    "tests",
)
ARTIFACT_NAME_RE = re.compile(r"^(auto-rollcall-thu-tronclass|THU_Auto_Rollcall)-v?[\w.\-]+", re.IGNORECASE)
EXPECTED_WINDOWS_ZIP = "THU_Auto_Rollcall-v{}-windows-x64.zip".format(PROJECT_RELEASE_LABEL)
LATEST_BUILD_REPORT = Path("state") / "release" / "latest_release_build.json"
CREDITS_FILE = "CREDITS.md"


def _safe_text(value: Any, *, limit: int = 180) -> str:
    text = str(value or "").strip()
    if any(part in text.lower() for part in ("password", "passwd", "secret", "token", "cookie", "session", "payload")):
        return "[redacted]"
    if len(text) > limit:
        return text[: limit - 3] + "..."
    return text


def _check(name: str, ok: bool, message: str, *, severity: str = "warn") -> Dict[str, Any]:
    return {
        "name": name,
        "status": "ok" if ok else severity,
        "message": _safe_text(message, limit=240),
    }


def _read_text(path: Path) -> str:
    try:
        return path.read_text(encoding="utf-8")
    except OSError:
        return ""


def _overall_status(checks: Iterable[Mapping[str, Any]]) -> str:
    statuses = {str(item.get("status") or "ok") for item in checks}
    if "fail" in statuses:
        return "fail"
    if "warn" in statuses:
        return "warn"
    return "ok"


def _iter_artifact_names(path: Path) -> List[str]:
    if not path.exists():
        return []
    if path.is_file():
        return [path.name]
    names: List[str] = []
    try:
        for child in path.rglob("*"):
            names.append(child.name)
    except OSError:
        return [path.name]
    return names or [path.name]


def _zip_member_names(path: Path) -> List[str]:
    if not path.is_file() or path.suffix.lower() != ".zip":
        return []
    try:
        with zipfile.ZipFile(path) as archive:
            names: List[str] = []
            for item in archive.infolist():
                normalized = item.filename.strip("/\\")
                if not normalized:
                    continue
                names.append(normalized)
                names.extend(part for part in Path(normalized).parts if part)
            return names
    except (OSError, zipfile.BadZipFile):
            return []


def _forbidden_name_match(name: str) -> str:
    normalized = str(name or "").replace("\\", "/").strip("/")
    if not normalized:
        return ""
    parts = [part for item in normalized.split("/") for part in Path(item).parts if part]
    candidates = parts or [normalized]
    for part in candidates:
        for forbidden_name in FORBIDDEN_ARTIFACT_NAMES:
            if forbidden_name.lower() == part.lower():
                return part
    return ""


def _optional_bundle_name_match(name: str) -> str:
    normalized = str(name or "").replace("\\", "/").strip("/")
    if not normalized:
        return ""
    parts = [part for item in normalized.split("/") for part in Path(item).parts if part]
    candidates = parts or [normalized]
    for part in candidates:
        lowered = part.lower()
        for optional_name in SMALL_BUNDLE_ARTIFACT_PARTS:
            forbidden = optional_name.lower()
            if lowered == forbidden:
                return part
            if lowered.startswith(forbidden + "-") or lowered.startswith(forbidden + ".") or lowered.startswith(forbidden + "_"):
                return part
    return ""


def _sha256_short(path: Path) -> str:
    if not path.is_file():
        return ""
    hasher = hashlib.sha256()
    try:
        with path.open("rb") as handle:
            for chunk in iter(lambda: handle.read(1024 * 1024), b""):
                hasher.update(chunk)
    except OSError:
        return ""
    return hasher.hexdigest()[:16]


def build_release_artifact_manifest(path: Path) -> Dict[str, Any]:
    """Build a safe artifact manifest from names and sizes only."""
    artifact = Path(path)
    items: List[Dict[str, Any]] = []
    paths: List[Path] = []
    if artifact.is_file():
        paths = [artifact]
    elif artifact.exists():
        try:
            paths = [child for child in artifact.rglob("*") if child.is_file()]
        except OSError:
            paths = []
    for child in sorted(paths, key=lambda item: str(item).lower())[:50]:
        kind = "zip" if child.suffix.lower() == ".zip" else ("exe" if child.suffix.lower() == ".exe" else "file")
        try:
            size_bytes = child.stat().st_size
        except OSError:
            size_bytes = 0
        items.append(
            {
                "name": child.name,
                "kind": kind,
                "size_bytes": size_bytes,
                "sha256_short": _sha256_short(child),
                "zip_member_count": len(_zip_member_names(child)),
                "zip_member_names": sorted(_zip_member_names(child))[:20],
            }
        )
    return {
        "path": artifact.name or str(artifact),
        "exists": artifact.exists(),
        "item_count": len(items),
        "items": items,
    }


def _optional_scan_names(artifact: Path, names: List[str], zip_names: List[str]) -> List[str]:
    if artifact.is_file():
        return names + zip_names
    if artifact.is_dir():
        expected_zip = artifact / EXPECTED_WINDOWS_ZIP
        if expected_zip.is_file():
            return [expected_zip.name] + _zip_member_names(expected_zip)
    return zip_names


def validate_release_artifact(path: Path, *, strict_optional: bool = True) -> Dict[str, Any]:
    """Validate an existing release artifact or dist directory by names only."""
    artifact = Path(path)
    names = _iter_artifact_names(artifact)
    zip_names: List[str] = []
    if artifact.is_file():
        zip_names.extend(_zip_member_names(artifact))
    elif artifact.exists():
        try:
            for child in artifact.rglob("*.zip"):
                zip_names.extend(_zip_member_names(child))
        except OSError:
            zip_names = []
    all_names = names + zip_names
    optional_names = _optional_scan_names(artifact, names, zip_names)
    forbidden = [
        _forbidden_name_match(name)
        for name in all_names
        if _forbidden_name_match(name)
    ]
    optional_bundles = [
        _optional_bundle_name_match(name)
        for name in optional_names
        if _optional_bundle_name_match(name)
    ]
    candidate_names = [name for name in names if name.lower().endswith((".zip", ".exe", ".tar.gz", ".whl"))]
    name_ok = any(ARTIFACT_NAME_RE.search(name) for name in candidate_names or names)
    checks = [
        _check("artifact exists", artifact.exists(), artifact.name or str(artifact), severity="warn"),
        _check("artifact naming", name_ok or not artifact.exists(), "expected release artifact naming", severity="warn"),
        _check("artifact excludes local state", not forbidden, "no config/state/log/tests/cookies names", severity="fail"),
        _check(
            "artifact excludes optional extras",
            not optional_bundles,
            "no browser/keyring/QR image optional packages",
            severity="fail" if strict_optional else "warn",
        ),
    ]
    return {
        "path": artifact.name or str(artifact),
        "exists": artifact.exists(),
        "is_dir": artifact.is_dir(),
        "candidate_names": sorted(candidate_names)[:20],
        "manifest": build_release_artifact_manifest(artifact),
        "forbidden_names": sorted(set(forbidden))[:20],
        "optional_bundle_names": sorted(set(optional_bundles))[:20],
        "strict_optional": bool(strict_optional),
        "checks": checks,
        "status": _overall_status(checks),
    }


def _latest_build_report(base_dir: Path, *, dist_dir: Path) -> Dict[str, Any]:
    path = Path(base_dir) / LATEST_BUILD_REPORT
    if not path.exists():
        return {"exists": False, "status": "missing", "file": LATEST_BUILD_REPORT.name}
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, ValueError):
        return {"exists": True, "status": "invalid", "file": LATEST_BUILD_REPORT.name}
    artifact = data.get("artifact", {}) if isinstance(data, Mapping) else {}
    smoke = data.get("smoke", {}) if isinstance(data, Mapping) else {}
    artifact_name = artifact.get("name", "") if isinstance(artifact, Mapping) else ""
    expected_path = Path(dist_dir) / EXPECTED_WINDOWS_ZIP
    checks = [
        _check("latest build report", data.get("status") == "ok", "latest release-build status", severity="warn"),
        _check("latest artifact name", artifact_name in ("", EXPECTED_WINDOWS_ZIP) or artifact_name == expected_path.name, "expected artifact name", severity="warn"),
        _check("latest smoke status", not smoke or smoke.get("status") == "ok", "release-build smoke status", severity="warn"),
    ]
    return {
        "exists": True,
        "status": data.get("status", "unknown") if isinstance(data, Mapping) else "unknown",
        "file": LATEST_BUILD_REPORT.name,
        "artifact_name": artifact_name,
        "sha256_short": artifact.get("sha256_short", "") if isinstance(artifact, Mapping) else "",
        "smoke_status": smoke.get("status", "") if isinstance(smoke, Mapping) else "",
        "checks": checks,
    }


def build_release_build_plan(base_dir: Path, *, dist_dir: Path | None = None) -> Dict[str, Any]:
    """Return a safe, non-executing release build plan."""
    base = Path(base_dir)
    dist_path = Path(dist_dir) if dist_dir is not None else base / "dist"
    commands = [
        "python -m unittest discover -v",
        "python -m troTHU.tron package-check --json",
        "python -m troTHU.tron release-check --json",
        "python -m PyInstaller {} --clean --noconfirm".format(SPEC_NAME),
        "python -m troTHU.tron release-check --dist dist --json",
    ]
    expected = [
        {
            "name": EXPECTED_WINDOWS_ZIP,
            "kind": "zip",
            "contains": ["PyInstaller collect output", "README.md", "RELEASE_NOTES.txt"],
            "forbidden": list(FORBIDDEN_ARTIFACT_NAMES) + list(SMALL_BUNDLE_ARTIFACT_PARTS),
        }
    ]
    return {
        "version": "release-build-plan-v1",
        "project": {"name": PROJECT_NAME, "version": PROJECT_VERSION},
        "dist_path": dist_path.name,
        "executes_build": False,
        "commands": commands,
        "expected_artifacts": expected,
        "preflight": [
            "full_unittest_green",
            "package_check_no_fail",
            "release_check_no_fail",
            "manual_review_dist_manifest",
        ],
        "forbidden_outputs": [
            "config.conf",
            "config.advanced.toml",
            "state_directory",
            "log_directory",
            "cookies",
            "tests",
            "local_runtime_state",
            "browser_keyring_qr_optional_packages",
        ],
    }


def _ci_report(path: Path) -> Dict[str, Any]:
    text = _read_text(path)
    lowered = text.lower()
    checks = [
        _check("ci workflow exists", path.exists(), path.name, severity="warn"),
        _check("ci runs unittest", "python -m unittest discover -v" in text, "full unittest discover", severity="warn"),
        _check("ci runs release-check", "release-check --json" in text, "release-check smoke", severity="warn"),
        _check("ci runs release-build dry-run", "release-build --dry-run --json" in text, "release-build dry-run smoke", severity="warn"),
        _check("ci avoids secrets", "secrets." not in lowered, "no GitHub secrets reference", severity="fail"),
        _check("ci avoids artifact upload", "upload-artifact" not in lowered, "no release artifact upload", severity="warn"),
        _check("ci avoids deployment", "deploy" not in lowered, "no deployment step", severity="warn"),
    ]
    return {"exists": path.exists(), "file": path.name, "checks": checks, "status": _overall_status(checks)}


def _readme_report(path: Path) -> Dict[str, Any]:
    text = _read_text(path)
    checks = [
        _check("README exists", path.exists(), path.name, severity="warn"),
        _check(
            "README release status",
            f"v{PROJECT_RELEASE_LABEL}" in text or PROJECT_RELEASE_LABEL in text,
            "current release status documented",
            severity="warn",
        ),
        _check("README monitor console quickstart", "run --no-input" in text and "按任意鍵" in text, "monitor console quickstart documented", severity="warn"),
        _check("README config tutorial", "config.advanced.toml" in text and "operating" in text, "config tutorial documented", severity="warn"),
        _check("README bot docs", "HTTP Interactions" in text and "Telegram" in text, "bot entrypoints documented", severity="warn"),
        _check("README provider scope", "THU" in text and "TKU" in text, "THU/TKU provider scope documented", severity="warn"),
        _check("README qr teacher assist", "QR Code 點名" in text and "教師輔助" in text, "QR teacher assist documented", severity="warn"),
        _check("README no stale stable-version advice", "建議優先使用上一個正式版" not in text and "v0.2.8" not in text, "no obsolete v0.2.8 recommendation", severity="warn"),
        _check("credits original repo", "silvercow002/tronclass-script" in text, "original repo documented", severity="warn"),
        _check("credits original author", "@silvercow002" in text or "github.com/silvercow002" in text, "original author documented", severity="warn"),
        _check("credits MIT notice", "MIT License" in text and "Copyright (c) 2025 silvercow02" in text, "original MIT notice preserved", severity="warn"),
        _check("credits AGPL status", "AGPL-3.0-or-later" in text, "current project AGPL status documented", severity="warn"),
    ]
    return {"exists": path.exists(), "file": path.name, "checks": checks, "status": _overall_status(checks)}


def _credits_report(path: Path) -> Dict[str, Any]:
    return {"exists": False, "file": "CREDITS.md", "checks": [], "status": "ok"}


def build_release_checklist(base_dir: Path, *, config: Mapping[str, Any] | None = None, dist_dir: Path | None = None) -> Dict[str, Any]:
    """Build a static release readiness report."""
    base = Path(base_dir)
    package = build_package_diagnostic_report(base, config=config)
    ci = _ci_report(base / ".github" / "workflows" / "ci.yml")
    readme = _readme_report(base / "README.md")
    credits = _credits_report(base / "CREDITS.md")
    dist_path = Path(dist_dir) if dist_dir is not None else base / "dist"
    artifact = validate_release_artifact(dist_path, strict_optional=dist_dir is not None)
    build_plan = build_release_build_plan(base, dist_dir=dist_path)
    latest_build = _latest_build_report(base, dist_dir=dist_path)
    release_builder_available = importlib.util.find_spec("troTHU.release_builder") is not None or importlib.util.find_spec("release_builder") is not None
    checks = [
        _check("project version", package.get("pyproject", {}).get("version") == PROJECT_VERSION, PROJECT_VERSION, severity="warn"),
        _check("project name", package.get("pyproject", {}).get("name") == PROJECT_NAME, PROJECT_NAME, severity="fail"),
        _check("pyinstaller spec", package.get("pyinstaller", {}).get("exists"), SPEC_NAME, severity="warn"),
        _check("release builder", release_builder_available, "release-build CLI available", severity="warn"),
    ]
    for section in (package, ci, readme, credits, artifact):
        checks.extend(section.get("checks", []))
    checks.extend(latest_build.get("checks", []))
    return {
        "status": _overall_status(checks),
        "project": {"name": PROJECT_NAME, "version": PROJECT_VERSION},
        "package": package,
        "ci": ci,
        "readme": readme,
        "credits": credits,
        "artifact": artifact,
        "build_plan": build_plan,
        "latest_build": latest_build,
        "checks": checks,
        "notes": [
            "release-build_execute_builds_artifacts",
            "does_not_read_secrets",
            "safe_static_release_smoke",
        ],
    }


def format_release_checklist(report: Mapping[str, Any]) -> List[str]:
    """Format a compact release readiness summary."""
    project = report.get("project", {}) if isinstance(report.get("project"), Mapping) else {}
    lines = [
        "Release checklist: {}".format(report.get("status", "unknown")),
        "Project: {} {}".format(project.get("name", PROJECT_NAME), project.get("version", PROJECT_VERSION)),
    ]
    for item in report.get("checks", []) or []:
        if not isinstance(item, Mapping):
            continue
        lines.append(" - [{status}] {name}: {message}".format(
            status=item.get("status", "unknown"),
            name=item.get("name", "check"),
            message=item.get("message", ""),
        ))
    return lines

"""Safe local release build runner.

The builder is deliberately conservative: it only packages PyInstaller collect
output plus public release notes/readme/credits files, validates zip member
names, and runs CLI smoke checks from a temporary extracted copy so generated
runtime files cannot contaminate the artifact.
"""

from __future__ import annotations

import hashlib
import importlib.util
import json
import shutil
import subprocess
import sys
import tempfile
import time
import zipfile
from pathlib import Path, PurePosixPath
from typing import Any, Callable, Dict, Iterable, List, Mapping, Sequence

try:  # pragma: no cover - script execution fallback
    from troTHU.package_diagnostics import PROJECT_NAME, PROJECT_RELEASE_LABEL, PROJECT_VERSION, SPEC_NAME
    from troTHU.release_checklist import EXPECTED_WINDOWS_ZIP, validate_release_artifact
except ImportError:  # pragma: no cover
    from package_diagnostics import PROJECT_NAME, PROJECT_RELEASE_LABEL, PROJECT_VERSION, SPEC_NAME
    from release_checklist import EXPECTED_WINDOWS_ZIP, validate_release_artifact


FORBIDDEN_RELEASE_PARTS = {
    ".codex-worklog.md",
    "config.conf",
    "config.advanced.toml",
    "state",
    "log",
    "cookies",
    "pending_qr",
    "account_runtime",
    "tests",
    "__pycache__",
}
SENSITIVE_WORDS = (
    "password",
    "passwd",
    "secret",
    "token",
    "cookie",
    "session",
    "signature",
    "interaction token",
    "raw qr",
    "raw response",
    "payload",
)
ARTIFACT_ROOT = "THU_Auto_Rollcall-v{}-windows-x64".format(PROJECT_RELEASE_LABEL)
RELEASE_NOTES_FILE = "RELEASE_NOTES-v{}.md".format(PROJECT_RELEASE_LABEL)
LATEST_BUILD_REPORT = Path("state") / "release" / "latest_release_build.json"


class ReleaseBuildError(RuntimeError):
    """Raised when a release build step cannot safely continue."""


CommandRunner = Callable[[Sequence[str], Path, str], Mapping[str, Any]]


def _module_available(module_name: str) -> bool:
    try:
        return importlib.util.find_spec(module_name) is not None
    except (ImportError, AttributeError, ValueError):
        return False


def _safe_text(value: Any, *, limit: int = 240) -> str:
    text = str(value or "").replace("\r", "\n").strip()
    lowered = text.lower()
    if any(word in lowered for word in SENSITIVE_WORDS):
        return "[redacted]"
    if len(text) > limit:
        return text[: limit - 3] + "..."
    return text


def _status_from_steps(steps: Iterable[Mapping[str, Any]]) -> str:
    statuses = {str(step.get("status") or "ok") for step in steps}
    if "fail" in statuses:
        return "fail"
    if "warn" in statuses:
        return "warn"
    return "ok"


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


def _rel(path: Path, base: Path) -> str:
    try:
        return path.resolve().relative_to(base.resolve()).as_posix()
    except (OSError, ValueError):
        return path.name


def _command_display(command: Sequence[str], *, base_dir: Path) -> str:
    parts: List[str] = []
    for item in command:
        text = str(item)
        try:
            path = Path(text)
            if path.is_absolute():
                text = _rel(path, base_dir)
        except (OSError, ValueError):
            pass
        parts.append(text)
    return " ".join(parts)


def _default_command_runner(command: Sequence[str], cwd: Path, step: str) -> Mapping[str, Any]:
    timeout = 1500 if step in {"unittest", "pyinstaller"} else 180
    started = time.time()
    try:
        completed = subprocess.run(
            list(command),
            cwd=str(cwd),
            text=True,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            timeout=timeout,
            check=False,
        )
    except (OSError, subprocess.TimeoutExpired) as exc:
        return {
            "returncode": 1,
            "stdout": "",
            "stderr": str(exc),
            "duration_seconds": round(time.time() - started, 3),
        }
    return {
        "returncode": int(completed.returncode),
        "stdout": completed.stdout or "",
        "stderr": completed.stderr or "",
        "duration_seconds": round(time.time() - started, 3),
    }


def _run_command(
    command: Sequence[str],
    *,
    cwd: Path,
    base_dir: Path,
    step: str,
    runner: CommandRunner | None,
    allow_nonzero: bool = False,
    require_json: bool = False,
) -> Dict[str, Any]:
    raw = (runner or _default_command_runner)(list(command), cwd, step)
    returncode = int(raw.get("returncode", 0))
    stdout = str(raw.get("stdout", ""))
    stderr = str(raw.get("stderr", ""))
    parsed_json: Any = None
    json_ok = False
    if require_json:
        try:
            parsed_json = json.loads(stdout)
            json_ok = isinstance(parsed_json, (dict, list))
        except (TypeError, ValueError):
            json_ok = False
    ok = (returncode == 0 or allow_nonzero) and (json_ok if require_json else True)
    return {
        "name": step,
        "status": "ok" if ok else "fail",
        "returncode": returncode,
        "command": _command_display(command, base_dir=base_dir),
        "stdout_excerpt": _safe_text(stdout, limit=300),
        "stderr_excerpt": _safe_text(stderr, limit=300),
        "json_ok": json_ok if require_json else None,
        "duration_seconds": raw.get("duration_seconds", 0),
    }


def _forbidden_member_name(member_name: str) -> str:
    normalized = member_name.replace("\\", "/").strip("/")
    if not normalized:
        return ""
    parts = [part.lower() for part in PurePosixPath(normalized).parts if part and part != "."]
    for part in parts:
        if part in FORBIDDEN_RELEASE_PARTS:
            return part
    return ""


def _collect_forbidden_members(root: Path) -> List[str]:
    forbidden: List[str] = []
    if not root.exists():
        return forbidden
    for child in root.rglob("*"):
        if _forbidden_member_name(_rel(child, root)):
            forbidden.append(_rel(child, root))
    return sorted(forbidden)[:50]


def _iter_collect_files(collect_dir: Path) -> List[Path]:
    try:
        return sorted([path for path in collect_dir.rglob("*") if path.is_file()], key=lambda path: str(path).lower())
    except OSError:
        return []


def _release_notes_text(base_dir: Path) -> str:
    path = Path(base_dir) / RELEASE_NOTES_FILE
    try:
        text = path.read_text(encoding="utf-8")
    except OSError as exc:
        raise ReleaseBuildError("missing_release_notes") from exc
    if not text.strip():
        raise ReleaseBuildError("empty_release_notes")
    return text


def _safe_report_copy(value: Any) -> Any:
    if isinstance(value, Mapping):
        return {str(key): _safe_report_copy(item) for key, item in value.items()}
    if isinstance(value, list):
        return [_safe_report_copy(item) for item in value]
    if isinstance(value, tuple):
        return [_safe_report_copy(item) for item in value]
    if isinstance(value, str):
        return _safe_text(value, limit=500)
    return value


def _write_latest_build_report(base_dir: Path, report: Mapping[str, Any]) -> None:
    path = base_dir / LATEST_BUILD_REPORT
    try:
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(json.dumps(_safe_report_copy(report), ensure_ascii=False, indent=2), encoding="utf-8")
    except OSError:
        return


def build_release_build_preflight(
    base_dir: Path,
    *,
    config: Mapping[str, Any] | None = None,
    dist_dir: Path | None = None,
) -> Dict[str, Any]:
    """Return a safe preflight report for the executable release pipeline."""
    _ = config
    base = Path(base_dir)
    dist_path = Path(dist_dir) if dist_dir is not None else base / "dist"
    work_path = base / "build" / "release"
    artifact_path = dist_path / EXPECTED_WINDOWS_ZIP
    collect_dir = dist_path / "pyinstaller" / PROJECT_NAME
    commands = [
        "python -m unittest discover -v",
        "python -m troTHU.tron package-check --json",
        "python -m troTHU.tron release-check --json",
        "python -m PyInstaller {} --clean --noconfirm --distpath dist/pyinstaller --workpath build/release/pyinstaller-work".format(
            SPEC_NAME
        ),
        "zip {} from {}".format(EXPECTED_WINDOWS_ZIP, "dist/pyinstaller/{}".format(PROJECT_NAME)),
        "temporary extract smoke: --help, status --json, package-check --json",
        "python -m troTHU.tron release-check --dist dist --json",
    ]
    pyinstaller_available = _module_available("PyInstaller")
    return {
        "version": "release-build-v1",
        "project": {"name": PROJECT_NAME, "version": PROJECT_VERSION},
        "execute": False,
        "pyinstaller_available": pyinstaller_available,
        "artifact": {
            "name": EXPECTED_WINDOWS_ZIP,
            "path": _rel(artifact_path, base),
            "collect_dir": _rel(collect_dir, base),
            "root": ARTIFACT_ROOT,
        },
        "directories": {
            "dist": dist_path.name if dist_path.parent == base else dist_path.name,
            "work": _rel(work_path, base),
        },
        "commands": commands,
        "forbidden_outputs": sorted(FORBIDDEN_RELEASE_PARTS),
        "policy": {
            "runs_full_unittest": True,
            "runs_pyinstaller": True,
            "packages_zip": True,
            "excludes_optional_browser_keyring_qr_extras": True,
            "smoke_uses_temp_extract": True,
            "does_not_upload_artifact": True,
            "does_not_call_tronclass_or_bot_platforms": True,
        },
        "status": "ok" if pyinstaller_available else "warn",
        "warnings": [] if pyinstaller_available else ["pyinstaller_unavailable_for_execute"],
    }


def package_release_artifact(
    collect_dir: Path,
    artifact_path: Path,
    *,
    readme_path: Path,
    notes_text: str,
) -> Dict[str, Any]:
    """Create the release zip from collect output and public docs only."""
    collect = Path(collect_dir)
    artifact = Path(artifact_path)
    if not collect.exists() or not collect.is_dir():
        raise ReleaseBuildError("missing_collect_dir")
    forbidden = _collect_forbidden_members(collect)
    if forbidden:
        raise ReleaseBuildError("unsafe_collect_output")
    readme = Path(readme_path)
    if not readme.exists():
        raise ReleaseBuildError("missing_readme")
    artifact.parent.mkdir(parents=True, exist_ok=True)
    if artifact.exists():
        artifact.unlink()
    file_count = 0
    with zipfile.ZipFile(artifact, "w", compression=zipfile.ZIP_DEFLATED) as archive:
        for child in _iter_collect_files(collect):
            relative = _rel(child, collect)
            member = "{}/{}".format(ARTIFACT_ROOT, relative.replace("\\", "/"))
            forbidden_part = _forbidden_member_name(member)
            if forbidden_part:
                raise ReleaseBuildError("unsafe_artifact_member")
            archive.write(child, member)
            file_count += 1
        archive.write(readme, "{}/README.md".format(ARTIFACT_ROOT))
        archive.writestr("{}/RELEASE_NOTES.txt".format(ARTIFACT_ROOT), notes_text)
        file_count += 2
    validation = validate_release_artifact(artifact)
    if validation.get("status") == "fail":
        try:
            artifact.unlink()
        except OSError:
            pass
        raise ReleaseBuildError("unsafe_artifact")
    return {
        "name": artifact.name,
        "exists": artifact.exists(),
        "size_bytes": artifact.stat().st_size if artifact.exists() else 0,
        "sha256_short": _sha256_short(artifact),
        "member_count": file_count,
        "validation": validation,
        "status": "ok",
    }


def _find_executable(extract_dir: Path) -> Path:
    candidates = sorted(extract_dir.rglob("*.exe"), key=lambda path: (path.name != "{}.exe".format(PROJECT_NAME), str(path)))
    if candidates:
        return candidates[0]
    for child in sorted(extract_dir.rglob(PROJECT_NAME)):
        if child.is_file():
            return child
    raise ReleaseBuildError("smoke_executable_missing")


def _smoke_artifact(
    artifact_path: Path,
    *,
    work_dir: Path,
    base_dir: Path,
    runner: CommandRunner | None,
) -> Dict[str, Any]:
    artifact = Path(artifact_path)
    if not artifact.exists():
        raise ReleaseBuildError("missing_artifact_for_smoke")
    smoke_root = Path(tempfile.mkdtemp(prefix="release-smoke-", dir=str(work_dir) if work_dir.exists() else None))
    try:
        with zipfile.ZipFile(artifact) as archive:
            archive.extractall(smoke_root)
        exe = _find_executable(smoke_root)
        steps = [
            _run_command([str(exe), "--help"], cwd=exe.parent, base_dir=base_dir, step="smoke_help", runner=runner),
            _run_command(
                [str(exe), "status", "--json"],
                cwd=exe.parent,
                base_dir=base_dir,
                step="smoke_status_json",
                runner=runner,
                require_json=True,
            ),
            _run_command(
                [str(exe), "package-check", "--json"],
                cwd=exe.parent,
                base_dir=base_dir,
                step="smoke_package_check_json",
                runner=runner,
                allow_nonzero=True,
                require_json=True,
            ),
        ]
        status = _status_from_steps(steps)
        return {
            "status": status,
            "uses_temp_extract": True,
            "extract_dir_name": smoke_root.name,
            "executable": exe.name,
            "steps": steps,
        }
    finally:
        shutil.rmtree(smoke_root, ignore_errors=True)


def run_release_build_pipeline(
    base_dir: Path,
    *,
    config: Mapping[str, Any] | None = None,
    execute: bool = False,
    dist_dir: Path | None = None,
    work_dir: Path | None = None,
    command_runner: CommandRunner | None = None,
) -> Dict[str, Any]:
    """Run or describe the local Windows release build pipeline."""
    base = Path(base_dir)
    dist_path = Path(dist_dir) if dist_dir is not None else base / "dist"
    work_path = Path(work_dir) if work_dir is not None else base / "build" / "release"
    preflight = build_release_build_preflight(base, config=config, dist_dir=dist_path)
    artifact_path = dist_path / EXPECTED_WINDOWS_ZIP
    collect_dir = dist_path / "pyinstaller" / PROJECT_NAME
    report: Dict[str, Any] = {
        "version": "release-build-v1",
        "project": {"name": PROJECT_NAME, "version": PROJECT_VERSION},
        "execute": bool(execute),
        "preflight": preflight,
        "artifact": {
            "name": EXPECTED_WINDOWS_ZIP,
            "path": _rel(artifact_path, base),
            "collect_dir": _rel(collect_dir, base),
        },
        "steps": [],
        "smoke": {},
        "status": "dry_run" if not execute else "pending",
        "reason": "",
    }
    if not execute:
        return report
    if not preflight.get("pyinstaller_available") and command_runner is None:
        report["status"] = "fail"
        report["reason"] = "pyinstaller_unavailable"
        _write_latest_build_report(base, report)
        return report
    work_path.mkdir(parents=True, exist_ok=True)
    dist_path.mkdir(parents=True, exist_ok=True)

    commands = [
        ("unittest", [sys.executable, "-m", "unittest", "discover", "-v"], False, False),
        ("package_check", [sys.executable, "-m", "troTHU.tron", "package-check", "--json"], False, True),
        ("release_check", [sys.executable, "-m", "troTHU.tron", "release-check", "--json"], False, True),
        (
            "pyinstaller",
            [
                sys.executable,
                "-m",
                "PyInstaller",
                SPEC_NAME,
                "--clean",
                "--noconfirm",
                "--distpath",
                str(dist_path / "pyinstaller"),
                "--workpath",
                str(work_path / "pyinstaller-work"),
            ],
            False,
            False,
        ),
    ]
    for name, command, allow_nonzero, require_json in commands:
        step = _run_command(
            command,
            cwd=base,
            base_dir=base,
            step=name,
            runner=command_runner,
            allow_nonzero=allow_nonzero,
            require_json=require_json,
        )
        report["steps"].append(step)
        if step.get("status") == "fail":
            report["status"] = "fail"
            report["reason"] = "{}_failed".format(name)
            _write_latest_build_report(base, report)
            return report

    try:
        packaged = package_release_artifact(
            collect_dir,
            artifact_path,
            readme_path=base / "README.md",
            notes_text=_release_notes_text(base),
        )
    except ReleaseBuildError as exc:
        report["status"] = "fail"
        report["reason"] = str(exc)
        _write_latest_build_report(base, report)
        return report
    report["artifact"].update(packaged)

    try:
        smoke = _smoke_artifact(artifact_path, work_dir=work_path, base_dir=base, runner=command_runner)
    except ReleaseBuildError as exc:
        report["status"] = "fail"
        report["reason"] = str(exc)
        _write_latest_build_report(base, report)
        return report
    report["smoke"] = smoke
    if smoke.get("status") == "fail":
        report["status"] = "fail"
        report["reason"] = "smoke_failed"
        _write_latest_build_report(base, report)
        return report

    final_check = _run_command(
        [sys.executable, "-m", "troTHU.tron", "release-check", "--dist", str(dist_path), "--json"],
        cwd=base,
        base_dir=base,
        step="release_check_dist",
        runner=command_runner,
        allow_nonzero=True,
        require_json=True,
    )
    report["steps"].append(final_check)
    if final_check.get("status") == "fail" or final_check.get("returncode") not in (0,):
        report["status"] = "fail"
        report["reason"] = "release_check_dist_failed"
    else:
        report["status"] = "ok"
        report["reason"] = ""
    _write_latest_build_report(base, report)
    return report


def format_release_build_summary(report: Mapping[str, Any]) -> List[str]:
    """Format a compact text summary for humans."""
    artifact = report.get("artifact", {}) if isinstance(report.get("artifact"), Mapping) else {}
    lines = [
        "Release build: {}".format(report.get("status", "unknown")),
        "Project: {} {}".format(
            (report.get("project", {}) or {}).get("name", PROJECT_NAME) if isinstance(report.get("project"), Mapping) else PROJECT_NAME,
            (report.get("project", {}) or {}).get("version", PROJECT_VERSION) if isinstance(report.get("project"), Mapping) else PROJECT_VERSION,
        ),
        "Artifact: {}".format(artifact.get("name", EXPECTED_WINDOWS_ZIP)),
    ]
    if artifact.get("sha256_short"):
        lines.append("Artifact hash: {}".format(artifact.get("sha256_short")))
    if report.get("reason"):
        lines.append("Reason: {}".format(report.get("reason")))
    for step in report.get("steps", []) or []:
        if isinstance(step, Mapping):
            lines.append(" - [{status}] {name}".format(status=step.get("status", "unknown"), name=step.get("name", "step")))
    smoke = report.get("smoke", {}) if isinstance(report.get("smoke"), Mapping) else {}
    if smoke:
        lines.append("Smoke: {}".format(smoke.get("status", "unknown")))
    if not report.get("execute"):
        warnings = (report.get("preflight", {}) or {}).get("warnings", []) if isinstance(report.get("preflight"), Mapping) else []
        if warnings:
            lines.append("Warnings: {}".format(", ".join(str(item) for item in warnings)))
    return lines

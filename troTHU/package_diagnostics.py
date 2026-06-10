from __future__ import annotations

import ast
import importlib.util
from pathlib import Path
from typing import Any, Dict, Iterable, List, Mapping, Sequence


PROJECT_NAME = "auto-rollcall-thu-tronclass"
PROJECT_VERSION = "1.4a4"
PROJECT_RELEASE_LABEL = "1.4-alpha.4"
SPEC_NAME = "auto-rollcall-thu-tronclass.spec"
FORBIDDEN_BUNDLE_NAMES = (
    ".codex-worklog.md",
    "config.conf",
    "config.advanced.toml",
    "state",
    "log",
    "cookies",
    "pending_qr",
    "account_runtime",
    "tests",
)
REQUIRED_GITIGNORE_PATTERNS = (
    "build/",
    "dist/",
    "state/",
    "log/",
    ".tmp-tests/",
    "__pycache__/",
    "其他專案參考/",
)
REQUIRED_GITATTRIBUTES_PATTERNS = (
    "*.py text eol=lf",
    "*.md text eol=lf",
    "*.yaml text eol=lf",
    "*.spec text eol=lf",
)
REQUIRED_RUNTIME_MODULES = (
    "aiohttp",
    "aiohttp.web",
    "yaml",
    "nacl",
)
SMALL_BUNDLE_SPEC_EXCLUDES = (
    "playwright",
    "playwright.async_api",
    "greenlet",
    "pyee",
    "keyring",
    "keyrings",
    "cv2",
    "numpy",
    "PIL",
    "Pillow",
    "pyzbar",
)
SMALL_BUNDLE_ARTIFACT_PARTS = (
    "playwright",
    "greenlet",
    "pyee",
    "keyring",
    "keyrings",
    "cv2",
    "numpy",
    "PIL",
    "Pillow",
    "pyzbar",
    "opencv_python_headless",
)
OPTIONAL_RUNTIME_MODULES = (
    "keyring",
    "playwright.async_api",
    "cv2",
    "PIL",
)


def _safe_text(value: Any, *, limit: int = 160) -> str:
    text = str(value or "").strip()
    lowered = text.lower()
    if any(part in lowered for part in ("password", "passwd", "secret", "token", "cookie", "session", "payload")):
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


def _module_available(module_name: str) -> bool:
    try:
        return importlib.util.find_spec(module_name) is not None
    except (ImportError, AttributeError, ValueError):
        return False


def _read_text(path: Path) -> str:
    try:
        return path.read_text(encoding="utf-8")
    except OSError:
        return ""


def _ast_from_text(text: str) -> ast.AST | None:
    try:
        return ast.parse(text)
    except SyntaxError:
        return None


def _literal_strings(text: str) -> List[str]:
    tree = _ast_from_text(text)
    if tree is None:
        return []
    strings: List[str] = []
    for node in ast.walk(tree):
        if isinstance(node, ast.Constant) and isinstance(node.value, str):
            strings.append(node.value)
    return strings


def _assignment_list_strings(text: str, name: str) -> List[str]:
    tree = _ast_from_text(text)
    if tree is None:
        return []
    for node in ast.walk(tree):
        if not isinstance(node, ast.Assign):
            continue
        if not any(isinstance(target, ast.Name) and target.id == name for target in node.targets):
            continue
        if isinstance(node.value, (ast.List, ast.Tuple, ast.Set)):
            return [
                item.value
                for item in node.value.elts
                if isinstance(item, ast.Constant) and isinstance(item.value, str)
            ]
    return []


def _parse_toml(path: Path) -> Dict[str, Any]:
    if not path.exists():
        return {}
    try:
        import tomllib
    except ModuleNotFoundError:  # pragma: no cover - Python < 3.11 fallback
        return {}
    try:
        return tomllib.loads(path.read_text(encoding="utf-8"))
    except (OSError, ValueError):
        return {}


def _requirement_lines(path: Path) -> List[str]:
    if not path.exists():
        return []
    lines = []
    for line in _read_text(path).splitlines():
        stripped = line.strip()
        if stripped and not stripped.startswith("#"):
            lines.append(stripped)
    return lines


def _runtime_package_modules(package_dir: Path) -> List[str]:
    if not package_dir.exists():
        return []
    modules = []
    for path in package_dir.glob("*.py"):
        if path.name in {"__init__.py", "tron.py"}:
            continue
        modules.append("troTHU.{}".format(path.stem))
    return sorted(modules)


def discover_hidden_import_gaps(package_dir: Path, hidden_imports: Iterable[str]) -> List[str]:
    hidden = {str(item) for item in hidden_imports}
    return [module for module in _runtime_package_modules(Path(package_dir)) if module not in hidden]


def validate_pyinstaller_spec(spec_path: Path, *, package_dir: Path | None = None) -> Dict[str, Any]:
    spec = Path(spec_path)
    text = _read_text(spec)
    strings = _literal_strings(text)
    hidden_imports = sorted(
        {
            item
            for item in strings
            if item in {"aiohttp", "aiohttp.web", "yaml"} or item.startswith("troTHU.")
        }
    )
    excludes = _assignment_list_strings(text, "EXCLUDES")
    datas = _assignment_list_strings(text, "DATAS")
    forbidden_datas = [
        item
        for item in datas
        if any(forbidden.lower() in item.lower() for forbidden in FORBIDDEN_BUNDLE_NAMES)
    ]
    package_path = Path(package_dir) if package_dir is not None else spec.parent / "troTHU"
    hidden_import_gaps = discover_hidden_import_gaps(package_path, hidden_imports)
    missing_small_bundle_excludes = [
        item for item in SMALL_BUNDLE_SPEC_EXCLUDES if item not in excludes
    ]
    checks = [
        _check("spec exists", spec.exists(), SPEC_NAME, severity="fail"),
        _check("datas excludes local secrets", not forbidden_datas, "DATAS has no local config/state/log entries", severity="fail"),
        _check("tests excluded", "tests" in excludes, "tests excluded from PyInstaller bundle", severity="warn"),
        _check(
            "small bundle optional excludes",
            not missing_small_bundle_excludes,
            "browser/keyring/QR image optional packages excluded from default zip",
            severity="fail",
        ),
        _check("hidden imports current", not hidden_import_gaps, "all runtime modules listed in hidden imports", severity="warn"),
    ]
    return {
        "exists": spec.exists(),
        "file": spec.name,
        "datas": datas,
        "forbidden_datas": forbidden_datas,
        "hidden_imports": hidden_imports,
        "hidden_import_gaps": hidden_import_gaps,
        "excludes": excludes,
        "small_bundle_required_excludes": list(SMALL_BUNDLE_SPEC_EXCLUDES),
        "missing_small_bundle_excludes": missing_small_bundle_excludes,
        "checks": checks,
    }


def _pyproject_report(path: Path) -> Dict[str, Any]:
    data = _parse_toml(path)
    project = data.get("project", {}) if isinstance(data, Mapping) else {}
    scripts = project.get("scripts", {}) if isinstance(project, Mapping) else {}
    dependencies = project.get("dependencies", []) if isinstance(project, Mapping) else []
    optional = project.get("optional-dependencies", {}) if isinstance(project, Mapping) else {}
    dependency_text = "\n".join(dependencies).lower()
    checks = [
        _check("pyproject exists", path.exists(), path.name, severity="fail"),
        _check("project name", project.get("name") == PROJECT_NAME, PROJECT_NAME, severity="fail"),
        _check("project version", project.get("version") == PROJECT_VERSION, PROJECT_VERSION, severity="warn"),
        _check("console script trothu", scripts.get("trothu") == "troTHU.tron:main", "trothu entrypoint", severity="fail"),
        _check(
            "console script long name",
            scripts.get(PROJECT_NAME) == "troTHU.tron:main",
            "{} entrypoint".format(PROJECT_NAME),
            severity="fail",
        ),
        _check("aiohttp dependency", "aiohttp" in dependency_text, "aiohttp listed in pyproject.toml", severity="fail"),
        _check("pyyaml dependency", "pyyaml" in dependency_text, "PyYAML listed in pyproject.toml", severity="fail"),
        _check("pynacl dependency", "pynacl" in dependency_text, "PyNaCl listed in pyproject.toml", severity="warn"),
    ]
    return {
        "exists": path.exists(),
        "file": path.name,
        "name": _safe_text(project.get("name")),
        "version": _safe_text(project.get("version")),
        "dependencies": list(dependencies) if isinstance(dependencies, Sequence) and not isinstance(dependencies, str) else [],
        "optional_dependencies": {
            str(key): list(value) if isinstance(value, Sequence) and not isinstance(value, str) else []
            for key, value in (optional.items() if isinstance(optional, Mapping) else [])
        },
        "console_scripts": dict(scripts) if isinstance(scripts, Mapping) else {},
        "checks": checks,
    }


def _requirements_report(path: Path) -> Dict[str, Any]:
    return {
        "exists": False,
        "file": path.name,
        "dependencies": [],
        "checks": [],
    }


def _runtime_report() -> Dict[str, Any]:
    modules = {name: _module_available(name) for name in REQUIRED_RUNTIME_MODULES}
    modules["PyInstaller"] = _module_available("PyInstaller")
    optional_capabilities = {
        name: _module_available(name) for name in OPTIONAL_RUNTIME_MODULES
    }
    checks = [
        _check("module {}".format(name), available, "{} importable".format(name), severity="warn")
        for name, available in modules.items()
    ]
    return {
        "modules": modules,
        "optional_capabilities": optional_capabilities,
        "checks": checks,
    }


def _line_set(path: Path) -> set[str]:
    return {
        line.strip()
        for line in _read_text(path).splitlines()
        if line.strip() and not line.lstrip().startswith("#")
    }


def _git_hygiene_report(base_dir: Path) -> Dict[str, Any]:
    gitignore = Path(base_dir) / ".gitignore"
    gitattributes = Path(base_dir) / ".gitattributes"
    ignore_lines = _line_set(gitignore)
    attributes_text = _read_text(gitattributes)
    missing_ignore = [pattern for pattern in REQUIRED_GITIGNORE_PATTERNS if pattern not in ignore_lines]
    missing_attributes = [
        pattern
        for pattern in REQUIRED_GITATTRIBUTES_PATTERNS
        if pattern not in attributes_text
    ]
    config_ignored = "config.conf" in ignore_lines or "/config.conf" in ignore_lines
    checks = [
        _check(".gitignore exists", gitignore.exists(), ".gitignore", severity="warn"),
        _check(".gitignore ignores runtime artifacts", not missing_ignore, "build/dist/state/log/reference projects ignored", severity="warn"),
        _check("local config ignored", config_ignored, "config.conf is ignored", severity="fail"),
        _check(".gitattributes exists", gitattributes.exists(), ".gitattributes", severity="warn"),
        _check(".gitattributes normalizes text", not missing_attributes, "common text file types use LF", severity="warn"),
    ]
    return {
        "gitignore": gitignore.exists(),
        "gitattributes": gitattributes.exists(),
        "required_ignored": list(REQUIRED_GITIGNORE_PATTERNS),
        "missing_ignored": missing_ignore,
        "missing_attributes": missing_attributes,
        "config_local_file_ignored": config_ignored,
        "checks": checks,
    }


def _release_builder_report() -> Dict[str, Any]:
    available = _module_available("troTHU.release_builder") or _module_available("release_builder")
    checks = [
        _check("release-build runner", available, "troTHU.release_builder importable", severity="warn"),
    ]
    return {
        "available": available,
        "artifact_name": "THU_Auto_Rollcall-v{}-windows-x64.zip".format(PROJECT_RELEASE_LABEL),
        "checks": checks,
    }


def _overall_status(checks: Iterable[Mapping[str, Any]]) -> str:
    statuses = {str(item.get("status") or "ok") for item in checks}
    if "fail" in statuses:
        return "fail"
    if "warn" in statuses:
        return "warn"
    return "ok"


def build_package_diagnostic_report(base_dir: Path, *, config: Mapping[str, Any] | None = None) -> Dict[str, Any]:
    base = Path(base_dir)
    pyproject = _pyproject_report(base / "pyproject.toml")
    requirements = _requirements_report(base / "requirements.txt")
    pyinstaller = validate_pyinstaller_spec(base / SPEC_NAME, package_dir=base / "troTHU")
    runtime = _runtime_report()
    git_hygiene = _git_hygiene_report(base)
    release_builder = _release_builder_report()
    checks = []
    for section in (pyproject, requirements, pyinstaller, runtime, git_hygiene, release_builder):
        checks.extend(section.get("checks", []))
    return {
        "status": _overall_status(checks),
        "base_dir": base.name,
        "pyproject": pyproject,
        "requirements": requirements,
        "pyinstaller": pyinstaller,
        "runtime": runtime,
        "git_hygiene": git_hygiene,
        "release_builder": release_builder,
        "checks": checks,
    }

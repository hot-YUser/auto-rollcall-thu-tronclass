import json
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

try:
    import tomllib
except ModuleNotFoundError:  # pragma: no cover
    tomllib = None

from troTHU import tron
from troTHU.package_diagnostics import (
    PROJECT_VERSION,
    build_package_diagnostic_report,
    discover_hidden_import_gaps,
    validate_pyinstaller_spec,
)


class PackageDiagnosticsTest(unittest.TestCase):
    def test_pyproject_metadata_and_console_scripts_are_parseable(self) -> None:
        self.assertIsNotNone(tomllib)
        data = tomllib.loads(Path("pyproject.toml").read_text(encoding="utf-8"))
        project = data["project"]

        self.assertEqual(project["name"], "auto-rollcall-thu-tronclass")
        self.assertEqual(project["version"], PROJECT_VERSION)
        self.assertEqual(project["scripts"]["trothu"], "troTHU.tron:main")
        self.assertEqual(project["scripts"]["auto-rollcall-thu-tronclass"], "troTHU.tron:main")
        self.assertIn("aiohttp>=3.10.11", project["dependencies"])
        self.assertNotIn("textual>=8.2.0", project["dependencies"])

    def test_pyinstaller_spec_excludes_local_secrets_and_tracks_hidden_imports(self) -> None:
        report = validate_pyinstaller_spec(
            Path("auto-rollcall-thu-tronclass.spec"),
            package_dir=Path("troTHU"),
        )

        self.assertTrue(report["exists"])
        self.assertEqual(report["forbidden_datas"], [])
        self.assertIn("tests", report["excludes"])
        self.assertIn("troTHU.app_blueprint", report["hidden_imports"])
        self.assertIn("troTHU.app_qr_experience", report["hidden_imports"])
        self.assertIn("troTHU.app_shell", report["hidden_imports"])
        self.assertIn("troTHU.app_shell_dashboard", report["hidden_imports"])
        self.assertIn("troTHU.app_shell_polish", report["hidden_imports"])
        self.assertIn("troTHU.discord_gateway", report["hidden_imports"])
        self.assertIn("troTHU.global_radar_solver", report["hidden_imports"])
        self.assertIn("troTHU.radar_map_assist", report["hidden_imports"])
        self.assertIn("troTHU.telegram_adapter", report["hidden_imports"])
        self.assertIn("troTHU.config_format", report["hidden_imports"])
        self.assertIn("troTHU.config_editor", report["hidden_imports"])
        self.assertIn("troTHU.cli_teacher", report["hidden_imports"])
        self.assertIn("troTHU.group_runtime", report["hidden_imports"])
        self.assertIn("troTHU.package_diagnostics", report["hidden_imports"])
        self.assertIn("troTHU.release_builder", report["hidden_imports"])
        self.assertIn("troTHU.release_checklist", report["hidden_imports"])
        self.assertIn("troTHU.teacher_rollcall", report["hidden_imports"])
        self.assertIn("troTHU.qr_teacher_runtime", report["hidden_imports"])
        self.assertIn("troTHU.webview_sync", report["hidden_imports"])
        self.assertIn("playwright", report["excludes"])
        self.assertIn("keyring", report["excludes"])
        self.assertIn("cv2", report["excludes"])
        self.assertEqual(report["missing_small_bundle_excludes"], [])
        self.assertEqual(report["hidden_import_gaps"], [])

    def test_hidden_import_gap_detection_reports_missing_runtime_module(self) -> None:
        gaps = discover_hidden_import_gaps(Path("troTHU"), hidden_imports=["troTHU.account_store"])

        self.assertIn("troTHU.app_blueprint", gaps)
        self.assertIn("troTHU.app_qr_experience", gaps)
        self.assertIn("troTHU.app_shell", gaps)
        self.assertIn("troTHU.app_shell_dashboard", gaps)
        self.assertIn("troTHU.app_shell_polish", gaps)
        self.assertIn("troTHU.discord_gateway", gaps)
        self.assertIn("troTHU.global_radar_solver", gaps)
        self.assertIn("troTHU.radar_map_assist", gaps)
        self.assertIn("troTHU.telegram_adapter", gaps)
        self.assertIn("troTHU.config_format", gaps)
        self.assertIn("troTHU.config_editor", gaps)
        self.assertIn("troTHU.cli_teacher", gaps)
        self.assertIn("troTHU.group_runtime", gaps)
        self.assertIn("troTHU.package_diagnostics", gaps)
        self.assertIn("troTHU.release_builder", gaps)
        self.assertIn("troTHU.release_checklist", gaps)
        self.assertIn("troTHU.teacher_rollcall", gaps)
        self.assertIn("troTHU.qr_teacher_runtime", gaps)
        self.assertIn("troTHU.webview_sync", gaps)

    def test_package_report_is_safe_and_non_secret(self) -> None:
        report = build_package_diagnostic_report(Path("."), config=tron.CONFIG)
        encoded = json.dumps(report, ensure_ascii=False)

        self.assertIn(report["status"], {"ok", "warn", "fail"})
        self.assertIn("pyproject", report)
        self.assertIn("pyinstaller", report)
        self.assertIn("git_hygiene", report)
        self.assertEqual(report["git_hygiene"]["missing_ignored"], [])
        self.assertEqual(report["git_hygiene"]["missing_attributes"], [])
        self.assertTrue(report["git_hygiene"]["config_local_file_ignored"])
        self.assertNotIn("YOUR_PASSWORD", encoded)
        self.assertNotIn("state/cookies", encoded)
        self.assertNotIn(".codex-worklog.md", encoded)

    def test_missing_spec_reports_fail_without_exposing_local_state(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            report = validate_pyinstaller_spec(Path(temp_dir) / "missing.spec", package_dir=Path("troTHU"))

        encoded = json.dumps(report, ensure_ascii=False)
        self.assertFalse(report["exists"])
        self.assertIn("fail", {item["status"] for item in report["checks"]})
        self.assertNotIn("config.yaml", encoded)

    def test_package_report_runtime_section_lists_required_and_optional_modules(self) -> None:
        report = build_package_diagnostic_report(Path("."), config=tron.CONFIG)

        self.assertIn("PyInstaller", report["runtime"]["modules"])
        self.assertIn("nacl", report["runtime"]["modules"])
        self.assertIn("keyring", report["runtime"]["optional_capabilities"])
        self.assertIn("playwright.async_api", report["runtime"]["optional_capabilities"])
        self.assertNotIn("textual", report["runtime"]["modules"])

    def test_doctor_and_package_check_json_include_packaging_report(self) -> None:
        outputs = []
        with patch.object(tron, "bootstrap_config"), patch("builtins.print", side_effect=outputs.append):
            doctor_result = tron.main(["doctor", "--json"])
            package_result = tron.main(["package-check", "--json"])

        self.assertIn(doctor_result, {0, 1})
        self.assertIn(package_result, {0, 1})
        doctor_payload = json.loads(outputs[0])
        package_payload = json.loads(outputs[1])
        self.assertIn("packaging", doctor_payload)
        self.assertIn("pyproject", package_payload)
        self.assertIn("runtime", package_payload)
        self.assertIn("release", package_payload)
        self.assertIn("release_builder", package_payload)
        self.assertIn("git_hygiene", package_payload)

    def test_package_check_text_command_prints_checks(self) -> None:
        outputs = []
        with patch.object(tron, "bootstrap_config"), patch("builtins.print", side_effect=outputs.append):
            result = tron.main(["package-check"])

        self.assertIn(result, {0, 1})
        text = "\n".join(str(item) for item in outputs)
        self.assertIn("Package diagnostics", text)
        self.assertIn("pyproject", text)

    def test_ci_workflow_is_unittest_only_and_does_not_reference_secrets(self) -> None:
        workflow = Path(".github/workflows/ci.yml")
        text = workflow.read_text(encoding="utf-8")
        lowered = text.lower()

        self.assertTrue(workflow.exists())
        self.assertIn("python -m unittest discover -v", text)
        self.assertIn("tests.test_release_checklist", text)
        self.assertIn("tests.test_release_builder", text)
        self.assertIn("tests.test_readme_usage", text)
        self.assertIn("tests.test_app_shell_dashboard", text)
        self.assertIn("release-check --json", text)
        self.assertIn("release-build --dry-run --json", text)
        self.assertNotIn("secrets.", lowered)
        self.assertNotIn("upload-artifact", lowered)
        self.assertNotIn("deploy", lowered)

    def test_git_hygiene_files_keep_runtime_artifacts_ignored(self) -> None:
        gitignore = Path(".gitignore").read_text(encoding="utf-8")
        gitattributes = Path(".gitattributes").read_text(encoding="utf-8")

        for pattern in ("build/", "dist/", "state/", "log/", ".tmp-tests/", "__pycache__/", "其他專案參考/"):
            self.assertIn(pattern, gitignore)
        self.assertIn("\n/config.conf\n", "\n" + gitignore + "\n")
        self.assertIn("\n/config.advanced.toml\n", "\n" + gitignore + "\n")
        for pattern in ("*.py text eol=lf", "*.md text eol=lf", "*.yaml text eol=lf", "*.spec text eol=lf"):
            self.assertIn(pattern, gitattributes)

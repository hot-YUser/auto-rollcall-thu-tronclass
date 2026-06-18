from __future__ import annotations

import json
import tempfile
import unittest
import unittest.mock
import zipfile
from pathlib import Path
from troTHU.package_diagnostics import PROJECT_NAME, PROJECT_VERSION, build_package_diagnostic_report, discover_hidden_import_gaps, validate_pyinstaller_spec
from troTHU.release_checklist import EXPECTED_WINDOWS_ZIP, build_release_artifact_manifest, build_release_build_plan, build_release_checklist, format_release_checklist, validate_release_artifact
from troTHU.release_builder import RELEASE_NOTES_FILE, ReleaseBuildError, build_release_build_preflight, package_addon_bundle, package_release_artifact, run_release_build_pipeline
from troTHU import tron
from unittest.mock import patch


# --- merged from tests/test_release_builder.py ---
class AddonBundleTest(unittest.TestCase):
    def test_package_addon_bundle_zips_sidecar_and_node(self) -> None:
        with tempfile.TemporaryDirectory() as d:
            root = Path(d)
            sidecar = root / "ocr-sidecar"
            (sidecar / "_internal" / "ddddocr").mkdir(parents=True)
            (sidecar / "ocr-sidecar.exe").write_text("exe")
            # The add-on legitimately carries the OCR model/stack — must NOT be rejected.
            (sidecar / "_internal" / "ddddocr" / "common_old.onnx").write_text("model")
            node = root / "node.exe"
            node.write_text("node")
            artifact = root / "addons.zip"

            report = package_addon_bundle(sidecar, artifact, node_exe=node)

            self.assertEqual(report["status"], "ok")
            self.assertTrue(report["node_included"])
            with zipfile.ZipFile(artifact) as archive:
                names = archive.namelist()
            self.assertTrue(any(n.endswith("ocr-sidecar/ocr-sidecar.exe") for n in names))
            self.assertTrue(any(n.endswith("/node.exe") for n in names))

    def test_package_addon_bundle_rejects_secrets(self) -> None:
        with tempfile.TemporaryDirectory() as d:
            root = Path(d)
            sidecar = root / "ocr-sidecar"
            sidecar.mkdir()
            (sidecar / "ocr-sidecar.exe").write_text("exe")
            (sidecar / "config.conf").write_text("secret")  # must be refused
            with self.assertRaises(ReleaseBuildError):
                package_addon_bundle(sidecar, root / "addons.zip", node_exe=None)


class ReleaseBuilderTest(unittest.TestCase):
    def _prepare_base(self, root: Path) -> None:
        (root / "README.md").write_text("# Test README\n", encoding="utf-8")
        (root / RELEASE_NOTES_FILE).write_text("# Test Release Notes\n\nShip this note.\n", encoding="utf-8")
        (root / "auto-rollcall-thu-tronclass.spec").write_text("# spec\n", encoding="utf-8")
        (root / "troTHU").mkdir()
        (root / "troTHU" / "__init__.py").write_text("", encoding="utf-8")

    def _fake_runner(self, base: Path, *, fail_step: str = ""):
        calls = []

        def runner(command, cwd, step):
            calls.append({"step": step, "cwd": str(cwd), "command": list(command)})
            if step == fail_step:
                return {"returncode": 1, "stdout": "", "stderr": "{} failed".format(step)}
            if step == "pyinstaller":
                command_list = list(command)
                distpath = Path(command_list[command_list.index("--distpath") + 1])
                collect = distpath / PROJECT_NAME
                collect.mkdir(parents=True, exist_ok=True)
                (collect / "{}.exe".format(PROJECT_NAME)).write_text("placeholder", encoding="utf-8")
                (collect / "_internal").mkdir()
                (collect / "_internal" / "library.txt").write_text("placeholder", encoding="utf-8")
            stdout = "{}"
            if step == "smoke_help":
                stdout = "usage: auto-rollcall-thu-tronclass"
            return {"returncode": 0, "stdout": stdout, "stderr": "", "duration_seconds": 0.01}

        runner.calls = calls
        return runner

    def test_dry_run_report_includes_commands_artifact_and_policy(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            base = Path(temp_dir)
            preflight = build_release_build_preflight(base)

        encoded = json.dumps(preflight, ensure_ascii=False).lower()
        self.assertEqual(preflight["version"], "release-build-v1")
        self.assertEqual(preflight["artifact"]["name"], EXPECTED_WINDOWS_ZIP)
        self.assertIn("python -m unittest discover -v", "\n".join(preflight["commands"]))
        self.assertTrue(preflight["policy"]["smoke_uses_temp_extract"])
        self.assertIn("config.conf", preflight["forbidden_outputs"])
        self.assertNotIn("secret-token", encoded)

    def test_fake_execute_builds_zip_manifest_and_smoke(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            base = Path(temp_dir)
            self._prepare_base(base)
            runner = self._fake_runner(base)
            report = run_release_build_pipeline(base, execute=True, command_runner=runner)
            artifact = base / "dist" / EXPECTED_WINDOWS_ZIP

            self.assertEqual(report["status"], "ok")
            self.assertTrue(artifact.exists())
            self.assertTrue(report["artifact"]["sha256_short"])
            self.assertEqual(report["smoke"]["status"], "ok")
            self.assertTrue(report["smoke"]["uses_temp_extract"])
            with zipfile.ZipFile(artifact) as archive:
                names = archive.namelist()
                release_notes = archive.read(
                    next(name for name in names if name.endswith("RELEASE_NOTES.txt"))
                ).decode("utf-8")

        self.assertTrue(any(name.endswith("README.md") for name in names))
        self.assertTrue(any(name.endswith("RELEASE_NOTES.txt") for name in names))
        self.assertIn("Ship this note.", release_notes)
        self.assertFalse(any("/config.conf" in name or "/state/" in name or "/tests/" in name for name in names))

    def test_smoke_runs_from_temporary_extract_not_collect_source(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            base = Path(temp_dir)
            self._prepare_base(base)
            runner = self._fake_runner(base)
            report = run_release_build_pipeline(base, execute=True, command_runner=runner)

        smoke_cwds = [item["cwd"] for item in runner.calls if item["step"].startswith("smoke_")]
        self.assertTrue(smoke_cwds)
        self.assertTrue(all("release-smoke-" in cwd for cwd in smoke_cwds))
        self.assertEqual(report["smoke"]["status"], "ok")

    def test_package_release_artifact_rejects_forbidden_collect_members(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            root = Path(temp_dir)
            collect = root / "collect"
            collect.mkdir()
            (collect / "config.conf").write_text("unsafe", encoding="utf-8")
            readme = root / "README.md"
            readme.write_text("# readme\n", encoding="utf-8")

            with self.assertRaises(ReleaseBuildError):
                package_release_artifact(
                    collect,
                    root / "dist" / EXPECTED_WINDOWS_ZIP,
                    readme_path=readme,
                    notes_text="notes",
                )



    def test_pipeline_fails_when_pyinstaller_is_unavailable(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir, unittest.mock.patch("troTHU.release_builder._module_available", return_value=False):
            base = Path(temp_dir)
            self._prepare_base(base)
            report = run_release_build_pipeline(base, execute=True)

        self.assertEqual(report["status"], "fail")
        self.assertEqual(report["reason"], "pyinstaller_unavailable")

    def test_pipeline_failure_steps_are_reported_safely(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            base = Path(temp_dir)
            self._prepare_base(base)
            report = run_release_build_pipeline(base, execute=True, command_runner=self._fake_runner(base, fail_step="unittest"))

        encoded = json.dumps(report, ensure_ascii=False).lower()
        self.assertEqual(report["status"], "fail")
        self.assertEqual(report["reason"], "unittest_failed")
        self.assertNotIn("secret-token", encoded)
        self.assertNotIn("cookie-value", encoded)

    def test_missing_collect_dir_is_failure(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            base = Path(temp_dir)
            self._prepare_base(base)

            def runner(command, cwd, step):
                return {"returncode": 0, "stdout": "{}" if step != "smoke_help" else "usage", "stderr": ""}

            report = run_release_build_pipeline(base, execute=True, command_runner=runner)

        self.assertEqual(report["status"], "fail")
        self.assertEqual(report["reason"], "missing_collect_dir")


if __name__ == "__main__":
    unittest.main()


# --- merged from tests/test_release_checklist.py ---
class ReleaseChecklistTest(unittest.TestCase):
    def test_release_checklist_reports_core_sections(self) -> None:
        report = build_release_checklist(Path("."), config=tron.CONFIG)
        encoded = json.dumps(report, ensure_ascii=False).lower()

        self.assertIn(report["status"], {"ok", "warn", "fail"})
        self.assertIn("package", report)
        self.assertIn("ci", report)
        self.assertIn("readme", report)
        self.assertIn("credits", report)
        self.assertIn("artifact", report)
        self.assertIn("build_plan", report)
        self.assertIn("release-build_execute_builds_artifacts", report["notes"])
        readme_checks = {item["name"]: item["status"] for item in report["readme"]["checks"]}
        self.assertEqual(readme_checks["README no stale stable-version advice"], "ok")
        self.assertEqual(readme_checks["README monitor console quickstart"], "ok")
        self.assertEqual(readme_checks["credits MIT notice"], "ok")
        self.assertEqual(readme_checks["credits AGPL status"], "ok")
        self.assertNotIn("secret-token", encoded)

    def test_missing_dist_is_warning_not_failure(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            missing = Path(temp_dir) / "missing-dist"
            report = build_release_checklist(Path("."), config=tron.CONFIG, dist_dir=missing)

        self.assertIn(report["artifact"]["status"], {"ok", "warn"})
        self.assertFalse(report["artifact"]["exists"])
        self.assertNotIn("fail", {item["status"] for item in report["artifact"]["checks"]})

    def test_validate_release_artifact_flags_unsafe_local_names(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            root = Path(temp_dir)
            (root / EXPECTED_WINDOWS_ZIP).write_text("placeholder", encoding="utf-8")
            (root / "config.conf").write_text("user: should-not-ship", encoding="utf-8")
            (root / "state").mkdir()
            report = validate_release_artifact(root)

        self.assertEqual(report["status"], "fail")
        self.assertIn("config.conf", report["forbidden_names"])
        self.assertIn("state", report["forbidden_names"])

    def test_validate_release_artifact_inspects_zip_member_names_safely(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            root = Path(temp_dir)
            artifact = root / EXPECTED_WINDOWS_ZIP
            with zipfile.ZipFile(artifact, "w") as archive:
                archive.writestr("THU_Auto_Rollcall.exe", "placeholder")
                archive.writestr("state/cookies/default.json", "do-not-ship")
            report = validate_release_artifact(artifact)

        self.assertEqual(report["status"], "fail")
        self.assertIn("cookies", report["forbidden_names"])
        self.assertIn("default.json", report["manifest"]["items"][0]["zip_member_names"])

    def test_validate_release_artifact_flags_optional_bundle_members(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            root = Path(temp_dir)
            artifact = root / EXPECTED_WINDOWS_ZIP
            with zipfile.ZipFile(artifact, "w") as archive:
                archive.writestr("THU_Auto_Rollcall.exe", "placeholder")
                archive.writestr("_internal/cv2/__init__.py", "do-not-ship")
                archive.writestr("_internal/keyring/__init__.py", "do-not-ship")
            report = validate_release_artifact(artifact)

        self.assertEqual(report["status"], "fail")
        self.assertIn("keyring", report["optional_bundle_names"])
        self.assertIn("cv2", report["optional_bundle_names"])  # OCR stack must not be in the lean main exe

    def test_build_release_artifact_manifest_lists_names_hashes_and_sizes(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            artifact = Path(temp_dir) / EXPECTED_WINDOWS_ZIP
            with zipfile.ZipFile(artifact, "w") as archive:
                archive.writestr("THU_Auto_Rollcall.exe", "placeholder")
            manifest = build_release_artifact_manifest(artifact)

        self.assertTrue(manifest["exists"])
        self.assertEqual(manifest["item_count"], 1)
        self.assertEqual(manifest["items"][0]["kind"], "zip")
        self.assertTrue(manifest["items"][0]["sha256_short"])

    def test_build_release_build_plan_is_non_executing(self) -> None:
        plan = build_release_build_plan(Path("."))
        encoded = json.dumps(plan, ensure_ascii=False)

        self.assertEqual(plan["version"], "release-build-plan-v1")
        self.assertFalse(plan["executes_build"])
        self.assertIn("python -m PyInstaller", "\n".join(plan["commands"]))
        self.assertIn(EXPECTED_WINDOWS_ZIP, encoded)
        self.assertIn("README.md", encoded)
        self.assertNotIn("secret-token", encoded)

    def test_format_release_checklist_is_stable(self) -> None:
        report = build_release_checklist(Path("."), config=tron.CONFIG)
        text = "\n".join(format_release_checklist(report))

        self.assertIn("Release checklist:", text)
        self.assertIn("Project: auto-rollcall-thu-tronclass", text)
        self.assertIn("project version", text)

    def test_release_check_cli_json_dispatches(self) -> None:
        outputs = []
        with unittest.mock.patch.object(tron, "bootstrap_config"), unittest.mock.patch("builtins.print", side_effect=outputs.append):
            result = tron.main(["release-check", "--json"])

        self.assertIn(result, {0, 1})
        payload = json.loads(outputs[0])
        self.assertIn("package", payload)
        self.assertIn("ci", payload)
        self.assertIn("credits", payload)
        self.assertIn("artifact", payload)
        self.assertIn("latest_build", payload)

    def test_release_check_cli_plan_json_dispatches(self) -> None:
        outputs = []
        with unittest.mock.patch.object(tron, "bootstrap_config"), unittest.mock.patch("builtins.print", side_effect=outputs.append):
            result = tron.main(["release-check", "--plan", "--json"])

        self.assertIn(result, {0, 1})
        payload = json.loads(outputs[0])
        self.assertIn("release", payload)
        self.assertIn("build_plan", payload)
        self.assertFalse(payload["build_plan"]["executes_build"])


if __name__ == "__main__":
    unittest.main()


# --- merged from tests/test_package_diagnostics.py ---
try:
    import tomllib
except ModuleNotFoundError:  # pragma: no cover
    tomllib = None



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
        self.assertNotIn("playwright", report["excludes"])
        self.assertIn("keyring", report["excludes"])
        self.assertIn("cv2", report["excludes"])  # OCR stack lives in the add-on bundle, not the lean exe
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

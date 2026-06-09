import json
import tempfile
import unittest
import unittest.mock
import zipfile
from pathlib import Path

from troTHU.package_diagnostics import PROJECT_NAME
from troTHU.release_checklist import EXPECTED_WINDOWS_ZIP
from troTHU.release_builder import (
    RELEASE_NOTES_FILE,
    ReleaseBuildError,
    build_release_build_preflight,
    package_release_artifact,
    run_release_build_pipeline,
)


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

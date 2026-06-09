import json
import tempfile
import unittest
import zipfile
from pathlib import Path

from troTHU import tron
from troTHU.release_checklist import (
    EXPECTED_WINDOWS_ZIP,
    build_release_artifact_manifest,
    build_release_build_plan,
    build_release_checklist,
    format_release_checklist,
    validate_release_artifact,
)


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
                archive.writestr("_internal/playwright/driver/node.exe", "do-not-ship")
                archive.writestr("_internal/keyring/__init__.py", "do-not-ship")
            report = validate_release_artifact(artifact)

        self.assertEqual(report["status"], "fail")
        self.assertIn("playwright", report["optional_bundle_names"])
        self.assertIn("keyring", report["optional_bundle_names"])

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

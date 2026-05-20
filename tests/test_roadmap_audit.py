import json
import unittest

from troTHU.roadmap_audit import (
    CAPABILITY_IDS,
    COMPETITOR_IDS,
    build_goal_distance_report,
    build_remaining_round_plan,
    format_goal_distance_summary,
)


class RoadmapAuditTest(unittest.TestCase):
    def test_goal_distance_report_contains_all_projects_and_capabilities(self) -> None:
        report = build_goal_distance_report()

        self.assertEqual(report["competitor_count"], 8)
        self.assertEqual({item["id"] for item in report["competitors"]}, set(COMPETITOR_IDS))
        self.assertEqual(report["capability_count"], len(CAPABILITY_IDS))
        self.assertEqual({item["id"] for item in report["capability_areas"]}, set(CAPABILITY_IDS))
        for item in report["capability_areas"]:
            self.assertIn("status", item)
            self.assertIn("competitor_sources", item)
            self.assertIn("gap", item)
            self.assertIn("recommended_next_step", item)
            self.assertIn("estimated_rounds", item)
            self.assertIn("blocks_upper_replacement", item)

    def test_remaining_round_plan_has_groups_acceptance_and_estimates(self) -> None:
        plan = build_remaining_round_plan()

        self.assertEqual({group["id"] for group in plan["groups"]}, {"P0", "P1", "P2", "P3"})
        self.assertEqual(plan["total_estimates"]["minimum_to_claim_thu_upper_replacement"], 1)
        self.assertGreaterEqual(plan["total_estimates"]["strong_polish_total"], 1)
        for group in plan["groups"]:
            self.assertTrue(group["items"])
            for item in group["items"]:
                self.assertIn("acceptance", item)
                self.assertIsInstance(item["acceptance"], list)
                self.assertIn("estimated_rounds", item)
                self.assertIn("blocks_upper_replacement", item)

    def test_reports_do_not_contain_sensitive_terms(self) -> None:
        encoded = json.dumps(
            {
                "report": build_goal_distance_report(),
                "plan": build_remaining_round_plan(),
            },
            ensure_ascii=False,
        ).lower()

        for forbidden in ("password", "token", "cookie", "session", "raw qr", "raw response"):
            self.assertNotIn(forbidden, encoded)

    def test_fju_tku_remain_experimental(self) -> None:
        report = build_goal_distance_report()

        scope = report["provider_scope"]
        self.assertEqual(scope["thu"]["support_level"], "ready")
        self.assertTrue(scope["thu"]["daily_ready"])
        self.assertEqual(scope["fju"]["support_level"], "experimental")
        self.assertEqual(scope["tku"]["support_level"], "experimental")
        self.assertFalse(scope["fju"]["daily_ready"])
        self.assertFalse(scope["tku"]["daily_ready"])
        self.assertEqual(report["distance"]["cross_school_ready"], "blocked_by_user_masked_fixture")

    def test_summary_formatter_mentions_remaining_rounds_and_blockers(self) -> None:
        report = build_goal_distance_report()
        lines = format_goal_distance_summary(report)
        text = "\n".join(lines)

        self.assertIn("Minimum remaining engineering rounds", text)
        self.assertIn("thu_core", text)
        self.assertIn("release_package", text)

    def test_r2_r3_completed_and_only_live_acceptance_remains_minimum_blocker(self) -> None:
        report = build_goal_distance_report()
        plan = build_remaining_round_plan()
        capabilities = {item["id"]: item for item in report["capability_areas"]}
        p0_items = {item["id"]: item for item in plan["groups"][0]["items"]}

        self.assertEqual(capabilities["release_package"]["status"], "completed_artifact_build_core")
        self.assertFalse(capabilities["release_package"]["blocks_upper_replacement"])
        self.assertEqual(p0_items["R2-RELEASE-BUILD"]["status"], "completed_core")
        self.assertFalse(p0_items["R2-RELEASE-BUILD"]["blocks_upper_replacement"])
        self.assertEqual(p0_items["R3-DOCS-USAGE-POLISH"]["status"], "completed_core")
        self.assertFalse(p0_items["R3-DOCS-USAGE-POLISH"]["blocks_upper_replacement"])
        self.assertEqual(plan["next_recommended_round"], "R1-REAL-VALIDATION")

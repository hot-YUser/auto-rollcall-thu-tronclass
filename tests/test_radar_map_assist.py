import json
import unittest

from troTHU import tron
from troTHU.radar_map_assist import (
    build_radar_map_assist,
    format_radar_map_assist_summary,
    validate_radar_point,
)


def make_config():
    return tron.normalize_config(
        {
            "provider": {"current": "thu"},
            "radar": {
                "boundary_points": [
                    [24.181000, 120.600000],
                    [24.181000, 120.601000],
                    [24.182000, 120.601000],
                    [24.182000, 120.600000],
                ],
                "final_grid_step_meters": 4,
                "final_grid_radius_meters": 12,
            },
        }
    )


class RadarMapAssistTest(unittest.TestCase):
    def test_build_model_includes_boundary_center_grid_and_provider(self) -> None:
        model = build_radar_map_assist(make_config())

        self.assertEqual(model["status"], "ok")
        self.assertEqual(model["provider"], "thu")
        self.assertEqual(len(model["boundary"]), 4)
        self.assertAlmostEqual(model["center"]["lat"], 24.1815)
        self.assertAlmostEqual(model["center"]["lon"], 120.6005)
        self.assertEqual(model["candidate_grid"]["step_meters"], 100.0)
        self.assertIsNone(model["candidate_grid"]["radius_meters"])
        self.assertEqual(model["candidate_grid"]["legacy_radius_meters"], 12.0)
        self.assertIsNone(model["candidate_grid"]["estimated_points"])
        self.assertTrue(model["candidate_grid"]["unbounded"])
        self.assertEqual(model["candidate_grid"]["strategy"], "unbounded_final_grid")
        self.assertEqual(model["feature_collection"]["type"], "FeatureCollection")

    def test_validate_point_inside_outside_and_invalid(self) -> None:
        boundary = [[item["lat"], item["lon"]] for item in build_radar_map_assist(make_config())["boundary"]]

        inside = validate_radar_point(24.1815, 120.6005, boundary=boundary)
        outside = validate_radar_point(24.1800, 120.6005, boundary=boundary)
        invalid = validate_radar_point("bad", 120.6005, boundary=boundary)

        self.assertTrue(inside["ok"])
        self.assertTrue(inside["inside_boundary"])
        self.assertTrue(outside["ok"])
        self.assertFalse(outside["inside_boundary"])
        self.assertIn("outside_boundary", outside["warnings"])
        self.assertFalse(invalid["ok"])
        self.assertEqual(invalid["reason"], "invalid_coordinate")

    def test_tku_and_fju_share_radar_capability_without_warning(self) -> None:
        tku = build_radar_map_assist(tron.normalize_config({"provider": {"current": "tku"}}))
        config = tron.normalize_config({"provider": {"current": "fju"}})
        fju = build_radar_map_assist(config)

        for model in (tku, fju):
            self.assertEqual(model["support_level"], "ready")
            self.assertTrue(model["daily_ready"])
            self.assertTrue(model["capabilities"]["radar"])
            self.assertNotIn("provider_radar_capability_unknown", model["warnings"])
            self.assertNotIn("provider_not_daily_ready", model["warnings"])

    def test_summary_formatter_is_stable(self) -> None:
        lines = format_radar_map_assist_summary(build_radar_map_assist(make_config()))
        text = "\n".join(lines)

        self.assertIn("Radar Assist: ok", text)
        self.assertIn("Provider: thu", text)
        self.assertIn("Candidate grid:", text)

    def test_model_is_safe(self) -> None:
        model = build_radar_map_assist(make_config())
        encoded = json.dumps(model, ensure_ascii=False).lower()

        for forbidden in (
            "password",
            "token",
            "cookie",
            "session-secret",
            "raw response",
            "raw payload",
            "radarsignal-secret",
        ):
            self.assertNotIn(forbidden, encoded)


if __name__ == "__main__":
    unittest.main()

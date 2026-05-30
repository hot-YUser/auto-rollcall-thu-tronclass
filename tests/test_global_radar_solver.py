import math
import unittest

from troTHU.global_radar_solver import (
    GlobalDistanceObservation,
    GlobalRadarSolverConfig,
    GeoPoint,
    global_anchor_points,
    ring_sample_points,
    should_request_supplement,
    solve_global_radar,
    standard_sample_points,
    supplement_sample_points,
    wgs84_direct_point,
    wgs84_distance_meters,
)


class GlobalRadarSolverTest(unittest.TestCase):
    def test_global_plan_uses_12_anchors_60_standard_and_36_supplement_points(self) -> None:
        cfg = GlobalRadarSolverConfig()
        center = GeoPoint(24.1795, 120.604)

        anchors = global_anchor_points(cfg.anchor_count)
        standard = standard_sample_points(center, cfg)
        supplement = supplement_sample_points(center, cfg)

        self.assertEqual(len(anchors), 12)
        self.assertEqual(len(standard), 60)
        self.assertEqual(len(supplement), 36)
        self.assertEqual(len({(round(point.lat, 8), round(point.lon, 8)) for point in anchors}), 12)

    def test_direct_and_inverse_geodesic_agree_on_local_ring_radius(self) -> None:
        center = GeoPoint(35.6812, 139.7671)

        for point in ring_sample_points(center, (100.0, 1000.0, 10000.0), bearing_count=12):
            distance = wgs84_distance_meters(center, point)
            self.assertTrue(any(abs(distance - radius) < 0.02 for radius in (100.0, 1000.0, 10000.0)))

        moved = wgs84_direct_point(center, 90.0, 1000.0)
        self.assertAlmostEqual(wgs84_distance_meters(center, moved), 1000.0, delta=0.02)

    def test_rounded_72_point_solution_recovers_targets_worldwide(self) -> None:
        cfg = GlobalRadarSolverConfig()
        targets = (
            GeoPoint(24.1795, 120.604),
            GeoPoint(35.6812, 139.7671),
            GeoPoint(40.7128, -74.0060),
            GeoPoint(0.0, 179.8),
            GeoPoint(89.2, 42.0),
        )

        for target in targets:
            observations = [
                GlobalDistanceObservation(anchor, round(wgs84_distance_meters(target, anchor)), "anchor")
                for anchor in global_anchor_points(cfg.anchor_count)
            ]
            coarse = solve_global_radar(observations, config=cfg)
            observations.extend(
                GlobalDistanceObservation(point, round(wgs84_distance_meters(target, point)), "standard")
                for point in standard_sample_points(coarse.point, cfg)
            )

            estimate = solve_global_radar(observations, config=cfg, initial=coarse.point)

            self.assertLess(
                wgs84_distance_meters(target, estimate.point),
                1.0,
                msg="target {} should solve below 1m".format(target),
            )
            self.assertLess(estimate.residual_rmse, 0.5)
            self.assertFalse(should_request_supplement(estimate, cfg))

    def test_robust_fit_stays_inside_70m_with_single_large_outlier(self) -> None:
        cfg = GlobalRadarSolverConfig()
        target = GeoPoint(24.1795, 120.604)
        observations = []
        for index, anchor in enumerate(global_anchor_points(cfg.anchor_count)):
            distance = round(wgs84_distance_meters(target, anchor))
            if index == 0:
                distance += 500.0
            observations.append(GlobalDistanceObservation(anchor, distance, "anchor"))
        coarse = solve_global_radar(observations, config=cfg)
        observations.extend(
            GlobalDistanceObservation(point, round(wgs84_distance_meters(target, point)), "standard")
            for point in standard_sample_points(coarse.point, cfg)
        )

        estimate = solve_global_radar(observations, config=cfg, initial=coarse.point)

        self.assertLess(wgs84_distance_meters(target, estimate.point), 70.0)
        self.assertGreater(estimate.residual_rmse, 10.0)
        self.assertTrue(math.isfinite(estimate.uncertainty_95_meters))


if __name__ == "__main__":
    unittest.main()

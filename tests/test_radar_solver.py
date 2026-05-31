import itertools
import math
import unittest

from troTHU.radar_solver import (
    DEFAULT_BOUNDARY_POINTS,
    DistanceObservation,
    GeoPoint,
    LocalFrame,
    build_probe_plan,
    choose_fourth_probe,
    distance,
    final_candidate_points,
    local_distance_to_geo,
    point_in_polygon,
    polygon_area,
    solve_position,
    unbounded_grid_offsets,
)


class RadarSolverTest(unittest.TestCase):
    def test_enu_round_trip_stays_sub_centimeter_near_thu(self) -> None:
        boundary = [GeoPoint(lat, lon) for lat, lon in DEFAULT_BOUNDARY_POINTS]
        frame = LocalFrame.from_points(boundary)
        samples = boundary + [GeoPoint(24.1795, 120.604)]

        for sample in samples:
            local = frame.to_local(sample)
            round_tripped = frame.to_geo(local)
            self.assertLess(local_distance_to_geo(frame, sample, round_tripped), 0.01)

    def test_convex_hull_and_external_probe_triangle_cover_boundary(self) -> None:
        plan = build_probe_plan(DEFAULT_BOUNDARY_POINTS, allow_outside=True, outside_scale=1.6)

        self.assertEqual(len(plan.hull), 4)
        self.assertGreater(abs(polygon_area(plan.hull)), 1_200_000)
        self.assertGreater(abs(polygon_area(plan.probes)), abs(polygon_area(plan.hull)))
        self.assertTrue(all(point_in_polygon(point, plan.probes) for point in plan.hull))

    def test_exact_three_distance_solution_recovers_target(self) -> None:
        plan = build_probe_plan(DEFAULT_BOUNDARY_POINTS, allow_outside=True, outside_scale=1.6)
        target = plan.frame.to_local(GeoPoint(24.1795, 120.604))
        observations = [
            DistanceObservation(probe, distance(target, probe))
            for probe in plan.probes
        ]

        solution = solve_position(observations)

        self.assertLess(distance(target, solution.point), 0.1)
        self.assertLess(solution.residual_rmse, 0.01)

    def test_fourth_probe_keeps_rounded_and_truncated_distances_under_one_meter(self) -> None:
        plan = build_probe_plan(DEFAULT_BOUNDARY_POINTS, allow_outside=True, outside_scale=1.6)
        target = plan.frame.to_local(GeoPoint(24.1795, 120.604))

        for quantize in (round, math.floor):
            observations = [
                DistanceObservation(probe, float(quantize(distance(target, probe))))
                for probe in plan.probes
            ]
            initial = solve_position(observations).point
            fourth_probe = choose_fourth_probe(initial, plan.probes, plan.hull)
            observations.append(
                DistanceObservation(fourth_probe, float(quantize(distance(target, fourth_probe))))
            )

            solution = solve_position(observations, initial=initial)

            self.assertLess(distance(target, solution.point), 1.0)

    def test_final_candidates_include_grid_offsets(self) -> None:
        plan = build_probe_plan(DEFAULT_BOUNDARY_POINTS, allow_outside=True, outside_scale=1.6)
        estimate = plan.frame.to_local(GeoPoint(24.1795, 120.604))

        candidates = final_candidate_points(
            plan.frame,
            estimate,
            max_candidates=100,
            grid_step_meters=5.0,
            grid_radius_meters=20.0,
        )

        self.assertGreaterEqual(len(candidates), 81)
        offsets = set()
        for candidate in candidates:
            local = plan.frame.to_local(candidate)
            offsets.add((round(local.x - estimate.x), round(local.y - estimate.y)))

        self.assertIn((5, 0), offsets)
        self.assertIn((5, 5), offsets)
        self.assertIn((20, 20), offsets)
        self.assertIn((-20, -20), offsets)

    def test_final_grid_candidates_visit_each_five_meter_square_point(self) -> None:
        plan = build_probe_plan(DEFAULT_BOUNDARY_POINTS, allow_outside=True, outside_scale=1.6)
        estimate = plan.frame.to_local(GeoPoint(24.1795, 120.604))

        candidates = final_candidate_points(
            plan.frame,
            estimate,
            max_candidates=25,
            grid_step_meters=5.0,
            grid_radius_meters=10.0,
        )

        offsets = set()
        for candidate in candidates:
            local = plan.frame.to_local(candidate)
            offsets.add((round(local.x - estimate.x), round(local.y - estimate.y)))

        expected_offsets = {
            (east, north)
            for east in range(-10, 11, 5)
            for north in range(-10, 11, 5)
        }
        self.assertEqual(offsets, expected_offsets)

    def test_unbounded_grid_offsets_start_at_center_then_nearest_100m_ring(self) -> None:
        offsets = list(itertools.islice(unbounded_grid_offsets(100.0), 9))

        self.assertEqual(
            offsets,
            [
                (0.0, 0.0, 0),
                (100.0, 0.0, 1),
                (0.0, 100.0, 1),
                (-100.0, 0.0, 1),
                (0.0, -100.0, 1),
                (100.0, 100.0, 2),
                (-100.0, 100.0, 2),
                (-100.0, -100.0, 2),
                (100.0, -100.0, 2),
            ],
        )

    def test_unbounded_grid_offsets_continue_beyond_any_fixed_radius(self) -> None:
        offsets = list(itertools.islice(unbounded_grid_offsets(100.0), 80))
        distances = [east * east + north * north for east, north, _ring in offsets]

        self.assertEqual(distances, sorted(distances))
        self.assertGreaterEqual(max(abs(east) for east, _north, _ring in offsets), 400.0)


if __name__ == "__main__":
    unittest.main()

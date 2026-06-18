from __future__ import annotations

import json
import unittest
import itertools
import math
from troTHU import radar_rollcall, runtime_helpers, tron
from troTHU.radar_solver import GeoPoint, DEFAULT_BOUNDARY_POINTS, DistanceObservation, LocalFrame, build_probe_plan, choose_fourth_probe, distance, final_candidate_points, local_distance_to_geo, point_in_polygon, polygon_area, solve_position, unbounded_grid_offsets
from troTHU.global_radar_solver import GlobalDistanceObservation, GlobalRadarSolverConfig, global_anchor_points, ring_sample_points, should_request_supplement, solve_global_radar, standard_sample_points, supplement_sample_points, wgs84_direct_point, wgs84_distance_meters
from troTHU.radar_map_assist import build_radar_map_assist, format_radar_map_assist_summary, validate_radar_point


# --- merged from tests/test_radar_rollcall.py ---
class RadarRollcallTest(unittest.TestCase):
    def test_parse_lite_payload_accepts_flat_nested_and_fallback_shapes(self) -> None:
        flat = radar_rollcall.parse_radar_lite_payload(
            {"rollcall_id": 88, "use_beacon": "true", "beacon_nonce": "nonce-1"}
        )
        self.assertEqual(flat.rollcall_id, "88")
        self.assertTrue(flat.use_beacon)
        self.assertEqual(flat.beacon_nonce, "nonce-1")
        self.assertEqual(flat.source, "payload")

        nested = radar_rollcall.parse_radar_lite_payload(
            {"data": {"rollcallId": "99", "beacon": {"nonce": "nested-nonce"}}}
        )
        self.assertEqual(nested.rollcall_id, "99")
        self.assertTrue(nested.use_beacon)
        self.assertEqual(nested.beacon_nonce, "nested-nonce")
        self.assertEqual(nested.raw_shape, "dict:data")

        fallback = radar_rollcall.parse_radar_lite_payload(
            "not-json",
            fallback_rollcall={"rollcall_id": 77, "useBeacon": 1, "beaconNonce": "fallback"},
        )
        self.assertEqual(fallback.rollcall_id, "77")
        self.assertTrue(fallback.use_beacon)
        self.assertEqual(fallback.beacon_nonce, "fallback")
        self.assertEqual(fallback.source, "fallback")

    def test_parse_lite_payload_accepts_string_beacon_nonce_and_false_tokens(self) -> None:
        string_beacon = radar_rollcall.parse_radar_lite_payload(
            {"rollcall_id": 88, "beacon": "nonce-as-string"}
        )
        false_token = radar_rollcall.parse_radar_lite_payload(
            {"rollcall_id": 89, "useBeacon": "0", "beaconNonce": "ignored-unless-enabled"}
        )

        self.assertTrue(string_beacon.use_beacon)
        self.assertEqual(string_beacon.beacon_nonce, "nonce-as-string")
        self.assertFalse(false_token.use_beacon)
        self.assertEqual(false_token.beacon_nonce, "ignored-unless-enabled")

    def test_parse_lite_payload_handles_empty_payload_without_fallback(self) -> None:
        info = radar_rollcall.parse_radar_lite_payload(None)

        self.assertEqual(info.rollcall_id, "")
        self.assertFalse(info.use_beacon)
        self.assertEqual(info.beacon_nonce, "")
        self.assertEqual(info.source, "fallback")

    def test_build_answer_payload_preserves_radar_fields_and_beacon_signal(self) -> None:
        payload = radar_rollcall.build_radar_answer_payload(
            GeoPoint(24.1, 120.2),
            device_id="device-1",
            user_id=238730,
            use_beacon=True,
            beacon_nonce="nonce-",
            accuracy=42,
        )

        self.assertEqual(payload["deviceId"], "device-1")
        self.assertEqual(payload["latitude"], 24.1)
        self.assertEqual(payload["longitude"], 120.2)
        self.assertEqual(payload["accuracy"], 42)
        self.assertIn("speed", payload)
        self.assertIn("heading", payload)
        self.assertIn("altitude", payload)
        self.assertIn("altitudeAccuracy", payload)
        self.assertRegex(payload["radarSignal"], r"^[a-f0-9]{32},\d+$")

    def test_build_answer_payload_without_beacon_uses_default_accuracy(self) -> None:
        payload = radar_rollcall.build_radar_answer_payload(
            {"lat": "24.2", "lng": "120.3"},
            device_id="device-2",
        )

        self.assertEqual(payload["latitude"], 24.2)
        self.assertEqual(payload["longitude"], 120.3)
        self.assertEqual(payload["accuracy"], 60)
        self.assertNotIn("radarSignal", payload)

    def test_attempt_diagnostic_does_not_include_raw_payload_values_or_secrets(self) -> None:
        result = runtime_helpers.RadarCoordinateResult(
            success=False,
            distance=12.34567,
            error_code="radar_out_of_rollcall_scope",
            message="out of scope",
        )
        diagnostic = radar_rollcall.build_radar_attempt_diagnostic(
            label="probe-1",
            point=GeoPoint(24.123456789, 120.987654321),
            result=result,
            payload={
                "deviceId": "raw-device-secret",
                "latitude": 24.123456789,
                "longitude": 120.987654321,
                "sessionToken": "super-secret-token",
                "radarSignal": "sensitive-signal-value",
            },
        )
        encoded = json.dumps(diagnostic, ensure_ascii=False)

        self.assertEqual(diagnostic["label"], "probe-1")
        self.assertEqual(diagnostic["distance"], 12.346)
        self.assertIn("deviceId", diagnostic["payload_fields"])
        self.assertIn("radarSignal", diagnostic["payload_fields"])
        self.assertNotIn("sessionToken", diagnostic["payload_fields"])
        self.assertNotIn("raw-device-secret", encoded)
        self.assertNotIn("super-secret-token", encoded)
        self.assertNotIn("sensitive-signal-value", encoded)

    def test_attempt_diagnostic_redacts_sensitive_field_names(self) -> None:
        diagnostic = radar_rollcall.build_radar_attempt_diagnostic(
            label="candidate-1",
            point=GeoPoint(24.0, 120.0),
            result=runtime_helpers.RadarCoordinateResult(success=True),
            payload={
                "cookie": "c",
                "password": "p",
                "secret": "s",
                "session_id": "sid",
                "latitude": 24.0,
            },
        )

        self.assertEqual(diagnostic["payload_fields"], ["latitude"])


if __name__ == "__main__":
    unittest.main()


# --- merged from tests/test_radar_solver.py ---
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


# --- merged from tests/test_global_radar_solver.py ---
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


# --- merged from tests/test_radar_map_assist.py ---
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

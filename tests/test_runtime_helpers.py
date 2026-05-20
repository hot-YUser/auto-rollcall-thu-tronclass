import hashlib
import json
import time
import unittest

from troTHU import runtime_helpers


class RuntimeHelpersTest(unittest.TestCase):
    def test_schedule_range_accepts_string_dict_and_fallback(self) -> None:
        self.assertEqual(runtime_helpers.normalize_schedule_range("09:00 ~ 17:30"), ["09:00", "17:30"])
        self.assertEqual(
            runtime_helpers.normalize_schedule_range({"start": "8:05", "end": "12:10"}),
            ["08:05", "12:10"],
        )
        self.assertEqual(runtime_helpers.normalize_schedule_range("oops"), ["00:00", "00:00"])

    def test_schedule_range_supports_overnight_and_always_on(self) -> None:
        start, end = runtime_helpers.parse_schedule_range("23:00-01:00")
        self.assertTrue(
            runtime_helpers.is_within_schedule(
                start,
                end,
                runtime_helpers.datetime.strptime("23:30", "%H:%M").time(),
            )
        )
        self.assertTrue(
            runtime_helpers.is_within_schedule(
                start,
                end,
                runtime_helpers.datetime.strptime("00:30", "%H:%M").time(),
            )
        )
        self.assertFalse(
            runtime_helpers.is_within_schedule(
                start,
                end,
                runtime_helpers.datetime.strptime("12:00", "%H:%M").time(),
            )
        )

        always_start, always_end = runtime_helpers.parse_schedule_range("bad")
        self.assertTrue(
            runtime_helpers.is_within_schedule(
                always_start,
                always_end,
                runtime_helpers.datetime.strptime("12:00", "%H:%M").time(),
            )
        )

    def test_coerce_helpers_keep_defaults_and_minimums(self) -> None:
        self.assertTrue(runtime_helpers.coerce_bool("enabled", False))
        self.assertFalse(runtime_helpers.coerce_bool("off", True))
        self.assertTrue(runtime_helpers.coerce_bool("unknown", True))
        self.assertEqual(runtime_helpers.coerce_positive_int("-10", 5, minimum=2), 2)
        self.assertEqual(runtime_helpers.coerce_positive_int("bad", 5, minimum=2), 5)
        self.assertEqual(runtime_helpers.coerce_positive_float("0", 1.5, minimum=0.25), 0.25)
        self.assertEqual(runtime_helpers.coerce_positive_float("bad", 1.5, minimum=0.25), 1.5)

    def test_payload_excerpt_truncates_and_serializes(self) -> None:
        self.assertIsNone(runtime_helpers.make_payload_excerpt(None))
        self.assertEqual(runtime_helpers.make_payload_excerpt({"a": 1}), json.dumps({"a": 1}, ensure_ascii=False))
        self.assertEqual(runtime_helpers.make_payload_excerpt("abcdef", limit=3), "abc...(truncated)")

    def test_radar_helpers_parse_distance_and_signal(self) -> None:
        result = runtime_helpers.parse_radar_answer_result(
            400,
            json.dumps(
                {
                    "distance": 12.5,
                    "error_code": "radar_out_of_rollcall_scope",
                    "message": "out of scope",
                }
            ),
        )
        self.assertFalse(result.success)
        self.assertTrue(result.is_scope_distance)
        self.assertEqual(result.distance, 12.5)

        expected_hash = hashlib.md5("nonce-device-2387301715000123456".encode("utf-8")).hexdigest()
        self.assertEqual(
            runtime_helpers.build_radar_signal("nonce-", "device-", 238730, 1715000123456),
            f"{expected_hash},1715000123456",
        )

    def test_radar_answer_parser_accepts_nested_and_http_error_shapes(self) -> None:
        nested_data = runtime_helpers.parse_radar_answer_result(
            400,
            json.dumps(
                {
                    "data": {
                        "distance": "31.25",
                        "error": {"code": "radar_out_of_rollcall_scope"},
                    }
                }
            ),
        )
        self.assertTrue(nested_data.is_scope_distance)
        self.assertEqual(nested_data.distance, 31.25)

        nested_error = runtime_helpers.parse_radar_answer_result(
            400,
            json.dumps(
                {
                    "error": {
                        "code": "radar_out_of_rollcall_scope",
                        "message": "still outside",
                    },
                    "scope": {"distance_meters": "7.5"},
                }
            ),
        )
        self.assertTrue(nested_error.is_scope_distance)
        self.assertEqual(nested_error.distance, 7.5)
        self.assertEqual(nested_error.message, "still outside")

        expired = runtime_helpers.parse_radar_answer_result(401, "unauthorized")
        limited = runtime_helpers.parse_radar_answer_result(429, "limited")
        server_error = runtime_helpers.parse_radar_answer_result(503, "down")
        invalid_json = runtime_helpers.parse_radar_answer_result(400, "{not-json")

        self.assertEqual(expired.error_code, "radar_session_expired")
        self.assertEqual(limited.error_code, "radar_rate_limited")
        self.assertEqual(server_error.error_code, "radar_server_error")
        self.assertEqual(invalid_json.error_code, "{not-json")

    def test_radar_answer_parser_accepts_success_and_errors_list_shape(self) -> None:
        success = runtime_helpers.parse_radar_answer_result(
            200,
            json.dumps({"success": False, "message": "ignored on 200"}),
        )
        errors_list = runtime_helpers.parse_radar_answer_result(
            400,
            json.dumps(
                {
                    "errors": [
                        {
                            "code": "radar_out_of_rollcall_scope",
                            "message": "outside from list",
                        }
                    ],
                    "data": {"distanceMeters": "18.75"},
                }
            ),
        )

        self.assertTrue(success.success)
        self.assertTrue(errors_list.is_scope_distance)
        self.assertEqual(errors_list.distance, 18.75)
        self.assertEqual(errors_list.message, "outside from list")

    def test_number_display_helpers_match_expected_shape(self) -> None:
        banner = runtime_helpers.format_found_code_banner("0427")
        self.assertIn("Code: 0427", banner)
        self.assertIn("找到點名數字！", banner)

        started_at = time.perf_counter() - 1.25
        progress = runtime_helpers.build_number_progress_message(77, 123, "0123", started_at)
        self.assertIn("數字點名 #77", progress)
        self.assertIn("已送出 123/10000", progress)
        self.assertIn("最近代碼 0123", progress)

    def test_radar_boundary_points_normalizes_or_falls_back(self) -> None:
        points = runtime_helpers.normalize_radar_boundary_points(
            [{"lat": "24.1", "lng": "120.1"}, [24.2, 120.2], (24.3, 120.3)]
        )
        self.assertEqual(points, [[24.1, 120.1], [24.2, 120.2], [24.3, 120.3]])

        fallback = runtime_helpers.normalize_radar_boundary_points([[24.1, 120.1]])
        self.assertGreaterEqual(len(fallback), 3)

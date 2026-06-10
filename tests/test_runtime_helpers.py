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

    def test_transient_cooldown_tracker_matches_number_batch_logic(self) -> None:
        policy = runtime_helpers.TransientCooldownPolicy.from_mapping(
            {
                "cooldown_seconds": 0.1,
                "max_cooldowns": 1,
                "transient_failure_threshold": 2,
                "transient_failure_ratio": 0.5,
            },
            default_cooldown_seconds=5.0,
            default_max_cooldowns=3,
            default_transient_failure_threshold=20,
            default_transient_failure_ratio=0.35,
        )
        tracker = runtime_helpers.TransientCooldownTracker(policy)

        quiet = tracker.record_batch(1, 3)
        first = tracker.record_batch(2, 4)
        exhausted = tracker.record_batch(2, 4)

        self.assertFalse(quiet.should_cooldown)
        self.assertTrue(first.should_cooldown)
        self.assertFalse(first.exhausted)
        self.assertEqual(first.cooldowns_used, 1)
        self.assertTrue(exhausted.should_cooldown)
        self.assertTrue(exhausted.exhausted)

    def test_transient_cooldown_tracker_accumulates_sequential_attempts(self) -> None:
        policy = runtime_helpers.TransientCooldownPolicy.from_mapping(
            {"max_cooldowns": 2, "transient_failure_threshold": 3, "transient_failure_ratio": 0.5},
            default_cooldown_seconds=5.0,
            default_max_cooldowns=3,
            default_transient_failure_threshold=20,
            default_transient_failure_ratio=0.35,
        )
        tracker = runtime_helpers.TransientCooldownTracker(policy)

        self.assertFalse(tracker.record_attempt(True).should_cooldown)
        self.assertFalse(tracker.record_attempt(True).should_cooldown)
        cooldown = tracker.record_attempt(True)
        tracker.record_attempt(False)

        self.assertTrue(cooldown.should_cooldown)
        self.assertFalse(cooldown.exhausted)
        self.assertEqual(cooldown.transient_count, 3)
        self.assertFalse(tracker.record_attempt(True).should_cooldown)

    def test_payload_excerpt_truncates_and_serializes(self) -> None:
        self.assertIsNone(runtime_helpers.make_payload_excerpt(None))
        self.assertEqual(runtime_helpers.make_payload_excerpt({"a": 1}), json.dumps({"a": 1}, ensure_ascii=False))
        self.assertEqual(runtime_helpers.make_payload_excerpt("abcdef", limit=3), "abc...(truncated)")

    def test_monitor_status_line_includes_teacher_state(self) -> None:
        now = runtime_helpers.datetime(2026, 1, 2, 14, 3, 27)

        ready = runtime_helpers.build_monitor_status_line(
            {"phase": "monitoring", "check_count": 1, "detail": "目前無點名", "teacher_state": "ready"},
            now,
        )
        failed = runtime_helpers.build_monitor_status_line(
            {"phase": "monitoring", "check_count": 1, "detail": "目前無點名", "teacher_state": "failed"},
            now,
        )
        working = runtime_helpers.build_monitor_status_line(
            {"phase": "monitoring", "check_count": 1, "detail": "目前無點名", "teacher_state": "working"},
            now,
        )

        self.assertIn("QR教師✓", ready)
        self.assertIn("QR教師✗", failed)
        self.assertIn("QR教師發起中", working)

    def test_monitor_status_line_prepends_target_label_when_present(self) -> None:
        now = runtime_helpers.datetime(2026, 1, 2, 14, 3, 27)

        labelled = runtime_helpers.build_monitor_status_line(
            {"phase": "monitoring", "check_count": 1, "detail": "目前無點名", "target_label": "群組A"},
            now,
        )
        self.assertEqual(labelled, "群組A · 監控中 · 第 1 次 · 目前無點名")

        # Absent/blank target_label must not add a segment (back-compat).
        self.assertEqual(
            runtime_helpers.build_monitor_status_line(
                {"phase": "monitoring", "check_count": 1, "detail": "目前無點名"},
                now,
            ),
            "監控中 · 第 1 次 · 目前無點名",
        )
        self.assertEqual(
            runtime_helpers.build_monitor_status_line(
                {"phase": "monitoring", "check_count": 1, "detail": "目前無點名", "target_label": ""},
                now,
            ),
            "監控中 · 第 1 次 · 目前無點名",
        )

    def test_rollcall_start_message_indents_multiline_detail(self) -> None:
        text = runtime_helpers.format_rollcall_start_message(
            "number",
            42,
            detail="簽到率已達 15.0% 門檻：點名 #42 簽到率 15.0%（3/20），啟動數字點名流程。\n正在嘗試直接讀碼。",
        )

        self.assertEqual(
            text.splitlines(),
            [
                "start number",
                "  id:42",
                "  簽到率已達 15.0% 門檻：點名 #42 簽到率 15.0%（3/20），啟動數字點名流程。",
                "  正在嘗試直接讀碼。",
            ],
        )

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

    def test_radar_answer_parser_marks_present_hint_without_success(self) -> None:
        scoped_present = runtime_helpers.parse_radar_answer_result(
            400,
            json.dumps(
                {
                    "error_code": "radar_out_of_rollcall_scope",
                    "distance": 42.5,
                    "status_name": "on_call_fine",
                }
            ),
        )
        nested_present = runtime_helpers.parse_radar_answer_result(
            400,
            json.dumps(
                {
                    "data": {
                        "distanceMeters": "18.0",
                        "error": {"code": "radar_out_of_rollcall_scope"},
                        "student_rollcalls": [
                            {"rollcall_status": "on_call"},
                            {"rollcall_status": "on_call_fine"},
                        ],
                    }
                }
            ),
        )

        self.assertFalse(scoped_present.success)
        self.assertTrue(scoped_present.is_scope_distance)
        self.assertEqual(scoped_present.distance, 42.5)
        self.assertTrue(scoped_present.present_hint)
        self.assertEqual(scoped_present.present_status, "on_call_fine")
        self.assertFalse(nested_present.success)
        self.assertTrue(nested_present.is_scope_distance)
        self.assertTrue(nested_present.present_hint)
        self.assertEqual(nested_present.present_status, "on_call_fine")

    def test_number_display_helpers_match_expected_shape(self) -> None:
        banner = runtime_helpers.format_found_code_banner("0427")
        self.assertIn("Code: 0427", banner)
        self.assertIn("找到點名數字！", banner)

        started_at = time.perf_counter() - 1.25
        progress = runtime_helpers.build_number_progress_message(77, 123, "0123", started_at)
        self.assertIn("數字點名 #77", progress)
        self.assertIn("已送出 123/10000", progress)
        self.assertIn("最近代碼 0123", progress)

    def test_rollcall_success_banner_supports_number_radar_and_qr(self) -> None:
        number_banner = runtime_helpers.format_rollcall_success_banner(
            "number",
            42,
            method="number",
            detail="找到點名數字",
            code="0427",
            attendance_rate="15.0% (3/20)",
        )
        radar_banner = runtime_helpers.format_rollcall_success_banner(
            "radar",
            30017,
            method="global_wgs84",
            detail="estimate-standard-ring-1",
        )
        qr_banner = runtime_helpers.format_rollcall_success_banner(
            "qrcode",
            30053,
            method="qrcode",
            detail="submitted",
        )

        self.assertIn("數字點名成功！", number_banner)
        self.assertIn("Code: 0427", number_banner)
        self.assertIn("Rate: 15.0% (3/20)", number_banner)
        self.assertIn("Rollcall: 42", number_banner)
        self.assertIn("雷達點名成功！", radar_banner)
        self.assertIn("Hit: estimate-standard-ring-1", radar_banner)
        self.assertIn("QR Code 點名成功！", qr_banner)
        self.assertIn("Result: submitted", qr_banner)

    def test_success_banner_attendance_rate_formats_progress(self) -> None:
        rate = runtime_helpers.format_success_banner_attendance_rate(
            {
                "ok": True,
                "progress": {
                    "ok": True,
                    "total": 84,
                    "present": 41,
                    "present_rate_known": True,
                    "present_rate_percent": 48.809,
                },
            }
        )
        unknown = runtime_helpers.format_success_banner_attendance_rate(
            {"ok": True, "total": 0, "present": 0, "present_rate_known": False}
        )

        self.assertEqual(rate, "48.8% (41/84)")
        self.assertEqual(unknown, "")

    def test_monitor_status_helpers_match_expected_shape(self) -> None:
        now = runtime_helpers.datetime(2026, 1, 2, 14, 3, 27)
        standby_next = runtime_helpers.datetime(2026, 1, 2, 19, 0, 0)
        monitoring_next = runtime_helpers.datetime(2026, 1, 2, 18, 0, 0)

        self.assertEqual(runtime_helpers.format_countdown(3661), "01:01:01")
        self.assertEqual(runtime_helpers.format_countdown("bad"), "00:00:00")
        self.assertEqual(
            runtime_helpers.build_monitor_status_line(
                {
                    "phase": "monitoring",
                    "check_count": 42,
                    "detail": "目前無點名",
                    "next_switch_at": monitoring_next,
                },
                now,
            ),
            "監控中 · 第 42 次 · 目前無點名",
        )
        self.assertEqual(
            runtime_helpers.build_monitor_status_line(
                {"phase": "standby", "next_switch_at": standby_next},
                now,
            ),
            "待機中 · 倒數 04:56:33 · 14:03:27 · 19:00 開始監控",
        )
        self.assertEqual(
            runtime_helpers.build_monitor_status_line(
                {"phase": "monitoring", "check_count": 5, "detail": "目前無點名"},
                now,
            ),
            "監控中 · 第 5 次 · 目前無點名",
        )
        self.assertEqual(
            runtime_helpers.build_monitor_status_line(
                {
                    "phase": "monitoring",
                    "check_count": 247,
                    "detail": "點名 #30055 進度：已簽到 1/1 人",
                    "rollcall_status": "on_call_fine",
                    "teacher_state": "ready",
                },
                now,
            ),
            "監控中 · 第 247 次 · 點名 #30055 進度：已簽到 1/1 人 · on_call_fine · QR教師✓",
        )
        self.assertEqual(
            runtime_helpers.build_monitor_status_line(
                {"phase": "logging_in", "detail": "正在登入…"},
                now,
            ),
            "登入中 · 正在登入… · 14:03:27",
        )

    def test_predict_schedule_change_finds_next_flip_or_none(self) -> None:
        start = runtime_helpers.datetime.strptime("08:00", "%H:%M").time()
        end = runtime_helpers.datetime.strptime("18:00", "%H:%M").time()
        now = runtime_helpers.datetime(2026, 1, 2, 17, 59, 27)

        def active_at(moment):
            return start <= moment.time() < end

        predicted = runtime_helpers.predict_schedule_change(now, active_at)

        self.assertIsNotNone(predicted)
        self.assertEqual(predicted[0], runtime_helpers.datetime(2026, 1, 2, 18, 0, 0))
        self.assertFalse(predicted[1])
        self.assertIsNone(runtime_helpers.predict_schedule_change(now, lambda _moment: True))

    def test_predict_schedule_change_keeps_inclusive_end_hint_on_boundary_minute(self) -> None:
        start = runtime_helpers.datetime.strptime("08:00", "%H:%M").time()
        end = runtime_helpers.datetime.strptime("18:00", "%H:%M").time()
        now = runtime_helpers.datetime(2026, 1, 2, 14, 3, 27)

        predicted = runtime_helpers.predict_schedule_change(
            now,
            lambda moment: runtime_helpers.is_within_schedule(start, end, moment.time()),
        )

        self.assertIsNotNone(predicted)
        self.assertEqual(runtime_helpers.format_hhmm(predicted[0]), "18:00")
        self.assertLessEqual(
            (predicted[0] - runtime_helpers.datetime(2026, 1, 2, 18, 0, 0)).total_seconds(),
            1,
        )
        self.assertFalse(predicted[1])

    def test_radar_success_banner_matches_expected_shape(self) -> None:
        banner = runtime_helpers.format_radar_success_banner(
            30017,
            "global_wgs84",
            "estimate-standard-ring-1",
        )
        fallback_banner = runtime_helpers.format_radar_success_banner("", "", "")

        self.assertIn("雷達點名成功！", banner)
        self.assertIn("Rollcall: 30017", banner)
        self.assertIn("Method: global_wgs84", banner)
        self.assertIn("Hit: estimate-standard-ring-1", banner)
        self.assertIn("Rollcall: unknown", fallback_banner)
        self.assertIn("Method: radar", fallback_banner)
        self.assertIn("Hit: success", fallback_banner)

    def test_radar_boundary_points_normalizes_or_falls_back(self) -> None:
        points = runtime_helpers.normalize_radar_boundary_points(
            [{"lat": "24.1", "lng": "120.1"}, [24.2, 120.2], (24.3, 120.3)]
        )
        self.assertEqual(points, [[24.1, 120.1], [24.2, 120.2], [24.3, 120.3]])

        fallback = runtime_helpers.normalize_radar_boundary_points([[24.1, 120.1]])
        self.assertGreaterEqual(len(fallback), 3)

import copy
import json
import unittest
from datetime import timedelta, time

from troTHU import tron


class TimezoneScheduleTest(unittest.TestCase):
    def setUp(self) -> None:
        self.original_config = copy.deepcopy(tron.CONFIG)

    def tearDown(self) -> None:
        tron.CONFIG.clear()
        tron.CONFIG.update(copy.deepcopy(self.original_config))

    def test_normalize_schedule_ranges_accepts_multiple_text_windows(self) -> None:
        ranges = tron.normalize_schedule_ranges("09:10-12:00, 13:10-17:20")

        self.assertEqual(ranges, [["09:10", "12:00"], ["13:10", "17:20"]])
        self.assertTrue(tron.is_within_any_schedule(ranges, time(13, 30)))
        self.assertFalse(tron.is_within_any_schedule(ranges, time(12, 30)))

    def test_simple_config_preserves_legacy_range_and_adds_ranges(self) -> None:
        parsed = tron.parse_basic_config_text(
            "[operating]\n"
            "day = 1\n"
            "enable = true\n"
            "times = 09:10-12:00, 13:10-17:20\n"
        )
        config = tron.normalize_config(tron.merge_basic_and_advanced_config(parsed, {}))

        self.assertEqual(config["operating"][0]["range"], ["09:10", "12:00"])
        self.assertEqual(config["operating"][0]["ranges"], [["09:10", "12:00"], ["13:10", "17:20"]])

    def test_config_timezone_uses_iana_zone_and_falls_back_safely(self) -> None:
        config = tron.normalize_config({"time": {"timezone": "UTC"}})
        tron.CONFIG.clear()
        tron.CONFIG.update(config)

        self.assertEqual(tron.get_config_timezone_name(), "UTC")
        self.assertEqual(tron.current_datetime().utcoffset(), timedelta(0))

        invalid = tron.normalize_config({"time": {"timezone": "Not/AZone"}})
        encoded = json.dumps({"config": invalid, "warnings": tron.CONFIG_WARNINGS}, ensure_ascii=False)
        self.assertEqual(invalid["time"]["timezone"], "Asia/Taipei")
        self.assertIn("time.timezone", encoded)


if __name__ == "__main__":
    unittest.main()

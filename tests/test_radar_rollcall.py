import json
import unittest

from troTHU import radar_rollcall, runtime_helpers
from troTHU.radar_solver import GeoPoint


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

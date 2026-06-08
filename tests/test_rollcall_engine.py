import unittest

from troTHU import tron
from troTHU.rollcall_engine import classify_rollcall, decide_rollcall, select_rollcall
from troTHU.rollcall_models import AttendanceType, RollcallAction


class RollcallEngineTest(unittest.TestCase):
    def test_classify_qr_and_unknown_rollcalls(self) -> None:
        self.assertEqual(
            classify_rollcall({"is_qrcode": True, "rollcall_id": 1}),
            ("unsupported_qrcode", "qrcode", "偵測到 QR Code 點名，請貼上 QR 內容後手動送出。"),
        )
        self.assertEqual(
            classify_rollcall({"foo": "bar"}),
            ("unsupported_rollcall", "unknown", "偵測到未支援的點名類型"),
        )

    def test_decide_rollcall_prefers_number_then_radar_then_qr(self) -> None:
        number = {"is_number": True, "rollcall_id": 42}
        decision = decide_rollcall([{"is_qrcode": True, "rollcall_id": 9}, number])

        self.assertEqual(decision.status, "is_number")
        self.assertEqual(decision.action, RollcallAction.ANSWER_NUMBER)
        self.assertEqual(decision.attendance_type, AttendanceType.NUMBER)
        self.assertIs(decision.rollcall, number)

        radar = {"type": "radar", "rollcall_id": 43}
        radar_decision = decide_rollcall([radar])

        self.assertEqual(radar_decision.status, "is_radar")
        self.assertEqual(radar_decision.action, RollcallAction.ANSWER_RADAR)

    def test_decide_rollcall_handles_qr_unknown_fine_and_empty(self) -> None:
        qr_decision = decide_rollcall([{"type": "qrcode", "rollcall_id": 88}])
        unknown_decision = decide_rollcall([{"foo": "bar"}])
        fine_decision = decide_rollcall([{"status": "on_call_fine", "rollcall_id": 11}])
        empty_decision = decide_rollcall([])

        self.assertEqual(qr_decision.action, RollcallAction.REQUEST_QR_PAYLOAD)
        self.assertEqual(qr_decision.attendance_type, AttendanceType.QRCODE)
        self.assertEqual(unknown_decision.action, RollcallAction.REPORT_UNSUPPORTED)
        self.assertEqual(fine_decision.status, "on_call_fine")
        self.assertEqual(fine_decision.rollcall, {"status": "on_call_fine", "rollcall_id": 11})
        self.assertEqual(empty_decision.status, "not_call")

    def test_select_rollcall_and_tron_wrappers_match_engine(self) -> None:
        rollcalls = [{"is_qrcode": True, "rollcall_id": 88}]

        self.assertEqual(select_rollcall(rollcalls), tron.select_rollcall(rollcalls))
        self.assertEqual(decide_rollcall(rollcalls), tron.decide_rollcall(rollcalls))
        self.assertEqual(classify_rollcall(rollcalls[0]), tron.classify_rollcall(rollcalls[0]))

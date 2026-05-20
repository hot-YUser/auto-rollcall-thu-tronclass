import unittest

from troTHU.rollcall_models import (
    AdapterTarget,
    AttendanceType,
    NotificationEventType,
    OutboundEvent,
    RollcallBatchSummary,
    RollcallOutcome,
)


class RollcallModelTest(unittest.TestCase):
    def test_outbound_event_converts_to_legacy_notification_event(self) -> None:
        event = OutboundEvent(
            event_type=NotificationEventType.QR_PAYLOAD_REQUESTED,
            target=AdapterTarget("discord", "user-1", profile="default"),
            title="QR needed",
            body="rollcall requires a scanned payload",
            rollcall_id=88,
            attendance_type=AttendanceType.QRCODE,
        )

        notification = event.to_notification()

        self.assertEqual(notification.event, "qr_payload_requested")
        self.assertIn("rollcall_id: 88", notification.render())
        self.assertEqual(event.target.key(), "discord:user-1:default:")

    def test_batch_summary_counts_successes_and_failures(self) -> None:
        summary = RollcallBatchSummary.from_iterable(
            [
                RollcallOutcome(status="ok", success=True),
                RollcallOutcome(status="failed", success=False),
                RollcallOutcome(status="skipped", success=False),
            ]
        )

        self.assertEqual(summary.total, 3)
        self.assertEqual(summary.successes, 1)
        self.assertEqual(summary.failures, 2)

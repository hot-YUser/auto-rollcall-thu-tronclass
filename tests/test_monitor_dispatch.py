from __future__ import annotations

import asyncio
import unittest
from unittest.mock import patch

import troTHU.runtime_context as ctx
from troTHU import monitor_runtime


class RollcallDispatchTest(unittest.IsolatedAsyncioTestCase):
    def setUp(self):
        monitor_runtime._INFLIGHT_ROLLCALLS.clear()

    async def test_dispatch_dedups_by_id_and_never_blocks(self):
        # A hung handler keeps the in-flight entry; a 2nd dispatch of the same id is a no-op, and the
        # dispatch call itself returns immediately (it never awaits the handler).
        gate = asyncio.Event()

        async def hung_handler(*a, **k):
            await gate.wait()

        with patch.object(monitor_runtime, "handle_rollcall", hung_handler):
            poll = {"status": "is_number", "rollcall": {"rollcall_id": "R1"}}
            se = asyncio.Event()
            monitor_runtime._dispatch_rollcall(object(), poll, "R1", "number", None, se)
            monitor_runtime._dispatch_rollcall(object(), poll, "R1", "number", None, se)  # duplicate
            await asyncio.sleep(0)
            try:
                # provider:profile:rid scoping — bare R1 becomes ?:default:R1 when no provider/profile given
                self.assertEqual(list(monitor_runtime._INFLIGHT_ROLLCALLS), [monitor_runtime._inflight_key("R1")])  # exactly one task
            finally:
                gate.set()
                tasks = list(monitor_runtime._INFLIGHT_ROLLCALLS.values())
                for t in tasks:
                    t.cancel()
                await asyncio.gather(*tasks, return_exceptions=True)

    async def test_handle_rollcall_submits_on_gate_then_cleans_up_on_close(self):
        submits = []
        # The handler re-polls: first re-poll still active, second re-poll closed (not_call).
        polls = [
            {"status": "is_number", "rollcall": {"rollcall_id": "R2"}},
            {"status": "not_call"},
        ]

        async def fake_poll(session, cnt):
            return polls.pop(0) if polls else {"status": "not_call"}

        async def fake_progress(session, rid, **_kw):
            return {"ok": True, "present_rate_known": True, "present_rate_percent": 99.0,
                    "attendance_rate_text": "99%"}

        async def fake_decision(session, poll, *, cnt=-1, use_prepared_qr=False, gate_detail="", **_kw):
            submits.append(poll.get("status"))
            return "is_number"

        async def fake_final(*a, **k):
            return None

        async def fake_sleep(se, seconds):
            return None

        with patch.object(ctx, "poll_rollcall_decision", fake_poll), \
                patch.object(ctx, "handle_rollcall_decision", fake_decision), \
                patch.object(monitor_runtime, "_fetch_monitor_rollcall_progress", fake_progress), \
                patch.object(monitor_runtime, "_log_final_attendance_rate_on_close", fake_final), \
                patch.object(monitor_runtime, "sleep_or_shutdown", fake_sleep):
            initial = {"status": "is_number", "rollcall": {"rollcall_id": "R2"}, "url": "", "message": ""}
            await asyncio.wait_for(
                monitor_runtime.handle_rollcall(object(), initial, "R2", "number",
                                                ignore_attendance_rate_gate=None, shutdown_event=asyncio.Event()),
                timeout=5)
        self.assertEqual(submits, ["is_number"])                      # submitted exactly once (gate passed)
        self.assertNotIn(monitor_runtime._inflight_key("R2"), monitor_runtime._INFLIGHT_ROLLCALLS)   # cleaned up on close


if __name__ == "__main__":
    unittest.main()

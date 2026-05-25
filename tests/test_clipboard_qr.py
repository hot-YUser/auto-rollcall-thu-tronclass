import tempfile
import unittest
from pathlib import Path
from types import SimpleNamespace
from unittest.mock import AsyncMock, patch

from troTHU import tron
import troTHU.rollcall_runtime as rollcall_runtime
from troTHU.clipboard_qr import looks_like_qr_payload, read_clipboard_qr_payload


SAMPLE_PAYLOAD = "/j?p=0~3kpc!3~1776047549bca3f13fa87900ab6dab90f500aa1ffe!4~7v6l"


class ClipboardQrUnitTest(unittest.TestCase):
    def test_looks_like_qr_payload(self) -> None:
        self.assertTrue(looks_like_qr_payload(SAMPLE_PAYLOAD))
        self.assertTrue(looks_like_qr_payload('{"rollcallId":1,"data":"x"}'))
        self.assertFalse(looks_like_qr_payload("just some text"))
        self.assertFalse(looks_like_qr_payload(""))

    def test_read_text_payload(self) -> None:
        result = read_clipboard_qr_payload(image_reader=lambda: None, text_reader=lambda: SAMPLE_PAYLOAD)
        self.assertTrue(result["ok"])
        self.assertEqual(result["source"], "text")
        self.assertTrue(result["content_hash"])

    def test_read_image_payload_with_injected_decoder(self) -> None:
        with tempfile.NamedTemporaryFile(suffix=".png", delete=False) as handle:
            handle.write(b"placeholder")
            image_path = Path(handle.name)
        try:
            result = read_clipboard_qr_payload(image_reader=lambda: image_path, decoder=lambda _p: SAMPLE_PAYLOAD)
            self.assertTrue(result["ok"])
            self.assertEqual(result["source"], "image")
        finally:
            image_path.unlink(missing_ok=True)

    def test_no_qr_in_clipboard(self) -> None:
        result = read_clipboard_qr_payload(image_reader=lambda: None, text_reader=lambda: "not a qr")
        self.assertFalse(result["ok"])


class ClipboardAutosubmitTest(unittest.IsolatedAsyncioTestCase):
    def setUp(self) -> None:
        rollcall_runtime._LAST_CLIPBOARD_QR_HASH = ""

    async def test_matches_rollcall_and_submits(self) -> None:
        submit = AsyncMock(return_value=True)
        with (
            patch.object(tron, "read_clipboard_qr_payload", return_value={"ok": True, "payload": "P", "content_hash": "h1", "source": "image"}),
            patch.object(tron, "parse_qr_payload", return_value=SimpleNamespace(rollcall_id="382575")),
            patch.object(tron, "submit_qr_payload", submit),
            patch.object(tron, "log_print"),
            patch.object(tron, "log"),
        ):
            ok = await tron.try_clipboard_qr_autosubmit(object(), {"rollcall_id": 382575})
        self.assertTrue(ok)
        submit.assert_awaited_once()

    async def test_skips_mismatched_rollcall(self) -> None:
        submit = AsyncMock(return_value=True)
        with (
            patch.object(tron, "read_clipboard_qr_payload", return_value={"ok": True, "payload": "P", "content_hash": "h2", "source": "image"}),
            patch.object(tron, "parse_qr_payload", return_value=SimpleNamespace(rollcall_id="999")),
            patch.object(tron, "submit_qr_payload", submit),
            patch.object(tron, "log_print"),
            patch.object(tron, "log"),
        ):
            ok = await tron.try_clipboard_qr_autosubmit(object(), {"rollcall_id": 382575})
        self.assertFalse(ok)
        submit.assert_not_awaited()

    async def test_dedups_same_clipboard_content(self) -> None:
        submit = AsyncMock(return_value=True)
        with (
            patch.object(tron, "read_clipboard_qr_payload", return_value={"ok": True, "payload": "P", "content_hash": "h3", "source": "image"}),
            patch.object(tron, "parse_qr_payload", return_value=SimpleNamespace(rollcall_id="382575")),
            patch.object(tron, "submit_qr_payload", submit),
            patch.object(tron, "log_print"),
            patch.object(tron, "log"),
        ):
            first = await tron.try_clipboard_qr_autosubmit(object(), {"rollcall_id": 382575})
            second = await tron.try_clipboard_qr_autosubmit(object(), {"rollcall_id": 382575})
        self.assertTrue(first)
        self.assertFalse(second)
        submit.assert_awaited_once()


if __name__ == "__main__":
    unittest.main()

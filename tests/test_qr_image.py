import json
import tempfile
import unittest
from pathlib import Path
from unittest.mock import AsyncMock, patch

from troTHU import tron


class QrImageDecodeTest(unittest.TestCase):
    def test_decode_qr_image_file_uses_optional_decoder_and_redacts_payload_report(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            image_path = Path(temp_dir) / "qr.png"
            image_path.write_bytes(b"not really an image; decoder is injected")
            result = tron.decode_qr_image_file(
                image_path,
                decoder=lambda _path: json.dumps({"rollcallId": 88, "data": "image-secret"}),
            )
            safe = tron.safe_qr_image_decode_report(result)

        self.assertTrue(result["ok"])
        self.assertEqual(result["decoder"], "injected")
        self.assertIn("payload", result)
        self.assertNotIn("payload", safe)
        self.assertEqual(safe["payload_length"], len(result["payload"]))
        self.assertNotIn("image-secret", json.dumps(safe, ensure_ascii=False))

    def test_decode_qr_image_file_reports_missing_path(self) -> None:
        result = tron.decode_qr_image_file(Path("missing-qr-image.png"))

        self.assertFalse(result["ok"])
        self.assertEqual(result["status"], "image_not_found")

    def test_qr_image_command_previews_without_echoing_raw_payload(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            image_path = Path(temp_dir) / "qr.png"
            image_path.write_bytes(b"x")
            outputs = []
            with (
                patch.object(
                    tron,
                    "decode_qr_image_file",
                    return_value={
                        "ok": True,
                        "status": "decoded",
                        "path": str(image_path),
                        "decoder": "test",
                        "payload": json.dumps({"rollcallId": 88, "data": "command-secret"}),
                        "payload_hash": "abc",
                        "payload_length": 99,
                    },
                ),
                patch.object(tron, "qr_command", new=AsyncMock(return_value=0)),
                patch("builtins.print", side_effect=outputs.append),
            ):
                result = tron.asyncio.run(tron.qr_image_command(image_path, assume_yes=True, json_output=True))

        self.assertEqual(result, 0)
        rendered = "\n".join(outputs)
        self.assertIn('"image"', rendered)
        self.assertNotIn("command-secret", rendered)


if __name__ == "__main__":
    unittest.main()

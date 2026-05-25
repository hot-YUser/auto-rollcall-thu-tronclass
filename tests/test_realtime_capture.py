import json
import tempfile
import unittest
from pathlib import Path

import aiohttp

from troTHU.realtime_capture import (
    _header_get,
    build_pubsub_ws_url,
    capture_realtime,
    extract_notification_host,
    extract_notification_host_from_html,
    extract_user_id,
    extract_user_id_from_session_id,
    realtime_capture_enabled,
)
from tests.fake_tron_server import FakeTronServer


class RealtimeCaptureUnitTest(unittest.TestCase):
    def test_extract_notification_host_prefers_hinted_keys(self) -> None:
        self.assertEqual(
            extract_notification_host({"id": 1, "notification_url": "https://ntf.example"}),
            "https://ntf.example",
        )
        self.assertEqual(
            extract_notification_host({"cfg": {"pubsub_endpoint": "https://p.example"}}),
            "https://p.example",
        )
        self.assertEqual(extract_notification_host({"id": 1}), "")

    def test_extract_user_id_handles_nesting(self) -> None:
        self.assertEqual(extract_user_id({"id": 238730}), "238730")
        self.assertEqual(extract_user_id({"user": {"user_no": "x9"}}), "x9")
        self.assertEqual(extract_user_id({}), "")

    def test_build_pubsub_ws_url_scheme_and_session(self) -> None:
        url = build_pubsub_ws_url("https://ntf.example", "238730", "sid-1")
        self.assertTrue(url.startswith("wss://ntf.example/pubsub/238730?"))
        self.assertIn("X-SESSION-ID=sid-1", url)
        self.assertIn("X-Atmosphere-Transport=websocket", url)
        http_url = build_pubsub_ws_url("http://ntf.example", "5", "")
        self.assertTrue(http_url.startswith("ws://ntf.example/pubsub/5?"))
        self.assertNotIn("X-SESSION-ID", http_url)
        self.assertEqual(build_pubsub_ws_url("", "5", "s"), "")

    def test_realtime_capture_enabled_defaults_on(self) -> None:
        self.assertTrue(realtime_capture_enabled({}))
        self.assertFalse(realtime_capture_enabled({"capture": {"realtime_capture": False}}))

    def test_extract_user_id_from_session_id(self) -> None:
        # Real-shape session id: 2nd dot-segment is base64("238730").
        sid = "V2-1-c344ef5c-94f7-475b-9d9a-2d2b4e1c3905.MjM4NzMw.1779680060362.RHtzarW7nogOV4UNUpGVAr1VL9Y"
        self.assertEqual(extract_user_id_from_session_id(sid), "238730")
        self.assertEqual(extract_user_id_from_session_id(""), "")
        self.assertEqual(extract_user_id_from_session_id("no-dots"), "")

    def test_extract_notification_host_from_html(self) -> None:
        html = 'window.APPRuntime={"apiPrefix":{"ntf":"https://ntf.example","api":"https://x"}};'
        self.assertEqual(extract_notification_host_from_html(html), "https://ntf.example")
        self.assertEqual(extract_notification_host_from_html("<html></html>"), "")

    def test_header_get_is_case_insensitive(self) -> None:
        self.assertEqual(_header_get({"X-SESSION-ID": "abc"}, "x-session-id"), "abc")
        self.assertEqual(_header_get({}, "x-session-id"), "")


class RealtimeCaptureIntegrationTest(unittest.IsolatedAsyncioTestCase):
    async def test_capture_realtime_records_rest_and_ws_frame(self) -> None:
        async with FakeTronServer() as server:
            with tempfile.TemporaryDirectory() as tmp:
                async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                    await server.login_session(session)
                    summary = await capture_realtime(
                        session,
                        base_url=server.base_url,
                        session_id="sid-1",
                        org_id="1",
                        base_dir=Path(tmp),
                        profile="default",
                        provider="thu",
                        rollcall_id="42",
                        ws_seconds=2.0,
                    )

                self.assertEqual(summary["status"], "ok")
                self.assertTrue(summary["ntf_host_found"])
                self.assertTrue(summary["ws_connected"])
                self.assertGreaterEqual(summary["ws_frames"], 1)

                document = json.loads(Path(summary["output_path"]).read_text(encoding="utf-8"))
                blob = json.dumps(document, ensure_ascii=False)
                # The WS frame and the notifications REST body are recorded verbatim.
                self.assertIn("qr_rollcall_started", blob)
                self.assertEqual(document["rest_reads"]["users_me"]["status"], 200)
                self.assertEqual(document["discovered"]["user_id"], "238730")

    async def test_capture_realtime_disabled_writes_nothing(self) -> None:
        async with FakeTronServer() as server:
            with tempfile.TemporaryDirectory() as tmp:
                async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                    await server.login_session(session)
                    summary = await capture_realtime(
                        session,
                        base_url=server.base_url,
                        base_dir=Path(tmp),
                        config={"capture": {"realtime_capture": False}},
                    )
                self.assertEqual(summary["status"], "disabled")
                self.assertEqual(list(Path(tmp).glob("**/*.json")), [])


if __name__ == "__main__":
    unittest.main()

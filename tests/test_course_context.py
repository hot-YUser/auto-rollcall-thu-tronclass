from __future__ import annotations
import unittest

from troTHU import course_context
from troTHU.course_context import (
    PDF_MAX_BYTES,
    _get_bytes,
    _read_bounded_body,
    make_image_fetcher,
    make_tool_executor,
    material_tool_specs,
    pdf_to_text,
)


class _Resp:
    def __init__(self, status, data=b"", headers=None):
        self.status = status
        self._data = data
        self.headers = headers or {}

    async def __aenter__(self):
        return self

    async def __aexit__(self, *a):
        return False

    async def read(self):
        return self._data


class _Session:
    def __init__(self, get_map):
        self.get_map = get_map

    def get(self, url, **kw):
        for key, (data, mime) in self.get_map.items():
            if key in url:
                return _Resp(200, data, {"Content-Type": mime})
        return _Resp(404)


class FakeClient:
    def __init__(self, json_map, get_map=None, raise_on=None):
        self.json_map = json_map
        self.session = _Session(get_map or {})
        self.raise_on = raise_on

    def api_url(self, path):
        return "https://x" + path

    def request_kwargs(self):
        return {}

    async def request_json(self, method, url):
        if self.raise_on and self.raise_on in url:
            raise ValueError("boom")
        for key, val in self.json_map.items():  # specific keys must be listed first
            if key in url:
                return val
        return {}


class ToolSpecTest(unittest.TestCase):
    def test_single_search_tool(self):
        specs = material_tool_specs()
        self.assertEqual(len(specs), 1)
        fn = specs[0]["function"]
        self.assertEqual(fn["name"], "search_course_materials")
        self.assertIn("query", fn["parameters"]["required"])


class PdfTest(unittest.TestCase):
    def test_garbage_bytes_degrade_to_empty(self):
        self.assertEqual(pdf_to_text(b"this is not a pdf"), "")  # never raises


class _ChunkContent:
    """Deterministic aiohttp-shaped body: content.read(n) yields fixed pieces."""

    def __init__(self, pieces):
        self._pieces = [bytes(p) for p in pieces]
        self.read_calls = 0

    async def read(self, n):
        self.read_calls += 1
        if not self._pieces:
            return b""
        head = self._pieces[0]
        out, rest = head[:n], head[n:]
        if rest:
            self._pieces[0] = rest
        else:
            self._pieces.pop(0)
        return out


class _BoundedResp:
    def __init__(self, pieces, *, content_length=None, status=200, mime="application/pdf"):
        self.status = status
        self.headers = {"Content-Type": mime}
        self.content_length = content_length
        self.content = _ChunkContent(pieces)

    async def __aenter__(self):
        return self

    async def __aexit__(self, *a):
        return False


class _BoundedSession:
    def __init__(self, resp):
        self._resp = resp

    def get(self, url, **kw):
        return self._resp


class _BoundedClient:
    def __init__(self, resp):
        self.session = _BoundedSession(resp)

    def api_url(self, path):
        return "https://x" + path

    def request_kwargs(self):
        return {}


class BoundedPdfBodyTest(unittest.IsolatedAsyncioTestCase):
    async def test_small_body_passes_through(self):
        resp = _BoundedResp([b"a" * 100, b"b" * 50], content_length=150)
        self.assertEqual(await _read_bounded_body(resp, limit=PDF_MAX_BYTES), b"a" * 100 + b"b" * 50)

    async def test_declared_over_cap_fails_closed_without_reading(self):
        resp = _BoundedResp([b"x" * 10], content_length=PDF_MAX_BYTES + 1)
        self.assertIsNone(await _read_bounded_body(resp, limit=PDF_MAX_BYTES))
        self.assertEqual(resp.content.read_calls, 0)  # never buffered the body

    async def test_lying_declared_small_stream_cut_at_cap(self):
        # Declared 3 bytes, actual stream far larger: incremental read stops at the cap.
        big = [b"z" * 1024] * 40  # 40 KiB stream against a 4 KiB cap
        resp = _BoundedResp(big, content_length=3)
        self.assertIsNone(await _read_bounded_body(resp, limit=4096))
        # Incremental: stopped shortly past the cap, never consumed the whole stream.
        self.assertLess(resp.content.read_calls, 40)

    async def test_slow_progressing_valid_body_with_unknown_length(self):
        # content_length None (chunked/slow): many small pieces under the cap still finish.
        pieces = [b"p" * 100] * 20
        resp = _BoundedResp(pieces, content_length=None)
        self.assertEqual(await _read_bounded_body(resp, limit=PDF_MAX_BYTES), b"p" * 2000)

    async def test_get_bytes_enforces_cap_end_to_end(self):
        resp = _BoundedResp([b"y" * 8], content_length=PDF_MAX_BYTES + 100)
        data, _mime = await _get_bytes(_BoundedClient(resp), "/dl/big.pdf")
        self.assertIsNone(data)
        self.assertEqual(resp.content.read_calls, 0)

    async def test_get_bytes_keeps_valid_pdf_under_cap(self):
        body = b"%PDF-1.4 valid"
        resp = _BoundedResp([body], content_length=len(body))
        data, mime = await _get_bytes(_BoundedClient(resp), "/dl/ok.pdf")
        self.assertEqual(data, body)
        self.assertEqual(mime, "application/pdf")


class ExecutorTest(unittest.IsolatedAsyncioTestCase):
    async def test_list_materials_filters_to_material_types(self):
        client = FakeClient({"courses/55379/activities": {"activities": [
            {"id": "A1", "type": "material", "title": "講義一"},
            {"id": "A2", "type": "exam", "title": "考試"},
        ]}})
        out = await make_tool_executor(client, "55379")("list_course_materials", {})
        self.assertIn("id=A1", out)
        self.assertIn("講義一", out)
        self.assertNotIn("id=A2", out)

    async def test_read_material_text_and_attachment_name(self):
        client = FakeClient({
            "A1/upload_references": {"upload_references": [{"name": "slides.txt"}]},
            "/api/activities/A1": {"title": "講義一", "description": "<p>重點：光合作用</p>"},
        })
        out = await make_tool_executor(client, "55379")("read_material", {"activity_id": "A1"})
        self.assertIn("光合作用", out)
        self.assertIn("slides.txt", out)

    async def test_read_material_extracts_pdf_text(self):
        client = FakeClient(
            json_map={"A1/upload_references": {"upload_references": [{"name": "notes.pdf", "url": "/dl/1"}]},
                      "/api/activities/A1": {"title": "t", "description": ""}},
            get_map={"/dl/1": (b"%PDF-1.4 fake", "application/pdf")})
        orig = course_context.pdf_to_text
        course_context.pdf_to_text = lambda data, max_chars=8000: "PDF SAYS ANSWER IS B"
        try:
            out = await make_tool_executor(client, "55379")("read_material", {"activity_id": "A1"})
        finally:
            course_context.pdf_to_text = orig
        self.assertIn("PDF SAYS ANSWER IS B", out)

    async def test_search_materials_lists_reads_and_concatenates(self):
        # search = one round-trip: list course materials, pick by query, read their text.
        client = FakeClient({  # specific keys first (substring matcher)
            "A1/upload_references": {"upload_references": []},
            "/api/activities/A1": {"title": "光合作用講義", "description": "<p>產物是氧氣與葡萄糖</p>"},
            "courses/55379/activities": {"activities": [{"id": "A1", "type": "material", "title": "光合作用講義"}]},
        })
        out = await make_tool_executor(client, "55379")("search_course_materials", {"query": "光合作用"})
        self.assertIn("氧氣", out)

    async def test_search_no_materials_returns_note(self):
        client = FakeClient({"courses/55379/activities": {"activities": []}})
        out = await make_tool_executor(client, "55379")("search_course_materials", {"query": "x"})
        self.assertIn("沒有", out)

    async def test_unknown_tool(self):
        out = await make_tool_executor(FakeClient({}), "55379")("nope", {})
        self.assertIn("unknown tool", out)

    async def test_executor_never_raises(self):
        client = FakeClient({}, raise_on="activities")
        out = await make_tool_executor(client, "55379")("list_course_materials", {})
        self.assertIn("tool error", out)  # ValueError surfaced as a string, not raised

    async def test_image_fetcher_downloads_bytes(self):
        client = FakeClient({}, get_map={"/img/1": (b"PNGDATA", "image/png")})
        res = await make_image_fetcher(client)("https://x/img/1")
        self.assertEqual(res, (b"PNGDATA", "image/png"))


if __name__ == "__main__":
    unittest.main()

from __future__ import annotations
import unittest

from troTHU import course_context
from troTHU.course_context import make_image_fetcher, make_tool_executor, material_tool_specs, pdf_to_text


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

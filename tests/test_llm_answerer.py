from __future__ import annotations
import os
import unittest

from troTHU.llm_answerer import (
    build_question_text,
    build_user_content,
    complete,
    complete_with_tools,
    image_urls,
    resolve_api_key,
    strip_html,
    strip_think,
)
from troTHU.quiz_models import Option, Question, QuestionType


def _q(stem, opt_contents):
    return Question(
        subject_id=1,
        qtype=QuestionType.SINGLE,
        stem=stem,
        options=tuple(Option(id=10 + i, content=c) for i, c in enumerate(opt_contents)),
    )


class _Resp:
    def __init__(self, data):
        self._data = data

    async def __aenter__(self):
        return self

    async def __aexit__(self, *a):
        return False

    async def json(self):
        return self._data

    @property
    def status(self):
        return 200


class FakeSession:
    """Captures posted JSON bodies; returns canned chat responses in order."""

    def __init__(self, responses):
        self.responses = list(responses)
        self.posts = []

    def post(self, url, headers=None, json=None, **kwargs):
        self.posts.append(json)
        data = self.responses.pop(0) if self.responses else {"choices": [{"message": {"content": ""}}]}
        return _Resp(data)


def _msg(content=None, tool_calls=None):
    m = {"role": "assistant"}
    if content is not None:
        m["content"] = content
    if tool_calls is not None:
        m["tool_calls"] = tool_calls
    return {"choices": [{"message": m}]}


class StripHtmlTest(unittest.TestCase):
    def test_tags_removed_and_entities_unescaped(self):
        self.assertEqual(strip_html("<p>1 &lt; 2</p>"), "1 < 2")

    def test_image_src_extracted(self):
        out = strip_html('<p>see <img src="https://x/y.png"> here</p>')
        self.assertIn("see", out)
        self.assertIn("[image: https://x/y.png]", out)


class StripThinkTest(unittest.TestCase):
    def test_removes_think_block(self):
        self.assertEqual(strip_think("<think>long reasoning</think>B"), "B")

    def test_removes_mm_think_block(self):
        out = strip_think("pre <mm:think>r</mm:think> A,C")
        self.assertNotIn("<", out)
        self.assertIn("A,C", out)

    def test_unclosed_think_degrades_to_empty(self):
        # truncated mid-reasoning, no close tag, no finished answer -> empty (not partial reasoning)
        self.assertEqual(strip_think("<think>cut off reasoning B"), "")

    def test_plain_text_unchanged(self):
        self.assertEqual(strip_think("A"), "A")


class BuildContentTest(unittest.IsolatedAsyncioTestCase):
    def test_question_text_labels_options(self):
        text = build_question_text(_q("<p>1+1=?</p>", ["<p>2</p>", "<p>3</p>"]))
        self.assertIn("1+1=?", text)
        self.assertIn("A. 2", text)
        self.assertIn("B. 3", text)

    async def test_text_only_returns_string(self):
        self.assertIsInstance(await build_user_content(_q("1+1=?", ["2", "3"])), str)

    async def test_with_image_returns_multimodal_parts(self):
        q = _q('which? <img src="https://m/q.png">', ["2", "3"])
        content = await build_user_content(q)
        self.assertIsInstance(content, list)
        self.assertEqual(content[0]["type"], "text")
        self.assertTrue(any(p.get("type") == "image_url" for p in content))

    async def test_image_fetcher_embeds_base64(self):
        q = _q('which? <img src="https://m/q.png">', ["2", "3"])

        async def fetch(url):
            return (b"\x89PNGfake", "image/png")

        content = await build_user_content(q, fetch)
        img = next(p for p in content if p.get("type") == "image_url")
        self.assertTrue(img["image_url"]["url"].startswith("data:image/png;base64,"))

    def test_image_urls_collects_from_stem(self):
        q = _q('<img src="https://m/a.png">', ["x"])
        self.assertIn("https://m/a.png", image_urls(q))


class ApiKeyTest(unittest.TestCase):
    def test_reads_named_env_var(self):
        os.environ["TEST_NVKEY_XYZ"] = "nvapi-test"
        try:
            self.assertEqual(resolve_api_key({"api_key_env": "TEST_NVKEY_XYZ"}), "nvapi-test")
        finally:
            del os.environ["TEST_NVKEY_XYZ"]

    def test_missing_key_is_empty(self):
        self.assertEqual(resolve_api_key({"api_key_env": "DEFINITELY_UNSET_KEY_123"}), "")


class CompleteTest(unittest.IsolatedAsyncioTestCase):
    def setUp(self):
        os.environ["T_NV_KEY"] = "k"
        self.cfg = {"api_key_env": "T_NV_KEY"}

    def tearDown(self):
        os.environ.pop("T_NV_KEY", None)

    async def test_sends_thinking_mode_and_top_k_and_strips_think(self):
        session = FakeSession([{"choices": [{"message": {"content": "<think>reason</think>B"}}]}])
        out = await complete(session, [{"role": "user", "content": "x"}], self.cfg)
        self.assertEqual(out, "B")  # reasoning stripped, clean answer
        body = session.posts[0]
        self.assertEqual(body["chat_template_kwargs"]["thinking_mode"], "enabled")  # always-on default
        self.assertEqual(body["top_k"], 40)
        self.assertEqual(body["temperature"], 0.6)
        self.assertNotIn("max_tokens", body)  # unset by default -> deferred to the model

    async def test_max_tokens_sent_only_when_configured(self):
        session = FakeSession([{"choices": [{"message": {"content": "A"}}]}])
        await complete(session, [{"role": "user", "content": "x"}], dict(self.cfg, max_tokens=2048))
        self.assertEqual(session.posts[0]["max_tokens"], 2048)

    async def test_missing_key_returns_empty(self):
        out = await complete(FakeSession([]), [{"role": "user", "content": "x"}],
                             {"api_key_env": "UNSET_KEY_ABC"})
        self.assertEqual(out, "")


class ToolLoopTest(unittest.IsolatedAsyncioTestCase):
    def setUp(self):
        os.environ["T_NV_KEY2"] = "k"
        self.cfg = {"api_key_env": "T_NV_KEY2"}

    def tearDown(self):
        os.environ.pop("T_NV_KEY2", None)

    async def test_executes_tool_then_returns_final_answer(self):
        session = FakeSession([
            _msg("", [{"id": "c1", "type": "function",
                       "function": {"name": "read_material", "arguments": '{"activity_id": "5"}'}}]),
            _msg("A"),
        ])
        calls = []

        async def execute(name, args):
            calls.append((name, args))
            return "the handout says the answer is A"

        out = await complete_with_tools(
            session, [{"role": "user", "content": "x"}], self.cfg,
            tools=[{"type": "function", "function": {"name": "read_material", "parameters": {}}}],
            tool_executor=execute, max_iters=3)
        self.assertEqual(out, "A")
        self.assertEqual(calls, [("read_material", {"activity_id": "5"})])
        # the 2nd request must carry the tool result back to the model
        second = session.posts[1]
        self.assertTrue(any(m.get("role") == "tool" for m in second["messages"]))

    async def test_no_tool_calls_returns_content_immediately(self):
        session = FakeSession([_msg("C")])
        out = await complete_with_tools(
            session, [{"role": "user", "content": "x"}], self.cfg,
            tools=[{"type": "function", "function": {"name": "x", "parameters": {}}}],
            tool_executor=lambda n, a: None, max_iters=3)
        self.assertEqual(out, "C")
        self.assertEqual(len(session.posts), 1)


if __name__ == "__main__":
    unittest.main()

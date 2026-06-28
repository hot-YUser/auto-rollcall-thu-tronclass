from __future__ import annotations
import os
import unittest

from troTHU.llm_answerer import (
    build_question_text,
    build_user_content,
    image_urls,
    resolve_api_key,
    strip_html,
)
from troTHU.quiz_models import Option, Question, QuestionType


def _q(stem, opt_contents):
    return Question(
        subject_id=1,
        qtype=QuestionType.SINGLE,
        stem=stem,
        options=tuple(Option(id=10 + i, content=c) for i, c in enumerate(opt_contents)),
    )


class StripHtmlTest(unittest.TestCase):
    def test_tags_removed_and_entities_unescaped(self):
        self.assertEqual(strip_html("<p>1 &lt; 2</p>"), "1 < 2")

    def test_image_src_extracted(self):
        out = strip_html('<p>see <img src="https://x/y.png"> here</p>')
        self.assertIn("see", out)
        self.assertIn("[image: https://x/y.png]", out)


class BuildContentTest(unittest.TestCase):
    def test_question_text_labels_options(self):
        text = build_question_text(_q("<p>1+1=?</p>", ["<p>2</p>", "<p>3</p>"]))
        self.assertIn("1+1=?", text)
        self.assertIn("A. 2", text)
        self.assertIn("B. 3", text)

    def test_text_only_returns_string(self):
        self.assertIsInstance(build_user_content(_q("1+1=?", ["2", "3"])), str)

    def test_with_image_returns_multimodal_parts(self):
        q = _q('which? <img src="https://m/q.png">', ["2", "3"])
        content = build_user_content(q)
        self.assertIsInstance(content, list)
        self.assertEqual(content[0]["type"], "text")
        self.assertTrue(any(p.get("type") == "image_url" for p in content))

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


if __name__ == "__main__":
    unittest.main()

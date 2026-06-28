from __future__ import annotations
import unittest

from troTHU.quiz_engine import (
    answer_from_labels,
    answer_from_llm_reply,
    decide_paper,
    parse_choice_labels,
)
from troTHU.quiz_models import AnswerSource, Option, Question, QuestionType


def _single(subject_id, correct_index=None):
    options = tuple(
        Option(id=100 + i, content=str(i), is_answer=(i == correct_index) if correct_index is not None else None)
        for i in range(3)
    )
    return Question(subject_id=subject_id, qtype=QuestionType.SINGLE, stem="q?", options=options)


class DecidePaperTest(unittest.TestCase):
    def test_leaked_answer_is_replayed(self):
        plan = decide_paper([_single(1, correct_index=2)])
        self.assertEqual(plan.source, AnswerSource.REPLAY)
        self.assertEqual(plan.answers[0].answer_option_ids, (102,))
        self.assertEqual(plan.pending, ())

    def test_unscored_picks_default_without_llm(self):
        plan = decide_paper([_single(1)], scored=False)
        self.assertEqual(plan.source, AnswerSource.DEFAULT)
        self.assertEqual(plan.answers[0].answer_option_ids, (100,))
        self.assertEqual(plan.pending, ())

    def test_unscored_default_pick_last(self):
        plan = decide_paper([_single(1)], scored=False, default_pick="last")
        self.assertEqual(plan.answers[0].answer_option_ids, (102,))

    def test_scored_without_answer_goes_to_llm(self):
        plan = decide_paper([_single(1)], scored=True)
        self.assertEqual(plan.source, AnswerSource.LLM)
        self.assertEqual(plan.answers, ())
        self.assertEqual(len(plan.pending), 1)

    def test_mixed_paper_is_llm_when_any_pending(self):
        plan = decide_paper([_single(1, correct_index=0), _single(2)])
        self.assertEqual(plan.source, AnswerSource.LLM)
        self.assertEqual(len(plan.answers), 1)   # the leaked one is pre-filled
        self.assertEqual(len(plan.pending), 1)   # the other needs LLM


class LabelParsingTest(unittest.TestCase):
    def test_single_letter(self):
        self.assertEqual(parse_choice_labels("B", 3), ["B"])

    def test_letter_in_sentence(self):
        self.assertEqual(parse_choice_labels("The answer is C.", 3), ["C"])

    def test_multiple_letters_deduped_in_order(self):
        self.assertEqual(parse_choice_labels("A and C, also A", 4), ["A", "C"])

    def test_out_of_range_letters_ignored(self):
        self.assertEqual(parse_choice_labels("D", 3), [])   # only A,B,C valid

    def test_prose_words_do_not_leak(self):
        # "answer" must not contribute 'A'; only the isolated 'C' counts.
        self.assertEqual(parse_choice_labels("the answer is C", 4), ["C"])

    def test_compact_run_fallback(self):
        self.assertEqual(parse_choice_labels("AC", 4), ["A", "C"])

    def test_lowercase_single_fallback(self):
        self.assertEqual(parse_choice_labels("b", 3), ["B"])


class AnswerMappingTest(unittest.TestCase):
    def test_single_keeps_first_label_only(self):
        q = _single(1)
        ans = answer_from_labels(q, ["B", "C"])
        self.assertEqual(ans.answer_option_ids, (101,))

    def test_multiple_keeps_all_labels(self):
        opts = tuple(Option(id=200 + i) for i in range(4))
        q = Question(subject_id=9, qtype=QuestionType.MULTIPLE, options=opts)
        ans = answer_from_labels(q, ["A", "C"])
        self.assertEqual(ans.answer_option_ids, (200, 202))

    def test_llm_reply_selection_maps_to_option(self):
        ans = answer_from_llm_reply(_single(1), "I think B is correct")
        self.assertEqual(ans.answer_option_ids, (101,))

    def test_llm_reply_free_text_used_verbatim(self):
        q = Question(subject_id=1, qtype=QuestionType.SHORT_ANSWER)
        ans = answer_from_llm_reply(q, "  Paris  ")
        self.assertEqual(ans.answer_text, "Paris")
        self.assertEqual(ans.answer_option_ids, ())


if __name__ == "__main__":
    unittest.main()

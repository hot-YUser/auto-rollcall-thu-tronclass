from __future__ import annotations
import unittest

from troTHU.quiz_engine import (
    answer_from_labels,
    answer_from_llm_reply,
    decide_paper,
    format_answer_canonical,
    format_paper_canonical,
    parse_blank_answers,
    parse_choice_labels,
)
from troTHU.quiz_models import Answer, AnswerSource, Option, Question, QuestionType


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

    def test_no_leak_goes_to_llm(self):
        # default-pick removed (v1.7-beta.1): every non-leaked question — scored OR unscored
        # (questionnaire/vote) — goes to the LLM; we no longer blind-pick the first option.
        plan = decide_paper([_single(1)])
        self.assertEqual(plan.source, AnswerSource.LLM)
        self.assertEqual(plan.answers, ())
        self.assertEqual(len(plan.pending), 1)

    def test_mixed_paper_is_llm_when_any_pending(self):
        plan = decide_paper([_single(1, correct_index=0), _single(2)])
        self.assertEqual(plan.source, AnswerSource.LLM)
        self.assertEqual(len(plan.answers), 1)   # the leaked one is pre-filled
        self.assertEqual(len(plan.pending), 1)   # the other needs LLM


class BlankAndTextTest(unittest.TestCase):
    def test_fill_blank_leaked_texts_replayed_as_blanks(self):
        q = Question(subject_id=5, qtype=QuestionType.FILL_BLANK, blank_count=2,
                     correct_texts=("cat", "dog"))
        plan = decide_paper([q])
        self.assertEqual(plan.source, AnswerSource.REPLAY)
        self.assertEqual(plan.answers[0].blanks, ((0, "cat"), (1, "dog")))
        self.assertEqual(plan.answers[0].to_payload()["answers"],
                         [{"sort": 0, "content": "cat"}, {"sort": 1, "content": "dog"}])

    def test_short_answer_leaked_text_replayed(self):
        q = Question(subject_id=6, qtype=QuestionType.SHORT_ANSWER, correct_texts=("Paris",))
        plan = decide_paper([q])
        self.assertEqual(plan.source, AnswerSource.REPLAY)
        self.assertEqual(plan.answers[0].answer_text, "Paris")

    def test_fill_blank_scored_no_leak_goes_to_llm(self):
        q = Question(subject_id=7, qtype=QuestionType.FILL_BLANK, blank_count=2)
        plan = decide_paper([q])
        self.assertEqual(plan.source, AnswerSource.LLM)
        self.assertEqual(len(plan.pending), 1)

    def test_llm_reply_fill_blank_split_into_blanks(self):
        q = Question(subject_id=8, qtype=QuestionType.FILL_BLANK, blank_count=2)
        ans = answer_from_llm_reply(q, "cat ||| dog")
        self.assertEqual(ans.blanks, ((0, "cat"), (1, "dog")))

    def test_parse_blank_answers_pads_to_count(self):
        self.assertEqual(parse_blank_answers("only one", 2), ["only one", ""])
        self.assertEqual(parse_blank_answers("a ||| b ||| c", 2), ["a", "b"])


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


class MatchingParentIdTest(unittest.TestCase):
    def _matching_sub(self, subject_id, parent_id, correct_index):
        opts = tuple(Option(id=10 + i, content=str(i), is_answer=(i == correct_index)) for i in range(2))
        return Question(subject_id=subject_id, qtype=QuestionType.SINGLE, options=opts,
                        parent_id=parent_id)

    def test_replay_carries_parent_id_into_payload(self):
        plan = decide_paper([self._matching_sub(21, parent_id=1, correct_index=0)])
        payload = plan.answers[0].to_payload()
        self.assertEqual(payload["answer_option_ids"], [10])
        self.assertEqual(payload["parent_id"], 1)   # links the pair for scoring

    def test_llm_match_carries_parent_id(self):
        ans = answer_from_llm_reply(self._matching_sub(22, parent_id=1, correct_index=None), "B")
        self.assertEqual(ans.parent_id, 1)
        self.assertEqual(ans.to_payload()["parent_id"], 1)

    def test_non_matching_payload_omits_parent_id(self):
        # Regression guard: the 9 validated types must keep byte-identical payloads.
        ans = answer_from_labels(_single(1), ["A"])
        self.assertNotIn("parent_id", ans.to_payload())


class CanonicalRenderTest(unittest.TestCase):
    def _opts(self, *contents):
        return tuple(Option(id=10 + i, content=c) for i, c in enumerate(contents))

    def test_single_renders_letter(self):
        q = Question(subject_id=1, qtype=QuestionType.SINGLE, options=self._opts("a", "b", "c"))
        self.assertEqual(format_answer_canonical(q, Answer(1, (11,))), "B")

    def test_multiple_renders_letters(self):
        q = Question(subject_id=2, qtype=QuestionType.MULTIPLE, options=self._opts("a", "b", "c"))
        self.assertEqual(format_answer_canonical(q, Answer(2, (10, 12))), "A,C")

    def test_fill_renders_blanks_joined(self):
        q = Question(subject_id=3, qtype=QuestionType.FILL_BLANK, blank_count=2)
        self.assertEqual(format_answer_canonical(q, Answer(3, blanks=((0, "藍"), (1, "綠")))), "藍 ||| 綠")

    def test_short_renders_text(self):
        q = Question(subject_id=4, qtype=QuestionType.SHORT_ANSWER)
        self.assertEqual(format_answer_canonical(q, Answer(4, answer_text="巴黎")), "巴黎")

    def test_display_strips_html_markup_but_submit_keeps_it(self):
        # TronClass stores/compares fill/short answers WITH markup, so the submitted Answer keeps
        # '<p>..</p>' verbatim (scores) — only the console display strips it for readability.
        qf = Question(subject_id=3, qtype=QuestionType.FILL_BLANK, blank_count=1)
        self.assertEqual(format_answer_canonical(qf, Answer(3, blanks=((0, "<p>巴黎</p>"),))), "巴黎")
        qs = Question(subject_id=4, qtype=QuestionType.SHORT_ANSWER)
        self.assertEqual(format_answer_canonical(qs, Answer(4, answer_text="<p>答案&amp;</p>")), "答案&")

    def test_paper_groups_by_question_type(self):
        # Different types -> one line each, labelled + numbered by paper position.
        q1 = Question(subject_id=1, qtype=QuestionType.SINGLE, options=self._opts("a", "b"))
        q2 = Question(subject_id=2, qtype=QuestionType.SHORT_ANSWER)
        out = format_paper_canonical([q1, q2], [Answer(1, (11,)), Answer(2, answer_text="x")])
        self.assertEqual(out, "單選：1. B\n簡答：2. x")

    def test_paper_collapses_same_type_onto_one_line(self):
        # Many questions of the SAME type collapse to a single line (anti-wall-of-text).
        q1 = Question(subject_id=1, qtype=QuestionType.SINGLE, options=self._opts("a", "b"))
        q2 = Question(subject_id=2, qtype=QuestionType.SINGLE, options=self._opts("a", "b"))
        out = format_paper_canonical([q1, q2], [Answer(1, (11,)), Answer(2, (10,))])
        self.assertEqual(out, "單選：1. B  2. A")


if __name__ == "__main__":
    unittest.main()

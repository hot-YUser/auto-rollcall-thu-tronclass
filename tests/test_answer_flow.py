from __future__ import annotations
import unittest

from troTHU import answer_flow, llm_answerer
from troTHU.quiz_models import Activity, ActivityType, Answer, Option, Question, QuestionType


class FakeClient:
    """Records request_json calls and returns canned responses keyed by URL substring."""

    def __init__(self, responses=None):
        self.responses = responses or {}
        self.calls = []

    def api_url(self, path):
        return "https://x" + path

    async def request_json(self, method, url, *, json_payload=None, params=None, expected_status=(200,)):
        self.calls.append((method, url, json_payload))
        for key, resp in self.responses.items():
            if key in url:
                return resp
        return {}


def _act(atype, aid="9", **kw):
    return Activity(activity_id=aid, activity_type=atype, course_id="55379", **kw)


_PAPER = {
    "exam_paper_instance_id": 777,
    "subjects": [{
        "id": 1001, "type": "single_selection", "description": "<p>1+1?</p>",
        "options": [{"id": 11, "content": "2"}, {"id": 12, "content": "3"}],
    }],
}


class ParseTest(unittest.TestCase):
    def test_parse_question_options_and_is_answer(self):
        q = answer_flow.parse_question({
            "id": 5, "type": "multiple_selection", "description": "pick",
            "options": [{"id": 1, "content": "a", "is_answer": True},
                        {"id": 2, "content": "b", "is_answer": False}],
        })
        self.assertEqual(q.subject_id, 5)
        self.assertEqual(q.qtype, QuestionType.MULTIPLE)
        self.assertEqual(q.correct_option_ids, (1,))

    def test_true_or_false_is_recognised_as_selection(self):
        # API string is "true_or_false" (not "true_false") — must map to a selection type.
        q = answer_flow.parse_question({"id": 3, "type": "true_or_false",
                                        "options": [{"id": 1, "content": "對"}, {"id": 2, "content": "錯"}]})
        self.assertEqual(q.qtype, QuestionType.TRUE_FALSE)
        self.assertTrue(q.is_selection)

    def test_fill_in_blank_parses_blank_count_and_leaked_texts(self):
        q = answer_flow.parse_question({
            "id": 4, "type": "fill_in_blank", "answer_number": 2,
            "correct_answers": [{"sort": 1, "content": "b1"}, {"sort": 0, "content": "a0"}]})
        self.assertEqual(q.qtype, QuestionType.FILL_BLANK)
        self.assertTrue(q.is_blank)
        self.assertEqual(q.blank_count, 2)
        self.assertEqual(q.correct_texts, ("a0", "b1"))   # sorted by blank order

    def test_parse_questions_matching_chunks_container_options_per_sub(self):
        # The container holds ALL right options (a DISTINCT id per (left,right) pair) and the
        # subs come back empty. Each sub gets its own id-ordered block so the per-sub correct
        # id is submittable (sub2's "dog" id != sub1's "dog" id). parent_id links the pair.
        raw = [{"id": 1, "type": "matching",
                "options": [{"id": 13, "content": "dog"}, {"id": 11, "content": "dog"},
                            {"id": 12, "content": "cat"}, {"id": 10, "content": "cat"}],
                "sub_subjects": [{"id": 21, "type": "matching", "description": "貓", "options": []},
                                 {"id": 22, "type": "matching", "description": "狗", "options": []}]}]
        qs = answer_flow.parse_questions(raw)
        self.assertEqual([q.subject_id for q in qs], [21, 22])
        self.assertEqual([q.parent_id for q in qs], [1, 1])
        self.assertEqual([o.id for o in qs[0].options], [10, 11])  # sub1's block (by id)
        self.assertEqual([o.id for o in qs[1].options], [12, 13])  # sub2's block (distinct ids)

    def test_parse_questions_matching_keeps_per_sub_options_and_leaked_answer(self):
        # When subs carry their OWN options (the proper shape), keep them as-is so leaked
        # is_answer flags allow a precise per-pair replay. Duplicate right ids across subs
        # are fine — subject_id disambiguates the left item.
        raw = [{"id": 1, "type": "matching", "options": [],
                "sub_subjects": [
                    {"id": 21, "type": "matching", "description": "貓",
                     "options": [{"id": 10, "content": "cat", "is_answer": True},
                                 {"id": 11, "content": "dog", "is_answer": False}]},
                    {"id": 22, "type": "matching", "description": "狗",
                     "options": [{"id": 10, "content": "cat", "is_answer": False},
                                 {"id": 11, "content": "dog", "is_answer": True}]}]}]
        qs = answer_flow.parse_questions(raw)
        self.assertEqual([q.parent_id for q in qs], [1, 1])
        self.assertEqual(qs[0].correct_option_ids, (10,))  # precise leaked answer per sub
        self.assertEqual(qs[1].correct_option_ids, (11,))

    def test_parse_questions_flattens_group_and_skips_section(self):
        raw = [
            {"id": 1, "type": "paragraph_desc", "description": "intro section"},
            {"id": 2, "type": "media", "sub_subjects": [
                {"id": 21, "type": "single_selection", "options": [{"id": 1}]},
                {"id": 22, "type": "paragraph_desc"},  # section inside group -> skipped
                {"id": 23, "type": "short_answer"},
            ]},
            {"id": 3, "type": "single_selection", "options": [{"id": 9}]},
        ]
        qs = answer_flow.parse_questions(raw)
        self.assertEqual([q.subject_id for q in qs], [21, 23, 3])  # section dropped, group flattened


class FetchTest(unittest.IsolatedAsyncioTestCase):
    async def test_fetch_exam_sets_paper_instance(self):
        client = FakeClient({"/distribute": _PAPER})
        activity, questions = await answer_flow._fetch_distribute(client, _act(ActivityType.EXAM), "exams")
        self.assertEqual(activity.paper_instance_id, 777)
        self.assertEqual(len(questions), 1)
        self.assertEqual(questions[0].subject_id, 1001)

    async def test_fetch_questionnaire_distribute_instance(self):
        client = FakeClient({"/questionnaire/9/distribute": _PAPER})
        activity, questions = await answer_flow._fetch_distribute(
            client, _act(ActivityType.QUESTIONNAIRE), "questionnaire")
        self.assertEqual(activity.paper_instance_id, 777)

    async def test_fetch_homework_uses_raw_prompt_no_http(self):
        client = FakeClient()  # would return {} on any GET
        activity = _act(ActivityType.HOMEWORK, raw={"description": "<p>Explain X</p>"})
        _a, questions = await answer_flow._fetch_homework(client, activity)
        self.assertEqual(questions[0].qtype, QuestionType.SHORT_ANSWER)
        self.assertIn("Explain X", questions[0].stem)
        self.assertEqual(client.calls, [])  # raw prompt -> no detail GET

    async def test_fetch_classroom_uses_distribute_for_instance(self):
        client = FakeClient({"/classroom/9/distribute": _PAPER})
        activity, questions = await answer_flow._fetch_distribute(
            client, _act(ActivityType.CLASSROOM_EXAM), "classroom")
        self.assertEqual(activity.paper_instance_id, 777)  # from distribute, needed at submit
        self.assertEqual(questions[0].subject_id, 1001)

    async def test_fetch_vote_parses_option_items_map(self):
        # Real shape: interaction.data.vote_option_items is a letter->text map.
        client = FakeClient({"/votes/9": {"interaction": {"data": {
            "vote_option_items": {"A": "Alpha", "B": "Beta"}, "vote_type": "single", "topic": "pick"}}}})
        activity, questions = await answer_flow._fetch_vote(client, _act(ActivityType.VOTE))
        self.assertEqual(questions[0].qtype, QuestionType.SINGLE)
        self.assertEqual([o.content for o in questions[0].options], ["Alpha", "Beta"])

    async def test_fetch_vote_legacy_slash_fallback(self):
        client = FakeClient({"/votes/9": {"interaction": {"data": {"vote_options": "Alpha/Beta"}}}})
        _activity, questions = await answer_flow._fetch_vote(client, _act(ActivityType.VOTE))
        self.assertEqual([o.content for o in questions[0].options], ["Alpha", "Beta"])


class SubmitTest(unittest.IsolatedAsyncioTestCase):
    async def test_submit_exam_bulk_body(self):
        client = FakeClient()
        await answer_flow._submit_exam(client, _act(ActivityType.EXAM, paper_instance_id=777),
                                       (Answer(1001, (11,)),))
        method, url, body = client.calls[0]
        self.assertEqual(method, "POST")
        self.assertIn("/api/exams/9/submissions", url)
        self.assertEqual(body["exam_paper_instance_id"], 777)
        self.assertEqual(body["subjects"][0]["answer_option_ids"], [11])

    async def test_submit_courseware_subjects_answers_with_type(self):
        client = FakeClient()
        await answer_flow._submit_courseware(
            client, _act(ActivityType.COURSEWARE_QUIZ),
            (Answer(1, (2,), answer_type="single_selection"),
             Answer(3, (), blanks=((0, "天"),), answer_type="fill_in_blank"),))
        _m, url, body = client.calls[0]
        self.assertIn("/courseware-quiz/quiz/9/submissions", url)
        self.assertIn("subjects_answers", body)   # NOT "subjects"
        first = body["subjects_answers"][0]
        self.assertEqual(first["subject_id"], 1)
        self.assertEqual(first["type"], "single_selection")
        self.assertEqual(first["answer_option_ids"], [2])
        self.assertEqual(first["answers"], [])
        self.assertEqual(body["subjects_answers"][1]["answers"], [{"sort": 0, "content": "天"}])

    async def test_submit_homework_comment_body(self):
        client = FakeClient()
        await answer_flow._submit_homework(client, _act(ActivityType.HOMEWORK),
                                           (Answer(9, (), "the essay"),))
        _m, url, body = client.calls[0]
        self.assertIn("/api/course/activities/9/submissions", url)
        self.assertEqual(body, {"comment": "the essay", "is_draft": False,
                                "slides": [], "uploads": []})

    async def test_submit_classroom_is_per_subject_wrapped_body(self):
        client = FakeClient()
        await answer_flow._submit_classroom(
            client, _act(ActivityType.CLASSROOM_EXAM, paper_instance_id=777),
            (Answer(101, (1,)), Answer(102, (2,))))
        self.assertEqual(len(client.calls), 2)  # one POST per subject
        self.assertIn("/api/classroom/9/submit/101", client.calls[0][1])
        self.assertIn("/api/classroom/9/submit/102", client.calls[1][1])
        body = client.calls[0][2]  # exam-style wrapper body, not a flat per-subject body
        self.assertEqual(body["exam_paper_instance_id"], 777)
        self.assertEqual(body["subjects"][0]["subject_id"], 101)

    async def test_submit_vote_posts_letters(self):
        # Real cast: POST {"votes":["A",...]} — option-position letters, not display text.
        client = FakeClient()
        activity = _act(ActivityType.VOTE)
        await answer_flow._submit_vote(client, activity, (Answer(9, (1, 3)),))
        method, url, body = client.calls[0]
        self.assertEqual(method, "POST")
        self.assertIn("/api/votes/9/vote", url)
        self.assertEqual(body["votes"], ["A", "C"])  # id 1 -> A, id 3 -> C

    async def test_submit_exam_marks_finished(self):
        # The real submit form sends examFinished:true to finalize (not draft-save) the paper.
        client = FakeClient()
        await answer_flow._submit_exam(client, _act(ActivityType.EXAM, paper_instance_id=777),
                                       (Answer(1001, (11,)),))
        self.assertIs(client.calls[0][2]["examFinished"], True)

    async def test_resubmit_overlays_correct_without_wiping_blanks(self):
        # Retake exam, answers announced. Review leaks the correct OPTION for the choice and the
        # correct TEXT for the blank/short. Resubmit keeps the first-pass blanks/short and matching
        # parent_id (review carries no parent_id), only overlaying what leaked — never rebuild the
        # paper from the review alone (that wiped non-choice subjects to 0). A leaked option id is
        # applied ONLY if it's a real option of that subject: subject 3 (matching) leaks id 99 from a
        # DIFFERENT sub's block (not in its own {50,51}) — rejected, first pass kept (else scores 0 +
        # renders (空), live: exam 32835).
        review = {"correct_answers_data": {"correct_answers": [
            {"subject_id": 1, "answer_option_ids": [12]},                       # choice: leaked in-block id
            {"subject_id": 2, "correct_answers": [{"sort": 0, "content": "天"}]},  # fill: leaked text
            {"subject_id": 3, "answer_option_ids": [99]},                        # matching sub: cross-block id
            {"subject_id": 4},                                                   # short: nothing leaked
        ]}}
        paper = {"exam_paper_instance_id": 777, "subjects": [
            {"id": 1, "type": "single_selection", "options": [{"id": 11, "content": "a"}, {"id": 12, "content": "b"}]},
            {"id": 3, "type": "single_selection", "options": [{"id": 50, "content": "x"}, {"id": 51, "content": "y"}]},
        ]}
        client = FakeClient({"/submissions/555": review, "/distribute": paper})
        prior = (
            Answer(1, (11,), answer_type="single_selection"),
            Answer(2, blanks=((0, "X"),), answer_type="fill_in_blank"),
            Answer(3, (50,), parent_id=7, answer_type="matching"),
            Answer(4, answer_text="my essay", answer_type="short_answer"),
        )
        await answer_flow._resubmit_exam_with_correct(
            client, _act(ActivityType.EXAM, paper_instance_id=777), 555, prior)
        # last call is the resubmit POST
        body = client.calls[-1][2]
        by_id = {s["subject_id"]: s for s in body["subjects"]}
        self.assertEqual(by_id[1]["answer_option_ids"], [12])               # overlaid choice (in-block)
        self.assertEqual(by_id[2]["answers"], [{"sort": 0, "content": "天"}])  # overlaid blank, not wiped
        self.assertEqual(by_id[3]["answer_option_ids"], [50])               # cross-block id rejected, first-pass kept
        self.assertEqual(by_id[3]["parent_id"], 7)                          # parent_id preserved
        self.assertEqual(by_id[4]["answer"], "my essay")                    # short kept (nothing leaked)

    async def test_resubmit_corrects_matching_when_leaked_id_is_in_block(self):
        # Normal matching whose LLM first pass was WRONG (picked 50): the review leaks the correct
        # IN-BLOCK id (51) — a real option of the sub — so it IS overlaid and the pair is corrected.
        review = {"correct_answers_data": {"correct_answers": [{"subject_id": 3, "answer_option_ids": [51]}]}}
        paper = {"exam_paper_instance_id": 777, "subjects": [
            {"id": 3, "type": "single_selection", "options": [{"id": 50, "content": "x"}, {"id": 51, "content": "y"}]}]}
        client = FakeClient({"/submissions/555": review, "/distribute": paper})
        prior = (Answer(3, (50,), parent_id=7, answer_type="matching"),)
        await answer_flow._resubmit_exam_with_correct(
            client, _act(ActivityType.EXAM, paper_instance_id=777), 555, prior)
        body = client.calls[-1][2]
        by_id = {s["subject_id"]: s for s in body["subjects"]}
        self.assertEqual(by_id[3]["answer_option_ids"], [51])   # in-block correction applied
        self.assertEqual(by_id[3]["parent_id"], 7)              # parent_id preserved

    async def test_submit_once_exam_does_not_resubmit(self):
        # 作答次數=1 exam: submit response has no allow_retake_exam -> the resubmit-for-correct
        # pass must NOT fire (it would otherwise read /submissions/{id} and POST again, wasting
        # the single attempt). Verified live on a strictest-settings exam; pinned here offline.
        client = FakeClient({"/submissions": {"submission_id": 555}})  # no allow_retake_exam
        prepared = {"activity": _act(ActivityType.EXAM, paper_instance_id=777),
                    "answers": (Answer(1001, (11,)),), "source": None, "submitted": False}
        result = await answer_flow.submit_prepared(client, prepared, resubmit_for_correct=True)
        self.assertTrue(result.ok)
        self.assertEqual(result.submission_id, 555)
        # exactly one call: the single POST submission, no review-GET / resubmit-POST
        self.assertEqual(len(client.calls), 1)
        self.assertEqual(client.calls[0][0], "POST")


class DecideAnswersWiringTest(unittest.IsolatedAsyncioTestCase):
    """decide_answers must offer the material tools + image fetcher to the LLM only when a
    TronClass client (and activity) is available and tools are enabled."""

    def _pending_question(self):
        # selection with no leaked answer -> goes to the LLM (plan.pending)
        return Question(subject_id=1, qtype=QuestionType.SINGLE, stem="?",
                        options=(Option(id=10, content="x"), Option(id=11, content="y")))

    async def _capture(self, *, client, activity, llm_config):
        captured = {}

        async def fake_answer(session, question, cfg, *, tools=None, tool_executor=None, image_fetcher=None):
            captured.update(tools=tools, executor=tool_executor, fetcher=image_fetcher)
            return "A"

        orig = llm_answerer.answer_question
        llm_answerer.answer_question = fake_answer
        try:
            await answer_flow.decide_answers(None, [self._pending_question()],
                                             llm_config=llm_config, client=client, activity=activity)
        finally:
            llm_answerer.answer_question = orig
        return captured

    async def test_tools_and_fetcher_passed_with_client_and_activity(self):
        cap = await self._capture(client=FakeClient(), activity=_act(ActivityType.EXAM),
                                  llm_config={"enable_tools": True})
        self.assertIsNotNone(cap["tools"])
        self.assertIsNotNone(cap["executor"])
        self.assertIsNotNone(cap["fetcher"])

    async def test_no_tools_without_client(self):
        cap = await self._capture(client=None, activity=_act(ActivityType.EXAM),
                                  llm_config={"enable_tools": True})
        self.assertIsNone(cap["tools"])
        self.assertIsNone(cap["executor"])
        self.assertIsNone(cap["fetcher"])

    async def test_tools_off_keeps_fetcher_only(self):
        cap = await self._capture(client=FakeClient(), activity=_act(ActivityType.EXAM),
                                  llm_config={"enable_tools": False})
        self.assertIsNone(cap["tools"])        # tools disabled
        self.assertIsNone(cap["executor"])
        self.assertIsNotNone(cap["fetcher"])   # but images still get embedded


class ClozeParseTest(unittest.TestCase):
    def test_top_level_marker_cloze_is_parsed_not_dropped(self):
        # A cloze that arrives top-level with marker blanks and NO sub_subjects must be parsed
        # (the old `qtype == CLOZE` dispatch disjunct wrongly took the empty-subs branch and dropped it).
        qs = answer_flow.parse_questions(
            [{"id": 5, "type": "cloze", "description": "我__blank__你__blank__他", "answer_number": 0}])
        self.assertEqual([q.subject_id for q in qs], [5])
        self.assertEqual(qs[0].blank_count, 2)  # 2 markers -> 2 blanks

    def test_cloze_with_subs_still_flattens_to_children(self):
        qs = answer_flow.parse_questions([{
            "id": 9, "type": "cloze",
            "sub_subjects": [{"id": 91, "type": "fill_in_blank"}, {"id": 92, "type": "fill_in_blank"}],
        }])
        self.assertEqual([q.subject_id for q in qs], [91, 92])  # unchanged: subs win


class PrepareGuardTest(unittest.IsolatedAsyncioTestCase):
    async def test_empty_llm_answer_is_not_prepared(self):
        # F1: an empty LLM reply (missing key / dead model / stall) must NOT cache a blank paper —
        # prepare_answer returns None so the activity is retried, never submitted empty or deduped.
        client = FakeClient({"/distribute": _PAPER})
        orig = llm_answerer.answer_question

        async def empty(*a, **k):
            return ""  # LLM produced nothing

        llm_answerer.answer_question = empty
        try:
            prepared = await answer_flow.prepare_answer(client, None, _act(ActivityType.EXAM), llm_config={})
        finally:
            llm_answerer.answer_question = orig
        self.assertIsNone(prepared)

    async def test_real_llm_answer_is_prepared(self):
        client = FakeClient({"/distribute": _PAPER})
        orig = llm_answerer.answer_question

        async def good(*a, **k):
            return "A"  # picks option A

        llm_answerer.answer_question = good
        try:
            prepared = await answer_flow.prepare_answer(client, None, _act(ActivityType.EXAM), llm_config={})
        finally:
            llm_answerer.answer_question = orig
        self.assertIsNotNone(prepared)
        self.assertEqual(prepared["answers"][0].answer_option_ids, (11,))  # A -> first option id


if __name__ == "__main__":
    unittest.main()

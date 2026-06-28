from __future__ import annotations
import unittest

from troTHU import answer_flow
from troTHU.quiz_models import Activity, ActivityType, Answer, QuestionType


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


class FetchTest(unittest.IsolatedAsyncioTestCase):
    async def test_fetch_exam_sets_paper_instance(self):
        client = FakeClient({"/distribute": _PAPER})
        activity, questions = await answer_flow._fetch_exam(client, _act(ActivityType.EXAM))
        self.assertEqual(activity.paper_instance_id, 777)
        self.assertEqual(len(questions), 1)
        self.assertEqual(questions[0].subject_id, 1001)

    async def test_fetch_questionnaire_is_unscored(self):
        client = FakeClient({"/questionnaire/9/distribute": _PAPER})
        activity, questions = await answer_flow._fetch_questionnaire(client, _act(ActivityType.QUESTIONNAIRE))
        self.assertFalse(activity.scored)
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
        activity, questions = await answer_flow._fetch_classroom(client, _act(ActivityType.CLASSROOM_EXAM))
        self.assertEqual(activity.paper_instance_id, 777)  # from distribute, needed at submit
        self.assertEqual(questions[0].subject_id, 1001)

    async def test_fetch_vote_parses_slash_labels(self):
        client = FakeClient({"/votes/9": {"interaction": {"data": {
            "vote_options": "Alpha/Beta", "topic": "pick"}}}})
        activity, questions = await answer_flow._fetch_vote(client, _act(ActivityType.VOTE))
        self.assertFalse(activity.scored)
        self.assertEqual([o.content for o in questions[0].options], ["Alpha", "Beta"])
        self.assertEqual(activity.raw["vote_labels"], ["Alpha", "Beta"])


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

    async def test_submit_courseware_wraps_subjects(self):
        client = FakeClient()
        await answer_flow._submit_courseware(client, _act(ActivityType.COURSEWARE_QUIZ),
                                             (Answer(1, (2,)),))
        _m, url, body = client.calls[0]
        self.assertIn("/courseware-quiz/quiz/9/submissions", url)
        self.assertIn("subjects", body)   # NOT a bare array
        self.assertEqual(body["subjects"][0]["subject_id"], 1)

    async def test_submit_homework_comment_body(self):
        client = FakeClient()
        await answer_flow._submit_homework(client, _act(ActivityType.HOMEWORK),
                                           (Answer(9, (), "the essay"),))
        _m, url, body = client.calls[0]
        self.assertIn("/api/course/activities/9/submissions", url)
        self.assertEqual(body, {"comment": "the essay", "is_draft": False, "uploads": []})

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

    async def test_submit_vote_maps_index_to_label(self):
        client = FakeClient()
        activity = _act(ActivityType.VOTE, raw={"vote_labels": ["Alpha", "Beta"]})
        await answer_flow._submit_vote(client, activity, (Answer(9, (1,)),))
        method, url, body = client.calls[0]
        self.assertEqual(method, "PUT")
        self.assertIn("/api/votes/9/vote", url)
        self.assertEqual(body["voted_options"], ["Alpha"])  # index 1 -> first label

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


if __name__ == "__main__":
    unittest.main()

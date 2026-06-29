from __future__ import annotations
import unittest

import troTHU.runtime_context as ctx
from troTHU import answer_flow, autoanswer_runtime, autoanswer_store
from troTHU.quiz_models import (
    Activity, ActivityType, Answer, AnswerResult, AnswerSource, Option, Question, QuestionType,
)


class FakeClient:
    """Returns canned GET responses keyed by URL substring (first match wins)."""

    def __init__(self, responses=None):
        self.responses = responses or {}
        self.calls = []

    def api_url(self, path):
        return "https://x" + path

    async def request_json(self, method, url, *, json_payload=None, params=None, expected_status=(200,)):
        self.calls.append((method, url))
        for key, resp in self.responses.items():
            if key in url:
                return resp
        return {}


class AlreadySubmittedGuardTest(unittest.IsolatedAsyncioTestCase):
    async def test_exam_exhausted_attempts_is_skipped(self):
        # The student exam-list has no has_submitted bool; it carries submission_count +
        # submit_times (verified live). A single-attempt exam already submitted (count>=cap)
        # is skipped; a retake exam with attempts left is still detected.
        client = FakeClient({"courses/55379/exam-list": {"exams": [
            {"id": "E1", "is_started": True, "is_closed": False, "submit_times": 1, "submission_count": 0},
            {"id": "E2", "is_started": True, "is_closed": False, "submit_times": 1, "submission_count": 1},  # used up
            {"id": "E3", "is_started": True, "is_closed": False, "submit_times": 50, "submission_count": 2},  # retake
        ]}})
        out = await autoanswer_runtime._poll_course(client, "55379", {ActivityType.EXAM})
        self.assertEqual([a.activity_id for a in out], ["E1", "E3"])

    async def test_exam_unlimited_attempts_not_skipped(self):
        client = FakeClient({"courses/55379/exam-list": {"exams": [
            {"id": "E9", "is_started": True, "is_closed": False, "submit_times": 0, "submission_count": 5},
        ]}})
        out = await autoanswer_runtime._poll_course(client, "55379", {ActivityType.EXAM})
        self.assertEqual([a.activity_id for a in out], ["E9"])  # submit_times<=0 = unlimited

    async def test_homework_already_submitted_is_skipped(self):
        # Homework re-POST overwrites the prior submission -> must skip server-submitted ones.
        client = FakeClient({"courses/55379/homework-activities": {"homework_activities": [
            {"id": "H1", "is_closed": False, "submitted": False},
            {"id": "H2", "is_closed": False, "submitted": True},
        ]}})
        out = await autoanswer_runtime._poll_course(client, "55379", {ActivityType.HOMEWORK})
        self.assertEqual([a.activity_id for a in out], ["H1"])

    async def test_questionnaire_is_submitted_flag_is_honored(self):
        client = FakeClient({"courses/55379/questionnaire-list": {"questionnaires": [
            {"id": "Q1", "is_started": True, "is_closed": False, "is_submitted": True},
        ]}})
        out = await autoanswer_runtime._poll_course(client, "55379", {ActivityType.QUESTIONNAIRE})
        self.assertEqual(out, [])


class ClassroomDetectionTest(unittest.IsolatedAsyncioTestCase):
    """Root fix (verified live on 55379): classroom_exam status is only none/start/finish, and
    "start" persists through 開始/停止收答 — so detection must ALSO require an open answering window
    (started_subjects_count >= 1), else it churns on submits the server rejects ("考試未開始")."""

    async def test_only_detected_when_answering_open(self):
        client = FakeClient({"courses/55379/classroom-list": {"classrooms": [
            {"id": "C_open", "status": "start", "started_subjects_count": 1},     # 收答中 -> submittable
            {"id": "C_closed", "status": "start", "started_subjects_count": 0},   # status start but closed
            {"id": "C_created", "status": "none", "started_subjects_count": 0},   # 建立
            {"id": "C_finished", "status": "finish", "started_subjects_count": 0},  # 結束
        ]}})
        out = await autoanswer_runtime._poll_course(client, "55379", {ActivityType.CLASSROOM_EXAM})
        self.assertEqual([a.activity_id for a in out], ["C_open"])  # only the open-answering one

    async def test_legacy_status_1_no_longer_matched(self):
        # The old guess status=="1" never occurs live; ensure it isn't matched anymore.
        client = FakeClient({"courses/55379/classroom-list": {"classrooms": [
            {"id": "C", "status": "1", "started_subjects_count": 1}]}})
        out = await autoanswer_runtime._poll_course(client, "55379", {ActivityType.CLASSROOM_EXAM})
        self.assertEqual(out, [])


class CoursewareDetectionTest(unittest.IsolatedAsyncioTestCase):
    async def test_material_activity_resolves_to_quiz_activity(self):
        client = FakeClient({
            "courses/55379/activities": {"activities": [
                {"id": "A1", "type": "material", "title": "教材一"},
                {"id": "A2", "type": "page", "title": "頁面"},  # not a courseware type -> not probed
            ]},
            "courseware-quiz/activity/A1/quizzes": {"quizzes": [
                {"id": "QZ1", "title": "小考", "is_started": True, "is_closed": False}]},
            # A1's quiz QZ1 my-submission absent -> FakeClient returns {} -> not submitted
        })
        out = await autoanswer_runtime._poll_course(client, "55379", {ActivityType.COURSEWARE_QUIZ})
        self.assertEqual([(a.activity_id, a.activity_type) for a in out],
                         [("QZ1", ActivityType.COURSEWARE_QUIZ)])
        # the non-material activity was never probed for quizzes
        self.assertFalse(any("activity/A2/quizzes" in url for _m, url in client.calls))

    async def test_courseware_already_submitted_is_skipped(self):
        client = FakeClient({
            "courses/55379/activities": {"activities": [{"id": "A1", "type": "material"}]},
            "courseware-quiz/activity/A1/quizzes": {"quizzes": [{"id": "QZ1", "is_started": True}]},
            "quiz/QZ1/my-submission": {"id": 9001},  # already submitted
        })
        out = await autoanswer_runtime._poll_course(client, "55379", {ActivityType.COURSEWARE_QUIZ})
        self.assertEqual(out, [])


class PrepareDedupTest(unittest.IsolatedAsyncioTestCase):
    def setUp(self):
        ctx.COMPLETED_QUESTION_SUBMISSIONS.clear()
        ctx.ACTIVE_QUESTION_ANSWERS.clear()
        ctx.QUESTION_ANSWER_ATTEMPTS.clear()

    async def test_persisted_completed_activity_is_skipped(self):
        ctx.COMPLETED_QUESTION_SUBMISSIONS["EX1"] = True  # as if loaded from state/
        called = []
        orig = answer_flow.prepare_answer

        async def fake_prepare(*a, **k):
            called.append(1)
            return None

        answer_flow.prepare_answer = fake_prepare
        try:
            act = Activity(activity_id="EX1", activity_type=ActivityType.EXAM, course_id="c")
            await autoanswer_runtime._prepare(object(), object(), act, {"delay_seconds": 15, "llm": {}}, 100.0)
        finally:
            answer_flow.prepare_answer = orig
        self.assertEqual(called, [])  # already completed -> never prepared again


class SubmitDueTest(unittest.IsolatedAsyncioTestCase):
    def setUp(self):
        ctx.COMPLETED_QUESTION_SUBMISSIONS.clear()
        ctx.ACTIVE_QUESTION_ANSWERS.clear()
        ctx.QUESTION_ANSWER_ATTEMPTS.clear()
        ctx.AUTOANSWER_SUBMIT_NOW = False

    async def test_success_persists_and_marks_completed(self):
        marks = []
        orig_submit, orig_mark = answer_flow.submit_prepared, autoanswer_store.mark_completed

        async def fake_submit(client, prepared, *, resubmit_for_correct=True):
            return AnswerResult(ok=True, status="submitted", activity_id="EX2", submission_id="s1",
                                source=AnswerSource.LLM, final_answers=(Answer(1, (11,)),))

        answer_flow.submit_prepared = fake_submit
        autoanswer_store.mark_completed = lambda base, profile, aid: marks.append(aid)
        q = Question(subject_id=1, qtype=QuestionType.SINGLE,
                     options=(Option(id=10, content="a"), Option(id=11, content="b")))
        ctx.ACTIVE_QUESTION_ANSWERS["EX2"] = {
            "activity": Activity(activity_id="EX2", activity_type=ActivityType.EXAM),
            "questions": [q], "answers": (Answer(1, (10,)),), "source": AnswerSource.LLM,
            "submitted": False, "detected_at": 1.0, "delay_seconds": 15, "label": "X"}
        try:
            await autoanswer_runtime._submit_due(object(), {"resubmit_for_correct": True}, 100.0)
        finally:
            answer_flow.submit_prepared, autoanswer_store.mark_completed = orig_submit, orig_mark
        self.assertTrue(ctx.COMPLETED_QUESTION_SUBMISSIONS.get("EX2"))
        self.assertEqual(marks, ["EX2"])  # persisted permanently

    async def test_failure_is_graceful_without_backoff(self):
        # The 5-min failure backoff was removed (root fix handles classroom churn). A failed submit
        # must NOT mark completed, NOT push the attempt clock into the future, and NOT raise.
        orig = answer_flow.submit_prepared

        async def fake_submit(client, prepared, *, resubmit_for_correct=True):
            return AnswerResult(ok=False, status="submit_failed", activity_id="EX3")

        answer_flow.submit_prepared = fake_submit
        ctx.ACTIVE_QUESTION_ANSWERS["EX3"] = {
            "activity": Activity(activity_id="EX3", activity_type=ActivityType.CLASSROOM_EXAM),
            "questions": [], "answers": (), "submitted": False,
            "detected_at": 1.0, "delay_seconds": 15, "label": "Y"}
        try:
            await autoanswer_runtime._submit_due(object(), {}, 100.0)
        finally:
            answer_flow.submit_prepared = orig
        self.assertFalse(ctx.COMPLETED_QUESTION_SUBMISSIONS.get("EX3"))
        self.assertLessEqual(ctx.QUESTION_ANSWER_ATTEMPTS.get("EX3", 0.0), 100.0)  # no push-out
        self.assertNotIn("EX3", ctx.ACTIVE_QUESTION_ANSWERS)  # popped from active


if __name__ == "__main__":
    unittest.main()

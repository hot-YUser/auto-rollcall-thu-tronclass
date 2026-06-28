from __future__ import annotations
import unittest

from troTHU import autoanswer_runtime
from troTHU.quiz_models import ActivityType


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


if __name__ == "__main__":
    unittest.main()

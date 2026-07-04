from __future__ import annotations
import asyncio
import unittest
from unittest.mock import patch

import troTHU.runtime_context as ctx
from troTHU import answer_flow, autoanswer_runtime, autoanswer_store
from troTHU.quiz_models import (
    Activity, ActivityType, AnswerResult, AnswerSource,
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

    async def test_closed_or_time_expired_exam_not_detected(self):
        # A time-expired exam reports is_closed=False but is_in_progress=False and a past end_time;
        # it 400s ('測驗已關閉') on /distribute, so it must NOT be detected (從源頭不偵測, no churn).
        client = FakeClient({"courses/55379/exam-list": {"exams": [
            {"id": "OPEN", "is_started": True, "is_closed": False, "is_in_progress": True,
             "end_time": "2099-01-01T00:00:00Z"},
            {"id": "NOTPROG", "is_started": True, "is_closed": False, "is_in_progress": False,
             "end_time": "2099-01-01T00:00:00Z"},                       # server says not-in-progress
            {"id": "EXPIRED", "is_started": True, "is_closed": False, "is_in_progress": True,
             "end_time": "2000-01-01T00:00:00Z"},                       # end_time already passed
            {"id": "LEGACY", "is_started": True, "is_closed": False},   # tenant w/o is_in_progress -> still open
        ]}})
        out = await autoanswer_runtime._poll_course(client, "55379", {ActivityType.EXAM})
        self.assertEqual([a.activity_id for a in out], ["OPEN", "LEGACY"])

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


class VoteDetectionTest(unittest.IsolatedAsyncioTestCase):
    """Votes are one-shot; the server rejects a re-cast (400 "you have already voted"). The vote
    LIST has no per-user flag, so an already-cast vote would churn (re-prepare LLM every poll).
    We check the /api/votes/{id} detail (students[].user_no) and skip votes the account already
    appears in — the real fix for the 'monitor frozen' report."""

    def setUp(self):
        autoanswer_runtime._VOTED_CACHE.clear()

    async def test_already_voted_vote_is_skipped_and_cached(self):
        client = FakeClient({
            "courses/55379/interactions": {"interactions": [
                {"id": "V_done", "type": "vote", "status": "start", "title": "已投"},
                {"id": "V_open", "type": "vote", "status": "start", "title": "未投"},
            ]},
            "votes/V_done": {"students": [{"id": 1, "user_no": "me@x.com"}]},      # I already voted
            "votes/V_open": {"students": [{"id": 2, "user_no": "other@x.com"}]},   # someone else, not me
        })
        with patch.object(autoanswer_runtime, "_current_user_no", return_value="me@x.com"):
            out = await autoanswer_runtime._poll_course(client, "55379", {ActivityType.VOTE})
        self.assertEqual([a.activity_id for a in out], ["V_open"])   # already-voted one skipped
        self.assertIn("V_done", autoanswer_runtime._VOTED_CACHE)     # cached so it isn't re-fetched

    async def test_non_started_vote_ignored(self):
        client = FakeClient({"courses/55379/interactions": {"interactions": [
            {"id": "V_end", "type": "vote", "status": "finish"},
        ]}})
        with patch.object(autoanswer_runtime, "_current_user_no", return_value="me@x.com"):
            out = await autoanswer_runtime._poll_course(client, "55379", {ActivityType.VOTE})
        self.assertEqual(out, [])


class DispatchTest(unittest.IsolatedAsyncioTestCase):
    def setUp(self):
        for d in (ctx.COMPLETED_QUESTION_SUBMISSIONS, ctx.ACTIVE_QUESTION_ANSWERS,
                  ctx.QUESTION_ANSWER_ATTEMPTS, autoanswer_runtime._INFLIGHT_ACTIVITIES):
            d.clear()
        autoanswer_runtime.reset_autoanswer_dispatch()  # also clears _DETECT_ANNOUNCED / _FAILED_ATTEMPTS

    @staticmethod
    def _act(aid):
        return Activity(activity_id=aid, activity_type=ActivityType.EXAM, course_id="c")

    async def test_completed_activity_is_not_dispatched(self):
        ctx.COMPLETED_QUESTION_SUBMISSIONS["EX1"] = True
        autoanswer_runtime._dispatch_activity(object(), self._act("EX1"), {"delay_seconds": 0, "llm": {}})
        self.assertEqual(autoanswer_runtime._INFLIGHT_ACTIVITIES, {})  # completed -> no task

    async def test_same_activity_dispatched_once(self):
        # A hung prepare keeps the handler in-flight; a 2nd dispatch of the same id must be a no-op.
        gate = asyncio.Event()
        orig = answer_flow.prepare_answer

        async def hung_prepare(*a, **k):
            await gate.wait()
            return None

        answer_flow.prepare_answer = hung_prepare
        try:
            act = self._act("EX2")
            autoanswer_runtime._dispatch_activity(object(), act, {"delay_seconds": 0, "llm": {}})
            autoanswer_runtime._dispatch_activity(object(), act, {"delay_seconds": 0, "llm": {}})
            await asyncio.sleep(0)
            self.assertEqual(list(autoanswer_runtime._INFLIGHT_ACTIVITIES), ["EX2"])  # exactly one task
        finally:
            gate.set()
            tasks = list(autoanswer_runtime._INFLIGHT_ACTIVITIES.values())
            for t in tasks:
                t.cancel()
            await asyncio.gather(*tasks, return_exceptions=True)
            answer_flow.prepare_answer = orig


class HandleActivityTest(unittest.IsolatedAsyncioTestCase):
    def setUp(self):
        for d in (ctx.COMPLETED_QUESTION_SUBMISSIONS, ctx.ACTIVE_QUESTION_ANSWERS,
                  ctx.QUESTION_ANSWER_ATTEMPTS, autoanswer_runtime._INFLIGHT_ACTIVITIES):
            d.clear()
        autoanswer_runtime.reset_autoanswer_dispatch()  # also clears _DETECT_ANNOUNCED / _FAILED_ATTEMPTS
        ctx.AUTOANSWER_SUBMIT_NOW = asyncio.Event()

    @staticmethod
    def _prepared(aid):
        return {"activity": Activity(activity_id=aid, activity_type=ActivityType.EXAM),
                "questions": [], "answers": (), "source": AnswerSource.LLM}

    async def _run(self, aid, *, prepare, submit, delay=0):
        prints = []
        orig_p, orig_s, orig_m, orig_lp = (answer_flow.prepare_answer, answer_flow.submit_prepared,
                                           autoanswer_store.mark_completed, ctx.log_print)
        answer_flow.prepare_answer = prepare
        answer_flow.submit_prepared = submit
        autoanswer_store.mark_completed = lambda base, profile, a: None
        ctx.log_print = lambda m: prints.append(str(m))
        try:
            act = Activity(activity_id=aid, activity_type=ActivityType.EXAM, title=aid)
            await asyncio.wait_for(
                autoanswer_runtime.handle_activity(object(), act, {"delay_seconds": delay, "llm": {}}),
                timeout=5)
        finally:
            (answer_flow.prepare_answer, answer_flow.submit_prepared,
             autoanswer_store.mark_completed, ctx.log_print) = orig_p, orig_s, orig_m, orig_lp
        return prints

    async def test_success_announces_split_and_marks_completed(self):
        async def prep(*a, **k):
            return self._prepared("EX2")

        async def sub(client, prepared, *, resubmit_for_correct=True):
            return AnswerResult(ok=True, status="submitted", activity_id="EX2",
                                source=AnswerSource.LLM, final_answers=())

        prints = await self._run("EX2", prepare=prep, submit=sub)
        self.assertTrue(ctx.COMPLETED_QUESTION_SUBMISSIONS.get("EX2"))
        self.assertTrue(any("偵測到" in p for p in prints))      # announce on DETECT
        self.assertTrue(any("已備妥答案" in p for p in prints))   # announce on READY (after prepare)
        self.assertNotIn("EX2", autoanswer_runtime._INFLIGHT_ACTIVITIES)   # released in finally
        self.assertNotIn("EX2", ctx.ACTIVE_QUESTION_ANSWERS)

    async def test_failure_does_not_mark_completed(self):
        async def prep(*a, **k):
            return self._prepared("EX3")

        async def sub(client, prepared, *, resubmit_for_correct=True):
            return AnswerResult(ok=False, status="submit_failed", activity_id="EX3")

        await self._run("EX3", prepare=prep, submit=sub)
        self.assertFalse(ctx.COMPLETED_QUESTION_SUBMISSIONS.get("EX3"))
        self.assertNotIn("EX3", ctx.ACTIVE_QUESTION_ANSWERS)

    async def test_no_usable_answer_never_submits(self):
        submitted = []

        async def prep(*a, **k):
            return None

        async def sub(client, prepared, *, resubmit_for_correct=True):
            submitted.append(1)
            return AnswerResult(ok=True, status="x")

        await self._run("EX4", prepare=prep, submit=sub)
        self.assertEqual(submitted, [])  # None prepared -> never submits

    async def test_detect_announced_once_and_failures_back_off(self):
        # An un-answerable activity (prepare -> None) must announce "偵測到" ONCE, not每次重試 (刷屏),
        # and each failure bumps the backoff counter so _dispatch_activity waits longer next time.
        async def prep_none(*a, **k):
            return None

        async def sub(*a, **k):
            return AnswerResult(ok=False, status="x")

        first = await self._run("EX9", prepare=prep_none, submit=sub)
        second = await self._run("EX9", prepare=prep_none, submit=sub)
        self.assertTrue(any("偵測到" in p for p in first))    # announced on first detect
        self.assertFalse(any("偵測到" in p for p in second))  # silent on retry
        self.assertEqual(autoanswer_runtime._FAILED_ATTEMPTS.get("EX9"), 2)  # backoff grows per failure

    async def test_keypress_cuts_15s_countdown_short(self):
        ctx.AUTOANSWER_SUBMIT_NOW.set()  # any-key already pressed

        async def prep(*a, **k):
            return self._prepared("EX5")

        async def sub(client, prepared, *, resubmit_for_correct=True):
            return AnswerResult(ok=True, status="submitted", activity_id="EX5",
                                source=AnswerSource.LLM, final_answers=())

        # delay 15s but the Event is set -> the wait_for(5s) in _run would time out if the countdown
        # weren't cut short; reaching this assertion proves it submitted well under the 15s.
        await self._run("EX5", prepare=prep, submit=sub, delay=15)
        self.assertTrue(ctx.COMPLETED_QUESTION_SUBMISSIONS.get("EX5"))


class TickNeverRaisesTest(unittest.IsolatedAsyncioTestCase):
    """The monitor loop depends on autoanswer_tick NEVER raising (CLAUDE.md contract). Force an
    inner call to blow up and assert the tick still returns cleanly."""

    async def test_tick_swallows_inner_errors(self):
        orig_cfg = autoanswer_runtime.get_autoanswer_config
        orig_client = ctx.create_tron_http_client
        autoanswer_runtime.get_autoanswer_config = lambda *a, **k: {"enabled": True, "types": ["exam"], "llm": {}}

        def boom(*a, **k):
            raise RuntimeError("boom")

        ctx.create_tron_http_client = boom
        try:
            await autoanswer_runtime.autoanswer_tick(object())  # must NOT raise
        finally:
            autoanswer_runtime.get_autoanswer_config = orig_cfg
            ctx.create_tron_http_client = orig_client


if __name__ == "__main__":
    unittest.main()

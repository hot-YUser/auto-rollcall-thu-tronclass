"""Auto-answer flow — ONE entry, dynamic branch by activity type (mirrors login_flow).

prepare_answer(): fetch the question(s), decide answers (replay leaked correct answer,
else LLM, else default pick) and CACHE them WITHOUT submitting. submit_prepared():
submit the cached answers, and — when the activity allows retake and the post-submit
review reveals the correct answer — resubmit the correct answer for a guaranteed pass
(controlled by autoanswer.resubmit_for_correct; validated live on exam, P0).
"""
from __future__ import annotations
from typing import Any, Dict, List, Optional, Tuple

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover
    import runtime_context as ctx  # type: ignore

try:
    from troTHU import llm_answerer
    from troTHU.quiz_engine import answer_from_llm_reply, decide_paper, normalize_text
    from troTHU.quiz_models import (
        Activity, ActivityType, Answer, AnswerResult, AnswerSource, Option, Question, QuestionType,
    )
except ImportError:  # pragma: no cover - script execution fallback
    import llm_answerer  # type: ignore
    from quiz_engine import answer_from_llm_reply, decide_paper, normalize_text  # type: ignore
    from quiz_models import (  # type: ignore
        Activity, ActivityType, Answer, AnswerResult, AnswerSource, Option, Question, QuestionType,
    )


_QTYPE_MAP = {
    "single_selection": QuestionType.SINGLE,
    "single": QuestionType.SINGLE,
    "multiple_selection": QuestionType.MULTIPLE,
    "multiple": QuestionType.MULTIPLE,
    "true_false": QuestionType.TRUE_FALSE,
    "fill_blank": QuestionType.FILL_BLANK,
    "completion": QuestionType.FILL_BLANK,
    "short_answer": QuestionType.SHORT_ANSWER,
    "essay": QuestionType.SHORT_ANSWER,
}

# Activity types where there is no right/wrong answer (just pick something valid).
_UNSCORED = (ActivityType.QUESTIONNAIRE, ActivityType.VOTE)


def _as_int(value: Any, default: int = 0) -> int:
    try:
        return int(str(value).strip())
    except (TypeError, ValueError):
        return default


def map_qtype(value: Any) -> QuestionType:
    return _QTYPE_MAP.get(normalize_text(value).lower(), QuestionType.UNKNOWN)


def parse_question(raw: Dict[str, Any]) -> Question:
    options = []
    for opt in raw.get("options") or []:
        if not isinstance(opt, dict):
            continue
        options.append(Option(
            id=_as_int(opt.get("id")),
            content=normalize_text(opt.get("content")),
            is_answer=opt.get("is_answer") if "is_answer" in opt else None,
            sort=_as_int(opt.get("sort")),
        ))
    return Question(
        subject_id=_as_int(raw.get("id") or raw.get("subject_id")),
        qtype=map_qtype(raw.get("type")),
        stem=normalize_text(raw.get("description") or raw.get("content") or raw.get("stem")),
        options=tuple(options),
        point=normalize_text(raw.get("point")),
    )


# ----------------------------------------------------------------------------- fetch (branch)

async def _fetch_exam(client: Any, activity: Activity) -> Tuple[Activity, List[Question]]:
    paper = await client.request_json(
        "GET", client.api_url("/api/exams/{}/distribute".format(activity.activity_id)))
    paper = paper if isinstance(paper, dict) else {}
    questions = [parse_question(s) for s in (paper.get("subjects") or []) if isinstance(s, dict)]
    activity = Activity(
        activity_id=activity.activity_id, activity_type=activity.activity_type,
        course_id=activity.course_id, title=activity.title,
        paper_instance_id=paper.get("exam_paper_instance_id"),
        scored=True, raw=activity.raw,
    )
    return activity, questions


async def _fetch_courseware(client: Any, activity: Activity) -> Tuple[Activity, List[Question]]:
    body = await client.request_json(
        "GET", client.api_url("/api/courseware-quiz/quiz/{}/subjects".format(activity.activity_id)))
    subjects = body.get("subjects") if isinstance(body, dict) else body
    questions = [parse_question(s) for s in (subjects or []) if isinstance(s, dict)]
    return activity, questions


async def _fetch_questionnaire(client: Any, activity: Activity) -> Tuple[Activity, List[Question]]:
    # Mirrors exam: distribute returns the paper (instance id + subjects). Unscored.
    paper = await client.request_json(
        "GET", client.api_url("/api/questionnaire/{}/distribute".format(activity.activity_id)))
    paper = paper if isinstance(paper, dict) else {}
    questions = [parse_question(s) for s in (paper.get("subjects") or []) if isinstance(s, dict)]
    activity = Activity(
        activity_id=activity.activity_id, activity_type=activity.activity_type,
        course_id=activity.course_id, title=activity.title,
        paper_instance_id=paper.get("exam_paper_instance_id"), scored=False, raw=activity.raw,
    )
    return activity, questions


def _prompt_from(raw: Dict[str, Any]) -> str:
    data = raw.get("data") if isinstance(raw.get("data"), dict) else {}
    return normalize_text(raw.get("description") or data.get("description"))


async def _fetch_homework(client: Any, activity: Activity) -> Tuple[Activity, List[Question]]:
    # Free-form: the prompt becomes one short-answer question; the LLM writes the body.
    # Prefer the poll item (activity.raw); only GET the detail if needed (it is teacher-only
    # on some tenants). Never hard-fail — homework submission works even with a thin prompt.
    raw = activity.raw if isinstance(activity.raw, dict) else {}
    prompt = _prompt_from(raw)
    if not prompt:
        try:
            body = await client.request_json(
                "GET", client.api_url("/api/activities/{}".format(activity.activity_id)))
            prompt = _prompt_from(body if isinstance(body, dict) else {})
        except ctx.TronHttpError:
            prompt = ""
    prompt = prompt or normalize_text(activity.title) or "請依題目作答。"
    question = Question(subject_id=_as_int(activity.activity_id),
                        qtype=QuestionType.SHORT_ANSWER, stem=prompt)
    return activity, [question]


async def _fetch_classroom(client: Any, activity: Activity) -> Tuple[Activity, List[Question]]:
    # distribute (not /subject) returns the paper instance id needed at submit, and
    # leaks correct_answers/is_answer so scored classroom replays without the LLM.
    paper = await client.request_json(
        "GET", client.api_url("/api/classroom/{}/distribute".format(activity.activity_id)))
    paper = paper if isinstance(paper, dict) else {}
    questions = [parse_question(s) for s in (paper.get("subjects") or []) if isinstance(s, dict)]
    activity = Activity(
        activity_id=activity.activity_id, activity_type=activity.activity_type,
        course_id=activity.course_id, title=activity.title,
        paper_instance_id=paper.get("exam_paper_instance_id"), scored=True, raw=activity.raw,
    )
    return activity, questions


async def _fetch_vote(client: Any, activity: Activity) -> Tuple[Activity, List[Question]]:
    # A vote is a one-question poll. /api/votes/{id} returns interaction.data.vote_options
    # as a "Label1/Label2" string; we expose them as options so default-pick picks one.
    body = await client.request_json(
        "GET", client.api_url("/api/votes/{}".format(activity.activity_id)))
    data = ((body or {}).get("interaction") or {}).get("data") or {} if isinstance(body, dict) else {}
    labels = [s for s in normalize_text(data.get("vote_options")).split("/") if s]
    options = tuple(Option(id=i + 1, content=label, sort=i) for i, label in enumerate(labels))
    if not options:
        return activity, []
    question = Question(subject_id=_as_int(activity.activity_id),
                        qtype=QuestionType.SINGLE, stem=normalize_text(data.get("topic")),
                        options=options)
    activity = Activity(
        activity_id=activity.activity_id, activity_type=activity.activity_type,
        course_id=activity.course_id, title=activity.title, scored=False,
        raw={"vote_labels": labels},
    )
    return activity, [question]


# type -> async fetch(client, activity) -> (activity, questions)
_FETCHERS = {
    ActivityType.EXAM: _fetch_exam,
    ActivityType.COURSEWARE_QUIZ: _fetch_courseware,
    ActivityType.QUESTIONNAIRE: _fetch_questionnaire,
    ActivityType.HOMEWORK: _fetch_homework,
    ActivityType.CLASSROOM_EXAM: _fetch_classroom,
    ActivityType.VOTE: _fetch_vote,
}


async def fetch_questions(client: Any, activity: Activity) -> Tuple[Activity, List[Question]]:
    fetcher = _FETCHERS.get(activity.activity_type)
    if fetcher is None:
        return activity, []
    return await fetcher(client, activity)


# ----------------------------------------------------------------------------- decide

async def decide_answers(
    session: Any, questions: List[Question], *, scored: bool, llm_config: Dict[str, Any],
) -> Tuple[Tuple[Answer, ...], AnswerSource]:
    plan = decide_paper(questions, scored=scored)
    answers: List[Answer] = list(plan.answers)
    for question in plan.pending:
        reply = await llm_answerer.answer_question(session, question, llm_config)
        answers.append(answer_from_llm_reply(question, reply))
    return tuple(answers), plan.source


# ----------------------------------------------------------------------------- submit (branch)

async def _submit_exam(client: Any, activity: Activity, answers: Tuple[Answer, ...]) -> Dict[str, Any]:
    body = {"exam_paper_instance_id": activity.paper_instance_id,
            "subjects": [a.to_payload() for a in answers]}
    return await client.request_json(
        "POST", client.api_url("/api/exams/{}/submissions".format(activity.activity_id)),
        json_payload=body, expected_status=(200, 201))


async def _submit_courseware(client: Any, activity: Activity, answers: Tuple[Answer, ...]) -> Dict[str, Any]:
    # body is {subjects:[...]} (a bare array 404/422s).
    return await client.request_json(
        "POST", client.api_url("/api/courseware-quiz/quiz/{}/submissions".format(activity.activity_id)),
        json_payload={"subjects": [a.to_payload() for a in answers]}, expected_status=(200, 201))


async def _submit_questionnaire(client: Any, activity: Activity, answers: Tuple[Answer, ...]) -> Dict[str, Any]:
    body = {"exam_paper_instance_id": activity.paper_instance_id,
            "subjects": [a.to_payload() for a in answers]}
    return await client.request_json(
        "POST", client.api_url("/api/questionnaire/{}/submissions".format(activity.activity_id)),
        json_payload=body, expected_status=(200, 201))


async def _submit_homework(client: Any, activity: Activity, answers: Tuple[Answer, ...]) -> Dict[str, Any]:
    text = answers[0].answer_text if answers else ""
    return await client.request_json(
        "POST", client.api_url("/api/course/activities/{}/submissions".format(activity.activity_id)),
        json_payload={"comment": text, "is_draft": False, "uploads": []}, expected_status=(200, 201))


async def _submit_classroom(client: Any, activity: Activity, answers: Tuple[Answer, ...]) -> Dict[str, Any]:
    # Classroom exam submits ONE subject per call (URL carries the subject id), but the
    # body is the same {exam_paper_instance_id, subjects:[...]} wrapper as exam — the
    # per-subject flat body 400s. (即時測驗 live submit is additionally gated by the
    # teacher's live-session state server-side; see README.)
    last: Dict[str, Any] = {}
    for answer in answers:
        body = {"exam_paper_instance_id": activity.paper_instance_id,
                "subjects": [answer.to_payload()]}
        resp = await client.request_json(
            "POST", client.api_url("/api/classroom/{}/submit/{}".format(activity.activity_id, answer.subject_id)),
            json_payload=body, expected_status=(200, 201))
        last = resp if isinstance(resp, dict) else last
    return last


async def _submit_vote(client: Any, activity: Activity, answers: Tuple[Answer, ...]) -> Dict[str, Any]:
    # ponytail: 即時投票 is a MOBILE-APP-EXCLUSIVE live interaction. Exhaustively verified
    # (v1.7-alpha.1): the web has no voting UI ("學生可在app中參與投票", results-only) and
    # never loads the cast chunk; PUT /api/votes/{id}/vote returns a server 500 for every
    # body/method/state tried from API *and* an authenticated student-browser fetch; the
    # cast body is in neither the decompiled app bundle nor any web bundle. Capturing it
    # needs the physical app's TLS traffic. Best-effort cast kept for completeness — it is
    # expected to fail outside the app; revisit in alpha.2 only with a real captured body.
    labels = (activity.raw or {}).get("vote_labels") or []
    picked = [labels[i - 1] for a in answers for i in a.answer_option_ids if 0 < i <= len(labels)]
    return await client.request_json(
        "PUT", client.api_url("/api/votes/{}/vote".format(activity.activity_id)),
        json_payload={"voted_options": picked}, expected_status=(200, 201))


_SUBMITTERS = {
    ActivityType.EXAM: _submit_exam,
    ActivityType.COURSEWARE_QUIZ: _submit_courseware,
    ActivityType.QUESTIONNAIRE: _submit_questionnaire,
    ActivityType.HOMEWORK: _submit_homework,
    ActivityType.CLASSROOM_EXAM: _submit_classroom,
    ActivityType.VOTE: _submit_vote,
}


# ----------------------------------------------------------------------------- public: prepare + submit

async def prepare_answer(
    client: Any, session: Any, activity: Activity, *, llm_config: Dict[str, Any],
) -> Optional[Dict[str, Any]]:
    """Fetch + decide, returning a cache-able prepared dict. Does NOT submit."""
    try:
        activity, questions = await fetch_questions(client, activity)
    except ctx.TronHttpError as exc:
        ctx.log(event="autoanswer", status="fetch_failed",
                message="取題失敗。", error=exc, extra={"activity_id": activity.activity_id})
        return None
    if not questions:
        return None
    scored = activity.scored and activity.activity_type not in _UNSCORED
    answers, source = await decide_answers(session, questions, scored=scored, llm_config=llm_config)
    return {
        "activity": activity,
        "questions": questions,
        "answers": answers,
        "source": source,
        "submitted": False,
    }


async def submit_prepared(
    client: Any, prepared: Dict[str, Any], *, resubmit_for_correct: bool = False,
) -> AnswerResult:
    activity: Activity = prepared["activity"]
    answers: Tuple[Answer, ...] = prepared["answers"]
    submitter = _SUBMITTERS.get(activity.activity_type)
    if submitter is None:
        return AnswerResult(ok=False, status="unsupported_type", activity_id=activity.activity_id)
    try:
        resp = await submitter(client, activity, answers)
    except ctx.TronHttpError as exc:
        ctx.log(event="autoanswer", status="submit_failed",
                message="作答提交失敗。", error=exc, extra={"activity_id": activity.activity_id})
        return AnswerResult(ok=False, status="submit_failed", activity_id=activity.activity_id,
                            message=normalize_text(exc))
    resp = resp if isinstance(resp, dict) else {}
    submission_id = resp.get("submission_id") or resp.get("id")
    prepared["submitted"] = True

    # Optional "submit -> read correct -> resubmit" pass (exam with retake allowed).
    if (resubmit_for_correct and activity.activity_type == ActivityType.EXAM
            and resp.get("allow_retake_exam") and submission_id):
        corrected = await _resubmit_exam_with_correct(client, activity, submission_id)
        if corrected is not None:
            resp = corrected
            submission_id = resp.get("submission_id") or submission_id

    return AnswerResult(
        ok=True, status="submitted", activity_id=activity.activity_id,
        submission_id=submission_id, score=resp.get("exam_score") or resp.get("score"),
        source=prepared.get("source", AnswerSource.NONE),
    )


async def _resubmit_exam_with_correct(
    client: Any, activity: Activity, submission_id: Any,
) -> Optional[Dict[str, Any]]:
    """Read the just-submitted exam's review (leaks correct answers), resubmit them."""
    review = await client.request_json(
        "GET", client.api_url("/api/exams/{}/submissions/{}".format(activity.activity_id, submission_id)),
        expected_status=(200,))
    correct = (review or {}).get("correct_answers_data", {}).get("correct_answers") or []
    if not correct:
        return None
    answers = tuple(
        Answer(subject_id=_as_int(c.get("subject_id")),
               answer_option_ids=tuple(_as_int(o) for o in (c.get("answer_option_ids") or [])))
        for c in correct if isinstance(c, dict)
    )
    fresh_activity, _questions = await _fetch_exam(client, activity)
    return await _submit_exam(client, fresh_activity, answers)

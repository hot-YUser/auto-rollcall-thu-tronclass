"""Auto-answer flow — ONE entry, dynamic branch by activity type (mirrors login_flow).

prepare_answer(): fetch the question(s), decide answers (replay leaked correct answer,
else LLM, else default pick) and CACHE them WITHOUT submitting. submit_prepared():
submit the cached answers, and — when the activity allows retake and the post-submit
review reveals the correct answer — resubmit the correct answer for a guaranteed pass
(controlled by autoanswer.resubmit_for_correct; validated live on exam, P0).
"""
from __future__ import annotations
import re
from typing import Any, Dict, List, Optional, Tuple

_BLANK_MARKER_RE = re.compile(r"__blank__|_{2,}|＿{2,}")

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover
    import runtime_context as ctx  # type: ignore

try:
    from troTHU import llm_answerer
    from troTHU.quiz_engine import answer_from_llm_reply, decide_paper, normalize_text, option_label
    from troTHU.quiz_models import (
        BLANK_TYPES, GROUP_TYPES, SKIP_TYPES, Activity, ActivityType, Answer, AnswerResult,
        AnswerSource, Option, Question, QuestionType,
    )
except ImportError:  # pragma: no cover - script execution fallback
    import llm_answerer  # type: ignore
    from quiz_engine import answer_from_llm_reply, decide_paper, normalize_text, option_label  # type: ignore
    from quiz_models import (  # type: ignore
        BLANK_TYPES, GROUP_TYPES, SKIP_TYPES, Activity, ActivityType, Answer, AnswerResult,
        AnswerSource, Option, Question, QuestionType,
    )


_QTYPE_MAP = {
    "single_selection": QuestionType.SINGLE, "single": QuestionType.SINGLE,
    "multiple_selection": QuestionType.MULTIPLE, "multiple": QuestionType.MULTIPLE,
    "true_or_false": QuestionType.TRUE_FALSE, "true_false": QuestionType.TRUE_FALSE,
    "fill_in_blank": QuestionType.FILL_BLANK, "fill_blank": QuestionType.FILL_BLANK,
    "completion": QuestionType.FILL_BLANK,
    "short_answer": QuestionType.SHORT_ANSWER, "essay": QuestionType.SHORT_ANSWER,
    "cloze": QuestionType.CLOZE,
    "matching": QuestionType.MATCHING,
    "media": QuestionType.MEDIA,
    "analysis": QuestionType.ANALYSIS,
    "paragraph_desc": QuestionType.SECTION,
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


def parse_question(raw: Dict[str, Any], parent_id: int = 0) -> Question:
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
    qtype = map_qtype(raw.get("type"))
    # Leaked correct text answers (fill/cloze/short), ordered by blank sort.
    raw_correct = raw.get("correct_answers")
    correct_texts: Tuple[str, ...] = ()
    if isinstance(raw_correct, list):
        ordered = sorted((c for c in raw_correct if isinstance(c, dict)), key=lambda c: _as_int(c.get("sort")))
        correct_texts = tuple(normalize_text(c.get("content")) for c in ordered)
    blank_count = _as_int(raw.get("answer_number"))
    if not blank_count and qtype in BLANK_TYPES:
        # cloze stores answer_number 0; the blanks are markers in the description.
        markers = len(_BLANK_MARKER_RE.findall(str(raw.get("description") or "")))
        blank_count = markers or len(correct_texts) or 1
    return Question(
        subject_id=_as_int(raw.get("id") or raw.get("subject_id")),
        qtype=qtype,
        stem=normalize_text(raw.get("description") or raw.get("content") or raw.get("stem")),
        options=tuple(options),
        point=normalize_text(raw.get("point")),
        blank_count=blank_count,
        correct_texts=correct_texts,
        parent_id=parent_id,
    )


def _matching_sub_options(container_options: Any, sub_index: int, sub_count: int) -> List[Dict[str, Any]]:
    """Assign one left item (sub) its OWN right-side options.

    TronClass puts ALL right options on the matching container (one DISTINCT id per
    (left-item, right-choice) pair — e.g. each left item gets its own "cat"/"dog" ids)
    and returns the subs with empty options. The client assigns each sub a consecutive
    block of the container options ordered by id: sub i -> options[i*k:(i+1)*k] where
    k = options / sub_count. Submitting another sub's same-content id scores WRONG, so the
    block must match the sub. ponytail: assumes the server emits options in sub-creation id
    order (holds with option-shuffle off); falls back to all options if it can't chunk."""
    opts = sorted((o for o in (container_options or []) if isinstance(o, dict)),
                  key=lambda o: _as_int(o.get("id")))
    k = (len(opts) // sub_count) if sub_count else 0
    if k <= 0:
        return opts
    return opts[sub_index * k:(sub_index + 1) * k]


def parse_questions(raw_subjects: Any) -> List[Question]:
    """Flatten a paper's subjects into answerable questions: expand 題組/cloze/matching
    sub_subjects, drop non-answerable sections (paragraph_desc).

    matching: each sub is a LEFT item answered as a single_selection. The right options
    live on the CONTAINER (a distinct id per (left,right) pair) and the subs come back
    empty, so we assign each sub its own id-ordered block of container options
    (_matching_sub_options) and tag it with parent_id = the container id for per-pair
    scoring. If a sub already carries its own options (some tenants), we keep them.
    Fallback: a degenerate container with no sub_subjects is parsed as-is."""
    out: List[Question] = []
    for raw in raw_subjects or []:
        if not isinstance(raw, dict):
            continue
        qtype = map_qtype(raw.get("type"))
        if qtype in SKIP_TYPES:
            continue
        subs = [s for s in (raw.get("sub_subjects") or [])
                if isinstance(s, dict) and map_qtype(s.get("type")) not in SKIP_TYPES]
        if qtype == QuestionType.MATCHING:
            parent_id = _as_int(raw.get("id") or raw.get("subject_id"))
            if not subs:
                out.append(parse_question(raw))  # degenerate: no left items
                continue
            subs = sorted(subs, key=lambda s: _as_int(s.get("id")))
            for i, sub in enumerate(subs):
                block = sub.get("options") or _matching_sub_options(raw.get("options"), i, len(subs))
                out.append(parse_question(dict(sub, options=block, type="single_selection"),
                                          parent_id=parent_id))
            continue
        if qtype in GROUP_TYPES or qtype == QuestionType.CLOZE or subs:
            for sub in subs:
                out.append(parse_question(sub))
            continue
        out.append(parse_question(raw))
    return out


# ----------------------------------------------------------------------------- fetch (branch)

async def _fetch_exam(client: Any, activity: Activity) -> Tuple[Activity, List[Question]]:
    paper = await client.request_json(
        "GET", client.api_url("/api/exams/{}/distribute".format(activity.activity_id)))
    paper = paper if isinstance(paper, dict) else {}
    questions = parse_questions(paper.get("subjects"))
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
    questions = parse_questions(subjects)
    return activity, questions


async def _fetch_questionnaire(client: Any, activity: Activity) -> Tuple[Activity, List[Question]]:
    # Mirrors exam: distribute returns the paper (instance id + subjects). Unscored.
    paper = await client.request_json(
        "GET", client.api_url("/api/questionnaire/{}/distribute".format(activity.activity_id)))
    paper = paper if isinstance(paper, dict) else {}
    questions = parse_questions(paper.get("subjects"))
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
    questions = parse_questions(paper.get("subjects"))
    activity = Activity(
        activity_id=activity.activity_id, activity_type=activity.activity_type,
        course_id=activity.course_id, title=activity.title,
        paper_instance_id=paper.get("exam_paper_instance_id"), scored=True, raw=activity.raw,
    )
    return activity, questions


def _vote_labels(data: Dict[str, Any]) -> List[str]:
    """Option display texts ordered by letter. The cast sends the LETTER (A/B/C), so the
    display text is only for the LLM/log; letters are derived from option position.
    Real shape: interaction.data.vote_option_items is a letter->text map {"A":"..","B":".."};
    vote_options is the option COUNT (not a slash-joined string — that was an old guess)."""
    items = data.get("vote_option_items")
    if isinstance(items, dict) and items:
        return [normalize_text(items[k]) for k in sorted(items.keys())]
    count = data.get("vote_options")
    if isinstance(count, int) and count > 0:
        return [""] * count  # letters only; texts unknown
    return [s for s in normalize_text(count).split("/") if s]  # legacy fallback


async def _fetch_vote(client: Any, activity: Activity) -> Tuple[Activity, List[Question]]:
    # A vote is a one-question poll. We expose options so default-pick picks one; the
    # picked option's POSITION maps to the cast letter (A/B/C) in _submit_vote.
    body = await client.request_json(
        "GET", client.api_url("/api/votes/{}".format(activity.activity_id)))
    data = ((body or {}).get("interaction") or {}).get("data") or {} if isinstance(body, dict) else {}
    labels = _vote_labels(data)
    if not labels:
        return activity, []
    # id = 1-based position so the option is never falsy; letter = option_label(id - 1).
    options = tuple(Option(id=i + 1, content=lbl or option_label(i), sort=i)
                    for i, lbl in enumerate(labels))
    qtype = QuestionType.MULTIPLE if "multi" in normalize_text(data.get("vote_type")) else QuestionType.SINGLE
    question = Question(subject_id=_as_int(activity.activity_id),
                        qtype=qtype, stem=normalize_text(data.get("topic")), options=options)
    activity = Activity(
        activity_id=activity.activity_id, activity_type=activity.activity_type,
        course_id=activity.course_id, title=activity.title, scored=False, raw=activity.raw,
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
    # examFinished (camelCase, per the real submit form class `me`) marks the paper DONE rather
    # than a partial/draft save. We worked without it on this tenant (server defaulted finished),
    # but strict tenants may otherwise leave the submission ungraded — so send it explicitly.
    body = {"exam_paper_instance_id": activity.paper_instance_id,
            "subjects": [a.to_payload() for a in answers],
            "examFinished": True}
    return await client.request_json(
        "POST", client.api_url("/api/exams/{}/submissions".format(activity.activity_id)),
        json_payload=body, expected_status=(200, 201))


def _courseware_payload(answer: Answer) -> Dict[str, Any]:
    """courseware "AI Quiz" submit element (decompiled AiQuizFormSubject): carries the
    question `type` and uses `answers` for blanks — NOT the exam-style scalar `answer`."""
    return {
        "subject_id": answer.subject_id,
        "type": answer.answer_type,
        "answer_option_ids": list(answer.answer_option_ids),
        "answers": [{"sort": s, "content": c} for s, c in answer.blanks],
    }


async def _submit_courseware(client: Any, activity: Activity, answers: Tuple[Answer, ...]) -> Dict[str, Any]:
    # Whole-paper submit; wrapper key is "subjects_answers" (AiQuizForm.subjectsAnswers),
    # NOT "subjects" — that belongs to the GET-subjects response / exam submit.
    return await client.request_json(
        "POST", client.api_url("/api/courseware-quiz/quiz/{}/submissions".format(activity.activity_id)),
        json_payload={"subjects_answers": [_courseware_payload(a) for a in answers]},
        expected_status=(200, 201))


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
        json_payload={"comment": text, "is_draft": False, "slides": [], "uploads": []},
        expected_status=(200, 201))


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
    # Real cast contract (from app webview chunk chunk-common-9627c25b): POST with
    # body {"votes": ["A", ...]} — the selected option LETTERS (1 for single/judgment,
    # N for multi). The earlier alpha.1 500s were our own bug: PUT + {voted_options:[text]}.
    # Failures (not ongoing / already voted) come back as a server msg, surfaced via the
    # raised TronHttpError, not silently dropped.
    letters: List[str] = []
    for answer in answers:
        for oid in answer.answer_option_ids:
            label = option_label(oid - 1) if oid >= 1 else ""
            if label and label not in letters:
                letters.append(label)
    return await client.request_json(
        "POST", client.api_url("/api/votes/{}/vote".format(activity.activity_id)),
        json_payload={"votes": letters}, expected_status=(200, 201))


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
    # Gated on allow_retake_exam: a single-attempt exam (作答次數=1) reports it false, so
    # this never fires and the one attempt is never spent on a retake. Live-verified on a
    # strictest-settings exam (正式/1次/不公布答案). Wrapped so a retake hiccup can never
    # undo the successful first submission — we still report that submission as submitted.
    if (resubmit_for_correct and activity.activity_type == ActivityType.EXAM
            and resp.get("allow_retake_exam") and submission_id):
        try:
            corrected = await _resubmit_exam_with_correct(client, activity, submission_id, answers)
        except ctx.TronHttpError as exc:
            corrected = None
            ctx.log(event="autoanswer", status="resubmit_skipped",
                    message="重交正解未完成，保留首次作答。", error=exc,
                    extra={"activity_id": activity.activity_id})
        if corrected is not None:
            resp = corrected
            submission_id = resp.get("submission_id") or submission_id

    return AnswerResult(
        ok=True, status="submitted", activity_id=activity.activity_id,
        submission_id=submission_id, score=resp.get("exam_score") or resp.get("score"),
        source=prepared.get("source", AnswerSource.NONE),
    )


async def _resubmit_exam_with_correct(
    client: Any, activity: Activity, submission_id: Any, prior_answers: Tuple[Answer, ...] = (),
) -> Optional[Dict[str, Any]]:
    """Read the just-submitted exam's review (leaks correct answers) and resubmit them.

    The review's correct_answers entry (decompiled class F) carries the correct value per
    AUTO-SCORED subject: `answer_option_ids` (choice), `correct_answers`=[{sort,content}]
    (fill/cloze blanks) and `answer` (short-answer text) — but NOT parent_id, and nothing at
    all for un-leaked types. So we OVERLAY the leak onto the first-pass answers (which already
    carry parent_id/blanks for matching/fill) instead of rebuilding the paper from the review
    alone — otherwise non-choice subjects would be wiped to empty and score 0 on resubmit."""
    review = await client.request_json(
        "GET", client.api_url("/api/exams/{}/submissions/{}".format(activity.activity_id, submission_id)),
        expected_status=(200,))
    correct = (review or {}).get("correct_answers_data", {}).get("correct_answers") or []
    if not correct:
        return None
    by_id: Dict[int, Answer] = {a.subject_id: a for a in prior_answers}
    for c in correct:
        if not isinstance(c, dict):
            continue
        sid = _as_int(c.get("subject_id"))
        base = by_id.get(sid)
        option_ids = tuple(_as_int(o) for o in (c.get("answer_option_ids") or []))
        blanks = tuple((_as_int(b.get("sort")), normalize_text(b.get("content")))
                       for b in (c.get("correct_answers") or []) if isinstance(b, dict))
        answer_text = normalize_text(c.get("answer"))
        by_id[sid] = Answer(
            subject_id=sid,
            answer_option_ids=option_ids or (base.answer_option_ids if base else ()),
            answer_text=answer_text or (base.answer_text if base else ""),
            blanks=blanks or (base.blanks if base else ()),
            parent_id=base.parent_id if base else _as_int(c.get("parent_id")),
            answer_type=base.answer_type if base else "",
        )
    fresh_activity, _questions = await _fetch_exam(client, activity)
    return await _submit_exam(client, fresh_activity, tuple(by_id.values()))

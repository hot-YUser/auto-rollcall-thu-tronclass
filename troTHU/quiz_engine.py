from __future__ import annotations
import re
from typing import Any, Iterable, List, Tuple

try:
    from troTHU.quiz_models import Answer, AnswerPlan, AnswerSource, Question, QuestionType
except ImportError:  # pragma: no cover - script execution fallback
    from quiz_models import Answer, AnswerPlan, AnswerSource, Question, QuestionType


def normalize_text(value: Any) -> str:
    return str(value or "").strip()


def option_label(index: int) -> str:
    """0 -> 'A', 1 -> 'B', ... (wraps to AA past Z, which real papers never need)."""
    if index < 26:
        return chr(ord("A") + index)
    return "A" + chr(ord("A") + (index % 26))


def _default_answer(question: Question, pick: str) -> Answer:
    if not question.options:
        return Answer(subject_id=question.subject_id)
    option = question.options[-1] if pick == "last" else question.options[0]
    return Answer(subject_id=question.subject_id, answer_option_ids=(option.id,))


def decide_paper(
    questions: Iterable[Question],
    *,
    scored: bool = True,
    default_pick: str = "first",
) -> AnswerPlan:
    """Pure decision: split a paper into already-decided answers vs LLM-pending questions.

    - leaked correct answer  -> REPLAY (use it)
    - unscored (vote/questionnaire) -> DEFAULT (pick an option, correctness irrelevant)
    - scored selection w/o answer  -> pending LLM
    """
    answers: List[Answer] = []
    pending: List[Question] = []
    saw_replay = saw_default = False

    for question in questions:
        if question.correct_option_ids:
            answers.append(Answer(question.subject_id, question.correct_option_ids))
            saw_replay = True
        elif not scored:
            answers.append(_default_answer(question, default_pick))
            saw_default = True
        else:
            pending.append(question)

    if pending:
        source = AnswerSource.LLM
    elif saw_replay and not saw_default:
        source = AnswerSource.REPLAY
    elif saw_default and not saw_replay:
        source = AnswerSource.DEFAULT
    elif saw_replay:
        source = AnswerSource.REPLAY
    else:
        source = AnswerSource.NONE
    return AnswerPlan(source=source, answers=tuple(answers), pending=tuple(pending))


def parse_choice_labels(text: str, option_count: int) -> List[str]:
    """Extract valid option letters (A..) from an LLM reply, in order, de-duplicated.

    Match only ISOLATED UPPERCASE letters ("answer is B", "A, C") so prose words
    ("and" -> D, "answer" -> A) don't leak in. Fall back to a bare compact run
    ("AC", a lowercase "b") when no isolated uppercase letter is present.
    """
    if option_count <= 0:
        return []
    valid = {option_label(i) for i in range(option_count)}
    text = normalize_text(text)
    found: List[str] = []
    for ch in re.findall(r"(?<![A-Za-z])([A-Z])(?![A-Za-z])", text):
        if ch in valid and ch not in found:
            found.append(ch)
    if found:
        return found
    compact = re.sub(r"[^A-Za-z]", "", text).upper()
    if compact and len(compact) <= option_count and all(ch in valid for ch in compact):
        for ch in compact:
            if ch not in found:
                found.append(ch)
    return found


def answer_from_labels(question: Question, labels: Iterable[str]) -> Answer:
    """Map LLM option letters back to a concrete Answer (single keeps only the first)."""
    indices: List[int] = []
    for label in labels:
        idx = ord(normalize_text(label).upper()[:1] or "?") - ord("A")
        if 0 <= idx < len(question.options) and idx not in indices:
            indices.append(idx)
    if question.qtype in (QuestionType.SINGLE, QuestionType.TRUE_FALSE):
        indices = indices[:1]
    option_ids: Tuple[int, ...] = tuple(question.options[i].id for i in indices)
    return Answer(subject_id=question.subject_id, answer_option_ids=option_ids)


def answer_from_llm_reply(question: Question, reply_text: str) -> Answer:
    """Selection questions -> map letters; free-text questions -> use the reply verbatim."""
    if question.is_selection and question.options:
        labels = parse_choice_labels(reply_text, len(question.options))
        return answer_from_labels(question, labels)
    return Answer(subject_id=question.subject_id, answer_text=normalize_text(reply_text))

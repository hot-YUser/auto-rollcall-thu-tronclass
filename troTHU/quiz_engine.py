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


def _mk(question: Question, **kw: Any) -> Answer:
    """Build an Answer carrying the question's parent_id (matching) and type (courseware).
    Both default-empty for top-level non-matching questions, so other payloads are unchanged."""
    return Answer(subject_id=question.subject_id, parent_id=question.parent_id,
                  answer_type=question.qtype.value, **kw)


def _replay_answer(question: Question) -> Answer:
    """Build an Answer from the server-leaked correct answer, or None if nothing leaked.

    Choice -> correct option ids; fill/cloze -> per-blank texts; short -> answer text.
    """
    if question.correct_option_ids:
        return _mk(question, answer_option_ids=question.correct_option_ids)
    if question.correct_texts:
        if question.is_blank:
            return _mk(question, blanks=tuple((i, t) for i, t in enumerate(question.correct_texts)))
        return _mk(question, answer_text=question.correct_texts[0])
    return None  # type: ignore[return-value]


def decide_paper(questions: Iterable[Question]) -> AnswerPlan:
    """Pure decision: split a paper into already-decided REPLAY answers vs LLM-pending questions.

    - leaked correct answer -> REPLAY (use it)
    - everything else -> pending LLM. EVERY question (scored or not) gets a real answer; we no
      longer blind-pick an option for unscored questionnaires/votes — the LLM answers them too.
    """
    answers: List[Answer] = []
    pending: List[Question] = []
    saw_replay = False

    for question in questions:
        replay = _replay_answer(question)
        if replay is not None:
            answers.append(replay)
            saw_replay = True
        else:
            pending.append(question)

    if pending:
        source = AnswerSource.LLM
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
    return _mk(question, answer_option_ids=option_ids)


def parse_blank_answers(text: str, count: int) -> List[str]:
    """Split an LLM fill/cloze reply into per-blank answers (we prompt for ' ||| ' between blanks).

    Falls back to newlines, then to the whole reply as a single blank. Pads/truncates to `count`.
    """
    text = normalize_text(text)
    parts = [p.strip() for p in re.split(r"\s*\|\|\|\s*|\n+", text) if p.strip()]
    if not parts and text:
        parts = [text]
    if count > 0:
        parts = (parts + [""] * count)[:count]
    return parts


def answer_from_blanks(question: Question, reply_text: str) -> Answer:
    parts = parse_blank_answers(reply_text, question.blank_count or 0)
    return _mk(question, blanks=tuple((i, p) for i, p in enumerate(parts)))


def answer_from_llm_reply(question: Question, reply_text: str) -> Answer:
    """Map the LLM reply to an Answer by question type:
    selection/matching -> option ids; fill/cloze -> per-blank texts; else -> reply verbatim."""
    if (question.is_selection or question.qtype == QuestionType.MATCHING) and question.options:
        labels = parse_choice_labels(reply_text, len(question.options))
        return answer_from_labels(question, labels)
    if question.is_blank:
        return answer_from_blanks(question, reply_text)
    return _mk(question, answer_text=normalize_text(reply_text))


# ---------------------------------------------------------------- canonical rendering (for display)

def format_answer_canonical(question: Question, answer: Answer) -> str:
    """Render ONE decided answer back in the canonical LLM output format, so the console always
    shows answers the same way: choice/matching -> option letters (A / A,C); fill/cloze -> blanks
    joined by ' ||| '; short -> the text. Inverse of answer_from_llm_reply, for human display."""
    if (question.is_selection or question.qtype == QuestionType.MATCHING) and question.options:
        index_by_id = {opt.id: i for i, opt in enumerate(question.options)}
        letters = [option_label(index_by_id[oid]) for oid in answer.answer_option_ids if oid in index_by_id]
        return ",".join(letters)
    if question.is_blank or answer.blanks:
        return " ||| ".join(content for _sort, content in answer.blanks)
    return normalize_text(answer.answer_text)


def format_paper_canonical(questions: Iterable[Question], answers: Iterable[Answer]) -> str:
    """One numbered line per question in canonical format, e.g. '1. B\\n2. A,C\\n3. 巴黎'."""
    by_id = {a.subject_id: a for a in answers}
    lines: List[str] = []
    for index, question in enumerate(questions, 1):
        answer = by_id.get(question.subject_id)
        rendered = format_answer_canonical(question, answer) if answer is not None else ""
        lines.append("{}. {}".format(index, rendered or "(空)"))
    return "\n".join(lines)

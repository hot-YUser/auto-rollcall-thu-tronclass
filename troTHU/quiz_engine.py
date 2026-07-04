from __future__ import annotations
import re
from typing import Any, Dict, Iterable, List, Tuple

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


# 題型 → 中文標籤（取自 README〈支援的題型〉），供 format_paper_canonical 分組顯示用。
_QTYPE_LABEL_ZH = {
    QuestionType.SINGLE: "單選",
    QuestionType.MULTIPLE: "多選",
    QuestionType.TRUE_FALSE: "是非",
    QuestionType.FILL_BLANK: "填空",
    QuestionType.SHORT_ANSWER: "簡答",
    QuestionType.CLOZE: "克漏字",
    QuestionType.MATCHING: "配對",
    QuestionType.MEDIA: "題組",
    QuestionType.ANALYSIS: "綜合",
}


def _qtype_label(qtype: QuestionType) -> str:
    return _QTYPE_LABEL_ZH.get(qtype) or normalize_text(getattr(qtype, "value", qtype)) or "其他"


def format_paper_canonical(questions: Iterable[Question], answers: Iterable[Answer]) -> str:
    """One line PER QUESTION TYPE (題型) so many questions don't wall the console: same-type answers
    across the whole paper collapse onto a single '題型：1. A  2. C' line (types in first-seen order,
    each cell keeps its 1-based question number). e.g. '單選：1. B  2. A,C\\n簡答：3. 巴黎'."""
    by_id = {a.subject_id: a for a in answers}
    groups: Dict[str, List[str]] = {}  # label -> ["1. B", "2. A,C"] in paper order
    for index, question in enumerate(questions, 1):
        answer = by_id.get(question.subject_id)
        rendered = format_answer_canonical(question, answer) if answer is not None else ""
        groups.setdefault(_qtype_label(question.qtype), []).append("{}. {}".format(index, rendered or "(空)"))
    return "\n".join("{}：{}".format(label, "  ".join(cells)) for label, cells in groups.items())

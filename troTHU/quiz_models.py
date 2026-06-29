from __future__ import annotations
from dataclasses import dataclass, field
from enum import Enum
from typing import Any, Dict, Optional, Tuple


class ActivityType(str, Enum):
    """Question-bearing activity types the auto-answer subsystem handles."""
    NONE = "none"
    EXAM = "exam"
    CLASSROOM_EXAM = "classroom_exam"
    COURSEWARE_QUIZ = "courseware_quiz"
    QUESTIONNAIRE = "questionnaire"
    VOTE = "vote"
    HOMEWORK = "homework"
    UNKNOWN = "unknown"


class QuestionType(str, Enum):
    # Values are the TronClass API type strings (decompiled enum `s`).
    SINGLE = "single_selection"
    MULTIPLE = "multiple_selection"
    TRUE_FALSE = "true_or_false"
    FILL_BLANK = "fill_in_blank"
    SHORT_ANSWER = "short_answer"
    CLOZE = "cloze"
    MATCHING = "matching"
    MEDIA = "media"            # 題組/聽力 — carries sub_subjects
    ANALYSIS = "analysis"      # 綜合題 — carries sub_subjects
    SECTION = "paragraph_desc"  # 敘述段 — not answerable, skip
    UNKNOWN = "unknown"


class AnswerSource(str, Enum):
    """How an answer was decided. REPLAY = correct answer was leaked to us; LLM = the model answered."""
    NONE = "none"
    REPLAY = "replay"
    LLM = "llm"


SELECTION_TYPES = (QuestionType.SINGLE, QuestionType.MULTIPLE, QuestionType.TRUE_FALSE)
# Free-text blank answers go in the submission's `answers` array (one per blank).
BLANK_TYPES = (QuestionType.FILL_BLANK, QuestionType.CLOZE)
# Parent questions that carry sub_subjects (answered as their flattened children).
GROUP_TYPES = (QuestionType.MEDIA, QuestionType.ANALYSIS)
# Not answerable — a section/description; the auto-answer skips it entirely.
SKIP_TYPES = (QuestionType.SECTION,)


@dataclass(frozen=True)
class Option:
    id: int
    content: str = ""
    is_answer: Optional[bool] = None
    sort: int = 0


@dataclass(frozen=True)
class Question:
    subject_id: int
    qtype: QuestionType = QuestionType.UNKNOWN
    stem: str = ""
    options: Tuple[Option, ...] = field(default_factory=tuple)
    point: str = ""
    blank_count: int = 0
    # Correct text(s) the server leaked (fill/cloze/short): per-blank, sorted.
    correct_texts: Tuple[str, ...] = field(default_factory=tuple)
    # matching: the container subject id this sub (a left item) belongs to. 0 = top-level.
    parent_id: int = 0

    @property
    def correct_option_ids(self) -> Tuple[int, ...]:
        """Option ids the server told us are correct (only present when answers leak)."""
        return tuple(opt.id for opt in self.options if opt.is_answer is True)

    @property
    def has_leaked_answer(self) -> bool:
        return (any(opt.is_answer is not None for opt in self.options) and bool(self.correct_option_ids)) \
            or bool(self.correct_texts)

    @property
    def is_selection(self) -> bool:
        return self.qtype in SELECTION_TYPES

    @property
    def is_blank(self) -> bool:
        return self.qtype in BLANK_TYPES


@dataclass(frozen=True)
class Activity:
    activity_id: str
    activity_type: ActivityType = ActivityType.UNKNOWN
    course_id: str = ""
    title: str = ""
    paper_instance_id: Any = None
    raw: Dict[str, Any] = field(default_factory=dict)


@dataclass(frozen=True)
class Answer:
    subject_id: int
    answer_option_ids: Tuple[int, ...] = field(default_factory=tuple)
    answer_text: str = ""
    # Per-blank answers for fill_in_blank / cloze: (sort, content), in blank order.
    blanks: Tuple[Tuple[int, str], ...] = field(default_factory=tuple)
    # matching: container subject id (for per-pair scoring). 0 = top-level question.
    parent_id: int = 0
    # The question's API type string (e.g. "single_selection"); courseware submit needs it.
    answer_type: str = ""

    def to_payload(self) -> Dict[str, Any]:
        payload: Dict[str, Any] = {
            "subject_id": self.subject_id,
            "answer_option_ids": list(self.answer_option_ids),
            "answer": self.answer_text,
        }
        # The submission model carries a separate `answers` array (decompiled class F);
        # fill_in_blank / cloze put one entry per blank here, not in `answer`.
        if self.blanks:
            payload["answers"] = [{"sort": s, "content": c} for s, c in self.blanks]
        # matching: link the sub (left item) to its container so the server scores the
        # pair. Emitted ONLY when set, so non-matching payloads stay byte-identical to the
        # 9 already-validated exam/classroom/questionnaire types.
        if self.parent_id:
            payload["parent_id"] = self.parent_id
        return payload


@dataclass(frozen=True)
class AnswerPlan:
    source: AnswerSource
    answers: Tuple[Answer, ...] = field(default_factory=tuple)
    # Questions still needing an LLM call (source == LLM); runtime fills them.
    pending: Tuple[Question, ...] = field(default_factory=tuple)


@dataclass(frozen=True)
class AnswerResult:
    ok: bool
    status: str
    activity_id: str = ""
    submission_id: Any = None
    score: Any = None
    source: AnswerSource = AnswerSource.NONE
    message: str = ""
    data: Dict[str, Any] = field(default_factory=dict)
    # The answers ACTUALLY submitted (post-resubmit if a correct-answer resubmit fired), so the
    # console can show the FINAL answer. Empty falls back to the prepared answers at the call site.
    final_answers: Tuple["Answer", ...] = field(default_factory=tuple)

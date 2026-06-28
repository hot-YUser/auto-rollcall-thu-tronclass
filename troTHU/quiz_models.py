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
    SINGLE = "single_selection"
    MULTIPLE = "multiple_selection"
    TRUE_FALSE = "true_false"
    FILL_BLANK = "fill_blank"
    SHORT_ANSWER = "short_answer"
    UNKNOWN = "unknown"


class AnswerSource(str, Enum):
    """How an answer was decided. REPLAY = correct answer was leaked to us."""
    NONE = "none"
    REPLAY = "replay"
    LLM = "llm"
    DEFAULT = "default"


SELECTION_TYPES = (QuestionType.SINGLE, QuestionType.MULTIPLE, QuestionType.TRUE_FALSE)


@dataclass(frozen=True)
class Option:
    id: int
    content: str = ""
    is_answer: Optional[bool] = None
    sort: int = 0
    image_urls: Tuple[str, ...] = field(default_factory=tuple)


@dataclass(frozen=True)
class Question:
    subject_id: int
    qtype: QuestionType = QuestionType.UNKNOWN
    stem: str = ""
    options: Tuple[Option, ...] = field(default_factory=tuple)
    point: str = ""
    image_urls: Tuple[str, ...] = field(default_factory=tuple)

    @property
    def correct_option_ids(self) -> Tuple[int, ...]:
        """Option ids the server told us are correct (only present when answers leak)."""
        return tuple(opt.id for opt in self.options if opt.is_answer is True)

    @property
    def has_leaked_answer(self) -> bool:
        return any(opt.is_answer is not None for opt in self.options) and bool(self.correct_option_ids)

    @property
    def is_selection(self) -> bool:
        return self.qtype in SELECTION_TYPES


@dataclass(frozen=True)
class Activity:
    activity_id: str
    activity_type: ActivityType = ActivityType.UNKNOWN
    course_id: str = ""
    title: str = ""
    paper_instance_id: Any = None
    allow_retake: bool = False
    scored: bool = True
    raw: Dict[str, Any] = field(default_factory=dict)


@dataclass(frozen=True)
class Answer:
    subject_id: int
    answer_option_ids: Tuple[int, ...] = field(default_factory=tuple)
    answer_text: str = ""

    def to_payload(self) -> Dict[str, Any]:
        return {
            "subject_id": self.subject_id,
            "answer_option_ids": list(self.answer_option_ids),
            "answer": self.answer_text,
        }


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

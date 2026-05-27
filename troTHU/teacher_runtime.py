"""Teacher-side TronClass discovery and guarded action helpers."""

from __future__ import annotations

import hashlib
import inspect
import json
import mimetypes
import re
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any, Mapping, Sequence
from urllib.parse import parse_qsl, quote, unquote, urlencode, urlparse, urlunparse

from troTHU.course_discovery import normalize_text, parse_courses, sanitize_text

try:  # pragma: no cover - exercised when aiohttp is installed
    import aiohttp
except ModuleNotFoundError:  # pragma: no cover
    aiohttp = None  # type: ignore[assignment]


TEACHER_ROLE_NAMES = {
    "admin",
    "assistant",
    "course_admin",
    "instructor",
    "teacher",
    "teaching_assistant",
}
STUDENT_ROLE_NAMES = {"auditor", "learner", "student"}

TEACHER_PERMISSION_FLAGS = (
    "allow_admin_update_basic_info",
    "allow_update_basic_info",
    "allowed_to_invite_assistant",
    "allowed_to_invite_student",
)

ALWAYS_REDACT_KEYS = {
    "authorization",
    "cookie",
    "email",
    "file_key",
    "passwd",
    "password",
    "portfolio_url",
    "secret",
    "session",
    "token",
    "upload_url",
    "uptoken",
    "user_no",
}
ROLLCALL_SECRET_KEYS = {
    "altitude",
    "beacon_nonce",
    "latitude",
    "longitude",
    "number_code",
}
SENSITIVE_KEY_PARTS = (
    "access_token",
    "auth_header",
    "avatar",
    "bot_token",
    "cookie",
    "refresh_token",
    "session_id",
)


COURSE_DETAIL_FIELDS = ",".join(
    (
        "id",
        "name",
        "display_name",
        "course_code",
        "code",
        "roles",
        "role",
        "course_role",
        "course_roles",
        "instructors",
        "teachers",
        "semester",
        "klass",
        "department",
        "org",
        "allow_admin_update_basic_info",
        "allow_update_basic_info",
        "allowed_to_invite_assistant",
        "allowed_to_invite_student",
        "allowed_to_join_course",
    )
)
ENROLLMENT_FIELDS = (
    "id,roles,user(id,name,nickname,user_no,email,grade(id,name),klass(id,name),"
    "department(id,name),org(id,name)),seat_number,total_score,published,data"
)


@dataclass(frozen=True)
class TeacherEndpointSpec:
    name: str
    path_template: str
    count_keys: tuple[str, ...] = ()
    feature: str = ""

    def path(self, course_id: Any, *, limit: int = 20) -> str:
        page_size = max(1, int(limit or 20))
        return self.path_template.format(course_id=str(course_id).strip(), page_size=page_size)


TEACHER_COURSE_ENDPOINTS: tuple[TeacherEndpointSpec, ...] = (
    TeacherEndpointSpec(
        "course_detail",
        "/api/courses/{course_id}?"
        + urlencode({"fields": COURSE_DETAIL_FIELDS}),
        ("id",),
        "course",
    ),
    TeacherEndpointSpec(
        "enrollments",
        "/api/course/{course_id}/enrollments?"
        + urlencode({"fields": ENROLLMENT_FIELDS}),
        ("enrollments",),
        "roster",
    ),
    TeacherEndpointSpec(
        "course_enrollments_index",
        "/api/course/enrollments/?course_id={course_id}&"
        + urlencode({"fields": ENROLLMENT_FIELDS}),
        ("enrollments", "items", "data"),
        "roster",
    ),
    TeacherEndpointSpec(
        "score_book",
        "/api/enrollments/score-book?course_id={course_id}",
        (),
        "score",
    ),
    TeacherEndpointSpec(
        "score_status",
        "/api/courses/{course_id}/score-status",
        (),
        "score",
    ),
    TeacherEndpointSpec(
        "announce_score_settings",
        "/api/courses/{course_id}/announce-score-settings",
        (),
        "score",
    ),
    TeacherEndpointSpec(
        "custom_score_items",
        "/api/courses/{course_id}/custom-score-items",
        ("custom_score_items", "score_items", "items"),
        "score",
    ),
    TeacherEndpointSpec(
        "score_ranks",
        "/api/courses/{course_id}/score-ranks",
        ("score_ranks", "ranks"),
        "score",
    ),
    TeacherEndpointSpec(
        "edu_score_rate",
        "/api/edu-scores/get-course-score-rate/{course_id}",
        (),
        "score",
    ),
    TeacherEndpointSpec(
        "edu_score_submit_time",
        "/api/edu-scores/get-submit-time/{course_id}",
        (),
        "score",
    ),
    TeacherEndpointSpec(
        "edu_score_submit_logs",
        "/api/edu-scores/get-submit-logs/{course_id}",
        ("logs", "submit_logs"),
        "score",
    ),
    TeacherEndpointSpec(
        "rubrics",
        "/api/rubrics?fields=id,name,conditions,engage_number,updated_at,created_at",
        ("rubrics", "items", "data"),
        "rubric",
    ),
    TeacherEndpointSpec(
        "rubrics_with_resource",
        "/api/rubrics-with-resource?no-intercept=true&fields=id,name,conditions,created_by,is_shared_rubric",
        ("rubrics", "items", "data"),
        "rubric",
    ),
    TeacherEndpointSpec(
        "rubrics_template",
        "/api/rubrics/template?no-intercept=true",
        ("templates", "rubrics", "items", "data"),
        "rubric",
    ),
    TeacherEndpointSpec(
        "course_modules",
        "/api/courses/{course_id}/modules",
        ("modules",),
        "course_content",
    ),
    TeacherEndpointSpec(
        "course_template_setting",
        "/api/course/{course_id}/template-setting",
        (),
        "course_content",
    ),
    TeacherEndpointSpec(
        "course_activity_publish_setting",
        "/api/course/{course_id}/activity-publish-setting",
        (),
        "course_content",
    ),
    TeacherEndpointSpec(
        "course_completion_criteria",
        "/api/courses/{course_id}/completion-criteria",
        (),
        "course_content",
    ),
    TeacherEndpointSpec(
        "course_packages",
        "/api/courses/{course_id}/course-package?page=1&page_size={page_size}",
        ("course_packages", "items", "data"),
        "course_package",
    ),
    TeacherEndpointSpec(
        "course_package_status",
        "/api/courses/{course_id}/course-package/status",
        (),
        "course_package",
    ),
    TeacherEndpointSpec(
        "course_activities",
        "/api/courses/{course_id}/activities?sub_course_id=",
        ("activities",),
        "course_content",
    ),
    TeacherEndpointSpec(
        "course_activity_reads_for_user",
        "/api/course/{course_id}/activity-reads-for-user",
        ("activity_reads", "items", "data"),
        "course_content",
    ),
    TeacherEndpointSpec(
        "course_students_activity_reads",
        "/api/course/{course_id}/students/activity-reads?page=1&page_size={page_size}&conditions=%7B%7D",
        ("enrollments", "activity_reads", "students", "items", "data"),
        "course_content",
    ),
    TeacherEndpointSpec(
        "course_members",
        "/api/courses/{course_id}/members",
        ("members", "users", "items", "data"),
        "roster",
    ),
    TeacherEndpointSpec(
        "course_certification",
        "/api/courses/{course_id}/certification",
        ("selected_certification", "certification", "items", "data"),
        "certification",
    ),
    TeacherEndpointSpec(
        "course_research_meetings",
        "/api/courses/research-meeting/?course_id={course_id}",
        ("meetings", "items", "data", "results"),
        "course_content",
    ),
    TeacherEndpointSpec(
        "course_bulletins",
        "/api/courses/{course_id}/bulletins?page=1&page_size={page_size}",
        ("bulletins", "items", "data"),
        "bulletin",
    ),
    TeacherEndpointSpec(
        "course_group_sets",
        "/api/courses/{course_id}/group-sets?preload_id=-1&fields=id,group_set_id,name,members,leaders,created_at,sort",
        ("group_sets",),
        "group",
    ),
    TeacherEndpointSpec(
        "course_groups_submission_status",
        "/api/courses/{course_id}/groups/submission-status",
        ("groups", "statuses"),
        "group",
    ),
    TeacherEndpointSpec(
        "teaching_team_groups",
        "/api/courses/{course_id}/teaching-team/groups",
        ("groups",),
        "teaching_team",
    ),
    TeacherEndpointSpec(
        "course_students",
        "/api/course/{course_id}/students?page=1&page_size={page_size}",
        ("students",),
        "roster",
    ),
    TeacherEndpointSpec(
        "course_students_rollcalls",
        "/api/course/{course_id}/students_rollcalls?page=1&page_size={page_size}",
        ("students_rollcalls", "student_rollcalls", "students"),
        "rollcall",
    ),
    TeacherEndpointSpec(
        "course_students_rollcalls_page",
        "/api/course/{course_id}/pagination_students_rollcalls?page=1&page_size={page_size}",
        ("students_rollcalls", "student_rollcalls", "students"),
        "rollcall",
    ),
    TeacherEndpointSpec(
        "rollcalls",
        "/api/course/{course_id}/rollcalls?page=1&page_size={page_size}",
        ("rollcalls",),
        "rollcall",
    ),
    TeacherEndpointSpec(
        "rollcall_setting",
        "/api/course/{course_id}/rollcall/setting",
        (),
        "rollcall",
    ),
    TeacherEndpointSpec(
        "rollcall_score",
        "/api/course/{course_id}/rollcall-score",
        (),
        "rollcall",
    ),
    TeacherEndpointSpec(
        "rollcall_scores",
        "/api/course/{course_id}/rollcall/scores",
        ("scores",),
        "rollcall",
    ),
    TeacherEndpointSpec(
        "rollcall_status_result",
        "/api/courses/rollcall_status/{course_id}/result",
        ("rollcalls", "result"),
        "rollcall",
    ),
    TeacherEndpointSpec(
        "timetable_rollcalls",
        "/api/timetable_rollcalls?course_ids={course_id}",
        ("rollcalls", "timetable_rollcalls"),
        "rollcall",
    ),
    TeacherEndpointSpec(
        "homework_activities",
        "/api/courses/{course_id}/homework-activities?page=1&page_size={page_size}",
        ("homework_activities",),
        "homework",
    ),
    TeacherEndpointSpec(
        "homework_scores",
        "/api/course/{course_id}/homework-scores",
        ("homework_activities", "scores"),
        "homework",
    ),
    TeacherEndpointSpec(
        "homework_submission_status",
        "/api/courses/{course_id}/homeworks/submission-status?no-intercept=true",
        (),
        "homework",
    ),
    TeacherEndpointSpec(
        "homework_submission_number",
        "/api/course/{course_id}/homework-submission-number",
        ("homework_submission_nums",),
        "homework",
    ),
    TeacherEndpointSpec(
        "homework_student_status",
        "/api/course/{course_id}/homework-student-status",
        (),
        "homework",
    ),
    TeacherEndpointSpec(
        "exam_list",
        "/api/courses/{course_id}/exam-list?page=1&page_size={page_size}",
        ("exams",),
        "exam",
    ),
    TeacherEndpointSpec(
        "exam_scores",
        "/api/courses/{course_id}/exam-scores?no-intercept=true",
        ("exam_scores",),
        "exam",
    ),
    TeacherEndpointSpec(
        "exam_submission_status",
        "/api/courses/{course_id}/exams/submission-status",
        (),
        "exam",
    ),
    TeacherEndpointSpec(
        "exam_submission_stat",
        "/api/stat/courses/{course_id}/exam",
        (),
        "exam",
    ),
    TeacherEndpointSpec(
        "forum_activities",
        "/api/course/{course_id}/forum-activities?page=1&page_size={page_size}",
        ("forum_activities",),
        "forum",
    ),
    TeacherEndpointSpec(
        "forum_scores",
        "/api/course/{course_id}/forum-scores",
        ("forum_scores",),
        "forum",
    ),
    TeacherEndpointSpec(
        "classroom_list",
        "/api/courses/{course_id}/classroom-list?page=1&page_size={page_size}",
        ("classrooms",),
        "classroom",
    ),
    TeacherEndpointSpec(
        "classroom_student_status",
        "/api/course/{course_id}/classroom-student-status",
        (),
        "classroom",
    ),
    TeacherEndpointSpec(
        "classroom_exam_scores",
        "/api/course/{course_id}/classroom-exam-scores",
        ("classroom_exam_scores", "scores"),
        "classroom",
    ),
    TeacherEndpointSpec(
        "questionnaires",
        "/api/course/{course_id}/questionnaires",
        ("questionnaires",),
        "questionnaire",
    ),
    TeacherEndpointSpec(
        "questionnaire_scores",
        "/api/course/{course_id}/questionnaire-scores",
        ("questionnaire_scores",),
        "questionnaire",
    ),
    TeacherEndpointSpec(
        "course_estimates",
        "/api/course-estimates/{course_id}",
        ("course_estimates",),
        "course_estimate",
    ),
    TeacherEndpointSpec(
        "course_estimate_replies",
        "/api/course-estimates-replies/{course_id}",
        ("course_estimate_replies", "replies"),
        "course_estimate",
    ),
    TeacherEndpointSpec(
        "lesson_timetable",
        "/api/courses/{course_id}/lesson-timetable",
        ("timetables",),
        "classroom",
    ),
    TeacherEndpointSpec(
        "teaching_team_orgs",
        "/api/courses/{course_id}/teaching-team/orgs",
        ("result",),
        "teaching_team",
    ),
)

TEACHER_ENDPOINT_GROUPS: dict[str, tuple[str, ...]] = {
    "activities": (
        "homework_activities",
        "homework_scores",
        "homework_submission_status",
        "homework_submission_number",
        "homework_student_status",
        "exam_list",
        "exam_scores",
        "exam_submission_status",
        "exam_submission_stat",
        "forum_activities",
        "forum_scores",
        "classroom_list",
        "classroom_student_status",
        "classroom_exam_scores",
        "questionnaires",
        "questionnaire_scores",
        "course_estimates",
        "course_estimate_replies",
        "lesson_timetable",
        "rubrics",
        "rubrics_with_resource",
        "rubrics_template",
        "course_modules",
        "course_activities",
        "course_activity_reads_for_user",
        "course_students_activity_reads",
        "course_certification",
    ),
    "bulletins": ("course_bulletins",),
    "course_estimates": (
        "course_estimates",
        "course_estimate_replies",
    ),
    "course_packages": (
        "course_packages",
        "course_package_status",
    ),
    "enrollments": ("enrollments", "course_enrollments_index", "course_members", "score_book"),
    "groups": (
        "course_group_sets",
        "course_groups_submission_status",
        "teaching_team_groups",
    ),
    "rollcalls": (
        "rollcalls",
        "rollcall_setting",
        "rollcall_score",
        "rollcall_scores",
        "rollcall_status_result",
        "timetable_rollcalls",
    ),
    "students": (
        "course_students",
        "course_students_rollcalls",
        "course_students_rollcalls_page",
    ),
    "scores": (
        "score_book",
        "score_status",
        "announce_score_settings",
        "custom_score_items",
        "score_ranks",
        "homework_scores",
        "exam_scores",
        "forum_scores",
        "questionnaire_scores",
        "rollcall_score",
        "rollcall_scores",
        "course_estimates",
        "edu_score_rate",
        "edu_score_submit_time",
        "edu_score_submit_logs",
        "rubrics",
        "rubrics_with_resource",
        "rubrics_template",
    ),
    "structure": (
        "course_modules",
        "course_template_setting",
        "course_activity_publish_setting",
        "course_completion_criteria",
        "course_packages",
        "course_package_status",
        "course_activities",
        "course_activity_reads_for_user",
        "course_students_activity_reads",
        "course_certification",
        "course_bulletins",
    ),
}

TEACHER_ROLLCALL_DETAIL_ENDPOINTS: tuple[TeacherEndpointSpec, ...] = (
    TeacherEndpointSpec(
        "rollcall_detail",
        "/api/rollcall/{course_id}",
        ("id",),
        "rollcall",
    ),
    TeacherEndpointSpec(
        "rollcall_lite",
        "/api/rollcall/{course_id}/lite",
        ("id",),
        "rollcall",
    ),
    TeacherEndpointSpec(
        "student_rollcalls",
        "/api/rollcall/{course_id}/student_rollcalls",
        ("student_rollcalls", "students"),
        "rollcall",
    ),
    TeacherEndpointSpec(
        "student_rollcalls_page",
        "/api/rollcall/{course_id}/pagination_students_rollcalls?page=1&page_size={page_size}",
        ("student_rollcalls", "students"),
        "rollcall",
    ),
    TeacherEndpointSpec(
        "student_rollcall_count",
        "/api/rollcall/{course_id}/student_rollcall_count",
        ("result", "data", "items"),
        "rollcall",
    ),
    TeacherEndpointSpec(
        "rollcall_answers",
        "/api/rollcall/{course_id}/answers",
        ("answers",),
        "rollcall",
    ),
    TeacherEndpointSpec(
        "rollcall_status_result",
        "/api/courses/rollcall_status/{course_id}/result",
        ("result", "data", "items"),
        "rollcall",
    ),
)

TEACHER_ACTIVITY_ENDPOINTS: tuple[TeacherEndpointSpec, ...] = (
    TeacherEndpointSpec(
        "activity_detail",
        "/api/activities/{course_id}",
        ("id",),
        "activity",
    ),
    TeacherEndpointSpec(
        "activity_submission_number",
        "/api/activity/{course_id}/submission-number",
        (),
        "activity",
    ),
    TeacherEndpointSpec(
        "activity_delete_check",
        "/api/activities/delete-check?activity_id={course_id}&activity_type=",
        ("items", "data", "results"),
        "activity",
    ),
    TeacherEndpointSpec(
        "homework_duplicate_detect_task",
        "/api/homework/{course_id}/duplicate-detect/task",
        ("tasks", "items", "data", "results"),
        "homework",
    ),
    TeacherEndpointSpec(
        "activity_comments",
        "/api/activities/{course_id}/comments?page=1&page_size={page_size}",
        ("comments",),
        "activity",
    ),
    TeacherEndpointSpec(
        "activity_comment_count",
        "/api/activities/{course_id}/comment/count",
        (),
        "activity",
    ),
    TeacherEndpointSpec(
        "forum_activity_scores",
        "/api/activities/{course_id}/forum-scores",
        ("forum_scores", "scores"),
        "forum",
    ),
    TeacherEndpointSpec(
        "forum_activity_topics",
        "/api/activities/{course_id}/topics?page=1&page_size={page_size}",
        ("topics",),
        "forum",
    ),
    TeacherEndpointSpec(
        "activity_intra_score_rules",
        "/api/activities/{course_id}/intra-score-rules",
        ("rules", "intra_score_rules"),
        "activity",
    ),
    TeacherEndpointSpec(
        "activity_upload_references",
        "/api/activities/{course_id}/upload_references",
        ("upload_references", "uploads", "references"),
        "activity",
    ),
    TeacherEndpointSpec(
        "activity_resources",
        "/api/activities/{course_id}/resources",
        ("resources", "items", "data"),
        "activity",
    ),
)

TEACHER_EXAM_ENDPOINTS: tuple[TeacherEndpointSpec, ...] = (
    TeacherEndpointSpec(
        "exam_detail",
        "/api/exams/{course_id}",
        ("id",),
        "exam",
    ),
    TeacherEndpointSpec(
        "exam_examinee_actions",
        "/api/examinee-actions?exam_id={course_id}",
        ("examinee_actions", "actions", "items"),
        "exam",
    ),
    TeacherEndpointSpec(
        "exam_make_up_record",
        "/api/exam/{course_id}/make-up-record",
        ("records", "make_up_records", "items", "data"),
        "exam",
    ),
    TeacherEndpointSpec(
        "exam_qualification_check",
        "/api/exam/{course_id}/check-exam-qualification?no-intercept=true",
        ("qualification", "items", "data"),
        "exam",
    ),
)


TEACHER_CLASSROOM_ENDPOINTS: tuple[TeacherEndpointSpec, ...] = (
    TeacherEndpointSpec(
        "classroom_exam_detail",
        "/api/classroom-exams/{course_id}",
        ("id",),
        "classroom",
    ),
    TeacherEndpointSpec(
        "classroom_subjects_stat",
        "/api/classrooms/{course_id}/subjects-stat",
        ("subjects",),
        "classroom",
    ),
    TeacherEndpointSpec(
        "classroom_score_list",
        "/api/classroom-exams/{course_id}/score-list?ignore_avatar=true",
        ("score_list", "scores", "examinees"),
        "classroom",
    ),
    TeacherEndpointSpec(
        "classroom_examinees",
        "/api/classroom-exams/{course_id}/examinees",
        ("examinees",),
        "classroom",
    ),
    TeacherEndpointSpec(
        "classroom_submission_count_status",
        "/api/classroom-exams/{course_id}/submission-count-status",
        (),
        "classroom",
    ),
)


TEACHER_QUESTIONNAIRE_ENDPOINTS: tuple[TeacherEndpointSpec, ...] = (
    TeacherEndpointSpec(
        "questionnaire_detail",
        "/api/questionnaires/{course_id}",
        ("id",),
        "questionnaire",
    ),
    TeacherEndpointSpec(
        "questionnaire_subjects",
        "/api/questionnaire/{course_id}/subjects",
        ("subjects",),
        "questionnaire",
    ),
    TeacherEndpointSpec(
        "questionnaire_preview",
        "/api/questionnaire/{course_id}/preview",
        ("subjects",),
        "questionnaire",
    ),
    TeacherEndpointSpec(
        "questionnaire_logs",
        "/api/questionnaires/{course_id}/logs",
        ("logs",),
        "questionnaire",
    ),
)


TEACHER_GROUP_SET_ENDPOINTS: tuple[TeacherEndpointSpec, ...] = (
    TeacherEndpointSpec(
        "group_set_detail",
        "/api/group-sets/{course_id}",
        ("id",),
        "group",
    ),
    TeacherEndpointSpec(
        "group_set_groups",
        "/api/group-sets/{course_id}/groups?fields=id,name,sort,members,leaders,uploads",
        ("groups",),
        "group",
    ),
    TeacherEndpointSpec(
        "group_set_activities",
        "/api/group-sets/{course_id}/activities",
        ("activities",),
        "group",
    ),
    TeacherEndpointSpec(
        "current_user_group",
        "/api/group-sets/{course_id}/group",
        ("id", "members"),
        "group",
    ),
)


class TeacherDiscoveryError(Exception):
    def __init__(
        self,
        message: str,
        *,
        status: str = "unexpected_response",
        http_status: int = 0,
        url: str = "",
    ) -> None:
        super().__init__(sanitize_text(message))
        self.status = status
        self.http_status = int(http_status or 0)
        self.url = str(url or "")

    def to_dict(self) -> dict[str, Any]:
        return {
            "status": self.status,
            "http_status": self.http_status,
            "url": self.url,
            "message": str(self),
        }


@dataclass(frozen=True)
class TeacherCourseSummary:
    course_id: str
    name: str
    code: str = ""
    roles: tuple[str, ...] = ()
    is_teacher: bool = False
    is_student: bool = False
    evidence: tuple[str, ...] = ()
    student_count: int = 0
    instructor_count: int = 0
    assistant_count: int = 0

    def to_dict(self) -> dict[str, Any]:
        return {
            "id": self.course_id,
            "name": self.name,
            "code": self.code,
            "roles": list(self.roles),
            "is_teacher": self.is_teacher,
            "is_student": self.is_student,
            "evidence": list(self.evidence),
            "student_count": self.student_count,
            "instructor_count": self.instructor_count,
            "assistant_count": self.assistant_count,
        }


@dataclass(frozen=True)
class TeacherContext:
    status: str
    account_type: str
    courses: tuple[TeacherCourseSummary, ...] = field(default_factory=tuple)
    evidence: tuple[str, ...] = field(default_factory=tuple)

    @property
    def ok(self) -> bool:
        return self.status == "ok"

    @property
    def teacher_course_count(self) -> int:
        return sum(1 for course in self.courses if course.is_teacher)

    @property
    def student_course_count(self) -> int:
        return sum(1 for course in self.courses if course.is_student)

    def to_dict(self) -> dict[str, Any]:
        return {
            "status": self.status,
            "account_type": self.account_type,
            "teacher_course_count": self.teacher_course_count,
            "student_course_count": self.student_course_count,
            "course_count": len(self.courses),
            "evidence": list(self.evidence),
            "courses": [course.to_dict() for course in self.courses],
        }


@dataclass(frozen=True)
class TeacherEndpointResult:
    name: str
    feature: str
    path: str
    status: str
    http_status: int = 0
    item_count: int | None = None
    summary: Any = None

    @property
    def ok(self) -> bool:
        return self.status == "ok"

    def to_dict(self) -> dict[str, Any]:
        return {
            "name": self.name,
            "feature": self.feature,
            "path": self.path,
            "status": self.status,
            "http_status": self.http_status,
            "item_count": self.item_count,
            "summary": self.summary,
        }


@dataclass(frozen=True)
class TeacherCourseReport:
    status: str
    course_id: str
    endpoints: tuple[TeacherEndpointResult, ...] = field(default_factory=tuple)

    @property
    def ok(self) -> bool:
        return self.status == "ok"

    def to_dict(self) -> dict[str, Any]:
        supported = [endpoint.name for endpoint in self.endpoints if endpoint.ok]
        unavailable = [endpoint.name for endpoint in self.endpoints if not endpoint.ok]
        return {
            "status": self.status,
            "course_id": self.course_id,
            "supported": supported,
            "unavailable": unavailable,
            "endpoints": {endpoint.name: endpoint.to_dict() for endpoint in self.endpoints},
        }


@dataclass(frozen=True)
class TeacherActionResult:
    action: str
    method: str
    path: str
    status: str
    http_status: int = 0
    request: Any = None
    response: Any = None

    @property
    def ok(self) -> bool:
        return self.status in {"ok", "dry_run"}

    def to_dict(self) -> dict[str, Any]:
        return {
            "status": self.status,
            "action": self.action,
            "method": self.method,
            "path": self.path,
            "http_status": self.http_status,
            "request": self.request,
            "response": self.response,
        }


@dataclass(frozen=True)
class TeacherDownloadResult:
    name: str
    feature: str
    path: str
    status: str
    http_status: int = 0
    method: str = "GET"
    request: Any = None
    content_type: str = ""
    content_length: int = 0
    filename: str = ""
    output_path: str = ""
    sha256: str = ""

    @property
    def ok(self) -> bool:
        return self.status in {"ok", "dry_run"}

    def to_dict(self) -> dict[str, Any]:
        return {
            "status": self.status,
            "name": self.name,
            "feature": self.feature,
            "path": self.path,
            "http_status": self.http_status,
            "method": self.method,
            "request": self.request,
            "content_type": self.content_type,
            "content_length": self.content_length,
            "filename": self.filename,
            "output_path": self.output_path,
            "sha256": self.sha256,
        }


@dataclass(frozen=True)
class TeacherUploadResult:
    action: str
    path: str
    status: str
    http_status: int = 0
    request: Any = None
    preupload_response: Any = None
    upload_http_status: int = 0
    upload_response: Any = None
    callback_http_status: int = 0
    callback_response: Any = None
    file_path: str = ""
    filename: str = ""
    content_type: str = ""
    file_size: int = 0
    storage_type: str = ""

    @property
    def ok(self) -> bool:
        return self.status in {"ok", "dry_run"}

    def to_dict(self) -> dict[str, Any]:
        return {
            "status": self.status,
            "action": self.action,
            "path": self.path,
            "http_status": self.http_status,
            "request": self.request,
            "preupload_response": self.preupload_response,
            "upload_http_status": self.upload_http_status,
            "upload_response": self.upload_response,
            "callback_http_status": self.callback_http_status,
            "callback_response": self.callback_response,
            "file_path": self.file_path,
            "filename": self.filename,
            "content_type": self.content_type,
            "file_size": self.file_size,
            "storage_type": self.storage_type,
        }


def _request_kwargs(request_ssl: Any) -> dict[str, Any]:
    if request_ssl is None:
        return {}
    return {"ssl": request_ssl}


def _append_query(path: str, **params: Any) -> str:
    parsed = urlparse(path)
    query = dict(parse_qsl(parsed.query, keep_blank_values=True))
    for key, value in params.items():
        if value not in (None, ""):
            query[str(key)] = str(value)
    return urlunparse(parsed._replace(query=urlencode(query)))


def _paged_params(
    *,
    page: int = 1,
    page_size: int = 20,
    conditions: Any = "",
    fields: Any = "",
) -> dict[str, Any]:
    params: dict[str, Any] = {
        "page": max(1, int(page or 1)),
        "page_size": max(1, int(page_size or 20)),
    }
    conditions_text = normalize_text(conditions)
    fields_text = normalize_text(fields)
    if conditions_text:
        params["conditions"] = conditions_text
    if fields_text:
        params["fields"] = fields_text
    return params


def _append_paged_query(
    path: str,
    *,
    page: int = 1,
    page_size: int = 20,
    conditions: Any = "",
    fields: Any = "",
    **extra: Any,
) -> str:
    params = _paged_params(page=page, page_size=page_size, conditions=conditions, fields=fields)
    params.update({key: value for key, value in extra.items() if value not in (None, "")})
    return _append_query(path, **params)


def _base_url(endpoints: Any) -> str:
    return str(getattr(endpoints, "base_url", "") or "").rstrip("/")


def _url(endpoints: Any, path: str) -> str:
    base = _base_url(endpoints)
    if path.startswith("http://") or path.startswith("https://"):
        return path
    return base + path


async def _response_json(response: Any) -> Any:
    try:
        return await response.json(encoding="utf-8")
    except Exception:
        body = await response.text()
        raise TeacherDiscoveryError(
            "Unexpected response body: {}".format(sanitize_text(body)),
            status="unexpected_response",
            http_status=int(getattr(response, "status", 0) or 0),
            url=str(getattr(response, "url", "")),
        )


async def _fetch_json(session: Any, url: str, *, request_ssl: Any = None) -> Any:
    request = session.get(url, **_request_kwargs(request_ssl))
    if inspect.isawaitable(request):
        request = await request
    async with request as response:
        final_url = str(getattr(response, "url", url))
        status = int(getattr(response, "status", 0))
        if status == 401 or "login" in final_url.lower():
            raise TeacherDiscoveryError(
                "Teacher discovery session is unauthorized.",
                status="unauthorized",
                http_status=status,
                url=final_url,
            )
        if status != 200:
            body = await response.text()
            raise TeacherDiscoveryError(
                "HTTP {}: {}".format(status, sanitize_text(body)),
                status="unexpected_response",
                http_status=status,
                url=final_url,
            )
        return await _response_json(response)


async def _fetch_endpoint_payload(session: Any, url: str, *, request_ssl: Any = None) -> tuple[str, int, Any]:
    request = session.get(url, **_request_kwargs(request_ssl))
    if inspect.isawaitable(request):
        request = await request
    async with request as response:
        final_url = str(getattr(response, "url", url))
        status = int(getattr(response, "status", 0))
        if status == 401 or "login" in final_url.lower():
            return "unauthorized", status, None
        if status == 403:
            return "forbidden", status, None
        if status == 404:
            return "not_found", status, None
        if status < 200 or status >= 300:
            return "unexpected_response", status, None
        try:
            payload = await response.json(encoding="utf-8")
        except Exception:
            return "unexpected_response", status, None
    return "ok", status, payload


async def _fetch_binary_payload(
    session: Any,
    url: str,
    *,
    request_ssl: Any = None,
) -> tuple[str, int, bytes, dict[str, str], str]:
    request = session.get(url, **_request_kwargs(request_ssl))
    if inspect.isawaitable(request):
        request = await request
    async with request as response:
        final_url = str(getattr(response, "url", url))
        status = int(getattr(response, "status", 0))
        headers = {str(key).lower(): str(value) for key, value in getattr(response, "headers", {}).items()}
        if status == 401 or "login" in final_url.lower():
            return "unauthorized", status, b"", headers, final_url
        if status == 403:
            return "forbidden", status, b"", headers, final_url
        if status == 404:
            return "not_found", status, b"", headers, final_url
        if status < 200 or status >= 300:
            return "unexpected_response", status, b"", headers, final_url
        return "ok", status, await response.read(), headers, final_url


async def _send_binary_payload(
    session: Any,
    method: str,
    url: str,
    *,
    payload: Any = None,
    request_ssl: Any = None,
) -> tuple[str, int, bytes, dict[str, str], str]:
    kwargs = _request_kwargs(request_ssl)
    if payload is not None and method.upper() != "GET":
        kwargs["json"] = payload
    request_method = getattr(session, method.lower())
    request = request_method(url, **kwargs)
    if inspect.isawaitable(request):
        request = await request
    async with request as response:
        final_url = str(getattr(response, "url", url))
        status = int(getattr(response, "status", 0))
        headers = {str(key).lower(): str(value) for key, value in getattr(response, "headers", {}).items()}
        if status == 401 or "login" in final_url.lower():
            return "unauthorized", status, b"", headers, final_url
        if status == 403:
            return "forbidden", status, b"", headers, final_url
        if status == 404:
            return "not_found", status, b"", headers, final_url
        if status < 200 or status >= 300:
            return "unexpected_response", status, b"", headers, final_url
        return "ok", status, await response.read(), headers, final_url


async def _send_endpoint_payload(
    session: Any,
    method: str,
    url: str,
    *,
    payload: Any = None,
    request_ssl: Any = None,
) -> tuple[str, int, Any]:
    kwargs = _request_kwargs(request_ssl)
    if payload is not None:
        kwargs["json"] = payload
    request_method = getattr(session, method.lower())
    request = request_method(url, **kwargs)
    if inspect.isawaitable(request):
        request = await request
    async with request as response:
        final_url = str(getattr(response, "url", url))
        status = int(getattr(response, "status", 0))
        if status == 401 or "login" in final_url.lower():
            return "unauthorized", status, None
        if status == 403:
            return "forbidden", status, None
        if status == 404:
            return "not_found", status, None
        try:
            body = await response.json(encoding="utf-8")
        except Exception:
            body = sanitize_text(await response.text())
        if status < 200 or status >= 300:
            return "unexpected_response", status, body
    return "ok", status, body


def _mapping_value(value: Any, *keys: str) -> Any:
    if not isinstance(value, Mapping):
        return None
    for key in keys:
        if key in value:
            return value[key]
    lowered = {str(key).lower(): item for key, item in value.items()}
    for key in keys:
        lowered_key = key.lower()
        if lowered_key in lowered:
            return value[lowered[lowered_key]]
    return None


def _guess_upload_content_type(path: Path, override: Any = "") -> str:
    override_text = normalize_text(override)
    if override_text:
        return override_text
    guessed, _encoding = mimetypes.guess_type(str(path))
    return guessed or "application/octet-stream"


async def _response_payload_or_text(response: Any) -> Any:
    try:
        return await response.json(encoding="utf-8")
    except Exception:
        body = await response.text()
        return sanitize_text(body) if body else None


async def _send_upload_payload(
    session: Any,
    method: str,
    url: str,
    *,
    data: Any = None,
    headers: Mapping[str, str] | None = None,
    request_ssl: Any = None,
) -> tuple[str, int, Any]:
    kwargs = _request_kwargs(request_ssl)
    if data is not None:
        kwargs["data"] = data
    if headers:
        kwargs["headers"] = dict(headers)
    request_method = getattr(session, method.lower())
    request = request_method(url, **kwargs)
    if inspect.isawaitable(request):
        request = await request
    async with request as response:
        final_url = str(getattr(response, "url", url))
        status = int(getattr(response, "status", 0))
        if status == 401 or "login" in final_url.lower():
            return "unauthorized", status, None
        if status == 403:
            return "forbidden", status, None
        if status == 404:
            return "not_found", status, None
        body = await _response_payload_or_text(response)
        if status < 200 or status >= 300:
            return "unexpected_response", status, body
    return "ok", status, body


async def _send_upload_callback(
    session: Any,
    *,
    endpoints: Any,
    upload_id: Any,
    file_key: Any,
    request_ssl: Any = None,
) -> tuple[str, int, Any]:
    upload_id_text = normalize_text(upload_id)
    callback_payload = {"file_key": normalize_text(file_key) or upload_id_text}
    return await _send_endpoint_payload(
        session,
        "POST",
        _url(endpoints, "/internal-api/upload/callback/{}".format(upload_id_text)),
        payload=callback_payload,
        request_ssl=request_ssl,
    )


def _safe_download_filename(value: Any, *, fallback: str = "download.bin") -> str:
    filename = normalize_text(value)
    if filename:
        filename = Path(filename).name
        filename = re.sub(r'[<>:"/\\|?*\x00-\x1f]', "_", filename).strip(" .")
    return filename or fallback


def _filename_from_content_disposition(value: Any) -> str:
    header = normalize_text(value)
    if not header:
        return ""
    for part in header.split(";"):
        key, separator, raw_value = part.strip().partition("=")
        if not separator:
            continue
        key = key.lower()
        raw_value = raw_value.strip().strip('"')
        if key == "filename*":
            lowered = raw_value.lower()
            if lowered.startswith("utf-8''"):
                raw_value = raw_value[7:]
            elif lowered.startswith("utf-8"):
                raw_value = raw_value[5:].lstrip("'=")
            return _safe_download_filename(unquote(raw_value), fallback="")
        if key == "filename":
            return _safe_download_filename(unquote(raw_value), fallback="")
    return ""


def _fallback_download_filename(path: Any, *, fallback: str = "download.bin") -> str:
    parsed = urlparse(_normalize_teacher_api_path(path))
    candidate = Path(parsed.path).name
    return _safe_download_filename(candidate, fallback=fallback)


def _resolve_download_output(output_path: Any, filename: str, *, overwrite: bool = False) -> tuple[str, Path | None]:
    output_text = normalize_text(output_path)
    if not output_text:
        return "output_required", None
    target = Path(output_text)
    if target.exists() and target.is_dir():
        target = target / _safe_download_filename(filename)
    elif output_text.endswith(("/", "\\")):
        target = target / _safe_download_filename(filename)
    if target.exists() and not overwrite:
        return "output_exists", target
    target.parent.mkdir(parents=True, exist_ok=True)
    return "ok", target


def _items_from_payload(payload: Any, *keys: str) -> list[Any]:
    if isinstance(payload, list):
        return list(payload)
    if isinstance(payload, Mapping):
        for key in keys:
            value = payload.get(key)
            if isinstance(value, list):
                return list(value)
    return []


def _course_items(payload: Any) -> list[Any]:
    return _items_from_payload(payload, "courses", "data", "items")


def _normalize_role(value: Any) -> str:
    return normalize_text(value).lower().replace("-", "_")


def _roles_from_value(value: Any) -> set[str]:
    roles: set[str] = set()
    if isinstance(value, str):
        role = _normalize_role(value)
        if role:
            roles.add(role)
    elif isinstance(value, Mapping):
        for key in ("role", "name", "key", "code"):
            role = _normalize_role(value.get(key))
            if role:
                roles.add(role)
    elif isinstance(value, Sequence) and not isinstance(value, (bytes, bytearray)):
        for item in value:
            roles.update(_roles_from_value(item))
    return roles


def _roles_from_mapping(value: Mapping[str, Any]) -> set[str]:
    roles: set[str] = set()
    for key in ("roles", "role", "course_role", "course_roles"):
        roles.update(_roles_from_value(value.get(key)))
    return roles


def _matches_active_user(user: Any, active_user: str) -> bool:
    normalized_user = normalize_text(active_user).lower()
    if not normalized_user or not isinstance(user, Mapping):
        return False
    for key in ("email", "user_no", "account", "username"):
        candidate = normalize_text(user.get(key)).lower()
        if candidate and candidate == normalized_user:
            return True
    return False


def _instructor_matches_active_user(course: Mapping[str, Any], active_user: str) -> bool:
    for key in ("instructors", "teachers"):
        value = course.get(key)
        if not isinstance(value, list):
            continue
        for item in value:
            if _matches_active_user(item, active_user):
                return True
    return False


def _count_roles(enrollments: list[Any]) -> tuple[int, int, int]:
    students = instructors = assistants = 0
    for enrollment in enrollments:
        if not isinstance(enrollment, Mapping):
            continue
        roles = _roles_from_mapping(enrollment)
        if roles & STUDENT_ROLE_NAMES:
            students += 1
        if "instructor" in roles or "teacher" in roles:
            instructors += 1
        if "assistant" in roles or "teaching_assistant" in roles:
            assistants += 1
    return students, instructors, assistants


def classify_teacher_course(
    course: Mapping[str, Any],
    *,
    course_detail: Mapping[str, Any] | None = None,
    enrollments_payload: Any = None,
    active_user: str = "",
) -> TeacherCourseSummary:
    detail = course_detail if isinstance(course_detail, Mapping) else {}
    merged: dict[str, Any] = dict(course)
    merged.update({key: value for key, value in detail.items() if value not in (None, "")})
    parsed = parse_courses([merged])
    base = parsed[0] if parsed else None
    course_id = base.course_id if base is not None else normalize_text(merged.get("id") or merged.get("course_id"))
    name = base.name if base is not None else normalize_text(merged.get("name") or merged.get("display_name")) or "Course {}".format(course_id)
    code = base.code if base is not None else normalize_text(merged.get("course_code") or merged.get("code"))

    roles = _roles_from_mapping(course) | _roles_from_mapping(detail)
    evidence: list[str] = []
    enrollments = _items_from_payload(enrollments_payload, "enrollments")
    for enrollment in enrollments:
        if not isinstance(enrollment, Mapping):
            continue
        user = enrollment.get("user")
        if _matches_active_user(user, active_user):
            matched_roles = _roles_from_mapping(enrollment)
            roles.update(matched_roles)
            if matched_roles:
                evidence.append("matching_enrollment_roles")

    if _instructor_matches_active_user(course, active_user) or _instructor_matches_active_user(detail, active_user):
        roles.add("instructor")
        evidence.append("matching_instructor")

    for flag in TEACHER_PERMISSION_FLAGS:
        if bool(detail.get(flag)):
            evidence.append(flag)

    student_count, instructor_count, assistant_count = _count_roles(enrollments)
    is_teacher = bool((roles & TEACHER_ROLE_NAMES) or any(flag in evidence for flag in TEACHER_PERMISSION_FLAGS))
    is_student = bool(roles & STUDENT_ROLE_NAMES)
    if is_teacher and "teacher_permissions" not in evidence and any(flag in evidence for flag in TEACHER_PERMISSION_FLAGS):
        evidence.append("teacher_permissions")
    if is_teacher:
        roles.add("teacher")
    if is_student:
        roles.add("student")

    return TeacherCourseSummary(
        course_id=course_id,
        name=name,
        code=code,
        roles=tuple(sorted(roles)),
        is_teacher=is_teacher,
        is_student=is_student,
        evidence=tuple(sorted(set(evidence))),
        student_count=student_count,
        instructor_count=instructor_count,
        assistant_count=assistant_count,
    )


def classify_account_type(courses: Sequence[TeacherCourseSummary]) -> str:
    has_teacher = any(course.is_teacher for course in courses)
    has_student = any(course.is_student for course in courses)
    if has_teacher and has_student:
        return "mixed"
    if has_teacher:
        return "teacher"
    if has_student:
        return "student"
    return "unknown"


async def discover_teacher_context(
    session: Any,
    *,
    endpoints: Any,
    request_ssl: Any = None,
    active_user: str = "",
    max_courses: int = 50,
    course_ids: Sequence[Any] | None = None,
) -> TeacherContext:
    courses_url = _append_query(
        str(getattr(endpoints, "courses_url", "")),
        page=1,
        page_size=max(1, int(max_courses or 50)),
    )
    courses_payload = await _fetch_json(session, courses_url, request_ssl=request_ssl)
    course_items = _course_items(courses_payload)
    wanted_ids = {normalize_text(value) for value in (course_ids or ()) if normalize_text(value)}
    summaries: list[TeacherCourseSummary] = []

    for course in course_items:
        if not isinstance(course, Mapping):
            continue
        course_id = normalize_text(course.get("id") or course.get("course_id"))
        if wanted_ids and course_id not in wanted_ids:
            continue
        detail_payload: Any = {}
        enrollments_payload: Any = {}
        if course_id:
            detail_path = "/api/courses/{}?{}".format(course_id, urlencode({"fields": COURSE_DETAIL_FIELDS}))
            enrollments_path = "/api/course/{}/enrollments?{}".format(
                course_id,
                urlencode({"fields": ENROLLMENT_FIELDS}),
            )
            try:
                detail_payload = await _fetch_json(
                    session,
                    _url(endpoints, detail_path),
                    request_ssl=request_ssl,
                )
            except TeacherDiscoveryError:
                detail_payload = {}
            try:
                enrollments_payload = await _fetch_json(
                    session,
                    _url(endpoints, enrollments_path),
                    request_ssl=request_ssl,
                )
            except TeacherDiscoveryError:
                enrollments_payload = {}
        summaries.append(
            classify_teacher_course(
                course,
                course_detail=detail_payload if isinstance(detail_payload, Mapping) else {},
                enrollments_payload=enrollments_payload,
                active_user=active_user,
            )
        )

    account_type = classify_account_type(summaries)
    evidence: list[str] = []
    if any(course.is_teacher for course in summaries):
        evidence.append("teacher_course_detected")
    if any(course.is_student for course in summaries):
        evidence.append("student_course_detected")
    status = "ok" if summaries else "empty_courses"
    return TeacherContext(
        status=status,
        account_type=account_type,
        courses=tuple(summaries),
        evidence=tuple(evidence),
    )


def _should_redact(key: str, *, include_sensitive: bool) -> bool:
    lowered = key.lower()
    if lowered in ALWAYS_REDACT_KEYS:
        return True
    if any(part in lowered for part in SENSITIVE_KEY_PARTS):
        return True
    if not include_sensitive and lowered in ROLLCALL_SECRET_KEYS:
        return True
    return False


def sanitize_teacher_payload(
    value: Any,
    *,
    include_sensitive: bool = False,
    depth: int = 0,
    sample_size: int = 3,
) -> Any:
    if depth >= 4:
        if isinstance(value, (dict, list)):
            return type(value).__name__
        return value
    if isinstance(value, Mapping):
        sanitized: dict[str, Any] = {}
        for index, key in enumerate(sorted(value.keys(), key=str)):
            if index >= 60:
                sanitized["...(more_keys)"] = len(value) - 60
                break
            key_text = str(key)
            if _should_redact(key_text, include_sensitive=include_sensitive):
                sanitized[key_text] = "[redacted]"
            else:
                sanitized[key_text] = sanitize_teacher_payload(
                    value[key],
                    include_sensitive=include_sensitive,
                    depth=depth + 1,
                    sample_size=sample_size,
                )
        return sanitized
    if isinstance(value, list):
        return {
            "type": "list",
            "count": len(value),
            "sample": [
                sanitize_teacher_payload(
                    item,
                    include_sensitive=include_sensitive,
                    depth=depth + 1,
                    sample_size=sample_size,
                )
                for item in value[: max(0, sample_size)]
            ],
        }
    if isinstance(value, str) and len(value) > 200:
        return value[:200] + "...(truncated)"
    return value


def _count_from_payload(payload: Any, keys: Sequence[str]) -> int | None:
    if isinstance(payload, list):
        return len(payload)
    if not isinstance(payload, Mapping):
        return None
    for key in keys:
        value = payload.get(key)
        if isinstance(value, list):
            return len(value)
        if isinstance(value, Mapping):
            return len(value)
    if keys:
        return None
    if payload and all(not isinstance(value, (list, Mapping)) for value in payload.values()):
        return len(payload)
    return None


def _json_object_payload(value: Any) -> dict[str, Any]:
    if value in (None, ""):
        return {}
    if isinstance(value, Mapping):
        return dict(value)
    text = normalize_text(value)
    if not text:
        return {}
    try:
        parsed = json.loads(text)
    except json.JSONDecodeError:
        return {}
    if isinstance(parsed, Mapping):
        return dict(parsed)
    return {}


def _json_query_value(value: Any) -> str:
    if value in (None, ""):
        return ""
    if isinstance(value, Mapping):
        if not value:
            return ""
        return json.dumps(dict(value), ensure_ascii=False, separators=(",", ":"))
    text = normalize_text(value)
    if not text:
        return ""
    try:
        parsed = json.loads(text)
    except json.JSONDecodeError:
        return text
    return json.dumps(parsed, ensure_ascii=False, separators=(",", ":"))


def _ids_query_value(value: Any) -> str:
    if value in (None, ""):
        return ""
    if isinstance(value, str):
        text = normalize_text(value)
        if not text:
            return ""
        if text.startswith("["):
            return text
        values = [normalize_text(part) for part in text.split(",") if normalize_text(part)]
    elif isinstance(value, Sequence) and not isinstance(value, (bytes, bytearray)):
        values = [normalize_text(part) for part in value if normalize_text(part)]
    else:
        values = [normalize_text(value)]
    if not values:
        return ""
    return "[{}]".format(",".join(values))


def _endpoint_result_from_payload(
    *,
    name: str,
    feature: str,
    path: str,
    status: str,
    http_status: int,
    payload: Any,
    count_keys: Sequence[str] = (),
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    if status != "ok":
        return TeacherEndpointResult(
            name=name,
            feature=feature,
            path=path,
            status=status,
            http_status=http_status,
            item_count=None,
            summary=None,
        )
    return TeacherEndpointResult(
        name=name,
        feature=feature,
        path=path,
        status="ok",
        http_status=http_status,
        item_count=_count_from_payload(payload, count_keys),
        summary=sanitize_teacher_payload(payload, include_sensitive=include_sensitive),
    )


async def fetch_teacher_endpoint(
    session: Any,
    *,
    endpoints: Any,
    spec: TeacherEndpointSpec,
    course_id: Any,
    request_ssl: Any = None,
    limit: int = 20,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    path = spec.path(course_id, limit=limit)
    status, http_status, payload = await _fetch_endpoint_payload(
        session,
        _url(endpoints, path),
        request_ssl=request_ssl,
    )
    if status != "ok":
        return TeacherEndpointResult(
            name=spec.name,
            feature=spec.feature,
            path=path,
            status=status,
            http_status=http_status,
            item_count=None,
            summary=None,
        )
    return TeacherEndpointResult(
        name=spec.name,
        feature=spec.feature,
        path=path,
        status="ok",
        http_status=http_status,
        item_count=_count_from_payload(payload, spec.count_keys),
        summary=sanitize_teacher_payload(payload, include_sensitive=include_sensitive),
    )


def _normalize_teacher_api_path(path: Any) -> str:
    path_text = normalize_text(path)
    if not path_text.startswith("/"):
        path_text = "/" + path_text
    return path_text


async def fetch_teacher_api_path(
    session: Any,
    *,
    endpoints: Any,
    path: Any,
    name: str = "teacher_api",
    feature: str = "custom",
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    path_text = _normalize_teacher_api_path(path)
    status, http_status, payload = await _fetch_endpoint_payload(
        session,
        _url(endpoints, path_text),
        request_ssl=request_ssl,
    )
    if status != "ok":
        return TeacherEndpointResult(
            name=normalize_text(name) or "teacher_api",
            feature=normalize_text(feature) or "custom",
            path=path_text,
            status=status,
            http_status=http_status,
        )
    return TeacherEndpointResult(
        name=normalize_text(name) or "teacher_api",
        feature=normalize_text(feature) or "custom",
        path=path_text,
        status="ok",
        http_status=http_status,
        item_count=_count_from_payload(
            payload,
            (
                "items",
                "data",
                "results",
                "answers",
                "rubrics",
                "rollcalls",
                "student_rollcalls",
                "students",
                "result",
                "resource_groups",
                "resources",
                "folders",
                "members",
                "subject_libs",
                "shared_resources",
                "collections",
                "comments",
                "entries",
                "references",
                "slides",
                "records",
                "groups",
                "licenses",
                "tags",
            ),
        ),
        summary=sanitize_teacher_payload(payload, include_sensitive=include_sensitive),
    )


async def download_teacher_api_path(
    session: Any,
    *,
    endpoints: Any,
    path: Any,
    output_path: Any,
    name: str = "teacher_download",
    feature: str = "download",
    request_ssl: Any = None,
    overwrite: bool = False,
) -> TeacherDownloadResult:
    path_text = _normalize_teacher_api_path(path)
    status, http_status, body, headers, _final_url = await _fetch_binary_payload(
        session,
        _url(endpoints, path_text),
        request_ssl=request_ssl,
    )
    result_name = normalize_text(name) or "teacher_download"
    result_feature = normalize_text(feature) or "download"
    content_type = headers.get("content-type", "")
    filename = (
        _filename_from_content_disposition(headers.get("content-disposition", ""))
        or _fallback_download_filename(path_text)
    )
    if status != "ok":
        return TeacherDownloadResult(
            name=result_name,
            feature=result_feature,
            path=path_text,
            status=status,
            http_status=http_status,
            content_type=content_type,
            filename=filename,
        )
    output_status, target = _resolve_download_output(output_path, filename, overwrite=overwrite)
    if output_status != "ok" or target is None:
        return TeacherDownloadResult(
            name=result_name,
            feature=result_feature,
            path=path_text,
            status=output_status,
            http_status=http_status,
            content_type=content_type,
            content_length=len(body),
            filename=filename,
            output_path=str(target or ""),
            sha256=hashlib.sha256(body).hexdigest(),
        )
    target.write_bytes(body)
    return TeacherDownloadResult(
        name=result_name,
        feature=result_feature,
        path=path_text,
        status="ok",
        http_status=http_status,
        content_type=content_type,
        content_length=len(body),
        filename=filename,
        output_path=str(target),
        sha256=hashlib.sha256(body).hexdigest(),
    )


async def download_teacher_api_request(
    session: Any,
    *,
    endpoints: Any,
    method: Any,
    path: Any,
    output_path: Any,
    payload: Any = None,
    name: str = "teacher_download_request",
    feature: str = "download_request",
    filename_hint: Any = "",
    request_ssl: Any = None,
    overwrite: bool = False,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherDownloadResult:
    method_text = normalize_text(method).upper() or "GET"
    path_text = _normalize_teacher_api_path(path)
    result_name = normalize_text(name) or "teacher_download_request"
    result_feature = normalize_text(feature) or "download_request"
    request_summary = sanitize_teacher_payload(payload or {}, include_sensitive=include_sensitive)
    if method_text not in {"GET", "POST"}:
        return TeacherDownloadResult(
            name=result_name,
            feature=result_feature,
            path=path_text,
            status="invalid_method",
            method=method_text,
            request=request_summary,
        )
    if method_text != "GET" and not execute:
        return TeacherDownloadResult(
            name=result_name,
            feature=result_feature,
            path=path_text,
            status="dry_run",
            method=method_text,
            request=request_summary,
        )
    if method_text != "GET" and not confirm:
        return TeacherDownloadResult(
            name=result_name,
            feature=result_feature,
            path=path_text,
            status="confirmation_required",
            method=method_text,
            request=request_summary,
        )
    status, http_status, body, headers, _final_url = await _send_binary_payload(
        session,
        method_text,
        _url(endpoints, path_text),
        payload=payload if method_text != "GET" else None,
        request_ssl=request_ssl,
    )
    content_type = headers.get("content-type", "")
    filename = (
        _filename_from_content_disposition(headers.get("content-disposition", ""))
        or _safe_download_filename(filename_hint, fallback="")
        or _fallback_download_filename(path_text)
    )
    if status != "ok":
        return TeacherDownloadResult(
            name=result_name,
            feature=result_feature,
            path=path_text,
            status=status,
            http_status=http_status,
            method=method_text,
            request=request_summary,
            content_type=content_type,
            filename=filename,
        )
    output_status, target = _resolve_download_output(output_path, filename, overwrite=overwrite)
    if output_status != "ok" or target is None:
        return TeacherDownloadResult(
            name=result_name,
            feature=result_feature,
            path=path_text,
            status=output_status,
            http_status=http_status,
            method=method_text,
            request=request_summary,
            content_type=content_type,
            content_length=len(body),
            filename=filename,
            output_path=str(target or ""),
            sha256=hashlib.sha256(body).hexdigest(),
        )
    target.write_bytes(body)
    return TeacherDownloadResult(
        name=result_name,
        feature=result_feature,
        path=path_text,
        status="ok",
        http_status=http_status,
        method=method_text,
        request=request_summary,
        content_type=content_type,
        content_length=len(body),
        filename=filename,
        output_path=str(target),
        sha256=hashlib.sha256(body).hexdigest(),
    )


async def download_teacher_qrcode(
    session: Any,
    *,
    endpoints: Any,
    url: Any,
    output_path: Any,
    request_ssl: Any = None,
    overwrite: bool = False,
) -> TeacherDownloadResult:
    target_url = normalize_text(url)
    path = "/api/qrcode?" + urlencode({"url": target_url})
    return await download_teacher_api_request(
        session,
        endpoints=endpoints,
        method="GET",
        path=path,
        output_path=output_path,
        payload={},
        name="qrcode",
        feature="rollcall",
        filename_hint="qrcode.png",
        request_ssl=request_ssl,
        overwrite=overwrite,
    )


async def upload_teacher_file(
    session: Any,
    *,
    endpoints: Any,
    file_path: Any,
    metadata: Any = None,
    name: Any = "",
    content_type: Any = "",
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherUploadResult:
    path = "/api/uploads"
    raw_file_path = normalize_text(file_path)
    local_path = Path(raw_file_path)
    if not raw_file_path or not local_path.is_file():
        return TeacherUploadResult(
            action="upload_file",
            path=path,
            status="invalid_file",
            request={"file_path": raw_file_path},
            file_path=raw_file_path,
        )
    if metadata is None:
        metadata_map: dict[str, Any] = {}
    elif isinstance(metadata, Mapping):
        metadata_map = dict(metadata)
    else:
        return TeacherUploadResult(
            action="upload_file",
            path=path,
            status="invalid_payload",
            request={"message": "metadata must be a JSON object"},
            file_path=str(local_path),
        )

    filename = _safe_download_filename(name or local_path.name, fallback=local_path.name or "upload.bin")
    file_size = int(local_path.stat().st_size)
    file_content_type = _guess_upload_content_type(local_path, content_type)
    preupload_payload = dict(metadata_map)
    preupload_payload.setdefault("name", filename)
    preupload_payload.setdefault("size", file_size)
    preupload_payload.setdefault("type", file_content_type)
    request_summary = {
        "file": {
            "path": str(local_path),
            "name": filename,
            "size": file_size,
            "type": file_content_type,
        },
        "metadata": preupload_payload,
    }
    sanitized_request = sanitize_teacher_payload(request_summary, include_sensitive=include_sensitive)
    if not execute:
        return TeacherUploadResult(
            action="upload_file",
            path=path,
            status="dry_run",
            request=sanitized_request,
            file_path=str(local_path),
            filename=filename,
            content_type=file_content_type,
            file_size=file_size,
        )
    if not confirm:
        return TeacherUploadResult(
            action="upload_file",
            path=path,
            status="confirmation_required",
            request=sanitized_request,
            file_path=str(local_path),
            filename=filename,
            content_type=file_content_type,
            file_size=file_size,
        )

    pre_status, pre_http_status, pre_response = await _send_endpoint_payload(
        session,
        "POST",
        _url(endpoints, path),
        payload=preupload_payload,
        request_ssl=request_ssl,
    )
    sanitized_pre_response = sanitize_teacher_payload(pre_response, include_sensitive=include_sensitive)
    storage_type = normalize_text(_mapping_value(pre_response, "storage_type", "storageType")).upper()
    upload_url = normalize_text(_mapping_value(pre_response, "upload_url", "uploadUrl"))
    upload_id = _mapping_value(pre_response, "id", "upload_id", "uploadId")
    if pre_status != "ok":
        return TeacherUploadResult(
            action="upload_file",
            path=path,
            status="preupload_failed",
            http_status=pre_http_status,
            request=sanitized_request,
            preupload_response=sanitized_pre_response,
            file_path=str(local_path),
            filename=filename,
            content_type=file_content_type,
            file_size=file_size,
            storage_type=storage_type,
        )
    if not upload_url:
        return TeacherUploadResult(
            action="upload_file",
            path=path,
            status="missing_upload_url",
            http_status=pre_http_status,
            request=sanitized_request,
            preupload_response=sanitized_pre_response,
            file_path=str(local_path),
            filename=filename,
            content_type=file_content_type,
            file_size=file_size,
            storage_type=storage_type,
        )
    if aiohttp is None:
        return TeacherUploadResult(
            action="upload_file",
            path=path,
            status="aiohttp_missing",
            http_status=pre_http_status,
            request=sanitized_request,
            preupload_response=sanitized_pre_response,
            file_path=str(local_path),
            filename=filename,
            content_type=file_content_type,
            file_size=file_size,
            storage_type=storage_type,
        )

    upload_status = "ok"
    upload_http_status = 0
    upload_response: Any = None
    callback_http_status = 0
    callback_response: Any = None
    transcoder = normalize_text(_mapping_value(pre_response, "transcoder")).upper()
    if storage_type == "QINIU":
        token_status, token_http_status, token_response = await _send_endpoint_payload(
            session,
            "GET",
            _url(endpoints, _append_query("/api/uptoken", id=upload_id)),
            request_ssl=request_ssl,
        )
        if token_status != "ok":
            return TeacherUploadResult(
                action="upload_file",
                path=path,
                status="token_failed",
                http_status=pre_http_status,
                request=sanitized_request,
                preupload_response=sanitized_pre_response,
                upload_http_status=token_http_status,
                upload_response=sanitize_teacher_payload(token_response, include_sensitive=include_sensitive),
                file_path=str(local_path),
                filename=filename,
                content_type=file_content_type,
                file_size=file_size,
                storage_type=storage_type,
            )
        uptoken = normalize_text(_mapping_value(token_response, "uptoken", "upToken"))
        block_url = "{}/mkblk/{}".format(upload_url.rstrip("/"), file_size)
        mkfile_url = "{}/mkfile/{}".format(upload_url.rstrip("/"), file_size)
        block_headers = {"Authorization": "UpToken {}".format(uptoken), "Content-Type": "application/octet-stream"}
        with local_path.open("rb") as handle:
            upload_status, upload_http_status, upload_response = await _send_upload_payload(
                session,
                "POST",
                block_url,
                data=handle,
                headers=block_headers,
                request_ssl=request_ssl,
            )
        ctx_value = _mapping_value(upload_response, "ctx")
        if upload_status == "ok":
            upload_status, upload_http_status, upload_response = await _send_upload_payload(
                session,
                "POST",
                mkfile_url,
                data=normalize_text(ctx_value),
                headers={"Authorization": "UpToken {}".format(uptoken), "Content-Type": "text/plain;charset=UTF-8"},
                request_ssl=request_ssl,
            )
    elif storage_type == "S3" and transcoder == "WRPC":
        with local_path.open("rb") as handle:
            upload_status, upload_http_status, upload_response = await _send_upload_payload(
                session,
                "PUT",
                upload_url,
                data=handle,
                headers={"content-type": file_content_type, "accept": "application/json, text/plain, */*"},
                request_ssl=request_ssl,
            )
        if upload_status == "ok":
            callback_status, callback_http_status, callback_response = await _send_upload_callback(
                session,
                endpoints=endpoints,
                upload_id=upload_id,
                file_key=upload_id,
                request_ssl=request_ssl,
            )
            if callback_status != "ok":
                upload_status = "callback_failed"
    else:
        with local_path.open("rb") as handle:
            form = aiohttp.FormData()
            form.add_field("file", handle, filename=filename, content_type=file_content_type)
            upload_status, upload_http_status, upload_response = await _send_upload_payload(
                session,
                "PUT",
                upload_url,
                data=form,
                request_ssl=request_ssl,
            )
        if upload_status == "ok" and storage_type == "S3":
            callback_status, callback_http_status, callback_response = await _send_upload_callback(
                session,
                endpoints=endpoints,
                upload_id=upload_id,
                file_key=_mapping_value(upload_response, "file_key", "fileKey") or upload_id,
                request_ssl=request_ssl,
            )
            if callback_status != "ok":
                upload_status = "callback_failed"

    final_status = "ok" if upload_status == "ok" else "upload_failed"
    if upload_status == "callback_failed":
        final_status = "callback_failed"
    return TeacherUploadResult(
        action="upload_file",
        path=path,
        status=final_status,
        http_status=pre_http_status,
        request=sanitized_request,
        preupload_response=sanitized_pre_response,
        upload_http_status=upload_http_status,
        upload_response=sanitize_teacher_payload(upload_response, include_sensitive=include_sensitive),
        callback_http_status=callback_http_status,
        callback_response=sanitize_teacher_payload(callback_response, include_sensitive=include_sensitive),
        file_path=str(local_path),
        filename=filename,
        content_type=file_content_type,
        file_size=file_size,
        storage_type=storage_type,
    )


def teacher_endpoint_specs(names: Sequence[str] | None = None) -> tuple[TeacherEndpointSpec, ...]:
    if not names:
        return TEACHER_COURSE_ENDPOINTS
    wanted = {normalize_text(name) for name in names if normalize_text(name)}
    return tuple(spec for spec in TEACHER_COURSE_ENDPOINTS if spec.name in wanted)


async def build_teacher_course_report(
    session: Any,
    *,
    endpoints: Any,
    course_id: Any,
    request_ssl: Any = None,
    limit: int = 20,
    include_sensitive: bool = False,
    endpoint_names: Sequence[str] | None = None,
) -> TeacherCourseReport:
    course_id_text = normalize_text(course_id)
    results: list[TeacherEndpointResult] = []
    for spec in teacher_endpoint_specs(endpoint_names):
        results.append(
            await fetch_teacher_endpoint(
                session,
                endpoints=endpoints,
                spec=spec,
                course_id=course_id_text,
                request_ssl=request_ssl,
                limit=limit,
                include_sensitive=include_sensitive,
            )
        )
    status = "ok" if any(result.ok for result in results) else "unavailable"
    return TeacherCourseReport(status=status, course_id=course_id_text, endpoints=tuple(results))


async def fetch_teacher_course_statistics(
    session: Any,
    *,
    endpoints: Any,
    course_id: Any,
    page: int = 1,
    page_size: int = 20,
    conditions: Any = "",
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherCourseReport:
    course_id_text = normalize_text(course_id)
    specs: tuple[tuple[str, str, tuple[str, ...]], ...] = (
        (
            "course_stat_for_instructor",
            "/api/stat/courses/{}/for-instructor".format(course_id_text),
            (),
        ),
        (
            "course_stat_overview",
            "/api/stat/courses/{}/overview".format(course_id_text),
            (),
        ),
        (
            "course_stat_exam",
            "/api/stat/courses/{}/exam".format(course_id_text),
            ("items", "data", "exams", "exam_statistics"),
        ),
        (
            "course_tpdoe_stat_students",
            _append_query("/api/courses/tpdoe/stat-students", course_id=course_id_text),
            ("students", "items", "data", "results"),
        ),
        (
            "courses_stats",
            _append_query("/api/courses/stats", course_ids=course_id_text),
            ("courses", "stats", "items", "data", "results"),
        ),
        (
            "stat_activities_for_courses",
            _append_query("/api/stat/activities-for-courses", course_ids=course_id_text),
            ("activities", "items", "data", "results"),
        ),
        (
            "courses_homeworks_submission_status",
            "/api/courses/homeworks-submission-status?no-intercept=true",
            ("courses", "homeworks", "statuses", "items", "data", "results"),
        ),
        ("courses_settings", "/api/courses/settings", ("settings", "items", "data", "results")),
        (
            "exam_submissions",
            _append_paged_query("/api/exams/submissions/", page=page, page_size=page_size, conditions=_json_query_value(conditions)),
            ("submissions", "items", "data", "results"),
        ),
        ("scores_zip_status", "/api/scores/zip-status", ()),
        ("course_stat_export_zip_status", "/api/zip-status/COURSE_STAT_EXPORT:", ()),
        ("homework_zip_status", "/api/zip-status/homework-zip/", ()),
        ("stat_bulletins", _append_paged_query("/api/stat/bulletins/", page=page, page_size=page_size), ("bulletins", "items", "data", "results")),
        ("stat_h5_courseware", _append_paged_query("/api/stat/h5_courseware/", page=page, page_size=page_size), ("items", "data", "results")),
        ("stat_lesson_rollcall", "/api/stat/lesson/rollcall", ("rollcalls", "items", "data", "results")),
        ("stat_materials", _append_paged_query("/api/stat/materials/", page=page, page_size=page_size), ("materials", "items", "data", "results")),
        ("stat_orgs", "/api/stat/orgs/", ("orgs", "items", "data", "results")),
        ("stat_scorm", _append_paged_query("/api/stat/scorm/", page=page, page_size=page_size), ("scorms", "items", "data", "results")),
        ("stat_semester", "/api/stat/semester/", ("semesters", "items", "data", "results")),
        ("stat_student_rollcall", "/api/stat/student/rollcall", ("rollcalls", "items", "data", "results")),
        ("stat_students", _append_paged_query("/api/stat/students/", page=page, page_size=page_size), ("students", "items", "data", "results")),
        ("stat_teacher_rollcall", "/api/stat/teacher/rollcall", ("rollcalls", "items", "data", "results")),
        ("stat_user_info", "/api/stat/user-info", ()),
        ("stat_video", _append_paged_query("/api/stat/video/", page=page, page_size=page_size), ("videos", "items", "data", "results")),
        ("stat_videos", _append_paged_query("/api/stat/videos/", page=page, page_size=page_size), ("videos", "items", "data", "results")),
        ("stat_vtrs_enable_status", "/api/stat/vtrs/enable-status", ()),
        ("stat_vtrses_count_info", "/api/stat/vtrses/count-info", ()),
        ("stat_weblinks", _append_paged_query("/api/stat/weblinks/", page=page, page_size=page_size), ("weblinks", "items", "data", "results")),
        ("statistic", "/api/statistic", ()),
        ("user_course_certification_scores", "/api/user/course-certification/scores", ("scores", "items", "data", "results")),
    )
    results: list[TeacherEndpointResult] = []
    for name, path, count_keys in specs:
        status, http_status, payload = await _fetch_endpoint_payload(
            session,
            _url(endpoints, path),
            request_ssl=request_ssl,
        )
        results.append(
            _endpoint_result_from_payload(
                name=name,
                feature="statistics",
                path=path,
                status=status,
                http_status=http_status,
                payload=payload,
                count_keys=count_keys,
                include_sensitive=include_sensitive,
            )
        )
    students_path = _append_paged_query(
        "/api/stat/courses/{}/students".format(course_id_text),
        page=page,
        page_size=page_size,
    )
    status, http_status, payload = await _send_endpoint_payload(
        session,
        "POST",
        _url(endpoints, students_path),
        payload=_json_object_payload(conditions),
        request_ssl=request_ssl,
    )
    results.append(
        _endpoint_result_from_payload(
            name="course_stat_students",
            feature="statistics",
            path=students_path,
            status=status,
            http_status=http_status,
            payload=payload,
            count_keys=("students", "items", "data", "results"),
            include_sensitive=include_sensitive,
        )
    )
    status_text = "ok" if any(result.ok for result in results) else "unavailable"
    return TeacherCourseReport(status=status_text, course_id=course_id_text, endpoints=tuple(results))


async def fetch_teacher_air_credit_report(
    session: Any,
    *,
    endpoints: Any,
    course_id: Any = "",
    target: Any = "user",
    page: int = 1,
    page_size: int = 20,
    conditions: Any = "",
    start_date: Any = "",
    end_date: Any = "",
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherCourseReport:
    course_id_text = normalize_text(course_id)
    target_text = normalize_text(target).lower()
    if target_text not in {"user", "course"}:
        target_text = "user"
    conditions_text = _json_query_value(conditions)
    paths: list[tuple[str, str, tuple[str, ...]]] = [
        ("air_credit_user", "/api/air-credit/user", ()),
        ("air_credit_user_token", "/api/air-credit/user/token", ()),
        ("air_credit_users", "/api/air-credit/users/", ("users", "items", "data", "results")),
        ("air_credit_user_courses_ai_ability", "/api/air-credit/user/courses/ai-ability", ("courses", "items", "data")),
        ("air_credit_org_state", "/api/air-credit/org/credit-state-info", ()),
        (
            "air_credit_audits",
            _append_paged_query(
                "/api/air-credit/audits",
                page=page,
                page_size=page_size,
                conditions=conditions_text,
            ),
            ("audits", "items", "data", "results"),
        ),
        (
            "air_credit_instructor_current_semester_courses",
            "/api/air-credit/instructors/current-semester-courses",
            ("courses", "items", "data", "results"),
        ),
        ("air_credit_courses", "/api/air-credit/courses/", ("courses", "items", "data", "results")),
        ("air_credit_resources", "/api/air-credit/resources/", ("resources", "items", "data", "results")),
        (
            "air_credit_{}_states".format(target_text),
            _append_paged_query(
                "/api/air-credit/{}/credit-states".format(target_text),
                page=page,
                page_size=page_size,
                conditions=conditions_text,
            ),
            ("credit_states", "items", "data", "results"),
        ),
        (
            "air_credit_{}_stats".format(target_text),
            _append_paged_query(
                "/api/air-credit/credit-states-stats",
                page=page,
                page_size=page_size,
                conditions=conditions_text,
                start_date=normalize_text(start_date),
                end_date=normalize_text(end_date),
                type=target_text,
            ),
            ("stats", "items", "data", "results"),
        ),
        (
            "air_credit_{}_summary".format(target_text),
            _append_query("/api/air-credit/credit-states-summary", type=target_text),
            (),
        ),
    ]
    if course_id_text:
        paths.insert(
            1,
            (
                "air_credit_course",
                _append_query("/api/air-credit/course", course_id=course_id_text),
                (),
            ),
        )
    results: list[TeacherEndpointResult] = []
    for name, path, count_keys in paths:
        status, http_status, payload = await _fetch_endpoint_payload(
            session,
            _url(endpoints, path),
            request_ssl=request_ssl,
        )
        results.append(
            _endpoint_result_from_payload(
                name=name,
                feature="air_credit",
                path=path,
                status=status,
                http_status=http_status,
                payload=payload,
                count_keys=count_keys,
                include_sensitive=include_sensitive,
            )
        )
    status_text = "ok" if any(result.ok for result in results) else "unavailable"
    return TeacherCourseReport(status=status_text, course_id=course_id_text, endpoints=tuple(results))


async def fetch_teacher_teaching_calendars(
    session: Any,
    *,
    endpoints: Any,
    keyword: Any = "",
    page: int = 1,
    page_size: int = 20,
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    path = _append_paged_query(
        "/api/teaching-calendars",
        page=page,
        page_size=page_size,
        keyword=normalize_text(keyword),
    )
    return await fetch_teacher_endpoint(
        session,
        endpoints=endpoints,
        spec=TeacherEndpointSpec(
            "teaching_calendars",
            path,
            ("items", "teaching_calendars", "data", "results"),
            "teaching_calendar",
        ),
        course_id="",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_management_calendar_meetings(
    session: Any,
    *,
    endpoints: Any,
    page: int = 1,
    page_size: int = 20,
    conditions: Any = "",
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    path = _append_paged_query("/api/management/calendar-meeting", page=page, page_size=page_size)
    status, http_status, payload = await _send_endpoint_payload(
        session,
        "POST",
        _url(endpoints, path),
        payload=_json_object_payload(conditions),
        request_ssl=request_ssl,
    )
    return _endpoint_result_from_payload(
        name="management_calendar_meetings",
        feature="management_calendar",
        path=path,
        status=status,
        http_status=http_status,
        payload=payload,
        count_keys=("calendar_meetings", "meetings", "items", "data", "results"),
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_calendar_meetings(
    session: Any,
    *,
    endpoints: Any,
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path="/api/calendar-meeting",
        name="calendar_meetings",
        feature="calendar",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_vtrs_report(
    session: Any,
    *,
    endpoints: Any,
    page: int = 1,
    page_size: int = 20,
    conditions: Any = "",
    fields: Any = "",
    need_stat: bool = False,
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherCourseReport:
    conditions_text = _json_query_value(conditions)
    fields_text = normalize_text(fields)
    paths: tuple[tuple[str, str, tuple[str, ...]], ...] = (
        (
            "vtrses",
            _append_query(
                "/api/vtrses",
                conditions=conditions_text,
                needStat="true" if need_stat else "false",
                fields=fields_text,
            ),
            ("vtrses", "items", "data", "results"),
        ),
        (
            "vtrses_share_resources",
            _append_paged_query(
                "/api/vtrses/share-resources",
                page=page,
                page_size=page_size,
                conditions=conditions_text,
            ),
            ("resources", "items", "data", "results"),
        ),
        ("vtrses_applications", "/api/vtrses/applications", ("applications", "items", "data", "results")),
        ("vtrses_application_stat", "/api/vtrses/application-stat", ()),
        ("vtrses_subject_libs", "/api/vtrses/subject-libs", ("subject_libs", "items", "data", "results")),
        (
            "vtrses_meeting_classifications",
            "/api/vtrses/meetings/classifications/",
            ("classifications", "items", "data", "results"),
        ),
        (
            "vtrses_resource_classifications",
            "/api/vtrses/resources/classifications/",
            ("classifications", "items", "data", "results"),
        ),
        ("vtrses_access_code", "/api/vtrses/access-code/", ("access_codes", "items", "data", "results")),
        (
            "stat_vtrses",
            _append_paged_query("/api/stat/vtrses", page=page, page_size=page_size, conditions=conditions_text),
            ("vtrses", "items", "data", "results"),
        ),
        (
            "stat_vtrses_data",
            _append_paged_query("/api/stat/vtrses/data", page=page, page_size=page_size, conditions=conditions_text),
            ("items", "data", "results"),
        ),
        (
            "stat_vtrses_resources",
            _append_paged_query("/api/stat/vtrses/resources", page=page, page_size=page_size, conditions=conditions_text),
            ("resources", "items", "data", "results"),
        ),
        (
            "stat_vtrses_activities",
            _append_paged_query("/api/stat/vtrses/activities", page=page, page_size=page_size, conditions=conditions_text),
            ("activities", "items", "data", "results"),
        ),
        ("stat_vtrses_teaching_count_info", "/api/stat/vtrses/teaching-count-info", ()),
        ("manage_vtrses", "/api/manage/vtrses", ("vtrses", "items", "data", "results")),
        ("audit_vtrses", "/api/audit/vtrses", ("vtrses", "items", "data", "results")),
    )
    results: list[TeacherEndpointResult] = []
    for name, path, count_keys in paths:
        status, http_status, payload = await _fetch_endpoint_payload(
            session,
            _url(endpoints, path),
            request_ssl=request_ssl,
        )
        results.append(
            _endpoint_result_from_payload(
                name=name,
                feature="vtrs",
                path=path,
                status=status,
                http_status=http_status,
                payload=payload,
                count_keys=count_keys,
                include_sensitive=include_sensitive,
            )
        )
    status_text = "ok" if any(result.ok for result in results) else "unavailable"
    return TeacherCourseReport(status=status_text, course_id="", endpoints=tuple(results))


async def fetch_teacher_department_report(
    session: Any,
    *,
    endpoints: Any,
    page: int = 1,
    page_size: int = 20,
    conditions: Any = "",
    fields: Any = "",
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherCourseReport:
    conditions_text = _json_query_value(conditions)
    fields_text = normalize_text(fields)
    get_paths: tuple[tuple[str, str, tuple[str, ...]], ...] = (
        ("departments", "/api/departments", ("departments", "items", "data", "results")),
        ("departments_no_intercept", _append_query("/api/departments", **{"no-intercept": "true"}), ("departments", "items", "data", "results")),
        (
            "departments_for_management",
            _append_query("/api/departments", **{"for-management": "true"}, fields=fields_text),
            ("departments", "items", "data", "results"),
        ),
        ("top_departments", _append_query("/api/top-departments", fields=fields_text), ("departments", "items", "data", "results")),
        ("my_departments", "/api/my-departments", ("departments", "items", "data", "results")),
        ("selected_departments", "/api/selected-departments", ("departments", "items", "data", "results")),
        ("department_resource_center", "/api/department/resource-center", ()),
        (
            "department_user_attendance",
            _append_paged_query(
                "/api/stat/departments/user-attendance",
                page=page,
                page_size=page_size,
                conditions=conditions_text,
            ),
            ("attendances", "items", "data", "results"),
        ),
    )
    results: list[TeacherEndpointResult] = []
    for name, path, count_keys in get_paths:
        status, http_status, payload = await _fetch_endpoint_payload(
            session,
            _url(endpoints, path),
            request_ssl=request_ssl,
        )
        results.append(
            _endpoint_result_from_payload(
                name=name,
                feature="department",
                path=path,
                status=status,
                http_status=http_status,
                payload=payload,
                count_keys=count_keys,
                include_sensitive=include_sensitive,
            )
        )
    attendance_path = _append_paged_query("/api/stat/departments/attendance", page=page, page_size=page_size)
    status, http_status, payload = await _send_endpoint_payload(
        session,
        "POST",
        _url(endpoints, attendance_path),
        payload=_json_object_payload(conditions),
        request_ssl=request_ssl,
    )
    results.append(
        _endpoint_result_from_payload(
            name="department_attendance",
            feature="department",
            path=attendance_path,
            status=status,
            http_status=http_status,
            payload=payload,
            count_keys=("attendances", "items", "data", "results"),
            include_sensitive=include_sensitive,
        )
    )
    status_text = "ok" if any(result.ok for result in results) else "unavailable"
    return TeacherCourseReport(status=status_text, course_id="", endpoints=tuple(results))


async def fetch_teacher_ai_ppt_report(
    session: Any,
    *,
    endpoints: Any,
    page: int = 1,
    page_size: int = 20,
    conditions: Any = "",
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherCourseReport:
    results: list[TeacherEndpointResult] = []
    for name, path, count_keys in (
        ("ai_ppt_user_usage_count", "/api/ai-ppt/user/usage/count", ()),
        ("ai_ppt_usage_stats", "/api/ai-ppt/usage/stats", ("stats", "items", "data", "results")),
    ):
        status, http_status, payload = await _fetch_endpoint_payload(
            session,
            _url(endpoints, path),
            request_ssl=request_ssl,
        )
        results.append(
            _endpoint_result_from_payload(
                name=name,
                feature="ai_ppt",
                path=path,
                status=status,
                http_status=http_status,
                payload=payload,
                count_keys=count_keys,
                include_sensitive=include_sensitive,
            )
        )
    usage_path = _append_paged_query("/api/ai-ppt/usage", page=page, page_size=page_size)
    status, http_status, payload = await _send_endpoint_payload(
        session,
        "POST",
        _url(endpoints, usage_path),
        payload=_json_object_payload(conditions),
        request_ssl=request_ssl,
    )
    results.append(
        _endpoint_result_from_payload(
            name="ai_ppt_usage",
            feature="ai_ppt",
            path=usage_path,
            status=status,
            http_status=http_status,
            payload=payload,
            count_keys=("usage", "items", "data", "results"),
            include_sensitive=include_sensitive,
        )
    )
    status_text = "ok" if any(result.ok for result in results) else "unavailable"
    return TeacherCourseReport(status=status_text, course_id="", endpoints=tuple(results))


async def fetch_teacher_platform_report(
    session: Any,
    *,
    endpoints: Any,
    page: int = 1,
    page_size: int = 20,
    conditions: Any = "",
    fields: Any = "",
    department_ids: Any = "",
    obe_params: Any = "",
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherCourseReport:
    conditions_text = _json_query_value(conditions)
    fields_text = normalize_text(fields)
    department_ids_text = normalize_text(department_ids)
    academic_fields = "id,name,sort,is_active"
    obe_path = "/api/obe/existed-metrics?params="
    obe_params_text = _json_query_value(obe_params)
    if obe_params_text:
        obe_path = _append_query("/api/obe/existed-metrics", params=obe_params_text)
    paths: list[tuple[str, str, tuple[str, ...], str]] = [
        ("orgs", "/api/orgs", ("orgs", "items", "data", "results"), "organization"),
        ("orgs_slash", "/api/orgs/", ("orgs", "items", "data", "results"), "organization"),
        ("all_orgs", "/api/all-orgs", ("orgs", "items", "data", "results"), "organization"),
        ("org", "/api/org/", (), "organization"),
        ("org_lang_settings", "/api/orgs/1/lang-settings", (), "organization"),
        (
            "academic_years",
            _append_query("/api/academic-years", fields=academic_fields),
            ("academic_years", "items", "data", "results"),
            "term",
        ),
        (
            "my_academic_years",
            _append_query("/api/my-academic-years", fields=academic_fields),
            ("academic_years", "items", "data", "results"),
            "term",
        ),
        (
            "my_curriculum_academic_years",
            _append_query("/api/my-curriculum-academic-years", fields=academic_fields),
            ("academic_years", "items", "data", "results"),
            "term",
        ),
        ("semesters", "/api/semesters", ("semesters", "items", "data", "results"), "term"),
        ("my_semesters", "/api/my-semesters", ("semesters", "items", "data", "results"), "term"),
        (
            "my_semesters_all",
            _append_query("/api/my-semesters-all", fields=academic_fields),
            ("semesters", "items", "data", "results"),
            "term",
        ),
        (
            "my_curriculum_semesters",
            "/api/my-curriculum-semesters",
            ("semesters", "items", "data", "results"),
            "term",
        ),
        (
            "course_classifications",
            "/api/course-classifications",
            ("course_classifications", "classifications", "items", "data", "results"),
            "classification",
        ),
        (
            "curriculum_classifications",
            "/api/curriculum-classifications",
            ("curriculum_classifications", "classifications", "items", "data", "results"),
            "classification",
        ),
        (
            "curriculum_conditions",
            "/api/curriculum-conditions/",
            ("curriculum_conditions", "conditions", "items", "data", "results"),
            "classification",
        ),
        (
            "portal_classifications",
            "/api/portal-classifications",
            ("classifications", "items", "data", "results"),
            "classification",
        ),
        ("current_semester_info", "/api/current-semester-info", (), "term"),
        ("authz_roles", "/api/authz/roles", ("roles", "items", "data", "results"), "authorization"),
        ("authz_permissions", "/api/authz/permissions", ("permissions", "items", "data", "results"), "authorization"),
        (
            "authz_course_permissions",
            "/api/authz/course-permissions",
            ("permissions", "items", "data", "results"),
            "authorization",
        ),
        (
            "authz_user_roles",
            _append_paged_query("/api/authz/user-roles", page=page, page_size=page_size, conditions=conditions_text),
            ("roles", "user_roles", "items", "data", "results"),
            "authorization",
        ),
        ("my_classes", "/api/my-classes", ("classes", "items", "data", "results"), "course"),
        (
            "my_teaching_classes",
            "/api/my-teaching-classes",
            ("classes", "teaching_classes", "items", "data", "results"),
            "course",
        ),
        (
            "virtual_classroom_resources",
            _append_paged_query(
                "/api/virtual-classroom-resources",
                page=page,
                page_size=page_size,
                conditions=conditions_text,
                fields=fields_text,
            ),
            ("resources", "items", "data", "results"),
            "virtual_classroom",
        ),
        (
            "live_records",
            _append_paged_query(
                "/api/live-records/",
                page=page,
                page_size=page_size,
                conditions=conditions_text,
                fields=fields_text,
            ),
            ("live_records", "records", "items", "data", "results"),
            "virtual_classroom",
        ),
        ("obe_existed_metrics", obe_path, ("metrics", "items", "data", "results"), "obe"),
        (
            "program_course_programs",
            _append_query("/api/program/course-programs", department_ids=department_ids_text),
            ("course_programs", "programs", "items", "data", "results"),
            "program",
        ),
        (
            "program_user_programs",
            _append_query("/api/program/user-programs", fields=fields_text),
            ("user_programs", "programs", "items", "data", "results"),
            "program",
        ),
        (
            "user_academic_learning_resources",
            "/api/user/academic-learning-resources",
            ("resources", "items", "data", "results"),
            "learning_resource",
        ),
        (
            "todos",
            _append_query("/api/todos", exclude_questionnaire="true"),
            ("todos", "items", "data", "results"),
            "task",
        ),
        (
            "in_progress_homeworks",
            "/api/in-progress-homeworks?no-intercept=true",
            ("homeworks", "items", "data", "results"),
            "task",
        ),
        (
            "jobs",
            _append_paged_query("/api/jobs/", page=page, page_size=page_size, conditions=conditions_text),
            ("jobs", "items", "data", "results"),
            "job",
        ),
        (
            "inclass_report",
            _append_paged_query("/api/inclass-report/", page=page, page_size=page_size, conditions=conditions_text),
            ("reports", "items", "data", "results"),
            "report",
        ),
        (
            "sign_in_stats",
            "/api/sign-in/stats",
            ("stats", "items", "data", "results"),
            "sign_in",
        ),
        (
            "user_recently_visited_courses",
            "/api/user/recently-visited-courses",
            ("visited_courses", "courses", "items", "data", "results"),
            "course",
        ),
        (
            "alerts",
            _append_paged_query("/api/alerts/", page=page, page_size=page_size, conditions=conditions_text),
            ("alerts", "items", "data", "results"),
            "alert",
        ),
        (
            "alert_logs",
            _append_paged_query("/api/alert-logs/", page=page, page_size=page_size, conditions=conditions_text),
            ("logs", "items", "data", "results"),
            "alert",
        ),
        (
            "alert_members",
            "/api/alert/members?user_ids=",
            ("members", "users", "items", "data", "results"),
            "alert",
        ),
        ("calendar_alerts", "/api/calendar-alerts?no-intercept=true", ("alerts", "items", "data", "results"), "calendar"),
        ("calendar_events", "/api/calendar-events?no-intercept=true", ("events", "items", "data", "results"), "calendar"),
        ("calendar_timetables", "/api/calendar-timetables?no-intercept=true", ("timetables", "items", "data", "results"), "calendar"),
        ("instruction_team_meeting", "/api/instruction-team/meeting", ("meetings", "items", "data", "results"), "calendar"),
        ("task_last", "/api/task/last?no-intercept=true", ("task", "items", "data", "results"), "task"),
        ("org_change_plan_list", "/api/org/change-plan-list", ("plans", "items", "data", "results"), "organization"),
        ("third_party_info", "/api/third-party/info", (), "integration"),
        ("topics_latest", _append_query("/api/topics/latest", **{"no-intercept": "true"}, count=page_size), ("topics", "items", "data", "results"), "forum"),
        ("user_index_courses_info_status", "/api/user-index-stat/courses/info-status", (), "statistics"),
        ("user_index_org_summary", "/api/user-index-stat/org-summary", (), "statistics"),
        ("user_profile_stat", "/api/user/profile-stat", (), "statistics"),
    ]
    results: list[TeacherEndpointResult] = []
    for name, path, count_keys, feature in paths:
        status, http_status, payload = await _fetch_endpoint_payload(
            session,
            _url(endpoints, path),
            request_ssl=request_ssl,
        )
        results.append(
            _endpoint_result_from_payload(
                name=name,
                feature=feature,
                path=path,
                status=status,
                http_status=http_status,
                payload=payload,
                count_keys=count_keys,
                include_sensitive=include_sensitive,
            )
        )
    status_text = "ok" if any(result.ok for result in results) else "unavailable"
    return TeacherCourseReport(status=status_text, course_id="", endpoints=tuple(results))


async def fetch_teacher_org_bulletin_report(
    session: Any,
    *,
    endpoints: Any,
    page: int = 1,
    page_size: int = 20,
    conditions: Any = "",
    fields: Any = "",
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherCourseReport:
    conditions_text = _json_query_value(conditions)
    fields_text = normalize_text(fields)
    paths: tuple[tuple[str, str, tuple[str, ...]], ...] = (
        (
            "org_bulletins",
            _append_paged_query(
                "/api/org-bulletin/bulletins",
                page=page,
                page_size=page_size,
                conditions=conditions_text,
                fields=fields_text,
            ),
            ("bulletins", "items", "data", "results"),
        ),
        (
            "org_bulletins_slash",
            _append_paged_query(
                "/api/org-bulletin/bulletins/",
                page=page,
                page_size=page_size,
                conditions=conditions_text,
                fields=fields_text,
            ),
            ("bulletins", "items", "data", "results"),
        ),
        (
            "org_bulletins_latest",
            "/api/org-bulletin/bulletins/latest",
            ("bulletins", "items", "data", "results"),
        ),
        (
            "org_bulletin_classifications",
            "/api/org-bulletin/classifications",
            ("classifications", "items", "data", "results"),
        ),
    )
    results: list[TeacherEndpointResult] = []
    for name, path, count_keys in paths:
        status, http_status, payload = await _fetch_endpoint_payload(
            session,
            _url(endpoints, path),
            request_ssl=request_ssl,
        )
        results.append(
            _endpoint_result_from_payload(
                name=name,
                feature="org_bulletin",
                path=path,
                status=status,
                http_status=http_status,
                payload=payload,
                count_keys=count_keys,
                include_sensitive=include_sensitive,
            )
        )
    status_text = "ok" if any(result.ok for result in results) else "unavailable"
    return TeacherCourseReport(status=status_text, course_id="", endpoints=tuple(results))


async def fetch_teacher_catalog_report(
    session: Any,
    *,
    endpoints: Any,
    page: int = 1,
    page_size: int = 20,
    conditions: Any = "",
    fields: Any = "",
    org_id: Any = "",
    response_key: Any = "",
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherCourseReport:
    conditions_payload = _json_object_payload(conditions)
    conditions_text = _json_query_value(conditions)
    fields_text = normalize_text(fields)
    if fields_text and "fields" not in conditions_payload:
        conditions_payload = {**conditions_payload, "fields": fields_text}
    page_num = max(1, int(page or 1))
    size_num = max(1, int(page_size or 20))
    org_id_text = normalize_text(org_id)
    response_key_text = normalize_text(response_key)
    results: list[TeacherEndpointResult] = []

    post_specs: tuple[tuple[str, str, tuple[str, ...], str], ...] = (
        (
            "catalog_courses",
            _append_paged_query("/api/courses", page=page_num, page_size=size_num),
            ("courses", "items", "data", "results"),
            "catalog",
        ),
        (
            "catalog_reviewed_courses",
            _append_paged_query("/api/reviewed-courses", page=page_num, page_size=size_num),
            ("courses", "items", "data", "results"),
            "catalog",
        ),
        (
            "catalog_users",
            _append_paged_query(
                "/api/users",
                page=page_num,
                page_size=size_num,
                for_management="true",
                need_ai_activated="true",
            ),
            ("users", "items", "data", "results"),
            "catalog",
        ),
    )
    for name, path, count_keys, feature in post_specs:
        status, http_status, payload = await _send_endpoint_payload(
            session,
            "POST",
            _url(endpoints, path),
            payload=conditions_payload,
            request_ssl=request_ssl,
        )
        results.append(
            _endpoint_result_from_payload(
                name=name,
                feature=feature,
                path=path,
                status=status,
                http_status=http_status,
                payload=payload,
                count_keys=count_keys,
                include_sensitive=include_sensitive,
            )
        )

    get_specs: tuple[tuple[str, str, tuple[str, ...], str], ...] = (
        (
            "catalog_users_ignore_avatar",
            _append_paged_query("/api/users", page=page_num, page_size=size_num, ignore_avatar="false"),
            ("users", "items", "data", "results"),
            "catalog",
        ),
        (
            "catalog_user_all",
            _append_query("/api/user", type="all", response_key=response_key_text),
            ("users", "items", "data", "results"),
            "catalog",
        ),
        ("catalog_user_instructors", _append_query("/api/user", type="instructor"), ("users", "items", "data", "results"), "catalog"),
        (
            "catalog_users_without_authz_roles",
            _append_paged_query("/api/users/without_authz_roles", page=page_num, page_size=size_num, ignore_avatar="false"),
            ("users", "items", "data", "results"),
            "catalog",
        ),
        ("catalog_user_classes", "/api/user/classes", ("classes", "items", "data", "results"), "catalog"),
        ("catalog_course_cover_list", "/api/course/cover-list", ("covers", "items", "data", "results"), "catalog"),
        (
            "catalog_course_shared_records",
            _append_paged_query("/api/course/shared-records/", page=page_num, page_size=size_num, conditions=conditions_text),
            ("records", "items", "data", "results"),
            "catalog",
        ),
        ("catalog_course_certification", "/api/course_certification/", ("certifications", "items", "data", "results"), "certification"),
        ("catalog_courses_count", _append_query("/api/courses/count", conditions=conditions_text), (), "catalog"),
        (
            "catalog_courses_public",
            _append_query("/api/courses/public", conditions=conditions_text),
            ("courses", "items", "data", "results"),
            "catalog",
        ),
        ("catalog_certifications", "/api/certifications", ("certifications", "items", "data", "results"), "certification"),
        (
            "catalog_certifications_for_management",
            "/api/certifications-for-management",
            ("certifications", "items", "data", "results"),
            "certification",
        ),
        (
            "catalog_course_subjects",
            _append_paged_query("/api/course-subjects", page=page_num, page_size=size_num, conditions=conditions_text, fields=fields_text),
            ("course_subjects", "subjects", "items", "data", "results"),
            "catalog",
        ),
        ("catalog_classes", _append_query("/api/classes", org_id=org_id_text), ("classes", "items", "data", "results"), "catalog"),
        ("catalog_grades", _append_query("/api/grades", org_id=org_id_text), ("grades", "items", "data", "results"), "catalog"),
        ("catalog_combine_courses", "/api/combine-courses", ("combine_courses", "courses", "items", "data", "results"), "catalog"),
        ("catalog_combine_courses_slash", "/api/combine-courses/", ("combine_courses", "courses", "items", "data", "results"), "catalog"),
        (
            "catalog_course_interactions",
            "/api/courses/interactions/",
            ("interactions", "items", "data", "results"),
            "catalog",
        ),
        (
            "catalog_interactions",
            "/api/interactions/",
            ("interactions", "items", "data", "results"),
            "catalog",
        ),
        (
            "catalog_interaction_vote",
            "/api/courses/interactions/vote/",
            ("votes", "interactions", "items", "data", "results"),
            "catalog",
        ),
        (
            "catalog_interaction_submissions",
            _append_paged_query("/api/interaction-submissions/", page=page_num, page_size=size_num),
            ("submissions", "items", "data", "results"),
            "catalog",
        ),
        (
            "catalog_course_resource_audit",
            "/api/courses/statistic/resource-audit",
            ("audits", "items", "data", "results"),
            "catalog",
        ),
        ("catalog_curriculums", "/api/curriculums", ("curriculums", "items", "data", "results"), "catalog"),
        ("catalog_curriculums_slash", "/api/curriculums/", ("curriculums", "items", "data", "results"), "catalog"),
        (
            "catalog_curriculum_sections",
            "/api/curriculum-sections/",
            ("curriculum_sections", "sections", "items", "data", "results"),
            "catalog",
        ),
        ("catalog_warning_students", "/api/warning/student/", ("warnings", "students", "items", "data", "results"), "catalog"),
        ("catalog_authz_course_roles", "/api/authz/course-roles", ("roles", "items", "data", "results"), "catalog"),
        ("catalog_data_import_course_groups", "/api/data-import/course-groups", ("imports", "items", "data", "results"), "data_import"),
        ("catalog_data_import_course", "/api/data-import/course/", ("imports", "items", "data", "results"), "data_import"),
        ("catalog_data_import_courses", "/api/data-import/courses", ("imports", "items", "data", "results"), "data_import"),
        ("catalog_data_import_scores", "/api/data-import/scores/", ("imports", "items", "data", "results"), "data_import"),
        ("catalog_data_import_item_scores", "/api/data-import/item_scores/", ("imports", "items", "data", "results"), "data_import"),
        ("catalog_data_import_seat_number", "/api/data-import/seat-number/", ("imports", "items", "data", "results"), "data_import"),
        ("catalog_data_import_validation", "/api/data-import/validation", ("validations", "items", "data", "results"), "data_import"),
        (
            "catalog_campus_subject_lib_classifications",
            "/api/campus-subject-lib/classifications",
            ("classifications", "items", "data", "results"),
            "campus_subject_lib",
        ),
        (
            "catalog_campus_subject_lib_classification_counts",
            "/api/campus-subject-lib/classifications/subject-count",
            ("classifications", "counts", "items", "data", "results"),
            "campus_subject_lib",
        ),
        (
            "catalog_campus_subject_lib_subjects",
            _append_paged_query("/api/campus-subject-lib/subjects", page=page_num, page_size=size_num, conditions=conditions_text),
            ("subjects", "items", "data", "results"),
            "campus_subject_lib",
        ),
        (
            "catalog_campus_subject_lib_combination_subjects",
            _append_paged_query("/api/campus-subject-lib/combination-subjects", page=page_num, page_size=size_num, conditions=conditions_text),
            ("subjects", "items", "data", "results"),
            "campus_subject_lib",
        ),
    )
    for name, path, count_keys, feature in get_specs:
        status, http_status, payload = await _fetch_endpoint_payload(
            session,
            _url(endpoints, path),
            request_ssl=request_ssl,
        )
        results.append(
            _endpoint_result_from_payload(
                name=name,
                feature=feature,
                path=path,
                status=status,
                http_status=http_status,
                payload=payload,
                count_keys=count_keys,
                include_sensitive=include_sensitive,
            )
        )
    status_text = "ok" if any(result.ok for result in results) else "unavailable"
    return TeacherCourseReport(status=status_text, course_id="", endpoints=tuple(results))


async def fetch_teacher_media_report(
    session: Any,
    *,
    endpoints: Any,
    page: int = 1,
    page_size: int = 20,
    conditions: Any = "",
    fields: Any = "",
    course_id: Any = "",
    activity_id: Any = "",
    upload_id: Any = "",
    jwt: Any = "",
    org_id: Any = "",
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherCourseReport:
    conditions_text = _json_query_value(conditions)
    fields_text = normalize_text(fields)
    course_id_text = normalize_text(course_id)
    activity_id_text = normalize_text(activity_id)
    upload_id_text = normalize_text(upload_id)
    jwt_text = normalize_text(jwt)
    org_id_text = normalize_text(org_id)
    paths: list[tuple[str, str, tuple[str, ...], str]] = [
        ("media_lesson_resources_shared_stat", "/api/lesson-resources/shared-stat", ("stats", "items", "data", "results"), "media"),
        (
            "media_user_other_video_resources",
            _append_paged_query(
                "/api/user/other-video-resources",
                page=page,
                page_size=page_size,
                conditions=conditions_text,
                fields=fields_text,
            ),
            ("resources", "items", "data", "results"),
            "media",
        ),
        (
            "media_user_third_part_resources",
            _append_paged_query(
                "/api/user/third-part-resources",
                page=page,
                page_size=page_size,
                conditions=conditions_text,
                fields=fields_text,
            ),
            ("resources", "items", "data", "results"),
            "media",
        ),
        (
            "media_public_resources",
            _append_paged_query("/api/public-resources", page=page, page_size=page_size, conditions=conditions_text),
            ("resources", "items", "data", "results"),
            "media",
        ),
        (
            "media_caption_task_progress",
            "/api/media/media-caption-tasks/progress?media_ids=",
            ("progress", "tasks", "items", "data", "results"),
            "media",
        ),
        (
            "media_copy_third_part_resources",
            _append_paged_query(
                "/api/copy-third-part-resources",
                page=page,
                page_size=page_size,
                conditions=conditions_text,
            ),
            ("resources", "items", "data", "results"),
            "media",
        ),
        ("media_lark_files", _append_paged_query("/api/lark/files", page=page, page_size=page_size), ("files", "items", "data", "results"), "integration"),
        ("media_lark_authorization_check", "/api/lark/authorization/check", (), "integration"),
        ("media_user_links", "/api/user/links", ("links", "items", "data", "results"), "media"),
        ("media_user_links_slash", "/api/user/links/", ("links", "items", "data", "results"), "media"),
        ("media_user_storage_used", "/api/user/storage-used", (), "media"),
        ("media_resource_folders", "/api/resource/folders", ("folders", "items", "data", "results"), "media"),
        (
            "media_wedrive_files",
            _append_paged_query("/api/wedrive/files", page=page, page_size=page_size, conditions=conditions_text),
            ("files", "items", "data", "results"),
            "media",
        ),
        (
            "media_resources",
            _append_paged_query("/api/resources/", page=page, page_size=page_size, conditions=conditions_text),
            ("resources", "items", "data", "results"),
            "media",
        ),
        (
            "media_online_videos",
            _append_paged_query("/api/online-videos/", page=page, page_size=page_size, conditions=conditions_text),
            ("videos", "items", "data", "results"),
            "media",
        ),
        (
            "media_video_quizzes",
            _append_paged_query("/api/video-quizzes/", page=page, page_size=page_size, conditions=conditions_text),
            ("video_quizzes", "quizzes", "items", "data", "results"),
            "media",
        ),
        ("media_video_quizzes_arrears", "/api/video-quizzes/org/arrears/", (), "media"),
        (
            "media_meetings",
            _append_paged_query("/api/meeting/", page=page, page_size=page_size, conditions=conditions_text),
            ("meetings", "items", "data", "results"),
            "meeting",
        ),
        ("media_meeting_week_time_periods", "/api/meeting/week/time-periods", ("time_periods", "items", "data", "results"), "meeting"),
        ("media_meeting_slot", "/api/meeting/slot/", ("slots", "items", "data", "results"), "meeting"),
        ("media_meeting_slots", "/api/meeting/slots", ("slots", "items", "data", "results"), "meeting"),
        ("media_meeting_slots_slash", "/api/meeting/slots/", ("slots", "items", "data", "results"), "meeting"),
        ("media_meeting_shanghaitech", "/api/meeting/shanghaitech/", ("meetings", "items", "data", "results"), "meeting"),
        ("media_tencent_meeting_check_user_auth", "/api/tencent_meeting/check-user-auth", (), "meeting"),
        ("media_tencent_meeting_authorization_url", "/api/tencent-meeting/authorization-url", (), "meeting"),
        (
            "media_tencent_meeting_statistics",
            _append_paged_query("/api/tencent-meeting/statistics", page=page, page_size=page_size, conditions=conditions_text),
            ("statistics", "items", "data", "results"),
            "meeting",
        ),
        (
            "media_lecture_live_schedule",
            _append_paged_query("/api/lecture-live/schedule/", page=page, page_size=page_size, conditions=conditions_text),
            ("schedules", "items", "data", "results"),
            "live",
        ),
        ("media_lecture_live", _append_query("/api/lecture-live", jwt=jwt_text), (), "live"),
        (
            "media_classin_join_url",
            _append_query("/api/activies/classin/join-url", course_id=course_id_text, activity_id=activity_id_text),
            (),
            "live",
        ),
        (
            "media_classin_webcast_url",
            _append_query("/api/activities/classin/webcast-url", course_id=course_id_text, activity_id=activity_id_text),
            (),
            "live",
        ),
        (
            "media_dingtalk_lives",
            _append_paged_query("/api/dingtalk-lives/", page=page, page_size=page_size, conditions=conditions_text),
            ("lives", "items", "data", "results"),
            "live",
        ),
        (
            "media_interaction_activities",
            _append_paged_query("/api/interaction-activities/", page=page, page_size=page_size, conditions=conditions_text),
            ("activities", "items", "data", "results"),
            "live",
        ),
        (
            "media_course_lecture_live_activities",
            _append_query("/api/courses/lecture-live-activity/", course_id=course_id_text),
            ("activities", "items", "data", "results"),
            "live",
        ),
        (
            "media_course_tencent_meeting_activities",
            _append_query("/api/courses/tencent-meeting/activities", course_id=course_id_text),
            ("activities", "items", "data", "results"),
            "meeting",
        ),
        (
            "media_course_template",
            _append_query("/api/course_template", org_id=org_id_text),
            ("templates", "items", "data", "results"),
            "template",
        ),
        (
            "media_course_template_slash",
            _append_query("/api/course_template/", org_id=org_id_text),
            ("templates", "items", "data", "results"),
            "template",
        ),
        (
            "media_course_templates",
            _append_query("/api/course_templates", org_id=org_id_text, conditions=conditions_text),
            ("templates", "items", "data", "results"),
            "template",
        ),
        (
            "media_knowledge_nodes",
            _append_paged_query("/api/knowledge-nodes/", page=page, page_size=page_size, conditions=conditions_text),
            ("knowledge_nodes", "nodes", "items", "data", "results"),
            "knowledge",
        ),
        ("media_knowledge_node", "/api/knowledge-node/", ("knowledge_nodes", "nodes", "items", "data", "results"), "knowledge"),
        ("media_user_lesson_resource_progress", "/api/user/lesson-resources/progress?no-intercept=true", ("progress", "items", "data", "results"), "media"),
        (
            "media_shanghaitech_lib_resources",
            _append_paged_query("/api/shanghaitech/lib-resources", page=page, page_size=page_size, conditions=conditions_text),
            ("resources", "items", "data", "results"),
            "media",
        ),
        (
            "media_video_suite_comments",
            _append_paged_query("/api/video-suite/comments/", page=page, page_size=page_size, conditions=conditions_text),
            ("comments", "items", "data", "results"),
            "media",
        ),
    ]
    if upload_id_text:
        quoted_upload = quote(upload_id_text, safe="")
        paths.extend(
            [
                ("media_upload_preview", "/api/uploads/{}?preview=true".format(quoted_upload), (), "upload"),
                ("media_upload_audio", "/api/uploads/audio/{}?preview=true".format(quoted_upload), (), "upload"),
            ]
        )
    results: list[TeacherEndpointResult] = []
    for name, path, count_keys, feature in paths:
        status, http_status, payload = await _fetch_endpoint_payload(
            session,
            _url(endpoints, path),
            request_ssl=request_ssl,
        )
        results.append(
            _endpoint_result_from_payload(
                name=name,
                feature=feature,
                path=path,
                status=status,
                http_status=http_status,
                payload=payload,
                count_keys=count_keys,
                include_sensitive=include_sensitive,
            )
        )
    status_text = "ok" if any(result.ok for result in results) else "unavailable"
    return TeacherCourseReport(status=status_text, course_id=course_id_text, endpoints=tuple(results))


async def fetch_teacher_authoring_report(
    session: Any,
    *,
    endpoints: Any,
    page: int = 1,
    page_size: int = 20,
    conditions: Any = "",
    fields: Any = "",
    course_id: Any = "",
    activity_id: Any = "",
    subject_id: Any = "",
    submission_id: Any = "",
    upload_id: Any = "",
    knowledge_base_id: Any = "",
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherCourseReport:
    conditions_text = _json_query_value(conditions)
    conditions_payload = _json_object_payload(conditions)
    fields_text = normalize_text(fields)
    course_id_text = normalize_text(course_id)
    activity_id_text = normalize_text(activity_id)
    subject_id_text = normalize_text(subject_id)
    submission_id_text = normalize_text(submission_id)
    upload_id_text = normalize_text(upload_id)
    knowledge_base_id_text = normalize_text(knowledge_base_id)
    upload_details_payload: dict[str, Any] = dict(conditions_payload)
    if course_id_text and "course_id" not in upload_details_payload:
        upload_details_payload["course_id"] = course_id_text
    if upload_id_text and "upload_ids" not in upload_details_payload:
        upload_details_payload["upload_ids"] = [upload_id_text]
    results: list[TeacherEndpointResult] = []

    post_specs: tuple[tuple[str, str, tuple[str, ...], str, Any], ...] = (
        (
            "authoring_my_courses",
            _append_paged_query("/api/my-courses", page=page, page_size=page_size, conditions=conditions_text, fields=fields_text),
            ("courses", "items", "data", "results"),
            "course",
            conditions_payload,
        ),
        (
            "authoring_upload_details_query",
            "/api/uploads/details/query",
            ("items", "uploads", "data", "results"),
            "upload",
            upload_details_payload,
        ),
    )
    for name, path, count_keys, feature, payload in post_specs:
        status, http_status, response_payload = await _send_endpoint_payload(
            session,
            "POST",
            _url(endpoints, path),
            payload=payload,
            request_ssl=request_ssl,
        )
        results.append(
            _endpoint_result_from_payload(
                name=name,
                feature=feature,
                path=path,
                status=status,
                http_status=http_status,
                payload=response_payload,
                count_keys=count_keys,
                include_sensitive=include_sensitive,
            )
        )

    get_specs: list[tuple[str, str, tuple[str, ...], str]] = [
        ("authoring_project", "/api/project/", ("project", "items", "data", "results"), "project"),
        (
            "authoring_projects",
            _append_paged_query("/api/projects", page=page, page_size=page_size, conditions=conditions_text),
            ("projects", "items", "data", "results"),
            "project",
        ),
        ("authoring_blueprint", "/api/blueprint/", ("blueprints", "items", "data", "results"), "project"),
        ("authoring_outline_setting", "/api/outline-setting", ("formatted_options", "options", "items", "data"), "outline"),
        ("authoring_subjects", "/api/subjects/", ("subjects", "items", "data", "results"), "question"),
        (
            "authoring_feedback_activities",
            _append_paged_query("/api/feedback-activities/", page=page, page_size=page_size, conditions=conditions_text),
            ("feedback_activities", "activities", "items", "data", "results"),
            "feedback",
        ),
        ("authoring_top_departments", _append_query("/api/top-departments", fields=fields_text), ("departments", "items", "data", "results"), "department"),
        ("authoring_chinamcloud_resources", "/api/chinamcloud/resources", ("resources", "items", "data", "results"), "media"),
        ("authoring_upload_references", "/api/uploads/references/", ("uploads", "references", "items", "data", "results"), "upload"),
        ("authoring_upload_marked_attachment", "/api/uploads/marked_attachment/", ("uploads", "attachments", "items", "data", "results"), "upload"),
        ("authoring_upload_share_to_courses", "/api/uploads/share-to-courses", ("courses", "items", "data", "results"), "upload"),
        ("authoring_shared_resources_stat", "/api/shared-resources/stat", ("stats", "items", "data", "results"), "resource"),
        (
            "authoring_shared_resources_video_stat",
            "/api/shared-resources/stat/video-resources",
            ("resources", "items", "data", "results"),
            "resource",
        ),
        ("authoring_save_resources_check", "/api/save-resources/check", (), "resource"),
        ("authoring_custom_knowledge_graph_stat", "/api/custom-knowledge-graph/stat", (), "knowledge"),
        (
            "authoring_knowledge_graph_kfs_subjects",
            _append_paged_query("/api/knowledge-graph/kfs-subjects", page=page, page_size=page_size, conditions=conditions_text),
            ("subjects", "items", "data", "results"),
            "knowledge",
        ),
        (
            "authoring_knowledge_graph_forest_stats",
            "/api/knowledge-graph/forest-versions/-/stats",
            ("stats", "items", "data", "results"),
            "knowledge",
        ),
        (
            "authoring_shared_resources_admin_to_other_orgs",
            _append_paged_query("/api/shared-resources/admin/to-other-orgs", page=page, page_size=page_size, conditions=conditions_text),
            ("resources", "items", "data", "results"),
            "resource",
        ),
        (
            "authoring_my_notes",
            _append_paged_query("/api/my-notes/", page=page, page_size=page_size, conditions=conditions_text),
            ("notes", "items", "data", "results"),
            "note",
        ),
        (
            "authoring_correction_books",
            _append_paged_query("/api/correction-books/", page=page, page_size=page_size, conditions=conditions_text),
            ("correction_books", "books", "items", "data", "results"),
            "correction",
        ),
        ("authoring_authz_courses", "/api/authz/courses/", ("courses", "items", "data", "results"), "authorization"),
        ("authoring_portal_logo", "/api/portal-logo", (), "platform"),
    ]
    if subject_id_text:
        get_specs.append(
            (
                "authoring_subject_detail",
                "/api/subjects/{}".format(quote(subject_id_text, safe="")),
                ("subject", "items", "data", "results"),
                "question",
            )
        )
    if activity_id_text:
        get_specs.append(
            (
                "authoring_feedback_activity",
                "/api/feedback-activities/{}".format(quote(activity_id_text, safe="")),
                ("feedback_activity", "activity", "items", "data", "results"),
                "feedback",
            )
        )
    if course_id_text:
        get_specs.extend(
            [
                (
                    "authoring_course_feedback_activities",
                    "/api/courses/{}/feedback-activities".format(quote(course_id_text, safe="")),
                    ("feedback_activities", "activities", "items", "data", "results"),
                    "feedback",
                ),
                (
                    "authoring_course_danmu_config",
                    "/api/courses/danmu/{}/config".format(quote(course_id_text, safe="")),
                    (),
                    "danmu",
                ),
                (
                    "authoring_knowledge_graph_import_info",
                    "/api/knowledge-graph/courses/{}/kfs-import-info".format(quote(course_id_text, safe="")),
                    (),
                    "knowledge",
                ),
                (
                    "authoring_user_course_resource_folder",
                    "/api/user/course/{}/resources/folder".format(quote(course_id_text, safe="")),
                    ("folders", "items", "data", "results"),
                    "resource",
                ),
                (
                    "authoring_course_knowledge_base",
                    "/api/course/{}/knowledge-base".format(quote(course_id_text, safe="")),
                    ("knowledge_bases", "items", "data", "results"),
                    "knowledge",
                ),
            ]
        )
        if knowledge_base_id_text:
            get_specs.append(
                (
                    "authoring_course_knowledge_base_resources",
                    _append_paged_query(
                        "/api/course/{}/knowledge-base/{}/resources".format(
                            quote(course_id_text, safe=""),
                            quote(knowledge_base_id_text, safe=""),
                        ),
                        page=page,
                        page_size=page_size,
                        conditions=conditions_text,
                    ),
                    ("resources", "items", "data", "results"),
                    "knowledge",
                )
            )
    if upload_id_text:
        get_specs.append(
            (
                "authoring_upload_document_url",
                "/api/uploads/document/{}/url?preview=true".format(quote(upload_id_text, safe="")),
                (),
                "upload",
            )
        )
    if activity_id_text and upload_id_text:
        quoted_activity = quote(activity_id_text, safe="")
        quoted_upload = quote(upload_id_text, safe="")
        get_specs.extend(
            [
                (
                    "authoring_h5_courseware_upload_url",
                    "/api/h5-courseware/{}/upload/{}/url".format(quoted_activity, quoted_upload),
                    (),
                    "courseware",
                ),
                (
                    "authoring_h5_courseware_upload_cmi",
                    "/api/h5-courseware/{}/upload/{}/cmi".format(quoted_activity, quoted_upload),
                    (),
                    "courseware",
                ),
            ]
        )
    if submission_id_text:
        quoted_submission = quote(submission_id_text, safe="")
        get_specs.extend(
            [
                (
                    "authoring_submission_marked_attachments",
                    "/api/submissions/{}/marked_attachments".format(quoted_submission),
                    ("marked_attachment_infos", "attachments", "items", "data", "results"),
                    "grading",
                ),
                (
                    "authoring_submission_marked_attachments_slash",
                    "/api/submissions/{}/marked_attachments/{}".format(quoted_submission, quote(upload_id_text, safe=""))
                    if upload_id_text
                    else "/api/submissions/{}/submission_marked_attachments".format(quoted_submission),
                    ("marked_attachment_infos", "attachments", "items", "data", "results"),
                    "grading",
                ),
            ]
        )
        if subject_id_text:
            get_specs.append(
                (
                    "authoring_submission_subject_marked_attachments",
                    "/api/submissions/{}/subject_marked_attachments/{}".format(
                        quoted_submission,
                        quote(subject_id_text, safe=""),
                    ),
                    ("marked_attachment", "attachments", "items", "data", "results"),
                    "grading",
                )
            )

    for name, path, count_keys, feature in get_specs:
        status, http_status, payload = await _fetch_endpoint_payload(
            session,
            _url(endpoints, path),
            request_ssl=request_ssl,
        )
        results.append(
            _endpoint_result_from_payload(
                name=name,
                feature=feature,
                path=path,
                status=status,
                http_status=http_status,
                payload=payload,
                count_keys=count_keys,
                include_sensitive=include_sensitive,
            )
        )
    status_text = "ok" if any(result.ok for result in results) else "unavailable"
    return TeacherCourseReport(status=status_text, course_id=course_id_text, endpoints=tuple(results))


def teacher_rollcall_detail_specs(names: Sequence[str] | None = None) -> tuple[TeacherEndpointSpec, ...]:
    if not names:
        return TEACHER_ROLLCALL_DETAIL_ENDPOINTS
    wanted = {normalize_text(name) for name in names if normalize_text(name)}
    return tuple(spec for spec in TEACHER_ROLLCALL_DETAIL_ENDPOINTS if spec.name in wanted)


async def fetch_teacher_rollcall_endpoint(
    session: Any,
    *,
    endpoints: Any,
    spec: TeacherEndpointSpec,
    rollcall_id: Any,
    request_ssl: Any = None,
    limit: int = 20,
    action: str = "",
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    path = spec.path(rollcall_id, limit=limit)
    if spec.name == "student_rollcalls":
        path = _append_query(path, action=normalize_text(action))
    status, http_status, payload = await _fetch_endpoint_payload(
        session,
        _url(endpoints, path),
        request_ssl=request_ssl,
    )
    if status != "ok":
        return TeacherEndpointResult(
            name=spec.name,
            feature=spec.feature,
            path=path,
            status=status,
            http_status=http_status,
            item_count=None,
            summary=None,
        )
    return TeacherEndpointResult(
        name=spec.name,
        feature=spec.feature,
        path=path,
        status="ok",
        http_status=http_status,
        item_count=_count_from_payload(payload, spec.count_keys),
        summary=sanitize_teacher_payload(payload, include_sensitive=include_sensitive),
    )


async def build_teacher_rollcall_report(
    session: Any,
    *,
    endpoints: Any,
    rollcall_id: Any,
    request_ssl: Any = None,
    limit: int = 20,
    action: str = "",
    include_sensitive: bool = False,
    endpoint_names: Sequence[str] | None = None,
) -> TeacherCourseReport:
    rollcall_id_text = normalize_text(rollcall_id)
    results: list[TeacherEndpointResult] = []
    for spec in teacher_rollcall_detail_specs(endpoint_names):
        results.append(
            await fetch_teacher_rollcall_endpoint(
                session,
                endpoints=endpoints,
                spec=spec,
                rollcall_id=rollcall_id_text,
                request_ssl=request_ssl,
                limit=limit,
                action=action,
                include_sensitive=include_sensitive,
            )
        )
    status = "ok" if any(result.ok for result in results) else "unavailable"
    return TeacherCourseReport(status=status, course_id=rollcall_id_text, endpoints=tuple(results))


async def fetch_teacher_course_rollcall_detail(
    session: Any,
    *,
    endpoints: Any,
    course_id: Any,
    rollcall_id: Any,
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    course_id_text = quote(normalize_text(course_id), safe="")
    rollcall_id_text = quote(normalize_text(rollcall_id), safe="")
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path="/api/course/{}/rollcall/{}".format(course_id_text, rollcall_id_text),
        name="course_rollcall_detail",
        feature="rollcall",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_ongoing_student_rollcalls(
    session: Any,
    *,
    endpoints: Any,
    course_id: Any,
    group_rollcall: Any = "",
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    course_id_text = quote(normalize_text(course_id), safe="")
    path = _append_query(
        "/api/course/{}/student-onprogress-rollcalls".format(course_id_text),
        group_rollcall=normalize_text(group_rollcall),
    )
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path=path,
        name="student_onprogress_rollcalls",
        feature="rollcall",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_leave_record(
    session: Any,
    *,
    endpoints: Any,
    course_id: Any,
    timestamp: Any = "",
    page: Any = "",
    page_size: Any = "",
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    course_id_text = quote(normalize_text(course_id), safe="")
    path = _append_query(
        "/api/course/{}/leave-record".format(course_id_text),
        timestamp=normalize_text(timestamp),
        page=normalize_text(page),
        page_size=normalize_text(page_size),
    )
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path=path,
        name="leave_record",
        feature="rollcall",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_rollcall_students_page(
    session: Any,
    *,
    endpoints: Any,
    rollcall_id: Any,
    page: int = 1,
    page_size: int = 20,
    rollcall_status: Any = "",
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    rollcall_id_text = quote(normalize_text(rollcall_id), safe="")
    path = _append_query(
        "/api/rollcall/{}/pagination_students_rollcalls".format(rollcall_id_text),
        page=max(1, int(page or 1)),
        page_size=max(1, int(page_size or 20)),
        rollcall_status=normalize_text(rollcall_status),
    )
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path=path,
        name="pagination_students_rollcalls",
        feature="rollcall",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_rollcall_count(
    session: Any,
    *,
    endpoints: Any,
    rollcall_id: Any,
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    rollcall_id_text = quote(normalize_text(rollcall_id), safe="")
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path="/api/rollcall/{}/student_rollcall_count".format(rollcall_id_text),
        name="student_rollcall_count",
        feature="rollcall",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_student_rollcalls(
    session: Any,
    *,
    endpoints: Any,
    course_id: Any,
    student_id: Any,
    page: Any = "",
    page_size: Any = "",
    rollcall_ids: Any = "",
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    course_id_text = quote(normalize_text(course_id), safe="")
    student_id_text = quote(normalize_text(student_id), safe="")
    path = _append_query(
        "/api/course/{}/student/{}/rollcalls".format(course_id_text, student_id_text),
        page=normalize_text(page),
        page_size=normalize_text(page_size),
        rollcall_ids=_ids_query_value(rollcall_ids),
    )
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path=path,
        name="student_rollcalls",
        feature="rollcall",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_rollcall_status_result(
    session: Any,
    *,
    endpoints: Any,
    rollcall_id: Any,
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    rollcall_id_text = quote(normalize_text(rollcall_id), safe="")
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path="/api/courses/rollcall_status/{}/result".format(rollcall_id_text),
        name="rollcall_status_result",
        feature="rollcall",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


def teacher_activity_specs(names: Sequence[str] | None = None) -> tuple[TeacherEndpointSpec, ...]:
    if not names:
        return TEACHER_ACTIVITY_ENDPOINTS
    wanted = {normalize_text(name) for name in names if normalize_text(name)}
    return tuple(spec for spec in TEACHER_ACTIVITY_ENDPOINTS if spec.name in wanted)


async def build_teacher_activity_report(
    session: Any,
    *,
    endpoints: Any,
    activity_id: Any,
    request_ssl: Any = None,
    limit: int = 20,
    include_sensitive: bool = False,
    endpoint_names: Sequence[str] | None = None,
) -> TeacherCourseReport:
    activity_id_text = normalize_text(activity_id)
    results: list[TeacherEndpointResult] = []
    for spec in teacher_activity_specs(endpoint_names):
        results.append(
            await fetch_teacher_endpoint(
                session,
                endpoints=endpoints,
                spec=spec,
                course_id=activity_id_text,
                request_ssl=request_ssl,
                limit=limit,
                include_sensitive=include_sensitive,
            )
        )
    status = "ok" if any(result.ok for result in results) else "unavailable"
    return TeacherCourseReport(status=status, course_id=activity_id_text, endpoints=tuple(results))


def teacher_exam_specs(names: Sequence[str] | None = None) -> tuple[TeacherEndpointSpec, ...]:
    if not names:
        return TEACHER_EXAM_ENDPOINTS
    wanted = {normalize_text(name) for name in names if normalize_text(name)}
    return tuple(spec for spec in TEACHER_EXAM_ENDPOINTS if spec.name in wanted)


def teacher_classroom_specs(names: Sequence[str] | None = None) -> tuple[TeacherEndpointSpec, ...]:
    if not names:
        return TEACHER_CLASSROOM_ENDPOINTS
    wanted = {normalize_text(name) for name in names if normalize_text(name)}
    return tuple(spec for spec in TEACHER_CLASSROOM_ENDPOINTS if spec.name in wanted)


def teacher_questionnaire_specs(names: Sequence[str] | None = None) -> tuple[TeacherEndpointSpec, ...]:
    if not names:
        return TEACHER_QUESTIONNAIRE_ENDPOINTS
    wanted = {normalize_text(name) for name in names if normalize_text(name)}
    return tuple(spec for spec in TEACHER_QUESTIONNAIRE_ENDPOINTS if spec.name in wanted)


def teacher_group_set_specs(names: Sequence[str] | None = None) -> tuple[TeacherEndpointSpec, ...]:
    if not names:
        return TEACHER_GROUP_SET_ENDPOINTS
    wanted = {normalize_text(name) for name in names if normalize_text(name)}
    return tuple(spec for spec in TEACHER_GROUP_SET_ENDPOINTS if spec.name in wanted)


async def build_teacher_exam_report(
    session: Any,
    *,
    endpoints: Any,
    exam_id: Any,
    request_ssl: Any = None,
    include_sensitive: bool = False,
    endpoint_names: Sequence[str] | None = None,
) -> TeacherCourseReport:
    exam_id_text = normalize_text(exam_id)
    results: list[TeacherEndpointResult] = []
    for spec in teacher_exam_specs(endpoint_names):
        results.append(
            await fetch_teacher_endpoint(
                session,
                endpoints=endpoints,
                spec=spec,
                course_id=exam_id_text,
                request_ssl=request_ssl,
                limit=20,
                include_sensitive=include_sensitive,
            )
        )
    status = "ok" if any(result.ok for result in results) else "unavailable"
    return TeacherCourseReport(status=status, course_id=exam_id_text, endpoints=tuple(results))


async def build_teacher_classroom_report(
    session: Any,
    *,
    endpoints: Any,
    classroom_id: Any,
    request_ssl: Any = None,
    include_sensitive: bool = False,
    endpoint_names: Sequence[str] | None = None,
) -> TeacherCourseReport:
    classroom_id_text = normalize_text(classroom_id)
    results: list[TeacherEndpointResult] = []
    for spec in teacher_classroom_specs(endpoint_names):
        results.append(
            await fetch_teacher_endpoint(
                session,
                endpoints=endpoints,
                spec=spec,
                course_id=classroom_id_text,
                request_ssl=request_ssl,
                limit=20,
                include_sensitive=include_sensitive,
            )
        )
    status = "ok" if any(result.ok for result in results) else "unavailable"
    return TeacherCourseReport(status=status, course_id=classroom_id_text, endpoints=tuple(results))


async def build_teacher_questionnaire_report(
    session: Any,
    *,
    endpoints: Any,
    questionnaire_id: Any,
    request_ssl: Any = None,
    include_sensitive: bool = False,
    endpoint_names: Sequence[str] | None = None,
) -> TeacherCourseReport:
    questionnaire_id_text = normalize_text(questionnaire_id)
    results: list[TeacherEndpointResult] = []
    for spec in teacher_questionnaire_specs(endpoint_names):
        results.append(
            await fetch_teacher_endpoint(
                session,
                endpoints=endpoints,
                spec=spec,
                course_id=questionnaire_id_text,
                request_ssl=request_ssl,
                limit=20,
                include_sensitive=include_sensitive,
            )
        )
    status = "ok" if any(result.ok for result in results) else "unavailable"
    return TeacherCourseReport(status=status, course_id=questionnaire_id_text, endpoints=tuple(results))


async def build_teacher_group_set_report(
    session: Any,
    *,
    endpoints: Any,
    group_set_id: Any,
    request_ssl: Any = None,
    include_sensitive: bool = False,
    endpoint_names: Sequence[str] | None = None,
) -> TeacherCourseReport:
    group_set_id_text = normalize_text(group_set_id)
    results: list[TeacherEndpointResult] = []
    for spec in teacher_group_set_specs(endpoint_names):
        results.append(
            await fetch_teacher_endpoint(
                session,
                endpoints=endpoints,
                spec=spec,
                course_id=group_set_id_text,
                request_ssl=request_ssl,
                limit=20,
                include_sensitive=include_sensitive,
            )
        )
    status = "ok" if any(result.ok for result in results) else "unavailable"
    return TeacherCourseReport(status=status, course_id=group_set_id_text, endpoints=tuple(results))


async def run_teacher_action(
    session: Any,
    *,
    endpoints: Any,
    action: str,
    method: str,
    path: str,
    payload: Any = None,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    method_text = normalize_text(method).upper()
    path_text = normalize_text(path)
    request_summary = sanitize_teacher_payload(payload or {}, include_sensitive=include_sensitive)
    if method_text not in {"DELETE", "GET", "PATCH", "POST", "PUT"}:
        return TeacherActionResult(
            action=action,
            method=method_text,
            path=path_text,
            status="invalid_method",
            request=request_summary,
            response={"message": "Supported methods are GET, POST, PUT, PATCH, and DELETE."},
        )
    if not execute:
        return TeacherActionResult(
            action=action,
            method=method_text,
            path=path_text,
            status="dry_run",
            request=request_summary,
            response={"message": "No request was sent. Pass execute=True and confirm=True to apply this action."},
        )
    if not confirm:
        return TeacherActionResult(
            action=action,
            method=method_text,
            path=path_text,
            status="confirmation_required",
            request=request_summary,
            response={"message": "Refusing to change teacher-side data without explicit confirmation."},
        )
    status, http_status, response_payload = await _send_endpoint_payload(
        session,
        method_text,
        _url(endpoints, path_text),
        payload=payload,
        request_ssl=request_ssl,
    )
    return TeacherActionResult(
        action=action,
        method=method_text,
        path=path_text,
        status=status,
        http_status=http_status,
        request=request_summary,
        response=sanitize_teacher_payload(response_payload, include_sensitive=include_sensitive),
    )


async def notify_teacher_outline_editing(
    session: Any,
    *,
    endpoints: Any,
    course_ids: Sequence[Any] | None = None,
    payload: Any = None,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    request_payload = _json_object_payload(payload)
    ids = [normalize_text(value) for value in (course_ids or ()) if normalize_text(value)]
    if ids and "course_ids" not in request_payload:
        request_payload["course_ids"] = ids
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="notify_outline_editing",
        method="POST",
        path="/api/outline/notify",
        payload=request_payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def sync_teacher_courses_from_urp(
    session: Any,
    *,
    endpoints: Any,
    course_ids: Sequence[Any] | None = None,
    payload: Any = None,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    request_payload = _json_object_payload(payload)
    ids = [normalize_text(value) for value in (course_ids or ()) if normalize_text(value)]
    if ids and "course_ids" not in request_payload:
        request_payload["course_ids"] = ids
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="sync_courses_from_urp",
        method="POST",
        path="/api/courses/sync_from_urp",
        payload=request_payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_chinamcloud_resources(
    session: Any,
    *,
    endpoints: Any,
    resources: Sequence[Any] | None = None,
    payload: Any = None,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    request_payload = _json_object_payload(payload)
    if resources is not None and "resources" not in request_payload:
        request_payload["resources"] = list(resources)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_chinamcloud_resources",
        method="POST",
        path="/api/chinamcloud/upload",
        payload=request_payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_course_outline(
    session: Any,
    *,
    endpoints: Any,
    course_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    course_id_text = normalize_text(course_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_course_outline",
        method="PUT",
        path="/api/course/{}/outline".format(quote(course_id_text, safe="")),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def create_teacher_outline_setting(
    session: Any,
    *,
    endpoints: Any,
    setting_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    setting_id_text = normalize_text(setting_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="create_outline_setting",
        method="POST",
        path="/api/outline-setting/{}".format(quote(setting_id_text, safe="")),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_outline_setting(
    session: Any,
    *,
    endpoints: Any,
    setting_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    setting_id_text = normalize_text(setting_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_outline_setting",
        method="PUT",
        path="/api/outline-setting/{}".format(quote(setting_id_text, safe="")),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def sort_teacher_outline_setting(
    session: Any,
    *,
    endpoints: Any,
    setting_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    setting_id_text = normalize_text(setting_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="sort_outline_setting",
        method="PUT",
        path="/api/outline-setting/{}/sort".format(quote(setting_id_text, safe="")),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def delete_teacher_outline_setting_option(
    session: Any,
    *,
    endpoints: Any,
    setting_id: Any,
    option_key: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    setting_id_text = normalize_text(setting_id)
    option_key_text = normalize_text(option_key)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="delete_outline_setting_option",
        method="DELETE",
        path="/api/outline-setting/{}/option/{}".format(
            quote(setting_id_text, safe=""),
            quote(option_key_text, safe=""),
        ),
        payload=None,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def toggle_teacher_outline_setting(
    session: Any,
    *,
    endpoints: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="toggle_outline_setting",
        method="PUT",
        path="/api/outline-setting/toggle",
        payload={},
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_outline_required_options(
    session: Any,
    *,
    endpoints: Any,
    setting_id: Any,
    required_options: Sequence[Any] | None = None,
    payload: Any = None,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    setting_id_text = normalize_text(setting_id)
    request_payload = _json_object_payload(payload)
    if required_options is not None and "required_options" not in request_payload:
        request_payload["required_options"] = list(required_options)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_outline_required_options",
        method="PUT",
        path="/api/outline-setting/{}/required-options".format(quote(setting_id_text, safe="")),
        payload=request_payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_enrollment_role(
    session: Any,
    *,
    endpoints: Any,
    enrollment_id: Any,
    role: Any = "",
    role_id: Any = "",
    payload: Any = None,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    enrollment_id_text = normalize_text(enrollment_id)
    request_payload = _json_object_payload(payload)
    role_text = normalize_text(role)
    role_id_text = normalize_text(role_id)
    if role_text and "role" not in request_payload:
        request_payload["role"] = role_text
    if role_id_text and "role_id" not in request_payload:
        request_payload["role_id"] = role_id_text
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_enrollment_role",
        method="PUT",
        path="/api/course/enrollments/{}".format(quote(enrollment_id_text, safe="")),
        payload=request_payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_enrollments_role(
    session: Any,
    *,
    endpoints: Any,
    enrollment_ids: Sequence[Any] | None = None,
    role: Any = "",
    payload: Any = None,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    request_payload = _json_object_payload(payload)
    ids = [normalize_text(value) for value in (enrollment_ids or ()) if normalize_text(value)]
    role_text = normalize_text(role)
    if ids and "enrollment_ids" not in request_payload:
        request_payload["enrollment_ids"] = ids
    if role_text and "role" not in request_payload:
        request_payload["role"] = role_text
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_enrollments_role",
        method="PUT",
        path="/api/course/enrollments",
        payload=request_payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def delete_teacher_enrollment(
    session: Any,
    *,
    endpoints: Any,
    enrollment_id: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    enrollment_id_text = normalize_text(enrollment_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="delete_enrollment",
        method="DELETE",
        path="/api/course/enrollments/{}".format(quote(enrollment_id_text, safe="")),
        payload=None,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def delete_teacher_enrollments(
    session: Any,
    *,
    endpoints: Any,
    enrollment_ids: Sequence[Any] | None = None,
    payload: Any = None,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    request_payload = _json_object_payload(payload)
    ids = [normalize_text(value) for value in (enrollment_ids or ()) if normalize_text(value)]
    if ids and "enrollment_ids" not in request_payload:
        request_payload["enrollment_ids"] = ids
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="delete_enrollments",
        method="DELETE",
        path="/api/course/enrollments",
        payload=request_payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def create_teacher_calendar_meeting(
    session: Any,
    *,
    endpoints: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="create_calendar_meeting",
        method="POST",
        path="/api/calendar-meeting",
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_calendar_meeting(
    session: Any,
    *,
    endpoints: Any,
    meeting_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    meeting_id_text = normalize_text(meeting_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_calendar_meeting",
        method="PUT",
        path="/api/calendar-meeting/{}".format(meeting_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def delete_teacher_calendar_meeting(
    session: Any,
    *,
    endpoints: Any,
    meeting_id: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    meeting_id_text = normalize_text(meeting_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="delete_calendar_meeting",
        method="DELETE",
        path="/api/calendar-meeting/{}".format(meeting_id_text),
        payload={},
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


def _air_credit_assignments_payload(payload: Any) -> dict[str, Any]:
    payload_object = _json_object_payload(payload)
    if "assignments" in payload_object:
        return payload_object
    return {"assignments": payload_object}


async def create_teacher_air_credit_assignments(
    session: Any,
    *,
    endpoints: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="create_air_credit_assignments",
        method="POST",
        path="/api/air-credit/credits",
        payload=_air_credit_assignments_payload(payload),
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_air_credit_assignments(
    session: Any,
    *,
    endpoints: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_air_credit_assignments",
        method="PUT",
        path="/api/air-credit/credits",
        payload=_air_credit_assignments_payload(payload),
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_air_credit_status(
    session: Any,
    *,
    endpoints: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_air_credit_status",
        method="PUT",
        path="/api/air-credit/credits/status",
        payload=_json_object_payload(payload),
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def clear_teacher_air_credit_remaining_credits(
    session: Any,
    *,
    endpoints: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="clear_air_credit_remaining_credits",
        method="PUT",
        path="/api/air-credit/credits/clear-remaining-credits",
        payload=_json_object_payload(payload),
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_air_credit_course_usage_limit(
    session: Any,
    *,
    endpoints: Any,
    payload: Any = None,
    usage_limit: Any = "",
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    payload_object = _json_object_payload(payload)
    if "usage_limit" not in payload_object and normalize_text(usage_limit):
        payload_object["usage_limit"] = normalize_text(usage_limit)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_air_credit_course_usage_limit",
        method="PUT",
        path="/api/air-credit/course/usage-limit",
        payload=payload_object,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def create_teacher_teaching_calendar(
    session: Any,
    *,
    endpoints: Any,
    course_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    course_id_text = normalize_text(course_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="create_teaching_calendar",
        method="POST",
        path="/api/course/{}/teaching-calendar".format(course_id_text),
        payload=_json_object_payload(payload),
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_teaching_calendar(
    session: Any,
    *,
    endpoints: Any,
    calendar_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    calendar_id_text = normalize_text(calendar_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_teaching_calendar",
        method="PUT",
        path="/api/teaching-calendar/{}".format(calendar_id_text),
        payload=_json_object_payload(payload),
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def delete_teacher_teaching_calendar(
    session: Any,
    *,
    endpoints: Any,
    calendar_id: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    calendar_id_text = normalize_text(calendar_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="delete_teaching_calendar",
        method="DELETE",
        path="/api/teaching-calendar/{}".format(calendar_id_text),
        payload={},
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def start_teacher_rollcall(
    session: Any,
    *,
    endpoints: Any,
    rollcall_id: Any,
    payload: Any = None,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    rollcall_id_text = normalize_text(rollcall_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="start_rollcall",
        method="POST",
        path="/api/rollcall/{}/start-rollcall".format(rollcall_id_text),
        payload=payload if payload is not None else {},
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def create_teacher_rollcall(
    session: Any,
    *,
    endpoints: Any,
    course_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    course_id_text = normalize_text(course_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="create_rollcall",
        method="POST",
        path="/api/course/{}/rollcall".format(course_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def create_teacher_module_rollcall(
    session: Any,
    *,
    endpoints: Any,
    course_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    course_id_text = normalize_text(course_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="create_module_rollcall",
        method="POST",
        path="/api/module/{}/rollcall".format(course_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def activate_teacher_rollcall(
    session: Any,
    *,
    endpoints: Any,
    rollcall_id: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    rollcall_id_text = normalize_text(rollcall_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="activate_rollcall",
        method="PUT",
        path="/api/rollcall/{}/activate".format(rollcall_id_text),
        payload=None,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_rollcall(
    session: Any,
    *,
    endpoints: Any,
    rollcall_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    rollcall_id_text = normalize_text(rollcall_id)
    path = _append_query("/api/rollcall/{}".format(rollcall_id_text), api_version="1.1.0")
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_rollcall",
        method="PUT",
        path=path,
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_radar_rollcall_position(
    session: Any,
    *,
    endpoints: Any,
    rollcall_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    rollcall_id_text = normalize_text(rollcall_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_radar_rollcall_position",
        method="PUT",
        path="/api/rollcall/{}/position".format(rollcall_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def stop_teacher_rollcall(
    session: Any,
    *,
    endpoints: Any,
    rollcall_id: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
) -> TeacherActionResult:
    return await stop_teacher_timetable_rollcall(
        session,
        endpoints=endpoints,
        rollcall_id=rollcall_id,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        action="stop_rollcall",
    )


async def stop_teacher_timetable_rollcall(
    session: Any,
    *,
    endpoints: Any,
    rollcall_id: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
    action: str = "stop_timetable_rollcall",
) -> TeacherActionResult:
    rollcall_id_text = normalize_text(rollcall_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action=action,
        method="PUT",
        path="/api/rollcall/{}/stop_time_table_rollcall".format(rollcall_id_text),
        payload=None,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def stop_teacher_qr_rollcall(
    session: Any,
    *,
    endpoints: Any,
    rollcall_id: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    rollcall_id_text = normalize_text(rollcall_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="stop_qr_rollcall",
        method="PUT",
        path="/api/rollcall/{}/stop_qr_rollcall".format(rollcall_id_text),
        payload=None,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def stop_teacher_number_rollcall(
    session: Any,
    *,
    endpoints: Any,
    rollcall_id: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    rollcall_id_text = normalize_text(rollcall_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="stop_number_rollcall",
        method="PUT",
        path="/api/rollcall/{}/stop_number_rollcall".format(rollcall_id_text),
        payload=None,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def stop_teacher_radar_rollcall(
    session: Any,
    *,
    endpoints: Any,
    rollcall_id: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    rollcall_id_text = normalize_text(rollcall_id)
    path = _append_query("/api/rollcall/{}/stop_radar".format(rollcall_id_text), api_version="1.1.0")
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="stop_radar_rollcall",
        method="PUT",
        path=path,
        payload=None,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def answer_teacher_qr_rollcall(
    session: Any,
    *,
    endpoints: Any,
    rollcall_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    rollcall_id_text = normalize_text(rollcall_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="answer_qr_rollcall",
        method="PUT",
        path="/api/rollcall/{}/answer_qr_rollcall".format(rollcall_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def answer_teacher_number_rollcall(
    session: Any,
    *,
    endpoints: Any,
    rollcall_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    rollcall_id_text = normalize_text(rollcall_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="answer_number_rollcall",
        method="PUT",
        path="/api/rollcall/{}/answer_number_rollcall".format(rollcall_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def answer_teacher_radar_rollcall(
    session: Any,
    *,
    endpoints: Any,
    rollcall_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    rollcall_id_text = normalize_text(rollcall_id)
    path = _append_query("/api/rollcall/{}/answer".format(rollcall_id_text), api_version="1.76")
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="answer_radar_rollcall",
        method="PUT",
        path=path,
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_student_rollcalls(
    session: Any,
    *,
    endpoints: Any,
    course_id: Any,
    student_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    course_id_text = quote(normalize_text(course_id), safe="")
    student_id_text = quote(normalize_text(student_id), safe="")
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_student_rollcalls",
        method="PUT",
        path="/api/course/{}/student/{}/rollcalls".format(course_id_text, student_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def delete_teacher_rollcall(
    session: Any,
    *,
    endpoints: Any,
    rollcall_id: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
) -> TeacherActionResult:
    rollcall_id_text = normalize_text(rollcall_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="delete_rollcall",
        method="DELETE",
        path="/api/rollcall/{}".format(rollcall_id_text),
        payload=None,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
    )


async def create_teacher_merged_rollcall(
    session: Any,
    *,
    endpoints: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="create_merged_rollcall",
        method="POST",
        path="/api/rollcall/merged-rollcall",
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_merged_rollcall_students(
    session: Any,
    *,
    endpoints: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_merged_rollcall_students",
        method="PUT",
        path="/api/rollcall/merged-rollcall/student-rollcalls",
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_rollcall_setting(
    session: Any,
    *,
    endpoints: Any,
    course_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    course_id_text = normalize_text(course_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_rollcall_setting",
        method="PUT",
        path="/api/course/{}/rollcall/setting".format(course_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_rollcall_score(
    session: Any,
    *,
    endpoints: Any,
    enrollment_id: Any,
    rollcall_score: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
) -> TeacherActionResult:
    enrollment_id_text = normalize_text(enrollment_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_rollcall_score",
        method="PUT",
        path="/api/enrollment/{}/rollcall-score".format(enrollment_id_text),
        payload={"rollcall_score": rollcall_score},
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
    )


async def update_teacher_announce_score_settings(
    session: Any,
    *,
    endpoints: Any,
    course_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    course_id_text = normalize_text(course_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_announce_score_settings",
        method="PUT",
        path="/api/courses/{}/announce-score-settings".format(course_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_score_type_settings(
    session: Any,
    *,
    endpoints: Any,
    course_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    course_id_text = normalize_text(course_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_score_type_settings",
        method="PUT",
        path="/api/courses/{}/score-type-settings".format(course_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def create_teacher_custom_score_item(
    session: Any,
    *,
    endpoints: Any,
    course_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    course_id_text = normalize_text(course_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="create_custom_score_item",
        method="POST",
        path="/api/courses/{}/custom-score-item".format(course_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_custom_score_item(
    session: Any,
    *,
    endpoints: Any,
    item_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    item_id_text = normalize_text(item_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_custom_score_item",
        method="PUT",
        path="/api/course/custom-score-items/{}".format(item_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def delete_teacher_custom_score_item(
    session: Any,
    *,
    endpoints: Any,
    item_id: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
) -> TeacherActionResult:
    item_id_text = normalize_text(item_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="delete_custom_score_item",
        method="DELETE",
        path="/api/course/custom-score-items/{}".format(item_id_text),
        payload=None,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
    )


async def score_teacher_custom_item(
    session: Any,
    *,
    endpoints: Any,
    item_id: Any,
    student_id: Any,
    score: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
) -> TeacherActionResult:
    item_id_text = normalize_text(item_id)
    student_id_text = normalize_text(student_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="score_custom_item",
        method="PUT",
        path="/api/custom-score-items/{}/students/{}/score".format(item_id_text, student_id_text),
        payload={"score": score},
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
    )


async def update_teacher_enrollment_scores(
    session: Any,
    *,
    endpoints: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_enrollment_scores",
        method="PUT",
        path="/api/enrollments/score",
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_total_scores(
    session: Any,
    *,
    endpoints: Any,
    mode: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_total_scores",
        method="PUT",
        path="/api/enrollments/total-score?{}".format(urlencode({"mode": normalize_text(mode) or "replace"})),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_score_book(
    session: Any,
    *,
    endpoints: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_score_book",
        method="PUT",
        path="/api/enrollments/score-book",
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_score_publish_item_maps(
    session: Any,
    *,
    endpoints: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_score_publish_item_maps",
        method="PUT",
        path="/api/score-publish-item-maps",
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def submit_teacher_edu_scores(
    session: Any,
    *,
    endpoints: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="submit_edu_scores",
        method="POST",
        path="/api/edu-scores/submit-course-scores",
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def create_teacher_rubric(
    session: Any,
    *,
    endpoints: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="create_rubric",
        method="POST",
        path="/api/rubrics?fields=id,name,conditions",
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_rubric(
    session: Any,
    *,
    endpoints: Any,
    rubric_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    rubric_id_text = normalize_text(rubric_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_rubric",
        method="PUT",
        path="/api/rubric/{}?fields=id,name,conditions".format(rubric_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def delete_teacher_rubrics(
    session: Any,
    *,
    endpoints: Any,
    rubric_ids: Sequence[Any],
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    ids = [normalize_text(value) for value in rubric_ids if normalize_text(value)]
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="delete_rubrics",
        method="DELETE",
        path="/api/rubrics",
        payload={"rubric_ids": ids},
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def create_teacher_group_set(
    session: Any,
    *,
    endpoints: Any,
    course_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    course_id_text = normalize_text(course_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="create_group_set",
        method="POST",
        path="/api/courses/{}/group-sets".format(course_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_group_set(
    session: Any,
    *,
    endpoints: Any,
    group_set_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    group_set_id_text = normalize_text(group_set_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_group_set",
        method="PUT",
        path="/api/group-sets/{}".format(group_set_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def delete_teacher_group_set(
    session: Any,
    *,
    endpoints: Any,
    group_set_id: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    group_set_id_text = normalize_text(group_set_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="delete_group_set",
        method="DELETE",
        path="/api/group-sets/{}".format(group_set_id_text),
        payload={},
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def copy_teacher_group_set(
    session: Any,
    *,
    endpoints: Any,
    course_id: Any,
    group_set_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    course_id_text = normalize_text(course_id)
    group_set_id_text = normalize_text(group_set_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="copy_group_set",
        method="POST",
        path="/api/courses/{}/group-sets/{}/copy".format(course_id_text, group_set_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def random_teacher_grouping(
    session: Any,
    *,
    endpoints: Any,
    group_set_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    group_set_id_text = normalize_text(group_set_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="random_grouping",
        method="POST",
        path="/api/group-sets/{}/random-grouping".format(group_set_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def create_teacher_group(
    session: Any,
    *,
    endpoints: Any,
    group_set_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    group_set_id_text = normalize_text(group_set_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="create_group",
        method="POST",
        path="/api/group-sets/{}/groups".format(group_set_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_group(
    session: Any,
    *,
    endpoints: Any,
    group_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    group_id_text = normalize_text(group_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_group",
        method="PUT",
        path="/api/groups/{}".format(group_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_group_info(
    session: Any,
    *,
    endpoints: Any,
    group_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    group_id_text = normalize_text(group_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_group_info",
        method="PUT",
        path="/api/groups/{}/info".format(group_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def delete_teacher_group(
    session: Any,
    *,
    endpoints: Any,
    group_id: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    group_id_text = normalize_text(group_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="delete_group",
        method="DELETE",
        path="/api/groups/{}".format(group_id_text),
        payload={},
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def sort_teacher_groups(
    session: Any,
    *,
    endpoints: Any,
    group_set_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    group_set_id_text = normalize_text(group_set_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="sort_groups",
        method="PUT",
        path="/api/group-sets/{}/sort".format(group_set_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_group_members(
    session: Any,
    *,
    endpoints: Any,
    group_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    group_id_text = normalize_text(group_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_group_members",
        method="PUT",
        path="/api/groups/{}/members".format(group_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_group_member(
    session: Any,
    *,
    endpoints: Any,
    group_id: Any,
    member_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    group_id_text = normalize_text(group_id)
    member_id_text = normalize_text(member_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_group_member",
        method="PUT",
        path="/api/groups/{}/members/{}".format(group_id_text, member_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def delete_teacher_group_member(
    session: Any,
    *,
    endpoints: Any,
    group_id: Any,
    member_id: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    group_id_text = normalize_text(group_id)
    member_id_text = normalize_text(member_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="delete_group_member",
        method="DELETE",
        path="/api/groups/{}/members/{}".format(group_id_text, member_id_text),
        payload={},
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def create_teacher_module(
    session: Any,
    *,
    endpoints: Any,
    course_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    course_id_text = normalize_text(course_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="create_module",
        method="POST",
        path="/api/course/{}/module".format(course_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_module(
    session: Any,
    *,
    endpoints: Any,
    module_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    module_id_text = normalize_text(module_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_module",
        method="PUT",
        path="/api/module/{}".format(module_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def delete_teacher_module(
    session: Any,
    *,
    endpoints: Any,
    module_id: Any,
    delete_related_activity: bool = False,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    module_id_text = normalize_text(module_id)
    path = _append_query(
        "/api/module/{}".format(module_id_text),
        delete_related_activity="true" if delete_related_activity else "",
    )
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="delete_module",
        method="DELETE",
        path=path,
        payload={},
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def sort_teacher_modules(
    session: Any,
    *,
    endpoints: Any,
    course_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    course_id_text = normalize_text(course_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="sort_modules",
        method="PUT",
        path="/api/course/{}".format(course_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def check_teacher_module_dependents(
    session: Any,
    *,
    endpoints: Any,
    module_id: Any,
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    module_id_text = normalize_text(module_id)
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path="/api/modules/{}/has-dependents".format(module_id_text),
        name="module_dependents",
        feature="course_content",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def create_teacher_syllabus(
    session: Any,
    *,
    endpoints: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="create_syllabus",
        method="POST",
        path="/api/syllabus",
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_syllabus(
    session: Any,
    *,
    endpoints: Any,
    syllabus_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    syllabus_id_text = normalize_text(syllabus_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_syllabus",
        method="PUT",
        path="/api/syllabus/{}".format(syllabus_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def delete_teacher_syllabus(
    session: Any,
    *,
    endpoints: Any,
    syllabus_id: Any,
    delete_related_activity: bool = False,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    syllabus_id_text = normalize_text(syllabus_id)
    path = _append_query(
        "/api/syllabus/{}".format(syllabus_id_text),
        delete_related_activity="true" if delete_related_activity else "",
    )
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="delete_syllabus",
        method="DELETE",
        path=path,
        payload={},
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def sort_teacher_syllabuses(
    session: Any,
    *,
    endpoints: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="sort_syllabuses",
        method="PUT",
        path="/api/syllabus/resort",
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def check_teacher_syllabus_dependents(
    session: Any,
    *,
    endpoints: Any,
    syllabus_id: Any,
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    syllabus_id_text = normalize_text(syllabus_id)
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path="/api/syllabuses/{}/has-dependents".format(syllabus_id_text),
        name="syllabus_dependents",
        feature="course_content",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def sort_teacher_module_activities(
    session: Any,
    *,
    endpoints: Any,
    module_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    module_id_text = normalize_text(module_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="sort_module_activities",
        method="PUT",
        path="/api/modules/{}/activity-sort".format(module_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def sort_teacher_syllabus_activities(
    session: Any,
    *,
    endpoints: Any,
    syllabus_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    syllabus_id_text = normalize_text(syllabus_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="sort_syllabus_activities",
        method="PUT",
        path="/api/syllabus/{}/activity-sort".format(syllabus_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def resort_teacher_activity(
    session: Any,
    *,
    endpoints: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="resort_activity",
        method="PUT",
        path="/api/activity-resort",
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def create_teacher_bulletin(
    session: Any,
    *,
    endpoints: Any,
    course_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    course_id_text = normalize_text(course_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="create_bulletin",
        method="POST",
        path="/api/course/{}/bulletin".format(course_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_bulletin(
    session: Any,
    *,
    endpoints: Any,
    bulletin_id: Any,
    payload: Any,
    org_id: Any = "",
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    bulletin_id_text = normalize_text(bulletin_id)
    path = _append_query("/api/course/bulletins/{}".format(bulletin_id_text), org_id=normalize_text(org_id))
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_bulletin",
        method="PUT",
        path=path,
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def delete_teacher_bulletin(
    session: Any,
    *,
    endpoints: Any,
    bulletin_id: Any,
    org_id: Any = "",
    is_management: bool = False,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    bulletin_id_text = normalize_text(bulletin_id)
    params = {"org_id": normalize_text(org_id)}
    if is_management:
        params["isManagement"] = "true"
    path = _append_query("/api/course/bulletins/{}".format(bulletin_id_text), **params)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="delete_bulletin",
        method="DELETE",
        path=path,
        payload={},
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def mark_teacher_bulletin_read(
    session: Any,
    *,
    endpoints: Any,
    bulletin_id: Any,
    org_id: Any = "",
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    bulletin_id_text = normalize_text(bulletin_id)
    path = _append_query("/api/bulletins/{}/read".format(bulletin_id_text), org_id=normalize_text(org_id))
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="mark_bulletin_read",
        method="POST",
        path=path,
        payload={},
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def import_teacher_course_groups(
    session: Any,
    *,
    endpoints: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="import_course_groups",
        method="POST",
        path="/api/data-import/course-groups",
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def import_teacher_enrollments(
    session: Any,
    *,
    endpoints: Any,
    course_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    course_id_text = normalize_text(course_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="import_enrollments",
        method="POST",
        path="/api/data-import/enrollments/{}".format(course_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def import_teacher_scores(
    session: Any,
    *,
    endpoints: Any,
    course_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    course_id_text = normalize_text(course_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="import_scores",
        method="POST",
        path="/api/data-import/scores/{}".format(course_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def import_teacher_item_scores(
    session: Any,
    *,
    endpoints: Any,
    course_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    course_id_text = normalize_text(course_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="import_item_scores",
        method="POST",
        path="/api/data-import/item_scores/{}".format(course_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def import_teacher_seat_numbers(
    session: Any,
    *,
    endpoints: Any,
    course_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    course_id_text = normalize_text(course_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="import_seat_numbers",
        method="POST",
        path="/api/data-import/seat-number/{}".format(course_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def import_teacher_rollcalls(
    session: Any,
    *,
    endpoints: Any,
    course_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    course_id_text = normalize_text(course_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="import_rollcalls",
        method="POST",
        path="/api/data-import/course/{}/rollcall".format(course_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def delete_teacher_activities(
    session: Any,
    *,
    endpoints: Any,
    activity_ids: Sequence[Any],
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
) -> TeacherActionResult:
    ids = [normalize_text(value) for value in activity_ids if normalize_text(value)]
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="delete_activities",
        method="DELETE",
        path="/api/activities",
        payload={"activity_ids": ids},
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
    )


async def create_teacher_activity(
    session: Any,
    *,
    endpoints: Any,
    course_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    course_id_text = normalize_text(course_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="create_activity",
        method="POST",
        path="/api/courses/{}/activities".format(course_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_activity(
    session: Any,
    *,
    endpoints: Any,
    activity_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    activity_id_text = normalize_text(activity_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_activity",
        method="PUT",
        path="/api/activities/{}".format(activity_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def delete_teacher_activity(
    session: Any,
    *,
    endpoints: Any,
    activity_id: Any,
    delete_related_activity: bool = False,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    activity_id_text = normalize_text(activity_id)
    suffix = ""
    if delete_related_activity:
        suffix = "?{}".format(urlencode({"delete_related_activity": "true"}))
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="delete_activity",
        method="DELETE",
        path="/api/activities/{}{}".format(activity_id_text, suffix),
        payload=None,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_activity_resource(
    session: Any,
    *,
    endpoints: Any,
    activity_id: Any,
    resource_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    activity_id_text = normalize_text(activity_id)
    resource_id_text = normalize_text(resource_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_activity_resource",
        method="PUT",
        path="/api/activities/{}/resources/{}".format(activity_id_text, resource_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def delete_teacher_activity_resource(
    session: Any,
    *,
    endpoints: Any,
    activity_id: Any,
    resource_id: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    activity_id_text = normalize_text(activity_id)
    resource_id_text = normalize_text(resource_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="delete_activity_resource",
        method="DELETE",
        path="/api/activities/{}/resources/{}".format(activity_id_text, resource_id_text),
        payload=None,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def add_teacher_activity_comment(
    session: Any,
    *,
    endpoints: Any,
    activity_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    activity_id_text = normalize_text(activity_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="add_activity_comment",
        method="POST",
        path="/api/activities/{}/comments".format(activity_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_activity_comment(
    session: Any,
    *,
    endpoints: Any,
    activity_id: Any,
    comment_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    activity_id_text = normalize_text(activity_id)
    comment_id_text = normalize_text(comment_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_activity_comment",
        method="PUT",
        path="/api/activities/{}/comments/{}".format(activity_id_text, comment_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def delete_teacher_activity_comment(
    session: Any,
    *,
    endpoints: Any,
    activity_id: Any,
    comment_id: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    activity_id_text = normalize_text(activity_id)
    comment_id_text = normalize_text(comment_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="delete_activity_comment",
        method="DELETE",
        path="/api/activities/{}/comments/{}".format(activity_id_text, comment_id_text),
        payload=None,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def reply_teacher_activity_comment(
    session: Any,
    *,
    endpoints: Any,
    activity_id: Any,
    comment_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    activity_id_text = normalize_text(activity_id)
    comment_id_text = normalize_text(comment_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="reply_activity_comment",
        method="POST",
        path="/api/activities/{}/comments/{}/reply".format(activity_id_text, comment_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_activity_comment_reply(
    session: Any,
    *,
    endpoints: Any,
    activity_id: Any,
    reply_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    activity_id_text = normalize_text(activity_id)
    reply_id_text = normalize_text(reply_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_activity_comment_reply",
        method="PUT",
        path="/api/activities/{}/reply/{}".format(activity_id_text, reply_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def delete_teacher_activity_comment_reply(
    session: Any,
    *,
    endpoints: Any,
    activity_id: Any,
    reply_id: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    activity_id_text = normalize_text(activity_id)
    reply_id_text = normalize_text(reply_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="delete_activity_comment_reply",
        method="DELETE",
        path="/api/activities/{}/reply/{}".format(activity_id_text, reply_id_text),
        payload=None,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def operate_teacher_activity_comments(
    session: Any,
    *,
    endpoints: Any,
    activity_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    activity_id_text = normalize_text(activity_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="operate_activity_comments",
        method="POST",
        path="/api/activities/{}/comments/operate".format(activity_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def check_teacher_activity_dependents(
    session: Any,
    *,
    endpoints: Any,
    activity_ids: Sequence[Any],
    activity_type: Any = "",
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    ids = [normalize_text(value) for value in activity_ids if normalize_text(value)]
    path = "/api/activities/have-dependents?{}".format(
        urlencode({"activity_ids": ",".join(ids), "activity_type": normalize_text(activity_type)})
    )
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path=path,
        name="activity_dependents",
        feature="activity",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_completion_criteria(
    session: Any,
    *,
    endpoints: Any,
    course_id: Any,
    activity_type: Any,
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    params = {
        "activity_type": normalize_text(activity_type),
        "course_id": normalize_text(course_id),
    }
    path = "/api/completion-criteria?{}".format(urlencode(params))
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path=path,
        name="completion_criteria",
        feature="activity",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_course_completion_criteria(
    session: Any,
    *,
    endpoints: Any,
    course_id: Any,
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    path = "/api/courses/{}/completion-criteria".format(normalize_text(course_id))
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path=path,
        name="course_completion_criteria",
        feature="course_content",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_forum_categories(
    session: Any,
    *,
    endpoints: Any,
    course_id: Any,
    fields: Any = "",
    conditions: Any = "",
    page: int = 1,
    page_size: int = 20,
    include_group_topic_categories: bool = True,
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    params: dict[str, Any] = {
        "page": max(1, int(page or 1)),
        "page_size": max(1, int(page_size or 20)),
        "include_group_topic_categories": "True" if include_group_topic_categories else "False",
    }
    fields_text = normalize_text(fields)
    conditions_text = normalize_text(conditions)
    if fields_text:
        params["fields"] = fields_text
    if conditions_text:
        params["conditions"] = conditions_text
    path = "/api/courses/{}/topic-categories?{}".format(normalize_text(course_id), urlencode(params))
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path=path,
        name="forum_categories",
        feature="forum",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_forum_category(
    session: Any,
    *,
    endpoints: Any,
    category_id: Any,
    fields: Any = "",
    conditions: Any = "",
    page: int = 1,
    page_size: int = 20,
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    params: dict[str, Any] = {
        "page": max(1, int(page or 1)),
        "page_size": max(1, int(page_size or 20)),
    }
    fields_text = normalize_text(fields)
    conditions_text = normalize_text(conditions)
    if fields_text:
        params["fields"] = fields_text
    if conditions_text:
        params["conditions"] = conditions_text
    path = "/api/forum/categories/{}?{}".format(normalize_text(category_id), urlencode(params))
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path=path,
        name="forum_category",
        feature="forum",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_subject_libs(
    session: Any,
    *,
    endpoints: Any,
    course_id: Any = "",
    scope: Any = "user",
    with_folder: bool | None = True,
    lib_type: Any = "",
    parent_id: Any = "",
    predicate: Any = "",
    reverse: Any = "",
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    scope_text = normalize_text(scope).lower() or "user"
    lib_type_text = normalize_text(lib_type)
    params: dict[str, Any] = {}
    if scope_text == "questionnaire":
        scope_text = "user"
        lib_type_text = "questionnaire"
    if lib_type_text:
        params["lib_type"] = lib_type_text
    if with_folder is not None:
        params["with_folder"] = "1" if with_folder else "0"
    parent_id_text = normalize_text(parent_id)
    predicate_text = normalize_text(predicate)
    reverse_text = normalize_text(reverse)
    if parent_id_text:
        params["parent_id"] = parent_id_text
    if predicate_text:
        params["predicate"] = predicate_text
    if reverse_text:
        params["reverse"] = reverse_text
    if scope_text == "course":
        path = "/api/course/{}/subject-libs".format(normalize_text(course_id))
    else:
        path = "/api/subject-libs"
    if params:
        path = "{}?{}".format(path, urlencode(params))
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path=path,
        name="subject_libs",
        feature="subject_lib",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_subject_lib_subjects(
    session: Any,
    *,
    endpoints: Any,
    subject_lib_id: Any,
    keyword: Any = "",
    subject_type: Any = "",
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    params: dict[str, Any] = {}
    keyword_text = normalize_text(keyword)
    subject_type_text = normalize_text(subject_type)
    if keyword_text:
        params["keyword"] = keyword_text
    if subject_type_text and subject_type_text.lower() != "all":
        params["subject_type"] = subject_type_text
    path = "/api/subject-libs/{}".format(normalize_text(subject_lib_id))
    if params:
        path = "{}?{}".format(path, urlencode(params))
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path=path,
        name="subject_lib_subjects",
        feature="subject_lib",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_subject_lib_statistic(
    session: Any,
    *,
    endpoints: Any,
    subject_lib_id: Any,
    page: int = 1,
    page_size: int = 20,
    conditions: Any = "",
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    params = {
        "page": max(1, int(page or 1)),
        "page_size": max(1, int(page_size or 20)),
        "conditions": normalize_text(conditions) or "{}",
    }
    path = "/api/subject-libs/{}/statistic?{}".format(
        normalize_text(subject_lib_id),
        urlencode(params),
    )
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path=path,
        name="subject_lib_statistic",
        feature="subject_lib",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_subject_lib_knowledge_nodes(
    session: Any,
    *,
    endpoints: Any,
    subject_lib_id: Any,
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    path = "/api/subject-libs/{}/knowledge-nodes".format(normalize_text(subject_lib_id))
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path=path,
        name="subject_lib_knowledge_nodes",
        feature="subject_lib",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_subject_lib_folders(
    session: Any,
    *,
    endpoints: Any,
    referrer_type: Any = "course",
    referrer_id: Any = "",
    course_id: Any = "",
    parent_id: Any = 0,
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    referrer_id_text = normalize_text(referrer_id) or normalize_text(course_id)
    params = {
        "referrer_type": normalize_text(referrer_type) or "course",
        "referrer_id": referrer_id_text,
        "parent_id": normalize_text(parent_id) or "0",
    }
    path = "/api/subject-libs/folders?{}".format(urlencode(params))
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path=path,
        name="subject_lib_folders",
        feature="subject_lib",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_questionnaire_submissions(
    session: Any,
    *,
    endpoints: Any,
    questionnaire_id: Any,
    subject_id: Any,
    offset: int = 0,
    limit: int = 20,
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    params = {
        "offset": max(0, int(offset or 0)),
        "limit": max(1, int(limit or 20)),
        "subject_id": normalize_text(subject_id),
    }
    path = "/api/questionnaires/{}/all-submissions?{}".format(
        normalize_text(questionnaire_id),
        urlencode(params),
    )
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path=path,
        name="questionnaire_submissions",
        feature="questionnaire",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_course_estimate_replies(
    session: Any,
    *,
    endpoints: Any,
    course_estimate_id: Any,
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    path = "/api/course-estimate-replies/{}".format(normalize_text(course_estimate_id))
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path=path,
        name="course_estimate_replies",
        feature="course_estimate",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_course_estimate_user(
    session: Any,
    *,
    endpoints: Any,
    course_estimate_id: Any,
    user_id: Any,
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    path = "/api/course-estimates/{}/users/{}".format(
        normalize_text(course_estimate_id),
        normalize_text(user_id),
    )
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path=path,
        name="course_estimate_user",
        feature="course_estimate",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_course_package_course(
    session: Any,
    *,
    endpoints: Any,
    course_package_id: Any,
    fields: Any = "",
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    path = "/api/course-packages/{}/course".format(normalize_text(course_package_id))
    fields_text = normalize_text(fields)
    if fields_text:
        path = _append_query(path, fields=fields_text)
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path=path,
        name="course_package_course",
        feature="course_package",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_courseware_quizzes(
    session: Any,
    *,
    endpoints: Any,
    activity_id: Any,
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    path = "/api/courseware-quiz/activity/{}/quizzes".format(normalize_text(activity_id))
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path=path,
        name="courseware_quizzes",
        feature="courseware_quiz",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_courseware_quiz_subjects(
    session: Any,
    *,
    endpoints: Any,
    courseware_quiz_id: Any,
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    path = "/api/courseware-quiz/quiz/{}/subjects".format(normalize_text(courseware_quiz_id))
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path=path,
        name="courseware_quiz_subjects",
        feature="courseware_quiz",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_courseware_quiz_settings(
    session: Any,
    *,
    endpoints: Any,
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path="/api/courseware-quiz/settings",
        name="courseware_quiz_settings",
        feature="courseware_quiz",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_activity_uploads_license(
    session: Any,
    *,
    endpoints: Any,
    activity_id: Any,
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    path = "/api/activities/{}/uploads-license".format(normalize_text(activity_id))
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path=path,
        name="activity_uploads_license",
        feature="activity",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_resource_groups(
    session: Any,
    *,
    endpoints: Any,
    fields: Any = "",
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    path = "/api/resource-groups"
    fields_text = normalize_text(fields)
    if fields_text:
        path = _append_query(path, fields=fields_text)
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path=path,
        name="resource_groups",
        feature="resource_library",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_resource_group(
    session: Any,
    *,
    endpoints: Any,
    resource_group_id: Any,
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path="/api/resource-groups/{}".format(normalize_text(resource_group_id)),
        name="resource_group",
        feature="resource_library",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_resource_group_members(
    session: Any,
    *,
    endpoints: Any,
    resource_group_id: Any,
    page: int = 1,
    page_size: int = 20,
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    path = _append_paged_query(
        "/api/resource-groups/{}/members".format(normalize_text(resource_group_id)),
        page=page,
        page_size=page_size,
    )
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path=path,
        name="resource_group_members",
        feature="resource_library",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_resource_group_folders(
    session: Any,
    *,
    endpoints: Any,
    resource_group_id: Any = "",
    page: int = 1,
    page_size: int = 20,
    conditions: Any = "",
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    group_id_text = normalize_text(resource_group_id)
    path = "/api/resource-groups/{}/folders".format(group_id_text) if group_id_text else "/api/resource-groups/folders"
    path = _append_paged_query(path, page=page, page_size=page_size, conditions=conditions)
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path=path,
        name="resource_group_folders",
        feature="resource_library",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_resource_group_resources(
    session: Any,
    *,
    endpoints: Any,
    resource_group_id: Any = "",
    page: int = 1,
    page_size: int = 20,
    conditions: Any = "",
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    group_id_text = normalize_text(resource_group_id)
    path = (
        "/api/resource-groups/{}/resources".format(group_id_text)
        if group_id_text
        else "/api/resource-groups/resources"
    )
    path = _append_paged_query(path, page=page, page_size=page_size, conditions=conditions)
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path=path,
        name="resource_group_resources",
        feature="resource_library",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_resource_group_rubrics(
    session: Any,
    *,
    endpoints: Any,
    resource_group_id: Any,
    page: int = 1,
    page_size: int = 20,
    conditions: Any = "",
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    path = _append_paged_query(
        "/api/resource-groups/{}/rubrics".format(normalize_text(resource_group_id)),
        page=page,
        page_size=page_size,
        conditions=conditions,
    )
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path=path,
        name="resource_group_rubrics",
        feature="resource_library",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_resource_group_subject_libs(
    session: Any,
    *,
    endpoints: Any,
    resource_group_id: Any,
    page: int = 1,
    page_size: int = 20,
    conditions: Any = "",
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    path = _append_paged_query(
        "/api/resource-groups/{}/subject-libs".format(normalize_text(resource_group_id)),
        page=page,
        page_size=page_size,
        conditions=conditions,
    )
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path=path,
        name="resource_group_subject_libs",
        feature="resource_library",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_user_resources(
    session: Any,
    *,
    endpoints: Any,
    page: int = 1,
    page_size: int = 20,
    conditions: Any = "",
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    path = _append_paged_query(
        "/api/user/resources",
        page=page,
        page_size=page_size,
        conditions=conditions,
    )
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path=path,
        name="user_resources",
        feature="resource_library",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_user_resource_folder_info(
    session: Any,
    *,
    endpoints: Any,
    resource_id: Any,
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path="/api/user/resources/{}/folder-info".format(normalize_text(resource_id)),
        name="user_resource_folder_info",
        feature="resource_library",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_shared_resources(
    session: Any,
    *,
    endpoints: Any,
    page: int = 1,
    page_size: int = 20,
    conditions: Any = "",
    source: Any = "all",
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    source_text = normalize_text(source).lower().replace("_", "-") or "all"
    path_by_source = {
        "all": "/api/shared-resources",
        "from-me": "/api/shared-resources/from-me",
        "to-me": "/api/shared-resources-to-me",
        "no-repeated": "/api/shared-resources-no-repeated",
        "management": "/api/shared-resources/management",
        "video-stat": "/api/shared-resources/stat/video-resources",
    }
    path = path_by_source.get(source_text, "/api/shared-resources")
    path = _append_paged_query(path, page=page, page_size=page_size, conditions=conditions)
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path=path,
        name="shared_resources_{}".format(source_text.replace("-", "_")),
        feature="shared_resource",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_shared_resource_collections(
    session: Any,
    *,
    endpoints: Any,
    user_id: Any,
    page: int = 1,
    page_size: int = 20,
    conditions: Any = "",
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    path = _append_paged_query(
        "/api/shared-resources/user/{}/collections".format(normalize_text(user_id)),
        page=page,
        page_size=page_size,
        conditions=conditions,
    )
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path=path,
        name="shared_resource_collections",
        feature="shared_resource",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_shared_resource_comments(
    session: Any,
    *,
    endpoints: Any,
    resource_id: Any,
    page: int = 1,
    page_size: int = 20,
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    path = _append_paged_query(
        "/api/shared-resources/{}/comments".format(normalize_text(resource_id)),
        page=page,
        page_size=page_size,
    )
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path=path,
        name="shared_resource_comments",
        feature="shared_resource",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_shared_resource_classifications(
    session: Any,
    *,
    endpoints: Any,
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path="/api/shared-resource/classifications",
        name="shared_resource_classifications",
        feature="shared_resource",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_shared_resource_tags(
    session: Any,
    *,
    endpoints: Any,
    name: Any = "",
    page: int = 1,
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    path = _append_query(
        "/api/shared-resource/tag",
        name=normalize_text(name),
        page=max(1, int(page or 1)),
    )
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path=path,
        name="shared_resource_tags",
        feature="shared_resource",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_shared_resource_recommendations(
    session: Any,
    *,
    endpoints: Any,
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path="/api/shared-resources/personal-recommendations",
        name="shared_resource_recommendations",
        feature="shared_resource",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_shared_resource_track_users(
    session: Any,
    *,
    endpoints: Any,
    conditions: Any = "",
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    path = _append_query("/api/shared-resources/my-track-user", conditions=normalize_text(conditions))
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path=path,
        name="shared_resource_track_users",
        feature="shared_resource",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_shared_resource_followers(
    session: Any,
    *,
    endpoints: Any,
    conditions: Any = "",
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    path = _append_query("/api/shared-resources/my-follower", conditions=normalize_text(conditions))
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path=path,
        name="shared_resource_followers",
        feature="shared_resource",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def download_teacher_upload_blob(
    session: Any,
    *,
    endpoints: Any,
    upload_id: Any,
    output_path: Any,
    preview: bool = False,
    activity_type: Any = "",
    request_ssl: Any = None,
    overwrite: bool = False,
) -> TeacherDownloadResult:
    path = "/api/uploads/{}/blob".format(normalize_text(upload_id))
    path = _append_query(
        path,
        preview="true" if preview else "",
        activity_type=normalize_text(activity_type),
    )
    return await download_teacher_api_path(
        session,
        endpoints=endpoints,
        path=path,
        output_path=output_path,
        name="upload_blob",
        feature="upload",
        request_ssl=request_ssl,
        overwrite=overwrite,
    )


async def download_teacher_upload_thumbnail(
    session: Any,
    *,
    endpoints: Any,
    upload_id: Any,
    output_path: Any,
    preview: bool = True,
    request_ssl: Any = None,
    overwrite: bool = False,
) -> TeacherDownloadResult:
    path = _append_query(
        "/api/uploads/{}/thumbnail".format(normalize_text(upload_id)),
        preview="true" if preview else "",
    )
    return await download_teacher_api_path(
        session,
        endpoints=endpoints,
        path=path,
        output_path=output_path,
        name="upload_thumbnail",
        feature="upload",
        request_ssl=request_ssl,
        overwrite=overwrite,
    )


async def download_teacher_upload_modified_image(
    session: Any,
    *,
    endpoints: Any,
    upload_id: Any,
    output_path: Any,
    thumbnail: Any = "200x200",
    request_ssl: Any = None,
    overwrite: bool = False,
) -> TeacherDownloadResult:
    path = _append_query(
        "/api/uploads/{}/modified-image".format(normalize_text(upload_id)),
        thumbnail=normalize_text(thumbnail) or "200x200",
    )
    return await download_teacher_api_path(
        session,
        endpoints=endpoints,
        path=path,
        output_path=output_path,
        name="upload_modified_image",
        feature="upload",
        request_ssl=request_ssl,
        overwrite=overwrite,
    )


async def download_teacher_upload_swf(
    session: Any,
    *,
    endpoints: Any,
    upload_id: Any,
    output_path: Any,
    request_ssl: Any = None,
    overwrite: bool = False,
) -> TeacherDownloadResult:
    return await download_teacher_api_path(
        session,
        endpoints=endpoints,
        path="/api/uploads/{}/swf".format(normalize_text(upload_id)),
        output_path=output_path,
        name="upload_swf",
        feature="upload",
        request_ssl=request_ssl,
        overwrite=overwrite,
    )


async def download_teacher_upload_reference_blob(
    session: Any,
    *,
    endpoints: Any,
    reference_id: Any,
    output_path: Any,
    request_ssl: Any = None,
    overwrite: bool = False,
) -> TeacherDownloadResult:
    return await download_teacher_api_path(
        session,
        endpoints=endpoints,
        path="/api/uploads/reference/{}/blob".format(normalize_text(reference_id)),
        output_path=output_path,
        name="upload_reference_blob",
        feature="upload",
        request_ssl=request_ssl,
        overwrite=overwrite,
    )


async def download_teacher_shared_resource_blob(
    session: Any,
    *,
    endpoints: Any,
    resource_id: Any,
    output_path: Any,
    share_to: bool = False,
    request_ssl: Any = None,
    overwrite: bool = False,
) -> TeacherDownloadResult:
    prefix = "/api/shared-resources-to" if share_to else "/api/shared-resources"
    return await download_teacher_api_path(
        session,
        endpoints=endpoints,
        path="{}/{}/blob".format(prefix, normalize_text(resource_id)),
        output_path=output_path,
        name="shared_resource_blob_to" if share_to else "shared_resource_blob",
        feature="shared_resource",
        request_ssl=request_ssl,
        overwrite=overwrite,
    )


async def download_teacher_wedrive_file(
    session: Any,
    *,
    endpoints: Any,
    file_id: Any,
    output_path: Any,
    request_ssl: Any = None,
    overwrite: bool = False,
) -> TeacherDownloadResult:
    return await download_teacher_api_path(
        session,
        endpoints=endpoints,
        path="/api/wedrive/file/{}".format(normalize_text(file_id)),
        output_path=output_path,
        name="wedrive_file",
        feature="wedrive",
        request_ssl=request_ssl,
        overwrite=overwrite,
    )


async def download_teacher_third_part_upload(
    session: Any,
    *,
    endpoints: Any,
    upload_id: Any,
    output_path: Any,
    kind: Any = "preview",
    request_ssl: Any = None,
    overwrite: bool = False,
) -> TeacherDownloadResult:
    kind_text = normalize_text(kind).lower()
    if kind_text not in {"preview", "thumbnail"}:
        kind_text = "preview"
    return await download_teacher_api_path(
        session,
        endpoints=endpoints,
        path="/api/third-part/uploads/{}/{}".format(normalize_text(upload_id), kind_text),
        output_path=output_path,
        name="third_part_upload_{}".format(kind_text),
        feature="third_part_upload",
        request_ssl=request_ssl,
        overwrite=overwrite,
    )


async def download_teacher_questionnaire_export(
    session: Any,
    *,
    endpoints: Any,
    questionnaire_id: Any,
    output_path: Any,
    request_ssl: Any = None,
    overwrite: bool = False,
) -> TeacherDownloadResult:
    return await download_teacher_api_request(
        session,
        endpoints=endpoints,
        method="GET",
        path="/api/questionnaire/{}/export/excel".format(normalize_text(questionnaire_id)),
        output_path=output_path,
        name="questionnaire_export",
        feature="export",
        filename_hint="questionnaire_export.xlsx",
        request_ssl=request_ssl,
        overwrite=overwrite,
    )


async def download_teacher_topic_export(
    session: Any,
    *,
    endpoints: Any,
    topic_id: Any,
    output_path: Any,
    request_ssl: Any = None,
    overwrite: bool = False,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherDownloadResult:
    return await download_teacher_api_request(
        session,
        endpoints=endpoints,
        method="POST",
        path="/api/topics/{}/export/excel".format(normalize_text(topic_id)),
        output_path=output_path,
        payload={},
        name="topic_export",
        feature="export",
        filename_hint="topic_export.xlsx",
        request_ssl=request_ssl,
        overwrite=overwrite,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def download_teacher_category_topics_export(
    session: Any,
    *,
    endpoints: Any,
    category_id: Any,
    output_path: Any,
    request_ssl: Any = None,
    overwrite: bool = False,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherDownloadResult:
    return await download_teacher_api_request(
        session,
        endpoints=endpoints,
        method="POST",
        path="/api/categories/{}/export/excel".format(normalize_text(category_id)),
        output_path=output_path,
        payload={},
        name="category_topics_export",
        feature="export",
        filename_hint="topic_export.xlsx",
        request_ssl=request_ssl,
        overwrite=overwrite,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def download_teacher_shared_resource_subject_lib_export(
    session: Any,
    *,
    endpoints: Any,
    resource_id: Any,
    output_path: Any,
    request_ssl: Any = None,
    overwrite: bool = False,
) -> TeacherDownloadResult:
    return await download_teacher_api_request(
        session,
        endpoints=endpoints,
        method="GET",
        path="/api/shared-resources/{}/subject-lib/export/excel".format(normalize_text(resource_id)),
        output_path=output_path,
        name="shared_resource_subject_lib_export",
        feature="export",
        filename_hint="subject_lib_export.xlsx",
        request_ssl=request_ssl,
        overwrite=overwrite,
    )


async def download_teacher_shared_resource_stat_export(
    session: Any,
    *,
    endpoints: Any,
    output_path: Any,
    conditions: Any = "",
    request_ssl: Any = None,
    overwrite: bool = False,
) -> TeacherDownloadResult:
    path = _append_query("/api/shared-resources/stat", conditions=_json_query_value(conditions))
    return await download_teacher_api_request(
        session,
        endpoints=endpoints,
        method="GET",
        path=path,
        output_path=output_path,
        name="shared_resource_stat_export",
        feature="resource_statistics",
        filename_hint="shared_resource_stat.xlsx",
        request_ssl=request_ssl,
        overwrite=overwrite,
    )


async def download_teacher_shared_resource_video_stat_export(
    session: Any,
    *,
    endpoints: Any,
    output_path: Any,
    conditions: Any = "",
    request_ssl: Any = None,
    overwrite: bool = False,
) -> TeacherDownloadResult:
    path = _append_query(
        "/api/shared-resources/stat/video-resources/export",
        conditions=_json_query_value(conditions),
    )
    return await download_teacher_api_request(
        session,
        endpoints=endpoints,
        method="GET",
        path=path,
        output_path=output_path,
        name="shared_resource_video_stat_export",
        feature="resource_statistics",
        filename_hint="shared_resource_video_stat.xlsx",
        request_ssl=request_ssl,
        overwrite=overwrite,
    )


async def download_teacher_course_stat_students_export(
    session: Any,
    *,
    endpoints: Any,
    course_id: Any,
    output_path: Any,
    file_type: Any = "xlsx",
    conditions: Any = "",
    request_ssl: Any = None,
    overwrite: bool = False,
) -> TeacherDownloadResult:
    file_type_text = normalize_text(file_type).lower()
    if file_type_text not in {"csv", "xlsx"}:
        file_type_text = "xlsx"
    path = _append_query(
        "/api/stat/courses/{}/students/export/{}".format(normalize_text(course_id), file_type_text),
        conditions=_json_query_value(conditions),
    )
    return await download_teacher_api_request(
        session,
        endpoints=endpoints,
        method="GET",
        path=path,
        output_path=output_path,
        name="course_stat_students_export",
        feature="statistics",
        filename_hint="course_stat_students.{}".format(file_type_text),
        request_ssl=request_ssl,
        overwrite=overwrite,
    )


def _stat_report_export_path(kind: Any) -> tuple[str, str]:
    kind_text = normalize_text(kind).lower().replace("_", "-")
    paths = {
        "rollcall": "/api/stat/courses/rollcall/export",
        "rollcall-by-class": "/api/stat/courses/rollcall/export-by-class",
        "homework-correct": "/api/stat/courses/homework-correct/export",
        "class-hours": "/api/stat/courses/class-hours/export",
    }
    if kind_text not in paths:
        kind_text = "rollcall"
    return kind_text, paths[kind_text]


async def download_teacher_stat_report_export(
    session: Any,
    *,
    endpoints: Any,
    kind: Any,
    output_path: Any,
    conditions: Any = "",
    request_ssl: Any = None,
    overwrite: bool = False,
) -> TeacherDownloadResult:
    kind_text, path = _stat_report_export_path(kind)
    path = _append_query(path, conditions=_json_query_value(conditions))
    return await download_teacher_api_request(
        session,
        endpoints=endpoints,
        method="GET",
        path=path,
        output_path=output_path,
        name="stat_{}_export".format(kind_text.replace("-", "_")),
        feature="statistics",
        filename_hint="stat_{}.xlsx".format(kind_text.replace("-", "_")),
        request_ssl=request_ssl,
        overwrite=overwrite,
    )


async def download_teacher_stat_courses_export_to(
    session: Any,
    *,
    endpoints: Any,
    file_type: Any,
    payload: Any,
    output_path: Any,
    request_ssl: Any = None,
    overwrite: bool = False,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherDownloadResult:
    file_type_text = normalize_text(file_type).lower()
    if file_type_text not in {"csv", "xlsx"}:
        file_type_text = "xlsx"
    return await download_teacher_api_request(
        session,
        endpoints=endpoints,
        method="POST",
        path="/api/stat/courses/export/to/{}".format(file_type_text),
        payload=_json_object_payload(payload),
        output_path=output_path,
        name="stat_courses_export_to",
        feature="statistics",
        filename_hint="stat_courses.{}".format(file_type_text),
        request_ssl=request_ssl,
        overwrite=overwrite,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def download_teacher_stat_attendance_export_to(
    session: Any,
    *,
    endpoints: Any,
    file_type: Any,
    payload: Any,
    output_path: Any,
    request_ssl: Any = None,
    overwrite: bool = False,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherDownloadResult:
    file_type_text = normalize_text(file_type).lower()
    if file_type_text not in {"csv", "xlsx"}:
        file_type_text = "xlsx"
    payload_obj = _json_object_payload(payload)
    for key in ("academic_year_ids", "semester_ids"):
        value = payload_obj.get(key)
        if value is not None and not isinstance(value, list):
            payload_obj[key] = [value]
    return await download_teacher_api_request(
        session,
        endpoints=endpoints,
        method="POST",
        path="/api/stat/attendance/export/to/{}".format(file_type_text),
        payload=payload_obj,
        output_path=output_path,
        name="stat_attendance_export_to",
        feature="statistics",
        filename_hint="stat_attendance.{}".format(file_type_text),
        request_ssl=request_ssl,
        overwrite=overwrite,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def download_teacher_department_user_attendance_export(
    session: Any,
    *,
    endpoints: Any,
    department_id: Any,
    output_path: Any,
    conditions: Any = "",
    request_ssl: Any = None,
    overwrite: bool = False,
) -> TeacherDownloadResult:
    department_id_text = normalize_text(department_id).strip("/")
    path = _append_query(
        "/api/stat/departments/user-attendance/export/{}".format(department_id_text),
        conditions=_json_query_value(conditions),
    )
    return await download_teacher_api_request(
        session,
        endpoints=endpoints,
        method="GET",
        path=path,
        output_path=output_path,
        name="department_user_attendance_export",
        feature="statistics",
        filename_hint="department_user_attendance.xlsx",
        request_ssl=request_ssl,
        overwrite=overwrite,
    )


async def download_teacher_department_attendance_export(
    session: Any,
    *,
    endpoints: Any,
    department_id: Any,
    output_path: Any,
    payload: Any = None,
    request_ssl: Any = None,
    overwrite: bool = False,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherDownloadResult:
    department_id_text = normalize_text(department_id).strip("/")
    return await download_teacher_api_request(
        session,
        endpoints=endpoints,
        method="POST",
        path="/api/stat/departments/attendance/export/{}".format(department_id_text),
        payload=_json_object_payload(payload),
        output_path=output_path,
        name="department_attendance_export",
        feature="statistics",
        filename_hint="department_attendance.xlsx",
        request_ssl=request_ssl,
        overwrite=overwrite,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def download_teacher_stat_vtrses_data_export(
    session: Any,
    *,
    endpoints: Any,
    output_path: Any,
    conditions: Any = "",
    request_ssl: Any = None,
    overwrite: bool = False,
) -> TeacherDownloadResult:
    path = _append_query("/api/stat/vtrses/data/export", conditions=_json_query_value(conditions))
    return await download_teacher_api_request(
        session,
        endpoints=endpoints,
        method="GET",
        path=path,
        output_path=output_path,
        name="stat_vtrses_data_export",
        feature="vtrs",
        filename_hint="vtrs_data.xlsx",
        request_ssl=request_ssl,
        overwrite=overwrite,
    )


async def download_teacher_cloud_classroom_live_classes_export(
    session: Any,
    *,
    endpoints: Any,
    output_path: Any,
    order_by: Any = "",
    conditions: Any = "",
    request_ssl: Any = None,
    overwrite: bool = False,
) -> TeacherDownloadResult:
    path = _append_query(
        "/api/cloud-classroom/live-classes/export/excel",
        order_by=normalize_text(order_by),
        conditions=_json_query_value(conditions),
    )
    return await download_teacher_api_request(
        session,
        endpoints=endpoints,
        method="GET",
        path=path,
        output_path=output_path,
        name="cloud_classroom_live_classes_export",
        feature="cloud_classroom",
        filename_hint="cloud_classroom_live_classes.xlsx",
        request_ssl=request_ssl,
        overwrite=overwrite,
    )


async def download_teacher_tencent_meeting_statistics_export(
    session: Any,
    *,
    endpoints: Any,
    output_path: Any,
    conditions: Any = "",
    request_ssl: Any = None,
    overwrite: bool = False,
) -> TeacherDownloadResult:
    path = _append_query(
        "/api/tencent-meeting/statistics/excel",
        conditions=_json_query_value(conditions),
    )
    return await download_teacher_api_request(
        session,
        endpoints=endpoints,
        method="GET",
        path=path,
        output_path=output_path,
        name="tencent_meeting_statistics_export",
        feature="meeting",
        filename_hint="tencent_meeting_statistics.xlsx",
        request_ssl=request_ssl,
        overwrite=overwrite,
    )


async def download_teacher_ai_ppt_user_usage_export(
    session: Any,
    *,
    endpoints: Any,
    output_path: Any,
    payload: Any = None,
    request_ssl: Any = None,
    overwrite: bool = False,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherDownloadResult:
    return await download_teacher_api_request(
        session,
        endpoints=endpoints,
        method="POST",
        path="/api/ai-ppt/user-usage/export",
        payload=_json_object_payload(payload),
        output_path=output_path,
        name="ai_ppt_user_usage_export",
        feature="ai_ppt",
        filename_hint="ai_ppt_user_usage.xlsx",
        request_ssl=request_ssl,
        overwrite=overwrite,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def download_teacher_air_credit_stats_export(
    session: Any,
    *,
    endpoints: Any,
    target: Any,
    payload: Any,
    output_path: Any,
    request_ssl: Any = None,
    overwrite: bool = False,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherDownloadResult:
    target_text = normalize_text(target).lower()
    if target_text not in {"user", "course"}:
        target_text = "user"
    return await download_teacher_api_request(
        session,
        endpoints=endpoints,
        method="POST",
        path="/api/air-credit/{}/credit-states-stats/export".format(target_text),
        payload=_json_object_payload(payload),
        output_path=output_path,
        name="air_credit_{}_stats_export".format(target_text),
        feature="air_credit",
        filename_hint="air_credit_{}_stats.xlsx".format(target_text),
        request_ssl=request_ssl,
        overwrite=overwrite,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def download_teacher_management_calendar_meeting_export(
    session: Any,
    *,
    endpoints: Any,
    payload: Any,
    output_path: Any,
    request_ssl: Any = None,
    overwrite: bool = False,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherDownloadResult:
    return await download_teacher_api_request(
        session,
        endpoints=endpoints,
        method="POST",
        path="/api/management/calendar-meeting/excel",
        payload=_json_object_payload(payload),
        output_path=output_path,
        name="management_calendar_meeting_export",
        feature="management_calendar",
        filename_hint="calendar_meetings.xlsx",
        request_ssl=request_ssl,
        overwrite=overwrite,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_cc_license_groups(
    session: Any,
    *,
    endpoints: Any,
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path="/api/cc-license/groups",
        name="cc_license_groups",
        feature="resource_library",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_cc_license_map(
    session: Any,
    *,
    endpoints: Any,
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path="/api/cc-license/map",
        name="cc_license_map",
        feature="resource_library",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_entries(
    session: Any,
    *,
    endpoints: Any,
    page: int = 1,
    page_size: int = 20,
    conditions: Any = "",
    fields: Any = "id,org_id,name,created_at,updated_at,created_by_id,updated_by_id,reference_count",
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    path = _append_paged_query(
        "/api/entries",
        page=page,
        page_size=page_size,
        conditions=conditions,
        fields=fields,
    )
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path=path,
        name="entries",
        feature="resource_library",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_entry(
    session: Any,
    *,
    endpoints: Any,
    entry_id: Any,
    fields: Any = "id,org_id,name,description,uploads,keywords,created_at,updated_at,created_by_id,updated_by_id,reference_count",
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    path = "/api/entries/{}".format(normalize_text(entry_id))
    fields_text = normalize_text(fields)
    if fields_text:
        path = _append_query(path, fields=fields_text)
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path=path,
        name="entry",
        feature="resource_library",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_entry_references(
    session: Any,
    *,
    endpoints: Any,
    entry_id: Any,
    page: int = 1,
    page_size: int = 20,
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    path = _append_paged_query(
        "/api/entries/{}/references".format(normalize_text(entry_id)),
        page=page,
        page_size=page_size,
    )
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path=path,
        name="entry_references",
        feature="resource_library",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_slides(
    session: Any,
    *,
    endpoints: Any,
    keyword: Any = "",
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    path = _append_query("/api/slides", keyword=normalize_text(keyword))
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path=path,
        name="slides",
        feature="slide",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_slide(
    session: Any,
    *,
    endpoints: Any,
    slide_id: Any,
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path="/api/slides/{}".format(normalize_text(slide_id)),
        name="slide",
        feature="slide",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_slide_records(
    session: Any,
    *,
    endpoints: Any,
    slide_id: Any,
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path="/api/slides/{}/records".format(normalize_text(slide_id)),
        name="slide_records",
        feature="slide",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_slide_export_status(
    session: Any,
    *,
    endpoints: Any,
    slide_id: Any,
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path="/api/slides/{}/export/status?no-intercept=true".format(normalize_text(slide_id)),
        name="slide_export_status",
        feature="slide",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def fetch_teacher_published_slides(
    session: Any,
    *,
    endpoints: Any,
    fields: Any = "slides(id,title,duration)",
    request_ssl: Any = None,
    include_sensitive: bool = False,
) -> TeacherEndpointResult:
    path = _append_query("/api/slides/published", fields=normalize_text(fields))
    return await fetch_teacher_api_path(
        session,
        endpoints=endpoints,
        path=path,
        name="published_slides",
        feature="slide",
        request_ssl=request_ssl,
        include_sensitive=include_sensitive,
    )


async def create_teacher_resource_group(
    session: Any,
    *,
    endpoints: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="create_resource_group",
        method="POST",
        path="/api/resource-group",
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_resource_group(
    session: Any,
    *,
    endpoints: Any,
    resource_group_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    merged = dict(payload or {})
    merged.setdefault("id", normalize_text(resource_group_id))
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_resource_group",
        method="PUT",
        path="/api/resource-group/{}".format(normalize_text(resource_group_id)),
        payload=merged,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def delete_teacher_resource_group(
    session: Any,
    *,
    endpoints: Any,
    resource_group_id: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="delete_resource_group",
        method="DELETE",
        path="/api/resource-group/{}".format(normalize_text(resource_group_id)),
        payload={},
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def delete_teacher_resource_group_members(
    session: Any,
    *,
    endpoints: Any,
    resource_group_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="delete_resource_group_members",
        method="DELETE",
        path="/api/resource-groups/{}/member".format(normalize_text(resource_group_id)),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def delete_teacher_resource_group_folder(
    session: Any,
    *,
    endpoints: Any,
    resource_group_id: Any,
    folder_id: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="delete_resource_group_folder",
        method="DELETE",
        path="/api/resource-groups/{}/folders/{}".format(
            normalize_text(resource_group_id),
            normalize_text(folder_id),
        ),
        payload={},
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_resource_group_resource(
    session: Any,
    *,
    endpoints: Any,
    resource_group_id: Any,
    resource_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_resource_group_resource",
        method="PUT",
        path="/api/resource-groups/{}/resource/{}".format(
            normalize_text(resource_group_id),
            normalize_text(resource_id),
        ),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def delete_teacher_resource_group_resource(
    session: Any,
    *,
    endpoints: Any,
    resource_id: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="delete_resource_group_resource",
        method="DELETE",
        path="/api/shared-resources/{}".format(normalize_text(resource_id)),
        payload={},
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def leave_teacher_resource_group(
    session: Any,
    *,
    endpoints: Any,
    resource_group_id: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="leave_resource_group",
        method="POST",
        path="/api/resource-groups/{}/leave".format(normalize_text(resource_group_id)),
        payload={},
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def save_teacher_shared_resource(
    session: Any,
    *,
    endpoints: Any,
    resource_id: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="save_shared_resource",
        method="POST",
        path="/api/shared-resources/{}/save".format(normalize_text(resource_id)),
        payload={},
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def batch_save_teacher_shared_resources(
    session: Any,
    *,
    endpoints: Any,
    resource_ids: Sequence[Any],
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    ids = [normalize_text(resource_id) for resource_id in resource_ids if normalize_text(resource_id)]
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="batch_save_shared_resources",
        method="POST",
        path="/api/shared-resources/batch-save",
        payload={"ids": ids},
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def set_teacher_shared_resource_collection(
    session: Any,
    *,
    endpoints: Any,
    resource_id: Any,
    user_id: Any,
    collect: bool = True,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    method = "POST" if collect else "DELETE"
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="set_shared_resource_collection" if collect else "unset_shared_resource_collection",
        method=method,
        path="/api/shared-resources/{}/user/{}/collection".format(
            normalize_text(resource_id),
            normalize_text(user_id),
        ),
        payload={},
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def publish_teacher_shared_resource(
    session: Any,
    *,
    endpoints: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="publish_shared_resource",
        method="POST",
        path="/api/shared-resources",
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def delete_teacher_shared_resource(
    session: Any,
    *,
    endpoints: Any,
    resource_id: Any,
    share_to: bool = False,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    path = "/api/shared-resources-to/{}".format(normalize_text(resource_id)) if share_to else "/api/shared-resources/{}".format(normalize_text(resource_id))
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="delete_shared_resource_to" if share_to else "delete_shared_resource",
        method="DELETE",
        path=path,
        payload={},
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def add_teacher_shared_resource_comment(
    session: Any,
    *,
    endpoints: Any,
    resource_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="add_shared_resource_comment",
        method="POST",
        path="/api/shared-resources/{}/comments".format(normalize_text(resource_id)),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def delete_teacher_shared_resource_comment(
    session: Any,
    *,
    endpoints: Any,
    comment_id: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="delete_shared_resource_comment",
        method="DELETE",
        path="/api/shared-resources/comments/{}".format(normalize_text(comment_id)),
        payload={},
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def create_teacher_entry(
    session: Any,
    *,
    endpoints: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="create_entry",
        method="POST",
        path="/api/entries",
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_entry(
    session: Any,
    *,
    endpoints: Any,
    entry_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_entry",
        method="PUT",
        path="/api/entries/{}".format(normalize_text(entry_id)),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def delete_teacher_entry(
    session: Any,
    *,
    endpoints: Any,
    entry_id: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="delete_entry",
        method="DELETE",
        path="/api/entries/{}".format(normalize_text(entry_id)),
        payload={},
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def batch_delete_teacher_entries(
    session: Any,
    *,
    endpoints: Any,
    entry_ids: Sequence[Any],
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    ids = [normalize_text(entry_id) for entry_id in entry_ids if normalize_text(entry_id)]
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="batch_delete_entries",
        method="DELETE",
        path="/api/entries/batch-delete",
        payload={"entry_ids": ids},
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_slide(
    session: Any,
    *,
    endpoints: Any,
    slide_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_slide",
        method="PUT",
        path="/api/slides/{}".format(normalize_text(slide_id)),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def export_teacher_slide(
    session: Any,
    *,
    endpoints: Any,
    slide_id: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="export_slide",
        method="POST",
        path="/api/slides/{}/export".format(normalize_text(slide_id)),
        payload={},
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def delete_teacher_slide(
    session: Any,
    *,
    endpoints: Any,
    slide_id: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="delete_slide",
        method="DELETE",
        path="/api/slides/{}".format(normalize_text(slide_id)),
        payload={},
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def batch_delete_teacher_slides(
    session: Any,
    *,
    endpoints: Any,
    slide_ids: Sequence[Any],
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    ids = [normalize_text(slide_id) for slide_id in slide_ids if normalize_text(slide_id)]
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="batch_delete_slides",
        method="DELETE",
        path="/api/slides",
        payload={"slide_ids": ids},
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_slide_video_info(
    session: Any,
    *,
    endpoints: Any,
    slide_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_slide_video_info",
        method="PUT",
        path="/api/slides/{}/video-info".format(normalize_text(slide_id)),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def delete_teacher_slide_record(
    session: Any,
    *,
    endpoints: Any,
    record_id: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="delete_slide_record",
        method="DELETE",
        path="/api/slides/records/{}".format(normalize_text(record_id)),
        payload={},
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def create_teacher_questionnaire_subject(
    session: Any,
    *,
    endpoints: Any,
    questionnaire_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="create_questionnaire_subject",
        method="POST",
        path="/api/questionnaire/{}/subject".format(normalize_text(questionnaire_id)),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_questionnaire_subject(
    session: Any,
    *,
    endpoints: Any,
    questionnaire_id: Any,
    subject_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_questionnaire_subject",
        method="PUT",
        path="/api/questionnaire/{}/subject/{}".format(
            normalize_text(questionnaire_id),
            normalize_text(subject_id),
        ),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def delete_teacher_questionnaire_subject(
    session: Any,
    *,
    endpoints: Any,
    questionnaire_id: Any,
    subject_id: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="delete_questionnaire_subject",
        method="DELETE",
        path="/api/questionnaire/{}/subject/{}".format(
            normalize_text(questionnaire_id),
            normalize_text(subject_id),
        ),
        payload=None,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def import_teacher_questionnaire_subjects(
    session: Any,
    *,
    endpoints: Any,
    questionnaire_id: Any,
    payload: Any,
    campus: bool = False,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    questionnaire_id_text = normalize_text(questionnaire_id)
    if campus:
        path = "/api/questionnaires/{}/imported-campus-subjects".format(questionnaire_id_text)
        action = "import_questionnaire_campus_subjects"
    else:
        path = "/api/questionnaire/{}/imported-subjects".format(questionnaire_id_text)
        action = "import_questionnaire_subjects"
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action=action,
        method="POST",
        path=path,
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def create_teacher_course_estimate(
    session: Any,
    *,
    endpoints: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="create_course_estimate",
        method="POST",
        path="/api/course-estimate",
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_course_estimate(
    session: Any,
    *,
    endpoints: Any,
    course_estimate_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_course_estimate",
        method="PUT",
        path="/api/course-estimates/{}".format(normalize_text(course_estimate_id)),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def delete_teacher_course_estimate(
    session: Any,
    *,
    endpoints: Any,
    course_estimate_id: Any,
    payload: Any = None,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="delete_course_estimate",
        method="PUT",
        path="/api/course-estimate/{}/delete".format(normalize_text(course_estimate_id)),
        payload=payload if payload is not None else {},
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def create_teacher_course_estimate_reply(
    session: Any,
    *,
    endpoints: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="create_course_estimate_reply",
        method="POST",
        path="/api/course-estimate-reply",
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def delete_teacher_course_estimate_reply(
    session: Any,
    *,
    endpoints: Any,
    reply_id: Any,
    payload: Any = None,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="delete_course_estimate_reply",
        method="PUT",
        path="/api/course-estimate-reply/{}/delete".format(normalize_text(reply_id)),
        payload=payload if payload is not None else {},
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def create_teacher_course_package(
    session: Any,
    *,
    endpoints: Any,
    course_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="create_course_package",
        method="POST",
        path="/api/courses/{}/course-package".format(normalize_text(course_id)),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def export_teacher_course_package(
    session: Any,
    *,
    endpoints: Any,
    course_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="export_course_package",
        method="POST",
        path="/api/courses/{}/course-package/export".format(normalize_text(course_id)),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_course_package(
    session: Any,
    *,
    endpoints: Any,
    course_package_id: Any,
    payload: Any,
    no_check: bool = False,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    path = "/api/course-packages/{}".format(normalize_text(course_package_id))
    if no_check:
        path = _append_query(path, no_check="true")
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_course_package",
        method="PUT",
        path=path,
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def delete_teacher_course_package(
    session: Any,
    *,
    endpoints: Any,
    course_package_id: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="delete_course_package",
        method="DELETE",
        path="/api/course-packages/{}".format(normalize_text(course_package_id)),
        payload=None,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def save_teacher_course_package(
    session: Any,
    *,
    endpoints: Any,
    course_package_id: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="save_course_package",
        method="POST",
        path="/api/course-packages/{}/save".format(normalize_text(course_package_id)),
        payload={},
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def import_teacher_course_package(
    session: Any,
    *,
    endpoints: Any,
    course_package_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="import_course_package",
        method="POST",
        path="/api/course-packages/{}/import".format(normalize_text(course_package_id)),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def create_teacher_courseware_quiz_subjects(
    session: Any,
    *,
    endpoints: Any,
    activity_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="create_courseware_quiz_subjects",
        method="POST",
        path="/api/courseware-quiz/activity/{}/subjects".format(normalize_text(activity_id)),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_courseware_quiz_subjects(
    session: Any,
    *,
    endpoints: Any,
    courseware_quiz_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_courseware_quiz_subjects",
        method="PUT",
        path="/api/courseware-quiz/quiz/{}/subjects".format(normalize_text(courseware_quiz_id)),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def generate_teacher_courseware_quiz_subjects(
    session: Any,
    *,
    endpoints: Any,
    payload: Any,
    by_text: bool = False,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    if by_text:
        action = "generate_courseware_quiz_subjects_by_text"
        path = "/api/courseware-quiz/generate-subjects-by-text"
    else:
        action = "generate_courseware_quiz_subjects"
        path = "/api/courseware-quiz/generate-subjects"
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action=action,
        method="POST",
        path=path,
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def format_teacher_courseware_quiz_question(
    session: Any,
    *,
    endpoints: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="format_courseware_quiz_question",
        method="POST",
        path="/api/courseware-quiz/format-question",
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def copy_teacher_subject_libs_to_courseware_quiz(
    session: Any,
    *,
    endpoints: Any,
    courseware_quiz_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    path = "/api/subject-libs/batch/copy?{}".format(
        urlencode({"courseware_quiz_id": normalize_text(courseware_quiz_id)})
    )
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="copy_subject_libs_to_courseware_quiz",
        method="POST",
        path=path,
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def create_teacher_subject_lib(
    session: Any,
    *,
    endpoints: Any,
    title: Any = "",
    course_id: Any = "",
    lib_type: Any = "",
    parent_id: Any = "",
    payload: Any | None = None,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    course_id_text = normalize_text(course_id)
    lib_type_text = normalize_text(lib_type)
    body = dict(payload or {}) if isinstance(payload, Mapping) else {}
    title_text = normalize_text(title)
    parent_id_text = normalize_text(parent_id)
    if title_text and "title" not in body:
        body["title"] = title_text
    if parent_id_text and "parent_id" not in body and "parentId" not in body:
        body["parent_id"] = parent_id_text
    path = "/api/course/{}/subject-libs".format(course_id_text) if course_id_text else "/api/subject-libs"
    if lib_type_text:
        path = "{}?{}".format(path, urlencode({"lib_type": lib_type_text}))
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="create_subject_lib",
        method="POST",
        path=path,
        payload=body,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_subject_lib(
    session: Any,
    *,
    endpoints: Any,
    subject_lib_id: Any,
    title: Any = "",
    payload: Any = None,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    body = dict(payload or {})
    title_text = normalize_text(title)
    if title_text and "title" not in body:
        body["title"] = title_text
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_subject_lib",
        method="PUT",
        path="/api/subject-libs/{}".format(normalize_text(subject_lib_id)),
        payload=body,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def move_teacher_subject_libs(
    session: Any,
    *,
    endpoints: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="move_subject_libs",
        method="POST",
        path="/api/subject-libs/libs-move-to",
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def copy_teacher_subject_libs_to_user(
    session: Any,
    *,
    endpoints: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="copy_subject_libs_to_user",
        method="POST",
        path="/api/subject-libs/copy-to-user",
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def move_teacher_subject_lib_subjects(
    session: Any,
    *,
    endpoints: Any,
    payload: Any,
    copy: bool = False,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    if copy:
        action = "copy_subject_lib_subjects"
        path = "/api/subject-libs/subjects-replication"
    else:
        action = "move_subject_lib_subjects"
        path = "/api/subject-libs/subjects-movement"
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action=action,
        method="POST",
        path=path,
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def copy_teacher_subject_lib(
    session: Any,
    *,
    endpoints: Any,
    subject_lib_id: Any,
    target: Any,
    target_id: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    target_text = normalize_text(target).lower().replace("_", "-")
    target_params = {
        "exam": "examId",
        "classroom": "classroomId",
        "video-quiz": "videoQuizId",
        "questionnaire": "questionnaireId",
    }
    param_name = target_params.get(target_text)
    request_summary = {"target": target_text, "target_id": normalize_text(target_id)}
    if not param_name:
        return TeacherActionResult(
            action="copy_subject_lib",
            method="POST",
            path="/api/subject-libs/{}/copy".format(normalize_text(subject_lib_id)),
            status="invalid_target",
            request=sanitize_teacher_payload(request_summary, include_sensitive=include_sensitive),
            response={"message": "Supported targets are exam, classroom, video-quiz, and questionnaire."},
        )
    path = "/api/subject-libs/{}/copy?{}".format(
        normalize_text(subject_lib_id),
        urlencode({param_name: normalize_text(target_id)}),
    )
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="copy_subject_lib",
        method="POST",
        path=path,
        payload=None,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def delete_teacher_subject_lib(
    session: Any,
    *,
    endpoints: Any,
    subject_lib_id: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="delete_subject_lib",
        method="DELETE",
        path="/api/subject-libs/{}".format(normalize_text(subject_lib_id)),
        payload=None,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def delete_teacher_subject_lib_subjects(
    session: Any,
    *,
    endpoints: Any,
    subject_lib_id: Any,
    subject_ids: Sequence[Any],
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    ids = [normalize_text(value) for value in subject_ids if normalize_text(value)]
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="delete_subject_lib_subjects",
        method="DELETE",
        path="/api/subject-libs/{}/subjects".format(normalize_text(subject_lib_id)),
        payload={"subject_ids": ids},
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def publish_teacher_activities(
    session: Any,
    *,
    endpoints: Any,
    course_id: Any,
    activity_keys: Sequence[Any] | None = None,
    payload: Any | None = None,
    published: bool | None = None,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    course_id_text = normalize_text(course_id)
    keys = [normalize_text(value) for value in (activity_keys or []) if normalize_text(value)]
    body = dict(payload or {}) if isinstance(payload, Mapping) else {}
    if keys and not any(key in body for key in ("activity_ids", "activityIds", "activity_keys", "activityKeys", "activities")):
        body["activity_ids"] = keys
    if published is not None and "type" not in body and "published" not in body:
        body["type"] = published
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="publish_activities",
        method="POST",
        path="/api/courses/{}/publish-activities".format(course_id_text),
        payload=body,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def save_teacher_activity_resource(
    session: Any,
    *,
    endpoints: Any,
    resource_id: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    resource_id_text = normalize_text(resource_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="save_activity_resource",
        method="POST",
        path="/api/activities/resources/{}/save".format(resource_id_text),
        payload=None,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def log_teacher_activity_read(
    session: Any,
    *,
    endpoints: Any,
    activity_id: Any,
    payload: Any | None = None,
    exam: bool = False,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    activity_id_text = normalize_text(activity_id)
    prefix = "/api/course/activities-read/exam" if exam else "/api/course/activities-read"
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="log_exam_activity_read" if exam else "log_activity_read",
        method="POST",
        path="{}/{}".format(prefix, activity_id_text),
        payload=payload if payload is not None else {},
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_forum_status(
    session: Any,
    *,
    endpoints: Any,
    activity_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    activity_id_text = normalize_text(activity_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_forum_status",
        method="PUT",
        path="/api/activities/{}/forum-status".format(activity_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def grade_teacher_rollcalls(
    session: Any,
    *,
    endpoints: Any,
    rollcall_ids: Sequence[Any],
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    ids = [normalize_text(value) for value in rollcall_ids if normalize_text(value)]
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="grade_rollcalls",
        method="POST",
        path="/api/course/rollcalls/count/grade",
        payload={"rollcall_ids": ids},
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def grade_teacher_submission(
    session: Any,
    *,
    endpoints: Any,
    activity_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    activity_id_text = normalize_text(activity_id)
    fields = "id,score,instructor_comment,rubric_score,final_score"
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="grade_submission",
        method="PUT",
        path="/api/course/activities/{}/submission/score?{}".format(
            activity_id_text,
            urlencode({"fields": fields, "need_submission_correct": "true"}),
        ),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def recommend_teacher_submissions(
    session: Any,
    *,
    endpoints: Any,
    submission_ids: Sequence[Any],
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    ids = [normalize_text(value) for value in submission_ids if normalize_text(value)]
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="recommend_submissions",
        method="PUT",
        path="/api/submission/recommend",
        payload={"submission_ids": ids},
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def cancel_recommend_teacher_submission(
    session: Any,
    *,
    endpoints: Any,
    submission_id: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    submission_id_text = normalize_text(submission_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="cancel_recommend_submission",
        method="POST",
        path="/api/submission/{}/cancel-recommend".format(submission_id_text),
        payload={},
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def score_teacher_forum(
    session: Any,
    *,
    endpoints: Any,
    activity_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    activity_id_text = normalize_text(activity_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="score_forum",
        method="PUT",
        path="/api/activities/{}/forum-scores".format(activity_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_homework_announce_status(
    session: Any,
    *,
    endpoints: Any,
    homework_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    homework_id_text = normalize_text(homework_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_homework_announce_status",
        method="PUT",
        path="/api/homework/{}/announce-mark-status".format(homework_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_homework_rubric(
    session: Any,
    *,
    endpoints: Any,
    homework_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    homework_id_text = normalize_text(homework_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_homework_rubric",
        method="PATCH",
        path="/api/homeworks/{}/rubric".format(homework_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def delete_teacher_exams(
    session: Any,
    *,
    endpoints: Any,
    exam_ids: Sequence[Any],
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    ids = [normalize_text(value) for value in exam_ids if normalize_text(value)]
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="delete_exams",
        method="DELETE",
        path="/api/exams/batch_delete",
        payload={"exam_ids": ids},
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def create_teacher_exam(
    session: Any,
    *,
    endpoints: Any,
    course_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    course_id_text = normalize_text(course_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="create_exam",
        method="POST",
        path="/api/courses/{}/exams".format(course_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_exam(
    session: Any,
    *,
    endpoints: Any,
    exam_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    exam_id_text = normalize_text(exam_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_exam",
        method="PUT",
        path="/api/exams/{}".format(exam_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def score_teacher_exam(
    session: Any,
    *,
    endpoints: Any,
    payload: Any,
    score_id: Any = "",
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    score_id_text = normalize_text(score_id)
    method = "PUT" if score_id_text else "POST"
    path = "/api/exam-scores/{}".format(score_id_text) if score_id_text else "/api/exam-scores"
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="score_exam",
        method=method,
        path=path,
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def comment_teacher_exam_status(
    session: Any,
    *,
    endpoints: Any,
    exam_id: Any,
    student_id: Any,
    status_comment: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
) -> TeacherActionResult:
    exam_id_text = normalize_text(exam_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="comment_exam_status",
        method="PUT",
        path="/api/exam-scores/{}/status-comment".format(exam_id_text),
        payload={"student_id": normalize_text(student_id), "status_comment": status_comment},
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
    )


async def create_teacher_classroom_exam(
    session: Any,
    *,
    endpoints: Any,
    course_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    course_id_text = normalize_text(course_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="create_classroom_exam",
        method="POST",
        path="/api/courses/{}/classroom-exams".format(course_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_classroom_exam(
    session: Any,
    *,
    endpoints: Any,
    classroom_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    classroom_id_text = normalize_text(classroom_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_classroom_exam",
        method="PUT",
        path="/api/classroom-exams/{}".format(classroom_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def delete_teacher_classroom(
    session: Any,
    *,
    endpoints: Any,
    classroom_id: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    classroom_id_text = normalize_text(classroom_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="delete_classroom",
        method="DELETE",
        path="/api/classrooms/{}".format(classroom_id_text),
        payload={},
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_classroom_status(
    session: Any,
    *,
    endpoints: Any,
    classroom_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    classroom_id_text = normalize_text(classroom_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_classroom_status",
        method="PUT",
        path="/api/classrooms/{}/status".format(classroom_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def update_teacher_classroom_subject_status(
    session: Any,
    *,
    endpoints: Any,
    classroom_id: Any,
    subject_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    classroom_id_text = normalize_text(classroom_id)
    subject_id_text = normalize_text(subject_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="update_classroom_subject_status",
        method="PUT",
        path="/api/classrooms/{}/subjects/{}/status".format(classroom_id_text, subject_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def save_teacher_classroom_subjects(
    session: Any,
    *,
    endpoints: Any,
    classroom_id: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    classroom_id_text = normalize_text(classroom_id)
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="save_classroom_subjects",
        method="POST",
        path="/api/classroom-exams/{}/subjects".format(classroom_id_text),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def delete_teacher_classroom_subjects(
    session: Any,
    *,
    endpoints: Any,
    classroom_id: Any,
    subject_ids: Sequence[Any],
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    classroom_id_text = normalize_text(classroom_id)
    ids = [normalize_text(value) for value in subject_ids if normalize_text(value)]
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="delete_classroom_subjects",
        method="DELETE",
        path="/api/classroom-exams/{}/subjects/batch_delete".format(classroom_id_text),
        payload={"subject_ids": ids},
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def score_teacher_classroom(
    session: Any,
    *,
    endpoints: Any,
    payload: Any,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="score_classroom",
        method="POST",
        path="/api/classroom/",
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )


async def teacher_api_request(
    session: Any,
    *,
    endpoints: Any,
    method: Any,
    path: Any,
    payload: Any = None,
    request_ssl: Any = None,
    execute: bool = False,
    confirm: bool = False,
    include_sensitive: bool = False,
) -> TeacherActionResult:
    return await run_teacher_action(
        session,
        endpoints=endpoints,
        action="teacher_api_request",
        method=method,
        path=_normalize_teacher_api_path(path),
        payload=payload,
        request_ssl=request_ssl,
        execute=execute,
        confirm=confirm,
        include_sensitive=include_sensitive,
    )

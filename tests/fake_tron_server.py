from contextlib import contextmanager
import json
import math
from typing import Any, Dict, List, Optional

try:
    import aiohttp
    from aiohttp import web
except (ImportError, ModuleNotFoundError):  # pragma: no cover - tests skip without aiohttp.web
    aiohttp = None
    web = None


class FakeTronServer:
    def __init__(self, *, correct_number_code: str = "0001") -> None:
        self.correct_number_code = str(correct_number_code)
        self.session_cookie = "local-test-session"
        self.rollcalls: List[Dict[str, Any]] = []
        self.current_semester: Dict[str, Any] = {
            "semester": {"id": 1122, "name": "Spring"},
            "academic_year": {"id": 112, "name": "112"},
        }
        self.courses: List[Dict[str, Any]] = []
        self.course_details: Dict[str, Dict[str, Any]] = {}
        self.course_enrollments: Dict[str, List[Dict[str, Any]]] = {}
        self.course_activity_reads: Dict[str, List[Dict[str, Any]]] = {}
        self.course_students_activity_reads: Dict[str, List[Dict[str, Any]]] = {}
        self.course_members: Dict[str, List[Dict[str, Any]]] = {}
        self.course_certifications: Dict[str, Dict[str, Any]] = {}
        self.updated_enrollment_roles: List[Dict[str, Any]] = []
        self.updated_enrollments_roles: List[Dict[str, Any]] = []
        self.deleted_enrollments: List[Dict[str, Any]] = []
        self.synced_courses_from_urp: List[Dict[str, Any]] = []
        self.course_research_meetings: Dict[str, List[Dict[str, Any]]] = {}
        self.course_students: Dict[str, List[Dict[str, Any]]] = {}
        self.course_students_rollcalls: Dict[str, List[Dict[str, Any]]] = {}
        self.rollcall_students_rollcalls: Dict[str, List[Dict[str, Any]]] = {}
        self.score_books: Dict[str, List[Dict[str, Any]]] = {}
        self.course_score_status: Dict[str, Dict[str, Any]] = {}
        self.course_announce_score_settings: Dict[str, Dict[str, Any]] = {}
        self.course_score_type_settings: Dict[str, Dict[str, Any]] = {}
        self.course_custom_score_items: Dict[str, List[Dict[str, Any]]] = {}
        self.course_score_ranks: Dict[str, List[Dict[str, Any]]] = {}
        self.course_modules: Dict[str, List[Dict[str, Any]]] = {}
        self.course_template_settings: Dict[str, Dict[str, Any]] = {}
        self.course_activity_publish_settings: Dict[str, Dict[str, Any]] = {}
        self.course_packages: Dict[str, List[Dict[str, Any]]] = {}
        self.course_package_statuses: Dict[str, Dict[str, Any]] = {}
        self.course_package_courses: Dict[str, Dict[str, Any]] = {}
        self.courseware_quizzes: Dict[str, List[Dict[str, Any]]] = {}
        self.courseware_quiz_subjects: Dict[str, List[Dict[str, Any]]] = {}
        self.courseware_quiz_settings: Dict[str, Any] = {"setting": {}}
        self.course_activities: Dict[str, List[Dict[str, Any]]] = {}
        self.course_bulletins: Dict[str, List[Dict[str, Any]]] = {}
        self.module_dependents: Dict[str, bool] = {}
        self.syllabus_dependents: Dict[str, bool] = {}
        self.course_group_sets: Dict[str, List[Dict[str, Any]]] = {}
        self.group_set_groups: Dict[str, List[Dict[str, Any]]] = {}
        self.group_set_activities: Dict[str, List[Dict[str, Any]]] = {}
        self.current_user_groups: Dict[str, Dict[str, Any]] = {}
        self.course_groups_submission_status: Dict[str, Dict[str, Any]] = {}
        self.course_teaching_team_groups: Dict[str, List[Dict[str, Any]]] = {}
        self.course_edu_score_rates: Dict[str, Dict[str, Any]] = {}
        self.course_edu_score_submit_times: Dict[str, Dict[str, Any]] = {}
        self.course_edu_score_submit_logs: Dict[str, List[Dict[str, Any]]] = {}
        self.course_rollcall_settings: Dict[str, Dict[str, Any]] = {}
        self.course_rollcall_scores: Dict[str, Dict[str, Any]] = {}
        self.course_rollcall_status_results: Dict[str, Dict[str, Any]] = {}
        self.course_rollcall_details: Dict[str, Dict[str, Any]] = {}
        self.course_ongoing_student_rollcalls: Dict[str, List[Dict[str, Any]]] = {}
        self.course_leave_records: Dict[str, List[Dict[str, Any]]] = {}
        self.student_rollcall_histories: Dict[str, List[Dict[str, Any]]] = {}
        self.rollcall_student_counts: Dict[str, Dict[str, Any]] = {}
        self.rollcall_details: Dict[str, Dict[str, Any]] = {}
        self.timetable_rollcalls: Dict[str, List[Dict[str, Any]]] = {}
        self.course_homework_activities: Dict[str, List[Dict[str, Any]]] = {}
        self.course_homework_student_status: Dict[str, Dict[str, Any]] = {}
        self.course_exams: Dict[str, List[Dict[str, Any]]] = {}
        self.course_classroom_exam_scores: Dict[str, List[Dict[str, Any]]] = {}
        self.course_questionnaires: Dict[str, List[Dict[str, Any]]] = {}
        self.course_questionnaire_scores: Dict[str, List[Dict[str, Any]]] = {}
        self.course_stat_for_instructor: Dict[str, Dict[str, Any]] = {}
        self.course_stat_overviews: Dict[str, Dict[str, Any]] = {}
        self.course_stat_students: Dict[str, List[Dict[str, Any]]] = {}
        self.course_tpdoe_stat_students: Dict[str, List[Dict[str, Any]]] = {}
        self.courses_stats: Dict[str, Dict[str, Any]] = {}
        self.stat_activities_for_courses: Dict[str, List[Dict[str, Any]]] = {}
        self.global_stat_payloads: Dict[str, Any] = {}
        self.course_stat_student_requests: List[Dict[str, Any]] = []
        self.global_stat_requests: List[Dict[str, Any]] = []
        self.stat_export_requests: List[Dict[str, Any]] = []
        self.course_estimates: Dict[str, List[Dict[str, Any]]] = {}
        self.course_estimate_replies_by_course: Dict[str, List[Dict[str, Any]]] = {}
        self.course_estimate_replies: Dict[str, List[Dict[str, Any]]] = {}
        self.course_estimate_users: Dict[str, Dict[str, Any]] = {}
        self.course_lesson_timetables: Dict[str, List[Dict[str, Any]]] = {}
        self.activities: Dict[str, Dict[str, Any]] = {}
        self.activity_submission_numbers: Dict[str, Dict[str, Any]] = {}
        self.activity_comments: Dict[str, List[Dict[str, Any]]] = {}
        self.activity_comment_replies: Dict[str, List[Dict[str, Any]]] = {}
        self.activity_forum_scores: Dict[str, List[Dict[str, Any]]] = {}
        self.activity_forum_topics: Dict[str, List[Dict[str, Any]]] = {}
        self.activity_intra_score_rules: Dict[str, List[Dict[str, Any]]] = {}
        self.activity_upload_references: Dict[str, List[Dict[str, Any]]] = {}
        self.activity_resources: Dict[str, List[Dict[str, Any]]] = {}
        self.activity_uploads_licenses: Dict[str, Dict[str, Any]] = {}
        self.resource_groups: List[Dict[str, Any]] = []
        self.resource_group_members: Dict[str, List[Dict[str, Any]]] = {}
        self.resource_group_folders: Dict[str, List[Dict[str, Any]]] = {}
        self.resource_group_resources: Dict[str, List[Dict[str, Any]]] = {}
        self.resource_group_rubrics: Dict[str, List[Dict[str, Any]]] = {}
        self.resource_group_subject_libs: Dict[str, List[Dict[str, Any]]] = {}
        self.user_resources: List[Dict[str, Any]] = []
        self.user_resource_folder_info: Dict[str, Dict[str, Any]] = {}
        self.shared_resources: List[Dict[str, Any]] = []
        self.shared_resources_from_me: List[Dict[str, Any]] = []
        self.shared_resources_to_me: List[Dict[str, Any]] = []
        self.shared_resource_collections: Dict[str, List[Dict[str, Any]]] = {}
        self.shared_resource_comments: Dict[str, List[Dict[str, Any]]] = {}
        self.shared_resource_classifications: List[Dict[str, Any]] = []
        self.shared_resource_tags: List[Dict[str, Any]] = []
        self.shared_resource_recommendations: List[Dict[str, Any]] = []
        self.shared_resource_track_users: List[Dict[str, Any]] = []
        self.shared_resource_followers: List[Dict[str, Any]] = []
        self.download_blobs: Dict[str, Dict[str, Any]] = {}
        self.upload_preuploads: List[Dict[str, Any]] = []
        self.uploaded_files: List[Dict[str, Any]] = []
        self.upload_callbacks: List[Dict[str, Any]] = []
        self.export_blobs: Dict[str, Dict[str, Any]] = {}
        self.export_requests: List[Dict[str, Any]] = []
        self.air_credit_user: Dict[str, Any] = {}
        self.air_credit_user_token: Dict[str, Any] = {}
        self.air_credit_users: List[Dict[str, Any]] = []
        self.air_credit_courses: Dict[str, Dict[str, Any]] = {}
        self.air_credit_user_courses_ai_ability: Dict[str, Any] = {"courses": []}
        self.air_credit_org_credit_state_info: Dict[str, Any] = {}
        self.air_credit_states: Dict[str, List[Dict[str, Any]]] = {"user": [], "course": []}
        self.air_credit_stats: Dict[str, List[Dict[str, Any]]] = {"user": [], "course": []}
        self.air_credit_summaries: Dict[str, Dict[str, Any]] = {"user": {}, "course": {}}
        self.air_credit_course_rows: List[Dict[str, Any]] = []
        self.air_credit_export_requests: List[Dict[str, Any]] = []
        self.air_credit_audits: List[Dict[str, Any]] = []
        self.air_credit_instructor_current_semester_courses: List[Dict[str, Any]] = []
        self.air_credit_resources: List[Dict[str, Any]] = []
        self.air_credit_action_requests: List[Dict[str, Any]] = []
        self.calendar_meetings: List[Dict[str, Any]] = []
        self.created_calendar_meetings: List[Dict[str, Any]] = []
        self.updated_calendar_meetings: List[Dict[str, Any]] = []
        self.deleted_calendar_meetings: List[str] = []
        self.management_calendar_meetings: List[Dict[str, Any]] = []
        self.management_calendar_requests: List[Dict[str, Any]] = []
        self.management_calendar_export_requests: List[Dict[str, Any]] = []
        self.teaching_calendars: List[Dict[str, Any]] = []
        self.created_teaching_calendars: List[Dict[str, Any]] = []
        self.updated_teaching_calendars: List[Dict[str, Any]] = []
        self.deleted_teaching_calendars: List[str] = []
        self.vtrses: List[Dict[str, Any]] = []
        self.vtrses_share_resources: List[Dict[str, Any]] = []
        self.vtrses_applications: List[Dict[str, Any]] = []
        self.vtrses_application_stat: Dict[str, Any] = {}
        self.vtrses_subject_libs: List[Dict[str, Any]] = []
        self.vtrses_meeting_classifications: List[Dict[str, Any]] = []
        self.vtrses_resource_classifications: List[Dict[str, Any]] = []
        self.vtrses_access_codes: List[Dict[str, Any]] = []
        self.stat_vtrses: List[Dict[str, Any]] = []
        self.stat_vtrses_data: List[Dict[str, Any]] = []
        self.stat_vtrses_resources: List[Dict[str, Any]] = []
        self.stat_vtrses_activities: List[Dict[str, Any]] = []
        self.stat_vtrses_teaching_count_info: Dict[str, Any] = {}
        self.vtrs_requests: List[Dict[str, Any]] = []
        self.departments: List[Dict[str, Any]] = []
        self.top_departments: List[Dict[str, Any]] = []
        self.my_departments: List[Dict[str, Any]] = []
        self.selected_departments: List[Dict[str, Any]] = []
        self.department_resource_center: Dict[str, Any] = {}
        self.department_user_attendance: List[Dict[str, Any]] = []
        self.department_attendance: List[Dict[str, Any]] = []
        self.department_requests: List[Dict[str, Any]] = []
        self.ai_ppt_user_usage_count: Dict[str, Any] = {}
        self.ai_ppt_usage_stats: List[Dict[str, Any]] = []
        self.ai_ppt_usage: List[Dict[str, Any]] = []
        self.ai_ppt_requests: List[Dict[str, Any]] = []
        self.orgs: List[Dict[str, Any]] = []
        self.all_orgs: List[Dict[str, Any]] = []
        self.org: Dict[str, Any] = {}
        self.org_lang_settings: Dict[str, Any] = {}
        self.academic_years: List[Dict[str, Any]] = []
        self.my_academic_years: List[Dict[str, Any]] = []
        self.my_curriculum_academic_years: List[Dict[str, Any]] = []
        self.semesters: List[Dict[str, Any]] = []
        self.my_semesters: List[Dict[str, Any]] = []
        self.my_semesters_all: List[Dict[str, Any]] = []
        self.my_curriculum_semesters: List[Dict[str, Any]] = []
        self.course_classifications: List[Dict[str, Any]] = []
        self.curriculum_classifications: List[Dict[str, Any]] = []
        self.curriculum_conditions: List[Dict[str, Any]] = []
        self.portal_classifications: List[Dict[str, Any]] = []
        self.authz_roles: List[Dict[str, Any]] = []
        self.authz_permissions: List[Dict[str, Any]] = []
        self.authz_course_permissions: List[Dict[str, Any]] = []
        self.authz_user_roles: List[Dict[str, Any]] = []
        self.virtual_classroom_resources: List[Dict[str, Any]] = []
        self.live_records: List[Dict[str, Any]] = []
        self.obe_metrics: List[Dict[str, Any]] = []
        self.program_course_programs: List[Dict[str, Any]] = []
        self.program_user_programs: List[Dict[str, Any]] = []
        self.user_academic_learning_resources: List[Dict[str, Any]] = []
        self.todos: List[Dict[str, Any]] = []
        self.in_progress_homeworks: List[Dict[str, Any]] = []
        self.jobs: List[Dict[str, Any]] = []
        self.task_last: Dict[str, Any] = {}
        self.inclass_reports: List[Dict[str, Any]] = []
        self.sign_in_stats: Dict[str, Any] = {}
        self.user_recently_visited_courses: List[Dict[str, Any]] = []
        self.alerts: List[Dict[str, Any]] = []
        self.alert_logs: List[Dict[str, Any]] = []
        self.alert_members: List[Dict[str, Any]] = []
        self.calendar_alerts: List[Dict[str, Any]] = []
        self.calendar_events: List[Dict[str, Any]] = []
        self.calendar_timetables: List[Dict[str, Any]] = []
        self.instruction_team_meeting: Dict[str, Any] = {}
        self.org_change_plan_list: List[Dict[str, Any]] = []
        self.third_party_info: Dict[str, Any] = {}
        self.topics_latest: List[Dict[str, Any]] = []
        self.user_index_courses_info_status: Dict[str, Any] = {}
        self.user_index_org_summary: Dict[str, Any] = {}
        self.user_profile_stat: Dict[str, Any] = {}
        self.platform_requests: List[Dict[str, Any]] = []
        self.org_bulletins: List[Dict[str, Any]] = []
        self.org_bulletin_latest: List[Dict[str, Any]] = []
        self.org_bulletin_classifications: List[Dict[str, Any]] = []
        self.org_bulletin_requests: List[Dict[str, Any]] = []
        self.catalog_courses: List[Dict[str, Any]] = []
        self.catalog_courses_count: Dict[str, Any] = {}
        self.public_courses: List[Dict[str, Any]] = []
        self.reviewed_courses: List[Dict[str, Any]] = []
        self.catalog_users: List[Dict[str, Any]] = []
        self.users_without_authz_roles: List[Dict[str, Any]] = []
        self.user_candidates: List[Dict[str, Any]] = []
        self.instructors: List[Dict[str, Any]] = []
        self.user_classes: List[Dict[str, Any]] = []
        self.course_cover_list: List[Dict[str, Any]] = []
        self.course_shared_records: List[Dict[str, Any]] = []
        self.course_certifications_catalog: List[Dict[str, Any]] = []
        self.my_classes: List[Dict[str, Any]] = []
        self.my_teaching_classes: List[Dict[str, Any]] = []
        self.classes: List[Dict[str, Any]] = []
        self.grades: List[Dict[str, Any]] = []
        self.certifications: List[Dict[str, Any]] = []
        self.certifications_for_management: List[Dict[str, Any]] = []
        self.course_subjects: List[Dict[str, Any]] = []
        self.combine_courses: List[Dict[str, Any]] = []
        self.course_interactions: List[Dict[str, Any]] = []
        self.interactions: List[Dict[str, Any]] = []
        self.interaction_votes: List[Dict[str, Any]] = []
        self.interaction_submissions: List[Dict[str, Any]] = []
        self.course_resource_audits: List[Dict[str, Any]] = []
        self.curriculums: List[Dict[str, Any]] = []
        self.curriculum_sections: List[Dict[str, Any]] = []
        self.warning_students: List[Dict[str, Any]] = []
        self.authz_course_roles: List[Dict[str, Any]] = []
        self.data_import_catalogs: Dict[str, List[Dict[str, Any]]] = {}
        self.data_import_validations: List[Dict[str, Any]] = []
        self.campus_subject_lib_classifications: List[Dict[str, Any]] = []
        self.campus_subject_lib_classification_counts: List[Dict[str, Any]] = []
        self.campus_subject_lib_subjects: List[Dict[str, Any]] = []
        self.campus_subject_lib_combination_subjects: List[Dict[str, Any]] = []
        self.catalog_requests: List[Dict[str, Any]] = []
        self.lesson_resources_shared_stat: Dict[str, Any] = {}
        self.other_video_resources: List[Dict[str, Any]] = []
        self.third_part_resources: List[Dict[str, Any]] = []
        self.public_resources: List[Dict[str, Any]] = []
        self.media_caption_task_progress: Dict[str, Any] = {}
        self.copy_third_part_resources: List[Dict[str, Any]] = []
        self.lark_files: List[Dict[str, Any]] = []
        self.lark_authorization: Dict[str, Any] = {}
        self.user_links: List[Dict[str, Any]] = []
        self.user_storage_used: Dict[str, Any] = {}
        self.resource_folders: List[Dict[str, Any]] = []
        self.wedrive_files: List[Dict[str, Any]] = []
        self.media_resources: List[Dict[str, Any]] = []
        self.online_videos: List[Dict[str, Any]] = []
        self.video_quizzes: List[Dict[str, Any]] = []
        self.video_quizzes_arrears: Dict[str, Any] = {}
        self.meetings: List[Dict[str, Any]] = []
        self.meeting_time_periods: List[Dict[str, Any]] = []
        self.meeting_slots: List[Dict[str, Any]] = []
        self.meeting_shanghaitech: List[Dict[str, Any]] = []
        self.tencent_meeting_auth: Dict[str, Any] = {}
        self.tencent_meeting_authorization_url: Dict[str, Any] = {}
        self.tencent_meeting_statistics: List[Dict[str, Any]] = []
        self.lecture_live_schedules: List[Dict[str, Any]] = []
        self.lecture_live: Dict[str, Any] = {}
        self.classin_join_url: Dict[str, Any] = {}
        self.classin_webcast_url: Dict[str, Any] = {}
        self.dingtalk_lives: List[Dict[str, Any]] = []
        self.interaction_activities: List[Dict[str, Any]] = []
        self.course_lecture_live_activities: List[Dict[str, Any]] = []
        self.course_tencent_meeting_activities: List[Dict[str, Any]] = []
        self.course_templates: List[Dict[str, Any]] = []
        self.knowledge_nodes: List[Dict[str, Any]] = []
        self.user_lesson_resource_progress: List[Dict[str, Any]] = []
        self.shanghaitech_lib_resources: List[Dict[str, Any]] = []
        self.video_suite_comments: List[Dict[str, Any]] = []
        self.media_requests: List[Dict[str, Any]] = []
        self.project: Dict[str, Any] = {}
        self.projects: List[Dict[str, Any]] = []
        self.blueprint: Dict[str, Any] = {}
        self.outline_setting: Dict[str, Any] = {}
        self.my_courses: List[Dict[str, Any]] = []
        self.subjects: List[Dict[str, Any]] = []
        self.subject_details: Dict[str, Dict[str, Any]] = {}
        self.feedback_activities: List[Dict[str, Any]] = []
        self.feedback_activity_details: Dict[str, Dict[str, Any]] = {}
        self.course_feedback_activities: Dict[str, List[Dict[str, Any]]] = {}
        self.course_danmu_configs: Dict[str, Dict[str, Any]] = {}
        self.chinamcloud_resources: List[Dict[str, Any]] = []
        self.chinamcloud_uploads: List[Dict[str, Any]] = []
        self.upload_references: List[Dict[str, Any]] = []
        self.upload_marked_attachments: List[Dict[str, Any]] = []
        self.upload_share_to_courses: List[Dict[str, Any]] = []
        self.shared_resources_stat: Dict[str, Any] = {}
        self.shared_resources_video_stat: List[Dict[str, Any]] = []
        self.save_resources_check: Dict[str, Any] = {}
        self.custom_knowledge_graph_stat: Dict[str, Any] = {}
        self.knowledge_graph_kfs_subjects: List[Dict[str, Any]] = []
        self.knowledge_graph_forest_stats: Dict[str, Any] = {}
        self.shared_resources_admin_to_other_orgs: List[Dict[str, Any]] = []
        self.h5_courseware_uploads: Dict[str, Dict[str, Any]] = {}
        self.submission_marked_attachments: Dict[str, Dict[str, Any]] = {}
        self.submission_marked_attachment_details: Dict[str, Dict[str, Any]] = {}
        self.submission_subject_marked_attachments: Dict[str, Dict[str, Any]] = {}
        self.my_notes: List[Dict[str, Any]] = []
        self.correction_books: List[Dict[str, Any]] = []
        self.authz_courses: List[Dict[str, Any]] = []
        self.portal_logo: Dict[str, Any] = {}
        self.upload_details: List[Dict[str, Any]] = []
        self.upload_document_urls: Dict[str, Dict[str, Any]] = {}
        self.knowledge_graph_import_info: Dict[str, Dict[str, Any]] = {}
        self.user_course_resource_folders: Dict[str, Dict[str, Any]] = {}
        self.course_knowledge_bases: Dict[str, Dict[str, Any]] = {}
        self.course_knowledge_base_resources: Dict[str, List[Dict[str, Any]]] = {}
        self.authoring_requests: List[Dict[str, Any]] = []
        self.cc_license_groups: List[Dict[str, Any]] = []
        self.cc_license_map: Dict[str, Any] = {}
        self.entries: List[Dict[str, Any]] = []
        self.entry_references: Dict[str, List[Dict[str, Any]]] = {}
        self.slides: List[Dict[str, Any]] = []
        self.slide_records: Dict[str, List[Dict[str, Any]]] = {}
        self.slide_export_statuses: Dict[str, Dict[str, Any]] = {}
        self.completion_criteria: Dict[str, Dict[str, Any]] = {}
        self.course_completion_criteria: Dict[str, Dict[str, Any]] = {}
        self.subject_libs: List[Dict[str, Any]] = []
        self.course_subject_libs: Dict[str, List[Dict[str, Any]]] = {}
        self.questionnaire_subject_libs: List[Dict[str, Any]] = []
        self.subject_lib_subjects: Dict[str, List[Dict[str, Any]]] = {}
        self.subject_lib_statistics: Dict[str, Dict[str, Any]] = {}
        self.subject_lib_knowledge_nodes: Dict[str, List[Dict[str, Any]]] = {}
        self.subject_lib_folders: Dict[str, List[Dict[str, Any]]] = {}
        self.questionnaires: Dict[str, Dict[str, Any]] = {}
        self.questionnaire_subjects: Dict[str, List[Dict[str, Any]]] = {}
        self.questionnaire_previews: Dict[str, List[Dict[str, Any]]] = {}
        self.questionnaire_logs: Dict[str, List[Dict[str, Any]]] = {}
        self.questionnaire_submissions: Dict[str, Dict[str, Any]] = {}
        self.course_topic_categories: Dict[str, List[Dict[str, Any]]] = {}
        self.forum_categories: Dict[str, Dict[str, Any]] = {}
        self.activity_dependents: Dict[str, bool] = {}
        self.activity_delete_checks: Dict[str, Dict[str, Any]] = {}
        self.homework_duplicate_detect_tasks: Dict[str, List[Dict[str, Any]]] = {}
        self.rubrics: List[Dict[str, Any]] = []
        self.rubric_template: Dict[str, Any] = {"templates": []}
        self.exams: Dict[str, Dict[str, Any]] = {}
        self.exam_make_up_records: Dict[str, Dict[str, Any]] = {}
        self.exam_qualification_checks: Dict[str, Dict[str, Any]] = {}
        self.examinee_actions: Dict[str, List[Dict[str, Any]]] = {}
        self.classrooms: Dict[str, Dict[str, Any]] = {}
        self.classroom_subject_stats: Dict[str, List[Dict[str, Any]]] = {}
        self.classroom_score_lists: Dict[str, List[Dict[str, Any]]] = {}
        self.classroom_examinees: Dict[str, List[Dict[str, Any]]] = {}
        self.classroom_submission_count_statuses: Dict[str, Dict[str, Any]] = {}
        self.session_expired = False
        self.scripts: Dict[str, List[Dict[str, Any]]] = {}
        self.number_attempts: List[Dict[str, Any]] = []
        self.radar_answers: List[Dict[str, Any]] = []
        self.qr_answers: List[Dict[str, Any]] = []
        self.qrcode_requests: List[str] = []
        self.started_rollcalls: List[Dict[str, Any]] = []
        self.created_rollcalls: List[Dict[str, Any]] = []
        self.created_module_rollcalls: List[Dict[str, Any]] = []
        self.activated_rollcalls: List[str] = []
        self.stopped_rollcalls: List[str] = []
        self.stopped_qr_rollcalls: List[str] = []
        self.stopped_number_rollcalls: List[str] = []
        self.stopped_radar_rollcalls: List[str] = []
        self.deleted_rollcalls: List[str] = []
        self.updated_rollcalls: List[Dict[str, Any]] = []
        self.updated_radar_rollcall_positions: List[Dict[str, Any]] = []
        self.updated_student_rollcalls: List[Dict[str, Any]] = []
        self.created_merged_rollcalls: List[Dict[str, Any]] = []
        self.updated_merged_rollcall_students: List[Dict[str, Any]] = []
        self.updated_rollcall_settings: List[Dict[str, Any]] = []
        self.updated_rollcall_scores: List[Dict[str, Any]] = []
        self.updated_announce_score_settings: List[Dict[str, Any]] = []
        self.updated_score_type_settings: List[Dict[str, Any]] = []
        self.created_custom_score_items: List[Dict[str, Any]] = []
        self.updated_custom_score_items: List[Dict[str, Any]] = []
        self.deleted_custom_score_items: List[str] = []
        self.scored_custom_items: List[Dict[str, Any]] = []
        self.updated_enrollment_scores: List[Dict[str, Any]] = []
        self.updated_total_scores: List[Dict[str, Any]] = []
        self.updated_score_books: List[Dict[str, Any]] = []
        self.updated_score_publish_item_maps: List[Dict[str, Any]] = []
        self.submitted_edu_scores: List[Dict[str, Any]] = []
        self.created_rubrics: List[Dict[str, Any]] = []
        self.updated_rubrics: List[Dict[str, Any]] = []
        self.deleted_rubrics: List[Dict[str, Any]] = []
        self.created_modules: List[Dict[str, Any]] = []
        self.updated_modules: List[Dict[str, Any]] = []
        self.deleted_modules: List[Dict[str, Any]] = []
        self.sorted_modules: List[Dict[str, Any]] = []
        self.checked_module_dependents: List[str] = []
        self.created_syllabuses: List[Dict[str, Any]] = []
        self.updated_syllabuses: List[Dict[str, Any]] = []
        self.deleted_syllabuses: List[Dict[str, Any]] = []
        self.sorted_syllabuses: List[Dict[str, Any]] = []
        self.checked_syllabus_dependents: List[str] = []
        self.outline_notifications: List[Dict[str, Any]] = []
        self.outline_setting_actions: List[Dict[str, Any]] = []
        self.updated_course_outlines: List[Dict[str, Any]] = []
        self.sorted_module_activities: List[Dict[str, Any]] = []
        self.sorted_syllabus_activities: List[Dict[str, Any]] = []
        self.resorted_activities: List[Dict[str, Any]] = []
        self.created_activities: List[Dict[str, Any]] = []
        self.updated_activities: List[Dict[str, Any]] = []
        self.deleted_activity_ids: List[Dict[str, Any]] = []
        self.updated_activity_resources: List[Dict[str, Any]] = []
        self.deleted_activity_resources: List[Dict[str, Any]] = []
        self.added_activity_comments: List[Dict[str, Any]] = []
        self.updated_activity_comments: List[Dict[str, Any]] = []
        self.deleted_activity_comments: List[Dict[str, Any]] = []
        self.replied_activity_comments: List[Dict[str, Any]] = []
        self.updated_activity_comment_replies: List[Dict[str, Any]] = []
        self.deleted_activity_comment_replies: List[Dict[str, Any]] = []
        self.operated_activity_comments: List[Dict[str, Any]] = []
        self.deleted_activities: List[Dict[str, Any]] = []
        self.published_activities: List[Dict[str, Any]] = []
        self.saved_activity_resources: List[str] = []
        self.logged_activity_reads: List[Dict[str, Any]] = []
        self.checked_activity_delete_checks: List[Dict[str, Any]] = []
        self.updated_forum_statuses: List[Dict[str, Any]] = []
        self.created_subject_libs: List[Dict[str, Any]] = []
        self.updated_subject_libs: List[Dict[str, Any]] = []
        self.copied_subject_libs: List[Dict[str, Any]] = []
        self.copied_subject_libs_to_user: List[Dict[str, Any]] = []
        self.moved_subject_libs: List[Dict[str, Any]] = []
        self.moved_subject_lib_subjects: List[Dict[str, Any]] = []
        self.copied_subject_lib_subjects: List[Dict[str, Any]] = []
        self.deleted_subject_libs: List[str] = []
        self.deleted_subject_lib_subjects: List[Dict[str, Any]] = []
        self.created_questionnaire_subjects: List[Dict[str, Any]] = []
        self.updated_questionnaire_subjects: List[Dict[str, Any]] = []
        self.deleted_questionnaire_subjects: List[Dict[str, Any]] = []
        self.imported_questionnaire_subjects: List[Dict[str, Any]] = []
        self.imported_questionnaire_campus_subjects: List[Dict[str, Any]] = []
        self.created_course_estimates: List[Dict[str, Any]] = []
        self.updated_course_estimates: List[Dict[str, Any]] = []
        self.deleted_course_estimates: List[Dict[str, Any]] = []
        self.created_course_estimate_replies: List[Dict[str, Any]] = []
        self.deleted_course_estimate_replies: List[Dict[str, Any]] = []
        self.created_course_packages: List[Dict[str, Any]] = []
        self.exported_course_packages: List[Dict[str, Any]] = []
        self.updated_course_packages: List[Dict[str, Any]] = []
        self.deleted_course_packages: List[str] = []
        self.saved_course_packages: List[str] = []
        self.imported_course_packages: List[Dict[str, Any]] = []
        self.created_courseware_quiz_subjects: List[Dict[str, Any]] = []
        self.updated_courseware_quiz_subjects: List[Dict[str, Any]] = []
        self.generated_courseware_quiz_subjects: List[Dict[str, Any]] = []
        self.generated_courseware_quiz_subjects_by_text: List[Dict[str, Any]] = []
        self.formatted_courseware_quiz_questions: List[Dict[str, Any]] = []
        self.copied_subject_libs_to_courseware_quiz: List[Dict[str, Any]] = []
        self.created_resource_groups: List[Dict[str, Any]] = []
        self.updated_resource_groups: List[Dict[str, Any]] = []
        self.deleted_resource_groups: List[str] = []
        self.deleted_resource_group_members: List[Dict[str, Any]] = []
        self.deleted_resource_group_folders: List[Dict[str, Any]] = []
        self.updated_resource_group_resources: List[Dict[str, Any]] = []
        self.deleted_resource_group_resources: List[str] = []
        self.left_resource_groups: List[str] = []
        self.saved_shared_resources: List[str] = []
        self.batch_saved_shared_resources: List[List[str]] = []
        self.set_shared_resource_collections: List[Dict[str, Any]] = []
        self.unset_shared_resource_collections: List[Dict[str, Any]] = []
        self.published_shared_resources: List[Dict[str, Any]] = []
        self.deleted_shared_resources: List[str] = []
        self.deleted_shared_resources_to: List[str] = []
        self.added_shared_resource_comments: List[Dict[str, Any]] = []
        self.deleted_shared_resource_comments: List[str] = []
        self.created_entries: List[Dict[str, Any]] = []
        self.updated_entries: List[Dict[str, Any]] = []
        self.deleted_entries: List[str] = []
        self.batch_deleted_entries: List[List[str]] = []
        self.updated_slides: List[Dict[str, Any]] = []
        self.exported_slides: List[str] = []
        self.deleted_slides: List[str] = []
        self.batch_deleted_slides: List[List[str]] = []
        self.updated_slide_video_infos: List[Dict[str, Any]] = []
        self.deleted_slide_records: List[str] = []
        self.checked_activity_dependents: List[Dict[str, Any]] = []
        self.graded_rollcalls: List[Dict[str, Any]] = []
        self.graded_submissions: List[Dict[str, Any]] = []
        self.recommended_submissions: List[Dict[str, Any]] = []
        self.cancelled_recommended_submissions: List[str] = []
        self.scored_forums: List[Dict[str, Any]] = []
        self.updated_homework_announce_statuses: List[Dict[str, Any]] = []
        self.updated_homework_rubrics: List[Dict[str, Any]] = []
        self.created_exams: List[Dict[str, Any]] = []
        self.updated_exams: List[Dict[str, Any]] = []
        self.deleted_exams: List[Dict[str, Any]] = []
        self.scored_exams: List[Dict[str, Any]] = []
        self.commented_exam_statuses: List[Dict[str, Any]] = []
        self.created_classroom_exams: List[Dict[str, Any]] = []
        self.updated_classroom_exams: List[Dict[str, Any]] = []
        self.deleted_classrooms: List[str] = []
        self.updated_classroom_statuses: List[Dict[str, Any]] = []
        self.updated_classroom_subject_statuses: List[Dict[str, Any]] = []
        self.saved_classroom_subjects: List[Dict[str, Any]] = []
        self.deleted_classroom_subjects: List[Dict[str, Any]] = []
        self.scored_classrooms: List[Dict[str, Any]] = []
        self.created_bulletins: List[Dict[str, Any]] = []
        self.updated_bulletins: List[Dict[str, Any]] = []
        self.deleted_bulletins: List[str] = []
        self.read_bulletins: List[Dict[str, Any]] = []
        self.imported_course_groups: List[Dict[str, Any]] = []
        self.imported_enrollments: List[Dict[str, Any]] = []
        self.imported_scores: List[Dict[str, Any]] = []
        self.imported_item_scores: List[Dict[str, Any]] = []
        self.imported_seat_numbers: List[Dict[str, Any]] = []
        self.imported_rollcalls: List[Dict[str, Any]] = []
        self.created_group_sets: List[Dict[str, Any]] = []
        self.updated_group_sets: List[Dict[str, Any]] = []
        self.deleted_group_sets: List[str] = []
        self.copied_group_sets: List[Dict[str, Any]] = []
        self.random_groupings: List[Dict[str, Any]] = []
        self.created_groups: List[Dict[str, Any]] = []
        self.updated_groups: List[Dict[str, Any]] = []
        self.updated_group_infos: List[Dict[str, Any]] = []
        self.deleted_groups: List[str] = []
        self.sorted_groups: List[Dict[str, Any]] = []
        self.updated_group_members: List[Dict[str, Any]] = []
        self.updated_group_member_records: List[Dict[str, Any]] = []
        self.deleted_group_members: List[Dict[str, Any]] = []
        # Real TronClass shape: student_rollcalls is a per-student status array on the
        # rollcall object; number_code is a top-level field on that object.
        self.student_rollcalls: List[Dict[str, Any]] = [
            {"student_id": 1, "status": "pending", "rollcall_status": "on_call"}
        ]
        # When False, the GET .../student_rollcalls response omits number_code so the
        # runtime must fall back to brute-force (simulates a backend that blocks the leak).
        self.student_rollcalls_leaks_code = True
        self.student_rollcalls_status = "in_progress"
        self.student_rollcalls_end_time = "2026-05-24T23:59:00+08:00"
        self.radar_lite_payload: Dict[str, Any] = {
            "use_beacon": False,
            "beacon_nonce": "",
        }
        self.radar_distance = 12.5
        self.radar_success = False
        self.radar_target: Optional[Dict[str, float]] = None
        self.radar_success_radius_meters = 5.0
        self.radar_payload_field_names: List[List[str]] = []
        self.runner = None
        self.site = None
        self.base_url = ""

    @property
    def login_url(self) -> str:
        return self.base_url + "/login"

    @property
    def rollcalls_url(self) -> str:
        return self.base_url + "/api/radar/rollcalls?api_version=1.1.0"

    @property
    def current_semester_url(self) -> str:
        return self.base_url + "/api/current-semester-info"

    @property
    def courses_url(self) -> str:
        return self.base_url + "/api/my-courses?page=1&page_size=50"

    def endpoints(self):
        from troTHU.tron_http import TronHttpEndpoints

        return TronHttpEndpoints(
            base_url=self.base_url,
            login_url=self.login_url,
            rollcalls_url=self.rollcalls_url,
            current_semester_url=self.current_semester_url,
            courses_url=self.courses_url,
            session_cookie_domain="127.0.0.1",
        )

    def client(self, session):
        from troTHU.tron_http import TronHttpClient

        return TronHttpClient(session, endpoints=self.endpoints())

    @contextmanager
    def patch_tron_http_urls(self, tron_http_module):
        original_tron = tron_http_module.TRON
        original_login_url = tron_http_module.LOGIN_URL
        original_rollcalls_url = tron_http_module.ROLLCALLS_URL
        original_current_semester_url = getattr(tron_http_module, "CURRENT_SEMESTER_URL", "")
        original_courses_url = getattr(tron_http_module, "COURSES_URL", "")
        tron_http_module.TRON = self.base_url
        tron_http_module.LOGIN_URL = self.login_url
        tron_http_module.ROLLCALLS_URL = self.rollcalls_url
        tron_http_module.CURRENT_SEMESTER_URL = self.current_semester_url
        tron_http_module.COURSES_URL = self.courses_url
        try:
            yield
        finally:
            tron_http_module.TRON = original_tron
            tron_http_module.LOGIN_URL = original_login_url
            tron_http_module.ROLLCALLS_URL = original_rollcalls_url
            tron_http_module.CURRENT_SEMESTER_URL = original_current_semester_url
            tron_http_module.COURSES_URL = original_courses_url

    def queue_response(
        self,
        endpoint: str,
        *,
        status: int = 200,
        json_data: Any = None,
        text: str = "",
        headers: Optional[Dict[str, str]] = None,
    ) -> None:
        self.scripts.setdefault(endpoint, []).append(
            {
                "status": int(status),
                "json_data": json_data,
                "text": text,
                "headers": dict(headers or {}),
            }
        )

    def _pop_script(self, endpoint: str) -> Optional[Dict[str, Any]]:
        queue = self.scripts.get(endpoint) or []
        if not queue:
            return None
        return queue.pop(0)

    def _script_response(self, endpoint: str):
        script = self._pop_script(endpoint)
        if script is None:
            return None
        if script.get("json_data") is not None:
            return web.json_response(
                script["json_data"],
                status=script["status"],
                headers=script["headers"],
            )
        return web.Response(
            text=str(script.get("text") or ""),
            status=script["status"],
            headers=script["headers"],
        )

    def _session_ok(self, request) -> bool:
        return (
            not self.session_expired
            and request.cookies.get("session") == self.session_cookie
        )

    def _unauthorized_if_needed(self, request):
        if self._session_ok(request):
            return None
        return web.Response(status=401, text="unauthorized")

    def _find_group_set(self, group_set_id: str) -> Optional[Dict[str, Any]]:
        for group_sets in self.course_group_sets.values():
            for group_set in group_sets:
                if str(group_set.get("id")) == group_set_id or str(group_set.get("group_set_id")) == group_set_id:
                    return group_set
        return None

    def _remove_group_set(self, group_set_id: str) -> None:
        for course_id, group_sets in list(self.course_group_sets.items()):
            self.course_group_sets[course_id] = [
                group_set
                for group_set in group_sets
                if str(group_set.get("id")) != group_set_id and str(group_set.get("group_set_id")) != group_set_id
            ]
        self.group_set_groups.pop(group_set_id, None)
        self.group_set_activities.pop(group_set_id, None)
        self.current_user_groups.pop(group_set_id, None)

    def _find_group(self, group_id: str) -> Optional[Dict[str, Any]]:
        for groups in self.group_set_groups.values():
            for group in groups:
                if str(group.get("id")) == group_id:
                    return group
        return None

    def _remove_group(self, group_id: str) -> None:
        for group_set_id, groups in list(self.group_set_groups.items()):
            self.group_set_groups[group_set_id] = [
                group for group in groups if str(group.get("id")) != group_id
            ]

    def _find_bulletin(self, bulletin_id: str) -> Optional[Dict[str, Any]]:
        for bulletins in self.course_bulletins.values():
            for bulletin in bulletins:
                if str(bulletin.get("id")) == bulletin_id:
                    return bulletin
        return None

    def _remove_bulletin(self, bulletin_id: str) -> None:
        for course_id, bulletins in list(self.course_bulletins.items()):
            self.course_bulletins[course_id] = [
                bulletin for bulletin in bulletins if str(bulletin.get("id")) != bulletin_id
            ]

    def _find_module(self, module_id: str) -> Optional[Dict[str, Any]]:
        for modules in self.course_modules.values():
            for module in modules:
                if str(module.get("id")) == module_id:
                    return module
        return None

    def _remove_module(self, module_id: str) -> None:
        for course_id, modules in list(self.course_modules.items()):
            self.course_modules[course_id] = [
                module for module in modules if str(module.get("id")) != module_id
            ]

    def _find_syllabus(self, syllabus_id: str) -> Optional[Dict[str, Any]]:
        for modules in self.course_modules.values():
            for module in modules:
                for syllabus in module.get("syllabuses", []) or []:
                    if str(syllabus.get("id")) == syllabus_id:
                        return syllabus
        return None

    def _remove_syllabus(self, syllabus_id: str) -> None:
        for modules in self.course_modules.values():
            for module in modules:
                module["syllabuses"] = [
                    syllabus
                    for syllabus in module.get("syllabuses", []) or []
                    if str(syllabus.get("id")) != syllabus_id
                ]

    def _find_course_package(self, package_id: str) -> Optional[Dict[str, Any]]:
        for packages in self.course_packages.values():
            for package in packages:
                if str(package.get("id")) == package_id:
                    return package
        return None

    def _remove_course_package(self, package_id: str) -> None:
        for course_id, packages in list(self.course_packages.items()):
            self.course_packages[course_id] = [
                package for package in packages if str(package.get("id")) != package_id
            ]

    def set_radar_target(
        self,
        lat: float,
        lon: float,
        *,
        success_radius_meters: float = 5.0,
    ) -> None:
        self.radar_target = {"lat": float(lat), "lon": float(lon)}
        self.radar_success_radius_meters = float(success_radius_meters)

    def _radar_distance_from_target(self, body: Dict[str, Any]) -> Optional[float]:
        if self.radar_target is None:
            return None
        try:
            lat = math.radians(float(body["latitude"]))
            lon = math.radians(float(body["longitude"]))
        except (KeyError, TypeError, ValueError):
            return None
        target_lat = math.radians(self.radar_target["lat"])
        target_lon = math.radians(self.radar_target["lon"])
        delta_lat = target_lat - lat
        delta_lon = target_lon - lon
        haversine = (
            math.sin(delta_lat / 2.0) ** 2
            + math.cos(lat) * math.cos(target_lat) * math.sin(delta_lon / 2.0) ** 2
        )
        return 6371000.0 * 2.0 * math.atan2(math.sqrt(haversine), math.sqrt(1.0 - haversine))

    async def login_page(self, _request):
        scripted = self._script_response("login_page")
        if scripted is not None:
            return scripted
        html = """
        <html>
          <form class="form-horizontal" action="/submit">
            <input type="hidden" name="execution" value="abc123">
            <input type="hidden" name="tab_id" value="tab-1">
          </form>
        </html>
        """
        return web.Response(text=html, content_type="text/html")

    async def submit_login(self, request):
        scripted = self._script_response("submit_login")
        if scripted is not None:
            return scripted
        data = await request.post()
        if data.get("username") != "user1" or data.get("password") != "pass1":
            return web.Response(text="bad credentials", status=200)

        response = web.HTTPFound("/home")
        response.set_cookie("session", self.session_cookie)
        raise response

    async def home(self, _request):
        return web.Response(text="ok")

    async def rollcalls_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("rollcalls")
        if scripted is not None:
            return scripted
        return web.json_response({"rollcalls": self.rollcalls})

    async def current_semester_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("current_semester")
        if scripted is not None:
            return scripted
        return web.json_response(self.current_semester)

    async def courses_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("courses")
        if scripted is not None:
            return scripted
        return web.json_response({"courses": self.courses})

    async def course_detail_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_detail")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        detail = dict(self.course_details.get(course_id, {}))
        if not detail:
            for course in self.courses:
                if str(course.get("id") or course.get("course_id")) == course_id:
                    detail.update(course)
                    break
        detail.setdefault("id", int(course_id) if course_id.isdigit() else course_id)
        detail.setdefault("name", "Course {}".format(course_id))
        return web.json_response(detail)

    async def course_enrollments_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_enrollments")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        return web.json_response({"enrollments": self.course_enrollments.get(course_id, [])})

    async def course_enrollments_index_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_enrollments_index")
        if scripted is not None:
            return scripted
        course_id = str(request.query.get("course_id", ""))
        rows = self.course_enrollments.get(course_id, []) if course_id else [
            enrollment for enrollments in self.course_enrollments.values() for enrollment in enrollments
        ]
        return web.json_response({"enrollments": rows, "items": rows, "total": len(rows)})

    async def course_activity_reads_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_activity_reads")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        rows = self.course_activity_reads.get(course_id, [])
        return web.json_response({"activity_reads": rows, "items": rows, "total": len(rows)})

    async def course_students_activity_reads_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_students_activity_reads")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        rows = self.course_students_activity_reads.get(course_id, [])
        return web.json_response({"enrollments": rows, "items": rows, "total": len(rows)})

    async def course_members_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_members")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        rows = self.course_members.get(course_id, [])
        return web.json_response({"members": rows, "items": rows, "total": len(rows)})

    async def course_certification_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_certification")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        return web.json_response(
            self.course_certifications.get(course_id, {"selected_certification": None, "course_id": course_id})
        )

    async def course_enrollments_action_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_enrollments_action")
        if scripted is not None:
            return scripted
        try:
            body = await request.json()
        except Exception:
            body = {}
        enrollment_id = str(request.match_info.get("enrollment_id", ""))
        if enrollment_id:
            if request.method == "DELETE":
                self.deleted_enrollments.append({"enrollment_id": enrollment_id, "body": body})
                return web.json_response({"ok": True, "enrollment_id": enrollment_id})
            self.updated_enrollment_roles.append({"enrollment_id": enrollment_id, "body": body})
            return web.json_response({"ok": True, "enrollment_id": enrollment_id, "role": body.get("role")})
        if request.method == "DELETE":
            self.deleted_enrollments.append({"body": body})
            return web.json_response({"ok": True, "enrollment_ids": body.get("enrollment_ids", [])})
        self.updated_enrollments_roles.append({"body": body})
        return web.json_response({"ok": True, "enrollment_ids": body.get("enrollment_ids", []), "role": body.get("role")})

    async def courses_sync_from_urp_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("sync_courses_from_urp")
        if scripted is not None:
            return scripted
        body = await request.json()
        self.synced_courses_from_urp.append({"body": body})
        return web.json_response({"ok": True, "course_ids": body.get("course_ids", [])})

    async def course_research_meetings_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_research_meetings")
        if scripted is not None:
            return scripted
        course_id = str(request.query.get("course_id", ""))
        rows = self.course_research_meetings.get(course_id, [])
        return web.json_response({"meetings": rows, "items": rows, "total": len(rows)})

    async def score_book_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("score_book")
        if scripted is not None:
            return scripted
        if request.method == "PUT":
            body = await request.json()
            self.updated_score_books.append({"body": body})
            return web.json_response({"ok": True, "score_book": body})
        course_id = str(request.query.get("course_id", ""))
        return web.json_response(self.score_books.get(course_id, []))

    async def course_score_status_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_score_status")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        return web.json_response(self.course_score_status.get(course_id, {"score_status": "draft"}))

    async def course_announce_score_settings_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_announce_score_settings")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        if request.method == "PUT":
            body = await request.json()
            self.course_announce_score_settings[course_id] = dict(body)
            self.updated_announce_score_settings.append({"course_id": course_id, "body": body})
            return web.json_response({"ok": True, "settings": body})
        return web.json_response(self.course_announce_score_settings.get(course_id, {"auto": False}))

    async def course_score_type_settings_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_score_type_settings")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        body = await request.json()
        self.course_score_type_settings[course_id] = dict(body)
        self.updated_score_type_settings.append({"course_id": course_id, "body": body})
        return web.json_response({"ok": True, "settings": body})

    async def course_custom_score_items_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_custom_score_items")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        return web.json_response({"custom_score_items": self.course_custom_score_items.get(course_id, [])})

    async def create_custom_score_item_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("create_custom_score_item")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        body = await request.json()
        item = {"id": str(body.get("id") or len(self.course_custom_score_items.get(course_id, [])) + 1), **body}
        self.course_custom_score_items.setdefault(course_id, []).append(item)
        self.created_custom_score_items.append({"course_id": course_id, "body": body})
        return web.json_response({"ok": True, "custom_score_item": item}, status=201)

    async def custom_score_item_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("custom_score_item")
        if scripted is not None:
            return scripted
        item_id = str(request.match_info["item_id"])
        if request.method == "DELETE":
            self.deleted_custom_score_items.append(item_id)
            return web.json_response({"ok": True, "deleted": True, "id": item_id})
        body = await request.json()
        self.updated_custom_score_items.append({"item_id": item_id, "body": body})
        return web.json_response({"ok": True, "id": item_id, "custom_score_item": body})

    async def custom_score_item_student_score_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("custom_score_item_student_score")
        if scripted is not None:
            return scripted
        item_id = str(request.match_info["item_id"])
        student_id = str(request.match_info["student_id"])
        body = await request.json()
        self.scored_custom_items.append({"item_id": item_id, "student_id": student_id, "body": body})
        return web.json_response({"ok": True, "item_id": item_id, "student_id": student_id, "score": body.get("score")})

    async def course_score_ranks_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_score_ranks")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        return web.json_response({"score_ranks": self.course_score_ranks.get(course_id, [])})

    async def course_modules_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_modules")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        return web.json_response({"modules": self.course_modules.get(course_id, [])})

    async def course_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        body = await request.json()
        if "modules" in body:
            self.sorted_modules.append({"course_id": course_id, "body": body})
        return web.json_response({"ok": True, "course_id": course_id, "body": body})

    async def create_course_module_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("create_module")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        body = await request.json()
        modules = self.course_modules.setdefault(course_id, [])
        module_id = str(body.get("id") or "m{}".format(len(modules) + 1))
        module = {"id": module_id, "course_id": course_id, "syllabuses": [], "activities": [], **body}
        modules.append(module)
        self.created_modules.append({"course_id": course_id, "body": body})
        return web.json_response({"ok": True, "module": module}, status=201)

    async def module_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("module")
        if scripted is not None:
            return scripted
        module_id = str(request.match_info["module_id"])
        if request.method == "DELETE":
            delete_related = str(request.query.get("delete_related_activity", "")).lower() == "true"
            self._remove_module(module_id)
            self.deleted_modules.append({"module_id": module_id, "delete_related_activity": delete_related})
            return web.json_response({"ok": True, "deleted": True, "id": module_id})
        body = await request.json()
        module = self._find_module(module_id) or {"id": module_id, "syllabuses": [], "activities": []}
        module.update(body)
        self.updated_modules.append({"module_id": module_id, "body": body})
        return web.json_response({"ok": True, "module": module})

    async def module_has_dependents_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("module_dependents")
        if scripted is not None:
            return scripted
        module_id = str(request.match_info["module_id"])
        self.checked_module_dependents.append(module_id)
        return web.json_response({"has_dependents": bool(self.module_dependents.get(module_id, False))})

    async def module_activity_sort_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("sort_module_activities")
        if scripted is not None:
            return scripted
        module_id = str(request.match_info["module_id"])
        body = await request.json()
        self.sorted_module_activities.append({"module_id": module_id, "body": body})
        return web.json_response({"ok": True, "module_id": module_id, "body": body})

    async def create_syllabus_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("create_syllabus")
        if scripted is not None:
            return scripted
        body = await request.json()
        syllabus_id = str(body.get("id") or "s{}".format(len(self.created_syllabuses) + 1))
        syllabus = {"id": syllabus_id, **body}
        module_id = str(body.get("module_id", ""))
        module = self._find_module(module_id) if module_id else None
        if module is not None:
            module.setdefault("syllabuses", []).append(syllabus)
        self.created_syllabuses.append({"body": body})
        return web.json_response({"ok": True, "syllabus": syllabus}, status=201)

    async def syllabus_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("syllabus")
        if scripted is not None:
            return scripted
        syllabus_id = str(request.match_info["syllabus_id"])
        if request.method == "DELETE":
            delete_related = str(request.query.get("delete_related_activity", "")).lower() == "true"
            self._remove_syllabus(syllabus_id)
            self.deleted_syllabuses.append({"syllabus_id": syllabus_id, "delete_related_activity": delete_related})
            return web.json_response({"ok": True, "deleted": True, "id": syllabus_id})
        body = await request.json()
        syllabus = self._find_syllabus(syllabus_id) or {"id": syllabus_id}
        syllabus.update(body)
        self.updated_syllabuses.append({"syllabus_id": syllabus_id, "body": body})
        return web.json_response({"ok": True, "syllabus": syllabus})

    async def syllabus_has_dependents_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("syllabus_dependents")
        if scripted is not None:
            return scripted
        syllabus_id = str(request.match_info["syllabus_id"])
        self.checked_syllabus_dependents.append(syllabus_id)
        return web.json_response({"has_dependents": bool(self.syllabus_dependents.get(syllabus_id, False))})

    async def syllabus_resort_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("sort_syllabuses")
        if scripted is not None:
            return scripted
        body = await request.json()
        self.sorted_syllabuses.append({"body": body})
        return web.json_response({"ok": True, "body": body})

    async def syllabus_activity_sort_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("sort_syllabus_activities")
        if scripted is not None:
            return scripted
        syllabus_id = str(request.match_info["syllabus_id"])
        body = await request.json()
        self.sorted_syllabus_activities.append({"syllabus_id": syllabus_id, "body": body})
        return web.json_response({"ok": True, "syllabus_id": syllabus_id, "body": body})

    async def activity_resort_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("resort_activity")
        if scripted is not None:
            return scripted
        body = await request.json()
        self.resorted_activities.append({"body": body})
        return web.json_response({"ok": True, "body": body})

    async def course_template_setting_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_template_setting")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        return web.json_response(self.course_template_settings.get(course_id, {}))

    async def course_activity_publish_setting_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_activity_publish_setting")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        return web.json_response(self.course_activity_publish_settings.get(course_id, {}))

    async def course_publish_activities_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("publish_activities")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        body = await request.json()
        self.published_activities.append({"course_id": course_id, "body": body})
        for key in body.get("activity_ids", body.get("activityKeys", [])):
            try:
                activity_type, activity_id = str(key).split("-", 1)
            except ValueError:
                continue
            for activity in self.course_activities.get(course_id, []):
                if str(activity.get("id")) == activity_id and str(activity.get("type", activity_type)) == activity_type:
                    activity["published"] = body.get("type", body.get("published", activity.get("published")))
        return web.json_response({"ok": True, "course_id": course_id, "published_activities": body})

    async def course_activities_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_activities")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        if request.method == "POST":
            body = await request.json()
            activities = self.course_activities.setdefault(course_id, [])
            activity_id = str(body.get("id") or "a{}".format(len(activities) + 1))
            activity = {"id": activity_id, "course_id": course_id, **body}
            activities.append(activity)
            self.activities[activity_id] = activity
            self.created_activities.append({"course_id": course_id, "body": body})
            return web.json_response({"ok": True, "activity": activity}, status=201)
        activities = self.course_activities.get(course_id, [])
        return web.json_response({"activities": activities, "total": len(activities)})

    async def completion_criteria_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("completion_criteria")
        if scripted is not None:
            return scripted
        course_id = str(request.query.get("course_id", ""))
        activity_type = str(request.query.get("activity_type", ""))
        key = "{}:{}".format(course_id, activity_type)
        return web.json_response(
            self.completion_criteria.get(
                key,
                {
                    "course_id": course_id,
                    "activity_type": activity_type,
                    "completion_criteria": [],
                },
            )
        )

    async def course_completion_criteria_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_completion_criteria")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        return web.json_response(
            self.course_completion_criteria.get(
                course_id,
                {
                    "activity_publish_setting": {},
                    "homework": {"completion_criteria": [], "has_completion_criterion": False},
                    "exam": {"completion_criteria": [], "has_completion_criterion": False},
                    "forum": {"completion_criteria": [], "has_completion_criterion": False},
                },
            )
        )

    async def course_packages_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_packages")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        if request.method == "POST":
            body = await request.json()
            package = {"id": body.get("id", "cp{}".format(len(self.created_course_packages) + 1)), **body}
            self.created_course_packages.append({"course_id": course_id, "body": body})
            self.course_packages.setdefault(course_id, []).append(package)
            return web.json_response({"ok": True, "course_package": package}, status=201)
        packages = self.course_packages.get(course_id, [])
        return web.json_response({"course_packages": packages, "items": packages})

    async def course_package_status_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_package_status")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        return web.json_response(self.course_package_statuses.get(course_id, {"status": "idle"}))

    async def course_package_export_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("export_course_package")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        body = await request.json()
        package = {"id": body.get("id", "export{}".format(len(self.exported_course_packages) + 1)), **body}
        self.exported_course_packages.append({"course_id": course_id, "body": body})
        self.course_packages.setdefault(course_id, []).append(package)
        self.course_package_statuses[course_id] = {"status": "exported", "course_package_id": package["id"]}
        return web.json_response({"ok": True, "course_package": package})

    async def course_package_course_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_package_course")
        if scripted is not None:
            return scripted
        package_id = str(request.match_info["course_package_id"])
        return web.json_response(
            self.course_package_courses.get(
                package_id,
                {"course_package_id": package_id, "course": self._find_course_package(package_id) or {}},
            )
        )

    async def course_package_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_package")
        if scripted is not None:
            return scripted
        package_id = str(request.match_info["course_package_id"])
        if request.method == "PUT":
            body = await request.json()
            self.updated_course_packages.append(
                {"course_package_id": package_id, "query": dict(request.query), "body": body}
            )
            package = self._find_course_package(package_id)
            if package is not None:
                package.update(body)
            return web.json_response({"ok": True, "course_package": {"id": package_id, **body}})
        if request.method == "DELETE":
            self.deleted_course_packages.append(package_id)
            self._remove_course_package(package_id)
            return web.json_response({"ok": True, "course_package_id": package_id})
        return web.json_response(self._find_course_package(package_id) or {"id": package_id})

    async def course_package_save_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("save_course_package")
        if scripted is not None:
            return scripted
        package_id = str(request.match_info["course_package_id"])
        self.saved_course_packages.append(package_id)
        return web.json_response({"ok": True, "course_package_id": package_id})

    async def course_package_import_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("import_course_package")
        if scripted is not None:
            return scripted
        package_id = str(request.match_info["course_package_id"])
        body = await request.json()
        self.imported_course_packages.append({"course_package_id": package_id, "body": body})
        return web.json_response({"ok": True, "course_package_id": package_id})

    async def courseware_quizzes_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("courseware_quizzes")
        if scripted is not None:
            return scripted
        activity_id = str(request.match_info["activity_id"])
        return web.json_response(self.courseware_quizzes.get(activity_id, []))

    async def courseware_quiz_subjects_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("courseware_quiz_subjects")
        if scripted is not None:
            return scripted
        quiz_id = str(request.match_info["courseware_quiz_id"])
        if request.method == "PUT":
            body = await request.json()
            self.updated_courseware_quiz_subjects.append({"courseware_quiz_id": quiz_id, "body": body})
            self.courseware_quiz_subjects[quiz_id] = body.get("subjects", [])
            return web.json_response({"ok": True, "quiz_id": quiz_id, "subjects": self.courseware_quiz_subjects[quiz_id]})
        return web.json_response({"subjects": self.courseware_quiz_subjects.get(quiz_id, [])})

    async def courseware_quiz_activity_subjects_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("create_courseware_quiz_subjects")
        if scripted is not None:
            return scripted
        activity_id = str(request.match_info["activity_id"])
        body = await request.json()
        subjects = body.get("subjects", [{"id": "cw-sub{}".format(len(self.created_courseware_quiz_subjects) + 1)}])
        self.created_courseware_quiz_subjects.append({"activity_id": activity_id, "body": body})
        return web.json_response({"ok": True, "activity_id": activity_id, "subjects": subjects})

    async def courseware_quiz_settings_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("courseware_quiz_settings")
        if scripted is not None:
            return scripted
        return web.json_response(self.courseware_quiz_settings)

    async def courseware_quiz_generate_subjects_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("generate_courseware_quiz_subjects")
        if scripted is not None:
            return scripted
        body = await request.json()
        self.generated_courseware_quiz_subjects.append({"body": body})
        return web.json_response({"subjects": body.get("subjects", [{"id": "generated1"}])})

    async def courseware_quiz_generate_subjects_by_text_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("generate_courseware_quiz_subjects_by_text")
        if scripted is not None:
            return scripted
        body = await request.json()
        self.generated_courseware_quiz_subjects_by_text.append({"body": body})
        return web.json_response({"subjects": body.get("subjects", [{"id": "generated-text1"}])})

    async def courseware_quiz_format_question_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("format_courseware_quiz_question")
        if scripted is not None:
            return scripted
        body = await request.json()
        self.formatted_courseware_quiz_questions.append({"body": body})
        return web.json_response({"subjects": body.get("subjects", [{"id": "formatted1"}])})

    async def subject_libs_batch_copy_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("copy_subject_libs_to_courseware_quiz")
        if scripted is not None:
            return scripted
        body = await request.json()
        self.copied_subject_libs_to_courseware_quiz.append({"query": dict(request.query), "body": body})
        return web.json_response({"ok": True, "query": dict(request.query)})

    async def subject_libs_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("subject_libs")
        if scripted is not None:
            return scripted
        if request.method == "POST":
            body = await request.json()
            lib_type = str(request.query.get("lib_type", body.get("type", "exam")))
            subject_lib = {
                "id": body.get("id", "lib{}".format(len(self.created_subject_libs) + 1)),
                "title": body.get("title", ""),
                "type": lib_type,
                "parent_id": body.get("parent_id", body.get("parentId", 0)),
                **body,
            }
            self.created_subject_libs.append({"scope": "user", "lib_type": lib_type, "body": body})
            target = self.questionnaire_subject_libs if lib_type == "questionnaire" else self.subject_libs
            target.append(subject_lib)
            return web.json_response({"ok": True, "subject_lib": subject_lib}, status=201)
        lib_type = str(request.query.get("lib_type", ""))
        libs = self.questionnaire_subject_libs if lib_type == "questionnaire" else self.subject_libs
        if lib_type and lib_type != "questionnaire":
            libs = [lib for lib in libs if str(lib.get("type", "")) == lib_type]
        return web.json_response({"subject_libs": libs})

    async def course_subject_libs_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_subject_libs")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        if request.method == "POST":
            body = await request.json()
            lib_type = str(request.query.get("lib_type", body.get("type", "")))
            subject_lib = {
                "id": body.get("id", "course-lib{}".format(len(self.created_subject_libs) + 1)),
                "course_id": course_id,
                "title": body.get("title", ""),
                "type": lib_type,
                "parent_id": body.get("parent_id", body.get("parentId", 0)),
                **body,
            }
            self.created_subject_libs.append(
                {"scope": "course", "course_id": course_id, "lib_type": lib_type, "body": body}
            )
            self.course_subject_libs.setdefault(course_id, []).append(subject_lib)
            return web.json_response({"ok": True, "subject_lib": subject_lib}, status=201)
        libs = self.course_subject_libs.get(course_id, [])
        lib_type = str(request.query.get("lib_type", ""))
        if lib_type and lib_type != "all":
            libs = [lib for lib in libs if str(lib.get("type", "")) == lib_type]
        return web.json_response({"subject_libs": libs})

    async def subject_lib_subjects_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("subject_lib_subjects")
        if scripted is not None:
            return scripted
        lib_id = str(request.match_info["subject_lib_id"])
        if request.method == "DELETE":
            body = await request.json()
            self.deleted_subject_lib_subjects.append({"subject_lib_id": lib_id, "body": body})
            ids = {str(value) for value in body.get("subject_ids", [])}
            self.subject_lib_subjects[lib_id] = [
                subject for subject in self.subject_lib_subjects.get(lib_id, []) if str(subject.get("id")) not in ids
            ]
            return web.json_response({"ok": True, "subject_lib_id": lib_id, "deleted": list(ids)})
        subjects = self.subject_lib_subjects.get(lib_id, [])
        subject_type = str(request.query.get("subject_type", ""))
        keyword = str(request.query.get("keyword", ""))
        if subject_type:
            subjects = [subject for subject in subjects if str(subject.get("type", "")) == subject_type]
        if keyword:
            subjects = [subject for subject in subjects if keyword.lower() in str(subject).lower()]
        return web.json_response({"subjects": subjects})

    async def subject_lib_statistic_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("subject_lib_statistic")
        if scripted is not None:
            return scripted
        lib_id = str(request.match_info["subject_lib_id"])
        return web.json_response(
            self.subject_lib_statistics.get(
                lib_id,
                {
                    "page": int(request.query.get("page", 1) or 1),
                    "page_size": int(request.query.get("page_size", 20) or 20),
                    "exam_subject_statistics": self.subject_lib_subjects.get(lib_id, []),
                },
            )
        )

    async def subject_lib_knowledge_nodes_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("subject_lib_knowledge_nodes")
        if scripted is not None:
            return scripted
        lib_id = str(request.match_info["subject_lib_id"])
        return web.json_response(self.subject_lib_knowledge_nodes.get(lib_id, []))

    async def subject_lib_folders_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("subject_lib_folders")
        if scripted is not None:
            return scripted
        referrer_id = str(request.query.get("referrer_id", ""))
        return web.json_response({"folders": self.subject_lib_folders.get(referrer_id, [])})

    async def subject_lib_copy_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("copy_subject_lib")
        if scripted is not None:
            return scripted
        lib_id = str(request.match_info["subject_lib_id"])
        record = {"subject_lib_id": lib_id, "query": dict(request.query)}
        self.copied_subject_libs.append(record)
        return web.json_response({"ok": True, **record})

    async def subject_libs_move_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("move_subject_libs")
        if scripted is not None:
            return scripted
        body = await request.json()
        self.moved_subject_libs.append({"body": body})
        return web.json_response({"ok": True, "body": body})

    async def subject_libs_copy_to_user_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("copy_subject_libs_to_user")
        if scripted is not None:
            return scripted
        body = await request.json()
        self.copied_subject_libs_to_user.append({"body": body})
        return web.json_response({"ok": True, "body": body})

    async def subject_lib_subjects_movement_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("move_subject_lib_subjects")
        if scripted is not None:
            return scripted
        body = await request.json()
        self.moved_subject_lib_subjects.append({"body": body})
        return web.json_response({"ok": True, "body": body})

    async def subject_lib_subjects_replication_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("copy_subject_lib_subjects")
        if scripted is not None:
            return scripted
        body = await request.json()
        self.copied_subject_lib_subjects.append({"body": body})
        return web.json_response({"ok": True, "body": body})

    async def subject_lib_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("subject_lib")
        if scripted is not None:
            return scripted
        lib_id = str(request.match_info["subject_lib_id"])
        if request.method == "PUT":
            body = await request.json()
            self.updated_subject_libs.append({"subject_lib_id": lib_id, "body": body})
            return web.json_response({"ok": True, "subject_lib": {"id": lib_id, **body}})
        if request.method == "DELETE":
            self.deleted_subject_libs.append(lib_id)
            return web.json_response({"ok": True, "subject_lib_id": lib_id})
        return web.json_response({"subjects": self.subject_lib_subjects.get(lib_id, [])})

    async def course_topic_categories_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_topic_categories")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        categories = self.course_topic_categories.get(course_id, [])
        page_size = int(request.query.get("page_size", 0) or 0)
        shown = categories[:page_size] if page_size else categories
        return web.json_response({"topic_categories": shown, "total": len(categories), "page": 1})

    async def forum_category_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("forum_category")
        if scripted is not None:
            return scripted
        category_id = str(request.match_info["category_id"])
        category = self.forum_categories.get(category_id)
        if category is None:
            category = {
                "id": category_id,
                "topics": [],
                "page": 1,
                "page_size": int(request.query.get("page_size", 20) or 20),
            }
        return web.json_response(category)

    async def course_bulletins_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_bulletins")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        bulletins = self.course_bulletins.get(course_id, [])
        return web.json_response({"bulletins": bulletins, "total": len(bulletins)})

    async def create_course_bulletin_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("create_bulletin")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        body = await request.json()
        bulletins = self.course_bulletins.setdefault(course_id, [])
        bulletin_id = str(body.get("id") or "b{}".format(len(bulletins) + 1))
        bulletin = {"id": bulletin_id, "course_id": course_id, **body}
        bulletins.append(bulletin)
        self.created_bulletins.append({"course_id": course_id, "body": body})
        return web.json_response({"ok": True, "bulletin": bulletin}, status=201)

    async def course_bulletin_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_bulletin")
        if scripted is not None:
            return scripted
        bulletin_id = str(request.match_info["bulletin_id"])
        if request.method == "DELETE":
            self._remove_bulletin(bulletin_id)
            self.deleted_bulletins.append(bulletin_id)
            return web.json_response({"ok": True, "deleted": True, "id": bulletin_id})
        body = await request.json()
        bulletin = self._find_bulletin(bulletin_id) or {"id": bulletin_id}
        bulletin.update(body)
        self.updated_bulletins.append({"bulletin_id": bulletin_id, "body": body})
        return web.json_response({"ok": True, "bulletin": bulletin})

    async def bulletin_read_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("mark_bulletin_read")
        if scripted is not None:
            return scripted
        bulletin_id = str(request.match_info["bulletin_id"])
        self.read_bulletins.append({"bulletin_id": bulletin_id, "org_id": str(request.query.get("org_id", ""))})
        return web.json_response({"ok": True, "id": bulletin_id, "read": True})

    async def data_import_course_groups_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("import_course_groups")
        if scripted is not None:
            return scripted
        body = await request.json()
        self.imported_course_groups.append({"body": body})
        return web.json_response({"ok": True, "import": "course_groups", "body": body})

    async def data_import_enrollments_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("import_enrollments")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        body = await request.json()
        self.imported_enrollments.append({"course_id": course_id, "body": body})
        return web.json_response({"ok": True, "import": "enrollments", "course_id": course_id, "body": body})

    async def data_import_scores_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("import_scores")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        body = await request.json()
        self.imported_scores.append({"course_id": course_id, "body": body})
        return web.json_response({"ok": True, "import": "scores", "course_id": course_id, "body": body})

    async def data_import_item_scores_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("import_item_scores")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        body = await request.json()
        self.imported_item_scores.append({"course_id": course_id, "body": body})
        return web.json_response({"ok": True, "import": "item_scores", "course_id": course_id, "body": body})

    async def data_import_seat_number_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("import_seat_numbers")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        body = await request.json()
        self.imported_seat_numbers.append({"course_id": course_id, "body": body})
        return web.json_response({"ok": True, "import": "seat_numbers", "course_id": course_id, "body": body})

    async def data_import_rollcall_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("import_rollcalls")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        body = await request.json()
        self.imported_rollcalls.append({"course_id": course_id, "body": body})
        return web.json_response({"ok": True, "import": "rollcalls", "course_id": course_id, "body": body})

    async def course_group_sets_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_group_sets")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        if request.method == "POST":
            body = await request.json()
            group_sets = self.course_group_sets.setdefault(course_id, [])
            group_set_id = str(body.get("id") or body.get("group_set_id") or "gs{}".format(len(group_sets) + 1))
            group_set = {"id": group_set_id, "course_id": course_id, **body}
            group_sets.append(group_set)
            self.created_group_sets.append({"course_id": course_id, "body": body})
            return web.json_response({"ok": True, "group_set": group_set}, status=201)
        return web.json_response({"group_sets": self.course_group_sets.get(course_id, [])})

    async def course_group_set_copy_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("copy_group_set")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        group_set_id = str(request.match_info["group_set_id"])
        body = await request.json()
        group_sets = self.course_group_sets.setdefault(course_id, [])
        copied_id = str(body.get("id") or body.get("group_set_id") or "gs{}".format(len(group_sets) + 1))
        source = dict(self._find_group_set(group_set_id) or {"id": group_set_id})
        source.update(body)
        source.update({"id": copied_id, "course_id": course_id, "copied_from": group_set_id})
        group_sets.append(source)
        self.copied_group_sets.append({"course_id": course_id, "group_set_id": group_set_id, "body": body})
        return web.json_response({"ok": True, "group_set": source}, status=201)

    async def group_set_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("group_set_detail")
        if scripted is not None:
            return scripted
        group_set_id = str(request.match_info["group_set_id"])
        if request.method == "DELETE":
            self._remove_group_set(group_set_id)
            self.deleted_group_sets.append(group_set_id)
            return web.json_response({"ok": True, "deleted": True, "id": group_set_id})
        group_set = self._find_group_set(group_set_id)
        if request.method == "PUT":
            body = await request.json()
            if group_set is None:
                group_set = {"id": group_set_id}
            group_set.update(body)
            self.updated_group_sets.append({"group_set_id": group_set_id, "body": body})
            return web.json_response({"ok": True, "group_set": group_set})
        return web.json_response(group_set or {"id": group_set_id})

    async def group_set_groups_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("group_set_groups")
        if scripted is not None:
            return scripted
        group_set_id = str(request.match_info["group_set_id"])
        groups = self.group_set_groups.setdefault(group_set_id, [])
        if request.method == "POST":
            body = await request.json()
            group_id = str(body.get("id") or "g{}".format(len(groups) + 1))
            group = {"id": group_id, "group_set_id": group_set_id, **body}
            groups.append(group)
            self.created_groups.append({"group_set_id": group_set_id, "body": body})
            return web.json_response({"ok": True, "group": group}, status=201)
        return web.json_response({"groups": groups, "total": len(groups)})

    async def group_set_activities_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("group_set_activities")
        if scripted is not None:
            return scripted
        group_set_id = str(request.match_info["group_set_id"])
        activities = self.group_set_activities.get(group_set_id, [])
        return web.json_response({"activities": activities, "total": len(activities)})

    async def current_user_group_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("current_user_group")
        if scripted is not None:
            return scripted
        group_set_id = str(request.match_info["group_set_id"])
        return web.json_response(self.current_user_groups.get(group_set_id, {"group": None}))

    async def random_grouping_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("random_grouping")
        if scripted is not None:
            return scripted
        group_set_id = str(request.match_info["group_set_id"])
        body = await request.json()
        self.random_groupings.append({"group_set_id": group_set_id, "body": body})
        return web.json_response({"ok": True, "group_set_id": group_set_id, "groups": self.group_set_groups.get(group_set_id, [])})

    async def group_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("group")
        if scripted is not None:
            return scripted
        group_id = str(request.match_info["group_id"])
        if request.method == "DELETE":
            self._remove_group(group_id)
            self.deleted_groups.append(group_id)
            return web.json_response({"ok": True, "deleted": True, "id": group_id})
        body = await request.json()
        group = self._find_group(group_id) or {"id": group_id}
        group.update(body)
        self.updated_groups.append({"group_id": group_id, "body": body})
        return web.json_response({"ok": True, "group": group})

    async def group_info_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("group_info")
        if scripted is not None:
            return scripted
        group_id = str(request.match_info["group_id"])
        body = await request.json()
        group = self._find_group(group_id) or {"id": group_id}
        group["info"] = body
        self.updated_group_infos.append({"group_id": group_id, "body": body})
        return web.json_response({"ok": True, "group": group})

    async def sort_groups_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("sort_groups")
        if scripted is not None:
            return scripted
        group_set_id = str(request.match_info["group_set_id"])
        body = await request.json()
        self.sorted_groups.append({"group_set_id": group_set_id, "body": body})
        return web.json_response({"ok": True, "group_set_id": group_set_id, "sort": body})

    async def group_members_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("group_members")
        if scripted is not None:
            return scripted
        group_id = str(request.match_info["group_id"])
        body = await request.json()
        group = self._find_group(group_id) or {"id": group_id}
        group["members"] = body.get("members", body)
        self.updated_group_members.append({"group_id": group_id, "body": body})
        return web.json_response({"ok": True, "group": group})

    async def group_member_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("group_member")
        if scripted is not None:
            return scripted
        group_id = str(request.match_info["group_id"])
        member_id = str(request.match_info["member_id"])
        if request.method == "DELETE":
            self.deleted_group_members.append({"group_id": group_id, "member_id": member_id})
            return web.json_response({"ok": True, "deleted": True, "group_id": group_id, "member_id": member_id})
        body = await request.json()
        self.updated_group_member_records.append({"group_id": group_id, "member_id": member_id, "body": body})
        return web.json_response({"ok": True, "group_id": group_id, "member_id": member_id, "member": body})

    async def course_groups_submission_status_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_groups_submission_status")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        return web.json_response(self.course_groups_submission_status.get(course_id, {"groups": []}))

    async def course_teaching_team_groups_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_teaching_team_groups")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        return web.json_response({"groups": self.course_teaching_team_groups.get(course_id, [])})

    async def course_edu_score_rate_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        course_id = str(request.match_info["course_id"])
        return web.json_response(self.course_edu_score_rates.get(course_id, {"course_id": course_id, "rate": {}}))

    async def course_edu_score_submit_time_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        course_id = str(request.match_info["course_id"])
        return web.json_response(self.course_edu_score_submit_times.get(course_id, {"course_id": course_id}))

    async def course_edu_score_submit_logs_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        course_id = str(request.match_info["course_id"])
        return web.json_response({"logs": self.course_edu_score_submit_logs.get(course_id, [])})

    async def submit_edu_scores_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        body = await request.json()
        self.submitted_edu_scores.append({"body": body})
        return web.json_response({"ok": True, "submitted": True})

    async def score_publish_item_maps_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        body = await request.json()
        self.updated_score_publish_item_maps.append({"body": body})
        return web.json_response({"ok": True, "score_publish_item_maps": body})

    async def rubrics_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        if request.method == "POST":
            body = await request.json()
            rubric = {"id": str(body.get("id") or len(self.rubrics) + 1), **body}
            self.rubrics.append(rubric)
            self.created_rubrics.append({"body": body})
            return web.json_response({"data": rubric}, status=201)
        if request.method == "DELETE":
            body = await request.json()
            ids = [str(value) for value in body.get("rubric_ids", [])]
            self.deleted_rubrics.append({"body": body})
            self.rubrics = [item for item in self.rubrics if str(item.get("id")) not in ids]
            return web.json_response({"ok": True, "deleted": ids})
        return web.json_response({"rubrics": self.rubrics})

    async def rubric_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        rubric_id = str(request.match_info["rubric_id"])
        if request.method == "DELETE":
            self.deleted_rubrics.append({"body": {"rubric_ids": [rubric_id]}})
            return web.json_response({"ok": True, "deleted": [rubric_id]})
        body = await request.json()
        self.updated_rubrics.append({"rubric_id": rubric_id, "body": body})
        return web.json_response({"ok": True, "id": rubric_id, "rubric": body})

    async def rubrics_with_resource_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        return web.json_response({"rubrics": self.rubrics})

    async def rubric_template_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("rubric_template")
        if scripted is not None:
            return scripted
        return web.json_response(self.rubric_template)

    async def enrollment_scores_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("enrollment_scores")
        if scripted is not None:
            return scripted
        body = await request.json()
        self.updated_enrollment_scores.append({"body": body})
        return web.json_response({"ok": True, "enrollments": body.get("enrollments", [])})

    async def enrollment_total_scores_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("enrollment_total_scores")
        if scripted is not None:
            return scripted
        body = await request.json()
        self.updated_total_scores.append({"mode": str(request.query.get("mode", "")), "body": body})
        return web.json_response({"ok": True, "mode": str(request.query.get("mode", "")), "data": body})

    def _students_from_enrollments(self, course_id: str) -> List[Dict[str, Any]]:
        students: List[Dict[str, Any]] = []
        for enrollment in self.course_enrollments.get(course_id, []):
            user = enrollment.get("user") if isinstance(enrollment, dict) else None
            roles = enrollment.get("roles", []) if isinstance(enrollment, dict) else []
            if isinstance(user, dict) and "student" in [str(role).lower() for role in roles]:
                item = dict(user)
                item.setdefault("id", enrollment.get("id"))
                students.append(item)
        return students

    async def course_students_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_students")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        students = self.course_students.get(course_id)
        if students is None:
            students = self._students_from_enrollments(course_id)
        page_size = int(request.query.get("page_size", 0) or 0)
        shown = students[:page_size] if page_size else students
        return web.json_response({"students": shown, "total": len(students)})

    async def course_students_rollcalls_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_students_rollcalls")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        records = self.course_students_rollcalls.get(course_id, [])
        page_size = int(request.query.get("page_size", 0) or 0)
        shown = records[:page_size] if page_size else records
        return web.json_response({"students_rollcalls": shown, "total": len(records)})

    async def course_pagination_students_rollcalls_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_pagination_students_rollcalls")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        records = self.course_students_rollcalls.get(course_id, [])
        page_size = int(request.query.get("page_size", 0) or 0)
        shown = records[:page_size] if page_size else records
        return web.json_response(
            {
                "students_rollcalls": shown,
                "page": 1,
                "page_size": page_size or len(shown),
                "total": len(records),
            }
        )

    async def course_rollcalls_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_rollcalls")
        if scripted is not None:
            return scripted
        page_size = int(request.query.get("page_size", 0) or 0)
        rollcalls = list(self.rollcalls)
        if page_size:
            rollcalls = rollcalls[:page_size]
        return web.json_response(
            {
                "rollcalls": rollcalls,
                "page": 1,
                "page_size": page_size or len(rollcalls),
                "total": len(self.rollcalls),
            }
        )

    async def create_course_rollcall_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("create_course_rollcall")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        body = await request.json()
        new_id = str(body.get("id") or (len(self.rollcalls) + 1000))
        self.created_rollcalls.append({"course_id": course_id, "body": body})
        rollcall = {"id": new_id, "course_id": course_id, **body}
        self.rollcalls.append(rollcall)
        return web.json_response({"ok": True, "rollcall": rollcall}, status=201)

    async def create_module_rollcall_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("create_module_rollcall")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        body = await request.json()
        new_id = str(body.get("id") or (len(self.rollcalls) + 2000))
        self.created_module_rollcalls.append({"course_id": course_id, "body": body})
        rollcall = {"id": new_id, "course_id": course_id, **body}
        self.rollcalls.append(rollcall)
        return web.json_response({"ok": True, "rollcall": rollcall}, status=201)

    async def course_rollcall_detail_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_rollcall_detail")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        rollcall_id = str(request.match_info["rollcall_id"])
        key = "{}:{}".format(course_id, rollcall_id)
        detail = self.course_rollcall_details.get(key)
        if detail is None:
            detail = next(
                (
                    dict(item)
                    for item in self.rollcalls
                    if str(item.get("id") or item.get("rollcall_id")) == rollcall_id
                ),
                {"id": rollcall_id, "course_id": course_id},
            )
        return web.json_response(detail)

    async def ongoing_student_rollcalls_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("ongoing_student_rollcalls")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        rollcalls = self.course_ongoing_student_rollcalls.get(course_id, list(self.rollcalls))
        return web.json_response({"rollcalls": rollcalls})

    async def leave_record_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("leave_record")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        records = self.course_leave_records.get(course_id, [])
        return web.json_response({"leave_records": records, "total": len(records)})

    async def student_rollcall_history_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("student_rollcall_history")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        student_id = str(request.match_info["student_id"])
        key = "{}:{}".format(course_id, student_id)
        if request.method == "PUT":
            body = await request.json()
            self.updated_student_rollcalls.append({"course_id": course_id, "student_id": student_id, "body": body})
            return web.json_response({"ok": True, "student_rollcalls": body.get("student_rollcalls", [])})
        records = self.student_rollcall_histories.get(key, [])
        return web.json_response({"student_rollcalls": records, "total": len(records)})

    async def course_rollcall_setting_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_rollcall_setting")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        if request.method == "PUT":
            body = await request.json()
            self.course_rollcall_settings[course_id] = dict(body)
            self.updated_rollcall_settings.append({"course_id": course_id, "body": body})
            return web.json_response({"ok": True, "setting": self.course_rollcall_settings[course_id]})
        return web.json_response(
            self.course_rollcall_settings.get(
                course_id,
                {"auto_scoring": False, "score_method": "rate", "score_percentage": "0.00"},
            )
        )

    async def enrollment_rollcall_score_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("enrollment_rollcall_score")
        if scripted is not None:
            return scripted
        enrollment_id = str(request.match_info["enrollment_id"])
        body = await request.json()
        self.updated_rollcall_scores.append({"enrollment_id": enrollment_id, "body": body})
        return web.json_response({"ok": True, "enrollment_id": enrollment_id, "rollcall_score": body.get("rollcall_score")})

    async def course_rollcall_score_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_rollcall_score")
        if scripted is not None:
            return scripted
        return web.json_response({"rollcall_count": len(self.rollcalls), "score": "0", "scored": True})

    async def course_rollcall_scores_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_rollcall_scores")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        return web.json_response(self.course_rollcall_scores.get(course_id, {"scores": {}}))

    async def course_rollcall_status_result_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        course_id = str(request.match_info["course_id"])
        return web.json_response(self.course_rollcall_status_results.get(course_id, {"result": []}))

    async def timetable_rollcalls_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        course_ids = str(request.query.get("course_ids", ""))
        rollcalls = self.timetable_rollcalls.get(course_ids, [])
        return web.json_response({"rollcalls": rollcalls})

    async def grade_rollcalls_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        body = await request.json()
        self.graded_rollcalls.append({"body": body})
        return web.json_response({"ok": True, "graded": body.get("rollcall_ids", [])})

    async def course_homework_activities_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_homework_activities")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        activities = self.course_homework_activities.get(course_id, [])
        return web.json_response({"homework_activities": activities, "total": len(activities)})

    async def course_homework_scores_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_homework_scores")
        if scripted is not None:
            return scripted
        return web.json_response({"homework_activities": [], "scores": []})

    async def course_homeworks_submission_status_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_homeworks_submission_status")
        if scripted is not None:
            return scripted
        return web.json_response({})

    async def course_homework_submission_number_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_homework_submission_number")
        if scripted is not None:
            return scripted
        return web.json_response({"homework_submission_nums": {}})

    async def course_homework_student_status_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_homework_student_status")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        return web.json_response(self.course_homework_student_status.get(course_id, {}))

    async def course_exam_list_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_exam_list")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        exams = self.course_exams.get(course_id, [])
        page_size = int(request.query.get("page_size", 0) or 0)
        shown = exams[:page_size] if page_size else exams
        return web.json_response({"exams": shown, "total": len(exams)})

    async def course_exam_scores_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_exam_scores")
        if scripted is not None:
            return scripted
        return web.json_response({"exam_scores": []})

    async def course_exam_submission_status_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_exam_submission_status")
        if scripted is not None:
            return scripted
        return web.json_response({})

    async def course_exam_stat_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_exam_stat")
        if scripted is not None:
            return scripted
        return web.json_response({})

    async def course_stat_for_instructor_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_stat_for_instructor")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        return web.json_response(
            self.course_stat_for_instructor.get(course_id, {"course_id": course_id, "activity_count": 0})
        )

    async def course_stat_overview_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_stat_overview")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        return web.json_response(self.course_stat_overviews.get(course_id, {"course_id": course_id, "overview": {}}))

    async def courses_stats_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("courses_stats")
        if scripted is not None:
            return scripted
        raw_ids = str(request.query.get("course_ids", ""))
        course_ids = [value for value in raw_ids.split(",") if value]
        rows = [self.courses_stats.get(course_id, {"course_id": course_id, "stats": {}}) for course_id in course_ids]
        return web.json_response({"courses": rows, "items": rows, "total": len(rows)})

    async def stat_activities_for_courses_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("stat_activities_for_courses")
        if scripted is not None:
            return scripted
        raw_ids = str(request.query.get("course_ids", ""))
        course_ids = [value for value in raw_ids.split(",") if value]
        rows: List[Dict[str, Any]] = []
        for course_id in course_ids:
            rows.extend(self.stat_activities_for_courses.get(course_id, []))
        return web.json_response({"activities": rows, "items": rows, "total": len(rows)})

    async def global_stat_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        mapping = {
            "/api/courses/homeworks-submission-status": (
                "courses_homeworks_submission_status",
                "courses",
                {"courses": []},
            ),
            "/api/courses/settings": ("courses_settings", "settings", {"settings": []}),
            "/api/exams/submissions/": ("exam_submissions", "submissions", {"submissions": []}),
            "/api/scores/zip-status": ("scores_zip_status", "status", {"status": "idle"}),
            "/api/zip-status/COURSE_STAT_EXPORT:": (
                "course_stat_export_zip_status",
                "status",
                {"status": "idle"},
            ),
            "/api/zip-status/homework-zip/": ("homework_zip_status", "status", {"status": "idle"}),
            "/api/stat/bulletins/": ("stat_bulletins", "bulletins", {"bulletins": []}),
            "/api/stat/h5_courseware/": ("stat_h5_courseware", "items", {"items": []}),
            "/api/stat/lesson/rollcall": ("stat_lesson_rollcall", "rollcalls", {"rollcalls": []}),
            "/api/stat/materials/": ("stat_materials", "materials", {"materials": []}),
            "/api/stat/orgs/": ("stat_orgs", "orgs", {"orgs": []}),
            "/api/stat/scorm/": ("stat_scorm", "scorms", {"scorms": []}),
            "/api/stat/semester/": ("stat_semester", "semesters", {"semesters": []}),
            "/api/stat/student/rollcall": ("stat_student_rollcall", "rollcalls", {"rollcalls": []}),
            "/api/stat/students/": ("stat_students", "students", {"students": []}),
            "/api/stat/teacher/rollcall": ("stat_teacher_rollcall", "rollcalls", {"rollcalls": []}),
            "/api/stat/user-info": ("stat_user_info", "user_info", {"user_info": {}}),
            "/api/stat/video/": ("stat_video", "videos", {"videos": []}),
            "/api/stat/videos/": ("stat_videos", "videos", {"videos": []}),
            "/api/stat/vtrs/enable-status": ("stat_vtrs_enable_status", "status", {"enabled": False}),
            "/api/stat/vtrses/count-info": ("stat_vtrses_count_info", "count_info", {"count": 0}),
            "/api/stat/weblinks/": ("stat_weblinks", "weblinks", {"weblinks": []}),
            "/api/statistic": ("statistic", "statistic", {"statistic": {}}),
            "/api/user/course-certification/scores": (
                "user_course_certification_scores",
                "scores",
                {"scores": []},
            ),
        }
        name, key, default = mapping.get(request.path, ("global_stat", "items", {"items": []}))
        scripted = self._script_response(name)
        if scripted is not None:
            return scripted
        payload = self.global_stat_payloads.get(name, default)
        self.global_stat_requests.append({"name": name, "query": dict(request.query)})
        if isinstance(payload, list):
            return web.json_response({key: payload, "items": payload, "total": len(payload)})
        return web.json_response(payload)

    async def course_stat_students_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_stat_students")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        body = await request.json() if request.can_read_body else {}
        rows = self.course_stat_students.get(course_id, [])
        self.course_stat_student_requests.append({"course_id": course_id, "body": body, "query": dict(request.query)})
        return web.json_response(
            {
                "students": rows,
                "items": rows,
                "page": int(request.query.get("page", 1)),
                "page_size": int(request.query.get("page_size", len(rows) or 20)),
                "total": len(rows),
                "conditions": body,
            }
        )

    async def course_tpdoe_stat_students_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_tpdoe_stat_students")
        if scripted is not None:
            return scripted
        course_id = str(request.query.get("course_id", ""))
        rows = self.course_tpdoe_stat_students.get(course_id, self.course_stat_students.get(course_id, []))
        return web.json_response({"students": rows, "items": rows, "total": len(rows), "course_id": course_id})

    async def course_stat_students_export_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        course_id = str(request.match_info["course_id"])
        file_type = str(request.match_info["file_type"])
        self.export_requests.append(
            {
                "name": "course_stat_students",
                "id": course_id,
                "file_type": file_type,
                "method": request.method,
                "conditions": request.query.get("conditions", ""),
            }
        )
        return self._export_blob_response(
            "stat-students:{}:{}".format(course_id, file_type),
            default_filename="course_stat_students.{}".format(file_type),
        )

    async def stat_course_report_export_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        kind = str(request.match_info.get("kind", ""))
        if request.path.endswith("/rollcall/export"):
            kind = "rollcall"
        elif request.path.endswith("/rollcall/export-by-class"):
            kind = "rollcall-by-class"
        elif request.path.endswith("/homework-correct/export"):
            kind = "homework-correct"
        elif request.path.endswith("/class-hours/export"):
            kind = "class-hours"
        self.stat_export_requests.append(
            {
                "kind": kind,
                "method": request.method,
                "conditions": request.query.get("conditions", ""),
            }
        )
        return self._export_blob_response(
            "stat-report:{}".format(kind),
            default_filename="stat_{}.xlsx".format(kind.replace("-", "_")),
        )

    async def stat_courses_export_to_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        file_type = str(request.match_info["file_type"])
        body = await request.json() if request.can_read_body else {}
        self.stat_export_requests.append(
            {
                "kind": "stat-courses",
                "file_type": file_type,
                "method": request.method,
                "body": body,
            }
        )
        return self._export_blob_response(
            "stat-courses:{}".format(file_type),
            default_filename="stat_courses.{}".format(file_type),
        )

    async def stat_attendance_export_to_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        file_type = str(request.match_info["file_type"])
        body = await request.json() if request.can_read_body else {}
        self.stat_export_requests.append(
            {
                "kind": "stat-attendance",
                "file_type": file_type,
                "method": request.method,
                "body": body,
            }
        )
        return self._export_blob_response(
            "stat-attendance:{}".format(file_type),
            default_filename="stat_attendance.{}".format(file_type),
        )

    async def department_user_attendance_export_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        department_id = str(request.match_info["department_id"])
        self.stat_export_requests.append(
            {
                "kind": "department-user-attendance",
                "department_id": department_id,
                "method": request.method,
                "conditions": request.query.get("conditions", ""),
            }
        )
        return self._export_blob_response(
            "department-user-attendance:{}".format(department_id),
            default_filename="department_user_attendance.xlsx",
        )

    async def air_credit_user_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("air_credit_user")
        if scripted is not None:
            return scripted
        return web.json_response(self.air_credit_user or {"credits": 0})

    async def air_credit_user_token_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("air_credit_user_token")
        if scripted is not None:
            return scripted
        return web.json_response(self.air_credit_user_token or {"air_access_token": "token"})

    async def air_credit_users_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("air_credit_users")
        if scripted is not None:
            return scripted
        return web.json_response(
            {"users": self.air_credit_users, "items": self.air_credit_users, "total": len(self.air_credit_users)}
        )

    async def air_credit_course_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("air_credit_course")
        if scripted is not None:
            return scripted
        course_id = str(request.query.get("course_id", ""))
        return web.json_response(self.air_credit_courses.get(course_id, {"course_id": course_id, "credits": 0}))

    async def air_credit_courses_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("air_credit_courses")
        if scripted is not None:
            return scripted
        rows = self.air_credit_course_rows or list(self.air_credit_courses.values())
        return web.json_response({"courses": rows, "items": rows, "total": len(rows)})

    async def air_credit_user_courses_ai_ability_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("air_credit_user_courses_ai_ability")
        if scripted is not None:
            return scripted
        return web.json_response(self.air_credit_user_courses_ai_ability)

    async def air_credit_org_credit_state_info_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("air_credit_org_credit_state_info")
        if scripted is not None:
            return scripted
        return web.json_response(self.air_credit_org_credit_state_info or {"enabled": True})

    async def air_credit_audits_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("air_credit_audits")
        if scripted is not None:
            return scripted
        return web.json_response(
            {
                "audits": self.air_credit_audits,
                "items": self.air_credit_audits,
                "total": len(self.air_credit_audits),
                "query": dict(request.query),
            }
        )

    async def air_credit_instructor_current_semester_courses_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("air_credit_instructor_current_semester_courses")
        if scripted is not None:
            return scripted
        return web.json_response(
            {
                "courses": self.air_credit_instructor_current_semester_courses,
                "items": self.air_credit_instructor_current_semester_courses,
            }
        )

    async def air_credit_resources_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("air_credit_resources")
        if scripted is not None:
            return scripted
        return web.json_response({"resources": self.air_credit_resources, "items": self.air_credit_resources})

    async def air_credit_states_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        target = str(request.match_info["target"])
        scripted = self._script_response("air_credit_{}_states".format(target))
        if scripted is not None:
            return scripted
        rows = self.air_credit_states.get(target, [])
        return web.json_response(
            {
                "credit_states": rows,
                "items": rows,
                "page": int(request.query.get("page", 1)),
                "page_size": int(request.query.get("page_size", len(rows) or 20)),
                "total": len(rows),
                "conditions": request.query.get("conditions", ""),
            }
        )

    async def air_credit_states_stats_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("air_credit_states_stats")
        if scripted is not None:
            return scripted
        target = str(request.query.get("type", "user"))
        rows = self.air_credit_stats.get(target, [])
        return web.json_response({"stats": rows, "items": rows, "total": len(rows), "query": dict(request.query)})

    async def air_credit_states_summary_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("air_credit_states_summary")
        if scripted is not None:
            return scripted
        target = str(request.query.get("type", "user"))
        return web.json_response(self.air_credit_summaries.get(target, {"type": target, "total": 0}))

    async def air_credit_states_stats_export_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        target = str(request.match_info["target"])
        body = await request.json() if request.can_read_body else {}
        self.air_credit_export_requests.append({"target": target, "body": body})
        return self._export_blob_response(
            "air-credit:{}".format(target),
            default_filename="air_credit_{}_stats.xlsx".format(target),
        )

    async def air_credit_assignments_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        body = await request.json() if request.can_read_body else {}
        self.air_credit_action_requests.append(
            {"name": "air_credit_assignments", "method": request.method, "body": body}
        )
        return web.json_response({"ok": True, "body": body})

    async def air_credit_assignment_status_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        body = await request.json() if request.can_read_body else {}
        self.air_credit_action_requests.append({"name": "air_credit_status", "method": request.method, "body": body})
        return web.json_response({"ok": True, "body": body})

    async def air_credit_clear_remaining_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        body = await request.json() if request.can_read_body else {}
        self.air_credit_action_requests.append({"name": "air_credit_clear_remaining", "method": request.method, "body": body})
        return web.json_response({"ok": True, "body": body})

    async def air_credit_course_usage_limit_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        body = await request.json() if request.can_read_body else {}
        self.air_credit_action_requests.append({"name": "air_credit_course_usage_limit", "method": request.method, "body": body})
        return web.json_response({"ok": True, "body": body})

    async def calendar_meetings_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("calendar_meetings")
        if scripted is not None:
            return scripted
        if request.method == "POST":
            body = await request.json()
            meeting = {"id": body.get("id", "meeting{}".format(len(self.created_calendar_meetings) + 1)), **body}
            self.created_calendar_meetings.append({"body": body})
            self.calendar_meetings.append(meeting)
            return web.json_response({"ok": True, "calendar_meeting": meeting}, status=201)
        return web.json_response({"calendar_meetings": self.calendar_meetings, "items": self.calendar_meetings})

    async def calendar_meeting_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("calendar_meeting")
        if scripted is not None:
            return scripted
        meeting_id = str(request.match_info["meeting_id"])
        if request.method == "DELETE":
            self.deleted_calendar_meetings.append(meeting_id)
            self.calendar_meetings = [item for item in self.calendar_meetings if str(item.get("id")) != meeting_id]
            return web.json_response({"ok": True, "calendar_meeting_id": meeting_id})
        body = await request.json()
        self.updated_calendar_meetings.append({"meeting_id": meeting_id, "body": body})
        updated = {"id": meeting_id, **body}
        for index, meeting in enumerate(self.calendar_meetings):
            if str(meeting.get("id")) == meeting_id:
                self.calendar_meetings[index] = {**meeting, **body, "id": meeting_id}
                updated = self.calendar_meetings[index]
                break
        else:
            self.calendar_meetings.append(updated)
        return web.json_response({"ok": True, "calendar_meeting": updated})

    async def management_calendar_meetings_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("management_calendar_meetings")
        if scripted is not None:
            return scripted
        body = await request.json() if request.can_read_body else {}
        self.management_calendar_requests.append({"body": body, "query": dict(request.query)})
        return web.json_response(
            {
                "calendar_meetings": self.management_calendar_meetings,
                "items": self.management_calendar_meetings,
                "total": len(self.management_calendar_meetings),
                "conditions": body,
            }
        )

    async def management_calendar_meeting_excel_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        body = await request.json() if request.can_read_body else {}
        self.management_calendar_export_requests.append({"body": body})
        return self._export_blob_response(
            "management-calendar",
            default_filename="calendar_meetings.xlsx",
        )

    async def teaching_calendars_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("teaching_calendars")
        if scripted is not None:
            return scripted
        return web.json_response(
            {
                "items": self.teaching_calendars,
                "teaching_calendars": self.teaching_calendars,
                "total": len(self.teaching_calendars),
                "page": int(request.query.get("page", 1)),
                "page_size": int(request.query.get("page_size", len(self.teaching_calendars) or 20)),
                "keyword": request.query.get("keyword", ""),
            }
        )

    async def course_teaching_calendar_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        course_id = str(request.match_info["course_id"])
        body = await request.json() if request.can_read_body else {}
        calendar = {"id": body.get("id", "tc{}".format(len(self.created_teaching_calendars) + 1)), "course_id": course_id, **body}
        self.created_teaching_calendars.append({"course_id": course_id, "body": body})
        self.teaching_calendars.append(calendar)
        return web.json_response({"ok": True, "teaching_calendar": calendar}, status=201)

    async def teaching_calendar_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        calendar_id = str(request.match_info["calendar_id"])
        if request.method == "DELETE":
            self.deleted_teaching_calendars.append(calendar_id)
            self.teaching_calendars = [
                item for item in self.teaching_calendars if str(item.get("id")) != calendar_id
            ]
            return web.json_response({"ok": True, "teaching_calendar_id": calendar_id})
        body = await request.json() if request.can_read_body else {}
        self.updated_teaching_calendars.append({"calendar_id": calendar_id, "body": body})
        updated = {"id": calendar_id, **body}
        for index, calendar in enumerate(self.teaching_calendars):
            if str(calendar.get("id")) == calendar_id:
                self.teaching_calendars[index] = {**calendar, **body, "id": calendar_id}
                updated = self.teaching_calendars[index]
                break
        else:
            self.teaching_calendars.append(updated)
        return web.json_response({"ok": True, "teaching_calendar": updated})

    async def vtrses_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("vtrses")
        if scripted is not None:
            return scripted
        self.vtrs_requests.append({"name": "vtrses", "query": dict(request.query)})
        return web.json_response(
            {
                "vtrses": self.vtrses,
                "items": self.vtrses,
                "total": len(self.vtrses),
                "query": dict(request.query),
            }
        )

    async def vtrses_share_resources_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("vtrses_share_resources")
        if scripted is not None:
            return scripted
        self.vtrs_requests.append({"name": "vtrses_share_resources", "query": dict(request.query)})
        return web.json_response(
            {
                "share_resources": self.vtrses_share_resources,
                "items": self.vtrses_share_resources,
                "total": len(self.vtrses_share_resources),
            }
        )

    async def vtrses_applications_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("vtrses_applications")
        if scripted is not None:
            return scripted
        return web.json_response({"applications": self.vtrses_applications, "items": self.vtrses_applications})

    async def vtrses_application_stat_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("vtrses_application_stat")
        if scripted is not None:
            return scripted
        return web.json_response(self.vtrses_application_stat or {"total": len(self.vtrses_applications)})

    async def vtrses_subject_libs_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("vtrses_subject_libs")
        if scripted is not None:
            return scripted
        return web.json_response({"subject_libs": self.vtrses_subject_libs, "items": self.vtrses_subject_libs})

    async def vtrses_meeting_classifications_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("vtrses_meeting_classifications")
        if scripted is not None:
            return scripted
        return web.json_response({"classifications": self.vtrses_meeting_classifications})

    async def vtrses_resource_classifications_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("vtrses_resource_classifications")
        if scripted is not None:
            return scripted
        return web.json_response({"classifications": self.vtrses_resource_classifications})

    async def vtrses_access_code_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("vtrses_access_code")
        if scripted is not None:
            return scripted
        self.vtrs_requests.append({"name": "vtrses_access_code", "query": dict(request.query)})
        return web.json_response({"access_codes": self.vtrses_access_codes, "items": self.vtrses_access_codes})

    async def stat_vtrses_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("stat_vtrses")
        if scripted is not None:
            return scripted
        self.vtrs_requests.append({"name": "stat_vtrses", "query": dict(request.query)})
        return web.json_response({"vtrses": self.stat_vtrses, "items": self.stat_vtrses, "total": len(self.stat_vtrses)})

    async def stat_vtrses_data_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("stat_vtrses_data")
        if scripted is not None:
            return scripted
        self.vtrs_requests.append({"name": "stat_vtrses_data", "query": dict(request.query)})
        return web.json_response(
            {"data": self.stat_vtrses_data, "items": self.stat_vtrses_data, "total": len(self.stat_vtrses_data)}
        )

    async def stat_vtrses_resources_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("stat_vtrses_resources")
        if scripted is not None:
            return scripted
        return web.json_response(
            {
                "resources": self.stat_vtrses_resources,
                "items": self.stat_vtrses_resources,
                "total": len(self.stat_vtrses_resources),
            }
        )

    async def stat_vtrses_activities_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("stat_vtrses_activities")
        if scripted is not None:
            return scripted
        return web.json_response(
            {
                "activities": self.stat_vtrses_activities,
                "items": self.stat_vtrses_activities,
                "total": len(self.stat_vtrses_activities),
            }
        )

    async def stat_vtrses_teaching_count_info_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("stat_vtrses_teaching_count_info")
        if scripted is not None:
            return scripted
        return web.json_response(self.stat_vtrses_teaching_count_info or {"total": 0})

    async def stat_vtrses_data_export_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        self.stat_export_requests.append({"kind": "stat_vtrses_data", "query": dict(request.query)})
        return self._export_blob_response("stat-vtrses-data", default_filename="vtrs_data.xlsx")

    async def departments_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("departments")
        if scripted is not None:
            return scripted
        body = await request.json() if request.can_read_body else {}
        self.department_requests.append({"name": "departments", "method": request.method, "query": dict(request.query), "body": body})
        return web.json_response({"departments": self.departments, "items": self.departments, "total": len(self.departments)})

    async def top_departments_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("top_departments")
        if scripted is not None:
            return scripted
        return web.json_response({"departments": self.top_departments, "items": self.top_departments})

    async def my_departments_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("my_departments")
        if scripted is not None:
            return scripted
        return web.json_response({"departments": self.my_departments, "items": self.my_departments})

    async def selected_departments_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("selected_departments")
        if scripted is not None:
            return scripted
        return web.json_response({"departments": self.selected_departments, "items": self.selected_departments})

    async def department_resource_center_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("department_resource_center")
        if scripted is not None:
            return scripted
        return web.json_response(self.department_resource_center or {"resources": []})

    async def department_user_attendance_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("department_user_attendance")
        if scripted is not None:
            return scripted
        self.department_requests.append({"name": "department_user_attendance", "query": dict(request.query)})
        return web.json_response(
            {
                "user_attendance": self.department_user_attendance,
                "items": self.department_user_attendance,
                "total": len(self.department_user_attendance),
            }
        )

    async def department_attendance_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("department_attendance")
        if scripted is not None:
            return scripted
        body = await request.json() if request.can_read_body else {}
        self.department_requests.append({"name": "department_attendance", "query": dict(request.query), "body": body})
        return web.json_response(
            {
                "attendance": self.department_attendance,
                "items": self.department_attendance,
                "total": len(self.department_attendance),
            }
        )

    async def department_attendance_export_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        department_id = str(request.match_info["department_id"])
        body = await request.json() if request.can_read_body else {}
        self.stat_export_requests.append(
            {"kind": "department_attendance", "department_id": department_id, "body": body}
        )
        return self._export_blob_response(
            "department-attendance:{}".format(department_id),
            default_filename="department_attendance.xlsx",
        )

    async def cloud_classroom_live_classes_export_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        self.export_requests.append(
            {
                "name": "cloud_classroom_live_classes",
                "method": request.method,
                "order_by": request.query.get("order_by", ""),
                "conditions": request.query.get("conditions", ""),
            }
        )
        return self._export_blob_response(
            "cloud-classroom-live-classes",
            default_filename="cloud_classroom_live_classes.xlsx",
        )

    async def tencent_meeting_statistics_export_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        self.export_requests.append(
            {
                "name": "tencent_meeting_statistics",
                "method": request.method,
                "conditions": request.query.get("conditions", ""),
            }
        )
        return self._export_blob_response(
            "tencent-meeting-statistics",
            default_filename="tencent_meeting_statistics.xlsx",
        )

    async def ai_ppt_user_usage_count_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("ai_ppt_user_usage_count")
        if scripted is not None:
            return scripted
        return web.json_response(self.ai_ppt_user_usage_count or {"count": 0})

    async def ai_ppt_usage_stats_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("ai_ppt_usage_stats")
        if scripted is not None:
            return scripted
        return web.json_response({"stats": self.ai_ppt_usage_stats, "items": self.ai_ppt_usage_stats})

    async def ai_ppt_usage_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("ai_ppt_usage")
        if scripted is not None:
            return scripted
        body = await request.json() if request.can_read_body else {}
        self.ai_ppt_requests.append({"name": "ai_ppt_usage", "query": dict(request.query), "body": body})
        return web.json_response({"usage": self.ai_ppt_usage, "items": self.ai_ppt_usage, "total": len(self.ai_ppt_usage)})

    async def ai_ppt_user_usage_export_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        body = await request.json() if request.can_read_body else {}
        self.ai_ppt_requests.append({"name": "ai_ppt_user_usage_export", "body": body})
        return self._export_blob_response("ai-ppt-usage", default_filename="ai_ppt_usage.xlsx")

    async def orgs_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("orgs")
        if scripted is not None:
            return scripted
        self.platform_requests.append({"name": "orgs", "query": dict(request.query)})
        return web.json_response({"orgs": self.orgs, "items": self.orgs, "total": len(self.orgs)})

    async def all_orgs_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("all_orgs")
        if scripted is not None:
            return scripted
        self.platform_requests.append({"name": "all_orgs", "query": dict(request.query)})
        return web.json_response({"orgs": self.all_orgs, "items": self.all_orgs, "total": len(self.all_orgs)})

    async def org_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("org")
        if scripted is not None:
            return scripted
        self.platform_requests.append({"name": "org", "query": dict(request.query)})
        return web.json_response(self.org or {"org": self.orgs[0] if self.orgs else {}})

    async def academic_years_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("academic_years")
        if scripted is not None:
            return scripted
        self.platform_requests.append({"name": "academic_years", "query": dict(request.query)})
        return web.json_response(
            {
                "academic_years": self.academic_years,
                "items": self.academic_years,
                "total": len(self.academic_years),
            }
        )

    async def my_academic_years_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("my_academic_years")
        if scripted is not None:
            return scripted
        self.platform_requests.append({"name": "my_academic_years", "query": dict(request.query)})
        return web.json_response(
            {
                "academic_years": self.my_academic_years,
                "items": self.my_academic_years,
                "total": len(self.my_academic_years),
            }
        )

    async def my_curriculum_academic_years_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("my_curriculum_academic_years")
        if scripted is not None:
            return scripted
        self.platform_requests.append({"name": "my_curriculum_academic_years", "query": dict(request.query)})
        return web.json_response(
            {
                "academic_years": self.my_curriculum_academic_years,
                "items": self.my_curriculum_academic_years,
                "total": len(self.my_curriculum_academic_years),
            }
        )

    async def semesters_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("semesters")
        if scripted is not None:
            return scripted
        self.platform_requests.append({"name": "semesters", "query": dict(request.query)})
        return web.json_response({"semesters": self.semesters, "items": self.semesters, "total": len(self.semesters)})

    async def my_semesters_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("my_semesters")
        if scripted is not None:
            return scripted
        self.platform_requests.append({"name": "my_semesters", "query": dict(request.query)})
        return web.json_response(
            {"semesters": self.my_semesters, "items": self.my_semesters, "total": len(self.my_semesters)}
        )

    async def my_semesters_all_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("my_semesters_all")
        if scripted is not None:
            return scripted
        self.platform_requests.append({"name": "my_semesters_all", "query": dict(request.query)})
        return web.json_response(
            {
                "semesters": self.my_semesters_all,
                "items": self.my_semesters_all,
                "total": len(self.my_semesters_all),
            }
        )

    async def my_curriculum_semesters_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("my_curriculum_semesters")
        if scripted is not None:
            return scripted
        self.platform_requests.append({"name": "my_curriculum_semesters", "query": dict(request.query)})
        return web.json_response(
            {
                "semesters": self.my_curriculum_semesters,
                "items": self.my_curriculum_semesters,
                "total": len(self.my_curriculum_semesters),
            }
        )

    async def course_classifications_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_classifications")
        if scripted is not None:
            return scripted
        self.platform_requests.append({"name": "course_classifications", "query": dict(request.query)})
        return web.json_response(
            {
                "course_classifications": self.course_classifications,
                "classifications": self.course_classifications,
                "items": self.course_classifications,
            }
        )

    async def curriculum_classifications_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("curriculum_classifications")
        if scripted is not None:
            return scripted
        self.platform_requests.append({"name": "curriculum_classifications", "query": dict(request.query)})
        return web.json_response(
            {
                "curriculum_classifications": self.curriculum_classifications,
                "classifications": self.curriculum_classifications,
                "items": self.curriculum_classifications,
            }
        )

    async def curriculum_conditions_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("curriculum_conditions")
        if scripted is not None:
            return scripted
        self.platform_requests.append({"name": "curriculum_conditions", "query": dict(request.query)})
        return web.json_response(
            {
                "curriculum_conditions": self.curriculum_conditions,
                "conditions": self.curriculum_conditions,
                "items": self.curriculum_conditions,
            }
        )

    async def authz_roles_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("authz_roles")
        if scripted is not None:
            return scripted
        self.platform_requests.append({"name": "authz_roles", "query": dict(request.query)})
        return web.json_response({"roles": self.authz_roles, "items": self.authz_roles})

    async def virtual_classroom_resources_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("virtual_classroom_resources")
        if scripted is not None:
            return scripted
        self.platform_requests.append({"name": "virtual_classroom_resources", "query": dict(request.query)})
        return web.json_response(
            {
                "resources": self.virtual_classroom_resources,
                "items": self.virtual_classroom_resources,
                "total": len(self.virtual_classroom_resources),
            }
        )

    async def live_records_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("live_records")
        if scripted is not None:
            return scripted
        self.platform_requests.append({"name": "live_records", "query": dict(request.query)})
        return web.json_response(
            {"live_records": self.live_records, "items": self.live_records, "total": len(self.live_records)}
        )

    async def obe_existed_metrics_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("obe_existed_metrics")
        if scripted is not None:
            return scripted
        self.platform_requests.append({"name": "obe_existed_metrics", "query": dict(request.query)})
        return web.json_response({"metrics": self.obe_metrics, "items": self.obe_metrics})

    async def program_course_programs_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("program_course_programs")
        if scripted is not None:
            return scripted
        self.platform_requests.append({"name": "program_course_programs", "query": dict(request.query)})
        return web.json_response(
            {
                "course_programs": self.program_course_programs,
                "programs": self.program_course_programs,
                "items": self.program_course_programs,
            }
        )

    async def program_user_programs_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("program_user_programs")
        if scripted is not None:
            return scripted
        self.platform_requests.append({"name": "program_user_programs", "query": dict(request.query)})
        return web.json_response(
            {
                "user_programs": self.program_user_programs,
                "programs": self.program_user_programs,
                "items": self.program_user_programs,
            }
        )

    async def user_academic_learning_resources_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("user_academic_learning_resources")
        if scripted is not None:
            return scripted
        self.platform_requests.append({"name": "user_academic_learning_resources", "query": dict(request.query)})
        return web.json_response(
            {
                "resources": self.user_academic_learning_resources,
                "items": self.user_academic_learning_resources,
                "total": len(self.user_academic_learning_resources),
            }
        )

    async def platform_misc_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        mapping = {
            "/api/user/recently-visited-courses": (
                "user_recently_visited_courses",
                "user_recently_visited_courses",
                "visited_courses",
            ),
            "/api/alerts": ("alerts", "alerts", "alerts"),
            "/api/alerts/": ("alerts", "alerts", "alerts"),
            "/api/calendar-alerts": ("calendar_alerts", "calendar_alerts", "alerts"),
            "/api/alert/members": ("alert_members", "alert_members", "members"),
            "/api/calendar-events": ("calendar_events", "calendar_events", "events"),
            "/api/calendar-timetables": ("calendar_timetables", "calendar_timetables", "timetables"),
            "/api/instruction-team/meeting": ("instruction_team_meeting", "instruction_team_meeting", "meetings"),
            "/api/orgs/1/lang-settings": ("org_lang_settings", "org_lang_settings", "settings"),
            "/api/current-semester-info": ("current_semester_info", "current_semester", "semester"),
            "/api/portal-classifications": ("portal_classifications", "portal_classifications", "classifications"),
            "/api/todos": ("todos", "todos", "todos"),
            "/api/in-progress-homeworks": ("in_progress_homeworks", "in_progress_homeworks", "homeworks"),
            "/api/jobs/": ("jobs", "jobs", "jobs"),
            "/api/inclass-report/": ("inclass_report", "inclass_reports", "reports"),
            "/api/sign-in/stats": ("sign_in_stats", "sign_in_stats", "stats"),
            "/api/authz/permissions": ("authz_permissions", "authz_permissions", "permissions"),
            "/api/authz/course-permissions": (
                "authz_course_permissions",
                "authz_course_permissions",
                "permissions",
            ),
            "/api/authz/user-roles": ("authz_user_roles", "authz_user_roles", "roles"),
            "/api/my-classes": ("my_classes", "my_classes", "classes"),
            "/api/my-teaching-classes": ("my_teaching_classes", "my_teaching_classes", "classes"),
            "/api/task/last": ("task_last", "task_last", "task"),
            "/api/alert-logs/": ("alert_logs", "alert_logs", "logs"),
            "/api/org/change-plan-list": ("org_change_plan_list", "org_change_plan_list", "plans"),
            "/api/third-party/info": ("third_party_info", "third_party_info", "info"),
            "/api/topics/latest": ("topics_latest", "topics_latest", "topics"),
            "/api/user-index-stat/courses/info-status": (
                "user_index_courses_info_status",
                "user_index_courses_info_status",
                "status",
            ),
            "/api/user-index-stat/org-summary": ("user_index_org_summary", "user_index_org_summary", "summary"),
            "/api/user/profile-stat": ("user_profile_stat", "user_profile_stat", "profile_stat"),
        }
        name, attr, key = mapping.get(request.path, ("platform_misc", "", "items"))
        scripted = self._script_response(name)
        if scripted is not None:
            return scripted
        value = getattr(self, attr, [])
        self.platform_requests.append({"name": name, "query": dict(request.query)})
        if isinstance(value, list):
            return web.json_response({key: value, "items": value, "total": len(value)})
        return web.json_response(value or {key: []})

    async def org_bulletins_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("org_bulletins")
        if scripted is not None:
            return scripted
        self.org_bulletin_requests.append({"name": "org_bulletins", "query": dict(request.query)})
        return web.json_response(
            {"bulletins": self.org_bulletins, "items": self.org_bulletins, "total": len(self.org_bulletins)}
        )

    async def org_bulletins_latest_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("org_bulletins_latest")
        if scripted is not None:
            return scripted
        self.org_bulletin_requests.append({"name": "org_bulletins_latest", "query": dict(request.query)})
        latest = self.org_bulletin_latest or self.org_bulletins[:1]
        return web.json_response({"bulletins": latest, "items": latest, "total": len(latest)})

    async def org_bulletin_classifications_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("org_bulletin_classifications")
        if scripted is not None:
            return scripted
        self.org_bulletin_requests.append({"name": "org_bulletin_classifications", "query": dict(request.query)})
        return web.json_response(
            {
                "classifications": self.org_bulletin_classifications,
                "items": self.org_bulletin_classifications,
            }
        )

    async def catalog_courses_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("catalog_courses")
        if scripted is not None:
            return scripted
        body = await request.json() if request.can_read_body else {}
        rows = self.catalog_courses or self.courses
        self.catalog_requests.append(
            {"name": "catalog_courses", "method": request.method, "query": dict(request.query), "body": body}
        )
        return web.json_response({"courses": rows, "items": rows, "total": len(rows)})

    async def catalog_courses_count_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("catalog_courses_count")
        if scripted is not None:
            return scripted
        self.catalog_requests.append({"name": "catalog_courses_count", "query": dict(request.query)})
        return web.json_response(self.catalog_courses_count or {"count": len(self.catalog_courses or self.courses)})

    async def public_courses_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("public_courses")
        if scripted is not None:
            return scripted
        rows = self.public_courses
        self.catalog_requests.append({"name": "public_courses", "query": dict(request.query)})
        return web.json_response({"courses": rows, "items": rows, "total": len(rows)})

    async def certifications_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        management = request.path.endswith("-for-management")
        name = "certifications_for_management" if management else "certifications"
        scripted = self._script_response(name)
        if scripted is not None:
            return scripted
        rows = self.certifications_for_management if management else self.certifications
        self.catalog_requests.append({"name": name, "query": dict(request.query)})
        return web.json_response({"certifications": rows, "items": rows, "total": len(rows)})

    async def course_subjects_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_subjects")
        if scripted is not None:
            return scripted
        self.catalog_requests.append({"name": "course_subjects", "query": dict(request.query)})
        return web.json_response(
            {"course_subjects": self.course_subjects, "subjects": self.course_subjects, "items": self.course_subjects}
        )

    async def catalog_misc_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        mapping = {
            "/api/users/without_authz_roles": (
                "users_without_authz_roles",
                "users_without_authz_roles",
                "users",
            ),
            "/api/course/cover-list": ("course_cover_list", "course_cover_list", "covers"),
            "/api/course/shared-records/": ("course_shared_records", "course_shared_records", "records"),
            "/api/course_certification/": (
                "course_certification",
                "course_certifications_catalog",
                "certifications",
            ),
            "/api/campus-subject-lib/classifications/subject-count": (
                "campus_subject_lib_classification_counts",
                "campus_subject_lib_classification_counts",
                "classifications",
            ),
        }
        name, attr, key = mapping.get(request.path, ("catalog_misc", "", "items"))
        scripted = self._script_response(name)
        if scripted is not None:
            return scripted
        rows = getattr(self, attr, [])
        self.catalog_requests.append({"name": name, "query": dict(request.query)})
        if isinstance(rows, list):
            return web.json_response({key: rows, "items": rows, "total": len(rows)})
        return web.json_response(rows or {key: []})

    async def reviewed_courses_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("reviewed_courses")
        if scripted is not None:
            return scripted
        body = await request.json() if request.can_read_body else {}
        self.catalog_requests.append(
            {"name": "reviewed_courses", "method": request.method, "query": dict(request.query), "body": body}
        )
        return web.json_response(
            {"courses": self.reviewed_courses, "items": self.reviewed_courses, "total": len(self.reviewed_courses)}
        )

    async def catalog_users_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("catalog_users")
        if scripted is not None:
            return scripted
        body = await request.json() if request.can_read_body else {}
        rows = self.catalog_users or self.user_candidates
        self.catalog_requests.append(
            {"name": "catalog_users", "method": request.method, "query": dict(request.query), "body": body}
        )
        return web.json_response({"users": rows, "items": rows, "total": len(rows)})

    async def catalog_user_lookup_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("catalog_user_lookup")
        if scripted is not None:
            return scripted
        user_type = request.query.get("type", "all")
        rows = self.instructors if user_type == "instructor" else self.user_candidates
        self.catalog_requests.append({"name": "catalog_user_{}".format(user_type), "query": dict(request.query)})
        return web.json_response({"users": rows, "items": rows, "total": len(rows)})

    async def user_classes_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("user_classes")
        if scripted is not None:
            return scripted
        self.catalog_requests.append({"name": "user_classes", "query": dict(request.query)})
        return web.json_response({"classes": self.user_classes, "items": self.user_classes, "total": len(self.user_classes)})

    async def classes_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("classes")
        if scripted is not None:
            return scripted
        self.catalog_requests.append({"name": "classes", "query": dict(request.query)})
        return web.json_response({"classes": self.classes, "items": self.classes, "total": len(self.classes)})

    async def grades_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("grades")
        if scripted is not None:
            return scripted
        self.catalog_requests.append({"name": "grades", "query": dict(request.query)})
        return web.json_response({"grades": self.grades, "items": self.grades, "total": len(self.grades)})

    async def combine_courses_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("combine_courses")
        if scripted is not None:
            return scripted
        self.catalog_requests.append({"name": "combine_courses", "query": dict(request.query)})
        return web.json_response(
            {"combine_courses": self.combine_courses, "courses": self.combine_courses, "items": self.combine_courses}
        )

    async def course_interactions_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        mapping = {
            "/api/courses/interactions/": ("course_interactions", "course_interactions", "interactions"),
            "/api/interactions/": ("interactions", "interactions", "interactions"),
            "/api/courses/interactions/vote/": ("interaction_vote", "interaction_votes", "votes"),
            "/api/interaction-submissions/": ("interaction_submissions", "interaction_submissions", "submissions"),
        }
        name, attr, key = mapping.get(request.path, ("course_interactions", "course_interactions", "interactions"))
        scripted = self._script_response(name)
        if scripted is not None:
            return scripted
        rows = getattr(self, attr, [])
        self.catalog_requests.append({"name": name, "query": dict(request.query)})
        return web.json_response({key: rows, "items": rows, "total": len(rows)})

    async def campus_subject_lib_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        mapping = {
            "/api/campus-subject-lib/classifications": (
                "campus_subject_lib_classifications",
                "campus_subject_lib_classifications",
                "classifications",
            ),
            "/api/campus-subject-lib/subjects": (
                "campus_subject_lib_subjects",
                "campus_subject_lib_subjects",
                "subjects",
            ),
            "/api/campus-subject-lib/subjects/": (
                "campus_subject_lib_subjects",
                "campus_subject_lib_subjects",
                "subjects",
            ),
            "/api/campus-subject-lib/combination-subjects": (
                "campus_subject_lib_combination_subjects",
                "campus_subject_lib_combination_subjects",
                "subjects",
            ),
            "/api/campus-subject-lib/combination-subjects/": (
                "campus_subject_lib_combination_subjects",
                "campus_subject_lib_combination_subjects",
                "subjects",
            ),
        }
        name, attr, key = mapping.get(request.path, ("campus_subject_lib", "", "items"))
        scripted = self._script_response(name)
        if scripted is not None:
            return scripted
        rows = getattr(self, attr, [])
        self.catalog_requests.append({"name": name, "query": dict(request.query)})
        return web.json_response({key: rows, "items": rows, "total": len(rows)})

    async def course_resource_audit_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_resource_audit")
        if scripted is not None:
            return scripted
        self.catalog_requests.append({"name": "course_resource_audit", "query": dict(request.query)})
        return web.json_response({"audits": self.course_resource_audits, "items": self.course_resource_audits})

    async def curriculums_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("curriculums")
        if scripted is not None:
            return scripted
        self.catalog_requests.append({"name": "curriculums", "query": dict(request.query)})
        return web.json_response({"curriculums": self.curriculums, "items": self.curriculums, "total": len(self.curriculums)})

    async def curriculum_sections_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("curriculum_sections")
        if scripted is not None:
            return scripted
        self.catalog_requests.append({"name": "curriculum_sections", "query": dict(request.query)})
        return web.json_response(
            {
                "curriculum_sections": self.curriculum_sections,
                "sections": self.curriculum_sections,
                "items": self.curriculum_sections,
            }
        )

    async def warning_students_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("warning_students")
        if scripted is not None:
            return scripted
        self.catalog_requests.append({"name": "warning_students", "query": dict(request.query)})
        return web.json_response(
            {"warnings": self.warning_students, "students": self.warning_students, "items": self.warning_students}
        )

    async def authz_course_roles_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("authz_course_roles")
        if scripted is not None:
            return scripted
        self.catalog_requests.append({"name": "authz_course_roles", "query": dict(request.query)})
        return web.json_response({"roles": self.authz_course_roles, "items": self.authz_course_roles})

    async def data_import_catalog_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        path = request.path.rstrip("/")
        key = path.rsplit("/", 1)[-1]
        if path.endswith("/data-import/course"):
            key = "course"
        scripted = self._script_response("data_import_{}".format(key))
        if scripted is not None:
            return scripted
        rows = self.data_import_catalogs.get(key, [])
        self.catalog_requests.append({"name": "data_import_{}".format(key), "query": dict(request.query)})
        return web.json_response({"imports": rows, "items": rows, "total": len(rows)})

    async def data_import_validation_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("data_import_validation")
        if scripted is not None:
            return scripted
        self.catalog_requests.append({"name": "data_import_validation", "query": dict(request.query)})
        return web.json_response(
            {
                "validations": self.data_import_validations,
                "items": self.data_import_validations,
                "total": len(self.data_import_validations),
            }
        )

    async def media_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        mapping = {
            "/api/lesson-resources/shared-stat": ("media_lesson_resources_shared_stat", "lesson_resources_shared_stat", "stats"),
            "/api/user/other-video-resources": ("media_user_other_video_resources", "other_video_resources", "resources"),
            "/api/user/third-part-resources": ("media_user_third_part_resources", "third_part_resources", "resources"),
            "/api/public-resources": ("media_public_resources", "public_resources", "resources"),
            "/api/media/media-caption-tasks/progress": (
                "media_caption_task_progress",
                "media_caption_task_progress",
                "progress",
            ),
            "/api/copy-third-part-resources": ("media_copy_third_part_resources", "copy_third_part_resources", "resources"),
            "/api/lark/files": ("media_lark_files", "lark_files", "files"),
            "/api/lark/authorization/check": ("media_lark_authorization_check", "lark_authorization", "authorization"),
            "/api/user/links": ("media_user_links", "user_links", "links"),
            "/api/user/links/": ("media_user_links_slash", "user_links", "links"),
            "/api/user/storage-used": ("media_user_storage_used", "user_storage_used", "storage"),
            "/api/resource/folders": ("media_resource_folders", "resource_folders", "folders"),
            "/api/wedrive/files": ("media_wedrive_files", "wedrive_files", "files"),
            "/api/resources/": ("media_resources", "media_resources", "resources"),
            "/api/online-videos/": ("media_online_videos", "online_videos", "videos"),
            "/api/video-quizzes/": ("media_video_quizzes", "video_quizzes", "video_quizzes"),
            "/api/video-quizzes/org/arrears/": ("media_video_quizzes_arrears", "video_quizzes_arrears", "arrears"),
            "/api/meeting/": ("media_meetings", "meetings", "meetings"),
            "/api/meeting/week/time-periods": ("media_meeting_week_time_periods", "meeting_time_periods", "time_periods"),
            "/api/meeting/slot/": ("media_meeting_slot", "meeting_slots", "slots"),
            "/api/meeting/slots": ("media_meeting_slots", "meeting_slots", "slots"),
            "/api/meeting/slots/": ("media_meeting_slots_slash", "meeting_slots", "slots"),
            "/api/meeting/shanghaitech/": ("media_meeting_shanghaitech", "meeting_shanghaitech", "meetings"),
            "/api/tencent_meeting/check-user-auth": ("media_tencent_meeting_check_user_auth", "tencent_meeting_auth", "auth"),
            "/api/tencent-meeting/authorization-url": ("media_tencent_meeting_authorization_url", "tencent_meeting_authorization_url", "authorization"),
            "/api/tencent-meeting/statistics": ("media_tencent_meeting_statistics", "tencent_meeting_statistics", "statistics"),
            "/api/lecture-live/schedule/": ("media_lecture_live_schedule", "lecture_live_schedules", "schedules"),
            "/api/lecture-live": ("media_lecture_live", "lecture_live", "lecture_live"),
            "/api/activies/classin/join-url": ("media_classin_join_url", "classin_join_url", "url"),
            "/api/activities/classin/webcast-url": ("media_classin_webcast_url", "classin_webcast_url", "url"),
            "/api/dingtalk-lives/": ("media_dingtalk_lives", "dingtalk_lives", "lives"),
            "/api/interaction-activities/": ("media_interaction_activities", "interaction_activities", "activities"),
            "/api/courses/lecture-live-activity/": ("media_course_lecture_live_activities", "course_lecture_live_activities", "activities"),
            "/api/courses/tencent-meeting/activities": ("media_course_tencent_meeting_activities", "course_tencent_meeting_activities", "activities"),
            "/api/course_template": ("media_course_template", "course_templates", "templates"),
            "/api/course_template/": ("media_course_template_slash", "course_templates", "templates"),
            "/api/course_templates": ("media_course_templates", "course_templates", "templates"),
            "/api/knowledge-nodes/": ("media_knowledge_nodes", "knowledge_nodes", "knowledge_nodes"),
            "/api/knowledge-node/": ("media_knowledge_node", "knowledge_nodes", "knowledge_nodes"),
            "/api/user/lesson-resources/progress": ("media_user_lesson_resource_progress", "user_lesson_resource_progress", "progress"),
            "/api/shanghaitech/lib-resources": (
                "media_shanghaitech_lib_resources",
                "shanghaitech_lib_resources",
                "resources",
            ),
            "/api/video-suite/comments/": ("media_video_suite_comments", "video_suite_comments", "comments"),
        }
        name, attr, key = mapping.get(request.path, ("media_unknown", "", "items"))
        scripted = self._script_response(name)
        if scripted is not None:
            return scripted
        value = getattr(self, attr, [])
        self.media_requests.append({"name": name, "query": dict(request.query)})
        if isinstance(value, list):
            return web.json_response({key: value, "items": value, "total": len(value)})
        return web.json_response(value or {key: []})

    async def authoring_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        body = await request.json() if request.can_read_body else {}
        mapping = {
            "/api/project/": ("authoring_project", "project", "project"),
            "/api/project": ("authoring_project", "project", "project"),
            "/api/projects": ("authoring_projects", "projects", "projects"),
            "/api/blueprint/": ("authoring_blueprint", "blueprint", "blueprints"),
            "/api/blueprint": ("authoring_blueprint", "blueprint", "blueprints"),
            "/api/my-courses": ("authoring_my_courses", "my_courses", "courses"),
            "/api/subjects/": ("authoring_subjects", "subjects", "subjects"),
            "/api/subjects": ("authoring_subjects", "subjects", "subjects"),
            "/api/feedback-activities/": ("authoring_feedback_activities", "feedback_activities", "feedback_activities"),
            "/api/feedback-activities": ("authoring_feedback_activities", "feedback_activities", "feedback_activities"),
            "/api/chinamcloud/resources": ("authoring_chinamcloud_resources", "chinamcloud_resources", "resources"),
            "/api/uploads/references/": ("authoring_upload_references", "upload_references", "references"),
            "/api/uploads/references": ("authoring_upload_references", "upload_references", "references"),
            "/api/uploads/marked_attachment/": ("authoring_upload_marked_attachment", "upload_marked_attachments", "attachments"),
            "/api/uploads/marked_attachment": ("authoring_upload_marked_attachment", "upload_marked_attachments", "attachments"),
            "/api/uploads/share-to-courses": ("authoring_upload_share_to_courses", "upload_share_to_courses", "courses"),
            "/api/shared-resources/stat": ("authoring_shared_resources_stat", "shared_resources_stat", "stats"),
            "/api/shared-resources/stat/video-resources": (
                "authoring_shared_resources_video_stat",
                "shared_resources_video_stat",
                "resources",
            ),
            "/api/save-resources/check": ("authoring_save_resources_check", "save_resources_check", "check"),
            "/api/custom-knowledge-graph/stat": (
                "authoring_custom_knowledge_graph_stat",
                "custom_knowledge_graph_stat",
                "stats",
            ),
            "/api/knowledge-graph/kfs-subjects": (
                "authoring_knowledge_graph_kfs_subjects",
                "knowledge_graph_kfs_subjects",
                "subjects",
            ),
            "/api/knowledge-graph/forest-versions/-/stats": (
                "authoring_knowledge_graph_forest_stats",
                "knowledge_graph_forest_stats",
                "stats",
            ),
            "/api/shared-resources/admin/to-other-orgs": (
                "authoring_shared_resources_admin_to_other_orgs",
                "shared_resources_admin_to_other_orgs",
                "resources",
            ),
            "/api/my-notes/": ("authoring_my_notes", "my_notes", "notes"),
            "/api/my-notes": ("authoring_my_notes", "my_notes", "notes"),
            "/api/correction-books/": ("authoring_correction_books", "correction_books", "correction_books"),
            "/api/correction-books": ("authoring_correction_books", "correction_books", "correction_books"),
            "/api/authz/courses/": ("authoring_authz_courses", "authz_courses", "courses"),
            "/api/authz/courses": ("authoring_authz_courses", "authz_courses", "courses"),
            "/api/portal-logo": ("authoring_portal_logo", "portal_logo", "logo"),
        }
        name, attr, key = mapping.get(request.path, ("authoring_unknown", "", "items"))
        if request.path == "/api/uploads/details/query":
            name, key = "authoring_upload_details_query", "items"
            value = self.upload_details
        elif request.path.startswith("/api/uploads/document/"):
            upload_id = str(request.match_info["upload_id"])
            name, key = "authoring_upload_document_url", "document"
            value = self.upload_document_urls.get(upload_id, {"url": "https://example.invalid/document"})
        elif request.path.startswith("/api/knowledge-graph/courses/"):
            course_id = str(request.match_info["course_id"])
            name, key = "authoring_knowledge_graph_import_info", "knowledge_graph"
            value = self.knowledge_graph_import_info.get(course_id, {"course_id": course_id, "status": "ready"})
        elif request.path.startswith("/api/user/course/"):
            course_id = str(request.match_info["course_id"])
            name, key = "authoring_user_course_resource_folder", "folders"
            value = self.user_course_resource_folders.get(course_id, {"folders": []})
        elif request.path.endswith("/knowledge-base"):
            course_id = str(request.match_info["course_id"])
            name, key = "authoring_course_knowledge_base", "knowledge_bases"
            value = self.course_knowledge_bases.get(course_id, {"knowledge_bases": []})
        elif "/knowledge-base/" in request.path and request.path.endswith("/resources"):
            course_id = str(request.match_info["course_id"])
            knowledge_base_id = str(request.match_info["knowledge_base_id"])
            name, key = "authoring_course_knowledge_base_resources", "resources"
            value = self.course_knowledge_base_resources.get("{}:{}".format(course_id, knowledge_base_id), [])
        elif request.path.startswith("/api/subjects/") and request.match_info.get("subject_id"):
            subject_id = str(request.match_info["subject_id"])
            name, key = "authoring_subject_detail", "subject"
            value = self.subject_details.get(subject_id, {"id": subject_id})
        elif request.path.startswith("/api/feedback-activities/") and request.match_info.get("activity_id"):
            activity_id = str(request.match_info["activity_id"])
            name, key = "authoring_feedback_activity", "feedback_activity"
            value = self.feedback_activity_details.get(activity_id, {"id": activity_id})
        elif request.path.startswith("/api/courses/") and request.path.endswith("/feedback-activities"):
            course_id = str(request.match_info["course_id"])
            name, key = "authoring_course_feedback_activities", "feedback_activities"
            value = self.course_feedback_activities.get(course_id, [])
        elif request.path.startswith("/api/courses/danmu/"):
            course_id = str(request.match_info["course_id"])
            name, key = "authoring_course_danmu_config", "danmu"
            value = self.course_danmu_configs.get(course_id, {"enabled": False})
        elif request.path.startswith("/api/h5-courseware/"):
            activity_id = str(request.match_info["activity_id"])
            upload_id = str(request.match_info["upload_id"])
            kind = str(request.match_info["kind"])
            name = "authoring_h5_courseware_upload_{}".format(kind)
            key = kind
            value = self.h5_courseware_uploads.get("{}:{}:{}".format(activity_id, upload_id, kind), {kind: ""})
        elif request.path.startswith("/api/submissions/"):
            submission_id = str(request.match_info["submission_id"])
            upload_id = request.match_info.get("upload_id")
            subject_id = request.match_info.get("subject_id")
            if subject_id is not None:
                name, key = "authoring_submission_subject_marked_attachments", "marked_attachment"
                value = self.submission_subject_marked_attachments.get(
                    "{}:{}".format(submission_id, subject_id),
                    {"marked_attachment": {}},
                )
            elif upload_id is not None:
                name, key = "authoring_submission_marked_attachments_slash", "marked_attachment"
                value = self.submission_marked_attachment_details.get(
                    "{}:{}".format(submission_id, upload_id),
                    {"marked_attachment": {}},
                )
            elif request.path.endswith("/submission_marked_attachments"):
                name, key = "authoring_submission_marked_attachments_slash", "marked_attachment_infos"
                value = self.submission_marked_attachments.get(submission_id, {"marked_attachment_infos": []})
            else:
                name, key = "authoring_submission_marked_attachments", "marked_attachment_infos"
                value = self.submission_marked_attachments.get(submission_id, {"marked_attachment_infos": []})
        else:
            scripted = self._script_response(name)
            if scripted is not None:
                return scripted
            value = getattr(self, attr, [])
            if request.path == "/api/my-courses" and not value:
                value = self.courses
        self.authoring_requests.append(
            {"name": name, "method": request.method, "query": dict(request.query), "body": body}
        )
        if isinstance(value, list):
            return web.json_response({key: value, "items": value, "total": len(value)})
        return web.json_response(value or {key: []})

    async def course_outline_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("update_course_outline")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        body = await request.json()
        self.updated_course_outlines.append({"course_id": course_id, "body": body})
        return web.json_response({"ok": True, "course_id": course_id, "outline": body})

    async def outline_setting_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("outline_setting")
        if scripted is not None:
            return scripted
        if request.method == "GET":
            self.authoring_requests.append({"name": "authoring_outline_setting", "query": dict(request.query)})
            return web.json_response(
                self.outline_setting
                or {
                    "id": 1,
                    "formatted_options": [{"key": "comment_chinese", "required": True}],
                }
            )
        setting_id = str(request.match_info.get("setting_id", ""))
        option_key = str(request.match_info.get("option_key", ""))
        try:
            body = await request.json()
        except Exception:
            body = {}
        if request.path == "/api/outline-setting/toggle":
            action = "toggle_outline_setting"
        elif request.path.endswith("/required-options"):
            action = "update_outline_required_options"
        elif request.path.endswith("/sort"):
            action = "sort_outline_setting"
        elif request.method == "POST":
            action = "create_outline_setting"
        elif request.method == "DELETE":
            action = "delete_outline_setting_option"
        else:
            action = "update_outline_setting"
        self.outline_setting_actions.append(
            {
                "action": action,
                "setting_id": setting_id,
                "option_key": option_key,
                "body": body,
            }
        )
        return web.json_response({"ok": True, "action": action, "setting_id": setting_id, "option_key": option_key})

    async def outline_notify_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("notify_outline_editing")
        if scripted is not None:
            return scripted
        body = await request.json()
        self.outline_notifications.append({"body": body})
        return web.json_response({"ok": True, "course_ids": body.get("course_ids", [])})

    async def chinamcloud_upload_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("update_chinamcloud_resources")
        if scripted is not None:
            return scripted
        body = await request.json()
        self.chinamcloud_uploads.append({"body": body})
        return web.json_response({"ok": True, "resources": body.get("resources", [])})

    async def course_forum_activities_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_forum_activities")
        if scripted is not None:
            return scripted
        return web.json_response({"forum_activities": []})

    async def course_forum_scores_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_forum_scores")
        if scripted is not None:
            return scripted
        return web.json_response({"forum_scores": []})

    async def course_classroom_list_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_classroom_list")
        if scripted is not None:
            return scripted
        return web.json_response({"classrooms": []})

    async def course_classroom_student_status_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_classroom_student_status")
        if scripted is not None:
            return scripted
        return web.json_response({})

    async def course_classroom_exam_scores_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_classroom_exam_scores")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        return web.json_response({"classroom_exam_scores": self.course_classroom_exam_scores.get(course_id, [])})

    async def course_questionnaires_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_questionnaires")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        return web.json_response({"questionnaires": self.course_questionnaires.get(course_id, [])})

    async def course_questionnaire_scores_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_questionnaire_scores")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        return web.json_response({"questionnaire_scores": self.course_questionnaire_scores.get(course_id, [])})

    async def questionnaire_detail_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("questionnaire_detail")
        if scripted is not None:
            return scripted
        questionnaire_id = str(request.match_info["questionnaire_id"])
        return web.json_response(self.questionnaires.get(questionnaire_id, {"id": questionnaire_id}))

    async def questionnaire_subjects_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("questionnaire_subjects")
        if scripted is not None:
            return scripted
        questionnaire_id = str(request.match_info["questionnaire_id"])
        if request.method == "POST":
            body = await request.json()
            subject = {
                "id": body.get("id", "qs{}".format(len(self.created_questionnaire_subjects) + 1)),
                **body,
            }
            self.created_questionnaire_subjects.append({"questionnaire_id": questionnaire_id, "body": body})
            self.questionnaire_subjects.setdefault(questionnaire_id, []).append(subject)
            return web.json_response({"ok": True, "subject": subject}, status=201)
        return web.json_response({"subjects": self.questionnaire_subjects.get(questionnaire_id, [])})

    async def questionnaire_preview_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("questionnaire_preview")
        if scripted is not None:
            return scripted
        questionnaire_id = str(request.match_info["questionnaire_id"])
        return web.json_response({"subjects": self.questionnaire_previews.get(questionnaire_id, [])})

    async def questionnaire_logs_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("questionnaire_logs")
        if scripted is not None:
            return scripted
        questionnaire_id = str(request.match_info["questionnaire_id"])
        return web.json_response({"logs": self.questionnaire_logs.get(questionnaire_id, [])})

    async def questionnaire_submissions_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("questionnaire_submissions")
        if scripted is not None:
            return scripted
        questionnaire_id = str(request.match_info["questionnaire_id"])
        subject_id = str(request.query.get("subject_id", ""))
        key = "{}:{}".format(questionnaire_id, subject_id) if subject_id else questionnaire_id
        fallback = {
            "offset": int(request.query.get("offset", 0) or 0),
            "limit": int(request.query.get("limit", 20) or 20),
            "count": 0,
            "submissions": [],
        }
        return web.json_response(self.questionnaire_submissions.get(key, fallback))

    async def questionnaire_subject_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("questionnaire_subject")
        if scripted is not None:
            return scripted
        questionnaire_id = str(request.match_info["questionnaire_id"])
        subject_id = str(request.match_info["subject_id"])
        if request.method == "DELETE":
            self.deleted_questionnaire_subjects.append(
                {"questionnaire_id": questionnaire_id, "subject_id": subject_id}
            )
            self.questionnaire_subjects[questionnaire_id] = [
                subject
                for subject in self.questionnaire_subjects.get(questionnaire_id, [])
                if str(subject.get("id")) != subject_id
            ]
            return web.json_response({"ok": True, "questionnaire_id": questionnaire_id, "subject_id": subject_id})
        body = await request.json()
        self.updated_questionnaire_subjects.append(
            {"questionnaire_id": questionnaire_id, "subject_id": subject_id, "body": body}
        )
        updated = {"id": subject_id, **body}
        subjects = self.questionnaire_subjects.setdefault(questionnaire_id, [])
        for index, subject in enumerate(subjects):
            if str(subject.get("id")) == subject_id:
                subjects[index] = {**subject, **body, "id": subject_id}
                updated = subjects[index]
                break
        else:
            subjects.append(updated)
        return web.json_response({"ok": True, "subject": updated})

    async def questionnaire_imported_subjects_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("questionnaire_imported_subjects")
        if scripted is not None:
            return scripted
        questionnaire_id = str(request.match_info["questionnaire_id"])
        body = await request.json()
        record = {"questionnaire_id": questionnaire_id, "body": body}
        self.imported_questionnaire_subjects.append(record)
        return web.json_response({"ok": True, **record})

    async def questionnaire_imported_campus_subjects_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("questionnaire_imported_campus_subjects")
        if scripted is not None:
            return scripted
        questionnaire_id = str(request.match_info["questionnaire_id"])
        body = await request.json()
        record = {"questionnaire_id": questionnaire_id, "body": body}
        self.imported_questionnaire_campus_subjects.append(record)
        return web.json_response({"ok": True, **record})

    async def course_estimates_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_estimates")
        if scripted is not None:
            return scripted
        if request.method == "POST":
            body = await request.json()
            estimate = {"id": body.get("id", "ce{}".format(len(self.created_course_estimates) + 1)), **body}
            self.created_course_estimates.append({"body": body})
            course_id = str(body.get("course_id") or body.get("courseId") or "")
            if course_id:
                self.course_estimates.setdefault(course_id, []).append(estimate)
            return web.json_response({"ok": True, "course_estimate": estimate}, status=201)
        course_id = str(request.match_info["course_id"])
        return web.json_response({"course_estimates": self.course_estimates.get(course_id, [])})

    async def course_estimate_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_estimate")
        if scripted is not None:
            return scripted
        estimate_id = str(request.match_info["course_estimate_id"])
        body = await request.json()
        self.updated_course_estimates.append({"course_estimate_id": estimate_id, "body": body})
        return web.json_response({"ok": True, "course_estimate": {"id": estimate_id, **body}})

    async def course_estimate_delete_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_estimate_delete")
        if scripted is not None:
            return scripted
        estimate_id = str(request.match_info["course_estimate_id"])
        body = await request.json() if request.can_read_body else {}
        self.deleted_course_estimates.append({"course_estimate_id": estimate_id, "body": body})
        return web.json_response({"ok": True, "course_estimate_id": estimate_id})

    async def course_estimates_replies_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_estimates_replies")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        return web.json_response({"course_estimate_replies": self.course_estimate_replies_by_course.get(course_id, [])})

    async def course_estimate_replies_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_estimate_replies")
        if scripted is not None:
            return scripted
        estimate_id = str(request.match_info["course_estimate_id"])
        return web.json_response({"course_estimate_replies": self.course_estimate_replies.get(estimate_id, [])})

    async def course_estimate_user_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_estimate_user")
        if scripted is not None:
            return scripted
        estimate_id = str(request.match_info["course_estimate_id"])
        user_id = str(request.match_info["user_id"])
        key = "{}:{}".format(estimate_id, user_id)
        return web.json_response(self.course_estimate_users.get(key, {"course_estimate_id": estimate_id, "user_id": user_id}))

    async def course_estimate_reply_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_estimate_reply")
        if scripted is not None:
            return scripted
        body = await request.json()
        reply = {"id": body.get("id", "cer{}".format(len(self.created_course_estimate_replies) + 1)), **body}
        self.created_course_estimate_replies.append({"body": body})
        estimate_id = str(body.get("course_estimate_id") or body.get("courseEstimateId") or "")
        if estimate_id:
            self.course_estimate_replies.setdefault(estimate_id, []).append(reply)
        return web.json_response({"ok": True, "course_estimate_reply": reply}, status=201)

    async def course_estimate_reply_delete_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_estimate_reply_delete")
        if scripted is not None:
            return scripted
        reply_id = str(request.match_info["reply_id"])
        body = await request.json() if request.can_read_body else {}
        self.deleted_course_estimate_replies.append({"reply_id": reply_id, "body": body})
        return web.json_response({"ok": True, "reply_id": reply_id})

    async def course_lesson_timetable_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_lesson_timetable")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        return web.json_response({"timetables": self.course_lesson_timetables.get(course_id, [])})

    async def course_teaching_team_orgs_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_teaching_team_orgs")
        if scripted is not None:
            return scripted
        return web.json_response({"result": [{"id": 1, "name": "Org"}]})

    async def answer_number(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        body = await request.json()
        attempt = {
            "rollcall_id": request.match_info["rollcall_id"],
            "body": body,
        }
        self.number_attempts.append(attempt)
        scripted = self._script_response("number")
        if scripted is not None:
            return scripted
        if str(body.get("numberCode")) == self.correct_number_code:
            return web.json_response({"success": True, "status": "on_call_fine"})
        return web.json_response({"success": False, "message": "wrong number code"}, status=400)

    async def radar_lite(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("radar_lite")
        if scripted is not None:
            return scripted
        payload = dict(self.radar_lite_payload)
        payload.setdefault("rollcall_id", request.match_info["rollcall_id"])
        return web.json_response(payload)

    async def answer_radar(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        body = await request.json()
        self.radar_payload_field_names.append(sorted(str(key) for key in body.keys()))
        self.radar_answers.append(
            {
                "rollcall_id": request.match_info["rollcall_id"],
                "body": body,
                "field_names": sorted(str(key) for key in body.keys()),
            }
        )
        scripted = self._script_response("radar")
        if scripted is not None:
            return scripted
        distance = self._radar_distance_from_target(body)
        if self.radar_success or (
            distance is not None and distance <= self.radar_success_radius_meters
        ):
            return web.json_response({"success": True})
        return web.json_response(
            {
                "error_code": "radar_out_of_rollcall_scope",
                "message": "out of scope",
                "distance": self.radar_distance if distance is None else distance,
            },
            status=400,
        )

    async def answer_qr(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        body = await request.json()
        self.qr_answers.append(
            {
                "rollcall_id": request.match_info["rollcall_id"],
                "body": body,
                "session_id": request.headers.get("x-session-id", ""),
            }
        )
        scripted = self._script_response("qr")
        if scripted is not None:
            return scripted
        return web.json_response({"ok": True})

    async def student_rollcalls_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("student_rollcalls")
        if scripted is not None:
            return scripted
        rollcall_id = str(request.match_info["rollcall_id"])
        records = self.rollcall_students_rollcalls.get(rollcall_id)
        if records is None:
            records = self.student_rollcalls
        payload: Dict[str, Any] = {
            "id": rollcall_id,
            "is_number": True,
            "status": self.student_rollcalls_status,
            "student_rollcalls": records,
        }
        if self.student_rollcalls_leaks_code:
            payload["number_code"] = self.correct_number_code
            payload["end_time"] = self.student_rollcalls_end_time
        return web.json_response(payload)

    async def rollcall_pagination_students_rollcalls_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("rollcall_pagination_students_rollcalls")
        if scripted is not None:
            return scripted
        rollcall_id = str(request.match_info["rollcall_id"])
        records = self.rollcall_students_rollcalls.get(rollcall_id, self.student_rollcalls)
        page_size = int(request.query.get("page_size", 0) or 0)
        shown = records[:page_size] if page_size else records
        return web.json_response(
            {
                "student_rollcalls": shown,
                "page": 1,
                "page_size": page_size or len(shown),
                "total": len(records),
            }
        )

    async def start_rollcall_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("start_rollcall")
        if scripted is not None:
            return scripted
        try:
            body = await request.json()
        except Exception:
            body = {}
        rollcall_id = str(request.match_info["rollcall_id"])
        self.started_rollcalls.append({"rollcall_id": rollcall_id, "body": body})
        return web.json_response({"ok": True, "id": rollcall_id, "status": "started"})

    async def activate_rollcall_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("activate_rollcall")
        if scripted is not None:
            return scripted
        rollcall_id = str(request.match_info["rollcall_id"])
        self.activated_rollcalls.append(rollcall_id)
        return web.json_response({"ok": True, "id": rollcall_id, "status": "active"})

    async def update_rollcall_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("update_rollcall")
        if scripted is not None:
            return scripted
        rollcall_id = str(request.match_info["rollcall_id"])
        body = await request.json()
        self.updated_rollcalls.append({"rollcall_id": rollcall_id, "body": body})
        return web.json_response({"ok": True, "id": rollcall_id, "status": body.get("status", "updated")})

    async def update_radar_rollcall_position_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("update_radar_rollcall_position")
        if scripted is not None:
            return scripted
        rollcall_id = str(request.match_info["rollcall_id"])
        body = await request.json()
        self.updated_radar_rollcall_positions.append({"rollcall_id": rollcall_id, "body": body})
        return web.json_response({"ok": True, "id": rollcall_id, "position": body})

    async def stop_rollcall_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("stop_rollcall")
        if scripted is not None:
            return scripted
        rollcall_id = str(request.match_info["rollcall_id"])
        self.stopped_rollcalls.append(rollcall_id)
        return web.json_response({"ok": True, "id": rollcall_id, "status": "stopped"})

    async def stop_qr_rollcall_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("stop_qr_rollcall")
        if scripted is not None:
            return scripted
        rollcall_id = str(request.match_info["rollcall_id"])
        self.stopped_qr_rollcalls.append(rollcall_id)
        return web.json_response({"ok": True, "id": rollcall_id, "status": "stopped"})

    async def stop_number_rollcall_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("stop_number_rollcall")
        if scripted is not None:
            return scripted
        rollcall_id = str(request.match_info["rollcall_id"])
        self.stopped_number_rollcalls.append(rollcall_id)
        return web.json_response({"ok": True, "id": rollcall_id, "status": "stopped"})

    async def stop_radar_rollcall_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("stop_radar_rollcall")
        if scripted is not None:
            return scripted
        rollcall_id = str(request.match_info["rollcall_id"])
        self.stopped_radar_rollcalls.append(rollcall_id)
        return web.json_response({"ok": True, "id": rollcall_id, "status": "stopped"})

    async def rollcall_detail_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("rollcall_detail")
        if scripted is not None:
            return scripted
        rollcall_id = str(request.match_info["rollcall_id"])
        detail = self.rollcall_details.get(rollcall_id)
        if detail is None:
            detail = next(
                (
                    dict(item)
                    for item in self.rollcalls
                    if str(item.get("id") or item.get("rollcall_id")) == rollcall_id
                ),
                {"id": rollcall_id},
            )
        return web.json_response(detail)

    async def rollcall_student_count_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("rollcall_student_count")
        if scripted is not None:
            return scripted
        rollcall_id = str(request.match_info["rollcall_id"])
        if rollcall_id in self.rollcall_student_counts:
            return web.json_response(self.rollcall_student_counts[rollcall_id])
        records = self.rollcall_students_rollcalls.get(rollcall_id, self.student_rollcalls)
        counts: Dict[str, int] = {}
        for record in records:
            status = str(record.get("student_rollcall_status") or record.get("rollcall_status") or record.get("status") or "no_status")
            counts[status] = counts.get(status, 0) + 1
        return web.json_response({"total": len(records), "counts": counts})

    async def delete_rollcall_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("delete_rollcall")
        if scripted is not None:
            return scripted
        rollcall_id = str(request.match_info["rollcall_id"])
        self.deleted_rollcalls.append(rollcall_id)
        self.rollcalls = [item for item in self.rollcalls if str(item.get("id")) != rollcall_id]
        return web.json_response({"ok": True, "id": rollcall_id, "deleted": True})

    async def create_merged_rollcall_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("create_merged_rollcall")
        if scripted is not None:
            return scripted
        body = await request.json()
        self.created_merged_rollcalls.append({"body": body})
        return web.json_response({"ok": True, "merged_rollcall": body}, status=201)

    async def update_merged_rollcall_students_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("update_merged_rollcall_students")
        if scripted is not None:
            return scripted
        body = await request.json()
        self.updated_merged_rollcall_students.append({"body": body})
        return web.json_response({"ok": True, "student_rollcalls": body.get("student_rollcalls", [])})

    async def rollcall_answers_api(self, request):
        scripted = self._script_response("rollcall_answers")
        if scripted is not None:
            return scripted
        return web.json_response({"answers": [{"student_id": 1, "updated_at": "2026-05-25T02:34:18Z"}], "last_timestamp": 0})

    async def qrcode_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("qrcode")
        if scripted is not None:
            return scripted
        text = str(request.query.get("url", ""))
        self.qrcode_requests.append(text)
        # Tiny valid PNG header/body fixture; tests only need a binary response.
        return web.Response(
            body=(
                b"\x89PNG\r\n\x1a\n\x00\x00\x00\rIHDR\x00\x00\x00\x01"
                b"\x00\x00\x00\x01\x08\x02\x00\x00\x00\x90wS\xde"
                b"\x00\x00\x00\x00IEND\xaeB`\x82"
            ),
            content_type="image/png",
            headers={"Content-Disposition": 'inline; filename="qrcode.png"'},
        )

    async def activity_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("activity")
        if scripted is not None:
            return scripted
        activity_id = str(request.match_info["activity_id"])
        if request.method == "DELETE":
            self.activities.pop(activity_id, None)
            for course_id, activities in list(self.course_activities.items()):
                self.course_activities[course_id] = [
                    activity for activity in activities if str(activity.get("id")) != activity_id
                ]
            self.deleted_activity_ids.append(
                {
                    "activity_id": activity_id,
                    "delete_related_activity": str(request.query.get("delete_related_activity", "")).lower() == "true",
                }
            )
            return web.json_response({"ok": True, "deleted": True, "id": activity_id})
        if request.method == "PUT":
            body = await request.json()
            activity = self.activities.setdefault(activity_id, {"id": activity_id})
            activity.update(body)
            self.updated_activities.append({"activity_id": activity_id, "body": body})
            return web.json_response({"ok": True, "activity": activity})
        return web.json_response(self.activities.get(activity_id, {"id": activity_id, "title": "Activity {}".format(activity_id)}))

    async def activity_submission_number_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("activity_submission_number")
        if scripted is not None:
            return scripted
        activity_id = str(request.match_info["activity_id"])
        return web.json_response(self.activity_submission_numbers.get(activity_id, {"submitted": 0, "total": 0}))

    async def activity_comments_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("activity_comments")
        if scripted is not None:
            return scripted
        activity_id = str(request.match_info["activity_id"])
        if request.method == "POST":
            body = await request.json()
            comments = self.activity_comments.setdefault(activity_id, [])
            comment_id = str(body.get("id") or "comment{}".format(len(comments) + 1))
            comment = {"id": comment_id, "activity_id": activity_id, **body}
            comments.append(comment)
            self.added_activity_comments.append({"activity_id": activity_id, "body": body})
            return web.json_response({"ok": True, "comment": comment}, status=201)
        comments = self.activity_comments.get(activity_id, [])
        page_size = int(request.query.get("page_size", 0) or 0)
        shown = comments[:page_size] if page_size else comments
        return web.json_response({"comments": shown, "total": len(comments)})

    async def activity_comment_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        activity_id = str(request.match_info["activity_id"])
        comment_id = str(request.match_info["comment_id"])
        if request.method == "DELETE":
            self.activity_comments[activity_id] = [
                comment
                for comment in self.activity_comments.get(activity_id, [])
                if str(comment.get("id")) != comment_id
            ]
            self.deleted_activity_comments.append({"activity_id": activity_id, "comment_id": comment_id})
            return web.json_response({"ok": True, "deleted": True, "id": comment_id})
        body = await request.json()
        comments = self.activity_comments.setdefault(activity_id, [])
        comment = next((item for item in comments if str(item.get("id")) == comment_id), None)
        if comment is None:
            comment = {"id": comment_id, "activity_id": activity_id}
            comments.append(comment)
        comment.update(body)
        self.updated_activity_comments.append({"activity_id": activity_id, "comment_id": comment_id, "body": body})
        return web.json_response({"ok": True, "comment": comment})

    async def activity_comment_reply_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        activity_id = str(request.match_info["activity_id"])
        comment_id = str(request.match_info["comment_id"])
        body = await request.json()
        replies = self.activity_comment_replies.setdefault(comment_id, [])
        reply_id = str(body.get("id") or "reply{}".format(len(replies) + 1))
        reply = {"id": reply_id, "activity_id": activity_id, "comment_id": comment_id, **body}
        replies.append(reply)
        self.replied_activity_comments.append(
            {"activity_id": activity_id, "comment_id": comment_id, "body": body}
        )
        return web.json_response({"ok": True, "reply": reply}, status=201)

    async def activity_comment_reply_record_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        activity_id = str(request.match_info["activity_id"])
        reply_id = str(request.match_info["reply_id"])
        if request.method == "DELETE":
            for comment_id, replies in list(self.activity_comment_replies.items()):
                self.activity_comment_replies[comment_id] = [
                    reply for reply in replies if str(reply.get("id")) != reply_id
                ]
            self.deleted_activity_comment_replies.append({"activity_id": activity_id, "reply_id": reply_id})
            return web.json_response({"ok": True, "deleted": True, "id": reply_id})
        body = await request.json()
        self.updated_activity_comment_replies.append(
            {"activity_id": activity_id, "reply_id": reply_id, "body": body}
        )
        return web.json_response({"ok": True, "id": reply_id, "body": body})

    async def activity_comments_operate_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        activity_id = str(request.match_info["activity_id"])
        body = await request.json()
        self.operated_activity_comments.append({"activity_id": activity_id, "body": body})
        return web.json_response({"ok": True, "body": body})

    async def activity_comment_count_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("activity_comment_count")
        if scripted is not None:
            return scripted
        activity_id = str(request.match_info["activity_id"])
        return web.json_response({"count": len(self.activity_comments.get(activity_id, []))})

    async def activity_forum_scores_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("activity_forum_scores")
        if scripted is not None:
            return scripted
        activity_id = str(request.match_info["activity_id"])
        if request.method == "PUT":
            body = await request.json()
            self.scored_forums.append({"activity_id": activity_id, "body": body})
            return web.json_response({"ok": True, "forum_score": body})
        return web.json_response({"forum_scores": self.activity_forum_scores.get(activity_id, [])})

    async def activity_forum_status_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("activity_forum_status")
        if scripted is not None:
            return scripted
        activity_id = str(request.match_info["activity_id"])
        body = await request.json()
        self.updated_forum_statuses.append({"activity_id": activity_id, "body": body})
        return web.json_response({"ok": True, "enable": body.get("enable", True)})

    async def activity_forum_topics_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("activity_forum_topics")
        if scripted is not None:
            return scripted
        activity_id = str(request.match_info["activity_id"])
        topics = self.activity_forum_topics.get(activity_id, [])
        page_size = int(request.query.get("page_size", 0) or 0)
        shown = topics[:page_size] if page_size else topics
        return web.json_response({"topics": shown, "total": len(topics)})

    async def activity_intra_score_rules_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("activity_intra_score_rules")
        if scripted is not None:
            return scripted
        activity_id = str(request.match_info["activity_id"])
        return web.json_response({"intra_score_rules": self.activity_intra_score_rules.get(activity_id, [])})

    async def activity_upload_references_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        activity_id = str(request.match_info["activity_id"])
        return web.json_response({"upload_references": self.activity_upload_references.get(activity_id, [])})

    async def activity_uploads_license_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("activity_uploads_license")
        if scripted is not None:
            return scripted
        activity_id = str(request.match_info["activity_id"])
        return web.json_response(
            self.activity_uploads_licenses.get(
                activity_id,
                {"activity_id": activity_id, "licenses": []},
            )
        )

    async def activity_resources_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        activity_id = str(request.match_info["activity_id"])
        return web.json_response({"resources": self.activity_resources.get(activity_id, [])})

    async def activity_resource_save_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("save_activity_resource")
        if scripted is not None:
            return scripted
        resource_id = str(request.match_info["resource_id"])
        self.saved_activity_resources.append(resource_id)
        return web.json_response({"ok": True, "resource_id": resource_id, "saved": True})

    async def activity_resource_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        activity_id = str(request.match_info["activity_id"])
        resource_id = str(request.match_info["resource_id"])
        if request.method == "DELETE":
            self.activity_resources[activity_id] = [
                resource
                for resource in self.activity_resources.get(activity_id, [])
                if str(resource.get("id")) != resource_id
            ]
            self.deleted_activity_resources.append({"activity_id": activity_id, "resource_id": resource_id})
            return web.json_response({"ok": True, "deleted": True, "id": resource_id})
        body = await request.json()
        resources = self.activity_resources.setdefault(activity_id, [])
        resource = next((item for item in resources if str(item.get("id")) == resource_id), None)
        if resource is None:
            resource = {"id": resource_id, "activity_id": activity_id}
            resources.append(resource)
        resource.update(body)
        self.updated_activity_resources.append({"activity_id": activity_id, "resource_id": resource_id, "body": body})
        return web.json_response({"ok": True, "resource": resource})

    async def upload_precreate_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        body = await request.json()
        self.upload_preuploads.append(body)
        upload_id = str(body.get("id") or body.get("upload_id") or "upload{}".format(len(self.upload_preuploads)))
        upload_url = "{}://{}/internal-api/uploads/{}".format(request.scheme, request.host, upload_id)
        response = {
            "id": upload_id,
            "name": body.get("name", "upload.bin"),
            "size": body.get("size", 0),
            "type": body.get("type", "application/octet-stream"),
            "storage_type": body.get("storage_type", "LOCAL"),
            "upload_url": body.get("upload_url", upload_url),
        }
        if "transcoder" in body:
            response["transcoder"] = body["transcoder"]
        return web.json_response(response, status=201)

    async def upload_sink_api(self, request):
        upload_id = str(request.match_info["upload_id"])
        filename = ""
        body = b""
        content_type = request.headers.get("content-type", "")
        if content_type.startswith("multipart/"):
            reader = await request.multipart()
            field = await reader.next()
            if field is not None:
                filename = str(field.filename or "")
                body = await field.read()
                content_type = str(field.headers.get("Content-Type", content_type))
        else:
            body = await request.read()
        record = {
            "upload_id": upload_id,
            "filename": filename,
            "body": body,
            "content_type": content_type,
            "size": len(body),
        }
        self.uploaded_files.append(record)
        return web.json_response({"id": upload_id, "file_key": "file-{}".format(upload_id), "size": len(body)})

    async def upload_token_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        upload_id = str(request.query.get("id", ""))
        return web.json_response({"uptoken": "token-{}".format(upload_id)})

    async def upload_callback_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        upload_id = str(request.match_info["upload_id"])
        body = await request.json()
        self.upload_callbacks.append({"upload_id": upload_id, "body": body})
        return web.json_response({"ok": True, "upload_id": upload_id, "body": body})

    def _export_blob_response(self, key: str, *, default_filename: str):
        record = self.export_blobs.get(key)
        if record is None:
            record = {
                "body": "export:{}".format(key).encode("utf-8"),
                "filename": default_filename,
                "content_type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            }
        return self._download_blob_response_from_record(record, default_filename=default_filename)

    def _download_blob_response_from_record(self, record: Dict[str, Any], *, default_filename: str):
        body = record.get("body", b"")
        if isinstance(body, str):
            body = body.encode("utf-8")
        filename = str(record.get("filename") or default_filename)
        content_type = str(record.get("content_type") or "application/octet-stream")
        headers = {"Content-Disposition": "attachment; filename*=UTF-8''{}".format(filename)}
        return web.Response(body=body, headers=headers, content_type=content_type)

    async def questionnaire_export_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        questionnaire_id = str(request.match_info["questionnaire_id"])
        self.export_requests.append({"name": "questionnaire", "id": questionnaire_id, "method": request.method})
        return self._export_blob_response(
            "questionnaire:{}".format(questionnaire_id),
            default_filename="questionnaire_export.xlsx",
        )

    async def topic_export_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        topic_id = str(request.match_info["topic_id"])
        body = await request.json()
        self.export_requests.append({"name": "topic", "id": topic_id, "method": request.method, "body": body})
        return self._export_blob_response("topic:{}".format(topic_id), default_filename="topic_export.xlsx")

    async def category_topics_export_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        category_id = str(request.match_info["category_id"])
        body = await request.json()
        self.export_requests.append({"name": "category", "id": category_id, "method": request.method, "body": body})
        return self._export_blob_response("category:{}".format(category_id), default_filename="topic_export.xlsx")

    async def shared_resource_subject_lib_export_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        resource_id = str(request.match_info["resource_id"])
        self.export_requests.append({"name": "shared_resource_subject_lib", "id": resource_id, "method": request.method})
        return self._export_blob_response(
            "shared-resource-subject-lib:{}".format(resource_id),
            default_filename="subject_lib_export.xlsx",
        )

    async def shared_resource_video_stat_export_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        self.export_requests.append(
            {
                "name": "shared_resource_video_stat",
                "method": request.method,
                "conditions": request.query.get("conditions", ""),
            }
        )
        return self._export_blob_response(
            "shared-resource-video-stat",
            default_filename="shared_resource_video_stat.xlsx",
        )

    def _download_blob_response(self, key: str, *, default_filename: str = "download.bin"):
        record = self.download_blobs.get(key)
        if record is None:
            return web.json_response({"error": "not found", "key": key}, status=404)
        return self._download_blob_response_from_record(record, default_filename=default_filename)

    async def upload_blob_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        upload_id = str(request.match_info["upload_id"])
        return self._download_blob_response("upload:{}".format(upload_id), default_filename="upload-{}.bin".format(upload_id))

    async def upload_preview_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("upload_preview")
        if scripted is not None:
            return scripted
        upload_id = str(request.match_info["upload_id"])
        return web.json_response({"id": upload_id, "preview": True, "status": "ready"})

    async def upload_audio_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("upload_audio")
        if scripted is not None:
            return scripted
        upload_id = str(request.match_info["upload_id"])
        return web.json_response({"id": upload_id, "preview": True, "audio": {"id": upload_id, "status": "ready"}})

    async def upload_thumbnail_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        upload_id = str(request.match_info["upload_id"])
        return self._download_blob_response(
            "upload-thumbnail:{}".format(upload_id),
            default_filename="upload-{}-thumbnail.bin".format(upload_id),
        )

    async def upload_modified_image_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        upload_id = str(request.match_info["upload_id"])
        return self._download_blob_response(
            "upload-modified-image:{}".format(upload_id),
            default_filename="upload-{}-modified-image.bin".format(upload_id),
        )

    async def upload_swf_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        upload_id = str(request.match_info["upload_id"])
        return self._download_blob_response(
            "upload-swf:{}".format(upload_id),
            default_filename="upload-{}.swf".format(upload_id),
        )

    async def upload_reference_blob_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        reference_id = str(request.match_info["reference_id"])
        return self._download_blob_response(
            "upload-reference:{}".format(reference_id),
            default_filename="upload-reference-{}.bin".format(reference_id),
        )

    async def shared_resource_blob_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        resource_id = str(request.match_info["resource_id"])
        prefix = "shared-resource-to" if request.path.startswith("/api/shared-resources-to/") else "shared-resource"
        return self._download_blob_response(
            "{}:{}".format(prefix, resource_id),
            default_filename="shared-resource-{}.bin".format(resource_id),
        )

    async def wedrive_file_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        file_id = str(request.match_info["file_id"])
        return self._download_blob_response("wedrive:{}".format(file_id), default_filename="wedrive-{}.bin".format(file_id))

    async def third_part_upload_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        upload_id = str(request.match_info["upload_id"])
        kind = str(request.match_info["kind"])
        return self._download_blob_response(
            "third-part-{}:{}".format(kind, upload_id),
            default_filename="third-part-{}-{}.bin".format(upload_id, kind),
        )

    async def resource_groups_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("resource_groups")
        if scripted is not None:
            return scripted
        if request.method == "POST":
            body = await request.json()
            return web.json_response(
                {"resource_groups": self.resource_groups, "items": self.resource_groups, "conditions": body}
            )
        return web.json_response({"resource_groups": self.resource_groups})

    async def create_resource_group_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("create_resource_group")
        if scripted is not None:
            return scripted
        body = await request.json()
        group = {"id": body.get("id", "rg{}".format(len(self.created_resource_groups) + 1)), **body}
        self.created_resource_groups.append({"body": body})
        self.resource_groups.append(group)
        return web.json_response({"ok": True, "resource_group": group}, status=201)

    async def resource_group_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("resource_group")
        if scripted is not None:
            return scripted
        group_id = str(request.match_info["resource_group_id"])
        if request.method == "PUT":
            body = await request.json()
            self.updated_resource_groups.append({"resource_group_id": group_id, "body": body})
            return web.json_response({"ok": True, "resource_group": {"id": group_id, **body}})
        if request.method == "DELETE":
            self.deleted_resource_groups.append(group_id)
            self.resource_groups = [group for group in self.resource_groups if str(group.get("id")) != group_id]
            return web.json_response({"ok": True, "resource_group_id": group_id})
        group = next((item for item in self.resource_groups if str(item.get("id")) == group_id), {"id": group_id})
        return web.json_response(group)

    async def resource_group_members_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("resource_group_members")
        if scripted is not None:
            return scripted
        group_id = str(request.match_info["resource_group_id"])
        if request.method == "DELETE":
            body = await request.json()
            self.deleted_resource_group_members.append({"resource_group_id": group_id, "body": body})
            return web.json_response({"ok": True, "resource_group_id": group_id})
        return web.json_response({"members": self.resource_group_members.get(group_id, [])})

    async def resource_group_folders_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("resource_group_folders")
        if scripted is not None:
            return scripted
        group_id = str(request.match_info.get("resource_group_id", ""))
        folders = self.resource_group_folders.get(group_id, []) if group_id else [
            folder for values in self.resource_group_folders.values() for folder in values
        ]
        return web.json_response({"folders": folders, "items": folders})

    async def resource_group_folder_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("resource_group_folder")
        if scripted is not None:
            return scripted
        group_id = str(request.match_info["resource_group_id"])
        folder_id = str(request.match_info["folder_id"])
        self.deleted_resource_group_folders.append({"resource_group_id": group_id, "folder_id": folder_id})
        return web.json_response({"ok": True, "resource_group_id": group_id, "folder_id": folder_id})

    async def resource_group_resources_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("resource_group_resources")
        if scripted is not None:
            return scripted
        group_id = str(request.match_info.get("resource_group_id", ""))
        resources = self.resource_group_resources.get(group_id, []) if group_id else [
            resource for values in self.resource_group_resources.values() for resource in values
        ]
        return web.json_response({"resources": resources, "items": resources})

    async def resource_group_rubrics_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("resource_group_rubrics")
        if scripted is not None:
            return scripted
        group_id = str(request.match_info["resource_group_id"])
        return web.json_response({"rubrics": self.resource_group_rubrics.get(group_id, [])})

    async def resource_group_subject_libs_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("resource_group_subject_libs")
        if scripted is not None:
            return scripted
        group_id = str(request.match_info["resource_group_id"])
        return web.json_response({"subject_libs": self.resource_group_subject_libs.get(group_id, [])})

    async def resource_group_resource_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("resource_group_resource")
        if scripted is not None:
            return scripted
        group_id = str(request.match_info["resource_group_id"])
        resource_id = str(request.match_info["resource_id"])
        body = await request.json()
        self.updated_resource_group_resources.append(
            {"resource_group_id": group_id, "resource_id": resource_id, "body": body}
        )
        return web.json_response({"ok": True, "resource": {"id": resource_id, **body}})

    async def resource_group_leave_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("leave_resource_group")
        if scripted is not None:
            return scripted
        group_id = str(request.match_info["resource_group_id"])
        self.left_resource_groups.append(group_id)
        return web.json_response({"ok": True, "resource_group_id": group_id})

    async def user_resources_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("user_resources")
        if scripted is not None:
            return scripted
        return web.json_response({"resources": self.user_resources, "items": self.user_resources})

    async def user_resource_folder_info_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("user_resource_folder_info")
        if scripted is not None:
            return scripted
        resource_id = str(request.match_info["resource_id"])
        return web.json_response(
            self.user_resource_folder_info.get(
                resource_id,
                {"resource_id": resource_id, "folderCount": 0, "fileCount": 0, "totalFileSize": 0},
            )
        )

    async def shared_resources_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("shared_resources")
        if scripted is not None:
            return scripted
        if request.method == "POST":
            body = await request.json()
            resource = {"id": body.get("id", "sr{}".format(len(self.published_shared_resources) + 1)), **body}
            self.published_shared_resources.append({"body": body})
            self.shared_resources.append(resource)
            return web.json_response({"ok": True, "shared_resource": resource}, status=201)
        return web.json_response({"resources": self.shared_resources, "items": self.shared_resources})

    async def shared_resources_from_me_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        return web.json_response({"resources": self.shared_resources_from_me, "items": self.shared_resources_from_me})

    async def shared_resources_to_me_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        return web.json_response({"resources": self.shared_resources_to_me, "items": self.shared_resources_to_me})

    async def shared_resource_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        resource_id = str(request.match_info["resource_id"])
        if request.path.startswith("/api/shared-resources-to/"):
            self.deleted_shared_resources_to.append(resource_id)
            return web.json_response({"ok": True, "resource_id": resource_id})
        self.deleted_shared_resources.append(resource_id)
        self.deleted_resource_group_resources.append(resource_id)
        return web.json_response({"ok": True, "resource_id": resource_id})

    async def shared_resource_save_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        resource_id = str(request.match_info["resource_id"])
        self.saved_shared_resources.append(resource_id)
        return web.json_response({"ok": True, "resource_id": resource_id, "saved": True})

    async def shared_resource_batch_save_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        body = await request.json()
        ids = [str(value) for value in body.get("ids", [])]
        self.batch_saved_shared_resources.append(ids)
        return web.json_response({"ok": True, "ids": ids})

    async def shared_resource_collection_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        resource_id = str(request.match_info["resource_id"])
        user_id = str(request.match_info["user_id"])
        record = {"resource_id": resource_id, "user_id": user_id}
        if request.method == "DELETE":
            self.unset_shared_resource_collections.append(record)
            return web.json_response({"ok": True, **record})
        self.set_shared_resource_collections.append(record)
        return web.json_response({"ok": True, **record})

    async def shared_resource_collections_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        user_id = str(request.match_info["user_id"])
        collections = self.shared_resource_collections.get(user_id, [])
        return web.json_response({"collections": collections, "items": collections})

    async def shared_resource_comments_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        resource_id = str(request.match_info["resource_id"])
        if request.method == "POST":
            body = await request.json()
            comment = {"id": body.get("id", "src{}".format(len(self.added_shared_resource_comments) + 1)), **body}
            self.added_shared_resource_comments.append({"resource_id": resource_id, "body": body})
            self.shared_resource_comments.setdefault(resource_id, []).append(comment)
            return web.json_response({"ok": True, "comment": comment}, status=201)
        comments = self.shared_resource_comments.get(resource_id, [])
        return web.json_response({"comments": comments, "items": comments})

    async def shared_resource_comment_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        comment_id = str(request.match_info["comment_id"])
        self.deleted_shared_resource_comments.append(comment_id)
        return web.json_response({"ok": True, "comment_id": comment_id})

    async def shared_resource_classifications_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        return web.json_response({"classifications": self.shared_resource_classifications})

    async def shared_resource_tags_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        return web.json_response({"tags": self.shared_resource_tags, "total_count": len(self.shared_resource_tags)})

    async def shared_resource_recommendations_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        return web.json_response({"resources": self.shared_resource_recommendations})

    async def shared_resource_track_users_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        return web.json_response({"users": self.shared_resource_track_users})

    async def shared_resource_followers_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        return web.json_response({"users": self.shared_resource_followers})

    async def cc_license_groups_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        return web.json_response({"groups": self.cc_license_groups})

    async def cc_license_map_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        return web.json_response(self.cc_license_map or {"licenses": {}})

    async def entries_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        if request.method == "POST":
            body = await request.json()
            entry = {"id": body.get("id", "entry{}".format(len(self.created_entries) + 1)), **body}
            self.created_entries.append({"body": body})
            self.entries.append(entry)
            return web.json_response({"ok": True, "entry": entry}, status=201)
        return web.json_response({"entries": self.entries, "items": self.entries})

    async def entry_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        entry_id = str(request.match_info["entry_id"])
        if request.method == "PUT":
            body = await request.json()
            self.updated_entries.append({"entry_id": entry_id, "body": body})
            return web.json_response({"ok": True, "entry": {"id": entry_id, **body}})
        if request.method == "DELETE":
            self.deleted_entries.append(entry_id)
            self.entries = [entry for entry in self.entries if str(entry.get("id")) != entry_id]
            return web.json_response({"ok": True, "entry_id": entry_id})
        entry = next((item for item in self.entries if str(item.get("id")) == entry_id), {"id": entry_id})
        return web.json_response(entry)

    async def entry_references_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        entry_id = str(request.match_info["entry_id"])
        references = self.entry_references.get(entry_id, [])
        return web.json_response({"references": references, "items": references})

    async def entries_batch_delete_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        body = await request.json()
        ids = [str(value) for value in body.get("entry_ids", [])]
        self.batch_deleted_entries.append(ids)
        return web.json_response({"ok": True, "entry_ids": ids})

    async def slides_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        if request.method == "DELETE":
            body = await request.json()
            ids = [str(value) for value in body.get("slide_ids", [])]
            self.batch_deleted_slides.append(ids)
            return web.json_response({"ok": True, "slide_ids": ids})
        return web.json_response({"slides": self.slides, "items": self.slides})

    async def slide_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        slide_id = str(request.match_info["slide_id"])
        if request.method == "PUT":
            body = await request.json()
            self.updated_slides.append({"slide_id": slide_id, "body": body})
            return web.json_response({"ok": True, "slide": {"id": slide_id, **body}})
        if request.method == "DELETE":
            self.deleted_slides.append(slide_id)
            return web.json_response({"ok": True, "slide_id": slide_id})
        slide = next((item for item in self.slides if str(item.get("id")) == slide_id), {"id": slide_id})
        return web.json_response(slide)

    async def slide_export_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        slide_id = str(request.match_info["slide_id"])
        self.exported_slides.append(slide_id)
        self.slide_export_statuses[slide_id] = {"status": "wait"}
        return web.json_response({"ok": True, "slide_id": slide_id, "status": "wait"})

    async def slide_export_status_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        slide_id = str(request.match_info["slide_id"])
        return web.json_response(self.slide_export_statuses.get(slide_id, {"status": "finished"}))

    async def slide_records_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        slide_id = str(request.match_info["slide_id"])
        return web.json_response({"records": self.slide_records.get(slide_id, [])})

    async def slide_video_info_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        slide_id = str(request.match_info["slide_id"])
        body = await request.json()
        self.updated_slide_video_infos.append({"slide_id": slide_id, "body": body})
        return web.json_response({"ok": True, "slide_id": slide_id})

    async def slide_record_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        record_id = str(request.match_info["record_id"])
        self.deleted_slide_records.append(record_id)
        return web.json_response({"ok": True, "recording_id": record_id})

    async def published_slides_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        return web.json_response({"slides": self.slides})

    async def activity_read_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("activity_read")
        if scripted is not None:
            return scripted
        activity_id = str(request.match_info["activity_id"])
        try:
            body = await request.json()
        except Exception:
            body = {}
        self.logged_activity_reads.append({"activity_id": activity_id, "exam": False, "body": body})
        return web.json_response({"ok": True, "activity_id": activity_id, "completeness": "full"})

    async def exam_activity_read_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("exam_activity_read")
        if scripted is not None:
            return scripted
        exam_id = str(request.match_info["exam_id"])
        try:
            body = await request.json()
        except Exception:
            body = {}
        self.logged_activity_reads.append({"activity_id": exam_id, "exam": True, "body": body})
        return web.json_response({"ok": True, "activity_id": exam_id, "completeness": "full"})

    async def activity_dependents_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        raw_ids = str(request.query.get("activity_ids", ""))
        activity_type = str(request.query.get("activity_type", ""))
        ids = [value for value in raw_ids.split(",") if value]
        has_dependents = any(self.activity_dependents.get(value, False) for value in ids)
        self.checked_activity_dependents.append({"activity_ids": ids, "activity_type": activity_type})
        return web.json_response({"has_dependents": has_dependents})

    async def activity_delete_check_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("activity_delete_check")
        if scripted is not None:
            return scripted
        activity_id = str(request.query.get("activity_id", ""))
        activity_type = str(request.query.get("activity_type", ""))
        key = "{}:{}".format(activity_id, activity_type)
        value = self.activity_delete_checks.get(
            key,
            self.activity_delete_checks.get(activity_id, {"activity_id": activity_id, "can_delete": True}),
        )
        self.checked_activity_delete_checks.append({"activity_id": activity_id, "activity_type": activity_type})
        return web.json_response(value)

    async def homework_duplicate_detect_task_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("homework_duplicate_detect_task")
        if scripted is not None:
            return scripted
        activity_id = str(request.match_info["activity_id"])
        rows = self.homework_duplicate_detect_tasks.get(activity_id, [])
        return web.json_response({"tasks": rows, "items": rows, "total": len(rows)})

    async def delete_activities_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("delete_activities")
        if scripted is not None:
            return scripted
        body = await request.json()
        self.deleted_activities.append({"body": body})
        for activity_id in body.get("activity_ids", []):
            self.activities.pop(str(activity_id), None)
        return web.json_response({"ok": True, "deleted": body.get("activity_ids", [])})

    async def grade_submission_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("grade_submission")
        if scripted is not None:
            return scripted
        activity_id = str(request.match_info["activity_id"])
        body = await request.json()
        self.graded_submissions.append({"activity_id": activity_id, "body": body})
        return web.json_response({"ok": True, "id": body.get("id", 1), "score": body.get("score")})

    async def recommend_submissions_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        body = await request.json()
        self.recommended_submissions.append({"body": body})
        return web.json_response({"ok": True, "submission_ids": body.get("submission_ids", [])})

    async def cancel_recommend_submission_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        submission_id = str(request.match_info["submission_id"])
        self.cancelled_recommended_submissions.append(submission_id)
        return web.json_response({"ok": True, "submission_id": submission_id})

    async def homework_announce_mark_status_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("homework_announce_mark_status")
        if scripted is not None:
            return scripted
        homework_id = str(request.match_info["homework_id"])
        body = await request.json()
        self.updated_homework_announce_statuses.append({"homework_id": homework_id, "body": body})
        return web.json_response({"ok": True, "homework_id": homework_id, "status": body})

    async def homework_rubric_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("homework_rubric")
        if scripted is not None:
            return scripted
        homework_id = str(request.match_info["homework_id"])
        body = await request.json()
        self.updated_homework_rubrics.append({"homework_id": homework_id, "body": body})
        return web.json_response({"ok": True, "homework_id": homework_id, "rubric": body})

    async def exam_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("exam")
        if scripted is not None:
            return scripted
        exam_id = str(request.match_info["exam_id"])
        if request.method == "PUT":
            body = await request.json()
            self.exams[exam_id] = {"id": exam_id, **body}
            self.updated_exams.append({"exam_id": exam_id, "body": body})
            return web.json_response({"ok": True, "exam": self.exams[exam_id]})
        return web.json_response(self.exams.get(exam_id, {"id": exam_id, "title": "Exam {}".format(exam_id)}))

    async def examinee_actions_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        exam_id = str(request.query.get("exam_id", ""))
        return web.json_response({"examinee_actions": self.examinee_actions.get(exam_id, [])})

    async def exam_make_up_record_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("exam_make_up_record")
        if scripted is not None:
            return scripted
        exam_id = str(request.match_info["exam_id"])
        return web.json_response(self.exam_make_up_records.get(exam_id, {"records": []}))

    async def exam_qualification_check_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("exam_qualification_check")
        if scripted is not None:
            return scripted
        exam_id = str(request.match_info["exam_id"])
        return web.json_response(self.exam_qualification_checks.get(exam_id, {"qualification": {"qualified": True}}))

    async def create_exam_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("create_exam")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        body = await request.json()
        exam = {"id": str(body.get("id") or len(self.exams) + 1), "course_id": course_id, **body}
        self.exams[str(exam["id"])] = exam
        self.created_exams.append({"course_id": course_id, "body": body})
        return web.json_response({"ok": True, "exam": exam}, status=201)

    async def exam_batch_delete_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        body = await request.json()
        self.deleted_exams.append({"body": body})
        ids = [str(value) for value in body.get("exam_ids", [])]
        for exam_id in ids:
            self.exams.pop(exam_id, None)
        return web.json_response({"ok": True, "deleted": ids})

    async def exam_score_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("exam_score")
        if scripted is not None:
            return scripted
        body = await request.json()
        score_id = str(request.match_info.get("score_id", ""))
        self.scored_exams.append({"score_id": score_id, "body": body, "method": request.method})
        return web.json_response({"ok": True, "score_id": score_id or "new", "score": body})

    async def exam_status_comment_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("exam_status_comment")
        if scripted is not None:
            return scripted
        exam_id = str(request.match_info["exam_id"])
        body = await request.json()
        self.commented_exam_statuses.append({"exam_id": exam_id, "body": body})
        return web.json_response({"ok": True, "exam_id": exam_id, "status_comment": body.get("status_comment")})

    async def classroom_exam_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("classroom_exam")
        if scripted is not None:
            return scripted
        classroom_id = str(request.match_info["classroom_id"])
        if request.method == "GET":
            return web.json_response(self.classrooms.get(classroom_id, {"id": classroom_id, "title": "Classroom"}))
        body = await request.json()
        self.updated_classroom_exams.append({"classroom_id": classroom_id, "body": body})
        return web.json_response({"id": classroom_id, **body})

    async def create_classroom_exam_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("create_classroom_exam")
        if scripted is not None:
            return scripted
        course_id = str(request.match_info["course_id"])
        body = await request.json()
        self.created_classroom_exams.append({"course_id": course_id, "body": body})
        return web.json_response({"id": "classroom-new", "course_id": course_id, **body})

    async def classroom_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("classroom")
        if scripted is not None:
            return scripted
        classroom_id = str(request.match_info["classroom_id"])
        if request.method == "DELETE":
            self.deleted_classrooms.append(classroom_id)
            return web.json_response({"ok": True, "id": classroom_id})
        return web.json_response(self.classrooms.get(classroom_id, {"id": classroom_id}))

    async def classroom_status_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("classroom_status")
        if scripted is not None:
            return scripted
        classroom_id = str(request.match_info["classroom_id"])
        body = await request.json()
        self.updated_classroom_statuses.append({"classroom_id": classroom_id, "body": body})
        return web.json_response({"ok": True, "id": classroom_id, **body})

    async def classroom_subject_status_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("classroom_subject_status")
        if scripted is not None:
            return scripted
        classroom_id = str(request.match_info["classroom_id"])
        subject_id = str(request.match_info["subject_id"])
        body = await request.json()
        self.updated_classroom_subject_statuses.append(
            {"classroom_id": classroom_id, "subject_id": subject_id, "body": body}
        )
        return web.json_response({"ok": True, "id": subject_id, **body})

    async def classroom_subjects_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("classroom_subjects")
        if scripted is not None:
            return scripted
        classroom_id = str(request.match_info["classroom_id"])
        body = await request.json()
        self.saved_classroom_subjects.append({"classroom_id": classroom_id, "body": body})
        return web.json_response({"ok": True, "classroom_id": classroom_id, "subjects": body.get("subjects", [])})

    async def classroom_subjects_batch_delete_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("classroom_subjects_batch_delete")
        if scripted is not None:
            return scripted
        classroom_id = str(request.match_info["classroom_id"])
        body = await request.json()
        self.deleted_classroom_subjects.append({"classroom_id": classroom_id, "body": body})
        return web.json_response({"ok": True, "classroom_id": classroom_id})

    async def classroom_subjects_stat_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("classroom_subjects_stat")
        if scripted is not None:
            return scripted
        classroom_id = str(request.match_info["classroom_id"])
        return web.json_response({"subjects": self.classroom_subject_stats.get(classroom_id, [])})

    async def classroom_score_list_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("classroom_score_list")
        if scripted is not None:
            return scripted
        classroom_id = str(request.match_info["classroom_id"])
        return web.json_response({"score_list": self.classroom_score_lists.get(classroom_id, [])})

    async def classroom_examinees_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("classroom_examinees")
        if scripted is not None:
            return scripted
        classroom_id = str(request.match_info["classroom_id"])
        return web.json_response({"examinees": self.classroom_examinees.get(classroom_id, [])})

    async def classroom_submission_count_status_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("classroom_submission_count_status")
        if scripted is not None:
            return scripted
        classroom_id = str(request.match_info["classroom_id"])
        return web.json_response(
            self.classroom_submission_count_statuses.get(
                classroom_id,
                {"all_submission_count": 0, "submission_has_marked_count": 0},
            )
        )

    async def classroom_score_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("classroom_score")
        if scripted is not None:
            return scripted
        body = await request.json()
        self.scored_classrooms.append({"body": body})
        return web.json_response({"ok": True, **body})

    async def org_settings_api(self, request):
        scripted = self._script_response("org_settings")
        if scripted is not None:
            return scripted
        return web.json_response({"id": request.match_info.get("org_id", "1"), "notification_url": self.base_url})

    async def users_me_api(self, request):
        scripted = self._script_response("users_me")
        if scripted is not None:
            return scripted
        return web.json_response({"id": 238730, "name": "Test User"})

    async def notifications_api(self, request):
        scripted = self._script_response("notifications")
        if scripted is not None:
            return scripted
        return web.json_response(
            {"notifications": [{"id": 1, "type": "qr_rollcall_started", "rollcall_id": 42}]}
        )

    async def pubsub_ws(self, request):
        ws = web.WebSocketResponse()
        await ws.prepare(request)
        await ws.send_str(json.dumps({"type": "qr_rollcall_started", "rollcall_id": 42}))
        await ws.close()
        return ws

    async def start(self) -> "FakeTronServer":
        if web is None:
            raise RuntimeError("aiohttp.web is required for FakeTronServer")
        app = web.Application()
        app.router.add_get("/login", self.login_page)
        app.router.add_post("/submit", self.submit_login)
        app.router.add_get("/", self.home)
        app.router.add_get("/home", self.home)
        app.router.add_get("/api/radar/rollcalls", self.rollcalls_api)
        app.router.add_get("/api/current-semester-info", self.current_semester_api)
        app.router.add_get("/api/my-courses", self.courses_api)
        app.router.add_post("/api/courses/sync_from_urp", self.courses_sync_from_urp_api)
        app.router.add_get("/api/courses/count", self.catalog_courses_count_api)
        app.router.add_get("/api/courses/public", self.public_courses_api)
        app.router.add_get("/api/courses/stats", self.courses_stats_api)
        app.router.add_get("/api/courses/settings", self.global_stat_api)
        app.router.add_get("/api/courses/homeworks-submission-status", self.global_stat_api)
        app.router.add_get("/api/courses/{course_id}", self.course_detail_api)
        app.router.add_put("/api/course/{course_id}", self.course_api)
        app.router.add_get("/api/course/enrollments/", self.course_enrollments_index_api)
        app.router.add_put("/api/course/enrollments", self.course_enrollments_action_api)
        app.router.add_delete("/api/course/enrollments", self.course_enrollments_action_api)
        app.router.add_put("/api/course/enrollments/{enrollment_id}", self.course_enrollments_action_api)
        app.router.add_delete("/api/course/enrollments/{enrollment_id}", self.course_enrollments_action_api)
        app.router.add_get("/api/course/{course_id}/enrollments", self.course_enrollments_api)
        app.router.add_get("/api/course/{course_id}/activity-reads-for-user", self.course_activity_reads_api)
        app.router.add_get("/api/course/{course_id}/students/activity-reads", self.course_students_activity_reads_api)
        app.router.add_get("/api/courses/{course_id}/members", self.course_members_api)
        app.router.add_get("/api/courses/{course_id}/certification", self.course_certification_api)
        app.router.add_put("/api/course/{course_id}/outline", self.course_outline_api)
        app.router.add_get("/api/enrollments/score-book", self.score_book_api)
        app.router.add_put("/api/enrollments/score-book", self.score_book_api)
        app.router.add_get("/api/courses/{course_id}/score-status", self.course_score_status_api)
        app.router.add_get("/api/courses/{course_id}/announce-score-settings", self.course_announce_score_settings_api)
        app.router.add_put("/api/courses/{course_id}/announce-score-settings", self.course_announce_score_settings_api)
        app.router.add_put("/api/courses/{course_id}/score-type-settings", self.course_score_type_settings_api)
        app.router.add_get("/api/courses/{course_id}/custom-score-items", self.course_custom_score_items_api)
        app.router.add_post("/api/courses/{course_id}/custom-score-item", self.create_custom_score_item_api)
        app.router.add_put("/api/course/custom-score-items/{item_id}", self.custom_score_item_api)
        app.router.add_delete("/api/course/custom-score-items/{item_id}", self.custom_score_item_api)
        app.router.add_put("/api/custom-score-items/{item_id}/students/{student_id}/score", self.custom_score_item_student_score_api)
        app.router.add_get("/api/courses/{course_id}/score-ranks", self.course_score_ranks_api)
        app.router.add_get("/api/courses/{course_id}/modules", self.course_modules_api)
        app.router.add_post("/api/course/{course_id}/module", self.create_course_module_api)
        app.router.add_put("/api/module/{module_id}", self.module_api)
        app.router.add_delete("/api/module/{module_id}", self.module_api)
        app.router.add_get("/api/modules/{module_id}/has-dependents", self.module_has_dependents_api)
        app.router.add_put("/api/modules/{module_id}/activity-sort", self.module_activity_sort_api)
        app.router.add_post("/api/syllabus", self.create_syllabus_api)
        app.router.add_put("/api/syllabus/resort", self.syllabus_resort_api)
        app.router.add_put("/api/syllabus/{syllabus_id}/activity-sort", self.syllabus_activity_sort_api)
        app.router.add_put("/api/syllabus/{syllabus_id}", self.syllabus_api)
        app.router.add_delete("/api/syllabus/{syllabus_id}", self.syllabus_api)
        app.router.add_get("/api/syllabuses/{syllabus_id}/has-dependents", self.syllabus_has_dependents_api)
        app.router.add_put("/api/activity-resort", self.activity_resort_api)
        app.router.add_get("/api/completion-criteria", self.completion_criteria_api)
        app.router.add_get("/api/courses/{course_id}/completion-criteria", self.course_completion_criteria_api)
        app.router.add_get("/api/courses/{course_id}/course-package", self.course_packages_api)
        app.router.add_post("/api/courses/{course_id}/course-package", self.course_packages_api)
        app.router.add_post("/api/courses/{course_id}/course-package/export", self.course_package_export_api)
        app.router.add_get("/api/courses/{course_id}/course-package/status", self.course_package_status_api)
        app.router.add_get("/api/course-packages/{course_package_id}/course", self.course_package_course_api)
        app.router.add_post("/api/course-packages/{course_package_id}/save", self.course_package_save_api)
        app.router.add_post("/api/course-packages/{course_package_id}/import", self.course_package_import_api)
        app.router.add_get("/api/course-packages/{course_package_id}", self.course_package_api)
        app.router.add_get("/api/outline-setting", self.outline_setting_api)
        app.router.add_put("/api/outline-setting/toggle", self.outline_setting_api)
        app.router.add_post("/api/outline-setting/{setting_id}", self.outline_setting_api)
        app.router.add_put("/api/outline-setting/{setting_id}", self.outline_setting_api)
        app.router.add_put("/api/outline-setting/{setting_id}/sort", self.outline_setting_api)
        app.router.add_delete("/api/outline-setting/{setting_id}/option/{option_key}", self.outline_setting_api)
        app.router.add_put("/api/outline-setting/{setting_id}/required-options", self.outline_setting_api)
        app.router.add_post("/api/outline/notify", self.outline_notify_api)
        app.router.add_put("/api/course-packages/{course_package_id}", self.course_package_api)
        app.router.add_delete("/api/course-packages/{course_package_id}", self.course_package_api)
        app.router.add_get("/api/courses/research-meeting/", self.course_research_meetings_api)
        app.router.add_get("/api/courseware-quiz/activity/{activity_id}/quizzes", self.courseware_quizzes_api)
        app.router.add_post(
            "/api/courseware-quiz/activity/{activity_id}/subjects",
            self.courseware_quiz_activity_subjects_api,
        )
        app.router.add_get(
            "/api/courseware-quiz/quiz/{courseware_quiz_id}/subjects",
            self.courseware_quiz_subjects_api,
        )
        app.router.add_put(
            "/api/courseware-quiz/quiz/{courseware_quiz_id}/subjects",
            self.courseware_quiz_subjects_api,
        )
        app.router.add_get("/api/courseware-quiz/settings", self.courseware_quiz_settings_api)
        app.router.add_post("/api/courseware-quiz/generate-subjects", self.courseware_quiz_generate_subjects_api)
        app.router.add_post(
            "/api/courseware-quiz/generate-subjects-by-text",
            self.courseware_quiz_generate_subjects_by_text_api,
        )
        app.router.add_post("/api/courseware-quiz/format-question", self.courseware_quiz_format_question_api)
        app.router.add_post("/api/subject-libs/batch/copy", self.subject_libs_batch_copy_api)
        app.router.add_get("/api/subject-libs", self.subject_libs_api)
        app.router.add_post("/api/subject-libs", self.subject_libs_api)
        app.router.add_get("/api/course/{course_id}/subject-libs", self.course_subject_libs_api)
        app.router.add_post("/api/course/{course_id}/subject-libs", self.course_subject_libs_api)
        app.router.add_get("/api/subject-libs/folders", self.subject_lib_folders_api)
        app.router.add_post("/api/subject-libs/libs-move-to", self.subject_libs_move_api)
        app.router.add_post("/api/subject-libs/copy-to-user", self.subject_libs_copy_to_user_api)
        app.router.add_post("/api/subject-libs/subjects-movement", self.subject_lib_subjects_movement_api)
        app.router.add_post("/api/subject-libs/subjects-replication", self.subject_lib_subjects_replication_api)
        app.router.add_get("/api/subject-libs/{subject_lib_id}/statistic", self.subject_lib_statistic_api)
        app.router.add_get("/api/subject-libs/{subject_lib_id}/knowledge-nodes", self.subject_lib_knowledge_nodes_api)
        app.router.add_delete("/api/subject-libs/{subject_lib_id}/subjects", self.subject_lib_subjects_api)
        app.router.add_post("/api/subject-libs/{subject_lib_id}/copy", self.subject_lib_copy_api)
        app.router.add_get("/api/subject-libs/{subject_lib_id}", self.subject_lib_api)
        app.router.add_put("/api/subject-libs/{subject_lib_id}", self.subject_lib_api)
        app.router.add_delete("/api/subject-libs/{subject_lib_id}", self.subject_lib_api)
        app.router.add_get("/api/course/{course_id}/template-setting", self.course_template_setting_api)
        app.router.add_get("/api/course/{course_id}/activity-publish-setting", self.course_activity_publish_setting_api)
        app.router.add_get("/api/courses/{course_id}/activities", self.course_activities_api)
        app.router.add_post("/api/courses/{course_id}/activities", self.course_activities_api)
        app.router.add_post("/api/courses/{course_id}/publish-activities", self.course_publish_activities_api)
        app.router.add_get("/api/courses/{course_id}/topic-categories", self.course_topic_categories_api)
        app.router.add_get("/api/forum/categories/{category_id}", self.forum_category_api)
        app.router.add_get("/api/courses/{course_id}/bulletins", self.course_bulletins_api)
        app.router.add_post("/api/course/{course_id}/bulletin", self.create_course_bulletin_api)
        app.router.add_put("/api/course/bulletins/{bulletin_id}", self.course_bulletin_api)
        app.router.add_delete("/api/course/bulletins/{bulletin_id}", self.course_bulletin_api)
        app.router.add_post("/api/bulletins/{bulletin_id}/read", self.bulletin_read_api)
        app.router.add_post("/api/data-import/course-groups", self.data_import_course_groups_api)
        app.router.add_post("/api/data-import/enrollments/{course_id}", self.data_import_enrollments_api)
        app.router.add_post("/api/data-import/scores/{course_id}", self.data_import_scores_api)
        app.router.add_post("/api/data-import/item_scores/{course_id}", self.data_import_item_scores_api)
        app.router.add_post("/api/data-import/seat-number/{course_id}", self.data_import_seat_number_api)
        app.router.add_post("/api/data-import/course/{course_id}/rollcall", self.data_import_rollcall_api)
        app.router.add_get("/api/courses/{course_id}/group-sets", self.course_group_sets_api)
        app.router.add_post("/api/courses/{course_id}/group-sets", self.course_group_sets_api)
        app.router.add_post("/api/courses/{course_id}/group-sets/{group_set_id}/copy", self.course_group_set_copy_api)
        app.router.add_get("/api/group-sets/{group_set_id}", self.group_set_api)
        app.router.add_put("/api/group-sets/{group_set_id}", self.group_set_api)
        app.router.add_delete("/api/group-sets/{group_set_id}", self.group_set_api)
        app.router.add_get("/api/group-sets/{group_set_id}/groups", self.group_set_groups_api)
        app.router.add_post("/api/group-sets/{group_set_id}/groups", self.group_set_groups_api)
        app.router.add_get("/api/group-sets/{group_set_id}/activities", self.group_set_activities_api)
        app.router.add_get("/api/group-sets/{group_set_id}/group", self.current_user_group_api)
        app.router.add_post("/api/group-sets/{group_set_id}/random-grouping", self.random_grouping_api)
        app.router.add_put("/api/group-sets/{group_set_id}/sort", self.sort_groups_api)
        app.router.add_put("/api/groups/{group_id}/members", self.group_members_api)
        app.router.add_put("/api/groups/{group_id}/members/{member_id}", self.group_member_api)
        app.router.add_delete("/api/groups/{group_id}/members/{member_id}", self.group_member_api)
        app.router.add_put("/api/groups/{group_id}/info", self.group_info_api)
        app.router.add_put("/api/groups/{group_id}", self.group_api)
        app.router.add_delete("/api/groups/{group_id}", self.group_api)
        app.router.add_get("/api/courses/{course_id}/groups/submission-status", self.course_groups_submission_status_api)
        app.router.add_get("/api/courses/{course_id}/teaching-team/groups", self.course_teaching_team_groups_api)
        app.router.add_get("/api/edu-scores/get-course-score-rate/{course_id}", self.course_edu_score_rate_api)
        app.router.add_get("/api/edu-scores/get-submit-time/{course_id}", self.course_edu_score_submit_time_api)
        app.router.add_get("/api/edu-scores/get-submit-logs/{course_id}", self.course_edu_score_submit_logs_api)
        app.router.add_post("/api/edu-scores/submit-course-scores", self.submit_edu_scores_api)
        app.router.add_put("/api/score-publish-item-maps", self.score_publish_item_maps_api)
        app.router.add_get("/api/rubrics", self.rubrics_api)
        app.router.add_post("/api/rubrics", self.rubrics_api)
        app.router.add_delete("/api/rubrics", self.rubrics_api)
        app.router.add_put("/api/rubric/{rubric_id}", self.rubric_api)
        app.router.add_delete("/api/rubric/{rubric_id}", self.rubric_api)
        app.router.add_get("/api/rubrics-with-resource", self.rubrics_with_resource_api)
        app.router.add_get("/api/rubrics/template", self.rubric_template_api)
        app.router.add_put("/api/enrollments/score", self.enrollment_scores_api)
        app.router.add_put("/api/enrollments/total-score", self.enrollment_total_scores_api)
        app.router.add_get("/api/course/{course_id}/students", self.course_students_api)
        app.router.add_get("/api/course/{course_id}/students_rollcalls", self.course_students_rollcalls_api)
        app.router.add_get("/api/course/{course_id}/pagination_students_rollcalls", self.course_pagination_students_rollcalls_api)
        app.router.add_get("/api/course/{course_id}/rollcalls", self.course_rollcalls_api)
        app.router.add_post("/api/course/{course_id}/rollcall", self.create_course_rollcall_api)
        app.router.add_post("/api/module/{course_id}/rollcall", self.create_module_rollcall_api)
        app.router.add_get("/api/course/{course_id}/rollcall/{rollcall_id}", self.course_rollcall_detail_api)
        app.router.add_get("/api/course/{course_id}/student-onprogress-rollcalls", self.ongoing_student_rollcalls_api)
        app.router.add_get("/api/course/{course_id}/leave-record", self.leave_record_api)
        app.router.add_get("/api/course/{course_id}/student/{student_id}/rollcalls", self.student_rollcall_history_api)
        app.router.add_put("/api/course/{course_id}/student/{student_id}/rollcalls", self.student_rollcall_history_api)
        app.router.add_get("/api/course/{course_id}/rollcall/setting", self.course_rollcall_setting_api)
        app.router.add_put("/api/course/{course_id}/rollcall/setting", self.course_rollcall_setting_api)
        app.router.add_get("/api/course/{course_id}/rollcall-score", self.course_rollcall_score_api)
        app.router.add_get("/api/course/{course_id}/rollcall/scores", self.course_rollcall_scores_api)
        app.router.add_get("/api/courses/rollcall_status/{course_id}/result", self.course_rollcall_status_result_api)
        app.router.add_get("/api/timetable_rollcalls", self.timetable_rollcalls_api)
        app.router.add_post("/api/course/rollcalls/count/grade", self.grade_rollcalls_api)
        app.router.add_put("/api/enrollment/{enrollment_id}/rollcall-score", self.enrollment_rollcall_score_api)
        app.router.add_get("/api/courses/{course_id}/homework-activities", self.course_homework_activities_api)
        app.router.add_get("/api/course/{course_id}/homework-scores", self.course_homework_scores_api)
        app.router.add_get("/api/courses/{course_id}/homeworks/submission-status", self.course_homeworks_submission_status_api)
        app.router.add_get("/api/course/{course_id}/homework-submission-number", self.course_homework_submission_number_api)
        app.router.add_get("/api/course/{course_id}/homework-student-status", self.course_homework_student_status_api)
        app.router.add_get("/api/courses/{course_id}/exam-list", self.course_exam_list_api)
        app.router.add_get("/api/courses/{course_id}/exam-scores", self.course_exam_scores_api)
        app.router.add_get("/api/courses/{course_id}/exams/submission-status", self.course_exam_submission_status_api)
        app.router.add_get("/api/stat/courses/{course_id}/for-instructor", self.course_stat_for_instructor_api)
        app.router.add_get("/api/stat/courses/{course_id}/overview", self.course_stat_overview_api)
        app.router.add_get("/api/courses/tpdoe/stat-students", self.course_tpdoe_stat_students_api)
        app.router.add_post("/api/stat/courses/{course_id}/students", self.course_stat_students_api)
        app.router.add_get(
            "/api/stat/courses/{course_id}/students/export/{file_type}",
            self.course_stat_students_export_api,
        )
        app.router.add_get("/api/stat/courses/rollcall/export", self.stat_course_report_export_api)
        app.router.add_get("/api/stat/courses/rollcall/export-by-class", self.stat_course_report_export_api)
        app.router.add_get("/api/stat/courses/homework-correct/export", self.stat_course_report_export_api)
        app.router.add_get("/api/stat/courses/class-hours/export", self.stat_course_report_export_api)
        app.router.add_post("/api/stat/courses/export/to/{file_type}", self.stat_courses_export_to_api)
        app.router.add_post("/api/stat/attendance/export/to/{file_type}", self.stat_attendance_export_to_api)
        app.router.add_get("/api/stat/activities-for-courses", self.stat_activities_for_courses_api)
        app.router.add_get("/api/stat/bulletins/", self.global_stat_api)
        app.router.add_get("/api/stat/h5_courseware/", self.global_stat_api)
        app.router.add_get("/api/stat/lesson/rollcall", self.global_stat_api)
        app.router.add_get("/api/stat/materials/", self.global_stat_api)
        app.router.add_get("/api/stat/orgs/", self.global_stat_api)
        app.router.add_get("/api/stat/scorm/", self.global_stat_api)
        app.router.add_get("/api/stat/semester/", self.global_stat_api)
        app.router.add_get("/api/stat/student/rollcall", self.global_stat_api)
        app.router.add_get("/api/stat/students/", self.global_stat_api)
        app.router.add_get("/api/stat/teacher/rollcall", self.global_stat_api)
        app.router.add_get("/api/stat/user-info", self.global_stat_api)
        app.router.add_get("/api/stat/video/", self.global_stat_api)
        app.router.add_get("/api/stat/videos/", self.global_stat_api)
        app.router.add_get("/api/stat/vtrs/enable-status", self.global_stat_api)
        app.router.add_get("/api/stat/vtrses/count-info", self.global_stat_api)
        app.router.add_get("/api/stat/weblinks/", self.global_stat_api)
        app.router.add_get("/api/statistic", self.global_stat_api)
        app.router.add_get("/api/exams/submissions/", self.global_stat_api)
        app.router.add_get("/api/scores/zip-status", self.global_stat_api)
        app.router.add_get("/api/zip-status/COURSE_STAT_EXPORT:", self.global_stat_api)
        app.router.add_get("/api/zip-status/homework-zip/", self.global_stat_api)
        app.router.add_get("/api/user/course-certification/scores", self.global_stat_api)
        app.router.add_get(
            "/api/stat/departments/user-attendance/export/{department_id}",
            self.department_user_attendance_export_api,
        )
        app.router.add_get("/api/stat/courses/{course_id}/exam", self.course_exam_stat_api)
        app.router.add_get("/api/course/{course_id}/forum-activities", self.course_forum_activities_api)
        app.router.add_get("/api/course/{course_id}/forum-scores", self.course_forum_scores_api)
        app.router.add_get("/api/courses/{course_id}/classroom-list", self.course_classroom_list_api)
        app.router.add_get("/api/course/{course_id}/classroom-student-status", self.course_classroom_student_status_api)
        app.router.add_get("/api/course/{course_id}/classroom-exam-scores", self.course_classroom_exam_scores_api)
        app.router.add_get("/api/course/{course_id}/questionnaires", self.course_questionnaires_api)
        app.router.add_get("/api/course/{course_id}/questionnaire-scores", self.course_questionnaire_scores_api)
        app.router.add_get(
            "/api/course-estimates/{course_estimate_id}/users/{user_id}",
            self.course_estimate_user_api,
        )
        app.router.add_get("/api/course-estimates/{course_id}", self.course_estimates_api)
        app.router.add_put("/api/course-estimates/{course_estimate_id}", self.course_estimate_api)
        app.router.add_post("/api/course-estimate", self.course_estimates_api)
        app.router.add_put("/api/course-estimate/{course_estimate_id}/delete", self.course_estimate_delete_api)
        app.router.add_get("/api/course-estimates-replies/{course_id}", self.course_estimates_replies_api)
        app.router.add_get("/api/course-estimate-replies/{course_estimate_id}", self.course_estimate_replies_api)
        app.router.add_post("/api/course-estimate-reply", self.course_estimate_reply_api)
        app.router.add_put(
            "/api/course-estimate-reply/{reply_id}/delete",
            self.course_estimate_reply_delete_api,
        )
        app.router.add_get("/api/questionnaires/{questionnaire_id}/all-submissions", self.questionnaire_submissions_api)
        app.router.add_get("/api/questionnaires/{questionnaire_id}/logs", self.questionnaire_logs_api)
        app.router.add_get("/api/questionnaire/{questionnaire_id}/export/excel", self.questionnaire_export_api)
        app.router.add_post(
            "/api/questionnaires/{questionnaire_id}/imported-campus-subjects",
            self.questionnaire_imported_campus_subjects_api,
        )
        app.router.add_get("/api/questionnaires/{questionnaire_id}", self.questionnaire_detail_api)
        app.router.add_get("/api/questionnaire/{questionnaire_id}/subjects", self.questionnaire_subjects_api)
        app.router.add_post("/api/questionnaire/{questionnaire_id}/subject", self.questionnaire_subjects_api)
        app.router.add_put(
            "/api/questionnaire/{questionnaire_id}/subject/{subject_id}",
            self.questionnaire_subject_api,
        )
        app.router.add_delete(
            "/api/questionnaire/{questionnaire_id}/subject/{subject_id}",
            self.questionnaire_subject_api,
        )
        app.router.add_post(
            "/api/questionnaire/{questionnaire_id}/imported-subjects",
            self.questionnaire_imported_subjects_api,
        )
        app.router.add_get("/api/questionnaire/{questionnaire_id}/preview", self.questionnaire_preview_api)
        app.router.add_get("/api/courses/{course_id}/lesson-timetable", self.course_lesson_timetable_api)
        app.router.add_get("/api/courses/{course_id}/teaching-team/orgs", self.course_teaching_team_orgs_api)
        app.router.add_put("/api/rollcall/{rollcall_id}/answer_number_rollcall", self.answer_number)
        app.router.add_get("/api/rollcall/{rollcall_id}/lite", self.radar_lite)
        app.router.add_put("/api/rollcall/{rollcall_id}/answer", self.answer_radar)
        app.router.add_put("/api/rollcall/{rollcall_id}/answer_qr_rollcall", self.answer_qr)
        app.router.add_get("/api/rollcall/{rollcall_id}/student_rollcalls", self.student_rollcalls_api)
        app.router.add_get("/api/rollcall/{rollcall_id}/pagination_students_rollcalls", self.rollcall_pagination_students_rollcalls_api)
        app.router.add_post("/api/rollcall/{rollcall_id}/start-rollcall", self.start_rollcall_api)
        app.router.add_put("/api/rollcall/{rollcall_id}/activate", self.activate_rollcall_api)
        app.router.add_put("/api/rollcall/{rollcall_id}/position", self.update_radar_rollcall_position_api)
        app.router.add_put("/api/rollcall/{rollcall_id}/stop_time_table_rollcall", self.stop_rollcall_api)
        app.router.add_put("/api/rollcall/{rollcall_id}/stop_qr_rollcall", self.stop_qr_rollcall_api)
        app.router.add_put("/api/rollcall/{rollcall_id}/stop_number_rollcall", self.stop_number_rollcall_api)
        app.router.add_put("/api/rollcall/{rollcall_id}/stop_radar", self.stop_radar_rollcall_api)
        app.router.add_post("/api/rollcall/merged-rollcall", self.create_merged_rollcall_api)
        app.router.add_put("/api/rollcall/merged-rollcall/student-rollcalls", self.update_merged_rollcall_students_api)
        app.router.add_get("/api/rollcall/{rollcall_id}", self.rollcall_detail_api)
        app.router.add_put("/api/rollcall/{rollcall_id}", self.update_rollcall_api)
        app.router.add_delete("/api/rollcall/{rollcall_id}", self.delete_rollcall_api)
        app.router.add_get("/api/rollcall/{rollcall_id}/answers", self.rollcall_answers_api)
        app.router.add_get("/api/rollcall/{rollcall_id}/student_rollcall_count", self.rollcall_student_count_api)
        app.router.add_get("/api/qrcode", self.qrcode_api)
        app.router.add_delete("/api/activities", self.delete_activities_api)
        app.router.add_get("/api/activities/have-dependents", self.activity_dependents_api)
        app.router.add_get("/api/activities/delete-check", self.activity_delete_check_api)
        app.router.add_get("/api/homework/{activity_id}/duplicate-detect/task", self.homework_duplicate_detect_task_api)
        app.router.add_get("/api/activities/{activity_id}", self.activity_api)
        app.router.add_put("/api/activities/{activity_id}", self.activity_api)
        app.router.add_delete("/api/activities/{activity_id}", self.activity_api)
        app.router.add_get("/api/activity/{activity_id}/submission-number", self.activity_submission_number_api)
        app.router.add_get("/api/activities/{activity_id}/comments", self.activity_comments_api)
        app.router.add_post("/api/activities/{activity_id}/comments", self.activity_comments_api)
        app.router.add_put("/api/activities/{activity_id}/comments/{comment_id}", self.activity_comment_api)
        app.router.add_delete("/api/activities/{activity_id}/comments/{comment_id}", self.activity_comment_api)
        app.router.add_post("/api/activities/{activity_id}/comments/{comment_id}/reply", self.activity_comment_reply_api)
        app.router.add_put("/api/activities/{activity_id}/reply/{reply_id}", self.activity_comment_reply_record_api)
        app.router.add_delete("/api/activities/{activity_id}/reply/{reply_id}", self.activity_comment_reply_record_api)
        app.router.add_post("/api/activities/{activity_id}/comments/operate", self.activity_comments_operate_api)
        app.router.add_get("/api/activities/{activity_id}/comment/count", self.activity_comment_count_api)
        app.router.add_get("/api/activities/{activity_id}/forum-scores", self.activity_forum_scores_api)
        app.router.add_put("/api/activities/{activity_id}/forum-scores", self.activity_forum_scores_api)
        app.router.add_put("/api/activities/{activity_id}/forum-status", self.activity_forum_status_api)
        app.router.add_get("/api/activities/{activity_id}/topics", self.activity_forum_topics_api)
        app.router.add_post("/api/topics/{topic_id}/export/excel", self.topic_export_api)
        app.router.add_post("/api/categories/{category_id}/export/excel", self.category_topics_export_api)
        app.router.add_get("/api/activities/{activity_id}/intra-score-rules", self.activity_intra_score_rules_api)
        app.router.add_get("/api/activities/{activity_id}/upload_references", self.activity_upload_references_api)
        app.router.add_get("/api/activities/{activity_id}/uploads-license", self.activity_uploads_license_api)
        app.router.add_get("/api/activities/{activity_id}/resources", self.activity_resources_api)
        app.router.add_put("/api/activities/{activity_id}/resources/{resource_id}", self.activity_resource_api)
        app.router.add_delete("/api/activities/{activity_id}/resources/{resource_id}", self.activity_resource_api)
        app.router.add_post("/api/activities/resources/{resource_id}/save", self.activity_resource_save_api)
        app.router.add_post("/api/uploads", self.upload_precreate_api)
        app.router.add_get("/api/uptoken", self.upload_token_api)
        app.router.add_put("/internal-api/uploads/{upload_id}", self.upload_sink_api)
        app.router.add_post("/internal-api/upload/callback/{upload_id}", self.upload_callback_api)
        app.router.add_get("/api/uploads/reference/{reference_id}/blob", self.upload_reference_blob_api)
        app.router.add_get("/api/uploads/audio/{upload_id}", self.upload_audio_api)
        app.router.add_get("/api/uploads/{upload_id}/blob", self.upload_blob_api)
        app.router.add_get("/api/uploads/{upload_id}/thumbnail", self.upload_thumbnail_api)
        app.router.add_get("/api/uploads/{upload_id}/modified-image", self.upload_modified_image_api)
        app.router.add_get("/api/uploads/{upload_id}/swf", self.upload_swf_api)
        app.router.add_get("/api/uploads/{upload_id}", self.upload_preview_api)
        app.router.add_get("/api/wedrive/file/{file_id}", self.wedrive_file_api)
        app.router.add_get("/api/third-part/uploads/{upload_id}/{kind}", self.third_part_upload_api)
        app.router.add_get("/api/resource-groups", self.resource_groups_api)
        app.router.add_post("/api/resource-groups", self.resource_groups_api)
        app.router.add_post("/api/resource-group", self.create_resource_group_api)
        app.router.add_put("/api/resource-group/{resource_group_id}", self.resource_group_api)
        app.router.add_delete("/api/resource-group/{resource_group_id}", self.resource_group_api)
        app.router.add_get("/api/resource-groups/folders", self.resource_group_folders_api)
        app.router.add_get("/api/resource-groups/resources", self.resource_group_resources_api)
        app.router.add_get("/api/resource-groups/{resource_group_id}", self.resource_group_api)
        app.router.add_get("/api/resource-groups/{resource_group_id}/members", self.resource_group_members_api)
        app.router.add_delete("/api/resource-groups/{resource_group_id}/member", self.resource_group_members_api)
        app.router.add_get("/api/resource-groups/{resource_group_id}/folders", self.resource_group_folders_api)
        app.router.add_delete(
            "/api/resource-groups/{resource_group_id}/folders/{folder_id}",
            self.resource_group_folder_api,
        )
        app.router.add_get("/api/resource-groups/{resource_group_id}/resources", self.resource_group_resources_api)
        app.router.add_get("/api/resource-groups/{resource_group_id}/rubrics", self.resource_group_rubrics_api)
        app.router.add_get(
            "/api/resource-groups/{resource_group_id}/subject-libs",
            self.resource_group_subject_libs_api,
        )
        app.router.add_put(
            "/api/resource-groups/{resource_group_id}/resource/{resource_id}",
            self.resource_group_resource_api,
        )
        app.router.add_post("/api/resource-groups/{resource_group_id}/leave", self.resource_group_leave_api)
        app.router.add_get("/api/user/resources", self.user_resources_api)
        app.router.add_get("/api/user/resources/{resource_id}/folder-info", self.user_resource_folder_info_api)
        app.router.add_get("/api/shared-resources/from-me", self.shared_resources_from_me_api)
        app.router.add_get("/api/shared-resources-to-me", self.shared_resources_to_me_api)
        app.router.add_get("/api/shared-resources-no-repeated", self.shared_resources_api)
        app.router.add_get("/api/shared-resources/management", self.shared_resources_api)
        app.router.add_get("/api/shared-resources/stat/video-resources", self.shared_resources_api)
        app.router.add_get(
            "/api/shared-resources/stat/video-resources/export",
            self.shared_resource_video_stat_export_api,
        )
        app.router.add_post("/api/shared-resources/batch-save", self.shared_resource_batch_save_api)
        app.router.add_get(
            "/api/shared-resources/user/{user_id}/collections",
            self.shared_resource_collections_api,
        )
        app.router.add_get("/api/shared-resource/classifications", self.shared_resource_classifications_api)
        app.router.add_get("/api/shared-resource/tag", self.shared_resource_tags_api)
        app.router.add_get(
            "/api/shared-resources/personal-recommendations",
            self.shared_resource_recommendations_api,
        )
        app.router.add_get("/api/shared-resources/my-track-user", self.shared_resource_track_users_api)
        app.router.add_get("/api/shared-resources/my-follower", self.shared_resource_followers_api)
        app.router.add_delete("/api/shared-resources/comments/{comment_id}", self.shared_resource_comment_api)
        app.router.add_get("/api/shared-resources/{resource_id}/comments", self.shared_resource_comments_api)
        app.router.add_post("/api/shared-resources/{resource_id}/comments", self.shared_resource_comments_api)
        app.router.add_get("/api/shared-resources/{resource_id}/blob", self.shared_resource_blob_api)
        app.router.add_get("/api/shared-resources-to/{resource_id}/blob", self.shared_resource_blob_api)
        app.router.add_get(
            "/api/shared-resources/{resource_id}/subject-lib/export/excel",
            self.shared_resource_subject_lib_export_api,
        )
        app.router.add_post("/api/shared-resources/{resource_id}/save", self.shared_resource_save_api)
        app.router.add_post(
            "/api/shared-resources/{resource_id}/user/{user_id}/collection",
            self.shared_resource_collection_api,
        )
        app.router.add_delete(
            "/api/shared-resources/{resource_id}/user/{user_id}/collection",
            self.shared_resource_collection_api,
        )
        app.router.add_get("/api/shared-resources", self.shared_resources_api)
        app.router.add_post("/api/shared-resources", self.shared_resources_api)
        app.router.add_delete("/api/shared-resources-to/{resource_id}", self.shared_resource_api)
        app.router.add_delete("/api/shared-resources/{resource_id}", self.shared_resource_api)
        app.router.add_get("/api/cc-license/groups", self.cc_license_groups_api)
        app.router.add_get("/api/cc-license/map", self.cc_license_map_api)
        app.router.add_get("/api/entries", self.entries_api)
        app.router.add_post("/api/entries", self.entries_api)
        app.router.add_delete("/api/entries/batch-delete", self.entries_batch_delete_api)
        app.router.add_get("/api/entries/{entry_id}/references", self.entry_references_api)
        app.router.add_get("/api/entries/{entry_id}", self.entry_api)
        app.router.add_put("/api/entries/{entry_id}", self.entry_api)
        app.router.add_delete("/api/entries/{entry_id}", self.entry_api)
        app.router.add_get("/api/slides/published", self.published_slides_api)
        app.router.add_get("/api/slides", self.slides_api)
        app.router.add_delete("/api/slides", self.slides_api)
        app.router.add_post("/api/slides/{slide_id}/export", self.slide_export_api)
        app.router.add_get("/api/slides/{slide_id}/export/status", self.slide_export_status_api)
        app.router.add_get("/api/slides/{slide_id}/records", self.slide_records_api)
        app.router.add_put("/api/slides/{slide_id}/video-info", self.slide_video_info_api)
        app.router.add_delete("/api/slides/records/{record_id}", self.slide_record_api)
        app.router.add_get("/api/slides/{slide_id}", self.slide_api)
        app.router.add_put("/api/slides/{slide_id}", self.slide_api)
        app.router.add_delete("/api/slides/{slide_id}", self.slide_api)
        app.router.add_post("/api/course/activities-read/{activity_id}", self.activity_read_api)
        app.router.add_post("/api/course/activities-read/exam/{exam_id}", self.exam_activity_read_api)
        app.router.add_put("/api/course/activities/{activity_id}/submission/score", self.grade_submission_api)
        app.router.add_put("/api/submission/recommend", self.recommend_submissions_api)
        app.router.add_post("/api/submission/{submission_id}/cancel-recommend", self.cancel_recommend_submission_api)
        app.router.add_put("/api/homework/{homework_id}/announce-mark-status", self.homework_announce_mark_status_api)
        app.router.add_patch("/api/homeworks/{homework_id}/rubric", self.homework_rubric_api)
        app.router.add_post("/api/courses/{course_id}/exams", self.create_exam_api)
        app.router.add_get("/api/examinee-actions", self.examinee_actions_api)
        app.router.add_get("/api/exam/{exam_id}/make-up-record", self.exam_make_up_record_api)
        app.router.add_get("/api/exam/{exam_id}/check-exam-qualification", self.exam_qualification_check_api)
        app.router.add_get("/api/exams/{exam_id}", self.exam_api)
        app.router.add_put("/api/exams/{exam_id}", self.exam_api)
        app.router.add_delete("/api/exams/batch_delete", self.exam_batch_delete_api)
        app.router.add_post("/api/exam-scores", self.exam_score_api)
        app.router.add_put("/api/exam-scores/{exam_id}/status-comment", self.exam_status_comment_api)
        app.router.add_put("/api/exam-scores/{score_id}", self.exam_score_api)
        app.router.add_post("/api/courses/{course_id}/classroom-exams", self.create_classroom_exam_api)
        app.router.add_get("/api/classroom-exams/{classroom_id}", self.classroom_exam_api)
        app.router.add_put("/api/classroom-exams/{classroom_id}", self.classroom_exam_api)
        app.router.add_post("/api/classroom-exams/{classroom_id}/subjects", self.classroom_subjects_api)
        app.router.add_delete(
            "/api/classroom-exams/{classroom_id}/subjects/batch_delete",
            self.classroom_subjects_batch_delete_api,
        )
        app.router.add_get("/api/classroom-exams/{classroom_id}/score-list", self.classroom_score_list_api)
        app.router.add_get("/api/classroom-exams/{classroom_id}/examinees", self.classroom_examinees_api)
        app.router.add_get(
            "/api/classroom-exams/{classroom_id}/submission-count-status",
            self.classroom_submission_count_status_api,
        )
        app.router.add_get("/api/classrooms/{classroom_id}/subjects-stat", self.classroom_subjects_stat_api)
        app.router.add_delete("/api/classrooms/{classroom_id}", self.classroom_api)
        app.router.add_put("/api/classrooms/{classroom_id}/status", self.classroom_status_api)
        app.router.add_put(
            "/api/classrooms/{classroom_id}/subjects/{subject_id}/status",
            self.classroom_subject_status_api,
        )
        app.router.add_post("/api/classroom/", self.classroom_score_api)
        app.router.add_get("/api/air-credit/user/token", self.air_credit_user_token_api)
        app.router.add_get("/api/air-credit/users", self.air_credit_users_api)
        app.router.add_get("/api/air-credit/users/", self.air_credit_users_api)
        app.router.add_get("/api/air-credit/user/courses/ai-ability", self.air_credit_user_courses_ai_ability_api)
        app.router.add_get("/api/air-credit/org/credit-state-info", self.air_credit_org_credit_state_info_api)
        app.router.add_get("/api/air-credit/audits", self.air_credit_audits_api)
        app.router.add_get(
            "/api/air-credit/instructors/current-semester-courses",
            self.air_credit_instructor_current_semester_courses_api,
        )
        app.router.add_get("/api/air-credit/courses/", self.air_credit_courses_api)
        app.router.add_get("/api/air-credit/resources/", self.air_credit_resources_api)
        app.router.add_get("/api/air-credit/credit-states-stats", self.air_credit_states_stats_api)
        app.router.add_get("/api/air-credit/credit-states-summary", self.air_credit_states_summary_api)
        app.router.add_post(
            "/api/air-credit/{target}/credit-states-stats/export",
            self.air_credit_states_stats_export_api,
        )
        app.router.add_post("/api/air-credit/credits", self.air_credit_assignments_api)
        app.router.add_put("/api/air-credit/credits", self.air_credit_assignments_api)
        app.router.add_put("/api/air-credit/credits/status", self.air_credit_assignment_status_api)
        app.router.add_put("/api/air-credit/credits/clear-remaining-credits", self.air_credit_clear_remaining_api)
        app.router.add_put("/api/air-credit/course/usage-limit", self.air_credit_course_usage_limit_api)
        app.router.add_get("/api/air-credit/{target}/credit-states", self.air_credit_states_api)
        app.router.add_get("/api/air-credit/course", self.air_credit_course_api)
        app.router.add_get("/api/air-credit/user", self.air_credit_user_api)
        app.router.add_get("/api/calendar-meeting", self.calendar_meetings_api)
        app.router.add_post("/api/calendar-meeting", self.calendar_meetings_api)
        app.router.add_put("/api/calendar-meeting/{meeting_id}", self.calendar_meeting_api)
        app.router.add_delete("/api/calendar-meeting/{meeting_id}", self.calendar_meeting_api)
        app.router.add_post("/api/management/calendar-meeting/excel", self.management_calendar_meeting_excel_api)
        app.router.add_post("/api/management/calendar-meeting", self.management_calendar_meetings_api)
        app.router.add_get(
            "/api/cloud-classroom/live-classes/export/excel",
            self.cloud_classroom_live_classes_export_api,
        )
        app.router.add_get(
            "/api/tencent-meeting/statistics/excel",
            self.tencent_meeting_statistics_export_api,
        )
        app.router.add_get("/api/teaching-calendars", self.teaching_calendars_api)
        app.router.add_post("/api/course/{course_id}/teaching-calendar", self.course_teaching_calendar_api)
        app.router.add_put("/api/teaching-calendar/{calendar_id}", self.teaching_calendar_api)
        app.router.add_delete("/api/teaching-calendar/{calendar_id}", self.teaching_calendar_api)
        app.router.add_get("/api/vtrses", self.vtrses_api)
        app.router.add_get("/api/vtrses/share-resources", self.vtrses_share_resources_api)
        app.router.add_get("/api/vtrses/applications", self.vtrses_applications_api)
        app.router.add_get("/api/vtrses/application-stat", self.vtrses_application_stat_api)
        app.router.add_get("/api/vtrses/subject-libs", self.vtrses_subject_libs_api)
        app.router.add_get("/api/vtrses/meetings/classifications/", self.vtrses_meeting_classifications_api)
        app.router.add_get("/api/vtrses/resources/classifications/", self.vtrses_resource_classifications_api)
        app.router.add_get("/api/vtrses/access-code/", self.vtrses_access_code_api)
        app.router.add_get("/api/stat/vtrses", self.stat_vtrses_api)
        app.router.add_get("/api/stat/vtrses/data", self.stat_vtrses_data_api)
        app.router.add_get("/api/stat/vtrses/resources", self.stat_vtrses_resources_api)
        app.router.add_get("/api/stat/vtrses/activities", self.stat_vtrses_activities_api)
        app.router.add_get("/api/stat/vtrses/teaching-count-info", self.stat_vtrses_teaching_count_info_api)
        app.router.add_get("/api/stat/vtrses/data/export", self.stat_vtrses_data_export_api)
        app.router.add_get("/api/manage/vtrses", self.vtrses_api)
        app.router.add_get("/api/audit/vtrses", self.vtrses_api)
        app.router.add_get("/api/departments", self.departments_api)
        app.router.add_post("/api/departments", self.departments_api)
        app.router.add_get("/api/top-departments", self.top_departments_api)
        app.router.add_get("/api/my-departments", self.my_departments_api)
        app.router.add_get("/api/selected-departments", self.selected_departments_api)
        app.router.add_get("/api/department/resource-center", self.department_resource_center_api)
        app.router.add_get("/api/stat/departments/user-attendance", self.department_user_attendance_api)
        app.router.add_post("/api/stat/departments/attendance", self.department_attendance_api)
        app.router.add_post(
            "/api/stat/departments/attendance/export/{department_id}",
            self.department_attendance_export_api,
        )
        app.router.add_get("/api/ai-ppt/user/usage/count", self.ai_ppt_user_usage_count_api)
        app.router.add_get("/api/ai-ppt/usage/stats", self.ai_ppt_usage_stats_api)
        app.router.add_post("/api/ai-ppt/usage", self.ai_ppt_usage_api)
        app.router.add_post("/api/ai-ppt/user-usage/export", self.ai_ppt_user_usage_export_api)
        app.router.add_get("/api/orgs", self.orgs_api)
        app.router.add_get("/api/orgs/", self.orgs_api)
        app.router.add_get("/api/orgs/1/lang-settings", self.platform_misc_api)
        app.router.add_get("/api/all-orgs", self.all_orgs_api)
        app.router.add_get("/api/org/", self.org_api)
        app.router.add_get("/api/academic-years", self.academic_years_api)
        app.router.add_get("/api/my-academic-years", self.my_academic_years_api)
        app.router.add_get("/api/my-curriculum-academic-years", self.my_curriculum_academic_years_api)
        app.router.add_get("/api/semesters", self.semesters_api)
        app.router.add_get("/api/my-semesters", self.my_semesters_api)
        app.router.add_get("/api/my-semesters-all", self.my_semesters_all_api)
        app.router.add_get("/api/my-curriculum-semesters", self.my_curriculum_semesters_api)
        app.router.add_get("/api/course-classifications", self.course_classifications_api)
        app.router.add_get("/api/curriculum-classifications", self.curriculum_classifications_api)
        app.router.add_get("/api/curriculum-conditions/", self.curriculum_conditions_api)
        app.router.add_get("/api/portal-classifications", self.platform_misc_api)
        app.router.add_get("/api/authz/roles", self.authz_roles_api)
        app.router.add_get("/api/authz/permissions", self.platform_misc_api)
        app.router.add_get("/api/authz/course-permissions", self.platform_misc_api)
        app.router.add_get("/api/authz/user-roles", self.platform_misc_api)
        app.router.add_get("/api/virtual-classroom-resources", self.virtual_classroom_resources_api)
        app.router.add_get("/api/live-records/", self.live_records_api)
        app.router.add_get("/api/obe/existed-metrics", self.obe_existed_metrics_api)
        app.router.add_get("/api/program/course-programs", self.program_course_programs_api)
        app.router.add_get("/api/program/user-programs", self.program_user_programs_api)
        app.router.add_get("/api/user/academic-learning-resources", self.user_academic_learning_resources_api)
        app.router.add_get("/api/todos", self.platform_misc_api)
        app.router.add_get("/api/in-progress-homeworks", self.platform_misc_api)
        app.router.add_get("/api/jobs/", self.platform_misc_api)
        app.router.add_get("/api/inclass-report/", self.platform_misc_api)
        app.router.add_get("/api/sign-in/stats", self.platform_misc_api)
        app.router.add_get("/api/user/recently-visited-courses", self.platform_misc_api)
        app.router.add_get("/api/alerts", self.platform_misc_api)
        app.router.add_get("/api/alerts/", self.platform_misc_api)
        app.router.add_get("/api/alert-logs/", self.platform_misc_api)
        app.router.add_get("/api/alert/members", self.platform_misc_api)
        app.router.add_get("/api/calendar-alerts", self.platform_misc_api)
        app.router.add_get("/api/calendar-events", self.platform_misc_api)
        app.router.add_get("/api/calendar-timetables", self.platform_misc_api)
        app.router.add_get("/api/instruction-team/meeting", self.platform_misc_api)
        app.router.add_get("/api/my-classes", self.platform_misc_api)
        app.router.add_get("/api/my-teaching-classes", self.platform_misc_api)
        app.router.add_get("/api/task/last", self.platform_misc_api)
        app.router.add_get("/api/org/change-plan-list", self.platform_misc_api)
        app.router.add_get("/api/third-party/info", self.platform_misc_api)
        app.router.add_get("/api/topics/latest", self.platform_misc_api)
        app.router.add_get("/api/user-index-stat/courses/info-status", self.platform_misc_api)
        app.router.add_get("/api/user-index-stat/org-summary", self.platform_misc_api)
        app.router.add_get("/api/user/profile-stat", self.platform_misc_api)
        app.router.add_get("/api/org-bulletin/bulletins/latest", self.org_bulletins_latest_api)
        app.router.add_get("/api/org-bulletin/bulletins", self.org_bulletins_api)
        app.router.add_get("/api/org-bulletin/bulletins/", self.org_bulletins_api)
        app.router.add_get("/api/org-bulletin/classifications", self.org_bulletin_classifications_api)
        app.router.add_get("/api/courses", self.catalog_courses_api)
        app.router.add_post("/api/courses", self.catalog_courses_api)
        app.router.add_get("/api/certifications", self.certifications_api)
        app.router.add_get("/api/certifications-for-management", self.certifications_api)
        app.router.add_get("/api/course-subjects", self.course_subjects_api)
        app.router.add_post("/api/reviewed-courses", self.reviewed_courses_api)
        app.router.add_get("/api/users", self.catalog_users_api)
        app.router.add_post("/api/users", self.catalog_users_api)
        app.router.add_get("/api/user", self.catalog_user_lookup_api)
        app.router.add_get("/api/users/without_authz_roles", self.catalog_misc_api)
        app.router.add_get("/api/user/classes", self.user_classes_api)
        app.router.add_get("/api/course/cover-list", self.catalog_misc_api)
        app.router.add_get("/api/course/shared-records/", self.catalog_misc_api)
        app.router.add_get("/api/course_certification/", self.catalog_misc_api)
        app.router.add_get("/api/classes", self.classes_api)
        app.router.add_get("/api/grades", self.grades_api)
        app.router.add_get("/api/combine-courses", self.combine_courses_api)
        app.router.add_get("/api/combine-courses/", self.combine_courses_api)
        app.router.add_get("/api/courses/interactions/", self.course_interactions_api)
        app.router.add_get("/api/interactions/", self.course_interactions_api)
        app.router.add_get("/api/courses/interactions/vote/", self.course_interactions_api)
        app.router.add_get("/api/interaction-submissions/", self.course_interactions_api)
        app.router.add_get("/api/courses/statistic/resource-audit", self.course_resource_audit_api)
        app.router.add_get("/api/curriculums", self.curriculums_api)
        app.router.add_get("/api/curriculums/", self.curriculums_api)
        app.router.add_get("/api/curriculum-sections/", self.curriculum_sections_api)
        app.router.add_get("/api/warning/student/", self.warning_students_api)
        app.router.add_get("/api/authz/course-roles", self.authz_course_roles_api)
        app.router.add_get("/api/data-import/course-groups", self.data_import_catalog_api)
        app.router.add_get("/api/data-import/course/", self.data_import_catalog_api)
        app.router.add_get("/api/data-import/courses", self.data_import_catalog_api)
        app.router.add_get("/api/data-import/scores/", self.data_import_catalog_api)
        app.router.add_get("/api/data-import/item_scores/", self.data_import_catalog_api)
        app.router.add_get("/api/data-import/seat-number/", self.data_import_catalog_api)
        app.router.add_get("/api/data-import/validation", self.data_import_validation_api)
        app.router.add_get("/api/campus-subject-lib/classifications", self.campus_subject_lib_api)
        app.router.add_get("/api/campus-subject-lib/classifications/subject-count", self.catalog_misc_api)
        app.router.add_get("/api/campus-subject-lib/subjects", self.campus_subject_lib_api)
        app.router.add_get("/api/campus-subject-lib/subjects/", self.campus_subject_lib_api)
        app.router.add_get("/api/campus-subject-lib/combination-subjects", self.campus_subject_lib_api)
        app.router.add_get("/api/campus-subject-lib/combination-subjects/", self.campus_subject_lib_api)
        app.router.add_get("/api/lesson-resources/shared-stat", self.media_api)
        app.router.add_get("/api/user/other-video-resources", self.media_api)
        app.router.add_get("/api/user/third-part-resources", self.media_api)
        app.router.add_get("/api/public-resources", self.media_api)
        app.router.add_get("/api/media/media-caption-tasks/progress", self.media_api)
        app.router.add_get("/api/copy-third-part-resources", self.media_api)
        app.router.add_get("/api/lark/files", self.media_api)
        app.router.add_get("/api/lark/authorization/check", self.media_api)
        app.router.add_get("/api/user/links", self.media_api)
        app.router.add_get("/api/user/links/", self.media_api)
        app.router.add_get("/api/user/storage-used", self.media_api)
        app.router.add_get("/api/resource/folders", self.media_api)
        app.router.add_get("/api/wedrive/files", self.media_api)
        app.router.add_get("/api/resources/", self.media_api)
        app.router.add_get("/api/online-videos/", self.media_api)
        app.router.add_get("/api/video-quizzes/", self.media_api)
        app.router.add_get("/api/video-quizzes/org/arrears/", self.media_api)
        app.router.add_get("/api/meeting/", self.media_api)
        app.router.add_get("/api/meeting/week/time-periods", self.media_api)
        app.router.add_get("/api/meeting/slot/", self.media_api)
        app.router.add_get("/api/meeting/slots", self.media_api)
        app.router.add_get("/api/meeting/slots/", self.media_api)
        app.router.add_get("/api/meeting/shanghaitech/", self.media_api)
        app.router.add_get("/api/tencent_meeting/check-user-auth", self.media_api)
        app.router.add_get("/api/tencent-meeting/authorization-url", self.media_api)
        app.router.add_get("/api/tencent-meeting/statistics", self.media_api)
        app.router.add_get("/api/lecture-live/schedule/", self.media_api)
        app.router.add_get("/api/lecture-live", self.media_api)
        app.router.add_get("/api/activies/classin/join-url", self.media_api)
        app.router.add_get("/api/activities/classin/webcast-url", self.media_api)
        app.router.add_get("/api/dingtalk-lives/", self.media_api)
        app.router.add_get("/api/interaction-activities/", self.media_api)
        app.router.add_get("/api/courses/lecture-live-activity/", self.media_api)
        app.router.add_get("/api/courses/tencent-meeting/activities", self.media_api)
        app.router.add_get("/api/course_template", self.media_api)
        app.router.add_get("/api/course_template/", self.media_api)
        app.router.add_get("/api/course_templates", self.media_api)
        app.router.add_get("/api/knowledge-nodes/", self.media_api)
        app.router.add_get("/api/knowledge-node/", self.media_api)
        app.router.add_get("/api/user/lesson-resources/progress", self.media_api)
        app.router.add_get("/api/shanghaitech/lib-resources", self.media_api)
        app.router.add_get("/api/video-suite/comments/", self.media_api)
        app.router.add_get("/api/project", self.authoring_api)
        app.router.add_get("/api/project/", self.authoring_api)
        app.router.add_get("/api/projects", self.authoring_api)
        app.router.add_get("/api/blueprint", self.authoring_api)
        app.router.add_get("/api/blueprint/", self.authoring_api)
        app.router.add_post("/api/my-courses", self.authoring_api)
        app.router.add_get("/api/subjects", self.authoring_api)
        app.router.add_get("/api/subjects/", self.authoring_api)
        app.router.add_get("/api/subjects/{subject_id}", self.authoring_api)
        app.router.add_get("/api/feedback-activities", self.authoring_api)
        app.router.add_get("/api/feedback-activities/", self.authoring_api)
        app.router.add_get("/api/feedback-activities/{activity_id}", self.authoring_api)
        app.router.add_get("/api/courses/{course_id}/feedback-activities", self.authoring_api)
        app.router.add_get("/api/courses/danmu/{course_id}/config", self.authoring_api)
        app.router.add_get("/api/chinamcloud/resources", self.authoring_api)
        app.router.add_post("/api/chinamcloud/upload", self.chinamcloud_upload_api)
        app.router.add_get("/api/uploads/references", self.authoring_api)
        app.router.add_get("/api/uploads/references/", self.authoring_api)
        app.router.add_get("/api/uploads/marked_attachment", self.authoring_api)
        app.router.add_get("/api/uploads/marked_attachment/", self.authoring_api)
        app.router.add_get("/api/uploads/share-to-courses", self.authoring_api)
        app.router.add_get("/api/shared-resources/stat", self.authoring_api)
        app.router.add_get("/api/save-resources/check", self.authoring_api)
        app.router.add_get("/api/custom-knowledge-graph/stat", self.authoring_api)
        app.router.add_get("/api/knowledge-graph/kfs-subjects", self.authoring_api)
        app.router.add_get("/api/knowledge-graph/forest-versions/-/stats", self.authoring_api)
        app.router.add_get("/api/shared-resources/admin/to-other-orgs", self.authoring_api)
        app.router.add_get("/api/my-notes", self.authoring_api)
        app.router.add_get("/api/my-notes/", self.authoring_api)
        app.router.add_get("/api/correction-books", self.authoring_api)
        app.router.add_get("/api/correction-books/", self.authoring_api)
        app.router.add_get("/api/authz/courses", self.authoring_api)
        app.router.add_get("/api/authz/courses/", self.authoring_api)
        app.router.add_get("/api/portal-logo", self.authoring_api)
        app.router.add_post("/api/uploads/details/query", self.authoring_api)
        app.router.add_get("/api/uploads/document/{upload_id}/url", self.authoring_api)
        app.router.add_get("/api/knowledge-graph/courses/{course_id}/kfs-import-info", self.authoring_api)
        app.router.add_get("/api/user/course/{course_id}/resources/folder", self.authoring_api)
        app.router.add_get("/api/course/{course_id}/knowledge-base", self.authoring_api)
        app.router.add_get("/api/course/{course_id}/knowledge-base/{knowledge_base_id}/resources", self.authoring_api)
        app.router.add_get("/api/h5-courseware/{activity_id}/upload/{upload_id}/{kind}", self.authoring_api)
        app.router.add_get("/api/submissions/{submission_id}/marked_attachments", self.authoring_api)
        app.router.add_get("/api/submissions/{submission_id}/marked_attachments/{upload_id}", self.authoring_api)
        app.router.add_get("/api/submissions/{submission_id}/submission_marked_attachments", self.authoring_api)
        app.router.add_get(
            "/api/submissions/{submission_id}/subject_marked_attachments/{subject_id}",
            self.authoring_api,
        )
        app.router.add_get("/api/orgs/{org_id}/org-settings", self.org_settings_api)
        app.router.add_get("/api/users/me", self.users_me_api)
        app.router.add_get("/users/{user_id}/notifications", self.notifications_api)
        app.router.add_get("/pubsub/{user_id}", self.pubsub_ws)

        self.runner = web.AppRunner(app)
        await self.runner.setup()
        self.site = web.TCPSite(self.runner, "127.0.0.1", 0)
        await self.site.start()
        port = self.site._server.sockets[0].getsockname()[1]
        self.base_url = "http://127.0.0.1:{}".format(port)
        return self

    async def close(self) -> None:
        if self.runner is not None:
            await self.runner.cleanup()
        self.runner = None
        self.site = None
        self.base_url = ""

    async def __aenter__(self) -> "FakeTronServer":
        return await self.start()

    async def __aexit__(self, _exc_type, _exc, _tb) -> None:
        await self.close()

    async def login_session(self, session, *, user: str = "user1", password: str = "pass1"):
        client = self.client(session)
        form = await client.fetch_login_form()
        outcome = await client.submit_login(form, user, password)
        return form, outcome

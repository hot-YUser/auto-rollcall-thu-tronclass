import copy
import json
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

try:
    import aiohttp
    from aiohttp import web
except (ImportError, ModuleNotFoundError):
    aiohttp = None
    web = None

from troTHU import tron, tron_http
from troTHU.teacher_runtime import (
    build_teacher_activity_report,
    build_teacher_classroom_report,
    build_teacher_course_report,
    build_teacher_exam_report,
    build_teacher_group_set_report,
    build_teacher_questionnaire_report,
    build_teacher_rollcall_report,
    activate_teacher_rollcall,
    add_teacher_activity_comment,
    answer_teacher_number_rollcall,
    answer_teacher_qr_rollcall,
    answer_teacher_radar_rollcall,
    cancel_recommend_teacher_submission,
    check_teacher_activity_dependents,
    check_teacher_module_dependents,
    check_teacher_syllabus_dependents,
    clear_teacher_air_credit_remaining_credits,
    classify_account_type,
    classify_teacher_course,
    comment_teacher_exam_status,
    copy_teacher_group_set,
    copy_teacher_subject_lib,
    create_teacher_air_credit_assignments,
    create_teacher_course_estimate,
    create_teacher_course_estimate_reply,
    create_teacher_activity,
    create_teacher_bulletin,
    create_teacher_calendar_meeting,
    create_teacher_classroom_exam,
    create_teacher_course_package,
    create_teacher_courseware_quiz_subjects,
    create_teacher_group,
    create_teacher_group_set,
    create_teacher_module,
    create_teacher_merged_rollcall,
    create_teacher_outline_setting,
    create_teacher_questionnaire_subject,
    create_teacher_rubric,
    create_teacher_rollcall,
    create_teacher_module_rollcall,
    create_teacher_subject_lib,
    create_teacher_syllabus,
    create_teacher_teaching_calendar,
    delete_teacher_exams,
    delete_teacher_activity,
    delete_teacher_activity_comment,
    delete_teacher_activity_comment_reply,
    delete_teacher_activity_resource,
    delete_teacher_bulletin,
    delete_teacher_calendar_meeting,
    delete_teacher_classroom,
    delete_teacher_classroom_subjects,
    delete_teacher_course_package,
    delete_teacher_course_estimate,
    delete_teacher_course_estimate_reply,
    delete_teacher_enrollment,
    delete_teacher_enrollments,
    delete_teacher_group,
    delete_teacher_group_member,
    delete_teacher_group_set,
    delete_teacher_module,
    delete_teacher_outline_setting_option,
    delete_teacher_questionnaire_subject,
    delete_teacher_rubrics,
    delete_teacher_rollcall,
    delete_teacher_subject_lib,
    delete_teacher_subject_lib_subjects,
    delete_teacher_syllabus,
    delete_teacher_teaching_calendar,
    discover_teacher_context,
    download_teacher_ai_ppt_user_usage_export,
    download_teacher_air_credit_stats_export,
    download_teacher_api_path,
    download_teacher_api_request,
    download_teacher_qrcode,
    download_teacher_category_topics_export,
    download_teacher_cloud_classroom_live_classes_export,
    download_teacher_course_stat_students_export,
    download_teacher_department_attendance_export,
    download_teacher_department_user_attendance_export,
    download_teacher_management_calendar_meeting_export,
    download_teacher_questionnaire_export,
    download_teacher_shared_resource_blob,
    download_teacher_shared_resource_stat_export,
    download_teacher_shared_resource_subject_lib_export,
    download_teacher_shared_resource_video_stat_export,
    download_teacher_stat_attendance_export_to,
    download_teacher_stat_courses_export_to,
    download_teacher_stat_vtrses_data_export,
    download_teacher_stat_report_export,
    download_teacher_tencent_meeting_statistics_export,
    download_teacher_topic_export,
    download_teacher_third_part_upload,
    download_teacher_upload_blob,
    download_teacher_upload_modified_image,
    download_teacher_upload_reference_blob,
    download_teacher_upload_swf,
    download_teacher_upload_thumbnail,
    download_teacher_wedrive_file,
    upload_teacher_file,
    fetch_teacher_ai_ppt_report,
    fetch_teacher_activity_uploads_license,
    fetch_teacher_air_credit_report,
    fetch_teacher_api_path,
    fetch_teacher_authoring_report,
    fetch_teacher_calendar_meetings,
    fetch_teacher_catalog_report,
    fetch_teacher_completion_criteria,
    fetch_teacher_course_estimate_replies,
    fetch_teacher_course_estimate_user,
    fetch_teacher_course_package_course,
    fetch_teacher_course_completion_criteria,
    fetch_teacher_course_rollcall_detail,
    fetch_teacher_courseware_quizzes,
    fetch_teacher_courseware_quiz_settings,
    fetch_teacher_courseware_quiz_subjects,
    fetch_teacher_course_statistics,
    fetch_teacher_department_report,
    fetch_teacher_cc_license_groups,
    fetch_teacher_cc_license_map,
    fetch_teacher_entries,
    fetch_teacher_entry,
    fetch_teacher_entry_references,
    fetch_teacher_forum_categories,
    fetch_teacher_forum_category,
    fetch_teacher_management_calendar_meetings,
    fetch_teacher_media_report,
    fetch_teacher_org_bulletin_report,
    fetch_teacher_platform_report,
    fetch_teacher_published_slides,
    fetch_teacher_questionnaire_submissions,
    fetch_teacher_resource_group,
    fetch_teacher_resource_group_folders,
    fetch_teacher_resource_group_members,
    fetch_teacher_resource_group_resources,
    fetch_teacher_resource_group_rubrics,
    fetch_teacher_resource_group_subject_libs,
    fetch_teacher_resource_groups,
    fetch_teacher_rollcall_count,
    fetch_teacher_rollcall_status_result,
    fetch_teacher_rollcall_students_page,
    fetch_teacher_ongoing_student_rollcalls,
    fetch_teacher_leave_record,
    fetch_teacher_student_rollcalls,
    fetch_teacher_shared_resource_classifications,
    fetch_teacher_shared_resource_collections,
    fetch_teacher_shared_resource_comments,
    fetch_teacher_shared_resource_followers,
    fetch_teacher_shared_resource_recommendations,
    fetch_teacher_shared_resource_tags,
    fetch_teacher_shared_resource_track_users,
    fetch_teacher_shared_resources,
    fetch_teacher_slide,
    fetch_teacher_slide_export_status,
    fetch_teacher_slide_records,
    fetch_teacher_slides,
    fetch_teacher_subject_lib_folders,
    fetch_teacher_subject_lib_knowledge_nodes,
    fetch_teacher_subject_lib_statistic,
    fetch_teacher_subject_lib_subjects,
    fetch_teacher_subject_libs,
    fetch_teacher_teaching_calendars,
    fetch_teacher_user_resource_folder_info,
    fetch_teacher_user_resources,
    fetch_teacher_vtrs_report,
    grade_teacher_rollcalls,
    grade_teacher_submission,
    import_teacher_course_groups,
    import_teacher_course_package,
    import_teacher_enrollments,
    import_teacher_item_scores,
    import_teacher_questionnaire_subjects,
    import_teacher_rollcalls,
    import_teacher_scores,
    import_teacher_seat_numbers,
    move_teacher_subject_lib_subjects,
    move_teacher_subject_libs,
    notify_teacher_outline_editing,
    operate_teacher_activity_comments,
    publish_teacher_activities,
    random_teacher_grouping,
    recommend_teacher_submissions,
    reply_teacher_activity_comment,
    resort_teacher_activity,
    copy_teacher_subject_libs_to_user,
    copy_teacher_subject_libs_to_courseware_quiz,
    export_teacher_course_package,
    format_teacher_courseware_quiz_question,
    generate_teacher_courseware_quiz_subjects,
    save_teacher_activity_resource,
    save_teacher_classroom_subjects,
    save_teacher_course_package,
    score_teacher_classroom,
    score_teacher_custom_item,
    score_teacher_exam,
    score_teacher_forum,
    sort_teacher_module_activities,
    sort_teacher_groups,
    sort_teacher_modules,
    sort_teacher_outline_setting,
    sort_teacher_syllabus_activities,
    sort_teacher_syllabuses,
    start_teacher_rollcall,
    stop_teacher_number_rollcall,
    stop_teacher_qr_rollcall,
    stop_teacher_radar_rollcall,
    stop_teacher_rollcall,
    stop_teacher_timetable_rollcall,
    sync_teacher_courses_from_urp,
    submit_teacher_edu_scores,
    mark_teacher_bulletin_read,
    toggle_teacher_outline_setting,
    teacher_api_request,
    log_teacher_activity_read,
    update_teacher_announce_score_settings,
    update_teacher_activity,
    update_teacher_activity_comment,
    update_teacher_activity_comment_reply,
    update_teacher_activity_resource,
    update_teacher_air_credit_assignments,
    update_teacher_air_credit_course_usage_limit,
    update_teacher_air_credit_status,
    update_teacher_bulletin,
    update_teacher_calendar_meeting,
    update_teacher_chinamcloud_resources,
    update_teacher_course_outline,
    update_teacher_rollcall,
    update_teacher_radar_rollcall_position,
    update_teacher_classroom_exam,
    update_teacher_classroom_status,
    update_teacher_classroom_subject_status,
    update_teacher_course_package,
    update_teacher_courseware_quiz_subjects,
    update_teacher_course_estimate,
    update_teacher_custom_score_item,
    update_teacher_enrollment_role,
    update_teacher_enrollment_scores,
    update_teacher_enrollments_role,
    update_teacher_exam,
    update_teacher_forum_status,
    update_teacher_group,
    update_teacher_group_info,
    update_teacher_group_member,
    update_teacher_group_members,
    update_teacher_group_set,
    update_teacher_homework_announce_status,
    update_teacher_homework_rubric,
    update_teacher_outline_required_options,
    update_teacher_outline_setting,
    update_teacher_questionnaire_subject,
    update_teacher_subject_lib,
    update_teacher_module,
    update_teacher_merged_rollcall_students,
    update_teacher_rollcall_score,
    update_teacher_rollcall_setting,
    update_teacher_student_rollcalls,
    update_teacher_rubric,
    update_teacher_score_book,
    update_teacher_score_publish_item_maps,
    update_teacher_score_type_settings,
    update_teacher_syllabus,
    update_teacher_teaching_calendar,
    update_teacher_total_scores,
    create_teacher_custom_score_item,
    create_teacher_exam,
    create_teacher_entry,
    create_teacher_resource_group,
    delete_teacher_activities,
    delete_teacher_custom_score_item,
    delete_teacher_entry,
    delete_teacher_resource_group,
    delete_teacher_resource_group_folder,
    delete_teacher_resource_group_members,
    delete_teacher_resource_group_resource,
    delete_teacher_shared_resource,
    delete_teacher_shared_resource_comment,
    delete_teacher_slide,
    delete_teacher_slide_record,
    batch_delete_teacher_entries,
    batch_delete_teacher_slides,
    batch_save_teacher_shared_resources,
    add_teacher_shared_resource_comment,
    export_teacher_slide,
    leave_teacher_resource_group,
    publish_teacher_shared_resource,
    save_teacher_shared_resource,
    set_teacher_shared_resource_collection,
    update_teacher_entry,
    update_teacher_resource_group,
    update_teacher_resource_group_resource,
    update_teacher_slide,
    update_teacher_slide_video_info,
)
from tests.fake_tron_server import FakeTronServer


class TeacherRuntimeParserTest(unittest.TestCase):
    def test_classify_teacher_course_uses_matching_instructor_and_permissions(self) -> None:
        course = {"id": 101, "name": "Teaching", "instructors": [{"email": "teacher@example.com"}]}
        detail = {"allow_update_basic_info": True}
        enrollments = {
            "enrollments": [
                {
                    "roles": ["instructor"],
                    "user": {"email": "teacher@example.com", "user_no": "teacher@example.com"},
                },
                {"roles": ["student"], "user": {"email": "student@example.com"}},
            ]
        }

        summary = classify_teacher_course(
            course,
            course_detail=detail,
            enrollments_payload=enrollments,
            active_user="teacher@example.com",
        )

        self.assertTrue(summary.is_teacher)
        self.assertFalse(summary.is_student)
        self.assertIn("teacher", summary.roles)
        self.assertEqual(summary.student_count, 1)
        self.assertEqual(summary.instructor_count, 1)
        self.assertIn("matching_instructor", summary.evidence)

    def test_classify_account_type_supports_mixed_accounts(self) -> None:
        teacher_course = classify_teacher_course(
            {"id": 1, "name": "Teacher", "roles": ["instructor"]},
            active_user="teacher@example.com",
        )
        student_course = classify_teacher_course(
            {"id": 2, "name": "Student", "roles": ["student"]},
            active_user="teacher@example.com",
        )

        self.assertEqual(classify_account_type([teacher_course, student_course]), "mixed")


@unittest.skipUnless(aiohttp is not None and web is not None, "aiohttp.web is required")
class TeacherRuntimeIntegrationTest(unittest.IsolatedAsyncioTestCase):
    async def test_discover_teacher_context_and_course_report(self) -> None:
        async with FakeTronServer() as server:
            server.courses = [
                {"id": 101, "name": "Teaching", "instructors": [{"email": "teacher@example.com"}]}
            ]
            server.course_details["101"] = {
                "id": 101,
                "name": "Teaching",
                "allow_update_basic_info": True,
                "allowed_to_invite_student": True,
                "instructors": [{"email": "teacher@example.com"}],
            }
            server.course_enrollments["101"] = [
                {
                    "id": 1,
                    "roles": ["instructor"],
                    "user": {"email": "teacher@example.com", "user_no": "teacher@example.com"},
                },
                {"id": 2, "roles": ["student"], "user": {"email": "student@example.com"}},
            ]
            server.course_activity_reads["101"] = [{"id": "read1", "activity_id": "a1"}]
            server.course_students_activity_reads["101"] = [{"student_id": 2, "read_count": 3}]
            server.course_members["101"] = [{"id": "member1", "role": "student"}]
            server.course_certifications["101"] = {"selected_certification": {"id": "cert1"}}
            server.course_research_meetings["101"] = [{"id": "rm1", "title": "Research"}]
            server.rollcalls = [
                {
                    "id": 42,
                    "title": "Number",
                    "number_code": "1234",
                    "latitude": 25.0,
                    "longitude": 121.0,
                }
            ]
            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                await server.login_session(session)
                context = await discover_teacher_context(
                    session,
                    endpoints=server.endpoints(),
                    active_user="teacher@example.com",
                )
                report = await build_teacher_course_report(
                    session,
                    endpoints=server.endpoints(),
                    course_id="101",
                    endpoint_names=(
                        "rollcalls",
                        "enrollments",
                        "course_enrollments_index",
                        "course_activity_reads_for_user",
                        "course_students_activity_reads",
                        "course_members",
                        "course_certification",
                        "course_research_meetings",
                    ),
                )

        self.assertEqual(context.account_type, "teacher")
        self.assertEqual(context.teacher_course_count, 1)
        self.assertEqual(context.courses[0].student_count, 1)
        payload = report.to_dict()
        self.assertEqual(payload["status"], "ok")
        self.assertIn("rollcalls", payload["supported"])
        self.assertIn("course_enrollments_index", payload["supported"])
        self.assertIn("course_activity_reads_for_user", payload["supported"])
        self.assertIn("course_students_activity_reads", payload["supported"])
        self.assertIn("course_members", payload["supported"])
        self.assertIn("course_certification", payload["supported"])
        self.assertIn("course_research_meetings", payload["supported"])
        serialized = json.dumps(payload)
        self.assertNotIn("1234", serialized)
        self.assertNotIn("teacher@example.com", serialized)

    async def test_student_rollcall_detail_and_guarded_actions(self) -> None:
        async with FakeTronServer() as server:
            server.rollcalls = [{"id": 42, "title": "Number"}]
            server.rollcall_students_rollcalls["42"] = [
                {
                    "student_id": 2,
                    "name": "Student",
                    "user_no": "S001",
                    "email": "student@example.com",
                    "rollcall_status": "on_call_fine",
                }
            ]
            server.course_rollcall_details["101:42"] = {"id": "42", "course_id": "101", "title": "Number"}
            server.course_ongoing_student_rollcalls["101"] = [{"id": "42", "title": "Number"}]
            server.course_leave_records["101"] = [{"id": "leave1", "student_id": 2}]
            server.student_rollcall_histories["101:2"] = [{"student_rollcall_id": "sr1", "student_status": "absent"}]
            server.rollcall_student_counts["42"] = {"total": 1, "counts": {"on_call_fine": 1}}
            server.rollcall_details["42"] = {"id": "42", "title": "Number", "type": "number"}
            server.course_rollcall_status_results["42"] = {"result": [{"status": "on_call_fine", "count": 1}]}
            server.radar_success = True
            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                await server.login_session(session)
                detail = await build_teacher_rollcall_report(
                    session,
                    endpoints=server.endpoints(),
                    rollcall_id="42",
                    endpoint_names=(
                        "rollcall_detail",
                        "rollcall_lite",
                        "student_rollcalls",
                        "student_rollcalls_page",
                        "student_rollcall_count",
                        "rollcall_answers",
                        "rollcall_status_result",
                    ),
                )
                course_detail = await fetch_teacher_course_rollcall_detail(
                    session,
                    endpoints=server.endpoints(),
                    course_id="101",
                    rollcall_id="42",
                )
                ongoing = await fetch_teacher_ongoing_student_rollcalls(
                    session,
                    endpoints=server.endpoints(),
                    course_id="101",
                )
                leave_record = await fetch_teacher_leave_record(
                    session,
                    endpoints=server.endpoints(),
                    course_id="101",
                    timestamp="0",
                )
                page = await fetch_teacher_rollcall_students_page(
                    session,
                    endpoints=server.endpoints(),
                    rollcall_id="42",
                    page=1,
                    page_size=1,
                    rollcall_status="on_call_fine",
                )
                count = await fetch_teacher_rollcall_count(
                    session,
                    endpoints=server.endpoints(),
                    rollcall_id="42",
                )
                student_history = await fetch_teacher_student_rollcalls(
                    session,
                    endpoints=server.endpoints(),
                    course_id="101",
                    student_id="2",
                    page=1,
                    page_size=10,
                    rollcall_ids=["42"],
                )
                status_result = await fetch_teacher_rollcall_status_result(
                    session,
                    endpoints=server.endpoints(),
                    rollcall_id="42",
                )
                dry_run = await start_teacher_rollcall(
                    session,
                    endpoints=server.endpoints(),
                    rollcall_id="42",
                    payload={"number_code": "1234"},
                )
                started = await start_teacher_rollcall(
                    session,
                    endpoints=server.endpoints(),
                    rollcall_id="42",
                    payload={"mode": "manual"},
                    execute=True,
                    confirm=True,
                )
                created = await create_teacher_rollcall(
                    session,
                    endpoints=server.endpoints(),
                    course_id="101",
                    payload={"title": "Manual"},
                    execute=True,
                    confirm=True,
                )
                created_module = await create_teacher_module_rollcall(
                    session,
                    endpoints=server.endpoints(),
                    course_id="101",
                    payload={"title": "Module", "module_id": "m1"},
                    execute=True,
                    confirm=True,
                )
                activated = await activate_teacher_rollcall(
                    session,
                    endpoints=server.endpoints(),
                    rollcall_id="42",
                    execute=True,
                    confirm=True,
                )
                updated = await update_teacher_rollcall(
                    session,
                    endpoints=server.endpoints(),
                    rollcall_id="42",
                    payload={"status": "finished", "student_rollcalls": [{"student_id": 2, "student_rollcall_status": "absent"}]},
                    execute=True,
                    confirm=True,
                )
                radar_position = await update_teacher_radar_rollcall_position(
                    session,
                    endpoints=server.endpoints(),
                    rollcall_id="42",
                    payload={"latitude": 24.1, "longitude": 120.1},
                    execute=True,
                    confirm=True,
                )
                stopped = await stop_teacher_rollcall(
                    session,
                    endpoints=server.endpoints(),
                    rollcall_id="42",
                    execute=True,
                    confirm=True,
                )
                stopped_timetable = await stop_teacher_timetable_rollcall(
                    session,
                    endpoints=server.endpoints(),
                    rollcall_id="42",
                    execute=True,
                    confirm=True,
                )
                stopped_qr = await stop_teacher_qr_rollcall(
                    session,
                    endpoints=server.endpoints(),
                    rollcall_id="42",
                    execute=True,
                    confirm=True,
                )
                stopped_number = await stop_teacher_number_rollcall(
                    session,
                    endpoints=server.endpoints(),
                    rollcall_id="42",
                    execute=True,
                    confirm=True,
                )
                stopped_radar = await stop_teacher_radar_rollcall(
                    session,
                    endpoints=server.endpoints(),
                    rollcall_id="42",
                    execute=True,
                    confirm=True,
                )
                answered_qr = await answer_teacher_qr_rollcall(
                    session,
                    endpoints=server.endpoints(),
                    rollcall_id="42",
                    payload={"data": "qr-data", "deviceId": "dev"},
                    execute=True,
                    confirm=True,
                )
                answered_number = await answer_teacher_number_rollcall(
                    session,
                    endpoints=server.endpoints(),
                    rollcall_id="42",
                    payload={"numberCode": "0001", "deviceId": "dev"},
                    execute=True,
                    confirm=True,
                )
                answered_radar = await answer_teacher_radar_rollcall(
                    session,
                    endpoints=server.endpoints(),
                    rollcall_id="42",
                    payload={"latitude": 24.1, "longitude": 120.1, "deviceId": "dev"},
                    execute=True,
                    confirm=True,
                )
                student_update = await update_teacher_student_rollcalls(
                    session,
                    endpoints=server.endpoints(),
                    course_id="101",
                    student_id="2",
                    payload={"student_rollcalls": [{"student_rollcall_id": "sr1", "student_status": "absent"}]},
                    execute=True,
                    confirm=True,
                )
                deleted = await delete_teacher_rollcall(
                    session,
                    endpoints=server.endpoints(),
                    rollcall_id="42",
                    execute=True,
                    confirm=True,
                )
                merged = await create_teacher_merged_rollcall(
                    session,
                    endpoints=server.endpoints(),
                    payload={"course_id": "101", "rollcall_ids": [42]},
                    execute=True,
                    confirm=True,
                )
                merged_students = await update_teacher_merged_rollcall_students(
                    session,
                    endpoints=server.endpoints(),
                    payload={"student_rollcalls": [{"student_id": 2, "status": "present"}]},
                    execute=True,
                    confirm=True,
                )
                setting = await update_teacher_rollcall_setting(
                    session,
                    endpoints=server.endpoints(),
                    course_id="101",
                    payload={"auto_scoring": True},
                    execute=True,
                    confirm=True,
                )
                score = await update_teacher_rollcall_score(
                    session,
                    endpoints=server.endpoints(),
                    enrollment_id="2",
                    rollcall_score="95",
                    execute=True,
                    confirm=True,
                )
                with tempfile.TemporaryDirectory() as tmpdir:
                    qrcode = await download_teacher_qrcode(
                        session,
                        endpoints=server.endpoints(),
                        url="https://example.test/rollcall",
                        output_path=tmpdir,
                    )

        payload = detail.to_dict()
        self.assertEqual(payload["status"], "ok")
        self.assertIn("student_rollcalls", payload["supported"])
        self.assertIn("rollcall_detail", payload["supported"])
        self.assertIn("student_rollcall_count", payload["supported"])
        self.assertEqual(course_detail.status, "ok")
        self.assertEqual(ongoing.status, "ok")
        self.assertEqual(leave_record.status, "ok")
        self.assertEqual(page.status, "ok")
        self.assertEqual(count.status, "ok")
        self.assertEqual(student_history.status, "ok")
        self.assertEqual(status_result.status, "ok")
        serialized = json.dumps(payload)
        self.assertNotIn("student@example.com", serialized)
        self.assertNotIn("S001", serialized)
        self.assertEqual(dry_run.status, "dry_run")
        self.assertEqual(started.status, "ok")
        self.assertEqual(created.status, "ok")
        self.assertEqual(created_module.status, "ok")
        self.assertEqual(activated.status, "ok")
        self.assertEqual(updated.status, "ok")
        self.assertEqual(radar_position.status, "ok")
        self.assertEqual(stopped.status, "ok")
        self.assertEqual(stopped_timetable.status, "ok")
        self.assertEqual(stopped_qr.status, "ok")
        self.assertEqual(stopped_number.status, "ok")
        self.assertEqual(stopped_radar.status, "ok")
        self.assertEqual(answered_qr.status, "ok")
        self.assertEqual(answered_number.status, "ok")
        self.assertEqual(answered_radar.status, "ok")
        self.assertEqual(student_update.status, "ok")
        self.assertEqual(deleted.status, "ok")
        self.assertEqual(merged.status, "ok")
        self.assertEqual(merged_students.status, "ok")
        self.assertEqual(setting.status, "ok")
        self.assertEqual(score.status, "ok")
        self.assertEqual(qrcode.status, "ok")
        self.assertEqual(server.started_rollcalls, [{"rollcall_id": "42", "body": {"mode": "manual"}}])
        self.assertEqual(server.created_rollcalls[0]["body"], {"title": "Manual"})
        self.assertEqual(server.created_module_rollcalls[0]["body"], {"title": "Module", "module_id": "m1"})
        self.assertEqual(server.activated_rollcalls, ["42"])
        self.assertEqual(server.updated_rollcalls[0]["body"]["status"], "finished")
        self.assertEqual(server.updated_radar_rollcall_positions[0]["body"], {"latitude": 24.1, "longitude": 120.1})
        self.assertEqual(server.stopped_rollcalls, ["42", "42"])
        self.assertEqual(server.stopped_qr_rollcalls, ["42"])
        self.assertEqual(server.stopped_number_rollcalls, ["42"])
        self.assertEqual(server.stopped_radar_rollcalls, ["42"])
        self.assertEqual(server.qr_answers[-1]["body"], {"data": "qr-data", "deviceId": "dev"})
        self.assertEqual(server.number_attempts[-1]["body"], {"numberCode": "0001", "deviceId": "dev"})
        self.assertEqual(server.radar_answers[-1]["body"], {"latitude": 24.1, "longitude": 120.1, "deviceId": "dev"})
        self.assertEqual(server.updated_student_rollcalls[0]["body"]["student_rollcalls"][0]["student_status"], "absent")
        self.assertEqual(server.qrcode_requests, ["https://example.test/rollcall"])
        self.assertEqual(server.deleted_rollcalls, ["42"])
        self.assertEqual(server.created_merged_rollcalls[0]["body"], {"course_id": "101", "rollcall_ids": [42]})
        self.assertEqual(
            server.updated_merged_rollcall_students[0]["body"],
            {"student_rollcalls": [{"student_id": 2, "status": "present"}]},
        )
        self.assertEqual(server.updated_rollcall_settings[0]["body"], {"auto_scoring": True})
        self.assertEqual(server.updated_rollcall_scores[0]["body"], {"rollcall_score": "95"})

    async def test_resource_library_reads_and_guarded_actions(self) -> None:
        async with FakeTronServer() as server:
            server.resource_groups = [{"id": "rg1", "name": "Teacher Resources"}]
            server.resource_group_resources["rg1"] = [{"id": "sr1", "name": "Shared File"}]
            server.shared_resources_to_me = [{"id": "stm1", "name": "To Me"}]
            server.shared_resource_comments["sr1"] = [{"id": "comment1", "email": "student@example.com"}]
            server.cc_license_groups = [{"id": "cc", "name": "Creative Commons"}]
            server.entries = [{"id": "entry1", "name": "Entry"}]
            server.entry_references["entry1"] = [{"id": "ref1", "resource_id": "sr1"}]
            server.slides = [{"id": "slide1", "title": "Slide"}]
            server.slide_records["slide1"] = [{"recording_id": "record1"}]
            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                await server.login_session(session)
                reads = [
                    await fetch_teacher_resource_groups(session, endpoints=server.endpoints()),
                    await fetch_teacher_resource_group_resources(
                        session,
                        endpoints=server.endpoints(),
                        resource_group_id="rg1",
                    ),
                    await fetch_teacher_shared_resources(session, endpoints=server.endpoints(), source="to-me"),
                    await fetch_teacher_shared_resource_comments(
                        session,
                        endpoints=server.endpoints(),
                        resource_id="sr1",
                    ),
                    await fetch_teacher_cc_license_groups(session, endpoints=server.endpoints()),
                    await fetch_teacher_entries(session, endpoints=server.endpoints()),
                    await fetch_teacher_entry_references(session, endpoints=server.endpoints(), entry_id="entry1"),
                    await fetch_teacher_slide_records(session, endpoints=server.endpoints(), slide_id="slide1"),
                ]
                dry_run = await create_teacher_resource_group(
                    session,
                    endpoints=server.endpoints(),
                    payload={"name": "Dry"},
                )
                actions = [
                    await create_teacher_resource_group(
                        session,
                        endpoints=server.endpoints(),
                        payload={"id": "rg2", "name": "Created"},
                        execute=True,
                        confirm=True,
                    ),
                    await update_teacher_resource_group(
                        session,
                        endpoints=server.endpoints(),
                        resource_group_id="rg1",
                        payload={"name": "Updated"},
                        execute=True,
                        confirm=True,
                    ),
                    await update_teacher_resource_group_resource(
                        session,
                        endpoints=server.endpoints(),
                        resource_group_id="rg1",
                        resource_id="sr1",
                        payload={"name": "Renamed", "allow_download": True},
                        execute=True,
                        confirm=True,
                    ),
                    await save_teacher_shared_resource(
                        session,
                        endpoints=server.endpoints(),
                        resource_id="sr1",
                        execute=True,
                        confirm=True,
                    ),
                    await batch_save_teacher_shared_resources(
                        session,
                        endpoints=server.endpoints(),
                        resource_ids=["sr1", "sr2"],
                        execute=True,
                        confirm=True,
                    ),
                    await set_teacher_shared_resource_collection(
                        session,
                        endpoints=server.endpoints(),
                        resource_id="sr1",
                        user_id="u1",
                        collect=True,
                        execute=True,
                        confirm=True,
                    ),
                    await add_teacher_shared_resource_comment(
                        session,
                        endpoints=server.endpoints(),
                        resource_id="sr1",
                        payload={"body": "Nice"},
                        execute=True,
                        confirm=True,
                    ),
                    await delete_teacher_shared_resource_comment(
                        session,
                        endpoints=server.endpoints(),
                        comment_id="comment1",
                        execute=True,
                        confirm=True,
                    ),
                    await publish_teacher_shared_resource(
                        session,
                        endpoints=server.endpoints(),
                        payload={"id": "sr2", "name": "Published"},
                        execute=True,
                        confirm=True,
                    ),
                    await delete_teacher_shared_resource(
                        session,
                        endpoints=server.endpoints(),
                        resource_id="stm1",
                        share_to=True,
                        execute=True,
                        confirm=True,
                    ),
                    await create_teacher_entry(
                        session,
                        endpoints=server.endpoints(),
                        payload={"id": "entry2", "name": "Entry 2"},
                        execute=True,
                        confirm=True,
                    ),
                    await update_teacher_entry(
                        session,
                        endpoints=server.endpoints(),
                        entry_id="entry1",
                        payload={"name": "Updated Entry"},
                        execute=True,
                        confirm=True,
                    ),
                    await batch_delete_teacher_entries(
                        session,
                        endpoints=server.endpoints(),
                        entry_ids=["entry1", "entry2"],
                        execute=True,
                        confirm=True,
                    ),
                    await update_teacher_slide(
                        session,
                        endpoints=server.endpoints(),
                        slide_id="slide1",
                        payload={"title": "Updated Slide"},
                        execute=True,
                        confirm=True,
                    ),
                    await export_teacher_slide(
                        session,
                        endpoints=server.endpoints(),
                        slide_id="slide1",
                        execute=True,
                        confirm=True,
                    ),
                    await batch_delete_teacher_slides(
                        session,
                        endpoints=server.endpoints(),
                        slide_ids=["slide1", "slide2"],
                        execute=True,
                        confirm=True,
                    ),
                    await delete_teacher_resource_group(
                        session,
                        endpoints=server.endpoints(),
                        resource_group_id="rg2",
                        execute=True,
                        confirm=True,
                    ),
                ]

        self.assertEqual(dry_run.status, "dry_run")
        self.assertEqual([result.status for result in reads], ["ok"] * len(reads))
        self.assertEqual([result.status for result in actions], ["ok"] * len(actions))
        self.assertEqual(server.created_resource_groups[0]["body"], {"id": "rg2", "name": "Created"})
        self.assertEqual(server.updated_resource_groups[0]["body"]["name"], "Updated")
        self.assertEqual(server.updated_resource_group_resources[0]["body"]["name"], "Renamed")
        self.assertEqual(server.saved_shared_resources, ["sr1"])
        self.assertEqual(server.batch_saved_shared_resources, [["sr1", "sr2"]])
        self.assertEqual(server.set_shared_resource_collections[0]["user_id"], "u1")
        self.assertEqual(server.added_shared_resource_comments[0]["body"], {"body": "Nice"})
        self.assertEqual(server.deleted_shared_resource_comments, ["comment1"])
        self.assertEqual(server.published_shared_resources[0]["body"]["id"], "sr2")
        self.assertEqual(server.deleted_shared_resources_to, ["stm1"])
        self.assertEqual(server.created_entries[0]["body"]["id"], "entry2")
        self.assertEqual(server.updated_entries[0]["body"]["name"], "Updated Entry")
        self.assertEqual(server.batch_deleted_entries, [["entry1", "entry2"]])
        self.assertEqual(server.updated_slides[0]["body"]["title"], "Updated Slide")
        self.assertEqual(server.exported_slides, ["slide1"])
        self.assertEqual(server.batch_deleted_slides, [["slide1", "slide2"]])
        self.assertEqual(server.deleted_resource_groups, ["rg2"])

    async def test_teacher_statistics_air_credit_and_management_exports(self) -> None:
        async with FakeTronServer() as server:
            server.course_stat_for_instructor["101"] = {"course_id": "101", "activity_count": 5}
            server.course_stat_overviews["101"] = {"course_id": "101", "overview": {"finished": 3}}
            server.course_stat_students["101"] = [
                {"student_id": 2, "name": "Student One", "email": "student@example.com"}
            ]
            server.course_tpdoe_stat_students["101"] = [{"student_id": 2, "name": "TPDOE Student"}]
            server.courses_stats["101"] = {"course_id": "101", "views": 10}
            server.stat_activities_for_courses["101"] = [{"id": "activity-stat1"}]
            server.air_credit_user = {"credits": 7}
            server.air_credit_user_token = {"air_access_token": "token"}
            server.air_credit_users = [{"id": "u1", "name": "AI User", "email": "student@example.com"}]
            server.air_credit_courses["101"] = {"course_id": "101", "credits": 3}
            server.air_credit_course_rows = [{"course_id": "101", "credits": 3}]
            server.air_credit_user_courses_ai_ability = {"courses": [{"id": "101", "ability": 2}]}
            server.air_credit_org_credit_state_info = {"enabled": True, "quota": 100}
            server.air_credit_states["course"] = [{"course_id": "101", "state": "active"}]
            server.air_credit_stats["course"] = [{"course_id": "101", "credits": 3}]
            server.air_credit_summaries["course"] = {"type": "course", "total": 1}
            server.air_credit_audits = [{"id": "audit1", "action": "assign"}]
            server.air_credit_instructor_current_semester_courses = [{"id": "101", "name": "Teaching"}]
            server.air_credit_resources = [{"id": "air-resource1"}]
            server.calendar_meetings = [{"id": "meeting1", "title": "Weekly"}]
            server.management_calendar_meetings = [{"id": "meeting1", "title": "Weekly"}]
            server.teaching_calendars = [{"id": "tc1", "title": "Week 1"}]
            server.vtrses = [{"id": "vtrs1", "name": "VTRS Classroom"}]
            server.vtrses_share_resources = [{"id": "share1", "title": "Shared"}]
            server.vtrses_applications = [{"id": "application1"}]
            server.vtrses_application_stat = {"total": 1}
            server.vtrses_subject_libs = [{"id": "lib1"}]
            server.vtrses_meeting_classifications = [{"id": "meeting-type"}]
            server.vtrses_resource_classifications = [{"id": "resource-type"}]
            server.vtrses_access_codes = [{"id": "access1", "code": "VTRS"}]
            server.stat_vtrses = [{"id": "vtrs-stat1"}]
            server.stat_vtrses_data = [{"id": "data1", "name": "VTRS Data"}]
            server.stat_vtrses_resources = [{"id": "resource1"}]
            server.stat_vtrses_activities = [{"id": "activity1"}]
            server.stat_vtrses_teaching_count_info = {"teacher_count": 1}
            server.departments = [{"id": "org1", "name": "Department"}]
            server.top_departments = [{"id": "top1"}]
            server.my_departments = [{"id": "my1"}]
            server.selected_departments = [{"id": "selected1"}]
            server.department_resource_center = {"enabled": True}
            server.department_user_attendance = [{"user_id": "u1", "attended": 3}]
            server.department_attendance = [{"department_id": "org1", "attended": 3}]
            server.ai_ppt_user_usage_count = {"count": 2}
            server.ai_ppt_usage_stats = [{"date": "2026-01-01", "count": 2}]
            server.ai_ppt_usage = [{"user_id": "u1", "count": 2}]
            server.orgs = [{"id": "org1", "name": "Org"}]
            server.all_orgs = [{"id": "org1", "name": "Org"}]
            server.org = {"id": "org1", "name": "Org"}
            server.org_lang_settings = {"lang": "zh-TW"}
            server.academic_years = [{"id": 113, "name": "113"}]
            server.my_academic_years = [{"id": 113, "name": "113"}]
            server.my_curriculum_academic_years = [{"id": 113, "name": "113"}]
            server.semesters = [{"id": 1131, "name": "Fall"}]
            server.my_semesters = [{"id": 1131, "name": "Fall"}]
            server.my_semesters_all = [{"id": 1131, "name": "Fall"}]
            server.my_curriculum_semesters = [{"id": 1131, "name": "Fall"}]
            server.course_classifications = [{"id": "cc1", "name": "Required"}]
            server.curriculum_classifications = [{"id": "cur1", "name": "Curriculum"}]
            server.curriculum_conditions = [{"id": "cond1", "name": "Condition"}]
            server.portal_classifications = [{"id": "portal-class1", "name": "Portal Class"}]
            server.authz_roles = [{"id": "instructor", "name": "Instructor"}]
            server.authz_permissions = [{"id": "permission1", "name": "Permission"}]
            server.authz_course_permissions = [{"id": "course-permission1", "name": "Course Permission"}]
            server.authz_user_roles = [{"id": "user-role1", "name": "User Role"}]
            server.virtual_classroom_resources = [{"id": "vcr1", "title": "Room"}]
            server.live_records = [{"id": "live1", "title": "Live"}]
            server.obe_metrics = [{"id": "metric1", "name": "Outcome"}]
            server.program_course_programs = [{"id": "program1", "name": "Program"}]
            server.program_user_programs = [{"id": "user-program1", "name": "User Program"}]
            server.user_academic_learning_resources = [{"id": "resource1", "title": "Learning"}]
            server.todos = [{"id": "todo1", "title": "Todo"}]
            server.in_progress_homeworks = [{"id": "homework-progress1", "title": "Homework"}]
            server.jobs = [{"id": "job1", "status": "finished"}]
            server.my_classes = [{"id": "class-personal", "name": "Personal Class"}]
            server.my_teaching_classes = [{"id": "teaching-class", "name": "Teaching Class"}]
            server.task_last = {"id": "task1", "status": "finished"}
            server.inclass_reports = [{"id": "inclass1", "title": "In class"}]
            server.sign_in_stats = {"stats": [{"id": "sign1", "count": 3}]}
            server.user_recently_visited_courses = [{"id": "101", "name": "Visited"}]
            server.alerts = [{"id": "alert1", "title": "Alert"}]
            server.alert_logs = [{"id": "alert-log1", "title": "Alert Log"}]
            server.calendar_alerts = [{"id": "cal-alert1"}]
            server.calendar_events = [{"id": "event1"}]
            server.calendar_timetables = [{"id": "timetable1"}]
            server.instruction_team_meeting = {"id": "instruction1"}
            server.org_change_plan_list = [{"id": "change-plan1"}]
            server.third_party_info = {"enabled": True}
            server.topics_latest = [{"id": "topic-latest1"}]
            server.user_index_courses_info_status = {"ready": True}
            server.user_index_org_summary = {"course_count": 1}
            server.user_profile_stat = {"completed": 1}
            server.org_bulletins = [{"id": "ob1", "title": "Campus notice"}]
            server.org_bulletin_latest = [{"id": "ob1", "title": "Campus notice"}]
            server.org_bulletin_classifications = [{"id": "notice", "name": "Notice"}]
            server.catalog_courses = [{"id": "101", "name": "Catalog Course"}]
            server.catalog_courses_count = {"count": 1}
            server.public_courses = [{"id": "public1", "name": "Public Course"}]
            server.reviewed_courses = [{"id": "review1", "name": "Reviewed"}]
            server.catalog_users = [{"id": "u1", "name": "Catalog User", "email": "user@example.com"}]
            server.users_without_authz_roles = [{"id": "u3", "name": "No Role"}]
            server.user_candidates = [{"id": "u2", "name": "Candidate"}]
            server.instructors = [{"id": "teacher1", "name": "Teacher"}]
            server.user_classes = [{"id": "class-user1", "name": "User Class"}]
            server.course_cover_list = [{"id": "cover1", "name": "Cover"}]
            server.course_shared_records = [{"id": "shared-record1"}]
            server.course_certifications_catalog = [{"id": "course-cert1"}]
            server.classes = [{"id": "class1", "name": "Class"}]
            server.grades = [{"id": "grade1", "name": "Grade"}]
            server.certifications = [{"id": "cert1", "name": "Certification"}]
            server.certifications_for_management = [{"id": "cert-mgmt1", "name": "Certification Management"}]
            server.course_subjects = [{"id": "course-subject1", "name": "Course Subject"}]
            server.combine_courses = [{"id": "combine1", "name": "Combined"}]
            server.course_interactions = [{"id": "interaction1", "title": "Vote"}]
            server.interactions = [{"id": "interaction-root1", "title": "Root interaction"}]
            server.interaction_votes = [{"id": "vote1", "title": "Vote"}]
            server.interaction_submissions = [{"id": "is1", "answer": "A"}]
            server.course_resource_audits = [{"id": "audit1", "name": "Resource Audit"}]
            server.curriculums = [{"id": "curriculum1", "name": "Curriculum"}]
            server.curriculum_sections = [{"id": "section1", "name": "Section"}]
            server.warning_students = [{"id": "warning1", "name": "Warning"}]
            server.authz_course_roles = [{"id": "course_admin", "name": "Course Admin"}]
            server.data_import_catalogs = {
                "course-groups": [{"id": "course-groups-import"}],
                "course": [{"id": "course-import"}],
                "courses": [{"id": "courses-import"}],
                "scores": [{"id": "scores-import"}],
                "item_scores": [{"id": "item-scores-import"}],
                "seat-number": [{"id": "seat-number-import"}],
            }
            server.data_import_validations = [{"id": "validation1"}]
            server.campus_subject_lib_classifications = [{"id": "campus-class1"}]
            server.campus_subject_lib_classification_counts = [{"id": "campus-class1", "count": 1}]
            server.campus_subject_lib_subjects = [{"id": "campus-subject1", "title": "Campus subject"}]
            server.campus_subject_lib_combination_subjects = [{"id": "campus-combo1"}]
            server.lesson_resources_shared_stat = {"total": 2}
            server.other_video_resources = [{"id": "ov1", "title": "Other video"}]
            server.third_part_resources = [{"id": "tp1", "title": "Third-party"}]
            server.public_resources = [{"id": "public-resource1", "title": "Public resource"}]
            server.media_caption_task_progress = {"progress": [{"id": "caption1"}]}
            server.copy_third_part_resources = [{"id": "copy1"}]
            server.lark_files = [{"id": "lark1", "name": "Lark file"}]
            server.lark_authorization = {"authorized": True}
            server.user_links = [{"id": "link1", "url": "https://example.invalid"}]
            server.user_storage_used = {"used": 512}
            server.resource_folders = [{"id": "folder1"}]
            server.wedrive_files = [{"id": "file1", "name": "Drive file"}]
            server.media_resources = [{"id": "media-resource1"}]
            server.online_videos = [{"id": "video1"}]
            server.video_quizzes = [{"id": "vq1"}]
            server.video_quizzes_arrears = {"arrears": False}
            server.meetings = [{"id": "meeting-media1"}]
            server.meeting_time_periods = [{"id": "period1"}]
            server.meeting_slots = [{"id": "slot1"}]
            server.meeting_shanghaitech = [{"id": "st1"}]
            server.tencent_meeting_auth = {"authorized": True}
            server.tencent_meeting_authorization_url = {"url": "https://example.invalid/auth"}
            server.tencent_meeting_statistics = [{"id": "tencent-stat1"}]
            server.lecture_live_schedules = [{"id": "lecture1"}]
            server.lecture_live = {"jwt": "ok"}
            server.classin_join_url = {"url": "https://example.invalid/classin"}
            server.classin_webcast_url = {"url": "https://example.invalid/webcast"}
            server.dingtalk_lives = [{"id": "ding1"}]
            server.interaction_activities = [{"id": "interaction-live1"}]
            server.course_lecture_live_activities = [{"id": "lecture-activity1"}]
            server.course_tencent_meeting_activities = [{"id": "tencent-activity1"}]
            server.course_templates = [{"id": "template1"}]
            server.knowledge_nodes = [{"id": "node1", "name": "Knowledge"}]
            server.user_lesson_resource_progress = [{"id": "progress1"}]
            server.shanghaitech_lib_resources = [{"id": "st-lib1"}]
            server.video_suite_comments = [{"id": "video-comment1"}]
            server.project = {"id": "project1", "name": "Course authoring"}
            server.projects = [{"id": "project-list1", "name": "Project list"}]
            server.blueprint = {"blueprints": [{"id": "blueprint1"}]}
            server.outline_setting = {"id": 3, "formatted_options": [{"key": "comment_chinese", "required": True}]}
            server.my_courses = [{"id": "101", "name": "My Course"}]
            server.subjects = [{"id": "subject1", "title": "Question"}]
            server.subject_details["subject1"] = {"id": "subject1", "title": "Question"}
            server.feedback_activities = [{"id": "77", "title": "Feedback"}]
            server.feedback_activity_details["77"] = {"id": "77", "title": "Feedback"}
            server.course_feedback_activities["101"] = [{"id": "77", "title": "Feedback"}]
            server.course_danmu_configs["101"] = {"enabled": True}
            server.chinamcloud_resources = [{"id": "cloud1"}]
            server.upload_references = [{"id": "ref-upload1"}]
            server.upload_marked_attachments = [{"id": "marked1"}]
            server.upload_share_to_courses = [{"id": "101"}]
            server.upload_details = [{"id": "up1", "name": "document.pdf"}]
            server.upload_document_urls["up1"] = {"url": "https://example.invalid/document"}
            server.shared_resources_stat = {"total": 1}
            server.shared_resources_video_stat = [{"id": "video-stat1"}]
            server.save_resources_check = {"can_save": True}
            server.custom_knowledge_graph_stat = {"total": 1}
            server.knowledge_graph_kfs_subjects = [{"id": "kfs-subject1"}]
            server.knowledge_graph_import_info["101"] = {"status": "ready"}
            server.user_course_resource_folders["101"] = {"folders": [{"id": "folder1"}]}
            server.course_knowledge_bases["101"] = {"knowledge_bases": [{"id": "kb1"}]}
            server.course_knowledge_base_resources["101:kb1"] = [{"id": "resource1"}]
            server.h5_courseware_uploads["77:up1:url"] = {"url": "https://example.invalid/h5"}
            server.h5_courseware_uploads["77:up1:cmi"] = {"cmi": "ok"}
            server.submission_marked_attachments["sub1"] = {
                "marked_attachment_infos": [{"id": "marked1", "email": "student@example.com"}]
            }
            server.submission_marked_attachment_details["sub1:up1"] = {"marked_attachment": {"id": "marked1"}}
            server.submission_subject_marked_attachments["sub1:subject1"] = {"marked_attachment": {"id": "marked-subject1"}}
            server.my_notes = [{"id": "note1", "title": "Note"}]
            server.correction_books = [{"id": "book1", "title": "Correction"}]
            server.authz_courses = [{"id": "101", "role": "instructor"}]
            server.portal_logo = {"url": "https://example.invalid/logo.png"}
            server.export_blobs.update(
                {
                    "stat-students:101:csv": {
                        "body": b"stat-csv",
                        "filename": "course-stat.csv",
                        "content_type": "text/csv",
                    },
                    "stat-report:rollcall": {"body": b"rollcall-xlsx", "filename": "rollcall.xlsx"},
                    "stat-report:class-hours": {"body": b"class-hours-xlsx", "filename": "class-hours.xlsx"},
                    "department-user-attendance:org1": {
                        "body": b"attendance-xlsx",
                        "filename": "attendance.xlsx",
                    },
                    "department-attendance:org1": {
                        "body": b"department-attendance-xlsx",
                        "filename": "department-attendance.xlsx",
                    },
                    "stat-vtrses-data": {"body": b"vtrs-data-xlsx", "filename": "vtrs-data.xlsx"},
                    "ai-ppt-usage": {"body": b"ai-ppt-xlsx", "filename": "ai-ppt.xlsx"},
                    "air-credit:course": {"body": b"air-xlsx", "filename": "air.xlsx"},
                    "management-calendar": {"body": b"calendar-xlsx", "filename": "calendar.xlsx"},
                }
            )
            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                await server.login_session(session)
                stats = await fetch_teacher_course_statistics(
                    session,
                    endpoints=server.endpoints(),
                    course_id="101",
                    conditions={"keyword": "Student"},
                )
                air = await fetch_teacher_air_credit_report(
                    session,
                    endpoints=server.endpoints(),
                    course_id="101",
                    target="course",
                    conditions={"state": "active"},
                )
                meetings = await fetch_teacher_management_calendar_meetings(
                    session,
                    endpoints=server.endpoints(),
                    conditions={"keyword": "Weekly"},
                )
                calendar_meetings = await fetch_teacher_calendar_meetings(
                    session,
                    endpoints=server.endpoints(),
                )
                teaching_calendars = await fetch_teacher_teaching_calendars(
                    session,
                    endpoints=server.endpoints(),
                    keyword="Week",
                )
                vtrses = await fetch_teacher_vtrs_report(
                    session,
                    endpoints=server.endpoints(),
                    conditions={"keyword": "VTRS"},
                    need_stat=True,
                )
                departments = await fetch_teacher_department_report(
                    session,
                    endpoints=server.endpoints(),
                    conditions={"keyword": "Department"},
                )
                ai_ppt = await fetch_teacher_ai_ppt_report(
                    session,
                    endpoints=server.endpoints(),
                    conditions={"keyword": "User"},
                )
                platform = await fetch_teacher_platform_report(
                    session,
                    endpoints=server.endpoints(),
                    conditions={"keyword": "Room"},
                    department_ids="org1",
                    obe_params={"course_id": "101"},
                )
                org_bulletins = await fetch_teacher_org_bulletin_report(
                    session,
                    endpoints=server.endpoints(),
                    conditions={"unread": True},
                )
                catalog = await fetch_teacher_catalog_report(
                    session,
                    endpoints=server.endpoints(),
                    conditions={"keyword": "Catalog"},
                    fields="id,name",
                    org_id="org1",
                    response_key="users",
                )
                media = await fetch_teacher_media_report(
                    session,
                    endpoints=server.endpoints(),
                    course_id="101",
                    activity_id="77",
                    upload_id="up1",
                    conditions={"keyword": "Media"},
                    jwt="demo-jwt",
                    org_id="org1",
                )
                authoring = await fetch_teacher_authoring_report(
                    session,
                    endpoints=server.endpoints(),
                    course_id="101",
                    activity_id="77",
                    subject_id="subject1",
                    submission_id="sub1",
                    upload_id="up1",
                    knowledge_base_id="kb1",
                    conditions={"keyword": "Author"},
                    fields="id,name",
                )
                outline_notified = await notify_teacher_outline_editing(
                    session,
                    endpoints=server.endpoints(),
                    course_ids=["101"],
                    execute=True,
                    confirm=True,
                )
                courses_synced = await sync_teacher_courses_from_urp(
                    session,
                    endpoints=server.endpoints(),
                    course_ids=["101"],
                    execute=True,
                    confirm=True,
                )
                chinamcloud_updated = await update_teacher_chinamcloud_resources(
                    session,
                    endpoints=server.endpoints(),
                    resources=[{"id": "cloud1"}],
                    execute=True,
                    confirm=True,
                )
                course_outline_updated = await update_teacher_course_outline(
                    session,
                    endpoints=server.endpoints(),
                    course_id="101",
                    payload={"id": "101", "comment_chinese": "Intro"},
                    execute=True,
                    confirm=True,
                )
                outline_setting_created = await create_teacher_outline_setting(
                    session,
                    endpoints=server.endpoints(),
                    setting_id="3",
                    payload={"key": "objective", "title": "Objective"},
                    execute=True,
                    confirm=True,
                )
                outline_setting_updated = await update_teacher_outline_setting(
                    session,
                    endpoints=server.endpoints(),
                    setting_id="3",
                    payload={"key": "objective", "title": "Objective 2"},
                    execute=True,
                    confirm=True,
                )
                outline_setting_sorted = await sort_teacher_outline_setting(
                    session,
                    endpoints=server.endpoints(),
                    setting_id="3",
                    payload={"keys": ["comment_chinese", "objective"]},
                    execute=True,
                    confirm=True,
                )
                outline_option_deleted = await delete_teacher_outline_setting_option(
                    session,
                    endpoints=server.endpoints(),
                    setting_id="3",
                    option_key="objective",
                    execute=True,
                    confirm=True,
                )
                outline_setting_toggled = await toggle_teacher_outline_setting(
                    session,
                    endpoints=server.endpoints(),
                    execute=True,
                    confirm=True,
                )
                outline_required_updated = await update_teacher_outline_required_options(
                    session,
                    endpoints=server.endpoints(),
                    setting_id="3",
                    required_options=["comment_chinese"],
                    execute=True,
                    confirm=True,
                )
                enrollment_role_updated = await update_teacher_enrollment_role(
                    session,
                    endpoints=server.endpoints(),
                    enrollment_id="en1",
                    role="assistant_instructor",
                    role_id="role1",
                    execute=True,
                    confirm=True,
                )
                enrollments_role_updated = await update_teacher_enrollments_role(
                    session,
                    endpoints=server.endpoints(),
                    enrollment_ids=["en1", "en2"],
                    role="student",
                    execute=True,
                    confirm=True,
                )
                enrollment_deleted = await delete_teacher_enrollment(
                    session,
                    endpoints=server.endpoints(),
                    enrollment_id="en2",
                    execute=True,
                    confirm=True,
                )
                enrollments_deleted = await delete_teacher_enrollments(
                    session,
                    endpoints=server.endpoints(),
                    enrollment_ids=["en3", "en4"],
                    execute=True,
                    confirm=True,
                )
                calendar_create_dry = await create_teacher_calendar_meeting(
                    session,
                    endpoints=server.endpoints(),
                    payload={"title": "Dry"},
                )
                calendar_created = await create_teacher_calendar_meeting(
                    session,
                    endpoints=server.endpoints(),
                    payload={"id": "meeting2", "title": "Created"},
                    execute=True,
                    confirm=True,
                )
                calendar_updated = await update_teacher_calendar_meeting(
                    session,
                    endpoints=server.endpoints(),
                    meeting_id="meeting2",
                    payload={"title": "Updated"},
                    execute=True,
                    confirm=True,
                )
                calendar_deleted = await delete_teacher_calendar_meeting(
                    session,
                    endpoints=server.endpoints(),
                    meeting_id="meeting2",
                    execute=True,
                    confirm=True,
                )
                air_credit_create_dry = await create_teacher_air_credit_assignments(
                    session,
                    endpoints=server.endpoints(),
                    payload={"course_id": "101", "credits": 10},
                )
                air_credit_created = await create_teacher_air_credit_assignments(
                    session,
                    endpoints=server.endpoints(),
                    payload={"course_id": "101", "credits": 10},
                    execute=True,
                    confirm=True,
                )
                air_credit_updated = await update_teacher_air_credit_assignments(
                    session,
                    endpoints=server.endpoints(),
                    payload={"assignments": [{"course_id": "101", "credits": 12}]},
                    execute=True,
                    confirm=True,
                )
                air_credit_status = await update_teacher_air_credit_status(
                    session,
                    endpoints=server.endpoints(),
                    payload={"assign_ids": ["a1"], "assign_type": "course", "status": "active"},
                    execute=True,
                    confirm=True,
                )
                air_credit_cleared = await clear_teacher_air_credit_remaining_credits(
                    session,
                    endpoints=server.endpoints(),
                    payload={"assign_id": "a1", "assign_type": "course"},
                    execute=True,
                    confirm=True,
                )
                air_credit_limit = await update_teacher_air_credit_course_usage_limit(
                    session,
                    endpoints=server.endpoints(),
                    usage_limit=30,
                    execute=True,
                    confirm=True,
                )
                teaching_created = await create_teacher_teaching_calendar(
                    session,
                    endpoints=server.endpoints(),
                    course_id="101",
                    payload={"id": "tc2", "title": "Week 2"},
                    execute=True,
                    confirm=True,
                )
                teaching_updated = await update_teacher_teaching_calendar(
                    session,
                    endpoints=server.endpoints(),
                    calendar_id="tc2",
                    payload={"title": "Week 2 Updated"},
                    execute=True,
                    confirm=True,
                )
                teaching_deleted = await delete_teacher_teaching_calendar(
                    session,
                    endpoints=server.endpoints(),
                    calendar_id="tc2",
                    execute=True,
                    confirm=True,
                )
                with tempfile.TemporaryDirectory() as temp_dir:
                    output_dir = Path(temp_dir)
                    stat_export = await download_teacher_course_stat_students_export(
                        session,
                        endpoints=server.endpoints(),
                        course_id="101",
                        file_type="csv",
                        conditions={"keyword": "Student"},
                        output_path=output_dir / "course-stat.csv",
                    )
                    stat_report = await download_teacher_stat_report_export(
                        session,
                        endpoints=server.endpoints(),
                        kind="rollcall",
                        conditions={"academic_year_ids": [112]},
                        output_path=output_dir / "rollcall.xlsx",
                    )
                    class_hours = await download_teacher_stat_report_export(
                        session,
                        endpoints=server.endpoints(),
                        kind="class-hours",
                        conditions={"course_id": "101"},
                        output_path=output_dir / "class-hours.xlsx",
                    )
                    attendance = await download_teacher_department_user_attendance_export(
                        session,
                        endpoints=server.endpoints(),
                        department_id="org1",
                        conditions={"keyword": "Student"},
                        output_path=output_dir / "attendance.xlsx",
                    )
                    department_attendance_dry = await download_teacher_department_attendance_export(
                        session,
                        endpoints=server.endpoints(),
                        department_id="org1",
                        payload={"keyword": "Department"},
                        output_path=output_dir / "department-attendance-dry.xlsx",
                    )
                    department_attendance = await download_teacher_department_attendance_export(
                        session,
                        endpoints=server.endpoints(),
                        department_id="org1",
                        payload={"keyword": "Department"},
                        output_path=output_dir / "department-attendance.xlsx",
                        execute=True,
                        confirm=True,
                    )
                    vtrs_data = await download_teacher_stat_vtrses_data_export(
                        session,
                        endpoints=server.endpoints(),
                        conditions={"keyword": "VTRS"},
                        output_path=output_dir / "vtrs-data.xlsx",
                    )
                    ai_ppt_usage_dry = await download_teacher_ai_ppt_user_usage_export(
                        session,
                        endpoints=server.endpoints(),
                        payload={"keyword": "User"},
                        output_path=output_dir / "ai-ppt-dry.xlsx",
                    )
                    ai_ppt_usage = await download_teacher_ai_ppt_user_usage_export(
                        session,
                        endpoints=server.endpoints(),
                        payload={"keyword": "User"},
                        output_path=output_dir / "ai-ppt.xlsx",
                        execute=True,
                        confirm=True,
                    )
                    air_dry = await download_teacher_air_credit_stats_export(
                        session,
                        endpoints=server.endpoints(),
                        target="course",
                        payload={"start_date": "2026-01-01"},
                        output_path=output_dir / "air-dry.xlsx",
                    )
                    air_export = await download_teacher_air_credit_stats_export(
                        session,
                        endpoints=server.endpoints(),
                        target="course",
                        payload={"start_date": "2026-01-01"},
                        output_path=output_dir / "air.xlsx",
                        execute=True,
                        confirm=True,
                    )
                    calendar_export_dry = await download_teacher_management_calendar_meeting_export(
                        session,
                        endpoints=server.endpoints(),
                        payload={"keyword": "Weekly"},
                        output_path=output_dir / "calendar-dry.xlsx",
                    )
                    calendar_export = await download_teacher_management_calendar_meeting_export(
                        session,
                        endpoints=server.endpoints(),
                        payload={"keyword": "Weekly"},
                        output_path=output_dir / "calendar.xlsx",
                        execute=True,
                        confirm=True,
                    )
                    self.assertEqual((output_dir / "course-stat.csv").read_bytes(), b"stat-csv")
                    self.assertEqual((output_dir / "rollcall.xlsx").read_bytes(), b"rollcall-xlsx")
                    self.assertEqual((output_dir / "class-hours.xlsx").read_bytes(), b"class-hours-xlsx")
                    self.assertEqual((output_dir / "attendance.xlsx").read_bytes(), b"attendance-xlsx")
                    self.assertEqual(
                        (output_dir / "department-attendance.xlsx").read_bytes(),
                        b"department-attendance-xlsx",
                    )
                    self.assertEqual((output_dir / "vtrs-data.xlsx").read_bytes(), b"vtrs-data-xlsx")
                    self.assertEqual((output_dir / "ai-ppt.xlsx").read_bytes(), b"ai-ppt-xlsx")
                    self.assertEqual((output_dir / "air.xlsx").read_bytes(), b"air-xlsx")
                    self.assertEqual((output_dir / "calendar.xlsx").read_bytes(), b"calendar-xlsx")

        self.assertEqual(stats.status, "ok")
        self.assertIn("course_stat_students", stats.to_dict()["supported"])
        self.assertIn("course_tpdoe_stat_students", stats.to_dict()["supported"])
        self.assertIn("courses_stats", stats.to_dict()["supported"])
        self.assertIn("stat_activities_for_courses", stats.to_dict()["supported"])
        for endpoint_name in (
            "courses_homeworks_submission_status",
            "courses_settings",
            "exam_submissions",
            "scores_zip_status",
            "course_stat_export_zip_status",
            "homework_zip_status",
            "stat_bulletins",
            "stat_h5_courseware",
            "stat_lesson_rollcall",
            "stat_materials",
            "stat_orgs",
            "stat_scorm",
            "stat_semester",
            "stat_student_rollcall",
            "stat_students",
            "stat_teacher_rollcall",
            "stat_user_info",
            "stat_video",
            "stat_videos",
            "stat_vtrs_enable_status",
            "stat_vtrses_count_info",
            "stat_weblinks",
            "statistic",
            "user_course_certification_scores",
        ):
            self.assertIn(endpoint_name, stats.to_dict()["supported"])
        self.assertEqual(air.status, "ok")
        self.assertIn("air_credit_course_stats", air.to_dict()["supported"])
        self.assertIn("air_credit_user_token", air.to_dict()["supported"])
        self.assertIn("air_credit_users", air.to_dict()["supported"])
        self.assertIn("air_credit_courses", air.to_dict()["supported"])
        self.assertIn("air_credit_audits", air.to_dict()["supported"])
        self.assertIn("air_credit_instructor_current_semester_courses", air.to_dict()["supported"])
        self.assertEqual(meetings.status, "ok")
        self.assertEqual(calendar_meetings.status, "ok")
        self.assertEqual(teaching_calendars.status, "ok")
        self.assertEqual(vtrses.status, "ok")
        self.assertIn("stat_vtrses_data", vtrses.to_dict()["supported"])
        self.assertIn("vtrses_access_code", vtrses.to_dict()["supported"])
        self.assertEqual(departments.status, "ok")
        self.assertIn("department_attendance", departments.to_dict()["supported"])
        self.assertEqual(ai_ppt.status, "ok")
        self.assertIn("ai_ppt_usage", ai_ppt.to_dict()["supported"])
        self.assertEqual(platform.status, "ok")
        self.assertIn("org_lang_settings", platform.to_dict()["supported"])
        self.assertIn("program_course_programs", platform.to_dict()["supported"])
        self.assertIn("portal_classifications", platform.to_dict()["supported"])
        self.assertIn("authz_permissions", platform.to_dict()["supported"])
        self.assertIn("authz_course_permissions", platform.to_dict()["supported"])
        self.assertIn("authz_user_roles", platform.to_dict()["supported"])
        self.assertIn("my_classes", platform.to_dict()["supported"])
        self.assertIn("my_teaching_classes", platform.to_dict()["supported"])
        self.assertIn("task_last", platform.to_dict()["supported"])
        self.assertIn("in_progress_homeworks", platform.to_dict()["supported"])
        self.assertIn("virtual_classroom_resources", platform.to_dict()["supported"])
        self.assertIn("todos", platform.to_dict()["supported"])
        self.assertIn("jobs", platform.to_dict()["supported"])
        self.assertIn("inclass_report", platform.to_dict()["supported"])
        self.assertIn("sign_in_stats", platform.to_dict()["supported"])
        self.assertIn("user_recently_visited_courses", platform.to_dict()["supported"])
        self.assertIn("alerts", platform.to_dict()["supported"])
        self.assertIn("alert_logs", platform.to_dict()["supported"])
        self.assertIn("alert_members", platform.to_dict()["supported"])
        self.assertIn("instruction_team_meeting", platform.to_dict()["supported"])
        self.assertIn("org_change_plan_list", platform.to_dict()["supported"])
        self.assertIn("third_party_info", platform.to_dict()["supported"])
        self.assertIn("topics_latest", platform.to_dict()["supported"])
        self.assertIn("user_index_courses_info_status", platform.to_dict()["supported"])
        self.assertIn("user_index_org_summary", platform.to_dict()["supported"])
        self.assertIn("user_profile_stat", platform.to_dict()["supported"])
        self.assertEqual(org_bulletins.status, "ok")
        self.assertIn("org_bulletins_latest", org_bulletins.to_dict()["supported"])
        self.assertEqual(catalog.status, "ok")
        self.assertIn("catalog_courses", catalog.to_dict()["supported"])
        self.assertIn("catalog_users_without_authz_roles", catalog.to_dict()["supported"])
        self.assertIn("catalog_course_cover_list", catalog.to_dict()["supported"])
        self.assertIn("catalog_course_shared_records", catalog.to_dict()["supported"])
        self.assertIn("catalog_course_certification", catalog.to_dict()["supported"])
        self.assertIn("catalog_courses_count", catalog.to_dict()["supported"])
        self.assertIn("catalog_courses_public", catalog.to_dict()["supported"])
        self.assertIn("catalog_certifications", catalog.to_dict()["supported"])
        self.assertIn("catalog_certifications_for_management", catalog.to_dict()["supported"])
        self.assertIn("catalog_course_subjects", catalog.to_dict()["supported"])
        self.assertIn("catalog_users", catalog.to_dict()["supported"])
        self.assertIn("catalog_warning_students", catalog.to_dict()["supported"])
        self.assertIn("catalog_interactions", catalog.to_dict()["supported"])
        self.assertIn("catalog_interaction_vote", catalog.to_dict()["supported"])
        self.assertIn("catalog_campus_subject_lib_classification_counts", catalog.to_dict()["supported"])
        self.assertIn("catalog_campus_subject_lib_subjects", catalog.to_dict()["supported"])
        self.assertEqual(media.status, "ok")
        self.assertIn("media_lark_files", media.to_dict()["supported"])
        self.assertIn("media_public_resources", media.to_dict()["supported"])
        self.assertIn("media_caption_task_progress", media.to_dict()["supported"])
        self.assertIn("media_wedrive_files", media.to_dict()["supported"])
        self.assertIn("media_tencent_meeting_statistics", media.to_dict()["supported"])
        self.assertIn("media_video_quizzes", media.to_dict()["supported"])
        self.assertIn("media_upload_preview", media.to_dict()["supported"])
        self.assertIn("media_upload_audio", media.to_dict()["supported"])
        self.assertIn("media_shanghaitech_lib_resources", media.to_dict()["supported"])
        self.assertIn("media_video_suite_comments", media.to_dict()["supported"])
        self.assertEqual(authoring.status, "ok")
        self.assertIn("authoring_project", authoring.to_dict()["supported"])
        self.assertIn("authoring_projects", authoring.to_dict()["supported"])
        self.assertIn("authoring_blueprint", authoring.to_dict()["supported"])
        self.assertIn("authoring_outline_setting", authoring.to_dict()["supported"])
        self.assertIn("authoring_h5_courseware_upload_url", authoring.to_dict()["supported"])
        self.assertIn("authoring_upload_details_query", authoring.to_dict()["supported"])
        self.assertIn("authoring_upload_document_url", authoring.to_dict()["supported"])
        self.assertIn("authoring_custom_knowledge_graph_stat", authoring.to_dict()["supported"])
        self.assertIn("authoring_knowledge_graph_kfs_subjects", authoring.to_dict()["supported"])
        self.assertIn("authoring_knowledge_graph_forest_stats", authoring.to_dict()["supported"])
        self.assertIn("authoring_shared_resources_admin_to_other_orgs", authoring.to_dict()["supported"])
        self.assertIn("authoring_knowledge_graph_import_info", authoring.to_dict()["supported"])
        self.assertIn("authoring_course_knowledge_base_resources", authoring.to_dict()["supported"])
        self.assertIn("authoring_submission_subject_marked_attachments", authoring.to_dict()["supported"])
        self.assertIn("authoring_my_notes", authoring.to_dict()["supported"])
        self.assertIn("authoring_authz_courses", authoring.to_dict()["supported"])
        self.assertEqual(outline_notified.status, "ok")
        self.assertEqual(courses_synced.status, "ok")
        self.assertEqual(chinamcloud_updated.status, "ok")
        self.assertEqual(course_outline_updated.status, "ok")
        self.assertEqual(outline_setting_created.status, "ok")
        self.assertEqual(outline_setting_updated.status, "ok")
        self.assertEqual(outline_setting_sorted.status, "ok")
        self.assertEqual(outline_option_deleted.status, "ok")
        self.assertEqual(outline_setting_toggled.status, "ok")
        self.assertEqual(outline_required_updated.status, "ok")
        self.assertEqual(enrollment_role_updated.status, "ok")
        self.assertEqual(enrollments_role_updated.status, "ok")
        self.assertEqual(enrollment_deleted.status, "ok")
        self.assertEqual(enrollments_deleted.status, "ok")
        self.assertEqual(calendar_create_dry.status, "dry_run")
        self.assertEqual(calendar_created.status, "ok")
        self.assertEqual(calendar_updated.status, "ok")
        self.assertEqual(calendar_deleted.status, "ok")
        self.assertEqual(air_credit_create_dry.status, "dry_run")
        self.assertEqual(air_credit_created.status, "ok")
        self.assertEqual(air_credit_updated.status, "ok")
        self.assertEqual(air_credit_status.status, "ok")
        self.assertEqual(air_credit_cleared.status, "ok")
        self.assertEqual(air_credit_limit.status, "ok")
        self.assertEqual(teaching_created.status, "ok")
        self.assertEqual(teaching_updated.status, "ok")
        self.assertEqual(teaching_deleted.status, "ok")
        self.assertEqual(stat_export.status, "ok")
        self.assertEqual(stat_report.status, "ok")
        self.assertEqual(class_hours.status, "ok")
        self.assertEqual(attendance.status, "ok")
        self.assertEqual(department_attendance_dry.status, "dry_run")
        self.assertEqual(department_attendance.status, "ok")
        self.assertEqual(vtrs_data.status, "ok")
        self.assertEqual(ai_ppt_usage_dry.status, "dry_run")
        self.assertEqual(ai_ppt_usage.status, "ok")
        self.assertEqual(air_dry.status, "dry_run")
        self.assertEqual(air_export.status, "ok")
        self.assertEqual(calendar_export_dry.status, "dry_run")
        self.assertEqual(calendar_export.status, "ok")
        self.assertEqual(server.outline_notifications[0]["body"], {"course_ids": ["101"]})
        self.assertEqual(server.synced_courses_from_urp[0]["body"], {"course_ids": ["101"]})
        self.assertEqual(server.chinamcloud_uploads[0]["body"], {"resources": [{"id": "cloud1"}]})
        self.assertEqual(server.updated_course_outlines[0]["body"], {"id": "101", "comment_chinese": "Intro"})
        self.assertEqual(
            [item["action"] for item in server.outline_setting_actions],
            [
                "create_outline_setting",
                "update_outline_setting",
                "sort_outline_setting",
                "delete_outline_setting_option",
                "toggle_outline_setting",
                "update_outline_required_options",
            ],
        )
        self.assertEqual(server.outline_setting_actions[-1]["body"], {"required_options": ["comment_chinese"]})
        self.assertEqual(
            server.updated_enrollment_roles[0]["body"],
            {"role": "assistant_instructor", "role_id": "role1"},
        )
        self.assertEqual(server.updated_enrollments_roles[0]["body"], {"enrollment_ids": ["en1", "en2"], "role": "student"})
        self.assertEqual(server.deleted_enrollments[0], {"enrollment_id": "en2", "body": {}})
        self.assertEqual(server.deleted_enrollments[1], {"body": {"enrollment_ids": ["en3", "en4"]}})
        self.assertEqual(server.course_stat_student_requests[0]["body"], {"keyword": "Student"})
        self.assertEqual(server.created_calendar_meetings[0]["body"], {"id": "meeting2", "title": "Created"})
        self.assertEqual(server.updated_calendar_meetings[0]["body"], {"title": "Updated"})
        self.assertEqual(server.deleted_calendar_meetings, ["meeting2"])
        self.assertEqual(server.air_credit_action_requests[0]["body"], {"assignments": {"course_id": "101", "credits": 10}})
        self.assertEqual(
            server.air_credit_action_requests[1]["body"],
            {"assignments": [{"course_id": "101", "credits": 12}]},
        )
        self.assertEqual(server.air_credit_action_requests[2]["body"]["status"], "active")
        self.assertEqual(server.air_credit_action_requests[3]["body"], {"assign_id": "a1", "assign_type": "course"})
        self.assertEqual(server.air_credit_action_requests[4]["body"], {"usage_limit": "30"})
        self.assertEqual(server.created_teaching_calendars[0]["body"], {"id": "tc2", "title": "Week 2"})
        self.assertEqual(server.updated_teaching_calendars[0]["body"], {"title": "Week 2 Updated"})
        self.assertEqual(server.deleted_teaching_calendars, ["tc2"])
        self.assertEqual(server.stat_export_requests[0]["kind"], "rollcall")
        self.assertEqual(server.stat_export_requests[2]["department_id"], "org1")
        self.assertEqual(server.stat_export_requests[3]["kind"], "department_attendance")
        self.assertEqual(server.stat_export_requests[4]["kind"], "stat_vtrses_data")
        self.assertEqual(server.department_requests[-1]["body"], {"keyword": "Department"})
        self.assertEqual(server.ai_ppt_requests[0]["body"], {"keyword": "User"})
        self.assertEqual(server.ai_ppt_requests[1]["body"], {"keyword": "User"})
        self.assertEqual(server.air_credit_export_requests[0]["body"], {"start_date": "2026-01-01"})
        self.assertEqual(server.management_calendar_export_requests[0]["body"], {"keyword": "Weekly"})

    async def test_teacher_download_helpers_write_binary_files_and_protect_outputs(self) -> None:
        async with FakeTronServer() as server:
            server.download_blobs.update(
                {
                    "upload:up1": {"body": b"upload-body", "filename": "lesson.txt", "content_type": "text/plain"},
                    "upload-thumbnail:up1": {"body": b"thumb", "filename": "thumb.jpg", "content_type": "image/jpeg"},
                    "upload-modified-image:up1": {
                        "body": b"modified",
                        "filename": "avatar.jpg",
                        "content_type": "image/jpeg",
                    },
                    "upload-swf:up1": {
                        "body": b"swf",
                        "filename": "slides.swf",
                        "content_type": "application/x-shockwave-flash",
                    },
                    "upload-reference:ref1": {
                        "body": b"reference",
                        "filename": "reference.pdf",
                        "content_type": "application/pdf",
                    },
                    "shared-resource:sr1": {
                        "body": b"shared",
                        "filename": "shared.pdf",
                        "content_type": "application/pdf",
                    },
                    "shared-resource-to:sr1": {
                        "body": b"shared-to",
                        "filename": "shared-to.pdf",
                        "content_type": "application/pdf",
                    },
                    "wedrive:file1": {"body": b"wedrive", "filename": "drive.docx"},
                    "third-part-preview:tp1": {"body": b"third-preview", "filename": "preview.png"},
                    "third-part-thumbnail:tp1": {"body": b"third-thumb", "filename": "thumbnail.png"},
                }
            )
            with tempfile.TemporaryDirectory() as temp_dir:
                output_dir = Path(temp_dir) / "downloads"
                output_dir.mkdir()
                async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                    await server.login_session(session)
                    upload = await download_teacher_upload_blob(
                        session,
                        endpoints=server.endpoints(),
                        upload_id="up1",
                        output_path=output_dir,
                    )
                    thumbnail = await download_teacher_upload_thumbnail(
                        session,
                        endpoints=server.endpoints(),
                        upload_id="up1",
                        output_path=output_dir / "thumb.out",
                    )
                    modified = await download_teacher_upload_modified_image(
                        session,
                        endpoints=server.endpoints(),
                        upload_id="up1",
                        output_path=output_dir / "modified.out",
                    )
                    swf = await download_teacher_upload_swf(
                        session,
                        endpoints=server.endpoints(),
                        upload_id="up1",
                        output_path=output_dir / "slides.out",
                    )
                    reference = await download_teacher_upload_reference_blob(
                        session,
                        endpoints=server.endpoints(),
                        reference_id="ref1",
                        output_path=output_dir / "reference.out",
                    )
                    shared = await download_teacher_shared_resource_blob(
                        session,
                        endpoints=server.endpoints(),
                        resource_id="sr1",
                        output_path=output_dir / "shared.out",
                    )
                    shared_to = await download_teacher_shared_resource_blob(
                        session,
                        endpoints=server.endpoints(),
                        resource_id="sr1",
                        share_to=True,
                        output_path=output_dir / "shared-to.out",
                    )
                    wedrive = await download_teacher_wedrive_file(
                        session,
                        endpoints=server.endpoints(),
                        file_id="file1",
                        output_path=output_dir / "wedrive.out",
                    )
                    third_preview = await download_teacher_third_part_upload(
                        session,
                        endpoints=server.endpoints(),
                        upload_id="tp1",
                        output_path=output_dir / "third-preview.out",
                    )
                    third_thumbnail = await download_teacher_third_part_upload(
                        session,
                        endpoints=server.endpoints(),
                        upload_id="tp1",
                        kind="thumbnail",
                        output_path=output_dir / "third-thumbnail.out",
                    )
                    generic = await download_teacher_api_path(
                        session,
                        endpoints=server.endpoints(),
                        path="/api/uploads/up1/blob?preview=true",
                        output_path=output_dir / "generic.out",
                    )
                    existing_path = output_dir / "existing.out"
                    existing_path.write_bytes(b"old")
                    blocked = await download_teacher_shared_resource_blob(
                        session,
                        endpoints=server.endpoints(),
                        resource_id="sr1",
                        output_path=existing_path,
                    )

                results = [
                    upload,
                    thumbnail,
                    modified,
                    swf,
                    reference,
                    shared,
                    shared_to,
                    wedrive,
                    third_preview,
                    third_thumbnail,
                    generic,
                ]
                self.assertEqual([result.status for result in results], ["ok"] * len(results))
                self.assertEqual(Path(upload.output_path).name, "lesson.txt")
                self.assertEqual(Path(upload.output_path).read_bytes(), b"upload-body")
                self.assertEqual(Path(shared.output_path).read_bytes(), b"shared")
                self.assertEqual(Path(shared_to.output_path).read_bytes(), b"shared-to")
                self.assertEqual(Path(third_thumbnail.output_path).read_bytes(), b"third-thumb")
                self.assertEqual(blocked.status, "output_exists")
                self.assertEqual(existing_path.read_bytes(), b"old")

    async def test_teacher_upload_file_dry_run_and_execute_local_storage(self) -> None:
        async with FakeTronServer() as server:
            with tempfile.TemporaryDirectory() as temp_dir:
                file_path = Path(temp_dir) / "lesson.txt"
                file_path.write_text("hello upload", encoding="utf-8")
                async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                    await server.login_session(session)
                    dry_run = await upload_teacher_file(
                        session,
                        endpoints=server.endpoints(),
                        file_path=file_path,
                        metadata={"parent_id": "folder1"},
                    )
                    uploaded = await upload_teacher_file(
                        session,
                        endpoints=server.endpoints(),
                        file_path=file_path,
                        metadata={"parent_id": "folder1"},
                        name="renamed.txt",
                        execute=True,
                        confirm=True,
                    )

                self.assertEqual(dry_run.status, "dry_run")
                self.assertEqual(uploaded.status, "ok")
                self.assertEqual(uploaded.http_status, 201)
                self.assertEqual(uploaded.upload_http_status, 200)
                self.assertEqual(uploaded.filename, "renamed.txt")
                self.assertEqual(uploaded.content_type, "text/plain")
                self.assertEqual(server.upload_preuploads[0]["name"], "renamed.txt")
                self.assertEqual(server.upload_preuploads[0]["parent_id"], "folder1")
                self.assertEqual(server.uploaded_files[0]["filename"], "renamed.txt")
                self.assertEqual(server.uploaded_files[0]["body"], b"hello upload")

    async def test_teacher_export_download_helpers_write_binary_files(self) -> None:
        async with FakeTronServer() as server:
            server.export_blobs.update(
                {
                    "questionnaire:q1": {"body": b"questionnaire-xlsx", "filename": "questionnaire.xlsx"},
                    "topic:t1": {"body": b"topic-xlsx", "filename": "topic.xlsx"},
                    "category:cat1": {"body": b"category-xlsx", "filename": "category.xlsx"},
                    "shared-resource-subject-lib:sr1": {"body": b"subject-lib-xlsx", "filename": "subject-lib.xlsx"},
                    "shared-resource-video-stat": {"body": b"resource-video-xlsx", "filename": "resource-video.xlsx"},
                    "stat-courses:xlsx": {"body": b"stat-courses-xlsx", "filename": "stat-courses.xlsx"},
                    "stat-attendance:xlsx": {"body": b"stat-attendance-xlsx", "filename": "stat-attendance.xlsx"},
                    "cloud-classroom-live-classes": {"body": b"cloud-classes-xlsx", "filename": "cloud.xlsx"},
                    "tencent-meeting-statistics": {"body": b"tencent-xlsx", "filename": "tencent.xlsx"},
                }
            )
            with tempfile.TemporaryDirectory() as temp_dir:
                output_dir = Path(temp_dir)
                async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                    await server.login_session(session)
                    questionnaire = await download_teacher_questionnaire_export(
                        session,
                        endpoints=server.endpoints(),
                        questionnaire_id="q1",
                        output_path=output_dir / "questionnaire.xlsx",
                    )
                    topic_preview = await download_teacher_topic_export(
                        session,
                        endpoints=server.endpoints(),
                        topic_id="t1",
                        output_path=output_dir / "topic-preview.xlsx",
                    )
                    topic = await download_teacher_topic_export(
                        session,
                        endpoints=server.endpoints(),
                        topic_id="t1",
                        output_path=output_dir / "topic.xlsx",
                        execute=True,
                        confirm=True,
                    )
                    category = await download_teacher_category_topics_export(
                        session,
                        endpoints=server.endpoints(),
                        category_id="cat1",
                        output_path=output_dir / "category.xlsx",
                        execute=True,
                        confirm=True,
                    )
                    shared = await download_teacher_shared_resource_subject_lib_export(
                        session,
                        endpoints=server.endpoints(),
                        resource_id="sr1",
                        output_path=output_dir / "subject-lib.xlsx",
                    )
                    shared_stat = await download_teacher_shared_resource_stat_export(
                        session,
                        endpoints=server.endpoints(),
                        output_path=output_dir / "resource-stat.xlsx",
                        conditions={"keyword": "resource"},
                    )
                    shared_video = await download_teacher_shared_resource_video_stat_export(
                        session,
                        endpoints=server.endpoints(),
                        output_path=output_dir / "resource-video.xlsx",
                        conditions={"keyword": "video"},
                    )
                    stat_courses_preview = await download_teacher_stat_courses_export_to(
                        session,
                        endpoints=server.endpoints(),
                        file_type="xlsx",
                        payload={"academic_year_ids": [112]},
                        output_path=output_dir / "stat-courses-preview.xlsx",
                    )
                    stat_courses = await download_teacher_stat_courses_export_to(
                        session,
                        endpoints=server.endpoints(),
                        file_type="xlsx",
                        payload={"academic_year_ids": [112]},
                        output_path=output_dir / "stat-courses.xlsx",
                        execute=True,
                        confirm=True,
                    )
                    stat_attendance = await download_teacher_stat_attendance_export_to(
                        session,
                        endpoints=server.endpoints(),
                        file_type="xlsx",
                        payload={"academic_year_ids": 112, "semester_ids": 2},
                        output_path=output_dir / "stat-attendance.xlsx",
                        execute=True,
                        confirm=True,
                    )
                    cloud = await download_teacher_cloud_classroom_live_classes_export(
                        session,
                        endpoints=server.endpoints(),
                        output_path=output_dir / "cloud.xlsx",
                        order_by="start_time",
                        conditions={"keyword": "cloud"},
                    )
                    tencent = await download_teacher_tencent_meeting_statistics_export(
                        session,
                        endpoints=server.endpoints(),
                        output_path=output_dir / "tencent.xlsx",
                        conditions={"keyword": "meeting"},
                    )
                    generic = await download_teacher_api_request(
                        session,
                        endpoints=server.endpoints(),
                        method="GET",
                        path="/api/questionnaire/q1/export/excel",
                        output_path=output_dir / "generic.xlsx",
                        filename_hint="generic.xlsx",
                    )

                self.assertEqual(questionnaire.status, "ok")
                self.assertEqual(topic_preview.status, "dry_run")
                self.assertEqual(topic.status, "ok")
                self.assertEqual(category.status, "ok")
                self.assertEqual(shared.status, "ok")
                self.assertEqual(shared_stat.status, "ok")
                self.assertEqual(shared_video.status, "ok")
                self.assertEqual(stat_courses_preview.status, "dry_run")
                self.assertEqual(stat_courses.status, "ok")
                self.assertEqual(stat_attendance.status, "ok")
                self.assertEqual(cloud.status, "ok")
                self.assertEqual(tencent.status, "ok")
                self.assertEqual(generic.status, "ok")
                self.assertEqual((output_dir / "questionnaire.xlsx").read_bytes(), b"questionnaire-xlsx")
                self.assertEqual((output_dir / "topic.xlsx").read_bytes(), b"topic-xlsx")
                self.assertEqual((output_dir / "category.xlsx").read_bytes(), b"category-xlsx")
                self.assertEqual((output_dir / "subject-lib.xlsx").read_bytes(), b"subject-lib-xlsx")
                self.assertTrue((output_dir / "resource-stat.xlsx").read_bytes())
                self.assertEqual((output_dir / "resource-video.xlsx").read_bytes(), b"resource-video-xlsx")
                self.assertEqual((output_dir / "stat-courses.xlsx").read_bytes(), b"stat-courses-xlsx")
                self.assertEqual((output_dir / "stat-attendance.xlsx").read_bytes(), b"stat-attendance-xlsx")
                self.assertEqual((output_dir / "cloud.xlsx").read_bytes(), b"cloud-classes-xlsx")
                self.assertEqual((output_dir / "tencent.xlsx").read_bytes(), b"tencent-xlsx")
                self.assertEqual((output_dir / "generic.xlsx").read_bytes(), b"questionnaire-xlsx")
                self.assertIn(
                    "shared_resource_video_stat",
                    [request["name"] for request in server.export_requests],
                )
                self.assertEqual(
                    server.stat_export_requests[-2]["body"],
                    {"academic_year_ids": [112]},
                )
                self.assertEqual(
                    server.stat_export_requests[-1]["body"],
                    {"academic_year_ids": [112], "semester_ids": [2]},
                )

    async def test_activity_score_reports_and_guarded_teacher_actions(self) -> None:
        async with FakeTronServer() as server:
            server.courses = [{"id": 101, "name": "Teaching", "roles": ["instructor"]}]
            server.course_details["101"] = {"id": 101, "name": "Teaching", "allow_update_basic_info": True}
            server.course_enrollments["101"] = [
                {"id": 1, "roles": ["instructor"], "user": {"user_no": "teacher"}},
                {"id": 2, "roles": ["student"], "user": {"email": "student@example.com", "user_no": "S001"}},
            ]
            server.course_custom_score_items["101"] = [{"id": "10", "name": "Participation"}]
            server.course_edu_score_rates["101"] = {"weights": {"homework": 40}}
            server.course_edu_score_submit_logs["101"] = [{"id": 1, "status": "draft"}]
            server.rubrics = [{"id": "3", "name": "Rubric", "conditions": []}]
            server.activity_comments["77"] = [{"id": 1, "email": "student@example.com", "body": "private"}]
            server.activity_forum_scores["77"] = [{"student_id": 2, "score": 80, "user_no": "S001"}]
            server.activity_resources["77"] = [
                {"id": "r1", "title": "Resource", "email": "student@example.com", "user_no": "S001"}
            ]
            server.activity_uploads_licenses["77"] = {"activity_id": "77", "licenses": [{"id": "cc"}]}
            server.completion_criteria["101:homework"] = {
                "course_id": "101",
                "activity_type": "homework",
                "completion_criteria": [{"id": "crit1"}],
            }
            server.course_completion_criteria["101"] = {
                "activity_publish_setting": {"homework": "unpublished"},
                "homework": {"completion_criteria": [{"id": "crit1"}], "has_completion_criterion": True},
            }
            server.course_packages["101"] = [{"id": "cp1", "title": "Package"}]
            server.course_package_statuses["101"] = {"status": "ready", "course_package_id": "cp1"}
            server.course_package_courses["cp1"] = {"course_package_id": "cp1", "course": {"id": "101"}}
            server.courseware_quizzes["77"] = [{"id": "cwq1", "title": "Courseware Quiz"}]
            server.courseware_quiz_subjects["cwq1"] = [{"id": "cw-sub1", "sort": 1, "type": "single_choice"}]
            server.courseware_quiz_settings = {"setting": {"single": 3, "multiple": 2}}
            server.subject_libs = [{"id": "lib1", "title": "Personal Bank", "type": "exam"}]
            server.course_subject_libs["101"] = [{"id": "course-lib1", "title": "Course Bank", "type": "exam"}]
            server.questionnaire_subject_libs = [{"id": "qlib1", "title": "Survey Bank", "type": "questionnaire"}]
            server.subject_lib_subjects["lib1"] = [{"id": "sub1", "type": "single_choice", "description": "Question"}]
            server.subject_lib_statistics["lib1"] = {
                "page": 1,
                "page_size": 20,
                "exam_subject_statistics": [{"id": "sub1", "type": "single_choice"}],
            }
            server.subject_lib_knowledge_nodes["lib1"] = [{"id": "node1", "name": "Basics"}]
            server.subject_lib_folders["101"] = [{"id": "folder1", "title": "Folder"}]
            server.course_topic_categories["101"] = [{"id": "cat1", "title": "General"}]
            server.forum_categories["cat1"] = {"id": "cat1", "topics": [{"id": "topic1", "title": "Hello"}]}
            server.activity_dependents["77"] = True
            server.activity_delete_checks["77:"] = {"activity_id": "77", "can_delete": True}
            server.homework_duplicate_detect_tasks["77"] = [{"id": "dup1", "status": "finished"}]
            server.exams["1"] = {"id": "1", "title": "Quiz", "email": "student@example.com"}
            server.exam_make_up_records["1"] = {"records": [{"id": "makeup1", "student_id": 2}]}
            server.exam_qualification_checks["1"] = {"qualification": {"qualified": True}}
            server.examinee_actions["1"] = [{"id": 1, "student_id": 2, "user_no": "S001"}]
            server.course_questionnaires["101"] = [{"id": "q1", "title": "Survey"}]
            server.course_questionnaire_scores["101"] = [{"questionnaire_id": "q1", "score": 5}]
            server.course_estimates["101"] = [{"id": "ce1", "title": "Evaluation"}]
            server.course_estimate_replies_by_course["101"] = [{"id": "cer1", "course_estimate_id": "ce1"}]
            server.course_estimate_replies["ce1"] = [
                {"id": "cer1", "body": "Reply", "email": "student@example.com"}
            ]
            server.course_estimate_users["ce1:2"] = {
                "course_estimate_id": "ce1",
                "user_id": "2",
                "email": "student@example.com",
                "answer": "private",
            }
            server.questionnaires["q1"] = {"id": "q1", "title": "Survey", "email": "student@example.com"}
            server.questionnaire_subjects["q1"] = [
                {"id": "qs1", "type": "single_choice", "description": "Question"}
            ]
            server.questionnaire_previews["q1"] = [{"id": "qs1", "type": "single_choice"}]
            server.questionnaire_logs["q1"] = [{"id": "log1", "action": "created"}]
            server.questionnaire_submissions["q1:qs1"] = {
                "offset": 0,
                "limit": 20,
                "count": 1,
                "submissions": [{"id": "submission1", "email": "student@example.com"}],
            }
            server.classrooms["c1"] = {"id": "c1", "title": "Pop Quiz", "email": "student@example.com"}
            server.classroom_subject_stats["c1"] = [{"id": "sub1", "answered": 1}]
            server.classroom_score_lists["c1"] = [{"student_id": 2, "score": 91, "user_no": "S001"}]
            server.classroom_examinees["c1"] = [{"id": 2, "email": "student@example.com"}]
            async with aiohttp.ClientSession(cookie_jar=aiohttp.CookieJar(unsafe=True)) as session:
                await server.login_session(session)
                scores = await build_teacher_course_report(
                    session,
                    endpoints=server.endpoints(),
                    course_id="101",
                    endpoint_names=(
                        "score_status",
                        "announce_score_settings",
                        "custom_score_items",
                        "score_ranks",
                        "edu_score_rate",
                        "edu_score_submit_logs",
                        "rubrics",
                        "course_completion_criteria",
                        "questionnaires",
                        "questionnaire_scores",
                        "course_estimates",
                        "course_estimate_replies",
                        "course_packages",
                        "course_package_status",
                    ),
                )
                activity = await build_teacher_activity_report(
                    session,
                    endpoints=server.endpoints(),
                    activity_id="77",
                    endpoint_names=(
                        "activity_detail",
                        "activity_delete_check",
                        "activity_comments",
                        "forum_activity_scores",
                        "activity_upload_references",
                        "activity_resources",
                        "homework_duplicate_detect_task",
                    ),
                )
                exam = await build_teacher_exam_report(
                    session,
                    endpoints=server.endpoints(),
                    exam_id="1",
                )
                classroom = await build_teacher_classroom_report(
                    session,
                    endpoints=server.endpoints(),
                    classroom_id="c1",
                )
                questionnaire = await build_teacher_questionnaire_report(
                    session,
                    endpoints=server.endpoints(),
                    questionnaire_id="q1",
                )
                raw_get = await fetch_teacher_api_path(
                    session,
                    endpoints=server.endpoints(),
                    path="/api/rubrics?fields=id,name,conditions",
                )
                dependents = await check_teacher_activity_dependents(
                    session,
                    endpoints=server.endpoints(),
                    activity_ids=["77"],
                    activity_type="homework",
                )
                completion = await fetch_teacher_completion_criteria(
                    session,
                    endpoints=server.endpoints(),
                    course_id="101",
                    activity_type="homework",
                )
                course_completion = await fetch_teacher_course_completion_criteria(
                    session,
                    endpoints=server.endpoints(),
                    course_id="101",
                )
                subject_libs = await fetch_teacher_subject_libs(
                    session,
                    endpoints=server.endpoints(),
                    scope="user",
                    lib_type="exam",
                )
                course_subject_libs = await fetch_teacher_subject_libs(
                    session,
                    endpoints=server.endpoints(),
                    course_id="101",
                    scope="course",
                    lib_type="all",
                    parent_id="0",
                    predicate="id",
                    reverse="true",
                )
                questionnaire_subject_libs = await fetch_teacher_subject_libs(
                    session,
                    endpoints=server.endpoints(),
                    scope="questionnaire",
                )
                subject_lib_subjects = await fetch_teacher_subject_lib_subjects(
                    session,
                    endpoints=server.endpoints(),
                    subject_lib_id="lib1",
                    keyword="Question",
                    subject_type="single_choice",
                )
                subject_lib_statistic = await fetch_teacher_subject_lib_statistic(
                    session,
                    endpoints=server.endpoints(),
                    subject_lib_id="lib1",
                )
                subject_lib_nodes = await fetch_teacher_subject_lib_knowledge_nodes(
                    session,
                    endpoints=server.endpoints(),
                    subject_lib_id="lib1",
                )
                subject_lib_folders = await fetch_teacher_subject_lib_folders(
                    session,
                    endpoints=server.endpoints(),
                    course_id="101",
                )
                questionnaire_submissions = await fetch_teacher_questionnaire_submissions(
                    session,
                    endpoints=server.endpoints(),
                    questionnaire_id="q1",
                    subject_id="qs1",
                )
                course_estimate_replies = await fetch_teacher_course_estimate_replies(
                    session,
                    endpoints=server.endpoints(),
                    course_estimate_id="ce1",
                )
                course_estimate_user = await fetch_teacher_course_estimate_user(
                    session,
                    endpoints=server.endpoints(),
                    course_estimate_id="ce1",
                    user_id="2",
                )
                course_package_course = await fetch_teacher_course_package_course(
                    session,
                    endpoints=server.endpoints(),
                    course_package_id="cp1",
                )
                courseware_quizzes = await fetch_teacher_courseware_quizzes(
                    session,
                    endpoints=server.endpoints(),
                    activity_id="77",
                )
                courseware_quiz_subjects = await fetch_teacher_courseware_quiz_subjects(
                    session,
                    endpoints=server.endpoints(),
                    courseware_quiz_id="cwq1",
                )
                courseware_quiz_settings = await fetch_teacher_courseware_quiz_settings(
                    session,
                    endpoints=server.endpoints(),
                )
                forum_categories = await fetch_teacher_forum_categories(
                    session,
                    endpoints=server.endpoints(),
                    course_id="101",
                )
                forum_category = await fetch_teacher_forum_category(
                    session,
                    endpoints=server.endpoints(),
                    category_id="cat1",
                )
                uploads_license = await fetch_teacher_activity_uploads_license(
                    session,
                    endpoints=server.endpoints(),
                    activity_id="77",
                )
                announce = await update_teacher_announce_score_settings(
                    session,
                    endpoints=server.endpoints(),
                    course_id="101",
                    payload={"published": True},
                    execute=True,
                    confirm=True,
                )
                score_type = await update_teacher_score_type_settings(
                    session,
                    endpoints=server.endpoints(),
                    course_id="101",
                    payload={"score_type": "normal_rule"},
                    execute=True,
                    confirm=True,
                )
                custom_create = await create_teacher_custom_score_item(
                    session,
                    endpoints=server.endpoints(),
                    course_id="101",
                    payload={"name": "Participation", "percentage": 10},
                    execute=True,
                    confirm=True,
                )
                custom_update = await update_teacher_custom_score_item(
                    session,
                    endpoints=server.endpoints(),
                    item_id="10",
                    payload={"name": "Updated"},
                    execute=True,
                    confirm=True,
                )
                custom_score = await score_teacher_custom_item(
                    session,
                    endpoints=server.endpoints(),
                    item_id="10",
                    student_id="2",
                    score="88",
                    execute=True,
                    confirm=True,
                )
                custom_delete = await delete_teacher_custom_score_item(
                    session,
                    endpoints=server.endpoints(),
                    item_id="10",
                    execute=True,
                    confirm=True,
                )
                enrollment_scores = await update_teacher_enrollment_scores(
                    session,
                    endpoints=server.endpoints(),
                    payload={"course_id": 101, "enrollments": [{"enrollment_id": 2, "total_score": 90}]},
                    execute=True,
                    confirm=True,
                )
                total_scores = await update_teacher_total_scores(
                    session,
                    endpoints=server.endpoints(),
                    mode="replace",
                    payload={"enrollments": [{"enrollment_id": 2, "total_score": 90}]},
                    execute=True,
                    confirm=True,
                )
                score_book = await update_teacher_score_book(
                    session,
                    endpoints=server.endpoints(),
                    payload={"enrollment_score_book": [{"enrollment_id": 2, "make_up_score": None}]},
                    execute=True,
                    confirm=True,
                )
                score_maps = await update_teacher_score_publish_item_maps(
                    session,
                    endpoints=server.endpoints(),
                    payload={"item_id": 10, "course_id": 101, "enrollments": []},
                    execute=True,
                    confirm=True,
                )
                edu_submit = await submit_teacher_edu_scores(
                    session,
                    endpoints=server.endpoints(),
                    payload={"course_id": 101, "score_type_edu_score_keys": []},
                    execute=True,
                    confirm=True,
                )
                rubric_create = await create_teacher_rubric(
                    session,
                    endpoints=server.endpoints(),
                    payload={"name": "New rubric", "conditions": []},
                    execute=True,
                    confirm=True,
                )
                rubric_update = await update_teacher_rubric(
                    session,
                    endpoints=server.endpoints(),
                    rubric_id="3",
                    payload={"name": "Updated rubric"},
                    execute=True,
                    confirm=True,
                )
                rubric_delete = await delete_teacher_rubrics(
                    session,
                    endpoints=server.endpoints(),
                    rubric_ids=["3"],
                    execute=True,
                    confirm=True,
                )
                created_activity = await create_teacher_activity(
                    session,
                    endpoints=server.endpoints(),
                    course_id="101",
                    payload={"id": "88", "title": "Material", "type": "material"},
                    execute=True,
                    confirm=True,
                )
                updated_activity = await update_teacher_activity(
                    session,
                    endpoints=server.endpoints(),
                    activity_id="77",
                    payload={"title": "Homework 2"},
                    execute=True,
                    confirm=True,
                )
                updated_resource = await update_teacher_activity_resource(
                    session,
                    endpoints=server.endpoints(),
                    activity_id="77",
                    resource_id="r1",
                    payload={"title": "Resource 2"},
                    execute=True,
                    confirm=True,
                )
                deleted_resource = await delete_teacher_activity_resource(
                    session,
                    endpoints=server.endpoints(),
                    activity_id="77",
                    resource_id="r1",
                    execute=True,
                    confirm=True,
                )
                added_comment = await add_teacher_activity_comment(
                    session,
                    endpoints=server.endpoints(),
                    activity_id="77",
                    payload={"id": "c2", "body": "note"},
                    execute=True,
                    confirm=True,
                )
                updated_comment = await update_teacher_activity_comment(
                    session,
                    endpoints=server.endpoints(),
                    activity_id="77",
                    comment_id="1",
                    payload={"body": "updated"},
                    execute=True,
                    confirm=True,
                )
                deleted_comment = await delete_teacher_activity_comment(
                    session,
                    endpoints=server.endpoints(),
                    activity_id="77",
                    comment_id="c2",
                    execute=True,
                    confirm=True,
                )
                replied_comment = await reply_teacher_activity_comment(
                    session,
                    endpoints=server.endpoints(),
                    activity_id="77",
                    comment_id="1",
                    payload={"id": "r2", "body": "reply"},
                    execute=True,
                    confirm=True,
                )
                updated_reply = await update_teacher_activity_comment_reply(
                    session,
                    endpoints=server.endpoints(),
                    activity_id="77",
                    reply_id="r2",
                    payload={"body": "reply updated"},
                    execute=True,
                    confirm=True,
                )
                deleted_reply = await delete_teacher_activity_comment_reply(
                    session,
                    endpoints=server.endpoints(),
                    activity_id="77",
                    reply_id="r2",
                    execute=True,
                    confirm=True,
                )
                operated_comments = await operate_teacher_activity_comments(
                    session,
                    endpoints=server.endpoints(),
                    activity_id="77",
                    payload={"comment_ids": ["1"], "operation": "pin"},
                    execute=True,
                    confirm=True,
                )
                published_activities = await publish_teacher_activities(
                    session,
                    endpoints=server.endpoints(),
                    course_id="101",
                    activity_keys=["homework-77"],
                    published=True,
                    execute=True,
                    confirm=True,
                )
                saved_resource = await save_teacher_activity_resource(
                    session,
                    endpoints=server.endpoints(),
                    resource_id="r1",
                    execute=True,
                    confirm=True,
                )
                activity_read = await log_teacher_activity_read(
                    session,
                    endpoints=server.endpoints(),
                    activity_id="77",
                    payload={"upload_id": "r1"},
                    execute=True,
                    confirm=True,
                )
                exam_activity_read = await log_teacher_activity_read(
                    session,
                    endpoints=server.endpoints(),
                    activity_id="1",
                    payload={"source": "exam"},
                    exam=True,
                    execute=True,
                    confirm=True,
                )
                forum_status = await update_teacher_forum_status(
                    session,
                    endpoints=server.endpoints(),
                    activity_id="77",
                    payload={"enable": False},
                    execute=True,
                    confirm=True,
                )
                created_subject_lib = await create_teacher_subject_lib(
                    session,
                    endpoints=server.endpoints(),
                    title="New Bank",
                    course_id="101",
                    lib_type="exam",
                    parent_id="0",
                    execute=True,
                    confirm=True,
                )
                copied_subject_lib = await copy_teacher_subject_lib(
                    session,
                    endpoints=server.endpoints(),
                    subject_lib_id="lib1",
                    target="exam",
                    target_id="1",
                    execute=True,
                    confirm=True,
                )
                updated_subject_lib = await update_teacher_subject_lib(
                    session,
                    endpoints=server.endpoints(),
                    subject_lib_id="lib1",
                    title="Renamed Bank",
                    execute=True,
                    confirm=True,
                )
                moved_subject_libs = await move_teacher_subject_libs(
                    session,
                    endpoints=server.endpoints(),
                    payload={"lib_ids": ["lib1"], "parent_id": "folder1", "operate_type": "move"},
                    execute=True,
                    confirm=True,
                )
                copied_subject_libs_to_user = await copy_teacher_subject_libs_to_user(
                    session,
                    endpoints=server.endpoints(),
                    payload={"lib_ids": ["course-lib1"]},
                    execute=True,
                    confirm=True,
                )
                moved_subject_lib_subjects = await move_teacher_subject_lib_subjects(
                    session,
                    endpoints=server.endpoints(),
                    payload={"original_lib_id": "lib1", "target_lib_id": "course-lib1", "subject_ids": ["sub1"]},
                    execute=True,
                    confirm=True,
                )
                copied_subject_lib_subjects = await move_teacher_subject_lib_subjects(
                    session,
                    endpoints=server.endpoints(),
                    payload={"original_lib_id": "lib1", "target_lib_id": "course-lib1", "subject_ids": ["sub1"]},
                    copy=True,
                    execute=True,
                    confirm=True,
                )
                deleted_subject_lib_subjects = await delete_teacher_subject_lib_subjects(
                    session,
                    endpoints=server.endpoints(),
                    subject_lib_id="lib1",
                    subject_ids=["sub1"],
                    execute=True,
                    confirm=True,
                )
                deleted_subject_lib = await delete_teacher_subject_lib(
                    session,
                    endpoints=server.endpoints(),
                    subject_lib_id="lib1",
                    execute=True,
                    confirm=True,
                )
                created_questionnaire_subject = await create_teacher_questionnaire_subject(
                    session,
                    endpoints=server.endpoints(),
                    questionnaire_id="q1",
                    payload={"id": "qs2", "type": "single_choice"},
                    execute=True,
                    confirm=True,
                )
                updated_questionnaire_subject = await update_teacher_questionnaire_subject(
                    session,
                    endpoints=server.endpoints(),
                    questionnaire_id="q1",
                    subject_id="qs2",
                    payload={"description": "Updated"},
                    execute=True,
                    confirm=True,
                )
                deleted_questionnaire_subject = await delete_teacher_questionnaire_subject(
                    session,
                    endpoints=server.endpoints(),
                    questionnaire_id="q1",
                    subject_id="qs2",
                    execute=True,
                    confirm=True,
                )
                imported_questionnaire_subjects = await import_teacher_questionnaire_subjects(
                    session,
                    endpoints=server.endpoints(),
                    questionnaire_id="q1",
                    payload={"subject_ids": ["sub1"]},
                    execute=True,
                    confirm=True,
                )
                imported_questionnaire_campus_subjects = await import_teacher_questionnaire_subjects(
                    session,
                    endpoints=server.endpoints(),
                    questionnaire_id="q1",
                    payload={"subjects": ["campus1"]},
                    campus=True,
                    execute=True,
                    confirm=True,
                )
                created_course_estimate = await create_teacher_course_estimate(
                    session,
                    endpoints=server.endpoints(),
                    payload={"id": "ce2", "course_id": "101", "title": "New evaluation"},
                    execute=True,
                    confirm=True,
                )
                updated_course_estimate = await update_teacher_course_estimate(
                    session,
                    endpoints=server.endpoints(),
                    course_estimate_id="ce2",
                    payload={"title": "Updated evaluation"},
                    execute=True,
                    confirm=True,
                )
                deleted_course_estimate = await delete_teacher_course_estimate(
                    session,
                    endpoints=server.endpoints(),
                    course_estimate_id="ce2",
                    execute=True,
                    confirm=True,
                )
                created_course_estimate_reply = await create_teacher_course_estimate_reply(
                    session,
                    endpoints=server.endpoints(),
                    payload={"id": "cer2", "course_estimate_id": "ce1", "body": "Reply"},
                    execute=True,
                    confirm=True,
                )
                deleted_course_estimate_reply = await delete_teacher_course_estimate_reply(
                    session,
                    endpoints=server.endpoints(),
                    reply_id="cer2",
                    execute=True,
                    confirm=True,
                )
                created_course_package = await create_teacher_course_package(
                    session,
                    endpoints=server.endpoints(),
                    course_id="101",
                    payload={"id": "cp2", "title": "New Package"},
                    execute=True,
                    confirm=True,
                )
                exported_course_package = await export_teacher_course_package(
                    session,
                    endpoints=server.endpoints(),
                    course_id="101",
                    payload={"id": "cp-export", "title": "Exported Package"},
                    execute=True,
                    confirm=True,
                )
                updated_course_package = await update_teacher_course_package(
                    session,
                    endpoints=server.endpoints(),
                    course_package_id="cp1",
                    payload={"title": "Updated Package"},
                    no_check=True,
                    execute=True,
                    confirm=True,
                )
                saved_course_package = await save_teacher_course_package(
                    session,
                    endpoints=server.endpoints(),
                    course_package_id="cp1",
                    execute=True,
                    confirm=True,
                )
                imported_course_package = await import_teacher_course_package(
                    session,
                    endpoints=server.endpoints(),
                    course_package_id="cp1",
                    payload={"course_id": "101"},
                    execute=True,
                    confirm=True,
                )
                deleted_course_package = await delete_teacher_course_package(
                    session,
                    endpoints=server.endpoints(),
                    course_package_id="cp2",
                    execute=True,
                    confirm=True,
                )
                created_courseware_quiz_subjects = await create_teacher_courseware_quiz_subjects(
                    session,
                    endpoints=server.endpoints(),
                    activity_id="77",
                    payload={"subjects": [{"id": "cw-sub2"}]},
                    execute=True,
                    confirm=True,
                )
                updated_courseware_quiz_subjects = await update_teacher_courseware_quiz_subjects(
                    session,
                    endpoints=server.endpoints(),
                    courseware_quiz_id="cwq1",
                    payload={"subjects": [{"id": "cw-sub2", "sort": 1}]},
                    execute=True,
                    confirm=True,
                )
                generated_courseware_quiz_subjects = await generate_teacher_courseware_quiz_subjects(
                    session,
                    endpoints=server.endpoints(),
                    payload={"upload_id": "r1", "num_of_single_selection": 1},
                    execute=True,
                    confirm=True,
                )
                generated_courseware_quiz_subjects_by_text = await generate_teacher_courseware_quiz_subjects(
                    session,
                    endpoints=server.endpoints(),
                    payload={"text_content": "Question text", "num_of_single_selection": 1},
                    by_text=True,
                    execute=True,
                    confirm=True,
                )
                formatted_courseware_quiz_question = await format_teacher_courseware_quiz_question(
                    session,
                    endpoints=server.endpoints(),
                    payload={"text": "1. Question"},
                    execute=True,
                    confirm=True,
                )
                copied_subject_libs_to_courseware_quiz = await copy_teacher_subject_libs_to_courseware_quiz(
                    session,
                    endpoints=server.endpoints(),
                    courseware_quiz_id="cwq1",
                    payload={"libIds": ["lib1"]},
                    execute=True,
                    confirm=True,
                )
                deleted_activity = await delete_teacher_activity(
                    session,
                    endpoints=server.endpoints(),
                    activity_id="88",
                    delete_related_activity=True,
                    execute=True,
                    confirm=True,
                )
                deleted_activities = await delete_teacher_activities(
                    session,
                    endpoints=server.endpoints(),
                    activity_ids=["77"],
                    execute=True,
                    confirm=True,
                )
                rollcall_grade = await grade_teacher_rollcalls(
                    session,
                    endpoints=server.endpoints(),
                    rollcall_ids=["42"],
                    execute=True,
                    confirm=True,
                )
                graded = await grade_teacher_submission(
                    session,
                    endpoints=server.endpoints(),
                    activity_id="77",
                    payload={"submission_id": 9, "score": 95},
                    execute=True,
                    confirm=True,
                )
                recommended = await recommend_teacher_submissions(
                    session,
                    endpoints=server.endpoints(),
                    submission_ids=["9"],
                    execute=True,
                    confirm=True,
                )
                cancelled = await cancel_recommend_teacher_submission(
                    session,
                    endpoints=server.endpoints(),
                    submission_id="9",
                    execute=True,
                    confirm=True,
                )
                forum = await score_teacher_forum(
                    session,
                    endpoints=server.endpoints(),
                    activity_id="77",
                    payload={"student_id": 2, "score": 99},
                    execute=True,
                    confirm=True,
                )
                homework_announce = await update_teacher_homework_announce_status(
                    session,
                    endpoints=server.endpoints(),
                    homework_id="77",
                    payload={"status": "published"},
                    execute=True,
                    confirm=True,
                )
                homework_rubric = await update_teacher_homework_rubric(
                    session,
                    endpoints=server.endpoints(),
                    homework_id="77",
                    payload={"rubric_id": 3},
                    execute=True,
                    confirm=True,
                )
                created_exam = await create_teacher_exam(
                    session,
                    endpoints=server.endpoints(),
                    course_id="101",
                    payload={"title": "Quiz"},
                    execute=True,
                    confirm=True,
                )
                updated_exam = await update_teacher_exam(
                    session,
                    endpoints=server.endpoints(),
                    exam_id="1",
                    payload={"title": "Quiz 2"},
                    execute=True,
                    confirm=True,
                )
                deleted_exam = await delete_teacher_exams(
                    session,
                    endpoints=server.endpoints(),
                    exam_ids=["1"],
                    execute=True,
                    confirm=True,
                )
                exam_score = await score_teacher_exam(
                    session,
                    endpoints=server.endpoints(),
                    score_id="",
                    payload={"exam_id": 1, "examinee_id": 2, "final_score": 92},
                    execute=True,
                    confirm=True,
                )
                raw_request = await teacher_api_request(
                    session,
                    endpoints=server.endpoints(),
                    method="PUT",
                    path="/api/score-publish-item-maps",
                    payload={"item_id": 11},
                    execute=True,
                    confirm=True,
                )
                exam_comment = await comment_teacher_exam_status(
                    session,
                    endpoints=server.endpoints(),
                    exam_id="1",
                    student_id="2",
                    status_comment="checked",
                    execute=True,
                    confirm=True,
                )
                created_classroom = await create_teacher_classroom_exam(
                    session,
                    endpoints=server.endpoints(),
                    course_id="101",
                    payload={"title": "Classroom"},
                    execute=True,
                    confirm=True,
                )
                updated_classroom = await update_teacher_classroom_exam(
                    session,
                    endpoints=server.endpoints(),
                    classroom_id="c1",
                    payload={"title": "Classroom 2"},
                    execute=True,
                    confirm=True,
                )
                classroom_status = await update_teacher_classroom_status(
                    session,
                    endpoints=server.endpoints(),
                    classroom_id="c1",
                    payload={"status": "started"},
                    execute=True,
                    confirm=True,
                )
                classroom_subject_status = await update_teacher_classroom_subject_status(
                    session,
                    endpoints=server.endpoints(),
                    classroom_id="c1",
                    subject_id="sub1",
                    payload={"status": "published"},
                    execute=True,
                    confirm=True,
                )
                classroom_subjects = await save_teacher_classroom_subjects(
                    session,
                    endpoints=server.endpoints(),
                    classroom_id="c1",
                    payload={"subjects": [{"id": "sub1"}]},
                    execute=True,
                    confirm=True,
                )
                deleted_classroom_subjects = await delete_teacher_classroom_subjects(
                    session,
                    endpoints=server.endpoints(),
                    classroom_id="c1",
                    subject_ids=["sub1"],
                    execute=True,
                    confirm=True,
                )
                classroom_score = await score_teacher_classroom(
                    session,
                    endpoints=server.endpoints(),
                    payload={"classroom_id": "c1", "examinee_id": 2, "score": 91},
                    execute=True,
                    confirm=True,
                )
                deleted_classroom = await delete_teacher_classroom(
                    session,
                    endpoints=server.endpoints(),
                    classroom_id="c1",
                    execute=True,
                    confirm=True,
                )

        score_payload = scores.to_dict()
        activity_payload = activity.to_dict()
        exam_payload = exam.to_dict()
        classroom_payload = classroom.to_dict()
        questionnaire_payload = questionnaire.to_dict()
        self.assertEqual(score_payload["status"], "ok")
        self.assertIn("custom_score_items", score_payload["supported"])
        self.assertIn("edu_score_rate", score_payload["supported"])
        self.assertIn("rubrics", score_payload["supported"])
        self.assertIn("course_completion_criteria", score_payload["supported"])
        self.assertIn("questionnaires", score_payload["supported"])
        self.assertIn("questionnaire_scores", score_payload["supported"])
        self.assertIn("course_estimates", score_payload["supported"])
        self.assertIn("course_estimate_replies", score_payload["supported"])
        self.assertIn("course_packages", score_payload["supported"])
        self.assertIn("course_package_status", score_payload["supported"])
        self.assertEqual(activity_payload["status"], "ok")
        self.assertIn("activity_delete_check", activity_payload["supported"])
        self.assertIn("activity_resources", activity_payload["supported"])
        self.assertIn("homework_duplicate_detect_task", activity_payload["supported"])
        self.assertEqual(exam_payload["status"], "ok")
        self.assertEqual(classroom_payload["status"], "ok")
        self.assertEqual(questionnaire_payload["status"], "ok")
        self.assertIn("exam_detail", exam_payload["supported"])
        self.assertIn("exam_make_up_record", exam_payload["supported"])
        self.assertIn("exam_qualification_check", exam_payload["supported"])
        self.assertIn("classroom_exam_detail", classroom_payload["supported"])
        self.assertIn("questionnaire_detail", questionnaire_payload["supported"])
        self.assertNotIn("student@example.com", json.dumps(exam_payload))
        self.assertNotIn("S001", json.dumps(exam_payload))
        self.assertNotIn("student@example.com", json.dumps(classroom_payload))
        self.assertNotIn("S001", json.dumps(classroom_payload))
        self.assertNotIn("student@example.com", json.dumps(questionnaire_payload))
        self.assertEqual(raw_get.status, "ok")
        self.assertEqual(dependents.status, "ok")
        self.assertEqual(completion.status, "ok")
        self.assertEqual(course_completion.status, "ok")
        self.assertEqual(subject_libs.status, "ok")
        self.assertEqual(course_subject_libs.status, "ok")
        self.assertEqual(questionnaire_subject_libs.status, "ok")
        self.assertEqual(subject_lib_subjects.status, "ok")
        self.assertEqual(subject_lib_statistic.status, "ok")
        self.assertEqual(subject_lib_nodes.status, "ok")
        self.assertEqual(subject_lib_folders.status, "ok")
        self.assertEqual(questionnaire_submissions.status, "ok")
        self.assertEqual(course_estimate_replies.status, "ok")
        self.assertEqual(course_estimate_user.status, "ok")
        self.assertEqual(course_package_course.status, "ok")
        self.assertEqual(courseware_quizzes.status, "ok")
        self.assertEqual(courseware_quiz_subjects.status, "ok")
        self.assertEqual(courseware_quiz_settings.status, "ok")
        self.assertEqual(forum_categories.status, "ok")
        self.assertEqual(forum_category.status, "ok")
        self.assertEqual(uploads_license.status, "ok")
        self.assertNotIn("student@example.com", json.dumps(course_estimate_replies.to_dict()))
        self.assertNotIn("student@example.com", json.dumps(course_estimate_user.to_dict()))
        self.assertNotIn("student@example.com", json.dumps(activity_payload))
        self.assertNotIn("S001", json.dumps(activity_payload))
        for result in (
            announce,
            score_type,
            custom_create,
            custom_update,
            custom_score,
            custom_delete,
            enrollment_scores,
            total_scores,
            score_book,
            score_maps,
            edu_submit,
            rubric_create,
            rubric_update,
            rubric_delete,
            created_activity,
            updated_activity,
            updated_resource,
            deleted_resource,
            added_comment,
            updated_comment,
            deleted_comment,
            replied_comment,
            updated_reply,
            deleted_reply,
            operated_comments,
            published_activities,
            saved_resource,
            activity_read,
            exam_activity_read,
            forum_status,
            created_subject_lib,
            copied_subject_lib,
            updated_subject_lib,
            moved_subject_libs,
            copied_subject_libs_to_user,
            moved_subject_lib_subjects,
            copied_subject_lib_subjects,
            deleted_subject_lib_subjects,
            deleted_subject_lib,
            created_questionnaire_subject,
            updated_questionnaire_subject,
            deleted_questionnaire_subject,
            imported_questionnaire_subjects,
            imported_questionnaire_campus_subjects,
            created_course_estimate,
            updated_course_estimate,
            deleted_course_estimate,
            created_course_estimate_reply,
            deleted_course_estimate_reply,
            created_course_package,
            exported_course_package,
            updated_course_package,
            saved_course_package,
            imported_course_package,
            deleted_course_package,
            created_courseware_quiz_subjects,
            updated_courseware_quiz_subjects,
            generated_courseware_quiz_subjects,
            generated_courseware_quiz_subjects_by_text,
            formatted_courseware_quiz_question,
            copied_subject_libs_to_courseware_quiz,
            deleted_activity,
            deleted_activities,
            rollcall_grade,
            graded,
            recommended,
            cancelled,
            forum,
            homework_announce,
            homework_rubric,
            created_exam,
            updated_exam,
            deleted_exam,
            exam_score,
            exam_comment,
            created_classroom,
            updated_classroom,
            classroom_status,
            classroom_subject_status,
            classroom_subjects,
            deleted_classroom_subjects,
            classroom_score,
            deleted_classroom,
            raw_request,
        ):
            self.assertEqual(result.status, "ok")
        self.assertEqual(server.updated_announce_score_settings[0]["body"], {"published": True})
        self.assertEqual(server.updated_score_type_settings[0]["body"], {"score_type": "normal_rule"})
        self.assertEqual(server.created_custom_score_items[0]["body"], {"name": "Participation", "percentage": 10})
        self.assertEqual(server.updated_custom_score_items[0]["body"], {"name": "Updated"})
        self.assertEqual(server.scored_custom_items[0]["body"], {"score": "88"})
        self.assertEqual(server.deleted_custom_score_items, ["10"])
        self.assertEqual(server.updated_enrollment_scores[0]["body"]["course_id"], 101)
        self.assertEqual(server.updated_total_scores[0]["mode"], "replace")
        self.assertEqual(server.updated_score_books[0]["body"]["enrollment_score_book"][0]["enrollment_id"], 2)
        self.assertEqual(server.updated_score_publish_item_maps[0]["body"]["item_id"], 10)
        self.assertEqual(server.submitted_edu_scores[0]["body"]["course_id"], 101)
        self.assertEqual(server.created_rubrics[0]["body"]["name"], "New rubric")
        self.assertEqual(server.updated_rubrics[0]["body"], {"name": "Updated rubric"})
        self.assertEqual(server.deleted_rubrics[0]["body"], {"rubric_ids": ["3"]})
        self.assertEqual(server.created_activities[0]["body"]["title"], "Material")
        self.assertEqual(server.updated_activities[0]["body"], {"title": "Homework 2"})
        self.assertEqual(server.updated_activity_resources[0]["body"], {"title": "Resource 2"})
        self.assertEqual(server.deleted_activity_resources[0], {"activity_id": "77", "resource_id": "r1"})
        self.assertEqual(server.added_activity_comments[0]["body"], {"id": "c2", "body": "note"})
        self.assertEqual(server.updated_activity_comments[0]["body"], {"body": "updated"})
        self.assertEqual(server.deleted_activity_comments[0], {"activity_id": "77", "comment_id": "c2"})
        self.assertEqual(server.replied_activity_comments[0]["body"], {"id": "r2", "body": "reply"})
        self.assertEqual(server.updated_activity_comment_replies[0]["body"], {"body": "reply updated"})
        self.assertEqual(server.deleted_activity_comment_replies[0], {"activity_id": "77", "reply_id": "r2"})
        self.assertEqual(server.operated_activity_comments[0]["body"], {"comment_ids": ["1"], "operation": "pin"})
        self.assertEqual(server.published_activities[0]["body"], {"activity_ids": ["homework-77"], "type": True})
        self.assertEqual(server.saved_activity_resources, ["r1"])
        self.assertEqual(
            server.logged_activity_reads,
            [
                {"activity_id": "77", "exam": False, "body": {"upload_id": "r1"}},
                {"activity_id": "1", "exam": True, "body": {"source": "exam"}},
            ],
        )
        self.assertEqual(server.updated_forum_statuses[0]["body"], {"enable": False})
        self.assertEqual(
            server.created_subject_libs[0],
            {"scope": "course", "course_id": "101", "lib_type": "exam", "body": {"title": "New Bank", "parent_id": "0"}},
        )
        self.assertEqual(server.copied_subject_libs[0], {"subject_lib_id": "lib1", "query": {"examId": "1"}})
        self.assertEqual(server.updated_subject_libs[0], {"subject_lib_id": "lib1", "body": {"title": "Renamed Bank"}})
        self.assertEqual(
            server.moved_subject_libs[0]["body"],
            {"lib_ids": ["lib1"], "parent_id": "folder1", "operate_type": "move"},
        )
        self.assertEqual(server.copied_subject_libs_to_user[0]["body"], {"lib_ids": ["course-lib1"]})
        self.assertEqual(
            server.moved_subject_lib_subjects[0]["body"],
            {"original_lib_id": "lib1", "target_lib_id": "course-lib1", "subject_ids": ["sub1"]},
        )
        self.assertEqual(
            server.copied_subject_lib_subjects[0]["body"],
            {"original_lib_id": "lib1", "target_lib_id": "course-lib1", "subject_ids": ["sub1"]},
        )
        self.assertEqual(server.deleted_subject_lib_subjects[0]["body"], {"subject_ids": ["sub1"]})
        self.assertEqual(server.deleted_subject_libs, ["lib1"])
        self.assertEqual(server.created_questionnaire_subjects[0]["body"], {"id": "qs2", "type": "single_choice"})
        self.assertEqual(server.updated_questionnaire_subjects[0]["body"], {"description": "Updated"})
        self.assertEqual(
            server.deleted_questionnaire_subjects[0],
            {"questionnaire_id": "q1", "subject_id": "qs2"},
        )
        self.assertEqual(server.imported_questionnaire_subjects[0]["body"], {"subject_ids": ["sub1"]})
        self.assertEqual(server.imported_questionnaire_campus_subjects[0]["body"], {"subjects": ["campus1"]})
        self.assertEqual(
            server.created_course_estimates[0]["body"],
            {"id": "ce2", "course_id": "101", "title": "New evaluation"},
        )
        self.assertEqual(server.updated_course_estimates[0]["body"], {"title": "Updated evaluation"})
        self.assertEqual(server.deleted_course_estimates[0], {"course_estimate_id": "ce2", "body": {}})
        self.assertEqual(
            server.created_course_estimate_replies[0]["body"],
            {"id": "cer2", "course_estimate_id": "ce1", "body": "Reply"},
        )
        self.assertEqual(server.deleted_course_estimate_replies[0], {"reply_id": "cer2", "body": {}})
        self.assertEqual(server.created_course_packages[0]["body"], {"id": "cp2", "title": "New Package"})
        self.assertEqual(
            server.exported_course_packages[0]["body"],
            {"id": "cp-export", "title": "Exported Package"},
        )
        self.assertEqual(server.updated_course_packages[0]["query"], {"no_check": "true"})
        self.assertEqual(server.updated_course_packages[0]["body"], {"title": "Updated Package"})
        self.assertEqual(server.saved_course_packages, ["cp1"])
        self.assertEqual(server.imported_course_packages[0]["body"], {"course_id": "101"})
        self.assertEqual(server.deleted_course_packages, ["cp2"])
        self.assertEqual(
            server.created_courseware_quiz_subjects[0],
            {"activity_id": "77", "body": {"subjects": [{"id": "cw-sub2"}]}},
        )
        self.assertEqual(
            server.updated_courseware_quiz_subjects[0],
            {"courseware_quiz_id": "cwq1", "body": {"subjects": [{"id": "cw-sub2", "sort": 1}]}},
        )
        self.assertEqual(
            server.generated_courseware_quiz_subjects[0]["body"],
            {"upload_id": "r1", "num_of_single_selection": 1},
        )
        self.assertEqual(
            server.generated_courseware_quiz_subjects_by_text[0]["body"],
            {"text_content": "Question text", "num_of_single_selection": 1},
        )
        self.assertEqual(server.formatted_courseware_quiz_questions[0]["body"], {"text": "1. Question"})
        self.assertEqual(
            server.copied_subject_libs_to_courseware_quiz[0],
            {"query": {"courseware_quiz_id": "cwq1"}, "body": {"libIds": ["lib1"]}},
        )
        self.assertEqual(
            server.deleted_activity_ids[0],
            {"activity_id": "88", "delete_related_activity": True},
        )
        self.assertEqual(server.checked_activity_dependents[0]["activity_ids"], ["77"])
        self.assertEqual(server.checked_activity_delete_checks[0], {"activity_id": "77", "activity_type": ""})
        self.assertEqual(server.deleted_activities[0]["body"], {"activity_ids": ["77"]})
        self.assertEqual(server.graded_rollcalls[0]["body"], {"rollcall_ids": ["42"]})
        self.assertEqual(server.graded_submissions[0]["body"], {"submission_id": 9, "score": 95})
        self.assertEqual(server.recommended_submissions[0]["body"], {"submission_ids": ["9"]})
        self.assertEqual(server.cancelled_recommended_submissions, ["9"])
        self.assertEqual(server.scored_forums[0]["body"], {"student_id": 2, "score": 99})
        self.assertEqual(server.updated_homework_announce_statuses[0]["body"], {"status": "published"})
        self.assertEqual(server.updated_homework_rubrics[0]["body"], {"rubric_id": 3})
        self.assertEqual(server.created_exams[0]["body"], {"title": "Quiz"})
        self.assertEqual(server.updated_exams[0]["body"], {"title": "Quiz 2"})
        self.assertEqual(server.deleted_exams[0]["body"], {"exam_ids": ["1"]})
        self.assertEqual(server.scored_exams[0]["body"], {"exam_id": 1, "examinee_id": 2, "final_score": 92})
        self.assertEqual(
            server.commented_exam_statuses[0]["body"],
            {"student_id": "2", "status_comment": "checked"},
        )
        self.assertEqual(server.created_classroom_exams[0]["body"], {"title": "Classroom"})
        self.assertEqual(server.updated_classroom_exams[0]["body"], {"title": "Classroom 2"})
        self.assertEqual(server.updated_classroom_statuses[0]["body"], {"status": "started"})
        self.assertEqual(server.updated_classroom_subject_statuses[0]["body"], {"status": "published"})
        self.assertEqual(server.saved_classroom_subjects[0]["body"], {"subjects": [{"id": "sub1"}]})
        self.assertEqual(server.deleted_classroom_subjects[0]["body"], {"subject_ids": ["sub1"]})
        self.assertEqual(server.scored_classrooms[0]["body"], {"classroom_id": "c1", "examinee_id": 2, "score": 91})
        self.assertEqual(server.deleted_classrooms, ["c1"])


@unittest.skipUnless(aiohttp is not None and web is not None, "aiohttp.web is required")
class TeacherCommandTest(unittest.IsolatedAsyncioTestCase):
    async def asyncSetUp(self) -> None:
        self.original_config = copy.deepcopy(tron.CONFIG)
        self.original_base_dir = tron.BASE_DIR
        self.temp_dir = tempfile.TemporaryDirectory()
        self.server = await FakeTronServer().start()
        self.patch_urls = self.server.patch_tron_http_urls(tron_http)
        self.patch_urls.__enter__()
        tron.BASE_DIR = Path(self.temp_dir.name)
        tron.CONFIG.clear()
        tron.CONFIG.update(
            tron.normalize_config(
                {
                    "account": {"user": "user1", "passwd": "pass1"},
                    "accounts": {
                        "current": "default",
                        "profiles": {
                            "default": {
                                "user": "user1",
                                "passwd": "pass1",
                                "label": "",
                            }
                        },
                    },
                }
            )
        )
        self.server.courses = [{"id": 301, "name": "Teacher CLI", "instructors": [{"user_no": "user1"}]}]
        self.server.course_details["301"] = {
            "id": 301,
            "name": "Teacher CLI",
            "allow_update_basic_info": True,
            "instructors": [{"user_no": "user1"}],
        }
        self.server.course_enrollments["301"] = [
            {
                "id": 1,
                "roles": ["instructor"],
                "user": {"user_no": "user1"},
            },
            {
                "id": 2,
                "roles": ["student"],
                "user": {"id": 2, "name": "Student One", "user_no": "S001", "email": "student@example.com"},
            },
        ]
        self.server.course_students["301"] = [
            {"id": 2, "name": "Student One", "user_no": "S001", "email": "student@example.com"}
        ]
        self.server.course_students_rollcalls["301"] = [
            {"student_id": 2, "rollcall_status": "on_call_fine", "user_no": "S001"}
        ]
        self.server.rollcall_students_rollcalls["42"] = [
            {"student_id": 2, "rollcall_status": "on_call_fine", "email": "student@example.com"}
        ]
        self.server.course_score_status["301"] = {"score_status": "draft"}
        self.server.course_custom_score_items["301"] = [{"id": "10", "name": "Participation"}]
        self.server.course_modules["301"] = [
            {"id": "m1", "name": "Week 1", "syllabuses": [{"id": "s1", "module_id": "m1", "summary": "Intro"}]}
        ]
        self.server.course_activities["301"] = [{"id": "77", "title": "Homework"}]
        self.server.course_bulletins["301"] = [
            {"id": "b1", "title": "Welcome", "email": "student@example.com", "user_no": "S001"}
        ]
        self.server.course_group_sets["301"] = [{"id": "g1", "name": "Project Groups"}]
        self.server.group_set_groups["g1"] = [
            {
                "id": "group1",
                "name": "Group One",
                "members": [{"id": "member1", "email": "student@example.com", "user_no": "S001"}],
            }
        ]
        self.server.group_set_activities["g1"] = [{"id": "77", "title": "Homework"}]
        self.server.current_user_groups["g1"] = {"group": {"id": "group1", "name": "Group One"}}
        self.server.course_groups_submission_status["301"] = {"groups": [{"id": "g1", "submitted": 1}]}
        self.server.course_teaching_team_groups["301"] = [{"id": "tg1", "name": "Teachers"}]
        self.server.activity_comments["77"] = [{"id": 1, "email": "student@example.com"}]
        self.server.activity_forum_scores["77"] = [{"student_id": 2, "score": 80, "user_no": "S001"}]
        self.server.activity_resources["77"] = [{"id": "r1", "title": "Resource"}]
        self.server.activity_uploads_licenses["77"] = {"activity_id": "77", "licenses": [{"id": "cc"}]}
        self.server.completion_criteria["301:homework"] = {
            "course_id": "301",
            "activity_type": "homework",
            "completion_criteria": [{"id": "crit1"}],
        }
        self.server.course_completion_criteria["301"] = {
            "activity_publish_setting": {"homework": "unpublished"},
            "homework": {"completion_criteria": [{"id": "crit1"}], "has_completion_criterion": True},
        }
        self.server.course_packages["301"] = [{"id": "cp1", "title": "Package"}]
        self.server.course_package_statuses["301"] = {"status": "ready", "course_package_id": "cp1"}
        self.server.course_package_courses["cp1"] = {"course_package_id": "cp1", "course": {"id": "301"}}
        self.server.courseware_quizzes["77"] = [{"id": "cwq1", "title": "Courseware Quiz"}]
        self.server.courseware_quiz_subjects["cwq1"] = [{"id": "cw-sub1", "sort": 1}]
        self.server.courseware_quiz_settings = {"setting": {"single": 3}}
        self.server.subject_libs = [{"id": "lib1", "title": "Personal Bank", "type": "exam"}]
        self.server.course_subject_libs["301"] = [{"id": "course-lib1", "title": "Course Bank", "type": "exam"}]
        self.server.questionnaire_subject_libs = [{"id": "qlib1", "title": "Survey Bank", "type": "questionnaire"}]
        self.server.subject_lib_subjects["lib1"] = [{"id": "sub1", "type": "single_choice", "description": "Question"}]
        self.server.subject_lib_statistics["lib1"] = {
            "page": 1,
            "page_size": 20,
            "exam_subject_statistics": [{"id": "sub1", "type": "single_choice"}],
        }
        self.server.subject_lib_knowledge_nodes["lib1"] = [{"id": "node1", "name": "Basics"}]
        self.server.subject_lib_folders["301"] = [{"id": "folder1", "title": "Folder"}]
        self.server.course_questionnaires["301"] = [{"id": "q1", "title": "Survey"}]
        self.server.course_stat_for_instructor["301"] = {"course_id": "301", "activity_count": 5}
        self.server.course_stat_overviews["301"] = {"course_id": "301", "overview": {"finished": 3}}
        self.server.course_stat_students["301"] = [{"student_id": 2, "name": "Student One"}]
        self.server.course_tpdoe_stat_students["301"] = [{"student_id": 2, "name": "TPDOE Student"}]
        self.server.courses_stats["301"] = {"course_id": "301", "views": 10}
        self.server.stat_activities_for_courses["301"] = [{"id": "activity-stat1"}]
        self.server.air_credit_user = {"credits": 7}
        self.server.air_credit_user_token = {"air_access_token": "token"}
        self.server.air_credit_users = [{"id": "u1", "name": "AI User", "email": "student@example.com"}]
        self.server.air_credit_courses["301"] = {"course_id": "301", "credits": 3}
        self.server.air_credit_course_rows = [{"course_id": "301", "credits": 3}]
        self.server.air_credit_user_courses_ai_ability = {"courses": [{"id": "301", "ability": 2}]}
        self.server.air_credit_org_credit_state_info = {"enabled": True}
        self.server.air_credit_states["course"] = [{"course_id": "301", "state": "active"}]
        self.server.air_credit_stats["course"] = [{"course_id": "301", "credits": 3}]
        self.server.air_credit_summaries["course"] = {"type": "course", "total": 1}
        self.server.air_credit_audits = [{"id": "audit1", "action": "assign"}]
        self.server.air_credit_instructor_current_semester_courses = [{"id": "301", "name": "Teacher CLI"}]
        self.server.air_credit_resources = [{"id": "air-resource1"}]
        self.server.calendar_meetings = [{"id": "meeting1", "title": "Weekly"}]
        self.server.management_calendar_meetings = [{"id": "meeting1", "title": "Weekly"}]
        self.server.teaching_calendars = [{"id": "tc1", "title": "Week 1"}]
        self.server.vtrses = [{"id": "vtrs1", "name": "VTRS Classroom"}]
        self.server.vtrses_share_resources = [{"id": "share1", "title": "Shared"}]
        self.server.vtrses_applications = [{"id": "application1"}]
        self.server.vtrses_application_stat = {"total": 1}
        self.server.vtrses_subject_libs = [{"id": "lib1"}]
        self.server.vtrses_meeting_classifications = [{"id": "meeting-type"}]
        self.server.vtrses_resource_classifications = [{"id": "resource-type"}]
        self.server.vtrses_access_codes = [{"id": "access1", "code": "VTRS"}]
        self.server.stat_vtrses = [{"id": "vtrs-stat1"}]
        self.server.stat_vtrses_data = [{"id": "data1"}]
        self.server.stat_vtrses_resources = [{"id": "resource1"}]
        self.server.stat_vtrses_activities = [{"id": "activity1"}]
        self.server.stat_vtrses_teaching_count_info = {"teacher_count": 1}
        self.server.departments = [{"id": "org1", "name": "Department"}]
        self.server.top_departments = [{"id": "top1"}]
        self.server.my_departments = [{"id": "my1"}]
        self.server.selected_departments = [{"id": "selected1"}]
        self.server.department_resource_center = {"enabled": True}
        self.server.department_user_attendance = [{"user_id": "u1", "attended": 3}]
        self.server.department_attendance = [{"department_id": "org1", "attended": 3}]
        self.server.ai_ppt_user_usage_count = {"count": 2}
        self.server.ai_ppt_usage_stats = [{"date": "2026-01-01", "count": 2}]
        self.server.ai_ppt_usage = [{"user_id": "u1", "count": 2}]
        self.server.orgs = [{"id": "org1", "name": "Org"}]
        self.server.all_orgs = [{"id": "org1", "name": "Org"}]
        self.server.org = {"id": "org1", "name": "Org"}
        self.server.org_lang_settings = {"lang": "zh-TW"}
        self.server.academic_years = [{"id": 113, "name": "113"}]
        self.server.my_academic_years = [{"id": 113, "name": "113"}]
        self.server.my_curriculum_academic_years = [{"id": 113, "name": "113"}]
        self.server.semesters = [{"id": 1131, "name": "Fall"}]
        self.server.my_semesters = [{"id": 1131, "name": "Fall"}]
        self.server.my_semesters_all = [{"id": 1131, "name": "Fall"}]
        self.server.my_curriculum_semesters = [{"id": 1131, "name": "Fall"}]
        self.server.course_classifications = [{"id": "cc1", "name": "Required"}]
        self.server.curriculum_classifications = [{"id": "cur1", "name": "Curriculum"}]
        self.server.curriculum_conditions = [{"id": "cond1", "name": "Condition"}]
        self.server.portal_classifications = [{"id": "portal-class1", "name": "Portal Class"}]
        self.server.authz_roles = [{"id": "instructor", "name": "Instructor"}]
        self.server.authz_permissions = [{"id": "permission1", "name": "Permission"}]
        self.server.authz_course_permissions = [{"id": "course-permission1", "name": "Course Permission"}]
        self.server.authz_user_roles = [{"id": "user-role1", "name": "User Role"}]
        self.server.virtual_classroom_resources = [{"id": "vcr1", "title": "Room"}]
        self.server.live_records = [{"id": "live1", "title": "Live"}]
        self.server.obe_metrics = [{"id": "metric1", "name": "Outcome"}]
        self.server.program_course_programs = [{"id": "program1", "name": "Program"}]
        self.server.program_user_programs = [{"id": "user-program1", "name": "User Program"}]
        self.server.user_academic_learning_resources = [{"id": "resource1", "title": "Learning"}]
        self.server.todos = [{"id": "todo1", "title": "Todo"}]
        self.server.in_progress_homeworks = [{"id": "homework-progress1", "title": "Homework"}]
        self.server.jobs = [{"id": "job1", "status": "finished"}]
        self.server.my_classes = [{"id": "class-personal", "name": "Personal Class"}]
        self.server.my_teaching_classes = [{"id": "teaching-class", "name": "Teaching Class"}]
        self.server.task_last = {"id": "task1", "status": "finished"}
        self.server.inclass_reports = [{"id": "inclass1", "title": "In class"}]
        self.server.sign_in_stats = {"stats": [{"id": "sign1", "count": 3}]}
        self.server.user_recently_visited_courses = [{"id": "301", "name": "Visited"}]
        self.server.alerts = [{"id": "alert1", "title": "Alert"}]
        self.server.alert_logs = [{"id": "alert-log1", "title": "Alert Log"}]
        self.server.calendar_alerts = [{"id": "cal-alert1"}]
        self.server.calendar_events = [{"id": "event1"}]
        self.server.calendar_timetables = [{"id": "timetable1"}]
        self.server.instruction_team_meeting = {"id": "instruction1"}
        self.server.org_change_plan_list = [{"id": "change-plan1"}]
        self.server.third_party_info = {"enabled": True}
        self.server.topics_latest = [{"id": "topic-latest1"}]
        self.server.user_index_courses_info_status = {"ready": True}
        self.server.user_index_org_summary = {"course_count": 1}
        self.server.user_profile_stat = {"completed": 1}
        self.server.org_bulletins = [{"id": "ob1", "title": "Campus notice"}]
        self.server.org_bulletin_latest = [{"id": "ob1", "title": "Campus notice"}]
        self.server.org_bulletin_classifications = [{"id": "notice", "name": "Notice"}]
        self.server.catalog_courses = [{"id": "301", "name": "Catalog Course"}]
        self.server.catalog_courses_count = {"count": 1}
        self.server.public_courses = [{"id": "public1", "name": "Public Course"}]
        self.server.reviewed_courses = [{"id": "review1", "name": "Reviewed"}]
        self.server.catalog_users = [{"id": "u1", "name": "Catalog User", "email": "user@example.com"}]
        self.server.users_without_authz_roles = [{"id": "u3", "name": "No Role"}]
        self.server.user_candidates = [{"id": "u2", "name": "Candidate"}]
        self.server.instructors = [{"id": "teacher1", "name": "Teacher"}]
        self.server.user_classes = [{"id": "class-user1", "name": "User Class"}]
        self.server.course_cover_list = [{"id": "cover1", "name": "Cover"}]
        self.server.course_shared_records = [{"id": "shared-record1"}]
        self.server.course_certifications_catalog = [{"id": "course-cert1"}]
        self.server.classes = [{"id": "class1", "name": "Class"}]
        self.server.grades = [{"id": "grade1", "name": "Grade"}]
        self.server.certifications = [{"id": "cert1", "name": "Certification"}]
        self.server.certifications_for_management = [{"id": "cert-mgmt1", "name": "Certification Management"}]
        self.server.course_subjects = [{"id": "course-subject1", "name": "Course Subject"}]
        self.server.combine_courses = [{"id": "combine1", "name": "Combined"}]
        self.server.course_interactions = [{"id": "interaction1", "title": "Vote"}]
        self.server.interactions = [{"id": "interaction-root1", "title": "Root interaction"}]
        self.server.interaction_votes = [{"id": "vote1", "title": "Vote"}]
        self.server.interaction_submissions = [{"id": "is1", "answer": "A"}]
        self.server.course_resource_audits = [{"id": "audit1", "name": "Resource Audit"}]
        self.server.curriculums = [{"id": "curriculum1", "name": "Curriculum"}]
        self.server.curriculum_sections = [{"id": "section1", "name": "Section"}]
        self.server.warning_students = [{"id": "warning1", "name": "Warning"}]
        self.server.authz_course_roles = [{"id": "course_admin", "name": "Course Admin"}]
        self.server.data_import_catalogs = {
            "course-groups": [{"id": "course-groups-import"}],
            "course": [{"id": "course-import"}],
            "courses": [{"id": "courses-import"}],
            "scores": [{"id": "scores-import"}],
            "item_scores": [{"id": "item-scores-import"}],
            "seat-number": [{"id": "seat-number-import"}],
        }
        self.server.data_import_validations = [{"id": "validation1"}]
        self.server.campus_subject_lib_classifications = [{"id": "campus-class1"}]
        self.server.campus_subject_lib_classification_counts = [{"id": "campus-class1", "count": 1}]
        self.server.campus_subject_lib_subjects = [{"id": "campus-subject1", "title": "Campus subject"}]
        self.server.campus_subject_lib_combination_subjects = [{"id": "campus-combo1"}]
        self.server.lesson_resources_shared_stat = {"total": 2}
        self.server.other_video_resources = [{"id": "ov1", "title": "Other video"}]
        self.server.third_part_resources = [{"id": "tp1", "title": "Third-party"}]
        self.server.public_resources = [{"id": "public-resource1", "title": "Public resource"}]
        self.server.media_caption_task_progress = {"progress": [{"id": "caption1"}]}
        self.server.copy_third_part_resources = [{"id": "copy1"}]
        self.server.lark_files = [{"id": "lark1", "name": "Lark file"}]
        self.server.lark_authorization = {"authorized": True}
        self.server.user_links = [{"id": "link1", "url": "https://example.invalid"}]
        self.server.user_storage_used = {"used": 512}
        self.server.resource_folders = [{"id": "folder1"}]
        self.server.wedrive_files = [{"id": "file1", "name": "Drive file"}]
        self.server.media_resources = [{"id": "media-resource1"}]
        self.server.online_videos = [{"id": "video1"}]
        self.server.video_quizzes = [{"id": "vq1"}]
        self.server.video_quizzes_arrears = {"arrears": False}
        self.server.meetings = [{"id": "meeting-media1"}]
        self.server.meeting_time_periods = [{"id": "period1"}]
        self.server.meeting_slots = [{"id": "slot1"}]
        self.server.meeting_shanghaitech = [{"id": "st1"}]
        self.server.tencent_meeting_auth = {"authorized": True}
        self.server.tencent_meeting_authorization_url = {"url": "https://example.invalid/auth"}
        self.server.tencent_meeting_statistics = [{"id": "tencent-stat1"}]
        self.server.lecture_live_schedules = [{"id": "lecture1"}]
        self.server.lecture_live = {"jwt": "ok"}
        self.server.classin_join_url = {"url": "https://example.invalid/classin"}
        self.server.classin_webcast_url = {"url": "https://example.invalid/webcast"}
        self.server.dingtalk_lives = [{"id": "ding1"}]
        self.server.interaction_activities = [{"id": "interaction-live1"}]
        self.server.course_lecture_live_activities = [{"id": "lecture-activity1"}]
        self.server.course_tencent_meeting_activities = [{"id": "tencent-activity1"}]
        self.server.course_templates = [{"id": "template1"}]
        self.server.knowledge_nodes = [{"id": "node1", "name": "Knowledge"}]
        self.server.user_lesson_resource_progress = [{"id": "progress1"}]
        self.server.shanghaitech_lib_resources = [{"id": "st-lib1"}]
        self.server.video_suite_comments = [{"id": "video-comment1"}]
        self.server.project = {"id": "project1", "name": "Course authoring"}
        self.server.projects = [{"id": "project-list1", "name": "Project list"}]
        self.server.blueprint = {"blueprints": [{"id": "blueprint1"}]}
        self.server.outline_setting = {"id": 3, "formatted_options": [{"key": "comment_chinese"}]}
        self.server.my_courses = [{"id": "301", "name": "My Course"}]
        self.server.subjects = [{"id": "subject1", "title": "Question"}]
        self.server.subject_details["subject1"] = {"id": "subject1", "title": "Question"}
        self.server.feedback_activities = [{"id": "77", "title": "Feedback"}]
        self.server.feedback_activity_details["77"] = {"id": "77", "title": "Feedback"}
        self.server.course_feedback_activities["301"] = [{"id": "77", "title": "Feedback"}]
        self.server.course_danmu_configs["301"] = {"enabled": True}
        self.server.chinamcloud_resources = [{"id": "cloud1"}]
        self.server.upload_references = [{"id": "ref-upload1"}]
        self.server.upload_marked_attachments = [{"id": "marked1"}]
        self.server.upload_share_to_courses = [{"id": "301"}]
        self.server.upload_details = [{"id": "up1", "name": "document.pdf"}]
        self.server.upload_document_urls["up1"] = {"url": "https://example.invalid/document"}
        self.server.shared_resources_stat = {"total": 1}
        self.server.shared_resources_video_stat = [{"id": "video-stat1"}]
        self.server.save_resources_check = {"can_save": True}
        self.server.custom_knowledge_graph_stat = {"total": 1}
        self.server.knowledge_graph_kfs_subjects = [{"id": "kfs-subject1"}]
        self.server.knowledge_graph_import_info["301"] = {"status": "ready"}
        self.server.user_course_resource_folders["301"] = {"folders": [{"id": "folder1"}]}
        self.server.course_knowledge_bases["301"] = {"knowledge_bases": [{"id": "kb1"}]}
        self.server.course_knowledge_base_resources["301:kb1"] = [{"id": "resource1"}]
        self.server.h5_courseware_uploads["77:up1:url"] = {"url": "https://example.invalid/h5"}
        self.server.h5_courseware_uploads["77:up1:cmi"] = {"cmi": "ok"}
        self.server.submission_marked_attachments["sub1"] = {
            "marked_attachment_infos": [{"id": "marked1", "email": "student@example.com"}]
        }
        self.server.submission_marked_attachment_details["sub1:up1"] = {"marked_attachment": {"id": "marked1"}}
        self.server.submission_subject_marked_attachments["sub1:subject1"] = {
            "marked_attachment": {"id": "marked-subject1"}
        }
        self.server.my_notes = [{"id": "note1", "title": "Note"}]
        self.server.correction_books = [{"id": "book1", "title": "Correction"}]
        self.server.authz_courses = [{"id": "301", "role": "instructor"}]
        self.server.portal_logo = {"url": "https://example.invalid/logo.png"}
        self.server.course_estimates["301"] = [{"id": "ce1", "title": "Evaluation"}]
        self.server.course_estimate_replies_by_course["301"] = [{"id": "cer1", "course_estimate_id": "ce1"}]
        self.server.course_estimate_replies["ce1"] = [
            {"id": "cer1", "body": "Reply", "email": "student@example.com"}
        ]
        self.server.course_estimate_users["ce1:2"] = {
            "course_estimate_id": "ce1",
            "user_id": "2",
            "email": "student@example.com",
            "answer": "private",
        }
        self.server.questionnaires["q1"] = {"id": "q1", "title": "Survey", "email": "student@example.com"}
        self.server.questionnaire_subjects["q1"] = [
            {"id": "qs1", "type": "single_choice", "description": "Question"}
        ]
        self.server.questionnaire_previews["q1"] = [{"id": "qs1", "type": "single_choice"}]
        self.server.questionnaire_logs["q1"] = [{"id": "log1", "action": "created"}]
        self.server.questionnaire_submissions["q1:qs1"] = {
            "offset": 0,
            "limit": 20,
            "count": 1,
            "submissions": [{"id": "submission1", "email": "student@example.com"}],
        }
        self.server.course_topic_categories["301"] = [{"id": "cat1", "title": "General"}]
        self.server.forum_categories["cat1"] = {"id": "cat1", "topics": [{"id": "topic1", "title": "Hello"}]}
        self.server.resource_groups = [{"id": "rg1", "name": "Teacher Resources"}]
        self.server.resource_group_members["rg1"] = [{"id": "u1", "email": "student@example.com"}]
        self.server.resource_group_folders["rg1"] = [{"id": "rgf1", "name": "Folder"}]
        self.server.resource_group_resources["rg1"] = [{"id": "sr1", "name": "Shared File"}]
        self.server.resource_group_rubrics["rg1"] = [{"id": "rub1", "name": "Rubric"}]
        self.server.resource_group_subject_libs["rg1"] = [{"id": "lib1", "title": "Bank"}]
        self.server.user_resources = [{"id": "ur1", "name": "Personal File"}]
        self.server.user_resource_folder_info["ur1"] = {"resource_id": "ur1", "folderCount": 1, "fileCount": 2}
        self.server.shared_resources = [{"id": "sr1", "name": "Shared File"}]
        self.server.shared_resources_from_me = [{"id": "sfm1", "name": "From Me"}]
        self.server.shared_resources_to_me = [{"id": "stm1", "name": "To Me"}]
        self.server.shared_resource_collections["u1"] = [{"id": "col1", "resource_id": "sr1"}]
        self.server.shared_resource_comments["sr1"] = [{"id": "comment1", "email": "student@example.com"}]
        self.server.shared_resource_classifications = [{"id": "cls1", "name": "Class"}]
        self.server.shared_resource_tags = [{"id": "tag1", "text": "python"}]
        self.server.shared_resource_recommendations = [{"id": "rec1", "name": "Recommended"}]
        self.server.shared_resource_track_users = [{"id": "track1", "email": "student@example.com"}]
        self.server.shared_resource_followers = [{"id": "follower1", "email": "student@example.com"}]
        self.server.download_blobs.update(
            {
                "upload:up1": {"body": b"upload-body", "filename": "lesson.txt", "content_type": "text/plain"},
                "upload-thumbnail:up1": {"body": b"thumb", "filename": "thumb.jpg", "content_type": "image/jpeg"},
                "upload-modified-image:up1": {
                    "body": b"modified",
                    "filename": "avatar.jpg",
                    "content_type": "image/jpeg",
                },
                "upload-swf:up1": {"body": b"swf", "filename": "slides.swf", "content_type": "application/x-shockwave-flash"},
                "upload-reference:ref1": {"body": b"reference", "filename": "reference.pdf", "content_type": "application/pdf"},
                "shared-resource:sr1": {"body": b"shared", "filename": "shared.pdf", "content_type": "application/pdf"},
                "shared-resource-to:sr1": {"body": b"shared-to", "filename": "shared-to.pdf", "content_type": "application/pdf"},
                "wedrive:file1": {"body": b"wedrive", "filename": "drive.docx", "content_type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document"},
                "third-part-preview:tp1": {"body": b"third-preview", "filename": "preview.png", "content_type": "image/png"},
                "third-part-thumbnail:tp1": {"body": b"third-thumb", "filename": "thumbnail.png", "content_type": "image/png"},
            }
        )
        self.server.cc_license_groups = [{"id": "cc", "name": "Creative Commons"}]
        self.server.cc_license_map = {"cc": {"name": "Creative Commons"}}
        self.server.entries = [{"id": "entry1", "name": "Entry"}]
        self.server.entry_references["entry1"] = [{"id": "ref1", "resource_id": "sr1"}]
        self.server.slides = [{"id": "slide1", "title": "Slide"}]
        self.server.slide_records["slide1"] = [{"recording_id": "record1"}]
        self.server.slide_export_statuses["slide1"] = {"status": "finished"}

    async def asyncTearDown(self) -> None:
        tron.CONFIG.clear()
        tron.CONFIG.update(self.original_config)
        tron.BASE_DIR = self.original_base_dir
        self.patch_urls.__exit__(None, None, None)
        await self.server.close()
        self.temp_dir.cleanup()

    async def test_teacher_status_command_json(self) -> None:
        output = []
        args = type("Args", (), {"json": True, "max_courses": 50})()

        with patch("builtins.print", side_effect=output.append):
            result = await tron.teacher_status_command(args)

        self.assertEqual(result, 0)
        payload = json.loads(output[0])
        self.assertEqual(payload["account_type"], "teacher")
        self.assertEqual(payload["teacher_course_count"], 1)

    async def test_teacher_students_command_json_redacts_roster(self) -> None:
        output = []
        args = type(
            "Args",
            (),
            {
                "json": True,
                "course_id": "",
                "limit": 20,
                "max_courses": 50,
                "include_sensitive": False,
            },
        )()

        with patch("builtins.print", side_effect=output.append):
            result = await tron.teacher_students_command(args)

        self.assertEqual(result, 0)
        payload = json.loads(output[0])
        serialized = json.dumps(payload)
        self.assertIn("course_students", payload["supported"])
        self.assertNotIn("student@example.com", serialized)
        self.assertNotIn("S001", serialized)

    async def test_teacher_statistics_air_credit_and_management_commands_json(self) -> None:
        output = []
        stats_args = type(
            "Args",
            (),
            {
                "json": True,
                "course_id": "",
                "conditions_json": '{"keyword":"Student"}',
                "page": 1,
                "page_size": 20,
                "max_courses": 50,
                "include_sensitive": False,
            },
        )()
        air_args = type(
            "Args",
            (),
            {
                "json": True,
                "course_id": "",
                "target": "course",
                "conditions_json": '{"state":"active"}',
                "start_date": "",
                "end_date": "",
                "page": 1,
                "page_size": 20,
                "max_courses": 50,
                "include_sensitive": False,
            },
        )()
        management_args = type(
            "Args",
            (),
            {
                "json": True,
                "conditions_json": '{"keyword":"Weekly"}',
                "page": 1,
                "page_size": 20,
                "include_sensitive": False,
            },
        )()
        calendar_args = type(
            "Args",
            (),
            {
                "json": True,
                "include_sensitive": False,
            },
        )()
        teaching_calendars_args = type(
            "Args",
            (),
            {
                "json": True,
                "keyword": "Week",
                "page": 1,
                "page_size": 20,
                "include_sensitive": False,
            },
        )()
        vtrses_args = type(
            "Args",
            (),
            {
                "json": True,
                "conditions_json": '{"keyword":"VTRS"}',
                "fields": "",
                "need_stat": True,
                "page": 1,
                "page_size": 20,
                "include_sensitive": False,
            },
        )()
        departments_args = type(
            "Args",
            (),
            {
                "json": True,
                "conditions_json": '{"keyword":"Department"}',
                "fields": "",
                "page": 1,
                "page_size": 20,
                "include_sensitive": False,
            },
        )()
        ai_ppt_args = type(
            "Args",
            (),
            {
                "json": True,
                "conditions_json": '{"keyword":"User"}',
                "page": 1,
                "page_size": 20,
                "include_sensitive": False,
            },
        )()
        platform_args = type(
            "Args",
            (),
            {
                "json": True,
                "conditions_json": '{"keyword":"Room"}',
                "fields": "",
                "department_ids": "org1",
                "obe_params_json": '{"course_id":"301"}',
                "page": 1,
                "page_size": 20,
                "include_sensitive": False,
            },
        )()
        org_bulletins_args = type(
            "Args",
            (),
            {
                "json": True,
                "conditions_json": '{"unread":true}',
                "fields": "",
                "page": 1,
                "page_size": 20,
                "include_sensitive": False,
            },
        )()
        catalog_args = type(
            "Args",
            (),
            {
                "json": True,
                "conditions_json": '{"keyword":"Catalog"}',
                "fields": "id,name",
                "org_id": "org1",
                "response_key": "users",
                "page": 1,
                "page_size": 20,
                "include_sensitive": False,
            },
        )()
        media_args = type(
            "Args",
            (),
            {
                "json": True,
                "course_id": "301",
                "activity_id": "77",
                "upload_id": "up1",
                "conditions_json": '{"keyword":"Media"}',
                "fields": "",
                "org_id": "org1",
                "jwt": "demo-jwt",
                "page": 1,
                "page_size": 20,
                "include_sensitive": False,
            },
        )()
        authoring_args = type(
            "Args",
            (),
            {
                "json": True,
                "course_id": "301",
                "activity_id": "77",
                "subject_id": "subject1",
                "submission_id": "sub1",
                "upload_id": "up1",
                "knowledge_base_id": "kb1",
                "conditions_json": '{"keyword":"Author"}',
                "fields": "id,name",
                "page": 1,
                "page_size": 20,
                "include_sensitive": False,
            },
        )()

        with patch("builtins.print", side_effect=output.append):
            stats_result = await tron.teacher_stats_command(stats_args)
            air_result = await tron.teacher_air_credit_command(air_args)
            management_result = await tron.teacher_management_calendar_meetings_command(management_args)
            calendar_result = await tron.teacher_calendar_meetings_command(calendar_args)
            teaching_calendars_result = await tron.teacher_teaching_calendars_command(teaching_calendars_args)
            vtrses_result = await tron.teacher_vtrses_command(vtrses_args)
            departments_result = await tron.teacher_departments_command(departments_args)
            ai_ppt_result = await tron.teacher_ai_ppt_command(ai_ppt_args)
            platform_result = await tron.teacher_platform_command(platform_args)
            org_bulletins_result = await tron.teacher_org_bulletins_command(org_bulletins_args)
            catalog_result = await tron.teacher_catalog_command(catalog_args)
            media_result = await tron.teacher_media_command(media_args)
            authoring_result = await tron.teacher_authoring_command(authoring_args)

        self.assertEqual(stats_result, 0)
        self.assertEqual(air_result, 0)
        self.assertEqual(management_result, 0)
        self.assertEqual(calendar_result, 0)
        self.assertEqual(teaching_calendars_result, 0)
        self.assertEqual(vtrses_result, 0)
        self.assertEqual(departments_result, 0)
        self.assertEqual(ai_ppt_result, 0)
        self.assertEqual(platform_result, 0)
        self.assertEqual(org_bulletins_result, 0)
        self.assertEqual(catalog_result, 0)
        self.assertEqual(media_result, 0)
        self.assertEqual(authoring_result, 0)
        (
            stats_payload,
            air_payload,
            management_payload,
            calendar_payload,
            teaching_calendars_payload,
            vtrses_payload,
            departments_payload,
            ai_ppt_payload,
            platform_payload,
            org_bulletins_payload,
            catalog_payload,
            media_payload,
            authoring_payload,
        ) = [json.loads(item) for item in output]
        self.assertIn("course_stat_students", stats_payload["supported"])
        self.assertIn("course_tpdoe_stat_students", stats_payload["supported"])
        self.assertIn("courses_stats", stats_payload["supported"])
        self.assertIn("stat_activities_for_courses", stats_payload["supported"])
        for endpoint_name in (
            "courses_homeworks_submission_status",
            "courses_settings",
            "exam_submissions",
            "scores_zip_status",
            "course_stat_export_zip_status",
            "homework_zip_status",
            "stat_bulletins",
            "stat_h5_courseware",
            "stat_lesson_rollcall",
            "stat_materials",
            "stat_orgs",
            "stat_scorm",
            "stat_semester",
            "stat_student_rollcall",
            "stat_students",
            "stat_teacher_rollcall",
            "stat_user_info",
            "stat_video",
            "stat_videos",
            "stat_vtrs_enable_status",
            "stat_vtrses_count_info",
            "stat_weblinks",
            "statistic",
            "user_course_certification_scores",
        ):
            self.assertIn(endpoint_name, stats_payload["supported"])
        self.assertIn("air_credit_course_stats", air_payload["supported"])
        self.assertIn("air_credit_user_token", air_payload["supported"])
        self.assertIn("air_credit_users", air_payload["supported"])
        self.assertIn("air_credit_courses", air_payload["supported"])
        self.assertIn("air_credit_audits", air_payload["supported"])
        self.assertEqual(management_payload["name"], "management_calendar_meetings")
        self.assertEqual(calendar_payload["name"], "calendar_meetings")
        self.assertEqual(teaching_calendars_payload["name"], "teaching_calendars")
        self.assertIn("stat_vtrses_data", vtrses_payload["supported"])
        self.assertIn("vtrses_access_code", vtrses_payload["supported"])
        self.assertIn("department_attendance", departments_payload["supported"])
        self.assertIn("ai_ppt_usage", ai_ppt_payload["supported"])
        self.assertIn("org_lang_settings", platform_payload["supported"])
        self.assertIn("program_course_programs", platform_payload["supported"])
        self.assertIn("portal_classifications", platform_payload["supported"])
        self.assertIn("authz_permissions", platform_payload["supported"])
        self.assertIn("authz_course_permissions", platform_payload["supported"])
        self.assertIn("authz_user_roles", platform_payload["supported"])
        self.assertIn("my_classes", platform_payload["supported"])
        self.assertIn("my_teaching_classes", platform_payload["supported"])
        self.assertIn("task_last", platform_payload["supported"])
        self.assertIn("in_progress_homeworks", platform_payload["supported"])
        self.assertIn("virtual_classroom_resources", platform_payload["supported"])
        self.assertIn("todos", platform_payload["supported"])
        self.assertIn("jobs", platform_payload["supported"])
        self.assertIn("inclass_report", platform_payload["supported"])
        self.assertIn("sign_in_stats", platform_payload["supported"])
        self.assertIn("user_recently_visited_courses", platform_payload["supported"])
        self.assertIn("alerts", platform_payload["supported"])
        self.assertIn("alert_logs", platform_payload["supported"])
        self.assertIn("alert_members", platform_payload["supported"])
        self.assertIn("instruction_team_meeting", platform_payload["supported"])
        self.assertIn("org_change_plan_list", platform_payload["supported"])
        self.assertIn("third_party_info", platform_payload["supported"])
        self.assertIn("topics_latest", platform_payload["supported"])
        self.assertIn("user_index_courses_info_status", platform_payload["supported"])
        self.assertIn("user_index_org_summary", platform_payload["supported"])
        self.assertIn("user_profile_stat", platform_payload["supported"])
        self.assertIn("org_bulletins_latest", org_bulletins_payload["supported"])
        self.assertIn("catalog_courses", catalog_payload["supported"])
        self.assertIn("catalog_users_without_authz_roles", catalog_payload["supported"])
        self.assertIn("catalog_course_cover_list", catalog_payload["supported"])
        self.assertIn("catalog_course_shared_records", catalog_payload["supported"])
        self.assertIn("catalog_course_certification", catalog_payload["supported"])
        self.assertIn("catalog_courses_count", catalog_payload["supported"])
        self.assertIn("catalog_courses_public", catalog_payload["supported"])
        self.assertIn("catalog_certifications", catalog_payload["supported"])
        self.assertIn("catalog_certifications_for_management", catalog_payload["supported"])
        self.assertIn("catalog_course_subjects", catalog_payload["supported"])
        self.assertIn("catalog_users", catalog_payload["supported"])
        self.assertIn("catalog_warning_students", catalog_payload["supported"])
        self.assertIn("catalog_interactions", catalog_payload["supported"])
        self.assertIn("catalog_interaction_vote", catalog_payload["supported"])
        self.assertIn("catalog_campus_subject_lib_classification_counts", catalog_payload["supported"])
        self.assertIn("catalog_campus_subject_lib_subjects", catalog_payload["supported"])
        self.assertIn("media_lark_files", media_payload["supported"])
        self.assertIn("media_public_resources", media_payload["supported"])
        self.assertIn("media_caption_task_progress", media_payload["supported"])
        self.assertIn("media_wedrive_files", media_payload["supported"])
        self.assertIn("media_tencent_meeting_statistics", media_payload["supported"])
        self.assertIn("media_video_quizzes", media_payload["supported"])
        self.assertIn("media_upload_preview", media_payload["supported"])
        self.assertIn("media_upload_audio", media_payload["supported"])
        self.assertIn("media_shanghaitech_lib_resources", media_payload["supported"])
        self.assertIn("media_video_suite_comments", media_payload["supported"])
        self.assertIn("authoring_project", authoring_payload["supported"])
        self.assertIn("authoring_projects", authoring_payload["supported"])
        self.assertIn("authoring_blueprint", authoring_payload["supported"])
        self.assertIn("authoring_outline_setting", authoring_payload["supported"])
        self.assertIn("authoring_submission_marked_attachments", authoring_payload["supported"])
        self.assertIn("authoring_h5_courseware_upload_cmi", authoring_payload["supported"])
        self.assertIn("authoring_upload_details_query", authoring_payload["supported"])
        self.assertIn("authoring_upload_document_url", authoring_payload["supported"])
        self.assertIn("authoring_custom_knowledge_graph_stat", authoring_payload["supported"])
        self.assertIn("authoring_knowledge_graph_kfs_subjects", authoring_payload["supported"])
        self.assertIn("authoring_knowledge_graph_forest_stats", authoring_payload["supported"])
        self.assertIn("authoring_shared_resources_admin_to_other_orgs", authoring_payload["supported"])
        self.assertIn("authoring_knowledge_graph_import_info", authoring_payload["supported"])
        self.assertIn("authoring_course_knowledge_base_resources", authoring_payload["supported"])
        self.assertIn("authoring_my_notes", authoring_payload["supported"])
        self.assertIn("authoring_portal_logo", authoring_payload["supported"])
        self.assertEqual(self.server.course_stat_student_requests[0]["body"], {"keyword": "Student"})
        self.assertEqual(self.server.management_calendar_requests[0]["body"], {"keyword": "Weekly"})
        self.assertEqual(self.server.department_requests[-1]["body"], {"keyword": "Department"})
        self.assertEqual(self.server.ai_ppt_requests[0]["body"], {"keyword": "User"})
        self.assertEqual(
            next(item for item in self.server.platform_requests if item["name"] == "program_course_programs")["query"],
            {"department_ids": "org1"},
        )
        self.assertEqual(
            self.server.org_bulletin_requests[0]["query"]["conditions"],
            '{"unread":true}',
        )
        self.assertEqual(
            next(item for item in self.server.catalog_requests if item["name"] == "catalog_courses")["body"],
            {"keyword": "Catalog", "fields": "id,name"},
        )
        self.assertEqual(
            next(item for item in self.server.media_requests if item["name"] == "media_classin_join_url")["query"],
            {"course_id": "301", "activity_id": "77"},
        )
        self.assertEqual(
            next(item for item in self.server.authoring_requests if item["name"] == "authoring_my_courses")["body"],
            {"keyword": "Author"},
        )
        self.assertEqual(
            next(item for item in self.server.authoring_requests if item["name"] == "authoring_h5_courseware_upload_url")["query"],
            {},
        )

    async def test_teacher_calendar_meeting_write_commands_json(self) -> None:
        output = []
        common = {"json": True, "execute": True, "yes": True, "include_sensitive": False}
        dry_args = type(
            "Args",
            (),
            {
                "json": True,
                "payload_json": '{"title":"Dry"}',
                "execute": False,
                "yes": False,
                "include_sensitive": False,
            },
        )()
        create_args = type("Args", (), {**common, "payload_json": '{"id":"meeting2","title":"Created"}'})()
        update_args = type(
            "Args",
            (),
            {**common, "meeting_id": "meeting2", "payload_json": '{"title":"Updated"}'},
        )()
        delete_args = type("Args", (), {**common, "meeting_id": "meeting2"})()

        with patch("builtins.print", side_effect=output.append):
            dry_result = await tron.teacher_create_calendar_meeting_command(dry_args)
            create_result = await tron.teacher_create_calendar_meeting_command(create_args)
            update_result = await tron.teacher_update_calendar_meeting_command(update_args)
            delete_result = await tron.teacher_delete_calendar_meeting_command(delete_args)

        self.assertEqual(dry_result, 0)
        self.assertEqual(create_result, 0)
        self.assertEqual(update_result, 0)
        self.assertEqual(delete_result, 0)
        payloads = [json.loads(item) for item in output]
        self.assertEqual([payload["status"] for payload in payloads], ["dry_run", "ok", "ok", "ok"])
        self.assertEqual(self.server.created_calendar_meetings[0]["body"], {"id": "meeting2", "title": "Created"})
        self.assertEqual(self.server.updated_calendar_meetings[0]["body"], {"title": "Updated"})
        self.assertEqual(self.server.deleted_calendar_meetings, ["meeting2"])

    async def test_teacher_air_credit_and_teaching_calendar_write_commands_json(self) -> None:
        output = []
        common = {"json": True, "execute": True, "yes": True, "include_sensitive": False}
        dry_args = type(
            "Args",
            (),
            {
                "json": True,
                "payload_json": '{"course_id":"301","credits":10}',
                "execute": False,
                "yes": False,
                "include_sensitive": False,
            },
        )()
        create_air_args = type("Args", (), {**common, "payload_json": '{"course_id":"301","credits":10}'})()
        update_air_args = type(
            "Args",
            (),
            {**common, "payload_json": '{"assignments":[{"course_id":"301","credits":12}]}'},
        )()
        status_args = type(
            "Args",
            (),
            {**common, "payload_json": '{"assign_ids":["a1"],"assign_type":"course","status":"active"}'},
        )()
        clear_args = type("Args", (), {**common, "payload_json": '{"assign_id":"a1","assign_type":"course"}'})()
        limit_args = type("Args", (), {**common, "payload_json": "", "usage_limit": "30"})()
        create_teaching_args = type(
            "Args",
            (),
            {
                **common,
                "course_id": "",
                "payload_json": '{"id":"tc2","title":"Week 2"}',
                "max_courses": 50,
            },
        )()
        update_teaching_args = type(
            "Args",
            (),
            {**common, "calendar_id": "tc2", "payload_json": '{"title":"Week 2 Updated"}'},
        )()
        delete_teaching_args = type("Args", (), {**common, "calendar_id": "tc2"})()

        with patch("builtins.print", side_effect=output.append):
            dry_result = await tron.teacher_create_air_credit_assignments_command(dry_args)
            create_air_result = await tron.teacher_create_air_credit_assignments_command(create_air_args)
            update_air_result = await tron.teacher_update_air_credit_assignments_command(update_air_args)
            status_result = await tron.teacher_update_air_credit_status_command(status_args)
            clear_result = await tron.teacher_clear_air_credit_remaining_credits_command(clear_args)
            limit_result = await tron.teacher_update_air_credit_course_usage_limit_command(limit_args)
            create_teaching_result = await tron.teacher_create_teaching_calendar_command(create_teaching_args)
            update_teaching_result = await tron.teacher_update_teaching_calendar_command(update_teaching_args)
            delete_teaching_result = await tron.teacher_delete_teaching_calendar_command(delete_teaching_args)

        self.assertEqual(dry_result, 0)
        self.assertEqual(create_air_result, 0)
        self.assertEqual(update_air_result, 0)
        self.assertEqual(status_result, 0)
        self.assertEqual(clear_result, 0)
        self.assertEqual(limit_result, 0)
        self.assertEqual(create_teaching_result, 0)
        self.assertEqual(update_teaching_result, 0)
        self.assertEqual(delete_teaching_result, 0)
        payloads = [json.loads(item) for item in output]
        self.assertEqual(
            [payload["status"] for payload in payloads],
            ["dry_run", "ok", "ok", "ok", "ok", "ok", "ok", "ok", "ok"],
        )
        self.assertEqual(
            self.server.air_credit_action_requests[0]["body"],
            {"assignments": {"course_id": "301", "credits": 10}},
        )
        self.assertEqual(
            self.server.air_credit_action_requests[1]["body"],
            {"assignments": [{"course_id": "301", "credits": 12}]},
        )
        self.assertEqual(self.server.air_credit_action_requests[2]["body"]["status"], "active")
        self.assertEqual(self.server.air_credit_action_requests[3]["body"], {"assign_id": "a1", "assign_type": "course"})
        self.assertEqual(self.server.air_credit_action_requests[4]["body"], {"usage_limit": "30"})
        self.assertEqual(self.server.created_teaching_calendars[0]["course_id"], "301")
        self.assertEqual(self.server.updated_teaching_calendars[0]["body"], {"title": "Week 2 Updated"})
        self.assertEqual(self.server.deleted_teaching_calendars, ["tc2"])

    async def test_teacher_groups_command_json(self) -> None:
        output = []
        args = type(
            "Args",
            (),
            {
                "json": True,
                "course_id": "",
                "limit": 20,
                "max_courses": 50,
                "include_sensitive": False,
            },
        )()

        with patch("builtins.print", side_effect=output.append):
            result = await tron.teacher_groups_command(args)

        self.assertEqual(result, 0)
        payload = json.loads(output[0])
        self.assertIn("course_group_sets", payload["supported"])
        self.assertIn("course_groups_submission_status", payload["supported"])
        self.assertIn("teaching_team_groups", payload["supported"])

    async def test_teacher_bulletins_command_json_redacts_roster_fields(self) -> None:
        output = []
        args = type(
            "Args",
            (),
            {
                "json": True,
                "course_id": "",
                "limit": 20,
                "max_courses": 50,
                "include_sensitive": False,
            },
        )()

        with patch("builtins.print", side_effect=output.append):
            result = await tron.teacher_bulletins_command(args)

        self.assertEqual(result, 0)
        payload = json.loads(output[0])
        self.assertIn("course_bulletins", payload["supported"])
        serialized = json.dumps(payload)
        self.assertNotIn("student@example.com", serialized)
        self.assertNotIn("S001", serialized)

    async def test_teacher_group_set_command_json_redacts_members(self) -> None:
        output = []
        args = type(
            "Args",
            (),
            {
                "json": True,
                "group_set_id": "g1",
                "include_sensitive": False,
            },
        )()

        with patch("builtins.print", side_effect=output.append):
            result = await tron.teacher_group_set_command(args)

        self.assertEqual(result, 0)
        payload = json.loads(output[0])
        self.assertIn("group_set_detail", payload["supported"])
        self.assertIn("group_set_groups", payload["supported"])
        self.assertIn("group_set_activities", payload["supported"])
        self.assertIn("current_user_group", payload["supported"])
        serialized = json.dumps(payload)
        self.assertNotIn("student@example.com", serialized)
        self.assertNotIn("S001", serialized)

    async def test_teacher_scores_and_activity_commands_json(self) -> None:
        output = []
        self.server.rubrics = [{"id": "3", "name": "Rubric"}]
        self.server.exams["1"] = {"id": "1", "title": "Quiz", "email": "student@example.com"}
        self.server.examinee_actions["1"] = [{"id": 1, "student_id": 2, "user_no": "S001"}]
        self.server.classrooms["c1"] = {"id": "c1", "title": "Classroom", "email": "student@example.com"}
        self.server.classroom_score_lists["c1"] = [{"student_id": 2, "score": 88, "user_no": "S001"}]
        scores_args = type(
            "Args",
            (),
            {
                "json": True,
                "course_id": "",
                "limit": 20,
                "max_courses": 50,
                "include_sensitive": False,
            },
        )()
        activity_args = type(
            "Args",
            (),
            {
                "json": True,
                "activity_id": "77",
                "limit": 20,
                "include_sensitive": False,
            },
        )()
        exam_args = type(
            "Args",
            (),
            {
                "json": True,
                "exam_id": "1",
                "include_sensitive": False,
            },
        )()
        classroom_args = type(
            "Args",
            (),
            {
                "json": True,
                "classroom_id": "c1",
                "include_sensitive": False,
            },
        )()
        questionnaire_args = type(
            "Args",
            (),
            {
                "json": True,
                "questionnaire_id": "q1",
                "include_sensitive": False,
            },
        )()

        with patch("builtins.print", side_effect=output.append):
            scores_result = await tron.teacher_scores_command(scores_args)
            activity_result = await tron.teacher_activity_command(activity_args)
            exam_result = await tron.teacher_exam_command(exam_args)
            classroom_result = await tron.teacher_classroom_command(classroom_args)
            questionnaire_result = await tron.teacher_questionnaire_command(questionnaire_args)

        self.assertEqual(scores_result, 0)
        self.assertEqual(activity_result, 0)
        self.assertEqual(exam_result, 0)
        self.assertEqual(classroom_result, 0)
        self.assertEqual(questionnaire_result, 0)
        scores_payload = json.loads(output[-5])
        activity_payload = json.loads(output[-4])
        exam_payload = json.loads(output[-3])
        classroom_payload = json.loads(output[-2])
        questionnaire_payload = json.loads(output[-1])
        self.assertIn("score_status", scores_payload["supported"])
        self.assertIn("custom_score_items", scores_payload["supported"])
        self.assertIn("rubrics_template", scores_payload["supported"])
        self.assertIn("activity_comments", activity_payload["supported"])
        self.assertIn("exam_detail", exam_payload["supported"])
        self.assertIn("classroom_exam_detail", classroom_payload["supported"])
        self.assertIn("questionnaire_detail", questionnaire_payload["supported"])
        serialized = json.dumps(
            {
                "activity": activity_payload,
                "exam": exam_payload,
                "classroom": classroom_payload,
                "questionnaire": questionnaire_payload,
            }
        )
        self.assertNotIn("student@example.com", serialized)
        self.assertNotIn("S001", serialized)

    async def test_teacher_generic_get_and_request_commands(self) -> None:
        output = []
        self.server.rubrics = [{"id": "3", "name": "Rubric"}]
        get_args = type(
            "Args",
            (),
            {
                "json": True,
                "path": "/api/rubrics?fields=id,name,conditions",
                "include_sensitive": False,
            },
        )()
        dry_run_args = type(
            "Args",
            (),
            {
                "json": True,
                "method": "PUT",
                "path": "/api/score-publish-item-maps",
                "payload_json": '{"item_id":10}',
                "execute": False,
                "yes": False,
                "include_sensitive": False,
            },
        )()
        execute_args = type(
            "Args",
            (),
            {
                "json": True,
                "method": "PUT",
                "path": "/api/score-publish-item-maps",
                "payload_json": '{"item_id":10}',
                "execute": True,
                "yes": True,
                "include_sensitive": False,
            },
        )()

        with patch("builtins.print", side_effect=output.append):
            get_result = await tron.teacher_get_command(get_args)
            dry_run_result = await tron.teacher_request_command(dry_run_args)
            execute_result = await tron.teacher_request_command(execute_args)

        self.assertEqual(get_result, 0)
        self.assertEqual(dry_run_result, 0)
        self.assertEqual(execute_result, 0)
        self.assertEqual(json.loads(output[-3])["status"], "ok")
        self.assertEqual(json.loads(output[-2])["status"], "dry_run")
        self.assertEqual(json.loads(output[-1])["status"], "ok")
        self.assertEqual(self.server.updated_score_publish_item_maps[0]["body"], {"item_id": 10})

    async def test_teacher_check_activity_dependents_command_json(self) -> None:
        output = []
        self.server.activity_dependents["77"] = True
        args = type(
            "Args",
            (),
            {
                "json": True,
                "activity_ids": "77,88",
                "activity_type": "homework",
                "include_sensitive": False,
            },
        )()

        with patch("builtins.print", side_effect=output.append):
            result = await tron.teacher_check_activity_dependents_command(args)

        self.assertEqual(result, 0)
        payload = json.loads(output[0])
        self.assertEqual(payload["status"], "ok")
        self.assertEqual(payload["summary"]["has_dependents"], True)
        self.assertEqual(self.server.checked_activity_dependents[0]["activity_ids"], ["77", "88"])
        self.assertEqual(self.server.checked_activity_dependents[0]["activity_type"], "homework")

    async def test_teacher_outline_and_chinamcloud_action_commands_json(self) -> None:
        output = []
        notify_args = type(
            "Args",
            (),
            {
                "json": True,
                "course_ids": "101,102",
                "payload_json": "",
                "execute": True,
                "yes": True,
                "include_sensitive": False,
            },
        )()
        sync_args = type(
            "Args",
            (),
            {
                "json": True,
                "course_ids": "101,102",
                "payload_json": "",
                "execute": True,
                "yes": True,
                "include_sensitive": False,
            },
        )()
        chinamcloud_args = type(
            "Args",
            (),
            {
                "json": True,
                "resources_json": '[{"id":"cloud1"}]',
                "payload_json": "",
                "execute": True,
                "yes": True,
                "include_sensitive": False,
            },
        )()
        course_outline_args = type(
            "Args",
            (),
            {
                "json": True,
                "course_id": "301",
                "payload_json": '{"id":"301","comment_chinese":"Intro"}',
                "execute": True,
                "yes": True,
                "max_courses": 50,
                "include_sensitive": False,
            },
        )()
        create_setting_args = type(
            "Args",
            (),
            {
                "json": True,
                "setting_id": "3",
                "payload_json": '{"key":"objective"}',
                "execute": True,
                "yes": True,
                "include_sensitive": False,
            },
        )()
        update_setting_args = type(
            "Args",
            (),
            {
                "json": True,
                "setting_id": "3",
                "payload_json": '{"key":"objective","title":"Objective"}',
                "execute": True,
                "yes": True,
                "include_sensitive": False,
            },
        )()
        sort_setting_args = type(
            "Args",
            (),
            {
                "json": True,
                "setting_id": "3",
                "payload_json": '{"keys":["comment_chinese","objective"]}',
                "execute": True,
                "yes": True,
                "include_sensitive": False,
            },
        )()
        delete_option_args = type(
            "Args",
            (),
            {
                "json": True,
                "setting_id": "3",
                "option_key": "objective",
                "execute": True,
                "yes": True,
                "include_sensitive": False,
            },
        )()
        toggle_setting_args = type(
            "Args",
            (),
            {
                "json": True,
                "execute": True,
                "yes": True,
                "include_sensitive": False,
            },
        )()
        required_options_args = type(
            "Args",
            (),
            {
                "json": True,
                "setting_id": "3",
                "required_options_json": '["comment_chinese"]',
                "payload_json": "",
                "execute": True,
                "yes": True,
                "include_sensitive": False,
            },
        )()
        update_enrollment_role_args = type(
            "Args",
            (),
            {
                "json": True,
                "enrollment_id": "en1",
                "role": "assistant_instructor",
                "role_id": "role1",
                "payload_json": "",
                "execute": True,
                "yes": True,
                "include_sensitive": False,
            },
        )()
        update_enrollments_role_args = type(
            "Args",
            (),
            {
                "json": True,
                "enrollment_ids": "en1,en2",
                "role": "student",
                "payload_json": "",
                "execute": True,
                "yes": True,
                "include_sensitive": False,
            },
        )()
        delete_enrollment_args = type(
            "Args",
            (),
            {
                "json": True,
                "enrollment_id": "en2",
                "execute": True,
                "yes": True,
                "include_sensitive": False,
            },
        )()
        delete_enrollments_args = type(
            "Args",
            (),
            {
                "json": True,
                "enrollment_ids": "en3,en4",
                "payload_json": "",
                "execute": True,
                "yes": True,
                "include_sensitive": False,
            },
        )()

        with patch("builtins.print", side_effect=output.append):
            notify_result = await tron.teacher_notify_outline_editing_command(notify_args)
            sync_result = await tron.teacher_sync_courses_from_urp_command(sync_args)
            chinamcloud_result = await tron.teacher_update_chinamcloud_resources_command(chinamcloud_args)
            course_outline_result = await tron.teacher_update_course_outline_command(course_outline_args)
            create_setting_result = await tron.teacher_create_outline_setting_command(create_setting_args)
            update_setting_result = await tron.teacher_update_outline_setting_command(update_setting_args)
            sort_setting_result = await tron.teacher_sort_outline_setting_command(sort_setting_args)
            delete_option_result = await tron.teacher_delete_outline_setting_option_command(delete_option_args)
            toggle_setting_result = await tron.teacher_toggle_outline_setting_command(toggle_setting_args)
            required_options_result = await tron.teacher_update_outline_required_options_command(required_options_args)
            update_enrollment_role_result = await tron.teacher_update_enrollment_role_command(update_enrollment_role_args)
            update_enrollments_role_result = await tron.teacher_update_enrollments_role_command(update_enrollments_role_args)
            delete_enrollment_result = await tron.teacher_delete_enrollment_command(delete_enrollment_args)
            delete_enrollments_result = await tron.teacher_delete_enrollments_command(delete_enrollments_args)

        self.assertEqual(notify_result, 0)
        self.assertEqual(sync_result, 0)
        self.assertEqual(chinamcloud_result, 0)
        self.assertEqual(course_outline_result, 0)
        self.assertEqual(create_setting_result, 0)
        self.assertEqual(update_setting_result, 0)
        self.assertEqual(sort_setting_result, 0)
        self.assertEqual(delete_option_result, 0)
        self.assertEqual(toggle_setting_result, 0)
        self.assertEqual(required_options_result, 0)
        self.assertEqual(update_enrollment_role_result, 0)
        self.assertEqual(update_enrollments_role_result, 0)
        self.assertEqual(delete_enrollment_result, 0)
        self.assertEqual(delete_enrollments_result, 0)
        self.assertEqual([json.loads(item)["status"] for item in output], ["ok"] * len(output))
        self.assertEqual(self.server.outline_notifications[0]["body"], {"course_ids": ["101", "102"]})
        self.assertEqual(self.server.synced_courses_from_urp[0]["body"], {"course_ids": ["101", "102"]})
        self.assertEqual(self.server.chinamcloud_uploads[0]["body"], {"resources": [{"id": "cloud1"}]})
        self.assertEqual(self.server.updated_course_outlines[0]["body"], {"id": "301", "comment_chinese": "Intro"})
        self.assertEqual(
            [item["action"] for item in self.server.outline_setting_actions],
            [
                "create_outline_setting",
                "update_outline_setting",
                "sort_outline_setting",
                "delete_outline_setting_option",
                "toggle_outline_setting",
                "update_outline_required_options",
            ],
        )
        self.assertEqual(
            self.server.updated_enrollment_roles[0]["body"],
            {"role": "assistant_instructor", "role_id": "role1"},
        )
        self.assertEqual(
            self.server.updated_enrollments_roles[0]["body"],
            {"enrollment_ids": ["en1", "en2"], "role": "student"},
        )
        self.assertEqual(self.server.deleted_enrollments[0], {"enrollment_id": "en2", "body": {}})
        self.assertEqual(self.server.deleted_enrollments[1], {"body": {"enrollment_ids": ["en3", "en4"]}})

    async def test_teacher_forum_completion_and_resource_read_commands_json(self) -> None:
        output = []
        completion_args = type(
            "Args",
            (),
            {
                "json": True,
                "course_id": "",
                "activity_type": "homework",
                "max_courses": 50,
                "include_sensitive": False,
            },
        )()
        course_completion_args = type(
            "Args",
            (),
            {
                "json": True,
                "course_id": "",
                "max_courses": 50,
                "include_sensitive": False,
            },
        )()
        categories_args = type(
            "Args",
            (),
            {
                "json": True,
                "course_id": "",
                "fields": "",
                "conditions": "",
                "page": 1,
                "page_size": 20,
                "no_group_topic_categories": False,
                "max_courses": 50,
                "include_sensitive": False,
            },
        )()
        category_args = type(
            "Args",
            (),
            {
                "json": True,
                "category_id": "cat1",
                "fields": "",
                "conditions": "",
                "page": 1,
                "page_size": 20,
                "include_sensitive": False,
            },
        )()
        license_args = type(
            "Args",
            (),
            {"json": True, "activity_id": "77", "include_sensitive": False},
        )()
        subject_libs_args = type(
            "Args",
            (),
            {
                "json": True,
                "course_id": "",
                "scope": "course",
                "lib_type": "all",
                "parent_id": "0",
                "predicate": "id",
                "reverse": "true",
                "without_folder": False,
                "max_courses": 50,
                "include_sensitive": False,
            },
        )()
        subject_lib_subjects_args = type(
            "Args",
            (),
            {
                "json": True,
                "subject_lib_id": "lib1",
                "keyword": "Question",
                "subject_type": "single_choice",
                "include_sensitive": False,
            },
        )()
        subject_lib_statistic_args = type(
            "Args",
            (),
            {
                "json": True,
                "subject_lib_id": "lib1",
                "conditions": "{}",
                "page": 1,
                "page_size": 20,
                "include_sensitive": False,
            },
        )()
        subject_lib_nodes_args = type(
            "Args",
            (),
            {"json": True, "subject_lib_id": "lib1", "include_sensitive": False},
        )()
        subject_lib_folders_args = type(
            "Args",
            (),
            {
                "json": True,
                "course_id": "",
                "referrer_type": "course",
                "referrer_id": "",
                "parent_id": "0",
                "max_courses": 50,
                "include_sensitive": False,
            },
        )()
        questionnaire_submissions_args = type(
            "Args",
            (),
            {
                "json": True,
                "questionnaire_id": "q1",
                "subject_id": "qs1",
                "offset": 0,
                "limit": 20,
                "include_sensitive": False,
            },
        )()
        course_estimates_args = type(
            "Args",
            (),
            {
                "json": True,
                "course_id": "",
                "limit": 20,
                "max_courses": 50,
                "include_sensitive": False,
            },
        )()
        course_estimate_replies_args = type(
            "Args",
            (),
            {"json": True, "course_estimate_id": "ce1", "include_sensitive": False},
        )()
        course_estimate_user_args = type(
            "Args",
            (),
            {"json": True, "course_estimate_id": "ce1", "user_id": "2", "include_sensitive": False},
        )()
        course_packages_args = type(
            "Args",
            (),
            {
                "json": True,
                "course_id": "",
                "limit": 20,
                "max_courses": 50,
                "include_sensitive": False,
            },
        )()
        course_package_course_args = type(
            "Args",
            (),
            {"json": True, "course_package_id": "cp1", "fields": "", "include_sensitive": False},
        )()
        courseware_quizzes_args = type(
            "Args",
            (),
            {"json": True, "activity_id": "77", "include_sensitive": False},
        )()
        courseware_quiz_subjects_args = type(
            "Args",
            (),
            {"json": True, "courseware_quiz_id": "cwq1", "include_sensitive": False},
        )()
        courseware_quiz_settings_args = type(
            "Args",
            (),
            {"json": True, "include_sensitive": False},
        )()

        with patch("builtins.print", side_effect=output.append):
            completion_result = await tron.teacher_completion_criteria_command(completion_args)
            course_completion_result = await tron.teacher_course_completion_criteria_command(course_completion_args)
            categories_result = await tron.teacher_forum_categories_command(categories_args)
            category_result = await tron.teacher_forum_category_command(category_args)
            license_result = await tron.teacher_activity_uploads_license_command(license_args)
            subject_libs_result = await tron.teacher_subject_libs_command(subject_libs_args)
            subject_lib_subjects_result = await tron.teacher_subject_lib_subjects_command(subject_lib_subjects_args)
            subject_lib_statistic_result = await tron.teacher_subject_lib_statistic_command(subject_lib_statistic_args)
            subject_lib_nodes_result = await tron.teacher_subject_lib_knowledge_nodes_command(subject_lib_nodes_args)
            subject_lib_folders_result = await tron.teacher_subject_lib_folders_command(subject_lib_folders_args)
            questionnaire_submissions_result = await tron.teacher_questionnaire_submissions_command(
                questionnaire_submissions_args
            )
            course_estimates_result = await tron.teacher_course_estimates_command(course_estimates_args)
            course_estimate_replies_result = await tron.teacher_course_estimate_replies_command(
                course_estimate_replies_args
            )
            course_estimate_user_result = await tron.teacher_course_estimate_user_command(course_estimate_user_args)
            course_packages_result = await tron.teacher_course_packages_command(course_packages_args)
            course_package_course_result = await tron.teacher_course_package_course_command(course_package_course_args)
            courseware_quizzes_result = await tron.teacher_courseware_quizzes_command(courseware_quizzes_args)
            courseware_quiz_subjects_result = await tron.teacher_courseware_quiz_subjects_command(
                courseware_quiz_subjects_args
            )
            courseware_quiz_settings_result = await tron.teacher_courseware_quiz_settings_command(
                courseware_quiz_settings_args
            )

        self.assertEqual(completion_result, 0)
        self.assertEqual(course_completion_result, 0)
        self.assertEqual(categories_result, 0)
        self.assertEqual(category_result, 0)
        self.assertEqual(license_result, 0)
        self.assertEqual(subject_libs_result, 0)
        self.assertEqual(subject_lib_subjects_result, 0)
        self.assertEqual(subject_lib_statistic_result, 0)
        self.assertEqual(subject_lib_nodes_result, 0)
        self.assertEqual(subject_lib_folders_result, 0)
        self.assertEqual(questionnaire_submissions_result, 0)
        self.assertEqual(course_estimates_result, 0)
        self.assertEqual(course_estimate_replies_result, 0)
        self.assertEqual(course_estimate_user_result, 0)
        self.assertEqual(course_packages_result, 0)
        self.assertEqual(course_package_course_result, 0)
        self.assertEqual(courseware_quizzes_result, 0)
        self.assertEqual(courseware_quiz_subjects_result, 0)
        self.assertEqual(courseware_quiz_settings_result, 0)
        for item in output[-19:]:
            self.assertEqual(json.loads(item)["status"], "ok")
        serialized = json.dumps([json.loads(item) for item in output[-8:]])
        self.assertNotIn("student@example.com", serialized)

    async def test_teacher_resource_library_commands_json(self) -> None:
        output = []
        resource_groups_args = type(
            "Args",
            (),
            {"json": True, "fields": "", "include_sensitive": False},
        )()
        group_resources_args = type(
            "Args",
            (),
            {
                "json": True,
                "resource_group_id": "rg1",
                "conditions": "",
                "page": 1,
                "page_size": 20,
                "include_sensitive": False,
            },
        )()
        shared_args = type(
            "Args",
            (),
            {
                "json": True,
                "source": "to-me",
                "conditions": "",
                "page": 1,
                "page_size": 20,
                "include_sensitive": False,
            },
        )()
        comments_args = type(
            "Args",
            (),
            {"json": True, "resource_id": "sr1", "page": 1, "page_size": 20, "include_sensitive": False},
        )()
        entries_args = type(
            "Args",
            (),
            {"json": True, "fields": "", "conditions": "", "page": 1, "page_size": 20, "include_sensitive": False},
        )()
        slides_args = type(
            "Args",
            (),
            {"json": True, "keyword": "", "include_sensitive": False},
        )()
        dry_action_args = type(
            "Args",
            (),
            {
                "json": True,
                "payload_json": '{"id":"rg2","name":"Dry"}',
                "execute": False,
                "yes": False,
                "include_sensitive": False,
            },
        )()

        with patch("builtins.print", side_effect=output.append):
            resource_groups_result = await tron.teacher_resource_groups_command(resource_groups_args)
            group_resources_result = await tron.teacher_resource_group_resources_command(group_resources_args)
            shared_result = await tron.teacher_shared_resources_command(shared_args)
            comments_result = await tron.teacher_shared_resource_comments_command(comments_args)
            entries_result = await tron.teacher_entries_command(entries_args)
            slides_result = await tron.teacher_slides_command(slides_args)
            dry_action_result = await tron.teacher_create_resource_group_command(dry_action_args)

        self.assertEqual(resource_groups_result, 0)
        self.assertEqual(group_resources_result, 0)
        self.assertEqual(shared_result, 0)
        self.assertEqual(comments_result, 0)
        self.assertEqual(entries_result, 0)
        self.assertEqual(slides_result, 0)
        self.assertEqual(dry_action_result, 0)
        for item in output[-7:-1]:
            self.assertEqual(json.loads(item)["status"], "ok")
        self.assertEqual(json.loads(output[-1])["status"], "dry_run")
        self.assertEqual(self.server.created_resource_groups, [])
        serialized = json.dumps([json.loads(item) for item in output[-7:]])
        self.assertNotIn("student@example.com", serialized)

    async def test_teacher_download_commands_json_write_files(self) -> None:
        output = []
        with tempfile.TemporaryDirectory() as temp_dir:
            output_dir = Path(temp_dir) / "downloads"
            output_dir.mkdir()
            existing_path = output_dir / "existing.pdf"
            existing_path.write_bytes(b"old")
            download_args = type(
                "Args",
                (),
                {
                    "json": True,
                    "path": "/api/uploads/up1/blob",
                    "output": str(output_dir / "generic.txt"),
                    "overwrite": False,
                },
            )()
            upload_args = type(
                "Args",
                (),
                {
                    "json": True,
                    "upload_id": "up1",
                    "output": str(output_dir),
                    "overwrite": False,
                    "preview": True,
                    "activity_type": "homework",
                },
            )()
            shared_args = type(
                "Args",
                (),
                {
                    "json": True,
                    "resource_id": "sr1",
                    "output": str(existing_path),
                    "overwrite": False,
                    "share_to": False,
                },
            )()
            third_part_args = type(
                "Args",
                (),
                {
                    "json": True,
                    "upload_id": "tp1",
                    "kind": "thumbnail",
                    "output": str(output_dir / "third.png"),
                    "overwrite": False,
                },
            )()

            with patch("builtins.print", side_effect=output.append):
                download_result = await tron.teacher_download_command(download_args)
                upload_result = await tron.teacher_download_upload_command(upload_args)
                shared_result = await tron.teacher_download_shared_resource_command(shared_args)
                third_part_result = await tron.teacher_download_third_part_upload_command(third_part_args)

            self.assertEqual(download_result, 0)
            self.assertEqual(upload_result, 0)
            self.assertEqual(shared_result, 1)
            self.assertEqual(third_part_result, 0)
            payloads = [json.loads(item) for item in output]
            self.assertEqual(payloads[0]["status"], "ok")
            self.assertEqual(payloads[1]["status"], "ok")
            self.assertEqual(payloads[2]["status"], "output_exists")
            self.assertEqual(payloads[3]["status"], "ok")
            self.assertEqual((output_dir / "generic.txt").read_bytes(), b"upload-body")
            self.assertEqual((output_dir / "lesson.txt").read_bytes(), b"upload-body")
            self.assertEqual((output_dir / "third.png").read_bytes(), b"third-thumb")
            self.assertEqual(existing_path.read_bytes(), b"old")

    async def test_teacher_upload_file_command_json_dry_run_and_execute(self) -> None:
        output = []
        with tempfile.TemporaryDirectory() as temp_dir:
            file_path = Path(temp_dir) / "command-upload.txt"
            file_path.write_text("command upload", encoding="utf-8")
            dry_args = type(
                "Args",
                (),
                {
                    "json": True,
                    "file": str(file_path),
                    "metadata_json": '{"parent_id":"folder1"}',
                    "name": "command.txt",
                    "content_type": "",
                    "parent_id": "",
                    "execute": False,
                    "yes": False,
                    "include_sensitive": False,
                },
            )()
            execute_args = type(
                "Args",
                (),
                {
                    "json": True,
                    "file": str(file_path),
                    "metadata_json": "{}",
                    "name": "command.txt",
                    "content_type": "text/plain",
                    "parent_id": "folder2",
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            )()

            with patch("builtins.print", side_effect=output.append):
                dry_result = await tron.teacher_upload_file_command(dry_args)
                execute_result = await tron.teacher_upload_file_command(execute_args)

            self.assertEqual(dry_result, 0)
            self.assertEqual(execute_result, 0)
            payloads = [json.loads(item) for item in output]
            self.assertEqual(payloads[0]["status"], "dry_run")
            self.assertEqual(payloads[1]["status"], "ok")
            self.assertEqual(payloads[1]["preupload_response"]["upload_url"], "[redacted]")
            self.assertEqual(self.server.upload_preuploads[0]["name"], "command.txt")
            self.assertEqual(self.server.upload_preuploads[0]["parent_id"], "folder2")
            self.assertEqual(self.server.uploaded_files[0]["filename"], "command.txt")
            self.assertEqual(self.server.uploaded_files[0]["body"], b"command upload")

    async def test_teacher_export_download_commands_json_write_files(self) -> None:
        self.server.export_blobs.update(
            {
                "questionnaire:q1": {"body": b"questionnaire-xlsx", "filename": "questionnaire.xlsx"},
                "topic:t1": {"body": b"topic-xlsx", "filename": "topic.xlsx"},
                "category:cat1": {"body": b"category-xlsx", "filename": "category.xlsx"},
                "shared-resource-subject-lib:sr1": {"body": b"subject-lib-xlsx", "filename": "subject-lib.xlsx"},
                "shared-resource-video-stat": {"body": b"resource-video-xlsx", "filename": "resource-video.xlsx"},
                "stat-students:301:xlsx": {"body": b"stat-xlsx", "filename": "stat.xlsx"},
                "stat-report:rollcall-by-class": {"body": b"rollcall-class-xlsx", "filename": "rollcall-class.xlsx"},
                "stat-courses:xlsx": {"body": b"stat-courses-xlsx", "filename": "stat-courses.xlsx"},
                "stat-attendance:xlsx": {"body": b"stat-attendance-xlsx", "filename": "stat-attendance.xlsx"},
                "department-user-attendance:org1": {"body": b"attendance-xlsx", "filename": "attendance.xlsx"},
                "department-attendance:org1": {
                    "body": b"department-attendance-xlsx",
                    "filename": "department-attendance.xlsx",
                },
                "stat-vtrses-data": {"body": b"vtrs-data-xlsx", "filename": "vtrs-data.xlsx"},
                "cloud-classroom-live-classes": {"body": b"cloud-classes-xlsx", "filename": "cloud.xlsx"},
                "tencent-meeting-statistics": {"body": b"tencent-xlsx", "filename": "tencent.xlsx"},
                "ai-ppt-usage": {"body": b"ai-ppt-xlsx", "filename": "ai-ppt.xlsx"},
                "air-credit:course": {"body": b"air-xlsx", "filename": "air.xlsx"},
                "management-calendar": {"body": b"calendar-xlsx", "filename": "calendar.xlsx"},
            }
        )
        output = []
        with tempfile.TemporaryDirectory() as temp_dir:
            output_dir = Path(temp_dir)
            request_args = type(
                "Args",
                (),
                {
                    "json": True,
                    "method": "GET",
                    "path": "/api/questionnaire/q1/export/excel",
                    "payload_json": "",
                    "filename": "generic.xlsx",
                    "output": str(output_dir / "generic.xlsx"),
                    "overwrite": False,
                    "execute": False,
                    "yes": False,
                    "include_sensitive": False,
                },
            )()
            questionnaire_args = type(
                "Args",
                (),
                {"json": True, "questionnaire_id": "q1", "output": str(output_dir / "questionnaire.xlsx"), "overwrite": False},
            )()
            topic_dry_args = type(
                "Args",
                (),
                {
                    "json": True,
                    "topic_id": "t1",
                    "output": str(output_dir / "topic-dry.xlsx"),
                    "overwrite": False,
                    "execute": False,
                    "yes": False,
                    "include_sensitive": False,
                },
            )()
            topic_args = type(
                "Args",
                (),
                {
                    "json": True,
                    "topic_id": "t1",
                    "output": str(output_dir / "topic.xlsx"),
                    "overwrite": False,
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            )()
            category_args = type(
                "Args",
                (),
                {
                    "json": True,
                    "category_id": "cat1",
                    "output": str(output_dir / "category.xlsx"),
                    "overwrite": False,
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            )()
            shared_args = type(
                "Args",
                (),
                {"json": True, "resource_id": "sr1", "output": str(output_dir / "subject-lib.xlsx"), "overwrite": False},
            )()
            shared_stat_args = type(
                "Args",
                (),
                {
                    "json": True,
                    "conditions_json": '{"keyword":"resource"}',
                    "output": str(output_dir / "resource-stat.xlsx"),
                    "overwrite": False,
                },
            )()
            shared_video_args = type(
                "Args",
                (),
                {
                    "json": True,
                    "conditions_json": '{"keyword":"video"}',
                    "output": str(output_dir / "resource-video.xlsx"),
                    "overwrite": False,
                },
            )()
            stat_args = type(
                "Args",
                (),
                {
                    "json": True,
                    "course_id": "",
                    "file_type": "xlsx",
                    "conditions_json": '{"keyword":"Student"}',
                    "output": str(output_dir / "stat.xlsx"),
                    "overwrite": False,
                    "max_courses": 50,
                },
            )()
            stat_courses_dry_args = type(
                "Args",
                (),
                {
                    "json": True,
                    "file_type": "xlsx",
                    "payload_json": '{"academic_year_ids":[112]}',
                    "output": str(output_dir / "stat-courses-dry.xlsx"),
                    "overwrite": False,
                    "execute": False,
                    "yes": False,
                    "include_sensitive": False,
                },
            )()
            stat_courses_args = type(
                "Args",
                (),
                {
                    "json": True,
                    "file_type": "xlsx",
                    "payload_json": '{"academic_year_ids":[112]}',
                    "output": str(output_dir / "stat-courses.xlsx"),
                    "overwrite": False,
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            )()
            stat_attendance_dry_args = type(
                "Args",
                (),
                {
                    "json": True,
                    "file_type": "xlsx",
                    "payload_json": '{"academic_year_ids":112,"semester_ids":2}',
                    "output": str(output_dir / "stat-attendance-dry.xlsx"),
                    "overwrite": False,
                    "execute": False,
                    "yes": False,
                    "include_sensitive": False,
                },
            )()
            stat_attendance_args = type(
                "Args",
                (),
                {
                    "json": True,
                    "file_type": "xlsx",
                    "payload_json": '{"academic_year_ids":112,"semester_ids":2}',
                    "output": str(output_dir / "stat-attendance.xlsx"),
                    "overwrite": False,
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            )()
            stat_report_args = type(
                "Args",
                (),
                {
                    "json": True,
                    "kind": "rollcall-by-class",
                    "conditions_json": '{"academic_year_ids":[112]}',
                    "output": str(output_dir / "rollcall-class.xlsx"),
                    "overwrite": False,
                },
            )()
            attendance_args = type(
                "Args",
                (),
                {
                    "json": True,
                    "department_id": "org1",
                    "conditions_json": '{"keyword":"Student"}',
                    "output": str(output_dir / "attendance.xlsx"),
                    "overwrite": False,
                },
            )()
            department_attendance_dry_args = type(
                "Args",
                (),
                {
                    "json": True,
                    "department_id": "org1",
                    "payload_json": '{"keyword":"Department"}',
                    "output": str(output_dir / "department-attendance-dry.xlsx"),
                    "overwrite": False,
                    "execute": False,
                    "yes": False,
                    "include_sensitive": False,
                },
            )()
            department_attendance_args = type(
                "Args",
                (),
                {
                    "json": True,
                    "department_id": "org1",
                    "payload_json": '{"keyword":"Department"}',
                    "output": str(output_dir / "department-attendance.xlsx"),
                    "overwrite": False,
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            )()
            vtrses_data_args = type(
                "Args",
                (),
                {
                    "json": True,
                    "conditions_json": '{"keyword":"VTRS"}',
                    "output": str(output_dir / "vtrs-data.xlsx"),
                    "overwrite": False,
                },
            )()
            cloud_args = type(
                "Args",
                (),
                {
                    "json": True,
                    "order_by": "start_time",
                    "conditions_json": '{"keyword":"cloud"}',
                    "output": str(output_dir / "cloud.xlsx"),
                    "overwrite": False,
                },
            )()
            tencent_args = type(
                "Args",
                (),
                {
                    "json": True,
                    "conditions_json": '{"keyword":"meeting"}',
                    "output": str(output_dir / "tencent.xlsx"),
                    "overwrite": False,
                },
            )()
            ai_ppt_dry_args = type(
                "Args",
                (),
                {
                    "json": True,
                    "payload_json": '{"keyword":"User"}',
                    "output": str(output_dir / "ai-ppt-dry.xlsx"),
                    "overwrite": False,
                    "execute": False,
                    "yes": False,
                    "include_sensitive": False,
                },
            )()
            ai_ppt_args = type(
                "Args",
                (),
                {
                    "json": True,
                    "payload_json": '{"keyword":"User"}',
                    "output": str(output_dir / "ai-ppt.xlsx"),
                    "overwrite": False,
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            )()
            air_dry_args = type(
                "Args",
                (),
                {
                    "json": True,
                    "target": "course",
                    "payload_json": '{"start_date":"2026-01-01"}',
                    "output": str(output_dir / "air-dry.xlsx"),
                    "overwrite": False,
                    "execute": False,
                    "yes": False,
                    "include_sensitive": False,
                },
            )()
            air_args = type(
                "Args",
                (),
                {
                    "json": True,
                    "target": "course",
                    "payload_json": '{"start_date":"2026-01-01"}',
                    "output": str(output_dir / "air.xlsx"),
                    "overwrite": False,
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            )()
            calendar_dry_args = type(
                "Args",
                (),
                {
                    "json": True,
                    "payload_json": '{"keyword":"Weekly"}',
                    "output": str(output_dir / "calendar-dry.xlsx"),
                    "overwrite": False,
                    "execute": False,
                    "yes": False,
                    "include_sensitive": False,
                },
            )()
            calendar_args = type(
                "Args",
                (),
                {
                    "json": True,
                    "payload_json": '{"keyword":"Weekly"}',
                    "output": str(output_dir / "calendar.xlsx"),
                    "overwrite": False,
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            )()

            with patch("builtins.print", side_effect=output.append):
                request_result = await tron.teacher_download_request_command(request_args)
                questionnaire_result = await tron.teacher_export_questionnaire_command(questionnaire_args)
                topic_dry_result = await tron.teacher_export_topic_command(topic_dry_args)
                topic_result = await tron.teacher_export_topic_command(topic_args)
                category_result = await tron.teacher_export_category_topics_command(category_args)
                shared_result = await tron.teacher_export_shared_resource_subject_lib_command(shared_args)
                shared_stat_result = await tron.teacher_export_shared_resource_stat_command(shared_stat_args)
                shared_video_result = await tron.teacher_export_shared_resource_video_stat_command(shared_video_args)
                stat_result = await tron.teacher_export_stat_students_command(stat_args)
                stat_courses_dry_result = await tron.teacher_export_stat_courses_command(stat_courses_dry_args)
                stat_courses_result = await tron.teacher_export_stat_courses_command(stat_courses_args)
                stat_attendance_dry_result = await tron.teacher_export_stat_attendance_command(
                    stat_attendance_dry_args
                )
                stat_attendance_result = await tron.teacher_export_stat_attendance_command(stat_attendance_args)
                stat_report_result = await tron.teacher_export_stat_report_command(stat_report_args)
                attendance_result = await tron.teacher_export_department_user_attendance_command(attendance_args)
                department_attendance_dry_result = await tron.teacher_export_department_attendance_command(
                    department_attendance_dry_args
                )
                department_attendance_result = await tron.teacher_export_department_attendance_command(
                    department_attendance_args
                )
                vtrses_data_result = await tron.teacher_export_stat_vtrses_data_command(vtrses_data_args)
                cloud_result = await tron.teacher_export_cloud_classroom_live_classes_command(cloud_args)
                tencent_result = await tron.teacher_export_tencent_meeting_statistics_command(tencent_args)
                ai_ppt_dry_result = await tron.teacher_export_ai_ppt_usage_command(ai_ppt_dry_args)
                ai_ppt_result = await tron.teacher_export_ai_ppt_usage_command(ai_ppt_args)
                air_dry_result = await tron.teacher_export_air_credit_command(air_dry_args)
                air_result = await tron.teacher_export_air_credit_command(air_args)
                calendar_dry_result = await tron.teacher_export_management_calendar_command(calendar_dry_args)
                calendar_result = await tron.teacher_export_management_calendar_command(calendar_args)

            self.assertEqual(request_result, 0)
            self.assertEqual(questionnaire_result, 0)
            self.assertEqual(topic_dry_result, 0)
            self.assertEqual(topic_result, 0)
            self.assertEqual(category_result, 0)
            self.assertEqual(shared_result, 0)
            self.assertEqual(shared_stat_result, 0)
            self.assertEqual(shared_video_result, 0)
            self.assertEqual(stat_result, 0)
            self.assertEqual(stat_courses_dry_result, 0)
            self.assertEqual(stat_courses_result, 0)
            self.assertEqual(stat_attendance_dry_result, 0)
            self.assertEqual(stat_attendance_result, 0)
            self.assertEqual(stat_report_result, 0)
            self.assertEqual(attendance_result, 0)
            self.assertEqual(department_attendance_dry_result, 0)
            self.assertEqual(department_attendance_result, 0)
            self.assertEqual(vtrses_data_result, 0)
            self.assertEqual(cloud_result, 0)
            self.assertEqual(tencent_result, 0)
            self.assertEqual(ai_ppt_dry_result, 0)
            self.assertEqual(ai_ppt_result, 0)
            self.assertEqual(air_dry_result, 0)
            self.assertEqual(air_result, 0)
            self.assertEqual(calendar_dry_result, 0)
            self.assertEqual(calendar_result, 0)
            payloads = [json.loads(item) for item in output]
            self.assertEqual(
                [payload["status"] for payload in payloads],
                [
                    "ok",
                    "ok",
                    "dry_run",
                    "ok",
                    "ok",
                    "ok",
                    "ok",
                    "ok",
                    "ok",
                    "dry_run",
                    "ok",
                    "dry_run",
                    "ok",
                    "ok",
                    "ok",
                    "dry_run",
                    "ok",
                    "ok",
                    "ok",
                    "ok",
                    "dry_run",
                    "ok",
                    "dry_run",
                    "ok",
                    "dry_run",
                    "ok",
                ],
            )
            self.assertEqual((output_dir / "generic.xlsx").read_bytes(), b"questionnaire-xlsx")
            self.assertEqual((output_dir / "questionnaire.xlsx").read_bytes(), b"questionnaire-xlsx")
            self.assertEqual((output_dir / "topic.xlsx").read_bytes(), b"topic-xlsx")
            self.assertEqual((output_dir / "category.xlsx").read_bytes(), b"category-xlsx")
            self.assertEqual((output_dir / "subject-lib.xlsx").read_bytes(), b"subject-lib-xlsx")
            self.assertTrue((output_dir / "resource-stat.xlsx").read_bytes())
            self.assertEqual((output_dir / "resource-video.xlsx").read_bytes(), b"resource-video-xlsx")
            self.assertEqual((output_dir / "stat.xlsx").read_bytes(), b"stat-xlsx")
            self.assertEqual((output_dir / "stat-courses.xlsx").read_bytes(), b"stat-courses-xlsx")
            self.assertEqual((output_dir / "stat-attendance.xlsx").read_bytes(), b"stat-attendance-xlsx")
            self.assertEqual((output_dir / "rollcall-class.xlsx").read_bytes(), b"rollcall-class-xlsx")
            self.assertEqual((output_dir / "attendance.xlsx").read_bytes(), b"attendance-xlsx")
            self.assertEqual(
                (output_dir / "department-attendance.xlsx").read_bytes(),
                b"department-attendance-xlsx",
            )
            self.assertEqual((output_dir / "vtrs-data.xlsx").read_bytes(), b"vtrs-data-xlsx")
            self.assertEqual((output_dir / "cloud.xlsx").read_bytes(), b"cloud-classes-xlsx")
            self.assertEqual((output_dir / "tencent.xlsx").read_bytes(), b"tencent-xlsx")
            self.assertEqual((output_dir / "ai-ppt.xlsx").read_bytes(), b"ai-ppt-xlsx")
            self.assertEqual((output_dir / "air.xlsx").read_bytes(), b"air-xlsx")
            self.assertEqual((output_dir / "calendar.xlsx").read_bytes(), b"calendar-xlsx")

    async def test_teacher_rollcall_students_command_json(self) -> None:
        output = []
        args = type(
            "Args",
            (),
            {
                "json": True,
                "rollcall_id": "42",
                "limit": 20,
                "action": "manual_refresh",
                "include_sensitive": False,
            },
        )()

        with patch("builtins.print", side_effect=output.append):
            result = await tron.teacher_rollcall_students_command(args)

        self.assertEqual(result, 0)
        payload = json.loads(output[0])
        self.assertEqual(payload["rollcall_id"], "42")
        self.assertIn("student_rollcalls", payload["supported"])

    async def test_teacher_write_commands_dry_run_by_default_and_execute_with_yes(self) -> None:
        output = []
        dry_run_args = type(
            "Args",
            (),
            {
                "json": True,
                "rollcall_id": "42",
                "payload_json": '{"mode":"manual"}',
                "execute": False,
                "yes": False,
                "include_sensitive": False,
            },
        )()

        with patch("builtins.print", side_effect=output.append):
            dry_run_result = await tron.teacher_start_rollcall_command(dry_run_args)

        self.assertEqual(dry_run_result, 0)
        self.assertEqual(json.loads(output[-1])["status"], "dry_run")
        self.assertEqual(self.server.started_rollcalls, [])

        execute_args = type(
            "Args",
            (),
            {
                "json": True,
                "rollcall_id": "42",
                "payload_json": '{"mode":"manual"}',
                "execute": True,
                "yes": True,
                "include_sensitive": False,
            },
        )()

        with patch("builtins.print", side_effect=output.append):
            execute_result = await tron.teacher_start_rollcall_command(execute_args)

        self.assertEqual(execute_result, 0)
        self.assertEqual(json.loads(output[-1])["status"], "ok")
        self.assertEqual(self.server.started_rollcalls, [{"rollcall_id": "42", "body": {"mode": "manual"}}])

    async def test_teacher_update_setting_and_score_commands_execute(self) -> None:
        output = []
        setting_args = type(
            "Args",
            (),
            {
                "json": True,
                "course_id": "",
                "payload_json": '{"auto_scoring":true}',
                "execute": True,
                "yes": True,
                "max_courses": 50,
                "include_sensitive": False,
            },
        )()
        score_args = type(
            "Args",
            (),
            {
                "json": True,
                "enrollment_id": "2",
                "score": "88",
                "execute": True,
                "yes": True,
            },
        )()

        with patch("builtins.print", side_effect=output.append):
            setting_result = await tron.teacher_update_rollcall_setting_command(setting_args)
            score_result = await tron.teacher_score_rollcall_command(score_args)

        self.assertEqual(setting_result, 0)
        self.assertEqual(score_result, 0)
        self.assertEqual(self.server.updated_rollcall_settings[0]["body"], {"auto_scoring": True})
        self.assertEqual(self.server.updated_rollcall_scores[0]["body"], {"rollcall_score": "88"})

    async def test_teacher_create_stop_and_merged_rollcall_commands_execute(self) -> None:
        output = []
        create_args = type(
            "Args",
            (),
            {
                "json": True,
                "course_id": "",
                "payload_json": '{"title":"Manual"}',
                "execute": True,
                "yes": True,
                "max_courses": 50,
                "include_sensitive": False,
            },
        )()
        stop_args = type(
            "Args",
            (),
            {
                "json": True,
                "rollcall_id": "42",
                "execute": True,
                "yes": True,
            },
        )()
        merged_args = type(
            "Args",
            (),
            {
                "json": True,
                "payload_json": '{"course_id":"301","rollcall_ids":[42]}',
                "execute": True,
                "yes": True,
                "include_sensitive": False,
            },
        )()
        merged_students_args = type(
            "Args",
            (),
            {
                "json": True,
                "payload_json": '{"student_rollcalls":[{"student_id":2,"status":"present"}]}',
                "execute": True,
                "yes": True,
                "include_sensitive": False,
            },
        )()

        with patch("builtins.print", side_effect=output.append):
            create_result = await tron.teacher_create_rollcall_command(create_args)
            stop_result = await tron.teacher_stop_rollcall_command(stop_args)
            merged_result = await tron.teacher_create_merged_rollcall_command(merged_args)
            merged_students_result = await tron.teacher_update_merged_rollcall_students_command(merged_students_args)

        self.assertEqual(create_result, 0)
        self.assertEqual(stop_result, 0)
        self.assertEqual(merged_result, 0)
        self.assertEqual(merged_students_result, 0)
        self.assertEqual(
            self.server.created_rollcalls[0]["body"],
            {"title": "Manual", "courseId": "301"},
        )
        self.assertEqual(self.server.stopped_rollcalls, ["42"])
        self.assertEqual(self.server.created_merged_rollcalls[0]["body"], {"course_id": "301", "rollcall_ids": [42]})
        self.assertEqual(
            self.server.updated_merged_rollcall_students[0]["body"],
            {"student_rollcalls": [{"student_id": 2, "status": "present"}]},
        )

    async def test_teacher_rollcall_api_commands_execute(self) -> None:
        self.server.course_rollcall_details["301:42"] = {"id": "42", "course_id": "301"}
        self.server.course_ongoing_student_rollcalls["301"] = [{"id": "42"}]
        self.server.course_leave_records["301"] = [{"id": "leave1"}]
        self.server.student_rollcall_histories["301:2"] = [{"student_rollcall_id": "sr1"}]
        self.server.rollcall_student_counts["42"] = {"total": 1, "counts": {"on_call_fine": 1}}
        self.server.course_rollcall_status_results["42"] = {"result": [{"status": "on_call_fine", "count": 1}]}
        self.server.radar_success = True
        output = []

        def args(**values):
            return type("Args", (), values)()

        read_cases = [
            (
                tron.teacher_rollcall_info_command,
                args(json=True, rollcall_id="42", limit=20, action="", include_sensitive=False),
            ),
            (
                tron.teacher_rollcall_students_page_command,
                args(json=True, rollcall_id="42", page=1, page_size=20, rollcall_status="", include_sensitive=False),
            ),
            (
                tron.teacher_rollcall_count_command,
                args(json=True, rollcall_id="42", include_sensitive=False),
            ),
            (
                tron.teacher_rollcall_status_result_command,
                args(json=True, rollcall_id="42", include_sensitive=False),
            ),
            (
                tron.teacher_course_rollcall_detail_command,
                args(json=True, rollcall_id="42", course_id="", max_courses=50, include_sensitive=False),
            ),
            (
                tron.teacher_ongoing_student_rollcalls_command,
                args(json=True, course_id="", group_rollcall="", max_courses=50, include_sensitive=False),
            ),
            (
                tron.teacher_leave_record_command,
                args(json=True, course_id="", timestamp="0", page="", page_size="", max_courses=50, include_sensitive=False),
            ),
            (
                tron.teacher_student_rollcalls_command,
                args(
                    json=True,
                    student_id="2",
                    course_id="",
                    page=1,
                    page_size=10,
                    rollcall_ids="42",
                    max_courses=50,
                    include_sensitive=False,
                ),
            ),
        ]
        action_cases = [
            (
                tron.teacher_create_module_rollcall_command,
                args(
                    json=True,
                    course_id="",
                    payload_json='{"title":"Module","module_id":"m1"}',
                    execute=True,
                    yes=True,
                    max_courses=50,
                    include_sensitive=False,
                ),
            ),
            (
                tron.teacher_activate_rollcall_command,
                args(json=True, rollcall_id="42", execute=True, yes=True, include_sensitive=False),
            ),
            (
                tron.teacher_update_rollcall_command,
                args(
                    json=True,
                    rollcall_id="42",
                    payload_json='{"status":"finished"}',
                    execute=True,
                    yes=True,
                    include_sensitive=False,
                ),
            ),
            (
                tron.teacher_update_radar_rollcall_position_command,
                args(
                    json=True,
                    rollcall_id="42",
                    payload_json='{"latitude":24.1,"longitude":120.1}',
                    execute=True,
                    yes=True,
                    include_sensitive=False,
                ),
            ),
            (
                tron.teacher_stop_qr_rollcall_command,
                args(json=True, rollcall_id="42", execute=True, yes=True, include_sensitive=False),
            ),
            (
                tron.teacher_stop_number_rollcall_command,
                args(json=True, rollcall_id="42", execute=True, yes=True, include_sensitive=False),
            ),
            (
                tron.teacher_stop_radar_rollcall_command,
                args(json=True, rollcall_id="42", execute=True, yes=True, include_sensitive=False),
            ),
            (
                tron.teacher_answer_qr_rollcall_command,
                args(
                    json=True,
                    rollcall_id="42",
                    payload_json='{"data":"qr-data","deviceId":"dev"}',
                    execute=True,
                    yes=True,
                    include_sensitive=False,
                ),
            ),
            (
                tron.teacher_answer_number_rollcall_command,
                args(
                    json=True,
                    rollcall_id="42",
                    payload_json='{"numberCode":"0001","deviceId":"dev"}',
                    execute=True,
                    yes=True,
                    include_sensitive=False,
                ),
            ),
            (
                tron.teacher_answer_radar_rollcall_command,
                args(
                    json=True,
                    rollcall_id="42",
                    payload_json='{"latitude":24.1,"longitude":120.1,"deviceId":"dev"}',
                    execute=True,
                    yes=True,
                    include_sensitive=False,
                ),
            ),
            (
                tron.teacher_update_student_rollcalls_command,
                args(
                    json=True,
                    student_id="2",
                    course_id="",
                    payload_json='{"student_rollcalls":[{"student_rollcall_id":"sr1","student_status":"absent"}]}',
                    execute=True,
                    yes=True,
                    max_courses=50,
                    include_sensitive=False,
                ),
            ),
        ]

        qrcode_args = args(
            json=True,
            url="https://example.test/rollcall",
            output=str(Path(self.temp_dir.name) / "qr.png"),
            overwrite=False,
        )

        with patch("builtins.print", side_effect=output.append):
            read_results = [await command(command_args) for command, command_args in read_cases]
            action_results = [await command(command_args) for command, command_args in action_cases]
            qrcode_result = await tron.teacher_qrcode_command(qrcode_args)

        self.assertTrue(all(result == 0 for result in read_results))
        self.assertTrue(all(result == 0 for result in action_results))
        self.assertEqual(qrcode_result, 0)
        self.assertEqual(self.server.created_module_rollcalls[0]["body"]["course_id"], "301")
        self.assertEqual(self.server.activated_rollcalls, ["42"])
        self.assertEqual(self.server.updated_rollcalls[0]["body"], {"status": "finished"})
        self.assertEqual(
            self.server.updated_radar_rollcall_positions[0]["body"],
            {"latitude": 24.1, "longitude": 120.1},
        )
        self.assertEqual(self.server.stopped_qr_rollcalls, ["42"])
        self.assertEqual(self.server.stopped_number_rollcalls, ["42"])
        self.assertEqual(self.server.stopped_radar_rollcalls, ["42"])
        self.assertEqual(self.server.qr_answers[-1]["body"], {"data": "qr-data", "deviceId": "dev"})
        self.assertEqual(self.server.number_attempts[-1]["body"], {"numberCode": "0001", "deviceId": "dev"})
        self.assertEqual(self.server.radar_answers[-1]["body"]["deviceId"], "dev")
        self.assertEqual(self.server.updated_student_rollcalls[0]["student_id"], "2")
        self.assertEqual(self.server.qrcode_requests, ["https://example.test/rollcall"])

    async def test_teacher_bulletin_commands_dry_run_and_execute(self) -> None:
        output = []
        common = {
            "json": True,
            "execute": True,
            "yes": True,
            "include_sensitive": False,
            "max_courses": 50,
            "course_id": "",
            "org_id": "",
            "is_management": False,
        }
        dry_run_args = type(
            "Args",
            (),
            {
                **common,
                "payload_json": '{"title":"Draft bulletin"}',
                "execute": False,
                "yes": False,
            },
        )()

        with patch("builtins.print", side_effect=output.append):
            dry_run_result = await tron.teacher_create_bulletin_command(dry_run_args)

        self.assertEqual(dry_run_result, 0)
        self.assertEqual(json.loads(output[-1])["status"], "dry_run")
        self.assertEqual(self.server.created_bulletins, [])

        command_cases = [
            (
                tron.teacher_create_bulletin_command,
                {**common, "payload_json": '{"title":"New bulletin"}'},
            ),
            (
                tron.teacher_update_bulletin_command,
                {**common, "bulletin_id": "b1", "payload_json": '{"title":"Updated bulletin"}'},
            ),
            (
                tron.teacher_mark_bulletin_read_command,
                {**common, "bulletin_id": "b1", "org_id": "9"},
            ),
            (
                tron.teacher_delete_bulletin_command,
                {**common, "bulletin_id": "b1"},
            ),
        ]

        with patch("builtins.print", side_effect=output.append):
            results = []
            for command, values in command_cases:
                args = type("Args", (), values)()
                results.append(await command(args))

        self.assertTrue(all(result == 0 for result in results))
        self.assertEqual(self.server.created_bulletins[0]["body"], {"title": "New bulletin"})
        self.assertEqual(self.server.updated_bulletins[0]["body"], {"title": "Updated bulletin"})
        self.assertEqual(self.server.read_bulletins[0], {"bulletin_id": "b1", "org_id": "9"})
        self.assertEqual(self.server.deleted_bulletins, ["b1"])

    async def test_teacher_import_commands_dry_run_and_execute(self) -> None:
        output = []
        common = {
            "json": True,
            "execute": True,
            "yes": True,
            "include_sensitive": False,
            "max_courses": 50,
            "course_id": "",
        }
        dry_run_args = type(
            "Args",
            (),
            {
                **common,
                "payload_json": '{"rows":[{"group":"A"}]}',
                "execute": False,
                "yes": False,
            },
        )()

        with patch("builtins.print", side_effect=output.append):
            dry_run_result = await tron.teacher_import_course_groups_command(dry_run_args)

        self.assertEqual(dry_run_result, 0)
        self.assertEqual(json.loads(output[-1])["status"], "dry_run")
        self.assertEqual(self.server.imported_course_groups, [])

        command_cases = [
            (
                tron.teacher_import_course_groups_command,
                {**common, "payload_json": '{"rows":[{"group":"A"}]}'},
            ),
            (
                tron.teacher_import_enrollments_command,
                {**common, "payload_json": '{"rows":[{"user_no":"S001","role":"student"}]}'},
            ),
            (
                tron.teacher_import_scores_command,
                {**common, "payload_json": '{"rows":[{"enrollment_id":2,"score":90}]}'},
            ),
            (
                tron.teacher_import_item_scores_command,
                {**common, "payload_json": '{"item_id":10,"rows":[{"enrollment_id":2,"score":88}]}'},
            ),
            (
                tron.teacher_import_seat_numbers_command,
                {**common, "payload_json": '{"rows":[{"enrollment_id":2,"seat_number":"01"}]}'},
            ),
            (
                tron.teacher_import_rollcalls_command,
                {**common, "payload_json": '{"rows":[{"student_id":2,"status":"present"}]}'},
            ),
        ]

        with patch("builtins.print", side_effect=output.append):
            results = []
            for command, values in command_cases:
                args = type("Args", (), values)()
                results.append(await command(args))

        self.assertTrue(all(result == 0 for result in results))
        self.assertEqual(self.server.imported_course_groups[0]["body"], {"rows": [{"group": "A"}]})
        self.assertEqual(self.server.imported_enrollments[0]["course_id"], "301")
        self.assertEqual(
            self.server.imported_enrollments[0]["body"],
            {"rows": [{"user_no": "S001", "role": "student"}]},
        )
        self.assertEqual(self.server.imported_scores[0]["course_id"], "301")
        self.assertEqual(self.server.imported_scores[0]["body"], {"rows": [{"enrollment_id": 2, "score": 90}]})
        self.assertEqual(self.server.imported_item_scores[0]["course_id"], "301")
        self.assertEqual(
            self.server.imported_item_scores[0]["body"],
            {"item_id": 10, "rows": [{"enrollment_id": 2, "score": 88}]},
        )
        self.assertEqual(self.server.imported_seat_numbers[0]["course_id"], "301")
        self.assertEqual(
            self.server.imported_seat_numbers[0]["body"],
            {"rows": [{"enrollment_id": 2, "seat_number": "01"}]},
        )
        self.assertEqual(self.server.imported_rollcalls[0]["course_id"], "301")
        self.assertEqual(
            self.server.imported_rollcalls[0]["body"],
            {"rows": [{"student_id": 2, "status": "present"}]},
        )

    async def test_teacher_course_estimate_commands_dry_run_and_execute(self) -> None:
        output = []
        common = {
            "json": True,
            "execute": True,
            "yes": True,
            "include_sensitive": False,
            "max_courses": 50,
        }
        dry_run_args = type(
            "Args",
            (),
            {
                **common,
                "course_id": "",
                "payload_json": '{"title":"Draft evaluation"}',
                "execute": False,
                "yes": False,
            },
        )()

        with patch("builtins.print", side_effect=output.append):
            dry_run_result = await tron.teacher_create_course_estimate_command(dry_run_args)

        self.assertEqual(dry_run_result, 0)
        self.assertEqual(json.loads(output[-1])["status"], "dry_run")
        self.assertEqual(self.server.created_course_estimates, [])

        command_cases = [
            (
                tron.teacher_create_course_estimate_command,
                {**common, "course_id": "", "payload_json": '{"id":"ce2","title":"Evaluation"}'},
            ),
            (
                tron.teacher_update_course_estimate_command,
                {**common, "course_estimate_id": "ce2", "payload_json": '{"title":"Evaluation 2"}'},
            ),
            (
                tron.teacher_delete_course_estimate_command,
                {**common, "course_estimate_id": "ce2", "payload_json": ""},
            ),
            (
                tron.teacher_create_course_estimate_reply_command,
                {**common, "payload_json": '{"id":"cer2","course_estimate_id":"ce1","body":"Reply"}'},
            ),
            (
                tron.teacher_delete_course_estimate_reply_command,
                {**common, "reply_id": "cer2", "payload_json": ""},
            ),
        ]

        with patch("builtins.print", side_effect=output.append):
            results = []
            for command, values in command_cases:
                args = type("Args", (), values)()
                results.append(await command(args))

        self.assertTrue(all(result == 0 for result in results))
        self.assertEqual(
            self.server.created_course_estimates[0]["body"],
            {"id": "ce2", "title": "Evaluation", "course_id": "301"},
        )
        self.assertEqual(self.server.updated_course_estimates[0]["body"], {"title": "Evaluation 2"})
        self.assertEqual(self.server.deleted_course_estimates[0], {"course_estimate_id": "ce2", "body": {}})
        self.assertEqual(
            self.server.created_course_estimate_replies[0]["body"],
            {"id": "cer2", "course_estimate_id": "ce1", "body": "Reply"},
        )
        self.assertEqual(self.server.deleted_course_estimate_replies[0], {"reply_id": "cer2", "body": {}})

    async def test_teacher_content_structure_commands_dry_run_and_execute(self) -> None:
        output = []
        common = {
            "json": True,
            "execute": True,
            "yes": True,
            "include_sensitive": False,
            "max_courses": 50,
            "course_id": "",
        }
        dry_run_args = type(
            "Args",
            (),
            {
                **common,
                "payload_json": '{"name":"Dry run module"}',
                "execute": False,
                "yes": False,
            },
        )()

        with patch("builtins.print", side_effect=output.append):
            dry_run_result = await tron.teacher_create_module_command(dry_run_args)

        self.assertEqual(dry_run_result, 0)
        self.assertEqual(json.loads(output[-1])["status"], "dry_run")
        self.assertEqual(self.server.created_modules, [])

        check_module_args = type(
            "Args",
            (),
            {"json": True, "module_id": "m1", "include_sensitive": False},
        )()
        check_syllabus_args = type(
            "Args",
            (),
            {"json": True, "syllabus_id": "s1", "include_sensitive": False},
        )()
        command_cases = [
            (
                tron.teacher_create_module_command,
                {**common, "payload_json": '{"name":"Week 2"}'},
            ),
            (
                tron.teacher_update_module_command,
                {**common, "module_id": "m1", "payload_json": '{"name":"Week 1 updated"}'},
            ),
            (
                tron.teacher_sort_modules_command,
                {**common, "payload_json": '{"modules":[{"id":"m1","sort":0},{"id":"m2","sort":1}]}'},
            ),
            (
                tron.teacher_create_syllabus_command,
                {**common, "payload_json": '{"id":"s2","module_id":"m1","summary":"Topic"}'},
            ),
            (
                tron.teacher_update_syllabus_command,
                {**common, "syllabus_id": "s1", "payload_json": '{"summary":"Intro updated"}'},
            ),
            (
                tron.teacher_sort_syllabuses_command,
                {
                    **common,
                    "payload_json": '{"courseId":301,"syllabusId":"s1","oldModule":"m1","newModule":"m1","newIndex":0}',
                },
            ),
            (
                tron.teacher_sort_module_activities_command,
                {**common, "module_id": "m1", "payload_json": '{"activities":[{"id":"77","sort":0}]}'},
            ),
            (
                tron.teacher_sort_syllabus_activities_command,
                {**common, "syllabus_id": "s1", "payload_json": '{"activities":[{"id":"77","sort":0}]}'},
            ),
            (
                tron.teacher_resort_activity_command,
                {
                    **common,
                    "payload_json": '{"courseId":301,"activityId":"77","oldModule":"m1","newModule":"m1","newIndex":0}',
                },
            ),
            (
                tron.teacher_delete_syllabus_command,
                {**common, "syllabus_id": "s2", "delete_related_activity": True},
            ),
            (
                tron.teacher_delete_module_command,
                {**common, "module_id": "m2", "delete_related_activity": True},
            ),
        ]

        with patch("builtins.print", side_effect=output.append):
            check_results = [
                await tron.teacher_check_module_dependents_command(check_module_args),
                await tron.teacher_check_syllabus_dependents_command(check_syllabus_args),
            ]
            results = []
            for command, values in command_cases:
                args = type("Args", (), values)()
                results.append(await command(args))

        self.assertEqual(check_results, [0, 0])
        self.assertTrue(all(result == 0 for result in results))
        self.assertEqual(self.server.checked_module_dependents, ["m1"])
        self.assertEqual(self.server.checked_syllabus_dependents, ["s1"])
        self.assertEqual(self.server.created_modules[0]["course_id"], "301")
        self.assertEqual(self.server.created_modules[0]["body"], {"name": "Week 2"})
        self.assertEqual(self.server.updated_modules[0], {"module_id": "m1", "body": {"name": "Week 1 updated"}})
        self.assertEqual(
            self.server.sorted_modules[0]["body"],
            {"modules": [{"id": "m1", "sort": 0}, {"id": "m2", "sort": 1}]},
        )
        self.assertEqual(self.server.created_syllabuses[0]["body"], {"id": "s2", "module_id": "m1", "summary": "Topic"})
        self.assertEqual(self.server.updated_syllabuses[0], {"syllabus_id": "s1", "body": {"summary": "Intro updated"}})
        self.assertEqual(
            self.server.sorted_syllabuses[0]["body"],
            {"courseId": 301, "syllabusId": "s1", "oldModule": "m1", "newModule": "m1", "newIndex": 0},
        )
        self.assertEqual(
            self.server.sorted_module_activities[0],
            {"module_id": "m1", "body": {"activities": [{"id": "77", "sort": 0}]}},
        )
        self.assertEqual(
            self.server.sorted_syllabus_activities[0],
            {"syllabus_id": "s1", "body": {"activities": [{"id": "77", "sort": 0}]}},
        )
        self.assertEqual(
            self.server.resorted_activities[0]["body"],
            {"courseId": 301, "activityId": "77", "oldModule": "m1", "newModule": "m1", "newIndex": 0},
        )
        self.assertEqual(self.server.deleted_syllabuses[0], {"syllabus_id": "s2", "delete_related_activity": True})
        self.assertEqual(self.server.deleted_modules[0], {"module_id": "m2", "delete_related_activity": True})

    async def test_teacher_group_commands_dry_run_and_execute(self) -> None:
        output = []
        common = {
            "json": True,
            "execute": True,
            "yes": True,
            "include_sensitive": False,
            "max_courses": 50,
            "course_id": "",
        }

        dry_run_args = type(
            "Args",
            (),
            {
                **common,
                "payload_json": '{"name":"Dry run"}',
                "execute": False,
                "yes": False,
            },
        )()

        with patch("builtins.print", side_effect=output.append):
            dry_run_result = await tron.teacher_create_group_set_command(dry_run_args)

        self.assertEqual(dry_run_result, 0)
        self.assertEqual(json.loads(output[-1])["status"], "dry_run")
        self.assertEqual(self.server.created_group_sets, [])

        command_cases = [
            (
                tron.teacher_create_group_set_command,
                {**common, "payload_json": '{"name":"New set"}'},
            ),
            (
                tron.teacher_update_group_set_command,
                {**common, "group_set_id": "g1", "payload_json": '{"name":"Project Groups 2"}'},
            ),
            (
                tron.teacher_copy_group_set_command,
                {**common, "group_set_id": "g1", "payload_json": '{"name":"Copied set"}'},
            ),
            (
                tron.teacher_random_grouping_command,
                {**common, "group_set_id": "g1", "payload_json": '{"group_count":2}'},
            ),
            (
                tron.teacher_create_group_command,
                {**common, "group_set_id": "g1", "payload_json": '{"id":"group2","name":"Group Two"}'},
            ),
            (
                tron.teacher_update_group_command,
                {**common, "group_id": "group1", "payload_json": '{"name":"Group One Updated"}'},
            ),
            (
                tron.teacher_update_group_info_command,
                {**common, "group_id": "group1", "payload_json": '{"note":"office hour"}'},
            ),
            (
                tron.teacher_sort_groups_command,
                {**common, "group_set_id": "g1", "payload_json": '{"group_ids":["group1","group2"]}'},
            ),
            (
                tron.teacher_update_group_members_command,
                {**common, "group_id": "group1", "payload_json": '{"members":[{"id":"member2"}]}'},
            ),
            (
                tron.teacher_update_group_member_command,
                {
                    **common,
                    "group_id": "group1",
                    "member_id": "member1",
                    "payload_json": '{"leader":true}',
                },
            ),
            (
                tron.teacher_delete_group_member_command,
                {**common, "group_id": "group1", "member_id": "member1"},
            ),
            (
                tron.teacher_delete_group_command,
                {**common, "group_id": "group2"},
            ),
            (
                tron.teacher_delete_group_set_command,
                {**common, "group_set_id": "g1"},
            ),
        ]

        with patch("builtins.print", side_effect=output.append):
            results = []
            for command, values in command_cases:
                args = type("Args", (), values)()
                results.append(await command(args))

        self.assertTrue(all(result == 0 for result in results))
        self.assertEqual(self.server.created_group_sets[0]["body"], {"name": "New set"})
        self.assertEqual(self.server.updated_group_sets[0]["body"], {"name": "Project Groups 2"})
        self.assertEqual(self.server.copied_group_sets[0]["body"], {"name": "Copied set"})
        self.assertEqual(self.server.random_groupings[0]["body"], {"group_count": 2})
        self.assertEqual(self.server.created_groups[0]["body"], {"id": "group2", "name": "Group Two"})
        self.assertEqual(self.server.updated_groups[0]["body"], {"name": "Group One Updated"})
        self.assertEqual(self.server.updated_group_infos[0]["body"], {"note": "office hour"})
        self.assertEqual(self.server.sorted_groups[0]["body"], {"group_ids": ["group1", "group2"]})
        self.assertEqual(self.server.updated_group_members[0]["body"], {"members": [{"id": "member2"}]})
        self.assertEqual(self.server.updated_group_member_records[0]["body"], {"leader": True})
        self.assertEqual(self.server.deleted_group_members[0], {"group_id": "group1", "member_id": "member1"})
        self.assertEqual(self.server.deleted_groups, ["group2"])
        self.assertEqual(self.server.deleted_group_sets, ["g1"])

    async def test_teacher_score_activity_and_exam_commands_execute(self) -> None:
        output = []
        command_cases = [
            (
                tron.teacher_update_announce_score_settings_command,
                {
                    "json": True,
                    "course_id": "",
                    "payload_json": '{"published":true}',
                    "execute": True,
                    "yes": True,
                    "max_courses": 50,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_update_score_type_settings_command,
                {
                    "json": True,
                    "course_id": "",
                    "payload_json": '{"score_type":"normal_rule"}',
                    "execute": True,
                    "yes": True,
                    "max_courses": 50,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_create_custom_score_item_command,
                {
                    "json": True,
                    "course_id": "",
                    "payload_json": '{"name":"Participation"}',
                    "execute": True,
                    "yes": True,
                    "max_courses": 50,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_update_custom_score_item_command,
                {
                    "json": True,
                    "item_id": "10",
                    "payload_json": '{"name":"Updated"}',
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_delete_custom_score_item_command,
                {
                    "json": True,
                    "item_id": "10",
                    "execute": True,
                    "yes": True,
                },
            ),
            (
                tron.teacher_score_custom_item_command,
                {
                    "json": True,
                    "item_id": "10",
                    "student_id": "2",
                    "score": "86",
                    "execute": True,
                    "yes": True,
                },
            ),
            (
                tron.teacher_update_enrollment_scores_command,
                {
                    "json": True,
                    "payload_json": '{"course_id":301,"enrollments":[{"enrollment_id":2,"total_score":90}]}',
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_update_total_scores_command,
                {
                    "json": True,
                    "mode": "replace",
                    "payload_json": '{"course_id":301,"enrollment_scores":[{"enrollment_id":2,"total_score":90}]}',
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_update_score_book_command,
                {
                    "json": True,
                    "payload_json": '{"enrollment_score_book":[{"enrollment_id":2,"score":91}]}',
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_update_score_publish_item_maps_command,
                {
                    "json": True,
                    "payload_json": '{"item_id":10}',
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_submit_edu_scores_command,
                {
                    "json": True,
                    "payload_json": '{"course_id":301}',
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_create_rubric_command,
                {
                    "json": True,
                    "payload_json": '{"name":"New rubric"}',
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_update_rubric_command,
                {
                    "json": True,
                    "rubric_id": "3",
                    "payload_json": '{"name":"Updated rubric"}',
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_delete_rubrics_command,
                {
                    "json": True,
                    "rubric_ids": "3",
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_delete_activities_command,
                {
                    "json": True,
                    "activity_ids": "77",
                    "execute": True,
                    "yes": True,
                },
            ),
            (
                tron.teacher_create_activity_command,
                {
                    "json": True,
                    "course_id": "",
                    "payload_json": '{"id":"88","title":"Material"}',
                    "execute": True,
                    "yes": True,
                    "max_courses": 50,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_update_activity_command,
                {
                    "json": True,
                    "activity_id": "77",
                    "payload_json": '{"title":"Homework 2"}',
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_update_activity_resource_command,
                {
                    "json": True,
                    "activity_id": "77",
                    "resource_id": "r1",
                    "payload_json": '{"title":"Resource 2"}',
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_delete_activity_resource_command,
                {
                    "json": True,
                    "activity_id": "77",
                    "resource_id": "r1",
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_add_activity_comment_command,
                {
                    "json": True,
                    "activity_id": "77",
                    "payload_json": '{"id":"c2","body":"note"}',
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_update_activity_comment_command,
                {
                    "json": True,
                    "activity_id": "77",
                    "comment_id": "1",
                    "payload_json": '{"body":"updated"}',
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_delete_activity_comment_command,
                {
                    "json": True,
                    "activity_id": "77",
                    "comment_id": "c2",
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_reply_activity_comment_command,
                {
                    "json": True,
                    "activity_id": "77",
                    "comment_id": "1",
                    "payload_json": '{"id":"r2","body":"reply"}',
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_update_activity_comment_reply_command,
                {
                    "json": True,
                    "activity_id": "77",
                    "reply_id": "r2",
                    "payload_json": '{"body":"reply updated"}',
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_delete_activity_comment_reply_command,
                {
                    "json": True,
                    "activity_id": "77",
                    "reply_id": "r2",
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_operate_activity_comments_command,
                {
                    "json": True,
                    "activity_id": "77",
                    "payload_json": '{"comment_ids":["1"],"operation":"pin"}',
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_delete_activity_command,
                {
                    "json": True,
                    "activity_id": "88",
                    "delete_related_activity": True,
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_publish_activities_command,
                {
                    "json": True,
                    "course_id": "",
                    "activity_keys": "homework-77",
                    "published": "true",
                    "payload_json": "",
                    "execute": True,
                    "yes": True,
                    "max_courses": 50,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_save_activity_resource_command,
                {
                    "json": True,
                    "resource_id": "r1",
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_log_activity_read_command,
                {
                    "json": True,
                    "activity_id": "77",
                    "payload_json": '{"upload_id":"r1"}',
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_log_exam_activity_read_command,
                {
                    "json": True,
                    "exam_id": "1",
                    "payload_json": '{"source":"exam"}',
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_grade_rollcalls_command,
                {
                    "json": True,
                    "rollcall_ids": "42",
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_grade_submission_command,
                {
                    "json": True,
                    "activity_id": "77",
                    "payload_json": '{"submission_id":9,"score":95}',
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_recommend_submissions_command,
                {
                    "json": True,
                    "submission_ids": "9",
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_cancel_recommend_submission_command,
                {
                    "json": True,
                    "submission_id": "9",
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_score_forum_command,
                {
                    "json": True,
                    "activity_id": "77",
                    "student_id": "2",
                    "group_id": "",
                    "score": "99",
                    "payload_json": "",
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_update_forum_status_command,
                {
                    "json": True,
                    "activity_id": "77",
                    "enable": "false",
                    "payload_json": "",
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_create_subject_lib_command,
                {
                    "json": True,
                    "course_id": "",
                    "scope": "course",
                    "title": "New Bank",
                    "lib_type": "exam",
                    "parent_id": "0",
                    "payload_json": "",
                    "execute": True,
                    "yes": True,
                    "max_courses": 50,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_copy_subject_lib_command,
                {
                    "json": True,
                    "subject_lib_id": "lib1",
                    "target": "exam",
                    "target_id": "1",
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_update_subject_lib_command,
                {
                    "json": True,
                    "subject_lib_id": "lib1",
                    "title": "Renamed Bank",
                    "payload_json": "",
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_move_subject_libs_command,
                {
                    "json": True,
                    "payload_json": '{"lib_ids":["lib1"],"parent_id":"folder1","operate_type":"move"}',
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_copy_subject_libs_to_user_command,
                {
                    "json": True,
                    "payload_json": '{"lib_ids":["course-lib1"]}',
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_move_subject_lib_subjects_command,
                {
                    "json": True,
                    "payload_json": '{"original_lib_id":"lib1","target_lib_id":"course-lib1","subject_ids":["sub1"]}',
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_copy_subject_lib_subjects_command,
                {
                    "json": True,
                    "payload_json": '{"original_lib_id":"lib1","target_lib_id":"course-lib1","subject_ids":["sub1"]}',
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_delete_subject_lib_subjects_command,
                {
                    "json": True,
                    "subject_lib_id": "lib1",
                    "subject_ids": "sub1",
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_delete_subject_lib_command,
                {
                    "json": True,
                    "subject_lib_id": "lib1",
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_create_questionnaire_subject_command,
                {
                    "json": True,
                    "questionnaire_id": "q1",
                    "payload_json": '{"id":"qs2","type":"single_choice"}',
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_update_questionnaire_subject_command,
                {
                    "json": True,
                    "questionnaire_id": "q1",
                    "subject_id": "qs2",
                    "payload_json": '{"description":"Updated"}',
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_delete_questionnaire_subject_command,
                {
                    "json": True,
                    "questionnaire_id": "q1",
                    "subject_id": "qs2",
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_import_questionnaire_subjects_command,
                {
                    "json": True,
                    "questionnaire_id": "q1",
                    "payload_json": '{"subject_ids":["sub1"]}',
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_import_questionnaire_campus_subjects_command,
                {
                    "json": True,
                    "questionnaire_id": "q1",
                    "payload_json": '{"subjects":["campus1"]}',
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_create_course_package_command,
                {
                    "json": True,
                    "course_id": "",
                    "payload_json": '{"id":"cp2","title":"New Package"}',
                    "execute": True,
                    "yes": True,
                    "max_courses": 50,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_export_course_package_command,
                {
                    "json": True,
                    "course_id": "",
                    "payload_json": '{"id":"cp-export","title":"Exported Package"}',
                    "execute": True,
                    "yes": True,
                    "max_courses": 50,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_update_course_package_command,
                {
                    "json": True,
                    "course_package_id": "cp1",
                    "payload_json": '{"title":"Updated Package"}',
                    "no_check": True,
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_save_course_package_command,
                {
                    "json": True,
                    "course_package_id": "cp1",
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_import_course_package_command,
                {
                    "json": True,
                    "course_package_id": "cp1",
                    "payload_json": '{"course_id":"301"}',
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_delete_course_package_command,
                {
                    "json": True,
                    "course_package_id": "cp2",
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_create_courseware_quiz_subjects_command,
                {
                    "json": True,
                    "activity_id": "77",
                    "payload_json": '{"subjects":[{"id":"cw-sub2"}]}',
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_update_courseware_quiz_subjects_command,
                {
                    "json": True,
                    "courseware_quiz_id": "cwq1",
                    "payload_json": '{"subjects":[{"id":"cw-sub2","sort":1}]}',
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_generate_courseware_quiz_subjects_command,
                {
                    "json": True,
                    "payload_json": '{"upload_id":"r1","num_of_single_selection":1}',
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_generate_courseware_quiz_subjects_by_text_command,
                {
                    "json": True,
                    "payload_json": '{"text_content":"Question text","num_of_single_selection":1}',
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_format_courseware_quiz_question_command,
                {
                    "json": True,
                    "payload_json": '{"text":"1. Question"}',
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_copy_subject_libs_to_courseware_quiz_command,
                {
                    "json": True,
                    "courseware_quiz_id": "cwq1",
                    "payload_json": '{"libIds":["lib1"]}',
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_update_homework_announce_status_command,
                {
                    "json": True,
                    "homework_id": "77",
                    "payload_json": '{"status":"published"}',
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_update_homework_rubric_command,
                {
                    "json": True,
                    "homework_id": "77",
                    "payload_json": '{"rubric_id":3}',
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_delete_exams_command,
                {
                    "json": True,
                    "exam_ids": "1",
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_create_exam_command,
                {
                    "json": True,
                    "course_id": "",
                    "payload_json": '{"title":"Quiz"}',
                    "execute": True,
                    "yes": True,
                    "max_courses": 50,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_update_exam_command,
                {
                    "json": True,
                    "exam_id": "1",
                    "payload_json": '{"title":"Quiz 2"}',
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_score_exam_command,
                {
                    "json": True,
                    "score_id": "",
                    "payload_json": '{"exam_id":1,"examinee_id":2,"final_score":92}',
                    "execute": True,
                    "yes": True,
                    "include_sensitive": False,
                },
            ),
            (
                tron.teacher_comment_exam_status_command,
                {
                    "json": True,
                    "exam_id": "1",
                    "student_id": "2",
                    "status_comment": "checked",
                    "execute": True,
                    "yes": True,
                },
            ),
        ]

        with patch("builtins.print", side_effect=output.append):
            results = []
            for command, values in command_cases:
                args = type("Args", (), values)()
                results.append(await command(args))

        self.assertTrue(all(result == 0 for result in results))
        self.assertEqual(self.server.updated_announce_score_settings[0]["body"], {"published": True})
        self.assertEqual(self.server.updated_score_type_settings[0]["body"], {"score_type": "normal_rule"})
        self.assertEqual(self.server.created_custom_score_items[0]["body"], {"name": "Participation"})
        self.assertEqual(self.server.updated_custom_score_items[0]["body"], {"name": "Updated"})
        self.assertEqual(self.server.deleted_custom_score_items, ["10"])
        self.assertEqual(self.server.scored_custom_items[0]["body"], {"score": "86"})
        self.assertEqual(self.server.updated_enrollment_scores[0]["body"]["course_id"], 301)
        self.assertEqual(self.server.updated_total_scores[0]["mode"], "replace")
        self.assertEqual(self.server.updated_score_books[0]["body"]["enrollment_score_book"][0]["enrollment_id"], 2)
        self.assertEqual(self.server.updated_score_publish_item_maps[0]["body"], {"item_id": 10})
        self.assertEqual(self.server.submitted_edu_scores[0]["body"], {"course_id": 301})
        self.assertEqual(self.server.created_rubrics[0]["body"], {"name": "New rubric"})
        self.assertEqual(self.server.updated_rubrics[0]["body"], {"name": "Updated rubric"})
        self.assertEqual(self.server.deleted_rubrics[0]["body"], {"rubric_ids": ["3"]})
        self.assertEqual(self.server.deleted_activities[0]["body"], {"activity_ids": ["77"]})
        self.assertEqual(self.server.created_activities[0]["body"], {"id": "88", "title": "Material"})
        self.assertEqual(self.server.updated_activities[0]["body"], {"title": "Homework 2"})
        self.assertEqual(self.server.updated_activity_resources[0]["body"], {"title": "Resource 2"})
        self.assertEqual(self.server.deleted_activity_resources[0], {"activity_id": "77", "resource_id": "r1"})
        self.assertEqual(self.server.added_activity_comments[0]["body"], {"id": "c2", "body": "note"})
        self.assertEqual(self.server.updated_activity_comments[0]["body"], {"body": "updated"})
        self.assertEqual(self.server.deleted_activity_comments[0], {"activity_id": "77", "comment_id": "c2"})
        self.assertEqual(self.server.replied_activity_comments[0]["body"], {"id": "r2", "body": "reply"})
        self.assertEqual(self.server.updated_activity_comment_replies[0]["body"], {"body": "reply updated"})
        self.assertEqual(self.server.deleted_activity_comment_replies[0], {"activity_id": "77", "reply_id": "r2"})
        self.assertEqual(self.server.operated_activity_comments[0]["body"], {"comment_ids": ["1"], "operation": "pin"})
        self.assertEqual(
            self.server.deleted_activity_ids[0],
            {"activity_id": "88", "delete_related_activity": True},
        )
        self.assertEqual(self.server.published_activities[0]["body"], {"activity_ids": ["homework-77"], "type": True})
        self.assertEqual(self.server.saved_activity_resources, ["r1"])
        self.assertEqual(
            self.server.logged_activity_reads,
            [
                {"activity_id": "77", "exam": False, "body": {"upload_id": "r1"}},
                {"activity_id": "1", "exam": True, "body": {"source": "exam"}},
            ],
        )
        self.assertEqual(self.server.graded_rollcalls[0]["body"], {"rollcall_ids": ["42"]})
        self.assertEqual(self.server.graded_submissions[0]["body"], {"submission_id": 9, "score": 95})
        self.assertEqual(self.server.recommended_submissions[0]["body"], {"submission_ids": ["9"]})
        self.assertEqual(self.server.cancelled_recommended_submissions, ["9"])
        self.assertEqual(self.server.scored_forums[0]["body"], {"student_id": "2", "score": "99"})
        self.assertEqual(self.server.updated_forum_statuses[0]["body"], {"enable": False})
        self.assertEqual(self.server.updated_subject_libs[0]["body"], {"title": "Renamed Bank"})
        self.assertEqual(
            self.server.moved_subject_libs[0]["body"],
            {"lib_ids": ["lib1"], "parent_id": "folder1", "operate_type": "move"},
        )
        self.assertEqual(self.server.copied_subject_libs_to_user[0]["body"], {"lib_ids": ["course-lib1"]})
        self.assertEqual(
            self.server.moved_subject_lib_subjects[0]["body"],
            {"original_lib_id": "lib1", "target_lib_id": "course-lib1", "subject_ids": ["sub1"]},
        )
        self.assertEqual(
            self.server.copied_subject_lib_subjects[0]["body"],
            {"original_lib_id": "lib1", "target_lib_id": "course-lib1", "subject_ids": ["sub1"]},
        )
        self.assertEqual(self.server.created_questionnaire_subjects[0]["body"], {"id": "qs2", "type": "single_choice"})
        self.assertEqual(self.server.updated_questionnaire_subjects[0]["body"], {"description": "Updated"})
        self.assertEqual(
            self.server.deleted_questionnaire_subjects[0],
            {"questionnaire_id": "q1", "subject_id": "qs2"},
        )
        self.assertEqual(self.server.imported_questionnaire_subjects[0]["body"], {"subject_ids": ["sub1"]})
        self.assertEqual(self.server.imported_questionnaire_campus_subjects[0]["body"], {"subjects": ["campus1"]})
        self.assertEqual(self.server.created_course_packages[0]["body"], {"id": "cp2", "title": "New Package"})
        self.assertEqual(
            self.server.exported_course_packages[0]["body"],
            {"id": "cp-export", "title": "Exported Package"},
        )
        self.assertEqual(self.server.updated_course_packages[0]["query"], {"no_check": "true"})
        self.assertEqual(self.server.updated_course_packages[0]["body"], {"title": "Updated Package"})
        self.assertEqual(self.server.saved_course_packages, ["cp1"])
        self.assertEqual(self.server.imported_course_packages[0]["body"], {"course_id": "301"})
        self.assertEqual(self.server.deleted_course_packages, ["cp2"])
        self.assertEqual(
            self.server.created_courseware_quiz_subjects[0]["body"],
            {"subjects": [{"id": "cw-sub2"}]},
        )
        self.assertEqual(
            self.server.updated_courseware_quiz_subjects[0]["body"],
            {"subjects": [{"id": "cw-sub2", "sort": 1}]},
        )
        self.assertEqual(
            self.server.generated_courseware_quiz_subjects[0]["body"],
            {"upload_id": "r1", "num_of_single_selection": 1},
        )
        self.assertEqual(
            self.server.generated_courseware_quiz_subjects_by_text[0]["body"],
            {"text_content": "Question text", "num_of_single_selection": 1},
        )
        self.assertEqual(self.server.formatted_courseware_quiz_questions[0]["body"], {"text": "1. Question"})
        self.assertEqual(
            self.server.copied_subject_libs_to_courseware_quiz[0],
            {"query": {"courseware_quiz_id": "cwq1"}, "body": {"libIds": ["lib1"]}},
        )
        self.assertEqual(self.server.updated_homework_announce_statuses[0]["body"], {"status": "published"})
        self.assertEqual(self.server.updated_homework_rubrics[0]["body"], {"rubric_id": 3})
        self.assertEqual(self.server.deleted_exams[0]["body"], {"exam_ids": ["1"]})
        self.assertEqual(self.server.created_exams[0]["body"], {"title": "Quiz"})
        self.assertEqual(self.server.updated_exams[0]["body"], {"title": "Quiz 2"})
        self.assertEqual(self.server.scored_exams[0]["body"], {"exam_id": 1, "examinee_id": 2, "final_score": 92})
        self.assertEqual(
            self.server.commented_exam_statuses[0]["body"],
            {"student_id": "2", "status_comment": "checked"},
        )

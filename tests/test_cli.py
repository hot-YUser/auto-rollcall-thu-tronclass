import copy
import json
import tempfile
from pathlib import Path
from types import SimpleNamespace
import unittest
from unittest.mock import AsyncMock, patch

from troTHU import tron
from troTHU.release_checklist import EXPECTED_WINDOWS_ZIP


class TronCliSmokeTest(unittest.TestCase):
    def setUp(self) -> None:
        self.original_config = copy.deepcopy(tron.CONFIG)

    def tearDown(self) -> None:
        tron.CONFIG.clear()
        tron.CONFIG.update(copy.deepcopy(self.original_config))

    def test_status_command_dispatches_without_running_monitor(self) -> None:
        with (
            patch.object(tron, "bootstrap_config"),
            patch.object(tron, "print_status") as print_status,
        ):
            result = tron.main(["status"])

        self.assertEqual(result, 0)
        print_status.assert_called_once()

    def test_run_console_flags_dispatch(self) -> None:
        with patch.object(tron, "run_monitor_forever", return_value=0) as runner:
            self.assertEqual(tron.main([]), 0)
            self.assertEqual(tron.main(["run"]), 0)
            self.assertEqual(tron.main(["run", "--classic"]), 0)
            self.assertEqual(tron.main(["run", "--no-input"]), 0)

        self.assertEqual(runner.call_args_list[0].kwargs["no_input"], False)
        self.assertEqual(runner.call_args_list[1].kwargs["no_input"], False)
        self.assertEqual(runner.call_args_list[2].kwargs["no_input"], False)
        self.assertEqual(runner.call_args_list[3].kwargs["no_input"], True)

    def test_control_command_is_removed(self) -> None:
        with self.assertRaises(SystemExit):
            tron.main(["control", "status"])

    def test_config_show_doctor_and_compact_commands_dispatch(self) -> None:
        outputs = []
        with patch.object(tron, "bootstrap_config"), patch("builtins.print", side_effect=outputs.append):
            show_result = tron.main(["config", "show", "--json"])
            doctor_result = tron.main(["config", "doctor", "--json"])
            compact_result = tron.main(["config", "compact", "--dry-run", "--json"])

        self.assertEqual(show_result, 0)
        self.assertEqual(doctor_result, 0)
        self.assertEqual(compact_result, 0)
        self.assertEqual(json.loads(outputs[0])["version"], "config-view-v1")
        self.assertIn("summary", json.loads(outputs[1]))
        self.assertEqual(json.loads(outputs[2])["status"], "dry_run")

    def test_config_advanced_command_dispatches_legacy_notepad(self) -> None:
        with (
            patch.object(tron, "bootstrap_config"),
            patch.object(tron, "open_config_in_legacy_notepad", return_value={"ok": True, "status": "opened"}) as opener,
        ):
            result = tron.main(["config", "advanced", "--json"])

        self.assertEqual(result, 0)
        opener.assert_called_once()

    def test_account_list_command_dispatches(self) -> None:
        tron.CONFIG.update(
            tron.normalize_config(
                {
                    "account": {"user": "u1", "passwd": ""},
                    "accounts": {
                        "current": "default",
                        "profiles": {"default": {"user": "u1", "passwd": "", "label": ""}},
                    },
                }
            )
        )

        with patch.object(tron, "bootstrap_config"):
            result = tron.main(["account", "list"])

        self.assertEqual(result, 0)

    def test_account_state_command_dispatches(self) -> None:
        tron.CONFIG.update(
            tron.normalize_config(
                {
                    "account": {"user": "u1", "passwd": ""},
                    "accounts": {
                        "current": "default",
                        "profiles": {"default": {"user": "u1", "passwd": "", "label": ""}},
                    },
                }
            )
        )

        with (
            patch.object(tron, "bootstrap_config"),
            patch("builtins.print") as print_mock,
        ):
            result = tron.main(["account", "state", "--json"])

        self.assertEqual(result, 0)
        payload = json.loads(print_mock.call_args.args[0])
        self.assertEqual(payload["profile"], "default")
        self.assertIn("runtime", payload)

    def test_refresh_command_is_safe_when_cookie_cache_is_missing(self) -> None:
        tron.CONFIG.update(tron.normalize_config({"account": {"user": "u1", "passwd": ""}}))

        with patch.object(tron, "bootstrap_config"):
            result = tron.main(["refresh"])

        self.assertEqual(result, 0)

    def test_debug_capture_command_dispatches(self) -> None:
        def fake_run(coro):
            coro.close()
            return 0

        with (
            patch.object(tron, "bootstrap_config"),
            patch.object(tron.asyncio, "run", side_effect=fake_run) as asyncio_run,
        ):
            result = tron.main(["debug-capture", "--output", "capture.jsonl"])

        self.assertEqual(result, 0)
        asyncio_run.assert_called_once()

    def test_courses_command_dispatches_without_running_monitor(self) -> None:
        def fake_run(coro):
            coro.close()
            return 0

        with (
            patch.object(tron, "bootstrap_config"),
            patch.object(tron.asyncio, "run", side_effect=fake_run) as asyncio_run,
        ):
            result = tron.main(["courses", "--json"])

        self.assertEqual(result, 0)
        asyncio_run.assert_called_once()

    def test_teacher_extended_commands_dispatch(self) -> None:
        def fake_run(coro):
            coro.close()
            return 0

        cases = [
            (
                ["teacher", "update-score-publish-item-maps", "--payload-json", "{}"],
                "teacher_update_score_publish_item_maps_command",
            ),
            (["teacher", "submit-edu-scores", "--payload-json", "{}"], "teacher_submit_edu_scores_command"),
            (["teacher", "create-rubric", "--payload-json", "{}"], "teacher_create_rubric_command"),
            (["teacher", "update-rubric", "3", "--payload-json", "{}"], "teacher_update_rubric_command"),
            (["teacher", "delete-rubrics", "--rubric-ids", "3"], "teacher_delete_rubrics_command"),
            (["teacher", "groups"], "teacher_groups_command"),
            (["teacher", "bulletins"], "teacher_bulletins_command"),
            (["teacher", "stats"], "teacher_stats_command"),
            (["teacher", "air-credit", "--target", "course"], "teacher_air_credit_command"),
            (["teacher", "management-calendar-meetings"], "teacher_management_calendar_meetings_command"),
            (["teacher", "calendar-meetings"], "teacher_calendar_meetings_command"),
            (["teacher", "teaching-calendars"], "teacher_teaching_calendars_command"),
            (["teacher", "vtrses"], "teacher_vtrses_command"),
            (["teacher", "departments"], "teacher_departments_command"),
            (["teacher", "ai-ppt"], "teacher_ai_ppt_command"),
            (["teacher", "platform"], "teacher_platform_command"),
            (["teacher", "org-bulletins"], "teacher_org_bulletins_command"),
            (["teacher", "catalog"], "teacher_catalog_command"),
            (["teacher", "media"], "teacher_media_command"),
            (["teacher", "authoring"], "teacher_authoring_command"),
            (["teacher", "create-bulletin", "--payload-json", "{}"], "teacher_create_bulletin_command"),
            (["teacher", "create-calendar-meeting", "--payload-json", "{}"], "teacher_create_calendar_meeting_command"),
            (
                ["teacher", "update-calendar-meeting", "meeting1", "--payload-json", "{}"],
                "teacher_update_calendar_meeting_command",
            ),
            (["teacher", "delete-calendar-meeting", "meeting1"], "teacher_delete_calendar_meeting_command"),
            (
                ["teacher", "create-air-credit-assignments", "--payload-json", "{}"],
                "teacher_create_air_credit_assignments_command",
            ),
            (
                ["teacher", "update-air-credit-assignments", "--payload-json", "{}"],
                "teacher_update_air_credit_assignments_command",
            ),
            (
                ["teacher", "update-air-credit-status", "--payload-json", "{}"],
                "teacher_update_air_credit_status_command",
            ),
            (
                ["teacher", "clear-air-credit-remaining", "--payload-json", "{}"],
                "teacher_clear_air_credit_remaining_credits_command",
            ),
            (
                ["teacher", "update-air-credit-course-usage-limit", "--usage-limit", "30"],
                "teacher_update_air_credit_course_usage_limit_command",
            ),
            (
                ["teacher", "create-teaching-calendar", "--payload-json", "{}"],
                "teacher_create_teaching_calendar_command",
            ),
            (
                ["teacher", "update-teaching-calendar", "tc1", "--payload-json", "{}"],
                "teacher_update_teaching_calendar_command",
            ),
            (["teacher", "delete-teaching-calendar", "tc1"], "teacher_delete_teaching_calendar_command"),
            (
                ["teacher", "notify-outline-editing", "--course-ids", "101"],
                "teacher_notify_outline_editing_command",
            ),
            (
                ["teacher", "sync-courses-from-urp", "--course-ids", "101"],
                "teacher_sync_courses_from_urp_command",
            ),
            (
                ["teacher", "update-chinamcloud-resources", "--resources-json", "[]"],
                "teacher_update_chinamcloud_resources_command",
            ),
            (["teacher", "update-course-outline", "301", "--payload-json", "{}"], "teacher_update_course_outline_command"),
            (["teacher", "create-outline-setting", "3", "--payload-json", "{}"], "teacher_create_outline_setting_command"),
            (["teacher", "update-outline-setting", "3", "--payload-json", "{}"], "teacher_update_outline_setting_command"),
            (["teacher", "sort-outline-setting", "3", "--payload-json", "{}"], "teacher_sort_outline_setting_command"),
            (
                ["teacher", "delete-outline-setting-option", "3", "objective"],
                "teacher_delete_outline_setting_option_command",
            ),
            (["teacher", "toggle-outline-setting"], "teacher_toggle_outline_setting_command"),
            (
                ["teacher", "update-outline-required-options", "3", "--required-options-json", "[]"],
                "teacher_update_outline_required_options_command",
            ),
            (
                ["teacher", "update-enrollment-role", "en1", "--role", "assistant_instructor"],
                "teacher_update_enrollment_role_command",
            ),
            (
                ["teacher", "update-enrollments-role", "--enrollment-ids", "en1,en2", "--role", "student"],
                "teacher_update_enrollments_role_command",
            ),
            (["teacher", "delete-enrollment", "en2"], "teacher_delete_enrollment_command"),
            (
                ["teacher", "delete-enrollments", "--enrollment-ids", "en3,en4"],
                "teacher_delete_enrollments_command",
            ),
            (["teacher", "update-bulletin", "b1", "--payload-json", "{}"], "teacher_update_bulletin_command"),
            (["teacher", "delete-bulletin", "b1"], "teacher_delete_bulletin_command"),
            (["teacher", "mark-bulletin-read", "b1"], "teacher_mark_bulletin_read_command"),
            (["teacher", "create-module", "--payload-json", "{}"], "teacher_create_module_command"),
            (["teacher", "update-module", "m1", "--payload-json", "{}"], "teacher_update_module_command"),
            (["teacher", "delete-module", "m1"], "teacher_delete_module_command"),
            (["teacher", "sort-modules", "--payload-json", "{}"], "teacher_sort_modules_command"),
            (["teacher", "check-module-dependents", "m1"], "teacher_check_module_dependents_command"),
            (["teacher", "create-syllabus", "--payload-json", "{}"], "teacher_create_syllabus_command"),
            (["teacher", "update-syllabus", "s1", "--payload-json", "{}"], "teacher_update_syllabus_command"),
            (["teacher", "delete-syllabus", "s1"], "teacher_delete_syllabus_command"),
            (["teacher", "sort-syllabuses", "--payload-json", "{}"], "teacher_sort_syllabuses_command"),
            (["teacher", "check-syllabus-dependents", "s1"], "teacher_check_syllabus_dependents_command"),
            (
                ["teacher", "sort-module-activities", "m1", "--payload-json", "{}"],
                "teacher_sort_module_activities_command",
            ),
            (
                ["teacher", "sort-syllabus-activities", "s1", "--payload-json", "{}"],
                "teacher_sort_syllabus_activities_command",
            ),
            (["teacher", "resort-activity", "--payload-json", "{}"], "teacher_resort_activity_command"),
            (["teacher", "import-course-groups", "--payload-json", "{}"], "teacher_import_course_groups_command"),
            (["teacher", "import-enrollments", "--payload-json", "{}"], "teacher_import_enrollments_command"),
            (["teacher", "import-scores", "--payload-json", "{}"], "teacher_import_scores_command"),
            (["teacher", "import-item-scores", "--payload-json", "{}"], "teacher_import_item_scores_command"),
            (["teacher", "import-seat-numbers", "--payload-json", "{}"], "teacher_import_seat_numbers_command"),
            (["teacher", "import-rollcalls", "--payload-json", "{}"], "teacher_import_rollcalls_command"),
            (["teacher", "group-set", "g1"], "teacher_group_set_command"),
            (["teacher", "create-group-set", "--payload-json", "{}"], "teacher_create_group_set_command"),
            (["teacher", "update-group-set", "g1", "--payload-json", "{}"], "teacher_update_group_set_command"),
            (["teacher", "delete-group-set", "g1"], "teacher_delete_group_set_command"),
            (["teacher", "copy-group-set", "g1", "--payload-json", "{}"], "teacher_copy_group_set_command"),
            (["teacher", "random-grouping", "g1", "--payload-json", "{}"], "teacher_random_grouping_command"),
            (["teacher", "create-group", "g1", "--payload-json", "{}"], "teacher_create_group_command"),
            (["teacher", "update-group", "group1", "--payload-json", "{}"], "teacher_update_group_command"),
            (["teacher", "update-group-info", "group1", "--payload-json", "{}"], "teacher_update_group_info_command"),
            (["teacher", "delete-group", "group1"], "teacher_delete_group_command"),
            (["teacher", "sort-groups", "g1", "--payload-json", "{}"], "teacher_sort_groups_command"),
            (
                ["teacher", "update-group-members", "group1", "--payload-json", "{}"],
                "teacher_update_group_members_command",
            ),
            (
                ["teacher", "update-group-member", "group1", "member1", "--payload-json", "{}"],
                "teacher_update_group_member_command",
            ),
            (
                ["teacher", "delete-group-member", "group1", "member1"],
                "teacher_delete_group_member_command",
            ),
            (
                ["teacher", "check-activity-dependents", "--activity-ids", "77"],
                "teacher_check_activity_dependents_command",
            ),
            (
                ["teacher", "completion-criteria", "--activity-type", "homework"],
                "teacher_completion_criteria_command",
            ),
            (["teacher", "course-completion-criteria"], "teacher_course_completion_criteria_command"),
            (["teacher", "forum-categories"], "teacher_forum_categories_command"),
            (["teacher", "forum-category", "cat1"], "teacher_forum_category_command"),
            (["teacher", "activity-uploads-license", "77"], "teacher_activity_uploads_license_command"),
            (["teacher", "subject-libs"], "teacher_subject_libs_command"),
            (["teacher", "subject-lib-subjects", "lib1"], "teacher_subject_lib_subjects_command"),
            (["teacher", "subject-lib-statistic", "lib1"], "teacher_subject_lib_statistic_command"),
            (["teacher", "subject-lib-knowledge-nodes", "lib1"], "teacher_subject_lib_knowledge_nodes_command"),
            (["teacher", "subject-lib-folders"], "teacher_subject_lib_folders_command"),
            (["teacher", "create-subject-lib", "--title", "Bank"], "teacher_create_subject_lib_command"),
            (
                ["teacher", "copy-subject-lib", "lib1", "--target", "exam", "--target-id", "1"],
                "teacher_copy_subject_lib_command",
            ),
            (["teacher", "update-subject-lib", "lib1", "--title", "Bank"], "teacher_update_subject_lib_command"),
            (
                ["teacher", "move-subject-libs", "--payload-json", "{}"],
                "teacher_move_subject_libs_command",
            ),
            (
                ["teacher", "copy-subject-libs-to-user", "--payload-json", "{}"],
                "teacher_copy_subject_libs_to_user_command",
            ),
            (
                ["teacher", "move-subject-lib-subjects", "--payload-json", "{}"],
                "teacher_move_subject_lib_subjects_command",
            ),
            (
                ["teacher", "copy-subject-lib-subjects", "--payload-json", "{}"],
                "teacher_copy_subject_lib_subjects_command",
            ),
            (["teacher", "delete-subject-lib", "lib1"], "teacher_delete_subject_lib_command"),
            (
                ["teacher", "delete-subject-lib-subjects", "lib1", "--subject-ids", "sub1"],
                "teacher_delete_subject_lib_subjects_command",
            ),
            (
                ["teacher", "questionnaire-submissions", "q1", "--subject-id", "qs1"],
                "teacher_questionnaire_submissions_command",
            ),
            (["teacher", "course-estimates"], "teacher_course_estimates_command"),
            (
                ["teacher", "course-estimate-replies", "ce1"],
                "teacher_course_estimate_replies_command",
            ),
            (
                ["teacher", "course-estimate-user", "ce1", "2"],
                "teacher_course_estimate_user_command",
            ),
            (["teacher", "course-packages"], "teacher_course_packages_command"),
            (["teacher", "course-package-course", "cp1"], "teacher_course_package_course_command"),
            (["teacher", "courseware-quizzes", "77"], "teacher_courseware_quizzes_command"),
            (["teacher", "courseware-quiz-subjects", "cwq1"], "teacher_courseware_quiz_subjects_command"),
            (["teacher", "courseware-quiz-settings"], "teacher_courseware_quiz_settings_command"),
            (["teacher", "resource-groups"], "teacher_resource_groups_command"),
            (["teacher", "resource-group", "rg1"], "teacher_resource_group_command"),
            (["teacher", "resource-group-members", "rg1"], "teacher_resource_group_members_command"),
            (["teacher", "resource-group-folders", "rg1"], "teacher_resource_group_folders_command"),
            (["teacher", "resource-group-resources", "rg1"], "teacher_resource_group_resources_command"),
            (["teacher", "resource-group-rubrics", "rg1"], "teacher_resource_group_rubrics_command"),
            (
                ["teacher", "resource-group-subject-libs", "rg1"],
                "teacher_resource_group_subject_libs_command",
            ),
            (["teacher", "user-resources"], "teacher_user_resources_command"),
            (["teacher", "user-resource-folder-info", "ur1"], "teacher_user_resource_folder_info_command"),
            (["teacher", "shared-resources"], "teacher_shared_resources_command"),
            (
                ["teacher", "shared-resource-collections", "u1"],
                "teacher_shared_resource_collections_command",
            ),
            (
                ["teacher", "shared-resource-comments", "sr1"],
                "teacher_shared_resource_comments_command",
            ),
            (
                ["teacher", "shared-resource-classifications"],
                "teacher_shared_resource_classifications_command",
            ),
            (["teacher", "shared-resource-tags"], "teacher_shared_resource_tags_command"),
            (
                ["teacher", "shared-resource-recommendations"],
                "teacher_shared_resource_recommendations_command",
            ),
            (
                ["teacher", "shared-resource-track-users"],
                "teacher_shared_resource_track_users_command",
            ),
            (["teacher", "shared-resource-followers"], "teacher_shared_resource_followers_command"),
            (["teacher", "cc-license-groups"], "teacher_cc_license_groups_command"),
            (["teacher", "cc-license-map"], "teacher_cc_license_map_command"),
            (
                ["teacher", "download", "/api/uploads/up1/blob", "--output", "out.bin"],
                "teacher_download_command",
            ),
            (
                ["teacher", "download-request", "GET", "/api/questionnaire/q1/export/excel", "--output", "out.xlsx"],
                "teacher_download_request_command",
            ),
            (
                ["teacher", "download-upload", "up1", "--output", "out.bin"],
                "teacher_download_upload_command",
            ),
            (
                ["teacher", "download-upload-thumbnail", "up1", "--output", "out.bin"],
                "teacher_download_upload_thumbnail_command",
            ),
            (
                ["teacher", "download-upload-modified-image", "up1", "--output", "out.bin"],
                "teacher_download_upload_modified_image_command",
            ),
            (
                ["teacher", "download-upload-swf", "up1", "--output", "out.bin"],
                "teacher_download_upload_swf_command",
            ),
            (
                ["teacher", "download-upload-reference", "ref1", "--output", "out.bin"],
                "teacher_download_upload_reference_command",
            ),
            (
                ["teacher", "download-shared-resource", "sr1", "--output", "out.bin"],
                "teacher_download_shared_resource_command",
            ),
            (
                ["teacher", "download-wedrive-file", "file1", "--output", "out.bin"],
                "teacher_download_wedrive_file_command",
            ),
            (
                ["teacher", "download-third-part-upload", "tp1", "--output", "out.bin"],
                "teacher_download_third_part_upload_command",
            ),
            (
                ["teacher", "export-questionnaire", "q1", "--output", "out.xlsx"],
                "teacher_export_questionnaire_command",
            ),
            (
                ["teacher", "export-topic", "topic1", "--output", "out.xlsx"],
                "teacher_export_topic_command",
            ),
            (
                ["teacher", "export-category-topics", "cat1", "--output", "out.xlsx"],
                "teacher_export_category_topics_command",
            ),
            (
                ["teacher", "export-shared-resource-subject-lib", "sr1", "--output", "out.xlsx"],
                "teacher_export_shared_resource_subject_lib_command",
            ),
            (
                ["teacher", "export-stat-students", "--output", "out.xlsx"],
                "teacher_export_stat_students_command",
            ),
            (
                ["teacher", "export-stat-report", "rollcall", "--output", "out.xlsx"],
                "teacher_export_stat_report_command",
            ),
            (
                ["teacher", "export-department-user-attendance", "org1", "--output", "out.xlsx"],
                "teacher_export_department_user_attendance_command",
            ),
            (
                ["teacher", "export-department-attendance", "org1", "--output", "out.xlsx"],
                "teacher_export_department_attendance_command",
            ),
            (
                ["teacher", "export-stat-vtrses-data", "--output", "out.xlsx"],
                "teacher_export_stat_vtrses_data_command",
            ),
            (
                ["teacher", "export-ai-ppt-usage", "--output", "out.xlsx"],
                "teacher_export_ai_ppt_usage_command",
            ),
            (
                ["teacher", "export-air-credit", "course", "--output", "out.xlsx"],
                "teacher_export_air_credit_command",
            ),
            (
                ["teacher", "export-management-calendar", "--output", "out.xlsx"],
                "teacher_export_management_calendar_command",
            ),
            (
                ["teacher", "upload-file", "lesson.txt", "--metadata-json", "{}", "--execute", "--yes"],
                "teacher_upload_file_command",
            ),
            (["teacher", "entries"], "teacher_entries_command"),
            (["teacher", "entry", "entry1"], "teacher_entry_command"),
            (["teacher", "entry-references", "entry1"], "teacher_entry_references_command"),
            (["teacher", "slides"], "teacher_slides_command"),
            (["teacher", "slide", "slide1"], "teacher_slide_command"),
            (["teacher", "slide-records", "slide1"], "teacher_slide_records_command"),
            (["teacher", "slide-export-status", "slide1"], "teacher_slide_export_status_command"),
            (["teacher", "published-slides"], "teacher_published_slides_command"),
            (
                ["teacher", "create-resource-group", "--payload-json", "{}"],
                "teacher_create_resource_group_command",
            ),
            (
                ["teacher", "update-resource-group", "rg1", "--payload-json", "{}"],
                "teacher_update_resource_group_command",
            ),
            (["teacher", "delete-resource-group", "rg1"], "teacher_delete_resource_group_command"),
            (
                ["teacher", "delete-resource-group-members", "rg1", "--payload-json", "{}"],
                "teacher_delete_resource_group_members_command",
            ),
            (
                ["teacher", "delete-resource-group-folder", "rg1", "folder1"],
                "teacher_delete_resource_group_folder_command",
            ),
            (
                ["teacher", "update-resource-group-resource", "rg1", "sr1", "--payload-json", "{}"],
                "teacher_update_resource_group_resource_command",
            ),
            (
                ["teacher", "delete-resource-group-resource", "sr1"],
                "teacher_delete_resource_group_resource_command",
            ),
            (["teacher", "leave-resource-group", "rg1"], "teacher_leave_resource_group_command"),
            (["teacher", "save-shared-resource", "sr1"], "teacher_save_shared_resource_command"),
            (
                ["teacher", "batch-save-shared-resources", "--resource-ids", "sr1,sr2"],
                "teacher_batch_save_shared_resources_command",
            ),
            (
                ["teacher", "set-shared-resource-collection", "sr1", "u1"],
                "teacher_set_shared_resource_collection_command",
            ),
            (
                ["teacher", "unset-shared-resource-collection", "sr1", "u1"],
                "teacher_unset_shared_resource_collection_command",
            ),
            (
                ["teacher", "publish-shared-resource", "--payload-json", "{}"],
                "teacher_publish_shared_resource_command",
            ),
            (["teacher", "delete-shared-resource", "sr1"], "teacher_delete_shared_resource_command"),
            (["teacher", "delete-shared-resource-to", "sr1"], "teacher_delete_shared_resource_to_command"),
            (
                ["teacher", "add-shared-resource-comment", "sr1", "--payload-json", "{}"],
                "teacher_add_shared_resource_comment_command",
            ),
            (
                ["teacher", "delete-shared-resource-comment", "comment1"],
                "teacher_delete_shared_resource_comment_command",
            ),
            (["teacher", "create-entry", "--payload-json", "{}"], "teacher_create_entry_command"),
            (["teacher", "update-entry", "entry1", "--payload-json", "{}"], "teacher_update_entry_command"),
            (["teacher", "delete-entry", "entry1"], "teacher_delete_entry_command"),
            (
                ["teacher", "batch-delete-entries", "--entry-ids", "entry1,entry2"],
                "teacher_batch_delete_entries_command",
            ),
            (["teacher", "update-slide", "slide1", "--payload-json", "{}"], "teacher_update_slide_command"),
            (["teacher", "export-slide", "slide1"], "teacher_export_slide_command"),
            (["teacher", "delete-slide", "slide1"], "teacher_delete_slide_command"),
            (
                ["teacher", "batch-delete-slides", "--slide-ids", "slide1,slide2"],
                "teacher_batch_delete_slides_command",
            ),
            (
                ["teacher", "update-slide-video-info", "slide1", "--payload-json", "{}"],
                "teacher_update_slide_video_info_command",
            ),
            (["teacher", "delete-slide-record", "record1"], "teacher_delete_slide_record_command"),
            (
                ["teacher", "create-course-package", "--payload-json", "{}"],
                "teacher_create_course_package_command",
            ),
            (
                ["teacher", "export-course-package", "--payload-json", "{}"],
                "teacher_export_course_package_command",
            ),
            (
                ["teacher", "update-course-package", "cp1", "--payload-json", "{}"],
                "teacher_update_course_package_command",
            ),
            (["teacher", "delete-course-package", "cp1"], "teacher_delete_course_package_command"),
            (["teacher", "save-course-package", "cp1"], "teacher_save_course_package_command"),
            (
                ["teacher", "import-course-package", "cp1", "--payload-json", "{}"],
                "teacher_import_course_package_command",
            ),
            (
                ["teacher", "create-courseware-quiz-subjects", "77", "--payload-json", "{}"],
                "teacher_create_courseware_quiz_subjects_command",
            ),
            (
                ["teacher", "update-courseware-quiz-subjects", "cwq1", "--payload-json", "{}"],
                "teacher_update_courseware_quiz_subjects_command",
            ),
            (
                ["teacher", "generate-courseware-quiz-subjects", "--payload-json", "{}"],
                "teacher_generate_courseware_quiz_subjects_command",
            ),
            (
                ["teacher", "generate-courseware-quiz-subjects-by-text", "--payload-json", "{}"],
                "teacher_generate_courseware_quiz_subjects_by_text_command",
            ),
            (
                ["teacher", "format-courseware-quiz-question", "--payload-json", "{}"],
                "teacher_format_courseware_quiz_question_command",
            ),
            (
                ["teacher", "copy-subject-libs-to-courseware-quiz", "cwq1", "--payload-json", "{}"],
                "teacher_copy_subject_libs_to_courseware_quiz_command",
            ),
            (
                ["teacher", "create-questionnaire-subject", "q1", "--payload-json", "{}"],
                "teacher_create_questionnaire_subject_command",
            ),
            (
                ["teacher", "update-questionnaire-subject", "q1", "qs1", "--payload-json", "{}"],
                "teacher_update_questionnaire_subject_command",
            ),
            (
                ["teacher", "delete-questionnaire-subject", "q1", "qs1"],
                "teacher_delete_questionnaire_subject_command",
            ),
            (
                ["teacher", "import-questionnaire-subjects", "q1", "--payload-json", "{}"],
                "teacher_import_questionnaire_subjects_command",
            ),
            (
                ["teacher", "import-questionnaire-campus-subjects", "q1", "--payload-json", "{}"],
                "teacher_import_questionnaire_campus_subjects_command",
            ),
            (
                ["teacher", "create-course-estimate", "--payload-json", "{}"],
                "teacher_create_course_estimate_command",
            ),
            (
                ["teacher", "update-course-estimate", "ce1", "--payload-json", "{}"],
                "teacher_update_course_estimate_command",
            ),
            (["teacher", "delete-course-estimate", "ce1"], "teacher_delete_course_estimate_command"),
            (
                ["teacher", "create-course-estimate-reply", "--payload-json", "{}"],
                "teacher_create_course_estimate_reply_command",
            ),
            (
                ["teacher", "delete-course-estimate-reply", "cer1"],
                "teacher_delete_course_estimate_reply_command",
            ),
            (["teacher", "create-activity", "--payload-json", "{}"], "teacher_create_activity_command"),
            (["teacher", "update-activity", "77", "--payload-json", "{}"], "teacher_update_activity_command"),
            (["teacher", "delete-activity", "77"], "teacher_delete_activity_command"),
            (
                ["teacher", "publish-activities", "--activity-keys", "homework-77", "--published", "true"],
                "teacher_publish_activities_command",
            ),
            (["teacher", "save-activity-resource", "r1"], "teacher_save_activity_resource_command"),
            (
                ["teacher", "log-activity-read", "77", "--payload-json", "{}"],
                "teacher_log_activity_read_command",
            ),
            (
                ["teacher", "log-exam-activity-read", "1", "--payload-json", "{}"],
                "teacher_log_exam_activity_read_command",
            ),
            (
                ["teacher", "update-activity-resource", "77", "r1", "--payload-json", "{}"],
                "teacher_update_activity_resource_command",
            ),
            (
                ["teacher", "delete-activity-resource", "77", "r1"],
                "teacher_delete_activity_resource_command",
            ),
            (
                ["teacher", "add-activity-comment", "77", "--payload-json", "{}"],
                "teacher_add_activity_comment_command",
            ),
            (
                ["teacher", "update-activity-comment", "77", "c1", "--payload-json", "{}"],
                "teacher_update_activity_comment_command",
            ),
            (
                ["teacher", "delete-activity-comment", "77", "c1"],
                "teacher_delete_activity_comment_command",
            ),
            (
                ["teacher", "reply-activity-comment", "77", "c1", "--payload-json", "{}"],
                "teacher_reply_activity_comment_command",
            ),
            (
                ["teacher", "update-activity-comment-reply", "77", "r1", "--payload-json", "{}"],
                "teacher_update_activity_comment_reply_command",
            ),
            (
                ["teacher", "delete-activity-comment-reply", "77", "r1"],
                "teacher_delete_activity_comment_reply_command",
            ),
            (
                ["teacher", "operate-activity-comments", "77", "--payload-json", "{}"],
                "teacher_operate_activity_comments_command",
            ),
            (["teacher", "grade-rollcalls", "--rollcall-ids", "42"], "teacher_grade_rollcalls_command"),
            (["teacher", "recommend-submissions", "--submission-ids", "9"], "teacher_recommend_submissions_command"),
            (["teacher", "cancel-recommend-submission", "9"], "teacher_cancel_recommend_submission_command"),
            (
                ["teacher", "update-forum-status", "77", "--enable", "false"],
                "teacher_update_forum_status_command",
            ),
            (["teacher", "delete-exams", "--exam-ids", "1"], "teacher_delete_exams_command"),
            (["teacher", "classroom", "c1"], "teacher_classroom_command"),
            (["teacher", "questionnaire", "q1"], "teacher_questionnaire_command"),
            (["teacher", "create-classroom-exam", "--payload-json", "{}"], "teacher_create_classroom_exam_command"),
            (["teacher", "update-classroom-exam", "c1", "--payload-json", "{}"], "teacher_update_classroom_exam_command"),
            (["teacher", "delete-classroom", "c1"], "teacher_delete_classroom_command"),
            (["teacher", "update-classroom-status", "c1", "--payload-json", "{}"], "teacher_update_classroom_status_command"),
            (
                ["teacher", "update-classroom-subject-status", "c1", "sub1", "--payload-json", "{}"],
                "teacher_update_classroom_subject_status_command",
            ),
            (["teacher", "save-classroom-subjects", "c1", "--payload-json", "{}"], "teacher_save_classroom_subjects_command"),
            (
                ["teacher", "delete-classroom-subjects", "c1", "--subject-ids", "sub1"],
                "teacher_delete_classroom_subjects_command",
            ),
            (["teacher", "score-classroom", "--payload-json", "{}"], "teacher_score_classroom_command"),
        ]

        for argv, command_name in cases:
            with self.subTest(command=argv[1]):
                with (
                    patch.object(tron, "bootstrap_config"),
                    patch.object(tron.asyncio, "run", side_effect=fake_run) as asyncio_run,
                    patch.object(tron, command_name, AsyncMock(return_value=0)) as command,
                ):
                    result = tron.main(argv)

                self.assertEqual(result, 0)
                asyncio_run.assert_called_once()
                command.assert_called_once()

    def test_package_check_json_command_dispatches(self) -> None:
        outputs = []
        with patch.object(tron, "bootstrap_config"), patch("builtins.print", side_effect=outputs.append):
            result = tron.main(["package-check", "--json"])

        self.assertIn(result, {0, 1})
        payload = json.loads(outputs[0])
        self.assertIn("pyproject", payload)
        self.assertIn("pyinstaller", payload)

    def test_provider_list_json_command_dispatches(self) -> None:
        outputs = []
        with patch.object(tron, "bootstrap_config"), patch("builtins.print", side_effect=outputs.append):
            result = tron.main(["provider", "list", "--json"])

        self.assertEqual(result, 0)
        payload = json.loads(outputs[0])
        self.assertEqual({item["key"] for item in payload["providers"]}, {"thu", "tku", "tronclass"})
        self.assertFalse(payload["include_hidden"])

    def test_provider_list_all_json_includes_hidden_fju(self) -> None:
        outputs = []
        with patch.object(tron, "bootstrap_config"), patch("builtins.print", side_effect=outputs.append):
            result = tron.main(["provider", "list", "--all", "--json"])

        self.assertEqual(result, 0)
        payload = json.loads(outputs[0])
        providers = {item["key"]: item for item in payload["providers"]}
        self.assertEqual(set(providers), {"thu", "fju", "tku", "tronclass"})
        self.assertFalse(providers["fju"]["user_visible"])
        self.assertTrue(providers["fju"]["capabilities"]["radar"])
        self.assertTrue(providers["tronclass"]["user_visible"])
        self.assertEqual(providers["tronclass"]["verification"], "verified")

    def test_provider_show_json_command_dispatches(self) -> None:
        outputs = []
        with patch.object(tron, "bootstrap_config"), patch("builtins.print", side_effect=outputs.append):
            result = tron.main(["provider", "show", "fju", "--json"])

        self.assertEqual(result, 0)
        payload = json.loads(outputs[0])
        self.assertEqual(payload["key"], "fju")
        self.assertEqual(payload["auth_flow"], "manual_cookie_only")
        self.assertFalse(payload["user_visible"])
        self.assertTrue(payload["capabilities"]["radar"])
        self.assertEqual(payload["support"]["support_level"], "ready")
        self.assertTrue(payload["support"]["daily_ready"])
        self.assertEqual(payload["verification"]["status"], "unverified")
        self.assertEqual(payload["internal"]["verification"]["verification"], "unverified")
        self.assertEqual(payload["ready_gate"]["status"], "blocked")

    def test_provider_verify_checklist_and_fixture_template_dispatch(self) -> None:
        outputs = []
        with patch.object(tron, "bootstrap_config"), patch("builtins.print", side_effect=outputs.append):
            checklist_result = tron.main(["provider", "verify-checklist", "fju", "--json"])
            template_result = tron.main(["provider", "fixture", "template", "tku", "--json"])

        self.assertEqual(checklist_result, 0)
        self.assertEqual(template_result, 0)
        checklist = json.loads(outputs[0])
        template = json.loads(outputs[1])
        self.assertEqual(checklist["provider"], "fju")
        self.assertEqual(template["provider"], "tku")
        self.assertEqual(template["version"], "provider-fixture-v1")

    def test_provider_fixture_validate_dispatches(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            path = Path(temp_dir) / "fixture.json"
            fixture = {
                "version": "provider-fixture-v1",
                "provider": "fju",
                "records": [
                    {"endpoint_type": endpoint, "status": "ok", "http_status": 200, "field_names": ["id"]}
                    for endpoint in ("login", "session", "current_semester", "courses", "rollcalls", "qr", "radar")
                ],
            }
            path.write_text(json.dumps(fixture), encoding="utf-8")
            outputs = []
            with patch.object(tron, "bootstrap_config"), patch("builtins.print", side_effect=outputs.append):
                result = tron.main(["provider", "fixture", "validate", "--input", str(path), "--provider", "fju", "--json"])

        self.assertEqual(result, 0)
        payload = json.loads(outputs[0])
        self.assertTrue(payload["ok"])

    def test_provider_fixture_review_commands_dispatch(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            path = Path(temp_dir) / "fixture.json"
            fixture = {
                "version": "provider-fixture-v1",
                "provider": "fju",
                "records": [
                    {"endpoint_type": endpoint, "status": "ok", "http_status": 200, "field_names": ["id"]}
                    for endpoint in ("login", "session", "current_semester", "courses", "rollcalls", "qr")
                ]
                + [{"endpoint_type": "radar", "status": "unsupported", "http_status": 0, "field_names": []}],
                "manual_acceptance": {
                    "login_verified": True,
                    "session_verified": True,
                    "courses_verified": True,
                    "rollcalls_verified": True,
                    "qr_verified": True,
                    "radar_verified": False,
                },
            }
            path.write_text(json.dumps(fixture), encoding="utf-8")
            outputs = []
            with patch.object(tron, "bootstrap_config"), patch("builtins.print", side_effect=outputs.append):
                template_result = tron.main(["provider", "fixture", "review-template", "fju", "--json"])
                review_result = tron.main(["provider", "fixture", "review", "--input", str(path), "--provider", "fju", "--json"])
                dir_result = tron.main(["provider", "fixture", "review-dir", "--dir", temp_dir, "--json"])

        self.assertEqual(template_result, 0)
        self.assertEqual(review_result, 0)
        self.assertEqual(dir_result, 0)
        self.assertEqual(json.loads(outputs[0])["review_version"], "provider-fixture-review-v1")
        self.assertEqual(json.loads(outputs[1])["status"], "candidate_ready_for_human_review")
        self.assertEqual(json.loads(outputs[2])["count"], 1)

    def test_provider_ready_gate_dispatches(self) -> None:
        outputs = []
        with patch.object(tron, "bootstrap_config"), patch("builtins.print", side_effect=outputs.append):
            result = tron.main(["provider", "ready-gate", "fju", "--json"])

        self.assertEqual(result, 1)
        payload = json.loads(outputs[0])
        self.assertEqual(payload["provider"], "fju")
        self.assertEqual(payload["status"], "blocked")
        self.assertFalse(payload["promotes_provider"])

    def test_release_check_json_command_dispatches(self) -> None:
        outputs = []
        with patch.object(tron, "bootstrap_config"), patch("builtins.print", side_effect=outputs.append):
            result = tron.main(["release-check", "--json"])

        self.assertIn(result, {0, 1})
        payload = json.loads(outputs[0])
        self.assertIn("package", payload)
        self.assertIn("ci", payload)
        self.assertIn("artifact", payload)
        self.assertIn("build_plan", payload)

    def test_release_check_plan_json_command_dispatches(self) -> None:
        outputs = []
        with patch.object(tron, "bootstrap_config"), patch("builtins.print", side_effect=outputs.append):
            result = tron.main(["release-check", "--plan", "--json"])

        self.assertIn(result, {0, 1})
        payload = json.loads(outputs[0])
        self.assertIn("release", payload)
        self.assertIn("build_plan", payload)
        self.assertFalse(payload["build_plan"]["executes_build"])

    def test_release_build_dry_run_json_command_dispatches(self) -> None:
        outputs = []
        with patch.object(tron, "bootstrap_config"), patch("builtins.print", side_effect=outputs.append):
            result = tron.main(["release-build", "--dry-run", "--json"])

        self.assertEqual(result, 0)
        payload = json.loads(outputs[0])
        self.assertEqual(payload["version"], "release-build-v1")
        self.assertFalse(payload["execute"])
        self.assertIn("preflight", payload)
        self.assertIn(EXPECTED_WINDOWS_ZIP, payload["artifact"]["name"])

    def test_release_build_execute_json_command_dispatches_with_fake_runner(self) -> None:
        outputs = []
        fake_report = {
            "version": "release-build-v1",
            "execute": True,
            "status": "ok",
            "artifact": {"name": EXPECTED_WINDOWS_ZIP, "sha256_short": "abc123"},
            "steps": [],
            "smoke": {"status": "ok"},
        }
        with (
            patch.object(tron, "bootstrap_config"),
            patch.object(tron, "run_release_build_pipeline", return_value=fake_report) as runner,
            patch("builtins.print", side_effect=outputs.append),
        ):
            result = tron.main(["release-build", "--execute", "--dist", "dist", "--work", "build/release", "--json"])

        self.assertEqual(result, 0)
        runner.assert_called_once()
        payload = json.loads(outputs[0])
        self.assertEqual(payload["status"], "ok")
        self.assertEqual(payload["smoke"]["status"], "ok")

    def test_validation_checklist_json_command_dispatches(self) -> None:
        outputs = []
        with patch.object(tron, "bootstrap_config"), patch("builtins.print", side_effect=outputs.append):
            result = tron.main(["validation", "checklist", "--json"])

        self.assertEqual(result, 0)
        payload = json.loads(outputs[0])
        self.assertEqual(payload["version"], "real-validation-v1")
        self.assertIn("cases", payload)
        self.assertEqual(payload["provider_scope"]["fju"]["support_level"], "ready")
        self.assertEqual(payload["provider_scope"]["fju"]["verification"], "unverified")

    def test_validation_record_and_summary_json_commands_dispatch(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            outputs = []
            with (
                patch.object(tron, "BASE_DIR", Path(temp_dir)),
                patch.object(tron, "bootstrap_config"),
                patch("builtins.print", side_effect=outputs.append),
            ):
                record_result = tron.main(
                    [
                        "validation",
                        "record",
                        "preflight_status_doctor_dashboard",
                        "--status",
                        "pass",
                        "--note",
                        "ok",
                        "--json",
                    ]
                )
                summary_result = tron.main(["validation", "summary", "--json"])

        self.assertEqual(record_result, 0)
        self.assertEqual(summary_result, 1)
        record = json.loads(outputs[0])
        summary = json.loads(outputs[1])
        self.assertEqual(record["case_id"], "preflight_status_doctor_dashboard")
        self.assertEqual(summary["record_count"], 1)
        self.assertIn("auth_restore", summary["required"]["missing"])

    def test_validation_local_smoke_json_command_dispatches_without_network(self) -> None:
        outputs = []
        with patch.object(tron, "bootstrap_config"), patch("builtins.print", side_effect=outputs.append):
            result = tron.main(["validation", "local-smoke", "--json"])

        self.assertEqual(result, 0)
        payload = json.loads(outputs[0])
        self.assertEqual(payload["version"], "real-validation-v1")
        self.assertIn("bot_sandbox", payload["checks"])
        self.assertEqual(payload["checks"]["bot_sandbox"], "ok")

    def test_run_allows_fju_provider_without_experimental_flag(self) -> None:
        tron.CONFIG.clear()
        tron.CONFIG.update(
            tron.normalize_config(
                {
                    "account": {"user": "u1", "passwd": ""},
                    "provider": {"current": "fju"},
                }
            )
        )
        with (
            patch.object(tron, "bootstrap_config"),
            patch.object(tron, "ensure_config_now_or_open_editor", return_value={"ok": True}),
            patch.object(tron.time, "sleep"),
            patch.object(tron, "app_main", new=AsyncMock()) as app_main,
            patch("builtins.print"),
        ):
            result = tron.main(["run"])

        self.assertEqual(result, 0)
        app_main.assert_called_once()

    def test_app_blueprint_text_command_dispatches(self) -> None:
        outputs = []
        with patch.object(tron, "bootstrap_config"), patch("builtins.print", side_effect=outputs.append):
            result = tron.main(["app", "blueprint"])

        self.assertEqual(result, 0)
        self.assertIn("optional localhost shell core available", outputs[0])

    def test_app_blueprint_json_command_dispatches(self) -> None:
        outputs = []
        with patch.object(tron, "bootstrap_config"), patch("builtins.print", side_effect=outputs.append):
            result = tron.main(["app", "blueprint", "--json"])

        self.assertEqual(result, 0)
        payload = json.loads(outputs[0])
        self.assertEqual(payload["version"], "app-blueprint-v1")
        self.assertEqual(payload["primary_operation"], "CLI + Bot + local scanner")
        self.assertIn("screens", payload)
        self.assertIn("api_contract", payload)
        self.assertTrue(payload["validation"]["ok"])

    def test_app_serve_command_dispatches_without_running_server(self) -> None:
        def fake_run(coro):
            coro.close()
            return 0

        with (
            patch.object(tron, "bootstrap_config"),
            patch.object(tron.asyncio, "run", side_effect=fake_run) as asyncio_run,
        ):
            result = tron.main(["app", "serve", "--port", "9999", "--json"])

        self.assertEqual(result, 0)
        asyncio_run.assert_called_once()

    def test_webview_status_json_command_dispatches_without_network(self) -> None:
        outputs = []
        tron.CONFIG.update(tron.normalize_config({}))
        with patch.object(tron, "bootstrap_config"), patch("builtins.print", side_effect=outputs.append):
            result = tron.main(["webview", "status", "--json"])

        self.assertEqual(result, 0)
        payload = json.loads(outputs[0])
        self.assertEqual(payload["provider"], "thu")
        self.assertFalse(payload["can_import"])

    def test_webview_preview_json_command_is_safe(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            path = Path(temp_dir) / "cookies.json"
            path.write_text(
                json.dumps(
                    [
                        {
                            "name": "session",
                            "value": "secret-session",
                            "domain": "ilearn.thu.edu.tw",
                            "path": "/",
                        }
                    ]
                ),
                encoding="utf-8",
            )
            outputs = []
            tron.CONFIG.update(tron.normalize_config({}))
            with patch.object(tron, "bootstrap_config"), patch("builtins.print", side_effect=outputs.append):
                result = tron.main(["webview", "preview", "--input", str(path), "--json"])

        self.assertEqual(result, 0)
        payload = json.loads(outputs[0])
        self.assertEqual(payload["accepted_count"], 1)
        self.assertNotIn("secret-session", outputs[0])

    def test_webview_import_save_gate_off_rejects(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            path = Path(temp_dir) / "cookies.json"
            path.write_text(
                json.dumps(
                    [{"name": "session", "value": "secret-session", "domain": "ilearn.thu.edu.tw"}]
                ),
                encoding="utf-8",
            )
            outputs = []
            tron.CONFIG.update(tron.normalize_config({}))
            with patch.object(tron, "bootstrap_config"), patch("builtins.print", side_effect=outputs.append):
                result = tron.main(["webview", "import", "--input", str(path), "--save", "--json"])

        self.assertEqual(result, 1)
        payload = json.loads(outputs[0])
        self.assertEqual(payload["reason"], "webview_cookie_sync_disabled")
        self.assertNotIn("secret-session", outputs[0])

    def test_webview_import_save_writes_cookie_cache_when_gated(self) -> None:
        original_base_dir = tron.BASE_DIR
        try:
            with tempfile.TemporaryDirectory() as temp_dir:
                base = Path(temp_dir)
                input_path = base / "cookies.json"
                input_path.write_text(
                    json.dumps(
                        [{"name": "session", "value": "secret-session", "domain": "ilearn.thu.edu.tw"}]
                    ),
                    encoding="utf-8",
                )
                tron.BASE_DIR = base
                tron.CONFIG.clear()
                tron.CONFIG.update(
                    tron.normalize_config(
                        {
                            "account": {"user": "u1", "passwd": ""},
                            "accounts": {
                                "current": "default",
                                "profiles": {"default": {"user": "u1", "passwd": "", "label": ""}},
                            },
                            "webview": {
                                "cookie_sync": {
                                    "enabled": True,
                                    "allow_cookie_import": True,
                                }
                            },
                        }
                    )
                )
                outputs = []
                with patch.object(tron, "bootstrap_config"), patch("builtins.print", side_effect=outputs.append):
                    result = tron.main(
                        ["webview", "import", "--input", str(input_path), "--profile", "default", "--save", "--json"]
                    )
                cookie_cache = base / "state" / "cookies" / "default.json"
                stored = json.loads(cookie_cache.read_text(encoding="utf-8"))
        finally:
            tron.BASE_DIR = original_base_dir

        self.assertEqual(result, 0)
        payload = json.loads(outputs[0])
        self.assertTrue(payload["saved"])
        self.assertEqual(stored[0]["value"], "secret-session")
        self.assertNotIn("secret-session", outputs[0])

    def test_account_bind_accepts_telegram_adapter(self) -> None:
        tron.CONFIG.update(
            tron.normalize_config(
                {
                    "account": {"user": "u1", "passwd": ""},
                    "accounts": {
                        "current": "default",
                        "profiles": {"default": {"user": "u1", "passwd": "", "label": ""}},
                    },
                }
            )
        )
        with (
            patch.object(tron, "bootstrap_config"),
            patch.object(tron, "save_config", return_value=True),
            patch("builtins.print"),
        ):
            result = tron.main(["account", "bind", "telegram", "telegram-chat", "default"])

        self.assertEqual(result, 0)
        self.assertIn("telegram:telegram-chat", tron.CONFIG["integrations"]["bindings"])


class TronBotServeCommandTest(unittest.IsolatedAsyncioTestCase):
    async def test_app_serve_json_uses_local_shell_runner_without_token_output(self) -> None:
        outputs = []
        seen = {}

        async def fake_run_app_shell(_config, **kwargs):
            seen.update(kwargs)

        with (
            patch.object(tron, "run_app_shell", new=fake_run_app_shell),
            patch("builtins.print", side_effect=outputs.append),
        ):
            result = await tron.app_serve_command(
                SimpleNamespace(host="127.0.0.1", port=8790, open=False, ttl_seconds=120, json=True)
            )

        self.assertEqual(result, 0)
        self.assertEqual(seen["host"], "127.0.0.1")
        self.assertEqual(seen["port"], 8790)
        self.assertEqual(seen["token_ttl_seconds"], 120)
        payload = json.loads(outputs[0])
        self.assertEqual(payload["url"], "http://127.0.0.1:8790/app")
        self.assertNotIn("token", outputs[0].replace("token_ttl_seconds", ""))
        self.assertIn("shell_ui_builder", seen)
        self.assertIn("validation_summary_builder", seen)

    async def test_discord_sync_and_gateway_dry_run_dispatch(self) -> None:
        outputs = []
        with patch.object(tron, "bootstrap_config"), patch("builtins.print", side_effect=outputs.append):
            sync_result = await tron.bot_discord_sync_command(SimpleNamespace(apply=False, dry_run=True, json=True))
            gateway_result = await tron.bot_discord_gateway_command(SimpleNamespace(dry_run=True, json=True))

        self.assertEqual(sync_result, 0)
        self.assertEqual(gateway_result, 0)
        self.assertEqual(json.loads(outputs[0])["status"], "dry_run")
        self.assertTrue(json.loads(outputs[1])["gateway_optional"])

    async def test_bot_serve_registers_line_sink_and_restores_existing_sinks(self) -> None:
        original_config = copy.deepcopy(tron.CONFIG)
        original_sinks = list(tron.NOTIFICATION_SINKS)
        seen_sinks = []

        async def fake_run_adapter_server(_config, _runtime, **_kwargs):
            seen_sinks.append(list(tron.NOTIFICATION_SINKS))

        try:
            tron.CONFIG.clear()
            tron.CONFIG.update(tron.normalize_config({"integrations": {"line": {}}}))
            with (
                patch.dict("os.environ", {"LINE_CHANNEL_ACCESS_TOKEN": "line-token"}, clear=False),
                patch("troTHU.adapter_server.run_adapter_server", new=fake_run_adapter_server),
                patch("troTHU.bot_handlers.create_bot_runtime", return_value=object()),
                patch("builtins.print"),
            ):
                result = await tron.bot_serve_command(
                    SimpleNamespace(host="127.0.0.1", port=8787, adapter="line", json=True)
                )
        finally:
            tron.CONFIG.clear()
            tron.CONFIG.update(original_config)
            tron.set_notification_sinks(original_sinks)

        self.assertEqual(result, 0)
        self.assertEqual(len(seen_sinks), 1)
        self.assertEqual(len(seen_sinks[0]), len(original_sinks) + 1)
        self.assertEqual(tron.NOTIFICATION_SINKS, original_sinks)

    async def test_bot_serve_registers_discord_sink_and_restores_existing_sinks(self) -> None:
        original_config = copy.deepcopy(tron.CONFIG)
        original_sinks = list(tron.NOTIFICATION_SINKS)
        seen_sinks = []

        async def fake_run_adapter_server(_config, _runtime, **_kwargs):
            seen_sinks.append(list(tron.NOTIFICATION_SINKS))

        try:
            tron.CONFIG.clear()
            tron.CONFIG.update(tron.normalize_config({"integrations": {"discord": {}}}))
            with (
                patch.dict("os.environ", {"DISCORD_BOT_TOKEN": "discord-token"}, clear=False),
                patch("troTHU.adapter_server.run_adapter_server", new=fake_run_adapter_server),
                patch("troTHU.bot_handlers.create_bot_runtime", return_value=object()),
                patch("builtins.print"),
            ):
                result = await tron.bot_serve_command(
                    SimpleNamespace(host="127.0.0.1", port=8787, adapter="discord", json=True)
                )
        finally:
            tron.CONFIG.clear()
            tron.CONFIG.update(original_config)
            tron.set_notification_sinks(original_sinks)

        self.assertEqual(result, 0)
        self.assertEqual(len(seen_sinks), 1)
        self.assertEqual(len(seen_sinks[0]), len(original_sinks) + 1)
        self.assertEqual(tron.NOTIFICATION_SINKS, original_sinks)

    async def test_bot_serve_all_registers_telegram_sink_and_restores_existing_sinks(self) -> None:
        original_config = copy.deepcopy(tron.CONFIG)
        original_sinks = list(tron.NOTIFICATION_SINKS)
        seen_sinks = []

        async def fake_run_adapter_server(_config, _runtime, **_kwargs):
            seen_sinks.append(list(tron.NOTIFICATION_SINKS))

        try:
            tron.CONFIG.clear()
            tron.CONFIG.update(tron.normalize_config({"integrations": {"telegram": {}}}))
            with (
                patch.dict("os.environ", {"TELEGRAM_BOT_TOKEN": "telegram-token"}, clear=False),
                patch("troTHU.adapter_server.run_adapter_server", new=fake_run_adapter_server),
                patch("troTHU.bot_handlers.create_bot_runtime", return_value=object()),
                patch("builtins.print"),
            ):
                result = await tron.bot_serve_command(
                    SimpleNamespace(host="127.0.0.1", port=8787, adapter="all", json=True)
                )
        finally:
            tron.CONFIG.clear()
            tron.CONFIG.update(original_config)
            tron.set_notification_sinks(original_sinks)

        self.assertEqual(result, 0)
        self.assertEqual(len(seen_sinks), 1)
        self.assertGreaterEqual(len(seen_sinks[0]), len(original_sinks) + 1)
        self.assertEqual(tron.NOTIFICATION_SINKS, original_sinks)

    def test_bot_serve_command_dispatches_without_running_server(self) -> None:
        def fake_run(coro):
            coro.close()
            return 0

        with (
            patch.object(tron, "bootstrap_config"),
            patch.object(tron.asyncio, "run", side_effect=fake_run) as asyncio_run,
        ):
            result = tron.main(["bot", "serve", "--port", "9999", "--adapter", "generic"])

        self.assertEqual(result, 0)
        asyncio_run.assert_called_once()

    def test_discord_schema_command_dispatches(self) -> None:
        with (
            patch.object(tron, "bootstrap_config"),
            patch("builtins.print") as print_mock,
        ):
            result = tron.main(["bot", "discord-schema", "--json"])

        self.assertEqual(result, 0)
        schema = json.loads(print_mock.call_args.args[0])
        self.assertEqual(schema["name"], "tron")
        self.assertIn("qr_all", {option["name"] for option in schema["options"]})

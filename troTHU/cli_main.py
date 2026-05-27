from __future__ import annotations

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore


def __getattr__(name: str):
    return getattr(ctx, name)



def main(argv: ctx.Optional[ctx.List[str]]=None) -> int:
    argv = list(ctx.sys.argv[1:] if argv is None else argv)
    if not argv:
        return ctx.run_monitor_forever(no_input=False)
    parser = ctx.build_arg_parser()
    args, unknown_args = parser.parse_known_args(argv)
    if unknown_args:
        if args.command == 'qr':
            args.qr_args = list(args.qr_args or []) + unknown_args
        else:
            parser.error('unrecognized arguments: {}'.format(' '.join(unknown_args)))
    if args.command in (None, 'run'):
        return ctx.run_monitor_forever(no_input=bool(getattr(args, 'no_input', False)))
    ctx.bootstrap_config()
    if args.command == 'init':
        return ctx.init_command(args)
    if args.command == 'account':
        return ctx.handle_account_command(args)
    if args.command == 'logs':
        return ctx.logs_command(args)
    if args.command == 'bot':
        if getattr(args, 'bot_command', None) == 'serve':
            try:
                return ctx.asyncio.run(ctx.bot_serve_command(args))
            except Exception as exc:
                print('Bot adapter server failed: {}'.format(exc))
                return 1
        if getattr(args, 'bot_command', None) == 'discord-schema':
            return ctx.bot_discord_schema_command(args)
        if getattr(args, 'bot_command', None) == 'discord-sync':
            try:
                return ctx.asyncio.run(ctx.bot_discord_sync_command(args))
            except Exception as exc:
                if getattr(args, 'json', False):
                    print(ctx.json_text({'status': 'failed', 'message': str(exc)}))
                else:
                    print('Discord command sync failed: {}'.format(exc))
                return 1
        if getattr(args, 'bot_command', None) == 'discord-gateway':
            try:
                return ctx.asyncio.run(ctx.bot_discord_gateway_command(args))
            except Exception as exc:
                if getattr(args, 'json', False):
                    print(ctx.json_text({'status': 'failed', 'message': str(exc)}))
                else:
                    print('Discord Gateway failed: {}'.format(exc))
                return 1
        parser.print_help()
        return 1
    if args.command == 'dashboard':
        return ctx.dashboard_command(args)
    if args.command == 'refresh':
        active = ctx.get_active_profile(ctx.CONFIG)
        removed = ctx.clear_session_cookies(ctx.BASE_DIR, active.name)
        print('Deleted cookie cache for {}.'.format(active.name) if removed else 'No cookie cache found for {}.'.format(active.name))
        return 0
    if args.command == 'status':
        ctx.print_status(json_output=args.json)
        return 0
    if args.command == 'doctor':
        return ctx.doctor(
            json_output=args.json,
            probe_url=getattr(args, 'probe_url', ''),
            probe_count=getattr(args, 'probe_count', 3),
            probe_concurrency=getattr(args, 'probe_concurrency', 1),
        )
    if args.command == 'config':
        command = getattr(args, 'config_command', None) or 'show'
        if command == 'show':
            return ctx.config_show_command(json_output=getattr(args, 'json', False))
        if command == 'compact':
            return ctx.config_compact_command(args)
        if command == 'doctor':
            return ctx.config_doctor_command(json_output=getattr(args, 'json', False))
        if command == 'advanced':
            return ctx.config_advanced_command(json_output=getattr(args, 'json', False))
        parser.print_help()
        return 1
    if args.command == 'package-check':
        return ctx.package_check(json_output=args.json)
    if args.command == 'release-check':
        return ctx.release_check_command(args)
    if args.command == 'release-build':
        return ctx.release_build_command(args)
    if args.command == 'validation':
        validation_command = getattr(args, 'validation_command', None) or 'checklist'
        if validation_command == 'checklist':
            return ctx.validation_checklist_command(json_output=getattr(args, 'json', False))
        if validation_command == 'record':
            return ctx.validation_record_command(args)
        if validation_command == 'summary':
            return ctx.validation_summary_command(json_output=getattr(args, 'json', False))
        if validation_command == 'local-smoke':
            return ctx.validation_local_smoke_command(
                json_output=getattr(args, 'json', False),
                record=getattr(args, 'record', False),
            )
        parser.print_help()
        return 1
    if args.command == 'provider':
        provider_command = getattr(args, 'provider_command', None) or 'list'
        if provider_command == 'list':
            return ctx.provider_list_command(
                json_output=getattr(args, 'json', False),
                include_hidden=getattr(args, 'all', False),
            )
        if provider_command == 'show':
            return ctx.provider_show_command(getattr(args, 'name', ''), json_output=getattr(args, 'json', False))
        if provider_command == 'verify-checklist':
            return ctx.provider_verify_checklist_command(args)
        if provider_command == 'ready-gate':
            return ctx.provider_ready_gate_command(args)
        if provider_command == 'fixture':
            fixture_command = getattr(args, 'provider_fixture_command', None) or 'template'
            if fixture_command == 'template':
                return ctx.provider_fixture_template_command(args)
            if fixture_command == 'validate':
                return ctx.provider_fixture_validate_command(args)
            if fixture_command == 'review-template':
                return ctx.provider_fixture_review_template_command(args)
            if fixture_command == 'review':
                return ctx.provider_fixture_review_command(args)
            if fixture_command == 'review-dir':
                return ctx.provider_fixture_review_dir_command(args)
        parser.print_help()
        return 1
    if args.command == 'app':
        if getattr(args, 'app_command', None) == 'blueprint':
            return ctx.app_blueprint_command(json_output=args.json)
        if getattr(args, 'app_command', None) == 'serve':
            try:
                return ctx.asyncio.run(ctx.app_serve_command(args))
            except Exception as exc:
                print('App shell failed: {}'.format(exc))
                return 1
        parser.print_help()
        return 1
    if args.command == 'webview':
        webview_command = getattr(args, 'webview_command', None) or 'status'
        if webview_command == 'status':
            return ctx.webview_status_command(json_output=getattr(args, 'json', False))
        if webview_command == 'preview':
            return ctx.webview_preview_command(args)
        if webview_command == 'import':
            return ctx.webview_import_command(args)
        parser.print_help()
        return 1
    if args.command == 'courses':
        try:
            return ctx.asyncio.run(ctx.courses_command(json_output=args.json))
        except Exception as exc:
            if args.json:
                print(ctx.json_text({'status': 'unexpected_response', 'message': str(exc)}))
            else:
                print('Course discovery failed: {}'.format(exc))
            return 1
    if args.command == 'teacher':
        teacher_command = getattr(args, 'teacher_command', None) or 'status'
        try:
            if teacher_command == 'status':
                return ctx.asyncio.run(ctx.teacher_status_command(args))
            if teacher_command == 'courses':
                return ctx.asyncio.run(ctx.teacher_courses_command(args))
            if teacher_command == 'course':
                return ctx.asyncio.run(ctx.teacher_course_command(args))
            if teacher_command == 'rollcalls':
                return ctx.asyncio.run(ctx.teacher_rollcalls_command(args))
            if teacher_command == 'enrollments':
                return ctx.asyncio.run(ctx.teacher_enrollments_command(args))
            if teacher_command == 'groups':
                return ctx.asyncio.run(ctx.teacher_groups_command(args))
            if teacher_command == 'group-set':
                return ctx.asyncio.run(ctx.teacher_group_set_command(args))
            if teacher_command == 'activities':
                return ctx.asyncio.run(ctx.teacher_activities_command(args))
            if teacher_command == 'bulletins':
                return ctx.asyncio.run(ctx.teacher_bulletins_command(args))
            if teacher_command == 'scores':
                return ctx.asyncio.run(ctx.teacher_scores_command(args))
            if teacher_command == 'stats':
                return ctx.asyncio.run(ctx.teacher_stats_command(args))
            if teacher_command == 'air-credit':
                return ctx.asyncio.run(ctx.teacher_air_credit_command(args))
            if teacher_command == 'management-calendar-meetings':
                return ctx.asyncio.run(ctx.teacher_management_calendar_meetings_command(args))
            if teacher_command == 'calendar-meetings':
                return ctx.asyncio.run(ctx.teacher_calendar_meetings_command(args))
            if teacher_command == 'teaching-calendars':
                return ctx.asyncio.run(ctx.teacher_teaching_calendars_command(args))
            if teacher_command == 'vtrses':
                return ctx.asyncio.run(ctx.teacher_vtrses_command(args))
            if teacher_command == 'departments':
                return ctx.asyncio.run(ctx.teacher_departments_command(args))
            if teacher_command == 'ai-ppt':
                return ctx.asyncio.run(ctx.teacher_ai_ppt_command(args))
            if teacher_command == 'platform':
                return ctx.asyncio.run(ctx.teacher_platform_command(args))
            if teacher_command == 'org-bulletins':
                return ctx.asyncio.run(ctx.teacher_org_bulletins_command(args))
            if teacher_command == 'catalog':
                return ctx.asyncio.run(ctx.teacher_catalog_command(args))
            if teacher_command == 'media':
                return ctx.asyncio.run(ctx.teacher_media_command(args))
            if teacher_command == 'authoring':
                return ctx.asyncio.run(ctx.teacher_authoring_command(args))
            if teacher_command == 'course-estimates':
                return ctx.asyncio.run(ctx.teacher_course_estimates_command(args))
            if teacher_command == 'activity':
                return ctx.asyncio.run(ctx.teacher_activity_command(args))
            if teacher_command == 'exam':
                return ctx.asyncio.run(ctx.teacher_exam_command(args))
            if teacher_command == 'classroom':
                return ctx.asyncio.run(ctx.teacher_classroom_command(args))
            if teacher_command == 'questionnaire':
                return ctx.asyncio.run(ctx.teacher_questionnaire_command(args))
            if teacher_command == 'get':
                return ctx.asyncio.run(ctx.teacher_get_command(args))
            if teacher_command == 'download':
                return ctx.asyncio.run(ctx.teacher_download_command(args))
            if teacher_command == 'download-request':
                return ctx.asyncio.run(ctx.teacher_download_request_command(args))
            if teacher_command == 'qrcode':
                return ctx.asyncio.run(ctx.teacher_qrcode_command(args))
            if teacher_command == 'download-upload':
                return ctx.asyncio.run(ctx.teacher_download_upload_command(args))
            if teacher_command == 'download-upload-thumbnail':
                return ctx.asyncio.run(ctx.teacher_download_upload_thumbnail_command(args))
            if teacher_command == 'download-upload-modified-image':
                return ctx.asyncio.run(ctx.teacher_download_upload_modified_image_command(args))
            if teacher_command == 'download-upload-swf':
                return ctx.asyncio.run(ctx.teacher_download_upload_swf_command(args))
            if teacher_command == 'download-upload-reference':
                return ctx.asyncio.run(ctx.teacher_download_upload_reference_command(args))
            if teacher_command == 'download-shared-resource':
                return ctx.asyncio.run(ctx.teacher_download_shared_resource_command(args))
            if teacher_command == 'download-wedrive-file':
                return ctx.asyncio.run(ctx.teacher_download_wedrive_file_command(args))
            if teacher_command == 'download-third-part-upload':
                return ctx.asyncio.run(ctx.teacher_download_third_part_upload_command(args))
            if teacher_command == 'export-questionnaire':
                return ctx.asyncio.run(ctx.teacher_export_questionnaire_command(args))
            if teacher_command == 'export-topic':
                return ctx.asyncio.run(ctx.teacher_export_topic_command(args))
            if teacher_command == 'export-category-topics':
                return ctx.asyncio.run(ctx.teacher_export_category_topics_command(args))
            if teacher_command == 'export-shared-resource-subject-lib':
                return ctx.asyncio.run(ctx.teacher_export_shared_resource_subject_lib_command(args))
            if teacher_command == 'export-shared-resource-stat':
                return ctx.asyncio.run(ctx.teacher_export_shared_resource_stat_command(args))
            if teacher_command == 'export-shared-resource-video-stat':
                return ctx.asyncio.run(ctx.teacher_export_shared_resource_video_stat_command(args))
            if teacher_command == 'export-stat-students':
                return ctx.asyncio.run(ctx.teacher_export_stat_students_command(args))
            if teacher_command == 'export-stat-report':
                return ctx.asyncio.run(ctx.teacher_export_stat_report_command(args))
            if teacher_command == 'export-stat-courses':
                return ctx.asyncio.run(ctx.teacher_export_stat_courses_command(args))
            if teacher_command == 'export-stat-attendance':
                return ctx.asyncio.run(ctx.teacher_export_stat_attendance_command(args))
            if teacher_command == 'export-department-user-attendance':
                return ctx.asyncio.run(ctx.teacher_export_department_user_attendance_command(args))
            if teacher_command == 'export-department-attendance':
                return ctx.asyncio.run(ctx.teacher_export_department_attendance_command(args))
            if teacher_command == 'export-stat-vtrses-data':
                return ctx.asyncio.run(ctx.teacher_export_stat_vtrses_data_command(args))
            if teacher_command == 'export-cloud-classroom-live-classes':
                return ctx.asyncio.run(ctx.teacher_export_cloud_classroom_live_classes_command(args))
            if teacher_command == 'export-tencent-meeting-statistics':
                return ctx.asyncio.run(ctx.teacher_export_tencent_meeting_statistics_command(args))
            if teacher_command == 'export-ai-ppt-usage':
                return ctx.asyncio.run(ctx.teacher_export_ai_ppt_usage_command(args))
            if teacher_command == 'export-air-credit':
                return ctx.asyncio.run(ctx.teacher_export_air_credit_command(args))
            if teacher_command == 'export-management-calendar':
                return ctx.asyncio.run(ctx.teacher_export_management_calendar_command(args))
            if teacher_command == 'upload-file':
                return ctx.asyncio.run(ctx.teacher_upload_file_command(args))
            if teacher_command == 'create-calendar-meeting':
                return ctx.asyncio.run(ctx.teacher_create_calendar_meeting_command(args))
            if teacher_command == 'update-calendar-meeting':
                return ctx.asyncio.run(ctx.teacher_update_calendar_meeting_command(args))
            if teacher_command == 'delete-calendar-meeting':
                return ctx.asyncio.run(ctx.teacher_delete_calendar_meeting_command(args))
            if teacher_command == 'create-air-credit-assignments':
                return ctx.asyncio.run(ctx.teacher_create_air_credit_assignments_command(args))
            if teacher_command == 'update-air-credit-assignments':
                return ctx.asyncio.run(ctx.teacher_update_air_credit_assignments_command(args))
            if teacher_command == 'update-air-credit-status':
                return ctx.asyncio.run(ctx.teacher_update_air_credit_status_command(args))
            if teacher_command == 'clear-air-credit-remaining':
                return ctx.asyncio.run(ctx.teacher_clear_air_credit_remaining_credits_command(args))
            if teacher_command == 'update-air-credit-course-usage-limit':
                return ctx.asyncio.run(ctx.teacher_update_air_credit_course_usage_limit_command(args))
            if teacher_command == 'create-teaching-calendar':
                return ctx.asyncio.run(ctx.teacher_create_teaching_calendar_command(args))
            if teacher_command == 'update-teaching-calendar':
                return ctx.asyncio.run(ctx.teacher_update_teaching_calendar_command(args))
            if teacher_command == 'delete-teaching-calendar':
                return ctx.asyncio.run(ctx.teacher_delete_teaching_calendar_command(args))
            if teacher_command == 'notify-outline-editing':
                return ctx.asyncio.run(ctx.teacher_notify_outline_editing_command(args))
            if teacher_command == 'sync-courses-from-urp':
                return ctx.asyncio.run(ctx.teacher_sync_courses_from_urp_command(args))
            if teacher_command == 'update-chinamcloud-resources':
                return ctx.asyncio.run(ctx.teacher_update_chinamcloud_resources_command(args))
            if teacher_command == 'update-course-outline':
                return ctx.asyncio.run(ctx.teacher_update_course_outline_command(args))
            if teacher_command == 'create-outline-setting':
                return ctx.asyncio.run(ctx.teacher_create_outline_setting_command(args))
            if teacher_command == 'update-outline-setting':
                return ctx.asyncio.run(ctx.teacher_update_outline_setting_command(args))
            if teacher_command == 'sort-outline-setting':
                return ctx.asyncio.run(ctx.teacher_sort_outline_setting_command(args))
            if teacher_command == 'delete-outline-setting-option':
                return ctx.asyncio.run(ctx.teacher_delete_outline_setting_option_command(args))
            if teacher_command == 'toggle-outline-setting':
                return ctx.asyncio.run(ctx.teacher_toggle_outline_setting_command(args))
            if teacher_command == 'update-outline-required-options':
                return ctx.asyncio.run(ctx.teacher_update_outline_required_options_command(args))
            if teacher_command == 'update-enrollment-role':
                return ctx.asyncio.run(ctx.teacher_update_enrollment_role_command(args))
            if teacher_command == 'update-enrollments-role':
                return ctx.asyncio.run(ctx.teacher_update_enrollments_role_command(args))
            if teacher_command == 'delete-enrollment':
                return ctx.asyncio.run(ctx.teacher_delete_enrollment_command(args))
            if teacher_command == 'delete-enrollments':
                return ctx.asyncio.run(ctx.teacher_delete_enrollments_command(args))
            if teacher_command == 'students':
                return ctx.asyncio.run(ctx.teacher_students_command(args))
            if teacher_command == 'rollcall-students':
                return ctx.asyncio.run(ctx.teacher_rollcall_students_command(args))
            if teacher_command == 'rollcall-info':
                return ctx.asyncio.run(ctx.teacher_rollcall_info_command(args))
            if teacher_command == 'rollcall-students-page':
                return ctx.asyncio.run(ctx.teacher_rollcall_students_page_command(args))
            if teacher_command == 'rollcall-count':
                return ctx.asyncio.run(ctx.teacher_rollcall_count_command(args))
            if teacher_command == 'rollcall-status-result':
                return ctx.asyncio.run(ctx.teacher_rollcall_status_result_command(args))
            if teacher_command == 'course-rollcall-detail':
                return ctx.asyncio.run(ctx.teacher_course_rollcall_detail_command(args))
            if teacher_command == 'ongoing-student-rollcalls':
                return ctx.asyncio.run(ctx.teacher_ongoing_student_rollcalls_command(args))
            if teacher_command == 'leave-record':
                return ctx.asyncio.run(ctx.teacher_leave_record_command(args))
            if teacher_command == 'student-rollcalls':
                return ctx.asyncio.run(ctx.teacher_student_rollcalls_command(args))
            if teacher_command == 'request':
                return ctx.asyncio.run(ctx.teacher_request_command(args))
            if teacher_command == 'start-rollcall':
                return ctx.asyncio.run(ctx.teacher_start_rollcall_command(args))
            if teacher_command == 'create-rollcall':
                return ctx.asyncio.run(ctx.teacher_create_rollcall_command(args))
            if teacher_command == 'create-module-rollcall':
                return ctx.asyncio.run(ctx.teacher_create_module_rollcall_command(args))
            if teacher_command == 'activate-rollcall':
                return ctx.asyncio.run(ctx.teacher_activate_rollcall_command(args))
            if teacher_command == 'update-rollcall':
                return ctx.asyncio.run(ctx.teacher_update_rollcall_command(args))
            if teacher_command == 'update-radar-rollcall-position':
                return ctx.asyncio.run(ctx.teacher_update_radar_rollcall_position_command(args))
            if teacher_command == 'stop-rollcall':
                return ctx.asyncio.run(ctx.teacher_stop_rollcall_command(args))
            if teacher_command == 'stop-timetable-rollcall':
                return ctx.asyncio.run(ctx.teacher_stop_timetable_rollcall_command(args))
            if teacher_command == 'stop-qr-rollcall':
                return ctx.asyncio.run(ctx.teacher_stop_qr_rollcall_command(args))
            if teacher_command == 'stop-number-rollcall':
                return ctx.asyncio.run(ctx.teacher_stop_number_rollcall_command(args))
            if teacher_command == 'stop-radar-rollcall':
                return ctx.asyncio.run(ctx.teacher_stop_radar_rollcall_command(args))
            if teacher_command == 'answer-qr-rollcall':
                return ctx.asyncio.run(ctx.teacher_answer_qr_rollcall_command(args))
            if teacher_command == 'answer-number-rollcall':
                return ctx.asyncio.run(ctx.teacher_answer_number_rollcall_command(args))
            if teacher_command == 'answer-radar-rollcall':
                return ctx.asyncio.run(ctx.teacher_answer_radar_rollcall_command(args))
            if teacher_command == 'update-student-rollcalls':
                return ctx.asyncio.run(ctx.teacher_update_student_rollcalls_command(args))
            if teacher_command == 'delete-rollcall':
                return ctx.asyncio.run(ctx.teacher_delete_rollcall_command(args))
            if teacher_command == 'create-merged-rollcall':
                return ctx.asyncio.run(ctx.teacher_create_merged_rollcall_command(args))
            if teacher_command == 'update-merged-rollcall-students':
                return ctx.asyncio.run(ctx.teacher_update_merged_rollcall_students_command(args))
            if teacher_command == 'update-rollcall-setting':
                return ctx.asyncio.run(ctx.teacher_update_rollcall_setting_command(args))
            if teacher_command == 'score-rollcall':
                return ctx.asyncio.run(ctx.teacher_score_rollcall_command(args))
            if teacher_command == 'update-announce-score-settings':
                return ctx.asyncio.run(ctx.teacher_update_announce_score_settings_command(args))
            if teacher_command == 'update-score-type-settings':
                return ctx.asyncio.run(ctx.teacher_update_score_type_settings_command(args))
            if teacher_command == 'create-custom-score-item':
                return ctx.asyncio.run(ctx.teacher_create_custom_score_item_command(args))
            if teacher_command == 'update-custom-score-item':
                return ctx.asyncio.run(ctx.teacher_update_custom_score_item_command(args))
            if teacher_command == 'delete-custom-score-item':
                return ctx.asyncio.run(ctx.teacher_delete_custom_score_item_command(args))
            if teacher_command == 'score-custom-item':
                return ctx.asyncio.run(ctx.teacher_score_custom_item_command(args))
            if teacher_command == 'update-enrollment-scores':
                return ctx.asyncio.run(ctx.teacher_update_enrollment_scores_command(args))
            if teacher_command == 'update-total-scores':
                return ctx.asyncio.run(ctx.teacher_update_total_scores_command(args))
            if teacher_command == 'update-score-book':
                return ctx.asyncio.run(ctx.teacher_update_score_book_command(args))
            if teacher_command == 'update-score-publish-item-maps':
                return ctx.asyncio.run(ctx.teacher_update_score_publish_item_maps_command(args))
            if teacher_command == 'submit-edu-scores':
                return ctx.asyncio.run(ctx.teacher_submit_edu_scores_command(args))
            if teacher_command == 'create-rubric':
                return ctx.asyncio.run(ctx.teacher_create_rubric_command(args))
            if teacher_command == 'update-rubric':
                return ctx.asyncio.run(ctx.teacher_update_rubric_command(args))
            if teacher_command == 'delete-rubrics':
                return ctx.asyncio.run(ctx.teacher_delete_rubrics_command(args))
            if teacher_command == 'create-bulletin':
                return ctx.asyncio.run(ctx.teacher_create_bulletin_command(args))
            if teacher_command == 'update-bulletin':
                return ctx.asyncio.run(ctx.teacher_update_bulletin_command(args))
            if teacher_command == 'delete-bulletin':
                return ctx.asyncio.run(ctx.teacher_delete_bulletin_command(args))
            if teacher_command == 'mark-bulletin-read':
                return ctx.asyncio.run(ctx.teacher_mark_bulletin_read_command(args))
            if teacher_command == 'create-module':
                return ctx.asyncio.run(ctx.teacher_create_module_command(args))
            if teacher_command == 'update-module':
                return ctx.asyncio.run(ctx.teacher_update_module_command(args))
            if teacher_command == 'delete-module':
                return ctx.asyncio.run(ctx.teacher_delete_module_command(args))
            if teacher_command == 'sort-modules':
                return ctx.asyncio.run(ctx.teacher_sort_modules_command(args))
            if teacher_command == 'check-module-dependents':
                return ctx.asyncio.run(ctx.teacher_check_module_dependents_command(args))
            if teacher_command == 'create-syllabus':
                return ctx.asyncio.run(ctx.teacher_create_syllabus_command(args))
            if teacher_command == 'update-syllabus':
                return ctx.asyncio.run(ctx.teacher_update_syllabus_command(args))
            if teacher_command == 'delete-syllabus':
                return ctx.asyncio.run(ctx.teacher_delete_syllabus_command(args))
            if teacher_command == 'sort-syllabuses':
                return ctx.asyncio.run(ctx.teacher_sort_syllabuses_command(args))
            if teacher_command == 'check-syllabus-dependents':
                return ctx.asyncio.run(ctx.teacher_check_syllabus_dependents_command(args))
            if teacher_command == 'sort-module-activities':
                return ctx.asyncio.run(ctx.teacher_sort_module_activities_command(args))
            if teacher_command == 'sort-syllabus-activities':
                return ctx.asyncio.run(ctx.teacher_sort_syllabus_activities_command(args))
            if teacher_command == 'resort-activity':
                return ctx.asyncio.run(ctx.teacher_resort_activity_command(args))
            if teacher_command == 'import-course-groups':
                return ctx.asyncio.run(ctx.teacher_import_course_groups_command(args))
            if teacher_command == 'import-enrollments':
                return ctx.asyncio.run(ctx.teacher_import_enrollments_command(args))
            if teacher_command == 'import-scores':
                return ctx.asyncio.run(ctx.teacher_import_scores_command(args))
            if teacher_command == 'import-item-scores':
                return ctx.asyncio.run(ctx.teacher_import_item_scores_command(args))
            if teacher_command == 'import-seat-numbers':
                return ctx.asyncio.run(ctx.teacher_import_seat_numbers_command(args))
            if teacher_command == 'import-rollcalls':
                return ctx.asyncio.run(ctx.teacher_import_rollcalls_command(args))
            if teacher_command == 'create-group-set':
                return ctx.asyncio.run(ctx.teacher_create_group_set_command(args))
            if teacher_command == 'update-group-set':
                return ctx.asyncio.run(ctx.teacher_update_group_set_command(args))
            if teacher_command == 'delete-group-set':
                return ctx.asyncio.run(ctx.teacher_delete_group_set_command(args))
            if teacher_command == 'copy-group-set':
                return ctx.asyncio.run(ctx.teacher_copy_group_set_command(args))
            if teacher_command == 'random-grouping':
                return ctx.asyncio.run(ctx.teacher_random_grouping_command(args))
            if teacher_command == 'create-group':
                return ctx.asyncio.run(ctx.teacher_create_group_command(args))
            if teacher_command == 'update-group':
                return ctx.asyncio.run(ctx.teacher_update_group_command(args))
            if teacher_command == 'update-group-info':
                return ctx.asyncio.run(ctx.teacher_update_group_info_command(args))
            if teacher_command == 'delete-group':
                return ctx.asyncio.run(ctx.teacher_delete_group_command(args))
            if teacher_command == 'sort-groups':
                return ctx.asyncio.run(ctx.teacher_sort_groups_command(args))
            if teacher_command == 'update-group-members':
                return ctx.asyncio.run(ctx.teacher_update_group_members_command(args))
            if teacher_command == 'update-group-member':
                return ctx.asyncio.run(ctx.teacher_update_group_member_command(args))
            if teacher_command == 'delete-group-member':
                return ctx.asyncio.run(ctx.teacher_delete_group_member_command(args))
            if teacher_command == 'check-activity-dependents':
                return ctx.asyncio.run(ctx.teacher_check_activity_dependents_command(args))
            if teacher_command == 'completion-criteria':
                return ctx.asyncio.run(ctx.teacher_completion_criteria_command(args))
            if teacher_command == 'course-completion-criteria':
                return ctx.asyncio.run(ctx.teacher_course_completion_criteria_command(args))
            if teacher_command == 'forum-categories':
                return ctx.asyncio.run(ctx.teacher_forum_categories_command(args))
            if teacher_command == 'forum-category':
                return ctx.asyncio.run(ctx.teacher_forum_category_command(args))
            if teacher_command == 'activity-uploads-license':
                return ctx.asyncio.run(ctx.teacher_activity_uploads_license_command(args))
            if teacher_command == 'subject-libs':
                return ctx.asyncio.run(ctx.teacher_subject_libs_command(args))
            if teacher_command == 'subject-lib-subjects':
                return ctx.asyncio.run(ctx.teacher_subject_lib_subjects_command(args))
            if teacher_command == 'subject-lib-statistic':
                return ctx.asyncio.run(ctx.teacher_subject_lib_statistic_command(args))
            if teacher_command == 'subject-lib-knowledge-nodes':
                return ctx.asyncio.run(ctx.teacher_subject_lib_knowledge_nodes_command(args))
            if teacher_command == 'subject-lib-folders':
                return ctx.asyncio.run(ctx.teacher_subject_lib_folders_command(args))
            if teacher_command == 'create-subject-lib':
                return ctx.asyncio.run(ctx.teacher_create_subject_lib_command(args))
            if teacher_command == 'copy-subject-lib':
                return ctx.asyncio.run(ctx.teacher_copy_subject_lib_command(args))
            if teacher_command == 'update-subject-lib':
                return ctx.asyncio.run(ctx.teacher_update_subject_lib_command(args))
            if teacher_command == 'move-subject-libs':
                return ctx.asyncio.run(ctx.teacher_move_subject_libs_command(args))
            if teacher_command == 'copy-subject-libs-to-user':
                return ctx.asyncio.run(ctx.teacher_copy_subject_libs_to_user_command(args))
            if teacher_command == 'move-subject-lib-subjects':
                return ctx.asyncio.run(ctx.teacher_move_subject_lib_subjects_command(args))
            if teacher_command == 'copy-subject-lib-subjects':
                return ctx.asyncio.run(ctx.teacher_copy_subject_lib_subjects_command(args))
            if teacher_command == 'delete-subject-lib':
                return ctx.asyncio.run(ctx.teacher_delete_subject_lib_command(args))
            if teacher_command == 'delete-subject-lib-subjects':
                return ctx.asyncio.run(ctx.teacher_delete_subject_lib_subjects_command(args))
            if teacher_command == 'questionnaire-submissions':
                return ctx.asyncio.run(ctx.teacher_questionnaire_submissions_command(args))
            if teacher_command == 'course-estimate-replies':
                return ctx.asyncio.run(ctx.teacher_course_estimate_replies_command(args))
            if teacher_command == 'course-estimate-user':
                return ctx.asyncio.run(ctx.teacher_course_estimate_user_command(args))
            if teacher_command == 'course-packages':
                return ctx.asyncio.run(ctx.teacher_course_packages_command(args))
            if teacher_command == 'course-package-course':
                return ctx.asyncio.run(ctx.teacher_course_package_course_command(args))
            if teacher_command == 'courseware-quizzes':
                return ctx.asyncio.run(ctx.teacher_courseware_quizzes_command(args))
            if teacher_command == 'courseware-quiz-subjects':
                return ctx.asyncio.run(ctx.teacher_courseware_quiz_subjects_command(args))
            if teacher_command == 'courseware-quiz-settings':
                return ctx.asyncio.run(ctx.teacher_courseware_quiz_settings_command(args))
            if teacher_command == 'resource-groups':
                return ctx.asyncio.run(ctx.teacher_resource_groups_command(args))
            if teacher_command == 'resource-group':
                return ctx.asyncio.run(ctx.teacher_resource_group_command(args))
            if teacher_command == 'resource-group-members':
                return ctx.asyncio.run(ctx.teacher_resource_group_members_command(args))
            if teacher_command == 'resource-group-folders':
                return ctx.asyncio.run(ctx.teacher_resource_group_folders_command(args))
            if teacher_command == 'resource-group-resources':
                return ctx.asyncio.run(ctx.teacher_resource_group_resources_command(args))
            if teacher_command == 'resource-group-rubrics':
                return ctx.asyncio.run(ctx.teacher_resource_group_rubrics_command(args))
            if teacher_command == 'resource-group-subject-libs':
                return ctx.asyncio.run(ctx.teacher_resource_group_subject_libs_command(args))
            if teacher_command == 'user-resources':
                return ctx.asyncio.run(ctx.teacher_user_resources_command(args))
            if teacher_command == 'user-resource-folder-info':
                return ctx.asyncio.run(ctx.teacher_user_resource_folder_info_command(args))
            if teacher_command == 'shared-resources':
                return ctx.asyncio.run(ctx.teacher_shared_resources_command(args))
            if teacher_command == 'shared-resource-collections':
                return ctx.asyncio.run(ctx.teacher_shared_resource_collections_command(args))
            if teacher_command == 'shared-resource-comments':
                return ctx.asyncio.run(ctx.teacher_shared_resource_comments_command(args))
            if teacher_command == 'shared-resource-classifications':
                return ctx.asyncio.run(ctx.teacher_shared_resource_classifications_command(args))
            if teacher_command == 'shared-resource-tags':
                return ctx.asyncio.run(ctx.teacher_shared_resource_tags_command(args))
            if teacher_command == 'shared-resource-recommendations':
                return ctx.asyncio.run(ctx.teacher_shared_resource_recommendations_command(args))
            if teacher_command == 'shared-resource-track-users':
                return ctx.asyncio.run(ctx.teacher_shared_resource_track_users_command(args))
            if teacher_command == 'shared-resource-followers':
                return ctx.asyncio.run(ctx.teacher_shared_resource_followers_command(args))
            if teacher_command == 'cc-license-groups':
                return ctx.asyncio.run(ctx.teacher_cc_license_groups_command(args))
            if teacher_command == 'cc-license-map':
                return ctx.asyncio.run(ctx.teacher_cc_license_map_command(args))
            if teacher_command == 'entries':
                return ctx.asyncio.run(ctx.teacher_entries_command(args))
            if teacher_command == 'entry':
                return ctx.asyncio.run(ctx.teacher_entry_command(args))
            if teacher_command == 'entry-references':
                return ctx.asyncio.run(ctx.teacher_entry_references_command(args))
            if teacher_command == 'slides':
                return ctx.asyncio.run(ctx.teacher_slides_command(args))
            if teacher_command == 'slide':
                return ctx.asyncio.run(ctx.teacher_slide_command(args))
            if teacher_command == 'slide-records':
                return ctx.asyncio.run(ctx.teacher_slide_records_command(args))
            if teacher_command == 'slide-export-status':
                return ctx.asyncio.run(ctx.teacher_slide_export_status_command(args))
            if teacher_command == 'published-slides':
                return ctx.asyncio.run(ctx.teacher_published_slides_command(args))
            if teacher_command == 'create-questionnaire-subject':
                return ctx.asyncio.run(ctx.teacher_create_questionnaire_subject_command(args))
            if teacher_command == 'update-questionnaire-subject':
                return ctx.asyncio.run(ctx.teacher_update_questionnaire_subject_command(args))
            if teacher_command == 'delete-questionnaire-subject':
                return ctx.asyncio.run(ctx.teacher_delete_questionnaire_subject_command(args))
            if teacher_command == 'import-questionnaire-subjects':
                return ctx.asyncio.run(ctx.teacher_import_questionnaire_subjects_command(args))
            if teacher_command == 'import-questionnaire-campus-subjects':
                return ctx.asyncio.run(ctx.teacher_import_questionnaire_campus_subjects_command(args))
            if teacher_command == 'create-course-estimate':
                return ctx.asyncio.run(ctx.teacher_create_course_estimate_command(args))
            if teacher_command == 'update-course-estimate':
                return ctx.asyncio.run(ctx.teacher_update_course_estimate_command(args))
            if teacher_command == 'delete-course-estimate':
                return ctx.asyncio.run(ctx.teacher_delete_course_estimate_command(args))
            if teacher_command == 'create-course-estimate-reply':
                return ctx.asyncio.run(ctx.teacher_create_course_estimate_reply_command(args))
            if teacher_command == 'delete-course-estimate-reply':
                return ctx.asyncio.run(ctx.teacher_delete_course_estimate_reply_command(args))
            if teacher_command == 'create-course-package':
                return ctx.asyncio.run(ctx.teacher_create_course_package_command(args))
            if teacher_command == 'export-course-package':
                return ctx.asyncio.run(ctx.teacher_export_course_package_command(args))
            if teacher_command == 'update-course-package':
                return ctx.asyncio.run(ctx.teacher_update_course_package_command(args))
            if teacher_command == 'delete-course-package':
                return ctx.asyncio.run(ctx.teacher_delete_course_package_command(args))
            if teacher_command == 'save-course-package':
                return ctx.asyncio.run(ctx.teacher_save_course_package_command(args))
            if teacher_command == 'import-course-package':
                return ctx.asyncio.run(ctx.teacher_import_course_package_command(args))
            if teacher_command == 'create-courseware-quiz-subjects':
                return ctx.asyncio.run(ctx.teacher_create_courseware_quiz_subjects_command(args))
            if teacher_command == 'update-courseware-quiz-subjects':
                return ctx.asyncio.run(ctx.teacher_update_courseware_quiz_subjects_command(args))
            if teacher_command == 'generate-courseware-quiz-subjects':
                return ctx.asyncio.run(ctx.teacher_generate_courseware_quiz_subjects_command(args))
            if teacher_command == 'generate-courseware-quiz-subjects-by-text':
                return ctx.asyncio.run(ctx.teacher_generate_courseware_quiz_subjects_by_text_command(args))
            if teacher_command == 'format-courseware-quiz-question':
                return ctx.asyncio.run(ctx.teacher_format_courseware_quiz_question_command(args))
            if teacher_command == 'copy-subject-libs-to-courseware-quiz':
                return ctx.asyncio.run(ctx.teacher_copy_subject_libs_to_courseware_quiz_command(args))
            if teacher_command == 'create-resource-group':
                return ctx.asyncio.run(ctx.teacher_create_resource_group_command(args))
            if teacher_command == 'update-resource-group':
                return ctx.asyncio.run(ctx.teacher_update_resource_group_command(args))
            if teacher_command == 'delete-resource-group':
                return ctx.asyncio.run(ctx.teacher_delete_resource_group_command(args))
            if teacher_command == 'delete-resource-group-members':
                return ctx.asyncio.run(ctx.teacher_delete_resource_group_members_command(args))
            if teacher_command == 'delete-resource-group-folder':
                return ctx.asyncio.run(ctx.teacher_delete_resource_group_folder_command(args))
            if teacher_command == 'update-resource-group-resource':
                return ctx.asyncio.run(ctx.teacher_update_resource_group_resource_command(args))
            if teacher_command == 'delete-resource-group-resource':
                return ctx.asyncio.run(ctx.teacher_delete_resource_group_resource_command(args))
            if teacher_command == 'leave-resource-group':
                return ctx.asyncio.run(ctx.teacher_leave_resource_group_command(args))
            if teacher_command == 'save-shared-resource':
                return ctx.asyncio.run(ctx.teacher_save_shared_resource_command(args))
            if teacher_command == 'batch-save-shared-resources':
                return ctx.asyncio.run(ctx.teacher_batch_save_shared_resources_command(args))
            if teacher_command == 'set-shared-resource-collection':
                return ctx.asyncio.run(ctx.teacher_set_shared_resource_collection_command(args))
            if teacher_command == 'unset-shared-resource-collection':
                return ctx.asyncio.run(ctx.teacher_unset_shared_resource_collection_command(args))
            if teacher_command == 'publish-shared-resource':
                return ctx.asyncio.run(ctx.teacher_publish_shared_resource_command(args))
            if teacher_command == 'delete-shared-resource':
                return ctx.asyncio.run(ctx.teacher_delete_shared_resource_command(args))
            if teacher_command == 'delete-shared-resource-to':
                return ctx.asyncio.run(ctx.teacher_delete_shared_resource_to_command(args))
            if teacher_command == 'add-shared-resource-comment':
                return ctx.asyncio.run(ctx.teacher_add_shared_resource_comment_command(args))
            if teacher_command == 'delete-shared-resource-comment':
                return ctx.asyncio.run(ctx.teacher_delete_shared_resource_comment_command(args))
            if teacher_command == 'create-entry':
                return ctx.asyncio.run(ctx.teacher_create_entry_command(args))
            if teacher_command == 'update-entry':
                return ctx.asyncio.run(ctx.teacher_update_entry_command(args))
            if teacher_command == 'delete-entry':
                return ctx.asyncio.run(ctx.teacher_delete_entry_command(args))
            if teacher_command == 'batch-delete-entries':
                return ctx.asyncio.run(ctx.teacher_batch_delete_entries_command(args))
            if teacher_command == 'update-slide':
                return ctx.asyncio.run(ctx.teacher_update_slide_command(args))
            if teacher_command == 'export-slide':
                return ctx.asyncio.run(ctx.teacher_export_slide_command(args))
            if teacher_command == 'delete-slide':
                return ctx.asyncio.run(ctx.teacher_delete_slide_command(args))
            if teacher_command == 'batch-delete-slides':
                return ctx.asyncio.run(ctx.teacher_batch_delete_slides_command(args))
            if teacher_command == 'update-slide-video-info':
                return ctx.asyncio.run(ctx.teacher_update_slide_video_info_command(args))
            if teacher_command == 'delete-slide-record':
                return ctx.asyncio.run(ctx.teacher_delete_slide_record_command(args))
            if teacher_command == 'delete-activities':
                return ctx.asyncio.run(ctx.teacher_delete_activities_command(args))
            if teacher_command == 'create-activity':
                return ctx.asyncio.run(ctx.teacher_create_activity_command(args))
            if teacher_command == 'update-activity':
                return ctx.asyncio.run(ctx.teacher_update_activity_command(args))
            if teacher_command == 'delete-activity':
                return ctx.asyncio.run(ctx.teacher_delete_activity_command(args))
            if teacher_command == 'publish-activities':
                return ctx.asyncio.run(ctx.teacher_publish_activities_command(args))
            if teacher_command == 'save-activity-resource':
                return ctx.asyncio.run(ctx.teacher_save_activity_resource_command(args))
            if teacher_command == 'log-activity-read':
                return ctx.asyncio.run(ctx.teacher_log_activity_read_command(args))
            if teacher_command == 'log-exam-activity-read':
                return ctx.asyncio.run(ctx.teacher_log_exam_activity_read_command(args))
            if teacher_command == 'update-activity-resource':
                return ctx.asyncio.run(ctx.teacher_update_activity_resource_command(args))
            if teacher_command == 'delete-activity-resource':
                return ctx.asyncio.run(ctx.teacher_delete_activity_resource_command(args))
            if teacher_command == 'add-activity-comment':
                return ctx.asyncio.run(ctx.teacher_add_activity_comment_command(args))
            if teacher_command == 'update-activity-comment':
                return ctx.asyncio.run(ctx.teacher_update_activity_comment_command(args))
            if teacher_command == 'delete-activity-comment':
                return ctx.asyncio.run(ctx.teacher_delete_activity_comment_command(args))
            if teacher_command == 'reply-activity-comment':
                return ctx.asyncio.run(ctx.teacher_reply_activity_comment_command(args))
            if teacher_command == 'update-activity-comment-reply':
                return ctx.asyncio.run(ctx.teacher_update_activity_comment_reply_command(args))
            if teacher_command == 'delete-activity-comment-reply':
                return ctx.asyncio.run(ctx.teacher_delete_activity_comment_reply_command(args))
            if teacher_command == 'operate-activity-comments':
                return ctx.asyncio.run(ctx.teacher_operate_activity_comments_command(args))
            if teacher_command == 'grade-rollcalls':
                return ctx.asyncio.run(ctx.teacher_grade_rollcalls_command(args))
            if teacher_command == 'grade-submission':
                return ctx.asyncio.run(ctx.teacher_grade_submission_command(args))
            if teacher_command == 'recommend-submissions':
                return ctx.asyncio.run(ctx.teacher_recommend_submissions_command(args))
            if teacher_command == 'cancel-recommend-submission':
                return ctx.asyncio.run(ctx.teacher_cancel_recommend_submission_command(args))
            if teacher_command == 'score-forum':
                return ctx.asyncio.run(ctx.teacher_score_forum_command(args))
            if teacher_command == 'update-forum-status':
                return ctx.asyncio.run(ctx.teacher_update_forum_status_command(args))
            if teacher_command == 'update-homework-announce-status':
                return ctx.asyncio.run(ctx.teacher_update_homework_announce_status_command(args))
            if teacher_command == 'update-homework-rubric':
                return ctx.asyncio.run(ctx.teacher_update_homework_rubric_command(args))
            if teacher_command == 'delete-exams':
                return ctx.asyncio.run(ctx.teacher_delete_exams_command(args))
            if teacher_command == 'create-exam':
                return ctx.asyncio.run(ctx.teacher_create_exam_command(args))
            if teacher_command == 'update-exam':
                return ctx.asyncio.run(ctx.teacher_update_exam_command(args))
            if teacher_command == 'score-exam':
                return ctx.asyncio.run(ctx.teacher_score_exam_command(args))
            if teacher_command == 'comment-exam-status':
                return ctx.asyncio.run(ctx.teacher_comment_exam_status_command(args))
            if teacher_command == 'create-classroom-exam':
                return ctx.asyncio.run(ctx.teacher_create_classroom_exam_command(args))
            if teacher_command == 'update-classroom-exam':
                return ctx.asyncio.run(ctx.teacher_update_classroom_exam_command(args))
            if teacher_command == 'delete-classroom':
                return ctx.asyncio.run(ctx.teacher_delete_classroom_command(args))
            if teacher_command == 'update-classroom-status':
                return ctx.asyncio.run(ctx.teacher_update_classroom_status_command(args))
            if teacher_command == 'update-classroom-subject-status':
                return ctx.asyncio.run(ctx.teacher_update_classroom_subject_status_command(args))
            if teacher_command == 'save-classroom-subjects':
                return ctx.asyncio.run(ctx.teacher_save_classroom_subjects_command(args))
            if teacher_command == 'delete-classroom-subjects':
                return ctx.asyncio.run(ctx.teacher_delete_classroom_subjects_command(args))
            if teacher_command == 'score-classroom':
                return ctx.asyncio.run(ctx.teacher_score_classroom_command(args))
        except Exception as exc:
            if getattr(args, 'json', False):
                print(ctx.json_text({'status': 'unexpected_response', 'message': str(exc)}))
            else:
                print('Teacher command failed: {}'.format(exc))
            return 1
        parser.print_help()
        return 1
    if args.command == 'qr':
        qr_args = list(args.qr_args or [])
        qr_action = qr_args[0].lower() if qr_args else ''
        image_path = ctx.normalize_text(getattr(args, 'image', ''))
        if qr_action == 'pending':
            return ctx.print_pending_qr(json_output=args.json)
        if qr_action == 'data-probe':
            rollcall_id = ctx.normalize_text(getattr(args, 'rollcall_id', '')) or (qr_args[1] if len(qr_args) > 1 else '')
            try:
                return ctx.asyncio.run(ctx.qr_data_probe_command(rollcall_id, samples=int(getattr(args, 'samples', 5) or 5), timestamp=ctx.normalize_text(getattr(args, 'timestamp', '')), json_output=args.json))
            except Exception as exc:
                print('QR data-probe failed: {}'.format(exc))
                return 1
        if qr_action == 'image' or (image_path and qr_action in {'', 'paste'}):
            path = image_path or (' '.join(qr_args[1:]).strip() if qr_action == 'image' else '')
            if not path:
                print('QR image path is required.')
                return 1
            try:
                return ctx.asyncio.run(ctx.qr_image_command(path, assume_yes=args.yes, json_output=args.json, fanout_all=args.fanout_all))
            except Exception as exc:
                print('QR image failed: {}'.format(exc))
                return 1
        if qr_action == 'paste':
            payload = ' '.join(qr_args[1:]).strip()
            try:
                return ctx.asyncio.run(ctx.qr_paste_command(payload, assume_yes=args.yes, json_output=args.json, fanout_all=args.fanout_all))
            except Exception as exc:
                print('QR paste failed: {}'.format(exc))
                return 1
        if qr_action == 'scan':
            host = args.host or ctx.CONFIG.get('local_ui', {}).get('host', '127.0.0.1')
            port = int(args.port or ctx.CONFIG.get('local_ui', {}).get('port', 8765))
            try:
                ctx.asyncio.run(ctx.run_scanner_server(host=host, port=port, previewer=ctx.build_qr_preview, submitter=ctx.qr_scanner_submit, open_browser=args.open))
                return 0
            except KeyboardInterrupt:
                print('Local QR scanner stopped.')
                return 0
            except Exception as exc:
                print('Local QR scanner failed: {}'.format(exc))
                return 1
        payload = ctx.sanitize_input_field(' '.join(qr_args), field_type='qr_payload', field_name='qr payload').value or ctx.sanitize_input_field(input('Paste QR URL or payload > '), field_type='qr_payload', field_name='qr payload').value
        try:
            return ctx.asyncio.run(ctx.qr_fanout_command(payload) if args.fanout_all else ctx.qr_command(payload))
        except Exception as exc:
            print('QR submit failed: {}'.format(exc))
            return 1
    if args.command == 'debug-capture':
        try:
            return ctx.asyncio.run(ctx.debug_capture_command(args.output))
        except Exception as exc:
            print('Debug capture failed: {}'.format(exc))
            return 1
    if args.command == 'research':
        research_command = getattr(args, 'research_command', None) or 'status'
        if research_command == 'status':
            return ctx.research_status_command(json_output=getattr(args, 'json', False))
        if research_command == 'api':
            try:
                return ctx.asyncio.run(ctx.research_api_command(args))
            except Exception as exc:
                if getattr(args, 'json', False):
                    print(ctx.json_text({'status': 'failed', 'message': str(exc)}))
                else:
                    print('Research API capture failed: {}'.format(exc))
                return 1
        if research_command == 'probe':
            try:
                return ctx.asyncio.run(ctx.research_probe_command(args))
            except Exception as exc:
                if getattr(args, 'json', False):
                    print(ctx.json_text({'status': 'failed', 'message': str(exc)}))
                else:
                    print('Research probe failed: {}'.format(exc))
                return 1
        if research_command == 'browser-check':
            return ctx.research_browser_check_command(json_output=getattr(args, 'json', False))
        if research_command == 'browser-capture':
            try:
                return ctx.asyncio.run(ctx.research_browser_capture_command(args))
            except Exception as exc:
                if getattr(args, 'json', False):
                    print(ctx.json_text({'status': 'failed', 'message': str(exc)}))
                else:
                    print('Research browser capture failed: {}'.format(exc))
                return 1
        parser.print_help()
        return 1
    parser.print_help()
    return 1

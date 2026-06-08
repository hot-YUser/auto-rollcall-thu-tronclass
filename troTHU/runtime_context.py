import asyncio
import argparse
import copy
import getpass
import hashlib
import importlib.util
import json
import os
import random
import ssl
import string
import sys
import time
import traceback
from dataclasses import dataclass
from datetime import datetime
from pathlib import Path
from typing import Any, Dict, List, Mapping, Optional, Tuple

try:
    import aiohttp
except ModuleNotFoundError:  # pragma: no cover - dependency-missing CLI fallback
    class _MissingAiohttp:
        class ClientError(Exception):
            pass

        class ContentTypeError(Exception):
            pass

        class ClientSession:
            def __init__(self, *args, **kwargs) -> None:
                raise RuntimeError("aiohttp is not installed. Run `pip install -r requirements.txt`.")

        class TCPConnector:
            def __init__(self, *args, **kwargs) -> None:
                raise RuntimeError("aiohttp is not installed. Run `pip install -r requirements.txt`.")

    aiohttp = _MissingAiohttp()  # type: ignore
try:
    import yaml
except ModuleNotFoundError:  # pragma: no cover - dependency-missing CLI fallback
    class _MissingYaml:
        class YAMLError(Exception):
            pass

        @staticmethod
        def safe_load(_stream: Any) -> Dict[str, Any]:
            return {}

        @staticmethod
        def safe_dump(data: Any, stream: Any, **_kwargs: Any) -> None:
            stream.write(str(data))

    yaml = _MissingYaml()  # type: ignore

try:
    from troTHU.account_store import (
        clear_session_cookies,
        cookie_cache_enabled,
        cookie_path,
        get_active_profile,
        get_keyring_password,
        keyring_available,
        list_profiles,
        load_session_cookies,
        normalize_accounts_config,
        normalize_profile_name,
        remove_profile,
        save_session_cookies,
        set_keyring_password,
        set_profile,
        switch_profile,
    )
    from troTHU.account_runtime_store import (
        load_runtime_state,
        mark_check_result,
        mark_login_result,
        mark_monitor_state,
        mark_profile_error,
        runtime_profile_summary,
        runtime_state_path,
    )
    from troTHU.adapter_bridge import (
        AdapterBinding,
        binding_key,
        map_adapter_command,
    )
    from troTHU.app_blueprint import (
        build_app_blueprint,
        format_app_blueprint_summary,
        validate_app_blueprint,
    )
    from troTHU.app_shell import run_app_shell
    from troTHU.app_shell_polish import (
        build_shell_action_catalog,
        build_shell_drilldown,
        build_shell_ui_model,
    )
    from troTHU.bot_runtime import normalize_admins_config
    from troTHU.connection_probe import (
        run_connection_probe,
        sanitize_probe_url,
    )
    from troTHU.course_discovery import (
        CourseDiscoveryError,
        discover_courses,
    )
    from troTHU.local_scanner import run_scanner_server
    from troTHU.notification_bus import dispatch_notification_event
    from troTHU.notification_delivery import (
        NotificationRequest,
        NotificationSendError,
        build_notification_requests as build_notification_requests_from_config,
        normalize_telegram_bot_key,
        send_notification_request,
    )
    from troTHU.observability import (
        build_observability_snapshot,
        classify_recent_events,
        format_dashboard_snapshot,
        format_log_summary,
    )
    from troTHU.package_diagnostics import build_package_diagnostic_report
    from troTHU.pending_qr import (
        DEFAULT_PENDING_QR_PROVIDER,
        add_pending_qr,
        list_pending_qr,
        match_pending_qr,
        remove_pending_qr,
    )
    from troTHU.qr_rollcall import (
        QrCodeData,
        answer_qr_rollcall,
        parse_qr_payload,
        parse_qr_payload_with_diagnostics,
    )
    from troTHU.number_rollcall import (
        NumberAttemptStatus,
        NumberCodeLookup,
        classify_number_response,
        coerce_number_code,
        parse_number_code_payload,
    )
    from troTHU.providers import (
        DEFAULT_PROVIDER,
        get_provider,
        list_all_providers,
        list_supported_providers,
        normalize_provider_config,
        provider_support_report,
        provider_registry_config,
        tronclass_api_endpoints,
    )
    from troTHU.research_mode import normalize_research_mode_config
    from troTHU.research_sandbox import (
        ResearchCaptureError,
        ResearchGateError,
        append_research_capture,
        build_browser_capture_metadata,
        build_research_status,
        capture_browser_target_metadata,
        capture_research_api_target,
        capture_rollcall_probe,
        capture_student_rollcalls_probe,
        ensure_research_allowed,
    )
    from troTHU.webview_sync import (
        WebViewSyncError,
        build_webview_cookie_preview,
        build_webview_sync_status,
        import_webview_cookies,
        parse_webview_cookie_export,
    )
    from troTHU.debug_capture import append_debug_capture
    from troTHU.radar_solver import (
        DEFAULT_BOUNDARY_POINTS,
        DistanceObservation,
        GeoPoint,
        GridCandidate,
        RadarGeometryError,
        build_probe_plan,
        choose_fourth_probe,
        final_candidate_points,
        solve_position,
        unbounded_grid_candidates,
        unbounded_grid_offsets,
    )
    from troTHU.global_radar_solver import (
        GlobalDistanceObservation,
        GlobalRadarEstimate,
        GlobalRadarSolverConfig,
        global_anchor_points,
        global_radar_solver_config_from_mapping,
        should_request_supplement,
        solve_global_radar,
        standard_sample_points,
        supplement_sample_points,
        wgs84_direct_point,
        wgs84_distance_meters,
    )
    from troTHU.radar_rollcall import (
        build_radar_answer_payload,
        build_radar_attempt_diagnostic,
        parse_radar_lite_payload,
    )
    from troTHU.radar_map_assist import build_radar_map_assist
    from troTHU.release_checklist import (
        build_release_build_plan,
        build_release_checklist,
        format_release_checklist,
    )
    from troTHU.release_builder import (
        format_release_build_summary,
        run_release_build_pipeline,
    )
    from troTHU.discord_adapter import sync_discord_command_schema
    from troTHU.discord_gateway import build_gateway_health, run_discord_gateway
    from troTHU.tron_http import (
        LOGIN_URL,
        TRON,
        LoginPageChangedError,
        LoginRejectedError,
        TronHttpClient,
        TronHttpError,
        UnauthorizedError,
        UnexpectedResponseError,
        default_endpoints,
        endpoints_from_provider,
        extract_login_form as extract_login_form_data,
        has_session_cookie as has_session_cookie_data,
    )
    from troTHU.rollcall_models import (
        AttendanceType,
        NotificationEvent,
        RollcallAction,
        RollcallDecision,
    )
    from troTHU.rollcall_engine import (
        classify_rollcall as engine_classify_rollcall,
        decide_rollcall as engine_decide_rollcall,
        select_rollcall as engine_select_rollcall,
    )
    from troTHU.runtime_helpers import (
        BIG_DIGITS,
        RadarCoordinateResult,
        TIME_RANGE_PATTERN,
        TransientCooldownDecision,
        TransientCooldownPolicy,
        TransientCooldownTracker,
        build_monitor_status_line,
        build_number_progress_message,
        build_radar_signal,
        coerce_bool,
        coerce_positive_float,
        coerce_positive_int,
        display_width,
        format_clock,
        format_countdown,
        format_found_code_banner,
        format_hhmm,
        format_radar_success_banner,
        format_rollcall_start_message,
        format_rollcall_success_banner,
        format_time_value,
        is_within_any_schedule,
        is_within_schedule,
        make_payload_excerpt,
        normalize_radar_boundary_points as runtime_normalize_radar_boundary_points,
        normalize_schedule_range,
        normalize_schedule_ranges,
        normalize_text,
        parse_radar_answer_result,
        parse_schedule_range,
        parse_schedule_ranges,
        parse_time_value,
        predict_schedule_change,
        render_big_digits,
        truncate_to_width,
    )
    from troTHU.ux_tools import (
        check_item,
        export_debug_bundle,
        file_age_seconds,
        human_age,
        json_text,
        render_check_items,
        summarize_logs,
        tail_log_records,
    )
except ImportError:
    from account_store import (
        clear_session_cookies,
        cookie_cache_enabled,
        cookie_path,
        get_active_profile,
        get_keyring_password,
        keyring_available,
        list_profiles,
        load_session_cookies,
        normalize_accounts_config,
        normalize_profile_name,
        remove_profile,
        save_session_cookies,
        set_keyring_password,
        set_profile,
        switch_profile,
    )
    from account_runtime_store import (
        load_runtime_state,
        mark_check_result,
        mark_login_result,
        mark_monitor_state,
        mark_profile_error,
        runtime_profile_summary,
        runtime_state_path,
    )
    from adapter_bridge import (
        AdapterBinding,
        binding_key,
        map_adapter_command,
    )
    from app_blueprint import (
        build_app_blueprint,
        format_app_blueprint_summary,
        validate_app_blueprint,
    )
    from app_shell import run_app_shell
    from app_shell_polish import (
        build_shell_action_catalog,
        build_shell_drilldown,
        build_shell_ui_model,
    )
    from bot_runtime import normalize_admins_config
    from connection_probe import (
        run_connection_probe,
        sanitize_probe_url,
    )
    from course_discovery import (
        CourseDiscoveryError,
        discover_courses,
    )
    from local_scanner import run_scanner_server
    from notification_bus import dispatch_notification_event
    from notification_delivery import (
        NotificationRequest,
        NotificationSendError,
        build_notification_requests as build_notification_requests_from_config,
        normalize_telegram_bot_key,
        send_notification_request,
    )
    from observability import (
        build_observability_snapshot,
        classify_recent_events,
        format_dashboard_snapshot,
        format_log_summary,
    )
    from package_diagnostics import build_package_diagnostic_report
    from pending_qr import (
        DEFAULT_PENDING_QR_PROVIDER,
        add_pending_qr,
        list_pending_qr,
        match_pending_qr,
        remove_pending_qr,
    )
    from qr_rollcall import (
        QrCodeData,
        answer_qr_rollcall,
        parse_qr_payload,
        parse_qr_payload_with_diagnostics,
    )
    from number_rollcall import (
        NumberAttemptStatus,
        NumberCodeLookup,
        classify_number_response,
        coerce_number_code,
        parse_number_code_payload,
    )
    from providers import (
        DEFAULT_PROVIDER,
        get_provider,
        list_all_providers,
        list_supported_providers,
        normalize_provider_config,
        provider_support_report,
        provider_registry_config,
        tronclass_api_endpoints,
    )
    from research_mode import normalize_research_mode_config
    from research_sandbox import (
        ResearchCaptureError,
        ResearchGateError,
        append_research_capture,
        build_browser_capture_metadata,
        build_research_status,
        capture_browser_target_metadata,
        capture_research_api_target,
        capture_rollcall_probe,
        capture_student_rollcalls_probe,
        ensure_research_allowed,
    )
    from webview_sync import (
        WebViewSyncError,
        build_webview_cookie_preview,
        build_webview_sync_status,
        import_webview_cookies,
        parse_webview_cookie_export,
    )
    from debug_capture import append_debug_capture
    from radar_solver import (
        DEFAULT_BOUNDARY_POINTS,
        DistanceObservation,
        GeoPoint,
        GridCandidate,
        RadarGeometryError,
        build_probe_plan,
        choose_fourth_probe,
        final_candidate_points,
        solve_position,
        unbounded_grid_candidates,
        unbounded_grid_offsets,
    )
    from global_radar_solver import (
        GlobalDistanceObservation,
        GlobalRadarEstimate,
        GlobalRadarSolverConfig,
        global_anchor_points,
        global_radar_solver_config_from_mapping,
        should_request_supplement,
        solve_global_radar,
        standard_sample_points,
        supplement_sample_points,
        wgs84_direct_point,
        wgs84_distance_meters,
    )
    from radar_rollcall import (
        build_radar_answer_payload,
        build_radar_attempt_diagnostic,
        parse_radar_lite_payload,
    )
    from radar_map_assist import build_radar_map_assist
    from release_checklist import (
        build_release_build_plan,
        build_release_checklist,
        format_release_checklist,
    )
    from release_builder import (
        format_release_build_summary,
        run_release_build_pipeline,
    )
    from discord_adapter import sync_discord_command_schema
    from discord_gateway import build_gateway_health, run_discord_gateway
    from tron_http import (
        LOGIN_URL,
        TRON,
        LoginPageChangedError,
        LoginRejectedError,
        TronHttpClient,
        TronHttpError,
        UnauthorizedError,
        UnexpectedResponseError,
        default_endpoints,
        endpoints_from_provider,
        extract_login_form as extract_login_form_data,
        has_session_cookie as has_session_cookie_data,
    )
    from rollcall_models import (
        AttendanceType,
        NotificationEvent,
        RollcallAction,
        RollcallDecision,
    )
    from rollcall_engine import (
        classify_rollcall as engine_classify_rollcall,
        decide_rollcall as engine_decide_rollcall,
        select_rollcall as engine_select_rollcall,
    )
    from runtime_helpers import (
        BIG_DIGITS,
        RadarCoordinateResult,
        TIME_RANGE_PATTERN,
        TransientCooldownDecision,
        TransientCooldownPolicy,
        TransientCooldownTracker,
        build_monitor_status_line,
        build_number_progress_message,
        build_radar_signal,
        coerce_bool,
        coerce_positive_float,
        coerce_positive_int,
        display_width,
        format_clock,
        format_countdown,
        format_found_code_banner,
        format_hhmm,
        format_radar_success_banner,
        format_rollcall_start_message,
        format_rollcall_success_banner,
        format_time_value,
        is_within_any_schedule,
        is_within_schedule,
        make_payload_excerpt,
        normalize_radar_boundary_points as runtime_normalize_radar_boundary_points,
        normalize_schedule_range,
        normalize_schedule_ranges,
        normalize_text,
        parse_radar_answer_result,
        parse_schedule_range,
        parse_schedule_ranges,
        parse_time_value,
        predict_schedule_change,
        render_big_digits,
        truncate_to_width,
    )
    from ux_tools import (
        check_item,
        export_debug_bundle,
        file_age_seconds,
        human_age,
        json_text,
        render_check_items,
        summarize_logs,
        tail_log_records,
    )

CURRENT_PROMPT = "切換學號 (輸入 exit 離開) > "

PROMPT_INPUT_ACTIVE = False

CONSOLE_DEFERRED_LINES: List[str] = []

LAST_STATUS = "初始化中"

# Snapshot driving the single in-place monitor status line. The renderer reads
# this every second; monitor_loop updates it instead of reprinting each poll.
#   phase: 'monitoring' | 'standby' | 'logging_in' | 'paused'
#   check_count: rolling poll counter (shown as "第 N 次" while monitoring)
#   detail: short status text (e.g. "目前無點名" or a progress message)
#   rollcall_status: optional canonical status segment (e.g. "on_call_fine")
#   next_switch_at: datetime of the next schedule transition, or None
MONITOR_STATUS: Dict[str, Any] = {
    "phase": "logging_in",
    "check_count": 0,
    "detail": "",
    "rollcall_status": "",
    "next_switch_at": None,
    "teacher_state": "off",
}

LAST_ROLLCALL_PROGRESS: Dict[str, Any] = {}

# Console status-line bookkeeping (interactive TTY only). STATUS_LINE_WIDTH is
# the display width of the currently drawn line so it can be cleared cleanly;
# STATUS_LINE_PAUSE_DEPTH > 0 suspends in-place drawing during blocking prompts.
STATUS_LINE_WIDTH = 0

STATUS_LINE_PAUSE_DEPTH = 0

CONSOLE_INTERACTIVE: Optional[bool] = None

NUMBER_CODE_LIMIT = 10000

NUMBER_WORKER_COUNT = 100

NUMBER_MIN_WORKER_COUNT = 5

NUMBER_REQUEST_RETRIES = 3

NUMBER_PROGRESS_INTERVAL = 0.5

NUMBER_COOLDOWN_SECONDS = 5.0

NUMBER_MAX_COOLDOWNS = 3

NUMBER_TRANSIENT_FAILURE_THRESHOLD = 20

NUMBER_TRANSIENT_FAILURE_RATIO = 0.35

DEFAULT_OPERATING_RANGE = ["00:00", "00:00"]

LOGIN_RETRY_DELAYS = (10.0, 30.0, 60.0, 300.0)

FATAL_NOTIFICATION_INTERVAL = 300.0

DEFAULT_HTTP_TIMEOUT_SECONDS = 20.0

DEFAULT_NOTIFICATION_TIMEOUT_SECONDS = 10.0

PLACEHOLDER_CREDENTIAL_VALUES = {
    "",
    "YOUR_STUDENT_ID",
    "YOUR_PASSWORD",
    "您的學號",
    "您的密碼",
}

DEFAULT_USER_AGENTS = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36 Edge/136.0.0.0",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/109.0.5410.0 Safari/537.36",
    "Mozilla/5.0 (Android 10; Mobile; rv:78.0) Gecko/20100101 Firefox/78.0",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:83.0) Gecko/20100101 Firefox/83.0",
]

DEFAULT_CONFIG = {
    "account": {
        "user": "YOUR_STUDENT_ID",
        "passwd": "YOUR_PASSWORD",
    },
    "teacher": {
        "user": "",
        "passwd": "",
        "school": "tronclass",
        "course": "",
    },
    "accounts": {
        "current": "default",
        "profiles": {
            "default": {
                "user": "YOUR_STUDENT_ID",
                "passwd": "YOUR_PASSWORD",
                "label": "legacy config",
                "school": "thu",
            },
        },
    },
    "provider": provider_registry_config(),
    "session": {
        "cache_cookies": True,
    },
    "auth": {
        "browser_assisted_login": {
            "enabled": False,
            "headless": True,
            "timeout_ms": 45000,
        },
    },
    "ux": {
        "pending_qr_ttl_seconds": 600,
        "debug_bundle_log_limit": 50,
    },
    "monitor": {
        "ignore_attendance_rate_gate": False,
    },
    "local_ui": {
        "host": "127.0.0.1",
        "port": 8765,
    },
    "webview": {
        "cookie_sync": {
            "enabled": False,
            "allow_cookie_import": False,
            "allowed_domains": [],
            "cookie_name_allowlist": ["session"],
            "allow_experimental_provider": False,
        },
    },
    "integrations": {
        "discord": {
            "enable": False,
            "token_env": "DISCORD_BOT_TOKEN",
            "channel_env": "DISCORD_CHANNEL_ID",
            "public_key_env": "DISCORD_PUBLIC_KEY",
            "application_id_env": "DISCORD_APPLICATION_ID",
            "guild_id_env": "DISCORD_GUILD_ID",
            "ephemeral_replies": True,
        },
        "line": {
            "enable": False,
            "token_env": "LINE_CHANNEL_ACCESS_TOKEN",
            "secret_env": "LINE_CHANNEL_SECRET",
        },
        "telegram": {
            "enable": False,
            "token_env": "TELEGRAM_BOT_TOKEN",
            "chat_env": "TELEGRAM_CHAT_ID",
        },
        "admins": {
            "discord": [],
            "line": [],
        },
        "security": {
            "allowed_channels": {
                "discord": [],
                "line": [],
            },
            "dangerous_cooldown_seconds": 30,
            "audit_log": True,
        },
        "bindings": {},
    },
    "notifications": {
        "tg": {
            "enable": False,
            "key": "",
            "chat": "",
        },
        "dc": {
            "enable": False,
            "key": "",
            "chat": "",
        },
    },
    "config": {
        "enable_log": True,
        "Senkaku": 1,
        "retries": 20,
        "http_timeout": DEFAULT_HTTP_TIMEOUT_SECONDS,
        "notification_timeout": DEFAULT_NOTIFICATION_TIMEOUT_SECONDS,
        "verify_ssl": True,
        "user-agent": list(DEFAULT_USER_AGENTS),
    },
    "time": {
        "timezone": "Asia/Taipei",
    },
    "number": {
        "concurrency": NUMBER_WORKER_COUNT,
        "min_concurrency": NUMBER_MIN_WORKER_COUNT,
        "request_retries": NUMBER_REQUEST_RETRIES,
        "cooldown_seconds": NUMBER_COOLDOWN_SECONDS,
        "max_cooldowns": NUMBER_MAX_COOLDOWNS,
        "transient_failure_threshold": NUMBER_TRANSIENT_FAILURE_THRESHOLD,
        "transient_failure_ratio": NUMBER_TRANSIENT_FAILURE_RATIO,
        "direct_code_lookup": {
            "enabled": True,
            "fallback_bruteforce": True,
        },
    },
    "radar": {
        "strategy": "empty_answer",
        "empty_answer_fallback_enabled": True,
        "boundary_points": [[lat, lon] for lat, lon in DEFAULT_BOUNDARY_POINTS],
        "allow_outside_probe": True,
        "outside_scale": 1.6,
        "max_distance_probes": 4,
        "max_final_attempts": 100,
        "final_grid_step_meters": 100.0,
        "final_grid_radius_meters": 20.0,
        "global": {
            "max_queries": 120,
            "request_retries": NUMBER_REQUEST_RETRIES,
            "cooldown_seconds": NUMBER_COOLDOWN_SECONDS,
            "max_cooldowns": NUMBER_MAX_COOLDOWNS,
            "transient_failure_threshold": NUMBER_TRANSIENT_FAILURE_THRESHOLD,
            "transient_failure_ratio": NUMBER_TRANSIENT_FAILURE_RATIO,
            "anchor_count": 12,
            "bearing_count": 12,
            "standard_radii_meters": [10000.0, 3000.0, 1000.0, 300.0, 100.0],
            "supplement_radii_meters": [300.0, 100.0, 30.0],
            "standard_query_count": 72,
            "supplement_query_count": 36,
            "present_hint_verify_enabled": True,
            "adaptive_estimate_enabled": True,
            "target_uncertainty_95_meters": 35.0,
            "robust_f_scale_meters": 50.0,
            "measurement_sigma_meters": 0.289,
            "max_pattern_iterations": 220,
            "max_lm_iterations": 60,
        },
    },
    "research": normalize_research_mode_config({}),
    "operating": {
        0: {"enable": True, "range": list(DEFAULT_OPERATING_RANGE)},
        1: {"enable": True, "range": list(DEFAULT_OPERATING_RANGE)},
        2: {"enable": True, "range": list(DEFAULT_OPERATING_RANGE)},
        3: {"enable": True, "range": list(DEFAULT_OPERATING_RANGE)},
        4: {"enable": True, "range": list(DEFAULT_OPERATING_RANGE)},
        5: {"enable": True, "range": list(DEFAULT_OPERATING_RANGE)},
        6: {"enable": True, "range": list(DEFAULT_OPERATING_RANGE)},
    },
}

YAML_ERROR_TYPES = tuple(
    error_type
    for error_type in (getattr(yaml, "YAMLError", None), ValueError)
    if isinstance(error_type, type) and issubclass(error_type, BaseException)
)

if getattr(sys, "frozen", False):
    BASE_DIR = Path(sys.executable).parent
else:
    BASE_DIR = Path(__file__).parent.parent

PATH = BASE_DIR / "log"

CONFIG_PATH = BASE_DIR / "config.yaml"
CONFIG_ADVANCED_PATH = BASE_DIR / "config.advanced.yaml"

RUNTIME_CREDENTIALS = {"user": "", "passwd": ""}

UNSUPPORTED_ROLLCALL_STATE = {"rollcall_id": None, "status": ""}

COMPLETED_NUMBER_ROLLCALLS: Dict[str, str] = {}

COMPLETED_RADAR_ROLLCALLS: Dict[str, bool] = {}

COMPLETED_QR_ROLLCALLS: Dict[str, bool] = {}

QR_ASSIST_ATTEMPTS: Dict[str, float] = {}

ACTIVE_TEACHER_QR_ASSISTS: Dict[str, Dict[str, Any]] = {}

TEACHER_SESSION = None

TEACHER_ENDPOINTS = None

TEACHER_READY = False

TEACHER_COURSE_ID = ""

BOOTSTRAP_WARNINGS: List[str] = []

CONFIG_BOOTSTRAPPED = False

LAST_FATAL_NOTIFICATION_AT = 0.0

COOKIE_CACHE_RESTORED = False
CONFIG_WARNINGS: List[str] = []

@dataclass(frozen=True)
class LoginResult:
    status: str
    credential_source: str
    user: str = ""
    final_url: str = ""
    error: str = ""

    @property
    def ok(self) -> bool:
        return self.status == "success"

    @property
    def should_auto_retry(self) -> bool:
        return self.status in {"missing_session", "transient_error"}

LAST_LOGIN_RESULT = LoginResult(status="missing_credentials", credential_source="missing")

TEACHER_LOGIN_RESULT = LoginResult(status="missing_credentials", credential_source="missing")

_LEGACY_EXPORTS = {
    '_app_shell_accounts': ('troTHU.cli_app', '_app_shell_accounts'),
    '_app_shell_drilldown': ('troTHU.cli_app', '_app_shell_drilldown'),
    '_app_shell_integrations': ('troTHU.cli_app', '_app_shell_integrations'),
    '_app_shell_logs_summary': ('troTHU.cli_app', '_app_shell_logs_summary'),
    '_app_shell_polish_reports': ('troTHU.cli_app', '_app_shell_polish_reports'),
    '_app_shell_release_check': ('troTHU.cli_app', '_app_shell_release_check'),
    '_app_shell_release_plan': ('troTHU.cli_app', '_app_shell_release_plan'),
    '_app_shell_snapshot': ('troTHU.cli_app', '_app_shell_snapshot'),
    '_app_shell_ui_model': ('troTHU.cli_app', '_app_shell_ui_model'),
    '_read_json_input': ('troTHU.cli_provider', '_read_json_input'),
    '_read_webview_cookie_input': ('troTHU.cli_app', '_read_webview_cookie_input'),
    '_research_gate_failure': ('troTHU.cli_research', '_research_gate_failure'),
    '_resolve_webview_profile': ('troTHU.cli_app', '_resolve_webview_profile'),
    '_send_notification': ('troTHU.logging_runtime', '_send_notification'),
    'account_doctor': ('troTHU.cli_accounts', 'account_doctor'),
    'account_runtime_summary': ('troTHU.status_reports', 'account_runtime_summary'),
    'account_show': ('troTHU.cli_accounts', 'account_show'),
    'account_state': ('troTHU.cli_accounts', 'account_state'),
    'account_state_report': ('troTHU.status_reports', 'account_state_report'),
    'app_blueprint_command': ('troTHU.cli_app', 'app_blueprint_command'),
    'app_main': ('troTHU.monitor_runtime', 'app_main'),
    'app_serve_command': ('troTHU.cli_app', 'app_serve_command'),
    'announce_rollcall_start': ('troTHU.rollcall_runtime', 'announce_rollcall_start'),
    'bind_account': ('troTHU.cli_accounts', 'bind_account'),
    'binding_summary': ('troTHU.status_reports', 'binding_summary'),
    'bootstrap_config': ('troTHU.config_runtime', 'bootstrap_config'),
    'bot_discord_gateway_command': ('troTHU.cli_bot', 'bot_discord_gateway_command'),
    'bot_discord_schema_command': ('troTHU.cli_bot', 'bot_discord_schema_command'),
    'bot_discord_sync_command': ('troTHU.cli_bot', 'bot_discord_sync_command'),
    'bot_serve_command': ('troTHU.cli_bot', 'bot_serve_command'),
    'build_arg_parser': ('troTHU.cli_parser', 'build_arg_parser'),
    'browser_assisted_login': ('troTHU.auth_runtime', 'browser_assisted_login'),
    'browser_assisted_login_available': ('troTHU.auth_runtime', 'browser_assisted_login_available'),
    'browser_assisted_login_status': ('troTHU.auth_runtime', 'browser_assisted_login_status'),
    'build_fatal_error_report': ('troTHU.logging_runtime', 'build_fatal_error_report'),
    'build_notification_requests': ('troTHU.logging_runtime', 'build_notification_requests'),
    'build_qr_preview': ('troTHU.qr_runtime', 'build_qr_preview'),
    'build_teacher_endpoints': ('troTHU.qr_teacher_runtime', 'build_teacher_endpoints'),
    'build_teacher_rollcall_payload': ('troTHU.teacher_rollcall', 'build_teacher_rollcall_payload'),
    'build_user_config': ('troTHU.config_view', 'build_user_config'),
    'check_rollcall': ('troTHU.rollcall_runtime', 'check_rollcall'),
    'classify_rollcall': ('troTHU.rollcall_runtime', 'classify_rollcall'),
    'clear_runtime_credentials': ('troTHU.config_runtime', 'clear_runtime_credentials'),
    'clone_session_cookies': ('troTHU.auth_runtime', 'clone_session_cookies'),
    'config_compact_command': ('troTHU.cli_system', 'config_compact_command'),
    'config_advanced_command': ('troTHU.cli_system', 'config_advanced_command'),
    'config_doctor_command': ('troTHU.cli_system', 'config_doctor_command'),
    'config_doctor_report': ('troTHU.config_view', 'config_doctor_report'),
    'config_show_command': ('troTHU.cli_system', 'config_show_command'),
    'config_summary': ('troTHU.cli_accounts', 'config_summary'),
    'config_view_summary': ('troTHU.config_view', 'config_view_summary'),
    'consume_bootstrap_warnings': ('troTHU.config_runtime', 'consume_bootstrap_warnings'),
    'cookie_report': ('troTHU.status_reports', 'cookie_report'),
    'course_discovery_report': ('troTHU.status_reports', 'course_discovery_report'),
    'courses_command': ('troTHU.cli_courses', 'courses_command'),
    'capture_rollcall_probe': ('troTHU.research_sandbox', 'capture_rollcall_probe'),
    'capture_student_rollcalls_probe': ('troTHU.research_sandbox', 'capture_student_rollcalls_probe'),
    'validate_probe_target': ('troTHU.research_sandbox', 'validate_probe_target'),
    'RISKY_PROBE_TARGETS': ('troTHU.research_sandbox', 'RISKY_PROBE_TARGETS'),
    'PROBE_TARGETS_NEED_ROLLCALL_ID': ('troTHU.research_sandbox', 'PROBE_TARGETS_NEED_ROLLCALL_ID'),
    'create_client_timeout': ('troTHU.auth_runtime', 'create_client_timeout'),
    'create_http_client_timeout': ('troTHU.auth_runtime', 'create_http_client_timeout'),
    'create_http_connector': ('troTHU.auth_runtime', 'create_http_connector'),
    'create_notification_timeout': ('troTHU.auth_runtime', 'create_notification_timeout'),
    'create_tron_http_client': ('troTHU.auth_runtime', 'create_tron_http_client'),
    'credential_report': ('troTHU.status_reports', 'credential_report'),
    'current_datetime': ('troTHU.config_runtime', 'current_datetime'),
    'daily_log_path': ('troTHU.logging_runtime', 'daily_log_path'),
    'dashboard_command': ('troTHU.cli_system', 'dashboard_command'),
    'debug_capture_command': ('troTHU.cli_research', 'debug_capture_command'),
    'decide_rollcall': ('troTHU.rollcall_runtime', 'decide_rollcall'),
    'decode_qr_image_file': ('troTHU.qr_runtime', 'decode_qr_image_file'),
    'doctor': ('troTHU.status_reports', 'doctor'),
    'doctor_report': ('troTHU.status_reports', 'doctor_report'),
    'enable_insecure_ssl_fallback': ('troTHU.auth_runtime', 'enable_insecure_ssl_fallback'),
    'ensure_teacher_ready': ('troTHU.qr_teacher_runtime', 'ensure_teacher_ready'),
    'ensure_config_exists': ('troTHU.config_runtime', 'ensure_config_exists'),
    'extract_login_form': ('troTHU.auth_runtime', 'extract_login_form'),
    'extract_rollcall_id': ('troTHU.teacher_rollcall', 'extract_rollcall_id'),
    'fallback_to_browser_assisted_login': ('troTHU.auth_runtime', 'fallback_to_browser_assisted_login'),
    'finalize_qr_submission': ('troTHU.qr_runtime', 'finalize_qr_submission'),
    'find_profile': ('troTHU.status_reports', 'find_profile'),
    'format_config_doctor': ('troTHU.config_view', 'format_config_doctor'),
    'get_active_http_endpoints': ('troTHU.status_reports', 'get_active_http_endpoints'),
    'get_active_provider_config': ('troTHU.status_reports', 'get_active_provider_config'),
    'get_active_provider_definition': ('troTHU.status_reports', 'get_active_provider_definition'),
    'get_active_provider_key': ('troTHU.status_reports', 'get_active_provider_key'),
    'get_browser_assisted_login_config': ('troTHU.auth_runtime', 'get_browser_assisted_login_config'),
    'get_config_timezone': ('troTHU.config_runtime', 'get_config_timezone'),
    'get_config_timezone_name': ('troTHU.config_runtime', 'get_config_timezone_name'),
    'get_environment_credentials': ('troTHU.config_runtime', 'get_environment_credentials'),
    'get_ignore_attendance_rate_gate': ('troTHU.config_runtime', 'get_ignore_attendance_rate_gate'),
    'get_http_timeout_seconds': ('troTHU.auth_runtime', 'get_http_timeout_seconds'),
    'get_login_retry_delay': ('troTHU.auth_runtime', 'get_login_retry_delay'),
    'get_notification_timeout_seconds': ('troTHU.auth_runtime', 'get_notification_timeout_seconds'),
    'get_number_config': ('troTHU.config_runtime', 'get_number_config'),
    'get_poll_interval': ('troTHU.config_runtime', 'get_poll_interval'),
    'get_radar_config': ('troTHU.config_runtime', 'get_radar_config'),
    'get_retry_limit': ('troTHU.config_runtime', 'get_retry_limit'),
    'get_runtime_credentials': ('troTHU.config_runtime', 'get_runtime_credentials'),
    'get_schedule_for_day': ('troTHU.config_runtime', 'get_schedule_for_day'),
    'get_session_id_header': ('troTHU.auth_runtime', 'get_session_id_header'),
    'get_ssl_request_setting': ('troTHU.auth_runtime', 'get_ssl_request_setting'),
    'get_teacher_config': ('troTHU.qr_teacher_runtime', 'get_teacher_config'),
    'get_verify_ssl': ('troTHU.auth_runtime', 'get_verify_ssl'),
    'handle_account_command': ('troTHU.cli_accounts', 'handle_account_command'),
    'handle_rollcall_decision': ('troTHU.rollcall_runtime', 'handle_rollcall_decision'),
    'has_real_credential': ('troTHU.config_runtime', 'has_real_credential'),
    'has_session_cookie': ('troTHU.auth_runtime', 'has_session_cookie'),
    'init_command': ('troTHU.cli_system', 'init_command'),
    'integration_report': ('troTHU.status_reports', 'integration_report'),
    'is_completed_number_rollcall': ('troTHU.rollcall_runtime', 'is_completed_number_rollcall'),
    'is_placeholder_credential': ('troTHU.config_runtime', 'is_placeholder_credential'),
    'is_ssl_certificate_verification_error': ('troTHU.auth_runtime', 'is_ssl_certificate_verification_error'),
    'load_config': ('troTHU.config_runtime', 'load_config'),
    'load_advanced_config': ('troTHU.config_runtime', 'load_advanced_config'),
    'log': ('troTHU.logging_runtime', 'log'),
    'log_print': ('troTHU.logging_runtime', 'log_print'),
    'flush_console_output': ('troTHU.logging_runtime', 'flush_console_output'),
    'console_is_interactive': ('troTHU.logging_runtime', 'console_is_interactive'),
    'update_monitor_status': ('troTHU.logging_runtime', 'update_monitor_status'),
    'reset_monitor_status': ('troTHU.logging_runtime', 'reset_monitor_status'),
    'render_status_line': ('troTHU.logging_runtime', 'render_status_line'),
    'clear_status_line': ('troTHU.logging_runtime', 'clear_status_line'),
    'pause_status_line': ('troTHU.logging_runtime', 'pause_status_line'),
    'login': ('troTHU.auth_runtime', 'login'),
    'login_test_command': ('troTHU.cli_courses', 'login_test_command'),
    'logs_command': ('troTHU.cli_system', 'logs_command'),
    'main': ('troTHU.cli_main', 'main'),
    'make_config_backup_path': ('troTHU.config_runtime', 'make_config_backup_path'),
    'mark_completed_number_rollcall': ('troTHU.rollcall_runtime', 'mark_completed_number_rollcall'),
    'maybe_notify_unsupported_rollcall': ('troTHU.rollcall_runtime', 'maybe_notify_unsupported_rollcall'),
    'mes': ('troTHU.logging_runtime', 'mes'),
    'module_available': ('troTHU.status_reports', 'module_available'),
    'monitor_loop': ('troTHU.monitor_runtime', 'monitor_loop'),
    'status_line_loop': ('troTHU.monitor_runtime', 'status_line_loop'),
    'next_schedule_transition': ('troTHU.monitor_runtime', 'next_schedule_transition'),
    'normalize_config': ('troTHU.config_runtime', 'normalize_config'),
    'normalize_radar_boundary_points': ('troTHU.config_runtime', 'normalize_radar_boundary_points'),
    'normalize_rollcall_kind': ('troTHU.teacher_rollcall', 'normalize_rollcall_kind'),
    'list_all_providers': ('troTHU.providers', 'list_all_providers'),
    'notification_report': ('troTHU.status_reports', 'notification_report'),
    'notify_event': ('troTHU.logging_runtime', 'notify_event'),
    'number': ('troTHU.number_runtime', 'number'),
    'number_log_path': ('troTHU.logging_runtime', 'number_log_path'),
    'number_rollcall_key': ('troTHU.rollcall_runtime', 'number_rollcall_key'),
    'package_check': ('troTHU.cli_system', 'package_check'),
    'pending_qr_summary': ('troTHU.status_reports', 'pending_qr_summary'),
    'print_pending_qr': ('troTHU.qr_runtime', 'print_pending_qr'),
    'print_qr_preview': ('troTHU.qr_runtime', 'print_qr_preview'),
    'print_status': ('troTHU.status_reports', 'print_status'),
    'parse_simple_config_text': ('troTHU.simple_config', 'parse_simple_config_text'),
    'provider_block_message': ('troTHU.status_reports', 'provider_block_message'),
    'provider_guard_result': ('troTHU.status_reports', 'provider_guard_result'),
    'provider_is_daily_allowed': ('troTHU.status_reports', 'provider_is_daily_allowed'),
    'provider_list_command': ('troTHU.cli_provider', 'provider_list_command'),
    'provider_prefers_browser_assisted_login': ('troTHU.auth_runtime', 'provider_prefers_browser_assisted_login'),
    'provider_requires_api_session_validation': ('troTHU.auth_runtime', 'provider_requires_api_session_validation'),
    'provider_requires_manual_cookie_login': ('troTHU.auth_runtime', 'provider_requires_manual_cookie_login'),
    'provider_report': ('troTHU.status_reports', 'provider_report'),
    'provider_show_command': ('troTHU.cli_provider', 'provider_show_command'),
    'provider_summary': ('troTHU.cli_provider', 'provider_summary'),
    'poll_rollcall_decision': ('troTHU.rollcall_runtime', 'poll_rollcall_decision'),
    'prepare_teacher_assisted_qr': ('troTHU.qr_teacher_runtime', 'prepare_teacher_assisted_qr'),
    'qr_command': ('troTHU.cli_qr', 'qr_command'),
    'qr_fanout_command': ('troTHU.qr_runtime', 'qr_fanout_command'),
    'qr_fanout_result': ('troTHU.qr_runtime', 'qr_fanout_result'),
    'qr_image_command': ('troTHU.qr_runtime', 'qr_image_command'),
    'qr_paste_command': ('troTHU.qr_runtime', 'qr_paste_command'),
    'qr_scanner_submit': ('troTHU.qr_runtime', 'qr_scanner_submit'),
    'radar': ('troTHU.radar_runtime', 'radar'),
    'random_id': ('troTHU.auth_runtime', 'random_id'),
    'random_ua': ('troTHU.auth_runtime', 'random_ua'),
    'masked_login_user': ('troTHU.auth_runtime', 'masked_login_user'),
    'record_check_runtime': ('troTHU.rollcall_runtime', 'record_check_runtime'),
    'try_clipboard_qr_autosubmit': ('troTHU.rollcall_runtime', 'try_clipboard_qr_autosubmit'),
    'read_clipboard_qr_payload': ('troTHU.clipboard_qr', 'read_clipboard_qr_payload'),
    'clipboard_autosubmit_enabled': ('troTHU.clipboard_qr', 'clipboard_autosubmit_enabled'),
    'report_rollcall_progress': ('troTHU.rollcall_progress', 'report_rollcall_progress'),
    'fetch_rollcall_progress': ('troTHU.rollcall_progress', 'fetch_rollcall_progress'),
    'format_rollcall_progress_text': ('troTHU.rollcall_progress', 'format_rollcall_progress_text'),
    'format_attendance_rate_text': ('troTHU.rollcall_progress', 'format_attendance_rate_text'),
    'remember_rollcall_progress': ('troTHU.rollcall_progress', 'remember_rollcall_progress'),
    'clear_rollcall_progress': ('troTHU.rollcall_progress', 'clear_rollcall_progress'),
    'summarize_rollcall_progress': ('troTHU.rollcall_progress', 'summarize_rollcall_progress'),
    'verify_rollcall_on_call_fine': ('troTHU.rollcall_progress', 'verify_rollcall_on_call_fine'),
    'record_login_runtime': ('troTHU.auth_runtime', 'record_login_runtime'),
    'record_monitor_runtime': ('troTHU.monitor_runtime', 'record_monitor_runtime'),
    'record_runtime_error': ('troTHU.rollcall_runtime', 'record_runtime_error'),
    'release_build_command': ('troTHU.cli_system', 'release_build_command'),
    'release_check_command': ('troTHU.cli_system', 'release_check_command'),
    'report_fatal_exception': ('troTHU.logging_runtime', 'report_fatal_exception'),
    'render_compact_config': ('troTHU.config_view', 'render_compact_config'),
    'render_simple_config': ('troTHU.simple_config', 'render_simple_config'),
    'research_api_command': ('troTHU.cli_research', 'research_api_command'),
    'research_browser_capture_command': ('troTHU.cli_research', 'research_browser_capture_command'),
    'research_browser_check_command': ('troTHU.cli_research', 'research_browser_check_command'),
    'research_probe_command': ('troTHU.cli_research', 'research_probe_command'),
    'research_report': ('troTHU.status_reports', 'research_report'),
    'research_status_command': ('troTHU.cli_research', 'research_status_command'),
    'redacted_login_user': ('troTHU.auth_runtime', 'redacted_login_user'),
    'run_connection_probe': ('troTHU.connection_probe', 'run_connection_probe'),
    'reset_unsupported_rollcall_state': ('troTHU.rollcall_runtime', 'reset_unsupported_rollcall_state'),
    'resolve_credentials': ('troTHU.config_runtime', 'resolve_credentials'),
    'resolve_teacher_credentials': ('troTHU.config_runtime', 'resolve_teacher_credentials'),
    'resolve_teacher_course_id': ('troTHU.qr_teacher_runtime', 'resolve_teacher_course_id'),
    'merge_simple_and_advanced_config': ('troTHU.simple_config', 'merge_simple_and_advanced_config'),
    'split_normalized_config': ('troTHU.simple_config', 'split_normalized_config'),
    'is_simple_config_text': ('troTHU.simple_config', 'is_simple_config_text'),
    'infer_single_account_now': ('troTHU.simple_config', 'infer_single_account_now'),
    'open_config_in_legacy_notepad': ('troTHU.config_editor', 'open_config_in_legacy_notepad'),
    'ensure_config_now_or_open_editor': ('troTHU.config_editor', 'ensure_config_now_or_open_editor'),
    'reload_config_after_editor': ('troTHU.config_editor', 'reload_config_after_editor'),
    'watch_any_key_to_edit_config': ('troTHU.config_editor', 'watch_any_key_to_edit_config'),
    'config_now_value': ('troTHU.config_editor', 'config_now_value'),
    'effective_config_now_value': ('troTHU.config_editor', 'effective_config_now_value'),
    'resolve_now_target': ('troTHU.group_runtime', 'resolve_now_target'),
    'build_group_execution_plan': ('troTHU.group_runtime', 'build_group_execution_plan'),
    'submit_group_qr': ('troTHU.group_runtime', 'submit_group_qr'),
    'submit_group_number': ('troTHU.group_runtime', 'submit_group_number'),
    'submit_group_radar': ('troTHU.group_runtime', 'submit_group_radar'),
    'run_monitor_forever': ('troTHU.monitor_runtime', 'run_monitor_forever'),
    'run_teacher_assisted_qr': ('troTHU.qr_teacher_runtime', 'run_teacher_assisted_qr'),
    'save_account_for_next_launch': ('troTHU.config_runtime', 'save_account_for_next_launch'),
    'save_config': ('troTHU.config_runtime', 'save_config'),
    'sanitize_config_values': ('troTHU.input_safety', 'sanitize_config_values'),
    'sanitize_input_field': ('troTHU.input_safety', 'sanitize_input_field'),
    'sanitize_probe_url': ('troTHU.connection_probe', 'sanitize_probe_url'),
    'safe_qr_image_decode_report': ('troTHU.qr_runtime', 'safe_qr_image_decode_report'),
    'masked_password_input': ('troTHU.input_safety', 'masked_password_input'),
    'select_rollcall': ('troTHU.rollcall_runtime', 'select_rollcall'),
    'set_notification_sinks': ('troTHU.logging_runtime', 'set_notification_sinks'),
    'set_runtime_credentials': ('troTHU.config_runtime', 'set_runtime_credentials'),
    'should_auto_login_without_session': ('troTHU.auth_runtime', 'should_auto_login_without_session'),
    'should_try_browser_assisted_login': ('troTHU.auth_runtime', 'should_try_browser_assisted_login'),
    'sleep_or_shutdown': ('troTHU.monitor_runtime', 'sleep_or_shutdown'),
    'status_print': ('troTHU.logging_runtime', 'status_print'),
    'status_report': ('troTHU.status_reports', 'status_report'),
    'stop_prepared_teacher_qr': ('troTHU.qr_teacher_runtime', 'stop_prepared_teacher_qr'),
    'submit_qr_payload': ('troTHU.qr_runtime', 'submit_qr_payload'),
    'submit_qr_with_data': ('troTHU.qr_runtime', 'submit_qr_with_data'),
    'submit_prepared_teacher_qr': ('troTHU.qr_teacher_runtime', 'submit_prepared_teacher_qr'),
    'teacher_assist_configured': ('troTHU.qr_teacher_runtime', 'teacher_assist_configured'),
    'teacher_assist_report': ('troTHU.status_reports', 'teacher_assist_report'),
    'teacher_command': ('troTHU.cli_teacher', 'teacher_command'),
    'teacher_login': ('troTHU.qr_teacher_runtime', 'teacher_login'),
    'teacher_stop_path': ('troTHU.teacher_rollcall', 'teacher_stop_path'),
    'tronclass_api_endpoints': ('troTHU.providers', 'tronclass_api_endpoints'),
    'unbind_account': ('troTHU.cli_accounts', 'unbind_account'),
    'validate_login_api_session': ('troTHU.auth_runtime', 'validate_login_api_session'),
    'webview_import_command': ('troTHU.cli_app', 'webview_import_command'),
    'webview_preview_command': ('troTHU.cli_app', 'webview_preview_command'),
    'webview_status_command': ('troTHU.cli_app', 'webview_status_command'),
    'write_config_file': ('troTHU.config_runtime', 'write_config_file'),
    'write_advanced_config_file': ('troTHU.config_runtime', 'write_advanced_config_file'),
    'write_compact_config': ('troTHU.config_view', 'write_compact_config'),
}

def __getattr__(name: str):
    if name in _LEGACY_EXPORTS:
        module_name, attr_name = _LEGACY_EXPORTS[name]
        try:
            module = importlib.import_module(module_name)
        except ImportError:  # pragma: no cover - direct script fallback
            module = importlib.import_module(module_name.removeprefix("troTHU."))
        value = getattr(module, attr_name)
        globals()[name] = value
        return value
    raise AttributeError(name)

def __dir__():
    return sorted(set(globals()) | set(_LEGACY_EXPORTS))

CONFIG = copy.deepcopy(DEFAULT_CONFIG)
NOTIFICATION_SINKS = []
IS_LOGGING_IN = False
cnt = 0

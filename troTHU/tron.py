import asyncio
import copy
import html
import hashlib
import json
import os
import random
import string
import sys
import time
import traceback
from dataclasses import dataclass
from datetime import datetime
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

import aiohttp
import yaml

try:
    from troTHU.tron_http import (
        LOGIN_URL,
        TRON,
        LoginRejectedError,
        TronHttpClient,
        TronHttpError,
        UnauthorizedError,
        UnexpectedResponseError,
        extract_login_form as extract_login_form_data,
        has_session_cookie as has_session_cookie_data,
    )
except ImportError:
    from tron_http import (
        LOGIN_URL,
        TRON,
        LoginRejectedError,
        TronHttpClient,
        TronHttpError,
        UnauthorizedError,
        UnexpectedResponseError,
        extract_login_form as extract_login_form_data,
        has_session_cookie as has_session_cookie_data,
    )

CURRENT_PROMPT = "切換學號 (輸入 exit 離開) > "
LAST_STATUS = "初始化中"
NUMBER_CODE_LIMIT = 10000
NUMBER_WORKER_COUNT = 100
NUMBER_REQUEST_RETRIES = 3
NUMBER_PROGRESS_INTERVAL = 0.5
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

BIG_DIGITS = {
    "0": [" ### ", "#   #", "#   #", "#   #", " ### "],
    "1": ["  #  ", " ##  ", "  #  ", "  #  ", " ### "],
    "2": [" ### ", "#   #", "   # ", "  #  ", "#####"],
    "3": ["#### ", "    #", " ### ", "    #", "#### "],
    "4": ["#   #", "#   #", "#####", "    #", "    #"],
    "5": ["#####", "#    ", "#### ", "    #", "#### "],
    "6": [" ### ", "#    ", "#### ", "#   #", " ### "],
    "7": ["#####", "    #", "   # ", "  #  ", "  #  "],
    "8": [" ### ", "#   #", " ### ", "#   #", " ### "],
    "9": [" ### ", "#   #", " ####", "    #", " ### "],
    "?": ["#####", "    #", "  ## ", "     ", "  #  "],
}

YAML_ERROR_TYPES = tuple(
    error_type
    for error_type in (getattr(yaml, "YAMLError", None), ValueError)
    if isinstance(error_type, type) and issubclass(error_type, BaseException)
)

def log_print(msg: Any) -> None:
    sys.stdout.write(
        f"\r\033[K\033[1A\r\033[K{str(msg).strip()}\n[狀態] {LAST_STATUS}\n{CURRENT_PROMPT}"
    )
    sys.stdout.flush()


def status_print(msg: Any) -> None:
    global LAST_STATUS
    LAST_STATUS = str(msg).strip()
    sys.stdout.write(f"\0337\033[1A\r\033[K[狀態] {LAST_STATUS}\0338")
    sys.stdout.flush()


if getattr(sys, "frozen", False):
    BASE_DIR = Path(sys.executable).parent
else:
    BASE_DIR = Path(__file__).parent.parent

PATH = BASE_DIR / "log"
CONFIG_PATH = BASE_DIR / "config.yaml"
RUNTIME_CREDENTIALS = {"user": "", "passwd": ""}
UNSUPPORTED_ROLLCALL_STATE = {"rollcall_id": None, "status": ""}
BOOTSTRAP_WARNINGS: List[str] = []
CONFIG_BOOTSTRAPPED = False
LAST_FATAL_NOTIFICATION_AT = 0.0


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


@dataclass(frozen=True)
class NotificationRequest:
    channel: str
    label: str
    method: str
    url: str
    data: Optional[Dict[str, str]] = None
    headers: Optional[Dict[str, str]] = None
    json_body: Optional[Dict[str, Any]] = None


class NotificationSendError(Exception):
    def __init__(self, channel: str, message: str, status_code: int = 0) -> None:
        super().__init__(message)
        self.channel = channel
        self.status_code = status_code


def normalize_text(value: Any) -> str:
    return str(value or "").strip()


def coerce_bool(value: Any, default: bool) -> bool:
    if isinstance(value, bool):
        return value
    if isinstance(value, (int, float)):
        return bool(value)
    if isinstance(value, str):
        normalized = value.strip().lower()
        if normalized in {"1", "true", "yes", "on", "enable", "enabled"}:
            return True
        if normalized in {"0", "false", "no", "off", "disable", "disabled"}:
            return False
    return default


def coerce_positive_float(value: Any, default: float, minimum: float = 0.1) -> float:
    try:
        numeric = float(value)
    except (TypeError, ValueError):
        return default
    return max(numeric, minimum)


def is_placeholder_credential(value: Any) -> bool:
    return normalize_text(value) in PLACEHOLDER_CREDENTIAL_VALUES


def has_real_credential(value: Any) -> bool:
    normalized = normalize_text(value)
    return bool(normalized) and not is_placeholder_credential(normalized)


def set_runtime_credentials(user: str, password: str) -> None:
    RUNTIME_CREDENTIALS["user"] = normalize_text(user)
    RUNTIME_CREDENTIALS["passwd"] = normalize_text(password)


def clear_runtime_credentials() -> None:
    set_runtime_credentials("", "")


def get_runtime_credentials() -> Tuple[str, str]:
    return (
        normalize_text(RUNTIME_CREDENTIALS.get("user")),
        normalize_text(RUNTIME_CREDENTIALS.get("passwd")),
    )


def get_environment_credentials() -> Tuple[str, str]:
    return (
        normalize_text(os.getenv("TRON_USER")),
        normalize_text(os.getenv("TRON_PASS")),
    )


def resolve_credentials() -> Tuple[str, str, str]:
    runtime_user, runtime_passwd = get_runtime_credentials()
    if has_real_credential(runtime_user) and has_real_credential(runtime_passwd):
        return runtime_user, runtime_passwd, "runtime"

    env_user, env_passwd = get_environment_credentials()
    if has_real_credential(env_user) and has_real_credential(env_passwd):
        return env_user, env_passwd, "environment"

    account = CONFIG.get("account", {})
    config_user = normalize_text(account.get("user"))
    config_password = normalize_text(account.get("passwd"))
    if has_real_credential(config_user) and has_real_credential(config_password):
        return config_user, config_password, "config"

    return "", "", "missing"


def save_account_for_next_launch(user: str, password: str) -> bool:
    CONFIG["account"]["user"] = normalize_text(user)
    CONFIG["account"]["passwd"] = normalize_text(password)
    return save_config()


def make_payload_excerpt(payload: Any, limit: int = 500) -> Optional[str]:
    if payload is None:
        return None
    if isinstance(payload, str):
        text = payload
    else:
        text = json.dumps(payload, ensure_ascii=False, default=str)
    if len(text) > limit:
        return text[:limit] + "...(truncated)"
    return text


def daily_log_path(today: Optional[datetime] = None) -> Path:
    today = today or datetime.now()
    return PATH / str(today.year) / str(today.month) / "{}.jsonl".format(today.day)


def number_log_path(rcid: int) -> Path:
    return PATH / "num" / "{}.jsonl".format(rcid)


def classify_rollcall(rollcall: Dict[str, Any]) -> Tuple[str, str, str]:
    rollcall_type_value = normalize_text(
        rollcall.get("type") or rollcall.get("rollcall_type") or rollcall.get("name")
    ).lower()

    if rollcall.get("is_radar") or "radar" in rollcall_type_value:
        return "unsupported_radar", "radar", "偵測到未支援的 radar 點名"

    qrcode_keys = (
        "is_qrcode",
        "is_qr_code",
        "is_qr",
        "qrcode",
        "qr_code",
        "qrcode_url",
    )
    if any(rollcall.get(key) for key in qrcode_keys) or "qr" in rollcall_type_value:
        return "unsupported_qrcode", "qrcode", "偵測到未支援的 QR Code 點名"

    return "unsupported_rollcall", "unknown", "偵測到未支援的點名類型"


def reset_unsupported_rollcall_state() -> None:
    UNSUPPORTED_ROLLCALL_STATE["rollcall_id"] = None
    UNSUPPORTED_ROLLCALL_STATE["status"] = ""


async def maybe_notify_unsupported_rollcall(
    status: str,
    rollcall: Dict[str, Any],
    message: str,
    rollcall_type: str,
) -> None:
    rollcall_id = rollcall.get("rollcall_id")
    if (
        UNSUPPORTED_ROLLCALL_STATE.get("rollcall_id") == rollcall_id
        and UNSUPPORTED_ROLLCALL_STATE.get("status") == status
    ):
        return

    UNSUPPORTED_ROLLCALL_STATE["rollcall_id"] = rollcall_id
    UNSUPPORTED_ROLLCALL_STATE["status"] = status
    log_print(message)
    await mes(message)
    log(
        event="unsupported_rollcall_detected",
        status=status,
        rollcall_id=rollcall_id,
        rollcall_type=rollcall_type,
        message=message,
        payload_excerpt=rollcall,
    )


def write_config_file(config: Dict[str, Any]) -> None:
    CONFIG_PATH.parent.mkdir(parents=True, exist_ok=True)
    with open(CONFIG_PATH, "w", encoding="utf-8") as file:
        yaml.safe_dump(config, file, allow_unicode=True, sort_keys=False)


def normalize_config(raw_config: Any) -> Dict[str, Any]:
    if not isinstance(raw_config, dict):
        raw_config = {}

    config = raw_config

    account = config.setdefault("account", {})
    if not isinstance(account, dict):
        account = {}
        config["account"] = account
    account.setdefault("user", DEFAULT_CONFIG["account"]["user"])
    account.setdefault("passwd", DEFAULT_CONFIG["account"]["passwd"])

    notifications = config.setdefault("notifications", {})
    if not isinstance(notifications, dict):
        notifications = {}
        config["notifications"] = notifications
    for channel in ("tg", "dc"):
        channel_config = notifications.setdefault(channel, {})
        if not isinstance(channel_config, dict):
            channel_config = {}
            notifications[channel] = channel_config
        channel_config["enable"] = coerce_bool(
            channel_config.get("enable", DEFAULT_CONFIG["notifications"][channel]["enable"]),
            DEFAULT_CONFIG["notifications"][channel]["enable"],
        )
        channel_config.setdefault("key", DEFAULT_CONFIG["notifications"][channel]["key"])
        channel_config.setdefault("chat", DEFAULT_CONFIG["notifications"][channel]["chat"])

    runtime_config = config.setdefault("config", {})
    if not isinstance(runtime_config, dict):
        runtime_config = {}
        config["config"] = runtime_config
    runtime_config.setdefault("enable_log", DEFAULT_CONFIG["config"]["enable_log"])
    runtime_config.setdefault("Senkaku", DEFAULT_CONFIG["config"]["Senkaku"])
    runtime_config.setdefault("retries", DEFAULT_CONFIG["config"]["retries"])
    runtime_config["http_timeout"] = coerce_positive_float(
        runtime_config.get("http_timeout", DEFAULT_CONFIG["config"]["http_timeout"]),
        DEFAULT_CONFIG["config"]["http_timeout"],
    )
    runtime_config["notification_timeout"] = coerce_positive_float(
        runtime_config.get(
            "notification_timeout", DEFAULT_CONFIG["config"]["notification_timeout"]
        ),
        DEFAULT_CONFIG["config"]["notification_timeout"],
    )
    runtime_config["verify_ssl"] = coerce_bool(
        runtime_config.get("verify_ssl", DEFAULT_CONFIG["config"]["verify_ssl"]),
        DEFAULT_CONFIG["config"]["verify_ssl"],
    )
    user_agents = runtime_config.get("user-agent")
    if not isinstance(user_agents, list):
        user_agents = []
    user_agents = [str(agent).strip() for agent in user_agents if str(agent).strip()]
    runtime_config["user-agent"] = user_agents or list(DEFAULT_USER_AGENTS)

    operating = config.setdefault("operating", {})
    if not isinstance(operating, dict):
        operating = {}

    normalized_operating = {}
    for day, default_schedule in DEFAULT_CONFIG["operating"].items():
        raw_schedule = operating.get(day, operating.get(str(day), {}))
        merged = copy.deepcopy(default_schedule)
        if isinstance(raw_schedule, dict):
            if "enable" in raw_schedule:
                merged["enable"] = coerce_bool(raw_schedule["enable"], default_schedule["enable"])
            time_range = raw_schedule.get("range")
            if isinstance(time_range, list) and len(time_range) == 2:
                merged["range"] = [str(time_range[0]), str(time_range[1])]
        normalized_operating[day] = merged
    config["operating"] = normalized_operating

    return config


def ensure_config_exists() -> None:
    if not CONFIG_PATH.exists():
        write_config_file(copy.deepcopy(DEFAULT_CONFIG))


def load_config() -> Dict[str, Any]:
    ensure_config_exists()
    with open(CONFIG_PATH, "r", encoding="utf-8") as file:
        return normalize_config(yaml.safe_load(file) or {})


def make_config_backup_path(now: Optional[datetime] = None) -> Path:
    timestamp = (now or datetime.now()).strftime("%Y%m%d-%H%M%S")
    return CONFIG_PATH.with_name("{}-broken-{}{}".format(CONFIG_PATH.stem, timestamp, CONFIG_PATH.suffix))


def bootstrap_config(force: bool = False) -> Dict[str, Any]:
    global CONFIG_BOOTSTRAPPED, BOOTSTRAP_WARNINGS

    if CONFIG_BOOTSTRAPPED and not force:
        return CONFIG

    warnings: List[str] = []
    config = copy.deepcopy(DEFAULT_CONFIG)

    try:
        config = load_config()
    except YAML_ERROR_TYPES as exc:
        backup_path = None
        if CONFIG_PATH.exists():
            try:
                backup_path = CONFIG_PATH.replace(make_config_backup_path())
            except OSError as backup_exc:
                warnings.append("config.yaml 讀取失敗，且無法備份原始檔案: {}".format(backup_exc))
        try:
            write_config_file(copy.deepcopy(DEFAULT_CONFIG))
            if backup_path is not None:
                warnings.append(
                    "config.yaml 已損毀，已備份為 {}，並重建為預設設定。".format(backup_path.name)
                )
            else:
                warnings.append("config.yaml 已損毀，已重建為預設設定。")
        except OSError as write_exc:
            warnings.append(
                "config.yaml 已損毀，且無法重建設定檔；本次將使用內建預設設定。{}".format(
                    " ({})".format(write_exc)
                )
            )
    except OSError as exc:
        warnings.append(
            "無法讀取或建立 config.yaml，將使用內建預設設定；本次無法保存設定。 ({})".format(
                exc
            )
        )

    if not config.get("config", {}).get("verify_ssl", True):
        warnings.append("警告: 已停用 TLS 憑證驗證 (`config.verify_ssl=false`)。")

    CONFIG.clear()
    CONFIG.update(normalize_config(config))
    BOOTSTRAP_WARNINGS = warnings
    CONFIG_BOOTSTRAPPED = True
    return CONFIG


def consume_bootstrap_warnings() -> List[str]:
    warnings = list(BOOTSTRAP_WARNINGS)
    BOOTSTRAP_WARNINGS.clear()
    return warnings


def save_config() -> bool:
    try:
        write_config_file(normalize_config(CONFIG))
    except OSError:
        return False
    return True


CONFIG = copy.deepcopy(DEFAULT_CONFIG)


def random_id() -> str:
    chars = string.ascii_letters + string.digits
    return "".join(random.choices(chars, k=16))


def random_ua() -> str:
    ua_list = CONFIG.get("config", {}).get("user-agent", [])
    return random.choice(ua_list or DEFAULT_USER_AGENTS)


def get_verify_ssl() -> bool:
    return coerce_bool(
        CONFIG.get("config", {}).get("verify_ssl", DEFAULT_CONFIG["config"]["verify_ssl"]),
        DEFAULT_CONFIG["config"]["verify_ssl"],
    )


def create_http_connector() -> aiohttp.TCPConnector:
    return aiohttp.TCPConnector(ssl=get_verify_ssl())


def get_login_retry_delay(attempt_index: int) -> float:
    if attempt_index < 0:
        attempt_index = 0
    return LOGIN_RETRY_DELAYS[min(attempt_index, len(LOGIN_RETRY_DELAYS) - 1)]


def should_auto_login_without_session() -> bool:
    return LAST_LOGIN_RESULT.status not in {"missing_credentials", "rejected"}


def extract_login_form(html_text: str, base_url: str = LOGIN_URL) -> Tuple[str, Dict[str, str]]:
    form = extract_login_form_data(html_text, base_url)
    return form.action_url, form.fields


def has_session_cookie(session: aiohttp.ClientSession) -> bool:
    return has_session_cookie_data(session)


def get_schedule_for_day(weekday: int) -> Dict[str, Any]:
    schedule = CONFIG["operating"].get(weekday)
    if isinstance(schedule, dict):
        return schedule
    return copy.deepcopy(DEFAULT_CONFIG["operating"][weekday])


def get_poll_interval() -> float:
    try:
        interval = float(CONFIG["config"].get("Senkaku", 1))
    except (TypeError, ValueError):
        return 1.0
    return max(interval, 0.1)


def get_retry_limit() -> int:
    try:
        retries = int(CONFIG["config"].get("retries", 20))
    except (TypeError, ValueError):
        return 20
    return max(retries, 1)


def get_http_timeout_seconds() -> float:
    return coerce_positive_float(
        CONFIG["config"].get("http_timeout", DEFAULT_CONFIG["config"]["http_timeout"]),
        DEFAULT_CONFIG["config"]["http_timeout"],
    )


def get_notification_timeout_seconds() -> float:
    return coerce_positive_float(
        CONFIG["config"].get(
            "notification_timeout", DEFAULT_CONFIG["config"]["notification_timeout"]
        ),
        DEFAULT_CONFIG["config"]["notification_timeout"],
    )


def create_client_timeout(total_seconds: float) -> Any:
    timeout_factory = getattr(aiohttp, "ClientTimeout", None)
    if timeout_factory is None:
        return None
    return timeout_factory(total=max(total_seconds, 0.1))


def create_http_client_timeout() -> Any:
    return create_client_timeout(get_http_timeout_seconds())


def create_notification_timeout() -> Any:
    return create_client_timeout(get_notification_timeout_seconds())


def normalize_telegram_bot_key(value: Any) -> str:
    token = normalize_text(value)
    if token and not token.startswith("bot"):
        return "bot{}".format(token)
    return token


def render_big_digits(text: str) -> str:
    rows = [""] * len(BIG_DIGITS["0"])
    for char in normalize_text(text) or "?":
        glyph = BIG_DIGITS.get(char, BIG_DIGITS["?"])
        for index, part in enumerate(glyph):
            rows[index] += part + "  "
    return "\n".join(row.rstrip() for row in rows)


def format_found_code_banner(code: str) -> str:
    code_text = normalize_text(code) or "NA"
    big_code = render_big_digits(code_text)
    big_lines = big_code.splitlines() or [code_text]
    width = max(
        len("找到點名數字！"),
        len("Code: {}".format(code_text)),
        *(len(line) for line in big_lines),
    )
    border = "+" + "=" * (width + 2) + "+"
    lines = [border, "| {} |".format("找到點名數字！".center(width))]
    for line in big_lines:
        lines.append("| {} |".format(line.ljust(width)))
    lines.append("| {} |".format("Code: {}".format(code_text).center(width)))
    lines.append(border)
    return "\n".join(lines)


def build_number_progress_message(
    rollcall_id: int,
    request_count: int,
    latest_try_code: str,
    started_at: float,
) -> str:
    elapsed = time.perf_counter() - started_at
    return (
        "數字點名 #{}: 正在嘗試中... 已送出 {}/{}，最近代碼 {}，已用 {:.1f}s"
    ).format(
        rollcall_id,
        request_count,
        NUMBER_CODE_LIMIT,
        latest_try_code,
        elapsed,
    )


def parse_schedule_range(range_str: Any) -> Tuple[Any, Any]:
    if isinstance(range_str, list) and len(range_str) == 2:
        try:
            start = datetime.strptime(str(range_str[0]), "%H:%M").time()
            end = datetime.strptime(str(range_str[1]), "%H:%M").time()
            return start, end
        except ValueError:
            pass

    fallback = DEFAULT_OPERATING_RANGE
    return (
        datetime.strptime(fallback[0], "%H:%M").time(),
        datetime.strptime(fallback[1], "%H:%M").time(),
    )


def is_within_schedule(start: Any, end: Any, current_time: Any) -> bool:
    # Matching start/end means "always on"; start > end supports overnight ranges.
    if start == end:
        return True
    if start < end:
        return start <= current_time <= end
    return current_time >= start or current_time <= end


def log(
    *,
    event: str,
    path: Optional[Path] = None,
    counter: int = -1,
    status: str = "",
    url: str = "",
    http_status: Any = None,
    rollcall_id: Any = None,
    rollcall_type: str = "",
    message: str = "",
    payload_excerpt: Any = None,
    error: Any = None,
    extra: Optional[Dict[str, Any]] = None,
) -> bool:
    if not CONFIG["config"]["enable_log"]:
        return False

    try:
        data = {
            "timestamp": datetime.now().isoformat(timespec="seconds"),
            "event": event,
            "counter": counter,
            "status": status,
            "url": url,
            "http_status": http_status,
            "rollcall_id": rollcall_id,
            "rollcall_type": rollcall_type,
            "message": message,
            "payload_excerpt": make_payload_excerpt(payload_excerpt),
            "error": normalize_text(error) or None,
        }
        if extra:
            data.update(extra)
        path = path or daily_log_path()
        path.parent.mkdir(parents=True, exist_ok=True)
        with open(path, "a", encoding="utf-8") as file:
            file.write(json.dumps(data, ensure_ascii=False, default=str))
            file.write("\n")
    except OSError as exc:
        print(exc)
        return False
    return True


async def _send_notification(
    request: NotificationRequest,
) -> int:
    request_kwargs: Dict[str, Any] = {
        "method": request.method,
        "url": request.url,
        "ssl": get_verify_ssl(),
    }
    if request.data is not None:
        request_kwargs["data"] = request.data
    if request.headers is not None:
        request_kwargs["headers"] = request.headers
    if request.json_body is not None:
        request_kwargs["json"] = request.json_body

    timeout = create_notification_timeout()
    if timeout is not None:
        request_kwargs["timeout"] = timeout

    async with aiohttp.request(**request_kwargs) as resp:
        body = await resp.text()
        if not 200 <= resp.status < 300:
            raise NotificationSendError(
                request.channel,
                "{} 通知回傳 HTTP {}: {}".format(request.label, resp.status, body[:200]),
                status_code=resp.status,
            )
        return resp.status


def build_notification_requests(
    text: str,
    highlight_block: str = "",
) -> List[NotificationRequest]:
    requests: List[NotificationRequest] = []
    message_text = normalize_text(text) or "test message"
    highlight_block = highlight_block.rstrip()
    title_prefix = "THU Student\n"

    tg_config = CONFIG["notifications"]["tg"]
    if tg_config["enable"]:
        token = normalize_telegram_bot_key(tg_config.get("key"))
        chat_id = normalize_text(tg_config.get("chat"))
        if token and chat_id:
            if highlight_block:
                tg_text = "{}\n<pre>{}</pre>".format(
                    html.escape(title_prefix + message_text),
                    html.escape(highlight_block),
                )
                tg_data = {
                    "chat_id": chat_id,
                    "text": tg_text,
                    "parse_mode": "HTML",
                }
            else:
                tg_data = {
                    "chat_id": chat_id,
                    "text": title_prefix + message_text,
                }
            requests.append(
                NotificationRequest(
                    channel="telegram",
                    label="Telegram",
                    method="POST",
                    url="https://api.telegram.org/{}/sendMessage".format(token),
                    data=tg_data,
                )
            )
        else:
            log(
                event="notification_delivery",
                status="skipped",
                message="Telegram 通知已啟用，但缺少 token 或 chat id。",
                extra={"channel": "telegram"},
            )

    dc_config = CONFIG["notifications"]["dc"]
    if dc_config["enable"]:
        bot_token = normalize_text(dc_config.get("key"))
        channel_id = normalize_text(dc_config.get("chat"))
        if bot_token and channel_id:
            dc_content = title_prefix + message_text
            if highlight_block:
                dc_content = "{}\n```text\n{}\n```".format(dc_content, highlight_block)
            requests.append(
                NotificationRequest(
                    channel="discord",
                    label="Discord",
                    method="POST",
                    url="https://discord.com/api/v10/channels/{}/messages".format(channel_id),
                    headers={
                        "Authorization": "Bot {}".format(bot_token),
                        "Content-Type": "application/json",
                    },
                    json_body={"content": dc_content},
                )
            )
        else:
            log(
                event="notification_delivery",
                status="skipped",
                message="Discord 通知已啟用，但缺少 token 或 channel id。",
                extra={"channel": "discord"},
            )

    return requests


async def mes(text: str = "test message", highlight_block: str = "") -> None:
    requests = build_notification_requests(text, highlight_block)
    if not requests:
        return

    results = await asyncio.gather(
        *[_send_notification(request) for request in requests],
        return_exceptions=True,
    )

    for request, result in zip(requests, results):
        if isinstance(result, BaseException):
            log(
                event="notification_delivery",
                status="failed",
                message="{} 通知送出失敗。".format(request.label),
                error=result,
                extra={"channel": request.channel, "url": request.url},
            )
            log_print("{} 通知送出失敗: {}".format(request.label, result))
        else:
            log(
                event="notification_delivery",
                status="success",
                http_status=result,
                message="{} 通知已送出。".format(request.label),
                extra={"channel": request.channel, "url": request.url},
            )


IS_LOGGING_IN = False


async def login(session: aiohttp.ClientSession) -> LoginResult:
    global IS_LOGGING_IN, LAST_LOGIN_RESULT

    user, passwd, credential_source = resolve_credentials()
    if not has_real_credential(user) or not has_real_credential(passwd):
        log(
            event="login_failure",
            status="missing_credentials",
            message="尚未設定可用帳號密碼。",
            extra={"credential_source": credential_source},
        )
        log_print("未設定帳號密碼，請先在下方輸入區填寫您的學號與密碼！")
        LAST_LOGIN_RESULT = LoginResult(status="missing_credentials", credential_source=credential_source)
        return LAST_LOGIN_RESULT

    IS_LOGGING_IN = True
    log_print("嘗試使用帳密自動登入...")
    log(
        event="login_attempt",
        status="started",
        message="嘗試登入 TronClass。",
        extra={"credential_source": credential_source, "user": user},
    )
    client = TronHttpClient(session)
    try:
        session.cookie_jar.clear()
        form = await client.fetch_login_form()
        outcome = await client.submit_login(form, user, passwd)

        if not outcome.has_session or not has_session_cookie(session):
            log(
                event="login_failure",
                status="missing_session",
                url=outcome.final_url,
                message="登入流程完成，但未取得有效 session。",
                extra={"credential_source": credential_source, "user": user},
            )
            log_print("登入流程已完成，但未取得有效 session。")
            LAST_LOGIN_RESULT = LoginResult(
                status="missing_session",
                credential_source=credential_source,
                user=user,
                final_url=outcome.final_url,
            )
            return LAST_LOGIN_RESULT

        CONFIG["account"]["user"] = user
        log(
            event="login_success",
            status="success",
            url=outcome.final_url,
            message="登入成功。",
            extra={"credential_source": credential_source, "user": user},
        )
        log_print("登入成功！綁定學號：{}".format(user))
        LAST_LOGIN_RESULT = LoginResult(
            status="success",
            credential_source=credential_source,
            user=user,
            final_url=outcome.final_url,
        )
        return LAST_LOGIN_RESULT
    except LoginRejectedError:
        log(
            event="login_failure",
            status="rejected",
            message="登入失敗，帳號密碼被拒絕。",
            extra={"credential_source": credential_source, "user": user},
        )
        log_print("登入失敗，請檢查帳號或密碼是否正確。")
        LAST_LOGIN_RESULT = LoginResult(
            status="rejected",
            credential_source=credential_source,
            user=user,
        )
        return LAST_LOGIN_RESULT
    except (TronHttpError, aiohttp.ClientError, asyncio.TimeoutError) as exc:
        log(
            event="login_failure",
            status="transient_error",
            message="登入過程發生錯誤。",
            error=exc,
            extra={"credential_source": credential_source, "user": user},
        )
        log_print("登入過程中發生錯誤: {}".format(exc))
        LAST_LOGIN_RESULT = LoginResult(
            status="transient_error",
            credential_source=credential_source,
            user=user,
            error=normalize_text(exc),
        )
        return LAST_LOGIN_RESULT
    finally:
        IS_LOGGING_IN = False


def clone_session_cookies(source: aiohttp.ClientSession, target: aiohttp.ClientSession) -> None:
    for cookie in source.cookie_jar:
        target.cookie_jar.update_cookies({cookie.key: cookie.value})


async def number(main_session: aiohttp.ClientSession, rcid: int) -> None:
    request_count = 0
    found_code = "NA"
    stop_event = asyncio.Event()
    progress_done = asyncio.Event()
    device = random_id()
    started_at = time.perf_counter()
    headers = {"User-Agent": random_ua()}
    fatal_error: Optional[BaseException] = None
    request_url = "{}/api/rollcall/{}/answer_number_rollcall".format(TRON, rcid)
    latest_try_code = "----"

    async def try_number_code(session: aiohttp.ClientSession, try_code: int) -> None:
        nonlocal request_count, found_code, fatal_error, latest_try_code

        payload = {
            "deviceId": device,
            "numberCode": "{:04d}".format(try_code),
        }
        for attempt in range(NUMBER_REQUEST_RETRIES):
            if stop_event.is_set():
                return

            try:
                latest_try_code = payload["numberCode"]
                async with session.put(
                    request_url,
                    json=payload,
                ) as resp:
                    request_count += 1
                    if stop_event.is_set() and found_code != "NA":
                        return
                    if resp.status == 200:
                        found_code = payload["numberCode"]
                        stop_event.set()
                        banner = format_found_code_banner(found_code)
                        log_print(banner)
                        await mes("找到點名數字！", highlight_block=banner)
                    elif resp.status in (400, 409):
                        return
                    elif resp.status in (401, 403):
                        body = await resp.text()
                        log(
                            event="tron_http_error",
                            path=number_log_path(rcid),
                            counter=try_code,
                            status="number_unauthorized",
                            url=str(resp.url),
                            http_status=resp.status,
                            rollcall_id=rcid,
                            rollcall_type="number",
                            message="數字點名期間登入狀態失效。",
                            payload_excerpt=body[:300],
                        )
                        if fatal_error is None and found_code == "NA":
                            fatal_error = UnauthorizedError("數字點名期間登入狀態失效。")
                            stop_event.set()
                    else:
                        body = await resp.text()
                        log(
                            event="tron_http_error",
                            path=number_log_path(rcid),
                            counter=try_code,
                            status="unexpected_number_response",
                            url=str(resp.url),
                            http_status=resp.status,
                            rollcall_id=rcid,
                            rollcall_type="number",
                            message="數字點名回傳了未預期的 HTTP 狀態。",
                            payload_excerpt=body[:300],
                        )
                        if fatal_error is None and found_code == "NA":
                            fatal_error = UnexpectedResponseError(
                                "HTTP {}: {}".format(resp.status, body[:200])
                            )
                            stop_event.set()
                    return
            except (aiohttp.ClientError, asyncio.TimeoutError) as exc:
                if attempt == NUMBER_REQUEST_RETRIES - 1:
                    log(
                        event="network_error",
                        path=number_log_path(rcid),
                        counter=try_code,
                        status="number_request_error",
                        url=request_url,
                        rollcall_id=rcid,
                        rollcall_type="number",
                        message="數字點名請求失敗。",
                        error=exc,
                    )
                    if fatal_error is None and found_code == "NA":
                        fatal_error = exc
                        stop_event.set()
                else:
                    await asyncio.sleep(1)

    async def progress_reporter() -> None:
        while not progress_done.is_set():
            status_print(
                build_number_progress_message(
                    rcid,
                    request_count,
                    latest_try_code,
                    started_at,
                )
            )
            try:
                await asyncio.wait_for(progress_done.wait(), timeout=NUMBER_PROGRESS_INTERVAL)
            except asyncio.TimeoutError:
                continue

    session_kwargs: Dict[str, Any] = {
        "connector": create_http_connector(),
        "headers": headers,
    }
    timeout = create_http_client_timeout()
    if timeout is not None:
        session_kwargs["timeout"] = timeout

    async with aiohttp.ClientSession(
        **session_kwargs,
    ) as session:
        clone_session_cookies(main_session, session)
        queue = asyncio.Queue()
        for candidate in range(NUMBER_CODE_LIMIT):
            queue.put_nowait(candidate)

        async def worker() -> None:
            while not stop_event.is_set():
                try:
                    try_code = queue.get_nowait()
                except asyncio.QueueEmpty:
                    return
                try:
                    await try_number_code(session, try_code)
                finally:
                    queue.task_done()

        workers = [
            asyncio.create_task(worker())
            for _ in range(min(NUMBER_WORKER_COUNT, NUMBER_CODE_LIMIT))
        ]
        status_print(build_number_progress_message(rcid, request_count, latest_try_code, started_at))
        progress_task = asyncio.create_task(progress_reporter())
        try:
            await asyncio.gather(*workers)
        finally:
            progress_done.set()
            await progress_task

    elapsed = time.perf_counter() - started_at

    if fatal_error is not None:
        summary_status = "failed"
        summary_message = "數字點名流程提早中止。"
    else:
        summary_status = "completed"
        summary_message = "數字點名流程結束。"

    log(
        event="number_rollcall_summary",
        path=number_log_path(rcid),
        status=summary_status,
        rollcall_id=rcid,
        rollcall_type="number",
        message=summary_message,
        extra={
            "spend_time_seconds": round(elapsed, 2),
            "request_count": request_count,
            "found_code": found_code,
            "stopped_early": found_code != "NA",
            "fatal_error": normalize_text(fatal_error) or None,
        },
    )

    if fatal_error is not None:
        raise fatal_error

    text = (
        "Total time: {:.2f}s\n"
        "Total request: {}/{}{}\n"
        "Code: {}\n"
    ).format(
        elapsed,
        request_count,
        NUMBER_CODE_LIMIT,
        " (Stopped early)" if found_code != "NA" else "",
        found_code,
    )
    print(text)
    await mes(text)


def select_rollcall(rollcalls: Any) -> Tuple[str, Optional[Dict[str, Any]], str, str]:
    if not isinstance(rollcalls, list) or not rollcalls:
        return "not_call", None, "", ""

    first_supported_number = None
    first_unsupported: Optional[Tuple[str, Dict[str, Any], str, str]] = None
    has_on_call_fine = False

    for rollcall in rollcalls:
        if not isinstance(rollcall, dict):
            continue
        if rollcall.get("is_number"):
            first_supported_number = rollcall
            break
        if rollcall.get("status") == "on_call_fine":
            has_on_call_fine = True
            continue
        if first_unsupported is None:
            status, rollcall_type, message = classify_rollcall(rollcall)
            first_unsupported = (status, rollcall, rollcall_type, message)

    if first_supported_number is not None:
        return "is_number", first_supported_number, "number", ""
    if first_unsupported is not None:
        status, rollcall, rollcall_type, message = first_unsupported
        return status, rollcall, rollcall_type, message
    if has_on_call_fine:
        return "on_call_fine", None, "", ""
    return "not_call", None, "", ""


async def check_rollcall(session: aiohttp.ClientSession, cnt: int = -1) -> str:
    client = TronHttpClient(session)
    result = await client.fetch_rollcalls()

    rollcalls = result.payload.get("rollcalls") or []
    selected_status, selected_rollcall, selected_rollcall_type, selected_message = select_rollcall(
        rollcalls
    )
    log(
        event="rollcall_poll",
        counter=cnt,
        status="ok",
        url=result.url,
        http_status=result.status_code,
        rollcall_id=selected_rollcall.get("rollcall_id") if selected_rollcall else None,
        rollcall_type=selected_rollcall_type,
        message="完成一次點名輪詢。",
        payload_excerpt=result.payload,
        extra={"rollcall_count": len(rollcalls), "selected_status": selected_status},
    )

    if selected_status == "not_call":
        reset_unsupported_rollcall_state()
        return "not call"

    if selected_status == "on_call_fine":
        reset_unsupported_rollcall_state()
        return "on_call_fine"

    if selected_status == "is_number" and selected_rollcall is not None:
        reset_unsupported_rollcall_state()
        rollcall_id = selected_rollcall.get("rollcall_id")
        text = "start num\n  id:{}\n  正在嘗試 0000-{:04d}，請稍候...".format(
            rollcall_id,
            NUMBER_CODE_LIMIT - 1,
        )
        log(
            event="number_rollcall_started",
            counter=cnt,
            status="started",
            url=result.url,
            http_status=result.status_code,
            rollcall_id=rollcall_id,
            rollcall_type="number",
            message=text,
            payload_excerpt=selected_rollcall,
        )
        log_print(text)
        await mes(text)
        await number(session, rollcall_id)
        return "is_number"

    if selected_rollcall is not None:
        await maybe_notify_unsupported_rollcall(
            selected_status,
            selected_rollcall,
            selected_message,
            selected_rollcall_type,
        )
    return selected_status


cnt = 0


async def async_input(prompt_text: str) -> str:
    global CURRENT_PROMPT
    CURRENT_PROMPT = prompt_text
    sys.stdout.write("\r\033[K{}".format(CURRENT_PROMPT))
    sys.stdout.flush()
    try:
        value = await asyncio.to_thread(input, "")
    except EOFError:
        value = "exit"

    sys.stdout.write(
        "\r\033[K\033[1A\r\033[K\033[1A\r\033[K[狀態] {}\n{}".format(
            LAST_STATUS, CURRENT_PROMPT
        )
    )
    sys.stdout.flush()
    return value.strip()


async def sleep_or_shutdown(shutdown_event: asyncio.Event, seconds: float) -> None:
    try:
        await asyncio.wait_for(shutdown_event.wait(), timeout=seconds)
    except asyncio.TimeoutError:
        return


def build_fatal_error_report(exc: BaseException, restart_count: int) -> Tuple[str, str, str]:
    formatted_traceback = traceback.format_exc()
    frames = traceback.extract_tb(exc.__traceback__)
    location = ""
    if frames:
        last_frame = frames[-1]
        location = "{}:{}:{}".format(Path(last_frame.filename).name, last_frame.lineno, last_frame.name)
    fingerprint_source = "{}|{}|{}".format(exc.__class__.__name__, normalize_text(exc), location)
    fingerprint = hashlib.sha1(fingerprint_source.encode("utf-8")).hexdigest()[:12]
    summary = "fatal error on {}, restart #{}, fingerprint={}".format(cnt, restart_count, fingerprint)
    return summary, formatted_traceback, fingerprint


def report_fatal_exception(exc: BaseException, restart_count: int) -> None:
    global LAST_FATAL_NOTIFICATION_AT

    summary, formatted_traceback, fingerprint = build_fatal_error_report(exc, restart_count)
    text = "{}\n{}\n{}".format(summary, normalize_text(exc), formatted_traceback.rstrip())
    log(
        event="fatal_error",
        status="restarting",
        message=summary,
        error=exc,
        extra={
            "restart_count": restart_count,
            "fingerprint": fingerprint,
            "traceback": formatted_traceback,
        },
    )
    log_print(text)

    now = time.monotonic()
    if now - LAST_FATAL_NOTIFICATION_AT < FATAL_NOTIFICATION_INTERVAL:
        return

    LAST_FATAL_NOTIFICATION_AT = now
    try:
        asyncio.run(mes("{}\n{}".format(summary, normalize_text(exc))))
    except Exception:
        return


async def input_loop(session: aiohttp.ClientSession, shutdown_event: asyncio.Event) -> None:
    global CURRENT_PROMPT

    while not shutdown_event.is_set():
        user = await async_input("切換學號 (輸入 exit 離開) > ")
        if not user:
            continue
        if user.lower() == "exit":
            log_print("結束程式...")
            shutdown_event.set()
            return

        passwd = await async_input("輸入密碼 > ")
        save = await async_input("是否保存下次自動登入此帳號 (y/n) > ")

        set_runtime_credentials(user, passwd)
        CONFIG["account"]["user"] = user
        CONFIG["account"]["passwd"] = passwd
        save_prefix = ""
        if save.lower() == "y":
            if save_account_for_next_launch(user, passwd):
                save_prefix = "已將學號與密碼寫入 config.yaml，"
            else:
                save_prefix = "無法寫入 config.yaml，本次僅暫存於執行期間，"

        log_print("{}帳號已更新為 {}，正在重新登入...".format(save_prefix, user))
        await login(session)
        CURRENT_PROMPT = "切換學號 (輸入 exit 離開) > "
        sys.stdout.write("\r\033[K{}".format(CURRENT_PROMPT))
        sys.stdout.flush()


async def monitor_loop(session: aiohttp.ClientSession, shutdown_event: asyncio.Event) -> None:
    global cnt
    flag_day_night = False
    login_retry_attempt = 0
    next_login_retry_at = 0.0

    login_result = await login(session)
    if not login_result.ok:
        if login_result.should_auto_retry:
            delay = get_login_retry_delay(login_retry_attempt)
            next_login_retry_at = time.monotonic() + delay
            login_retry_attempt += 1
            log_print("首次登入失敗，稍後會自動重試；也可在下方輸入帳密。")
        else:
            log_print("首次登入失敗，請在下方輸入正確的帳密。")

    error_cnt = 0
    while not shutdown_event.is_set():
        if IS_LOGGING_IN:
            await sleep_or_shutdown(shutdown_event, 1)
            continue

        if not has_session_cookie(session):
            if should_auto_login_without_session():
                now = time.monotonic()
                if now >= next_login_retry_at:
                    log_print("偵測到尚未登入，正在嘗試自動登入...")
                    login_result = await login(session)
                    if login_result.ok:
                        login_retry_attempt = 0
                        next_login_retry_at = 0.0
                        error_cnt = 0
                        continue
                    if login_result.should_auto_retry:
                        delay = get_login_retry_delay(login_retry_attempt)
                        next_login_retry_at = time.monotonic() + delay
                        login_retry_attempt += 1
                    else:
                        next_login_retry_at = 0.0
                    await sleep_or_shutdown(shutdown_event, 1)
                    continue

                remaining = max(1, int(round(next_login_retry_at - now)))
                status_print(
                    "尚未登入 (等待自動重試或手動輸入帳號密碼，{} 秒後重試)".format(remaining)
                )
                await sleep_or_shutdown(shutdown_event, min(5.0, float(remaining)))
            else:
                status_print("尚未登入 (等待登入中，請在下方輸入帳號密碼)")
                await sleep_or_shutdown(shutdown_event, 5)
            continue

        if LAST_LOGIN_RESULT.ok and login_retry_attempt:
            login_retry_attempt = 0
            next_login_retry_at = 0.0

        today = datetime.today().weekday()
        schedule = get_schedule_for_day(today)
        start, end = parse_schedule_range(schedule.get("range"))
        current_time = datetime.now().time()

        if not schedule.get("enable", False):
            status_print("今日非上課日 (休眠中)")
            await sleep_or_shutdown(shutdown_event, 60)
            continue

        if is_within_schedule(start, end, current_time):
            if not flag_day_night:
                flag_day_night = True
                text = "進入上課時間，開始監控點名...\n"
                log_print(text)
                await mes(text)
        else:
            if flag_day_night:
                flag_day_night = False
                text = "今日課程結束，進入休眠...\n"
                log_print(text)
                await mes(text)
            status_print("非上課時段 (休眠中)")
            await sleep_or_shutdown(shutdown_event, 60)
            continue

        try:
            status_msg = await check_rollcall(session, cnt)
            error_cnt = 0
            if status_msg == "not call":
                reset_unsupported_rollcall_state()
                status_print("第 {} 次檢查: 目前無點名".format(cnt))
            elif status_msg == "unsupported_radar":
                status_print("第 {} 次檢查: 發現未支援的 radar 點名".format(cnt))
            elif status_msg == "unsupported_qrcode":
                status_print("第 {} 次檢查: 發現未支援的 QR Code 點名".format(cnt))
            elif status_msg == "unsupported_rollcall":
                status_print("第 {} 次檢查: 發現未支援的點名類型".format(cnt))
            else:
                status_print("第 {} 次檢查: {}".format(cnt, status_msg))
        except UnauthorizedError:
            log(
                event="tron_http_error",
                counter=cnt,
                status="unauthorized",
                message="Cookie 已過期，準備重新登入。",
            )
            log_print("Cookie 已過期，正在重新自動登入...")
            session.cookie_jar.clear()
            login_result = await login(session)
            if login_result.ok:
                login_retry_attempt = 0
                next_login_retry_at = 0.0
            elif login_result.should_auto_retry:
                delay = get_login_retry_delay(login_retry_attempt)
                next_login_retry_at = time.monotonic() + delay
                login_retry_attempt += 1
                log_print("自動登入失敗，稍後會持續自動重試；也可手動輸入帳密。")
            else:
                log_print("自動登入失敗，請在下方輸入正確的帳號密碼。")
            error_cnt = 0
            continue
        except TronHttpError as exc:
            if error_cnt < get_retry_limit():
                text = "check rollcall error on {}, trying {} times, error: {}".format(
                    cnt, error_cnt, exc
                )
                log(
                    event="tron_http_error",
                    counter=cnt,
                    status="retrying",
                    message=text,
                    error=exc,
                )
                log_print(text)
                await mes(text)
                error_cnt += 1
            else:
                log(
                    event="tron_http_error",
                    counter=cnt,
                    status="stopped",
                    message="連續錯誤次數過多，停止監控。",
                    error=exc,
                )
                log_print("連續錯誤次數過多，停止監控。")
                shutdown_event.set()
                break
        except (aiohttp.ClientError, asyncio.TimeoutError) as exc:
            if error_cnt < get_retry_limit():
                text = "network error on {}, trying {} times, error: {}".format(
                    cnt, error_cnt, exc
                )
                log(
                    event="network_error",
                    counter=cnt,
                    status="retrying",
                    message=text,
                    error=exc,
                )
                log_print(text)
                await mes(text)
                error_cnt += 1
            else:
                log(
                    event="network_error",
                    counter=cnt,
                    status="stopped",
                    message="連續網路錯誤次數過多，停止監控。",
                    error=exc,
                )
                log_print("連續網路錯誤次數過多，停止監控。")
                shutdown_event.set()
                break

        cnt += 1
        await sleep_or_shutdown(shutdown_event, get_poll_interval())


async def app_main() -> None:
    bootstrap_config()
    shutdown_event = asyncio.Event()
    sys.stdout.write("\n[狀態] {}\n{}".format(LAST_STATUS, CURRENT_PROMPT))
    sys.stdout.flush()
    for warning in consume_bootstrap_warnings():
        log_print(warning)

    headers = {"User-Agent": random_ua()}
    session_kwargs: Dict[str, Any] = {
        "connector": create_http_connector(),
        "headers": headers,
    }
    timeout = create_http_client_timeout()
    if timeout is not None:
        session_kwargs["timeout"] = timeout

    async with aiohttp.ClientSession(**session_kwargs) as session:
        await asyncio.gather(
            monitor_loop(session, shutdown_event),
            input_loop(session, shutdown_event),
        )


if __name__ == "__main__":
    print("啟動自動登入與點名監控程式...")
    time.sleep(1)
    restart_count = 0
    while True:
        try:
            asyncio.run(app_main())
            break
        except KeyboardInterrupt:
            print("\n已接收到終止指令，安全關閉程式...")
            sys.exit(0)
        except Exception as exc:
            restart_count += 1
            report_fatal_exception(exc, restart_count)
            time.sleep(10)

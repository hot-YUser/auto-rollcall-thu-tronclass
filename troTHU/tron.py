import asyncio
import copy
import json
import os
import random
import string
import sys
import time
from datetime import datetime
from pathlib import Path
from typing import Any, Dict, Optional, Tuple

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
        extract_login_form as extract_login_form_data,
        has_session_cookie as has_session_cookie_data,
    )

CURRENT_PROMPT = "切換學號 (輸入 exit 離開) > "
LAST_STATUS = "初始化中"
NUMBER_CODE_LIMIT = 10000
NUMBER_WORKER_COUNT = 100
NUMBER_REQUEST_RETRIES = 3
DEFAULT_OPERATING_RANGE = ["00:00", "00:00"]
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


def normalize_text(value: Any) -> str:
    return str(value or "").strip()


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


def save_account_for_next_launch(user: str, password: str) -> None:
    CONFIG["account"]["user"] = normalize_text(user)
    CONFIG["account"]["passwd"] = normalize_text(password)
    save_config()


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
        channel_config.setdefault("enable", DEFAULT_CONFIG["notifications"][channel]["enable"])
        channel_config.setdefault("key", DEFAULT_CONFIG["notifications"][channel]["key"])
        channel_config.setdefault("chat", DEFAULT_CONFIG["notifications"][channel]["chat"])

    runtime_config = config.setdefault("config", {})
    if not isinstance(runtime_config, dict):
        runtime_config = {}
        config["config"] = runtime_config
    runtime_config.setdefault("enable_log", DEFAULT_CONFIG["config"]["enable_log"])
    runtime_config.setdefault("Senkaku", DEFAULT_CONFIG["config"]["Senkaku"])
    runtime_config.setdefault("retries", DEFAULT_CONFIG["config"]["retries"])
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
                merged["enable"] = bool(raw_schedule["enable"])
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


def save_config() -> None:
    write_config_file(normalize_config(CONFIG))


CONFIG = load_config()


def random_id() -> str:
    chars = string.ascii_letters + string.digits
    return "".join(random.choices(chars, k=16))


def random_ua() -> str:
    ua_list = CONFIG.get("config", {}).get("user-agent", [])
    return random.choice(ua_list or DEFAULT_USER_AGENTS)


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
    method: str,
    url: str,
    *,
    data: Optional[Dict[str, str]] = None,
    headers: Optional[Dict[str, str]] = None,
    json_body: Optional[Dict[str, str]] = None,
) -> None:
    async with aiohttp.request(
        method=method,
        url=url,
        data=data,
        headers=headers,
        json=json_body,
    ) as resp:
        await resp.read()


async def mes(text: str = "test message") -> None:
    text = "THU Student\n" + text
    tasks = []

    tg_config = CONFIG["notifications"]["tg"]
    if tg_config["enable"]:
        tasks.append(
            _send_notification(
                "POST",
                "https://api.telegram.org/{}/sendMessage".format(tg_config["key"]),
                data={
                    "chat_id": str(tg_config["chat"]),
                    "text": text,
                },
            )
        )

    dc_config = CONFIG["notifications"]["dc"]
    if dc_config["enable"]:
        tasks.append(
            _send_notification(
                "POST",
                "https://discord.com/api/v10/channels/{}/messages".format(dc_config["chat"]),
                headers={
                    "Authorization": "Bot {}".format(dc_config["key"]),
                    "Content-Type": "application/json",
                },
                json_body={"content": text},
            )
        )

    for task in tasks:
        try:
            await task
        except aiohttp.ClientError as exc:
            log_print("通知送出失敗: {}".format(exc))


IS_LOGGING_IN = False


async def login(session: aiohttp.ClientSession) -> bool:
    global IS_LOGGING_IN

    user, passwd, credential_source = resolve_credentials()
    if not has_real_credential(user) or not has_real_credential(passwd):
        log(
            event="login_failure",
            status="missing_credentials",
            message="尚未設定可用帳號密碼。",
            extra={"credential_source": credential_source},
        )
        log_print("未設定帳號密碼，請先在下方輸入區填寫您的學號與密碼！")
        return False

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
            return False

        CONFIG["account"]["user"] = user
        log(
            event="login_success",
            status="success",
            url=outcome.final_url,
            message="登入成功。",
            extra={"credential_source": credential_source, "user": user},
        )
        log_print("登入成功！綁定學號：{}".format(user))
        return True
    except LoginRejectedError:
        log(
            event="login_failure",
            status="rejected",
            message="登入失敗，帳號密碼被拒絕。",
            extra={"credential_source": credential_source, "user": user},
        )
        log_print("登入失敗，請檢查帳號或密碼是否正確。")
        return False
    except (TronHttpError, aiohttp.ClientError, asyncio.TimeoutError) as exc:
        log(
            event="login_failure",
            status="error",
            message="登入過程發生錯誤。",
            error=exc,
            extra={"credential_source": credential_source, "user": user},
        )
        log_print("登入過程中發生錯誤: {}".format(exc))
        return False
    finally:
        IS_LOGGING_IN = False


def clone_session_cookies(source: aiohttp.ClientSession, target: aiohttp.ClientSession) -> None:
    for cookie in source.cookie_jar:
        target.cookie_jar.update_cookies({cookie.key: cookie.value})


async def number(main_session: aiohttp.ClientSession, rcid: int) -> None:
    request_count = 0
    found_code = "NA"
    stop_event = asyncio.Event()
    device = random_id()
    started_at = time.perf_counter()
    headers = {"User-Agent": random_ua()}

    async def try_number_code(session: aiohttp.ClientSession, try_code: int) -> None:
        nonlocal request_count, found_code

        payload = {
            "deviceId": device,
            "numberCode": "{:04d}".format(try_code),
        }
        for attempt in range(NUMBER_REQUEST_RETRIES):
            if stop_event.is_set():
                return

            try:
                async with session.put(
                    "{}/api/rollcall/{}/answer_number_rollcall".format(TRON, rcid),
                    json=payload,
                ) as resp:
                    request_count += 1
                    if resp.status == 200:
                        found_code = payload["numberCode"]
                        stop_event.set()
                        print("\n找到點名數字：{}！".format(found_code))
                        await mes("找到點名數字：{}！".format(found_code))
                    elif resp.status not in (400, 409):
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
                    return
            except (aiohttp.ClientError, asyncio.TimeoutError) as exc:
                if attempt == NUMBER_REQUEST_RETRIES - 1:
                    log(
                        event="network_error",
                        path=number_log_path(rcid),
                        counter=try_code,
                        status="number_request_error",
                        url="{}/api/rollcall/{}/answer_number_rollcall".format(TRON, rcid),
                        rollcall_id=rcid,
                        rollcall_type="number",
                        message="數字點名請求失敗。",
                        error=exc,
                    )
                else:
                    await asyncio.sleep(1)

    async with aiohttp.ClientSession(
        connector=aiohttp.TCPConnector(ssl=False),
        headers=headers,
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
        await asyncio.gather(*workers)

    elapsed = time.perf_counter() - started_at

    log(
        event="number_rollcall_summary",
        path=number_log_path(rcid),
        status="completed",
        rollcall_id=rcid,
        rollcall_type="number",
        message="數字點名流程結束。",
        extra={
            "spend_time_seconds": round(elapsed, 2),
            "request_count": request_count,
            "found_code": found_code,
            "stopped_early": found_code != "NA",
        },
    )

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


async def check_rollcall(session: aiohttp.ClientSession, cnt: int = -1) -> str:
    client = TronHttpClient(session)
    result = await client.fetch_rollcalls()

    rollcalls = result.payload.get("rollcalls") or []
    first_rollcall = rollcalls[0] if rollcalls else {}
    poll_rollcall_id = first_rollcall.get("rollcall_id")
    poll_rollcall_type = (
        "number"
        if first_rollcall.get("is_number")
        else "radar"
        if first_rollcall.get("is_radar")
        else ""
    )
    log(
        event="rollcall_poll",
        counter=cnt,
        status="ok",
        url=result.url,
        http_status=result.status_code,
        rollcall_id=poll_rollcall_id,
        rollcall_type=poll_rollcall_type,
        message="完成一次點名輪詢。",
        payload_excerpt=result.payload,
    )

    if not rollcalls:
        reset_unsupported_rollcall_state()
        return "not call"

    rollcall = first_rollcall
    if rollcall.get("status") == "on_call_fine":
        reset_unsupported_rollcall_state()
        return "on_call_fine"
    if rollcall.get("is_number"):
        reset_unsupported_rollcall_state()
        rollcall_id = rollcall.get("rollcall_id")
        text = "start num\n  id:{}".format(rollcall_id)
        log(
            event="number_rollcall_started",
            counter=cnt,
            status="started",
            url=result.url,
            http_status=result.status_code,
            rollcall_id=rollcall_id,
            rollcall_type="number",
            message=text,
            payload_excerpt=rollcall,
        )
        log_print(text)
        await mes(text)
        await number(session, rollcall_id)
        return "is_number"

    status, rollcall_type, message = classify_rollcall(rollcall)
    await maybe_notify_unsupported_rollcall(status, rollcall, message, rollcall_type)
    return status


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
            save_account_for_next_launch(user, passwd)
            save_prefix = "已將學號與密碼寫入 config.yaml，"

        log_print("{}帳號已更新為 {}，正在重新登入...".format(save_prefix, user))
        await login(session)
        CURRENT_PROMPT = "切換學號 (輸入 exit 離開) > "
        sys.stdout.write("\r\033[K{}".format(CURRENT_PROMPT))
        sys.stdout.flush()


async def monitor_loop(session: aiohttp.ClientSession, shutdown_event: asyncio.Event) -> None:
    global cnt
    flag_day_night = False

    is_logged_in = await login(session)
    if not is_logged_in:
        log_print("首次登入失敗，請在下方輸入正確的帳密。")

    error_cnt = 0
    while not shutdown_event.is_set():
        if IS_LOGGING_IN:
            await sleep_or_shutdown(shutdown_event, 1)
            continue

        if not has_session_cookie(session):
            status_print("尚未登入 (等待登入中，請在下方輸入帳號密碼)")
            await sleep_or_shutdown(shutdown_event, 5)
            continue

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
            success = await login(session)
            if not success:
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
    shutdown_event = asyncio.Event()
    sys.stdout.write("\n[狀態] {}\n{}".format(LAST_STATUS, CURRENT_PROMPT))
    sys.stdout.flush()

    headers = {"User-Agent": random_ua()}
    async with aiohttp.ClientSession(
        connector=aiohttp.TCPConnector(ssl=False),
        headers=headers,
    ) as session:
        await asyncio.gather(
            monitor_loop(session, shutdown_event),
            input_loop(session, shutdown_event),
        )


if __name__ == "__main__":
    print("啟動自動登入與點名監控程式...")
    time.sleep(1)
    while True:
        try:
            asyncio.run(app_main())
            break
        except KeyboardInterrupt:
            print("\n已接收到終止指令，安全關閉程式...")
            sys.exit(0)
        except Exception as exc:
            text = "fatal error on {}, trying...\n{}".format(cnt, exc)
            log_print(text)
            time.sleep(10)

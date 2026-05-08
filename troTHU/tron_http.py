import html
import json
import re
from dataclasses import dataclass
from typing import Any, Dict, Optional
from urllib.parse import urljoin

import aiohttp

TRON = "https://ilearn.thu.edu.tw"
LOGIN_URL = (
    "https://tcidentity.thu.edu.tw/auth/realms/thu/protocol/cas/login"
    "?ui_locales=zh-TW&service=https%3A//ilearn.thu.edu.tw/login&locale=zh_TW"
)
ROLLCALLS_URL = "{}/api/radar/rollcalls?api_version=1.1.0".format(TRON)

FORM_PATTERNS = [
    re.compile(
        r"(<form\b[^>]*class=(['\"]).*?form-horizontal.*?\2[^>]*>)(.*?)</form>",
        re.IGNORECASE | re.DOTALL,
    ),
    re.compile(r"(<form\b[^>]*>)(.*?)</form>", re.IGNORECASE | re.DOTALL),
]
INPUT_PATTERN = re.compile(r"<input\b[^>]*>", re.IGNORECASE)
ATTR_PATTERN = re.compile(r"([:\w-]+)\s*=\s*(['\"])(.*?)\2", re.IGNORECASE | re.DOTALL)


class TronHttpError(Exception):
    """Base class for TronClass HTTP-layer errors."""


class UnauthorizedError(TronHttpError):
    """The session is unauthorized or redirected back to login."""


class LoginPageChangedError(TronHttpError):
    """The login page structure no longer matches the expected form."""


class LoginRejectedError(TronHttpError):
    """The server rejected the provided credentials."""


class UnexpectedResponseError(TronHttpError):
    """The server returned an unexpected response."""


@dataclass(frozen=True)
class LoginForm:
    action_url: str
    fields: Dict[str, str]


@dataclass(frozen=True)
class LoginOutcome:
    final_url: str
    has_session: bool


@dataclass(frozen=True)
class RollcallsResult:
    url: str
    status_code: int
    payload: Dict[str, Any]


def parse_tag_attributes(tag: str) -> Dict[str, str]:
    attributes = {}
    for key, _, value in ATTR_PATTERN.findall(tag):
        attributes[key.lower()] = html.unescape(value)
    return attributes


def extract_login_form(html_text: str, base_url: str = LOGIN_URL) -> LoginForm:
    for pattern in FORM_PATTERNS:
        match = pattern.search(html_text)
        if not match:
            continue

        opening_tag = match.group(1)
        body = match.group(3) if len(match.groups()) >= 3 else match.group(2)
        form_attrs = parse_tag_attributes(opening_tag)
        action = form_attrs.get("action")
        if not action:
            continue

        fields = {}
        for input_tag in INPUT_PATTERN.findall(body):
            input_attrs = parse_tag_attributes(input_tag)
            name = input_attrs.get("name")
            if name:
                fields[name] = input_attrs.get("value", "")

        return LoginForm(action_url=urljoin(base_url, action), fields=fields)

    raise LoginPageChangedError("找不到登入表單的 action URL，可能網站結構已更改。")


def has_session_cookie(session: aiohttp.ClientSession) -> bool:
    for cookie in session.cookie_jar:
        domain = cookie["domain"] or ""
        if cookie.key == "session" and ("ilearn.thu.edu.tw" in domain or not domain):
            return True
    return False


class TronHttpClient:
    def __init__(self, session: aiohttp.ClientSession, request_ssl: Any = None) -> None:
        self.session = session
        self.request_ssl = request_ssl

    def request_kwargs(self) -> Dict[str, Any]:
        if self.request_ssl is None:
            return {}
        return {"ssl": self.request_ssl}

    async def fetch_login_form(self) -> LoginForm:
        async with self.session.get(LOGIN_URL, **self.request_kwargs()) as resp:
            html_text = await resp.text()
        return extract_login_form(html_text, LOGIN_URL)

    async def submit_login(self, form: LoginForm, username: str, password: str) -> LoginOutcome:
        form_data = dict(form.fields)
        form_data.update(
            {
                "username": username,
                "password": password,
            }
        )

        async with self.session.post(form.action_url, data=form_data, **self.request_kwargs()) as resp:
            await resp.read()
            final_url = str(resp.url)

        has_session = has_session_cookie(self.session)
        if "login" in final_url.lower() and not has_session:
            raise LoginRejectedError("登入失敗，請檢查帳號或密碼是否正確。")

        return LoginOutcome(final_url=final_url, has_session=has_session)

    async def fetch_user_id(self) -> Optional[int]:
        async with self.session.get(TRON, **self.request_kwargs()) as resp:
            html_text = await resp.text()

        match = re.search(r"window\.APPRuntime\s*=\s*(\{.*?\});", html_text, re.DOTALL)
        if not match:
            return None

        try:
            runtime = json.loads(match.group(1))
        except ValueError:
            return None

        user_id = runtime.get("USER", {}).get("id")
        return user_id if isinstance(user_id, int) else None

    async def fetch_rollcalls(self) -> RollcallsResult:
        async with self.session.get(ROLLCALLS_URL, **self.request_kwargs()) as resp:
            url = str(resp.url)
            status_code = resp.status
            if status_code == 401 or "login" in url.lower():
                raise UnauthorizedError("Cookie 已過期或導向登入頁。")
            if status_code != 200:
                body = await resp.text()
                raise UnexpectedResponseError("HTTP {}: {}".format(status_code, body[:200]))

            try:
                payload = await resp.json(encoding="utf-8")
            except (aiohttp.ContentTypeError, ValueError):
                body = await resp.text()
                raise UnexpectedResponseError(
                    "Unexpected response body: {}".format(body[:200])
                )

        return RollcallsResult(url=url, status_code=status_code, payload=payload)

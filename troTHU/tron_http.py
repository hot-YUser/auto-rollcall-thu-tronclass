from __future__ import annotations
import html
import json
import re
from dataclasses import dataclass
from typing import Any, Dict, Optional
from urllib.parse import parse_qs, urlencode, unquote, urljoin, urlparse

try:
    import aiohttp
except ModuleNotFoundError:  # pragma: no cover - exercised by CLI-only environments
    class _MissingAiohttp:
        class ClientSession:
            pass

        class ContentTypeError(Exception):
            pass

    aiohttp = _MissingAiohttp()  # type: ignore

TRON = "https://ilearn.thu.edu.tw"
LOGIN_URL = (
    "https://tcidentity.thu.edu.tw/auth/realms/thu/protocol/cas/login"
    "?ui_locales=zh-TW&service=https%3A//ilearn.thu.edu.tw/login&locale=zh_TW"
)
ROLLCALLS_URL = "{}/api/radar/rollcalls?api_version=1.1.0".format(TRON)
CURRENT_SEMESTER_URL = "{}/api/current-semester-info".format(TRON)
COURSES_URL = "{}/api/my-courses?page=1&page_size=50".format(TRON)

HTML_ACCEPT = "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
LANGUAGE_ACCEPT = "zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7"
NAVIGATION_HEADERS = {
    "Accept": HTML_ACCEPT,
    "Accept-Language": LANGUAGE_ACCEPT,
    "Upgrade-Insecure-Requests": "1",
}

FORM_PATTERNS = [
    re.compile(
        r"(<form\b[^>]*class=(['\"]).*?form-horizontal.*?\2[^>]*>)(.*?)</form>",
        re.IGNORECASE | re.DOTALL,
    ),
    re.compile(r"(<form\b[^>]*>)(.*?)</form>", re.IGNORECASE | re.DOTALL),
]
INPUT_PATTERN = re.compile(r"<input\b[^>]*>", re.IGNORECASE)
ATTR_PATTERN = re.compile(r"([:\w-]+)\s*=\s*(['\"])(.*?)\2", re.IGNORECASE | re.DOTALL)
SCRIPT_REDIRECT_PATTERNS = [
    re.compile(
        r"(?:window|document)\.location(?:\.href)?\s*=\s*(['\"])(.*?)\1",
        re.IGNORECASE | re.DOTALL,
    ),
    re.compile(
        r"(?:window|document)\.location\.replace\(\s*(['\"])(.*?)\1\s*\)",
        re.IGNORECASE | re.DOTALL,
    ),
]
META_REFRESH_PATTERN = re.compile(
    r"<meta\b[^>]*http-equiv\s*=\s*(['\"])refresh\1[^>]*content\s*=\s*(['\"])[^'\"]*url=([^'\"]+)\2",
    re.IGNORECASE | re.DOTALL,
)
PUBLIC_CLOUD_LOGIN_VIEW_PATTERN = re.compile(r"<login-view\b", re.IGNORECASE)
PUBLIC_CLOUD_EMAIL_FORM_PATTERN = re.compile(
    r":email-login-form\s*=\s*(['\"])(.*?)\1",
    re.IGNORECASE | re.DOTALL,
)
PUBLIC_CLOUD_EMAIL_HIDDEN_PATTERN = re.compile(
    r"email-login-hidden-tag\s*=\s*(['\"])(.*?)\1",
    re.IGNORECASE | re.DOTALL,
)
PUBLIC_CLOUD_ORG_ID_PATTERN = re.compile(
    r":org-id\s*=\s*(['\"])(.*?)\1",
    re.IGNORECASE | re.DOTALL,
)

# --- Static image-captcha defaults (protocol, not school) ------------------
# An Apereo-CAS-style image captcha served at captcha.jpg (relative to the form
# action, bound to the session cookie). Defaults match the common 4-digit numeric
# case (verified live on elearn2.fju.edu.tw and tccas.ntou.edu.tw); per-school
# overrides come from provider config. The submit is an ordinary form-encoded POST
# plus the captcha field; CAS "lt" tickets are single-use, so a failed POST
# re-parses the freshly rendered form before retrying.
IMAGE_CAPTCHA_IMAGE_NAME = "captcha.jpg"
IMAGE_CAPTCHA_FIELD = "captcha"
IMAGE_CAPTCHA_CHARSET = "0123456789"
IMAGE_CAPTCHA_LENGTH = 4
IMAGE_CAPTCHA_MAX_ATTEMPTS = 4

# --- Keycloak (WeJoy/TronClass "tw-common" theme) JSON captcha -------------
# Some Keycloak tenants (verified live 2026-06: 亞洲 Asia, 馬偕 MacKay, 虎尾 NFU) gate
# the CAS login form behind a captcha loaded by JS, NOT a static captcha.jpg. The page
# calls getCaptchaCode(realm) -> GET /auth/realms/<realm>/captcha/code which returns
# {"image": "data:image/png;base64,...", "key": "<uuid>"}; it sets a hidden `captchaKey`
# and the user types `captchaCode`. The image is 4-char alphanumeric. The submit must
# carry BOTH captchaCode (the OCR result) and captchaKey (the returned key).
KEYCLOAK_CAPTCHA_ENDPOINT_SUFFIX = "/captcha/code"
KEYCLOAK_CAPTCHA_CODE_FIELD = "captchaCode"
KEYCLOAK_CAPTCHA_KEY_FIELD = "captchaKey"
KEYCLOAK_CAPTCHA_CHARSET = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
KEYCLOAK_CAPTCHA_LENGTH = 4
KEYCLOAK_CAPTCHA_MAX_ATTEMPTS = 5

# Generic external-SSO credential form (cas_login_settings): captcha OCR retry budget.
SSO_CAPTCHA_MAX_ATTEMPTS = 5


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
    username_field: str = "username"
    password_field: str = "password"


@dataclass(frozen=True)
class LoginOutcome:
    final_url: str
    has_session: bool


@dataclass(frozen=True)
class RollcallsResult:
    url: str
    status_code: int
    payload: Dict[str, Any]


@dataclass(frozen=True)
class TronHttpEndpoints:
    base_url: str = TRON
    login_url: str = LOGIN_URL
    rollcalls_url: str = ROLLCALLS_URL
    current_semester_url: str = CURRENT_SEMESTER_URL
    courses_url: str = COURSES_URL
    session_cookie_domain: str = "ilearn.thu.edu.tw"
    auth_flow: str = "cas"
    # Image-captcha shape for the cas_ocr_captcha flow. Defaults are a 4-digit numeric
    # captcha.jpg; per-school overrides come from provider config.
    captcha_image_name: str = IMAGE_CAPTCHA_IMAGE_NAME
    captcha_field: str = IMAGE_CAPTCHA_FIELD
    captcha_charset: str = IMAGE_CAPTCHA_CHARSET
    captcha_length: int = IMAGE_CAPTCHA_LENGTH


DEFAULT_ENDPOINTS = TronHttpEndpoints()


def default_endpoints() -> TronHttpEndpoints:
    return TronHttpEndpoints(
        base_url=TRON,
        login_url=LOGIN_URL,
        rollcalls_url=ROLLCALLS_URL,
        current_semester_url=CURRENT_SEMESTER_URL,
        courses_url=COURSES_URL,
        session_cookie_domain=urlparse(TRON).hostname or DEFAULT_ENDPOINTS.session_cookie_domain,
        auth_flow="cas",
    )


def endpoints_from_provider(provider: Any) -> TronHttpEndpoints:
    if hasattr(provider, "to_config"):
        provider = provider.to_config()
    if not isinstance(provider, dict):
        return default_endpoints()

    base_url = str(provider.get("base_url") or TRON).rstrip("/")
    cookie_domain = urlparse(base_url).hostname or DEFAULT_ENDPOINTS.session_cookie_domain
    try:
        captcha_length = int(provider.get("captcha_length") or IMAGE_CAPTCHA_LENGTH)
    except (TypeError, ValueError):
        captcha_length = IMAGE_CAPTCHA_LENGTH
    return TronHttpEndpoints(
        base_url=base_url,
        login_url=str(provider.get("login_url") or LOGIN_URL),
        rollcalls_url=str(provider.get("rollcalls_url") or ROLLCALLS_URL),
        current_semester_url=str(
            provider.get("current_semester_url") or "{}/api/current-semester-info".format(base_url)
        ),
        courses_url=str(
            provider.get("courses_url") or "{}/api/my-courses?page=1&page_size=50".format(base_url)
        ),
        session_cookie_domain=cookie_domain,
        auth_flow=str(provider.get("auth_flow") or ""),
        captcha_image_name=str(provider.get("captcha_image_name") or IMAGE_CAPTCHA_IMAGE_NAME),
        captcha_field=str(provider.get("captcha_field") or IMAGE_CAPTCHA_FIELD),
        captcha_charset=str(provider.get("captcha_charset") or IMAGE_CAPTCHA_CHARSET),
        captcha_length=captcha_length,
    )


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


def _extract_public_cloud_attr(pattern: re.Pattern[str], html_text: str) -> str:
    match = pattern.search(html_text)
    if not match:
        return ""
    return html.unescape(match.group(2))


def _extract_public_cloud_json_attr(pattern: re.Pattern[str], html_text: str) -> Dict[str, Any]:
    raw = _extract_public_cloud_attr(pattern, html_text)
    if not raw:
        return {}
    try:
        value = json.loads(raw)
    except ValueError:
        return {}
    return value if isinstance(value, dict) else {}


def make_public_cloud_email_login_url(base_url: str, next_value: str = "") -> str:
    parsed = urlparse(base_url or "")
    origin = "{}://{}".format(parsed.scheme or "https", parsed.netloc)
    query: Dict[str, str] = {}
    next_text = str(next_value or "").strip()
    if next_text:
        query["next"] = next_text
    query["login"] = "email"
    return "{}?{}".format(urljoin(origin + "/", "login"), urlencode(query))


def extract_public_cloud_email_login_form(html_text: str, base_url: str = LOGIN_URL) -> LoginForm:
    if not PUBLIC_CLOUD_LOGIN_VIEW_PATTERN.search(html_text):
        raise LoginPageChangedError("找不到 TronClass public cloud 登入元件。")

    fields: Dict[str, str] = {}
    hidden_html = _extract_public_cloud_attr(PUBLIC_CLOUD_EMAIL_HIDDEN_PATTERN, html_text)
    for input_tag in INPUT_PATTERN.findall(hidden_html):
        input_attrs = parse_tag_attributes(input_tag)
        name = input_attrs.get("name")
        if name:
            fields[name] = input_attrs.get("value", "")

    form_data = _extract_public_cloud_json_attr(PUBLIC_CLOUD_EMAIL_FORM_PATTERN, html_text)
    next_value = str(fields.get("next") or form_data.get("next") or "").strip()
    if not next_value:
        query_next = parse_qs(urlparse(base_url or "").query).get("next", [""])
        next_value = str(query_next[0] or "").strip()
    org_id = str(form_data.get("org_id") or "").strip()
    if not org_id:
        org_id = _extract_public_cloud_attr(PUBLIC_CLOUD_ORG_ID_PATTERN, html_text).strip()
        if org_id == "0":
            org_id = ""

    fields.setdefault("next", next_value)
    fields.setdefault("org_id", org_id)
    fields["submit"] = "login"
    if form_data.get("remember") or form_data.get("remember_me"):
        fields.setdefault("remember_me", "true")

    return LoginForm(
        action_url=make_public_cloud_email_login_url(base_url, next_value),
        fields=fields,
        username_field="email",
    )


def extract_html_redirect(html_text: str, base_url: str) -> Optional[str]:
    for pattern in SCRIPT_REDIRECT_PATTERNS:
        match = pattern.search(html_text)
        if match:
            return urljoin(base_url, html.unescape(match.group(2)))

    match = META_REFRESH_PATTERN.search(html_text)
    if match:
        return urljoin(base_url, html.unescape(unquote(match.group(3).strip())))

    return None


def has_session_cookie(
    session: aiohttp.ClientSession,
    session_cookie_domain: str = DEFAULT_ENDPOINTS.session_cookie_domain,
) -> bool:
    expected_domain = str(session_cookie_domain or "").strip()
    for cookie in session.cookie_jar:
        domain = cookie["domain"] or ""
        if cookie.key == "session" and (expected_domain in domain or not domain):
            return True
    return False


class TronHttpClient:
    def __init__(
        self,
        session: aiohttp.ClientSession,
        request_ssl: Any = None,
        endpoints: Optional[TronHttpEndpoints] = None,
    ) -> None:
        self.session = session
        self.request_ssl = request_ssl
        self.endpoints = endpoints or default_endpoints()

    def request_kwargs(self) -> Dict[str, Any]:
        if self.request_ssl is None:
            return {}
        return {"ssl": self.request_ssl}

    def api_url(self, path: str) -> str:
        return "{}{}".format(self.endpoints.base_url.rstrip("/"), path)

    async def request_json(
        self,
        method: str,
        url: str,
        *,
        json_payload: Any = None,
        params: Optional[Dict[str, Any]] = None,
        expected_status: tuple[int, ...] = (200,),
    ) -> Any:
        kwargs = self.request_kwargs()
        if json_payload is not None:
            kwargs["json"] = json_payload
        if params is not None:
            kwargs["params"] = params
        request = getattr(self.session, method.lower())
        async with request(url, **kwargs) as resp:
            response_url = str(resp.url)
            status_code = resp.status
            if status_code == 401 or "login" in response_url.lower():
                raise UnauthorizedError("Cookie 已過期或導向登入頁。")
            if status_code not in expected_status:
                body = await resp.text()
                raise UnexpectedResponseError("HTTP {}: {}".format(status_code, body[:200]))
            if status_code == 204:
                return {}
            try:
                return await resp.json(encoding="utf-8")
            except (aiohttp.ContentTypeError, ValueError):
                body = await resp.text()
                if not body.strip():
                    return {}
                raise UnexpectedResponseError(
                    "Unexpected response body: {}".format(body[:200])
                )

    async def _get_login_form_response(
        self,
        url: str,
        headers: Optional[Dict[str, str]] = None,
    ) -> tuple[str, str]:
        async with self.session.get(url, headers=headers, **self.request_kwargs()) as resp:
            return await resp.text(), str(resp.url)

    async def fetch_captcha_image(self, captcha_url: str) -> bytes:
        """GET a login captcha image in the current session and return its bytes.

        Used by image-captcha login adapters (e.g. FJU CAS). The image is bound
        to the session cookie set when the login form was fetched, so this must
        run on the same client/session. Raises LoginPageChangedError on a bad or
        empty response so the caller can fall back to browser/manual login.
        """
        async with self.session.get(captcha_url, **self.request_kwargs()) as resp:
            if resp.status != 200:
                raise LoginPageChangedError("驗證碼圖片回應 HTTP {}。".format(resp.status))
            data = await resp.read()
        if not data:
            raise LoginPageChangedError("驗證碼圖片內容為空。")
        return data

    async def fetch_user_id(self) -> Optional[int]:
        async with self.session.get(self.endpoints.base_url, **self.request_kwargs()) as resp:
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

    async def create_teacher_rollcall(self, course_id: Any, payload: Dict[str, Any]) -> Any:
        course_id_text = str(course_id).strip()
        return await self.request_json(
            "POST",
            self.api_url("/api/course/{}/rollcall".format(course_id_text)),
            json_payload=payload,
            expected_status=(200, 201),
        )

    async def start_teacher_rollcall(self, rollcall_id: Any, payload: Optional[Dict[str, Any]] = None) -> Any:
        rollcall_id_text = str(rollcall_id).strip()
        return await self.request_json(
            "POST",
            self.api_url("/api/rollcall/{}/start-rollcall".format(rollcall_id_text)),
            json_payload=payload,
            expected_status=(200, 204),
        )

    async def stop_teacher_rollcall(
        self,
        rollcall_id: Any,
        *,
        rollcall: Any = None,
        rollcall_type: Any = "manual",
    ) -> Any:
        try:
            from troTHU.teacher_rollcall import teacher_stop_path
        except ImportError:  # pragma: no cover - direct script fallback
            from teacher_rollcall import teacher_stop_path  # type: ignore

        return await self.request_json(
            "PUT",
            self.api_url(teacher_stop_path(rollcall_id, rollcall, rollcall_type)),
            expected_status=(200, 204),
        )

    async def fetch_teacher_qr_code(self, course_id: Any, rollcall_id: Any) -> Any:
        return await self.request_json(
            "GET",
            self.api_url("/api/course/{}/rollcall/{}/qr_code".format(
                str(course_id).strip(),
                str(rollcall_id).strip(),
            )),
            expected_status=(200,),
        )

    async def fetch_rollcalls(self) -> RollcallsResult:
        async with self.session.get(self.endpoints.rollcalls_url, **self.request_kwargs()) as resp:
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

    async def fetch_student_rollcalls(self, rollcall_id: Any, action: str = "") -> Any:
        base = self.endpoints.base_url.rstrip("/")
        url = "{}/api/rollcall/{}/student_rollcalls".format(base, str(rollcall_id).strip())
        action_text = str(action or "").strip()
        if action_text:
            url = "{}?action={}".format(url, action_text)
        async with self.session.get(url, **self.request_kwargs()) as resp:
            response_url = str(resp.url)
            status_code = resp.status
            if status_code == 401 or "login" in response_url.lower():
                raise UnauthorizedError("Cookie 已過期或導向登入頁。")
            if status_code != 200:
                body = await resp.text()
                raise UnexpectedResponseError("HTTP {}: {}".format(status_code, body[:200]))
            try:
                return await resp.json(encoding="utf-8")
            except (aiohttp.ContentTypeError, ValueError):
                body = await resp.text()
                raise UnexpectedResponseError(
                    "Unexpected response body: {}".format(body[:200])
                )

    async def fetch_current_semester(self) -> Dict[str, Any]:
        async with self.session.get(self.endpoints.current_semester_url, **self.request_kwargs()) as resp:
            url = str(resp.url)
            status_code = resp.status
            if status_code == 401 or "login" in url.lower():
                raise UnauthorizedError("Cookie 已過期或導向登入頁。")
            if status_code != 200:
                body = await resp.text()
                raise UnexpectedResponseError("HTTP {}: {}".format(status_code, body[:200]))
            try:
                return await resp.json(encoding="utf-8")
            except (aiohttp.ContentTypeError, ValueError):
                body = await resp.text()
                raise UnexpectedResponseError(
                    "Unexpected response body: {}".format(body[:200])
                )

    async def fetch_my_courses(self) -> Dict[str, Any]:
        async with self.session.get(self.endpoints.courses_url, **self.request_kwargs()) as resp:
            url = str(resp.url)
            status_code = resp.status
            if status_code == 401 or "login" in url.lower():
                raise UnauthorizedError("Cookie 已過期或導向登入頁。")
            if status_code != 200:
                body = await resp.text()
                raise UnexpectedResponseError("HTTP {}: {}".format(status_code, body[:200]))
            try:
                return await resp.json(encoding="utf-8")
            except (aiohttp.ContentTypeError, ValueError):
                body = await resp.text()
                raise UnexpectedResponseError(
                    "Unexpected response body: {}".format(body[:200])
                )

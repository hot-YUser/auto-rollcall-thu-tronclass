import html
import json
import re
from http.cookies import SimpleCookie
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
try:
    from yarl import URL
except ModuleNotFoundError:  # pragma: no cover - aiohttp normally provides yarl
    URL = None  # type: ignore

TRON = "https://ilearn.thu.edu.tw"
LOGIN_URL = (
    "https://tcidentity.thu.edu.tw/auth/realms/thu/protocol/cas/login"
    "?ui_locales=zh-TW&service=https%3A//ilearn.thu.edu.tw/login&locale=zh_TW"
)
ROLLCALLS_URL = "{}/api/radar/rollcalls?api_version=1.1.0".format(TRON)
CURRENT_SEMESTER_URL = "{}/api/current-semester-info".format(TRON)
COURSES_URL = "{}/api/my-courses?page=1&page_size=50".format(TRON)

TKU_SSO_HOST = "sso.tku.edu.tw"
TKU_ICLASS_HOST = "iclass.tku.edu.tw"
PUBLIC_CLOUD_HOSTS = {"www.tronclass.com.tw", "tronclass.com.tw"}
PUBLIC_CLOUD_AUTH_FLOW = "public_cloud_email"
TKU_SSO_LOGIN_FORM_URL_TEMPLATE = "https://sso.tku.edu.tw/NEAI/logineb.jsp?myurl={}"
HTML_ACCEPT = "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
LANGUAGE_ACCEPT = "zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7"
TKU_SSO_FORM_HEADERS = {
    "Accept": HTML_ACCEPT,
    "Accept-Language": LANGUAGE_ACCEPT,
    "Referer": "https://iclass.tku.edu.tw/login?next=/iportal&locale=zh_TW",
    "Upgrade-Insecure-Requests": "1",
}
TKU_SSO_IMAGE_HEADERS = {
    "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
    "Accept-Language": LANGUAGE_ACCEPT,
    "Referer": TKU_SSO_LOGIN_FORM_URL_TEMPLATE.format(
        "https://iclass.tku.edu.tw/login?next=/iportal&locale=zh_TW"
    ),
}
TKU_SSO_AJAX_HEADERS = {
    "Accept": "text/plain, */*; q=0.01",
    "Accept-Language": LANGUAGE_ACCEPT,
    "Origin": "https://sso.tku.edu.tw",
    "Referer": TKU_SSO_LOGIN_FORM_URL_TEMPLATE.format(
        "https://iclass.tku.edu.tw/login?next=/iportal&locale=zh_TW"
    ),
    "X-Requested-With": "XMLHttpRequest",
}
TKU_SSO_SUBMIT_HEADERS = {
    "Accept": HTML_ACCEPT,
    "Accept-Language": LANGUAGE_ACCEPT,
    "Cache-Control": "max-age=0",
    "Origin": "https://sso.tku.edu.tw",
    "Referer": TKU_SSO_LOGIN_FORM_URL_TEMPLATE.format(
        "https://iclass.tku.edu.tw/login?next=/iportal&locale=zh_TW"
    ),
    "Upgrade-Insecure-Requests": "1",
}
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
    auth_flow: str = "thu_cas"


DEFAULT_ENDPOINTS = TronHttpEndpoints()


def default_endpoints() -> TronHttpEndpoints:
    return TronHttpEndpoints(
        base_url=TRON,
        login_url=LOGIN_URL,
        rollcalls_url=ROLLCALLS_URL,
        current_semester_url=CURRENT_SEMESTER_URL,
        courses_url=COURSES_URL,
        session_cookie_domain=urlparse(TRON).hostname or DEFAULT_ENDPOINTS.session_cookie_domain,
        auth_flow="thu_cas",
    )


def endpoints_from_provider(provider: Any) -> TronHttpEndpoints:
    if hasattr(provider, "to_config"):
        provider = provider.to_config()
    if not isinstance(provider, dict):
        return default_endpoints()

    base_url = str(provider.get("base_url") or TRON).rstrip("/")
    cookie_domain = urlparse(base_url).hostname or DEFAULT_ENDPOINTS.session_cookie_domain
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


def make_tku_sso_login_form_url(target_url: str) -> str:
    return TKU_SSO_LOGIN_FORM_URL_TEMPLATE.format(target_url)


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

    def is_tku_fast_sso(self) -> bool:
        host = urlparse(self.endpoints.base_url).hostname or ""
        login_host = urlparse(self.endpoints.login_url).hostname or ""
        return host.lower() == TKU_ICLASS_HOST or login_host.lower() == TKU_ICLASS_HOST

    def is_public_cloud_email_login(self) -> bool:
        auth_flow = str(getattr(self.endpoints, "auth_flow", "") or "").strip().lower()
        host = (urlparse(self.endpoints.base_url).hostname or "").lower()
        login_host = (urlparse(self.endpoints.login_url).hostname or "").lower()
        return auth_flow == PUBLIC_CLOUD_AUTH_FLOW or host in PUBLIC_CLOUD_HOSTS or login_host in PUBLIC_CLOUD_HOSTS

    def _set_tku_browser_cookie(self, name: str, value: str, path: str = "/") -> None:
        if URL is None:
            return
        cookie = SimpleCookie()
        cookie[name] = value
        cookie[name]["path"] = path
        self.session.cookie_jar.update_cookies(
            cookie,
            response_url=URL("https://sso.tku.edu.tw/"),
        )

    async def _get_login_form_response(
        self,
        url: str,
        headers: Optional[Dict[str, str]] = None,
    ) -> tuple[str, str]:
        async with self.session.get(url, headers=headers, **self.request_kwargs()) as resp:
            return await resp.text(), str(resp.url)

    async def _get_login_form_page(
        self,
        url: str,
        headers: Optional[Dict[str, str]] = None,
    ) -> str:
        html_text, _ = await self._get_login_form_response(url, headers)
        return html_text

    async def _fetch_tku_image_validate_code(self, form_url: str) -> str:
        validate_url = urljoin(form_url, "ImageValidate")
        async with self.session.get(
            validate_url,
            headers=TKU_SSO_IMAGE_HEADERS,
            **self.request_kwargs(),
        ) as resp:
            await resp.read()

        async with self.session.post(
            validate_url,
            data={"outType": "1"},
            headers=TKU_SSO_AJAX_HEADERS,
            **self.request_kwargs(),
        ) as resp:
            await resp.read()

        async with self.session.post(
            validate_url,
            data={"outType": "2"},
            headers=TKU_SSO_AJAX_HEADERS,
            **self.request_kwargs(),
        ) as resp:
            if resp.status != 200:
                raise LoginPageChangedError("TKU SSO ImageValidate returned HTTP {}.".format(resp.status))
            code = (await resp.text()).strip()
        if not code:
            raise LoginPageChangedError("TKU SSO ImageValidate did not return a validation code.")
        return code

    async def _complete_tku_login_form(self, form: LoginForm) -> LoginForm:
        fields = dict(form.fields)
        if "vidcode" in fields and not fields["vidcode"]:
            fields["vidcode"] = await self._fetch_tku_image_validate_code(form.action_url)
        return LoginForm(action_url=form.action_url, fields=fields)

    async def _follow_tku_login_redirects(
        self,
        html_text: str,
        base_url: str,
        max_redirects: int = 10,
    ) -> str:
        final_url = base_url
        for _ in range(max_redirects):
            redirect_url = extract_html_redirect(html_text, final_url)
            if redirect_url is None:
                break

            while True:
                headers = dict(NAVIGATION_HEADERS)
                headers["Referer"] = final_url
                async with self.session.get(
                    redirect_url,
                    headers=headers,
                    allow_redirects=False,
                    **self.request_kwargs(),
                ) as resp:
                    html_text = await resp.text()
                    response_url = str(resp.url)
                    location = resp.headers.get("Location")
                    if resp.status in {301, 302, 303, 307, 308} and location:
                        final_url = response_url
                        redirect_url = urljoin(response_url, location)
                        continue

                    final_url = response_url
                    break

        return final_url

    async def fetch_login_form(self) -> LoginForm:
        html_text, current_url = await self._get_login_form_response(self.endpoints.login_url)
        if self.is_public_cloud_email_login():
            try:
                return extract_public_cloud_email_login_form(html_text, current_url)
            except LoginPageChangedError:
                return extract_login_form(html_text, current_url)
        if not self.is_tku_fast_sso():
            return extract_login_form(html_text, self.endpoints.login_url)

        try:
            return await self._complete_tku_login_form(extract_login_form(html_text, current_url))
        except LoginPageChangedError:
            if "redirectLoginPage" not in html_text and "logineb.jsp" not in html_text:
                raise

        self._set_tku_browser_cookie("IV_JCT", "%2FNEAI")
        sso_login_form_url = make_tku_sso_login_form_url(current_url)
        html_text = await self._get_login_form_page(sso_login_form_url, TKU_SSO_FORM_HEADERS)
        form = extract_login_form(html_text, sso_login_form_url)
        if ";jsessionid=" in form.action_url:
            html_text = await self._get_login_form_page(sso_login_form_url, TKU_SSO_FORM_HEADERS)
            form = extract_login_form(html_text, sso_login_form_url)
        return await self._complete_tku_login_form(form)

    async def submit_login(self, form: LoginForm, username: str, password: str) -> LoginOutcome:
        form_data = dict(form.fields)
        form_data.update(
            {
                form.username_field: username,
                form.password_field: password,
            }
        )

        headers = None
        allow_redirects = True
        if self.is_tku_fast_sso() and urlparse(form.action_url).hostname == TKU_SSO_HOST:
            headers = TKU_SSO_SUBMIT_HEADERS
            allow_redirects = False

        post_kwargs: Dict[str, Any] = {"data": form_data}
        if headers is not None:
            post_kwargs["headers"] = headers
            post_kwargs["allow_redirects"] = allow_redirects

        async with self.session.post(
            form.action_url,
            **post_kwargs,
            **self.request_kwargs(),
        ) as resp:
            html_text = await resp.text()
            final_url = str(resp.url)

        if headers is not None:
            final_url = await self._follow_tku_login_redirects(html_text, final_url)

        if self.endpoints.session_cookie_domain == DEFAULT_ENDPOINTS.session_cookie_domain:
            has_session = has_session_cookie(self.session)
        else:
            try:
                has_session = has_session_cookie(self.session, self.endpoints.session_cookie_domain)
            except TypeError:
                # Some legacy tests and external monkeypatches replace
                # has_session_cookie with a one-argument callable.
                has_session = has_session_cookie(self.session)
        if headers is not None and not has_session:
            raise LoginPageChangedError("TKU fast SSO login did not yield an iClass session cookie.")
        if "login" in final_url.lower() and not has_session:
            raise LoginRejectedError("登入失敗，請檢查帳號或密碼是否正確。")

        return LoginOutcome(final_url=final_url, has_session=has_session)

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

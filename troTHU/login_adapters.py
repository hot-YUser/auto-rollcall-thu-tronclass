from __future__ import annotations
import ast
import base64
import json
import re
from abc import ABC, abstractmethod
from typing import Dict, Any, Optional, Tuple
from urllib.parse import urljoin, urlparse
import troTHU.tron_http as tron_http


# --- loginSettings (TronClass homepage "本校/統一登入" vs "非本校") resolution -------
# Some schools' homepage orgSettings.loginSettings offers two login URLs; the real
# campus SSO carries kc_idp_hint and is NOT {base}/login. Rule (user): whenever a
# loginSettings entry has kc_idp_hint, use it. Parser must accept both double-quoted
# JSON and single-quoted Python-dict (e.g. CityU) forms. Verified live 2026-06.
_LOGIN_SETTINGS_RE = re.compile(r"""["']loginSettings["']\s*:\s*(\[.*?\])""", re.DOTALL)


def parse_login_settings(html_text: str) -> list:
    """Extract orgSettings.loginSettings as a list of {url,title} dicts (or [])."""
    match = _LOGIN_SETTINGS_RE.search(html_text or "")
    if not match:
        return []
    raw = match.group(1)
    for loader in (json.loads, ast.literal_eval):
        try:
            value = loader(raw)
        except Exception:
            continue
        if isinstance(value, list):
            return [item for item in value if isinstance(item, dict)]
    # last resort: pull out the url values directly
    return [{"url": m.group(1)} for m in re.finditer(r"""["']url["']\s*:\s*["']([^"']+)["']""", raw)]


def pick_login_settings_url(settings: list) -> Optional[str]:
    """The campus-SSO entry: the first whose url carries kc_idp_hint. None → use /login."""
    for item in settings or []:
        if isinstance(item, dict):
            url = str(item.get("url", ""))
            if "kc_idp_hint=" in url:
                return url
    return None


# Field-name / captcha heuristics for external-SSO credential forms (generic, not per-school).
_CAPTCHA_FIELD_HINTS = ("captcha", "verif", "valid", "checkcode", "check_code", "secret", "authcode",
                        "auth_code", "kaptcha", "vcode", "yzm", "seccode", "imgcode")
_USERNAME_FIELD_HINTS = ("user", "account", "login", "uid", "muid", "acc", "email", "memberid", "stuid", "name", "id")
_CAPTCHA_IMG_HINT_RE = re.compile(r"captcha|authimage|getcode|get_code|verif|valid|kaptcha|yzm|secret|number|\.do\?|\.php\?|/code\b", re.I)
_FEDERATED_HOST_MARKERS = ("accounts.google.com", "google.com/o/oauth", "login.microsoftonline.com",
                           "login.microsoft.com", "login.live.com", ".okta.com", "adfs", "/oauth2/authorize")


def _is_federated_host(host: str) -> bool:
    h = (host or "").lower()
    return any(marker in h for marker in _FEDERATED_HOST_MARKERS)


def _iter_form_inputs(html_text: str):
    """Yield (form_attrs, [input_attrs,...]) for every <form> in the page."""
    for m in re.finditer(r"(<form\b[^>]*>)(.*?)</form>", html_text or "", re.IGNORECASE | re.DOTALL):
        form_attrs = tron_http.parse_tag_attributes(m.group(1))
        inputs = []
        for tag in tron_http.INPUT_PATTERN.findall(m.group(2)):
            attrs = tron_http.parse_tag_attributes(tag)
            if attrs.get("name"):
                inputs.append(attrs)
        yield form_attrs, inputs


def detect_sso_form(html_text: str) -> Optional[Dict[str, Any]]:
    """Find the form that has a password input and infer its username / password /
    captcha field names by input type + name hints (handles muid/mpassword, login_name,
    pLoginName/pSecretString, ... without per-school code). None if no password form."""
    for form_attrs, inputs in _iter_form_inputs(html_text):
        pw = next((i for i in inputs if i.get("type", "").lower() == "password"), None)
        if not pw:
            continue
        password_field = pw.get("name")
        texts = [
            i for i in inputs
            if i.get("type", "text").lower() in ("text", "email", "tel", "")
            and i.get("name") != password_field
        ]
        captcha_field = None
        captcha_maxlen = 4
        for i in texts:
            nm = (i.get("name", "") + " " + i.get("id", "")).lower()
            if any(h in nm for h in _CAPTCHA_FIELD_HINTS):
                captcha_field = i.get("name")
                if str(i.get("maxlength", "")).isdigit():
                    captcha_maxlen = int(i["maxlength"])
                break
        username_field = next((i.get("name") for i in texts if i.get("name") != captcha_field), None)
        if not username_field:
            username_field = next(
                (i.get("name") for i in texts
                 if any(h in i.get("name", "").lower() for h in _USERNAME_FIELD_HINTS)),
                None,
            )
        fields = {i.get("name"): i.get("value", "") for i in inputs if i.get("name")}
        return {
            "action": form_attrs.get("action", ""),
            "fields": fields,
            "username_field": username_field or "username",
            "password_field": password_field,
            "captcha_field": captcha_field,
            "captcha_maxlen": captcha_maxlen,
        }
    return None


def find_captcha_source(html_text: str, base_url: str) -> Optional[str]:
    """Resolve the captcha image URL: a static <img src> that looks like a captcha, or
    (when the captcha <img> has no src and is JS-populated) a captcha-ish ajax URL."""
    for m in re.finditer(r"<img\b[^>]*>", html_text or "", re.IGNORECASE):
        src = tron_http.parse_tag_attributes(m.group(0)).get("src", "")
        if src and not src.startswith("data:") and _CAPTCHA_IMG_HINT_RE.search(src):
            return urljoin(base_url, src)
    js_captcha_img = re.search(
        r"<img\b[^>]*(?:id|name|class)\s*=\s*['\"][^'\"]*(?:captcha|secret|verif|code)[^'\"]*['\"]",
        html_text or "", re.IGNORECASE)
    if js_captcha_img:
        for jm in re.finditer(r"""(?:url|src|ajax|fetch)\s*[:(]\s*[`'\"]([^`'\"]+)[`'\"]""", html_text or "", re.I):
            u = jm.group(1)
            if re.search(r"captcha|getcode|get_code|number|verif|secret|/code", u, re.I):
                return urljoin(base_url, u)
    return None


async def _fetch_sso_captcha_bytes(client: tron_http.TronHttpClient, url: str) -> bytes:
    """GET a captcha that is either a raw image or a base64 (optionally data-URI) string."""
    async with client.session.get(url, **client.request_kwargs()) as resp:
        if resp.status != 200:
            raise tron_http.LoginPageChangedError("驗證碼端點回應 HTTP {}。".format(resp.status))
        ctype = resp.headers.get("Content-Type", "").lower()
        raw = await resp.read()
    if ctype.startswith("image"):
        return raw
    text = raw.decode("utf-8", "ignore").strip().strip('"')
    if text.startswith("data:image") and "," in text:
        text = text.split(",", 1)[1]
    try:
        return base64.b64decode(text)
    except Exception:
        return raw


def _keycloak_captcha_url(action_url: str) -> str:
    """Derive the JSON captcha endpoint from a Keycloak login-actions form action.

    e.g. https://tcidentity.asia.edu.tw/auth/realms/asia/login-actions/authenticate?...
      -> https://tcidentity.asia.edu.tw/auth/realms/asia/captcha/code
    Works with or without the legacy /auth path prefix. Returns "" if not derivable.
    """
    match = re.search(r"^(.*?/realms/[^/]+)/", str(action_url or ""))
    if not match:
        return ""
    return match.group(1) + tron_http.KEYCLOAK_CAPTCHA_ENDPOINT_SUFFIX


async def _fetch_keycloak_captcha(client: tron_http.TronHttpClient, url: str) -> Tuple[bytes, str]:
    """GET the Keycloak captcha JSON {image: data-URI, key} in-session; return (image_bytes, key)."""
    async with client.session.get(
        url,
        headers={"X-Requested-With": "XMLHttpRequest", "Accept": "application/json"},
        **client.request_kwargs(),
    ) as resp:
        if resp.status != 200:
            raise tron_http.LoginPageChangedError("Keycloak 驗證碼端點回應 HTTP {}。".format(resp.status))
        data = await resp.json(content_type=None)
    image = str((data or {}).get("image", ""))
    key = str((data or {}).get("key", ""))
    if not image.startswith("data:image") or "," not in image or not key:
        raise tron_http.LoginPageChangedError("Keycloak 驗證碼回應格式非預期。")
    try:
        image_bytes = base64.b64decode(image.split(",", 1)[1])
    except Exception as exc:
        raise tron_http.LoginPageChangedError("Keycloak 驗證碼影像解碼失敗。") from exc
    return image_bytes, key


def _adapter_has_session(client: tron_http.TronHttpClient) -> bool:
    """Session-cookie check honouring a provider-specific cookie domain.

    Mirrors the inline logic in the base submit_login; factored out for the
    captcha-retry adapters that need to test for success mid-loop.
    """
    if client.endpoints.session_cookie_domain == tron_http.DEFAULT_ENDPOINTS.session_cookie_domain:
        return tron_http.has_session_cookie(client.session)
    try:
        return tron_http.has_session_cookie(client.session, client.endpoints.session_cookie_domain)
    except TypeError:
        return tron_http.has_session_cookie(client.session)

class LoginAdapter(ABC):
    auth_flow: str = ""
    prefers_browser_assisted_login: bool = False
    requires_api_session_validation: bool = False
    requires_manual_cookie_login: bool = False
    requires_password: bool = True

    @abstractmethod
    async def fetch_login_form(self, client: tron_http.TronHttpClient) -> tron_http.LoginForm:
        pass

    async def submit_login(
        self,
        client: tron_http.TronHttpClient,
        form: tron_http.LoginForm,
        username: str,
        password: str,
    ) -> tron_http.LoginOutcome:
        form_data = dict(form.fields)
        form_data.update(
            {
                form.username_field: username,
                form.password_field: password,
            }
        )
        post_kwargs: Dict[str, Any] = {"data": form_data}
        async with client.session.post(
            form.action_url,
            **post_kwargs,
            **client.request_kwargs(),
        ) as resp:
            await resp.text()
            final_url = str(resp.url)

        if client.endpoints.session_cookie_domain == tron_http.DEFAULT_ENDPOINTS.session_cookie_domain:
            has_session = tron_http.has_session_cookie(client.session)
        else:
            try:
                has_session = tron_http.has_session_cookie(client.session, client.endpoints.session_cookie_domain)
            except TypeError:
                has_session = tron_http.has_session_cookie(client.session)

        if "login" in final_url.lower() and not has_session:
            raise tron_http.LoginRejectedError("登入失敗，請檢查帳號或密碼是否正確。")

        return tron_http.LoginOutcome(final_url=final_url, has_session=has_session)


class CasLoginAdapter(LoginAdapter):
    auth_flow = "thu_cas"
    prefers_browser_assisted_login = False
    requires_api_session_validation = False
    requires_manual_cookie_login = False
    requires_password = True

    async def fetch_login_form(self, client: tron_http.TronHttpClient) -> tron_http.LoginForm:
        html_text, current_url = await client._get_login_form_response(client.endpoints.login_url)
        # Resolve relative form actions against the *final* URL after redirects
        # (matching FjuOcr/PublicCloud adapters). This lets a provider set
        # login_url = base_url + "/login" and rely on the LMS /login → IdP 302:
        # for a separate-host Apereo CAS page with a relative action the action
        # must urljoin against the IdP host, not the LMS login_url.
        return tron_http.extract_login_form(html_text, current_url)


class CasApiValidatedLoginAdapter(CasLoginAdapter):
    """Generic CAS/Keycloak form login (identical to thu_cas), but flags the session
    for API validation. TronClass sets an anonymous `session` cookie on the LMS host
    during the login-page GET, so cookie presence alone is a false positive — the
    bulk-registered schools (login_url = LMS /login) must confirm the session with an
    authenticated API call (validate_login_api_session). THU/SCU stay on thu_cas
    because their login_url targets the IdP directly, so no anonymous LMS cookie is set.
    """

    auth_flow = "cas_api_validated"
    requires_api_session_validation = True


class TkuSsoLoginAdapter(LoginAdapter):
    auth_flow = "tku_sso_browser"
    prefers_browser_assisted_login = False
    requires_api_session_validation = True
    requires_manual_cookie_login = False
    requires_password = True

    async def fetch_login_form(self, client: tron_http.TronHttpClient) -> tron_http.LoginForm:
        html_text, current_url = await client._get_login_form_response(client.endpoints.login_url)
        try:
            return await client._complete_tku_login_form(tron_http.extract_login_form(html_text, current_url))
        except tron_http.LoginPageChangedError:
            if "redirectLoginPage" not in html_text and "logineb.jsp" not in html_text:
                raise

        client._set_tku_browser_cookie("IV_JCT", "%2FNEAI")
        sso_login_form_url = tron_http.make_tku_sso_login_form_url(current_url)
        html_text = await client._get_login_form_page(sso_login_form_url, tron_http.TKU_SSO_FORM_HEADERS)
        form = tron_http.extract_login_form(html_text, sso_login_form_url)
        if ";jsessionid=" in form.action_url:
            html_text = await client._get_login_form_page(sso_login_form_url, tron_http.TKU_SSO_FORM_HEADERS)
            form = tron_http.extract_login_form(html_text, sso_login_form_url)
        return await client._complete_tku_login_form(form)

    async def submit_login(
        self,
        client: tron_http.TronHttpClient,
        form: tron_http.LoginForm,
        username: str,
        password: str,
    ) -> tron_http.LoginOutcome:
        form_data = dict(form.fields)
        form_data.update(
            {
                form.username_field: username,
                form.password_field: password,
            }
        )

        from urllib.parse import urlparse
        headers = None
        allow_redirects = True
        if urlparse(form.action_url).hostname == tron_http.TKU_SSO_HOST:
            headers = tron_http.TKU_SSO_SUBMIT_HEADERS
            allow_redirects = False

        post_kwargs: Dict[str, Any] = {"data": form_data}
        if headers is not None:
            post_kwargs["headers"] = headers
            post_kwargs["allow_redirects"] = allow_redirects

        async with client.session.post(
            form.action_url,
            **post_kwargs,
            **client.request_kwargs(),
        ) as resp:
            html_text = await resp.text()
            final_url = str(resp.url)

        if headers is not None:
            final_url = await client._follow_tku_login_redirects(html_text, final_url)

        if client.endpoints.session_cookie_domain == tron_http.DEFAULT_ENDPOINTS.session_cookie_domain:
            has_session = tron_http.has_session_cookie(client.session)
        else:
            try:
                has_session = tron_http.has_session_cookie(client.session, client.endpoints.session_cookie_domain)
            except TypeError:
                has_session = tron_http.has_session_cookie(client.session)
        if headers is not None and not has_session:
            raise tron_http.LoginPageChangedError("TKU fast SSO login did not yield an iClass session cookie.")
        if "login" in final_url.lower() and not has_session:
            raise tron_http.LoginRejectedError("登入失敗，請檢查帳號或密碼是否正確。")

        return tron_http.LoginOutcome(final_url=final_url, has_session=has_session)


class PublicCloudEmailLoginAdapter(LoginAdapter):
    auth_flow = "public_cloud_email"
    prefers_browser_assisted_login = False
    requires_api_session_validation = True
    requires_manual_cookie_login = False
    requires_password = True

    async def fetch_login_form(self, client: tron_http.TronHttpClient) -> tron_http.LoginForm:
        html_text, current_url = await client._get_login_form_response(client.endpoints.login_url)
        try:
            return tron_http.extract_public_cloud_email_login_form(html_text, current_url)
        except tron_http.LoginPageChangedError:
            return tron_http.extract_login_form(html_text, current_url)


class ManualCookieLoginAdapter(LoginAdapter):
    auth_flow = "manual_cookie_only"
    prefers_browser_assisted_login = False
    requires_api_session_validation = True
    requires_manual_cookie_login = True
    requires_password = False

    async def fetch_login_form(self, client: tron_http.TronHttpClient) -> tron_http.LoginForm:
        # Never reached in the normal flow: login() short-circuits manual-cookie
        # providers before building a client. Degrade into the handled
        # changed-page branch rather than an uncaught error if called directly.
        raise tron_http.LoginPageChangedError("manual cookie only: no password login form")

    async def submit_login(
        self,
        client: tron_http.TronHttpClient,
        form: tron_http.LoginForm,
        username: str,
        password: str,
    ) -> tron_http.LoginOutcome:
        raise tron_http.LoginPageChangedError("manual cookie only: credential submission unsupported")


class InteractiveBrowserLoginAdapter(LoginAdapter):
    auth_flow = "interactive_browser"
    prefers_browser_assisted_login = False
    requires_api_session_validation = True
    requires_manual_cookie_login = False
    requires_password = False

    async def fetch_login_form(self, client: tron_http.TronHttpClient) -> tron_http.LoginForm:
        raise tron_http.LoginPageChangedError("interactive browser login: no password login form")

    async def submit_login(
        self,
        client: tron_http.TronHttpClient,
        form: tron_http.LoginForm,
        username: str,
        password: str,
    ) -> tron_http.LoginOutcome:
        raise tron_http.LoginPageChangedError("interactive browser login: credential submission unsupported")


class FjuOcrLoginAdapter(LoginAdapter):
    """Generic CAS login with a local OCR image-captcha solve.

    Same CAS form as thu_cas, plus an image captcha. fetch_login_form reuses the
    generic extract_login_form; submit_login fetches the captcha image, OCRs it with
    the optional ddddocr engine, fills the captcha field and POSTs. On a miss it
    retries against a freshly rendered form (CAS login tickets are single-use), up to
    FJU_MAX_CAPTCHA_ATTEMPTS, then reports a rejection. When ddddocr is not installed
    it raises LoginPageChangedError so login() can fall back, and the provider also
    degrades to manual-cookie via provider_requires_manual_cookie_login.

    The captcha shape (image name, field name, charset, length) is read per-provider
    from client.endpoints (FJU's 4-digit-numeric captcha.jpg are the defaults), so
    this one adapter serves both the `fju_ocr_captcha` and generic `cas_ocr_captcha`
    flows. Schools whose captcha differs override captcha_* in their provider config.
    """

    auth_flow = "fju_ocr_captcha"
    prefers_browser_assisted_login = False
    requires_api_session_validation = True
    requires_manual_cookie_login = False
    requires_password = True

    async def fetch_login_form(self, client: tron_http.TronHttpClient) -> tron_http.LoginForm:
        html_text, current_url = await client._get_login_form_response(client.endpoints.login_url)
        return tron_http.extract_login_form(html_text, current_url)

    async def submit_login(
        self,
        client: tron_http.TronHttpClient,
        form: tron_http.LoginForm,
        username: str,
        password: str,
    ) -> tron_http.LoginOutcome:
        import troTHU.ocr_captcha as ocr_captcha

        if not ocr_captcha.ddddocr_available():
            raise tron_http.LoginPageChangedError(
                "FJU 圖形驗證碼登入需要 OCR 套件；請安裝 pip install -e .[ocr]，或改用瀏覽器／手動 cookie 登入。"
            )

        endpoints = client.endpoints
        captcha_field = getattr(endpoints, "captcha_field", tron_http.FJU_CAPTCHA_FIELD)
        captcha_image_name = getattr(endpoints, "captcha_image_name", tron_http.FJU_CAPTCHA_IMAGE_NAME)
        captcha_charset = getattr(endpoints, "captcha_charset", tron_http.FJU_CAPTCHA_CHARSET)
        captcha_length = getattr(endpoints, "captcha_length", tron_http.FJU_CAPTCHA_LENGTH)

        current_form = form
        for _ in range(tron_http.FJU_MAX_CAPTCHA_ATTEMPTS):
            captcha_url = urljoin(current_form.action_url, captcha_image_name)
            image_bytes = await client.fetch_captcha_image(captcha_url)
            try:
                code = ocr_captcha.solve_captcha(image_bytes, charset=captcha_charset)
            except ocr_captcha.OcrUnavailableError as exc:
                raise tron_http.LoginPageChangedError(str(exc)) from exc

            if len(code) != captcha_length:
                # Low-confidence read; the CAS ticket is still unused, so just
                # fetch a fresh captcha and try again (bounded by the loop).
                continue

            form_data = dict(current_form.fields)
            form_data.update(
                {
                    current_form.username_field: username,
                    current_form.password_field: password,
                    captcha_field: code,
                }
            )
            async with client.session.post(
                current_form.action_url,
                data=form_data,
                **client.request_kwargs(),
            ) as resp:
                body = await resp.text()
                final_url = str(resp.url)

            if _adapter_has_session(client) and "login" not in final_url.lower():
                return tron_http.LoginOutcome(final_url=final_url, has_session=True)

            # Failed attempt. A wrong captcha and a wrong password are indistinguishable
            # here (both just re-render the form), so re-parse the response for the fresh
            # login ticket and retry; exhausting the budget reports a rejection.
            try:
                current_form = tron_http.extract_login_form(body, final_url)
            except tron_http.LoginPageChangedError:
                break

        raise tron_http.LoginRejectedError(
            "登入失敗，請檢查帳號或密碼是否正確（或圖形驗證碼辨識連續失敗）。"
        )


class KeycloakOcrCaptchaLoginAdapter(CasLoginAdapter):
    """Keycloak (WeJoy/TronClass 'tw-common' theme) CAS login whose form adds a JS-
    loaded image captcha — verified live on 亞洲/馬偕/虎尾. Unlike FJU's static
    captcha.jpg, the image and a one-time key come from
    GET /auth/realms/<realm>/captcha/code as JSON {image: data-URI, key}; the page
    fills a hidden `captchaKey` and the user types `captchaCode`. So submit_login OCRs
    the data-URI image and POSTs captchaCode (OCR) + captchaKey (returned key) with the
    credentials. Retries against a freshly rendered form on a miss (single-use tokens),
    and degrades like FJU when ddddocr is unavailable.
    """

    auth_flow = "keycloak_ocr_captcha"
    requires_api_session_validation = True
    requires_password = True

    async def submit_login(
        self,
        client: tron_http.TronHttpClient,
        form: tron_http.LoginForm,
        username: str,
        password: str,
    ) -> tron_http.LoginOutcome:
        import troTHU.ocr_captcha as ocr_captcha

        if not ocr_captcha.ddddocr_available():
            raise tron_http.LoginPageChangedError(
                "Keycloak 圖形驗證碼登入需要 OCR 套件；請安裝 pip install -e .[ocr]，或改用瀏覽器／手動 cookie 登入。"
            )

        current_form = form
        for _ in range(tron_http.KEYCLOAK_CAPTCHA_MAX_ATTEMPTS):
            captcha_url = _keycloak_captcha_url(current_form.action_url)
            if not captcha_url:
                raise tron_http.LoginPageChangedError("無法從 Keycloak 登入表單推導驗證碼端點。")
            image_bytes, key = await _fetch_keycloak_captcha(client, captcha_url)
            try:
                code = ocr_captcha.solve_captcha(image_bytes, charset=tron_http.KEYCLOAK_CAPTCHA_CHARSET)
            except ocr_captcha.OcrUnavailableError as exc:
                raise tron_http.LoginPageChangedError(str(exc)) from exc

            if len(code) != tron_http.KEYCLOAK_CAPTCHA_LENGTH:
                continue  # low-confidence read; fetch a fresh captcha and retry

            form_data = dict(current_form.fields)
            form_data.update(
                {
                    current_form.username_field: username,
                    current_form.password_field: password,
                    tron_http.KEYCLOAK_CAPTCHA_CODE_FIELD: code,
                    tron_http.KEYCLOAK_CAPTCHA_KEY_FIELD: key,
                }
            )
            async with client.session.post(
                current_form.action_url,
                data=form_data,
                **client.request_kwargs(),
            ) as resp:
                body = await resp.text()
                final_url = str(resp.url)

            if _adapter_has_session(client) and "login" not in final_url.lower():
                return tron_http.LoginOutcome(final_url=final_url, has_session=True)

            try:
                current_form = tron_http.extract_login_form(body, final_url)
            except tron_http.LoginPageChangedError:
                break

        raise tron_http.LoginRejectedError(
            "登入失敗，請檢查帳號或密碼是否正確（或圖形驗證碼辨識連續失敗）。"
        )


class SsoFormLoginAdapter(CasApiValidatedLoginAdapter):
    """Generic external-SSO credential login for the `cas_login_settings` flow.

    login() resolves the homepage loginSettings → the campus-SSO (kc_idp_hint) URL and
    overrides login_url before this runs. fetch_login_form GETs that page and:
      - raises LoginPageChangedError if it landed on a federated IdP (Google/Microsoft/…)
        or has no static password form (e.g. NetIQ NAM JS form) → login() opens an
        interactive browser instead;
      - else detects username/password/captcha field names generically (handles
        muid/mpassword, login_name, pLoginName/pSecretString, … with no per-school code).
    submit_login OCRs the image captcha (raw <img> or JS base64 endpoint) and POSTs the
    detected fields + all hidden inputs, retrying on a miss; on exhaustion it raises
    LoginRejectedError so login() falls back to the interactive browser.
    """

    auth_flow = "cas_login_settings"
    requires_api_session_validation = True
    requires_password = True

    async def fetch_login_form(self, client: tron_http.TronHttpClient) -> tron_http.LoginForm:
        html_text, current_url = await client._get_login_form_response(client.endpoints.login_url)
        if _is_federated_host(urlparse(current_url).hostname or ""):
            raise tron_http.LoginPageChangedError(
                "登入導向聯邦式 SSO（{}），需瀏覽器登入。".format(urlparse(current_url).hostname)
            )
        detected = detect_sso_form(html_text)
        if not detected or not detected.get("password_field"):
            raise tron_http.LoginPageChangedError("登入頁無靜態帳密表單（可能為 JS/聯邦式），改用瀏覽器登入。")
        client._sso_state = {"html": html_text, "current_url": current_url, "detected": detected}
        return tron_http.LoginForm(
            action_url=urljoin(current_url, detected["action"]) if detected["action"] else current_url,
            fields=detected["fields"],
            username_field=detected["username_field"],
            password_field=detected["password_field"],
        )

    async def submit_login(
        self,
        client: tron_http.TronHttpClient,
        form: tron_http.LoginForm,
        username: str,
        password: str,
    ) -> tron_http.LoginOutcome:
        state = getattr(client, "_sso_state", None) or {}
        detected = state.get("detected") or {}
        if not detected.get("captcha_field"):
            # No captcha → ordinary credential POST with the detected field names.
            return await super().submit_login(client, form, username, password)

        import troTHU.ocr_captcha as ocr_captcha
        if not ocr_captcha.ddddocr_available():
            raise tron_http.LoginPageChangedError(
                "此 SSO 需圖形驗證碼 OCR；請安裝 pip install -e .[ocr]，或改用瀏覽器登入。"
            )

        html_text = state.get("html")
        current_url = state.get("current_url") or client.endpoints.login_url
        for _ in range(tron_http.SSO_CAPTCHA_MAX_ATTEMPTS):
            if html_text is None:
                html_text, current_url = await client._get_login_form_response(client.endpoints.login_url)
            det = detect_sso_form(html_text) or detected
            captcha_src = find_captcha_source(html_text, current_url)
            if not captcha_src:
                break
            action_url = urljoin(current_url, det["action"]) if det.get("action") else current_url
            try:
                image_bytes = await _fetch_sso_captcha_bytes(client, captcha_src)
                code = ocr_captcha.solve_captcha(image_bytes)
            except ocr_captcha.OcrUnavailableError as exc:
                raise tron_http.LoginPageChangedError(str(exc)) from exc
            except tron_http.LoginPageChangedError:
                html_text = None
                continue
            maxlen = det.get("captcha_maxlen") or 4
            if len(code) != maxlen:
                html_text = None  # low-confidence read; refetch fresh form + captcha
                continue
            form_data = dict(det["fields"])
            form_data.update({
                det["username_field"]: username,
                det["password_field"]: password,
                det["captcha_field"]: code,
            })
            async with client.session.post(action_url, data=form_data, **client.request_kwargs()) as resp:
                await resp.text()
                final_url = str(resp.url)
            if _adapter_has_session(client) and "login" not in final_url.lower():
                return tron_http.LoginOutcome(final_url=final_url, has_session=True)
            html_text = None  # retry with a freshly rendered form + captcha

        raise tron_http.LoginRejectedError(
            "登入失敗，請檢查帳號或密碼是否正確（或圖形驗證碼辨識連續失敗）。"
        )


_adapters_by_flow: Dict[str, LoginAdapter] = {
    "thu_cas": CasLoginAdapter(),
    "cas_api_validated": CasApiValidatedLoginAdapter(),
    "cas_login_settings": SsoFormLoginAdapter(),
    "keycloak_ocr_captcha": KeycloakOcrCaptchaLoginAdapter(),
    "tku_sso_browser": TkuSsoLoginAdapter(),
    "public_cloud_email": PublicCloudEmailLoginAdapter(),
    "manual_cookie_only": ManualCookieLoginAdapter(),
    "interactive_browser": InteractiveBrowserLoginAdapter(),
    "fju_ocr_captcha": FjuOcrLoginAdapter(),
    "cas_ocr_captcha": FjuOcrLoginAdapter(),
}

login_adapters_by_flow = _adapters_by_flow

def get_login_adapter(auth_flow: str) -> LoginAdapter:
    flow = str(auth_flow or "").strip().lower()
    return _adapters_by_flow.get(flow, _adapters_by_flow["thu_cas"])

"""The single, school-agnostic login pipeline.

Every provider logs in through `run_login_flow`. There is exactly one entry point;
it fetches the login page once and then branches purely on *detected features* of
the page — never on the school. The feature taxonomy (the only branch keys):

  - federated IdP host          -> raise -> interactive browser
  - JS auto-submit bootstrap    -> follow hidden-form hops (NetIQ NAM landing, etc.)
  - homepage loginSettings      -> resolved upstream in auth_runtime.login() (kc_idp_hint)
  - NetIQ NAM (NEAI)            -> nam handshake (SSO host derived from the page)
  - SPA email form (<login-view>) -> public-cloud email POST
  - generic credential form     -> detect username/password by input type + name hints
  - captcha (form field driven) -> static_image | keycloak_json  (else none)

The captcha protocol is decided by the FORM (a captchaKey/captchaCode field => Keycloak
JSON; a captcha-image input => static image), NOT by whether a /captcha/code endpoint
answers — it answers on most Keycloak tenants whether or not the realm enforces it
(verified live 2026-06: THU/au/cgust expose username+password only).

The shared detectors below were previously trapped inside per-school adapter classes;
they now live here as plain functions and are the whole story.
"""
from __future__ import annotations

import ast
import base64
import json
import re
from dataclasses import dataclass, field
from http.cookies import SimpleCookie
from typing import Any, Dict, Optional, Tuple
from urllib.parse import urljoin, urlparse

import troTHU.tron_http as tron_http

try:  # yarl ships with aiohttp; guard anyway for odd environments
    from yarl import URL
except Exception:  # pragma: no cover
    URL = None


# ============================================================================
# Feature detectors (school-agnostic)
# ============================================================================

# loginSettings: some schools' homepage orgSettings offers two login URLs; the real
# campus SSO carries kc_idp_hint and is NOT {base}/login. Accept double-quoted JSON
# and single-quoted Python-dict (CityU) forms. Verified live 2026-06.
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
    return [{"url": m.group(1)} for m in re.finditer(r"""["']url["']\s*:\s*["']([^"']+)["']""", raw)]


def pick_login_settings_url(settings: list) -> Optional[str]:
    """The campus-SSO entry: the first whose url carries kc_idp_hint. None -> use /login."""
    for item in settings or []:
        if isinstance(item, dict):
            url = str(item.get("url", ""))
            if "kc_idp_hint=" in url:
                return url
    return None


# Field-name / captcha heuristics for credential forms (generic, not per-school).
_CAPTCHA_FIELD_HINTS = ("captcha", "verif", "valid", "checkcode", "check_code", "secret", "authcode",
                        "auth_code", "kaptcha", "vcode", "yzm", "seccode", "imgcode")
_USERNAME_FIELD_HINTS = ("user", "account", "login", "uid", "muid", "acc", "email", "memberid", "stuid", "name", "id")
_CAPTCHA_IMG_STRONG_RE = re.compile(
    r"captcha|authimage|getcode|get_code|verif|valid|kaptcha|yzm|secret|number|/code\b", re.I)
_CAPTCHA_IMG_WEAK_RE = re.compile(r"\.do\?|\.php\?", re.I)
_CAPTCHA_IMG_EXCLUDE_RE = re.compile(
    r"logo|banner|header|download_file|loading|btn|button|icon|sprite|avatar|qrcode", re.I)
_FEDERATED_HOST_MARKERS = ("accounts.google.com", "google.com/o/oauth", "login.microsoftonline.com",
                           "login.microsoft.com", "login.live.com", ".okta.com", "adfs", "/oauth2/authorize")

# A captcha is required only when the credential form carries a captcha INPUT.
_STATIC_CAPTCHA_FIELD_HINTS = frozenset(
    {"captcha", "authcode", "auth_code", "verify_code", "verifycode", "checkcode", "check_code",
     "vcode", "yzm", "imgcode", "seccode", "kaptcha", "validatecode", "validate_code"}
)
_KEYCLOAK_CAPTCHA_FIELDS = frozenset({"captchakey", "captchacode"})

# NetIQ Access Manager (NEAI) markers — protocol, not school.
_NAM_MARKERS = ("/NEAI/", "logineb.jsp", "loginrwd.jsp", "redirectLoginPage", "Access Manager for e-business")
_NAM_NEAI_URL_RE = re.compile(
    r"""location\.href\s*=\s*["'](https?://[^"']+/NEAI/login(?:eb|rwd)\.jsp\?myurl=)["']""", re.I)


def _is_federated_host(host: str) -> bool:
    h = (host or "").lower()
    return any(marker in h for marker in _FEDERATED_HOST_MARKERS)


def _iter_form_inputs(html_text: str):
    for m in re.finditer(r"(<form\b[^>]*>)(.*?)</form>", html_text or "", re.IGNORECASE | re.DOTALL):
        form_attrs = tron_http.parse_tag_attributes(m.group(1))
        inputs = []
        for tag in tron_http.INPUT_PATTERN.findall(m.group(2)):
            attrs = tron_http.parse_tag_attributes(tag)
            if attrs.get("name"):
                inputs.append(attrs)
        yield form_attrs, inputs


def detect_sso_form(html_text: str) -> Optional[Dict[str, Any]]:
    """Find the form with a password input and infer username / password / captcha
    field names by input type + name hints (muid/mpassword, pLoginName, Ecom_User_ID,
    ... with no per-school code). None if no password form."""
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


def _img_srcs(html_text: str):
    for m in re.finditer(r"<img\b[^>]*>", html_text or "", re.IGNORECASE):
        src = tron_http.parse_tag_attributes(m.group(0)).get("src", "")
        if src and not src.startswith("data:"):
            yield src


def find_captcha_source(html_text: str, base_url: str) -> Optional[str]:
    """Resolve the captcha image URL, order-independent: a STRONG captcha <img src>
    wins (ignores a Logo with a .php?/.do? src appearing earlier, e.g. NCUT); else a
    WEAK dynamic-image src that is not a Logo/banner; else a JS-populated captcha img."""
    for src in _img_srcs(html_text):
        if _CAPTCHA_IMG_STRONG_RE.search(src):
            return urljoin(base_url, src)
    for src in _img_srcs(html_text):
        if _CAPTCHA_IMG_WEAK_RE.search(src) and not _CAPTCHA_IMG_EXCLUDE_RE.search(src):
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


_JS_AUTOSUBMIT_RE = re.compile(
    r"forms\[\s*0\s*\]\.submit\s*\(\)|\.forms\[[^\]]*\]\.submit\s*\(\)|document\.\w+\.submit\s*\(\)", re.I)


async def _follow_js_autosubmit(
    client: tron_http.TronHttpClient, html_text: str, current_url: str, max_hops: int = 4
) -> Tuple[str, str]:
    """Follow JS auto-submit intermediate forms (document.forms[0].submit()) to the
    real credential form. Stops at the password form or any non-autosubmit page."""
    for _ in range(max_hops):
        if not _JS_AUTOSUBMIT_RE.search(html_text or ""):
            break
        m = re.search(r"(<form\b[^>]*>)(.*?)</form>", html_text, re.IGNORECASE | re.DOTALL)
        if not m:
            break
        action = tron_http.parse_tag_attributes(m.group(1)).get("action")
        if not action:
            break
        inputs = [tron_http.parse_tag_attributes(t) for t in tron_http.INPUT_PATTERN.findall(m.group(2))]
        if any(i.get("type", "").lower() == "password" for i in inputs):
            break
        if any(i.get("type", "text").lower() in ("text", "email", "tel", "") and i.get("name") for i in inputs):
            break
        data = {i.get("name"): i.get("value", "") for i in inputs if i.get("name")}
        next_url = urljoin(current_url, action)
        async with client.session.post(next_url, data=data, **client.request_kwargs()) as resp:
            html_text = await resp.text()
            current_url = str(resp.url)
    return html_text, current_url


async def _fetch_sso_captcha_bytes(client: tron_http.TronHttpClient, url: str) -> bytes:
    """GET a captcha that is a raw image or a base64 (optionally data-URI) string."""
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
    """Derive the Keycloak JSON captcha endpoint from a login-actions form action.
    .../realms/<realm>/login-actions/authenticate?... -> .../realms/<realm>/captcha/code"""
    match = re.search(r"^(.*?/realms/[^/]+)/", str(action_url or ""))
    if not match:
        return ""
    return match.group(1) + tron_http.KEYCLOAK_CAPTCHA_ENDPOINT_SUFFIX


async def _fetch_keycloak_captcha(client: tron_http.TronHttpClient, url: str) -> Tuple[bytes, str]:
    """GET the Keycloak captcha JSON {image: data-URI, key}; return (image_bytes, key)."""
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


def _has_session(client: tron_http.TronHttpClient) -> bool:
    """Session-cookie check, always honouring the provider's own cookie domain
    (no THU-default special path)."""
    try:
        return tron_http.has_session_cookie(client.session, client.endpoints.session_cookie_domain)
    except TypeError:  # pragma: no cover - legacy single-arg signature
        return tron_http.has_session_cookie(client.session)


# ============================================================================
# NetIQ Access Manager (NEAI) handshake — protocol handler, SSO host derived live
# ============================================================================

def _is_nam_page(html_text: str) -> bool:
    text = html_text or ""
    return ("logineb.jsp" in text) or ("redirectLoginPage" in text) or ("Access Manager for e-business" in text)


def _nam_headers(*, lms_login_url: str, sso_origin: str, referer: str, kind: str) -> Dict[str, str]:
    accept_html = tron_http.HTML_ACCEPT
    lang = tron_http.LANGUAGE_ACCEPT
    if kind == "form":
        return {"Accept": accept_html, "Accept-Language": lang, "Referer": lms_login_url,
                "Upgrade-Insecure-Requests": "1"}
    if kind == "image":
        return {"Accept": "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
                "Accept-Language": lang, "Referer": referer}
    if kind == "ajax":
        return {"Accept": "text/plain, */*; q=0.01", "Accept-Language": lang,
                "Origin": sso_origin, "Referer": referer, "X-Requested-With": "XMLHttpRequest"}
    # submit
    return {"Accept": accept_html, "Accept-Language": lang, "Cache-Control": "max-age=0",
            "Origin": sso_origin, "Referer": referer, "Upgrade-Insecure-Requests": "1"}


def _set_cookie(client: tron_http.TronHttpClient, origin: str, name: str, value: str, path: str = "/") -> None:
    if URL is None:
        return
    cookie = SimpleCookie()
    cookie[name] = value
    cookie[name]["path"] = path
    try:
        client.session.cookie_jar.update_cookies(cookie, response_url=URL(origin.rstrip("/") + "/"))
    except Exception:
        pass


async def _fetch_nam_vidcode(client, validate_base_url: str, sso_origin: str, referer: str) -> str:
    """NEAI ImageValidate handshake: returns the server-issued validation code (a token,
    not OCR). GET ImageValidate, POST outType=1, POST outType=2 -> code text."""
    validate_url = urljoin(validate_base_url, "ImageValidate")
    async with client.session.get(
        validate_url, headers=_nam_headers(lms_login_url="", sso_origin=sso_origin, referer=referer, kind="image"),
        **client.request_kwargs(),
    ) as resp:
        await resp.read()
    ajax_headers = _nam_headers(lms_login_url="", sso_origin=sso_origin, referer=referer, kind="ajax")
    async with client.session.post(validate_url, data={"outType": "1"}, headers=ajax_headers, **client.request_kwargs()) as resp:
        await resp.read()
    async with client.session.post(validate_url, data={"outType": "2"}, headers=ajax_headers, **client.request_kwargs()) as resp:
        if resp.status != 200:
            raise tron_http.LoginPageChangedError("NAM ImageValidate 回應 HTTP {}。".format(resp.status))
        code = (await resp.text()).strip()
    if not code:
        raise tron_http.LoginPageChangedError("NAM ImageValidate 未回傳驗證碼。")
    return code


async def _reach_nam_form(client, html_text: str, current_url: str) -> Tuple[tron_http.LoginForm, str, str]:
    """From a NetIQ NAM landing page, derive the NEAI logineb.jsp entry (SSO host parsed
    from the page JS — not hardcoded), fetch the real credential form, and fill vidcode."""
    m = _NAM_NEAI_URL_RE.search(html_text or "")
    if not m:
        raise tron_http.LoginPageChangedError("NAM 登入頁無法解析 NEAI 進入點。")
    neai_base = m.group(1)  # ends with "...logineb.jsp?myurl="
    parsed = urlparse(neai_base)
    sso_origin = "{}://{}".format(parsed.scheme, parsed.netloc)
    lms_login_url = client.endpoints.login_url
    # myurl = the current page URL (the JS appends window.location.href, unencoded).
    nam_form_url = neai_base + current_url
    _set_cookie(client, sso_origin, "IV_JCT", "%2FNEAI")
    form_headers = _nam_headers(lms_login_url=lms_login_url, sso_origin=sso_origin, referer=lms_login_url, kind="form")
    async with client.session.get(nam_form_url, headers=form_headers, **client.request_kwargs()) as resp:
        page = await resp.text()
    form = tron_http.extract_login_form(page, nam_form_url)
    if ";jsessionid=" in form.action_url:
        async with client.session.get(nam_form_url, headers=form_headers, **client.request_kwargs()) as resp:
            page = await resp.text()
        form = tron_http.extract_login_form(page, nam_form_url)
    fields = dict(form.fields)
    if "vidcode" in fields and not fields["vidcode"]:
        fields["vidcode"] = await _fetch_nam_vidcode(client, form.action_url, sso_origin, nam_form_url)
    return tron_http.LoginForm(action_url=form.action_url, fields=fields), sso_origin, nam_form_url


async def _follow_html_redirects(client, html_text: str, base_url: str, max_redirects: int = 10) -> str:
    """Follow window.location/meta-refresh redirects (and any HTTP 30x) to a final URL."""
    final_url = base_url
    for _ in range(max_redirects):
        redirect_url = tron_http.extract_html_redirect(html_text, final_url)
        if redirect_url is None:
            break
        while True:
            headers = dict(tron_http.NAVIGATION_HEADERS)
            headers["Referer"] = final_url
            async with client.session.get(
                redirect_url, headers=headers, allow_redirects=False, **client.request_kwargs()
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


# ============================================================================
# The unified flow
# ============================================================================

CAPTCHA_NONE = "none"
CAPTCHA_STATIC_IMAGE = "static_image"
CAPTCHA_KEYCLOAK_JSON = "keycloak_json"


@dataclass
class ResolvedForm:
    kind: str                      # 'credential' | 'email_spa' | 'nam'
    form: tron_http.LoginForm
    captcha: str = CAPTCHA_NONE
    captcha_field: str = ""
    captcha_maxlen: int = 4
    detected: Dict[str, Any] = field(default_factory=dict)
    html: str = ""
    url: str = ""
    sso_origin: str = ""           # NAM only
    nam_form_url: str = ""         # NAM only


def _classify_captcha(detected: Dict[str, Any], field_names: Any) -> str:
    lower = {str(f).lower() for f in (field_names or [])}
    if _KEYCLOAK_CAPTCHA_FIELDS & lower:
        return CAPTCHA_KEYCLOAK_JSON
    if (detected or {}).get("captcha_field") or (_STATIC_CAPTCHA_FIELD_HINTS & lower):
        return CAPTCHA_STATIC_IMAGE
    return CAPTCHA_NONE


def _login_url_candidates(endpoints: Any) -> list[str]:
    """Generic, base_url-derived login-page candidates, identical for every school:
    the configured login_url (= base_url + /login) first, then base_url + /cas/login.
    No per-school override — a school that only serves its form at /cas/login is reached
    by the second candidate."""
    primary = str(getattr(endpoints, "login_url", "") or "")
    base = str(getattr(endpoints, "base_url", "") or "").rstrip("/")
    candidates = [primary]
    cas = base + "/cas/login" if base else ""
    if cas and cas != primary:
        candidates.append(cas)
    return [c for c in candidates if c]


async def _resolve_form_at(client: tron_http.TronHttpClient, login_url: str) -> Optional[ResolvedForm]:
    """Resolve ONE login URL to a credential form, purely by feature. Returns None when
    no credential form is found here (caller advances to the next candidate). Raises
    LoginPageChangedError only for a federated-SSO redirect (terminal: browser login)."""
    html, url = await client._get_login_form_response(login_url)
    html, url = await _follow_js_autosubmit(client, html, url)

    if _is_federated_host(urlparse(url).hostname or ""):
        raise tron_http.LoginPageChangedError(
            "登入導向聯邦式 SSO（{}），需瀏覽器登入。".format(urlparse(url).hostname))

    if tron_http.PUBLIC_CLOUD_LOGIN_VIEW_PATTERN.search(html or ""):
        try:
            form = tron_http.extract_public_cloud_email_login_form(html, url)
            return ResolvedForm(kind="email_spa", form=form, html=html, url=url)
        except tron_http.LoginPageChangedError:
            pass

    if _is_nam_page(html):
        form, sso_origin, nam_url = await _reach_nam_form(client, html, url)
        return ResolvedForm(kind="nam", form=form, sso_origin=sso_origin, nam_form_url=nam_url, html=html, url=url)

    detected = detect_sso_form(html)
    if detected and detected.get("password_field"):
        action = urljoin(url, detected["action"]) if detected.get("action") else url
        field_names = list((detected.get("fields") or {}).keys())
        return ResolvedForm(
            kind="credential",
            form=tron_http.LoginForm(
                action_url=action,
                fields=detected.get("fields") or {},
                username_field=detected.get("username_field") or "username",
                password_field=detected.get("password_field") or "password",
            ),
            captcha=_classify_captcha(detected, field_names),
            captcha_field=detected.get("captcha_field") or "",
            captcha_maxlen=detected.get("captcha_maxlen") or 4,
            detected=detected,
            html=html,
            url=url,
        )

    # Last resort: a CAS form whose password input wasn't picked up generically.
    try:
        form = tron_http.extract_login_form(html, url)
    except tron_http.LoginPageChangedError:
        return None  # no form here -> caller tries the next candidate URL
    return ResolvedForm(
        kind="credential",
        form=form,
        captcha=_classify_captcha({}, list(form.fields.keys())),
        captcha_field=tron_http.IMAGE_CAPTCHA_FIELD,
        html=html,
        url=url,
    )


async def resolve_credential_form(client: tron_http.TronHttpClient) -> ResolvedForm:
    """Resolve the login page to a credential form, purely by feature. Tries the
    base_url-derived candidates (/login then /cas/login) in order; the login_url is
    already loginSettings-resolved by the caller when applicable."""
    for login_url in _login_url_candidates(client.endpoints):
        resolved = await _resolve_form_at(client, login_url)
        if resolved is not None:
            return resolved
    raise tron_http.LoginPageChangedError("無法在 /login 或 /cas/login 定位登入表單。")


async def _submit_plain(client, form: tron_http.LoginForm, user: str, passwd: str) -> tron_http.LoginOutcome:
    form_data = dict(form.fields)
    form_data[form.username_field] = user
    form_data[form.password_field] = passwd
    async with client.session.post(form.action_url, data=form_data, **client.request_kwargs()) as resp:
        body = await resp.text()
        final_url = str(resp.url)
    body, final_url = await _follow_js_autosubmit(client, body, final_url)
    has_session = _has_session(client)
    if "login" in final_url.lower() and not has_session:
        raise tron_http.LoginRejectedError("登入失敗，請檢查帳號或密碼是否正確。")
    return tron_http.LoginOutcome(final_url=final_url, has_session=has_session)


async def _submit_static_image_captcha(client, resolved: ResolvedForm, user: str, passwd: str) -> tron_http.LoginOutcome:
    import troTHU.ocr_captcha as ocr_captcha
    if not ocr_captcha.ddddocr_available():
        raise tron_http.LoginPageChangedError(
            "圖形驗證碼登入需要 OCR 套件；請安裝 pip install -e .[ocr]，或改用瀏覽器／手動 cookie 登入。")

    html, form = resolved.html, resolved.form
    captcha_field = resolved.captcha_field or tron_http.IMAGE_CAPTCHA_FIELD
    maxlen = resolved.captcha_maxlen or tron_http.IMAGE_CAPTCHA_LENGTH
    for _ in range(tron_http.IMAGE_CAPTCHA_MAX_ATTEMPTS):
        captcha_src = find_captcha_source(html, form.action_url) or urljoin(
            form.action_url, tron_http.IMAGE_CAPTCHA_IMAGE_NAME)
        try:
            image_bytes = await _fetch_sso_captcha_bytes(client, captcha_src)
            code = ocr_captcha.solve_captcha(image_bytes)
        except ocr_captcha.OcrUnavailableError as exc:
            raise tron_http.LoginPageChangedError(str(exc)) from exc
        if maxlen and len(code) != maxlen:
            continue  # low-confidence read; re-fetch a fresh captcha against the same form
        form_data = dict(form.fields)
        form_data[form.username_field] = user
        form_data[form.password_field] = passwd
        form_data[captcha_field] = code
        async with client.session.post(form.action_url, data=form_data, **client.request_kwargs()) as resp:
            body = await resp.text()
            final_url = str(resp.url)
        body, final_url = await _follow_js_autosubmit(client, body, final_url)
        if _has_session(client) and "login" not in final_url.lower():
            return tron_http.LoginOutcome(final_url=final_url, has_session=True)
        # Wrong captcha and wrong password are indistinguishable (both re-render the
        # form). Re-parse the freshly rendered form for the new single-use ticket and
        # retry; exhausting the budget reports a rejection.
        try:
            detected = detect_sso_form(body)
            if detected and detected.get("password_field"):
                action = urljoin(final_url, detected["action"]) if detected.get("action") else final_url
                form = tron_http.LoginForm(
                    action_url=action, fields=detected.get("fields") or {},
                    username_field=detected.get("username_field") or "username",
                    password_field=detected.get("password_field") or "password")
                captcha_field = detected.get("captcha_field") or captcha_field
            else:
                form = tron_http.extract_login_form(body, final_url)
            html = body
        except tron_http.LoginPageChangedError:
            break
    raise tron_http.LoginRejectedError(
        "登入失敗，請檢查帳號或密碼是否正確（或圖形驗證碼辨識連續失敗）。")


async def _submit_keycloak_captcha(client, resolved: ResolvedForm, user: str, passwd: str) -> tron_http.LoginOutcome:
    import troTHU.ocr_captcha as ocr_captcha
    if not ocr_captcha.ddddocr_available():
        raise tron_http.LoginPageChangedError(
            "Keycloak 圖形驗證碼登入需要 OCR 套件；請安裝 pip install -e .[ocr]，或改用瀏覽器／手動 cookie 登入。")

    current_form = resolved.form
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
            continue
        form_data = dict(current_form.fields)
        form_data.update({
            current_form.username_field: user,
            current_form.password_field: passwd,
            tron_http.KEYCLOAK_CAPTCHA_CODE_FIELD: code,
            tron_http.KEYCLOAK_CAPTCHA_KEY_FIELD: key,
        })
        async with client.session.post(current_form.action_url, data=form_data, **client.request_kwargs()) as resp:
            body = await resp.text()
            final_url = str(resp.url)
        if _has_session(client) and "login" not in final_url.lower():
            return tron_http.LoginOutcome(final_url=final_url, has_session=True)
        try:
            detected = detect_sso_form(body)
            if detected and detected.get("password_field"):
                action = urljoin(final_url, detected["action"]) if detected.get("action") else final_url
                current_form = tron_http.LoginForm(
                    action_url=action, fields=detected.get("fields") or {},
                    username_field=detected.get("username_field") or "username",
                    password_field=detected.get("password_field") or "password")
            else:
                current_form = tron_http.extract_login_form(body, final_url)
        except tron_http.LoginPageChangedError:
            break
    raise tron_http.LoginRejectedError(
        "登入失敗，請檢查帳號或密碼是否正確（或圖形驗證碼辨識連續失敗）。")


async def _submit_nam(client, resolved: ResolvedForm, user: str, passwd: str) -> tron_http.LoginOutcome:
    form = resolved.form
    form_data = dict(form.fields)
    form_data[form.username_field] = user
    form_data[form.password_field] = passwd
    on_sso_host = (urlparse(form.action_url).hostname or "") == (urlparse(resolved.sso_origin).hostname or "")
    post_kwargs: Dict[str, Any] = {"data": form_data}
    if on_sso_host:
        post_kwargs["headers"] = _nam_headers(
            lms_login_url=client.endpoints.login_url, sso_origin=resolved.sso_origin,
            referer=resolved.nam_form_url, kind="submit")
        post_kwargs["allow_redirects"] = False
    async with client.session.post(form.action_url, **post_kwargs, **client.request_kwargs()) as resp:
        body = await resp.text()
        final_url = str(resp.url)
    if on_sso_host:
        final_url = await _follow_html_redirects(client, body, final_url)
    has_session = _has_session(client)
    if on_sso_host and not has_session:
        raise tron_http.LoginPageChangedError("NAM SSO 登入未取得有效 session cookie。")
    if "login" in final_url.lower() and not has_session:
        raise tron_http.LoginRejectedError("登入失敗，請檢查帳號或密碼是否正確。")
    return tron_http.LoginOutcome(final_url=final_url, has_session=has_session)


async def submit_credentials(client, resolved: ResolvedForm, user: str, passwd: str) -> tron_http.LoginOutcome:
    if resolved.kind == "nam":
        return await _submit_nam(client, resolved, user, passwd)
    if resolved.captcha == CAPTCHA_KEYCLOAK_JSON:
        return await _submit_keycloak_captcha(client, resolved, user, passwd)
    if resolved.captcha == CAPTCHA_STATIC_IMAGE:
        return await _submit_static_image_captcha(client, resolved, user, passwd)
    return await _submit_plain(client, resolved.form, user, passwd)


async def run_login_flow(client: tron_http.TronHttpClient, user: str, passwd: str) -> tron_http.LoginOutcome:
    """The one login entry point: fetch -> detect features -> submit by feature."""
    resolved = await resolve_credential_form(client)
    return await submit_credentials(client, resolved, user, passwd)

from __future__ import annotations
from dataclasses import dataclass, field
from typing import Any, Dict, List, Mapping


DEFAULT_PROVIDER = "thu"


@dataclass(frozen=True)
class ProviderCapabilities:
    number: bool = False
    radar: bool = False
    qrcode: bool = False
    course_discovery: bool = False
    teacher_rollcall: bool = False
    manual_qr: bool = False
    local_scanner: bool = False
    bot_adapter: bool = False
    webview_cookie_sync: bool = False
    direct_code_lookup: bool = False

    def to_dict(self) -> Dict[str, bool]:
        return {
            "number": self.number,
            "radar": self.radar,
            "qrcode": self.qrcode,
            "course_discovery": self.course_discovery,
            "teacher_rollcall": self.teacher_rollcall,
            "manual_qr": self.manual_qr,
            "local_scanner": self.local_scanner,
            "bot_adapter": self.bot_adapter,
            "webview_cookie_sync": self.webview_cookie_sync,
            "direct_code_lookup": self.direct_code_lookup,
        }


@dataclass(frozen=True)
class ProviderDefinition:
    key: str
    label: str
    base_url: str
    login_url: str
    auth_flow: str
    rollcalls_url: str = ""
    current_semester_url: str = ""
    courses_url: str = ""
    status: str = "stub"
    support_level: str = ""
    capabilities: ProviderCapabilities = field(default_factory=ProviderCapabilities)
    notes: str = ""
    user_visible: bool = True

    def __post_init__(self) -> None:
        endpoints = tronclass_api_endpoints(self.base_url)
        if not self.rollcalls_url:
            object.__setattr__(self, "rollcalls_url", endpoints["rollcalls_url"])
        if not self.current_semester_url:
            object.__setattr__(self, "current_semester_url", endpoints["current_semester_url"])
        if not self.courses_url:
            object.__setattr__(self, "courses_url", endpoints["courses_url"])

    @property
    def ready(self) -> bool:
        return self.support_level == "ready" or (not self.support_level and self.status == "ready")

    @property
    def daily_ready(self) -> bool:
        return self.ready

    @property
    def effective_support_level(self) -> str:
        if self.support_level:
            return self.support_level
        if self.status == "ready":
            return "ready"
        if self.status in {"experimental", "unsupported"}:
            return self.status
        return "unsupported"

    def to_config(self) -> Dict[str, Any]:
        endpoints = tronclass_api_endpoints(self.base_url)
        return {
            "key": self.key,
            "label": self.label,
            "base_url": self.base_url,
            "login_url": self.login_url,
            "rollcalls_url": self.rollcalls_url or endpoints["rollcalls_url"],
            "current_semester_url": self.current_semester_url or endpoints["current_semester_url"],
            "courses_url": self.courses_url or endpoints["courses_url"],
            "auth_flow": self.auth_flow,
            "status": self.status,
            "support_level": self.effective_support_level,
            "ready": self.ready,
            "daily_ready": self.daily_ready,
            "user_visible": self.user_visible,
            "capabilities": self.capabilities.to_dict(),
            "notes": self.notes,
        }


def tronclass_api_endpoints(base_url: Any) -> Dict[str, str]:
    base = str(base_url or "").strip().rstrip("/")
    return {
        "rollcalls_url": "{}/api/radar/rollcalls?api_version=1.1.0".format(base),
        "current_semester_url": "{}/api/current-semester-info".format(base),
        "courses_url": "{}/api/my-courses?page=1&page_size=50".format(base),
    }


PROVIDERS: Dict[str, ProviderDefinition] = {
    "thu": ProviderDefinition(
        key="thu",
        label="Tunghai University iLearn",
        base_url="https://ilearn.thu.edu.tw",
        login_url=(
            "https://tcidentity.thu.edu.tw/auth/realms/thu/protocol/cas/login"
            "?ui_locales=zh-TW&service=https%3A//ilearn.thu.edu.tw/login&locale=zh_TW"
        ),
        auth_flow="thu_cas",
        status="ready",
        support_level="ready",
        capabilities=ProviderCapabilities(
            number=True,
            radar=True,
            qrcode=True,
            course_discovery=True,
            teacher_rollcall=True,
            manual_qr=True,
            local_scanner=True,
            direct_code_lookup=True,
        ),
        notes="Primary supported provider. Kept compatible with the legacy config.conf flow.",
    ),
    "fju": ProviderDefinition(
        key="fju",
        label="Fu Jen Catholic University TronClass",
        base_url="https://elearn2.fju.edu.tw",
        login_url="https://elearn2.fju.edu.tw/login",
        auth_flow="fju_ocr_captcha",
        status="ready",
        support_level="ready",
        capabilities=ProviderCapabilities(
            number=True,
            radar=True,
            qrcode=True,
            course_discovery=True,
            teacher_rollcall=True,
            manual_qr=True,
            local_scanner=True,
            direct_code_lookup=True,
        ),
        notes="Fu Jen CAS login adds a 4-digit numeric image captcha solved locally via the optional 'ocr' extra (ddddocr). Without that extra it falls back to manual-cookie login. Authenticated TronClass API flows share the common runtime.",
    ),
    "tku": ProviderDefinition(
        key="tku",
        label="Tamkang University TronClass",
        base_url="https://iclass.tku.edu.tw",
        login_url="https://iclass.tku.edu.tw/login?next=/iportal&locale=zh_TW",
        auth_flow="tku_sso_browser",
        status="ready",
        support_level="ready",
        capabilities=ProviderCapabilities(
            number=True,
            radar=True,
            qrcode=True,
            course_discovery=True,
            teacher_rollcall=True,
            manual_qr=True,
            local_scanner=True,
            direct_code_lookup=True,
        ),
        notes="Ready for user-level daily flow. TKU SSO uses HTTP fast SSO first and falls back to browser-assisted login when the SSO form changes.",
    ),
    "tronclass": ProviderDefinition(
        key="tronclass",
        label="TronClass Public Cloud",
        base_url="https://www.tronclass.com.tw",
        login_url="https://www.tronclass.com.tw/login",
        auth_flow="public_cloud_email",
        status="ready",
        support_level="ready",
        capabilities=ProviderCapabilities(
            number=True,
            radar=True,
            qrcode=True,
            course_discovery=True,
            teacher_rollcall=True,
            manual_qr=True,
            local_scanner=True,
            direct_code_lookup=True,
        ),
        notes="Public TronClass cloud tenant. Uses the shared TronClass APIs after an email/password login form POST.",
    ),
    "scu": ProviderDefinition(
        key="scu",
        label="Soochow University TronClass",
        base_url="https://tronclass.scu.edu.tw",
        login_url="https://tronclass.scu.edu.tw/cas/login?ui_locales=zh-TW&service=https%3A//tronclass.scu.edu.tw/user/index&locale=zh_TW",
        auth_flow="thu_cas",
        status="ready",
        capabilities=ProviderCapabilities(
            number=True,
            radar=True,
            qrcode=True,
            course_discovery=True,
            teacher_rollcall=True,
            manual_qr=True,
            local_scanner=True,
            direct_code_lookup=True,
        ),
        notes="Soochow University TronClass provider. Uses standard CAS login form extraction.",
    ),
}


# Bulk-registered TronClass schools that reuse an existing login flow. All share the
# same full capability set, so they are data-driven rather than 32 verbose literals.
# login_url defaults to base_url + "/login": TronClass /login 302-redirects to each
# school's CAS/Keycloak IdP, and CasLoginAdapter resolves the form against the final
# URL. The 5th tuple field overrides login_url when /login does not expose the form
# (e.g. NOU only serves the CAS form at /cas/login). auth_flow values used here:
#   cas_api_validated  — generic CAS/Keycloak server-form, then confirm the session
#                        via an authenticated API call. Required because TronClass sets
#                        an anonymous `session` cookie on the LMS host during the
#                        login-page GET, so cookie-presence alone is a false positive
#                        (verified live against every school, 2026-06). THU/SCU stay on
#                        thu_cas: their login_url targets the IdP, so no anon LMS cookie.
#   cas_ocr_captcha    — Apereo CAS that also shows an image captcha (NTOU).
#   public_cloud_email — TronClass-native email/password login, no CAS (KWNC).
_STANDARD_CAPS = ProviderCapabilities(
    number=True,
    radar=True,
    qrcode=True,
    course_discovery=True,
    teacher_rollcall=True,
    manual_qr=True,
    local_scanner=True,
    direct_code_lookup=True,
)

# (key, label, base_url, auth_flow, login_url_override | None)
_TRONCLASS_SCHOOLS = [
    ("asia", "Asia University TronClass", "https://tronclass.asia.edu.tw", "keycloak_ocr_captcha", None),
    ("au", "Aletheia University TronClass", "https://tronclass.au.edu.tw", "cas_api_validated", None),
    ("aeust", "Oriental Institute of Technology TronClass", "https://elearning.aeust.edu.tw", "cas_api_validated", None),
    ("cgust", "Chang Gung University of Science and Technology TronClass", "https://tronclass.cgust.edu.tw", "cas_api_validated", None),
    ("cityumo", "City University of Macau TronClass", "https://tronclass.cityu.edu.mo", "cas_api_validated", None),
    ("cjcu", "Chang Jung Christian University TronClass", "https://tronclass.cjcu.edu.tw", "cas_api_validated", None),
    ("ctust", "Central Taiwan University of Science and Technology TronClass", "https://tronclass.ctust.edu.tw", "cas_api_validated", None),
    ("cufa", "Chungyu University of Film and Arts TronClass", "https://tronclass.cufa.edu.tw", "cas_api_validated", None),
    ("cyut", "Chaoyang University of Technology TronClass", "https://tronclass.cyut.edu.tw", "cas_api_validated", None),
    ("dyu", "Da-Yeh University TronClass", "https://tronclass.dyu.edu.tw", "cas_api_validated", None),
    ("hk", "Hungkuang University TronClass", "https://tronclass.hk.edu.tw", "cas_api_validated", None),
    ("hwu", "Hsing Wu University TronClass", "https://iclass.hwu.edu.tw", "cas_api_validated", None),
    ("mkc", "MacKay Junior College of Medicine, Nursing and Management TronClass", "https://tronclass.mkc.edu.tw", "keycloak_ocr_captcha", None),
    ("must", "Minghsin University of Science and Technology TronClass", "https://tronclass.must.edu.tw", "cas_api_validated", None),
    ("nanya", "Nanya Institute of Technology TronClass", "https://tronclass.nanya.edu.tw", "cas_api_validated", None),
    ("ncue", "National Changhua University of Education TronClass", "https://tronclass.ncue.edu.tw", "cas_api_validated", None),
    ("ncut", "National Chin-Yi University of Technology TronClass", "https://tronclass.ncut.edu.tw", "cas_api_validated", None),
    ("nfu", "National Formosa University TronClass", "https://ulearn.nfu.edu.tw", "keycloak_ocr_captcha", None),
    ("nou", "National Open University TronClass", "https://tronclass.nou.edu.tw", "cas_api_validated", "https://tronclass.nou.edu.tw/cas/login"),
    ("nsysu", "National Sun Yat-sen University TronClass", "https://elearn.nsysu.edu.tw", "cas_api_validated", None),
    ("ntou", "National Taiwan Ocean University TronClass", "https://tronclass.ntou.edu.tw", "cas_ocr_captcha", None),
    ("ntub", "National Taipei University of Business TronClass", "https://tronclass.ntub.edu.tw", "cas_api_validated", None),
    ("ntuspecs", "NTU School of Professional Education and Continuing Studies TronClass", "https://elearn.ntuspecs.ntu.edu.tw", "cas_api_validated", None),
    ("ocu", "Overseas Chinese University TronClass", "https://tronclass.ocu.edu.tw", "cas_api_validated", None),
    ("pu", "Providence University TronClass", "https://tronclass.pu.edu.tw", "cas_api_validated", None),
    ("shu", "Shih Hsin University TronClass", "https://tronclass.shu.edu.tw", "cas_api_validated", None),
    ("stu", "Shu-Te University TronClass", "https://tc.stu.edu.tw", "cas_api_validated", None),
    ("ttu", "Tatung University TronClass", "https://ilearn.ttu.edu.tw", "cas_api_validated", None),
    ("usc", "Shih Chien University TronClass", "https://tronclass.usc.edu.tw", "cas_api_validated", None),
    ("ypu", "Yuanpei University of Medical Technology TronClass", "https://tronclass.ypu.edu.tw", "cas_api_validated", None),
    ("yuntech", "National Yunlin University of Science and Technology TronClass", "https://eclass.yuntech.edu.tw", "cas_api_validated", None),
    ("kwnc", "Kiang Wu Nursing College of Macau TronClass", "https://tronclass.kwnc.edu.mo", "public_cloud_email", None),
]

for _key, _label, _base_url, _auth_flow, _login_url in _TRONCLASS_SCHOOLS:
    PROVIDERS[_key] = ProviderDefinition(
        key=_key,
        label=_label,
        base_url=_base_url,
        login_url=_login_url or (_base_url + "/login"),
        auth_flow=_auth_flow,
        status="ready",
        support_level="ready",
        capabilities=_STANDARD_CAPS,
        notes="Bulk-registered TronClass school (login via {}).".format(_auth_flow),
    )


PROVIDER_ALIASES = {
    "": DEFAULT_PROVIDER,
    "tunghai": "thu",
    "thu.edu": "thu",
    "ilearn": "thu",
    "ilearn.thu": "thu",
    "東海": "thu",
    "東海大學": "thu",
    "fju.edu": "fju",
    "輔仁": "fju",
    "輔仁大學": "fju",
    "tamkang": "tku",
    "淡江": "tku",
    "淡江大學": "tku",
    "tc": "tronclass",
    "tron": "tronclass",
    "tronclass": "tronclass",
    "tronclass.com": "tronclass",
    "tronclass.com.tw": "tronclass",
    "www.tronclass.com.tw": "tronclass",
    "官方": "tronclass",
    "官方站": "tronclass",
    "scu": "scu",
    "scu.edu": "scu",
    "soochow": "scu",
    "東吳": "scu",
    "東吳大學": "scu",
    # --- Bulk-registered TronClass schools (中文別名；key 本身已可解析) ---
    "亞洲大學": "asia",
    "亞洲": "asia",
    "真理大學": "au",
    "真理": "au",
    "亞東科技大學": "aeust",
    "亞東": "aeust",
    "長庚科技大學": "cgust",
    "長庚科大": "cgust",
    "澳門城市大學": "cityumo",
    "城市大學": "cityumo",
    "長榮大學": "cjcu",
    "長榮": "cjcu",
    "中台科技大學": "ctust",
    "中台科大": "ctust",
    "崇右影藝科技大學": "cufa",
    "崇右": "cufa",
    "朝陽科技大學": "cyut",
    "朝陽科大": "cyut",
    "大葉大學": "dyu",
    "大葉": "dyu",
    "弘光科技大學": "hk",
    "弘光科大": "hk",
    "醒吾科技大學": "hwu",
    "醒吾": "hwu",
    "馬偕醫護管理專科學校": "mkc",
    "馬偕": "mkc",
    "明新科技大學": "must",
    "明新科大": "must",
    "南亞技術學院": "nanya",
    "南亞": "nanya",
    "國立彰化師範大學": "ncue",
    "彰師大": "ncue",
    "彰化師範大學": "ncue",
    "國立勤益科技大學": "ncut",
    "勤益": "ncut",
    "勤益科大": "ncut",
    "國立虎尾科技大學": "nfu",
    "虎尾科大": "nfu",
    "虎尾": "nfu",
    "國立空中大學": "nou",
    "空中大學": "nou",
    "空大": "nou",
    "國立中山大學": "nsysu",
    "中山大學": "nsysu",
    "國立臺灣海洋大學": "ntou",
    "國立台灣海洋大學": "ntou",
    "海洋大學": "ntou",
    "海大": "ntou",
    "國立臺北商業大學": "ntub",
    "國立台北商業大學": "ntub",
    "北商大": "ntub",
    "臺灣大學進修推廣學院": "ntuspecs",
    "台灣大學進修推廣學院": "ntuspecs",
    "臺大進修推廣學院": "ntuspecs",
    "台大進修推廣學院": "ntuspecs",
    "僑光科技大學": "ocu",
    "僑光科大": "ocu",
    "僑光": "ocu",
    "靜宜大學": "pu",
    "靜宜": "pu",
    "世新大學": "shu",
    "世新": "shu",
    "樹德科技大學": "stu",
    "樹德科大": "stu",
    "樹德": "stu",
    "大同大學": "ttu",
    "大同": "ttu",
    "實踐大學": "usc",
    "實踐": "usc",
    "元培醫事科技大學": "ypu",
    "元培": "ypu",
    "元培科大": "ypu",
    "國立雲林科技大學": "yuntech",
    "雲林科技大學": "yuntech",
    "雲科大": "yuntech",
    "雲科": "yuntech",
    "澳門鏡湖護理學院": "kwnc",
    "鏡湖護理學院": "kwnc",
    "鏡湖": "kwnc",
}


def normalize_provider_name(value: Any) -> str:
    normalized = str(value or "").strip().lower()
    return PROVIDER_ALIASES.get(normalized, normalized or DEFAULT_PROVIDER)


def get_provider(name: Any = "") -> ProviderDefinition:
    key = normalize_provider_name(name)
    return PROVIDERS.get(key, PROVIDERS[DEFAULT_PROVIDER])


def list_providers() -> List[ProviderDefinition]:
    return [PROVIDERS[key] for key in sorted(PROVIDERS)]


def list_all_providers() -> List[ProviderDefinition]:
    return list_providers()


def list_supported_providers(include_hidden: bool = False) -> List[ProviderDefinition]:
    providers = list_all_providers()
    if include_hidden:
        return providers
    return [provider for provider in providers if provider.user_visible]


def provider_to_config(provider: ProviderDefinition) -> Dict[str, Any]:
    return provider.to_config()


def provider_registry_config() -> Dict[str, Any]:
    return {
        "current": DEFAULT_PROVIDER,
        # Back-compat no-op: provider maturity no longer gates user-level daily flow.
        "allow_experimental": False,
        "available": {
            key: provider.to_config()
            for key, provider in sorted(PROVIDERS.items())
        },
    }


def _coerce_bool(value: Any, default: bool = False) -> bool:
    if isinstance(value, bool):
        return value
    if value is None:
        return default
    text = str(value).strip().lower()
    if text in {"1", "true", "yes", "y", "on"}:
        return True
    if text in {"0", "false", "no", "n", "off"}:
        return False
    return default


def provider_support_report(provider: Any, allow_experimental: bool = False) -> Dict[str, Any]:
    if hasattr(provider, "to_config"):
        config = provider.to_config()
    elif isinstance(provider, Mapping):
        config = dict(provider)
    else:
        config = get_provider(provider).to_config()

    capabilities = config.get("capabilities")
    if not isinstance(capabilities, Mapping):
        capabilities = {}
    support_level = str(config.get("support_level") or config.get("status") or "unsupported")
    endpoint_configured = {
        "base_url": bool(str(config.get("base_url") or "").strip()),
        "login_url": bool(str(config.get("login_url") or "").strip()),
        "rollcalls_url": bool(str(config.get("rollcalls_url") or "").strip()),
        "current_semester_url": bool(str(config.get("current_semester_url") or "").strip()),
        "courses_url": bool(str(config.get("courses_url") or "").strip()),
    }
    daily_ready = support_level == "ready"
    return {
        "key": str(config.get("key") or DEFAULT_PROVIDER),
        "label": str(config.get("label") or ""),
        "support_level": support_level,
        "status": str(config.get("status") or support_level),
        "ready": support_level == "ready",
        "daily_ready": daily_ready,
        "user_visible": bool(config.get("user_visible", True)),
        "allow_experimental": bool(allow_experimental),
        "endpoint_configured": endpoint_configured,
        "capabilities": dict(capabilities),
    }


def extract_host(t: str) -> str:
    t = str(t or "").strip()
    if not t:
        return ""
    if not (t.startswith("http://") or t.startswith("https://")):
        t = "https://" + t
    try:
        from urllib.parse import urlparse
        parsed = urlparse(t)
        host = parsed.hostname or ""
        return host.lower().strip()
    except Exception:
        return ""


def normalize_base_url(text: str) -> tuple[str, str]:
    text_clean = str(text or "").strip()
    if not text_clean:
        return ("plain", "")
    host = extract_host(text_clean)
    # A pasted URL / dotted host ALWAYS means "open a browser and log in
    # manually" — even when the host belongs to a school we support via API.
    # "Typing a URL = manual login" is intentional; only a bare short name/key
    # (THU / TKU / SCU / TRONCLASS / 東吳 …) routes to automatic API login.
    if text_clean.startswith(("http://", "https://")) or ("." in host and not host.endswith(".")):
        return ("url", "https://{}".format(host))
    normalized_key = text_clean.lower()
    if normalized_key in PROVIDER_ALIASES:
        return ("alias", PROVIDER_ALIASES[normalized_key])
    if normalized_key in PROVIDERS:
        return ("alias", normalized_key)
    return ("plain", text_clean)


def derive_url_provider_key(text: str) -> str:
    """Stable, filesystem-safe synthetic provider key for a pasted base URL, e.g.
    'https://iclass.demo.edu.tw/login' -> 'url_iclass_demo_edu_tw'. Returns '' when
    the text is not URL-form. Single source of truth for this derivation so the
    config parser, the merge step, and the cookie-cache profile name all agree."""
    kind, result = normalize_base_url(text)
    if kind != "url":
        return ""
    host = extract_host(result) or result
    host_clean = host.replace(".", "_").replace("-", "_").replace(":", "_").replace("/", "_").lower().strip()
    host_clean = "".join(c for c in host_clean if c.isalnum() or c == "_")
    return "url_{}".format(host_clean) if host_clean else ""


def normalize_provider_config(value: Any) -> Dict[str, Any]:
    if isinstance(value, str):
        raw_config: Dict[str, Any] = {"current": value}
    elif isinstance(value, Mapping):
        raw_config = dict(value)
    else:
        raw_config = {}

    requested = raw_config.get("current", raw_config.get("name", raw_config.get("school", "")))
    requested_key = normalize_provider_name(requested)
    current = normalize_provider_name(requested)

    available = raw_config.get("available")
    if not isinstance(available, Mapping):
        available = {}

    all_keys = set(PROVIDERS.keys())
    for key, override in available.items():
        if isinstance(override, Mapping) and "base_url" in override:
            all_keys.add(key)

    fallback_reason = ""
    if current not in all_keys:
        fallback_reason = "unknown_provider"
        current = DEFAULT_PROVIDER

    merged_available: Dict[str, Dict[str, Any]] = {}
    for key in sorted(all_keys):
        if key in PROVIDERS:
            merged = PROVIDERS[key].to_config()
        else:
            base_url = ""
            override = available.get(key)
            if isinstance(override, Mapping):
                base_url = str(override.get("base_url") or "").strip()
            endpoints = tronclass_api_endpoints(base_url)
            merged = {
                "key": key,
                "label": key.upper(),
                "base_url": base_url,
                "login_url": base_url + "/login" if base_url else "",
                "rollcalls_url": endpoints["rollcalls_url"],
                "current_semester_url": endpoints["current_semester_url"],
                "courses_url": endpoints["courses_url"],
                "auth_flow": "interactive_browser" if key.startswith("url_") else "thu_cas",
                "status": "ready",
                "support_level": "ready",
                "ready": True,
                "daily_ready": True,
                "user_visible": True,
                "capabilities": ProviderCapabilities(
                    number=True,
                    radar=True,
                    qrcode=True,
                    course_discovery=True,
                    teacher_rollcall=True,
                    manual_qr=True,
                    local_scanner=True,
                    direct_code_lookup=True,
                ).to_dict(),
                "notes": "Custom configured provider.",
            }

        override = available.get(key)
        if isinstance(override, Mapping):
            if "base_url" in override:
                merged["base_url"] = str(override["base_url"] or "")
                endpoints = tronclass_api_endpoints(merged["base_url"])
                merged["rollcalls_url"] = endpoints["rollcalls_url"]
                merged["current_semester_url"] = endpoints["current_semester_url"]
                merged["courses_url"] = endpoints["courses_url"]
                if key not in PROVIDERS:
                    merged["login_url"] = merged["base_url"] + "/login" if merged["base_url"] else ""
            for override_key in (
                "label",
                "login_url",
                "rollcalls_url",
                "current_semester_url",
                "courses_url",
                "auth_flow",
                "notes",
                "captcha_image_name",
                "captcha_field",
                "captcha_charset",
                "captcha_length",
            ):
                if override_key in override:
                    merged[override_key] = str(override[override_key] or "")
            if "user_visible" in override:
                merged["user_visible"] = _coerce_bool(override.get("user_visible"), bool(merged.get("user_visible", True)))
        merged_available[key] = merged

    return {
        "current": current,
        "requested": requested_key or DEFAULT_PROVIDER,
        "fallback_reason": fallback_reason,
        "allow_experimental": _coerce_bool(raw_config.get("allow_experimental"), False),
        "available": merged_available,
    }

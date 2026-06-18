from __future__ import annotations
import sys
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any, Dict, List, Mapping, Tuple

try:  # py3.11+ stdlib; tomli backport on 3.10 (declared in pyproject deps)
    import tomllib as _toml_reader
except ModuleNotFoundError:  # pragma: no cover - exercised only on 3.10
    import tomli as _toml_reader  # type: ignore


# Fallback only; the real value comes from schools.toml's `default` key on load.
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
    login_url: str = ""
    auth_flow: str = "auto"
    rollcalls_url: str = ""
    current_semester_url: str = ""
    courses_url: str = ""
    status: str = "stub"
    support_level: str = ""
    capabilities: ProviderCapabilities = field(default_factory=ProviderCapabilities)
    notes: str = ""
    user_visible: bool = True
    aliases: Tuple[str, ...] = ()

    def __post_init__(self) -> None:
        # No per-school login URL: every provider's login_url derives from base_url.
        # The flow probes /login then /cas/login at runtime (see login_flow), so a school
        # that only serves its form at /cas/login needs no registry override.
        if not self.login_url:
            object.__setattr__(self, "login_url", str(self.base_url or "").rstrip("/") + "/login")
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
            "aliases": list(self.aliases),
        }


def tronclass_api_endpoints(base_url: Any) -> Dict[str, str]:
    base = str(base_url or "").strip().rstrip("/")
    return {
        "rollcalls_url": "{}/api/radar/rollcalls?api_version=1.1.0".format(base),
        "current_semester_url": "{}/api/current-semester-info".format(base),
        "courses_url": "{}/api/my-courses?page=1&page_size=50".format(base),
    }


# Uniform capability set applied to every school — all supported schools share the
# same full feature set, so capabilities are a code default, never per-school data.
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


# --- School registry --------------------------------------------------------
# There are deliberately ZERO school literals in this module. Every school's code,
# path, alias and parameter lives in DATA: the bundled schools.toml seed fills
# config.advanced.toml on first run, and from then on config.advanced.toml is the
# live source of truth (refresh_provider_registry overwrites the seed with config).
# Adding / editing / removing a school = editing config.advanced.toml (or the seed)
# — never this file. Enforced by tests/test_contracts.py.

def _seed_path() -> Path:
    """Locate the bundled factory-default registry (schools.toml). Resolves from a
    source/editable checkout (next to this module) and from a PyInstaller bundle
    (collected under troTHU/ via the .spec DATAS entry / _MEIPASS)."""
    candidates = [Path(__file__).with_name("schools.toml")]
    meipass = getattr(sys, "_MEIPASS", "")
    if meipass:
        candidates.append(Path(meipass) / "troTHU" / "schools.toml")
    for path in candidates:
        try:
            if path.is_file():
                return path
        except OSError:
            continue
    return candidates[0]


def _load_seed() -> Dict[str, Any]:
    try:
        with open(_seed_path(), "rb") as handle:
            data = _toml_reader.load(handle)
        return data if isinstance(data, dict) else {}
    except Exception:
        # A correct build always ships schools.toml; degrade to an empty registry
        # rather than crash the whole CLI (get_provider stays defensive below).
        return {}


def _aliases_tuple(value: Any) -> Tuple[str, ...]:
    if not isinstance(value, (list, tuple)):
        return ()
    return tuple(str(a).strip() for a in value if str(a).strip())


def _provider_from_seed(key: str, block: Mapping[str, Any]) -> ProviderDefinition:
    return ProviderDefinition(
        key=key,
        label=str(block.get("label") or key.upper()),
        base_url=str(block.get("base_url") or ""),
        status="ready",
        support_level="ready",
        capabilities=_STANDARD_CAPS,
        notes=str(block.get("notes") or ""),
        user_visible=bool(block.get("user_visible", True)),
        aliases=_aliases_tuple(block.get("aliases")),
    )


def _build_alias_map(providers: Mapping[str, ProviderDefinition], default: str) -> Dict[str, str]:
    """Map every alias (and the bare key) to its provider key. Lookups lower-case
    the query, so ASCII aliases are stored lower-cased; CJK is unaffected."""
    out: Dict[str, str] = {"": default}
    for key, provider in providers.items():
        out[key.lower()] = key
        for alias in provider.aliases:
            text = str(alias).strip().lower()
            if text:
                out.setdefault(text, key)
    return out


def _registry_from_seed() -> Tuple[Dict[str, ProviderDefinition], Dict[str, str], str]:
    seed = _load_seed()
    default = str(seed.get("default") or "thu")
    providers: Dict[str, ProviderDefinition] = {}
    for key, block in seed.items():
        if key == "default" or not isinstance(block, Mapping):
            continue
        providers[str(key)] = _provider_from_seed(str(key), block)
    if providers and default not in providers:
        default = sorted(providers)[0]
    return providers, _build_alias_map(providers, default), default


# Module-global registry — seeded at import, then overwritten by
# refresh_provider_registry() once config.advanced.toml is loaded (config wins).
PROVIDERS, PROVIDER_ALIASES, DEFAULT_PROVIDER = _registry_from_seed()


_SEED_CACHE: Dict[str, ProviderDefinition] | None = None


def seed_providers() -> Dict[str, ProviderDefinition]:
    """The factory-default registry from schools.toml (NOT the live, possibly
    config-refreshed globals). The seed file is immutable at runtime, so it is
    parsed once and cached. Used as the deterministic baseline for
    normalize_provider_config and to (re)materialize a fresh/deleted advanced file."""
    global _SEED_CACHE
    if _SEED_CACHE is None:
        _SEED_CACHE = _registry_from_seed()[0]
    return _SEED_CACHE


def normalize_provider_name(value: Any) -> str:
    normalized = str(value or "").strip().lower()
    return PROVIDER_ALIASES.get(normalized, normalized or DEFAULT_PROVIDER)


def get_provider(name: Any = "") -> ProviderDefinition:
    key = normalize_provider_name(name)
    if key in PROVIDERS:
        return PROVIDERS[key]
    if DEFAULT_PROVIDER in PROVIDERS:
        return PROVIDERS[DEFAULT_PROVIDER]
    # Empty registry (corrupt build / missing seed): a defensive default so the CLI
    # still runs instead of raising KeyError at every call site.
    return ProviderDefinition(key=DEFAULT_PROVIDER, label=DEFAULT_PROVIDER.upper(), base_url="")


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

    # Baseline on the immutable factory seed (not the mutable, config-refreshed
    # global registry) so this is a pure function of (config, seed): config schools
    # win and extend, and a config with no schools falls back to exactly the seed.
    seed = seed_providers()
    all_keys = set(seed.keys())
    for key, override in available.items():
        if isinstance(override, Mapping) and "base_url" in override:
            all_keys.add(key)

    fallback_reason = ""
    if current not in all_keys:
        fallback_reason = "unknown_provider"
        current = DEFAULT_PROVIDER

    merged_available: Dict[str, Dict[str, Any]] = {}
    for key in sorted(all_keys):
        if key in seed:
            merged = seed[key].to_config()
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
                "auth_flow": "interactive_browser" if key.startswith("url_") else "auto",
                "status": "ready",
                "support_level": "ready",
                "ready": True,
                "daily_ready": True,
                "user_visible": True,
                "capabilities": _STANDARD_CAPS.to_dict(),
                "notes": "Custom configured provider.",
                "aliases": [],
            }

        override = available.get(key)
        if isinstance(override, Mapping):
            if "base_url" in override:
                merged["base_url"] = str(override["base_url"] or "")
                endpoints = tronclass_api_endpoints(merged["base_url"])
                merged["rollcalls_url"] = endpoints["rollcalls_url"]
                merged["current_semester_url"] = endpoints["current_semester_url"]
                merged["courses_url"] = endpoints["courses_url"]
                if key not in seed:
                    merged["login_url"] = merged["base_url"] + "/login" if merged["base_url"] else ""
            # Captcha params are intentionally NOT overridable per provider: the flow
            # detects the captcha field/length from the live page and lets OCR decide.
            # login_url / auth_flow stay overridable as a power-user escape hatch only.
            for override_key in (
                "label",
                "login_url",
                "rollcalls_url",
                "current_semester_url",
                "courses_url",
                "auth_flow",
                "notes",
            ):
                if override_key in override:
                    merged[override_key] = str(override[override_key] or "")
            if "aliases" in override:
                merged["aliases"] = list(_aliases_tuple(override.get("aliases")))
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


def _provider_from_config(cfg: Mapping[str, Any]) -> ProviderDefinition:
    """Rebuild a ProviderDefinition from a merged config (to_config-shaped) dict."""
    caps = cfg.get("capabilities")
    if isinstance(caps, Mapping):
        cap_fields = ProviderCapabilities.__dataclass_fields__
        capabilities = ProviderCapabilities(**{k: bool(v) for k, v in caps.items() if k in cap_fields})
    else:
        capabilities = _STANDARD_CAPS
    return ProviderDefinition(
        key=str(cfg.get("key") or ""),
        label=str(cfg.get("label") or ""),
        base_url=str(cfg.get("base_url") or ""),
        login_url=str(cfg.get("login_url") or ""),
        auth_flow=str(cfg.get("auth_flow") or "auto"),
        rollcalls_url=str(cfg.get("rollcalls_url") or ""),
        current_semester_url=str(cfg.get("current_semester_url") or ""),
        courses_url=str(cfg.get("courses_url") or ""),
        status=str(cfg.get("status") or "ready"),
        support_level=str(cfg.get("support_level") or ""),
        capabilities=capabilities,
        notes=str(cfg.get("notes") or ""),
        user_visible=_coerce_bool(cfg.get("user_visible"), True),
        aliases=_aliases_tuple(cfg.get("aliases")),
    )


def refresh_provider_registry(available: Any) -> None:
    """Rebuild the in-memory registry from the merged config ``available`` map so
    edits in config.advanced.toml (base_url / aliases / label …) take effect for
    every consumer (get_provider, list_all_providers, normalize_provider_name) with
    no call-site changes. Config wins over the seed. Call once after config load."""
    global PROVIDERS, PROVIDER_ALIASES
    if not isinstance(available, Mapping) or not available:
        return
    rebuilt: Dict[str, ProviderDefinition] = {}
    for key, cfg in available.items():
        if not isinstance(cfg, Mapping):
            continue
        merged = dict(cfg)
        merged.setdefault("key", str(key))
        try:
            rebuilt[str(key)] = _provider_from_config(merged)
        except Exception:
            continue
    if rebuilt:
        PROVIDERS = rebuilt
        PROVIDER_ALIASES = _build_alias_map(rebuilt, DEFAULT_PROVIDER)

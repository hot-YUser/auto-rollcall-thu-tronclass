"""Safe WebView login cookie sync helpers.

This module only accepts already-exported cookie metadata from a future/manual
WebView flow. It never drives a browser, never logs in, and never stores a raw
browser export.
"""

from __future__ import annotations

import json
import re
import time
from dataclasses import dataclass
from pathlib import Path
from typing import Any, Dict, Iterable, List, Mapping, Sequence, Tuple
from urllib.parse import urlparse


try:  # pragma: no cover - script execution fallback
    from troTHU.account_store import cookie_path, normalize_profile_name
    from troTHU.providers import DEFAULT_PROVIDER, provider_support_report
    from troTHU.redaction import KEEP, REDACT, redact_structure
except ImportError:  # pragma: no cover
    from account_store import cookie_path, normalize_profile_name
    from providers import DEFAULT_PROVIDER, provider_support_report
    from redaction import KEEP, REDACT, redact_structure


SENSITIVE_RE = re.compile(
    r"(api_key|authorization|cookie|passwd|password|secret|session|token|payload|raw|response|value|body)",
    re.IGNORECASE,
)
DEFAULT_COOKIE_NAME_ALLOWLIST = ("session",)


class WebViewSyncError(Exception):
    """Raised when WebView cookie sync is blocked or invalid."""

    def __init__(self, reason: str, message: str = "") -> None:
        self.reason = reason
        super().__init__(message or reason)


@dataclass(frozen=True)
class WebViewCookieRecord:
    name: str
    value: str
    domain: str = ""
    path: str = "/"
    secure: bool = False
    http_only: bool = False
    expires: Any = None

    @classmethod
    def from_mapping(cls, value: Mapping[str, Any]) -> "WebViewCookieRecord":
        name = str(value.get("name") or value.get("key") or "").strip()
        cookie_value = str(value.get("value") or "")
        domain = _normalize_domain(value.get("domain") or value.get("host") or "")
        path = str(value.get("path") or "/").strip() or "/"
        return cls(
            name=name,
            value=cookie_value,
            domain=domain,
            path=path,
            secure=_coerce_bool(value.get("secure"), False),
            http_only=_coerce_bool(value.get("httpOnly", value.get("http_only")), False),
            expires=value.get("expires", value.get("expirationDate")),
        )

    def safe_dict(self) -> Dict[str, Any]:
        return {
            "name": self.name,
            "domain": self.domain,
            "path": self.path,
            "secure": self.secure,
            "http_only": self.http_only,
            "has_value": bool(self.value),
        }

    def cache_record(self) -> Dict[str, str]:
        return {
            "key": self.name,
            "value": self.value,
            "domain": self.domain,
            "path": self.path or "/",
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


def _normalize_domain(value: Any) -> str:
    text = str(value or "").strip().lower()
    if text.startswith("http://") or text.startswith("https://"):
        text = urlparse(text).hostname or ""
    return text.lstrip(".")


def _host_from_url(value: Any) -> str:
    text = str(value or "").strip()
    if not text:
        return ""
    if "://" not in text:
        text = "https://{}".format(text.lstrip("/"))
    return _normalize_domain(urlparse(text).hostname or "")


def _sanitize_text(value: Any, *, limit: int = 120) -> str:
    text = str(value or "").strip()
    if SENSITIVE_RE.search(text):
        return "[redacted]"
    if len(text) > limit:
        return text[: limit - 3] + "..."
    return text


def _cookie_sync_config(config: Mapping[str, Any]) -> Dict[str, Any]:
    webview = config.get("webview") if isinstance(config, Mapping) else {}
    if not isinstance(webview, Mapping):
        webview = {}
    cookie_sync = webview.get("cookie_sync", {})
    if not isinstance(cookie_sync, Mapping):
        cookie_sync = {}
    return dict(cookie_sync)


def _cookie_name_allowlist(config: Mapping[str, Any]) -> Tuple[str, ...]:
    cookie_sync = _cookie_sync_config(config)
    raw_names = cookie_sync.get("cookie_name_allowlist", DEFAULT_COOKIE_NAME_ALLOWLIST)
    if isinstance(raw_names, str):
        raw_names = [raw_names]
    if not isinstance(raw_names, Iterable):
        raw_names = DEFAULT_COOKIE_NAME_ALLOWLIST
    names = sorted({str(name).strip() for name in raw_names if str(name).strip()})
    return tuple(names or DEFAULT_COOKIE_NAME_ALLOWLIST)


def _provider_config(provider: Any) -> Dict[str, Any]:
    if hasattr(provider, "to_config"):
        provider = provider.to_config()
    if isinstance(provider, Mapping):
        return dict(provider)
    return {"key": str(provider or DEFAULT_PROVIDER)}


def _provider_domains(provider: Mapping[str, Any]) -> Tuple[str, ...]:
    domains = {
        _host_from_url(provider.get("base_url")),
        _host_from_url(provider.get("login_url")),
        _host_from_url(provider.get("rollcalls_url")),
        _normalize_domain(provider.get("session_cookie_domain")),
    }
    return tuple(sorted(domain for domain in domains if domain))


def _allowed_domains(config: Mapping[str, Any], provider: Mapping[str, Any]) -> Tuple[str, ...]:
    cookie_sync = _cookie_sync_config(config)
    raw_domains = cookie_sync.get("allowed_domains", [])
    if isinstance(raw_domains, str):
        raw_domains = [raw_domains]
    configured = []
    if isinstance(raw_domains, Iterable):
        configured = [_normalize_domain(domain) for domain in raw_domains]
    domains = set(_provider_domains(provider))
    domains.update(domain for domain in configured if domain)
    return tuple(sorted(domains))


def _domain_allowed(domain: str, allowed_domains: Sequence[str]) -> bool:
    normalized = _normalize_domain(domain)
    if not normalized:
        return False
    for allowed in allowed_domains:
        candidate = _normalize_domain(allowed)
        if not candidate:
            continue
        if normalized == candidate:
            return True
        if normalized.endswith("." + candidate):
            return True
        if candidate.endswith("." + normalized):
            return True
    return False


def _extract_cookie_items(value: Any) -> List[Any]:
    if isinstance(value, str):
        try:
            return _extract_cookie_items(json.loads(value))
        except ValueError as exc:
            raise WebViewSyncError("invalid_json", "Invalid WebView cookie export JSON") from exc
    if isinstance(value, Mapping):
        cookies = value.get("cookies")
        if isinstance(cookies, list):
            return list(cookies)
        if all(key in value for key in ("name", "value")):
            return [value]
        return []
    if isinstance(value, list):
        return list(value)
    return []


def parse_webview_cookie_export(value: Any) -> Tuple[WebViewCookieRecord, ...]:
    """Parse a manual/WebView/Playwright cookie export into records."""
    items = _extract_cookie_items(value)
    records: List[WebViewCookieRecord] = []
    for item in items:
        if not isinstance(item, Mapping):
            continue
        record = WebViewCookieRecord.from_mapping(item)
        if record.name:
            records.append(record)
    if not records and items:
        raise WebViewSyncError("no_valid_cookies", "No usable cookie records found")
    return tuple(records)


def _split_records(
    records: Sequence[WebViewCookieRecord],
    *,
    config: Mapping[str, Any],
    provider: Mapping[str, Any],
) -> Tuple[List[WebViewCookieRecord], List[Dict[str, Any]], Tuple[str, ...], Tuple[str, ...]]:
    allowed_domains = _allowed_domains(config, provider)
    allowed_names = _cookie_name_allowlist(config)
    accepted: List[WebViewCookieRecord] = []
    rejected: List[Dict[str, Any]] = []
    for record in records:
        reasons = []
        if record.name not in allowed_names:
            reasons.append("name_not_allowed")
        if not _domain_allowed(record.domain, allowed_domains):
            reasons.append("domain_not_allowed")
        if not record.value:
            reasons.append("missing_value")
        if reasons:
            rejected.append(
                {
                    "name": record.name,
                    "domain": record.domain,
                    "path": record.path,
                    "reasons": reasons,
                }
            )
        else:
            accepted.append(record)
    return accepted, rejected, allowed_domains, allowed_names


def build_webview_sync_status(config: Mapping[str, Any], *, provider: Any = None) -> Dict[str, Any]:
    provider_config = _provider_config(provider or (config.get("provider") if isinstance(config, Mapping) else {}))
    cookie_sync = _cookie_sync_config(config)
    support = provider_support_report(
        provider_config,
        allow_experimental=_coerce_bool(provider_config.get("allow_experimental"), False),
    )
    experimental = support.get("support_level") == "experimental"
    allow_experimental_import = _coerce_bool(cookie_sync.get("allow_experimental_provider"), False)
    can_import = (
        _coerce_bool(cookie_sync.get("enabled"), False)
        and _coerce_bool(cookie_sync.get("allow_cookie_import"), False)
        and (not experimental or (bool(support.get("allow_experimental")) and allow_experimental_import))
    )
    warnings = []
    if not _coerce_bool(cookie_sync.get("enabled"), False):
        warnings.append("webview_cookie_sync_disabled")
    if not _coerce_bool(cookie_sync.get("allow_cookie_import"), False):
        warnings.append("webview_cookie_import_disabled")
    if experimental and not allow_experimental_import:
        warnings.append("experimental_provider_import_disabled")

    # Status is a cheap, side-effect-free snapshot — it must NOT perform network
    # I/O. Whether imported cookies actually work is verified at import time
    # (import_webview_cookies) and at login; here we only report, declaratively,
    # whether such API-session validation will be required for this provider.
    # Imported cookies are confirmed via an authenticated API call for every flow except
    # the plain CAS one (THU/SCU target the IdP directly, so no anonymous LMS cookie is
    # set and cookie presence is already reliable). Keyed on the protocol, not the school.
    flow = str(provider_config.get("auth_flow") or "").strip().lower()
    requires_validation = flow not in ("", "cas", "thu_cas")

    return {
        "status": "ready" if can_import else "preview_only",
        "provider": str(provider_config.get("key") or DEFAULT_PROVIDER),
        "provider_support": support,
        "enabled": _coerce_bool(cookie_sync.get("enabled"), False),
        "allow_cookie_import": _coerce_bool(cookie_sync.get("allow_cookie_import"), False),
        "allow_experimental_provider": allow_experimental_import,
        "can_import": can_import,
        "allowed_domains": list(_allowed_domains(config, provider_config)),
        "cookie_name_allowlist": list(_cookie_name_allowlist(config)),
        "cookie_validation": "required" if requires_validation else "not_required",
        "warnings": warnings,
    }


def build_webview_cookie_preview(
    records: Sequence[WebViewCookieRecord],
    *,
    config: Mapping[str, Any],
    provider: Any,
    profile: str = "",
) -> Dict[str, Any]:
    provider_config = _provider_config(provider)
    accepted, rejected, allowed_domains, allowed_names = _split_records(
        tuple(records),
        config=config,
        provider=provider_config,
    )
    accepted_names = sorted({record.name for record in accepted})
    rejected_names = sorted({item["name"] for item in rejected if item.get("name")})
    warnings = []
    if not accepted:
        warnings.append("no_accepted_cookies")
    if not any(record.name == "session" for record in accepted):
        warnings.append("session_cookie_missing")
    return {
        "status": "ok" if accepted else "blocked",
        "provider": str(provider_config.get("key") or DEFAULT_PROVIDER),
        "profile": normalize_profile_name(profile) if profile else "",
        "cookie_count": len(records),
        "accepted_count": len(accepted),
        "rejected_count": len(rejected),
        "accepted_cookie_names": accepted_names,
        "rejected_cookie_names": rejected_names,
        "accepted_cookies": [record.safe_dict() for record in accepted],
        "rejected_cookies": rejected,
        "has_session": any(record.name == "session" for record in accepted),
        "allowed_domains": list(allowed_domains),
        "cookie_name_allowlist": list(allowed_names),
        "warnings": warnings,
    }


def _ensure_import_allowed(config: Mapping[str, Any], provider: Mapping[str, Any]) -> None:
    status = build_webview_sync_status(config, provider=provider)
    if not status["enabled"]:
        raise WebViewSyncError("webview_cookie_sync_disabled")
    if not status["allow_cookie_import"]:
        raise WebViewSyncError("webview_cookie_import_disabled")
    if not status["can_import"]:
        raise WebViewSyncError("experimental_provider_import_disabled")


def import_webview_cookies(
    base_dir: Path,
    profile: str,
    records: Sequence[WebViewCookieRecord],
    *,
    config: Mapping[str, Any],
    provider: Any,
    save: bool = False,
) -> Dict[str, Any]:
    provider_config = _provider_config(provider)
    profile_name = normalize_profile_name(profile)
    preview = build_webview_cookie_preview(
        tuple(records),
        config=config,
        provider=provider_config,
        profile=profile_name,
    )
    accepted = [
        record
        for record in tuple(records)
        if record.name in set(preview["accepted_cookie_names"])
        and _domain_allowed(record.domain, preview["allowed_domains"])
        and record.value
    ]
    result = dict(preview)
    result["saved"] = False
    result["cookie_cache"] = {
        "profile": profile_name,
        "file": "{}.json".format(profile_name),
        "record_count": len(accepted),
        "updated_at": 0,
    }
    if not save:
        result["status"] = "preview"
        return result
    _ensure_import_allowed(config, provider_config)
    if not accepted:
        raise WebViewSyncError("no_accepted_cookies")

    # Always confirm imported cookies with an authenticated API call — a manually-imported
    # cookie IS the cookie detection the monitor relies on, so it must be proven valid here
    # regardless of school. (Previously skipped for plain CAS; now uniform, school-agnostic.)
    if not _validate_api_session(provider_config, accepted):
        raise WebViewSyncError("api_validation_failed")

    path = cookie_path(Path(base_dir), profile_name)
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(
        json.dumps([record.cache_record() for record in accepted], ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    now = int(time.time())
    result["status"] = "saved"
    result["saved"] = True
    result["cookie_cache"]["updated_at"] = now
    return result


async def validate_cookie_records(
    provider_config: Dict[str, Any],
    accepted_records: Sequence[WebViewCookieRecord],
) -> bool:
    """Async-native probe: load the given cookies into a throwaway session and
    confirm they reach an authenticated API endpoint for this provider. Returns
    True only if validate_login_api_session succeeds. This is the canonical
    implementation; sync callers go through _validate_api_session."""
    import aiohttp
    from yarl import URL
    from troTHU.tron_http import TronHttpClient, endpoints_from_provider
    from troTHU.auth_runtime import validate_login_api_session

    cookie_jar = aiohttp.CookieJar(unsafe=True)
    async with aiohttp.ClientSession(cookie_jar=cookie_jar) as session:
        for record in accepted_records:
            domain = record.domain
            if domain.startswith("."):
                domain = domain[1:]
            cookie_url = URL("https://{}/".format(domain))
            session.cookie_jar.update_cookies({record.name: record.value}, response_url=cookie_url)

        endpoints = endpoints_from_provider(provider_config)
        client = TronHttpClient(session, endpoints=endpoints)
        try:
            await validate_login_api_session(client)
            return True
        except Exception:
            return False


def _validate_api_session(
    provider_config: Dict[str, Any],
    accepted_records: Sequence[WebViewCookieRecord],
) -> bool:
    """Sync bridge to validate_cookie_records. Detects an already-running event
    loop (e.g. when called from the async app shell) and drives the coroutine in
    a dedicated worker thread; otherwise runs it directly. The coroutine is
    created inside the executing thread so it is never shared across threads."""
    import asyncio

    def _run() -> bool:
        return asyncio.run(validate_cookie_records(provider_config, accepted_records))

    try:
        asyncio.get_running_loop()
    except RuntimeError:
        try:
            return _run()
        except Exception:
            return False
    import concurrent.futures
    try:
        with concurrent.futures.ThreadPoolExecutor(max_workers=1) as executor:
            return executor.submit(_run).result()
    except Exception:
        return False


def _classify_webview_key(key_text: str) -> str:
    return REDACT if SENSITIVE_RE.search(key_text) else KEEP


def _webview_leaf(value: Any) -> Any:
    return _sanitize_text(value) if isinstance(value, str) else value


def sanitize_webview_sync_value(value: Any) -> Any:
    return redact_structure(value, classify=_classify_webview_key, leaf=_webview_leaf)

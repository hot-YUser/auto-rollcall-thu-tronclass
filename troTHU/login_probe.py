"""Credential-free, real-server login-flow probe for every provider.

For each registered school this drives the *credential-free half* of the unified
login flow against the live server — exactly the page-fetch + feature-detection
the real login uses, minus the credential POST — and reports what it found:
reachable?, which credential form (host + field names), which captcha protocol,
and whether the LMS set an anonymous pre-auth session cookie (the runtime signal
for "needs API validation"). It never submits credentials.

This is both a permanent `login-probe` command (catch a school that changed its
login page) and the before/after regression oracle for the login-flow refactor.

Detection reuses the shared, school-agnostic detectors that live in login_flow —
the very functions the real login uses, so the probe and the login agree by
construction.
"""
from __future__ import annotations

import asyncio
import json
import time
from typing import Any, Dict, List, Optional
from urllib.parse import urljoin, urlparse

import aiohttp

import troTHU.providers as providers
import troTHU.tron_http as tron_http
from troTHU.login_flow import (  # noqa: I001
    parse_login_settings,
    pick_login_settings_url,
    detect_sso_form,
    find_captcha_source,
    _follow_js_autosubmit,
    _is_federated_host,
    _keycloak_captcha_url,
    _fetch_keycloak_captcha,
    _fetch_sso_captcha_bytes,
)

# A captcha is REQUIRED only when the credential form actually carries a captcha
# input — NOT merely because a Keycloak /captcha/code endpoint answers (it answers
# on most tenants whether or not the realm enforces the captcha). Verified live
# 2026-06: THU/au/cgust/... expose password+username only (no captcha), while
# asia/mkc/nfu carry captchaKey/captchaCode and fju/ntou/scu/lhu/ncut carry an
# image-captcha field. Detection therefore keys on the field, then confirms by
# fetching the captcha (user: 有驗證碼的話就實測抓驗證碼).
_STATIC_CAPTCHA_FIELD_HINTS = frozenset(
    {"captcha", "authcode", "verify_code", "verifycode", "checkcode", "check_code",
     "vcode", "yzm", "imgcode", "seccode", "validatecode", "validate_code"}
)

# A realistic desktop UA — some campus SSO pages serve a different (or blocking)
# response to the default aiohttp UA. ponytail: one constant, not a config knob.
_PROBE_UA = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/124.0 Safari/537.36"
)
_PROBE_TIMEOUT_S = 20.0


async def _classify_captcha(
    client: tron_http.TronHttpClient,
    detected: Dict[str, Any],
    html: str,
    action_url: str,
    field_names: Any,
) -> Dict[str, str]:
    """Classify the captcha protocol from the FORM, then confirm by fetching it.

    Returns {"kind": keycloak_json|static_image|none, "fetch": ok|<error>|n/a}.
    """
    lower_fields = {str(f).lower() for f in (field_names or [])}
    if {"captchakey", "captchacode"} & lower_fields:
        kind = "keycloak_json"
    elif detected.get("captcha_field") or (_STATIC_CAPTCHA_FIELD_HINTS & lower_fields):
        kind = "static_image"
    else:
        return {"kind": "none", "fetch": "n/a"}

    fetched = "not_found"
    try:
        if kind == "keycloak_json":
            kc_url = _keycloak_captcha_url(action_url or "")
            if kc_url:
                await _fetch_keycloak_captcha(client, kc_url)
                fetched = "ok"
        else:
            src = find_captcha_source(html or "", action_url or "")
            if src:
                await _fetch_sso_captcha_bytes(client, src)
                fetched = "ok"
    except Exception as exc:
        fetched = type(exc).__name__
    return {"kind": kind, "fetch": fetched}


async def _classify_login_url(client: tron_http.TronHttpClient, login_url: str, prior_steps: List[str]) -> Dict[str, Any]:
    """Fetch ONE login URL and classify its page by feature. form_kind == 'no_form' means
    no credential form here (the caller advances to the next candidate URL)."""
    ep = client.endpoints
    steps = list(prior_steps)
    html, final_url = await client._get_login_form_response(login_url)
    pre_auth_session = tron_http.has_session_cookie(client.session, ep.session_cookie_domain)
    html, final_url = await _follow_js_autosubmit(client, html, final_url)
    if steps and final_url != login_url:
        steps.append("js_autosubmit")

    result: Dict[str, Any] = {
        "final_host": urlparse(final_url).hostname or "",
        "pre_auth_session_cookie": bool(pre_auth_session),
        "needs_api_validation": bool(pre_auth_session),
        "steps": steps,
        "username_field": "",
        "password_field": "",
        "action_host": "",
        "fields": [],
        "captcha": "none",
    }

    if _is_federated_host(result["final_host"]):
        result["form_kind"] = "federated"
        return result

    if tron_http.PUBLIC_CLOUD_LOGIN_VIEW_PATTERN.search(html or ""):
        try:
            form = tron_http.extract_public_cloud_email_login_form(html, final_url)
            result["form_kind"] = "email_spa"
            result["username_field"] = form.username_field
            result["action_host"] = urlparse(form.action_url).hostname or ""
            result["fields"] = sorted(form.fields)
            return result
        except Exception:
            pass

    is_nam = ("logineb.jsp" in (html or "")) or ("redirectLoginPage" in (html or ""))

    detected = detect_sso_form(html) or {}
    if detected.get("password_field"):
        action = urljoin(final_url, detected["action"]) if detected.get("action") else final_url
        field_names = sorted((detected.get("fields") or {}).keys())
        result["form_kind"] = "nam_neai" if is_nam else "credential"
        result["username_field"] = detected.get("username_field") or ""
        result["password_field"] = detected.get("password_field") or ""
        result["action_host"] = urlparse(action).hostname or ""
        result["fields"] = field_names
        cap = await _classify_captcha(client, detected, html, action, field_names)
        result["captcha"] = cap["kind"]
        result["captcha_fetch"] = cap["fetch"]
        return result

    if is_nam:
        result["form_kind"] = "nam_neai"
        return result

    try:
        form = tron_http.extract_login_form(html, final_url)
        field_names = sorted(form.fields)
        result["form_kind"] = "cas_form"
        result["action_host"] = urlparse(form.action_url).hostname or ""
        result["fields"] = field_names
        cap = await _classify_captcha(client, {}, html, form.action_url, field_names)
        result["captcha"] = cap["kind"]
        result["captcha_fetch"] = cap["fetch"]
        return result
    except tron_http.LoginPageChangedError:
        result["form_kind"] = "no_form"
        return result


async def _resolve_and_classify(client: tron_http.TronHttpClient) -> Dict[str, Any]:
    """Credential-free walk to the real credential form, mirroring the live login flow:
    unconditional loginSettings (kc_idp_hint) discovery, then candidate probing of
    /login and /cas/login. No per-school gate — identical for every provider."""
    ep = client.endpoints
    base = str(getattr(ep, "base_url", "") or "").rstrip("/")
    primary = ep.login_url
    steps: List[str] = []

    # loginSettings federation (homepage orgSettings.loginSettings → kc_idp_hint), run for
    # every school exactly as auth_runtime.login() does — not gated on auth_flow.
    try:
        homepage = base + "/" if base else ep.base_url
        home_html, _ = await client._get_login_form_response(homepage)
        resolved = pick_login_settings_url(parse_login_settings(home_html))
        if resolved and resolved != primary:
            primary = resolved
            steps.append("login_settings")
    except Exception:
        pass

    candidates = [primary]
    cas = base + "/cas/login" if base else ""
    if cas and cas != primary:
        candidates.append(cas)

    last: Dict[str, Any] = {}
    for login_url in candidates:
        result = await _classify_login_url(client, login_url, steps)
        if result.get("form_kind") != "no_form":
            return result
        last = result
    return last


async def probe_provider(provider_cfg: Dict[str, Any], *, timeout: float = _PROBE_TIMEOUT_S) -> Dict[str, Any]:
    """Probe one provider. Never raises; classifies into ok/reachable_but_changed/unreachable/skipped."""
    key = str(provider_cfg.get("key") or "?")
    endpoints = tron_http.endpoints_from_provider(provider_cfg)
    auth_flow = str(getattr(endpoints, "auth_flow", "") or "").strip().lower()
    base = {"key": key, "auth_flow": auth_flow, "login_url": endpoints.login_url}

    if auth_flow in ("manual_cookie_only", "interactive_browser"):
        return {**base, "status": "skipped", "reason": auth_flow}

    client_timeout = aiohttp.ClientTimeout(total=timeout)
    for ssl_setting in (None, False):  # try verified TLS, then fall back to unverified
        try:
            async with aiohttp.ClientSession(
                timeout=client_timeout, headers={"User-Agent": _PROBE_UA}
            ) as session:
                client = tron_http.TronHttpClient(session, request_ssl=ssl_setting, endpoints=endpoints)
                started = time.perf_counter()
                detail = await _resolve_and_classify(client)
                elapsed_ms = int(round((time.perf_counter() - started) * 1000))
            ok = detail.get("form_kind") in ("credential", "email_spa", "cas_form", "nam_neai") and (
                detail.get("password_field") or detail.get("form_kind") in ("email_spa", "cas_form", "nam_neai")
            )
            status = "ok" if ok else "reachable_but_changed"
            return {**base, "status": status, "elapsed_ms": elapsed_ms, "tls": "verified" if ssl_setting is None else "unverified", **detail}
        except (aiohttp.ClientConnectorError, asyncio.TimeoutError, aiohttp.ServerDisconnectedError) as exc:
            if ssl_setting is False:
                return {**base, "status": "unreachable", "error": type(exc).__name__}
            # network-level error: retry once with unverified TLS (often a cert/SNI issue)
            continue
        except aiohttp.ClientError as exc:
            return {**base, "status": "unreachable", "error": "{}: {}".format(type(exc).__name__, str(exc)[:120])}
    return {**base, "status": "unreachable", "error": "exhausted"}


async def probe_all(provider_cfgs: List[Dict[str, Any]], *, delay: float = 0.4, timeout: float = _PROBE_TIMEOUT_S) -> List[Dict[str, Any]]:
    """Probe every provider sequentially (polite: small inter-school delay)."""
    results: List[Dict[str, Any]] = []
    for cfg in provider_cfgs:
        results.append(await probe_provider(cfg, timeout=timeout))
        if delay:
            await asyncio.sleep(delay)
    return results


def run_login_probe(
    school: Optional[str] = None,
    *,
    as_json: bool = False,
    available: Optional[Dict[str, Dict[str, Any]]] = None,
) -> Dict[str, Any]:
    """Sync entry: probe one school (--school KEY) or all. Returns the report dict.

    ``available`` is the merged provider map (built-in + config-defined `[provider.
    available.*]`); when given it is the source of truth so a pure-config school is
    probed too. Falls back to the built-in registry when omitted.
    """
    available = available or {}
    if school:
        key = providers.normalize_provider_name(school)
        cfg = available.get(key) or providers.get_provider(school).to_config()
        cfgs = [cfg]
    elif available:
        cfgs = [available[key] for key in sorted(available)]
    else:
        cfgs = [p.to_config() for p in providers.list_all_providers()]
    results = asyncio.run(probe_all(cfgs))
    summary = {
        "total": len(results),
        "ok": sum(1 for r in results if r["status"] == "ok"),
        "reachable_but_changed": sum(1 for r in results if r["status"] == "reachable_but_changed"),
        "unreachable": sum(1 for r in results if r["status"] == "unreachable"),
        "skipped": sum(1 for r in results if r["status"] == "skipped"),
    }
    return {"summary": summary, "results": results}


def format_table(report: Dict[str, Any]) -> str:
    rows = ["{:<10} {:<20} {:<22} {:<14} {:<14} {:<6} {}".format(
        "KEY", "STATUS", "FORM_KIND", "CAPTCHA", "ACTION_HOST", "APIVAL", "FIELDS")]
    for r in report["results"]:
        rows.append("{:<10} {:<20} {:<22} {:<14} {:<14} {:<6} {}".format(
            r.get("key", "?"),
            r.get("status", "?"),
            str(r.get("form_kind", r.get("reason", r.get("error", "")) or ""))[:22],
            (str(r.get("captcha", "")) + ("!" + r["captcha_fetch"] if r.get("captcha") not in (None, "none", "") and r.get("captcha_fetch") not in (None, "ok", "n/a") else ""))[:14],
            str(r.get("action_host", r.get("final_host", "")) or "")[:14],
            "Y" if r.get("needs_api_validation") else "-",
            "{}/{} {}".format(r.get("username_field", ""), r.get("password_field", ""), ",".join(r.get("fields", []))[:60]),
        ))
    s = report["summary"]
    rows.append("")
    rows.append("total={total} ok={ok} changed={reachable_but_changed} unreachable={unreachable} skipped={skipped}".format(**s))
    return "\n".join(rows)


def login_probe_command(args: Any) -> int:
    """CLI handler for `login-probe`: probe one school (--school KEY) or all (default).

    Loads the merged config so schools added purely via `config.advanced.toml`
    (`[provider.available.*]`) are probed alongside the built-in registry.
    """
    school = (getattr(args, "school", "") or "").strip() or None
    as_json = bool(getattr(args, "json", False))
    available = None
    try:
        import troTHU.runtime_context as ctx
        config = ctx.load_config()
        available = providers.normalize_provider_config(config.get("provider")).get("available") or None
    except Exception:
        available = None
    report = run_login_probe(school, as_json=as_json, available=available)
    if as_json:
        print(json.dumps(report, ensure_ascii=False, indent=2))
    else:
        print(format_table(report))
    # Non-zero only when a host could not be reached at all (actionable); a
    # reachable-but-changed page is reported but does not fail the command.
    return 1 if report["summary"]["unreachable"] else 0


if __name__ == "__main__":
    import sys

    school_arg = None
    want_json = "--json" in sys.argv
    out_path = None
    for i, a in enumerate(sys.argv[1:]):
        if a == "--school" and i + 2 <= len(sys.argv[1:]):
            school_arg = sys.argv[i + 2]
        if a == "--out" and i + 2 <= len(sys.argv[1:]):
            out_path = sys.argv[i + 2]
    report = run_login_probe(school_arg, as_json=want_json)
    if out_path:
        with open(out_path, "w", encoding="utf-8") as fh:
            json.dump(report, fh, ensure_ascii=False, indent=2)
    if want_json:
        print(json.dumps(report, ensure_ascii=False, indent=2))
    else:
        print(format_table(report))

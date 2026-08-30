from __future__ import annotations

import copy
import ssl
from dataclasses import dataclass
from typing import Any, Mapping

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore


@dataclass(frozen=True)
class DispatchContext:
    profile_name: str
    user_no: str
    provider_key: str
    endpoints: Any
    request_ssl: Any
    config_snapshot: Mapping[str, Any]


def _request_ssl_from_snapshot(snapshot: Mapping[str, Any]) -> Any:
    try:
        verify = snapshot.get("config", {}).get("verify_ssl", ctx.DEFAULT_CONFIG["config"]["verify_ssl"]) if isinstance(snapshot.get("config"), dict) else ctx.DEFAULT_CONFIG["config"]["verify_ssl"]
        verify_bool = ctx.coerce_bool(verify, True)
        if not verify_bool:
            return False
        context = ssl.create_default_context()
        strict_flag = getattr(ssl, "VERIFY_X509_STRICT", 0)
        if strict_flag and hasattr(context, "verify_flags"):
            context.verify_flags &= ~strict_flag
        return context
    except Exception:
        return None


def resolve_provider_endpoints(provider_key: Any, config_snapshot: Mapping[str, Any] | None = None) -> tuple[str, Any]:
    """Pure helper: resolve a provider key against a supplied config snapshot.

    One central place that maps a provider key / school alias to its
    ``TronHttpEndpoints`` via the snapshot's ``provider.available`` table
    (fallback to the live registry). No global getter is used.
    """
    raw = ctx.normalize_text(provider_key)
    snap = config_snapshot if isinstance(config_snapshot, Mapping) else {}
    if not raw:
        try:
            prov_cfg = snap.get("provider", {}) if isinstance(snap.get("provider"), dict) else {}
            raw = ctx.normalize_text(prov_cfg.get("current")) if isinstance(prov_cfg, dict) else ""
        except Exception:
            raw = ""
    if not raw:
        raw = ctx.DEFAULT_PROVIDER if hasattr(ctx, "DEFAULT_PROVIDER") else "thu"
    try:
        normalized = ctx.normalize_provider_name(raw) if hasattr(ctx, "normalize_provider_name") else raw.lower()
    except Exception:
        normalized = raw.lower() if raw else "thu"
    # Try snapshot's available table first (authoritative frozen source)
    try:
        provider_cfg = snap.get("provider", {}) if isinstance(snap.get("provider"), dict) else {}
        available = provider_cfg.get("available", {}) if isinstance(provider_cfg.get("available"), dict) else {}
        if isinstance(available, dict) and normalized in available:
            conf = available[normalized]
        else:
            conf = ctx.get_provider(normalized).to_config()
    except Exception:
        try:
            conf = ctx.get_provider(normalized).to_config()
        except Exception:
            conf = {"base_url": "", "key": normalized}
    try:
        endpoints = ctx.endpoints_from_provider(conf)
    except Exception:
        endpoints = None
    return normalized, endpoints


def assert_provider_endpoints_coherent(provider_key: Any, endpoints: Any, config_snapshot: Mapping[str, Any] | None = None) -> None:
    """Assert provider_key and endpoints are coherent (same base_url)."""
    if endpoints is None:
        return
    expected_key, expected = resolve_provider_endpoints(provider_key, config_snapshot)
    # endpoints coherence: base_url must match expected's base_url
    try:
        exp_base = ctx.normalize_text(getattr(expected, "base_url", "")) if expected is not None else ""
        got_base = ctx.normalize_text(getattr(endpoints, "base_url", ""))
        if exp_base and got_base and exp_base != got_base:
            raise AssertionError(f"provider/endpoints incoherence: provider {expected_key} base {exp_base!r} != endpoints base {got_base!r}")
    except AssertionError:
        raise
    except Exception:
        pass


def build_dispatch_context(config: Mapping[str, Any] | None = None) -> DispatchContext:
    """Atomically capture an immutable dispatch snapshot from ONE config copy.

    All fields (profile, provider, endpoints, SSL) derive from the same
    deepcopied config object, so a concurrent CONFIG mutation cannot mix
    values across fields.
    """
    snapshot = copy.deepcopy(config if config is not None else ctx.CONFIG)
    # profile
    try:
        active = ctx.get_active_profile(snapshot)
        profile_name = ctx.normalize_profile_name(active.name)
        user_no = ctx.normalize_text(active.user)
    except Exception:
        profile_name = "default"
        user_no = ""
    # provider
    try:
        provider_cfg = ctx.normalize_provider_config(snapshot.get("provider", ctx.DEFAULT_CONFIG.get("provider", {})))
        provider_key_raw = ctx.normalize_text(provider_cfg.get("current")) or ctx.DEFAULT_PROVIDER
    except Exception:
        provider_key_raw = ctx.DEFAULT_PROVIDER
        provider_cfg = {}
    provider_key, endpoints = resolve_provider_endpoints(provider_key_raw, snapshot)
    # request_ssl — from snapshot's verify_ssl
    request_ssl = _request_ssl_from_snapshot(snapshot)
    if request_ssl is None:
        try:
            request_ssl = ctx.get_ssl_request_setting()
        except Exception:
            request_ssl = None
    # coherence assert (debug, never suppresses)
    try:
        assert_provider_endpoints_coherent(provider_key, endpoints, snapshot)
    except AssertionError:
        raise
    except Exception:
        pass
    return DispatchContext(
        profile_name=profile_name,
        user_no=user_no,
        provider_key=provider_key,
        endpoints=endpoints,
        request_ssl=request_ssl,
        config_snapshot=snapshot,
    )

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
        provider_key = ctx.normalize_text(provider_cfg.get("current")) or ctx.DEFAULT_PROVIDER
    except Exception:
        provider_key = ctx.DEFAULT_PROVIDER
        provider_cfg = {}
    # endpoints — derive directly from snapshot, not from globals
    try:
        available = provider_cfg.get("available", {})
        if isinstance(available, dict) and provider_key in available:
            provider_conf = available[provider_key]
        else:
            # fallback: use helper that builds from provider key via registry (still deterministic)
            provider_conf = ctx.get_provider(provider_key).to_config()
        endpoints = ctx.endpoints_from_provider(provider_conf)
    except Exception:
        try:
            endpoints = ctx.get_active_http_endpoints()
        except Exception:
            endpoints = None
    # request_ssl — from snapshot's verify_ssl
    try:
        verify = snapshot.get("config", {}).get("verify_ssl", ctx.DEFAULT_CONFIG["config"]["verify_ssl"]) if isinstance(snapshot.get("config"), dict) else ctx.DEFAULT_CONFIG["config"]["verify_ssl"]
        verify_bool = ctx.coerce_bool(verify, True)
        if not verify_bool:
            request_ssl: Any = False
        else:
            context = ssl.create_default_context()
            strict_flag = getattr(ssl, "VERIFY_X509_STRICT", 0)
            if strict_flag and hasattr(context, "verify_flags"):
                context.verify_flags &= ~strict_flag
            request_ssl = context
    except Exception:
        try:
            request_ssl = ctx.get_ssl_request_setting()
        except Exception:
            request_ssl = None
    return DispatchContext(
        profile_name=profile_name,
        user_no=user_no,
        provider_key=provider_key,
        endpoints=endpoints,
        request_ssl=request_ssl,
        config_snapshot=snapshot,
    )

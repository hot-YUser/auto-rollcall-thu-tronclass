"""Capture the TronClass *realtime / notification* subsystem in full.

Deep-dive of the decompiled app (``63621.js`` / ``42325.js`` / ``60688.js``)
showed the page ``/ongoing-rollcall-list`` keeps a live socket that is the
**notification pub/sub** (atmosphere.js):

    url:        ``{apiPrefix.ntf}/pubsub/{userID}``
    transport:  websocket (fallback long-polling)
    auth:       header / query ``X-SESSION-ID``
    onMessage:  ``JSON.parse(messages[0]).type`` -> e.g. ``qr_rollcall_started``

So that socket mostly pushes a notification *type* signal, not the QR ``data``
token. The ``ntf`` host is configured at runtime from ``/api/orgs/{org}/org-settings``.

To honestly record everything this subsystem returns, on rollcall detection we:
  1. GET ``/api/orgs/{org}/org-settings``       (reveals the ntf/pubsub host + config)
  2. GET ``/api/users/me``                       (reveals userID)
  3. GET ``{ntf}/users/{userID}/notifications``  (the REST form of the push payload)
  4. Best-effort connect the atmosphere WebSocket and log raw frames.

Everything (discovered config, REST bodies, WS frames, or failure reasons) is
written verbatim/unredacted to ``log/rollcall_capture``. Best-effort: this never
raises into the monitor loop.
"""

import json
from datetime import datetime
from pathlib import Path
from typing import Any, Dict, List, Mapping, Optional
from urllib.parse import quote, urlsplit, urlunsplit

try:
    import aiohttp
except ModuleNotFoundError:  # pragma: no cover - CLI-only environments
    aiohttp = None  # type: ignore


# Keys whose value may hold the realtime / notification base URL.
_NTF_HOST_KEY_HINTS = ("ntf", "notif", "pubsub", "push", "websocket", "ws_url", "ws-url", "socket")
_USER_ID_KEYS = ("id", "user_id", "userId", "user_no", "userID")
WS_LISTEN_SECONDS_DEFAULT = 6.0


def realtime_capture_enabled(config: Any) -> bool:
    """On by default so a bare `python -m troTHU.tron` records it."""
    if not isinstance(config, Mapping):
        return True
    section = config.get("capture")
    if not isinstance(section, Mapping):
        return True
    value = section.get("realtime_capture", True)
    if isinstance(value, str):
        return value.strip().lower() not in ("0", "false", "no", "off")
    return bool(value)


def _config_org_id(config: Any, default: str = "1") -> str:
    if isinstance(config, Mapping):
        section = config.get("capture")
        if isinstance(section, Mapping):
            value = section.get("org_id")
            if value not in (None, ""):
                return str(value).strip()
    return default


def _looks_like_url(value: Any) -> bool:
    return isinstance(value, str) and value.startswith(("http://", "https://", "ws://", "wss://"))


def extract_notification_host(payload: Any) -> str:
    """Best-effort search for a notification/pubsub base URL in org-settings."""
    if isinstance(payload, Mapping):
        # Prefer values whose KEY hints at notifications.
        for key, value in payload.items():
            if any(hint in str(key).lower() for hint in _NTF_HOST_KEY_HINTS) and _looks_like_url(value):
                return str(value)
        for value in payload.values():
            found = extract_notification_host(value)
            if found:
                return found
    elif isinstance(payload, list):
        for item in payload:
            found = extract_notification_host(item)
            if found:
                return found
    return ""


def extract_user_id(payload: Any) -> str:
    if isinstance(payload, Mapping):
        for key in _USER_ID_KEYS:
            value = payload.get(key)
            if value not in (None, "", {}):
                return str(value)
        for nested_key in ("user", "data", "current_user"):
            nested = payload.get(nested_key)
            if isinstance(nested, Mapping):
                found = extract_user_id(nested)
                if found:
                    return found
    return ""


def build_pubsub_ws_url(ntf_base: str, user_id: str, session_id: str) -> str:
    """Build the atmosphere websocket URL for {ntf}/pubsub/{userID}."""
    base = str(ntf_base or "").rstrip("/")
    if not base or not user_id:
        return ""
    split = urlsplit(base)
    scheme = {"https": "wss", "http": "ws"}.get(split.scheme, split.scheme or "wss")
    path = "{}/pubsub/{}".format(split.path.rstrip("/"), quote(str(user_id), safe=""))
    query_parts = [
        "X-Atmosphere-tracking-id=0",
        "X-Atmosphere-Framework=2.3.6-javascript",
        "X-Atmosphere-Transport=websocket",
        "X-Atmosphere-TrackMessageSize=true",
        "Content-Type=application/json",
        "X-atmo-protocol=true",
    ]
    if session_id:
        query_parts.append("X-SESSION-ID={}".format(quote(str(session_id), safe="")))
    return urlunsplit((scheme, split.netloc, path, "&".join(query_parts), ""))


async def _get(session: Any, url: str, request_ssl: Any) -> Dict[str, Any]:
    record: Dict[str, Any] = {"method": "GET", "url": url}
    kwargs: Dict[str, Any] = {}
    if request_ssl is not None:
        kwargs["ssl"] = request_ssl
    try:
        async with session.get(url, **kwargs) as response:
            record["status"] = int(getattr(response, "status", 0) or 0)
            record["reason"] = str(getattr(response, "reason", "") or "")
            record["headers"] = {str(k): str(v) for k, v in dict(response.headers).items()}
            text = await response.text()
    except Exception as exc:
        record["error"] = "{}: {}".format(type(exc).__name__, exc)
        return record
    record["body_text"] = text
    try:
        record["json"] = json.loads(text) if text else None
    except ValueError:
        record["json"] = None
    return record


async def _ws_listen(session: Any, ws_url: str, request_ssl: Any, seconds: float) -> Dict[str, Any]:
    record: Dict[str, Any] = {"url": ws_url, "frames": []}
    if aiohttp is None:
        record["error"] = "aiohttp_unavailable"
        return record
    kwargs: Dict[str, Any] = {"heartbeat": None}
    if request_ssl is not None:
        kwargs["ssl"] = request_ssl
    try:
        import asyncio

        async with session.ws_connect(ws_url, **kwargs) as ws:
            record["connected"] = True
            deadline = asyncio.get_event_loop().time() + max(1.0, float(seconds))
            while True:
                remaining = deadline - asyncio.get_event_loop().time()
                if remaining <= 0:
                    break
                try:
                    msg = await asyncio.wait_for(ws.receive(), timeout=remaining)
                except asyncio.TimeoutError:
                    break
                record["frames"].append({"type": str(getattr(msg.type, "name", msg.type)), "data": str(getattr(msg, "data", ""))})
                if msg.type in (aiohttp.WSMsgType.CLOSED, aiohttp.WSMsgType.CLOSING, aiohttp.WSMsgType.ERROR):
                    break
    except Exception as exc:
        record["error"] = "{}: {}".format(type(exc).__name__, exc)
    return record


async def capture_realtime(
    session: Any,
    *,
    base_url: str,
    session_id: str = "",
    org_id: str = "",
    request_ssl: Any = None,
    base_dir: Any,
    profile: str = "",
    provider: str = "",
    rollcall_id: str = "",
    trigger_status: str = "",
    config: Any = None,
    ws_seconds: float = WS_LISTEN_SECONDS_DEFAULT,
) -> Dict[str, Any]:
    """Capture the realtime/notification subsystem in full. Never raises."""
    summary: Dict[str, Any] = {"status": "skipped"}
    try:
        if config is not None and not realtime_capture_enabled(config):
            summary["status"] = "disabled"
            return summary
        base = str(base_url or "").rstrip("/")
        if not base:
            summary["status"] = "no_base_url"
            return summary
        org = org_id or _config_org_id(config)

        reads: Dict[str, Any] = {}
        reads["org_settings"] = await _get(session, "{}/api/orgs/{}/org-settings".format(base, quote(org, safe="")), request_ssl)
        reads["users_me"] = await _get(session, "{}/api/users/me".format(base), request_ssl)

        # If neither core read produced a real HTTP response, there is nothing to
        # record (e.g. an unauthenticated/mock session) — skip writing.
        if not any(isinstance(record.get("status"), int) and not record.get("error") for record in reads.values()):
            summary["status"] = "no_response"
            return summary

        ntf_host = extract_notification_host(reads["org_settings"].get("json"))
        user_id = extract_user_id(reads["users_me"].get("json"))

        if ntf_host and user_id:
            notif_base = ntf_host.rstrip("/")
            reads["notifications"] = await _get(
                session,
                "{}/users/{}/notifications?page=1&page_size=20".format(notif_base, quote(user_id, safe="")),
                request_ssl,
            )

        ws_url = build_pubsub_ws_url(ntf_host, user_id, session_id)
        ws_result: Dict[str, Any]
        if ws_url:
            ws_result = await _ws_listen(session, ws_url, request_ssl, ws_seconds)
        else:
            ws_result = {"status": "config_incomplete", "ntf_host": ntf_host, "user_id_found": bool(user_id)}

        document = {
            "timestamp": datetime.now().isoformat(timespec="seconds"),
            "provider": provider,
            "profile": profile,
            "trigger_status": trigger_status,
            "rollcall_id": rollcall_id,
            "org_id": org,
            "discovered": {"ntf_host": ntf_host, "user_id": user_id, "has_session_id": bool(session_id)},
            "rest_reads": reads,
            "websocket": ws_result,
        }

        out_dir = Path(base_dir) / "log" / "rollcall_capture"
        out_dir.mkdir(parents=True, exist_ok=True)
        stamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        out_path = out_dir / "realtime_{}_{}.json".format(stamp, quote(rollcall_id or "na", safe=""))
        with out_path.open("w", encoding="utf-8") as file:
            json.dump(document, file, ensure_ascii=False, indent=2, default=str)

        summary["status"] = "ok"
        summary["output_path"] = str(out_path)
        summary["ntf_host_found"] = bool(ntf_host)
        summary["ws_connected"] = bool(ws_result.get("connected"))
        summary["ws_frames"] = len(ws_result.get("frames", []) or [])
        return summary
    except Exception as exc:  # pragma: no cover - defensive
        summary["status"] = "error"
        summary["error"] = "{}: {}".format(type(exc).__name__, exc)
        return summary

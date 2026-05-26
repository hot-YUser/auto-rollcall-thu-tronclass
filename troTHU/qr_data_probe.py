"""Experimental probe of how the server validates the QR `answer_qr_rollcall`
`data` token, on YOUR OWN rollcall.

Hypothesis under test: maybe the server only checks the leading 10-digit unix
timestamp of `data` and ignores the 32-hex hash that follows. To find out, we
send a small, bounded set of requests to `/api/rollcall/{id}/answer_qr_rollcall`
and record the full, unredacted server responses:

  1. one request that OMITS the `data` field entirely;
  2. N requests with `data = <server-derived qr ts><random 32-hex>`.

This mirrors the existing number brute-force / radar probing (send candidates,
observe the server) and is scoped to the user's own rollcall. It can run from
an explicit `qr data-probe` command or once per detected QR rollcall when the
autorun config is enabled.
"""

from datetime import datetime, timezone
from email.utils import parsedate_to_datetime
import secrets
import time
from typing import Any, Dict, List, Mapping, Optional, Tuple
from urllib.parse import quote

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore


def qr_data_probe_autorun_enabled(config: Any) -> bool:
    """Auto-run the data-probe on QR detection in the bare monitor. On by default
    (toggle `qr.data_probe_autorun` in config.advanced.yaml)."""
    section = config.get("qr") if hasattr(config, "get") else None
    if not hasattr(section, "get"):
        return True
    value = section.get("data_probe_autorun", True)
    if isinstance(value, str):
        return value.strip().lower() not in ("0", "false", "no", "off")
    return bool(value)


QR_REFRESH_SECONDS = 15
ROLLCALL_TIME_KEYS = ("rollcall_time", "create_time", "created_at", "start_time", "published_at")


def _random_hex32() -> str:
    return secrets.token_hex(16)  # 16 bytes -> 32 hex chars


def coerce_epoch_seconds(value: Any) -> Optional[int]:
    """Parse TronClass/API timestamps into unix seconds."""
    if value in (None, ""):
        return None
    if isinstance(value, datetime):
        dt = value
    elif isinstance(value, (int, float)):
        number = float(value)
        if number > 9999999999:
            number = number / 1000.0
        return int(number)
    else:
        text = str(value or "").strip()
        if not text:
            return None
        try:
            number = float(text)
        except ValueError:
            number = None
        if number is not None:
            if number > 9999999999:
                number = number / 1000.0
            return int(number)
        try:
            dt = parsedate_to_datetime(text)
        except (TypeError, ValueError, IndexError):
            normalized = text.replace("Z", "+00:00")
            try:
                dt = datetime.fromisoformat(normalized)
            except ValueError:
                return None
    if dt.tzinfo is None:
        dt = dt.replace(tzinfo=timezone.utc)
    return int(dt.timestamp())


def extract_rollcall_time_value(rollcall: Any) -> Tuple[str, Any]:
    """Return the first server rollcall timestamp field we can use as QR anchor."""
    if not isinstance(rollcall, Mapping):
        return "", None
    for key in ROLLCALL_TIME_KEYS:
        value = rollcall.get(key)
        if coerce_epoch_seconds(value) is not None:
            return key, value
    return "", None


def derive_qr_timestamp_from_server_time(
    rollcall_time: Any,
    server_now: Any,
    *,
    refresh_seconds: int = QR_REFRESH_SECONDS,
) -> Optional[int]:
    """Derive the displayed QR timestamp from server rollcall time and Date.

    TronClass QR timestamps appear to be anchored at rollcall_time and advance
    every 15 seconds, instead of aligning to wall-clock :00/:15/:30/:45.
    """
    anchor = coerce_epoch_seconds(rollcall_time)
    now = coerce_epoch_seconds(server_now)
    if anchor is None or now is None:
        return None
    interval = max(1, int(refresh_seconds))
    if now <= anchor:
        return anchor
    return anchor + ((now - anchor) // interval) * interval


def build_qr_data_probe_cases(timestamp: Any, samples: int, device_id: str) -> List[Dict[str, Any]]:
    """Build the probe request bodies. Pure / deterministic in shape (the hash
    bytes are random). First case omits `data`; the rest are ts + random hash."""
    cases: List[Dict[str, Any]] = [{"label": "omit_data", "body": {"deviceId": device_id}}]
    for index in range(max(0, int(samples))):
        data = "{}{}".format(timestamp, _random_hex32())
        cases.append({"label": "ts_random_hex_{}".format(index + 1), "body": {"data": data, "deviceId": device_id}})
    return cases


async def run_qr_data_probe(
    session: Any,
    rollcall_id: Any,
    *,
    endpoints: Any,
    base_dir: Any,
    request_ssl: Any = None,
    timestamp: Any = None,
    rollcall: Any = None,
    rollcall_time: Any = None,
    require_server_timestamp: bool = False,
    samples: int = 5,
    device_id: str = "",
    session_id: str = "",
    config: Any = None,
) -> Dict[str, Any]:
    """Send the probe requests and record each full exchange. Never raises."""
    base = str(getattr(endpoints, "base_url", "") or "").rstrip("/")
    rid = str(rollcall_id or "").strip()
    if not base or not rid:
        return {"ok": False, "status": "incomplete", "results": []}
    device = device_id or ctx.random_id()
    url = "{}/api/rollcall/{}/answer_qr_rollcall".format(base, quote(rid, safe=""))
    headers = {"Content-Type": "application/json"}
    if session_id:
        headers["x-session-id"] = session_id
    request_kwargs: Dict[str, Any] = {"headers": headers}
    if request_ssl is not None:
        request_kwargs["ssl"] = request_ssl

    timestamp_source = "local_time"
    timestamp_field = ""
    server_date = ""
    timestamp_error = ""
    if str(timestamp or "").strip():
        ts = int(timestamp)
        timestamp_source = "explicit"
    else:
        if rollcall_time in (None, ""):
            timestamp_field, rollcall_time = extract_rollcall_time_value(rollcall)
        if rollcall_time not in (None, ""):
            timestamp_field = timestamp_field or "rollcall_time"
            lite_url = "{}/api/rollcall/{}/lite".format(base, quote(rid, safe=""))
            try:
                async with session.get(lite_url, **request_kwargs) as resp:
                    server_date = str(resp.headers.get("Date", "") or "")
                    await resp.read()
            except Exception as exc:
                timestamp_error = "{}: {}".format(type(exc).__name__, exc)
            derived = derive_qr_timestamp_from_server_time(rollcall_time, server_date)
            if derived is not None:
                ts = derived
                timestamp_source = "server_rollcall_time_plus_server_date"
            elif require_server_timestamp:
                return {
                    "ok": False,
                    "status": "missing_server_timestamp",
                    "rollcall_id": rid,
                    "timestamp": None,
                    "timestamp_source": "missing",
                    "timestamp_field": timestamp_field,
                    "rollcall_time": rollcall_time,
                    "server_date": server_date,
                    "timestamp_error": timestamp_error,
                    "results": [],
                }
            else:
                anchor = coerce_epoch_seconds(rollcall_time)
                ts = anchor if anchor is not None else int(time.time())
                timestamp_source = "rollcall_time_anchor" if anchor is not None else "local_time"
        elif require_server_timestamp:
            return {
                "ok": False,
                "status": "missing_rollcall_time",
                "rollcall_id": rid,
                "timestamp": None,
                "timestamp_source": "missing",
                "timestamp_field": "",
                "rollcall_time": "",
                "server_date": server_date,
                "timestamp_error": timestamp_error,
                "results": [],
            }
        else:
            ts = int(time.time())

    results: List[Dict[str, Any]] = []
    for case in build_qr_data_probe_cases(ts, samples, device):
        label = case["label"]
        body = case["body"]
        record: Dict[str, Any] = {"label": label, "request_body": body}
        response_headers: Dict[str, Any] = {}
        text = ""
        try:
            async with session.put(url, json=body, **request_kwargs) as resp:
                status = int(getattr(resp, "status", 0) or 0)
                response_headers = {str(k): str(v) for k, v in dict(resp.headers).items()}
                text = await resp.text()
            record.update({"status": status, "body_text": text, "looks_success": status in (200, 201, 204)})
        except Exception as exc:
            text = "{}: {}".format(type(exc).__name__, exc)
            record.update({"status": None, "error": text, "looks_success": False})
        try:
            ctx.append_rollcall_exchange(
                base_dir,
                rollcall_id=rid,
                rollcall_type="qrcode",
                label="data_probe:{}".format(label),
                method="PUT",
                url=url,
                request_body=body,
                status=record.get("status"),
                response_headers=response_headers,
                response_text=text,
                config=config,
            )
        except Exception:
            pass
        results.append(record)

    return {
        "ok": True,
        "rollcall_id": rid,
        "timestamp": ts,
        "timestamp_source": timestamp_source,
        "timestamp_field": timestamp_field,
        "rollcall_time": rollcall_time if rollcall_time not in (None, "") else "",
        "server_date": server_date,
        "refresh_seconds": QR_REFRESH_SECONDS,
        "device_id": device,
        "any_2xx": any(item.get("looks_success") for item in results),
        "results": results,
    }

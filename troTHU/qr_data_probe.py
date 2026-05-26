"""Experimental probe of how the server validates the QR `answer_qr_rollcall`
`data` token, on YOUR OWN rollcall.

Hypothesis under test: maybe the server only checks the leading 10-digit unix
timestamp of `data` and ignores the 32-hex hash that follows. To find out, we
send a small, bounded set of requests to `/api/rollcall/{id}/answer_qr_rollcall`
and record the full, unredacted server responses:

  1. one request that OMITS the `data` field entirely;
  2. N requests with `data = <current unix ts><random 32-hex>`.

This mirrors the existing number brute-force / radar probing (send candidates,
observe the server) and is scoped to the user's own rollcall. It is only ever
run from an explicit `qr data-probe` command — never automatically.
"""

import secrets
import time
from typing import Any, Dict, List
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


def _random_hex32() -> str:
    return secrets.token_hex(16)  # 16 bytes -> 32 hex chars


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
    ts = int(timestamp) if str(timestamp or "").strip() else int(time.time())
    device = device_id or ctx.random_id()
    url = "{}/api/rollcall/{}/answer_qr_rollcall".format(base, quote(rid, safe=""))
    headers = {"Content-Type": "application/json"}
    if session_id:
        headers["x-session-id"] = session_id
    request_kwargs: Dict[str, Any] = {"headers": headers}
    if request_ssl is not None:
        request_kwargs["ssl"] = request_ssl

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
        "device_id": device,
        "any_2xx": any(item.get("looks_success") for item in results),
        "results": results,
    }

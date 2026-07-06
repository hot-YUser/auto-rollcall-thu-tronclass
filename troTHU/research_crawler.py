"""Research-mode active endpoint crawler — the "Debug/Research evidence collection".

Runs ONLY in the research tier (``ctx.CRAWLER_ENABLED``). It reuses the authenticated
monitor session to:
  1. map the whole reachable surface once at startup (``run_startup_crawl``),
  2. re-map whenever the API *source state* changes — a rollcall appears / leaves /
     changes id|status|type (``run_delta_crawl``, driven by ``source_state_signature``
     computed DIRECTLY from the /api/radar/rollcalls payload, not the derived status line),
  3. hammer the QR-relevant endpoints while a QR rollcall is live (``run_qr_hammer``),
     to capture the rotating ``data`` token evidence for offline analysis.

Every raw response is dumped VERBATIM (research = no redaction) to a gitignored local
file (``state/research-crawl/<date>.jsonl``) — never to ``ctx.PATH`` (which feeds the
shareable ``logs export`` bundle), and never committed.

Scope guard: it only touches the WisdomGarden/TronClass family — seeded from the provider
registry base_urls + vendor roots, and any newly-discovered host is admitted only if it
fingerprints as a TronClass server (GET /d/version). It never crawls the open web.

Everything here is best-effort and NEVER raises into the monitor loop.
"""
from __future__ import annotations

import asyncio
import re
from typing import Any, Dict, List, Set, Tuple
from urllib.parse import urljoin, urlparse

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore


def __getattr__(name: str):
    return getattr(ctx, name)


# Bounds (research mode is deep/wide, but not a DoS or an open-web crawl).
_MAX_ENDPOINTS = 400
_MAX_JS_ASSETS = 40
_CONCURRENCY = 5
_QR_HAMMER_ITERATIONS = 40
_QR_HAMMER_INTERVAL = 0.4
CRAWL_MIN_INTERVAL_SECONDS = 30.0
_FINGERPRINT_PATH = "/d/version"

VENDOR_HOST_HINTS = ("wisdomgarden", "tronclass", "ilearn")
VENDOR_ROOTS = (
    "www.wisdomgarden.com", "wisdomgarden.com",
    "www.tronclass.com", "tronclass.com",
    "www.tronclass.com.tw", "tronclass.com.tw",
)
_SEED_API_PATHS = (
    "/d/server-time", "/d/version", "/api/feature-toggles", "/api/users/me",
    "/api/radar/rollcalls?api_version=1.1.0", "/api/my-courses",
)

_API_PATH_RE = re.compile(r"""['"](/api/[A-Za-z0-9_\-./]+)['"]""")
_JS_ASSET_RE = re.compile(r"""['"]([^'"]+?\.js(?:\?[^'"]*)?)['"]""")

# QR data token = <10 unix seconds><32 lowercase hex>. Used both to harvest the teacher
# qr_code value AND to leak-scan every captured body for an accidental token echo.
QR_DATA_TOKEN_RE = re.compile(r"\b(\d{10}[0-9a-f]{32})\b")


# --------------------------------------------------------------------------- #
# Pure helpers (unit-tested directly)
# --------------------------------------------------------------------------- #
def _rollcall_items(payload: Any) -> List[Dict[str, Any]]:
    if isinstance(payload, dict):
        items = payload.get("rollcalls")
        if isinstance(items, list):
            return [x for x in items if isinstance(x, dict)]
    if isinstance(payload, list):
        return [x for x in payload if isinstance(x, dict)]
    return []


def source_state_signature(payload: Any) -> Tuple[Tuple[str, str], ...]:
    """Deterministic signature of the API-returned rollcall situation.

    Reorder-invariant; changes when a rollcall appears/leaves or its id/status/type
    changes. Computed from the raw feed, NOT the derived MONITOR_STATUS line.
    """
    pairs = []
    for item in _rollcall_items(payload):
        rid = str(item.get("rollcall_id") or item.get("id") or "")
        state = str(item.get("status") or item.get("type") or "")
        pairs.append((rid, state))
    return tuple(sorted(pairs))


def should_recrawl(signature: Any, *, now: float, last_signature: Any,
                   last_crawl_at: float, min_interval: float) -> bool:
    """Fire a delta crawl only when the source state changed AND the debounce elapsed."""
    if signature == last_signature:
        return False
    return (now - last_crawl_at) >= max(0.0, min_interval)


def first_qr_rollcall_id(payload: Any) -> str:
    for item in _rollcall_items(payload):
        state = "{} {}".format(item.get("status") or "", item.get("type") or "").lower()
        if "qr" in state or item.get("is_qrcode"):
            return str(item.get("rollcall_id") or item.get("id") or "")
    return ""


def _host(url: Any) -> str:
    try:
        return urlparse(str(url or "")).netloc.lower()
    except Exception:
        return ""


def build_host_allowlist(config: Any) -> Set[str]:
    """Seed the in-family host set from the provider registry + vendor roots."""
    hosts: Set[str] = set(VENDOR_ROOTS)
    try:
        available = config.get("provider", {}).get("available", {}) or {}
    except Exception:
        available = {}
    for provider in available.values():
        if isinstance(provider, dict):
            host = _host(provider.get("base_url"))
            if host:
                hosts.add(host)
    return hosts


def host_in_family(host: str, allowlist: Set[str]) -> bool:
    host = (host or "").lower()
    if not host:
        return False
    if host in allowlist:
        return True
    return any(hint in host for hint in VENDOR_HOST_HINTS)


def extract_api_paths(text: str) -> List[str]:
    return sorted({match.group(1) for match in _API_PATH_RE.finditer(text or "")})


def extract_js_assets(text: str, base_url: str) -> List[str]:
    seen: Set[str] = set()
    out: List[str] = []
    for match in _JS_ASSET_RE.finditer(text or ""):
        try:
            url = urljoin(base_url, match.group(1))
        except Exception:
            continue
        if url not in seen:
            seen.add(url)
            out.append(url)
    return out[:_MAX_JS_ASSETS]


# --------------------------------------------------------------------------- #
# QR data-token analysis (pure; unit-tested) — leak scan, token index, cadence
# --------------------------------------------------------------------------- #
def scan_body_for_tokens(body: Any) -> List[str]:
    """Every data-shaped token (<10 unix sec><32 lower-hex>) in a response body.

    Accepts a str or an already-parsed JSON value (stringified). Pure/deterministic.
    """
    if body is None:
        return []
    text = body if isinstance(body, str) else ctx.json.dumps(body, ensure_ascii=False, default=str)
    return sorted(set(QR_DATA_TOKEN_RE.findall(text)))


def _extract_data_token(body_text: Any) -> str:
    """First data-shaped token in a qr_code body, or '' if absent. Pure."""
    if not isinstance(body_text, str):
        body_text = ctx.json.dumps(body_text, ensure_ascii=False, default=str) if body_text else ""
    match = QR_DATA_TOKEN_RE.search(body_text or "")
    return match.group(1) if match else ""


def leak_scan_record(record: Dict[str, Any]) -> Dict[str, Any]:
    """Describe a data-shaped token found in a crawl record's body, or {} if none.

    A hit on a NON-teacher source (a student/endpoint body echoing the rotating token)
    is a genuine ``is_leak``; the intended ``teacher_qr`` harvest is NOT a leak. This is
    what turns "尚未發現" (not yet found) into a continuously re-verified claim.
    """
    if not isinstance(record, dict):
        return {}
    tokens = scan_body_for_tokens(record.get("body"))
    if not tokens:
        return {}
    source = str(record.get("source") or "")
    kind = str(record.get("kind") or "")
    is_harvest = source == "teacher_qr" or kind in ("teacher_qr", "teacher_qr_start", "teacher_qr_end")
    return {
        "url": record.get("url", ""),
        "kind": kind,
        "source": source,
        "status": record.get("status", ""),
        "tokens": tokens,
        "is_leak": not is_harvest,
    }


def token_index_row(record: Dict[str, Any]) -> Dict[str, Any]:
    """Compact (ts, server_time, source, rollcall_id, data) row for the derived
    qr-tokens.jsonl index. Falls back to scanning ``body`` when no explicit ``data``.
    Returns {} for a token-less record. Pure.
    """
    if not isinstance(record, dict):
        return {}
    data = ctx.normalize_text(record.get("data"))
    if not data:
        tokens = scan_body_for_tokens(record.get("body"))
        data = tokens[0] if tokens else ""
    if not data:
        return {}
    return {
        "ts": record.get("ts", ""),
        "server_time": record.get("http_date_epoch") or record.get("server_time") or "",
        "source": record.get("source") or record.get("kind") or "",
        "rollcall_id": record.get("rollcall_id") or record.get("course_id") or "",
        "data": data,
    }


def _parse_http_date_epoch(date_header: Any) -> float:
    """RFC 7231 Date header -> unix seconds (float); 0.0 on failure. Pure/testable."""
    text = str(date_header or "").strip()
    if not text:
        return 0.0
    try:
        from email.utils import parsedate_to_datetime
        parsed = parsedate_to_datetime(text)
        return float(parsed.timestamp()) if parsed is not None else 0.0
    except Exception:
        return 0.0


def _hammer_config(config: Any) -> Dict[str, Any]:
    """Tunable hammer/harvest cadence from CONFIG['research'] (falls back to the historical
    hardcoded defaults). Pure + fully default-safe — behaviour unchanged when absent.
    """
    research = config.get("research", {}) if isinstance(config, dict) else {}
    if not isinstance(research, dict):
        research = {}

    def _pos_int(key: str, default: int) -> int:
        try:
            return max(1, int(research.get(key, default)))
        except (TypeError, ValueError):
            return default

    def _pos_float(key: str, default: float) -> float:
        try:
            return max(0.0, float(research.get(key, default)))
        except (TypeError, ValueError):
            return default

    return {
        "iterations": _pos_int("hammer_iterations", _QR_HAMMER_ITERATIONS),
        "interval": _pos_float("hammer_interval", _QR_HAMMER_INTERVAL),
        "max_duration": _pos_float("hammer_max_duration", 60.0),
        "teacher_harvest": bool(research.get("teacher_harvest", False)),
    }


# --------------------------------------------------------------------------- #
# Raw dump (verbatim, gitignored, never redacted — research tier only)
# --------------------------------------------------------------------------- #
def _dump(kind: str, record: Dict[str, Any]) -> None:
    try:
        now = ctx.current_datetime()
        root = ctx.BASE_DIR / "state" / "research-crawl"
        root.mkdir(parents=True, exist_ok=True)
        path = root / "{}.jsonl".format(now.strftime("%Y-%m-%d"))
        payload = {"ts": now.isoformat(timespec="seconds"), "kind": kind}
        payload.update(record)
        with open(path, "a", encoding="utf-8") as handle:
            handle.write(ctx.json.dumps(payload, ensure_ascii=False, default=str) + "\n")
    except Exception:
        return


async def _fetch_text(session: Any, url: str, request_ssl: Any) -> Tuple[int, str, str]:
    kwargs = {"ssl": request_ssl} if request_ssl is not None else {}
    try:
        async with session.get(url, **kwargs) as resp:
            text = await resp.text()
            return resp.status, text, str(resp.headers.get("Content-Type") or "")
    except Exception as exc:
        return 0, "", "error:{}".format(type(exc).__name__)


async def _fetch_text_with_headers(session: Any, url: str, request_ssl: Any) -> Tuple[int, str, Dict[str, str]]:
    """Like ``_fetch_text`` but returns response headers too (need Date for server time)."""
    kwargs = {"ssl": request_ssl} if request_ssl is not None else {}
    try:
        async with session.get(url, **kwargs) as resp:
            text = await resp.text()
            return resp.status, text, {str(k): str(v) for k, v in resp.headers.items()}
    except Exception as exc:
        return 0, "", {"error": type(exc).__name__}


async def _fetch_server_time_epoch(session: Any, url: str, request_ssl: Any) -> float:
    """GET a ``/d/server-time`` URL as a secondary server clock. 0.0 on any failure."""
    status, text, _ = await _fetch_text(session, url, request_ssl)
    if status != 200:
        return 0.0
    match = re.search(r"\d{10,13}", text or "")
    if not match:
        return 0.0
    raw = int(match.group(0))
    return raw / 1000.0 if raw > 10_000_000_000 else float(raw)


async def _host_is_tronclass(session: Any, host: str, request_ssl: Any) -> bool:
    status, text, _ = await _fetch_text(session, "https://{}{}".format(host, _FINGERPRINT_PATH), request_ssl)
    if status != 200:
        return False
    low = text.lower()
    return "version" in low or "wisdomgarden" in low or "tronclass" in low


def _base_url() -> str:
    try:
        endpoints = ctx.get_active_http_endpoints()
        return str(getattr(endpoints, "base_url", "") or "").rstrip("/")
    except Exception:
        return ""


async def _crawl_surface(session: Any, *, reason: str) -> Dict[str, Any]:
    base = _base_url()
    if not base:
        return {"ok": False, "reason": "no_base_url"}
    request_ssl = ctx.get_ssl_request_setting()
    allowlist = build_host_allowlist(ctx.CONFIG)
    allowlist.add(_host(base))
    fingerprinted: Dict[str, bool] = {}
    hit_urls: Set[str] = set()
    _dump("crawl_start", {"reason": reason, "base": base})

    # homepage HTML -> api paths + JS assets
    status, html, ctype = await _fetch_text(session, base + "/", request_ssl)
    _dump("page", {"url": base + "/", "status": status, "content_type": ctype, "body": html})
    api_paths: Set[str] = set(_SEED_API_PATHS) | set(extract_api_paths(html))

    for asset in extract_js_assets(html, base + "/"):
        a_status, a_text, a_ctype = await _fetch_text(session, asset, request_ssl)
        _dump("asset", {"url": asset, "status": a_status, "content_type": a_ctype, "body": a_text[:200000]})
        api_paths.update(extract_api_paths(a_text))

    ordered = sorted(api_paths)[:_MAX_ENDPOINTS]
    semaphore = asyncio.Semaphore(_CONCURRENCY)

    async def hit(path: str) -> None:
        url = path if path.startswith("http") else urljoin(base + "/", path.lstrip("/"))
        host = _host(url)
        if not host_in_family(host, allowlist):
            if host not in fingerprinted:
                fingerprinted[host] = await _host_is_tronclass(session, host, request_ssl)
            if not fingerprinted[host]:
                _dump("skip_host", {"url": url, "host": host})
                return
        async with semaphore:
            e_status, e_text, e_ctype = await _fetch_text(session, url, request_ssl)
            _dump("endpoint", {"url": url, "status": e_status, "content_type": e_ctype, "body": e_text})
            hit_urls.add(url)

    await asyncio.gather(*(hit(path) for path in ordered), return_exceptions=True)
    _dump("crawl_end", {"reason": reason, "endpoint_count": len(hit_urls)})
    return {"ok": True, "endpoint_count": len(hit_urls)}


# --------------------------------------------------------------------------- #
# Entry points (fire-and-forget; never raise into the monitor loop)
# --------------------------------------------------------------------------- #
async def run_startup_crawl(session: Any) -> None:
    try:
        await _crawl_surface(session, reason="startup")
    except Exception:
        return


async def run_delta_crawl(session: Any, signature: Any = None) -> None:
    try:
        await _crawl_surface(session, reason="source_state_change")
    except Exception:
        return


async def run_qr_hammer(session: Any, rollcall_id: Any) -> None:
    """Sample the QR surface while a QR rollcall is live.

    The 4 student endpoints stay as a raw baseline (prior research proved they never carry
    ``data``); when a teacher session is ready AND ``research.teacher_harvest`` is on, this
    ALSO densely harvests the TEACHER ``qr_code`` (server_time, data) series — the
    cryptanalytically useful sample. Never raises.
    """
    try:
        base = _base_url()
        rid = str(rollcall_id or "").strip()
        if not base or not rid:
            return
        cfg = _hammer_config(ctx.CONFIG)
        request_ssl = ctx.get_ssl_request_setting()
        paths = [
            "/api/rollcall/{}".format(rid),
            "/api/rollcall/{}/lite".format(rid),
            "/api/rollcall/{}/student_rollcalls".format(rid),
            "/api/rollcall/{}/answers".format(rid),
        ]
        teacher_task = asyncio.ensure_future(_maybe_harvest_teacher(cfg))
        for iteration in range(cfg["iterations"]):
            for path in paths:
                h_status, h_text, _ = await _fetch_text(session, base + path, request_ssl)
                _dump("qr_hammer", {"iteration": iteration, "url": base + path,
                                    "source": "student", "status": h_status, "body": h_text})
            await asyncio.sleep(cfg["interval"])
        try:
            await teacher_task
        except Exception:
            pass
    except Exception:
        return


async def _maybe_harvest_teacher(cfg: Dict[str, Any]) -> None:
    """When a ready teacher session exists AND opt-in is on, open a THROWAWAY teacher QR
    rollcall, densely harvest its (server_time, data) series, then stop it.

    Kept fully separate from the production ``ACTIVE_TEACHER_QR_ASSISTS`` path (its own
    throwaway rollcall — never touches that dict, so no double-stop / state clobber).
    Opt-in ``teacher_harvest`` defaults false precisely because this CREATES a real
    teacher rollcall (a server side-effect). Never raises.
    """
    try:
        if not cfg.get("teacher_harvest"):
            return
        if not getattr(ctx, "TEACHER_READY", False):
            return
        if ctx.TEACHER_SESSION is None or ctx.TEACHER_ENDPOINTS is None:
            return
        client = ctx.TronHttpClient(
            ctx.TEACHER_SESSION, request_ssl=ctx.get_ssl_request_setting(),
            endpoints=ctx.TEACHER_ENDPOINTS)
        course_id = await ctx.resolve_teacher_course_id(client, ctx.CONFIG)
        if not course_id:
            return
        created = await client.create_teacher_rollcall(
            course_id, ctx.build_teacher_rollcall_payload(kind="qr"))
        teacher_rollcall_id = ctx.extract_rollcall_id(created)
        if not teacher_rollcall_id:
            return
        try:
            try:
                await client.start_teacher_rollcall(teacher_rollcall_id)
            except ctx.TronHttpError:
                pass
            await harvest_teacher_qr_series(
                client, course_id, teacher_rollcall_id,
                iterations=cfg["iterations"], interval=cfg["interval"],
                max_duration=cfg["max_duration"])
        finally:
            try:
                await client.stop_teacher_rollcall(teacher_rollcall_id, rollcall_type="qr")
            except Exception:
                pass
    except Exception:
        return


async def harvest_teacher_qr_series(teacher_client: Any, course_id: Any, teacher_rollcall_id: Any,
                                    *, iterations: int, interval: float, max_duration: float) -> Dict[str, Any]:
    """Densely sample the TEACHER ``qr_code`` endpoint, capturing precise server time per
    sample (the HTTP ``Date`` header).

    Writes compact ``{ts, server_time, wall_epoch, rollcall_id, source:"teacher_qr", data,
    status, body}`` records to the gitignored research-crawl jsonl. Uses a raw ``session.get``
    (NOT ``fetch_teacher_qr_code``, which drops headers and logs each hit into the shareable
    ``logs export`` bundle). This is the cryptanalytically useful sample the student side
    can never yield. Never raises.
    """
    try:
        cid = str(course_id or "").strip()
        trid = str(teacher_rollcall_id or "").strip()
        if not cid or not trid or teacher_client is None:
            return {"ok": False, "reason": "missing_teacher_context"}
        session = getattr(teacher_client, "session", None)
        if session is None:
            return {"ok": False, "reason": "no_teacher_session"}
        request_ssl = ctx.get_ssl_request_setting()
        url = teacher_client.api_url("/api/course/{}/rollcall/{}/qr_code".format(cid, trid))
        server_time_ref = await _fetch_server_time_epoch(
            session, teacher_client.api_url("/d/server-time"), request_ssl)
        deadline = ctx.time.monotonic() + max(0.0, float(max_duration))
        seen: Set[str] = set()
        samples = 0
        _dump("teacher_qr_start", {"source": "teacher_qr", "course_id": cid, "rollcall_id": trid,
                                   "iterations": int(iterations), "interval": float(interval),
                                   "server_time_ref": server_time_ref})
        for iteration in range(max(0, int(iterations))):
            if ctx.time.monotonic() >= deadline:
                break
            status, text, headers = await _fetch_text_with_headers(session, url, request_ssl)
            data = _extract_data_token(text)
            date_header = str(headers.get("Date") or "")
            server_time = _parse_http_date_epoch(date_header)
            _dump("teacher_qr", {"iteration": iteration, "source": "teacher_qr",
                                 "rollcall_id": trid, "course_id": cid, "status": status,
                                 "data": data, "date_header": date_header,
                                 "http_date_epoch": server_time, "wall_epoch": ctx.time.time(),
                                 "body": text})
            samples += 1
            if data:
                seen.add(data)
            await asyncio.sleep(max(0.0, float(interval)))
        _dump("teacher_qr_end", {"source": "teacher_qr", "course_id": cid, "rollcall_id": trid,
                                 "samples": samples, "unique_tokens": len(seen)})
        return {"ok": True, "samples": samples, "unique_tokens": len(seen)}
    except Exception:
        return {"ok": False, "reason": "exception"}


# --------------------------------------------------------------------------- #
# Inspection (re-redacted on read; NEVER surfaces raw secrets)
# --------------------------------------------------------------------------- #
def _research_crawl_dir() -> Any:
    return ctx.BASE_DIR / "state" / "research-crawl"


def summarize_crawl(crawl_dir: Any = None, *, max_files: int = 100) -> Dict[str, Any]:
    """Aggregate the research-crawl jsonl for human/agent inspection: counts per kind,
    unique endpoints, unique harvested tokens, distinct 10-sec time buckets, and leak hits.

    Re-redacts every record on read (raw on disk) via ``sanitize_debug_payload`` — same
    contract as ``ux_tools.read_jsonl_records``. The derived ``qr-tokens.jsonl`` index is
    skipped so tokens are not double-counted. Never raises.
    """
    try:
        from troTHU.debug_capture import sanitize_debug_payload
    except ImportError:  # pragma: no cover - direct script fallback
        from debug_capture import sanitize_debug_payload  # type: ignore
    root = crawl_dir if crawl_dir is not None else _research_crawl_dir()
    root_path = ctx.Path(str(root))
    kind_counts: Dict[str, int] = {}
    endpoints: Set[str] = set()
    tokens: Set[str] = set()
    buckets: Set[str] = set()
    leaks: List[Dict[str, Any]] = []
    total = 0
    if root_path.exists():
        files = [p for p in sorted(root_path.glob("*.jsonl")) if p.name != "qr-tokens.jsonl"][-max_files:]
    else:
        files = []
    for path in files:
        try:
            lines = path.read_text(encoding="utf-8").splitlines()
        except Exception:
            continue
        for line in lines:
            if not line.strip():
                continue
            try:
                record = sanitize_debug_payload(ctx.json.loads(line))
            except Exception:
                continue
            if not isinstance(record, dict):
                continue
            total += 1
            kind = str(record.get("kind") or "unknown")
            kind_counts[kind] = kind_counts.get(kind, 0) + 1
            if record.get("url"):
                endpoints.add(str(record.get("url")))
            row = token_index_row(record)
            if row.get("data"):
                tokens.add(str(row["data"]))
                buckets.add(str(row["data"])[:10])
            finding = leak_scan_record(record)
            if finding.get("is_leak"):
                leaks.append(finding)
    return {
        "crawl_dir": str(root_path), "file_count": len(files), "record_count": total,
        "kinds": dict(sorted(kind_counts.items())),
        "unique_endpoints": len(endpoints),
        "unique_tokens": len(tokens),
        "unique_time_buckets": len(buckets),
        "tokens_per_bucket": (len(tokens) / len(buckets)) if buckets else 0.0,
        "leak_hits": leaks[:50],
    }

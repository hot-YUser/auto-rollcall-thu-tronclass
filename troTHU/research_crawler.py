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
    """Repeatedly hit the QR-relevant endpoints while a QR rollcall is live."""
    try:
        base = _base_url()
        rid = str(rollcall_id or "").strip()
        if not base or not rid:
            return
        request_ssl = ctx.get_ssl_request_setting()
        paths = [
            "/api/rollcall/{}".format(rid),
            "/api/rollcall/{}/lite".format(rid),
            "/api/rollcall/{}/student_rollcalls".format(rid),
            "/api/rollcall/{}/answers".format(rid),
        ]
        for iteration in range(_QR_HAMMER_ITERATIONS):
            for path in paths:
                h_status, h_text, _ = await _fetch_text(session, base + path, request_ssl)
                _dump("qr_hammer", {"iteration": iteration, "url": base + path,
                                    "status": h_status, "body": h_text})
            await asyncio.sleep(_QR_HAMMER_INTERVAL)
    except Exception:
        return

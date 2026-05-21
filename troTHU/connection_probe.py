from __future__ import annotations

import time
from typing import Any, Dict, List
from urllib.parse import urlparse

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore


def __getattr__(name: str):
    return getattr(ctx, name)


def sanitize_probe_url(url: Any) -> str:
    text = ctx.normalize_text(url)
    if not text:
        return ""
    try:
        parsed = urlparse(text)
    except Exception:
        return ""
    if parsed.scheme not in {"http", "https"} or not parsed.netloc:
        return ""
    return "{}://{}{}".format(parsed.scheme, parsed.netloc, parsed.path or "/")


async def run_connection_probe(
    url: str,
    *,
    count: int = 3,
    concurrency: int = 1,
    timeout_seconds: float = 5.0,
) -> Dict[str, Any]:
    safe_url = sanitize_probe_url(url)
    if not safe_url:
        return {"enabled": False, "status": "invalid_url", "url": "", "attempts": []}
    total = min(20, ctx.coerce_positive_int(count, 3, minimum=1))
    workers = min(5, ctx.coerce_positive_int(concurrency, 1, minimum=1))
    timeout = ctx.create_client_timeout(timeout_seconds)
    connector = ctx.create_http_connector()
    results: List[Dict[str, Any]] = []
    started = time.perf_counter()
    semaphore = ctx.asyncio.Semaphore(workers)

    async def one_attempt(index: int) -> None:
        async with semaphore:
            attempt_started = time.perf_counter()
            try:
                async with session.get(safe_url, ssl=ctx.get_ssl_request_setting()) as response:
                    await response.read()
                    elapsed_ms = int(round((time.perf_counter() - attempt_started) * 1000))
                    results.append({"index": index, "status": "ok", "http_status": int(response.status), "elapsed_ms": elapsed_ms})
            except Exception as exc:
                elapsed_ms = int(round((time.perf_counter() - attempt_started) * 1000))
                results.append({"index": index, "status": "failed", "http_status": 0, "elapsed_ms": elapsed_ms, "error": type(exc).__name__})

    async with ctx.aiohttp.ClientSession(timeout=timeout, connector=connector) as session:
        await ctx.asyncio.gather(*(one_attempt(index) for index in range(total)))

    ok_count = sum(1 for item in results if item.get("status") == "ok")
    elapsed_total_ms = int(round((time.perf_counter() - started) * 1000))
    average_ms = int(round(sum(int(item.get("elapsed_ms", 0)) for item in results) / len(results))) if results else 0
    status = "ok" if ok_count == total else "warn" if ok_count else "fail"
    return {
        "enabled": True,
        "status": status,
        "url": safe_url,
        "count": total,
        "concurrency": workers,
        "ok_count": ok_count,
        "average_ms": average_ms,
        "elapsed_total_ms": elapsed_total_ms,
        "attempts": sorted(results, key=lambda item: int(item.get("index", 0))),
    }

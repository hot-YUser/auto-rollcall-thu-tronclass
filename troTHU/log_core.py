"""Structured logging core (stdlib ``logging`` based).

Replaces the hand-rolled ``log()`` removed in the C1 teardown. One logger named
``trothu`` with three tiers selected by ``configure_logging(mode)``:

    normal   -> INFO   : concise per-API-call lines + high-level events, redacted
    debug    -> DEBUG  : full request + response bodies, still redacted
    research -> DEBUG  : full bodies, redaction OFF (raw evidence), crawler enabled

Records land as one JSON object per line in a date-partitioned file
``PATH/YYYY-MM-DD.jsonl`` (new day = new filename, no rename-based rollover, so it
is safe on Windows). The whole file sink is gated by ``CONFIG['config']['enable_log']``.
"""
from __future__ import annotations

import json
import logging
from typing import Any, Dict, Optional

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore

try:  # secret redaction for log fields (attached in normal/debug, bypassed in research)
    from troTHU.debug_capture import sanitize_debug_payload
except ImportError:  # pragma: no cover - direct script fallback
    from debug_capture import sanitize_debug_payload  # type: ignore


def __getattr__(name: str):
    return getattr(ctx, name)


LOGGER_NAME = "trothu"
DEFAULT_MODE = "normal"
_MODE_LEVELS = {"normal": logging.INFO, "debug": logging.DEBUG, "research": logging.DEBUG}


def _file_logging_enabled() -> bool:
    try:
        return bool(ctx.CONFIG.get("config", {}).get("enable_log", True))
    except Exception:
        return True


def _record_to_dict(record: logging.LogRecord, now: Any) -> Dict[str, Any]:
    data: Dict[str, Any] = {
        "ts": now.isoformat(timespec="seconds"),
        "level": record.levelname,
        "mode": getattr(ctx, "LOGGING_MODE", DEFAULT_MODE),
        "event": getattr(record, "event", "") or record.name,
        "status": getattr(record, "status", ""),
        "message": record.getMessage(),
    }
    fields = getattr(record, "fields", None)
    if isinstance(fields, dict):
        for key, value in fields.items():
            if key not in data:
                data[key] = value
    return data


class _JsonlHandler(logging.Handler):
    """Append each record as one JSON line to ``PATH/YYYY-MM-DD.jsonl`` (Windows-safe)."""

    def emit(self, record: logging.LogRecord) -> None:
        try:
            if not _file_logging_enabled():
                return
            now = ctx.current_datetime()
            path = ctx.PATH / "{}.jsonl".format(now.strftime("%Y-%m-%d"))
            path.parent.mkdir(parents=True, exist_ok=True)
            line = json.dumps(_record_to_dict(record, now), ensure_ascii=False, default=str)
            with open(path, "a", encoding="utf-8") as handle:
                handle.write(line + "\n")
        except Exception:  # never let logging break the caller
            self.handleError(record)


class _RedactionFilter(logging.Filter):
    """Redact secrets inside a record's structured ``fields`` before it is written."""

    def filter(self, record: logging.LogRecord) -> bool:
        fields = getattr(record, "fields", None)
        if isinstance(fields, dict):
            record.fields = sanitize_debug_payload(fields)
        return True


def configure_logging(mode: Optional[str] = None) -> logging.Logger:
    """(Re)configure the ``trothu`` logger for a tier and return it. Idempotent."""
    resolved = mode if mode in _MODE_LEVELS else DEFAULT_MODE
    ctx.LOGGING_MODE = resolved
    ctx.CRAWLER_ENABLED = resolved == "research"
    logger = logging.getLogger(LOGGER_NAME)
    logger.setLevel(_MODE_LEVELS[resolved])
    logger.propagate = False
    for handler in list(logger.handlers):
        logger.removeHandler(handler)
    handler = _JsonlHandler()
    handler.setLevel(logging.DEBUG)
    if resolved != "research":
        handler.addFilter(_RedactionFilter())
    logger.addHandler(handler)
    return logger


def get_logger() -> logging.Logger:
    logger = logging.getLogger(LOGGER_NAME)
    if not logger.handlers:
        return configure_logging(getattr(ctx, "LOGGING_MODE", DEFAULT_MODE))
    return logger


def log_event(event: str, *, level: str = "info", status: str = "", message: str = "", **fields: Any) -> None:
    """Emit one structured event. ``fields`` become extra JSONL columns. Never raises."""
    try:
        logger = get_logger()
        levelno = getattr(logging, str(level).upper(), logging.INFO)
        logger.log(levelno, message or event,
                   extra={"event": event, "status": status, "fields": dict(fields)})
    except Exception:
        return


def _http_status_hint(http_status: Any) -> str:
    hints = {
        400: "bad request — check payload shape",
        401: "unauthorized — cookie/session likely expired",
        403: "forbidden — account lacks permission",
        404: "not found — endpoint or resource missing",
        429: "rate limited — back off",
        500: "server error",
        502: "bad gateway",
        503: "service unavailable",
    }
    if isinstance(http_status, int):
        return hints.get(http_status, "unexpected HTTP {}".format(http_status))
    return ""


def log_api_call(method: str, url: str, *, http_status: Any = None, elapsed_ms: Any = None,
                 request: Any = None, response: Any = None, error: Any = None) -> None:
    """Log one HTTP call from the single TronHttpClient hook.

    normal (INFO): method/url/status/elapsed only. debug/research (DEBUG): also the full
    request + response. Failures log at WARNING with an actionable hint. Never raises.
    """
    try:
        logger = get_logger()
        failed = error is not None or (isinstance(http_status, int) and http_status >= 400)
        fields: Dict[str, Any] = {"method": method, "url": url,
                                  "http_status": http_status, "elapsed_ms": elapsed_ms}
        if failed:
            fields["hint"] = _http_status_hint(http_status)
            if error is not None:
                fields["error"] = ctx.normalize_text(error) or str(error)
        if logger.isEnabledFor(logging.DEBUG):
            if request is not None:
                fields["request"] = request
            if response is not None:
                fields["response"] = response
        logger.log(logging.WARNING if failed else logging.INFO, "api_call",
                   extra={"event": "api_call", "status": "error" if failed else "ok", "fields": fields})
    except Exception:
        return

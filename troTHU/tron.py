"""Legacy-compatible entrypoint for the TronClass automation CLI."""

from __future__ import annotations

import sys as _sys

try:  # pragma: no cover - package import path
    from troTHU import runtime_context as _ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as _ctx  # type: ignore


if __name__ == "__main__":  # pragma: no cover - CLI entrypoint
    raise SystemExit(_ctx.main())


_sys.modules[__name__] = _ctx

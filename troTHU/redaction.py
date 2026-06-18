"""Single audited recursive-redaction traversal.

Several security scrubbers across the codebase (status snapshots, research
captures, webview/qr previews) all do the same thing: walk a JSON-ish structure
and, per dict key, either redact / drop / recurse, while scrubbing string leaves.
Keeping that traversal in ONE tested place means the "could this leak a secret"
question has a single answer to audit. Each call site declares its own policy via
`classify` + `leaf`; the per-surface key sets and string-leaf rules stay where
they are (they are intentionally different).
"""

from __future__ import annotations

from typing import Any, Callable, Mapping

REDACT = "redact"
DROP = "drop"
KEEP = "keep"
REDACTED = "[redacted]"


def redact_structure(
    value: Any,
    *,
    classify: Callable[[str], str],
    leaf: Callable[[Any], Any],
) -> Any:
    """Recurse a dict/list/tuple structure. ``classify(key_text)`` decides each
    mapping key: ``REDACT`` -> ``"[redacted]"``, ``DROP`` -> omit the key,
    ``KEEP`` -> recurse the value. Every non-container leaf goes through
    ``leaf()``. Tuples become lists (matching the JSON-output contract of the
    callers)."""
    if isinstance(value, Mapping):
        out = {}
        for key, item in value.items():
            key_text = str(key)
            action = classify(key_text)
            if action == DROP:
                continue
            if action == REDACT:
                out[key_text] = REDACTED
            else:
                out[key_text] = redact_structure(item, classify=classify, leaf=leaf)
        return out
    if isinstance(value, (list, tuple)):
        return [redact_structure(item, classify=classify, leaf=leaf) for item in value]
    return leaf(value)

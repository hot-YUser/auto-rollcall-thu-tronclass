"""Console output model — the in-place monitor status line + permanent event lines.

Split out of the old ``logging_runtime`` in the C5 refactor. This is UI, NOT logging:
two channels share stdout —

  * Event lines  -> scroll upward, permanent (login, rollcall hits, errors).
  * Status line  -> a single line redrawn in place once per second, showing the live
                    clock plus monitor/standby context.

Interactive (TTY) consoles get the in-place status line and timestamped event lines.
Non-interactive runs (CI, redirected output, ``--no-input`` schedulers) fall back to
plain, append-only lines so logs stay clean and byte-stable.
"""
from __future__ import annotations

import contextlib
import shutil

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore


def __getattr__(name: str):
    return getattr(ctx, name)


def console_is_interactive() -> bool:
    """Whether stdout is an interactive terminal that supports in-place redraw.

    ``ctx.CONSOLE_INTERACTIVE`` acts as an explicit override (set it to a bool in
    tests); when it is ``None`` the result is probed fresh from ``isatty()`` so a
    redirected stream is never treated as interactive.
    """
    override = ctx.CONSOLE_INTERACTIVE
    if override is not None:
        return bool(override)
    try:
        return bool(ctx.sys.stdout.isatty())
    except Exception:
        return False


def _terminal_width() -> int:
    try:
        return max(20, int(shutil.get_terminal_size((80, 24)).columns))
    except Exception:
        return 80


def _write_console_line(text: str) -> None:
    line = str(text or "").strip()
    if not line:
        return
    ctx.sys.stdout.write(line + '\n')
    ctx.sys.stdout.flush()


def flush_console_output() -> None:
    ctx.sys.stdout.flush()


def _timestamped(text: str) -> str:
    """Prefix each interactive event line with ``[HH:MM:SS]``."""
    try:
        stamp = ctx.current_datetime().strftime('%H:%M:%S')
    except Exception:
        return text
    prefix = '[{}] '.format(stamp)
    return '\n'.join(prefix + line if line else prefix.rstrip() for line in text.splitlines())


def clear_status_line() -> None:
    """Erase the in-place status line so an event line can be printed cleanly."""
    width = ctx.STATUS_LINE_WIDTH
    if not width and console_is_interactive():
        width = _terminal_width()
    if width:
        ctx.sys.stdout.write('\r' + ' ' * width + '\r')
        ctx.sys.stdout.flush()
        ctx.STATUS_LINE_WIDTH = 0


def render_status_line() -> None:
    """Redraw the single in-place monitor status line (interactive only)."""
    if not console_is_interactive() or ctx.STATUS_LINE_PAUSE_DEPTH > 0:
        return
    try:
        line = ctx.build_monitor_status_line(ctx.MONITOR_STATUS, ctx.current_datetime())
        line = ctx.truncate_to_width(line, max(1, _terminal_width() - 1))
        new_width = ctx.display_width(line)
        pad = max(0, ctx.STATUS_LINE_WIDTH - new_width)
        ctx.sys.stdout.write('\r' + line + ' ' * pad)
        ctx.sys.stdout.flush()
        ctx.STATUS_LINE_WIDTH = new_width
    except Exception:
        # Never let cosmetics break the monitor.
        return


def update_monitor_status(*, phase=None, check_count=None, detail=None,
                          rollcall_status=None, next_switch_at=Ellipsis, teacher_state=None,
                          target_label=None, redraw: bool = True) -> None:
    """Update the live status snapshot and (interactively) redraw the line.

    ``next_switch_at`` uses an ``Ellipsis`` sentinel so callers can explicitly
    set it to ``None`` (no scheduled transition) versus leaving it unchanged.
    """
    status = ctx.MONITOR_STATUS
    if phase is not None:
        status['phase'] = phase
    if check_count is not None:
        status['check_count'] = check_count
    if detail is not None:
        status['detail'] = detail
    if rollcall_status is not None:
        status['rollcall_status'] = rollcall_status
    if next_switch_at is not Ellipsis:
        status['next_switch_at'] = next_switch_at
    if teacher_state is not None:
        status['teacher_state'] = teacher_state
    if target_label is not None:
        status['target_label'] = target_label
    if redraw:
        render_status_line()


def reset_monitor_status() -> None:
    """Restore the status snapshot to its initial values."""
    ctx.MONITOR_STATUS.update({
        'phase': 'logging_in',
        'check_count': 0,
        'detail': '',
        'rollcall_status': '',
        'next_switch_at': None,
        'teacher_state': 'off',
        'target_label': '',
    })
    ctx.STATUS_LINE_WIDTH = 0


@contextlib.contextmanager
def pause_status_line():
    """Suspend in-place status drawing around a blocking prompt / external UI."""
    ctx.STATUS_LINE_PAUSE_DEPTH += 1
    try:
        clear_status_line()
    except Exception:
        pass
    try:
        yield
    finally:
        ctx.STATUS_LINE_PAUSE_DEPTH = max(0, ctx.STATUS_LINE_PAUSE_DEPTH - 1)
        try:
            render_status_line()
        except Exception:
            pass


def log_print(msg: ctx.Any) -> None:
    """Print a permanent event line.

    Non-interactive output is byte-identical to the historical behaviour (plain
    line, no timestamp). Interactive output clears the live status line, prints a
    timestamped event above it, then redraws the status line.
    """
    text = str(msg).strip()
    if not text:
        return
    if not console_is_interactive() or ctx.STATUS_LINE_PAUSE_DEPTH > 0:
        if console_is_interactive():
            _write_console_line(_timestamped(text))
        else:
            _write_console_line(text)
        return
    clear_status_line()
    _write_console_line(_timestamped(text))
    render_status_line()


def status_print(msg: ctx.Any) -> None:
    """Report transient monitor status.

    Non-interactive: appends ``[監控] ...`` lines exactly as before. Interactive:
    folds the message into the live status line's detail slot (no scrolling).
    """
    ctx.LAST_STATUS = str(msg).strip()
    if not ctx.LAST_STATUS:
        return
    if not console_is_interactive():
        _write_console_line('[監控] {}'.format(ctx.LAST_STATUS))
        return
    ctx.MONITOR_STATUS['detail'] = ctx.LAST_STATUS
    render_status_line()

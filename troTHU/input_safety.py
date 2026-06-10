"""Field-aware input cleanup for human-facing CLI and monitor console paths."""

from __future__ import annotations

import contextlib
import re
import sys
from dataclasses import dataclass, field
from typing import Any, Dict, List, Mapping


SENSITIVE_FIELD_TYPES = {"password", "token", "secret"}
QR_FIELD_TYPES = {"qr_payload", "qr"}
COLLAPSE_SPACE_RE = re.compile(r"\s+")
TIME_RANGE_RE = re.compile(r"\b\d{1,2}[:：]\d{2}\b")


@dataclass(frozen=True)
class InputSanitizationResult:
    value: str
    changed: bool = False
    warnings: tuple[str, ...] = field(default_factory=tuple)
    valid: bool = True
    reason: str = ""

    def to_dict(self) -> Dict[str, Any]:
        return {
            "value": "[redacted]" if self.reason == "sensitive" else self.value,
            "changed": self.changed,
            "warnings": list(self.warnings),
            "valid": self.valid,
            "reason": self.reason,
        }


def _warning(field: str, message: str) -> str:
    return "{}: {}".format(field, message)


def _collapse_spaces(value: str) -> str:
    return COLLAPSE_SPACE_RE.sub(" ", value).strip()


def _normalize_field_type(field_type: str) -> str:
    return str(field_type or "text").strip().lower().replace("-", "_")


def sanitize_input_field(value: Any, *, field_type: str = "text", field_name: str = "") -> InputSanitizationResult:
    kind = _normalize_field_type(field_type)
    label = field_name or kind
    original = "" if value is None else str(value)
    warnings: List[str] = []

    if kind in QR_FIELD_TYPES:
        cleaned = original.strip()
        if cleaned != original:
            warnings.append(_warning(label, "已移除前後空白；QR 內容內部未被修改。"))
        return InputSanitizationResult(cleaned, cleaned != original, tuple(warnings), bool(cleaned), "empty" if not cleaned else "")

    if kind in SENSITIVE_FIELD_TYPES:
        cleaned = original.strip()
        if cleaned != original:
            warnings.append(_warning(label, "已移除前後空白；內容已遮蔽，不會記錄原值。"))
        return InputSanitizationResult(cleaned, cleaned != original, tuple(warnings), bool(cleaned), "sensitive" if cleaned else "empty")

    if kind in {"student_id", "profile", "profile_name", "provider", "env", "env_var", "channel_id", "host", "port"}:
        cleaned = _collapse_spaces(original)
    elif kind in {"time_range", "schedule"}:
        text = original.replace("：", ":")
        matches = TIME_RANGE_RE.findall(text)
        cleaned = " - ".join(item.replace("：", ":") for item in matches[:2]) if len(matches) >= 2 else _collapse_spaces(text)
    else:
        cleaned = _collapse_spaces(original)

    if cleaned != original:
        warnings.append(_warning(label, "已自動修正多餘空白。"))

    valid = True
    reason = ""
    if kind in {"profile", "profile_name"} and not cleaned:
        valid = False
        reason = "empty_profile"
        warnings.append(_warning(label, "profile 名稱不可為空。"))
    if kind == "port":
        try:
            port = int(cleaned)
            valid = 1 <= port <= 65535
        except (TypeError, ValueError):
            valid = False
        if not valid:
            reason = "invalid_port"
            warnings.append(_warning(label, "port 必須是 1 到 65535 的整數。"))
    if kind == "provider" and cleaned:
        cleaned = cleaned.lower()

    return InputSanitizationResult(cleaned, cleaned != original, tuple(warnings), valid, reason)


def sanitize_mapping_fields(value: Mapping[str, Any], field_types: Mapping[str, str]) -> tuple[Dict[str, Any], List[str]]:
    sanitized: Dict[str, Any] = dict(value)
    warnings: List[str] = []
    for key, field_type in field_types.items():
        if key not in sanitized:
            continue
        result = sanitize_input_field(sanitized.get(key), field_type=field_type, field_name=key)
        sanitized[key] = result.value
        warnings.extend(result.warnings)
    return sanitized, warnings


def sanitize_config_values(config: Dict[str, Any]) -> List[str]:
    """Mutate common config string fields into safer human-entered values."""
    warnings: List[str] = []
    if not isinstance(config, dict):
        return warnings

    account = config.get("account")
    if isinstance(account, dict):
        sanitized, field_warnings = sanitize_mapping_fields(
            account,
            {"user": "student_id", "passwd": "password"},
        )
        account.update(sanitized)
        warnings.extend(field_warnings)

    accounts = config.get("accounts")
    profiles = accounts.get("profiles") if isinstance(accounts, dict) else {}
    if isinstance(profiles, dict):
        for name, profile in list(profiles.items()):
            safe_name = sanitize_input_field(name, field_type="profile", field_name="accounts.profile").value
            if safe_name and safe_name != name:
                profiles[safe_name] = profiles.pop(name)
                warnings.append("accounts.profile: 已修正 profile 名稱空白。")
            if isinstance(profile, dict):
                sanitized, field_warnings = sanitize_mapping_fields(
                    profile,
                    {"user": "student_id", "passwd": "password", "label": "text"},
                )
                profile.update(sanitized)
                warnings.extend(field_warnings)
        if isinstance(accounts.get("current"), str):
            result = sanitize_input_field(accounts.get("current"), field_type="profile", field_name="accounts.current")
            accounts["current"] = result.value or "default"
            warnings.extend(result.warnings)

    provider = config.get("provider")
    if isinstance(provider, dict):
        for key in ("current", "requested"):
            if key in provider:
                result = sanitize_input_field(provider.get(key), field_type="provider", field_name="provider.{}".format(key))
                provider[key] = result.value
                warnings.extend(result.warnings)

    local_ui = config.get("local_ui")
    if isinstance(local_ui, dict):
        sanitized, field_warnings = sanitize_mapping_fields(local_ui, {"host": "host", "port": "port"})
        local_ui.update(sanitized)
        warnings.extend(field_warnings)

    integrations = config.get("integrations")
    if isinstance(integrations, dict):
        for adapter, keys in {
            "discord": {"token_env": "env_var", "channel_env": "env_var", "public_key_env": "env_var", "application_id_env": "env_var", "guild_id_env": "env_var"},
            "line": {"token_env": "env_var", "secret_env": "env_var"},
            "telegram": {"token_env": "env_var", "chat_env": "env_var"},
        }.items():
            item = integrations.get(adapter)
            if isinstance(item, dict):
                sanitized, field_warnings = sanitize_mapping_fields(item, keys)
                item.update(sanitized)
                warnings.extend(field_warnings)

    return warnings


def contains_sensitive_text(value: Any) -> bool:
    text = str(value or "").lower()
    return any(part in text for part in ("password", "passwd", "token", "secret", "cookie", "session", "payload"))


def _fallback_password_input(prompt: str) -> str:
    try:
        return input(prompt).strip()
    except (EOFError, KeyboardInterrupt):
        return ""


def _optional_status_line_pause():
    try:
        import troTHU.runtime_context as ctx  # type: ignore
    except Exception:
        try:
            import runtime_context as ctx  # type: ignore
        except Exception:
            return contextlib.nullcontext()
    try:
        return ctx.pause_status_line()
    except Exception:
        return contextlib.nullcontext()


def masked_password_input(prompt: str = "輸入密碼 > ") -> str:
    with _optional_status_line_pause():
        return _masked_password_input(prompt)


def _masked_password_input(prompt: str = "輸入密碼 > ") -> str:
    """Read a password with a best-effort local mask without using getpass."""
    prompt_text = str(prompt or "輸入密碼 > ")
    if sys.platform.startswith("win"):
        try:
            import msvcrt  # type: ignore

            sys.stdout.write(prompt_text)
            sys.stdout.flush()
            chars: List[str] = []
            while True:
                ch = msvcrt.getwch()
                if ch in ("\r", "\n"):
                    sys.stdout.write("\n")
                    sys.stdout.flush()
                    return "".join(chars).strip()
                if ch == "\x03":
                    raise KeyboardInterrupt
                if ch in ("\b", "\x7f"):
                    if chars:
                        chars.pop()
                        sys.stdout.write("\b \b")
                        sys.stdout.flush()
                    continue
                if ch in ("\x00", "\xe0"):
                    msvcrt.getwch()
                    continue
                if ch and ch.isprintable():
                    chars.append(ch)
                    sys.stdout.write("*")
                    sys.stdout.flush()
        except (EOFError, KeyboardInterrupt):
            sys.stdout.write("\n")
            sys.stdout.flush()
            return ""
        except Exception:
            return _fallback_password_input(prompt_text)

    try:
        import termios
        import tty

        stdin = sys.stdin
        fd = stdin.fileno()
        old_settings = termios.tcgetattr(fd)
        sys.stdout.write(prompt_text)
        sys.stdout.flush()
        chars = []
        try:
            tty.setraw(fd)
            while True:
                ch = stdin.read(1)
                if ch in ("\r", "\n"):
                    sys.stdout.write("\n")
                    sys.stdout.flush()
                    return "".join(chars).strip()
                if ch == "\x03":
                    raise KeyboardInterrupt
                if ch in ("\b", "\x7f"):
                    if chars:
                        chars.pop()
                        sys.stdout.write("\b \b")
                        sys.stdout.flush()
                    continue
                if ch and ch.isprintable():
                    chars.append(ch)
                    sys.stdout.write("*")
                    sys.stdout.flush()
        finally:
            termios.tcsetattr(fd, termios.TCSADRAIN, old_settings)
    except (EOFError, KeyboardInterrupt):
        sys.stdout.write("\n")
        sys.stdout.flush()
        return ""
    except Exception:
        return _fallback_password_input(prompt_text)

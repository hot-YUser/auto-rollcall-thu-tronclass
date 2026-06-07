"""Human-first config format for daily account/group editing."""

from __future__ import annotations

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore


PLACEHOLDER_PREFIXES = ("(", "（")
SIMPLE_WEEKDAY_TO_INTERNAL = {0: 6, 1: 0, 2: 1, 3: 2, 4: 3, 5: 4, 6: 5}
INTERNAL_WEEKDAY_TO_SIMPLE = {value: key for key, value in SIMPLE_WEEKDAY_TO_INTERNAL.items()}
VISIBLE_DEFAULT_SCHOOLS = ("THU", "TKU", "TRONCLASS")


def _strip_value(value: ctx.Any) -> str:
    text = ctx.normalize_text(value)
    if not text:
        return ""
    if text.startswith(PLACEHOLDER_PREFIXES) and text.endswith((")", "）")):
        return ""
    return text


def _parse_key_value(line: str) -> ctx.Tuple[str, str] | None:
    if ":" not in line:
        return None
    key, value = line.split(":", 1)
    if "//" in value:
        value = value.split("//", 1)[0]
    return (ctx.normalize_text(key).lower(), _strip_value(value))


def _canonical_school(value: ctx.Any) -> str:
    school = _strip_value(value).lower()
    aliases = {
        "東海": "thu",
        "東海大學": "thu",
        "thu": "thu",
        "淡江": "tku",
        "淡江大學": "tku",
        "tku": "tku",
        "輔仁": "fju",
        "輔仁大學": "fju",
        "fju": "fju",
        "tc": "tronclass",
        "tron": "tronclass",
        "tronclass": "tronclass",
        "tronclass.com": "tronclass",
        "tronclass.com.tw": "tronclass",
        "www.tronclass.com.tw": "tronclass",
        "官方": "tronclass",
        "官方站": "tronclass",
    }
    return aliases.get(school, school or "thu")


def _profile_school(profile: ctx.Mapping[str, ctx.Any], default: str = "thu") -> str:
    for key in ("school", "label"):
        school = _canonical_school(profile.get(key))
        if school in {"thu", "tku", "fju", "tronclass"}:
            return school
    return default


def _usable_accounts(simple: ctx.Mapping[str, ctx.Any]) -> ctx.List[ctx.Dict[str, str]]:
    accounts: ctx.List[ctx.Dict[str, str]] = []
    seen: set[str] = set()
    for item in simple.get("accounts", []) or []:
        if not isinstance(item, dict):
            continue
        user = _strip_value(item.get("user"))
        if not user:
            continue
        key = user.lower()
        if key in seen:
            continue
        seen.add(key)
        accounts.append(
            {
                "user": user,
                "passwd": _strip_value(item.get("passwd")),
                "school": _canonical_school(item.get("school")),
            }
        )
    return accounts


def infer_single_account_now(simple: ctx.Mapping[str, ctx.Any]) -> str:
    """Return the only configured account user when now is blank and unambiguous."""
    now = _strip_value(simple.get("now"))
    if now:
        return now
    accounts = _usable_accounts(simple)
    if len(accounts) == 1:
        return accounts[0]["user"]
    return ""


def is_simple_config_text(text: str) -> bool:
    lowered = (text or "").lower()
    return "now:" in lowered or "\ngroup:" in lowered or "\ngrop:" in lowered


def parse_simple_config_text(text: str) -> ctx.Dict[str, ctx.Any]:
    simple: ctx.Dict[str, ctx.Any] = {
        "now": "",
        "accounts": [],
        "teacher": {"user": "", "passwd": "", "school": "tronclass", "course": ""},
        "groups": [],
        "operating": {},
        "warnings": [],
    }
    section = ""
    current_account: ctx.Dict[str, str] | None = None
    current_group: ctx.Dict[str, ctx.Any] | None = None
    current_day: int | None = None
    pending_range_day: int | None = None

    def finish_account() -> None:
        nonlocal current_account
        if current_account is None:
            return
        if any(current_account.get(key) for key in ("user", "passwd", "school")):
            current_account["school"] = _canonical_school(current_account.get("school"))
            simple["accounts"].append(current_account)
        current_account = None

    def finish_group() -> None:
        nonlocal current_group
        if current_group is None:
            return
        if current_group.get("class") or current_group.get("users"):
            current_group["school"] = _canonical_school(current_group.get("school"))
            current_group["users"] = [user for user in current_group.get("users", []) if user]
            simple["groups"].append(current_group)
        current_group = None

    for raw_line in (text or "").splitlines():
        line = raw_line.strip()
        if not line:
            continue
        if section == "operating" and line.startswith("-") and pending_range_day is not None:
            value = _strip_value(line[1:].strip())
            if "//" in value:
                value = _strip_value(value.split("//", 1)[0])
            entry = simple["operating"].setdefault(pending_range_day, {"enable": True, "range": []})
            values = list(entry.get("range", []))
            values.append(value or "00:00")
            entry["range"] = values
            continue
        parsed = _parse_key_value(line)
        if parsed is None:
            continue
        key, value = parsed
        if key in {"account", "accounts"} and not value:
            finish_group()
            finish_account()
            section = "account"
            current_day = None
            pending_range_day = None
            continue
        if key == "teacher" and not value:
            finish_group()
            finish_account()
            section = "teacher"
            current_day = None
            pending_range_day = None
            continue
        if key in {"group", "groups", "grop"} and not value:
            finish_account()
            finish_group()
            section = "group"
            current_day = None
            pending_range_day = None
            continue
        if key == "operating" and not value:
            finish_account()
            finish_group()
            section = "operating"
            current_day = None
            pending_range_day = None
            continue
        if key == "now":
            simple["now"] = value
            continue
        if section == "account":
            if key == "user":
                if current_account is not None and any(current_account.get(item) for item in ("user", "passwd", "school")):
                    finish_account()
                current_account = {"user": value, "passwd": "", "school": "thu"}
                continue
            if current_account is None:
                current_account = {"user": "", "passwd": "", "school": "thu"}
            if key in {"passwd", "password"}:
                current_account["passwd"] = value
            elif key == "school":
                current_account["school"] = _canonical_school(value)
            continue
        if section == "teacher":
            teacher = simple.setdefault("teacher", {"user": "", "passwd": "", "school": "tronclass", "course": ""})
            if not isinstance(teacher, dict):
                teacher = {"user": "", "passwd": "", "school": "tronclass", "course": ""}
                simple["teacher"] = teacher
            if key == "user":
                teacher["user"] = value
            elif key in {"passwd", "password"}:
                teacher["passwd"] = value
            elif key == "school":
                teacher["school"] = _canonical_school(value)
            elif key in {"course", "course_id", "courseid"}:
                teacher["course"] = value
            continue
        if section == "group":
            if key == "class":
                finish_group()
                current_group = {"class": value, "school": "thu", "users": []}
                continue
            if current_group is None:
                current_group = {"class": "", "school": "thu", "users": []}
            if key == "school":
                current_group["school"] = _canonical_school(value)
            elif key == "user":
                current_group.setdefault("users", []).append(value)
            continue
        if section == "operating":
            if key.isdigit():
                day = int(key)
                if 0 <= day <= 6:
                    current_day = day
                    pending_range_day = None
                    simple["operating"].setdefault(day, {"enable": True, "range": ["00:00", "00:00"]})
                continue
            if current_day is None:
                continue
            if key == "enable":
                simple["operating"].setdefault(current_day, {"enable": True, "range": ["00:00", "00:00"]})
                simple["operating"][current_day]["enable"] = ctx.coerce_bool(value, True)
            elif key == "range":
                pending_range_day = current_day
                simple["operating"].setdefault(current_day, {"enable": True, "range": []})
                if value:
                    simple["operating"][current_day]["range"] = ctx.normalize_schedule_range(value, ["00:00", "00:00"])
                else:
                    simple["operating"][current_day]["range"] = []
            elif key == "-" and pending_range_day is not None:
                entry = simple["operating"].setdefault(pending_range_day, {"enable": True, "range": []})
                values = list(entry.get("range", []))
                values.append(value or "00:00")
                entry["range"] = values
            continue

    finish_account()
    finish_group()
    for day in range(7):
        entry = simple["operating"].setdefault(day, {"enable": True, "range": ["00:00", "00:00"]})
        ranges = ctx.normalize_schedule_ranges(entry.get("ranges", entry.get("range")), [["00:00", "00:00"]])
        entry["range"] = ranges[0]
        entry["ranges"] = ranges
    return simple


def _simple_target_account(simple: ctx.Mapping[str, ctx.Any]) -> ctx.Dict[str, str]:
    now = _strip_value(simple.get("now"))
    accounts = [item for item in simple.get("accounts", []) if isinstance(item, dict)]
    usable_accounts = _usable_accounts(simple)
    if not now:
        if len(usable_accounts) == 1:
            return dict(usable_accounts[0])
        return {"user": "", "passwd": "", "school": _canonical_school("")}
    if now.lower().startswith("class "):
        class_name = _strip_value(now[6:])
        for group in simple.get("groups", []):
            if isinstance(group, dict) and _strip_value(group.get("class")).lower() == class_name.lower():
                users = [user for user in group.get("users", []) if user]
                for user in users:
                    for account in accounts:
                        if _strip_value(account.get("user")).lower() == _strip_value(user).lower():
                            return {
                                "user": _strip_value(account.get("user")),
                                "passwd": _strip_value(account.get("passwd")),
                                "school": _canonical_school(account.get("school") or group.get("school")),
                            }
        return {"user": "", "passwd": "", "school": _canonical_school("")}
    for account in accounts:
        if _strip_value(account.get("user")).lower() == now.lower():
            return {
                "user": _strip_value(account.get("user")),
                "passwd": _strip_value(account.get("passwd")),
                "school": _canonical_school(account.get("school")),
            }
    return {"user": "", "passwd": "", "school": _canonical_school("")}


def merge_simple_and_advanced_config(simple: ctx.Mapping[str, ctx.Any], advanced: ctx.Mapping[str, ctx.Any] | None = None) -> ctx.Dict[str, ctx.Any]:
    config = ctx.copy.deepcopy(dict(advanced or {}))
    account = _simple_target_account(simple)
    config["account"] = {"user": account["user"], "passwd": account["passwd"]}
    teacher_source = simple.get("teacher") if isinstance(simple.get("teacher"), dict) else {}
    config["teacher"] = {
        "user": _strip_value(teacher_source.get("user")),
        "passwd": _strip_value(teacher_source.get("passwd")),
        "school": _canonical_school(teacher_source.get("school") or "tronclass"),
        "course": _strip_value(teacher_source.get("course")),
    }
    profiles: ctx.Dict[str, ctx.Any] = {}
    for item in simple.get("accounts", []) or []:
        if not isinstance(item, dict):
            continue
        user = _strip_value(item.get("user"))
        if not user:
            continue
        profiles[user] = {
            "user": user,
            "passwd": _strip_value(item.get("passwd")),
            "label": _canonical_school(item.get("school")).upper(),
            "school": _canonical_school(item.get("school")),
        }
    current = account["user"] if account["user"] in profiles else ""
    if not profiles:
        profiles["default"] = {"user": "", "passwd": "", "label": "", "school": "thu"}
        current = "default"
    elif not current:
        profiles.setdefault("unset", {"user": "", "passwd": "", "label": "", "school": account["school"] or "thu"})
        current = "unset"
    config["accounts"] = {"current": current, "profiles": profiles}
    provider = dict(config.get("provider", {})) if isinstance(config.get("provider"), dict) else {}
    provider["current"] = account["school"] or provider.get("current") or "thu"
    config["provider"] = provider
    operating: ctx.Dict[int, ctx.Any] = {}
    for simple_day, entry in (simple.get("operating") or {}).items():
        try:
            simple_day_int = int(simple_day)
        except (TypeError, ValueError):
            continue
        internal_day = SIMPLE_WEEKDAY_TO_INTERNAL.get(simple_day_int)
        if internal_day is None:
            continue
        operating[internal_day] = {
            "enable": ctx.coerce_bool(entry.get("enable", True), True) if isinstance(entry, dict) else True,
            "range": ctx.normalize_schedule_range(
                entry.get("ranges", entry.get("range")) if isinstance(entry, dict) else None,
                ["00:00", "00:00"],
            ),
            "ranges": ctx.normalize_schedule_ranges(
                entry.get("ranges", entry.get("range")) if isinstance(entry, dict) else None,
                [["00:00", "00:00"]],
            ),
        }
    config["operating"] = operating
    config["_simple"] = {
        "now": _strip_value(simple.get("now")),
        "accounts": ctx.copy.deepcopy(simple.get("accounts", [])),
        "teacher": ctx.copy.deepcopy(config["teacher"]),
        "groups": ctx.copy.deepcopy(simple.get("groups", [])),
    }
    return config


def split_normalized_config(config: ctx.Mapping[str, ctx.Any]) -> ctx.Tuple[ctx.Dict[str, ctx.Any], ctx.Dict[str, ctx.Any]]:
    normalized = ctx.normalize_config(ctx.copy.deepcopy(dict(config)))
    simple_meta = normalized.get("_simple") if isinstance(normalized.get("_simple"), dict) else {}
    accounts = simple_meta.get("accounts") if isinstance(simple_meta.get("accounts"), list) else []
    teacher = simple_meta.get("teacher") if isinstance(simple_meta.get("teacher"), dict) else {}
    groups = simple_meta.get("groups") if isinstance(simple_meta.get("groups"), list) else []
    accounts = [ctx.copy.deepcopy(item) for item in accounts if isinstance(item, dict)]
    account_index = {_strip_value(item.get("user")).lower(): item for item in accounts if _strip_value(item.get("user"))}
    for profile in normalized.get("accounts", {}).get("profiles", {}).values():
        if not isinstance(profile, dict):
            continue
        user = _strip_value(profile.get("user"))
        if not user:
            continue
        entry = account_index.get(user.lower())
        if entry is None:
            entry = {"user": user, "passwd": "", "school": _profile_school(profile)}
            accounts.append(entry)
            account_index[user.lower()] = entry
        entry["user"] = user
        if _strip_value(profile.get("passwd")):
            entry["passwd"] = _strip_value(profile.get("passwd"))
        if not _strip_value(entry.get("school")):
            entry["school"] = _profile_school(profile)
    now = _strip_value(simple_meta.get("now")) or _strip_value(normalized.get("account", {}).get("user"))
    simple_operating: ctx.Dict[int, ctx.Any] = {}
    for internal_day, entry in normalized.get("operating", {}).items():
        try:
            internal_day_int = int(internal_day)
        except (TypeError, ValueError):
            continue
        simple_day = INTERNAL_WEEKDAY_TO_SIMPLE.get(internal_day_int)
        if simple_day is None:
            continue
        simple_operating[simple_day] = ctx.copy.deepcopy(entry)
    normalized_teacher = normalized.get("teacher") if isinstance(normalized.get("teacher"), dict) else {}
    teacher_user = _strip_value(teacher.get("user")) or _strip_value(normalized_teacher.get("user"))
    teacher_passwd = _strip_value(teacher.get("passwd")) or _strip_value(normalized_teacher.get("passwd"))
    teacher_school = _canonical_school(_strip_value(teacher.get("school")) or normalized_teacher.get("school") or "tronclass")
    teacher_course = _strip_value(teacher.get("course")) or _strip_value(normalized_teacher.get("course"))
    simple_teacher = {
        "user": teacher_user,
        "passwd": teacher_passwd,
        "school": teacher_school,
        "course": teacher_course,
    }
    simple = {"now": now, "accounts": accounts, "teacher": simple_teacher, "groups": groups, "operating": simple_operating}
    advanced = {}
    for key, value in normalized.items():
        if key in {"account", "accounts", "teacher", "operating", "_simple"}:
            continue
        if key in ctx.DEFAULT_CONFIG and value == ctx.DEFAULT_CONFIG.get(key):
            continue
        advanced[key] = ctx.copy.deepcopy(value)
    provider = advanced.get("provider")
    if isinstance(provider, dict):
        provider.pop("current", None)
        provider.pop("requested", None)
        provider.pop("fallback_reason", None)
        default_provider = ctx.copy.deepcopy(ctx.DEFAULT_CONFIG.get("provider", {}))
        if isinstance(default_provider, dict):
            default_provider.pop("current", None)
        if not provider or provider == default_provider:
            advanced.pop("provider", None)
    return simple, advanced


def render_simple_config(config: ctx.Mapping[str, ctx.Any] | None = None) -> str:
    simple = ctx.copy.deepcopy(dict(config or {}))
    accounts = list(simple.get("accounts") or [])
    while len(accounts) < len(VISIBLE_DEFAULT_SCHOOLS):
        index = len(accounts) + 1
        accounts.append({"user": "", "passwd": "", "school": VISIBLE_DEFAULT_SCHOOLS[index - 1]})
    groups = list(simple.get("groups") or [])
    while len(groups) < 2:
        groups.append({"class": "A" if not groups else "B", "school": "THU", "users": [""]})
    lines = ["now:{}".format(simple.get("now") or "(填帳號或 class A)"), "", "account:"]
    for index, account in enumerate(accounts, start=1):
        lines.extend(
            [
                "  user:{}".format(account.get("user") or "(帳號{})".format(index)),
                "  passwd:{}".format(account.get("passwd") or "(密碼{})".format(index)),
                "  school:{}".format((_canonical_school(account.get("school")) or "thu").upper()),
                "",
            ]
        )
    teacher = simple.get("teacher") if isinstance(simple.get("teacher"), dict) else {}
    lines.extend(
        [
            "teacher:",
            "  user:{}".format(teacher.get("user") or "(教師帳號)"),
            "  passwd:{}".format(teacher.get("passwd") or "(教師密碼)"),
            "  school:{}".format((_canonical_school(teacher.get("school") or "tronclass") or "tronclass").upper()),
            "  course:{}".format(teacher.get("course") or "(留空自動偵測)"),
            "",
        ]
    )
    lines.append("group:")
    for group in groups:
        class_name = group.get("class") or ("A" if len(lines) == 0 else "B")
        lines.append("  class:{}".format(class_name))
        lines.append("    school:{}".format((_canonical_school(group.get("school")) or "thu").upper()))
        users = list(group.get("users") or [""])
        if not users:
            users = [""]
        for user in users:
            lines.append("    user:{}".format(user or "(帳號)"))
        lines.append("")
    lines.append("operating:")
    operating = simple.get("operating") or {}
    for day in range(7):
        entry = operating.get(day, {"enable": True, "range": ["00:00", "00:00"]})
        enabled = ctx.coerce_bool(entry.get("enable", True), True) if isinstance(entry, dict) else True
        ranges = ctx.normalize_schedule_ranges(
            entry.get("ranges", entry.get("range")) if isinstance(entry, dict) else None,
            [["00:00", "00:00"]],
        )
        lines.extend(
            [
                "  {}:".format(day),
                "    enable:{}".format("true" if enabled else "false"),
                "    range:",
            ]
        )
        for start, end in ranges:
            lines.append("    - {} - {}".format(start, end))
    return "\n".join(lines).rstrip() + "\n"

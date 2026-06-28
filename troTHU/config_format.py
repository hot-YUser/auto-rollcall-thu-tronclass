"""Custom text-based config format for human editing."""

from __future__ import annotations

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore

try:  # Python 3.11+ ships tomllib; older versions use the tomli backport.
    import tomllib as _toml_reader
except ModuleNotFoundError:  # pragma: no cover - Python < 3.11
    try:
        import tomli as _toml_reader  # type: ignore
    except ModuleNotFoundError:  # pragma: no cover - 3.10 without the extra
        _toml_reader = None  # type: ignore


PLACEHOLDER_PREFIXES = ("(", "（")
SIMPLE_WEEKDAY_TO_INTERNAL = {0: 6, 1: 0, 2: 1, 3: 2, 4: 3, 5: 4, 6: 5}
INTERNAL_WEEKDAY_TO_SIMPLE = {value: key for key, value in SIMPLE_WEEKDAY_TO_INTERNAL.items()}

ALIASES = {
    "學號": "user",
    "帳號": "user",
    "username": "user",
    "user": "user",
    "密碼": "passwd",
    "password": "passwd",
    "passwd": "passwd",
    "學校": "school",
    "school": "school",
    "課程": "course",
    "course": "course",
    "course_id": "course",
    "courseid": "course",
    "班級": "class",
    "群組": "class",
    "群組名": "class",
    "class": "class",
    "members": "members",
    "member": "members",
    "users": "members",
    "day": "day",
    "星期": "day",
    "enable": "enable",
    "啟用": "enable",
    "times": "times",
    "time": "times",
    "時段": "times",
    "時間": "times",
    "now": "now",
    "目前": "now",
}

# Section names accepted in [brackets] (or bare). Tolerates the common [grop]
# typo and Chinese names so beginners can't easily get it wrong.
_SECTION_ALIASES = {
    "account": "account", "accounts": "account", "帳號": "account", "帳戶": "account",
    # v1.6-alpha.2 renamed the generated header to [save account] (clarifies that
    # extra blocks are *saved* accounts, not simultaneous detection). Old [account]
    # configs keep working via the entries above.
    "save account": "account", "saved account": "account", "save_account": "account",
    "儲存帳號": "account", "已儲存帳號": "account", "存帳號": "account",
    "group": "group", "groups": "group", "grop": "group", "群組": "group", "班級": "group",
    "teacher": "teacher", "teachers": "teacher", "教師": "teacher", "老師": "teacher",
    "operating": "operating", "schedule": "operating", "排程": "operating",
    "時段": "operating", "上課時段": "operating",
    "llm": "llm", "ai": "llm", "model": "llm", "自動答題": "llm", "答題模型": "llm",
}

# Surrounding quote pairs stripped from values (e.g. now = 「class A」 -> class A).
_QUOTE_PAIRS = (('"', '"'), ("'", "'"), ("「", "」"), ("『", "』"), ("“", "”"), ("‘", "’"))


def _to_halfwidth(text: str) -> str:
    """Map full-width ASCII (Ａ-Ｚ ０-９ ＝ ： ［ ］ …) and the full-width space to
    their normal forms. Applied only to structural tokens (section headers, keys)
    so a Chinese IME left in full-width mode still parses; values/passwords are
    left untouched. CJK names (帳號, 東海) are outside this range and unaffected."""
    out = []
    for ch in text or "":
        code = ord(ch)
        if code == 0x3000:
            out.append(" ")
        elif 0xFF01 <= code <= 0xFF5E:
            out.append(chr(code - 0xFEE0))
        else:
            out.append(ch)
    return "".join(out)


def _strip_quotes(value: str) -> str:
    text = (value or "").strip()
    for open_q, close_q in _QUOTE_PAIRS:
        if len(text) >= 2 and text.startswith(open_q) and text.endswith(close_q):
            return text[1:-1].strip()
    return text


def _split_list(value: str) -> ctx.List[str]:
    """Split a comma list, tolerating full-width/ideographic commas and semicolons."""
    text = value or ""
    for sep in ("，", "、", "；", ";"):
        text = text.replace(sep, ",")
    return [part.strip() for part in text.split(",") if part.strip()]


def _split_time_range(part: str) -> ctx.List[str]:
    """Split 'HH:MM-HH:MM' tolerating full-width tildes/dashes used as the range mark."""
    text = part or ""
    for dash in ("～", "~", "－", "–", "—", "−"):
        text = text.replace(dash, "-")
    return [piece.strip() for piece in text.split("-") if piece.strip()]


def _match_section_header(line: str) -> ctx.Optional[str]:
    """Return the canonical section name for a header line, '' for an unknown
    bracketed header (which resets the active section), or None if the line is not
    a header at all. Tolerates full-width brackets ［］【】, inner spaces, Chinese
    names, the [grop] typo, and a bare keyword written without brackets."""
    text = _to_halfwidth((line or "").strip())
    if not text:
        return None
    if text.startswith("【") and text.endswith("】"):
        text = "[" + text[1:-1] + "]"
    if text.startswith("[") and text.endswith("]"):
        return _SECTION_ALIASES.get(text[1:-1].strip().lower(), "")
    if "=" not in text and ":" not in text:
        bare = text.rstrip(":").strip().lower()
        if bare in _SECTION_ALIASES:
            return _SECTION_ALIASES[bare]
    return None


def _strip_value(value: ctx.Any) -> str:
    text = ctx.normalize_text(value)
    if not text:
        return ""
    if text.startswith(PLACEHOLDER_PREFIXES) and text.endswith((")", "）")):
        return ""
    # Example tokens from the friendly default template (AAAAA / **OOXX / the now
    # hint …) are teaching placeholders only — treat them as blank so a still-example
    # config is seen as "not configured yet" rather than a real account/password.
    if text in ctx.EXAMPLE_PLACEHOLDER_VALUES:
        return ""
    return text


def _canonical_school(value: ctx.Any) -> str:
    school_str = _strip_value(value)
    if not school_str:
        return "thu"
    kind, result = ctx.normalize_base_url(school_str)
    if kind == "alias":
        return result
    if kind == "url":
        return ctx.derive_url_provider_key(school_str)
    # Bare token that isn't a known URL/alias: resolve via the config-driven alias
    # map (no hardcoded per-school table here — aliases live in schools.toml/config).
    return ctx.normalize_provider_name(school_str)


def _assign_school(entry: ctx.Dict[str, ctx.Any], raw_value: ctx.Any) -> None:
    """Set entry['school'] to the canonical key and, when the value is a pasted base
    URL, also stash the original base_url. The URL is otherwise lost once collapsed
    to the url_<host> key, leaving merge unable to build the synthesized
    interactive-browser provider (it would silently fall back to thu)."""
    entry["school"] = _canonical_school(raw_value)
    kind, base = ctx.normalize_base_url(_strip_value(raw_value))
    if kind == "url":
        entry["base_url"] = base
    else:
        entry.pop("base_url", None)


def _profile_school(profile: ctx.Mapping[str, ctx.Any], default: str = "thu") -> str:
    try:
        available_providers = {provider.key for provider in ctx.list_all_providers()}
    except Exception:
        available_providers = {"thu", "tku", "fju", "tronclass", "scu"}
    try:
        cfg_available = ctx.CONFIG.get("provider", {}).get("available", {})
        if isinstance(cfg_available, ctx.Mapping):
            for k in cfg_available:
                available_providers.add(k)
    except Exception:
        pass
    for key in ("school", "label"):
        val = profile.get(key)
        if not val or not str(val).strip():
            continue
        school = _canonical_school(val)
        if school in available_providers or school.startswith("url_"):
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


def parse_basic_config_text(text: str) -> ctx.Dict[str, ctx.Any]:
    simple: ctx.Dict[str, ctx.Any] = {
        "now": "",
        "accounts": [],
        "teacher": {"user": "", "passwd": "", "school": "tronclass", "course": ""},
        "llm": {"provider": "", "base_url": "", "model": "", "api_key_env": ""},
        "groups": [],
        "operating": {},
        "warnings": [],
    }

    current_section = ""
    current_account: ctx.Dict[str, str] = {}
    current_group: ctx.Dict[str, ctx.Any] = {}
    current_operating: ctx.Dict[str, ctx.Any] = {}

    def finish_account() -> None:
        nonlocal current_account
        if current_account:
            user = _strip_value(current_account.get("user"))
            passwd = _strip_value(current_account.get("passwd"))
            if user or passwd:
                entry = {"user": user, "passwd": passwd}
                _assign_school(entry, current_account.get("school", "thu"))
                simple["accounts"].append(entry)
            current_account = {}

    def finish_group() -> None:
        nonlocal current_group
        if current_group:
            cls = _strip_value(current_group.get("class"))
            school = _canonical_school(current_group.get("school", "thu"))
            members_str = _strip_value(current_group.get("members"))
            # Drop the template's example members (AAAAA,BBBBB) — they are guidance,
            # not real users, and have no matching account.
            users = [user for user in _split_list(members_str) if user not in ctx.EXAMPLE_PLACEHOLDER_VALUES]
            if cls or users:
                simple["groups"].append({
                    "class": cls,
                    "school": school,
                    "users": users
                })
            current_group = {}

    def finish_operating() -> None:
        nonlocal current_operating
        if current_operating and "day" in current_operating:
            try:
                day = int(current_operating["day"])
            except (ValueError, TypeError):
                current_operating = {}
                return
            if 0 <= day <= 6:
                enable = ctx.coerce_bool(current_operating.get("enable", True), True)
                times_str = _strip_value(current_operating.get("times"))
                ranges = []
                for part in _split_list(times_str):
                    subparts = _split_time_range(part)
                    if len(subparts) == 2:
                        ranges.append(subparts)
                if not ranges:
                    ranges = [["00:00", "00:00"]]
                simple["operating"][day] = {
                    "enable": enable,
                    "range": ranges[0],
                    "ranges": ranges
                }
            current_operating = {}

    def finish_current_section() -> None:
        if current_section == "account":
            finish_account()
        elif current_section == "group":
            finish_group()
        elif current_section == "operating":
            finish_operating()

    for raw_line in (text or "").splitlines():
        # A line whose first non-whitespace char is '#' is a comment (anywhere).
        stripped = raw_line.strip()
        if not stripped or stripped.startswith("#"):
            continue

        # Section header — tolerant of full-width brackets, Chinese names, the
        # [grop] typo, and a bare keyword written without brackets.
        section_name = _match_section_header(stripped)
        if section_name is not None:
            finish_current_section()
            current_section = section_name
            if section_name == "account":
                current_account = {}
            elif section_name == "group":
                current_group = {}
            elif section_name == "operating":
                current_operating = {}
            continue

        # key = value. Accept ':' and the full-width '＝'/'：' a Chinese IME may
        # produce. Only the FIRST full-width separator is normalized, so values
        # (e.g. a time like 09:10, or a password) are never corrupted.
        work = stripped
        if "=" not in work and ":" not in work:
            for fullwidth, ascii_sep in (("＝", "="), ("：", ":")):
                if fullwidth in work:
                    work = work.replace(fullwidth, ascii_sep, 1)
                    break
        if "=" in work:
            k_part, v_part = work.split("=", 1)
        elif ":" in work:
            k_part, v_part = work.split(":", 1)
        else:
            continue

        key = _to_halfwidth(k_part).strip()
        canon_key = ALIASES.get(key.lower(), key.lower())
        val = _strip_value(v_part.strip())
        # Strip wrapping quotes for everything except passwords (a password may
        # legitimately begin/end with a quote character).
        if canon_key != "passwd":
            val = _strip_quotes(val)

        # `now` is a top-level setting — accept it no matter where it is written.
        if canon_key == "now":
            simple["now"] = val
            continue
        if current_section == "account":
            if canon_key == "user" and current_account.get("user"):
                finish_account()
            current_account[canon_key] = val
        elif current_section == "group":
            if canon_key == "class" and current_group.get("class"):
                finish_group()
            current_group[canon_key] = val
        elif current_section == "teacher":
            simple["teacher"][canon_key] = val
        elif current_section == "llm":
            if canon_key in ("provider", "base_url", "model", "api_key_env"):
                simple["llm"][canon_key] = val
        elif current_section == "operating":
            if canon_key == "day" and "day" in current_operating:
                finish_operating()
            current_operating[canon_key] = val

    finish_current_section()

    if "school" in simple["teacher"]:
        _assign_school(simple["teacher"], simple["teacher"]["school"])

    for day in range(7):
        entry = simple["operating"].setdefault(day, {"enable": True, "range": ["00:00", "00:00"]})
        ranges = ctx.normalize_schedule_ranges(entry.get("ranges", entry.get("range")), [["00:00", "00:00"]])
        entry["range"] = ranges[0]
        entry["ranges"] = ranges

    return simple


def _parse_legacy_key_value(line: str) -> ctx.Tuple[str, str] | None:
    if ":" not in line:
        return None
    key, value = line.split(":", 1)
    if "//" in value:
        value = value.split("//", 1)[0]
    return (ctx.normalize_text(key).lower(), _strip_value(value))


def parse_legacy_basic_config_text(text: str) -> ctx.Dict[str, ctx.Any]:
    """Parse a pre-1.3 config.yaml (the old colon-based fake-YAML) so a one-time
    migration can carry an existing user's accounts/groups/schedule into the new
    config.conf format. Mirrors the removed simple_config parser; used only by
    migrate_legacy_yaml_config, never for the live config."""
    simple: ctx.Dict[str, ctx.Any] = {
        "now": "",
        "accounts": [],
        "teacher": {"user": "", "passwd": "", "school": "tronclass", "course": ""},
        "llm": {"provider": "", "base_url": "", "model": "", "api_key_env": ""},
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
            _assign_school(current_account, current_account.get("school"))
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
        parsed = _parse_legacy_key_value(line)
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
                current_account["school"] = value  # raw; canonicalized in finish_account so base_url survives
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
                _assign_school(teacher, value)
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


# Advanced-config sections (everything that is NOT basic account/group/teacher/
# operating). Order here is the order they appear in the generated TOML file.
ADVANCED_SECTION_KEYS = (
    "time", "session", "monitor", "auth", "ux", "local_ui", "webview",
    "integrations", "notifications", "config", "number", "radar", "research",
    "autoanswer",
)


def default_advanced_config() -> ctx.Dict[str, ctx.Any]:
    """The full advanced schema at default values, so the generated TOML can list
    every supported control instead of being blank."""
    full: ctx.Dict[str, ctx.Any] = {}
    for key in ADVANCED_SECTION_KEYS:
        if key in ctx.DEFAULT_CONFIG:
            full[key] = ctx.copy.deepcopy(ctx.DEFAULT_CONFIG[key])
    return full


def _deep_merge_dict(base: ctx.Mapping[str, ctx.Any], overlay: ctx.Mapping[str, ctx.Any]) -> ctx.Dict[str, ctx.Any]:
    result = ctx.copy.deepcopy(dict(base))
    for key, value in dict(overlay or {}).items():
        if isinstance(value, dict) and isinstance(result.get(key), dict):
            result[key] = _deep_merge_dict(result[key], value)
        else:
            result[key] = ctx.copy.deepcopy(value)
    return result


def parse_advanced_config_toml(text: str) -> ctx.Dict[str, ctx.Any]:
    """Parse the advanced config as TOML. Returns {} on any parse error so a typo
    in the advanced file falls back to defaults instead of breaking startup."""
    if _toml_reader is None:  # pragma: no cover - only on 3.10 without tomli
        return {}
    try:
        loaded = _toml_reader.loads(text or "")
    except Exception:
        return {}
    return loaded if isinstance(loaded, dict) else {}


def _all_school_codes() -> ctx.List[str]:
    """Every supported school code, from the registry — so the generated config lists
    them all in ONE place, always current, with no school singled out."""
    try:
        return sorted({p.key.upper() for p in ctx.list_all_providers() if getattr(p, "user_visible", True)})
    except Exception:
        return ["THU", "TKU", "SCU", "FJU", "TRONCLASS"]


def _render_school_value(raw: ctx.Any) -> str:
    """Canonical UPPER code for a configured school, or a neutral placeholder when
    nothing is set — never a privileged default like THU."""
    if not _strip_value(raw):
        return "（填上方任一代號）"
    return (_canonical_school(raw) or "thu").upper()


def render_basic_config(simple_dict: ctx.Mapping[str, ctx.Any] | None = None) -> str:
    simple = ctx.copy.deepcopy(dict(simple_dict or {}))
    accounts = list(simple.get("accounts") or [])
    if not accounts:
        accounts.append({"user": "", "passwd": "", "school": ""})
    groups = list(simple.get("groups") or [])
    if not groups:
        groups.append({"class": "A", "school": "", "users": [""]})

    lines = [
        "# ===== 基本設定 config.conf =====（改完存檔關閉記事本即自動套用）",
        "# now：要用哪個帳號跑？填某帳號的 user，或填「class 群組名」。只有一個帳號可留空。",
        "#       也可填學校網址（如 https://tronclass.你的學校.edu.tw）→ 改用手動瀏覽器登入，免填帳密。",
        "now = {}".format(simple.get("now") or ""),
        "",
        "# [save account] 已儲存的帳號。要存幾個就放幾塊；實際只會用上面 now 指定的那一個跑——",
        "#   填多個並「不會」同時偵測多個。school 填下列任一支援代號＝自動登入：",
    ]
    codes = _all_school_codes()
    lines.extend("#   " + ", ".join(codes[i:i + 8]) for i in range(0, len(codes), 8))
    lines.append("#   也可改填學校「網址」＝手動瀏覽器登入（passwd 可留空）。")

    for account in accounts:
        lines.extend([
            "[save account]",
            "user = {}".format(account.get("user") or ""),
            "passwd = {}".format(account.get("passwd") or ""),
            "school = {}".format(_render_school_value(account.get("school"))),
            ""
        ])

    teacher = simple.get("teacher") if isinstance(simple.get("teacher"), dict) else {}
    lines.extend([
        "# [teacher]（選用）QR 教師輔助帳號。school 填任一支援代號（見上）；course 留空會自動抓第一門課",
        "[teacher]",
        "user = {}".format(teacher.get("user") or ""),
        "passwd = {}".format(teacher.get("passwd") or ""),
        "school = {}".format((_canonical_school(teacher.get("school") or "tronclass") or "tronclass").upper()),
        "course = {}".format(teacher.get("course") or ""),
        ""
    ])

    llm = simple.get("llm") if isinstance(simple.get("llm"), dict) else {}
    llm_defaults = ctx.DEFAULT_CONFIG.get("autoanswer", {}).get("llm", {}) if isinstance(
        getattr(ctx, "DEFAULT_CONFIG", None), dict) else {}
    lines.extend([
        "# [llm]（選用）自動答題用的 LLM 連線設定；留空＝用預設（NVIDIA NIM / minimax-m3）。",
        "#   api_key_env 是「存放金鑰的環境變數名稱」，不是金鑰本身——金鑰請設成該環境變數，切勿寫在這裡。",
        "#   進階行為（reasoning/溫度/工具…）仍在 config.advanced.toml 的 [autoanswer.llm]。",
        "[llm]",
        "provider = {}".format(llm.get("provider") or llm_defaults.get("provider") or "nvidia"),
        "base_url = {}".format(llm.get("base_url") or llm_defaults.get("base_url") or ""),
        "model = {}".format(llm.get("model") or llm_defaults.get("model") or ""),
        "api_key_env = {}".format(llm.get("api_key_env") or llm_defaults.get("api_key_env") or "NVIDIA_API_KEY"),
        ""
    ])

    for group in groups:
        class_name = group.get("class") or "A"
        users = list(group.get("users") or [""])
        if not users:
            users = [""]
        lines.extend([
            "# [group]（選用）一人偵測、全員簽到。members 用逗號列出同組 user，再把上面 now 填成「class A」",
            "[group]",
            "class = {}".format(class_name),
            "school = {}".format(_render_school_value(group.get("school"))),
            "members = {}".format(", ".join(users)),
            ""
        ])

    operating = simple.get("operating") or {}
    for day in range(7):
        entry = operating.get(day, {"enable": True, "range": ["00:00", "00:00"]})
        enabled = ctx.coerce_bool(entry.get("enable", True), True) if isinstance(entry, dict) else True
        ranges = ctx.normalize_schedule_ranges(
            entry.get("ranges", entry.get("range")) if isinstance(entry, dict) else None,
            [["00:00", "00:00"]],
        )
        times_formatted = ", ".join("-".join(r) for r in ranges)
        lines.extend([
            "# [operating] 上課時段：一天一塊；day 用 0=日 1=一 … 6=六；times 用逗號分隔多段",
            "[operating]",
            "day = {}".format(day),
            "enable = {}".format("true" if enabled else "false"),
            "times = {}".format(times_formatted),
            ""
        ])

    return "\n".join(lines).rstrip() + "\n"


# Beginner-facing comments for the generated advanced TOML, keyed by section or
# dotted key. Only the controls worth explaining are commented.
_ADVANCED_COMMENTS = {
    "time": "時區設定",
    "time.timezone": "IANA 時區名稱，例如 Asia/Taipei",
    "session": "登入 session 快取",
    "session.cache_cookies": "true = 記住登入，下次免重新登入",
    "provider": "學校與 API 網址覆寫（內建學校不必填，自訂學校才需要）",
    "provider.allow_experimental": "是否啟用實驗性學校",
    "monitor": "監控行為",
    "monitor.ignore_attendance_rate_gate": "true = 一偵測到點名就立刻簽到，跳過「全班到課率達 15%」的保險",
    "auth": "登入方式",
    "auth.browser_assisted_login": "瀏覽器輔助登入（需安裝 .[browser]）",
    "auth.browser_assisted_login.interactive_timeout_ms": "互動登入寬鬆逾時毫秒數（預設 300000，即 5 分鐘）",
    "auth.browser_assisted_login.allow_browser_download": "缺少瀏覽器二進位檔時是否自動下載 Chromium（約 150MB，預設 true；設 false 則不自動下載）",
    "auth.browser_assisted_login.interactive_poll_interval_ms": "輪詢檢查是否登入成功的間隔毫秒數（預設 1000）",
    "ux": "介面與暫存行為",
    "local_ui": "本機 QR 掃描器網頁服務的位址與連接埠",
    "webview": "WebView / cookie 匯入（實驗性，預設關閉）",
    "integrations": "聊天機器人整合；token 一律從環境變數讀，不會寫在這裡",
    "notifications": "點名結果通知（Telegram / Discord）",
    "config": "核心執行參數",
    "config.Senkaku": "每次輪詢點名的間隔秒數（越小越即時、越耗資源）",
    "config.retries": "連續錯誤幾次後停止監控",
    "config.http_timeout": "HTTP 連線逾時秒數",
    "config.verify_ssl": "false = 不驗證 TLS 憑證（不建議）",
    "config.user-agent": "送出請求時輪替使用的 User-Agent 清單",
    "number": "數字點名參數（讀碼優先，必要時暴力猜碼）",
    "number.concurrency": "暴力猜碼時的並發請求數",
    "number.direct_code_lookup": "直接讀碼（免暴力）的開關",
    "radar": "雷達點名參數",
    "radar.strategy": "雷達策略：empty_answer（空答案優先）或 global_wgs84（全球定位求解）",
    "radar.boundary_points": "THU 校園邊界座標 [緯度, 經度]，雷達備援求解用",
    "radar.global": "全球定位求解器的細部參數",
    "research": "研究／封包擷取（預設全部關閉，請勿任意開啟）",
    "autoanswer": "自動答題（v1.7，預設開）：偵測進行中的測驗/作業/問卷/投票並自動作答",
    "autoanswer.enabled": "true = 啟用自動答題；false = 完全關閉",
    "autoanswer.delay_seconds": "偵測到題目後等幾秒才送出（這段期間先備好答案；按任意鍵可立即送）",
    "autoanswer.allow_keypress_immediate": "true = 等待期間按任意鍵立即送出已備好的答案",
    "autoanswer.resubmit_for_correct": "true = 允許「先交→讀正解→再交」（需該活動允許多次作答；取最高分）",
    "autoanswer.types": "要自動作答的題型清單",
    "autoanswer.llm": "答題 LLM 的「行為」設定；連線設定（provider/base_url/model/api_key_env）改在 config.conf 的 [llm]",
    "autoanswer.llm.thinking_mode": "推理強度：enabled=常開（預設，作答最穩）/ adaptive=模型自決 / disabled=關閉",
    "autoanswer.llm.max_tokens": "回覆 token 上限；0 = 不填（交給模型自身上限，預設）",
    "autoanswer.llm.enable_tools": "true = 題目資訊不足時，允許模型自行讀取課程教材/附件（含 PDF 文字）來作答",
    "autoanswer.llm.max_tool_iterations": "單題最多允許模型呼叫工具幾輪（控制成本/延遲）",
}


def _toml_escape_string(value: str) -> str:
    escaped = (
        value.replace("\\", "\\\\")
        .replace('"', '\\"')
        .replace("\n", "\\n")
        .replace("\t", "\\t")
    )
    return '"' + escaped + '"'


def _toml_value(value: ctx.Any) -> str:
    if isinstance(value, bool):
        return "true" if value else "false"
    if isinstance(value, int):
        return str(value)
    if isinstance(value, float):
        return repr(value)
    if isinstance(value, str):
        return _toml_escape_string(value)
    if isinstance(value, (list, tuple)):
        return "[" + ", ".join(_toml_value(item) for item in value) + "]"
    return _toml_escape_string(str(value))


def _emit_toml_table(name: str, table: ctx.Mapping[str, ctx.Any], lines: ctx.List[str]) -> None:
    # TOML requires a table's own keys before any of its sub-tables, so emit
    # scalars/lists first and recurse into nested dicts afterwards.
    scalars = [(k, v) for k, v in table.items() if not isinstance(v, dict)]
    subtables = [(k, v) for k, v in table.items() if isinstance(v, dict)]
    if name:
        lines.append("")
        comment = _ADVANCED_COMMENTS.get(name)
        if comment:
            lines.append("# " + comment)
        lines.append("[" + name + "]")
    for key, value in scalars:
        full_key = "{}.{}".format(name, key) if name else key
        comment = _ADVANCED_COMMENTS.get(full_key)
        if comment:
            lines.append("# " + comment)
        lines.append("{} = {}".format(key, _toml_value(value)))
    for key, value in subtables:
        child = "{}.{}".format(name, key) if name else key
        _emit_toml_table(child, value, lines)


def render_advanced_config_toml(config: ctx.Mapping[str, ctx.Any] | None = None) -> str:
    """Render the COMPLETE advanced config as commented TOML: every supported
    control at its default value, with any overrides from ``config`` applied on
    top. This is what makes the advanced file self-documenting for beginners."""
    full = _deep_merge_dict(default_advanced_config(), config or {})
    # LLM connection keys (provider/base_url/model/api_key_env) live in config.conf [llm] now —
    # don't duplicate them here. The behaviour keys (thinking_mode/max_tokens/...) stay.
    autoanswer_full = full.get("autoanswer")
    if isinstance(autoanswer_full, dict) and isinstance(autoanswer_full.get("llm"), dict):
        for moved_key in ("provider", "base_url", "model", "api_key_env"):
            autoanswer_full["llm"].pop(moved_key, None)
    # The provider section is rendered separately below: the FULL school registry,
    # taken from the passed config when present (config wins) or the factory seed.
    provider_cfg = full.pop("provider", None)
    lines = [
        "# ===== 進階設定 config.advanced.toml =====",
        "# TOML 格式：固定、嚴謹、不易出錯。下面列出所有可調整的項目，數值都是預設值，",
        "# 照需要修改即可。若改壞了（例如刪掉引號或括號），這份進階設定會整個回到預設值，",
        "# 但完全不影響你的基本設定 config.conf。",
    ]
    _emit_toml_table("", full, lines)
    _append_provider_advanced_section(lines, provider_cfg)
    return "\n".join(lines).rstrip() + "\n"


def _provider_emit_rows(provider_cfg: ctx.Any) -> ctx.List[tuple]:
    """Rows (key, base_url, label, aliases, notes, user_visible) for the provider
    section: from the passed config's ``available`` when present (config wins), else
    from the factory seed read fresh off disk — so a missing/deleted advanced file
    is re-materialized from schools.toml, not from possibly-stale live globals."""
    available = None
    if isinstance(provider_cfg, ctx.Mapping):
        avail = provider_cfg.get("available")
        if isinstance(avail, ctx.Mapping) and avail:
            available = avail
    rows: ctx.List[tuple] = []
    if available is not None:
        for key in sorted(available):
            value = available[key]
            if not isinstance(value, ctx.Mapping):
                continue
            rows.append((
                key,
                str(value.get("base_url") or ""),
                str(value.get("label") or ""),
                list(value.get("aliases") or []),
                str(value.get("notes") or ""),
                bool(value.get("user_visible", True)),
            ))
    else:
        try:
            seed = ctx.seed_providers()
        except Exception:
            seed = {}
        for key in sorted(seed):
            provider = seed[key]
            rows.append((
                key, provider.base_url, provider.label,
                list(provider.aliases), provider.notes, provider.user_visible,
            ))
    return rows


def _append_provider_advanced_section(lines: ctx.List[str], provider_cfg: ctx.Any) -> None:
    """Emit the FULL school registry as editable [provider.available.*] blocks —
    this advanced file is the live source of truth for every school. Each block
    carries base_url / label / aliases (login URL, login flow and image-captcha are
    all auto-detected, so they are deliberately not written). Delete these blocks
    (or the whole file) to re-seed from the bundled schools.toml on next launch."""
    lines.append("")
    lines.append("# " + _ADVANCED_COMMENTS["provider"])
    lines.append("# 以下列出「所有學校」，每一所都可直接在這裡改：")
    lines.append("#   base_url = 網站根網址（登入網址／登入方式／圖形驗證碼全自動偵測，毋須填）")
    lines.append("#   label    = 顯示名稱（選填）")
    lines.append('#   aliases  = 別名清單，可用中文/英文代稱，例：["東海", "tunghai"]（選填）')
    lines.append("# 區塊名 [provider.available.XXX] 的 XXX 就是 config.conf 裡 school 要填的代號。")
    lines.append("# 新增學校：照樣加一塊、填一行 base_url 即可。")
    lines.append("# 想恢復原廠學校清單：刪掉下面所有 [provider.*] 區塊（或整個檔），下次啟動自動重建。")

    if isinstance(provider_cfg, ctx.Mapping) and ctx.coerce_bool(provider_cfg.get("allow_experimental"), False):
        lines.append("")
        lines.append("[provider]")
        lines.append("# " + _ADVANCED_COMMENTS["provider.allow_experimental"])
        lines.append("allow_experimental = true")

    for key, base_url, label, aliases, notes, user_visible in _provider_emit_rows(provider_cfg):
        # url_* keys are synthesised on the fly from a pasted URL; never persist them.
        if not key or str(key).startswith("url_"):
            continue
        lines.append("")
        lines.append("[provider.available.{}]".format(key))
        lines.append("base_url = {}".format(_toml_value(base_url)))
        if label:
            lines.append("label = {}".format(_toml_value(label)))
        if aliases:
            lines.append("aliases = {}".format(_toml_value(list(aliases))))
        if notes:
            lines.append("notes = {}".format(_toml_value(notes)))
        if not user_visible:
            lines.append("user_visible = false")


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
                            group_school = _canonical_school(group.get("school", "thu"))
                            account_school = _canonical_school(account.get("school", "thu"))
                            if account_school == group_school and ctx.has_real_credential(account.get("passwd")):
                                return {
                                    "user": _strip_value(account.get("user")),
                                    "passwd": _strip_value(account.get("passwd")),
                                    "school": account_school,
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


def merge_basic_and_advanced_config(simple: ctx.Mapping[str, ctx.Any], advanced: ctx.Mapping[str, ctx.Any] | None = None) -> ctx.Dict[str, ctx.Any]:
    config = ctx.copy.deepcopy(dict(advanced or {}))
    account = _simple_target_account(simple)
    # `now = <a URL>` is an explicit "open a browser and log into this site"
    # shortcut: override the active account to a credential-less interactive
    # provider, even with no matching [account] block.
    now_url_key = None
    now_url_base = None
    now_raw = _strip_value(simple.get("now"))
    if now_raw:
        _now_kind, _now_base = ctx.normalize_base_url(now_raw)
        if _now_kind == "url":
            now_url_key = ctx.derive_url_provider_key(now_raw)
            if now_url_key:
                now_url_base = _now_base
                account = {"user": "", "passwd": "", "school": now_url_key}
    config["account"] = {"user": account["user"], "passwd": account["passwd"]}
    teacher_source = simple.get("teacher") if isinstance(simple.get("teacher"), dict) else {}
    config["teacher"] = {
        "user": _strip_value(teacher_source.get("user")),
        "passwd": _strip_value(teacher_source.get("passwd")),
        "school": _canonical_school(teacher_source.get("school") or "tronclass"),
        "course": _strip_value(teacher_source.get("course")),
    }
    # config.conf [llm] connection keys override the advanced autoanswer.llm. Blank -> keep
    # whatever the advanced TOML (or, later, normalize defaults) provides — so this never wipes
    # a value to empty. The behaviour keys (thinking_mode/temperature/...) stay in advanced.
    llm_source = simple.get("llm") if isinstance(simple.get("llm"), dict) else {}
    autoanswer_section = config.setdefault("autoanswer", {})
    if isinstance(autoanswer_section, dict):
        autoanswer_llm = autoanswer_section.setdefault("llm", {})
        if isinstance(autoanswer_llm, dict):
            for key in ("provider", "base_url", "model", "api_key_env"):
                value = _strip_value(llm_source.get(key))
                if value:
                    autoanswer_llm[key] = value
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
    url_providers = {}
    def collect_url_school(entry):
        if not isinstance(entry, dict):
            return
        school = str(entry.get("school") or "").strip()
        if not school:
            return
        base = entry.get("base_url")
        if school.startswith("url_") and base:
            # base_url captured by _assign_school at parse time (the URL is gone
            # from the canonical key) — this is the normal config.conf path.
            url_providers[school] = str(base)
            return
        # Fallback: a raw URL still sitting in school (hand-built simple dicts).
        kind, res = ctx.normalize_base_url(school)
        if kind == "url":
            key = ctx.derive_url_provider_key(school)
            if key:
                url_providers[key] = res
    for item in simple.get("accounts", []) or []:
        collect_url_school(item)
    collect_url_school(teacher_source)
    if now_url_key and now_url_base:
        url_providers[now_url_key] = now_url_base
    provider = dict(config.get("provider", {})) if isinstance(config.get("provider"), dict) else {}
    provider_available = dict(provider.get("available", {}))
    for key, base_url in url_providers.items():
        if key not in provider_available:
            provider_available[key] = {
                "base_url": base_url,
                "auth_flow": "interactive_browser",
            }
    provider["available"] = provider_available
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
    autoanswer_llm = (normalized.get("autoanswer") or {}).get("llm") or {}
    simple_llm = {key: _strip_value(autoanswer_llm.get(key))
                  for key in ("provider", "base_url", "model", "api_key_env")}
    simple = {"now": now, "accounts": accounts, "teacher": simple_teacher, "llm": simple_llm,
              "groups": groups, "operating": simple_operating}
    advanced = {}
    for key, value in normalized.items():
        if key in {"account", "accounts", "teacher", "operating", "_simple"}:
            continue
        if key in ctx.DEFAULT_CONFIG and value == ctx.DEFAULT_CONFIG.get(key):
            continue
        advanced[key] = ctx.copy.deepcopy(value)
    # v1.6-alpha.3: config.advanced.toml is the live source of truth for the FULL
    # school registry (not a delta). Keep the whole merged provider so the rendered
    # file lists every school and preserves any per-school edits the user made.
    # (Only `available` + `allow_experimental` are actually emitted; `current` etc.
    # are derived on load.) Delete the file to re-seed from schools.toml.
    advanced["provider"] = ctx.copy.deepcopy(normalized.get("provider", {}))
    return simple, advanced

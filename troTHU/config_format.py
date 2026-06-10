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
VISIBLE_DEFAULT_SCHOOLS = ("THU", "TKU", "TRONCLASS")

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
    "group": "group", "groups": "group", "grop": "group", "群組": "group", "班級": "group",
    "teacher": "teacher", "teachers": "teacher", "教師": "teacher", "老師": "teacher",
    "operating": "operating", "schedule": "operating", "排程": "operating",
    "時段": "operating", "上課時段": "operating",
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
        "東吳": "scu",
        "東吳大學": "scu",
        "scu": "scu",
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


def parse_basic_config_text(text: str) -> ctx.Dict[str, ctx.Any]:
    simple: ctx.Dict[str, ctx.Any] = {
        "now": "",
        "accounts": [],
        "teacher": {"user": "", "passwd": "", "school": "tronclass", "course": ""},
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
            school = _canonical_school(current_account.get("school", "thu"))
            if user or passwd:
                simple["accounts"].append({
                    "user": user,
                    "passwd": passwd,
                    "school": school
                })
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
        elif current_section == "operating":
            if canon_key == "day" and "day" in current_operating:
                finish_operating()
            current_operating[canon_key] = val

    finish_current_section()

    if "school" in simple["teacher"]:
        simple["teacher"]["school"] = _canonical_school(simple["teacher"]["school"])

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


# Advanced-config sections (everything that is NOT basic account/group/teacher/
# operating). Order here is the order they appear in the generated TOML file.
ADVANCED_SECTION_KEYS = (
    "time", "session", "monitor", "auth", "ux", "local_ui", "webview",
    "integrations", "notifications", "config", "number", "radar", "research",
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


def render_basic_config(simple_dict: ctx.Mapping[str, ctx.Any] | None = None) -> str:
    simple = ctx.copy.deepcopy(dict(simple_dict or {}))
    accounts = list(simple.get("accounts") or [])
    while len(accounts) < len(VISIBLE_DEFAULT_SCHOOLS):
        index = len(accounts) + 1
        accounts.append({"user": "", "passwd": "", "school": VISIBLE_DEFAULT_SCHOOLS[index - 1]})
    groups = list(simple.get("groups") or [])
    while len(groups) < 2:
        groups.append({"class": "A" if not groups else "B", "school": "THU", "users": [""]})
    
    lines = [
        "# ===== 基本設定 config.conf =====（改完存檔關閉記事本即自動套用）",
        "# now：要用哪個帳號跑？填某帳號的 user，或填「class 群組名」。只有一個帳號可留空。",
        "now = {}".format(simple.get("now") or ""),
        ""
    ]

    for index, account in enumerate(accounts, start=1):
        lines.extend([
            "# [account] 你的帳號，要幾個就放幾塊。school 可填 THU / TKU / TRONCLASS",
            "[account]",
            "user = {}".format(account.get("user") or ""),
            "passwd = {}".format(account.get("passwd") or ""),
            "school = {}".format((_canonical_school(account.get("school")) or "thu").upper()),
            ""
        ])

    teacher = simple.get("teacher") if isinstance(simple.get("teacher"), dict) else {}
    lines.extend([
        "# [teacher]（選用）QR 教師輔助帳號。course 留空會自動抓第一門課",
        "[teacher]",
        "user = {}".format(teacher.get("user") or ""),
        "passwd = {}".format(teacher.get("passwd") or ""),
        "school = {}".format((_canonical_school(teacher.get("school") or "tronclass") or "tronclass").upper()),
        "course = {}".format(teacher.get("course") or ""),
        ""
    ])

    for group in groups:
        class_name = group.get("class") or ("A" if len(lines) == 0 else "B")
        users = list(group.get("users") or [""])
        if not users:
            users = [""]
        lines.extend([
            "# [group]（選用）一人偵測、全員簽到。members 用逗號列出同組 user，再把上面 now 填成「class A」",
            "[group]",
            "class = {}".format(class_name),
            "school = {}".format((_canonical_school(group.get("school")) or "thu").upper()),
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
    "monitor": "監控行為",
    "monitor.ignore_attendance_rate_gate": "true = 一偵測到點名就立刻簽到，跳過「全班到課率達 15%」的保險",
    "auth": "登入方式",
    "auth.browser_assisted_login": "瀏覽器輔助登入（需安裝 .[browser]）",
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
    lines = [
        "# ===== 進階設定 config.advanced.toml =====",
        "# TOML 格式：固定、嚴謹、不易出錯。下面列出所有可調整的項目，數值都是預設值，",
        "# 照需要修改即可。若改壞了（例如刪掉引號或括號），這份進階設定會整個回到預設值，",
        "# 但完全不影響你的基本設定 config.conf。",
    ]
    _emit_toml_table("", full, lines)
    return "\n".join(lines).rstrip() + "\n"


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

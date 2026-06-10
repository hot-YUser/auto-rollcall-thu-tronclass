"""Resolve simple-config account/group targets for monitor and fan-out planning."""

from __future__ import annotations

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore


def _school(value: ctx.Any) -> str:
    return ctx.normalize_text(value).lower() or "thu"


def _simple_meta(config: ctx.Mapping[str, ctx.Any]) -> ctx.Dict[str, ctx.Any]:
    meta = config.get("_simple") if isinstance(config.get("_simple"), dict) else {}
    return dict(meta)


def _rollcall_id(rollcall: ctx.Any) -> str:
    if not isinstance(rollcall, dict):
        return ""
    val = rollcall.get("rollcall_id") or rollcall.get("id")
    return ctx.normalize_text(val)


def resolve_now_target(config: ctx.Mapping[str, ctx.Any]) -> ctx.Dict[str, ctx.Any]:
    meta = _simple_meta(config)
    now = ctx.normalize_text(meta.get("now"))
    accounts = [item for item in meta.get("accounts", []) if isinstance(item, dict)]
    groups = [item for item in meta.get("groups", []) if isinstance(item, dict)]
    if not now:
        inferred = ctx.normalize_text(ctx.infer_single_account_now(meta))
        if inferred:
            school = _school(
                next(
                    (item.get("school") for item in accounts if ctx.normalize_text(item.get("user")).lower() == inferred.lower()),
                    "thu",
                )
            )
            return {"ok": True, "kind": "account", "user": inferred, "school": school, "inferred": True}
        return {"ok": False, "kind": "empty", "reason": "now_empty", "now": ""}
    if now.lower().startswith("class "):
        class_name = ctx.normalize_text(now[6:])
        for group in groups:
            if ctx.normalize_text(group.get("class")).lower() == class_name.lower():
                return {"ok": True, "kind": "group", "name": class_name, "school": _school(group.get("school")), "users": list(group.get("users", []))}
        return {"ok": False, "kind": "group", "reason": "group_not_found", "name": class_name}
    for account in accounts:
        if ctx.normalize_text(account.get("user")).lower() == now.lower():
            return {"ok": True, "kind": "account", "user": ctx.normalize_text(account.get("user")), "school": _school(account.get("school"))}
    return {"ok": False, "kind": "account", "reason": "account_not_found", "user": now}


def build_group_execution_plan(config: ctx.Mapping[str, ctx.Any], target: ctx.Mapping[str, ctx.Any] | None = None) -> ctx.Dict[str, ctx.Any]:
    target = dict(target or resolve_now_target(config))
    meta = _simple_meta(config)
    accounts = {
        ctx.normalize_text(item.get("user")).lower(): item
        for item in meta.get("accounts", [])
        if isinstance(item, dict) and ctx.normalize_text(item.get("user"))
    }
    warnings = []
    if not target.get("ok"):
        return {"ok": False, "target": target, "monitor_user": "", "fanout_users": [], "accounts": [], "skipped": [], "warnings": [target.get("reason", "target_invalid")]}
    if target.get("kind") == "account":
        user = ctx.normalize_text(target.get("user"))
        return {"ok": True, "target": target, "monitor_user": user, "fanout_users": [user], "accounts": [{"user": user, "school": _school(target.get("school"))}], "skipped": [], "warnings": []}
    school = _school(target.get("school"))
    fanout = []
    skipped = []
    monitor_user = ""
    for user in target.get("users", []) or []:
        key = ctx.normalize_text(user).lower()
        account = accounts.get(key)
        if not account:
            warnings.append("群組帳號 `{}` 不存在於 account 區塊，已略過。".format(user))
            skipped.append({"user": ctx.normalize_text(user), "reason": "account_not_found"})
            continue
        if _school(account.get("school")) != school:
            warnings.append("群組帳號 `{}` 的 school 與群組不同，已略過。".format(user))
            skipped.append({"user": ctx.normalize_text(user), "reason": "school_mismatch"})
            continue
        if not ctx.has_real_credential(account.get("passwd")):
            warnings.append("群組帳號 `{}` 未設定密碼，已略過 fan-out。".format(user))
            skipped.append({"user": ctx.normalize_text(user), "reason": "missing_password"})
            continue
        normalized_user = ctx.normalize_text(account.get("user"))
        if not monitor_user:
            monitor_user = normalized_user
        fanout.append(normalized_user)
    return {"ok": bool(monitor_user), "target": target, "monitor_user": monitor_user, "fanout_users": fanout, "accounts": [{"user": user, "school": school} for user in fanout], "skipped": skipped, "warnings": warnings}


_SKIP_REASON_ZH = {
    "account_not_found": "帳號不存在於 account 區塊",
    "school_mismatch": "school 與群組不符",
    "missing_password": "未設定密碼",
}


def _skip_reason_zh(reason: ctx.Any) -> str:
    text = ctx.normalize_text(reason)
    return _SKIP_REASON_ZH.get(text, text or "未知")


def summarize_group_target(config: ctx.Mapping[str, ctx.Any] | None = None) -> ctx.Dict[str, ctx.Any]:
    """Structured, display-ready view of the active ``now`` target.

    Reuses :func:`resolve_now_target` + :func:`build_group_execution_plan` so the
    monitor banner, ``status``/``account`` commands, and the live status line all
    speak about the same resolved account/group. Pure (no I/O)."""
    cfg = config if config is not None else ctx.CONFIG
    target = resolve_now_target(cfg)
    plan = build_group_execution_plan(cfg, target)
    kind = ctx.normalize_text(target.get("kind"))
    summary = {
        "kind": kind,
        "ok": bool(target.get("ok")),
        "name": "",
        "school": ctx.normalize_text(target.get("school")),
        "members": list(plan.get("fanout_users", []) or []),
        "monitor_user": ctx.normalize_text(plan.get("monitor_user")),
        "fanout_count": len(plan.get("fanout_users", []) or []),
        "skipped": list(plan.get("skipped", []) or []),
        "warnings": list(plan.get("warnings", []) or []),
        "reason": ctx.normalize_text(target.get("reason")),
        "inferred": bool(target.get("inferred")),
    }
    if kind == "group":
        summary["name"] = ctx.normalize_text(target.get("name"))
    elif kind == "account":
        summary["name"] = ctx.normalize_text(target.get("user"))
    return summary


def describe_group_target(config: ctx.Mapping[str, ctx.Any] | None = None) -> str:
    """One-line Traditional-Chinese description of the active ``now`` target."""
    summary = summarize_group_target(config)
    kind = summary["kind"]
    if kind == "group":
        if not summary["ok"]:
            return "目前監控對象：群組 {} 不存在於設定".format(summary["name"] or "?")
        members = summary["members"]
        line = "目前監控對象：群組 {}（school={}，成員 {} 人：{}）".format(
            summary["name"] or "?",
            summary["school"] or "thu",
            len(members),
            "、".join(members) if members else "無",
        )
        skipped = summary["skipped"]
        if skipped:
            skipped_desc = "、".join(
                "{}（{}）".format(ctx.normalize_text(item.get("user")), _skip_reason_zh(item.get("reason")))
                for item in skipped
                if isinstance(item, dict)
            )
            line += "；略過 {} 人：{}".format(len(skipped), skipped_desc)
        return line
    if kind == "account":
        if not summary["ok"]:
            return "目前監控對象：帳號 {} 不存在於設定".format(summary["name"] or "?")
        tag = "（單人，自動推斷）" if summary["inferred"] else "（單人）"
        return "目前監控對象：帳號 {}{}".format(summary["name"] or "?", tag)
    if summary["reason"] == "now_empty":
        return "目前監控對象：尚未設定（now 為空）"
    return "目前監控對象：尚未設定"


def format_group_fanout_summary(group_result: ctx.Any, rollcall_type: str = "") -> str:
    """Human-readable one-liner for a ``submit_group_*`` result.

    Returns "" when the active target is not a group or when no fan-out member
    actually ran (single-account / monitor-only), so single users are not spammed."""
    if not isinstance(group_result, dict):
        return ""
    plan = group_result.get("plan") if isinstance(group_result.get("plan"), dict) else {}
    target = plan.get("target") if isinstance(plan.get("target"), dict) else {}
    if ctx.normalize_text(target.get("kind")) != "group":
        return ""
    results = group_result.get("results") or []
    if not results:
        return ""
    total = len(results)
    ok_count = sum(1 for item in results if isinstance(item, dict) and item.get("ok"))
    name = ctx.normalize_text(target.get("name")) or "?"
    type_label = ctx.normalize_text(rollcall_type)
    type_part = " {}".format(type_label) if type_label else ""
    if ok_count == total:
        return "群組 {}{} 簽到：{}/{} 成員完成".format(name, type_part, ok_count, total)
    return "群組 {}{} 簽到：{}/{} 成員完成（{} 失敗）".format(name, type_part, ok_count, total, total - ok_count)


def group_status_label(config: ctx.Mapping[str, ctx.Any] | None = None) -> str:
    """Short label for the live status line; "" when single-account/inferred/unset."""
    cfg = config if config is not None else ctx.CONFIG
    target = resolve_now_target(cfg)
    if not target.get("ok"):
        return ""
    kind = ctx.normalize_text(target.get("kind"))
    if kind == "group":
        return "群組{}".format(ctx.normalize_text(target.get("name")))
    if kind == "account" and not target.get("inferred"):
        return "帳號{}".format(ctx.normalize_text(target.get("user")))
    return ""


async def _fanout(plan: ctx.Dict[str, ctx.Any], submit_one) -> ctx.List[ctx.Dict[str, ctx.Any]]:
    original = ctx.get_active_profile(ctx.CONFIG).name
    members = [u for u in plan.get("fanout_users", []) if u.lower() != plan.get("monitor_user", "").lower()]
    results = []

    try:
        for user in members:
            try:
                ctx.switch_profile(ctx.CONFIG, user)
                # Each member MUST get its own connector and cookie jar. Sharing a
                # single connector closes it after the first member (the next
                # request raises "Session is closed"), and sharing a cookie jar
                # leaks the first member's session cookie into the rest, so they
                # would all sign in as the first member. Build per-member, exactly
                # like qr_command/qr_fanout_result do.
                session_kwargs: ctx.Dict[str, ctx.Any] = {
                    'connector': ctx.create_http_connector(),
                    'headers': {'User-Agent': ctx.random_ua()},
                    'cookie_jar': ctx.aiohttp.CookieJar(unsafe=True),
                }
                timeout = ctx.create_http_client_timeout()
                if timeout is not None:
                    session_kwargs['timeout'] = timeout
                async with ctx.aiohttp.ClientSession(**session_kwargs) as member_session:
                    cookie_loaded = False
                    if ctx.cookie_cache_enabled(ctx.CONFIG):
                        try:
                            cookie_loaded = ctx.load_session_cookies(member_session, ctx.BASE_DIR, user)
                        except Exception:
                            cookie_loaded = False

                    if not cookie_loaded or not ctx.has_session_cookie(member_session):
                        login_result = await ctx.login(member_session)
                        if not login_result.ok:
                            ctx.log_print(f"群組成員 `{user}` 自動登入失敗。")
                            results.append({"user": user, "ok": False, "status": "login_failed"})
                            continue

                    ok, status = await submit_one(member_session, user)
                    results.append({"user": user, "ok": ok, "status": status})
            except Exception as exc:
                ctx.log_print(f"群組成員 `{user}` 簽到發生異常: {exc}")
                results.append({"user": user, "ok": False, "status": f"error: {type(exc).__name__}"})
    finally:
        ctx.switch_profile(ctx.CONFIG, original)

    return results


async def submit_group_number(code: str, *, rcid: str | int | None = None, session: ctx.Any = None, config: ctx.Mapping[str, ctx.Any] | None = None) -> ctx.Dict[str, ctx.Any]:
    plan = build_group_execution_plan(config or ctx.CONFIG)
    if not plan.get("ok"):
        return {"ok": False, "status": "no_group_target", "plan": plan}
    
    rollcall_id = rcid or plan.get("target", {}).get("rollcall_id") or ""
    if not rollcall_id:
        return {"ok": False, "status": "missing_rollcall_id", "plan": plan}

    async def submit_one(member_session, user):
        request_url = '{}/api/rollcall/{}/answer_number_rollcall'.format(ctx.get_active_http_endpoints().base_url.rstrip('/'), rollcall_id)
        payload = {'deviceId': ctx.random_id(), 'numberCode': code}
        try:
            async with member_session.put(request_url, json=payload) as resp:
                body = await resp.text()
                classification = ctx.classify_number_response(resp.status, body)
                if classification.status == ctx.NumberAttemptStatus.SUCCESS:
                    verification = await ctx.verify_rollcall_on_call_fine(
                        member_session,
                        rollcall_id,
                        rollcall_type='number',
                    )
                    if verification.get('ok') and verification.get('status') == 'on_call_fine':
                        return True, "submitted"
                    return True, "submitted_unconfirmed"
                return False, classification.message or "failed"
        except Exception as exc:
            return False, str(exc)

    results = await _fanout(plan, submit_one)
    ok = all(item["ok"] for item in results) if results else True
    return {"ok": ok, "status": "submitted" if ok else "partial_failed", "count": len(results), "results": results, "plan": plan}


async def submit_group_radar(rollcall: ctx.Dict[str, ctx.Any], *, session: ctx.Any = None, config: ctx.Mapping[str, ctx.Any] | None = None) -> ctx.Dict[str, ctx.Any]:
    plan = build_group_execution_plan(config or ctx.CONFIG)
    if not plan.get("ok"):
        return {"ok": False, "status": "no_group_target", "plan": plan}
    
    async def submit_one(member_session, user):
        ok = await ctx.radar(member_session, rollcall)
        return ok, "submitted" if ok else "failed"

    results = await _fanout(plan, submit_one)
    ok = all(item["ok"] for item in results) if results else True
    return {"ok": ok, "status": "submitted" if ok else "partial_failed", "count": len(results), "results": results, "plan": plan}


async def submit_group_qr(payload_or_rollcall: str | ctx.Dict[str, ctx.Any], *, session: ctx.Any = None, config: ctx.Mapping[str, ctx.Any] | None = None) -> ctx.Dict[str, ctx.Any]:
    plan = build_group_execution_plan(config or ctx.CONFIG)
    if not plan.get("ok"):
        return {"ok": False, "status": "no_group_target", "plan": plan}
    
    results = []
    
    if isinstance(payload_or_rollcall, str):
        payload = payload_or_rollcall
        async def submit_one(member_session, user):
            ok = await ctx.submit_qr_payload(member_session, payload, progress_log_output=False)
            return ok, "submitted" if ok else "failed"
        results = await _fanout(plan, submit_one)
    else:
        rollcall = payload_or_rollcall
        rollcall_id = _rollcall_id(rollcall)
        
        if ctx.teacher_assist_configured(config or ctx.CONFIG):
            async def submit_one(member_session, user):
                ok = await ctx.submit_prepared_teacher_qr(member_session, rollcall)
                return ok, "submitted" if ok else "failed"
            results = await _fanout(plan, submit_one)
        else:
            payload = ""
            try:
                if ctx.clipboard_autosubmit_enabled(config or ctx.CONFIG):
                    read = ctx.read_clipboard_qr_payload()
                    if read.get("ok"):
                        clip_payload = str(read.get("payload") or "")
                        try:
                            clip_rcid = ctx.normalize_text(ctx.parse_qr_payload(clip_payload).rollcall_id)
                        except Exception:
                            clip_rcid = ""
                        if clip_rcid == rollcall_id:
                            payload = clip_payload
            except Exception:
                pass

            if payload:
                async def submit_one(member_session, user):
                    ok = await ctx.submit_qr_payload(member_session, payload, progress_log_output=False)
                    return ok, "submitted" if ok else "failed"
                results = await _fanout(plan, submit_one)
            else:
                return {"ok": True, "status": "skipped", "count": 0, "results": [], "plan": plan}

    ok = all(item["ok"] for item in results) if results else True
    
    payload_hash = ""
    if isinstance(payload_or_rollcall, str):
        payload_hash = ctx.hashlib.sha256(ctx.normalize_text(payload_or_rollcall).encode("utf-8")).hexdigest()[:12]

    return {"ok": ok, "status": "submitted" if ok else "partial_failed", "count": len(results), "results": results, "plan": plan, **({"payload_hash": payload_hash} if payload_hash else {})}

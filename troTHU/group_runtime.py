"""Resolve simple-config account/group targets for monitor and fan-out planning."""

from __future__ import annotations

import copy
import re
from dataclasses import dataclass

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore

try:
    from troTHU.dispatch_context import resolve_provider_endpoints, assert_provider_endpoints_coherent, _request_ssl_from_snapshot
except ImportError:  # pragma: no cover - direct script fallback
    from dispatch_context import resolve_provider_endpoints, assert_provider_endpoints_coherent, _request_ssl_from_snapshot  # type: ignore


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
    now_kind, now_base = ctx.normalize_base_url(now)
    if now_kind == "url":
        # now = a URL -> manual browser login to that site (no account needed).
        return {"ok": True, "kind": "url", "user": "", "school": ctx.derive_url_provider_key(now), "base_url": now_base}
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
    if target.get("kind") == "url":
        # Interactive browser login: single, credential-less, no fan-out.
        return {"ok": True, "target": target, "monitor_user": "", "fanout_users": [], "accounts": [], "skipped": [], "warnings": []}
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


@dataclass(frozen=True)
class GroupPlan:
    """Immutable group dispatch value constructed once before any await.

    Holds authoritative provider_key, resolved endpoints and request_ssl
    alongside monitor identity, plus the group's school/provider target.
    The plan is built from ONE deep-copied config snapshot.
    """
    provider_key: str
    endpoints: ctx.Any
    request_ssl: ctx.Any
    config_snapshot: ctx.Mapping[str, ctx.Any]
    monitor_profile: str
    monitor_user_no: str
    plan: ctx.Dict[str, ctx.Any]  # raw execution plan dict
    target_school: str


def build_group_plan(config: ctx.Mapping[str, ctx.Any] | None = None, *, dispatch_ctx: ctx.Any = None) -> GroupPlan:
    """Construct GroupPlan once from caller DispatchContext or deep-copied config.

    - If dispatch_ctx (DispatchContext) is supplied, derive snapshot/provider/endpoints/ssl from it.
    - Otherwise deep-copy the supplied (or global) config once before any await.
    The group's school/provider is taken from plan.target.school and resolved against the same snapshot.
    """
    # Snapshot + provider + endpoints + ssl — immutable, single source
    if dispatch_ctx is not None and hasattr(dispatch_ctx, "config_snapshot"):
        snapshot = dispatch_ctx.config_snapshot
        # dispatch_ctx already immutable; derive group-specific provider from target school
        base_provider = dispatch_ctx.provider_key
        base_endpoints = dispatch_ctx.endpoints
        base_ssl = dispatch_ctx.request_ssl
        monitor_profile = dispatch_ctx.profile_name
        monitor_user_no = dispatch_ctx.user_no
    else:
        cfg = config if config is not None else ctx.CONFIG
        snapshot = copy.deepcopy(cfg)
        # monitor identity from snapshot
        try:
            active = ctx.get_active_profile(snapshot)
            monitor_profile = ctx.normalize_profile_name(active.name)
            monitor_user_no = ctx.normalize_text(active.user)
        except Exception:
            monitor_profile = "default"
            monitor_user_no = ""
        # provider derivation will be overridden by group target below
        base_provider = ""
        base_endpoints = None
        base_ssl = None
        # fallback base provider/ssl from snapshot if no group target
        try:
            prov_cfg = snapshot.get("provider", {}) if isinstance(snapshot.get("provider"), dict) else {}
            base_provider_raw = ctx.normalize_text(prov_cfg.get("current")) if isinstance(prov_cfg, dict) else ""
            if base_provider_raw:
                base_provider, base_endpoints = resolve_provider_endpoints(base_provider_raw, snapshot)
        except Exception:
            pass
        try:
            base_ssl = _request_ssl_from_snapshot(snapshot)
        except Exception:
            base_ssl = None

    plan_dict = build_group_execution_plan(snapshot)
    # Determine target_school — from plan target
    target = plan_dict.get("target") if isinstance(plan_dict.get("target"), dict) else {}
    raw_school = ctx.normalize_text(target.get("school")) if isinstance(target, dict) else ""
    target_school = raw_school.lower() or "thu"

    # If group explicitly targets a school/provider different from monitor, resolve endpoints for target_school
    # NEVER mix monitor endpoints with target provider.
    if plan_dict.get("ok") and ctx.normalize_text(target.get("kind")) == "group":
        try:
            provider_key, endpoints = resolve_provider_endpoints(target_school, snapshot)
        except Exception:
            provider_key, endpoints = (target_school, base_endpoints)
        request_ssl = base_ssl
        # request_ssl already from snapshot; coherent by construction
        try:
            assert_provider_endpoints_coherent(provider_key, endpoints, snapshot)
        except AssertionError:
            raise
        except Exception:
            pass
    elif plan_dict.get("ok") and ctx.normalize_text(target.get("kind")) == "account":
        # single account: provider is snapshot's current (already resolved)
        try:
            acct_school = _school(target.get("school"))
            provider_key, endpoints = resolve_provider_endpoints(acct_school, snapshot)
        except Exception:
            provider_key, endpoints = (base_provider, base_endpoints)
        request_ssl = base_ssl
    else:
        # no valid plan or url kind
        provider_key, endpoints = (base_provider, base_endpoints)
        request_ssl = base_ssl

    # If no group target resolution happened and we still have no provider, fallback
    if not provider_key:
        provider_key = base_provider or "thu"
    if endpoints is None:
        endpoints = base_endpoints
    if request_ssl is None:
        request_ssl = base_ssl
        if request_ssl is None:
            try:
                request_ssl = _request_ssl_from_snapshot(snapshot)
            except Exception:
                request_ssl = None
    try:
        assert_provider_endpoints_coherent(provider_key, endpoints, snapshot)
    except AssertionError:
        raise
    except Exception:
        pass
    return GroupPlan(
        provider_key=provider_key,
        endpoints=endpoints,
        request_ssl=request_ssl,
        config_snapshot=snapshot,
        monitor_profile=monitor_profile,
        monitor_user_no=monitor_user_no,
        plan=plan_dict,
        target_school=target_school,
    )


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
    elif kind == "url":
        summary["name"] = ctx.normalize_text(target.get("base_url"))
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
    if kind == "url":
        return "目前監控對象：手動瀏覽器登入（{}）".format(summary["name"] or "?")
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
    if kind == "url":
        return "手動登入"
    if kind == "account" and not target.get("inferred"):
        return "帳號{}".format(ctx.normalize_text(target.get("user")))
    return ""


async def _member_login(
    member_session: ctx.Any,
    member_config: ctx.Mapping[str, ctx.Any],
    profile_name: str,
    endpoints: ctx.Any,
    request_ssl: ctx.Any,
) -> bool:
    """Login for a fan-out member without touching global CONFIG.current."""
    try:
        profiles = member_config.get("accounts", {}).get("profiles", {}) if isinstance(member_config.get("accounts"), dict) else {}
        prof = profiles.get(ctx.normalize_profile_name(profile_name)) if isinstance(profiles, dict) else None
        user = ctx.normalize_text(prof.get("user")) if isinstance(prof, dict) else ""
        passwd = ctx.normalize_text(prof.get("passwd")) if isinstance(prof, dict) else ""
        # keyring override
        try:
            kr = ctx.get_keyring_password(ctx.normalize_profile_name(profile_name), user)
            if ctx.has_real_credential(kr):
                passwd = kr
        except Exception:
            pass
        if not ctx.has_real_credential(user) or not ctx.has_real_credential(passwd):
            # fallback to legacy account in member_config
            acct = member_config.get("account", {}) if isinstance(member_config.get("account"), dict) else {}
            user2 = ctx.normalize_text(acct.get("user"))
            passwd2 = ctx.normalize_text(acct.get("passwd"))
            if ctx.has_real_credential(user2) and ctx.has_real_credential(passwd2):
                user, passwd = user2, passwd2
            else:
                return False
        client = ctx.TronHttpClient(member_session, request_ssl=request_ssl, endpoints=endpoints) if endpoints is not None else ctx.TronHttpClient(member_session, request_ssl=request_ssl)
        try:
            member_session.cookie_jar.clear()
        except Exception:
            pass
        outcome = await ctx.run_login_flow(client, user, passwd)
        if not outcome.has_session or not ctx.has_session_cookie(member_session):
            return False
        # validate session via API (mirrors auth_runtime.login)
        try:
            await client.fetch_current_semester()
        except Exception:
            try:
                member_session.cookie_jar.clear()
            except Exception:
                pass
            return False
        try:
            if ctx.cookie_cache_enabled(member_config):
                ctx.save_session_cookies(member_session, ctx.BASE_DIR, profile_name)
        except Exception:
            pass
        return True
    except Exception:
        return False


async def _fanout(group_plan: GroupPlan, submit_one) -> ctx.List[ctx.Dict[str, ctx.Any]]:
    """Fanout using GroupPlan only — no global provider/endpoint getter inside loop."""
    members = [u for u in group_plan.plan.get("fanout_users", []) if u.lower() != group_plan.plan.get("monitor_user", "").lower()]
    results: ctx.List[ctx.Dict[str, ctx.Any]] = []
    for user in members:
        # Build member_config from frozen snapshot only; provider reload has no effect.
        try:
            member_config = copy.deepcopy(group_plan.config_snapshot)
            ctx.normalize_accounts_config(member_config)
            normalized = ctx.normalize_profile_name(user)
            profiles = member_config.get("accounts", {}).get("profiles", {})
            if isinstance(profiles, dict) and normalized in profiles:
                member_config["accounts"]["current"] = normalized
                prof = profiles[normalized]
                member_config.setdefault("account", {})["user"] = ctx.normalize_text(prof.get("user", ""))
                member_config.setdefault("account", {})["passwd"] = ctx.normalize_text(prof.get("passwd", ""))
        except Exception:
            member_config = copy.deepcopy(group_plan.config_snapshot)
        try:
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
                if ctx.cookie_cache_enabled(member_config):
                    try:
                        cookie_loaded = ctx.load_session_cookies(member_session, ctx.BASE_DIR, user)
                    except Exception:
                        cookie_loaded = False

                if not cookie_loaded or not ctx.has_session_cookie(member_session):
                    ok_login = await _member_login(member_session, member_config, user, group_plan.endpoints, group_plan.request_ssl)
                    if not ok_login:
                        ctx.log_print(f"群組成員 `{user}` 自動登入失敗。")
                        results.append({"user": user, "ok": False, "status": "login_failed"})
                        continue

                ok, status = await submit_one(member_session, user, member_config, group_plan.endpoints, group_plan.request_ssl)
                results.append({"user": user, "ok": ok, "status": status})
        except Exception as exc:
            ctx.log_print(f"群組成員 `{user}` 簽到發生異常: {exc}")
            results.append({"user": user, "ok": False, "status": f"error: {type(exc).__name__}"})

    return results


_FOUR_DIGIT_RE = re.compile(r"^[0-9]{4}$")

def _coerce_number_code_strict(value: str) -> str | None:
    if value is None or isinstance(value, bool):
        return None
    if isinstance(value, int):
        text = "{:04d}".format(value) if 0 <= value <= 9999 else str(value)
    else:
        text = str(value).strip()
    return text if _FOUR_DIGIT_RE.match(text) else None


async def submit_group_number(code: str, *, rcid: str | int | None = None, session: ctx.Any = None, config: ctx.Mapping[str, ctx.Any] | None = None, group_plan: GroupPlan | None = None, provider_key: str = "", endpoints: ctx.Any = None, request_ssl: ctx.Any = None) -> ctx.Dict[str, ctx.Any]:
    # ASCII-only 0000-9999; reject Unicode Nd/fullwidth/Arabic-Indic before any mutation.
    if _coerce_number_code_strict(code) is None:
        gp_tmp = group_plan if isinstance(group_plan, GroupPlan) else build_group_plan(config)
        return {"ok": False, "status": "invalid_number_code", "message": "number_code must be ASCII 0000-9999", "plan": gp_tmp.plan}
    # Prefer explicit GroupPlan; fallback to legacy single-snapshot before await
    gp = group_plan if isinstance(group_plan, GroupPlan) else build_group_plan(config)
    plan = gp.plan
    if not plan.get("ok"):
        return {"ok": False, "status": "no_group_target", "plan": plan}

    rollcall_id = rcid or plan.get("target", {}).get("rollcall_id") or ""
    if not rollcall_id:
        return {"ok": False, "status": "missing_rollcall_id", "plan": plan}

    async def submit_one(member_session, user, member_config, gp_endpoints, gp_request_ssl):
        ep = gp_endpoints
        if ep is None:
            # Should not happen; GroupPlan is coherent
            ep = endpoints
        try:
            assert_provider_endpoints_coherent(gp.provider_key, ep, gp.config_snapshot)
        except AssertionError:
            raise
        except Exception:
            pass
        request_url = '{}/api/rollcall/{}/answer_number_rollcall'.format(ep.base_url.rstrip('/'), rollcall_id)
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
                        my_user_no=user,
                        endpoints=gp_endpoints,
                        request_ssl=gp_request_ssl,
                    )
                    if verification.get('ok') and verification.get('status') == 'on_call_fine':
                        _pk = gp.provider_key
                        ctx.mark_completed_number_rollcall(rollcall_id, code, profile_name=user, provider_key=_pk)
                        return True, "submitted"
                    return True, "submitted_unconfirmed"
                if classification.status == ctx.NumberAttemptStatus.UNKNOWN_FAILURE:
                    verification = await ctx.verify_rollcall_on_call_fine(
                        member_session,
                        rollcall_id,
                        rollcall_type='number',
                        my_user_no=user,
                        endpoints=gp_endpoints,
                        request_ssl=gp_request_ssl,
                    )
                    if verification.get('ok') and verification.get('status') == 'on_call_fine':
                        _pk = gp.provider_key
                        ctx.mark_completed_number_rollcall(rollcall_id, code, profile_name=user, provider_key=_pk)
                        return True, "submitted"
                    return True, "submitted_unconfirmed"
                return False, classification.message or "failed"
        except Exception as exc:
            return False, str(exc)

    results = await _fanout(gp, submit_one)
    ok = all(item["ok"] for item in results) if results else True
    return {"ok": ok, "status": "submitted" if ok else "partial_failed", "count": len(results), "results": results, "plan": plan}


async def submit_group_radar(rollcall: ctx.Dict[str, ctx.Any], *, session: ctx.Any = None, config: ctx.Mapping[str, ctx.Any] | None = None, group_plan: GroupPlan | None = None) -> ctx.Dict[str, ctx.Any]:
    gp = group_plan if isinstance(group_plan, GroupPlan) else build_group_plan(config)
    plan = gp.plan
    if not plan.get("ok"):
        return {"ok": False, "status": "no_group_target", "plan": plan}

    async def submit_one(member_session, user, member_config, gp_endpoints, gp_request_ssl):
        _pk = gp.provider_key
        try:
            assert_provider_endpoints_coherent(_pk, gp_endpoints, gp.config_snapshot)
        except AssertionError:
            raise
        except Exception:
            pass
        ok = await ctx.radar(member_session, rollcall, my_user_no=user, endpoints=gp_endpoints, request_ssl=gp_request_ssl)
        if ok:
            ctx.mark_completed_radar_rollcall(_rollcall_id(rollcall), profile_name=user, provider_key=_pk)
        return ok, "submitted" if ok else "failed"

    results = await _fanout(gp, submit_one)
    ok = all(item["ok"] for item in results) if results else True
    return {"ok": ok, "status": "submitted" if ok else "partial_failed", "count": len(results), "results": results, "plan": plan}


async def submit_group_self_registration(rollcall: ctx.Dict[str, ctx.Any], *, session: ctx.Any = None, config: ctx.Mapping[str, ctx.Any] | None = None, group_plan: GroupPlan | None = None) -> ctx.Dict[str, ctx.Any]:
    gp = group_plan if isinstance(group_plan, GroupPlan) else build_group_plan(config)
    plan = gp.plan
    if not plan.get("ok"):
        return {"ok": False, "status": "no_group_target", "plan": plan}

    async def submit_one(member_session, user, member_config, gp_endpoints, gp_request_ssl):
        _pk = gp.provider_key
        try:
            assert_provider_endpoints_coherent(_pk, gp_endpoints, gp.config_snapshot)
        except AssertionError:
            raise
        except Exception:
            pass
        ok = await ctx.self_registration(member_session, rollcall, my_user_no=user, endpoints=gp_endpoints, request_ssl=gp_request_ssl)
        if ok:
            ctx.mark_completed_self_registration_rollcall(_rollcall_id(rollcall), profile_name=user, provider_key=_pk)
        return ok, "submitted" if ok else "failed"

    results = await _fanout(gp, submit_one)
    ok = all(item["ok"] for item in results) if results else True
    return {"ok": ok, "status": "submitted" if ok else "partial_failed", "count": len(results), "results": results, "plan": plan}


async def submit_group_qr(payload_or_rollcall: str | ctx.Dict[str, ctx.Any], *, session: ctx.Any = None, config: ctx.Mapping[str, ctx.Any] | None = None, group_plan: GroupPlan | None = None) -> ctx.Dict[str, ctx.Any]:
    gp = group_plan if isinstance(group_plan, GroupPlan) else build_group_plan(config)
    cfg_snapshot = gp.config_snapshot
    plan = gp.plan
    if not plan.get("ok"):
        return {"ok": False, "status": "no_group_target", "plan": plan}

    results = []
    if isinstance(payload_or_rollcall, str):
        payload = payload_or_rollcall

        async def submit_one(member_session, user, member_config, gp_endpoints, gp_request_ssl):
            _pk = gp.provider_key
            try:
                assert_provider_endpoints_coherent(_pk, gp_endpoints, gp.config_snapshot)
            except AssertionError:
                raise
            except Exception:
                pass
            ok = await ctx.submit_qr_payload(member_session, payload, progress_log_output=False, profile_name=user, provider_key=_pk, my_user_no=user, endpoints=gp_endpoints, request_ssl=gp_request_ssl)
            return ok, "submitted" if ok else "failed"

        results = await _fanout(gp, submit_one)
    else:
        rollcall = payload_or_rollcall
        teacher_available = ctx.teacher_assist_configured(cfg_snapshot)
        remote_available = ctx.qr_remote_configured(cfg_snapshot)
        if not teacher_available and not remote_available:
            return {
                "ok": False,
                "status": "no_qr_source",
                "count": 0,
                "results": [],
                "plan": plan,
            }

        async def submit_one(member_session, user, member_config, gp_endpoints, gp_request_ssl):
            _pk2 = gp.provider_key
            try:
                assert_provider_endpoints_coherent(_pk2, gp_endpoints, gp.config_snapshot)
            except AssertionError:
                raise
            except Exception:
                pass
            if teacher_available:
                teacher_ok = await ctx.submit_prepared_teacher_qr(
                    member_session,
                    rollcall,
                    profile_name=user,
                    my_user_no=user,
                    provider_key=_pk2,
                    endpoints=gp_endpoints,
                    request_ssl=gp_request_ssl,
                )
                if teacher_ok:
                    return True, "submitted_teacher"
            if remote_available:
                remote_ok = await ctx.submit_remote_qr(
                    member_session,
                    rollcall,
                    profile_name=user,
                    my_user_no=user,
                    provider_key=_pk2,
                    endpoints=gp_endpoints,
                    request_ssl=gp_request_ssl,
                )
                return remote_ok, "submitted_remote" if remote_ok else "failed_remote"
            return False, "failed_teacher"

        try:
            results = await _fanout(gp, submit_one)
        finally:
            if teacher_available:
                rid = _rollcall_id(rollcall)
                for _u in gp.plan.get("fanout_users", []) or []:
                    _up = ctx.normalize_profile_name(_u)
                    _pk_member = gp.provider_key
                    try:
                        await ctx.stop_prepared_teacher_qr(rid, profile_name=_up, provider_key=_pk_member)
                    except Exception:
                        pass

    ok = all(item["ok"] for item in results) if results else True
    payload_hash = ""
    if isinstance(payload_or_rollcall, str):
        payload_hash = ctx.hashlib.sha256(ctx.normalize_text(payload_or_rollcall).encode("utf-8")).hexdigest()[:12]

    return {
        "ok": ok,
        "status": "submitted" if ok else "partial_failed",
        "count": len(results),
        "results": results,
        "plan": plan,
        **({"payload_hash": payload_hash} if payload_hash else {}),
    }

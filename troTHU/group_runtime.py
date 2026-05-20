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


async def submit_group_qr(payload: str, *, session: ctx.Any = None, config: ctx.Mapping[str, ctx.Any] | None = None) -> ctx.Dict[str, ctx.Any]:
    plan = build_group_execution_plan(config or ctx.CONFIG)
    if not plan.get("ok"):
        return {"ok": False, "status": "no_group_target", "plan": plan}
    results = []
    for user in plan.get("fanout_users", []):
        results.append({"user": user, "ok": True, "status": "planned"})
    return {"ok": True, "status": "planned", "count": len(results), "results": results, "payload_hash": ctx.hashlib.sha256(ctx.normalize_text(payload).encode("utf-8")).hexdigest()[:12]}


async def submit_group_number(code: str, *, session: ctx.Any = None, config: ctx.Mapping[str, ctx.Any] | None = None) -> ctx.Dict[str, ctx.Any]:
    plan = build_group_execution_plan(config or ctx.CONFIG)
    return {"ok": bool(plan.get("ok")), "kind": "number", "status": "planned" if plan.get("ok") else "no_group_target", "code_length": len(ctx.normalize_text(code)), "plan": plan}


async def submit_group_radar(point: ctx.Any, *, session: ctx.Any = None, config: ctx.Mapping[str, ctx.Any] | None = None) -> ctx.Dict[str, ctx.Any]:
    plan = build_group_execution_plan(config or ctx.CONFIG)
    return {"ok": bool(plan.get("ok")), "kind": "radar", "status": "planned" if plan.get("ok") else "no_group_target", "plan": plan}

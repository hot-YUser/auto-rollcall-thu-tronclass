from __future__ import annotations
import contextlib
from pathlib import Path
from typing import Any, AsyncIterator, Callable, Dict, Optional

try:
    import aiohttp
except ModuleNotFoundError:  # pragma: no cover - dependency-missing CLI fallback
    aiohttp = None  # type: ignore

try:
    from troTHU.account_store import (
        clear_session_cookies,
        cookie_cache_enabled,
        get_active_profile,
        load_session_cookies,
        save_session_cookies,
        switch_profile,
    )
    from troTHU.account_runtime_store import (
        load_runtime_state,
        mark_check_result,
        mark_login_result,
        mark_profile_error,
        runtime_profile_summary,
    )
    from troTHU.bot_status import (
        MAX_ACCOUNTS_IN_REPLY,
        build_profile_status_summary,
        format_accounts_reply,
        format_profile_status_reply,
    )
    from troTHU.bot_runtime import BotAuditEvent, BotRuntime, BotRuntimeHandlers
    from troTHU.pending_qr import list_pending_qr
except ImportError:  # pragma: no cover - script execution fallback
    from account_store import (
        clear_session_cookies,
        cookie_cache_enabled,
        get_active_profile,
        load_session_cookies,
        save_session_cookies,
        switch_profile,
    )
    from account_runtime_store import (
        load_runtime_state,
        mark_check_result,
        mark_login_result,
        mark_profile_error,
        runtime_profile_summary,
    )
    from bot_status import (
        MAX_ACCOUNTS_IN_REPLY,
        build_profile_status_summary,
        format_accounts_reply,
        format_profile_status_reply,
    )
    from bot_runtime import BotAuditEvent, BotRuntime, BotRuntimeHandlers
    from pending_qr import list_pending_qr


SessionFactory = Callable[[], Any]


class BotHandlerBridge:
    def __init__(
        self,
        config: Dict[str, Any],
        *,
        base_dir: Path,
        session_factory: Optional[SessionFactory] = None,
        tron_module: Any = None,
    ) -> None:
        self.config = config
        self.base_dir = Path(base_dir)
        self.session_factory = session_factory
        if tron_module is None:
            try:
                from troTHU import runtime_context as tron_module  # pylint: disable=import-outside-toplevel
            except ImportError:  # pragma: no cover - script execution fallback
                import runtime_context as tron_module  # type: ignore

        self.tron = tron_module

    def record_login_result(self, profile: str, result: Any) -> None:
        try:
            mark_login_result(self.base_dir, profile, result)
        except Exception:
            return

    def record_check_result(
        self,
        profile: str,
        status: str,
        *,
        rollcall_id: str = "",
        rollcall_type: str = "",
    ) -> None:
        try:
            mark_check_result(
                self.base_dir,
                profile,
                status,
                rollcall_id=rollcall_id,
                rollcall_type=rollcall_type,
            )
        except Exception:
            return

    def record_profile_error(self, profile: str, status: str, message: Any) -> None:
        try:
            mark_profile_error(self.base_dir, profile, status, message)
        except Exception:
            return

    @contextlib.contextmanager
    def profile_context(self, profile_name: str):
        original_config_profile = get_active_profile(self.config).name
        original_tron_profile = get_active_profile(self.tron.CONFIG).name
        original_base_dir = self.tron.BASE_DIR
        try:
            switch_profile(self.config, profile_name)
            if self.config is not self.tron.CONFIG:
                switch_profile(self.tron.CONFIG, profile_name)
            self.tron.BASE_DIR = self.base_dir
            yield
        finally:
            switch_profile(self.config, original_config_profile)
            if self.config is not self.tron.CONFIG:
                switch_profile(self.tron.CONFIG, original_tron_profile)
            self.tron.BASE_DIR = original_base_dir

    @contextlib.asynccontextmanager
    async def session_context(self) -> AsyncIterator[Any]:
        if self.session_factory is not None:
            candidate = self.session_factory()
        else:
            if aiohttp is None:
                raise RuntimeError("aiohttp is required for bot handlers")
            session_kwargs: Dict[str, Any] = {
                "connector": self.tron.create_http_connector(),
                "headers": {"User-Agent": self.tron.random_ua()},
            }
            timeout = self.tron.create_http_client_timeout()
            if timeout is not None:
                session_kwargs["timeout"] = timeout
            candidate = aiohttp.ClientSession(**session_kwargs)

        if hasattr(candidate, "__aenter__"):
            async with candidate as session:
                yield session
            return

        try:
            yield candidate
        finally:
            close = getattr(candidate, "close", None)
            if close is not None:
                result = close()
                if hasattr(result, "__await__"):
                    await result

    async def ensure_login(self, session: Any, *, force: bool = False):
        active = get_active_profile(self.config)
        if force:
            clear_session_cookies(self.base_dir, active.name)
            if hasattr(session, "cookie_jar"):
                session.cookie_jar.clear()
        elif cookie_cache_enabled(self.config):
            load_session_cookies(session, self.base_dir, active.name)
            if self.tron.has_session_cookie(session):
                result = self.tron.LoginResult(
                    status="success",
                    credential_source="cookie_cache",
                    user=active.user,
                    final_url="cookie-cache",
                )
                self.record_login_result(active.name, result)
                return result

        result = await self.tron.login(session)
        self.record_login_result(active.name, result)
        if result.ok and cookie_cache_enabled(self.config):
            save_session_cookies(session, self.base_dir, active.name)
        return result

    def _profile_status_details(self, profile: str, state: str) -> Dict[str, Any]:
        with self.profile_context(profile):
            active = get_active_profile(self.config)
            cookie = self.tron.cookie_report(active.name)
            pending = [
                item.to_dict()
                for item in list_pending_qr(self.base_dir)
                if item.profile == active.name
            ]
            bindings = self.tron.binding_summary(active.name)
            runtime_state = runtime_profile_summary(load_runtime_state(self.base_dir), active.name)
            course_discovery = self.tron.course_discovery_report()
            summary = build_profile_status_summary(
                active.name,
                state=state,
                cookie=cookie,
                runtime_state=runtime_state,
                pending_qr=pending,
                bindings=bindings,
                course_discovery=course_discovery,
            )
            last_login = {
                "status": self.tron.LAST_LOGIN_RESULT.status,
                "credential_source": self.tron.LAST_LOGIN_RESULT.credential_source,
                "user": self.tron.LAST_LOGIN_RESULT.user,
            }
        return {
            "summary": summary,
            "cookie": summary["cookie"],
            "pending_qr_count": summary["pending_qr_count"],
            "binding_count": summary["binding_count"],
            "adapter_counts": summary["adapter_counts"],
            "runtime_state": runtime_state,
            "last_login": last_login,
        }

    async def status(self, *, profile: str, state: str, command: Any) -> Dict[str, Any]:
        details = self._profile_status_details(profile, state)
        summary = details["summary"]
        return {
            "reply": format_profile_status_reply(summary),
            "profile": profile,
            "state": state,
            "cookie": details["cookie"],
            "pending_qr_count": details["pending_qr_count"],
            "binding_count": details["binding_count"],
            "adapter_counts": details["adapter_counts"],
            "runtime_state": details["runtime_state"],
            "last_login": details["last_login"],
            "status_summary": summary,
        }

    async def accounts(
        self,
        *,
        profiles: list[str],
        states: Dict[str, str],
        command: Any,
        admin: bool,
        total_count: int,
    ) -> Dict[str, Any]:
        summaries = [
            self._profile_status_details(profile, states.get(profile, "stopped"))["summary"]
            for profile in profiles
        ]
        truncated = len(summaries) > MAX_ACCOUNTS_IN_REPLY
        visible_summaries = summaries[:MAX_ACCOUNTS_IN_REPLY]
        return {
            "reply": format_accounts_reply(
                visible_summaries,
                total_count=total_count,
                visible_count=len(summaries),
                truncated=truncated,
            ),
            "profiles": list(profiles),
            "profile_summaries": visible_summaries,
            "total_count": total_count,
            "visible_count": len(summaries),
            "truncated": truncated,
            "admin": admin,
        }

    async def force_check(self, *, profile: str, command: Any, admin: bool) -> Dict[str, Any]:
        with self.profile_context(profile):
            async with self.session_context() as session:
                login_result = await self.ensure_login(session)
                if not login_result.ok:
                    self.record_profile_error(profile, "login_failed", login_result.status)
                    return {
                        "reply": "Force check failed: login {}.".format(login_result.status),
                        "status": "login_failed",
                        "login": login_result.status,
                    }
                result = await self.tron.check_rollcall(session, -1)
                self.record_check_result(profile, result)
        return {
            "reply": "Force check completed for {}: {}.".format(profile, result),
            "status": "ok",
            "result": result,
            "admin": admin,
        }

    async def reauth(self, *, profile: str, command: Any, admin: bool) -> Dict[str, Any]:
        with self.profile_context(profile):
            async with self.session_context() as session:
                result = await self.ensure_login(session, force=True)
                self.record_login_result(profile, result)
        return {
            "reply": "Reauth {} for {}.".format("succeeded" if result.ok else result.status, profile),
            "status": result.status,
            "ok": result.ok,
            "admin": admin,
        }

    async def qr_submit(self, *, profile: str, payload: str, command: Any) -> Dict[str, Any]:
        fanout = bool(getattr(command, "payload", {}).get("fanout"))
        if fanout:
            with self.profile_context(profile):
                async def submit_profile(_profile: str, raw_payload: str) -> int:
                    async with self.session_context() as session:
                        login_result = await self.ensure_login(session)
                        if not login_result.ok:
                            self.record_profile_error(_profile, "login_failed", login_result.status)
                            return 1
                        await self.tron.submit_qr_payload(session, raw_payload)
                        rollcall_id = ""
                        try:
                            rollcall_id = self.tron.parse_qr_payload(raw_payload).rollcall_id
                        except Exception:
                            rollcall_id = ""
                        self.record_check_result(
                            _profile,
                            "qrcode_submitted",
                            rollcall_id=rollcall_id,
                            rollcall_type="qrcode",
                        )
                    return 0

                result = await self.tron.qr_fanout_result(payload, submit_profile=submit_profile)
            status = result.get("status")
            reply = "QR fan-out {} for {} matching profile(s).".format(
                status,
                result.get("match_count", 0),
            )
            return {
                "reply": reply,
                **result,
            }

        with self.profile_context(profile):
            async with self.session_context() as session:
                login_result = await self.ensure_login(session)
                if not login_result.ok:
                    self.record_profile_error(profile, "login_failed", login_result.status)
                    return {
                        "reply": "QR submit failed: login {}.".format(login_result.status),
                        "status": "login_failed",
                        "login": login_result.status,
                    }
                await self.tron.submit_qr_payload(session, payload)
                rollcall_id = ""
                try:
                    rollcall_id = self.tron.parse_qr_payload(payload).rollcall_id
                except Exception:
                    rollcall_id = ""
                self.record_check_result(
                    profile,
                    "qrcode_submitted",
                    rollcall_id=rollcall_id,
                    rollcall_type="qrcode",
                )
        return {
            "reply": "QR payload submitted for {}.".format(profile),
            "status": "ok",
        }

    async def audit(self, *, event: BotAuditEvent) -> None:
        self.tron.log(
            event="bot_command_audit",
            status="allowed" if event.allowed else "rejected",
            message="Bot command {}: {}".format(event.action, event.reason),
            payload_excerpt=event.to_dict(),
        )


def create_bot_runtime(
    config: Dict[str, Any],
    *,
    base_dir: Path,
    session_factory: Optional[SessionFactory] = None,
) -> BotRuntime:
    bridge = BotHandlerBridge(
        config,
        base_dir=base_dir,
        session_factory=session_factory,
    )
    return BotRuntime(
        config,
        BotRuntimeHandlers(
            status=bridge.status,
            accounts=bridge.accounts,
            force_check=bridge.force_check,
            reauth=bridge.reauth,
            qr_submit=bridge.qr_submit,
            audit=bridge.audit,
        ),
        runtime_base_dir=base_dir,
    )

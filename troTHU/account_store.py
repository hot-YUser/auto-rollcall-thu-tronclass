from __future__ import annotations
import json
import os
import re
from dataclasses import dataclass
from pathlib import Path
from typing import Any, Dict, List


KEYRING_SERVICE = "troTHU"
PROFILE_NAME_PATTERN = re.compile(r"[^A-Za-z0-9_.-]+")


try:
    import keyring as _keyring  # type: ignore
except Exception:  # pragma: no cover - environment dependent
    _keyring = None


@dataclass(frozen=True)
class AccountProfile:
    name: str
    user: str = ""
    passwd: str = ""
    label: str = ""


def keyring_available() -> bool:
    return _keyring is not None


def normalize_profile_name(value: Any) -> str:
    name = PROFILE_NAME_PATTERN.sub("-", str(value or "").strip()).strip("-._")
    return name or "default"


def normalize_accounts_config(config: Dict[str, Any]) -> Dict[str, Any]:
    legacy = config.setdefault("account", {})
    if not isinstance(legacy, dict):
        legacy = {}
        config["account"] = legacy

    accounts = config.setdefault("accounts", {})
    if not isinstance(accounts, dict):
        accounts = {}
        config["accounts"] = accounts

    raw_profiles = accounts.setdefault("profiles", {})
    if not isinstance(raw_profiles, dict):
        raw_profiles = {}

    profiles: Dict[str, Dict[str, str]] = {}
    for raw_name, raw_profile in raw_profiles.items():
        profile_name = normalize_profile_name(raw_name)
        profile = raw_profile if isinstance(raw_profile, dict) else {}
        profiles[profile_name] = {
            "user": str(profile.get("user", "") or ""),
            "passwd": str(profile.get("passwd", "") or ""),
            "label": str(profile.get("label", "") or ""),
        }

    legacy_user = str(legacy.get("user", "") or "")
    legacy_passwd = str(legacy.get("passwd", "") or "")
    if not profiles:
        profiles["default"] = {
            "user": legacy_user,
            "passwd": legacy_passwd,
            "label": "legacy config",
        }

    current = normalize_profile_name(accounts.get("current") or next(iter(profiles)))
    if current not in profiles:
        current = next(iter(profiles))

    accounts["current"] = current
    accounts["profiles"] = profiles
    return accounts


def get_active_profile(config: Dict[str, Any]) -> AccountProfile:
    accounts = normalize_accounts_config(config)
    current = accounts["current"]
    profile = accounts["profiles"][current]
    return AccountProfile(
        name=current,
        user=profile.get("user", ""),
        passwd=profile.get("passwd", ""),
        label=profile.get("label", ""),
    )


def list_profiles(config: Dict[str, Any]) -> List[AccountProfile]:
    accounts = normalize_accounts_config(config)
    return [
        AccountProfile(
            name=name,
            user=profile.get("user", ""),
            passwd=profile.get("passwd", ""),
            label=profile.get("label", ""),
        )
        for name, profile in accounts["profiles"].items()
    ]


def set_profile(
    config: Dict[str, Any],
    name: str,
    user: str,
    passwd: str = "",
    label: str = "",
    make_current: bool = True,
) -> AccountProfile:
    accounts = normalize_accounts_config(config)
    profile_name = normalize_profile_name(name)
    accounts["profiles"][profile_name] = {
        "user": str(user or ""),
        "passwd": str(passwd or ""),
        "label": str(label or ""),
    }
    if make_current:
        accounts["current"] = profile_name
        config.setdefault("account", {})["user"] = str(user or "")
        config.setdefault("account", {})["passwd"] = str(passwd or "")
    return get_active_profile(config) if make_current else AccountProfile(profile_name, user, passwd, label)


def remove_profile(config: Dict[str, Any], name: str) -> bool:
    accounts = normalize_accounts_config(config)
    profile_name = normalize_profile_name(name)
    if profile_name not in accounts["profiles"]:
        return False
    if len(accounts["profiles"]) == 1:
        return False
    del accounts["profiles"][profile_name]
    if accounts["current"] == profile_name:
        accounts["current"] = next(iter(accounts["profiles"]))
    active = get_active_profile(config)
    config.setdefault("account", {})["user"] = active.user
    config.setdefault("account", {})["passwd"] = active.passwd
    return True


def switch_profile(config: Dict[str, Any], name: str) -> AccountProfile:
    accounts = normalize_accounts_config(config)
    profile_name = normalize_profile_name(name)
    if profile_name not in accounts["profiles"]:
        raise KeyError(profile_name)
    accounts["current"] = profile_name
    active = get_active_profile(config)
    config.setdefault("account", {})["user"] = active.user
    config.setdefault("account", {})["passwd"] = active.passwd
    return active


def get_keyring_password(profile_name: str, user: str) -> str:
    if _keyring is None or not user:
        return ""
    try:
        return _keyring.get_password(KEYRING_SERVICE, f"{profile_name}:{user}") or ""
    except Exception:
        return ""


def set_keyring_password(profile_name: str, user: str, password: str) -> bool:
    if _keyring is None or not user:
        return False
    try:
        _keyring.set_password(KEYRING_SERVICE, f"{profile_name}:{user}", password)
        return True
    except Exception:
        return False


def state_dir(base_dir: Path) -> Path:
    return base_dir / "state"


def cookie_cache_enabled(config: Dict[str, Any]) -> bool:
    session_config = config.setdefault("session", {})
    if not isinstance(session_config, dict):
        return True
    return bool(session_config.get("cache_cookies", True))


def cookie_path(base_dir: Path, profile_name: str) -> Path:
    return state_dir(base_dir) / "cookies" / f"{normalize_profile_name(profile_name)}.json"


def save_session_cookies(session: Any, base_dir: Path, profile_name: str) -> bool:
    path = cookie_path(base_dir, profile_name)
    path.parent.mkdir(parents=True, exist_ok=True)
    records = []
    
    import time
    import http.cookiejar
    saved_at = int(time.time())
    
    for cookie in getattr(session, "cookie_jar", []):
        expires_epoch = None
        if hasattr(cookie, "get"):
            max_age = cookie.get("max-age")
            if max_age:
                try:
                    expires_epoch = saved_at + int(max_age)
                except Exception:
                    pass
            if expires_epoch is None:
                expires_str = cookie.get("expires")
                if expires_str:
                    try:
                        expires_epoch = http.cookiejar.http2time(expires_str)
                    except Exception:
                        pass
                        
        records.append(
            {
                "key": getattr(cookie, "key", ""),
                "value": getattr(cookie, "value", ""),
                "domain": cookie.get("domain", "") if hasattr(cookie, "get") else "",
                "path": cookie.get("path", "/") if hasattr(cookie, "get") else "/",
                "expires": expires_epoch,
                "secure": bool(cookie.get("secure")) if hasattr(cookie, "get") else False,
                "httponly": bool(cookie.get("httponly")) if hasattr(cookie, "get") else False,
                "samesite": str(cookie.get("samesite") or "") if hasattr(cookie, "get") else "",
            }
        )
    output = {
        "version": 2,
        "saved_at": saved_at,
        "cookies": records
    }
    path.write_text(json.dumps(output, ensure_ascii=False, indent=2), encoding="utf-8")
    return True


def load_session_cookies(session: Any, base_dir: Path, profile_name: str) -> bool:
    path = cookie_path(base_dir, profile_name)
    if not path.exists():
        return False
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, ValueError):
        return False
        
    cookies = []
    if isinstance(data, list):
        cookies = data
    elif isinstance(data, dict) and data.get("version") == 2:
        cookies = data.get("cookies", [])
    else:
        return False
        
    if not isinstance(cookies, list):
        return False
        
    try:
        from yarl import URL
    except Exception:
        URL = None
        
    import time
    from http.cookies import SimpleCookie
    import email.utils
    
    now_epoch = time.time()
    
    for record in cookies:
        if not isinstance(record, dict):
            continue
        key = str(record.get("key", "") or "")
        value = str(record.get("value", "") or "")
        if not key:
            continue
            
        expires = record.get("expires")
        if expires is not None:
            try:
                if float(expires) < now_epoch:
                    continue
            except Exception:
                pass
                
        domain = record.get("domain", "")
        path_str = record.get("path", "/")
        
        domain_clean = str(domain or "").strip().lstrip(".")
        path_clean = str(path_str or "").strip()
        if not path_clean.startswith("/"):
            path_clean = "/" + path_clean
            
        response_url = None
        if domain_clean and URL is not None:
            try:
                response_url = URL(f"https://{domain_clean}{path_clean}")
            except Exception:
                pass
                
        c = SimpleCookie()
        c[key] = value
        
        if domain:
            c[key]["domain"] = domain
        if path_str:
            c[key]["path"] = path_str
        if expires is not None:
            try:
                c[key]["expires"] = email.utils.formatdate(float(expires), usegmt=True)
            except Exception:
                pass
        if record.get("secure"):
            c[key]["secure"] = True
        if record.get("httponly"):
            c[key]["httponly"] = True
        samesite = record.get("samesite")
        if samesite:
            c[key]["samesite"] = samesite
            
        try:
            if response_url is not None:
                session.cookie_jar.update_cookies(c, response_url=response_url)
            else:
                session.cookie_jar.update_cookies(c)
        except Exception:
            try:
                session.cookie_jar.update_cookies({key: value})
            except Exception:
                pass
    return True


_EMPTY_COOKIE_STATUS = {
    "restored": False,
    "has_session": False,
    "expired": False,
    "near_expiry": False,
    "expires_at": None,
}


def cookie_cache_status(base_dir: Path, profile_name: str) -> Dict[str, Any]:
    path = cookie_path(base_dir, profile_name)
    if not path.exists():
        return dict(_EMPTY_COOKIE_STATUS)
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except Exception:
        return dict(_EMPTY_COOKIE_STATUS)

    cookies = []
    if isinstance(data, list):
        cookies = data
    elif isinstance(data, dict) and data.get("version") == 2:
        cookies = data.get("cookies", [])
    else:
        return dict(_EMPTY_COOKIE_STATUS)

    import time
    now = time.time()
    session_cookies = [c for c in cookies if isinstance(c, dict) and c.get("key") == "session"]
    has_session = len(session_cookies) > 0

    expired = False
    near_expiry = False
    expires_at = None

    if has_session:
        has_expires = [c for c in session_cookies if c.get("expires") is not None]
        if has_expires:
            expired = all(float(c["expires"]) < now for c in has_expires)
            active_expires = [float(c["expires"]) for c in has_expires if float(c["expires"]) >= now]
            if active_expires:
                expires_at = min(active_expires)
                if expires_at < now + 86400:
                    near_expiry = True
            else:
                expires_at = min(float(c["expires"]) for c in has_expires)
        else:
            expired = False
            near_expiry = False
            expires_at = None

    return {
        "restored": True,
        "has_session": has_session,
        "expired": expired,
        "near_expiry": near_expiry,
        "expires_at": expires_at,
    }


def clear_session_cookies(base_dir: Path, profile_name: str) -> bool:
    path = cookie_path(base_dir, profile_name)
    if not path.exists():
        return False
    os.remove(path)
    return True

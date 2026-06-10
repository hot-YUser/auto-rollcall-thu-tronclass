from __future__ import annotations
import json
import time
from dataclasses import asdict, dataclass, field
from pathlib import Path
from typing import Any, Dict, List, Optional

try:
    from troTHU.debug_capture import sanitize_debug_payload
except ImportError:  # pragma: no cover - script execution fallback
    from debug_capture import sanitize_debug_payload


DEFAULT_PENDING_QR_TTL_SECONDS = 600
DEFAULT_PENDING_QR_PROVIDER = "thu"


def _normalize_provider(provider: Any) -> str:
    value = str(provider or "").strip().lower()
    return value or DEFAULT_PENDING_QR_PROVIDER


def _record_key(*, provider: Any, profile: Any, rollcall_id: Any) -> str:
    return "{}:{}:{}".format(
        _normalize_provider(provider),
        str(profile or "default"),
        str(rollcall_id or "").strip(),
    )


@dataclass(frozen=True)
class PendingQrRequest:
    profile: str
    rollcall_id: str
    rollcall_type: str = "qrcode"
    provider: str = DEFAULT_PENDING_QR_PROVIDER
    source_adapter: str = ""
    source_channel_id: str = ""
    message: str = ""
    created_at: float = field(default_factory=time.time)
    expires_at: float = field(default_factory=lambda: time.time() + DEFAULT_PENDING_QR_TTL_SECONDS)
    payload_excerpt: Dict[str, Any] = field(default_factory=dict)

    @property
    def key(self) -> str:
        return _record_key(provider=self.provider, profile=self.profile, rollcall_id=self.rollcall_id)

    def expired(self, now: Optional[float] = None) -> bool:
        return (time.time() if now is None else now) >= self.expires_at

    def to_dict(self) -> Dict[str, Any]:
        return sanitize_debug_payload(asdict(self))


def pending_qr_path(base_dir: Path) -> Path:
    return base_dir / "state" / "pending_qr.json"


def _load_records(path: Path) -> Dict[str, Dict[str, Any]]:
    if not path.exists():
        return {}
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, ValueError):
        return {}
    if not isinstance(data, dict):
        return {}
    records = data.get("pending", data)
    return records if isinstance(records, dict) else {}


def _save_records(path: Path, records: Dict[str, Dict[str, Any]]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(
        json.dumps({"pending": records}, ensure_ascii=False, indent=2, default=str) + "\n",
        encoding="utf-8",
    )


def add_pending_qr(
    base_dir: Path,
    *,
    profile: str,
    rollcall_id: Any,
    rollcall_type: str = "qrcode",
    provider: str = DEFAULT_PENDING_QR_PROVIDER,
    source_adapter: str = "",
    source_channel_id: str = "",
    message: str = "",
    payload_excerpt: Optional[Dict[str, Any]] = None,
    ttl_seconds: int = DEFAULT_PENDING_QR_TTL_SECONDS,
) -> PendingQrRequest:
    rollcall_id_text = str(rollcall_id or "").strip()
    request = PendingQrRequest(
        profile=str(profile or "default"),
        rollcall_id=rollcall_id_text,
        rollcall_type=str(rollcall_type or "qrcode"),
        provider=_normalize_provider(provider),
        source_adapter=str(source_adapter or ""),
        source_channel_id=str(source_channel_id or ""),
        message=str(message or ""),
        expires_at=time.time() + max(1, int(ttl_seconds)),
        payload_excerpt=sanitize_debug_payload(payload_excerpt or {}),
    )
    path = pending_qr_path(base_dir)
    records = prune_pending_qr(base_dir, save=False)
    if rollcall_id_text:
        records[request.key] = request.to_dict()
        _save_records(path, records)
    return request


def prune_pending_qr(base_dir: Path, *, save: bool = True) -> Dict[str, Dict[str, Any]]:
    path = pending_qr_path(base_dir)
    records = _load_records(path)
    now = time.time()
    pruned = {
        key: record
        for key, record in records.items()
        if float(record.get("expires_at") or 0) > now
    }
    if save and pruned != records:
        _save_records(path, pruned)
    return pruned


def list_pending_qr(base_dir: Path, *, include_expired: bool = False) -> List[PendingQrRequest]:
    records = _load_records(pending_qr_path(base_dir)) if include_expired else prune_pending_qr(base_dir)
    pending: List[PendingQrRequest] = []
    for record in records.values():
        if not isinstance(record, dict):
            continue
        try:
            pending.append(
                PendingQrRequest(
                    profile=str(record.get("profile") or "default"),
                    rollcall_id=str(record.get("rollcall_id") or ""),
                    rollcall_type=str(record.get("rollcall_type") or "qrcode"),
                    provider=_normalize_provider(record.get("provider")),
                    source_adapter=str(record.get("source_adapter") or ""),
                    source_channel_id=str(record.get("source_channel_id") or ""),
                    message=str(record.get("message") or ""),
                    created_at=float(record.get("created_at") or time.time()),
                    expires_at=float(record.get("expires_at") or 0),
                    payload_excerpt=record.get("payload_excerpt") if isinstance(record.get("payload_excerpt"), dict) else {},
                )
            )
        except (TypeError, ValueError):
            continue
    pending.sort(key=lambda item: item.created_at)
    return pending


def match_pending_qr(
    base_dir: Path,
    rollcall_id: Any,
    provider: str = DEFAULT_PENDING_QR_PROVIDER,
) -> List[PendingQrRequest]:
    rollcall_id_text = str(rollcall_id or "").strip()
    provider_text = _normalize_provider(provider)
    return [
        item
        for item in list_pending_qr(base_dir)
        if item.rollcall_id == rollcall_id_text and _normalize_provider(item.provider) == provider_text
    ]


def remove_pending_qr(
    base_dir: Path,
    *,
    profile: str,
    rollcall_id: Any,
    provider: str = DEFAULT_PENDING_QR_PROVIDER,
) -> bool:
    path = pending_qr_path(base_dir)
    records = prune_pending_qr(base_dir)
    provider_text = _normalize_provider(provider)
    key = _record_key(provider=provider_text, profile=profile, rollcall_id=rollcall_id)
    legacy_key = f"{profile}:{rollcall_id}"
    removed = False
    if key in records:
        del records[key]
        removed = True
    if provider_text == DEFAULT_PENDING_QR_PROVIDER and legacy_key in records:
        del records[legacy_key]
        removed = True
    if not removed:
        return False
    _save_records(path, records)
    return True

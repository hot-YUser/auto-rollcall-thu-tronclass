"""Radar rollcall payload compatibility helpers."""

from __future__ import annotations

from dataclasses import dataclass
from typing import Any, Dict, Iterable, Mapping, Optional

try:
    from troTHU.radar_solver import GeoPoint
    from troTHU.runtime_helpers import (
        RadarCoordinateResult,
        build_radar_signal,
        coerce_bool,
        normalize_text,
    )
except ImportError:  # pragma: no cover - script execution fallback
    from radar_solver import GeoPoint
    from runtime_helpers import (
        RadarCoordinateResult,
        build_radar_signal,
        coerce_bool,
        normalize_text,
    )


@dataclass(frozen=True)
class RadarLiteInfo:
    rollcall_id: str = ""
    use_beacon: bool = False
    beacon_nonce: str = ""
    source: str = "fallback"
    raw_shape: str = "empty"


def _as_mapping(value: Any) -> Optional[Mapping[str, Any]]:
    return value if isinstance(value, Mapping) else None


def _iter_mappings(payload: Any) -> Iterable[Mapping[str, Any]]:
    mapping = _as_mapping(payload)
    if mapping is None:
        return
    yield mapping
    for key in ("data", "rollcall", "lite", "result", "radar"):
        nested = _as_mapping(mapping.get(key))
        if nested is not None:
            yield nested
            radar_nested = _as_mapping(nested.get("radar"))
            if radar_nested is not None:
                yield radar_nested


def _first_value(mappings: Iterable[Mapping[str, Any]], keys: Iterable[str]) -> Any:
    key_tuple = tuple(keys)
    for mapping in mappings:
        for key in key_tuple:
            if key in mapping and mapping[key] not in (None, ""):
                return mapping[key]
    return None


def _extract_beacon_nonce(mappings: Iterable[Mapping[str, Any]]) -> str:
    mapping_tuple = tuple(mappings)
    direct = _first_value(
        mapping_tuple,
        (
            "beacon_nonce",
            "beaconNonce",
            "radar_beacon_nonce",
            "radarBeaconNonce",
            "nonce",
        ),
    )
    if direct not in (None, ""):
        return normalize_text(direct)

    for mapping in mapping_tuple:
        beacon = mapping.get("beacon")
        if isinstance(beacon, Mapping):
            nested = _first_value(
                (beacon,),
                ("nonce", "beacon_nonce", "beaconNonce", "radar_beacon_nonce"),
            )
            if nested not in (None, ""):
                return normalize_text(nested)
        elif isinstance(beacon, str) and beacon.strip().lower() not in {"true", "false", "0", "1"}:
            return normalize_text(beacon)
    return ""


def parse_radar_lite_payload(payload: Any, fallback_rollcall: Any = None) -> RadarLiteInfo:
    fallback_mappings = tuple(_iter_mappings(fallback_rollcall))
    payload_mappings = tuple(_iter_mappings(payload))
    mappings = payload_mappings + fallback_mappings

    rollcall_id = _first_value(
        mappings,
        ("rollcall_id", "rollcallId", "rollcallID", "id"),
    )
    beacon_value = _first_value(
        mappings,
        (
            "use_beacon",
            "useBeacon",
            "beacon_required",
            "beaconRequired",
            "require_beacon",
            "need_beacon",
            "needBeacon",
            "beacon",
        ),
    )
    if isinstance(beacon_value, Mapping):
        beacon_value = True
    elif isinstance(beacon_value, str) and beacon_value.strip().lower() not in {
        "0",
        "1",
        "true",
        "false",
        "yes",
        "no",
        "on",
        "off",
        "enable",
        "enabled",
        "disable",
        "disabled",
    }:
        beacon_value = True

    source = "payload" if payload_mappings else "fallback"
    raw_shape = "dict" if isinstance(payload, Mapping) else type(payload).__name__
    if isinstance(payload, Mapping):
        for key in ("data", "rollcall", "lite", "result", "radar"):
            if isinstance(payload.get(key), Mapping):
                raw_shape = f"dict:{key}"
                break

    return RadarLiteInfo(
        rollcall_id=normalize_text(rollcall_id),
        use_beacon=coerce_bool(beacon_value, False),
        beacon_nonce=_extract_beacon_nonce(mappings),
        source=source,
        raw_shape=raw_shape,
    )


def _point_lat_lon(point: Any) -> tuple[float, float]:
    if isinstance(point, GeoPoint):
        return float(point.lat), float(point.lon)
    if isinstance(point, Mapping):
        return float(point["lat"]), float(point.get("lon", point.get("lng")))
    return float(getattr(point, "lat")), float(getattr(point, "lon"))


def _normalize_user_id(user_id: Any) -> Optional[Any]:
    if user_id in (None, ""):
        return None
    return user_id


def build_radar_answer_payload(
    point: Any,
    *,
    device_id: Any,
    user_id: Any = "",
    use_beacon: bool = False,
    beacon_nonce: Any = "",
    accuracy: Any = None,
) -> Dict[str, Any]:
    lat, lon = _point_lat_lon(point)
    payload: Dict[str, Any] = {
        "deviceId": normalize_text(device_id),
        "latitude": lat,
        "longitude": lon,
        "accuracy": 60 if accuracy is None else accuracy,
        "speed": None,
        "heading": None,
        "altitude": 0,
        "altitudeAccuracy": None,
    }
    if use_beacon:
        payload["radarSignal"] = build_radar_signal(
            beacon_nonce,
            device_id,
            _normalize_user_id(user_id),  # type: ignore[arg-type]
        )
    return payload


def build_radar_attempt_diagnostic(
    *,
    label: str,
    point: Any,
    result: RadarCoordinateResult,
    payload: Mapping[str, Any],
) -> Dict[str, Any]:
    lat, lon = _point_lat_lon(point)
    sensitive_key_parts = ("token", "cookie", "password", "passwd", "secret", "session")
    payload_fields = [
        str(key)
        for key in payload.keys()
        if not any(part in str(key).lower() for part in sensitive_key_parts)
    ]
    diagnostic: Dict[str, Any] = {
        "label": normalize_text(label),
        "success": bool(result.success),
        "latitude": round(lat, 6),
        "longitude": round(lon, 6),
        "payload_fields": sorted(payload_fields),
    }
    if result.has_distance:
        diagnostic["distance"] = round(float(result.distance), 3)
    if result.error_code:
        diagnostic["error_code"] = normalize_text(result.error_code)
    if result.message:
        diagnostic["result_message"] = normalize_text(result.message)[:120]
    if result.present_hint:
        diagnostic["present_hint"] = True
    if result.present_status:
        diagnostic["present_status"] = normalize_text(result.present_status)
    return diagnostic

"""Safe Radar Assist map contract helpers.

This module prepares read-only, UI-friendly radar boundary and coordinate
summaries. It does not submit radar answers or preserve raw backend payloads.
"""

from __future__ import annotations

from typing import Any, Dict, List, Mapping, Sequence

try:  # pragma: no cover - script execution fallback
    from troTHU.providers import DEFAULT_PROVIDER, get_provider, normalize_provider_config, provider_support_report
    from troTHU.radar_solver import DEFAULT_BOUNDARY_POINTS
    from troTHU.runtime_helpers import normalize_radar_boundary_points
except ImportError:  # pragma: no cover
    from providers import DEFAULT_PROVIDER, get_provider, normalize_provider_config, provider_support_report
    from radar_solver import DEFAULT_BOUNDARY_POINTS
    from runtime_helpers import normalize_radar_boundary_points


DEFAULT_STEP_METERS = 100.0
DEFAULT_RADIUS_METERS = 20.0


def _round_coord(value: Any) -> float:
    return round(float(value), 6)


def _safe_point(point: Sequence[Any], label: str = "") -> Dict[str, Any]:
    lat = _round_coord(point[0])
    lon = _round_coord(point[1])
    result = {"lat": lat, "lon": lon}
    if label:
        result["label"] = label
    return result


def _provider_config(config: Mapping[str, Any], provider: Any = None) -> Dict[str, Any]:
    if hasattr(provider, "to_config"):
        return dict(provider.to_config())
    if isinstance(provider, Mapping):
        return dict(provider)
    if provider:
        return get_provider(str(provider)).to_config()
    provider_config = normalize_provider_config(config.get("provider", {}) if isinstance(config, Mapping) else {})
    current = str(provider_config.get("current") or DEFAULT_PROVIDER)
    available = provider_config.get("available", {})
    if isinstance(available, Mapping) and isinstance(available.get(current), Mapping):
        active = dict(available[current])
    else:
        active = get_provider(current).to_config()
    active["allow_experimental"] = bool(provider_config.get("allow_experimental"))
    return active


def _radar_config(config: Mapping[str, Any]) -> Dict[str, Any]:
    radar = config.get("radar", {}) if isinstance(config, Mapping) else {}
    return dict(radar) if isinstance(radar, Mapping) else {}


def _boundary_from_config(config: Mapping[str, Any]) -> List[List[float]]:
    radar = _radar_config(config)
    return normalize_radar_boundary_points(
        radar.get("boundary_points"),
        default_points=[[lat, lon] for lat, lon in DEFAULT_BOUNDARY_POINTS],
    )


def _center(points: Sequence[Sequence[float]]) -> Dict[str, float]:
    if not points:
        return {"lat": 0.0, "lon": 0.0}
    return {
        "lat": _round_coord(sum(point[0] for point in points) / len(points)),
        "lon": _round_coord(sum(point[1] for point in points) / len(points)),
    }


def _candidate_grid_summary(config: Mapping[str, Any]) -> Dict[str, Any]:
    radar = _radar_config(config)
    try:
        step = float(radar.get("final_grid_step_meters") or DEFAULT_STEP_METERS)
    except (TypeError, ValueError):
        step = DEFAULT_STEP_METERS
    try:
        radius = float(radar.get("final_grid_radius_meters") or DEFAULT_RADIUS_METERS)
    except (TypeError, ValueError):
        radius = DEFAULT_RADIUS_METERS
    if step < DEFAULT_STEP_METERS:
        step = DEFAULT_STEP_METERS
    if radius < 0:
        radius = DEFAULT_RADIUS_METERS
    return {
        "step_meters": round(step, 2),
        "radius_meters": None,
        "legacy_radius_meters": round(radius, 2),
        "estimated_points": None,
        "unbounded": True,
        "strategy": "unbounded_final_grid",
        "deprecated_settings": ["final_grid_radius_meters", "max_final_attempts"],
    }


def _point_in_polygon(lat: float, lon: float, boundary: Sequence[Sequence[float]]) -> bool:
    if len(boundary) < 3:
        return False
    inside = False
    j = len(boundary) - 1
    for i, point in enumerate(boundary):
        yi, xi = float(point[0]), float(point[1])
        yj, xj = float(boundary[j][0]), float(boundary[j][1])
        crosses = (xi > lon) != (xj > lon)
        if crosses:
            slope_lat = (yj - yi) * (lon - xi) / ((xj - xi) or 1e-12) + yi
            if lat < slope_lat:
                inside = not inside
        j = i
    return inside


def validate_radar_point(lat: Any, lon: Any, *, boundary: Sequence[Sequence[float]] | None = None) -> Dict[str, Any]:
    """Validate a point for Radar Assist UI usage."""
    try:
        latitude = float(lat)
        longitude = float(lon)
    except (TypeError, ValueError):
        return {"ok": False, "reason": "invalid_coordinate", "warnings": ["coordinate_not_numeric"]}
    warnings: List[str] = []
    if not (-90 <= latitude <= 90 and -180 <= longitude <= 180):
        return {"ok": False, "reason": "coordinate_out_of_range", "warnings": ["coordinate_out_of_range"]}
    result = {
        "ok": True,
        "reason": "ok",
        "point": {"lat": _round_coord(latitude), "lon": _round_coord(longitude)},
        "warnings": warnings,
    }
    if boundary:
        inside = _point_in_polygon(latitude, longitude, boundary)
        result["inside_boundary"] = inside
        if not inside:
            warnings.append("outside_boundary")
    return result


def _geojson_like(boundary: Sequence[Sequence[float]], center: Mapping[str, float]) -> Dict[str, Any]:
    coordinates = [[_round_coord(point[1]), _round_coord(point[0])] for point in boundary]
    if coordinates and coordinates[0] != coordinates[-1]:
        coordinates.append(coordinates[0])
    return {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {"label": "radar_boundary"},
                "geometry": {"type": "Polygon", "coordinates": [coordinates]},
            },
            {
                "type": "Feature",
                "properties": {"label": "center"},
                "geometry": {
                    "type": "Point",
                    "coordinates": [_round_coord(center.get("lon", 0.0)), _round_coord(center.get("lat", 0.0))],
                },
            },
        ],
    }


def _capability_warnings(provider_config: Mapping[str, Any], support: Mapping[str, Any]) -> List[str]:
    warnings: List[str] = []
    capabilities = provider_config.get("capabilities", {})
    radar_ready = bool(capabilities.get("radar")) if isinstance(capabilities, Mapping) else False
    if not radar_ready:
        warnings.append("provider_radar_capability_unknown")
    if support.get("support_level") != "ready":
        warnings.append("provider_not_daily_ready")
    return warnings


def build_radar_map_assist(config: Mapping[str, Any], *, provider: Any = None) -> Dict[str, Any]:
    """Build a safe map-assist model from local radar config and provider data."""
    provider_config = _provider_config(config, provider)
    support = provider_support_report(
        provider_config,
        allow_experimental=bool(provider_config.get("allow_experimental")),
    )
    boundary = _boundary_from_config(config)
    center = _center(boundary)
    grid = _candidate_grid_summary(config)
    warnings = _capability_warnings(provider_config, support)
    if len(boundary) < 3:
        warnings.append("boundary_too_small")
    return {
        "status": "ok" if len(boundary) >= 3 else "warning",
        "provider": str(provider_config.get("key") or DEFAULT_PROVIDER),
        "label": str(provider_config.get("label") or provider_config.get("key") or DEFAULT_PROVIDER),
        "support_level": support.get("support_level"),
        "daily_ready": bool(support.get("daily_ready")),
        "capabilities": {
            "radar": bool((provider_config.get("capabilities") or {}).get("radar"))
            if isinstance(provider_config.get("capabilities"), Mapping)
            else False,
            "course_discovery": bool((provider_config.get("capabilities") or {}).get("course_discovery"))
            if isinstance(provider_config.get("capabilities"), Mapping)
            else False,
        },
        "boundary": [_safe_point(point, "p{}".format(index + 1)) for index, point in enumerate(boundary)],
        "center": center,
        "candidate_grid": grid,
        "coordinate_precision": 6,
        "feature_collection": _geojson_like(boundary, center),
        "warnings": warnings,
        "notes": [
            "read_only_map_assist",
            "no_radar_submit",
            "no_raw_backend_payload",
        ],
    }


def format_radar_map_assist_summary(model: Mapping[str, Any]) -> List[str]:
    """Return short text lines for CLI/debug display."""
    center = model.get("center", {}) if isinstance(model.get("center"), Mapping) else {}
    grid = model.get("candidate_grid", {}) if isinstance(model.get("candidate_grid"), Mapping) else {}
    warnings = list(model.get("warnings") or [])
    return [
        "Radar Assist: {}".format(model.get("status", "unknown")),
        "Provider: {} ({})".format(model.get("provider", "-"), model.get("support_level", "unknown")),
        "Center: {}, {}".format(center.get("lat", "-"), center.get("lon", "-")),
        "Boundary points: {}".format(len(model.get("boundary") or [])),
        (
            "Candidate grid: unbounded step={}m legacy_radius={}m".format(
                grid.get("step_meters", "-"),
                grid.get("legacy_radius_meters", "-"),
            )
            if grid.get("unbounded")
            else "Candidate grid: radius={}m step={}m points~{}".format(
                grid.get("radius_meters", "-"),
                grid.get("step_meters", "-"),
                grid.get("estimated_points", "-"),
            )
        ),
        "Warnings: {}".format(", ".join(warnings) if warnings else "none"),
    ]

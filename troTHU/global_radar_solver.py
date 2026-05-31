"""Global WGS84 radar range-location helpers.

This module is dependency-free on purpose. The live radar flow can use it in
the packaged executable without adding numpy/scipy/pyproj, while tests can
exercise the geometry independently from TronClass HTTP behavior.
"""

from __future__ import annotations

import math
from dataclasses import dataclass
from typing import Iterable, List, Optional, Sequence, Tuple

try:  # pragma: no cover - package import path
    from troTHU.radar_solver import (
        WGS84_A,
        WGS84_F,
        GeoPoint,
        LocalFrame,
        LocalPoint,
        RadarGeometryError,
    )
except ImportError:  # pragma: no cover - direct script fallback
    from radar_solver import (  # type: ignore
        WGS84_A,
        WGS84_F,
        GeoPoint,
        LocalFrame,
        LocalPoint,
        RadarGeometryError,
    )


WGS84_B = WGS84_A * (1.0 - WGS84_F)
MEAN_EARTH_RADIUS_M = 6371008.8
_SQRT_CHI2_2D_95 = math.sqrt(5.991464547107979)


@dataclass(frozen=True)
class GlobalRadarSolverConfig:
    anchor_count: int = 12
    bearing_count: int = 12
    standard_radii_meters: Tuple[float, ...] = (10000.0, 3000.0, 1000.0, 300.0, 100.0)
    supplement_radii_meters: Tuple[float, ...] = (300.0, 100.0, 30.0)
    robust_f_scale_meters: float = 50.0
    measurement_sigma_meters: float = 0.289
    target_uncertainty_95_meters: float = 35.0
    max_pattern_iterations: int = 220
    max_lm_iterations: int = 60


@dataclass(frozen=True)
class GlobalDistanceObservation:
    point: GeoPoint
    distance: float
    label: str = ""


@dataclass(frozen=True)
class GlobalRadarEstimate:
    point: GeoPoint
    residual_rmse: float
    robust_cost: float
    uncertainty_95_meters: float
    observation_count: int
    iterations: int


def _normalize_longitude(lon: float) -> float:
    normalized = (float(lon) + 180.0) % 360.0 - 180.0
    if normalized == -180.0 and lon > 0.0:
        return 180.0
    return normalized


def _normalize_point(point: GeoPoint) -> GeoPoint:
    lat = max(-90.0, min(90.0, float(point.lat)))
    return GeoPoint(lat, _normalize_longitude(float(point.lon)))


def _spherical_distance_meters(left: GeoPoint, right: GeoPoint) -> float:
    lat1 = math.radians(left.lat)
    lat2 = math.radians(right.lat)
    dlat = lat2 - lat1
    dlon = math.radians(_normalize_longitude(right.lon - left.lon))
    haversine = (
        math.sin(dlat / 2.0) ** 2
        + math.cos(lat1) * math.cos(lat2) * math.sin(dlon / 2.0) ** 2
    )
    return MEAN_EARTH_RADIUS_M * 2.0 * math.atan2(
        math.sqrt(max(haversine, 0.0)),
        math.sqrt(max(1.0 - haversine, 0.0)),
    )


def _spherical_direct_point(origin: GeoPoint, bearing_degrees: float, distance_meters: float) -> GeoPoint:
    lat1 = math.radians(origin.lat)
    lon1 = math.radians(origin.lon)
    bearing = math.radians(bearing_degrees)
    angular = float(distance_meters) / MEAN_EARTH_RADIUS_M
    sin_lat1 = math.sin(lat1)
    cos_lat1 = math.cos(lat1)
    sin_angular = math.sin(angular)
    cos_angular = math.cos(angular)
    lat2 = math.asin(
        sin_lat1 * cos_angular
        + cos_lat1 * sin_angular * math.cos(bearing)
    )
    lon2 = lon1 + math.atan2(
        math.sin(bearing) * sin_angular * cos_lat1,
        cos_angular - sin_lat1 * math.sin(lat2),
    )
    return GeoPoint(math.degrees(lat2), _normalize_longitude(math.degrees(lon2)))


def wgs84_distance_meters(left: GeoPoint, right: GeoPoint) -> float:
    """Return the WGS84 ellipsoidal distance between two points in meters.

    Vincenty's inverse formula is accurate for ordinary pairs. Near-antipodal
    pairs can fail to converge, so we fall back to a spherical distance there;
    those global anchors are only used to form a robust coarse estimate.
    """
    left = _normalize_point(left)
    right = _normalize_point(right)
    if abs(left.lat - right.lat) < 1e-14 and abs(left.lon - right.lon) < 1e-14:
        return 0.0

    phi1 = math.radians(left.lat)
    phi2 = math.radians(right.lat)
    l_value = math.radians(_normalize_longitude(right.lon - left.lon))
    u1 = math.atan((1.0 - WGS84_F) * math.tan(phi1))
    u2 = math.atan((1.0 - WGS84_F) * math.tan(phi2))
    sin_u1 = math.sin(u1)
    cos_u1 = math.cos(u1)
    sin_u2 = math.sin(u2)
    cos_u2 = math.cos(u2)
    lambda_value = l_value

    for _ in range(100):
        sin_lambda = math.sin(lambda_value)
        cos_lambda = math.cos(lambda_value)
        sin_sigma = math.sqrt(
            (cos_u2 * sin_lambda) ** 2
            + (cos_u1 * sin_u2 - sin_u1 * cos_u2 * cos_lambda) ** 2
        )
        if sin_sigma == 0.0:
            return 0.0
        cos_sigma = sin_u1 * sin_u2 + cos_u1 * cos_u2 * cos_lambda
        sigma = math.atan2(sin_sigma, cos_sigma)
        sin_alpha = cos_u1 * cos_u2 * sin_lambda / sin_sigma
        cos_sq_alpha = 1.0 - sin_alpha * sin_alpha
        if cos_sq_alpha <= 1e-15:
            cos2_sigma_m = 0.0
        else:
            cos2_sigma_m = cos_sigma - 2.0 * sin_u1 * sin_u2 / cos_sq_alpha
        c_value = WGS84_F / 16.0 * cos_sq_alpha * (
            4.0 + WGS84_F * (4.0 - 3.0 * cos_sq_alpha)
        )
        previous_lambda = lambda_value
        lambda_value = l_value + (1.0 - c_value) * WGS84_F * sin_alpha * (
            sigma
            + c_value
            * sin_sigma
            * (
                cos2_sigma_m
                + c_value * cos_sigma * (-1.0 + 2.0 * cos2_sigma_m * cos2_sigma_m)
            )
        )
        if abs(lambda_value - previous_lambda) < 1e-12:
            break
    else:
        return _spherical_distance_meters(left, right)

    u_sq = cos_sq_alpha * (WGS84_A * WGS84_A - WGS84_B * WGS84_B) / (WGS84_B * WGS84_B)
    a_value = 1.0 + u_sq / 16384.0 * (
        4096.0 + u_sq * (-768.0 + u_sq * (320.0 - 175.0 * u_sq))
    )
    b_value = u_sq / 1024.0 * (
        256.0 + u_sq * (-128.0 + u_sq * (74.0 - 47.0 * u_sq))
    )
    delta_sigma = (
        b_value
        * sin_sigma
        * (
            cos2_sigma_m
            + b_value
            / 4.0
            * (
                cos_sigma * (-1.0 + 2.0 * cos2_sigma_m * cos2_sigma_m)
                - b_value
                / 6.0
                * cos2_sigma_m
                * (-3.0 + 4.0 * sin_sigma * sin_sigma)
                * (-3.0 + 4.0 * cos2_sigma_m * cos2_sigma_m)
            )
        )
    )
    return WGS84_B * a_value * (sigma - delta_sigma)


def wgs84_direct_point(origin: GeoPoint, bearing_degrees: float, distance_meters: float) -> GeoPoint:
    """Move from ``origin`` along a geodesic bearing by ``distance_meters``."""
    origin = _normalize_point(origin)
    distance = float(distance_meters)
    if abs(distance) < 1e-12:
        return origin
    alpha1 = math.radians(bearing_degrees)
    phi1 = math.radians(origin.lat)
    lambda1 = math.radians(origin.lon)
    tan_u1 = (1.0 - WGS84_F) * math.tan(phi1)
    cos_u1 = 1.0 / math.sqrt(1.0 + tan_u1 * tan_u1)
    sin_u1 = tan_u1 * cos_u1
    sigma1 = math.atan2(tan_u1, math.cos(alpha1))
    sin_alpha = cos_u1 * math.sin(alpha1)
    cos_sq_alpha = 1.0 - sin_alpha * sin_alpha
    u_sq = cos_sq_alpha * (WGS84_A * WGS84_A - WGS84_B * WGS84_B) / (WGS84_B * WGS84_B)
    a_value = 1.0 + u_sq / 16384.0 * (
        4096.0 + u_sq * (-768.0 + u_sq * (320.0 - 175.0 * u_sq))
    )
    b_value = u_sq / 1024.0 * (
        256.0 + u_sq * (-128.0 + u_sq * (74.0 - 47.0 * u_sq))
    )
    sigma = distance / (WGS84_B * a_value)

    for _ in range(100):
        cos2_sigma_m = math.cos(2.0 * sigma1 + sigma)
        sin_sigma = math.sin(sigma)
        cos_sigma = math.cos(sigma)
        delta_sigma = (
            b_value
            * sin_sigma
            * (
                cos2_sigma_m
                + b_value
                / 4.0
                * (
                    cos_sigma * (-1.0 + 2.0 * cos2_sigma_m * cos2_sigma_m)
                    - b_value
                    / 6.0
                    * cos2_sigma_m
                    * (-3.0 + 4.0 * sin_sigma * sin_sigma)
                    * (-3.0 + 4.0 * cos2_sigma_m * cos2_sigma_m)
                )
            )
        )
        previous_sigma = sigma
        sigma = distance / (WGS84_B * a_value) + delta_sigma
        if abs(sigma - previous_sigma) < 1e-12:
            break
    else:
        return _spherical_direct_point(origin, bearing_degrees, distance)

    sin_sigma = math.sin(sigma)
    cos_sigma = math.cos(sigma)
    tmp = sin_u1 * sin_sigma - cos_u1 * cos_sigma * math.cos(alpha1)
    phi2 = math.atan2(
        sin_u1 * cos_sigma + cos_u1 * sin_sigma * math.cos(alpha1),
        (1.0 - WGS84_F) * math.sqrt(sin_alpha * sin_alpha + tmp * tmp),
    )
    lambda_value = math.atan2(
        sin_sigma * math.sin(alpha1),
        cos_u1 * cos_sigma - sin_u1 * sin_sigma * math.cos(alpha1),
    )
    cos_sq_alpha = max(cos_sq_alpha, 0.0)
    c_value = WGS84_F / 16.0 * cos_sq_alpha * (
        4.0 + WGS84_F * (4.0 - 3.0 * cos_sq_alpha)
    )
    cos2_sigma_m = math.cos(2.0 * sigma1 + sigma)
    l_value = lambda_value - (1.0 - c_value) * WGS84_F * sin_alpha * (
        sigma
        + c_value
        * sin_sigma
        * (
            cos2_sigma_m
            + c_value * cos_sigma * (-1.0 + 2.0 * cos2_sigma_m * cos2_sigma_m)
        )
    )
    lon2 = lambda1 + l_value
    return GeoPoint(math.degrees(phi2), _normalize_longitude(math.degrees(lon2)))


def _unit_from_geo(point: GeoPoint) -> Tuple[float, float, float]:
    lat = math.radians(point.lat)
    lon = math.radians(point.lon)
    cos_lat = math.cos(lat)
    return (cos_lat * math.cos(lon), cos_lat * math.sin(lon), math.sin(lat))


def _geo_from_unit(vector: Sequence[float]) -> GeoPoint:
    x, y, z = vector
    norm = math.sqrt(x * x + y * y + z * z)
    if norm <= 0.0:
        raise RadarGeometryError("cannot convert a zero vector to a global point")
    x /= norm
    y /= norm
    z = max(-1.0, min(1.0, z / norm))
    return GeoPoint(math.degrees(math.asin(z)), _normalize_longitude(math.degrees(math.atan2(y, x))))


def _solve_3x3(matrix: Sequence[Sequence[float]], values: Sequence[float]) -> Optional[Tuple[float, float, float]]:
    rows = [list(row[:3]) + [float(value)] for row, value in zip(matrix[:3], values[:3])]
    for col in range(3):
        pivot = max(range(col, 3), key=lambda row: abs(rows[row][col]))
        if abs(rows[pivot][col]) < 1e-14:
            return None
        if pivot != col:
            rows[col], rows[pivot] = rows[pivot], rows[col]
        divisor = rows[col][col]
        for item in range(col, 4):
            rows[col][item] /= divisor
        for row in range(3):
            if row == col:
                continue
            factor = rows[row][col]
            for item in range(col, 4):
                rows[row][item] -= factor * rows[col][item]
    return (rows[0][3], rows[1][3], rows[2][3])


def _spherical_initial_estimate(observations: Sequence[GlobalDistanceObservation]) -> Optional[GeoPoint]:
    if len(observations) < 3:
        return None
    ata = [[0.0, 0.0, 0.0] for _ in range(3)]
    atb = [0.0, 0.0, 0.0]
    for observation in observations:
        unit = _unit_from_geo(observation.point)
        central_angle = max(0.0, min(math.pi, observation.distance / MEAN_EARTH_RADIUS_M))
        target_dot = math.cos(central_angle)
        for row in range(3):
            atb[row] += unit[row] * target_dot
            for col in range(3):
                ata[row][col] += unit[row] * unit[col]
    solved = _solve_3x3(ata, atb)
    if solved is None:
        return None
    try:
        return _geo_from_unit(solved)
    except RadarGeometryError:
        return None


def _fibonacci_points(count: int) -> Tuple[GeoPoint, ...]:
    points: List[GeoPoint] = []
    golden_angle = math.pi * (3.0 - math.sqrt(5.0))
    for index in range(max(0, int(count))):
        y = 1.0 - (2.0 * (index + 0.5) / count)
        radius = math.sqrt(max(0.0, 1.0 - y * y))
        theta = golden_angle * index
        points.append(_geo_from_unit((math.cos(theta) * radius, math.sin(theta) * radius, y)))
    return tuple(points)


def global_anchor_points(count: int = 12) -> Tuple[GeoPoint, ...]:
    """Return deterministic global anchors based on an icosahedron."""
    phi = (1.0 + math.sqrt(5.0)) / 2.0
    vertices = (
        (0.0, 1.0, phi),
        (0.0, -1.0, phi),
        (0.0, 1.0, -phi),
        (0.0, -1.0, -phi),
        (1.0, phi, 0.0),
        (-1.0, phi, 0.0),
        (1.0, -phi, 0.0),
        (-1.0, -phi, 0.0),
        (phi, 0.0, 1.0),
        (-phi, 0.0, 1.0),
        (phi, 0.0, -1.0),
        (-phi, 0.0, -1.0),
    )
    anchors = tuple(_geo_from_unit(vertex) for vertex in vertices)
    requested = max(3, int(count))
    if requested <= len(anchors):
        return anchors[:requested]
    return anchors + _fibonacci_points(requested - len(anchors))


def ring_sample_points(
    center: GeoPoint,
    radii_meters: Sequence[float],
    *,
    bearing_count: int = 12,
    bearing_offset_degrees: float = 0.0,
) -> Tuple[GeoPoint, ...]:
    points: List[GeoPoint] = []
    count = max(3, int(bearing_count))
    for radius in radii_meters:
        radius_value = abs(float(radius))
        if radius_value <= 0.0:
            continue
        for index in range(count):
            bearing = bearing_offset_degrees + 360.0 * index / count
            points.append(wgs84_direct_point(center, bearing, radius_value))
    return tuple(points)


def standard_sample_points(center: GeoPoint, config: Optional[GlobalRadarSolverConfig] = None) -> Tuple[GeoPoint, ...]:
    cfg = config or GlobalRadarSolverConfig()
    return ring_sample_points(center, cfg.standard_radii_meters, bearing_count=cfg.bearing_count)


def supplement_sample_points(center: GeoPoint, config: Optional[GlobalRadarSolverConfig] = None) -> Tuple[GeoPoint, ...]:
    cfg = config or GlobalRadarSolverConfig()
    return ring_sample_points(
        center,
        cfg.supplement_radii_meters,
        bearing_count=cfg.bearing_count,
        bearing_offset_degrees=360.0 / max(3, cfg.bearing_count) / 2.0,
    )


def _coerce_float_tuple(value: object, default: Tuple[float, ...]) -> Tuple[float, ...]:
    if isinstance(value, str):
        items: Iterable[object] = [item.strip() for item in value.split(",")]
    elif isinstance(value, Iterable):
        items = value  # type: ignore[assignment]
    else:
        return default
    output: List[float] = []
    for item in items:
        try:
            numeric = abs(float(item))
        except (TypeError, ValueError):
            return default
        if numeric > 0.0:
            output.append(numeric)
    return tuple(output) or default


def global_radar_solver_config_from_mapping(value: object) -> GlobalRadarSolverConfig:
    if not isinstance(value, dict):
        return GlobalRadarSolverConfig()
    default = GlobalRadarSolverConfig()

    def positive_int(key: str, fallback: int, minimum: int = 1, maximum: int = 1000) -> int:
        try:
            numeric = int(value.get(key, fallback))
        except (TypeError, ValueError):
            numeric = fallback
        return max(minimum, min(maximum, numeric))

    def positive_float(key: str, fallback: float, minimum: float = 0.0, maximum: float = 1_000_000.0) -> float:
        try:
            numeric = float(value.get(key, fallback))
        except (TypeError, ValueError):
            numeric = fallback
        return max(minimum, min(maximum, numeric))

    return GlobalRadarSolverConfig(
        anchor_count=positive_int("anchor_count", default.anchor_count, minimum=3, maximum=120),
        bearing_count=positive_int("bearing_count", default.bearing_count, minimum=3, maximum=72),
        standard_radii_meters=_coerce_float_tuple(
            value.get("standard_radii_meters", value.get("standard_radii", default.standard_radii_meters)),
            default.standard_radii_meters,
        ),
        supplement_radii_meters=_coerce_float_tuple(
            value.get("supplement_radii_meters", value.get("supplement_radii", default.supplement_radii_meters)),
            default.supplement_radii_meters,
        ),
        robust_f_scale_meters=positive_float("robust_f_scale_meters", default.robust_f_scale_meters, minimum=1.0),
        measurement_sigma_meters=positive_float("measurement_sigma_meters", default.measurement_sigma_meters, minimum=0.01),
        target_uncertainty_95_meters=positive_float(
            "target_uncertainty_95_meters",
            default.target_uncertainty_95_meters,
            minimum=1.0,
        ),
        max_pattern_iterations=positive_int(
            "max_pattern_iterations",
            default.max_pattern_iterations,
            minimum=20,
            maximum=2000,
        ),
        max_lm_iterations=positive_int(
            "max_lm_iterations",
            default.max_lm_iterations,
            minimum=5,
            maximum=200,
        ),
    )


def _soft_l1_cost(residual: float, f_scale: float) -> float:
    scale = max(float(f_scale), 1.0)
    value = residual / scale
    return 2.0 * scale * scale * (math.sqrt(1.0 + value * value) - 1.0)


def _robust_weight(residual: float, f_scale: float) -> float:
    scale = max(float(f_scale), 1.0)
    value = residual / scale
    return 1.0 / math.sqrt(1.0 + value * value)


def _residuals(
    point: GeoPoint,
    observations: Sequence[GlobalDistanceObservation],
) -> Tuple[float, ...]:
    return tuple(wgs84_distance_meters(point, observation.point) - observation.distance for observation in observations)


def _rmse(residuals: Sequence[float]) -> float:
    if not residuals:
        return float("inf")
    return math.sqrt(sum(residual * residual for residual in residuals) / len(residuals))


def _robust_cost(
    point: GeoPoint,
    observations: Sequence[GlobalDistanceObservation],
    config: GlobalRadarSolverConfig,
) -> float:
    return sum(
        _soft_l1_cost(residual, config.robust_f_scale_meters)
        for residual in _residuals(point, observations)
    )


def _best_seed(
    observations: Sequence[GlobalDistanceObservation],
    config: GlobalRadarSolverConfig,
    initial: Optional[GeoPoint],
) -> GeoPoint:
    candidates: List[GeoPoint] = []
    if initial is not None:
        candidates.append(_normalize_point(initial))
    spherical = _spherical_initial_estimate(observations)
    if spherical is not None:
        candidates.append(spherical)
    candidates.extend(global_anchor_points(config.anchor_count))
    candidates.extend(_fibonacci_points(36))
    if not candidates:
        raise RadarGeometryError("could not build a global radar initial estimate")
    return min(candidates, key=lambda point: _robust_cost(point, observations, config))


def _pattern_radii(initial: Optional[GeoPoint]) -> Tuple[float, ...]:
    if initial is None:
        return (
            2000000.0,
            1000000.0,
            500000.0,
            250000.0,
            100000.0,
            50000.0,
            20000.0,
            10000.0,
            5000.0,
            2000.0,
            1000.0,
            500.0,
            200.0,
            100.0,
            50.0,
            20.0,
            10.0,
            5.0,
            2.0,
            1.0,
        )
    return (
        50000.0,
        20000.0,
        10000.0,
        5000.0,
        2000.0,
        1000.0,
        500.0,
        200.0,
        100.0,
        50.0,
        20.0,
        10.0,
        5.0,
        2.0,
        1.0,
    )


def _pattern_search(
    start: GeoPoint,
    observations: Sequence[GlobalDistanceObservation],
    config: GlobalRadarSolverConfig,
    initial: Optional[GeoPoint],
) -> Tuple[GeoPoint, int]:
    current = _normalize_point(start)
    current_cost = _robust_cost(current, observations, config)
    iterations = 0
    bearings = tuple(360.0 * index / 16.0 for index in range(16))
    for radius in _pattern_radii(initial):
        improved = True
        local_steps = 0
        while improved and iterations < config.max_pattern_iterations and local_steps < 20:
            improved = False
            local_steps += 1
            iterations += 1
            best_point = current
            best_cost = current_cost
            for bearing in bearings:
                candidate = wgs84_direct_point(current, bearing, radius)
                cost = _robust_cost(candidate, observations, config)
                if cost + 1e-9 < best_cost:
                    best_cost = cost
                    best_point = candidate
            if best_point != current:
                current = best_point
                current_cost = best_cost
                improved = True
    return current, iterations


def _solve_2x2(
    a11: float,
    a12: float,
    a22: float,
    b1: float,
    b2: float,
) -> Optional[Tuple[float, float]]:
    determinant = a11 * a22 - a12 * a12
    if abs(determinant) < 1e-18:
        return None
    return ((b1 * a22 - a12 * b2) / determinant, (a11 * b2 - b1 * a12) / determinant)


def _least_squares_refine(
    start: GeoPoint,
    observations: Sequence[GlobalDistanceObservation],
    config: GlobalRadarSolverConfig,
) -> Tuple[GeoPoint, int]:
    frame = LocalFrame.from_points([start])
    current = LocalPoint(0.0, 0.0)
    damping = 1e-3
    iterations = 0

    def point_from_local(point: LocalPoint) -> GeoPoint:
        return _normalize_point(frame.to_geo(point))

    def cost_at(point: LocalPoint) -> float:
        return _robust_cost(point_from_local(point), observations, config)

    current_cost = cost_at(current)
    for iterations in range(1, config.max_lm_iterations + 1):
        geo = point_from_local(current)
        residuals = _residuals(geo, observations)
        east_geo = point_from_local(LocalPoint(current.x + 1.0, current.y))
        north_geo = point_from_local(LocalPoint(current.x, current.y + 1.0))
        east_residuals = _residuals(east_geo, observations)
        north_residuals = _residuals(north_geo, observations)
        h11 = h12 = h22 = 0.0
        g1 = g2 = 0.0
        for residual, east_residual, north_residual in zip(residuals, east_residuals, north_residuals):
            weight = _robust_weight(residual, config.robust_f_scale_meters)
            j1 = east_residual - residual
            j2 = north_residual - residual
            h11 += weight * j1 * j1
            h12 += weight * j1 * j2
            h22 += weight * j2 * j2
            g1 += weight * j1 * residual
            g2 += weight * j2 * residual
        solved = _solve_2x2(
            h11 + damping * max(h11, 1.0),
            h12,
            h22 + damping * max(h22, 1.0),
            -g1,
            -g2,
        )
        if solved is None:
            break
        step_x, step_y = solved
        step_norm = math.hypot(step_x, step_y)
        if step_norm > 25000.0:
            scale = 25000.0 / step_norm
            step_x *= scale
            step_y *= scale
            step_norm = 25000.0
        candidate = LocalPoint(current.x + step_x, current.y + step_y)
        candidate_cost = cost_at(candidate)
        if candidate_cost <= current_cost:
            current = candidate
            current_cost = candidate_cost
            damping = max(damping * 0.35, 1e-12)
            if step_norm < 1e-4:
                break
        else:
            damping = min(damping * 8.0, 1e12)
    return point_from_local(current), iterations


def _uncertainty_95(
    point: GeoPoint,
    observations: Sequence[GlobalDistanceObservation],
    config: GlobalRadarSolverConfig,
    residual_rmse: float,
) -> float:
    if len(observations) < 3:
        return float("inf")
    frame = LocalFrame.from_points([point])
    base = _residuals(point, observations)
    east_point = _normalize_point(frame.to_geo(LocalPoint(1.0, 0.0)))
    north_point = _normalize_point(frame.to_geo(LocalPoint(0.0, 1.0)))
    east = _residuals(east_point, observations)
    north = _residuals(north_point, observations)
    h11 = h12 = h22 = 0.0
    for residual, east_residual, north_residual in zip(base, east, north):
        weight = _robust_weight(residual, config.robust_f_scale_meters)
        j1 = east_residual - residual
        j2 = north_residual - residual
        h11 += weight * j1 * j1
        h12 += weight * j1 * j2
        h22 += weight * j2 * j2
    determinant = h11 * h22 - h12 * h12
    if determinant <= 1e-18:
        return float("inf")
    inv11 = h22 / determinant
    inv12 = -h12 / determinant
    inv22 = h11 / determinant
    trace = inv11 + inv22
    spread = math.sqrt(max(0.0, (inv11 - inv22) * (inv11 - inv22) + 4.0 * inv12 * inv12))
    max_variance_unit = max(0.0, (trace + spread) / 2.0)
    sigma = max(config.measurement_sigma_meters, residual_rmse)
    return math.sqrt(max_variance_unit) * sigma * _SQRT_CHI2_2D_95


def solve_global_radar(
    observations: Sequence[GlobalDistanceObservation],
    *,
    config: Optional[GlobalRadarSolverConfig] = None,
    initial: Optional[GeoPoint] = None,
) -> GlobalRadarEstimate:
    cfg = config or GlobalRadarSolverConfig()
    normalized: List[GlobalDistanceObservation] = []
    for observation in observations:
        try:
            distance = float(observation.distance)
        except (TypeError, ValueError):
            raise RadarGeometryError("global radar distance observations must be numeric")
        if distance < 0.0:
            raise RadarGeometryError("global radar distance observations must be non-negative")
        normalized.append(
            GlobalDistanceObservation(
                _normalize_point(observation.point),
                distance,
                observation.label,
            )
        )
    if len(normalized) < 3:
        raise RadarGeometryError("at least three global radar observations are required")

    seed = _best_seed(normalized, cfg, initial)
    patterned, pattern_iterations = _pattern_search(seed, normalized, cfg, initial)
    refined, lm_iterations = _least_squares_refine(patterned, normalized, cfg)
    small_patterned, small_iterations = _pattern_search(refined, normalized, cfg, refined)
    residuals = _residuals(small_patterned, normalized)
    rmse = _rmse(residuals)
    cost = _robust_cost(small_patterned, normalized, cfg)
    uncertainty = _uncertainty_95(small_patterned, normalized, cfg, rmse)
    return GlobalRadarEstimate(
        point=small_patterned,
        residual_rmse=rmse,
        robust_cost=cost,
        uncertainty_95_meters=uncertainty,
        observation_count=len(normalized),
        iterations=pattern_iterations + lm_iterations + small_iterations,
    )


def should_request_supplement(
    estimate: GlobalRadarEstimate,
    config: Optional[GlobalRadarSolverConfig] = None,
) -> bool:
    cfg = config or GlobalRadarSolverConfig()
    if not math.isfinite(estimate.uncertainty_95_meters):
        return True
    if estimate.uncertainty_95_meters > cfg.target_uncertainty_95_meters:
        return True
    return estimate.residual_rmse > max(cfg.robust_f_scale_meters, cfg.target_uncertainty_95_meters)

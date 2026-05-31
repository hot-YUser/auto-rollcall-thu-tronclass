"""Radar rollcall geometry helpers.

The functions in this module are deliberately dependency-free. They keep the
live HTTP flow out of the geometry code so projection, probe planning, and
least-squares behavior can be tested offline.
"""

from __future__ import annotations

import heapq
import itertools
import math
from dataclasses import dataclass
from typing import Iterator, List, Optional, Sequence, Tuple


WGS84_A = 6378137.0
WGS84_F = 1.0 / 298.257223563
WGS84_E2 = WGS84_F * (2.0 - WGS84_F)

DEFAULT_BOUNDARY_POINTS: Tuple[Tuple[float, float], ...] = (
    (24.174503, 120.611990),
    (24.183279, 120.613658),
    (24.181276523213068, 120.5937236680773),
    (24.17735264149224, 120.59779550644511),
)


@dataclass(frozen=True)
class GeoPoint:
    lat: float
    lon: float


@dataclass(frozen=True)
class LocalPoint:
    x: float
    y: float


@dataclass(frozen=True)
class DistanceObservation:
    point: LocalPoint
    distance: float


@dataclass(frozen=True)
class ProbePlan:
    frame: "LocalFrame"
    boundary: Tuple[GeoPoint, ...]
    hull: Tuple[LocalPoint, ...]
    probes: Tuple[LocalPoint, ...]

    @property
    def geo_probes(self) -> Tuple[GeoPoint, ...]:
        return tuple(self.frame.to_geo(point) for point in self.probes)


@dataclass(frozen=True)
class SolveResult:
    point: LocalPoint
    residual_rmse: float
    iterations: int


@dataclass(frozen=True)
class GridCandidate:
    point: GeoPoint
    ring: int
    east_offset: float
    north_offset: float


class RadarGeometryError(ValueError):
    """Raised when a radar geometry problem is degenerate."""


def _dot(left: Sequence[float], right: Sequence[float]) -> float:
    return sum(a * b for a, b in zip(left, right))


def _sub(left: Sequence[float], right: Sequence[float]) -> Tuple[float, float, float]:
    return (left[0] - right[0], left[1] - right[1], left[2] - right[2])


def _llh_to_ecef(point: GeoPoint, height: float = 0.0) -> Tuple[float, float, float]:
    lat = math.radians(point.lat)
    lon = math.radians(point.lon)
    sin_lat = math.sin(lat)
    cos_lat = math.cos(lat)
    normal = WGS84_A / math.sqrt(1.0 - WGS84_E2 * sin_lat * sin_lat)
    return (
        (normal + height) * cos_lat * math.cos(lon),
        (normal + height) * cos_lat * math.sin(lon),
        (normal * (1.0 - WGS84_E2) + height) * sin_lat,
    )


def _ecef_to_llh(ecef: Sequence[float]) -> GeoPoint:
    x, y, z = ecef
    lon = math.atan2(y, x)
    horizontal = math.hypot(x, y)
    lat = math.atan2(z, horizontal * (1.0 - WGS84_E2))
    height = 0.0

    for _ in range(12):
        sin_lat = math.sin(lat)
        normal = WGS84_A / math.sqrt(1.0 - WGS84_E2 * sin_lat * sin_lat)
        cos_lat = math.cos(lat)
        if abs(cos_lat) < 1e-15:
            height = z / max(abs(sin_lat), 1e-15) - normal * (1.0 - WGS84_E2)
        else:
            height = horizontal / cos_lat - normal
        next_lat = math.atan2(
            z,
            horizontal * (1.0 - WGS84_E2 * normal / (normal + height)),
        )
        if abs(next_lat - lat) < 1e-14:
            lat = next_lat
            break
        lat = next_lat

    return GeoPoint(math.degrees(lat), math.degrees(lon))


def _enu_basis(origin: GeoPoint) -> Tuple[Tuple[float, float, float], ...]:
    lat = math.radians(origin.lat)
    lon = math.radians(origin.lon)
    return (
        (-math.sin(lon), math.cos(lon), 0.0),
        (
            -math.sin(lat) * math.cos(lon),
            -math.sin(lat) * math.sin(lon),
            math.cos(lat),
        ),
        (
            math.cos(lat) * math.cos(lon),
            math.cos(lat) * math.sin(lon),
            math.sin(lat),
        ),
    )


@dataclass(frozen=True)
class LocalFrame:
    origin: GeoPoint
    _origin_ecef: Tuple[float, float, float]
    _basis: Tuple[Tuple[float, float, float], ...]

    @classmethod
    def from_points(cls, points: Sequence[GeoPoint]) -> "LocalFrame":
        if not points:
            raise RadarGeometryError("at least one point is required to build a local frame")
        origin = GeoPoint(
            sum(point.lat for point in points) / len(points),
            sum(point.lon for point in points) / len(points),
        )
        return cls(origin=origin, _origin_ecef=_llh_to_ecef(origin), _basis=_enu_basis(origin))

    def to_local(self, point: GeoPoint) -> LocalPoint:
        delta = _sub(_llh_to_ecef(point), self._origin_ecef)
        return LocalPoint(_dot(self._basis[0], delta), _dot(self._basis[1], delta))

    def to_geo(self, point: LocalPoint) -> GeoPoint:
        east, north, up = self._basis
        delta = (
            east[0] * point.x + north[0] * point.y,
            east[1] * point.x + north[1] * point.y,
            east[2] * point.x + north[2] * point.y,
        )
        ecef = (
            self._origin_ecef[0] + delta[0],
            self._origin_ecef[1] + delta[1],
            self._origin_ecef[2] + delta[2],
        )
        return _ecef_to_llh(ecef)


def normalize_geo_points(points: Sequence[object]) -> Tuple[GeoPoint, ...]:
    normalized: List[GeoPoint] = []
    for item in points:
        if isinstance(item, GeoPoint):
            point = item
        elif isinstance(item, dict):
            point = GeoPoint(float(item["lat"]), float(item.get("lon", item.get("lng"))))
        else:
            lat, lon = item  # type: ignore[misc]
            point = GeoPoint(float(lat), float(lon))
        normalized.append(point)
    if len(normalized) < 3:
        raise RadarGeometryError("at least three boundary points are required")
    return tuple(normalized)


def distance(left: LocalPoint, right: LocalPoint) -> float:
    return math.hypot(left.x - right.x, left.y - right.y)


def polygon_area(points: Sequence[LocalPoint]) -> float:
    if len(points) < 3:
        return 0.0
    total = 0.0
    for index, point in enumerate(points):
        next_point = points[(index + 1) % len(points)]
        total += point.x * next_point.y - next_point.x * point.y
    return 0.5 * total


def polygon_centroid(points: Sequence[LocalPoint]) -> LocalPoint:
    area = polygon_area(points)
    if abs(area) < 1e-9:
        return LocalPoint(
            sum(point.x for point in points) / len(points),
            sum(point.y for point in points) / len(points),
        )

    cx = 0.0
    cy = 0.0
    for index, point in enumerate(points):
        next_point = points[(index + 1) % len(points)]
        cross = point.x * next_point.y - next_point.x * point.y
        cx += (point.x + next_point.x) * cross
        cy += (point.y + next_point.y) * cross
    scale = 1.0 / (6.0 * area)
    return LocalPoint(cx * scale, cy * scale)


def _cross(origin: LocalPoint, left: LocalPoint, right: LocalPoint) -> float:
    return (left.x - origin.x) * (right.y - origin.y) - (
        left.y - origin.y
    ) * (right.x - origin.x)


def convex_hull(points: Sequence[LocalPoint]) -> Tuple[LocalPoint, ...]:
    unique = sorted({(point.x, point.y) for point in points})
    if len(unique) <= 1:
        return tuple(LocalPoint(x, y) for x, y in unique)

    sorted_points = [LocalPoint(x, y) for x, y in unique]
    lower: List[LocalPoint] = []
    for point in sorted_points:
        while len(lower) >= 2 and _cross(lower[-2], lower[-1], point) <= 0.0:
            lower.pop()
        lower.append(point)

    upper: List[LocalPoint] = []
    for point in reversed(sorted_points):
        while len(upper) >= 2 and _cross(upper[-2], upper[-1], point) <= 0.0:
            upper.pop()
        upper.append(point)

    hull = tuple(lower[:-1] + upper[:-1])
    if len(hull) < 3 or abs(polygon_area(hull)) < 1e-6:
        raise RadarGeometryError("boundary points are degenerate")
    return hull


def point_in_polygon(
    point: LocalPoint,
    polygon: Sequence[LocalPoint],
    tolerance: float = 1e-9,
) -> bool:
    inside = False
    previous = polygon[-1]
    for current in polygon:
        edge_cross = _cross(previous, current, point)
        if abs(edge_cross) <= tolerance and (
            min(previous.x, current.x) - tolerance
            <= point.x
            <= max(previous.x, current.x) + tolerance
            and min(previous.y, current.y) - tolerance
            <= point.y
            <= max(previous.y, current.y) + tolerance
        ):
            return True
        if (current.y > point.y) != (previous.y > point.y):
            slope_x = (
                (previous.x - current.x) * (point.y - current.y) / (previous.y - current.y)
                + current.x
            )
            if point.x < slope_x:
                inside = not inside
        previous = current
    return inside


def _equilateral(center: LocalPoint, radius: float, angle: float) -> Tuple[LocalPoint, LocalPoint, LocalPoint]:
    return tuple(
        LocalPoint(
            center.x + radius * math.cos(angle + 2.0 * math.pi * index / 3.0),
            center.y + radius * math.sin(angle + 2.0 * math.pi * index / 3.0),
        )
        for index in range(3)
    )  # type: ignore[return-value]


def _enclosing_equilateral(
    hull: Sequence[LocalPoint],
    center: LocalPoint,
    outside_scale: float,
) -> Tuple[LocalPoint, LocalPoint, LocalPoint]:
    max_radius = max(distance(center, point) for point in hull)
    base_radius = max(max_radius * max(outside_scale, 1.05), 100.0)
    best: Optional[Tuple[float, Tuple[LocalPoint, LocalPoint, LocalPoint]]] = None

    for step in range(36):
        angle = math.radians(step * 5.0)
        radius = base_radius
        for _ in range(40):
            triangle = _equilateral(center, radius, angle)
            if all(point_in_polygon(point, triangle, tolerance=1e-7) for point in hull):
                if best is None or radius < best[0]:
                    best = (radius, triangle)
                break
            radius *= 1.08

    if best is None:
        raise RadarGeometryError("could not build an enclosing radar probe triangle")
    return best[1]


def _largest_hull_triangle(hull: Sequence[LocalPoint]) -> Tuple[LocalPoint, LocalPoint, LocalPoint]:
    best_area = -1.0
    best_triangle: Optional[Tuple[LocalPoint, LocalPoint, LocalPoint]] = None
    for triangle in itertools.combinations(hull, 3):
        area = abs(polygon_area(triangle))
        if area > best_area:
            best_area = area
            best_triangle = triangle
    if best_triangle is None:
        raise RadarGeometryError("could not choose boundary probes")
    return best_triangle


def build_probe_plan(
    boundary_points: Sequence[object] = DEFAULT_BOUNDARY_POINTS,
    *,
    allow_outside: bool = True,
    outside_scale: float = 1.6,
) -> ProbePlan:
    boundary = normalize_geo_points(boundary_points)
    frame = LocalFrame.from_points(boundary)
    local_points = tuple(frame.to_local(point) for point in boundary)
    hull = convex_hull(local_points)
    center = polygon_centroid(hull)
    probes = (
        _enclosing_equilateral(hull, center, outside_scale)
        if allow_outside
        else _largest_hull_triangle(hull)
    )
    return ProbePlan(frame=frame, boundary=boundary, hull=hull, probes=probes)


def radical_center(observations: Sequence[DistanceObservation]) -> LocalPoint:
    if len(observations) < 3:
        raise RadarGeometryError("three observations are required for a radical center")
    first, second, third = observations[:3]
    p1, p2, p3 = first.point, second.point, third.point
    a11 = 2.0 * (p2.x - p1.x)
    a12 = 2.0 * (p2.y - p1.y)
    a21 = 2.0 * (p3.x - p1.x)
    a22 = 2.0 * (p3.y - p1.y)
    b1 = (
        first.distance * first.distance
        - second.distance * second.distance
        + p2.x * p2.x
        - p1.x * p1.x
        + p2.y * p2.y
        - p1.y * p1.y
    )
    b2 = (
        first.distance * first.distance
        - third.distance * third.distance
        + p3.x * p3.x
        - p1.x * p1.x
        + p3.y * p3.y
        - p1.y * p1.y
    )
    determinant = a11 * a22 - a12 * a21
    if abs(determinant) < 1e-9:
        raise RadarGeometryError("radar observations are nearly collinear")
    return LocalPoint((b1 * a22 - a12 * b2) / determinant, (a11 * b2 - b1 * a21) / determinant)


def _fallback_initial(observations: Sequence[DistanceObservation]) -> LocalPoint:
    return LocalPoint(
        sum(observation.point.x for observation in observations) / len(observations),
        sum(observation.point.y for observation in observations) / len(observations),
    )


def _residual_cost(point: LocalPoint, observations: Sequence[DistanceObservation]) -> float:
    total = 0.0
    for observation in observations:
        predicted = max(distance(point, observation.point), 1e-9)
        residual = predicted - observation.distance
        weight = 1.0 / max(observation.distance * observation.distance, 1.0)
        total += weight * residual * residual
    return total


def solve_position(
    observations: Sequence[DistanceObservation],
    *,
    initial: Optional[LocalPoint] = None,
    max_iterations: int = 80,
) -> SolveResult:
    if len(observations) < 3:
        raise RadarGeometryError("at least three distance observations are required")
    if any(observation.distance < 0.0 for observation in observations):
        raise RadarGeometryError("distance observations must be non-negative")

    try:
        current = initial or radical_center(observations)
    except RadarGeometryError:
        current = initial or _fallback_initial(observations)

    damping = 1e-3
    iterations = 0
    for iterations in range(1, max_iterations + 1):
        h11 = h12 = h22 = 0.0
        g1 = g2 = 0.0
        for observation in observations:
            dx = current.x - observation.point.x
            dy = current.y - observation.point.y
            predicted = max(math.hypot(dx, dy), 1e-9)
            residual = predicted - observation.distance
            weight = 1.0 / max(observation.distance * observation.distance, 1.0)
            j1 = dx / predicted
            j2 = dy / predicted
            h11 += weight * j1 * j1
            h12 += weight * j1 * j2
            h22 += weight * j2 * j2
            g1 += weight * j1 * residual
            g2 += weight * j2 * residual

        a11 = h11 + damping * max(h11, 1.0)
        a12 = h12
        a22 = h22 + damping * max(h22, 1.0)
        determinant = a11 * a22 - a12 * a12
        if abs(determinant) < 1e-18:
            break

        step_x = (-g1 * a22 + a12 * g2) / determinant
        step_y = (a12 * g1 - a11 * g2) / determinant
        candidate = LocalPoint(current.x + step_x, current.y + step_y)

        if _residual_cost(candidate, observations) <= _residual_cost(current, observations):
            current = candidate
            damping = max(damping * 0.35, 1e-12)
            if math.hypot(step_x, step_y) < 1e-6:
                break
        else:
            damping = min(damping * 8.0, 1e12)

    rmse = math.sqrt(
        sum((distance(current, observation.point) - observation.distance) ** 2 for observation in observations)
        / len(observations)
    )
    return SolveResult(point=current, residual_rmse=rmse, iterations=iterations)


def gdop(target: LocalPoint, probes: Sequence[LocalPoint]) -> float:
    h11 = h12 = h22 = 0.0
    for probe in probes:
        dx = target.x - probe.x
        dy = target.y - probe.y
        dist = max(math.hypot(dx, dy), 1e-9)
        ux = dx / dist
        uy = dy / dist
        h11 += ux * ux
        h12 += ux * uy
        h22 += uy * uy
    determinant = h11 * h22 - h12 * h12
    if determinant <= 1e-12:
        return float("inf")
    return math.sqrt((h11 + h22) / determinant)


def choose_fourth_probe(
    estimate: LocalPoint,
    existing_probes: Sequence[LocalPoint],
    hull: Sequence[LocalPoint],
    *,
    allow_outside: bool = True,
) -> LocalPoint:
    max_radius = max(distance(estimate, point) for point in hull)
    radius = max(300.0, min(max_radius * 1.25, max_radius + 900.0))
    best_score = float("inf")
    best_point: Optional[LocalPoint] = None

    radii = (radius, radius * 0.7, radius * 1.35)
    for candidate_radius in radii:
        for step in range(72):
            angle = 2.0 * math.pi * step / 72.0
            candidate = LocalPoint(
                estimate.x + candidate_radius * math.cos(angle),
                estimate.y + candidate_radius * math.sin(angle),
            )
            if not allow_outside and not point_in_polygon(candidate, hull):
                continue
            score = gdop(estimate, tuple(existing_probes) + (candidate,))
            if score < best_score:
                best_score = score
                best_point = candidate

    if best_point is None:
        return estimate
    return best_point


def grid_offsets(step_meters: float, radius_meters: float) -> Iterator[Tuple[float, float]]:
    try:
        step = abs(float(step_meters))
        radius = abs(float(radius_meters))
    except (TypeError, ValueError):
        return
    if step <= 0.0 or radius <= 0.0:
        return

    max_steps = int(math.floor(radius / step + 1e-9))
    for ring in range(1, max_steps + 1):
        ring_offsets: List[Tuple[int, int]] = []
        for east_step in range(-ring, ring + 1):
            for north_step in range(-ring, ring + 1):
                if max(abs(east_step), abs(north_step)) == ring:
                    ring_offsets.append((east_step, north_step))

        ring_offsets.sort(
            key=lambda offset: (
                offset[0] * offset[0] + offset[1] * offset[1],
                (math.atan2(offset[1], offset[0]) + 2.0 * math.pi) % (2.0 * math.pi),
            )
        )
        for east_step, north_step in ring_offsets:
            yield east_step * step, north_step * step


def unbounded_grid_offsets(step_meters: float = 100.0) -> Iterator[Tuple[float, float, int]]:
    step = abs(float(step_meters))
    if step <= 0.0:
        raise RadarGeometryError("grid step must be positive")
    yield 0.0, 0.0, 0

    queued = {(0, 0)}
    heap: List[Tuple[int, float, int, int]] = []

    def queue(east_step: int, north_step: int) -> None:
        key = (east_step, north_step)
        if key in queued:
            return
        queued.add(key)
        distance2 = east_step * east_step + north_step * north_step
        angle = (math.atan2(north_step, east_step) + 2.0 * math.pi) % (2.0 * math.pi)
        heapq.heappush(heap, (distance2, angle, east_step, north_step))

    queue(1, 0)
    queue(0, 1)
    queue(-1, 0)
    queue(0, -1)
    while True:
        distance2, _angle, east_step, north_step = heapq.heappop(heap)
        ring = int(math.ceil(math.sqrt(distance2)))
        yield east_step * step, north_step * step, ring
        queue(east_step + 1, north_step)
        queue(east_step - 1, north_step)
        queue(east_step, north_step + 1)
        queue(east_step, north_step - 1)


def unbounded_grid_candidates(
    center: GeoPoint,
    *,
    step_meters: float = 100.0,
) -> Iterator[GridCandidate]:
    frame = LocalFrame.from_points([center])
    for east_offset, north_offset, ring in unbounded_grid_offsets(step_meters):
        local = LocalPoint(east_offset, north_offset)
        yield GridCandidate(
            point=frame.to_geo(local),
            ring=ring,
            east_offset=east_offset,
            north_offset=north_offset,
        )


def final_candidate_points(
    frame: LocalFrame,
    estimate: LocalPoint,
    *,
    max_candidates: int = 100,
    grid_step_meters: float = 5.0,
    grid_radius_meters: float = 20.0,
) -> Tuple[GeoPoint, ...]:
    candidates: List[GeoPoint] = []
    seen = set()

    def add(point: GeoPoint) -> None:
        if len(candidates) >= max_candidates:
            return
        key = (point.lat, point.lon)
        if key not in seen:
            seen.add(key)
            candidates.append(point)

    base_geo = frame.to_geo(estimate)
    add(base_geo)

    for east_offset, north_offset in grid_offsets(grid_step_meters, grid_radius_meters):
        local = LocalPoint(estimate.x + east_offset, estimate.y + north_offset)
        geo = frame.to_geo(local)
        add(geo)
        if len(candidates) >= max_candidates:
            break

    return tuple(candidates)


def local_distance_to_geo(frame: LocalFrame, left: GeoPoint, right: GeoPoint) -> float:
    return distance(frame.to_local(left), frame.to_local(right))

"""Radar rollcall geometry helpers.

The functions in this module are deliberately dependency-free. They keep the
live HTTP flow out of the geometry code so the WGS84 projection and the
unbounded grid search the radar solver walks can be tested offline.
"""

from __future__ import annotations

import heapq
import math
from dataclasses import dataclass
from typing import Iterator, List, Sequence, Tuple


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

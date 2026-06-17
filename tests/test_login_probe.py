"""Offline guard: login-probe covers config-only schools (no network)."""
import unittest
from unittest import mock

import troTHU.login_probe as login_probe


def _cfg(key: str) -> dict:
    base = "https://{}.example.edu.tw".format(key)
    return {"key": key, "base_url": base, "login_url": base + "/login", "auth_flow": "cas"}


async def _fake_probe(cfg, *, timeout=0.0):
    return {"key": cfg.get("key"), "status": "ok"}


class LoginProbeCoverageTest(unittest.TestCase):
    def test_all_includes_config_only_school(self) -> None:
        available = {"thu": _cfg("thu"), "demo": _cfg("demo")}  # demo only exists in config
        with mock.patch.object(login_probe, "probe_provider", side_effect=_fake_probe), \
             mock.patch.object(login_probe.asyncio, "sleep", new=mock.AsyncMock()):
            report = login_probe.run_login_probe(None, available=available)
        keys = {r["key"] for r in report["results"]}
        self.assertEqual(keys, {"thu", "demo"})

    def test_single_config_only_school(self) -> None:
        available = {"demo": _cfg("demo")}
        with mock.patch.object(login_probe, "probe_provider", side_effect=_fake_probe), \
             mock.patch.object(login_probe.asyncio, "sleep", new=mock.AsyncMock()):
            report = login_probe.run_login_probe("demo", available=available)
        self.assertEqual([r["key"] for r in report["results"]], ["demo"])

    def test_falls_back_to_registry_when_no_config(self) -> None:
        with mock.patch.object(login_probe, "probe_provider", side_effect=_fake_probe), \
             mock.patch.object(login_probe.asyncio, "sleep", new=mock.AsyncMock()):
            report = login_probe.run_login_probe(None)
        # Built-in registry has the core schools; thu is always present.
        self.assertIn("thu", {r["key"] for r in report["results"]})


if __name__ == "__main__":
    unittest.main()

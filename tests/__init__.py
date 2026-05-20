"""Test helpers and offline unit tests."""

import sys
import types


def install_optional_dependency_fakes() -> None:
    try:
        import aiohttp  # noqa: F401
    except ModuleNotFoundError:
        fake_aiohttp = types.ModuleType("aiohttp")

        class DummyClientSession:
            pass

        class DummyClientResponse:
            pass

        class DummyClientError(Exception):
            pass

        class DummyContentTypeError(Exception):
            pass

        class DummyTCPConnector:
            def __init__(self, *args, **kwargs) -> None:
                self.args = args
                self.kwargs = kwargs

        async def dummy_request(*args, **kwargs):
            raise RuntimeError("aiohttp is unavailable in this offline unit-test environment")

        fake_aiohttp.ClientSession = DummyClientSession
        fake_aiohttp.ClientResponse = DummyClientResponse
        fake_aiohttp.ClientError = DummyClientError
        fake_aiohttp.ContentTypeError = DummyContentTypeError
        fake_aiohttp.TCPConnector = DummyTCPConnector
        fake_aiohttp.request = dummy_request
        sys.modules["aiohttp"] = fake_aiohttp

    try:
        import yaml  # noqa: F401
    except ModuleNotFoundError:
        fake_yaml = types.ModuleType("yaml")

        def safe_load(_stream):
            return {}

        def safe_dump(data, stream, **_kwargs):
            stream.write(str(data))

        fake_yaml.safe_load = safe_load
        fake_yaml.safe_dump = safe_dump
        sys.modules["yaml"] = fake_yaml


install_optional_dependency_fakes()

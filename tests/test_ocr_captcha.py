"""Hermetic tests for the optional OCR captcha helper.

These never import the real ddddocr / onnxruntime: a fake `ddddocr` module is
injected into sys.modules so the suite stays offline and fast whether or not the
`ocr` extra is installed.
"""
import importlib.machinery
import io
import sys
import tempfile
import types
import unittest
from pathlib import Path
from unittest import mock

import troTHU.ocr_captcha as ocr_captcha


class FakeDdddOcr:
    instances = 0
    next_result = "1234"
    raise_on_classify = False

    def __init__(self, show_ad=True, **kwargs):
        FakeDdddOcr.instances += 1
        self.show_ad = show_ad
        self.kwargs = kwargs
        self.ranges_calls = []

    def set_ranges(self, charset):
        self.ranges_calls.append(charset)

    def classification(self, image_bytes, **kwargs):
        if FakeDdddOcr.raise_on_classify:
            raise RuntimeError("boom")
        return FakeDdddOcr.next_result


def _reset_module_state() -> None:
    ocr_captcha._OCR_SINGLETON = None
    ocr_captcha._OCR_INIT_FAILED = False
    ocr_captcha._CURRENT_RANGE = ""


class OcrCaptchaTest(unittest.TestCase):
    def setUp(self) -> None:
        _reset_module_state()
        FakeDdddOcr.instances = 0
        FakeDdddOcr.next_result = "1234"
        FakeDdddOcr.raise_on_classify = False
        self._saved = sys.modules.get("ddddocr")
        fake = types.ModuleType("ddddocr")
        fake.__spec__ = importlib.machinery.ModuleSpec("ddddocr", loader=None)
        fake.DdddOcr = FakeDdddOcr
        sys.modules["ddddocr"] = fake

    def tearDown(self) -> None:
        if self._saved is not None:
            sys.modules["ddddocr"] = self._saved
        else:
            sys.modules.pop("ddddocr", None)
        _reset_module_state()

    def test_available_true_when_module_present(self) -> None:
        self.assertTrue(ocr_captcha.ddddocr_available())

    def test_solve_strips_and_filters_to_charset(self) -> None:
        FakeDdddOcr.next_result = "  12a34 "
        self.assertEqual(ocr_captcha.solve_captcha(b"img", charset="0123456789"), "1234")

    def test_solve_without_charset_returns_stripped(self) -> None:
        FakeDdddOcr.next_result = "  ab12 "
        self.assertEqual(ocr_captcha.solve_captcha(b"img"), "ab12")

    def test_engine_is_singleton(self) -> None:
        ocr_captcha.solve_captcha(b"a", charset="0123456789")
        ocr_captcha.solve_captcha(b"b", charset="0123456789")
        ocr_captcha.get_ocr_engine()
        self.assertEqual(FakeDdddOcr.instances, 1)

    def test_set_ranges_applied_once_for_same_charset(self) -> None:
        ocr_captcha.solve_captcha(b"a", charset="0123456789")
        ocr_captcha.solve_captcha(b"b", charset="0123456789")
        self.assertEqual(ocr_captcha._OCR_SINGLETON.ranges_calls, ["0123456789"])

    def test_show_ad_disabled(self) -> None:
        ocr_captcha.get_ocr_engine()
        self.assertFalse(ocr_captcha._OCR_SINGLETON.show_ad)

    def test_classification_failure_returns_empty(self) -> None:
        FakeDdddOcr.raise_on_classify = True
        self.assertEqual(ocr_captcha.solve_captcha(b"img", charset="0123456789"), "")

    def test_status_reports_loaded_after_use(self) -> None:
        self.assertFalse(ocr_captcha.ocr_captcha_status()["engine_loaded"])
        ocr_captcha.solve_captcha(b"img", charset="0123456789")
        status = ocr_captcha.ocr_captcha_status()
        self.assertTrue(status["available"])
        self.assertTrue(status["engine_loaded"])


class OcrCaptchaUnavailableTest(unittest.TestCase):
    def setUp(self) -> None:
        _reset_module_state()
        self._saved = sys.modules.pop("ddddocr", None)

    def tearDown(self) -> None:
        if self._saved is not None:
            sys.modules["ddddocr"] = self._saved
        _reset_module_state()

    def test_available_false_when_module_missing(self) -> None:
        with mock.patch.object(ocr_captcha.importlib.util, "find_spec", return_value=None):
            self.assertFalse(ocr_captcha.ddddocr_available())

    def test_get_engine_raises_when_missing(self) -> None:
        with mock.patch.dict(sys.modules, {"ddddocr": None}):
            with self.assertRaises(ocr_captcha.OcrUnavailableError):
                ocr_captcha.get_ocr_engine()


class OcrModelDownloadTest(unittest.TestCase):
    def setUp(self) -> None:
        _reset_module_state()
        self._saved = sys.modules.get("ddddocr")

    def tearDown(self) -> None:
        if self._saved is not None:
            sys.modules["ddddocr"] = self._saved
        else:
            sys.modules.pop("ddddocr", None)
        _reset_module_state()

    def _fake_ddddocr_in(self, d: Path) -> Path:
        pkg = d / "ddddocr"
        pkg.mkdir()
        (pkg / "__init__.py").write_text("")
        fake = types.ModuleType("ddddocr")
        fake.__file__ = str(pkg / "__init__.py")
        sys.modules["ddddocr"] = fake
        return pkg

    def test_places_model_from_cache_without_download(self) -> None:
        with tempfile.TemporaryDirectory() as d:
            pkg = self._fake_ddddocr_in(Path(d))
            cache = Path(d) / "cache" / ocr_captcha._MODEL_NAME
            cache.parent.mkdir()
            cache.write_bytes(b"MODELDATA")
            with mock.patch.object(ocr_captcha, "_model_cache_path", return_value=cache), \
                 mock.patch.object(ocr_captcha, "_download_model") as dl:
                ocr_captcha._ensure_default_model()
                dl.assert_not_called()
            self.assertEqual((pkg / ocr_captcha._MODEL_NAME).read_bytes(), b"MODELDATA")

    def test_downloads_when_cache_missing(self) -> None:
        with tempfile.TemporaryDirectory() as d:
            pkg = self._fake_ddddocr_in(Path(d))
            cache = Path(d) / "cache" / ocr_captcha._MODEL_NAME

            def fake_dl(dest: Path) -> None:
                dest.parent.mkdir(parents=True, exist_ok=True)
                dest.write_bytes(b"DL")

            with mock.patch.object(ocr_captcha, "_model_cache_path", return_value=cache), \
                 mock.patch.object(ocr_captcha, "_download_model", side_effect=fake_dl) as dl:
                ocr_captcha._ensure_default_model()
                dl.assert_called_once()
            self.assertEqual((pkg / ocr_captcha._MODEL_NAME).read_bytes(), b"DL")

    def test_noop_when_target_present(self) -> None:
        with tempfile.TemporaryDirectory() as d:
            pkg = self._fake_ddddocr_in(Path(d))
            (pkg / ocr_captcha._MODEL_NAME).write_bytes(b"already")
            with mock.patch.object(ocr_captcha, "_download_model") as dl:
                ocr_captcha._ensure_default_model()
                dl.assert_not_called()

    def test_download_rejects_bad_hash(self) -> None:
        with tempfile.TemporaryDirectory() as d:
            dest = Path(d) / ocr_captcha._MODEL_NAME

            class _Resp:
                def __enter__(self): return io.BytesIO(b"corrupt")
                def __exit__(self, *a): return False

            with mock.patch("urllib.request.urlopen", return_value=_Resp()), \
                 mock.patch.object(ocr_captcha.ctx, "log_print"):
                with self.assertRaises(ocr_captcha.OcrUnavailableError):
                    ocr_captcha._download_model(dest)
            self.assertFalse(dest.exists())


if __name__ == "__main__":
    unittest.main()

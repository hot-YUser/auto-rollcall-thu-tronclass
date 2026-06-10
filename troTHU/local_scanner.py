from __future__ import annotations
import asyncio
import secrets
import time
import webbrowser
from typing import Any, Awaitable, Callable, Dict, Mapping, Optional

try:
    import aiohttp
    from aiohttp import web
except Exception:  # pragma: no cover - dependency-missing fallback
    aiohttp = None  # type: ignore
    web = None  # type: ignore

try:
    from troTHU.app_qr_experience import build_qr_scan_view_state, format_qr_scan_status
except ImportError:  # pragma: no cover - script execution fallback
    from app_qr_experience import build_qr_scan_view_state, format_qr_scan_status


ScannerSubmitter = Callable[[str, bool], Awaitable[Dict[str, Any]]]
ScannerPreviewer = Callable[[str], Dict[str, Any]]
DEFAULT_SCANNER_TOKEN_TTL_SECONDS = 900


SCANNER_HTML = """<!doctype html>
<html lang="zh-Hant">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>THU TronClass QR Scanner</title>
  <style>
    body { margin: 0; font-family: system-ui, -apple-system, Segoe UI, sans-serif; background: #f7f7f4; color: #202124; }
    main { max-width: 860px; margin: 0 auto; padding: 24px; }
    header { display: flex; justify-content: space-between; align-items: center; gap: 16px; }
    h1 { font-size: 24px; margin: 0 0 6px; }
    p { color: #5f6368; }
    video, textarea, pre { width: 100%; box-sizing: border-box; border: 1px solid #c8c7c2; border-radius: 8px; background: white; }
    video { aspect-ratio: 16 / 9; object-fit: cover; margin: 16px 0; }
    textarea { min-height: 96px; padding: 12px; font: inherit; }
    pre { padding: 12px; white-space: pre-wrap; min-height: 90px; }
    button { border: 0; border-radius: 7px; padding: 10px 14px; background: #236a5a; color: white; font-weight: 650; cursor: pointer; }
    button.secondary { background: #4f5b62; }
    button:disabled { opacity: .55; cursor: default; }
    .row { display: flex; gap: 8px; flex-wrap: wrap; margin: 12px 0; }
    .pill { padding: 6px 9px; border-radius: 999px; background: #e7eee9; color: #235246; font-size: 13px; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 12px; margin: 14px 0; }
    .panel { border: 1px solid #d5d2ca; background: #fff; border-radius: 8px; padding: 12px; }
    .panel h2 { font-size: 16px; margin: 0 0 8px; }
    .badge { display: inline-block; padding: 4px 8px; border-radius: 999px; background: #eceae4; font-size: 12px; }
    .badge.ok { background: #dcefe5; color: #174b35; }
    .badge.warn { background: #f8e2c4; color: #70460d; }
    .badge.fail { background: #f1d7d7; color: #7a2020; }
    .hint { font-size: 13px; color: #5f6368; }
  </style>
</head>
<body>
<main>
  <header>
    <div>
      <h1>THU TronClass QR Scanner</h1>
      <p>本頁只連到 127.0.0.1；掃到內容後會先解析 preview，再由你手動送出。</p>
    </div>
    <span id="mode" class="pill">idle</span>
  </header>
  <video id="video" playsinline muted></video>
  <div class="row">
    <button id="start">啟動相機</button>
    <button id="stop" class="secondary">停止</button>
  </div>
  <p id="fallback" class="hint" data-camera-fallback>如果瀏覽器不支援相機掃描，請直接使用貼上模式。</p>
  <textarea id="payload" placeholder="也可以直接貼上 QR URL / payload"></textarea>
  <label data-fanout-toggle><input id="fanout" type="checkbox"> 送到所有 matching pending profiles</label>
  <div class="row">
    <button id="preview">Preview</button>
    <button id="submit">確認送出</button>
  </div>
  <div class="grid">
    <section class="panel" data-qr-preview-card>
      <h2>Preview</h2>
      <span id="previewBadge" class="badge">idle</span>
      <p id="previewSummary" class="hint">等待 QR 內容。</p>
    </section>
    <section class="panel" data-qr-result-card>
      <h2>Result</h2>
      <span id="resultBadge" class="badge">idle</span>
      <p id="resultSummary" class="hint">送出前會先顯示安全摘要。</p>
    </section>
  </div>
  <pre id="output">等待 QR 內容。</pre>
</main>
<script>
const TOKEN = "__TOKEN__";
const video = document.getElementById("video");
const payload = document.getElementById("payload");
const output = document.getElementById("output");
const mode = document.getElementById("mode");
const previewBadge = document.getElementById("previewBadge");
const resultBadge = document.getElementById("resultBadge");
const previewSummary = document.getElementById("previewSummary");
const resultSummary = document.getElementById("resultSummary");
let stream = null;
let timer = null;
let detector = null;

async function post(path, body) {
  const res = await fetch(path, {
    method: "POST",
    headers: {"Content-Type": "application/json", "X-Local-Token": TOKEN},
    body: JSON.stringify(body || {})
  });
  const text = await res.text();
  try { return JSON.parse(text); } catch { return {ok: false, text}; }
}

function show(value) {
  output.textContent = typeof value === "string" ? value : JSON.stringify(value, null, 2);
  const view = value && value.view_state ? value.view_state : value;
  if (view && view.state) {
    const badgeClass = view.ok ? "badge ok" : (view.state === "idle" ? "badge" : "badge fail");
    const text = `${view.state} / rollcall ${view.rollcall_id || "-"} / matches ${view.match_count || 0}`;
    if (String(view.state).startsWith("preview")) {
      previewBadge.className = badgeClass;
      previewBadge.textContent = view.state;
      previewSummary.textContent = text;
    } else {
      resultBadge.className = badgeClass;
      resultBadge.textContent = view.state;
      resultSummary.textContent = text;
    }
  }
}

async function loadContext() {
  const res = await fetch("/api/qr/context", {headers: {"X-Local-Token": TOKEN}});
  const value = await res.json();
  mode.textContent = value.mode || "ready";
  show(value.view_state || value);
}

async function preview() {
  const text = payload.value.trim();
  if (!text) { show("沒有 QR 內容。"); return; }
  show(await post("/api/qr/preview", {payload: text, fanout: document.getElementById("fanout").checked}));
}

async function submitQr() {
  const text = payload.value.trim();
  if (!text) { show("沒有 QR 內容。"); return; }
  show(await post("/api/qr/submit", {payload: text, fanout: document.getElementById("fanout").checked}));
}

async function startCamera() {
  if (!("BarcodeDetector" in window)) {
    mode.textContent = "paste fallback";
    show("此瀏覽器不支援 BarcodeDetector，請使用貼上模式。");
    return;
  }
  detector = new BarcodeDetector({formats: ["qr_code"]});
  stream = await navigator.mediaDevices.getUserMedia({video: {facingMode: "environment"}});
  video.srcObject = stream;
  await video.play();
  mode.textContent = "scanning";
  timer = setInterval(async () => {
    const codes = await detector.detect(video);
    if (codes.length && codes[0].rawValue) {
      payload.value = codes[0].rawValue;
      mode.textContent = "detected";
      await preview();
    }
  }, 700);
}

function stopCamera() {
  if (timer) clearInterval(timer);
  timer = null;
  if (stream) stream.getTracks().forEach(track => track.stop());
  stream = null;
  mode.textContent = "stopped";
}

document.getElementById("start").onclick = () => startCamera().catch(err => show(String(err)));
document.getElementById("stop").onclick = stopCamera;
document.getElementById("preview").onclick = preview;
document.getElementById("submit").onclick = submitQr;
loadContext().catch(err => show(String(err)));
</script>
</body>
</html>
"""


def create_scanner_app(
    *,
    previewer: ScannerPreviewer,
    submitter: ScannerSubmitter,
    token: str,
    token_expires_at: Optional[float] = None,
) -> Any:
    if web is None:
        raise RuntimeError("aiohttp.web is not available. Install aiohttp with web support.")

    def require_token(request: Any) -> None:
        if request.headers.get("X-Local-Token") != token:
            raise web.HTTPUnauthorized(text="invalid local token")
        if token_expires_at is not None and time.time() >= float(token_expires_at):
            raise web.HTTPUnauthorized(text="expired local token")

    def ttl_remaining() -> Optional[int]:
        if token_expires_at is None:
            return None
        return max(0, int(float(token_expires_at) - time.time()))

    def as_mapping(value: Any) -> Dict[str, Any]:
        return dict(value) if isinstance(value, Mapping) else {"ok": bool(value)}

    async def index(_request: Any) -> Any:
        return web.Response(
            text=SCANNER_HTML.replace("__TOKEN__", token),
            content_type="text/html",
        )

    async def context(request: Any) -> Any:
        require_token(request)
        view_state = build_qr_scan_view_state(camera_supported=None)
        return web.json_response(
            {
                "ok": True,
                "mode": "optional_companion_qr_scanner",
                "token_ttl_remaining_seconds": ttl_remaining(),
                "browser_mode_hints": {
                    "camera_api": "BarcodeDetector",
                    "fallback": "paste",
                    "requires_user_gesture": True,
                },
                "fanout_label": "Matching pending profiles only",
                "status_text": format_qr_scan_status(view_state),
                "view_state": view_state,
            }
        )

    async def preview(request: Any) -> Any:
        require_token(request)
        body = await request.json()
        result = as_mapping(previewer(str(body.get("payload") or "")))
        fanout = bool(body.get("fanout"))
        result.setdefault("view_state", build_qr_scan_view_state(preview=result, fanout=fanout))
        return web.json_response(result)

    async def submit(request: Any) -> Any:
        require_token(request)
        body = await request.json()
        fanout = bool(body.get("fanout"))
        result = as_mapping(await submitter(str(body.get("payload") or ""), fanout))
        result.setdefault("view_state", build_qr_scan_view_state(submit_result=result, fanout=fanout))
        return web.json_response(result)

    app = web.Application()
    app.add_routes([
        web.get("/", index),
        web.get("/api/qr/context", context),
        web.post("/api/qr/preview", preview),
        web.post("/api/qr/submit", submit),
    ])
    return app


async def run_scanner_server(
    *,
    host: str,
    port: int,
    previewer: ScannerPreviewer,
    submitter: ScannerSubmitter,
    open_browser: bool = False,
    token_ttl_seconds: int = DEFAULT_SCANNER_TOKEN_TTL_SECONDS,
) -> None:
    if web is None:
        raise RuntimeError("aiohttp.web is not available. Install aiohttp with web support.")

    token = secrets.token_urlsafe(18)
    app = create_scanner_app(
        previewer=previewer,
        submitter=submitter,
        token=token,
        token_expires_at=time.time() + max(1, int(token_ttl_seconds)),
    )
    runner = web.AppRunner(app)
    await runner.setup()
    site = web.TCPSite(runner, host, port)
    await site.start()
    url = f"http://{host}:{port}/"
    print(f"Local QR scanner: {url}")
    if open_browser:
        webbrowser.open(url)
    try:
        while True:
            await asyncio.sleep(3600)
    finally:
        await runner.cleanup()

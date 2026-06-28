"""Course-material tools for the auto-answer LLM (the agentic side of answering).

When a question lacks context, the model can call these OpenAI-style tools to look the
answer up in the student's own course: list material activities, then read one (its
description text + attachment text, incl. PDF). Everything here is READ-ONLY GETs,
output is length-capped, and the executor NEVER raises — a failure is returned to the
model as a short string so the answer loop keeps going. PDF text uses pypdf (pure
Python, import-guarded: missing -> graceful "unavailable" note).

Kept separate from llm_answerer so the LLM client stays free of TronClass coupling;
answer_flow wires the executor (closure over the TronClass client) into the LLM call.
"""
from __future__ import annotations
import io
from typing import Any, Awaitable, Callable, Dict, List, Optional, Tuple

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore

try:
    from troTHU.llm_answerer import strip_html
    from troTHU.quiz_engine import normalize_text
except ImportError:  # pragma: no cover - script execution fallback
    from llm_answerer import strip_html  # type: ignore
    from quiz_engine import normalize_text  # type: ignore


# Output caps — keep tool results bounded even though M3 has a huge context window.
MATERIAL_LIST_MAX = 60
READ_MAX_CHARS = 12000
PDF_MAX_CHARS = 8000
# Material-ish activity types that can carry readable content / attachments.
_MATERIAL_TYPES = ("material", "page", "online_video", "web_link", "scorm")
_IMAGE_EXTS = (".png", ".jpg", ".jpeg", ".gif", ".webp")


def pdf_to_text(data: bytes, max_chars: int = PDF_MAX_CHARS) -> str:
    """Extract text from PDF bytes via pypdf (import-guarded). Returns "" if pypdf is missing
    or the PDF has no text layer (scanned PDFs — page-render is a future extra)."""
    try:
        from pypdf import PdfReader
    except ImportError:
        return ""
    try:
        reader = PdfReader(io.BytesIO(data))
        out: List[str] = []
        total = 0
        for page in reader.pages:
            text = page.extract_text() or ""
            if not text:
                continue
            out.append(text)
            total += len(text)
            if total >= max_chars:
                break
        return normalize_text("\n".join(out))[:max_chars]
    except Exception:
        return ""


def _ext(name: str) -> str:
    name = normalize_text(name).lower()
    dot = name.rfind(".")
    return name[dot:] if dot >= 0 else ""


def _as_list(payload: Any, *keys: str) -> List[Dict[str, Any]]:
    if isinstance(payload, list):
        return [x for x in payload if isinstance(x, dict)]
    if isinstance(payload, dict):
        for key in keys:
            value = payload.get(key)
            if isinstance(value, list):
                return [x for x in value if isinstance(x, dict)]
    return []


async def _get_json(client: Any, path: str) -> Any:
    try:
        return await client.request_json("GET", client.api_url(path))
    except ctx.TronHttpError:
        return {}


async def _get_bytes(client: Any, url: str) -> Tuple[Optional[bytes], str]:
    """Authenticated raw GET (the student session); returns (bytes, mime) or (None, '')."""
    full = url if url.startswith("http") else client.api_url(url)
    try:
        async with client.session.get(full, **client.request_kwargs()) as resp:
            if resp.status != 200:
                return None, ""
            data = await resp.read()
            mime = normalize_text(resp.headers.get("Content-Type")).split(";")[0]
            return data, mime
    except Exception:
        return None, ""


def _ref_fields(ref: Dict[str, Any]) -> Tuple[str, str, Any]:
    """Best-effort (name, direct_url, upload_id) from an upload-reference item.
    ponytail: field shapes vary by tenant — checks the common keys, confirmed live."""
    upload = ref.get("upload") if isinstance(ref.get("upload"), dict) else {}
    name = normalize_text(ref.get("name") or ref.get("title") or upload.get("name"))
    url = normalize_text(ref.get("url") or ref.get("download_url") or ref.get("preview_url")
                         or upload.get("url"))
    upload_id = ref.get("upload_id") or upload.get("id") or ref.get("id")
    return name, url, upload_id


async def _attachment_text(client: Any, ref: Dict[str, Any]) -> str:
    name, url, upload_id = _ref_fields(ref)
    if not name:
        return ""
    ext = _ext(name)
    if ext == ".pdf":
        if not url and upload_id is not None:
            preview = await _get_json(client, "/api/uploads/document/{}/url?preview=true".format(upload_id))
            url = normalize_text(preview.get("url")) if isinstance(preview, dict) else ""
        if url:
            data, _mime = await _get_bytes(client, url)
            if data:
                text = pdf_to_text(data)
                if text:
                    return "附件 {}（PDF 內文）：\n{}".format(name, text)
        return "附件 {}（PDF，無法取得內文）".format(name)
    if ext in _IMAGE_EXTS:
        return "附件 {}（圖片，未載入）".format(name)
    return "附件 {}".format(name)


async def _list_materials(client: Any, course_id: str) -> str:
    body = await _get_json(client, "/api/courses/{}/activities?page=1&page_size=200".format(course_id))
    acts = _as_list(body, "activities")
    rows: List[str] = []
    for act in acts:
        if normalize_text(act.get("type")) not in _MATERIAL_TYPES:
            continue
        aid = normalize_text(act.get("id"))
        title = normalize_text(act.get("title"))
        if aid:
            rows.append("- id={} | {}".format(aid, title or "(無標題)"))
        if len(rows) >= MATERIAL_LIST_MAX:
            break
    if not rows:
        return "（此課程沒有可讀取的教材活動）"
    return "課程教材清單（用 read_material(activity_id) 讀內容）：\n" + "\n".join(rows)


async def _search_materials(client: Any, course_id: str, query: str) -> str:
    """One round-trip: list course materials, pick the ones matching the query (by title) or the
    first few, read their text (description + attachments incl. PDF), and return it concatenated.
    A single tool call is far more reliable than making the model chain list->read itself."""
    body = await _get_json(client, "/api/courses/{}/activities?page=1&page_size=200".format(course_id))
    acts = [a for a in _as_list(body, "activities") if normalize_text(a.get("type")) in _MATERIAL_TYPES]
    if not acts:
        return "（此課程沒有可讀取的教材；請直接依題目作答。）"
    tokens = [t for t in normalize_text(query).lower().split() if len(t) >= 2]
    matched = [a for a in acts if any(t in normalize_text(a.get("title")).lower() for t in tokens)]
    picked = matched or acts[:3]  # query hits, else the first few materials
    chunks: List[str] = []
    total = 0
    for act in picked:
        text = await _read_material(client, normalize_text(act.get("id")))
        if text:
            chunks.append(text)
            total += len(text)
        if total >= READ_MAX_CHARS:
            break
    return ("\n\n=====\n\n".join(chunks) or "（教材沒有可讀取的文字內容。）")[:READ_MAX_CHARS]


async def _read_material(client: Any, activity_id: str) -> str:
    if not activity_id:
        return "缺少 activity_id。"
    detail = await _get_json(client, "/api/activities/{}".format(activity_id))
    detail = detail if isinstance(detail, dict) else {}
    parts: List[str] = []
    title = normalize_text(detail.get("title"))
    if title:
        parts.append("教材：{}".format(title))
    desc = strip_html(detail.get("description") or detail.get("content"))
    if desc:
        parts.append(desc)
    refs = await _get_json(client, "/api/activities/{}/upload_references".format(activity_id))
    for ref in _as_list(refs, "upload_references", "references"):
        text = await _attachment_text(client, ref)
        if text:
            parts.append(text)
    body = normalize_text("\n\n".join(p for p in parts if p))
    return (body or "（此教材沒有可讀取的文字內容）")[:READ_MAX_CHARS]


def material_tool_specs() -> List[Dict[str, Any]]:
    """ONE tool the model may call to pull course context. A single call (vs. making the model
    chain list->read) is much more reliable in practice (live-validated)."""
    return [
        {"type": "function", "function": {
            "name": "search_course_materials",
            "description": "Search this course's materials/handouts (including PDF text) for the "
                           "information needed to answer the question, and return the relevant "
                           "material text. Call this whenever the question relies on a passage, "
                           "figure, dataset, or handout you were not given.",
            "parameters": {
                "type": "object",
                "properties": {"query": {
                    "type": "string",
                    "description": "Keywords describing what to find in the course materials."}},
                "required": ["query"],
            },
        }},
    ]


def make_tool_executor(client: Any, course_id: str) -> Callable[[str, Dict[str, Any]], Awaitable[str]]:
    """Closure binding the tool to a TronClass client + course. Never raises (returns a string)."""
    async def execute(name: str, args: Dict[str, Any]) -> str:
        try:
            if name == "search_course_materials":
                return await _search_materials(client, normalize_text(course_id),
                                               normalize_text(args.get("query")))
            # back-compat aliases (older prompts) — map to the same behaviour
            if name == "list_course_materials":
                return await _list_materials(client, normalize_text(course_id))
            if name == "read_material":
                return await _read_material(client, normalize_text(args.get("activity_id")))
            return "unknown tool: {}".format(name)
        except Exception as exc:  # tools must never break the answer loop
            return "tool error: {}".format(exc)
    return execute


def make_image_fetcher(client: Any) -> Callable[[str], Awaitable[Optional[Tuple[bytes, str]]]]:
    """Closure that downloads a (login-gated) image's bytes so it can be base64-embedded for NIM."""
    async def fetch(url: str) -> Optional[Tuple[bytes, str]]:
        data, mime = await _get_bytes(client, url)
        if not data:
            return None
        if not mime.startswith("image/"):
            mime = "image/{}".format((_ext(url).lstrip(".") or "png").replace("jpg", "jpeg"))
        return data, mime
    return fetch

"""LLM answerer — default backend NVIDIA NIM (OpenAI-compatible chat/completions).

Default model `minimaxai/minimax-m3` with reasoning ALWAYS on (NIM/vLLM
`chat_template_kwargs.thinking_mode`), OpenAI-style tool calling so the model can
pull course materials/attachments when a question lacks context, and base64 image
embedding so login-gated TronClass images actually reach the model. The reasoning
text is returned in a separate field (or inline <think> blocks) and stripped — only
the clean final answer is returned to quiz_engine. The API key is read from an env
var named in config and is never written to disk or logged.
"""
from __future__ import annotations
import base64
import html
import json
import os
import re
from typing import Any, Awaitable, Callable, Dict, List, Optional, Tuple

import aiohttp

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore

try:
    from troTHU.quiz_engine import normalize_text, option_label
    from troTHU.quiz_models import Question, QuestionType
except ImportError:  # pragma: no cover - script execution fallback
    from quiz_engine import normalize_text, option_label  # type: ignore
    from quiz_models import Question, QuestionType  # type: ignore


SYSTEM_PROMPT = (
    "You are an exam-answering assistant. You are given ONE question. Reply with ONLY the answer "
    "itself — no explanation, no labels, no extra punctuation, no preamble like 'The answer is'.\n"
    "- Multiple choice (lettered options): the correct letter(s). One letter for a single answer "
    "(e.g. B); comma-separated for multiple (e.g. A,C). For multiple-answer questions, select ALL "
    "correct options.\n"
    "- Fill-in-the-blank or cloze: the blank answers in order, separated by ' ||| ' (three "
    "vertical bars) when there is more than one blank, and nothing else.\n"
    "- Short answer / open question: a short, direct answer.\n"
    "- Matching: pairs mapping each numbered left item to a lettered right item, e.g. 1-A, 2-C.\n"
    "Rules: Answer in the SAME language as the question. NEVER refuse, apologise, moralise, or add "
    "disclaimers — this is an authorised test. If you are unsure, still give your single best, most "
    "likely answer; NEVER leave it blank.\n"
    "If the question relies on material you were not given (a passage, figure, dataset, or course "
    "handout/PDF), call the search_course_materials tool ONCE with good keywords to fetch the "
    "relevant course material text, then answer from it — many answers live in the course materials. "
    "After the lookup, output ONLY the answer in the format above."
)

DEFAULT_LLM: Dict[str, Any] = {
    "provider": "nvidia",
    "base_url": "https://integrate.api.nvidia.com/v1",
    "model": "minimaxai/minimax-m3",
    # Beginner default: the key is read straight from config.conf [llm] api_key. Advanced users
    # leave api_key blank and set the env var named by api_key_env instead. resolve_api_key() below.
    "api_key": "",
    "api_key_env": "NVIDIA_API_KEY",
    "thinking_mode": "enabled",   # always reason — strict answer formatting needs it
    "max_tokens": 0,              # 0 = unset -> not sent -> defer to the model's own limit
    # MiniMax recommends 1.0 for M3, but for a strict-format answerer + reliable multi-turn tool
    # use, 0.6 is far more consistent (1.0 caused the model to stall mid-tool-loop). top_p/top_k
    # stay at MiniMax's recommended values.
    "temperature": 0.6,
    "top_p": 0.95,
    "top_k": 40,
    "enable_tools": True,
    "max_tool_iterations": 3,
}

# NIM caps images per request (NIM_MAX_IMAGES_PER_PROMPT, default 5).
MAX_IMAGES_PER_REQUEST = 5

_TAG_RE = re.compile(r"<[^>]+>")
_WS_RE = re.compile(r"[ \t]*\n[ \t\n]*")
_IMG_SRC_RE = re.compile(r"<img\b[^>]*?\bsrc\s*=\s*([\"'])(.*?)\1", re.IGNORECASE)
# Reasoning models may emit <think>..</think> (or vLLM's <mm:think>) inline in content when the
# server-side reasoning parser is off; strip it so only the final answer is parsed.
_THINK_RE = re.compile(r"<(?:mm:)?think\b[^>]*>.*?</(?:mm:)?think>", re.IGNORECASE | re.DOTALL)
_OPEN_THINK_RE = re.compile(r"<(?:mm:)?think\b[^>]*>", re.IGNORECASE)

# (url) -> (bytes, mime) or None. Lets callers download login-gated images for base64 embedding.
ImageFetcher = Callable[[str], Awaitable[Optional[Tuple[bytes, str]]]]
# (tool_name, args_dict) -> result string fed back to the model.
ToolExecutor = Callable[[str, Dict[str, Any]], Awaitable[str]]


def strip_html(text: Any) -> str:
    raw = str(text or "")
    images = "\n".join("[image: {}]".format(m.group(2)) for m in _IMG_SRC_RE.finditer(raw))
    plain = html.unescape(_TAG_RE.sub(" ", raw))
    plain = _WS_RE.sub("\n", plain)
    plain = re.sub(r"[ \t]{2,}", " ", plain).strip()
    return (plain + ("\n" + images if images else "")).strip()


def strip_think(text: Any) -> str:
    """Return the clean final answer: drop closed <think>..</think> reasoning blocks. An UNCLOSED
    <think> means the model was truncated mid-reasoning (no finished answer) → drop from the opener
    on and return whatever preceded it (usually empty) rather than mistaking reasoning for an answer."""
    out = _THINK_RE.sub(" ", str(text or ""))
    opener = _OPEN_THINK_RE.search(out)
    if opener:
        out = out[:opener.start()]
    return normalize_text(out)


def image_urls(question: Question) -> List[str]:
    # Images are extracted from the question/option HTML (<img src=...>); TronClass papers carry
    # them inline, not as a structured field.
    urls: List[str] = []
    for raw in [question.stem] + [opt.content for opt in question.options]:
        for m in _IMG_SRC_RE.finditer(str(raw or "")):
            urls.append(m.group(2))
    seen: List[str] = []
    for url in urls:
        u = normalize_text(url)
        if u and u not in seen:
            seen.append(u)
    return seen


def build_question_text(question: Question) -> str:
    lines = [strip_html(question.stem) or "(question)"]
    for index, opt in enumerate(question.options):
        lines.append("{}. {}".format(option_label(index), strip_html(opt.content)))
    if question.is_blank:
        n = question.blank_count or 1
        lines.append("[Fill in {} blank(s), in order, separated by ' ||| '.]".format(n)
                     if n > 1 else "[Fill in the blank.]")
    elif question.qtype == QuestionType.MATCHING:
        lines.append("[Matching: pair each numbered left item with a lettered option, e.g. 1-A, 2-C.]")
    return "\n".join(lines)


def _data_url(data: bytes, mime: str) -> str:
    mime = mime if mime in ("image/png", "image/jpeg", "image/gif", "image/webp") else "image/png"
    return "data:{};base64,{}".format(mime, base64.b64encode(data).decode("ascii"))


async def _image_part(url: str, image_fetcher: Optional[ImageFetcher]) -> Dict[str, Any]:
    """Build an image_url part. Already-data URLs pass through; otherwise try to download the
    bytes (login-gated TronClass images NVIDIA can't fetch) and base64-embed; on any miss fall
    back to the raw URL (NIM fetches public URLs itself), so this never regresses."""
    if url.startswith("data:") or image_fetcher is None:
        return {"type": "image_url", "image_url": {"url": url}}
    try:
        fetched = await image_fetcher(url)
    except Exception:
        fetched = None
    if fetched:
        data, mime = fetched
        if data:
            return {"type": "image_url", "image_url": {"url": _data_url(data, mime)}}
    return {"type": "image_url", "image_url": {"url": url}}


async def build_user_content(question: Question, image_fetcher: Optional[ImageFetcher] = None) -> Any:
    """Plain string for text questions; multimodal parts list when images are present."""
    text = build_question_text(question)
    urls = image_urls(question)[:MAX_IMAGES_PER_REQUEST]
    if not urls:
        return text
    parts: List[Dict[str, Any]] = [{"type": "text", "text": text}]
    for url in urls:
        parts.append(await _image_part(url, image_fetcher))
    return parts


def resolve_api_key(llm_config: Dict[str, Any]) -> str:
    """The auto-answer LLM key. Beginner default: the key sits directly in config.conf [llm]
    api_key (this project favours convenience for non-technical users). Advanced: leave api_key
    blank and set the env var named by api_key_env. The direct value wins; env is the fallback.
    The key is redacted from the JSON / log / status / debug output surfaces; it is of course stored
    verbatim in config.conf itself (gitignored) and shown by the `config compact` preview of it."""
    direct = normalize_text(llm_config.get("api_key"))
    if direct:
        return direct
    env_name = normalize_text(llm_config.get("api_key_env")) or DEFAULT_LLM["api_key_env"]
    return normalize_text(os.getenv(env_name))


def _http_status_hint(status: int) -> str:
    """A short, actionable Chinese hint by HTTP status class so a user can self-diagnose
    (most often a bad/missing NVIDIA_API_KEY). No key/headers/body are placed here."""
    if status in (401, 403):
        return "金鑰可能無效或未授權（檢查 NVIDIA_API_KEY）"
    if status in (400, 404):
        return "模型或請求參數可能有誤（檢查 model / base_url）"
    if status == 429:
        return "請求過於頻繁或額度不足"
    if status >= 500:
        return "服務端暫時錯誤，可稍後重試"
    return ""


def _build_payload(messages: List[Dict[str, Any]], llm_config: Dict[str, Any],
                   tools: Optional[List[Dict[str, Any]]]) -> Dict[str, Any]:
    thinking = normalize_text(llm_config.get("thinking_mode")) or DEFAULT_LLM["thinking_mode"]
    payload: Dict[str, Any] = {
        "model": normalize_text(llm_config.get("model")) or DEFAULT_LLM["model"],
        "messages": messages,
        "temperature": float(llm_config.get("temperature", DEFAULT_LLM["temperature"])),
        "top_p": float(llm_config.get("top_p", DEFAULT_LLM["top_p"])),
        # NIM/vLLM toggle for MiniMax-M3 reasoning; raw HTTP puts it at body top level.
        "chat_template_kwargs": {"thinking_mode": thinking},
        "stream": False,
    }
    # max_tokens is only sent when explicitly configured (>0); unset -> defer to the model's own limit.
    try:
        max_tokens = int(llm_config.get("max_tokens") or 0)
    except (TypeError, ValueError):
        max_tokens = 0
    if max_tokens > 0:
        payload["max_tokens"] = max_tokens
    top_k = int(llm_config.get("top_k", DEFAULT_LLM["top_k"]) or 0)
    if top_k > 0:
        payload["top_k"] = top_k
    if tools:
        payload["tools"] = tools
        payload["tool_choice"] = "auto"
    return payload


async def _request_message(session: Any, messages: List[Dict[str, Any]], llm_config: Dict[str, Any],
                           *, tools: Optional[List[Dict[str, Any]]] = None) -> Dict[str, Any]:
    """One chat call. Returns the assistant `message` dict (with content / tool_calls), or {}."""
    key = resolve_api_key(llm_config)
    if not key:
        return {}
    base = normalize_text(llm_config.get("base_url")) or DEFAULT_LLM["base_url"]
    payload = _build_payload(messages, llm_config, tools)
    headers = {"Authorization": "Bearer {}".format(key), "Accept": "application/json"}
    url = "{}/chat/completions".format(base.rstrip("/"))
    # No timeout: reasoning is always on and max_tokens is unset, so a single completion can run
    # well past the monitor session's 20s API cap — inheriting that cap silently dropped valid
    # slow answers. total=None disables it; real failures (connect error / 401 / 5xx) still raise
    # or return non-200 and ARE surfaced below, so "no timeout" doesn't hide errors.
    # ponytail: this runs inside autoanswer_tick, which the monitor awaits inline — a slow
    # completion delays the next rollcall poll (same as today's multi-turn tool calls). Decoupling
    # auto-answer from the poll loop is a separate change; widen the window first.
    try:
        async with session.post(url, headers=headers, json=payload,
                                timeout=aiohttp.ClientTimeout(total=None)) as resp:
            if resp.status != 200:
                body = ""
                try:
                    body = (await resp.text())[:300]
                except Exception:
                    body = ""
                hint = _http_status_hint(resp.status)
                ctx.log(event="autoanswer_llm", status="http_{}".format(resp.status),
                        message="LLM 回應非 200{}。".format("：" + hint if hint else ""),
                        extra={"http_status": resp.status, "body_excerpt": body})
                return {}
            data = await resp.json()
    except Exception as exc:  # network/parse — degrade, never crash the loop
        ctx.log(event="autoanswer_llm", status="error", message="LLM 呼叫失敗。", error=exc)
        return {}
    try:
        msg = data["choices"][0]["message"]
        return msg if isinstance(msg, dict) else {}
    except (KeyError, IndexError, TypeError):
        return {}


async def complete(session: Any, messages: List[Dict[str, Any]], llm_config: Dict[str, Any]) -> str:
    msg = await _request_message(session, messages, llm_config)
    return strip_think(msg.get("content"))


async def complete_with_tools(session: Any, messages: List[Dict[str, Any]], llm_config: Dict[str, Any],
                              *, tools: List[Dict[str, Any]], tool_executor: ToolExecutor,
                              max_iters: int = 3) -> str:
    """Agentic loop: let the model call tools (course-material lookups) then answer. Appends the
    full assistant message (incl. tool_calls/reasoning) for continuity, runs each tool, feeds the
    results back, and repeats up to max_iters. Never raises — degrades to the last clean content."""
    convo = list(messages)
    last = ""  # best clean `content` seen so far
    # +2 turns beyond the tool rounds so a list -> read -> answer chain plus a stall nudge fits.
    for _ in range(max(1, max_iters) + 2):
        msg = await _request_message(session, convo, llm_config, tools=tools)
        if not msg:
            break
        content = strip_think(msg.get("content"))
        if content:
            last = content
        tool_calls = msg.get("tool_calls") or []
        if not tool_calls:
            return content  # final turn (may be empty if the model produced no answer — safer than guessing)
        convo.append(msg)  # assistant turn with tool_calls (+ reasoning) — required for continuity
        for call in tool_calls:
            if not isinstance(call, dict):
                continue
            fn = call.get("function") or {}
            name = normalize_text(fn.get("name"))
            try:
                args = json.loads(fn.get("arguments") or "{}")
                if not isinstance(args, dict):
                    args = {}
            except (TypeError, ValueError):
                args = {}
            try:
                result = await tool_executor(name, args)
            except Exception as exc:  # executor must be safe; degrade per-call
                result = "tool error: {}".format(exc)
            convo.append({"role": "tool", "tool_call_id": call.get("id", ""),
                          "content": normalize_text(result)})
    return last  # best clean answer seen (empty if the model never produced one — safer than guessing)


async def answer_question(session: Any, question: Question, llm_config: Dict[str, Any], *,
                          tool_executor: Optional[ToolExecutor] = None,
                          tools: Optional[List[Dict[str, Any]]] = None,
                          image_fetcher: Optional[ImageFetcher] = None) -> str:
    """Return the raw LLM reply (letter(s) for selection, short text for open-ended).
    When tools are supplied AND enabled, the model may look up course materials first."""
    content = await build_user_content(question, image_fetcher)
    messages = [
        {"role": "system", "content": SYSTEM_PROMPT},
        {"role": "user", "content": content},
    ]
    use_tools = bool(llm_config.get("enable_tools", True)) and tools and tool_executor

    async def once() -> str:
        if use_tools:
            return await complete_with_tools(
                session, messages, llm_config, tools=tools, tool_executor=tool_executor,
                max_iters=int(llm_config.get("max_tool_iterations", DEFAULT_LLM["max_tool_iterations"]) or 0))
        return await complete(session, messages, llm_config)

    reply = await once()
    if not normalize_text(reply):
        reply = await once()  # one retry: covers a transient API hiccup or a reasoning-model stall
    return reply

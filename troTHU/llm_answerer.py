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

try:
    from troTHU.quiz_engine import normalize_text, option_label
    from troTHU.quiz_models import Question, QuestionType
except ImportError:  # pragma: no cover - script execution fallback
    from quiz_engine import normalize_text, option_label  # type: ignore
    from quiz_models import Question, QuestionType  # type: ignore


SYSTEM_PROMPT = (
    "You are an exam-answering assistant. You are given ONE question. Reply with ONLY the answer "
    "itself — no explanation, no labels, no extra punctuation, no preamble like 'The answer is'.\n"
    "- Multiple choice (lettered options): reply with ONLY the option LETTER(S) — never the option's "
    "text and never a number. One letter for a single answer (e.g. B); comma-separated for multiple "
    "(e.g. A,C). For multiple-answer questions, select ALL correct options. A left-item like '貓 →' is "
    "a single-choice: reply the letter of the option it matches.\n"
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
    "base_url": "https://integrate.api.nvidia.com/v1",
    "model": "minimaxai/minimax-m3",
    # Beginner default: the key is read straight from config.conf [llm] api_key. Advanced users
    # leave api_key blank and set the env var named by api_key_env instead. resolve_api_key() below.
    "api_key": "",
    "api_key_env": "NVIDIA_API_KEY",
    "thinking_mode": "enabled",   # always reason — strict answer formatting needs it
    "max_tokens": 0,              # 0 = use DEFAULT_MAX_TOKENS at send time (m3 returns EMPTY if omitted)
    # MiniMax recommends 1.0 for M3, but for a strict-format answerer + reliable multi-turn tool
    # use, 0.6 is far more consistent (1.0 caused the model to stall mid-tool-loop). top_p/top_k
    # stay at MiniMax's recommended values.
    "temperature": 0.6,
    "top_p": 0.95,
    "top_k": 40,
    "enable_tools": True,
    "max_tool_iterations": 3,
}

# Wire default for max_tokens when the config value is 0/unset. m3-with-reasoning needs an explicit
# cap or it generates nothing (200 + empty choices); this is large enough to never truncate a real
# answer + its reasoning, matching the budget the prompts were tuned for.
DEFAULT_MAX_TOKENS = 16384

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


# ponytail: last-write-wins global — all auto-answer activities share ONE llm_config, so a
# config-level failure (401 / 404 / DNS) is identical across concurrent calls; good enough to report.
_LAST_LLM_ERROR: str = ""


def last_llm_error() -> str:
    """Most recent LLM request-failure reason ('' if the last call was fine). autoanswer_runtime reads
    this to tell the user WHY an answer couldn't be prepared, instead of a silent 準備答案中… stall."""
    return _LAST_LLM_ERROR


def _note_llm_result(reason: str, *, http_status: Any = None) -> None:
    """Record the outcome of an LLM call; reason='' = success (clears). On failure also log to JSONL via
    a LAZY ctx import so this client stays standalone-importable (mirrors tron_http's lazy emit)."""
    global _LAST_LLM_ERROR
    _LAST_LLM_ERROR = reason
    if not reason:
        return
    try:
        try:
            import troTHU.runtime_context as _ctx
        except ImportError:  # pragma: no cover - script execution fallback
            import runtime_context as _ctx  # type: ignore
        _ctx.log_event("llm_call_failed", level="warning", status="error",
                       message=reason, http_status=http_status)
    except Exception:  # logging must never break answering
        pass


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
    # max_tokens MUST be sent: minimaxai/minimax-m3 with reasoning ON returns HTTP 200 + empty
    # `choices: []` when it is OMITTED (verified live — this, not NVIDIA, was the "m3 returns nothing"
    # cause; chat_template_kwargs/top_k are innocent). So 0/unset -> a large default that the reasoning
    # budget was tuned for: never truncates a real answer, but always sends an explicit cap.
    try:
        max_tokens = int(llm_config.get("max_tokens") or 0)
    except (TypeError, ValueError):
        max_tokens = 0
    payload["max_tokens"] = max_tokens if max_tokens > 0 else DEFAULT_MAX_TOKENS
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
        _note_llm_result("尚未設定 LLM 金鑰")
        return {}
    base = normalize_text(llm_config.get("base_url")) or DEFAULT_LLM["base_url"]
    payload = _build_payload(messages, llm_config, tools)
    headers = {"Authorization": "Bearer {}".format(key), "Accept": "application/json"}
    url = "{}/chat/completions".format(base.rstrip("/"))
    # total=None on the READ phase: reasoning is always on + max_tokens large, so one completion can
    # run past the monitor's 20s API cap — inheriting that cap silently dropped valid slow answers.
    # But BOUND the connect phase (connect/sock_connect=15s) so an unreachable base_url fails fast and
    # gets reported, instead of hanging to the 180s outer prepare cap. Every failure records a reason
    # via _note_llm_result (read by autoanswer_runtime) so no misconfig is ever silent.
    try:
        async with session.post(url, headers=headers, json=payload,
                                timeout=aiohttp.ClientTimeout(total=None, connect=15, sock_connect=15)) as resp:
            if resp.status != 200:
                _note_llm_result("LLM 回應 {}｜{}".format(resp.status, _http_status_hint(resp.status) or "請求失敗"),
                                 http_status=resp.status)
                return {}
            data = await resp.json()
    except Exception as exc:  # network/parse — degrade, never crash the loop
        _note_llm_result("連線失敗（檢查 base_url／網路）：{}".format(type(exc).__name__))
        return {}
    try:
        msg = data["choices"][0]["message"]
    except (KeyError, IndexError, TypeError):
        _note_llm_result("回應格式異常（choices/message 缺失或空）")  # e.g. m3 200 + empty choices
        return {}
    if isinstance(msg, dict):
        _note_llm_result("")  # success — clear any prior error
        return msg
    _note_llm_result("回應格式異常（choices/message 缺失或空）")
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
                          image_fetcher: Optional[ImageFetcher] = None,
                          correction: Optional[str] = None) -> str:
    """Return the raw LLM reply (letter(s) for selection, short text for open-ended).
    When tools are supplied AND enabled, the model may look up course materials first.
    `correction` (the previous unparseable reply) re-asks the model to commit to a valid option
    letter — so the answer stays the model's OWN choice, never a fabricated pick."""
    content = await build_user_content(question, image_fetcher)
    messages = [
        {"role": "system", "content": SYSTEM_PROMPT},
        {"role": "user", "content": content},
    ]
    if correction is not None:
        messages.append({"role": "assistant", "content": str(correction)})
        messages.append({"role": "user", "content":
                         "Your previous reply could not be used as an answer. Answer this question NOW in "
                         "the exact required format: for multiple choice reply ONLY the option LETTER(S) "
                         "(e.g. B or A,C) — never the option text; for fill-in give the blank text (multiple "
                         "blanks separated by ' ||| '); for open questions a short direct answer. Do NOT "
                         "explain, and NEVER leave it blank."})
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

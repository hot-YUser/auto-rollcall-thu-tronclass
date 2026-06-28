"""LLM answerer — default backend NVIDIA NIM (OpenAI-compatible chat/completions).

Live-validated against `minimaxai/minimax-m3`: a strict system prompt yields clean
letter-only replies ("A" / "A,C"), so quiz_engine.answer_from_llm_reply maps them
straight to option ids. The API key is read from an env var named in config and is
never written to disk or logged.
"""
from __future__ import annotations
import html
import os
import re
from typing import Any, Dict, List

try:  # pragma: no cover - package import path
    import troTHU.runtime_context as ctx
except ImportError:  # pragma: no cover - direct script fallback
    import runtime_context as ctx  # type: ignore

try:
    from troTHU.quiz_engine import normalize_text, option_label
    from troTHU.quiz_models import Question
except ImportError:  # pragma: no cover - script execution fallback
    from quiz_engine import normalize_text, option_label  # type: ignore
    from quiz_models import Question  # type: ignore


SYSTEM_PROMPT = (
    "You are an exam-answering assistant. You are given one question and its lettered options. "
    "Reply with ONLY the letter(s) of the correct option(s) and nothing else — no explanation, "
    "no punctuation other than commas. For multiple correct answers separate letters with commas "
    "(e.g. A,C). For a single answer reply just the letter (e.g. B). "
    "If the question is open-ended (no options), reply with a short, direct answer only."
)

DEFAULT_LLM: Dict[str, Any] = {
    "provider": "nvidia",
    "base_url": "https://integrate.api.nvidia.com/v1",
    "model": "minimaxai/minimax-m3",
    "api_key_env": "NVIDIA_API_KEY",
    "max_tokens": 8192,
    "temperature": 0.2,   # low for deterministic answering (snippet default 1.0 is for creative use)
    "top_p": 0.95,
}

_TAG_RE = re.compile(r"<[^>]+>")
_WS_RE = re.compile(r"[ \t]*\n[ \t\n]*")
_IMG_SRC_RE = re.compile(r"<img\b[^>]*?\bsrc\s*=\s*([\"'])(.*?)\1", re.IGNORECASE)


def strip_html(text: Any) -> str:
    raw = str(text or "")
    images = "\n".join("[image: {}]".format(m.group(2)) for m in _IMG_SRC_RE.finditer(raw))
    plain = html.unescape(_TAG_RE.sub(" ", raw))
    plain = _WS_RE.sub("\n", plain)
    plain = re.sub(r"[ \t]{2,}", " ", plain).strip()
    return (plain + ("\n" + images if images else "")).strip()


def image_urls(question: Question) -> List[str]:
    urls: List[str] = list(question.image_urls)
    for opt in question.options:
        urls.extend(opt.image_urls)
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
    return "\n".join(lines)


def build_user_content(question: Question) -> Any:
    """Plain string for text questions; multimodal parts list when images are present."""
    text = build_question_text(question)
    urls = image_urls(question)
    if not urls:
        return text
    parts: List[Dict[str, Any]] = [{"type": "text", "text": text}]
    for url in urls:
        parts.append({"type": "image_url", "image_url": {"url": url}})
    return parts


def resolve_api_key(llm_config: Dict[str, Any]) -> str:
    env_name = normalize_text(llm_config.get("api_key_env")) or DEFAULT_LLM["api_key_env"]
    return normalize_text(os.getenv(env_name))


def llm_configured(llm_config: Dict[str, Any]) -> bool:
    return bool(resolve_api_key(llm_config))


async def complete(session: Any, messages: List[Dict[str, Any]], llm_config: Dict[str, Any]) -> str:
    key = resolve_api_key(llm_config)
    if not key:
        return ""
    base = normalize_text(llm_config.get("base_url")) or DEFAULT_LLM["base_url"]
    payload = {
        "model": normalize_text(llm_config.get("model")) or DEFAULT_LLM["model"],
        "messages": messages,
        "max_tokens": int(llm_config.get("max_tokens") or DEFAULT_LLM["max_tokens"]),
        "temperature": float(llm_config.get("temperature", DEFAULT_LLM["temperature"])),
        "top_p": float(llm_config.get("top_p", DEFAULT_LLM["top_p"])),
        "stream": False,
    }
    headers = {"Authorization": "Bearer {}".format(key), "Accept": "application/json"}
    url = "{}/chat/completions".format(base.rstrip("/"))
    try:
        async with session.post(url, headers=headers, json=payload) as resp:
            if resp.status != 200:
                ctx.log(event="autoanswer_llm", status="http_{}".format(resp.status),
                        message="LLM 回應非 200。")
                return ""
            data = await resp.json()
    except Exception as exc:  # network/parse — degrade, never crash the loop
        ctx.log(event="autoanswer_llm", status="error", message="LLM 呼叫失敗。", error=exc)
        return ""
    try:
        return normalize_text(data["choices"][0]["message"].get("content"))
    except (KeyError, IndexError, TypeError):
        return ""


async def answer_question(session: Any, question: Question, llm_config: Dict[str, Any]) -> str:
    """Return the raw LLM reply (letter(s) for selection, short text for open-ended)."""
    messages = [
        {"role": "system", "content": SYSTEM_PROMPT},
        {"role": "user", "content": build_user_content(question)},
    ]
    return await complete(session, messages, llm_config)

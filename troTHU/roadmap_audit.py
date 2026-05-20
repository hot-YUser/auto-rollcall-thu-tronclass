from __future__ import annotations

import copy
from typing import Any, Dict, Iterable, List, Mapping


AUDIT_VERSION = "roadmap-audit-v1"
ROUND_ID = 29

COMPETITOR_IDS = (
    "tronclass_rollcall-main",
    "tronclass_plus-main",
    "XMU-Rollcall-Bot-main",
    "xmu_rollcall_zako_Tronclass-main",
    "Tronclass_Bot-main",
    "Tronclass_Position-main",
    "fuck_tronclass_sign-main",
    "tronclass-script-main",
)

CAPABILITY_IDS = (
    "thu_core",
    "qr",
    "radar",
    "number",
    "bot",
    "line_discord_tg",
    "multi_account",
    "provider_fju_tku",
    "app_shell",
    "release_package",
    "observability",
    "security",
    "research",
)

PROVIDER_SCOPE = {
    "thu": {"support_level": "ready", "daily_ready": True},
    "fju": {"support_level": "experimental", "daily_ready": False},
    "tku": {"support_level": "experimental", "daily_ready": False},
}

_COMPETITORS: List[Dict[str, Any]] = [
    {
        "id": "tronclass_rollcall-main",
        "role": "Rust architecture reference for provider-aware monitoring, account store, adapter events, and QR fan-out.",
        "source_points": {
            "overview": "readme.md",
            "manifest": "Cargo.toml",
            "entry": "src/main.rs",
            "core": ["src/rollcalls/mod.rs", "src/monitor.rs", "src/adapters/line/scanner.html"],
        },
        "absorbed": [
            "provider-aware THU core with FJU/TKU expansion points",
            "adapter-neutral Bot runtime, authz, audit, cooldown, and notification bus",
            "QR fan-out registry, local scanner, LINE webhook, Discord HTTP Interactions, optional Gateway core, modal QR UX, and Telegram outbound sink",
            "runtime state summary and account-specific status/accounts commands",
        ],
        "remaining_gap": [
            "long-running deployment hardening still needs real acceptance runs",
            "platform-specific role and timetable extras remain optional",
            "SQLite-scale account store is not needed yet for this project size",
        ],
        "strategy": "Use it as the main architecture comparator, but keep Python JSON state until scale justifies a database.",
        "replacement_difficulty": "medium",
        "priority": "required comparator",
    },
    {
        "id": "tronclass_plus-main",
        "role": "Flutter UX reference for cross-platform App, WebView bridge, QR camera flow, radar map picking, and multi-account UI.",
        "source_points": {
            "overview": "README.md",
            "manifest": "pubspec.yaml",
            "entry": "lib/main.dart",
            "core": ["lib/routes.dart", "lib/webview/webview.dart", "lib/auth/saved_account_storage.dart"],
        },
        "absorbed": [
            "App blueprint, local companion shell, QR scanner view state, WebView sync contract, and radar map assist contract",
            "safe preview-only localhost shell panels, UI view model, drilldowns, action catalog, validation summary, provider verification, release, diagnostics, and logs",
        ],
        "remaining_gap": [
            "native/mobile App is not implemented",
            "camera decoder and map SDK are intentionally deferred",
            "App-side encrypted vault remains future work",
        ],
        "strategy": "Treat as UX inspiration; keep CLI/Bot/local shell as primary until a real App is worth the maintenance cost.",
        "replacement_difficulty": "high",
        "priority": "optional polish",
    },
    {
        "id": "XMU-Rollcall-Bot-main",
        "role": "Python CLI distribution reference with package metadata, account switching, monitor command, and dashboard-like terminal UX.",
        "source_points": {
            "overview": "README.md",
            "manifest": "xmu-rollcall-cli/pyproject.toml",
            "entry": "xmu-rollcall-cli/xmu_rollcall/cli.py",
            "core": ["xmu-rollcall-cli/xmu_rollcall/rollcall_handler.py", "xmu-rollcall-cli/xmu_rollcall/monitor.py"],
        },
        "absorbed": [
            "pyproject metadata, console scripts, package diagnostics, release checks, dashboard/log summary, and account profiles",
            "safe release build runner, Windows zip packaging, artifact validation, and temporary extracted CLI smoke",
        ],
        "remaining_gap": [
            "release artifacts must be refreshed whenever code changes before distribution",
            "some XMU answer-discovery ideas stay outside daily automation",
        ],
        "strategy": "Keep the release and CLI ergonomics, but do not copy risky answer-discovery flow into daily operation.",
        "replacement_difficulty": "low",
        "priority": "mostly surpassed",
    },
    {
        "id": "xmu_rollcall_zako_Tronclass-main",
        "role": "GUI and research reference for course discovery, browser metadata observation, and Playwright-assisted exploration.",
        "source_points": {
            "overview": "README.md",
            "manifest": "requirements.txt",
            "entry": "zako_app_V2.0.py",
            "core": ["zako_get_rollcall.py", "rollcall_capturer.py"],
        },
        "absorbed": [
            "course/semester discovery facade, research sandbox gate, browser availability check, local app shell contracts, and logs UX",
        ],
        "remaining_gap": [
            "full GUI is not implemented",
            "browser automation remains optional metadata-only research",
            "direct answer lookup stays excluded from daily flow",
        ],
        "strategy": "Use its discovery and GUI lessons, while keeping risky exploration behind explicit research gates.",
        "replacement_difficulty": "medium",
        "priority": "research reference",
    },
    {
        "id": "Tronclass_Bot-main",
        "role": "Discord UX reference with slash commands, modal login, channel binding, feedback, and class timetable extras.",
        "source_points": {
            "overview": "README.md",
            "manifest": "requirements.txt",
            "entry": "fkustupidbot.py",
            "core": ["ulearn.py", "json_edit.py"],
        },
        "absorbed": [
            "Discord HTTP Interactions, slash schema, optional raw Gateway core, QR modal UX, schema sync dry-run, account-specific status/accounts controls, channel restrictions, and admin-safe commands",
        ],
        "remaining_gap": [
            "modal login remains intentionally rejected; timetable extras and platform role mapping are optional",
            "unsafe credential and platform key handling were rejected",
        ],
        "strategy": "Keep the interactive command UX ideas, but preserve this project's stricter authz and secret-handling model.",
        "replacement_difficulty": "medium",
        "priority": "optional polish",
    },
    {
        "id": "Tronclass_Position-main",
        "role": "Small NFU radar payload and coordinate reference.",
        "source_points": {
            "overview": "README.md",
            "manifest": "requirements.txt",
            "entry": "main.py",
            "core": ["ulearn.py", "coordinate_test.py"],
        },
        "absorbed": [
            "radar payload compatibility helper, lite/beacon parser, dynamic fake distance fixture, and radar map assist contract",
        ],
        "remaining_gap": [
            "more masked THU radar examples would improve confidence",
            "NFU is no longer a provider target",
        ],
        "strategy": "Use only as radar shape reference; do not expand provider scope beyond THU/FJU/TKU.",
        "replacement_difficulty": "low",
        "priority": "fixture reference",
    },
    {
        "id": "fuck_tronclass_sign-main",
        "role": "QR compact payload parser and scanner-jumper reference.",
        "source_points": {
            "overview": "readme.md",
            "manifest": "main.py imports",
            "entry": "main.py",
            "core": ["parse_sign_qr_code.py"],
        },
        "absorbed": [
            "QR diagnostic parser, compact payload variants, query-only inputs, alias handling, unknown field preservation, and synthetic fixture corpus",
        ],
        "remaining_gap": [
            "image decoding remains deferred",
            "unverified header assumptions remain research-only",
        ],
        "strategy": "Keep parser coverage and diagnostics; avoid unverified request-header behavior in daily QR submit.",
        "replacement_difficulty": "low",
        "priority": "parser reference",
    },
    {
        "id": "tronclass-script-main",
        "role": "Early Python baseline for asynchronous polling, number automation, schedule window, and legacy messaging.",
        "source_points": {
            "overview": "README.md",
            "manifest": "requirements.txt",
            "entry": "troNTOU/tron.py",
            "core": ["troNTOU/tron.py"],
        },
        "absorbed": [
            "number flow, schedule helpers, legacy messaging compatibility, Telegram/Discord delivery paths, safer diagnostics, and test coverage",
        ],
        "remaining_gap": [
            "the project is now surpassed for THU daily core",
            "unsafe transport and brute-force defaults were rejected",
        ],
        "strategy": "Keep only historical compatibility lessons; this project is no longer a serious gap driver.",
        "replacement_difficulty": "low",
        "priority": "surpassed baseline",
    },
]

_CAPABILITIES: List[Dict[str, Any]] = [
    {
        "id": "thu_core",
        "label": "THU core",
        "status": "completed_core_pending_real_acceptance",
        "competitor_sources": ["tronclass_rollcall-main", "tronclass-script-main"],
        "current_state": "THU login, auth restore, rollcall polling, doctor, fake server, and core CLI are covered by tests.",
        "gap": "needs one masked real-world acceptance pass across number, radar, QR, refresh, and Bot sandbox.",
        "recommended_next_step": "run R1-REAL-VALIDATION with a manual checklist and record masked outcomes.",
        "estimated_rounds": 1,
        "blocks_upper_replacement": True,
        "acceptance": "all THU daily flows pass manual checklist without sensitive output.",
    },
    {
        "id": "qr",
        "label": "QR",
        "status": "completed_core_pending_more_samples",
        "competitor_sources": ["tronclass_rollcall-main", "tronclass_plus-main", "fuck_tronclass_sign-main"],
        "current_state": "parser diagnostics, fixture corpus, local scanner, fan-out matching, Bot single/fan-out commands, and scanner UX are implemented.",
        "gap": "camera-native App remains deferred; more masked classroom variants would improve confidence.",
        "recommended_next_step": "include QR in R1 manual validation; keep App camera work optional.",
        "estimated_rounds": 0,
        "blocks_upper_replacement": False,
        "acceptance": "manual QR and fan-out pass with safe preview and no fallback on no-match.",
    },
    {
        "id": "radar",
        "label": "Radar",
        "status": "completed_core_pending_real_acceptance",
        "competitor_sources": ["tronclass_plus-main", "Tronclass_Position-main", "tronclass_rollcall-main"],
        "current_state": "THU geometry solver, lite/beacon compatibility, safe diagnostics, fake dynamic distance, and map assist contract are implemented.",
        "gap": "needs masked real response variants and one end-to-end THU classroom validation.",
        "recommended_next_step": "validate radar in R1; keep visual map SDK work optional.",
        "estimated_rounds": 1,
        "blocks_upper_replacement": True,
        "acceptance": "radar handles success, out-of-range, auth failure, throttle, and backend failure safely.",
    },
    {
        "id": "number",
        "label": "Number",
        "status": "completed_core_pending_real_acceptance",
        "competitor_sources": ["tronclass_rollcall-main", "XMU-Rollcall-Bot-main", "tronclass-script-main"],
        "current_state": "response classification, cooldown, concurrency guard, progress messages, and fake outcomes are covered.",
        "gap": "needs a current THU manual acceptance pass and more masked failure examples.",
        "recommended_next_step": "validate number flow in R1; keep direct answer discovery excluded.",
        "estimated_rounds": 1,
        "blocks_upper_replacement": True,
        "acceptance": "number flow stops on success, auth failure, throttle, and unknown backend response with safe logs.",
    },
    {
        "id": "bot",
        "label": "Bot runtime",
        "status": "completed_production_and_optional_gateway_core",
        "competitor_sources": ["tronclass_rollcall-main", "Tronclass_Bot-main"],
        "current_state": "generic HTTP, LINE webhook, Discord HTTP Interactions, optional raw Gateway core, QR modal UX, schema sync dry-run, authz, audit, cooldown, accounts/status, QR commands, force, and reauth are implemented.",
        "gap": "platform role mapping, timetable extras, and modal login are optional or intentionally rejected, not required for upper replacement.",
        "recommended_next_step": "document sandbox setup and include Bot smoke in R1.",
        "estimated_rounds": 0,
        "blocks_upper_replacement": False,
        "acceptance": "bound users and admins receive correct safe replies across generic, LINE, Discord HTTP, and fake Gateway routes.",
    },
    {
        "id": "line_discord_tg",
        "label": "LINE / Discord / TG",
        "status": "completed_core",
        "competitor_sources": ["tronclass_rollcall-main", "Tronclass_Bot-main", "tronclass-script-main"],
        "current_state": "LINE reply/push, Discord interaction/channel push, optional Gateway dispatch, Telegram outbound sink, and legacy messaging compatibility are implemented.",
        "gap": "platform screenshots and deployment examples can be improved; Telegram inbound is intentionally deferred.",
        "recommended_next_step": "add concise setup checklist in R3 docs polish.",
        "estimated_rounds": 0,
        "blocks_upper_replacement": False,
        "acceptance": "notification bus failures do not break legacy delivery and outbound adapters sanitize responses.",
    },
    {
        "id": "multi_account",
        "label": "Multi-account",
        "status": "completed_core",
        "competitor_sources": ["tronclass_rollcall-main", "tronclass_plus-main", "XMU-Rollcall-Bot-main"],
        "current_state": "profiles, bindings, runtime store, account state, pending QR per profile, and account-specific Bot controls are implemented.",
        "gap": "database-scale store and native account manager UI remain unnecessary unless user count grows.",
        "recommended_next_step": "include account switching and account state in R1/R3 acceptance docs.",
        "estimated_rounds": 0,
        "blocks_upper_replacement": False,
        "acceptance": "bound users only see their own account summary and admins can view all safe summaries.",
    },
    {
        "id": "provider_fju_tku",
        "label": "FJU/TKU provider",
        "status": "experimental_blocked_by_user_fixture",
        "competitor_sources": ["tronclass_rollcall-main"],
        "current_state": "registry is scoped to THU ready plus FJU/TKU experimental, with provider CLI, verification checklist, fixture validator, fixture review, and ready gate.",
        "gap": "cannot become daily-ready without user-provided masked fixture and manual acceptance.",
        "recommended_next_step": "pause until FJU/TKU fixture is provided; use the existing review CLI and do not expand to other schools.",
        "estimated_rounds": 0,
        "blocks_upper_replacement": False,
        "acceptance": "FJU/TKU ready gate can review masked fixture but registry remains experimental until explicit promotion.",
    },
    {
        "id": "app_shell",
        "label": "App shell",
        "status": "completed_polished_readonly_shell_core",
        "competitor_sources": ["tronclass_plus-main", "xmu_rollcall_zako_Tronclass-main"],
        "current_state": "App blueprint, local companion shell, dashboard cards, UI model, drilldown routes, action catalog, validation summary, QR preview, WebView preview, radar assist, provider verify, and release panels exist.",
        "gap": "native/mobile shell, camera decoder, map SDK, and mutation routes are intentionally deferred.",
        "recommended_next_step": "only polish if user wants a GUI; do not block THU upper replacement on this.",
        "estimated_rounds": 0,
        "blocks_upper_replacement": False,
        "acceptance": "local shell remains localhost-only and preview/read-only unless a future explicit scope changes it.",
    },
    {
        "id": "release_package",
        "label": "Release / package",
        "status": "completed_artifact_build_core",
        "competitor_sources": ["XMU-Rollcall-Bot-main", "xmu_rollcall_zako_Tronclass-main"],
        "current_state": "pyproject, console scripts, package-check, release-check, release-build runner, artifact packaging, zip manifest validation, extracted smoke, hidden import checks, and CI smoke are implemented.",
        "gap": "release artifacts should be rebuilt before distribution after meaningful code changes.",
        "recommended_next_step": "keep release-build and release-check in the pre-release checklist; no longer a minimum blocker.",
        "estimated_rounds": 0,
        "blocks_upper_replacement": False,
        "acceptance": "a local artifact passes release-check, excludes private state, starts CLI, and runs status/package-check smoke.",
    },
    {
        "id": "observability",
        "label": "Observability",
        "status": "completed_core",
        "competitor_sources": ["XMU-Rollcall-Bot-main", "tronclass_rollcall-main"],
        "current_state": "status, doctor, dashboard, logs summary, recent notable events, account state, shell cards, and package/release diagnostics are implemented.",
        "gap": "user-facing troubleshooting flow can be clearer.",
        "recommended_next_step": "fold key diagnostics into R3 quickstart and troubleshooting docs.",
        "estimated_rounds": 0,
        "blocks_upper_replacement": False,
        "acceptance": "a user can inspect local state without external calls or sensitive output.",
    },
    {
        "id": "security",
        "label": "Security",
        "status": "completed_core",
        "competitor_sources": ["tronclass_plus-main", "Tronclass_Bot-main", "tronclass-script-main"],
        "current_state": "env/keyring support, strict adapter authz, allowed channels, audit, cooldown, localhost gate, research gates, fixture validators, and safe summaries exist.",
        "gap": "deployment guide should clearly mark trust boundaries and public webhook requirements.",
        "recommended_next_step": "update R3 docs with a short security checklist.",
        "estimated_rounds": 0,
        "blocks_upper_replacement": False,
        "acceptance": "dangerous actions require binding/admin checks and outputs avoid credential material.",
    },
    {
        "id": "research",
        "label": "Research",
        "status": "completed_sandbox_core",
        "competitor_sources": ["xmu_rollcall_zako_Tronclass-main", "XMU-Rollcall-Bot-main", "fuck_tronclass_sign-main"],
        "current_state": "research sandbox, safe target allowlist, browser metadata check, provider fixture validation, and risky endpoint rejection are implemented.",
        "gap": "additional study tools should remain opt-in and never feed daily automation.",
        "recommended_next_step": "keep research work separate from the upper-replacement claim.",
        "estimated_rounds": 0,
        "blocks_upper_replacement": False,
        "acceptance": "research commands are gated and cannot capture unredacted backend bodies.",
    },
]

_ROUND_GROUPS: List[Dict[str, Any]] = [
    {
        "id": "P0",
        "label": "Required before claiming THU upper replacement",
        "items": [
            {
                "id": "R1-REAL-VALIDATION",
                "title": "THU real-world acceptance pass",
                "why": "The codebase has strong offline coverage, but the upper-replacement claim needs one masked real run across daily flows.",
                "estimated_rounds": 1,
                "blocks_upper_replacement": True,
                "acceptance": [
                    "number, radar, QR, QR fan-out, auth refresh, status, dashboard, and Bot sandbox are checked manually",
                    "outcomes are recorded as masked summaries only",
                    "no new provider is promoted",
                ],
            },
            {
                "id": "R2-RELEASE-BUILD",
                "title": "Opt-in local release artifact pass",
                "why": "Completed core: release-build can run tests, PyInstaller, safe zip packaging, artifact validation, and extracted CLI smoke.",
                "status": "completed_core",
                "estimated_rounds": 0,
                "blocks_upper_replacement": False,
                "acceptance": [
                    "local artifact is built only after explicit opt-in",
                    "artifact passes release-check, package-check, doctor, and CLI smoke",
                    "private config/state/log/test data are excluded",
                ],
            },
            {
                "id": "R3-DOCS-USAGE-POLISH",
                "title": "User-facing quickstart and acceptance docs",
                "why": "Completed core: README now gives quickstart, daily paths, R1/R2/R3 acceptance, release-build, and troubleshooting.",
                "status": "completed_core",
                "estimated_rounds": 0,
                "blocks_upper_replacement": False,
                "acceptance": [
                    "README quickstart covers CLI, Bot, QR scanner, package-check, release-check, and troubleshooting",
                    "manual acceptance checklist is written for THU",
                    "research and experimental provider limits are explicit",
                ],
            },
        ],
    },
    {
        "id": "P1",
        "label": "Strong polish after the claim is supportable",
        "items": [
            {
        "id": "R4-APP-SHELL-POLISH",
        "title": "Read-only companion shell polish",
        "why": "Completed theoretical core: UI model, drilldowns, action catalog, validation summary, and polished read-only panels exist.",
        "status": "completed_theoretical_core",
        "estimated_rounds": 0,
                "blocks_upper_replacement": False,
                "acceptance": [
                    "read-only tabs are easier to scan",
                    "handoff commands remain safe templates",
                    "no mutation route is added",
                ],
            },
            {
        "id": "R5-DISCORD-GATEWAY-OPTIONAL",
        "title": "Optional Discord Gateway or command sync",
        "why": "Completed optional core: raw Gateway dry-run/runner, QR modal UX, and schema sync helper exist without adding a large SDK.",
        "status": "completed_optional_core",
        "estimated_rounds": 0,
                "blocks_upper_replacement": False,
                "acceptance": [
                    "Gateway or sync is optional and can be disabled",
                    "existing HTTP endpoint remains supported",
                    "authz/audit/cooldown behavior stays identical",
                ],
            },
        ],
    },
    {
        "id": "P2",
        "label": "Blocked by user-provided masked fixture",
        "items": [
            {
        "id": "R6-FJU-TKU-FIXTURE-REVIEW",
        "title": "FJU/TKU ready review",
        "why": "Completed review core: template, file/dir review, missing evidence matrix, and additive provider/doctor summaries exist; promotion still needs user evidence.",
        "status": "completed_theoretical_core_blocked_by_user_evidence",
        "estimated_rounds": 0,
                "blocks_upper_replacement": False,
                "blocked_by": "user_masked_fixture",
                "acceptance": [
                    "fixture validator accepts the masked evidence",
                    "ready gate reports candidate-ready",
                    "promotion requires a separate explicit registry decision",
                ],
            }
        ],
    },
    {
        "id": "P3",
        "label": "Can defer or intentionally skip",
        "items": [
            {
                "id": "D1-NATIVE-APP",
                "title": "Full native/mobile App",
                "why": "Useful for UX, but the local shell and scanner already cover the safe companion path.",
                "estimated_rounds": 3,
                "blocks_upper_replacement": False,
                "acceptance": ["only revisit after CLI/Bot/release are validated"],
            },
            {
                "id": "D2-RISKY-ENDPOINTS",
                "title": "Direct answer-discovery endpoints",
                "why": "They conflict with the daily-safe boundary and remain research-only or rejected.",
                "estimated_rounds": 0,
                "blocks_upper_replacement": False,
                "acceptance": ["do not implement in daily automation"],
            },
            {
                "id": "D3-NON-FJU-TKU-PROVIDERS",
                "title": "Extra school providers beyond FJU/TKU",
                "why": "Current scope is deliberately narrowed to avoid endless provider drift.",
                "estimated_rounds": 0,
                "blocks_upper_replacement": False,
                "acceptance": ["do not add NFU/GUET/XMU provider targets"],
            },
        ],
    },
]


def _deepcopy(value: Any) -> Any:
    return copy.deepcopy(value)


def _sum_rounds(groups: Iterable[Mapping[str, Any]], *, blocking_only: bool = False) -> int:
    total = 0
    for group in groups:
        for item in group.get("items", []):
            if blocking_only and not bool(item.get("blocks_upper_replacement")):
                continue
            total += int(item.get("estimated_rounds") or 0)
    return total


def build_goal_distance_report(config: Any = None) -> Dict[str, Any]:
    """Return a safe strategic distance report for the upper-replacement goal."""
    _ = config
    capabilities = _deepcopy(_CAPABILITIES)
    competitors = _deepcopy(_COMPETITORS)
    blockers = [item for item in capabilities if item.get("blocks_upper_replacement")]
    minimum_rounds = _sum_rounds(_ROUND_GROUPS[:1], blocking_only=True)
    strong_rounds = _sum_rounds(_ROUND_GROUPS[:2])
    return {
        "version": AUDIT_VERSION,
        "round": ROUND_ID,
        "goal": "become the upper replacement for the local THU-focused TronClass helper ecosystem",
        "provider_scope": _deepcopy(PROVIDER_SCOPE),
        "competitor_count": len(competitors),
        "competitors": competitors,
        "capability_count": len(capabilities),
        "capability_areas": capabilities,
        "distance": {
            "blocking_capability_count": len(blockers),
            "blocking_capabilities": [item["id"] for item in blockers],
            "minimum_rounds_to_thu_claim": minimum_rounds,
            "strong_polish_rounds_total": strong_rounds,
            "cross_school_ready": "blocked_by_user_masked_fixture",
        },
        "completion_definition": {
            "minimum_claim": [
                "THU number, radar, QR, QR fan-out, auth refresh, Bot sandbox, and dashboard pass masked real acceptance",
                "release artifact build and user-facing quickstart/troubleshooting are already in place and must remain current",
                "FJU/TKU remain experimental unless a masked fixture is reviewed and explicitly promoted",
            ],
            "not_required_for_minimum_claim": [
                "native/mobile App",
                "Discord Gateway",
                "Telegram inbound commands",
                "providers beyond FJU/TKU",
                "direct answer-discovery endpoints",
            ],
        },
        "next_recommended_rounds": ["R1-LIVE-ACCEPTANCE-RECORDS"],
    }


def build_remaining_round_plan(config: Any = None) -> Dict[str, Any]:
    """Return the remaining engineering-round plan sorted by replacement value."""
    _ = config
    groups = _deepcopy(_ROUND_GROUPS)
    return {
        "version": AUDIT_VERSION,
        "round": ROUND_ID,
        "groups": groups,
        "total_estimates": {
            "minimum_to_claim_thu_upper_replacement": _sum_rounds(groups[:1], blocking_only=True),
            "strong_polish_total": _sum_rounds(groups[:2]),
            "fju_tku_after_user_fixture": 0,
        },
        "blockers": [
            {
                "id": "real_world_validation",
                "reason": "offline tests are strong but do not prove current classroom behavior",
                "unblocks": "minimum THU upper-replacement claim",
            },
            {
                "id": "user_masked_fixture",
                "reason": "FJU/TKU cannot be promoted without external masked evidence",
                "unblocks": "cross-school ready claim for FJU/TKU only",
            },
        ],
        "next_recommended_round": "R1-REAL-VALIDATION",
    }


def format_goal_distance_summary(report: Mapping[str, Any]) -> List[str]:
    distance = report.get("distance", {})
    lines = [
        "Roadmap audit v{} (round {})".format(report.get("version", ""), report.get("round", "")),
        "Competitors checked: {}".format(report.get("competitor_count", 0)),
        "Capabilities checked: {}".format(report.get("capability_count", 0)),
        "Blocking capability areas: {}".format(", ".join(distance.get("blocking_capabilities", [])) or "none"),
        "Minimum remaining engineering rounds for THU upper-replacement claim: {}".format(
            distance.get("minimum_rounds_to_thu_claim", 0)
        ),
        "Strong polish total including optional UX rounds: {}".format(distance.get("strong_polish_rounds_total", 0)),
        "FJU/TKU status: {}".format(distance.get("cross_school_ready", "")),
    ]
    for item in report.get("capability_areas", []):
        if item.get("blocks_upper_replacement"):
            lines.append(
                "- {label}: {gap} Next: {next}".format(
                    label=item.get("label", item.get("id", "")),
                    gap=item.get("gap", ""),
                    next=item.get("recommended_next_step", ""),
                )
            )
    for item in report.get("capability_areas", []):
        if item.get("id") == "release_package":
            lines.append(
                "- release_package: {status}; {next}".format(
                    status=item.get("status", ""),
                    next=item.get("recommended_next_step", ""),
                )
            )
    return lines

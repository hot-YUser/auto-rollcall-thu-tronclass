# Codex Deep-Dive Worklog

Workspace: `C:\Users\YUser\Documents\tronclass_reverse_engineering - codex`
Started: 2026-05-23
Goal status: completed

## Mission

Deeply inspect the TronClass reverse-engineering corpus and record every explored area, lead, finding, and remaining question until there is no worthwhile unexplored path left.

## Ground Rules Learned

- Corpus is static reverse-engineering output, not a buildable app/site project.
- No git repository is present.
- PII has been redacted; structural IDs, routes, endpoints, bundle metadata, Android resources, decompiled sources, smali, and native-library summaries remain.
- Primary datasets:
  - `app/`: Android app `com.wisdomgarden.trpc`, mobile v2.14.5, `versionCode 1000018`.
  - `web/iclass/`: Tamkang `iclass.tku.edu.tw`, frontend v1.77 (`1.77.117541`).
  - `web/ilearn/`: Tunghai `ilearn.thu.edu.tw`, frontend v1.78 (`1.78.118597`).
- APP vs Web chunks cannot be aligned by chunk id/hash; compare by API, route, feature, and bridge semantics.
- iClass vs iLearn web chunks can be aligned by numeric bundle id and SHA-256 where needed.

## Exploration Map

| Area | Status | Notes |
| --- | --- | --- |
| Root docs and privacy/manifests | Explored, revisit only for references | Read `README.md`, root `CLAUDE.md`, `PRIVACY_NOTICE.md`; confirmed redaction and dataset boundaries. |
| Filesystem inventory | Explored, more targeted counts as needed | `app` ~22,562 files, `web` ~4,796 files. Major extensions: smali/java/js/css/xml/json/png/html. |
| `web/` shared guidance | Explored | Read `web/README.md`, `web/CLAUDE.md`; confirmed AngularJS shell plus Vue/Webpack and raw/indexed snapshot layout. |
| `web/iclass/` report/indexes | Explored; residuals are server/runtime only | 1,621 HTTP 200 captures, 739 unique API endpoints, 335 routes, 100 readable JS bundles. |
| `web/ilearn/` report/indexes | Explored; residuals are server/runtime only | 1,660 HTTP 200 captures, 756 unique API endpoints, 332 routes, 100 readable JS bundles; unique chatbot UMD bundle. |
| Cross-dataset web comparison | Explored | Structured API/route/host diffs generated; institution-specific and feature-specific deltas recorded below. Admin/stat/export/data-import/AI/KG source sampling completed. |
| Web browser/client-risk surfaces | Explored; residuals are token/header/backend validation | Browser-surface counts plus source-confirmed plugin JWT iframe, classroom-report plugin iframe, OBE/replay/player iframes, iLearn chatbot eval/storage/cookie bundle, AISK static JWT iframe, final sink sweep. |
| Android manifest/resources | Explored | Manifest flags, permissions, exported components, FileProvider paths, Cordova/Capacitor plugins, resource keys/app ids inspected. |
| Android Java/Kotlin decompiled sources | Explored | MainActivity and high-value native plugins inspected: OTA updater, Beacon, geolocation, MediaPicker, barcode scanner, open-with, file permission, storage plugins. |
| Android WebView bundle | Explored | Env/index/native bridge/identity proxy, app-vs-web API diff, OTA/Beacon call sites, constants, identity token flow, Scanner QR dispatch, callback/session, postMessage, and final sink sweep inspected. |
| Android hidden/debug panels | Explored | Dynamic anonymous debug routes, Search `:debug`/`:test`, About version 5-tap vConsole door, debug/logs/beacon/video/OTA test pages, and reachability matrix inspected. |
| Android push/telemetry config | Source-validated | OneSignal and JPush IDs/flow confirmed; no `google-services.json` / `agconnect-services.json` found. Huawei/Xiaomi hits are manifest badge/OneSignal-HMS/shortcut-badger SDK traces, not standalone project push config in this corpus. |
| Native libraries | Explored at high-value level | Native summaries plus SQLCipher/storage/JNI-adjacent source pass completed; remaining image-processing internals did not expose an obvious static control point. |
| Secret/sensitive string sweep | Explored | Targeted resource/app config/credential-like scan completed with sanitized output. Static AISK JWT and expected public app IDs recorded; no private key/AWS key/password pair observed. |
| Public raw snapshots/API responses | Explored; access control requires live testing | Raw API status counts, selected 200/403/404/500 shapes, OAuth authorization URLs, org/profile/user-resource/bulletin snapshots, plugin raw misses, and QR image capture summarized without PII recovery. |

## Confirmed Findings

### Corpus Shape

- The repo is a three-corpus reverse-engineering set: Android APP, iClass web, iLearn web.
- It is not runnable offline: web data is static captured output plus indexes; Android is decompiled/unpacked output.
- Root docs explicitly say APP/Web chunk IDs cannot be compared directly.

### Web Surface Summary

- iClass report:
  - Manifest entries: 2,339.
  - HTTP statuses: 200=1,621, 400=14, 403=45, 404=501, 500=158.
  - JS/CSS: 867 JS, 259 CSS.
  - API: 739 unique endpoints.
  - Routes: 335 unique routes.
  - HTML entrypoints: 452.
  - Readable JS bundles: 100.
- iLearn report:
  - Manifest entries: 2,197.
  - HTTP statuses: 200=1,660, 400=12, 403=34, 404=370, 500=121.
  - JS/CSS: 881 JS, 266 CSS.
  - API: 756 unique endpoints.
  - Routes: 332 unique routes.
  - HTML entrypoints: 319.
  - Readable JS bundles: 100.
- Both deployments expose the same general families: course, activity, rollcall, exam, resource, stat/export, authz, Google/Microsoft integration, Tencent meeting, subject libs, knowledge graph, custom knowledge graph.
- iLearn has a unique chatbot UMD bundle absent from iClass.

### Structured iClass vs iLearn Web Diff

- Summary delta:
  - API occurrences: iClass 8,791 vs iLearn 7,866.
  - Unique API endpoints: iClass 739 vs iLearn 756.
  - Indexed bundles: iClass 1,126 vs iLearn 1,147.
  - External URLs: iClass 4,927 vs iLearn 3,745.
  - HTML entrypoints: iClass 452 vs iLearn 319.
  - Route occurrences: iClass 3,812 vs iLearn 2,694.
  - Unique routes: iClass 335 vs iLearn 332.
- iClass-only routes found:
  - `/course/activities/{expr}/preview-activity-rich-content?type=forum`
  - `/course/questionnaire-exam/{expr}#/{expr}/take`
  - `/course/{expr}/exam#/{expr}/submission/{expr}`
  - `/course/{expr}/rollcall`
  - `/exam/{expr}/subjects#/take`
- iLearn-only routes found:
  - `/course/{expr}/knowledge-graph`
  - `/course/{id}/notebook`
- iClass-only endpoint families include media captions, explicit questionnaire/exam preview surfaces, rollcall route, and institution-specific upload URL variants.
- iLearn-only endpoint families include `through-course`, `air-credit`, `notebooks`, `my-academic-years`, `course/copy-as-blueprint`, and `knowledge-graph/kfs-courses`.
- iClass-only external hosts include `sso.tku.edu.tw`, `ap09.emis.tku.edu.tw`, `enroll.tku.edu.tw`, `tc-ipt.tku.edu.tw`, `tkutcmediatw.z40.web.core.windows.net`, `colab.research.google.com`, `slides.com`.
- iLearn-only external hosts include `tcidentity.thu.edu.tw`, `student.next.thu.edu.tw`, `event.ithu.tw`, `tciportal.thu.edu.tw`, `forms.gle`, `lxqnsys.com`, `hammerjs.github.io`, `jedwatson.github.io`, `vuejs.org`, `www.apache.org`.

### Browser/Client Surface Signals

- iClass indexed browser surface counts:
  - iframe: 5,457 hits / 303 files.
  - Sentry: 3,036 / 285.
  - analytics: 1,258 / 294.
  - cookies: 1,062 / 127.
  - fetch/xhr: 958 / 480.
  - crypto: 859 / 84.
  - localStorage: 509 / 69.
  - postMessage: 205 / 40.
  - dynamic script: 182 / 139.
  - eval-like: 179 / 47.
  - sessionStorage: 112 / 16.
  - websocket: 6 / 2.
- iLearn indexed browser surface counts:
  - iframe: 3,673 hits / 212 files.
  - Sentry: 2,138 / 196.
  - cookies: 1,081 / 123.
  - analytics: 907 / 204.
  - fetch/xhr: 905 / 397.
  - crypto: 871 / 85.
  - localStorage: 525 / 75.
  - postMessage: 210 / 41.
  - dynamic script: 194 / 142.
  - eval-like: 180 / 48.
  - sessionStorage: 117 / 18.
  - websocket: 6 / 2.
- Deep sample pass:
  - Most `postMessage` hits are `iframe-resizer` and framework/runtime code, but several business iframes explicitly call `iFrameResize({checkOrigin:false})`.
  - `10248.e193e757.js` loads the textbook/stat plugin config through `/api/plugins/course.stat.textbook`, obtains a plugin JWT through `/api/plugins/{pluginId}/jwt-token?course_id={courseId}`, then embeds `{plugin.url}?courseCode=...&token=...` into `#textbookListIframe` with `checkOrigin:false`.
  - `8870.*.js` defines the related plugin helpers: GET `/api/plugins/{plugin}`, GET `/api/plugins/{plugin}/jwt-token?course_id=...`, and GET `/api/stat/courses/{id}/textbook`.
  - Raw validation: iClass has captured `/api/plugins/` and `/api/classroom-report/plugins/` index-style probes, both 404 JSON (`{"message":"未找到資源"}`). No plugin config/JWT body was captured for the exact slug/id endpoints, so token scope/lifetime remains unknown from this corpus.
  - `94266.*.js` confirms another plugin flow: GET `/api/plugins/course.classroom-report`, select slug `review-satisfaction-report`, GET `/api/classroom-report/plugins/{plugin.id}/modules/{plugin.slug}?timetable_id=...`, then embed returned `plugin_url` directly as `#satisfactionReportFrame`.
  - Other `checkOrigin:false` iframe integrations include OBE achievements (`{host}/external/achievements/students/courses/{courseCode}?token=...`), lesson/resource replay player URLs, resource preview player URLs, and a generic rich-content preview iframe directive.
  - One iframe integration posts CSS-variable/theme data to an embedded frame with `targetOrigin="*"` before resizing. Another OBE integration posts scroll coordinates to the iframe with `targetOrigin="*"`.
  - Targeted `checkOrigin:false` pass found 15 files. Business integrations are concentrated in textbook/stat plugins, OBE course/achievement embeds, replay/resource preview players, classroom report plugins, and rich-content preview frames.
  - Targeted wildcard `postMessage` pass found several business bridges using `targetOrigin="*"`: Air-credit/video-player token and credit relays, OBE theme/scroll messages, video editor media/callback payloads, file-preview readiness messages, replay caption generation, and player credit callbacks.
  - `28606.*.js` registers a `message` listener without origin/source checks. It handles `event:backToPath` by assigning `window.location.href = safeUrl(path)`, handles `wg-video-player:getUserAirToken` and `wg-video-player:getUserAirCredits` by relaying Air token/credit objects to `userCenterPluginFrame.contentWindow.postMessage(..., "*")`, and lets `event:postResourceName` change the resource name used in token requests.
  - The shared `safeUrl` helper only sanitizes the query-string portion. If a posted path has no `?`, it returns the string unchanged; this makes `event:backToPath` a potential client-side navigation sink if an attacker can deliver a message to that page/window.
  - `2896.*.js` is the strongest source-confirmed `postMessage` writeback: a no-origin/source listener accepts `uid`, `score`, `labreport`, `reportpart`, and parsed step arrays, then POSTs `/api/virtual-experiments/{activity.id}/score`. Server-side role/scoping validation is not visible in this corpus; raw indexed probes for `/api/virtual-experiments/` are only generic 404s.
  - `28391-*` PDF preview/editor listens for `savePdfMark` without origin/source checks and triggers a same-origin `savePdf` custom event inside `newPdfEditorIframe`. The sender cannot directly set annotation content in the observed snippet, but can trigger a save action.
  - `56690.*.js` video-editor integration listens for `event:clip:success`, `event:clip:error`, `event:videoEditor:ready`, and `event:video:reload` without origin/source checks. On ready it posts media metadata, download/upload/callback URLs, selected file info, and language to `videoEditorFrame` using `targetOrigin="*"`.
  - `88788.*.js` replay/player bridge listens for `wg-video-player:getUserAirToken` and `wg-video-player:getUserAirCredits` without origin/source checks and relays Air token/credit data to `#replayFrame` using `targetOrigin="*"`.
  - `eval-like` hits are mostly library/runtime noise, but iLearn's unique chatbot UMD includes Vue I18n / intlify message compilation through `new Function(...)`.
  - iLearn's chatbot UMD also adds js-cookie and VueUse-style local/session storage wrappers, making it the biggest iLearn-only client-side storage/cookie delta.
  - Web face-check chunks `80575.32ea74f5` exist in both iClass and iLearn. They create a face-service axios client from `/api/face-recognition/config`, then call service-side `/api/v1/storages/upload`, `/api/v1/face-check-records`, `/check`, and `/verify`.
  - The web `verify()` helper sends `check_type`, `target_type`, `target_code`, `business_key`, `name`, and `id_no`; when caller data is missing, the bundled code falls back to a hardcoded name/id-like sample. The exact fallback values are intentionally not copied here because they look like PII test data, but this is a source-confirmed static-data leak in both web deployments and raw minified chunks.
  - Online-video player chunks `88788.*` dynamically load the face-check chunk at configured playback percentages, pause the video behind a mask, and resume after face capture/recognition success. The raw iClass `/api/face-recognition/config` capture is a generic 500 HTML page; no raw service-token JSON or face-record body was captured.
  - Static credential sweep found a source-confirmed AISK/AIR side-panel integration in web chunk `24549.*`: when `plugins.aisk.toggle` is true, it embeds `https://aisk.one.blendvision.com/playground?token=<static JWT>` in an iframe.
  - The AISK token is identical in iClass and iLearn, uses JWT header `{alg:"RS256", kid:<uuid>, typ:"JWT"}`, and the decoded payload contains only `chatbot_id`, `org_id`, and `tenant_id`. No `exp`, `iat`, or audience claim is present, so lifetime and audience restriction cannot be inferred from the token itself. Token text is deliberately redacted from this worklog.
  - The same AISK side-panel code registers a global `message` listener and responds to any posted `{command:"ping"}` by broadcasting `{command:"pong"}` to every iframe with `targetOrigin:"*"`. The observed action is low-impact by itself, but it is another no-origin message bridge around a third-party iframe.
  - `websocket` hits currently look like media/player library support (flv.js/socket.io-style URL handling), not a bespoke LMS socket channel.
  - Both web corpora contain `disable-devtool`-style anti-debug code that can redirect to `https://theajack.github.io/disable-devtool/404.html?h=<host>` when triggered by default configuration.
- Interpretation:
  - `checkOrigin:false` is not by itself exploitable, but it makes the trust boundary depend on the embedded URL, token scoping, and any message handlers inside those frames.
  - Source validation is now complete for representative iframe and wildcard-message bridges. Remaining unknowns require evidence absent from static captures: exact iframe response headers/frameability, plugin/player token scope and lifetime, server-side authorization on writeback endpoints, and behavior inside third-party/embedded apps.

### Public Raw Snapshot / API Response Findings

- Raw API status counts from `assets.csv`:
  - iClass API captures: 200=155, 400=14, 403=44, 404=279, 500=156.
  - iLearn API captures: 200=150, 400=12, 403=34, 404=209, 500=121.
- Caveat: a 200 raw capture does not by itself prove unauthenticated/public access. Several 200 responses are clearly personalized and were likely captured under whatever state the crawler/session had. Treat them as response-shape evidence, not access-control proof.
- `/org/global-config`:
  - Referenced by nearly every Angular shell HTML entry through `fetch('/org/global-config')`.
  - No captured `raw/.../org/global-config` body exists in this corpus.
  - The shell expects keys `sentry_client_key`, `assets_path`, `apm`, `supported_convert_document_formats`, and `upload_extension_format_allowlist`, then copies them into global `CONFIGS`/`MULTIMEDIA`.
- OAuth/third-party authorization captures:
  - iClass Google `/api/google/authorization-url` returns an OAuth URL with blank `client_id=`, PKCE `code_challenge`, offline access, Drive readonly + userinfo/openid scopes.
  - iLearn Google returns client id `306741705464-0kcojenor8madhsc42ttu850hsmdqf3k.apps.googleusercontent.com`, PKCE `S256`, offline access, calendar + userinfo/openid scopes.
  - iClass Microsoft returns client id `1834b1e1-db67-49bf-882f-d9e1f433cacd`; iLearn Microsoft returns `7c2e9348-a04e-4a98-b948-37b42a5e66f3`. Both request `offline_access`, Graph `user.read`, `OnlineMeetings.Read`, and `OnlineMeetings.ReadWrite`.
  - LINE login authorization captures have blank `client_id` and blank `redirect_uri`; LINE Notify and Webex authorization captures return 404 in both deployments.
  - `third-party/info` returns only `qq_id`, `wechat_id`, `weibo_id`, all null in both deployments.
- SSO page captures:
  - iLearn `tcidentity.thu.edu.tw` CAS/Keycloak login page includes client id `tronclass`, a username/password form, QR login UI, and bundled scripts `welink.qrcode.login.js` / `qrcode.js`. Captured page includes transient Keycloak `session_code`, `execution`, and `tab_id` values, but no reusable secret.
  - iClass `sso.tku.edu.tw` capture is an IBM Tivoli Access Manager redirect page that sends desktop users to `https://sso.tku.edu.tw/NEAI/logineb.jsp?myurl=<current>` and mobile users to `loginrwd.jsp`.
- Org/public-ish snapshots:
  - `/api/all-orgs` 200 exposes org metadata such as code/domain/name/type/show flags and storage totals. iClass reports domain `iclass.tku.edu.tw`; iLearn reports `ilearn.thu.edu.tw`.
  - `/api/org` 200 returns a minimal org list with id/name. `/api/orgs` 200 returns empty list; `/api/orgs/1/lang-settings` returns five languages; `/api/orgs/1/online-users?group_by=role` returns role-level online user counts.
  - `/api/org-bulletin/classifications` 200 exposes three bulletin classification IDs/names per deployment. Latest org bulletin lists are empty in the sampled captures.
- Admin/authz/export/JWT raw probe:
  - iClass has 13 `authz` endpoints in `api_endpoints.csv` with observed statuses 403/404/500; iLearn has 13, with observed 403/404 where raw captures exist and several referenced-only rows with no captured response.
  - Representative authz 403 bodies are generic JSON `{"message":"您沒有權限完成此操作"}`. Representative authz/management/plugin/JWT-query 404 bodies are generic JSON `{"message":"未找到資源"}`.
  - iClass raw `/api/plugins/` and `/api/classroom-report/plugins/` are 404; iLearn has plugin endpoint references but no corresponding raw body in this corpus. Exact `/api/plugins/{plugin}` and `/api/plugins/{plugin}/jwt-token?...` captures are absent, so plugin JWT scope/lifetime cannot be determined from the raw snapshot set.
  - `/api/lecture-live?jwt=` and `/api/user-actions?jwt=` are captured as 404 in both deployments. These confirm frontend-visible JWT query surfaces, but not a reusable token value or server acceptance behavior.
  - Export/admin samples such as cloud-classroom export, stat course-hours export, certifications-for-management, users-for-management, and wg-admin requests resolve to generic 403/404/500 responses. Sampled 500 HTML pages are branded/generic and did not leak stack traces.
  - `/api/air-credit/user/token` differs by deployment: iClass captured 404 `未找到資源`; iLearn captured 403 with an empty `message` field.
  - `/api/departments` is a large 200 response in both deployments and is the most data-rich public-ish org snapshot in this pass. iClass has 102 root departments / 1,888 recursive department nodes; iLearn has 21 root departments / 517 recursive nodes. The full response shape includes code/name/parent, stopped/show flags, storage assigned/used, created/updated timestamps, and redacted created/updated user names.
  - iClass `/api/departments-for-user` returns the same 1,888-node hierarchy in a reduced field shape. iClass `/api/departments?for-management=true&fields=` returns `{"departments":[],"manageable_filtered":true}`, showing the management filter path exists but is filtered in the captured state.
- Personalized/user-shaped 200 snapshots:
  - `/api/profile` bodies include active/status fields, roles, org, department/grade/class, storage usage, user addresses/attributes/personas/auth externals, and redacted `email`, `name`, `user_no`. iLearn additionally exposes `webex_auth` in the shape.
  - `/api/user/resources` and filtered variants expose upload/resource object shape: allow download/office view flags, caption/chapter/topic permissions, owner/creator ids, object keys, type/status, thumbnails, video metadata, and reference counts.
  - `/api/stat/user-info`, `/api/sign-in/stats`, `/api/user-completeness`, and `/api/user/recently-visited-courses` return user-progress or user-state shapes. These are useful for API modeling but should not be treated as public without an access-control test.
  - iLearn-specific `/api/air-credit/user` 200 returns redacted user id/name/no plus credit-state flags; iClass equivalent returned 404 in this capture.
- Public/course-content snapshots:
  - `/api/bulletins/latest`, `/api/course-bulletins`, and `/api/courses/public` return course bulletin/course catalog shapes with redacted names and upload URL references.
  - iClass `courses/public` sampled 8 public courses; iLearn sampled 10 of 67 public courses.
  - iClass `departments-for-user` 200 is large: 102 department trees; iLearn did not have that exact captured file in the selected pass.
- Error-page behavior:
  - Representative 500 HTML pages (`tencent-meeting/authorization-url`, `org/request/plan-plus`, `org-bulletin/bulletins`) are generic branded error pages. No stack trace, internal path, or framework debug dump observed in sampled 500 captures.
- QR-code / scanner related captures:
  - `/api/qrcode?url=...` is used by the web e-sign flow. If `getUserEsignInfo(userId)` reports the user is not authenticated, the web UI encodes `auth_url`, sets `esignQrcode = "/api/qrcode?url=" + encodedAuthUrl`, and opens the e-sign authorization popup.
  - Both iClass and iLearn contain a captured JPEG for `/api/qrcode?url=...` (`api/qrcode__q_c2395fa098.jpg`, 5,620 bytes). The corpus gives image-shape evidence only; it does not reveal a secret by itself.
  - Mobile QR login is a separate Android WebView path. Constants include `/broker/tronclass-qrcode/endpoint` and `/api/qrcode/login`, but `app/package_view/base/assets/public/js/3404.e26e8ad4.js` shows two distinct login handlers:
    - Identity QR login: if the scanned string contains `/broker/tronclass-qrcode/endpoint` and the org has identity config, the app refreshes the stored identity access token, calls the identity QR auth helper with status `unauthorized`, then after user confirmation calls it again with status `ok`.
    - Demo/legacy QR login: if the scanned string contains `/api/qrcode/login`, the app asks for confirmation and calls `qrCodeLoginForDemo(scannedUrl)`.
  - The `/api/qrcode/login` literal appears in the constants and Scanner handler, but no standalone mobile call site was found outside this scanned-URL branch. The iLearn SSO page uses `showQrCode('tronclass-qrcode','thu')`; the supporting SSO JS files were not captured, so the server-side QR payload generation remains outside this corpus.
  - The Scanner dispatch matrix in `3404.e26e8ad4.js` recognizes: identity login, demo QR login, QR rollcall JSON with `rollcallId`, group self-join JSON with `groupSetId`, Roomis QR/Roomis H5/Roomis space QR, evaluation plugin URLs with `original=evaluation`, course access codes, classroom activity `/j?p=` / `/_wg_qr?_wg_p=`, and WPS plugin login JSON with `action: "wps-plugin-login"`.
  - `OFFICE_LOGIN` exists in the Scanner enum/display status, but no Scanner dispatch branch targets it. Office plugin login is instead routed by `/office-login/:loginToken` to a separate component that posts `/api/office-plugin/login`.
- Targeted raw cross-check after APP-only endpoint validation:
  - iClass captured `/api/plugins/` and `/api/classroom-report/plugins/` as generic 404 JSON. iLearn references these plugin paths but has no raw plugin body in the checked assets set.
  - iClass captured `/api/face-recognition/config` as generic 500 HTML. iLearn references the same endpoint in JS but has no raw body.
  - Both iClass and iLearn captured `/api/uptoken?id=` as `{"message":"Not Found"}` / 404.
  - Both deployments captured `/api/shared-resources` and `/api/shared-resources-to-me` as 200 empty resource lists in the selected state, and `/api/shared-resources-no-repeated?page=` as 403.
  - iClass captured `/api/timetable_rollcalls` as `{"rollcalls":[]}` / 200. iLearn references the endpoint but did not capture a raw body.
  - No direct raw body was found for mobile-only rollcall answer endpoints, radar answer payloads, Aliyun Office token/refresh token, office-plugin login, WPS-plugin login, exact plugin JWT-token endpoints, or face-service `/api/v1/face-check-records*` bodies.

### Android Manifest / Resource Findings

- Application flags observed:
  - `allowBackup=true`
  - `usesCleartextTraffic=true`
  - `requestLegacyExternalStorage=true`
  - `largeHeap=true`
  - `extractNativeLibs=false`
- Permissions include internet, overlays, camera, audio, fine/coarse location, Bluetooth scan/advertise/connect, external storage, notifications, boot, wake lock, phone state, video recording, document management, JPush, vibration, Wi-Fi/network state changes, `GET_TASKS`, flashlight, foreground service, badge permissions.
  - `READ_EXTERNAL_STORAGE` and `WRITE_EXTERNAL_STORAGE` are capped with `maxSdkVersion=32`.
  - `POST_NOTIFICATIONS` is present.
  - `MANAGE_DOCUMENTS` is present.
  - `MANAGE_EXTERNAL_STORAGE` strings exist in source/plugin logic, but the permission is not declared in this APK manifest.
- Exported/high-value components:
  - `com.wisdomgarden.trpc.MainActivity`: exported, `singleTask`, `BROWSABLE` `tronclass` scheme, many `content://` and `file://` `VIEW` MIME filters plus `SEND`/`SEND_MULTIPLE`.
  - `com.getcapacitor.CapacitorFirebaseMessagingService`: exported with messaging filter.
  - `com.wisdomgarden.trpc.mediapicker.MediaPickerActivity`: exported, no filters.
  - OneSignal/Firebase/WorkManager/ProfileInstaller components.
- MainActivity file/share filters are broad. Observed MIME classes include text/csv/plain, archives, Microsoft/Office formats, PDF, RTF/ODF, image, audio, and video types.
- FileProvider paths are broad:
  - `file_paths.xml`: external-path `.` and cache-path `.`.
  - `opener_paths.xml`: files/cache/external-files/external-cache/external all path `.`.
  - `documentviewer_file_paths.xml`: cache-path `tmp/DocumentViewerPlugin`.
  - `camera_provider_paths.xml`: cache path `org.apache.cordova.camera/`.
  - `jpush_file_paths.xml`: root-path `.`, plus external/files/cache `JAdDownload` paths.
- `OPEN_WITH_ATTACHMENTS_WITH_MAX_COUNT=5`.
- Interpretation:
  - These broad filters and providers are mostly consistent with an LMS app that lets users share/open many attachment types, but they create a large file-intent and file-sharing boundary. Actual impact depends on what WebView JS can invoke and what Android grants at runtime.
  - The all-files access branch in `WriteFilePermission` should not activate for this APK because `MANAGE_EXTERNAL_STORAGE` is absent from the manifest.

### Android MainActivity / Hybrid Stack

- Package: `com.wisdomgarden.trpc`.
- `MainActivity` registers Capacitor plugins:
  - VoiceRecorder
  - CapacitorDataStorageSqlite
  - CapacitorKeepScreenOn
  - WriteFilePermission
  - ScreenOrientation
  - BarcodeScanner
  - DarkMode
  - CapacitorUpdater
  - NativeGeolocation
  - MediaPicker
  - Beacon
  - EdgeUiPlugin
- It clears OneSignal SharedPreferences keys on create.
- `onActivityResult` forwards to `WBH5FaceVerifySDK.getInstanceWithoutCreate().receiveH5FaceVerifyResult(...)`, linking the app to a Tencent/H5 face verification flow through InAppBrowser.
- App uses Capacitor plus many Cordova plugins from `cordova_plugins.js`, including camera, capture, inappbrowser, advanced-http, brightness, file opener, photo library, settings, device, file chooser, JPush, geolocation, globalization, OneSignal, photo viewer, image picker, document viewer, file/file-transfer/filepath, diagnostic, and volume control.

### Android WebView / Runtime Config

- `env.js`:
  - `APPRuntime.ENV = "prod"`.
  - `TC_HOST`, `H5_HOST`, `ORG_NAME`, `LIFF_ID`, etc. are blank in this package.
  - `SHOW_VCONSOLE=false`.
  - `DEFAULT_LOGIN_METHOD="normal"`.
  - `OFFLINE_MODE=false`.
  - `LOGIN_HIDDEN_AREA=true`.
- `index.html` defines `window.APPRuntime.setAreaInfo(global)` and sets CDN hosts based on area/language:
  - CN/zh-Hans paths use `https://mobile-download.tronclass.com.cn` for both `CDN_URL` and `CDN_HTML_URL`.
  - Non-CN paths use `https://cdn.jsdelivr.net/npm/@wisdomgarden/mobile-assets@latest` as `CDN_URL` and `https://wisdomgardeninc.github.io/mobile-assets` as `CDN_HTML_URL`.
  - Store actions call `setAreaInfo` when area/org context changes, so mobile CDN trust depends on runtime area/org selection.
- `native-bridge.js` sets Capacitor `DEBUG` true when undefined and exposes `Capacitor.toNative`.
- `native-bridge.js` forwards `window.onerror` details to native when debug is enabled.
- `set-native-env.js` sets `BUILD_FOR_GP` based on a user agent substring `TronClass/googleplay`.

### Android Remote Extension / Audio URL Patch

- Final sink sweep found a source-confirmed dynamic remote-code path in the mobile WebView bundle, present in `app/package_view/base/assets/public/js/app.73d6a975.js` module `70016`.
- The helper fetches `window.APPRuntime.CDN_URL + "/mobile-2.0/scripts/fix-audio-url-ouya.min.js"` with a 2 second timeout and `responseType:"text"`.
- If the response is HTTP 200 with non-empty text, it executes the body with `new Function("return " + body)()` and caches the returned function under enum key `OUYA_FIX_AUDIO_PLAY`.
- The audio player calls this cached/remote function through `fixAudioUrl(url)` before doing media `HEAD` / `Range: bytes=0-0` checks and loading the audio URL.
- No signature, hash, SRI, or domain allowlist was observed around this remote extension body. The effective trust boundary is the runtime CDN host/package plus HTTPS/TLS and the remote script's own integrity.
- This is separate from the Capacitor OTA updater: it is smaller in scope, but it is still runtime JavaScript execution inside the app WebView, and non-CN mode references a mutable `@latest` npm CDN URL.

### Android OTA Updater

- `CapacitorUpdater.java` / `CapacitorUpdaterCore.java` implement a WebView OTA updater.
- `download(url, version)` accepts a caller-supplied URL and version, starts a background thread, opens `new URL(str).openStream()`, and writes a zip to `filesDir/_ota/<version>.zip`.
- `unzip` contains a canonical path traversal defense.
- Update payload must produce `_ota/www/index.html`, then it is renamed to `_ota/<version>`.
- `set(version)` stores `lastPathHot` and changes Capacitor server base path to `filesDir/_ota/<version>`, and `reload()` reloads the bridge.
- No code-level signature, hash, certificate pin, or domain allowlist has been observed in the updater classes so far.
- Impact depends on whether app JS or any reachable WebView content can call `CapacitorUpdater.download/set` with attacker-controlled values.
- App JS call-site found in `app/webview_modules/readable/app.73d6a975/56185.js`:
  - Dev/stg OTA metadata uses LeanCloud endpoint `https://trcsvqct.lc-cn-n1-shared.com/1.1/classes/OTAVersion` with headers:
    - `X-LC-Id: tRcsVqctq7saBytI0LpOCznA-gzGzoHsz`
    - `X-LC-Key: WxhKNPofCIbPUIgAx58eEkkX`
  - Prod OTA metadata is fetched via `getOrgInfo("OtaVersion", "earth")`.
  - Update selects `zipFileUrl`, or `zipFileUrlTW` when not `IS_CN`, then calls `CapacitorUpdater.download({url, version})` and `CapacitorUpdater.set({version, autoReload})`.
  - OTA starts after login/app init with a 10 second delay, only for targetPlatform `app`, not HarmonyOS, not offline mode, and not `ENVIRONMENT=dev`.
- Prod OTA source chain:
  - `getOrgInfo` is webpack module `16268`. It first uses `window.APPRuntime.ORG_INFO` if present; otherwise it calls `getCustomOrgs`.
  - `getCustomOrgs` is webpack module `77386`. It requests an org-directory endpoint with headers:
    - `X-LC-Id: s0QbLDG5u6IrBSx9dC4yFiLr-gzGzoHsz`
    - `X-LC-Key: jEivEsoel0KxBdX4gDuO5Sak`
  - Endpoint selection is area-based: `tw` uses `https://api-org.tronclass.com.tw/orgs`, `hk`/`mo` use `http://api-org.tronclass.com/orgs`, and all other areas use `https://api-org.tronclass.com.cn/orgs`.
  - Since prod OTA passes area `"earth"`, it uses `https://api-org.tronclass.com.cn/orgs` with query params `{keywords:"OtaVersion"}`, filters results to `area === "earth"`, then selects the object whose `orgName === "OtaVersion"`.
  - The packaged `env.js` sets `window.APPRuntime.ORG_INFO = null`; targeted search found no native/JS setter besides this config variable and UI branches that read it. A custom build or already-applied OTA could override it, but the captured APK does not.
  - The web raw/static corpus records `api-org.tronclass.com.cn/orgs` as an external URL, but no raw `api-org` or `OtaVersion` response body is captured. Exact prod metadata, server ACL, and mutability cannot be verified offline from this dataset.
- Interpretation:
  - `/org/global-config` does not appear to influence mobile prod OTA in this APK. The prod control point is the external `api-org` org-directory record for `OtaVersion`/`earth`, not the LMS site's global config.
  - The OTA updater trusts server metadata fields such as `zipFileUrl`, `zipFileUrlTW`, `version`, `force`, `reset`, `autoReload`, and `compatiblePastNativeVersion`. Because the native updater has no observed signature/hash/domain validation, compromise or misconfiguration of the prod OTA metadata source would be enough to steer the app to an arbitrary zip URL accepted by native code, subject only to the zip structural check requiring `_ota/www/index.html`.
  - The manifest allows cleartext globally, and one org-directory branch for `hk`/`mo` uses plain HTTP; the specific prod OTA `"earth"` lookup uses HTTPS. No app-level certificate pinning was observed for the WebView/Axios metadata path.

### Android Beacon / Rollcall Protocol

- `Beacon.java` and `BeaconUtils.java` implement BLE rollcall broadcast/scan.
- Service UUID: `00005747-0000-1000-8000-00805F9B34FB`.
- Manufacturer ID: `65535`.
- Manufacturer data prefix: `WG`.
- `buildMessage(int rollcallId, String nonce)` encodes rollcall id in a custom radix-54 alphabet, appends nonce, and truncates to 11 chars.
- Nonce parsing assumes nonce starts at the first character from `T` through `Z`.
- Scanner emits `beaconReceived` to JS with `{message,rssi,peripheralId,timestamp}`.
- Native logs include payload/message strings.
- JS call-site found in `app/webview_modules/structured/3805.c039836c/23805.js` and `app/package_view/base/assets/public/js/3805.c039836c.js`:
  - Component name: `RadarRollcallAnswer`.
  - If `courseInfo.bluetoothRollcall` and LMS version is at least `1.76.0`, it calls `getRollcallInfoLite(rollcallId)` and checks `useBeacon`.
  - For beacon rollcall it calls native wrapper methods: `initialize`, `startMonitoring`, `addListener("beaconReceived", ...)`, `parseMessage`, `stopMonitoring`, `cleanup`, and `startBroadcasting`.
  - It accepts a beacon only if parsed `rollcallId` equals the route `rollcallId`.
  - It builds `radarSignal = hashStr(beaconMessage + deviceId + user.id + beaconTimestamp) + "," + beaconTimestamp`.
  - It submits `deviceId`, `radarSignal`, and local geolocation payload to `answerRollcall`.
  - Error codes include `rollcallBeaconNonceInvalid`, `radarSignalInvalidNoSignal`, `radarDeviceIdInvalid`, `radarSignalInvalidTimestamp`, and `radarSignalInvalid`.
- Replay/spoofing resistance now hinges on server-side validation of beacon nonce, timestamp, device id, user id, and location; the client algorithm and message format are fully visible.
- API trace:
  - `answerRollcall(rollcallId, payload)` calls `PUT /api/rollcall/{rollcallId}/answer?api_version=1.76`.
  - `getRollcallInfoLite(rollcallId)` calls `GET /api/rollcall/{rollcallId}/lite`.
  - Ongoing radar rollcalls are referenced as `GET /api/radar/rollcalls`.
  - Related rollcall endpoints in the mobile route/path module include:
    - `/api/course/{courseId}/rollcalls`
    - `/api/course/{courseId}/student-onprogress-rollcalls`
    - `/api/rollcall/{id}/answer_qr_rollcall`
    - `/api/rollcall/{id}/answer_number_rollcall`
    - `/api/rollcall/{id}/answer_self_registration_rollcall`
    - `/api/rollcall/{id}/position`
    - `/api/rollcall/{id}/stop_radar?api_version=1.1.0`
    - `/api/rollcall/{id}/answers`
  - Full rollcall model includes optional `use_beacon` and `beacon_nonce`.
  - Lite rollcall model used by `getRollcallInfoLite` includes optional `use_beacon` but no `beacon_nonce`; the answer page learns the beacon message from BLE scan events, not from the lite API response.

### Android Plugin Findings

- `NativeGeolocation` uses `LocationManager`, returns last-known location immediately, and requests updates with minTime=0/minDistance=0; uses GPS/network fallback.
- `WriteFilePermission` requests all-files access on Android 30-32 only if `MANAGE_EXTERNAL_STORAGE` exists in manifest; Android 33+ reports write as true and separately requests notifications.
- `BarcodeScanner` initializes OpenCV WeChatQRCode models from app assets and overlays a scanner fragment over a transparent WebView.
- `BarcodeScanner.prepare()` appears to read `tipsDelaySeconds` from key `"tips"` instead of a delay-specific key, likely a bug or type mismatch.
- `MediaPickerActivity` is exported but has no filters and mostly launches the Android 13+ media picker based on extras.
- `OpenWithPlugin` serializes `SEND`, `SEND_MULTIPLE`, and `VIEW` intent data into SharedPreferences, resolves paths via content resolver/cache helper, and returns then clears the shared data.
- `FilePathUtil.getRealPathFromURI` queries the `_data` column and falls back to URI path if no cursor exists.

### Android File Intent / Open-With Flow

- Capacitor/Cordova launch intent handling:
  - `MainActivity.java` itself only registers plugins and forwards Tencent face-verification results; direct intent behavior is inherited from Capacitor/Cordova base classes.
  - Capacitor `App` plugin exposes `getLaunchUrl` and fires `appUrlOpen` only for `ACTION_VIEW` intents with a non-null data URI.
  - The mobile JS listener strips `tronclass://` and only accepts the `login-by-identity-token` deep-link route, so arbitrary `tronclass://...` navigation is not accepted by the observed app listener.
- Open-with/share plugin:
  - `@wisdomgarden/openwith` 2.1.0 exposes `cordova.openwith`.
  - Native `OpenWithPlugin.initialize` reads `OPEN_WITH_ATTACHMENTS_WITH_MAX_COUNT=5`, persists serialized shared data under `OpenWithSharedData`, and removes the stored data after `fetchSharedData()`.
  - Serialization order is `ClipData`, then `android.intent.extra.STREAM`, then `intent.getData()`.
  - It handles `ACTION_SEND`, `ACTION_SEND_MULTIPLE`, and `ACTION_VIEW`; JSON output caps accepted items at five while preserving the original `receivedCounts`.
  - Text-only ClipData becomes a synthetic `text/plain` item with empty uri/path and name `text`.
  - `PathUtil.getPath` maps external storage, downloads, and media document providers into filesystem paths or MediaStore queries. For content URIs without `_data`, it copies the stream into app cache using `_display_name` as the filename and marks the item `isTemp=true`; no filename sanitization was observed around `new File(cacheDir, displayName)`.
  - For `file://` URIs, it returns `uri.getPath()` directly.
- Mobile JS share handling:
  - Startup/foreground flow calls `window.cordova?.openwith.fetchSharedData()`, appends text items when present, filters by extension against `orgSetting.plusSupportedMimeTypes`, checks storage permission, requires login, then opens the `ShareFrom` modal.
  - The modal calls `statFile(path)`, uploads up to five files, deletes temporary copied files after upload, then navigates to user resources.
  - Correction after index-level follow-up: `app/package_view/base/assets/public/index.html` calls `setupOpenwith()` during `deviceready`, and `setupOpenwith()` calls `cordova.openwith.init(initSuccess, initError)` when the plugin object exists. The open-with/share integration is therefore active; the earlier no-init conclusion only came from scanning extracted webpack JS and missed the HTML bootstrap script.
- File opener and document viewer:
  - `cordova-plugin-file-opener2` opens app-accessible paths through `com.wisdomgarden.trpc.provider`. `opener_paths.xml` maps files, cache, external-files, external-cache, and external storage with `path="."`.
  - Non-APK files are shared with `ACTION_VIEW` and flags `3`, granting read and write permission to the external viewer. APK files use `ACTION_INSTALL_PACKAGE` with read grant.
  - `DocumentViewer` only supports PDF. It copies requested resources into app cache under `tmp/DocumentViewerPlugin/<counter>.<originalName>`, shares through its narrower provider, and can target an explicit viewer component. Its native error handler returns stack-trace details to JS callback.
  - Frontend `DocumentNativeViewer` downloads remote PDFs into cache for native viewing, falls back to InAppBrowser if unsupported, and exposes native viewing from the PDF preview UI when image-size constraints require it.
- Media picker:
  - `MediaPickerActivity` is exported with no filters. It reads extras `maximum` and `type`, launches Android Photo Picker for single or multiple media, then returns file paths/URIs through result extras.
  - A third-party app could launch the exported activity and cause the system picker UI to appear, receiving selected paths only if the user chooses media. This is unnecessary exported surface, but no private app data exposure was observed from the static source alone.
  - `FilePathUtil.getRealPathFromURI` is fragile on modern scoped storage/photo-picker flows because it prefers `_data` and falls back to URI path.
- Interpretation:
  - Source-level file/intent pass is complete enough to lower this from an open lead. Remaining unknowns are runtime Android grant behavior, exact device OS behavior, and whether the absent `openwith.init` is hidden outside indexed JS.

### Native Library Findings

- Native libraries include:
  - `libopencv_java4.so`
  - `libsqlcipher.so`
  - `libimage_processing_util_jni.so`
  - `libc++_shared.so`
- `libopencv_java4.so` is large and symbol-rich; used by barcode/QR workflow.
- `libsqlcipher.so` suggests encrypted SQLite support through the Capacitor data storage plugin.
- Deep native pass completed over available strings/symbols/pseudocode:
  - `libsqlcipher.so` exposes SQLCipher/SQLite JNI surfaces such as `native_key`, `native_key_mutf8`, `native_rekey`, `native_rawExecSQL`, `dbopen`, and `register_android_database_SQLiteDatabase`.
  - `libsqlcipher.so` contains expected SQLCipher/OpenSSL/CryptoGAMS strings and codec symbols such as `sqlcipher_codec_*`, `kdf`, `hmac`, `set_pass`, and `get_pass`.
  - No app-specific hard-coded database passphrase was found in the indexed native SQLCipher strings.
  - `libimage_processing_util_jni.so` appears limited to AndroidX camera/image conversion helpers: Android420 to ABGR/Bitmap, ByteBuffer/Bitmap copy, YUV rotation, pixel shift, and JPEG-to-surface write.
  - `libopencv_java4.so` appears to be OpenCV 4.9.0 with build-path strings and broad OpenCV JNI exports; no app-specific secret surfaced in the top native scan.
- Remaining native question is source-level key derivation for the Capacitor data-storage plugin, not a hard-coded native constant.

### App Storage / SQLCipher Findings

- `CapacitorDataStorageSqlite.java` is bundled and registered, but the app has two distinct storage abstractions:
  - `DataStorage` exported from webpack module `39626` resolves through module `38231` to Capacitor web `Storage` (`i.Ke`), which stores values in `window.localStorage` with `_cap_` key prefix.
  - `CacheStorage` resolves through module `32456`; on iOS/Android it uses module `49669`, which wraps `CapacitorDataStorageSqlite` with database `TCMobile` and table `cacheData`.
- Observed mobile JS usage:
  - `DataStorage` stores keys such as `jpush_app_installed`, `global`, image/cache URI metadata, knowledge/AI tooltip flags, and privacy modal flags.
  - `CacheStorage` stores/retrieves `courseFaceCheckMark` for course-entry face-check state, and removes it during logout.
  - `CacheStorage` also stores an `httpErrors` retry queue. The queue is populated from failed non-4xx `POST`/`PUT` Axios configs when `wgData.isStatRequest` or `wgData.isActivityReadRequest` is set, and is later replayed with `X.Z.request(config)`.
  - Axios request config construction attaches `x-session-id`, `X-Requested-With`, `Accept-Language`, and, for stat requests, `SESSION` plus optional `jwt` query token. Therefore cached retry configs can include endpoint URL, method, request body/config metadata, and session-bearing headers/tokens depending on which request failed.
- SQLCipher plugin default secrets:
  - `Global.secret = "test secret"`.
  - `Global.newsecret = "test new secret"`.
  - `openStore({ encrypted: true, mode: "secret"|"newsecret"|"encryption" })` uses these defaults; app `CacheStorage` calls `openStore({database:"TCMobile", table:"cacheData"})` without `encrypted`, so current observed app path opens the DB in `no-encryption` mode.
- Hidden encrypted-openStore trace:
  - Direct extraction of webpack modules `32456`, `38231`, `39626`, and `49669` confirms the only app wrapper call is `plugin.openStore({database:e.DB_NAME,table:e.TABLE_NAME})`.
  - Targeted string counts across `app.73d6a975.js` and the main vendor bundle found no `encrypted:true`, `encrypted:!0`, `mode:"secret"`, `mode:"newsecret"`, or `mode:"encryption"` app call-site.
  - Vendor web/electron implementations of `CapacitorDataStorageSqlite.openStore` exist in `chunk-vendors`, but they are platform stubs/wrappers and not an app-specific encrypted native call-site.
- SQL query construction in `StorageDatabaseHelper` is unsafe if untrusted key/table names can reach the plugin:
  - `get`, `remove`, `clear`, `checkForTableExists`, `createTable`, and `createIndex` concatenate table names or key names into SQL strings.
  - `set` and `update` use `ContentValues` / parameterized where clause for value storage, but not all operations do.
- Interpretation:
  - Native SQLCipher support is present, but the observed mobile app storage path does not use SQLCipher encryption for `CacheStorage` or general `DataStorage`.
  - The strongest storage finding is not a hidden encrypted path; it is the opposite: session-bearing retry configs may be persisted in an unencrypted native SQLite DB (`TCMobileSQLite.db`, table `cacheData`) when stat/activity-read POST/PUT requests fail and enter the `httpErrors` retry queue.
  - Sensitive login/session storage still appears mainly in reactive runtime/global persistence and localStorage-shaped paths rather than in an encrypted SQLCipher store.

### Web Admin / Export / AI Endpoint Families

- A normalized API-family pass over iClass and iLearn found the same broad high-privilege client surface in both web corpora.
- Admin/authz:
  - iClass has 17 parsed admin/authz paths; iLearn has 18.
  - Families include `/api/authz/*`, `/api/management/*`, `/api/wg-admin/orgs/request(s)`, and iLearn-only `/api/admin/through-courses/`.
- Statistics/export:
  - Both iClass and iLearn expose 45 stat/export-like paths in the frontend corpus.
  - Families include `/api/stat/*`, `/api/stat/courses/export/to/`, `/api/stat/courses/rollcall/export`, `/api/stat/courses/rollcall/export-by-class`, `/api/stat/departments/*/export`, `/api/scores/package-excel?conditions=`, `/api/custom-knowledge-graph/export/`, `/api/ai-ppt/user-usage/export`, `/api/tencent-meeting/statistics/excel?conditions=`, and `/api/zip-status/COURSE_STAT_EXPORT:`.
- Data import:
  - Both corpora expose 17 import-like API families.
  - Families include ai-convert, chaoxing-score, classroom-exams, course-groups, course, courses, curriculum-enrollments, edit-courses, enrollments, exams, from-word, item_scores, scores, seat-number, subject-libs, and validation.
- AI:
  - Both corpora expose 7 AI/automation-related paths.
  - Families include `/api/ai-ppt/usage`, `/api/ai-ppt/usage/stats`, `/api/ai-ppt/user-usage/export`, `/api/ai-ppt/user/usage/count`, `/api/duplicate-detect/file/`, `/api/duplicate-detect/report/download`, and `/api/text-optimization`.
- Knowledge graph:
  - iClass has 18 parsed knowledge graph paths; iLearn has 19.
  - Families include `/api/custom-knowledge-graph/*`, `/api/knowledge-graph/courses/`, `/forest-versions/-/stats`, `/kfs-courses/-/published-forest-versions`, `/kfs-subjects`, `/knowledge-node(s)`, and `/knowledge-nodes/parse/docx`.
  - iLearn additionally exposes `/api/knowledge-graph/kfs-courses/`.
- Face/rollcall/exam:
  - iClass has 30 parsed paths; iLearn has 29.
  - Families include classroom-exams, exam-scores, exams, face-recognition/config, questionnaire(s), rollcall/merged, timetable_rollcalls, and stat rollcall exports.
  - iClass additionally exposes `/api/v2/exams/`.
- Third-party/integration:
  - Both corpora expose 37 integration-like paths.
  - Families include ClassIn, Tencent Meeting, Google, Microsoft, Line login/notify, Lark, Webex, third-party/info, online-teachings/videos, and outline-setting/notify.
- Interpretation: these are frontend-visible endpoint references, not proof of missing authorization. They are still high-value because they map where backend authorization, export scoping, async zip status, and cross-tenant checks should be validated.
- Source-origin validation pass:
  - AI-PPT is implemented in iClass `74184.eb9a6df6.js` / `28391-2cabc9af.js` and iLearn `40287-6134fd77.js` / `77503-ccf74164.js`. It references `/api/ai-ppt/usage`, `/api/ai-ppt/usage/stats`, `/api/ai-ppt/user-usage/export`, and `/api/ai-ppt/user/usage/count`. Raw usage/export probes returned generic branded 500 HTML; stats/count probes returned generic 404 in the sampled captures.
  - Custom knowledge graph is implemented in `93155.0c0ec13a.js` in both corpora. It references major/program/plan/course/entity graph APIs, community detection, similarity analysis tasks/retry, workspace members, `/stat`, and blob export through `/api/custom-knowledge-graph/export/{id}` with graph nodes/edges/entities/filename/range in the request body. Sampled raw custom-KG probes returned generic 404.
  - Knowledge graph / knowledge node sources include iClass `28391-2cabc9af.js`, `29408`, `48444` and iLearn `16941-c2ecc958.js`, `5636`. The bundle builds calls for `/api/knowledge-graph/courses/`, forest/KFS batch stats, `/api/knowledge-node(s)/`, and `/api/knowledge-nodes/parse/docx` using `FormData` file upload.
  - Data-import source chunks cover course groups, scores, item scores, seat-number, rollcalls, courses, edit-courses, enrollments, curriculum enrollments, exams, subject libs, from-word imports, validation, and SSE `/api/data-import/ai-convert` with `{upload_id, belong, belong_id}`.
  - Stat/export source chunks confirm arraybuffer/blob/window-open export paths for course exports, attendance, rollcall by course/class, homework-correct, class-hours, shared-resource video/resource stats, department attendance, VTRSES data, cloud-classroom live-class Excel, calendar-meeting Excel, and Tencent Meeting statistics.
  - Management source chunks confirm `for-management` filtering: managers fetch `/api/departments?for-management=true&fields=...` then POST `/api/users?for_management=true&page=1&page_size=2000` with department and role filters. The sampled iClass departments-for-management response was `{"departments":[],"manageable_filtered":true}` and users-for-management returned 403.
  - WG admin source `42585` can operate organization plan-change requests through `/api/org/request/change-plan/{id}`, `/api/org/request/plan-plus`, `/api/wg-admin/orgs/requests`, and `/api/wg-admin/orgs/request`; sampled raw `/api/wg-admin/orgs/requests` returned 403 with an empty message on both deployments.
  - iLearn-only source paths include through-course source linking, `/api/course/copy-as-blueprint`, notebook create/retake/grading/correction-book flows, and `/api/my-academic-years`. Sampled raw `/api/my-academic-years` returned a current academic year object, while notebook/copy-as-blueprint probes were generic 404/500.
- Current interpretation after source sampling:
  - The interesting risk is backend scoping and authorization, not a client-side bypass visible in static frontend code. The frontend frequently passes JSON `conditions`, department/course ids, graph ids, upload ids, blob exports, and async/SSE job parameters; this corpus can map the call surface but cannot prove server-side tenant, role, object-ownership, or file-type validation without live authenticated behavior or backend code.

### Web Anonymous / Visitor Surface

- A focused `/anonymous-api` pass found 2,998 occurrences, dominated by duplicated raw Angular templates plus matching Vue/readable chunks.
- Main anonymous/visitor families:
  - Visitor activity upload preview: `/anonymous-api/{activityId}/uploads/{uploadId}/blob?preview=true`.
  - Visitor activity SWF preview: `/anonymous-api/{activityId}/uploads/{uploadId}/swf?preview=true`.
  - Visitor text/document/audio/pdf-viewer variants in resource preview code, including `/text?preview=true`, `/document/{...}/url?preview=true`, `/uploads/pdf-viewer`, `/uploads/audio/{id}?preview=true`, and `/uploads/{id}?preview=true`.
  - Visitor shared-resource preview: `/anonymous-api/shared-resources/{resourceId}/preview?preview=true`.
  - Visitor shared-resource Evercam embed: `/anonymous-api/shared-resources/{resourceId}/evercams`.
  - Notification course cover images: `/anonymous-api/courses/{courseId}/course-cover`.
  - Unauthenticated score-visibility helpers that switch between `/api` and `/anonymous-api` depending on whether `window.globalData.user.id` exists, such as `/anonymous-api/course/{courseId}/score-percentages` and `/anonymous-api/courses/{courseId}/score-percentages-setting`.
- Raw `assets.csv` did not contain direct downloaded `/anonymous-api/...` response bodies in this corpus. Treat this as a strong anonymous-route map requiring backend ACL/content-publicness validation, not as proof that arbitrary upload/resource ids are public.

### Mobile Bundle Constants / Client Secrets

- The main mobile bundle has a constants module (`webpack module 5877` inside `app/package_view/base/assets/public/js/app.73d6a975.js`) that exports:
  - China/Taiwan base URLs: `https://tronclass.com.cn`, `https://tronclass.com.cn/ntf`, `https://tronclass.com.tw`, `https://tronclass.com.tw/ntf`.
  - QR login broker constants:
    - `/broker/tronclass-qrcode/endpoint`
    - `/api/qrcode/login`
    - `bSg4ZZ5OTQqh-q1-E-zOkg`
    - `4bb45613bc26c62ce981363c905803e7`
  - Upload host `up.qbox.me`.
  - A base64 Firebase web config.
  - A base64 `_xApiLogic` function.
- Decoded Firebase web config:
  - `apiKey: AIzaSyA9uKgtzJVxhkW6okYHuq4OeY5Olxc2a7Y`
  - `authDomain: tronclass-v2.firebaseapp.com`
  - `databaseURL: https://tronclass-v2.firebaseio.com`
  - `projectId: tronclass-v2`
  - `storageBucket: tronclass-v2.appspot.com`
  - `messagingSenderId: 497007958312`
  - `appId: 1:497007958312:web:147266b9c9e4bdaaf5981d`
  - `measurementId: G-4BJE3FPMDM`
- The Firebase config is not in `google-services.json`; no `google-services.json` was present. It is embedded in the mobile web bundle and initialized with `initializeApp(JSON.parse(window.atob(...)))`.
- The constants `bSg4ZZ5OTQqh-q1-E-zOkg` and `4bb45613bc26c62ce981363c905803e7` are used in the LRP live-stream URL signer:
  - `/external-api/v1/lives?...&app_key=<constant>`
  - `/external-api/v1/lives/{id}/streams?...&app_key=<constant>`
  - `token = hashStr(path + "&ts=" + unixSeconds + secret).substring(0,20)`
- The decoded `_xApiLogic` function constructs signed external join-course URLs:
  - It decrypts `tcXApi.key` and `tcXApi.sec` from org config.
  - It builds `/external-api/v2/external-user-join-course?app_key=...&ts=...&token=...`.

### Secret / Credential Sweep

- Targeted credential sweep covered mobile public assets, extracted mobile WebView modules, selected native app sources, web readable JS, and raw API JSON.
- Source-confirmed sensitive/client-visible values already recorded elsewhere:
  - Firebase web config is base64-embedded in the mobile constants module.
  - OneSignal app id and JPush app key are embedded in mobile env constants.
  - LeanCloud dev/stg OTA headers and prod org-directory LeanCloud headers are embedded in mobile OTA/org lookup code.
  - Microsoft OAuth client IDs are present in captured authorization-url responses.
  - LRP live-stream signer app key/secret constants are embedded in the mobile constants module.
  - AISK static iframe JWT is embedded in both web deployments; token body is redacted in this worklog.
- High-entropy sweep false positives were mostly UI/i18n keys, CSS/DOM ids, crypto curve constants, source-map/base64 alphabets, syntax-highlighting token names, and resource filenames.
- Focused hardcoded account/password pass found no fixed username/password credentials; hits were login form fields, OAuth password-grant request construction using user-supplied inputs, syntax-highlighting dictionaries, or `data-testid` attributes.
  - The `zju-external-user-join-course` chunk executes it with `Function(atob(constants.y5))()`.
- Security note: Firebase web config is normally public-ish but still needs Firebase rules validation. The LRP app key/secret style signer is more sensitive because a client-visible secret can allow URL signing if the backend trusts only that token.

### Auth / OAuth / SSO Findings

- iLearn Google authorization capture includes client id `306741705464-0kcojenor8madhsc42ttu850hsmdqf3k.apps.googleusercontent.com` with calendar/userinfo/openid scopes.
- iLearn Microsoft authorization capture includes client id `7c2e9348-a04e-4a98-b948-37b42a5e66f3`.
- iClass Microsoft authorization capture includes client id `1834b1e1-db67-49bf-882f-d9e1f433cacd`.
- iClass Google authorization capture had a blank `client_id=` in the captured URL.
- iLearn Keycloak/SSO host: `tcidentity.thu.edu.tw`, realm `thu`, client id `tronclass`.
- iClass Keycloak/SSO host: `sso.tku.edu.tw`, realm `TKU`, client id `pdsiclass`.
- Android identity proxy callback reads `response["access_token"]` and stores/accesses it through app-side callback logic; needs targeted inspection.
- Mobile auth/callback route metadata:
  - Route config marks `/cas-login`, `/cas-callback`, `/identity-web-login`, `/identity-web-login-callback`, `/cas-special-callback`, and `/login-by-identity-token` as `anonymous:true`.
  - Route config also marks `/oauth-login`, `/oauth-callback`, `/zuno-login`, and `/zju-external-user-join-course` as anonymous/login-style routes.
  - `/office-login/:loginToken` and `/wps-plugin-login` are separate plugin-login pages; Office route metadata is plain `{}` and WPS is reached from Scanner JSON with `action:"wps-plugin-login"`.
- Auth callback chunks:
  - `/cas-login` reads `ticket` and `orgName`, then calls the CAS login helper with `window.APPRuntime.ORG_NAME || orgName`.
  - `/cas-callback` reads `ticket`, `code`, and `_h5`; unless `_h5=true`, it builds redirect URI `origin/cas-callback?ticket=<ticket>` and exchanges the identity `code`.
  - `/identity-web-login` reads `orgName` and `area`, fetches org info, checks identity-web login type, builds the identity web redirect, and navigates to it.
  - `/identity-web-login-callback` mirrors the CAS callback but uses `origin/identity-web-login-callback?ticket=<ticket>` unless `_h5=true`.
  - `/cas-special-callback` reads `ticket` and calls the special CAS login helper.
  - `/login-by-identity-token` reads `accessToken`, `refreshToken`, `orgName`, and `area`, then delegates to the identity-token helper.
- Android `login-by-identity-token` route:
  - Chunk `login-by-identity-token.2216e2da` parses `location.search` for `accessToken`, `refreshToken`, `orgName`, and `area`.
  - It delegates to login helper `_o`, which loads org info if `orgName` differs from the current org, then calls `loginByIdentityToken`.
  - `loginByIdentityToken` stores `refreshToken` into `APPRuntime.identityRefreshToken`, then posts `{access_token, org_id}` to `/api/login?login=access_token`.
  - A successful access-token login expects `data.user_id`; that user id is passed to the global logged-in action.
  - The global state action persists `APPRuntime` by `DataStorage.setItem("global", JSON.stringify(APPRuntime))`.
  - On Android/iOS this `DataStorage` abstraction is Capacitor web Storage, backed by WebView localStorage with the `_cap_` prefix, not the SQLCipher-backed `CacheStorage`.
  - Refreshing an identity access token also updates `APPRuntime.identityRefreshToken` and persists the same `global` state key.
- Deep-link listener:
  - `App.addListener("appUrlOpen", ...)` strips the `tronclass://` prefix and only routes accepted deep-link commands whose path name is in the allowlist.
  - The observed allowlist contains only `login-by-identity-token`; other app routes are not directly dispatched by this listener.
- Identity/common auth helper modules:
  - `chunk-common` module `35524` exports helper paths for CAS login, identity auth-code callback, identity-token login, and special CAS callback.
  - It calls identity token endpoints using `client_id=<resource>`, `redirect_uri=<redirect>`, `code=<code>`, `grant_type=authorization_code`, and `scope=openid`.
  - `chunk-common` module `28249` builds identity authorization URLs with `scope=openid`, `response_type=code`, `redirect_uri`, `client_id`, and optional `kc_idp_hint`. No PKCE `code_challenge` or `state` parameter was observed in that mobile identity-web builder.
  - The same module refreshes identity tokens through x-www-form-urlencoded refresh-token requests and writes the returned `refresh_token` back into `APPRuntime.identityRefreshToken`.
  - Its QR identity helper constructs a status update string `userid=<id>&type=update&status=<status>&userName=<userNo>` and calls `requestIdentityQRCodeAuth`.
  - `chunk-common` module `77386` contains the mobile auth API wrappers: `loginByAccessToken`, `loginByToken`, `casLogin`, `tmsLogin`, `getIdentityAccessToken`, `requestIdentityQRCodeAuth`, `qrCodeLoginForDemo`, `getTGT`, `getST`, and `processLogout`.
  - `loginByUserInfo(data, type)` posts to `/api/login?login=<type>`.
  - `loginByToken(token)` posts to `/api/login?token=<token>` with `{token}` body.
  - `tmsLogin(baseUrl, username, password)` posts JSON credentials to `<baseUrl>/api/tc-login` via native HTTP.
  - `getTGT(url, credentials)` and `getST(url, service)` are generic CAS ticket helpers using native HTTP.
  - Call-site validation over packaged/extracted JS found these wrappers are active:
    - Normal account login chooses `login=unified`, `login=email`, or `login=user_no`, then calls `loginByUserInfo`.
    - Off-campus/TMS login is selected when org config has `tms-url` and `canOffCampusLogin`; it posts credentials to `<tms-url>/api/tc-login`, expects `data.data.accessToken`, then feeds that token into `/api/login?token=<token>`.
    - CAS API login posts credentials to `<casApi>/cas/v1/tickets` for a TGT, posts the service URL `<apiUrl>/api/cas-login` for an ST, then calls `/api/cas-login?ticket=<ST>`.
  - `chunk-common` module `70172` builds `/oauth-callback?auth_code=<authCode>&token=<token>`.
- Callback/postMessage validation:
  - Targeted `postMessage` searches over extracted Android WebView `structured` and `readable` modules returned no business postMessage receiver surface in the app bundle. Native Capacitor/WebView bridge code still sends native messages, but no LMS-level web `message` handler was observed in this targeted pass.
- OAuth platform login:
  - `/oauth-login` parses `orgName` and `area`, loads org info, then uses the org identity H5 config.
  - On Welink/DingTalk/Feishu platforms it may call a native/platform `getAuthCode()` unless disabled by org third-party config.
  - It builds an app redirect URI `/oauth-callback?auth_code=<platformAuthCode>` and then builds the identity authorization URL with that redirect.
  - `/oauth-callback` logs/reads `auth_code`, identity `code`, and `token`; it rebuilds the same `/oauth-callback?auth_code=...&token=...` redirect URI and uses the shared identity callback exchange helper.
- Zuno login callback:
  - `/zuno-login` is anonymous and reads query params `cid`, `uid`, `s`, `on`, and `lang`.
  - It sets preferred language from `lang`, loads org info from `on` or `APPRuntime.ORG_NAME`, and writes query `s` directly to `APPRuntime.sessionID`.
  - If `uid` is present, it dispatches the login action for that user id. If `uid` is absent, it calls `getProfile()` under the supplied session and uses the returned profile id.
  - It then routes to `/zuno-course/:courseId/preview`.
- ZJU external join-course callback:
  - `/zju-external-user-join-course` is anonymous and only allows direct entry from `/`; otherwise its route guard redirects home.
  - It decodes query `p` or `_p` as JSON/base64-like payload and requires `courseId`; query `code` is treated as the external/WeChat authorization code.
  - It fetches org info, uses decoded `_xApiLogic` to construct `/external-api/v2/external-user-join-course?app_key=...&ts=...&token=...` from `org.tcXApi.key/sec`, then posts `{course_id, code, create_user, join_course}`.
  - On success it stores response header `x-session-id` into `APPRuntime.sessionID`, dispatches login by returned `user_id`, and redirects either to course navigation or back through `/j?p=<payload>`.
  - If no `code` is present, it redirects the browser to WeChat OAuth using `org.thirdParty.wechat.appId`, current `location.href` as redirect, and scope defaulting to `snsapi_base`.
- CAS/SSO browser flow:
  - The app opens an InAppBrowser with `clearcache`, `clearsessioncache`, and `noSession`.
  - On matching callback URL it executes script in the browser to read `document.cookie` and `document.body.textContent`.
  - It extracts `session=...` from the cookie and `user_id` from the JSON body, then stores the session in `APPRuntime.sessionID`.
- API client behavior:
  - Common POST/event-stream helper attaches `X-SESSION-ID: APPRuntime.sessionID || ""`.
  - Axios request interceptor treats `/api`, notification, stat, diagnostic, RMS, and InCast requests as managed requests. When `APPRuntime.sessionID` exists and the URL is not the login endpoint, it attaches `x-session-id`, `X-Requested-With: XMLHttpRequest`, and `Accept-Language`.
  - The response interceptor updates `APPRuntime.sessionID` from response header `x-session-id` for API GET/POST/PUT/DELETE requests except logout, then persists global state through the throttled persistence helper.
  - The identity-refresh token path uses x-www-form-urlencoded Keycloak refresh-token requests.

### Hidden Debug / Dev Panels

- Dynamic debug route module:
  - Registers five routes by name: `DevTest`, `VideoTest`, `DevDebug`, `DevLogs`, and `DevBeacon`.
  - Each route receives a random path generated as `/internal-debug-` plus 20 characters from `[a-zA-Z0-9]`.
  - Each dynamic route is added with `meta: { trackExcluded: true, anonymous: true }`.
  - Route helper functions push by route name after registering the dynamic paths: `toDevTest`, `toVideoTest`, `toDevDebug`, `toDevLogs`, `toDevBeacon`.
- Reachable entry points found:
  - Search page imports the debug route helper. Entering `:debug` in the search bar calls `toDevDebug`; entering `:test` calls `toDevTest`. The `/search` route itself has normal `meta:{}` and therefore belongs to the logged-in app flow.
  - About page uses `theDoorToDebug()`: five taps on the version text toggles vConsole on/off. The `/profile/about` route also has normal `meta:{}` and therefore belongs to the logged-in app flow.
  - Login template has a separate hidden debug-door counter bound to the login title span (`login-template-title`). Five clicks/taps call `toDevDebug`. This is the currently confirmed pre-login debug entry; no normal UI path from `DevDebug` to `DevTest` has been found.
  - Router platform guard explicitly exempts `DevLogs`, `DevDebug`, `VideoTest`, and `DevTest` from the unsupported-platform redirect list. Dynamic route metadata also marks them anonymous.
  - Router auth guard lets a route pass when all matched route records have `meta.anonymous`; otherwise it requires `APPRuntime.isLogin && APPRuntime.sessionID` and redirects through the login route helper. Therefore the dynamically registered debug routes remain pre-login routable after a helper registers them.
  - Call-site count pass found `toDevTest` only in the debug-route helper definition and the search page `:test` handler; no non-search caller was found in packaged/extracted JS. `toVideoTest` and `toDevBeacon` only appear in the helper definition in the targeted pass.
- `DevDebug` page:
  - Shows user agent and full `APPRuntime` JSON.
  - Has a `Show vConsole` toggle persisted to local `_config.SHOW_VCONSOLE`.
  - Has a hidden input command `:internal-debug`; when entered it loads `https://pagespy.tronclass.com.cn/page-spy/index.min.js` and starts `new PageSpy({ autoRender:false, project:<org>, title:<userNo> })`.
  - No environment/org gate was observed around the PageSpy path; loading is gated by reaching `DevDebug` and typing the exact `:internal-debug` command.
  - Provides "查看日志" (`toDevLogs`), "Logout", "Copy", and "Copy User Tag Alias" actions.
- `DevLogs` page:
  - Reads local logs through the app log collection module, parses Android multi-line logs when running in app, filters by level/search term, and has a `Report` action that calls log `push()`.
- `DevTest` page:
  - Exposes Capacitor OTA controls: `download`, `set`, `reload`, `list`, `current`, `reset`, and `delete`.
  - The update input accepts paths matching `^(qa|stg|prod)/(version).(10-digit timestamp).(8-char hash).zip$`, constructs `https://mobile-download.tronclass.com.cn/mobile-2.0/ota/<input>`, derives version as `major.minor.patch.timestamp`, then calls `CapacitorUpdater.download({url, version})` and `CapacitorUpdater.set({version})`.
  - Exposes Beacon controls: Bluetooth permission request, initialize, cleanup, start/stop broadcasting, start/stop monitoring.
  - Test broadcast uses `rollcallId: 10086` and nonce `XWWWWXWWWWXWWWWXWWWW`.
  - Exposes log collection test actions: add synthetic log, get length, get size, clear, and push logs.
- `DevBeacon` page:
  - Immediately requests Bluetooth authorization.
  - Broadcasts a fixed test rollcall id `1200` with nonce `UUXWWVZXVTWZWWUXZVVW`.
  - Can monitor, parse received beacons, compare parsed rollcall id against `1200`, and display the beacon payload.
- `VideoTest` page:
  - Hard-codes local/private test media URLs under `http://192.168.11.250:9999/...` for HLS and MP4 instructor/student channels.
  - Primarily useful as proof that internal test code shipped in the production mobile bundle.
- Interpretation:
  - The most sensitive part is not the random path by itself; it is that named-route helpers expose anonymous debug panels after any reachable code path calls route registration.
  - Search `:test` directly reaches the OTA/beacon test page in the static code path, making the unsigned OTA updater materially higher risk if the search page is reachable in a logged-in app state.
  - `DevDebug` loading remote PageSpy from a fixed external host is a separate sensitive remote-debug channel.
  - Reachability is split: `DevDebug` is pre-login reachable through the login template dark pattern; `DevTest` is confirmed reachable from the logged-in search page via `:test`; all dynamically registered debug routes are marked anonymous after registration.

### Android Push / Telemetry Config

- Production WebView env constants:
  - `VUE_APP_JPUSH_APP_KEY = "15126da3dc13d1cbe847512b"`.
  - `VUE_APP_JPUSH_CHANNEL = "developer-default"`.
  - `VUE_APP_JPUSH_IS_PRODUCTION = "TRUE"`.
  - `VUE_APP_JPUSH_IS_IDFA = "TRUE"`.
  - `VUE_APP_JPUSH_DELAY = "TRUE"`.
  - `VUE_APP_ONESIGNAL_APP_ID = "c810be65-8ec7-4f73-a802-20862e93c9b8"`.
- Android manifest/resource observations:
  - No `google-services.json` or `agconnect-services.json` found in the unpacked resource set.
  - Manifest contains OneSignal/Firebase receiver/service registrations and `firebase_messaging_auto_init_enabled=false`.
  - JPush appears through Cordova plugin metadata/resources and WebView JS config; no Android manifest `JPUSH_APPKEY` meta-data was observed in the checked manifest slices.
  - Huawei/Xiaomi searches found Huawei badge permissions, OneSignal HMS bridge components (`HmsMessageServiceOneSignal`, `NotificationOpenedActivityHMS`), and shortcut-badger SDK files. No `agconnect-services.json`, Huawei AppGallery project id, Xiaomi/MiPush app id, or separate MiPush client registration was observed in the targeted resource/config pass.
  - App packaged `env.js` and `set-native-env.js` only set runtime defaults and `BUILD_FOR_GP`; they do not carry Sentry DSN, HMS/Xiaomi ids, or extra push credentials.
- Runtime push selection:
  - Unified `PushNotification` wrapper uses OneSignal when `BUILD_FOR_GP=true` or area is not `cn`.
  - For non-Google-Play Android outside `cn`, the app shows a Google Play prompt and returns before initializing push.
  - For `cn` area, it uses native JPush. HarmonyOS has a separate JPush bridge.
- OneSignal behavior:
  - Calls `window.plugins.OneSignal.setAppId("c810be65-8ec7-4f73-a802-20862e93c9b8")`.
  - Registers foreground/opened handlers and passes notification `additionalData.message` plus the extra data object into the app callback.
  - Uses server-provided `/api/user/tags` data, computes tags/alias, calls `setExternalUserId(alias)`, sends tags in chunks, and deletes stale tags.
  - On reset/logout, disables subscription, caches current tags in `localStorage.subscribedTags`, and later `deleteCachedTags()` removes those cached OneSignal tags on the next init.
- JPush behavior:
  - Starts native JPush (`setAuth(true)`, `init`, `getRegistrationID`), then adds event listeners for notification receive/open and `TAG_UPDATE` messages.
  - Processes the same server-provided tags/alias, adds tags in chunks of 100, and sets alias with sequence `1`.
  - Reset clears badge, cleans tags, and deletes alias.
- Current interpretation:
  - OneSignal/JPush app identifiers are client-visible configuration, not backend secrets by themselves. No separate Sentry DSN, Huawei AppGallery project config, or Xiaomi push config was found in the app resource/config scan.
  - The sensitive behavior is tag/alias binding and notification extra-data handling: notification extras feed app navigation/callback code paths and tags/alias encode user/course segmentation.

### Debug / Dev / Endpoint Clues

- Android indexed URLs include:
  - `https://mobile-download.tronclass.com.cn`
  - `https://mobile-download.tronclass.com.cn/mobile-2.0/ota/`
  - `policy-jump.html?endpoint=`
  - `http://localhost`
  - `https://dev.mi.com/platform/push`
  - `https://superapp-demo.dev2.supwisdom.com/#/`
- Product-vs-vendor distinction completed in later source passes: mobile-download/OTA and policy-jump are product-relevant; dev.mi.com is SDK/vendor documentation residue; superapp-demo appears only as a bridge comment/reference in the captured package.

### APP API Surface vs Web API Surface

- Extracted 179 unique API-ish paths from Android WebView assets and compared them to iClass/iLearn web API indexes.
- 54 normalized APP-only paths were found. High-value categories:
  - Auth/login:
    - `/api/cas-login`
    - `/api/jwt`
    - `/api/logout`
    - `/api/office-plugin/login`
    - `/api/oidc-token?org_id=`
    - `/api/qrcode/login`
    - `/api/tc-login`
    - `/api/wps-plugin/login`
    - `/cas/login/?service=`
    - `/cas/v1/tickets`
  - Face/proctoring:
    - `/api/face-photo-check/config`
    - `/api/v1/face-check-records`
    - `/api/v1/face-check-records/check?`
    - `/api/v1/face-check-records/verify?`
    - `/api/v1/storages/upload`
  - Rollcall/interaction:
    - `/api/radar/rollcalls`
    - `/api/courses/interaction/`
    - `/api/courses/interactions/danmu/`
    - `/api/courses/student-interactions/`
  - Office/integration:
    - `/api/aliyun-office/token`
    - `/api/aliyun-office/refresh_token`
    - `/api/appdocument/appInteractiveHtml?id=...`
    - `/api/campus-hoy/js-sdk/config`
    - `/api/js-ticket/wechat`
    - `/api/office-plugin/login`
    - `/api/wps-plugin/login`
  - Resource/share:
    - `/api/shared-resources-to-me?`
    - `/api/shared-resources/from-me?`
    - `/api/shared-resources/my-follower?`
    - `/api/shared-resources/my-track-user?`
    - `/api/shared-resources/recommended?`
    - `/api/uploads/move_files`
    - `/api/uptoken`
- 630 web-only paths remain, mostly full web/admin/stat/export/data-import/air-credit/knowledge-graph surfaces that are absent from the Android bundle.

Source-origin validation completed for the high-value APP-only set:

- CAS/TMS/auth:
  - `/api/tc-login` is used by the off-campus/TMS login helper, which POSTs JSON credentials to `<tms-url>/api/tc-login`, expects an access token, then feeds it into `/api/login?token=<token>`.
  - `/cas/v1/tickets`, `/cas/login/?service=`, and `/api/cas-login` are active in both direct CAS TGT/ST login and browser CAS callback login. The browser flow opens InAppBrowser with cache/session clearing and watches for the configured callback path, defaulting to `/api/cas-login`.
  - `/api/qrcode/login` is not called as a fixed API path; the scanner posts the scanned URL directly when it contains `/api/qrcode/login`, after a confirmation prompt. This keeps the server-side QR payload and URL binding outside the static corpus.
- Plugin logins:
  - `/office-login/:loginToken` is a logged-in route with plain route metadata; its component posts `{userId, loginToken, orgId}` to `/api/office-plugin/login`.
  - WPS plugin login is reached from Scanner JSON with `action:"wps-plugin-login"`. The client parses the token, requires instructor-view roles before routing, and posts `{token}` to `/api/wps-plugin/login`.
  - Static residuals: token expiry, replay protection, token-to-user binding, and server-side role validation are not visible here.
- Statistics JWT:
  - `/api/jwt` is fetched after `/api/statistics-config`; the returned `data.jwt` is copied into the global statistics config and persisted through `CacheStorage`/global state. The observed stat-send path posts to the configured Influx/stat server with `SESSION` and content-type headers; direct JWT header use was not visible in the sampled function.
- Face/proctoring:
  - Mobile and web both use the same face-service family: `/api/face-recognition/config` returns service URL/app-code/signature/timestamp/user-no material, then client code calls service-side storage upload and face-record check/verify APIs.
  - This means `/api/v1/face-check-records*` is not truly mobile-only as a feature; it appeared APP-only in the normalized app-vs-web diff because web references are bundled through a service prefix and/or captured as `/api/face-recognition/config`.
  - Static residuals: config credential lifetime, service signature scope, upload object ownership, and server validation of `name`/`id_no` fallback behavior are not in this corpus.
- Rollcall/interaction:
  - `/api/radar/rollcalls`, QR rollcall answer, number/self-registration answers, student interactions, danmu interactions, and create-interaction helpers are ordinary logged-in teaching/rollcall flows.
  - Scanner QR rollcall includes client-side error mappings for invalid create time/hash, QR expiry, duplicate device, unknown student, and closed/not-found states, suggesting server-side QR validation exists but not exposing the algorithm.
- Office/resource/share:
  - Aliyun Office preview/edit uses `/api/aliyun-office/token` and `/api/aliyun-office/refresh_token`; the SDK is loaded from Ali CDN and token response fields feed `PreviewURL`, `EditURL`, and `WebofficeURL`.
  - Shared-resource endpoints (`shared-resources-to-me`, `from-me`, `my-follower`, `my-track-user`, `recommended`) are active logged-in resource-sharing/list/follow flows.
  - `/api/uptoken` and `/api/uploads/move_files` are referenced through upload/resource-management helpers; no unauthenticated raw token body was found in the checked web raw sets.
- Super-app bridge and `appInteractiveHtml`:
  - `/api/appdocument/appInteractiveHtml?id=...` is not a runtime API call in the captured bundle. It only appears in `index.html` comments documenting an XJTU bridge reference URL and in `app/indexes/urls.txt`.
  - `index.html` defines `addPlatformScript()` for WeCom, Welink, WeChat/miniprogram, DingTalk, LINE, Feishu, NJTC, FDZCXY, CampusHoy, XJTU, and Whistle. Targeted searches did not find runtime callers in the captured app JS, so the local super-app SDKs remain a dormant/host-org bridge surface rather than a confirmed active LMS flow in this package.

## Final Broad Sink / Bridge Sweep

- Final broad sink sweep covered app WebView readable chunks, app minified main bundle, web iClass/iLearn readable bundles, and selected raw static captures for unmapped route/API/bridge strings.
- High-volume classes were mostly framework/vendor or already-mapped surfaces:
  - `angular_bind_html`: 12,609 hits, dominated by Angular templates, `$sce.trustAsResourceUrl`, `trustAsHtml` filters, preview URLs, and translated rich tips.
  - `location_assign`: 2,024 hits, dominated by OAuth/CAS/logout/navigation flows, Android deep-link allowlist handling, and the already-mapped no-origin `backToPath` navigation sink.
  - `inner_html_write`: 1,667 hits, dominated by rich-content rendering, export/open-window helpers, contenteditable/editor libraries, certificate/html-to-image helpers, and vendor probes.
  - `vue_v_html`: 1,219 hits, including subject descriptions, activity descriptions, answers, comments, generated text, analysis data, dictionary/vocabulary rich content, and translated UI tips.
  - `new_function`: 57 hits, mostly Vue runtime/template/i18n/vendor code, plus the newly documented mobile remote audio extension.
  - `message_listener` with origin-related terms: 52 hits, mostly iframe-resizer/worker/player bridges already sampled.
  - `iFrameResize({checkOrigin:false})`: 29 hits, matching the previously mapped plugin, OBE, replay/player, classroom-report, resource preview, and rich-content iframe integrations.
- New finding from this sweep:
  - Mobile remote audio extension dynamically fetches and executes a CDN-hosted function through `new Function("return " + body)()`; documented above under Android Remote Extension / Audio URL Patch.
- Additional trust-boundary notes from this sweep:
  - Mobile `ai-quiz-formatter` runs KaTeX and, when the markdown modifier is present, writes `markdown.parse(element.innerHTML)` back into `element.innerHTML`. This is a rich-content sanitizer/trust-boundary question rather than a standalone exploit in the static corpus.
  - Web question/activity/resource pages use many `innerHTML` / Vue `domProps.innerHTML` sinks for intentional rich LMS content such as subject descriptions, options, answers, explanations, activity descriptions, live descriptions, generated text, and analysis data. Static impact depends on backend/editor sanitization and content-author permissions.
  - App vendor code includes a DOMPurify-backed `innerHTML` path in one document/editor library, showing at least some rich HTML flows sanitize locally; this does not prove all LMS rich-content fields do.
  - `document.write` hits are concentrated in file/export/open-window helpers and vendor libraries; no new credential or token sink emerged.
- Conclusion of final sweep:
  - No additional static route/API/bridge family remained unmapped after the remote audio extension and rich-HTML trust-boundary notes were added.
  - Remaining unknowns require live runtime or backend evidence: token TTL/scope, frame response headers, backend ACL/object ownership, server-side sanitization, rollcall replay checks, and remote CDN/OTA metadata integrity controls.

## Residual Unknowns (No Static Leads Left)

- Confirm resource/config keys and app IDs:
  - Completed targeted pass: Firebase web config, OneSignal app id, JPush app key, LeanCloud OTA/org headers, Microsoft OAuth client ids, LRP signer constants, and AISK static JWT found where applicable; `google-services.json` and `agconnect-services.json` absent; no separate Sentry DSN, Huawei AppGallery project config, Xiaomi/MiPush project id, AWS key, private-key block, or hardcoded username/password pair observed outside SDK/vendor traces.
- Android OTA:
  - Source-chain pass complete. `getOrgInfo("OtaVersion","earth")` is not fed by `/org/global-config`; it queries external `api-org.tronclass.com.cn/orgs` unless `APPRuntime.ORG_INFO` is locally configured. No raw `OtaVersion` response body exists in the corpus, so prod metadata contents/ACL remain server-side unknowns.
- Android Beacon/Radar:
  - API trace complete; still need validate server-side replay/timestamp/nonce/device/location checks from raw responses or backend behavior if available.
- APP API surface:
  - APP-vs-Web diff completed once and high-value APP-only endpoints have source-origin validation. Remaining APP API unknowns are server-side controls: token TTL/binding, replay checks, role/tenant scoping, and service credential lifetime.
- Identity/login bridge:
  - Identity proxy, anonymous auth callback routes, OAuth platform login, Zuno callback, ZJU external join-course callback, deep-link allowlist, identity web callback exchange, QR identity status helper, generic auth helper wrappers, session request/response attachment, and targeted Android WebView postMessage absence inspected.
  - Alternate auth wrapper call-site validation completed for `loginByToken`, `loginByUserInfo`, `tmsLogin`, `getTGT`, and `getST`.
- Hidden debug/dev panels:
  - Reachability matrix completed: login title five-tap reaches `DevDebug` pre-login; search `:debug/:test` is logged-in flow; About version five-tap only toggles vConsole; no non-search `toDevTest` caller found; PageSpy is gated by `DevDebug` plus typed `:internal-debug`.
- Public raw API snapshots:
  - First raw snapshot summary complete for OAuth authorization-url, org, profile/user-shaped, bulletin/course, third-party/info, and representative 500 pages.
  - Authz/JWT/export follow-up complete for indexed/captured raw responses. The corpus provides generic 403/404/500 boundary evidence and department-org-tree exposure, but no exact plugin JWT/token raw bodies.
  - Plugin iframe source validation complete and index-style raw plugin probes checked. Mobile Scanner call-site extraction completed for identity QR and `/api/qrcode/login`.
- Web client-risk surfaces:
  - Representative source validation completed for iframe host/token flows, AISK static JWT iframe, and wildcard/no-origin `postMessage` receivers. Remaining gaps need non-static evidence: response headers/frameability, embedded app behavior, plugin/player/AISK token scope and lifetime, and server-side validation of score/token/writeback endpoints.
- Native libraries:
  - Deep native strings/symbols and Java/plugin source pass complete for SQLCipher. Hidden encrypted `openStore` JS trace is complete: no app-specific encrypted call-site observed; app wrapper opens `TCMobile/cacheData` without encryption.
- Admin/stat/export surfaces:
  - Endpoint-family enumeration, representative raw responses, and representative source-origin sampling complete. Remaining unknowns are server-side: role/tenant scoping, object ownership, export job isolation, file parsing validation, and async/SSE authorization.
- Web anonymous/visitor surfaces:
  - `/anonymous-api` map completed at static/source level. No direct anonymous response bodies were captured, so remaining questions are backend ACL/content-publicness/object-id validation.
- Mobile file/intents:
  - Source-level pass complete for MainActivity MIME filters, open-with serializer/bootstrap init, FileProvider paths, external storage/all-files branch, FileOpener2, DocumentViewer, and MediaPicker. Residual questions require runtime Android grant behavior and OS-version behavior.

## Closed / Low-Value Paths

- Build/test/lint: not applicable; this is static reverse-engineering output with no runnable project harness.
- Git history: not available; workspace is not a git repository.
- Direct bulk reading of all JS/smali: too noisy; use indexes and targeted scans first.

## Next Action Queue

No remaining static-code actions are queued.

Completed final actions:

1. Final broad route/API/bridge/sink sweep completed and recorded.
2. Stale "in progress" exploration-map items were closed or converted into explicit backend/runtime residuals.
3. The last new static finding, the mobile remote audio extension dynamic execution path, was documented.

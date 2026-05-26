# Auto-Rollcall-thu-Tronclass
# 東海 TronClass / iLearn 自動點名輔助工具

這是一個以東海大學 THU TronClass / iLearn 為主線的自動點名輔助工具。它支援單視窗監控輸出、舊版記事本設定流、IANA 時區排程、number/radar/QR 點名處理、靜態 QR 影像解碼、多帳號與群組設定、Bot webhook、LINE/Discord/Telegram 通知、本機 QR scanner、read-only companion shell、release build 與安全驗證流程。

> 請只在你有權限、且符合學校與課程規範的情境下使用。不要分享帳密、token、cookie、`state/`、`log/`、真實 QR payload 或未遮蔽的 API 回應。不要把填好帳密的 `config.yaml` 傳給別人。

## 版本狀態：v1.2-alpha.4

`v1.2-alpha.4` 延續 number 點名越權直接讀碼（讀 `student_rollcalls` 的 `number_code` 單發提交，讀不到再退回暴力猜碼），並強化點名診斷擷取：數字／雷達／QR 全程、**未脫敏**完整記錄到 gitignored `log/rollcall_capture/`，且**每輪輪詢、直到點名關閉前都持續擷取**（含已簽到後）；另含雷達探測／數字猜碼／QR 送出的逐筆交握、即時通知／WebSocket 通道擷取、QR 剪貼簿自動送出與簽到進度顯示。本版新增 **QR `data` 雜湊驗證自動探測**：偵測到 QR 點名時自動測試伺服器是否只認時間戳、忽略雜湊（送出「不含 data」與「正確時間戳＋隨機雜湊」並完整記錄回應；若伺服器接受即等於自動完成簽到）。主要能力仍屬 alpha，**尚未經實際課堂環境完整驗收**；請把這版視為未完整測試的預發布版本，務必自行確認符合校規後再使用。

目前重點：

- 預設啟動會進入單視窗監控輸出：主視窗只逐行顯示事件；按任意鍵會用固定的 `C:\Windows\System32\notepad.exe` 開啟 `config.yaml`
- `config.yaml` 是沒有註解的極簡人類格式，只保留 `now`、帳號、群組與上課時間；進階項放在同層 `config.advanced.yaml`
- 常見輸入會自動修正前後空白與多餘空格；QR payload 只 trim 前後空白，不改內部內容
- 排程可在 `config.advanced.yaml` 設定 IANA timezone；每日可有多段 range
- THU / TKU 是預設使用者可見 provider；登入後監控、number、radar、QR、課程與學期 API 走同一套 endpoint-driven runtime
- number 點名先走越權直接讀碼（讀 `student_rollcalls` 的 `number_code` 單發提交，旗標 `number.direct_code_lookup` 預設開）；讀不到時自動退回暴力猜碼，確保不退化
- Discord HTTP Interactions 是推薦 production 入口；optional Gateway、QR modal、schema sync 已有核心
- research probe 只在明確 opt-in 下記錄高風險端點的 HTTP 狀態與欄位形狀，不記錄答案值，也不進 daily automation
- 點名診斷擷取（預設開）：偵測到點名後，對每一筆仍開啟的點名於每輪輪詢擷取學生可讀端點的**完整未脫敏**伺服器回應，直到點名 id 關閉才停（含已簽到後）；雷達探測／數字猜碼／QR 送出另有逐筆交握記錄。輸出寫入 gitignored `log/rollcall_capture/`，**可能含敏感值，請勿分享或提交版控**
- QR 剪貼簿自動送出（預設開）：偵測到 QR 點名時監看剪貼簿，截圖（需 `.[qr-image]` 的 Pillow/OpenCV）或文字 payload 解出後，**僅在 rollcallId 與當前點名相符時**自動送出
- QR `data` 雜湊驗證自動探測（預設開，`qr.data_probe_autorun`）：偵測到 QR 點名時**每場一次**送出「不含 data」與「正確時間戳＋隨機 32 位雜湊」測試伺服器驗證行為，完整記錄回應；若任一筆被接受（2xx）即視為自動簽到並跳過後備。亦可用 `python -m troTHU.tron qr data-probe --rollcall-id <id>` 手動控制測試
- Windows zip release build runner 會跑 unittest、PyInstaller、artifact validation 與 temp-extract smoke

## 5 分鐘快速開始

從原始碼執行：

```bash
python -m pip install -r requirements.txt
python -m troTHU.tron init
python -m troTHU.tron doctor
python -m troTHU.tron
```

無參數啟動會直接開始監控。它不清螢幕、不重繪、不顯示分頁，也不在終端裡做命令列輸入；監控事件會在主視窗逐行輸出。需要改帳號、密碼、學校、群組或上課時間時，直接按任意鍵，程式會用 Windows 舊版記事本開啟 `config.yaml`。關閉記事本後會重新讀取設定；如果 `now` 改變，會清除目前 session 並切換到新的帳號或群組。

如果 `now` 是空白，但整份 `account` 只有一個有效帳號，程式會自動使用那個帳號，不會強迫你再填一次 `now`。如果有多個帳號而 `now` 仍空白，啟動時會先開記事本讓你填寫；關閉後仍無法判斷帳號就會安全停止，不會進入監控。

`run --classic` 仍保留為相容入口，但會走同一套新版監控輸出。若你要放在排程或背景服務，只想看事件、不希望按鍵開記事本：

```bash
python -m troTHU.tron run --no-input
```

QR 點名可以貼 payload 或開本機 scanner：

```bash
python -m troTHU.tron qr paste "貼上 QR URL 或 payload"
python -m troTHU.tron qr paste --image screenshot.png --yes
python -m troTHU.tron qr scan --open
```

排查時先跑：

```bash
python -m troTHU.tron status --json
python -m troTHU.tron dashboard --once
python -m troTHU.tron config doctor
python -m troTHU.tron logs summarize --limit 20
python -m troTHU.tron validation local-smoke --json
```

## 安裝方式

### Windows zip

Release zip 名稱格式：

```text
THU_Auto_Rollcall-v1.2.0a4-windows-x64.zip
```

下載後請完整解壓縮，再在資料夾內執行 `auto-rollcall-thu-tronclass.exe`。不要直接在 zip 裡雙擊執行。第一次啟動會在 exe 同層建立或使用 `config.yaml`、`state/`、`log/`。

### 原始碼 / 開發者

```bash
python -m pip install -r requirements.txt
python -m pip install -e .[packaging]
python -m pip install -e .[qr-image]   # 選用：靜態圖片 QR 解碼
python -m pip install -e .[browser]    # 選用：Playwright browser-assisted login
python -m troTHU.tron package-check --json
```

安裝 editable package 後，也可以使用 console scripts：

```bash
trothu status
auto-rollcall-thu-tronclass doctor
```

## 日常使用路徑

- Monitor console：`python -m troTHU.tron` 或 `python -m troTHU.tron run`，主視窗只逐行輸出事件；按任意鍵用舊版記事本開啟 `config.yaml`，沒有全螢幕 UI、第二終端控制通道或同終端命令輸入。
- CLI-only：`doctor` 檢查環境，`status` 看本地狀態，`run --no-input` 啟動無互動監控。
- QR assisted：`qr paste` 或 `qr scan --open`；fan-out 只送到同 provider + rollcall id 的 pending profile，沒有 match 不 fallback active profile。
- Bot generic / LINE / Discord：先設定 bindings/admins；本機測 generic webhook；公開部署需 HTTPS、簽章驗證與反向代理設定。
- Telegram：目前是 outbound notification sink，不提供 Telegram inbound command bot。
- Local app shell：`app serve --open` 只綁 localhost，提供 read-only / preview-only companion shell；不送出 QR、不匯入 cookie、不 reauth、不控制帳號。

## 設定檔

`config.yaml` 會保留為可追蹤的中文 placeholder 範例。它不是標準 YAML，而是本專案專用、對空格寬容的人類設定格式；冒號後有沒有空格都可以，`school` 大小寫不敏感，`group` 也相容過去草稿裡誤拼的 `grop`。

一般使用者只需要改四塊：`now`、`account`、`group`、`operating`。number/radar/timezone/research/webview/provider endpoint/Bot token env 等進階設定放在 `config.advanced.yaml`，平常不用碰。

常用命令：

```bash
python -m troTHU.tron config show
python -m troTHU.tron config show --json
python -m troTHU.tron config doctor
python -m troTHU.tron config compact --dry-run
python -m troTHU.tron config compact --write
python -m troTHU.tron config advanced
```

`config compact --write` 會先建立 `config-legacy-backup-YYYYMMDD-HHMMSS.yaml`，再寫入新版兩檔。`config advanced` 會用同一個舊版記事本開啟 `config.advanced.yaml`。

新版 `config.yaml` 範例：

```text
now:(填帳號或 class A)

account:
  user:(帳號1)
  passwd:(密碼1)
  school:THU

group:
  class:A
    school:THU
    user:(帳號1)

operating:
  0:
    enable:true
    range:
    - 00:00 - 00:00
```

`now:S12345678` 會監控該帳號；`now:class A` 會使用 `group class:A`。如果只有一個有效帳號，`now` 可以留空，程式會自動使用那個帳號。`operating` 的星期採 `0=星期日 ... 6=星期六`；同一天可寫多個 `- 09:10 - 12:00` 形式的時段。

`config.advanced.yaml` 可放進階設定，例如：

```yaml
time:
  timezone: Asia/Taipei
auth:
  browser_assisted_login:
    enabled: false
research:
  enabled: false
  allow_api_exploration: false
  allow_risky_probe: false
```

若不想把密碼放在 `config.yaml`，可改用環境變數、keyring 或互動輸入。

## 點名能力

### number

number 點名支援錯碼、成功、暫時性錯誤、限流、session expired 與未知回應分類。遇到 429/5xx 或暫時性錯誤會 cooldown、降併發，避免硬衝。

number 點名會先嘗試**直接讀碼**：透過 `student_rollcalls` 端點讀出當次 `number_code` 後單發提交（旗標 `number.direct_code_lookup`，預設開）；只有在讀不到（端點未提供、過期或非預期回應）時才退回上述暴力猜碼路徑。因此正常情況下一次點名只需極少請求，並保有暴力猜碼作為不退化的後備。真實課堂行為以 R1 validation 記錄為準。

### radar

radar 使用 THU 幾何求解器，支援 lite/beacon payload、`radarSignal`、距離回應 fixture compatibility、安全診斷與 Radar Assist map contract。真實課堂環境仍建議用 R1 validation 記錄結果。

### QR

QR 支援 `_p` JSON、`p` compact、relative URL、query-only、pure JSON、pure compact、unknown field diagnostic，也可用 `qr paste --image <path>` 從截圖或照片解出 QR。影像解碼需要選用 extra；preview/result 不回顯 raw payload 或 QR `data`。

## Bot / 通知

### Generic webhook

本機測試入口：

```bash
python -m troTHU.tron bot serve --adapter generic
```

Generic request 形狀：

```json
{"source_user_id":"user-id","channel_id":"local","text":"status"}
```

### LINE

LINE webhook 支援 signature 驗證、reply API、push notification sink。token/secret 只從 env 讀，不寫入 log/worklog/response。

常用 env：

```text
LINE_CHANNEL_ACCESS_TOKEN
LINE_CHANNEL_SECRET
```

### Discord

Discord HTTP Interactions 是推薦 production 入口：

```bash
python -m troTHU.tron bot discord-schema --json
python -m troTHU.tron bot discord-sync --dry-run --json
python -m troTHU.tron bot serve --adapter discord
```

optional Gateway 也存在，但不是預設部署方式：

```bash
python -m troTHU.tron bot discord-gateway --dry-run --json
```

### Telegram

Telegram 目前支援 outbound notification bus sink：

```bash
python -m troTHU.tron account bind telegram TELEGRAM_CHAT_ID default
```

## Provider：THU / TKU ready

```bash
python -m troTHU.tron provider list
python -m troTHU.tron provider show tku --json
python -m troTHU.tron provider fixture review-template tku --json
python -m troTHU.tron provider ready-gate tku --fixture fixture.json --json
```

THU、TKU 在預設使用者入口中是可見 ready provider；兩校都可啟動完整日常流程，不需要 `provider.allow_experimental`。這個舊欄位會保留作為相容 no-op。TKU 會優先使用 HTTP fast SSO 路徑模擬 iClass/SSO 表單、ImageValidate 與 redirect，並在登入後用 iClass API 驗證 session；若 fast path 失敗或 API 驗證失敗，才自動回退到 Playwright browser-assisted login。fixture review / ready-gate 只處理 sanitized fixture 與人工 acceptance，不會保存密碼、cookie、raw response、完整 QR payload 或 number code。NFU/GUET/XMU 不在 provider ready 目標內。

## App shell / WebView / Research

- `app blueprint`：輸出未來 App/GUI contract。
- `app serve --open`：開 localhost read-only companion shell，所有 `/app/api/*` 需要短效 local token。
- `webview preview/import`：只做 cookie sync contract 與本地 cookie cache bridge；真正 import 必須同時開 config gate 與 `--save`。
- `research status/api/browser-check/browser-capture`：明確 opt-in 的 read-only metadata capture；不查答案、不保存 raw body/header/cookie/token/QR。
- `research probe <target> --rollcall-id <id>`：獨立的 shape-only **取證**探測（與日常直接讀碼分開），只記 HTTP 狀態與欄位形狀；目標支援 `student_rollcalls`、`lite`、`ongoing_rollcalls`（後者免 `--rollcall-id`）；需要 `research.enabled=true`、`allow_api_exploration=true`、`allow_risky_probe=true`，且不會把答案值寫入輸出。
- **點名診斷擷取（diagnostic capture，預設開）**：裸跑 `python -m troTHU.tron` 時，偵測到點名後對**每一筆仍開啟的點名於每輪輪詢**擷取相關端點的**完整、未脫敏**伺服器回應到本機 `log/rollcall_capture/`（已被 `.gitignore` 完全排除），**直到點名 id 關閉才停（含已簽到之後）**，用於個人排查與找出隱藏資訊（例如 QR 的 `data`）；雷達探測點／數字猜碼／QR 送出另以逐筆交握寫入 `exchanges_<id>.jsonl`（每場上限 `capture.max_exchanges_per_rollcall`，預設 600）。QR／未支援點名另會自動擷取通知通道、atmosphere WebSocket frame，以及 QR 專用的 session/匿名只讀 GET 對照與老師 QR 頁 HTML；偵測到 QR 時也會監看剪貼簿自動送出（`qr.clipboard_autosubmit`），送出後顯示簽到進度。此輸出**可能含敏感值，請勿分享 `log/`、勿提交版控**。可於 `config.advanced.yaml` 以 `capture.rollcall_full_capture` / `capture.realtime_capture` / `capture.qr_info_capture` 關閉、`capture.org_id` 覆寫；若要延長 QR 線索擷取視窗，可設 `capture.qr_info_duration_seconds` 與 `capture.qr_info_interval_seconds`，其中 `capture.qr_info_duration_seconds: always` 會在該場 QR 點名期間持續背景紀錄，直到點名狀態消失或程式關閉。
- `auth.browser_assisted_login.enabled=true`：一般 provider 遇到 CAS/登入頁改版時，可手動啟用 Playwright 後備登入；TKU 預設先跑 HTTP fast SSO，必要時自動使用 Playwright 作為保底。兩者都不保存 header/body/密碼。

## R1/R2/R3 驗收

R1 是真實 THU acceptance。沒有課堂點名時，可以先記 blocked，但不能宣稱 fully ready：

```bash
python -m troTHU.tron validation checklist
python -m troTHU.tron validation local-smoke --json
python -m troTHU.tron validation local-smoke --record --json
python -m troTHU.tron validation record thu_number_live --status blocked --reason blocked_by_no_live_rollcall --note "no live rollcall available"
python -m troTHU.tron validation summary --json
```

`local-smoke --record` 只會寫入本機可證明的非 live case：preflight、time schedule、Bot fake sandbox、package/release static、安全 gate。`auth_restore`、number/radar/QR live、靜態 QR live、fan-out live 仍需要真實 THU 情境，不會被自動假造。

R1 checklist 也會列出本輪新增的非 UI 驗收面：`time_schedule_local`、`qr_static_image_live`、`doctor_probe_opt_in`、`browser_assisted_login_provider_auto`、`research_student_rollcalls_probe`。其中 doctor probe / research probe 不會在日常流程自動執行；browser-assisted login 對一般 provider 仍是 opt-in，對 TKU 則作為 fast SSO 失敗時的自動保底。若沒有真實課堂 QR 截圖或研究授權，就記錄為 blocked/skip，不要用假資料宣稱完成。

R2 是 release build：

```bash
python -m troTHU.tron release-build --dry-run --json
python -m troTHU.tron release-build --execute --json
python -m troTHU.tron release-check --dist dist --json
```

R3 是使用文件收束。本 README 是公開入口；`.codex-worklog.md` 是 Codex 自用作戰手冊，不作為使用者文件。

## 打包與 Git hygiene

本 repo 保留 source/test/docs/CI/spec/placeholder config。以下資料只留在本機，不提交：

- `build/`
- `dist/`
- `state/`
- `log/`
- `.tmp-tests/`
- `其他專案參考/`
- cookie、runtime state、真實 validation record、真實 QR payload

打包前檢查：

```bash
python -m troTHU.tron package-check --json
python -m troTHU.tron release-check --json
python -m troTHU.tron release-build --execute --json
```

`release-build --execute` 會跑 full unittest、package-check、release-check、PyInstaller、zip packaging、artifact validation，並在臨時解壓副本中 smoke `--help`、`status --json`、`package-check --json`。

## 疑難排解速查

| 症狀 | 優先檢查 | 常用命令 |
| --- | --- | --- |
| 登入失敗 | 帳密來源、SSO 表單、TLS/SSL、cookie 是否過期 | `doctor --json`、`refresh`、`validation local-smoke --json` |
| cookie 過期 | cookie cache、last login、是否需要 reauth | `status --json`、`account state --json`、`refresh` |
| QR no match | pending QR provider + rollcall id 是否一致、fan-out 是否過期、圖片解碼是否安裝 optional extra | `qr pending --json`、`qr paste --json "..."`、`qr paste --image screenshot.png --json` |
| radar 失敗 | 邊界設定、lite/beacon payload、距離回應、session expired 或 429/5xx | `doctor --json`、`app serve --open`、`logs summarize --limit 20` |
| 監控 console 沒有反應 | 主視窗只輸出事件；按任意鍵會開啟 `config.yaml`；若用了 `--no-input` 則不監聽按鍵 | 檢查 `config.yaml` 的 `now`，必要時重啟 `python -m troTHU.tron run` |
| 尚未登入訊息停住 | 程式會避免反覆刷屏；看到提示後請按任意鍵開啟 `config.yaml`，填好帳號密碼並關閉記事本 | 關閉記事本後會重新讀取設定並嘗試重新登入 |
| 帳密或學校切換問題 | 直接按任意鍵，用 `C:\Windows\System32\notepad.exe` 修改 `config.yaml`；關閉後程式會重新載入 | `python -m troTHU.tron config show`、`python -m troTHU.tron config doctor` |
| Discord signature 失敗 | public key env、timestamp/signature header、Endpoint URL 是否 HTTPS | `bot serve --adapter discord`、`bot discord-sync --dry-run --json` |
| LINE signature 失敗 | channel secret env、reverse proxy 是否保留 raw body、Webhook URL | `bot serve --adapter line`、`doctor --json` |
| PyInstaller missing | packaging extra 是否安裝、本機 Python 是否可 import PyInstaller | `python -m pip install -e .[packaging]`、`package-check --json` |
| 網路品質不穩 | 只在需要時 opt-in 跑連線 probe，預設 doctor 不打外部網路 | `doctor --probe-url https://ilearn.thu.edu.tw --probe-count 3 --json` |
| artifact unsafe | zip 內是否誤含 `config.yaml`、`state/`、`log/`、cookies、tests | `release-check --dist dist --json`、重跑 `release-build --execute --json` |

## 開發與測試

```bash
python -m py_compile troTHU/tron.py troTHU/runtime_context.py troTHU/cli_main.py
python -m unittest discover -v
python -m troTHU.tron package-check --json
python -m troTHU.tron release-build --dry-run --json
```

目前測試以本地 fake server、fake Bot adapter、fake LINE/Discord/TG sender 與 synthetic fixture 為主，不會打真 TronClass 或平台 API。

## 目前限制

- R1 真實 THU live acceptance records 尚未補齊；功能已具備，但完整宣稱仍需 live validation。
- TKU 的 `verification` ledger 尚待補齊 sanitized evidence；完整可用性仍需實際課堂環境驗收。
- native/mobile App、App-side encrypted vault、map SDK 仍不是本版本目標。
- Telegram inbound command bot 不做；目前只提供 outbound notification sink。
- number 直接讀碼已是日常能力（`number.direct_code_lookup`，預設開）：先讀 `student_rollcalls` 的 `number_code` 單發提交、讀不到再退回暴力猜碼；真實 THU live 行為仍待 R1 課堂驗收記錄。`research probe` 維持獨立的 shape-only 取證工具。

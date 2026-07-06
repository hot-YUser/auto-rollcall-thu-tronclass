# Auto-Rollcall-thu-Tronclass

**TronClass 校園系統的自動點名工具** — 登入你的學校帳號後，它會在你設定的上課時段自動盯著課程，一偵測到點名就替你完成簽到，還能自動作答進行中的線上測驗。你不用一直盯著手機，也不用手忙腳亂找點名碼。

> ⚠️ 請只在你自己有權限、且符合學校與課程規範的情況下使用。**不要把填好帳密的 `config.conf`、cookie、`state/`、`log/` 傳給任何人。**

**什麼是 TronClass？** 它是被許多大專院校採用的校園數位學習系統（LMS）。各校上架時常會自己另取名字——有的叫「iLearn」、有的叫「iClass」、有的就叫「TronClass」——但名字不同，骨子裡是同一套系統、同一組 API。所以同一套登入＋點名流程，換個網域就能套到不同學校。

**為什麼叫「thu」？** 這個專案最早只是一支為東海大學（THU）自己寫的小腳本，名字就這麼留下來了。後來一路長大，現在已支援數十所使用 TronClass 的學校（見下方〈支援學校一覽〉），標題裡的「thu」只是歷史，**不代表只有東海能用**。

---

## 這個工具能做什麼

### 🎯 自動點名簽到

- ✅ **數字點名** — **完整、成熟**。經過無數次實際課堂驗收與打磨：偵測到點名 → 自動拿到點名碼 → 自動簽到，全程零操作。
- ✅ **雷達點名** — **完整、成熟**。同樣經大量實戰驗收，偵測到就自動完成定位簽到，你不用開地圖、不用對座標。就算哪天伺服器補掉現在的捷徑，背後還有一套**自寫的全球定位演算法**能反推教室座標頂上，不會因此失效。
- ⚠️ **QR 點名** — 誠實說：**要全自動，得自備一個「能發起點名的教師帳號」**，但一般學生幾乎不可能拿到教師帳號，所以目前很尷尬。純學生端的自助解法我們**尚未發現**（坊間流傳有都市傳說級的作法，所以不寫成「不可能」，只是我方還沒找到）。完整逆向研究見文末〈QR 資料 Token 逆向研究紀錄〉。
- ✅ **自主報到** — 已支援（四種點名裡最單純的：老師開啟後偵測到就自動送出）。誠實交代：測試租戶未開通此服務，屬**契約正確＋離線測試、尚未實機驗證**，在有開通的租戶上應可直接運作。

### 🤖 自動答題（LLM，核心功能）

- ✅ 開著監控時，它會在背景偵測課程裡**進行中的測驗**並自動作答：偵測到題目 → 先把答案準備好 → **等 15 秒**（給你反悔的窗口）→ 送出。拿得到正解就拿高分，拿不到就交給 **LLM** 看題目作答。涵蓋 TronClass 全部題型，題目資訊不足時模型還能自己去讀課程教材與 PDF。詳見〈自動答題〉。

### 🛡️ 貼心的容錯保險

偵測到點名後，它**不會搶當第一個簽到的人**：會先確認這是一場真的、全班性的點名（已有一定比例同學陸續簽到）才出手，避免老師手滑誤開又馬上關掉的「假點名」也把你簽進去。預設就開著，你什麼都不用設。

### 🏫 支援數十所學校，不在清單也能用

只要在設定裡把 `school` 填成學校代號（或中文校名，如 `pu`／`靜宜大學`），就會自動登入。**你的學校不在清單裡？** 只要同樣是 TronClass 系統，把網址貼進設定，程式會開瀏覽器讓你像平常一樣登入一次，之後接手自動盯點名——不必會寫程式。完整名單見〈支援學校一覽〉。

---

## 怎麼開始用

### 我只是想用（Windows，最簡單）

1. 到 Releases，**只下載主程式這一個檔**（檔名形如 **`THU_Auto_Rollcall-vX.Y.Z-windows-x64.zip`**）。
2. **整包解壓縮**到一個固定資料夾（不要在 zip 裡直接雙擊）。
3. 進資料夾，執行 `auto-rollcall-thu-tronclass.exe`。

> 📌 **下載哪個檔？** Releases 頁面會有兩個壓縮檔：
> - ✅ **主程式（下載這個）**：`THU_Auto_Rollcall-vX.Y.Z-windows-x64.zip` — 解壓後執行裡面的 exe。
> - ➕ **附加元件（通常不用手動下載）**：`addons-vX.Y.Z-win.zip` — 只有「圖形驗證碼辨識」或「手動瀏覽器登入」會用到，程式**需要時會自動下載**。它不是程式本體、不要直接執行。
> - 🔁 **下載錯了也沒關係**：萬一你抓到附加元件包並執行了裡面的 exe，它會發現自己不是主程式，**自動幫你下載主程式、就定位、再啟動**。不管抓到哪個，最後都會自動補齊跑起來。

第一次啟動會在 exe 旁邊自動建立 `config.conf`、`config.advanced.toml`、`state/`、`log/`。程式一啟動就直接進入監控；**按任意鍵**就會用記事本打開 `config.conf` 讓你填帳號密碼，存檔關掉記事本後它會自動重新讀取。

### 我想用原始碼跑（開發者）

```bash
python -m pip install -e .
python -m troTHU.tron
```

一樣啟動即監控、按任意鍵用記事本開 `config.conf`。要放進工作排程器、不想它監聽按鍵：

```bash
python -m troTHU.tron run --no-input
```

> 啟動後它**不會清螢幕、不會跳全螢幕介面**，只會在視窗裡一行一行印出目前在做什麼（正在登入、目前時段、偵測到點名、簽到成功…），讓你一眼看出它還活著。

---

## 設定檔教學（最重要的一步）

九成的人會卡在這裡，所以講仔細一點。新版把設定拆成兩個檔，都不再使用容易改錯的 YAML：

- **基本檔 `config.conf`**：為新手設計的純文字格式，放帳密與課表。**一般使用者只要碰這一個。**
- **進階檔 `config.advanced.toml`**：標準 TOML，放時區、微調參數。沒設的會自動套用安全預設值。

`config.conf` 的容錯做得很寬鬆，**亂打空格、亂換行都盡量幫你救回來**：

- `#` 開頭的整行是註解；因為只認整行，所以密碼裡含 `#`、`:`、空格都能安心填。
- `=` 或 `:` 當分隔都行、前後空白可有可無、空行隨便加；連全形符號（`：`、`＝`、`，`、`「」`）、`[grop]` 這種錯字、甚至忘了打中括號直接寫 `account` 都認得。

### `config.conf` 範例與逐塊說明

```text
# ===== 基本設定 config.conf =====（改完存檔關閉記事本即自動套用）

# now：現在要用哪個帳號跑？填某帳號的 user，或填「class 群組名」。只有一個帳號時可留空。
#      也可以直接填學校網址 → 改用手動瀏覽器登入，免填帳密。
now =

# [save account] 你儲存的帳號，要存幾個就放幾塊（用 now 指定跑哪一個，不是同時偵測多個）
[save account]
user = s1234567
passwd = mypassword
school = THU

# [group]（選用）一人偵測、全員簽到。members 用逗號列出同組 user，再把 now 填成「class A」
[group]
class = A
school = THU
members = s1234567, s7654321

# [teacher]（選用）QR 教師輔助帳號。course 留空會自動抓第一門課
[teacher]
user = teacher_account
passwd = teacher_password
school = TRONCLASS
course =

# [llm]（選用）自動答題用的 LLM 連線設定。api_key 直接填在這最簡單
[llm]
api_key = nvapi-你的金鑰

# [operating] 上課時段：一天一塊；day 用 0=日 1=一 … 6=六；times 用逗號分隔多段
[operating]
day = 1
enable = true
times = 09:10-12:00, 13:20-17:30
```

- **`now`** — 現在要用哪個帳號。可填某帳號的學號（`now = s1234567`）、一個群組（`now = class A`），或**直接填學校網址**（`now = https://tronclass.你的學校.edu.tw` → 跳過設定檔帳號、開瀏覽器手動登入）。小撇步：整份只填了一個有效帳號時，`now` 可**留空**，程式自動用那一個。
- **`[save account]`** — 你儲存的帳號，要存幾個就複製幾塊，但**只會跑 `now` 指定的那一個**。`school` 有兩種填法：
  - **填學校代號 → 自動登入**（任一支援代號，也接受中文校名如 `school = 靜宜大學`）。少數帶圖形驗證碼的學校由本地 OCR 自動辨識。
  - **填學校網址 → 手動瀏覽器登入**（`school = https://…`，此時 `passwd` 可留空）。
- **`[group]`**（選用）— 群組功能可「一人讀碼、全員簽到並確認」。`class` 是群組名，`members` 逗號列出成員帳號。
- **`[teacher]`**（選用）— QR 教師輔助帳號。`course` 留空時自動挑第一門課。
- **`[llm]`**（選用）— 自動答題的 LLM 連線設定，只填 `api_key` 就能用，其餘留空走預設。詳見〈自動答題〉。
- **`[operating]`** — 什麼時候才需要自動盯點名。一天一塊：`day`（`0`=日…`6`=六）、`enable`（`true`/`false`）、`times`（逗號分隔多段，格式 `開始-結束`）。

### 我的學校不在清單裡？貼上網址就能用（手動瀏覽器登入）

只要你的學校也是 **TronClass 系統**，就算不在清單裡也能用——**把學校網址貼進設定，改用手動瀏覽器登入即可**。這是為那些有特殊登入頁（多重驗證、學校自己的 SSO…）而無法自動登入的學校準備的萬用後路。

**怎麼判斷能不能用？** 登入你們校園系統後，若網址列長得像 `https://tronclass.xxx.edu.tw`、`https://ilearn.xxx.edu.tw`、`https://iclass.xxx.edu.tw`，那多半就是 TronClass，可以一試。

**怎麼設定？** 把「學校代號」換成「學校首頁網址」就好：

```text
# 最簡單：直接把 now 填成學校網址（連 [save account] 都不用）
now = https://tronclass.你的學校.edu.tw
```

**接下來會發生什麼（一步一步）：**

1. **第一次會自動下載瀏覽器**（乾淨的 Chromium，約 150MB，只下載這一次，存在 `state/browser/`；打包版 exe 已內建，你不必自己裝）。過程中的百分比顯示在狀態列，不會刷一堆字。
2. **跳出一個瀏覽器視窗**，自動連到你學校的登入頁。
3. **像平常一樣登入**（需要簡訊／OTP／驗證碼也照做），登到看得到課程主頁為止。**你的密碼是輸入在瀏覽器裡的，不會、也不需要寫進設定檔。**
4. **程式自動接手**：偵測到登入成功後關掉瀏覽器、收下登入狀態，開始盯點名。狀態會被記住（cookie 快取），之後通常不必每次重登。

> 手動登入視窗有 **5 分鐘**，從容登入即可。「填代號 = 自動登入」、「填網址 = 手動登入」——所以就算是清單裡的學校，把它的網址當網址填也會切成手動登入，這是刻意保留的一條後路。

### 改完設定後、常用指令

填好帳密、存檔、關掉記事本，程式就會自動重新讀取；改了 `now` 會切換帳號或群組。

```bash
python -m troTHU.tron config show       # 看目前讀到的設定
python -m troTHU.tron config doctor     # 檢查設定有沒有問題
python -m troTHU.tron config advanced   # 用記事本打開 config.advanced.toml
```

`config.advanced.toml` 第一次啟動會**自動產生並列出所有可調項目與預設值（每項附中文說明）**，不必去猜。不確定就別動；若改壞（例如刪掉引號）它會整個回到預設值，但完全不影響 `config.conf`。

### 支援學校一覽

下表為目前內建、**填代號即可自動登入**的學校（共 38 所，依代號排序、一律平等）。此為快照，最新名單請執行 `python -m troTHU.tron provider list`；不在表內的 TronClass 學校仍可用「貼網址手動登入」。

| 代號 | 中文校名 | 代號 | 中文校名 |
|------|----------|------|----------|
| `AEUST` | 亞東科技大學 | `NSYSU` | 國立中山大學 |
| `ASIA` | 亞洲大學 | `NTOU` | 國立臺灣海洋大學 |
| `AU` | 真理大學 | `NTUB` | 國立臺北商業大學 |
| `CGUST` | 長庚科技大學 | `NTUSPECS` | 臺灣大學進修推廣學院 |
| `CITYUMO` | 澳門城市大學 | `OCU` | 僑光科技大學 |
| `CJCU` | 長榮大學 | `PU` | 靜宜大學 |
| `CTUST` | 中台科技大學 | `SCU` | 東吳大學 |
| `CUFA` | 崇右影藝科技大學 | `SHU` | 世新大學 |
| `CYUT` | 朝陽科技大學 | `STU` | 樹德科技大學 |
| `DYU` | 大葉大學 | `THU` | 東海大學 |
| `FJU` | 輔仁大學 | `TKU` | 淡江大學 |
| `HK` | 弘光科技大學 | `TRONCLASS` | TronClass 公有雲 |
| `HWU` | 醒吾科技大學 | `TTU` | 大同大學 |
| `KWNC` | 澳門鏡湖護理學院 | `USC` | 實踐大學 |
| `LHU` | 龍華科技大學 | `YPU` | 元培醫事科技大學 |
| `MKC` | 馬偕醫護管理專科學校 | `YUNTECH` | 國立雲林科技大學 |
| `MUST` | 明新科技大學 | | |
| `NANYA` | 南亞技術學院 | | |
| `NCUE` | 國立彰化師範大學 | | |
| `NCUT` | 國立勤益科技大學 | | |
| `NFU` | 國立虎尾科技大學 | | |
| `NOU` | 國立空中大學 | | |

> 所有學校設定都在 `config.advanced.toml` 的 `[provider.available.*]` 區塊，可在一處看到並修改每所學校的代號、網址、別名。改壞了想還原？把那些區塊（或整個檔）刪掉，下次啟動就自動以原廠清單重建。

---

## 自動答題（LLM）

> ⚠️ 這個功能會對**真實的成績活動**自動作答。請只在你自己的、獲授權的帳號上使用；可隨時用 `autoanswer.enabled = false` 整個關閉。

開著監控時，它會在背景偵測課程裡進行中的測驗並自動作答：

1. **偵測到題目 → 等 15 秒才送出。** 這 15 秒裡它已經先把答案準備好（取題、用 LLM 想答案），但**還沒送**——給你反悔／介入的窗口。
2. **按任意鍵 = 立即送出**已備好的答案。
3. **怎麼決定答案**：拿得到正解就直接填（例如「立即公布答案＋可重複作答」的測驗，會「先交→讀正解→再交」拿高分）；拿不到就交給 **LLM** 看題目作答。每一題都是模型自己的答案，不會亂猜硬湊；LLM 真的連不上時，寧可略過也**不送出空白**。

### 支援的題型（已逐型實機驗證）

涵蓋 TronClass 全部題型；題組會自動展開子題逐一作答，敘述段自動略過。

| 題型 | 線上測驗 exam | 即時測驗 classroom | 問卷 questionnaire |
|---|---|---|---|
| 單選 / 多選 / 是非 | ✅ | ✅ | ✅ |
| 填空 / 簡答 | ✅ | ✅ | ✅ |
| 題組 / 綜合 / 克漏字（含子題） | ✅ | （適用） | — |
| 配對 matching（精確計分） | ✅ | （適用） | — |

作業（homework）由 LLM 生成內容送出；投票（vote）與教材測驗（courseware_quiz）也已接好（教材測驗因測試租戶未開通該模組，屬契約正確、尚未實機驗證）。

### 設定 LLM（預設 NVIDIA NIM）

答題用的 LLM 預設走 **NVIDIA NIM**（[build.nvidia.com](https://build.nvidia.com/models)），你需要自行申請並填入 API Key：

1. 到 [build.nvidia.com](https://build.nvidia.com/models) 申請一支 API Key（格式類似 `nvapi-...`）。
2. **最簡單**：直接把金鑰填進 `config.conf` 的 `[llm]` 區塊 `api_key`。`config.conf` 預設不會被提交（`.gitignore`），金鑰也會從 JSON／log／status／debug 輸出中遮蔽——但它仍是機密，請勿外流或截圖分享。
3. **進階**：不想寫在檔案裡，就把 `api_key` 留空，改設環境變數（名稱由 `api_key_env` 指定，預設 `NVIDIA_API_KEY`）。有填優先用檔案，留空才回退環境變數。

兩者都沒設時，需要 LLM 的題目會自動略過、**不送出空白答案**，也不中斷監控。

`config.conf [llm]` 完整可填欄位（留空＝用預設）：

```ini
[llm]
provider = nvidia
base_url = https://integrate.api.nvidia.com/v1
model = minimaxai/minimax-m3
api_key = nvapi-你的金鑰
api_key_env = NVIDIA_API_KEY
```

行為微調在 `config.advanced.toml`：

```toml
[autoanswer]
enabled = true                 # 總開關
delay_seconds = 15             # 偵測到題目後等幾秒送出（期間先備答；按任意鍵可立即送）
resubmit_for_correct = true    # 允許「先交→讀正解→再交」（需該測驗可重複作答）
types = ["exam", "classroom_exam", "courseware_quiz", "questionnaire", "vote", "homework"]

[autoanswer.llm]
thinking_mode = "enabled"      # 常開推理（作答最穩）
enable_tools = true            # 題目資訊不足時，允許模型自己讀課程教材/附件（含 PDF）
```

> 模型互動：作答用的 LLM **常開推理**、推理文字與最終答案分離只取乾淨答案；題幹資訊不足時可自行呼叫工具到課程裡找教材／講義（**PDF 會抽成文字**）；需登入才看得到的圖片會由本工具下載後以 base64 內嵌讓模型看到。

---

## 更多功能

### 聊天機器人通知

不想一直開著視窗看？可以把點名結果丟到聊天軟體。Bot 這塊做得相當完整，三種都支援，token／密鑰一律只從環境變數讀、不會寫進 log。看得懂的人上手成本很低：

```bash
# Discord（推薦，用 HTTP Interactions，不用一直掛連線）
python -m troTHU.tron bot discord-schema --json     # 看要註冊哪些指令
python -m troTHU.tron bot serve --adapter discord    # 本機起服務

# Telegram（單向通知：程式 → 你）
python -m troTHU.tron account bind telegram <你的 CHAT_ID> default

# 想先在本機試 webhook
python -m troTHU.tron bot serve --adapter generic
```

LINE 支援 webhook 簽章驗證、回覆與推播，常用環境變數 `LINE_CHANNEL_ACCESS_TOKEN`、`LINE_CHANNEL_SECRET`。

### 其他

- **多帳號 / 群組**：一份設定管多個學號，用 `now` 一鍵切換。
- **時區排程**：`config.advanced.toml` 可設 IANA 時區（如 `Asia/Taipei`），每天多個時段。
- **環境自我檢查**：`python -m troTHU.tron doctor` 一鍵檢查環境、設定、登入來源。
- **狀態快照**：`python -m troTHU.tron status --json` 印出目前本機狀態。
- **三層日誌**：平常用不到，出問題或想研究時才開。`normal`（預設，精簡＋秘密遮蔽）／`debug`（連完整請求回應都記，秘密仍遮蔽）／`research`（原文不遮蔽＋主動探測，QR 逆向研究專用）。用 `tron run --debug`／`--research` 一次啟用，或在 `[logging] mode` 常設。日誌落在 `log/YYYY-MM-DD.jsonl`，`tron logs tail｜summarize｜export` 檢視／打包（**打包一律遮蔽，可安心分享**；research 原文只落本機、絕不進匯出包）。

---

## 發展里程碑

一路走來真的有在長大：

- **起點** — 一支只為東海（THU）寫的數字點名小腳本
- **v1.0** — 攻下雷達點名，附一套自寫的定位求解器
- **v1.1** — 發現「直接讀出點名碼」的捷徑；多帳號、群組、聊天機器人一次到位
- **v1.2** — 跨出校園，接上 TronClass 官方公有雲
- **v1.3** — 教師輔助 QR 點名、15% 防假點名保險、人性化全新設定檔
- **v1.4** — 貼上網址就能用，任何 TronClass 學校都進得來
- **v1.5** — 一口氣支援數十所學校，登入驗證碼自動辨識
- **v1.6** — 單一套登入流程通吃所有學校，新增學校免動一行程式
- **v1.7** — LLM 自動答題：測驗、問卷、作業、投票全自動
- **v1.8** — 第四種點名、日誌系統重寫＋研究模式、監控永不卡頓

### 未來方向（v2.0）

核心的點名與答題功能已趨於穩定，原則上不再大改（除非冒出強而有力的新線索）。接下來想挑戰的，是把整套東西帶到更遠的地方：試著用 **Rust 重寫**、試著用 **.NET MAUI**、把目標放在**全平台、尤其是手機端的原生 App**。這些都是給自己的挑戰題，做到哪算哪。

---

## 原理：它到底是怎麼自動簽到的？

用白話講「為什麼做得到」。本質上，TronClass 把一些**本來不該讓學生拿到的東西，透過學生自己就能呼叫的 API 漏掉了**，這個工具就是把這些漏洞自動化而已。

### 偵測到點名後，為什麼先等一下再簽

程式偵測到點名後**不會立刻送出**，而是先回查這堂課的簽到率，等到「全班到課率達 15%」才出手。這是刻意的容錯：萬一老師手滑誤開又馬上關掉，這種沒人簽的「假點名」就不會把你簽進去。不想要這道保險、希望一偵測到就簽？到 `config.advanced.toml` 把 `monitor.ignore_attendance_rate_gate` 設成 `true`（或臨時用 `run --ignore-attendance-rate-gate`）。

### 數字點名：點名碼其實藏在 API 回應裡

老師按下數字點名後會投影一組四位數字要大家輸入。問題是：**學生端有一支 API（`student_rollcalls`）會直接把正確的點名碼回給你**。所以偵測到後直接讀碼、一發送出就完成。萬一哪天那支 API 不給碼了，四位數也才 0000–9999 一萬種，直接暴力試碼（含限流冷卻，不會把伺服器打爆），所以**不會退化**。

### 雷達點名：送一個「空答案」就過了（外加自寫定位備援）

雷達點名理論上要驗證 GPS 座標在教室範圍內。但實測發現一個明確漏洞：**對點名送一個完全空的答案 `{}`（不帶座標），伺服器就直接判你「到場」。** 這招實測 100% 成功，是預設也是主力；送出後再回查一次確認才算數。

萬一哪天「空答案」被補掉，雷達也不會失效——後面接著一套自寫的定位備援：它利用一個有趣的特性——**當你送出的座標答錯時，伺服器會好心回傳「你離目標還有多遠」。** 程式把「距離」當觀測量，朝不同方位、不同距離撒出多圈探測點，收集一組資料後就能在 WGS84 地球橢球上用穩健最小平方法做**多點定位**，反推教室精確經緯度再送出。真收斂不出來，才退到最後一招——以估計點為中心一圈圈往外擴的棋盤格逐格掃描，直到命中或點名結束。整套是**純手工、零外部數學套件**（不依賴 numpy／scipy），能直接打包進單一 exe。

### 自主報到：一個空 PUT

四種裡最單純的：老師開啟後，偵測到就送出一個空的 `{}` 完成簽到，再回查確認。沒有點名碼／座標／QR。

### 自動答題：正解外洩就複製，否則交給 LLM

TronClass 有些測驗會把「正確答案」透過學生也能呼叫的複閱 API 漏給你。所以策略是：**拿得到正解就直接填**（可重複作答的測驗甚至「先交一次→讀到正解→再交一次」拿滿分）；**拿不到就交給 LLM** 看題目作答，並確保每題都有真實答案、不送空白。

### QR 點名：為什麼只能教師輔助

QR 點名的學生端 API 只接受 `data`＋`deviceId`，但**不會**把 `data` 回給學生，所以一定得從別的地方拿到那串 `data`。設定 `teacher` 後就能全自動：程式偵測到 QR 點名，先用教師帳號**預備好**一場教師端 QR 點名；輪到可送出時，讀取教師端會定時輪換的 `data`，立刻送出學生端答案並在確認窗口內反覆刷新重送，直到回查確認簽到成功，最後把教師端那場關掉。整個過程不需要你動手——但這建立在「有教師帳號」上，離真正的免教師自助簽到還有距離（見文末）。

---

## 技術細節（給開發者）

TronClass 是不少學校共用的底層校園系統，下面整理核心 API 與做法，方便其他同樣用 TronClass 的學校快速理解、自行實作。端點以 `{base}` 代表學校的 TronClass 網域；所有請求都帶登入後的 session cookie。

### 列出目前的點名

```http
GET {base}/api/radar/rollcalls?api_version=1.1.0
    → 回傳進行中的點名清單與類型（number / radar / qr / self_registration），程式據此分流
```

### 數字點名（越權讀碼 + 後備暴力）

```http
# 1) 直接讀出正確點名碼（關鍵：這支學生就能呼叫）
GET {base}/api/rollcall/{rollcall_id}/student_rollcalls   → 回應內含 number_code

# 2) 送出簽到
PUT {base}/api/rollcall/{rollcall_id}/answer_number_rollcall
    body: {"deviceId": "<隨機>", "numberCode": "0837"}
```

讀不到 `number_code` 時，對 `answer_number_rollcall` 以 `0000`–`9999` 批次併發試碼（含限流冷卻與降併發）。

### 雷達點名（空答案漏洞 + 距離反推備援）

```http
# 主力：空答案即過（伺服器漏洞）
PUT {base}/api/rollcall/{rollcall_id}/answer          body: {}
# 送出後回查 rollcall 狀態，確認 on_call_fine 才採信

# 備援：帶座標的答案；答錯時回應會夾帶「距離目標多遠」，據此做多點定位
PUT {base}/api/rollcall/{rollcall_id}/answer?api_version=1.76   body: { ...座標、device、user... }
```

備援把「距離」當觀測量、用穩健最小平方法在 WGS84 上做多點定位反推教室座標。雷達策略鏈為 `empty_answer → global_wgs84`（`config.advanced.toml` 的 `radar.strategy` 選擇）；求解器在 `troTHU/global_radar_solver.py`，零數學套件依賴的純 Python 實作。

### 自主報到（空 PUT 即簽到）

```http
PUT {base}/api/rollcall/{rollcall_id}/answer_self_registration_rollcall   body: {}
# 送出後回查 student_rollcalls 確認 on_call_fine
```

送法直接對照官方網頁前端。⚠️ 測試租戶 `www.tronclass.com.tw` 未開通此服務（老師建立時回 `400 未開啟這項服務`），故為**契約正確 + 離線測試、尚未實機驗證**。

### QR 點名（教師輔助取得 data）

```http
# 教師帳號建立 / 啟動一場 QR 點名
POST {teacher_base}/api/course/{course_id}/rollcall
POST {teacher_base}/api/rollcall/{teacher_rollcall_id}/start-rollcall

# 教師端讀取動態 QR data（學生端讀不到）
GET  {teacher_base}/api/course/{course_id}/rollcall/{teacher_rollcall_id}/qr_code   → 回應內含 data

# 學生帳號送出原本課堂的 QR 點名
PUT  {student_base}/api/rollcall/{student_rollcall_id}/answer_qr_rollcall
     body: {"data": "<teacher data>", "deviceId": "<隨機>"}

# 不論成敗都關閉教師端點名
PUT  {teacher_base}/api/rollcall/{teacher_rollcall_id}/stop_qr_rollcall
```

教師帳號登入失敗或找不到課程時，只會停用 QR 教師輔助，數字與雷達點名仍照常監控。

### 自動答題（各活動型的取題與送出）

同一套「單一入口、依活動型動態分流」：取題（GET）後由 `quiz_engine.py` 決策，送出（POST）契約逐型不同。

| 活動型 | 取題 GET | 送出 POST |
|---|---|---|
| 線上測驗 exam | `/api/exams/{id}/distribute` | `/api/exams/{id}/submissions` |
| 即時測驗 classroom_exam | `/api/classroom/{id}/distribute` | `/api/classroom/{id}/submit/{subject_id}`（逐題一次） |
| 問卷 questionnaire | `/api/questionnaire/{id}/distribute` | `/api/questionnaire/{id}/submissions` |
| 教材測驗 courseware_quiz | `/api/courseware-quiz/quiz/{id}/subjects` | `/api/courseware-quiz/quiz/{id}/submissions` |
| 投票 vote | `/api/votes/{id}` | `/api/votes/{id}/vote` |
| 作業 homework | `/api/activities/{id}` | `/api/course/activities/{id}/submissions` |

```http
# distribute 回傳 exam_paper_instance_id（送出時要帶）+ subjects（題目與選項 id）
POST {base}/api/exams/{exam_id}/submissions
     body: {"exam_paper_instance_id": <instance>, "subjects": [ <每題答案> ], "examFinished": true}

# 每題答案依題型組裝：
#   選擇 / 是非   → {"subject_id": N, "answer_option_ids": [id...]}
#   填空 / 克漏字 → {"subject_id": N, "answers": [{"sort":0,"content":"..."}...]}   （逐格）
#   簡答         → {"subject_id": N, "answer": "文字"}
#   配對         → 每個左項自己的選項區塊 + "parent_id": <容器 id>，讓伺服器逐對精確計分
#   投票         → {"votes": ["A","C"]}   （選項字母，不是 id / 文字）
# ⚠️ 填空/簡答連同原始 HTML 標記一起送（如 <p>巴黎</p>）——伺服器逐字比對，送純文字反而 0 分
```

「先交→讀正解→再交」拿高分（僅限可重複作答、`allow_retake_exam` 為真的測驗）：`GET /api/exams/{id}/submissions/{submission_id}` 的複閱回應會夾帶各題正解，程式把正解**疊加**到首次答案上（僅在該 id 確實屬於本題時）再交一次。純決策邏輯（無 I/O）在 `quiz_engine.py`＋`quiz_models.py`，可直接單元測試；LLM 客戶端在 `llm_answerer.py`（預設 NVIDIA NIM／MiniMax-M3，常開推理、工具呼叫讀教材/PDF、多模態）。

### 程式結構速覽

- `troTHU/runtime_context.py`：中央樞紐，持有全域執行狀態，把扁平函式命名空間懶載入到各模組。新增要能用 `ctx.foo` 呼叫的函式，要在這裡的 `_LEGACY_EXPORTS` 註冊。
- `troTHU/monitor_runtime.py`：預設監控主迴圈（登入 → 依排程 → 偵測 → 分派 → 去重）。
- `troTHU/number_runtime.py`、`radar_runtime.py`：兩種點名核心；雷達全球定位求解器在 `global_radar_solver.py`。
- `troTHU/qr_teacher_runtime.py`：QR 教師帳號輔助流程（獨立的教師 session）。
- `troTHU/autoanswer_runtime.py`、`answer_flow.py`、`quiz_engine.py`：自動答題子系統（偵測 → 備答 → 送出，單一入口動態分流）。
- `troTHU/providers.py`＋`schools.toml`：學校登錄表的**邏輯**與**資料**分離——程式碼裡沒有任何學校字面值，原廠清單在 `schools.toml`，首次啟動寫進 `config.advanced.toml` 後那裡就是唯一真實來源。
- `troTHU/login_flow.py`：**唯一的統一登入流程**（`run_login_flow`）。抓登入頁一次後，純依「偵測到的頁面特徵」分流——有無驗證碼、哪種驗證碼、是否首頁 SSO 探索、是否公有雲 email SPA、是否 NetIQ NAM——**絕不以學校為分支或命名**。
- `troTHU/tron_http.py`：端點驅動的 HTTP client。`auth_runtime.py`：與學校無關的登入主流程（cookie 還原、session 驗證、瀏覽器後備）。

### 新增一所學校

登入流程完全統一，新增學校成本極低。最省事的一條連開發者都不必當：**任何 TronClass 學校，使用者只要把 `school` 或 `now` 填成該校網址就能手動登入**。若想「填代號就自動登入」：

```toml
# 在 config.advanced.toml 加一個區塊即可，端點自動推導、登入方式自動判斷
[provider.available.my_school]
base_url = "https://tronclass.my-school.edu.tw"
aliases = ["我的學校"]   # 選填，讓使用者能用中文校名選校
```

其餘欄位全選填；登入網址、登入方式、圖形驗證碼一律**自動偵測**。動手前先跑 `python -m troTHU.tron login-probe --school my_school` 看流程在真實伺服器上偵測到什麼。想送 PR 永久內建，就編輯資料檔 `troTHU/schools.toml` 加一個 `[<代號>]` 區塊。只有當某校的登入「協定」是現有特徵偵測完全涵蓋不到的全新型態時，才需要動 `login_flow.py` 加一條特徵偵測（以「協定／特徵」命名，絕不以學校命名）。

### 安裝選用功能 / 測試

```bash
python -m pip install -e .[packaging]   # PyInstaller 打包
python -m pip install -e .[browser]     # Playwright（手動瀏覽器登入）
python -m pip install -e .[ocr]         # ddddocr（圖形驗證碼本地辨識）
python -m unittest discover -v          # 全離線測試（用假的 TronClass 伺服器，不碰真實學校）
```

### 目前限制

- **QR 教師輔助需要可登入且可發起點名的教師帳號**；未設定或登入失敗時 QR 就無法自動化（數字／雷達不受影響）。
- **Telegram 只做單向通知**，不接收指令。
- **非內建學校（貼網址）走手動瀏覽器登入**：要你親自在跳出的瀏覽器裡登一次（之後靠 cookie 快取通常不必重登）。盯點名與自動簽到的部分完全相同。

---

## QR 資料 Token 逆向研究紀錄（給後人的負面結果地圖）

> ⚠️ 這節是**研究筆記**，不是攻擊教學。結論先講：**我們目前（從外部）尚未發現任何偽造或憑空生出 QR `data` token 的方法**——坊間流傳有純學生端的作法（都市傳說級的說法），所以這是「**目前未解**」、**不是「不可能」**，只是原理我方尚未掌握。
> 寫下來是為了留一張「**負面結果地圖**」：把所有試過、確認走不通的路標清楚，讓後人不必再白跑同樣的坑。這是這個專案的一個心願——若有人能接手，希望不要重複踩坑。全部基於自有測試帳號＋測試課的實機驗證，**不含任何真實金鑰／token／他人資料**。

### 它長什麼樣

QR 點名送出時只送 `{data, deviceId}`，其中 `data` 是一串 **42 字元**：

```
1782800000 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   ← 後 32 位為示意打碼，非真實 token
└─前 10 位─┘ └──────────── 後 32 位 ────────────┘
  unix 秒(明碼)        32 位 16 進位雜湊
```

- **前 10 位** = unix 秒，明碼，掃到 QR 就看得到。
- **後 32 位** = 一段 16 進位雜湊（= 128 bit，剛好是 MD5 的輸出長度）。

如果這串能「自己算出來」，就能免教師、免掃碼自助簽到，所以值得弄清楚它怎麼生成。

### TL;DR 結論

- `data` 後 32 位 = 伺服器端「**固定金鑰 × 時間**」的確定性函式（性質類似 Google Authenticator 那種每 30 秒換一次的動態密碼 / TOTP）。
- 時間粒度**約 500ms 一格** → **每秒只有 2 個有效雜湊**；效期極短，約 **1–4 秒**（乾淨重測確認，非寬鬆）。
- **那把金鑰純粹在伺服器**：翻遍所有能拿到的 client、數百支 API 回應、所有硬編碼祕密、所有公開鹽——**都沒有**。
- ⇒ **我們從外部尚未找到偽造法**。能做到的作法（若傳聞為真）手上很可能**已握有那把伺服器金鑰**，來自我們碰不到的管道。

### 它是怎麼「簽」出來的（密碼學白話）

**MD5 是一台公開的「指紋機」**：丟任何文字進去吐出固定 32 位指紋，同輸入→同指紋、差一字→全變、不能倒推。問題是它公開、人人能算，所以平台的做法是**在訊息後面偷接一段只有它知道的祕密金鑰再丟進 MD5**，外人沒金鑰就算不出正確指紋——這就是「簽章」：

```
指紋 = md5( 訊息 + 祕密金鑰 )      ← 或更講究的 HMAC-MD5( 金鑰, 訊息 )
```

**這套手法在官方 App 裡白紙黑字看得到**（以下是反編譯出來的「直播錄影」API 簽章碼；`secretKey` 是程式裡寫死的祕密，實際值此處不公開）：

```js
var timestamp = Math.floor(Date.now() / 1000);
var token = hex_md5( url + "&ts=" + timestamp + secretKey );   // = md5( 訊息 + 祕密金鑰 )
```

> ℹ️ 這是「直播錄影」那支 API 的簽章，**不是 QR 的生成碼**（QR 在伺服器生成，App 只負責掃描，所以 App 裡根本沒有 QR 的金鑰）。但它證明了 **WisdomGarden 確實用 `md5(訊息+金鑰)` / HMAC-MD5 這套**。QR 的 `data` **極可能同族**（32 hex = 128 bit = MD5 長度、伺服器錯誤碼自稱 `..._hash`、實測就是「金鑰 × 時間」）——但**確切公式只在伺服器、沒親眼看到**，所以這是**推論，不是證明**。

### 試過、確認走不通的路（核心：負面結果地圖）

每一條都在自有測試帳號＋測試課上實機驗證過，全數負面：

| 角度 | 做了什麼 | 結果 |
|---|---|---|
| **keyless 暴破** | 純時間各種格式 × md5/sha 等 8 種雜湊 × 各種公開鹽 × 細到 1ms（含後續更密語料重跑，13,500 公式） | 全不中 → **確認有伺服器金鑰**，不是無金鑰的純 MD5 |
| **金鑰候選交叉測試** | 學生可讀 ~300 支 / 教師 358 支端點回應裡的每個值（最徹底那輪 3,858 個）、所有硬編碼祕密、常數字典、各種衍生變換全當金鑰試 | **全 NO MATCH** → 金鑰不在任何可讀回應裡 |
| **硬編碼祕密 × 進階演算法** | 把 App／廠商碼裡所有硬編碼祕密（LRP 簽章金鑰、TalkingData／Bmob／OneSignal 等 32-hex 常數、DB／OAuth 密碼…）整成有出處的主清單，逐一比對活 token；不只 MD5/SHA/HMAC，還加 AES-128/192/256 加密時間、AES-CMAC、keyed-BLAKE2、App 實際用的 `md5(前綴+時間+祕密)` 樣式——共 **95,859 種構造** | **全 NO MATCH** → 金鑰不在任何可達祕密裡（清單＋掃描器留存，日後新金鑰／新演算法秒級可重驗） |
| **登入下發金鑰 → 本地 HKDF 鑄造** | 盤點學生登入後拿到的全部高熵料（只有 `session` cookie、`/api/jwt`、`course_code`；fat-config 端點全 404/403），用 HKDF 對活 token 比對 **48,900 種構造** | **NO MATCH**；且邏輯不成立——token 全域確定性＋跨校 ⇒ 金鑰必全域，但學生只收到 per-session 料 |
| **client 反編譯** | 手機 App v1.17.2（2020）、現行網頁前端、廠商 40 個 GitHub repo、最舊的活站（含 2020 世代 AngularJS rollcall 模組） | 手機＝只掃描不生成、網頁＝只跟伺服器要現成的；**都 consume-only、都沒金鑰**，連 AngularJS 時代都是 |
| **舊版程式** | Wayback、各 APK 鏡像站找 2015–2018 舊版；用廠商 `orgs.json` 對 **875 個租戶**做版本普查 | 登入後 LMS 前端沒被爬存；全網最舊活實例只到 1.62，**沒有 2015–2018 古早版還活著**（都在託管雲被自動更新） |
| **簽章預言機** | 試能否叫 `qr_code` 簽一個「我指定的時間」；試登入 QR / 加課 QR / identity QR | `qr_code` 永遠只簽當下；其餘都是不同的 token 機制 |
| **即時推播 / in-band 洩漏** | socket.io 各 namespace 開 QR 期間長時間監聽；即時點名進行中、學生自己選修課時掃 `student_rollcalls`(含 `?action=qr`)／`answers`／`lite`／各 `qr`/`status` 路徑 | QR **從不推播** `data`（連教師自己 socket 都收不到）；上述路徑**都不含 token** |
| **提交層繞過** | 改時間欄、混合 token、整段壓縮 payload、結構變體、magic 雜湊（全 0 / 全 f / md5 空字串） | 驗證很嚴格，**沒有任何繞過** |
| **JWT** | 暴破 `/api/jwt` 的 HS256 密鑰、試 `alg:none` 偽造教師身分 | 密鑰沒破 + **JWT 根本不是主 API 的認證**（主 API 純靠 cookie）→ 偽造也沒用 |
| **IDOR / BOLA 圖鑑** | 拿第三方「只驗登入、不驗物件層授權」漏洞圖鑑，把 rollcall 生命週期每條線索都測遍；qr_code 對學生的各種 referer／api_version／舊路徑／大小寫變體 | 全 403/404；學生 建立/start/activate/publish/position **全部 403（有角色檢查）**；`/invites` 只是孤立錯接、非系統性 → 唯一能通的鏈是「成為老師→讀 qr_code」（本工具不走） |
| **教師端密採（Research Mode）** | 用內建教師端 `(server_time, data)` harvester 收一份遠比過去密的語料（201 樣本 / 118 unique token / 61 秒），重跑上述掃描 | 每秒 distinct-hash 直方圖 `{1:4, 2:57}` **再確認 ~500ms 桶**；全學生表面（首頁＋39 JS＋52 端點）洩漏掃描**零命中**；keyless＋key×algo 對更密語料仍 **NO MATCH** |

密碼學／洩漏／偽造／client／舊版／伺服器面／IDOR — **這些角度全數以實測收束為負面**。

### 順帶確認的兩件事（working 觀察）

1. **`data` 跨課、跨校可攜**：同一時刻的有效 `data`，拿到別課、甚至別校／別租戶送出都會被接受（實機重現——曾用官網教師帳號的 `data` 簽到東海與龍華科大的 QR 點名）→ 證明 `data` **只綁「時間 + 全域金鑰」，不綁特定課程／點名／學校**。意涵：只要有「任何一處、同一時刻的有效 `data`」就能標出席——**但純學生取不到 `data`**（`qr_code` 對學生 403、沒有洩漏、不能自建），所以這條對「沒有任何來源的學生」還是死的。屬 proxy 代簽紅線，本工具不做成可部署的代簽服務。
2. **教師可直接改狀態（免 QR）**：教師帳號可不經 QR，直接用 API 把學生標成 `on_call_fine`。這是**教師本來就有的點名能力**（不是學生端的權限提升），列出只為完整記錄替代流程。

### 想用 GPU 硬爆？先看這個數學

- 一張 RTX 5090（~220 GH/s）**半年**大約能試 **2⁶¹** 個金鑰（≈ 10 位英數 / 15 位 hex）。
- 但若金鑰是 **128 位隨機**（WisdomGarden 的風格——挖到的那把直播錄影金鑰就是 32 位隨機 hex）：要試 **2¹²⁸**，一張卡約 **5×10¹⁹ 年**（≈ 宇宙年齡的 35 億倍）→ **盲目暴力搜金鑰這條路 physically 打不動**（跟爆 AES-128 同級）。⚠️ 這只說「盲目暴力」行不通，**不代表整件事不可能**——若傳聞屬實，那顯然走的不是暴力這條。
- **唯一例外**：金鑰若其實是「人取的弱密碼 / 單字」→ 字典攻擊半天可破。但證據指向隨機。

### 還剩什麼方向（誠實評估）

QR 真正「生成」的地方在**伺服器 / 舊版的網頁教師端**。如果 2015–2018 的舊網頁 LMS 當年是在**瀏覽器裡**生成 QR，那把金鑰就會**內嵌在那個舊版 JS 裡**（這種簽章金鑰通常不輪替，至今八成還有效）。可惜那個 artifact 現在抓不到（Wayback 只存了登入前的行銷頁），而版本普查也證實沒有 2015–2018 古早活站——所以「舊 client 內嵌金鑰」**這一條路**看來渺茫。

誠實說，**從外部能做的都做盡了**；真正還有機會、卻都不在我們手上的只剩三條：

1. **握有該方法／金鑰的人給出任何片段**（一行碼、函式名、端點、或金鑰本身）——黑箱重建不出一把設計正確的 128 位金鑰；
2. **內部／內線／歷史伺服器洩漏**這種外部碰不到的後端缺口；
3. **一個還沒想到的全新攻擊面**。

> **研究起點**：這場調查源於坊間流傳的一個說法——**有人聲稱「純學生端」就能偽造或取得當下的 `data`，免教師、跨校通用、涉及密碼學、連工程師都猜不到**。我們據此把每一條密碼學／端點／client／協定的路都窮盡驗證了一遍（見上方地圖），**到目前為止，以外部可達的一切都尚未能重現**。不假裝成功、也不寫死「不可能」，把地圖留給後人。

### 附帶：其他點名來源（與 QR 金鑰無關，但記著）

深掘時發現 rollcall 的來源比想像多：除了 `number`／`radar`／`qr`，伺服器端還認得 `self_registration`（自主報到）、`roomis`、`new_capec`（第三方整合，走 `external_api_key_id`）、`middle_db`、`merged_rollcall`、`import_rollcall`。逐一查過（對照廠商前端列舉與角色×方法權限矩陣）：

- **`roomis`／`middle_db`** — 後端 DB／Kafka 同步，**沒有任何學生可打的 HTTP 端點**。
- **`new_capec`** — 第三方整合，靠機構層級的 `external_api_key_id`；學生拿不到（`/api/auth_code/get_auth_code` 對學生 403）。
- **`merged_rollcall`／`import_rollcall`** — 教師／管理者的合併與檔案匯入，非學生動作。
- **`self_registration`** — **才是**學生端能自己送的類型（唯一新增的可自動化缺口），已補上支援。

換句話說，學生端能碰的 `/api/rollcall/{id}/answer*` 端點就**恰好四個**（radar `answer`、`answer_number_rollcall`、`answer_qr_rollcall`、`answer_self_registration_rollcall`），現在四個都接了；其餘五種來源都是機器對機器／教師管理者授權，學生無路可走。

### 重建用的工具

驗證腳本都在 `scripts/_qr_*.py`（gitignored、不進版控，但可由本節描述重建）：`keyhunt` / `keysweep` / `keyhunt_teacher` / `apkkeys` / `wgkey`（金鑰交叉測試）、`keyless`（無金鑰暴破）、`quantum`（量測時間粒度）、`gencheck`（簽章預言機）、`oracle`（token 來源端點）、`socket_authz`（即時推播）、`iv`（提交層繞過）、`jwtcrack` / `jwtauth`（JWT）、`misconfig` / `keybrute_full`（全回應暴破）。另有留存的 `qr_keys_master.json`＋`_qr_keysweep2.py`，日後冒出新金鑰或新演算法即可秒級重驗。

---

## 授權與使用者規範 (AGPL-3.0)

本專案以 **GNU Affero General Public License v3.0 或更新版本** (`AGPL-3.0-or-later`) 授權。詳見 [LICENSE](LICENSE)。

### 💡 簡單科普：從 MIT 轉為 AGPLv3 代表什麼？

原專案採用的 **MIT 授權**非常寬鬆，基本上「隨你怎麼改、怎麼賣都行」。本專案延伸修改後轉為 **AGPLv3**，這是一個「**強感染性**」的開源協議：

1. **自己用（本機執行）**：只是下載下來自己在電腦上跑點名監控，**不受任何限制**，不需要公開任何東西。
2. **修改後「分發」或「提供網路服務」**：若你修改程式碼並傳給別人使用、或架設在網路上給別人用（例如架成公開的 Bot 服務、Web 服務），⚠️ **你必須無條件將修改後的完整原始碼以 AGPLv3 開源公開**，並提供下載管道。
3. **禁止私有化與改名割韭菜**：**不能**把本專案改名、隱藏原始碼後包裝成自己的收費／閉源軟體。

開源社群建立在彼此信任與尊重之上。若有自行修改、架設服務或二次分發的需求，請自覺遵守 AGPLv3，**主動附上你修改後的 GitHub 專案連結與原始碼**。大家潔身自愛，專案才能走得更遠。

---

## 致謝與來源 (Credits)

本專案 fork 自 [silvercow002/tronclass-script](https://github.com/silvercow002/tronclass-script)，並在此基礎上大幅延伸為支援數十所 TronClass 校園、含 LLM 自動答題的版本。

- Original author: [@silvercow002](https://github.com/silvercow002)
- Original project: [silvercow002/tronclass-script](https://github.com/silvercow002/tronclass-script)
- MIT License commit: [9a149d1c8470344ad3757893255bf11719782f3e](https://github.com/silvercow002/tronclass-script/commit/9a149d1c8470344ad3757893255bf11719782f3e)
- Original MIT notice: `Copyright (c) 2025 silvercow02`

Auto-Rollcall-thu-Tronclass keeps this original MIT notice and currently publishes the modified project under GNU Affero General Public License v3.0 or later (`AGPL-3.0-or-later`). The original MIT License notice is preserved at the bottom of the [LICENSE](LICENSE) file.

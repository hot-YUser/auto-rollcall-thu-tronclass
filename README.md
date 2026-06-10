# Auto-Rollcall-thu-Tronclass

**TronClass 校園點名系統的全自動點名工具｜支援東海 (THU)「iLearn」、淡江 (TKU)「iClass」、東吳 (SCU)「TronClass」**

登入學校帳號後，它會在你設定的上課時段自動盯著課程，一偵測到點名就替你完成簽到——你不用一直盯著手機，也不用手忙腳亂找點名碼。

> ⚠️ 請只在你自己有權限、且符合學校與課程規範的情況下使用。**不要把填好帳密的 `config.conf`、cookie、`state/`、`log/` 傳給任何人。**

## 致謝與來源

本專案 fork 自 [silvercow002/tronclass-script](https://github.com/silvercow002/tronclass-script)，並在此基礎上大幅延伸為支援 THU/TKU/SCU 使用情境的版本。

完整來源、原作者 MIT License notice 與本專案授權說明已併入本文件末尾的「致謝與來源 (Credits)」一節。

---

## 這個工具可以幹嘛

- ✅ **數字點名** — 完整支援。已經過無數次實際課堂驗收與打磨，是成熟、穩定的全自動完成版：偵測到點名 → 自動拿到點名碼 → 自動簽到，全程零操作。
- ✅ **雷達點名** — 完整支援。同樣經過大量實戰驗收，偵測到雷達點名後會自動完成定位簽到，不需要你開地圖、不需要對座標。就算哪天伺服器補掉了現在的捷徑，背後還有一套我自己寫的**「全球定位演算法」（WGS84 多點定位）**能反推教室座標頂上，不會因此失效。
- ⚠️ **QR Code 點名** — 預設支援手動貼上 / 剪貼簿輔助；若你另外提供一個有權限發起 QR 點名的 TronClass 教師帳號，可啟用「教師輔助」自動完成、全程零操作。

> 順帶一提，它不會「搶當第一個簽到的人」：偵測到點名後，會先確認這是一場真的、全班性的點名（已經有一定比例的同學陸續簽到）才出手，避免老師只是手滑誤開、又馬上關掉的「假點名」也把你簽進去。這是一道貼心的容錯保險，預設就開著、你什麼都不用設。

關於 QR：學生端 API 不會提供 QR 的 `data` token，所以未設定教師帳號時，程式只會提示你貼上 QR 內容或嘗試剪貼簿輔助。教師輔助模式會使用你自備的教師帳號即時發起一場 QR 點名取得 `data`，再用學生帳號送出；教師登入失敗不會影響數字 / 雷達點名。

**支援的學校：東海大學 (THU)、淡江大學 (TKU)、東吳大學 (SCU)。** 三校都走同一套登入與點名流程，數字、雷達都完整可用。

> 補充一個常見的誤會：TronClass 是一套被很多學校採用的校園系統，但**各校上架時都會自己取名**——在東海它叫「iLearn」、在淡江叫「iClass」、東吳大學和 TronClass 公有雲官網則直接叫「TronClass」。名字不一樣，骨子裡卻是同一套 API；所以同一套登入＋點名流程，只要換掉網域 and 登入方式，就能套到不同學校。

---

## 怎麼開始用

### 我只是想用（Windows，最簡單）

1. 到 Releases 下載 `THU_Auto_Rollcall-v1.4-alpha.4-windows-x64.zip`。
2. **整包解壓縮**到一個固定資料夾（不要在 zip 裡直接雙擊）。
3. 進到資料夾，執行 `auto-rollcall-thu-tronclass.exe`。

第一次啟動會在 exe 旁邊自動建立 `config.conf`、`config.advanced.toml`、`state/`、`log/` 四樣東西。程式一啟動就直接進入監控；**按任意鍵**就會用記事本打開 `config.conf` 讓你填帳號密碼，存檔關掉記事本後它會自動重新讀取設定。

### 我想用原始碼跑（開發者）

裝好相依套件就能直接跑，不用自己打包：

```bash
python -m pip install -e .
python -m troTHU.tron
```

就這樣。一樣是啟動即監控、按任意鍵用記事本開 `config.conf`。

如果你要放在工作排程器或背景服務、不希望它監聽按鍵：

```bash
python -m troTHU.tron run --no-input
```

> 啟動後它**不會清螢幕、不會跳全螢幕介面**，只會在視窗裡一行一行印出目前在做什麼（正在登入、目前時段、偵測到點名、簽到成功…），讓你一眼看出它還活著。

---

## 設定檔教學（最重要的一步）

九成的人會卡在這裡，所以講仔細一點。

### 新版格式特色（乾淨明瞭、不易出錯）

新版把設定拆成兩個檔，都不再使用容易改錯的 YAML：

- **基本檔 `config.conf`**：為新手設計的純文字格式，放帳密與課表。
- **進階檔 `config.advanced.toml`**：標準 TOML 格式，固定、嚴謹、不易出錯，放各種微調參數。

`config.conf` 的容錯做得很寬鬆，**亂打空格、亂換行都盡量幫你救回來**：

- **註解與說明**：以 `#` 開頭的行是註解，我們加上了豐富的中文說明。
- **密碼安全**：註解只認整行（第一個字是 `#`），所以密碼中含 `#`、`:`、空格等符號都可以安心填寫，不會被當成註解或被切斷。
- **超寬鬆解析**：`=` 或 `:` 當分隔都行、前後空白可有可無、空行隨便加；連全形符號（`：`、`＝`、`，`、`「」`）、`[grop]` 這種錯字、甚至忘了打中括號直接寫 `account` 都認得。
- **基本檔沒設的進階選項**會自動套用安全預設值，所以新手通常只要碰 `config.conf`。

一般使用者主要改五個區塊：`now`、`[account]`、`[group]`、`[operating]`，若要啟用 QR 教師輔助則加填 `[teacher]`。

### 基本設定 `config.conf` 範例與逐塊說明

```text
# ===== 基本設定 config.conf =====（改完存檔關閉記事本即自動套用）
# now：要用哪個帳號跑？填某帳號的 user，或填「class 群組名」。只有一個帳號可留空。
now = 

# [account] 你的帳號，要幾個就放幾塊。school 可填 THU / TKU / TRONCLASS / SCU
[account]
user = s1234567
passwd = mypassword
school = THU

# [group]（選用）一人偵測、全員簽到。members 用逗號列出同組 user，再把上面 now 填成「class A」
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

# [operating] 上課時段：一天一塊；day 用 0=日 1=一 … 6=六；times 用逗號分隔多段
[operating]
day = 1
enable = true
times = 09:10-12:00, 13:20-17:30
```

**`now`** — 現在要用哪個帳號。可以填某個帳號的學號（例如 `now = s1234567`），也可以填一個群組（例如 `now = class A`）。
> 小撇步：如果你整份 `config.conf` 只填了一個有效帳號，`now` 可以**留空**，程式會自動用那一個，不會逼你再填一次。

**`[account]`** — 你的帳號區塊，要幾個帳號就自己複製多個區塊。每個區塊包含 `user`（學號/帳號）、`passwd`（密碼）與 `school`（學校，可填 `THU` / `TKU` / `TRONCLASS`）。也接受中文別名（例如 `帳號 = s1234567`、`密碼 = mypassword`、`學校 = 東海`）。

**`[group]`** — （進階／選用）群組設定。群組功能可以「一人讀碼、全員簽到並確認 on_call_fine」。`class = A` 代表群組名稱為 A，`members` 用逗號列出該群組的成員帳號。

**`[teacher]`** — （選用）QR 教師輔助帳號。`user` / `passwd` 是教師帳密，`school` 可填 `TRONCLASS`、`THU`、`TKU`；`course` 留空時會自動挑選第一個課程。

**`[operating]`** — 上課時段，也就是「什麼時候才需要自動盯點名」。每一天用一個區塊設定：
- `day`：**`0` = 星期日、`1` = 星期一 … `6` = 星期六**。
- `enable`：`true` 代表這天啟用盯點名，`false` 代表不啟用。
- `times`：用逗號分隔多個時段，時段格式為 `開始時間-結束時間`。例如 `times = 09:10-12:00, 13:20-17:30`。

### 改完設定後

填好帳密、存檔、關掉記事本，程式就會自動重新讀取。如果你改了 `now`，它會清掉目前的登入狀態並切換到新帳號或新群組。

填密碼那關如果你不想把明碼直接寫進 `config.conf`，也可以改用環境變數、或安裝 `.[keyring]` 之後用系統金鑰圈保存（進階用法，見後面）。

### 常用設定指令

```bash
python -m troTHU.tron config show       # 看目前讀到的設定
python -m troTHU.tron config doctor      # 檢查設定有沒有問題
python -m troTHU.tron config advanced    # 用記事本打開 config.advanced.toml
```

`config.advanced.toml` 採用標準 **TOML** 格式，放時區、number/radar 細部調整、Bot 設定等。它會在第一次啟動時**自動產生，並列出所有可調整的項目與其預設值（每項都附中文說明）**，所以你不必去猜有哪些選項可以改——打開檔案照著改就好。不確定就別動；若不小心改壞（例如刪掉引號），這份進階設定會整個回到預設值，但完全不影響 `config.conf`。例如：

```toml
# 時區設定
[time]
timezone = "Asia/Taipei"

# 監控行為
[monitor]
# true = 一偵測到點名就立刻簽到，跳過「全班到課率達 15%」的保險
ignore_attendance_rate_gate = false

# 雷達點名參數
[radar]
# 雷達策略：empty_answer（空答案優先）或 global_wgs84（全球定位求解）
strategy = "empty_answer"

[radar.global]
max_queries = 120
standard_radii_meters = [10000.0, 3000.0, 1000.0, 300.0, 100.0]
```

---

## 聊天機器人通知（選用，但很好用）

不想一直開著視窗看？可以把點名結果丟到聊天軟體。Bot 這塊目前做得相當完整，三種都支援，token/密鑰一律只從環境變數讀，不會寫進 log。

### Discord（推薦）

推薦用 **HTTP Interactions**（不用一直掛著連線，部署最省事）：

```bash
python -m troTHU.tron bot discord-schema --json      # 看要註冊哪些指令
python -m troTHU.tron bot discord-sync --dry-run --json
python -m troTHU.tron bot serve --adapter discord    # 本機起服務
```

也保留了選用的 Gateway 模式，但不是預設推薦的部署方式。

### LINE

支援 webhook 簽章驗證、回覆與推播通知。常用環境變數：

```text
LINE_CHANNEL_ACCESS_TOKEN
LINE_CHANNEL_SECRET
```

### Telegram

目前是**單向通知**（程式 → 你），把結果推給你看；不提供從 Telegram 反向下指令。綁定方式：

```bash
python -m troTHU.tron account bind telegram <你的 TELEGRAM_CHAT_ID> default
```

### 想先在本機試 webhook？

```bash
python -m troTHU.tron bot serve --adapter generic
```

送個最簡單的測試請求：

```json
{"source_user_id":"user-id","channel_id":"local","text":"status"}
```

---

## 其他功能

- **多帳號 / 群組**：一份設定管多個學號，用 `now` 一鍵切換（見上面 config 教學）。
- **時區排程**：`config.advanced.toml` 裡可設 IANA 時區（如 `Asia/Taipei`），每天可有多個時段。
- **本機唯讀面板**：`python -m troTHU.tron app serve --open` 會在 localhost 開一個唯讀的小面板，只能「看」狀態（不會送點名、不會匯入 cookie、不會改帳號）。
- **環境自我檢查**：`python -m troTHU.tron doctor` 一鍵檢查環境、設定、登入來源是否正常。
- **狀態快照**：`python -m troTHU.tron status --json` 印出目前本機狀態。

---

## 原理：它到底是怎麼自動簽到的？

這段用白話講「為什麼做得到」。本質上，TronClass 這套系統把一些**本來不該讓學生拿到的東西，透過學生自己就能呼叫的 API 漏掉了**，這個工具就是把這些漏洞自動化而已。

### 偵測到點名後，為什麼先等一下再簽

預設情況下，程式偵測到點名後**不會立刻送出**，而是先回查這堂課的簽到率，等到「全班到課率達 15%」（已經有 15% 的同學簽到）才出手。這是一道刻意設計的容錯保險：萬一老師只是手滑誤開、開了又馬上關掉，這種根本沒人簽的「假點名」就不會把你簽進去；等到班上開始有人陸續簽到、確認是真的在點名了，程式才動作。數字 / 雷達 / QR 三種都適用（QR 會在等待期間先用教師帳號把點名預備好，門檻一過立刻送出）。

如果你不想要這道保險、希望一偵測到就立刻簽到，到 `config.advanced.toml` 把 `monitor.ignore_attendance_rate_gate` 設成 `true` 即可（開發 / 排程場景也可以用 `python -m troTHU.tron run --ignore-attendance-rate-gate` 臨時關閉這一輪）。

### 數字點名：點名碼其實藏在 API 回應裡

老師按下數字點名後，會在螢幕投影一組四位數字要大家輸入。問題是：**學生端有一支 API（`student_rollcalls`）會直接把這組正確的點名碼回給你**。所以這個工具偵測到數字點名後，直接去讀那組碼、一發送出就完成——正常情況下一次點名只要極少的請求。

萬一哪天那支 API 不給碼了，還有後備方案：四位數字也才 0000–9999 一萬種，直接暴力試碼（有限流冷卻、不會把伺服器打爆），所以**不會退化、依然會成功**。

### 雷達點名：送一個「空答案」就過了

雷達點名理論上要驗證你的 GPS 座標在教室範圍內。但實測發現一個明確的伺服器漏洞：**對點名送出一個完全空的答案 `{}`（不帶任何座標），伺服器就直接把你判定為「到場」。** 這招實測 100% 成功，所以是預設、也是主力做法——送出後再回查一次確認真的簽到成功才算數。

### 雷達備援：自己寫的全球定位演算法

萬一哪天「空答案」這個捷徑被伺服器補掉，雷達點名也不會就此失效——後面還接著一套我自己刻的定位備援，這也是這個專案裡花最多心思的一塊：

它利用一個有趣的特性：**當你送出的座標答錯時，伺服器會好心地回傳「你離目標還有多遠」。** 程式把這個「距離」當成觀測量，朝不同方位、不同距離撒出多圈探測點，收集到一組「在這個點距離教室約 N 公尺」的資料後，就能在 WGS84 地球橢球座標系上用最小平方法做**多點定位（multilateration，多邊測距定位）**，反推出教室的精確經緯度，再把那個座標送出去簽到。求解用的是抗離群值的穩健最小平方搭配 pattern-search 迭代收斂；真的還收斂不出來，才退到最後一招——以估計點為中心、一圈一圈無限往外擴的棋盤格逐格掃描，直到命中或點名結束。

特別說明：這整套定位是**純手工打造、零外部數學套件**（不依賴 numpy / scipy），所以能直接打包進單一個 exe 裡跑。它平常幾乎輪不到出場（空答案就解決了），但它是貨真價實、能獨立運作的定位引擎，不是擺著好看的。

### QR 點名：手動內容或教師帳號輔助

QR 點名的學生端 API 只接受 `data` + `deviceId`，但**不會**把 `data` 回給學生，所以一定得從別的地方拿到那串 `data`。

未設定教師帳號時，程式保留三條手動路徑：直接貼上 QR 內容、用本機掃描器、或從剪貼簿自動帶入送出（要從圖片解碼 QR 需另裝 `qr-image` 套件）。

設定 `teacher` 後就能全自動：程式一偵測到 QR 點名，會先用教師帳號**預備好**一場教師端 QR 點名（趁等待簽到率門檻的同時就先備著）；輪到可以送出時，讀取教師端 `qr_code` API 那串**會定時輪換（約每 15 秒）**的 `data`，立刻送出學生端 QR answer，並在確認窗口內反覆刷新、重送，直到回查 `student_rollcalls` 確認自己已 `on_call_fine`（簽到成功），最後把教師端那場點名關掉。整個過程不需要你動手。

---

## 技術細節（給想複製到其他學校的開發者）

TronClass 是不少學校共用的底層校園系統（各校自行命名上架：東海＝iLearn、淡江＝iClass、公有雲＝TronClass…），下面整理核心 API 與做法，方便其他同樣用 TronClass 的學校快速理解、自行實作。除了 THU / TKU，這套 runtime 也能套用在 **TronClass 公有雲官網**以及其他基於 TronClass 的學校（換掉 base URL 與登入流程即可）。

> 端點以 `{base}` 代表學校的 TronClass 網域（東海 `https://ilearn.thu.edu.tw`、淡江 `https://iclass.tku.edu.tw`…）。所有請求都帶登入後的 session cookie。

### 列出目前的點名

```http
GET {base}/api/radar/rollcalls?api_version=1.1.0
```

回傳目前進行中的點名清單與類型（number / radar / qr），程式據此分流處理。

### 數字點名（越權讀碼 + 後備暴力）

```http
# 1) 直接讀出正確點名碼（關鍵：這支學生就能呼叫）
GET {base}/api/rollcall/{rollcall_id}/student_rollcalls
    → 回應內含 number_code 欄位

# 2) 送出簽到
PUT {base}/api/rollcall/{rollcall_id}/answer_number_rollcall
    body: {"deviceId": "<隨機>", "numberCode": "0837"}
```

讀不到 `number_code` 時，就對 `answer_number_rollcall` 以 `0000`–`9999` 批次併發試碼（含限流冷卻與降併發）。

### 雷達點名（空答案漏洞 + 距離反推備援）

```http
# 主力：空答案即過（伺服器漏洞）
PUT {base}/api/rollcall/{rollcall_id}/answer
    body: {}
# 送出後回查 rollcall 狀態，確認為 on_call_fine（已簽到）才採信。

# 備援：帶座標的答案；答錯時回應會夾帶「距離目標多遠」
PUT {base}/api/rollcall/{rollcall_id}/answer?api_version=1.76
    body: { ...座標、device、user 等... }
GET {base}/api/rollcall/{rollcall_id}/lite   # 取得 beacon / 訊號等附帶資訊
```

備援解法把「距離」當觀測量，用穩健最小平方法在 WGS84 上做多點定位反推教室座標，再不行則以無限棋盤格逐格覆蓋。雷達策略鏈為 **`empty_answer → global_wgs84`**（由 `config.advanced.toml` 的 `radar.strategy` 選擇，預設 `empty_answer`）；全球定位求解器在 `troTHU/global_radar_solver.py`，是零數學套件依賴的純 Python 實作。

### QR 點名（教師輔助取得 data）

```http
# 教師帳號建立 / 啟動一場 QR 點名
POST {teacher_base}/api/course/{course_id}/rollcall
POST {teacher_base}/api/rollcall/{teacher_rollcall_id}/start-rollcall

# 教師端讀取動態 QR data
GET {teacher_base}/api/course/{course_id}/rollcall/{teacher_rollcall_id}/qr_code
    → 回應內含 data

# 學生帳號送出原本課堂的 QR 點名
PUT {student_base}/api/rollcall/{student_rollcall_id}/answer_qr_rollcall
    body: {"data": "<teacher data>", "deviceId": "<隨機>"}

# 不論成功失敗都關閉教師端點名
PUT {teacher_base}/api/rollcall/{teacher_rollcall_id}/stop_qr_rollcall
```

送出後會再讀學生端 `student_rollcalls` / `answers` 確認狀態。教師帳號登入失敗或找不到課程時，只會停用 QR 教師輔助，數字與雷達點名仍照常監控。

### 程式結構速覽

- `troTHU/runtime_context.py`：中央樞紐，持有全域執行狀態，並把扁平的函式命名空間懶載入到各模組。新增要能用 `ctx.foo` 呼叫的函式時，要在這裡的 `_LEGACY_EXPORTS` 註冊。
- `troTHU/monitor_runtime.py`：預設的監控主迴圈（登入 → 依排程 → 偵測點名 → 分流）。
- `troTHU/number_runtime.py`、`troTHU/radar_runtime.py`：兩種點名的實作核心（上面的 API 就在這裡）；雷達的全球定位求解器另放在 `troTHU/global_radar_solver.py`（純 Python WGS84 多點定位）。
- `troTHU/qr_runtime.py`、`troTHU/qr_teacher_runtime.py`：QR 手動 / 剪貼簿送出與教師帳號輔助流程。
- `troTHU/providers.py`：支援的學校登錄表（base URL、登入流程、能力旗標），加新學校從這裡開始。
- `troTHU/tron_http.py`：端點驅動的 HTTP client 與登入流程（THU CAS / TKU SSO / 公有雲 email 登入）。

### 安裝選用功能（原始碼）

```bash
python -m pip install -e .[packaging]   # PyInstaller 打包
python -m pip install -e .[browser]     # Playwright（登入頁改版時的後備登入）
python -m pip install -e .[keyring]     # 用系統金鑰圈存帳密
```

---

## 開發與測試

測試全部離線執行（用假的 TronClass 伺服器模擬），不會碰到任何真實學校：

```bash
python -m py_compile troTHU/tron.py troTHU/runtime_context.py troTHU/cli_main.py
python -m unittest discover -v
python -m troTHU.tron release-build --dry-run --json
```

---

## 目前限制

- **QR 教師輔助需要可登入且可發起點名的教師帳號**；未設定或登入失敗時，只保留手動貼上 / 剪貼簿輔助。
- **Telegram 只做單向通知**，不接收指令。
- 預設的 Windows zip 是精簡包，不內建 Playwright、keyring、QR 影像解碼等選用功能；需要的話請用原始碼安裝對應 extras。

---

## 授權與使用者規範 (AGPL-3.0)

本專案以 **GNU Affero General Public License v3.0 或更新版本** (`AGPL-3.0-or-later`) 授權。詳見 [LICENSE](LICENSE)，原始基礎架構來源與原 MIT 授權聲明已併入本文件末尾的「致謝與來源 (Credits)」一節。

### 💡 簡單科普：從 MIT 轉為 AGPLv3 代表什麼？

原專案採用的 **MIT 授權**非常寬鬆，基本上是「隨你怎麼改、怎麼賣都行」。而本專案延伸修改後，正式轉為 **AGPLv3 授權**，這是一個**「強感染性」的開源協議**：

1. **自己用（本機執行）**：如果你只是下載本專案，自己在電腦上執行點名監控，**不受任何限制**，你不需要公開任何東西。
2. **修改後「分發」或「提供網路服務」**：如果你修改了本專案的程式碼，並將其：
   - **傳給別人使用**（分發修改版執行檔或原始碼）
   - **架設在網路上給別人用**（例如：架設成公開/私人的 Telegram 點名機器人服務、Web 網頁端服務等）
   - ⚠️ **你必須無條件將你修改後的完整原始碼，以 AGPLv3 協議開源公開**，並提供管道讓使用者下載。
3. **禁止私有化與改名割韭菜**：你**不能**將本專案改改名稱、隱藏原始碼後，包裝成自己的收費軟體或閉源工具提供給他人。

### 🤝 請大家潔身自愛、遵守規範

開源社群的發展建立在彼此信任與尊重之上。請勿將此工具用於任何商業牟利、包裝販售之行為。若有自行修改、架設機器人服務或二次分發的需求，請務必自覺遵守 AGPLv3 條款，**主動附上您修改後的 GitHub 專案連結與原始碼**。大家潔身自愛，專案才能走得更遠。

---

# 致謝與來源 (Credits)

## Original Project

This project is a fork of [silvercow002/tronclass-script](https://github.com/silvercow002/tronclass-script).

- Original author: [@silvercow002](https://github.com/silvercow002)
- Original project: [silvercow002/tronclass-script](https://github.com/silvercow002/tronclass-script)
- MIT License commit: [9a149d1c8470344ad3757893255bf11719782f3e](https://github.com/silvercow002/tronclass-script/commit/9a149d1c8470344ad3757893255bf11719782f3e)
- Original MIT notice: `Copyright (c) 2025 silvercow02`

Auto-Rollcall-thu-Tronclass keeps this original MIT notice and currently publishes the modified project under GNU Affero General Public License v3.0 or later (`AGPL-3.0-or-later`). The original MIT License notice is preserved at the bottom of the [LICENSE](LICENSE) file.


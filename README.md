# Auto-Rollcall-thu-Tronclass

**TronClass 校園點名系統的全自動點名工具｜支援全台、港澳數十所採用 TronClass 系統的大專校院（所有學校一律平等、共用同一套流程）**

登入學校帳號後，它會在你設定的上課時段自動盯著課程，一偵測到點名就替你完成簽到——你不用一直盯著手機，也不用手忙腳亂找點名碼。

> ⚠️ 請只在你自己有權限、且符合學校與課程規範的情況下使用。**不要把填好帳密的 `config.conf`、cookie、`state/`、`log/` 傳給任何人。**

## 致謝與來源

本專案 fork 自 [silvercow002/tronclass-script](https://github.com/silvercow002/tronclass-script)，並在此基礎上大幅延伸為支援數十所 TronClass 校園的全自動點名版本。

完整來源、原作者 MIT License notice 與本專案授權說明已併入本文件末尾的「致謝與來源 (Credits)」一節。

---

## 這個工具可以幹嘛

- ✅ **數字點名** — 完整支援。已經過無數次實際課堂驗收與打磨，是成熟、穩定的全自動完成版：偵測到點名 → 自動拿到點名碼 → 自動簽到，全程零操作。
- ✅ **雷達點名** — 完整支援。同樣經過大量實戰驗收，偵測到雷達點名後會自動完成定位簽到，不需要你開地圖、不需要對座標。就算哪天伺服器補掉了現在的捷徑，背後還有一套我自己寫的**「全球定位演算法」（WGS84 多點定位）**能反推教室座標頂上，不會因此失效。
- ⚠️ **QR Code 點名** — 預設支援手動貼上 / 剪貼簿輔助；若你另外提供一個有權限發起 QR 點名的 TronClass 教師帳號，可啟用「教師輔助」自動完成、全程零操作。

順帶一提，它不會「搶當第一個簽到的人」：偵測到點名後，會先確認這是一場真的、全班性的點名（已經有一定比例的同學陸續簽到）才出手，避免老師只是手滑誤開、又馬上關掉的「假點名」也把你簽進去。這是一道貼心的容錯保險，預設就開著、你什麼都不用設。

關於 QR：學生端 API 不會提供 QR 的 `data` token，所以未設定教師帳號時，程式只會提示你貼上 QR 內容或嘗試剪貼簿輔助。教師輔助模式會使用你自備的教師帳號即時發起一場 QR 點名取得 `data`，再用學生帳號送出；教師登入失敗不會影響數字 / 雷達點名。

**本工具支援數十所採用 TronClass 系統的學校，所有學校一律平等、共用同一套登入與點名流程，沒有任何一所享有特化待遇。** 只要在 `config.conf` 把 `school` 填成學校代號（或中文校名，如 `pu`／`靜宜大學`、`ntou`／`海洋大學`）就會自動登入，數字、雷達點名完整可用。完整名單見下方〈支援學校一覽〉，或隨時執行 `python -m troTHU.tron provider list` 查詢最新清單。

TronClass 是一套被許多學校採用的校園系統，**各校上架時會自取名稱**——有的叫「iLearn」、有的叫「iClass」、有的直接叫「TronClass」。名字不同，骨子裡卻是同一套 API；所以同一套登入＋點名流程，只要換掉網域與登入方式，就能套到不同學校。

少數學校的登入頁帶有圖形驗證碼，程式會用本地離線 OCR 自動辨識。為了讓主程式保持輕量，**打包版（exe）會在首次用到時才自動下載 OCR 附加元件**（辨識引擎＋模型，與瀏覽器登入用的驅動打包成同一個下載檔，只下載一次）；原始碼安裝請加裝 `pip install -e .[ocr]`。辨識不到時自動退回「手動瀏覽器登入」一次後沿用 cookie，其餘點名功能完全相同。

**你的學校不在清單裡？也能用——把網址貼進設定就行。** 只要同樣是 TronClass 系統（網址長得像 `https://tronclass.你的學校.edu.tw`，或 `https://ilearn.…`、`https://iclass.…`），把網址填進設定，程式就會開一個瀏覽器視窗、讓你像平常一樣手動登入，成功後接手自動盯點名。**不必把密碼寫進設定檔**，也不必會寫程式。詳見下面〈設定檔教學〉的「我的學校不在清單裡？」一節。

### 支援學校一覽

下表為目前內建、**填代號即可自動登入**的學校（共 38 所，依代號排序、一律平等）。此為發布當下的快照，最新名單請執行 `python -m troTHU.tron provider list`；不在表內的 TronClass 學校仍可用「貼網址手動登入」。

> 🆕 **v1.6-alpha.3 起，所有學校設定都搬進了進階設定檔**：第一次啟動時，這 38 所學校會全部寫進 `config.advanced.toml` 的 `[provider.available.*]` 區塊，**你可以在那一處一次看到、隨時修改每一所學校的代號、網址（`base_url`）與別名（`aliases`）**，程式碼裡不再寫死任何學校。改壞了或想還原？把這些區塊（或整個檔）刪掉，下次啟動就會自動以原廠清單重建。

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

---

## 怎麼開始用

### 我只是想用（Windows，最簡單）

1. 到 Releases，**只下載主程式這一個檔**：**`THU_Auto_Rollcall-v1.6-beta.2-windows-x64.zip`**。
2. **整包解壓縮**到一個固定資料夾（不要在 zip 裡直接雙擊）。
3. 進到資料夾，執行 `auto-rollcall-thu-tronclass.exe`。

> 📌 **下載哪個檔？** Releases 頁面會有兩個壓縮檔，請認清：
> - ✅ **主程式（要下載這個）**：`THU_Auto_Rollcall-v1.6-beta.2-windows-x64.zip` —— 解壓後執行裡面的 exe。
> - ➕ **附加元件（通常不用手動下載）**：`addons-v1.6b2-win.zip` —— 只有「圖形驗證碼辨識」或「手動瀏覽器登入」會用到，程式**需要時會自動下載**。**它不是程式本體、不要直接執行**；只有在自動下載失敗（如網路受限）時，才手動下載它、放到 exe 旁邊或 `state\addons\` 即可（程式會自動採用，不再重抓）。
> - 🔁 **下載錯了也沒關係（v1.6-alpha.3 起）**：萬一你下載到的是「附加元件」並直接執行了裡面的 `ocr-sidecar.exe`，它會發現自己不是主程式，**自動幫你下載主程式、把附加元件就定位、再啟動主程式**。所以不管你抓到大包還是小包，最後都會自動補齊、跑起來。

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

一般使用者主要改五個區塊：`now`、`[save account]`、`[group]`、`[operating]`，若要啟用 QR 教師輔助則加填 `[teacher]`。（舊版的 `[account]` 仍可解析，不必急著改名。）

### 基本設定 `config.conf` 範例與逐塊說明

```text
# ===== 基本設定 config.conf =====（改完存檔關閉記事本即自動套用）
# now：要用哪個帳號跑？填某帳號的 user，或填「class 群組名」。只有一個帳號可留空。
#       也可以直接填學校網址（如 https://tronclass.你的學校.edu.tw）→ 改用手動瀏覽器登入，免填帳密。
now = 

# [save account] 你儲存的帳號，要存幾個就放幾塊（用 now 指定跑哪一個，不是同時偵測多個）。
#   school 填學校代號就自動登入（完整代號見〈支援學校一覽〉或 provider list 指令）。
#   school 也可以填學校「網址」→ 改用手動瀏覽器登入，passwd 可留空（你會在跳出的瀏覽器裡自己登）。
[save account]
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

**`now`** — 現在要用哪個帳號。可以填某個帳號的學號（例如 `now = s1234567`），也可以填一個群組（例如 `now = class A`）。**也可以直接填一個學校網址**（例如 `now = https://tronclass.你的學校.edu.tw`）——這時程式會跳過設定檔裡的帳號，直接開瀏覽器讓你手動登入那個網站（見下面「我的學校不在清單裡？」一節）。小撇步：如果你整份 `config.conf` 只填了一個有效帳號，`now` 可以**留空**，程式會自動用那一個，不會逼你再填一次。

**`[save account]`** — 你儲存的帳號區塊，要存幾個就自己複製多塊；實際只會跑 `now` 指定的那一個，**多塊並不會同時偵測多個帳號**。每個區塊包含 `user`（學號/帳號）、`passwd`（密碼）與 `school`（學校）。`school` 有兩種填法：
- **填學校代號 → 自動登入**：任一支援代號（完整名單見〈支援學校一覽〉，或執行 `python -m troTHU.tron provider list`）。這時程式用你填的 `user` + `passwd` 自動登入，全程零操作。也接受中文校名（例如 `帳號 = s1234567`、`密碼 = mypassword`、`學校 = 靜宜大學`）。少數登入頁帶圖形驗證碼的學校由本地 OCR 自動辨識（打包版首次用到時自動下載附加元件；原始碼安裝用 `pip install -e .[ocr]`）。
- **填學校網址 → 手動瀏覽器登入**：`school = https://tronclass.你的學校.edu.tw`。這時 `passwd` 可以留空，程式會開一個瀏覽器視窗讓你自己登（見下一節）。

**`[group]`** — （進階／選用）群組設定。群組功能可以「一人讀碼、全員簽到並確認 on_call_fine」。`class = A` 代表群組名稱為 A，`members` 用逗號列出該群組的成員帳號。

**`[teacher]`** — （選用）QR 教師輔助帳號。`user` / `passwd` 是教師帳密，`school` 填任一支援代號；`course` 留空時會自動挑選第一個課程。

**`[operating]`** — 上課時段，也就是「什麼時候才需要自動盯點名」。每一天用一個區塊設定：
- `day`：**`0` = 星期日、`1` = 星期一 … `6` = 星期六**。
- `enable`：`true` 代表這天啟用盯點名，`false` 代表不啟用。
- `times`：用逗號分隔多個時段，時段格式為 `開始時間-結束時間`。例如 `times = 09:10-12:00, 13:20-17:30`。

### 我的學校不在清單裡？貼上網址就能用（手動瀏覽器登入）

內建清單裡的學校填代號就能自動登入（見〈支援學校一覽〉）。但只要你的學校也是 **TronClass 系統**，就算它不在清單裡，你一樣可以用——**把學校網址貼進設定，改用「手動瀏覽器登入」即可**。這是為了那些有特殊登入頁（多重驗證、學校自己的 SSO、圖形驗證碼…）而無法自動登入的學校準備的萬用後路：自動登不進去的，就讓你自己在瀏覽器裡登一次。

**怎麼判斷我的學校能不能用？** 用學校帳號登入你們的校園系統，如果登入後網址列長得像 `https://tronclass.xxx.edu.tw`、`https://ilearn.xxx.edu.tw`、`https://iclass.xxx.edu.tw` 這類，那多半就是 TronClass，可以一試。

**怎麼設定？** 兩種寫法擇一，把「學校代號」換成「學校網址」就好：

```text
# 寫法 A：直接把 now 填成學校網址（最簡單，連 [save account] 都不用）
now = https://tronclass.你的學校.edu.tw
```

```text
# 寫法 B：在 [save account] 裡把 school 填成網址，passwd 留空
now =
[save account]
user =
passwd =
school = https://tronclass.你的學校.edu.tw
```

把網址換成你學校系統的「首頁網址」就好（開頭的 `https://` 與網域那段，例如 `https://tronclass.你的學校.edu.tw`）；後面那串路徑（像 `/user/index`）填不填都沒關係，程式會自動處理。

**接下來會發生什麼事（一步一步）：**

1. **第一次使用會自動下載瀏覽器。** 手動登入需要一個乾淨的 Chromium 瀏覽器，程式會在你第一次用到時自動下載（約 150MB，只下載這一次，存在程式旁邊的 `state/browser/`）。下載開始與完成各會印一行訊息，過程中的百分比會顯示在狀態列，不會刷一堆字。打包版 exe 已內建相關元件，你不必自己裝任何東西。
2. **跳出一個瀏覽器視窗。** 程式會印出「已開啟手動登入瀏覽器，請在瀏覽器視窗中完成登入…」，並開啟一個 Chrome 視窗、自動連到你學校的登入頁。
3. **像平常一樣登入。** 在那個視窗裡輸入你的帳號密碼（需要簡訊 / OTP / 圖形驗證碼也照做），登到能看到課程主頁為止。**你的密碼是輸入在瀏覽器裡的，不會、也不需要寫進設定檔。**
4. **程式自動接手。** 它偵測到你登入成功後，會自動把瀏覽器關掉、收下登入狀態，接著就跟自動登入一樣開始盯點名了。登入成功的狀態會被記住（cookie 快取），之後再開通常不必每次都重登。

小提醒：手動登入視窗有 **5 分鐘**的時間，從容登入即可；逾時或你自己把視窗關掉，程式會視為這次沒登成、稍後再試。如果開了視窗卻一直沒反應，確認你最後有真的登進「課程主頁」（有些學校登入後會先停在公告頁，往課程頁再點一下即可）。

「填代號」和「填網址」差在哪？**填代號 = 走自動登入**（程式幫你打帳密）；**填網址 = 一律走手動登入**（你自己在瀏覽器登）。所以就算是內建清單裡的學校，只要你把它的網址當成網址填進去，也會切成手動登入——這是刻意的，方便自動登入偶爾卡關時，隨時有手動這條路可走。

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

## 自動答題（LLM 整合，v1.7 新功能，**預設開啟**）

> ⚠️ **這個功能會對「真實的成績活動」自動作答。** 請只在你自己的、獲授權的帳號上使用，並理解其用途與後果。可隨時用 `autoanswer.enabled = false` 整個關閉。

開啟監控後，工具會在背景偵測課程裡**進行中的測驗**並自動作答：

1. **偵測到題目 → 等 15 秒才送出。** 這 15 秒裡它已經先把答案準備好（取題、用 LLM 想答案），但**還沒送**——給你一個反悔/介入的窗口。
2. **按任意鍵 = 立即送出**已備好的答案（不想等 15 秒時用）。
3. **怎麼決定答案**：拿得到正解就直接填（例如設定「立即公布答案＋可重複作答」的測驗，會「先交一次→讀到正解→再交一次」拿高分）；拿不到正解就交給 **LLM** 看題目作答。

> **最嚴格參數下的行為（已實機驗證）**：對一份「正式考試＋作答次數只有 1 次＋不公布試題與答案＋防作弊＋禁用開發者工具」的線上測驗，
> 腳本會：偵測到無法取得正解 → 改用 LLM 作答（實測答對）→ **只送出一次** → 「先交→讀正解→再交」的重交流程**不會觸發**（單次測驗的
> `allow_retake_exam` 為否），不會浪費掉唯一的作答機會；第二次嘗試會被伺服器以「作答次數已滿」擋下。瀏覽器端的防作弊／禁用開發者工具／
> 全螢幕／禁止複製貼上對本工具完全無效——它走 API 作答，不經瀏覽器。題目／選項隨機排序也不影響（讀取的是實際派發的題目與選項 id）。

### 支援的題型（已逐型實機驗證）

涵蓋 TronClass 全部題型；題組（media/analysis/cloze）會自動展開子題逐一作答，敘述段（paragraph_desc）自動略過：

| 題型 | exam 線上測驗 | classroom 即時測驗 | questionnaire 問卷 |
|---|---|---|---|
| 單選 single_selection | ✅ | ✅ | ✅ |
| 多選 multiple_selection | ✅ | ✅ | ✅ |
| 是非 true_or_false | ✅ | ✅ | （適用） |
| 填空 fill_in_blank | ✅ | ✅ | （適用） |
| 簡答 short_answer | ✅ | ✅ | ✅ |
| 題組 media（含子題） | ✅ | （適用） | — |
| 綜合 analysis（含子題） | ✅ | （適用） | — |
| 克漏字 cloze（下拉子題） | ✅ | （適用） | — |
| 配對 matching | ✅＊ | （適用） | — |
| 敘述段 paragraph_desc | ✅（自動略過） | ✅ | ✅ |

✅ = 已實機驗證（真實出題→真實 LLM 作答→送出成功；選擇題另確認內容正解）。
homework（作業）為單一自由作答，由 LLM 生成內容後送出（已驗證）。
＊matching（v1.7-alpha.2 已升級為精確計分）：TronClass 把每個（左項×右選項）配對存成**獨立 id**，
子題回傳時選項為空、右選項全掛在容器上。腳本依 id 順序把容器選項切成每個左項**自己的區塊**，
連同 `parent_id`（容器 id）一起送出，讓伺服器精確配對計分；實測每對正確即滿分（10/10）。

### 設定 LLM（預設 NVIDIA NIM）

答題用的 LLM 預設走 **NVIDIA NIM**（[build.nvidia.com](https://build.nvidia.com/models)），你需要**自行申請並設定 API Key**：

1. 到 [build.nvidia.com](https://build.nvidia.com/models) 申請一支 API Key（格式類似 `nvapi-...`）。
2. 把它設成**環境變數** `NVIDIA_API_KEY`（工具只從環境變數讀，不會寫進設定檔）：

   PowerShell：
   ```powershell
   $env:NVIDIA_API_KEY = "nvapi-你的金鑰"
   python -m troTHU.tron run
   ```
   cmd：
   ```bat
   set NVIDIA_API_KEY=nvapi-你的金鑰
   python -m troTHU.tron run
   ```

沒設定 key 時，需要 LLM 的題目會自動略過（不會中斷監控）。

### 進階設定（`config.advanced.toml` 的 `[autoanswer]`）

```toml
[autoanswer]
enabled = true                 # 總開關（預設開）
delay_seconds = 15             # 偵測到題目後等幾秒送出（這段期間先備答；按任意鍵可立即送）
allow_keypress_immediate = true
resubmit_for_correct = true    # 允許「先交→讀正解→再交」（需該測驗可重複作答；取最高分）
types = ["exam", "classroom_exam", "courseware_quiz", "questionnaire", "vote", "homework"]

[autoanswer.llm]
provider = "nvidia"
base_url = "https://integrate.api.nvidia.com/v1"
model = "minimaxai/minimax-m3"   # NVIDIA NIM 模型（多模態，可看題目附圖）
api_key_env = "NVIDIA_API_KEY"   # 存放 API Key 的環境變數名稱
```

> 全 6 型都用同一套「單一入口、動態分流」接好並有離線測試。實機驗證狀態（測試課 55379／自有帳號）：
> **exam（線上測驗）、classroom_exam（即時測驗）、questionnaire（問卷）、homework（作業）** 四型端到端實機驗證；
> **vote（投票）** v1.7-alpha.2 已實機驗證：真正的送出契約是 `POST /api/votes/{id}/vote`、body `{"votes":["A",...]}`
> （選項**字母**）——教師建+開投票、學生經產品碼送出，伺服器確認本人已記入 `interaction_student_ids`
> （alpha.1 的全數 500 其實是我們用錯了方法/欄位/值：`PUT` + `{voted_options:[文字]}`，並非手機 App 專屬）；
> **matching（配對）** v1.7-alpha.2 升級為精確計分（見上＊，實測每對正確滿分）；
> **courseware_quiz（教材測驗）** 學生端取題/送出已依還原碼契約修正（送出 wrapper 為 `subjects_answers`、每題帶 `type`），
> 監控偵測也已接好（教材活動 → `activity/{id}/quizzes` → quiz → 取題/送出/`my-submission` 判已交），有離線測試；
> 但**測試租戶 www.tronclass.com.tw 未開通教材測驗（AI Quiz）模組**（`/settings`、`/generate-*`、建題端點全 404、`/upload_references` 永遠為空），
> 故偵測與送出**無法在此租戶實機驗證**，待有開通該模組的租戶再補。可在 `types` 移除你尚未需要的題型。
>
> **v1.7-alpha.3 — 自動答題 API 深度稽核（逐欄位對照還原碼，已實機驗證）**：
> ① 「先交→讀正解→再交」改為**把公布的正解疊加到首次答案上**，不再整份重建——避免把填空/簡答/配對洗成空白；
>    實測一份「可重複作答＋公布答案」的測驗，首次部分答對 0 分 → 重交後**滿分**且填空保留（每題 10/10）。
> ② exam 最終送出補上 `examFinished`（對齊真實 client，標記為「完成」而非草稿）。
> ③ exam 偵測會跳過「作答次數已用盡」的測驗（依學生 `submission_count`/`submit_times`，實測單次測驗送出後不再重複偵測）——
>    伺服器本就會擋下重複/逾次送出（不會覆蓋你的作答），此守門只是省去重啟後的無謂重試。

---

## 其他功能

- **多帳號 / 群組**：一份設定管多個學號，用 `now` 一鍵切換（見上面 config 教學）。
- **時區排程**：`config.advanced.toml` 裡可設 IANA 時區（如 `Asia/Taipei`），每天可有多個時段。
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

TronClass 是不少學校共用的底層校園系統（各校上架時自行命名，有的叫 iLearn、有的叫 iClass、有的直接叫 TronClass…），下面整理核心 API 與做法，方便其他同樣用 TronClass 的學校快速理解、自行實作。這套 runtime 適用於任何基於 TronClass 的校園（含公有雲），只要換掉 base URL，登入流程會自動偵測。

端點以 `{base}` 代表學校的 TronClass 網域（例如 `https://tronclass.你的學校.edu.tw`、`https://ilearn.…`、`https://iclass.…`）。所有請求都帶登入後的 session cookie。

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
- `troTHU/providers.py`：學校登錄表的**邏輯**（查表、別名解析、端點推導、合併）。**自 v1.6-alpha.3 起，程式碼裡沒有任何學校字面值**——原廠清單放在資料檔 `troTHU/schools.toml`（首次啟動時寫進 `config.advanced.toml`），之後 `config.advanced.toml` 就是唯一可編輯的真實來源；`refresh_provider_registry` 會在載入設定後讓使用者的修改立即生效（config 為準）。新增學校＝編輯 `config.advanced.toml`（或那份種子檔），不必動程式。
- `troTHU/login_flow.py`：**唯一的統一登入流程**（`run_login_flow`）。抓登入頁一次後，純粹依「偵測到的頁面特徵」分流——有無驗證碼、哪一種驗證碼（靜態圖檔／Keycloak JSON）、是否為首頁 SSO 探索、是否為公有雲 email SPA、是否為 NetIQ NAM——**絕不以學校為分支或命名**。新增一種前所未見的登入「協定」才需要在這裡加一個特徵處理函式；換新學校通常什麼都不必碰。
- `troTHU/login_probe.py`：`login-probe` 指令——對每一所學校（含你在進階 config 自訂的）的真實登入頁做免帳密探測（可達性＋統一流程偵測到的表單／驗證碼特徵），是回歸守門與「上線前驗證」的工具。
- `troTHU/tron_http.py`：端點驅動的 HTTP client（`run_login_flow` 在它之上執行）。
- `troTHU/auth_runtime.py`：與學校無關的登入主流程（cookie 還原、呼叫統一流程、API session 驗證、瀏覽器後備、各種狀態與提示）。

### 新增一所學校（給開發者）

「多學校系統」刻意設計成新增學校的成本極低，而且**登入流程完全統一**：所有學校都走同一條 `run_login_flow`，由程式在執行時偵測登入頁特徵自動分流，沒有任何一所學校享有特化程式碼或特化命名。最省事的一條其實連開發者都不必當：**任何 TronClass 學校，使用者只要在 `config.conf` 把 `school` 或 `now` 填成該校網址，就能自動登入**（細節見上面〈我的學校不在清單裡？〉一節）。若想「填代號就自動登入」，依下面選一條路：

**途徑一：直接編輯進階 config（最推薦，多數情況這樣就夠）。** 自 v1.6-alpha.3 起，所有學校本來就**全部列在 `config.advanced.toml` 的 `[provider.available.*]`** 裡——要新增一所沿用現有協定的學校，照樣加一個區塊、`config.conf` 的 `school` 填成同一個名字即可，所有 API 端點會自動推導、登入方式會自動判斷：

```toml
[provider.available.my_school]
base_url = "https://tronclass.my-school.edu.tw"
aliases = ["我的學校"]   # 選填，讓使用者能用中文校名選校
```
```conf
school = my_school
```

其餘欄位全是**選填**：`label`（顯示名稱）、`aliases`（中文/英文別名）、`user_visible`。登入網址、登入方式、圖形驗證碼一律**自動偵測**，不需也不應逐校指定（`login_url` / `auth_flow` 仍保留為進階使用者的逃生口，但正常不必填）。動手前先跑 `python -m troTHU.tron login-probe --school my_school`，看流程在真實伺服器上偵測到什麼——`login-probe` 也會探測你在進階 config 自訂的學校。

> 想**送 PR 永久內建**？編輯資料檔 `troTHU/schools.toml`，加一個 `[<代號>]` 區塊（多半只要 `label` + `base_url` + `aliases`），它就會成為原廠清單的一部分，首次啟動時自動寫進使用者的 `config.advanced.toml`。能力旗標對所有學校一致，無須填寫。

關於 **`auth_flow`**：它是「選填提示」，**不是分流依據**。流程會在執行時自動偵測登入頁屬於下列哪一種，正常情況**不必設定**；它只保留供文件說明、向後相容，以及兩個與分流無關的判斷（缺 OCR 套件時的降級、`manual_cookie_only` / `interactive_browser` 模式）。所有值都以「協定／特徵」命名，**沒有學校名稱**：
  - `cas`：標準 CAS／Keycloak 帳密登入頁（多數學校）。流程一律會在登入後再打一次 API 確認 session——因為 TronClass 載入登入頁時會在 LMS 網域種一顆匿名 `session` cookie，光看 cookie 在不在會誤判成功。
  - `cas_ocr_captcha`：CAS 登入頁另有「靜態圖形驗證碼」。流程會自動偵測驗證碼欄位、抓圖、用本地 OCR 辨識（圖檔名／欄名／長度／字元集全部自動判斷，**不需也不可逐校指定**）。
  - `keycloak_ocr_captcha`：Keycloak（`tw-common` 佈景）的 JSON 驗證碼——JS 打 `GET /auth/realms/<realm>/captcha/code` 拿 `{image, key}`，送出時帶 `captchaCode`＋`captchaKey`。流程自動處理。
  - `public_cloud_email`：TronClass 原生 email／密碼 SPA、沒有外部 CAS。
  - `nam_neai`：NetIQ Access Manager（NEAI）SSO。SSO 主機由登入頁的 JS 自動推導，**不寫死**任何學校網址。
  - 首頁帶「本校／統一登入」`kc_idp_hint` 的學校：流程會自動讀首頁 `orgSettings.loginSettings` 找出校內 SSO 入口、跟隨 JS 自動提交中轉表單，再依該頁型態自動處理（標準帳密表單即使欄名特殊如 `muid/mpassword`、`Ecom_User_ID/Ecom_Password` 也會自動偵測；含驗證碼自動 OCR；導向 Google／微軟聯邦式 IdP 則自動開瀏覽器）——同樣**不必設定**。
  - 若某校 `/login` 不會乾淨轉跳到登入表單（少數只在 `/cas/login` 提供），於區塊內指明 `login_url`。

**途徑二：前所未見的登入協定（極少數）。** 只有當某校的登入「協定」是現有特徵偵測完全涵蓋不到的全新型態時，才需要動程式：在 `troTHU/login_flow.py` 的 `resolve_credential_form` 加一條特徵偵測、並寫一個對應的送出策略，**以「協定／特徵」命名，絕不以學校命名**。登入狀態判讀、錯誤提示、session 驗證、瀏覽器後備都已統一，不必再碰。動手前先跑 `python -m troTHU.tron login-probe --school <代號>`，看流程在真實伺服器上偵測到什麼，多半會發現根本不用加。

**途徑三：純 Cookie 匯入（免寫任何登入邏輯）。** 想直接從瀏覽器讀 cookie、跳過密碼登入：把該校 `auth_flow` 設成 `manual_cookie_only`，啟用進階設定的 `webview`，再用指令匯入。系統會在匯入當下與每次執行時自動向該校 API 驗證 session，確保 cookie 有效、不怕靜默過期。

```toml
[provider.available.scu]
base_url = "https://tronclass.scu.edu.tw"
auth_flow = "manual_cookie_only"
```
```bash
python -m troTHU.tron webview import --input <cookie-json-path> --save
```

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
- **非內建學校（貼網址）走手動瀏覽器登入**：要你親自在跳出的瀏覽器裡登入一次（之後靠 cookie 快取通常不必每次重登），不像內建學校那樣連登入都全自動。盯點名與自動簽到的部分則完全相同。
- 預設的 Windows zip 內建 Playwright 登入輔助套件（瀏覽器二進位檔於首次使用時按需自動下載，約 150MB）；keyring、QR 影像解碼等其他選用功能則不內建，需要的話請用原始碼安裝對應 extras。

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


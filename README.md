# Auto-Rollcall-thu-Tronclass

**TronClass 校園點名系統的全自動點名工具｜支援全台、港澳數十所採用 TronClass 系統的大專校院（所有學校一律平等、共用同一套流程）**

登入學校帳號後，它會在你設定的上課時段自動盯著課程，一偵測到點名就替你完成簽到——你不用一直盯著手機，也不用手忙腳亂找點名碼。

> 🆕 **最新版本 v1.8-alpha.1**：新增第四種學生端點名「**自主報到（self_registration）**」自動化——number／radar／qr／self_registration 四種學生點名自此全數支援（自主報到因測試租戶未開通，屬契約正確＋離線測試、尚未實機驗證，詳見 [RELEASE_NOTES-v1.8-alpha.1.md](RELEASE_NOTES-v1.8-alpha.1.md)）。

> ⚠️ 請只在你自己有權限、且符合學校與課程規範的情況下使用。**不要把填好帳密的 `config.conf`、cookie、`state/`、`log/` 傳給任何人。**

## 致謝與來源

本專案 fork 自 [silvercow002/tronclass-script](https://github.com/silvercow002/tronclass-script)，並在此基礎上大幅延伸為支援數十所 TronClass 校園的全自動點名版本。

完整來源、原作者 MIT License notice 與本專案授權說明已併入本文件末尾的「致謝與來源 (Credits)」一節。

---

## 這個工具可以幹嘛

- ✅ **數字點名** — 完整支援。已經過無數次實際課堂驗收與打磨，是成熟、穩定的全自動完成版：偵測到點名 → 自動拿到點名碼 → 自動簽到，全程零操作。
- ✅ **雷達點名** — 完整支援。同樣經過大量實戰驗收，偵測到雷達點名後會自動完成定位簽到，不需要你開地圖、不需要對座標。就算哪天伺服器補掉了現在的捷徑，背後還有一套我自己寫的**「全球定位演算法」（WGS84 多點定位）**能反推教室座標頂上，不會因此失效。
- ⚠️ **QR Code 點名** — 三種點名裡最硬的一塊，我們也**已竭盡全力**。QR 的 `data` token 是伺服器端用一把金鑰對「時間」簽出來的，經過整輪逆向，證實**學生端無法偽造、也無法憑空取得**（完整研究與踩過的坑見下方〈QR 資料 Token 逆向研究紀錄〉）。目前唯一能自動化的方式，是利用實測發現的「**`data` 跨課可攜**」特性，搭配一個你自備、能發起 QR 點名的教師帳號即時取得當下 `data` 再送出（「教師輔助」）——這是**暫時的妥協**，離真正「免教師自助簽到」的目標還有距離，我們仍在找路。
- ⚠️ **自主報到（self_registration）** — 已支援。這是四種點名裡最單純的一種：老師開啟後，學生自己按「我到了」即可，沒有點名碼／座標／QR。偵測到就自動送出一個空的 `{}` 完成簽到（送法直接取自官方網頁前端原始碼），再回查確認 `on_call_fine`。**誠實交代**：我們的測試租戶 `www.tronclass.com.tw`**沒開通這項服務**（實測老師建立時伺服器回 `400 {"errors":{"type":["未開啟這項服務"]}}`），因此此功能**契約正確、已離線單元測試，但尚未能實機驗證**——與下方〈自動答題〉的 `courseware_quiz` 同一等級；在有開通此服務的租戶上應可直接運作。

順帶一提，它不會「搶當第一個簽到的人」：偵測到點名後，會先確認這是一場真的、全班性的點名（已經有一定比例的同學陸續簽到）才出手，避免老師只是手滑誤開、又馬上關掉的「假點名」也把你簽進去。這是一道貼心的容錯保險，預設就開著、你什麼都不用設。

關於 QR（誠實現況）：QR 的 `data` token 純在伺服器端以「金鑰 × 時間」簽發、學生端 API 不會給，而且我們已徹底逆向驗證**無法從外部偽造或取得**（細節與所有踩過的坑見下方〈QR 資料 Token 逆向研究紀錄〉）。因此在找到真正的自助解法之前，自動化只能靠「**教師輔助**」這個暫時妥協——它建立在實測發現的「`data` 跨課可攜」特性上：用你自備的教師帳號即時發起一場 QR 點名、讀出當下 `data`，再用學生帳號送出；教師登入失敗只會停用 QR 教師輔助，不影響數字 / 雷達點名。真的沒有教師帳號時，就只能手動貼上 / 掃描當下的 QR 內容——這確實離「免教師自助簽到」的目標還很遠，是目前的誠實現況，我們仍在找路。

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

1. 到 Releases，**只下載主程式這一個檔**（檔名形如 **`THU_Auto_Rollcall-vX.Y.Z-windows-x64.zip`**，`X.Y.Z` 為當前版號）。
2. **整包解壓縮**到一個固定資料夾（不要在 zip 裡直接雙擊）。
3. 進到資料夾，執行 `auto-rollcall-thu-tronclass.exe`。

> 📌 **下載哪個檔？** Releases 頁面會有兩個壓縮檔，請認清：
> - ✅ **主程式（要下載這個）**：檔名形如 `THU_Auto_Rollcall-vX.Y.Z-windows-x64.zip` —— 解壓後執行裡面的 exe。
> - ➕ **附加元件（通常不用手動下載）**：檔名形如 `addons-vX.Y.Z-win.zip` —— 只有「圖形驗證碼辨識」或「手動瀏覽器登入」會用到，程式**需要時會自動下載**。**它不是程式本體、不要直接執行**；只有在自動下載失敗（如網路受限）時，才手動下載它、放到 exe 旁邊或 `state\addons\` 即可（程式會自動採用，不再重抓）。
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

答題用的 LLM 預設走 **NVIDIA NIM**（[build.nvidia.com](https://build.nvidia.com/models)），你需要**自行申請並填入 API Key**：

1. 到 [build.nvidia.com](https://build.nvidia.com/models) 申請一支 API Key（格式類似 `nvapi-...`）。
2. **最簡單（一般使用者）**：直接把金鑰填進 `config.conf` 的 `[llm]` 區塊的 `api_key`（見下方範例）。
   `config.conf` 預設不會被提交（`.gitignore`），但金鑰仍是機密，請勿外流或截圖分享。
3. **進階（可選）**：若不想把金鑰寫在檔案裡，把 `api_key` 留空，改設環境變數——名稱由 `api_key_env`
   指定（預設 `NVIDIA_API_KEY`）。`config.conf` 的 `api_key` 有填就優先用，留空才回退到環境變數：

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

兩者都沒設時，需要 LLM 的題目會自動略過、**不會送出空白答案**，也不會中斷監控。
（金鑰會從 JSON／log／status／debug 等輸出中遮蔽；只有 `config.conf` 檔案本身與其預覽會明碼顯示。）

### 進階設定（`config.advanced.toml` 的 `[autoanswer]`）

```toml
[autoanswer]
enabled = true                 # 總開關（預設開）
delay_seconds = 15             # 偵測到題目後等幾秒送出（這段期間先備答；按任意鍵可立即送）
resubmit_for_correct = true    # 允許「先交→讀正解→再交」（需該測驗可重複作答；取最高分）
types = ["exam", "classroom_exam", "courseware_quiz", "questionnaire", "vote", "homework"]

[autoanswer.llm]                 # 「行為」設定（連線設定在 config.conf 的 [llm]）
thinking_mode = "enabled"        # 推理強度：常開（預設，作答最穩）/ adaptive / disabled
max_tokens = 0                   # 0 = 用安全預設 16384（m3 推理省略此值會回空，故一定會送）
enable_tools = true              # 題目資訊不足時，允許模型自行讀取課程教材/附件（含 PDF）來作答
max_tool_iterations = 3          # 單題最多讓模型呼叫工具幾輪
```

LLM 的**連線設定**（v1.7-alpha.4 起）改放在 **`config.conf` 的 `[llm]`**（留空＝用預設）：

```ini
[llm]
provider = nvidia
base_url = https://integrate.api.nvidia.com/v1
model = minimaxai/minimax-m3
api_key = nvapi-你的金鑰          # 一般使用者：直接把金鑰填在這（config.conf 已 gitignore）
api_key_env = NVIDIA_API_KEY     # 進階：把 api_key 留空，改設「這個名稱」的環境變數
```

> **模型互動加強（v1.7）**：作答用的 LLM **預設常開 reasoning**（`thinking_mode = "enabled"`，
> NVIDIA NIM / MiniMax-M3 的 `chat_template_kwargs.thinking_mode`，這已是 M3 最高推理檔），嚴格作答對格更穩；
> 推理文字會與最終答案分離，只取乾淨答案送出。`max_tokens` 預設 0＝送出安全預設 16384
> （m3 推理若**省略** max_tokens 會回空 `choices`，所以一律會送一個明確上限）。
> **工具呼叫**：題幹資訊不足時，模型可自行呼叫 `search_course_materials` 到課程裡找教材／講義
> （**PDF 會抽成文字**，pypdf）並據此作答（皆為唯讀；輪數由 `max_tool_iterations` 控）。
> **多模態**：需登入的題目／教材圖片會由本工具下載後以 base64 內嵌，NVIDIA 才看得到（公開圖維持直接帶 URL）。
> 實機驗證（測試課 55379／自有帳號）：reasoning 常開、模型呼叫工具讀取教材文字並據以作答，皆已實測通過。

> **v1.7-alpha.4 — 體驗與穩定性**：①「已作答過」的活動**永久記錄**在 `state/autoanswer_completed.json`
> （per-帳號、原子寫入），重啟監控**不再重交、不再刷版面**（一週的作業也只會作答一次）。② 輸出流程：
> **備妥答案後**才提示並開始 15 秒倒數、同時回顯一次答案 → 送出成功後以「點名成功」同款橫幅顯示**最終**提交答案，
> 全部以規範的 LLM 輸出格式統一呈現。③ LLM 連線設定搬到 `config.conf [llm]`（含防呆回落）。
> 皆已在測試課 55379／自有帳號實機驗證。

> **v1.7-alpha.5 — 即時測驗偵測治本**：實機逐欄位確認 classroom_exam 狀態機後，偵測改為
> `status=="start" 且 started_subjects_count>=1`（真的開放收答才作答）；移除 alpha.4 的失敗退避 band-aid。
> classroom-list 的 `status` 只有 none/start/finish，且 "start" 必要非充分（停止收答時仍是 "start" 但送出會被擋）。
> 只動即時測驗偵測，其他活動型不受影響（已實機回歸 exam/vote/questionnaire/classroom）。

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

## QR 資料 Token 逆向研究紀錄（密碼學筆記 + 負面結果地圖）

> ⚠️ 這節是**研究筆記**，不是攻擊教學。結論先講：**目前（從外部）無法偽造、也無法憑空生出 QR `data` token**。
> 寫下來是為了當一張「**負面結果地圖**」——把所有試過、確認走不通的路都標清楚，讓後人不必再白跑一次同樣的坑。
> 全部基於自有測試帳號 + 測試課的實機驗證；**不含任何真實金鑰 / token / 他人資料**。

### 它長什麼樣、為什麼想研究

QR 點名送出時只送 `{data, deviceId}`，其中 `data` 是一串 **42 字元**：

```
1782800000 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   ← 後 32 位為示意打碼，非真實 token
└─前 10 位─┘ └──────────── 後 32 位 ────────────┘
  unix 秒(明碼)        32 位 16 進位雜湊
```

- **前 10 位** = unix 秒，明碼，你掃到 QR 就看得到。
- **後 32 位** = 一段 16 進位雜湊（= 128 bit，剛好是 MD5 的輸出長度）。

如果這串能「自己算出來」，就能免教師、免掃碼自助簽到。所以值得弄清楚它到底怎麼生成的。

### TL;DR 結論

- `data` 的後 32 位 = 伺服器端 **「固定金鑰 × 時間」** 的確定性函式（性質類似 Google Authenticator 那種每 30 秒換一次的動態密碼 / TOTP）。
- 時間粒度 **約 500ms 一格** → **每秒只有 2 個有效雜湊**；效期極短，約 **1–4 秒**。
- **那把金鑰純粹在伺服器**：翻遍所有能拿到的 client、數百支 API 回應、所有硬編碼祕密、所有公開鹽——**都沒有**。
- ⇒ **從外部無法偽造**。能偽造的人，手上一定**已經有那把伺服器金鑰**（來自我們碰不到的管道）。

### 它是怎麼「簽」出來的（密碼學白話 + 程式碼）

先懂一個東西：**MD5 是一台公開的「指紋機」**，丟任何文字進去，吐出固定 32 位 16 進位指紋。特性是：同樣輸入 → 同樣指紋、差一個字 → 指紋全變、而且不能倒推。

問題是 MD5 是公開的，人人能算。所以平台的做法是：**在訊息後面偷接一段只有它知道的祕密金鑰，再丟進 MD5**——這樣外人沒金鑰就算不出正確指紋。這就是「簽章」：

```
指紋 = md5( 訊息 + 祕密金鑰 )      ← 或更講究的 HMAC-MD5( 金鑰, 訊息 )
```

**這套手法在官方 App 裡白紙黑字看得到**（以下是反編譯出來的「直播錄影」API 簽章碼；`secretKey` 是程式裡寫死的祕密，實際值此處不公開）：

```js
var timestamp = Math.floor(Date.now() / 1000);              // ← 現在的 unix 秒
var token = hex_md5( url + "&ts=" + timestamp + secretKey ); // ← = md5( 訊息 + 祕密金鑰 )
```

逐塊拆：`url + "&ts=" + timestamp + secretKey` 是把「網址 + 時間 + 金鑰」黏成一長串（這裡的 `+` 是「字串相接」不是數學加），再整個丟進 `hex_md5` 絞成 32 位指紋。伺服器收到時，用它也知道的金鑰把同樣的東西絞一遍、比對指紋一不一樣 → 一樣才信。

> ℹ️ **這是「直播錄影」那支 API 的簽章，不是 QR 的生成碼**（QR 在伺服器生成，App 只負責掃描，所以 App 裡根本沒有 QR 的金鑰）。但它證明了 **WisdomGarden 確實用 `md5(訊息+金鑰)` / HMAC-MD5 這套**。QR 的 `data` **極可能同族**（32 hex = 128 bit = MD5 長度、伺服器錯誤碼自稱 `..._hash`、實測就是「金鑰 × 時間」）——但**確切公式只在伺服器、沒親眼看到**，所以這是**推論，不是證明**。

### 試過、確認走不通的路（核心：負面結果地圖）

| 方向 | 做了什麼 | 結果 |
|---|---|---|
| **keyless 暴破** | 純時間各種格式 × md5/sha 等 8 種雜湊 × 各種公開鹽 × 細到 1ms | 全不中 → **確認有伺服器金鑰**（不是無金鑰的純 MD5） |
| **金鑰候選交叉測試** | 把學生可讀 ~300 支端點 / 教師 358 支端點回應裡的值、所有硬編碼祕密、常數字典、各種衍生變換（md5/截斷/反轉…）全當金鑰試；最徹底那輪把**每支回應裡的每一個值（3,858 個）**都試過 | **全 NO MATCH** → 金鑰不在任何可讀回應裡 |
| **client 反編譯** | 手機 App v1.17.2（2020）、現行網頁前端、廠商 40 個 GitHub repo | 手機 = **只掃描不生成**、網頁 = **只跟伺服器要現成的**；都不生成 QR、都沒金鑰 |
| **簽章預言機** | 試能否叫 `qr_code` 簽一個「我指定的時間」；試登入 QR / 加課 QR / identity QR | `qr_code` 永遠只簽當下；其餘都是不同的 token 機制 |
| **即時推播** | socket.io 各 namespace，開 QR 點名期間長時間監聽 | QR **從不推播** `data`（連教師自己的 socket 都收不到） |
| **提交層邏輯繞過** | 改時間欄、混合 token、整段壓縮 payload、結構變體、magic 雜湊（全 0 / 全 f / md5 空字串） | 驗證很嚴格，**沒有任何繞過** |
| **JWT** | 暴破 `/api/jwt` 的 HS256 密鑰、試 alg:none 偽造教師身分 | 密鑰沒破 + **JWT 根本不是主 API 的認證**（主 API 純靠 cookie）→ 偽造也沒用 |
| **舊版程式** | Wayback、各 APK 鏡像站找 2015–2018 舊版 | 登入後的 LMS 前端**沒被爬存**；舊 APK 多已下架（最舊抓得到的是 2020，還是掃描端） |

### 順帶確認的兩件事（working 觀察）

1. **`data` 跨課可攜**：同一租戶下，**A 課當下的 `data` 拿去 B 課送出也會被接受**（實機重現）→ 證明 `data` **只綁「時間 + 全域金鑰」，不綁特定課程 / 點名**。意涵：只要有「任何一處、同一時刻的有效 `data`」就能標出席——**但純學生取不到 `data`**（`qr_code` 對學生 403、沒有洩漏、不能自建），所以這條對「沒有任何來源的學生」還是死的。屬 proxy 代簽紅線。
2. **教師可直接改狀態（免 QR）**：**教師帳號**可以不經 QR，直接用 API 把學生標成 `on_call_fine`。這是**教師本來就有的點名能力**（不是學生端的權限提升），列出只為完整記錄替代流程。

### 想用 GPU 硬爆？先看這個數學

- 一張 RTX 5090（~220 GH/s）**半年**大約能試 **2⁶¹** 個金鑰（≈ 10 位英數 / 15 位 hex / 61 bits）。
- 但若金鑰是 **128 位隨機**（WisdomGarden 的風格——挖到的那把直播錄影金鑰就是 32 位隨機 hex）：要試 **2¹²⁸**，一張卡約 **5×10¹⁹ 年**（≈ 宇宙年齡的 35 億倍）→ **物理級不可能**（跟爆 AES-128 / 比特幣私鑰同級）。
- **唯一例外**：金鑰若其實是「人取的弱密碼 / 單字」→ 字典攻擊半天可破。但證據指向隨機。

### 還剩什麼方向（誠實評估）

QR 真正「生成」的地方在**伺服器 / 舊版的網頁教師端**。如果 **2015–2018 的舊網頁 LMS** 當年是在**瀏覽器裡**生成 QR 的，那把金鑰就會**內嵌在那個舊版 JS 裡**（而且這種簽章金鑰通常不會主動輪替，至今八成還有效）。

可惜那個 artifact 現在抓不到（Wayback 只存了登入前的行銷頁，登入後的 LMS 前端沒被爬）。**後人若能弄到 2015–2018 的舊網頁前端包，是目前最有希望的一條路。**

**更新（2026-07）**：用廠商自家的 `orgs.json` 對 **875 個租戶**做了版本普查（各校 TronClass 版本不一，想找還在跑舊版的活站）——結果全網**最舊的活實例只到 1.62**，沒有任何 2015–2018 的古早版還活著（都在託管雲、被自動更新）。再派多個 agent 深掘最舊那幾站（含**舊版 AngularJS 的 rollcall 模組**，與 2020 手機 App 同世代）：它們**也全是 consume-only**——只把伺服器回傳的字串畫成 QR 圖、沒有生成碼、沒有內嵌金鑰；上萬個榨出的候選金鑰對語料全 NO MATCH。⇒ **QR 的 `data` 很可能「自始至終」就在伺服器端生成、客戶端從沒碰過那把金鑰**——連最早的 AngularJS 時代都是。所以「舊 client 內嵌金鑰」這個最後的希望，看來**可能根本不存在**。

**更新（2026-07，多模型复盤 + 逐一實測收尾）**：又做了一輪「找突破點」的复盤，並刻意引入**兩個不同前沿模型當外部意見**（Sonnet 5 紅隊發散、Composer 2.5 順著「前輩的話」反推），用中立事實 + 不同角色避免同溫層。他們冒出的**新線索全部被實機測到底、全是乾淨負面**：
> - **「登入時下發金鑰 → 本地 HKDF 鑄造」偽造路**：先盤點學生登入後拿到的全部高熵料——只有 `session` cookie、`/api/jwt`、`course_code`；fat-config 端點全 404/403。再用 HKDF(這些真欄位) → PRF 對**活 token** 比對＝**48,900 種構造 NO MATCH**。且邏輯上也不成立：token 全域確定性＋跨校 ⇒ 金鑰必**全域**，但學生只收到**每階段(per-session)**料，衍生不出全域金鑰。
> - **「即時點名進行中、學生自己選修課」的 in-band 洩漏**（舊掃描的真正缺口）：學生**看得到**點名存在，但 `student_rollcalls`(含 `?action=qr`)／`answers`／`lite`／各 `qr`/`status` 路徑**都不含 token**；WebSocket 也早證實**伺服器從不推播 data**（連教師自己 socket 都收不到）。
> - **效期窗口**：乾淨重測（每次開新點名、只送一次）確認**很短（~1–4 秒）**，非寬鬆。
> - **伺服器面無新料**：現行 build 1.77，學生可打的 rollcall `answer*` 端點仍**恰 4 個**，投機新型（beacon/gps/face/nfc…）全 404。
>
> ⇒ **兩個模型獨立得出同一結論：「從外部黑箱能做的，真的都做盡了。」** 跨校可攜只代表「任一有效 token 可重用」，並**不會生出新的可測面**。這已從「探測問題」變成「**取得 artifact 的問題**」。

**更新（2026-07，IDOR 圖鑑角度——也全負面）**：又拿到一份第三方整理的 TronClass「只驗登入、不驗物件層授權」BOLA/IDOR 漏洞圖鑑，派多個 subagent 交叉分析並實機測遍與 QR 相關的每條線索：qr_code 對學生（各種 referer／api_version／非-/api 舊路徑／大小寫變體）**全 403/404**；送出後 `answers` **不回顯 token**；把「`/invites` 無角色檢查」的模式推廣到 rollcall 生命週期——學生 `建立/start/activate/publish/position` **全部 403（有角色檢查）**，`/invites` 只是**孤立的錯接**、非系統性。⇒ **IDOR 這一整面同樣證實：純學生端拿不到 QR `data`。** 唯一能通的鏈是 `/invites → 成為老師 → 讀 qr_code`——那正是「成為老師」那條路（本工具不走、也不做成可部署的代簽工具）。至此，密碼學／洩漏／偽造／client／舊版／伺服器面／IDOR **七個角度全數以實測收束為負面**。

**那還剩什麼？** 誠實說，**從外部能做的都做盡了**；真正還有機會、卻都不在我們手上的只剩三條：(1) **握有該方法／金鑰的人**給出任何片段（一行碼、函式名、端點、或金鑰本身）——黑箱重建不出一把設計正確的 128 位金鑰；(2) **內部／內線／歷史伺服器洩漏**這種外部碰不到的後端缺口；(3) **一個還沒想到的全新攻擊面**（見下方「其他可能的面」）。此外也已用你我實測校正過先前的用詞：跨「校/租戶」可攜是**實機證實**（曾用官網教師帳號 data 簽到東海與龍華科大 QR 點名），而「洩漏已排除」的掃描此輪也補上了**即時點名當下、學生自己選修課、含 POST/WS** 的面，全數確認無洩漏。

> **研究起點**：這場調查源於一個說法——**有人聲稱「純學生端」就能偽造或取得當下的 `data`，免教師、跨校通用、涉及密碼學、連工程師都猜不到**。我們據此把每一條密碼學／端點／client／協定的路都窮盡驗證了一遍（見上方負面結果地圖），**到目前為止，以外部可達的一切都無法重現**。不假裝成功，把地圖留給後人。

### 其他可能的面（與 QR 金鑰無關，但記著）

深掘時發現 rollcall 的**來源比想像多**：除了 `number` / `radar` / `qr`，伺服器端還認得 `self_registration`（自主報到）、`roomis`、`new_capec`（**第三方整合**，走 `external_api_key_id`，由外部系統回報出席）、`middle_db`、`merged_rollcall`、`import_rollcall`（中介 DB／合併點名／匯入點名）。

我們把這些逐一查了一遍（對照廠商網頁前端的 `checkRollcallType` 列舉與角色×方法權限矩陣）：

- **`roomis`／`middle_db`** — 後端 DB／Kafka 同步（Oracle／MySQL → TronClass），**沒有任何學生可打的 HTTP 端點**。
- **`new_capec`** — 第三方廠商整合，靠機構層級發放的 `external_api_key_id`；學生**拿不到、也列不出**這把金鑰（`/api/auth_code/get_auth_code` 對學生回 403）。
- **`merged_rollcall`／`import_rollcall`** — 教師／管理者的合併與檔案匯入（`/api/data-import/...`），**非學生動作**。
- **`self_registration`** — 這一個**才是**學生端能自己送的類型（唯一新增的可自動化缺口），已補上支援（見上方能力清單的〈自主報到〉）。

換句話說，學生端能碰的 `/api/rollcall/{id}/answer*` 端點就**恰好四個**（`answer`＝radar、`answer_number_rollcall`、`answer_qr_rollcall`、`answer_self_registration_rollcall`），現在四個都接了；其餘五種來源都是**機器對機器／教師管理者**授權，學生無路可走，只留紀錄、不追。

### 重建用的工具

驗證腳本都在 `scripts/_qr_*.py`（gitignored、不進版控，但可由本節描述重建）：`keyhunt` / `keysweep` / `keyhunt_teacher` / `apkkeys` / `wgkey`（金鑰交叉測試）、`keyless`（無金鑰暴破）、`quantum`（量測時間粒度）、`gencheck`（簽章預言機）、`oracle`（token 來源端點）、`socket_authz`（即時推播）、`iv`（提交層繞過）、`jwtcrack` / `jwtauth`（JWT）、`misconfig` / `keybrute_full`（全回應暴破）。

---

## 技術細節（給想複製到其他學校的開發者）

TronClass 是不少學校共用的底層校園系統（各校上架時自行命名，有的叫 iLearn、有的叫 iClass、有的直接叫 TronClass…），下面整理核心 API 與做法，方便其他同樣用 TronClass 的學校快速理解、自行實作。這套 runtime 適用於任何基於 TronClass 的校園（含公有雲），只要換掉 base URL，登入流程會自動偵測。

端點以 `{base}` 代表學校的 TronClass 網域（例如 `https://tronclass.你的學校.edu.tw`、`https://ilearn.…`、`https://iclass.…`）。所有請求都帶登入後的 session cookie。

### 列出目前的點名

```http
GET {base}/api/radar/rollcalls?api_version=1.1.0
```

回傳目前進行中的點名清單與類型（number / radar / qr / self_registration），程式據此分流處理。

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

### 自主報到（空 PUT 即簽到）

```http
# 學生自己按「我到了」= 一個空 body 的 PUT
PUT {base}/api/rollcall/{rollcall_id}/answer_self_registration_rollcall
    body: {}
# 送出後回查 student_rollcalls 確認為 on_call_fine 才採信。
```

沒有點名碼／座標／QR，是四種裡最單純的類型；送法直接對照官方網頁前端（`{self_registration:"answer_self_registration_rollcall",…}`，body 為 `{}`）。⚠️ 測試租戶 `www.tronclass.com.tw` 未開通此服務（老師建立時回 `400 未開啟這項服務`），故此路徑為**契約正確 + 離線測試、尚未實機驗證**。

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


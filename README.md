# Auto-Rollcall-thu-Tronclass

**東海 (THU) / 淡江 (TKU) iLearn・TronClass 全自動點名工具**

登入學校帳號後，它會在你設定的上課時段自動盯著課程，一偵測到點名就替你完成簽到——你不用一直盯著手機，也不用手忙腳亂找點名碼。

> ⚠️ 請只在你自己有權限、且符合學校與課程規範的情況下使用。**不要把填好帳密的 `config.yaml`、cookie、`state/`、`log/` 傳給任何人。**

---

## 這個工具可以幹嘛

- ✅ **數字點名** — 完整支援。已經過無數次實際課堂驗收與打磨，是成熟、穩定的全自動完成版：偵測到點名 → 自動拿到點名碼 → 自動簽到，全程零操作。
- ✅ **雷達點名** — 完整支援。同樣經過大量實戰驗收，偵測到雷達點名後會自動完成定位簽到，不需要你開地圖、不需要對座標。
- ❌ **QR Code 點名** — 不支援。

關於 QR：這個工具的核心價值是**全自動、零操作**。QR 點名一定要先拿到當下那張動態 QR 的內容，而你只要人都已經能看到那張 QR 了，直接用官方 App 掃一下其實更快——再繞來用本工具就失去意義了。因為沒辦法做到真正的「自動」，所以 QR 不列入支援，這樣才不會讓你誤會它能幫你掛著自動簽到。

**支援的學校：東海大學 (THU)、淡江大學 (TKU)。** 兩校都走同一套登入與點名流程，數字、雷達都完整可用。

---

## 怎麼開始用

### 我只是想用（Windows，最簡單）

1. 到 Releases 下載 `THU_Auto_Rollcall-v1.2.2-alpha.1-windows-x64.zip`。
2. **整包解壓縮**到一個固定資料夾（不要在 zip 裡直接雙擊）。
3. 進到資料夾，執行 `auto-rollcall-thu-tronclass.exe`。

第一次啟動會在 exe 旁邊自動建立 `config.yaml`、`state/`、`log/` 三樣東西。程式一啟動就直接進入監控；**按任意鍵**就會用記事本打開 `config.yaml` 讓你填帳號密碼，存檔關掉記事本後它會自動重新讀取設定。

### 我想用原始碼跑（開發者）

裝好相依套件就能直接跑，不用自己打包：

```bash
python -m pip install -r requirements.txt
python -m troTHU.tron
```

就這樣。一樣是啟動即監控、按任意鍵用記事本開 `config.yaml`。

如果你要放在工作排程器或背景服務、不希望它監聽按鍵：

```bash
python -m troTHU.tron run --no-input
```

> 啟動後它**不會清螢幕、不會跳全螢幕介面**，只會在視窗裡一行一行印出目前在做什麼（正在登入、目前時段、偵測到點名、簽到成功…），讓你一眼看出它還活著。

---

## 設定檔教學（最重要的一步）

九成的人會卡在這裡，所以講仔細一點。

### 先說一個容易誤會的點

`config.yaml` 雖然副檔名是 `.yaml`，但它**其實不是標準 YAML**，而是這個專案自己設計、給人手動編輯用的超簡單格式（是的，副檔名取得有點名不符實，我們自己也吐槽過）。所以：

- 冒號後面**有沒有空格都可以**：`user:s123` 和 `user: s123` 都行。
- 學校**大小寫不分**：`THU`、`thu`、`東海` 都認得。
- 你**不需要**懂 YAML 縮排規則，照著下面的範例填就好。

一般使用者**只要改四塊**：`now`、`account`、`group`、`operating`。其他進階設定都放在另一個檔 `config.advanced.yaml`，平常完全不用碰。

### `config.yaml` 範例與逐塊說明

```text
now:(填帳號或 class A)

account:
  user:(帳號1)
  passwd:(密碼1)
  school:THU

  user:(帳號2)
  passwd:(密碼2)
  school:TKU

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

**`now`** — 現在要用哪個帳號。可以填某個帳號的學號（例如 `now:s1234567`），也可以填一個群組（例如 `now:class A`）。
> 小撇步：如果你整份 `account` 只填了一個有效帳號，`now` 可以**留空**，程式會自動用那一個，不會逼你再填一次。

**`account`** — 你的帳號清單，可以放很多組。每組三行：`user`（學號）、`passwd`（密碼）、`school`（`THU` 或 `TKU`）。

**`group`** — （進階／選用）把帳號分組。`class:A` 開一個叫 A 的群組，底下用 `user` 列出屬於這組的帳號。搭配 `now:class A` 一次套用整組設定。只有一個帳號的話這塊可以不用管。

**`operating`** — 上課時段，也就是「什麼時候才需要自動盯點名」。
- 星期是數字：**`0` = 星期日、`1` = 星期一 … `6` = 星期六**。
- `enable:true` 代表這天啟用。
- `range:` 底下用 `- 開始 - 結束` 列時段，**同一天可以列很多段**：

```text
operating:
  1:
    enable:true
    range:
    - 09:10 - 12:00
    - 13:20 - 17:30
```

（上面是「星期一 09:10–12:00 和 13:20–17:30 都自動盯點名」。）

### 改完設定後

填好帳密、存檔、關掉記事本，程式就會自動重新讀取。如果你改了 `now`，它會清掉目前的登入狀態並切換到新帳號或新群組。

填密碼那關如果你不想把明碼直接寫進 `config.yaml`，也可以改用環境變數、或安裝 `.[keyring]` 之後用系統金鑰圈保存（進階用法，見後面）。

### 常用設定指令

```bash
python -m troTHU.tron config show       # 看目前讀到的設定
python -m troTHU.tron config doctor      # 檢查設定有沒有問題
python -m troTHU.tron config advanced    # 用記事本打開 config.advanced.yaml
python -m troTHU.tron config compact --write   # 把舊版設定檔整理成新版兩檔（會先自動備份）
```

`config.advanced.yaml` 是真正的 YAML，放時區、number/radar 細部調整、Bot 設定等。例如：

```yaml
time:
  timezone: Asia/Taipei
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
- **時區排程**：`config.advanced.yaml` 裡可設 IANA 時區（如 `Asia/Taipei`），每天可有多個時段。
- **本機唯讀面板**：`python -m troTHU.tron app serve --open` 會在 localhost 開一個唯讀的小面板，只能「看」狀態（不會送點名、不會匯入 cookie、不會改帳號）。
- **環境自我檢查**：`python -m troTHU.tron doctor` 一鍵檢查環境、設定、登入來源是否正常。
- **狀態快照**：`python -m troTHU.tron status --json` 印出目前本機狀態。

---

## 原理：它到底是怎麼自動簽到的？

這段用白話講「為什麼做得到」。本質上，TronClass 這套系統把一些**本來不該讓學生拿到的東西，透過學生自己就能呼叫的 API 漏掉了**，這個工具就是把這些漏洞自動化而已。

### 數字點名：點名碼其實藏在 API 回應裡

老師按下數字點名後，會在螢幕投影一組四位數字要大家輸入。問題是：**學生端有一支 API（`student_rollcalls`）會直接把這組正確的點名碼回給你**。所以這個工具偵測到數字點名後，直接去讀那組碼、一發送出就完成——正常情況下一次點名只要極少的請求。

萬一哪天那支 API 不給碼了，還有後備方案：四位數字也才 0000–9999 一萬種，直接暴力試碼（有限流冷卻、不會把伺服器打爆），所以**不會退化、依然會成功**。

### 雷達點名：送一個「空答案」就過了

雷達點名理論上要驗證你的 GPS 座標在教室範圍內。但實測發現一個明確的伺服器漏洞：**對點名送出一個完全空的答案 `{}`（不帶任何座標），伺服器就直接把你判定為「到場」。** 這招實測 100% 成功，所以是預設、也是主力做法——送出後再回查一次確認真的簽到成功才算數。

> 後面那些定位演算法只是「萬一哪天空答案被擋下來」的保險：它會利用「座標答錯時伺服器會回傳你離目標多遠」這個特性，用多個點反推出教室的精確座標再送出；真的還不行就改用無限擴張的棋盤格掃過去，直到命中或點名結束。實務上幾乎輪不到它們出場。

### 為什麼 QR 做不到自動

QR 點名每次都是一張當下才產生的動態圖片，程式無法在「不靠人」的前提下取得它的內容。一旦需要你動手去拍、去貼，就不是全自動了——而你都能拿到 QR 了，直接用官方 App 掃更快。所以這不在本工具的目標範圍內。

---

## 技術細節（給想複製到其他學校的開發者）

TronClass / iLearn 是不少學校共用的系統，下面整理核心 API 與做法，方便其他同樣用 TronClass 的學校快速理解、自行實作。除了 THU / TKU，這套 runtime 也能套用在 **TronClass 公有雲官網**以及其他基於 TronClass 的學校（換掉 base URL 與登入流程即可）。

> 端點以 `{base}` 代表學校的 TronClass 網域（如 `https://ilearn.thu.edu.tw`）。所有請求都帶登入後的 session cookie。

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

備援解法把「距離」當觀測量，用最小平方法多點定位（WGS84）反推教室座標，再不行則無限棋盤格覆蓋。

### 程式結構速覽

- `troTHU/runtime_context.py`：中央樞紐，持有全域執行狀態，並把扁平的函式命名空間懶載入到各模組。新增要能用 `ctx.foo` 呼叫的函式時，要在這裡的 `_LEGACY_EXPORTS` 註冊。
- `troTHU/monitor_runtime.py`：預設的監控主迴圈（登入 → 依排程 → 偵測點名 → 分流）。
- `troTHU/number_runtime.py`、`troTHU/radar_runtime.py`：兩種點名的實作核心（上面的 API 就在這裡）。
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

- **不支援 QR Code 點名**（原因見上，與全自動目標衝突）。
- **Telegram 只做單向通知**，不接收指令。
- 預設的 Windows zip 是精簡包，不內建 Playwright、keyring、QR 影像解碼等選用功能；需要的話請用原始碼安裝對應 extras。

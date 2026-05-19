# Auto-Rollcall-thu-Tronclass
# 東海Tronclass自動點名

這個專案是目前版本的東海大學 TronClass / iLearn 點名監控工具。
它會使用帳號密碼登入學校單一登入流程，於指定時段內持續檢查點名狀態，並在符合條件時執行對應動作與通知。

> 請只在你有權限、且符合學校與課程規範的情境下使用本專案。

## 版本狀態：v1.0-alpha.3

`v1.0-alpha.3` 是一次變更範圍較大的 alpha 版本，主要整合 Gemini 分支中可正確運作的 radar 幾何定位流程。
這個版本已整理 README 與本地測試，但 radar 仍屬實驗性功能，尚未保證所有真實課堂點名情境都能成功。

如果你只是想要相對穩定的日常使用版本，建議優先使用上一個正式版 `v0.2.8`。
如果你願意協助驗證新功能，才建議嘗試 `v1.0-alpha.3`，並請特別留意 `log/` 裡的錯誤訊息。

這個 alpha 版本最重要的變動是：

- 將 Gemini 分支的 `radar` 幾何求解器整合為主要 radar 流程
- radar 會以外擴探測點取得距離，再用三/四點求解與候選座標重試
- 仍保留數字點名流程與重複點名略過機制
- 會嘗試從 `window.APPRuntime` 解析使用者 ID，供 radar beacon 計算使用
- beacon 模式會送出 `md5,timestamp` 格式的 `radarSignal`
- 偵測到 TLS / SSL 憑證鏈驗證失敗時，會自動停用 `config.verify_ssl` 並重試登入或監控
- `QR Code` 點名仍未自動化
- 目前尚未完成真實課堂環境的完整測試

## Windows 壓縮包使用說明

如果你只是想在 Windows 上直接使用，請優先下載 Release 裡的壓縮包，不需要先安裝 Python，也不需要自己打包。

Release 檔名格式會像這樣：

```text
THU_Auto_Rollcall-vx.y.z-windows-x64.zip
```

其中 `vx.y.z` 是版本號，例如 `v0.2.8` 或 `v1.0-alpha.3`。`windows-x64` 代表這份壓縮包是給 64 位元 Windows 使用。

### 下載哪一個檔案

請到 GitHub 頁面的 `Releases`，下載名稱類似 `THU_Auto_Rollcall-v0.2.8-windows-x64.zip` 或 `THU_Auto_Rollcall-v1.0-alpha.3-windows-x64.zip` 的檔案。

不要下載 GitHub 自動產生的 `Source code (zip)` 或 `Source code (tar.gz)`，那是原始碼壓縮包，給開發者使用，不是一般使用者直接執行的版本。

如果 Release 標示為 `Pre-release`，代表它是測試性版本，可能包含尚未完整驗證的新功能。
`v1.0-alpha.3` 屬於 alpha 測試路線；若你不想承擔測試風險，請改用最新正式版。

### 第一次使用

1. 將 `THU_Auto_Rollcall-vx.y.z-windows-x64.zip` 下載到電腦。
2. 對 zip 按右鍵，選擇「全部解壓縮」或用 7-Zip / WinRAR 解壓縮。
3. 建議解壓縮到固定資料夾，例如：

```text
C:\Users\你的使用者名稱\Documents\THU_Auto_Rollcall\
```

4. 不要直接在 zip 壓縮檔裡面雙擊執行，請先完整解壓縮。
5. 打開解壓縮後的資料夾，找到裡面的 `.exe` 檔並雙擊執行。新版打包通常會看到 `auto-rollcall-thu-tronclass.exe`，早期包可能會看到 `THU_Auto_Rollcall.exe`。
6. 第一次啟動時，如果程式找不到可用帳密，會在終端機中請你輸入學號與密碼。
7. 程式可能會詢問是否將學號與密碼寫入 `config.yaml`，如果你選擇寫入，下次啟動就可以自動讀取。

如果雙擊 `.exe` 後視窗一閃而過，請在解壓縮後的資料夾空白處按右鍵，選擇「在終端機中開啟」或「開啟 PowerShell 視窗」，再輸入 `.exe` 檔名執行。這樣錯誤訊息會留在畫面上，比較方便判斷發生什麼事。

### config.yaml 在哪裡

使用 Windows 壓縮包時，`config.yaml` 會放在 `.exe` 同一層資料夾。你可以用記事本或 VS Code 打開它。

最基本會看到這樣的帳號設定：

```yaml
account:
  user: "你的學號"
  passwd: "你的密碼"
```

如果你不想把密碼存進 `config.yaml`，可以不要寫入，改用環境變數 `TRON_USER` / `TRON_PASS`。不過對完全新手來說，先用 `config.yaml` 會比較直覺。

請注意：`config.yaml` 可能會明文保存你的學號與密碼。不要把它傳給別人，不要截圖公開，也不要把填好帳密的資料夾整包上傳到網路。

### 執行後會發生什麼事

程式啟動後會嘗試登入 TronClass / iLearn，然後依照 `config.yaml` 裡的 `operating` 設定持續監控點名。

預設設定會讓每週七天都啟用，時間範圍是 `00:00` 到 `00:00`。在本專案裡，開始時間和結束時間相同代表全天監控。

如果你想只在特定時段監控，可以修改 `config.yaml` 裡的 `operating`。例如只想星期一 09:00 到 17:00 啟用：

```yaml
operating:
  0:
    enable: true
    range: ["09:00", "17:00"]
```

`range` 也可以寫成較直覺的字串格式：

```yaml
operating:
  0:
    enable: true
    range: "09:00-17:00"
```

其中 `0` 代表星期一，`6` 代表星期日。

### 日誌在哪裡

程式執行後會在 `.exe` 同一層建立 `log/` 資料夾。裡面可能包含執行狀態、錯誤訊息、點名檢查結果等 JSON Lines 日誌。

如果程式行為怪怪的，可以先看 `log/` 裡最新的 `.jsonl` 檔案。請注意，日誌可能包含回應摘要或點名資訊，分享給別人前請先檢查內容。

### Windows 安全提示

因為這個 `.exe` 是由 PyInstaller 打包，而且不是大型公司簽章的商業軟體，Windows SmartScreen 或防毒軟體可能會跳出提醒。這不一定代表程式有病毒，但也不應該直接忽略。

建議你先確認：

- 檔案是從本專案 GitHub Release 下載的
- 檔名符合 `THU_Auto_Rollcall-vx.y.z-windows-x64.zip`
- 解壓縮後的資料夾內容沒有被你不認識的第三方修改過

如果你不確定來源，請不要執行。若你是在可信任的 Release 頁面下載，且了解本專案用途，再自行決定是否允許執行。

## 目前版本重點

- 使用 `aiohttp` 非同步執行登入、輪詢與通知流程
- 自動解析登入頁表單欄位並建立 session
- 在指定星期 / 時段內持續監控點名狀態
- session 過期時可自動重新登入
- 預設使用 `config.yaml` 明文保存帳密，也支援 `TRON_USER` / `TRON_PASS` 覆蓋
- 預設啟用 HTTPS / TLS 憑證驗證，並加入較相容的校園憑證鏈驗證設定
- 支援 Telegram / Discord 通知
- 目前已實作數字點名流程
- 數字點名期間會持續顯示進度，找到 Code 後會以醒目框線顯示
- `radar` 點名目前以 Gemini 幾何求解器作為主要流程，但 `v1.0-alpha.3` 尚未經完整實機測試
- `QR Code` 目前會明確標示為未支援，不會誤送答案
- 檔案日誌已改為 JSON Lines 結構化日誌
- 通知逾時 / 送出失敗會被隔離，不會反過來中斷主監控流程
- **目前版本沒有使用 Tesseract-OCR，也不需要 OCR 依賴**

## 專案結構

```text
.
├─ troTHU/
│  ├─ tron.py             # 主流程：設定、登入、輪詢、通知、CLI
│  ├─ radar_solver.py     # radar 場域投影、探測點配置與三/四點定位求解
│  └─ tron_http.py        # HTTP 層：登入表單解析、session 判斷、API 包裝
├─ tests/                 # 單元測試與手動驗證腳本
├─ log/                   # 執行後輸出的日誌
├─ config.yaml            # 執行設定
├─ requirements.txt       # Python 依賴
└─ auto-rollcall-thu-tronclass.spec # PyInstaller 打包設定
```

## 系統需求

使用 Windows Release 壓縮包時：

- Windows 64 位元系統
- 可連線至學校登入系統與 iLearn / TronClass
- 不需要事先安裝 Python

從原始碼執行或開發時：

- Python 3.8+
- Windows、macOS 或 Linux
- 可連線至學校登入系統與 iLearn / TronClass

目前 Python 依賴只有：

- `aiohttp`
- `PyYAML`

## 開發者 / 從原始碼執行

以下方式適合想看原始碼、修改程式、跑測試，或不使用 Windows 壓縮包的人。如果你只是一般 Windows 使用者，請優先看最上方的「Windows 壓縮包使用說明」。

### 安裝依賴

1. 建立虛擬環境

```bash
python -m venv .venv
```

2. 啟用虛擬環境

Windows PowerShell:

```powershell
.venv\Scripts\Activate.ps1
```

macOS / Linux:

```bash
source .venv/bin/activate
```

3. 安裝依賴

```bash
pip install -r requirements.txt
```

## 設定檔

請編輯根目錄下的 `config.yaml`。

### 最基本要填的欄位

```yaml
account:
  user: "你的學號"
  passwd: "你的密碼"
```

預設最簡單的方式就是直接填入 `config.yaml`。
如果你不想把密碼留在檔案裡，也可以改用環境變數覆蓋：

```bash
TRON_USER=你的學號
TRON_PASS=你的密碼
```

### 主要設定說明

#### `account`

- `user`: 登入帳號
- `passwd`: 登入密碼，預設會明文保存在 `config.yaml`

#### `config`

- `Senkaku`: 輪詢間隔秒數，最小值會被限制為 `0.1`
- `enable_log`: 是否寫入日誌
- `retries`: 連續錯誤可容忍次數，最小值會被限制為 `1`
- `http_timeout`: TronClass 主流程 HTTP timeout 秒數，預設 `20`
- `notification_timeout`: Telegram / Discord 通知 timeout 秒數，預設 `10`
- `verify_ssl`: 是否驗證 HTTPS / TLS 憑證，預設為 `true`；啟用時會使用較相容的憑證鏈驗證設定
- `user-agent`: 可輪替使用的 User-Agent 清單

#### `radar`

`radar` 是實驗性功能，僅適合你有權回應該點名且已理解課程規範時使用。`v1.0-alpha.3` 會把設定中的場域座標轉成局部 ENU 公尺座標，再用外擴探測點取得距離，最後以三/四點最小平方法與候選座標重試來尋找可接受座標。

- `boundary_points`: 場域邊界座標，預設是目前整理出的四點凸包
- `allow_outside_probe`: 是否允許探測點放在邊界外，預設 `true`
- `outside_scale`: 外擴探測三角形的尺度，預設 `1.6`
- `max_distance_probes`: 距離探測上限，預設 `4`
- `max_final_attempts`: 最終候選座標送出上限，預設 `100`
- `final_precision_min` / `final_precision_max`: 最終座標小數位掃描範圍
- `final_grid_step_meters`: 方格候選的格距，預設 `5.0`
- `final_grid_radius_meters`: 方格候選從估計座標向外延伸的距離，預設 `20.0`

如果伺服器回傳 `radar_out_of_rollcall_scope`，程式會讀取其中的 `distance` 作為定位資料。若該點名需要 beacon，程式會使用 `beacon_nonce + deviceId + user_id + timestamp` 產生 MD5，並以 `md5,timestamp` 格式送出 `radarSignal`。

#### `notifications.tg`

- `enable`: 是否啟用 Telegram 通知
- `key`: Bot token，可填純 token，程式會自動補上 `bot` 前綴
- `chat`: chat id

#### `notifications.dc`

- `enable`: 是否啟用 Discord 通知
- `key`: Bot token
- `chat`: channel id

#### `operating`

控制每週各天是否啟用監控，以及啟用時間區間。
預設產生的設定檔是 `00:00-00:00` 且每週七天都啟用，等同 `24/7` 持續監控。
`range` 支援 `["09:00", "17:00"]`、`"09:00-17:00"`、`"09:00 ~ 17:00"` 等格式。
如果開始時間晚於結束時間，例如 `"23:00-01:00"`，會視為跨午夜時段。

程式使用的是 Python `datetime.weekday()` 規則：

- `0 = Monday`
- `1 = Tuesday`
- `2 = Wednesday`
- `3 = Thursday`
- `4 = Friday`
- `5 = Saturday`
- `6 = Sunday`

請特別注意這個索引規則，不要把 `0` 誤當成星期日。

範例：

```yaml
operating:
  0:
    enable: true
    range: ["09:00", "17:00"]
  1:
    enable: true
    range: ["09:00", "17:00"]
  2:
    enable: true
    range: ["09:00", "17:00"]
  3:
    enable: true
    range: ["09:00", "17:00"]
  4:
    enable: true
    range: ["09:00", "17:00"]
  5:
    enable: true
    range: ["09:00", "17:00"]
  6:
    enable: true
    range: ["09:00", "17:00"]
```

### 執行方式

建議從專案根目錄執行：

```bash
python -m troTHU.tron
```

啟動後程式會：

1. 載入 `config.yaml`
2. 依序從互動式覆寫、環境變數、`config.yaml` 嘗試取得憑證
3. 嘗試自動登入
4. 依據 `operating` 設定決定是否進入監控
5. 週期性檢查點名狀態
6. 在需要時送出通知
7. 接受終端機輸入以切換帳號

CLI 介面支援：

- 直接輸入新學號切換帳號
- 輸入密碼
- 決定是否將學號與密碼寫回 `config.yaml`
- 輸入 `exit` 結束程式

## 目前行為與限制

### 已完成

- 自動登入
- session cookie 檢查
- 點名狀態輪詢
- 數字點名流程
- 自動重新登入
- Telegram / Discord 通知
- `TRON_USER` / `TRON_PASS` 覆蓋式憑證讀取
- 實驗性的 `radar` 幾何定位流程：外擴探測、三/四點求解、候選座標重試
- 未支援 `QR Code` 類型的明確通知與停用
- JSON Lines 結構化日誌
- 基本錯誤重試與日誌輸出
- 通知逾時 / 非 2xx 回應隔離
- 離線整合測試與本地假服務驗證流程

### 尚未完成

- `QR Code` 點名自動完成
- `radar` 點名的真實課堂情境完整驗證

### 已知注意事項

- 預設會將密碼明文保存在 `config.yaml`，請勿提交真實憑證；若不想明文保存，可改用 `TRON_USER` / `TRON_PASS`
- 互動式 CLI 目前輸入密碼時仍會在終端機回顯；若在共享螢幕或錄影環境操作，請特別留意
- 日誌會以 `.jsonl` 形式寫入 `log/`，可能包含回應摘要與點名資訊
- `v1.0-alpha.3` 的 `radar` 流程已改用 Gemini 幾何求解器，但尚未經完整實機驗證；若遇到失敗，請優先保留 `log/` 供後續排查
- `radar` 流程會嘗試送出裝置 ID、經緯度與必要時的 `md5,timestamp` beacon 訊號；不同課堂或學校端 API 行為若有差異，可能仍需要調整
- 預設會驗證 HTTPS / TLS 憑證；若登入或監控時偵測到憑證鏈驗證失敗，程式會自動把 `config.verify_ssl` 改成 `false` 並重試
- 通知送出使用獨立 timeout；若 Telegram / Discord 暫時異常，主監控流程仍會繼續執行
- 若 `config.yaml` 損毀，程式會先備份原檔，再自動重建預設設定；若目錄不可寫，則退回本次執行用的內建預設值
- 登入頁表單解析依賴目前學校登入頁 HTML 結構；若登入頁改版，`troTHU/tron_http.py` 可能需要調整

## 測試

### 單元測試

目前較穩定的是本地單元測試：

```bash
python -m unittest tests.test_radar_solver tests.test_tron_unit tests.test_tron_http tests.test_tron_integration -v
```

測試涵蓋：

- 登入頁表單解析
- session cookie 判斷
- 登入成功 / 失敗流程
- 點名狀態判斷
- 監控迴圈的重試與重新登入行為
- `radar` 幾何求解、點名選取、觸發、失敗重試與重複略過邏輯
- `radarSignal` 的 `md5,timestamp` beacon 格式
- APPRuntime 使用者 ID 解析
- 憑證優先順序與 `config.yaml` 明文保存
- 結構化日誌輸出
- 本地假服務下的登入 / 輪詢整合流程

### 手動驗證腳本

`tests/` 目錄下另外保留了一批手動驗證腳本，包含 Python 與 JavaScript 版本。
這些腳本通常需要先設定環境變數：

```bash
TRON_USER=你的學號
TRON_PASS=你的密碼
```

常見用途包含：

- 驗證登入流程
- 檢查 session cookie 是否存在
- 試讀點名 API 或課程 API
- 檢查 `window.APPRuntime` 是否能解析出使用者 ID

這些檔案比較偏向冒煙測試 / 研究 / 偵錯用途，不等同正式測試框架。

## 打包

專案附有 PyInstaller 設定檔 `auto-rollcall-thu-tronclass.spec`。

如果你要產生可執行檔，可先安裝 PyInstaller，再執行：

```bash
pyinstaller auto-rollcall-thu-tronclass.spec
```

## 專案現況

這個專案最早來自原作者版本，但目前文件與說明已改為對應接手後的現行實作。
如果你正在閱讀的是最新版本，建議直接以目前的程式碼結構理解它，而不要參考舊版 README 對 OCR 或舊流程的描述。

目前幾個最重要的現況如下：

1. 舊 README 提到的 OCR / Tesseract 已不符合目前實作
2. 目前 HTTP 邏輯已集中在 `troTHU/tron_http.py`
3. 主流程控制在 `troTHU/tron.py`
4. `tests/` 裡保留了不少手動探索腳本，可作為登入流程改版時的偵錯工具
5. 若學校登入頁或 API 結構變動，優先檢查：
   - 登入表單 `action`
   - hidden inputs（隱藏欄位）是否改名
   - session cookie 是否仍為 `session`
   - 點名 API 回傳 JSON 結構是否變動

## 建議下一步

如果要把這個專案整理成更好維護的版本，推薦優先做：

1. 針對 `v1.0-alpha.3` 的 `radar` 幾何求解流程做真實環境測試，確認距離回傳、beacon、MD5 timestamp 與使用者 ID 行為是否符合預期
2. 釐清 `QR Code` 點名資料流，決定是否可安全自動化
3. 改善憑證處理體驗，例如隱藏 CLI 密碼輸入、降低把真實憑證留在工作樹的風險
4. 將結構化日誌接到外部分析或告警流程
5. 為打包與測試加入 CI

---

目前這份 README 的目標不是宣傳，而是讓打開這個專案的人能快速知道：

- 這個版本真的做了什麼
- 哪些文件已經過時
- 入口點在哪裡
- 要去哪裡改登入、點名、通知和排程邏輯

> 本專案使用Gemini、Codex協助完成。

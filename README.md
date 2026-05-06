# auto-rollcall-thu-tronclass

這個專案是目前版本的東海大學 TronClass / iLearn 點名監控工具。
它會使用帳號密碼登入學校單一登入流程，於指定時段內持續檢查點名狀態，並在符合條件時執行對應動作與通知。
目前這份 README 已依接手維護後的現行程式碼與實際功能重寫，不再沿用舊版說明。

> 請只在你有權限、且符合學校與課程規範的情境下使用本專案。
> 這份 README 以目前程式碼實作為準，已移除過時資訊。

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
- `radar` / `QR Code` 目前會明確標示為未支援，不會誤送答案
- 檔案日誌已改為 JSON Lines structured logging
- 通知逾時 / 送出失敗會被隔離，不會反過來中斷主監控流程
- **目前版本沒有使用 Tesseract-OCR，也不需要 OCR 依賴**

## 專案結構

```text
.
├─ troTHU/
│  ├─ tron.py             # 主流程：設定、登入、輪詢、通知、CLI
│  └─ tron_http.py        # HTTP 層：登入表單解析、session 判斷、API 包裝
├─ tests/                 # 單元測試與手動驗證腳本
├─ log/                   # 執行後輸出的日誌
├─ config.yaml            # 執行設定
├─ requirements.txt       # Python 依賴
└─ auto-rollcall-thu-tronclass.spec # PyInstaller 打包設定
```

## 系統需求

- Python 3.8+
- Windows、macOS 或 Linux
- 可連線至學校登入系統與 iLearn / TronClass

目前 Python 依賴只有：

- `aiohttp`
- `PyYAML`

## 安裝

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

## 執行方式

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
- 未支援 `radar` / `QR Code` 類型的明確通知與停用
- JSON Lines structured logging
- 基本錯誤重試與日誌輸出
- 通知逾時 / 非 2xx 回應隔離
- 離線整合測試與本地假服務驗證流程

### 尚未完成

- `radar` 點名自動完成
- `QR Code` 點名自動完成

### 已知注意事項

- 預設會將密碼明文保存在 `config.yaml`，請勿提交真實憑證；若不想明文保存，可改用 `TRON_USER` / `TRON_PASS`
- 互動式 CLI 目前輸入密碼時仍會在終端機回顯；若在共享螢幕或錄影環境操作，請特別留意
- 日誌會以 `.jsonl` 形式寫入 `log/`，可能包含回應摘要與點名資訊
- 預設會驗證 HTTPS / TLS 憑證；若校方憑證鏈仍與你所在環境不相容，才建議把 `config.verify_ssl` 改成 `false`
- 通知送出使用獨立 timeout；若 Telegram / Discord 暫時異常，主監控流程仍會繼續執行
- 若 `config.yaml` 損毀，程式會先備份原檔，再自動重建預設設定；若目錄不可寫，則退回本次執行用的內建預設值
- 登入頁表單解析依賴目前學校登入頁 HTML 結構；若登入頁改版，`troTHU/tron_http.py` 可能需要調整

## 測試

### 單元測試

目前較穩定的是本地單元測試：

```bash
python -m unittest tests.test_tron_unit tests.test_tron_http tests.test_tron_integration -v
```

測試涵蓋：

- 登入頁表單解析
- session cookie 判斷
- 登入成功 / 失敗流程
- 點名狀態判斷
- 監控迴圈的重試與重新登入行為
- 憑證優先順序與 `config.yaml` 明文保存
- structured logging 輸出
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

這些檔案比較偏向 smoke / 研究 / 偵錯用途，不等同正式測試框架。

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
   - hidden inputs 是否改名
   - session cookie 是否仍為 `session`
   - 點名 API 回傳 JSON 結構是否變動

## 建議下一步

如果要把這個專案整理成更好維護的版本，推薦優先做：

1. 補上 `radar` 點名的協定研究與實作驗證
2. 釐清 `QR Code` 點名資料流，決定是否可安全自動化
3. 改善憑證處理體驗，例如隱藏 CLI 密碼輸入、降低把真實憑證留在工作樹的風險
4. 將 structured logging 接到外部分析或告警流程
5. 為打包與測試加入 CI

---

目前這份 README 的目標不是宣傳，而是讓打開這個專案的人能快速知道：

- 這個版本真的做了什麼
- 哪些文件已經過時
- 入口點在哪裡
- 要去哪裡改登入、點名、通知和排程邏輯

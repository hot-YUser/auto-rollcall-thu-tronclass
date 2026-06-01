# Release Notes — v1.2.1-beta.1

**首個對外 Beta（也是久違的一次正式 Release）。** 本份說明涵蓋自上一個正式版 **v0.2.8** 以來的所有變更。

v0.2.8 當時只支援**東海大學 (THU)**、只有**數字點名**，雷達與 QR 都還明確標示為「不支援」。這段期間專案幾乎重寫了一遍：雷達點名從零到完整、新增學校、設定檔重構、聊天 Bot 強化，並把開發過程中堆積的內部包袱清乾淨。

---

## 重點亮點

- **雷達點名：從「不支援」變成完整、預設一發即過。** 主力做法是利用伺服器端漏洞——送出一個空答案即被判定到場，實測穩定可靠；另備有距離多點定位與無限棋盤格覆蓋作為保險。
- **數字點名：新增「直接讀碼」。** 直接從學生端 API（`student_rollcalls`）讀出當次點名碼後單發送出，正常情況一次點名只需極少請求；讀不到時自動退回暴力猜碼，確保不退化。
- **新增支援學校：淡江 (TKU) 與 TronClass 公有雲官網。** 原本只有東海 (THU)。三者共用同一套點名 runtime。
- **設定檔大改版。** 拆成超簡單的 `config.yaml`（只有 `now`/`account`/`group`/`operating`）與進階用的 `config.advanced.yaml`；按任意鍵用記事本編輯、關閉後自動重載；提供一鍵遷移舊設定。
- **監控輸出整理。** 單一視窗逐行印出事件，不清螢幕、不跳全螢幕介面，隨時看得出程式還活著。
- **聊天 Bot 大幅完善。** Discord（推薦 HTTP Interactions）、LINE、Telegram 單向通知都可用。

---

## 詳細變更

### 點名核心
- 新增**雷達點名**完整支援：預設空答案策略（送出後回查 `on_call_fine` 狀態確認才採信）；備援為 WGS84 全球距離多點定位，再不行則無限擴張棋盤格覆蓋直到命中或點名結束。
- 新增**數字點名直接讀碼**（旗標 `number.direct_code_lookup`，預設開）：讀 `student_rollcalls` 的 `number_code` 後單發提交。
- 數字暴力猜碼後備強化：批次併發、限流（429/5xx）冷卻、自動降併發，避免硬衝。
- 修正會重複處理已完成數字點名的問題。

### 學校與登入
- 新增**淡江 (TKU)**：iClass SSO 走 HTTP fast path（模擬 SSO 表單、ImageValidate、redirect），登入後以 API 驗證 session；fast path 失敗時，原始碼環境可自動回退到 Playwright 瀏覽器輔助登入。
- 新增 **TronClass 公有雲官網**：`/login?login=email` 的 email/密碼登入，取得 session 後共用 TronClass API。
- 改善 TLS / SSL 相容性與後備處理。
- 強化 session 復原與登入失敗的處理流程。

### 設定與使用體驗
- `config.yaml` 重構為對空格寬容、大小寫不敏感的極簡人類格式；進階項目移到 `config.advanced.yaml`（標準 YAML）。
- 按任意鍵用記事本開啟設定、關閉即重新載入；改 `now` 會自動切換帳號或群組。
- 只有單一有效帳號時 `now` 可留空，自動採用該帳號。
- 多帳號、群組（`class`）、每日多時段排程、IANA 時區設定。
- `config compact`：一鍵把舊版設定整理成新版兩檔（會先自動備份）。

### 聊天 Bot 與通知
- Discord：推薦 **HTTP Interactions** 部署（含 `discord-schema` / `discord-sync`）；另保留選用的 Gateway 模式。
- LINE：webhook 簽章驗證、reply 與推播；token/密鑰只從環境變數讀取。
- Telegram：單向通知 sink 與帳號綁定（不接收指令）。
- 提供 generic webhook 本機測試入口。

### 打包與發布
- 預設 Windows zip 改為**精簡包**：不內建 Playwright、keyring、QR 影像解碼（OpenCV/Pillow）等選用功能，包體更小、誤判更少。
- 新增環境與發布診斷：`doctor`、`status`、`package-check`、`release-check`、`release-build`。
- 強化 Git hygiene 與發布 artifact 安全檢查（避免把本機機密誤打包）。

### 內部清理
- 移除開發過程中遺留、對使用者沒有意義的內部「驗收／限制」工具：包含 `validation` 系列指令、provider 的 `verify-checklist` / `ready-gate` / `fixture` 等 CLI 與其底層模組，以及相關欄位與面板。專案因此更乾淨、更專注在「自動點名」本身。
- 研究／擷取相關功能改為**全部明確 opt-in、預設關閉**，並移除先前預設開啟、未脫敏的點名擷取；日常執行只保留經脫敏的紀錄。

### 穩定性
- 監控主迴圈強化，通知使用獨立 timeout（通知暫時異常不會中斷主流程）。
- 排程時段範圍解析快取等小幅優化。

---

## 已知限制
- **不支援 QR Code 點名。** QR 需要當下動態圖片的內容，無法在不靠人操作的前提下取得；而能取得 QR 的情境下直接用官方 App 更快，與本工具「全自動、零操作」的目標衝突，因此不列入支援。
- **Telegram 僅單向通知**，不接收指令。

## 升級提醒
- 從舊版升級：執行 `python -m troTHU.tron config compact --write`，會先備份舊 `config.yaml` 再轉成新版的 `config.yaml` + `config.advanced.yaml`。
- 預設 Windows 精簡包不含選用功能；需要瀏覽器輔助登入、金鑰圈或 QR 影像解碼時，請改用原始碼安裝對應 extras。

---

> ⚠️ 請只在你自己有權限、且符合學校與課程規範的情況下使用。不要分享填好帳密的 `config.yaml`、cookie 或任何本機 `state/`、`log/` 內容。

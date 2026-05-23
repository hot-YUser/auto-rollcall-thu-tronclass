# 個人資料去識別化說明（PII Redaction Notice）

本資料夾是 TronClass LMS 前端的靜態鏡像 + 逆向分析的**公開版**。發佈前已對**所有個人資料**做去識別化，並在**不影響逆向價值**的前提下完成。

## 已移除（置換為佔位字）

| 類別 | 佔位字 | 範圍 |
| --- | --- | --- |
| 姓名（學生／老師／職員／管理員） | `[REDACTED_NAME]` | 人物物件的 name/nickname/real_name/display_name/user_name |
| Email | `[REDACTED_EMAIL]` | 所有 email/mail 欄位與頁面可見信箱 |
| 學號／帳號 | `[REDACTED_USER_NO]` | user_no/account/login_name/sis_id… |
| 電話 | `[REDACTED_PHONE]` | mobile_phone/phone/fax… |
| 使用者數字 ID | `[REDACTED_USER_ID]` | 登入者 user id（HTML 的 `data-id`/`userId`/`ng-prop-user_id` 等各種寫法）與人物物件的 `id`（→ `0`） |
| 頭像 upload ID | `[REDACTED]` / `[REDACTED_AVATAR_ID]` | `/api/uploads/<id>/modified-image` 內的數字 |
| 身分證／性別／社群帳號 | `[REDACTED_*]` / `null` | identity_number、sex、line_id/wechat_id… |

涵蓋面：`*_frontend_dump/raw/**/*.{html,json}`（含登入後快照、API 回應）與衍生索引中夾帶原始片段的欄位（`api_occurrences`、`browser_surfaces`、`technologies` 的 context/evidence/snippet）。

## 刻意保留（屬於逆向價值，非個資）

- 機構/系所/課程/分類/年級/角色等**結構性名稱**（如「淡江大學」「資訊管理學系」「Student」）。
- 課程/系所/機構等**結構性數字 ID**、URL 與 `course/<id>/` 路徑、`/api/uploads/{id}/...` 端點樣式。
- 全部 JS/CSS bundle、`readable_js/`、API/路由/技術/bundle 等索引——皆與原始**逐位元組相同**。
- HTML 的 AngularJS 結構、`<script>/<link>`、`version=`/`host=` 等。

## 驗證

- 對公開副本掃描原始姓名（含 `\u` 跳脫形式）、學號、Email、登入者 user id/頭像 id：**殘留 0**。
- 衍生索引僅 10 個夾帶原始片段的檔案被改動，其餘索引與所有 bundle **雜湊一致**。
- 抽查 HTML 結構標記（`ng-*`、`<script>`、`/api/`、`/static/`、`data-id=`）數量在遮蔽前後**完全一致**——只有「值」被遮蔽，結構未動。

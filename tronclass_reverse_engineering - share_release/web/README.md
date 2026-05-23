# 網頁端逆向成果入口

本區包含兩個 TronClass 部署的前端成果：淡江 iClass 與東海 iLearn。兩者是同一套產品的不同部署，功能與 SSO 設定略有差異。

## 閱讀順序

1. `iclass/REPORT.md` 或 `ilearn/REPORT.md`
2. `data/api_endpoints.csv`、`data/routes.csv`、`data/browser_surfaces.json`
3. `readable_js/` 中的入口與大型 bundle
4. 必要時回到 `raw/` 對照 HTML、JS、CSS 與 API 快照

## 兩份成果

| 目錄 | 部署 | 重點 |
| --- | --- | --- |
| `iclass/` | `iclass.tku.edu.tw` | 淡江 iClass 前端結果 |
| `ilearn/` | `ilearn.thu.edu.tw` | 東海 iLearn 前端結果 |

兩份 `data/` schema 相同，適合直接比較 API、路由、bundle、外部 URL 與 browser surface 差異。


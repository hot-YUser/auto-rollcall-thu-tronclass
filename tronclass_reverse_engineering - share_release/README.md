# TronClass 逆向成果分享版

這份資料夾是可分享的結果版，只保留網頁端與 Android APP 的逆向結果、索引資料、閱讀入口與限制說明；不包含產生方式或實作細節。

## 入口

| 範圍 | 主要入口 | 內容 |
| --- | --- | --- |
| 網頁端總覽 | `web/README.md` | iClass 與 iLearn 的前端成果入口 |
| iClass 前端 | `web/iclass/REPORT.md` | API、路由、技術依賴、browser surface、外部連結與閱讀用 JS |
| iLearn 前端 | `web/ilearn/REPORT.md` | API、路由、技術依賴、browser surface、外部連結與閱讀用 JS |
| Android APP | `app/REPORT.md` | APP 架構、權限、元件、WebView、native library 與索引入口 |
| 個資處理 | `PRIVACY_NOTICE.md` | 去識別化範圍與保留項目 |
| 檔案清單 | `PUBLIC_FILE_MANIFEST.txt` | 分享版包含的所有檔案 |

## 結構

- `web/iclass`、`web/ilearn`
  - `REPORT.md`：結果分析入口。
  - `data/`：API、路由、技術依賴、外部 URL、browser surface 等結構化索引。
  - `raw/`：前端資產與頁面快照。
  - `readable_js/`：100 個最大或入口 JS 的閱讀用展開版本。
- `app`
  - `REPORT.md`：APP 逆向結果入口。
  - `indexes/`：權限、元件、URL/domain、WebView bundle、關鍵字與 native 摘要索引。
  - `source/`：Android source/resource 閱讀視圖。
  - `package_view/`：Manifest、resources、assets、smali 與 split package 視圖。
  - `webview_modules/`：APP 內 WebView bundle 的模組化與閱讀用視圖。
  - `native_analysis/`：native library strings、symbols、JNI 候選、disassembly 與 C-like pseudocode。

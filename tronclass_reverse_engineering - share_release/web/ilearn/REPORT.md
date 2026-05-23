# iLearn THU 前端逆向結果與分析

本文件是分享版分析入口，只保留可閱讀的逆向結果、資料索引與限制說明。

## 1. 結論摘要

本資料集保留可核對的前端逆向結果：靜態資源盤點、Webpack runtime/lazy chunk 完整性、入口 HTML、API/路由、框架與第三方依賴、瀏覽器儲存與通訊面，以及後續分析入口。

需要注意的是，伺服器沒有提供可用的 source map，因此無法百分之百還原開發時期的原始檔案名稱、私有變數名、註解與完整目錄結構。目前保留的是閱讀用 bundle 展開、模組/路由/API 索引與語意分類；這是沒有 source map 時可合理完成的前端逆向層級。

| 項目 | 結果 |
| --- | --- |
| Manifest 總筆數 | 2197 |
| HTTP 狀態分布 | 200: 1660, 400: 12, 403: 34, 404: 370, 500: 121 |
| 靜態資源 200 | 1411 / 1411 |
| JS/CSS | 881 JS, 266 CSS |
| Webpack runtime 推導資源缺漏 | 0 |
| 外部 source map | 0 |
| 內嵌 sourcemap 片段 | 6 |
| 高度壓縮 JS | 878 / 881 |

## 2. 產物索引

| 產物 | 位置 |
| --- | --- |
| 總覽 JSON | data/summary.json |
| 全部資產 | data/assets.csv / data/assets.json |
| JS/CSS bundle | data/bundles.csv / data/bundles.json |
| Webpack lazy chunks | data/webpack_runtime_assets.csv / data/webpack_runtime_assets.json |
| API endpoints | data/api_endpoints.csv / data/api_endpoints.json |
| 路由/頁面路徑 | data/routes.csv / data/routes.json |
| HTML 入口 | data/html_entrypoints.csv / data/html_entrypoints.json |
| 技術依賴 | data/technologies.json |
| 儲存/通訊/安全面 | data/browser_surfaces.json |
| 外部 URL | data/external_urls.csv / data/external_urls.json |
| 閱讀用 JS | readable_js/ / data/readable_js.csv |

## 3. 架構判讀

- 入口 HTML 仍保留大量 AngularJS 樣板語法，例如 `ng-app`、`ng-controller`、`ng-href`。
- 主要現代前端資源由 Webpack 打包，runtime 以 `webpackChunklms`、`o.u`、`miniCssF` 管理 JS/CSS lazy chunks。
- 系統不是可純離線執行的靜態站，啟動時會讀 `/org/global-config`，登入後頁面也依賴大量 `/api/...`。
- 有新舊框架共存跡象：AngularJS 模板、Vue/VueResource、Ant Design Vue/iView 類 UI 元件、MathJax、Ace/編輯器、Sentry/GA 等。

### 技術依賴證據

| 技術/套件 | 命中數 | 檔案數 | 檔案樣本 |
| --- | --- | --- | --- |
| Webpack | 2084 | 877 | raw/ilearn.thu.edu.tw/static/10035.853f7abc.js; raw/ilearn.thu.edu.tw/static/10067.39ff48db.js; raw/ilearn.thu.edu.tw/static/10188.0cd009aa.js; raw/ilearn.thu.edu.tw/static/10242.1acb04a8.js; raw/ilearn.thu.edu.tw/static |
| React | 3823 | 682 | raw/ilearn.thu.edu.tw/chatbot/chatbot.umd.js; raw/ilearn.thu.edu.tw/static/10035.853f7abc.js; raw/ilearn.thu.edu.tw/static/10067.39ff48db.js; raw/ilearn.thu.edu.tw/static/10188.0cd009aa.js; raw/ilearn.thu.edu.tw/static/1 |
| Vue | 7681 | 409 | raw/ilearn.thu.edu.tw/chatbot/chatbot.umd.js; raw/ilearn.thu.edu.tw/course-advance-setting.html; raw/ilearn.thu.edu.tw/course-audits.html; raw/ilearn.thu.edu.tw/course-catalog-wrapper.html; raw/ilearn.thu.edu.tw/course-c |
| AngularJS | 5912 | 385 | raw/ilearn.thu.edu.tw/course-advance-setting.html; raw/ilearn.thu.edu.tw/course-audits.html; raw/ilearn.thu.edu.tw/course-catalog-wrapper.html; raw/ilearn.thu.edu.tw/course-classifications.html; raw/ilearn.thu.edu.tw/cou |
| Element UI/View UI/iView | 5245 | 272 | raw/ilearn.thu.edu.tw/course-advance-setting.html; raw/ilearn.thu.edu.tw/course-audits.html; raw/ilearn.thu.edu.tw/course-catalog-wrapper.html; raw/ilearn.thu.edu.tw/course-classifications.html; raw/ilearn.thu.edu.tw/cou |
| MathJax | 12375 | 196 | raw/ilearn.thu.edu.tw/course-advance-setting.html; raw/ilearn.thu.edu.tw/course-audits.html; raw/ilearn.thu.edu.tw/course-catalog-wrapper.html; raw/ilearn.thu.edu.tw/course-classifications.html; raw/ilearn.thu.edu.tw/cou |
| Sentry | 1647 | 196 | raw/ilearn.thu.edu.tw/chatbot/chatbot.umd.js; raw/ilearn.thu.edu.tw/course-advance-setting.html; raw/ilearn.thu.edu.tw/course-audits.html; raw/ilearn.thu.edu.tw/course-catalog-wrapper.html; raw/ilearn.thu.edu.tw/course-c |
| Google Analytics/Tag Manager | 397 | 193 | raw/ilearn.thu.edu.tw/course-advance-setting.html; raw/ilearn.thu.edu.tw/course-audits.html; raw/ilearn.thu.edu.tw/course-catalog-wrapper.html; raw/ilearn.thu.edu.tw/course-classifications.html; raw/ilearn.thu.edu.tw/cou |
| jQuery | 742 | 172 | raw/ilearn.thu.edu.tw/chatbot/chatbot.umd.js; raw/ilearn.thu.edu.tw/static/10067.39ff48db.js; raw/ilearn.thu.edu.tw/static/10248.e193e757.js; raw/ilearn.thu.edu.tw/static/12159.7fb514eb.js; raw/ilearn.thu.edu.tw/static/1 |
| Axios | 324 | 81 | raw/ilearn.thu.edu.tw/static/10188.0cd009aa.js; raw/ilearn.thu.edu.tw/static/1065.e951cf0f.js; raw/ilearn.thu.edu.tw/static/13821.19c32f7f.js; raw/ilearn.thu.edu.tw/static/15175.570cff7b.js; raw/ilearn.thu.edu.tw/static/ |
| ECharts | 180 | 61 | raw/ilearn.thu.edu.tw/static/10242.1acb04a8.js; raw/ilearn.thu.edu.tw/static/12159-e10443e1.chunk.css; raw/ilearn.thu.edu.tw/static/12159.7fb514eb.js; raw/ilearn.thu.edu.tw/static/15435.660824cb.js; raw/ilearn.thu.edu.tw |
| Lodash | 78 | 50 | raw/ilearn.thu.edu.tw/chatbot/chatbot.umd.js; raw/ilearn.thu.edu.tw/static/12159.7fb514eb.js; raw/ilearn.thu.edu.tw/static/13958-91152030.js; raw/ilearn.thu.edu.tw/static/15034.a0e65e77.js; raw/ilearn.thu.edu.tw/static/1 |
| Moment/Day.js | 367 | 30 | raw/ilearn.thu.edu.tw/chatbot/chatbot.umd.js; raw/ilearn.thu.edu.tw/static/12159.7fb514eb.js; raw/ilearn.thu.edu.tw/static/18326.bedfc73f.js; raw/ilearn.thu.edu.tw/static/18774-c8d49780.js; raw/ilearn.thu.edu.tw/static/2 |
| Ant Design Vue | 2608 | 9 | raw/ilearn.thu.edu.tw/chatbot/chatbot.umd.js; raw/ilearn.thu.edu.tw/static/21137-8ac96197.chunk.css; raw/ilearn.thu.edu.tw/static/24549.cf667c52.js; raw/ilearn.thu.edu.tw/static/53701.67275a68.js; raw/ilearn.thu.edu.tw/s |
| Video.js/HLS | 206 | 9 | raw/ilearn.thu.edu.tw/chatbot/chatbot.umd.js; raw/ilearn.thu.edu.tw/static/24549.cf667c52.js; raw/ilearn.thu.edu.tw/static/31076.a8c88684.js; raw/ilearn.thu.edu.tw/static/53701.67275a68.js; raw/ilearn.thu.edu.tw/static/5 |
| D3 | 20 | 8 | raw/ilearn.thu.edu.tw/static/24549.cf667c52.js; raw/ilearn.thu.edu.tw/static/42535.1c3df5f8.js; raw/ilearn.thu.edu.tw/static/48938-ac64b718.js; raw/ilearn.thu.edu.tw/static/49294-a975461a.chunk.css; raw/ilearn.thu.edu.tw |
| Monaco/Code Editor | 14 | 7 | raw/ilearn.thu.edu.tw/static/14572-b07cd6d5.js; raw/ilearn.thu.edu.tw/static/24549.cf667c52.js; raw/ilearn.thu.edu.tw/static/61409-cf835457.js; raw/ilearn.thu.edu.tw/static/78435-bff624c3.js; raw/ilearn.thu.edu.tw/static |
| PhotoSwipe | 288 | 6 | raw/ilearn.thu.edu.tw/static/23268-40f6b5e5.js; raw/ilearn.thu.edu.tw/static/53517-ee6ba8df.chunk.css; raw/ilearn.thu.edu.tw/static/80575.32ea74f5.js; raw/ilearn.thu.edu.tw/static/82017-04ae4691.css; raw/ilearn.thu.edu.t |
| Ace Editor | 300 | 5 | raw/ilearn.thu.edu.tw/chatbot/chatbot.umd.js; raw/ilearn.thu.edu.tw/static/14572-b07cd6d5.js; raw/ilearn.thu.edu.tw/static/56834-67be8618.js; raw/ilearn.thu.edu.tw/static/72914-965f4ad4.js; raw/ilearn.thu.edu.tw/static/7 |
| Highlight/Shiki | 37 | 3 | raw/ilearn.thu.edu.tw/chatbot/chatbot.umd.js; raw/ilearn.thu.edu.tw/static/14572-b07cd6d5.js; raw/ilearn.thu.edu.tw/static/23223-9b89ab86.js |

## 4. Webpack 與 Chunk 完整性

從 runtime 解析出的 lazy JS/CSS 資源共 `3042` 筆引用，所有引用都能對到已保留的 200 資源；缺漏 `0`。
這表示資料集中保留了 runtime 可推導的懶載入 chunk，能支撐後續閱讀與對照。

### 最大 JS bundles

| 檔名 | bytes | 行數 | 平均行長 | 路徑 |
| --- | --- | --- | --- | --- |
| chatbot.umd.js | 6492967 | 764 | 8498.65 | raw/ilearn.thu.edu.tw/chatbot/chatbot.umd.js |
| 18774-c8d49780.js | 4612809 | 1 | 4612809.0 | raw/ilearn.thu.edu.tw/static/18774-c8d49780.js |
| 24549.cf667c52.js | 3621492 | 1 | 3621492.0 | raw/ilearn.thu.edu.tw/static/24549.cf667c52.js |
| tex-mml-svg.js | 2120598 | 1 | 2120598.0 | raw/ilearn.thu.edu.tw/static/js/mathjax/es5/tex-mml-svg.js |
| 79278-2435c454.js | 1975050 | 1 | 1975050.0 | raw/ilearn.thu.edu.tw/static/79278-2435c454.js |
| 30803-7b1f840f.js | 1055724 | 1 | 1055724.0 | raw/ilearn.thu.edu.tw/static/30803-7b1f840f.js |
| 82017-1e48dc04.js | 905233 | 1 | 905233.0 | raw/ilearn.thu.edu.tw/static/82017-1e48dc04.js |
| 61409-cf835457.js | 786275 | 1 | 786275.0 | raw/ilearn.thu.edu.tw/static/61409-cf835457.js |
| 84027-f7869d26.js | 640160 | 1 | 640160.0 | raw/ilearn.thu.edu.tw/static/84027-f7869d26.js |
| 80575.32ea74f5.js | 628972 | 1 | 628972.0 | raw/ilearn.thu.edu.tw/static/80575.32ea74f5.js |
| 70650-b5e8d981.js | 535857 | 1 | 535857.0 | raw/ilearn.thu.edu.tw/static/70650-b5e8d981.js |
| 9862.d5cc01ba.js | 505450 | 1 | 505450.0 | raw/ilearn.thu.edu.tw/static/9862.d5cc01ba.js |
| 97620.c8167195.js | 462784 | 1 | 462784.0 | raw/ilearn.thu.edu.tw/static/97620.c8167195.js |
| js__q_732b4fcc17.js | 450988 | 954 | 472.73 | raw/www.googletagmanager.com/gtag/js__q_732b4fcc17.js |
| js__q_f844cdbeb7.js | 450968 | 954 | 472.71 | raw/www.googletagmanager.com/gtag/js__q_f844cdbeb7.js |

### Source Map 狀態

- 未發現可下載的外部 `.map` 檔。
- 少數 `sourceMappingURL` 命中是 bundle 內用來動態產生 data sourcemap 的程式碼片段，不是可直接還原原始碼的 map。
- 因此後續應以 字串/API/路由索引、模組 ID、功能關鍵字歸類與閱讀用 JS為主。

## 5. API Endpoint 逆向結果

共抽取去重後 API endpoint `756` 筆。方法欄位是從附近程式碼推測；`OBSERVED_GET` 代表下載鏡像時實際以 GET 取得過。

### API 類別分布

| 類別 | endpoint 數 |
| --- | --- |
| user | 54 |
| uploads | 52 |
| stat | 34 |
| courses | 25 |
| air-credit | 22 |
| course | 19 |
| subject-libs | 19 |
| data-import | 17 |
| shared-resources | 14 |
| authz | 12 |
| custom-knowledge-graph | 11 |
| vtrses | 9 |
| rubrics | 8 |
| activities | 7 |
| campus-subject-lib | 7 |
| lessons_search | 7 |
| resource-groups | 6 |
| org-bulletin | 6 |

### 高頻 API 樣本

| Endpoint | 方法線索 | 命中數 | 來源檔數 | 觀察狀態 |
| --- | --- | --- | --- | --- |
| /api/uploads/ | DELETE; GET; POST; PUT; UNKNOWN | 257 | 240 |  |
| /api/courses/ | DELETE; GET; OBSERVED_GET; POST; PUT; UNKNOWN | 241 | 109 | 404 |
| /api/course/ | DELETE; GET; OBSERVED_GET; POST; PUT; UNKNOWN | 196 | 92 | 404 |
| /api/project/ | DELETE; GET; OBSERVED_GET; POST; PUT; UNKNOWN | 195 | 191 | 404 |
| /api/shared-resources-to/{expr}/blob | UNKNOWN | 189 | 189 |  |
| /api/shared-resources/{expr}/blob | UNKNOWN | 189 | 189 |  |
| /api/uploads/reference/{expr}/blob | UNKNOWN | 189 | 189 |  |
| /api/uploads/{expr}/blob | UNKNOWN | 189 | 189 |  |
| /api/uploads/{expr}/blob?preview=true&activity_type={expr} | UNKNOWN | 189 | 189 |  |
| /api/wedrive/file/{expr} | UNKNOWN | 189 | 189 |  |
| /api/uploads/[[activity.uploads[0].id]]/blob | UNKNOWN | 187 | 187 |  |
| /api/uploads/{expr}/swf | UNKNOWN | 187 | 187 |  |
| https://ilearn.thu.edu.tw/api/uploads/{id}/modified-image?thumbnail=32x32 | UNKNOWN | 187 | 187 |  |
| /api/uploads/21/modified-image?thumbnail=0x272'; | UNKNOWN | 185 | 185 |  |
| /api/uploads/{id}/modified-image?thumbnail=32x32 | UNKNOWN | 185 | 185 |  |
| https://ilearn.thu.edu.tw/api/uploads/21/modified-image?thumbnail=0x272 | UNKNOWN | 185 | 185 |  |
| /api/uploads/{expr}/blob?preview=true | UNKNOWN | 184 | 184 |  |
| /api/uploads/{id}/modified-image?thumbnail=200x200 | UNKNOWN | 184 | 184 |  |
| https://ilearn.thu.edu.tw/api/uploads/{id}/modified-image?thumbnail=200x200 | UNKNOWN | 184 | 184 |  |
| /api/third-part/uploads/{expr}/preview | UNKNOWN | 183 | 183 |  |
| /api/third-part/uploads/{expr}/thumbnail | UNKNOWN | 183 | 183 |  |
| /api/uploads/{expr}/thumbnail?preview=true | UNKNOWN | 183 | 183 |  |
| /api/activities/ | DELETE; GET; OBSERVED_GET; POST; PUT | 82 | 36 | 404 |
| /api/exams/ | DELETE; GET; OBSERVED_GET; PATCH; POST; PUT; UNKNOWN | 65 | 29 | 404 |
| /api/group-sets/ | DELETE; GET; OBSERVED_GET; POST; PUT | 51 | 18 | 404 |
| /api/orgs/ | GET; OBSERVED_GET; POST; PUT; UNKNOWN | 47 | 34 | 404 |
| /api/subject-libs/ | DELETE; GET; OBSERVED_GET; POST; PUT; UNKNOWN | 43 | 25 | 404 |
| /api/groups/ | DELETE; GET; OBSERVED_GET; POST; PUT | 36 | 13 | 404 |
| /api/blueprint/ | DELETE; GET; OBSERVED_GET; POST; UNKNOWN | 32 | 19 | 404 |
| /api/vtrses/ | DELETE; GET; OBSERVED_GET; POST; PUT | 29 | 12 | 404 |
| /api/homework/ | DELETE; GET; OBSERVED_GET; POST; PUT; UNKNOWN | 28 | 16 | 404 |
| /api/rollcall/ | DELETE; GET; POST; PUT; UNKNOWN | 28 | 14 |  |
| /api/course/activities/ | GET; OBSERVED_GET; POST; PUT; UNKNOWN | 27 | 15 | 404 |
| /api/my-courses | OBSERVED_GET; POST | 27 | 27 | 200 |
| /api/users/ | DELETE; GET; OBSERVED_GET; POST | 27 | 27 | 404 |

### 非 200 觀察值的解讀

資料集中有 `376` 個 API/頁面觀察到非 200。這些多數屬於模板化、需參數或需授權 endpoint 的觀察值，不能直接解讀為網站錯誤或安全問題；應回到來源上下文和實際前端呼叫條件確認。

## 6. 路由與頁面結構

共抽取去重後路由/頁面路徑 `332` 筆。

### 路由類別分布

| 類別 | 路徑數 |
| --- | --- |
| user | 55 |
| course | 45 |
| user-visits | 22 |
| learning-activity | 16 |
| resources | 13 |
| courses | 10 |
| teaching-team | 10 |
| resource | 8 |
| forum | 8 |
| users | 8 |
| exams | 6 |
| exam | 6 |
| homework | 6 |
| notifications | 6 |
| course-roles | 5 |
| homeworks | 5 |
| rollcall | 4 |
| examinees | 4 |

### 高頻路由樣本

| Route | 命中數 | 來源檔數 | 來源樣本 |
| --- | --- | --- | --- |
| /user/index | 202 | 202 | raw/ilearn.thu.edu.tw/course-advance-setting.html; raw/ilearn.thu.edu.tw/course-audits.html; raw/ilearn.thu.edu.tw/course-catalog-wrapper.html; raw/ilearn.thu.edu.tw/course-classifications.html; raw/ilearn.thu.edu.tw/cou |
| /user/courses | 192 | 192 | raw/ilearn.thu.edu.tw/course-advance-setting.html; raw/ilearn.thu.edu.tw/course-audits.html; raw/ilearn.thu.edu.tw/course-catalog-wrapper.html; raw/ilearn.thu.edu.tw/course-classifications.html; raw/ilearn.thu.edu.tw/cou |
| /user/resources/files | 190 | 190 | raw/ilearn.thu.edu.tw/course-advance-setting.html; raw/ilearn.thu.edu.tw/course-audits.html; raw/ilearn.thu.edu.tw/course-catalog-wrapper.html; raw/ilearn.thu.edu.tw/course-classifications.html; raw/ilearn.thu.edu.tw/cou |
| /org/global-config | 189 | 189 | raw/ilearn.thu.edu.tw/course-advance-setting.html; raw/ilearn.thu.edu.tw/course-audits.html; raw/ilearn.thu.edu.tw/course-catalog-wrapper.html; raw/ilearn.thu.edu.tw/course-classifications.html; raw/ilearn.thu.edu.tw/cou |
| /user/settings | 187 | 187 | raw/ilearn.thu.edu.tw/course-advance-setting.html; raw/ilearn.thu.edu.tw/course-audits.html; raw/ilearn.thu.edu.tw/course-catalog-wrapper.html; raw/ilearn.thu.edu.tw/course-classifications.html; raw/ilearn.thu.edu.tw/cou |
| /course/ | 186 | 186 | raw/ilearn.thu.edu.tw/static/10310.1168e67d.js; raw/ilearn.thu.edu.tw/static/10383.d04ce83a.js; raw/ilearn.thu.edu.tw/static/10409.3c0dcb73.js; raw/ilearn.thu.edu.tw/static/11708.a556fce2.js; raw/ilearn.thu.edu.tw/static |
| /user/sites-menu | 186 | 186 | raw/ilearn.thu.edu.tw/course-advance-setting.html; raw/ilearn.thu.edu.tw/course-audits.html; raw/ilearn.thu.edu.tw/course-catalog-wrapper.html; raw/ilearn.thu.edu.tw/course-classifications.html; raw/ilearn.thu.edu.tw/cou |
| /public-course#/all | 185 | 185 | raw/ilearn.thu.edu.tw/course-advance-setting.html; raw/ilearn.thu.edu.tw/course-audits.html; raw/ilearn.thu.edu.tw/course-catalog-wrapper.html; raw/ilearn.thu.edu.tw/course-classifications.html; raw/ilearn.thu.edu.tw/cou |
| /learning-activity#/ | 58 | 58 | raw/ilearn.thu.edu.tw/static/10409.3c0dcb73.js; raw/ilearn.thu.edu.tw/static/12159.7fb514eb.js; raw/ilearn.thu.edu.tw/static/14279.f75486f1.js; raw/ilearn.thu.edu.tw/static/17767.aae6c84c.js; raw/ilearn.thu.edu.tw/static |
| /learning-activity#/exam/ | 27 | 27 | raw/ilearn.thu.edu.tw/static/10310.1168e67d.js; raw/ilearn.thu.edu.tw/static/12159.7fb514eb.js; raw/ilearn.thu.edu.tw/static/12308.102041f5.js; raw/ilearn.thu.edu.tw/static/17983.a5926995.js; raw/ilearn.thu.edu.tw/static |
| /learning-activity/full-screen#/ | 23 | 23 | raw/ilearn.thu.edu.tw/static/12159.7fb514eb.js; raw/ilearn.thu.edu.tw/static/16064.6c2c8939.js; raw/ilearn.thu.edu.tw/static/24371.6373ecd8.js; raw/ilearn.thu.edu.tw/static/24418.a3bc3234.js; raw/ilearn.thu.edu.tw/static |
| /resources | 22 | 22 | raw/ilearn.thu.edu.tw/static/23977.ebaa5322.js; raw/ilearn.thu.edu.tw/static/27609.04e6959b.js; raw/ilearn.thu.edu.tw/static/36824.bcd6489f.js; raw/ilearn.thu.edu.tw/static/37336.084b8613.js; raw/ilearn.thu.edu.tw/static |
| /exams | 18 | 18 | raw/ilearn.thu.edu.tw/static/10257.5f75a4b2.js; raw/ilearn.thu.edu.tw/static/12159.7fb514eb.js; raw/ilearn.thu.edu.tw/static/25170.2159310c.js; raw/ilearn.thu.edu.tw/static/31110.2a0173f2.js; raw/ilearn.thu.edu.tw/static |
| /learning-activity/full-screen#/questionnaire/ | 17 | 17 | raw/ilearn.thu.edu.tw/static/12159.7fb514eb.js; raw/ilearn.thu.edu.tw/static/20807.fed7a5e0.js; raw/ilearn.thu.edu.tw/static/28509.a0b2d0f0.js; raw/ilearn.thu.edu.tw/static/35205.a1ccb6f5.js; raw/ilearn.thu.edu.tw/static |
| /user/resources/subject-libs | 16 | 16 | raw/ilearn.thu.edu.tw/static/50559.79503daf.js; raw/ilearn.thu.edu.tw/static/99038.bc3a4ccc.js; raw/ilearn.thu.edu.tw/user/courses.html; raw/ilearn.thu.edu.tw/user/courses__q_634b7b9d78.html; raw/ilearn.thu.edu.tw/user/i |
| /exam/ | 15 | 15 | raw/ilearn.thu.edu.tw/static/10035.853f7abc.js; raw/ilearn.thu.edu.tw/static/12308.102041f5.js; raw/ilearn.thu.edu.tw/static/14433.8da36488.js; raw/ilearn.thu.edu.tw/static/19446.6fdaa169.js; raw/ilearn.thu.edu.tw/static |
| /rollcall | 15 | 15 | raw/ilearn.thu.edu.tw/static/12159.7fb514eb.js; raw/ilearn.thu.edu.tw/static/18326.bedfc73f.js; raw/ilearn.thu.edu.tw/static/19832.b33b43a5.js; raw/ilearn.thu.edu.tw/static/28509.a0b2d0f0.js; raw/ilearn.thu.edu.tw/static |
| /user/resources/video-quizzes | 15 | 15 | raw/ilearn.thu.edu.tw/static/99038.bc3a4ccc.js; raw/ilearn.thu.edu.tw/user/courses.html; raw/ilearn.thu.edu.tw/user/courses__q_634b7b9d78.html; raw/ilearn.thu.edu.tw/user/index__q_7833fea385.html; raw/ilearn.thu.edu.tw/u |
| /exam-student-status | 14 | 14 | raw/ilearn.thu.edu.tw/static/12159.7fb514eb.js; raw/ilearn.thu.edu.tw/static/19832.b33b43a5.js; raw/ilearn.thu.edu.tw/static/28605.fa92e51e.js; raw/ilearn.thu.edu.tw/static/63256.3e10694e.js; raw/ilearn.thu.edu.tw/static |
| /forum-scores | 14 | 14 | raw/ilearn.thu.edu.tw/static/12159.7fb514eb.js; raw/ilearn.thu.edu.tw/static/25170.2159310c.js; raw/ilearn.thu.edu.tw/static/44346.7b57b52e.js; raw/ilearn.thu.edu.tw/static/50759.ba0ade2f.js; raw/ilearn.thu.edu.tw/static |
| /homework-student-status | 14 | 14 | raw/ilearn.thu.edu.tw/static/12159.7fb514eb.js; raw/ilearn.thu.edu.tw/static/19832.b33b43a5.js; raw/ilearn.thu.edu.tw/static/28605.fa92e51e.js; raw/ilearn.thu.edu.tw/static/63256.3e10694e.js; raw/ilearn.thu.edu.tw/static |
| /rollcall-score | 14 | 14 | raw/ilearn.thu.edu.tw/static/12159.7fb514eb.js; raw/ilearn.thu.edu.tw/static/19832.b33b43a5.js; raw/ilearn.thu.edu.tw/static/28605.fa92e51e.js; raw/ilearn.thu.edu.tw/static/54964-7faa4ec3.js; raw/ilearn.thu.edu.tw/static |
| /rollcall/setting | 14 | 14 | raw/ilearn.thu.edu.tw/static/12159.7fb514eb.js; raw/ilearn.thu.edu.tw/static/19832.b33b43a5.js; raw/ilearn.thu.edu.tw/static/28605.fa92e51e.js; raw/ilearn.thu.edu.tw/static/63256.3e10694e.js; raw/ilearn.thu.edu.tw/static |
| /examinees/ | 13 | 13 | raw/ilearn.thu.edu.tw/static/19446.6fdaa169.js; raw/ilearn.thu.edu.tw/static/31110.2a0173f2.js; raw/ilearn.thu.edu.tw/static/32436.9894d604.js; raw/ilearn.thu.edu.tw/static/34691.515731f8.js; raw/ilearn.thu.edu.tw/static |
| /courses/ | 12 | 12 | raw/ilearn.thu.edu.tw/static/10257.5f75a4b2.js; raw/ilearn.thu.edu.tw/static/12159.7fb514eb.js; raw/ilearn.thu.edu.tw/static/16941-c2ecc958.js; raw/ilearn.thu.edu.tw/static/31510.c03f0ff5.js; raw/ilearn.thu.edu.tw/static |
| /rollcalls | 12 | 12 | raw/ilearn.thu.edu.tw/static/18326.bedfc73f.js; raw/ilearn.thu.edu.tw/static/19832.b33b43a5.js; raw/ilearn.thu.edu.tw/static/28605.fa92e51e.js; raw/ilearn.thu.edu.tw/static/44346.7b57b52e.js; raw/ilearn.thu.edu.tw/static |
| /learning-activity#/classroom/ | 11 | 11 | raw/ilearn.thu.edu.tw/static/12159.7fb514eb.js; raw/ilearn.thu.edu.tw/static/28509.a0b2d0f0.js; raw/ilearn.thu.edu.tw/static/35205.a1ccb6f5.js; raw/ilearn.thu.edu.tw/static/37336.084b8613.js; raw/ilearn.thu.edu.tw/static |
| /learning-activity#exam/ | 11 | 11 | raw/ilearn.thu.edu.tw/static/20807.fed7a5e0.js; raw/ilearn.thu.edu.tw/static/35205.a1ccb6f5.js; raw/ilearn.thu.edu.tw/static/42585.3fa356ed.js; raw/ilearn.thu.edu.tw/static/56097.6e052f70.js; raw/ilearn.thu.edu.tw/static |
| /teaching-team/groups | 11 | 11 | raw/ilearn.thu.edu.tw/static/26703.244911cf.js; raw/ilearn.thu.edu.tw/static/28605.fa92e51e.js; raw/ilearn.thu.edu.tw/static/36105.3af57479.js; raw/ilearn.thu.edu.tw/static/44346.7b57b52e.js; raw/ilearn.thu.edu.tw/static |
| /courses?fields= | 10 | 10 | raw/ilearn.thu.edu.tw/static/19832.b33b43a5.js; raw/ilearn.thu.edu.tw/static/28605.fa92e51e.js; raw/ilearn.thu.edu.tw/static/58960.1daf8fad.js; raw/ilearn.thu.edu.tw/static/63256.3e10694e.js; raw/ilearn.thu.edu.tw/static |
| /exam-scores?no-intercept=true | 10 | 10 | raw/ilearn.thu.edu.tw/static/12159.7fb514eb.js; raw/ilearn.thu.edu.tw/static/25170.2159310c.js; raw/ilearn.thu.edu.tw/static/78723.49249bea.js; raw/ilearn.thu.edu.tw/static/82017-1e48dc04.js; raw/ilearn.thu.edu.tw/static |
| /settings | 10 | 10 | raw/ilearn.thu.edu.tw/static/21137.a69eb96c.js; raw/ilearn.thu.edu.tw/static/27609.04e6959b.js; raw/ilearn.thu.edu.tw/static/28492.65731154.js; raw/ilearn.thu.edu.tw/static/31552.691da904.js; raw/ilearn.thu.edu.tw/static |
| /teaching-team/orgs | 10 | 10 | raw/ilearn.thu.edu.tw/static/19832.b33b43a5.js; raw/ilearn.thu.edu.tw/static/28605.fa92e51e.js; raw/ilearn.thu.edu.tw/static/41567.34eed4ea.js; raw/ilearn.thu.edu.tw/static/63256.3e10694e.js; raw/ilearn.thu.edu.tw/static |
| /course-classifications | 9 | 9 | raw/ilearn.thu.edu.tw/static/14928.ccbfea64.js; raw/ilearn.thu.edu.tw/static/24712-18317acc.js; raw/ilearn.thu.edu.tw/static/30801-25982468.js; raw/ilearn.thu.edu.tw/static/42585.3fa356ed.js; raw/ilearn.thu.edu.tw/static |
| /homework-scores?fields= | 9 | 9 | raw/ilearn.thu.edu.tw/static/19832.b33b43a5.js; raw/ilearn.thu.edu.tw/static/28605.fa92e51e.js; raw/ilearn.thu.edu.tw/static/63256.3e10694e.js; raw/ilearn.thu.edu.tw/static/68805.a47db79c.js; raw/ilearn.thu.edu.tw/static |

## 7. HTML 入口與伺服器渲染資料

HTML 檔 `319` 個，其中包含多個登入後頁面或錯誤頁快照。入口 HTML 會注入使用者與學校資訊，已避免在報告內呈現個資值。

| URL | 狀態 | Title | ng-app | scripts | links | 元件樣本 |
| --- | --- | --- | --- | --- | --- | --- |
| https://ilearn.thu.edu.tw | 200 | iLearn 數位平台 | portal | 61 | 7 | notification-container; calendar-color-select; wg-calendar; rwd-portal |
| https://ilearn.thu.edu.tw/ | 200 | iLearn 數位平台 | portal | 61 | 7 | notification-container; calendar-color-select; wg-calendar; rwd-portal |
| https://ilearn.thu.edu.tw/api/activies/classin/join-url | 500 | iLearn 數位平台 |  | 0 | 1 |  |
| https://ilearn.thu.edu.tw/api/activities | 500 | iLearn 數位平台 |  | 0 | 1 |  |
| https://ilearn.thu.edu.tw/api/activities/is-locked?activity_conditions= | 500 | iLearn 數位平台 |  | 0 | 1 |  |
| https://ilearn.thu.edu.tw/api/activity-resort | 500 | iLearn 數位平台 |  | 0 | 1 |  |
| https://ilearn.thu.edu.tw/api/ai-ppt/usage | 500 | iLearn 數位平台 |  | 0 | 1 |  |
| https://ilearn.thu.edu.tw/api/ai-ppt/user-usage/export | 500 | iLearn 數位平台 |  | 0 | 1 |  |
| https://ilearn.thu.edu.tw/api/air-credit/course/credit-states-stats/export | 500 | iLearn 數位平台 |  | 0 | 1 |  |
| https://ilearn.thu.edu.tw/api/air-credit/course/usage-limit | 500 | iLearn 數位平台 |  | 0 | 1 |  |
| https://ilearn.thu.edu.tw/api/air-credit/credits | 500 | iLearn 數位平台 |  | 0 | 1 |  |
| https://ilearn.thu.edu.tw/api/air-credit/credits/clear-remaining-credits | 500 | iLearn 數位平台 |  | 0 | 1 |  |
| https://ilearn.thu.edu.tw/api/air-credit/credits/status | 500 | iLearn 數位平台 |  | 0 | 1 |  |
| https://ilearn.thu.edu.tw/api/air-credit/user/credit-states-stats/export | 500 | iLearn 數位平台 |  | 0 | 1 |  |
| https://ilearn.thu.edu.tw/api/alert/messages/read | 500 | iLearn 數位平台 |  | 0 | 1 |  |
| https://ilearn.thu.edu.tw/api/auth_code/get_auth_code | 500 | iLearn 數位平台 |  | 0 | 1 |  |
| https://ilearn.thu.edu.tw/api/auth_code/validate_auth_code | 500 | iLearn 數位平台 |  | 0 | 1 |  |
| https://ilearn.thu.edu.tw/api/auto-create | 500 | iLearn 數位平台 |  | 0 | 1 |  |
| https://ilearn.thu.edu.tw/api/campus-subject-lib/combination-subjects | 500 | iLearn 數位平台 |  | 0 | 1 |  |
| https://ilearn.thu.edu.tw/api/campus-subject-lib/subject/publish | 500 | iLearn 數位平台 |  | 0 | 1 |  |
| https://ilearn.thu.edu.tw/api/classroom/ | 500 | iLearn 數位平台 |  | 0 | 1 |  |
| https://ilearn.thu.edu.tw/api/completion-criteria | 500 | iLearn 數位平台 |  | 0 | 1 |  |
| https://ilearn.thu.edu.tw/api/config?no-intercept=true | 403 |  |  | 0 | 0 |  |
| https://ilearn.thu.edu.tw/api/copy-third-part-resources | 500 | iLearn 數位平台 |  | 0 | 1 |  |
| https://ilearn.thu.edu.tw/api/course | 500 | iLearn 數位平台 |  | 0 | 1 |  |
| https://ilearn.thu.edu.tw/api/course-classification | 500 | iLearn 數位平台 |  | 0 | 1 |  |
| https://ilearn.thu.edu.tw/api/course-copy/copy | 500 | iLearn 數位平台 |  | 0 | 1 |  |
| https://ilearn.thu.edu.tw/api/course-copy/courses | 500 | iLearn 數位平台 |  | 0 | 1 |  |
| https://ilearn.thu.edu.tw/api/course-estimate | 500 | iLearn 數位平台 |  | 0 | 1 |  |
| https://ilearn.thu.edu.tw/api/course-estimate-reply | 500 | iLearn 數位平台 |  | 0 | 1 |  |

## 8. 瀏覽器儲存、通訊與安全面

以下是前端程式碼中可見的瀏覽器能力使用面，代表需要後續安全/行為審查的位置，不等同於漏洞。

| 面向 | 命中數 | 檔案數 | 檔案樣本 |
| --- | --- | --- | --- |
| iframe | 3673 | 212 | raw/ilearn.thu.edu.tw/course-advance-setting.html; raw/ilearn.thu.edu.tw/course-audits.html; raw/ilearn.thu.edu.tw/course-catalog-wrapper.html; raw/ilearn.thu.edu.tw/course-classifications.html; raw/ilearn.thu.edu.tw/cou |
| sentry | 2138 | 196 | raw/ilearn.thu.edu.tw/chatbot/chatbot.umd.js; raw/ilearn.thu.edu.tw/course-advance-setting.html; raw/ilearn.thu.edu.tw/course-audits.html; raw/ilearn.thu.edu.tw/course-catalog-wrapper.html; raw/ilearn.thu.edu.tw/course-c |
| cookies | 1081 | 123 | raw/ilearn.thu.edu.tw/chatbot/chatbot.umd.js; raw/ilearn.thu.edu.tw/course/162381/content.html; raw/ilearn.thu.edu.tw/course/164205/content.html; raw/ilearn.thu.edu.tw/course/165573/content.html; raw/ilearn.thu.edu.tw/co |
| analytics | 907 | 204 | raw/ilearn.thu.edu.tw/course-advance-setting.html; raw/ilearn.thu.edu.tw/course-audits.html; raw/ilearn.thu.edu.tw/course-catalog-wrapper.html; raw/ilearn.thu.edu.tw/course-classifications.html; raw/ilearn.thu.edu.tw/cou |
| fetch/xhr | 905 | 397 | raw/ilearn.thu.edu.tw/chatbot/chatbot.umd.js; raw/ilearn.thu.edu.tw/course-advance-setting.html; raw/ilearn.thu.edu.tw/course-audits.html; raw/ilearn.thu.edu.tw/course-catalog-wrapper.html; raw/ilearn.thu.edu.tw/course-c |
| crypto | 871 | 85 | raw/ilearn.thu.edu.tw/chatbot/chatbot.umd.js; raw/ilearn.thu.edu.tw/course/add__q_515421e58e.html; raw/ilearn.thu.edu.tw/courseware.html; raw/ilearn.thu.edu.tw/static/1065.e951cf0f.js; raw/ilearn.thu.edu.tw/static/1104.a |
| localStorage | 525 | 75 | raw/ilearn.thu.edu.tw/chatbot/chatbot.umd.js; raw/ilearn.thu.edu.tw/static/15034.a0e65e77.js; raw/ilearn.thu.edu.tw/static/15448.d1593c31.js; raw/ilearn.thu.edu.tw/static/2276.c8da6806.js; raw/ilearn.thu.edu.tw/static/24 |
| postMessage | 210 | 41 | raw/ilearn.thu.edu.tw/static/10248.e193e757.js; raw/ilearn.thu.edu.tw/static/13958-91152030.js; raw/ilearn.thu.edu.tw/static/14572-b07cd6d5.js; raw/ilearn.thu.edu.tw/static/15448.d1593c31.js; raw/ilearn.thu.edu.tw/static |
| dynamic-script | 194 | 142 | raw/ilearn.thu.edu.tw/chatbot/chatbot.umd.js; raw/ilearn.thu.edu.tw/static/10188.0cd009aa.js; raw/ilearn.thu.edu.tw/static/13958-91152030.js; raw/ilearn.thu.edu.tw/static/14572-b07cd6d5.js; raw/ilearn.thu.edu.tw/static/1 |
| eval-like | 180 | 48 | raw/ilearn.thu.edu.tw/chatbot/chatbot.umd.js; raw/ilearn.thu.edu.tw/static/10246-494b2baa.js; raw/ilearn.thu.edu.tw/static/13709-b1e35863.js; raw/ilearn.thu.edu.tw/static/14572-b07cd6d5.js; raw/ilearn.thu.edu.tw/static/1 |
| sessionStorage | 117 | 18 | raw/ilearn.thu.edu.tw/chatbot/chatbot.umd.js; raw/ilearn.thu.edu.tw/static/2127.e81c5e64.js; raw/ilearn.thu.edu.tw/static/27589.ae3b1ca0.js; raw/ilearn.thu.edu.tw/static/28509.a0b2d0f0.js; raw/ilearn.thu.edu.tw/static/32 |
| websocket | 6 | 2 | raw/ilearn.thu.edu.tw/static/24549.cf667c52.js; raw/ilearn.thu.edu.tw/static/81401.5b776cb7.js |

重點判讀：
- `fetch/xhr` 與 API endpoint 大量存在，是主要業務互動面。
- `localStorage/sessionStorage/cookies` 需要人工檢查 key/value 是否含敏感資料；索引已輸出到 `data/interesting_strings.json`。
- `postMessage`、`iframe`、`dynamic-script` 與 `eval-like` 需要搭配來源限制與 CSP 檢查。
- Sentry/Analytics 會收集前端事件或錯誤上下文，正式審查時要確認脫敏策略。

## 9. 外部服務與第三方連結

抽取外部 URL `3745` 筆，主類型包含 Google Tag Manager、TronClass 說明文件、支援站與第三方資源。
| Host | 命中數 |
| --- | --- |
| tronclass.com.tw | 925 |
| ilearn.thu.edu.tw | 752 |
| www.w3.org | 298 |
| github.com | 230 |
| www.googletagmanager.com | 196 |
| www.youtube.com | 195 |
| www.google-analytics.com | 188 |
| bam.nr-data.net | 187 |
| get.adobe.com | 187 |
| support.tronclass.com' | 185 |
| bit.ly | 70 |
| theajack.github.io | 63 |
| schemas.openxmlformats.org | 26 |
| schemas.microsoft.com | 22 |
| momentjs.com | 14 |
| a | 12 |
| www.google.com | 11 |
| vimeo.com | 6 |
| gw.alipayobjects.com | 6 |
| www.googleapis.com | 6 |

## 10. 逆向限制與可行後續

已完成：
- 靜態資源與 lazy chunk 完整性驗證。
- API endpoint、路由、外部 URL、HTML 入口、技術依賴與 browser surface 索引。
- 最大/高風險 bundle 的閱讀用 JS 已整理在 `readable_js/`。

無法由目前證據完全完成的項目：
- 伺服器未提供 source map，無法完全還原原始 `.vue/.ts/.js` 檔案、原始變數名與註解。
- 登入後 API 的完整資料模型需要更多角色與課程情境補充。
- 離線完整運行需要另建 API mock/proxy，僅靠靜態 HTML/JS/CSS 不足。

建議人工逆向優先順序：
1. 先看 `data/api_endpoints.csv` 中 source_count 高的 endpoint，建立資料模型。
2. 再看最大 bundles 與 entry bundles 的 閱讀用版本，對照 API category 標記功能域。
3. 檢查 `data/browser_surfaces.json` 中 postMessage、storage、eval-like 的 evidence。
4. 若要重現 UI，可另外建立受控的本地 API 模擬環境。

## 11. 閱讀用 JS 入口

`readable_js/` 保留 100 個最大或入口 JS 的閱讀用展開版本；索引位於 `data/readable_js.csv` 與 `data/readable_js.json`。這些檔案不是 source map 還原結果，但適合文字搜尋、人工閱讀和功能標註。


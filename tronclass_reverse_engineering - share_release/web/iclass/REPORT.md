# Tamkang University iClass 前端逆向結果與分析

本文件是分享版分析入口，只保留可閱讀的逆向結果、資料索引與限制說明。

## 1. 結論摘要

本資料集保留可核對的前端逆向結果：靜態資源盤點、Webpack runtime/lazy chunk 完整性、入口 HTML、API/路由、框架與第三方依賴、瀏覽器儲存與通訊面，以及後續分析入口。

需要注意的是，伺服器沒有提供可用的 source map，因此無法百分之百還原開發時期的原始檔案名稱、私有變數名、註解與完整目錄結構。目前保留的是閱讀用 bundle 展開、模組/路由/API 索引與語意分類；這是沒有 source map 時可合理完成的前端逆向層級。

| 項目 | 結果 |
| --- | --- |
| Manifest 總筆數 | 2339 |
| HTTP 狀態分布 | 200: 1621, 400: 14, 403: 45, 404: 501, 500: 158 |
| 靜態資源 200 | 1393 / 1394 |
| JS/CSS | 867 JS, 259 CSS |
| Webpack runtime 推導資源缺漏 | 0 |
| Source map 參照 / 可下載 | 1 / 0 |
| 內嵌 sourcemap 片段 | 6 |
| 高度壓縮 JS | 863 / 867 |

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
| Webpack | 2055 | 863 | raw/iclass.tku.edu.tw/static/10035.8c0d0988.js; raw/iclass.tku.edu.tw/static/10067.39ff48db.js; raw/iclass.tku.edu.tw/static/1014.fa0d2a58.js; raw/iclass.tku.edu.tw/static/10188.a4d7bd73.js; raw/iclass.tku.edu.tw/static/ |
| React | 3707 | 668 | raw/iclass.tku.edu.tw/static/10035.8c0d0988.js; raw/iclass.tku.edu.tw/static/10067.39ff48db.js; raw/iclass.tku.edu.tw/static/10188.a4d7bd73.js; raw/iclass.tku.edu.tw/static/10242.1acb04a8.js; raw/iclass.tku.edu.tw/static |
| Vue | 9049 | 492 | raw/iclass.tku.edu.tw/course-advance-setting.html; raw/iclass.tku.edu.tw/course-audits.html; raw/iclass.tku.edu.tw/course-catalog-wrapper.html; raw/iclass.tku.edu.tw/course-classifications.html; raw/iclass.tku.edu.tw/cou |
| AngularJS | 8238 | 473 | raw/iclass.tku.edu.tw/course-advance-setting.html; raw/iclass.tku.edu.tw/course-audits.html; raw/iclass.tku.edu.tw/course-catalog-wrapper.html; raw/iclass.tku.edu.tw/course-classifications.html; raw/iclass.tku.edu.tw/cou |
| Element UI/View UI/iView | 5663 | 363 | raw/iclass.tku.edu.tw/course-advance-setting.html; raw/iclass.tku.edu.tw/course-audits.html; raw/iclass.tku.edu.tw/course-catalog-wrapper.html; raw/iclass.tku.edu.tw/course-classifications.html; raw/iclass.tku.edu.tw/cou |
| MathJax | 14040 | 288 | raw/iclass.tku.edu.tw/course-advance-setting.html; raw/iclass.tku.edu.tw/course-audits.html; raw/iclass.tku.edu.tw/course-catalog-wrapper.html; raw/iclass.tku.edu.tw/course-classifications.html; raw/iclass.tku.edu.tw/cou |
| Sentry | 2366 | 285 | raw/iclass.tku.edu.tw/course-advance-setting.html; raw/iclass.tku.edu.tw/course-audits.html; raw/iclass.tku.edu.tw/course-catalog-wrapper.html; raw/iclass.tku.edu.tw/course-classifications.html; raw/iclass.tku.edu.tw/cou |
| Google Analytics/Tag Manager | 577 | 283 | raw/iclass.tku.edu.tw/course-advance-setting.html; raw/iclass.tku.edu.tw/course-audits.html; raw/iclass.tku.edu.tw/course-catalog-wrapper.html; raw/iclass.tku.edu.tw/course-classifications.html; raw/iclass.tku.edu.tw/cou |
| jQuery | 675 | 163 | raw/iclass.tku.edu.tw/static/10067.39ff48db.js; raw/iclass.tku.edu.tw/static/1014.fa0d2a58.js; raw/iclass.tku.edu.tw/static/10248.e193e757.js; raw/iclass.tku.edu.tw/static/12159.899c0f01.js; raw/iclass.tku.edu.tw/static/ |
| Axios | 312 | 78 | raw/iclass.tku.edu.tw/static/10188.a4d7bd73.js; raw/iclass.tku.edu.tw/static/13821.33a6dc05.js; raw/iclass.tku.edu.tw/static/15175.90f6375a.js; raw/iclass.tku.edu.tw/static/15448.d1593c31.js; raw/iclass.tku.edu.tw/static |
| ECharts | 177 | 61 | raw/iclass.tku.edu.tw/static/10242.1acb04a8.js; raw/iclass.tku.edu.tw/static/11743-cc958aa4.chunk.css; raw/iclass.tku.edu.tw/static/11743.09adfa43.js; raw/iclass.tku.edu.tw/static/12159-e10443e1.chunk.css; raw/iclass.tku |
| Lodash | 73 | 48 | raw/iclass.tku.edu.tw/static/12159.899c0f01.js; raw/iclass.tku.edu.tw/static/13958-91152030.js; raw/iclass.tku.edu.tw/static/15587.dbb2fed1.js; raw/iclass.tku.edu.tw/static/16064.6c2c8939.js; raw/iclass.tku.edu.tw/static |
| Moment/Day.js | 380 | 29 | raw/iclass.tku.edu.tw/static/12159.899c0f01.js; raw/iclass.tku.edu.tw/static/18326.6912051a.js; raw/iclass.tku.edu.tw/static/21892-03cda66b.js; raw/iclass.tku.edu.tw/static/24549.836d9ec0.js; raw/iclass.tku.edu.tw/static |
| Ant Design Vue | 2196 | 8 | raw/iclass.tku.edu.tw/static/24549.836d9ec0.js; raw/iclass.tku.edu.tw/static/28391-b2320123.css; raw/iclass.tku.edu.tw/static/52978-69793388.chunk.css; raw/iclass.tku.edu.tw/static/53701.f59fbfcc.js; raw/iclass.tku.edu.t |
| Video.js/HLS | 205 | 8 | raw/iclass.tku.edu.tw/static/24549.836d9ec0.js; raw/iclass.tku.edu.tw/static/31076.a8c88684.js; raw/iclass.tku.edu.tw/static/53701.f59fbfcc.js; raw/iclass.tku.edu.tw/static/56834-44a72033.js; raw/iclass.tku.edu.tw/static |
| D3 | 20 | 8 | raw/iclass.tku.edu.tw/static/24549.836d9ec0.js; raw/iclass.tku.edu.tw/static/42535.1c3df5f8.js; raw/iclass.tku.edu.tw/static/48938-ac64b718.js; raw/iclass.tku.edu.tw/static/49294-fc45138a.chunk.css; raw/iclass.tku.edu.tw |
| Monaco/Code Editor | 14 | 7 | raw/iclass.tku.edu.tw/static/24549.836d9ec0.js; raw/iclass.tku.edu.tw/static/61409-cf835457.js; raw/iclass.tku.edu.tw/static/77639-1602a6c5.js; raw/iclass.tku.edu.tw/static/78435-bff624c3.js; raw/iclass.tku.edu.tw/static |
| PhotoSwipe | 288 | 6 | raw/iclass.tku.edu.tw/static/17473-9fd87fa4.chunk.css; raw/iclass.tku.edu.tw/static/23268-40f6b5e5.js; raw/iclass.tku.edu.tw/static/28391-b2320123.css; raw/iclass.tku.edu.tw/static/71803-e0241a2a.chunk.css; raw/iclass.tk |
| Ace Editor | 299 | 4 | raw/iclass.tku.edu.tw/static/56834-44a72033.js; raw/iclass.tku.edu.tw/static/77639-1602a6c5.js; raw/iclass.tku.edu.tw/static/79278-3da74896.js; raw/iclass.tku.edu.tw/static/82199-32c8112e.js |
| Highlight/Shiki | 7 | 2 | raw/iclass.tku.edu.tw/static/23223-9b89ab86.js; raw/iclass.tku.edu.tw/static/77639-1602a6c5.js |

## 4. Webpack 與 Chunk 完整性

從 runtime 解析出的 lazy JS/CSS 資源共 `2984` 筆引用，所有引用都能對到已保留的 200 資源；缺漏 `0`。
這表示資料集中保留了 runtime 可推導的懶載入 chunk，能支撐後續閱讀與對照。

### 最大 JS bundles

| 檔名 | bytes | 行數 | 平均行長 | 路徑 |
| --- | --- | --- | --- | --- |
| 55054-c6f7d5e3.js | 4366529 | 1 | 4366529.0 | raw/iclass.tku.edu.tw/static/55054-c6f7d5e3.js |
| 24549.836d9ec0.js | 3525621 | 1 | 3525621.0 | raw/iclass.tku.edu.tw/static/24549.836d9ec0.js |
| tex-mml-svg.js | 2120598 | 1 | 2120598.0 | raw/iclass.tku.edu.tw/static/js/mathjax/es5/tex-mml-svg.js |
| 79278-3da74896.js | 1890360 | 1 | 1890360.0 | raw/iclass.tku.edu.tw/static/79278-3da74896.js |
| 30803-7b1f840f.js | 1055724 | 1 | 1055724.0 | raw/iclass.tku.edu.tw/static/30803-7b1f840f.js |
| 28391-2cabc9af.js | 825477 | 1 | 825477.0 | raw/iclass.tku.edu.tw/static/28391-2cabc9af.js |
| 61409-cf835457.js | 786275 | 1 | 786275.0 | raw/iclass.tku.edu.tw/static/61409-cf835457.js |
| 84027-f7869d26.js | 640160 | 1 | 640160.0 | raw/iclass.tku.edu.tw/static/84027-f7869d26.js |
| 80575.32ea74f5.js | 628972 | 1 | 628972.0 | raw/iclass.tku.edu.tw/static/80575.32ea74f5.js |
| 70650-b5e8d981.js | 535857 | 1 | 535857.0 | raw/iclass.tku.edu.tw/static/70650-b5e8d981.js |
| 9862.d5cc01ba.js | 505450 | 1 | 505450.0 | raw/iclass.tku.edu.tw/static/9862.d5cc01ba.js |
| js__q_9486b7e461.js | 469041 | 988 | 474.74 | raw/www.googletagmanager.com/gtag/js__q_9486b7e461.js |
| 97620.9a25c9b6.js | 462731 | 1 | 462731.0 | raw/iclass.tku.edu.tw/static/97620.9a25c9b6.js |
| js__q_a5aaac809c.js | 450968 | 954 | 472.71 | raw/www.googletagmanager.com/gtag/js__q_a5aaac809c.js |
| 74927.c4fad5cf.js | 437507 | 1 | 437507.0 | raw/iclass.tku.edu.tw/static/74927.c4fad5cf.js |

### Source Map 狀態

- 未發現可下載且 HTTP 200 的外部 `.map` 檔。
- 有 `1` 個 source map URL 被伺服器拒絕或不存在，例如：iframeResizer.map HTTP 403。
- 少數 `sourceMappingURL` 命中可能是 bundle 內用來動態產生 data sourcemap 的程式碼片段，不一定是可直接還原原始碼的 map。
- 因此後續應以 字串/API/路由索引、模組 ID、功能關鍵字歸類與閱讀用 JS為主。

## 5. API Endpoint 逆向結果

共抽取去重後 API endpoint `739` 筆。方法欄位是從附近程式碼推測；`OBSERVED_GET` 代表下載鏡像時實際以 GET 取得過。

### API 類別分布

| 類別 | endpoint 數 |
| --- | --- |
| user | 54 |
| uploads | 46 |
| stat | 34 |
| courses | 25 |
| air-credit | 21 |
| subject-libs | 19 |
| course | 18 |
| data-import | 17 |
| shared-resources | 14 |
| authz | 12 |
| custom-knowledge-graph | 11 |
| vtrses | 9 |
| rubrics | 8 |
| activities | 7 |
| campus-subject-lib | 7 |
| lessons_search | 7 |
| courseware-quiz | 6 |
| resource-groups | 6 |

### 高頻 API 樣本

| Endpoint | 方法線索 | 命中數 | 來源檔數 | 觀察狀態 |
| --- | --- | --- | --- | --- |
| /api/uploads/ | DELETE; GET; POST; PUT; UNKNOWN | 344 | 329 |  |
| /api/project/ | DELETE; GET; OBSERVED_GET; POST; PUT; UNKNOWN | 285 | 281 | 404 |
| /api/shared-resources-to/{expr}/blob | UNKNOWN | 279 | 279 |  |
| /api/shared-resources/{expr}/blob | UNKNOWN | 279 | 279 |  |
| /api/uploads/reference/{expr}/blob | UNKNOWN | 279 | 279 |  |
| /api/uploads/{expr}/blob | UNKNOWN | 279 | 279 |  |
| /api/uploads/{expr}/blob?preview=true&activity_type={expr} | UNKNOWN | 279 | 279 |  |
| /api/wedrive/file/{expr} | UNKNOWN | 279 | 279 |  |
| /api/uploads/[[activity.uploads[0].id]]/blob | UNKNOWN | 278 | 278 |  |
| /api/uploads/{expr}/swf | UNKNOWN | 278 | 278 |  |
| /api/uploads/{id}/modified-image?thumbnail=0x272'; | UNKNOWN | 275 | 275 |  |
| https://iclass.tku.edu.tw/api/uploads/{id}/modified-image?thumbnail=0x272 | UNKNOWN | 275 | 275 |  |
| /api/third-part/uploads/{expr}/preview | UNKNOWN | 274 | 274 |  |
| /api/third-part/uploads/{expr}/thumbnail | UNKNOWN | 274 | 274 |  |
| /api/uploads/{expr}/blob?preview=true | UNKNOWN | 274 | 274 |  |
| /api/uploads/{expr}/thumbnail?preview=true | UNKNOWN | 274 | 274 |  |
| /api/courses/ | DELETE; GET; OBSERVED_GET; POST; PUT; UNKNOWN | 249 | 112 | 404 |
| /api/course/ | DELETE; GET; OBSERVED_GET; POST; PUT; UNKNOWN | 201 | 91 | 404 |
| /api/activities/ | DELETE; GET; OBSERVED_GET; POST; PUT; UNKNOWN | 80 | 35 | 404 |
| /api/exams/ | DELETE; GET; OBSERVED_GET; PATCH; POST; PUT; UNKNOWN | 65 | 29 | 404 |
| /api/group-sets/ | DELETE; GET; OBSERVED_GET; POST; PUT | 51 | 18 | 404 |
| /api/orgs/ | GET; OBSERVED_GET; POST; PUT; UNKNOWN | 47 | 34 | 404 |
| /api/subject-libs/ | DELETE; GET; OBSERVED_GET; POST; PUT; UNKNOWN | 41 | 23 | 404 |
| /api/groups/ | DELETE; GET; OBSERVED_GET; POST; PUT | 36 | 13 | 404 |
| /api/blueprint/ | DELETE; GET; OBSERVED_GET; POST; UNKNOWN | 35 | 20 | 404 |
| /api/courseware-quiz/quiz/ | DELETE; GET; OBSERVED_GET; POST; UNKNOWN | 32 | 12 | 404 |
| /api/submissions/ | DELETE; GET; OBSERVED_GET; POST; PUT | 32 | 17 | 404 |
| /api/vtrses/ | DELETE; GET; OBSERVED_GET; POST; PUT | 29 | 12 | 404 |
| /api/course/activities/ | GET; OBSERVED_GET; POST; PUT; UNKNOWN | 27 | 14 | 404 |
| /api/users/ | DELETE; GET; OBSERVED_GET; POST | 27 | 27 | 404 |
| /api/homework/ | DELETE; GET; OBSERVED_GET; POST; PUT; UNKNOWN | 26 | 14 | 404 |
| /api/rollcall/ | DELETE; GET; POST; PUT; UNKNOWN | 26 | 13 |  |
| /api/my-courses | OBSERVED_GET; POST | 25 | 25 | 200 |
| /api/shared-resources/ | DELETE; POST; UNKNOWN | 25 | 14 |  |
| /api/departments | GET; OBSERVED_GET; UNKNOWN | 24 | 24 | 200 |

### 非 200 觀察值的解讀

資料集中有 `493` 個 API/頁面觀察到非 200。這些多數屬於模板化、需參數或需授權 endpoint 的觀察值，不能直接解讀為網站錯誤或安全問題；應回到來源上下文和實際前端呼叫條件確認。

## 6. 路由與頁面結構

共抽取去重後路由/頁面路徑 `335` 筆。

### 路由類別分布

| 類別 | 路徑數 |
| --- | --- |
| user | 55 |
| course | 47 |
| user-visits | 22 |
| learning-activity | 16 |
| resources | 13 |
| courses | 10 |
| teaching-team | 10 |
| resource | 8 |
| forum | 8 |
| users | 8 |
| exam | 7 |
| exams | 6 |
| homework | 6 |
| notifications | 6 |
| course-roles | 5 |
| homeworks | 5 |
| rollcall | 4 |
| examinees | 4 |

### 高頻路由樣本

| Route | 命中數 | 來源檔數 | 來源樣本 |
| --- | --- | --- | --- |
| /user/index | 292 | 292 | raw/iclass.tku.edu.tw/course-advance-setting.html; raw/iclass.tku.edu.tw/course-audits.html; raw/iclass.tku.edu.tw/course-catalog-wrapper.html; raw/iclass.tku.edu.tw/course-classifications.html; raw/iclass.tku.edu.tw/cou |
| /user/courses | 281 | 281 | raw/iclass.tku.edu.tw/course-advance-setting.html; raw/iclass.tku.edu.tw/course-audits.html; raw/iclass.tku.edu.tw/course-catalog-wrapper.html; raw/iclass.tku.edu.tw/course-classifications.html; raw/iclass.tku.edu.tw/cou |
| /user/resources/files | 280 | 280 | raw/iclass.tku.edu.tw/course-advance-setting.html; raw/iclass.tku.edu.tw/course-audits.html; raw/iclass.tku.edu.tw/course-catalog-wrapper.html; raw/iclass.tku.edu.tw/course-classifications.html; raw/iclass.tku.edu.tw/cou |
| /org/global-config | 279 | 279 | raw/iclass.tku.edu.tw/course-advance-setting.html; raw/iclass.tku.edu.tw/course-audits.html; raw/iclass.tku.edu.tw/course-catalog-wrapper.html; raw/iclass.tku.edu.tw/course-classifications.html; raw/iclass.tku.edu.tw/cou |
| /user/settings | 277 | 277 | raw/iclass.tku.edu.tw/course-advance-setting.html; raw/iclass.tku.edu.tw/course-audits.html; raw/iclass.tku.edu.tw/course-catalog-wrapper.html; raw/iclass.tku.edu.tw/course-classifications.html; raw/iclass.tku.edu.tw/cou |
| /user/sites-menu | 276 | 276 | raw/iclass.tku.edu.tw/course-advance-setting.html; raw/iclass.tku.edu.tw/course-audits.html; raw/iclass.tku.edu.tw/course-catalog-wrapper.html; raw/iclass.tku.edu.tw/course-classifications.html; raw/iclass.tku.edu.tw/cou |
| /public-course#/all | 275 | 275 | raw/iclass.tku.edu.tw/course-advance-setting.html; raw/iclass.tku.edu.tw/course-audits.html; raw/iclass.tku.edu.tw/course-catalog-wrapper.html; raw/iclass.tku.edu.tw/course-classifications.html; raw/iclass.tku.edu.tw/cou |
| /course/ | 183 | 183 | raw/iclass.tku.edu.tw/static/10310.1168e67d.js; raw/iclass.tku.edu.tw/static/10383.d04ce83a.js; raw/iclass.tku.edu.tw/static/10409.3c0dcb73.js; raw/iclass.tku.edu.tw/static/11708.a556fce2.js; raw/iclass.tku.edu.tw/static |
| /learning-activity#/ | 58 | 58 | raw/iclass.tku.edu.tw/static/10409.3c0dcb73.js; raw/iclass.tku.edu.tw/static/12159.899c0f01.js; raw/iclass.tku.edu.tw/static/12459.b3a383cc.js; raw/iclass.tku.edu.tw/static/14279.f75486f1.js; raw/iclass.tku.edu.tw/static |
| /course/{id}/content | 36 | 36 | raw/iclass.tku.edu.tw/course/260584/bulletin.html; raw/iclass.tku.edu.tw/course/260584/classroom.html; raw/iclass.tku.edu.tw/course/260584/content.html; raw/iclass.tku.edu.tw/course/260584/courseware.html; raw/iclass.tku |
| /course/{id}/enrollments | 36 | 36 | raw/iclass.tku.edu.tw/course/260584/bulletin.html; raw/iclass.tku.edu.tw/course/260584/classroom.html; raw/iclass.tku.edu.tw/course/260584/content.html; raw/iclass.tku.edu.tw/course/260584/courseware.html; raw/iclass.tku |
| /course/{id}/my-stat | 36 | 36 | raw/iclass.tku.edu.tw/course/260584/bulletin.html; raw/iclass.tku.edu.tw/course/260584/classroom.html; raw/iclass.tku.edu.tw/course/260584/content.html; raw/iclass.tku.edu.tw/course/260584/courseware.html; raw/iclass.tku |
| /course/{id}/outline | 36 | 36 | raw/iclass.tku.edu.tw/course/260584/bulletin.html; raw/iclass.tku.edu.tw/course/260584/classroom.html; raw/iclass.tku.edu.tw/course/260584/content.html; raw/iclass.tku.edu.tw/course/260584/courseware.html; raw/iclass.tku |
| /course/{id}/rollcall | 36 | 36 | raw/iclass.tku.edu.tw/course/260584/bulletin.html; raw/iclass.tku.edu.tw/course/260584/classroom.html; raw/iclass.tku.edu.tw/course/260584/content.html; raw/iclass.tku.edu.tw/course/260584/courseware.html; raw/iclass.tku |
| /course/{id}/score | 36 | 36 | raw/iclass.tku.edu.tw/course/260584/bulletin.html; raw/iclass.tku.edu.tw/course/260584/classroom.html; raw/iclass.tku.edu.tw/course/260584/content.html; raw/iclass.tku.edu.tw/course/260584/courseware.html; raw/iclass.tku |
| /learning-activity#/exam/ | 27 | 27 | raw/iclass.tku.edu.tw/static/10310.1168e67d.js; raw/iclass.tku.edu.tw/static/12159.899c0f01.js; raw/iclass.tku.edu.tw/static/12308.ea29ac7a.js; raw/iclass.tku.edu.tw/static/17983.a5926995.js; raw/iclass.tku.edu.tw/static |
| /resources | 27 | 27 | raw/iclass.tku.edu.tw/static/18387.fd521ee7.js; raw/iclass.tku.edu.tw/static/23977.ebaa5322.js; raw/iclass.tku.edu.tw/static/27609.04e6959b.js; raw/iclass.tku.edu.tw/static/28391-2cabc9af.js; raw/iclass.tku.edu.tw/static |
| /course/{expr}/content#/ | 26 | 26 | raw/iclass.tku.edu.tw/course/260584/bulletin.html; raw/iclass.tku.edu.tw/course/260584/classroom.html; raw/iclass.tku.edu.tw/course/260584/content.html; raw/iclass.tku.edu.tw/course/260584/courseware.html; raw/iclass.tku |
| /course/{id}/bulletin | 26 | 26 | raw/iclass.tku.edu.tw/course/260584/bulletin.html; raw/iclass.tku.edu.tw/course/260584/classroom.html; raw/iclass.tku.edu.tw/course/260584/content.html; raw/iclass.tku.edu.tw/course/260584/courseware.html; raw/iclass.tku |
| /course/{id}/classroom | 26 | 26 | raw/iclass.tku.edu.tw/course/260584/bulletin.html; raw/iclass.tku.edu.tw/course/260584/classroom.html; raw/iclass.tku.edu.tw/course/260584/content.html; raw/iclass.tku.edu.tw/course/260584/courseware.html; raw/iclass.tku |
| /course/{id}/courseware | 26 | 26 | raw/iclass.tku.edu.tw/course/260584/bulletin.html; raw/iclass.tku.edu.tw/course/260584/classroom.html; raw/iclass.tku.edu.tw/course/260584/content.html; raw/iclass.tku.edu.tw/course/260584/courseware.html; raw/iclass.tku |
| /course/{id}/evaluation | 26 | 26 | raw/iclass.tku.edu.tw/course/260584/bulletin.html; raw/iclass.tku.edu.tw/course/260584/classroom.html; raw/iclass.tku.edu.tw/course/260584/content.html; raw/iclass.tku.edu.tw/course/260584/courseware.html; raw/iclass.tku |
| /course/{id}/exam | 26 | 26 | raw/iclass.tku.edu.tw/course/260584/bulletin.html; raw/iclass.tku.edu.tw/course/260584/classroom.html; raw/iclass.tku.edu.tw/course/260584/content.html; raw/iclass.tku.edu.tw/course/260584/courseware.html; raw/iclass.tku |
| /course/{id}/forum | 26 | 26 | raw/iclass.tku.edu.tw/course/260584/bulletin.html; raw/iclass.tku.edu.tw/course/260584/classroom.html; raw/iclass.tku.edu.tw/course/260584/content.html; raw/iclass.tku.edu.tw/course/260584/courseware.html; raw/iclass.tku |
| /course/{id}/group-set | 26 | 26 | raw/iclass.tku.edu.tw/course/260584/bulletin.html; raw/iclass.tku.edu.tw/course/260584/classroom.html; raw/iclass.tku.edu.tw/course/260584/content.html; raw/iclass.tku.edu.tw/course/260584/courseware.html; raw/iclass.tku |
| /course/{id}/homework | 26 | 26 | raw/iclass.tku.edu.tw/course/260584/bulletin.html; raw/iclass.tku.edu.tw/course/260584/classroom.html; raw/iclass.tku.edu.tw/course/260584/content.html; raw/iclass.tku.edu.tw/course/260584/courseware.html; raw/iclass.tku |
| /course/{id}/index#/ | 26 | 26 | raw/iclass.tku.edu.tw/course/260584/bulletin.html; raw/iclass.tku.edu.tw/course/260584/classroom.html; raw/iclass.tku.edu.tw/course/260584/content.html; raw/iclass.tku.edu.tw/course/260584/courseware.html; raw/iclass.tku |
| /course/{id}/live-activities | 26 | 26 | raw/iclass.tku.edu.tw/course/260584/bulletin.html; raw/iclass.tku.edu.tw/course/260584/classroom.html; raw/iclass.tku.edu.tw/course/260584/content.html; raw/iclass.tku.edu.tw/course/260584/courseware.html; raw/iclass.tku |
| /course/{id}/note | 26 | 26 | raw/iclass.tku.edu.tw/course/260584/bulletin.html; raw/iclass.tku.edu.tw/course/260584/classroom.html; raw/iclass.tku.edu.tw/course/260584/content.html; raw/iclass.tku.edu.tw/course/260584/courseware.html; raw/iclass.tku |
| /course/{id}/questionnaire | 26 | 26 | raw/iclass.tku.edu.tw/course/260584/bulletin.html; raw/iclass.tku.edu.tw/course/260584/classroom.html; raw/iclass.tku.edu.tw/course/260584/content.html; raw/iclass.tku.edu.tw/course/260584/courseware.html; raw/iclass.tku |
| /learning-activity/full-screen#/ | 23 | 23 | raw/iclass.tku.edu.tw/static/12159.899c0f01.js; raw/iclass.tku.edu.tw/static/16064.6c2c8939.js; raw/iclass.tku.edu.tw/static/24418.a3bc3234.js; raw/iclass.tku.edu.tw/static/2562.122fcbdf.js; raw/iclass.tku.edu.tw/static/ |
| /exams | 18 | 18 | raw/iclass.tku.edu.tw/static/10257.5f75a4b2.js; raw/iclass.tku.edu.tw/static/12159.899c0f01.js; raw/iclass.tku.edu.tw/static/25170.58b640ff.js; raw/iclass.tku.edu.tw/static/27605.cb953088.js; raw/iclass.tku.edu.tw/static |
| /learning-activity/full-screen#/questionnaire/ | 18 | 18 | raw/iclass.tku.edu.tw/static/12159.899c0f01.js; raw/iclass.tku.edu.tw/static/20807.fed7a5e0.js; raw/iclass.tku.edu.tw/static/30075.1049a74f.js; raw/iclass.tku.edu.tw/static/35205.e3e44ba5.js; raw/iclass.tku.edu.tw/static |
| /user/resources/subject-libs | 16 | 16 | raw/iclass.tku.edu.tw/static/50559.4ceaee03.js; raw/iclass.tku.edu.tw/static/53728.9ede78a6.js; raw/iclass.tku.edu.tw/user/courses.html; raw/iclass.tku.edu.tw/user/courses__q_634b7b9d78.html; raw/iclass.tku.edu.tw/user/i |
| /exam/ | 15 | 15 | raw/iclass.tku.edu.tw/static/10035.8c0d0988.js; raw/iclass.tku.edu.tw/static/11164.fc8d8feb.js; raw/iclass.tku.edu.tw/static/12308.ea29ac7a.js; raw/iclass.tku.edu.tw/static/14433.8da36488.js; raw/iclass.tku.edu.tw/static |

## 7. HTML 入口與伺服器渲染資料

HTML 檔 `452` 個，其中包含多個登入後頁面或錯誤頁快照。入口 HTML 會注入使用者與學校資訊，已避免在報告內呈現個資值。

| URL | 狀態 | Title | ng-app | scripts | links | 元件樣本 |
| --- | --- | --- | --- | --- | --- | --- |
| https://iclass.tku.edu.tw/ | 200 | iClass學習平台 |  | 0 | 0 |  |
| https://iclass.tku.edu.tw/api/activies/classin/join-url | 500 | iClass |  | 0 | 1 |  |
| https://iclass.tku.edu.tw/api/activies/classin/join-url?course_id= | 500 | iClass |  | 0 | 1 |  |
| https://iclass.tku.edu.tw/api/activities | 500 | iClass |  | 0 | 1 |  |
| https://iclass.tku.edu.tw/api/activities/is-locked?activity_conditions= | 500 | iClass |  | 0 | 1 |  |
| https://iclass.tku.edu.tw/api/activity-resort | 500 | iClass |  | 0 | 1 |  |
| https://iclass.tku.edu.tw/api/ai-ppt/usage | 500 | iClass |  | 0 | 1 |  |
| https://iclass.tku.edu.tw/api/ai-ppt/user-usage/export | 500 | iClass |  | 0 | 1 |  |
| https://iclass.tku.edu.tw/api/air-credit/course/credit-states-stats/export | 500 | iClass |  | 0 | 1 |  |
| https://iclass.tku.edu.tw/api/air-credit/course/usage-limit | 500 | iClass |  | 0 | 1 |  |
| https://iclass.tku.edu.tw/api/air-credit/credits | 500 | iClass |  | 0 | 1 |  |
| https://iclass.tku.edu.tw/api/air-credit/credits/clear-remaining-credits | 500 | iClass |  | 0 | 1 |  |
| https://iclass.tku.edu.tw/api/air-credit/credits/status | 500 | iClass |  | 0 | 1 |  |
| https://iclass.tku.edu.tw/api/air-credit/user/credit-states-stats/export | 500 | iClass |  | 0 | 1 |  |
| https://iclass.tku.edu.tw/api/alert/messages/read | 500 | iClass |  | 0 | 1 |  |
| https://iclass.tku.edu.tw/api/auth_code/get_auth_code | 500 | iClass |  | 0 | 1 |  |
| https://iclass.tku.edu.tw/api/auth_code/validate_auth_code | 500 | iClass |  | 0 | 1 |  |
| https://iclass.tku.edu.tw/api/authz/user-roles | 500 | iClass |  | 0 | 1 |  |
| https://iclass.tku.edu.tw/api/authz/user-roles?page= | 500 | iClass |  | 0 | 1 |  |
| https://iclass.tku.edu.tw/api/auto-create | 500 | iClass |  | 0 | 1 |  |
| https://iclass.tku.edu.tw/api/calendar-tag | 500 | iClass |  | 0 | 1 |  |
| https://iclass.tku.edu.tw/api/calendar-teaching-weeks | 500 | iClass |  | 0 | 1 |  |
| https://iclass.tku.edu.tw/api/campus-subject-lib/combination-subjects | 500 | iClass |  | 0 | 1 |  |
| https://iclass.tku.edu.tw/api/campus-subject-lib/subject/publish | 500 | iClass |  | 0 | 1 |  |
| https://iclass.tku.edu.tw/api/classroom/ | 500 | iClass |  | 0 | 1 |  |
| https://iclass.tku.edu.tw/api/completion-criteria | 500 | iClass |  | 0 | 1 |  |
| https://iclass.tku.edu.tw/api/config?no-intercept=true | 403 |  |  | 0 | 0 |  |
| https://iclass.tku.edu.tw/api/copy-third-part-resources | 500 | iClass |  | 0 | 1 |  |
| https://iclass.tku.edu.tw/api/course | 500 | iClass |  | 0 | 1 |  |
| https://iclass.tku.edu.tw/api/course-classification | 500 | iClass |  | 0 | 1 |  |

## 8. 瀏覽器儲存、通訊與安全面

以下是前端程式碼中可見的瀏覽器能力使用面，代表需要後續安全/行為審查的位置，不等同於漏洞。

| 面向 | 命中數 | 檔案數 | 檔案樣本 |
| --- | --- | --- | --- |
| iframe | 5457 | 303 | raw/iclass.tku.edu.tw/course-advance-setting.html; raw/iclass.tku.edu.tw/course-audits.html; raw/iclass.tku.edu.tw/course-catalog-wrapper.html; raw/iclass.tku.edu.tw/course-classifications.html; raw/iclass.tku.edu.tw/cou |
| sentry | 3036 | 285 | raw/iclass.tku.edu.tw/course-advance-setting.html; raw/iclass.tku.edu.tw/course-audits.html; raw/iclass.tku.edu.tw/course-catalog-wrapper.html; raw/iclass.tku.edu.tw/course-classifications.html; raw/iclass.tku.edu.tw/cou |
| analytics | 1258 | 294 | raw/iclass.tku.edu.tw/course-advance-setting.html; raw/iclass.tku.edu.tw/course-audits.html; raw/iclass.tku.edu.tw/course-catalog-wrapper.html; raw/iclass.tku.edu.tw/course-classifications.html; raw/iclass.tku.edu.tw/cou |
| cookies | 1062 | 127 | raw/iclass.tku.edu.tw/course/260584/content.html; raw/iclass.tku.edu.tw/course/260584/forum.html; raw/iclass.tku.edu.tw/course/260584/group-set.html; raw/iclass.tku.edu.tw/course/260584/live-activities.html; raw/iclass.t |
| fetch/xhr | 958 | 480 | raw/iclass.tku.edu.tw/course-advance-setting.html; raw/iclass.tku.edu.tw/course-audits.html; raw/iclass.tku.edu.tw/course-catalog-wrapper.html; raw/iclass.tku.edu.tw/course-classifications.html; raw/iclass.tku.edu.tw/cou |
| crypto | 859 | 84 | raw/iclass.tku.edu.tw/static/1104.a7791db6.js; raw/iclass.tku.edu.tw/static/11580.a7791db6.js; raw/iclass.tku.edu.tw/static/14443.1c99581a.js; raw/iclass.tku.edu.tw/static/18406.eb86529e.js; raw/iclass.tku.edu.tw/static/ |
| localStorage | 509 | 69 | raw/iclass.tku.edu.tw/static/11164.fc8d8feb.js; raw/iclass.tku.edu.tw/static/15448.d1593c31.js; raw/iclass.tku.edu.tw/static/2276.3be31d36.js; raw/iclass.tku.edu.tw/static/24262.bfbc60d3.js; raw/iclass.tku.edu.tw/static/ |
| postMessage | 205 | 40 | raw/iclass.tku.edu.tw/static/10248.e193e757.js; raw/iclass.tku.edu.tw/static/13958-91152030.js; raw/iclass.tku.edu.tw/static/15448.d1593c31.js; raw/iclass.tku.edu.tw/static/2276.3be31d36.js; raw/iclass.tku.edu.tw/static/ |
| dynamic-script | 182 | 139 | raw/iclass.tku.edu.tw/course/260584/enrollments.html; raw/iclass.tku.edu.tw/course/261157/enrollments.html; raw/iclass.tku.edu.tw/static/10188.a4d7bd73.js; raw/iclass.tku.edu.tw/static/13958-91152030.js; raw/iclass.tku.e |
| eval-like | 179 | 47 | raw/iclass.tku.edu.tw/static/10246-494b2baa.js; raw/iclass.tku.edu.tw/static/13709-b1e35863.js; raw/iclass.tku.edu.tw/static/16065.678691a0.js; raw/iclass.tku.edu.tw/static/23268-40f6b5e5.js; raw/iclass.tku.edu.tw/static |
| sessionStorage | 112 | 16 | raw/iclass.tku.edu.tw/static/19169.ff80e2c4.js; raw/iclass.tku.edu.tw/static/2127.4c152ed5.js; raw/iclass.tku.edu.tw/static/30075.1049a74f.js; raw/iclass.tku.edu.tw/static/328.7ecb97ad.js; raw/iclass.tku.edu.tw/static/37 |
| websocket | 6 | 2 | raw/iclass.tku.edu.tw/static/24549.836d9ec0.js; raw/iclass.tku.edu.tw/static/81401.5b776cb7.js |

重點判讀：
- `fetch/xhr` 與 API endpoint 大量存在，是主要業務互動面。
- `localStorage/sessionStorage/cookies` 需要人工檢查 key/value 是否含敏感資料；索引已輸出到 `data/interesting_strings.json`。
- `postMessage`、`iframe`、`dynamic-script` 與 `eval-like` 需要搭配來源限制與 CSP 檢查。
- Sentry/Analytics 會收集前端事件或錯誤上下文，正式審查時要確認脫敏策略。

## 9. 外部服務與第三方連結

抽取外部 URL `4927` 筆，主類型包含 Google Tag Manager、TronClass 說明文件、支援站與第三方資源。
| Host | 命中數 |
| --- | --- |
| tronclass.com.tw | 1375 |
| iclass.tku.edu.tw | 832 |
| github.com | 314 |
| www.w3.org | 289 |
| www.googletagmanager.com | 286 |
| www.youtube.com | 283 |
| www.google-analytics.com | 279 |
| bam.nr-data.net | 278 |
| get.adobe.com | 278 |
| support.tronclass.com' | 275 |
| bit.ly | 71 |
| theajack.github.io | 66 |
| ap09.emis.tku.edu.tw | 36 |
| schemas.openxmlformats.org | 26 |
| schemas.microsoft.com | 22 |
| momentjs.com | 14 |
| a | 12 |
| www.google.com | 11 |
| www.facebook.com | 8 |
| gw.alipayobjects.com | 6 |

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


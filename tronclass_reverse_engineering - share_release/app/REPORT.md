# Android APP 逆向結果與分析

本文件是 Android APP 分享版分析入口，只保留結果、索引與閱讀位置。

## 1. 結論摘要

| 項目 | 結果 |
| --- | --- |
| Package | `com.wisdomgarden.trpc` |
| Version | `2.14.5` (`versionCode 1000018`) |
| SDK | min `24`, target `35`, compile `35` |
| Java-like source files | `5447` |
| Resource files | `2130` |
| Package view files | `13094` base files |
| WebView JS chunks | `273` scanned |
| WebView modules | `871` extracted |

整體判讀：APP 是以 Capacitor/Cordova WebView 為主的 TronClass 行動端，Android 原生層主要提供 bridge、推播、檔案/媒體、定位、條碼掃描、SQLite、更新、錄音、beacon 與 edge UI 等能力。主要業務 UI 與功能模組位於 `assets/public` 的 WebView 前端資產。

## 2. APP Flags

- `allowBackup`: `true`
- `usesCleartextTraffic`: `true`
- `requestLegacyExternalStorage`: `true`
- `largeHeap`: `true`
- `extractNativeLibs`: `false`

完整 manifest 與 flags 可從 `package_view/base/AndroidManifest.xml` 對照。

## 3. 權限與元件

權限集中在網路、外部儲存、位置、相機、錄音、藍牙、通知、推播、badge、前景服務與裝置狀態等能力。完整清單在 `indexes/permissions.txt`。

主要 exported components：

| 類型 | 名稱 | 重點 |
| --- | --- | --- |
| activity | `com.wisdomgarden.trpc.MainActivity` | 主入口、`tronclass` deep link、檔案 MIME intent |
| service | `com.getcapacitor.CapacitorFirebaseMessagingService` | Firebase messaging |
| activity | `com.wisdomgarden.trpc.mediapicker.MediaPickerActivity` | 媒體選擇 |
| receiver | `com.onesignal.FCMBroadcastReceiver` | FCM push receiver |
| receiver | `com.onesignal.BootUpReceiver` | 開機事件 |
| receiver | `com.google.firebase.iid.FirebaseInstanceIdReceiver` | FCM receive |

完整元件索引在 `indexes/exported_components.txt` 與 `indexes/components.json`。

## 4. 架構與入口

- Android 入口：`source/android_sources/com/wisdomgarden/trpc/MainActivity.java`
- Manifest：`package_view/base/AndroidManifest.xml`
- WebView 入口：`package_view/base/assets/public/index.html`
- Plugin 清單：`package_view/base/assets/public/cordova_plugins.js`
- WebView bundle 索引：`indexes/web_bundle_inventory.md`
- WebView 模組視圖：`webview_modules/structured`、`webview_modules/top_level`、`webview_modules/readable`

`MainActivity` 註冊的原生能力包含 VoiceRecorder、SQLite storage、keep-screen-on、write-file permission、screen orientation、barcode scanner、dark mode、updater、native geolocation、media picker、beacon 與 edge UI。

## 5. 偵測到的主要技術

| 技術 | 命中數 |
| --- | ---: |
| AndroidX | 6770 |
| OneSignal | 828 |
| Cordova | 552 |
| Firebase | 540 |
| PDF.js | 460 |
| OpenCV | 369 |
| Capacitor | 345 |
| OkHttp | 334 |
| SQLCipher | 129 |
| JPush | 34 |
| WorkManager | 31 |

## 6. Native Libraries

| Library | Bytes | Symbols | 重點 |
| --- | ---: | ---: | --- |
| `libc++_shared.so` | 1822840 | 6367 | C++ runtime |
| `libimage_processing_util_jni.so` | 28944 | 22 | 影像處理 JNI |
| `libopencv_java4.so` | 18958456 | 7224 | OpenCV |
| `libsqlcipher.so` | 3351792 | 546 | SQLCipher |

Native strings、symbols、imports/exports、JNI 候選、selected disassembly 與 pseudocode 位於 `native_analysis/`。

## 7. URL 與 Domain

- Unique URLs：`321`，見 `indexes/urls.txt`
- Unique domains：`2896`，見 `indexes/domains.txt`

高頻或值得關注的 domain 包含 `www.googleapis.com`、`mobile-download.tronclass.com.cn`、`urp-uat-0.wisdomgarden.com`、`play.google.com`、`developer.android.com` 與多個第三方文件/資源 domain。這些索引只能代表字串與資產中的可見指標，實際行為仍需回到對應程式上下文判讀。

## 8. 閱讀入口

| 目標 | 位置 |
| --- | --- |
| Android source view | `source/android_sources/` |
| Android resources | `source/android_resources/` |
| Package manifest/assets/resources/smali | `package_view/base/` |
| ABI/density/language split package view | `package_view/splits/` |
| WebView public assets | `package_view/base/assets/public/` |
| WebView module views | `webview_modules/` |
| Native library analysis | `native_analysis/` |
| 權限/元件/URL/關鍵字索引 | `indexes/` |

## 9. 限制

此成果不是開發者私有原始碼倉庫的重建。Release artifact 中不存在的註解、原始變數名、完整 Gradle 專案、前端 source map、native debug symbols、伺服器端程式與授權後 runtime 資料，無法由本資料集直接還原。

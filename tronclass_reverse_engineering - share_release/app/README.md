# Android APP 成果入口

先讀 `REPORT.md`。APP 結果分成 Android 程式視圖、package 視圖、WebView bundle 視圖、native library 分析與結構化索引。

主要入口：

- `source/android_sources/com/wisdomgarden/trpc/MainActivity.java`：Android 入口 activity。
- `package_view/base/AndroidManifest.xml`：權限、deep links、exported components 與 app flags。
- `package_view/base/assets/public/index.html`：WebView app 入口。
- `package_view/base/assets/public/cordova_plugins.js`：WebView/native bridge plugin 清單。
- `indexes/permissions.txt`、`indexes/exported_components.txt`、`indexes/components.json`：Android 權限與元件索引。
- `indexes/web_bundle_inventory.md`、`webview_modules/`：APP 內 WebView bundle 與模組視圖。
- `native_analysis/README.md`：native libraries、JNI 候選與 native 分析入口。


package org.apache.cordova;

import android.content.Context;
import android.content.Intent;
import android.view.View;
import android.webkit.WebChromeClient;
import java.util.List;
import java.util.Map;
public interface CordovaWebView {
    public static final String CORDOVA_VERSION = "7.0.0";

    boolean backHistory();

    boolean canGoBack();

    void clearCache();

    @Deprecated
    void clearCache(boolean z);

    void clearHistory();

    Context getContext();

    ICordovaCookieManager getCookieManager();

    CordovaWebViewEngine getEngine();

    PluginManager getPluginManager();

    CordovaPreferences getPreferences();

    CordovaResourceApi getResourceApi();

    String getUrl();

    View getView();

    void handleDestroy();

    void handlePause(boolean z);

    void handleResume(boolean z);

    void handleStart();

    void handleStop();

    @Deprecated
    void hideCustomView();

    void init(CordovaInterface cordovaInterface, List<PluginEntry> list, CordovaPreferences cordovaPreferences);

    boolean isButtonPlumbedToJs(int i);

    @Deprecated
    boolean isCustomViewShowing();

    boolean isInitialized();

    void loadUrl(String str);

    void loadUrlIntoView(String str, boolean z);

    void onNewIntent(Intent intent);

    Object postMessage(String str, Object obj);

    @Deprecated
    void sendJavascript(String str);

    void sendPluginResult(PluginResult pluginResult, String str);

    void setButtonPlumbedToJs(int i, boolean z);

    @Deprecated
    void showCustomView(View view, WebChromeClient.CustomViewCallback customViewCallback);

    void showWebPage(String str, boolean z, boolean z2, Map<String, Object> map);

    void stopLoading();
}


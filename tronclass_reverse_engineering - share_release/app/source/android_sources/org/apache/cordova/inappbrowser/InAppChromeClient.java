package org.apache.cordova.inappbrowser;

import android.os.Message;
import android.webkit.GeolocationPermissions;
import android.webkit.JsPromptResult;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebStorage;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.LOG;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
public class InAppChromeClient extends WebChromeClient {
    private String LOG_TAG = "InAppChromeClient";
    private long MAX_QUOTA = 104857600;
    private CordovaWebView webView;

    public InAppChromeClient(CordovaWebView cordovaWebView) {
        this.webView = cordovaWebView;
    }

    @Override // android.webkit.WebChromeClient
    public void onExceededDatabaseQuota(String str, String str2, long j, long j2, long j3, WebStorage.QuotaUpdater quotaUpdater) {
        LOG.d(this.LOG_TAG, "onExceededDatabaseQuota estimatedSize: %d  currentQuota: %d  totalUsedQuota: %d", Long.valueOf(j2), Long.valueOf(j), Long.valueOf(j3));
        quotaUpdater.updateQuota(this.MAX_QUOTA);
    }

    @Override // android.webkit.WebChromeClient
    public void onGeolocationPermissionsShowPrompt(String str, GeolocationPermissions.Callback callback) {
        super.onGeolocationPermissionsShowPrompt(str, callback);
        callback.invoke(str, true, false);
    }

    @Override // android.webkit.WebChromeClient
    public boolean onJsPrompt(WebView webView, String str, String str2, String str3, JsPromptResult jsPromptResult) {
        PluginResult pluginResult;
        if (str3 == null || !str3.startsWith("gap")) {
            return false;
        }
        if (str3.startsWith("gap-iab://")) {
            String strSubstring = str3.substring(10);
            if (strSubstring.matches("^InAppBrowser[0-9]{1,10}$")) {
                if (str2 == null || str2.length() == 0) {
                    pluginResult = new PluginResult(PluginResult.Status.OK, new JSONArray());
                } else {
                    try {
                        pluginResult = new PluginResult(PluginResult.Status.OK, new JSONArray(str2));
                    } catch (JSONException e) {
                        pluginResult = new PluginResult(PluginResult.Status.JSON_EXCEPTION, e.getMessage());
                    }
                }
                this.webView.sendPluginResult(pluginResult, strSubstring);
                jsPromptResult.confirm("");
                return true;
            }
            LOG.w(this.LOG_TAG, "InAppBrowser callback called with invalid callbackId : " + strSubstring);
            jsPromptResult.cancel();
            return true;
        }
        LOG.w(this.LOG_TAG, "InAppBrowser does not support Cordova API calls: " + str + " " + str3);
        jsPromptResult.cancel();
        return true;
    }

    @Override // android.webkit.WebChromeClient
    public boolean onCreateWindow(final WebView webView, boolean z, boolean z2, Message message) {
        WebViewClient webViewClient = new WebViewClient() { // from class: org.apache.cordova.inappbrowser.InAppChromeClient.1
            @Override // android.webkit.WebViewClient
            public boolean shouldOverrideUrlLoading(WebView webView2, WebResourceRequest webResourceRequest) {
                webView.loadUrl(webResourceRequest.getUrl().toString());
                return true;
            }

            @Override // android.webkit.WebViewClient
            public boolean shouldOverrideUrlLoading(WebView webView2, String str) {
                webView.loadUrl(str);
                return true;
            }
        };
        WebView webView2 = new WebView(webView.getContext());
        webView2.setWebViewClient(webViewClient);
        ((WebView.WebViewTransport) message.obj).setWebView(webView2);
        message.sendToTarget();
        return true;
    }
}


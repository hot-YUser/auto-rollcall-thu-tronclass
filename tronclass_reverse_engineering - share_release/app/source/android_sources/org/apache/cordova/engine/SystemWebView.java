package org.apache.cordova.engine;

import android.content.Context;
import android.util.AttributeSet;
import android.view.KeyEvent;
import android.webkit.WebChromeClient;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.CordovaWebViewEngine;
public class SystemWebView extends WebView implements CordovaWebViewEngine.EngineView {
    SystemWebChromeClient chromeClient;
    private CordovaInterface f11cordova;
    private SystemWebViewEngine parentEngine;
    private SystemWebViewClient viewClient;

    public SystemWebView(Context context) {
        this(context, null);
    }

    public SystemWebView(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
    }

    void init(SystemWebViewEngine systemWebViewEngine, CordovaInterface cordovaInterface) {
        this.f11cordova = cordovaInterface;
        this.parentEngine = systemWebViewEngine;
        if (this.viewClient == null) {
            setWebViewClient(new SystemWebViewClient(systemWebViewEngine));
        }
        if (this.chromeClient == null) {
            setWebChromeClient(new SystemWebChromeClient(systemWebViewEngine));
        }
    }

    @Override // org.apache.cordova.CordovaWebViewEngine.EngineView
    public CordovaWebView getCordovaWebView() {
        SystemWebViewEngine systemWebViewEngine = this.parentEngine;
        if (systemWebViewEngine != null) {
            return systemWebViewEngine.getCordovaWebView();
        }
        return null;
    }

    @Override // android.webkit.WebView
    public void setWebViewClient(WebViewClient webViewClient) {
        this.viewClient = (SystemWebViewClient) webViewClient;
        super.setWebViewClient(webViewClient);
    }

    @Override // android.webkit.WebView
    public void setWebChromeClient(WebChromeClient webChromeClient) {
        this.chromeClient = (SystemWebChromeClient) webChromeClient;
        super.setWebChromeClient(webChromeClient);
    }

    @Override // android.webkit.WebView, android.view.ViewGroup, android.view.View
    public boolean dispatchKeyEvent(KeyEvent keyEvent) {
        Boolean boolOnDispatchKeyEvent = this.parentEngine.client.onDispatchKeyEvent(keyEvent);
        if (boolOnDispatchKeyEvent != null) {
            return boolOnDispatchKeyEvent.booleanValue();
        }
        return super.dispatchKeyEvent(keyEvent);
    }
}


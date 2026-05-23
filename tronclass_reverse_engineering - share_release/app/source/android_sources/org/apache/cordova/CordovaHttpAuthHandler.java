package org.apache.cordova;

import android.webkit.HttpAuthHandler;
public class CordovaHttpAuthHandler implements ICordovaHttpAuthHandler {
    private final HttpAuthHandler handler;

    public CordovaHttpAuthHandler(HttpAuthHandler httpAuthHandler) {
        this.handler = httpAuthHandler;
    }

    @Override // org.apache.cordova.ICordovaHttpAuthHandler
    public void cancel() {
        this.handler.cancel();
    }

    @Override // org.apache.cordova.ICordovaHttpAuthHandler
    public void proceed(String str, String str2) {
        this.handler.proceed(str, str2);
    }
}


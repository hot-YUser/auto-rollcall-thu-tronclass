package org.apache.cordova;

import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONObject;
public class CallbackContext {
    private static final String LOG_TAG = "CordovaPlugin";
    private String callbackId;
    private int changingThreads;
    protected boolean finished;
    private CordovaWebView webView;

    public CallbackContext(String str, CordovaWebView cordovaWebView) {
        this.callbackId = str;
        this.webView = cordovaWebView;
    }

    public boolean isFinished() {
        return this.finished;
    }

    public boolean isChangingThreads() {
        return this.changingThreads > 0;
    }

    public String getCallbackId() {
        return this.callbackId;
    }

    public void sendPluginResult(PluginResult pluginResult) {
        synchronized (this) {
            if (this.finished) {
                LOG.w(LOG_TAG, "Attempted to send a second callback for ID: " + this.callbackId + "\nResult was: " + pluginResult.getMessage());
            } else {
                this.finished = !pluginResult.getKeepCallback();
                this.webView.sendPluginResult(pluginResult, this.callbackId);
            }
        }
    }

    public void success(JSONObject jSONObject) {
        sendPluginResult(new PluginResult(PluginResult.Status.OK, jSONObject));
    }

    public void success(String str) {
        sendPluginResult(new PluginResult(PluginResult.Status.OK, str));
    }

    public void success(JSONArray jSONArray) {
        sendPluginResult(new PluginResult(PluginResult.Status.OK, jSONArray));
    }

    public void success(byte[] bArr) {
        sendPluginResult(new PluginResult(PluginResult.Status.OK, bArr));
    }

    public void success(int i) {
        sendPluginResult(new PluginResult(PluginResult.Status.OK, i));
    }

    public void success() {
        sendPluginResult(new PluginResult(PluginResult.Status.OK));
    }

    public void error(JSONObject jSONObject) {
        sendPluginResult(new PluginResult(PluginResult.Status.ERROR, jSONObject));
    }

    public void error(String str) {
        sendPluginResult(new PluginResult(PluginResult.Status.ERROR, str));
    }

    public void error(int i) {
        sendPluginResult(new PluginResult(PluginResult.Status.ERROR, i));
    }
}


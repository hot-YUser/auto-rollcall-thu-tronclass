package com.getcapacitor;

import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import androidx.core.app.NotificationCompat;
import org.apache.cordova.PluginManager;
import org.apache.cordova.globalization.Globalization;
public class MessageHandler {
    private Bridge bridge;
    private PluginManager cordovaPluginManager;
    private WebView webView;

    public MessageHandler(Bridge bridge, WebView webView, PluginManager pluginManager) {
        this.bridge = bridge;
        this.webView = webView;
        this.cordovaPluginManager = pluginManager;
        webView.addJavascriptInterface(this, "androidBridge");
    }

    @JavascriptInterface
    public void postMessage(String str) {
        try {
            JSObject jSObject = new JSObject(str);
            String string = jSObject.getString(Globalization.TYPE);
            boolean z = string != null;
            boolean z2 = z && string.equals("cordova");
            boolean z3 = z && string.equals("js.error");
            String string2 = jSObject.getString("callbackId");
            if (z2) {
                String string3 = jSObject.getString(NotificationCompat.CATEGORY_SERVICE);
                String string4 = jSObject.getString("action");
                String string5 = jSObject.getString("actionArgs");
                Logger.verbose(Logger.tags("Plugin"), "To native (Cordova plugin): callbackId: " + string2 + ", service: " + string3 + ", action: " + string4 + ", actionArgs: " + string5);
                callCordovaPluginMethod(string2, string3, string4, string5);
                return;
            }
            if (z3) {
                Logger.error("JavaScript Error: " + str);
                return;
            }
            String string6 = jSObject.getString("pluginId");
            String string7 = jSObject.getString("methodName");
            JSObject jSObject2 = jSObject.getJSObject(Globalization.OPTIONS, new JSObject());
            Logger.verbose(Logger.tags("Plugin"), "To native (Capacitor plugin): callbackId: " + string2 + ", pluginId: " + string6 + ", methodName: " + string7);
            callPluginMethod(string2, string6, string7, jSObject2);
        } catch (Exception e) {
            Logger.error("Post message error:", e);
        }
    }

    public void sendResponseMessage(PluginCall pluginCall, PluginResult pluginResult, PluginResult pluginResult2) {
        try {
            PluginResult pluginResult3 = new PluginResult();
            pluginResult3.put("save", pluginCall.isSaved());
            pluginResult3.put("callbackId", pluginCall.getCallbackId());
            pluginResult3.put("pluginId", pluginCall.getPluginId());
            pluginResult3.put("methodName", pluginCall.getMethodName());
            if (pluginResult2 != null) {
                pluginResult3.put("success", false);
                pluginResult3.put("error", pluginResult2);
                Logger.debug("Sending plugin error: " + pluginResult3.toString());
            } else {
                pluginResult3.put("success", true);
                pluginResult3.put("data", pluginResult);
            }
            if (!pluginCall.getCallbackId().equals(PluginCall.CALLBACK_ID_DANGLING)) {
                final String str = "window.Capacitor.fromNative(" + pluginResult3.toString() + ")";
                final WebView webView = this.webView;
                webView.post(new Runnable() { // from class: com.getcapacitor.MessageHandler$$ExternalSyntheticLambda0
                    @Override // java.lang.Runnable
                    public final void run() {
                        webView.evaluateJavascript(str, null);
                    }
                });
                return;
            }
            this.bridge.storeDanglingPluginResult(pluginCall, pluginResult3);
        } catch (Exception e) {
            Logger.error("sendResponseMessage: error: " + e);
        }
    }

    private void callPluginMethod(String str, String str2, String str3, JSObject jSObject) {
        this.bridge.callPluginMethod(str2, str3, new PluginCall(this, str2, str, str3, jSObject));
    }

    private void callCordovaPluginMethod(String str, String str2, String str3, String str4) {
        this.cordovaPluginManager.exec(str2, str3, str, str4);
    }
}


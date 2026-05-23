package com.onesignal.cordova;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.PluginResult;
import org.json.JSONObject;
public class CallbackHelper {
    public static void callbackSuccess(CallbackContext callbackContext, JSONObject jSONObject) {
        if (jSONObject == null) {
            jSONObject = new JSONObject();
        }
        PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, jSONObject);
        pluginResult.setKeepCallback(true);
        callbackContext.sendPluginResult(pluginResult);
    }

    public static void callbackSuccessBoolean(CallbackContext callbackContext, boolean z) {
        PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, z);
        pluginResult.setKeepCallback(true);
        callbackContext.sendPluginResult(pluginResult);
    }

    public static void callbackError(CallbackContext callbackContext, JSONObject jSONObject) {
        if (jSONObject == null) {
            jSONObject = new JSONObject();
        }
        PluginResult pluginResult = new PluginResult(PluginResult.Status.ERROR, jSONObject);
        pluginResult.setKeepCallback(true);
        callbackContext.sendPluginResult(pluginResult);
    }

    public static void callbackError(CallbackContext callbackContext, String str) {
        PluginResult pluginResult = new PluginResult(PluginResult.Status.ERROR, str);
        pluginResult.setKeepCallback(true);
        callbackContext.sendPluginResult(pluginResult);
    }
}


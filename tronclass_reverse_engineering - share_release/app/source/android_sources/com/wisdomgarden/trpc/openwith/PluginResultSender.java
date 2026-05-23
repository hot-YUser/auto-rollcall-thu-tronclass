package com.wisdomgarden.trpc.openwith;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.PluginResult;
class PluginResultSender {
    PluginResultSender() {
    }

    public static boolean invalidAction(CallbackContext callbackContext) {
        callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.INVALID_ACTION));
        return false;
    }

    public static boolean noResult(CallbackContext callbackContext, boolean z) {
        PluginResult pluginResult = new PluginResult(PluginResult.Status.NO_RESULT);
        pluginResult.setKeepCallback(z);
        callbackContext.sendPluginResult(pluginResult);
        return true;
    }

    public static boolean ok(CallbackContext callbackContext) {
        callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK));
        return true;
    }
}


package com.getcapacitor.plugin;

import android.content.SharedPreferences;
import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
@NativePlugin
public class WebView extends Plugin {
    public static final String CAP_SERVER_PATH = "serverBasePath";
    public static final String WEBVIEW_PREFS_NAME = "CapWebViewSettings";

    @PluginMethod
    public void setServerBasePath(PluginCall pluginCall) {
        this.bridge.setServerBasePath(pluginCall.getString("path"));
        pluginCall.success();
    }

    @PluginMethod
    public void getServerBasePath(PluginCall pluginCall) {
        String serverBasePath = this.bridge.getServerBasePath();
        JSObject jSObject = new JSObject();
        jSObject.put("path", serverBasePath);
        pluginCall.success(jSObject);
    }

    @PluginMethod
    public void persistServerBasePath(PluginCall pluginCall) {
        String serverBasePath = this.bridge.getServerBasePath();
        SharedPreferences.Editor editorEdit = getContext().getSharedPreferences(WEBVIEW_PREFS_NAME, 0).edit();
        editorEdit.putString(CAP_SERVER_PATH, serverBasePath);
        editorEdit.apply();
        pluginCall.success();
    }
}


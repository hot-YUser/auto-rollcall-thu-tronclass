package com.wisdomgarden.mobile;

import android.content.SharedPreferences;
import android.util.Log;
import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.plugin.WebView;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
@NativePlugin
public class CapacitorUpdater extends Plugin {
    private String TAG = "Capacitor-updater";
    private CapacitorUpdaterCore implementation;
    private SharedPreferences prefs;

    @Override // com.getcapacitor.Plugin
    public void load() {
        super.load();
        this.prefs = getContext().getSharedPreferences(WebView.WEBVIEW_PREFS_NAME, 0);
        this.implementation = new CapacitorUpdaterCore(getContext(), this);
    }

    @PluginMethod
    public void download(final PluginCall pluginCall) {
        new Thread(new Runnable() { // from class: com.wisdomgarden.mobile.CapacitorUpdater.1
            @Override // java.lang.Runnable
            public void run() {
                String string = pluginCall.getString("url");
                String string2 = pluginCall.getString("version");
                if (CapacitorUpdater.this.implementation.download(string, string2).booleanValue()) {
                    JSObject jSObject = new JSObject();
                    jSObject.put("version", string2);
                    pluginCall.resolve(jSObject);
                    return;
                }
                pluginCall.reject("download failed");
            }
        }).start();
    }

    private boolean _reload() {
        String lastPathHot = this.implementation.getLastPathHot();
        if (lastPathHot.length() <= 0) {
            return true;
        }
        this.bridge.setServerBasePath(lastPathHot);
        return true;
    }

    @PluginMethod
    public void reload(PluginCall pluginCall) {
        if (_reload()) {
            pluginCall.resolve();
        } else {
            pluginCall.reject("reload failed");
        }
    }

    @PluginMethod
    public void set(PluginCall pluginCall) {
        String string = pluginCall.getString("version");
        Boolean bool = pluginCall.getBoolean("autoReload", false);
        if (!this.implementation.set(string).booleanValue()) {
            pluginCall.reject("Update failed, version " + string + " doesn't exist");
        } else if (bool.booleanValue()) {
            reload(pluginCall);
        } else {
            pluginCall.resolve();
        }
    }

    @PluginMethod
    public void delete(PluginCall pluginCall) {
        String string = pluginCall.getString("version");
        try {
            if (this.implementation.delete(string).booleanValue()) {
                pluginCall.resolve();
            } else {
                pluginCall.reject("Delete failed, version " + string + " doesn't exist");
            }
        } catch (IOException e) {
            Log.e("CapacitorUpdater", "An unexpected error occurred during deletion of folder. Message: " + e.getMessage());
            pluginCall.reject("An unexpected error occurred during deletion of folder.");
        }
    }

    @PluginMethod
    public void list(PluginCall pluginCall) {
        ArrayList<String> list = this.implementation.list();
        JSObject jSObject = new JSObject();
        jSObject.put("versions", (Object) new JSArray((Collection) list));
        pluginCall.resolve(jSObject);
    }

    private boolean _reset(Boolean bool) {
        this.implementation.reset();
        if (!bool.booleanValue()) {
            return true;
        }
        this.bridge.setServerAssetPath(this.implementation.getLastPathHot());
        return true;
    }

    @PluginMethod
    public void reset(PluginCall pluginCall) {
        if (_reset(pluginCall.getBoolean("autoReload", false))) {
            pluginCall.resolve();
        } else {
            pluginCall.reject("✨  Capacitor-updater: Reset failed");
        }
    }

    @PluginMethod
    public void current(PluginCall pluginCall) {
        String lastPathHot = this.implementation.getLastPathHot();
        String currentVersion = this.implementation.getCurrentVersion();
        JSObject jSObject = new JSObject();
        if (lastPathHot.length() <= 0) {
            lastPathHot = "builtin";
        }
        jSObject.put(WebView.CAP_SERVER_PATH, lastPathHot);
        jSObject.put("pathPersist", currentVersion);
        pluginCall.resolve(jSObject);
    }
}


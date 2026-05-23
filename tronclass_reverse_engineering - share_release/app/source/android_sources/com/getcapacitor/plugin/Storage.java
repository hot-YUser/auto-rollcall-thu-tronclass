package com.getcapacitor.plugin;

import android.content.SharedPreferences;
import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import java.util.Set;
import org.json.JSONException;
@NativePlugin
public class Storage extends Plugin {
    private static final String PREFS_NAME = "CapacitorStorage";
    private SharedPreferences.Editor editor;
    private SharedPreferences prefs;

    @Override // com.getcapacitor.Plugin
    public void load() {
        SharedPreferences sharedPreferences = getContext().getSharedPreferences(PREFS_NAME, 0);
        this.prefs = sharedPreferences;
        this.editor = sharedPreferences.edit();
    }

    @PluginMethod
    public void get(PluginCall pluginCall) {
        String string = pluginCall.getString("key");
        if (string == null) {
            pluginCall.reject("Must provide key");
            return;
        }
        Object string2 = this.prefs.getString(string, null);
        JSObject jSObject = new JSObject();
        if (string2 == null) {
            string2 = JSObject.NULL;
        }
        jSObject.put("value", string2);
        pluginCall.resolve(jSObject);
    }

    @PluginMethod
    public void set(PluginCall pluginCall) {
        String string = pluginCall.getString("key");
        if (string == null) {
            pluginCall.reject("Must provide key");
            return;
        }
        this.editor.putString(string, pluginCall.getString("value"));
        this.editor.apply();
        pluginCall.resolve();
    }

    @PluginMethod
    public void remove(PluginCall pluginCall) {
        String string = pluginCall.getString("key");
        if (string == null) {
            pluginCall.reject("Must provide key");
            return;
        }
        this.editor.remove(string);
        this.editor.apply();
        pluginCall.resolve();
    }

    @PluginMethod
    public void keys(PluginCall pluginCall) {
        Set<String> setKeySet = this.prefs.getAll().keySet();
        String[] strArr = (String[]) setKeySet.toArray(new String[setKeySet.size()]);
        JSObject jSObject = new JSObject();
        try {
            jSObject.put("keys", (Object) new JSArray(strArr));
            pluginCall.resolve(jSObject);
        } catch (JSONException unused) {
            pluginCall.reject("Unable to create key array.");
        }
    }

    @PluginMethod
    public void clear(PluginCall pluginCall) {
        this.editor.clear();
        this.editor.apply();
        pluginCall.resolve();
    }
}


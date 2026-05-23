package com.go.capacitor.keepscreenon;

import android.app.Activity;
import android.view.Window;
import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
@NativePlugin
public class CapacitorKeepScreenOn extends Plugin {
    private Activity activity;

    @PluginMethod
    public void enable(final PluginCall pluginCall) {
        this.activity = getActivity();
        getBridge().executeOnMainThread(new Runnable() { // from class: com.go.capacitor.keepscreenon.CapacitorKeepScreenOn.1
            @Override // java.lang.Runnable
            public void run() {
                Window window = CapacitorKeepScreenOn.this.getActivity().getWindow();
                window.addFlags(128);
                Boolean boolValueOf = Boolean.valueOf((window.getAttributes().flags & 128) != 0);
                JSObject jSObject = new JSObject();
                jSObject.put("isEnabled", (Object) boolValueOf);
                pluginCall.success(jSObject);
            }
        });
    }

    @PluginMethod
    public void disable(final PluginCall pluginCall) {
        this.activity = getActivity();
        getBridge().executeOnMainThread(new Runnable() { // from class: com.go.capacitor.keepscreenon.CapacitorKeepScreenOn.2
            @Override // java.lang.Runnable
            public void run() {
                Window window = CapacitorKeepScreenOn.this.getActivity().getWindow();
                window.clearFlags(128);
                Boolean boolValueOf = Boolean.valueOf((window.getAttributes().flags & 128) != 0);
                JSObject jSObject = new JSObject();
                jSObject.put("isEnabled", (Object) boolValueOf);
                pluginCall.success(jSObject);
            }
        });
    }

    @PluginMethod
    public void getState(final PluginCall pluginCall) {
        this.activity = getActivity();
        getBridge().executeOnMainThread(new Runnable() { // from class: com.go.capacitor.keepscreenon.CapacitorKeepScreenOn.3
            @Override // java.lang.Runnable
            public void run() {
                Boolean boolValueOf = Boolean.valueOf((CapacitorKeepScreenOn.this.getActivity().getWindow().getAttributes().flags & 128) != 0);
                JSObject jSObject = new JSObject();
                jSObject.put("isEnabled", (Object) boolValueOf);
                pluginCall.success(jSObject);
            }
        });
    }
}


package com.getcapacitor.plugin;

import android.graphics.Color;
import android.view.View;
import android.view.Window;
import androidx.core.view.ViewCompat;
import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
@NativePlugin
public class StatusBar extends Plugin {
    private int currentStatusbarColor;

    @Override // com.getcapacitor.Plugin
    public void load() {
        this.currentStatusbarColor = getActivity().getWindow().getStatusBarColor();
    }

    @PluginMethod
    public void setStyle(final PluginCall pluginCall) {
        final String string = pluginCall.getString("style");
        if (string == null) {
            pluginCall.error("Style must be provided");
        } else {
            getBridge().executeOnMainThread(new Runnable() { // from class: com.getcapacitor.plugin.StatusBar.1
                @Override // java.lang.Runnable
                public void run() {
                    View decorView = StatusBar.this.getActivity().getWindow().getDecorView();
                    int systemUiVisibility = decorView.getSystemUiVisibility();
                    if (string.equals("DARK")) {
                        decorView.setSystemUiVisibility(systemUiVisibility & (-8193));
                    } else {
                        decorView.setSystemUiVisibility(systemUiVisibility | 8192);
                    }
                    pluginCall.success();
                }
            });
        }
    }

    @PluginMethod
    public void setBackgroundColor(final PluginCall pluginCall) {
        final String string = pluginCall.getString("color");
        if (string == null) {
            pluginCall.error("Color must be provided");
        } else {
            getBridge().executeOnMainThread(new Runnable() { // from class: com.getcapacitor.plugin.StatusBar.2
                @Override // java.lang.Runnable
                public void run() {
                    Window window = StatusBar.this.getActivity().getWindow();
                    window.clearFlags(67108864);
                    window.addFlags(Integer.MIN_VALUE);
                    try {
                        int color = Color.parseColor(string.toUpperCase());
                        window.setStatusBarColor(color);
                        StatusBar.this.currentStatusbarColor = color;
                        pluginCall.success();
                    } catch (IllegalArgumentException unused) {
                        pluginCall.error("Invalid color provided. Must be a hex string (ex: #ff0000");
                    }
                }
            });
        }
    }

    @PluginMethod
    public void hide(final PluginCall pluginCall) {
        getBridge().executeOnMainThread(new Runnable() { // from class: com.getcapacitor.plugin.StatusBar.3
            @Override // java.lang.Runnable
            public void run() {
                View decorView = StatusBar.this.getActivity().getWindow().getDecorView();
                decorView.setSystemUiVisibility(decorView.getSystemUiVisibility() | 4);
                pluginCall.success();
            }
        });
    }

    @PluginMethod
    public void show(final PluginCall pluginCall) {
        getBridge().executeOnMainThread(new Runnable() { // from class: com.getcapacitor.plugin.StatusBar.4
            @Override // java.lang.Runnable
            public void run() {
                View decorView = StatusBar.this.getActivity().getWindow().getDecorView();
                decorView.setSystemUiVisibility(decorView.getSystemUiVisibility() & (-5));
                pluginCall.success();
            }
        });
    }

    @PluginMethod
    public void getInfo(PluginCall pluginCall) {
        String str;
        View decorView = getActivity().getWindow().getDecorView();
        Window window = getActivity().getWindow();
        if ((decorView.getSystemUiVisibility() & 8192) == 8192) {
            str = "LIGHT";
        } else {
            str = "DARK";
        }
        JSObject jSObject = new JSObject();
        jSObject.put("visible", (decorView.getSystemUiVisibility() & 4) != 4);
        jSObject.put("style", str);
        jSObject.put("color", String.format("#%06X", Integer.valueOf(window.getStatusBarColor() & ViewCompat.MEASURED_SIZE_MASK)));
        jSObject.put("overlays", (decorView.getSystemUiVisibility() & 1024) == 1024);
        pluginCall.resolve(jSObject);
    }

    @PluginMethod
    public void setOverlaysWebView(final PluginCall pluginCall) {
        final Boolean bool = pluginCall.getBoolean("overlay", true);
        getBridge().executeOnMainThread(new Runnable() { // from class: com.getcapacitor.plugin.StatusBar.5
            @Override // java.lang.Runnable
            public void run() {
                if (bool.booleanValue()) {
                    View decorView = StatusBar.this.getActivity().getWindow().getDecorView();
                    decorView.setSystemUiVisibility(decorView.getSystemUiVisibility() | 1280);
                    StatusBar statusBar = StatusBar.this;
                    statusBar.currentStatusbarColor = statusBar.getActivity().getWindow().getStatusBarColor();
                    StatusBar.this.getActivity().getWindow().setStatusBarColor(0);
                    pluginCall.success();
                    return;
                }
                View decorView2 = StatusBar.this.getActivity().getWindow().getDecorView();
                decorView2.setSystemUiVisibility(decorView2.getSystemUiVisibility() & (-1281));
                StatusBar.this.getActivity().getWindow().setStatusBarColor(StatusBar.this.currentStatusbarColor);
                pluginCall.success();
            }
        });
    }
}


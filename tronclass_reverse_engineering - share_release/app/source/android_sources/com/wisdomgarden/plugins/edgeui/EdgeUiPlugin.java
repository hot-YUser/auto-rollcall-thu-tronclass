package com.wisdomgarden.plugins.edgeui;

import android.view.Window;
import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
@NativePlugin(name = "SupportEdgeUi")
public class EdgeUiPlugin extends Plugin {
    private EdgeUi implementation;

    @Override // com.getcapacitor.Plugin
    public void load() {
        Window window = getActivity().getWindow();
        this.implementation = new EdgeUi(window, window.getDecorView());
    }

    @PluginMethod
    public void setEdgeUiStyle(final PluginCall pluginCall) {
        final String string = pluginCall.getString("color", "#FFFFFF");
        getBridge().executeOnMainThread(new Runnable() { // from class: com.wisdomgarden.plugins.edgeui.EdgeUiPlugin$$ExternalSyntheticLambda0
            @Override // java.lang.Runnable
            public final void run() {
                this.f$0.m326x7f6a5625(string, pluginCall);
            }
        });
    }
    /* synthetic */ void m326x7f6a5625(String str, PluginCall pluginCall) {
        boolean edgeUiStyle = this.implementation.setEdgeUiStyle(str.toUpperCase());
        JSObject jSObject = new JSObject();
        jSObject.put("success", edgeUiStyle);
        pluginCall.resolve(jSObject);
    }
}


package com.getcapacitor.plugin;

import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import org.apache.cordova.globalization.Globalization;
@NativePlugin
public class Toast extends Plugin {
    private static final int GRAVITY_CENTER = 17;
    private static final int GRAVITY_TOP = 49;

    @PluginMethod
    public void show(PluginCall pluginCall) {
        String string = pluginCall.getString("text");
        if (string == null) {
            pluginCall.error("Must provide text");
            return;
        }
        android.widget.Toast toastMakeText = android.widget.Toast.makeText(getContext(), string, Globalization.LONG.equals(pluginCall.getString("duration", "short")) ? 1 : 0);
        String string2 = pluginCall.getString("position", "bottom");
        if ("top".equals(string2)) {
            toastMakeText.setGravity(49, 0, 40);
        } else if ("center".equals(string2)) {
            toastMakeText.setGravity(17, 0, 0);
        }
        toastMakeText.show();
        pluginCall.success();
    }
}


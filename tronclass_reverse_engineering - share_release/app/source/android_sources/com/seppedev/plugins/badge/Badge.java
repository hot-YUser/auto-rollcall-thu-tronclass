package com.seppedev.plugins.badge;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import me.leolin.shortcutbadger.ShortcutBadger;
@NativePlugin
public class Badge extends Plugin {
    @PluginMethod
    public void setBadgeCount(PluginCall pluginCall) {
        int iIntValue = pluginCall.getInt("count", 0).intValue();
        JSObject jSObject = new JSObject();
        if (ShortcutBadger.isBadgeCounterSupported(getContext())) {
            ShortcutBadger.applyCount(getContext(), iIntValue);
            jSObject.put("success", true);
            jSObject.put("value", iIntValue);
            pluginCall.success(jSObject);
            return;
        }
        jSObject.put("success", false);
        pluginCall.success(jSObject);
    }

    @PluginMethod
    public void clearBadgeCount(PluginCall pluginCall) {
        JSObject jSObject = new JSObject();
        if (ShortcutBadger.isBadgeCounterSupported(getContext())) {
            ShortcutBadger.removeCount(getContext());
            jSObject.put("success", true);
            pluginCall.success(jSObject);
        } else {
            jSObject.put("success", false);
            pluginCall.success(jSObject);
        }
    }

    @PluginMethod
    public void requestPermission(PluginCall pluginCall) {
        JSObject jSObject = new JSObject();
        jSObject.put("success", true);
        pluginCall.success(jSObject);
    }

    @PluginMethod
    public void hasPermission(PluginCall pluginCall) {
        JSObject jSObject = new JSObject();
        jSObject.put("success", true);
        pluginCall.success(jSObject);
    }
}


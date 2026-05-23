package com.getcapacitor.plugin;

import android.content.Context;
import android.os.Build;
import android.os.VibrationEffect;
import android.os.Vibrator;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
@NativePlugin
public class Haptics extends Plugin {
    boolean selectionStarted = false;

    @PluginMethod
    public void vibrate(PluginCall pluginCall) {
        Context context = getContext();
        int iIntValue = pluginCall.getInt("duration", 300).intValue();
        if (!hasPermission("android.permission.VIBRATE")) {
            pluginCall.error("Can't vibrate: Missing VIBRATE permission in AndroidManifest.xml");
            return;
        }
        if (Build.VERSION.SDK_INT >= 26) {
            ((Vibrator) context.getSystemService("vibrator")).vibrate(VibrationEffect.createOneShot(iIntValue, -1));
        } else {
            vibratePre26(iIntValue);
        }
        pluginCall.success();
    }

    private void vibratePre26(int i) {
        ((Vibrator) getContext().getSystemService("vibrator")).vibrate(i);
    }

    @PluginMethod
    public void impact(PluginCall pluginCall) {
        this.bridge.getWebView().performHapticFeedback(0);
        pluginCall.success();
    }

    @PluginMethod
    public void notification(PluginCall pluginCall) {
        pluginCall.unimplemented();
    }

    @PluginMethod
    public void selectionStart(PluginCall pluginCall) {
        this.selectionStarted = true;
    }

    @PluginMethod
    public void selectionChanged(PluginCall pluginCall) {
        if (this.selectionStarted) {
            this.bridge.getWebView().performHapticFeedback(4);
        }
    }

    @PluginMethod
    public void selectionEnd(PluginCall pluginCall) {
        this.selectionStarted = false;
    }
}


package com.getcapacitor.plugin;

import android.content.ClipData;
import android.content.ClipboardManager;
import com.getcapacitor.JSObject;
import com.getcapacitor.Logger;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import org.apache.cordova.globalization.Globalization;
@NativePlugin
public class Clipboard extends Plugin {
    @PluginMethod
    public void write(PluginCall pluginCall) {
        ClipData clipDataNewPlainText;
        String string = pluginCall.getString("string");
        String string2 = pluginCall.getString("image");
        String string3 = pluginCall.getString("url");
        String string4 = pluginCall.getString("label");
        ClipboardManager clipboardManager = (ClipboardManager) getContext().getSystemService("clipboard");
        if (string != null) {
            clipDataNewPlainText = ClipData.newPlainText(string4, string);
        } else if (string2 != null) {
            clipDataNewPlainText = ClipData.newPlainText(string4, string2);
        } else {
            clipDataNewPlainText = string3 != null ? ClipData.newPlainText(string4, string3) : null;
        }
        if (clipDataNewPlainText != null) {
            clipboardManager.setPrimaryClip(clipDataNewPlainText);
        }
        pluginCall.success();
    }

    @PluginMethod
    public void read(PluginCall pluginCall) {
        CharSequence string;
        ClipboardManager clipboardManager = (ClipboardManager) getContext().getSystemService("clipboard");
        String str = "text/plain";
        if (!clipboardManager.hasPrimaryClip()) {
            string = null;
        } else if (clipboardManager.getPrimaryClipDescription().hasMimeType("text/plain")) {
            Logger.debug(getLogTag(), "Got plaintxt");
            string = clipboardManager.getPrimaryClip().getItemAt(0).getText();
        } else {
            Logger.debug(getLogTag(), "Not plaintext!");
            string = clipboardManager.getPrimaryClip().getItemAt(0).coerceToText(getContext()).toString();
        }
        JSObject jSObject = new JSObject();
        jSObject.put("value", (Object) (string != null ? string : ""));
        if (string != null && string.toString().startsWith("data:")) {
            str = string.toString().split(";")[0].split(":")[1];
        }
        jSObject.put(Globalization.TYPE, str);
        pluginCall.success(jSObject);
    }
}


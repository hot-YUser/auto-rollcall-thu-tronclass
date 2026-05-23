package com.getcapacitor.plugin;

import android.os.Build;
import androidx.core.app.NotificationManagerCompat;
import androidx.core.content.ContextCompat;
import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.sarriaroman.PhotoViewer.PhotoViewer;
@NativePlugin
public class Permissions extends Plugin {
    @PluginMethod
    public void query(PluginCall pluginCall) {
        String string = pluginCall.getString("name");
        string.hashCode();
        switch (string) {
            case "clipboard-write":
            case "clipboard-read":
                checkClipboard(pluginCall);
                break;
            case "camera":
                checkCamera(pluginCall);
                return;
            case "photos":
                checkPhotos(pluginCall);
                return;
            case "geolocation":
                checkGeo(pluginCall);
                return;
            case "notifications":
                checkNotifications(pluginCall);
                return;
            case "microphone":
                break;
            default:
                pluginCall.reject("Unknown permission type");
                return;
        }
        checkMicrophone(pluginCall);
    }

    private void checkPerm(String str, PluginCall pluginCall) {
        JSObject jSObject = new JSObject();
        if (ContextCompat.checkSelfPermission(getContext(), str) == -1) {
            jSObject.put("state", "denied");
        } else if (ContextCompat.checkSelfPermission(getContext(), str) == 0) {
            jSObject.put("state", "granted");
        } else {
            jSObject.put("state", "prompt");
        }
        pluginCall.resolve(jSObject);
    }

    private void checkCamera(PluginCall pluginCall) {
        checkPerm("android.permission.CAMERA", pluginCall);
    }

    private void checkPhotos(PluginCall pluginCall) {
        if (Build.VERSION.SDK_INT >= 33) {
            pluginCall.reject("Not implement on Android 13+");
        } else {
            checkPerm(PhotoViewer.READ, pluginCall);
        }
    }

    private void checkGeo(PluginCall pluginCall) {
        checkPerm("android.permission.ACCESS_COARSE_LOCATION", pluginCall);
    }

    private void checkNotifications(PluginCall pluginCall) {
        boolean zAreNotificationsEnabled = NotificationManagerCompat.from(getContext()).areNotificationsEnabled();
        JSObject jSObject = new JSObject();
        jSObject.put("state", zAreNotificationsEnabled ? "granted" : "denied");
        pluginCall.resolve(jSObject);
    }

    private void checkClipboard(PluginCall pluginCall) {
        JSObject jSObject = new JSObject();
        jSObject.put("state", "granted");
        pluginCall.resolve(jSObject);
    }

    private void checkMicrophone(PluginCall pluginCall) {
        checkPerm("android.permission.RECORD_AUDIO", pluginCall);
    }
}


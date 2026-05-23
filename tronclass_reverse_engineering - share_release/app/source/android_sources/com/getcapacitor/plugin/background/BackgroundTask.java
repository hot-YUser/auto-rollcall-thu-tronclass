package com.getcapacitor.plugin.background;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import androidx.localbroadcastmanager.content.LocalBroadcastManager;
import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
@NativePlugin
public class BackgroundTask extends Plugin {
    public static String TASK_BROADCAST_ACTION = "com.getcapacitor.app.BACKGROUND_TASK_BROADCAST";
    Intent serviceIntent = null;
    private BroadcastReceiver taskReceiver;

    private void callTaskCallback(String str) {
    }

    @Override // com.getcapacitor.Plugin
    public void load() {
        IntentFilter intentFilter = new IntentFilter(TASK_BROADCAST_ACTION);
        this.taskReceiver = new BroadcastReceiver() { // from class: com.getcapacitor.plugin.background.BackgroundTask.1
            @Override // android.content.BroadcastReceiver
            public void onReceive(Context context, Intent intent) {
                intent.getStringExtra("taskId");
            }
        };
        LocalBroadcastManager.getInstance(getContext()).registerReceiver(this.taskReceiver, intentFilter);
    }

    @PluginMethod(returnType = PluginMethod.RETURN_CALLBACK)
    public void beforeExit(PluginCall pluginCall) {
        JSObject jSObject = new JSObject();
        jSObject.put("taskId", pluginCall.getCallbackId());
        pluginCall.success(jSObject);
    }

    @PluginMethod
    public void finish(PluginCall pluginCall) {
        if (pluginCall.getString("taskId") == null) {
            pluginCall.error("Must provide taskId");
        } else {
            pluginCall.success();
        }
    }
}


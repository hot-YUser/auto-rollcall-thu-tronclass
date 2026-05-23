package com.getcapacitor.plugin;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import com.getcapacitor.JSObject;
import com.getcapacitor.Logger;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
@NativePlugin(permissions = {"android.permission.ACCESS_NETWORK_STATE"})
public class Network extends Plugin {
    public static final String NETWORK_CHANGE_EVENT = "networkStatusChange";
    private static final String PERMISSION_NOT_SET = "android.permission.ACCESS_NETWORK_STATE not set in AndroidManifest.xml";
    private ConnectivityManager cm;
    private BroadcastReceiver receiver;

    @Override // com.getcapacitor.Plugin
    public void load() {
        this.cm = (ConnectivityManager) getContext().getSystemService("connectivity");
        this.receiver = new BroadcastReceiver() { // from class: com.getcapacitor.plugin.Network.1
            @Override // android.content.BroadcastReceiver
            public void onReceive(Context context, Intent intent) {
                if (!Network.this.hasRequiredPermissions()) {
                    Logger.error(Network.this.getLogTag(), Network.PERMISSION_NOT_SET, null);
                } else {
                    Network network = Network.this;
                    network.notifyListeners(Network.NETWORK_CHANGE_EVENT, network.getStatusJSObject(network.cm.getActiveNetworkInfo()));
                }
            }
        };
    }

    @PluginMethod
    public void getStatus(PluginCall pluginCall) {
        if (hasRequiredPermissions()) {
            pluginCall.success(getStatusJSObject(((ConnectivityManager) getContext().getSystemService("connectivity")).getActiveNetworkInfo()));
        } else {
            pluginCall.error(PERMISSION_NOT_SET);
        }
    }

    @Override // com.getcapacitor.Plugin
    protected void handleOnResume() {
        getActivity().registerReceiver(this.receiver, new IntentFilter("android.net.conn.CONNECTIVITY_CHANGE"));
    }

    @Override // com.getcapacitor.Plugin
    protected void handleOnPause() {
        getActivity().unregisterReceiver(this.receiver);
    }
    public JSObject getStatusJSObject(NetworkInfo networkInfo) {
        JSObject jSObject = new JSObject();
        if (networkInfo == null) {
            jSObject.put("connected", false);
            jSObject.put("connectionType", PluginMethod.RETURN_NONE);
        } else {
            jSObject.put("connected", networkInfo.isConnected());
            jSObject.put("connectionType", getNormalizedTypeName(networkInfo));
        }
        return jSObject;
    }

    private String getNormalizedTypeName(NetworkInfo networkInfo) {
        String typeName = networkInfo.getTypeName();
        if (typeName.equals("WIFI")) {
            return "wifi";
        }
        if (typeName.equals("MOBILE")) {
            return "cellular";
        }
        return PluginMethod.RETURN_NONE;
    }
}


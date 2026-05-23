package com.sarriaroman.PhotoViewer;

import android.content.Intent;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
public class PhotoViewer extends CordovaPlugin {
    public static final int PERMISSION_DENIED_ERROR = 20;
    public static final String READ = "android.permission.READ_EXTERNAL_STORAGE";
    public static final int REQ_CODE = 0;
    public static final String WRITE = "android.permission.WRITE_EXTERNAL_STORAGE";
    protected JSONArray args;
    protected CallbackContext callbackContext;

    @Override // org.apache.cordova.CordovaPlugin
    public boolean execute(String str, JSONArray jSONArray, CallbackContext callbackContext) throws JSONException {
        if (!str.equals("show")) {
            return false;
        }
        this.args = jSONArray;
        this.callbackContext = callbackContext;
        if (this.f7cordova.hasPermission(READ) && this.f7cordova.hasPermission(WRITE)) {
            launchActivity();
            return true;
        }
        getPermission();
        return true;
    }

    protected void getPermission() {
        this.f7cordova.requestPermissions(this, 0, new String[]{WRITE, READ});
    }

    protected void launchActivity() throws JSONException {
        Intent intent = new Intent(this.f7cordova.getActivity(), (Class<?>) PhotoActivity.class);
        PhotoActivity.mArgs = this.args;
        this.f7cordova.getActivity().startActivity(intent);
        this.callbackContext.success("");
    }

    @Override // org.apache.cordova.CordovaPlugin
    public void onRequestPermissionResult(int i, String[] strArr, int[] iArr) throws JSONException {
        for (int i2 : iArr) {
            if (i2 == -1) {
                this.callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, 20));
                return;
            }
        }
        if (i != 0) {
            return;
        }
        launchActivity();
    }
}


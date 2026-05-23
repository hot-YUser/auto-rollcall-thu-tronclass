package com.megster.cordova;

import android.content.Intent;
import android.net.Uri;
import android.util.Log;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
public class FileChooser extends CordovaPlugin {
    private static final String ACTION_OPEN = "open";
    public static final String MIME = "mime";
    private static final int PICK_FILE_REQUEST = 1;
    private static final String TAG = "FileChooser";
    CallbackContext callback;

    @Override // org.apache.cordova.CordovaPlugin
    public boolean execute(String str, JSONArray jSONArray, CallbackContext callbackContext) throws JSONException {
        if (!str.equals(ACTION_OPEN)) {
            return false;
        }
        chooseFile(jSONArray.optJSONObject(0), callbackContext);
        return true;
    }

    public void chooseFile(JSONObject jSONObject, CallbackContext callbackContext) {
        String strOptString = jSONObject.has(MIME) ? jSONObject.optString(MIME) : "*/*";
        Intent intent = new Intent("android.intent.action.GET_CONTENT");
        intent.setType(strOptString);
        intent.addCategory("android.intent.category.OPENABLE");
        intent.putExtra("android.intent.extra.LOCAL_ONLY", true);
        this.f7cordova.startActivityForResult(this, Intent.createChooser(intent, "Select File"), 1);
        PluginResult pluginResult = new PluginResult(PluginResult.Status.NO_RESULT);
        pluginResult.setKeepCallback(true);
        this.callback = callbackContext;
        callbackContext.sendPluginResult(pluginResult);
    }

    @Override // org.apache.cordova.CordovaPlugin
    public void onActivityResult(int i, int i2, Intent intent) {
        CallbackContext callbackContext;
        if (i != 1 || (callbackContext = this.callback) == null) {
            return;
        }
        if (i2 != -1) {
            if (i2 == 0) {
                callbackContext.error("User canceled.");
                return;
            } else {
                callbackContext.error(i2);
                return;
            }
        }
        Uri data = intent.getData();
        if (data != null) {
            Log.w(TAG, data.toString());
            this.callback.success(data.toString());
        } else {
            this.callback.error("File uri was null");
        }
    }
}


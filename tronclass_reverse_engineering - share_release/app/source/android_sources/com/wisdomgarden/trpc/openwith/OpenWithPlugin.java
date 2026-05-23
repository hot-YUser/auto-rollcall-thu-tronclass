package com.wisdomgarden.trpc.openwith;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.util.Log;
import java.util.ArrayList;
import java.util.Arrays;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
public class OpenWithPlugin extends CordovaPlugin {
    public static final int DEFAULT_ATTACHMENTS_WITH_MAX_COUNT = 5;
    private SharedPreferences prefs;
    private final String PLUGIN_NAME = "OpenWithPlugin";
    private final String SAVED_KEY = "sharedData";
    private final int DEBUG = 0;
    private final int INFO = 10;
    private final int WARN = 20;
    private final int ERROR = 30;
    private int verbosity = 10;
    private ArrayList pendingIntents = new ArrayList();
    private int maxAttachmentCount = 5;

    private void log(int i, String str) {
        if (i == 0) {
            Log.d("OpenWithPlugin", str);
            return;
        }
        if (i == 10) {
            Log.i("OpenWithPlugin", str);
        } else if (i == 20) {
            Log.w("OpenWithPlugin", str);
        } else {
            if (i != 30) {
                return;
            }
            Log.e("OpenWithPlugin", str);
        }
    }

    @Override // org.apache.cordova.CordovaPlugin
    public void initialize(CordovaInterface cordovaInterface, CordovaWebView cordovaWebView) {
        log(0, "initialize()");
        try {
            Context context = this.f7cordova.getContext();
            this.maxAttachmentCount = context.getPackageManager().getApplicationInfo(context.getPackageName(), 128).metaData.getInt("OPEN_WITH_ATTACHMENTS_WITH_MAX_COUNT", 5);
        } catch (Exception unused) {
            this.maxAttachmentCount = 5;
        }
        Serializer.setMaxAttachmentCount(this.maxAttachmentCount);
        this.prefs = this.f7cordova.getContext().getSharedPreferences("OpenWithSharedData", 0);
        super.initialize(cordovaInterface, cordovaWebView);
    }

    @Override // org.apache.cordova.CordovaPlugin
    public void onReset() {
        this.verbosity = 10;
        this.pendingIntents.clear();
    }

    @Override // org.apache.cordova.CordovaPlugin
    public boolean execute(String str, JSONArray jSONArray, CallbackContext callbackContext) {
        log(0, "execute() called with action:" + str + " and options: " + jSONArray);
        if ("setVerbosity".equals(str)) {
            return setVerbosity(jSONArray, callbackContext);
        }
        if ("init".equals(str)) {
            return init(jSONArray, callbackContext);
        }
        if ("fetchSharedData".equals(str)) {
            return fetchSharedData(jSONArray, callbackContext);
        }
        if ("exit".equals(str)) {
            return exit(jSONArray, callbackContext);
        }
        log(0, "execute() did not recognize this action: " + str);
        return false;
    }

    public boolean setVerbosity(JSONArray jSONArray, CallbackContext callbackContext) {
        log(0, "setVerbosity() " + jSONArray);
        if (jSONArray.length() != 1) {
            log(20, "setVerbosity() -> invalidAction");
            return false;
        }
        try {
            this.verbosity = jSONArray.getInt(0);
            log(0, "setVerbosity() -> ok");
            return PluginResultSender.ok(callbackContext);
        } catch (JSONException unused) {
            log(20, "setVerbosity() -> invalidAction");
            return false;
        }
    }

    public boolean init(JSONArray jSONArray, CallbackContext callbackContext) {
        log(0, "init() " + jSONArray);
        if (jSONArray.length() != 0) {
            log(20, "init() -> invalidAction");
            return false;
        }
        this.verbosity = 10;
        onNewIntent(this.f7cordova.getActivity().getIntent());
        log(0, "init() -> ok");
        return PluginResultSender.ok(callbackContext);
    }

    public boolean exit(JSONArray jSONArray, CallbackContext callbackContext) {
        log(0, "exit() " + jSONArray);
        if (jSONArray.length() != 0) {
            log(20, "exit() -> invalidAction");
            return false;
        }
        this.f7cordova.getActivity().moveTaskToBack(true);
        log(0, "exit() -> ok");
        return PluginResultSender.ok(callbackContext);
    }

    public boolean fetchSharedData(JSONArray jSONArray, CallbackContext callbackContext) {
        log(0, "fetchSharedData() " + jSONArray);
        if (jSONArray.length() != 0) {
            log(20, "fetchSharedData() -> invalidAction");
            return false;
        }
        JSONObject sharedData = getSharedData();
        removeSharedData();
        if (sharedData != null) {
            callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK, sharedData));
            return true;
        }
        return PluginResultSender.ok(callbackContext);
    }

    @Override // org.apache.cordova.CordovaPlugin
    public void onNewIntent(Intent intent) {
        log(0, "onNewIntent() " + intent.getAction());
        JSONObject jSONObject = toJSONObject(intent);
        if (jSONObject != null) {
            this.pendingIntents.add(jSONObject);
        }
        processPendingIntents();
    }

    private void processPendingIntents() {
        log(0, "processPendingIntents()");
        JSONObject sharedData = getSharedData();
        for (int i = 0; i < this.pendingIntents.size(); i++) {
            sharedData = mergeIntends((JSONObject) this.pendingIntents.get(i), sharedData);
        }
        this.pendingIntents.clear();
        if (sharedData != null) {
            saveSharedData(sharedData);
        }
    }

    private JSONObject mergeIntends(JSONObject jSONObject, JSONObject jSONObject2) {
        if (jSONObject2 == null) {
            try {
                JSONObject jSONObject3 = new JSONObject();
                jSONObject3.put("action", jSONObject.has("action") ? jSONObject.getString("action") : "send");
                jSONObject3.put("exit", jSONObject.has("exit") ? jSONObject.getBoolean("exit") : false);
                jSONObject3.put("items", jSONObject.getJSONArray("items"));
                jSONObject3.put("receivedCounts", jSONObject.getInt("receivedCounts"));
                jSONObject3.put("maxAttachmentCount", this.maxAttachmentCount);
                return jSONObject3;
            } catch (Exception unused) {
                return null;
            }
        }
        try {
            JSONArray jSONArray = jSONObject2.getJSONArray("items");
            JSONArray jSONArray2 = jSONObject.getJSONArray("items");
            if (jSONArray == jSONArray2) {
                return jSONObject2;
            }
            int length = jSONArray2.length();
            for (int i = 0; i < length; i++) {
                jSONArray.put(jSONArray2.getJSONObject(i));
            }
            jSONObject2.put("action", jSONObject.has("action") ? jSONObject.getString("action") : "send");
            jSONObject2.put("exit", jSONObject.has("exit") ? jSONObject.getBoolean("exit") : false);
            jSONObject2.put("receivedCounts", jSONArray.length());
            jSONObject2.put("maxAttachmentCount", this.maxAttachmentCount);
            return jSONObject2;
        } catch (Exception unused2) {
            return jSONObject2;
        }
    }

    private JSONObject toJSONObject(Intent intent) {
        try {
            return Serializer.toJSONObject(this.f7cordova.getActivity().getApplicationContext(), intent, this.f7cordova.getContext().getCacheDir());
        } catch (JSONException e) {
            log(30, "Error converting intent to JSON: " + e.getMessage());
            log(30, Arrays.toString(e.getStackTrace()));
            return null;
        }
    }

    private void saveSharedData(JSONObject jSONObject) {
        try {
            SharedPreferences.Editor editorEdit = this.prefs.edit();
            editorEdit.putString("sharedData", jSONObject.toString());
            editorEdit.commit();
        } catch (Exception unused) {
        }
    }

    private boolean removeSharedData() {
        try {
            SharedPreferences.Editor editorEdit = this.prefs.edit();
            editorEdit.remove("sharedData");
            editorEdit.commit();
            return true;
        } catch (Exception unused) {
            return false;
        }
    }

    private JSONObject getSharedData() {
        String string = this.prefs.getString("sharedData", null);
        if (string == null) {
            return null;
        }
        try {
            return new JSONObject(string);
        } catch (Exception unused) {
            return null;
        }
    }
}


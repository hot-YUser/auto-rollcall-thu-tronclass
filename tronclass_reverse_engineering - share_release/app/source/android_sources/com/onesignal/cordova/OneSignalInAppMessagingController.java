package com.onesignal.cordova;

import com.onesignal.OneSignal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
public class OneSignalInAppMessagingController {
    private static void callbackSuccess(CallbackContext callbackContext, JSONObject jSONObject) {
        if (jSONObject == null) {
            jSONObject = new JSONObject();
        }
        PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, jSONObject);
        pluginResult.setKeepCallback(true);
        callbackContext.sendPluginResult(pluginResult);
    }

    public static boolean addTriggers(JSONArray jSONArray) {
        try {
            JSONObject jSONObject = jSONArray.getJSONObject(0);
            HashMap map = new HashMap();
            Iterator<String> itKeys = jSONObject.keys();
            while (itKeys.hasNext()) {
                String next = itKeys.next();
                map.put(next, jSONObject.get(next));
            }
            OneSignal.addTriggers(map);
            return true;
        } catch (JSONException e) {
            e.printStackTrace();
            return false;
        }
    }

    public static boolean removeTriggersForKeys(JSONArray jSONArray) {
        try {
            JSONArray jSONArray2 = jSONArray.getJSONArray(0);
            ArrayList arrayList = new ArrayList();
            for (int i = 0; i < jSONArray2.length(); i++) {
                arrayList.add(jSONArray2.getString(i));
            }
            OneSignal.removeTriggersForKeys(arrayList);
            return true;
        } catch (JSONException e) {
            e.printStackTrace();
            return false;
        }
    }

    public static boolean getTriggerValueForKey(CallbackContext callbackContext, JSONArray jSONArray) {
        try {
            Object triggerValueForKey = OneSignal.getTriggerValueForKey(jSONArray.getString(0));
            if (triggerValueForKey == null) {
                callbackSuccess(callbackContext, new JSONObject());
                return true;
            }
            callbackSuccess(callbackContext, new JSONObject("{value:" + triggerValueForKey.toString() + "}"));
            return true;
        } catch (JSONException e) {
            e.printStackTrace();
            return false;
        }
    }

    public static boolean pauseInAppMessages(JSONArray jSONArray) {
        try {
            OneSignal.pauseInAppMessages(jSONArray.getBoolean(0));
            return true;
        } catch (JSONException e) {
            e.printStackTrace();
            return false;
        }
    }

    public static boolean isInAppMessagingPaused(CallbackContext callbackContext) {
        CallbackHelper.callbackSuccessBoolean(callbackContext, OneSignal.isInAppMessagingPaused());
        return true;
    }
}


package com.onesignal;

import android.content.Intent;
import android.os.Bundle;
import com.onesignal.OneSignal;
import org.json.JSONException;
import org.json.JSONObject;
class OSNotificationFormatHelper {
    public static final String PAYLOAD_OS_NOTIFICATION_ID = "i";
    public static final String PAYLOAD_OS_ROOT_CUSTOM = "custom";

    OSNotificationFormatHelper() {
    }

    static boolean isOneSignalIntent(Intent intent) {
        if (intent == null) {
            return false;
        }
        return isOneSignalBundle(intent.getExtras());
    }

    static boolean isOneSignalBundle(Bundle bundle) {
        return getOSNotificationIdFromBundle(bundle) != null;
    }

    private static String getOSNotificationIdFromBundle(Bundle bundle) {
        if (bundle != null && !bundle.isEmpty()) {
            String string = bundle.getString(PAYLOAD_OS_ROOT_CUSTOM, null);
            if (string != null) {
                return getOSNotificationIdFromJsonString(string);
            }
            OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "Not a OneSignal formatted Bundle. No 'custom' field in the bundle.");
        }
        return null;
    }

    static String getOSNotificationIdFromJson(JSONObject jSONObject) {
        if (jSONObject == null) {
            return null;
        }
        return getOSNotificationIdFromJsonString(jSONObject.optString(PAYLOAD_OS_ROOT_CUSTOM, null));
    }

    private static String getOSNotificationIdFromJsonString(String str) {
        JSONObject jSONObject;
        try {
            jSONObject = new JSONObject(str);
        } catch (JSONException unused) {
            OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "Not a OneSignal formatted JSON String, error parsing string as JSON.");
        }
        if (jSONObject.has("i")) {
            return jSONObject.optString("i", null);
        }
        OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "Not a OneSignal formatted JSON string. No 'i' field in custom.");
        return null;
    }
}


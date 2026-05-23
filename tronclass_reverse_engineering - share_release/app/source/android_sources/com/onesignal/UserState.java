package com.onesignal;

import com.onesignal.LocationController;
import com.onesignal.outcomes.OSOutcomeConstants;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.apache.cordova.globalization.Globalization;
import org.json.JSONException;
import org.json.JSONObject;
abstract class UserState {
    public static final int DEVICE_TYPE_ANDROID = 1;
    public static final int DEVICE_TYPE_EMAIL = 11;
    public static final int DEVICE_TYPE_FIREOS = 2;
    public static final int DEVICE_TYPE_HUAWEI = 13;
    public static final int DEVICE_TYPE_SMS = 14;
    private static final String[] LOCATION_FIELDS;
    private static final Set<String> LOCATION_FIELDS_SET;
    private static final Object LOCK = new Object();
    public static final int PUSH_STATUS_FIREBASE_FCM_ERROR_IOEXCEPTION_AUTHENTICATION_FAILED = -29;
    static final int PUSH_STATUS_FIREBASE_FCM_ERROR_IOEXCEPTION_OTHER = -11;
    static final int PUSH_STATUS_FIREBASE_FCM_ERROR_IOEXCEPTION_SERVICE_NOT_AVAILABLE = -9;
    static final int PUSH_STATUS_FIREBASE_FCM_ERROR_MISC_EXCEPTION = -12;
    static final int PUSH_STATUS_FIREBASE_FCM_INIT_ERROR = -8;
    public static final int PUSH_STATUS_HMS_API_EXCEPTION_OTHER = -27;
    public static final int PUSH_STATUS_HMS_ARGUMENTS_INVALID = -26;
    public static final int PUSH_STATUS_HMS_TOKEN_TIMEOUT = -25;
    static final int PUSH_STATUS_INVALID_FCM_SENDER_ID = -6;
    static final int PUSH_STATUS_MISSING_ANDROID_SUPPORT_LIBRARY = -3;
    static final int PUSH_STATUS_MISSING_FIREBASE_FCM_LIBRARY = -4;
    public static final int PUSH_STATUS_MISSING_HMS_PUSHKIT_LIBRARY = -28;
    static final int PUSH_STATUS_NO_PERMISSION = 0;
    static final int PUSH_STATUS_OUTDATED_ANDROID_SUPPORT_LIBRARY = -5;
    static final int PUSH_STATUS_OUTDATED_GOOGLE_PLAY_SERVICES_APP = -7;
    public static final int PUSH_STATUS_SUBSCRIBED = 1;
    static final int PUSH_STATUS_UNSUBSCRIBE = -2;
    public static final String TAGS = "tags";
    private JSONObject dependValues;
    private String persistKey;
    private JSONObject syncValues;

    protected abstract void addDependFields();

    abstract boolean isSubscribed();

    abstract UserState newInstance(String str);

    static {
        String[] strArr = {"lat", Globalization.LONG, "loc_acc", "loc_type", "loc_bg", "loc_time_stamp"};
        LOCATION_FIELDS = strArr;
        LOCATION_FIELDS_SET = new HashSet(Arrays.asList(strArr));
    }

    public ImmutableJSONObject getDependValues() {
        try {
            return new ImmutableJSONObject(getDependValuesCopy());
        } catch (JSONException e) {
            e.printStackTrace();
            return new ImmutableJSONObject();
        }
    }

    public void setDependValues(JSONObject jSONObject) {
        synchronized (LOCK) {
            this.dependValues = jSONObject;
        }
    }

    JSONObject getDependValuesCopy() throws JSONException {
        JSONObject jSONObject;
        synchronized (LOCK) {
            jSONObject = new JSONObject(this.dependValues.toString());
        }
        return jSONObject;
    }

    public ImmutableJSONObject getSyncValues() {
        try {
            return new ImmutableJSONObject(getSyncValuesCopy());
        } catch (JSONException e) {
            e.printStackTrace();
            return new ImmutableJSONObject();
        }
    }

    public JSONObject getSyncValuesCopy() throws JSONException {
        JSONObject jSONObject;
        synchronized (LOCK) {
            jSONObject = new JSONObject(this.syncValues.toString());
        }
        return jSONObject;
    }

    public void setSyncValues(JSONObject jSONObject) {
        synchronized (LOCK) {
            this.syncValues = jSONObject;
        }
    }

    UserState(String str, boolean z) {
        this.persistKey = str;
        if (z) {
            loadState();
        } else {
            this.dependValues = new JSONObject();
            this.syncValues = new JSONObject();
        }
    }

    UserState deepClone(String str) {
        UserState userStateNewInstance = newInstance(str);
        try {
            userStateNewInstance.dependValues = getDependValuesCopy();
            userStateNewInstance.syncValues = getSyncValuesCopy();
        } catch (JSONException e) {
            e.printStackTrace();
        }
        return userStateNewInstance;
    }

    private Set<String> getGroupChangeFields(UserState userState) {
        try {
            if (this.dependValues.optLong("loc_time_stamp") == userState.dependValues.getLong("loc_time_stamp")) {
                return null;
            }
            HashMap<String, Object> map = new HashMap<>();
            map.put("loc_bg", userState.dependValues.opt("loc_bg"));
            map.put("loc_time_stamp", userState.dependValues.opt("loc_time_stamp"));
            putValues(userState.syncValues, map);
            return LOCATION_FIELDS_SET;
        } catch (Throwable unused) {
            return null;
        }
    }

    void putOnSyncValues(String str, Object obj) throws JSONException {
        synchronized (LOCK) {
            this.syncValues.put(str, obj);
        }
    }

    void putOnDependValues(String str, Object obj) throws JSONException {
        synchronized (LOCK) {
            this.dependValues.put(str, obj);
        }
    }

    private void putValues(JSONObject jSONObject, HashMap<String, Object> map) throws JSONException {
        synchronized (LOCK) {
            for (Map.Entry<String, Object> entry : map.entrySet()) {
                jSONObject.put(entry.getKey(), entry.getValue());
            }
        }
    }

    void removeFromSyncValues(String str) {
        synchronized (LOCK) {
            this.syncValues.remove(str);
        }
    }

    void removeFromSyncValues(List<String> list) {
        synchronized (LOCK) {
            Iterator<String> it = list.iterator();
            while (it.hasNext()) {
                this.syncValues.remove(it.next());
            }
        }
    }

    void removeFromDependValues(String str) {
        synchronized (LOCK) {
            this.dependValues.remove(str);
        }
    }

    void removeFromDependValues(List<String> list) {
        synchronized (LOCK) {
            Iterator<String> it = list.iterator();
            while (it.hasNext()) {
                this.dependValues.remove(it.next());
            }
        }
    }

    void setLocation(LocationController.LocationPoint locationPoint) {
        try {
            HashMap<String, Object> map = new HashMap<>();
            map.put("lat", locationPoint.lat);
            map.put(Globalization.LONG, locationPoint.log);
            map.put("loc_acc", locationPoint.accuracy);
            map.put("loc_type", locationPoint.type);
            putValues(this.syncValues, map);
            HashMap<String, Object> map2 = new HashMap<>();
            map2.put("loc_bg", locationPoint.bg);
            map2.put("loc_time_stamp", locationPoint.timeStamp);
            putValues(this.dependValues, map2);
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    void clearLocation() {
        try {
            HashMap<String, Object> map = new HashMap<>();
            map.put("lat", null);
            map.put(Globalization.LONG, null);
            map.put("loc_acc", null);
            map.put("loc_type", null);
            map.put("loc_bg", null);
            map.put("loc_time_stamp", null);
            putValues(this.syncValues, map);
            HashMap<String, Object> map2 = new HashMap<>();
            map2.put("loc_bg", null);
            map2.put("loc_time_stamp", null);
            putValues(this.dependValues, map2);
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    JSONObject generateJsonDiff(UserState userState, boolean z) {
        addDependFields();
        userState.addDependFields();
        JSONObject jSONObjectGenerateJsonDiff = generateJsonDiff(this.syncValues, userState.syncValues, null, getGroupChangeFields(userState));
        if (!z && jSONObjectGenerateJsonDiff.toString().equals("{}")) {
            return null;
        }
        try {
            if (!jSONObjectGenerateJsonDiff.has(OSOutcomeConstants.APP_ID)) {
                jSONObjectGenerateJsonDiff.put(OSOutcomeConstants.APP_ID, this.syncValues.optString(OSOutcomeConstants.APP_ID));
            }
            if (this.syncValues.has("email_auth_hash")) {
                jSONObjectGenerateJsonDiff.put("email_auth_hash", this.syncValues.optString("email_auth_hash"));
            }
            if (this.syncValues.has("sms_auth_hash")) {
                jSONObjectGenerateJsonDiff.put("sms_auth_hash", this.syncValues.optString("sms_auth_hash"));
            }
            if (this.syncValues.has("external_user_id_auth_hash") && !jSONObjectGenerateJsonDiff.has("external_user_id_auth_hash")) {
                jSONObjectGenerateJsonDiff.put("external_user_id_auth_hash", this.syncValues.optString("external_user_id_auth_hash"));
            }
        } catch (JSONException e) {
            e.printStackTrace();
        }
        return jSONObjectGenerateJsonDiff;
    }

    private void loadState() {
        int i;
        boolean z;
        String string = OneSignalPrefs.getString(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_ONESIGNAL_USERSTATE_DEPENDVALYES_ + this.persistKey, null);
        if (string == null) {
            setDependValues(new JSONObject());
            try {
                int i2 = 1;
                if (this.persistKey.equals("CURRENT_STATE")) {
                    i = OneSignalPrefs.getInt(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_ONESIGNAL_SUBSCRIPTION, 1);
                } else {
                    i = OneSignalPrefs.getInt(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_ONESIGNAL_SYNCED_SUBSCRIPTION, 1);
                }
                if (i == -2) {
                    z = false;
                } else {
                    i2 = i;
                    z = true;
                }
                HashMap<String, Object> map = new HashMap<>();
                map.put("subscribableStatus", Integer.valueOf(i2));
                map.put("userSubscribePref", Boolean.valueOf(z));
                putValues(this.dependValues, map);
            } catch (JSONException unused) {
            }
        } else {
            try {
                setDependValues(new JSONObject(string));
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
        String string2 = OneSignalPrefs.getString(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_ONESIGNAL_USERSTATE_SYNCVALYES_ + this.persistKey, null);
        JSONObject jSONObject = new JSONObject();
        try {
            if (string2 == null) {
                jSONObject.put("identifier", OneSignalPrefs.getString(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_GT_REGISTRATION_ID, null));
            } else {
                jSONObject = new JSONObject(string2);
            }
        } catch (JSONException e2) {
            e2.printStackTrace();
        }
        setSyncValues(jSONObject);
    }

    void persistState() {
        synchronized (LOCK) {
            try {
            } catch (JSONException e) {
                e.printStackTrace();
            }
            if (this.syncValues.has("external_user_id_auth_hash") && ((this.syncValues.has("external_user_id") && this.syncValues.get("external_user_id").toString() == "") || !this.syncValues.has("external_user_id"))) {
                this.syncValues.remove("external_user_id_auth_hash");
                OneSignalPrefs.saveString(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_ONESIGNAL_USERSTATE_SYNCVALYES_ + this.persistKey, this.syncValues.toString());
                OneSignalPrefs.saveString(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_ONESIGNAL_USERSTATE_DEPENDVALYES_ + this.persistKey, this.dependValues.toString());
            } else {
                OneSignalPrefs.saveString(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_ONESIGNAL_USERSTATE_SYNCVALYES_ + this.persistKey, this.syncValues.toString());
                OneSignalPrefs.saveString(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_ONESIGNAL_USERSTATE_DEPENDVALYES_ + this.persistKey, this.dependValues.toString());
            }
        }
    }

    void persistStateAfterSync(JSONObject jSONObject, JSONObject jSONObject2) {
        if (jSONObject != null) {
            JSONObject jSONObject3 = this.dependValues;
            generateJsonDiff(jSONObject3, jSONObject, jSONObject3, null);
        }
        if (jSONObject2 != null) {
            JSONObject jSONObject4 = this.syncValues;
            generateJsonDiff(jSONObject4, jSONObject2, jSONObject4, null);
            mergeTags(jSONObject2, null);
        }
        if (jSONObject == null && jSONObject2 == null) {
            return;
        }
        persistState();
    }

    void mergeTags(JSONObject jSONObject, JSONObject jSONObject2) {
        JSONObject jSONObject3;
        if (jSONObject.has(TAGS)) {
            try {
                JSONObject syncValuesCopy = getSyncValuesCopy();
                if (syncValuesCopy.has(TAGS)) {
                    try {
                        jSONObject3 = new JSONObject(syncValuesCopy.optString(TAGS));
                    } catch (JSONException unused) {
                        jSONObject3 = new JSONObject();
                    }
                } else {
                    jSONObject3 = new JSONObject();
                }
                JSONObject jSONObjectOptJSONObject = jSONObject.optJSONObject(TAGS);
                Iterator<String> itKeys = jSONObjectOptJSONObject.keys();
                while (itKeys.hasNext()) {
                    String next = itKeys.next();
                    if ("".equals(jSONObjectOptJSONObject.optString(next))) {
                        jSONObject3.remove(next);
                    } else if (jSONObject2 == null || !jSONObject2.has(next)) {
                        jSONObject3.put(next, jSONObjectOptJSONObject.optString(next));
                    }
                }
                synchronized (LOCK) {
                    if (jSONObject3.toString().equals("{}")) {
                        this.syncValues.remove(TAGS);
                    } else {
                        this.syncValues.put(TAGS, jSONObject3);
                    }
                }
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    }

    JSONObject generateJsonDiffFromIntoSyncValued(JSONObject jSONObject, Set<String> set) {
        JSONObject jSONObjectGenerateJsonDiff;
        synchronized (LOCK) {
            JSONObject jSONObject2 = this.syncValues;
            jSONObjectGenerateJsonDiff = JSONUtils.generateJsonDiff(jSONObject2, jSONObject, jSONObject2, set);
        }
        return jSONObjectGenerateJsonDiff;
    }

    JSONObject generateJsonDiffFromSyncValued(UserState userState, Set<String> set) {
        JSONObject jSONObjectGenerateJsonDiff;
        synchronized (LOCK) {
            jSONObjectGenerateJsonDiff = JSONUtils.generateJsonDiff(this.syncValues, userState.syncValues, null, set);
        }
        return jSONObjectGenerateJsonDiff;
    }

    JSONObject generateJsonDiffFromIntoDependValues(JSONObject jSONObject, Set<String> set) {
        JSONObject jSONObjectGenerateJsonDiff;
        synchronized (LOCK) {
            JSONObject jSONObject2 = this.dependValues;
            jSONObjectGenerateJsonDiff = JSONUtils.generateJsonDiff(jSONObject2, jSONObject, jSONObject2, set);
        }
        return jSONObjectGenerateJsonDiff;
    }

    JSONObject generateJsonDiffFromDependValues(UserState userState, Set<String> set) {
        JSONObject jSONObjectGenerateJsonDiff;
        synchronized (LOCK) {
            jSONObjectGenerateJsonDiff = JSONUtils.generateJsonDiff(this.dependValues, userState.dependValues, null, set);
        }
        return jSONObjectGenerateJsonDiff;
    }

    private static JSONObject generateJsonDiff(JSONObject jSONObject, JSONObject jSONObject2, JSONObject jSONObject3, Set<String> set) {
        JSONObject jSONObjectGenerateJsonDiff;
        synchronized (LOCK) {
            jSONObjectGenerateJsonDiff = JSONUtils.generateJsonDiff(jSONObject, jSONObject2, jSONObject3, set);
        }
        return jSONObjectGenerateJsonDiff;
    }

    public String toString() {
        return "UserState{persistKey='" + this.persistKey + "', dependValues=" + this.dependValues + ", syncValues=" + this.syncValues + '}';
    }
}


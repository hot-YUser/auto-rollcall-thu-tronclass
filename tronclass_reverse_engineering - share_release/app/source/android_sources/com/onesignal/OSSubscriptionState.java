package com.onesignal;

import org.json.JSONException;
import org.json.JSONObject;
public class OSSubscriptionState implements Cloneable {
    private static final String CHANGED_KEY = "changed";
    private boolean accepted;
    private OSObservable<Object, OSSubscriptionState> observable = new OSObservable<>(CHANGED_KEY, false);
    private boolean pushDisabled;
    private String pushToken;
    private String userId;

    OSSubscriptionState(boolean z, boolean z2) {
        if (z) {
            this.pushDisabled = OneSignalPrefs.getBool(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_ONESIGNAL_SUBSCRIPTION_LAST, true);
            this.userId = OneSignalPrefs.getString(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_ONESIGNAL_PLAYER_ID_LAST, null);
            this.pushToken = OneSignalPrefs.getString(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_ONESIGNAL_PUSH_TOKEN_LAST, null);
            this.accepted = OneSignalPrefs.getBool(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_ONESIGNAL_PERMISSION_ACCEPTED_LAST, false);
            return;
        }
        this.pushDisabled = !OneSignalStateSynchronizer.getUserSubscribePreference();
        this.userId = OneSignal.getUserId();
        this.pushToken = OneSignalStateSynchronizer.getRegistrationId();
        this.accepted = z2;
    }

    void changed(OSPermissionState oSPermissionState) {
        setAccepted(oSPermissionState.areNotificationsEnabled());
    }

    void setUserId(String str) {
        boolean z = true;
        if (str != null ? str.equals(this.userId) : this.userId == null) {
            z = false;
        }
        this.userId = str;
        if (z) {
            this.observable.notifyChange(this);
        }
    }

    public String getUserId() {
        return this.userId;
    }

    void setPushToken(String str) {
        if (str == null) {
            return;
        }
        boolean zEquals = str.equals(this.pushToken);
        this.pushToken = str;
        if (zEquals) {
            return;
        }
        this.observable.notifyChange(this);
    }

    public String getPushToken() {
        return this.pushToken;
    }

    void setPushDisabled(boolean z) {
        boolean z2 = this.pushDisabled != z;
        this.pushDisabled = z;
        if (z2) {
            this.observable.notifyChange(this);
        }
    }

    public boolean isPushDisabled() {
        return this.pushDisabled;
    }

    private void setAccepted(boolean z) {
        boolean zIsSubscribed = isSubscribed();
        this.accepted = z;
        if (zIsSubscribed != isSubscribed()) {
            this.observable.notifyChange(this);
        }
    }

    public boolean isSubscribed() {
        return (this.userId == null || this.pushToken == null || this.pushDisabled || !this.accepted) ? false : true;
    }

    void persistAsFrom() {
        OneSignalPrefs.saveBool(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_ONESIGNAL_SUBSCRIPTION_LAST, this.pushDisabled);
        OneSignalPrefs.saveString(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_ONESIGNAL_PLAYER_ID_LAST, this.userId);
        OneSignalPrefs.saveString(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_ONESIGNAL_PUSH_TOKEN_LAST, this.pushToken);
        OneSignalPrefs.saveBool(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_ONESIGNAL_PERMISSION_ACCEPTED_LAST, this.accepted);
    }

    boolean compare(OSSubscriptionState oSSubscriptionState) {
        if (this.pushDisabled == oSSubscriptionState.pushDisabled) {
            String str = this.userId;
            if (str == null) {
                str = "";
            }
            String str2 = oSSubscriptionState.userId;
            if (str2 == null) {
                str2 = "";
            }
            if (str.equals(str2)) {
                String str3 = this.pushToken;
                if (str3 == null) {
                    str3 = "";
                }
                String str4 = oSSubscriptionState.pushToken;
                if (str3.equals(str4 != null ? str4 : "") && this.accepted == oSSubscriptionState.accepted) {
                    return false;
                }
            }
        }
        return true;
    }

    public OSObservable<Object, OSSubscriptionState> getObservable() {
        return this.observable;
    }

    protected Object clone() {
        try {
            return super.clone();
        } catch (CloneNotSupportedException unused) {
            return null;
        }
    }

    public JSONObject toJSONObject() {
        JSONObject jSONObject = new JSONObject();
        try {
            String str = this.userId;
            if (str != null) {
                jSONObject.put("userId", str);
            } else {
                jSONObject.put("userId", JSONObject.NULL);
            }
            String str2 = this.pushToken;
            if (str2 != null) {
                jSONObject.put("pushToken", str2);
            } else {
                jSONObject.put("pushToken", JSONObject.NULL);
            }
            jSONObject.put("isPushDisabled", isPushDisabled());
            jSONObject.put("isSubscribed", isSubscribed());
        } catch (JSONException e) {
            e.printStackTrace();
        }
        return jSONObject;
    }

    public String toString() {
        return toJSONObject().toString();
    }
}


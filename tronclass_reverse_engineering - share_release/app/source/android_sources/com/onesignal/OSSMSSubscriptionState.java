package com.onesignal;

import org.json.JSONObject;
public class OSSMSSubscriptionState implements Cloneable {
    private static final String CHANGED_KEY = "changed";
    private static final String SMS_NUMBER = "smsNumber";
    private static final String SMS_USER_ID = "smsUserId";
    private static final String SUBSCRIBED = "isSubscribed";
    private OSObservable<Object, OSSMSSubscriptionState> observable = new OSObservable<>(CHANGED_KEY, false);
    private String smsNumber;
    private String smsUserId;

    OSSMSSubscriptionState(boolean z) {
        if (z) {
            this.smsUserId = OneSignalPrefs.getString(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_OS_SMS_ID_LAST, null);
            this.smsNumber = OneSignalPrefs.getString(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_OS_SMS_NUMBER_LAST, null);
        } else {
            this.smsUserId = OneSignal.getSMSId();
            this.smsNumber = OneSignalStateSynchronizer.getSMSStateSynchronizer().getRegistrationId();
        }
    }

    void clearSMSAndId() {
        boolean z = (this.smsUserId == null && this.smsNumber == null) ? false : true;
        this.smsUserId = null;
        this.smsNumber = null;
        if (z) {
            this.observable.notifyChange(this);
        }
    }

    public String getSmsUserId() {
        return this.smsUserId;
    }

    void setSMSUserId(String str) {
        boolean z = true;
        if (str != null ? str.equals(this.smsUserId) : this.smsUserId == null) {
            z = false;
        }
        this.smsUserId = str;
        if (z) {
            this.observable.notifyChange(this);
        }
    }

    public String getSMSNumber() {
        return this.smsNumber;
    }

    void setSMSNumber(String str) {
        boolean zEquals = str.equals(this.smsNumber);
        this.smsNumber = str;
        if (zEquals) {
            return;
        }
        this.observable.notifyChange(this);
    }

    public boolean isSubscribed() {
        return (this.smsUserId == null || this.smsNumber == null) ? false : true;
    }

    void persistAsFrom() {
        OneSignalPrefs.saveString(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_OS_SMS_ID_LAST, this.smsUserId);
        OneSignalPrefs.saveString(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_OS_SMS_NUMBER_LAST, this.smsNumber);
    }

    boolean compare(OSSMSSubscriptionState oSSMSSubscriptionState) {
        String str = this.smsUserId;
        if (str == null) {
            str = "";
        }
        String str2 = oSSMSSubscriptionState.smsUserId;
        if (str2 == null) {
            str2 = "";
        }
        if (str.equals(str2)) {
            String str3 = this.smsNumber;
            if (str3 == null) {
                str3 = "";
            }
            String str4 = oSSMSSubscriptionState.smsNumber;
            if (str3.equals(str4 != null ? str4 : "")) {
                return false;
            }
        }
        return true;
    }

    public OSObservable<Object, OSSMSSubscriptionState> getObservable() {
        return this.observable;
    }

    protected Object clone() {
        try {
            return super.clone();
        } catch (Throwable unused) {
            return null;
        }
    }

    public JSONObject toJSONObject() {
        JSONObject jSONObject = new JSONObject();
        try {
            String str = this.smsUserId;
            if (str != null) {
                jSONObject.put(SMS_USER_ID, str);
            } else {
                jSONObject.put(SMS_USER_ID, JSONObject.NULL);
            }
            String str2 = this.smsNumber;
            if (str2 != null) {
                jSONObject.put(SMS_NUMBER, str2);
            } else {
                jSONObject.put(SMS_NUMBER, JSONObject.NULL);
            }
            jSONObject.put(SUBSCRIBED, isSubscribed());
        } catch (Throwable th) {
            th.printStackTrace();
        }
        return jSONObject;
    }

    public String toString() {
        return toJSONObject().toString();
    }
}


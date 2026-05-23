package com.onesignal;

import org.json.JSONObject;
public class OSEmailSubscriptionState implements Cloneable {
    private static final String CHANGED_KEY = "changed";
    private String emailAddress;
    private String emailUserId;
    private OSObservable<Object, OSEmailSubscriptionState> observable = new OSObservable<>(CHANGED_KEY, false);

    OSEmailSubscriptionState(boolean z) {
        if (z) {
            this.emailUserId = OneSignalPrefs.getString(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_ONESIGNAL_EMAIL_ID_LAST, null);
            this.emailAddress = OneSignalPrefs.getString(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_ONESIGNAL_EMAIL_ADDRESS_LAST, null);
        } else {
            this.emailUserId = OneSignal.getEmailId();
            this.emailAddress = OneSignalStateSynchronizer.getEmailStateSynchronizer().getRegistrationId();
        }
    }

    void clearEmailAndId() {
        boolean z = (this.emailUserId == null && this.emailAddress == null) ? false : true;
        this.emailUserId = null;
        this.emailAddress = null;
        if (z) {
            this.observable.notifyChange(this);
        }
    }

    void setEmailUserId(String str) {
        boolean z = true;
        if (str != null ? str.equals(this.emailUserId) : this.emailUserId == null) {
            z = false;
        }
        this.emailUserId = str;
        if (z) {
            this.observable.notifyChange(this);
        }
    }

    public String getEmailUserId() {
        return this.emailUserId;
    }

    void setEmailAddress(String str) {
        boolean zEquals = str.equals(this.emailAddress);
        this.emailAddress = str;
        if (zEquals) {
            return;
        }
        this.observable.notifyChange(this);
    }

    public String getEmailAddress() {
        return this.emailAddress;
    }

    public boolean isSubscribed() {
        return (this.emailUserId == null || this.emailAddress == null) ? false : true;
    }

    void persistAsFrom() {
        OneSignalPrefs.saveString(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_ONESIGNAL_EMAIL_ID_LAST, this.emailUserId);
        OneSignalPrefs.saveString(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_ONESIGNAL_EMAIL_ADDRESS_LAST, this.emailAddress);
    }

    boolean compare(OSEmailSubscriptionState oSEmailSubscriptionState) {
        String str = this.emailUserId;
        if (str == null) {
            str = "";
        }
        String str2 = oSEmailSubscriptionState.emailUserId;
        if (str2 == null) {
            str2 = "";
        }
        if (str.equals(str2)) {
            String str3 = this.emailAddress;
            if (str3 == null) {
                str3 = "";
            }
            String str4 = oSEmailSubscriptionState.emailAddress;
            if (str3.equals(str4 != null ? str4 : "")) {
                return false;
            }
        }
        return true;
    }

    public OSObservable<Object, OSEmailSubscriptionState> getObservable() {
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
            String str = this.emailUserId;
            if (str != null) {
                jSONObject.put("emailUserId", str);
            } else {
                jSONObject.put("emailUserId", JSONObject.NULL);
            }
            String str2 = this.emailAddress;
            if (str2 != null) {
                jSONObject.put("emailAddress", str2);
            } else {
                jSONObject.put("emailAddress", JSONObject.NULL);
            }
            jSONObject.put("isSubscribed", isSubscribed());
        } catch (Throwable th) {
            th.printStackTrace();
        }
        return jSONObject;
    }

    public String toString() {
        return toJSONObject().toString();
    }
}


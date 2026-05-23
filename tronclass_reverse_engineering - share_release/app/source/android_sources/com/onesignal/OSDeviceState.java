package com.onesignal;

import org.json.JSONObject;
public class OSDeviceState {
    private final boolean areNotificationsEnabled;
    private final String emailAddress;
    private final boolean emailSubscribed;
    private final String emailUserId;
    private final boolean pushDisabled;
    private final String pushToken;
    private final String smsNumber;
    private final boolean smsSubscribed;
    private final String smsUserId;
    private final boolean subscribed;
    private final String userId;

    OSDeviceState(OSSubscriptionState oSSubscriptionState, OSPermissionState oSPermissionState, OSEmailSubscriptionState oSEmailSubscriptionState, OSSMSSubscriptionState oSSMSSubscriptionState) {
        this.areNotificationsEnabled = oSPermissionState.areNotificationsEnabled();
        this.pushDisabled = oSSubscriptionState.isPushDisabled();
        this.subscribed = oSSubscriptionState.isSubscribed();
        this.userId = oSSubscriptionState.getUserId();
        this.pushToken = oSSubscriptionState.getPushToken();
        this.emailUserId = oSEmailSubscriptionState.getEmailUserId();
        this.emailAddress = oSEmailSubscriptionState.getEmailAddress();
        this.emailSubscribed = oSEmailSubscriptionState.isSubscribed();
        this.smsUserId = oSSMSSubscriptionState.getSmsUserId();
        this.smsNumber = oSSMSSubscriptionState.getSMSNumber();
        this.smsSubscribed = oSSMSSubscriptionState.isSubscribed();
    }

    public boolean areNotificationsEnabled() {
        return this.areNotificationsEnabled;
    }

    public boolean isPushDisabled() {
        return this.pushDisabled;
    }

    public boolean isSubscribed() {
        return this.subscribed;
    }

    public String getUserId() {
        return this.userId;
    }

    public String getPushToken() {
        return this.pushToken;
    }

    public boolean isEmailSubscribed() {
        return this.emailSubscribed;
    }

    public String getEmailUserId() {
        return this.emailUserId;
    }

    public String getEmailAddress() {
        return this.emailAddress;
    }

    public boolean isSMSSubscribed() {
        return this.smsSubscribed;
    }

    public String getSMSUserId() {
        return this.smsUserId;
    }

    public String getSMSNumber() {
        return this.smsNumber;
    }

    public JSONObject toJSONObject() {
        JSONObject jSONObject = new JSONObject();
        try {
            jSONObject.put("areNotificationsEnabled", this.areNotificationsEnabled);
            jSONObject.put("isPushDisabled", this.pushDisabled);
            jSONObject.put("isSubscribed", this.subscribed);
            jSONObject.put("userId", this.userId);
            jSONObject.put("pushToken", this.pushToken);
            jSONObject.put("isEmailSubscribed", this.emailSubscribed);
            jSONObject.put("emailUserId", this.emailUserId);
            jSONObject.put("emailAddress", this.emailAddress);
            jSONObject.put("isSMSSubscribed", this.smsSubscribed);
            jSONObject.put("smsUserId", this.smsUserId);
            jSONObject.put("smsNumber", this.smsNumber);
        } catch (Throwable th) {
            th.printStackTrace();
        }
        return jSONObject;
    }
}


package com.onesignal;

import org.json.JSONException;
class UserStatePush extends UserState {
    UserStatePush(String str, boolean z) {
        super(str, z);
    }

    @Override // com.onesignal.UserState
    UserState newInstance(String str) {
        return new UserStatePush(str, false);
    }

    @Override // com.onesignal.UserState
    protected void addDependFields() {
        try {
            putOnSyncValues("notification_types", Integer.valueOf(getNotificationTypes()));
        } catch (JSONException unused) {
        }
    }

    private int getNotificationTypes() {
        int iOptInt = getDependValues().optInt("subscribableStatus", 1);
        if (iOptInt < -2) {
            return iOptInt;
        }
        if (getDependValues().optBoolean("androidPermission", true)) {
            return !getDependValues().optBoolean("userSubscribePref", true) ? -2 : 1;
        }
        return 0;
    }

    @Override // com.onesignal.UserState
    boolean isSubscribed() {
        return getNotificationTypes() > 0;
    }
}


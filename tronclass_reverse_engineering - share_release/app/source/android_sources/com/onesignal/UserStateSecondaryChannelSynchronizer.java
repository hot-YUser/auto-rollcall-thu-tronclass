package com.onesignal;

import com.onesignal.OneSignal;
import com.onesignal.OneSignalStateSynchronizer;
import com.onesignal.UserStateSynchronizer;
import com.onesignal.outcomes.OSOutcomeConstants;
import org.json.JSONException;
import org.json.JSONObject;
abstract class UserStateSecondaryChannelSynchronizer extends UserStateSynchronizer {
    abstract void fireUpdateFailure();

    abstract void fireUpdateSuccess(JSONObject jSONObject);

    protected abstract String getAuthHashKey();

    protected abstract String getChannelKey();

    protected abstract int getDeviceType();

    @Override // com.onesignal.UserStateSynchronizer
    String getExternalId(boolean z) {
        return null;
    }

    @Override // com.onesignal.UserStateSynchronizer
    protected abstract String getId();

    @Override // com.onesignal.UserStateSynchronizer
    boolean getSubscribed() {
        return false;
    }

    @Override // com.onesignal.UserStateSynchronizer
    UserStateSynchronizer.GetTagsResult getTags(boolean z) {
        return null;
    }

    @Override // com.onesignal.UserStateSynchronizer
    public boolean getUserSubscribePreference() {
        return false;
    }

    @Override // com.onesignal.UserStateSynchronizer
    abstract void logoutChannel();

    @Override // com.onesignal.UserStateSynchronizer
    protected abstract UserState newUserState(String str, boolean z);

    @Override // com.onesignal.UserStateSynchronizer
    public void setPermission(boolean z) {
    }

    @Override // com.onesignal.UserStateSynchronizer
    void setSubscription(boolean z) {
    }

    @Override // com.onesignal.UserStateSynchronizer
    abstract void updateIdDependents(String str);

    @Override // com.onesignal.UserStateSynchronizer
    void updateState(JSONObject jSONObject) {
    }

    UserStateSecondaryChannelSynchronizer(OneSignalStateSynchronizer.UserStateSynchronizerType userStateSynchronizerType) {
        super(userStateSynchronizerType);
    }

    @Override // com.onesignal.UserStateSynchronizer
    protected OneSignal.LOG_LEVEL getLogLevel() {
        return OneSignal.LOG_LEVEL.INFO;
    }

    void refresh() {
        scheduleSyncToServer();
    }

    @Override // com.onesignal.UserStateSynchronizer
    protected void scheduleSyncToServer() {
        if ((getId() == null && getRegistrationId() == null) || OneSignal.getUserId() == null) {
            return;
        }
        getNetworkHandlerThread(0).runNewJobDelayed();
    }

    @Override // com.onesignal.UserStateSynchronizer
    protected void addOnSessionOrCreateExtras(JSONObject jSONObject) {
        try {
            jSONObject.put(OSOutcomeConstants.DEVICE_TYPE, getDeviceType());
            jSONObject.putOpt("device_player_id", OneSignal.getUserId());
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    @Override // com.onesignal.UserStateSynchronizer
    protected void fireEventsForUpdateFailure(JSONObject jSONObject) {
        if (jSONObject.has("identifier")) {
            fireUpdateFailure();
        }
    }

    @Override // com.onesignal.UserStateSynchronizer
    protected void onSuccessfulSync(JSONObject jSONObject) {
        if (jSONObject.has("identifier")) {
            JSONObject jSONObject2 = new JSONObject();
            try {
                jSONObject2.put(getChannelKey(), jSONObject.get("identifier"));
                if (jSONObject.has(getAuthHashKey())) {
                    jSONObject2.put(getAuthHashKey(), jSONObject.get(getAuthHashKey()));
                }
            } catch (JSONException e) {
                e.printStackTrace();
            }
            fireUpdateSuccess(jSONObject2);
        }
    }

    void setChannelId(String str, String str2) {
        UserState userStateForModification = getUserStateForModification();
        ImmutableJSONObject syncValues = userStateForModification.getSyncValues();
        if (str.equals(syncValues.optString("identifier"))) {
            if (syncValues.optString(getAuthHashKey()).equals(str2 == null ? "" : str2)) {
                JSONObject jSONObject = new JSONObject();
                try {
                    jSONObject.put(getChannelKey(), str);
                    jSONObject.put(getAuthHashKey(), str2);
                } catch (JSONException e) {
                    e.printStackTrace();
                }
                fireUpdateSuccess(jSONObject);
                return;
            }
        }
        String strOptString = syncValues.optString("identifier", null);
        if (strOptString == null) {
            setNewSession();
        }
        try {
            JSONObject jSONObject2 = new JSONObject();
            jSONObject2.put("identifier", str);
            if (str2 != null) {
                jSONObject2.put(getAuthHashKey(), str2);
            }
            if (str2 == null && strOptString != null && !strOptString.equals(str)) {
                saveChannelId("");
                resetCurrentState();
                setNewSession();
            }
            userStateForModification.generateJsonDiffFromIntoSyncValued(jSONObject2, null);
            scheduleSyncToServer();
        } catch (JSONException e2) {
            e2.printStackTrace();
        }
    }
}


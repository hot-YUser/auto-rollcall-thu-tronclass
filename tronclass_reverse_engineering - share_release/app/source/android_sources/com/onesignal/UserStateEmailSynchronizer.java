package com.onesignal;

import com.onesignal.OneSignalStateSynchronizer;
import java.util.ArrayList;
import org.json.JSONObject;
class UserStateEmailSynchronizer extends UserStateSecondaryChannelSynchronizer {
    @Override // com.onesignal.UserStateSecondaryChannelSynchronizer
    protected int getDeviceType() {
        return 11;
    }

    UserStateEmailSynchronizer() {
        super(OneSignalStateSynchronizer.UserStateSynchronizerType.EMAIL);
    }

    @Override // com.onesignal.UserStateSecondaryChannelSynchronizer, com.onesignal.UserStateSynchronizer
    protected UserState newUserState(String str, boolean z) {
        return new UserStateEmail(str, z);
    }

    @Override // com.onesignal.UserStateSecondaryChannelSynchronizer, com.onesignal.UserStateSynchronizer
    protected String getId() {
        return OneSignal.getEmailId();
    }

    @Override // com.onesignal.UserStateSynchronizer
    void saveChannelId(String str) {
        OneSignal.saveEmailId(str);
    }

    @Override // com.onesignal.UserStateSecondaryChannelSynchronizer, com.onesignal.UserStateSynchronizer
    void logoutChannel() {
        OneSignal.saveEmailId("");
        resetCurrentState();
        getToSyncUserState().removeFromSyncValues("identifier");
        ArrayList arrayList = new ArrayList();
        arrayList.add("email_auth_hash");
        arrayList.add("device_player_id");
        arrayList.add("external_user_id");
        getToSyncUserState().removeFromSyncValues(arrayList);
        getToSyncUserState().persistState();
        OneSignal.getEmailSubscriptionState().clearEmailAndId();
    }

    @Override // com.onesignal.UserStateSecondaryChannelSynchronizer
    protected String getChannelKey() {
        return "email";
    }

    @Override // com.onesignal.UserStateSecondaryChannelSynchronizer
    protected String getAuthHashKey() {
        return "email_auth_hash";
    }

    @Override // com.onesignal.UserStateSecondaryChannelSynchronizer
    void fireUpdateSuccess(JSONObject jSONObject) {
        OneSignal.fireEmailUpdateSuccess();
    }

    @Override // com.onesignal.UserStateSecondaryChannelSynchronizer
    void fireUpdateFailure() {
        OneSignal.fireEmailUpdateFailure();
    }

    @Override // com.onesignal.UserStateSecondaryChannelSynchronizer, com.onesignal.UserStateSynchronizer
    void updateIdDependents(String str) {
        OneSignal.updateEmailIdDependents(str);
    }
}


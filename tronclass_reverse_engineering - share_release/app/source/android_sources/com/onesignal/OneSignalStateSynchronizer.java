package com.onesignal;

import com.onesignal.LocationController;
import com.onesignal.OneSignal;
import com.onesignal.OneSignalRestClient;
import com.onesignal.UserStateSynchronizer;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import org.apache.commons.io.IOUtils;
import org.json.JSONException;
import org.json.JSONObject;
class OneSignalStateSynchronizer {
    private static final Object LOCK = new Object();
    private static HashMap<UserStateSynchronizerType, UserStateSynchronizer> userStateSynchronizers = new HashMap<>();

    interface OSDeviceInfoCompletionHandler {
        void onFailure(OSDeviceInfoError oSDeviceInfoError);

        void onSuccess(String str);
    }

    OneSignalStateSynchronizer() {
    }

    enum UserStateSynchronizerType {
        PUSH,
        EMAIL,
        SMS;

        public boolean isPush() {
            return equals(PUSH);
        }

        public boolean isEmail() {
            return equals(EMAIL);
        }

        public boolean isSMS() {
            return equals(SMS);
        }
    }

    static class OSDeviceInfoError {
        public int errorCode;
        public String message;

        OSDeviceInfoError(int i, String str) {
            this.errorCode = i;
            this.message = str;
        }

        public int getCode() {
            return this.errorCode;
        }

        public String getMessage() {
            return this.message;
        }
    }

    static UserStatePushSynchronizer getPushStateSynchronizer() {
        if (!userStateSynchronizers.containsKey(UserStateSynchronizerType.PUSH) || userStateSynchronizers.get(UserStateSynchronizerType.PUSH) == null) {
            synchronized (LOCK) {
                if (userStateSynchronizers.get(UserStateSynchronizerType.PUSH) == null) {
                    userStateSynchronizers.put(UserStateSynchronizerType.PUSH, new UserStatePushSynchronizer());
                }
            }
        }
        return (UserStatePushSynchronizer) userStateSynchronizers.get(UserStateSynchronizerType.PUSH);
    }

    static UserStateEmailSynchronizer getEmailStateSynchronizer() {
        if (!userStateSynchronizers.containsKey(UserStateSynchronizerType.EMAIL) || userStateSynchronizers.get(UserStateSynchronizerType.EMAIL) == null) {
            synchronized (LOCK) {
                if (userStateSynchronizers.get(UserStateSynchronizerType.EMAIL) == null) {
                    userStateSynchronizers.put(UserStateSynchronizerType.EMAIL, new UserStateEmailSynchronizer());
                }
            }
        }
        return (UserStateEmailSynchronizer) userStateSynchronizers.get(UserStateSynchronizerType.EMAIL);
    }

    static UserStateSMSSynchronizer getSMSStateSynchronizer() {
        if (!userStateSynchronizers.containsKey(UserStateSynchronizerType.SMS) || userStateSynchronizers.get(UserStateSynchronizerType.SMS) == null) {
            synchronized (LOCK) {
                if (userStateSynchronizers.get(UserStateSynchronizerType.SMS) == null) {
                    userStateSynchronizers.put(UserStateSynchronizerType.SMS, new UserStateSMSSynchronizer());
                }
            }
        }
        return (UserStateSMSSynchronizer) userStateSynchronizers.get(UserStateSynchronizerType.SMS);
    }

    static List<UserStateSynchronizer> getUserStateSynchronizers() {
        ArrayList arrayList = new ArrayList();
        arrayList.add(getPushStateSynchronizer());
        if (OneSignal.hasEmailId()) {
            arrayList.add(getEmailStateSynchronizer());
        }
        if (OneSignal.hasSMSlId()) {
            arrayList.add(getSMSStateSynchronizer());
        }
        return arrayList;
    }

    static boolean persist() {
        boolean zPersist = getPushStateSynchronizer().persist();
        boolean zPersist2 = getEmailStateSynchronizer().persist();
        boolean zPersist3 = getSMSStateSynchronizer().persist();
        if (zPersist2) {
            zPersist2 = getEmailStateSynchronizer().getRegistrationId() != null;
        }
        if (zPersist3) {
            zPersist3 = getSMSStateSynchronizer().getRegistrationId() != null;
        }
        return zPersist || zPersist2 || zPersist3;
    }

    static void clearLocation() {
        getPushStateSynchronizer().clearLocation();
        getEmailStateSynchronizer().clearLocation();
        getSMSStateSynchronizer().clearLocation();
    }

    static void initUserState() {
        getPushStateSynchronizer().initUserState();
        getEmailStateSynchronizer().initUserState();
        getSMSStateSynchronizer().initUserState();
    }

    static void syncUserState(boolean z) {
        getPushStateSynchronizer().syncUserState(z);
        getEmailStateSynchronizer().syncUserState(z);
        getSMSStateSynchronizer().syncUserState(z);
    }

    static void sendTags(JSONObject jSONObject, OneSignal.ChangeTagsUpdateHandler changeTagsUpdateHandler) {
        try {
            JSONObject jSONObjectPut = new JSONObject().put(UserState.TAGS, jSONObject);
            getPushStateSynchronizer().sendTags(jSONObjectPut, changeTagsUpdateHandler);
            getEmailStateSynchronizer().sendTags(jSONObjectPut, changeTagsUpdateHandler);
            getSMSStateSynchronizer().sendTags(jSONObjectPut, changeTagsUpdateHandler);
        } catch (JSONException e) {
            if (changeTagsUpdateHandler != null) {
                changeTagsUpdateHandler.onFailure(new OneSignal.SendTagsError(-1, "Encountered an error attempting to serialize your tags into JSON: " + e.getMessage() + IOUtils.LINE_SEPARATOR_UNIX + e.getStackTrace()));
            }
            e.printStackTrace();
        }
    }

    static void setSMSNumber(String str, String str2) {
        getPushStateSynchronizer().setSMSNumber(str, str2);
        getSMSStateSynchronizer().setChannelId(str, str2);
    }

    static void setEmail(String str, String str2) {
        getPushStateSynchronizer().setEmail(str, str2);
        getEmailStateSynchronizer().setChannelId(str, str2);
    }

    static void setSubscription(boolean z) {
        getPushStateSynchronizer().setSubscription(z);
    }

    static boolean getUserSubscribePreference() {
        return getPushStateSynchronizer().getUserSubscribePreference();
    }

    static String getLanguage() {
        return getPushStateSynchronizer().getLanguage();
    }

    static void setPermission(boolean z) {
        getPushStateSynchronizer().setPermission(z);
    }

    static void updateLocation(LocationController.LocationPoint locationPoint) {
        getPushStateSynchronizer().updateLocation(locationPoint);
        getEmailStateSynchronizer().updateLocation(locationPoint);
        getSMSStateSynchronizer().updateLocation(locationPoint);
    }

    static boolean getSubscribed() {
        return getPushStateSynchronizer().getSubscribed();
    }

    static String getRegistrationId() {
        return getPushStateSynchronizer().getRegistrationId();
    }

    static UserStateSynchronizer.GetTagsResult getTags(boolean z) {
        return getPushStateSynchronizer().getTags(z);
    }

    static void resetCurrentState() {
        getPushStateSynchronizer().resetCurrentState();
        getEmailStateSynchronizer().resetCurrentState();
        getSMSStateSynchronizer().resetCurrentState();
        getPushStateSynchronizer().saveChannelId(null);
        getEmailStateSynchronizer().saveChannelId(null);
        getSMSStateSynchronizer().saveChannelId(null);
        OneSignal.setLastSessionTime(-3660L);
    }

    static void updateDeviceInfo(JSONObject jSONObject, OSDeviceInfoCompletionHandler oSDeviceInfoCompletionHandler) {
        getPushStateSynchronizer().updateDeviceInfo(jSONObject, oSDeviceInfoCompletionHandler);
        getEmailStateSynchronizer().updateDeviceInfo(jSONObject, oSDeviceInfoCompletionHandler);
        getSMSStateSynchronizer().updateDeviceInfo(jSONObject, oSDeviceInfoCompletionHandler);
    }

    static void updatePushState(JSONObject jSONObject) {
        getPushStateSynchronizer().updateState(jSONObject);
    }

    static void refreshSecondaryChannelState() {
        getEmailStateSynchronizer().refresh();
        getSMSStateSynchronizer().refresh();
    }

    static void setNewSession() {
        getPushStateSynchronizer().setNewSession();
        getEmailStateSynchronizer().setNewSession();
        getSMSStateSynchronizer().setNewSession();
    }

    static boolean getSyncAsNewSession() {
        return getPushStateSynchronizer().getSyncAsNewSession() || getEmailStateSynchronizer().getSyncAsNewSession() || getSMSStateSynchronizer().getSyncAsNewSession();
    }

    static void setNewSessionForEmail() {
        getEmailStateSynchronizer().setNewSession();
    }

    static void logoutEmail() {
        getPushStateSynchronizer().logoutEmail();
        getEmailStateSynchronizer().logoutChannel();
    }

    static void logoutSMS() {
        getSMSStateSynchronizer().logoutChannel();
        getPushStateSynchronizer().logoutSMS();
    }

    static void setExternalUserId(String str, String str2, final OneSignal.OSExternalUserIdUpdateCompletionHandler oSExternalUserIdUpdateCompletionHandler) throws JSONException {
        final JSONObject jSONObject = new JSONObject();
        OneSignal.OSInternalExternalUserIdUpdateCompletionHandler oSInternalExternalUserIdUpdateCompletionHandler = new OneSignal.OSInternalExternalUserIdUpdateCompletionHandler() { // from class: com.onesignal.OneSignalStateSynchronizer.1
            @Override // com.onesignal.OneSignal.OSInternalExternalUserIdUpdateCompletionHandler
            public void onComplete(String str3, boolean z) {
                OneSignal.onesignalLog(OneSignal.LOG_LEVEL.VERBOSE, "Completed request to update external user id for channel: " + str3 + " and success: " + z);
                try {
                    jSONObject.put(str3, new JSONObject().put("success", z));
                } catch (JSONException e) {
                    OneSignal.onesignalLog(OneSignal.LOG_LEVEL.ERROR, "Error while adding the success status of external id for channel: " + str3);
                    e.printStackTrace();
                }
                for (UserStateSynchronizer userStateSynchronizer : OneSignalStateSynchronizer.userStateSynchronizers.values()) {
                    if (userStateSynchronizer.hasQueuedHandlers()) {
                        OneSignal.onesignalLog(OneSignal.LOG_LEVEL.VERBOSE, "External user id handlers are still being processed for channel: " + userStateSynchronizer.getChannelString() + " , wait until finished before proceeding");
                        return;
                    }
                }
                CallbackThreadManager.INSTANCE.runOnPreferred(new Runnable() { // from class: com.onesignal.OneSignalStateSynchronizer.1.1
                    @Override // java.lang.Runnable
                    public void run() {
                        if (oSExternalUserIdUpdateCompletionHandler != null) {
                            oSExternalUserIdUpdateCompletionHandler.onSuccess(jSONObject);
                        }
                    }
                });
            }
        };
        Iterator<UserStateSynchronizer> it = getUserStateSynchronizers().iterator();
        while (it.hasNext()) {
            it.next().setExternalUserId(str, str2, oSInternalExternalUserIdUpdateCompletionHandler);
        }
    }

    static void sendPurchases(JSONObject jSONObject, OneSignalRestClient.ResponseHandler responseHandler) {
        Iterator<UserStateSynchronizer> it = getUserStateSynchronizers().iterator();
        while (it.hasNext()) {
            it.next().sendPurchases(jSONObject, responseHandler);
        }
    }

    static void readyToUpdate(boolean z) {
        getPushStateSynchronizer().readyToUpdate(z);
        getEmailStateSynchronizer().readyToUpdate(z);
        getSMSStateSynchronizer().readyToUpdate(z);
    }
}


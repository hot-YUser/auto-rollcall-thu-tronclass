package com.onesignal;

import android.os.Handler;
import android.os.HandlerThread;
import com.onesignal.LocationController;
import com.onesignal.OneSignal;
import com.onesignal.OneSignalRestClient;
import com.onesignal.OneSignalStateSynchronizer;
import java.util.HashMap;
import java.util.Queue;
import java.util.Set;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.atomic.AtomicBoolean;
import org.json.JSONException;
import org.json.JSONObject;
abstract class UserStateSynchronizer {
    protected static final String ANDROID_PERMISSION = "androidPermission";
    static final String APP_ID = "app_id";
    private static final String CURRENT_STATE = "CURRENT_STATE";
    protected static final String DEVICE_PLAYER_ID = "device_player_id";
    protected static final String DEVICE_TYPE = "device_type";
    static final String EMAIL_AUTH_HASH_KEY = "email_auth_hash";
    protected static final String EMAIL_KEY = "email";
    private static final String ERRORS = "errors";
    protected static final String EXTERNAL_USER_ID = "external_user_id";
    static final String EXTERNAL_USER_ID_AUTH_HASH = "external_user_id_auth_hash";
    private static final String ID = "id";
    protected static final String IDENTIFIER = "identifier";
    protected static final String LANGUAGE = "language";
    protected static final String LOGOUT_EMAIL = "logoutEmail";
    protected static final String PARENT_PLAYER_ID = "parent_player_id";
    private static final String SESSION = "session";
    static final String SMS_AUTH_HASH_KEY = "sms_auth_hash";
    protected static final String SMS_NUMBER_KEY = "sms_number";
    protected static final String SUBSCRIBABLE_STATUS = "subscribableStatus";
    protected static final String TAGS = "tags";
    private static final String TOSYNC_STATE = "TOSYNC_STATE";
    protected static final String USER_SUBSCRIBE_PREF = "userSubscribePref";
    private boolean canMakeUpdates;
    private OneSignalStateSynchronizer.UserStateSynchronizerType channel;
    private UserState currentUserState;
    private UserState toSyncUserState;
    protected final Object LOCK = new Object();
    private AtomicBoolean runningSyncUserState = new AtomicBoolean();
    private final Queue<OneSignal.ChangeTagsUpdateHandler> sendTagsHandlers = new LinkedBlockingQueue();
    private final Queue<OneSignal.OSInternalExternalUserIdUpdateCompletionHandler> externalUserIdUpdateHandlers = new LinkedBlockingQueue();
    private final Queue<OneSignalStateSynchronizer.OSDeviceInfoCompletionHandler> deviceInfoCompletionHandler = new LinkedBlockingQueue();
    HashMap<Integer, NetworkHandlerThread> networkHandlerThreads = new HashMap<>();
    private final Object networkHandlerSyncLock = new Object() { // from class: com.onesignal.UserStateSynchronizer.1
    };
    protected boolean waitingForSessionResponse = false;

    protected abstract void addOnSessionOrCreateExtras(JSONObject jSONObject);

    protected abstract void fireEventsForUpdateFailure(JSONObject jSONObject);

    abstract String getExternalId(boolean z);

    protected abstract String getId();

    protected abstract OneSignal.LOG_LEVEL getLogLevel();

    abstract boolean getSubscribed();

    abstract GetTagsResult getTags(boolean z);

    public abstract boolean getUserSubscribePreference();

    abstract void logoutChannel();

    protected abstract UserState newUserState(String str, boolean z);

    protected abstract void onSuccessfulSync(JSONObject jSONObject);

    abstract void saveChannelId(String str);

    protected abstract void scheduleSyncToServer();

    public abstract void setPermission(boolean z);

    abstract void setSubscription(boolean z);

    abstract void updateIdDependents(String str);

    abstract void updateState(JSONObject jSONObject);

    UserStateSynchronizer(OneSignalStateSynchronizer.UserStateSynchronizerType userStateSynchronizerType) {
        this.channel = userStateSynchronizerType;
    }

    OneSignalStateSynchronizer.UserStateSynchronizerType getChannelType() {
        return this.channel;
    }

    String getChannelString() {
        return this.channel.name().toLowerCase();
    }

    static class GetTagsResult {
        JSONObject result;
        boolean serverSuccess;

        GetTagsResult(boolean z, JSONObject jSONObject) {
            this.serverSuccess = z;
            this.result = jSONObject;
        }
    }

    String getRegistrationId() {
        return getToSyncUserState().getSyncValues().optString(IDENTIFIER, null);
    }

    boolean hasQueuedHandlers() {
        return this.externalUserIdUpdateHandlers.size() > 0;
    }

    class NetworkHandlerThread extends HandlerThread {
        static final int MAX_RETRIES = 3;
        static final int NETWORK_CALL_DELAY_TO_BUFFER_MS = 5000;
        protected static final int NETWORK_HANDLER_USERSTATE = 0;
        private static final String THREAD_NAME_PREFIX = "OSH_NetworkHandlerThread_";
        int currentRetry;
        Handler mHandler;
        int mType;

        NetworkHandlerThread(int i) {
            super(THREAD_NAME_PREFIX + UserStateSynchronizer.this.channel);
            this.mType = i;
            start();
            this.mHandler = new Handler(getLooper());
        }

        void runNewJobDelayed() {
            if (UserStateSynchronizer.this.canMakeUpdates) {
                synchronized (this.mHandler) {
                    this.currentRetry = 0;
                    this.mHandler.removeCallbacksAndMessages(null);
                    this.mHandler.postDelayed(getNewRunnable(), 5000L);
                }
            }
        }

        private Runnable getNewRunnable() {
            if (this.mType != 0) {
                return null;
            }
            return new Runnable() { // from class: com.onesignal.UserStateSynchronizer.NetworkHandlerThread.1
                @Override // java.lang.Runnable
                public void run() {
                    if (UserStateSynchronizer.this.runningSyncUserState.get()) {
                        return;
                    }
                    UserStateSynchronizer.this.syncUserState(false);
                }
            };
        }

        void stopScheduledRunnable() {
            this.mHandler.removeCallbacksAndMessages(null);
        }

        boolean doRetry() {
            boolean zHasMessages;
            synchronized (this.mHandler) {
                boolean z = this.currentRetry < 3;
                boolean zHasMessages2 = this.mHandler.hasMessages(0);
                if (z && !zHasMessages2) {
                    this.currentRetry++;
                    this.mHandler.postDelayed(getNewRunnable(), this.currentRetry * 15000);
                }
                zHasMessages = this.mHandler.hasMessages(0);
            }
            return zHasMessages;
        }
    }

    protected JSONObject generateJsonDiff(JSONObject jSONObject, JSONObject jSONObject2, JSONObject jSONObject3, Set<String> set) {
        JSONObject jSONObjectGenerateJsonDiff;
        synchronized (this.LOCK) {
            jSONObjectGenerateJsonDiff = JSONUtils.generateJsonDiff(jSONObject, jSONObject2, jSONObject3, set);
        }
        return jSONObjectGenerateJsonDiff;
    }

    protected UserState getCurrentUserState() {
        if (this.currentUserState == null) {
            synchronized (this.LOCK) {
                if (this.currentUserState == null) {
                    this.currentUserState = newUserState(CURRENT_STATE, true);
                }
            }
        }
        return this.currentUserState;
    }

    protected UserState getToSyncUserState() {
        if (this.toSyncUserState == null) {
            synchronized (this.LOCK) {
                if (this.toSyncUserState == null) {
                    this.toSyncUserState = newUserState(TOSYNC_STATE, true);
                }
            }
        }
        return this.toSyncUserState;
    }

    void initUserState() {
        if (this.currentUserState == null) {
            synchronized (this.LOCK) {
                if (this.currentUserState == null) {
                    this.currentUserState = newUserState(CURRENT_STATE, true);
                }
            }
        }
        getToSyncUserState();
    }

    void clearLocation() {
        getToSyncUserState().clearLocation();
        getToSyncUserState().persistState();
    }

    boolean persist() {
        boolean z;
        if (this.toSyncUserState == null) {
            return false;
        }
        synchronized (this.LOCK) {
            z = getCurrentUserState().generateJsonDiff(this.toSyncUserState, isSessionCall()) != null;
            this.toSyncUserState.persistState();
        }
        return z;
    }

    private boolean isSessionCall() {
        return (getToSyncUserState().getDependValues().optBoolean("session") || getId() == null) && !this.waitingForSessionResponse;
    }

    private boolean syncEmailLogout() {
        return getToSyncUserState().getDependValues().optBoolean(LOGOUT_EMAIL, false);
    }

    void syncUserState(boolean z) {
        this.runningSyncUserState.set(true);
        internalSyncUserState(z);
        this.runningSyncUserState.set(false);
    }

    private void internalSyncUserState(boolean z) {
        String id = getId();
        if (syncEmailLogout() && id != null) {
            doEmailLogout(id);
            return;
        }
        if (this.currentUserState == null) {
            initUserState();
        }
        boolean z2 = !z && isSessionCall();
        synchronized (this.LOCK) {
            JSONObject jSONObjectGenerateJsonDiff = getCurrentUserState().generateJsonDiff(getToSyncUserState(), z2);
            JSONObject jSONObjectGenerateJsonDiffFromDependValues = getCurrentUserState().generateJsonDiffFromDependValues(getToSyncUserState(), null);
            OneSignal.onesignalLog(OneSignal.LOG_LEVEL.DEBUG, "UserStateSynchronizer internalSyncUserState from session call: " + z2 + " jsonBody: " + jSONObjectGenerateJsonDiff);
            if (jSONObjectGenerateJsonDiff == null) {
                getCurrentUserState().persistStateAfterSync(jSONObjectGenerateJsonDiffFromDependValues, null);
                sendTagsHandlersPerformOnSuccess();
                externalUserIdUpdateHandlersPerformOnSuccess();
                deviceInfoHandlersPerformOnSuccess();
                return;
            }
            getToSyncUserState().persistState();
            if (!z2) {
                doPutSync(id, jSONObjectGenerateJsonDiff, jSONObjectGenerateJsonDiffFromDependValues);
            } else {
                doCreateOrNewSession(id, jSONObjectGenerateJsonDiff, jSONObjectGenerateJsonDiffFromDependValues);
            }
        }
    }

    private void doEmailLogout(String str) {
        String str2 = "players/" + str + "/email_logout";
        JSONObject jSONObject = new JSONObject();
        try {
            ImmutableJSONObject dependValues = getCurrentUserState().getDependValues();
            if (dependValues.has(EMAIL_AUTH_HASH_KEY)) {
                jSONObject.put(EMAIL_AUTH_HASH_KEY, dependValues.optString(EMAIL_AUTH_HASH_KEY));
            }
            ImmutableJSONObject syncValues = getCurrentUserState().getSyncValues();
            if (syncValues.has(PARENT_PLAYER_ID)) {
                jSONObject.put(PARENT_PLAYER_ID, syncValues.optString(PARENT_PLAYER_ID));
            }
            jSONObject.put("app_id", syncValues.optString("app_id"));
        } catch (JSONException e) {
            e.printStackTrace();
        }
        OneSignalRestClient.postSync(str2, jSONObject, new OneSignalRestClient.ResponseHandler() { // from class: com.onesignal.UserStateSynchronizer.2
            @Override // com.onesignal.OneSignalRestClient.ResponseHandler
            void onFailure(int i, String str3, Throwable th) {
                OneSignal.Log(OneSignal.LOG_LEVEL.WARN, "Failed last request. statusCode: " + i + "\nresponse: " + str3);
                if (UserStateSynchronizer.this.response400WithErrorsContaining(i, str3, "already logged out of email")) {
                    UserStateSynchronizer.this.logoutEmailSyncSuccess();
                } else if (UserStateSynchronizer.this.response400WithErrorsContaining(i, str3, "not a valid device_type")) {
                    UserStateSynchronizer.this.handlePlayerDeletedFromServer();
                } else {
                    UserStateSynchronizer.this.handleNetworkFailure(i);
                }
            }

            @Override // com.onesignal.OneSignalRestClient.ResponseHandler
            void onSuccess(String str3) {
                UserStateSynchronizer.this.logoutEmailSyncSuccess();
            }
        });
    }
    public void logoutEmailSyncSuccess() {
        getToSyncUserState().removeFromDependValues(LOGOUT_EMAIL);
        this.toSyncUserState.removeFromDependValues(EMAIL_AUTH_HASH_KEY);
        this.toSyncUserState.removeFromSyncValues(PARENT_PLAYER_ID);
        this.toSyncUserState.removeFromSyncValues("email");
        this.toSyncUserState.persistState();
        getCurrentUserState().removeFromDependValues(EMAIL_AUTH_HASH_KEY);
        getCurrentUserState().removeFromSyncValues(PARENT_PLAYER_ID);
        String strOptString = getCurrentUserState().getSyncValues().optString("email");
        getCurrentUserState().removeFromSyncValues("email");
        OneSignalStateSynchronizer.setNewSessionForEmail();
        OneSignal.Log(OneSignal.LOG_LEVEL.INFO, "Device successfully logged out of email: " + strOptString);
        OneSignal.handleSuccessfulEmailLogout();
    }

    private void doPutSync(String str, final JSONObject jSONObject, final JSONObject jSONObject2) {
        if (str == null) {
            OneSignal.onesignalLog(getLogLevel(), "Error updating the user record because of the null user id");
            sendTagsHandlersPerformOnFailure(new OneSignal.SendTagsError(-1, "Unable to update tags: the current user is not registered with OneSignal"));
            externalUserIdUpdateHandlersPerformOnFailure();
            deviceInfoHandlersPerformOnFailure(new OneSignalStateSynchronizer.OSDeviceInfoError(-1, "Unable to set Language: the current user is not registered with OneSignal"));
            return;
        }
        OneSignalRestClient.putSync("players/" + str, jSONObject, new OneSignalRestClient.ResponseHandler() { // from class: com.onesignal.UserStateSynchronizer.3
            @Override // com.onesignal.OneSignalRestClient.ResponseHandler
            void onFailure(int i, String str2, Throwable th) {
                OneSignal.Log(OneSignal.LOG_LEVEL.ERROR, "Failed PUT sync request with status code: " + i + " and response: " + str2);
                synchronized (UserStateSynchronizer.this.LOCK) {
                    if (UserStateSynchronizer.this.response400WithErrorsContaining(i, str2, "No user with this id found")) {
                        UserStateSynchronizer.this.handlePlayerDeletedFromServer();
                    } else {
                        UserStateSynchronizer.this.handleNetworkFailure(i);
                    }
                }
                if (jSONObject.has("tags")) {
                    UserStateSynchronizer.this.sendTagsHandlersPerformOnFailure(new OneSignal.SendTagsError(i, str2));
                }
                if (jSONObject.has(UserStateSynchronizer.EXTERNAL_USER_ID)) {
                    OneSignal.onesignalLog(OneSignal.LOG_LEVEL.ERROR, "Error setting external user id for push with status code: " + i + " and message: " + str2);
                    UserStateSynchronizer.this.externalUserIdUpdateHandlersPerformOnFailure();
                }
                if (jSONObject.has(UserStateSynchronizer.LANGUAGE)) {
                    UserStateSynchronizer.this.deviceInfoHandlersPerformOnFailure(new OneSignalStateSynchronizer.OSDeviceInfoError(i, str2));
                }
            }

            @Override // com.onesignal.OneSignalRestClient.ResponseHandler
            void onSuccess(String str2) {
                synchronized (UserStateSynchronizer.this.LOCK) {
                    UserStateSynchronizer.this.getCurrentUserState().persistStateAfterSync(jSONObject2, jSONObject);
                    UserStateSynchronizer.this.onSuccessfulSync(jSONObject);
                }
                if (jSONObject.has("tags")) {
                    UserStateSynchronizer.this.sendTagsHandlersPerformOnSuccess();
                }
                if (jSONObject.has(UserStateSynchronizer.EXTERNAL_USER_ID)) {
                    UserStateSynchronizer.this.externalUserIdUpdateHandlersPerformOnSuccess();
                }
                if (jSONObject.has(UserStateSynchronizer.LANGUAGE)) {
                    UserStateSynchronizer.this.deviceInfoHandlersPerformOnSuccess();
                }
            }
        });
    }

    private void doCreateOrNewSession(final String str, final JSONObject jSONObject, final JSONObject jSONObject2) {
        String str2;
        if (str == null) {
            str2 = "players";
        } else {
            str2 = "players/" + str + "/on_session";
        }
        this.waitingForSessionResponse = true;
        addOnSessionOrCreateExtras(jSONObject);
        OneSignalRestClient.postSync(str2, jSONObject, new OneSignalRestClient.ResponseHandler() { // from class: com.onesignal.UserStateSynchronizer.4
            @Override // com.onesignal.OneSignalRestClient.ResponseHandler
            void onFailure(int i, String str3, Throwable th) {
                synchronized (UserStateSynchronizer.this.LOCK) {
                    UserStateSynchronizer.this.waitingForSessionResponse = false;
                    OneSignal.Log(OneSignal.LOG_LEVEL.WARN, "Failed last request. statusCode: " + i + "\nresponse: " + str3);
                    if (UserStateSynchronizer.this.response400WithErrorsContaining(i, str3, "not a valid device_type")) {
                        UserStateSynchronizer.this.handlePlayerDeletedFromServer();
                    } else {
                        UserStateSynchronizer.this.handleNetworkFailure(i);
                    }
                }
            }

            @Override // com.onesignal.OneSignalRestClient.ResponseHandler
            void onSuccess(String str3) {
                synchronized (UserStateSynchronizer.this.LOCK) {
                    UserStateSynchronizer.this.waitingForSessionResponse = false;
                    UserStateSynchronizer.this.getCurrentUserState().persistStateAfterSync(jSONObject2, jSONObject);
                    try {
                        OneSignal.onesignalLog(OneSignal.LOG_LEVEL.DEBUG, "doCreateOrNewSession:response: " + str3);
                        JSONObject jSONObject3 = new JSONObject(str3);
                        if (jSONObject3.has("id")) {
                            String strOptString = jSONObject3.optString("id");
                            UserStateSynchronizer.this.updateIdDependents(strOptString);
                            OneSignal.Log(OneSignal.LOG_LEVEL.INFO, "Device registered, UserId = " + strOptString);
                        } else {
                            OneSignal.Log(OneSignal.LOG_LEVEL.INFO, "session sent, UserId = " + str);
                        }
                        UserStateSynchronizer.this.getUserStateForModification().putOnDependValues("session", false);
                        UserStateSynchronizer.this.getUserStateForModification().persistState();
                        if (jSONObject3.has(OSInAppMessageController.IN_APP_MESSAGES_JSON_KEY)) {
                            OneSignal.getInAppMessageController().receivedInAppMessageJson(jSONObject3.getJSONArray(OSInAppMessageController.IN_APP_MESSAGES_JSON_KEY));
                        }
                        UserStateSynchronizer.this.onSuccessfulSync(jSONObject);
                    } catch (JSONException e) {
                        OneSignal.Log(OneSignal.LOG_LEVEL.ERROR, "ERROR parsing on_session or create JSON Response.", e);
                    }
                }
            }
        });
    }
    public void handleNetworkFailure(int i) {
        if (i == 403) {
            OneSignal.Log(OneSignal.LOG_LEVEL.FATAL, "403 error updating player, omitting further retries!");
            fireNetworkFailureEvents();
        } else {
            if (getNetworkHandlerThread(0).doRetry()) {
                return;
            }
            fireNetworkFailureEvents();
        }
    }

    private void fireNetworkFailureEvents() {
        JSONObject jSONObjectGenerateJsonDiff = getCurrentUserState().generateJsonDiff(this.toSyncUserState, false);
        if (jSONObjectGenerateJsonDiff != null) {
            fireEventsForUpdateFailure(jSONObjectGenerateJsonDiff);
        }
        if (getToSyncUserState().getDependValues().optBoolean(LOGOUT_EMAIL, false)) {
            OneSignal.handleFailedEmailLogout();
        }
    }
    public boolean response400WithErrorsContaining(int i, String str, String str2) {
        if (i == 400 && str != null) {
            try {
                JSONObject jSONObject = new JSONObject(str);
                if (jSONObject.has(ERRORS)) {
                    return jSONObject.optString(ERRORS).contains(str2);
                }
                return false;
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
        return false;
    }

    protected NetworkHandlerThread getNetworkHandlerThread(Integer num) {
        NetworkHandlerThread networkHandlerThread;
        synchronized (this.networkHandlerSyncLock) {
            if (!this.networkHandlerThreads.containsKey(num)) {
                this.networkHandlerThreads.put(num, new NetworkHandlerThread(num.intValue()));
            }
            networkHandlerThread = this.networkHandlerThreads.get(num);
        }
        return networkHandlerThread;
    }

    protected UserState getUserStateForModification() {
        if (this.toSyncUserState == null) {
            this.toSyncUserState = getCurrentUserState().deepClone(TOSYNC_STATE);
        }
        scheduleSyncToServer();
        return this.toSyncUserState;
    }

    void updateDeviceInfo(JSONObject jSONObject, OneSignalStateSynchronizer.OSDeviceInfoCompletionHandler oSDeviceInfoCompletionHandler) {
        if (oSDeviceInfoCompletionHandler != null) {
            this.deviceInfoCompletionHandler.add(oSDeviceInfoCompletionHandler);
        }
        getUserStateForModification().generateJsonDiffFromIntoSyncValued(jSONObject, null);
    }

    void setNewSession() {
        try {
            synchronized (this.LOCK) {
                getUserStateForModification().putOnDependValues("session", true);
                getUserStateForModification().persistState();
            }
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    boolean getSyncAsNewSession() {
        return getUserStateForModification().getDependValues().optBoolean("session");
    }

    void sendTags(JSONObject jSONObject, OneSignal.ChangeTagsUpdateHandler changeTagsUpdateHandler) {
        if (changeTagsUpdateHandler != null) {
            this.sendTagsHandlers.add(changeTagsUpdateHandler);
        }
        getUserStateForModification().generateJsonDiffFromIntoSyncValued(jSONObject, null);
    }

    void syncHashedEmail(JSONObject jSONObject) {
        getUserStateForModification().generateJsonDiffFromIntoSyncValued(jSONObject, null);
    }

    void setExternalUserId(String str, String str2, OneSignal.OSInternalExternalUserIdUpdateCompletionHandler oSInternalExternalUserIdUpdateCompletionHandler) throws JSONException {
        if (oSInternalExternalUserIdUpdateCompletionHandler != null) {
            this.externalUserIdUpdateHandlers.add(oSInternalExternalUserIdUpdateCompletionHandler);
        }
        UserState userStateForModification = getUserStateForModification();
        userStateForModification.putOnSyncValues(EXTERNAL_USER_ID, str);
        if (str2 != null) {
            userStateForModification.putOnSyncValues(EXTERNAL_USER_ID_AUTH_HASH, str2);
        }
    }
    public void handlePlayerDeletedFromServer() {
        OneSignal.Log(OneSignal.LOG_LEVEL.WARN, "Creating new player based on missing player_id noted above.");
        OneSignal.handleSuccessfulEmailLogout();
        resetCurrentState();
        updateIdDependents(null);
        scheduleSyncToServer();
    }

    void resetCurrentState() {
        getCurrentUserState().setSyncValues(new JSONObject());
        getCurrentUserState().persistState();
    }

    void updateLocation(LocationController.LocationPoint locationPoint) {
        getUserStateForModification().setLocation(locationPoint);
    }

    void sendPurchases(JSONObject jSONObject, OneSignalRestClient.ResponseHandler responseHandler) {
        OneSignalRestClient.post("players/" + getId() + "/on_purchase", jSONObject, responseHandler);
    }

    void readyToUpdate(boolean z) {
        boolean z2 = this.canMakeUpdates != z;
        this.canMakeUpdates = z;
        if (z2 && z) {
            scheduleSyncToServer();
        }
    }
    public void sendTagsHandlersPerformOnSuccess() {
        JSONObject jSONObject = OneSignalStateSynchronizer.getTags(false).result;
        while (true) {
            OneSignal.ChangeTagsUpdateHandler changeTagsUpdateHandlerPoll = this.sendTagsHandlers.poll();
            if (changeTagsUpdateHandlerPoll == null) {
                return;
            } else {
                changeTagsUpdateHandlerPoll.onSuccess(jSONObject);
            }
        }
    }
    public void sendTagsHandlersPerformOnFailure(OneSignal.SendTagsError sendTagsError) {
        while (true) {
            OneSignal.ChangeTagsUpdateHandler changeTagsUpdateHandlerPoll = this.sendTagsHandlers.poll();
            if (changeTagsUpdateHandlerPoll == null) {
                return;
            } else {
                changeTagsUpdateHandlerPoll.onFailure(sendTagsError);
            }
        }
    }
    public void externalUserIdUpdateHandlersPerformOnSuccess() {
        while (true) {
            OneSignal.OSInternalExternalUserIdUpdateCompletionHandler oSInternalExternalUserIdUpdateCompletionHandlerPoll = this.externalUserIdUpdateHandlers.poll();
            if (oSInternalExternalUserIdUpdateCompletionHandlerPoll == null) {
                return;
            } else {
                oSInternalExternalUserIdUpdateCompletionHandlerPoll.onComplete(getChannelString(), true);
            }
        }
    }
    public void externalUserIdUpdateHandlersPerformOnFailure() {
        while (true) {
            OneSignal.OSInternalExternalUserIdUpdateCompletionHandler oSInternalExternalUserIdUpdateCompletionHandlerPoll = this.externalUserIdUpdateHandlers.poll();
            if (oSInternalExternalUserIdUpdateCompletionHandlerPoll == null) {
                return;
            } else {
                oSInternalExternalUserIdUpdateCompletionHandlerPoll.onComplete(getChannelString(), false);
            }
        }
    }
    public void deviceInfoHandlersPerformOnSuccess() {
        String language = OneSignalStateSynchronizer.getLanguage();
        while (true) {
            OneSignalStateSynchronizer.OSDeviceInfoCompletionHandler oSDeviceInfoCompletionHandlerPoll = this.deviceInfoCompletionHandler.poll();
            if (oSDeviceInfoCompletionHandlerPoll == null) {
                return;
            } else {
                oSDeviceInfoCompletionHandlerPoll.onSuccess(language);
            }
        }
    }
    public void deviceInfoHandlersPerformOnFailure(OneSignalStateSynchronizer.OSDeviceInfoError oSDeviceInfoError) {
        while (true) {
            OneSignalStateSynchronizer.OSDeviceInfoCompletionHandler oSDeviceInfoCompletionHandlerPoll = this.deviceInfoCompletionHandler.poll();
            if (oSDeviceInfoCompletionHandlerPoll == null) {
                return;
            } else {
                oSDeviceInfoCompletionHandlerPoll.onFailure(oSDeviceInfoError);
            }
        }
    }
}


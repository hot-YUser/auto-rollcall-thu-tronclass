package com.onesignal;

import com.onesignal.OneSignal;
import com.onesignal.OneSignalRestClient;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
public class OneSignalRemoteParams {
    public static final int DEFAULT_INDIRECT_ATTRIBUTION_WINDOW = 1440;
    public static final int DEFAULT_NOTIFICATION_LIMIT = 10;
    private static final String DIRECT_PARAM = "direct";
    private static final String DISABLE_GMS_MISSING_PROMPT = "disable_gms_missing_prompt";
    private static final String ENABLED_PARAM = "enabled";
    private static final String FCM_API_KEY = "api_key";
    private static final String FCM_APP_ID = "app_id";
    private static final String FCM_PARENT_PARAM = "fcm";
    private static final String FCM_PROJECT_ID = "project_id";
    private static final String IAM_ATTRIBUTION_PARAM = "in_app_message_attribution";
    private static final int INCREASE_BETWEEN_RETRIES = 10000;
    private static final String INDIRECT_PARAM = "indirect";
    private static final String LOCATION_SHARED = "location_shared";
    private static final int MAX_WAIT_BETWEEN_RETRIES = 90000;
    private static final int MIN_WAIT_BETWEEN_RETRIES = 30000;
    private static final String NOTIFICATION_ATTRIBUTION_PARAM = "notification_attribution";
    private static final String OUTCOMES_V2_SERVICE_PARAM = "v2_enabled";
    private static final String OUTCOME_PARAM = "outcomes";
    private static final String REQUIRES_USER_PRIVACY_CONSENT = "requires_user_privacy_consent";
    private static final String UNATTRIBUTED_PARAM = "unattributed";
    private static final String UNSUBSCRIBE_ON_NOTIFICATION_DISABLE = "unsubscribe_on_notifications_disabled";
    private static int androidParamsRetries;

    interface Callback {
        void complete(Params params);
    }

    static /* synthetic */ int access$008() {
        int i = androidParamsRetries;
        androidParamsRetries = i + 1;
        return i;
    }

    static class FCMParams {
        String apiKey;
        String appId;
        String projectId;

        FCMParams() {
        }
    }

    public static class InfluenceParams {
        int indirectNotificationAttributionWindow = OneSignalRemoteParams.DEFAULT_INDIRECT_ATTRIBUTION_WINDOW;
        int notificationLimit = 10;
        int indirectIAMAttributionWindow = OneSignalRemoteParams.DEFAULT_INDIRECT_ATTRIBUTION_WINDOW;
        int iamLimit = 10;
        boolean directEnabled = false;
        boolean indirectEnabled = false;
        boolean unattributedEnabled = false;
        boolean outcomesV2ServiceEnabled = false;

        public int getIndirectNotificationAttributionWindow() {
            return this.indirectNotificationAttributionWindow;
        }

        public int getNotificationLimit() {
            return this.notificationLimit;
        }

        public int getIndirectIAMAttributionWindow() {
            return this.indirectIAMAttributionWindow;
        }

        public int getIamLimit() {
            return this.iamLimit;
        }

        public boolean isDirectEnabled() {
            return this.directEnabled;
        }

        public boolean isIndirectEnabled() {
            return this.indirectEnabled;
        }

        public boolean isUnattributedEnabled() {
            return this.unattributedEnabled;
        }

        public String toString() {
            return "InfluenceParams{indirectNotificationAttributionWindow=" + this.indirectNotificationAttributionWindow + ", notificationLimit=" + this.notificationLimit + ", indirectIAMAttributionWindow=" + this.indirectIAMAttributionWindow + ", iamLimit=" + this.iamLimit + ", directEnabled=" + this.directEnabled + ", indirectEnabled=" + this.indirectEnabled + ", unattributedEnabled=" + this.unattributedEnabled + '}';
        }
    }

    static class Params {
        boolean clearGroupOnSummaryClick;
        Boolean disableGMSMissingPrompt;
        boolean enterprise;
        FCMParams fcmParams;
        boolean firebaseAnalytics;
        String googleProjectNumber;
        InfluenceParams influenceParams;
        Boolean locationShared;
        JSONArray notificationChannels;
        boolean receiveReceiptEnabled;
        Boolean requiresUserPrivacyConsent;
        boolean restoreTTLFilter;
        Boolean unsubscribeWhenNotificationsDisabled;
        boolean useEmailAuth;
        boolean useSMSAuth;
        boolean useUserIdAuth;

        Params() {
        }
    }

    static void makeAndroidParamsRequest(final String str, final String str2, final Callback callback) {
        OneSignalRestClient.ResponseHandler responseHandler = new OneSignalRestClient.ResponseHandler() { // from class: com.onesignal.OneSignalRemoteParams.1
            @Override // com.onesignal.OneSignalRestClient.ResponseHandler
            void onFailure(int i, String str3, Throwable th) {
                if (i == 403) {
                    OneSignal.Log(OneSignal.LOG_LEVEL.FATAL, "403 error getting OneSignal params, omitting further retries!");
                } else {
                    new Thread(new Runnable() { // from class: com.onesignal.OneSignalRemoteParams.1.1
                        @Override // java.lang.Runnable
                        public void run() {
                            int i2 = (OneSignalRemoteParams.androidParamsRetries * 10000) + OneSignalRemoteParams.MIN_WAIT_BETWEEN_RETRIES;
                            if (i2 > OneSignalRemoteParams.MAX_WAIT_BETWEEN_RETRIES) {
                                i2 = OneSignalRemoteParams.MAX_WAIT_BETWEEN_RETRIES;
                            }
                            OneSignal.Log(OneSignal.LOG_LEVEL.INFO, "Failed to get Android parameters, trying again in " + (i2 / 1000) + " seconds.");
                            try {
                                Thread.sleep(i2);
                                OneSignalRemoteParams.access$008();
                                OneSignalRemoteParams.makeAndroidParamsRequest(str, str2, callback);
                            } catch (InterruptedException e) {
                                e.printStackTrace();
                            }
                        }
                    }, "OS_PARAMS_REQUEST").start();
                }
            }

            @Override // com.onesignal.OneSignalRestClient.ResponseHandler
            void onSuccess(String str3) {
                OneSignalRemoteParams.processJson(str3, callback);
            }
        };
        String str3 = "apps/" + str + "/android_params.js";
        if (str2 != null) {
            str3 = str3 + "?player_id=" + str2;
        }
        OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "Starting request to get Android parameters.");
        OneSignalRestClient.get(str3, responseHandler, "CACHE_KEY_REMOTE_PARAMS");
    }
    public static void processJson(String str, Callback callback) {
        try {
            callback.complete(new Params(new JSONObject(str)) { // from class: com.onesignal.OneSignalRemoteParams.2
                final /* synthetic */ JSONObject val$responseJson;

                {
                    this.val$responseJson = jSONObject;
                    this.enterprise = jSONObject.optBoolean("enterp", false);
                    this.useEmailAuth = jSONObject.optBoolean("require_email_auth", false);
                    this.useUserIdAuth = jSONObject.optBoolean("require_user_id_auth", false);
                    this.notificationChannels = jSONObject.optJSONArray("chnl_lst");
                    this.firebaseAnalytics = jSONObject.optBoolean("fba", false);
                    this.restoreTTLFilter = jSONObject.optBoolean("restore_ttl_filter", true);
                    this.googleProjectNumber = jSONObject.optString("android_sender_id", null);
                    this.clearGroupOnSummaryClick = jSONObject.optBoolean("clear_group_on_summary_click", true);
                    this.receiveReceiptEnabled = jSONObject.optBoolean("receive_receipts_enable", false);
                    this.disableGMSMissingPrompt = !jSONObject.has(OneSignalRemoteParams.DISABLE_GMS_MISSING_PROMPT) ? null : Boolean.valueOf(jSONObject.optBoolean(OneSignalRemoteParams.DISABLE_GMS_MISSING_PROMPT, false));
                    this.unsubscribeWhenNotificationsDisabled = !jSONObject.has(OneSignalRemoteParams.UNSUBSCRIBE_ON_NOTIFICATION_DISABLE) ? null : Boolean.valueOf(jSONObject.optBoolean(OneSignalRemoteParams.UNSUBSCRIBE_ON_NOTIFICATION_DISABLE, true));
                    this.locationShared = !jSONObject.has(OneSignalRemoteParams.LOCATION_SHARED) ? null : Boolean.valueOf(jSONObject.optBoolean(OneSignalRemoteParams.LOCATION_SHARED, true));
                    this.requiresUserPrivacyConsent = !jSONObject.has(OneSignalRemoteParams.REQUIRES_USER_PRIVACY_CONSENT) ? null : Boolean.valueOf(jSONObject.optBoolean(OneSignalRemoteParams.REQUIRES_USER_PRIVACY_CONSENT, false));
                    this.influenceParams = new InfluenceParams();
                    if (jSONObject.has(OneSignalRemoteParams.OUTCOME_PARAM)) {
                        OneSignalRemoteParams.processOutcomeJson(jSONObject.optJSONObject(OneSignalRemoteParams.OUTCOME_PARAM), this.influenceParams);
                    }
                    this.fcmParams = new FCMParams();
                    if (jSONObject.has(OneSignalRemoteParams.FCM_PARENT_PARAM)) {
                        JSONObject jSONObjectOptJSONObject = jSONObject.optJSONObject(OneSignalRemoteParams.FCM_PARENT_PARAM);
                        this.fcmParams.apiKey = jSONObjectOptJSONObject.optString(OneSignalRemoteParams.FCM_API_KEY, null);
                        this.fcmParams.appId = jSONObjectOptJSONObject.optString("app_id", null);
                        this.fcmParams.projectId = jSONObjectOptJSONObject.optString(OneSignalRemoteParams.FCM_PROJECT_ID, null);
                    }
                }
            });
        } catch (NullPointerException | JSONException e) {
            OneSignal.Log(OneSignal.LOG_LEVEL.FATAL, "Error parsing android_params!: ", e);
            OneSignal.Log(OneSignal.LOG_LEVEL.FATAL, "Response that errored from android_params!: " + str);
        }
    }
    public static void processOutcomeJson(JSONObject jSONObject, InfluenceParams influenceParams) {
        if (jSONObject.has(OUTCOMES_V2_SERVICE_PARAM)) {
            influenceParams.outcomesV2ServiceEnabled = jSONObject.optBoolean(OUTCOMES_V2_SERVICE_PARAM);
        }
        if (jSONObject.has("direct")) {
            influenceParams.directEnabled = jSONObject.optJSONObject("direct").optBoolean(ENABLED_PARAM);
        }
        if (jSONObject.has("indirect")) {
            JSONObject jSONObjectOptJSONObject = jSONObject.optJSONObject("indirect");
            influenceParams.indirectEnabled = jSONObjectOptJSONObject.optBoolean(ENABLED_PARAM);
            if (jSONObjectOptJSONObject.has(NOTIFICATION_ATTRIBUTION_PARAM)) {
                JSONObject jSONObjectOptJSONObject2 = jSONObjectOptJSONObject.optJSONObject(NOTIFICATION_ATTRIBUTION_PARAM);
                influenceParams.indirectNotificationAttributionWindow = jSONObjectOptJSONObject2.optInt("minutes_since_displayed", DEFAULT_INDIRECT_ATTRIBUTION_WINDOW);
                influenceParams.notificationLimit = jSONObjectOptJSONObject2.optInt("limit", 10);
            }
            if (jSONObjectOptJSONObject.has(IAM_ATTRIBUTION_PARAM)) {
                JSONObject jSONObjectOptJSONObject3 = jSONObjectOptJSONObject.optJSONObject(IAM_ATTRIBUTION_PARAM);
                influenceParams.indirectIAMAttributionWindow = jSONObjectOptJSONObject3.optInt("minutes_since_displayed", DEFAULT_INDIRECT_ATTRIBUTION_WINDOW);
                influenceParams.iamLimit = jSONObjectOptJSONObject3.optInt("limit", 10);
            }
        }
        if (jSONObject.has(UNATTRIBUTED_PARAM)) {
            influenceParams.unattributedEnabled = jSONObject.optJSONObject(UNATTRIBUTED_PARAM).optBoolean(ENABLED_PARAM);
        }
    }
}


package com.onesignal;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.os.Bundle;
import com.onesignal.OSNotificationDataController;
import com.onesignal.OneSignal;
import com.onesignal.OneSignalDbContract;
import com.onesignal.outcomes.OSOutcomeConstants;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
class NotificationBundleProcessor {
    private static final String ANDROID_NOTIFICATION_ID = "android_notif_id";
    static final String DEFAULT_ACTION = "__DEFAULT__";
    static final String IAM_PREVIEW_KEY = "os_in_app_message_preview_id";
    public static final String PUSH_ADDITIONAL_DATA_KEY = "a";
    public static final String PUSH_MINIFIED_BUTTONS_LIST = "o";
    public static final String PUSH_MINIFIED_BUTTON_ICON = "p";
    public static final String PUSH_MINIFIED_BUTTON_ID = "i";
    public static final String PUSH_MINIFIED_BUTTON_TEXT = "n";

    interface NotificationProcessingCallback {
        void onResult(boolean z);
    }

    interface ProcessBundleReceiverCallback {
        void onBundleProcessed(ProcessedBundleResult processedBundleResult);
    }

    NotificationBundleProcessor() {
    }

    static void processFromFCMIntentService(final Context context, BundleCompat bundleCompat) {
        OneSignal.initWithContext(context);
        try {
            final String string = bundleCompat.getString("json_payload");
            if (string == null) {
                OneSignal.Log(OneSignal.LOG_LEVEL.ERROR, "json_payload key is nonexistent from mBundle passed to ProcessFromFCMIntentService: " + bundleCompat);
                return;
            }
            final JSONObject jSONObject = new JSONObject(string);
            final boolean z = bundleCompat.getBoolean("is_restoring", false);
            final long jLongValue = bundleCompat.getLong("timestamp").longValue();
            final int iIntValue = bundleCompat.containsKey(ANDROID_NOTIFICATION_ID) ? bundleCompat.getInt(ANDROID_NOTIFICATION_ID).intValue() : 0;
            OneSignal.notValidOrDuplicated(context, jSONObject, new OSNotificationDataController.InvalidOrDuplicateNotificationCallback() { // from class: com.onesignal.NotificationBundleProcessor.1
                @Override // com.onesignal.OSNotificationDataController.InvalidOrDuplicateNotificationCallback
                public void onResult(boolean z2) {
                    if (z || !z2) {
                        OSNotificationWorkManager.beginEnqueueingWork(context, OSNotificationFormatHelper.getOSNotificationIdFromJson(jSONObject), iIntValue, string, jLongValue, z, false);
                        if (z) {
                            OSUtils.sleep(100);
                        }
                    }
                }
            });
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    static int processJobForDisplay(OSNotificationGenerationJob oSNotificationGenerationJob, boolean z) {
        return processJobForDisplay(new OSNotificationController(oSNotificationGenerationJob, oSNotificationGenerationJob.isRestoring(), true), false, z);
    }

    static int processJobForDisplay(OSNotificationController oSNotificationController, boolean z) {
        return processJobForDisplay(oSNotificationController, false, z);
    }

    private static int processJobForDisplay(OSNotificationController oSNotificationController, boolean z, boolean z2) {
        OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "Starting processJobForDisplay opened: " + z + " fromBackgroundLogic: " + z2);
        OSNotificationGenerationJob notificationJob = oSNotificationController.getNotificationJob();
        processCollapseKey(notificationJob);
        int iIntValue = notificationJob.getAndroidId().intValue();
        boolean zDisplayNotification = false;
        if (shouldDisplayNotification(notificationJob)) {
            notificationJob.setIsNotificationToDisplay(true);
            if (z2 && OneSignal.shouldFireForegroundHandlers(notificationJob)) {
                oSNotificationController.setFromBackgroundLogic(false);
                OneSignal.fireForegroundHandlers(oSNotificationController);
                return iIntValue;
            }
            zDisplayNotification = GenerateNotification.displayNotification(notificationJob);
        }
        if (!notificationJob.isRestoring()) {
            processNotification(notificationJob, z, zDisplayNotification);
            OSNotificationWorkManager.removeNotificationIdProcessed(OSNotificationFormatHelper.getOSNotificationIdFromJson(oSNotificationController.getNotificationJob().getJsonPayload()));
            OneSignal.handleNotificationReceived(notificationJob);
        }
        return iIntValue;
    }

    private static boolean shouldDisplayNotification(OSNotificationGenerationJob oSNotificationGenerationJob) {
        return oSNotificationGenerationJob.hasExtender() || OSUtils.isStringNotEmpty(oSNotificationGenerationJob.getJsonPayload().optString("alert"));
    }

    static void processNotification(OSNotificationGenerationJob oSNotificationGenerationJob, boolean z, boolean z2) {
        saveNotification(oSNotificationGenerationJob, z);
        if (!z2) {
            markNotificationAsDismissed(oSNotificationGenerationJob);
            return;
        }
        String apiNotificationId = oSNotificationGenerationJob.getApiNotificationId();
        OSReceiveReceiptController.getInstance().beginEnqueueingWork(oSNotificationGenerationJob.getContext(), apiNotificationId);
        OneSignal.getSessionManager().onNotificationReceived(apiNotificationId);
    }

    private static void saveNotification(OSNotificationGenerationJob oSNotificationGenerationJob, boolean z) {
        OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "Saving Notification job: " + oSNotificationGenerationJob.toString());
        Context context = oSNotificationGenerationJob.getContext();
        JSONObject jsonPayload = oSNotificationGenerationJob.getJsonPayload();
        try {
            JSONObject customJSONObject = getCustomJSONObject(oSNotificationGenerationJob.getJsonPayload());
            OneSignalDbHelper oneSignalDbHelper = OneSignalDbHelper.getInstance(oSNotificationGenerationJob.getContext());
            if (oSNotificationGenerationJob.isNotificationToDisplay()) {
                String str = "android_notification_id = " + oSNotificationGenerationJob.getAndroidId();
                ContentValues contentValues = new ContentValues();
                contentValues.put(OneSignalDbContract.NotificationTable.COLUMN_NAME_DISMISSED, (Integer) 1);
                oneSignalDbHelper.update(OneSignalDbContract.NotificationTable.TABLE_NAME, contentValues, str, null);
                BadgeCountUpdater.update(oneSignalDbHelper, context);
            }
            ContentValues contentValues2 = new ContentValues();
            contentValues2.put("notification_id", customJSONObject.optString("i"));
            if (jsonPayload.has("grp")) {
                contentValues2.put(OneSignalDbContract.NotificationTable.COLUMN_NAME_GROUP_ID, jsonPayload.optString("grp"));
            }
            if (jsonPayload.has("collapse_key") && !"do_not_collapse".equals(jsonPayload.optString("collapse_key"))) {
                contentValues2.put(OneSignalDbContract.NotificationTable.COLUMN_NAME_COLLAPSE_ID, jsonPayload.optString("collapse_key"));
            }
            contentValues2.put(OneSignalDbContract.NotificationTable.COLUMN_NAME_OPENED, Integer.valueOf(z ? 1 : 0));
            if (!z) {
                contentValues2.put(OneSignalDbContract.NotificationTable.COLUMN_NAME_ANDROID_NOTIFICATION_ID, oSNotificationGenerationJob.getAndroidId());
            }
            if (oSNotificationGenerationJob.getTitle() != null) {
                contentValues2.put(OneSignalDbContract.NotificationTable.COLUMN_NAME_TITLE, oSNotificationGenerationJob.getTitle().toString());
            }
            if (oSNotificationGenerationJob.getBody() != null) {
                contentValues2.put(OneSignalDbContract.NotificationTable.COLUMN_NAME_MESSAGE, oSNotificationGenerationJob.getBody().toString());
            }
            contentValues2.put(OneSignalDbContract.NotificationTable.COLUMN_NAME_EXPIRE_TIME, Long.valueOf((jsonPayload.optLong("google.sent_time", OneSignal.getTime().getCurrentTimeMillis()) / 1000) + ((long) jsonPayload.optInt("google.ttl", 259200))));
            contentValues2.put(OneSignalDbContract.NotificationTable.COLUMN_NAME_FULL_DATA, jsonPayload.toString());
            oneSignalDbHelper.insertOrThrow(OneSignalDbContract.NotificationTable.TABLE_NAME, null, contentValues2);
            OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "Notification saved values: " + contentValues2.toString());
            if (z) {
                return;
            }
            BadgeCountUpdater.update(oneSignalDbHelper, context);
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    static void markNotificationAsDismissed(OSNotificationGenerationJob oSNotificationGenerationJob) {
        if (oSNotificationGenerationJob.isNotificationToDisplay()) {
            OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "Marking restored or disabled notifications as dismissed: " + oSNotificationGenerationJob.toString());
            String str = "android_notification_id = " + oSNotificationGenerationJob.getAndroidId();
            OneSignalDbHelper oneSignalDbHelper = OneSignalDbHelper.getInstance(oSNotificationGenerationJob.getContext());
            ContentValues contentValues = new ContentValues();
            contentValues.put(OneSignalDbContract.NotificationTable.COLUMN_NAME_DISMISSED, (Integer) 1);
            oneSignalDbHelper.update(OneSignalDbContract.NotificationTable.TABLE_NAME, contentValues, str, null);
            BadgeCountUpdater.update(oneSignalDbHelper, oSNotificationGenerationJob.getContext());
        }
    }

    static JSONObject bundleAsJSONObject(Bundle bundle) {
        JSONObject jSONObject = new JSONObject();
        for (String str : bundle.keySet()) {
            try {
                jSONObject.put(str, bundle.get(str));
            } catch (JSONException e) {
                OneSignal.Log(OneSignal.LOG_LEVEL.ERROR, "bundleAsJSONObject error for key: " + str, e);
            }
        }
        return jSONObject;
    }

    private static void maximizeButtonsFromBundle(Bundle bundle) {
        JSONObject jSONObject;
        String string;
        if (bundle.containsKey(PUSH_MINIFIED_BUTTONS_LIST)) {
            try {
                JSONObject jSONObject2 = new JSONObject(bundle.getString(OSNotificationFormatHelper.PAYLOAD_OS_ROOT_CUSTOM));
                if (jSONObject2.has(PUSH_ADDITIONAL_DATA_KEY)) {
                    jSONObject = jSONObject2.getJSONObject(PUSH_ADDITIONAL_DATA_KEY);
                } else {
                    jSONObject = new JSONObject();
                }
                JSONArray jSONArray = new JSONArray(bundle.getString(PUSH_MINIFIED_BUTTONS_LIST));
                bundle.remove(PUSH_MINIFIED_BUTTONS_LIST);
                for (int i = 0; i < jSONArray.length(); i++) {
                    JSONObject jSONObject3 = jSONArray.getJSONObject(i);
                    String string2 = jSONObject3.getString(PUSH_MINIFIED_BUTTON_TEXT);
                    jSONObject3.remove(PUSH_MINIFIED_BUTTON_TEXT);
                    if (jSONObject3.has("i")) {
                        string = jSONObject3.getString("i");
                        jSONObject3.remove("i");
                    } else {
                        string = string2;
                    }
                    jSONObject3.put(OSOutcomeConstants.OUTCOME_ID, string);
                    jSONObject3.put("text", string2);
                    if (jSONObject3.has(PUSH_MINIFIED_BUTTON_ICON)) {
                        jSONObject3.put("icon", jSONObject3.getString(PUSH_MINIFIED_BUTTON_ICON));
                        jSONObject3.remove(PUSH_MINIFIED_BUTTON_ICON);
                    }
                }
                jSONObject.put("actionButtons", jSONArray);
                jSONObject.put(GenerateNotification.BUNDLE_KEY_ACTION_ID, DEFAULT_ACTION);
                if (!jSONObject2.has(PUSH_ADDITIONAL_DATA_KEY)) {
                    jSONObject2.put(PUSH_ADDITIONAL_DATA_KEY, jSONObject);
                }
                bundle.putString(OSNotificationFormatHelper.PAYLOAD_OS_ROOT_CUSTOM, jSONObject2.toString());
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    }

    private static void processCollapseKey(OSNotificationGenerationJob oSNotificationGenerationJob) {
        if (oSNotificationGenerationJob.isRestoring() || !oSNotificationGenerationJob.getJsonPayload().has("collapse_key") || "do_not_collapse".equals(oSNotificationGenerationJob.getJsonPayload().optString("collapse_key"))) {
            return;
        }
        Cursor cursorQuery = OneSignalDbHelper.getInstance(oSNotificationGenerationJob.getContext()).query(OneSignalDbContract.NotificationTable.TABLE_NAME, new String[]{OneSignalDbContract.NotificationTable.COLUMN_NAME_ANDROID_NOTIFICATION_ID}, "collapse_id = ? AND dismissed = 0 AND opened = 0 ", new String[]{oSNotificationGenerationJob.getJsonPayload().optString("collapse_key")}, null, null, null);
        if (cursorQuery.moveToFirst()) {
            oSNotificationGenerationJob.getNotification().setAndroidNotificationId(cursorQuery.getInt(cursorQuery.getColumnIndex(OneSignalDbContract.NotificationTable.COLUMN_NAME_ANDROID_NOTIFICATION_ID)));
        }
        cursorQuery.close();
    }

    static void processBundleFromReceiver(Context context, Bundle bundle, final ProcessBundleReceiverCallback processBundleReceiverCallback) {
        final ProcessedBundleResult processedBundleResult = new ProcessedBundleResult();
        if (!OSNotificationFormatHelper.isOneSignalBundle(bundle)) {
            processBundleReceiverCallback.onBundleProcessed(processedBundleResult);
            return;
        }
        processedBundleResult.setOneSignalPayload(true);
        maximizeButtonsFromBundle(bundle);
        if (OSInAppMessagePreviewHandler.notificationReceived(context, bundle)) {
            processedBundleResult.setInAppPreviewShown(true);
            processBundleReceiverCallback.onBundleProcessed(processedBundleResult);
        } else {
            startNotificationProcessing(context, bundle, processedBundleResult, new NotificationProcessingCallback() { // from class: com.onesignal.NotificationBundleProcessor.2
                @Override // com.onesignal.NotificationBundleProcessor.NotificationProcessingCallback
                public void onResult(boolean z) {
                    if (!z) {
                        processedBundleResult.setDup(true);
                    }
                    processBundleReceiverCallback.onBundleProcessed(processedBundleResult);
                }
            });
        }
    }

    private static void startNotificationProcessing(final Context context, final Bundle bundle, final ProcessedBundleResult processedBundleResult, final NotificationProcessingCallback notificationProcessingCallback) {
        final JSONObject jSONObjectBundleAsJSONObject = bundleAsJSONObject(bundle);
        final long currentTimeMillis = OneSignal.getTime().getCurrentTimeMillis() / 1000;
        final boolean z = bundle.getBoolean("is_restoring", false);
        final boolean z2 = Integer.parseInt(bundle.getString("pri", "0")) > 9;
        OneSignal.notValidOrDuplicated(context, jSONObjectBundleAsJSONObject, new OSNotificationDataController.InvalidOrDuplicateNotificationCallback() { // from class: com.onesignal.NotificationBundleProcessor.3
            @Override // com.onesignal.OSNotificationDataController.InvalidOrDuplicateNotificationCallback
            public void onResult(boolean z3) {
                if (!z && z3) {
                    OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "startNotificationProcessing returning, with context: " + context + " and bundle: " + bundle);
                    notificationProcessingCallback.onResult(false);
                    return;
                }
                OSNotificationWorkManager.beginEnqueueingWork(context, OSNotificationFormatHelper.getOSNotificationIdFromJson(jSONObjectBundleAsJSONObject), bundle.containsKey(NotificationBundleProcessor.ANDROID_NOTIFICATION_ID) ? bundle.getInt(NotificationBundleProcessor.ANDROID_NOTIFICATION_ID) : 0, jSONObjectBundleAsJSONObject.toString(), currentTimeMillis, z, z2);
                processedBundleResult.setWorkManagerProcessing(true);
                notificationProcessingCallback.onResult(true);
            }
        });
    }

    static JSONArray newJsonArray(JSONObject jSONObject) {
        return new JSONArray().put(jSONObject);
    }

    static JSONObject getCustomJSONObject(JSONObject jSONObject) throws JSONException {
        return new JSONObject(jSONObject.optString(OSNotificationFormatHelper.PAYLOAD_OS_ROOT_CUSTOM));
    }

    static boolean hasRemoteResource(Bundle bundle) {
        return isBuildKeyRemote(bundle, "licon") || isBuildKeyRemote(bundle, "bicon") || bundle.getString("bg_img", null) != null;
    }

    private static boolean isBuildKeyRemote(Bundle bundle, String str) {
        String strTrim = bundle.getString(str, "").trim();
        return strTrim.startsWith("http://") || strTrim.startsWith("https://");
    }

    static class ProcessedBundleResult {
        private boolean inAppPreviewShown;
        private boolean isDup;
        private boolean isOneSignalPayload;
        private boolean isWorkManagerProcessing;

        ProcessedBundleResult() {
        }

        boolean processed() {
            return !this.isOneSignalPayload || this.isDup || this.inAppPreviewShown || this.isWorkManagerProcessing;
        }

        void setOneSignalPayload(boolean z) {
            this.isOneSignalPayload = z;
        }

        boolean isDup() {
            return this.isDup;
        }

        void setDup(boolean z) {
            this.isDup = z;
        }

        public void setInAppPreviewShown(boolean z) {
            this.inAppPreviewShown = z;
        }

        public boolean isWorkManagerProcessing() {
            return this.isWorkManagerProcessing;
        }

        public void setWorkManagerProcessing(boolean z) {
            this.isWorkManagerProcessing = z;
        }
    }
}


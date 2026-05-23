package com.onesignal;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import com.onesignal.NotificationBundleProcessor;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
class NotificationPayloadProcessorHMS {
    NotificationPayloadProcessorHMS() {
    }

    static void handleHMSNotificationOpenIntent(Activity activity, Intent intent) {
        JSONObject jSONObjectCovertHMSOpenIntentToJson;
        OneSignal.initWithContext(activity.getApplicationContext());
        if (intent == null || (jSONObjectCovertHMSOpenIntentToJson = covertHMSOpenIntentToJson(intent)) == null) {
            return;
        }
        handleProcessJsonOpenData(activity, jSONObjectCovertHMSOpenIntentToJson);
    }

    private static JSONObject covertHMSOpenIntentToJson(Intent intent) {
        if (!OSNotificationFormatHelper.isOneSignalIntent(intent)) {
            return null;
        }
        JSONObject jSONObjectBundleAsJSONObject = NotificationBundleProcessor.bundleAsJSONObject(intent.getExtras());
        reformatButtonClickAction(jSONObjectBundleAsJSONObject);
        return jSONObjectBundleAsJSONObject;
    }

    private static void reformatButtonClickAction(JSONObject jSONObject) {
        try {
            String str = (String) NotificationBundleProcessor.getCustomJSONObject(jSONObject).remove(GenerateNotification.BUNDLE_KEY_ACTION_ID);
            if (str == null) {
                return;
            }
            jSONObject.put(GenerateNotification.BUNDLE_KEY_ACTION_ID, str);
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    private static void handleProcessJsonOpenData(Activity activity, JSONObject jSONObject) {
        if (OSInAppMessagePreviewHandler.notificationOpened(activity, jSONObject)) {
            return;
        }
        OneSignal.handleNotificationOpen(activity, new JSONArray().put(jSONObject), OSNotificationFormatHelper.getOSNotificationIdFromJson(jSONObject));
    }

    public static void processDataMessageReceived(final Context context, String str) {
        final Bundle bundleJsonStringToBundle;
        OneSignal.initWithContext(context);
        if (str == null || (bundleJsonStringToBundle = OSUtils.jsonStringToBundle(str)) == null) {
            return;
        }
        NotificationBundleProcessor.processBundleFromReceiver(context, bundleJsonStringToBundle, new NotificationBundleProcessor.ProcessBundleReceiverCallback() { // from class: com.onesignal.NotificationPayloadProcessorHMS.1
            @Override // com.onesignal.NotificationBundleProcessor.ProcessBundleReceiverCallback
            public void onBundleProcessed(NotificationBundleProcessor.ProcessedBundleResult processedBundleResult) {
                if (processedBundleResult == null || !processedBundleResult.processed()) {
                    FCMBroadcastReceiver.startFCMService(context, bundleJsonStringToBundle);
                }
            }
        });
    }
}


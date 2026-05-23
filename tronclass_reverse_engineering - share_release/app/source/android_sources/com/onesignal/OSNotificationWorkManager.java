package com.onesignal;

import android.content.Context;
import androidx.work.Data;
import androidx.work.ExistingWorkPolicy;
import androidx.work.ListenableWorker;
import androidx.work.OneTimeWorkRequest;
import androidx.work.Worker;
import androidx.work.WorkerParameters;
import com.onesignal.OneSignal;
import java.util.Set;
import org.json.JSONException;
import org.json.JSONObject;
class OSNotificationWorkManager {
    private static final String ANDROID_NOTIF_ID_WORKER_DATA_PARAM = "android_notif_id";
    private static final String IS_RESTORING_WORKER_DATA_PARAM = "is_restoring";
    private static final String JSON_PAYLOAD_WORKER_DATA_PARAM = "json_payload";
    private static final String TIMESTAMP_WORKER_DATA_PARAM = "timestamp";
    private static Set<String> notificationIds = OSUtils.newConcurrentSet();

    OSNotificationWorkManager() {
    }

    static boolean addNotificationIdProcessed(String str) {
        if (!OSUtils.isStringNotEmpty(str)) {
            return true;
        }
        if (notificationIds.contains(str)) {
            OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "OSNotificationWorkManager notification with notificationId: " + str + " already queued");
            return false;
        }
        notificationIds.add(str);
        return true;
    }

    static void removeNotificationIdProcessed(String str) {
        if (OSUtils.isStringNotEmpty(str)) {
            notificationIds.remove(str);
        }
    }

    static void beginEnqueueingWork(Context context, String str, int i, String str2, long j, boolean z, boolean z2) {
        OneTimeWorkRequest oneTimeWorkRequestBuild = new OneTimeWorkRequest.Builder(NotificationWorker.class).setInputData(new Data.Builder().putInt(ANDROID_NOTIF_ID_WORKER_DATA_PARAM, i).putString(JSON_PAYLOAD_WORKER_DATA_PARAM, str2).putLong("timestamp", j).putBoolean(IS_RESTORING_WORKER_DATA_PARAM, z).build()).build();
        OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "OSNotificationWorkManager enqueueing notification work with notificationId: " + str + " and jsonPayload: " + str2);
        OSWorkManagerHelper.getInstance(context).enqueueUniqueWork(str, ExistingWorkPolicy.KEEP, oneTimeWorkRequestBuild);
    }

    public static class NotificationWorker extends Worker {
        public NotificationWorker(Context context, WorkerParameters workerParameters) {
            super(context, workerParameters);
        }

        @Override // androidx.work.Worker
        public ListenableWorker.Result doWork() {
            Data inputData = getInputData();
            try {
                OneSignal.onesignalLog(OneSignal.LOG_LEVEL.DEBUG, "NotificationWorker running doWork with data: " + inputData);
                processNotificationData(getApplicationContext(), inputData.getInt(OSNotificationWorkManager.ANDROID_NOTIF_ID_WORKER_DATA_PARAM, 0), new JSONObject(inputData.getString(OSNotificationWorkManager.JSON_PAYLOAD_WORKER_DATA_PARAM)), inputData.getBoolean(OSNotificationWorkManager.IS_RESTORING_WORKER_DATA_PARAM, false), Long.valueOf(inputData.getLong("timestamp", System.currentTimeMillis() / 1000)));
                return ListenableWorker.Result.success();
            } catch (JSONException e) {
                OneSignal.onesignalLog(OneSignal.LOG_LEVEL.ERROR, "Error occurred doing work for job with id: " + getId().toString());
                e.printStackTrace();
                return ListenableWorker.Result.failure();
            }
        }

        private void processNotificationData(Context context, int i, JSONObject jSONObject, boolean z, Long l) {
            OSNotification oSNotification = new OSNotification(null, jSONObject, i);
            OSNotificationReceivedEvent oSNotificationReceivedEvent = new OSNotificationReceivedEvent(new OSNotificationController(context, oSNotification, jSONObject, z, true, l), oSNotification);
            if (OneSignal.remoteNotificationReceivedHandler != null) {
                try {
                    OneSignal.remoteNotificationReceivedHandler.remoteNotificationReceived(context, oSNotificationReceivedEvent);
                    return;
                } catch (Throwable th) {
                    OneSignal.Log(OneSignal.LOG_LEVEL.ERROR, "remoteNotificationReceived throw an exception. Displaying normal OneSignal notification.", th);
                    oSNotificationReceivedEvent.complete(oSNotification);
                    throw th;
                }
            }
            OneSignal.Log(OneSignal.LOG_LEVEL.WARN, "remoteNotificationReceivedHandler not setup, displaying normal OneSignal notification");
            oSNotificationReceivedEvent.complete(oSNotification);
        }
    }
}


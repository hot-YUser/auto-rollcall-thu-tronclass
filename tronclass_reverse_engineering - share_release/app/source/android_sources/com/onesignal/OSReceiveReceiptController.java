package com.onesignal;

import android.content.Context;
import androidx.work.Constraints;
import androidx.work.Data;
import androidx.work.ExistingWorkPolicy;
import androidx.work.ListenableWorker;
import androidx.work.NetworkType;
import androidx.work.OneTimeWorkRequest;
import androidx.work.Worker;
import androidx.work.WorkerParameters;
import com.onesignal.OneSignal;
import com.onesignal.OneSignalRestClient;
import java.util.concurrent.TimeUnit;
class OSReceiveReceiptController {
    private static final String OS_NOTIFICATION_ID = "os_notification_id";
    private static OSReceiveReceiptController sInstance;
    private int minDelay = 0;
    private int maxDelay = 25;
    private final OSRemoteParamController remoteParamController = OneSignal.getRemoteParamController();

    private OSReceiveReceiptController() {
    }

    public static synchronized OSReceiveReceiptController getInstance() {
        if (sInstance == null) {
            sInstance = new OSReceiveReceiptController();
        }
        return sInstance;
    }

    void beginEnqueueingWork(Context context, String str) {
        if (!this.remoteParamController.isReceiveReceiptEnabled()) {
            OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "sendReceiveReceipt disabled");
            return;
        }
        int randomDelay = OSUtils.getRandomDelay(this.minDelay, this.maxDelay);
        OneTimeWorkRequest oneTimeWorkRequestBuild = new OneTimeWorkRequest.Builder(ReceiveReceiptWorker.class).setConstraints(buildConstraints()).setInitialDelay(randomDelay, TimeUnit.SECONDS).setInputData(new Data.Builder().putString(OS_NOTIFICATION_ID, str).build()).build();
        OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "OSReceiveReceiptController enqueueing send receive receipt work with notificationId: " + str + " and delay: " + randomDelay + " seconds");
        OSWorkManagerHelper.getInstance(context).enqueueUniqueWork(str + "_receive_receipt", ExistingWorkPolicy.KEEP, oneTimeWorkRequestBuild);
    }

    Constraints buildConstraints() {
        return new Constraints.Builder().setRequiredNetworkType(NetworkType.CONNECTED).build();
    }

    public static class ReceiveReceiptWorker extends Worker {
        public ReceiveReceiptWorker(Context context, WorkerParameters workerParameters) {
            super(context, workerParameters);
        }

        @Override // androidx.work.Worker
        public ListenableWorker.Result doWork() {
            sendReceiveReceipt(getInputData().getString(OSReceiveReceiptController.OS_NOTIFICATION_ID));
            return ListenableWorker.Result.success();
        }

        void sendReceiveReceipt(final String str) {
            Integer numValueOf;
            String savedAppId = (OneSignal.appId == null || OneSignal.appId.isEmpty()) ? OneSignal.getSavedAppId() : OneSignal.appId;
            String userId = OneSignal.getUserId();
            OSReceiveReceiptRepository oSReceiveReceiptRepository = new OSReceiveReceiptRepository();
            try {
                numValueOf = Integer.valueOf(new OSUtils().getDeviceType());
            } catch (NullPointerException e) {
                e.printStackTrace();
                numValueOf = null;
            }
            Integer num = numValueOf;
            OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "ReceiveReceiptWorker: Device Type is: " + num);
            oSReceiveReceiptRepository.sendReceiveReceipt(savedAppId, userId, num, str, new OneSignalRestClient.ResponseHandler() { // from class: com.onesignal.OSReceiveReceiptController.ReceiveReceiptWorker.1
                @Override // com.onesignal.OneSignalRestClient.ResponseHandler
                void onSuccess(String str2) {
                    OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "Receive receipt sent for notificationID: " + str);
                }

                @Override // com.onesignal.OneSignalRestClient.ResponseHandler
                void onFailure(int i, String str2, Throwable th) {
                    OneSignal.Log(OneSignal.LOG_LEVEL.ERROR, "Receive receipt failed with statusCode: " + i + " response: " + str2);
                }
            });
        }
    }
}


package com.onesignal;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.os.IBinder;
import com.onesignal.NotificationBundleProcessor;
public class FCMIntentJobService extends JobIntentService {
    public static final String BUNDLE_EXTRA = "Bundle:Parcelable:Extras";
    private static final int JOB_ID = 123890;

    @Override // com.onesignal.JobIntentService
    public /* bridge */ /* synthetic */ boolean isStopped() {
        return super.isStopped();
    }

    @Override // com.onesignal.JobIntentService, android.app.Service
    public /* bridge */ /* synthetic */ IBinder onBind(Intent intent) {
        return super.onBind(intent);
    }

    @Override // com.onesignal.JobIntentService, android.app.Service
    public /* bridge */ /* synthetic */ void onCreate() {
        super.onCreate();
    }

    @Override // com.onesignal.JobIntentService, android.app.Service
    public /* bridge */ /* synthetic */ void onDestroy() {
        super.onDestroy();
    }

    @Override // com.onesignal.JobIntentService, android.app.Service
    public /* bridge */ /* synthetic */ int onStartCommand(Intent intent, int i, int i2) {
        return super.onStartCommand(intent, i, i2);
    }

    @Override // com.onesignal.JobIntentService
    public /* bridge */ /* synthetic */ boolean onStopCurrentWork() {
        return super.onStopCurrentWork();
    }

    @Override // com.onesignal.JobIntentService
    public /* bridge */ /* synthetic */ void setInterruptIfStopped(boolean z) {
        super.setInterruptIfStopped(z);
    }

    @Override // com.onesignal.JobIntentService
    protected void onHandleWork(Intent intent) {
        Bundle extras = intent.getExtras();
        if (extras == null) {
            return;
        }
        OneSignal.initWithContext(this);
        NotificationBundleProcessor.processBundleFromReceiver(this, extras, new NotificationBundleProcessor.ProcessBundleReceiverCallback() { // from class: com.onesignal.FCMIntentJobService.1
            @Override // com.onesignal.NotificationBundleProcessor.ProcessBundleReceiverCallback
            public void onBundleProcessed(NotificationBundleProcessor.ProcessedBundleResult processedBundleResult) {
            }
        });
    }

    public static void enqueueWork(Context context, Intent intent) {
        enqueueWork(context, FCMIntentJobService.class, JOB_ID, intent, false);
    }
}


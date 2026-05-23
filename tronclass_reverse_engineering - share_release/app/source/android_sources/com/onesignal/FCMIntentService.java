package com.onesignal;

import android.app.IntentService;
import android.content.Intent;
import android.os.Bundle;
import com.onesignal.NotificationBundleProcessor;
public class FCMIntentService extends IntentService {
    public FCMIntentService() {
        super("FCMIntentService");
        setIntentRedelivery(true);
    }

    @Override // android.app.IntentService
    protected void onHandleIntent(final Intent intent) {
        Bundle extras = intent.getExtras();
        if (extras == null) {
            return;
        }
        OneSignal.initWithContext(this);
        NotificationBundleProcessor.processBundleFromReceiver(this, extras, new NotificationBundleProcessor.ProcessBundleReceiverCallback() { // from class: com.onesignal.FCMIntentService.1
            @Override // com.onesignal.NotificationBundleProcessor.ProcessBundleReceiverCallback
            public void onBundleProcessed(NotificationBundleProcessor.ProcessedBundleResult processedBundleResult) {
                FCMBroadcastReceiver.completeWakefulIntent(intent);
            }
        });
    }
}


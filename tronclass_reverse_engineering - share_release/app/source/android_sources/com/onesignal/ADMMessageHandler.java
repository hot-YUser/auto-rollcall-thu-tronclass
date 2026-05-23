package com.onesignal;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import com.amazon.device.messaging.ADMMessageHandlerBase;
import com.amazon.device.messaging.ADMMessageReceiver;
import com.onesignal.NotificationBundleProcessor;
import com.onesignal.OneSignal;
import org.json.JSONObject;
public class ADMMessageHandler extends ADMMessageHandlerBase {
    private static final int JOB_ID = 123891;

    public static class Receiver extends ADMMessageReceiver {
        public Receiver() {
            boolean z;
            super(ADMMessageHandler.class);
            try {
                Class.forName("com.amazon.device.messaging.ADMMessageHandlerJobBase");
                z = true;
            } catch (ClassNotFoundException unused) {
                z = false;
            }
            if (z) {
                registerJobServiceClass(ADMMessageHandlerJob.class, ADMMessageHandler.JOB_ID);
            }
            OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "ADM latest available: " + z);
        }
    }

    public ADMMessageHandler() {
        super("ADMMessageHandler");
    }

    protected void onMessage(Intent intent) {
        final Context applicationContext = getApplicationContext();
        final Bundle extras = intent.getExtras();
        NotificationBundleProcessor.processBundleFromReceiver(applicationContext, extras, new NotificationBundleProcessor.ProcessBundleReceiverCallback() { // from class: com.onesignal.ADMMessageHandler.1
            @Override // com.onesignal.NotificationBundleProcessor.ProcessBundleReceiverCallback
            public void onBundleProcessed(NotificationBundleProcessor.ProcessedBundleResult processedBundleResult) {
                if (processedBundleResult.processed()) {
                    return;
                }
                JSONObject jSONObjectBundleAsJSONObject = NotificationBundleProcessor.bundleAsJSONObject(extras);
                OSNotification oSNotification = new OSNotification(jSONObjectBundleAsJSONObject);
                OSNotificationGenerationJob oSNotificationGenerationJob = new OSNotificationGenerationJob(applicationContext);
                oSNotificationGenerationJob.setJsonPayload(jSONObjectBundleAsJSONObject);
                oSNotificationGenerationJob.setContext(applicationContext);
                oSNotificationGenerationJob.setNotification(oSNotification);
                NotificationBundleProcessor.processJobForDisplay(oSNotificationGenerationJob, true);
            }
        });
    }

    protected void onRegistered(String str) {
        OneSignal.Log(OneSignal.LOG_LEVEL.INFO, "ADM registration ID: " + str);
        PushRegistratorADM.fireCallback(str);
    }

    protected void onRegistrationError(String str) {
        OneSignal.Log(OneSignal.LOG_LEVEL.ERROR, "ADM:onRegistrationError: " + str);
        if ("INVALID_SENDER".equals(str)) {
            OneSignal.Log(OneSignal.LOG_LEVEL.ERROR, "Please double check that you have a matching package name (NOTE: Case Sensitive), api_key.txt, and the apk was signed with the same Keystore and Alias.");
        }
        PushRegistratorADM.fireCallback(null);
    }

    protected void onUnregistered(String str) {
        OneSignal.Log(OneSignal.LOG_LEVEL.INFO, "ADM:onUnregistered: " + str);
    }
}


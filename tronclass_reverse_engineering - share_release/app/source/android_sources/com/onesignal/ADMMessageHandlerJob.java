package com.onesignal;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import com.amazon.device.messaging.ADMMessageHandlerJobBase;
import com.onesignal.NotificationBundleProcessor;
import com.onesignal.OneSignal;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.json.JSONObject;
@Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0005\u0018\u00002\u00020\u0001B\u0005¢\u0006\u0002\u0010\u0002J\u001c\u0010\u0003\u001a\u00020\u00042\b\u0010\u0005\u001a\u0004\u0018\u00010\u00062\b\u0010\u0007\u001a\u0004\u0018\u00010\bH\u0014J\u001c\u0010\t\u001a\u00020\u00042\b\u0010\u0005\u001a\u0004\u0018\u00010\u00062\b\u0010\n\u001a\u0004\u0018\u00010\u000bH\u0014J\u001c\u0010\f\u001a\u00020\u00042\b\u0010\u0005\u001a\u0004\u0018\u00010\u00062\b\u0010\r\u001a\u0004\u0018\u00010\u000bH\u0014J\u001c\u0010\u000e\u001a\u00020\u00042\b\u0010\u0005\u001a\u0004\u0018\u00010\u00062\b\u0010\u000f\u001a\u0004\u0018\u00010\u000bH\u0014¨\u0006\u0010"}, d2 = {"Lcom/onesignal/ADMMessageHandlerJob;", "Lcom/amazon/device/messaging/ADMMessageHandlerJobBase;", "()V", "onMessage", "", "context", "Landroid/content/Context;", "intent", "Landroid/content/Intent;", "onRegistered", "newRegistrationId", "", "onRegistrationError", "error", "onUnregistered", "registrationId", "onesignal_release"}, k = 1, mv = {1, 5, 1}, xi = 48)
public final class ADMMessageHandlerJob extends ADMMessageHandlerJobBase {
    protected void onMessage(final Context context, Intent intent) {
        final Bundle extras = intent == null ? null : intent.getExtras();
        NotificationBundleProcessor.processBundleFromReceiver(context, extras, new NotificationBundleProcessor.ProcessBundleReceiverCallback() { // from class: com.onesignal.ADMMessageHandlerJob$onMessage$bundleReceiverCallback$1
            @Override // com.onesignal.NotificationBundleProcessor.ProcessBundleReceiverCallback
            public void onBundleProcessed(NotificationBundleProcessor.ProcessedBundleResult processedResult) {
                if (processedResult != null && processedResult.processed()) {
                    return;
                }
                JSONObject jSONObjectBundleAsJSONObject = NotificationBundleProcessor.bundleAsJSONObject(extras);
                Intrinsics.checkNotNullExpressionValue(jSONObjectBundleAsJSONObject, "bundleAsJSONObject(bundle)");
                OSNotification oSNotification = new OSNotification(jSONObjectBundleAsJSONObject);
                OSNotificationGenerationJob oSNotificationGenerationJob = new OSNotificationGenerationJob(context);
                Context context2 = context;
                oSNotificationGenerationJob.setJsonPayload(jSONObjectBundleAsJSONObject);
                oSNotificationGenerationJob.setContext(context2);
                oSNotificationGenerationJob.setNotification(oSNotification);
                NotificationBundleProcessor.processJobForDisplay(oSNotificationGenerationJob, true);
            }
        });
    }

    protected void onRegistered(Context context, String newRegistrationId) {
        OneSignal.Log(OneSignal.LOG_LEVEL.INFO, Intrinsics.stringPlus("ADM registration ID: ", newRegistrationId));
        PushRegistratorADM.fireCallback(newRegistrationId);
    }

    protected void onUnregistered(Context context, String registrationId) {
        OneSignal.Log(OneSignal.LOG_LEVEL.INFO, Intrinsics.stringPlus("ADM:onUnregistered: ", registrationId));
    }

    protected void onRegistrationError(Context context, String error) {
        OneSignal.Log(OneSignal.LOG_LEVEL.ERROR, Intrinsics.stringPlus("ADM:onRegistrationError: ", error));
        if (Intrinsics.areEqual("INVALID_SENDER", error)) {
            OneSignal.Log(OneSignal.LOG_LEVEL.ERROR, "Please double check that you have a matching package name (NOTE: Case Sensitive), api_key.txt, and the apk was signed with the same Keystore and Alias.");
        }
        PushRegistratorADM.fireCallback(null);
    }
}


package com.onesignal;

import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.os.Parcelable;
import androidx.legacy.content.WakefulBroadcastReceiver;
import com.onesignal.NotificationBundleProcessor;
import com.onesignal.OneSignal;
public class FCMBroadcastReceiver extends WakefulBroadcastReceiver {
    private static final String FCM_RECEIVE_ACTION = "com.google.android.c2dm.intent.RECEIVE";
    private static final String FCM_TYPE = "gcm";
    private static final String MESSAGE_TYPE_EXTRA_KEY = "message_type";

    private static boolean isFCMMessage(Intent intent) {
        if (!FCM_RECEIVE_ACTION.equals(intent.getAction())) {
            return false;
        }
        String stringExtra = intent.getStringExtra(MESSAGE_TYPE_EXTRA_KEY);
        return stringExtra == null || FCM_TYPE.equals(stringExtra);
    }

    @Override // android.content.BroadcastReceiver
    public void onReceive(Context context, Intent intent) {
        Bundle extras = intent.getExtras();
        if (extras == null || "google.com/iid".equals(extras.getString("from"))) {
            return;
        }
        OneSignal.initWithContext(context);
        processOrderBroadcast(context, intent, extras, new NotificationBundleProcessor.ProcessBundleReceiverCallback() { // from class: com.onesignal.FCMBroadcastReceiver.1
            @Override // com.onesignal.NotificationBundleProcessor.ProcessBundleReceiverCallback
            public void onBundleProcessed(NotificationBundleProcessor.ProcessedBundleResult processedBundleResult) {
                if (processedBundleResult == null) {
                    FCMBroadcastReceiver.this.setSuccessfulResultCode();
                } else if (processedBundleResult.isDup() || processedBundleResult.isWorkManagerProcessing()) {
                    FCMBroadcastReceiver.this.setAbort();
                } else {
                    FCMBroadcastReceiver.this.setSuccessfulResultCode();
                }
            }
        });
    }
    public void setSuccessfulResultCode() {
        if (isOrderedBroadcast()) {
            setResultCode(-1);
        }
    }
    public void setAbort() {
        if (isOrderedBroadcast()) {
            abortBroadcast();
            setResultCode(-1);
        }
    }

    private static void processOrderBroadcast(final Context context, Intent intent, final Bundle bundle, final NotificationBundleProcessor.ProcessBundleReceiverCallback processBundleReceiverCallback) {
        if (!isFCMMessage(intent)) {
            processBundleReceiverCallback.onBundleProcessed(null);
        }
        NotificationBundleProcessor.processBundleFromReceiver(context, bundle, new NotificationBundleProcessor.ProcessBundleReceiverCallback() { // from class: com.onesignal.FCMBroadcastReceiver.2
            @Override // com.onesignal.NotificationBundleProcessor.ProcessBundleReceiverCallback
            public void onBundleProcessed(NotificationBundleProcessor.ProcessedBundleResult processedBundleResult) {
                if (processedBundleResult != null && processedBundleResult.processed()) {
                    processBundleReceiverCallback.onBundleProcessed(processedBundleResult);
                } else {
                    FCMBroadcastReceiver.startFCMService(context, bundle);
                    processBundleReceiverCallback.onBundleProcessed(processedBundleResult);
                }
            }
        });
    }

    static void startFCMService(Context context, Bundle bundle) {
        OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "startFCMService from: " + context + " and bundle: " + bundle);
        if (!NotificationBundleProcessor.hasRemoteResource(bundle)) {
            OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "startFCMService with no remote resources, no need for services");
            NotificationBundleProcessor.processFromFCMIntentService(context, setCompatBundleForServer(bundle, BundleCompatFactory.getInstance()));
        } else {
            if (Integer.parseInt(bundle.getString("pri", "0")) <= 9 && Build.VERSION.SDK_INT >= 26) {
                startFCMServiceWithJobIntentService(context, bundle);
                return;
            }
            try {
                startFCMServiceWithWakefulService(context, bundle);
            } catch (IllegalStateException unused) {
                startFCMServiceWithJobIntentService(context, bundle);
            }
        }
    }

    private static void startFCMServiceWithJobIntentService(Context context, Bundle bundle) {
        BundleCompat compatBundleForServer = setCompatBundleForServer(bundle, BundleCompatFactory.getInstance());
        Intent intent = new Intent(context, (Class<?>) FCMIntentJobService.class);
        intent.putExtra(FCMIntentJobService.BUNDLE_EXTRA, (Parcelable) compatBundleForServer.getBundle());
        FCMIntentJobService.enqueueWork(context, intent);
    }

    private static void startFCMServiceWithWakefulService(Context context, Bundle bundle) {
        startWakefulService(context, new Intent().replaceExtras((Bundle) setCompatBundleForServer(bundle, new BundleCompatBundle()).getBundle()).setComponent(new ComponentName(context.getPackageName(), FCMIntentService.class.getName())));
    }

    private static BundleCompat setCompatBundleForServer(Bundle bundle, BundleCompat bundleCompat) {
        bundleCompat.putString("json_payload", NotificationBundleProcessor.bundleAsJSONObject(bundle).toString());
        bundleCompat.putLong("timestamp", Long.valueOf(OneSignal.getTime().getCurrentTimeMillis() / 1000));
        return bundleCompat;
    }
}


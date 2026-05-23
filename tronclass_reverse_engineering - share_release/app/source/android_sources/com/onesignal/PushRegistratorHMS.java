package com.onesignal;

import android.content.Context;
import android.text.TextUtils;
import androidx.work.WorkRequest;
import com.huawei.agconnect.config.AGConnectServicesConfig;
import com.huawei.hms.aaid.HmsInstanceId;
import com.huawei.hms.common.ApiException;
import com.onesignal.OneSignal;
import com.onesignal.PushRegistrator;
class PushRegistratorHMS implements PushRegistrator {
    static final String HMS_CLIENT_APP_ID = "client/app_id";
    private static final int NEW_TOKEN_TIMEOUT_MS = 30000;
    private static boolean callbackSuccessful;
    private static PushRegistrator.RegisteredHandler registeredHandler;

    PushRegistratorHMS() {
    }

    static void fireCallback(String str) {
        PushRegistrator.RegisteredHandler registeredHandler2 = registeredHandler;
        if (registeredHandler2 == null) {
            return;
        }
        callbackSuccessful = true;
        registeredHandler2.complete(str, 1);
    }

    @Override // com.onesignal.PushRegistrator
    public void registerForPush(final Context context, String str, final PushRegistrator.RegisteredHandler registeredHandler2) {
        registeredHandler = registeredHandler2;
        new Thread(new Runnable() { // from class: com.onesignal.PushRegistratorHMS.1
            @Override // java.lang.Runnable
            public void run() {
                try {
                    PushRegistratorHMS.this.getHMSTokenTask(context, registeredHandler2);
                } catch (ApiException e) {
                    OneSignal.Log(OneSignal.LOG_LEVEL.ERROR, "HMS ApiException getting Huawei push token!", e);
                    registeredHandler2.complete(null, e.getStatusCode() == 907135000 ? -26 : -27);
                }
            }
        }, "OS_HMS_GET_TOKEN").start();
    }
    public synchronized void getHMSTokenTask(Context context, PushRegistrator.RegisteredHandler registeredHandler2) throws ApiException {
        if (!OSUtils.hasAllHMSLibrariesForPushKit()) {
            registeredHandler2.complete(null, -28);
            return;
        }
        String token = HmsInstanceId.getInstance(context).getToken(AGConnectServicesConfig.fromContext(context).getString(HMS_CLIENT_APP_ID), "HCM");
        if (!TextUtils.isEmpty(token)) {
            OneSignal.Log(OneSignal.LOG_LEVEL.INFO, "Device registered for HMS, push token = " + token);
            registeredHandler2.complete(token, 1);
        } else {
            waitForOnNewPushTokenEvent(registeredHandler2);
        }
    }

    private static void doTimeOutWait() {
        try {
            Thread.sleep(WorkRequest.DEFAULT_BACKOFF_DELAY_MILLIS);
        } catch (InterruptedException unused) {
        }
    }

    private void waitForOnNewPushTokenEvent(PushRegistrator.RegisteredHandler registeredHandler2) {
        doTimeOutWait();
        if (callbackSuccessful) {
            return;
        }
        OneSignal.Log(OneSignal.LOG_LEVEL.ERROR, "HmsMessageServiceOneSignal.onNewToken timed out.");
        registeredHandler2.complete(null, -25);
    }
}


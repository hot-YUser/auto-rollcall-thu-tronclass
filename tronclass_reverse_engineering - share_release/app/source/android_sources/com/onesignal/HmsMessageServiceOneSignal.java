package com.onesignal;

import android.os.Bundle;
import com.huawei.hms.push.HmsMessageService;
import com.huawei.hms.push.RemoteMessage;
import com.onesignal.OneSignal;
public class HmsMessageServiceOneSignal extends HmsMessageService {
    /* high-level source view WARN: Multi-variable type inference failed */
    public void onNewToken(String str, Bundle bundle) {
        OneSignal.onesignalLog(OneSignal.LOG_LEVEL.DEBUG, "HmsMessageServiceOneSignal onNewToken refresh token:" + str);
        OneSignalHmsEventBridge.onNewToken(this, str, bundle);
    }

    /* high-level source view WARN: Multi-variable type inference failed */
    @Deprecated
    public void onNewToken(String str) {
        OneSignal.onesignalLog(OneSignal.LOG_LEVEL.DEBUG, "HmsMessageServiceOneSignal onNewToken refresh token:" + str);
        OneSignalHmsEventBridge.onNewToken(this, str);
    }

    /* high-level source view WARN: Multi-variable type inference failed */
    public void onMessageReceived(RemoteMessage remoteMessage) {
        OneSignalHmsEventBridge.onMessageReceived(this, remoteMessage);
    }
}


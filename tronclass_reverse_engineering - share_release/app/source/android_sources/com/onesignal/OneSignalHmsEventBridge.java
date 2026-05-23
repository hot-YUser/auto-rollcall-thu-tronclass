package com.onesignal;

import android.content.Context;
import android.os.Bundle;
import com.huawei.hms.push.RemoteMessage;
import com.onesignal.OneSignal;
import java.util.concurrent.atomic.AtomicBoolean;
import org.json.JSONException;
import org.json.JSONObject;
public class OneSignalHmsEventBridge {
    public static final String HMS_SENT_TIME_KEY = "hms.sent_time";
    public static final String HMS_TTL_KEY = "hms.ttl";
    private static final AtomicBoolean firstToken = new AtomicBoolean(true);

    public static void onNewToken(Context context, String str, Bundle bundle) {
        if (firstToken.compareAndSet(true, false)) {
            OneSignal.Log(OneSignal.LOG_LEVEL.INFO, "OneSignalHmsEventBridge onNewToken - HMS token: " + str + " Bundle: " + bundle);
            PushRegistratorHMS.fireCallback(str);
        } else {
            OneSignal.Log(OneSignal.LOG_LEVEL.INFO, "OneSignalHmsEventBridge ignoring onNewToken - HMS token: " + str + " Bundle: " + bundle);
        }
    }

    @Deprecated
    public static void onNewToken(Context context, String str) {
        onNewToken(context, str, null);
    }

    public static void onMessageReceived(Context context, RemoteMessage remoteMessage) {
        String data = remoteMessage.getData();
        try {
            JSONObject jSONObject = new JSONObject(remoteMessage.getData());
            if (remoteMessage.getTtl() == 0) {
                jSONObject.put(HMS_TTL_KEY, 259200);
            } else {
                jSONObject.put(HMS_TTL_KEY, remoteMessage.getTtl());
            }
            if (remoteMessage.getSentTime() == 0) {
                jSONObject.put(HMS_SENT_TIME_KEY, OneSignal.getTime().getCurrentTimeMillis());
            } else {
                jSONObject.put(HMS_SENT_TIME_KEY, remoteMessage.getSentTime());
            }
            data = jSONObject.toString();
        } catch (JSONException unused) {
            OneSignal.Log(OneSignal.LOG_LEVEL.ERROR, "OneSignalHmsEventBridge error when trying to create RemoteMessage data JSON");
        }
        NotificationPayloadProcessorHMS.processDataMessageReceived(context, data);
    }
}


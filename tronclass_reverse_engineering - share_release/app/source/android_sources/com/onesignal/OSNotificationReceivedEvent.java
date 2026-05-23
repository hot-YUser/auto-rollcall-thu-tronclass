package com.onesignal;

import com.onesignal.OneSignal;
import com.onesignal.OneSignalDbContract;
import org.json.JSONException;
import org.json.JSONObject;
public class OSNotificationReceivedEvent {
    private static final long PROCESS_NOTIFICATION_TIMEOUT = 25000;
    private final OSNotificationController controller;
    private boolean isComplete = false;
    private final OSNotification notification;
    private final OSTimeoutHandler timeoutHandler;
    private final Runnable timeoutRunnable;

    OSNotificationReceivedEvent(OSNotificationController oSNotificationController, OSNotification oSNotification) {
        this.notification = oSNotification;
        this.controller = oSNotificationController;
        OSTimeoutHandler timeoutHandler = OSTimeoutHandler.getTimeoutHandler();
        this.timeoutHandler = timeoutHandler;
        Runnable runnable = new Runnable() { // from class: com.onesignal.OSNotificationReceivedEvent.1
            @Override // java.lang.Runnable
            public void run() {
                OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "Running complete from OSNotificationReceivedEvent timeout runnable!");
                OSNotificationReceivedEvent oSNotificationReceivedEvent = OSNotificationReceivedEvent.this;
                oSNotificationReceivedEvent.complete(oSNotificationReceivedEvent.getNotification());
            }
        };
        this.timeoutRunnable = runnable;
        timeoutHandler.startTimeout(PROCESS_NOTIFICATION_TIMEOUT, runnable);
    }

    public synchronized void complete(final OSNotification oSNotification) {
        this.timeoutHandler.destroyTimeout(this.timeoutRunnable);
        if (this.isComplete) {
            OneSignal.onesignalLog(OneSignal.LOG_LEVEL.DEBUG, "OSNotificationReceivedEvent already completed");
            return;
        }
        this.isComplete = true;
        if (isRunningOnMainThread()) {
            new Thread(new Runnable() { // from class: com.onesignal.OSNotificationReceivedEvent.2
                @Override // java.lang.Runnable
                public void run() {
                    OSNotificationReceivedEvent.this.processNotification(oSNotification);
                }
            }, "OS_COMPLETE_NOTIFICATION").start();
        } else {
            processNotification(oSNotification);
        }
    }
    public void processNotification(OSNotification oSNotification) {
        this.controller.processNotification(this.notification.copy(), oSNotification != null ? oSNotification.copy() : null);
    }

    public OSNotification getNotification() {
        return this.notification;
    }

    public JSONObject toJSONObject() {
        JSONObject jSONObject = new JSONObject();
        try {
            jSONObject.put(OneSignalDbContract.NotificationTable.TABLE_NAME, this.notification.toJSONObject());
            jSONObject.put("isComplete", this.isComplete);
        } catch (JSONException e) {
            e.printStackTrace();
        }
        return jSONObject;
    }

    public String toString() {
        return "OSNotificationReceivedEvent{isComplete=" + this.isComplete + ", notification=" + this.notification + '}';
    }

    static boolean isRunningOnMainThread() {
        return OSUtils.isRunningOnMainThread();
    }
}


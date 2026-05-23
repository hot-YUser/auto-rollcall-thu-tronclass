package com.onesignal;

import com.onesignal.OneSignal;
import com.onesignal.OneSignalDbContract;
import org.json.JSONException;
import org.json.JSONObject;
public class OSNotificationOpenedResult implements OneSignal.EntryStateListener {
    private static final long PROCESS_NOTIFICATION_TIMEOUT = 5000;
    private OSNotificationAction action;
    private boolean isComplete = false;
    private OSNotification notification;
    private final OSTimeoutHandler timeoutHandler;
    private final Runnable timeoutRunnable;

    public OSNotificationOpenedResult(OSNotification oSNotification, OSNotificationAction oSNotificationAction) {
        this.notification = oSNotification;
        this.action = oSNotificationAction;
        OSTimeoutHandler timeoutHandler = OSTimeoutHandler.getTimeoutHandler();
        this.timeoutHandler = timeoutHandler;
        Runnable runnable = new Runnable() { // from class: com.onesignal.OSNotificationOpenedResult.1
            @Override // java.lang.Runnable
            public void run() {
                OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "Running complete from OSNotificationOpenedResult timeout runnable!");
                OSNotificationOpenedResult.this.complete(false);
            }
        };
        this.timeoutRunnable = runnable;
        timeoutHandler.startTimeout(PROCESS_NOTIFICATION_TIMEOUT, runnable);
    }
    public void complete(boolean z) {
        OneSignal.onesignalLog(OneSignal.LOG_LEVEL.DEBUG, "OSNotificationOpenedResult complete called with opened: " + z);
        this.timeoutHandler.destroyTimeout(this.timeoutRunnable);
        if (this.isComplete) {
            OneSignal.onesignalLog(OneSignal.LOG_LEVEL.DEBUG, "OSNotificationOpenedResult already completed");
            return;
        }
        this.isComplete = true;
        if (z) {
            OneSignal.applicationOpenedByNotification(this.notification.getNotificationId());
        }
        OneSignal.removeEntryStateListener(this);
    }

    @Override // com.onesignal.OneSignal.EntryStateListener
    public void onEntryStateChange(OneSignal.AppEntryAction appEntryAction) {
        OneSignal.onesignalLog(OneSignal.LOG_LEVEL.DEBUG, "OSNotificationOpenedResult onEntryStateChange called with appEntryState: " + appEntryAction);
        complete(OneSignal.AppEntryAction.APP_CLOSE.equals(appEntryAction));
    }

    @Deprecated
    public String stringify() {
        JSONObject jSONObject = new JSONObject();
        try {
            jSONObject.put("action", this.action.toJSONObject());
            jSONObject.put(OneSignalDbContract.NotificationTable.TABLE_NAME, this.notification.toJSONObject());
        } catch (JSONException e) {
            e.printStackTrace();
        }
        return jSONObject.toString();
    }

    public JSONObject toJSONObject() {
        JSONObject jSONObject = new JSONObject();
        try {
            jSONObject.put("action", this.action.toJSONObject());
            jSONObject.put(OneSignalDbContract.NotificationTable.TABLE_NAME, this.notification.toJSONObject());
        } catch (JSONException e) {
            e.printStackTrace();
        }
        return jSONObject;
    }

    public OSNotification getNotification() {
        return this.notification;
    }

    public OSNotificationAction getAction() {
        return this.action;
    }

    public String toString() {
        return "OSNotificationOpenedResult{notification=" + this.notification + ", action=" + this.action + ", isComplete=" + this.isComplete + '}';
    }
}


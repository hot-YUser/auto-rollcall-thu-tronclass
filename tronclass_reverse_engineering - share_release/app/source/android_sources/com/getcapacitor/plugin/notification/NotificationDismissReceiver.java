package com.getcapacitor.plugin.notification;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import com.getcapacitor.Logger;
public class NotificationDismissReceiver extends BroadcastReceiver {
    @Override // android.content.BroadcastReceiver
    public void onReceive(Context context, Intent intent) {
        int intExtra = intent.getIntExtra(LocalNotificationManager.NOTIFICATION_INTENT_KEY, Integer.MIN_VALUE);
        if (intExtra == Integer.MIN_VALUE) {
            Logger.error(Logger.tags("LN"), "Invalid notification dismiss operation", null);
        } else if (intent.getBooleanExtra(LocalNotificationManager.NOTIFICATION_IS_REMOVABLE_KEY, true)) {
            new NotificationStorage(context).deleteNotification(Integer.toString(intExtra));
        }
    }
}


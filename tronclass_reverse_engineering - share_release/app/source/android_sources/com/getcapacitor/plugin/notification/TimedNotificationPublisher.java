package com.getcapacitor.plugin.notification;

import android.app.AlarmManager;
import android.app.Notification;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import androidx.core.app.NotificationCompat;
import com.getcapacitor.Logger;
import com.onesignal.OneSignalDbContract;
import java.text.SimpleDateFormat;
import java.util.Date;
public class TimedNotificationPublisher extends BroadcastReceiver {
    public static String CRON_KEY = "NotificationPublisher.cron";
    public static String NOTIFICATION_KEY = "NotificationPublisher.notification";

    @Override // android.content.BroadcastReceiver
    public void onReceive(Context context, Intent intent) {
        NotificationManager notificationManager = (NotificationManager) context.getSystemService(OneSignalDbContract.NotificationTable.TABLE_NAME);
        Notification notification = (Notification) intent.getParcelableExtra(NOTIFICATION_KEY);
        int intExtra = intent.getIntExtra(LocalNotificationManager.NOTIFICATION_INTENT_KEY, Integer.MIN_VALUE);
        if (intExtra == Integer.MIN_VALUE) {
            Logger.error(Logger.tags("LN"), "No valid id supplied", null);
        }
        notificationManager.notify(intExtra, notification);
        rescheduleNotificationIfNeeded(context, intent, intExtra);
    }

    private void rescheduleNotificationIfNeeded(Context context, Intent intent, int i) {
        String stringExtra = intent.getStringExtra(CRON_KEY);
        if (stringExtra != null) {
            DateMatch dateMatchFromMatchString = DateMatch.fromMatchString(stringExtra);
            AlarmManager alarmManager = (AlarmManager) context.getSystemService(NotificationCompat.CATEGORY_ALARM);
            long jNextTrigger = dateMatchFromMatchString.nextTrigger(new Date());
            alarmManager.setExact(1, jNextTrigger, PendingIntent.getBroadcast(context, i, (Intent) intent.clone(), 268435456));
            Logger.debug(Logger.tags("LN"), "notification " + i + " will next fire at " + new SimpleDateFormat("yyyy/MM/dd HH:mm:ss").format(new Date(jNextTrigger)));
        }
    }
}


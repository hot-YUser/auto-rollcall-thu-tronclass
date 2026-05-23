package com.onesignal;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.content.Context;
import android.database.Cursor;
import android.os.Build;
import android.service.notification.StatusBarNotification;
import androidx.core.app.NotificationCompat;
import androidx.core.app.NotificationManagerCompat;
import com.onesignal.OneSignalDbContract;
import java.util.ArrayList;
public class OneSignalNotificationManager {
    private static final int GROUPLESS_SUMMARY_ID = -718463522;
    private static final String GROUPLESS_SUMMARY_KEY = "os_group_undefined";

    static int getGrouplessSummaryId() {
        return GROUPLESS_SUMMARY_ID;
    }

    static String getGrouplessSummaryKey() {
        return GROUPLESS_SUMMARY_KEY;
    }

    static NotificationManager getNotificationManager(Context context) {
        return (NotificationManager) context.getSystemService(OneSignalDbContract.NotificationTable.TABLE_NAME);
    }

    static Integer getGrouplessNotifsCount(Context context) {
        int i = 0;
        for (StatusBarNotification statusBarNotification : getActiveNotifications(context)) {
            if (!NotificationCompat.isGroupSummary(statusBarNotification.getNotification()) && GROUPLESS_SUMMARY_KEY.equals(statusBarNotification.getNotification().getGroup())) {
                i++;
            }
        }
        return Integer.valueOf(i);
    }

    static StatusBarNotification[] getActiveNotifications(Context context) {
        StatusBarNotification[] statusBarNotificationArr = new StatusBarNotification[0];
        try {
            return getNotificationManager(context).getActiveNotifications();
        } catch (Throwable unused) {
            return statusBarNotificationArr;
        }
    }

    static ArrayList<StatusBarNotification> getActiveGrouplessNotifications(Context context) {
        ArrayList<StatusBarNotification> arrayList = new ArrayList<>();
        for (StatusBarNotification statusBarNotification : getActiveNotifications(context)) {
            Notification notification = statusBarNotification.getNotification();
            boolean zIsGroupSummary = NotificationLimitManager.isGroupSummary(statusBarNotification);
            boolean z = notification.getGroup() == null || notification.getGroup().equals(getGrouplessSummaryKey());
            if (!zIsGroupSummary && z) {
                arrayList.add(statusBarNotification);
            }
        }
        return arrayList;
    }

    static void assignGrouplessNotifications(Context context, ArrayList<StatusBarNotification> arrayList) {
        for (StatusBarNotification statusBarNotification : arrayList) {
            NotificationManagerCompat.from(context).notify(statusBarNotification.getId(), Notification.Builder.recoverBuilder(context, statusBarNotification.getNotification()).setGroup(GROUPLESS_SUMMARY_KEY).setOnlyAlertOnce(true).build());
        }
    }

    static Integer getMostRecentNotifIdFromGroup(OneSignalDbHelper oneSignalDbHelper, String str, boolean z) {
        String str2;
        if (z) {
            str2 = "group_id IS NULL";
        } else {
            str2 = "group_id = ?";
        }
        Cursor cursorQuery = oneSignalDbHelper.query(OneSignalDbContract.NotificationTable.TABLE_NAME, null, str2.concat(" AND dismissed = 0 AND opened = 0 AND is_summary = 0"), z ? null : new String[]{str}, null, null, "created_time DESC", "1");
        if (!cursorQuery.moveToFirst()) {
            cursorQuery.close();
            return null;
        }
        Integer numValueOf = Integer.valueOf(cursorQuery.getInt(cursorQuery.getColumnIndex(OneSignalDbContract.NotificationTable.COLUMN_NAME_ANDROID_NOTIFICATION_ID)));
        cursorQuery.close();
        return numValueOf;
    }

    public static boolean areNotificationsEnabled(Context context, String str) {
        if (!NotificationManagerCompat.from(context).areNotificationsEnabled()) {
            return false;
        }
        if (Build.VERSION.SDK_INT < 26) {
            return true;
        }
        NotificationChannel notificationChannel = getNotificationManager(context).getNotificationChannel(str);
        return notificationChannel == null || notificationChannel.getImportance() != 0;
    }
}


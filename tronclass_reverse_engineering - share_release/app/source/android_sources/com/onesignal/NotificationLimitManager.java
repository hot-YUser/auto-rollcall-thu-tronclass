package com.onesignal;

import android.content.Context;
import android.database.Cursor;
import android.service.notification.StatusBarNotification;
import com.onesignal.OneSignal;
import com.onesignal.OneSignalDbContract;
import java.util.Iterator;
import java.util.Map;
import java.util.TreeMap;
class NotificationLimitManager {
    private static final int MAX_NUMBER_OF_NOTIFICATIONS_INT = 49;
    static final String MAX_NUMBER_OF_NOTIFICATIONS_STR = Integer.toString(49);

    private static int getMaxNumberOfNotificationsInt() {
        return 49;
    }

    NotificationLimitManager() {
    }

    private static String getMaxNumberOfNotificationsString() {
        return MAX_NUMBER_OF_NOTIFICATIONS_STR;
    }

    static void clearOldestOverLimit(Context context, int i) {
        try {
            clearOldestOverLimitStandard(context, i);
        } catch (Throwable unused) {
            clearOldestOverLimitFallback(context, i);
        }
    }

    static void clearOldestOverLimitStandard(Context context, int i) throws Throwable {
        StatusBarNotification[] activeNotifications = OneSignalNotificationManager.getActiveNotifications(context);
        int length = (activeNotifications.length - getMaxNumberOfNotificationsInt()) + i;
        if (length < 1) {
            return;
        }
        TreeMap treeMap = new TreeMap();
        for (StatusBarNotification statusBarNotification : activeNotifications) {
            if (!isGroupSummary(statusBarNotification)) {
                treeMap.put(Long.valueOf(statusBarNotification.getNotification().when), Integer.valueOf(statusBarNotification.getId()));
            }
        }
        Iterator it = treeMap.entrySet().iterator();
        while (it.hasNext()) {
            OneSignal.removeNotification(((Integer) ((Map.Entry) it.next()).getValue()).intValue());
            length--;
            if (length <= 0) {
                return;
            }
        }
    }

    static void clearOldestOverLimitFallback(Context context, int i) {
        boolean zIsClosed;
        OneSignalDbHelper oneSignalDbHelper = OneSignalDbHelper.getInstance(context);
        Cursor cursorQuery = null;
        try {
            cursorQuery = oneSignalDbHelper.query(OneSignalDbContract.NotificationTable.TABLE_NAME, new String[]{OneSignalDbContract.NotificationTable.COLUMN_NAME_ANDROID_NOTIFICATION_ID}, OneSignalDbHelper.recentUninteractedWithNotificationsWhere().toString(), null, null, null, "_id", getMaxNumberOfNotificationsString() + i);
            int count = (cursorQuery.getCount() - getMaxNumberOfNotificationsInt()) + i;
            if (count < 1) {
                if (cursorQuery != null) {
                    if (zIsClosed) {
                        return;
                    } else {
                        return;
                    }
                }
                return;
            }
            while (cursorQuery.moveToNext()) {
                OneSignal.removeNotification(cursorQuery.getInt(cursorQuery.getColumnIndex(OneSignalDbContract.NotificationTable.COLUMN_NAME_ANDROID_NOTIFICATION_ID)));
                count--;
                if (count <= 0) {
                    break;
                }
            }
            if (cursorQuery == null || cursorQuery.isClosed()) {
                return;
            }
        } catch (Throwable th) {
            try {
                OneSignal.Log(OneSignal.LOG_LEVEL.ERROR, "Error clearing oldest notifications over limit! ", th);
                if (cursorQuery == null || cursorQuery.isClosed()) {
                    return;
                }
            } finally {
                if (cursorQuery != null && !cursorQuery.isClosed()) {
                    cursorQuery.close();
                }
            }
        }
        cursorQuery.close();
    }

    static boolean isGroupSummary(StatusBarNotification statusBarNotification) {
        return (statusBarNotification.getNotification().flags & 512) != 0;
    }
}


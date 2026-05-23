package com.onesignal;

import android.content.Context;
import android.database.Cursor;
import android.service.notification.StatusBarNotification;
import android.text.TextUtils;
import androidx.work.ExistingWorkPolicy;
import androidx.work.ListenableWorker;
import androidx.work.OneTimeWorkRequest;
import androidx.work.Worker;
import androidx.work.WorkerParameters;
import com.onesignal.OneSignal;
import com.onesignal.OneSignalDbContract;
import java.util.ArrayList;
import java.util.concurrent.TimeUnit;
class OSNotificationRestoreWorkManager {
    static final int DEFAULT_TTL_IF_NOT_IN_PAYLOAD = 259200;
    private static final int DELAY_BETWEEN_NOTIFICATION_RESTORES_MS = 200;
    public static boolean restored;
    static final String[] COLUMNS_FOR_RESTORE = {"notification_id", OneSignalDbContract.NotificationTable.COLUMN_NAME_ANDROID_NOTIFICATION_ID, OneSignalDbContract.NotificationTable.COLUMN_NAME_FULL_DATA, OneSignalDbContract.NotificationTable.COLUMN_NAME_CREATED_TIME};
    private static final String NOTIFICATION_RESTORE_WORKER_IDENTIFIER = NotificationRestoreWorker.class.getCanonicalName();

    OSNotificationRestoreWorkManager() {
    }

    public static void beginEnqueueingWork(Context context, boolean z) {
        OSWorkManagerHelper.getInstance(context).enqueueUniqueWork(NOTIFICATION_RESTORE_WORKER_IDENTIFIER, ExistingWorkPolicy.KEEP, new OneTimeWorkRequest.Builder(NotificationRestoreWorker.class).setInitialDelay(z ? 15 : 0, TimeUnit.SECONDS).build());
    }

    public static class NotificationRestoreWorker extends Worker {
        public NotificationRestoreWorker(Context context, WorkerParameters workerParameters) {
            super(context, workerParameters);
        }

        @Override // androidx.work.Worker
        public ListenableWorker.Result doWork() {
            Context applicationContext = getApplicationContext();
            if (OneSignal.appContext == null) {
                OneSignal.initWithContext(applicationContext);
            }
            if (!OSUtils.areNotificationsEnabled(applicationContext)) {
                return ListenableWorker.Result.failure();
            }
            if (OSNotificationRestoreWorkManager.restored) {
                return ListenableWorker.Result.failure();
            }
            OSNotificationRestoreWorkManager.restored = true;
            OneSignal.Log(OneSignal.LOG_LEVEL.INFO, "Restoring notifications");
            OneSignalDbHelper oneSignalDbHelper = OneSignalDbHelper.getInstance(applicationContext);
            StringBuilder sbRecentUninteractedWithNotificationsWhere = OneSignalDbHelper.recentUninteractedWithNotificationsWhere();
            OSNotificationRestoreWorkManager.skipVisibleNotifications(applicationContext, sbRecentUninteractedWithNotificationsWhere);
            OSNotificationRestoreWorkManager.queryAndRestoreNotificationsAndBadgeCount(applicationContext, oneSignalDbHelper, sbRecentUninteractedWithNotificationsWhere);
            return ListenableWorker.Result.success();
        }
    }
    public static void queryAndRestoreNotificationsAndBadgeCount(Context context, OneSignalDbHelper oneSignalDbHelper, StringBuilder sb) {
        OneSignal.Log(OneSignal.LOG_LEVEL.INFO, "Querying DB for notifications to restore: " + sb.toString());
        Cursor cursorQuery = null;
        try {
            cursorQuery = oneSignalDbHelper.query(OneSignalDbContract.NotificationTable.TABLE_NAME, COLUMNS_FOR_RESTORE, sb.toString(), null, null, null, "_id DESC", NotificationLimitManager.MAX_NUMBER_OF_NOTIFICATIONS_STR);
            showNotificationsFromCursor(context, cursorQuery, 200);
            BadgeCountUpdater.update(oneSignalDbHelper, context);
            if (cursorQuery == null || cursorQuery.isClosed()) {
            }
        } catch (Throwable th) {
            try {
                OneSignal.Log(OneSignal.LOG_LEVEL.ERROR, "Error restoring notification records! ", th);
            } finally {
                if (cursorQuery != null && !cursorQuery.isClosed()) {
                    cursorQuery.close();
                }
            }
        }
    }
    public static void skipVisibleNotifications(Context context, StringBuilder sb) {
        StatusBarNotification[] activeNotifications = OneSignalNotificationManager.getActiveNotifications(context);
        if (activeNotifications.length == 0) {
            return;
        }
        ArrayList arrayList = new ArrayList();
        for (StatusBarNotification statusBarNotification : activeNotifications) {
            arrayList.add(Integer.valueOf(statusBarNotification.getId()));
        }
        sb.append(" AND android_notification_id NOT IN (").append(TextUtils.join(",", arrayList)).append(")");
    }

    static void showNotificationsFromCursor(Context context, Cursor cursor, int i) {
        if (cursor.moveToFirst()) {
            do {
                OSNotificationWorkManager.beginEnqueueingWork(context, cursor.getString(cursor.getColumnIndex("notification_id")), cursor.getInt(cursor.getColumnIndex(OneSignalDbContract.NotificationTable.COLUMN_NAME_ANDROID_NOTIFICATION_ID)), cursor.getString(cursor.getColumnIndex(OneSignalDbContract.NotificationTable.COLUMN_NAME_FULL_DATA)), cursor.getLong(cursor.getColumnIndex(OneSignalDbContract.NotificationTable.COLUMN_NAME_CREATED_TIME)), true, false);
                if (i > 0) {
                    OSUtils.sleep(i);
                }
            } while (cursor.moveToNext());
        }
    }
}


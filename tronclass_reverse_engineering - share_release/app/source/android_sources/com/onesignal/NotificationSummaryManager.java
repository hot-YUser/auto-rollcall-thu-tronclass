package com.onesignal;

import android.app.NotificationManager;
import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import com.onesignal.OneSignal;
import com.onesignal.OneSignalDbContract;
import org.json.JSONException;
import org.json.JSONObject;
class NotificationSummaryManager {
    NotificationSummaryManager() {
    }

    static void updatePossibleDependentSummaryOnDismiss(Context context, OneSignalDb oneSignalDb, int i) {
        Cursor cursorQuery = oneSignalDb.query(OneSignalDbContract.NotificationTable.TABLE_NAME, new String[]{OneSignalDbContract.NotificationTable.COLUMN_NAME_GROUP_ID}, "android_notification_id = " + i, null, null, null, null);
        if (cursorQuery.moveToFirst()) {
            String string = cursorQuery.getString(cursorQuery.getColumnIndex(OneSignalDbContract.NotificationTable.COLUMN_NAME_GROUP_ID));
            cursorQuery.close();
            if (string != null) {
                updateSummaryNotificationAfterChildRemoved(context, oneSignalDb, string, true);
                return;
            }
            return;
        }
        cursorQuery.close();
    }

    static void updateSummaryNotificationAfterChildRemoved(Context context, OneSignalDb oneSignalDb, String str, boolean z) {
        try {
            Cursor cursorInternalUpdateSummaryNotificationAfterChildRemoved = internalUpdateSummaryNotificationAfterChildRemoved(context, oneSignalDb, str, z);
            if (cursorInternalUpdateSummaryNotificationAfterChildRemoved == null || cursorInternalUpdateSummaryNotificationAfterChildRemoved.isClosed()) {
                return;
            }
            cursorInternalUpdateSummaryNotificationAfterChildRemoved.close();
        } catch (Throwable th) {
            OneSignal.Log(OneSignal.LOG_LEVEL.ERROR, "Error running updateSummaryNotificationAfterChildRemoved!", th);
        }
    }

    private static Cursor internalUpdateSummaryNotificationAfterChildRemoved(Context context, OneSignalDb oneSignalDb, String str, boolean z) {
        Cursor cursorQuery = oneSignalDb.query(OneSignalDbContract.NotificationTable.TABLE_NAME, new String[]{OneSignalDbContract.NotificationTable.COLUMN_NAME_ANDROID_NOTIFICATION_ID, OneSignalDbContract.NotificationTable.COLUMN_NAME_CREATED_TIME, OneSignalDbContract.NotificationTable.COLUMN_NAME_FULL_DATA}, "group_id = ? AND dismissed = 0 AND opened = 0 AND is_summary = 0", new String[]{str}, null, null, "_id DESC");
        int count = cursorQuery.getCount();
        if (count == 0 && !str.equals(OneSignalNotificationManager.getGrouplessSummaryKey())) {
            cursorQuery.close();
            Integer summaryNotificationId = getSummaryNotificationId(oneSignalDb, str);
            if (summaryNotificationId == null) {
                return cursorQuery;
            }
            OneSignalNotificationManager.getNotificationManager(context).cancel(summaryNotificationId.intValue());
            ContentValues contentValues = new ContentValues();
            contentValues.put(z ? OneSignalDbContract.NotificationTable.COLUMN_NAME_DISMISSED : OneSignalDbContract.NotificationTable.COLUMN_NAME_OPENED, (Integer) 1);
            oneSignalDb.update(OneSignalDbContract.NotificationTable.TABLE_NAME, contentValues, "android_notification_id = " + summaryNotificationId, null);
            return cursorQuery;
        }
        if (count == 1) {
            cursorQuery.close();
            if (getSummaryNotificationId(oneSignalDb, str) == null) {
                return cursorQuery;
            }
            restoreSummary(context, str);
            return cursorQuery;
        }
        try {
            cursorQuery.moveToFirst();
            Long lValueOf = Long.valueOf(cursorQuery.getLong(cursorQuery.getColumnIndex(OneSignalDbContract.NotificationTable.COLUMN_NAME_CREATED_TIME)));
            String string = cursorQuery.getString(cursorQuery.getColumnIndex(OneSignalDbContract.NotificationTable.COLUMN_NAME_FULL_DATA));
            cursorQuery.close();
            if (getSummaryNotificationId(oneSignalDb, str) == null) {
                return cursorQuery;
            }
            OSNotificationGenerationJob oSNotificationGenerationJob = new OSNotificationGenerationJob(context);
            oSNotificationGenerationJob.setRestoring(true);
            oSNotificationGenerationJob.setShownTimeStamp(lValueOf);
            oSNotificationGenerationJob.setJsonPayload(new JSONObject(string));
            GenerateNotification.updateSummaryNotification(oSNotificationGenerationJob);
        } catch (JSONException e) {
            e.printStackTrace();
        }
        return cursorQuery;
    }

    private static void restoreSummary(Context context, String str) {
        String[] strArr = {str};
        Cursor cursorQuery = null;
        try {
            cursorQuery = OneSignalDbHelper.getInstance(context).query(OneSignalDbContract.NotificationTable.TABLE_NAME, OSNotificationRestoreWorkManager.COLUMNS_FOR_RESTORE, "group_id = ? AND dismissed = 0 AND opened = 0 AND is_summary = 0", strArr, null, null, null);
            OSNotificationRestoreWorkManager.showNotificationsFromCursor(context, cursorQuery, 0);
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

    static Integer getSummaryNotificationId(OneSignalDb oneSignalDb, String str) {
        Integer num;
        Cursor cursorQuery;
        Cursor cursor = null;
        try {
            cursorQuery = oneSignalDb.query(OneSignalDbContract.NotificationTable.TABLE_NAME, new String[]{OneSignalDbContract.NotificationTable.COLUMN_NAME_ANDROID_NOTIFICATION_ID}, "group_id = ? AND dismissed = 0 AND opened = 0 AND is_summary = 1", new String[]{str}, null, null, null);
        } catch (Throwable th) {
            th = th;
            num = null;
        }
        try {
            if (!cursorQuery.moveToFirst()) {
                cursorQuery.close();
                if (cursorQuery != null && !cursorQuery.isClosed()) {
                    cursorQuery.close();
                }
                return null;
            }
            Integer numValueOf = Integer.valueOf(cursorQuery.getInt(cursorQuery.getColumnIndex(OneSignalDbContract.NotificationTable.COLUMN_NAME_ANDROID_NOTIFICATION_ID)));
            cursorQuery.close();
            if (cursorQuery == null || cursorQuery.isClosed()) {
                return numValueOf;
            }
            cursorQuery.close();
            return numValueOf;
        } catch (Throwable th2) {
            th = th2;
            cursor = cursorQuery;
            num = null;
            try {
                OneSignal.Log(OneSignal.LOG_LEVEL.ERROR, "Error getting android notification id for summary notification group: " + str, th);
                return num;
            } finally {
                if (cursor != null && !cursor.isClosed()) {
                    cursor.close();
                }
            }
        }
    }

    static void clearNotificationOnSummaryClick(Context context, OneSignalDbHelper oneSignalDbHelper, String str) {
        Integer summaryNotificationId = getSummaryNotificationId(oneSignalDbHelper, str);
        boolean zEquals = str.equals(OneSignalNotificationManager.getGrouplessSummaryKey());
        NotificationManager notificationManager = OneSignalNotificationManager.getNotificationManager(context);
        Integer mostRecentNotifIdFromGroup = OneSignalNotificationManager.getMostRecentNotifIdFromGroup(oneSignalDbHelper, str, zEquals);
        if (mostRecentNotifIdFromGroup != null) {
            if (!OneSignal.getClearGroupSummaryClick()) {
                OneSignal.removeNotification(mostRecentNotifIdFromGroup.intValue());
                return;
            }
            if (zEquals) {
                summaryNotificationId = Integer.valueOf(OneSignalNotificationManager.getGrouplessSummaryId());
            }
            if (summaryNotificationId != null) {
                notificationManager.cancel(summaryNotificationId.intValue());
            }
        }
    }
}


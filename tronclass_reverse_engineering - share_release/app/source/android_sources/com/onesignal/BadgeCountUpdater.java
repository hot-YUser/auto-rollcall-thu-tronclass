package com.onesignal;

import android.content.Context;
import android.content.pm.ApplicationInfo;
import android.database.Cursor;
import android.os.Bundle;
import android.service.notification.StatusBarNotification;
import com.onesignal.OneSignal;
import com.onesignal.OneSignalDbContract;
import com.onesignal.shortcutbadger.ShortcutBadgeException;
import com.onesignal.shortcutbadger.ShortcutBadger;
class BadgeCountUpdater {
    private static int badgesEnabled = -1;

    BadgeCountUpdater() {
    }

    private static boolean areBadgeSettingsEnabled(Context context) {
        int i = badgesEnabled;
        if (i != -1) {
            return i == 1;
        }
        ApplicationInfo info = ApplicationInfoHelper.INSTANCE.getInfo(context);
        if (info == null) {
            badgesEnabled = 0;
            OneSignal.Log(OneSignal.LOG_LEVEL.ERROR, "Error reading meta-data tag 'com.onesignal.BadgeCount'. Disabling badge setting.");
            return false;
        }
        Bundle bundle = info.metaData;
        if (bundle != null) {
            badgesEnabled = !"DISABLE".equals(bundle.getString("com.onesignal.BadgeCount")) ? 1 : 0;
        } else {
            badgesEnabled = 1;
        }
        return badgesEnabled == 1;
    }

    private static boolean areBadgesEnabled(Context context) {
        return areBadgeSettingsEnabled(context) && OSUtils.areNotificationsEnabled(context);
    }

    static void update(OneSignalDb oneSignalDb, Context context) {
        if (areBadgesEnabled(context)) {
            updateStandard(context);
        }
    }

    private static void updateStandard(Context context) {
        int i = 0;
        for (StatusBarNotification statusBarNotification : OneSignalNotificationManager.getActiveNotifications(context)) {
            if (!NotificationLimitManager.isGroupSummary(statusBarNotification)) {
                i++;
            }
        }
        updateCount(i, context);
    }

    private static void updateFallback(OneSignalDb oneSignalDb, Context context) {
        Cursor cursorQuery = oneSignalDb.query(OneSignalDbContract.NotificationTable.TABLE_NAME, null, OneSignalDbHelper.recentUninteractedWithNotificationsWhere().toString(), null, null, null, null, NotificationLimitManager.MAX_NUMBER_OF_NOTIFICATIONS_STR);
        int count = cursorQuery.getCount();
        cursorQuery.close();
        updateCount(count, context);
    }

    static void updateCount(int i, Context context) {
        if (areBadgeSettingsEnabled(context)) {
            try {
                ShortcutBadger.applyCountOrThrow(context, i);
            } catch (ShortcutBadgeException unused) {
            }
        }
    }
}


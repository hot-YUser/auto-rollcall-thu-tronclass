package com.onesignal;

import android.app.Activity;
import android.content.ContentValues;
import android.content.Context;
import android.content.Intent;
import android.database.Cursor;
import android.os.Build;
import androidx.core.app.NotificationManagerCompat;
import com.onesignal.OneSignal;
import com.onesignal.OneSignalDbContract;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
class NotificationOpenedProcessor {
    private static final String TAG = "com.onesignal.NotificationOpenedProcessor";

    NotificationOpenedProcessor() {
    }

    static void processFromContext(Context context, Intent intent) {
        if (isOneSignalIntent(intent)) {
            if (context != null) {
                OneSignal.initWithContext(context.getApplicationContext());
            }
            handleDismissFromActionButtonPress(context, intent);
            processIntent(context, intent);
        }
    }

    private static boolean isOneSignalIntent(Intent intent) {
        return intent.hasExtra(GenerateNotification.BUNDLE_KEY_ONESIGNAL_DATA) || intent.hasExtra("summary") || intent.hasExtra(GenerateNotification.BUNDLE_KEY_ANDROID_NOTIFICATION_ID);
    }

    private static void handleDismissFromActionButtonPress(Context context, Intent intent) {
        if (intent.getBooleanExtra("action_button", false)) {
            NotificationManagerCompat.from(context).cancel(intent.getIntExtra(GenerateNotification.BUNDLE_KEY_ANDROID_NOTIFICATION_ID, 0));
            if (Build.VERSION.SDK_INT < 31) {
                context.sendBroadcast(new Intent("android.intent.action.CLOSE_SYSTEM_DIALOGS"));
            }
        }
    }

    static void processIntent(Context context, Intent intent) {
        OSNotificationIntentExtras oSNotificationIntentExtrasProcessToOpenIntent;
        String stringExtra;
        OneSignalDbHelper oneSignalDbHelper = OneSignalDbHelper.getInstance(context);
        String stringExtra2 = intent.getStringExtra("summary");
        boolean booleanExtra = intent.getBooleanExtra(OneSignalDbContract.NotificationTable.COLUMN_NAME_DISMISSED, false);
        if (booleanExtra) {
            oSNotificationIntentExtrasProcessToOpenIntent = null;
        } else {
            oSNotificationIntentExtrasProcessToOpenIntent = processToOpenIntent(context, intent, oneSignalDbHelper, stringExtra2);
            if (oSNotificationIntentExtrasProcessToOpenIntent == null) {
                return;
            }
        }
        markNotificationsConsumed(context, intent, oneSignalDbHelper, booleanExtra);
        if (stringExtra2 == null && (stringExtra = intent.getStringExtra("grp")) != null) {
            NotificationSummaryManager.updateSummaryNotificationAfterChildRemoved(context, oneSignalDbHelper, stringExtra, booleanExtra);
        }
        OneSignal.onesignalLog(OneSignal.LOG_LEVEL.DEBUG, "processIntent from context: " + context + " and intent: " + intent);
        if (intent.getExtras() != null) {
            OneSignal.onesignalLog(OneSignal.LOG_LEVEL.DEBUG, "processIntent intent extras: " + intent.getExtras().toString());
        }
        if (booleanExtra) {
            return;
        }
        if (!(context instanceof Activity)) {
            OneSignal.onesignalLog(OneSignal.LOG_LEVEL.ERROR, "NotificationOpenedProcessor processIntent from an non Activity context: " + context);
        } else {
            OneSignal.handleNotificationOpen((Activity) context, oSNotificationIntentExtrasProcessToOpenIntent.getDataArray(), OSNotificationFormatHelper.getOSNotificationIdFromJson(oSNotificationIntentExtrasProcessToOpenIntent.getJsonData()));
        }
    }

    static OSNotificationIntentExtras processToOpenIntent(Context context, Intent intent, OneSignalDbHelper oneSignalDbHelper, String str) {
        JSONObject jSONObject;
        JSONArray jSONArrayNewJsonArray = null;
        try {
            jSONObject = new JSONObject(intent.getStringExtra(GenerateNotification.BUNDLE_KEY_ONESIGNAL_DATA));
            try {
                if (!(context instanceof Activity)) {
                    OneSignal.onesignalLog(OneSignal.LOG_LEVEL.ERROR, "NotificationOpenedProcessor processIntent from an non Activity context: " + context);
                } else if (OSInAppMessagePreviewHandler.notificationOpened((Activity) context, jSONObject)) {
                    return null;
                }
                jSONObject.put(GenerateNotification.BUNDLE_KEY_ANDROID_NOTIFICATION_ID, intent.getIntExtra(GenerateNotification.BUNDLE_KEY_ANDROID_NOTIFICATION_ID, 0));
                intent.putExtra(GenerateNotification.BUNDLE_KEY_ONESIGNAL_DATA, jSONObject.toString());
                jSONArrayNewJsonArray = NotificationBundleProcessor.newJsonArray(new JSONObject(intent.getStringExtra(GenerateNotification.BUNDLE_KEY_ONESIGNAL_DATA)));
            } catch (JSONException e) {
                e = e;
                e.printStackTrace();
            }
        } catch (JSONException e2) {
            e = e2;
            jSONObject = null;
        }
        if (str != null) {
            addChildNotifications(jSONArrayNewJsonArray, str, oneSignalDbHelper);
        }
        return new OSNotificationIntentExtras(jSONArrayNewJsonArray, jSONObject);
    }

    private static void addChildNotifications(JSONArray jSONArray, String str, OneSignalDbHelper oneSignalDbHelper) {
        Cursor cursorQuery = oneSignalDbHelper.query(OneSignalDbContract.NotificationTable.TABLE_NAME, new String[]{OneSignalDbContract.NotificationTable.COLUMN_NAME_FULL_DATA}, "group_id = ? AND dismissed = 0 AND opened = 0 AND is_summary = 0", new String[]{str}, null, null, null);
        if (cursorQuery.getCount() > 1) {
            cursorQuery.moveToFirst();
            do {
                try {
                    jSONArray.put(new JSONObject(cursorQuery.getString(cursorQuery.getColumnIndex(OneSignalDbContract.NotificationTable.COLUMN_NAME_FULL_DATA))));
                } catch (JSONException unused) {
                    OneSignal.Log(OneSignal.LOG_LEVEL.ERROR, "Could not parse JSON of sub notification in group: " + str);
                }
            } while (cursorQuery.moveToNext());
        }
        cursorQuery.close();
    }

    private static void markNotificationsConsumed(Context context, Intent intent, OneSignalDbHelper oneSignalDbHelper, boolean z) {
        String strConcat;
        String stringExtra = intent.getStringExtra("summary");
        String[] strArr = null;
        if (stringExtra != null) {
            boolean zEquals = stringExtra.equals(OneSignalNotificationManager.getGrouplessSummaryKey());
            if (zEquals) {
                strConcat = "group_id IS NULL";
            } else {
                strArr = new String[]{stringExtra};
                strConcat = "group_id = ?";
            }
            if (!z && !OneSignal.getClearGroupSummaryClick()) {
                String strValueOf = String.valueOf(OneSignalNotificationManager.getMostRecentNotifIdFromGroup(oneSignalDbHelper, stringExtra, zEquals));
                strConcat = strConcat.concat(" AND android_notification_id = ?");
                if (zEquals) {
                    strArr = new String[]{strValueOf};
                } else {
                    strArr = new String[]{stringExtra, strValueOf};
                }
            }
        } else {
            strConcat = "android_notification_id = " + intent.getIntExtra(GenerateNotification.BUNDLE_KEY_ANDROID_NOTIFICATION_ID, 0);
        }
        clearStatusBarNotifications(context, oneSignalDbHelper, stringExtra);
        oneSignalDbHelper.update(OneSignalDbContract.NotificationTable.TABLE_NAME, newContentValuesWithConsumed(intent), strConcat, strArr);
        BadgeCountUpdater.update(oneSignalDbHelper, context);
    }

    private static void clearStatusBarNotifications(Context context, OneSignalDbHelper oneSignalDbHelper, String str) {
        if (str != null) {
            NotificationSummaryManager.clearNotificationOnSummaryClick(context, oneSignalDbHelper, str);
        } else if (OneSignalNotificationManager.getGrouplessNotifsCount(context).intValue() < 1) {
            OneSignalNotificationManager.getNotificationManager(context).cancel(OneSignalNotificationManager.getGrouplessSummaryId());
        }
    }

    private static ContentValues newContentValuesWithConsumed(Intent intent) {
        ContentValues contentValues = new ContentValues();
        if (intent.getBooleanExtra(OneSignalDbContract.NotificationTable.COLUMN_NAME_DISMISSED, false)) {
            contentValues.put(OneSignalDbContract.NotificationTable.COLUMN_NAME_DISMISSED, (Integer) 1);
        } else {
            contentValues.put(OneSignalDbContract.NotificationTable.COLUMN_NAME_OPENED, (Integer) 1);
        }
        return contentValues;
    }
}


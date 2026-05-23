package com.getcapacitor.plugin.notification;

import android.content.Context;
import android.content.SharedPreferences;
import com.getcapacitor.JSObject;
import com.onesignal.OneSignalDbContract;
import com.onesignal.outcomes.OSOutcomeConstants;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import org.json.JSONException;
public class NotificationStorage {
    private static final String ACTION_TYPES_ID = "ACTION_TYPE_STORE";
    private static final String ID_KEY = "notificationIds";
    private static final String NOTIFICATION_STORE_ID = "NOTIFICATION_STORE";
    private Context context;

    public NotificationStorage(Context context) {
        this.context = context;
    }

    public void appendNotifications(List<LocalNotification> list) {
        SharedPreferences.Editor editorEdit = getStorage(NOTIFICATION_STORE_ID).edit();
        for (LocalNotification localNotification : list) {
            editorEdit.putString(localNotification.getId().toString(), localNotification.getSource());
        }
        editorEdit.apply();
    }

    public List<String> getSavedNotificationIds() {
        Map<String, ?> all = getStorage(NOTIFICATION_STORE_ID).getAll();
        if (all != null) {
            return new ArrayList(all.keySet());
        }
        return new ArrayList();
    }

    public JSObject getSavedNotificationAsJSObject(String str) {
        String string = getStorage(NOTIFICATION_STORE_ID).getString(str, null);
        if (string == null) {
            return null;
        }
        try {
            return new JSObject(string);
        } catch (JSONException unused) {
            return null;
        }
    }

    public LocalNotification getSavedNotification(String str) {
        JSObject savedNotificationAsJSObject = getSavedNotificationAsJSObject(str);
        if (savedNotificationAsJSObject == null) {
            return null;
        }
        try {
            return LocalNotification.buildNotificationFromJSObject(savedNotificationAsJSObject);
        } catch (ParseException unused) {
            return null;
        }
    }

    public void deleteNotification(String str) {
        SharedPreferences.Editor editorEdit = getStorage(NOTIFICATION_STORE_ID).edit();
        editorEdit.remove(str);
        editorEdit.apply();
    }

    private SharedPreferences getStorage(String str) {
        return this.context.getSharedPreferences(str, 0);
    }

    public void writeActionGroup(Map<String, NotificationAction[]> map) {
        for (String str : map.keySet()) {
            SharedPreferences.Editor editorEdit = getStorage(ACTION_TYPES_ID + str).edit();
            editorEdit.clear();
            NotificationAction[] notificationActionArr = map.get(str);
            editorEdit.putInt("count", notificationActionArr.length);
            for (int i = 0; i < notificationActionArr.length; i++) {
                editorEdit.putString(OSOutcomeConstants.OUTCOME_ID + i, notificationActionArr[i].getId());
                editorEdit.putString(OneSignalDbContract.NotificationTable.COLUMN_NAME_TITLE + i, notificationActionArr[i].getTitle());
                editorEdit.putBoolean("input" + i, notificationActionArr[i].isInput());
            }
            editorEdit.apply();
        }
    }

    public NotificationAction[] getActionGroup(String str) {
        SharedPreferences storage = getStorage(ACTION_TYPES_ID + str);
        int i = storage.getInt("count", 0);
        NotificationAction[] notificationActionArr = new NotificationAction[i];
        for (int i2 = 0; i2 < i; i2++) {
            notificationActionArr[i2] = new NotificationAction(storage.getString(OSOutcomeConstants.OUTCOME_ID + i2, ""), storage.getString(OneSignalDbContract.NotificationTable.COLUMN_NAME_TITLE + i2, ""), Boolean.valueOf(storage.getBoolean("input" + i2, false)));
        }
        return notificationActionArr;
    }
}


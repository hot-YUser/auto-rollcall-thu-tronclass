package com.getcapacitor.plugin.notification;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.UserManager;
import com.getcapacitor.CapConfig;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
public class LocalNotificationRestoreReceiver extends BroadcastReceiver {
    @Override // android.content.BroadcastReceiver
    public void onReceive(Context context, Intent intent) {
        Date at;
        UserManager userManager = (UserManager) context.getSystemService(UserManager.class);
        if (userManager == null || !userManager.isUserUnlocked()) {
            return;
        }
        NotificationStorage notificationStorage = new NotificationStorage(context);
        List<String> savedNotificationIds = notificationStorage.getSavedNotificationIds();
        ArrayList arrayList = new ArrayList(savedNotificationIds.size());
        ArrayList arrayList2 = new ArrayList();
        Iterator<String> it = savedNotificationIds.iterator();
        while (it.hasNext()) {
            LocalNotification savedNotification = notificationStorage.getSavedNotification(it.next());
            if (savedNotification != null) {
                LocalNotificationSchedule schedule = savedNotification.getSchedule();
                if (schedule != null && (at = schedule.getAt()) != null && at.before(new Date())) {
                    schedule.setAt(new Date(new Date().getTime() + 15000));
                    savedNotification.setSchedule(schedule);
                    arrayList2.add(savedNotification);
                }
                arrayList.add(savedNotification);
            }
        }
        if (arrayList2.size() > 0) {
            notificationStorage.appendNotifications(arrayList2);
        }
        new LocalNotificationManager(notificationStorage, null, context, new CapConfig(context.getAssets(), null)).schedule(null, arrayList);
    }
}


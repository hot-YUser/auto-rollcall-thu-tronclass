package androidx.work.impl.background.systemalarm;

import android.app.AlarmManager;
import android.app.PendingIntent;
import android.content.Context;
import androidx.core.app.NotificationCompat;
import androidx.work.Logger;
import androidx.work.impl.WorkDatabase;
import androidx.work.impl.WorkManagerImpl;
import androidx.work.impl.model.SystemIdInfo;
import androidx.work.impl.model.SystemIdInfoDao;
import androidx.work.impl.utils.IdGenerator;
class Alarms {
    private static final String TAG = Logger.tagWithPrefix("Alarms");

    public static void setAlarm(Context context, WorkManagerImpl workManager, String workSpecId, long triggerAtMillis) {
        WorkDatabase workDatabase = workManager.getWorkDatabase();
        SystemIdInfoDao systemIdInfoDao = workDatabase.systemIdInfoDao();
        SystemIdInfo systemIdInfo = systemIdInfoDao.getSystemIdInfo(workSpecId);
        if (systemIdInfo != null) {
            cancelExactAlarm(context, workSpecId, systemIdInfo.systemId);
            setExactAlarm(context, workSpecId, systemIdInfo.systemId, triggerAtMillis);
        } else {
            int iNextAlarmManagerId = new IdGenerator(workDatabase).nextAlarmManagerId();
            systemIdInfoDao.insertSystemIdInfo(new SystemIdInfo(workSpecId, iNextAlarmManagerId));
            setExactAlarm(context, workSpecId, iNextAlarmManagerId, triggerAtMillis);
        }
    }

    public static void cancelAlarm(Context context, WorkManagerImpl workManager, String workSpecId) {
        SystemIdInfoDao systemIdInfoDao = workManager.getWorkDatabase().systemIdInfoDao();
        SystemIdInfo systemIdInfo = systemIdInfoDao.getSystemIdInfo(workSpecId);
        if (systemIdInfo != null) {
            cancelExactAlarm(context, workSpecId, systemIdInfo.systemId);
            Logger.get().debug(TAG, String.format("Removing SystemIdInfo for workSpecId (%s)", workSpecId), new Throwable[0]);
            systemIdInfoDao.removeSystemIdInfo(workSpecId);
        }
    }

    private static void cancelExactAlarm(Context context, String workSpecId, int alarmId) {
        AlarmManager alarmManager = (AlarmManager) context.getSystemService(NotificationCompat.CATEGORY_ALARM);
        PendingIntent service = PendingIntent.getService(context, alarmId, CommandHandler.createDelayMetIntent(context, workSpecId), 603979776);
        if (service == null || alarmManager == null) {
            return;
        }
        Logger.get().debug(TAG, String.format("Cancelling existing alarm with (workSpecId, systemId) (%s, %s)", workSpecId, Integer.valueOf(alarmId)), new Throwable[0]);
        alarmManager.cancel(service);
    }

    private static void setExactAlarm(Context context, String workSpecId, int alarmId, long triggerAtMillis) {
        AlarmManager alarmManager = (AlarmManager) context.getSystemService(NotificationCompat.CATEGORY_ALARM);
        PendingIntent service = PendingIntent.getService(context, alarmId, CommandHandler.createDelayMetIntent(context, workSpecId), 201326592);
        if (alarmManager != null) {
            alarmManager.setExact(0, triggerAtMillis, service);
        }
    }

    private Alarms() {
    }
}


package com.getcapacitor.plugin.notification;

import android.app.Activity;
import android.app.AlarmManager;
import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.graphics.Color;
import android.media.AudioAttributes;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import androidx.core.app.NotificationCompat;
import androidx.core.app.NotificationManagerCompat;
import androidx.core.app.RemoteInput;
import com.getcapacitor.CapConfig;
import com.getcapacitor.JSObject;
import com.getcapacitor.Logger;
import com.getcapacitor.PluginCall;
import com.getcapacitor.android.R;
import com.getcapacitor.plugin.util.AssetUtil;
import com.onesignal.GenerateNotification;
import com.onesignal.OneSignalDbContract;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import org.json.JSONArray;
import org.json.JSONException;
public class LocalNotificationManager {
    public static final String ACTION_INTENT_KEY = "LocalNotificationUserAction";
    private static final String CONFIG_KEY_PREFIX = "plugins.LocalNotifications.";
    public static final String DEFAULT_NOTIFICATION_CHANNEL_ID = "default";
    private static final String DEFAULT_PRESS_ACTION = "tap";
    public static final String NOTIFICATION_INTENT_KEY = "LocalNotificationId";
    public static final String NOTIFICATION_IS_REMOVABLE_KEY = "LocalNotificationRepeating";
    public static final String NOTIFICATION_OBJ_INTENT_KEY = "LocalNotficationObject";
    public static final String REMOTE_INPUT_KEY = "LocalNotificationRemoteInput";
    private static int defaultSmallIconID;
    private static int defaultSoundID;
    private Activity activity;
    private CapConfig config;
    private Context context;
    private NotificationStorage storage;

    public LocalNotificationManager(NotificationStorage notificationStorage, Activity activity, Context context, CapConfig capConfig) {
        this.storage = notificationStorage;
        this.activity = activity;
        this.context = context;
        this.config = capConfig;
    }

    public JSObject handleNotificationActionPerformed(Intent intent, NotificationStorage notificationStorage) {
        Logger.debug(Logger.tags("LN"), "LocalNotification received: " + intent.getDataString());
        int intExtra = intent.getIntExtra(NOTIFICATION_INTENT_KEY, Integer.MIN_VALUE);
        JSObject jSObject = null;
        if (intExtra == Integer.MIN_VALUE) {
            Logger.debug(Logger.tags("LN"), "Activity started without notification attached");
            return null;
        }
        if (intent.getBooleanExtra(NOTIFICATION_IS_REMOVABLE_KEY, true)) {
            notificationStorage.deleteNotification(Integer.toString(intExtra));
        }
        JSObject jSObject2 = new JSObject();
        Bundle resultsFromIntent = RemoteInput.getResultsFromIntent(intent);
        if (resultsFromIntent != null) {
            jSObject2.put("inputValue", resultsFromIntent.getCharSequence(REMOTE_INPUT_KEY).toString());
        }
        String stringExtra = intent.getStringExtra(ACTION_INTENT_KEY);
        dismissVisibleNotification(intExtra);
        jSObject2.put(GenerateNotification.BUNDLE_KEY_ACTION_ID, stringExtra);
        try {
            String stringExtra2 = intent.getStringExtra(NOTIFICATION_OBJ_INTENT_KEY);
            if (stringExtra2 != null) {
                jSObject = new JSObject(stringExtra2);
            }
        } catch (JSONException unused) {
        }
        jSObject2.put(OneSignalDbContract.NotificationTable.TABLE_NAME, (Object) jSObject);
        return jSObject2;
    }

    public void createNotificationChannel() {
        if (Build.VERSION.SDK_INT >= 26) {
            NotificationChannel notificationChannel = new NotificationChannel(DEFAULT_NOTIFICATION_CHANNEL_ID, "Default", 3);
            notificationChannel.setDescription("Default");
            AudioAttributes audioAttributesBuild = new AudioAttributes.Builder().setContentType(4).setUsage(4).build();
            Uri defaultSoundUrl = getDefaultSoundUrl(this.context);
            if (defaultSoundUrl != null) {
                notificationChannel.setSound(defaultSoundUrl, audioAttributesBuild);
            }
            ((NotificationManager) this.context.getSystemService(NotificationManager.class)).createNotificationChannel(notificationChannel);
        }
    }

    public JSONArray schedule(PluginCall pluginCall, List<LocalNotification> list) {
        JSONArray jSONArray = new JSONArray();
        NotificationManagerCompat notificationManagerCompatFrom = NotificationManagerCompat.from(this.context);
        if (!notificationManagerCompatFrom.areNotificationsEnabled()) {
            if (pluginCall != null) {
                pluginCall.error("Notifications not enabled on this device");
            }
            return null;
        }
        for (LocalNotification localNotification : list) {
            Integer id = localNotification.getId();
            if (localNotification.getId() == null) {
                if (pluginCall != null) {
                    pluginCall.error("LocalNotification missing identifier");
                }
                return null;
            }
            dismissVisibleNotification(id.intValue());
            cancelTimerForNotification(id);
            buildNotification(notificationManagerCompatFrom, localNotification, pluginCall);
            jSONArray.put(id);
        }
        return jSONArray;
    }

    private void buildNotification(NotificationManagerCompat notificationManagerCompat, LocalNotification localNotification, PluginCall pluginCall) {
        String channelId;
        if (localNotification.getChannelId() == null) {
            channelId = DEFAULT_NOTIFICATION_CHANNEL_ID;
        } else {
            channelId = localNotification.getChannelId();
        }
        NotificationCompat.Builder groupSummary = new NotificationCompat.Builder(this.context, channelId).setContentTitle(localNotification.getTitle()).setContentText(localNotification.getBody()).setAutoCancel(localNotification.isAutoCancel()).setOngoing(localNotification.isOngoing()).setPriority(0).setGroupSummary(localNotification.isGroupSummary());
        groupSummary.setStyle(new NotificationCompat.BigTextStyle().bigText(localNotification.getBody()));
        Context context = this.context;
        String sound = localNotification.getSound(context, getDefaultSound(context));
        if (sound != null) {
            Uri uri = Uri.parse(sound);
            this.context.grantUriPermission("com.android.systemui", uri, 1);
            groupSummary.setSound(uri);
            groupSummary.setDefaults(6);
        } else {
            groupSummary.setDefaults(-1);
        }
        String group = localNotification.getGroup();
        if (group != null) {
            groupSummary.setGroup(group);
        }
        if (localNotification.isScheduled() && localNotification.getSchedule().getAt() != null) {
            groupSummary.setWhen(localNotification.getSchedule().getAt().getTime()).setShowWhen(true);
        }
        groupSummary.setVisibility(0);
        groupSummary.setOnlyAlertOnce(true);
        Context context2 = this.context;
        groupSummary.setSmallIcon(localNotification.getSmallIcon(context2, getDefaultSmallIcon(context2)));
        String iconColor = localNotification.getIconColor(this.config.getString("plugins.LocalNotifications.iconColor"));
        if (iconColor != null) {
            try {
                groupSummary.setColor(Color.parseColor(iconColor));
            } catch (IllegalArgumentException unused) {
                if (pluginCall != null) {
                    pluginCall.error("Invalid color provided. Must be a hex string (ex: #ff0000");
                    return;
                }
                return;
            }
        }
        createActionIntents(localNotification, groupSummary);
        Notification notificationBuild = groupSummary.build();
        if (localNotification.isScheduled()) {
            triggerScheduledNotification(notificationBuild, localNotification);
        } else {
            notificationManagerCompat.notify(localNotification.getId().intValue(), notificationBuild);
        }
    }

    private void createActionIntents(LocalNotification localNotification, NotificationCompat.Builder builder) {
        builder.setContentIntent(PendingIntent.getActivity(this.context, localNotification.getId().intValue(), buildIntent(localNotification, DEFAULT_PRESS_ACTION), 268435456));
        String actionTypeId = localNotification.getActionTypeId();
        if (actionTypeId != null) {
            for (NotificationAction notificationAction : this.storage.getActionGroup(actionTypeId)) {
                NotificationCompat.Action.Builder builder2 = new NotificationCompat.Action.Builder(R.drawable.ic_transparent, notificationAction.getTitle(), PendingIntent.getActivity(this.context, localNotification.getId().intValue() + notificationAction.getId().hashCode(), buildIntent(localNotification, notificationAction.getId()), 268435456));
                if (notificationAction.isInput()) {
                    builder2.addRemoteInput(new RemoteInput.Builder(REMOTE_INPUT_KEY).setLabel(notificationAction.getTitle()).build());
                }
                builder.addAction(builder2.build());
            }
        }
        Intent intent = new Intent(this.context, (Class<?>) NotificationDismissReceiver.class);
        intent.setFlags(268468224);
        intent.putExtra(NOTIFICATION_INTENT_KEY, localNotification.getId());
        intent.putExtra(ACTION_INTENT_KEY, "dismiss");
        LocalNotificationSchedule schedule = localNotification.getSchedule();
        intent.putExtra(NOTIFICATION_IS_REMOVABLE_KEY, schedule == null || schedule.isRemovable());
        builder.setDeleteIntent(PendingIntent.getBroadcast(this.context, localNotification.getId().intValue(), intent, 0));
    }

    private Intent buildIntent(LocalNotification localNotification, String str) {
        Intent launchIntentForPackage;
        if (this.activity != null) {
            launchIntentForPackage = new Intent(this.context, this.activity.getClass());
        } else {
            launchIntentForPackage = this.context.getPackageManager().getLaunchIntentForPackage(this.context.getPackageName());
        }
        launchIntentForPackage.setAction("android.intent.action.MAIN");
        launchIntentForPackage.addCategory("android.intent.category.LAUNCHER");
        launchIntentForPackage.setFlags(603979776);
        launchIntentForPackage.putExtra(NOTIFICATION_INTENT_KEY, localNotification.getId());
        launchIntentForPackage.putExtra(ACTION_INTENT_KEY, str);
        launchIntentForPackage.putExtra(NOTIFICATION_OBJ_INTENT_KEY, localNotification.getSource());
        LocalNotificationSchedule schedule = localNotification.getSchedule();
        launchIntentForPackage.putExtra(NOTIFICATION_IS_REMOVABLE_KEY, schedule == null || schedule.isRemovable());
        return launchIntentForPackage;
    }

    private void triggerScheduledNotification(Notification notification, LocalNotification localNotification) {
        AlarmManager alarmManager = (AlarmManager) this.context.getSystemService(NotificationCompat.CATEGORY_ALARM);
        LocalNotificationSchedule schedule = localNotification.getSchedule();
        Intent intent = new Intent(this.context, (Class<?>) TimedNotificationPublisher.class);
        intent.putExtra(NOTIFICATION_INTENT_KEY, localNotification.getId());
        intent.putExtra(TimedNotificationPublisher.NOTIFICATION_KEY, notification);
        PendingIntent broadcast = PendingIntent.getBroadcast(this.context, localNotification.getId().intValue(), intent, 268435456);
        Date at = schedule.getAt();
        if (at != null) {
            if (at.getTime() < new Date().getTime()) {
                Logger.error(Logger.tags("LN"), "Scheduled time must be *after* current time", null);
                return;
            } else if (schedule.isRepeating()) {
                alarmManager.setRepeating(1, at.getTime(), at.getTime() - new Date().getTime(), broadcast);
                return;
            } else {
                alarmManager.setExact(1, at.getTime(), broadcast);
                return;
            }
        }
        if (schedule.getEvery() != null) {
            Long everyInterval = schedule.getEveryInterval();
            if (everyInterval != null) {
                alarmManager.setRepeating(1, new Date().getTime() + everyInterval.longValue(), everyInterval.longValue(), broadcast);
                return;
            }
            return;
        }
        DateMatch on = schedule.getOn();
        if (on != null) {
            long jNextTrigger = on.nextTrigger(new Date());
            intent.putExtra(TimedNotificationPublisher.CRON_KEY, on.toMatchString());
            alarmManager.setExact(1, jNextTrigger, PendingIntent.getBroadcast(this.context, localNotification.getId().intValue(), intent, 268435456));
            Logger.debug(Logger.tags("LN"), "notification " + localNotification.getId() + " will next fire at " + new SimpleDateFormat("yyyy/MM/dd HH:mm:ss").format(new Date(jNextTrigger)));
        }
    }

    public void cancel(PluginCall pluginCall) {
        List<Integer> localNotificationPendingList = LocalNotification.getLocalNotificationPendingList(pluginCall);
        if (localNotificationPendingList != null) {
            for (Integer num : localNotificationPendingList) {
                dismissVisibleNotification(num.intValue());
                cancelTimerForNotification(num);
                this.storage.deleteNotification(Integer.toString(num.intValue()));
            }
        }
        pluginCall.success();
    }

    private void cancelTimerForNotification(Integer num) {
        PendingIntent broadcast = PendingIntent.getBroadcast(this.context, num.intValue(), new Intent(this.context, (Class<?>) TimedNotificationPublisher.class), 0);
        if (broadcast != null) {
            ((AlarmManager) this.context.getSystemService(NotificationCompat.CATEGORY_ALARM)).cancel(broadcast);
        }
    }

    private void dismissVisibleNotification(int i) {
        NotificationManagerCompat.from(this.context).cancel(i);
    }

    public boolean areNotificationsEnabled() {
        return NotificationManagerCompat.from(this.context).areNotificationsEnabled();
    }

    public Uri getDefaultSoundUrl(Context context) {
        int defaultSound = getDefaultSound(context);
        if (defaultSound != 0) {
            return Uri.parse("android.resource://" + context.getPackageName() + "/" + defaultSound);
        }
        return null;
    }

    private int getDefaultSound(Context context) {
        int i = defaultSoundID;
        if (i != 0) {
            return i;
        }
        String resourceBaseName = AssetUtil.getResourceBaseName(this.config.getString("plugins.LocalNotifications.sound"));
        int resourceID = resourceBaseName != null ? AssetUtil.getResourceID(context, resourceBaseName, "raw") : 0;
        defaultSoundID = resourceID;
        return resourceID;
    }

    private int getDefaultSmallIcon(Context context) {
        int i = defaultSmallIconID;
        if (i != 0) {
            return i;
        }
        String resourceBaseName = AssetUtil.getResourceBaseName(this.config.getString("plugins.LocalNotifications.smallIcon"));
        int resourceID = resourceBaseName != null ? AssetUtil.getResourceID(context, resourceBaseName, "drawable") : 0;
        if (resourceID == 0) {
            resourceID = android.R.drawable.ic_dialog_info;
        }
        defaultSmallIconID = resourceID;
        return resourceID;
    }
}


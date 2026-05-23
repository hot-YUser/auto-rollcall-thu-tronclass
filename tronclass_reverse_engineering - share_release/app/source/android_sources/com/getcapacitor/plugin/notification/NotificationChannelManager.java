package com.getcapacitor.plugin.notification;

import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.content.Context;
import android.graphics.Color;
import android.media.AudioAttributes;
import android.net.Uri;
import android.os.Build;
import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.Logger;
import com.getcapacitor.PluginCall;
import com.onesignal.OneSignalDbContract;
import com.onesignal.outcomes.OSOutcomeConstants;
import java.util.List;
public class NotificationChannelManager {
    private static String CHANNEL_DESCRIPTION = "description";
    private static String CHANNEL_ID = "id";
    private static String CHANNEL_IMPORTANCE = "importance";
    private static String CHANNEL_LIGHT_COLOR = "lightColor";
    private static String CHANNEL_NAME = "name";
    private static String CHANNEL_SOUND = "sound";
    private static String CHANNEL_USE_LIGHTS = "lights";
    private static String CHANNEL_VIBRATE = "vibration";
    private static String CHANNEL_VISIBILITY = "visibility";
    private Context context;
    private NotificationManager notificationManager;

    public NotificationChannelManager(Context context) {
        this.context = context;
        this.notificationManager = (NotificationManager) context.getSystemService(OneSignalDbContract.NotificationTable.TABLE_NAME);
    }

    public NotificationChannelManager(Context context, NotificationManager notificationManager) {
        this.context = context;
        this.notificationManager = notificationManager;
    }

    public void createChannel(PluginCall pluginCall) {
        if (Build.VERSION.SDK_INT >= 26) {
            JSObject jSObject = new JSObject();
            String str = CHANNEL_ID;
            jSObject.put(str, pluginCall.getString(str));
            String str2 = CHANNEL_NAME;
            jSObject.put(str2, pluginCall.getString(str2));
            String str3 = CHANNEL_DESCRIPTION;
            jSObject.put(str3, pluginCall.getString(str3, ""));
            String str4 = CHANNEL_VISIBILITY;
            jSObject.put(str4, (Object) pluginCall.getInt(str4, 1));
            String str5 = CHANNEL_IMPORTANCE;
            jSObject.put(str5, (Object) pluginCall.getInt(str5));
            String str6 = CHANNEL_SOUND;
            jSObject.put(str6, pluginCall.getString(str6, null));
            String str7 = CHANNEL_VIBRATE;
            jSObject.put(str7, (Object) pluginCall.getBoolean(str7, false));
            String str8 = CHANNEL_USE_LIGHTS;
            jSObject.put(str8, (Object) pluginCall.getBoolean(str8, false));
            String str9 = CHANNEL_LIGHT_COLOR;
            jSObject.put(str9, pluginCall.getString(str9, null));
            createChannel(jSObject);
            pluginCall.success();
            return;
        }
        pluginCall.unavailable();
    }

    public void createChannel(JSObject jSObject) {
        if (Build.VERSION.SDK_INT >= 26) {
            NotificationChannel notificationChannel = new NotificationChannel(jSObject.getString(CHANNEL_ID), jSObject.getString(CHANNEL_NAME), jSObject.getInteger(CHANNEL_IMPORTANCE).intValue());
            notificationChannel.setDescription(jSObject.getString(CHANNEL_DESCRIPTION));
            notificationChannel.setLockscreenVisibility(jSObject.getInteger(CHANNEL_VISIBILITY).intValue());
            notificationChannel.enableVibration(jSObject.getBool(CHANNEL_VIBRATE).booleanValue());
            notificationChannel.enableLights(jSObject.getBool(CHANNEL_USE_LIGHTS).booleanValue());
            String string = jSObject.getString(CHANNEL_LIGHT_COLOR);
            if (string != null) {
                try {
                    notificationChannel.setLightColor(Color.parseColor(string));
                } catch (IllegalArgumentException unused) {
                    Logger.error(Logger.tags("NotificationChannel"), "Invalid color provided for light color.", null);
                }
            }
            String string2 = jSObject.getString(CHANNEL_SOUND, null);
            if (string2 != null && !string2.isEmpty()) {
                if (string2.contains(".")) {
                    string2 = string2.substring(0, string2.lastIndexOf(46));
                }
                notificationChannel.setSound(Uri.parse("android.resource://" + this.context.getPackageName() + "/raw/" + string2), new AudioAttributes.Builder().setContentType(4).setUsage(5).build());
            }
            this.notificationManager.createNotificationChannel(notificationChannel);
        }
    }

    public void deleteChannel(PluginCall pluginCall) {
        if (Build.VERSION.SDK_INT >= 26) {
            this.notificationManager.deleteNotificationChannel(pluginCall.getString(OSOutcomeConstants.OUTCOME_ID));
            pluginCall.success();
            return;
        }
        pluginCall.unavailable();
    }

    public void listChannels(PluginCall pluginCall) {
        if (Build.VERSION.SDK_INT >= 26) {
            List<NotificationChannel> notificationChannels = this.notificationManager.getNotificationChannels();
            JSArray jSArray = new JSArray();
            for (NotificationChannel notificationChannel : notificationChannels) {
                JSObject jSObject = new JSObject();
                jSObject.put(CHANNEL_ID, notificationChannel.getId());
                jSObject.put(CHANNEL_NAME, (Object) notificationChannel.getName());
                jSObject.put(CHANNEL_DESCRIPTION, notificationChannel.getDescription());
                jSObject.put(CHANNEL_IMPORTANCE, notificationChannel.getImportance());
                jSObject.put(CHANNEL_VISIBILITY, notificationChannel.getLockscreenVisibility());
                jSObject.put(CHANNEL_SOUND, (Object) notificationChannel.getSound());
                jSObject.put(CHANNEL_VIBRATE, notificationChannel.shouldVibrate());
                jSObject.put(CHANNEL_USE_LIGHTS, notificationChannel.shouldShowLights());
                jSObject.put(CHANNEL_LIGHT_COLOR, String.format("#%06X", Integer.valueOf(16777215 & notificationChannel.getLightColor())));
                Logger.debug(Logger.tags("NotificationChannel"), "visibility " + notificationChannel.getLockscreenVisibility());
                Logger.debug(Logger.tags("NotificationChannel"), "importance " + notificationChannel.getImportance());
                jSArray.put(jSObject);
            }
            JSObject jSObject2 = new JSObject();
            jSObject2.put("channels", (Object) jSArray);
            pluginCall.success(jSObject2);
            return;
        }
        pluginCall.unavailable();
    }
}


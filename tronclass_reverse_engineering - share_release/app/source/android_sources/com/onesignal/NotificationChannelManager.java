package com.onesignal;

import android.app.NotificationChannel;
import android.app.NotificationChannelGroup;
import android.app.NotificationManager;
import android.content.Context;
import android.net.Uri;
import android.os.Build;
import android.os.DeadSystemException;
import androidx.core.app.NotificationChannelCompat;
import com.onesignal.OneSignal;
import com.onesignal.language.LanguageContext;
import com.onesignal.outcomes.OSOutcomeConstants;
import java.math.BigInteger;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.regex.Pattern;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
class NotificationChannelManager {
    private static final String CHANNEL_PREFIX = "OS_";
    private static final String DEFAULT_CHANNEL_ID = "fcm_fallback_notification_channel";
    private static final String RESTORE_CHANNEL_ID = "restored_OS_notifications";
    private static final Pattern hexPattern = Pattern.compile("^([A-Fa-f0-9]{8})$");

    private static int priorityToImportance(int i) {
        if (i > 9) {
            return 5;
        }
        if (i > 7) {
            return 4;
        }
        if (i > 5) {
            return 3;
        }
        if (i > 3) {
            return 2;
        }
        return i > 1 ? 1 : 0;
    }

    NotificationChannelManager() {
    }

    static String createNotificationChannel(OSNotificationGenerationJob oSNotificationGenerationJob) {
        if (Build.VERSION.SDK_INT < 26) {
            return DEFAULT_CHANNEL_ID;
        }
        Context context = oSNotificationGenerationJob.getContext();
        JSONObject jsonPayload = oSNotificationGenerationJob.getJsonPayload();
        NotificationManager notificationManager = OneSignalNotificationManager.getNotificationManager(context);
        if (oSNotificationGenerationJob.isRestoring()) {
            return createRestoreChannel(notificationManager);
        }
        if (jsonPayload.has("oth_chnl")) {
            String strOptString = jsonPayload.optString("oth_chnl");
            if (notificationManager.getNotificationChannel(strOptString) != null) {
                return strOptString;
            }
        }
        if (!jsonPayload.has("chnl")) {
            return createDefaultChannel(notificationManager);
        }
        try {
            return createChannel(context, notificationManager, jsonPayload);
        } catch (JSONException e) {
            OneSignal.Log(OneSignal.LOG_LEVEL.ERROR, "Could not create notification channel due to JSON payload error!", e);
            return DEFAULT_CHANNEL_ID;
        }
    }

    /* high-level source view WARN: Removed duplicated region for block: B:15:0x0046  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    private static String createChannel(Context context, NotificationManager notificationManager, JSONObject jSONObject) throws JSONException {
        JSONObject jSONObject2;
        JSONObject jSONObjectOptJSONObject;
        long[] vibrationPattern;
        Object objOpt = jSONObject.opt("chnl");
        if (objOpt instanceof String) {
            jSONObject2 = new JSONObject((String) objOpt);
        } else {
            jSONObject2 = (JSONObject) objOpt;
        }
        String str = DEFAULT_CHANNEL_ID;
        String strOptString = jSONObject2.optString(OSOutcomeConstants.OUTCOME_ID, DEFAULT_CHANNEL_ID);
        if (!strOptString.equals(NotificationChannelCompat.DEFAULT_CHANNEL_ID)) {
            str = strOptString;
        }
        if (jSONObject2.has("langs")) {
            JSONObject jSONObject3 = jSONObject2.getJSONObject("langs");
            String language = LanguageContext.getInstance().getLanguage();
            jSONObjectOptJSONObject = jSONObject3.has(language) ? jSONObject3.optJSONObject(language) : jSONObject2;
        }
        NotificationChannel notificationChannel = new NotificationChannel(str, jSONObjectOptJSONObject.optString("nm", "Miscellaneous"), priorityToImportance(jSONObject.optInt("pri", 6)));
        notificationChannel.setDescription(jSONObjectOptJSONObject.optString("dscr", null));
        if (jSONObject2.has("grp_id")) {
            String strOptString2 = jSONObject2.optString("grp_id");
            notificationManager.createNotificationChannelGroup(new NotificationChannelGroup(strOptString2, jSONObjectOptJSONObject.optString("grp_nm")));
            notificationChannel.setGroup(strOptString2);
        }
        if (jSONObject.has("ledc")) {
            String strOptString3 = jSONObject.optString("ledc");
            if (!hexPattern.matcher(strOptString3).matches()) {
                OneSignal.Log(OneSignal.LOG_LEVEL.WARN, "OneSignal LED Color Settings: ARGB Hex value incorrect format (E.g: FF9900FF)");
                strOptString3 = "FFFFFFFF";
            }
            try {
                notificationChannel.setLightColor(new BigInteger(strOptString3, 16).intValue());
            } catch (Throwable th) {
                OneSignal.Log(OneSignal.LOG_LEVEL.ERROR, "Couldn't convert ARGB Hex value to BigInteger:", th);
            }
        }
        notificationChannel.enableLights(jSONObject.optInt("led", 1) == 1);
        if (jSONObject.has("vib_pt") && (vibrationPattern = OSUtils.parseVibrationPattern(jSONObject)) != null) {
            notificationChannel.setVibrationPattern(vibrationPattern);
        }
        notificationChannel.enableVibration(jSONObject.optInt("vib", 1) == 1);
        if (jSONObject.has("sound")) {
            String strOptString4 = jSONObject.optString("sound", null);
            Uri soundUri = OSUtils.getSoundUri(context, strOptString4);
            if (soundUri != null) {
                notificationChannel.setSound(soundUri, null);
            } else if ("null".equals(strOptString4) || "nil".equals(strOptString4)) {
                notificationChannel.setSound(null, null);
            }
        }
        notificationChannel.setLockscreenVisibility(jSONObject.optInt("vis", 0));
        notificationChannel.setShowBadge(jSONObject.optInt("bdg", 1) == 1);
        notificationChannel.setBypassDnd(jSONObject.optInt("bdnd", 0) == 1);
        OneSignal.onesignalLog(OneSignal.LOG_LEVEL.VERBOSE, "Creating notification channel with channel:\n" + notificationChannel.toString());
        try {
            notificationManager.createNotificationChannel(notificationChannel);
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
        }
        return str;
    }

    private static String createDefaultChannel(NotificationManager notificationManager) {
        NotificationChannel notificationChannel = new NotificationChannel(DEFAULT_CHANNEL_ID, "Miscellaneous", 3);
        notificationChannel.enableLights(true);
        notificationChannel.enableVibration(true);
        notificationManager.createNotificationChannel(notificationChannel);
        return DEFAULT_CHANNEL_ID;
    }

    private static String createRestoreChannel(NotificationManager notificationManager) {
        notificationManager.createNotificationChannel(new NotificationChannel(RESTORE_CHANNEL_ID, "Restored", 2));
        return RESTORE_CHANNEL_ID;
    }

    static void processChannelList(Context context, JSONArray jSONArray) {
        List<NotificationChannel> channelList;
        if (Build.VERSION.SDK_INT < 26 || jSONArray == null || jSONArray.length() == 0) {
            return;
        }
        NotificationManager notificationManager = OneSignalNotificationManager.getNotificationManager(context);
        HashSet hashSet = new HashSet();
        int length = jSONArray.length();
        for (int i = 0; i < length; i++) {
            try {
                hashSet.add(createChannel(context, notificationManager, jSONArray.getJSONObject(i)));
            } catch (JSONException e) {
                OneSignal.Log(OneSignal.LOG_LEVEL.ERROR, "Could not create notification channel due to JSON payload error!", e);
            }
        }
        if (hashSet.isEmpty() || (channelList = getChannelList(notificationManager)) == null) {
            return;
        }
        Iterator<NotificationChannel> it = channelList.iterator();
        while (it.hasNext()) {
            String id = it.next().getId();
            if (id.startsWith(CHANNEL_PREFIX) && !hashSet.contains(id)) {
                notificationManager.deleteNotificationChannel(id);
            }
        }
    }

    private static List<NotificationChannel> getChannelList(NotificationManager notificationManager) {
        try {
            return notificationManager.getNotificationChannels();
        } catch (NullPointerException e) {
            OneSignal.onesignalLog(OneSignal.LOG_LEVEL.ERROR, "Error when trying to delete notification channel: " + e.getMessage());
            return null;
        } catch (RuntimeException e2) {
            if (e2.getCause() instanceof DeadSystemException) {
                return null;
            }
            throw e2;
        }
    }
}


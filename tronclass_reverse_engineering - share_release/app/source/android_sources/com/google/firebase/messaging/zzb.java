package com.google.firebase.messaging;

import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;
import android.content.res.Resources;
import android.graphics.Color;
import android.graphics.drawable.AdaptiveIconDrawable;
import android.media.RingtoneManager;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.SystemClock;
import android.text.TextUtils;
import android.util.Log;
import androidx.core.app.NotificationCompat;
import androidx.core.content.ContextCompat;
import com.getcapacitor.plugin.notification.LocalNotificationManager;
import java.util.concurrent.atomic.AtomicInteger;
import org.opencv.imgproc.Imgproc;
import org.opencv.videoio.Videoio;
public final class zzb {
    private static final AtomicInteger zza = new AtomicInteger((int) SystemClock.elapsedRealtime());

    /* high-level source view WARN: Multi-variable type inference failed */
    /* high-level source view WARN: Type inference failed for: r9v31 */
    /* high-level source view WARN: Type inference failed for: r9v49 */
    /* high-level source view WARN: Type inference failed for: r9v50 */
    static zza zza(Context context, zzn zznVar) {
        Intent intent;
        PendingIntent activity;
        Bundle bundleZza = zza(context.getPackageManager(), context.getPackageName());
        String packageName = context.getPackageName();
        String strZzb = zzb(context, zznVar.zza("gcm.n.android_channel_id"), bundleZza);
        Resources resources = context.getResources();
        PackageManager packageManager = context.getPackageManager();
        NotificationCompat.Builder builder = new NotificationCompat.Builder(context, strZzb);
        CharSequence charSequenceZza = zznVar.zza(resources, packageName, "gcm.n.title");
        if (!TextUtils.isEmpty(charSequenceZza)) {
            builder.setContentTitle(charSequenceZza);
        }
        CharSequence charSequenceZza2 = zznVar.zza(resources, packageName, "gcm.n.body");
        if (!TextUtils.isEmpty(charSequenceZza2)) {
            builder.setContentText(charSequenceZza2);
            builder.setStyle(new NotificationCompat.BigTextStyle().bigText(charSequenceZza2));
        }
        builder.setSmallIcon(zza(packageManager, resources, packageName, zznVar.zza("gcm.n.icon"), bundleZza));
        String strZzb2 = zznVar.zzb();
        Integer num = null;
        Uri defaultUri = TextUtils.isEmpty(strZzb2) ? null : (LocalNotificationManager.DEFAULT_NOTIFICATION_CHANNEL_ID.equals(strZzb2) || resources.getIdentifier(strZzb2, "raw", packageName) == 0) ? RingtoneManager.getDefaultUri(2) : Uri.parse(new StringBuilder(String.valueOf(packageName).length() + 24 + String.valueOf(strZzb2).length()).append("android.resource://").append(packageName).append("/raw/").append(strZzb2).toString());
        if (defaultUri != null) {
            builder.setSound(defaultUri);
        }
        String strZza = zznVar.zza("gcm.n.click_action");
        if (TextUtils.isEmpty(strZza)) {
            Uri uriZza = zznVar.zza();
            if (uriZza != null) {
                intent = new Intent("android.intent.action.VIEW");
                intent.setPackage(packageName);
                intent.setData(uriZza);
            } else {
                Intent launchIntentForPackage = packageManager.getLaunchIntentForPackage(packageName);
                if (launchIntentForPackage == null) {
                    Log.w("FirebaseMessaging", "No activity found to launch app");
                }
                intent = launchIntentForPackage;
            }
        } else {
            intent = new Intent(strZza);
            intent.setPackage(packageName);
            intent.setFlags(268435456);
        }
        if (intent == null) {
            activity = null;
        } else {
            intent.addFlags(67108864);
            intent.putExtras(zznVar.zze());
            activity = PendingIntent.getActivity(context, zza.incrementAndGet(), intent, Videoio.CAP_OPENNI_IMAGE_GENERATOR);
            if (zznVar.zzb("google.c.a.e")) {
                activity = zza(context, new Intent("com.google.firebase.messaging.NOTIFICATION_OPEN").putExtras(zznVar.zzf()).putExtra("pending_intent", activity));
            }
        }
        builder.setContentIntent(activity);
        PendingIntent pendingIntentZza = !zznVar.zzb("google.c.a.e") ? null : zza(context, new Intent("com.google.firebase.messaging.NOTIFICATION_DISMISS").putExtras(zznVar.zzf()));
        if (pendingIntentZza != null) {
            builder.setDeleteIntent(pendingIntentZza);
        }
        Integer numZza = zza(context, zznVar.zza("gcm.n.color"), bundleZza);
        if (numZza != null) {
            builder.setColor(numZza.intValue());
        }
        builder.setAutoCancel(!zznVar.zzb("gcm.n.sticky"));
        builder.setLocalOnly(zznVar.zzb("gcm.n.local_only"));
        CharSequence charSequenceZza3 = zznVar.zza("gcm.n.ticker");
        if (charSequenceZza3 != null) {
            builder.setTicker(charSequenceZza3);
        }
        Integer numZzc = zznVar.zzc("gcm.n.notification_priority");
        if (numZzc == null) {
            numZzc = null;
        } else if (numZzc.intValue() < -2 || numZzc.intValue() > 2) {
            String strValueOf = String.valueOf(numZzc);
            Log.w("FirebaseMessaging", new StringBuilder(String.valueOf(strValueOf).length() + 72).append("notificationPriority is invalid ").append(strValueOf).append(". Skipping setting notificationPriority.").toString());
            numZzc = null;
        }
        if (numZzc != null) {
            builder.setPriority(numZzc.intValue());
        }
        Integer numZzc2 = zznVar.zzc("gcm.n.visibility");
        if (numZzc2 == null) {
            numZzc2 = null;
        } else if (numZzc2.intValue() < -1 || numZzc2.intValue() > 1) {
            String strValueOf2 = String.valueOf(numZzc2);
            Log.w("NotificationParams", new StringBuilder(String.valueOf(strValueOf2).length() + 53).append("visibility is invalid: ").append(strValueOf2).append(". Skipping setting visibility.").toString());
            numZzc2 = null;
        }
        if (numZzc2 != null) {
            builder.setVisibility(numZzc2.intValue());
        }
        Integer numZzc3 = zznVar.zzc("gcm.n.notification_count");
        if (numZzc3 != null) {
            if (numZzc3.intValue() < 0) {
                String strValueOf3 = String.valueOf(numZzc3);
                Log.w("FirebaseMessaging", new StringBuilder(String.valueOf(strValueOf3).length() + 67).append("notificationCount is invalid: ").append(strValueOf3).append(". Skipping setting notificationCount.").toString());
            } else {
                num = numZzc3;
            }
        }
        if (num != null) {
            builder.setNumber(num.intValue());
        }
        Long lZzd = zznVar.zzd("gcm.n.event_time");
        if (lZzd != null) {
            builder.setShowWhen(true);
            builder.setWhen(lZzd.longValue());
        }
        long[] jArrZzc = zznVar.zzc();
        if (jArrZzc != null) {
            builder.setVibrate(jArrZzc);
        }
        int[] iArrZzd = zznVar.zzd();
        if (iArrZzd != null) {
            builder.setLights(iArrZzd[0], iArrZzd[1], iArrZzd[2]);
        }
        boolean zZzb = zznVar.zzb("gcm.n.default_sound");
        ?? r9 = zZzb;
        if (zznVar.zzb("gcm.n.default_vibrate_timings")) {
            r9 = (zZzb ? 1 : 0) | 2;
        }
        int i = r9;
        if (zznVar.zzb("gcm.n.default_light_settings")) {
            i = (r9 == true ? 1 : 0) | 4;
        }
        builder.setDefaults(i);
        String strZza2 = zznVar.zza("gcm.n.tag");
        if (TextUtils.isEmpty(strZza2)) {
            strZza2 = new StringBuilder(37).append("FCM-Notification:").append(SystemClock.uptimeMillis()).toString();
        }
        return new zza(builder, strZza2, 0);
    }

    private static boolean zza(Resources resources, int i) {
        if (Build.VERSION.SDK_INT != 26) {
            return true;
        }
        try {
            if (!(resources.getDrawable(i, null) instanceof AdaptiveIconDrawable)) {
                return true;
            }
            Log.e("FirebaseMessaging", new StringBuilder(77).append("Adaptive icons cannot be used in notifications. Ignoring icon id: ").append(i).toString());
            return false;
        } catch (Resources.NotFoundException unused) {
            Log.e("FirebaseMessaging", new StringBuilder(66).append("Couldn't find resource ").append(i).append(", treating it as an invalid icon").toString());
            return false;
        }
    }

    private static int zza(PackageManager packageManager, Resources resources, String str, String str2, Bundle bundle) {
        if (!TextUtils.isEmpty(str2)) {
            int identifier = resources.getIdentifier(str2, "drawable", str);
            if (identifier != 0 && zza(resources, identifier)) {
                return identifier;
            }
            int identifier2 = resources.getIdentifier(str2, "mipmap", str);
            if (identifier2 != 0 && zza(resources, identifier2)) {
                return identifier2;
            }
            Log.w("FirebaseMessaging", new StringBuilder(String.valueOf(str2).length() + 61).append("Icon resource ").append(str2).append(" not found. Notification will use default icon.").toString());
        }
        int i = bundle.getInt("com.google.firebase.messaging.default_notification_icon", 0);
        if (i == 0 || !zza(resources, i)) {
            try {
                i = packageManager.getApplicationInfo(str, 0).icon;
            } catch (PackageManager.NameNotFoundException e) {
                String strValueOf = String.valueOf(e);
                Log.w("FirebaseMessaging", new StringBuilder(String.valueOf(strValueOf).length() + 35).append("Couldn't get own application info: ").append(strValueOf).toString());
            }
        }
        return (i == 0 || !zza(resources, i)) ? android.R.drawable.sym_def_app_icon : i;
    }

    private static Integer zza(Context context, String str, Bundle bundle) {
        if (!TextUtils.isEmpty(str)) {
            try {
                return Integer.valueOf(Color.parseColor(str));
            } catch (IllegalArgumentException unused) {
                Log.w("FirebaseMessaging", new StringBuilder(String.valueOf(str).length() + 56).append("Color is invalid: ").append(str).append(". Notification will use default color.").toString());
            }
        }
        int i = bundle.getInt("com.google.firebase.messaging.default_notification_color", 0);
        if (i == 0) {
            return null;
        }
        try {
            return Integer.valueOf(ContextCompat.getColor(context, i));
        } catch (Resources.NotFoundException unused2) {
            Log.w("FirebaseMessaging", "Cannot find the color resource referenced in AndroidManifest.");
            return null;
        }
    }

    private static Bundle zza(PackageManager packageManager, String str) {
        try {
            ApplicationInfo applicationInfo = packageManager.getApplicationInfo(str, 128);
            if (applicationInfo != null && applicationInfo.metaData != null) {
                return applicationInfo.metaData;
            }
        } catch (PackageManager.NameNotFoundException e) {
            String strValueOf = String.valueOf(e);
            Log.w("FirebaseMessaging", new StringBuilder(String.valueOf(strValueOf).length() + 35).append("Couldn't get own application info: ").append(strValueOf).toString());
        }
        return Bundle.EMPTY;
    }

    private static String zzb(Context context, String str, Bundle bundle) {
        if (Build.VERSION.SDK_INT < 26) {
            return null;
        }
        try {
            if (context.getPackageManager().getApplicationInfo(context.getPackageName(), 0).targetSdkVersion < 26) {
                return null;
            }
            NotificationManager notificationManager = (NotificationManager) context.getSystemService(NotificationManager.class);
            if (!TextUtils.isEmpty(str)) {
                if (notificationManager.getNotificationChannel(str) != null) {
                    return str;
                }
                Log.w("FirebaseMessaging", new StringBuilder(String.valueOf(str).length() + Imgproc.COLOR_YUV2BGRA_YVYU).append("Notification Channel requested (").append(str).append(") has not been created by the app. Manifest configuration, or default, value will be used.").toString());
            }
            String string = bundle.getString("com.google.firebase.messaging.default_notification_channel_id");
            if (!TextUtils.isEmpty(string)) {
                if (notificationManager.getNotificationChannel(string) != null) {
                    return string;
                }
                Log.w("FirebaseMessaging", "Notification Channel set in AndroidManifest.xml has not been created by the app. Default value will be used.");
            } else {
                Log.w("FirebaseMessaging", "Missing Default Notification Channel metadata in AndroidManifest. Default value will be used.");
            }
            if (notificationManager.getNotificationChannel("fcm_fallback_notification_channel") == null) {
                notificationManager.createNotificationChannel(new NotificationChannel("fcm_fallback_notification_channel", context.getString(context.getResources().getIdentifier("fcm_fallback_notification_channel_label", "string", context.getPackageName())), 3));
            }
            return "fcm_fallback_notification_channel";
        } catch (PackageManager.NameNotFoundException unused) {
            return null;
        }
    }

    private static PendingIntent zza(Context context, Intent intent) {
        return PendingIntent.getBroadcast(context, zza.incrementAndGet(), new Intent("com.google.firebase.MESSAGING_EVENT").setComponent(new ComponentName(context, "com.google.firebase.iid.FirebaseInstanceIdReceiver")).putExtra("wrapped_intent", intent), Videoio.CAP_OPENNI_IMAGE_GENERATOR);
    }
}


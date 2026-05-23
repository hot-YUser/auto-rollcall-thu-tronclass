package com.google.firebase.messaging;

import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.text.TextUtils;
import android.util.Log;
import com.google.android.datatransport.TransportFactory;
import com.google.android.gms.tasks.Task;
import com.google.firebase.FirebaseApp;
import com.google.firebase.iid.FirebaseInstanceId;
import java.util.regex.Pattern;
public class FirebaseMessaging {
    public static final String INSTANCE_ID_SCOPE = "FCM";
    static TransportFactory zza;
    private static final Pattern zzb = Pattern.compile("[a-zA-Z0-9-_.~%]{1,900}");
    private final Context zzc;
    private final FirebaseInstanceId zzd;

    public static synchronized FirebaseMessaging getInstance() {
        return getInstance(FirebaseApp.getInstance());
    }

    static synchronized FirebaseMessaging getInstance(FirebaseApp firebaseApp) {
        return (FirebaseMessaging) firebaseApp.get(FirebaseMessaging.class);
    }

    FirebaseMessaging(FirebaseApp firebaseApp, FirebaseInstanceId firebaseInstanceId, TransportFactory transportFactory) {
        this.zzc = firebaseApp.getApplicationContext();
        this.zzd = firebaseInstanceId;
        zza = transportFactory;
    }

    public boolean isAutoInitEnabled() {
        return this.zzd.zzh();
    }

    public void setAutoInitEnabled(boolean z) {
        this.zzd.zzb(z);
    }

    public boolean deliveryMetricsExportToBigQueryEnabled() {
        return zzo.zza();
    }

    public void setDeliveryMetricsExportToBigQuery(boolean z) {
        zzo.zza(z);
    }

    public Task<Void> subscribeToTopic(String str) {
        if (str != null && str.startsWith("/topics/")) {
            Log.w("FirebaseMessaging", "Format /topics/topic-name is deprecated. Only 'topic-name' should be used in subscribeToTopic.");
            str = str.substring(8);
        }
        if (str == null || !zzb.matcher(str).matches()) {
            throw new IllegalArgumentException(new StringBuilder(String.valueOf(str).length() + 78).append("Invalid topic name: ").append(str).append(" does not match the allowed format [a-zA-Z0-9-_.~%]{1,900}").toString());
        }
        FirebaseInstanceId firebaseInstanceId = this.zzd;
        String strValueOf = String.valueOf("S!");
        String strValueOf2 = String.valueOf(str);
        return firebaseInstanceId.zza(strValueOf2.length() != 0 ? strValueOf.concat(strValueOf2) : new String(strValueOf));
    }

    public Task<Void> unsubscribeFromTopic(String str) {
        if (str != null && str.startsWith("/topics/")) {
            Log.w("FirebaseMessaging", "Format /topics/topic-name is deprecated. Only 'topic-name' should be used in unsubscribeFromTopic.");
            str = str.substring(8);
        }
        if (str == null || !zzb.matcher(str).matches()) {
            throw new IllegalArgumentException(new StringBuilder(String.valueOf(str).length() + 78).append("Invalid topic name: ").append(str).append(" does not match the allowed format [a-zA-Z0-9-_.~%]{1,900}").toString());
        }
        FirebaseInstanceId firebaseInstanceId = this.zzd;
        String strValueOf = String.valueOf("U!");
        String strValueOf2 = String.valueOf(str);
        return firebaseInstanceId.zza(strValueOf2.length() != 0 ? strValueOf.concat(strValueOf2) : new String(strValueOf));
    }

    public void send(RemoteMessage remoteMessage) {
        if (TextUtils.isEmpty(remoteMessage.getTo())) {
            throw new IllegalArgumentException("Missing 'to'");
        }
        Intent intent = new Intent("com.google.android.gcm.intent.SEND");
        Intent intent2 = new Intent();
        intent2.setPackage("com.google.example.invalidpackage");
        intent.putExtra("app", PendingIntent.getBroadcast(this.zzc, 0, intent2, 0));
        intent.setPackage("com.google.android.gms");
        intent.putExtras(remoteMessage.zza);
        this.zzc.sendOrderedBroadcast(intent, "com.google.android.gtalkservice.permission.GTALK_SERVICE");
    }
}


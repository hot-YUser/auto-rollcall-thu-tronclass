package com.google.firebase.iid;

import android.content.Context;
import android.content.SharedPreferences;
import android.util.Log;
import androidx.collection.ArrayMap;
import androidx.core.content.ContextCompat;
import java.io.File;
import java.io.IOException;
import java.util.Map;
final class zzay {
    private final SharedPreferences zza;
    private final Context zzb;
    private final Map<String, Long> zzc = new ArrayMap();

    public zzay(Context context) {
        this.zzb = context;
        this.zza = context.getSharedPreferences("com.google.android.gms.appid", 0);
        File file = new File(ContextCompat.getNoBackupFilesDir(context), "com.google.android.gms.appid-no-backup");
        if (file.exists()) {
            return;
        }
        try {
            if (!file.createNewFile() || zzc()) {
                return;
            }
            Log.i("FirebaseInstanceId", "App restored, clearing state");
            zzb();
            FirebaseInstanceId.getInstance().zze();
        } catch (IOException e) {
            if (Log.isLoggable("FirebaseInstanceId", 3)) {
                String strValueOf = String.valueOf(e.getMessage());
                Log.d("FirebaseInstanceId", strValueOf.length() != 0 ? "Error creating file in no backup dir: ".concat(strValueOf) : new String("Error creating file in no backup dir: "));
            }
        }
    }

    public final synchronized String zza() {
        return this.zza.getString("topic_operation_queue", "");
    }

    public final synchronized void zza(String str) {
        this.zza.edit().putString("topic_operation_queue", str).apply();
    }

    private final synchronized boolean zzc() {
        return this.zza.getAll().isEmpty();
    }

    private static String zzc(String str, String str2, String str3) {
        return new StringBuilder(String.valueOf(str).length() + 4 + String.valueOf(str2).length() + String.valueOf(str3).length()).append(str).append("|T|").append(str2).append("|").append(str3).toString();
    }

    private static String zza(String str, String str2) {
        return new StringBuilder(String.valueOf(str).length() + 3 + String.valueOf(str2).length()).append(str).append("|S|").append(str2).toString();
    }

    public final synchronized void zzb() {
        this.zzc.clear();
        this.zza.edit().clear().commit();
    }

    public final synchronized zzbb zza(String str, String str2, String str3) {
        return zzbb.zza(this.zza.getString(zzc(str, str2, str3), null));
    }

    public final synchronized void zza(String str, String str2, String str3, String str4, String str5) {
        String strZza = zzbb.zza(str4, str5, System.currentTimeMillis());
        if (strZza == null) {
            return;
        }
        SharedPreferences.Editor editorEdit = this.zza.edit();
        editorEdit.putString(zzc(str, str2, str3), strZza);
        editorEdit.commit();
    }

    public final synchronized void zzb(String str, String str2, String str3) {
        String strZzc = zzc(str, str2, str3);
        SharedPreferences.Editor editorEdit = this.zza.edit();
        editorEdit.remove(strZzc);
        editorEdit.commit();
    }

    public final synchronized long zzb(String str) {
        Long l = this.zzc.get(str);
        if (l != null) {
            return l.longValue();
        }
        return zze(str);
    }

    private final long zze(String str) {
        String string = this.zza.getString(zza(str, "cre"), null);
        if (string == null) {
            return 0L;
        }
        try {
            return Long.parseLong(string);
        } catch (NumberFormatException unused) {
            return 0L;
        }
    }

    public final synchronized long zzc(String str) {
        long jCurrentTimeMillis;
        jCurrentTimeMillis = System.currentTimeMillis();
        if (!this.zza.contains(zza(str, "cre"))) {
            SharedPreferences.Editor editorEdit = this.zza.edit();
            editorEdit.putString(zza(str, "cre"), String.valueOf(jCurrentTimeMillis));
            editorEdit.commit();
        } else {
            jCurrentTimeMillis = zze(str);
        }
        this.zzc.put(str, Long.valueOf(jCurrentTimeMillis));
        return jCurrentTimeMillis;
    }

    public final synchronized void zzd(String str) {
        String strConcat = String.valueOf(str).concat("|T|");
        SharedPreferences.Editor editorEdit = this.zza.edit();
        for (String str2 : this.zza.getAll().keySet()) {
            if (str2.startsWith(strConcat)) {
                editorEdit.remove(str2);
            }
        }
        editorEdit.commit();
    }
}


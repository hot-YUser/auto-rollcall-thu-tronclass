package com.google.firebase.iid;

import android.content.Context;
import android.os.Bundle;
import android.util.Log;
import com.google.android.gms.common.util.concurrent.NamedThreadFactory;
import com.google.android.gms.tasks.Task;
import java.util.concurrent.ScheduledExecutorService;
public final class zzad {
    private static zzad zza;
    private final Context zzb;
    private final ScheduledExecutorService zzc;
    private zzaf zzd = new zzaf(this);
    private int zze = 1;

    public static synchronized zzad zza(Context context) {
        if (zza == null) {
            zza = new zzad(context, com.google.android.gms.internal.firebase_messaging.zza.zza().zza(1, new NamedThreadFactory("MessengerIpcClient"), com.google.android.gms.internal.firebase_messaging.zzf.zzb));
        }
        return zza;
    }

    private zzad(Context context, ScheduledExecutorService scheduledExecutorService) {
        this.zzc = scheduledExecutorService;
        this.zzb = context.getApplicationContext();
    }

    public final Task<Void> zza(int i, Bundle bundle) {
        return zza(new zzan(zza(), 2, bundle));
    }

    public final Task<Bundle> zzb(int i, Bundle bundle) {
        return zza(new zzao(zza(), 1, bundle));
    }

    private final synchronized <T> Task<T> zza(zzam<T> zzamVar) {
        if (Log.isLoggable("MessengerIpcClient", 3)) {
            String strValueOf = String.valueOf(zzamVar);
            Log.d("MessengerIpcClient", new StringBuilder(String.valueOf(strValueOf).length() + 9).append("Queueing ").append(strValueOf).toString());
        }
        if (!this.zzd.zza((zzam<?>) zzamVar)) {
            zzaf zzafVar = new zzaf(this);
            this.zzd = zzafVar;
            zzafVar.zza((zzam<?>) zzamVar);
        }
        return zzamVar.zzb.getTask();
    }

    private final synchronized int zza() {
        int i;
        i = this.zze;
        this.zze = i + 1;
        return i;
    }
}


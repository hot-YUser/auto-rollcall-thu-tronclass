package com.google.firebase.iid;

import android.os.Bundle;
import android.util.Log;
import com.google.android.gms.tasks.TaskCompletionSource;
abstract class zzam<T> {
    final int zza;
    final TaskCompletionSource<T> zzb = new TaskCompletionSource<>();
    final int zzc;
    final Bundle zzd;

    zzam(int i, int i2, Bundle bundle) {
        this.zza = i;
        this.zzc = i2;
        this.zzd = bundle;
    }

    abstract void zza(Bundle bundle);

    abstract boolean zza();

    final void zza(T t) {
        if (Log.isLoggable("MessengerIpcClient", 3)) {
            String strValueOf = String.valueOf(this);
            String strValueOf2 = String.valueOf(t);
            Log.d("MessengerIpcClient", new StringBuilder(String.valueOf(strValueOf).length() + 16 + String.valueOf(strValueOf2).length()).append("Finishing ").append(strValueOf).append(" with ").append(strValueOf2).toString());
        }
        this.zzb.setResult(t);
    }

    final void zza(zzap zzapVar) {
        if (Log.isLoggable("MessengerIpcClient", 3)) {
            String strValueOf = String.valueOf(this);
            String strValueOf2 = String.valueOf(zzapVar);
            Log.d("MessengerIpcClient", new StringBuilder(String.valueOf(strValueOf).length() + 14 + String.valueOf(strValueOf2).length()).append("Failing ").append(strValueOf).append(" with ").append(strValueOf2).toString());
        }
        this.zzb.setException(zzapVar);
    }

    public String toString() {
        int i = this.zzc;
        int i2 = this.zza;
        return new StringBuilder(55).append("Request { what=").append(i).append(" id=").append(i2).append(" oneWay=").append(zza()).append("}").toString();
    }
}


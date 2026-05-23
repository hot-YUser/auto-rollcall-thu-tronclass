package com.google.firebase.iid;

import android.content.Intent;
import android.util.Log;
import com.google.android.gms.tasks.Task;
import com.google.android.gms.tasks.TaskCompletionSource;
final class zzbi {
    final Intent zza;
    private final TaskCompletionSource<Void> zzb = new TaskCompletionSource<>();

    zzbi(Intent intent) {
        this.zza = intent;
    }

    final Task<Void> zza() {
        return this.zzb.getTask();
    }

    final void zzb() {
        this.zzb.trySetResult(null);
    }

    final /* synthetic */ void zzc() {
        String action = this.zza.getAction();
        Log.w("FirebaseInstanceId", new StringBuilder(String.valueOf(action).length() + 61).append("Service took too long to process intent: ").append(action).append(" App may get closed.").toString());
        zzb();
    }
}


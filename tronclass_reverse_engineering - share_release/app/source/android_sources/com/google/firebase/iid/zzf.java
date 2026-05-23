package com.google.firebase.iid;

import com.google.android.gms.tasks.Continuation;
import com.google.android.gms.tasks.Task;
final /* synthetic */ class zzf implements Continuation {
    static final Continuation zza = new zzf();

    private zzf() {
    }

    @Override // com.google.android.gms.tasks.Continuation
    public final Object then(Task task) {
        return zza.zza(task);
    }
}


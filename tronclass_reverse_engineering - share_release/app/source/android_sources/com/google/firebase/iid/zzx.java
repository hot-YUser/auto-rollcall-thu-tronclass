package com.google.firebase.iid;

import android.os.Bundle;
import com.google.android.gms.tasks.Continuation;
import com.google.android.gms.tasks.Task;
import java.io.IOException;
final class zzx implements Continuation<Bundle, String> {
    private final /* synthetic */ zzs zza;

    zzx(zzs zzsVar) {
        this.zza = zzsVar;
    }

    @Override // com.google.android.gms.tasks.Continuation
    public final /* synthetic */ String then(Task<Bundle> task) throws Exception {
        Bundle result = task.getResult(IOException.class);
        zzs zzsVar = this.zza;
        return zzs.zza(result);
    }
}


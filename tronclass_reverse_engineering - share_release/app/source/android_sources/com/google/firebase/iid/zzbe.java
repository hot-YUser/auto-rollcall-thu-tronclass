package com.google.firebase.iid;

import android.os.Binder;
import android.os.Process;
import android.util.Log;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
public final class zzbe extends Binder {
    private final zzbg zza;

    public zzbe(zzbg zzbgVar) {
        this.zza = zzbgVar;
    }

    final void zza(final zzbi zzbiVar) {
        if (Binder.getCallingUid() != Process.myUid()) {
            throw new SecurityException("Binding only allowed within app");
        }
        if (Log.isLoggable("FirebaseInstanceId", 3)) {
            Log.d("FirebaseInstanceId", "service received new intent via bind strategy");
        }
        this.zza.zza(zzbiVar.zza).addOnCompleteListener(zzh.zza(), new OnCompleteListener(zzbiVar) { // from class: com.google.firebase.iid.zzbh
            private final zzbi zza;

            {
                this.zza = zzbiVar;
            }

            @Override // com.google.android.gms.tasks.OnCompleteListener
            public final void onComplete(Task task) {
                this.zza.zzb();
            }
        });
    }
}


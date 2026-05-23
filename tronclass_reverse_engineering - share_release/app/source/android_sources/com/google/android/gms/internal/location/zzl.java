package com.google.android.gms.internal.location;

import android.os.DeadObjectException;
import android.os.IInterface;
final class zzl implements zzbj<zzao> {
    private final /* synthetic */ zzk zzcc;

    zzl(zzk zzkVar) {
        this.zzcc = zzkVar;
    }

    @Override // com.google.android.gms.internal.location.zzbj
    public final void checkConnected() {
        this.zzcc.checkConnected();
    }

    @Override // com.google.android.gms.internal.location.zzbj
    public final /* synthetic */ IInterface getService() throws DeadObjectException {
        return (zzao) this.zzcc.getService();
    }
}


package com.google.android.gms.common.api.internal;

import android.os.IBinder;
import java.lang.ref.WeakReference;
import java.util.NoSuchElementException;
final class zacr implements IBinder.DeathRecipient, zacs {
    private final WeakReference<BasePendingResult<?>> zalc;
    private final WeakReference<com.google.android.gms.common.api.zac> zald;
    private final WeakReference<IBinder> zale;

    private zacr(BasePendingResult<?> basePendingResult, com.google.android.gms.common.api.zac zacVar, IBinder iBinder) {
        this.zald = new WeakReference<>(zacVar);
        this.zalc = new WeakReference<>(basePendingResult);
        this.zale = new WeakReference<>(iBinder);
    }

    @Override // com.google.android.gms.common.api.internal.zacs
    public final void zac(BasePendingResult<?> basePendingResult) {
        zaby();
    }

    @Override // android.os.IBinder.DeathRecipient
    public final void binderDied() {
        zaby();
    }

    private final void zaby() {
        BasePendingResult<?> basePendingResult = this.zalc.get();
        com.google.android.gms.common.api.zac zacVar = this.zald.get();
        if (zacVar != null && basePendingResult != null) {
            zacVar.remove(basePendingResult.zam().intValue());
        }
        IBinder iBinder = this.zale.get();
        if (iBinder != null) {
            try {
                iBinder.unlinkToDeath(this, 0);
            } catch (NoSuchElementException unused) {
            }
        }
    }

    /* synthetic */ zacr(BasePendingResult basePendingResult, com.google.android.gms.common.api.zac zacVar, IBinder iBinder, zacq zacqVar) {
        this(basePendingResult, null, iBinder);
    }
}


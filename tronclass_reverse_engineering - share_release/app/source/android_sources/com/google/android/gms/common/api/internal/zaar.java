package com.google.android.gms.common.api.internal;

import java.lang.ref.WeakReference;
final class zaar extends com.google.android.gms.signin.internal.zac {
    private final WeakReference<zaak> zagk;

    zaar(zaak zaakVar) {
        this.zagk = new WeakReference<>(zaakVar);
    }

    @Override // com.google.android.gms.signin.internal.zac, com.google.android.gms.signin.internal.zad
    public final void zab(com.google.android.gms.signin.internal.zaj zajVar) {
        zaak zaakVar = this.zagk.get();
        if (zaakVar == null) {
            return;
        }
        zaakVar.zaft.zaa(new zaas(this, zaakVar, zaakVar, zajVar));
    }
}


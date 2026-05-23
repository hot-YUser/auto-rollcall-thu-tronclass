package com.google.android.gms.common.api.internal;

import java.lang.ref.WeakReference;
final class zabc extends zabr {
    private WeakReference<zaaw> zahm;

    zabc(zaaw zaawVar) {
        this.zahm = new WeakReference<>(zaawVar);
    }

    @Override // com.google.android.gms.common.api.internal.zabr
    public final void zas() {
        zaaw zaawVar = this.zahm.get();
        if (zaawVar == null) {
            return;
        }
        zaawVar.resume();
    }
}


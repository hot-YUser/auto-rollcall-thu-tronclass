package com.google.android.gms.common.api.internal;
abstract class zabf {
    private final zabd zahu;

    protected zabf(zabd zabdVar) {
        this.zahu = zabdVar;
    }

    protected abstract void zaan();

    public final void zac(zabe zabeVar) {
        zabeVar.zaeo.lock();
        try {
            if (zabeVar.zahq != this.zahu) {
                return;
            }
            zaan();
        } finally {
            zabeVar.zaeo.unlock();
        }
    }
}


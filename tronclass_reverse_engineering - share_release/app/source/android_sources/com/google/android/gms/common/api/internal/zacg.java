package com.google.android.gms.common.api.internal;
final class zacg implements Runnable {
    private final /* synthetic */ com.google.android.gms.signin.internal.zaj zagr;
    private final /* synthetic */ zace zakk;

    zacg(zace zaceVar, com.google.android.gms.signin.internal.zaj zajVar) {
        this.zakk = zaceVar;
        this.zagr = zajVar;
    }

    @Override // java.lang.Runnable
    public final void run() {
        this.zakk.zac(this.zagr);
    }
}


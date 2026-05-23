package com.google.firebase.iid;

import java.util.concurrent.ThreadFactory;
final /* synthetic */ class zzg implements ThreadFactory {
    static final ThreadFactory zza = new zzg();

    private zzg() {
    }

    @Override // java.util.concurrent.ThreadFactory
    public final Thread newThread(Runnable runnable) {
        return zzh.zza(runnable);
    }
}


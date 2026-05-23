package com.google.firebase.iid;

import java.util.concurrent.Executor;
final /* synthetic */ class zzm implements Executor {
    static final Executor zza = new zzm();

    private zzm() {
    }

    @Override // java.util.concurrent.Executor
    public final void execute(Runnable runnable) {
        runnable.run();
    }
}


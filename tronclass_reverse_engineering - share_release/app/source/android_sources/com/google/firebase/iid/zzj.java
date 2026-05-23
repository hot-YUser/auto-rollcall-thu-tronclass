package com.google.firebase.iid;

import java.util.concurrent.Executor;
final /* synthetic */ class zzj implements Executor {
    static final Executor zza = new zzj();

    private zzj() {
    }

    @Override // java.util.concurrent.Executor
    public final void execute(Runnable runnable) {
        runnable.run();
    }
}


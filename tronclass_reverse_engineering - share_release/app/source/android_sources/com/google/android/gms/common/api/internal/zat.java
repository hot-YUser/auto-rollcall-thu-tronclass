package com.google.android.gms.common.api.internal;
final class zat implements Runnable {
    private final /* synthetic */ zas zaeq;

    zat(zas zasVar) {
        this.zaeq = zasVar;
    }

    @Override // java.lang.Runnable
    public final void run() {
        this.zaeq.zaeo.lock();
        try {
            this.zaeq.zax();
        } finally {
            this.zaeq.zaeo.unlock();
        }
    }
}


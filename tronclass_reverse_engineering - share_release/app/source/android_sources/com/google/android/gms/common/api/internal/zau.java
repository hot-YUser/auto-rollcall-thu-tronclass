package com.google.android.gms.common.api.internal;

import android.os.Bundle;
import com.google.android.gms.common.ConnectionResult;
final class zau implements zabt {
    private final /* synthetic */ zas zaeq;

    private zau(zas zasVar) {
        this.zaeq = zasVar;
    }

    @Override // com.google.android.gms.common.api.internal.zabt
    public final void zab(Bundle bundle) {
        this.zaeq.zaeo.lock();
        try {
            this.zaeq.zaa(bundle);
            this.zaeq.zael = ConnectionResult.RESULT_SUCCESS;
            this.zaeq.zax();
        } finally {
            this.zaeq.zaeo.unlock();
        }
    }

    @Override // com.google.android.gms.common.api.internal.zabt
    public final void zac(ConnectionResult connectionResult) {
        this.zaeq.zaeo.lock();
        try {
            this.zaeq.zael = connectionResult;
            this.zaeq.zax();
        } finally {
            this.zaeq.zaeo.unlock();
        }
    }

    @Override // com.google.android.gms.common.api.internal.zabt
    public final void zab(int i, boolean z) {
        this.zaeq.zaeo.lock();
        try {
            if (!this.zaeq.zaen && this.zaeq.zaem != null && this.zaeq.zaem.isSuccess()) {
                this.zaeq.zaen = true;
                this.zaeq.zaeg.onConnectionSuspended(i);
                return;
            }
            this.zaeq.zaen = false;
            this.zaeq.zaa(i, z);
        } finally {
            this.zaeq.zaeo.unlock();
        }
    }

    /* synthetic */ zau(zas zasVar, zat zatVar) {
        this(zasVar);
    }
}


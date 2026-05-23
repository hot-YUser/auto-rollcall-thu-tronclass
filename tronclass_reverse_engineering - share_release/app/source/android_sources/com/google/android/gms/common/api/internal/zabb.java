package com.google.android.gms.common.api.internal;

import android.os.Looper;
import android.os.Message;
import android.util.Log;
final class zabb extends com.google.android.gms.internal.base.zap {
    private final /* synthetic */ zaaw zahh;

    /* high-level source view WARN: 'super' call moved to the top of the method (can break code semantics) */
    zabb(zaaw zaawVar, Looper looper) {
        super(looper);
        this.zahh = zaawVar;
    }

    @Override // android.os.Handler
    public final void handleMessage(Message message) {
        int i = message.what;
        if (i == 1) {
            this.zahh.zaav();
        } else if (i != 2) {
            Log.w("GoogleApiClientImpl", new StringBuilder(31).append("Unknown message id: ").append(message.what).toString());
        } else {
            this.zahh.resume();
        }
    }
}


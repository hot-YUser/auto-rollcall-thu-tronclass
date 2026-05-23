package com.google.android.gms.common.api.internal;

import android.os.Looper;
import android.os.Message;
import android.util.Log;
final class zabg extends com.google.android.gms.internal.base.zap {
    private final /* synthetic */ zabe zahv;

    /* high-level source view WARN: 'super' call moved to the top of the method (can break code semantics) */
    zabg(zabe zabeVar, Looper looper) {
        super(looper);
        this.zahv = zabeVar;
    }

    @Override // android.os.Handler
    public final void handleMessage(Message message) {
        int i = message.what;
        if (i == 1) {
            ((zabf) message.obj).zac(this.zahv);
        } else {
            if (i == 2) {
                throw ((RuntimeException) message.obj);
            }
            Log.w("GACStateManager", new StringBuilder(31).append("Unknown message id: ").append(message.what).toString());
        }
    }
}


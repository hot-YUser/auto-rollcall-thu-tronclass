package com.google.firebase.iid;

import android.os.Looper;
import android.os.Message;
final class zzaw extends com.google.android.gms.internal.firebase_messaging.zze {
    private final /* synthetic */ zzax zza;

    /* high-level source view WARN: 'super' call moved to the top of the method (can break code semantics) */
    zzaw(zzax zzaxVar, Looper looper) {
        super(looper);
        this.zza = zzaxVar;
    }

    @Override // android.os.Handler
    public final void handleMessage(Message message) {
        this.zza.zza(message);
    }
}


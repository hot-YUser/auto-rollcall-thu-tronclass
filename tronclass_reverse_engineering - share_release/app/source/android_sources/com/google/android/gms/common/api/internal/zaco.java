package com.google.android.gms.common.api.internal;

import android.os.Looper;
import android.os.Message;
import android.util.Log;
import com.google.android.gms.common.api.PendingResult;
import com.google.android.gms.common.api.Status;
final class zaco extends com.google.android.gms.internal.base.zap {
    private final /* synthetic */ zacm zakw;

    /* high-level source view WARN: 'super' call moved to the top of the method (can break code semantics) */
    public zaco(zacm zacmVar, Looper looper) {
        super(looper);
        this.zakw = zacmVar;
    }

    @Override // android.os.Handler
    public final void handleMessage(Message message) {
        int i = message.what;
        if (i != 0) {
            if (i == 1) {
                RuntimeException runtimeException = (RuntimeException) message.obj;
                String strValueOf = String.valueOf(runtimeException.getMessage());
                Log.e("TransformedResultImpl", strValueOf.length() != 0 ? "Runtime exception on the transformation worker thread: ".concat(strValueOf) : new String("Runtime exception on the transformation worker thread: "));
                throw runtimeException;
            }
            Log.e("TransformedResultImpl", new StringBuilder(70).append("TransformationResultHandler received unknown message type: ").append(message.what).toString());
            return;
        }
        PendingResult<?> pendingResult = (PendingResult) message.obj;
        synchronized (this.zakw.zado) {
            if (pendingResult != null) {
                if (!(pendingResult instanceof zacd)) {
                    this.zakw.zakp.zaa(pendingResult);
                } else {
                    this.zakw.zakp.zad(((zacd) pendingResult).getStatus());
                }
            } else {
                this.zakw.zakp.zad(new Status(13, "Transform returned null"));
            }
        }
    }
}


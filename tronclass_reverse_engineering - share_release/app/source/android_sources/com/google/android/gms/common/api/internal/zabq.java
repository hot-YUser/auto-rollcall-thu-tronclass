package com.google.android.gms.common.api.internal;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
public final class zabq extends BroadcastReceiver {
    private Context mContext;
    private final zabr zaji;

    public zabq(zabr zabrVar) {
        this.zaji = zabrVar;
    }

    public final void zac(Context context) {
        this.mContext = context;
    }

    public final synchronized void unregister() {
        Context context = this.mContext;
        if (context != null) {
            context.unregisterReceiver(this);
        }
        this.mContext = null;
    }

    @Override // android.content.BroadcastReceiver
    public final void onReceive(Context context, Intent intent) {
        Uri data = intent.getData();
        if ("com.google.android.gms".equals(data != null ? data.getSchemeSpecificPart() : null)) {
            this.zaji.zas();
            unregister();
        }
    }
}


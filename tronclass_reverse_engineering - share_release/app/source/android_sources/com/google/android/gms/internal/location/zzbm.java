package com.google.android.gms.internal.location;

import android.os.Looper;
import com.google.android.gms.common.internal.Preconditions;
public final class zzbm {
    public static Looper zza(Looper looper) {
        return looper != null ? looper : zzc();
    }

    public static Looper zzc() {
        Preconditions.checkState(Looper.myLooper() != null, "Can't create handler inside thread that has not called Looper.prepare()");
        return Looper.myLooper();
    }
}


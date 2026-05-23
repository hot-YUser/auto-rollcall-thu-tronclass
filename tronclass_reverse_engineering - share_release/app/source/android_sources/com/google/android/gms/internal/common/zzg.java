package com.google.android.gms.internal.common;

import android.content.Context;
public final class zzg {
    private static volatile boolean zziy = !zzam();

    public static boolean zzam() {
        return true;
    }

    public static Context getDeviceProtectedStorageContext(Context context) {
        return context.isDeviceProtectedStorage() ? context : context.createDeviceProtectedStorageContext();
    }
}


package com.google.android.gms.common.internal;

import android.util.Log;
public final class GmsLogger {
    private static final int zzef = 15;
    private static final String zzeg = null;
    private final String zzeh;
    private final String zzei;

    public GmsLogger(String str, String str2) {
        Preconditions.checkNotNull(str, "log tag cannot be null");
        Preconditions.checkArgument(str.length() <= 23, "tag \"%s\" is longer than the %d character maximum", str, 23);
        this.zzeh = str;
        if (str2 == null || str2.length() <= 0) {
            this.zzei = null;
        } else {
            this.zzei = str2;
        }
    }

    public final boolean canLogPii() {
        return false;
    }

    public GmsLogger(String str) {
        this(str, null);
    }

    public final boolean canLog(int i) {
        return Log.isLoggable(this.zzeh, i);
    }

    public final void d(String str, String str2) {
        if (canLog(3)) {
            Log.d(str, zzh(str2));
        }
    }

    public final void d(String str, String str2, Throwable th) {
        if (canLog(3)) {
            Log.d(str, zzh(str2), th);
        }
    }

    public final void v(String str, String str2) {
        if (canLog(2)) {
            Log.v(str, zzh(str2));
        }
    }

    public final void v(String str, String str2, Throwable th) {
        if (canLog(2)) {
            Log.v(str, zzh(str2), th);
        }
    }

    public final void i(String str, String str2) {
        if (canLog(4)) {
            Log.i(str, zzh(str2));
        }
    }

    public final void i(String str, String str2, Throwable th) {
        if (canLog(4)) {
            Log.i(str, zzh(str2), th);
        }
    }

    public final void w(String str, String str2) {
        if (canLog(5)) {
            Log.w(str, zzh(str2));
        }
    }

    public final void w(String str, String str2, Throwable th) {
        if (canLog(5)) {
            Log.w(str, zzh(str2), th);
        }
    }

    public final void wfmt(String str, String str2, Object... objArr) {
        if (canLog(5)) {
            Log.w(this.zzeh, zza(str2, objArr));
        }
    }

    public final void e(String str, String str2) {
        if (canLog(6)) {
            Log.e(str, zzh(str2));
        }
    }

    public final void e(String str, String str2, Throwable th) {
        if (canLog(6)) {
            Log.e(str, zzh(str2), th);
        }
    }

    public final void efmt(String str, String str2, Object... objArr) {
        if (canLog(6)) {
            Log.e(str, zza(str2, objArr));
        }
    }

    public final void wtf(String str, String str2, Throwable th) {
        if (canLog(7)) {
            Log.e(str, zzh(str2), th);
            Log.wtf(str, zzh(str2), th);
        }
    }

    public final void pii(String str, String str2) {
        if (canLogPii()) {
            String strValueOf = String.valueOf(str);
            String strValueOf2 = String.valueOf(" PII_LOG");
            Log.i(strValueOf2.length() != 0 ? strValueOf.concat(strValueOf2) : new String(strValueOf), zzh(str2));
        }
    }

    public final void pii(String str, String str2, Throwable th) {
        if (canLogPii()) {
            String strValueOf = String.valueOf(str);
            String strValueOf2 = String.valueOf(" PII_LOG");
            Log.i(strValueOf2.length() != 0 ? strValueOf.concat(strValueOf2) : new String(strValueOf), zzh(str2), th);
        }
    }

    private final String zzh(String str) {
        String str2 = this.zzei;
        return str2 == null ? str : str2.concat(str);
    }

    private final String zza(String str, Object... objArr) {
        String str2 = String.format(str, objArr);
        String str3 = this.zzei;
        return str3 == null ? str2 : str3.concat(str2);
    }
}


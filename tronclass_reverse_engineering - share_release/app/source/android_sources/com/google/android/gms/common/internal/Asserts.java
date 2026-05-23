package com.google.android.gms.common.internal;

import android.os.Looper;
import android.util.Log;
public final class Asserts {
    public static void checkNull(Object obj) {
        if (obj != null) {
            throw new IllegalArgumentException("non-null reference");
        }
    }

    public static void checkNotNull(Object obj) {
        if (obj == null) {
            throw new IllegalArgumentException("null reference");
        }
    }

    public static void checkNotNull(Object obj, Object obj2) {
        if (obj == null) {
            throw new IllegalArgumentException(String.valueOf(obj2));
        }
    }

    public static void checkState(boolean z) {
        if (!z) {
            throw new IllegalStateException();
        }
    }

    public static void checkState(boolean z, Object obj) {
        if (!z) {
            throw new IllegalStateException(String.valueOf(obj));
        }
    }

    public static void checkMainThread(String str) {
        if (Looper.getMainLooper().getThread() == Thread.currentThread()) {
            return;
        }
        String strValueOf = String.valueOf(Thread.currentThread());
        String strValueOf2 = String.valueOf(Looper.getMainLooper().getThread());
        Log.e("Asserts", new StringBuilder(String.valueOf(strValueOf).length() + 57 + String.valueOf(strValueOf2).length()).append("checkMainThread: current thread ").append(strValueOf).append(" IS NOT the main thread ").append(strValueOf2).append("!").toString());
        throw new IllegalStateException(str);
    }

    public static void checkNotMainThread(String str) {
        if (Looper.getMainLooper().getThread() != Thread.currentThread()) {
            return;
        }
        String strValueOf = String.valueOf(Thread.currentThread());
        String strValueOf2 = String.valueOf(Looper.getMainLooper().getThread());
        Log.e("Asserts", new StringBuilder(String.valueOf(strValueOf).length() + 56 + String.valueOf(strValueOf2).length()).append("checkNotMainThread: current thread ").append(strValueOf).append(" IS the main thread ").append(strValueOf2).append("!").toString());
        throw new IllegalStateException(str);
    }

    private Asserts() {
        throw new AssertionError("Uninstantiable");
    }
}


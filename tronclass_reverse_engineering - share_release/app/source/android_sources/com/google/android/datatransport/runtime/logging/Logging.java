package com.google.android.datatransport.runtime.logging;

import android.util.Log;
public final class Logging {
    private Logging() {
    }

    private static String getTag(String str) {
        return "TransportRuntime." + str;
    }

    public static void d(String str, String str2) {
        Log.d(getTag(str), str2);
    }

    public static void d(String str, String str2, Object obj) {
        Log.d(getTag(str), String.format(str2, obj));
    }

    public static void d(String str, String str2, Object obj, Object obj2) {
        Log.d(getTag(str), String.format(str2, obj, obj2));
    }

    public static void d(String str, String str2, Object... objArr) {
        Log.d(getTag(str), String.format(str2, objArr));
    }

    public static void i(String str, String str2) {
        Log.i(getTag(str), str2);
    }

    public static void e(String str, String str2, Throwable th) {
        Log.e(getTag(str), str2, th);
    }

    public static void w(String str, String str2, Object obj) {
        Log.w(getTag(str), String.format(str2, obj));
    }
}


package com.wisdomgarden.mobile;

import android.os.Build;
public class AndroidVersionUtils {
    public static boolean isGreaterThan(int i) {
        return Build.VERSION.SDK_INT > i;
    }

    public static boolean isGreaterThanOrEqualTo(int i) {
        return Build.VERSION.SDK_INT >= i;
    }

    public static boolean isBetween(int i, int i2) {
        return isBetween(i, i2, false, false);
    }

    public static boolean isBetween(int i, int i2, boolean z) {
        return isBetween(i, i2, z, false);
    }

    public static boolean isBetween(int i, int i2, boolean z, boolean z2) {
        return (z ? isGreaterThanOrEqualTo(i) : isGreaterThan(i)) && (z2 ? isLessThanOrEqualTo(i2) : isLessThan(i2));
    }

    public static boolean isLessThan(int i) {
        return Build.VERSION.SDK_INT < i;
    }

    public static boolean isLessThanOrEqualTo(int i) {
        return Build.VERSION.SDK_INT <= i;
    }

    public static boolean isExactly(int i) {
        return Build.VERSION.SDK_INT == i;
    }

    public static int getCurrentVersion() {
        return Build.VERSION.SDK_INT;
    }
}


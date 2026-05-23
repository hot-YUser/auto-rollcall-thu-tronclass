package com.google.android.gms.common.util;

import android.content.Context;
import android.content.pm.PackageManager;
import android.content.res.Configuration;
import android.content.res.Resources;
import android.os.Build;
public final class DeviceProperties {
    private static Boolean zzgn;
    private static Boolean zzgo;
    private static Boolean zzgp;
    private static Boolean zzgq;
    private static Boolean zzgr;
    private static Boolean zzgs;
    private static Boolean zzgt;
    private static Boolean zzgu;

    private DeviceProperties() {
    }

    /* high-level source view WARN: Removed duplicated region for block: B:21:0x003a  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    public static boolean isTablet(Resources resources) {
        if (resources == null) {
            return false;
        }
        if (zzgn == null) {
            if ((resources.getConfiguration().screenLayout & 15) <= 3) {
                if (zzgo == null) {
                    Configuration configuration = resources.getConfiguration();
                    zzgo = Boolean.valueOf((configuration.screenLayout & 15) <= 3 && configuration.smallestScreenWidthDp >= 600);
                }
                boolean z = zzgo.booleanValue();
                zzgn = Boolean.valueOf(z);
            }
        }
        return zzgn.booleanValue();
    }

    public static boolean isWearable(Context context) {
        if (zzgp == null) {
            zzgp = Boolean.valueOf(PlatformVersion.isAtLeastKitKatWatch() && context.getPackageManager().hasSystemFeature("android.hardware.type.watch"));
        }
        return zzgp.booleanValue();
    }

    public static boolean isWearableWithoutPlayStore(Context context) {
        if (!isWearable(context)) {
            return false;
        }
        if (PlatformVersion.isAtLeastN()) {
            return isSidewinder(context) && !PlatformVersion.isAtLeastO();
        }
        return true;
    }

    public static boolean isSidewinder(Context context) {
        if (zzgq == null) {
            zzgq = Boolean.valueOf(PlatformVersion.isAtLeastLollipop() && context.getPackageManager().hasSystemFeature("cn.google"));
        }
        return zzgq.booleanValue();
    }

    public static boolean isLatchsky(Context context) {
        if (zzgr == null) {
            PackageManager packageManager = context.getPackageManager();
            zzgr = Boolean.valueOf(packageManager.hasSystemFeature("com.google.android.feature.services_updater") && packageManager.hasSystemFeature("cn.google.services"));
        }
        return zzgr.booleanValue();
    }

    public static boolean zzf(Context context) {
        if (zzgs == null) {
            zzgs = Boolean.valueOf(context.getPackageManager().hasSystemFeature("android.hardware.type.iot") || context.getPackageManager().hasSystemFeature("android.hardware.type.embedded"));
        }
        return zzgs.booleanValue();
    }

    public static boolean isAuto(Context context) {
        if (zzgt == null) {
            zzgt = Boolean.valueOf(PlatformVersion.isAtLeastO() && context.getPackageManager().hasSystemFeature("android.hardware.type.automotive"));
        }
        return zzgt.booleanValue();
    }

    public static boolean isTv(Context context) {
        if (zzgu == null) {
            PackageManager packageManager = context.getPackageManager();
            zzgu = Boolean.valueOf(packageManager.hasSystemFeature("com.google.android.tv") || packageManager.hasSystemFeature("android.hardware.type.television") || packageManager.hasSystemFeature("android.software.leanback"));
        }
        return zzgu.booleanValue();
    }

    public static boolean isUserBuild() {
        return "user".equals(Build.TYPE);
    }
}


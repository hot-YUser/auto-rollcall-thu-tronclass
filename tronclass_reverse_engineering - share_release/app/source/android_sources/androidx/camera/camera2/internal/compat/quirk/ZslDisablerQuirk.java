package androidx.camera.camera2.internal.compat.quirk;

import android.os.Build;
import androidx.camera.core.impl.Quirk;
import java.util.Locale;
public class ZslDisablerQuirk implements Quirk {
    static boolean load() {
        return isSamsungFold4() || isXiaoMiMi8();
    }

    private static boolean isSamsungFold4() {
        return "samsung".equalsIgnoreCase(Build.BRAND) && Build.MODEL.toUpperCase(Locale.US).startsWith("SM-F936");
    }

    private static boolean isXiaoMiMi8() {
        return "xiaomi".equalsIgnoreCase(Build.BRAND) && Build.MODEL.toUpperCase(Locale.US).startsWith("MI 8");
    }
}


package androidx.camera.video.internal.compat.quirk;

import android.os.Build;
import androidx.camera.core.impl.Quirk;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;
public class CameraUseInconsistentTimebaseQuirk implements Quirk {
    private static final Set<String> BUILD_HARDWARE_SET = new HashSet(Arrays.asList("samsungexynos7570", "samsungexynos7870", "qcom"));
    private static final Set<String> BUILD_SOC_MODEL_SET = new HashSet(Arrays.asList("sm4350", "sm6375"));
    private static final Set<String> BUILD_MODEL_SET = new HashSet(Arrays.asList("m2007j20cg", "m2007j20ct"));

    static boolean load() {
        return usesAffectedSoc() || isAffectedSamsungDevice() || isAffectedModel();
    }

    private static boolean usesAffectedSoc() {
        return Build.VERSION.SDK_INT >= 31 && BUILD_SOC_MODEL_SET.contains(Build.SOC_MODEL.toLowerCase());
    }

    private static boolean isAffectedSamsungDevice() {
        return "SAMSUNG".equalsIgnoreCase(Build.BRAND) && BUILD_HARDWARE_SET.contains(Build.HARDWARE.toLowerCase());
    }

    private static boolean isAffectedModel() {
        return BUILD_MODEL_SET.contains(Build.MODEL.toLowerCase());
    }
}


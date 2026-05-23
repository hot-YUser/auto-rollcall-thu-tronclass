package androidx.camera.video.internal.compat.quirk;

import android.os.Build;
import androidx.camera.core.impl.Quirk;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Locale;
import java.util.Set;
public class PreviewDelayWhenVideoCaptureIsBoundQuirk implements Quirk {
    private static final Set<String> HUAWEI_DEVICE_LIST = new HashSet(Arrays.asList("HWELE", "HW-02L", "HWVOG", "HWYAL", "HWLYA", "HWCOL", "HWPAR"));
    private static final Set<String> HUAWEI_MODEL_LIST = new HashSet(Arrays.asList("ELS-AN00", "ELS-TN00", "ELS-NX9", "ELS-N04"));

    static boolean load() {
        return "Huawei".equalsIgnoreCase(Build.MANUFACTURER) && (HUAWEI_DEVICE_LIST.contains(Build.DEVICE.toUpperCase(Locale.US)) || HUAWEI_MODEL_LIST.contains(Build.MODEL.toUpperCase(Locale.US)));
    }
}


package androidx.camera.camera2.internal.compat.quirk;

import android.os.Build;
import androidx.camera.core.impl.Quirk;
public class RepeatingStreamConstraintForVideoRecordingQuirk implements Quirk {
    static boolean load() {
        return isHuaweiMate9();
    }

    public static boolean isHuaweiMate9() {
        return "Huawei".equalsIgnoreCase(Build.BRAND) && "mha-l29".equalsIgnoreCase(Build.MODEL);
    }
}


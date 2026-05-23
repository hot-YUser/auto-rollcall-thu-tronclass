package androidx.camera.camera2.internal.compat.quirk;

import androidx.camera.camera2.internal.compat.CameraCharacteristicsCompat;
import androidx.camera.core.impl.Quirk;
public class AutoFlashUnderExposedQuirk implements Quirk {
    static boolean load(CameraCharacteristicsCompat cameraCharacteristicsCompat) {
        return false;
    }
}


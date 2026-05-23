package androidx.camera.core.impl;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
public final class CameraMode {
    public static final int CONCURRENT_CAMERA = 1;
    public static final int DEFAULT = 0;
    public static final int ULTRA_HIGH_RESOLUTION_CAMERA = 2;

    @Retention(RetentionPolicy.SOURCE)
    public @interface Mode {
    }

    public static String toLabelString(int i) {
        if (i == 1) {
            return "CONCURRENT_CAMERA";
        }
        if (i == 2) {
            return "ULTRA_HIGH_RESOLUTION_CAMERA";
        }
        return "DEFAULT";
    }

    private CameraMode() {
    }
}


package androidx.camera.video.internal.compat.quirk;

import androidx.camera.core.impl.Quirk;
public class DeactivateEncoderSurfaceBeforeStopEncoderQuirk implements Quirk {
    static boolean load() {
        return false;
    }
}


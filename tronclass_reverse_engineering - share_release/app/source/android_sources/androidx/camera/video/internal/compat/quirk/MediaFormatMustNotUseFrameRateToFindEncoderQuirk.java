package androidx.camera.video.internal.compat.quirk;

import androidx.camera.core.impl.Quirk;
public class MediaFormatMustNotUseFrameRateToFindEncoderQuirk implements Quirk {
    static boolean load() {
        return false;
    }
}


package androidx.camera.video.internal.compat.quirk;

import android.os.Build;
import androidx.camera.core.impl.Quirk;
import java.util.Arrays;
import java.util.List;
public class EncoderNotUsePersistentInputSurfaceQuirk implements Quirk {
    private static final List<String> DEVICE_MODELS = Arrays.asList("SM-N9208", "SM-G920V");

    static boolean load() {
        return DEVICE_MODELS.contains(Build.MODEL.toUpperCase());
    }
}


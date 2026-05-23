package androidx.camera.video.internal.compat.quirk;

import android.os.Build;
import androidx.camera.core.impl.Quirk;
public class AudioEncoderIgnoresInputTimestampQuirk implements Quirk {
    static boolean load() {
        return isSonyG3125();
    }

    private static boolean isSonyG3125() {
        return "Sony".equalsIgnoreCase(Build.BRAND) && "G3125".equalsIgnoreCase(Build.MODEL);
    }
}


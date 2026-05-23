package androidx.camera.camera2.internal.compat.quirk;

import android.os.Build;
import android.util.Pair;
import androidx.camera.core.impl.Quirk;
import java.util.HashSet;
import java.util.Locale;
import java.util.Set;
public class FlashAvailabilityBufferUnderflowQuirk implements Quirk {
    private static final Set<Pair<String, String>> KNOWN_AFFECTED_MODELS = new HashSet();

    static {
        addAffectedDevice("sprd", "lemp");
        addAffectedDevice("sprd", "DM20C");
    }

    private static void addAffectedDevice(String str, String str2) {
        KNOWN_AFFECTED_MODELS.add(new Pair<>(str.toLowerCase(Locale.US), str2.toLowerCase(Locale.US)));
    }

    static boolean load() {
        return KNOWN_AFFECTED_MODELS.contains(new Pair(Build.MANUFACTURER.toLowerCase(Locale.US), Build.MODEL.toLowerCase(Locale.US)));
    }
}


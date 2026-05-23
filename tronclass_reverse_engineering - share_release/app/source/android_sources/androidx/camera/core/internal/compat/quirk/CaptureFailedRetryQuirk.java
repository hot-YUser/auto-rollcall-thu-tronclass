package androidx.camera.core.internal.compat.quirk;

import android.os.Build;
import android.util.Pair;
import androidx.camera.core.impl.Quirk;
import java.util.Collections;
import java.util.HashSet;
import java.util.Locale;
import java.util.Set;
public class CaptureFailedRetryQuirk implements Quirk {
    private static final Set<Pair<String, String>> FAILED_RETRY_ALLOW_LIST = new HashSet(Collections.singletonList(Pair.create("SAMSUNG", "SM-G981U1")));

    public int getRetryCount() {
        return 1;
    }

    static boolean load() {
        return FAILED_RETRY_ALLOW_LIST.contains(Pair.create(Build.BRAND.toUpperCase(Locale.US), Build.MODEL.toUpperCase(Locale.US)));
    }
}


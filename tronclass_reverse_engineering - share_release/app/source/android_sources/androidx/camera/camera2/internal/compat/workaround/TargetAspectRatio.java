package androidx.camera.camera2.internal.compat.workaround;

import androidx.camera.camera2.internal.compat.CameraCharacteristicsCompat;
import androidx.camera.camera2.internal.compat.quirk.AspectRatioLegacyApi21Quirk;
import androidx.camera.camera2.internal.compat.quirk.CameraQuirks;
import androidx.camera.camera2.internal.compat.quirk.DeviceQuirks;
import androidx.camera.camera2.internal.compat.quirk.Nexus4AndroidLTargetAspectRatioQuirk;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
public class TargetAspectRatio {
    public static final int RATIO_16_9 = 1;
    public static final int RATIO_4_3 = 0;
    public static final int RATIO_MAX_JPEG = 2;
    public static final int RATIO_ORIGINAL = 3;

    @Retention(RetentionPolicy.SOURCE)
    public @interface Ratio {
    }

    public int get(String str, CameraCharacteristicsCompat cameraCharacteristicsCompat) {
        Nexus4AndroidLTargetAspectRatioQuirk nexus4AndroidLTargetAspectRatioQuirk = (Nexus4AndroidLTargetAspectRatioQuirk) DeviceQuirks.get(Nexus4AndroidLTargetAspectRatioQuirk.class);
        if (nexus4AndroidLTargetAspectRatioQuirk != null) {
            return nexus4AndroidLTargetAspectRatioQuirk.getCorrectedAspectRatio();
        }
        AspectRatioLegacyApi21Quirk aspectRatioLegacyApi21Quirk = (AspectRatioLegacyApi21Quirk) CameraQuirks.get(str, cameraCharacteristicsCompat).get(AspectRatioLegacyApi21Quirk.class);
        if (aspectRatioLegacyApi21Quirk != null) {
            return aspectRatioLegacyApi21Quirk.getCorrectedAspectRatio();
        }
        return 3;
    }
}


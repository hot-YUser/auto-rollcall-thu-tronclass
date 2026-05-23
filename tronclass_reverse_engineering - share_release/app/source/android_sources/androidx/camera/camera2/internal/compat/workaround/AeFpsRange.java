package androidx.camera.camera2.internal.compat.workaround;

import android.hardware.camera2.CaptureRequest;
import android.util.Range;
import androidx.camera.camera2.impl.Camera2ImplConfig;
import androidx.camera.camera2.internal.compat.quirk.AeFpsRangeLegacyQuirk;
import androidx.camera.core.impl.Quirks;
public class AeFpsRange {
    private final Range<Integer> mAeTargetFpsRange;

    public AeFpsRange(Quirks quirks) {
        AeFpsRangeLegacyQuirk aeFpsRangeLegacyQuirk = (AeFpsRangeLegacyQuirk) quirks.get(AeFpsRangeLegacyQuirk.class);
        if (aeFpsRangeLegacyQuirk == null) {
            this.mAeTargetFpsRange = null;
        } else {
            this.mAeTargetFpsRange = aeFpsRangeLegacyQuirk.getRange();
        }
    }

    public void addAeFpsRangeOptions(Camera2ImplConfig.Builder builder) {
        if (this.mAeTargetFpsRange != null) {
            builder.setCaptureRequestOption(CaptureRequest.CONTROL_AE_TARGET_FPS_RANGE, this.mAeTargetFpsRange);
        }
    }
}


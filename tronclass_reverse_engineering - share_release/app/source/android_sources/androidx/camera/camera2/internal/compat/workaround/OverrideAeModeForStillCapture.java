package androidx.camera.camera2.internal.compat.workaround;

import androidx.camera.camera2.internal.compat.quirk.AutoFlashUnderExposedQuirk;
import androidx.camera.core.impl.Quirks;
public class OverrideAeModeForStillCapture {
    private boolean mAePrecaptureStarted = false;
    private final boolean mHasAutoFlashUnderExposedQuirk;

    public OverrideAeModeForStillCapture(Quirks quirks) {
        this.mHasAutoFlashUnderExposedQuirk = quirks.get(AutoFlashUnderExposedQuirk.class) != null;
    }

    public void onAePrecaptureStarted() {
        this.mAePrecaptureStarted = true;
    }

    public void onAePrecaptureFinished() {
        this.mAePrecaptureStarted = false;
    }

    public boolean shouldSetAeModeAlwaysFlash(int i) {
        return this.mAePrecaptureStarted && i == 0 && this.mHasAutoFlashUnderExposedQuirk;
    }
}


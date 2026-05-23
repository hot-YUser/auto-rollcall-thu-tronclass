package androidx.camera.camera2.internal.compat.params;

import android.hardware.camera2.params.DynamicRangeProfiles;
import androidx.camera.camera2.internal.compat.params.DynamicRangesCompat;
import androidx.camera.core.DynamicRange;
import androidx.core.util.Preconditions;
import java.util.Collections;
import java.util.Set;
class DynamicRangesCompatBaseImpl implements DynamicRangesCompat.DynamicRangeProfilesCompatImpl {
    static final DynamicRangesCompat COMPAT_INSTANCE = new DynamicRangesCompat(new DynamicRangesCompatBaseImpl());
    private static final Set<DynamicRange> SDR_ONLY = Collections.singleton(DynamicRange.SDR);

    @Override // androidx.camera.camera2.internal.compat.params.DynamicRangesCompat.DynamicRangeProfilesCompatImpl
    public DynamicRangeProfiles unwrap() {
        return null;
    }

    DynamicRangesCompatBaseImpl() {
    }

    @Override // androidx.camera.camera2.internal.compat.params.DynamicRangesCompat.DynamicRangeProfilesCompatImpl
    public Set<DynamicRange> getDynamicRangeCaptureRequestConstraints(DynamicRange dynamicRange) {
        Preconditions.checkArgument(DynamicRange.SDR.equals(dynamicRange), "DynamicRange is not supported: " + dynamicRange);
        return SDR_ONLY;
    }

    @Override // androidx.camera.camera2.internal.compat.params.DynamicRangesCompat.DynamicRangeProfilesCompatImpl
    public Set<DynamicRange> getSupportedDynamicRanges() {
        return SDR_ONLY;
    }

    @Override // androidx.camera.camera2.internal.compat.params.DynamicRangesCompat.DynamicRangeProfilesCompatImpl
    public boolean isExtraLatencyPresent(DynamicRange dynamicRange) {
        Preconditions.checkArgument(DynamicRange.SDR.equals(dynamicRange), "DynamicRange is not supported: " + dynamicRange);
        return false;
    }
}


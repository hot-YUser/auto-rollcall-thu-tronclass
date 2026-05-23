package androidx.camera.camera2.internal.compat;

import android.hardware.camera2.CameraCharacteristics;
import androidx.camera.core.Logger;
import java.util.Collections;
import java.util.Set;
class CameraCharacteristicsApi28Impl extends CameraCharacteristicsBaseImpl {
    private static final String TAG = "CameraCharacteristicsImpl";

    CameraCharacteristicsApi28Impl(CameraCharacteristics cameraCharacteristics) {
        super(cameraCharacteristics);
    }

    @Override // androidx.camera.camera2.internal.compat.CameraCharacteristicsBaseImpl, androidx.camera.camera2.internal.compat.CameraCharacteristicsCompat.CameraCharacteristicsCompatImpl
    public Set<String> getPhysicalCameraIds() {
        try {
            return this.mCameraCharacteristics.getPhysicalCameraIds();
        } catch (Exception e) {
            Logger.e(TAG, "CameraCharacteristics.getPhysicalCameraIds throws an exception.", e);
            return Collections.emptySet();
        }
    }
}


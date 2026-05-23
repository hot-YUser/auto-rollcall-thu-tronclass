package androidx.camera.camera2.interop;

import android.hardware.camera2.CameraCharacteristics;
import androidx.camera.camera2.internal.Camera2CameraInfoImpl;
import androidx.camera.core.CameraInfo;
import androidx.camera.core.impl.CameraInfoInternal;
import androidx.core.util.Preconditions;
import java.util.Map;
public final class Camera2CameraInfo {
    private static final String TAG = "Camera2CameraInfo";
    private final Camera2CameraInfoImpl mCamera2CameraInfoImpl;

    public Camera2CameraInfo(Camera2CameraInfoImpl camera2CameraInfoImpl) {
        this.mCamera2CameraInfoImpl = camera2CameraInfoImpl;
    }

    public static Camera2CameraInfo from(CameraInfo cameraInfo) {
        CameraInfoInternal implementation = ((CameraInfoInternal) cameraInfo).getImplementation();
        Preconditions.checkArgument(implementation instanceof Camera2CameraInfoImpl, "CameraInfo doesn't contain Camera2 implementation.");
        return ((Camera2CameraInfoImpl) implementation).getCamera2CameraInfo();
    }

    public String getCameraId() {
        return this.mCamera2CameraInfoImpl.getCameraId();
    }

    public <T> T getCameraCharacteristic(CameraCharacteristics.Key<T> key) {
        return (T) this.mCamera2CameraInfoImpl.getCameraCharacteristicsCompat().get(key);
    }

    public static CameraCharacteristics extractCameraCharacteristics(CameraInfo cameraInfo) {
        CameraInfoInternal implementation = ((CameraInfoInternal) cameraInfo).getImplementation();
        Preconditions.checkState(implementation instanceof Camera2CameraInfoImpl, "CameraInfo does not contain any Camera2 information.");
        return ((Camera2CameraInfoImpl) implementation).getCameraCharacteristicsCompat().toCameraCharacteristics();
    }

    public Map<String, CameraCharacteristics> getCameraCharacteristicsMap() {
        return this.mCamera2CameraInfoImpl.getCameraCharacteristicsMap();
    }
}


package androidx.camera.core.concurrent;

import androidx.camera.core.CameraInfo;
import androidx.camera.core.CameraSelector;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.util.List;
public interface CameraCoordinator {
    public static final int CAMERA_OPERATING_MODE_CONCURRENT = 2;
    public static final int CAMERA_OPERATING_MODE_SINGLE = 1;
    public static final int CAMERA_OPERATING_MODE_UNSPECIFIED = 0;

    @Retention(RetentionPolicy.SOURCE)
    public @interface CameraOperatingMode {
    }

    public interface ConcurrentCameraModeListener {
        void onCameraOperatingModeUpdated(int i, int i2);
    }

    void addListener(ConcurrentCameraModeListener concurrentCameraModeListener);

    List<CameraInfo> getActiveConcurrentCameraInfos();

    int getCameraOperatingMode();

    List<List<CameraSelector>> getConcurrentCameraSelectors();

    String getPairedConcurrentCameraId(String str);

    void removeListener(ConcurrentCameraModeListener concurrentCameraModeListener);

    void setActiveConcurrentCameraInfos(List<CameraInfo> list);

    void setCameraOperatingMode(int i);

    void shutdown();
}


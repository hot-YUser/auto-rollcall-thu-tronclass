package androidx.camera.core;

import java.util.List;
public interface CameraProvider {
    List<CameraInfo> getAvailableCameraInfos();

    boolean hasCamera(CameraSelector cameraSelector) throws CameraInfoUnavailableException;
}


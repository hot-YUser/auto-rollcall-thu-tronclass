package androidx.camera.view;

import androidx.camera.core.Camera;
import androidx.camera.core.CameraInfoUnavailableException;
import androidx.camera.core.CameraSelector;
import androidx.camera.core.UseCase;
import androidx.camera.core.UseCaseGroup;
import androidx.lifecycle.LifecycleOwner;
import com.google.common.util.concurrent.ListenableFuture;
interface ProcessCameraProviderWrapper {
    Camera bindToLifecycle(LifecycleOwner lifecycleOwner, CameraSelector cameraSelector, UseCaseGroup useCaseGroup);

    boolean hasCamera(CameraSelector cameraSelector) throws CameraInfoUnavailableException;

    ListenableFuture<Void> shutdown();

    void unbind(UseCase... useCaseArr);

    void unbindAll();
}


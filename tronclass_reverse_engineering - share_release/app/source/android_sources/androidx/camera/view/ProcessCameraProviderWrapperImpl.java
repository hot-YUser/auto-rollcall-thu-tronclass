package androidx.camera.view;

import androidx.camera.core.Camera;
import androidx.camera.core.CameraInfoUnavailableException;
import androidx.camera.core.CameraSelector;
import androidx.camera.core.UseCase;
import androidx.camera.core.UseCaseGroup;
import androidx.camera.lifecycle.ProcessCameraProvider;
import androidx.lifecycle.LifecycleOwner;
import com.google.common.util.concurrent.ListenableFuture;
class ProcessCameraProviderWrapperImpl implements ProcessCameraProviderWrapper {
    private final ProcessCameraProvider mProcessCameraProvider;

    ProcessCameraProviderWrapperImpl(ProcessCameraProvider processCameraProvider) {
        this.mProcessCameraProvider = processCameraProvider;
    }

    @Override // androidx.camera.view.ProcessCameraProviderWrapper
    public boolean hasCamera(CameraSelector cameraSelector) throws CameraInfoUnavailableException {
        return this.mProcessCameraProvider.hasCamera(cameraSelector);
    }

    @Override // androidx.camera.view.ProcessCameraProviderWrapper
    public void unbind(UseCase... useCaseArr) {
        this.mProcessCameraProvider.unbind(useCaseArr);
    }

    @Override // androidx.camera.view.ProcessCameraProviderWrapper
    public void unbindAll() {
        this.mProcessCameraProvider.unbindAll();
    }

    @Override // androidx.camera.view.ProcessCameraProviderWrapper
    public Camera bindToLifecycle(LifecycleOwner lifecycleOwner, CameraSelector cameraSelector, UseCaseGroup useCaseGroup) {
        return this.mProcessCameraProvider.bindToLifecycle(lifecycleOwner, cameraSelector, useCaseGroup);
    }

    @Override // androidx.camera.view.ProcessCameraProviderWrapper
    public ListenableFuture<Void> shutdown() {
        return this.mProcessCameraProvider.shutdown();
    }
}


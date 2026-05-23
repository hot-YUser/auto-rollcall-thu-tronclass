package androidx.camera.view;

import android.content.Context;
import android.util.Log;
import androidx.camera.core.Camera;
import androidx.camera.core.UseCaseGroup;
import androidx.camera.core.impl.utils.Threads;
import androidx.lifecycle.LifecycleOwner;
import com.google.common.util.concurrent.ListenableFuture;
public final class LifecycleCameraController extends CameraController {
    private static final String TAG = "CamLifecycleController";
    private LifecycleOwner mLifecycleOwner;

    public LifecycleCameraController(Context context) {
        super(context);
    }

    LifecycleCameraController(Context context, ListenableFuture<ProcessCameraProviderWrapper> listenableFuture) {
        super(context, listenableFuture);
    }

    public void bindToLifecycle(LifecycleOwner lifecycleOwner) {
        Threads.checkMainThread();
        this.mLifecycleOwner = lifecycleOwner;
        startCameraAndTrackStates();
    }

    public void unbind() {
        Threads.checkMainThread();
        this.mLifecycleOwner = null;
        this.mCamera = null;
        if (this.mCameraProvider != null) {
            this.mCameraProvider.unbindAll();
        }
    }

    @Override // androidx.camera.view.CameraController
    Camera startCamera() {
        if (this.mLifecycleOwner == null) {
            Log.d(TAG, "Lifecycle is not set.");
            return null;
        }
        if (this.mCameraProvider == null) {
            Log.d(TAG, "CameraProvider is not ready.");
            return null;
        }
        UseCaseGroup useCaseGroupCreateUseCaseGroup = createUseCaseGroup();
        if (useCaseGroupCreateUseCaseGroup == null) {
            return null;
        }
        try {
            return this.mCameraProvider.bindToLifecycle(this.mLifecycleOwner, this.mCameraSelector, useCaseGroupCreateUseCaseGroup);
        } catch (IllegalArgumentException e) {
            throw new IllegalStateException("The selected camera does not support the enabled use cases. Please disable use case and/or select a different camera. e.g. #setVideoCaptureEnabled(false)", e);
        }
    }

    void shutDownForTests() {
        if (this.mCameraProvider != null) {
            this.mCameraProvider.shutdown();
        }
    }
}


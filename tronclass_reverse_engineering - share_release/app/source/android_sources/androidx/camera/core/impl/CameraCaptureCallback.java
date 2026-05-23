package androidx.camera.core.impl;
public abstract class CameraCaptureCallback {
    public void onCaptureCancelled() {
    }

    public void onCaptureCompleted(CameraCaptureResult cameraCaptureResult) {
    }

    public void onCaptureFailed(CameraCaptureFailure cameraCaptureFailure) {
    }
}


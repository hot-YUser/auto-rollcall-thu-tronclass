package androidx.camera.core.imagecapture;

import android.graphics.Matrix;
import android.graphics.Rect;
import androidx.camera.core.ImageCapture;
import androidx.camera.core.impl.CameraCaptureCallback;
import java.util.List;
import java.util.concurrent.Executor;
final class AutoValue_TakePictureRequest extends TakePictureRequest {
    private final Executor appExecutor;
    private final int captureMode;
    private final Rect cropRect;
    private final ImageCapture.OnImageCapturedCallback inMemoryCallback;
    private final int jpegQuality;
    private final ImageCapture.OnImageSavedCallback onDiskCallback;
    private final ImageCapture.OutputFileOptions outputFileOptions;
    private final int rotationDegrees;
    private final Matrix sensorToBufferTransform;
    private final List<CameraCaptureCallback> sessionConfigCameraCaptureCallbacks;

    AutoValue_TakePictureRequest(Executor executor, ImageCapture.OnImageCapturedCallback onImageCapturedCallback, ImageCapture.OnImageSavedCallback onImageSavedCallback, ImageCapture.OutputFileOptions outputFileOptions, Rect rect, Matrix matrix, int i, int i2, int i3, List<CameraCaptureCallback> list) {
        if (executor == null) {
            throw new NullPointerException("Null appExecutor");
        }
        this.appExecutor = executor;
        this.inMemoryCallback = onImageCapturedCallback;
        this.onDiskCallback = onImageSavedCallback;
        this.outputFileOptions = outputFileOptions;
        if (rect == null) {
            throw new NullPointerException("Null cropRect");
        }
        this.cropRect = rect;
        if (matrix == null) {
            throw new NullPointerException("Null sensorToBufferTransform");
        }
        this.sensorToBufferTransform = matrix;
        this.rotationDegrees = i;
        this.jpegQuality = i2;
        this.captureMode = i3;
        if (list == null) {
            throw new NullPointerException("Null sessionConfigCameraCaptureCallbacks");
        }
        this.sessionConfigCameraCaptureCallbacks = list;
    }

    @Override // androidx.camera.core.imagecapture.TakePictureRequest
    Executor getAppExecutor() {
        return this.appExecutor;
    }

    @Override // androidx.camera.core.imagecapture.TakePictureRequest
    ImageCapture.OnImageCapturedCallback getInMemoryCallback() {
        return this.inMemoryCallback;
    }

    @Override // androidx.camera.core.imagecapture.TakePictureRequest
    ImageCapture.OnImageSavedCallback getOnDiskCallback() {
        return this.onDiskCallback;
    }

    @Override // androidx.camera.core.imagecapture.TakePictureRequest
    ImageCapture.OutputFileOptions getOutputFileOptions() {
        return this.outputFileOptions;
    }

    @Override // androidx.camera.core.imagecapture.TakePictureRequest
    Rect getCropRect() {
        return this.cropRect;
    }

    @Override // androidx.camera.core.imagecapture.TakePictureRequest
    Matrix getSensorToBufferTransform() {
        return this.sensorToBufferTransform;
    }

    @Override // androidx.camera.core.imagecapture.TakePictureRequest
    int getRotationDegrees() {
        return this.rotationDegrees;
    }

    @Override // androidx.camera.core.imagecapture.TakePictureRequest
    int getJpegQuality() {
        return this.jpegQuality;
    }

    @Override // androidx.camera.core.imagecapture.TakePictureRequest
    int getCaptureMode() {
        return this.captureMode;
    }

    @Override // androidx.camera.core.imagecapture.TakePictureRequest
    List<CameraCaptureCallback> getSessionConfigCameraCaptureCallbacks() {
        return this.sessionConfigCameraCaptureCallbacks;
    }

    public String toString() {
        return "TakePictureRequest{appExecutor=" + this.appExecutor + ", inMemoryCallback=" + this.inMemoryCallback + ", onDiskCallback=" + this.onDiskCallback + ", outputFileOptions=" + this.outputFileOptions + ", cropRect=" + this.cropRect + ", sensorToBufferTransform=" + this.sensorToBufferTransform + ", rotationDegrees=" + this.rotationDegrees + ", jpegQuality=" + this.jpegQuality + ", captureMode=" + this.captureMode + ", sessionConfigCameraCaptureCallbacks=" + this.sessionConfigCameraCaptureCallbacks + "}";
    }

    public boolean equals(Object obj) {
        ImageCapture.OnImageCapturedCallback onImageCapturedCallback;
        ImageCapture.OnImageSavedCallback onImageSavedCallback;
        ImageCapture.OutputFileOptions outputFileOptions;
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof TakePictureRequest)) {
            return false;
        }
        TakePictureRequest takePictureRequest = (TakePictureRequest) obj;
        return this.appExecutor.equals(takePictureRequest.getAppExecutor()) && ((onImageCapturedCallback = this.inMemoryCallback) != null ? onImageCapturedCallback.equals(takePictureRequest.getInMemoryCallback()) : takePictureRequest.getInMemoryCallback() == null) && ((onImageSavedCallback = this.onDiskCallback) != null ? onImageSavedCallback.equals(takePictureRequest.getOnDiskCallback()) : takePictureRequest.getOnDiskCallback() == null) && ((outputFileOptions = this.outputFileOptions) != null ? outputFileOptions.equals(takePictureRequest.getOutputFileOptions()) : takePictureRequest.getOutputFileOptions() == null) && this.cropRect.equals(takePictureRequest.getCropRect()) && this.sensorToBufferTransform.equals(takePictureRequest.getSensorToBufferTransform()) && this.rotationDegrees == takePictureRequest.getRotationDegrees() && this.jpegQuality == takePictureRequest.getJpegQuality() && this.captureMode == takePictureRequest.getCaptureMode() && this.sessionConfigCameraCaptureCallbacks.equals(takePictureRequest.getSessionConfigCameraCaptureCallbacks());
    }

    public int hashCode() {
        int iHashCode = (this.appExecutor.hashCode() ^ 1000003) * 1000003;
        ImageCapture.OnImageCapturedCallback onImageCapturedCallback = this.inMemoryCallback;
        int iHashCode2 = (iHashCode ^ (onImageCapturedCallback == null ? 0 : onImageCapturedCallback.hashCode())) * 1000003;
        ImageCapture.OnImageSavedCallback onImageSavedCallback = this.onDiskCallback;
        int iHashCode3 = (iHashCode2 ^ (onImageSavedCallback == null ? 0 : onImageSavedCallback.hashCode())) * 1000003;
        ImageCapture.OutputFileOptions outputFileOptions = this.outputFileOptions;
        return ((((((((((((iHashCode3 ^ (outputFileOptions != null ? outputFileOptions.hashCode() : 0)) * 1000003) ^ this.cropRect.hashCode()) * 1000003) ^ this.sensorToBufferTransform.hashCode()) * 1000003) ^ this.rotationDegrees) * 1000003) ^ this.jpegQuality) * 1000003) ^ this.captureMode) * 1000003) ^ this.sessionConfigCameraCaptureCallbacks.hashCode();
    }
}


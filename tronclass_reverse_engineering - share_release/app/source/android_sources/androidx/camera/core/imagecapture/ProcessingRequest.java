package androidx.camera.core.imagecapture;

import android.graphics.Matrix;
import android.graphics.Rect;
import androidx.camera.core.ImageCapture;
import androidx.camera.core.ImageCaptureException;
import androidx.camera.core.ImageProxy;
import androidx.camera.core.impl.CaptureBundle;
import androidx.camera.core.impl.CaptureStage;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Objects;
class ProcessingRequest {
    private final TakePictureCallback mCallback;
    final ListenableFuture<Void> mCaptureFuture;
    private final Rect mCropRect;
    private final int mJpegQuality;
    private final ImageCapture.OutputFileOptions mOutputFileOptions;
    private final int mRotationDegrees;
    private final Matrix mSensorToBufferTransform;
    private final List<Integer> mStageIds = new ArrayList();
    private final String mTagBundleKey;

    ProcessingRequest(CaptureBundle captureBundle, ImageCapture.OutputFileOptions outputFileOptions, Rect rect, int i, int i2, Matrix matrix, TakePictureCallback takePictureCallback, ListenableFuture<Void> listenableFuture) {
        this.mOutputFileOptions = outputFileOptions;
        this.mJpegQuality = i2;
        this.mRotationDegrees = i;
        this.mCropRect = rect;
        this.mSensorToBufferTransform = matrix;
        this.mCallback = takePictureCallback;
        this.mTagBundleKey = String.valueOf(captureBundle.hashCode());
        Iterator it = ((List) Objects.requireNonNull(captureBundle.getCaptureStages())).iterator();
        while (it.hasNext()) {
            this.mStageIds.add(Integer.valueOf(((CaptureStage) it.next()).getId()));
        }
        this.mCaptureFuture = listenableFuture;
    }

    String getTagBundleKey() {
        return this.mTagBundleKey;
    }

    List<Integer> getStageIds() {
        return this.mStageIds;
    }

    ImageCapture.OutputFileOptions getOutputFileOptions() {
        return this.mOutputFileOptions;
    }

    Rect getCropRect() {
        return this.mCropRect;
    }

    int getRotationDegrees() {
        return this.mRotationDegrees;
    }

    int getJpegQuality() {
        return this.mJpegQuality;
    }

    Matrix getSensorToBufferTransform() {
        return this.mSensorToBufferTransform;
    }

    boolean isInMemoryCapture() {
        return getOutputFileOptions() == null;
    }

    void onImageCaptured() {
        this.mCallback.onImageCaptured();
    }

    void onFinalResult(ImageCapture.OutputFileResults outputFileResults) {
        this.mCallback.onFinalResult(outputFileResults);
    }

    void onFinalResult(ImageProxy imageProxy) {
        this.mCallback.onFinalResult(imageProxy);
    }

    void onProcessFailure(ImageCaptureException imageCaptureException) {
        this.mCallback.onProcessFailure(imageCaptureException);
    }

    void onCaptureFailure(ImageCaptureException imageCaptureException) {
        this.mCallback.onCaptureFailure(imageCaptureException);
    }

    boolean isAborted() {
        return this.mCallback.isAborted();
    }

    ListenableFuture<Void> getCaptureFuture() {
        return this.mCaptureFuture;
    }
}


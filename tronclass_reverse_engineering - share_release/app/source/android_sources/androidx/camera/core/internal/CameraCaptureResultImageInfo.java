package androidx.camera.core.internal;

import android.graphics.Matrix;
import androidx.camera.core.ImageInfo;
import androidx.camera.core.impl.CameraCaptureResult;
import androidx.camera.core.impl.TagBundle;
import androidx.camera.core.impl.utils.ExifData;
public final class CameraCaptureResultImageInfo implements ImageInfo {
    private final CameraCaptureResult mCameraCaptureResult;

    @Override // androidx.camera.core.ImageInfo
    public int getRotationDegrees() {
        return 0;
    }

    public CameraCaptureResultImageInfo(CameraCaptureResult cameraCaptureResult) {
        this.mCameraCaptureResult = cameraCaptureResult;
    }

    @Override // androidx.camera.core.ImageInfo
    public TagBundle getTagBundle() {
        return this.mCameraCaptureResult.getTagBundle();
    }

    @Override // androidx.camera.core.ImageInfo
    public long getTimestamp() {
        return this.mCameraCaptureResult.getTimestamp();
    }

    @Override // androidx.camera.core.ImageInfo
    public Matrix getSensorToBufferTransformMatrix() {
        return new Matrix();
    }

    @Override // androidx.camera.core.ImageInfo
    public void populateExifData(ExifData.Builder builder) {
        this.mCameraCaptureResult.populateExifData(builder);
    }

    public CameraCaptureResult getCameraCaptureResult() {
        return this.mCameraCaptureResult;
    }
}


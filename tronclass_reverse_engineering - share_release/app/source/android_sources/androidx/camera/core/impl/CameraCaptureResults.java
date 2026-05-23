package androidx.camera.core.impl;

import androidx.camera.core.ImageInfo;
import androidx.camera.core.internal.CameraCaptureResultImageInfo;
public final class CameraCaptureResults {
    public static CameraCaptureResult retrieveCameraCaptureResult(ImageInfo imageInfo) {
        if (imageInfo instanceof CameraCaptureResultImageInfo) {
            return ((CameraCaptureResultImageInfo) imageInfo).getCameraCaptureResult();
        }
        return null;
    }

    private CameraCaptureResults() {
    }
}


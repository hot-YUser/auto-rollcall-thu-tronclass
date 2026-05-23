package androidx.camera.view.transform;

import android.graphics.Matrix;
import android.graphics.RectF;
import androidx.camera.core.ImageProxy;
import androidx.camera.core.impl.utils.TransformUtils;
public final class ImageProxyTransformFactory {
    private boolean mUsingCropRect;
    private boolean mUsingRotationDegrees;

    public void setUsingCropRect(boolean z) {
        this.mUsingCropRect = z;
    }

    public boolean isUsingCropRect() {
        return this.mUsingCropRect;
    }

    public void setUsingRotationDegrees(boolean z) {
        this.mUsingRotationDegrees = z;
    }

    public boolean isUsingRotationDegrees() {
        return this.mUsingRotationDegrees;
    }

    public OutputTransform getOutputTransform(ImageProxy imageProxy) {
        int rotationDegrees = getRotationDegrees(imageProxy);
        RectF cropRect = getCropRect(imageProxy);
        Matrix rectToRect = TransformUtils.getRectToRect(cropRect, getRotatedCropRect(cropRect, rotationDegrees), rotationDegrees);
        rectToRect.preConcat(TransformUtils.getNormalizedToBuffer(imageProxy.getCropRect()));
        return new OutputTransform(rectToRect, TransformUtils.rectToSize(imageProxy.getCropRect()));
    }

    private RectF getCropRect(ImageProxy imageProxy) {
        if (this.mUsingCropRect) {
            return new RectF(imageProxy.getCropRect());
        }
        return new RectF(0.0f, 0.0f, imageProxy.getWidth(), imageProxy.getHeight());
    }

    private int getRotationDegrees(ImageProxy imageProxy) {
        if (this.mUsingRotationDegrees) {
            return imageProxy.getImageInfo().getRotationDegrees();
        }
        return 0;
    }

    static RectF getRotatedCropRect(RectF rectF, int i) {
        if (TransformUtils.is90or270(i)) {
            return new RectF(0.0f, 0.0f, rectF.height(), rectF.width());
        }
        return new RectF(0.0f, 0.0f, rectF.width(), rectF.height());
    }
}


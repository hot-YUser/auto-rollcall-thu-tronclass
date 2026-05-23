package com.king.camera.scan;

import android.graphics.Bitmap;
import com.king.camera.scan.util.BitmapUtils;
public class AnalyzeResult<T> {
    private Bitmap bitmap;
    private final FrameMetadata frameMetadata;
    private final byte[] imageData;
    private final int imageFormat;
    private final T result;

    public AnalyzeResult(byte[] bArr, int i, FrameMetadata frameMetadata, T t) {
        this.imageData = bArr;
        this.imageFormat = i;
        this.frameMetadata = frameMetadata;
        this.result = t;
    }

    public byte[] getImageData() {
        return this.imageData;
    }

    public int getImageFormat() {
        return this.imageFormat;
    }

    public FrameMetadata getFrameMetadata() {
        return this.frameMetadata;
    }

    public Bitmap getBitmap() {
        if (this.imageFormat != 17) {
            throw new IllegalArgumentException("only support ImageFormat.NV21 for now.");
        }
        if (this.bitmap == null) {
            this.bitmap = BitmapUtils.getBitmap(this.imageData, this.frameMetadata);
        }
        return this.bitmap;
    }

    @Deprecated
    public int getBitmapWidth() {
        return getImageWidth();
    }

    public int getImageWidth() {
        if (this.frameMetadata.getRotation() % 180 == 0) {
            return this.frameMetadata.getWidth();
        }
        return this.frameMetadata.getHeight();
    }

    @Deprecated
    public int getBitmapHeight() {
        return getImageHeight();
    }

    public int getImageHeight() {
        if (this.frameMetadata.getRotation() % 180 == 0) {
            return this.frameMetadata.getHeight();
        }
        return this.frameMetadata.getWidth();
    }

    public T getResult() {
        return this.result;
    }
}


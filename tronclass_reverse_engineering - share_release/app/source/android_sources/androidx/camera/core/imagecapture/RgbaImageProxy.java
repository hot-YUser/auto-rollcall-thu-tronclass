package androidx.camera.core.imagecapture;

import android.graphics.Bitmap;
import android.graphics.Matrix;
import android.graphics.Rect;
import android.media.Image;
import androidx.camera.core.ImageInfo;
import androidx.camera.core.ImageProxy;
import androidx.camera.core.impl.TagBundle;
import androidx.camera.core.impl.utils.ExifData;
import androidx.camera.core.internal.utils.ImageUtil;
import androidx.camera.core.processing.Packet;
import androidx.core.util.Preconditions;
import java.nio.ByteBuffer;
import java.util.Objects;
public final class RgbaImageProxy implements ImageProxy {
    private final Rect mCropRect;
    private final int mHeight;
    private final ImageInfo mImageInfo;
    private final Object mLock;
    ImageProxy.PlaneProxy[] mPlaneProxy;
    private final int mWidth;

    public RgbaImageProxy(Packet<Bitmap> packet) {
        this(packet.getData(), packet.getCropRect(), packet.getRotationDegrees(), packet.getSensorToBufferTransform(), packet.getCameraCaptureResult().getTimestamp());
    }

    public RgbaImageProxy(Bitmap bitmap, Rect rect, int i, Matrix matrix, long j) {
        this(ImageUtil.createDirectByteBuffer(bitmap), 4, bitmap.getWidth(), bitmap.getHeight(), rect, i, matrix, j);
    }

    public RgbaImageProxy(ByteBuffer byteBuffer, int i, int i2, int i3, Rect rect, int i4, Matrix matrix, long j) {
        this.mLock = new Object();
        this.mWidth = i2;
        this.mHeight = i3;
        this.mCropRect = rect;
        this.mImageInfo = createImageInfo(j, i4, matrix);
        byteBuffer.rewind();
        this.mPlaneProxy = new ImageProxy.PlaneProxy[]{createPlaneProxy(byteBuffer, i2 * i, i)};
    }

    @Override // androidx.camera.core.ImageProxy, java.lang.AutoCloseable
    public void close() {
        synchronized (this.mLock) {
            checkNotClosed();
            this.mPlaneProxy = null;
        }
    }

    @Override // androidx.camera.core.ImageProxy
    public Rect getCropRect() {
        Rect rect;
        synchronized (this.mLock) {
            checkNotClosed();
            rect = this.mCropRect;
        }
        return rect;
    }

    @Override // androidx.camera.core.ImageProxy
    public void setCropRect(Rect rect) {
        synchronized (this.mLock) {
            checkNotClosed();
            if (rect != null) {
                this.mCropRect.set(rect);
            }
        }
    }

    @Override // androidx.camera.core.ImageProxy
    public int getFormat() {
        synchronized (this.mLock) {
            checkNotClosed();
        }
        return 1;
    }

    @Override // androidx.camera.core.ImageProxy
    public int getHeight() {
        int i;
        synchronized (this.mLock) {
            checkNotClosed();
            i = this.mHeight;
        }
        return i;
    }

    @Override // androidx.camera.core.ImageProxy
    public int getWidth() {
        int i;
        synchronized (this.mLock) {
            checkNotClosed();
            i = this.mWidth;
        }
        return i;
    }

    @Override // androidx.camera.core.ImageProxy
    public ImageProxy.PlaneProxy[] getPlanes() {
        ImageProxy.PlaneProxy[] planeProxyArr;
        synchronized (this.mLock) {
            checkNotClosed();
            planeProxyArr = (ImageProxy.PlaneProxy[]) Objects.requireNonNull(this.mPlaneProxy);
        }
        return planeProxyArr;
    }

    @Override // androidx.camera.core.ImageProxy
    public ImageInfo getImageInfo() {
        ImageInfo imageInfo;
        synchronized (this.mLock) {
            checkNotClosed();
            imageInfo = this.mImageInfo;
        }
        return imageInfo;
    }

    @Override // androidx.camera.core.ImageProxy
    public Image getImage() {
        synchronized (this.mLock) {
            checkNotClosed();
        }
        return null;
    }

    public Bitmap createBitmap() {
        Bitmap bitmapCreateBitmapFromPlane;
        synchronized (this.mLock) {
            checkNotClosed();
            bitmapCreateBitmapFromPlane = ImageUtil.createBitmapFromPlane(getPlanes(), getWidth(), getHeight());
        }
        return bitmapCreateBitmapFromPlane;
    }

    private void checkNotClosed() {
        synchronized (this.mLock) {
            Preconditions.checkState(this.mPlaneProxy != null, "The image is closed.");
        }
    }

    private static ImageProxy.PlaneProxy createPlaneProxy(final ByteBuffer byteBuffer, final int i, final int i2) {
        return new ImageProxy.PlaneProxy() { // from class: androidx.camera.core.imagecapture.RgbaImageProxy.1
            @Override // androidx.camera.core.ImageProxy.PlaneProxy
            public int getRowStride() {
                return i;
            }

            @Override // androidx.camera.core.ImageProxy.PlaneProxy
            public int getPixelStride() {
                return i2;
            }

            @Override // androidx.camera.core.ImageProxy.PlaneProxy
            public ByteBuffer getBuffer() {
                return byteBuffer;
            }
        };
    }

    private static ImageInfo createImageInfo(final long j, final int i, final Matrix matrix) {
        return new ImageInfo() { // from class: androidx.camera.core.imagecapture.RgbaImageProxy.2
            @Override // androidx.camera.core.ImageInfo
            public TagBundle getTagBundle() {
                throw new UnsupportedOperationException("Custom ImageProxy does not contain TagBundle");
            }

            @Override // androidx.camera.core.ImageInfo
            public long getTimestamp() {
                return j;
            }

            @Override // androidx.camera.core.ImageInfo
            public int getRotationDegrees() {
                return i;
            }

            @Override // androidx.camera.core.ImageInfo
            public Matrix getSensorToBufferTransformMatrix() {
                return new Matrix(matrix);
            }

            @Override // androidx.camera.core.ImageInfo
            public void populateExifData(ExifData.Builder builder) {
                throw new UnsupportedOperationException("Custom ImageProxy does not contain Exif data.");
            }
        };
    }
}


package androidx.camera.core.imagecapture;

import android.util.Pair;
import android.util.Size;
import android.view.Surface;
import androidx.camera.core.ImageProxy;
import androidx.camera.core.SettableImageProxy;
import androidx.camera.core.impl.ImageReaderProxy;
import androidx.camera.core.impl.TagBundle;
import androidx.camera.core.internal.CameraCaptureResultImageInfo;
import androidx.camera.core.streamsharing.VirtualCameraCaptureResult;
import androidx.core.util.Preconditions;
import java.util.concurrent.Executor;
public class NoMetadataImageReader implements ImageReaderProxy {
    private ProcessingRequest mPendingRequest;
    private final ImageReaderProxy mWrappedImageReader;

    NoMetadataImageReader(ImageReaderProxy imageReaderProxy) {
        this.mWrappedImageReader = imageReaderProxy;
    }

    void acceptProcessingRequest(ProcessingRequest processingRequest) {
        Preconditions.checkState(this.mPendingRequest == null, "Pending request should be null");
        this.mPendingRequest = processingRequest;
    }

    @Override // androidx.camera.core.impl.ImageReaderProxy
    public ImageProxy acquireLatestImage() {
        return createImageProxyWithEmptyMetadata(this.mWrappedImageReader.acquireLatestImage());
    }

    @Override // androidx.camera.core.impl.ImageReaderProxy
    public ImageProxy acquireNextImage() {
        return createImageProxyWithEmptyMetadata(this.mWrappedImageReader.acquireNextImage());
    }

    @Override // androidx.camera.core.impl.ImageReaderProxy
    public void close() {
        this.mWrappedImageReader.close();
    }

    @Override // androidx.camera.core.impl.ImageReaderProxy
    public int getHeight() {
        return this.mWrappedImageReader.getHeight();
    }

    @Override // androidx.camera.core.impl.ImageReaderProxy
    public int getWidth() {
        return this.mWrappedImageReader.getWidth();
    }

    @Override // androidx.camera.core.impl.ImageReaderProxy
    public int getImageFormat() {
        return this.mWrappedImageReader.getImageFormat();
    }

    @Override // androidx.camera.core.impl.ImageReaderProxy
    public int getMaxImages() {
        return this.mWrappedImageReader.getMaxImages();
    }

    @Override // androidx.camera.core.impl.ImageReaderProxy
    public Surface getSurface() {
        return this.mWrappedImageReader.getSurface();
    }

    @Override // androidx.camera.core.impl.ImageReaderProxy
    public void setOnImageAvailableListener(final ImageReaderProxy.OnImageAvailableListener onImageAvailableListener, Executor executor) {
        this.mWrappedImageReader.setOnImageAvailableListener(new ImageReaderProxy.OnImageAvailableListener() { // from class: androidx.camera.core.imagecapture.NoMetadataImageReader$$ExternalSyntheticLambda0
            @Override // androidx.camera.core.impl.ImageReaderProxy.OnImageAvailableListener
            public final void onImageAvailable(ImageReaderProxy imageReaderProxy) {
                this.f$0.m138xfcc2464(onImageAvailableListener, imageReaderProxy);
            }
        }, executor);
    }
    /* synthetic */ void m138xfcc2464(ImageReaderProxy.OnImageAvailableListener onImageAvailableListener, ImageReaderProxy imageReaderProxy) {
        onImageAvailableListener.onImageAvailable(this);
    }

    @Override // androidx.camera.core.impl.ImageReaderProxy
    public void clearOnImageAvailableListener() {
        this.mWrappedImageReader.clearOnImageAvailableListener();
    }

    private ImageProxy createImageProxyWithEmptyMetadata(ImageProxy imageProxy) {
        if (imageProxy == null) {
            return null;
        }
        Preconditions.checkState(this.mPendingRequest != null, "Pending request should not be null");
        TagBundle tagBundleCreate = TagBundle.create(new Pair(this.mPendingRequest.getTagBundleKey(), this.mPendingRequest.getStageIds().get(0)));
        this.mPendingRequest = null;
        return new SettableImageProxy(imageProxy, new Size(imageProxy.getWidth(), imageProxy.getHeight()), new CameraCaptureResultImageInfo(new VirtualCameraCaptureResult(tagBundleCreate, imageProxy.getImageInfo().getTimestamp())));
    }
}


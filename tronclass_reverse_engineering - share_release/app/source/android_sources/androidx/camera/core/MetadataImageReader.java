package androidx.camera.core;

import android.media.ImageReader;
import android.util.LongSparseArray;
import android.view.Surface;
import androidx.camera.core.ForwardingImageProxy;
import androidx.camera.core.impl.CameraCaptureCallback;
import androidx.camera.core.impl.CameraCaptureResult;
import androidx.camera.core.impl.ImageReaderProxy;
import androidx.camera.core.internal.CameraCaptureResultImageInfo;
import androidx.core.util.Preconditions;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.Executor;
public class MetadataImageReader implements ImageReaderProxy, ForwardingImageProxy.OnImageCloseListener {
    private static final String TAG = "MetadataImageReader";
    private final List<ImageProxy> mAcquiredImageProxies;
    private CameraCaptureCallback mCameraCaptureCallback;
    private boolean mClosed;
    private Executor mExecutor;
    private int mImageProxiesIndex;
    private final ImageReaderProxy mImageReaderProxy;
    ImageReaderProxy.OnImageAvailableListener mListener;
    private final Object mLock;
    private final List<ImageProxy> mMatchedImageProxies;
    private final LongSparseArray<ImageInfo> mPendingImageInfos;
    private final LongSparseArray<ImageProxy> mPendingImages;
    private ImageReaderProxy.OnImageAvailableListener mTransformedListener;
    private int mUnAcquiredAvailableImageCount;
    /* synthetic */ void m129lambda$new$0$androidxcameracoreMetadataImageReader(ImageReaderProxy imageReaderProxy) {
        synchronized (this.mLock) {
            this.mUnAcquiredAvailableImageCount++;
        }
        imageIncoming(imageReaderProxy);
    }

    public MetadataImageReader(int i, int i2, int i3, int i4) {
        this(createImageReaderProxy(i, i2, i3, i4));
    }

    private static ImageReaderProxy createImageReaderProxy(int i, int i2, int i3, int i4) {
        return new AndroidImageReaderProxy(ImageReader.newInstance(i, i2, i3, i4));
    }

    MetadataImageReader(ImageReaderProxy imageReaderProxy) {
        this.mLock = new Object();
        this.mCameraCaptureCallback = new CameraCaptureCallback() { // from class: androidx.camera.core.MetadataImageReader.1
            @Override // androidx.camera.core.impl.CameraCaptureCallback
            public void onCaptureCompleted(CameraCaptureResult cameraCaptureResult) {
                super.onCaptureCompleted(cameraCaptureResult);
                MetadataImageReader.this.resultIncoming(cameraCaptureResult);
            }
        };
        this.mUnAcquiredAvailableImageCount = 0;
        this.mTransformedListener = new ImageReaderProxy.OnImageAvailableListener() { // from class: androidx.camera.core.MetadataImageReader$$ExternalSyntheticLambda0
            @Override // androidx.camera.core.impl.ImageReaderProxy.OnImageAvailableListener
            public final void onImageAvailable(ImageReaderProxy imageReaderProxy2) {
                this.f$0.m129lambda$new$0$androidxcameracoreMetadataImageReader(imageReaderProxy2);
            }
        };
        this.mClosed = false;
        this.mPendingImageInfos = new LongSparseArray<>();
        this.mPendingImages = new LongSparseArray<>();
        this.mAcquiredImageProxies = new ArrayList();
        this.mImageReaderProxy = imageReaderProxy;
        this.mImageProxiesIndex = 0;
        this.mMatchedImageProxies = new ArrayList(getMaxImages());
    }

    @Override // androidx.camera.core.impl.ImageReaderProxy
    public ImageProxy acquireLatestImage() {
        synchronized (this.mLock) {
            if (this.mMatchedImageProxies.isEmpty()) {
                return null;
            }
            if (this.mImageProxiesIndex >= this.mMatchedImageProxies.size()) {
                throw new IllegalStateException("Maximum image number reached.");
            }
            ArrayList arrayList = new ArrayList();
            for (int i = 0; i < this.mMatchedImageProxies.size() - 1; i++) {
                if (!this.mAcquiredImageProxies.contains(this.mMatchedImageProxies.get(i))) {
                    arrayList.add(this.mMatchedImageProxies.get(i));
                }
            }
            Iterator it = arrayList.iterator();
            while (it.hasNext()) {
                ((ImageProxy) it.next()).close();
            }
            int size = this.mMatchedImageProxies.size();
            List<ImageProxy> list = this.mMatchedImageProxies;
            this.mImageProxiesIndex = size;
            ImageProxy imageProxy = list.get(size - 1);
            this.mAcquiredImageProxies.add(imageProxy);
            return imageProxy;
        }
    }

    @Override // androidx.camera.core.impl.ImageReaderProxy
    public ImageProxy acquireNextImage() {
        synchronized (this.mLock) {
            if (this.mMatchedImageProxies.isEmpty()) {
                return null;
            }
            if (this.mImageProxiesIndex >= this.mMatchedImageProxies.size()) {
                throw new IllegalStateException("Maximum image number reached.");
            }
            List<ImageProxy> list = this.mMatchedImageProxies;
            int i = this.mImageProxiesIndex;
            this.mImageProxiesIndex = i + 1;
            ImageProxy imageProxy = list.get(i);
            this.mAcquiredImageProxies.add(imageProxy);
            return imageProxy;
        }
    }

    @Override // androidx.camera.core.impl.ImageReaderProxy
    public void close() {
        synchronized (this.mLock) {
            if (this.mClosed) {
                return;
            }
            Iterator it = new ArrayList(this.mMatchedImageProxies).iterator();
            while (it.hasNext()) {
                ((ImageProxy) it.next()).close();
            }
            this.mMatchedImageProxies.clear();
            this.mImageReaderProxy.close();
            this.mClosed = true;
        }
    }

    @Override // androidx.camera.core.impl.ImageReaderProxy
    public int getHeight() {
        int height;
        synchronized (this.mLock) {
            height = this.mImageReaderProxy.getHeight();
        }
        return height;
    }

    @Override // androidx.camera.core.impl.ImageReaderProxy
    public int getWidth() {
        int width;
        synchronized (this.mLock) {
            width = this.mImageReaderProxy.getWidth();
        }
        return width;
    }

    @Override // androidx.camera.core.impl.ImageReaderProxy
    public int getImageFormat() {
        int imageFormat;
        synchronized (this.mLock) {
            imageFormat = this.mImageReaderProxy.getImageFormat();
        }
        return imageFormat;
    }

    @Override // androidx.camera.core.impl.ImageReaderProxy
    public int getMaxImages() {
        int maxImages;
        synchronized (this.mLock) {
            maxImages = this.mImageReaderProxy.getMaxImages();
        }
        return maxImages;
    }

    @Override // androidx.camera.core.impl.ImageReaderProxy
    public Surface getSurface() {
        Surface surface;
        synchronized (this.mLock) {
            surface = this.mImageReaderProxy.getSurface();
        }
        return surface;
    }

    @Override // androidx.camera.core.impl.ImageReaderProxy
    public void setOnImageAvailableListener(ImageReaderProxy.OnImageAvailableListener onImageAvailableListener, Executor executor) {
        synchronized (this.mLock) {
            this.mListener = (ImageReaderProxy.OnImageAvailableListener) Preconditions.checkNotNull(onImageAvailableListener);
            this.mExecutor = (Executor) Preconditions.checkNotNull(executor);
            this.mImageReaderProxy.setOnImageAvailableListener(this.mTransformedListener, executor);
        }
    }

    @Override // androidx.camera.core.impl.ImageReaderProxy
    public void clearOnImageAvailableListener() {
        synchronized (this.mLock) {
            this.mImageReaderProxy.clearOnImageAvailableListener();
            this.mListener = null;
            this.mExecutor = null;
            this.mUnAcquiredAvailableImageCount = 0;
        }
    }

    @Override // androidx.camera.core.ForwardingImageProxy.OnImageCloseListener
    public void onImageClose(ImageProxy imageProxy) {
        synchronized (this.mLock) {
            dequeImageProxy(imageProxy);
        }
    }

    private void enqueueImageProxy(SettableImageProxy settableImageProxy) {
        final ImageReaderProxy.OnImageAvailableListener onImageAvailableListener;
        Executor executor;
        synchronized (this.mLock) {
            if (this.mMatchedImageProxies.size() < getMaxImages()) {
                settableImageProxy.addOnImageCloseListener(this);
                this.mMatchedImageProxies.add(settableImageProxy);
                onImageAvailableListener = this.mListener;
                executor = this.mExecutor;
            } else {
                Logger.d("TAG", "Maximum image number reached.");
                settableImageProxy.close();
                onImageAvailableListener = null;
                executor = null;
            }
        }
        if (onImageAvailableListener != null) {
            if (executor != null) {
                executor.execute(new Runnable() { // from class: androidx.camera.core.MetadataImageReader$$ExternalSyntheticLambda1
                    @Override // java.lang.Runnable
                    public final void run() {
                        this.f$0.m128xfaac2cde(onImageAvailableListener);
                    }
                });
            } else {
                onImageAvailableListener.onImageAvailable(this);
            }
        }
    }
    /* synthetic */ void m128xfaac2cde(ImageReaderProxy.OnImageAvailableListener onImageAvailableListener) {
        onImageAvailableListener.onImageAvailable(this);
    }

    private void dequeImageProxy(ImageProxy imageProxy) {
        synchronized (this.mLock) {
            int iIndexOf = this.mMatchedImageProxies.indexOf(imageProxy);
            if (iIndexOf >= 0) {
                this.mMatchedImageProxies.remove(iIndexOf);
                int i = this.mImageProxiesIndex;
                if (iIndexOf <= i) {
                    this.mImageProxiesIndex = i - 1;
                }
            }
            this.mAcquiredImageProxies.remove(imageProxy);
            if (this.mUnAcquiredAvailableImageCount > 0) {
                imageIncoming(this.mImageReaderProxy);
            }
        }
    }

    public CameraCaptureCallback getCameraCaptureCallback() {
        return this.mCameraCaptureCallback;
    }

    void imageIncoming(ImageReaderProxy imageReaderProxy) {
        ImageProxy imageProxyAcquireNextImage;
        synchronized (this.mLock) {
            if (this.mClosed) {
                return;
            }
            int size = this.mPendingImages.size() + this.mMatchedImageProxies.size();
            if (size >= imageReaderProxy.getMaxImages()) {
                Logger.d(TAG, "Skip to acquire the next image because the acquired image count has reached the max images count.");
                return;
            }
            do {
                try {
                    imageProxyAcquireNextImage = imageReaderProxy.acquireNextImage();
                    if (imageProxyAcquireNextImage != null) {
                        this.mUnAcquiredAvailableImageCount--;
                        size++;
                        this.mPendingImages.put(imageProxyAcquireNextImage.getImageInfo().getTimestamp(), imageProxyAcquireNextImage);
                        matchImages();
                    }
                } catch (IllegalStateException e) {
                    Logger.d(TAG, "Failed to acquire next image.", e);
                    imageProxyAcquireNextImage = null;
                }
                if (imageProxyAcquireNextImage == null || this.mUnAcquiredAvailableImageCount <= 0) {
                    break;
                }
            } while (size < imageReaderProxy.getMaxImages());
        }
    }

    void resultIncoming(CameraCaptureResult cameraCaptureResult) {
        synchronized (this.mLock) {
            if (this.mClosed) {
                return;
            }
            this.mPendingImageInfos.put(cameraCaptureResult.getTimestamp(), new CameraCaptureResultImageInfo(cameraCaptureResult));
            matchImages();
        }
    }

    private void removeStaleData() {
        synchronized (this.mLock) {
            if (this.mPendingImages.size() != 0 && this.mPendingImageInfos.size() != 0) {
                Long lValueOf = Long.valueOf(this.mPendingImages.keyAt(0));
                Long lValueOf2 = Long.valueOf(this.mPendingImageInfos.keyAt(0));
                Preconditions.checkArgument(!lValueOf2.equals(lValueOf));
                if (lValueOf2.longValue() > lValueOf.longValue()) {
                    for (int size = this.mPendingImages.size() - 1; size >= 0; size--) {
                        if (this.mPendingImages.keyAt(size) < lValueOf2.longValue()) {
                            this.mPendingImages.valueAt(size).close();
                            this.mPendingImages.removeAt(size);
                        }
                    }
                } else {
                    for (int size2 = this.mPendingImageInfos.size() - 1; size2 >= 0; size2--) {
                        if (this.mPendingImageInfos.keyAt(size2) < lValueOf.longValue()) {
                            this.mPendingImageInfos.removeAt(size2);
                        }
                    }
                }
            }
        }
    }

    private void matchImages() {
        synchronized (this.mLock) {
            for (int size = this.mPendingImageInfos.size() - 1; size >= 0; size--) {
                ImageInfo imageInfoValueAt = this.mPendingImageInfos.valueAt(size);
                long timestamp = imageInfoValueAt.getTimestamp();
                ImageProxy imageProxy = this.mPendingImages.get(timestamp);
                if (imageProxy != null) {
                    this.mPendingImages.remove(timestamp);
                    this.mPendingImageInfos.removeAt(size);
                    enqueueImageProxy(new SettableImageProxy(imageProxy, imageInfoValueAt));
                }
            }
            removeStaleData();
        }
    }
}


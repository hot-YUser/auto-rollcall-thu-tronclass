package androidx.camera.core;

import android.graphics.Rect;
import android.media.Image;
import androidx.camera.core.ImageProxy;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;
public abstract class ForwardingImageProxy implements ImageProxy {
    protected final ImageProxy mImage;
    private final Object mLock = new Object();
    private final Set<OnImageCloseListener> mOnImageCloseListeners = new HashSet();

    public interface OnImageCloseListener {
        void onImageClose(ImageProxy imageProxy);
    }

    protected ForwardingImageProxy(ImageProxy imageProxy) {
        this.mImage = imageProxy;
    }

    @Override // androidx.camera.core.ImageProxy, java.lang.AutoCloseable
    public void close() {
        this.mImage.close();
        notifyOnImageCloseListeners();
    }

    @Override // androidx.camera.core.ImageProxy
    public Rect getCropRect() {
        return this.mImage.getCropRect();
    }

    @Override // androidx.camera.core.ImageProxy
    public void setCropRect(Rect rect) {
        this.mImage.setCropRect(rect);
    }

    @Override // androidx.camera.core.ImageProxy
    public int getFormat() {
        return this.mImage.getFormat();
    }

    @Override // androidx.camera.core.ImageProxy
    public int getHeight() {
        return this.mImage.getHeight();
    }

    @Override // androidx.camera.core.ImageProxy
    public int getWidth() {
        return this.mImage.getWidth();
    }

    @Override // androidx.camera.core.ImageProxy
    public ImageProxy.PlaneProxy[] getPlanes() {
        return this.mImage.getPlanes();
    }

    @Override // androidx.camera.core.ImageProxy
    public ImageInfo getImageInfo() {
        return this.mImage.getImageInfo();
    }

    @Override // androidx.camera.core.ImageProxy
    public Image getImage() {
        return this.mImage.getImage();
    }

    public void addOnImageCloseListener(OnImageCloseListener onImageCloseListener) {
        synchronized (this.mLock) {
            this.mOnImageCloseListeners.add(onImageCloseListener);
        }
    }

    protected void notifyOnImageCloseListeners() {
        HashSet hashSet;
        synchronized (this.mLock) {
            hashSet = new HashSet(this.mOnImageCloseListeners);
        }
        Iterator it = hashSet.iterator();
        while (it.hasNext()) {
            ((OnImageCloseListener) it.next()).onImageClose(this);
        }
    }
}


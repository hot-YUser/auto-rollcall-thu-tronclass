package androidx.camera.view;

import android.graphics.Bitmap;
import android.util.Size;
import android.view.View;
import android.widget.FrameLayout;
import androidx.camera.core.SurfaceRequest;
import androidx.camera.view.PreviewView;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.concurrent.Executor;
abstract class PreviewViewImplementation {
    FrameLayout mParent;
    private final PreviewTransformation mPreviewTransform;
    Size mResolution;
    private boolean mWasSurfaceProvided = false;

    interface OnSurfaceNotInUseListener {
        void onSurfaceNotInUse();
    }

    abstract View getPreview();

    abstract Bitmap getPreviewBitmap();

    abstract void initializePreview();

    abstract void onAttachedToWindow();

    abstract void onDetachedFromWindow();

    abstract void onSurfaceRequested(SurfaceRequest surfaceRequest, OnSurfaceNotInUseListener onSurfaceNotInUseListener);

    void setFrameUpdateListener(Executor executor, PreviewView.OnFrameUpdateListener onFrameUpdateListener) {
    }

    abstract ListenableFuture<Void> waitForNextFrame();

    PreviewViewImplementation(FrameLayout frameLayout, PreviewTransformation previewTransformation) {
        this.mParent = frameLayout;
        this.mPreviewTransform = previewTransformation;
    }

    void redrawPreview() {
        View preview = getPreview();
        if (preview == null || !this.mWasSurfaceProvided) {
            return;
        }
        this.mPreviewTransform.transformView(new Size(this.mParent.getWidth(), this.mParent.getHeight()), this.mParent.getLayoutDirection(), preview);
    }

    void onSurfaceProvided() {
        this.mWasSurfaceProvided = true;
        redrawPreview();
    }

    Bitmap getBitmap() {
        Bitmap previewBitmap = getPreviewBitmap();
        if (previewBitmap == null) {
            return null;
        }
        return this.mPreviewTransform.createTransformedBitmap(previewBitmap, new Size(this.mParent.getWidth(), this.mParent.getHeight()), this.mParent.getLayoutDirection());
    }
}


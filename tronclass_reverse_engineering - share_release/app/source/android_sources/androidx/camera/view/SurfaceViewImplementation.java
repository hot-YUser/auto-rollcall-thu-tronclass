package androidx.camera.view;

import android.graphics.Bitmap;
import android.os.Handler;
import android.os.HandlerThread;
import android.util.Size;
import android.view.PixelCopy;
import android.view.Surface;
import android.view.SurfaceHolder;
import android.view.SurfaceView;
import android.view.View;
import android.widget.FrameLayout;
import androidx.camera.core.Logger;
import androidx.camera.core.SurfaceRequest;
import androidx.camera.core.impl.utils.futures.Futures;
import androidx.camera.view.PreviewView;
import androidx.camera.view.PreviewViewImplementation;
import androidx.camera.view.SurfaceViewImplementation;
import androidx.core.content.ContextCompat;
import androidx.core.util.Consumer;
import androidx.core.util.Preconditions;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.Objects;
import java.util.concurrent.Executor;
import java.util.concurrent.Semaphore;
import java.util.concurrent.TimeUnit;
final class SurfaceViewImplementation extends PreviewViewImplementation {
    private static final int SCREENSHOT_TIMEOUT_MILLIS = 100;
    private static final String TAG = "SurfaceViewImpl";
    final SurfaceRequestCallback mSurfaceRequestCallback;
    SurfaceView mSurfaceView;

    @Override // androidx.camera.view.PreviewViewImplementation
    void onAttachedToWindow() {
    }

    @Override // androidx.camera.view.PreviewViewImplementation
    void onDetachedFromWindow() {
    }

    SurfaceViewImplementation(FrameLayout frameLayout, PreviewTransformation previewTransformation) {
        super(frameLayout, previewTransformation);
        this.mSurfaceRequestCallback = new SurfaceRequestCallback();
    }

    @Override // androidx.camera.view.PreviewViewImplementation
    void onSurfaceRequested(final SurfaceRequest surfaceRequest, final PreviewViewImplementation.OnSurfaceNotInUseListener onSurfaceNotInUseListener) {
        if (!shouldReusePreview(this.mSurfaceView, this.mResolution, surfaceRequest)) {
            this.mResolution = surfaceRequest.getResolution();
            initializePreview();
        }
        if (onSurfaceNotInUseListener != null) {
            Executor mainExecutor = ContextCompat.getMainExecutor(this.mSurfaceView.getContext());
            Objects.requireNonNull(onSurfaceNotInUseListener);
            surfaceRequest.addRequestCancellationListener(mainExecutor, new Runnable() { // from class: androidx.camera.view.SurfaceViewImplementation$$ExternalSyntheticLambda0
                @Override // java.lang.Runnable
                public final void run() {
                    onSurfaceNotInUseListener.onSurfaceNotInUse();
                }
            });
        }
        this.mSurfaceView.post(new Runnable() { // from class: androidx.camera.view.SurfaceViewImplementation$$ExternalSyntheticLambda1
            @Override // java.lang.Runnable
            public final void run() {
                this.f$0.m269x6305943b(surfaceRequest, onSurfaceNotInUseListener);
            }
        });
    }
    /* synthetic */ void m269x6305943b(SurfaceRequest surfaceRequest, PreviewViewImplementation.OnSurfaceNotInUseListener onSurfaceNotInUseListener) {
        this.mSurfaceRequestCallback.setSurfaceRequest(surfaceRequest, onSurfaceNotInUseListener);
    }

    @Override // androidx.camera.view.PreviewViewImplementation
    void initializePreview() {
        Preconditions.checkNotNull(this.mParent);
        Preconditions.checkNotNull(this.mResolution);
        SurfaceView surfaceView = new SurfaceView(this.mParent.getContext());
        this.mSurfaceView = surfaceView;
        surfaceView.setLayoutParams(new FrameLayout.LayoutParams(this.mResolution.getWidth(), this.mResolution.getHeight()));
        this.mParent.removeAllViews();
        this.mParent.addView(this.mSurfaceView);
        this.mSurfaceView.getHolder().addCallback(this.mSurfaceRequestCallback);
    }

    @Override // androidx.camera.view.PreviewViewImplementation
    View getPreview() {
        return this.mSurfaceView;
    }

    @Override // androidx.camera.view.PreviewViewImplementation
    Bitmap getPreviewBitmap() {
        SurfaceView surfaceView = this.mSurfaceView;
        if (surfaceView == null || surfaceView.getHolder().getSurface() == null || !this.mSurfaceView.getHolder().getSurface().isValid()) {
            return null;
        }
        final Semaphore semaphore = new Semaphore(0);
        Bitmap bitmapCreateBitmap = Bitmap.createBitmap(this.mSurfaceView.getWidth(), this.mSurfaceView.getHeight(), Bitmap.Config.ARGB_8888);
        HandlerThread handlerThread = new HandlerThread("pixelCopyRequest Thread");
        handlerThread.start();
        Api24Impl.pixelCopyRequest(this.mSurfaceView, bitmapCreateBitmap, new PixelCopy.OnPixelCopyFinishedListener() { // from class: androidx.camera.view.SurfaceViewImplementation$$ExternalSyntheticLambda2
            @Override // android.view.PixelCopy.OnPixelCopyFinishedListener
            public final void onPixelCopyFinished(int i) {
                SurfaceViewImplementation.lambda$getPreviewBitmap$1(semaphore, i);
            }
        }, new Handler(handlerThread.getLooper()));
        try {
            try {
                if (!semaphore.tryAcquire(1, 100L, TimeUnit.MILLISECONDS)) {
                    Logger.e(TAG, "Timed out while trying to acquire screenshot.");
                }
            } catch (InterruptedException e) {
                Logger.e(TAG, "Interrupted while trying to acquire screenshot.", e);
            }
            return bitmapCreateBitmap;
        } finally {
            handlerThread.quitSafely();
        }
    }

    static /* synthetic */ void lambda$getPreviewBitmap$1(Semaphore semaphore, int i) {
        if (i == 0) {
            Logger.d(TAG, "PreviewView.SurfaceViewImplementation.getBitmap() succeeded");
        } else {
            Logger.e(TAG, "PreviewView.SurfaceViewImplementation.getBitmap() failed with error " + i);
        }
        semaphore.release();
    }

    class SurfaceRequestCallback implements SurfaceHolder.Callback {
        private Size mCurrentSurfaceSize;
        private PreviewViewImplementation.OnSurfaceNotInUseListener mOnSurfaceNotInUseListener;
        private SurfaceRequest mSurfaceRequest;
        private SurfaceRequest mSurfaceRequestToBeInvalidated;
        private Size mTargetSize;
        private boolean mWasSurfaceProvided = false;
        private boolean mNeedToInvalidate = false;

        SurfaceRequestCallback() {
        }

        void setSurfaceRequest(SurfaceRequest surfaceRequest, PreviewViewImplementation.OnSurfaceNotInUseListener onSurfaceNotInUseListener) {
            cancelPreviousRequest();
            if (this.mNeedToInvalidate) {
                this.mNeedToInvalidate = false;
                surfaceRequest.invalidate();
                return;
            }
            this.mSurfaceRequest = surfaceRequest;
            this.mOnSurfaceNotInUseListener = onSurfaceNotInUseListener;
            Size resolution = surfaceRequest.getResolution();
            this.mTargetSize = resolution;
            this.mWasSurfaceProvided = false;
            if (tryToComplete()) {
                return;
            }
            Logger.d(SurfaceViewImplementation.TAG, "Wait for new Surface creation.");
            SurfaceViewImplementation.this.mSurfaceView.getHolder().setFixedSize(resolution.getWidth(), resolution.getHeight());
        }

        private boolean tryToComplete() {
            Surface surface = SurfaceViewImplementation.this.mSurfaceView.getHolder().getSurface();
            if (!canProvideSurface()) {
                return false;
            }
            Logger.d(SurfaceViewImplementation.TAG, "Surface set on Preview.");
            final PreviewViewImplementation.OnSurfaceNotInUseListener onSurfaceNotInUseListener = this.mOnSurfaceNotInUseListener;
            ((SurfaceRequest) Objects.requireNonNull(this.mSurfaceRequest)).provideSurface(surface, ContextCompat.getMainExecutor(SurfaceViewImplementation.this.mSurfaceView.getContext()), new Consumer() { // from class: androidx.camera.view.SurfaceViewImplementation$SurfaceRequestCallback$$ExternalSyntheticLambda0
                @Override // androidx.core.util.Consumer
                public final void accept(Object obj) {
                    SurfaceViewImplementation.SurfaceRequestCallback.lambda$tryToComplete$0(onSurfaceNotInUseListener, (SurfaceRequest.Result) obj);
                }
            });
            this.mWasSurfaceProvided = true;
            SurfaceViewImplementation.this.onSurfaceProvided();
            return true;
        }

        static /* synthetic */ void lambda$tryToComplete$0(PreviewViewImplementation.OnSurfaceNotInUseListener onSurfaceNotInUseListener, SurfaceRequest.Result result) {
            Logger.d(SurfaceViewImplementation.TAG, "Safe to release surface.");
            if (onSurfaceNotInUseListener != null) {
                onSurfaceNotInUseListener.onSurfaceNotInUse();
            }
        }

        private boolean canProvideSurface() {
            return (this.mWasSurfaceProvided || this.mSurfaceRequest == null || !Objects.equals(this.mTargetSize, this.mCurrentSurfaceSize)) ? false : true;
        }

        private void cancelPreviousRequest() {
            if (this.mSurfaceRequest != null) {
                Logger.d(SurfaceViewImplementation.TAG, "Request canceled: " + this.mSurfaceRequest);
                this.mSurfaceRequest.willNotProvideSurface();
            }
        }

        private void closeSurface() {
            if (this.mSurfaceRequest != null) {
                Logger.d(SurfaceViewImplementation.TAG, "Surface closed " + this.mSurfaceRequest);
                this.mSurfaceRequest.getDeferrableSurface().close();
            }
        }

        @Override // android.view.SurfaceHolder.Callback
        public void surfaceCreated(SurfaceHolder surfaceHolder) {
            SurfaceRequest surfaceRequest;
            Logger.d(SurfaceViewImplementation.TAG, "Surface created.");
            if (!this.mNeedToInvalidate || (surfaceRequest = this.mSurfaceRequestToBeInvalidated) == null) {
                return;
            }
            surfaceRequest.invalidate();
            this.mSurfaceRequestToBeInvalidated = null;
            this.mNeedToInvalidate = false;
        }

        @Override // android.view.SurfaceHolder.Callback
        public void surfaceChanged(SurfaceHolder surfaceHolder, int i, int i2, int i3) {
            Logger.d(SurfaceViewImplementation.TAG, "Surface changed. Size: " + i2 + "x" + i3);
            this.mCurrentSurfaceSize = new Size(i2, i3);
            tryToComplete();
        }

        @Override // android.view.SurfaceHolder.Callback
        public void surfaceDestroyed(SurfaceHolder surfaceHolder) {
            Logger.d(SurfaceViewImplementation.TAG, "Surface destroyed.");
            if (this.mWasSurfaceProvided) {
                closeSurface();
            } else {
                cancelPreviousRequest();
            }
            this.mNeedToInvalidate = true;
            SurfaceRequest surfaceRequest = this.mSurfaceRequest;
            if (surfaceRequest != null) {
                this.mSurfaceRequestToBeInvalidated = surfaceRequest;
            }
            this.mWasSurfaceProvided = false;
            this.mSurfaceRequest = null;
            this.mOnSurfaceNotInUseListener = null;
            this.mCurrentSurfaceSize = null;
            this.mTargetSize = null;
        }
    }

    @Override // androidx.camera.view.PreviewViewImplementation
    ListenableFuture<Void> waitForNextFrame() {
        return Futures.immediateFuture(null);
    }

    @Override // androidx.camera.view.PreviewViewImplementation
    void setFrameUpdateListener(Executor executor, PreviewView.OnFrameUpdateListener onFrameUpdateListener) {
        throw new IllegalArgumentException("SurfaceView doesn't support frame update listener");
    }

    private static class Api24Impl {
        private Api24Impl() {
        }

        static void pixelCopyRequest(SurfaceView surfaceView, Bitmap bitmap, PixelCopy.OnPixelCopyFinishedListener onPixelCopyFinishedListener, Handler handler) {
            PixelCopy.request(surfaceView, bitmap, onPixelCopyFinishedListener, handler);
        }
    }

    private static boolean shouldReusePreview(SurfaceView surfaceView, Size size, SurfaceRequest surfaceRequest) {
        return surfaceView != null && Objects.equals(size, surfaceRequest.getResolution());
    }
}


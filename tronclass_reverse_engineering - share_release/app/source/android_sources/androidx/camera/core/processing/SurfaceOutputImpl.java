package androidx.camera.core.processing;

import android.graphics.Matrix;
import android.graphics.Rect;
import android.graphics.RectF;
import android.util.Size;
import android.view.Surface;
import androidx.camera.core.Logger;
import androidx.camera.core.SurfaceOutput;
import androidx.camera.core.impl.CameraInternal;
import androidx.camera.core.impl.utils.MatrixExt;
import androidx.camera.core.impl.utils.TransformUtils;
import androidx.concurrent.futures.CallbackToFutureAdapter;
import androidx.core.util.Consumer;
import androidx.core.util.Preconditions;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.concurrent.Executor;
import java.util.concurrent.RejectedExecutionException;
import java.util.concurrent.atomic.AtomicReference;
final class SurfaceOutputImpl implements SurfaceOutput {
    private static final String TAG = "SurfaceOutputImpl";
    private CameraInternal mCameraInternal;
    private final ListenableFuture<Void> mCloseFuture;
    private CallbackToFutureAdapter.Completer<Void> mCloseFutureCompleter;
    private Consumer<SurfaceOutput.Event> mEventListener;
    private Executor mExecutor;
    private final int mFormat;
    private final Rect mInputCropRect;
    private final Size mInputSize;
    private final boolean mMirroring;
    private final int mRotationDegrees;
    private Matrix mSensorToBufferTransform;
    private final Size mSize;
    private final Surface mSurface;
    private final int mTargets;
    private final Object mLock = new Object();
    private final float[] mAdditionalTransform = new float[16];
    private final float[] mInvertedTextureTransform = new float[16];
    private boolean mHasPendingCloseRequest = false;
    private boolean mIsClosed = false;

    SurfaceOutputImpl(Surface surface, int i, int i2, Size size, Size size2, Rect rect, int i3, boolean z, CameraInternal cameraInternal, Matrix matrix) {
        this.mSurface = surface;
        this.mTargets = i;
        this.mFormat = i2;
        this.mSize = size;
        this.mInputSize = size2;
        this.mInputCropRect = new Rect(rect);
        this.mMirroring = z;
        this.mRotationDegrees = i3;
        this.mCameraInternal = cameraInternal;
        this.mSensorToBufferTransform = matrix;
        calculateAdditionalTransform();
        this.mCloseFuture = CallbackToFutureAdapter.getFuture(new CallbackToFutureAdapter.Resolver() { // from class: androidx.camera.core.processing.SurfaceOutputImpl$$ExternalSyntheticLambda0
            @Override // androidx.concurrent.futures.CallbackToFutureAdapter.Resolver
            public final Object attachCompleter(CallbackToFutureAdapter.Completer completer) {
                return this.f$0.m179lambda$new$0$androidxcameracoreprocessingSurfaceOutputImpl(completer);
            }
        });
    }
    /* synthetic */ Object m179lambda$new$0$androidxcameracoreprocessingSurfaceOutputImpl(CallbackToFutureAdapter.Completer completer) throws Exception {
        this.mCloseFutureCompleter = completer;
        return "SurfaceOutputImpl close future complete";
    }

    @Override // androidx.camera.core.SurfaceOutput
    public Surface getSurface(Executor executor, Consumer<SurfaceOutput.Event> consumer) {
        boolean z;
        synchronized (this.mLock) {
            this.mExecutor = executor;
            this.mEventListener = consumer;
            z = this.mHasPendingCloseRequest;
        }
        if (z) {
            requestClose();
        }
        return this.mSurface;
    }

    public void requestClose() {
        Executor executor;
        Consumer<SurfaceOutput.Event> consumer;
        final AtomicReference atomicReference = new AtomicReference();
        synchronized (this.mLock) {
            if (this.mExecutor == null || (consumer = this.mEventListener) == null) {
                this.mHasPendingCloseRequest = true;
            } else if (!this.mIsClosed) {
                atomicReference.set(consumer);
                executor = this.mExecutor;
                this.mHasPendingCloseRequest = false;
            }
            executor = null;
        }
        if (executor != null) {
            try {
                executor.execute(new Runnable() { // from class: androidx.camera.core.processing.SurfaceOutputImpl$$ExternalSyntheticLambda1
                    @Override // java.lang.Runnable
                    public final void run() {
                        this.f$0.m180x4fbd8e2d(atomicReference);
                    }
                });
            } catch (RejectedExecutionException e) {
                Logger.d(TAG, "Processor executor closed. Close request not posted.", e);
            }
        }
    }
    /* synthetic */ void m180x4fbd8e2d(AtomicReference atomicReference) {
        ((Consumer) atomicReference.get()).accept(SurfaceOutput.Event.of(0, this));
    }

    @Override // androidx.camera.core.SurfaceOutput
    public int getTargets() {
        return this.mTargets;
    }

    @Override // androidx.camera.core.SurfaceOutput
    public int getFormat() {
        return this.mFormat;
    }

    @Override // androidx.camera.core.SurfaceOutput
    public Size getSize() {
        return this.mSize;
    }

    public Rect getInputCropRect() {
        return this.mInputCropRect;
    }

    public Size getInputSize() {
        return this.mInputSize;
    }

    public int getRotationDegrees() {
        return this.mRotationDegrees;
    }

    public boolean getMirroring() {
        return this.mMirroring;
    }

    public CameraInternal getCamera() {
        return this.mCameraInternal;
    }

    @Override // androidx.camera.core.SurfaceOutput, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        synchronized (this.mLock) {
            if (!this.mIsClosed) {
                this.mIsClosed = true;
            }
        }
        this.mCloseFutureCompleter.set(null);
    }

    public boolean isClosed() {
        boolean z;
        synchronized (this.mLock) {
            z = this.mIsClosed;
        }
        return z;
    }

    public ListenableFuture<Void> getCloseFuture() {
        return this.mCloseFuture;
    }

    @Override // androidx.camera.core.SurfaceOutput
    public void updateTransformMatrix(float[] fArr, float[] fArr2) {
        android.opengl.Matrix.multiplyMM(fArr, 0, fArr2, 0, this.mAdditionalTransform, 0);
    }

    @Override // androidx.camera.core.SurfaceOutput
    public Matrix getSensorToBufferTransform() {
        return new Matrix(this.mSensorToBufferTransform);
    }

    private void calculateAdditionalTransform() {
        android.opengl.Matrix.setIdentityM(this.mAdditionalTransform, 0);
        MatrixExt.preVerticalFlip(this.mAdditionalTransform, 0.5f);
        MatrixExt.preRotate(this.mAdditionalTransform, this.mRotationDegrees, 0.5f, 0.5f);
        if (this.mMirroring) {
            android.opengl.Matrix.translateM(this.mAdditionalTransform, 0, 1.0f, 0.0f, 0.0f);
            android.opengl.Matrix.scaleM(this.mAdditionalTransform, 0, -1.0f, 1.0f, 1.0f);
        }
        Matrix rectToRect = TransformUtils.getRectToRect(TransformUtils.sizeToRectF(this.mInputSize), TransformUtils.sizeToRectF(TransformUtils.rotateSize(this.mInputSize, this.mRotationDegrees)), this.mRotationDegrees, this.mMirroring);
        RectF rectF = new RectF(this.mInputCropRect);
        rectToRect.mapRect(rectF);
        float width = rectF.left / r0.getWidth();
        float height = ((r0.getHeight() - rectF.height()) - rectF.top) / r0.getHeight();
        float fWidth = rectF.width() / r0.getWidth();
        float fHeight = rectF.height() / r0.getHeight();
        android.opengl.Matrix.translateM(this.mAdditionalTransform, 0, width, height, 0.0f);
        android.opengl.Matrix.scaleM(this.mAdditionalTransform, 0, fWidth, fHeight, 1.0f);
        calculateInvertedTextureTransform();
        float[] fArr = this.mAdditionalTransform;
        android.opengl.Matrix.multiplyMM(fArr, 0, this.mInvertedTextureTransform, 0, fArr, 0);
    }

    private void calculateInvertedTextureTransform() {
        android.opengl.Matrix.setIdentityM(this.mInvertedTextureTransform, 0);
        MatrixExt.preVerticalFlip(this.mInvertedTextureTransform, 0.5f);
        CameraInternal cameraInternal = this.mCameraInternal;
        if (cameraInternal != null) {
            Preconditions.checkState(cameraInternal.getHasTransform(), "Camera has no transform.");
            MatrixExt.preRotate(this.mInvertedTextureTransform, this.mCameraInternal.getCameraInfo().getSensorRotationDegrees(), 0.5f, 0.5f);
            if (this.mCameraInternal.isFrontFacing()) {
                android.opengl.Matrix.translateM(this.mInvertedTextureTransform, 0, 1.0f, 0.0f, 0.0f);
                android.opengl.Matrix.scaleM(this.mInvertedTextureTransform, 0, -1.0f, 1.0f, 1.0f);
            }
        }
        float[] fArr = this.mInvertedTextureTransform;
        android.opengl.Matrix.invertM(fArr, 0, fArr, 0);
    }
}


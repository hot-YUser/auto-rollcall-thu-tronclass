package androidx.camera.core.processing;

import android.graphics.Matrix;
import android.graphics.Rect;
import android.util.Size;
import android.view.Surface;
import androidx.camera.core.SurfaceOutput;
import androidx.camera.core.SurfaceRequest;
import androidx.camera.core.impl.CameraInternal;
import androidx.camera.core.impl.DeferrableSurface;
import androidx.camera.core.impl.StreamSpec;
import androidx.camera.core.impl.utils.Threads;
import androidx.camera.core.impl.utils.executor.CameraXExecutors;
import androidx.camera.core.impl.utils.futures.AsyncFunction;
import androidx.camera.core.impl.utils.futures.Futures;
import androidx.concurrent.futures.CallbackToFutureAdapter;
import androidx.core.util.Preconditions;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Objects;
import java.util.Set;
public class SurfaceEdge {
    private SurfaceOutputImpl mConsumerToNotify;
    private final Rect mCropRect;
    private final int mFormat;
    private final boolean mHasCameraTransform;
    private final boolean mMirroring;
    private SurfaceRequest mProviderSurfaceRequest;
    private int mRotationDegrees;
    private final Matrix mSensorToBufferTransform;
    private SettableSurface mSettableSurface;
    private final StreamSpec mStreamSpec;
    private int mTargetRotation;
    private final int mTargets;
    private boolean mHasConsumer = false;
    private final Set<Runnable> mOnInvalidatedListeners = new HashSet();
    private boolean mIsClosed = false;

    public SurfaceEdge(int i, int i2, StreamSpec streamSpec, Matrix matrix, boolean z, Rect rect, int i3, int i4, boolean z2) {
        this.mTargets = i;
        this.mFormat = i2;
        this.mStreamSpec = streamSpec;
        this.mSensorToBufferTransform = matrix;
        this.mHasCameraTransform = z;
        this.mCropRect = rect;
        this.mRotationDegrees = i3;
        this.mTargetRotation = i4;
        this.mMirroring = z2;
        this.mSettableSurface = new SettableSurface(streamSpec.getResolution(), i2);
    }

    public void addOnInvalidatedListener(Runnable runnable) {
        Threads.checkMainThread();
        checkNotClosed();
        this.mOnInvalidatedListeners.add(runnable);
    }

    public DeferrableSurface getDeferrableSurface() {
        Threads.checkMainThread();
        checkNotClosed();
        checkAndSetHasConsumer();
        return this.mSettableSurface;
    }

    public void setProvider(DeferrableSurface deferrableSurface) throws DeferrableSurface.SurfaceClosedException {
        Threads.checkMainThread();
        checkNotClosed();
        this.mSettableSurface.setProvider(deferrableSurface, new SurfaceEdge$$ExternalSyntheticLambda1(this));
    }

    public SurfaceRequest createSurfaceRequest(CameraInternal cameraInternal) {
        Threads.checkMainThread();
        checkNotClosed();
        SurfaceRequest surfaceRequest = new SurfaceRequest(this.mStreamSpec.getResolution(), cameraInternal, this.mStreamSpec.getDynamicRange(), this.mStreamSpec.getExpectedFrameRateRange(), new Runnable() { // from class: androidx.camera.core.processing.SurfaceEdge$$ExternalSyntheticLambda0
            @Override // java.lang.Runnable
            public final void run() {
                this.f$0.m176xa8c6a4fe();
            }
        });
        try {
            final DeferrableSurface deferrableSurface = surfaceRequest.getDeferrableSurface();
            if (this.mSettableSurface.setProvider(deferrableSurface, new SurfaceEdge$$ExternalSyntheticLambda1(this))) {
                ListenableFuture<Void> terminationFuture = this.mSettableSurface.getTerminationFuture();
                Objects.requireNonNull(deferrableSurface);
                terminationFuture.addListener(new Runnable() { // from class: androidx.camera.core.processing.SurfaceEdge$$ExternalSyntheticLambda2
                    @Override // java.lang.Runnable
                    public final void run() {
                        deferrableSurface.close();
                    }
                }, CameraXExecutors.directExecutor());
            }
            this.mProviderSurfaceRequest = surfaceRequest;
            notifyTransformationInfoUpdate();
            return surfaceRequest;
        } catch (DeferrableSurface.SurfaceClosedException e) {
            throw new AssertionError("Surface is somehow already closed", e);
        } catch (RuntimeException e2) {
            surfaceRequest.willNotProvideSurface();
            throw e2;
        }
    }
    /* synthetic */ void m176xa8c6a4fe() {
        CameraXExecutors.mainThreadExecutor().execute(new Runnable() { // from class: androidx.camera.core.processing.SurfaceEdge$$ExternalSyntheticLambda4
            @Override // java.lang.Runnable
            public final void run() {
                this.f$0.m175xe25e27d();
            }
        });
    }
    /* synthetic */ void m175xe25e27d() {
        if (this.mIsClosed) {
            return;
        }
        invalidate();
    }

    public ListenableFuture<SurfaceOutput> createSurfaceOutputFuture(final Size size, final int i, final Rect rect, final int i2, final boolean z, final CameraInternal cameraInternal) {
        Threads.checkMainThread();
        checkNotClosed();
        checkAndSetHasConsumer();
        final SettableSurface settableSurface = this.mSettableSurface;
        return Futures.transformAsync(settableSurface.getSurface(), new AsyncFunction() { // from class: androidx.camera.core.processing.SurfaceEdge$$ExternalSyntheticLambda5
            @Override // androidx.camera.core.impl.utils.futures.AsyncFunction
            public final ListenableFuture apply(Object obj) {
                return this.f$0.m174xcd1514fc(settableSurface, i, size, rect, i2, z, cameraInternal, (Surface) obj);
            }
        }, CameraXExecutors.mainThreadExecutor());
    }
    /* synthetic */ ListenableFuture m174xcd1514fc(final SettableSurface settableSurface, int i, Size size, Rect rect, int i2, boolean z, CameraInternal cameraInternal, Surface surface) throws Exception {
        Preconditions.checkNotNull(surface);
        try {
            settableSurface.incrementUseCount();
            SurfaceOutputImpl surfaceOutputImpl = new SurfaceOutputImpl(surface, getTargets(), i, this.mStreamSpec.getResolution(), size, rect, i2, z, cameraInternal, this.mSensorToBufferTransform);
            ListenableFuture<Void> closeFuture = surfaceOutputImpl.getCloseFuture();
            Objects.requireNonNull(settableSurface);
            closeFuture.addListener(new Runnable() { // from class: androidx.camera.core.processing.SurfaceEdge$$ExternalSyntheticLambda6
                @Override // java.lang.Runnable
                public final void run() {
                    settableSurface.decrementUseCount();
                }
            }, CameraXExecutors.directExecutor());
            this.mConsumerToNotify = surfaceOutputImpl;
            return Futures.immediateFuture(surfaceOutputImpl);
        } catch (DeferrableSurface.SurfaceClosedException e) {
            return Futures.immediateFailedFuture(e);
        }
    }

    public void invalidate() {
        Threads.checkMainThread();
        checkNotClosed();
        if (this.mSettableSurface.canSetProvider()) {
            return;
        }
        disconnectWithoutCheckingClosed();
        this.mHasConsumer = false;
        this.mSettableSurface = new SettableSurface(this.mStreamSpec.getResolution(), this.mFormat);
        Iterator<Runnable> it = this.mOnInvalidatedListeners.iterator();
        while (it.hasNext()) {
            it.next().run();
        }
    }

    public final void close() {
        Threads.checkMainThread();
        disconnectWithoutCheckingClosed();
        this.mIsClosed = true;
    }

    public final void disconnect() {
        Threads.checkMainThread();
        checkNotClosed();
        disconnectWithoutCheckingClosed();
    }
    public void disconnectWithoutCheckingClosed() {
        Threads.checkMainThread();
        this.mSettableSurface.close();
        SurfaceOutputImpl surfaceOutputImpl = this.mConsumerToNotify;
        if (surfaceOutputImpl != null) {
            surfaceOutputImpl.requestClose();
            this.mConsumerToNotify = null;
        }
    }

    public int getTargets() {
        return this.mTargets;
    }

    public int getFormat() {
        return this.mFormat;
    }

    public Matrix getSensorToBufferTransform() {
        return this.mSensorToBufferTransform;
    }

    public boolean hasCameraTransform() {
        return this.mHasCameraTransform;
    }

    public Rect getCropRect() {
        return this.mCropRect;
    }

    public int getRotationDegrees() {
        return this.mRotationDegrees;
    }

    public void updateTransformation(int i) {
        updateTransformation(i, -1);
    }

    public void updateTransformation(final int i, final int i2) {
        Threads.runOnMain(new Runnable() { // from class: androidx.camera.core.processing.SurfaceEdge$$ExternalSyntheticLambda3
            @Override // java.lang.Runnable
            public final void run() {
                this.f$0.m177xb9042df4(i, i2);
            }
        });
    }
    /* synthetic */ void m177xb9042df4(int i, int i2) {
        boolean z;
        boolean z2 = true;
        if (this.mRotationDegrees != i) {
            this.mRotationDegrees = i;
            z = true;
        } else {
            z = false;
        }
        if (this.mTargetRotation != i2) {
            this.mTargetRotation = i2;
        } else {
            z2 = z;
        }
        if (z2) {
            notifyTransformationInfoUpdate();
        }
    }

    private void notifyTransformationInfoUpdate() {
        Threads.checkMainThread();
        SurfaceRequest surfaceRequest = this.mProviderSurfaceRequest;
        if (surfaceRequest != null) {
            surfaceRequest.updateTransformationInfo(SurfaceRequest.TransformationInfo.of(this.mCropRect, this.mRotationDegrees, this.mTargetRotation, hasCameraTransform(), this.mSensorToBufferTransform, this.mMirroring));
        }
    }

    private void checkAndSetHasConsumer() {
        Preconditions.checkState(!this.mHasConsumer, "Consumer can only be linked once.");
        this.mHasConsumer = true;
    }

    public boolean getMirroring() {
        return this.mMirroring;
    }

    public StreamSpec getStreamSpec() {
        return this.mStreamSpec;
    }

    private void checkNotClosed() {
        Preconditions.checkState(!this.mIsClosed, "Edge is already closed.");
    }

    public DeferrableSurface getDeferrableSurfaceForTesting() {
        return this.mSettableSurface;
    }

    public boolean isClosed() {
        return this.mIsClosed;
    }

    public boolean hasProvider() {
        return this.mSettableSurface.hasProvider();
    }

    static class SettableSurface extends DeferrableSurface {
        CallbackToFutureAdapter.Completer<Surface> mCompleter;
        private DeferrableSurface mProvider;
        final ListenableFuture<Surface> mSurfaceFuture;
        /* synthetic */ Object m178xcee66962(CallbackToFutureAdapter.Completer completer) throws Exception {
            this.mCompleter = completer;
            return "SettableFuture hashCode: " + hashCode();
        }

        SettableSurface(Size size, int i) {
            super(size, i);
            this.mSurfaceFuture = CallbackToFutureAdapter.getFuture(new CallbackToFutureAdapter.Resolver() { // from class: androidx.camera.core.processing.SurfaceEdge$SettableSurface$$ExternalSyntheticLambda1
                @Override // androidx.concurrent.futures.CallbackToFutureAdapter.Resolver
                public final Object attachCompleter(CallbackToFutureAdapter.Completer completer) {
                    return this.f$0.m178xcee66962(completer);
                }
            });
        }

        @Override // androidx.camera.core.impl.DeferrableSurface
        protected ListenableFuture<Surface> provideSurface() {
            return this.mSurfaceFuture;
        }

        boolean canSetProvider() {
            Threads.checkMainThread();
            return this.mProvider == null && !isClosed();
        }

        boolean hasProvider() {
            return this.mProvider != null;
        }

        public boolean setProvider(final DeferrableSurface deferrableSurface, Runnable runnable) throws DeferrableSurface.SurfaceClosedException {
            Threads.checkMainThread();
            Preconditions.checkNotNull(deferrableSurface);
            DeferrableSurface deferrableSurface2 = this.mProvider;
            if (deferrableSurface2 == deferrableSurface) {
                return false;
            }
            Preconditions.checkState(deferrableSurface2 == null, "A different provider has been set. To change the provider, call SurfaceEdge#invalidate before calling SurfaceEdge#setProvider");
            Preconditions.checkArgument(getPrescribedSize().equals(deferrableSurface.getPrescribedSize()), "The provider's size must match the parent");
            Preconditions.checkArgument(getPrescribedStreamFormat() == deferrableSurface.getPrescribedStreamFormat(), "The provider's format must match the parent");
            Preconditions.checkState(!isClosed(), "The parent is closed. Call SurfaceEdge#invalidate() before setting a new provider.");
            this.mProvider = deferrableSurface;
            Futures.propagate(deferrableSurface.getSurface(), this.mCompleter);
            deferrableSurface.incrementUseCount();
            ListenableFuture<Void> terminationFuture = getTerminationFuture();
            Objects.requireNonNull(deferrableSurface);
            terminationFuture.addListener(new Runnable() { // from class: androidx.camera.core.processing.SurfaceEdge$SettableSurface$$ExternalSyntheticLambda0
                @Override // java.lang.Runnable
                public final void run() {
                    deferrableSurface.decrementUseCount();
                }
            }, CameraXExecutors.directExecutor());
            deferrableSurface.getCloseFuture().addListener(runnable, CameraXExecutors.mainThreadExecutor());
            return true;
        }
    }
}


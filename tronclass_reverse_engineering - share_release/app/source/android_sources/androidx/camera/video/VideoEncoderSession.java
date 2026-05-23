package androidx.camera.video;

import android.view.Surface;
import androidx.camera.core.DynamicRange;
import androidx.camera.core.Logger;
import androidx.camera.core.SurfaceRequest;
import androidx.camera.core.impl.Timebase;
import androidx.camera.core.impl.utils.futures.FutureCallback;
import androidx.camera.core.impl.utils.futures.Futures;
import androidx.camera.video.internal.VideoValidatedEncoderProfilesProxy;
import androidx.camera.video.internal.config.VideoConfigUtil;
import androidx.camera.video.internal.encoder.Encoder;
import androidx.camera.video.internal.encoder.EncoderFactory;
import androidx.camera.video.internal.encoder.InvalidConfigException;
import androidx.concurrent.futures.CallbackToFutureAdapter;
import androidx.core.util.Consumer;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.Objects;
import java.util.concurrent.Executor;
final class VideoEncoderSession {
    private static final String TAG = "VideoEncoderSession";
    private final Executor mExecutor;
    private final Executor mSequentialExecutor;
    private final EncoderFactory mVideoEncoderFactory;
    private Encoder mVideoEncoder = null;
    private Surface mActiveSurface = null;
    private SurfaceRequest mSurfaceRequest = null;
    private Executor mOnSurfaceUpdateExecutor = null;
    private Encoder.SurfaceInput.OnSurfaceUpdateListener mOnSurfaceUpdateListener = null;
    private VideoEncoderState mVideoEncoderState = VideoEncoderState.NOT_INITIALIZED;
    private ListenableFuture<Void> mReleasedFuture = Futures.immediateFailedFuture(new IllegalStateException("Cannot close the encoder before configuring."));
    private CallbackToFutureAdapter.Completer<Void> mReleasedCompleter = null;
    private ListenableFuture<Encoder> mReadyToReleaseFuture = Futures.immediateFailedFuture(new IllegalStateException("Cannot close the encoder before configuring."));
    private CallbackToFutureAdapter.Completer<Encoder> mReadyToReleaseCompleter = null;

    private enum VideoEncoderState {
        NOT_INITIALIZED,
        INITIALIZING,
        PENDING_RELEASE,
        READY,
        RELEASED
    }

    VideoEncoderSession(EncoderFactory encoderFactory, Executor executor, Executor executor2) {
        this.mExecutor = executor2;
        this.mSequentialExecutor = executor;
        this.mVideoEncoderFactory = encoderFactory;
    }
    static /* synthetic */ class AnonymousClass2 {
        static final /* synthetic */ int[] $SwitchMap$androidx$camera$video$VideoEncoderSession$VideoEncoderState;

        static {
            int[] iArr = new int[VideoEncoderState.values().length];
            $SwitchMap$androidx$camera$video$VideoEncoderSession$VideoEncoderState = iArr;
            try {
                iArr[VideoEncoderState.NOT_INITIALIZED.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                $SwitchMap$androidx$camera$video$VideoEncoderSession$VideoEncoderState[VideoEncoderState.INITIALIZING.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                $SwitchMap$androidx$camera$video$VideoEncoderSession$VideoEncoderState[VideoEncoderState.READY.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                $SwitchMap$androidx$camera$video$VideoEncoderSession$VideoEncoderState[VideoEncoderState.PENDING_RELEASE.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                $SwitchMap$androidx$camera$video$VideoEncoderSession$VideoEncoderState[VideoEncoderState.RELEASED.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
        }
    }

    ListenableFuture<Encoder> configure(final SurfaceRequest surfaceRequest, final Timebase timebase, final MediaSpec mediaSpec, final VideoValidatedEncoderProfilesProxy videoValidatedEncoderProfilesProxy) {
        if (AnonymousClass2.$SwitchMap$androidx$camera$video$VideoEncoderSession$VideoEncoderState[this.mVideoEncoderState.ordinal()] == 1) {
            this.mVideoEncoderState = VideoEncoderState.INITIALIZING;
            this.mSurfaceRequest = surfaceRequest;
            Logger.d(TAG, "Create VideoEncoderSession: " + this);
            this.mReleasedFuture = CallbackToFutureAdapter.getFuture(new CallbackToFutureAdapter.Resolver() { // from class: androidx.camera.video.VideoEncoderSession$$ExternalSyntheticLambda2
                @Override // androidx.concurrent.futures.CallbackToFutureAdapter.Resolver
                public final Object attachCompleter(CallbackToFutureAdapter.Completer completer) {
                    return this.f$0.m210lambda$configure$0$androidxcameravideoVideoEncoderSession(completer);
                }
            });
            this.mReadyToReleaseFuture = CallbackToFutureAdapter.getFuture(new CallbackToFutureAdapter.Resolver() { // from class: androidx.camera.video.VideoEncoderSession$$ExternalSyntheticLambda3
                @Override // androidx.concurrent.futures.CallbackToFutureAdapter.Resolver
                public final Object attachCompleter(CallbackToFutureAdapter.Completer completer) {
                    return this.f$0.m211lambda$configure$1$androidxcameravideoVideoEncoderSession(completer);
                }
            });
            ListenableFuture future = CallbackToFutureAdapter.getFuture(new CallbackToFutureAdapter.Resolver() { // from class: androidx.camera.video.VideoEncoderSession$$ExternalSyntheticLambda4
                @Override // androidx.concurrent.futures.CallbackToFutureAdapter.Resolver
                public final Object attachCompleter(CallbackToFutureAdapter.Completer completer) {
                    return this.f$0.m212lambda$configure$2$androidxcameravideoVideoEncoderSession(surfaceRequest, timebase, videoValidatedEncoderProfilesProxy, mediaSpec, completer);
                }
            });
            Futures.addCallback(future, new FutureCallback<Encoder>() { // from class: androidx.camera.video.VideoEncoderSession.1
                @Override // androidx.camera.core.impl.utils.futures.FutureCallback
                public void onSuccess(Encoder encoder) {
                }

                @Override // androidx.camera.core.impl.utils.futures.FutureCallback
                public void onFailure(Throwable th) {
                    Logger.w(VideoEncoderSession.TAG, "VideoEncoder configuration failed.", th);
                    VideoEncoderSession.this.terminateNow();
                }
            }, this.mSequentialExecutor);
            return Futures.nonCancellationPropagating(future);
        }
        return Futures.immediateFailedFuture(new IllegalStateException("configure() shouldn't be called in " + this.mVideoEncoderState));
    }
    /* synthetic */ Object m210lambda$configure$0$androidxcameravideoVideoEncoderSession(CallbackToFutureAdapter.Completer completer) throws Exception {
        this.mReleasedCompleter = completer;
        return "ReleasedFuture " + this;
    }
    /* synthetic */ Object m211lambda$configure$1$androidxcameravideoVideoEncoderSession(CallbackToFutureAdapter.Completer completer) throws Exception {
        this.mReadyToReleaseCompleter = completer;
        return "ReadyToReleaseFuture " + this;
    }
    /* synthetic */ Object m212lambda$configure$2$androidxcameravideoVideoEncoderSession(SurfaceRequest surfaceRequest, Timebase timebase, VideoValidatedEncoderProfilesProxy videoValidatedEncoderProfilesProxy, MediaSpec mediaSpec, CallbackToFutureAdapter.Completer completer) throws Exception {
        configureVideoEncoderInternal(surfaceRequest, timebase, videoValidatedEncoderProfilesProxy, mediaSpec, completer);
        return "ConfigureVideoEncoderFuture " + this;
    }

    boolean isConfiguredSurfaceRequest(SurfaceRequest surfaceRequest) {
        int i = AnonymousClass2.$SwitchMap$androidx$camera$video$VideoEncoderSession$VideoEncoderState[this.mVideoEncoderState.ordinal()];
        if (i == 1) {
            return false;
        }
        if (i == 2 || i == 3) {
            return this.mSurfaceRequest == surfaceRequest;
        }
        if (i == 4 || i == 5) {
            return false;
        }
        throw new IllegalStateException("State " + this.mVideoEncoderState + " is not handled");
    }

    ListenableFuture<Encoder> getReadyToReleaseFuture() {
        return Futures.nonCancellationPropagating(this.mReadyToReleaseFuture);
    }

    ListenableFuture<Void> signalTermination() {
        closeInternal();
        return Futures.nonCancellationPropagating(this.mReleasedFuture);
    }

    void terminateNow() {
        int i = AnonymousClass2.$SwitchMap$androidx$camera$video$VideoEncoderSession$VideoEncoderState[this.mVideoEncoderState.ordinal()];
        if (i == 1) {
            this.mVideoEncoderState = VideoEncoderState.RELEASED;
            return;
        }
        if (i != 2 && i != 3 && i != 4) {
            if (i == 5) {
                Logger.d(TAG, "terminateNow in " + this.mVideoEncoderState + ", No-op");
                return;
            }
            throw new IllegalStateException("State " + this.mVideoEncoderState + " is not handled");
        }
        this.mVideoEncoderState = VideoEncoderState.RELEASED;
        this.mReadyToReleaseCompleter.set(this.mVideoEncoder);
        this.mSurfaceRequest = null;
        if (this.mVideoEncoder != null) {
            Logger.d(TAG, "VideoEncoder is releasing: " + this.mVideoEncoder);
            this.mVideoEncoder.release();
            this.mVideoEncoder.getReleasedFuture().addListener(new Runnable() { // from class: androidx.camera.video.VideoEncoderSession$$ExternalSyntheticLambda1
                @Override // java.lang.Runnable
                public final void run() {
                    this.f$0.m215lambda$terminateNow$3$androidxcameravideoVideoEncoderSession();
                }
            }, this.mSequentialExecutor);
            this.mVideoEncoder = null;
            return;
        }
        Logger.w(TAG, "There's no VideoEncoder to release! Finish release completer.");
        this.mReleasedCompleter.set(null);
    }
    /* synthetic */ void m215lambda$terminateNow$3$androidxcameravideoVideoEncoderSession() {
        this.mReleasedCompleter.set(null);
    }

    Surface getActiveSurface() {
        if (this.mVideoEncoderState != VideoEncoderState.READY) {
            return null;
        }
        return this.mActiveSurface;
    }

    Encoder getVideoEncoder() {
        return this.mVideoEncoder;
    }

    private void closeInternal() {
        int i = AnonymousClass2.$SwitchMap$androidx$camera$video$VideoEncoderSession$VideoEncoderState[this.mVideoEncoderState.ordinal()];
        if (i == 1 || i == 2) {
            terminateNow();
            return;
        }
        if (i == 3 || i == 4) {
            Logger.d(TAG, "closeInternal in " + this.mVideoEncoderState + " state");
            this.mVideoEncoderState = VideoEncoderState.PENDING_RELEASE;
        } else {
            if (i == 5) {
                Logger.d(TAG, "closeInternal in RELEASED state, No-op");
                return;
            }
            throw new IllegalStateException("State " + this.mVideoEncoderState + " is not handled");
        }
    }

    void setOnSurfaceUpdateListener(Executor executor, Encoder.SurfaceInput.OnSurfaceUpdateListener onSurfaceUpdateListener) {
        this.mOnSurfaceUpdateExecutor = executor;
        this.mOnSurfaceUpdateListener = onSurfaceUpdateListener;
    }

    private void configureVideoEncoderInternal(final SurfaceRequest surfaceRequest, Timebase timebase, VideoValidatedEncoderProfilesProxy videoValidatedEncoderProfilesProxy, MediaSpec mediaSpec, final CallbackToFutureAdapter.Completer<Encoder> completer) {
        DynamicRange dynamicRange = surfaceRequest.getDynamicRange();
        try {
            Encoder encoderCreateEncoder = this.mVideoEncoderFactory.createEncoder(this.mExecutor, VideoConfigUtil.resolveVideoEncoderConfig(VideoConfigUtil.resolveVideoMimeInfo(mediaSpec, dynamicRange, videoValidatedEncoderProfilesProxy), timebase, mediaSpec.getVideoSpec(), surfaceRequest.getResolution(), dynamicRange, surfaceRequest.getExpectedFrameRate()));
            this.mVideoEncoder = encoderCreateEncoder;
            Encoder.EncoderInput input = encoderCreateEncoder.getInput();
            if (!(input instanceof Encoder.SurfaceInput)) {
                completer.setException(new AssertionError("The EncoderInput of video isn't a SurfaceInput."));
            } else {
                ((Encoder.SurfaceInput) input).setOnSurfaceUpdateListener(this.mSequentialExecutor, new Encoder.SurfaceInput.OnSurfaceUpdateListener() { // from class: androidx.camera.video.VideoEncoderSession$$ExternalSyntheticLambda0
                    @Override // androidx.camera.video.internal.encoder.Encoder.SurfaceInput.OnSurfaceUpdateListener
                    public final void onSurfaceUpdate(Surface surface) {
                        this.f$0.m214x39f4fe93(completer, surfaceRequest, surface);
                    }
                });
            }
        } catch (InvalidConfigException e) {
            Logger.e(TAG, "Unable to initialize video encoder.", e);
            completer.setException(e);
        }
    }
    /* synthetic */ void m214x39f4fe93(CallbackToFutureAdapter.Completer completer, SurfaceRequest surfaceRequest, final Surface surface) {
        Executor executor;
        int i = AnonymousClass2.$SwitchMap$androidx$camera$video$VideoEncoderSession$VideoEncoderState[this.mVideoEncoderState.ordinal()];
        if (i != 1) {
            if (i == 2) {
                if (surfaceRequest.isServiced()) {
                    Logger.d(TAG, "Not provide surface, " + Objects.toString(surfaceRequest, "EMPTY") + " is already serviced.");
                    completer.set(null);
                    closeInternal();
                    return;
                } else {
                    this.mActiveSurface = surface;
                    Logger.d(TAG, "provide surface: " + surface);
                    surfaceRequest.provideSurface(surface, this.mSequentialExecutor, new Consumer() { // from class: androidx.camera.video.VideoEncoderSession$$ExternalSyntheticLambda5
                        @Override // androidx.core.util.Consumer
                        public final void accept(Object obj) {
                            this.f$0.onSurfaceRequestComplete((SurfaceRequest.Result) obj);
                        }
                    });
                    this.mVideoEncoderState = VideoEncoderState.READY;
                    completer.set(this.mVideoEncoder);
                    return;
                }
            }
            if (i == 3) {
                if (this.mOnSurfaceUpdateListener != null && (executor = this.mOnSurfaceUpdateExecutor) != null) {
                    executor.execute(new Runnable() { // from class: androidx.camera.video.VideoEncoderSession$$ExternalSyntheticLambda6
                        @Override // java.lang.Runnable
                        public final void run() {
                            this.f$0.m213x54b38fd2(surface);
                        }
                    });
                }
                Logger.w(TAG, "Surface is updated in READY state: " + surface);
                return;
            }
            if (i != 4 && i != 5) {
                throw new IllegalStateException("State " + this.mVideoEncoderState + " is not handled");
            }
        }
        Logger.d(TAG, "Not provide surface in " + this.mVideoEncoderState);
        completer.set(null);
    }
    /* synthetic */ void m213x54b38fd2(Surface surface) {
        this.mOnSurfaceUpdateListener.onSurfaceUpdate(surface);
    }
    public void onSurfaceRequestComplete(SurfaceRequest.Result result) {
        Logger.d(TAG, "Surface can be closed: " + result.getSurface().hashCode());
        Surface surface = result.getSurface();
        if (surface == this.mActiveSurface) {
            this.mActiveSurface = null;
            this.mReadyToReleaseCompleter.set(this.mVideoEncoder);
            closeInternal();
            return;
        }
        surface.release();
    }

    public String toString() {
        return "VideoEncoderSession@" + hashCode() + " for " + Objects.toString(this.mSurfaceRequest, "SURFACE_REQUEST_NOT_CONFIGURED");
    }
}


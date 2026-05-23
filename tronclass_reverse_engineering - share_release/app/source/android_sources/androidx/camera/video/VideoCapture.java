package androidx.camera.video;

import android.graphics.Rect;
import android.media.MediaCodec;
import android.os.SystemClock;
import android.util.Pair;
import android.util.Range;
import android.util.Size;
import androidx.arch.core.util.Function;
import androidx.camera.core.CameraInfo;
import androidx.camera.core.CameraSelector;
import androidx.camera.core.DynamicRange;
import androidx.camera.core.Logger;
import androidx.camera.core.SurfaceRequest;
import androidx.camera.core.UseCase;
import androidx.camera.core.impl.CameraCaptureCallback;
import androidx.camera.core.impl.CameraCaptureResult;
import androidx.camera.core.impl.CameraInfoInternal;
import androidx.camera.core.impl.CameraInternal;
import androidx.camera.core.impl.CaptureConfig;
import androidx.camera.core.impl.Config;
import androidx.camera.core.impl.ConfigProvider;
import androidx.camera.core.impl.DeferrableSurface;
import androidx.camera.core.impl.ImageInputConfig;
import androidx.camera.core.impl.ImageOutputConfig;
import androidx.camera.core.impl.MutableConfig;
import androidx.camera.core.impl.MutableOptionsBundle;
import androidx.camera.core.impl.Observable;
import androidx.camera.core.impl.OptionsBundle;
import androidx.camera.core.impl.SessionConfig;
import androidx.camera.core.impl.StreamSpec;
import androidx.camera.core.impl.Timebase;
import androidx.camera.core.impl.UseCaseConfig;
import androidx.camera.core.impl.UseCaseConfigFactory;
import androidx.camera.core.impl.utils.Threads;
import androidx.camera.core.impl.utils.TransformUtils;
import androidx.camera.core.impl.utils.executor.CameraXExecutors;
import androidx.camera.core.impl.utils.futures.FutureCallback;
import androidx.camera.core.impl.utils.futures.Futures;
import androidx.camera.core.internal.TargetConfig;
import androidx.camera.core.internal.ThreadConfig;
import androidx.camera.core.internal.UseCaseEventConfig;
import androidx.camera.core.processing.DefaultSurfaceProcessor;
import androidx.camera.core.processing.SurfaceEdge;
import androidx.camera.core.processing.SurfaceProcessorNode;
import androidx.camera.core.resolutionselector.ResolutionSelector;
import androidx.camera.video.StreamInfo;
import androidx.camera.video.VideoCapture;
import androidx.camera.video.VideoOutput;
import androidx.camera.video.impl.VideoCaptureConfig;
import androidx.camera.video.internal.VideoValidatedEncoderProfilesProxy;
import androidx.camera.video.internal.compat.quirk.DeviceQuirks;
import androidx.camera.video.internal.compat.quirk.ExtraSupportedResolutionQuirk;
import androidx.camera.video.internal.compat.quirk.ImageCaptureFailedWhenVideoCaptureIsBoundQuirk;
import androidx.camera.video.internal.compat.quirk.PreviewDelayWhenVideoCaptureIsBoundQuirk;
import androidx.camera.video.internal.compat.quirk.PreviewStretchWhenVideoCaptureIsBoundQuirk;
import androidx.camera.video.internal.compat.quirk.VideoQualityQuirk;
import androidx.camera.video.internal.config.VideoConfigUtil;
import androidx.camera.video.internal.encoder.InvalidConfigException;
import androidx.camera.video.internal.encoder.VideoEncoderConfig;
import androidx.camera.video.internal.encoder.VideoEncoderInfo;
import androidx.camera.video.internal.encoder.VideoEncoderInfoImpl;
import androidx.camera.video.internal.workaround.VideoEncoderInfoWrapper;
import androidx.concurrent.futures.CallbackToFutureAdapter;
import androidx.core.util.Preconditions;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.CancellationException;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Executor;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.atomic.AtomicBoolean;
public final class VideoCapture<T extends VideoOutput> extends UseCase {
    private static final Defaults DEFAULT_CONFIG = new Defaults();
    private static final String SURFACE_UPDATE_KEY = "androidx.camera.video.VideoCapture.streamUpdate";
    private static final String TAG = "VideoCapture";
    private static final boolean USE_TEMPLATE_PREVIEW_BY_QUIRK;
    static boolean sEnableSurfaceProcessingByQuirk;
    private SurfaceEdge mCameraEdge;
    private Rect mCropRect;
    DeferrableSurface mDeferrableSurface;
    private boolean mHasCompensatingTransformation;
    private SurfaceProcessorNode mNode;
    private int mRotationDegrees;
    SessionConfig.Builder mSessionConfigBuilder;
    VideoOutput.SourceState mSourceState;
    StreamInfo mStreamInfo;
    private final Observable.Observer<StreamInfo> mStreamInfoObserver;
    private SurfaceRequest mSurfaceRequest;
    ListenableFuture<Void> mSurfaceUpdateFuture;
    private VideoEncoderInfo mVideoEncoderInfo;

    static {
        boolean z = true;
        boolean z2 = DeviceQuirks.get(PreviewStretchWhenVideoCaptureIsBoundQuirk.class) != null;
        boolean z3 = DeviceQuirks.get(PreviewDelayWhenVideoCaptureIsBoundQuirk.class) != null;
        boolean z4 = DeviceQuirks.get(ImageCaptureFailedWhenVideoCaptureIsBoundQuirk.class) != null;
        boolean zHasVideoQualityQuirkAndWorkaroundBySurfaceProcessing = hasVideoQualityQuirkAndWorkaroundBySurfaceProcessing();
        boolean z5 = DeviceQuirks.get(ExtraSupportedResolutionQuirk.class) != null;
        USE_TEMPLATE_PREVIEW_BY_QUIRK = z2 || z3 || z4;
        if (!z3 && !z4 && !zHasVideoQualityQuirkAndWorkaroundBySurfaceProcessing && !z5) {
            z = false;
        }
        sEnableSurfaceProcessingByQuirk = z;
    }

    public static <T extends VideoOutput> VideoCapture<T> withOutput(T t) {
        return new Builder((VideoOutput) Preconditions.checkNotNull(t)).setCaptureType(UseCaseConfigFactory.CaptureType.VIDEO_CAPTURE).build();
    }

    VideoCapture(VideoCaptureConfig<T> videoCaptureConfig) {
        super(videoCaptureConfig);
        this.mStreamInfo = StreamInfo.STREAM_INFO_ANY_INACTIVE;
        this.mSessionConfigBuilder = new SessionConfig.Builder();
        this.mSurfaceUpdateFuture = null;
        this.mSourceState = VideoOutput.SourceState.INACTIVE;
        this.mHasCompensatingTransformation = false;
        this.mStreamInfoObserver = new Observable.Observer<StreamInfo>() { // from class: androidx.camera.video.VideoCapture.1
            @Override // androidx.camera.core.impl.Observable.Observer
            public void onNewData(StreamInfo streamInfo) {
                if (streamInfo == null) {
                    throw new IllegalArgumentException("StreamInfo can't be null");
                }
                if (VideoCapture.this.mSourceState == VideoOutput.SourceState.INACTIVE) {
                    return;
                }
                Logger.d(VideoCapture.TAG, "Stream info update: old: " + VideoCapture.this.mStreamInfo + " new: " + streamInfo);
                StreamInfo streamInfo2 = VideoCapture.this.mStreamInfo;
                VideoCapture.this.mStreamInfo = streamInfo;
                StreamSpec streamSpec = (StreamSpec) Preconditions.checkNotNull(VideoCapture.this.getAttachedStreamSpec());
                if (VideoCapture.this.isStreamIdChanged(streamInfo2.getId(), streamInfo.getId()) || VideoCapture.this.shouldResetCompensatingTransformation(streamInfo2, streamInfo)) {
                    VideoCapture videoCapture = VideoCapture.this;
                    videoCapture.resetPipeline(videoCapture.getCameraId(), (VideoCaptureConfig) VideoCapture.this.getCurrentConfig(), (StreamSpec) Preconditions.checkNotNull(VideoCapture.this.getAttachedStreamSpec()));
                    return;
                }
                if ((streamInfo2.getId() != -1 && streamInfo.getId() == -1) || (streamInfo2.getId() == -1 && streamInfo.getId() != -1)) {
                    VideoCapture videoCapture2 = VideoCapture.this;
                    videoCapture2.applyStreamInfoAndStreamSpecToSessionConfigBuilder(videoCapture2.mSessionConfigBuilder, streamInfo, streamSpec);
                    VideoCapture videoCapture3 = VideoCapture.this;
                    videoCapture3.updateSessionConfig(videoCapture3.mSessionConfigBuilder.build());
                    VideoCapture.this.notifyReset();
                    return;
                }
                if (streamInfo2.getStreamState() != streamInfo.getStreamState()) {
                    VideoCapture videoCapture4 = VideoCapture.this;
                    videoCapture4.applyStreamInfoAndStreamSpecToSessionConfigBuilder(videoCapture4.mSessionConfigBuilder, streamInfo, streamSpec);
                    VideoCapture videoCapture5 = VideoCapture.this;
                    videoCapture5.updateSessionConfig(videoCapture5.mSessionConfigBuilder.build());
                    VideoCapture.this.notifyUpdated();
                }
            }

            @Override // androidx.camera.core.impl.Observable.Observer
            public void onError(Throwable th) {
                Logger.w(VideoCapture.TAG, "Receive onError from StreamState observer", th);
            }
        };
    }

    public T getOutput() {
        return (T) ((VideoCaptureConfig) getCurrentConfig()).getVideoOutput();
    }

    public int getTargetRotation() {
        return getTargetRotationInternal();
    }

    public Range<Integer> getTargetFrameRate() {
        return getTargetFrameRateInternal();
    }

    public void setTargetRotation(int i) {
        if (setTargetRotationInternal(i)) {
            sendTransformationInfoIfReady();
        }
    }

    public int getMirrorMode() {
        return getMirrorModeInternal();
    }

    @Override // androidx.camera.core.UseCase
    protected StreamSpec onSuggestedStreamSpecUpdated(StreamSpec streamSpec) {
        Logger.d(TAG, "onSuggestedStreamSpecUpdated: " + streamSpec);
        List<Size> customOrderedResolutions = ((VideoCaptureConfig) getCurrentConfig()).getCustomOrderedResolutions(null);
        if (customOrderedResolutions != null && !customOrderedResolutions.contains(streamSpec.getResolution())) {
            Logger.w(TAG, "suggested resolution " + streamSpec.getResolution() + " is not in custom ordered resolutions " + customOrderedResolutions);
        }
        return streamSpec;
    }

    public DynamicRange getDynamicRange() {
        return getCurrentConfig().hasDynamicRange() ? getCurrentConfig().getDynamicRange() : Defaults.DEFAULT_DYNAMIC_RANGE;
    }

    @Override // androidx.camera.core.UseCase
    public void onStateAttached() {
        super.onStateAttached();
        Preconditions.checkNotNull(getAttachedStreamSpec(), "The suggested stream specification should be already updated and shouldn't be null.");
        Preconditions.checkState(this.mSurfaceRequest == null, "The surface request should be null when VideoCapture is attached.");
        StreamSpec streamSpec = (StreamSpec) Preconditions.checkNotNull(getAttachedStreamSpec());
        this.mStreamInfo = (StreamInfo) fetchObservableValue(getOutput().getStreamInfo(), StreamInfo.STREAM_INFO_ANY_INACTIVE);
        SessionConfig.Builder builderCreatePipeline = createPipeline(getCameraId(), (VideoCaptureConfig) getCurrentConfig(), streamSpec);
        this.mSessionConfigBuilder = builderCreatePipeline;
        applyStreamInfoAndStreamSpecToSessionConfigBuilder(builderCreatePipeline, this.mStreamInfo, streamSpec);
        updateSessionConfig(this.mSessionConfigBuilder.build());
        notifyActive();
        getOutput().getStreamInfo().addObserver(CameraXExecutors.mainThreadExecutor(), this.mStreamInfoObserver);
        setSourceState(VideoOutput.SourceState.ACTIVE_NON_STREAMING);
    }

    @Override // androidx.camera.core.UseCase
    public void setViewPortCropRect(Rect rect) {
        super.setViewPortCropRect(rect);
        sendTransformationInfoIfReady();
    }

    @Override // androidx.camera.core.UseCase
    public void onStateDetached() {
        Preconditions.checkState(Threads.isMainThread(), "VideoCapture can only be detached on the main thread.");
        setSourceState(VideoOutput.SourceState.INACTIVE);
        getOutput().getStreamInfo().removeObserver(this.mStreamInfoObserver);
        ListenableFuture<Void> listenableFuture = this.mSurfaceUpdateFuture;
        if (listenableFuture != null && listenableFuture.cancel(false)) {
            Logger.d(TAG, "VideoCapture is detached from the camera. Surface update cancelled.");
        }
        clearPipeline();
    }

    @Override // androidx.camera.core.UseCase
    protected StreamSpec onSuggestedStreamSpecImplementationOptionsUpdated(Config config) {
        this.mSessionConfigBuilder.addImplementationOptions(config);
        updateSessionConfig(this.mSessionConfigBuilder.build());
        return getAttachedStreamSpec().toBuilder().setImplementationOptions(config).build();
    }

    public String toString() {
        return "VideoCapture:" + getName();
    }

    @Override // androidx.camera.core.UseCase
    public UseCaseConfig<?> getDefaultConfig(boolean z, UseCaseConfigFactory useCaseConfigFactory) {
        Defaults defaults = DEFAULT_CONFIG;
        Config config = useCaseConfigFactory.getConfig(defaults.getConfig().getCaptureType(), 1);
        if (z) {
            config = Config.mergeConfigs(config, defaults.getConfig());
        }
        if (config == null) {
            return null;
        }
        return getUseCaseConfigBuilder(config).getUseCaseConfig();
    }

    @Override // androidx.camera.core.UseCase
    protected UseCaseConfig<?> onMergeConfig(CameraInfoInternal cameraInfoInternal, UseCaseConfig.Builder<?, ?, ?> builder) {
        updateCustomOrderedResolutionsByQuality(cameraInfoInternal, builder);
        return builder.getUseCaseConfig();
    }

    @Override // androidx.camera.core.UseCase
    public UseCaseConfig.Builder<?, ?, ?> getUseCaseConfigBuilder(Config config) {
        return Builder.fromConfig(config);
    }

    private void sendTransformationInfoIfReady() {
        CameraInternal camera = getCamera();
        SurfaceEdge surfaceEdge = this.mCameraEdge;
        if (camera == null || surfaceEdge == null) {
            return;
        }
        int iAdjustRotationWithInProgressTransformation = adjustRotationWithInProgressTransformation(getRelativeRotation(camera, isMirroringRequired(camera)));
        this.mRotationDegrees = iAdjustRotationWithInProgressTransformation;
        surfaceEdge.updateTransformation(iAdjustRotationWithInProgressTransformation, getAppTargetRotation());
    }

    private Rect adjustCropRectWithInProgressTransformation(Rect rect, int i) {
        return shouldCompensateTransformation() ? TransformUtils.sizeToRect(TransformUtils.getRotatedSize(((SurfaceRequest.TransformationInfo) Preconditions.checkNotNull(this.mStreamInfo.getInProgressTransformationInfo())).getCropRect(), i)) : rect;
    }

    private int adjustRotationWithInProgressTransformation(int i) {
        return shouldCompensateTransformation() ? TransformUtils.within360(i - this.mStreamInfo.getInProgressTransformationInfo().getRotationDegrees()) : i;
    }

    private Size adjustResolutionWithInProgressTransformation(Size size, Rect rect, Rect rect2) {
        if (!shouldCompensateTransformation() || rect2.equals(rect)) {
            return size;
        }
        float fHeight = rect2.height() / rect.height();
        return new Size((int) Math.ceil(size.getWidth() * fHeight), (int) Math.ceil(size.getHeight() * fHeight));
    }

    Rect getCropRect() {
        return this.mCropRect;
    }

    int getRotationDegrees() {
        return this.mRotationDegrees;
    }

    private Rect calculateCropRect(Size size, VideoEncoderInfo videoEncoderInfo) {
        Rect rect;
        if (getViewPortCropRect() != null) {
            rect = getViewPortCropRect();
        } else {
            rect = new Rect(0, 0, size.getWidth(), size.getHeight());
        }
        return (videoEncoderInfo == null || videoEncoderInfo.isSizeSupported(rect.width(), rect.height())) ? rect : adjustCropRectToValidSize(rect, size, videoEncoderInfo);
    }

    private SessionConfig.Builder createPipeline(final String str, final VideoCaptureConfig<T> videoCaptureConfig, final StreamSpec streamSpec) {
        Timebase timebase;
        Threads.checkMainThread();
        final CameraInternal cameraInternal = (CameraInternal) Preconditions.checkNotNull(getCamera());
        Size resolution = streamSpec.getResolution();
        Runnable runnable = new Runnable() { // from class: androidx.camera.video.VideoCapture$$ExternalSyntheticLambda3
            @Override // java.lang.Runnable
            public final void run() {
                this.f$0.notifyReset();
            }
        };
        Range<Integer> expectedFrameRateRange = streamSpec.getExpectedFrameRateRange();
        if (Objects.equals(expectedFrameRateRange, StreamSpec.FRAME_RATE_RANGE_UNSPECIFIED)) {
            expectedFrameRateRange = Defaults.DEFAULT_FPS_RANGE;
        }
        Range<Integer> range = expectedFrameRateRange;
        MediaSpec mediaSpec = (MediaSpec) Objects.requireNonNull(getMediaSpec());
        VideoCapabilities videoCapabilities = getVideoCapabilities(cameraInternal.getCameraInfo());
        DynamicRange dynamicRange = streamSpec.getDynamicRange();
        VideoEncoderInfo videoEncoderInfo = getVideoEncoderInfo(videoCaptureConfig.getVideoEncoderInfoFinder(), videoCapabilities, dynamicRange, mediaSpec, resolution, range);
        this.mRotationDegrees = adjustRotationWithInProgressTransformation(getRelativeRotation(cameraInternal, isMirroringRequired(cameraInternal)));
        Rect rectCalculateCropRect = calculateCropRect(resolution, videoEncoderInfo);
        Rect rectAdjustCropRectWithInProgressTransformation = adjustCropRectWithInProgressTransformation(rectCalculateCropRect, this.mRotationDegrees);
        this.mCropRect = rectAdjustCropRectWithInProgressTransformation;
        Size sizeAdjustResolutionWithInProgressTransformation = adjustResolutionWithInProgressTransformation(resolution, rectCalculateCropRect, rectAdjustCropRectWithInProgressTransformation);
        if (shouldCompensateTransformation()) {
            this.mHasCompensatingTransformation = true;
        }
        SurfaceProcessorNode surfaceProcessorNodeCreateNodeIfNeeded = createNodeIfNeeded(cameraInternal, this.mCropRect, resolution, dynamicRange);
        this.mNode = surfaceProcessorNodeCreateNodeIfNeeded;
        if (surfaceProcessorNodeCreateNodeIfNeeded != null || !cameraInternal.getHasTransform()) {
            timebase = cameraInternal.getCameraInfoInternal().getTimebase();
        } else {
            timebase = Timebase.UPTIME;
        }
        final Timebase timebase2 = timebase;
        Logger.d(TAG, "camera timebase = " + cameraInternal.getCameraInfoInternal().getTimebase() + ", processing timebase = " + timebase2);
        StreamSpec streamSpecBuild = streamSpec.toBuilder().setResolution(sizeAdjustResolutionWithInProgressTransformation).setExpectedFrameRateRange(range).build();
        Preconditions.checkState(this.mCameraEdge == null);
        SurfaceEdge surfaceEdge = new SurfaceEdge(2, 34, streamSpecBuild, getSensorToBufferTransformMatrix(), cameraInternal.getHasTransform(), this.mCropRect, this.mRotationDegrees, getAppTargetRotation(), shouldMirror(cameraInternal));
        this.mCameraEdge = surfaceEdge;
        surfaceEdge.addOnInvalidatedListener(runnable);
        if (this.mNode != null) {
            SurfaceProcessorNode.OutConfig outConfigOf = SurfaceProcessorNode.OutConfig.of(this.mCameraEdge);
            final SurfaceEdge surfaceEdge2 = (SurfaceEdge) Objects.requireNonNull(this.mNode.transform(SurfaceProcessorNode.In.of(this.mCameraEdge, Collections.singletonList(outConfigOf))).get(outConfigOf));
            surfaceEdge2.addOnInvalidatedListener(new Runnable() { // from class: androidx.camera.video.VideoCapture$$ExternalSyntheticLambda4
                @Override // java.lang.Runnable
                public final void run() {
                    this.f$0.m204lambda$createPipeline$1$androidxcameravideoVideoCapture(surfaceEdge2, cameraInternal, videoCaptureConfig, timebase2);
                }
            });
            this.mSurfaceRequest = surfaceEdge2.createSurfaceRequest(cameraInternal);
            final DeferrableSurface deferrableSurface = this.mCameraEdge.getDeferrableSurface();
            this.mDeferrableSurface = deferrableSurface;
            deferrableSurface.getTerminationFuture().addListener(new Runnable() { // from class: androidx.camera.video.VideoCapture$$ExternalSyntheticLambda5
                @Override // java.lang.Runnable
                public final void run() {
                    this.f$0.m205lambda$createPipeline$2$androidxcameravideoVideoCapture(deferrableSurface);
                }
            }, CameraXExecutors.mainThreadExecutor());
        } else {
            SurfaceRequest surfaceRequestCreateSurfaceRequest = this.mCameraEdge.createSurfaceRequest(cameraInternal);
            this.mSurfaceRequest = surfaceRequestCreateSurfaceRequest;
            this.mDeferrableSurface = surfaceRequestCreateSurfaceRequest.getDeferrableSurface();
        }
        videoCaptureConfig.getVideoOutput().onSurfaceRequested(this.mSurfaceRequest, timebase2);
        sendTransformationInfoIfReady();
        this.mDeferrableSurface.setContainerClass(MediaCodec.class);
        SessionConfig.Builder builderCreateFrom = SessionConfig.Builder.createFrom(videoCaptureConfig, streamSpec.getResolution());
        builderCreateFrom.setExpectedFrameRateRange(streamSpec.getExpectedFrameRateRange());
        builderCreateFrom.addErrorListener(new SessionConfig.ErrorListener() { // from class: androidx.camera.video.VideoCapture$$ExternalSyntheticLambda6
            @Override // androidx.camera.core.impl.SessionConfig.ErrorListener
            public final void onError(SessionConfig sessionConfig, SessionConfig.SessionError sessionError) {
                this.f$0.m206lambda$createPipeline$3$androidxcameravideoVideoCapture(str, videoCaptureConfig, streamSpec, sessionConfig, sessionError);
            }
        });
        if (USE_TEMPLATE_PREVIEW_BY_QUIRK) {
            builderCreateFrom.setTemplateType(1);
        }
        if (streamSpec.getImplementationOptions() != null) {
            builderCreateFrom.addImplementationOptions(streamSpec.getImplementationOptions());
        }
        return builderCreateFrom;
    }
    /* synthetic */ void m205lambda$createPipeline$2$androidxcameravideoVideoCapture(DeferrableSurface deferrableSurface) {
        if (deferrableSurface == this.mDeferrableSurface) {
            clearPipeline();
        }
    }
    /* synthetic */ void m206lambda$createPipeline$3$androidxcameravideoVideoCapture(String str, VideoCaptureConfig videoCaptureConfig, StreamSpec streamSpec, SessionConfig sessionConfig, SessionConfig.SessionError sessionError) {
        resetPipeline(str, videoCaptureConfig, streamSpec);
    }
    public void m204lambda$createPipeline$1$androidxcameravideoVideoCapture(SurfaceEdge surfaceEdge, CameraInternal cameraInternal, VideoCaptureConfig<T> videoCaptureConfig, Timebase timebase) {
        if (cameraInternal == getCamera()) {
            this.mSurfaceRequest = surfaceEdge.createSurfaceRequest(cameraInternal);
            videoCaptureConfig.getVideoOutput().onSurfaceRequested(this.mSurfaceRequest, timebase);
            sendTransformationInfoIfReady();
        }
    }

    private void clearPipeline() {
        Threads.checkMainThread();
        DeferrableSurface deferrableSurface = this.mDeferrableSurface;
        if (deferrableSurface != null) {
            deferrableSurface.close();
            this.mDeferrableSurface = null;
        }
        SurfaceProcessorNode surfaceProcessorNode = this.mNode;
        if (surfaceProcessorNode != null) {
            surfaceProcessorNode.release();
            this.mNode = null;
        }
        SurfaceEdge surfaceEdge = this.mCameraEdge;
        if (surfaceEdge != null) {
            surfaceEdge.close();
            this.mCameraEdge = null;
        }
        this.mVideoEncoderInfo = null;
        this.mCropRect = null;
        this.mSurfaceRequest = null;
        this.mStreamInfo = StreamInfo.STREAM_INFO_ANY_INACTIVE;
        this.mRotationDegrees = 0;
        this.mHasCompensatingTransformation = false;
    }

    void resetPipeline(String str, VideoCaptureConfig<T> videoCaptureConfig, StreamSpec streamSpec) {
        clearPipeline();
        if (isCurrentCamera(str)) {
            SessionConfig.Builder builderCreatePipeline = createPipeline(str, videoCaptureConfig, streamSpec);
            this.mSessionConfigBuilder = builderCreatePipeline;
            applyStreamInfoAndStreamSpecToSessionConfigBuilder(builderCreatePipeline, this.mStreamInfo, streamSpec);
            updateSessionConfig(this.mSessionConfigBuilder.build());
            notifyReset();
        }
    }

    SurfaceEdge getCameraEdge() {
        return this.mCameraEdge;
    }

    public static final class Defaults implements ConfigProvider<VideoCaptureConfig<?>> {
        private static final VideoCaptureConfig<?> DEFAULT_CONFIG;
        static final DynamicRange DEFAULT_DYNAMIC_RANGE;
        static final Range<Integer> DEFAULT_FPS_RANGE;
        private static final int DEFAULT_SURFACE_OCCUPANCY_PRIORITY = 5;
        private static final Function<VideoEncoderConfig, VideoEncoderInfo> DEFAULT_VIDEO_ENCODER_INFO_FINDER;
        private static final VideoOutput DEFAULT_VIDEO_OUTPUT;

        static {
            VideoOutput videoOutput = new VideoOutput() { // from class: androidx.camera.video.VideoCapture$Defaults$$ExternalSyntheticLambda1
                @Override // androidx.camera.video.VideoOutput
                public final void onSurfaceRequested(SurfaceRequest surfaceRequest) {
                    surfaceRequest.willNotProvideSurface();
                }
            };
            DEFAULT_VIDEO_OUTPUT = videoOutput;
            Function<VideoEncoderConfig, VideoEncoderInfo> functionCreateFinder = createFinder();
            DEFAULT_VIDEO_ENCODER_INFO_FINDER = functionCreateFinder;
            DEFAULT_FPS_RANGE = new Range<>(30, 30);
            DynamicRange dynamicRange = DynamicRange.SDR;
            DEFAULT_DYNAMIC_RANGE = dynamicRange;
            DEFAULT_CONFIG = new Builder(videoOutput).setSurfaceOccupancyPriority(5).setVideoEncoderInfoFinder(functionCreateFinder).setDynamicRange(dynamicRange).setCaptureType(UseCaseConfigFactory.CaptureType.VIDEO_CAPTURE).getUseCaseConfig();
        }

        private static Function<VideoEncoderConfig, VideoEncoderInfo> createFinder() {
            return new Function() { // from class: androidx.camera.video.VideoCapture$Defaults$$ExternalSyntheticLambda0
                @Override // androidx.arch.core.util.Function
                public final Object apply(Object obj) {
                    return VideoCapture.Defaults.lambda$createFinder$0((VideoEncoderConfig) obj);
                }
            };
        }

        static /* synthetic */ VideoEncoderInfo lambda$createFinder$0(VideoEncoderConfig videoEncoderConfig) {
            try {
                return VideoEncoderInfoImpl.from(videoEncoderConfig);
            } catch (InvalidConfigException e) {
                Logger.w(VideoCapture.TAG, "Unable to find VideoEncoderInfo", e);
                return null;
            }
        }

        @Override // androidx.camera.core.impl.ConfigProvider
        public VideoCaptureConfig<?> getConfig() {
            return DEFAULT_CONFIG;
        }
    }

    private MediaSpec getMediaSpec() {
        return (MediaSpec) fetchObservableValue(getOutput().getMediaSpec(), null);
    }

    private VideoCapabilities getVideoCapabilities(CameraInfo cameraInfo) {
        return getOutput().getMediaCapabilities(cameraInfo);
    }

    void applyStreamInfoAndStreamSpecToSessionConfigBuilder(SessionConfig.Builder builder, StreamInfo streamInfo, StreamSpec streamSpec) {
        boolean z = streamInfo.getId() == -1;
        boolean z2 = streamInfo.getStreamState() == StreamInfo.StreamState.ACTIVE;
        if (z && z2) {
            throw new IllegalStateException("Unexpected stream state, stream is error but active");
        }
        builder.clearSurfaces();
        DynamicRange dynamicRange = streamSpec.getDynamicRange();
        if (!z) {
            if (z2) {
                builder.addSurface(this.mDeferrableSurface, dynamicRange);
            } else {
                builder.addNonRepeatingSurface(this.mDeferrableSurface, dynamicRange);
            }
        }
        setupSurfaceUpdateNotifier(builder, z2);
    }

    private SurfaceProcessorNode createNodeIfNeeded(CameraInternal cameraInternal, Rect rect, Size size, DynamicRange dynamicRange) {
        if (getEffect() == null && !shouldEnableSurfaceProcessingByQuirk(cameraInternal) && !shouldCrop(rect, size) && !shouldMirror(cameraInternal) && !shouldCompensateTransformation()) {
            return null;
        }
        Logger.d(TAG, "Surface processing is enabled.");
        return new SurfaceProcessorNode((CameraInternal) Objects.requireNonNull(getCamera()), getEffect() != null ? getEffect().createSurfaceProcessorInternal() : DefaultSurfaceProcessor.Factory.newInstance(dynamicRange));
    }

    SurfaceProcessorNode getNode() {
        return this.mNode;
    }

    private static Rect adjustCropRectToValidSize(final Rect rect, Size size, VideoEncoderInfo videoEncoderInfo) {
        Logger.d(TAG, String.format("Adjust cropRect %s by width/height alignment %d/%d and supported widths %s / supported heights %s", TransformUtils.rectToString(rect), Integer.valueOf(videoEncoderInfo.getWidthAlignment()), Integer.valueOf(videoEncoderInfo.getHeightAlignment()), videoEncoderInfo.getSupportedWidths(), videoEncoderInfo.getSupportedHeights()));
        int widthAlignment = videoEncoderInfo.getWidthAlignment();
        int heightAlignment = videoEncoderInfo.getHeightAlignment();
        Range<Integer> supportedWidths = videoEncoderInfo.getSupportedWidths();
        Range<Integer> supportedHeights = videoEncoderInfo.getSupportedHeights();
        int iAlignDown = alignDown(rect.width(), widthAlignment, supportedWidths);
        int iAlignUp = alignUp(rect.width(), widthAlignment, supportedWidths);
        int iAlignDown2 = alignDown(rect.height(), heightAlignment, supportedHeights);
        int iAlignUp2 = alignUp(rect.height(), heightAlignment, supportedHeights);
        HashSet hashSet = new HashSet();
        addBySupportedSize(hashSet, iAlignDown, iAlignDown2, size, videoEncoderInfo);
        addBySupportedSize(hashSet, iAlignDown, iAlignUp2, size, videoEncoderInfo);
        addBySupportedSize(hashSet, iAlignUp, iAlignDown2, size, videoEncoderInfo);
        addBySupportedSize(hashSet, iAlignUp, iAlignUp2, size, videoEncoderInfo);
        if (hashSet.isEmpty()) {
            Logger.w(TAG, "Can't find valid cropped size");
            return rect;
        }
        ArrayList arrayList = new ArrayList(hashSet);
        Logger.d(TAG, "candidatesList = " + arrayList);
        Collections.sort(arrayList, new Comparator() { // from class: androidx.camera.video.VideoCapture$$ExternalSyntheticLambda1
            @Override // java.util.Comparator
            public final int compare(Object obj, Object obj2) {
                return VideoCapture.lambda$adjustCropRectToValidSize$4(rect, (Size) obj, (Size) obj2);
            }
        });
        Logger.d(TAG, "sorted candidatesList = " + arrayList);
        Size size2 = (Size) arrayList.get(0);
        int width = size2.getWidth();
        int height = size2.getHeight();
        if (width == rect.width() && height == rect.height()) {
            Logger.d(TAG, "No need to adjust cropRect because crop size is valid.");
            return rect;
        }
        Preconditions.checkState(width % 2 == 0 && height % 2 == 0 && width <= size.getWidth() && height <= size.getHeight());
        Rect rect2 = new Rect(rect);
        if (width != rect.width()) {
            rect2.left = Math.max(0, rect.centerX() - (width / 2));
            rect2.right = rect2.left + width;
            if (rect2.right > size.getWidth()) {
                rect2.right = size.getWidth();
                rect2.left = rect2.right - width;
            }
        }
        if (height != rect.height()) {
            rect2.top = Math.max(0, rect.centerY() - (height / 2));
            rect2.bottom = rect2.top + height;
            if (rect2.bottom > size.getHeight()) {
                rect2.bottom = size.getHeight();
                rect2.top = rect2.bottom - height;
            }
        }
        Logger.d(TAG, String.format("Adjust cropRect from %s to %s", TransformUtils.rectToString(rect), TransformUtils.rectToString(rect2)));
        return rect2;
    }

    static /* synthetic */ int lambda$adjustCropRectToValidSize$4(Rect rect, Size size, Size size2) {
        return (Math.abs(size.getWidth() - rect.width()) + Math.abs(size.getHeight() - rect.height())) - (Math.abs(size2.getWidth() - rect.width()) + Math.abs(size2.getHeight() - rect.height()));
    }

    private static void addBySupportedSize(Set<Size> set, int i, int i2, Size size, VideoEncoderInfo videoEncoderInfo) {
        if (i > size.getWidth() || i2 > size.getHeight()) {
            return;
        }
        try {
            set.add(new Size(i, ((Integer) videoEncoderInfo.getSupportedHeightsFor(i).clamp(Integer.valueOf(i2))).intValue()));
        } catch (IllegalArgumentException e) {
            Logger.w(TAG, "No supportedHeights for width: " + i, e);
        }
        try {
            set.add(new Size(((Integer) videoEncoderInfo.getSupportedWidthsFor(i2).clamp(Integer.valueOf(i))).intValue(), i2));
        } catch (IllegalArgumentException e2) {
            Logger.w(TAG, "No supportedWidths for height: " + i2, e2);
        }
    }

    boolean isStreamIdChanged(int i, int i2) {
        return (StreamInfo.NON_SURFACE_STREAM_ID.contains(Integer.valueOf(i)) || StreamInfo.NON_SURFACE_STREAM_ID.contains(Integer.valueOf(i2)) || i == i2) ? false : true;
    }

    boolean shouldResetCompensatingTransformation(StreamInfo streamInfo, StreamInfo streamInfo2) {
        return this.mHasCompensatingTransformation && streamInfo.getInProgressTransformationInfo() != null && streamInfo2.getInProgressTransformationInfo() == null;
    }

    private boolean shouldMirror(CameraInternal cameraInternal) {
        return cameraInternal.getHasTransform() && isMirroringRequired(cameraInternal);
    }

    private boolean shouldCompensateTransformation() {
        return this.mStreamInfo.getInProgressTransformationInfo() != null;
    }

    private static boolean shouldCrop(Rect rect, Size size) {
        return (size.getWidth() == rect.width() && size.getHeight() == rect.height()) ? false : true;
    }

    private static boolean shouldEnableSurfaceProcessingByQuirk(CameraInternal cameraInternal) {
        return cameraInternal.getHasTransform() && sEnableSurfaceProcessingByQuirk;
    }

    private static int alignDown(int i, int i2, Range<Integer> range) {
        return align(true, i, i2, range);
    }

    private static int alignUp(int i, int i2, Range<Integer> range) {
        return align(false, i, i2, range);
    }

    private static int align(boolean z, int i, int i2, Range<Integer> range) {
        int i3 = i % i2;
        if (i3 != 0) {
            i = z ? i - i3 : i + (i2 - i3);
        }
        return ((Integer) range.clamp(Integer.valueOf(i))).intValue();
    }

    private VideoEncoderInfo getVideoEncoderInfo(Function<VideoEncoderConfig, VideoEncoderInfo> function, VideoCapabilities videoCapabilities, DynamicRange dynamicRange, MediaSpec mediaSpec, Size size, Range<Integer> range) {
        VideoEncoderInfo videoEncoderInfo = this.mVideoEncoderInfo;
        if (videoEncoderInfo != null) {
            return videoEncoderInfo;
        }
        VideoValidatedEncoderProfilesProxy videoValidatedEncoderProfilesProxyFindHighestSupportedEncoderProfilesFor = videoCapabilities.findHighestSupportedEncoderProfilesFor(size, dynamicRange);
        VideoEncoderInfo videoEncoderInfoResolveVideoEncoderInfo = resolveVideoEncoderInfo(function, videoValidatedEncoderProfilesProxyFindHighestSupportedEncoderProfilesFor, mediaSpec, size, dynamicRange, range);
        if (videoEncoderInfoResolveVideoEncoderInfo == null) {
            Logger.w(TAG, "Can't find videoEncoderInfo");
            return null;
        }
        VideoEncoderInfo videoEncoderInfoFrom = VideoEncoderInfoWrapper.from(videoEncoderInfoResolveVideoEncoderInfo, videoValidatedEncoderProfilesProxyFindHighestSupportedEncoderProfilesFor != null ? new Size(videoValidatedEncoderProfilesProxyFindHighestSupportedEncoderProfilesFor.getDefaultVideoProfile().getWidth(), videoValidatedEncoderProfilesProxyFindHighestSupportedEncoderProfilesFor.getDefaultVideoProfile().getHeight()) : null);
        this.mVideoEncoderInfo = videoEncoderInfoFrom;
        return videoEncoderInfoFrom;
    }

    private static VideoEncoderInfo resolveVideoEncoderInfo(Function<VideoEncoderConfig, VideoEncoderInfo> function, VideoValidatedEncoderProfilesProxy videoValidatedEncoderProfilesProxy, MediaSpec mediaSpec, Size size, DynamicRange dynamicRange, Range<Integer> range) {
        return function.apply(VideoConfigUtil.resolveVideoEncoderConfig(VideoConfigUtil.resolveVideoMimeInfo(mediaSpec, dynamicRange, videoValidatedEncoderProfilesProxy), Timebase.UPTIME, mediaSpec.getVideoSpec(), size, dynamicRange, range));
    }

    private void setupSurfaceUpdateNotifier(final SessionConfig.Builder builder, final boolean z) {
        ListenableFuture<Void> listenableFuture = this.mSurfaceUpdateFuture;
        if (listenableFuture != null && listenableFuture.cancel(false)) {
            Logger.d(TAG, "A newer surface update is requested. Previous surface update cancelled.");
        }
        final ListenableFuture<Void> future = CallbackToFutureAdapter.getFuture(new CallbackToFutureAdapter.Resolver() { // from class: androidx.camera.video.VideoCapture$$ExternalSyntheticLambda2
            @Override // androidx.concurrent.futures.CallbackToFutureAdapter.Resolver
            public final Object attachCompleter(CallbackToFutureAdapter.Completer completer) {
                return this.f$0.m207xc7537f7(builder, completer);
            }
        });
        this.mSurfaceUpdateFuture = future;
        Futures.addCallback(future, new FutureCallback<Void>() { // from class: androidx.camera.video.VideoCapture.3
            @Override // androidx.camera.core.impl.utils.futures.FutureCallback
            public void onSuccess(Void r2) {
                if (future != VideoCapture.this.mSurfaceUpdateFuture || VideoCapture.this.mSourceState == VideoOutput.SourceState.INACTIVE) {
                    return;
                }
                VideoCapture.this.setSourceState(z ? VideoOutput.SourceState.ACTIVE_STREAMING : VideoOutput.SourceState.ACTIVE_NON_STREAMING);
            }

            @Override // androidx.camera.core.impl.utils.futures.FutureCallback
            public void onFailure(Throwable th) {
                if (th instanceof CancellationException) {
                    return;
                }
                Logger.e(VideoCapture.TAG, "Surface update completed with unexpected exception", th);
            }
        }, CameraXExecutors.mainThreadExecutor());
    }
    /* synthetic */ Object m207xc7537f7(final SessionConfig.Builder builder, CallbackToFutureAdapter.Completer completer) throws Exception {
        builder.addTag(SURFACE_UPDATE_KEY, Integer.valueOf(completer.hashCode()));
        final AtomicBoolean atomicBoolean = new AtomicBoolean(false);
        final AnonymousClass2 anonymousClass2 = new AnonymousClass2(atomicBoolean, completer, builder);
        completer.addCancellationListener(new Runnable() { // from class: androidx.camera.video.VideoCapture$$ExternalSyntheticLambda0
            @Override // java.lang.Runnable
            public final void run() {
                VideoCapture.lambda$setupSurfaceUpdateNotifier$5(atomicBoolean, builder, anonymousClass2);
            }
        }, CameraXExecutors.directExecutor());
        builder.addRepeatingCameraCaptureCallback(anonymousClass2);
        return String.format("%s[0x%x]", SURFACE_UPDATE_KEY, Integer.valueOf(completer.hashCode()));
    }
    class AnonymousClass2 extends CameraCaptureCallback {
        private boolean mIsFirstCaptureResult = true;
        final /* synthetic */ CallbackToFutureAdapter.Completer val$completer;
        final /* synthetic */ SessionConfig.Builder val$sessionConfigBuilder;
        final /* synthetic */ AtomicBoolean val$surfaceUpdateComplete;

        AnonymousClass2(AtomicBoolean atomicBoolean, CallbackToFutureAdapter.Completer completer, SessionConfig.Builder builder) {
            this.val$surfaceUpdateComplete = atomicBoolean;
            this.val$completer = completer;
            this.val$sessionConfigBuilder = builder;
        }

        @Override // androidx.camera.core.impl.CameraCaptureCallback
        public void onCaptureCompleted(CameraCaptureResult cameraCaptureResult) {
            Object tag;
            super.onCaptureCompleted(cameraCaptureResult);
            if (this.mIsFirstCaptureResult) {
                this.mIsFirstCaptureResult = false;
                Logger.d(VideoCapture.TAG, "cameraCaptureResult timestampNs = " + cameraCaptureResult.getTimestamp() + ", current system uptimeMs = " + SystemClock.uptimeMillis() + ", current system realtimeMs = " + SystemClock.elapsedRealtime());
            }
            if (this.val$surfaceUpdateComplete.get() || (tag = cameraCaptureResult.getTagBundle().getTag(VideoCapture.SURFACE_UPDATE_KEY)) == null || ((Integer) tag).intValue() != this.val$completer.hashCode() || !this.val$completer.set(null) || this.val$surfaceUpdateComplete.getAndSet(true)) {
                return;
            }
            ScheduledExecutorService scheduledExecutorServiceMainThreadExecutor = CameraXExecutors.mainThreadExecutor();
            final SessionConfig.Builder builder = this.val$sessionConfigBuilder;
            scheduledExecutorServiceMainThreadExecutor.execute(new Runnable() { // from class: androidx.camera.video.VideoCapture$2$$ExternalSyntheticLambda0
                @Override // java.lang.Runnable
                public final void run() {
                    this.f$0.m208lambda$onCaptureCompleted$0$androidxcameravideoVideoCapture$2(builder);
                }
            });
        }
        /* synthetic */ void m208lambda$onCaptureCompleted$0$androidxcameravideoVideoCapture$2(SessionConfig.Builder builder) {
            builder.removeCameraCaptureCallback(this);
        }
    }

    static /* synthetic */ void lambda$setupSurfaceUpdateNotifier$5(AtomicBoolean atomicBoolean, SessionConfig.Builder builder, CameraCaptureCallback cameraCaptureCallback) {
        Preconditions.checkState(Threads.isMainThread(), "Surface update cancellation should only occur on main thread.");
        atomicBoolean.set(true);
        builder.removeCameraCaptureCallback(cameraCaptureCallback);
    }

    private void updateCustomOrderedResolutionsByQuality(CameraInfoInternal cameraInfoInternal, UseCaseConfig.Builder<?, ?, ?> builder) throws IllegalArgumentException {
        MediaSpec mediaSpec = getMediaSpec();
        Preconditions.checkArgument(mediaSpec != null, "Unable to update target resolution by null MediaSpec.");
        DynamicRange dynamicRange = getDynamicRange();
        VideoCapabilities videoCapabilities = getVideoCapabilities(cameraInfoInternal);
        List<Quality> supportedQualities = videoCapabilities.getSupportedQualities(dynamicRange);
        if (supportedQualities.isEmpty()) {
            Logger.w(TAG, "Can't find any supported quality on the device.");
            return;
        }
        VideoSpec videoSpec = mediaSpec.getVideoSpec();
        QualitySelector qualitySelector = videoSpec.getQualitySelector();
        List<Quality> prioritizedQualities = qualitySelector.getPrioritizedQualities(supportedQualities);
        Logger.d(TAG, "Found selectedQualities " + prioritizedQualities + " by " + qualitySelector);
        if (prioritizedQualities.isEmpty()) {
            throw new IllegalArgumentException("Unable to find supported quality by QualitySelector");
        }
        int aspectRatio = videoSpec.getAspectRatio();
        QualityRatioToResolutionsTable qualityRatioToResolutionsTable = new QualityRatioToResolutionsTable(cameraInfoInternal.getSupportedResolutions(getImageFormat()), QualitySelector.getQualityToResolutionMap(videoCapabilities, dynamicRange));
        ArrayList arrayList = new ArrayList();
        Iterator<Quality> it = prioritizedQualities.iterator();
        while (it.hasNext()) {
            arrayList.addAll(qualityRatioToResolutionsTable.getResolutions(it.next(), aspectRatio));
        }
        Logger.d(TAG, "Set custom ordered resolutions = " + arrayList);
        builder.getMutableConfig().insertOption(ImageOutputConfig.OPTION_CUSTOM_ORDERED_RESOLUTIONS, arrayList);
    }

    private static boolean hasVideoQualityQuirkAndWorkaroundBySurfaceProcessing() {
        Iterator it = DeviceQuirks.getAll(VideoQualityQuirk.class).iterator();
        while (it.hasNext()) {
            if (((VideoQualityQuirk) it.next()).workaroundBySurfaceProcessing()) {
                return true;
            }
        }
        return false;
    }

    private static <T> T fetchObservableValue(Observable<T> observable, T t) {
        ListenableFuture<T> listenableFutureFetchData = observable.fetchData();
        if (!listenableFutureFetchData.isDone()) {
            return t;
        }
        try {
            return listenableFutureFetchData.get();
        } catch (InterruptedException | ExecutionException e) {
            throw new IllegalStateException(e);
        }
    }

    void setSourceState(VideoOutput.SourceState sourceState) {
        if (sourceState != this.mSourceState) {
            this.mSourceState = sourceState;
            getOutput().onSourceStateChanged(sourceState);
        }
    }

    SurfaceRequest getSurfaceRequest() {
        return (SurfaceRequest) Objects.requireNonNull(this.mSurfaceRequest);
    }

    @Override // androidx.camera.core.UseCase
    public Set<Integer> getSupportedEffectTargets() {
        HashSet hashSet = new HashSet();
        hashSet.add(2);
        return hashSet;
    }

    public static final class Builder<T extends VideoOutput> implements UseCaseConfig.Builder<VideoCapture<T>, VideoCaptureConfig<T>, Builder<T>>, ImageOutputConfig.Builder<Builder<T>>, ImageInputConfig.Builder<Builder<T>>, ThreadConfig.Builder<Builder<T>> {
        private final MutableOptionsBundle mMutableConfig;

        @Override // androidx.camera.core.impl.ImageOutputConfig.Builder
        public /* bridge */ /* synthetic */ Object setCustomOrderedResolutions(List list) {
            return setCustomOrderedResolutions((List<Size>) list);
        }

        @Override // androidx.camera.core.impl.ImageOutputConfig.Builder
        public /* bridge */ /* synthetic */ Object setSupportedResolutions(List list) {
            return setSupportedResolutions((List<Pair<Integer, Size[]>>) list);
        }

        public Builder(T t) {
            this(createInitialBundle(t));
        }

        private Builder(MutableOptionsBundle mutableOptionsBundle) {
            this.mMutableConfig = mutableOptionsBundle;
            if (!mutableOptionsBundle.containsOption(VideoCaptureConfig.OPTION_VIDEO_OUTPUT)) {
                throw new IllegalArgumentException("VideoOutput is required");
            }
            Class cls = (Class) mutableOptionsBundle.retrieveOption(TargetConfig.OPTION_TARGET_CLASS, null);
            if (cls != null && !cls.equals(VideoCapture.class)) {
                throw new IllegalArgumentException("Invalid target class configuration for " + this + ": " + cls);
            }
            setTargetClass((Class) VideoCapture.class);
        }

        static Builder<? extends VideoOutput> fromConfig(Config config) {
            return new Builder<>(MutableOptionsBundle.from(config));
        }

        public static <T extends VideoOutput> Builder<T> fromConfig(VideoCaptureConfig<T> videoCaptureConfig) {
            return new Builder<>(MutableOptionsBundle.from((Config) videoCaptureConfig));
        }

        private static <T extends VideoOutput> MutableOptionsBundle createInitialBundle(T t) {
            MutableOptionsBundle mutableOptionsBundleCreate = MutableOptionsBundle.create();
            mutableOptionsBundleCreate.insertOption(VideoCaptureConfig.OPTION_VIDEO_OUTPUT, t);
            return mutableOptionsBundleCreate;
        }

        @Override // androidx.camera.core.ExtendableBuilder
        public MutableConfig getMutableConfig() {
            return this.mMutableConfig;
        }

        @Override // androidx.camera.core.impl.UseCaseConfig.Builder
        public VideoCaptureConfig<T> getUseCaseConfig() {
            return new VideoCaptureConfig<>(OptionsBundle.from(this.mMutableConfig));
        }

        Builder<T> setVideoEncoderInfoFinder(Function<VideoEncoderConfig, VideoEncoderInfo> function) {
            getMutableConfig().insertOption(VideoCaptureConfig.OPTION_VIDEO_ENCODER_INFO_FINDER, function);
            return this;
        }

        @Override // androidx.camera.core.ExtendableBuilder
        public VideoCapture<T> build() {
            return new VideoCapture<>(getUseCaseConfig());
        }

        @Override // androidx.camera.core.internal.TargetConfig.Builder
        public Builder<T> setTargetClass(Class<VideoCapture<T>> cls) {
            getMutableConfig().insertOption(TargetConfig.OPTION_TARGET_CLASS, cls);
            if (getMutableConfig().retrieveOption(TargetConfig.OPTION_TARGET_NAME, null) == null) {
                setTargetName(cls.getCanonicalName() + "-" + UUID.randomUUID());
            }
            return this;
        }

        @Override // androidx.camera.core.internal.TargetConfig.Builder
        public Builder<T> setTargetName(String str) {
            getMutableConfig().insertOption(TargetConfig.OPTION_TARGET_NAME, str);
            return this;
        }

        @Override // androidx.camera.core.impl.ImageOutputConfig.Builder
        public Builder<T> setTargetAspectRatio(int i) {
            throw new UnsupportedOperationException("setTargetAspectRatio is not supported.");
        }

        @Override // androidx.camera.core.impl.ImageOutputConfig.Builder
        public Builder<T> setTargetRotation(int i) {
            getMutableConfig().insertOption(ImageOutputConfig.OPTION_TARGET_ROTATION, Integer.valueOf(i));
            return this;
        }

        @Override // androidx.camera.core.impl.ImageOutputConfig.Builder
        public Builder<T> setMirrorMode(int i) {
            getMutableConfig().insertOption(ImageOutputConfig.OPTION_MIRROR_MODE, Integer.valueOf(i));
            return this;
        }

        @Override // androidx.camera.core.impl.ImageOutputConfig.Builder
        public Builder<T> setTargetResolution(Size size) {
            throw new UnsupportedOperationException("setTargetResolution is not supported.");
        }

        @Override // androidx.camera.core.impl.ImageOutputConfig.Builder
        public Builder<T> setDefaultResolution(Size size) {
            getMutableConfig().insertOption(ImageOutputConfig.OPTION_DEFAULT_RESOLUTION, size);
            return this;
        }

        @Override // androidx.camera.core.impl.ImageOutputConfig.Builder
        public Builder<T> setMaxResolution(Size size) {
            getMutableConfig().insertOption(ImageOutputConfig.OPTION_MAX_RESOLUTION, size);
            return this;
        }

        @Override // androidx.camera.core.impl.ImageOutputConfig.Builder
        public Builder<T> setSupportedResolutions(List<Pair<Integer, Size[]>> list) {
            getMutableConfig().insertOption(ImageOutputConfig.OPTION_SUPPORTED_RESOLUTIONS, list);
            return this;
        }

        @Override // androidx.camera.core.impl.ImageOutputConfig.Builder
        public Builder<T> setCustomOrderedResolutions(List<Size> list) {
            getMutableConfig().insertOption(ImageOutputConfig.OPTION_CUSTOM_ORDERED_RESOLUTIONS, list);
            return this;
        }

        @Override // androidx.camera.core.impl.ImageOutputConfig.Builder
        public Builder<T> setResolutionSelector(ResolutionSelector resolutionSelector) {
            getMutableConfig().insertOption(ImageOutputConfig.OPTION_RESOLUTION_SELECTOR, resolutionSelector);
            return this;
        }

        @Override // androidx.camera.core.impl.ImageInputConfig.Builder
        public Builder<T> setDynamicRange(DynamicRange dynamicRange) {
            getMutableConfig().insertOption(ImageInputConfig.OPTION_INPUT_DYNAMIC_RANGE, dynamicRange);
            return this;
        }

        @Override // androidx.camera.core.internal.ThreadConfig.Builder
        public Builder<T> setBackgroundExecutor(Executor executor) {
            getMutableConfig().insertOption(ThreadConfig.OPTION_BACKGROUND_EXECUTOR, executor);
            return this;
        }

        @Override // androidx.camera.core.impl.UseCaseConfig.Builder
        public Builder<T> setDefaultSessionConfig(SessionConfig sessionConfig) {
            getMutableConfig().insertOption(UseCaseConfig.OPTION_DEFAULT_SESSION_CONFIG, sessionConfig);
            return this;
        }

        @Override // androidx.camera.core.impl.UseCaseConfig.Builder
        public Builder<T> setDefaultCaptureConfig(CaptureConfig captureConfig) {
            getMutableConfig().insertOption(UseCaseConfig.OPTION_DEFAULT_CAPTURE_CONFIG, captureConfig);
            return this;
        }

        @Override // androidx.camera.core.impl.UseCaseConfig.Builder
        public Builder<T> setSessionOptionUnpacker(SessionConfig.OptionUnpacker optionUnpacker) {
            getMutableConfig().insertOption(UseCaseConfig.OPTION_SESSION_CONFIG_UNPACKER, optionUnpacker);
            return this;
        }

        @Override // androidx.camera.core.impl.UseCaseConfig.Builder
        public Builder<T> setCaptureOptionUnpacker(CaptureConfig.OptionUnpacker optionUnpacker) {
            getMutableConfig().insertOption(UseCaseConfig.OPTION_CAPTURE_CONFIG_UNPACKER, optionUnpacker);
            return this;
        }

        @Override // androidx.camera.core.impl.UseCaseConfig.Builder
        public Builder<T> setSurfaceOccupancyPriority(int i) {
            getMutableConfig().insertOption(UseCaseConfig.OPTION_SURFACE_OCCUPANCY_PRIORITY, Integer.valueOf(i));
            return this;
        }

        @Override // androidx.camera.core.impl.UseCaseConfig.Builder
        public Builder<T> setCameraSelector(CameraSelector cameraSelector) {
            getMutableConfig().insertOption(UseCaseConfig.OPTION_CAMERA_SELECTOR, cameraSelector);
            return this;
        }

        @Override // androidx.camera.core.internal.UseCaseEventConfig.Builder
        public Builder<T> setUseCaseEventCallback(UseCase.EventCallback eventCallback) {
            getMutableConfig().insertOption(UseCaseEventConfig.OPTION_USE_CASE_EVENT_CALLBACK, eventCallback);
            return this;
        }

        @Override // androidx.camera.core.impl.UseCaseConfig.Builder
        public Builder<T> setZslDisabled(boolean z) {
            getMutableConfig().insertOption(UseCaseConfig.OPTION_ZSL_DISABLED, Boolean.valueOf(z));
            return this;
        }

        @Override // androidx.camera.core.impl.UseCaseConfig.Builder
        public Builder<T> setHighResolutionDisabled(boolean z) {
            getMutableConfig().insertOption(UseCaseConfig.OPTION_HIGH_RESOLUTION_DISABLED, Boolean.valueOf(z));
            return this;
        }

        public Builder<T> setTargetFrameRate(Range<Integer> range) {
            getMutableConfig().insertOption(UseCaseConfig.OPTION_TARGET_FRAME_RATE, range);
            return this;
        }

        @Override // androidx.camera.core.impl.UseCaseConfig.Builder
        public Builder<T> setCaptureType(UseCaseConfigFactory.CaptureType captureType) {
            getMutableConfig().insertOption(UseCaseConfig.OPTION_CAPTURE_TYPE, captureType);
            return this;
        }
    }
}


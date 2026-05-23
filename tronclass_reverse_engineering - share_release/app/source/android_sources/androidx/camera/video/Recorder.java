package androidx.camera.video;

import android.content.ContentValues;
import android.content.Context;
import android.location.Location;
import android.media.MediaMuxer;
import android.media.MediaScannerConnection;
import android.net.Uri;
import android.os.Build;
import android.os.ParcelFileDescriptor;
import android.util.Pair;
import android.util.Range;
import android.util.Size;
import android.view.Surface;
import androidx.camera.core.CameraInfo;
import androidx.camera.core.DynamicRange;
import androidx.camera.core.Logger;
import androidx.camera.core.SurfaceRequest;
import androidx.camera.core.impl.MutableStateObservable;
import androidx.camera.core.impl.Observable;
import androidx.camera.core.impl.StateObservable;
import androidx.camera.core.impl.Timebase;
import androidx.camera.core.impl.utils.CloseGuardHelper;
import androidx.camera.core.impl.utils.executor.CameraXExecutors;
import androidx.camera.core.impl.utils.futures.FutureCallback;
import androidx.camera.core.impl.utils.futures.Futures;
import androidx.camera.core.internal.utils.ArrayRingBuffer;
import androidx.camera.core.internal.utils.RingBuffer;
import androidx.camera.video.AudioSpec;
import androidx.camera.video.MediaSpec;
import androidx.camera.video.Recorder;
import androidx.camera.video.StreamInfo;
import androidx.camera.video.VideoOutput;
import androidx.camera.video.VideoRecordEvent;
import androidx.camera.video.VideoSpec;
import androidx.camera.video.internal.DebugUtils;
import androidx.camera.video.internal.VideoValidatedEncoderProfilesProxy;
import androidx.camera.video.internal.audio.AudioSettings;
import androidx.camera.video.internal.audio.AudioSource;
import androidx.camera.video.internal.audio.AudioSourceAccessException;
import androidx.camera.video.internal.compat.Api26Impl;
import androidx.camera.video.internal.compat.quirk.DeactivateEncoderSurfaceBeforeStopEncoderQuirk;
import androidx.camera.video.internal.compat.quirk.DeviceQuirks;
import androidx.camera.video.internal.compat.quirk.EncoderNotUsePersistentInputSurfaceQuirk;
import androidx.camera.video.internal.config.AudioConfigUtil;
import androidx.camera.video.internal.config.AudioMimeInfo;
import androidx.camera.video.internal.encoder.BufferCopiedEncodedData;
import androidx.camera.video.internal.encoder.EncodeException;
import androidx.camera.video.internal.encoder.EncodedData;
import androidx.camera.video.internal.encoder.Encoder;
import androidx.camera.video.internal.encoder.EncoderCallback;
import androidx.camera.video.internal.encoder.EncoderConfig;
import androidx.camera.video.internal.encoder.EncoderFactory;
import androidx.camera.video.internal.encoder.EncoderImpl;
import androidx.camera.video.internal.encoder.InvalidConfigException;
import androidx.camera.video.internal.encoder.OutputConfig;
import androidx.camera.video.internal.encoder.VideoEncoderInfo;
import androidx.camera.video.internal.utils.OutputUtil;
import androidx.camera.video.internal.workaround.CorrectNegativeLatLongForMediaMuxer;
import androidx.concurrent.futures.CallbackToFutureAdapter;
import androidx.core.util.Consumer;
import androidx.core.util.Preconditions;
import com.google.common.util.concurrent.ListenableFuture;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.EnumSet;
import java.util.Iterator;
import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Executor;
import java.util.concurrent.RejectedExecutionException;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicReference;
public final class Recorder implements VideoOutput {
    private static final int AUDIO_CACHE_SIZE = 60;
    private static final Executor AUDIO_EXECUTOR;
    static final EncoderFactory DEFAULT_ENCODER_FACTORY;
    public static final QualitySelector DEFAULT_QUALITY_SELECTOR;
    private static final String MEDIA_COLUMN = "_data";
    private static final MediaSpec MEDIA_SPEC_DEFAULT;
    private static final int NOT_PENDING = 0;
    private static final int PENDING = 1;
    private static final Exception PENDING_RECORDING_ERROR_CAUSE_SOURCE_INACTIVE;
    private static final long SOURCE_NON_STREAMING_TIMEOUT_MS = 1000;
    private static final String TAG = "Recorder";
    private static final VideoSpec VIDEO_SPEC_DEFAULT;
    RecordingRecord mActiveRecordingRecord;
    Surface mActiveSurface;
    double mAudioAmplitude;
    Encoder mAudioEncoder;
    private final EncoderFactory mAudioEncoderFactory;
    Throwable mAudioErrorCause;
    OutputConfig mAudioOutputConfig;
    AudioSource mAudioSource;
    AudioState mAudioState;
    Integer mAudioTrackIndex;
    long mDurationLimitNs;
    private final boolean mEncoderNotUsePersistentInputSurface;
    final List<ListenableFuture<Void>> mEncodingFutures;
    private final Executor mExecutor;
    long mFileSizeLimitInBytes;
    long mFirstRecordingAudioDataTimeUs;
    int mFirstRecordingVideoBitrate;
    long mFirstRecordingVideoDataTimeUs;
    RecordingRecord mInProgressRecording;
    boolean mInProgressRecordingStopping;
    private SurfaceRequest.TransformationInfo mInProgressTransformationInfo;
    boolean mIsAudioSourceSilenced;
    private long mLastGeneratedRecordingId;
    Surface mLatestSurface;
    SurfaceRequest mLatestSurfaceRequest;
    private final Object mLock = new Object();
    MediaMuxer mMediaMuxer;
    final MutableStateObservable<MediaSpec> mMediaSpec;
    private boolean mNeedsResetBeforeNextStart;
    private State mNonPendingState;
    Uri mOutputUri;
    final RingBuffer<EncodedData> mPendingAudioRingBuffer;
    EncodedData mPendingFirstVideoData;
    RecordingRecord mPendingRecordingRecord;
    long mPreviousRecordingAudioDataTimeUs;
    long mPreviousRecordingVideoDataTimeUs;
    long mRecordingBytes;
    long mRecordingDurationNs;
    int mRecordingStopError;
    Throwable mRecordingStopErrorCause;
    private VideoValidatedEncoderProfilesProxy mResolvedEncoderProfiles;
    final Executor mSequentialExecutor;
    private boolean mShouldSendResumeEvent;
    ScheduledFuture<?> mSourceNonStreamingTimeout;
    VideoOutput.SourceState mSourceState;
    private SurfaceRequest.TransformationInfo mSourceTransformationInfo;
    private State mState;
    int mStreamId;
    private final MutableStateObservable<StreamInfo> mStreamInfo;
    private final Executor mUserProvidedExecutor;
    Encoder mVideoEncoder;
    Range<Integer> mVideoEncoderBitrateRange;
    private final EncoderFactory mVideoEncoderFactory;
    VideoEncoderSession mVideoEncoderSession;
    VideoEncoderSession mVideoEncoderSessionToRelease;
    OutputConfig mVideoOutputConfig;
    Timebase mVideoSourceTimebase;
    Integer mVideoTrackIndex;
    private static final Set<State> PENDING_STATES = Collections.unmodifiableSet(EnumSet.of(State.PENDING_RECORDING, State.PENDING_PAUSED));
    private static final Set<State> VALID_NON_PENDING_STATES_WHILE_PENDING = Collections.unmodifiableSet(EnumSet.of(State.CONFIGURING, State.IDLING, State.RESETTING, State.STOPPING, State.ERROR));

    enum AudioState {
        INITIALIZING,
        IDLING,
        DISABLED,
        ENABLED,
        ERROR_ENCODER,
        ERROR_SOURCE
    }

    enum State {
        CONFIGURING,
        PENDING_RECORDING,
        PENDING_PAUSED,
        IDLING,
        RECORDING,
        PAUSED,
        STOPPING,
        RESETTING,
        ERROR
    }

    static {
        QualitySelector qualitySelectorFromOrderedList = QualitySelector.fromOrderedList(Arrays.asList(Quality.FHD, Quality.HD, Quality.SD), FallbackStrategy.higherQualityOrLowerThan(Quality.FHD));
        DEFAULT_QUALITY_SELECTOR = qualitySelectorFromOrderedList;
        VideoSpec videoSpecBuild = VideoSpec.builder().setQualitySelector(qualitySelectorFromOrderedList).setAspectRatio(-1).build();
        VIDEO_SPEC_DEFAULT = videoSpecBuild;
        MEDIA_SPEC_DEFAULT = MediaSpec.builder().setOutputFormat(-1).setVideoSpec(videoSpecBuild).build();
        PENDING_RECORDING_ERROR_CAUSE_SOURCE_INACTIVE = new RuntimeException("The video frame producer became inactive before any data was received.");
        DEFAULT_ENCODER_FACTORY = new EncoderFactory() { // from class: androidx.camera.video.Recorder$$ExternalSyntheticLambda9
            @Override // androidx.camera.video.internal.encoder.EncoderFactory
            public final Encoder createEncoder(Executor executor, EncoderConfig encoderConfig) {
                return new EncoderImpl(executor, encoderConfig);
            }
        };
        AUDIO_EXECUTOR = CameraXExecutors.newSequentialExecutor(CameraXExecutors.ioExecutor());
    }

    Recorder(Executor executor, MediaSpec mediaSpec, EncoderFactory encoderFactory, EncoderFactory encoderFactory2) {
        this.mEncoderNotUsePersistentInputSurface = DeviceQuirks.get(EncoderNotUsePersistentInputSurfaceQuirk.class) != null;
        this.mState = State.CONFIGURING;
        this.mNonPendingState = null;
        this.mStreamId = 0;
        this.mActiveRecordingRecord = null;
        this.mPendingRecordingRecord = null;
        this.mLastGeneratedRecordingId = 0L;
        this.mInProgressRecording = null;
        this.mInProgressRecordingStopping = false;
        this.mInProgressTransformationInfo = null;
        this.mSourceTransformationInfo = null;
        this.mResolvedEncoderProfiles = null;
        this.mEncodingFutures = new ArrayList();
        this.mAudioTrackIndex = null;
        this.mVideoTrackIndex = null;
        this.mLatestSurface = null;
        this.mActiveSurface = null;
        this.mMediaMuxer = null;
        this.mAudioSource = null;
        this.mVideoEncoder = null;
        this.mVideoOutputConfig = null;
        this.mAudioEncoder = null;
        this.mAudioOutputConfig = null;
        this.mAudioState = AudioState.INITIALIZING;
        this.mOutputUri = Uri.EMPTY;
        this.mRecordingBytes = 0L;
        this.mRecordingDurationNs = 0L;
        this.mFirstRecordingVideoDataTimeUs = Long.MAX_VALUE;
        this.mFirstRecordingVideoBitrate = 0;
        this.mVideoEncoderBitrateRange = null;
        this.mFirstRecordingAudioDataTimeUs = Long.MAX_VALUE;
        this.mPreviousRecordingVideoDataTimeUs = Long.MAX_VALUE;
        this.mPreviousRecordingAudioDataTimeUs = Long.MAX_VALUE;
        this.mFileSizeLimitInBytes = 0L;
        this.mDurationLimitNs = 0L;
        this.mRecordingStopError = 1;
        this.mRecordingStopErrorCause = null;
        this.mPendingFirstVideoData = null;
        this.mPendingAudioRingBuffer = new ArrayRingBuffer(60);
        this.mAudioErrorCause = null;
        this.mIsAudioSourceSilenced = false;
        this.mSourceState = VideoOutput.SourceState.INACTIVE;
        this.mSourceNonStreamingTimeout = null;
        this.mNeedsResetBeforeNextStart = false;
        this.mVideoEncoderSessionToRelease = null;
        this.mAudioAmplitude = AudioStats.AUDIO_AMPLITUDE_NONE;
        this.mShouldSendResumeEvent = false;
        this.mUserProvidedExecutor = executor;
        executor = executor == null ? CameraXExecutors.ioExecutor() : executor;
        this.mExecutor = executor;
        Executor executorNewSequentialExecutor = CameraXExecutors.newSequentialExecutor(executor);
        this.mSequentialExecutor = executorNewSequentialExecutor;
        this.mMediaSpec = MutableStateObservable.withInitialState(composeRecorderMediaSpec(mediaSpec));
        this.mStreamInfo = MutableStateObservable.withInitialState(StreamInfo.of(this.mStreamId, internalStateToStreamState(this.mState)));
        this.mVideoEncoderFactory = encoderFactory;
        this.mAudioEncoderFactory = encoderFactory2;
        this.mVideoEncoderSession = new VideoEncoderSession(encoderFactory, executorNewSequentialExecutor, executor);
    }

    @Override // androidx.camera.video.VideoOutput
    public void onSurfaceRequested(SurfaceRequest surfaceRequest) {
        onSurfaceRequested(surfaceRequest, Timebase.UPTIME);
    }

    @Override // androidx.camera.video.VideoOutput
    public void onSurfaceRequested(final SurfaceRequest surfaceRequest, final Timebase timebase) {
        synchronized (this.mLock) {
            Logger.d(TAG, "Surface is requested in state: " + this.mState + ", Current surface: " + this.mStreamId);
            if (this.mState == State.ERROR) {
                setState(State.CONFIGURING);
            }
        }
        this.mSequentialExecutor.execute(new Runnable() { // from class: androidx.camera.video.Recorder$$ExternalSyntheticLambda4
            @Override // java.lang.Runnable
            public final void run() {
                this.f$0.m192lambda$onSurfaceRequested$0$androidxcameravideoRecorder(surfaceRequest, timebase);
            }
        });
    }

    @Override // androidx.camera.video.VideoOutput
    public Observable<MediaSpec> getMediaSpec() {
        return this.mMediaSpec;
    }

    @Override // androidx.camera.video.VideoOutput
    public Observable<StreamInfo> getStreamInfo() {
        return this.mStreamInfo;
    }

    @Override // androidx.camera.video.VideoOutput
    public void onSourceStateChanged(final VideoOutput.SourceState sourceState) {
        this.mSequentialExecutor.execute(new Runnable() { // from class: androidx.camera.video.Recorder$$ExternalSyntheticLambda5
            @Override // java.lang.Runnable
            public final void run() {
                this.f$0.m191lambda$onSourceStateChanged$1$androidxcameravideoRecorder(sourceState);
            }
        });
    }

    @Override // androidx.camera.video.VideoOutput
    public VideoCapabilities getMediaCapabilities(CameraInfo cameraInfo) {
        return getVideoCapabilities(cameraInfo);
    }

    public PendingRecording prepareRecording(Context context, FileOutputOptions fileOutputOptions) {
        return prepareRecordingInternal(context, fileOutputOptions);
    }

    public PendingRecording prepareRecording(Context context, FileDescriptorOutputOptions fileDescriptorOutputOptions) {
        if (Build.VERSION.SDK_INT < 26) {
            throw new UnsupportedOperationException("File descriptors as output destinations are not supported on pre-Android O (API 26) devices.");
        }
        return prepareRecordingInternal(context, fileDescriptorOutputOptions);
    }

    public PendingRecording prepareRecording(Context context, MediaStoreOutputOptions mediaStoreOutputOptions) {
        return prepareRecordingInternal(context, mediaStoreOutputOptions);
    }

    private PendingRecording prepareRecordingInternal(Context context, OutputOptions outputOptions) {
        Preconditions.checkNotNull(outputOptions, "The OutputOptions cannot be null.");
        return new PendingRecording(context, this, outputOptions);
    }

    public QualitySelector getQualitySelector() {
        return ((MediaSpec) getObservableData(this.mMediaSpec)).getVideoSpec().getQualitySelector();
    }

    int getAudioSource() {
        return ((MediaSpec) getObservableData(this.mMediaSpec)).getAudioSpec().getSource();
    }

    public Executor getExecutor() {
        return this.mUserProvidedExecutor;
    }

    public int getTargetVideoEncodingBitRate() {
        return ((Integer) ((MediaSpec) getObservableData(this.mMediaSpec)).getVideoSpec().getBitrate().getLower()).intValue();
    }

    public int getAspectRatio() {
        return ((MediaSpec) getObservableData(this.mMediaSpec)).getVideoSpec().getAspectRatio();
    }

    Recording start(PendingRecording pendingRecording) {
        long j;
        RecordingRecord recordingRecord;
        int i;
        RecordingRecord recordingRecord2;
        IOException e;
        Preconditions.checkNotNull(pendingRecording, "The given PendingRecording cannot be null.");
        synchronized (this.mLock) {
            j = this.mLastGeneratedRecordingId + 1;
            this.mLastGeneratedRecordingId = j;
            recordingRecord = null;
            i = 0;
            switch (AnonymousClass8.$SwitchMap$androidx$camera$video$Recorder$State[this.mState.ordinal()]) {
                case 1:
                case 2:
                    recordingRecord2 = this.mActiveRecordingRecord;
                    recordingRecord = recordingRecord2;
                    e = null;
                    break;
                case 3:
                case 4:
                    recordingRecord2 = (RecordingRecord) Preconditions.checkNotNull(this.mPendingRecordingRecord);
                    recordingRecord = recordingRecord2;
                    e = null;
                    break;
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                    if (this.mState == State.IDLING) {
                        Preconditions.checkState(this.mActiveRecordingRecord == null && this.mPendingRecordingRecord == null, "Expected recorder to be idle but a recording is either pending or in progress.");
                    }
                    try {
                        RecordingRecord recordingRecordFrom = RecordingRecord.from(pendingRecording, j);
                        recordingRecordFrom.initializeRecording(pendingRecording.getApplicationContext());
                        this.mPendingRecordingRecord = recordingRecordFrom;
                        if (this.mState == State.IDLING) {
                            setState(State.PENDING_RECORDING);
                            this.mSequentialExecutor.execute(new Runnable() { // from class: androidx.camera.video.Recorder$$ExternalSyntheticLambda10
                                @Override // java.lang.Runnable
                                public final void run() {
                                    this.f$0.tryServicePendingRecording();
                                }
                            });
                        } else if (this.mState == State.ERROR) {
                            setState(State.PENDING_RECORDING);
                            this.mSequentialExecutor.execute(new Runnable() { // from class: androidx.camera.video.Recorder$$ExternalSyntheticLambda11
                                @Override // java.lang.Runnable
                                public final void run() {
                                    this.f$0.m197lambda$start$2$androidxcameravideoRecorder();
                                }
                            });
                        } else {
                            setState(State.PENDING_RECORDING);
                        }
                        e = null;
                    } catch (IOException e2) {
                        e = e2;
                        i = 5;
                    }
                    break;
                default:
                    e = null;
                    break;
            }
        }
        if (recordingRecord != null) {
            throw new IllegalStateException("A recording is already in progress. Previous recordings must be stopped before a new recording can be started.");
        }
        if (i != 0) {
            Logger.e(TAG, "Recording was started when the Recorder had encountered error " + e);
            finalizePendingRecording(RecordingRecord.from(pendingRecording, j), i, e);
            return Recording.createFinalizedFrom(pendingRecording, j);
        }
        return Recording.from(pendingRecording, j);
    }
    /* synthetic */ void m197lambda$start$2$androidxcameravideoRecorder() {
        SurfaceRequest surfaceRequest = this.mLatestSurfaceRequest;
        if (surfaceRequest == null) {
            throw new AssertionError("surface request is required to retry initialization.");
        }
        configureInternal(surfaceRequest, this.mVideoSourceTimebase);
    }

    void pause(Recording recording) {
        synchronized (this.mLock) {
            if (!isSameRecording(recording, this.mPendingRecordingRecord) && !isSameRecording(recording, this.mActiveRecordingRecord)) {
                Logger.d(TAG, "pause() called on a recording that is no longer active: " + recording.getOutputOptions());
                return;
            }
            int i = AnonymousClass8.$SwitchMap$androidx$camera$video$Recorder$State[this.mState.ordinal()];
            if (i == 2) {
                setState(State.PAUSED);
                final RecordingRecord recordingRecord = this.mActiveRecordingRecord;
                this.mSequentialExecutor.execute(new Runnable() { // from class: androidx.camera.video.Recorder$$ExternalSyntheticLambda14
                    @Override // java.lang.Runnable
                    public final void run() {
                        this.f$0.m193lambda$pause$3$androidxcameravideoRecorder(recordingRecord);
                    }
                });
            } else if (i == 4) {
                setState(State.PENDING_PAUSED);
            } else if (i == 7 || i == 9) {
                throw new IllegalStateException("Called pause() from invalid state: " + this.mState);
            }
        }
    }

    void resume(Recording recording) {
        synchronized (this.mLock) {
            if (!isSameRecording(recording, this.mPendingRecordingRecord) && !isSameRecording(recording, this.mActiveRecordingRecord)) {
                Logger.d(TAG, "resume() called on a recording that is no longer active: " + recording.getOutputOptions());
                return;
            }
            int i = AnonymousClass8.$SwitchMap$androidx$camera$video$Recorder$State[this.mState.ordinal()];
            if (i == 1) {
                setState(State.RECORDING);
                final RecordingRecord recordingRecord = this.mActiveRecordingRecord;
                this.mSequentialExecutor.execute(new Runnable() { // from class: androidx.camera.video.Recorder$$ExternalSyntheticLambda7
                    @Override // java.lang.Runnable
                    public final void run() {
                        this.f$0.m194lambda$resume$4$androidxcameravideoRecorder(recordingRecord);
                    }
                });
            } else if (i == 3) {
                setState(State.PENDING_RECORDING);
            } else if (i == 7 || i == 9) {
                throw new IllegalStateException("Called resume() from invalid state: " + this.mState);
            }
        }
    }

    void stop(Recording recording, final int i, final Throwable th) {
        synchronized (this.mLock) {
            if (!isSameRecording(recording, this.mPendingRecordingRecord) && !isSameRecording(recording, this.mActiveRecordingRecord)) {
                Logger.d(TAG, "stop() called on a recording that is no longer active: " + recording.getOutputOptions());
                return;
            }
            RecordingRecord recordingRecord = null;
            switch (AnonymousClass8.$SwitchMap$androidx$camera$video$Recorder$State[this.mState.ordinal()]) {
                case 1:
                case 2:
                    setState(State.STOPPING);
                    final long micros = TimeUnit.NANOSECONDS.toMicros(System.nanoTime());
                    final RecordingRecord recordingRecord2 = this.mActiveRecordingRecord;
                    this.mSequentialExecutor.execute(new Runnable() { // from class: androidx.camera.video.Recorder$$ExternalSyntheticLambda18
                        @Override // java.lang.Runnable
                        public final void run() {
                            this.f$0.m198lambda$stop$5$androidxcameravideoRecorder(recordingRecord2, micros, i, th);
                        }
                    });
                    break;
                case 3:
                case 4:
                    Preconditions.checkState(isSameRecording(recording, this.mPendingRecordingRecord));
                    RecordingRecord recordingRecord3 = this.mPendingRecordingRecord;
                    this.mPendingRecordingRecord = null;
                    restoreNonPendingState();
                    recordingRecord = recordingRecord3;
                    break;
                case 5:
                case 6:
                    Preconditions.checkState(isSameRecording(recording, this.mActiveRecordingRecord));
                    break;
                case 7:
                case 9:
                    throw new IllegalStateException("Calling stop() while idling or initializing is invalid.");
            }
            if (recordingRecord != null) {
                if (i == 10) {
                    Logger.e(TAG, "Recording was stopped due to recording being garbage collected before any valid data has been produced.");
                }
                finalizePendingRecording(recordingRecord, 8, new RuntimeException("Recording was stopped before any data could be produced.", th));
            }
        }
    }

    void mute(Recording recording, final boolean z) {
        synchronized (this.mLock) {
            if (!isSameRecording(recording, this.mPendingRecordingRecord) && !isSameRecording(recording, this.mActiveRecordingRecord)) {
                Logger.d(TAG, "mute() called on a recording that is no longer active: " + recording.getOutputOptions());
            } else {
                final RecordingRecord recordingRecord = isSameRecording(recording, this.mPendingRecordingRecord) ? this.mPendingRecordingRecord : this.mActiveRecordingRecord;
                this.mSequentialExecutor.execute(new Runnable() { // from class: androidx.camera.video.Recorder$$ExternalSyntheticLambda8
                    @Override // java.lang.Runnable
                    public final void run() {
                        this.f$0.m190lambda$mute$6$androidxcameravideoRecorder(recordingRecord, z);
                    }
                });
            }
        }
    }

    private void finalizePendingRecording(RecordingRecord recordingRecord, int i, Throwable th) {
        recordingRecord.finalizeRecording(Uri.EMPTY);
        recordingRecord.updateVideoRecordEvent(VideoRecordEvent.finalizeWithError(recordingRecord.getOutputOptions(), RecordingStats.of(0L, 0L, AudioStats.of(1, this.mAudioErrorCause, AudioStats.AUDIO_AMPLITUDE_NONE)), OutputResults.of(Uri.EMPTY), i, th));
    }
    public void m192lambda$onSurfaceRequested$0$androidxcameravideoRecorder(SurfaceRequest surfaceRequest, Timebase timebase) {
        SurfaceRequest surfaceRequest2 = this.mLatestSurfaceRequest;
        if (surfaceRequest2 != null && !surfaceRequest2.isServiced()) {
            this.mLatestSurfaceRequest.willNotProvideSurface();
        }
        this.mLatestSurfaceRequest = surfaceRequest;
        this.mVideoSourceTimebase = timebase;
        configureInternal(surfaceRequest, timebase);
    }
    public void m191lambda$onSourceStateChanged$1$androidxcameravideoRecorder(VideoOutput.SourceState sourceState) {
        ScheduledFuture<?> scheduledFuture;
        Encoder encoder;
        VideoOutput.SourceState sourceState2 = this.mSourceState;
        this.mSourceState = sourceState;
        if (sourceState2 != sourceState) {
            Logger.d(TAG, "Video source has transitioned to state: " + sourceState);
            if (sourceState == VideoOutput.SourceState.INACTIVE) {
                if (this.mActiveSurface == null) {
                    requestReset(4, null, false);
                    return;
                }
                this.mNeedsResetBeforeNextStart = true;
                RecordingRecord recordingRecord = this.mInProgressRecording;
                if (recordingRecord == null || recordingRecord.isPersistent()) {
                    return;
                }
                onInProgressRecordingInternalError(this.mInProgressRecording, 4, null);
                return;
            }
            if (sourceState != VideoOutput.SourceState.ACTIVE_NON_STREAMING || (scheduledFuture = this.mSourceNonStreamingTimeout) == null || !scheduledFuture.cancel(false) || (encoder = this.mVideoEncoder) == null) {
                return;
            }
            notifyEncoderSourceStopped(encoder);
            return;
        }
        Logger.d(TAG, "Video source transitions to the same state: " + sourceState);
    }

    /* high-level source view WARN: Can't fix incorrect switch cases order, some code will duplicate */
    void requestReset(int i, Throwable th, boolean z) {
        boolean z2;
        boolean z3;
        synchronized (this.mLock) {
            z2 = true;
            z3 = false;
            switch (AnonymousClass8.$SwitchMap$androidx$camera$video$Recorder$State[this.mState.ordinal()]) {
                case 1:
                case 2:
                    Preconditions.checkState(this.mInProgressRecording != null, "In-progress recording shouldn't be null when in state " + this.mState);
                    if (this.mActiveRecordingRecord != this.mInProgressRecording) {
                        throw new AssertionError("In-progress recording does not match the active recording. Unable to reset encoder.");
                    }
                    if (!isPersistentRecordingInProgress()) {
                        setState(State.RESETTING);
                        z3 = true;
                        z2 = false;
                    }
                    break;
                    break;
                case 3:
                case 4:
                    updateNonPendingState(State.RESETTING);
                    break;
                case 5:
                default:
                    z2 = false;
                    break;
                case 6:
                    setState(State.RESETTING);
                    z2 = false;
                    break;
                case 7:
                case 8:
                case 9:
                    break;
            }
        }
        if (!z2) {
            if (z3) {
                m198lambda$stop$5$androidxcameravideoRecorder(this.mInProgressRecording, -1L, i, th);
            }
        } else if (z) {
            resetVideo();
        } else {
            reset();
        }
    }

    private void configureInternal(SurfaceRequest surfaceRequest, Timebase timebase) {
        if (surfaceRequest.isServiced()) {
            Logger.w(TAG, "Ignore the SurfaceRequest since it is already served.");
            return;
        }
        surfaceRequest.setTransformationInfoListener(this.mSequentialExecutor, new SurfaceRequest.TransformationInfoListener() { // from class: androidx.camera.video.Recorder$$ExternalSyntheticLambda13
            @Override // androidx.camera.core.SurfaceRequest.TransformationInfoListener
            public final void onTransformationInfoUpdate(SurfaceRequest.TransformationInfo transformationInfo) {
                this.f$0.m189lambda$configureInternal$7$androidxcameravideoRecorder(transformationInfo);
            }
        });
        Size resolution = surfaceRequest.getResolution();
        DynamicRange dynamicRange = surfaceRequest.getDynamicRange();
        VideoCapabilities videoCapabilities = getVideoCapabilities(surfaceRequest.getCamera().getCameraInfo());
        Quality qualityFindHighestSupportedQualityFor = videoCapabilities.findHighestSupportedQualityFor(resolution, dynamicRange);
        Logger.d(TAG, "Using supported quality of " + qualityFindHighestSupportedQualityFor + " for surface size " + resolution);
        if (qualityFindHighestSupportedQualityFor != Quality.NONE) {
            VideoValidatedEncoderProfilesProxy profiles = videoCapabilities.getProfiles(qualityFindHighestSupportedQualityFor, dynamicRange);
            this.mResolvedEncoderProfiles = profiles;
            if (profiles == null) {
                throw new AssertionError("Camera advertised available quality but did not produce EncoderProfiles  for advertised quality.");
            }
        }
        setupVideo(surfaceRequest, timebase);
    }
    /* synthetic */ void m189lambda$configureInternal$7$androidxcameravideoRecorder(SurfaceRequest.TransformationInfo transformationInfo) {
        this.mSourceTransformationInfo = transformationInfo;
    }

    private void setupVideo(final SurfaceRequest surfaceRequest, final Timebase timebase) {
        safeToCloseVideoEncoder().addListener(new Runnable() { // from class: androidx.camera.video.Recorder$$ExternalSyntheticLambda6
            @Override // java.lang.Runnable
            public final void run() {
                this.f$0.m196lambda$setupVideo$8$androidxcameravideoRecorder(surfaceRequest, timebase);
            }
        }, this.mSequentialExecutor);
    }
    /* synthetic */ void m196lambda$setupVideo$8$androidxcameravideoRecorder(SurfaceRequest surfaceRequest, Timebase timebase) {
        if (surfaceRequest.isServiced() || (this.mVideoEncoderSession.isConfiguredSurfaceRequest(surfaceRequest) && !isPersistentRecordingInProgress())) {
            Logger.w(TAG, "Ignore the SurfaceRequest " + surfaceRequest + " isServiced: " + surfaceRequest.isServiced() + " VideoEncoderSession: " + this.mVideoEncoderSession + " has been configured with a persistent in-progress recording.");
            return;
        }
        final VideoEncoderSession videoEncoderSession = new VideoEncoderSession(this.mVideoEncoderFactory, this.mSequentialExecutor, this.mExecutor);
        ListenableFuture<Encoder> listenableFutureConfigure = videoEncoderSession.configure(surfaceRequest, timebase, (MediaSpec) getObservableData(this.mMediaSpec), this.mResolvedEncoderProfiles);
        this.mVideoEncoderSession = videoEncoderSession;
        Futures.addCallback(listenableFutureConfigure, new FutureCallback<Encoder>() { // from class: androidx.camera.video.Recorder.1
            @Override // androidx.camera.core.impl.utils.futures.FutureCallback
            public void onSuccess(Encoder encoder) {
                Logger.d(Recorder.TAG, "VideoEncoder is created. " + encoder);
                if (encoder == null) {
                    return;
                }
                Preconditions.checkState(Recorder.this.mVideoEncoderSession == videoEncoderSession);
                Preconditions.checkState(Recorder.this.mVideoEncoder == null);
                Recorder.this.onVideoEncoderReady(videoEncoderSession);
                Recorder.this.onConfigured();
            }

            @Override // androidx.camera.core.impl.utils.futures.FutureCallback
            public void onFailure(Throwable th) {
                Logger.d(Recorder.TAG, "VideoEncoder Setup error: " + th);
                Recorder.this.onEncoderSetupError(th);
            }
        }, this.mSequentialExecutor);
    }

    boolean isPersistentRecordingInProgress() {
        RecordingRecord recordingRecord = this.mInProgressRecording;
        return recordingRecord != null && recordingRecord.isPersistent();
    }

    private ListenableFuture<Void> safeToCloseVideoEncoder() {
        Logger.d(TAG, "Try to safely release video encoder: " + this.mVideoEncoder);
        return this.mVideoEncoderSession.signalTermination();
    }

    void onVideoEncoderReady(final VideoEncoderSession videoEncoderSession) {
        Encoder videoEncoder = videoEncoderSession.getVideoEncoder();
        this.mVideoEncoder = videoEncoder;
        this.mVideoEncoderBitrateRange = ((VideoEncoderInfo) videoEncoder.getEncoderInfo()).getSupportedBitrateRange();
        this.mFirstRecordingVideoBitrate = this.mVideoEncoder.getConfiguredBitrate();
        Surface activeSurface = videoEncoderSession.getActiveSurface();
        this.mActiveSurface = activeSurface;
        setLatestSurface(activeSurface);
        videoEncoderSession.setOnSurfaceUpdateListener(this.mSequentialExecutor, new Encoder.SurfaceInput.OnSurfaceUpdateListener() { // from class: androidx.camera.video.Recorder$$ExternalSyntheticLambda15
            @Override // androidx.camera.video.internal.encoder.Encoder.SurfaceInput.OnSurfaceUpdateListener
            public final void onSurfaceUpdate(Surface surface) {
                this.f$0.setLatestSurface(surface);
            }
        });
        Futures.addCallback(videoEncoderSession.getReadyToReleaseFuture(), new FutureCallback<Encoder>() { // from class: androidx.camera.video.Recorder.2
            @Override // androidx.camera.core.impl.utils.futures.FutureCallback
            public void onSuccess(Encoder encoder) {
                Logger.d(Recorder.TAG, "VideoEncoder can be released: " + encoder);
                if (encoder == null) {
                    return;
                }
                if (Recorder.this.mSourceNonStreamingTimeout != null && Recorder.this.mSourceNonStreamingTimeout.cancel(false) && Recorder.this.mVideoEncoder != null && Recorder.this.mVideoEncoder == encoder) {
                    Recorder.notifyEncoderSourceStopped(Recorder.this.mVideoEncoder);
                }
                Recorder.this.mVideoEncoderSessionToRelease = videoEncoderSession;
                Recorder.this.setLatestSurface(null);
                Recorder recorder = Recorder.this;
                recorder.requestReset(4, null, recorder.isPersistentRecordingInProgress());
            }

            @Override // androidx.camera.core.impl.utils.futures.FutureCallback
            public void onFailure(Throwable th) {
                Logger.d(Recorder.TAG, "Error in ReadyToReleaseFuture: " + th);
            }
        }, this.mSequentialExecutor);
    }

    /* high-level source view WARN: Removed duplicated region for block: B:20:0x0051  */
    /* high-level source view WARN: Removed duplicated region for block: B:21:0x0055 A[Catch: all -> 0x00c1, TryCatch #0 {, blocks: (B:4:0x0005, B:5:0x0012, B:30:0x0089, B:7:0x0017, B:8:0x0020, B:9:0x0027, B:12:0x002d, B:13:0x0034, B:14:0x0035, B:15:0x0049, B:18:0x004d, B:21:0x0055, B:23:0x005b, B:24:0x0067, B:27:0x0076), top: B:45:0x0005 }] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    void onConfigured() {
        RecordingRecord recordingRecordMakePendingRecordingActiveLocked;
        boolean z;
        int i;
        RecordingRecord recordingRecord;
        Exception exc;
        int i2;
        synchronized (this.mLock) {
            recordingRecordMakePendingRecordingActiveLocked = null;
            switch (AnonymousClass8.$SwitchMap$androidx$camera$video$Recorder$State[this.mState.ordinal()]) {
                case 1:
                    z = true;
                    Preconditions.checkState(isPersistentRecordingInProgress(), "Unexpectedly invoke onConfigured() when there's a non-persistent in-progress recording");
                    i = 1;
                    recordingRecord = null;
                    exc = null;
                    i2 = 0;
                    break;
                case 2:
                    z = false;
                    Preconditions.checkState(isPersistentRecordingInProgress(), "Unexpectedly invoke onConfigured() when there's a non-persistent in-progress recording");
                    i = 1;
                    recordingRecord = null;
                    exc = null;
                    i2 = 0;
                    break;
                case 3:
                    z = true;
                    if (this.mActiveRecordingRecord == null) {
                        recordingRecord = null;
                        exc = null;
                        i2 = 0;
                        i = i2;
                    } else if (this.mSourceState == VideoOutput.SourceState.INACTIVE) {
                        recordingRecord = this.mPendingRecordingRecord;
                        this.mPendingRecordingRecord = null;
                        restoreNonPendingState();
                        exc = PENDING_RECORDING_ERROR_CAUSE_SOURCE_INACTIVE;
                        i2 = 4;
                        i = 0;
                    } else {
                        exc = null;
                        i2 = 0;
                        i = 0;
                        recordingRecordMakePendingRecordingActiveLocked = makePendingRecordingActiveLocked(this.mState);
                        recordingRecord = null;
                    }
                    break;
                case 4:
                    z = false;
                    if (this.mActiveRecordingRecord == null) {
                    }
                    break;
                case 5:
                case 9:
                    throw new AssertionError("Incorrectly invoke onConfigured() in state " + this.mState);
                case 6:
                    if (!this.mEncoderNotUsePersistentInputSurface) {
                        throw new AssertionError("Unexpectedly invoke onConfigured() in a STOPPING state when it's not waiting for a new surface.");
                    }
                    recordingRecord = null;
                    exc = null;
                    z = false;
                    i2 = 0;
                    i = i2;
                    break;
                    break;
                case 7:
                    setState(State.IDLING);
                    recordingRecord = null;
                    exc = null;
                    z = false;
                    i2 = 0;
                    i = i2;
                    break;
                case 8:
                    Logger.e(TAG, "onConfigured() was invoked when the Recorder had encountered error");
                    recordingRecord = null;
                    exc = null;
                    z = false;
                    i2 = 0;
                    i = i2;
                    break;
                default:
                    recordingRecord = null;
                    exc = null;
                    z = false;
                    i2 = 0;
                    i = i2;
                    break;
            }
        }
        if (i == 0) {
            if (recordingRecordMakePendingRecordingActiveLocked != null) {
                startRecording(recordingRecordMakePendingRecordingActiveLocked, z);
                return;
            } else {
                if (recordingRecord != null) {
                    finalizePendingRecording(recordingRecord, i2, exc);
                    return;
                }
                return;
            }
        }
        updateEncoderCallbacks(this.mInProgressRecording, true);
        this.mVideoEncoder.start();
        if (this.mShouldSendResumeEvent) {
            RecordingRecord recordingRecord2 = this.mInProgressRecording;
            recordingRecord2.updateVideoRecordEvent(VideoRecordEvent.resume(recordingRecord2.getOutputOptions(), getInProgressRecordingStats()));
            this.mShouldSendResumeEvent = false;
        }
        if (z) {
            this.mVideoEncoder.pause();
        }
    }

    private MediaSpec composeRecorderMediaSpec(MediaSpec mediaSpec) {
        MediaSpec.Builder builder = mediaSpec.toBuilder();
        if (mediaSpec.getVideoSpec().getAspectRatio() == -1) {
            builder.configureVideo(new Consumer() { // from class: androidx.camera.video.Recorder$$ExternalSyntheticLambda0
                @Override // androidx.core.util.Consumer
                public final void accept(Object obj) {
                    ((VideoSpec.Builder) obj).setAspectRatio(Recorder.VIDEO_SPEC_DEFAULT.getAspectRatio());
                }
            });
        }
        return builder.build();
    }

    private static boolean isSameRecording(Recording recording, RecordingRecord recordingRecord) {
        return recordingRecord != null && recording.getRecordingId() == recordingRecord.getRecordingId();
    }

    private void setupAudio(RecordingRecord recordingRecord) throws InvalidConfigException, AudioSourceAccessException {
        MediaSpec mediaSpec = (MediaSpec) getObservableData(this.mMediaSpec);
        AudioMimeInfo audioMimeInfoResolveAudioMimeInfo = AudioConfigUtil.resolveAudioMimeInfo(mediaSpec, this.mResolvedEncoderProfiles);
        Timebase timebase = Timebase.UPTIME;
        AudioSettings audioSettingsResolveAudioSettings = AudioConfigUtil.resolveAudioSettings(audioMimeInfoResolveAudioMimeInfo, mediaSpec.getAudioSpec());
        if (this.mAudioSource != null) {
            releaseCurrentAudioSource();
        }
        AudioSource audioSource = setupAudioSource(recordingRecord, audioSettingsResolveAudioSettings);
        this.mAudioSource = audioSource;
        Logger.d(TAG, String.format("Set up new audio source: 0x%x", Integer.valueOf(audioSource.hashCode())));
        Encoder encoderCreateEncoder = this.mAudioEncoderFactory.createEncoder(this.mExecutor, AudioConfigUtil.resolveAudioEncoderConfig(audioMimeInfoResolveAudioMimeInfo, timebase, audioSettingsResolveAudioSettings, mediaSpec.getAudioSpec()));
        this.mAudioEncoder = encoderCreateEncoder;
        Encoder.EncoderInput input = encoderCreateEncoder.getInput();
        if (!(input instanceof Encoder.ByteBufferInput)) {
            throw new AssertionError("The EncoderInput of audio isn't a ByteBufferInput.");
        }
        this.mAudioSource.setBufferProvider((Encoder.ByteBufferInput) input);
    }

    private AudioSource setupAudioSource(RecordingRecord recordingRecord, AudioSettings audioSettings) throws AudioSourceAccessException {
        return recordingRecord.performOneTimeAudioSourceCreation(audioSettings, AUDIO_EXECUTOR);
    }

    private void releaseCurrentAudioSource() {
        final AudioSource audioSource = this.mAudioSource;
        if (audioSource == null) {
            throw new AssertionError("Cannot release null audio source.");
        }
        this.mAudioSource = null;
        Logger.d(TAG, String.format("Releasing audio source: 0x%x", Integer.valueOf(audioSource.hashCode())));
        Futures.addCallback(audioSource.release(), new FutureCallback<Void>() { // from class: androidx.camera.video.Recorder.3
            @Override // androidx.camera.core.impl.utils.futures.FutureCallback
            public void onSuccess(Void r2) {
                Logger.d(Recorder.TAG, String.format("Released audio source successfully: 0x%x", Integer.valueOf(audioSource.hashCode())));
            }

            @Override // androidx.camera.core.impl.utils.futures.FutureCallback
            public void onFailure(Throwable th) {
                Logger.d(Recorder.TAG, String.format("An error occurred while attempting to release audio source: 0x%x", Integer.valueOf(audioSource.hashCode())));
            }
        }, CameraXExecutors.directExecutor());
    }

    void onEncoderSetupError(Throwable th) {
        RecordingRecord recordingRecord;
        synchronized (this.mLock) {
            recordingRecord = null;
            switch (AnonymousClass8.$SwitchMap$androidx$camera$video$Recorder$State[this.mState.ordinal()]) {
                case 1:
                case 2:
                case 5:
                case 6:
                case 9:
                    throw new AssertionError("Encountered encoder setup error while in unexpected state " + this.mState + ": " + th);
                case 3:
                case 4:
                    RecordingRecord recordingRecord2 = this.mPendingRecordingRecord;
                    this.mPendingRecordingRecord = null;
                    recordingRecord = recordingRecord2;
                case 7:
                    setStreamId(-1);
                    setState(State.ERROR);
                    break;
            }
        }
        if (recordingRecord != null) {
            finalizePendingRecording(recordingRecord, 7, th);
        }
    }

    void setupAndStartMediaMuxer(RecordingRecord recordingRecord) {
        if (this.mMediaMuxer != null) {
            throw new AssertionError("Unable to set up media muxer when one already exists.");
        }
        if (isAudioEnabled() && this.mPendingAudioRingBuffer.isEmpty()) {
            throw new AssertionError("Audio is enabled but no audio sample is ready. Cannot start media muxer.");
        }
        EncodedData encodedData = this.mPendingFirstVideoData;
        if (encodedData == null) {
            throw new AssertionError("Media muxer cannot be started without an encoded video frame.");
        }
        try {
            this.mPendingFirstVideoData = null;
            List<EncodedData> audioDataToWriteAndClearCache = getAudioDataToWriteAndClearCache(encodedData.getPresentationTimeUs());
            long size = encodedData.size();
            Iterator<EncodedData> it = audioDataToWriteAndClearCache.iterator();
            while (it.hasNext()) {
                size += it.next().size();
            }
            long j = this.mFileSizeLimitInBytes;
            if (j != 0 && size > j) {
                Logger.d(TAG, String.format("Initial data exceeds file size limit %d > %d", Long.valueOf(size), Long.valueOf(this.mFileSizeLimitInBytes)));
                onInProgressRecordingInternalError(recordingRecord, 2, null);
                if (encodedData != null) {
                    encodedData.close();
                    return;
                }
                return;
            }
            try {
                MediaSpec mediaSpec = (MediaSpec) getObservableData(this.mMediaSpec);
                MediaMuxer mediaMuxerPerformOneTimeMediaMuxerCreation = recordingRecord.performOneTimeMediaMuxerCreation(mediaSpec.getOutputFormat() == -1 ? supportedMuxerFormatOrDefaultFrom(this.mResolvedEncoderProfiles, MediaSpec.outputFormatToMuxerFormat(MEDIA_SPEC_DEFAULT.getOutputFormat())) : MediaSpec.outputFormatToMuxerFormat(mediaSpec.getOutputFormat()), new Consumer() { // from class: androidx.camera.video.Recorder$$ExternalSyntheticLambda16
                    @Override // androidx.core.util.Consumer
                    public final void accept(Object obj) {
                        this.f$0.m195lambda$setupAndStartMediaMuxer$10$androidxcameravideoRecorder((Uri) obj);
                    }
                });
                SurfaceRequest.TransformationInfo transformationInfo = this.mSourceTransformationInfo;
                if (transformationInfo != null) {
                    setInProgressTransformationInfo(transformationInfo);
                    mediaMuxerPerformOneTimeMediaMuxerCreation.setOrientationHint(transformationInfo.getRotationDegrees());
                }
                Location location = recordingRecord.getOutputOptions().getLocation();
                if (location != null) {
                    try {
                        Pair<Double, Double> pairAdjustGeoLocation = CorrectNegativeLatLongForMediaMuxer.adjustGeoLocation(location.getLatitude(), location.getLongitude());
                        mediaMuxerPerformOneTimeMediaMuxerCreation.setLocation((float) ((Double) pairAdjustGeoLocation.first).doubleValue(), (float) ((Double) pairAdjustGeoLocation.second).doubleValue());
                    } catch (IllegalArgumentException e) {
                        mediaMuxerPerformOneTimeMediaMuxerCreation.release();
                        onInProgressRecordingInternalError(recordingRecord, 5, e);
                        if (encodedData != null) {
                            encodedData.close();
                            return;
                        }
                        return;
                    }
                }
                this.mVideoTrackIndex = Integer.valueOf(mediaMuxerPerformOneTimeMediaMuxerCreation.addTrack(this.mVideoOutputConfig.getMediaFormat()));
                if (isAudioEnabled()) {
                    this.mAudioTrackIndex = Integer.valueOf(mediaMuxerPerformOneTimeMediaMuxerCreation.addTrack(this.mAudioOutputConfig.getMediaFormat()));
                }
                mediaMuxerPerformOneTimeMediaMuxerCreation.start();
                this.mMediaMuxer = mediaMuxerPerformOneTimeMediaMuxerCreation;
                writeVideoData(encodedData, recordingRecord);
                Iterator<EncodedData> it2 = audioDataToWriteAndClearCache.iterator();
                while (it2.hasNext()) {
                    writeAudioData(it2.next(), recordingRecord);
                }
                if (encodedData != null) {
                    encodedData.close();
                }
            } catch (IOException e2) {
                onInProgressRecordingInternalError(recordingRecord, 5, e2);
                if (encodedData != null) {
                    encodedData.close();
                }
            }
        } catch (Throwable th) {
            if (encodedData != null) {
                try {
                    encodedData.close();
                } catch (Throwable th2) {
                    th.addSuppressed(th2);
                }
            }
            throw th;
        }
    }
    /* synthetic */ void m195lambda$setupAndStartMediaMuxer$10$androidxcameravideoRecorder(Uri uri) {
        this.mOutputUri = uri;
    }

    private List<EncodedData> getAudioDataToWriteAndClearCache(long j) {
        ArrayList arrayList = new ArrayList();
        while (!this.mPendingAudioRingBuffer.isEmpty()) {
            EncodedData encodedDataDequeue = this.mPendingAudioRingBuffer.dequeue();
            if (encodedDataDequeue.getPresentationTimeUs() >= j) {
                arrayList.add(encodedDataDequeue);
            }
        }
        return arrayList;
    }

    private void startInternal(RecordingRecord recordingRecord) {
        AudioState audioState;
        if (this.mInProgressRecording != null) {
            throw new AssertionError("Attempted to start a new recording while another was in progress.");
        }
        if (recordingRecord.getOutputOptions().getFileSizeLimit() > 0) {
            this.mFileSizeLimitInBytes = Math.round(recordingRecord.getOutputOptions().getFileSizeLimit() * 0.95d);
            Logger.d(TAG, "File size limit in bytes: " + this.mFileSizeLimitInBytes);
        } else {
            this.mFileSizeLimitInBytes = 0L;
        }
        if (recordingRecord.getOutputOptions().getDurationLimitMillis() > 0) {
            this.mDurationLimitNs = TimeUnit.MILLISECONDS.toNanos(recordingRecord.getOutputOptions().getDurationLimitMillis());
            Logger.d(TAG, "Duration limit in nanoseconds: " + this.mDurationLimitNs);
        } else {
            this.mDurationLimitNs = 0L;
        }
        this.mInProgressRecording = recordingRecord;
        switch (AnonymousClass8.$SwitchMap$androidx$camera$video$Recorder$AudioState[this.mAudioState.ordinal()]) {
            case 1:
            case 2:
            case 3:
            case 4:
                throw new AssertionError("Incorrectly invoke startInternal in audio state " + this.mAudioState);
            case 5:
                setAudioState(recordingRecord.hasAudioEnabled() ? AudioState.ENABLED : AudioState.DISABLED);
                break;
            case 6:
                if (recordingRecord.hasAudioEnabled()) {
                    if (!isAudioSupported()) {
                        throw new AssertionError("The Recorder doesn't support recording with audio");
                    }
                    try {
                        if (!this.mInProgressRecording.isPersistent() || this.mAudioEncoder == null) {
                            setupAudio(recordingRecord);
                        }
                        setAudioState(AudioState.ENABLED);
                    } catch (AudioSourceAccessException | InvalidConfigException e) {
                        Logger.e(TAG, "Unable to create audio resource with error: ", e);
                        if (e instanceof InvalidConfigException) {
                            audioState = AudioState.ERROR_ENCODER;
                        } else {
                            audioState = AudioState.ERROR_SOURCE;
                        }
                        setAudioState(audioState);
                        this.mAudioErrorCause = e;
                    }
                }
                break;
        }
        updateEncoderCallbacks(recordingRecord, false);
        if (isAudioEnabled()) {
            this.mAudioSource.start(recordingRecord.isMuted());
            this.mAudioEncoder.start();
        }
        this.mVideoEncoder.start();
        RecordingRecord recordingRecord2 = this.mInProgressRecording;
        recordingRecord2.updateVideoRecordEvent(VideoRecordEvent.start(recordingRecord2.getOutputOptions(), getInProgressRecordingStats()));
    }
    static /* synthetic */ class AnonymousClass8 {
        static final /* synthetic */ int[] $SwitchMap$androidx$camera$video$Recorder$AudioState;
        static final /* synthetic */ int[] $SwitchMap$androidx$camera$video$Recorder$State;

        static {
            int[] iArr = new int[AudioState.values().length];
            $SwitchMap$androidx$camera$video$Recorder$AudioState = iArr;
            try {
                iArr[AudioState.ERROR_ENCODER.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                $SwitchMap$androidx$camera$video$Recorder$AudioState[AudioState.ERROR_SOURCE.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                $SwitchMap$androidx$camera$video$Recorder$AudioState[AudioState.ENABLED.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                $SwitchMap$androidx$camera$video$Recorder$AudioState[AudioState.DISABLED.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                $SwitchMap$androidx$camera$video$Recorder$AudioState[AudioState.IDLING.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                $SwitchMap$androidx$camera$video$Recorder$AudioState[AudioState.INITIALIZING.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            int[] iArr2 = new int[State.values().length];
            $SwitchMap$androidx$camera$video$Recorder$State = iArr2;
            try {
                iArr2[State.PAUSED.ordinal()] = 1;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                $SwitchMap$androidx$camera$video$Recorder$State[State.RECORDING.ordinal()] = 2;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                $SwitchMap$androidx$camera$video$Recorder$State[State.PENDING_PAUSED.ordinal()] = 3;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                $SwitchMap$androidx$camera$video$Recorder$State[State.PENDING_RECORDING.ordinal()] = 4;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                $SwitchMap$androidx$camera$video$Recorder$State[State.RESETTING.ordinal()] = 5;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                $SwitchMap$androidx$camera$video$Recorder$State[State.STOPPING.ordinal()] = 6;
            } catch (NoSuchFieldError unused12) {
            }
            try {
                $SwitchMap$androidx$camera$video$Recorder$State[State.CONFIGURING.ordinal()] = 7;
            } catch (NoSuchFieldError unused13) {
            }
            try {
                $SwitchMap$androidx$camera$video$Recorder$State[State.ERROR.ordinal()] = 8;
            } catch (NoSuchFieldError unused14) {
            }
            try {
                $SwitchMap$androidx$camera$video$Recorder$State[State.IDLING.ordinal()] = 9;
            } catch (NoSuchFieldError unused15) {
            }
        }
    }

    private void updateEncoderCallbacks(final RecordingRecord recordingRecord, boolean z) {
        if (!this.mEncodingFutures.isEmpty()) {
            ListenableFuture listenableFutureAllAsList = Futures.allAsList(this.mEncodingFutures);
            if (!listenableFutureAllAsList.isDone()) {
                listenableFutureAllAsList.cancel(true);
            }
            this.mEncodingFutures.clear();
        }
        this.mEncodingFutures.add(CallbackToFutureAdapter.getFuture(new CallbackToFutureAdapter.Resolver() { // from class: androidx.camera.video.Recorder$$ExternalSyntheticLambda2
            @Override // androidx.concurrent.futures.CallbackToFutureAdapter.Resolver
            public final Object attachCompleter(CallbackToFutureAdapter.Completer completer) {
                return this.f$0.m200lambda$updateEncoderCallbacks$11$androidxcameravideoRecorder(recordingRecord, completer);
            }
        }));
        if (isAudioEnabled() && !z) {
            this.mEncodingFutures.add(CallbackToFutureAdapter.getFuture(new CallbackToFutureAdapter.Resolver() { // from class: androidx.camera.video.Recorder$$ExternalSyntheticLambda3
                @Override // androidx.concurrent.futures.CallbackToFutureAdapter.Resolver
                public final Object attachCompleter(CallbackToFutureAdapter.Completer completer) {
                    return this.f$0.m202lambda$updateEncoderCallbacks$13$androidxcameravideoRecorder(recordingRecord, completer);
                }
            }));
        }
        Futures.addCallback(Futures.allAsList(this.mEncodingFutures), new FutureCallback<List<Void>>() { // from class: androidx.camera.video.Recorder.7
            @Override // androidx.camera.core.impl.utils.futures.FutureCallback
            public void onSuccess(List<Void> list) {
                Logger.d(Recorder.TAG, "Encodings end successfully.");
                Recorder recorder = Recorder.this;
                recorder.finalizeInProgressRecording(recorder.mRecordingStopError, Recorder.this.mRecordingStopErrorCause);
            }

            @Override // androidx.camera.core.impl.utils.futures.FutureCallback
            public void onFailure(Throwable th) {
                Preconditions.checkState(Recorder.this.mInProgressRecording != null, "In-progress recording shouldn't be null");
                if (Recorder.this.mInProgressRecording.isPersistent()) {
                    return;
                }
                Logger.d(Recorder.TAG, "Encodings end with error: " + th);
                Recorder recorder = Recorder.this;
                recorder.finalizeInProgressRecording(recorder.mMediaMuxer == null ? 8 : 6, th);
            }
        }, CameraXExecutors.directExecutor());
    }
    /* synthetic */ Object m200lambda$updateEncoderCallbacks$11$androidxcameravideoRecorder(final RecordingRecord recordingRecord, final CallbackToFutureAdapter.Completer completer) throws Exception {
        this.mVideoEncoder.setEncoderCallback(new EncoderCallback() { // from class: androidx.camera.video.Recorder.4
            @Override // androidx.camera.video.internal.encoder.EncoderCallback
            public void onEncodeStart() {
            }

            @Override // androidx.camera.video.internal.encoder.EncoderCallback
            public void onEncodeStop() {
                completer.set(null);
            }

            @Override // androidx.camera.video.internal.encoder.EncoderCallback
            public void onEncodeError(EncodeException encodeException) {
                completer.setException(encodeException);
            }

            @Override // androidx.camera.video.internal.encoder.EncoderCallback
            public void onEncodedData(EncodedData encodedData) {
                boolean z;
                if (Recorder.this.mMediaMuxer == null) {
                    if (!Recorder.this.mInProgressRecordingStopping) {
                        if (Recorder.this.mPendingFirstVideoData != null) {
                            Recorder.this.mPendingFirstVideoData.close();
                            Recorder.this.mPendingFirstVideoData = null;
                            z = true;
                        } else {
                            z = false;
                        }
                        if (encodedData.isKeyFrame()) {
                            Recorder.this.mPendingFirstVideoData = encodedData;
                            if (!Recorder.this.isAudioEnabled() || !Recorder.this.mPendingAudioRingBuffer.isEmpty()) {
                                Logger.d(Recorder.TAG, "Received video keyframe. Starting muxer...");
                                Recorder.this.setupAndStartMediaMuxer(recordingRecord);
                                return;
                            } else if (z) {
                                Logger.d(Recorder.TAG, "Replaced cached video keyframe with newer keyframe.");
                                return;
                            } else {
                                Logger.d(Recorder.TAG, "Cached video keyframe while we wait for first audio sample before starting muxer.");
                                return;
                            }
                        }
                        if (z) {
                            Logger.d(Recorder.TAG, "Dropped cached keyframe since we have new video data and have not yet received audio data.");
                        }
                        Logger.d(Recorder.TAG, "Dropped video data since muxer has not yet started and data is not a keyframe.");
                        Recorder.this.mVideoEncoder.requestKeyFrame();
                        encodedData.close();
                        return;
                    }
                    Logger.d(Recorder.TAG, "Drop video data since recording is stopping.");
                    encodedData.close();
                    return;
                }
                try {
                    Recorder.this.writeVideoData(encodedData, recordingRecord);
                    if (encodedData != null) {
                        encodedData.close();
                    }
                } catch (Throwable th) {
                    if (encodedData != null) {
                        try {
                            encodedData.close();
                        } catch (Throwable th2) {
                            th.addSuppressed(th2);
                        }
                    }
                    throw th;
                }
            }

            @Override // androidx.camera.video.internal.encoder.EncoderCallback
            public void onOutputConfigUpdate(OutputConfig outputConfig) {
                Recorder.this.mVideoOutputConfig = outputConfig;
            }
        }, this.mSequentialExecutor);
        return "videoEncodingFuture";
    }
    /* synthetic */ Object m202lambda$updateEncoderCallbacks$13$androidxcameravideoRecorder(final RecordingRecord recordingRecord, final CallbackToFutureAdapter.Completer completer) throws Exception {
        final Consumer consumer = new Consumer() { // from class: androidx.camera.video.Recorder$$ExternalSyntheticLambda1
            @Override // androidx.core.util.Consumer
            public final void accept(Object obj) {
                this.f$0.m201lambda$updateEncoderCallbacks$12$androidxcameravideoRecorder(completer, (Throwable) obj);
            }
        };
        this.mAudioSource.setAudioSourceCallback(this.mSequentialExecutor, new AudioSource.AudioSourceCallback() { // from class: androidx.camera.video.Recorder.5
            @Override // androidx.camera.video.internal.audio.AudioSource.AudioSourceCallback
            public void onSilenceStateChanged(boolean z) {
                if (Recorder.this.mIsAudioSourceSilenced != z) {
                    Recorder.this.mIsAudioSourceSilenced = z;
                    Recorder.this.updateInProgressStatusEvent();
                } else {
                    Logger.w(Recorder.TAG, "Audio source silenced transitions to the same state " + z);
                }
            }

            @Override // androidx.camera.video.internal.audio.AudioSource.AudioSourceCallback
            public void onError(Throwable th) {
                Logger.e(Recorder.TAG, "Error occurred after audio source started.", th);
                if (th instanceof AudioSourceAccessException) {
                    consumer.accept(th);
                }
            }

            @Override // androidx.camera.video.internal.audio.AudioSource.AudioSourceCallback
            public void onAmplitudeValue(double d) {
                Recorder.this.mAudioAmplitude = d;
            }
        });
        this.mAudioEncoder.setEncoderCallback(new EncoderCallback() { // from class: androidx.camera.video.Recorder.6
            @Override // androidx.camera.video.internal.encoder.EncoderCallback
            public void onEncodeStart() {
            }

            @Override // androidx.camera.video.internal.encoder.EncoderCallback
            public void onEncodeStop() {
                completer.set(null);
            }

            @Override // androidx.camera.video.internal.encoder.EncoderCallback
            public void onEncodeError(EncodeException encodeException) {
                if (Recorder.this.mAudioErrorCause == null) {
                    consumer.accept(encodeException);
                }
            }

            @Override // androidx.camera.video.internal.encoder.EncoderCallback
            public void onEncodedData(EncodedData encodedData) {
                if (Recorder.this.mAudioState == AudioState.DISABLED) {
                    encodedData.close();
                    throw new AssertionError("Audio is not enabled but audio encoded data is being produced.");
                }
                if (Recorder.this.mMediaMuxer == null) {
                    if (!Recorder.this.mInProgressRecordingStopping) {
                        Recorder.this.mPendingAudioRingBuffer.enqueue(new BufferCopiedEncodedData(encodedData));
                        if (Recorder.this.mPendingFirstVideoData != null) {
                            Logger.d(Recorder.TAG, "Received audio data. Starting muxer...");
                            Recorder.this.setupAndStartMediaMuxer(recordingRecord);
                        } else {
                            Logger.d(Recorder.TAG, "Cached audio data while we wait for video keyframe before starting muxer.");
                        }
                    } else {
                        Logger.d(Recorder.TAG, "Drop audio data since recording is stopping.");
                    }
                    encodedData.close();
                    return;
                }
                try {
                    Recorder.this.writeAudioData(encodedData, recordingRecord);
                    if (encodedData != null) {
                        encodedData.close();
                    }
                } catch (Throwable th) {
                    if (encodedData != null) {
                        try {
                            encodedData.close();
                        } catch (Throwable th2) {
                            th.addSuppressed(th2);
                        }
                    }
                    throw th;
                }
            }

            @Override // androidx.camera.video.internal.encoder.EncoderCallback
            public void onOutputConfigUpdate(OutputConfig outputConfig) {
                Recorder.this.mAudioOutputConfig = outputConfig;
            }
        }, this.mSequentialExecutor);
        return "audioEncodingFuture";
    }
    /* synthetic */ void m201lambda$updateEncoderCallbacks$12$androidxcameravideoRecorder(CallbackToFutureAdapter.Completer completer, Throwable th) {
        if (this.mAudioErrorCause == null) {
            if (th instanceof EncodeException) {
                setAudioState(AudioState.ERROR_ENCODER);
            } else {
                setAudioState(AudioState.ERROR_SOURCE);
            }
            this.mAudioErrorCause = th;
            updateInProgressStatusEvent();
            completer.set(null);
        }
    }

    void writeVideoData(EncodedData encodedData, RecordingRecord recordingRecord) {
        if (this.mVideoTrackIndex == null) {
            throw new AssertionError("Video data comes before the track is added to MediaMuxer.");
        }
        long size = this.mRecordingBytes + encodedData.size();
        long j = this.mFileSizeLimitInBytes;
        long j2 = 0;
        if (j != 0 && size > j) {
            Logger.d(TAG, String.format("Reach file size limit %d > %d", Long.valueOf(size), Long.valueOf(this.mFileSizeLimitInBytes)));
            onInProgressRecordingInternalError(recordingRecord, 2, null);
            return;
        }
        long presentationTimeUs = encodedData.getPresentationTimeUs();
        if (this.mFirstRecordingVideoDataTimeUs == Long.MAX_VALUE) {
            this.mFirstRecordingVideoDataTimeUs = presentationTimeUs;
            Logger.d(TAG, String.format("First video time: %d (%s)", Long.valueOf(presentationTimeUs), DebugUtils.readableUs(this.mFirstRecordingVideoDataTimeUs)));
        } else {
            long nanos = TimeUnit.MICROSECONDS.toNanos(presentationTimeUs - Math.min(this.mFirstRecordingVideoDataTimeUs, this.mFirstRecordingAudioDataTimeUs));
            Preconditions.checkState(this.mPreviousRecordingVideoDataTimeUs != Long.MAX_VALUE, "There should be a previous data for adjusting the duration.");
            long nanos2 = TimeUnit.MICROSECONDS.toNanos(presentationTimeUs - this.mPreviousRecordingVideoDataTimeUs) + nanos;
            long j3 = this.mDurationLimitNs;
            if (j3 != 0 && nanos2 > j3) {
                Logger.d(TAG, String.format("Video data reaches duration limit %d > %d", Long.valueOf(nanos2), Long.valueOf(this.mDurationLimitNs)));
                onInProgressRecordingInternalError(recordingRecord, 9, null);
                return;
            }
            j2 = nanos;
        }
        this.mMediaMuxer.writeSampleData(this.mVideoTrackIndex.intValue(), encodedData.getByteBuffer(), encodedData.getBufferInfo());
        this.mRecordingBytes = size;
        this.mRecordingDurationNs = j2;
        this.mPreviousRecordingVideoDataTimeUs = presentationTimeUs;
        updateInProgressStatusEvent();
    }

    void writeAudioData(EncodedData encodedData, RecordingRecord recordingRecord) {
        long size = this.mRecordingBytes + encodedData.size();
        long j = this.mFileSizeLimitInBytes;
        if (j != 0 && size > j) {
            Logger.d(TAG, String.format("Reach file size limit %d > %d", Long.valueOf(size), Long.valueOf(this.mFileSizeLimitInBytes)));
            onInProgressRecordingInternalError(recordingRecord, 2, null);
            return;
        }
        long presentationTimeUs = encodedData.getPresentationTimeUs();
        if (this.mFirstRecordingAudioDataTimeUs == Long.MAX_VALUE) {
            this.mFirstRecordingAudioDataTimeUs = presentationTimeUs;
            Logger.d(TAG, String.format("First audio time: %d (%s)", Long.valueOf(presentationTimeUs), DebugUtils.readableUs(this.mFirstRecordingAudioDataTimeUs)));
        } else {
            long nanos = TimeUnit.MICROSECONDS.toNanos(presentationTimeUs - Math.min(this.mFirstRecordingVideoDataTimeUs, this.mFirstRecordingAudioDataTimeUs));
            Preconditions.checkState(this.mPreviousRecordingAudioDataTimeUs != Long.MAX_VALUE, "There should be a previous data for adjusting the duration.");
            long nanos2 = nanos + TimeUnit.MICROSECONDS.toNanos(presentationTimeUs - this.mPreviousRecordingAudioDataTimeUs);
            long j2 = this.mDurationLimitNs;
            if (j2 != 0 && nanos2 > j2) {
                Logger.d(TAG, String.format("Audio data reaches duration limit %d > %d", Long.valueOf(nanos2), Long.valueOf(this.mDurationLimitNs)));
                onInProgressRecordingInternalError(recordingRecord, 9, null);
                return;
            }
        }
        this.mMediaMuxer.writeSampleData(this.mAudioTrackIndex.intValue(), encodedData.getByteBuffer(), encodedData.getBufferInfo());
        this.mRecordingBytes = size;
        this.mPreviousRecordingAudioDataTimeUs = presentationTimeUs;
    }
    public void m193lambda$pause$3$androidxcameravideoRecorder(RecordingRecord recordingRecord) {
        if (this.mInProgressRecording != recordingRecord || this.mInProgressRecordingStopping) {
            return;
        }
        if (isAudioEnabled()) {
            this.mAudioEncoder.pause();
        }
        this.mVideoEncoder.pause();
        RecordingRecord recordingRecord2 = this.mInProgressRecording;
        recordingRecord2.updateVideoRecordEvent(VideoRecordEvent.pause(recordingRecord2.getOutputOptions(), getInProgressRecordingStats()));
    }
    public void m194lambda$resume$4$androidxcameravideoRecorder(RecordingRecord recordingRecord) {
        if (this.mInProgressRecording != recordingRecord || this.mInProgressRecordingStopping) {
            return;
        }
        if (isAudioEnabled()) {
            this.mAudioEncoder.start();
        }
        Encoder encoder = this.mVideoEncoder;
        if (encoder != null) {
            encoder.start();
            RecordingRecord recordingRecord2 = this.mInProgressRecording;
            recordingRecord2.updateVideoRecordEvent(VideoRecordEvent.resume(recordingRecord2.getOutputOptions(), getInProgressRecordingStats()));
            return;
        }
        this.mShouldSendResumeEvent = true;
    }
    public void m198lambda$stop$5$androidxcameravideoRecorder(RecordingRecord recordingRecord, long j, int i, Throwable th) {
        if (this.mInProgressRecording != recordingRecord || this.mInProgressRecordingStopping) {
            return;
        }
        this.mInProgressRecordingStopping = true;
        this.mRecordingStopError = i;
        this.mRecordingStopErrorCause = th;
        if (isAudioEnabled()) {
            clearPendingAudioRingBuffer();
            this.mAudioEncoder.stop(j);
        }
        EncodedData encodedData = this.mPendingFirstVideoData;
        if (encodedData != null) {
            encodedData.close();
            this.mPendingFirstVideoData = null;
        }
        if (this.mSourceState != VideoOutput.SourceState.ACTIVE_NON_STREAMING) {
            final Encoder encoder = this.mVideoEncoder;
            this.mSourceNonStreamingTimeout = CameraXExecutors.mainThreadExecutor().schedule(new Runnable() { // from class: androidx.camera.video.Recorder$$ExternalSyntheticLambda17
                @Override // java.lang.Runnable
                public final void run() {
                    this.f$0.m199lambda$stopInternal$15$androidxcameravideoRecorder(encoder);
                }
            }, SOURCE_NON_STREAMING_TIMEOUT_MS, TimeUnit.MILLISECONDS);
        } else {
            notifyEncoderSourceStopped(this.mVideoEncoder);
        }
        this.mVideoEncoder.stop(j);
    }
    /* synthetic */ void m199lambda$stopInternal$15$androidxcameravideoRecorder(final Encoder encoder) {
        this.mSequentialExecutor.execute(new Runnable() { // from class: androidx.camera.video.Recorder$$ExternalSyntheticLambda12
            @Override // java.lang.Runnable
            public final void run() {
                Recorder.lambda$stopInternal$14(encoder);
            }
        });
    }

    static /* synthetic */ void lambda$stopInternal$14(Encoder encoder) {
        Logger.d(TAG, "The source didn't become non-streaming before timeout. Waited 1000ms");
        if (DeviceQuirks.get(DeactivateEncoderSurfaceBeforeStopEncoderQuirk.class) != null) {
            notifyEncoderSourceStopped(encoder);
        }
    }
    public void m190lambda$mute$6$androidxcameravideoRecorder(RecordingRecord recordingRecord, boolean z) {
        AudioSource audioSource;
        if (recordingRecord.isMuted() == z) {
            return;
        }
        recordingRecord.mute(z);
        if (this.mInProgressRecording != recordingRecord || this.mInProgressRecordingStopping || (audioSource = this.mAudioSource) == null) {
            return;
        }
        audioSource.mute(z);
    }

    static void notifyEncoderSourceStopped(Encoder encoder) {
        if (encoder instanceof EncoderImpl) {
            ((EncoderImpl) encoder).signalSourceStopped();
        }
    }

    private void clearPendingAudioRingBuffer() {
        while (!this.mPendingAudioRingBuffer.isEmpty()) {
            this.mPendingAudioRingBuffer.dequeue();
        }
    }

    private void reset() {
        if (this.mAudioEncoder != null) {
            Logger.d(TAG, "Releasing audio encoder.");
            this.mAudioEncoder.release();
            this.mAudioEncoder = null;
            this.mAudioOutputConfig = null;
        }
        if (this.mAudioSource != null) {
            releaseCurrentAudioSource();
        }
        setAudioState(AudioState.INITIALIZING);
        resetVideo();
    }

    private void tryReleaseVideoEncoder() {
        VideoEncoderSession videoEncoderSession = this.mVideoEncoderSessionToRelease;
        if (videoEncoderSession != null) {
            Preconditions.checkState(videoEncoderSession.getVideoEncoder() == this.mVideoEncoder);
            Logger.d(TAG, "Releasing video encoder: " + this.mVideoEncoder);
            this.mVideoEncoderSessionToRelease.terminateNow();
            this.mVideoEncoderSessionToRelease = null;
            this.mVideoEncoder = null;
            this.mVideoOutputConfig = null;
            setLatestSurface(null);
            return;
        }
        safeToCloseVideoEncoder();
    }

    /* high-level source view WARN: Can't fix incorrect switch cases order, some code will duplicate */
    private void onResetVideo() {
        boolean z;
        SurfaceRequest surfaceRequest;
        synchronized (this.mLock) {
            switch (AnonymousClass8.$SwitchMap$androidx$camera$video$Recorder$State[this.mState.ordinal()]) {
                case 1:
                case 2:
                case 8:
                    z = isPersistentRecordingInProgress() ? false : true;
                    setState(State.CONFIGURING);
                    break;
                case 3:
                case 4:
                    updateNonPendingState(State.CONFIGURING);
                    break;
                case 5:
                case 6:
                case 9:
                    setState(State.CONFIGURING);
                    break;
                case 7:
                default:
                    break;
            }
        }
        this.mNeedsResetBeforeNextStart = false;
        if (!z || (surfaceRequest = this.mLatestSurfaceRequest) == null || surfaceRequest.isServiced()) {
            return;
        }
        configureInternal(this.mLatestSurfaceRequest, this.mVideoSourceTimebase);
    }

    private void resetVideo() {
        if (this.mVideoEncoder != null) {
            Logger.d(TAG, "Releasing video encoder.");
            tryReleaseVideoEncoder();
        }
        onResetVideo();
    }

    private int internalAudioStateToAudioStatsState(AudioState audioState) {
        int i = AnonymousClass8.$SwitchMap$androidx$camera$video$Recorder$AudioState[audioState.ordinal()];
        if (i == 1) {
            return 3;
        }
        if (i == 2) {
            return 4;
        }
        if (i != 3) {
            if (i == 4 || i == 6) {
                return 1;
            }
            throw new AssertionError("Invalid internal audio state: " + audioState);
        }
        RecordingRecord recordingRecord = this.mInProgressRecording;
        if (recordingRecord == null || !recordingRecord.isMuted()) {
            return this.mIsAudioSourceSilenced ? 2 : 0;
        }
        return 5;
    }

    private StreamInfo.StreamState internalStateToStreamState(State state) {
        return (state == State.RECORDING || (state == State.STOPPING && ((DeactivateEncoderSurfaceBeforeStopEncoderQuirk) DeviceQuirks.get(DeactivateEncoderSurfaceBeforeStopEncoderQuirk.class)) == null)) ? StreamInfo.StreamState.ACTIVE : StreamInfo.StreamState.INACTIVE;
    }

    boolean isAudioEnabled() {
        return this.mAudioState == AudioState.ENABLED;
    }

    void finalizeInProgressRecording(int i, Throwable th) {
        VideoRecordEvent.Finalize finalizeFinalizeWithError;
        if (this.mInProgressRecording == null) {
            throw new AssertionError("Attempted to finalize in-progress recording, but no recording is in progress.");
        }
        MediaMuxer mediaMuxer = this.mMediaMuxer;
        if (mediaMuxer != null) {
            try {
                mediaMuxer.stop();
                this.mMediaMuxer.release();
            } catch (IllegalStateException e) {
                Logger.e(TAG, "MediaMuxer failed to stop or release with error: " + e.getMessage());
                if (i == 0) {
                    i = 1;
                }
            }
            this.mMediaMuxer = null;
        } else if (i == 0) {
            i = 8;
        }
        this.mInProgressRecording.finalizeRecording(this.mOutputUri);
        OutputOptions outputOptions = this.mInProgressRecording.getOutputOptions();
        RecordingStats inProgressRecordingStats = getInProgressRecordingStats();
        OutputResults outputResultsOf = OutputResults.of(this.mOutputUri);
        RecordingRecord recordingRecord = this.mInProgressRecording;
        if (i == 0) {
            finalizeFinalizeWithError = VideoRecordEvent.finalize(outputOptions, inProgressRecordingStats, outputResultsOf);
        } else {
            finalizeFinalizeWithError = VideoRecordEvent.finalizeWithError(outputOptions, inProgressRecordingStats, outputResultsOf, i, th);
        }
        recordingRecord.updateVideoRecordEvent(finalizeFinalizeWithError);
        RecordingRecord recordingRecord2 = this.mInProgressRecording;
        this.mInProgressRecording = null;
        this.mInProgressRecordingStopping = false;
        this.mAudioTrackIndex = null;
        this.mVideoTrackIndex = null;
        this.mEncodingFutures.clear();
        this.mOutputUri = Uri.EMPTY;
        this.mRecordingBytes = 0L;
        this.mRecordingDurationNs = 0L;
        this.mFirstRecordingVideoDataTimeUs = Long.MAX_VALUE;
        this.mFirstRecordingAudioDataTimeUs = Long.MAX_VALUE;
        this.mPreviousRecordingVideoDataTimeUs = Long.MAX_VALUE;
        this.mPreviousRecordingAudioDataTimeUs = Long.MAX_VALUE;
        this.mRecordingStopError = 1;
        this.mRecordingStopErrorCause = null;
        this.mAudioErrorCause = null;
        this.mAudioAmplitude = AudioStats.AUDIO_AMPLITUDE_NONE;
        clearPendingAudioRingBuffer();
        setInProgressTransformationInfo(null);
        int i2 = AnonymousClass8.$SwitchMap$androidx$camera$video$Recorder$AudioState[this.mAudioState.ordinal()];
        if (i2 == 1 || i2 == 2) {
            setAudioState(AudioState.INITIALIZING);
        } else if (i2 == 3 || i2 == 4) {
            setAudioState(AudioState.IDLING);
            this.mAudioSource.stop();
        } else if (i2 == 5) {
            throw new AssertionError("Incorrectly finalize recording when audio state is IDLING");
        }
        onRecordingFinalized(recordingRecord2);
    }

    /* high-level source view WARN: Failed to find 'out' block for switch in B:9:0x001c. Please report as an issue. */
    /* high-level source view WARN: Multi-variable type inference failed */
    /* high-level source view WARN: Removed duplicated region for block: B:17:0x0032 A[Catch: all -> 0x00e0, TryCatch #0 {, blocks: (B:4:0x0005, B:6:0x0009, B:9:0x001c, B:42:0x009a, B:15:0x002c, B:17:0x0032, B:18:0x0042, B:20:0x0046, B:22:0x004c, B:26:0x0054, B:27:0x005e, B:29:0x0062, B:31:0x0074, B:33:0x0078, B:35:0x007e, B:39:0x0086, B:40:0x0090, B:56:0x00c3, B:57:0x00d7, B:58:0x00d8, B:59:0x00df), top: B:63:0x0005 }] */
    /* high-level source view WARN: Removed duplicated region for block: B:18:0x0042 A[Catch: all -> 0x00e0, TryCatch #0 {, blocks: (B:4:0x0005, B:6:0x0009, B:9:0x001c, B:42:0x009a, B:15:0x002c, B:17:0x0032, B:18:0x0042, B:20:0x0046, B:22:0x004c, B:26:0x0054, B:27:0x005e, B:29:0x0062, B:31:0x0074, B:33:0x0078, B:35:0x007e, B:39:0x0086, B:40:0x0090, B:56:0x00c3, B:57:0x00d7, B:58:0x00d8, B:59:0x00df), top: B:63:0x0005 }] */
    /* high-level source view WARN: Type inference failed for: r0v10 */
    /* high-level source view WARN: Type inference failed for: r0v16 */
    /* high-level source view WARN: Type inference failed for: r0v17, types: [androidx.camera.video.Recorder$RecordingRecord] */
    /* high-level source view WARN: Type inference failed for: r0v21 */
    /* high-level source view WARN: Type inference failed for: r0v22 */
    /* high-level source view WARN: Type inference failed for: r7v0, types: [androidx.camera.video.Recorder] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    private void onRecordingFinalized(RecordingRecord recordingRecord) {
        RecordingRecord recordingRecordMakePendingRecordingActiveLocked;
        boolean z;
        Exception exc;
        boolean z2;
        int i;
        boolean z3;
        boolean z4;
        ?? r0;
        synchronized (this.mLock) {
            if (this.mActiveRecordingRecord != recordingRecord) {
                throw new AssertionError("Active recording did not match finalized recording on finalize.");
            }
            recordingRecordMakePendingRecordingActiveLocked = null;
            this.mActiveRecordingRecord = null;
            int i2 = AnonymousClass8.$SwitchMap$androidx$camera$video$Recorder$State[this.mState.ordinal()];
            if (i2 != 9) {
                boolean z5 = true;
                z = false;
                switch (i2) {
                    case 1:
                    case 2:
                    case 6:
                        if (this.mEncoderNotUsePersistentInputSurface) {
                            this.mActiveSurface = null;
                            SurfaceRequest surfaceRequest = this.mLatestSurfaceRequest;
                            if (surfaceRequest == null || surfaceRequest.isServiced()) {
                                z5 = false;
                            }
                            setState(State.CONFIGURING);
                            exc = null;
                            z2 = z5;
                            i = 0;
                            z3 = false;
                            r0 = exc;
                        } else {
                            setState(State.IDLING);
                            r0 = 0;
                            exc = null;
                            z2 = false;
                            i = 0;
                            z3 = false;
                        }
                        break;
                    case 3:
                        z4 = true;
                        if (this.mSourceState != VideoOutput.SourceState.INACTIVE) {
                            RecordingRecord recordingRecord2 = this.mPendingRecordingRecord;
                            this.mPendingRecordingRecord = null;
                            setState(State.CONFIGURING);
                            exc = PENDING_RECORDING_ERROR_CAUSE_SOURCE_INACTIVE;
                            i = 4;
                            z3 = z4;
                            z2 = false;
                            r0 = recordingRecord2;
                        } else {
                            if (this.mEncoderNotUsePersistentInputSurface) {
                                this.mActiveSurface = null;
                                SurfaceRequest surfaceRequest2 = this.mLatestSurfaceRequest;
                                if (surfaceRequest2 == null || surfaceRequest2.isServiced()) {
                                    z5 = false;
                                }
                                updateNonPendingState(State.CONFIGURING);
                                exc = null;
                                z3 = z4;
                                i = 0;
                                z2 = z5;
                            } else if (this.mVideoEncoder == null) {
                                r0 = 0;
                                exc = null;
                                z3 = z4;
                                z2 = false;
                                i = 0;
                            } else {
                                exc = null;
                                z3 = z4;
                                z2 = false;
                                i = 0;
                                recordingRecordMakePendingRecordingActiveLocked = makePendingRecordingActiveLocked(this.mState);
                            }
                            r0 = exc;
                        }
                        break;
                    case 4:
                        z4 = false;
                        if (this.mSourceState != VideoOutput.SourceState.INACTIVE) {
                        }
                        break;
                    case 5:
                        exc = null;
                        z2 = false;
                        i = 0;
                        z3 = false;
                        z = true;
                        r0 = exc;
                        break;
                    default:
                        r0 = 0;
                        exc = null;
                        z2 = false;
                        i = 0;
                        z3 = false;
                        break;
                }
            } else {
                throw new AssertionError("Unexpected state on finalize of recording: " + this.mState);
            }
        }
        if (z2) {
            configureInternal(this.mLatestSurfaceRequest, this.mVideoSourceTimebase);
            return;
        }
        if (z) {
            reset();
            return;
        }
        if (recordingRecordMakePendingRecordingActiveLocked != null) {
            if (this.mEncoderNotUsePersistentInputSurface) {
                throw new AssertionError("Attempt to start a pending recording while the Recorder is waiting for a new surface request.");
            }
            startRecording(recordingRecordMakePendingRecordingActiveLocked, z3);
        } else if (r0 != 0) {
            finalizePendingRecording(r0, i, exc);
        }
    }

    void onInProgressRecordingInternalError(RecordingRecord recordingRecord, int i, Throwable th) {
        boolean z;
        if (recordingRecord != this.mInProgressRecording) {
            throw new AssertionError("Internal error occurred on recording that is not the current in-progress recording.");
        }
        synchronized (this.mLock) {
            z = false;
            switch (AnonymousClass8.$SwitchMap$androidx$camera$video$Recorder$State[this.mState.ordinal()]) {
                case 1:
                case 2:
                    setState(State.STOPPING);
                    z = true;
                case 3:
                case 4:
                case 5:
                case 6:
                    if (recordingRecord != this.mActiveRecordingRecord) {
                        throw new AssertionError("Internal error occurred for recording but it is not the active recording.");
                    }
                    break;
                    break;
                case 7:
                case 8:
                case 9:
                    throw new AssertionError("In-progress recording error occurred while in unexpected state: " + this.mState);
            }
        }
        if (z) {
            m198lambda$stop$5$androidxcameravideoRecorder(recordingRecord, -1L, i, th);
        }
    }

    /* high-level source view WARN: Multi-variable type inference failed */
    /* high-level source view WARN: Type inference failed for: r2v11, types: [androidx.camera.video.Recorder$RecordingRecord] */
    /* high-level source view WARN: Type inference failed for: r2v12 */
    /* high-level source view WARN: Type inference failed for: r2v13 */
    /* high-level source view WARN: Type inference failed for: r2v4 */
    /* high-level source view WARN: Type inference failed for: r8v0, types: [androidx.camera.video.Recorder] */
    void tryServicePendingRecording() {
        int i;
        boolean z;
        RecordingRecord recordingRecordMakePendingRecordingActiveLocked;
        boolean z2;
        ?? r2;
        Exception exc;
        synchronized (this.mLock) {
            int i2 = AnonymousClass8.$SwitchMap$androidx$camera$video$Recorder$State[this.mState.ordinal()];
            i = 4;
            z = false;
            recordingRecordMakePendingRecordingActiveLocked = null;
            if (i2 == 3) {
                z2 = true;
            } else if (i2 != 4) {
                i = 0;
                exc = null;
                r2 = exc;
            } else {
                z2 = false;
            }
            if (this.mActiveRecordingRecord != null || this.mNeedsResetBeforeNextStart) {
                i = 0;
                r2 = 0;
                z = z2;
                exc = null;
            } else if (this.mSourceState == VideoOutput.SourceState.INACTIVE) {
                RecordingRecord recordingRecord = this.mPendingRecordingRecord;
                this.mPendingRecordingRecord = null;
                restoreNonPendingState();
                z = z2;
                exc = PENDING_RECORDING_ERROR_CAUSE_SOURCE_INACTIVE;
                r2 = recordingRecord;
            } else {
                if (this.mVideoEncoder != null) {
                    i = 0;
                    z = z2;
                    exc = null;
                    recordingRecordMakePendingRecordingActiveLocked = makePendingRecordingActiveLocked(this.mState);
                    r2 = exc;
                }
                i = 0;
                r2 = 0;
                z = z2;
                exc = null;
            }
        }
        if (recordingRecordMakePendingRecordingActiveLocked != null) {
            startRecording(recordingRecordMakePendingRecordingActiveLocked, z);
        } else if (r2 != 0) {
            finalizePendingRecording(r2, i, exc);
        }
    }

    private RecordingRecord makePendingRecordingActiveLocked(State state) {
        boolean z;
        if (state == State.PENDING_PAUSED) {
            z = true;
        } else {
            if (state != State.PENDING_RECORDING) {
                throw new AssertionError("makePendingRecordingActiveLocked() can only be called from a pending state.");
            }
            z = false;
        }
        if (this.mActiveRecordingRecord != null) {
            throw new AssertionError("Cannot make pending recording active because another recording is already active.");
        }
        RecordingRecord recordingRecord = this.mPendingRecordingRecord;
        if (recordingRecord == null) {
            throw new AssertionError("Pending recording should exist when in a PENDING state.");
        }
        this.mActiveRecordingRecord = recordingRecord;
        this.mPendingRecordingRecord = null;
        if (z) {
            setState(State.PAUSED);
        } else {
            setState(State.RECORDING);
        }
        return recordingRecord;
    }

    private void startRecording(RecordingRecord recordingRecord, boolean z) {
        startInternal(recordingRecord);
        if (z) {
            m193lambda$pause$3$androidxcameravideoRecorder(recordingRecord);
        }
    }

    void updateInProgressStatusEvent() {
        RecordingRecord recordingRecord = this.mInProgressRecording;
        if (recordingRecord != null) {
            recordingRecord.updateVideoRecordEvent(VideoRecordEvent.status(recordingRecord.getOutputOptions(), getInProgressRecordingStats()));
        }
    }

    RecordingStats getInProgressRecordingStats() {
        return RecordingStats.of(this.mRecordingDurationNs, this.mRecordingBytes, AudioStats.of(internalAudioStateToAudioStatsState(this.mAudioState), this.mAudioErrorCause, this.mAudioAmplitude));
    }

    <T> T getObservableData(StateObservable<T> stateObservable) {
        try {
            return stateObservable.fetchData().get();
        } catch (InterruptedException | ExecutionException e) {
            throw new IllegalStateException(e);
        }
    }

    boolean isAudioSupported() {
        return ((MediaSpec) getObservableData(this.mMediaSpec)).getAudioSpec().getChannelCount() != 0;
    }

    void setState(State state) {
        if (this.mState == state) {
            throw new AssertionError("Attempted to transition to state " + state + ", but Recorder is already in state " + state);
        }
        Logger.d(TAG, "Transitioning Recorder internal state: " + this.mState + " --> " + state);
        Set<State> set = PENDING_STATES;
        StreamInfo.StreamState streamStateInternalStateToStreamState = null;
        if (set.contains(state)) {
            if (!set.contains(this.mState)) {
                if (!VALID_NON_PENDING_STATES_WHILE_PENDING.contains(this.mState)) {
                    throw new AssertionError("Invalid state transition. Should not be transitioning to a PENDING state from state " + this.mState);
                }
                State state2 = this.mState;
                this.mNonPendingState = state2;
                streamStateInternalStateToStreamState = internalStateToStreamState(state2);
            }
        } else if (this.mNonPendingState != null) {
            this.mNonPendingState = null;
        }
        this.mState = state;
        if (streamStateInternalStateToStreamState == null) {
            streamStateInternalStateToStreamState = internalStateToStreamState(state);
        }
        this.mStreamInfo.setState(StreamInfo.of(this.mStreamId, streamStateInternalStateToStreamState, this.mInProgressTransformationInfo));
    }

    void setLatestSurface(Surface surface) {
        int iHashCode;
        if (this.mLatestSurface == surface) {
            return;
        }
        this.mLatestSurface = surface;
        synchronized (this.mLock) {
            if (surface != null) {
                try {
                    iHashCode = surface.hashCode();
                } catch (Throwable th) {
                    throw th;
                }
            } else {
                iHashCode = 0;
            }
            setStreamId(iHashCode);
        }
    }

    private void setStreamId(int i) {
        if (this.mStreamId == i) {
            return;
        }
        Logger.d(TAG, "Transitioning streamId: " + this.mStreamId + " --> " + i);
        this.mStreamId = i;
        this.mStreamInfo.setState(StreamInfo.of(i, internalStateToStreamState(this.mState), this.mInProgressTransformationInfo));
    }

    void setInProgressTransformationInfo(SurfaceRequest.TransformationInfo transformationInfo) {
        Logger.d(TAG, "Update stream transformation info: " + transformationInfo);
        this.mInProgressTransformationInfo = transformationInfo;
        synchronized (this.mLock) {
            this.mStreamInfo.setState(StreamInfo.of(this.mStreamId, internalStateToStreamState(this.mState), transformationInfo));
        }
    }

    private void updateNonPendingState(State state) {
        if (!PENDING_STATES.contains(this.mState)) {
            throw new AssertionError("Can only updated non-pending state from a pending state, but state is " + this.mState);
        }
        if (!VALID_NON_PENDING_STATES_WHILE_PENDING.contains(state)) {
            throw new AssertionError("Invalid state transition. State is not a valid non-pending state while in a pending state: " + state);
        }
        if (this.mNonPendingState != state) {
            this.mNonPendingState = state;
            this.mStreamInfo.setState(StreamInfo.of(this.mStreamId, internalStateToStreamState(state), this.mInProgressTransformationInfo));
        }
    }

    private void restoreNonPendingState() {
        if (!PENDING_STATES.contains(this.mState)) {
            throw new AssertionError("Cannot restore non-pending state when in state " + this.mState);
        }
        setState(this.mNonPendingState);
    }

    void setAudioState(AudioState audioState) {
        Logger.d(TAG, "Transitioning audio state: " + this.mAudioState + " --> " + audioState);
        this.mAudioState = audioState;
    }

    private static int supportedMuxerFormatOrDefaultFrom(VideoValidatedEncoderProfilesProxy videoValidatedEncoderProfilesProxy, int i) {
        if (videoValidatedEncoderProfilesProxy != null) {
            int recommendedFileFormat = videoValidatedEncoderProfilesProxy.getRecommendedFileFormat();
            if (recommendedFileFormat == 1) {
                return Build.VERSION.SDK_INT < 26 ? 0 : 2;
            }
            if (recommendedFileFormat == 2) {
                return 0;
            }
            if (recommendedFileFormat == 9) {
                return 1;
            }
        }
        return i;
    }

    public static VideoCapabilities getVideoCapabilities(CameraInfo cameraInfo) {
        return RecorderVideoCapabilities.from(cameraInfo);
    }

    static abstract class RecordingRecord implements AutoCloseable {
        private final CloseGuardHelper mCloseGuard = CloseGuardHelper.create();
        private final AtomicBoolean mInitialized = new AtomicBoolean(false);
        private final AtomicReference<MediaMuxerSupplier> mMediaMuxerSupplier = new AtomicReference<>(null);
        private final AtomicReference<AudioSourceSupplier> mAudioSourceSupplier = new AtomicReference<>(null);
        private final AtomicReference<Consumer<Uri>> mRecordingFinalizer = new AtomicReference<>(new Consumer() { // from class: androidx.camera.video.Recorder$RecordingRecord$$ExternalSyntheticLambda5
            @Override // androidx.core.util.Consumer
            public final void accept(Object obj) {
                Recorder.RecordingRecord.lambda$new$0((Uri) obj);
            }
        });
        private final AtomicBoolean mMuted = new AtomicBoolean(false);

        private interface AudioSourceSupplier {
            AudioSource get(AudioSettings audioSettings, Executor executor) throws AudioSourceAccessException;
        }
        interface MediaMuxerSupplier {
            MediaMuxer get(int i, Consumer<Uri> consumer) throws IOException;
        }

        static /* synthetic */ void lambda$new$0(Uri uri) {
        }

        abstract Executor getCallbackExecutor();

        abstract Consumer<VideoRecordEvent> getEventListener();

        abstract OutputOptions getOutputOptions();

        abstract long getRecordingId();

        abstract boolean hasAudioEnabled();

        abstract boolean isPersistent();

        RecordingRecord() {
        }

        static RecordingRecord from(PendingRecording pendingRecording, long j) {
            return new AutoValue_Recorder_RecordingRecord(pendingRecording.getOutputOptions(), pendingRecording.getListenerExecutor(), pendingRecording.getEventListener(), pendingRecording.isAudioEnabled(), pendingRecording.isPersistent(), j);
        }

        void initializeRecording(final Context context) throws IOException {
            if (this.mInitialized.getAndSet(true)) {
                throw new AssertionError("Recording " + this + " has already been initialized");
            }
            final OutputOptions outputOptions = getOutputOptions();
            boolean z = outputOptions instanceof FileDescriptorOutputOptions;
            Consumer<Uri> consumer = null;
            final ParcelFileDescriptor parcelFileDescriptorDup = z ? ((FileDescriptorOutputOptions) outputOptions).getParcelFileDescriptor().dup() : null;
            this.mCloseGuard.open("finalizeRecording");
            this.mMediaMuxerSupplier.set(new MediaMuxerSupplier() { // from class: androidx.camera.video.Recorder$RecordingRecord$$ExternalSyntheticLambda0
                @Override // androidx.camera.video.Recorder.RecordingRecord.MediaMuxerSupplier
                public final MediaMuxer get(int i, Consumer consumer2) {
                    return Recorder.RecordingRecord.lambda$initializeRecording$1(outputOptions, parcelFileDescriptorDup, i, consumer2);
                }
            });
            if (hasAudioEnabled()) {
                if (Build.VERSION.SDK_INT >= 31) {
                    this.mAudioSourceSupplier.set(new AudioSourceSupplier() { // from class: androidx.camera.video.Recorder.RecordingRecord.1
                        @Override // androidx.camera.video.Recorder.RecordingRecord.AudioSourceSupplier
                        public AudioSource get(AudioSettings audioSettings, Executor executor) throws AudioSourceAccessException {
                            return new AudioSource(audioSettings, executor, context);
                        }
                    });
                } else {
                    this.mAudioSourceSupplier.set(new AudioSourceSupplier() { // from class: androidx.camera.video.Recorder.RecordingRecord.2
                        @Override // androidx.camera.video.Recorder.RecordingRecord.AudioSourceSupplier
                        public AudioSource get(AudioSettings audioSettings, Executor executor) throws AudioSourceAccessException {
                            return new AudioSource(audioSettings, executor, null);
                        }
                    });
                }
            }
            if (outputOptions instanceof MediaStoreOutputOptions) {
                final MediaStoreOutputOptions mediaStoreOutputOptions = (MediaStoreOutputOptions) outputOptions;
                if (Build.VERSION.SDK_INT >= 29) {
                    consumer = new Consumer() { // from class: androidx.camera.video.Recorder$RecordingRecord$$ExternalSyntheticLambda1
                        @Override // androidx.core.util.Consumer
                        public final void accept(Object obj) {
                            Recorder.RecordingRecord.lambda$initializeRecording$2(mediaStoreOutputOptions, (Uri) obj);
                        }
                    };
                } else {
                    consumer = new Consumer() { // from class: androidx.camera.video.Recorder$RecordingRecord$$ExternalSyntheticLambda2
                        @Override // androidx.core.util.Consumer
                        public final void accept(Object obj) throws Throwable {
                            Recorder.RecordingRecord.lambda$initializeRecording$4(mediaStoreOutputOptions, context, (Uri) obj);
                        }
                    };
                }
            } else if (z) {
                consumer = new Consumer() { // from class: androidx.camera.video.Recorder$RecordingRecord$$ExternalSyntheticLambda3
                    @Override // androidx.core.util.Consumer
                    public final void accept(Object obj) {
                        Recorder.RecordingRecord.lambda$initializeRecording$5(parcelFileDescriptorDup, (Uri) obj);
                    }
                };
            }
            if (consumer != null) {
                this.mRecordingFinalizer.set(consumer);
            }
        }

        static /* synthetic */ MediaMuxer lambda$initializeRecording$1(OutputOptions outputOptions, ParcelFileDescriptor parcelFileDescriptor, int i, Consumer consumer) throws Throwable {
            MediaMuxer mediaMuxerCreateMediaMuxer;
            Uri uriInsert = Uri.EMPTY;
            if (outputOptions instanceof FileOutputOptions) {
                File file = ((FileOutputOptions) outputOptions).getFile();
                if (!OutputUtil.createParentFolder(file)) {
                    Logger.w(Recorder.TAG, "Failed to create folder for " + file.getAbsolutePath());
                }
                mediaMuxerCreateMediaMuxer = new MediaMuxer(file.getAbsolutePath(), i);
                uriInsert = Uri.fromFile(file);
            } else if (outputOptions instanceof FileDescriptorOutputOptions) {
                if (Build.VERSION.SDK_INT >= 26) {
                    mediaMuxerCreateMediaMuxer = Api26Impl.createMediaMuxer(parcelFileDescriptor.getFileDescriptor(), i);
                } else {
                    throw new IOException("MediaMuxer doesn't accept FileDescriptor as output destination.");
                }
            } else if (outputOptions instanceof MediaStoreOutputOptions) {
                MediaStoreOutputOptions mediaStoreOutputOptions = (MediaStoreOutputOptions) outputOptions;
                ContentValues contentValues = new ContentValues(mediaStoreOutputOptions.getContentValues());
                if (Build.VERSION.SDK_INT >= 29) {
                    contentValues.put("is_pending", (Integer) 1);
                }
                try {
                    uriInsert = mediaStoreOutputOptions.getContentResolver().insert(mediaStoreOutputOptions.getCollectionUri(), contentValues);
                    if (uriInsert == null) {
                        throw new IOException("Unable to create MediaStore entry.");
                    }
                    if (Build.VERSION.SDK_INT < 26) {
                        String absolutePathFromUri = OutputUtil.getAbsolutePathFromUri(mediaStoreOutputOptions.getContentResolver(), uriInsert, Recorder.MEDIA_COLUMN);
                        if (absolutePathFromUri == null) {
                            throw new IOException("Unable to get path from uri " + uriInsert);
                        }
                        if (!OutputUtil.createParentFolder(new File(absolutePathFromUri))) {
                            Logger.w(Recorder.TAG, "Failed to create folder for " + absolutePathFromUri);
                        }
                        mediaMuxerCreateMediaMuxer = new MediaMuxer(absolutePathFromUri, i);
                    } else {
                        ParcelFileDescriptor parcelFileDescriptorOpenFileDescriptor = mediaStoreOutputOptions.getContentResolver().openFileDescriptor(uriInsert, "rw");
                        mediaMuxerCreateMediaMuxer = Api26Impl.createMediaMuxer(parcelFileDescriptorOpenFileDescriptor.getFileDescriptor(), i);
                        parcelFileDescriptorOpenFileDescriptor.close();
                    }
                } catch (RuntimeException e) {
                    throw new IOException("Unable to create MediaStore entry by " + e, e);
                }
            } else {
                throw new AssertionError("Invalid output options type: " + outputOptions.getClass().getSimpleName());
            }
            consumer.accept(uriInsert);
            return mediaMuxerCreateMediaMuxer;
        }

        static /* synthetic */ void lambda$initializeRecording$2(MediaStoreOutputOptions mediaStoreOutputOptions, Uri uri) {
            if (uri.equals(Uri.EMPTY)) {
                return;
            }
            ContentValues contentValues = new ContentValues();
            contentValues.put("is_pending", (Integer) 0);
            mediaStoreOutputOptions.getContentResolver().update(uri, contentValues, null, null);
        }

        static /* synthetic */ void lambda$initializeRecording$4(MediaStoreOutputOptions mediaStoreOutputOptions, Context context, Uri uri) throws Throwable {
            if (uri.equals(Uri.EMPTY)) {
                return;
            }
            String absolutePathFromUri = OutputUtil.getAbsolutePathFromUri(mediaStoreOutputOptions.getContentResolver(), uri, Recorder.MEDIA_COLUMN);
            if (absolutePathFromUri != null) {
                MediaScannerConnection.scanFile(context, new String[]{absolutePathFromUri}, null, new MediaScannerConnection.OnScanCompletedListener() { // from class: androidx.camera.video.Recorder$RecordingRecord$$ExternalSyntheticLambda4
                    @Override // android.media.MediaScannerConnection.OnScanCompletedListener
                    public final void onScanCompleted(String str, Uri uri2) {
                        Recorder.RecordingRecord.lambda$initializeRecording$3(str, uri2);
                    }
                });
            } else {
                Logger.d(Recorder.TAG, "Skipping media scanner scan. Unable to retrieve file path from URI: " + uri);
            }
        }

        static /* synthetic */ void lambda$initializeRecording$3(String str, Uri uri) {
            if (uri == null) {
                Logger.e(Recorder.TAG, String.format("File scanning operation failed [path: %s]", str));
            } else {
                Logger.d(Recorder.TAG, String.format("File scan completed successfully [path: %s, URI: %s]", str, uri));
            }
        }

        static /* synthetic */ void lambda$initializeRecording$5(ParcelFileDescriptor parcelFileDescriptor, Uri uri) {
            try {
                parcelFileDescriptor.close();
            } catch (IOException e) {
                Logger.e(Recorder.TAG, "Failed to close dup'd ParcelFileDescriptor", e);
            }
        }

        void updateVideoRecordEvent(final VideoRecordEvent videoRecordEvent) {
            if (!Objects.equals(videoRecordEvent.getOutputOptions(), getOutputOptions())) {
                throw new AssertionError("Attempted to update event listener with event from incorrect recording [Recording: " + videoRecordEvent.getOutputOptions() + ", Expected: " + getOutputOptions() + "]");
            }
            String str = "Sending VideoRecordEvent " + videoRecordEvent.getClass().getSimpleName();
            if (videoRecordEvent instanceof VideoRecordEvent.Finalize) {
                VideoRecordEvent.Finalize finalize = (VideoRecordEvent.Finalize) videoRecordEvent;
                if (finalize.hasError()) {
                    str = str + String.format(" [error: %s]", VideoRecordEvent.Finalize.errorToString(finalize.getError()));
                }
            }
            Logger.d(Recorder.TAG, str);
            if (getCallbackExecutor() == null || getEventListener() == null) {
                return;
            }
            try {
                getCallbackExecutor().execute(new Runnable() { // from class: androidx.camera.video.Recorder$RecordingRecord$$ExternalSyntheticLambda6
                    @Override // java.lang.Runnable
                    public final void run() {
                        this.f$0.m203x1386b2b0(videoRecordEvent);
                    }
                });
            } catch (RejectedExecutionException e) {
                Logger.e(Recorder.TAG, "The callback executor is invalid.", e);
            }
        }
        /* synthetic */ void m203x1386b2b0(VideoRecordEvent videoRecordEvent) {
            getEventListener().accept(videoRecordEvent);
        }

        AudioSource performOneTimeAudioSourceCreation(AudioSettings audioSettings, Executor executor) throws AudioSourceAccessException {
            if (!hasAudioEnabled()) {
                throw new AssertionError("Recording does not have audio enabled. Unable to create audio source for recording " + this);
            }
            AudioSourceSupplier andSet = this.mAudioSourceSupplier.getAndSet(null);
            if (andSet == null) {
                throw new AssertionError("One-time audio source creation has already occurred for recording " + this);
            }
            return andSet.get(audioSettings, executor);
        }

        MediaMuxer performOneTimeMediaMuxerCreation(int i, Consumer<Uri> consumer) throws IOException {
            if (!this.mInitialized.get()) {
                throw new AssertionError("Recording " + this + " has not been initialized");
            }
            MediaMuxerSupplier andSet = this.mMediaMuxerSupplier.getAndSet(null);
            if (andSet == null) {
                throw new AssertionError("One-time media muxer creation has already occurred for recording " + this);
            }
            try {
                return andSet.get(i, consumer);
            } catch (RuntimeException e) {
                throw new IOException("Failed to create MediaMuxer by " + e, e);
            }
        }

        void finalizeRecording(Uri uri) {
            if (this.mInitialized.get()) {
                finalizeRecordingInternal(this.mRecordingFinalizer.getAndSet(null), uri);
            }
        }

        void mute(boolean z) {
            this.mMuted.set(z);
        }

        boolean isMuted() {
            return this.mMuted.get();
        }

        @Override // java.lang.AutoCloseable
        public void close() {
            finalizeRecording(Uri.EMPTY);
        }

        protected void finalize() throws Throwable {
            try {
                this.mCloseGuard.warnIfOpen();
                Consumer<Uri> andSet = this.mRecordingFinalizer.getAndSet(null);
                if (andSet != null) {
                    finalizeRecordingInternal(andSet, Uri.EMPTY);
                }
            } finally {
                super.finalize();
            }
        }

        private void finalizeRecordingInternal(Consumer<Uri> consumer, Uri uri) {
            if (consumer == null) {
                throw new AssertionError("Recording " + this + " has already been finalized");
            }
            this.mCloseGuard.close();
            consumer.accept(uri);
        }
    }

    public static final class Builder {
        private Executor mExecutor = null;
        private EncoderFactory mVideoEncoderFactory = Recorder.DEFAULT_ENCODER_FACTORY;
        private EncoderFactory mAudioEncoderFactory = Recorder.DEFAULT_ENCODER_FACTORY;
        private final MediaSpec.Builder mMediaSpecBuilder = MediaSpec.builder();

        public Builder setExecutor(Executor executor) {
            Preconditions.checkNotNull(executor, "The specified executor can't be null.");
            this.mExecutor = executor;
            return this;
        }

        public Builder setQualitySelector(final QualitySelector qualitySelector) {
            Preconditions.checkNotNull(qualitySelector, "The specified quality selector can't be null.");
            this.mMediaSpecBuilder.configureVideo(new Consumer() { // from class: androidx.camera.video.Recorder$Builder$$ExternalSyntheticLambda3
                @Override // androidx.core.util.Consumer
                public final void accept(Object obj) {
                    ((VideoSpec.Builder) obj).setQualitySelector(qualitySelector);
                }
            });
            return this;
        }

        public Builder setTargetVideoEncodingBitRate(final int i) {
            if (i <= 0) {
                throw new IllegalArgumentException("The requested target bitrate " + i + " is not supported. Target bitrate must be greater than 0.");
            }
            this.mMediaSpecBuilder.configureVideo(new Consumer() { // from class: androidx.camera.video.Recorder$Builder$$ExternalSyntheticLambda0
                @Override // androidx.core.util.Consumer
                public final void accept(Object obj) {
                    int i2 = i;
                    ((VideoSpec.Builder) obj).setBitrate(new Range<>(Integer.valueOf(i2), Integer.valueOf(i2)));
                }
            });
            return this;
        }

        public Builder setAspectRatio(final int i) {
            this.mMediaSpecBuilder.configureVideo(new Consumer() { // from class: androidx.camera.video.Recorder$Builder$$ExternalSyntheticLambda2
                @Override // androidx.core.util.Consumer
                public final void accept(Object obj) {
                    ((VideoSpec.Builder) obj).setAspectRatio(i);
                }
            });
            return this;
        }

        Builder setAudioSource(final int i) {
            this.mMediaSpecBuilder.configureAudio(new Consumer() { // from class: androidx.camera.video.Recorder$Builder$$ExternalSyntheticLambda1
                @Override // androidx.core.util.Consumer
                public final void accept(Object obj) {
                    ((AudioSpec.Builder) obj).setSource(i);
                }
            });
            return this;
        }

        Builder setVideoEncoderFactory(EncoderFactory encoderFactory) {
            this.mVideoEncoderFactory = encoderFactory;
            return this;
        }

        Builder setAudioEncoderFactory(EncoderFactory encoderFactory) {
            this.mAudioEncoderFactory = encoderFactory;
            return this;
        }

        public Recorder build() {
            return new Recorder(this.mExecutor, this.mMediaSpecBuilder.build(), this.mVideoEncoderFactory, this.mAudioEncoderFactory);
        }
    }
}


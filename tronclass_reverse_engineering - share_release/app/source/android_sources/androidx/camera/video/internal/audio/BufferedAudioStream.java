package androidx.camera.video.internal.audio;

import androidx.camera.core.Logger;
import androidx.camera.core.impl.utils.executor.CameraXExecutors;
import androidx.camera.video.internal.audio.AudioStream;
import androidx.core.util.Preconditions;
import java.nio.ByteBuffer;
import java.util.Queue;
import java.util.concurrent.ConcurrentLinkedQueue;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Executor;
import java.util.concurrent.FutureTask;
import java.util.concurrent.atomic.AtomicBoolean;
public class BufferedAudioStream implements AudioStream {
    private static final int DATA_WAITING_TIME_MILLIS = 1;
    private static final int DEFAULT_BUFFER_SIZE_IN_FRAME = 1024;
    private static final int DEFAULT_QUEUE_SIZE = 500;
    private static final String TAG = "BufferedAudioStream";
    private final AudioStream mAudioStream;
    private int mBufferSize;
    private final int mBytesPerFrame;
    private final int mQueueMaxSize;
    private final int mSampleRate;
    private final AtomicBoolean mIsStarted = new AtomicBoolean(false);
    private final AtomicBoolean mIsReleased = new AtomicBoolean(false);
    private final Queue<AudioData> mAudioDataQueue = new ConcurrentLinkedQueue();
    private final Executor mProducerExecutor = CameraXExecutors.newSequentialExecutor(CameraXExecutors.audioExecutor());
    private final Object mLock = new Object();
    private AudioData mAudioDataNotFullyRead = null;
    private final AtomicBoolean mIsCollectingAudioData = new AtomicBoolean(false);

    public BufferedAudioStream(AudioStream audioStream, AudioSettings audioSettings) {
        this.mAudioStream = audioStream;
        int bytesPerFrame = audioSettings.getBytesPerFrame();
        this.mBytesPerFrame = bytesPerFrame;
        int sampleRate = audioSettings.getSampleRate();
        this.mSampleRate = sampleRate;
        Preconditions.checkArgument(((long) bytesPerFrame) > 0, "mBytesPerFrame must be greater than 0.");
        Preconditions.checkArgument(((long) sampleRate) > 0, "mSampleRate must be greater than 0.");
        this.mQueueMaxSize = 500;
        this.mBufferSize = bytesPerFrame * 1024;
    }

    @Override // androidx.camera.video.internal.audio.AudioStream
    public void start() throws IllegalStateException, AudioStream.AudioStreamException {
        checkNotReleasedOrThrow();
        if (this.mIsStarted.getAndSet(true)) {
            return;
        }
        FutureTask futureTask = new FutureTask(new Runnable() { // from class: androidx.camera.video.internal.audio.BufferedAudioStream$$ExternalSyntheticLambda2
            @Override // java.lang.Runnable
            public final void run() {
                this.f$0.m227x4e044ff9();
            }
        }, null);
        this.mProducerExecutor.execute(futureTask);
        try {
            futureTask.get();
        } catch (InterruptedException | ExecutionException e) {
            this.mIsStarted.set(false);
            throw new AudioStream.AudioStreamException(e);
        }
    }
    /* synthetic */ void m227x4e044ff9() {
        try {
            this.mAudioStream.start();
            startCollectingAudioData();
        } catch (AudioStream.AudioStreamException e) {
            throw new RuntimeException(e);
        }
    }

    @Override // androidx.camera.video.internal.audio.AudioStream
    public void stop() throws IllegalStateException {
        checkNotReleasedOrThrow();
        if (this.mIsStarted.getAndSet(false)) {
            this.mProducerExecutor.execute(new Runnable() { // from class: androidx.camera.video.internal.audio.BufferedAudioStream$$ExternalSyntheticLambda0
                @Override // java.lang.Runnable
                public final void run() {
                    this.f$0.m228xb26ac95e();
                }
            });
        }
    }
    /* synthetic */ void m228xb26ac95e() {
        this.mIsCollectingAudioData.set(false);
        this.mAudioStream.stop();
        synchronized (this.mLock) {
            this.mAudioDataNotFullyRead = null;
            this.mAudioDataQueue.clear();
        }
    }

    @Override // androidx.camera.video.internal.audio.AudioStream
    public void release() {
        if (this.mIsReleased.getAndSet(true)) {
            return;
        }
        this.mProducerExecutor.execute(new Runnable() { // from class: androidx.camera.video.internal.audio.BufferedAudioStream$$ExternalSyntheticLambda5
            @Override // java.lang.Runnable
            public final void run() {
                this.f$0.m225x4385f432();
            }
        });
    }
    /* synthetic */ void m225x4385f432() {
        this.mIsCollectingAudioData.set(false);
        this.mAudioStream.release();
        synchronized (this.mLock) {
            this.mAudioDataNotFullyRead = null;
            this.mAudioDataQueue.clear();
        }
    }

    @Override // androidx.camera.video.internal.audio.AudioStream
    public AudioStream.PacketInfo read(ByteBuffer byteBuffer) {
        boolean z;
        checkNotReleasedOrThrow();
        checkStartedOrThrow();
        updateCollectionBufferSizeAsync(byteBuffer.remaining());
        AudioStream.PacketInfo packetInfoOf = AudioStream.PacketInfo.of(0, 0L);
        do {
            synchronized (this.mLock) {
                AudioData audioDataPoll = this.mAudioDataNotFullyRead;
                this.mAudioDataNotFullyRead = null;
                if (audioDataPoll == null) {
                    audioDataPoll = this.mAudioDataQueue.poll();
                }
                if (audioDataPoll != null) {
                    packetInfoOf = audioDataPoll.read(byteBuffer);
                    if (audioDataPoll.getRemainingBufferSizeInBytes() > 0) {
                        this.mAudioDataNotFullyRead = audioDataPoll;
                    }
                }
            }
            z = packetInfoOf.getSizeInBytes() <= 0 && this.mIsStarted.get() && !this.mIsReleased.get();
            if (z) {
                try {
                    Thread.sleep(1L);
                } catch (InterruptedException e) {
                    Logger.w(TAG, "Interruption while waiting for audio data", e);
                }
            }
        } while (z);
        return packetInfoOf;
    }

    @Override // androidx.camera.video.internal.audio.AudioStream
    public void setCallback(final AudioStream.AudioStreamCallback audioStreamCallback, final Executor executor) {
        boolean z = true;
        Preconditions.checkState(!this.mIsStarted.get(), "AudioStream can not be started when setCallback.");
        checkNotReleasedOrThrow();
        if (audioStreamCallback != null && executor == null) {
            z = false;
        }
        Preconditions.checkArgument(z, "executor can't be null with non-null callback.");
        this.mProducerExecutor.execute(new Runnable() { // from class: androidx.camera.video.internal.audio.BufferedAudioStream$$ExternalSyntheticLambda1
            @Override // java.lang.Runnable
            public final void run() {
                this.f$0.m226xf8dcf611(audioStreamCallback, executor);
            }
        });
    }
    /* synthetic */ void m226xf8dcf611(AudioStream.AudioStreamCallback audioStreamCallback, Executor executor) {
        this.mAudioStream.setCallback(audioStreamCallback, executor);
    }

    private void checkNotReleasedOrThrow() {
        Preconditions.checkState(!this.mIsReleased.get(), "AudioStream has been released.");
    }

    private void checkStartedOrThrow() {
        Preconditions.checkState(this.mIsStarted.get(), "AudioStream has not been started.");
    }

    private void updateCollectionBufferSizeAsync(final int i) {
        this.mProducerExecutor.execute(new Runnable() { // from class: androidx.camera.video.internal.audio.BufferedAudioStream$$ExternalSyntheticLambda4
            @Override // java.lang.Runnable
            public final void run() {
                this.f$0.m229x75a1ac03(i);
            }
        });
    }
    public void m229x75a1ac03(int i) {
        int i2 = this.mBufferSize;
        if (i2 == i) {
            return;
        }
        int i3 = this.mBytesPerFrame;
        this.mBufferSize = (i / i3) * i3;
        Logger.d(TAG, "Update buffer size from " + i2 + " to " + this.mBufferSize);
    }

    private void startCollectingAudioData() {
        if (this.mIsCollectingAudioData.getAndSet(true)) {
            return;
        }
        collectAudioData();
    }
    public void collectAudioData() {
        if (this.mIsCollectingAudioData.get()) {
            ByteBuffer byteBufferAllocateDirect = ByteBuffer.allocateDirect(this.mBufferSize);
            AudioData audioData = new AudioData(byteBufferAllocateDirect, this.mAudioStream.read(byteBufferAllocateDirect), this.mBytesPerFrame, this.mSampleRate);
            int i = this.mQueueMaxSize;
            synchronized (this.mLock) {
                this.mAudioDataQueue.offer(audioData);
                while (this.mAudioDataQueue.size() > i) {
                    this.mAudioDataQueue.poll();
                    Logger.w(TAG, "Drop audio data due to full of queue.");
                }
            }
            if (this.mIsCollectingAudioData.get()) {
                this.mProducerExecutor.execute(new Runnable() { // from class: androidx.camera.video.internal.audio.BufferedAudioStream$$ExternalSyntheticLambda3
                    @Override // java.lang.Runnable
                    public final void run() {
                        this.f$0.collectAudioData();
                    }
                });
            }
        }
    }

    private static class AudioData {
        private final ByteBuffer mByteBuffer;
        private final int mBytesPerFrame;
        private final int mSampleRate;
        private long mTimestampNs;

        AudioData(ByteBuffer byteBuffer, AudioStream.PacketInfo packetInfo, int i, int i2) {
            byteBuffer.rewind();
            int iLimit = byteBuffer.limit() - byteBuffer.position();
            if (iLimit != packetInfo.getSizeInBytes()) {
                throw new IllegalStateException("Byte buffer size is not match with packet info: " + iLimit + " != " + packetInfo.getSizeInBytes());
            }
            this.mBytesPerFrame = i;
            this.mSampleRate = i2;
            this.mByteBuffer = byteBuffer;
            this.mTimestampNs = packetInfo.getTimestampNs();
        }

        public int getRemainingBufferSizeInBytes() {
            return this.mByteBuffer.remaining();
        }

        public AudioStream.PacketInfo read(ByteBuffer byteBuffer) {
            int iRemaining;
            long j = this.mTimestampNs;
            int iPosition = this.mByteBuffer.position();
            int iPosition2 = byteBuffer.position();
            if (this.mByteBuffer.remaining() > byteBuffer.remaining()) {
                iRemaining = byteBuffer.remaining();
                this.mTimestampNs += AudioUtils.frameCountToDurationNs(AudioUtils.sizeToFrameCount(iRemaining, this.mBytesPerFrame), this.mSampleRate);
                ByteBuffer byteBufferDuplicate = this.mByteBuffer.duplicate();
                byteBufferDuplicate.position(iPosition).limit(iPosition + iRemaining);
                byteBuffer.put(byteBufferDuplicate).limit(iPosition2 + iRemaining).position(iPosition2);
            } else {
                iRemaining = this.mByteBuffer.remaining();
                byteBuffer.put(this.mByteBuffer).limit(iPosition2 + iRemaining).position(iPosition2);
            }
            this.mByteBuffer.position(iPosition + iRemaining);
            return AudioStream.PacketInfo.of(iRemaining, j);
        }
    }
}


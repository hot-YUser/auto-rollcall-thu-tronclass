.class public Landroidx/camera/video/internal/audio/BufferedAudioStream;
.super Ljava/lang/Object;
.source "BufferedAudioStream.java"

# interfaces
.implements Landroidx/camera/video/internal/audio/AudioStream;


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/video/internal/audio/BufferedAudioStream$AudioData;
    }
.end annotation


# static fields
.field private static final DATA_WAITING_TIME_MILLIS:I = 0x1

.field private static final DEFAULT_BUFFER_SIZE_IN_FRAME:I = 0x400

.field private static final DEFAULT_QUEUE_SIZE:I = 0x1f4

.field private static final TAG:Ljava/lang/String; = "BufferedAudioStream"


# instance fields
.field private mAudioDataNotFullyRead:Landroidx/camera/video/internal/audio/BufferedAudioStream$AudioData;

.field private final mAudioDataQueue:Ljava/util/Queue;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/Queue<",
            "Landroidx/camera/video/internal/audio/BufferedAudioStream$AudioData;",
            ">;"
        }
    .end annotation
.end field

.field private final mAudioStream:Landroidx/camera/video/internal/audio/AudioStream;

.field private mBufferSize:I

.field private final mBytesPerFrame:I

.field private final mIsCollectingAudioData:Ljava/util/concurrent/atomic/AtomicBoolean;

.field private final mIsReleased:Ljava/util/concurrent/atomic/AtomicBoolean;

.field private final mIsStarted:Ljava/util/concurrent/atomic/AtomicBoolean;

.field private final mLock:Ljava/lang/Object;

.field private final mProducerExecutor:Ljava/util/concurrent/Executor;

.field private final mQueueMaxSize:I

.field private final mSampleRate:I


# direct methods
.method public static synthetic $r8$lambda$zqHvpax8KCfsZm8P4td9pnVSrdg(Landroidx/camera/video/internal/audio/BufferedAudioStream;)V
    .locals 0

    invoke-direct {p0}, Landroidx/camera/video/internal/audio/BufferedAudioStream;->collectAudioData()V

    return-void
.end method

.method public constructor <init>(Landroidx/camera/video/internal/audio/AudioStream;Landroidx/camera/video/internal/audio/AudioSettings;)V
    .locals 8

    .line 84
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 62
    new-instance v0, Ljava/util/concurrent/atomic/AtomicBoolean;

    const/4 v1, 0x0

    invoke-direct {v0, v1}, Ljava/util/concurrent/atomic/AtomicBoolean;-><init>(Z)V

    iput-object v0, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mIsStarted:Ljava/util/concurrent/atomic/AtomicBoolean;

    .line 63
    new-instance v0, Ljava/util/concurrent/atomic/AtomicBoolean;

    invoke-direct {v0, v1}, Ljava/util/concurrent/atomic/AtomicBoolean;-><init>(Z)V

    iput-object v0, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mIsReleased:Ljava/util/concurrent/atomic/AtomicBoolean;

    .line 64
    new-instance v0, Ljava/util/concurrent/ConcurrentLinkedQueue;

    invoke-direct {v0}, Ljava/util/concurrent/ConcurrentLinkedQueue;-><init>()V

    iput-object v0, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mAudioDataQueue:Ljava/util/Queue;

    .line 67
    invoke-static {}, Landroidx/camera/core/impl/utils/executor/CameraXExecutors;->audioExecutor()Ljava/util/concurrent/Executor;

    move-result-object v0

    .line 66
    invoke-static {v0}, Landroidx/camera/core/impl/utils/executor/CameraXExecutors;->newSequentialExecutor(Ljava/util/concurrent/Executor;)Ljava/util/concurrent/Executor;

    move-result-object v0

    iput-object v0, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mProducerExecutor:Ljava/util/concurrent/Executor;

    .line 68
    new-instance v0, Ljava/lang/Object;

    invoke-direct {v0}, Ljava/lang/Object;-><init>()V

    iput-object v0, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mLock:Ljava/lang/Object;

    const/4 v0, 0x0

    .line 69
    iput-object v0, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mAudioDataNotFullyRead:Landroidx/camera/video/internal/audio/BufferedAudioStream$AudioData;

    .line 80
    new-instance v0, Ljava/util/concurrent/atomic/AtomicBoolean;

    invoke-direct {v0, v1}, Ljava/util/concurrent/atomic/AtomicBoolean;-><init>(Z)V

    iput-object v0, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mIsCollectingAudioData:Ljava/util/concurrent/atomic/AtomicBoolean;

    .line 85
    iput-object p1, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mAudioStream:Landroidx/camera/video/internal/audio/AudioStream;

    .line 86
    invoke-virtual {p2}, Landroidx/camera/video/internal/audio/AudioSettings;->getBytesPerFrame()I

    move-result p1

    iput p1, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mBytesPerFrame:I

    .line 87
    invoke-virtual {p2}, Landroidx/camera/video/internal/audio/AudioSettings;->getSampleRate()I

    move-result p2

    iput p2, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mSampleRate:I

    int-to-long v2, p1

    const-wide/16 v4, 0x0

    cmp-long v0, v2, v4

    const/4 v2, 0x1

    if-lez v0, :cond_0

    move v0, v2

    goto :goto_0

    :cond_0
    move v0, v1

    .line 89
    :goto_0
    const-string v3, "mBytesPerFrame must be greater than 0."

    invoke-static {v0, v3}, Landroidx/core/util/Preconditions;->checkArgument(ZLjava/lang/Object;)V

    int-to-long v6, p2

    cmp-long p2, v6, v4

    if-lez p2, :cond_1

    move v1, v2

    .line 90
    :cond_1
    const-string p2, "mSampleRate must be greater than 0."

    invoke-static {v1, p2}, Landroidx/core/util/Preconditions;->checkArgument(ZLjava/lang/Object;)V

    const/16 p2, 0x1f4

    .line 92
    iput p2, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mQueueMaxSize:I

    mul-int/lit16 p1, p1, 0x400

    .line 93
    iput p1, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mBufferSize:I

    return-void
.end method

.method private checkNotReleasedOrThrow()V
    .locals 2

    .line 216
    iget-object v0, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mIsReleased:Ljava/util/concurrent/atomic/AtomicBoolean;

    invoke-virtual {v0}, Ljava/util/concurrent/atomic/AtomicBoolean;->get()Z

    move-result v0

    xor-int/lit8 v0, v0, 0x1

    const-string v1, "AudioStream has been released."

    invoke-static {v0, v1}, Landroidx/core/util/Preconditions;->checkState(ZLjava/lang/String;)V

    return-void
.end method

.method private checkStartedOrThrow()V
    .locals 2

    .line 220
    iget-object v0, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mIsStarted:Ljava/util/concurrent/atomic/AtomicBoolean;

    invoke-virtual {v0}, Ljava/util/concurrent/atomic/AtomicBoolean;->get()Z

    move-result v0

    const-string v1, "AudioStream has not been started."

    invoke-static {v0, v1}, Landroidx/core/util/Preconditions;->checkState(ZLjava/lang/String;)V

    return-void
.end method

.method private collectAudioData()V
    .locals 5

    .line 252
    iget-object v0, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mIsCollectingAudioData:Ljava/util/concurrent/atomic/AtomicBoolean;

    invoke-virtual {v0}, Ljava/util/concurrent/atomic/AtomicBoolean;->get()Z

    move-result v0

    if-nez v0, :cond_0

    return-void

    .line 257
    :cond_0
    iget v0, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mBufferSize:I

    invoke-static {v0}, Ljava/nio/ByteBuffer;->allocateDirect(I)Ljava/nio/ByteBuffer;

    move-result-object v0

    .line 258
    iget-object v1, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mAudioStream:Landroidx/camera/video/internal/audio/AudioStream;

    invoke-interface {v1, v0}, Landroidx/camera/video/internal/audio/AudioStream;->read(Ljava/nio/ByteBuffer;)Landroidx/camera/video/internal/audio/AudioStream$PacketInfo;

    move-result-object v1

    .line 259
    new-instance v2, Landroidx/camera/video/internal/audio/BufferedAudioStream$AudioData;

    iget v3, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mBytesPerFrame:I

    iget v4, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mSampleRate:I

    invoke-direct {v2, v0, v1, v3, v4}, Landroidx/camera/video/internal/audio/BufferedAudioStream$AudioData;-><init>(Ljava/nio/ByteBuffer;Landroidx/camera/video/internal/audio/AudioStream$PacketInfo;II)V

    .line 262
    iget v0, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mQueueMaxSize:I

    .line 263
    iget-object v1, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mLock:Ljava/lang/Object;

    monitor-enter v1

    .line 264
    :try_start_0
    iget-object v3, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mAudioDataQueue:Ljava/util/Queue;

    invoke-interface {v3, v2}, Ljava/util/Queue;->offer(Ljava/lang/Object;)Z

    .line 267
    :goto_0
    iget-object v2, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mAudioDataQueue:Ljava/util/Queue;

    invoke-interface {v2}, Ljava/util/Queue;->size()I

    move-result v2

    if-le v2, v0, :cond_1

    .line 268
    iget-object v2, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mAudioDataQueue:Ljava/util/Queue;

    invoke-interface {v2}, Ljava/util/Queue;->poll()Ljava/lang/Object;

    .line 269
    const-string v2, "BufferedAudioStream"

    const-string v3, "Drop audio data due to full of queue."

    invoke-static {v2, v3}, Landroidx/camera/core/Logger;->w(Ljava/lang/String;Ljava/lang/String;)V

    goto :goto_0

    .line 271
    :cond_1
    monitor-exit v1
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 274
    iget-object v0, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mIsCollectingAudioData:Ljava/util/concurrent/atomic/AtomicBoolean;

    invoke-virtual {v0}, Ljava/util/concurrent/atomic/AtomicBoolean;->get()Z

    move-result v0

    if-eqz v0, :cond_2

    .line 275
    iget-object v0, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mProducerExecutor:Ljava/util/concurrent/Executor;

    new-instance v1, Landroidx/camera/video/internal/audio/BufferedAudioStream$$ExternalSyntheticLambda3;

    invoke-direct {v1, p0}, Landroidx/camera/video/internal/audio/BufferedAudioStream$$ExternalSyntheticLambda3;-><init>(Landroidx/camera/video/internal/audio/BufferedAudioStream;)V

    invoke-interface {v0, v1}, Ljava/util/concurrent/Executor;->execute(Ljava/lang/Runnable;)V

    :cond_2
    return-void

    :catchall_0
    move-exception v0

    .line 271
    :try_start_1
    monitor-exit v1
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw v0
.end method

.method private startCollectingAudioData()V
    .locals 2

    .line 243
    iget-object v0, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mIsCollectingAudioData:Ljava/util/concurrent/atomic/AtomicBoolean;

    const/4 v1, 0x1

    invoke-virtual {v0, v1}, Ljava/util/concurrent/atomic/AtomicBoolean;->getAndSet(Z)Z

    move-result v0

    if-eqz v0, :cond_0

    return-void

    .line 247
    :cond_0
    invoke-direct {p0}, Landroidx/camera/video/internal/audio/BufferedAudioStream;->collectAudioData()V

    return-void
.end method

.method private updateCollectionBufferSize(I)V
    .locals 2

    .line 229
    iget v0, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mBufferSize:I

    if-ne v0, p1, :cond_0

    return-void

    .line 235
    :cond_0
    iget v1, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mBytesPerFrame:I

    div-int/2addr p1, v1

    mul-int/2addr p1, v1

    .line 236
    iput p1, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mBufferSize:I

    .line 238
    new-instance p1, Ljava/lang/StringBuilder;

    const-string v1, "Update buffer size from "

    invoke-direct {p1, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string v0, " to "

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    iget v0, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mBufferSize:I

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    const-string v0, "BufferedAudioStream"

    invoke-static {v0, p1}, Landroidx/camera/core/Logger;->d(Ljava/lang/String;Ljava/lang/String;)V

    return-void
.end method

.method private updateCollectionBufferSizeAsync(I)V
    .locals 2

    .line 224
    iget-object v0, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mProducerExecutor:Ljava/util/concurrent/Executor;

    new-instance v1, Landroidx/camera/video/internal/audio/BufferedAudioStream$$ExternalSyntheticLambda4;

    invoke-direct {v1, p0, p1}, Landroidx/camera/video/internal/audio/BufferedAudioStream$$ExternalSyntheticLambda4;-><init>(Landroidx/camera/video/internal/audio/BufferedAudioStream;I)V

    invoke-interface {v0, v1}, Ljava/util/concurrent/Executor;->execute(Ljava/lang/Runnable;)V

    return-void
.end method


# virtual methods
.method synthetic lambda$release$2$androidx-camera-video-internal-audio-BufferedAudioStream()V
    .locals 2

    .line 148
    iget-object v0, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mIsCollectingAudioData:Ljava/util/concurrent/atomic/AtomicBoolean;

    const/4 v1, 0x0

    invoke-virtual {v0, v1}, Ljava/util/concurrent/atomic/AtomicBoolean;->set(Z)V

    .line 149
    iget-object v0, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mAudioStream:Landroidx/camera/video/internal/audio/AudioStream;

    invoke-interface {v0}, Landroidx/camera/video/internal/audio/AudioStream;->release()V

    .line 150
    iget-object v0, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mLock:Ljava/lang/Object;

    monitor-enter v0

    const/4 v1, 0x0

    .line 151
    :try_start_0
    iput-object v1, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mAudioDataNotFullyRead:Landroidx/camera/video/internal/audio/BufferedAudioStream$AudioData;

    .line 152
    iget-object v1, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mAudioDataQueue:Ljava/util/Queue;

    invoke-interface {v1}, Ljava/util/Queue;->clear()V

    .line 153
    monitor-exit v0

    return-void

    :catchall_0
    move-exception v1

    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw v1
.end method

.method synthetic lambda$setCallback$3$androidx-camera-video-internal-audio-BufferedAudioStream(Landroidx/camera/video/internal/audio/AudioStream$AudioStreamCallback;Ljava/util/concurrent/Executor;)V
    .locals 1

    .line 212
    iget-object v0, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mAudioStream:Landroidx/camera/video/internal/audio/AudioStream;

    invoke-interface {v0, p1, p2}, Landroidx/camera/video/internal/audio/AudioStream;->setCallback(Landroidx/camera/video/internal/audio/AudioStream$AudioStreamCallback;Ljava/util/concurrent/Executor;)V

    return-void
.end method

.method synthetic lambda$start$0$androidx-camera-video-internal-audio-BufferedAudioStream()V
    .locals 2

    .line 106
    :try_start_0
    iget-object v0, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mAudioStream:Landroidx/camera/video/internal/audio/AudioStream;

    invoke-interface {v0}, Landroidx/camera/video/internal/audio/AudioStream;->start()V

    .line 107
    invoke-direct {p0}, Landroidx/camera/video/internal/audio/BufferedAudioStream;->startCollectingAudioData()V
    :try_end_0
    .catch Landroidx/camera/video/internal/audio/AudioStream$AudioStreamException; {:try_start_0 .. :try_end_0} :catch_0

    return-void

    :catch_0
    move-exception v0

    .line 109
    new-instance v1, Ljava/lang/RuntimeException;

    invoke-direct {v1, v0}, Ljava/lang/RuntimeException;-><init>(Ljava/lang/Throwable;)V

    throw v1
.end method

.method synthetic lambda$stop$1$androidx-camera-video-internal-audio-BufferedAudioStream()V
    .locals 2

    .line 132
    iget-object v0, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mIsCollectingAudioData:Ljava/util/concurrent/atomic/AtomicBoolean;

    const/4 v1, 0x0

    invoke-virtual {v0, v1}, Ljava/util/concurrent/atomic/AtomicBoolean;->set(Z)V

    .line 133
    iget-object v0, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mAudioStream:Landroidx/camera/video/internal/audio/AudioStream;

    invoke-interface {v0}, Landroidx/camera/video/internal/audio/AudioStream;->stop()V

    .line 134
    iget-object v0, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mLock:Ljava/lang/Object;

    monitor-enter v0

    const/4 v1, 0x0

    .line 135
    :try_start_0
    iput-object v1, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mAudioDataNotFullyRead:Landroidx/camera/video/internal/audio/BufferedAudioStream$AudioData;

    .line 136
    iget-object v1, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mAudioDataQueue:Ljava/util/Queue;

    invoke-interface {v1}, Ljava/util/Queue;->clear()V

    .line 137
    monitor-exit v0

    return-void

    :catchall_0
    move-exception v1

    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw v1
.end method

.method synthetic lambda$updateCollectionBufferSizeAsync$4$androidx-camera-video-internal-audio-BufferedAudioStream(I)V
    .locals 0

    .line 224
    invoke-direct {p0, p1}, Landroidx/camera/video/internal/audio/BufferedAudioStream;->updateCollectionBufferSize(I)V

    return-void
.end method

.method public read(Ljava/nio/ByteBuffer;)Landroidx/camera/video/internal/audio/AudioStream$PacketInfo;
    .locals 5

    .line 161
    invoke-direct {p0}, Landroidx/camera/video/internal/audio/BufferedAudioStream;->checkNotReleasedOrThrow()V

    .line 162
    invoke-direct {p0}, Landroidx/camera/video/internal/audio/BufferedAudioStream;->checkStartedOrThrow()V

    .line 165
    invoke-virtual {p1}, Ljava/nio/ByteBuffer;->remaining()I

    move-result v0

    invoke-direct {p0, v0}, Landroidx/camera/video/internal/audio/BufferedAudioStream;->updateCollectionBufferSizeAsync(I)V

    const-wide/16 v0, 0x0

    const/4 v2, 0x0

    .line 169
    invoke-static {v2, v0, v1}, Landroidx/camera/video/internal/audio/AudioStream$PacketInfo;->of(IJ)Landroidx/camera/video/internal/audio/AudioStream$PacketInfo;

    move-result-object v0

    .line 171
    :cond_0
    iget-object v1, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mLock:Ljava/lang/Object;

    monitor-enter v1

    .line 172
    :try_start_0
    iget-object v3, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mAudioDataNotFullyRead:Landroidx/camera/video/internal/audio/BufferedAudioStream$AudioData;

    const/4 v4, 0x0

    .line 173
    iput-object v4, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mAudioDataNotFullyRead:Landroidx/camera/video/internal/audio/BufferedAudioStream$AudioData;

    if-nez v3, :cond_1

    .line 175
    iget-object v3, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mAudioDataQueue:Ljava/util/Queue;

    invoke-interface {v3}, Ljava/util/Queue;->poll()Ljava/lang/Object;

    move-result-object v3

    check-cast v3, Landroidx/camera/video/internal/audio/BufferedAudioStream$AudioData;

    :cond_1
    if-eqz v3, :cond_2

    .line 179
    invoke-virtual {v3, p1}, Landroidx/camera/video/internal/audio/BufferedAudioStream$AudioData;->read(Ljava/nio/ByteBuffer;)Landroidx/camera/video/internal/audio/AudioStream$PacketInfo;

    move-result-object v0

    .line 181
    invoke-virtual {v3}, Landroidx/camera/video/internal/audio/BufferedAudioStream$AudioData;->getRemainingBufferSizeInBytes()I

    move-result v4

    if-lez v4, :cond_2

    .line 182
    iput-object v3, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mAudioDataNotFullyRead:Landroidx/camera/video/internal/audio/BufferedAudioStream$AudioData;

    .line 185
    :cond_2
    monitor-exit v1
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 189
    invoke-virtual {v0}, Landroidx/camera/video/internal/audio/AudioStream$PacketInfo;->getSizeInBytes()I

    move-result v1

    if-gtz v1, :cond_3

    iget-object v1, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mIsStarted:Ljava/util/concurrent/atomic/AtomicBoolean;

    invoke-virtual {v1}, Ljava/util/concurrent/atomic/AtomicBoolean;->get()Z

    move-result v1

    if-eqz v1, :cond_3

    iget-object v1, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mIsReleased:Ljava/util/concurrent/atomic/AtomicBoolean;

    invoke-virtual {v1}, Ljava/util/concurrent/atomic/AtomicBoolean;->get()Z

    move-result v1

    if-nez v1, :cond_3

    const/4 v1, 0x1

    goto :goto_0

    :cond_3
    move v1, v2

    :goto_0
    if-eqz v1, :cond_4

    const-wide/16 v3, 0x1

    .line 194
    :try_start_1
    invoke-static {v3, v4}, Ljava/lang/Thread;->sleep(J)V
    :try_end_1
    .catch Ljava/lang/InterruptedException; {:try_start_1 .. :try_end_1} :catch_0

    goto :goto_1

    :catch_0
    move-exception p1

    .line 196
    const-string v1, "BufferedAudioStream"

    const-string v2, "Interruption while waiting for audio data"

    invoke-static {v1, v2, p1}, Landroidx/camera/core/Logger;->w(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    goto :goto_2

    :cond_4
    :goto_1
    if-nez v1, :cond_0

    :goto_2
    return-object v0

    :catchall_0
    move-exception p1

    .line 185
    :try_start_2
    monitor-exit v1
    :try_end_2
    .catchall {:try_start_2 .. :try_end_2} :catchall_0

    throw p1
.end method

.method public release()V
    .locals 2

    .line 143
    iget-object v0, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mIsReleased:Ljava/util/concurrent/atomic/AtomicBoolean;

    const/4 v1, 0x1

    invoke-virtual {v0, v1}, Ljava/util/concurrent/atomic/AtomicBoolean;->getAndSet(Z)Z

    move-result v0

    if-eqz v0, :cond_0

    return-void

    .line 147
    :cond_0
    iget-object v0, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mProducerExecutor:Ljava/util/concurrent/Executor;

    new-instance v1, Landroidx/camera/video/internal/audio/BufferedAudioStream$$ExternalSyntheticLambda5;

    invoke-direct {v1, p0}, Landroidx/camera/video/internal/audio/BufferedAudioStream$$ExternalSyntheticLambda5;-><init>(Landroidx/camera/video/internal/audio/BufferedAudioStream;)V

    invoke-interface {v0, v1}, Ljava/util/concurrent/Executor;->execute(Ljava/lang/Runnable;)V

    return-void
.end method

.method public setCallback(Landroidx/camera/video/internal/audio/AudioStream$AudioStreamCallback;Ljava/util/concurrent/Executor;)V
    .locals 3

    .line 207
    iget-object v0, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mIsStarted:Ljava/util/concurrent/atomic/AtomicBoolean;

    invoke-virtual {v0}, Ljava/util/concurrent/atomic/AtomicBoolean;->get()Z

    move-result v0

    const/4 v1, 0x1

    xor-int/2addr v0, v1

    const-string v2, "AudioStream can not be started when setCallback."

    invoke-static {v0, v2}, Landroidx/core/util/Preconditions;->checkState(ZLjava/lang/String;)V

    .line 208
    invoke-direct {p0}, Landroidx/camera/video/internal/audio/BufferedAudioStream;->checkNotReleasedOrThrow()V

    if-eqz p1, :cond_1

    if-eqz p2, :cond_0

    goto :goto_0

    :cond_0
    const/4 v1, 0x0

    .line 209
    :cond_1
    :goto_0
    const-string v0, "executor can\'t be null with non-null callback."

    invoke-static {v1, v0}, Landroidx/core/util/Preconditions;->checkArgument(ZLjava/lang/Object;)V

    .line 212
    iget-object v0, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mProducerExecutor:Ljava/util/concurrent/Executor;

    new-instance v1, Landroidx/camera/video/internal/audio/BufferedAudioStream$$ExternalSyntheticLambda1;

    invoke-direct {v1, p0, p1, p2}, Landroidx/camera/video/internal/audio/BufferedAudioStream$$ExternalSyntheticLambda1;-><init>(Landroidx/camera/video/internal/audio/BufferedAudioStream;Landroidx/camera/video/internal/audio/AudioStream$AudioStreamCallback;Ljava/util/concurrent/Executor;)V

    invoke-interface {v0, v1}, Ljava/util/concurrent/Executor;->execute(Ljava/lang/Runnable;)V

    return-void
.end method

.method public start()V
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Landroidx/camera/video/internal/audio/AudioStream$AudioStreamException;,
            Ljava/lang/IllegalStateException;
        }
    .end annotation

    .line 98
    invoke-direct {p0}, Landroidx/camera/video/internal/audio/BufferedAudioStream;->checkNotReleasedOrThrow()V

    .line 99
    iget-object v0, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mIsStarted:Ljava/util/concurrent/atomic/AtomicBoolean;

    const/4 v1, 0x1

    invoke-virtual {v0, v1}, Ljava/util/concurrent/atomic/AtomicBoolean;->getAndSet(Z)Z

    move-result v0

    if-eqz v0, :cond_0

    return-void

    .line 104
    :cond_0
    new-instance v0, Ljava/util/concurrent/FutureTask;

    new-instance v1, Landroidx/camera/video/internal/audio/BufferedAudioStream$$ExternalSyntheticLambda2;

    invoke-direct {v1, p0}, Landroidx/camera/video/internal/audio/BufferedAudioStream$$ExternalSyntheticLambda2;-><init>(Landroidx/camera/video/internal/audio/BufferedAudioStream;)V

    const/4 v2, 0x0

    invoke-direct {v0, v1, v2}, Ljava/util/concurrent/FutureTask;-><init>(Ljava/lang/Runnable;Ljava/lang/Object;)V

    .line 112
    iget-object v1, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mProducerExecutor:Ljava/util/concurrent/Executor;

    invoke-interface {v1, v0}, Ljava/util/concurrent/Executor;->execute(Ljava/lang/Runnable;)V

    .line 116
    :try_start_0
    invoke-interface {v0}, Ljava/util/concurrent/RunnableFuture;->get()Ljava/lang/Object;
    :try_end_0
    .catch Ljava/lang/InterruptedException; {:try_start_0 .. :try_end_0} :catch_1
    .catch Ljava/util/concurrent/ExecutionException; {:try_start_0 .. :try_end_0} :catch_0

    return-void

    :catch_0
    move-exception v0

    goto :goto_0

    :catch_1
    move-exception v0

    .line 118
    :goto_0
    iget-object v1, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mIsStarted:Ljava/util/concurrent/atomic/AtomicBoolean;

    const/4 v2, 0x0

    invoke-virtual {v1, v2}, Ljava/util/concurrent/atomic/AtomicBoolean;->set(Z)V

    .line 119
    new-instance v1, Landroidx/camera/video/internal/audio/AudioStream$AudioStreamException;

    invoke-direct {v1, v0}, Landroidx/camera/video/internal/audio/AudioStream$AudioStreamException;-><init>(Ljava/lang/Throwable;)V

    throw v1
.end method

.method public stop()V
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/IllegalStateException;
        }
    .end annotation

    .line 125
    invoke-direct {p0}, Landroidx/camera/video/internal/audio/BufferedAudioStream;->checkNotReleasedOrThrow()V

    .line 126
    iget-object v0, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mIsStarted:Ljava/util/concurrent/atomic/AtomicBoolean;

    const/4 v1, 0x0

    invoke-virtual {v0, v1}, Ljava/util/concurrent/atomic/AtomicBoolean;->getAndSet(Z)Z

    move-result v0

    if-nez v0, :cond_0

    return-void

    .line 131
    :cond_0
    iget-object v0, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream;->mProducerExecutor:Ljava/util/concurrent/Executor;

    new-instance v1, Landroidx/camera/video/internal/audio/BufferedAudioStream$$ExternalSyntheticLambda0;

    invoke-direct {v1, p0}, Landroidx/camera/video/internal/audio/BufferedAudioStream$$ExternalSyntheticLambda0;-><init>(Landroidx/camera/video/internal/audio/BufferedAudioStream;)V

    invoke-interface {v0, v1}, Ljava/util/concurrent/Executor;->execute(Ljava/lang/Runnable;)V

    return-void
.end method

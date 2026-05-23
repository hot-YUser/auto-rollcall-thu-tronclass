.class public Landroidx/camera/video/internal/audio/SilentAudioStream;
.super Ljava/lang/Object;
.source "SilentAudioStream.java"

# interfaces
.implements Landroidx/camera/video/internal/audio/AudioStream;


# static fields
.field private static final TAG:Ljava/lang/String; = "SilentAudioStream"


# instance fields
.field private mAudioStreamCallback:Landroidx/camera/video/internal/audio/AudioStream$AudioStreamCallback;

.field private final mBytesPerFrame:I

.field private mCallbackExecutor:Ljava/util/concurrent/Executor;

.field private mCurrentReadTimeNs:J

.field private final mIsReleased:Ljava/util/concurrent/atomic/AtomicBoolean;

.field private final mIsStarted:Ljava/util/concurrent/atomic/AtomicBoolean;

.field private final mSampleRate:I

.field private mZeroBytes:[B


# direct methods
.method public constructor <init>(Landroidx/camera/video/internal/audio/AudioSettings;)V
    .locals 2

    .line 61
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 44
    new-instance v0, Ljava/util/concurrent/atomic/AtomicBoolean;

    const/4 v1, 0x0

    invoke-direct {v0, v1}, Ljava/util/concurrent/atomic/AtomicBoolean;-><init>(Z)V

    iput-object v0, p0, Landroidx/camera/video/internal/audio/SilentAudioStream;->mIsStarted:Ljava/util/concurrent/atomic/AtomicBoolean;

    .line 45
    new-instance v0, Ljava/util/concurrent/atomic/AtomicBoolean;

    invoke-direct {v0, v1}, Ljava/util/concurrent/atomic/AtomicBoolean;-><init>(Z)V

    iput-object v0, p0, Landroidx/camera/video/internal/audio/SilentAudioStream;->mIsReleased:Ljava/util/concurrent/atomic/AtomicBoolean;

    .line 62
    invoke-virtual {p1}, Landroidx/camera/video/internal/audio/AudioSettings;->getBytesPerFrame()I

    move-result v0

    iput v0, p0, Landroidx/camera/video/internal/audio/SilentAudioStream;->mBytesPerFrame:I

    .line 63
    invoke-virtual {p1}, Landroidx/camera/video/internal/audio/AudioSettings;->getSampleRate()I

    move-result p1

    iput p1, p0, Landroidx/camera/video/internal/audio/SilentAudioStream;->mSampleRate:I

    return-void
.end method

.method private static blockUntilSystemTimeReached(J)V
    .locals 2

    .line 150
    invoke-static {}, Landroidx/camera/video/internal/audio/SilentAudioStream;->currentSystemTimeNs()J

    move-result-wide v0

    sub-long/2addr p0, v0

    const-wide/16 v0, 0x0

    cmp-long v0, p0, v0

    if-lez v0, :cond_0

    .line 153
    :try_start_0
    sget-object v0, Ljava/util/concurrent/TimeUnit;->NANOSECONDS:Ljava/util/concurrent/TimeUnit;

    invoke-virtual {v0, p0, p1}, Ljava/util/concurrent/TimeUnit;->toMillis(J)J

    move-result-wide p0

    invoke-static {p0, p1}, Ljava/lang/Thread;->sleep(J)V
    :try_end_0
    .catch Ljava/lang/InterruptedException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p0

    .line 155
    const-string p1, "SilentAudioStream"

    const-string v0, "Ignore interruption"

    invoke-static {p1, v0, p0}, Landroidx/camera/core/Logger;->w(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    :cond_0
    :goto_0
    return-void
.end method

.method private checkNotReleasedOrThrow()V
    .locals 2

    .line 136
    iget-object v0, p0, Landroidx/camera/video/internal/audio/SilentAudioStream;->mIsReleased:Ljava/util/concurrent/atomic/AtomicBoolean;

    invoke-virtual {v0}, Ljava/util/concurrent/atomic/AtomicBoolean;->get()Z

    move-result v0

    xor-int/lit8 v0, v0, 0x1

    const-string v1, "AudioStream has been released."

    invoke-static {v0, v1}, Landroidx/core/util/Preconditions;->checkState(ZLjava/lang/String;)V

    return-void
.end method

.method private checkStartedOrThrow()V
    .locals 2

    .line 140
    iget-object v0, p0, Landroidx/camera/video/internal/audio/SilentAudioStream;->mIsStarted:Ljava/util/concurrent/atomic/AtomicBoolean;

    invoke-virtual {v0}, Ljava/util/concurrent/atomic/AtomicBoolean;->get()Z

    move-result v0

    const-string v1, "AudioStream has not been started."

    invoke-static {v0, v1}, Landroidx/core/util/Preconditions;->checkState(ZLjava/lang/String;)V

    return-void
.end method

.method private static currentSystemTimeNs()J
    .locals 2

    .line 144
    invoke-static {}, Ljava/lang/System;->nanoTime()J

    move-result-wide v0

    return-wide v0
.end method

.method static synthetic lambda$notifySilenced$0(Landroidx/camera/video/internal/audio/AudioStream$AudioStreamCallback;)V
    .locals 1

    const/4 v0, 0x1

    .line 131
    invoke-interface {p0, v0}, Landroidx/camera/video/internal/audio/AudioStream$AudioStreamCallback;->onSilenceStateChanged(Z)V

    return-void
.end method

.method private notifySilenced()V
    .locals 3

    .line 128
    iget-object v0, p0, Landroidx/camera/video/internal/audio/SilentAudioStream;->mAudioStreamCallback:Landroidx/camera/video/internal/audio/AudioStream$AudioStreamCallback;

    .line 129
    iget-object v1, p0, Landroidx/camera/video/internal/audio/SilentAudioStream;->mCallbackExecutor:Ljava/util/concurrent/Executor;

    if-eqz v0, :cond_0

    if-eqz v1, :cond_0

    .line 131
    new-instance v2, Landroidx/camera/video/internal/audio/SilentAudioStream$$ExternalSyntheticLambda0;

    invoke-direct {v2, v0}, Landroidx/camera/video/internal/audio/SilentAudioStream$$ExternalSyntheticLambda0;-><init>(Landroidx/camera/video/internal/audio/AudioStream$AudioStreamCallback;)V

    invoke-interface {v1, v2}, Ljava/util/concurrent/Executor;->execute(Ljava/lang/Runnable;)V

    :cond_0
    return-void
.end method

.method private writeSilenceToBuffer(Ljava/nio/ByteBuffer;I)V
    .locals 3

    .line 117
    invoke-virtual {p1}, Ljava/nio/ByteBuffer;->remaining()I

    move-result v0

    const/4 v1, 0x0

    if-gt p2, v0, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    move v0, v1

    :goto_0
    invoke-static {v0}, Landroidx/core/util/Preconditions;->checkState(Z)V

    .line 118
    iget-object v0, p0, Landroidx/camera/video/internal/audio/SilentAudioStream;->mZeroBytes:[B

    if-eqz v0, :cond_1

    array-length v0, v0

    if-ge v0, p2, :cond_2

    .line 119
    :cond_1
    new-array v0, p2, [B

    iput-object v0, p0, Landroidx/camera/video/internal/audio/SilentAudioStream;->mZeroBytes:[B

    .line 121
    :cond_2
    invoke-virtual {p1}, Ljava/nio/ByteBuffer;->position()I

    move-result v0

    .line 122
    iget-object v2, p0, Landroidx/camera/video/internal/audio/SilentAudioStream;->mZeroBytes:[B

    invoke-virtual {p1, v2, v1, p2}, Ljava/nio/ByteBuffer;->put([BII)Ljava/nio/ByteBuffer;

    move-result-object p1

    add-int/2addr p2, v0

    .line 123
    invoke-virtual {p1, p2}, Ljava/nio/ByteBuffer;->limit(I)Ljava/nio/Buffer;

    move-result-object p1

    .line 124
    invoke-virtual {p1, v0}, Ljava/nio/Buffer;->position(I)Ljava/nio/Buffer;

    return-void
.end method


# virtual methods
.method public read(Ljava/nio/ByteBuffer;)Landroidx/camera/video/internal/audio/AudioStream$PacketInfo;
    .locals 5

    .line 100
    invoke-direct {p0}, Landroidx/camera/video/internal/audio/SilentAudioStream;->checkNotReleasedOrThrow()V

    .line 101
    invoke-direct {p0}, Landroidx/camera/video/internal/audio/SilentAudioStream;->checkStartedOrThrow()V

    .line 102
    invoke-virtual {p1}, Ljava/nio/ByteBuffer;->remaining()I

    move-result v0

    int-to-long v0, v0

    iget v2, p0, Landroidx/camera/video/internal/audio/SilentAudioStream;->mBytesPerFrame:I

    invoke-static {v0, v1, v2}, Landroidx/camera/video/internal/audio/AudioUtils;->sizeToFrameCount(JI)J

    move-result-wide v0

    .line 103
    iget v2, p0, Landroidx/camera/video/internal/audio/SilentAudioStream;->mBytesPerFrame:I

    invoke-static {v0, v1, v2}, Landroidx/camera/video/internal/audio/AudioUtils;->frameCountToSize(JI)J

    move-result-wide v2

    long-to-int v2, v2

    if-gtz v2, :cond_0

    const/4 p1, 0x0

    .line 105
    iget-wide v0, p0, Landroidx/camera/video/internal/audio/SilentAudioStream;->mCurrentReadTimeNs:J

    invoke-static {p1, v0, v1}, Landroidx/camera/video/internal/audio/AudioStream$PacketInfo;->of(IJ)Landroidx/camera/video/internal/audio/AudioStream$PacketInfo;

    move-result-object p1

    return-object p1

    .line 107
    :cond_0
    iget v3, p0, Landroidx/camera/video/internal/audio/SilentAudioStream;->mSampleRate:I

    invoke-static {v0, v1, v3}, Landroidx/camera/video/internal/audio/AudioUtils;->frameCountToDurationNs(JI)J

    move-result-wide v0

    .line 108
    iget-wide v3, p0, Landroidx/camera/video/internal/audio/SilentAudioStream;->mCurrentReadTimeNs:J

    add-long/2addr v3, v0

    .line 109
    invoke-static {v3, v4}, Landroidx/camera/video/internal/audio/SilentAudioStream;->blockUntilSystemTimeReached(J)V

    .line 110
    invoke-direct {p0, p1, v2}, Landroidx/camera/video/internal/audio/SilentAudioStream;->writeSilenceToBuffer(Ljava/nio/ByteBuffer;I)V

    .line 111
    iget-wide v0, p0, Landroidx/camera/video/internal/audio/SilentAudioStream;->mCurrentReadTimeNs:J

    invoke-static {v2, v0, v1}, Landroidx/camera/video/internal/audio/AudioStream$PacketInfo;->of(IJ)Landroidx/camera/video/internal/audio/AudioStream$PacketInfo;

    move-result-object p1

    .line 112
    iput-wide v3, p0, Landroidx/camera/video/internal/audio/SilentAudioStream;->mCurrentReadTimeNs:J

    return-object p1
.end method

.method public release()V
    .locals 2

    .line 94
    iget-object v0, p0, Landroidx/camera/video/internal/audio/SilentAudioStream;->mIsReleased:Ljava/util/concurrent/atomic/AtomicBoolean;

    const/4 v1, 0x1

    invoke-virtual {v0, v1}, Ljava/util/concurrent/atomic/AtomicBoolean;->getAndSet(Z)Z

    return-void
.end method

.method public setCallback(Landroidx/camera/video/internal/audio/AudioStream$AudioStreamCallback;Ljava/util/concurrent/Executor;)V
    .locals 3

    .line 68
    iget-object v0, p0, Landroidx/camera/video/internal/audio/SilentAudioStream;->mIsStarted:Ljava/util/concurrent/atomic/AtomicBoolean;

    invoke-virtual {v0}, Ljava/util/concurrent/atomic/AtomicBoolean;->get()Z

    move-result v0

    const/4 v1, 0x1

    xor-int/2addr v0, v1

    const-string v2, "AudioStream can not be started when setCallback."

    invoke-static {v0, v2}, Landroidx/core/util/Preconditions;->checkState(ZLjava/lang/String;)V

    .line 69
    invoke-direct {p0}, Landroidx/camera/video/internal/audio/SilentAudioStream;->checkNotReleasedOrThrow()V

    if-eqz p1, :cond_1

    if-eqz p2, :cond_0

    goto :goto_0

    :cond_0
    const/4 v1, 0x0

    .line 70
    :cond_1
    :goto_0
    const-string v0, "executor can\'t be null with non-null callback."

    invoke-static {v1, v0}, Landroidx/core/util/Preconditions;->checkArgument(ZLjava/lang/Object;)V

    .line 72
    iput-object p1, p0, Landroidx/camera/video/internal/audio/SilentAudioStream;->mAudioStreamCallback:Landroidx/camera/video/internal/audio/AudioStream$AudioStreamCallback;

    .line 73
    iput-object p2, p0, Landroidx/camera/video/internal/audio/SilentAudioStream;->mCallbackExecutor:Ljava/util/concurrent/Executor;

    return-void
.end method

.method public start()V
    .locals 2

    .line 78
    invoke-direct {p0}, Landroidx/camera/video/internal/audio/SilentAudioStream;->checkNotReleasedOrThrow()V

    .line 79
    iget-object v0, p0, Landroidx/camera/video/internal/audio/SilentAudioStream;->mIsStarted:Ljava/util/concurrent/atomic/AtomicBoolean;

    const/4 v1, 0x1

    invoke-virtual {v0, v1}, Ljava/util/concurrent/atomic/AtomicBoolean;->getAndSet(Z)Z

    move-result v0

    if-eqz v0, :cond_0

    return-void

    .line 82
    :cond_0
    invoke-static {}, Landroidx/camera/video/internal/audio/SilentAudioStream;->currentSystemTimeNs()J

    move-result-wide v0

    iput-wide v0, p0, Landroidx/camera/video/internal/audio/SilentAudioStream;->mCurrentReadTimeNs:J

    .line 83
    invoke-direct {p0}, Landroidx/camera/video/internal/audio/SilentAudioStream;->notifySilenced()V

    return-void
.end method

.method public stop()V
    .locals 2

    .line 88
    invoke-direct {p0}, Landroidx/camera/video/internal/audio/SilentAudioStream;->checkNotReleasedOrThrow()V

    .line 89
    iget-object v0, p0, Landroidx/camera/video/internal/audio/SilentAudioStream;->mIsStarted:Ljava/util/concurrent/atomic/AtomicBoolean;

    const/4 v1, 0x0

    invoke-virtual {v0, v1}, Ljava/util/concurrent/atomic/AtomicBoolean;->set(Z)V

    return-void
.end method

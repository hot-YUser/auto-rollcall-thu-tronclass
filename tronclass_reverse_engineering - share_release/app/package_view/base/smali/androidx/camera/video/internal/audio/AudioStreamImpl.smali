.class public Landroidx/camera/video/internal/audio/AudioStreamImpl;
.super Ljava/lang/Object;
.source "AudioStreamImpl.java"

# interfaces
.implements Landroidx/camera/video/internal/audio/AudioStream;


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/video/internal/audio/AudioStreamImpl$AudioRecordingApi29Callback;
    }
.end annotation


# static fields
.field private static final TAG:Ljava/lang/String; = "AudioStreamImpl"


# instance fields
.field final mAudioRecord:Landroid/media/AudioRecord;

.field private mAudioRecordingCallback:Landroid/media/AudioManager$AudioRecordingCallback;

.field private mAudioStreamCallback:Landroidx/camera/video/internal/audio/AudioStream$AudioStreamCallback;

.field private final mBufferSize:I

.field private final mBytesPerFrame:I

.field private mCallbackExecutor:Ljava/util/concurrent/Executor;

.field private final mIsReleased:Ljava/util/concurrent/atomic/AtomicBoolean;

.field private final mIsStarted:Ljava/util/concurrent/atomic/AtomicBoolean;

.field private final mNotifiedSilenceState:Ljava/util/concurrent/atomic/AtomicReference;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/concurrent/atomic/AtomicReference<",
            "Ljava/lang/Boolean;",
            ">;"
        }
    .end annotation
.end field

.field private final mSettings:Landroidx/camera/video/internal/audio/AudioSettings;

.field private mTotalFramesRead:J


# direct methods
.method public constructor <init>(Landroidx/camera/video/internal/audio/AudioSettings;Landroid/content/Context;)V
    .locals 6
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/IllegalArgumentException;,
            Landroidx/camera/video/internal/audio/AudioStream$AudioStreamException;
        }
    .end annotation

    .line 102
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 66
    new-instance v0, Ljava/util/concurrent/atomic/AtomicBoolean;

    const/4 v1, 0x0

    invoke-direct {v0, v1}, Ljava/util/concurrent/atomic/AtomicBoolean;-><init>(Z)V

    iput-object v0, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl;->mIsReleased:Ljava/util/concurrent/atomic/AtomicBoolean;

    .line 67
    new-instance v0, Ljava/util/concurrent/atomic/AtomicBoolean;

    invoke-direct {v0, v1}, Ljava/util/concurrent/atomic/AtomicBoolean;-><init>(Z)V

    iput-object v0, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl;->mIsStarted:Ljava/util/concurrent/atomic/AtomicBoolean;

    .line 68
    new-instance v0, Ljava/util/concurrent/atomic/AtomicReference;

    const/4 v2, 0x0

    invoke-direct {v0, v2}, Ljava/util/concurrent/atomic/AtomicReference;-><init>(Ljava/lang/Object;)V

    iput-object v0, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl;->mNotifiedSilenceState:Ljava/util/concurrent/atomic/AtomicReference;

    .line 103
    invoke-virtual {p1}, Landroidx/camera/video/internal/audio/AudioSettings;->getSampleRate()I

    move-result v0

    invoke-virtual {p1}, Landroidx/camera/video/internal/audio/AudioSettings;->getChannelCount()I

    move-result v2

    .line 104
    invoke-virtual {p1}, Landroidx/camera/video/internal/audio/AudioSettings;->getAudioFormat()I

    move-result v3

    .line 103
    invoke-static {v0, v2, v3}, Landroidx/camera/video/internal/audio/AudioStreamImpl;->isSettingsSupported(III)Z

    move-result v0

    if-eqz v0, :cond_3

    .line 112
    iput-object p1, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl;->mSettings:Landroidx/camera/video/internal/audio/AudioSettings;

    .line 113
    invoke-virtual {p1}, Landroidx/camera/video/internal/audio/AudioSettings;->getBytesPerFrame()I

    move-result v0

    iput v0, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl;->mBytesPerFrame:I

    .line 115
    invoke-virtual {p1}, Landroidx/camera/video/internal/audio/AudioSettings;->getSampleRate()I

    move-result v0

    invoke-virtual {p1}, Landroidx/camera/video/internal/audio/AudioSettings;->getChannelCount()I

    move-result v2

    .line 116
    invoke-virtual {p1}, Landroidx/camera/video/internal/audio/AudioSettings;->getAudioFormat()I

    move-result v3

    .line 115
    invoke-static {v0, v2, v3}, Landroidx/camera/video/internal/audio/AudioStreamImpl;->getMinBufferSize(III)I

    move-result v0

    const/4 v2, 0x1

    if-lez v0, :cond_0

    move v1, v2

    .line 119
    :cond_0
    invoke-static {v1}, Landroidx/core/util/Preconditions;->checkState(Z)V

    mul-int/lit8 v0, v0, 0x2

    .line 120
    iput v0, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl;->mBufferSize:I

    .line 123
    new-instance v1, Landroid/media/AudioFormat$Builder;

    invoke-direct {v1}, Landroid/media/AudioFormat$Builder;-><init>()V

    .line 124
    invoke-virtual {p1}, Landroidx/camera/video/internal/audio/AudioSettings;->getSampleRate()I

    move-result v3

    invoke-virtual {v1, v3}, Landroid/media/AudioFormat$Builder;->setSampleRate(I)Landroid/media/AudioFormat$Builder;

    move-result-object v1

    .line 125
    invoke-virtual {p1}, Landroidx/camera/video/internal/audio/AudioSettings;->getChannelCount()I

    move-result v3

    invoke-static {v3}, Landroidx/camera/video/internal/audio/AudioUtils;->channelCountToChannelMask(I)I

    move-result v3

    invoke-virtual {v1, v3}, Landroid/media/AudioFormat$Builder;->setChannelMask(I)Landroid/media/AudioFormat$Builder;

    move-result-object v1

    .line 126
    invoke-virtual {p1}, Landroidx/camera/video/internal/audio/AudioSettings;->getAudioFormat()I

    move-result v3

    invoke-virtual {v1, v3}, Landroid/media/AudioFormat$Builder;->setEncoding(I)Landroid/media/AudioFormat$Builder;

    move-result-object v1

    .line 127
    invoke-virtual {v1}, Landroid/media/AudioFormat$Builder;->build()Landroid/media/AudioFormat;

    move-result-object v1

    .line 128
    invoke-static {}, Landroidx/camera/video/internal/compat/Api23Impl;->createAudioRecordBuilder()Landroid/media/AudioRecord$Builder;

    move-result-object v3

    .line 129
    sget v4, Landroid/os/Build$VERSION;->SDK_INT:I

    const/16 v5, 0x1f

    if-lt v4, v5, :cond_1

    if-eqz p2, :cond_1

    .line 130
    invoke-static {v3, p2}, Landroidx/camera/video/internal/compat/Api31Impl;->setContext(Landroid/media/AudioRecord$Builder;Landroid/content/Context;)V

    .line 132
    :cond_1
    invoke-virtual {p1}, Landroidx/camera/video/internal/audio/AudioSettings;->getAudioSource()I

    move-result p1

    invoke-static {v3, p1}, Landroidx/camera/video/internal/compat/Api23Impl;->setAudioSource(Landroid/media/AudioRecord$Builder;I)V

    .line 133
    invoke-static {v3, v1}, Landroidx/camera/video/internal/compat/Api23Impl;->setAudioFormat(Landroid/media/AudioRecord$Builder;Landroid/media/AudioFormat;)V

    .line 134
    invoke-static {v3, v0}, Landroidx/camera/video/internal/compat/Api23Impl;->setBufferSizeInBytes(Landroid/media/AudioRecord$Builder;I)V

    .line 135
    invoke-static {v3}, Landroidx/camera/video/internal/compat/Api23Impl;->build(Landroid/media/AudioRecord$Builder;)Landroid/media/AudioRecord;

    move-result-object p1

    iput-object p1, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl;->mAudioRecord:Landroid/media/AudioRecord;

    .line 144
    invoke-virtual {p1}, Landroid/media/AudioRecord;->getState()I

    move-result p2

    if-ne p2, v2, :cond_2

    return-void

    .line 145
    :cond_2
    invoke-virtual {p1}, Landroid/media/AudioRecord;->release()V

    .line 146
    new-instance p1, Landroidx/camera/video/internal/audio/AudioStream$AudioStreamException;

    const-string p2, "Unable to initialize AudioRecord"

    invoke-direct {p1, p2}, Landroidx/camera/video/internal/audio/AudioStream$AudioStreamException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 105
    :cond_3
    new-instance p2, Ljava/lang/UnsupportedOperationException;

    .line 108
    invoke-virtual {p1}, Landroidx/camera/video/internal/audio/AudioSettings;->getSampleRate()I

    move-result v0

    invoke-static {v0}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v0

    invoke-virtual {p1}, Landroidx/camera/video/internal/audio/AudioSettings;->getChannelCount()I

    move-result v1

    invoke-static {v1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    .line 109
    invoke-virtual {p1}, Landroidx/camera/video/internal/audio/AudioSettings;->getAudioFormat()I

    move-result p1

    invoke-static {p1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object p1

    filled-new-array {v0, v1, p1}, [Ljava/lang/Object;

    move-result-object p1

    .line 105
    const-string v0, "The combination of sample rate %d, channel count %d and audio format %d is not supported."

    invoke-static {v0, p1}, Ljava/lang/String;->format(Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String;

    move-result-object p1

    invoke-direct {p2, p1}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p2
.end method

.method private checkNotReleasedOrThrow()V
    .locals 2

    .line 277
    iget-object v0, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl;->mIsReleased:Ljava/util/concurrent/atomic/AtomicBoolean;

    invoke-virtual {v0}, Ljava/util/concurrent/atomic/AtomicBoolean;->get()Z

    move-result v0

    xor-int/lit8 v0, v0, 0x1

    const-string v1, "AudioStream has been released."

    invoke-static {v0, v1}, Landroidx/core/util/Preconditions;->checkState(ZLjava/lang/String;)V

    return-void
.end method

.method private checkStartedOrThrow()V
    .locals 2

    .line 281
    iget-object v0, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl;->mIsStarted:Ljava/util/concurrent/atomic/AtomicBoolean;

    invoke-virtual {v0}, Ljava/util/concurrent/atomic/AtomicBoolean;->get()Z

    move-result v0

    const-string v1, "AudioStream has not been started."

    invoke-static {v0, v1}, Landroidx/core/util/Preconditions;->checkState(ZLjava/lang/String;)V

    return-void
.end method

.method private static computeInterpolatedTimeNs(IJLandroid/media/AudioTimestamp;)J
    .locals 2

    .line 298
    iget-wide v0, p3, Landroid/media/AudioTimestamp;->framePosition:J

    sub-long/2addr p1, v0

    .line 299
    invoke-static {p1, p2, p0}, Landroidx/camera/video/internal/audio/AudioUtils;->frameCountToDurationNs(JI)J

    move-result-wide p0

    .line 300
    iget-wide p2, p3, Landroid/media/AudioTimestamp;->nanoTime:J

    add-long/2addr p2, p0

    const-wide/16 p0, 0x0

    cmp-long v0, p2, p0

    if-gez v0, :cond_0

    move-wide p2, p0

    :cond_0
    return-wide p2
.end method

.method private generatePresentationTimeNs()J
    .locals 6

    .line 260
    invoke-static {}, Landroidx/camera/video/internal/audio/AudioStreamImpl;->hasAudioTimestampQuirk()Z

    move-result v0

    const-wide/16 v1, -0x1

    if-nez v0, :cond_1

    .line 261
    new-instance v0, Landroid/media/AudioTimestamp;

    invoke-direct {v0}, Landroid/media/AudioTimestamp;-><init>()V

    .line 262
    iget-object v3, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl;->mAudioRecord:Landroid/media/AudioRecord;

    const/4 v4, 0x0

    invoke-static {v3, v0, v4}, Landroidx/camera/video/internal/compat/Api24Impl;->getTimestamp(Landroid/media/AudioRecord;Landroid/media/AudioTimestamp;I)I

    move-result v3

    if-nez v3, :cond_0

    .line 264
    iget-object v3, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl;->mSettings:Landroidx/camera/video/internal/audio/AudioSettings;

    invoke-virtual {v3}, Landroidx/camera/video/internal/audio/AudioSettings;->getSampleRate()I

    move-result v3

    iget-wide v4, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl;->mTotalFramesRead:J

    invoke-static {v3, v4, v5, v0}, Landroidx/camera/video/internal/audio/AudioStreamImpl;->computeInterpolatedTimeNs(IJLandroid/media/AudioTimestamp;)J

    move-result-wide v3

    goto :goto_0

    .line 267
    :cond_0
    const-string v0, "AudioStreamImpl"

    const-string v3, "Unable to get audio timestamp"

    invoke-static {v0, v3}, Landroidx/camera/core/Logger;->w(Ljava/lang/String;Ljava/lang/String;)V

    :cond_1
    move-wide v3, v1

    :goto_0
    cmp-long v0, v3, v1

    if-nez v0, :cond_2

    .line 271
    invoke-static {}, Ljava/lang/System;->nanoTime()J

    move-result-wide v3

    :cond_2
    return-wide v3
.end method

.method private static getMinBufferSize(III)I
    .locals 0

    .line 305
    invoke-static {p1}, Landroidx/camera/video/internal/audio/AudioUtils;->channelCountToChannelConfig(I)I

    move-result p1

    invoke-static {p0, p1, p2}, Landroid/media/AudioRecord;->getMinBufferSize(III)I

    move-result p0

    return p0
.end method

.method private static hasAudioTimestampQuirk()Z
    .locals 1

    .line 293
    const-class v0, Landroidx/camera/video/internal/compat/quirk/AudioTimestampFramePositionIncorrectQuirk;

    invoke-static {v0}, Landroidx/camera/video/internal/compat/quirk/DeviceQuirks;->get(Ljava/lang/Class;)Landroidx/camera/core/impl/Quirk;

    move-result-object v0

    if-eqz v0, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return v0
.end method

.method public static isSettingsSupported(III)Z
    .locals 1

    const/4 v0, 0x0

    if-lez p0, :cond_1

    if-gtz p1, :cond_0

    goto :goto_0

    .line 289
    :cond_0
    invoke-static {p0, p1, p2}, Landroidx/camera/video/internal/audio/AudioStreamImpl;->getMinBufferSize(III)I

    move-result p0

    if-lez p0, :cond_1

    const/4 v0, 0x1

    :cond_1
    :goto_0
    return v0
.end method

.method static synthetic lambda$notifySilenced$0(Landroidx/camera/video/internal/audio/AudioStream$AudioStreamCallback;Z)V
    .locals 0

    .line 253
    invoke-interface {p0, p1}, Landroidx/camera/video/internal/audio/AudioStream$AudioStreamCallback;->onSilenceStateChanged(Z)V

    return-void
.end method


# virtual methods
.method notifySilenced(Z)V
    .locals 4

    .line 249
    iget-object v0, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl;->mCallbackExecutor:Ljava/util/concurrent/Executor;

    .line 250
    iget-object v1, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl;->mAudioStreamCallback:Landroidx/camera/video/internal/audio/AudioStream$AudioStreamCallback;

    if-eqz v0, :cond_0

    if-eqz v1, :cond_0

    .line 252
    iget-object v2, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl;->mNotifiedSilenceState:Ljava/util/concurrent/atomic/AtomicReference;

    invoke-static {p1}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v3

    invoke-virtual {v2, v3}, Ljava/util/concurrent/atomic/AtomicReference;->getAndSet(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v2

    invoke-static {p1}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v3

    invoke-static {v2, v3}, Ljava/util/Objects;->equals(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v2

    if-nez v2, :cond_0

    .line 253
    new-instance v2, Landroidx/camera/video/internal/audio/AudioStreamImpl$$ExternalSyntheticLambda0;

    invoke-direct {v2, v1, p1}, Landroidx/camera/video/internal/audio/AudioStreamImpl$$ExternalSyntheticLambda0;-><init>(Landroidx/camera/video/internal/audio/AudioStream$AudioStreamCallback;Z)V

    invoke-interface {v0, v2}, Ljava/util/concurrent/Executor;->execute(Ljava/lang/Runnable;)V

    :cond_0
    return-void
.end method

.method public read(Ljava/nio/ByteBuffer;)Landroidx/camera/video/internal/audio/AudioStream$PacketInfo;
    .locals 7

    .line 212
    invoke-direct {p0}, Landroidx/camera/video/internal/audio/AudioStreamImpl;->checkNotReleasedOrThrow()V

    .line 213
    invoke-direct {p0}, Landroidx/camera/video/internal/audio/AudioStreamImpl;->checkStartedOrThrow()V

    .line 215
    iget-object v0, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl;->mAudioRecord:Landroid/media/AudioRecord;

    iget v1, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl;->mBufferSize:I

    invoke-virtual {v0, p1, v1}, Landroid/media/AudioRecord;->read(Ljava/nio/ByteBuffer;I)I

    move-result v0

    if-lez v0, :cond_0

    .line 218
    invoke-virtual {p1, v0}, Ljava/nio/ByteBuffer;->limit(I)Ljava/nio/Buffer;

    .line 219
    invoke-direct {p0}, Landroidx/camera/video/internal/audio/AudioStreamImpl;->generatePresentationTimeNs()J

    move-result-wide v1

    .line 220
    iget-wide v3, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl;->mTotalFramesRead:J

    int-to-long v5, v0

    iget p1, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl;->mBytesPerFrame:I

    invoke-static {v5, v6, p1}, Landroidx/camera/video/internal/audio/AudioUtils;->sizeToFrameCount(JI)J

    move-result-wide v5

    add-long/2addr v3, v5

    iput-wide v3, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl;->mTotalFramesRead:J

    goto :goto_0

    :cond_0
    const-wide/16 v1, 0x0

    .line 222
    :goto_0
    invoke-static {v0, v1, v2}, Landroidx/camera/video/internal/audio/AudioStream$PacketInfo;->of(IJ)Landroidx/camera/video/internal/audio/AudioStream$PacketInfo;

    move-result-object p1

    return-object p1
.end method

.method public release()V
    .locals 2

    .line 188
    iget-object v0, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl;->mIsReleased:Ljava/util/concurrent/atomic/AtomicBoolean;

    const/4 v1, 0x1

    invoke-virtual {v0, v1}, Ljava/util/concurrent/atomic/AtomicBoolean;->getAndSet(Z)Z

    move-result v0

    if-eqz v0, :cond_0

    return-void

    .line 191
    :cond_0
    sget v0, Landroid/os/Build$VERSION;->SDK_INT:I

    const/16 v1, 0x1d

    if-lt v0, v1, :cond_1

    iget-object v0, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl;->mAudioRecordingCallback:Landroid/media/AudioManager$AudioRecordingCallback;

    if-eqz v0, :cond_1

    .line 192
    iget-object v1, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl;->mAudioRecord:Landroid/media/AudioRecord;

    invoke-static {v1, v0}, Landroidx/camera/video/internal/compat/Api29Impl;->unregisterAudioRecordingCallback(Landroid/media/AudioRecord;Landroid/media/AudioManager$AudioRecordingCallback;)V

    .line 194
    :cond_1
    iget-object v0, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl;->mAudioRecord:Landroid/media/AudioRecord;

    invoke-virtual {v0}, Landroid/media/AudioRecord;->release()V

    return-void
.end method

.method public setCallback(Landroidx/camera/video/internal/audio/AudioStream$AudioStreamCallback;Ljava/util/concurrent/Executor;)V
    .locals 3

    .line 227
    iget-object v0, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl;->mIsStarted:Ljava/util/concurrent/atomic/AtomicBoolean;

    invoke-virtual {v0}, Ljava/util/concurrent/atomic/AtomicBoolean;->get()Z

    move-result v0

    const/4 v1, 0x1

    xor-int/2addr v0, v1

    const-string v2, "AudioStream can not be started when setCallback."

    invoke-static {v0, v2}, Landroidx/core/util/Preconditions;->checkState(ZLjava/lang/String;)V

    .line 228
    invoke-direct {p0}, Landroidx/camera/video/internal/audio/AudioStreamImpl;->checkNotReleasedOrThrow()V

    if-eqz p1, :cond_1

    if-eqz p2, :cond_0

    goto :goto_0

    :cond_0
    const/4 v1, 0x0

    .line 229
    :cond_1
    :goto_0
    const-string v0, "executor can\'t be null with non-null callback."

    invoke-static {v1, v0}, Landroidx/core/util/Preconditions;->checkArgument(ZLjava/lang/Object;)V

    .line 231
    iput-object p1, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl;->mAudioStreamCallback:Landroidx/camera/video/internal/audio/AudioStream$AudioStreamCallback;

    .line 232
    iput-object p2, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl;->mCallbackExecutor:Ljava/util/concurrent/Executor;

    .line 233
    sget v0, Landroid/os/Build$VERSION;->SDK_INT:I

    const/16 v1, 0x1d

    if-lt v0, v1, :cond_5

    .line 234
    iget-object v0, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl;->mAudioRecordingCallback:Landroid/media/AudioManager$AudioRecordingCallback;

    if-eqz v0, :cond_2

    .line 235
    iget-object v1, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl;->mAudioRecord:Landroid/media/AudioRecord;

    invoke-static {v1, v0}, Landroidx/camera/video/internal/compat/Api29Impl;->unregisterAudioRecordingCallback(Landroid/media/AudioRecord;Landroid/media/AudioManager$AudioRecordingCallback;)V

    :cond_2
    if-nez p1, :cond_3

    return-void

    .line 240
    :cond_3
    iget-object p1, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl;->mAudioRecordingCallback:Landroid/media/AudioManager$AudioRecordingCallback;

    if-nez p1, :cond_4

    .line 241
    new-instance p1, Landroidx/camera/video/internal/audio/AudioStreamImpl$AudioRecordingApi29Callback;

    invoke-direct {p1, p0}, Landroidx/camera/video/internal/audio/AudioStreamImpl$AudioRecordingApi29Callback;-><init>(Landroidx/camera/video/internal/audio/AudioStreamImpl;)V

    iput-object p1, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl;->mAudioRecordingCallback:Landroid/media/AudioManager$AudioRecordingCallback;

    .line 243
    :cond_4
    iget-object p1, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl;->mAudioRecord:Landroid/media/AudioRecord;

    iget-object v0, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl;->mAudioRecordingCallback:Landroid/media/AudioManager$AudioRecordingCallback;

    invoke-static {p1, p2, v0}, Landroidx/camera/video/internal/compat/Api29Impl;->registerAudioRecordingCallback(Landroid/media/AudioRecord;Ljava/util/concurrent/Executor;Landroid/media/AudioManager$AudioRecordingCallback;)V

    :cond_5
    return-void
.end method

.method public start()V
    .locals 6
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Landroidx/camera/video/internal/audio/AudioStream$AudioStreamException;
        }
    .end annotation

    .line 152
    invoke-direct {p0}, Landroidx/camera/video/internal/audio/AudioStreamImpl;->checkNotReleasedOrThrow()V

    .line 153
    iget-object v0, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl;->mIsStarted:Ljava/util/concurrent/atomic/AtomicBoolean;

    const/4 v1, 0x1

    invoke-virtual {v0, v1}, Ljava/util/concurrent/atomic/AtomicBoolean;->getAndSet(Z)Z

    move-result v0

    if-eqz v0, :cond_0

    return-void

    .line 156
    :cond_0
    iget-object v0, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl;->mAudioRecord:Landroid/media/AudioRecord;

    invoke-virtual {v0}, Landroid/media/AudioRecord;->startRecording()V

    .line 157
    iget-object v0, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl;->mAudioRecord:Landroid/media/AudioRecord;

    invoke-virtual {v0}, Landroid/media/AudioRecord;->getRecordingState()I

    move-result v0

    const/4 v2, 0x3

    const/4 v3, 0x0

    if-ne v0, v2, :cond_3

    const-wide/16 v4, 0x0

    .line 162
    iput-wide v4, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl;->mTotalFramesRead:J

    .line 163
    iget-object v0, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl;->mNotifiedSilenceState:Ljava/util/concurrent/atomic/AtomicReference;

    const/4 v2, 0x0

    invoke-virtual {v0, v2}, Ljava/util/concurrent/atomic/AtomicReference;->set(Ljava/lang/Object;)V

    .line 165
    sget v0, Landroid/os/Build$VERSION;->SDK_INT:I

    const/16 v2, 0x1d

    if-lt v0, v2, :cond_2

    .line 166
    iget-object v0, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl;->mAudioRecord:Landroid/media/AudioRecord;

    invoke-static {v0}, Landroidx/camera/video/internal/compat/Api29Impl;->getActiveRecordingConfiguration(Landroid/media/AudioRecord;)Landroid/media/AudioRecordingConfiguration;

    move-result-object v0

    if-eqz v0, :cond_1

    .line 168
    invoke-static {v0}, Landroidx/camera/video/internal/compat/Api29Impl;->isClientSilenced(Landroid/media/AudioRecordingConfiguration;)Z

    move-result v0

    if-eqz v0, :cond_1

    goto :goto_0

    :cond_1
    move v1, v3

    :goto_0
    move v3, v1

    .line 170
    :cond_2
    invoke-virtual {p0, v3}, Landroidx/camera/video/internal/audio/AudioStreamImpl;->notifySilenced(Z)V

    return-void

    .line 158
    :cond_3
    iget-object v0, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl;->mIsStarted:Ljava/util/concurrent/atomic/AtomicBoolean;

    invoke-virtual {v0, v3}, Ljava/util/concurrent/atomic/AtomicBoolean;->set(Z)V

    .line 159
    new-instance v0, Landroidx/camera/video/internal/audio/AudioStream$AudioStreamException;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Unable to start AudioRecord with state: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v2, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl;->mAudioRecord:Landroid/media/AudioRecord;

    .line 160
    invoke-virtual {v2}, Landroid/media/AudioRecord;->getRecordingState()I

    move-result v2

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-direct {v0, v1}, Landroidx/camera/video/internal/audio/AudioStream$AudioStreamException;-><init>(Ljava/lang/String;)V

    throw v0
.end method

.method public stop()V
    .locals 2

    .line 175
    invoke-direct {p0}, Landroidx/camera/video/internal/audio/AudioStreamImpl;->checkNotReleasedOrThrow()V

    .line 176
    iget-object v0, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl;->mIsStarted:Ljava/util/concurrent/atomic/AtomicBoolean;

    const/4 v1, 0x0

    invoke-virtual {v0, v1}, Ljava/util/concurrent/atomic/AtomicBoolean;->getAndSet(Z)Z

    move-result v0

    if-nez v0, :cond_0

    return-void

    .line 179
    :cond_0
    iget-object v0, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl;->mAudioRecord:Landroid/media/AudioRecord;

    invoke-virtual {v0}, Landroid/media/AudioRecord;->stop()V

    .line 180
    iget-object v0, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl;->mAudioRecord:Landroid/media/AudioRecord;

    invoke-virtual {v0}, Landroid/media/AudioRecord;->getRecordingState()I

    move-result v0

    const/4 v1, 0x1

    if-eq v0, v1, :cond_1

    .line 181
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "Failed to stop AudioRecord with state: "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v1, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl;->mAudioRecord:Landroid/media/AudioRecord;

    .line 182
    invoke-virtual {v1}, Landroid/media/AudioRecord;->getRecordingState()I

    move-result v1

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    .line 181
    const-string v1, "AudioStreamImpl"

    invoke-static {v1, v0}, Landroidx/camera/core/Logger;->w(Ljava/lang/String;Ljava/lang/String;)V

    :cond_1
    return-void
.end method

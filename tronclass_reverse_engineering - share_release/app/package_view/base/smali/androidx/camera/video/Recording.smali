.class public final Landroidx/camera/video/Recording;
.super Ljava/lang/Object;
.source "Recording.java"

# interfaces
.implements Ljava/lang/AutoCloseable;


# instance fields
.field private final mCloseGuard:Landroidx/camera/core/impl/utils/CloseGuardHelper;

.field private final mIsClosed:Ljava/util/concurrent/atomic/AtomicBoolean;

.field private final mIsPersistent:Z

.field private final mOutputOptions:Landroidx/camera/video/OutputOptions;

.field private final mRecorder:Landroidx/camera/video/Recorder;

.field private final mRecordingId:J


# direct methods
.method constructor <init>(Landroidx/camera/video/Recorder;JLandroidx/camera/video/OutputOptions;ZZ)V
    .locals 2

    .line 61
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 53
    new-instance v0, Ljava/util/concurrent/atomic/AtomicBoolean;

    const/4 v1, 0x0

    invoke-direct {v0, v1}, Ljava/util/concurrent/atomic/AtomicBoolean;-><init>(Z)V

    iput-object v0, p0, Landroidx/camera/video/Recording;->mIsClosed:Ljava/util/concurrent/atomic/AtomicBoolean;

    .line 58
    invoke-static {}, Landroidx/camera/core/impl/utils/CloseGuardHelper;->create()Landroidx/camera/core/impl/utils/CloseGuardHelper;

    move-result-object v1

    iput-object v1, p0, Landroidx/camera/video/Recording;->mCloseGuard:Landroidx/camera/core/impl/utils/CloseGuardHelper;

    .line 62
    iput-object p1, p0, Landroidx/camera/video/Recording;->mRecorder:Landroidx/camera/video/Recorder;

    .line 63
    iput-wide p2, p0, Landroidx/camera/video/Recording;->mRecordingId:J

    .line 64
    iput-object p4, p0, Landroidx/camera/video/Recording;->mOutputOptions:Landroidx/camera/video/OutputOptions;

    .line 65
    iput-boolean p5, p0, Landroidx/camera/video/Recording;->mIsPersistent:Z

    if-eqz p6, :cond_0

    const/4 p1, 0x1

    .line 68
    invoke-virtual {v0, p1}, Ljava/util/concurrent/atomic/AtomicBoolean;->set(Z)V

    goto :goto_0

    .line 70
    :cond_0
    const-string p1, "stop"

    invoke-virtual {v1, p1}, Landroidx/camera/core/impl/utils/CloseGuardHelper;->open(Ljava/lang/String;)V

    :goto_0
    return-void
.end method

.method static createFinalizedFrom(Landroidx/camera/video/PendingRecording;J)Landroidx/camera/video/Recording;
    .locals 8

    .line 103
    const-string v0, "The given PendingRecording cannot be null."

    invoke-static {p0, v0}, Landroidx/core/util/Preconditions;->checkNotNull(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 104
    new-instance v0, Landroidx/camera/video/Recording;

    invoke-virtual {p0}, Landroidx/camera/video/PendingRecording;->getRecorder()Landroidx/camera/video/Recorder;

    move-result-object v2

    .line 106
    invoke-virtual {p0}, Landroidx/camera/video/PendingRecording;->getOutputOptions()Landroidx/camera/video/OutputOptions;

    move-result-object v5

    .line 107
    invoke-virtual {p0}, Landroidx/camera/video/PendingRecording;->isPersistent()Z

    move-result v6

    const/4 v7, 0x1

    move-object v1, v0

    move-wide v3, p1

    invoke-direct/range {v1 .. v7}, Landroidx/camera/video/Recording;-><init>(Landroidx/camera/video/Recorder;JLandroidx/camera/video/OutputOptions;ZZ)V

    return-object v0
.end method

.method static from(Landroidx/camera/video/PendingRecording;J)Landroidx/camera/video/Recording;
    .locals 8

    .line 82
    const-string v0, "The given PendingRecording cannot be null."

    invoke-static {p0, v0}, Landroidx/core/util/Preconditions;->checkNotNull(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 83
    new-instance v0, Landroidx/camera/video/Recording;

    invoke-virtual {p0}, Landroidx/camera/video/PendingRecording;->getRecorder()Landroidx/camera/video/Recorder;

    move-result-object v2

    .line 85
    invoke-virtual {p0}, Landroidx/camera/video/PendingRecording;->getOutputOptions()Landroidx/camera/video/OutputOptions;

    move-result-object v5

    .line 86
    invoke-virtual {p0}, Landroidx/camera/video/PendingRecording;->isPersistent()Z

    move-result v6

    const/4 v7, 0x0

    move-object v1, v0

    move-wide v3, p1

    invoke-direct/range {v1 .. v7}, Landroidx/camera/video/Recording;-><init>(Landroidx/camera/video/Recorder;JLandroidx/camera/video/OutputOptions;ZZ)V

    return-object v0
.end method

.method private stopWithError(ILjava/lang/Throwable;)V
    .locals 2

    .line 253
    iget-object v0, p0, Landroidx/camera/video/Recording;->mCloseGuard:Landroidx/camera/core/impl/utils/CloseGuardHelper;

    invoke-virtual {v0}, Landroidx/camera/core/impl/utils/CloseGuardHelper;->close()V

    .line 254
    iget-object v0, p0, Landroidx/camera/video/Recording;->mIsClosed:Ljava/util/concurrent/atomic/AtomicBoolean;

    const/4 v1, 0x1

    invoke-virtual {v0, v1}, Ljava/util/concurrent/atomic/AtomicBoolean;->getAndSet(Z)Z

    move-result v0

    if-eqz v0, :cond_0

    return-void

    .line 257
    :cond_0
    iget-object v0, p0, Landroidx/camera/video/Recording;->mRecorder:Landroidx/camera/video/Recorder;

    invoke-virtual {v0, p0, p1, p2}, Landroidx/camera/video/Recorder;->stop(Landroidx/camera/video/Recording;ILjava/lang/Throwable;)V

    return-void
.end method


# virtual methods
.method public close()V
    .locals 2

    const/4 v0, 0x0

    const/4 v1, 0x0

    .line 215
    invoke-direct {p0, v0, v1}, Landroidx/camera/video/Recording;->stopWithError(ILjava/lang/Throwable;)V

    return-void
.end method

.method protected finalize()V
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Throwable;
        }
    .end annotation

    .line 222
    :try_start_0
    iget-object v0, p0, Landroidx/camera/video/Recording;->mCloseGuard:Landroidx/camera/core/impl/utils/CloseGuardHelper;

    invoke-virtual {v0}, Landroidx/camera/core/impl/utils/CloseGuardHelper;->warnIfOpen()V

    .line 223
    new-instance v0, Ljava/lang/RuntimeException;

    const-string v1, "Recording stopped due to being garbage collected."

    invoke-direct {v0, v1}, Ljava/lang/RuntimeException;-><init>(Ljava/lang/String;)V

    const/16 v1, 0xa

    invoke-direct {p0, v1, v0}, Landroidx/camera/video/Recording;->stopWithError(ILjava/lang/Throwable;)V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 226
    invoke-super {p0}, Ljava/lang/Object;->finalize()V

    return-void

    :catchall_0
    move-exception v0

    invoke-super {p0}, Ljava/lang/Object;->finalize()V

    .line 227
    throw v0
.end method

.method getOutputOptions()Landroidx/camera/video/OutputOptions;
    .locals 1

    .line 113
    iget-object v0, p0, Landroidx/camera/video/Recording;->mOutputOptions:Landroidx/camera/video/OutputOptions;

    return-object v0
.end method

.method getRecordingId()J
    .locals 2

    .line 232
    iget-wide v0, p0, Landroidx/camera/video/Recording;->mRecordingId:J

    return-wide v0
.end method

.method public isClosed()Z
    .locals 1

    .line 248
    iget-object v0, p0, Landroidx/camera/video/Recording;->mIsClosed:Ljava/util/concurrent/atomic/AtomicBoolean;

    invoke-virtual {v0}, Ljava/util/concurrent/atomic/AtomicBoolean;->get()Z

    move-result v0

    return v0
.end method

.method public isPersistent()Z
    .locals 1

    .line 127
    iget-boolean v0, p0, Landroidx/camera/video/Recording;->mIsPersistent:Z

    return v0
.end method

.method public mute(Z)V
    .locals 1

    .line 191
    iget-object v0, p0, Landroidx/camera/video/Recording;->mIsClosed:Ljava/util/concurrent/atomic/AtomicBoolean;

    invoke-virtual {v0}, Ljava/util/concurrent/atomic/AtomicBoolean;->get()Z

    move-result v0

    if-nez v0, :cond_0

    .line 194
    iget-object v0, p0, Landroidx/camera/video/Recording;->mRecorder:Landroidx/camera/video/Recorder;

    invoke-virtual {v0, p0, p1}, Landroidx/camera/video/Recorder;->mute(Landroidx/camera/video/Recording;Z)V

    return-void

    .line 192
    :cond_0
    new-instance p1, Ljava/lang/IllegalStateException;

    const-string v0, "The recording has been stopped."

    invoke-direct {p1, v0}, Ljava/lang/IllegalStateException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method public pause()V
    .locals 2

    .line 144
    iget-object v0, p0, Landroidx/camera/video/Recording;->mIsClosed:Ljava/util/concurrent/atomic/AtomicBoolean;

    invoke-virtual {v0}, Ljava/util/concurrent/atomic/AtomicBoolean;->get()Z

    move-result v0

    if-nez v0, :cond_0

    .line 147
    iget-object v0, p0, Landroidx/camera/video/Recording;->mRecorder:Landroidx/camera/video/Recorder;

    invoke-virtual {v0, p0}, Landroidx/camera/video/Recorder;->pause(Landroidx/camera/video/Recording;)V

    return-void

    .line 145
    :cond_0
    new-instance v0, Ljava/lang/IllegalStateException;

    const-string v1, "The recording has been stopped."

    invoke-direct {v0, v1}, Ljava/lang/IllegalStateException;-><init>(Ljava/lang/String;)V

    throw v0
.end method

.method public resume()V
    .locals 2

    .line 163
    iget-object v0, p0, Landroidx/camera/video/Recording;->mIsClosed:Ljava/util/concurrent/atomic/AtomicBoolean;

    invoke-virtual {v0}, Ljava/util/concurrent/atomic/AtomicBoolean;->get()Z

    move-result v0

    if-nez v0, :cond_0

    .line 166
    iget-object v0, p0, Landroidx/camera/video/Recording;->mRecorder:Landroidx/camera/video/Recorder;

    invoke-virtual {v0, p0}, Landroidx/camera/video/Recorder;->resume(Landroidx/camera/video/Recording;)V

    return-void

    .line 164
    :cond_0
    new-instance v0, Ljava/lang/IllegalStateException;

    const-string v1, "The recording has been stopped."

    invoke-direct {v0, v1}, Ljava/lang/IllegalStateException;-><init>(Ljava/lang/String;)V

    throw v0
.end method

.method public stop()V
    .locals 0

    .line 175
    invoke-virtual {p0}, Landroidx/camera/video/Recording;->close()V

    return-void
.end method

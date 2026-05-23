.class final Landroidx/camera/video/VideoEncoderSession;
.super Ljava/lang/Object;
.source "VideoEncoderSession.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/video/VideoEncoderSession$VideoEncoderState;
    }
.end annotation


# static fields
.field private static final TAG:Ljava/lang/String; = "VideoEncoderSession"


# instance fields
.field private mActiveSurface:Landroid/view/Surface;

.field private final mExecutor:Ljava/util/concurrent/Executor;

.field private mOnSurfaceUpdateExecutor:Ljava/util/concurrent/Executor;

.field private mOnSurfaceUpdateListener:Landroidx/camera/video/internal/encoder/Encoder$SurfaceInput$OnSurfaceUpdateListener;

.field private mReadyToReleaseCompleter:Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer<",
            "Landroidx/camera/video/internal/encoder/Encoder;",
            ">;"
        }
    .end annotation
.end field

.field private mReadyToReleaseFuture:Lcom/google/common/util/concurrent/ListenableFuture;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Lcom/google/common/util/concurrent/ListenableFuture<",
            "Landroidx/camera/video/internal/encoder/Encoder;",
            ">;"
        }
    .end annotation
.end field

.field private mReleasedCompleter:Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer<",
            "Ljava/lang/Void;",
            ">;"
        }
    .end annotation
.end field

.field private mReleasedFuture:Lcom/google/common/util/concurrent/ListenableFuture;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Lcom/google/common/util/concurrent/ListenableFuture<",
            "Ljava/lang/Void;",
            ">;"
        }
    .end annotation
.end field

.field private final mSequentialExecutor:Ljava/util/concurrent/Executor;

.field private mSurfaceRequest:Landroidx/camera/core/SurfaceRequest;

.field private mVideoEncoder:Landroidx/camera/video/internal/encoder/Encoder;

.field private final mVideoEncoderFactory:Landroidx/camera/video/internal/encoder/EncoderFactory;

.field private mVideoEncoderState:Landroidx/camera/video/VideoEncoderSession$VideoEncoderState;


# direct methods
.method public static synthetic $r8$lambda$7lkRtlCH6iVomLgyTLAQT9jSafA(Landroidx/camera/video/VideoEncoderSession;Landroidx/camera/core/SurfaceRequest$Result;)V
    .locals 0

    invoke-direct {p0, p1}, Landroidx/camera/video/VideoEncoderSession;->onSurfaceRequestComplete(Landroidx/camera/core/SurfaceRequest$Result;)V

    return-void
.end method

.method constructor <init>(Landroidx/camera/video/internal/encoder/EncoderFactory;Ljava/util/concurrent/Executor;Ljava/util/concurrent/Executor;)V
    .locals 3

    .line 101
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const/4 v0, 0x0

    .line 87
    iput-object v0, p0, Landroidx/camera/video/VideoEncoderSession;->mVideoEncoder:Landroidx/camera/video/internal/encoder/Encoder;

    .line 88
    iput-object v0, p0, Landroidx/camera/video/VideoEncoderSession;->mActiveSurface:Landroid/view/Surface;

    .line 89
    iput-object v0, p0, Landroidx/camera/video/VideoEncoderSession;->mSurfaceRequest:Landroidx/camera/core/SurfaceRequest;

    .line 90
    iput-object v0, p0, Landroidx/camera/video/VideoEncoderSession;->mOnSurfaceUpdateExecutor:Ljava/util/concurrent/Executor;

    .line 91
    iput-object v0, p0, Landroidx/camera/video/VideoEncoderSession;->mOnSurfaceUpdateListener:Landroidx/camera/video/internal/encoder/Encoder$SurfaceInput$OnSurfaceUpdateListener;

    .line 92
    sget-object v1, Landroidx/camera/video/VideoEncoderSession$VideoEncoderState;->NOT_INITIALIZED:Landroidx/camera/video/VideoEncoderSession$VideoEncoderState;

    iput-object v1, p0, Landroidx/camera/video/VideoEncoderSession;->mVideoEncoderState:Landroidx/camera/video/VideoEncoderSession$VideoEncoderState;

    .line 93
    new-instance v1, Ljava/lang/IllegalStateException;

    const-string v2, "Cannot close the encoder before configuring."

    invoke-direct {v1, v2}, Ljava/lang/IllegalStateException;-><init>(Ljava/lang/String;)V

    invoke-static {v1}, Landroidx/camera/core/impl/utils/futures/Futures;->immediateFailedFuture(Ljava/lang/Throwable;)Lcom/google/common/util/concurrent/ListenableFuture;

    move-result-object v1

    iput-object v1, p0, Landroidx/camera/video/VideoEncoderSession;->mReleasedFuture:Lcom/google/common/util/concurrent/ListenableFuture;

    .line 95
    iput-object v0, p0, Landroidx/camera/video/VideoEncoderSession;->mReleasedCompleter:Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;

    .line 96
    new-instance v1, Ljava/lang/IllegalStateException;

    invoke-direct {v1, v2}, Ljava/lang/IllegalStateException;-><init>(Ljava/lang/String;)V

    invoke-static {v1}, Landroidx/camera/core/impl/utils/futures/Futures;->immediateFailedFuture(Ljava/lang/Throwable;)Lcom/google/common/util/concurrent/ListenableFuture;

    move-result-object v1

    iput-object v1, p0, Landroidx/camera/video/VideoEncoderSession;->mReadyToReleaseFuture:Lcom/google/common/util/concurrent/ListenableFuture;

    .line 98
    iput-object v0, p0, Landroidx/camera/video/VideoEncoderSession;->mReadyToReleaseCompleter:Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;

    .line 102
    iput-object p3, p0, Landroidx/camera/video/VideoEncoderSession;->mExecutor:Ljava/util/concurrent/Executor;

    .line 103
    iput-object p2, p0, Landroidx/camera/video/VideoEncoderSession;->mSequentialExecutor:Ljava/util/concurrent/Executor;

    .line 104
    iput-object p1, p0, Landroidx/camera/video/VideoEncoderSession;->mVideoEncoderFactory:Landroidx/camera/video/internal/encoder/EncoderFactory;

    return-void
.end method

.method private closeInternal()V
    .locals 3

    .line 258
    sget-object v0, Landroidx/camera/video/VideoEncoderSession$2;->$SwitchMap$androidx$camera$video$VideoEncoderSession$VideoEncoderState:[I

    iget-object v1, p0, Landroidx/camera/video/VideoEncoderSession;->mVideoEncoderState:Landroidx/camera/video/VideoEncoderSession$VideoEncoderState;

    invoke-virtual {v1}, Landroidx/camera/video/VideoEncoderSession$VideoEncoderState;->ordinal()I

    move-result v1

    aget v0, v0, v1

    const/4 v1, 0x1

    if-eq v0, v1, :cond_2

    const/4 v1, 0x2

    if-eq v0, v1, :cond_2

    const/4 v1, 0x3

    const-string v2, "VideoEncoderSession"

    if-eq v0, v1, :cond_1

    const/4 v1, 0x4

    if-eq v0, v1, :cond_1

    const/4 v1, 0x5

    if-ne v0, v1, :cond_0

    .line 272
    const-string v0, "closeInternal in RELEASED state, No-op"

    invoke-static {v2, v0}, Landroidx/camera/core/Logger;->d(Ljava/lang/String;Ljava/lang/String;)V

    goto :goto_0

    .line 275
    :cond_0
    new-instance v0, Ljava/lang/IllegalStateException;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "State "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v2, p0, Landroidx/camera/video/VideoEncoderSession;->mVideoEncoderState:Landroidx/camera/video/VideoEncoderSession$VideoEncoderState;

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v1

    const-string v2, " is not handled"

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-direct {v0, v1}, Ljava/lang/IllegalStateException;-><init>(Ljava/lang/String;)V

    throw v0

    .line 268
    :cond_1
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "closeInternal in "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v1, p0, Landroidx/camera/video/VideoEncoderSession;->mVideoEncoderState:Landroidx/camera/video/VideoEncoderSession$VideoEncoderState;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, " state"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-static {v2, v0}, Landroidx/camera/core/Logger;->d(Ljava/lang/String;Ljava/lang/String;)V

    .line 269
    sget-object v0, Landroidx/camera/video/VideoEncoderSession$VideoEncoderState;->PENDING_RELEASE:Landroidx/camera/video/VideoEncoderSession$VideoEncoderState;

    iput-object v0, p0, Landroidx/camera/video/VideoEncoderSession;->mVideoEncoderState:Landroidx/camera/video/VideoEncoderSession$VideoEncoderState;

    goto :goto_0

    .line 263
    :cond_2
    invoke-virtual {p0}, Landroidx/camera/video/VideoEncoderSession;->terminateNow()V

    :goto_0
    return-void
.end method

.method private configureVideoEncoderInternal(Landroidx/camera/core/SurfaceRequest;Landroidx/camera/core/impl/Timebase;Landroidx/camera/video/internal/VideoValidatedEncoderProfilesProxy;Landroidx/camera/video/MediaSpec;Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;)V
    .locals 6
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroidx/camera/core/SurfaceRequest;",
            "Landroidx/camera/core/impl/Timebase;",
            "Landroidx/camera/video/internal/VideoValidatedEncoderProfilesProxy;",
            "Landroidx/camera/video/MediaSpec;",
            "Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer<",
            "Landroidx/camera/video/internal/encoder/Encoder;",
            ">;)V"
        }
    .end annotation

    .line 292
    invoke-virtual {p1}, Landroidx/camera/core/SurfaceRequest;->getDynamicRange()Landroidx/camera/core/DynamicRange;

    move-result-object v4

    .line 293
    invoke-static {p4, v4, p3}, Landroidx/camera/video/internal/config/VideoConfigUtil;->resolveVideoMimeInfo(Landroidx/camera/video/MediaSpec;Landroidx/camera/core/DynamicRange;Landroidx/camera/video/internal/VideoValidatedEncoderProfilesProxy;)Landroidx/camera/video/internal/config/VideoMimeInfo;

    move-result-object v0

    .line 302
    invoke-virtual {p4}, Landroidx/camera/video/MediaSpec;->getVideoSpec()Landroidx/camera/video/VideoSpec;

    move-result-object v2

    .line 303
    invoke-virtual {p1}, Landroidx/camera/core/SurfaceRequest;->getResolution()Landroid/util/Size;

    move-result-object v3

    .line 305
    invoke-virtual {p1}, Landroidx/camera/core/SurfaceRequest;->getExpectedFrameRate()Landroid/util/Range;

    move-result-object v5

    move-object v1, p2

    .line 299
    invoke-static/range {v0 .. v5}, Landroidx/camera/video/internal/config/VideoConfigUtil;->resolveVideoEncoderConfig(Landroidx/camera/video/internal/config/VideoMimeInfo;Landroidx/camera/core/impl/Timebase;Landroidx/camera/video/VideoSpec;Landroid/util/Size;Landroidx/camera/core/DynamicRange;Landroid/util/Range;)Landroidx/camera/video/internal/encoder/VideoEncoderConfig;

    move-result-object p2

    .line 308
    :try_start_0
    iget-object p3, p0, Landroidx/camera/video/VideoEncoderSession;->mVideoEncoderFactory:Landroidx/camera/video/internal/encoder/EncoderFactory;

    iget-object p4, p0, Landroidx/camera/video/VideoEncoderSession;->mExecutor:Ljava/util/concurrent/Executor;

    invoke-interface {p3, p4, p2}, Landroidx/camera/video/internal/encoder/EncoderFactory;->createEncoder(Ljava/util/concurrent/Executor;Landroidx/camera/video/internal/encoder/EncoderConfig;)Landroidx/camera/video/internal/encoder/Encoder;

    move-result-object p2

    iput-object p2, p0, Landroidx/camera/video/VideoEncoderSession;->mVideoEncoder:Landroidx/camera/video/internal/encoder/Encoder;
    :try_end_0
    .catch Landroidx/camera/video/internal/encoder/InvalidConfigException; {:try_start_0 .. :try_end_0} :catch_0

    .line 315
    invoke-interface {p2}, Landroidx/camera/video/internal/encoder/Encoder;->getInput()Landroidx/camera/video/internal/encoder/Encoder$EncoderInput;

    move-result-object p2

    .line 316
    instance-of p3, p2, Landroidx/camera/video/internal/encoder/Encoder$SurfaceInput;

    if-nez p3, :cond_0

    .line 317
    new-instance p1, Ljava/lang/AssertionError;

    const-string p2, "The EncoderInput of video isn\'t a SurfaceInput."

    invoke-direct {p1, p2}, Ljava/lang/AssertionError;-><init>(Ljava/lang/Object;)V

    invoke-virtual {p5, p1}, Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;->setException(Ljava/lang/Throwable;)Z

    return-void

    .line 321
    :cond_0
    check-cast p2, Landroidx/camera/video/internal/encoder/Encoder$SurfaceInput;

    iget-object p3, p0, Landroidx/camera/video/VideoEncoderSession;->mSequentialExecutor:Ljava/util/concurrent/Executor;

    new-instance p4, Landroidx/camera/video/VideoEncoderSession$$ExternalSyntheticLambda0;

    invoke-direct {p4, p0, p5, p1}, Landroidx/camera/video/VideoEncoderSession$$ExternalSyntheticLambda0;-><init>(Landroidx/camera/video/VideoEncoderSession;Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;Landroidx/camera/core/SurfaceRequest;)V

    invoke-interface {p2, p3, p4}, Landroidx/camera/video/internal/encoder/Encoder$SurfaceInput;->setOnSurfaceUpdateListener(Ljava/util/concurrent/Executor;Landroidx/camera/video/internal/encoder/Encoder$SurfaceInput$OnSurfaceUpdateListener;)V

    return-void

    :catch_0
    move-exception p1

    .line 310
    const-string p2, "VideoEncoderSession"

    const-string p3, "Unable to initialize video encoder."

    invoke-static {p2, p3, p1}, Landroidx/camera/core/Logger;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    .line 311
    invoke-virtual {p5, p1}, Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;->setException(Ljava/lang/Throwable;)Z

    return-void
.end method

.method private onSurfaceRequestComplete(Landroidx/camera/core/SurfaceRequest$Result;)V
    .locals 2

    .line 366
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "Surface can be closed: "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p1}, Landroidx/camera/core/SurfaceRequest$Result;->getSurface()Landroid/view/Surface;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/Object;->hashCode()I

    move-result v1

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    const-string v1, "VideoEncoderSession"

    invoke-static {v1, v0}, Landroidx/camera/core/Logger;->d(Ljava/lang/String;Ljava/lang/String;)V

    .line 367
    invoke-virtual {p1}, Landroidx/camera/core/SurfaceRequest$Result;->getSurface()Landroid/view/Surface;

    move-result-object p1

    .line 368
    iget-object v0, p0, Landroidx/camera/video/VideoEncoderSession;->mActiveSurface:Landroid/view/Surface;

    if-ne p1, v0, :cond_0

    const/4 p1, 0x0

    .line 369
    iput-object p1, p0, Landroidx/camera/video/VideoEncoderSession;->mActiveSurface:Landroid/view/Surface;

    .line 370
    iget-object p1, p0, Landroidx/camera/video/VideoEncoderSession;->mReadyToReleaseCompleter:Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;

    iget-object v0, p0, Landroidx/camera/video/VideoEncoderSession;->mVideoEncoder:Landroidx/camera/video/internal/encoder/Encoder;

    invoke-virtual {p1, v0}, Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;->set(Ljava/lang/Object;)Z

    .line 371
    invoke-direct {p0}, Landroidx/camera/video/VideoEncoderSession;->closeInternal()V

    goto :goto_0

    .line 374
    :cond_0
    invoke-virtual {p1}, Landroid/view/Surface;->release()V

    :goto_0
    return-void
.end method


# virtual methods
.method configure(Landroidx/camera/core/SurfaceRequest;Landroidx/camera/core/impl/Timebase;Landroidx/camera/video/MediaSpec;Landroidx/camera/video/internal/VideoValidatedEncoderProfilesProxy;)Lcom/google/common/util/concurrent/ListenableFuture;
    .locals 7
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroidx/camera/core/SurfaceRequest;",
            "Landroidx/camera/core/impl/Timebase;",
            "Landroidx/camera/video/MediaSpec;",
            "Landroidx/camera/video/internal/VideoValidatedEncoderProfilesProxy;",
            ")",
            "Lcom/google/common/util/concurrent/ListenableFuture<",
            "Landroidx/camera/video/internal/encoder/Encoder;",
            ">;"
        }
    .end annotation

    .line 112
    sget-object v0, Landroidx/camera/video/VideoEncoderSession$2;->$SwitchMap$androidx$camera$video$VideoEncoderSession$VideoEncoderState:[I

    iget-object v1, p0, Landroidx/camera/video/VideoEncoderSession;->mVideoEncoderState:Landroidx/camera/video/VideoEncoderSession$VideoEncoderState;

    invoke-virtual {v1}, Landroidx/camera/video/VideoEncoderSession$VideoEncoderState;->ordinal()I

    move-result v1

    aget v0, v0, v1

    const/4 v1, 0x1

    if-eq v0, v1, :cond_0

    .line 157
    new-instance p1, Ljava/lang/IllegalStateException;

    new-instance p2, Ljava/lang/StringBuilder;

    const-string p3, "configure() shouldn\'t be called in "

    invoke-direct {p2, p3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object p3, p0, Landroidx/camera/video/VideoEncoderSession;->mVideoEncoderState:Landroidx/camera/video/VideoEncoderSession$VideoEncoderState;

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/IllegalStateException;-><init>(Ljava/lang/String;)V

    invoke-static {p1}, Landroidx/camera/core/impl/utils/futures/Futures;->immediateFailedFuture(Ljava/lang/Throwable;)Lcom/google/common/util/concurrent/ListenableFuture;

    move-result-object p1

    return-object p1

    .line 114
    :cond_0
    sget-object v0, Landroidx/camera/video/VideoEncoderSession$VideoEncoderState;->INITIALIZING:Landroidx/camera/video/VideoEncoderSession$VideoEncoderState;

    iput-object v0, p0, Landroidx/camera/video/VideoEncoderSession;->mVideoEncoderState:Landroidx/camera/video/VideoEncoderSession$VideoEncoderState;

    .line 116
    iput-object p1, p0, Landroidx/camera/video/VideoEncoderSession;->mSurfaceRequest:Landroidx/camera/core/SurfaceRequest;

    .line 117
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "Create VideoEncoderSession: "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    const-string v1, "VideoEncoderSession"

    invoke-static {v1, v0}, Landroidx/camera/core/Logger;->d(Ljava/lang/String;Ljava/lang/String;)V

    .line 118
    new-instance v0, Landroidx/camera/video/VideoEncoderSession$$ExternalSyntheticLambda2;

    invoke-direct {v0, p0}, Landroidx/camera/video/VideoEncoderSession$$ExternalSyntheticLambda2;-><init>(Landroidx/camera/video/VideoEncoderSession;)V

    invoke-static {v0}, Landroidx/concurrent/futures/CallbackToFutureAdapter;->getFuture(Landroidx/concurrent/futures/CallbackToFutureAdapter$Resolver;)Lcom/google/common/util/concurrent/ListenableFuture;

    move-result-object v0

    iput-object v0, p0, Landroidx/camera/video/VideoEncoderSession;->mReleasedFuture:Lcom/google/common/util/concurrent/ListenableFuture;

    .line 122
    new-instance v0, Landroidx/camera/video/VideoEncoderSession$$ExternalSyntheticLambda3;

    invoke-direct {v0, p0}, Landroidx/camera/video/VideoEncoderSession$$ExternalSyntheticLambda3;-><init>(Landroidx/camera/video/VideoEncoderSession;)V

    invoke-static {v0}, Landroidx/concurrent/futures/CallbackToFutureAdapter;->getFuture(Landroidx/concurrent/futures/CallbackToFutureAdapter$Resolver;)Lcom/google/common/util/concurrent/ListenableFuture;

    move-result-object v0

    iput-object v0, p0, Landroidx/camera/video/VideoEncoderSession;->mReadyToReleaseFuture:Lcom/google/common/util/concurrent/ListenableFuture;

    .line 127
    new-instance v0, Landroidx/camera/video/VideoEncoderSession$$ExternalSyntheticLambda4;

    move-object v1, v0

    move-object v2, p0

    move-object v3, p1

    move-object v4, p2

    move-object v5, p4

    move-object v6, p3

    invoke-direct/range {v1 .. v6}, Landroidx/camera/video/VideoEncoderSession$$ExternalSyntheticLambda4;-><init>(Landroidx/camera/video/VideoEncoderSession;Landroidx/camera/core/SurfaceRequest;Landroidx/camera/core/impl/Timebase;Landroidx/camera/video/internal/VideoValidatedEncoderProfilesProxy;Landroidx/camera/video/MediaSpec;)V

    invoke-static {v0}, Landroidx/concurrent/futures/CallbackToFutureAdapter;->getFuture(Landroidx/concurrent/futures/CallbackToFutureAdapter$Resolver;)Lcom/google/common/util/concurrent/ListenableFuture;

    move-result-object p1

    .line 134
    new-instance p2, Landroidx/camera/video/VideoEncoderSession$1;

    invoke-direct {p2, p0}, Landroidx/camera/video/VideoEncoderSession$1;-><init>(Landroidx/camera/video/VideoEncoderSession;)V

    iget-object p3, p0, Landroidx/camera/video/VideoEncoderSession;->mSequentialExecutor:Ljava/util/concurrent/Executor;

    invoke-static {p1, p2, p3}, Landroidx/camera/core/impl/utils/futures/Futures;->addCallback(Lcom/google/common/util/concurrent/ListenableFuture;Landroidx/camera/core/impl/utils/futures/FutureCallback;Ljava/util/concurrent/Executor;)V

    .line 147
    invoke-static {p1}, Landroidx/camera/core/impl/utils/futures/Futures;->nonCancellationPropagating(Lcom/google/common/util/concurrent/ListenableFuture;)Lcom/google/common/util/concurrent/ListenableFuture;

    move-result-object p1

    return-object p1
.end method

.method getActiveSurface()Landroid/view/Surface;
    .locals 2

    .line 244
    iget-object v0, p0, Landroidx/camera/video/VideoEncoderSession;->mVideoEncoderState:Landroidx/camera/video/VideoEncoderSession$VideoEncoderState;

    sget-object v1, Landroidx/camera/video/VideoEncoderSession$VideoEncoderState;->READY:Landroidx/camera/video/VideoEncoderSession$VideoEncoderState;

    if-eq v0, v1, :cond_0

    const/4 v0, 0x0

    return-object v0

    .line 247
    :cond_0
    iget-object v0, p0, Landroidx/camera/video/VideoEncoderSession;->mActiveSurface:Landroid/view/Surface;

    return-object v0
.end method

.method getReadyToReleaseFuture()Lcom/google/common/util/concurrent/ListenableFuture;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Lcom/google/common/util/concurrent/ListenableFuture<",
            "Landroidx/camera/video/internal/encoder/Encoder;",
            ">;"
        }
    .end annotation

    .line 186
    iget-object v0, p0, Landroidx/camera/video/VideoEncoderSession;->mReadyToReleaseFuture:Lcom/google/common/util/concurrent/ListenableFuture;

    invoke-static {v0}, Landroidx/camera/core/impl/utils/futures/Futures;->nonCancellationPropagating(Lcom/google/common/util/concurrent/ListenableFuture;)Lcom/google/common/util/concurrent/ListenableFuture;

    move-result-object v0

    return-object v0
.end method

.method getVideoEncoder()Landroidx/camera/video/internal/encoder/Encoder;
    .locals 1

    .line 253
    iget-object v0, p0, Landroidx/camera/video/VideoEncoderSession;->mVideoEncoder:Landroidx/camera/video/internal/encoder/Encoder;

    return-object v0
.end method

.method isConfiguredSurfaceRequest(Landroidx/camera/core/SurfaceRequest;)Z
    .locals 4

    .line 164
    sget-object v0, Landroidx/camera/video/VideoEncoderSession$2;->$SwitchMap$androidx$camera$video$VideoEncoderSession$VideoEncoderState:[I

    iget-object v1, p0, Landroidx/camera/video/VideoEncoderSession;->mVideoEncoderState:Landroidx/camera/video/VideoEncoderSession$VideoEncoderState;

    invoke-virtual {v1}, Landroidx/camera/video/VideoEncoderSession$VideoEncoderState;->ordinal()I

    move-result v1

    aget v0, v0, v1

    const/4 v1, 0x0

    const/4 v2, 0x1

    if-eq v0, v2, :cond_2

    const/4 v3, 0x2

    if-eq v0, v3, :cond_1

    const/4 v3, 0x3

    if-eq v0, v3, :cond_1

    const/4 p1, 0x4

    if-eq v0, p1, :cond_2

    const/4 p1, 0x5

    if-ne v0, p1, :cond_0

    goto :goto_0

    .line 176
    :cond_0
    new-instance p1, Ljava/lang/IllegalStateException;

    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "State "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v1, p0, Landroidx/camera/video/VideoEncoderSession;->mVideoEncoderState:Landroidx/camera/video/VideoEncoderSession$VideoEncoderState;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, " is not handled"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-direct {p1, v0}, Ljava/lang/IllegalStateException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 168
    :cond_1
    iget-object v0, p0, Landroidx/camera/video/VideoEncoderSession;->mSurfaceRequest:Landroidx/camera/core/SurfaceRequest;

    if-ne v0, p1, :cond_2

    move v1, v2

    :cond_2
    :goto_0
    return v1
.end method

.method synthetic lambda$configure$0$androidx-camera-video-VideoEncoderSession(Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;)Ljava/lang/Object;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Exception;
        }
    .end annotation

    .line 119
    iput-object p1, p0, Landroidx/camera/video/VideoEncoderSession;->mReleasedCompleter:Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;

    .line 120
    new-instance p1, Ljava/lang/StringBuilder;

    const-string v0, "ReleasedFuture "

    invoke-direct {p1, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p1, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    return-object p1
.end method

.method synthetic lambda$configure$1$androidx-camera-video-VideoEncoderSession(Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;)Ljava/lang/Object;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Exception;
        }
    .end annotation

    .line 124
    iput-object p1, p0, Landroidx/camera/video/VideoEncoderSession;->mReadyToReleaseCompleter:Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;

    .line 125
    new-instance p1, Ljava/lang/StringBuilder;

    const-string v0, "ReadyToReleaseFuture "

    invoke-direct {p1, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p1, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    return-object p1
.end method

.method synthetic lambda$configure$2$androidx-camera-video-VideoEncoderSession(Landroidx/camera/core/SurfaceRequest;Landroidx/camera/core/impl/Timebase;Landroidx/camera/video/internal/VideoValidatedEncoderProfilesProxy;Landroidx/camera/video/MediaSpec;Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;)Ljava/lang/Object;
    .locals 0
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Exception;
        }
    .end annotation

    .line 129
    invoke-direct/range {p0 .. p5}, Landroidx/camera/video/VideoEncoderSession;->configureVideoEncoderInternal(Landroidx/camera/core/SurfaceRequest;Landroidx/camera/core/impl/Timebase;Landroidx/camera/video/internal/VideoValidatedEncoderProfilesProxy;Landroidx/camera/video/MediaSpec;Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;)V

    .line 132
    new-instance p1, Ljava/lang/StringBuilder;

    const-string p2, "ConfigureVideoEncoderFuture "

    invoke-direct {p1, p2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p1, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    return-object p1
.end method

.method synthetic lambda$configureVideoEncoderInternal$4$androidx-camera-video-VideoEncoderSession(Landroid/view/Surface;)V
    .locals 1

    .line 353
    iget-object v0, p0, Landroidx/camera/video/VideoEncoderSession;->mOnSurfaceUpdateListener:Landroidx/camera/video/internal/encoder/Encoder$SurfaceInput$OnSurfaceUpdateListener;

    invoke-interface {v0, p1}, Landroidx/camera/video/internal/encoder/Encoder$SurfaceInput$OnSurfaceUpdateListener;->onSurfaceUpdate(Landroid/view/Surface;)V

    return-void
.end method

.method synthetic lambda$configureVideoEncoderInternal$5$androidx-camera-video-VideoEncoderSession(Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;Landroidx/camera/core/SurfaceRequest;Landroid/view/Surface;)V
    .locals 4

    .line 323
    sget-object v0, Landroidx/camera/video/VideoEncoderSession$2;->$SwitchMap$androidx$camera$video$VideoEncoderSession$VideoEncoderState:[I

    iget-object v1, p0, Landroidx/camera/video/VideoEncoderSession;->mVideoEncoderState:Landroidx/camera/video/VideoEncoderSession$VideoEncoderState;

    invoke-virtual {v1}, Landroidx/camera/video/VideoEncoderSession$VideoEncoderState;->ordinal()I

    move-result v1

    aget v0, v0, v1

    const/4 v1, 0x1

    const/4 v2, 0x0

    const-string v3, "VideoEncoderSession"

    if-eq v0, v1, :cond_5

    const/4 v1, 0x2

    if-eq v0, v1, :cond_3

    const/4 p2, 0x3

    if-eq v0, p2, :cond_1

    const/4 p2, 0x4

    if-eq v0, p2, :cond_5

    const/4 p2, 0x5

    if-ne v0, p2, :cond_0

    goto/16 :goto_0

    .line 358
    :cond_0
    new-instance p1, Ljava/lang/IllegalStateException;

    new-instance p2, Ljava/lang/StringBuilder;

    const-string p3, "State "

    invoke-direct {p2, p3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object p3, p0, Landroidx/camera/video/VideoEncoderSession;->mVideoEncoderState:Landroidx/camera/video/VideoEncoderSession$VideoEncoderState;

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string p3, " is not handled"

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/IllegalStateException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 350
    :cond_1
    iget-object p1, p0, Landroidx/camera/video/VideoEncoderSession;->mOnSurfaceUpdateListener:Landroidx/camera/video/internal/encoder/Encoder$SurfaceInput$OnSurfaceUpdateListener;

    if-eqz p1, :cond_2

    iget-object p1, p0, Landroidx/camera/video/VideoEncoderSession;->mOnSurfaceUpdateExecutor:Ljava/util/concurrent/Executor;

    if-eqz p1, :cond_2

    .line 352
    new-instance p2, Landroidx/camera/video/VideoEncoderSession$$ExternalSyntheticLambda6;

    invoke-direct {p2, p0, p3}, Landroidx/camera/video/VideoEncoderSession$$ExternalSyntheticLambda6;-><init>(Landroidx/camera/video/VideoEncoderSession;Landroid/view/Surface;)V

    invoke-interface {p1, p2}, Ljava/util/concurrent/Executor;->execute(Ljava/lang/Runnable;)V

    .line 355
    :cond_2
    new-instance p1, Ljava/lang/StringBuilder;

    const-string p2, "Surface is updated in READY state: "

    invoke-direct {p1, p2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p1, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-static {v3, p1}, Landroidx/camera/core/Logger;->w(Ljava/lang/String;Ljava/lang/String;)V

    goto :goto_1

    .line 333
    :cond_3
    invoke-virtual {p2}, Landroidx/camera/core/SurfaceRequest;->isServiced()Z

    move-result v0

    if-eqz v0, :cond_4

    .line 334
    new-instance p3, Ljava/lang/StringBuilder;

    const-string v0, "Not provide surface, "

    invoke-direct {p3, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    const-string v0, "EMPTY"

    .line 335
    invoke-static {p2, v0}, Ljava/util/Objects;->toString(Ljava/lang/Object;Ljava/lang/String;)Ljava/lang/String;

    move-result-object p2

    invoke-virtual {p3, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string p3, " is already serviced."

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    .line 334
    invoke-static {v3, p2}, Landroidx/camera/core/Logger;->d(Ljava/lang/String;Ljava/lang/String;)V

    .line 337
    invoke-virtual {p1, v2}, Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;->set(Ljava/lang/Object;)Z

    .line 338
    invoke-direct {p0}, Landroidx/camera/video/VideoEncoderSession;->closeInternal()V

    goto :goto_1

    .line 342
    :cond_4
    iput-object p3, p0, Landroidx/camera/video/VideoEncoderSession;->mActiveSurface:Landroid/view/Surface;

    .line 343
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "provide surface: "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-static {v3, v0}, Landroidx/camera/core/Logger;->d(Ljava/lang/String;Ljava/lang/String;)V

    .line 344
    iget-object v0, p0, Landroidx/camera/video/VideoEncoderSession;->mSequentialExecutor:Ljava/util/concurrent/Executor;

    new-instance v1, Landroidx/camera/video/VideoEncoderSession$$ExternalSyntheticLambda5;

    invoke-direct {v1, p0}, Landroidx/camera/video/VideoEncoderSession$$ExternalSyntheticLambda5;-><init>(Landroidx/camera/video/VideoEncoderSession;)V

    invoke-virtual {p2, p3, v0, v1}, Landroidx/camera/core/SurfaceRequest;->provideSurface(Landroid/view/Surface;Ljava/util/concurrent/Executor;Landroidx/core/util/Consumer;)V

    .line 346
    sget-object p2, Landroidx/camera/video/VideoEncoderSession$VideoEncoderState;->READY:Landroidx/camera/video/VideoEncoderSession$VideoEncoderState;

    iput-object p2, p0, Landroidx/camera/video/VideoEncoderSession;->mVideoEncoderState:Landroidx/camera/video/VideoEncoderSession$VideoEncoderState;

    .line 347
    iget-object p2, p0, Landroidx/camera/video/VideoEncoderSession;->mVideoEncoder:Landroidx/camera/video/internal/encoder/Encoder;

    invoke-virtual {p1, p2}, Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;->set(Ljava/lang/Object;)Z

    goto :goto_1

    .line 329
    :cond_5
    :goto_0
    new-instance p2, Ljava/lang/StringBuilder;

    const-string p3, "Not provide surface in "

    invoke-direct {p2, p3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object p3, p0, Landroidx/camera/video/VideoEncoderSession;->mVideoEncoderState:Landroidx/camera/video/VideoEncoderSession$VideoEncoderState;

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-static {v3, p2}, Landroidx/camera/core/Logger;->d(Ljava/lang/String;Ljava/lang/String;)V

    .line 330
    invoke-virtual {p1, v2}, Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;->set(Ljava/lang/Object;)Z

    :goto_1
    return-void
.end method

.method synthetic lambda$terminateNow$3$androidx-camera-video-VideoEncoderSession()V
    .locals 2

    .line 229
    iget-object v0, p0, Landroidx/camera/video/VideoEncoderSession;->mReleasedCompleter:Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;

    const/4 v1, 0x0

    invoke-virtual {v0, v1}, Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;->set(Ljava/lang/Object;)Z

    return-void
.end method

.method setOnSurfaceUpdateListener(Ljava/util/concurrent/Executor;Landroidx/camera/video/internal/encoder/Encoder$SurfaceInput$OnSurfaceUpdateListener;)V
    .locals 0

    .line 282
    iput-object p1, p0, Landroidx/camera/video/VideoEncoderSession;->mOnSurfaceUpdateExecutor:Ljava/util/concurrent/Executor;

    .line 283
    iput-object p2, p0, Landroidx/camera/video/VideoEncoderSession;->mOnSurfaceUpdateListener:Landroidx/camera/video/internal/encoder/Encoder$SurfaceInput$OnSurfaceUpdateListener;

    return-void
.end method

.method signalTermination()Lcom/google/common/util/concurrent/ListenableFuture;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Lcom/google/common/util/concurrent/ListenableFuture<",
            "Ljava/lang/Void;",
            ">;"
        }
    .end annotation

    .line 203
    invoke-direct {p0}, Landroidx/camera/video/VideoEncoderSession;->closeInternal()V

    .line 204
    iget-object v0, p0, Landroidx/camera/video/VideoEncoderSession;->mReleasedFuture:Lcom/google/common/util/concurrent/ListenableFuture;

    invoke-static {v0}, Landroidx/camera/core/impl/utils/futures/Futures;->nonCancellationPropagating(Lcom/google/common/util/concurrent/ListenableFuture;)Lcom/google/common/util/concurrent/ListenableFuture;

    move-result-object v0

    return-object v0
.end method

.method terminateNow()V
    .locals 4

    .line 209
    sget-object v0, Landroidx/camera/video/VideoEncoderSession$2;->$SwitchMap$androidx$camera$video$VideoEncoderSession$VideoEncoderState:[I

    iget-object v1, p0, Landroidx/camera/video/VideoEncoderSession;->mVideoEncoderState:Landroidx/camera/video/VideoEncoderSession$VideoEncoderState;

    invoke-virtual {v1}, Landroidx/camera/video/VideoEncoderSession$VideoEncoderState;->ordinal()I

    move-result v1

    aget v0, v0, v1

    const/4 v1, 0x1

    if-eq v0, v1, :cond_3

    const/4 v1, 0x2

    const-string v2, "VideoEncoderSession"

    if-eq v0, v1, :cond_1

    const/4 v1, 0x3

    if-eq v0, v1, :cond_1

    const/4 v1, 0x4

    if-eq v0, v1, :cond_1

    const/4 v1, 0x5

    if-ne v0, v1, :cond_0

    .line 215
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "terminateNow in "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v1, p0, Landroidx/camera/video/VideoEncoderSession;->mVideoEncoderState:Landroidx/camera/video/VideoEncoderSession$VideoEncoderState;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", No-op"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-static {v2, v0}, Landroidx/camera/core/Logger;->d(Ljava/lang/String;Ljava/lang/String;)V

    return-void

    .line 237
    :cond_0
    new-instance v0, Ljava/lang/IllegalStateException;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "State "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v2, p0, Landroidx/camera/video/VideoEncoderSession;->mVideoEncoderState:Landroidx/camera/video/VideoEncoderSession$VideoEncoderState;

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v1

    const-string v2, " is not handled"

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-direct {v0, v1}, Ljava/lang/IllegalStateException;-><init>(Ljava/lang/String;)V

    throw v0

    .line 222
    :cond_1
    sget-object v0, Landroidx/camera/video/VideoEncoderSession$VideoEncoderState;->RELEASED:Landroidx/camera/video/VideoEncoderSession$VideoEncoderState;

    iput-object v0, p0, Landroidx/camera/video/VideoEncoderSession;->mVideoEncoderState:Landroidx/camera/video/VideoEncoderSession$VideoEncoderState;

    .line 223
    iget-object v0, p0, Landroidx/camera/video/VideoEncoderSession;->mReadyToReleaseCompleter:Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;

    iget-object v1, p0, Landroidx/camera/video/VideoEncoderSession;->mVideoEncoder:Landroidx/camera/video/internal/encoder/Encoder;

    invoke-virtual {v0, v1}, Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;->set(Ljava/lang/Object;)Z

    const/4 v0, 0x0

    .line 224
    iput-object v0, p0, Landroidx/camera/video/VideoEncoderSession;->mSurfaceRequest:Landroidx/camera/core/SurfaceRequest;

    .line 225
    iget-object v1, p0, Landroidx/camera/video/VideoEncoderSession;->mVideoEncoder:Landroidx/camera/video/internal/encoder/Encoder;

    if-eqz v1, :cond_2

    .line 226
    new-instance v1, Ljava/lang/StringBuilder;

    const-string v3, "VideoEncoder is releasing: "

    invoke-direct {v1, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v3, p0, Landroidx/camera/video/VideoEncoderSession;->mVideoEncoder:Landroidx/camera/video/internal/encoder/Encoder;

    invoke-virtual {v1, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-static {v2, v1}, Landroidx/camera/core/Logger;->d(Ljava/lang/String;Ljava/lang/String;)V

    .line 227
    iget-object v1, p0, Landroidx/camera/video/VideoEncoderSession;->mVideoEncoder:Landroidx/camera/video/internal/encoder/Encoder;

    invoke-interface {v1}, Landroidx/camera/video/internal/encoder/Encoder;->release()V

    .line 228
    iget-object v1, p0, Landroidx/camera/video/VideoEncoderSession;->mVideoEncoder:Landroidx/camera/video/internal/encoder/Encoder;

    invoke-interface {v1}, Landroidx/camera/video/internal/encoder/Encoder;->getReleasedFuture()Lcom/google/common/util/concurrent/ListenableFuture;

    move-result-object v1

    new-instance v2, Landroidx/camera/video/VideoEncoderSession$$ExternalSyntheticLambda1;

    invoke-direct {v2, p0}, Landroidx/camera/video/VideoEncoderSession$$ExternalSyntheticLambda1;-><init>(Landroidx/camera/video/VideoEncoderSession;)V

    iget-object v3, p0, Landroidx/camera/video/VideoEncoderSession;->mSequentialExecutor:Ljava/util/concurrent/Executor;

    invoke-interface {v1, v2, v3}, Lcom/google/common/util/concurrent/ListenableFuture;->addListener(Ljava/lang/Runnable;Ljava/util/concurrent/Executor;)V

    .line 230
    iput-object v0, p0, Landroidx/camera/video/VideoEncoderSession;->mVideoEncoder:Landroidx/camera/video/internal/encoder/Encoder;

    goto :goto_0

    .line 232
    :cond_2
    const-string v1, "There\'s no VideoEncoder to release! Finish release completer."

    invoke-static {v2, v1}, Landroidx/camera/core/Logger;->w(Ljava/lang/String;Ljava/lang/String;)V

    .line 233
    iget-object v1, p0, Landroidx/camera/video/VideoEncoderSession;->mReleasedCompleter:Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;

    invoke-virtual {v1, v0}, Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;->set(Ljava/lang/Object;)Z

    :goto_0
    return-void

    .line 212
    :cond_3
    sget-object v0, Landroidx/camera/video/VideoEncoderSession$VideoEncoderState;->RELEASED:Landroidx/camera/video/VideoEncoderSession$VideoEncoderState;

    iput-object v0, p0, Landroidx/camera/video/VideoEncoderSession;->mVideoEncoderState:Landroidx/camera/video/VideoEncoderSession$VideoEncoderState;

    return-void
.end method

.method public toString()Ljava/lang/String;
    .locals 3

    .line 381
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "VideoEncoderSession@"

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p0}, Ljava/lang/Object;->hashCode()I

    move-result v1

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, " for "

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Landroidx/camera/video/VideoEncoderSession;->mSurfaceRequest:Landroidx/camera/core/SurfaceRequest;

    const-string v2, "SURFACE_REQUEST_NOT_CONFIGURED"

    invoke-static {v1, v2}, Ljava/util/Objects;->toString(Ljava/lang/Object;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

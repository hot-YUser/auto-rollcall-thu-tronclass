.class public Landroidx/camera/camera2/internal/ExposureControl;
.super Ljava/lang/Object;
.source "ExposureControl.java"


# static fields
.field private static final DEFAULT_EXPOSURE_COMPENSATION:I


# instance fields
.field private final mCameraControl:Landroidx/camera/camera2/internal/Camera2CameraControlImpl;

.field private final mExecutor:Ljava/util/concurrent/Executor;

.field private final mExposureStateImpl:Landroidx/camera/camera2/internal/ExposureStateImpl;

.field private mIsActive:Z

.field private mRunningCaptureResultListener:Landroidx/camera/camera2/internal/Camera2CameraControlImpl$CaptureResultListener;

.field private mRunningCompleter:Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer<",
            "Ljava/lang/Integer;",
            ">;"
        }
    .end annotation
.end field


# direct methods
.method constructor <init>(Landroidx/camera/camera2/internal/Camera2CameraControlImpl;Landroidx/camera/camera2/internal/compat/CameraCharacteristicsCompat;Ljava/util/concurrent/Executor;)V
    .locals 1

    .line 91
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const/4 v0, 0x0

    .line 73
    iput-boolean v0, p0, Landroidx/camera/camera2/internal/ExposureControl;->mIsActive:Z

    .line 92
    iput-object p1, p0, Landroidx/camera/camera2/internal/ExposureControl;->mCameraControl:Landroidx/camera/camera2/internal/Camera2CameraControlImpl;

    .line 93
    new-instance p1, Landroidx/camera/camera2/internal/ExposureStateImpl;

    invoke-direct {p1, p2, v0}, Landroidx/camera/camera2/internal/ExposureStateImpl;-><init>(Landroidx/camera/camera2/internal/compat/CameraCharacteristicsCompat;I)V

    iput-object p1, p0, Landroidx/camera/camera2/internal/ExposureControl;->mExposureStateImpl:Landroidx/camera/camera2/internal/ExposureStateImpl;

    .line 95
    iput-object p3, p0, Landroidx/camera/camera2/internal/ExposureControl;->mExecutor:Ljava/util/concurrent/Executor;

    return-void
.end method

.method private clearRunningTask()V
    .locals 4

    .line 226
    iget-object v0, p0, Landroidx/camera/camera2/internal/ExposureControl;->mRunningCompleter:Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;

    const/4 v1, 0x0

    if-eqz v0, :cond_0

    .line 227
    new-instance v2, Landroidx/camera/core/CameraControl$OperationCanceledException;

    const-string v3, "Cancelled by another setExposureCompensationIndex()"

    invoke-direct {v2, v3}, Landroidx/camera/core/CameraControl$OperationCanceledException;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, v2}, Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;->setException(Ljava/lang/Throwable;)Z

    .line 230
    iput-object v1, p0, Landroidx/camera/camera2/internal/ExposureControl;->mRunningCompleter:Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;

    .line 233
    :cond_0
    iget-object v0, p0, Landroidx/camera/camera2/internal/ExposureControl;->mRunningCaptureResultListener:Landroidx/camera/camera2/internal/Camera2CameraControlImpl$CaptureResultListener;

    if-eqz v0, :cond_1

    .line 234
    iget-object v2, p0, Landroidx/camera/camera2/internal/ExposureControl;->mCameraControl:Landroidx/camera/camera2/internal/Camera2CameraControlImpl;

    invoke-virtual {v2, v0}, Landroidx/camera/camera2/internal/Camera2CameraControlImpl;->removeCaptureResultListener(Landroidx/camera/camera2/internal/Camera2CameraControlImpl$CaptureResultListener;)V

    .line 235
    iput-object v1, p0, Landroidx/camera/camera2/internal/ExposureControl;->mRunningCaptureResultListener:Landroidx/camera/camera2/internal/Camera2CameraControlImpl$CaptureResultListener;

    :cond_1
    return-void
.end method

.method static getDefaultExposureState(Landroidx/camera/camera2/internal/compat/CameraCharacteristicsCompat;)Landroidx/camera/core/ExposureState;
    .locals 2

    .line 100
    new-instance v0, Landroidx/camera/camera2/internal/ExposureStateImpl;

    const/4 v1, 0x0

    invoke-direct {v0, p0, v1}, Landroidx/camera/camera2/internal/ExposureStateImpl;-><init>(Landroidx/camera/camera2/internal/compat/CameraCharacteristicsCompat;I)V

    return-object v0
.end method

.method static synthetic lambda$setExposureCompensationIndex$0(ILandroidx/concurrent/futures/CallbackToFutureAdapter$Completer;Landroid/hardware/camera2/TotalCaptureResult;)Z
    .locals 3

    .line 181
    sget-object v0, Landroid/hardware/camera2/CaptureResult;->CONTROL_AE_STATE:Landroid/hardware/camera2/CaptureResult$Key;

    invoke-virtual {p2, v0}, Landroid/hardware/camera2/TotalCaptureResult;->get(Landroid/hardware/camera2/CaptureResult$Key;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Ljava/lang/Integer;

    .line 183
    sget-object v1, Landroid/hardware/camera2/CaptureResult;->CONTROL_AE_EXPOSURE_COMPENSATION:Landroid/hardware/camera2/CaptureResult$Key;

    invoke-virtual {p2, v1}, Landroid/hardware/camera2/TotalCaptureResult;->get(Landroid/hardware/camera2/CaptureResult$Key;)Ljava/lang/Object;

    move-result-object p2

    check-cast p2, Ljava/lang/Integer;

    const/4 v1, 0x1

    if-eqz v0, :cond_1

    if-eqz p2, :cond_1

    .line 186
    invoke-virtual {v0}, Ljava/lang/Integer;->intValue()I

    move-result v0

    const/4 v2, 0x2

    if-eq v0, v2, :cond_0

    const/4 v2, 0x3

    if-eq v0, v2, :cond_0

    const/4 v2, 0x4

    if-eq v0, v2, :cond_0

    goto :goto_0

    .line 190
    :cond_0
    invoke-virtual {p2}, Ljava/lang/Integer;->intValue()I

    move-result p2

    if-ne p2, p0, :cond_2

    .line 191
    invoke-static {p0}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object p0

    invoke-virtual {p1, p0}, Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;->set(Ljava/lang/Object;)Z

    return v1

    :cond_1
    if-eqz p2, :cond_2

    .line 202
    invoke-virtual {p2}, Ljava/lang/Integer;->intValue()I

    move-result p2

    if-ne p2, p0, :cond_2

    .line 205
    invoke-static {p0}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object p0

    invoke-virtual {p1, p0}, Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;->set(Ljava/lang/Object;)Z

    return v1

    :cond_2
    :goto_0
    const/4 p0, 0x0

    return p0
.end method


# virtual methods
.method getExposureState()Landroidx/camera/core/ExposureState;
    .locals 1

    .line 138
    iget-object v0, p0, Landroidx/camera/camera2/internal/ExposureControl;->mExposureStateImpl:Landroidx/camera/camera2/internal/ExposureStateImpl;

    return-object v0
.end method

.method synthetic lambda$setExposureCompensationIndex$1$androidx-camera-camera2-internal-ExposureControl(Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;I)V
    .locals 4

    .line 161
    iget-boolean v0, p0, Landroidx/camera/camera2/internal/ExposureControl;->mIsActive:Z

    const/4 v1, 0x0

    if-nez v0, :cond_0

    .line 162
    iget-object p2, p0, Landroidx/camera/camera2/internal/ExposureControl;->mExposureStateImpl:Landroidx/camera/camera2/internal/ExposureStateImpl;

    invoke-virtual {p2, v1}, Landroidx/camera/camera2/internal/ExposureStateImpl;->setExposureCompensationIndex(I)V

    .line 164
    new-instance p2, Landroidx/camera/core/CameraControl$OperationCanceledException;

    const-string v0, "Camera is not active."

    invoke-direct {p2, v0}, Landroidx/camera/core/CameraControl$OperationCanceledException;-><init>(Ljava/lang/String;)V

    invoke-virtual {p1, p2}, Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;->setException(Ljava/lang/Throwable;)Z

    return-void

    .line 169
    :cond_0
    invoke-direct {p0}, Landroidx/camera/camera2/internal/ExposureControl;->clearRunningTask()V

    .line 171
    iget-object v0, p0, Landroidx/camera/camera2/internal/ExposureControl;->mRunningCompleter:Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;

    const/4 v2, 0x1

    if-nez v0, :cond_1

    move v0, v2

    goto :goto_0

    :cond_1
    move v0, v1

    :goto_0
    const-string v3, "mRunningCompleter should be null when starting set a new exposure compensation value"

    invoke-static {v0, v3}, Landroidx/core/util/Preconditions;->checkState(ZLjava/lang/String;)V

    .line 174
    iget-object v0, p0, Landroidx/camera/camera2/internal/ExposureControl;->mRunningCaptureResultListener:Landroidx/camera/camera2/internal/Camera2CameraControlImpl$CaptureResultListener;

    if-nez v0, :cond_2

    move v1, v2

    :cond_2
    const-string v0, "mRunningCaptureResultListener should be null when starting set a new exposure compensation value"

    invoke-static {v1, v0}, Landroidx/core/util/Preconditions;->checkState(ZLjava/lang/String;)V

    .line 179
    new-instance v0, Landroidx/camera/camera2/internal/ExposureControl$$ExternalSyntheticLambda0;

    invoke-direct {v0, p2, p1}, Landroidx/camera/camera2/internal/ExposureControl$$ExternalSyntheticLambda0;-><init>(ILandroidx/concurrent/futures/CallbackToFutureAdapter$Completer;)V

    iput-object v0, p0, Landroidx/camera/camera2/internal/ExposureControl;->mRunningCaptureResultListener:Landroidx/camera/camera2/internal/Camera2CameraControlImpl$CaptureResultListener;

    .line 214
    iput-object p1, p0, Landroidx/camera/camera2/internal/ExposureControl;->mRunningCompleter:Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;

    .line 216
    iget-object p1, p0, Landroidx/camera/camera2/internal/ExposureControl;->mCameraControl:Landroidx/camera/camera2/internal/Camera2CameraControlImpl;

    invoke-virtual {p1, v0}, Landroidx/camera/camera2/internal/Camera2CameraControlImpl;->addCaptureResultListener(Landroidx/camera/camera2/internal/Camera2CameraControlImpl$CaptureResultListener;)V

    .line 217
    iget-object p1, p0, Landroidx/camera/camera2/internal/ExposureControl;->mCameraControl:Landroidx/camera/camera2/internal/Camera2CameraControlImpl;

    invoke-virtual {p1}, Landroidx/camera/camera2/internal/Camera2CameraControlImpl;->updateSessionConfigSynchronous()J

    return-void
.end method

.method synthetic lambda$setExposureCompensationIndex$2$androidx-camera-camera2-internal-ExposureControl(ILandroidx/concurrent/futures/CallbackToFutureAdapter$Completer;)Ljava/lang/Object;
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Exception;
        }
    .end annotation

    .line 160
    iget-object v0, p0, Landroidx/camera/camera2/internal/ExposureControl;->mExecutor:Ljava/util/concurrent/Executor;

    new-instance v1, Landroidx/camera/camera2/internal/ExposureControl$$ExternalSyntheticLambda1;

    invoke-direct {v1, p0, p2, p1}, Landroidx/camera/camera2/internal/ExposureControl$$ExternalSyntheticLambda1;-><init>(Landroidx/camera/camera2/internal/ExposureControl;Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;I)V

    invoke-interface {v0, v1}, Ljava/util/concurrent/Executor;->execute(Ljava/lang/Runnable;)V

    .line 220
    new-instance p2, Ljava/lang/StringBuilder;

    const-string v0, "setExposureCompensationIndex["

    invoke-direct {p2, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2, p1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string p2, "]"

    invoke-virtual {p1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    return-object p1
.end method

.method setActive(Z)V
    .locals 1

    .line 112
    iget-boolean v0, p0, Landroidx/camera/camera2/internal/ExposureControl;->mIsActive:Z

    if-ne p1, v0, :cond_0

    return-void

    .line 116
    :cond_0
    iput-boolean p1, p0, Landroidx/camera/camera2/internal/ExposureControl;->mIsActive:Z

    if-nez p1, :cond_1

    .line 119
    iget-object p1, p0, Landroidx/camera/camera2/internal/ExposureControl;->mExposureStateImpl:Landroidx/camera/camera2/internal/ExposureStateImpl;

    const/4 v0, 0x0

    invoke-virtual {p1, v0}, Landroidx/camera/camera2/internal/ExposureStateImpl;->setExposureCompensationIndex(I)V

    .line 120
    invoke-direct {p0}, Landroidx/camera/camera2/internal/ExposureControl;->clearRunningTask()V

    :cond_1
    return-void
.end method

.method setCaptureRequestOption(Landroidx/camera/camera2/impl/Camera2ImplConfig$Builder;)V
    .locals 2

    .line 132
    sget-object v0, Landroid/hardware/camera2/CaptureRequest;->CONTROL_AE_EXPOSURE_COMPENSATION:Landroid/hardware/camera2/CaptureRequest$Key;

    iget-object v1, p0, Landroidx/camera/camera2/internal/ExposureControl;->mExposureStateImpl:Landroidx/camera/camera2/internal/ExposureStateImpl;

    .line 133
    invoke-virtual {v1}, Landroidx/camera/camera2/internal/ExposureStateImpl;->getExposureCompensationIndex()I

    move-result v1

    invoke-static {v1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    .line 132
    invoke-virtual {p1, v0, v1}, Landroidx/camera/camera2/impl/Camera2ImplConfig$Builder;->setCaptureRequestOption(Landroid/hardware/camera2/CaptureRequest$Key;Ljava/lang/Object;)Landroidx/camera/camera2/impl/Camera2ImplConfig$Builder;

    return-void
.end method

.method setExposureCompensationIndex(I)Lcom/google/common/util/concurrent/ListenableFuture;
    .locals 4
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(I)",
            "Lcom/google/common/util/concurrent/ListenableFuture<",
            "Ljava/lang/Integer;",
            ">;"
        }
    .end annotation

    .line 143
    iget-object v0, p0, Landroidx/camera/camera2/internal/ExposureControl;->mExposureStateImpl:Landroidx/camera/camera2/internal/ExposureStateImpl;

    invoke-virtual {v0}, Landroidx/camera/camera2/internal/ExposureStateImpl;->isExposureCompensationSupported()Z

    move-result v0

    if-nez v0, :cond_0

    .line 144
    new-instance p1, Ljava/lang/IllegalArgumentException;

    const-string v0, "ExposureCompensation is not supported"

    invoke-direct {p1, v0}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    invoke-static {p1}, Landroidx/camera/core/impl/utils/futures/Futures;->immediateFailedFuture(Ljava/lang/Throwable;)Lcom/google/common/util/concurrent/ListenableFuture;

    move-result-object p1

    return-object p1

    .line 148
    :cond_0
    iget-object v0, p0, Landroidx/camera/camera2/internal/ExposureControl;->mExposureStateImpl:Landroidx/camera/camera2/internal/ExposureStateImpl;

    invoke-virtual {v0}, Landroidx/camera/camera2/internal/ExposureStateImpl;->getExposureCompensationRange()Landroid/util/Range;

    move-result-object v0

    .line 149
    invoke-static {p1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    invoke-virtual {v0, v1}, Landroid/util/Range;->contains(Ljava/lang/Comparable;)Z

    move-result v1

    if-nez v1, :cond_1

    .line 150
    new-instance v1, Ljava/lang/IllegalArgumentException;

    new-instance v2, Ljava/lang/StringBuilder;

    const-string v3, "Requested ExposureCompensation "

    invoke-direct {v2, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v2, p1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string v2, " is not within valid range ["

    invoke-virtual {p1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    .line 152
    invoke-virtual {v0}, Landroid/util/Range;->getUpper()Ljava/lang/Comparable;

    move-result-object v2

    invoke-virtual {p1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string v2, ".."

    invoke-virtual {p1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {v0}, Landroid/util/Range;->getLower()Ljava/lang/Comparable;

    move-result-object v0

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string v0, "]"

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-direct {v1, p1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    .line 150
    invoke-static {v1}, Landroidx/camera/core/impl/utils/futures/Futures;->immediateFailedFuture(Ljava/lang/Throwable;)Lcom/google/common/util/concurrent/ListenableFuture;

    move-result-object p1

    return-object p1

    .line 156
    :cond_1
    iget-object v0, p0, Landroidx/camera/camera2/internal/ExposureControl;->mExposureStateImpl:Landroidx/camera/camera2/internal/ExposureStateImpl;

    invoke-virtual {v0, p1}, Landroidx/camera/camera2/internal/ExposureStateImpl;->setExposureCompensationIndex(I)V

    .line 158
    new-instance v0, Landroidx/camera/camera2/internal/ExposureControl$$ExternalSyntheticLambda2;

    invoke-direct {v0, p0, p1}, Landroidx/camera/camera2/internal/ExposureControl$$ExternalSyntheticLambda2;-><init>(Landroidx/camera/camera2/internal/ExposureControl;I)V

    invoke-static {v0}, Landroidx/concurrent/futures/CallbackToFutureAdapter;->getFuture(Landroidx/concurrent/futures/CallbackToFutureAdapter$Resolver;)Lcom/google/common/util/concurrent/ListenableFuture;

    move-result-object p1

    invoke-static {p1}, Landroidx/camera/core/impl/utils/futures/Futures;->nonCancellationPropagating(Lcom/google/common/util/concurrent/ListenableFuture;)Lcom/google/common/util/concurrent/ListenableFuture;

    move-result-object p1

    return-object p1
.end method

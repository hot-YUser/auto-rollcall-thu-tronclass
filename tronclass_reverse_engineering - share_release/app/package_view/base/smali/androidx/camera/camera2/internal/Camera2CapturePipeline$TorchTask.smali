.class Landroidx/camera/camera2/internal/Camera2CapturePipeline$TorchTask;
.super Ljava/lang/Object;
.source "Camera2CapturePipeline.java"

# interfaces
.implements Landroidx/camera/camera2/internal/Camera2CapturePipeline$PipelineTask;


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/camera2/internal/Camera2CapturePipeline;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x8
    name = "TorchTask"
.end annotation


# static fields
.field private static final CHECK_3A_WITH_TORCH_TIMEOUT_IN_NS:J


# instance fields
.field private final mCameraControl:Landroidx/camera/camera2/internal/Camera2CameraControlImpl;

.field private final mExecutor:Ljava/util/concurrent/Executor;

.field private final mFlashMode:I

.field private mIsExecuted:Z


# direct methods
.method static constructor <clinit>()V
    .locals 3

    .line 550
    sget-object v0, Ljava/util/concurrent/TimeUnit;->SECONDS:Ljava/util/concurrent/TimeUnit;

    const-wide/16 v1, 0x2

    invoke-virtual {v0, v1, v2}, Ljava/util/concurrent/TimeUnit;->toNanos(J)J

    move-result-wide v0

    sput-wide v0, Landroidx/camera/camera2/internal/Camera2CapturePipeline$TorchTask;->CHECK_3A_WITH_TORCH_TIMEOUT_IN_NS:J

    return-void
.end method

.method constructor <init>(Landroidx/camera/camera2/internal/Camera2CameraControlImpl;ILjava/util/concurrent/Executor;)V
    .locals 1

    .line 559
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const/4 v0, 0x0

    .line 554
    iput-boolean v0, p0, Landroidx/camera/camera2/internal/Camera2CapturePipeline$TorchTask;->mIsExecuted:Z

    .line 560
    iput-object p1, p0, Landroidx/camera/camera2/internal/Camera2CapturePipeline$TorchTask;->mCameraControl:Landroidx/camera/camera2/internal/Camera2CameraControlImpl;

    .line 561
    iput p2, p0, Landroidx/camera/camera2/internal/Camera2CapturePipeline$TorchTask;->mFlashMode:I

    .line 562
    iput-object p3, p0, Landroidx/camera/camera2/internal/Camera2CapturePipeline$TorchTask;->mExecutor:Ljava/util/concurrent/Executor;

    return-void
.end method

.method static synthetic lambda$preCapture$1(Landroid/hardware/camera2/TotalCaptureResult;)Z
    .locals 1

    const/4 v0, 0x1

    .line 582
    invoke-static {p0, v0}, Landroidx/camera/camera2/internal/Camera2CapturePipeline;->is3AConverged(Landroid/hardware/camera2/TotalCaptureResult;Z)Z

    move-result p0

    return p0
.end method

.method static synthetic lambda$preCapture$3(Landroid/hardware/camera2/TotalCaptureResult;)Ljava/lang/Boolean;
    .locals 0

    const/4 p0, 0x0

    .line 583
    invoke-static {p0}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object p0

    return-object p0
.end method


# virtual methods
.method public isCaptureResultNeeded()Z
    .locals 1

    .line 593
    iget v0, p0, Landroidx/camera/camera2/internal/Camera2CapturePipeline$TorchTask;->mFlashMode:I

    if-nez v0, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return v0
.end method

.method synthetic lambda$preCapture$0$androidx-camera-camera2-internal-Camera2CapturePipeline$TorchTask(Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;)Ljava/lang/Object;
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Exception;
        }
    .end annotation

    .line 577
    iget-object v0, p0, Landroidx/camera/camera2/internal/Camera2CapturePipeline$TorchTask;->mCameraControl:Landroidx/camera/camera2/internal/Camera2CameraControlImpl;

    invoke-virtual {v0}, Landroidx/camera/camera2/internal/Camera2CameraControlImpl;->getTorchControl()Landroidx/camera/camera2/internal/TorchControl;

    move-result-object v0

    const/4 v1, 0x1

    invoke-virtual {v0, p1, v1}, Landroidx/camera/camera2/internal/TorchControl;->enableTorchInternal(Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;Z)V

    .line 578
    const-string p1, "TorchOn"

    return-object p1
.end method

.method synthetic lambda$preCapture$2$androidx-camera-camera2-internal-Camera2CapturePipeline$TorchTask(Ljava/lang/Void;)Lcom/google/common/util/concurrent/ListenableFuture;
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Exception;
        }
    .end annotation

    .line 581
    sget-wide v0, Landroidx/camera/camera2/internal/Camera2CapturePipeline$TorchTask;->CHECK_3A_WITH_TORCH_TIMEOUT_IN_NS:J

    iget-object p1, p0, Landroidx/camera/camera2/internal/Camera2CapturePipeline$TorchTask;->mCameraControl:Landroidx/camera/camera2/internal/Camera2CameraControlImpl;

    new-instance v2, Landroidx/camera/camera2/internal/Camera2CapturePipeline$TorchTask$$ExternalSyntheticLambda3;

    invoke-direct {v2}, Landroidx/camera/camera2/internal/Camera2CapturePipeline$TorchTask$$ExternalSyntheticLambda3;-><init>()V

    invoke-static {v0, v1, p1, v2}, Landroidx/camera/camera2/internal/Camera2CapturePipeline;->waitForResult(JLandroidx/camera/camera2/internal/Camera2CameraControlImpl;Landroidx/camera/camera2/internal/Camera2CapturePipeline$ResultListener$Checker;)Lcom/google/common/util/concurrent/ListenableFuture;

    move-result-object p1

    return-object p1
.end method

.method public postCapture()V
    .locals 3

    .line 599
    iget-boolean v0, p0, Landroidx/camera/camera2/internal/Camera2CapturePipeline$TorchTask;->mIsExecuted:Z

    if-eqz v0, :cond_0

    .line 600
    iget-object v0, p0, Landroidx/camera/camera2/internal/Camera2CapturePipeline$TorchTask;->mCameraControl:Landroidx/camera/camera2/internal/Camera2CameraControlImpl;

    invoke-virtual {v0}, Landroidx/camera/camera2/internal/Camera2CameraControlImpl;->getTorchControl()Landroidx/camera/camera2/internal/TorchControl;

    move-result-object v0

    const/4 v1, 0x0

    const/4 v2, 0x0

    invoke-virtual {v0, v1, v2}, Landroidx/camera/camera2/internal/TorchControl;->enableTorchInternal(Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;Z)V

    .line 601
    const-string v0, "Camera2CapturePipeline"

    const-string v1, "Turn off torch"

    invoke-static {v0, v1}, Landroidx/camera/core/Logger;->d(Ljava/lang/String;Ljava/lang/String;)V

    :cond_0
    return-void
.end method

.method public preCapture(Landroid/hardware/camera2/TotalCaptureResult;)Lcom/google/common/util/concurrent/ListenableFuture;
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroid/hardware/camera2/TotalCaptureResult;",
            ")",
            "Lcom/google/common/util/concurrent/ListenableFuture<",
            "Ljava/lang/Boolean;",
            ">;"
        }
    .end annotation

    .line 569
    iget v0, p0, Landroidx/camera/camera2/internal/Camera2CapturePipeline$TorchTask;->mFlashMode:I

    invoke-static {v0, p1}, Landroidx/camera/camera2/internal/Camera2CapturePipeline;->isFlashRequired(ILandroid/hardware/camera2/TotalCaptureResult;)Z

    move-result p1

    if-eqz p1, :cond_1

    .line 570
    iget-object p1, p0, Landroidx/camera/camera2/internal/Camera2CapturePipeline$TorchTask;->mCameraControl:Landroidx/camera/camera2/internal/Camera2CameraControlImpl;

    invoke-virtual {p1}, Landroidx/camera/camera2/internal/Camera2CameraControlImpl;->isTorchOn()Z

    move-result p1

    const-string v0, "Camera2CapturePipeline"

    if-eqz p1, :cond_0

    .line 571
    const-string p1, "Torch already on, not turn on"

    invoke-static {v0, p1}, Landroidx/camera/core/Logger;->d(Ljava/lang/String;Ljava/lang/String;)V

    goto :goto_0

    .line 573
    :cond_0
    const-string p1, "Turn on torch"

    invoke-static {v0, p1}, Landroidx/camera/core/Logger;->d(Ljava/lang/String;Ljava/lang/String;)V

    const/4 p1, 0x1

    .line 574
    iput-boolean p1, p0, Landroidx/camera/camera2/internal/Camera2CapturePipeline$TorchTask;->mIsExecuted:Z

    .line 576
    new-instance p1, Landroidx/camera/camera2/internal/Camera2CapturePipeline$TorchTask$$ExternalSyntheticLambda0;

    invoke-direct {p1, p0}, Landroidx/camera/camera2/internal/Camera2CapturePipeline$TorchTask$$ExternalSyntheticLambda0;-><init>(Landroidx/camera/camera2/internal/Camera2CapturePipeline$TorchTask;)V

    invoke-static {p1}, Landroidx/concurrent/futures/CallbackToFutureAdapter;->getFuture(Landroidx/concurrent/futures/CallbackToFutureAdapter$Resolver;)Lcom/google/common/util/concurrent/ListenableFuture;

    move-result-object p1

    .line 580
    invoke-static {p1}, Landroidx/camera/core/impl/utils/futures/FutureChain;->from(Lcom/google/common/util/concurrent/ListenableFuture;)Landroidx/camera/core/impl/utils/futures/FutureChain;

    move-result-object p1

    new-instance v0, Landroidx/camera/camera2/internal/Camera2CapturePipeline$TorchTask$$ExternalSyntheticLambda1;

    invoke-direct {v0, p0}, Landroidx/camera/camera2/internal/Camera2CapturePipeline$TorchTask$$ExternalSyntheticLambda1;-><init>(Landroidx/camera/camera2/internal/Camera2CapturePipeline$TorchTask;)V

    iget-object v1, p0, Landroidx/camera/camera2/internal/Camera2CapturePipeline$TorchTask;->mExecutor:Ljava/util/concurrent/Executor;

    invoke-virtual {p1, v0, v1}, Landroidx/camera/core/impl/utils/futures/FutureChain;->transformAsync(Landroidx/camera/core/impl/utils/futures/AsyncFunction;Ljava/util/concurrent/Executor;)Landroidx/camera/core/impl/utils/futures/FutureChain;

    move-result-object p1

    new-instance v0, Landroidx/camera/camera2/internal/Camera2CapturePipeline$TorchTask$$ExternalSyntheticLambda2;

    invoke-direct {v0}, Landroidx/camera/camera2/internal/Camera2CapturePipeline$TorchTask$$ExternalSyntheticLambda2;-><init>()V

    .line 583
    invoke-static {}, Landroidx/camera/core/impl/utils/executor/CameraXExecutors;->directExecutor()Ljava/util/concurrent/Executor;

    move-result-object v1

    invoke-virtual {p1, v0, v1}, Landroidx/camera/core/impl/utils/futures/FutureChain;->transform(Landroidx/arch/core/util/Function;Ljava/util/concurrent/Executor;)Landroidx/camera/core/impl/utils/futures/FutureChain;

    move-result-object p1

    return-object p1

    :cond_1
    :goto_0
    const/4 p1, 0x0

    .line 587
    invoke-static {p1}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object p1

    invoke-static {p1}, Landroidx/camera/core/impl/utils/futures/Futures;->immediateFuture(Ljava/lang/Object;)Lcom/google/common/util/concurrent/ListenableFuture;

    move-result-object p1

    return-object p1
.end method

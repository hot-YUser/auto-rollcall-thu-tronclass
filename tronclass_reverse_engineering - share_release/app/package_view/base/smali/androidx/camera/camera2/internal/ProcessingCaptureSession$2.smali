.class Landroidx/camera/camera2/internal/ProcessingCaptureSession$2;
.super Ljava/lang/Object;
.source "ProcessingCaptureSession.java"

# interfaces
.implements Landroidx/camera/core/impl/SessionProcessor$CaptureCallback;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Landroidx/camera/camera2/internal/ProcessingCaptureSession;->issueTriggerRequest(Landroidx/camera/core/impl/CaptureConfig;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Landroidx/camera/camera2/internal/ProcessingCaptureSession;

.field final synthetic val$captureConfig:Landroidx/camera/core/impl/CaptureConfig;


# direct methods
.method constructor <init>(Landroidx/camera/camera2/internal/ProcessingCaptureSession;Landroidx/camera/core/impl/CaptureConfig;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 317
    iput-object p1, p0, Landroidx/camera/camera2/internal/ProcessingCaptureSession$2;->this$0:Landroidx/camera/camera2/internal/ProcessingCaptureSession;

    iput-object p2, p0, Landroidx/camera/camera2/internal/ProcessingCaptureSession$2;->val$captureConfig:Landroidx/camera/core/impl/CaptureConfig;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method static synthetic lambda$onCaptureFailed$0(Landroidx/camera/core/impl/CaptureConfig;)V
    .locals 3

    .line 322
    invoke-virtual {p0}, Landroidx/camera/core/impl/CaptureConfig;->getCameraCaptureCallbacks()Ljava/util/List;

    move-result-object p0

    invoke-interface {p0}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object p0

    :goto_0
    invoke-interface {p0}, Ljava/util/Iterator;->hasNext()Z

    move-result v0

    if-eqz v0, :cond_0

    invoke-interface {p0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroidx/camera/core/impl/CameraCaptureCallback;

    .line 323
    new-instance v1, Landroidx/camera/core/impl/CameraCaptureFailure;

    sget-object v2, Landroidx/camera/core/impl/CameraCaptureFailure$Reason;->ERROR:Landroidx/camera/core/impl/CameraCaptureFailure$Reason;

    invoke-direct {v1, v2}, Landroidx/camera/core/impl/CameraCaptureFailure;-><init>(Landroidx/camera/core/impl/CameraCaptureFailure$Reason;)V

    invoke-virtual {v0, v1}, Landroidx/camera/core/impl/CameraCaptureCallback;->onCaptureFailed(Landroidx/camera/core/impl/CameraCaptureFailure;)V

    goto :goto_0

    :cond_0
    return-void
.end method

.method static synthetic lambda$onCaptureSequenceCompleted$1(Landroidx/camera/core/impl/CaptureConfig;)V
    .locals 2

    .line 333
    invoke-virtual {p0}, Landroidx/camera/core/impl/CaptureConfig;->getCameraCaptureCallbacks()Ljava/util/List;

    move-result-object p0

    invoke-interface {p0}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object p0

    :goto_0
    invoke-interface {p0}, Ljava/util/Iterator;->hasNext()Z

    move-result v0

    if-eqz v0, :cond_0

    invoke-interface {p0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroidx/camera/core/impl/CameraCaptureCallback;

    .line 334
    new-instance v1, Landroidx/camera/core/impl/CameraCaptureResult$EmptyCameraCaptureResult;

    invoke-direct {v1}, Landroidx/camera/core/impl/CameraCaptureResult$EmptyCameraCaptureResult;-><init>()V

    invoke-virtual {v0, v1}, Landroidx/camera/core/impl/CameraCaptureCallback;->onCaptureCompleted(Landroidx/camera/core/impl/CameraCaptureResult;)V

    goto :goto_0

    :cond_0
    return-void
.end method


# virtual methods
.method public onCaptureFailed(I)V
    .locals 2

    .line 320
    iget-object p1, p0, Landroidx/camera/camera2/internal/ProcessingCaptureSession$2;->this$0:Landroidx/camera/camera2/internal/ProcessingCaptureSession;

    iget-object p1, p1, Landroidx/camera/camera2/internal/ProcessingCaptureSession;->mExecutor:Ljava/util/concurrent/Executor;

    iget-object v0, p0, Landroidx/camera/camera2/internal/ProcessingCaptureSession$2;->val$captureConfig:Landroidx/camera/core/impl/CaptureConfig;

    new-instance v1, Landroidx/camera/camera2/internal/ProcessingCaptureSession$2$$ExternalSyntheticLambda1;

    invoke-direct {v1, v0}, Landroidx/camera/camera2/internal/ProcessingCaptureSession$2$$ExternalSyntheticLambda1;-><init>(Landroidx/camera/core/impl/CaptureConfig;)V

    invoke-interface {p1, v1}, Ljava/util/concurrent/Executor;->execute(Ljava/lang/Runnable;)V

    return-void
.end method

.method public onCaptureSequenceCompleted(I)V
    .locals 2

    .line 331
    iget-object p1, p0, Landroidx/camera/camera2/internal/ProcessingCaptureSession$2;->this$0:Landroidx/camera/camera2/internal/ProcessingCaptureSession;

    iget-object p1, p1, Landroidx/camera/camera2/internal/ProcessingCaptureSession;->mExecutor:Ljava/util/concurrent/Executor;

    iget-object v0, p0, Landroidx/camera/camera2/internal/ProcessingCaptureSession$2;->val$captureConfig:Landroidx/camera/core/impl/CaptureConfig;

    new-instance v1, Landroidx/camera/camera2/internal/ProcessingCaptureSession$2$$ExternalSyntheticLambda0;

    invoke-direct {v1, v0}, Landroidx/camera/camera2/internal/ProcessingCaptureSession$2$$ExternalSyntheticLambda0;-><init>(Landroidx/camera/core/impl/CaptureConfig;)V

    invoke-interface {p1, v1}, Ljava/util/concurrent/Executor;->execute(Ljava/lang/Runnable;)V

    return-void
.end method

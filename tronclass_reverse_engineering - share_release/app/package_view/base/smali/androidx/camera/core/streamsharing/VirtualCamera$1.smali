.class Landroidx/camera/core/streamsharing/VirtualCamera$1;
.super Landroidx/camera/core/impl/CameraCaptureCallback;
.source "VirtualCamera.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Landroidx/camera/core/streamsharing/VirtualCamera;->createCameraCaptureCallback()Landroidx/camera/core/impl/CameraCaptureCallback;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Landroidx/camera/core/streamsharing/VirtualCamera;


# direct methods
.method constructor <init>(Landroidx/camera/core/streamsharing/VirtualCamera;)V
    .locals 0

    .line 402
    iput-object p1, p0, Landroidx/camera/core/streamsharing/VirtualCamera$1;->this$0:Landroidx/camera/core/streamsharing/VirtualCamera;

    invoke-direct {p0}, Landroidx/camera/core/impl/CameraCaptureCallback;-><init>()V

    return-void
.end method


# virtual methods
.method public onCaptureCompleted(Landroidx/camera/core/impl/CameraCaptureResult;)V
    .locals 2

    .line 405
    invoke-super {p0, p1}, Landroidx/camera/core/impl/CameraCaptureCallback;->onCaptureCompleted(Landroidx/camera/core/impl/CameraCaptureResult;)V

    .line 406
    iget-object v0, p0, Landroidx/camera/core/streamsharing/VirtualCamera$1;->this$0:Landroidx/camera/core/streamsharing/VirtualCamera;

    iget-object v0, v0, Landroidx/camera/core/streamsharing/VirtualCamera;->mChildren:Ljava/util/Set;

    invoke-interface {v0}, Ljava/util/Set;->iterator()Ljava/util/Iterator;

    move-result-object v0

    :goto_0
    invoke-interface {v0}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    if-eqz v1, :cond_0

    invoke-interface {v0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Landroidx/camera/core/UseCase;

    .line 408
    invoke-virtual {v1}, Landroidx/camera/core/UseCase;->getSessionConfig()Landroidx/camera/core/impl/SessionConfig;

    move-result-object v1

    .line 407
    invoke-static {p1, v1}, Landroidx/camera/core/streamsharing/VirtualCamera;->sendCameraCaptureResultToChild(Landroidx/camera/core/impl/CameraCaptureResult;Landroidx/camera/core/impl/SessionConfig;)V

    goto :goto_0

    :cond_0
    return-void
.end method

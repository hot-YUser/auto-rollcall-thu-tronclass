.class Landroidx/camera/view/CameraController$1;
.super Ljava/lang/Object;
.source "CameraController.java"

# interfaces
.implements Landroidx/core/util/Consumer;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Landroidx/camera/view/CameraController;->wrapListenerToDeactivateRecordingOnFinalized(Landroidx/core/util/Consumer;)Landroidx/core/util/Consumer;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Object;",
        "Landroidx/core/util/Consumer<",
        "Landroidx/camera/video/VideoRecordEvent;",
        ">;"
    }
.end annotation


# instance fields
.field final synthetic this$0:Landroidx/camera/view/CameraController;

.field final synthetic val$listener:Landroidx/core/util/Consumer;

.field final synthetic val$mainExecutor:Ljava/util/concurrent/Executor;


# direct methods
.method constructor <init>(Landroidx/camera/view/CameraController;Ljava/util/concurrent/Executor;Landroidx/core/util/Consumer;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 1311
    iput-object p1, p0, Landroidx/camera/view/CameraController$1;->this$0:Landroidx/camera/view/CameraController;

    iput-object p2, p0, Landroidx/camera/view/CameraController$1;->val$mainExecutor:Ljava/util/concurrent/Executor;

    iput-object p3, p0, Landroidx/camera/view/CameraController$1;->val$listener:Landroidx/core/util/Consumer;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public accept(Landroidx/camera/video/VideoRecordEvent;)V
    .locals 2

    .line 1314
    instance-of v0, p1, Landroidx/camera/video/VideoRecordEvent$Finalize;

    if-eqz v0, :cond_1

    .line 1315
    invoke-static {}, Landroidx/camera/core/impl/utils/Threads;->isMainThread()Z

    move-result v0

    if-nez v0, :cond_0

    .line 1317
    iget-object v0, p0, Landroidx/camera/view/CameraController$1;->val$mainExecutor:Ljava/util/concurrent/Executor;

    new-instance v1, Landroidx/camera/view/CameraController$1$$ExternalSyntheticLambda0;

    invoke-direct {v1, p0}, Landroidx/camera/view/CameraController$1$$ExternalSyntheticLambda0;-><init>(Landroidx/camera/view/CameraController$1;)V

    invoke-interface {v0, v1}, Ljava/util/concurrent/Executor;->execute(Ljava/lang/Runnable;)V

    goto :goto_0

    .line 1319
    :cond_0
    iget-object v0, p0, Landroidx/camera/view/CameraController$1;->this$0:Landroidx/camera/view/CameraController;

    invoke-virtual {v0, p0}, Landroidx/camera/view/CameraController;->deactivateRecordingByListener(Landroidx/core/util/Consumer;)V

    .line 1322
    :cond_1
    :goto_0
    iget-object v0, p0, Landroidx/camera/view/CameraController$1;->val$listener:Landroidx/core/util/Consumer;

    invoke-interface {v0, p1}, Landroidx/core/util/Consumer;->accept(Ljava/lang/Object;)V

    return-void
.end method

.method public bridge synthetic accept(Ljava/lang/Object;)V
    .locals 0

    .line 1311
    check-cast p1, Landroidx/camera/video/VideoRecordEvent;

    invoke-virtual {p0, p1}, Landroidx/camera/view/CameraController$1;->accept(Landroidx/camera/video/VideoRecordEvent;)V

    return-void
.end method

.method synthetic lambda$accept$0$androidx-camera-view-CameraController$1()V
    .locals 1

    .line 1317
    iget-object v0, p0, Landroidx/camera/view/CameraController$1;->this$0:Landroidx/camera/view/CameraController;

    invoke-virtual {v0, p0}, Landroidx/camera/view/CameraController;->deactivateRecordingByListener(Landroidx/core/util/Consumer;)V

    return-void
.end method

.class Landroidx/camera/view/PreviewStreamStateObserver$2;
.super Landroidx/camera/core/impl/CameraCaptureCallback;
.source "PreviewStreamStateObserver.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Landroidx/camera/view/PreviewStreamStateObserver;->waitForCaptureResult(Landroidx/camera/core/CameraInfo;Ljava/util/List;)Lcom/google/common/util/concurrent/ListenableFuture;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Landroidx/camera/view/PreviewStreamStateObserver;

.field final synthetic val$cameraInfo:Landroidx/camera/core/CameraInfo;

.field final synthetic val$completer:Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;


# direct methods
.method constructor <init>(Landroidx/camera/view/PreviewStreamStateObserver;Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;Landroidx/camera/core/CameraInfo;)V
    .locals 0

    .line 180
    iput-object p1, p0, Landroidx/camera/view/PreviewStreamStateObserver$2;->this$0:Landroidx/camera/view/PreviewStreamStateObserver;

    iput-object p2, p0, Landroidx/camera/view/PreviewStreamStateObserver$2;->val$completer:Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;

    iput-object p3, p0, Landroidx/camera/view/PreviewStreamStateObserver$2;->val$cameraInfo:Landroidx/camera/core/CameraInfo;

    invoke-direct {p0}, Landroidx/camera/core/impl/CameraCaptureCallback;-><init>()V

    return-void
.end method


# virtual methods
.method public onCaptureCompleted(Landroidx/camera/core/impl/CameraCaptureResult;)V
    .locals 1

    .line 184
    iget-object p1, p0, Landroidx/camera/view/PreviewStreamStateObserver$2;->val$completer:Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;

    const/4 v0, 0x0

    invoke-virtual {p1, v0}, Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;->set(Ljava/lang/Object;)Z

    .line 185
    iget-object p1, p0, Landroidx/camera/view/PreviewStreamStateObserver$2;->val$cameraInfo:Landroidx/camera/core/CameraInfo;

    check-cast p1, Landroidx/camera/core/impl/CameraInfoInternal;

    invoke-interface {p1, p0}, Landroidx/camera/core/impl/CameraInfoInternal;->removeSessionCaptureCallback(Landroidx/camera/core/impl/CameraCaptureCallback;)V

    return-void
.end method

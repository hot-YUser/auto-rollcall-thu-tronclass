.class Landroidx/camera/core/imagecapture/TakePictureManager$1;
.super Ljava/lang/Object;
.source "TakePictureManager.java"

# interfaces
.implements Landroidx/camera/core/impl/utils/futures/FutureCallback;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Landroidx/camera/core/imagecapture/TakePictureManager;->submitCameraRequest(Landroidx/camera/core/imagecapture/CameraRequest;)Lcom/google/common/util/concurrent/ListenableFuture;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Object;",
        "Landroidx/camera/core/impl/utils/futures/FutureCallback<",
        "Ljava/lang/Void;",
        ">;"
    }
.end annotation


# instance fields
.field final synthetic this$0:Landroidx/camera/core/imagecapture/TakePictureManager;

.field final synthetic val$cameraRequest:Landroidx/camera/core/imagecapture/CameraRequest;


# direct methods
.method constructor <init>(Landroidx/camera/core/imagecapture/TakePictureManager;Landroidx/camera/core/imagecapture/CameraRequest;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 250
    iput-object p1, p0, Landroidx/camera/core/imagecapture/TakePictureManager$1;->this$0:Landroidx/camera/core/imagecapture/TakePictureManager;

    iput-object p2, p0, Landroidx/camera/core/imagecapture/TakePictureManager$1;->val$cameraRequest:Landroidx/camera/core/imagecapture/CameraRequest;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onFailure(Ljava/lang/Throwable;)V
    .locals 4

    .line 258
    iget-object v0, p0, Landroidx/camera/core/imagecapture/TakePictureManager$1;->val$cameraRequest:Landroidx/camera/core/imagecapture/CameraRequest;

    invoke-virtual {v0}, Landroidx/camera/core/imagecapture/CameraRequest;->isAborted()Z

    move-result v0

    if-eqz v0, :cond_0

    return-void

    .line 265
    :cond_0
    instance-of v0, p1, Landroidx/camera/core/ImageCaptureException;

    if-eqz v0, :cond_1

    .line 266
    iget-object v0, p0, Landroidx/camera/core/imagecapture/TakePictureManager$1;->this$0:Landroidx/camera/core/imagecapture/TakePictureManager;

    iget-object v0, v0, Landroidx/camera/core/imagecapture/TakePictureManager;->mImagePipeline:Landroidx/camera/core/imagecapture/ImagePipeline;

    check-cast p1, Landroidx/camera/core/ImageCaptureException;

    invoke-virtual {v0, p1}, Landroidx/camera/core/imagecapture/ImagePipeline;->notifyCaptureError(Landroidx/camera/core/ImageCaptureException;)V

    goto :goto_0

    .line 268
    :cond_1
    iget-object v0, p0, Landroidx/camera/core/imagecapture/TakePictureManager$1;->this$0:Landroidx/camera/core/imagecapture/TakePictureManager;

    iget-object v0, v0, Landroidx/camera/core/imagecapture/TakePictureManager;->mImagePipeline:Landroidx/camera/core/imagecapture/ImagePipeline;

    new-instance v1, Landroidx/camera/core/ImageCaptureException;

    const/4 v2, 0x2

    const-string v3, "Failed to submit capture request"

    invoke-direct {v1, v2, v3, p1}, Landroidx/camera/core/ImageCaptureException;-><init>(ILjava/lang/String;Ljava/lang/Throwable;)V

    invoke-virtual {v0, v1}, Landroidx/camera/core/imagecapture/ImagePipeline;->notifyCaptureError(Landroidx/camera/core/ImageCaptureException;)V

    .line 274
    :goto_0
    iget-object p1, p0, Landroidx/camera/core/imagecapture/TakePictureManager$1;->this$0:Landroidx/camera/core/imagecapture/TakePictureManager;

    iget-object p1, p1, Landroidx/camera/core/imagecapture/TakePictureManager;->mImageCaptureControl:Landroidx/camera/core/imagecapture/ImageCaptureControl;

    invoke-interface {p1}, Landroidx/camera/core/imagecapture/ImageCaptureControl;->unlockFlashMode()V

    return-void
.end method

.method public bridge synthetic onSuccess(Ljava/lang/Object;)V
    .locals 0

    .line 250
    check-cast p1, Ljava/lang/Void;

    invoke-virtual {p0, p1}, Landroidx/camera/core/imagecapture/TakePictureManager$1;->onSuccess(Ljava/lang/Void;)V

    return-void
.end method

.method public onSuccess(Ljava/lang/Void;)V
    .locals 0

    .line 253
    iget-object p1, p0, Landroidx/camera/core/imagecapture/TakePictureManager$1;->this$0:Landroidx/camera/core/imagecapture/TakePictureManager;

    iget-object p1, p1, Landroidx/camera/core/imagecapture/TakePictureManager;->mImageCaptureControl:Landroidx/camera/core/imagecapture/ImageCaptureControl;

    invoke-interface {p1}, Landroidx/camera/core/imagecapture/ImageCaptureControl;->unlockFlashMode()V

    return-void
.end method

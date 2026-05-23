.class public interface abstract Landroidx/camera/core/imagecapture/ImageCaptureControl;
.super Ljava/lang/Object;
.source "ImageCaptureControl.java"


# virtual methods
.method public abstract lockFlashMode()V
.end method

.method public abstract submitStillCaptureRequests(Ljava/util/List;)Lcom/google/common/util/concurrent/ListenableFuture;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Landroidx/camera/core/impl/CaptureConfig;",
            ">;)",
            "Lcom/google/common/util/concurrent/ListenableFuture<",
            "Ljava/lang/Void;",
            ">;"
        }
    .end annotation
.end method

.method public abstract unlockFlashMode()V
.end method

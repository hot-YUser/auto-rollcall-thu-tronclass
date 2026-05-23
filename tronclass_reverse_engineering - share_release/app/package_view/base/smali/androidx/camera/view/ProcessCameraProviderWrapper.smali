.class interface abstract Landroidx/camera/view/ProcessCameraProviderWrapper;
.super Ljava/lang/Object;
.source "ProcessCameraProviderWrapper.java"


# virtual methods
.method public abstract bindToLifecycle(Landroidx/lifecycle/LifecycleOwner;Landroidx/camera/core/CameraSelector;Landroidx/camera/core/UseCaseGroup;)Landroidx/camera/core/Camera;
.end method

.method public abstract hasCamera(Landroidx/camera/core/CameraSelector;)Z
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Landroidx/camera/core/CameraInfoUnavailableException;
        }
    .end annotation
.end method

.method public abstract shutdown()Lcom/google/common/util/concurrent/ListenableFuture;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Lcom/google/common/util/concurrent/ListenableFuture<",
            "Ljava/lang/Void;",
            ">;"
        }
    .end annotation
.end method

.method public varargs abstract unbind([Landroidx/camera/core/UseCase;)V
.end method

.method public abstract unbindAll()V
.end method

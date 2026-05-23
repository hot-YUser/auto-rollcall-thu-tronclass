.class Landroidx/camera/view/ProcessCameraProviderWrapperImpl;
.super Ljava/lang/Object;
.source "ProcessCameraProviderWrapperImpl.java"

# interfaces
.implements Landroidx/camera/view/ProcessCameraProviderWrapper;


# instance fields
.field private final mProcessCameraProvider:Landroidx/camera/lifecycle/ProcessCameraProvider;


# direct methods
.method constructor <init>(Landroidx/camera/lifecycle/ProcessCameraProvider;)V
    .locals 0

    .line 43
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 44
    iput-object p1, p0, Landroidx/camera/view/ProcessCameraProviderWrapperImpl;->mProcessCameraProvider:Landroidx/camera/lifecycle/ProcessCameraProvider;

    return-void
.end method


# virtual methods
.method public bindToLifecycle(Landroidx/lifecycle/LifecycleOwner;Landroidx/camera/core/CameraSelector;Landroidx/camera/core/UseCaseGroup;)Landroidx/camera/core/Camera;
    .locals 1

    .line 67
    iget-object v0, p0, Landroidx/camera/view/ProcessCameraProviderWrapperImpl;->mProcessCameraProvider:Landroidx/camera/lifecycle/ProcessCameraProvider;

    invoke-virtual {v0, p1, p2, p3}, Landroidx/camera/lifecycle/ProcessCameraProvider;->bindToLifecycle(Landroidx/lifecycle/LifecycleOwner;Landroidx/camera/core/CameraSelector;Landroidx/camera/core/UseCaseGroup;)Landroidx/camera/core/Camera;

    move-result-object p1

    return-object p1
.end method

.method public hasCamera(Landroidx/camera/core/CameraSelector;)Z
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Landroidx/camera/core/CameraInfoUnavailableException;
        }
    .end annotation

    .line 50
    iget-object v0, p0, Landroidx/camera/view/ProcessCameraProviderWrapperImpl;->mProcessCameraProvider:Landroidx/camera/lifecycle/ProcessCameraProvider;

    invoke-virtual {v0, p1}, Landroidx/camera/lifecycle/ProcessCameraProvider;->hasCamera(Landroidx/camera/core/CameraSelector;)Z

    move-result p1

    return p1
.end method

.method public shutdown()Lcom/google/common/util/concurrent/ListenableFuture;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Lcom/google/common/util/concurrent/ListenableFuture<",
            "Ljava/lang/Void;",
            ">;"
        }
    .end annotation

    .line 74
    iget-object v0, p0, Landroidx/camera/view/ProcessCameraProviderWrapperImpl;->mProcessCameraProvider:Landroidx/camera/lifecycle/ProcessCameraProvider;

    invoke-virtual {v0}, Landroidx/camera/lifecycle/ProcessCameraProvider;->shutdown()Lcom/google/common/util/concurrent/ListenableFuture;

    move-result-object v0

    return-object v0
.end method

.method public varargs unbind([Landroidx/camera/core/UseCase;)V
    .locals 1

    .line 55
    iget-object v0, p0, Landroidx/camera/view/ProcessCameraProviderWrapperImpl;->mProcessCameraProvider:Landroidx/camera/lifecycle/ProcessCameraProvider;

    invoke-virtual {v0, p1}, Landroidx/camera/lifecycle/ProcessCameraProvider;->unbind([Landroidx/camera/core/UseCase;)V

    return-void
.end method

.method public unbindAll()V
    .locals 1

    .line 60
    iget-object v0, p0, Landroidx/camera/view/ProcessCameraProviderWrapperImpl;->mProcessCameraProvider:Landroidx/camera/lifecycle/ProcessCameraProvider;

    invoke-virtual {v0}, Landroidx/camera/lifecycle/ProcessCameraProvider;->unbindAll()V

    return-void
.end method

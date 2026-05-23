.class final Landroidx/camera/camera2/internal/SynchronizedCaptureSessionOpener;
.super Ljava/lang/Object;
.source "SynchronizedCaptureSessionOpener.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/camera2/internal/SynchronizedCaptureSessionOpener$OpenerImpl;,
        Landroidx/camera/camera2/internal/SynchronizedCaptureSessionOpener$Builder;
    }
.end annotation


# instance fields
.field private final mImpl:Landroidx/camera/camera2/internal/SynchronizedCaptureSessionOpener$OpenerImpl;


# direct methods
.method constructor <init>(Landroidx/camera/camera2/internal/SynchronizedCaptureSessionOpener$OpenerImpl;)V
    .locals 0

    .line 70
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 71
    iput-object p1, p0, Landroidx/camera/camera2/internal/SynchronizedCaptureSessionOpener;->mImpl:Landroidx/camera/camera2/internal/SynchronizedCaptureSessionOpener$OpenerImpl;

    return-void
.end method


# virtual methods
.method createSessionConfigurationCompat(ILjava/util/List;Landroidx/camera/camera2/internal/SynchronizedCaptureSession$StateCallback;)Landroidx/camera/camera2/internal/compat/params/SessionConfigurationCompat;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(I",
            "Ljava/util/List<",
            "Landroidx/camera/camera2/internal/compat/params/OutputConfigurationCompat;",
            ">;",
            "Landroidx/camera/camera2/internal/SynchronizedCaptureSession$StateCallback;",
            ")",
            "Landroidx/camera/camera2/internal/compat/params/SessionConfigurationCompat;"
        }
    .end annotation

    .line 131
    iget-object v0, p0, Landroidx/camera/camera2/internal/SynchronizedCaptureSessionOpener;->mImpl:Landroidx/camera/camera2/internal/SynchronizedCaptureSessionOpener$OpenerImpl;

    invoke-interface {v0, p1, p2, p3}, Landroidx/camera/camera2/internal/SynchronizedCaptureSessionOpener$OpenerImpl;->createSessionConfigurationCompat(ILjava/util/List;Landroidx/camera/camera2/internal/SynchronizedCaptureSession$StateCallback;)Landroidx/camera/camera2/internal/compat/params/SessionConfigurationCompat;

    move-result-object p1

    return-object p1
.end method

.method public getExecutor()Ljava/util/concurrent/Executor;
    .locals 1

    .line 174
    iget-object v0, p0, Landroidx/camera/camera2/internal/SynchronizedCaptureSessionOpener;->mImpl:Landroidx/camera/camera2/internal/SynchronizedCaptureSessionOpener$OpenerImpl;

    invoke-interface {v0}, Landroidx/camera/camera2/internal/SynchronizedCaptureSessionOpener$OpenerImpl;->getExecutor()Ljava/util/concurrent/Executor;

    move-result-object v0

    return-object v0
.end method

.method openCaptureSession(Landroid/hardware/camera2/CameraDevice;Landroidx/camera/camera2/internal/compat/params/SessionConfigurationCompat;Ljava/util/List;)Lcom/google/common/util/concurrent/ListenableFuture;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroid/hardware/camera2/CameraDevice;",
            "Landroidx/camera/camera2/internal/compat/params/SessionConfigurationCompat;",
            "Ljava/util/List<",
            "Landroidx/camera/core/impl/DeferrableSurface;",
            ">;)",
            "Lcom/google/common/util/concurrent/ListenableFuture<",
            "Ljava/lang/Void;",
            ">;"
        }
    .end annotation

    .line 113
    iget-object v0, p0, Landroidx/camera/camera2/internal/SynchronizedCaptureSessionOpener;->mImpl:Landroidx/camera/camera2/internal/SynchronizedCaptureSessionOpener$OpenerImpl;

    invoke-interface {v0, p1, p2, p3}, Landroidx/camera/camera2/internal/SynchronizedCaptureSessionOpener$OpenerImpl;->openCaptureSession(Landroid/hardware/camera2/CameraDevice;Landroidx/camera/camera2/internal/compat/params/SessionConfigurationCompat;Ljava/util/List;)Lcom/google/common/util/concurrent/ListenableFuture;

    move-result-object p1

    return-object p1
.end method

.method startWithDeferrableSurface(Ljava/util/List;J)Lcom/google/common/util/concurrent/ListenableFuture;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Landroidx/camera/core/impl/DeferrableSurface;",
            ">;J)",
            "Lcom/google/common/util/concurrent/ListenableFuture<",
            "Ljava/util/List<",
            "Landroid/view/Surface;",
            ">;>;"
        }
    .end annotation

    .line 155
    iget-object v0, p0, Landroidx/camera/camera2/internal/SynchronizedCaptureSessionOpener;->mImpl:Landroidx/camera/camera2/internal/SynchronizedCaptureSessionOpener$OpenerImpl;

    invoke-interface {v0, p1, p2, p3}, Landroidx/camera/camera2/internal/SynchronizedCaptureSessionOpener$OpenerImpl;->startWithDeferrableSurface(Ljava/util/List;J)Lcom/google/common/util/concurrent/ListenableFuture;

    move-result-object p1

    return-object p1
.end method

.method stop()Z
    .locals 1

    .line 168
    iget-object v0, p0, Landroidx/camera/camera2/internal/SynchronizedCaptureSessionOpener;->mImpl:Landroidx/camera/camera2/internal/SynchronizedCaptureSessionOpener$OpenerImpl;

    invoke-interface {v0}, Landroidx/camera/camera2/internal/SynchronizedCaptureSessionOpener$OpenerImpl;->stop()Z

    move-result v0

    return v0
.end method

.class Landroidx/camera/camera2/internal/SynchronizedCaptureSessionStateCallbacks$Adapter;
.super Landroidx/camera/camera2/internal/SynchronizedCaptureSession$StateCallback;
.source "SynchronizedCaptureSessionStateCallbacks.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/camera2/internal/SynchronizedCaptureSessionStateCallbacks;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x8
    name = "Adapter"
.end annotation


# instance fields
.field private final mCameraCaptureSessionStateCallback:Landroid/hardware/camera2/CameraCaptureSession$StateCallback;


# direct methods
.method constructor <init>(Landroid/hardware/camera2/CameraCaptureSession$StateCallback;)V
    .locals 0

    .line 115
    invoke-direct {p0}, Landroidx/camera/camera2/internal/SynchronizedCaptureSession$StateCallback;-><init>()V

    .line 116
    iput-object p1, p0, Landroidx/camera/camera2/internal/SynchronizedCaptureSessionStateCallbacks$Adapter;->mCameraCaptureSessionStateCallback:Landroid/hardware/camera2/CameraCaptureSession$StateCallback;

    return-void
.end method

.method constructor <init>(Ljava/util/List;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Landroid/hardware/camera2/CameraCaptureSession$StateCallback;",
            ">;)V"
        }
    .end annotation

    .line 120
    invoke-static {p1}, Landroidx/camera/camera2/internal/CameraCaptureSessionStateCallbacks;->createComboCallback(Ljava/util/List;)Landroid/hardware/camera2/CameraCaptureSession$StateCallback;

    move-result-object p1

    invoke-direct {p0, p1}, Landroidx/camera/camera2/internal/SynchronizedCaptureSessionStateCallbacks$Adapter;-><init>(Landroid/hardware/camera2/CameraCaptureSession$StateCallback;)V

    return-void
.end method


# virtual methods
.method public onActive(Landroidx/camera/camera2/internal/SynchronizedCaptureSession;)V
    .locals 1

    .line 139
    iget-object v0, p0, Landroidx/camera/camera2/internal/SynchronizedCaptureSessionStateCallbacks$Adapter;->mCameraCaptureSessionStateCallback:Landroid/hardware/camera2/CameraCaptureSession$StateCallback;

    .line 140
    invoke-interface {p1}, Landroidx/camera/camera2/internal/SynchronizedCaptureSession;->toCameraCaptureSessionCompat()Landroidx/camera/camera2/internal/compat/CameraCaptureSessionCompat;

    move-result-object p1

    invoke-virtual {p1}, Landroidx/camera/camera2/internal/compat/CameraCaptureSessionCompat;->toCameraCaptureSession()Landroid/hardware/camera2/CameraCaptureSession;

    move-result-object p1

    .line 139
    invoke-virtual {v0, p1}, Landroid/hardware/camera2/CameraCaptureSession$StateCallback;->onActive(Landroid/hardware/camera2/CameraCaptureSession;)V

    return-void
.end method

.method public onCaptureQueueEmpty(Landroidx/camera/camera2/internal/SynchronizedCaptureSession;)V
    .locals 1

    .line 146
    iget-object v0, p0, Landroidx/camera/camera2/internal/SynchronizedCaptureSessionStateCallbacks$Adapter;->mCameraCaptureSessionStateCallback:Landroid/hardware/camera2/CameraCaptureSession$StateCallback;

    .line 147
    invoke-interface {p1}, Landroidx/camera/camera2/internal/SynchronizedCaptureSession;->toCameraCaptureSessionCompat()Landroidx/camera/camera2/internal/compat/CameraCaptureSessionCompat;

    move-result-object p1

    invoke-virtual {p1}, Landroidx/camera/camera2/internal/compat/CameraCaptureSessionCompat;->toCameraCaptureSession()Landroid/hardware/camera2/CameraCaptureSession;

    move-result-object p1

    .line 146
    invoke-static {v0, p1}, Landroidx/camera/camera2/internal/compat/ApiCompat$Api26Impl;->onCaptureQueueEmpty(Landroid/hardware/camera2/CameraCaptureSession$StateCallback;Landroid/hardware/camera2/CameraCaptureSession;)V

    return-void
.end method

.method public onClosed(Landroidx/camera/camera2/internal/SynchronizedCaptureSession;)V
    .locals 1

    .line 164
    iget-object v0, p0, Landroidx/camera/camera2/internal/SynchronizedCaptureSessionStateCallbacks$Adapter;->mCameraCaptureSessionStateCallback:Landroid/hardware/camera2/CameraCaptureSession$StateCallback;

    .line 165
    invoke-interface {p1}, Landroidx/camera/camera2/internal/SynchronizedCaptureSession;->toCameraCaptureSessionCompat()Landroidx/camera/camera2/internal/compat/CameraCaptureSessionCompat;

    move-result-object p1

    invoke-virtual {p1}, Landroidx/camera/camera2/internal/compat/CameraCaptureSessionCompat;->toCameraCaptureSession()Landroid/hardware/camera2/CameraCaptureSession;

    move-result-object p1

    .line 164
    invoke-virtual {v0, p1}, Landroid/hardware/camera2/CameraCaptureSession$StateCallback;->onClosed(Landroid/hardware/camera2/CameraCaptureSession;)V

    return-void
.end method

.method public onConfigureFailed(Landroidx/camera/camera2/internal/SynchronizedCaptureSession;)V
    .locals 1

    .line 158
    iget-object v0, p0, Landroidx/camera/camera2/internal/SynchronizedCaptureSessionStateCallbacks$Adapter;->mCameraCaptureSessionStateCallback:Landroid/hardware/camera2/CameraCaptureSession$StateCallback;

    .line 159
    invoke-interface {p1}, Landroidx/camera/camera2/internal/SynchronizedCaptureSession;->toCameraCaptureSessionCompat()Landroidx/camera/camera2/internal/compat/CameraCaptureSessionCompat;

    move-result-object p1

    invoke-virtual {p1}, Landroidx/camera/camera2/internal/compat/CameraCaptureSessionCompat;->toCameraCaptureSession()Landroid/hardware/camera2/CameraCaptureSession;

    move-result-object p1

    .line 158
    invoke-virtual {v0, p1}, Landroid/hardware/camera2/CameraCaptureSession$StateCallback;->onConfigureFailed(Landroid/hardware/camera2/CameraCaptureSession;)V

    return-void
.end method

.method public onConfigured(Landroidx/camera/camera2/internal/SynchronizedCaptureSession;)V
    .locals 1

    .line 152
    iget-object v0, p0, Landroidx/camera/camera2/internal/SynchronizedCaptureSessionStateCallbacks$Adapter;->mCameraCaptureSessionStateCallback:Landroid/hardware/camera2/CameraCaptureSession$StateCallback;

    .line 153
    invoke-interface {p1}, Landroidx/camera/camera2/internal/SynchronizedCaptureSession;->toCameraCaptureSessionCompat()Landroidx/camera/camera2/internal/compat/CameraCaptureSessionCompat;

    move-result-object p1

    invoke-virtual {p1}, Landroidx/camera/camera2/internal/compat/CameraCaptureSessionCompat;->toCameraCaptureSession()Landroid/hardware/camera2/CameraCaptureSession;

    move-result-object p1

    .line 152
    invoke-virtual {v0, p1}, Landroid/hardware/camera2/CameraCaptureSession$StateCallback;->onConfigured(Landroid/hardware/camera2/CameraCaptureSession;)V

    return-void
.end method

.method public onReady(Landroidx/camera/camera2/internal/SynchronizedCaptureSession;)V
    .locals 1

    .line 133
    iget-object v0, p0, Landroidx/camera/camera2/internal/SynchronizedCaptureSessionStateCallbacks$Adapter;->mCameraCaptureSessionStateCallback:Landroid/hardware/camera2/CameraCaptureSession$StateCallback;

    .line 134
    invoke-interface {p1}, Landroidx/camera/camera2/internal/SynchronizedCaptureSession;->toCameraCaptureSessionCompat()Landroidx/camera/camera2/internal/compat/CameraCaptureSessionCompat;

    move-result-object p1

    invoke-virtual {p1}, Landroidx/camera/camera2/internal/compat/CameraCaptureSessionCompat;->toCameraCaptureSession()Landroid/hardware/camera2/CameraCaptureSession;

    move-result-object p1

    .line 133
    invoke-virtual {v0, p1}, Landroid/hardware/camera2/CameraCaptureSession$StateCallback;->onReady(Landroid/hardware/camera2/CameraCaptureSession;)V

    return-void
.end method

.method onSessionFinished(Landroidx/camera/camera2/internal/SynchronizedCaptureSession;)V
    .locals 0

    return-void
.end method

.method public onSurfacePrepared(Landroidx/camera/camera2/internal/SynchronizedCaptureSession;Landroid/view/Surface;)V
    .locals 1

    .line 127
    iget-object v0, p0, Landroidx/camera/camera2/internal/SynchronizedCaptureSessionStateCallbacks$Adapter;->mCameraCaptureSessionStateCallback:Landroid/hardware/camera2/CameraCaptureSession$StateCallback;

    .line 128
    invoke-interface {p1}, Landroidx/camera/camera2/internal/SynchronizedCaptureSession;->toCameraCaptureSessionCompat()Landroidx/camera/camera2/internal/compat/CameraCaptureSessionCompat;

    move-result-object p1

    invoke-virtual {p1}, Landroidx/camera/camera2/internal/compat/CameraCaptureSessionCompat;->toCameraCaptureSession()Landroid/hardware/camera2/CameraCaptureSession;

    move-result-object p1

    .line 127
    invoke-static {v0, p1, p2}, Landroidx/camera/camera2/internal/compat/ApiCompat$Api23Impl;->onSurfacePrepared(Landroid/hardware/camera2/CameraCaptureSession$StateCallback;Landroid/hardware/camera2/CameraCaptureSession;Landroid/view/Surface;)V

    return-void
.end method

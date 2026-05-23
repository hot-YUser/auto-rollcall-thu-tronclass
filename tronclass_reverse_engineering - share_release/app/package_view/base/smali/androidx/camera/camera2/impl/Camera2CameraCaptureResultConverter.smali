.class public final Landroidx/camera/camera2/impl/Camera2CameraCaptureResultConverter;
.super Ljava/lang/Object;
.source "Camera2CameraCaptureResultConverter.java"


# direct methods
.method private constructor <init>()V
    .locals 0

    .line 64
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static getCaptureFailure(Landroidx/camera/core/impl/CameraCaptureFailure;)Landroid/hardware/camera2/CaptureFailure;
    .locals 1

    .line 57
    instance-of v0, p0, Landroidx/camera/camera2/internal/Camera2CameraCaptureFailure;

    if-eqz v0, :cond_0

    .line 58
    check-cast p0, Landroidx/camera/camera2/internal/Camera2CameraCaptureFailure;

    invoke-virtual {p0}, Landroidx/camera/camera2/internal/Camera2CameraCaptureFailure;->getCaptureFailure()Landroid/hardware/camera2/CaptureFailure;

    move-result-object p0

    return-object p0

    :cond_0
    const/4 p0, 0x0

    return-object p0
.end method

.method public static getCaptureResult(Landroidx/camera/core/impl/CameraCaptureResult;)Landroid/hardware/camera2/CaptureResult;
    .locals 1

    .line 42
    instance-of v0, p0, Landroidx/camera/camera2/internal/Camera2CameraCaptureResult;

    if-eqz v0, :cond_0

    .line 43
    check-cast p0, Landroidx/camera/camera2/internal/Camera2CameraCaptureResult;

    invoke-virtual {p0}, Landroidx/camera/camera2/internal/Camera2CameraCaptureResult;->getCaptureResult()Landroid/hardware/camera2/CaptureResult;

    move-result-object p0

    return-object p0

    :cond_0
    const/4 p0, 0x0

    return-object p0
.end method

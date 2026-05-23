.class public Landroidx/camera/camera2/internal/ZslControlNoOpImpl;
.super Ljava/lang/Object;
.source "ZslControlNoOpImpl.java"

# interfaces
.implements Landroidx/camera/camera2/internal/ZslControl;


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 27
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public addZslConfig(Landroidx/camera/core/impl/SessionConfig$Builder;)V
    .locals 0

    return-void
.end method

.method public dequeueImageFromBuffer()Landroidx/camera/core/ImageProxy;
    .locals 1

    const/4 v0, 0x0

    return-object v0
.end method

.method public enqueueImageToImageWriter(Landroidx/camera/core/ImageProxy;)Z
    .locals 0

    const/4 p1, 0x0

    return p1
.end method

.method public isZslDisabledByFlashMode()Z
    .locals 1

    const/4 v0, 0x0

    return v0
.end method

.method public isZslDisabledByUserCaseConfig()Z
    .locals 1

    const/4 v0, 0x0

    return v0
.end method

.method public setZslDisabledByFlashMode(Z)V
    .locals 0

    return-void
.end method

.method public setZslDisabledByUserCaseConfig(Z)V
    .locals 0

    return-void
.end method

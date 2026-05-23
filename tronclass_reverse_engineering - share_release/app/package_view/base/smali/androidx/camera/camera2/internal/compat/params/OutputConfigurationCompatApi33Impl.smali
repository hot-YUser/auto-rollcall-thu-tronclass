.class public Landroidx/camera/camera2/internal/compat/params/OutputConfigurationCompatApi33Impl;
.super Landroidx/camera/camera2/internal/compat/params/OutputConfigurationCompatApi28Impl;
.source "OutputConfigurationCompatApi33Impl.java"


# direct methods
.method constructor <init>(ILandroid/view/Surface;)V
    .locals 1

    .line 37
    new-instance v0, Landroid/hardware/camera2/params/OutputConfiguration;

    invoke-direct {v0, p1, p2}, Landroid/hardware/camera2/params/OutputConfiguration;-><init>(ILandroid/view/Surface;)V

    invoke-direct {p0, v0}, Landroidx/camera/camera2/internal/compat/params/OutputConfigurationCompatApi33Impl;-><init>(Ljava/lang/Object;)V

    return-void
.end method

.method constructor <init>(Landroid/view/Surface;)V
    .locals 1

    .line 33
    new-instance v0, Landroid/hardware/camera2/params/OutputConfiguration;

    invoke-direct {v0, p1}, Landroid/hardware/camera2/params/OutputConfiguration;-><init>(Landroid/view/Surface;)V

    invoke-direct {p0, v0}, Landroidx/camera/camera2/internal/compat/params/OutputConfigurationCompatApi28Impl;-><init>(Ljava/lang/Object;)V

    return-void
.end method

.method constructor <init>(Ljava/lang/Object;)V
    .locals 0

    .line 41
    invoke-direct {p0, p1}, Landroidx/camera/camera2/internal/compat/params/OutputConfigurationCompatApi28Impl;-><init>(Ljava/lang/Object;)V

    return-void
.end method

.method static wrap(Landroid/hardware/camera2/params/OutputConfiguration;)Landroidx/camera/camera2/internal/compat/params/OutputConfigurationCompatApi33Impl;
    .locals 1

    .line 47
    new-instance v0, Landroidx/camera/camera2/internal/compat/params/OutputConfigurationCompatApi33Impl;

    invoke-direct {v0, p0}, Landroidx/camera/camera2/internal/compat/params/OutputConfigurationCompatApi33Impl;-><init>(Ljava/lang/Object;)V

    return-object v0
.end method


# virtual methods
.method public bridge synthetic addSurface(Landroid/view/Surface;)V
    .locals 0

    .line 29
    invoke-super {p0, p1}, Landroidx/camera/camera2/internal/compat/params/OutputConfigurationCompatApi28Impl;->addSurface(Landroid/view/Surface;)V

    return-void
.end method

.method public bridge synthetic enableSurfaceSharing()V
    .locals 0

    .line 29
    invoke-super {p0}, Landroidx/camera/camera2/internal/compat/params/OutputConfigurationCompatApi28Impl;->enableSurfaceSharing()V

    return-void
.end method

.method public bridge synthetic equals(Ljava/lang/Object;)Z
    .locals 0

    .line 29
    invoke-super {p0, p1}, Landroidx/camera/camera2/internal/compat/params/OutputConfigurationCompatApi28Impl;->equals(Ljava/lang/Object;)Z

    move-result p1

    return p1
.end method

.method public getDynamicRangeProfile()J
    .locals 2

    .line 52
    invoke-virtual {p0}, Landroidx/camera/camera2/internal/compat/params/OutputConfigurationCompatApi33Impl;->getOutputConfiguration()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroid/hardware/camera2/params/OutputConfiguration;

    invoke-virtual {v0}, Landroid/hardware/camera2/params/OutputConfiguration;->getDynamicRangeProfile()J

    move-result-wide v0

    return-wide v0
.end method

.method public bridge synthetic getMaxSharedSurfaceCount()I
    .locals 1

    .line 29
    invoke-super {p0}, Landroidx/camera/camera2/internal/compat/params/OutputConfigurationCompatApi28Impl;->getMaxSharedSurfaceCount()I

    move-result v0

    return v0
.end method

.method public getOutputConfiguration()Ljava/lang/Object;
    .locals 1

    .line 63
    iget-object v0, p0, Landroidx/camera/camera2/internal/compat/params/OutputConfigurationCompatApi33Impl;->mObject:Ljava/lang/Object;

    instance-of v0, v0, Landroid/hardware/camera2/params/OutputConfiguration;

    invoke-static {v0}, Landroidx/core/util/Preconditions;->checkArgument(Z)V

    .line 64
    iget-object v0, p0, Landroidx/camera/camera2/internal/compat/params/OutputConfigurationCompatApi33Impl;->mObject:Ljava/lang/Object;

    return-object v0
.end method

.method public bridge synthetic getPhysicalCameraId()Ljava/lang/String;
    .locals 1

    .line 29
    invoke-super {p0}, Landroidx/camera/camera2/internal/compat/params/OutputConfigurationCompatApi28Impl;->getPhysicalCameraId()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method public getStreamUseCase()J
    .locals 2

    .line 80
    invoke-virtual {p0}, Landroidx/camera/camera2/internal/compat/params/OutputConfigurationCompatApi33Impl;->getOutputConfiguration()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroid/hardware/camera2/params/OutputConfiguration;

    invoke-virtual {v0}, Landroid/hardware/camera2/params/OutputConfiguration;->getStreamUseCase()J

    move-result-wide v0

    return-wide v0
.end method

.method public bridge synthetic getSurface()Landroid/view/Surface;
    .locals 1

    .line 29
    invoke-super {p0}, Landroidx/camera/camera2/internal/compat/params/OutputConfigurationCompatApi28Impl;->getSurface()Landroid/view/Surface;

    move-result-object v0

    return-object v0
.end method

.method public bridge synthetic getSurfaceGroupId()I
    .locals 1

    .line 29
    invoke-super {p0}, Landroidx/camera/camera2/internal/compat/params/OutputConfigurationCompatApi28Impl;->getSurfaceGroupId()I

    move-result v0

    return v0
.end method

.method public bridge synthetic getSurfaces()Ljava/util/List;
    .locals 1

    .line 29
    invoke-super {p0}, Landroidx/camera/camera2/internal/compat/params/OutputConfigurationCompatApi28Impl;->getSurfaces()Ljava/util/List;

    move-result-object v0

    return-object v0
.end method

.method public bridge synthetic hashCode()I
    .locals 1

    .line 29
    invoke-super {p0}, Landroidx/camera/camera2/internal/compat/params/OutputConfigurationCompatApi28Impl;->hashCode()I

    move-result v0

    return v0
.end method

.method public bridge synthetic removeSurface(Landroid/view/Surface;)V
    .locals 0

    .line 29
    invoke-super {p0, p1}, Landroidx/camera/camera2/internal/compat/params/OutputConfigurationCompatApi28Impl;->removeSurface(Landroid/view/Surface;)V

    return-void
.end method

.method public setDynamicRangeProfile(J)V
    .locals 1

    .line 57
    invoke-virtual {p0}, Landroidx/camera/camera2/internal/compat/params/OutputConfigurationCompatApi33Impl;->getOutputConfiguration()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroid/hardware/camera2/params/OutputConfiguration;

    invoke-virtual {v0, p1, p2}, Landroid/hardware/camera2/params/OutputConfiguration;->setDynamicRangeProfile(J)V

    return-void
.end method

.method public bridge synthetic setPhysicalCameraId(Ljava/lang/String;)V
    .locals 0

    .line 29
    invoke-super {p0, p1}, Landroidx/camera/camera2/internal/compat/params/OutputConfigurationCompatApi28Impl;->setPhysicalCameraId(Ljava/lang/String;)V

    return-void
.end method

.method public setStreamUseCase(J)V
    .locals 2

    const-wide/16 v0, -0x1

    cmp-long v0, p1, v0

    if-nez v0, :cond_0

    return-void

    .line 72
    :cond_0
    invoke-virtual {p0}, Landroidx/camera/camera2/internal/compat/params/OutputConfigurationCompatApi33Impl;->getOutputConfiguration()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroid/hardware/camera2/params/OutputConfiguration;

    invoke-virtual {v0, p1, p2}, Landroid/hardware/camera2/params/OutputConfiguration;->setStreamUseCase(J)V

    return-void
.end method

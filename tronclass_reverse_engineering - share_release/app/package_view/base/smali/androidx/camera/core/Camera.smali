.class public interface abstract Landroidx/camera/core/Camera;
.super Ljava/lang/Object;
.source "Camera.java"


# virtual methods
.method public abstract getCameraControl()Landroidx/camera/core/CameraControl;
.end method

.method public abstract getCameraInfo()Landroidx/camera/core/CameraInfo;
.end method

.method public abstract getCameraInternals()Ljava/util/LinkedHashSet;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/LinkedHashSet<",
            "Landroidx/camera/core/impl/CameraInternal;",
            ">;"
        }
    .end annotation
.end method

.method public abstract getExtendedConfig()Landroidx/camera/core/impl/CameraConfig;
.end method

.method public varargs isUseCasesCombinationSupported([Landroidx/camera/core/UseCase;)Z
    .locals 0

    const/4 p1, 0x1

    return p1
.end method

.method public abstract setExtendedConfig(Landroidx/camera/core/impl/CameraConfig;)V
.end method

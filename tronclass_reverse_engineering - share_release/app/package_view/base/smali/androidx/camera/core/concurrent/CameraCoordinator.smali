.class public interface abstract Landroidx/camera/core/concurrent/CameraCoordinator;
.super Ljava/lang/Object;
.source "CameraCoordinator.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/core/concurrent/CameraCoordinator$ConcurrentCameraModeListener;,
        Landroidx/camera/core/concurrent/CameraCoordinator$CameraOperatingMode;
    }
.end annotation


# static fields
.field public static final CAMERA_OPERATING_MODE_CONCURRENT:I = 0x2

.field public static final CAMERA_OPERATING_MODE_SINGLE:I = 0x1

.field public static final CAMERA_OPERATING_MODE_UNSPECIFIED:I


# virtual methods
.method public abstract addListener(Landroidx/camera/core/concurrent/CameraCoordinator$ConcurrentCameraModeListener;)V
.end method

.method public abstract getActiveConcurrentCameraInfos()Ljava/util/List;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Landroidx/camera/core/CameraInfo;",
            ">;"
        }
    .end annotation
.end method

.method public abstract getCameraOperatingMode()I
.end method

.method public abstract getConcurrentCameraSelectors()Ljava/util/List;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Ljava/util/List<",
            "Landroidx/camera/core/CameraSelector;",
            ">;>;"
        }
    .end annotation
.end method

.method public abstract getPairedConcurrentCameraId(Ljava/lang/String;)Ljava/lang/String;
.end method

.method public abstract removeListener(Landroidx/camera/core/concurrent/CameraCoordinator$ConcurrentCameraModeListener;)V
.end method

.method public abstract setActiveConcurrentCameraInfos(Ljava/util/List;)V
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Landroidx/camera/core/CameraInfo;",
            ">;)V"
        }
    .end annotation
.end method

.method public abstract setCameraOperatingMode(I)V
.end method

.method public abstract shutdown()V
.end method

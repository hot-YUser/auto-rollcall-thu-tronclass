.class public interface abstract Landroidx/camera/core/CameraProvider;
.super Ljava/lang/Object;
.source "CameraProvider.java"


# virtual methods
.method public abstract getAvailableCameraInfos()Ljava/util/List;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Landroidx/camera/core/CameraInfo;",
            ">;"
        }
    .end annotation
.end method

.method public abstract hasCamera(Landroidx/camera/core/CameraSelector;)Z
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Landroidx/camera/core/CameraInfoUnavailableException;
        }
    .end annotation
.end method

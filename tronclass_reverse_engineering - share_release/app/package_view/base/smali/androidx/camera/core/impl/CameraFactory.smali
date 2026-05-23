.class public interface abstract Landroidx/camera/core/impl/CameraFactory;
.super Ljava/lang/Object;
.source "CameraFactory.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/core/impl/CameraFactory$Provider;
    }
.end annotation


# virtual methods
.method public abstract getAvailableCameraIds()Ljava/util/Set;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/Set<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation
.end method

.method public abstract getCamera(Ljava/lang/String;)Landroidx/camera/core/impl/CameraInternal;
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Landroidx/camera/core/CameraUnavailableException;
        }
    .end annotation
.end method

.method public abstract getCameraCoordinator()Landroidx/camera/core/concurrent/CameraCoordinator;
.end method

.method public abstract getCameraManager()Ljava/lang/Object;
.end method

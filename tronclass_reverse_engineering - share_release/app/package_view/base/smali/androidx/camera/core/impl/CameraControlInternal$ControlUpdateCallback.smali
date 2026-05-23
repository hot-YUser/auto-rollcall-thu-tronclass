.class public interface abstract Landroidx/camera/core/impl/CameraControlInternal$ControlUpdateCallback;
.super Ljava/lang/Object;
.source "CameraControlInternal.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/core/impl/CameraControlInternal;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x609
    name = "ControlUpdateCallback"
.end annotation


# virtual methods
.method public abstract onCameraControlCaptureRequests(Ljava/util/List;)V
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Landroidx/camera/core/impl/CaptureConfig;",
            ">;)V"
        }
    .end annotation
.end method

.method public abstract onCameraControlUpdateSessionConfig()V
.end method

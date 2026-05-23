.class public interface abstract Landroidx/camera/core/impl/CameraCaptureResult;
.super Ljava/lang/Object;
.source "CameraCaptureResult.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/core/impl/CameraCaptureResult$EmptyCameraCaptureResult;
    }
.end annotation


# virtual methods
.method public abstract getAeState()Landroidx/camera/core/impl/CameraCaptureMetaData$AeState;
.end method

.method public abstract getAfMode()Landroidx/camera/core/impl/CameraCaptureMetaData$AfMode;
.end method

.method public abstract getAfState()Landroidx/camera/core/impl/CameraCaptureMetaData$AfState;
.end method

.method public abstract getAwbState()Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;
.end method

.method public getCaptureResult()Landroid/hardware/camera2/CaptureResult;
    .locals 1

    .line 83
    invoke-static {}, Landroidx/camera/core/impl/CameraCaptureResult$EmptyCameraCaptureResult;->create()Landroidx/camera/core/impl/CameraCaptureResult;

    move-result-object v0

    invoke-interface {v0}, Landroidx/camera/core/impl/CameraCaptureResult;->getCaptureResult()Landroid/hardware/camera2/CaptureResult;

    move-result-object v0

    return-object v0
.end method

.method public abstract getFlashState()Landroidx/camera/core/impl/CameraCaptureMetaData$FlashState;
.end method

.method public abstract getTagBundle()Landroidx/camera/core/impl/TagBundle;
.end method

.method public abstract getTimestamp()J
.end method

.method public populateExifData(Landroidx/camera/core/impl/utils/ExifData$Builder;)V
    .locals 1

    .line 72
    invoke-interface {p0}, Landroidx/camera/core/impl/CameraCaptureResult;->getFlashState()Landroidx/camera/core/impl/CameraCaptureMetaData$FlashState;

    move-result-object v0

    invoke-virtual {p1, v0}, Landroidx/camera/core/impl/utils/ExifData$Builder;->setFlashState(Landroidx/camera/core/impl/CameraCaptureMetaData$FlashState;)Landroidx/camera/core/impl/utils/ExifData$Builder;

    return-void
.end method

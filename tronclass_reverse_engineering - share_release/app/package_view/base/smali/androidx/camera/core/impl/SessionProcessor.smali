.class public interface abstract Landroidx/camera/core/impl/SessionProcessor;
.super Ljava/lang/Object;
.source "SessionProcessor.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/core/impl/SessionProcessor$CaptureCallback;
    }
.end annotation


# virtual methods
.method public abstract abortCapture(I)V
.end method

.method public abstract deInitSession()V
.end method

.method public getRealtimeCaptureLatency()Landroid/util/Pair;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Landroid/util/Pair<",
            "Ljava/lang/Long;",
            "Ljava/lang/Long;",
            ">;"
        }
    .end annotation

    const/4 v0, 0x0

    return-object v0
.end method

.method public getSupportedCameraOperations()Ljava/util/Set;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/Set<",
            "Ljava/lang/Integer;",
            ">;"
        }
    .end annotation

    .line 137
    invoke-static {}, Ljava/util/Collections;->emptySet()Ljava/util/Set;

    move-result-object v0

    return-object v0
.end method

.method public abstract initSession(Landroidx/camera/core/CameraInfo;Landroidx/camera/core/impl/OutputSurface;Landroidx/camera/core/impl/OutputSurface;Landroidx/camera/core/impl/OutputSurface;)Landroidx/camera/core/impl/SessionConfig;
.end method

.method public abstract onCaptureSessionEnd()V
.end method

.method public abstract onCaptureSessionStart(Landroidx/camera/core/impl/RequestProcessor;)V
.end method

.method public abstract setParameters(Landroidx/camera/core/impl/Config;)V
.end method

.method public abstract startCapture(Landroidx/camera/core/impl/SessionProcessor$CaptureCallback;)I
.end method

.method public abstract startRepeating(Landroidx/camera/core/impl/SessionProcessor$CaptureCallback;)I
.end method

.method public startTrigger(Landroidx/camera/core/impl/Config;Landroidx/camera/core/impl/SessionProcessor$CaptureCallback;)I
    .locals 0

    const/4 p1, -0x1

    return p1
.end method

.method public abstract stopRepeating()V
.end method

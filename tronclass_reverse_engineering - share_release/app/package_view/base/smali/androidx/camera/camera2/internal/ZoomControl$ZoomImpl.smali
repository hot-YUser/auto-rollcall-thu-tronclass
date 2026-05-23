.class interface abstract Landroidx/camera/camera2/internal/ZoomControl$ZoomImpl;
.super Ljava/lang/Object;
.source "ZoomControl.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/camera2/internal/ZoomControl;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x608
    name = "ZoomImpl"
.end annotation


# virtual methods
.method public abstract addRequestOption(Landroidx/camera/camera2/impl/Camera2ImplConfig$Builder;)V
.end method

.method public abstract getCropSensorRegion()Landroid/graphics/Rect;
.end method

.method public abstract getMaxZoom()F
.end method

.method public abstract getMinZoom()F
.end method

.method public abstract onCaptureResult(Landroid/hardware/camera2/TotalCaptureResult;)V
.end method

.method public abstract resetZoom()V
.end method

.method public abstract setZoomRatio(FLandroidx/concurrent/futures/CallbackToFutureAdapter$Completer;)V
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(F",
            "Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer<",
            "Ljava/lang/Void;",
            ">;)V"
        }
    .end annotation
.end method

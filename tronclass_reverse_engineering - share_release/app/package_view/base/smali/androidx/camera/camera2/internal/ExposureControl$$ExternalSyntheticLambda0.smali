.class public final synthetic Landroidx/camera/camera2/internal/ExposureControl$$ExternalSyntheticLambda0;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Landroidx/camera/camera2/internal/Camera2CameraControlImpl$CaptureResultListener;


# instance fields
.field public final synthetic f$0:I

.field public final synthetic f$1:Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;


# direct methods
.method public synthetic constructor <init>(ILandroidx/concurrent/futures/CallbackToFutureAdapter$Completer;)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput p1, p0, Landroidx/camera/camera2/internal/ExposureControl$$ExternalSyntheticLambda0;->f$0:I

    iput-object p2, p0, Landroidx/camera/camera2/internal/ExposureControl$$ExternalSyntheticLambda0;->f$1:Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;

    return-void
.end method


# virtual methods
.method public final onCaptureResult(Landroid/hardware/camera2/TotalCaptureResult;)Z
    .locals 2

    .line 0
    iget v0, p0, Landroidx/camera/camera2/internal/ExposureControl$$ExternalSyntheticLambda0;->f$0:I

    iget-object v1, p0, Landroidx/camera/camera2/internal/ExposureControl$$ExternalSyntheticLambda0;->f$1:Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;

    invoke-static {v0, v1, p1}, Landroidx/camera/camera2/internal/ExposureControl;->lambda$setExposureCompensationIndex$0(ILandroidx/concurrent/futures/CallbackToFutureAdapter$Completer;Landroid/hardware/camera2/TotalCaptureResult;)Z

    move-result p1

    return p1
.end method

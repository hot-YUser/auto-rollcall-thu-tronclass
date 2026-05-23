.class public final synthetic Landroidx/camera/camera2/internal/CaptureSession$$ExternalSyntheticLambda0;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Landroidx/camera/camera2/internal/CameraBurstCaptureCallback$CaptureSequenceCallback;


# instance fields
.field public final synthetic f$0:Landroidx/camera/camera2/internal/CaptureSession;


# direct methods
.method public synthetic constructor <init>(Landroidx/camera/camera2/internal/CaptureSession;)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Landroidx/camera/camera2/internal/CaptureSession$$ExternalSyntheticLambda0;->f$0:Landroidx/camera/camera2/internal/CaptureSession;

    return-void
.end method


# virtual methods
.method public final onCaptureSequenceCompletedOrAborted(Landroid/hardware/camera2/CameraCaptureSession;IZ)V
    .locals 1

    .line 0
    iget-object v0, p0, Landroidx/camera/camera2/internal/CaptureSession$$ExternalSyntheticLambda0;->f$0:Landroidx/camera/camera2/internal/CaptureSession;

    invoke-virtual {v0, p1, p2, p3}, Landroidx/camera/camera2/internal/CaptureSession;->lambda$issueBurstCaptureRequest$2$androidx-camera-camera2-internal-CaptureSession(Landroid/hardware/camera2/CameraCaptureSession;IZ)V

    return-void
.end method

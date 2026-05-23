.class public final synthetic Landroidx/camera/camera2/internal/compat/workaround/WaitForRepeatingRequestStart$$ExternalSyntheticLambda1;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Landroidx/camera/core/impl/utils/futures/AsyncFunction;


# instance fields
.field public final synthetic f$0:Landroidx/camera/camera2/internal/compat/workaround/WaitForRepeatingRequestStart$OpenCaptureSession;

.field public final synthetic f$1:Landroid/hardware/camera2/CameraDevice;

.field public final synthetic f$2:Landroidx/camera/camera2/internal/compat/params/SessionConfigurationCompat;

.field public final synthetic f$3:Ljava/util/List;


# direct methods
.method public synthetic constructor <init>(Landroidx/camera/camera2/internal/compat/workaround/WaitForRepeatingRequestStart$OpenCaptureSession;Landroid/hardware/camera2/CameraDevice;Landroidx/camera/camera2/internal/compat/params/SessionConfigurationCompat;Ljava/util/List;)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Landroidx/camera/camera2/internal/compat/workaround/WaitForRepeatingRequestStart$$ExternalSyntheticLambda1;->f$0:Landroidx/camera/camera2/internal/compat/workaround/WaitForRepeatingRequestStart$OpenCaptureSession;

    iput-object p2, p0, Landroidx/camera/camera2/internal/compat/workaround/WaitForRepeatingRequestStart$$ExternalSyntheticLambda1;->f$1:Landroid/hardware/camera2/CameraDevice;

    iput-object p3, p0, Landroidx/camera/camera2/internal/compat/workaround/WaitForRepeatingRequestStart$$ExternalSyntheticLambda1;->f$2:Landroidx/camera/camera2/internal/compat/params/SessionConfigurationCompat;

    iput-object p4, p0, Landroidx/camera/camera2/internal/compat/workaround/WaitForRepeatingRequestStart$$ExternalSyntheticLambda1;->f$3:Ljava/util/List;

    return-void
.end method


# virtual methods
.method public final apply(Ljava/lang/Object;)Lcom/google/common/util/concurrent/ListenableFuture;
    .locals 4

    .line 0
    iget-object v0, p0, Landroidx/camera/camera2/internal/compat/workaround/WaitForRepeatingRequestStart$$ExternalSyntheticLambda1;->f$0:Landroidx/camera/camera2/internal/compat/workaround/WaitForRepeatingRequestStart$OpenCaptureSession;

    iget-object v1, p0, Landroidx/camera/camera2/internal/compat/workaround/WaitForRepeatingRequestStart$$ExternalSyntheticLambda1;->f$1:Landroid/hardware/camera2/CameraDevice;

    iget-object v2, p0, Landroidx/camera/camera2/internal/compat/workaround/WaitForRepeatingRequestStart$$ExternalSyntheticLambda1;->f$2:Landroidx/camera/camera2/internal/compat/params/SessionConfigurationCompat;

    iget-object v3, p0, Landroidx/camera/camera2/internal/compat/workaround/WaitForRepeatingRequestStart$$ExternalSyntheticLambda1;->f$3:Ljava/util/List;

    check-cast p1, Ljava/util/List;

    invoke-static {v0, v1, v2, v3, p1}, Landroidx/camera/camera2/internal/compat/workaround/WaitForRepeatingRequestStart;->lambda$openCaptureSession$1(Landroidx/camera/camera2/internal/compat/workaround/WaitForRepeatingRequestStart$OpenCaptureSession;Landroid/hardware/camera2/CameraDevice;Landroidx/camera/camera2/internal/compat/params/SessionConfigurationCompat;Ljava/util/List;Ljava/util/List;)Lcom/google/common/util/concurrent/ListenableFuture;

    move-result-object p1

    return-object p1
.end method

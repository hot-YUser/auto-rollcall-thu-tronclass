.class public final synthetic Landroidx/camera/lifecycle/ProcessCameraProvider$$ExternalSyntheticLambda1;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Landroidx/camera/core/CameraXConfig$Provider;


# instance fields
.field public final synthetic f$0:Landroidx/camera/core/CameraXConfig;


# direct methods
.method public synthetic constructor <init>(Landroidx/camera/core/CameraXConfig;)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Landroidx/camera/lifecycle/ProcessCameraProvider$$ExternalSyntheticLambda1;->f$0:Landroidx/camera/core/CameraXConfig;

    return-void
.end method


# virtual methods
.method public final getCameraXConfig()Landroidx/camera/core/CameraXConfig;
    .locals 1

    .line 0
    iget-object v0, p0, Landroidx/camera/lifecycle/ProcessCameraProvider$$ExternalSyntheticLambda1;->f$0:Landroidx/camera/core/CameraXConfig;

    invoke-static {v0}, Landroidx/camera/lifecycle/ProcessCameraProvider;->lambda$configureInstanceInternal$3(Landroidx/camera/core/CameraXConfig;)Landroidx/camera/core/CameraXConfig;

    move-result-object v0

    return-object v0
.end method

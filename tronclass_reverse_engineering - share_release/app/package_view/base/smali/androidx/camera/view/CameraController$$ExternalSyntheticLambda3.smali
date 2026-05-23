.class public final synthetic Landroidx/camera/view/CameraController$$ExternalSyntheticLambda3;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Landroidx/arch/core/util/Function;


# instance fields
.field public final synthetic f$0:Landroidx/camera/view/CameraController;


# direct methods
.method public synthetic constructor <init>(Landroidx/camera/view/CameraController;)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Landroidx/camera/view/CameraController$$ExternalSyntheticLambda3;->f$0:Landroidx/camera/view/CameraController;

    return-void
.end method


# virtual methods
.method public final apply(Ljava/lang/Object;)Ljava/lang/Object;
    .locals 1

    .line 0
    iget-object v0, p0, Landroidx/camera/view/CameraController$$ExternalSyntheticLambda3;->f$0:Landroidx/camera/view/CameraController;

    check-cast p1, Landroidx/camera/view/ProcessCameraProviderWrapper;

    invoke-virtual {v0, p1}, Landroidx/camera/view/CameraController;->lambda$new$0$androidx-camera-view-CameraController(Landroidx/camera/view/ProcessCameraProviderWrapper;)Ljava/lang/Void;

    move-result-object p1

    return-object p1
.end method

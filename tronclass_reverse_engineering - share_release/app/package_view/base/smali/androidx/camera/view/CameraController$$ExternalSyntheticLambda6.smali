.class public final synthetic Landroidx/camera/view/CameraController$$ExternalSyntheticLambda6;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Ljava/lang/Runnable;


# instance fields
.field public final synthetic f$0:Landroidx/camera/view/CameraController;

.field public final synthetic f$1:I


# direct methods
.method public synthetic constructor <init>(Landroidx/camera/view/CameraController;I)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Landroidx/camera/view/CameraController$$ExternalSyntheticLambda6;->f$0:Landroidx/camera/view/CameraController;

    iput p2, p0, Landroidx/camera/view/CameraController$$ExternalSyntheticLambda6;->f$1:I

    return-void
.end method


# virtual methods
.method public final run()V
    .locals 2

    .line 0
    iget-object v0, p0, Landroidx/camera/view/CameraController$$ExternalSyntheticLambda6;->f$0:Landroidx/camera/view/CameraController;

    iget v1, p0, Landroidx/camera/view/CameraController$$ExternalSyntheticLambda6;->f$1:I

    invoke-virtual {v0, v1}, Landroidx/camera/view/CameraController;->lambda$setEnabledUseCases$2$androidx-camera-view-CameraController(I)V

    return-void
.end method

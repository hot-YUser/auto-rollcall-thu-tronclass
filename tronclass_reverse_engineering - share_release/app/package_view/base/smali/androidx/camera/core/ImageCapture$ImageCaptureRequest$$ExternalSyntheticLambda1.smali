.class public final synthetic Landroidx/camera/core/ImageCapture$ImageCaptureRequest$$ExternalSyntheticLambda1;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Ljava/lang/Runnable;


# instance fields
.field public final synthetic f$0:Landroidx/camera/core/ImageCapture$ImageCaptureRequest;

.field public final synthetic f$1:Landroidx/camera/core/ImageProxy;


# direct methods
.method public synthetic constructor <init>(Landroidx/camera/core/ImageCapture$ImageCaptureRequest;Landroidx/camera/core/ImageProxy;)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Landroidx/camera/core/ImageCapture$ImageCaptureRequest$$ExternalSyntheticLambda1;->f$0:Landroidx/camera/core/ImageCapture$ImageCaptureRequest;

    iput-object p2, p0, Landroidx/camera/core/ImageCapture$ImageCaptureRequest$$ExternalSyntheticLambda1;->f$1:Landroidx/camera/core/ImageProxy;

    return-void
.end method


# virtual methods
.method public final run()V
    .locals 2

    .line 0
    iget-object v0, p0, Landroidx/camera/core/ImageCapture$ImageCaptureRequest$$ExternalSyntheticLambda1;->f$0:Landroidx/camera/core/ImageCapture$ImageCaptureRequest;

    iget-object v1, p0, Landroidx/camera/core/ImageCapture$ImageCaptureRequest$$ExternalSyntheticLambda1;->f$1:Landroidx/camera/core/ImageProxy;

    invoke-virtual {v0, v1}, Landroidx/camera/core/ImageCapture$ImageCaptureRequest;->lambda$dispatchImage$0$androidx-camera-core-ImageCapture$ImageCaptureRequest(Landroidx/camera/core/ImageProxy;)V

    return-void
.end method

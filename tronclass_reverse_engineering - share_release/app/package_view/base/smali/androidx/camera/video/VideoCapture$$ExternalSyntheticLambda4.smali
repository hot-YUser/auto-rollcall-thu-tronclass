.class public final synthetic Landroidx/camera/video/VideoCapture$$ExternalSyntheticLambda4;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Ljava/lang/Runnable;


# instance fields
.field public final synthetic f$0:Landroidx/camera/video/VideoCapture;

.field public final synthetic f$1:Landroidx/camera/core/processing/SurfaceEdge;

.field public final synthetic f$2:Landroidx/camera/core/impl/CameraInternal;

.field public final synthetic f$3:Landroidx/camera/video/impl/VideoCaptureConfig;

.field public final synthetic f$4:Landroidx/camera/core/impl/Timebase;


# direct methods
.method public synthetic constructor <init>(Landroidx/camera/video/VideoCapture;Landroidx/camera/core/processing/SurfaceEdge;Landroidx/camera/core/impl/CameraInternal;Landroidx/camera/video/impl/VideoCaptureConfig;Landroidx/camera/core/impl/Timebase;)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Landroidx/camera/video/VideoCapture$$ExternalSyntheticLambda4;->f$0:Landroidx/camera/video/VideoCapture;

    iput-object p2, p0, Landroidx/camera/video/VideoCapture$$ExternalSyntheticLambda4;->f$1:Landroidx/camera/core/processing/SurfaceEdge;

    iput-object p3, p0, Landroidx/camera/video/VideoCapture$$ExternalSyntheticLambda4;->f$2:Landroidx/camera/core/impl/CameraInternal;

    iput-object p4, p0, Landroidx/camera/video/VideoCapture$$ExternalSyntheticLambda4;->f$3:Landroidx/camera/video/impl/VideoCaptureConfig;

    iput-object p5, p0, Landroidx/camera/video/VideoCapture$$ExternalSyntheticLambda4;->f$4:Landroidx/camera/core/impl/Timebase;

    return-void
.end method


# virtual methods
.method public final run()V
    .locals 5

    .line 0
    iget-object v0, p0, Landroidx/camera/video/VideoCapture$$ExternalSyntheticLambda4;->f$0:Landroidx/camera/video/VideoCapture;

    iget-object v1, p0, Landroidx/camera/video/VideoCapture$$ExternalSyntheticLambda4;->f$1:Landroidx/camera/core/processing/SurfaceEdge;

    iget-object v2, p0, Landroidx/camera/video/VideoCapture$$ExternalSyntheticLambda4;->f$2:Landroidx/camera/core/impl/CameraInternal;

    iget-object v3, p0, Landroidx/camera/video/VideoCapture$$ExternalSyntheticLambda4;->f$3:Landroidx/camera/video/impl/VideoCaptureConfig;

    iget-object v4, p0, Landroidx/camera/video/VideoCapture$$ExternalSyntheticLambda4;->f$4:Landroidx/camera/core/impl/Timebase;

    invoke-virtual {v0, v1, v2, v3, v4}, Landroidx/camera/video/VideoCapture;->lambda$createPipeline$1$androidx-camera-video-VideoCapture(Landroidx/camera/core/processing/SurfaceEdge;Landroidx/camera/core/impl/CameraInternal;Landroidx/camera/video/impl/VideoCaptureConfig;Landroidx/camera/core/impl/Timebase;)V

    return-void
.end method

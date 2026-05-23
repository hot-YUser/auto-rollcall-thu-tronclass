.class public final synthetic Landroidx/camera/video/VideoCapture$2$$ExternalSyntheticLambda0;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Ljava/lang/Runnable;


# instance fields
.field public final synthetic f$0:Landroidx/camera/video/VideoCapture$2;

.field public final synthetic f$1:Landroidx/camera/core/impl/SessionConfig$Builder;


# direct methods
.method public synthetic constructor <init>(Landroidx/camera/video/VideoCapture$2;Landroidx/camera/core/impl/SessionConfig$Builder;)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Landroidx/camera/video/VideoCapture$2$$ExternalSyntheticLambda0;->f$0:Landroidx/camera/video/VideoCapture$2;

    iput-object p2, p0, Landroidx/camera/video/VideoCapture$2$$ExternalSyntheticLambda0;->f$1:Landroidx/camera/core/impl/SessionConfig$Builder;

    return-void
.end method


# virtual methods
.method public final run()V
    .locals 2

    .line 0
    iget-object v0, p0, Landroidx/camera/video/VideoCapture$2$$ExternalSyntheticLambda0;->f$0:Landroidx/camera/video/VideoCapture$2;

    iget-object v1, p0, Landroidx/camera/video/VideoCapture$2$$ExternalSyntheticLambda0;->f$1:Landroidx/camera/core/impl/SessionConfig$Builder;

    invoke-virtual {v0, v1}, Landroidx/camera/video/VideoCapture$2;->lambda$onCaptureCompleted$0$androidx-camera-video-VideoCapture$2(Landroidx/camera/core/impl/SessionConfig$Builder;)V

    return-void
.end method

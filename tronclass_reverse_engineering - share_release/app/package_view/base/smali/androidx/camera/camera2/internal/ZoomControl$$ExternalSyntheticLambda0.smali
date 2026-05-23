.class public final synthetic Landroidx/camera/camera2/internal/ZoomControl$$ExternalSyntheticLambda0;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Landroidx/concurrent/futures/CallbackToFutureAdapter$Resolver;


# instance fields
.field public final synthetic f$0:Landroidx/camera/camera2/internal/ZoomControl;

.field public final synthetic f$1:Landroidx/camera/core/ZoomState;


# direct methods
.method public synthetic constructor <init>(Landroidx/camera/camera2/internal/ZoomControl;Landroidx/camera/core/ZoomState;)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Landroidx/camera/camera2/internal/ZoomControl$$ExternalSyntheticLambda0;->f$0:Landroidx/camera/camera2/internal/ZoomControl;

    iput-object p2, p0, Landroidx/camera/camera2/internal/ZoomControl$$ExternalSyntheticLambda0;->f$1:Landroidx/camera/core/ZoomState;

    return-void
.end method


# virtual methods
.method public final attachCompleter(Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;)Ljava/lang/Object;
    .locals 2

    .line 0
    iget-object v0, p0, Landroidx/camera/camera2/internal/ZoomControl$$ExternalSyntheticLambda0;->f$0:Landroidx/camera/camera2/internal/ZoomControl;

    iget-object v1, p0, Landroidx/camera/camera2/internal/ZoomControl$$ExternalSyntheticLambda0;->f$1:Landroidx/camera/core/ZoomState;

    invoke-virtual {v0, v1, p1}, Landroidx/camera/camera2/internal/ZoomControl;->lambda$setZoomRatio$1$androidx-camera-camera2-internal-ZoomControl(Landroidx/camera/core/ZoomState;Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;)Ljava/lang/Object;

    move-result-object p1

    return-object p1
.end method

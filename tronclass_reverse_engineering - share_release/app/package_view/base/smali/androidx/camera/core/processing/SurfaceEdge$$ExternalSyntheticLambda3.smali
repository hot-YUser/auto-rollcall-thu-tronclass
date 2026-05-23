.class public final synthetic Landroidx/camera/core/processing/SurfaceEdge$$ExternalSyntheticLambda3;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Ljava/lang/Runnable;


# instance fields
.field public final synthetic f$0:Landroidx/camera/core/processing/SurfaceEdge;

.field public final synthetic f$1:I

.field public final synthetic f$2:I


# direct methods
.method public synthetic constructor <init>(Landroidx/camera/core/processing/SurfaceEdge;II)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Landroidx/camera/core/processing/SurfaceEdge$$ExternalSyntheticLambda3;->f$0:Landroidx/camera/core/processing/SurfaceEdge;

    iput p2, p0, Landroidx/camera/core/processing/SurfaceEdge$$ExternalSyntheticLambda3;->f$1:I

    iput p3, p0, Landroidx/camera/core/processing/SurfaceEdge$$ExternalSyntheticLambda3;->f$2:I

    return-void
.end method


# virtual methods
.method public final run()V
    .locals 3

    .line 0
    iget-object v0, p0, Landroidx/camera/core/processing/SurfaceEdge$$ExternalSyntheticLambda3;->f$0:Landroidx/camera/core/processing/SurfaceEdge;

    iget v1, p0, Landroidx/camera/core/processing/SurfaceEdge$$ExternalSyntheticLambda3;->f$1:I

    iget v2, p0, Landroidx/camera/core/processing/SurfaceEdge$$ExternalSyntheticLambda3;->f$2:I

    invoke-virtual {v0, v1, v2}, Landroidx/camera/core/processing/SurfaceEdge;->lambda$updateTransformation$3$androidx-camera-core-processing-SurfaceEdge(II)V

    return-void
.end method

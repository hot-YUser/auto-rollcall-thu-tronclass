.class public final synthetic Landroidx/camera/core/imagecapture/CaptureNode$$ExternalSyntheticLambda1;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Landroidx/core/util/Consumer;


# instance fields
.field public final synthetic f$0:Landroidx/camera/core/imagecapture/CaptureNode;

.field public final synthetic f$1:Landroidx/camera/core/imagecapture/NoMetadataImageReader;


# direct methods
.method public synthetic constructor <init>(Landroidx/camera/core/imagecapture/CaptureNode;Landroidx/camera/core/imagecapture/NoMetadataImageReader;)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Landroidx/camera/core/imagecapture/CaptureNode$$ExternalSyntheticLambda1;->f$0:Landroidx/camera/core/imagecapture/CaptureNode;

    iput-object p2, p0, Landroidx/camera/core/imagecapture/CaptureNode$$ExternalSyntheticLambda1;->f$1:Landroidx/camera/core/imagecapture/NoMetadataImageReader;

    return-void
.end method


# virtual methods
.method public final accept(Ljava/lang/Object;)V
    .locals 2

    .line 0
    iget-object v0, p0, Landroidx/camera/core/imagecapture/CaptureNode$$ExternalSyntheticLambda1;->f$0:Landroidx/camera/core/imagecapture/CaptureNode;

    iget-object v1, p0, Landroidx/camera/core/imagecapture/CaptureNode$$ExternalSyntheticLambda1;->f$1:Landroidx/camera/core/imagecapture/NoMetadataImageReader;

    check-cast p1, Landroidx/camera/core/imagecapture/ProcessingRequest;

    invoke-virtual {v0, v1, p1}, Landroidx/camera/core/imagecapture/CaptureNode;->lambda$transform$0$androidx-camera-core-imagecapture-CaptureNode(Landroidx/camera/core/imagecapture/NoMetadataImageReader;Landroidx/camera/core/imagecapture/ProcessingRequest;)V

    return-void
.end method

.class public final synthetic Landroidx/camera/core/imagecapture/ProcessingNode$$ExternalSyntheticLambda0;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Landroidx/core/util/Consumer;


# instance fields
.field public final synthetic f$0:Landroidx/camera/core/imagecapture/ProcessingNode;


# direct methods
.method public synthetic constructor <init>(Landroidx/camera/core/imagecapture/ProcessingNode;)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Landroidx/camera/core/imagecapture/ProcessingNode$$ExternalSyntheticLambda0;->f$0:Landroidx/camera/core/imagecapture/ProcessingNode;

    return-void
.end method


# virtual methods
.method public final accept(Ljava/lang/Object;)V
    .locals 1

    .line 0
    iget-object v0, p0, Landroidx/camera/core/imagecapture/ProcessingNode$$ExternalSyntheticLambda0;->f$0:Landroidx/camera/core/imagecapture/ProcessingNode;

    check-cast p1, Landroidx/camera/core/imagecapture/ProcessingNode$InputPacket;

    invoke-virtual {v0, p1}, Landroidx/camera/core/imagecapture/ProcessingNode;->lambda$transform$1$androidx-camera-core-imagecapture-ProcessingNode(Landroidx/camera/core/imagecapture/ProcessingNode$InputPacket;)V

    return-void
.end method

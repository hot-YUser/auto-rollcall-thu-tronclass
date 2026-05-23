.class public final synthetic Landroidx/camera/core/imagecapture/TakePictureManager$$ExternalSyntheticLambda1;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Ljava/lang/Runnable;


# instance fields
.field public final synthetic f$0:Landroidx/camera/core/imagecapture/TakePictureManager;

.field public final synthetic f$1:Landroidx/camera/core/imagecapture/RequestWithCallback;


# direct methods
.method public synthetic constructor <init>(Landroidx/camera/core/imagecapture/TakePictureManager;Landroidx/camera/core/imagecapture/RequestWithCallback;)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Landroidx/camera/core/imagecapture/TakePictureManager$$ExternalSyntheticLambda1;->f$0:Landroidx/camera/core/imagecapture/TakePictureManager;

    iput-object p2, p0, Landroidx/camera/core/imagecapture/TakePictureManager$$ExternalSyntheticLambda1;->f$1:Landroidx/camera/core/imagecapture/RequestWithCallback;

    return-void
.end method


# virtual methods
.method public final run()V
    .locals 2

    .line 0
    iget-object v0, p0, Landroidx/camera/core/imagecapture/TakePictureManager$$ExternalSyntheticLambda1;->f$0:Landroidx/camera/core/imagecapture/TakePictureManager;

    iget-object v1, p0, Landroidx/camera/core/imagecapture/TakePictureManager$$ExternalSyntheticLambda1;->f$1:Landroidx/camera/core/imagecapture/RequestWithCallback;

    invoke-virtual {v0, v1}, Landroidx/camera/core/imagecapture/TakePictureManager;->lambda$trackCurrentRequests$1$androidx-camera-core-imagecapture-TakePictureManager(Landroidx/camera/core/imagecapture/RequestWithCallback;)V

    return-void
.end method

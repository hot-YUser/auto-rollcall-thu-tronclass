.class abstract Landroidx/camera/core/imagecapture/CaptureNode$In;
.super Ljava/lang/Object;
.source "CaptureNode.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/core/imagecapture/CaptureNode;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x408
    name = "In"
.end annotation


# instance fields
.field private mCameraCaptureCallback:Landroidx/camera/core/impl/CameraCaptureCallback;

.field private mSurface:Landroidx/camera/core/impl/DeferrableSurface;


# direct methods
.method constructor <init>()V
    .locals 1

    .line 283
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 285
    new-instance v0, Landroidx/camera/core/imagecapture/CaptureNode$In$1;

    invoke-direct {v0, p0}, Landroidx/camera/core/imagecapture/CaptureNode$In$1;-><init>(Landroidx/camera/core/imagecapture/CaptureNode$In;)V

    iput-object v0, p0, Landroidx/camera/core/imagecapture/CaptureNode$In;->mCameraCaptureCallback:Landroidx/camera/core/impl/CameraCaptureCallback;

    return-void
.end method

.method static of(Landroid/util/Size;IIZLandroidx/camera/core/ImageReaderProxyProvider;)Landroidx/camera/core/imagecapture/CaptureNode$In;
    .locals 9

    .line 365
    new-instance v8, Landroidx/camera/core/imagecapture/AutoValue_CaptureNode_In;

    new-instance v6, Landroidx/camera/core/processing/Edge;

    invoke-direct {v6}, Landroidx/camera/core/processing/Edge;-><init>()V

    new-instance v7, Landroidx/camera/core/processing/Edge;

    invoke-direct {v7}, Landroidx/camera/core/processing/Edge;-><init>()V

    move-object v0, v8

    move-object v1, p0

    move v2, p1

    move v3, p2

    move v4, p3

    move-object v5, p4

    invoke-direct/range {v0 .. v7}, Landroidx/camera/core/imagecapture/AutoValue_CaptureNode_In;-><init>(Landroid/util/Size;IIZLandroidx/camera/core/ImageReaderProxyProvider;Landroidx/camera/core/processing/Edge;Landroidx/camera/core/processing/Edge;)V

    return-object v8
.end method


# virtual methods
.method getCameraCaptureCallback()Landroidx/camera/core/impl/CameraCaptureCallback;
    .locals 1

    .line 355
    iget-object v0, p0, Landroidx/camera/core/imagecapture/CaptureNode$In;->mCameraCaptureCallback:Landroidx/camera/core/impl/CameraCaptureCallback;

    return-object v0
.end method

.method abstract getErrorEdge()Landroidx/camera/core/processing/Edge;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Landroidx/camera/core/processing/Edge<",
            "Landroidx/camera/core/ImageCaptureException;",
            ">;"
        }
    .end annotation
.end method

.method abstract getImageReaderProxyProvider()Landroidx/camera/core/ImageReaderProxyProvider;
.end method

.method abstract getInputFormat()I
.end method

.method abstract getOutputFormat()I
.end method

.method abstract getRequestEdge()Landroidx/camera/core/processing/Edge;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Landroidx/camera/core/processing/Edge<",
            "Landroidx/camera/core/imagecapture/ProcessingRequest;",
            ">;"
        }
    .end annotation
.end method

.method abstract getSize()Landroid/util/Size;
.end method

.method getSurface()Landroidx/camera/core/impl/DeferrableSurface;
    .locals 1

    .line 340
    iget-object v0, p0, Landroidx/camera/core/imagecapture/CaptureNode$In;->mSurface:Landroidx/camera/core/impl/DeferrableSurface;

    invoke-static {v0}, Ljava/util/Objects;->requireNonNull(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroidx/camera/core/impl/DeferrableSurface;

    return-object v0
.end method

.method abstract isVirtualCamera()Z
.end method

.method setCameraCaptureCallback(Landroidx/camera/core/impl/CameraCaptureCallback;)V
    .locals 0

    .line 359
    iput-object p1, p0, Landroidx/camera/core/imagecapture/CaptureNode$In;->mCameraCaptureCallback:Landroidx/camera/core/impl/CameraCaptureCallback;

    return-void
.end method

.method setSurface(Landroid/view/Surface;)V
    .locals 3

    .line 344
    iget-object v0, p0, Landroidx/camera/core/imagecapture/CaptureNode$In;->mSurface:Landroidx/camera/core/impl/DeferrableSurface;

    if-nez v0, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    const-string v1, "The surface is already set."

    invoke-static {v0, v1}, Landroidx/core/util/Preconditions;->checkState(ZLjava/lang/String;)V

    .line 345
    new-instance v0, Landroidx/camera/core/impl/ImmediateSurface;

    invoke-virtual {p0}, Landroidx/camera/core/imagecapture/CaptureNode$In;->getSize()Landroid/util/Size;

    move-result-object v1

    invoke-virtual {p0}, Landroidx/camera/core/imagecapture/CaptureNode$In;->getInputFormat()I

    move-result v2

    invoke-direct {v0, p1, v1, v2}, Landroidx/camera/core/impl/ImmediateSurface;-><init>(Landroid/view/Surface;Landroid/util/Size;I)V

    iput-object v0, p0, Landroidx/camera/core/imagecapture/CaptureNode$In;->mSurface:Landroidx/camera/core/impl/DeferrableSurface;

    return-void
.end method

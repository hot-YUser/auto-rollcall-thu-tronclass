.class Landroidx/camera/core/imagecapture/ProcessingRequest;
.super Ljava/lang/Object;
.source "ProcessingRequest.java"


# instance fields
.field private final mCallback:Landroidx/camera/core/imagecapture/TakePictureCallback;

.field final mCaptureFuture:Lcom/google/common/util/concurrent/ListenableFuture;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Lcom/google/common/util/concurrent/ListenableFuture<",
            "Ljava/lang/Void;",
            ">;"
        }
    .end annotation
.end field

.field private final mCropRect:Landroid/graphics/Rect;

.field private final mJpegQuality:I

.field private final mOutputFileOptions:Landroidx/camera/core/ImageCapture$OutputFileOptions;

.field private final mRotationDegrees:I

.field private final mSensorToBufferTransform:Landroid/graphics/Matrix;

.field private final mStageIds:Ljava/util/List;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/List<",
            "Ljava/lang/Integer;",
            ">;"
        }
    .end annotation
.end field

.field private final mTagBundleKey:Ljava/lang/String;


# direct methods
.method constructor <init>(Landroidx/camera/core/impl/CaptureBundle;Landroidx/camera/core/ImageCapture$OutputFileOptions;Landroid/graphics/Rect;IILandroid/graphics/Matrix;Landroidx/camera/core/imagecapture/TakePictureCallback;Lcom/google/common/util/concurrent/ListenableFuture;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroidx/camera/core/impl/CaptureBundle;",
            "Landroidx/camera/core/ImageCapture$OutputFileOptions;",
            "Landroid/graphics/Rect;",
            "II",
            "Landroid/graphics/Matrix;",
            "Landroidx/camera/core/imagecapture/TakePictureCallback;",
            "Lcom/google/common/util/concurrent/ListenableFuture<",
            "Ljava/lang/Void;",
            ">;)V"
        }
    .end annotation

    .line 71
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 72
    iput-object p2, p0, Landroidx/camera/core/imagecapture/ProcessingRequest;->mOutputFileOptions:Landroidx/camera/core/ImageCapture$OutputFileOptions;

    .line 73
    iput p5, p0, Landroidx/camera/core/imagecapture/ProcessingRequest;->mJpegQuality:I

    .line 74
    iput p4, p0, Landroidx/camera/core/imagecapture/ProcessingRequest;->mRotationDegrees:I

    .line 75
    iput-object p3, p0, Landroidx/camera/core/imagecapture/ProcessingRequest;->mCropRect:Landroid/graphics/Rect;

    .line 76
    iput-object p6, p0, Landroidx/camera/core/imagecapture/ProcessingRequest;->mSensorToBufferTransform:Landroid/graphics/Matrix;

    .line 77
    iput-object p7, p0, Landroidx/camera/core/imagecapture/ProcessingRequest;->mCallback:Landroidx/camera/core/imagecapture/TakePictureCallback;

    .line 78
    invoke-virtual {p1}, Ljava/lang/Object;->hashCode()I

    move-result p2

    invoke-static {p2}, Ljava/lang/String;->valueOf(I)Ljava/lang/String;

    move-result-object p2

    iput-object p2, p0, Landroidx/camera/core/imagecapture/ProcessingRequest;->mTagBundleKey:Ljava/lang/String;

    .line 79
    new-instance p2, Ljava/util/ArrayList;

    invoke-direct {p2}, Ljava/util/ArrayList;-><init>()V

    iput-object p2, p0, Landroidx/camera/core/imagecapture/ProcessingRequest;->mStageIds:Ljava/util/List;

    .line 80
    invoke-interface {p1}, Landroidx/camera/core/impl/CaptureBundle;->getCaptureStages()Ljava/util/List;

    move-result-object p1

    invoke-static {p1}, Ljava/util/Objects;->requireNonNull(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Ljava/util/List;

    invoke-interface {p1}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object p1

    :goto_0
    invoke-interface {p1}, Ljava/util/Iterator;->hasNext()Z

    move-result p2

    if-eqz p2, :cond_0

    invoke-interface {p1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object p2

    check-cast p2, Landroidx/camera/core/impl/CaptureStage;

    .line 81
    iget-object p3, p0, Landroidx/camera/core/imagecapture/ProcessingRequest;->mStageIds:Ljava/util/List;

    invoke-interface {p2}, Landroidx/camera/core/impl/CaptureStage;->getId()I

    move-result p2

    invoke-static {p2}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object p2

    invoke-interface {p3, p2}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    goto :goto_0

    .line 83
    :cond_0
    iput-object p8, p0, Landroidx/camera/core/imagecapture/ProcessingRequest;->mCaptureFuture:Lcom/google/common/util/concurrent/ListenableFuture;

    return-void
.end method


# virtual methods
.method getCaptureFuture()Lcom/google/common/util/concurrent/ListenableFuture;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Lcom/google/common/util/concurrent/ListenableFuture<",
            "Ljava/lang/Void;",
            ">;"
        }
    .end annotation

    .line 172
    iget-object v0, p0, Landroidx/camera/core/imagecapture/ProcessingRequest;->mCaptureFuture:Lcom/google/common/util/concurrent/ListenableFuture;

    return-object v0
.end method

.method getCropRect()Landroid/graphics/Rect;
    .locals 1

    .line 103
    iget-object v0, p0, Landroidx/camera/core/imagecapture/ProcessingRequest;->mCropRect:Landroid/graphics/Rect;

    return-object v0
.end method

.method getJpegQuality()I
    .locals 1

    .line 111
    iget v0, p0, Landroidx/camera/core/imagecapture/ProcessingRequest;->mJpegQuality:I

    return v0
.end method

.method getOutputFileOptions()Landroidx/camera/core/ImageCapture$OutputFileOptions;
    .locals 1

    .line 98
    iget-object v0, p0, Landroidx/camera/core/imagecapture/ProcessingRequest;->mOutputFileOptions:Landroidx/camera/core/ImageCapture$OutputFileOptions;

    return-object v0
.end method

.method getRotationDegrees()I
    .locals 1

    .line 107
    iget v0, p0, Landroidx/camera/core/imagecapture/ProcessingRequest;->mRotationDegrees:I

    return v0
.end method

.method getSensorToBufferTransform()Landroid/graphics/Matrix;
    .locals 1

    .line 116
    iget-object v0, p0, Landroidx/camera/core/imagecapture/ProcessingRequest;->mSensorToBufferTransform:Landroid/graphics/Matrix;

    return-object v0
.end method

.method getStageIds()Ljava/util/List;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Ljava/lang/Integer;",
            ">;"
        }
    .end annotation

    .line 93
    iget-object v0, p0, Landroidx/camera/core/imagecapture/ProcessingRequest;->mStageIds:Ljava/util/List;

    return-object v0
.end method

.method getTagBundleKey()Ljava/lang/String;
    .locals 1

    .line 88
    iget-object v0, p0, Landroidx/camera/core/imagecapture/ProcessingRequest;->mTagBundleKey:Ljava/lang/String;

    return-object v0
.end method

.method isAborted()Z
    .locals 1

    .line 167
    iget-object v0, p0, Landroidx/camera/core/imagecapture/ProcessingRequest;->mCallback:Landroidx/camera/core/imagecapture/TakePictureCallback;

    invoke-interface {v0}, Landroidx/camera/core/imagecapture/TakePictureCallback;->isAborted()Z

    move-result v0

    return v0
.end method

.method isInMemoryCapture()Z
    .locals 1

    .line 120
    invoke-virtual {p0}, Landroidx/camera/core/imagecapture/ProcessingRequest;->getOutputFileOptions()Landroidx/camera/core/ImageCapture$OutputFileOptions;

    move-result-object v0

    if-nez v0, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return v0
.end method

.method onCaptureFailure(Landroidx/camera/core/ImageCaptureException;)V
    .locals 1

    .line 160
    iget-object v0, p0, Landroidx/camera/core/imagecapture/ProcessingRequest;->mCallback:Landroidx/camera/core/imagecapture/TakePictureCallback;

    invoke-interface {v0, p1}, Landroidx/camera/core/imagecapture/TakePictureCallback;->onCaptureFailure(Landroidx/camera/core/ImageCaptureException;)V

    return-void
.end method

.method onFinalResult(Landroidx/camera/core/ImageCapture$OutputFileResults;)V
    .locals 1

    .line 136
    iget-object v0, p0, Landroidx/camera/core/imagecapture/ProcessingRequest;->mCallback:Landroidx/camera/core/imagecapture/TakePictureCallback;

    invoke-interface {v0, p1}, Landroidx/camera/core/imagecapture/TakePictureCallback;->onFinalResult(Landroidx/camera/core/ImageCapture$OutputFileResults;)V

    return-void
.end method

.method onFinalResult(Landroidx/camera/core/ImageProxy;)V
    .locals 1

    .line 144
    iget-object v0, p0, Landroidx/camera/core/imagecapture/ProcessingRequest;->mCallback:Landroidx/camera/core/imagecapture/TakePictureCallback;

    invoke-interface {v0, p1}, Landroidx/camera/core/imagecapture/TakePictureCallback;->onFinalResult(Landroidx/camera/core/ImageProxy;)V

    return-void
.end method

.method onImageCaptured()V
    .locals 1

    .line 128
    iget-object v0, p0, Landroidx/camera/core/imagecapture/ProcessingRequest;->mCallback:Landroidx/camera/core/imagecapture/TakePictureCallback;

    invoke-interface {v0}, Landroidx/camera/core/imagecapture/TakePictureCallback;->onImageCaptured()V

    return-void
.end method

.method onProcessFailure(Landroidx/camera/core/ImageCaptureException;)V
    .locals 1

    .line 152
    iget-object v0, p0, Landroidx/camera/core/imagecapture/ProcessingRequest;->mCallback:Landroidx/camera/core/imagecapture/TakePictureCallback;

    invoke-interface {v0, p1}, Landroidx/camera/core/imagecapture/TakePictureCallback;->onProcessFailure(Landroidx/camera/core/ImageCaptureException;)V

    return-void
.end method

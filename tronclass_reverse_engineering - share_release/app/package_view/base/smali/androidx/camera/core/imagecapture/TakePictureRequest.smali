.class public abstract Landroidx/camera/core/imagecapture/TakePictureRequest;
.super Ljava/lang/Object;
.source "TakePictureRequest.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/core/imagecapture/TakePictureRequest$RetryControl;
    }
.end annotation


# instance fields
.field private mRemainingRetires:I


# direct methods
.method public constructor <init>()V
    .locals 1

    .line 56
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 63
    new-instance v0, Landroidx/camera/core/internal/compat/workaround/CaptureFailedRetryEnabler;

    invoke-direct {v0}, Landroidx/camera/core/internal/compat/workaround/CaptureFailedRetryEnabler;-><init>()V

    invoke-virtual {v0}, Landroidx/camera/core/internal/compat/workaround/CaptureFailedRetryEnabler;->getRetryCount()I

    move-result v0

    iput v0, p0, Landroidx/camera/core/imagecapture/TakePictureRequest;->mRemainingRetires:I

    return-void
.end method

.method public static of(Ljava/util/concurrent/Executor;Landroidx/camera/core/ImageCapture$OnImageCapturedCallback;Landroidx/camera/core/ImageCapture$OnImageSavedCallback;Landroidx/camera/core/ImageCapture$OutputFileOptions;Landroid/graphics/Rect;Landroid/graphics/Matrix;IIILjava/util/List;)Landroidx/camera/core/imagecapture/TakePictureRequest;
    .locals 12
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/concurrent/Executor;",
            "Landroidx/camera/core/ImageCapture$OnImageCapturedCallback;",
            "Landroidx/camera/core/ImageCapture$OnImageSavedCallback;",
            "Landroidx/camera/core/ImageCapture$OutputFileOptions;",
            "Landroid/graphics/Rect;",
            "Landroid/graphics/Matrix;",
            "III",
            "Ljava/util/List<",
            "Landroidx/camera/core/impl/CameraCaptureCallback;",
            ">;)",
            "Landroidx/camera/core/imagecapture/TakePictureRequest;"
        }
    .end annotation

    const/4 v0, 0x1

    const/4 v1, 0x0

    if-nez p2, :cond_0

    move v2, v0

    goto :goto_0

    :cond_0
    move v2, v1

    :goto_0
    if-nez p3, :cond_1

    move v3, v0

    goto :goto_1

    :cond_1
    move v3, v1

    :goto_1
    if-ne v2, v3, :cond_2

    move v2, v0

    goto :goto_2

    :cond_2
    move v2, v1

    .line 218
    :goto_2
    const-string v3, "onDiskCallback and outputFileOptions should be both null or both non-null."

    invoke-static {v2, v3}, Landroidx/core/util/Preconditions;->checkArgument(ZLjava/lang/Object;)V

    if-nez p2, :cond_3

    move v2, v0

    goto :goto_3

    :cond_3
    move v2, v1

    :goto_3
    if-nez p1, :cond_4

    goto :goto_4

    :cond_4
    move v0, v1

    :goto_4
    xor-int/2addr v0, v2

    .line 220
    const-string v1, "One and only one on-disk or in-memory callback should be present."

    invoke-static {v0, v1}, Landroidx/core/util/Preconditions;->checkArgument(ZLjava/lang/Object;)V

    .line 222
    new-instance v11, Landroidx/camera/core/imagecapture/AutoValue_TakePictureRequest;

    move-object v0, v11

    move-object v1, p0

    move-object v2, p1

    move-object v3, p2

    move-object v4, p3

    move-object/from16 v5, p4

    move-object/from16 v6, p5

    move/from16 v7, p6

    move/from16 v8, p7

    move/from16 v9, p8

    move-object/from16 v10, p9

    invoke-direct/range {v0 .. v10}, Landroidx/camera/core/imagecapture/AutoValue_TakePictureRequest;-><init>(Ljava/util/concurrent/Executor;Landroidx/camera/core/ImageCapture$OnImageCapturedCallback;Landroidx/camera/core/ImageCapture$OnImageSavedCallback;Landroidx/camera/core/ImageCapture$OutputFileOptions;Landroid/graphics/Rect;Landroid/graphics/Matrix;IIILjava/util/List;)V

    return-object v11
.end method


# virtual methods
.method decrementRetryCounter()Z
    .locals 2

    .line 143
    invoke-static {}, Landroidx/camera/core/impl/utils/Threads;->checkMainThread()V

    .line 144
    iget v0, p0, Landroidx/camera/core/imagecapture/TakePictureRequest;->mRemainingRetires:I

    if-lez v0, :cond_0

    const/4 v1, 0x1

    sub-int/2addr v0, v1

    .line 145
    iput v0, p0, Landroidx/camera/core/imagecapture/TakePictureRequest;->mRemainingRetires:I

    return v1

    :cond_0
    const/4 v0, 0x0

    return v0
.end method

.method abstract getAppExecutor()Ljava/util/concurrent/Executor;
.end method

.method abstract getCaptureMode()I
.end method

.method abstract getCropRect()Landroid/graphics/Rect;
.end method

.method abstract getInMemoryCallback()Landroidx/camera/core/ImageCapture$OnImageCapturedCallback;
.end method

.method abstract getJpegQuality()I
.end method

.method abstract getOnDiskCallback()Landroidx/camera/core/ImageCapture$OnImageSavedCallback;
.end method

.method abstract getOutputFileOptions()Landroidx/camera/core/ImageCapture$OutputFileOptions;
.end method

.method getRemainingRetries()I
    .locals 1

    .line 167
    invoke-static {}, Landroidx/camera/core/impl/utils/Threads;->checkMainThread()V

    .line 168
    iget v0, p0, Landroidx/camera/core/imagecapture/TakePictureRequest;->mRemainingRetires:I

    return v0
.end method

.method abstract getRotationDegrees()I
.end method

.method abstract getSensorToBufferTransform()Landroid/graphics/Matrix;
.end method

.method abstract getSessionConfigCameraCaptureCallbacks()Ljava/util/List;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Landroidx/camera/core/impl/CameraCaptureCallback;",
            ">;"
        }
    .end annotation
.end method

.method incrementRetryCounter()V
    .locals 1

    .line 157
    invoke-static {}, Landroidx/camera/core/impl/utils/Threads;->checkMainThread()V

    .line 158
    iget v0, p0, Landroidx/camera/core/imagecapture/TakePictureRequest;->mRemainingRetires:I

    add-int/lit8 v0, v0, 0x1

    iput v0, p0, Landroidx/camera/core/imagecapture/TakePictureRequest;->mRemainingRetires:I

    return-void
.end method

.method synthetic lambda$onError$0$androidx-camera-core-imagecapture-TakePictureRequest(Landroidx/camera/core/ImageCaptureException;)V
    .locals 4

    .line 176
    invoke-virtual {p0}, Landroidx/camera/core/imagecapture/TakePictureRequest;->getInMemoryCallback()Landroidx/camera/core/ImageCapture$OnImageCapturedCallback;

    move-result-object v0

    const/4 v1, 0x1

    const/4 v2, 0x0

    if-eqz v0, :cond_0

    move v0, v1

    goto :goto_0

    :cond_0
    move v0, v2

    .line 177
    :goto_0
    invoke-virtual {p0}, Landroidx/camera/core/imagecapture/TakePictureRequest;->getOnDiskCallback()Landroidx/camera/core/ImageCapture$OnImageSavedCallback;

    move-result-object v3

    if-eqz v3, :cond_1

    goto :goto_1

    :cond_1
    move v1, v2

    :goto_1
    if-eqz v0, :cond_2

    if-nez v1, :cond_2

    .line 179
    invoke-virtual {p0}, Landroidx/camera/core/imagecapture/TakePictureRequest;->getInMemoryCallback()Landroidx/camera/core/ImageCapture$OnImageCapturedCallback;

    move-result-object v0

    invoke-static {v0}, Ljava/util/Objects;->requireNonNull(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroidx/camera/core/ImageCapture$OnImageCapturedCallback;

    invoke-virtual {v0, p1}, Landroidx/camera/core/ImageCapture$OnImageCapturedCallback;->onError(Landroidx/camera/core/ImageCaptureException;)V

    goto :goto_2

    :cond_2
    if-eqz v1, :cond_3

    if-nez v0, :cond_3

    .line 181
    invoke-virtual {p0}, Landroidx/camera/core/imagecapture/TakePictureRequest;->getOnDiskCallback()Landroidx/camera/core/ImageCapture$OnImageSavedCallback;

    move-result-object v0

    invoke-static {v0}, Ljava/util/Objects;->requireNonNull(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroidx/camera/core/ImageCapture$OnImageSavedCallback;

    invoke-interface {v0, p1}, Landroidx/camera/core/ImageCapture$OnImageSavedCallback;->onError(Landroidx/camera/core/ImageCaptureException;)V

    :goto_2
    return-void

    .line 183
    :cond_3
    new-instance p1, Ljava/lang/IllegalStateException;

    const-string v0, "One and only one callback is allowed."

    invoke-direct {p1, v0}, Ljava/lang/IllegalStateException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method synthetic lambda$onResult$1$androidx-camera-core-imagecapture-TakePictureRequest(Landroidx/camera/core/ImageCapture$OutputFileResults;)V
    .locals 1

    .line 192
    invoke-virtual {p0}, Landroidx/camera/core/imagecapture/TakePictureRequest;->getOnDiskCallback()Landroidx/camera/core/ImageCapture$OnImageSavedCallback;

    move-result-object v0

    invoke-static {v0}, Ljava/util/Objects;->requireNonNull(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroidx/camera/core/ImageCapture$OnImageSavedCallback;

    .line 193
    invoke-static {p1}, Ljava/util/Objects;->requireNonNull(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Landroidx/camera/core/ImageCapture$OutputFileResults;

    .line 192
    invoke-interface {v0, p1}, Landroidx/camera/core/ImageCapture$OnImageSavedCallback;->onImageSaved(Landroidx/camera/core/ImageCapture$OutputFileResults;)V

    return-void
.end method

.method synthetic lambda$onResult$2$androidx-camera-core-imagecapture-TakePictureRequest(Landroidx/camera/core/ImageProxy;)V
    .locals 1

    .line 200
    invoke-virtual {p0}, Landroidx/camera/core/imagecapture/TakePictureRequest;->getInMemoryCallback()Landroidx/camera/core/ImageCapture$OnImageCapturedCallback;

    move-result-object v0

    invoke-static {v0}, Ljava/util/Objects;->requireNonNull(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroidx/camera/core/ImageCapture$OnImageCapturedCallback;

    .line 201
    invoke-static {p1}, Ljava/util/Objects;->requireNonNull(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Landroidx/camera/core/ImageProxy;

    .line 200
    invoke-virtual {v0, p1}, Landroidx/camera/core/ImageCapture$OnImageCapturedCallback;->onCaptureSuccess(Landroidx/camera/core/ImageProxy;)V

    return-void
.end method

.method onError(Landroidx/camera/core/ImageCaptureException;)V
    .locals 2

    .line 175
    invoke-virtual {p0}, Landroidx/camera/core/imagecapture/TakePictureRequest;->getAppExecutor()Ljava/util/concurrent/Executor;

    move-result-object v0

    new-instance v1, Landroidx/camera/core/imagecapture/TakePictureRequest$$ExternalSyntheticLambda2;

    invoke-direct {v1, p0, p1}, Landroidx/camera/core/imagecapture/TakePictureRequest$$ExternalSyntheticLambda2;-><init>(Landroidx/camera/core/imagecapture/TakePictureRequest;Landroidx/camera/core/ImageCaptureException;)V

    invoke-interface {v0, v1}, Ljava/util/concurrent/Executor;->execute(Ljava/lang/Runnable;)V

    return-void
.end method

.method onResult(Landroidx/camera/core/ImageCapture$OutputFileResults;)V
    .locals 2

    .line 192
    invoke-virtual {p0}, Landroidx/camera/core/imagecapture/TakePictureRequest;->getAppExecutor()Ljava/util/concurrent/Executor;

    move-result-object v0

    new-instance v1, Landroidx/camera/core/imagecapture/TakePictureRequest$$ExternalSyntheticLambda1;

    invoke-direct {v1, p0, p1}, Landroidx/camera/core/imagecapture/TakePictureRequest$$ExternalSyntheticLambda1;-><init>(Landroidx/camera/core/imagecapture/TakePictureRequest;Landroidx/camera/core/ImageCapture$OutputFileResults;)V

    invoke-interface {v0, v1}, Ljava/util/concurrent/Executor;->execute(Ljava/lang/Runnable;)V

    return-void
.end method

.method onResult(Landroidx/camera/core/ImageProxy;)V
    .locals 2

    .line 200
    invoke-virtual {p0}, Landroidx/camera/core/imagecapture/TakePictureRequest;->getAppExecutor()Ljava/util/concurrent/Executor;

    move-result-object v0

    new-instance v1, Landroidx/camera/core/imagecapture/TakePictureRequest$$ExternalSyntheticLambda0;

    invoke-direct {v1, p0, p1}, Landroidx/camera/core/imagecapture/TakePictureRequest$$ExternalSyntheticLambda0;-><init>(Landroidx/camera/core/imagecapture/TakePictureRequest;Landroidx/camera/core/ImageProxy;)V

    invoke-interface {v0, v1}, Ljava/util/concurrent/Executor;->execute(Ljava/lang/Runnable;)V

    return-void
.end method

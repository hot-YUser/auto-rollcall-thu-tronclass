.class public final Landroidx/camera/core/impl/CameraCaptureResults;
.super Ljava/lang/Object;
.source "CameraCaptureResults.java"


# direct methods
.method private constructor <init>()V
    .locals 0

    .line 46
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static retrieveCameraCaptureResult(Landroidx/camera/core/ImageInfo;)Landroidx/camera/core/impl/CameraCaptureResult;
    .locals 1

    .line 39
    instance-of v0, p0, Landroidx/camera/core/internal/CameraCaptureResultImageInfo;

    if-eqz v0, :cond_0

    .line 40
    check-cast p0, Landroidx/camera/core/internal/CameraCaptureResultImageInfo;

    invoke-virtual {p0}, Landroidx/camera/core/internal/CameraCaptureResultImageInfo;->getCameraCaptureResult()Landroidx/camera/core/impl/CameraCaptureResult;

    move-result-object p0

    return-object p0

    :cond_0
    const/4 p0, 0x0

    return-object p0
.end method

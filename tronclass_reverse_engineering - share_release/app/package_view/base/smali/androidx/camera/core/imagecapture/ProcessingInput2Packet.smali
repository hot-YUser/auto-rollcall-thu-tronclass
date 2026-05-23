.class final Landroidx/camera/core/imagecapture/ProcessingInput2Packet;
.super Ljava/lang/Object;
.source "ProcessingInput2Packet.java"

# interfaces
.implements Landroidx/camera/core/processing/Operation;


# annotations
.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Object;",
        "Landroidx/camera/core/processing/Operation<",
        "Landroidx/camera/core/imagecapture/ProcessingNode$InputPacket;",
        "Landroidx/camera/core/processing/Packet<",
        "Landroidx/camera/core/ImageProxy;",
        ">;>;"
    }
.end annotation


# direct methods
.method constructor <init>()V
    .locals 0

    .line 56
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method private static createPacket(Landroidx/camera/core/imagecapture/ProcessingRequest;Landroidx/camera/core/impl/utils/Exif;Landroidx/camera/core/ImageProxy;)Landroidx/camera/core/processing/Packet;
    .locals 6
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroidx/camera/core/imagecapture/ProcessingRequest;",
            "Landroidx/camera/core/impl/utils/Exif;",
            "Landroidx/camera/core/ImageProxy;",
            ")",
            "Landroidx/camera/core/processing/Packet<",
            "Landroidx/camera/core/ImageProxy;",
            ">;"
        }
    .end annotation

    .line 86
    invoke-virtual {p0}, Landroidx/camera/core/imagecapture/ProcessingRequest;->getCropRect()Landroid/graphics/Rect;

    move-result-object v2

    invoke-virtual {p0}, Landroidx/camera/core/imagecapture/ProcessingRequest;->getRotationDegrees()I

    move-result v3

    .line 87
    invoke-virtual {p0}, Landroidx/camera/core/imagecapture/ProcessingRequest;->getSensorToBufferTransform()Landroid/graphics/Matrix;

    move-result-object v4

    invoke-static {p2}, Landroidx/camera/core/imagecapture/ProcessingInput2Packet;->getCameraCaptureResult(Landroidx/camera/core/ImageProxy;)Landroidx/camera/core/impl/CameraCaptureResult;

    move-result-object v5

    move-object v0, p2

    move-object v1, p1

    .line 86
    invoke-static/range {v0 .. v5}, Landroidx/camera/core/processing/Packet;->of(Landroidx/camera/core/ImageProxy;Landroidx/camera/core/impl/utils/Exif;Landroid/graphics/Rect;ILandroid/graphics/Matrix;Landroidx/camera/core/impl/CameraCaptureResult;)Landroidx/camera/core/processing/Packet;

    move-result-object p0

    return-object p0
.end method

.method private static createPacketWithHalRotation(Landroidx/camera/core/imagecapture/ProcessingRequest;Landroidx/camera/core/impl/utils/Exif;Landroidx/camera/core/ImageProxy;)Landroidx/camera/core/processing/Packet;
    .locals 9
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroidx/camera/core/imagecapture/ProcessingRequest;",
            "Landroidx/camera/core/impl/utils/Exif;",
            "Landroidx/camera/core/ImageProxy;",
            ")",
            "Landroidx/camera/core/processing/Packet<",
            "Landroidx/camera/core/ImageProxy;",
            ">;"
        }
    .end annotation

    .line 105
    new-instance v0, Landroid/util/Size;

    invoke-interface {p2}, Landroidx/camera/core/ImageProxy;->getWidth()I

    move-result v1

    invoke-interface {p2}, Landroidx/camera/core/ImageProxy;->getHeight()I

    move-result v2

    invoke-direct {v0, v1, v2}, Landroid/util/Size;-><init>(II)V

    .line 108
    invoke-virtual {p0}, Landroidx/camera/core/imagecapture/ProcessingRequest;->getRotationDegrees()I

    move-result v1

    invoke-virtual {p1}, Landroidx/camera/core/impl/utils/Exif;->getRotation()I

    move-result v2

    sub-int/2addr v1, v2

    .line 110
    invoke-static {v1, v0}, Landroidx/camera/core/imagecapture/ProcessingInput2Packet;->getRotatedSize(ILandroid/util/Size;)Landroid/util/Size;

    move-result-object v4

    .line 113
    new-instance v2, Landroid/graphics/RectF;

    .line 114
    invoke-virtual {v0}, Landroid/util/Size;->getWidth()I

    move-result v3

    int-to-float v3, v3

    invoke-virtual {v0}, Landroid/util/Size;->getHeight()I

    move-result v0

    int-to-float v0, v0

    const/4 v5, 0x0

    invoke-direct {v2, v5, v5, v3, v0}, Landroid/graphics/RectF;-><init>(FFFF)V

    new-instance v0, Landroid/graphics/RectF;

    .line 115
    invoke-virtual {v4}, Landroid/util/Size;->getWidth()I

    move-result v3

    int-to-float v3, v3

    invoke-virtual {v4}, Landroid/util/Size;->getHeight()I

    move-result v6

    int-to-float v6, v6

    invoke-direct {v0, v5, v5, v3, v6}, Landroid/graphics/RectF;-><init>(FFFF)V

    .line 113
    invoke-static {v2, v0, v1}, Landroidx/camera/core/impl/utils/TransformUtils;->getRectToRect(Landroid/graphics/RectF;Landroid/graphics/RectF;I)Landroid/graphics/Matrix;

    move-result-object v0

    .line 119
    invoke-virtual {p0}, Landroidx/camera/core/imagecapture/ProcessingRequest;->getCropRect()Landroid/graphics/Rect;

    move-result-object v1

    invoke-static {v1, v0}, Landroidx/camera/core/imagecapture/ProcessingInput2Packet;->getUpdatedCropRect(Landroid/graphics/Rect;Landroid/graphics/Matrix;)Landroid/graphics/Rect;

    move-result-object v5

    invoke-virtual {p1}, Landroidx/camera/core/impl/utils/Exif;->getRotation()I

    move-result v6

    .line 120
    invoke-virtual {p0}, Landroidx/camera/core/imagecapture/ProcessingRequest;->getSensorToBufferTransform()Landroid/graphics/Matrix;

    move-result-object p0

    invoke-static {p0, v0}, Landroidx/camera/core/imagecapture/ProcessingInput2Packet;->getUpdatedTransform(Landroid/graphics/Matrix;Landroid/graphics/Matrix;)Landroid/graphics/Matrix;

    move-result-object v7

    .line 121
    invoke-static {p2}, Landroidx/camera/core/imagecapture/ProcessingInput2Packet;->getCameraCaptureResult(Landroidx/camera/core/ImageProxy;)Landroidx/camera/core/impl/CameraCaptureResult;

    move-result-object v8

    move-object v2, p2

    move-object v3, p1

    .line 118
    invoke-static/range {v2 .. v8}, Landroidx/camera/core/processing/Packet;->of(Landroidx/camera/core/ImageProxy;Landroidx/camera/core/impl/utils/Exif;Landroid/util/Size;Landroid/graphics/Rect;ILandroid/graphics/Matrix;Landroidx/camera/core/impl/CameraCaptureResult;)Landroidx/camera/core/processing/Packet;

    move-result-object p0

    return-object p0
.end method

.method private static getCameraCaptureResult(Landroidx/camera/core/ImageProxy;)Landroidx/camera/core/impl/CameraCaptureResult;
    .locals 0

    .line 125
    invoke-interface {p0}, Landroidx/camera/core/ImageProxy;->getImageInfo()Landroidx/camera/core/ImageInfo;

    move-result-object p0

    check-cast p0, Landroidx/camera/core/internal/CameraCaptureResultImageInfo;

    invoke-virtual {p0}, Landroidx/camera/core/internal/CameraCaptureResultImageInfo;->getCameraCaptureResult()Landroidx/camera/core/impl/CameraCaptureResult;

    move-result-object p0

    return-object p0
.end method

.method private static getRotatedSize(ILandroid/util/Size;)Landroid/util/Size;
    .locals 1

    .line 153
    invoke-static {p0}, Landroidx/camera/core/impl/utils/TransformUtils;->within360(I)I

    move-result p0

    invoke-static {p0}, Landroidx/camera/core/impl/utils/TransformUtils;->is90or270(I)Z

    move-result p0

    if-eqz p0, :cond_0

    .line 154
    new-instance p0, Landroid/util/Size;

    invoke-virtual {p1}, Landroid/util/Size;->getHeight()I

    move-result v0

    invoke-virtual {p1}, Landroid/util/Size;->getWidth()I

    move-result p1

    invoke-direct {p0, v0, p1}, Landroid/util/Size;-><init>(II)V

    move-object p1, p0

    :cond_0
    return-object p1
.end method

.method private static getUpdatedCropRect(Landroid/graphics/Rect;Landroid/graphics/Matrix;)Landroid/graphics/Rect;
    .locals 1

    .line 144
    new-instance v0, Landroid/graphics/RectF;

    invoke-direct {v0, p0}, Landroid/graphics/RectF;-><init>(Landroid/graphics/Rect;)V

    .line 145
    invoke-virtual {p1, v0}, Landroid/graphics/Matrix;->mapRect(Landroid/graphics/RectF;)Z

    .line 146
    invoke-virtual {v0}, Landroid/graphics/RectF;->sort()V

    .line 147
    new-instance p0, Landroid/graphics/Rect;

    invoke-direct {p0}, Landroid/graphics/Rect;-><init>()V

    .line 148
    invoke-virtual {v0, p0}, Landroid/graphics/RectF;->round(Landroid/graphics/Rect;)V

    return-object p0
.end method

.method private static getUpdatedTransform(Landroid/graphics/Matrix;Landroid/graphics/Matrix;)Landroid/graphics/Matrix;
    .locals 1

    .line 134
    new-instance v0, Landroid/graphics/Matrix;

    invoke-direct {v0, p0}, Landroid/graphics/Matrix;-><init>(Landroid/graphics/Matrix;)V

    .line 135
    invoke-virtual {v0, p1}, Landroid/graphics/Matrix;->postConcat(Landroid/graphics/Matrix;)Z

    return-object v0
.end method


# virtual methods
.method public apply(Landroidx/camera/core/imagecapture/ProcessingNode$InputPacket;)Landroidx/camera/core/processing/Packet;
    .locals 4
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroidx/camera/core/imagecapture/ProcessingNode$InputPacket;",
            ")",
            "Landroidx/camera/core/processing/Packet<",
            "Landroidx/camera/core/ImageProxy;",
            ">;"
        }
    .end annotation

    .annotation system Ldalvik/annotation/Throws;
        value = {
            Landroidx/camera/core/ImageCaptureException;
        }
    .end annotation

    .line 63
    invoke-virtual {p1}, Landroidx/camera/core/imagecapture/ProcessingNode$InputPacket;->getImageProxy()Landroidx/camera/core/ImageProxy;

    move-result-object v0

    .line 64
    invoke-virtual {p1}, Landroidx/camera/core/imagecapture/ProcessingNode$InputPacket;->getProcessingRequest()Landroidx/camera/core/imagecapture/ProcessingRequest;

    move-result-object p1

    .line 68
    invoke-interface {v0}, Landroidx/camera/core/ImageProxy;->getFormat()I

    move-result v1

    const/16 v2, 0x100

    if-ne v1, v2, :cond_0

    .line 70
    :try_start_0
    invoke-static {v0}, Landroidx/camera/core/impl/utils/Exif;->createFromImageProxy(Landroidx/camera/core/ImageProxy;)Landroidx/camera/core/impl/utils/Exif;

    move-result-object v1

    .line 72
    invoke-interface {v0}, Landroidx/camera/core/ImageProxy;->getPlanes()[Landroidx/camera/core/ImageProxy$PlaneProxy;

    move-result-object v2

    const/4 v3, 0x0

    aget-object v2, v2, v3

    invoke-interface {v2}, Landroidx/camera/core/ImageProxy$PlaneProxy;->getBuffer()Ljava/nio/ByteBuffer;

    move-result-object v2

    invoke-virtual {v2}, Ljava/nio/ByteBuffer;->rewind()Ljava/nio/Buffer;
    :try_end_0
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p1

    .line 74
    new-instance v0, Landroidx/camera/core/ImageCaptureException;

    const/4 v1, 0x1

    const-string v2, "Failed to extract EXIF data."

    invoke-direct {v0, v1, v2, p1}, Landroidx/camera/core/ImageCaptureException;-><init>(ILjava/lang/String;Ljava/lang/Throwable;)V

    throw v0

    :cond_0
    const/4 v1, 0x0

    .line 77
    :goto_0
    sget-object v2, Landroidx/camera/core/imagecapture/ImagePipeline;->EXIF_ROTATION_AVAILABILITY:Landroidx/camera/core/internal/compat/workaround/ExifRotationAvailability;

    invoke-virtual {v2, v0}, Landroidx/camera/core/internal/compat/workaround/ExifRotationAvailability;->shouldUseExifOrientation(Landroidx/camera/core/ImageProxy;)Z

    move-result v2

    if-eqz v2, :cond_1

    .line 78
    const-string v2, "JPEG image must have exif."

    invoke-static {v1, v2}, Landroidx/core/util/Preconditions;->checkNotNull(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 79
    invoke-static {p1, v1, v0}, Landroidx/camera/core/imagecapture/ProcessingInput2Packet;->createPacketWithHalRotation(Landroidx/camera/core/imagecapture/ProcessingRequest;Landroidx/camera/core/impl/utils/Exif;Landroidx/camera/core/ImageProxy;)Landroidx/camera/core/processing/Packet;

    move-result-object p1

    return-object p1

    .line 81
    :cond_1
    invoke-static {p1, v1, v0}, Landroidx/camera/core/imagecapture/ProcessingInput2Packet;->createPacket(Landroidx/camera/core/imagecapture/ProcessingRequest;Landroidx/camera/core/impl/utils/Exif;Landroidx/camera/core/ImageProxy;)Landroidx/camera/core/processing/Packet;

    move-result-object p1

    return-object p1
.end method

.method public bridge synthetic apply(Ljava/lang/Object;)Ljava/lang/Object;
    .locals 0
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Landroidx/camera/core/ImageCaptureException;
        }
    .end annotation

    .line 55
    check-cast p1, Landroidx/camera/core/imagecapture/ProcessingNode$InputPacket;

    invoke-virtual {p0, p1}, Landroidx/camera/core/imagecapture/ProcessingInput2Packet;->apply(Landroidx/camera/core/imagecapture/ProcessingNode$InputPacket;)Landroidx/camera/core/processing/Packet;

    move-result-object p1

    return-object p1
.end method

.class public Landroidx/camera/core/imagecapture/BitmapEffect;
.super Ljava/lang/Object;
.source "BitmapEffect.java"

# interfaces
.implements Landroidx/camera/core/processing/Operation;


# annotations
.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Object;",
        "Landroidx/camera/core/processing/Operation<",
        "Landroidx/camera/core/processing/Packet<",
        "Landroid/graphics/Bitmap;",
        ">;",
        "Landroidx/camera/core/processing/Packet<",
        "Landroid/graphics/Bitmap;",
        ">;>;"
    }
.end annotation


# instance fields
.field private final mProcessor:Landroidx/camera/core/processing/InternalImageProcessor;


# direct methods
.method constructor <init>(Landroidx/camera/core/processing/InternalImageProcessor;)V
    .locals 0

    .line 48
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 49
    iput-object p1, p0, Landroidx/camera/core/imagecapture/BitmapEffect;->mProcessor:Landroidx/camera/core/processing/InternalImageProcessor;

    return-void
.end method


# virtual methods
.method public apply(Landroidx/camera/core/processing/Packet;)Landroidx/camera/core/processing/Packet;
    .locals 9
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroidx/camera/core/processing/Packet<",
            "Landroid/graphics/Bitmap;",
            ">;)",
            "Landroidx/camera/core/processing/Packet<",
            "Landroid/graphics/Bitmap;",
            ">;"
        }
    .end annotation

    .annotation system Ldalvik/annotation/Throws;
        value = {
            Landroidx/camera/core/ImageCaptureException;
        }
    .end annotation

    .line 56
    iget-object v0, p0, Landroidx/camera/core/imagecapture/BitmapEffect;->mProcessor:Landroidx/camera/core/processing/InternalImageProcessor;

    new-instance v1, Landroidx/camera/core/processing/ImageProcessorRequest;

    new-instance v2, Landroidx/camera/core/imagecapture/RgbaImageProxy;

    invoke-direct {v2, p1}, Landroidx/camera/core/imagecapture/RgbaImageProxy;-><init>(Landroidx/camera/core/processing/Packet;)V

    const/4 v3, 0x1

    invoke-direct {v1, v2, v3}, Landroidx/camera/core/processing/ImageProcessorRequest;-><init>(Landroidx/camera/core/ImageProxy;I)V

    invoke-virtual {v0, v1}, Landroidx/camera/core/processing/InternalImageProcessor;->safeProcess(Landroidx/camera/core/ImageProcessor$Request;)Landroidx/camera/core/ImageProcessor$Response;

    move-result-object v0

    .line 61
    invoke-interface {v0}, Landroidx/camera/core/ImageProcessor$Response;->getOutputImage()Landroidx/camera/core/ImageProxy;

    move-result-object v0

    .line 63
    invoke-static {v0}, Ljava/util/Objects;->requireNonNull(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Landroidx/camera/core/ImageProxy;

    invoke-interface {v1}, Landroidx/camera/core/ImageProxy;->getPlanes()[Landroidx/camera/core/ImageProxy$PlaneProxy;

    move-result-object v1

    .line 64
    invoke-interface {v0}, Landroidx/camera/core/ImageProxy;->getWidth()I

    move-result v2

    .line 65
    invoke-interface {v0}, Landroidx/camera/core/ImageProxy;->getHeight()I

    move-result v0

    .line 62
    invoke-static {v1, v2, v0}, Landroidx/camera/core/internal/utils/ImageUtil;->createBitmapFromPlane([Landroidx/camera/core/ImageProxy$PlaneProxy;II)Landroid/graphics/Bitmap;

    move-result-object v3

    .line 68
    invoke-virtual {p1}, Landroidx/camera/core/processing/Packet;->getExif()Landroidx/camera/core/impl/utils/Exif;

    move-result-object v0

    invoke-static {v0}, Ljava/util/Objects;->requireNonNull(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    move-object v4, v0

    check-cast v4, Landroidx/camera/core/impl/utils/Exif;

    .line 69
    invoke-virtual {p1}, Landroidx/camera/core/processing/Packet;->getCropRect()Landroid/graphics/Rect;

    move-result-object v5

    .line 70
    invoke-virtual {p1}, Landroidx/camera/core/processing/Packet;->getRotationDegrees()I

    move-result v6

    .line 71
    invoke-virtual {p1}, Landroidx/camera/core/processing/Packet;->getSensorToBufferTransform()Landroid/graphics/Matrix;

    move-result-object v7

    .line 72
    invoke-virtual {p1}, Landroidx/camera/core/processing/Packet;->getCameraCaptureResult()Landroidx/camera/core/impl/CameraCaptureResult;

    move-result-object v8

    .line 66
    invoke-static/range {v3 .. v8}, Landroidx/camera/core/processing/Packet;->of(Landroid/graphics/Bitmap;Landroidx/camera/core/impl/utils/Exif;Landroid/graphics/Rect;ILandroid/graphics/Matrix;Landroidx/camera/core/impl/CameraCaptureResult;)Landroidx/camera/core/processing/Packet;

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

    .line 43
    check-cast p1, Landroidx/camera/core/processing/Packet;

    invoke-virtual {p0, p1}, Landroidx/camera/core/imagecapture/BitmapEffect;->apply(Landroidx/camera/core/processing/Packet;)Landroidx/camera/core/processing/Packet;

    move-result-object p1

    return-object p1
.end method

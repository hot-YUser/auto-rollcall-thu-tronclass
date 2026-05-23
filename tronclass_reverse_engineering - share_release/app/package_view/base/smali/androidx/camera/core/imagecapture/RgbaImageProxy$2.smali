.class Landroidx/camera/core/imagecapture/RgbaImageProxy$2;
.super Ljava/lang/Object;
.source "RgbaImageProxy.java"

# interfaces
.implements Landroidx/camera/core/ImageInfo;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Landroidx/camera/core/imagecapture/RgbaImageProxy;->createImageInfo(JILandroid/graphics/Matrix;)Landroidx/camera/core/ImageInfo;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic val$rotationDegrees:I

.field final synthetic val$sensorToBuffer:Landroid/graphics/Matrix;

.field final synthetic val$timestamp:J


# direct methods
.method constructor <init>(JILandroid/graphics/Matrix;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 244
    iput-wide p1, p0, Landroidx/camera/core/imagecapture/RgbaImageProxy$2;->val$timestamp:J

    iput p3, p0, Landroidx/camera/core/imagecapture/RgbaImageProxy$2;->val$rotationDegrees:I

    iput-object p4, p0, Landroidx/camera/core/imagecapture/RgbaImageProxy$2;->val$sensorToBuffer:Landroid/graphics/Matrix;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public getRotationDegrees()I
    .locals 1

    .line 259
    iget v0, p0, Landroidx/camera/core/imagecapture/RgbaImageProxy$2;->val$rotationDegrees:I

    return v0
.end method

.method public getSensorToBufferTransformMatrix()Landroid/graphics/Matrix;
    .locals 2

    .line 265
    new-instance v0, Landroid/graphics/Matrix;

    iget-object v1, p0, Landroidx/camera/core/imagecapture/RgbaImageProxy$2;->val$sensorToBuffer:Landroid/graphics/Matrix;

    invoke-direct {v0, v1}, Landroid/graphics/Matrix;-><init>(Landroid/graphics/Matrix;)V

    return-object v0
.end method

.method public getTagBundle()Landroidx/camera/core/impl/TagBundle;
    .locals 2

    .line 248
    new-instance v0, Ljava/lang/UnsupportedOperationException;

    const-string v1, "Custom ImageProxy does not contain TagBundle"

    invoke-direct {v0, v1}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw v0
.end method

.method public getTimestamp()J
    .locals 2

    .line 254
    iget-wide v0, p0, Landroidx/camera/core/imagecapture/RgbaImageProxy$2;->val$timestamp:J

    return-wide v0
.end method

.method public populateExifData(Landroidx/camera/core/impl/utils/ExifData$Builder;)V
    .locals 1

    .line 270
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    const-string v0, "Custom ImageProxy does not contain Exif data."

    invoke-direct {p1, v0}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

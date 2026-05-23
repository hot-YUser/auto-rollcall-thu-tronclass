.class Landroidx/camera/core/imagecapture/RgbaImageProxy$1;
.super Ljava/lang/Object;
.source "RgbaImageProxy.java"

# interfaces
.implements Landroidx/camera/core/ImageProxy$PlaneProxy;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Landroidx/camera/core/imagecapture/RgbaImageProxy;->createPlaneProxy(Ljava/nio/ByteBuffer;II)Landroidx/camera/core/ImageProxy$PlaneProxy;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic val$byteBuffer:Ljava/nio/ByteBuffer;

.field final synthetic val$pixelStride:I

.field final synthetic val$rowStride:I


# direct methods
.method constructor <init>(IILjava/nio/ByteBuffer;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 223
    iput p1, p0, Landroidx/camera/core/imagecapture/RgbaImageProxy$1;->val$rowStride:I

    iput p2, p0, Landroidx/camera/core/imagecapture/RgbaImageProxy$1;->val$pixelStride:I

    iput-object p3, p0, Landroidx/camera/core/imagecapture/RgbaImageProxy$1;->val$byteBuffer:Ljava/nio/ByteBuffer;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public getBuffer()Ljava/nio/ByteBuffer;
    .locals 1

    .line 237
    iget-object v0, p0, Landroidx/camera/core/imagecapture/RgbaImageProxy$1;->val$byteBuffer:Ljava/nio/ByteBuffer;

    return-object v0
.end method

.method public getPixelStride()I
    .locals 1

    .line 231
    iget v0, p0, Landroidx/camera/core/imagecapture/RgbaImageProxy$1;->val$pixelStride:I

    return v0
.end method

.method public getRowStride()I
    .locals 1

    .line 226
    iget v0, p0, Landroidx/camera/core/imagecapture/RgbaImageProxy$1;->val$rowStride:I

    return v0
.end method

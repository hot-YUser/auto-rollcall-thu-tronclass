.class Landroidx/camera/core/ImageProxyDownsampler$1;
.super Ljava/lang/Object;
.source "ImageProxyDownsampler.java"

# interfaces
.implements Landroidx/camera/core/ImageProxy$PlaneProxy;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Landroidx/camera/core/ImageProxyDownsampler;->createPlaneProxy(II[B)Landroidx/camera/core/ImageProxy$PlaneProxy;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final mBuffer:Ljava/nio/ByteBuffer;

.field final synthetic val$data:[B

.field final synthetic val$pixelStride:I

.field final synthetic val$rowStride:I


# direct methods
.method constructor <init>([BII)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 194
    iput-object p1, p0, Landroidx/camera/core/ImageProxyDownsampler$1;->val$data:[B

    iput p2, p0, Landroidx/camera/core/ImageProxyDownsampler$1;->val$rowStride:I

    iput p3, p0, Landroidx/camera/core/ImageProxyDownsampler$1;->val$pixelStride:I

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 195
    invoke-static {p1}, Ljava/nio/ByteBuffer;->wrap([B)Ljava/nio/ByteBuffer;

    move-result-object p1

    iput-object p1, p0, Landroidx/camera/core/ImageProxyDownsampler$1;->mBuffer:Ljava/nio/ByteBuffer;

    return-void
.end method


# virtual methods
.method public getBuffer()Ljava/nio/ByteBuffer;
    .locals 1

    .line 210
    iget-object v0, p0, Landroidx/camera/core/ImageProxyDownsampler$1;->mBuffer:Ljava/nio/ByteBuffer;

    return-object v0
.end method

.method public getPixelStride()I
    .locals 1

    .line 204
    iget v0, p0, Landroidx/camera/core/ImageProxyDownsampler$1;->val$pixelStride:I

    return v0
.end method

.method public getRowStride()I
    .locals 1

    .line 199
    iget v0, p0, Landroidx/camera/core/ImageProxyDownsampler$1;->val$rowStride:I

    return v0
.end method

.class public Lcom/king/camera/scan/util/ImageUtils;
.super Ljava/lang/Object;
.source "ImageUtils.java"


# direct methods
.method private constructor <init>()V
    .locals 1

    .line 18
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 19
    new-instance v0, Ljava/lang/AssertionError;

    invoke-direct {v0}, Ljava/lang/AssertionError;-><init>()V

    throw v0
.end method

.method public static yuv_420_888toNv21(Landroidx/camera/core/ImageProxy;[B)V
    .locals 19

    move-object/from16 v0, p1

    .line 29
    invoke-interface/range {p0 .. p0}, Landroidx/camera/core/ImageProxy;->getPlanes()[Landroidx/camera/core/ImageProxy$PlaneProxy;

    move-result-object v1

    const/4 v2, 0x0

    aget-object v1, v1, v2

    .line 30
    invoke-interface/range {p0 .. p0}, Landroidx/camera/core/ImageProxy;->getPlanes()[Landroidx/camera/core/ImageProxy$PlaneProxy;

    move-result-object v3

    const/4 v4, 0x1

    aget-object v3, v3, v4

    .line 31
    invoke-interface/range {p0 .. p0}, Landroidx/camera/core/ImageProxy;->getPlanes()[Landroidx/camera/core/ImageProxy$PlaneProxy;

    move-result-object v4

    const/4 v5, 0x2

    aget-object v4, v4, v5

    .line 33
    invoke-interface {v1}, Landroidx/camera/core/ImageProxy$PlaneProxy;->getBuffer()Ljava/nio/ByteBuffer;

    move-result-object v6

    .line 34
    invoke-interface {v3}, Landroidx/camera/core/ImageProxy$PlaneProxy;->getBuffer()Ljava/nio/ByteBuffer;

    move-result-object v7

    .line 35
    invoke-interface {v4}, Landroidx/camera/core/ImageProxy$PlaneProxy;->getBuffer()Ljava/nio/ByteBuffer;

    move-result-object v8

    .line 36
    invoke-virtual {v6}, Ljava/nio/ByteBuffer;->rewind()Ljava/nio/Buffer;

    .line 37
    invoke-virtual {v7}, Ljava/nio/ByteBuffer;->rewind()Ljava/nio/Buffer;

    .line 38
    invoke-virtual {v8}, Ljava/nio/ByteBuffer;->rewind()Ljava/nio/Buffer;

    .line 40
    invoke-virtual {v6}, Ljava/nio/ByteBuffer;->remaining()I

    move-result v9

    move v10, v2

    move v11, v10

    .line 45
    :goto_0
    invoke-interface/range {p0 .. p0}, Landroidx/camera/core/ImageProxy;->getHeight()I

    move-result v12

    if-ge v10, v12, :cond_0

    .line 46
    invoke-interface/range {p0 .. p0}, Landroidx/camera/core/ImageProxy;->getWidth()I

    move-result v12

    invoke-virtual {v6, v0, v11, v12}, Ljava/nio/ByteBuffer;->get([BII)Ljava/nio/ByteBuffer;

    .line 47
    invoke-interface/range {p0 .. p0}, Landroidx/camera/core/ImageProxy;->getWidth()I

    move-result v12

    add-int/2addr v11, v12

    .line 48
    invoke-virtual {v6}, Ljava/nio/ByteBuffer;->position()I

    move-result v12

    invoke-interface/range {p0 .. p0}, Landroidx/camera/core/ImageProxy;->getWidth()I

    move-result v13

    sub-int/2addr v12, v13

    invoke-interface {v1}, Landroidx/camera/core/ImageProxy$PlaneProxy;->getRowStride()I

    move-result v13

    add-int/2addr v12, v13

    invoke-static {v9, v12}, Ljava/lang/Math;->min(II)I

    move-result v12

    invoke-virtual {v6, v12}, Ljava/nio/ByteBuffer;->position(I)Ljava/nio/Buffer;

    add-int/lit8 v10, v10, 0x1

    goto :goto_0

    .line 51
    :cond_0
    invoke-interface/range {p0 .. p0}, Landroidx/camera/core/ImageProxy;->getHeight()I

    move-result v1

    div-int/2addr v1, v5

    .line 52
    invoke-interface/range {p0 .. p0}, Landroidx/camera/core/ImageProxy;->getWidth()I

    move-result v6

    div-int/2addr v6, v5

    .line 53
    invoke-interface {v4}, Landroidx/camera/core/ImageProxy$PlaneProxy;->getRowStride()I

    move-result v5

    .line 54
    invoke-interface {v3}, Landroidx/camera/core/ImageProxy$PlaneProxy;->getRowStride()I

    move-result v9

    .line 55
    invoke-interface {v4}, Landroidx/camera/core/ImageProxy$PlaneProxy;->getPixelStride()I

    move-result v4

    .line 56
    invoke-interface {v3}, Landroidx/camera/core/ImageProxy$PlaneProxy;->getPixelStride()I

    move-result v3

    .line 60
    new-array v10, v5, [B

    .line 61
    new-array v12, v9, [B

    move v13, v2

    :goto_1
    if-ge v13, v1, :cond_2

    .line 63
    invoke-virtual {v8}, Ljava/nio/ByteBuffer;->remaining()I

    move-result v14

    invoke-static {v5, v14}, Ljava/lang/Math;->min(II)I

    move-result v14

    invoke-virtual {v8, v10, v2, v14}, Ljava/nio/ByteBuffer;->get([BII)Ljava/nio/ByteBuffer;

    .line 64
    invoke-virtual {v7}, Ljava/nio/ByteBuffer;->remaining()I

    move-result v14

    invoke-static {v9, v14}, Ljava/lang/Math;->min(II)I

    move-result v14

    invoke-virtual {v7, v12, v2, v14}, Ljava/nio/ByteBuffer;->get([BII)Ljava/nio/ByteBuffer;

    move v14, v2

    move v15, v14

    move/from16 v16, v15

    :goto_2
    if-ge v14, v6, :cond_1

    add-int/lit8 v17, v11, 0x1

    .line 68
    aget-byte v18, v10, v15

    aput-byte v18, v0, v11

    add-int/lit8 v11, v11, 0x2

    .line 69
    aget-byte v18, v12, v16

    aput-byte v18, v0, v17

    add-int/2addr v15, v4

    add-int v16, v16, v3

    add-int/lit8 v14, v14, 0x1

    goto :goto_2

    :cond_1
    add-int/lit8 v13, v13, 0x1

    goto :goto_1

    :cond_2
    return-void
.end method

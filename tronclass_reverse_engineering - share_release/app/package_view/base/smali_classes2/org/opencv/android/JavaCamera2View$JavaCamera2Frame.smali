.class Lorg/opencv/android/JavaCamera2View$JavaCamera2Frame;
.super Ljava/lang/Object;
.source "JavaCamera2View.java"

# interfaces
.implements Lorg/opencv/android/CameraBridgeViewBase$CvCameraViewFrame;


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lorg/opencv/android/JavaCamera2View;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x2
    name = "JavaCamera2Frame"
.end annotation


# static fields
.field static final synthetic $assertionsDisabled:Z


# instance fields
.field private mGray:Lorg/opencv/core/Mat;

.field private mImage:Landroid/media/Image;

.field private mRgba:Lorg/opencv/core/Mat;

.field final synthetic this$0:Lorg/opencv/android/JavaCamera2View;


# direct methods
.method static constructor <clinit>()V
    .locals 1

    .line 337
    const-class v0, Lorg/opencv/android/JavaCamera2View;

    return-void
.end method

.method public constructor <init>(Lorg/opencv/android/JavaCamera2View;Landroid/media/Image;)V
    .locals 0

    .line 438
    iput-object p1, p0, Lorg/opencv/android/JavaCamera2View$JavaCamera2Frame;->this$0:Lorg/opencv/android/JavaCamera2View;

    .line 439
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 440
    iput-object p2, p0, Lorg/opencv/android/JavaCamera2View$JavaCamera2Frame;->mImage:Landroid/media/Image;

    .line 441
    new-instance p1, Lorg/opencv/core/Mat;

    invoke-direct {p1}, Lorg/opencv/core/Mat;-><init>()V

    iput-object p1, p0, Lorg/opencv/android/JavaCamera2View$JavaCamera2Frame;->mRgba:Lorg/opencv/core/Mat;

    .line 442
    new-instance p1, Lorg/opencv/core/Mat;

    invoke-direct {p1}, Lorg/opencv/core/Mat;-><init>()V

    iput-object p1, p0, Lorg/opencv/android/JavaCamera2View$JavaCamera2Frame;->mGray:Lorg/opencv/core/Mat;

    return-void
.end method


# virtual methods
.method public gray()Lorg/opencv/core/Mat;
    .locals 9

    .line 340
    iget-object v0, p0, Lorg/opencv/android/JavaCamera2View$JavaCamera2Frame;->mImage:Landroid/media/Image;

    invoke-virtual {v0}, Landroid/media/Image;->getPlanes()[Landroid/media/Image$Plane;

    move-result-object v0

    .line 341
    iget-object v1, p0, Lorg/opencv/android/JavaCamera2View$JavaCamera2Frame;->mImage:Landroid/media/Image;

    invoke-virtual {v1}, Landroid/media/Image;->getWidth()I

    move-result v4

    .line 342
    iget-object v1, p0, Lorg/opencv/android/JavaCamera2View$JavaCamera2Frame;->mImage:Landroid/media/Image;

    invoke-virtual {v1}, Landroid/media/Image;->getHeight()I

    move-result v3

    const/4 v1, 0x0

    .line 344
    aget-object v2, v0, v1

    invoke-virtual {v2}, Landroid/media/Image$Plane;->getBuffer()Ljava/nio/ByteBuffer;

    move-result-object v6

    .line 345
    aget-object v0, v0, v1

    invoke-virtual {v0}, Landroid/media/Image$Plane;->getRowStride()I

    move-result v0

    .line 346
    new-instance v1, Lorg/opencv/core/Mat;

    sget v5, Lorg/opencv/core/CvType;->CV_8UC1:I

    int-to-long v7, v0

    move-object v2, v1

    invoke-direct/range {v2 .. v8}, Lorg/opencv/core/Mat;-><init>(IIILjava/nio/ByteBuffer;J)V

    iput-object v1, p0, Lorg/opencv/android/JavaCamera2View$JavaCamera2Frame;->mGray:Lorg/opencv/core/Mat;

    return-object v1
.end method

.method public release()V
    .locals 1

    .line 446
    iget-object v0, p0, Lorg/opencv/android/JavaCamera2View$JavaCamera2Frame;->mRgba:Lorg/opencv/core/Mat;

    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    .line 447
    iget-object v0, p0, Lorg/opencv/android/JavaCamera2View$JavaCamera2Frame;->mGray:Lorg/opencv/core/Mat;

    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    return-void
.end method

.method public rgba()Lorg/opencv/core/Mat;
    .locals 24

    move-object/from16 v0, p0

    .line 352
    iget-object v1, v0, Lorg/opencv/android/JavaCamera2View$JavaCamera2Frame;->mImage:Landroid/media/Image;

    invoke-virtual {v1}, Landroid/media/Image;->getPlanes()[Landroid/media/Image$Plane;

    move-result-object v1

    .line 353
    iget-object v2, v0, Lorg/opencv/android/JavaCamera2View$JavaCamera2Frame;->mImage:Landroid/media/Image;

    invoke-virtual {v2}, Landroid/media/Image;->getWidth()I

    move-result v2

    .line 354
    iget-object v3, v0, Lorg/opencv/android/JavaCamera2View$JavaCamera2Frame;->mImage:Landroid/media/Image;

    invoke-virtual {v3}, Landroid/media/Image;->getHeight()I

    move-result v10

    const/4 v3, 0x1

    .line 355
    aget-object v4, v1, v3

    invoke-virtual {v4}, Landroid/media/Image$Plane;->getPixelStride()I

    move-result v4

    const/4 v5, 0x0

    const/4 v11, 0x2

    if-ne v4, v11, :cond_1

    .line 361
    aget-object v4, v1, v5

    invoke-virtual {v4}, Landroid/media/Image$Plane;->getBuffer()Ljava/nio/ByteBuffer;

    move-result-object v7

    .line 362
    aget-object v4, v1, v5

    invoke-virtual {v4}, Landroid/media/Image$Plane;->getRowStride()I

    move-result v4

    .line 363
    aget-object v5, v1, v3

    invoke-virtual {v5}, Landroid/media/Image$Plane;->getBuffer()Ljava/nio/ByteBuffer;

    move-result-object v16

    .line 364
    aget-object v3, v1, v3

    invoke-virtual {v3}, Landroid/media/Image$Plane;->getRowStride()I

    move-result v12

    .line 365
    aget-object v3, v1, v11

    invoke-virtual {v3}, Landroid/media/Image$Plane;->getBuffer()Ljava/nio/ByteBuffer;

    move-result-object v21

    .line 366
    aget-object v1, v1, v11

    invoke-virtual {v1}, Landroid/media/Image$Plane;->getRowStride()I

    move-result v1

    .line 367
    new-instance v15, Lorg/opencv/core/Mat;

    sget v6, Lorg/opencv/core/CvType;->CV_8UC1:I

    int-to-long v8, v4

    move-object v3, v15

    move v4, v10

    move v5, v2

    invoke-direct/range {v3 .. v9}, Lorg/opencv/core/Mat;-><init>(IIILjava/nio/ByteBuffer;J)V

    .line 368
    new-instance v3, Lorg/opencv/core/Mat;

    div-int/lit8 v4, v10, 0x2

    div-int/lit8 v19, v2, 0x2

    sget v2, Lorg/opencv/core/CvType;->CV_8UC2:I

    int-to-long v5, v12

    move-object v12, v3

    move v13, v4

    move/from16 v14, v19

    move-object v7, v15

    move v15, v2

    move-wide/from16 v17, v5

    invoke-direct/range {v12 .. v18}, Lorg/opencv/core/Mat;-><init>(IIILjava/nio/ByteBuffer;J)V

    .line 369
    new-instance v2, Lorg/opencv/core/Mat;

    sget v20, Lorg/opencv/core/CvType;->CV_8UC2:I

    int-to-long v5, v1

    move-object/from16 v17, v2

    move/from16 v18, v4

    move-wide/from16 v22, v5

    invoke-direct/range {v17 .. v23}, Lorg/opencv/core/Mat;-><init>(IIILjava/nio/ByteBuffer;J)V

    .line 370
    invoke-virtual {v2}, Lorg/opencv/core/Mat;->dataAddr()J

    move-result-wide v4

    invoke-virtual {v3}, Lorg/opencv/core/Mat;->dataAddr()J

    move-result-wide v8

    sub-long/2addr v4, v8

    const-wide/16 v8, 0x0

    cmp-long v1, v4, v8

    if-lez v1, :cond_0

    .line 373
    iget-object v1, v0, Lorg/opencv/android/JavaCamera2View$JavaCamera2Frame;->mRgba:Lorg/opencv/core/Mat;

    const/16 v2, 0x5e

    invoke-static {v7, v3, v1, v2}, Lorg/opencv/imgproc/Imgproc;->cvtColorTwoPlane(Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;I)V

    goto :goto_0

    .line 376
    :cond_0
    iget-object v1, v0, Lorg/opencv/android/JavaCamera2View$JavaCamera2Frame;->mRgba:Lorg/opencv/core/Mat;

    const/16 v3, 0x60

    invoke-static {v7, v2, v1, v3}, Lorg/opencv/imgproc/Imgproc;->cvtColorTwoPlane(Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;I)V

    .line 378
    :goto_0
    iget-object v1, v0, Lorg/opencv/android/JavaCamera2View$JavaCamera2Frame;->mRgba:Lorg/opencv/core/Mat;

    return-object v1

    .line 380
    :cond_1
    div-int/lit8 v4, v10, 0x2

    add-int v6, v10, v4

    mul-int v7, v2, v6

    new-array v7, v7, [B

    .line 381
    aget-object v8, v1, v5

    invoke-virtual {v8}, Landroid/media/Image$Plane;->getBuffer()Ljava/nio/ByteBuffer;

    move-result-object v8

    .line 382
    aget-object v9, v1, v3

    invoke-virtual {v9}, Landroid/media/Image$Plane;->getBuffer()Ljava/nio/ByteBuffer;

    move-result-object v9

    .line 383
    aget-object v11, v1, v11

    invoke-virtual {v11}, Landroid/media/Image$Plane;->getBuffer()Ljava/nio/ByteBuffer;

    move-result-object v11

    .line 387
    aget-object v12, v1, v5

    invoke-virtual {v12}, Landroid/media/Image$Plane;->getRowStride()I

    move-result v12

    if-ne v12, v2, :cond_2

    mul-int v12, v2, v10

    .line 389
    invoke-virtual {v8, v7, v5, v12}, Ljava/nio/ByteBuffer;->get([BII)Ljava/nio/ByteBuffer;

    goto :goto_2

    :cond_2
    sub-int/2addr v12, v2

    move v13, v5

    move v14, v13

    :goto_1
    if-ge v14, v10, :cond_4

    .line 394
    invoke-virtual {v8, v7, v13, v2}, Ljava/nio/ByteBuffer;->get([BII)Ljava/nio/ByteBuffer;

    add-int/2addr v13, v2

    add-int/lit8 v15, v10, -0x1

    if-ge v14, v15, :cond_3

    .line 397
    invoke-virtual {v8}, Ljava/nio/ByteBuffer;->position()I

    move-result v15

    add-int/2addr v15, v12

    invoke-virtual {v8, v15}, Ljava/nio/ByteBuffer;->position(I)Ljava/nio/Buffer;

    :cond_3
    add-int/lit8 v14, v14, 0x1

    goto :goto_1

    :cond_4
    move v12, v13

    .line 403
    :goto_2
    aget-object v1, v1, v3

    invoke-virtual {v1}, Landroid/media/Image$Plane;->getRowStride()I

    move-result v1

    .line 404
    div-int/lit8 v3, v2, 0x2

    sub-int/2addr v1, v3

    const/4 v8, 0x4

    if-nez v1, :cond_5

    mul-int/2addr v10, v2

    .line 409
    div-int/2addr v10, v8

    invoke-virtual {v9, v7, v12, v10}, Ljava/nio/ByteBuffer;->get([BII)Ljava/nio/ByteBuffer;

    add-int/2addr v12, v10

    .line 411
    invoke-virtual {v11, v7, v12, v10}, Ljava/nio/ByteBuffer;->get([BII)Ljava/nio/ByteBuffer;

    goto :goto_5

    :cond_5
    move v10, v5

    :goto_3
    if-ge v10, v4, :cond_7

    .line 415
    invoke-virtual {v9, v7, v12, v3}, Ljava/nio/ByteBuffer;->get([BII)Ljava/nio/ByteBuffer;

    add-int/2addr v12, v3

    add-int/lit8 v13, v4, -0x1

    if-ge v10, v13, :cond_6

    .line 418
    invoke-virtual {v9}, Ljava/nio/ByteBuffer;->position()I

    move-result v13

    add-int/2addr v13, v1

    invoke-virtual {v9, v13}, Ljava/nio/ByteBuffer;->position(I)Ljava/nio/Buffer;

    :cond_6
    add-int/lit8 v10, v10, 0x1

    goto :goto_3

    :cond_7
    move v9, v5

    :goto_4
    if-ge v9, v4, :cond_9

    .line 422
    invoke-virtual {v11, v7, v12, v3}, Ljava/nio/ByteBuffer;->get([BII)Ljava/nio/ByteBuffer;

    add-int/2addr v12, v3

    add-int/lit8 v10, v4, -0x1

    if-ge v9, v10, :cond_8

    .line 425
    invoke-virtual {v11}, Ljava/nio/ByteBuffer;->position()I

    move-result v10

    add-int/2addr v10, v1

    invoke-virtual {v11, v10}, Ljava/nio/ByteBuffer;->position(I)Ljava/nio/Buffer;

    :cond_8
    add-int/lit8 v9, v9, 0x1

    goto :goto_4

    .line 430
    :cond_9
    :goto_5
    new-instance v1, Lorg/opencv/core/Mat;

    sget v3, Lorg/opencv/core/CvType;->CV_8UC1:I

    invoke-direct {v1, v6, v2, v3}, Lorg/opencv/core/Mat;-><init>(III)V

    .line 431
    invoke-virtual {v1, v5, v5, v7}, Lorg/opencv/core/Mat;->put(II[B)I

    .line 432
    iget-object v2, v0, Lorg/opencv/android/JavaCamera2View$JavaCamera2Frame;->mRgba:Lorg/opencv/core/Mat;

    const/16 v3, 0x68

    invoke-static {v1, v2, v3, v8}, Lorg/opencv/imgproc/Imgproc;->cvtColor(Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;II)V

    .line 433
    iget-object v1, v0, Lorg/opencv/android/JavaCamera2View$JavaCamera2Frame;->mRgba:Lorg/opencv/core/Mat;

    return-object v1
.end method

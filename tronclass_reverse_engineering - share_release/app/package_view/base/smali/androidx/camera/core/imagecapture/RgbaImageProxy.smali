.class public final Landroidx/camera/core/imagecapture/RgbaImageProxy;
.super Ljava/lang/Object;
.source "RgbaImageProxy.java"

# interfaces
.implements Landroidx/camera/core/ImageProxy;


# instance fields
.field private final mCropRect:Landroid/graphics/Rect;

.field private final mHeight:I

.field private final mImageInfo:Landroidx/camera/core/ImageInfo;

.field private final mLock:Ljava/lang/Object;

.field mPlaneProxy:[Landroidx/camera/core/ImageProxy$PlaneProxy;

.field private final mWidth:I


# direct methods
.method public constructor <init>(Landroid/graphics/Bitmap;Landroid/graphics/Rect;ILandroid/graphics/Matrix;J)V
    .locals 10

    .line 94
    invoke-static {p1}, Landroidx/camera/core/internal/utils/ImageUtil;->createDirectByteBuffer(Landroid/graphics/Bitmap;)Ljava/nio/ByteBuffer;

    move-result-object v1

    .line 96
    invoke-virtual {p1}, Landroid/graphics/Bitmap;->getWidth()I

    move-result v3

    .line 97
    invoke-virtual {p1}, Landroid/graphics/Bitmap;->getHeight()I

    move-result v4

    const/4 v2, 0x4

    move-object v0, p0

    move-object v5, p2

    move v6, p3

    move-object v7, p4

    move-wide v8, p5

    .line 94
    invoke-direct/range {v0 .. v9}, Landroidx/camera/core/imagecapture/RgbaImageProxy;-><init>(Ljava/nio/ByteBuffer;IIILandroid/graphics/Rect;ILandroid/graphics/Matrix;J)V

    return-void
.end method

.method public constructor <init>(Landroidx/camera/core/processing/Packet;)V
    .locals 8
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroidx/camera/core/processing/Packet<",
            "Landroid/graphics/Bitmap;",
            ">;)V"
        }
    .end annotation

    .line 81
    invoke-virtual {p1}, Landroidx/camera/core/processing/Packet;->getData()Ljava/lang/Object;

    move-result-object v0

    move-object v2, v0

    check-cast v2, Landroid/graphics/Bitmap;

    .line 82
    invoke-virtual {p1}, Landroidx/camera/core/processing/Packet;->getCropRect()Landroid/graphics/Rect;

    move-result-object v3

    .line 83
    invoke-virtual {p1}, Landroidx/camera/core/processing/Packet;->getRotationDegrees()I

    move-result v4

    invoke-virtual {p1}, Landroidx/camera/core/processing/Packet;->getSensorToBufferTransform()Landroid/graphics/Matrix;

    move-result-object v5

    .line 84
    invoke-virtual {p1}, Landroidx/camera/core/processing/Packet;->getCameraCaptureResult()Landroidx/camera/core/impl/CameraCaptureResult;

    move-result-object p1

    invoke-interface {p1}, Landroidx/camera/core/impl/CameraCaptureResult;->getTimestamp()J

    move-result-wide v6

    move-object v1, p0

    .line 81
    invoke-direct/range {v1 .. v7}, Landroidx/camera/core/imagecapture/RgbaImageProxy;-><init>(Landroid/graphics/Bitmap;Landroid/graphics/Rect;ILandroid/graphics/Matrix;J)V

    return-void
.end method

.method public constructor <init>(Ljava/nio/ByteBuffer;IIILandroid/graphics/Rect;ILandroid/graphics/Matrix;J)V
    .locals 1

    .line 113
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 58
    new-instance v0, Ljava/lang/Object;

    invoke-direct {v0}, Ljava/lang/Object;-><init>()V

    iput-object v0, p0, Landroidx/camera/core/imagecapture/RgbaImageProxy;->mLock:Ljava/lang/Object;

    .line 114
    iput p3, p0, Landroidx/camera/core/imagecapture/RgbaImageProxy;->mWidth:I

    .line 115
    iput p4, p0, Landroidx/camera/core/imagecapture/RgbaImageProxy;->mHeight:I

    .line 116
    iput-object p5, p0, Landroidx/camera/core/imagecapture/RgbaImageProxy;->mCropRect:Landroid/graphics/Rect;

    .line 117
    invoke-static {p8, p9, p6, p7}, Landroidx/camera/core/imagecapture/RgbaImageProxy;->createImageInfo(JILandroid/graphics/Matrix;)Landroidx/camera/core/ImageInfo;

    move-result-object p4

    iput-object p4, p0, Landroidx/camera/core/imagecapture/RgbaImageProxy;->mImageInfo:Landroidx/camera/core/ImageInfo;

    .line 118
    invoke-virtual {p1}, Ljava/nio/ByteBuffer;->rewind()Ljava/nio/Buffer;

    const/4 p4, 0x1

    .line 119
    new-array p4, p4, [Landroidx/camera/core/ImageProxy$PlaneProxy;

    mul-int/2addr p3, p2

    .line 120
    invoke-static {p1, p3, p2}, Landroidx/camera/core/imagecapture/RgbaImageProxy;->createPlaneProxy(Ljava/nio/ByteBuffer;II)Landroidx/camera/core/ImageProxy$PlaneProxy;

    move-result-object p1

    const/4 p2, 0x0

    aput-object p1, p4, p2

    iput-object p4, p0, Landroidx/camera/core/imagecapture/RgbaImageProxy;->mPlaneProxy:[Landroidx/camera/core/ImageProxy$PlaneProxy;

    return-void
.end method

.method private checkNotClosed()V
    .locals 3

    .line 216
    iget-object v0, p0, Landroidx/camera/core/imagecapture/RgbaImageProxy;->mLock:Ljava/lang/Object;

    monitor-enter v0

    .line 217
    :try_start_0
    iget-object v1, p0, Landroidx/camera/core/imagecapture/RgbaImageProxy;->mPlaneProxy:[Landroidx/camera/core/ImageProxy$PlaneProxy;

    if-eqz v1, :cond_0

    const/4 v1, 0x1

    goto :goto_0

    :cond_0
    const/4 v1, 0x0

    :goto_0
    const-string v2, "The image is closed."

    invoke-static {v1, v2}, Landroidx/core/util/Preconditions;->checkState(ZLjava/lang/String;)V

    .line 218
    monitor-exit v0

    return-void

    :catchall_0
    move-exception v1

    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw v1
.end method

.method private static createImageInfo(JILandroid/graphics/Matrix;)Landroidx/camera/core/ImageInfo;
    .locals 1

    .line 244
    new-instance v0, Landroidx/camera/core/imagecapture/RgbaImageProxy$2;

    invoke-direct {v0, p0, p1, p2, p3}, Landroidx/camera/core/imagecapture/RgbaImageProxy$2;-><init>(JILandroid/graphics/Matrix;)V

    return-object v0
.end method

.method private static createPlaneProxy(Ljava/nio/ByteBuffer;II)Landroidx/camera/core/ImageProxy$PlaneProxy;
    .locals 1

    .line 223
    new-instance v0, Landroidx/camera/core/imagecapture/RgbaImageProxy$1;

    invoke-direct {v0, p1, p2, p0}, Landroidx/camera/core/imagecapture/RgbaImageProxy$1;-><init>(IILjava/nio/ByteBuffer;)V

    return-object v0
.end method


# virtual methods
.method public close()V
    .locals 2

    .line 126
    iget-object v0, p0, Landroidx/camera/core/imagecapture/RgbaImageProxy;->mLock:Ljava/lang/Object;

    monitor-enter v0

    .line 127
    :try_start_0
    invoke-direct {p0}, Landroidx/camera/core/imagecapture/RgbaImageProxy;->checkNotClosed()V

    const/4 v1, 0x0

    .line 129
    iput-object v1, p0, Landroidx/camera/core/imagecapture/RgbaImageProxy;->mPlaneProxy:[Landroidx/camera/core/ImageProxy$PlaneProxy;

    .line 130
    monitor-exit v0

    return-void

    :catchall_0
    move-exception v1

    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw v1
.end method

.method public createBitmap()Landroid/graphics/Bitmap;
    .locals 4

    .line 209
    iget-object v0, p0, Landroidx/camera/core/imagecapture/RgbaImageProxy;->mLock:Ljava/lang/Object;

    monitor-enter v0

    .line 210
    :try_start_0
    invoke-direct {p0}, Landroidx/camera/core/imagecapture/RgbaImageProxy;->checkNotClosed()V

    .line 211
    invoke-virtual {p0}, Landroidx/camera/core/imagecapture/RgbaImageProxy;->getPlanes()[Landroidx/camera/core/ImageProxy$PlaneProxy;

    move-result-object v1

    invoke-virtual {p0}, Landroidx/camera/core/imagecapture/RgbaImageProxy;->getWidth()I

    move-result v2

    invoke-virtual {p0}, Landroidx/camera/core/imagecapture/RgbaImageProxy;->getHeight()I

    move-result v3

    invoke-static {v1, v2, v3}, Landroidx/camera/core/internal/utils/ImageUtil;->createBitmapFromPlane([Landroidx/camera/core/ImageProxy$PlaneProxy;II)Landroid/graphics/Bitmap;

    move-result-object v1

    monitor-exit v0

    return-object v1

    :catchall_0
    move-exception v1

    .line 212
    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw v1
.end method

.method public getCropRect()Landroid/graphics/Rect;
    .locals 2

    .line 136
    iget-object v0, p0, Landroidx/camera/core/imagecapture/RgbaImageProxy;->mLock:Ljava/lang/Object;

    monitor-enter v0

    .line 137
    :try_start_0
    invoke-direct {p0}, Landroidx/camera/core/imagecapture/RgbaImageProxy;->checkNotClosed()V

    .line 138
    iget-object v1, p0, Landroidx/camera/core/imagecapture/RgbaImageProxy;->mCropRect:Landroid/graphics/Rect;

    monitor-exit v0

    return-object v1

    :catchall_0
    move-exception v1

    .line 139
    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw v1
.end method

.method public getFormat()I
    .locals 2

    .line 154
    iget-object v0, p0, Landroidx/camera/core/imagecapture/RgbaImageProxy;->mLock:Ljava/lang/Object;

    monitor-enter v0

    .line 155
    :try_start_0
    invoke-direct {p0}, Landroidx/camera/core/imagecapture/RgbaImageProxy;->checkNotClosed()V

    .line 156
    monitor-exit v0

    const/4 v0, 0x1

    return v0

    :catchall_0
    move-exception v1

    .line 157
    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw v1
.end method

.method public getHeight()I
    .locals 2

    .line 162
    iget-object v0, p0, Landroidx/camera/core/imagecapture/RgbaImageProxy;->mLock:Ljava/lang/Object;

    monitor-enter v0

    .line 163
    :try_start_0
    invoke-direct {p0}, Landroidx/camera/core/imagecapture/RgbaImageProxy;->checkNotClosed()V

    .line 164
    iget v1, p0, Landroidx/camera/core/imagecapture/RgbaImageProxy;->mHeight:I

    monitor-exit v0

    return v1

    :catchall_0
    move-exception v1

    .line 165
    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw v1
.end method

.method public getImage()Landroid/media/Image;
    .locals 2

    .line 198
    iget-object v0, p0, Landroidx/camera/core/imagecapture/RgbaImageProxy;->mLock:Ljava/lang/Object;

    monitor-enter v0

    .line 199
    :try_start_0
    invoke-direct {p0}, Landroidx/camera/core/imagecapture/RgbaImageProxy;->checkNotClosed()V

    .line 200
    monitor-exit v0

    const/4 v0, 0x0

    return-object v0

    :catchall_0
    move-exception v1

    .line 201
    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw v1
.end method

.method public getImageInfo()Landroidx/camera/core/ImageInfo;
    .locals 2

    .line 188
    iget-object v0, p0, Landroidx/camera/core/imagecapture/RgbaImageProxy;->mLock:Ljava/lang/Object;

    monitor-enter v0

    .line 189
    :try_start_0
    invoke-direct {p0}, Landroidx/camera/core/imagecapture/RgbaImageProxy;->checkNotClosed()V

    .line 190
    iget-object v1, p0, Landroidx/camera/core/imagecapture/RgbaImageProxy;->mImageInfo:Landroidx/camera/core/ImageInfo;

    monitor-exit v0

    return-object v1

    :catchall_0
    move-exception v1

    .line 191
    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw v1
.end method

.method public getPlanes()[Landroidx/camera/core/ImageProxy$PlaneProxy;
    .locals 2

    .line 179
    iget-object v0, p0, Landroidx/camera/core/imagecapture/RgbaImageProxy;->mLock:Ljava/lang/Object;

    monitor-enter v0

    .line 180
    :try_start_0
    invoke-direct {p0}, Landroidx/camera/core/imagecapture/RgbaImageProxy;->checkNotClosed()V

    .line 181
    iget-object v1, p0, Landroidx/camera/core/imagecapture/RgbaImageProxy;->mPlaneProxy:[Landroidx/camera/core/ImageProxy$PlaneProxy;

    invoke-static {v1}, Ljava/util/Objects;->requireNonNull(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v1

    check-cast v1, [Landroidx/camera/core/ImageProxy$PlaneProxy;

    monitor-exit v0

    return-object v1

    :catchall_0
    move-exception v1

    .line 182
    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw v1
.end method

.method public getWidth()I
    .locals 2

    .line 170
    iget-object v0, p0, Landroidx/camera/core/imagecapture/RgbaImageProxy;->mLock:Ljava/lang/Object;

    monitor-enter v0

    .line 171
    :try_start_0
    invoke-direct {p0}, Landroidx/camera/core/imagecapture/RgbaImageProxy;->checkNotClosed()V

    .line 172
    iget v1, p0, Landroidx/camera/core/imagecapture/RgbaImageProxy;->mWidth:I

    monitor-exit v0

    return v1

    :catchall_0
    move-exception v1

    .line 173
    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw v1
.end method

.method public setCropRect(Landroid/graphics/Rect;)V
    .locals 2

    .line 144
    iget-object v0, p0, Landroidx/camera/core/imagecapture/RgbaImageProxy;->mLock:Ljava/lang/Object;

    monitor-enter v0

    .line 145
    :try_start_0
    invoke-direct {p0}, Landroidx/camera/core/imagecapture/RgbaImageProxy;->checkNotClosed()V

    if-eqz p1, :cond_0

    .line 147
    iget-object v1, p0, Landroidx/camera/core/imagecapture/RgbaImageProxy;->mCropRect:Landroid/graphics/Rect;

    invoke-virtual {v1, p1}, Landroid/graphics/Rect;->set(Landroid/graphics/Rect;)V

    .line 149
    :cond_0
    monitor-exit v0

    return-void

    :catchall_0
    move-exception p1

    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw p1
.end method

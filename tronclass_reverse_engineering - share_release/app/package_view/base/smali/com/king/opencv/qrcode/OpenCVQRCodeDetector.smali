.class public Lcom/king/opencv/qrcode/OpenCVQRCodeDetector;
.super Lorg/opencv/objdetect/QRCodeDetector;
.source "OpenCVQRCodeDetector.java"


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 19
    invoke-direct {p0}, Lorg/opencv/objdetect/QRCodeDetector;-><init>()V

    return-void
.end method


# virtual methods
.method public detectAndDecode(Landroid/graphics/Bitmap;)Ljava/lang/String;
    .locals 1

    .line 28
    new-instance v0, Lorg/opencv/core/Mat;

    invoke-direct {v0}, Lorg/opencv/core/Mat;-><init>()V

    .line 30
    :try_start_0
    invoke-static {p1, v0}, Lorg/opencv/android/Utils;->bitmapToMat(Landroid/graphics/Bitmap;Lorg/opencv/core/Mat;)V

    .line 31
    invoke-virtual {p0, v0}, Lcom/king/opencv/qrcode/OpenCVQRCodeDetector;->detectAndDecode(Lorg/opencv/core/Mat;)Ljava/lang/String;

    move-result-object p1
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 33
    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    return-object p1

    :catchall_0
    move-exception p1

    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    .line 34
    throw p1
.end method

.method public detectAndDecode(Landroid/graphics/Bitmap;Lorg/opencv/core/Mat;)Ljava/lang/String;
    .locals 1

    .line 45
    new-instance v0, Lorg/opencv/core/Mat;

    invoke-direct {v0}, Lorg/opencv/core/Mat;-><init>()V

    .line 47
    :try_start_0
    invoke-static {p1, v0}, Lorg/opencv/android/Utils;->bitmapToMat(Landroid/graphics/Bitmap;Lorg/opencv/core/Mat;)V

    .line 48
    invoke-virtual {p0, v0, p2}, Lcom/king/opencv/qrcode/OpenCVQRCodeDetector;->detectAndDecode(Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;)Ljava/lang/String;

    move-result-object p1
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 50
    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    return-object p1

    :catchall_0
    move-exception p1

    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    .line 51
    throw p1
.end method

.method public detectAndDecodeMulti(Landroid/graphics/Bitmap;Ljava/util/List;)Z
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroid/graphics/Bitmap;",
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;)Z"
        }
    .end annotation

    .line 62
    new-instance v0, Lorg/opencv/core/Mat;

    invoke-direct {v0}, Lorg/opencv/core/Mat;-><init>()V

    .line 64
    :try_start_0
    invoke-static {p1, v0}, Lorg/opencv/android/Utils;->bitmapToMat(Landroid/graphics/Bitmap;Lorg/opencv/core/Mat;)V

    .line 65
    invoke-virtual {p0, v0, p2}, Lcom/king/opencv/qrcode/OpenCVQRCodeDetector;->detectAndDecodeMulti(Lorg/opencv/core/Mat;Ljava/util/List;)Z

    move-result p1
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 67
    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    return p1

    :catchall_0
    move-exception p1

    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    .line 68
    throw p1
.end method

.method public detectAndDecodeMulti(Landroid/graphics/Bitmap;Ljava/util/List;Lorg/opencv/core/Mat;)Z
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroid/graphics/Bitmap;",
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;",
            "Lorg/opencv/core/Mat;",
            ")Z"
        }
    .end annotation

    .line 80
    new-instance v0, Lorg/opencv/core/Mat;

    invoke-direct {v0}, Lorg/opencv/core/Mat;-><init>()V

    .line 82
    :try_start_0
    invoke-static {p1, v0}, Lorg/opencv/android/Utils;->bitmapToMat(Landroid/graphics/Bitmap;Lorg/opencv/core/Mat;)V

    .line 83
    invoke-virtual {p0, v0, p2, p3}, Lcom/king/opencv/qrcode/OpenCVQRCodeDetector;->detectAndDecodeMulti(Lorg/opencv/core/Mat;Ljava/util/List;Lorg/opencv/core/Mat;)Z

    move-result p1
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 85
    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    return p1

    :catchall_0
    move-exception p1

    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    .line 86
    throw p1
.end method

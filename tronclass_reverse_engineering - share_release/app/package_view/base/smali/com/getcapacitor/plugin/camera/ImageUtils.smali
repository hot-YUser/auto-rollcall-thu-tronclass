.class public Lcom/getcapacitor/plugin/camera/ImageUtils;
.super Ljava/lang/Object;
.source "ImageUtils.java"


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 18
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static correctOrientation(Landroid/content/Context;Landroid/graphics/Bitmap;Landroid/net/Uri;)Landroid/graphics/Bitmap;
    .locals 0
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 115
    invoke-static {p0, p2}, Lcom/getcapacitor/plugin/camera/ImageUtils;->getOrientation(Landroid/content/Context;Landroid/net/Uri;)I

    move-result p0

    if-eqz p0, :cond_0

    .line 118
    new-instance p2, Landroid/graphics/Matrix;

    invoke-direct {p2}, Landroid/graphics/Matrix;-><init>()V

    int-to-float p0, p0

    .line 119
    invoke-virtual {p2, p0}, Landroid/graphics/Matrix;->postRotate(F)Z

    .line 121
    invoke-static {p1, p2}, Lcom/getcapacitor/plugin/camera/ImageUtils;->transform(Landroid/graphics/Bitmap;Landroid/graphics/Matrix;)Landroid/graphics/Bitmap;

    move-result-object p0

    return-object p0

    :cond_0
    return-object p1
.end method

.method private static correctOrientationOlder(Landroid/content/Context;Landroid/graphics/Bitmap;Landroid/net/Uri;)Landroid/graphics/Bitmap;
    .locals 8

    const/4 v0, 0x2

    .line 131
    new-array v0, v0, [Ljava/lang/String;

    const-string v1, "_data"

    const/4 v7, 0x0

    aput-object v1, v0, v7

    const/4 v1, 0x1

    const-string v2, "orientation"

    aput-object v2, v0, v1

    .line 132
    invoke-virtual {p0}, Landroid/content/Context;->getContentResolver()Landroid/content/ContentResolver;

    move-result-object v1

    const/4 v5, 0x0

    const/4 v6, 0x0

    const/4 v4, 0x0

    move-object v2, p2

    move-object v3, v0

    invoke-virtual/range {v1 .. v6}, Landroid/content/ContentResolver;->query(Landroid/net/Uri;[Ljava/lang/String;Ljava/lang/String;[Ljava/lang/String;Ljava/lang/String;)Landroid/database/Cursor;

    move-result-object p0

    const/4 p2, -0x1

    if-eqz p0, :cond_0

    .line 134
    invoke-interface {p0}, Landroid/database/Cursor;->moveToFirst()Z

    move-result v1

    if-eqz v1, :cond_0

    .line 135
    aget-object v0, v0, v7

    invoke-interface {p0, v0}, Landroid/database/Cursor;->getColumnIndex(Ljava/lang/String;)I

    move-result v0

    invoke-interface {p0, v0}, Landroid/database/Cursor;->getInt(I)I

    move-result p0

    goto :goto_0

    :cond_0
    move p0, p2

    .line 137
    :goto_0
    new-instance v0, Landroid/graphics/Matrix;

    invoke-direct {v0}, Landroid/graphics/Matrix;-><init>()V

    if-eq p0, p2, :cond_1

    int-to-float p0, p0

    .line 140
    invoke-virtual {v0, p0}, Landroid/graphics/Matrix;->postRotate(F)Z

    .line 143
    :cond_1
    invoke-static {p1, v0}, Lcom/getcapacitor/plugin/camera/ImageUtils;->transform(Landroid/graphics/Bitmap;Landroid/graphics/Matrix;)Landroid/graphics/Bitmap;

    move-result-object p0

    return-object p0
.end method

.method public static getExifData(Landroid/content/Context;Landroid/graphics/Bitmap;Landroid/net/Uri;)Lcom/getcapacitor/plugin/camera/ExifWrapper;
    .locals 0

    .line 175
    :try_start_0
    invoke-static {p0, p2}, Lcom/getcapacitor/FileUtils;->getFileUrlForUri(Landroid/content/Context;Landroid/net/Uri;)Ljava/lang/String;

    move-result-object p0

    .line 176
    new-instance p1, Landroidx/exifinterface/media/ExifInterface;

    invoke-direct {p1, p0}, Landroidx/exifinterface/media/ExifInterface;-><init>(Ljava/lang/String;)V

    .line 178
    new-instance p0, Lcom/getcapacitor/plugin/camera/ExifWrapper;

    invoke-direct {p0, p1}, Lcom/getcapacitor/plugin/camera/ExifWrapper;-><init>(Landroidx/exifinterface/media/ExifInterface;)V
    :try_end_0
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    return-object p0

    :catchall_0
    move-exception p0

    .line 182
    throw p0

    :catch_0
    move-exception p0

    .line 180
    const-string p1, "Error loading exif data from image"

    invoke-static {p1, p0}, Lcom/getcapacitor/Logger;->error(Ljava/lang/String;Ljava/lang/Throwable;)V

    .line 183
    new-instance p0, Lcom/getcapacitor/plugin/camera/ExifWrapper;

    const/4 p1, 0x0

    invoke-direct {p0, p1}, Lcom/getcapacitor/plugin/camera/ExifWrapper;-><init>(Landroidx/exifinterface/media/ExifInterface;)V

    return-object p0
.end method

.method private static getOrientation(Landroid/content/Context;Landroid/net/Uri;)I
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    const/4 v0, 0x0

    .line 152
    :try_start_0
    invoke-virtual {p0}, Landroid/content/Context;->getContentResolver()Landroid/content/ContentResolver;

    move-result-object p0

    invoke-virtual {p0, p1}, Landroid/content/ContentResolver;->openInputStream(Landroid/net/Uri;)Ljava/io/InputStream;

    move-result-object v0

    .line 153
    new-instance p0, Landroidx/exifinterface/media/ExifInterface;

    invoke-direct {p0, v0}, Landroidx/exifinterface/media/ExifInterface;-><init>(Ljava/io/InputStream;)V

    .line 155
    const-string p1, "Orientation"

    const/4 v1, 0x1

    invoke-virtual {p0, p1, v1}, Landroidx/exifinterface/media/ExifInterface;->getAttributeInt(Ljava/lang/String;I)I

    move-result p0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    const/4 p1, 0x6

    if-ne p0, p1, :cond_0

    const/16 p0, 0x5a

    goto :goto_0

    :cond_0
    const/4 p1, 0x3

    if-ne p0, p1, :cond_1

    const/16 p0, 0xb4

    goto :goto_0

    :cond_1
    const/16 p1, 0x8

    if-ne p0, p1, :cond_2

    const/16 p0, 0x10e

    goto :goto_0

    :cond_2
    const/4 p0, 0x0

    :goto_0
    if-eqz v0, :cond_3

    .line 166
    invoke-virtual {v0}, Ljava/io/InputStream;->close()V

    :cond_3
    return p0

    :catchall_0
    move-exception p0

    if-eqz v0, :cond_4

    invoke-virtual {v0}, Ljava/io/InputStream;->close()V

    .line 168
    :cond_4
    throw p0
.end method

.method public static resize(Landroid/graphics/Bitmap;II)Landroid/graphics/Bitmap;
    .locals 1

    const/4 v0, 0x0

    .line 28
    invoke-static {p0, p1, p2, v0}, Lcom/getcapacitor/plugin/camera/ImageUtils;->resize(Landroid/graphics/Bitmap;IIZ)Landroid/graphics/Bitmap;

    move-result-object p0

    return-object p0
.end method

.method public static resize(Landroid/graphics/Bitmap;IIZ)Landroid/graphics/Bitmap;
    .locals 0

    if-eqz p3, :cond_0

    .line 41
    invoke-static {p0, p1, p2}, Lcom/getcapacitor/plugin/camera/ImageUtils;->resizePreservingAspectRatio(Landroid/graphics/Bitmap;II)Landroid/graphics/Bitmap;

    move-result-object p0

    return-object p0

    .line 43
    :cond_0
    invoke-static {p0, p1, p2}, Lcom/getcapacitor/plugin/camera/ImageUtils;->resizeImageWithoutPreservingAspectRatio(Landroid/graphics/Bitmap;II)Landroid/graphics/Bitmap;

    move-result-object p0

    return-object p0
.end method

.method private static resizeImageWithoutPreservingAspectRatio(Landroid/graphics/Bitmap;II)Landroid/graphics/Bitmap;
    .locals 2

    .line 55
    invoke-virtual {p0}, Landroid/graphics/Bitmap;->getWidth()I

    move-result v0

    int-to-float v0, v0

    invoke-virtual {p0}, Landroid/graphics/Bitmap;->getHeight()I

    move-result v1

    int-to-float v1, v1

    div-float/2addr v0, v1

    const/4 v1, 0x0

    if-lez p1, :cond_0

    if-lez p2, :cond_0

    .line 57
    invoke-static {p0, p1, p2, v1}, Landroid/graphics/Bitmap;->createScaledBitmap(Landroid/graphics/Bitmap;IIZ)Landroid/graphics/Bitmap;

    move-result-object p0

    return-object p0

    :cond_0
    if-lez p1, :cond_1

    int-to-float p2, p1

    div-float/2addr p2, v0

    float-to-int p2, p2

    .line 59
    invoke-static {p0, p1, p2, v1}, Landroid/graphics/Bitmap;->createScaledBitmap(Landroid/graphics/Bitmap;IIZ)Landroid/graphics/Bitmap;

    move-result-object p0

    return-object p0

    :cond_1
    if-lez p2, :cond_2

    int-to-float p1, p2

    mul-float/2addr p1, v0

    float-to-int p1, p1

    .line 61
    invoke-static {p0, p1, p2, v1}, Landroid/graphics/Bitmap;->createScaledBitmap(Landroid/graphics/Bitmap;IIZ)Landroid/graphics/Bitmap;

    move-result-object p0

    :cond_2
    return-object p0
.end method

.method private static resizePreservingAspectRatio(Landroid/graphics/Bitmap;II)Landroid/graphics/Bitmap;
    .locals 5

    .line 76
    invoke-virtual {p0}, Landroid/graphics/Bitmap;->getWidth()I

    move-result v0

    .line 77
    invoke-virtual {p0}, Landroid/graphics/Bitmap;->getHeight()I

    move-result v1

    if-nez p2, :cond_0

    move p2, v1

    :cond_0
    if-nez p1, :cond_1

    move p1, v0

    .line 84
    :cond_1
    invoke-static {v0, p1}, Ljava/lang/Math;->min(II)I

    move-result p1

    int-to-float p1, p1

    int-to-float v2, v1

    mul-float/2addr v2, p1

    int-to-float v3, v0

    div-float/2addr v2, v3

    int-to-float v3, p2

    cmpl-float v4, v2, v3

    if-lez v4, :cond_2

    mul-int/2addr v0, p2

    .line 88
    div-int/2addr v0, v1

    int-to-float p1, v0

    move v2, v3

    .line 91
    :cond_2
    invoke-static {p1}, Ljava/lang/Math;->round(F)I

    move-result p1

    invoke-static {v2}, Ljava/lang/Math;->round(F)I

    move-result p2

    const/4 v0, 0x0

    invoke-static {p0, p1, p2, v0}, Landroid/graphics/Bitmap;->createScaledBitmap(Landroid/graphics/Bitmap;IIZ)Landroid/graphics/Bitmap;

    move-result-object p0

    return-object p0
.end method

.method private static transform(Landroid/graphics/Bitmap;Landroid/graphics/Matrix;)Landroid/graphics/Bitmap;
    .locals 7

    .line 101
    invoke-virtual {p0}, Landroid/graphics/Bitmap;->getWidth()I

    move-result v3

    invoke-virtual {p0}, Landroid/graphics/Bitmap;->getHeight()I

    move-result v4

    const/4 v6, 0x1

    const/4 v1, 0x0

    const/4 v2, 0x0

    move-object v0, p0

    move-object v5, p1

    invoke-static/range {v0 .. v6}, Landroid/graphics/Bitmap;->createBitmap(Landroid/graphics/Bitmap;IIIILandroid/graphics/Matrix;Z)Landroid/graphics/Bitmap;

    move-result-object p0

    return-object p0
.end method

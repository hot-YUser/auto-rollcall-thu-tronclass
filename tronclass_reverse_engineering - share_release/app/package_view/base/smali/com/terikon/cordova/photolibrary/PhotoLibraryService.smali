.class public Lcom/terikon/cordova/photolibrary/PhotoLibraryService;
.super Ljava/lang/Object;
.source "PhotoLibraryService.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lcom/terikon/cordova/photolibrary/PhotoLibraryService$ChunkResultRunnable;,
        Lcom/terikon/cordova/photolibrary/PhotoLibraryService$PictureData;,
        Lcom/terikon/cordova/photolibrary/PhotoLibraryService$PictureAsStream;,
        Lcom/terikon/cordova/photolibrary/PhotoLibraryService$JSONObjectRunnable;,
        Lcom/terikon/cordova/photolibrary/PhotoLibraryService$FilePathRunnable;
    }
.end annotation


# static fields
.field public static final PERMISSION_ERROR:Ljava/lang/String; = "Permission Denial: This application is not allowed to access Photo data."

.field private static instance:Lcom/terikon/cordova/photolibrary/PhotoLibraryService;


# instance fields
.field private dataURLPattern:Ljava/util/regex/Pattern;

.field private dateFormatter:Ljava/text/SimpleDateFormat;

.field private imageMimeToExtension:Ljava/util/Map;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/Map<",
            "Ljava/lang/String;",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation
.end field

.field private videMimeToExtension:Ljava/util/Map;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/Map<",
            "Ljava/lang/String;",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation
.end field


# direct methods
.method static constructor <clinit>()V
    .locals 0

    return-void
.end method

.method protected constructor <init>()V
    .locals 2

    .line 50
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 265
    const-string v0, "^data:(.+?)/(.+?);base64,"

    invoke-static {v0}, Ljava/util/regex/Pattern;->compile(Ljava/lang/String;)Ljava/util/regex/Pattern;

    move-result-object v0

    iput-object v0, p0, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->dataURLPattern:Ljava/util/regex/Pattern;

    .line 585
    new-instance v0, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$6;

    invoke-direct {v0, p0}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$6;-><init>(Lcom/terikon/cordova/photolibrary/PhotoLibraryService;)V

    iput-object v0, p0, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->imageMimeToExtension:Ljava/util/Map;

    .line 589
    new-instance v0, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$7;

    invoke-direct {v0, p0}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$7;-><init>(Lcom/terikon/cordova/photolibrary/PhotoLibraryService;)V

    iput-object v0, p0, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->videMimeToExtension:Ljava/util/Map;

    .line 51
    new-instance v0, Ljava/text/SimpleDateFormat;

    const-string v1, "yyyy-MM-dd\'T\'HH:mm:ss.SSS\'Z\'"

    invoke-direct {v0, v1}, Ljava/text/SimpleDateFormat;-><init>(Ljava/lang/String;)V

    iput-object v0, p0, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->dateFormatter:Ljava/text/SimpleDateFormat;

    .line 52
    const-string v1, "UTC"

    invoke-static {v1}, Ljava/util/TimeZone;->getTimeZone(Ljava/lang/String;)Ljava/util/TimeZone;

    move-result-object v1

    invoke-virtual {v0, v1}, Ljava/text/SimpleDateFormat;->setTimeZone(Ljava/util/TimeZone;)V

    return-void
.end method

.method static synthetic access$000(Lcom/terikon/cordova/photolibrary/PhotoLibraryService;Landroid/content/Context;Ljava/lang/String;Lcom/terikon/cordova/photolibrary/PhotoLibraryService$ChunkResultRunnable;)V
    .locals 0
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 44
    invoke-direct {p0, p1, p2, p3}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->queryLibrary(Landroid/content/Context;Ljava/lang/String;Lcom/terikon/cordova/photolibrary/PhotoLibraryService$ChunkResultRunnable;)V

    return-void
.end method

.method private addFileToMediaLibrary(Landroid/content/Context;Ljava/io/File;Lcom/terikon/cordova/photolibrary/PhotoLibraryService$FilePathRunnable;)V
    .locals 2

    .line 574
    invoke-virtual {p2}, Ljava/io/File;->getAbsolutePath()Ljava/lang/String;

    move-result-object p2

    const/4 v0, 0x1

    .line 576
    new-array v0, v0, [Ljava/lang/String;

    const/4 v1, 0x0

    aput-object p2, v0, v1

    new-instance p2, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$5;

    invoke-direct {p2, p0, p3}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$5;-><init>(Lcom/terikon/cordova/photolibrary/PhotoLibraryService;Lcom/terikon/cordova/photolibrary/PhotoLibraryService$FilePathRunnable;)V

    const/4 p3, 0x0

    invoke-static {p1, v0, p3, p2}, Landroid/media/MediaScannerConnection;->scanFile(Landroid/content/Context;[Ljava/lang/String;[Ljava/lang/String;Landroid/media/MediaScannerConnection$OnScanCompletedListener;)V

    return-void
.end method

.method private static calculateInSampleSize(Landroid/graphics/BitmapFactory$Options;II)I
    .locals 3

    .line 424
    iget v0, p0, Landroid/graphics/BitmapFactory$Options;->outHeight:I

    .line 425
    iget p0, p0, Landroid/graphics/BitmapFactory$Options;->outWidth:I

    const/4 v1, 0x1

    if-gt v0, p2, :cond_0

    if-le p0, p1, :cond_1

    .line 430
    :cond_0
    div-int/lit8 v0, v0, 0x2

    .line 431
    div-int/lit8 p0, p0, 0x2

    .line 435
    :goto_0
    div-int v2, v0, v1

    if-lt v2, p2, :cond_1

    div-int v2, p0, v1

    if-lt v2, p1, :cond_1

    mul-int/lit8 v1, v1, 0x2

    goto :goto_0

    :cond_1
    return v1
.end method

.method private static copyStream(Ljava/io/InputStream;Ljava/io/OutputStream;)V
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    const/16 v0, 0x400

    .line 457
    new-array v0, v0, [B

    .line 460
    :goto_0
    invoke-virtual {p0, v0}, Ljava/io/InputStream;->read([B)I

    move-result v1

    const/4 v2, -0x1

    if-eq v1, v2, :cond_0

    const/4 v2, 0x0

    .line 461
    invoke-virtual {p1, v0, v2, v1}, Ljava/io/OutputStream;->write([BII)V

    goto :goto_0

    :cond_0
    return-void
.end method

.method private getImageFileName(Ljava/io/File;Ljava/lang/String;)Ljava/io/File;
    .locals 6

    .line 558
    invoke-static {}, Ljava/util/Calendar;->getInstance()Ljava/util/Calendar;

    move-result-object v0

    .line 559
    new-instance v1, Ljava/lang/StringBuilder;

    invoke-direct {v1}, Ljava/lang/StringBuilder;-><init>()V

    const/4 v2, 0x1

    invoke-virtual {v0, v2}, Ljava/util/Calendar;->get(I)I

    move-result v3

    invoke-virtual {v1, v3}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v1

    const-string v3, "-"

    invoke-virtual {v1, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    const/4 v4, 0x2

    .line 560
    invoke-virtual {v0, v4}, Ljava/util/Calendar;->get(I)I

    move-result v4

    invoke-virtual {v1, v4}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    const/4 v4, 0x5

    .line 561
    invoke-virtual {v0, v4}, Ljava/util/Calendar;->get(I)I

    move-result v0

    invoke-virtual {v1, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    move v1, v2

    .line 565
    :cond_0
    new-instance v4, Ljava/lang/StringBuilder;

    invoke-direct {v4}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {v4, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v4

    invoke-virtual {v4, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v4

    invoke-virtual {v4, v1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v4

    invoke-virtual {v4, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v4

    invoke-virtual {v4}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v4

    add-int/2addr v1, v2

    .line 567
    new-instance v5, Ljava/io/File;

    invoke-direct {v5, p1, v4}, Ljava/io/File;-><init>(Ljava/io/File;Ljava/lang/String;)V

    .line 568
    invoke-virtual {v5}, Ljava/io/File;->exists()Z

    move-result v4

    if-nez v4, :cond_0

    return-object v5
.end method

.method private static getImageId(Ljava/lang/String;)I
    .locals 1

    .line 484
    const-string v0, ";"

    invoke-virtual {p0, v0}, Ljava/lang/String;->split(Ljava/lang/String;)[Ljava/lang/String;

    move-result-object p0

    const/4 v0, 0x0

    aget-object p0, p0, v0

    invoke-static {p0}, Ljava/lang/Integer;->parseInt(Ljava/lang/String;)I

    move-result p0

    return p0
.end method

.method private static getImageOrientation(Ljava/io/File;)I
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 494
    new-instance v0, Landroid/media/ExifInterface;

    invoke-virtual {p0}, Ljava/io/File;->getAbsolutePath()Ljava/lang/String;

    move-result-object p0

    invoke-direct {v0, p0}, Landroid/media/ExifInterface;-><init>(Ljava/lang/String;)V

    .line 495
    const-string p0, "Orientation"

    const/4 v1, 0x1

    invoke-virtual {v0, p0, v1}, Landroid/media/ExifInterface;->getAttributeInt(Ljava/lang/String;I)I

    move-result p0

    return p0
.end method

.method private static getImageURL(Ljava/lang/String;)Ljava/lang/String;
    .locals 1

    .line 489
    const-string v0, ";"

    invoke-virtual {p0, v0}, Ljava/lang/String;->split(Ljava/lang/String;)[Ljava/lang/String;

    move-result-object p0

    const/4 v0, 0x1

    aget-object p0, p0, v0

    return-object p0
.end method

.method public static getInstance()Lcom/terikon/cordova/photolibrary/PhotoLibraryService;
    .locals 2

    .line 58
    sget-object v0, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->instance:Lcom/terikon/cordova/photolibrary/PhotoLibraryService;

    if-nez v0, :cond_1

    .line 59
    const-class v0, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;

    monitor-enter v0

    .line 60
    :try_start_0
    sget-object v1, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->instance:Lcom/terikon/cordova/photolibrary/PhotoLibraryService;

    if-nez v1, :cond_0

    .line 61
    new-instance v1, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;

    invoke-direct {v1}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;-><init>()V

    sput-object v1, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->instance:Lcom/terikon/cordova/photolibrary/PhotoLibraryService;

    .line 63
    :cond_0
    monitor-exit v0

    goto :goto_0

    :catchall_0
    move-exception v1

    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw v1

    .line 65
    :cond_1
    :goto_0
    sget-object v0, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->instance:Lcom/terikon/cordova/photolibrary/PhotoLibraryService;

    return-object v0
.end method

.method private static getJpegBytesFromBitmap(Landroid/graphics/Bitmap;D)[B
    .locals 4

    .line 447
    new-instance v0, Ljava/io/ByteArrayOutputStream;

    invoke-direct {v0}, Ljava/io/ByteArrayOutputStream;-><init>()V

    .line 448
    sget-object v1, Landroid/graphics/Bitmap$CompressFormat;->JPEG:Landroid/graphics/Bitmap$CompressFormat;

    const-wide/high16 v2, 0x4059000000000000L    # 100.0

    mul-double/2addr p1, v2

    double-to-int p1, p1

    invoke-virtual {p0, v1, p1, v0}, Landroid/graphics/Bitmap;->compress(Landroid/graphics/Bitmap$CompressFormat;ILjava/io/OutputStream;)Z

    .line 450
    invoke-virtual {v0}, Ljava/io/ByteArrayOutputStream;->toByteArray()[B

    move-result-object p0

    return-object p0
.end method

.method private static isOrientationSwapsDimensions(I)Z
    .locals 1

    const/4 v0, 0x5

    if-eq p0, v0, :cond_1

    const/4 v0, 0x6

    if-eq p0, v0, :cond_1

    const/4 v0, 0x7

    if-eq p0, v0, :cond_1

    const/16 v0, 0x8

    if-ne p0, v0, :cond_0

    goto :goto_0

    :cond_0
    const/4 p0, 0x0

    goto :goto_1

    :cond_1
    :goto_0
    const/4 p0, 0x1

    :goto_1
    return p0
.end method

.method private static makeAlbumInPhotoLibrary(Ljava/lang/String;)Ljava/io/File;
    .locals 2

    .line 550
    new-instance v0, Ljava/io/File;

    sget-object v1, Landroid/os/Environment;->DIRECTORY_PICTURES:Ljava/lang/String;

    invoke-static {v1}, Landroid/os/Environment;->getExternalStoragePublicDirectory(Ljava/lang/String;)Ljava/io/File;

    move-result-object v1

    invoke-direct {v0, v1, p0}, Ljava/io/File;-><init>(Ljava/io/File;Ljava/lang/String;)V

    .line 551
    invoke-virtual {v0}, Ljava/io/File;->exists()Z

    move-result p0

    if-nez p0, :cond_0

    .line 552
    invoke-virtual {v0}, Ljava/io/File;->mkdirs()Z

    :cond_0
    return-object v0
.end method

.method private queryContentProvider(Landroid/content/Context;Landroid/net/Uri;Lorg/json/JSONObject;Ljava/lang/String;)Ljava/util/ArrayList;
    .locals 10
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroid/content/Context;",
            "Landroid/net/Uri;",
            "Lorg/json/JSONObject;",
            "Ljava/lang/String;",
            ")",
            "Ljava/util/ArrayList<",
            "Lorg/json/JSONObject;",
            ">;"
        }
    .end annotation

    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 269
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    .line 270
    new-instance v1, Ljava/util/ArrayList;

    invoke-direct {v1}, Ljava/util/ArrayList;-><init>()V

    .line 272
    invoke-virtual {p3}, Lorg/json/JSONObject;->keys()Ljava/util/Iterator;

    move-result-object v2

    .line 274
    :goto_0
    invoke-interface {v2}, Ljava/util/Iterator;->hasNext()Z

    move-result v3

    if-eqz v3, :cond_0

    .line 275
    invoke-interface {v2}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v3

    check-cast v3, Ljava/lang/String;

    .line 277
    invoke-virtual {v0, v3}, Ljava/util/ArrayList;->add(Ljava/lang/Object;)Z

    .line 278
    new-instance v4, Ljava/lang/StringBuilder;

    const-string v5, ""

    invoke-direct {v4, v5}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p3, v3}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v3

    invoke-virtual {v4, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v3

    invoke-virtual {v3}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v3

    invoke-virtual {v1, v3}, Ljava/util/ArrayList;->add(Ljava/lang/Object;)Z

    goto :goto_0

    .line 283
    :cond_0
    invoke-virtual {p1}, Landroid/content/Context;->getContentResolver()Landroid/content/ContentResolver;

    move-result-object v4

    .line 285
    invoke-virtual {p3}, Lorg/json/JSONObject;->length()I

    move-result p1

    new-array p1, p1, [Ljava/lang/String;

    invoke-virtual {v1, p1}, Ljava/util/ArrayList;->toArray([Ljava/lang/Object;)[Ljava/lang/Object;

    move-result-object p1

    move-object v6, p1

    check-cast v6, [Ljava/lang/String;

    const/4 v8, 0x0

    const-string v9, "datetaken DESC"

    move-object v5, p2

    move-object v7, p4

    .line 283
    invoke-virtual/range {v4 .. v9}, Landroid/content/ContentResolver;->query(Landroid/net/Uri;[Ljava/lang/String;Ljava/lang/String;[Ljava/lang/String;Ljava/lang/String;)Landroid/database/Cursor;

    move-result-object p1

    .line 288
    new-instance p2, Ljava/util/ArrayList;

    invoke-direct {p2}, Ljava/util/ArrayList;-><init>()V

    .line 290
    invoke-interface {p1}, Landroid/database/Cursor;->moveToFirst()Z

    move-result p4

    if-eqz p4, :cond_7

    .line 292
    :cond_1
    new-instance p4, Lorg/json/JSONObject;

    invoke-direct {p4}, Lorg/json/JSONObject;-><init>()V

    .line 294
    invoke-virtual {v0}, Ljava/util/ArrayList;->iterator()Ljava/util/Iterator;

    move-result-object v1

    :cond_2
    :goto_1
    invoke-interface {v1}, Ljava/util/Iterator;->hasNext()Z

    move-result v2

    if-eqz v2, :cond_6

    invoke-interface {v1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Ljava/lang/String;

    .line 295
    invoke-virtual {p3, v2}, Lorg/json/JSONObject;->get(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v3

    invoke-virtual {v3}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object v3

    invoke-interface {p1, v3}, Landroid/database/Cursor;->getColumnIndex(Ljava/lang/String;)I

    move-result v3

    .line 297
    const-string v4, "int."

    invoke-virtual {v2, v4}, Ljava/lang/String;->startsWith(Ljava/lang/String;)Z

    move-result v4

    if-eqz v4, :cond_3

    const/4 v4, 0x4

    .line 298
    invoke-virtual {v2, v4}, Ljava/lang/String;->substring(I)Ljava/lang/String;

    move-result-object v5

    invoke-interface {p1, v3}, Landroid/database/Cursor;->getInt(I)I

    move-result v6

    invoke-virtual {p4, v5, v6}, Lorg/json/JSONObject;->put(Ljava/lang/String;I)Lorg/json/JSONObject;

    .line 299
    invoke-virtual {v2, v4}, Ljava/lang/String;->substring(I)Ljava/lang/String;

    move-result-object v2

    const-string v4, "width"

    invoke-virtual {v2, v4}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v2

    if-eqz v2, :cond_2

    invoke-virtual {p4, v4}, Lorg/json/JSONObject;->getInt(Ljava/lang/String;)I

    move-result v2

    if-nez v2, :cond_2

    .line 300
    sget-object v2, Ljava/lang/System;->err:Ljava/io/PrintStream;

    new-instance v4, Ljava/lang/StringBuilder;

    const-string v5, "cursor: "

    invoke-direct {v4, v5}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-interface {p1, v3}, Landroid/database/Cursor;->getInt(I)I

    move-result v3

    invoke-virtual {v4, v3}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v3

    invoke-virtual {v3}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v3

    invoke-virtual {v2, v3}, Ljava/io/PrintStream;->println(Ljava/lang/String;)V

    goto :goto_1

    .line 302
    :cond_3
    const-string v4, "float."

    invoke-virtual {v2, v4}, Ljava/lang/String;->startsWith(Ljava/lang/String;)Z

    move-result v4

    if-eqz v4, :cond_4

    const/4 v4, 0x6

    .line 303
    invoke-virtual {v2, v4}, Ljava/lang/String;->substring(I)Ljava/lang/String;

    move-result-object v2

    invoke-interface {p1, v3}, Landroid/database/Cursor;->getFloat(I)F

    move-result v3

    float-to-double v3, v3

    invoke-virtual {p4, v2, v3, v4}, Lorg/json/JSONObject;->put(Ljava/lang/String;D)Lorg/json/JSONObject;

    goto :goto_1

    .line 304
    :cond_4
    const-string v4, "date."

    invoke-virtual {v2, v4}, Ljava/lang/String;->startsWith(Ljava/lang/String;)Z

    move-result v4

    if-eqz v4, :cond_5

    .line 305
    invoke-interface {p1, v3}, Landroid/database/Cursor;->getLong(I)J

    move-result-wide v3

    .line 306
    new-instance v5, Ljava/util/Date;

    invoke-direct {v5, v3, v4}, Ljava/util/Date;-><init>(J)V

    const/4 v3, 0x5

    .line 307
    invoke-virtual {v2, v3}, Ljava/lang/String;->substring(I)Ljava/lang/String;

    move-result-object v2

    iget-object v3, p0, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->dateFormatter:Ljava/text/SimpleDateFormat;

    invoke-virtual {v3, v5}, Ljava/text/SimpleDateFormat;->format(Ljava/util/Date;)Ljava/lang/String;

    move-result-object v3

    invoke-virtual {p4, v2, v3}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    goto/16 :goto_1

    .line 309
    :cond_5
    invoke-interface {p1, v3}, Landroid/database/Cursor;->getString(I)Ljava/lang/String;

    move-result-object v3

    invoke-virtual {p4, v2, v3}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    goto/16 :goto_1

    .line 312
    :cond_6
    invoke-virtual {p2, p4}, Ljava/util/ArrayList;->add(Ljava/lang/Object;)Z

    .line 317
    invoke-interface {p1}, Landroid/database/Cursor;->moveToNext()Z

    move-result p4

    if-nez p4, :cond_1

    .line 320
    :cond_7
    invoke-interface {p1}, Landroid/database/Cursor;->close()V

    return-object p2
.end method

.method private queryLibrary(Landroid/content/Context;IDZLjava/lang/String;Lcom/terikon/cordova/photolibrary/PhotoLibraryService$ChunkResultRunnable;)V
    .locals 17
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    move-object/from16 v0, p0

    move/from16 v1, p2

    move-object/from16 v2, p7

    .line 335
    const-string v3, "height"

    const-string v4, "width"

    const-string v5, "nativeURL"

    new-instance v6, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$4;

    invoke-direct {v6, v0}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$4;-><init>(Lcom/terikon/cordova/photolibrary/PhotoLibraryService;)V

    .line 347
    sget-object v7, Landroid/provider/MediaStore$Images$Media;->EXTERNAL_CONTENT_URI:Landroid/net/Uri;

    move-object/from16 v8, p1

    move-object/from16 v9, p6

    invoke-direct {v0, v8, v7, v6, v9}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->queryContentProvider(Landroid/content/Context;Landroid/net/Uri;Lorg/json/JSONObject;Ljava/lang/String;)Ljava/util/ArrayList;

    move-result-object v6

    .line 349
    new-instance v7, Ljava/util/ArrayList;

    invoke-direct {v7}, Ljava/util/ArrayList;-><init>()V

    .line 351
    invoke-static {}, Landroid/os/SystemClock;->elapsedRealtime()J

    move-result-wide v8

    const/4 v11, 0x0

    const/4 v12, 0x0

    .line 354
    :goto_0
    invoke-virtual {v6}, Ljava/util/ArrayList;->size()I

    move-result v13

    if-ge v11, v13, :cond_6

    .line 355
    invoke-virtual {v6, v11}, Ljava/util/ArrayList;->get(I)Ljava/lang/Object;

    move-result-object v13

    check-cast v13, Lorg/json/JSONObject;

    .line 359
    :try_start_0
    new-instance v14, Ljava/io/File;

    invoke-virtual {v13, v5}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v15

    invoke-direct {v14, v15}, Ljava/io/File;-><init>(Ljava/lang/String;)V

    invoke-static {v14}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->getImageOrientation(Ljava/io/File;)I

    move-result v14

    .line 360
    invoke-static {v14}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->isOrientationSwapsDimensions(I)Z

    move-result v14

    if-eqz v14, :cond_0

    .line 361
    invoke-virtual {v13, v4}, Lorg/json/JSONObject;->getInt(Ljava/lang/String;)I

    move-result v14

    .line 362
    invoke-virtual {v13, v3}, Lorg/json/JSONObject;->getInt(Ljava/lang/String;)I

    move-result v15

    invoke-virtual {v13, v4, v15}, Lorg/json/JSONObject;->put(Ljava/lang/String;I)Lorg/json/JSONObject;

    .line 363
    invoke-virtual {v13, v3, v14}, Lorg/json/JSONObject;->put(Ljava/lang/String;I)Lorg/json/JSONObject;
    :try_end_0
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_0

    .line 370
    :catch_0
    :cond_0
    new-instance v14, Ljava/lang/StringBuilder;

    invoke-direct {v14}, Ljava/lang/StringBuilder;-><init>()V

    .line 371
    const-string v15, "id"

    invoke-virtual {v13, v15}, Lorg/json/JSONObject;->get(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v10

    invoke-virtual {v14, v10}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v10

    const-string v14, ";"

    invoke-virtual {v10, v14}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v10

    .line 372
    invoke-virtual {v13, v5}, Lorg/json/JSONObject;->get(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v14

    invoke-virtual {v10, v14}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v10

    invoke-virtual {v10}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v10

    .line 370
    invoke-virtual {v13, v15, v10}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 374
    invoke-virtual {v13, v5}, Lorg/json/JSONObject;->remove(Ljava/lang/String;)Ljava/lang/Object;

    .line 376
    const-string v10, "albumId"

    invoke-virtual {v13, v10}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v14

    .line 377
    invoke-virtual {v13, v10}, Lorg/json/JSONObject;->remove(Ljava/lang/String;)Ljava/lang/Object;

    if-eqz p5, :cond_1

    .line 379
    new-instance v10, Lorg/json/JSONArray;

    invoke-direct {v10}, Lorg/json/JSONArray;-><init>()V

    .line 380
    invoke-virtual {v10, v14}, Lorg/json/JSONArray;->put(Ljava/lang/Object;)Lorg/json/JSONArray;

    .line 381
    const-string v14, "albumIds"

    invoke-virtual {v13, v14, v10}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 384
    :cond_1
    invoke-virtual {v7, v13}, Ljava/util/ArrayList;->add(Ljava/lang/Object;)Z

    .line 386
    invoke-virtual {v6}, Ljava/util/ArrayList;->size()I

    move-result v10

    const/4 v13, 0x1

    sub-int/2addr v10, v13

    if-ne v11, v10, :cond_3

    .line 387
    invoke-interface {v2, v7, v12, v13}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$ChunkResultRunnable;->run(Ljava/util/ArrayList;IZ)V

    :cond_2
    const/4 v10, 0x0

    goto :goto_4

    :cond_3
    if-lez v1, :cond_5

    .line 388
    invoke-virtual {v7}, Ljava/util/ArrayList;->size()I

    move-result v10

    if-eq v10, v1, :cond_4

    goto :goto_2

    :cond_4
    :goto_1
    const/4 v10, 0x0

    goto :goto_3

    :cond_5
    :goto_2
    const-wide/16 v13, 0x0

    cmpl-double v10, p3, v13

    if-lez v10, :cond_2

    invoke-static {}, Landroid/os/SystemClock;->elapsedRealtime()J

    move-result-wide v13

    sub-long/2addr v13, v8

    long-to-double v13, v13

    const-wide v15, 0x408f400000000000L    # 1000.0

    mul-double v15, v15, p3

    cmpl-double v10, v13, v15

    if-ltz v10, :cond_2

    goto :goto_1

    .line 389
    :goto_3
    invoke-interface {v2, v7, v12, v10}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$ChunkResultRunnable;->run(Ljava/util/ArrayList;IZ)V

    add-int/lit8 v12, v12, 0x1

    .line 391
    new-instance v7, Ljava/util/ArrayList;

    invoke-direct {v7}, Ljava/util/ArrayList;-><init>()V

    .line 392
    invoke-static {}, Landroid/os/SystemClock;->elapsedRealtime()J

    move-result-wide v8

    :goto_4
    add-int/lit8 v11, v11, 0x1

    goto/16 :goto_0

    :cond_6
    return-void
.end method

.method private queryLibrary(Landroid/content/Context;Ljava/lang/String;Lcom/terikon/cordova/photolibrary/PhotoLibraryService$ChunkResultRunnable;)V
    .locals 8
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    const-wide/16 v3, 0x0

    const/4 v5, 0x0

    const/4 v2, 0x0

    move-object v0, p0

    move-object v1, p1

    move-object v6, p2

    move-object v7, p3

    .line 327
    invoke-direct/range {v0 .. v7}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->queryLibrary(Landroid/content/Context;IDZLjava/lang/String;Lcom/terikon/cordova/photolibrary/PhotoLibraryService$ChunkResultRunnable;)V

    return-void
.end method

.method private queryMimeType(Landroid/content/Context;I)Ljava/lang/String;
    .locals 7

    .line 401
    invoke-virtual {p1}, Landroid/content/Context;->getContentResolver()Landroid/content/ContentResolver;

    move-result-object v0

    sget-object v1, Landroid/provider/MediaStore$Images$Media;->EXTERNAL_CONTENT_URI:Landroid/net/Uri;

    const/4 p1, 0x1

    new-array v2, p1, [Ljava/lang/String;

    const/4 v3, 0x0

    const-string v6, "mime_type"

    aput-object v6, v2, v3

    new-array v4, p1, [Ljava/lang/String;

    .line 405
    invoke-static {p2}, Ljava/lang/Integer;->toString(I)Ljava/lang/String;

    move-result-object p1

    aput-object p1, v4, v3

    const/4 v5, 0x0

    .line 401
    const-string v3, "_id=?"

    invoke-virtual/range {v0 .. v5}, Landroid/content/ContentResolver;->query(Landroid/net/Uri;[Ljava/lang/String;Ljava/lang/String;[Ljava/lang/String;Ljava/lang/String;)Landroid/database/Cursor;

    move-result-object p1

    if-eqz p1, :cond_0

    .line 407
    invoke-interface {p1}, Landroid/database/Cursor;->moveToFirst()Z

    move-result p2

    if-eqz p2, :cond_0

    .line 408
    invoke-interface {p1, v6}, Landroid/database/Cursor;->getColumnIndex(Ljava/lang/String;)I

    move-result p2

    invoke-interface {p1, p2}, Landroid/database/Cursor;->getString(I)Ljava/lang/String;

    move-result-object p2

    .line 409
    invoke-interface {p1}, Landroid/database/Cursor;->close()V

    return-object p2

    .line 415
    :cond_0
    invoke-interface {p1}, Landroid/database/Cursor;->close()V

    const/4 p1, 0x0

    return-object p1
.end method

.method private static readBytes(Ljava/io/InputStream;)[B
    .locals 4
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 468
    new-instance v0, Ljava/io/ByteArrayOutputStream;

    invoke-direct {v0}, Ljava/io/ByteArrayOutputStream;-><init>()V

    const/16 v1, 0x400

    .line 471
    new-array v1, v1, [B

    .line 474
    :goto_0
    invoke-virtual {p0, v1}, Ljava/io/InputStream;->read([B)I

    move-result v2

    const/4 v3, -0x1

    if-eq v2, v3, :cond_0

    const/4 v3, 0x0

    .line 475
    invoke-virtual {v0, v1, v3, v2}, Ljava/io/ByteArrayOutputStream;->write([BII)V

    goto :goto_0

    .line 478
    :cond_0
    invoke-virtual {v0}, Ljava/io/ByteArrayOutputStream;->toByteArray()[B

    move-result-object p0

    return-object p0
.end method

.method private static rotateImage(Landroid/graphics/Bitmap;I)Landroid/graphics/Bitmap;
    .locals 7

    .line 504
    new-instance v5, Landroid/graphics/Matrix;

    invoke-direct {v5}, Landroid/graphics/Matrix;-><init>()V

    const/high16 v0, -0x3d4c0000    # -90.0f

    const/high16 v1, 0x42b40000    # 90.0f

    const/high16 v2, 0x43340000    # 180.0f

    const/high16 v3, 0x3f800000    # 1.0f

    const/high16 v4, -0x40800000    # -1.0f

    packed-switch p1, :pswitch_data_0

    return-object p0

    .line 531
    :pswitch_0
    invoke-virtual {v5, v0}, Landroid/graphics/Matrix;->setRotate(F)V

    goto :goto_0

    .line 527
    :pswitch_1
    invoke-virtual {v5, v0}, Landroid/graphics/Matrix;->setRotate(F)V

    .line 528
    invoke-virtual {v5, v4, v3}, Landroid/graphics/Matrix;->postScale(FF)Z

    goto :goto_0

    .line 524
    :pswitch_2
    invoke-virtual {v5, v1}, Landroid/graphics/Matrix;->setRotate(F)V

    goto :goto_0

    .line 520
    :pswitch_3
    invoke-virtual {v5, v1}, Landroid/graphics/Matrix;->setRotate(F)V

    .line 521
    invoke-virtual {v5, v4, v3}, Landroid/graphics/Matrix;->postScale(FF)Z

    goto :goto_0

    .line 516
    :pswitch_4
    invoke-virtual {v5, v2}, Landroid/graphics/Matrix;->setRotate(F)V

    .line 517
    invoke-virtual {v5, v4, v3}, Landroid/graphics/Matrix;->postScale(FF)Z

    goto :goto_0

    .line 513
    :pswitch_5
    invoke-virtual {v5, v2}, Landroid/graphics/Matrix;->setRotate(F)V

    goto :goto_0

    .line 510
    :pswitch_6
    invoke-virtual {v5, v4, v3}, Landroid/graphics/Matrix;->setScale(FF)V

    .line 537
    :goto_0
    invoke-virtual {p0}, Landroid/graphics/Bitmap;->getWidth()I

    move-result v3

    invoke-virtual {p0}, Landroid/graphics/Bitmap;->getHeight()I

    move-result v4

    const/4 v6, 0x0

    const/4 v1, 0x0

    const/4 v2, 0x0

    move-object v0, p0

    invoke-static/range {v0 .. v6}, Landroid/graphics/Bitmap;->createBitmap(Landroid/graphics/Bitmap;IIIILandroid/graphics/Matrix;Z)Landroid/graphics/Bitmap;

    move-result-object p0

    return-object p0

    :pswitch_data_0
    .packed-switch 0x2
        :pswitch_6
        :pswitch_5
        :pswitch_4
        :pswitch_3
        :pswitch_2
        :pswitch_1
        :pswitch_0
    .end packed-switch
.end method

.method private saveMedia(Landroid/content/Context;Lorg/apache/cordova/CordovaInterface;Ljava/lang/String;Ljava/lang/String;Ljava/util/Map;Lcom/terikon/cordova/photolibrary/PhotoLibraryService$FilePathRunnable;)V
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroid/content/Context;",
            "Lorg/apache/cordova/CordovaInterface;",
            "Ljava/lang/String;",
            "Ljava/lang/String;",
            "Ljava/util/Map<",
            "Ljava/lang/String;",
            "Ljava/lang/String;",
            ">;",
            "Lcom/terikon/cordova/photolibrary/PhotoLibraryService$FilePathRunnable;",
            ")V"
        }
    .end annotation

    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;,
            Ljava/net/URISyntaxException;
        }
    .end annotation

    .line 597
    invoke-static {p4}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->makeAlbumInPhotoLibrary(Ljava/lang/String;)Ljava/io/File;

    move-result-object p4

    .line 600
    const-string v0, "data:"

    invoke-virtual {p3, v0}, Ljava/lang/String;->startsWith(Ljava/lang/String;)Z

    move-result v0

    const-string v1, "."

    if-eqz v0, :cond_3

    .line 602
    iget-object p2, p0, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->dataURLPattern:Ljava/util/regex/Pattern;

    invoke-virtual {p2, p3}, Ljava/util/regex/Pattern;->matcher(Ljava/lang/CharSequence;)Ljava/util/regex/Matcher;

    move-result-object p2

    .line 603
    invoke-virtual {p2}, Ljava/util/regex/Matcher;->find()Z

    move-result v0

    if-eqz v0, :cond_2

    const/4 v0, 0x2

    .line 606
    invoke-virtual {p2, v0}, Ljava/util/regex/Matcher;->group(I)Ljava/lang/String;

    move-result-object v0

    .line 607
    invoke-virtual {p2}, Ljava/util/regex/Matcher;->end()I

    move-result p2

    .line 609
    invoke-virtual {p3, p2}, Ljava/lang/String;->substring(I)Ljava/lang/String;

    move-result-object p2

    const/4 p3, 0x0

    .line 610
    invoke-static {p2, p3}, Landroid/util/Base64;->decode(Ljava/lang/String;I)[B

    move-result-object p2

    if-eqz p2, :cond_1

    .line 616
    invoke-interface {p5, v0}, Ljava/util/Map;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object p3

    check-cast p3, Ljava/lang/String;

    if-nez p3, :cond_0

    .line 618
    new-instance p3, Ljava/lang/StringBuilder;

    invoke-direct {p3, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p3, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p3

    invoke-virtual {p3}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p3

    .line 621
    :cond_0
    invoke-direct {p0, p4, p3}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->getImageFileName(Ljava/io/File;Ljava/lang/String;)Ljava/io/File;

    move-result-object p3

    .line 623
    new-instance p4, Ljava/io/FileOutputStream;

    invoke-direct {p4, p3}, Ljava/io/FileOutputStream;-><init>(Ljava/io/File;)V

    .line 625
    invoke-virtual {p4, p2}, Ljava/io/FileOutputStream;->write([B)V

    .line 627
    invoke-virtual {p4}, Ljava/io/FileOutputStream;->flush()V

    .line 628
    invoke-virtual {p4}, Ljava/io/FileOutputStream;->close()V

    goto :goto_2

    .line 613
    :cond_1
    new-instance p1, Ljava/lang/IllegalArgumentException;

    const-string p2, "The dataURL could not be decoded"

    invoke-direct {p1, p2}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 604
    :cond_2
    new-instance p1, Ljava/lang/IllegalArgumentException;

    const-string p2, "The dataURL is in incorrect format"

    invoke-direct {p1, p2}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 632
    :cond_3
    invoke-virtual {p3, v1}, Ljava/lang/String;->contains(Ljava/lang/CharSequence;)Z

    move-result p5

    const-string v0, ""

    if-eqz p5, :cond_4

    invoke-virtual {p3, v1}, Ljava/lang/String;->lastIndexOf(Ljava/lang/String;)I

    move-result p5

    invoke-virtual {p3, p5}, Ljava/lang/String;->substring(I)Ljava/lang/String;

    move-result-object p5

    goto :goto_0

    :cond_4
    move-object p5, v0

    .line 633
    :goto_0
    invoke-direct {p0, p4, p5}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->getImageFileName(Ljava/io/File;Ljava/lang/String;)Ljava/io/File;

    move-result-object p4

    .line 636
    new-instance p5, Ljava/io/FileOutputStream;

    invoke-direct {p5, p4}, Ljava/io/FileOutputStream;-><init>(Ljava/io/File;)V

    .line 638
    const-string v1, "file:///android_asset/"

    invoke-virtual {p3, v1}, Ljava/lang/String;->startsWith(Ljava/lang/String;)Z

    move-result v2

    if-eqz v2, :cond_5

    .line 639
    invoke-virtual {p3, v1, v0}, Ljava/lang/String;->replace(Ljava/lang/CharSequence;Ljava/lang/CharSequence;)Ljava/lang/String;

    move-result-object p3

    .line 640
    invoke-interface {p2}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object p2

    invoke-virtual {p2}, Landroid/app/Activity;->getApplicationContext()Landroid/content/Context;

    move-result-object p2

    invoke-virtual {p2}, Landroid/content/Context;->getAssets()Landroid/content/res/AssetManager;

    move-result-object p2

    invoke-virtual {p2, p3}, Landroid/content/res/AssetManager;->open(Ljava/lang/String;)Ljava/io/InputStream;

    move-result-object p2

    goto :goto_1

    .line 642
    :cond_5
    new-instance p2, Ljava/net/URL;

    invoke-direct {p2, p3}, Ljava/net/URL;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2}, Ljava/net/URL;->openStream()Ljava/io/InputStream;

    move-result-object p2

    .line 645
    :goto_1
    invoke-static {p2, p5}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->copyStream(Ljava/io/InputStream;Ljava/io/OutputStream;)V

    .line 647
    invoke-virtual {p5}, Ljava/io/FileOutputStream;->flush()V

    .line 648
    invoke-virtual {p5}, Ljava/io/FileOutputStream;->close()V

    .line 649
    invoke-virtual {p2}, Ljava/io/InputStream;->close()V

    move-object p3, p4

    .line 653
    :goto_2
    invoke-direct {p0, p1, p3, p6}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->addFileToMediaLibrary(Landroid/content/Context;Ljava/io/File;Lcom/terikon/cordova/photolibrary/PhotoLibraryService$FilePathRunnable;)V

    return-void
.end method


# virtual methods
.method public getAlbums(Landroid/content/Context;)Ljava/util/ArrayList;
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroid/content/Context;",
            ")",
            "Ljava/util/ArrayList<",
            "Lorg/json/JSONObject;",
            ">;"
        }
    .end annotation

    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 79
    new-instance v0, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$1;

    invoke-direct {v0, p0}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$1;-><init>(Lcom/terikon/cordova/photolibrary/PhotoLibraryService;)V

    .line 84
    sget-object v1, Landroid/provider/MediaStore$Images$Media;->EXTERNAL_CONTENT_URI:Landroid/net/Uri;

    const-string v2, "1) GROUP BY 1,(2"

    invoke-direct {p0, p1, v1, v0, v2}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->queryContentProvider(Landroid/content/Context;Landroid/net/Uri;Lorg/json/JSONObject;Ljava/lang/String;)Ljava/util/ArrayList;

    move-result-object p1

    return-object p1
.end method

.method public getLibrary(Landroid/content/Context;Lcom/terikon/cordova/photolibrary/PhotoLibraryGetLibraryOptions;Lcom/terikon/cordova/photolibrary/PhotoLibraryService$ChunkResultRunnable;)V
    .locals 8
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 71
    iget v2, p2, Lcom/terikon/cordova/photolibrary/PhotoLibraryGetLibraryOptions;->itemsInChunk:I

    iget-wide v3, p2, Lcom/terikon/cordova/photolibrary/PhotoLibraryGetLibraryOptions;->chunkTimeSec:D

    iget-boolean v5, p2, Lcom/terikon/cordova/photolibrary/PhotoLibraryGetLibraryOptions;->includeAlbumData:Z

    const-string v6, ""

    move-object v0, p0

    move-object v1, p1

    move-object v7, p3

    invoke-direct/range {v0 .. v7}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->queryLibrary(Landroid/content/Context;IDZLjava/lang/String;Lcom/terikon/cordova/photolibrary/PhotoLibraryService$ChunkResultRunnable;)V

    return-void
.end method

.method public getPhoto(Landroid/content/Context;Ljava/lang/String;)Lcom/terikon/cordova/photolibrary/PhotoLibraryService$PictureData;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 189
    invoke-virtual {p0, p1, p2}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->getPhotoAsStream(Landroid/content/Context;Ljava/lang/String;)Lcom/terikon/cordova/photolibrary/PhotoLibraryService$PictureAsStream;

    move-result-object p1

    .line 191
    invoke-virtual {p1}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$PictureAsStream;->getStream()Ljava/io/InputStream;

    move-result-object p2

    invoke-static {p2}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->readBytes(Ljava/io/InputStream;)[B

    move-result-object p2

    .line 192
    invoke-virtual {p1}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$PictureAsStream;->getStream()Ljava/io/InputStream;

    move-result-object v0

    invoke-virtual {v0}, Ljava/io/InputStream;->close()V

    .line 194
    new-instance v0, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$PictureData;

    invoke-virtual {p1}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$PictureAsStream;->getMimeType()Ljava/lang/String;

    move-result-object p1

    invoke-direct {v0, p0, p2, p1}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$PictureData;-><init>(Lcom/terikon/cordova/photolibrary/PhotoLibraryService;[BLjava/lang/String;)V

    return-object v0
.end method

.method public getPhotoAsStream(Landroid/content/Context;Ljava/lang/String;)Lcom/terikon/cordova/photolibrary/PhotoLibraryService$PictureAsStream;
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 155
    invoke-static {p2}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->getImageId(Ljava/lang/String;)I

    move-result v0

    .line 156
    invoke-static {p2}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->getImageURL(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p2

    .line 157
    new-instance v1, Ljava/io/File;

    invoke-direct {v1, p2}, Ljava/io/File;-><init>(Ljava/lang/String;)V

    .line 158
    invoke-static {v1}, Landroid/net/Uri;->fromFile(Ljava/io/File;)Landroid/net/Uri;

    move-result-object p2

    .line 160
    invoke-direct {p0, p1, v0}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->queryMimeType(Landroid/content/Context;I)Ljava/lang/String;

    move-result-object v0

    .line 162
    invoke-virtual {p1}, Landroid/content/Context;->getContentResolver()Landroid/content/ContentResolver;

    move-result-object p1

    invoke-virtual {p1, p2}, Landroid/content/ContentResolver;->openInputStream(Landroid/net/Uri;)Ljava/io/InputStream;

    move-result-object p1

    .line 164
    const-string p2, "image/jpeg"

    invoke-virtual {v0, p2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p2

    if-eqz p2, :cond_0

    .line 165
    invoke-static {v1}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->getImageOrientation(Ljava/io/File;)I

    move-result p2

    const/4 v1, 0x1

    if-le p2, v1, :cond_0

    const/4 v1, 0x0

    .line 168
    invoke-static {p1, v1, v1}, Landroid/graphics/BitmapFactory;->decodeStream(Ljava/io/InputStream;Landroid/graphics/Rect;Landroid/graphics/BitmapFactory$Options;)Landroid/graphics/Bitmap;

    move-result-object v1

    .line 169
    invoke-virtual {p1}, Ljava/io/InputStream;->close()V

    .line 171
    invoke-static {v1, p2}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->rotateImage(Landroid/graphics/Bitmap;I)Landroid/graphics/Bitmap;

    move-result-object p1

    .line 173
    invoke-virtual {v1}, Landroid/graphics/Bitmap;->recycle()V

    const-wide/high16 v1, 0x3ff0000000000000L    # 1.0

    .line 177
    invoke-static {p1, v1, v2}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->getJpegBytesFromBitmap(Landroid/graphics/Bitmap;D)[B

    move-result-object p1

    .line 179
    new-instance p2, Ljava/io/ByteArrayInputStream;

    invoke-direct {p2, p1}, Ljava/io/ByteArrayInputStream;-><init>([B)V

    move-object p1, p2

    .line 183
    :cond_0
    new-instance p2, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$PictureAsStream;

    invoke-direct {p2, p0, p1, v0}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$PictureAsStream;-><init>(Lcom/terikon/cordova/photolibrary/PhotoLibraryService;Ljava/io/InputStream;Ljava/lang/String;)V

    return-object p2
.end method

.method public getThumbnail(Landroid/content/Context;Ljava/lang/String;IID)Lcom/terikon/cordova/photolibrary/PhotoLibraryService$PictureData;
    .locals 6
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 94
    invoke-static {p2}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->getImageURL(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    .line 95
    new-instance v1, Ljava/io/File;

    invoke-direct {v1, v0}, Ljava/io/File;-><init>(Ljava/lang/String;)V

    const/16 v0, 0x200

    const/4 v2, 0x1

    const/4 v3, 0x0

    if-ne p3, v0, :cond_0

    const/16 v0, 0x180

    if-ne p4, v0, :cond_0

    .line 99
    invoke-static {p2}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->getImageId(Ljava/lang/String;)I

    move-result p2

    .line 102
    invoke-virtual {p1}, Landroid/content/Context;->getContentResolver()Landroid/content/ContentResolver;

    move-result-object v0

    int-to-long v4, p2

    move-object p2, v3

    check-cast p2, Landroid/graphics/BitmapFactory$Options;

    .line 101
    invoke-static {v0, v4, v5, v2, v3}, Landroid/provider/MediaStore$Images$Thumbnails;->getThumbnail(Landroid/content/ContentResolver;JILandroid/graphics/BitmapFactory$Options;)Landroid/graphics/Bitmap;

    move-result-object p2

    goto :goto_0

    :cond_0
    move-object p2, v3

    :goto_0
    if-nez p2, :cond_1

    .line 109
    invoke-static {v1}, Landroid/net/Uri;->fromFile(Ljava/io/File;)Landroid/net/Uri;

    move-result-object p2

    .line 110
    new-instance v0, Landroid/graphics/BitmapFactory$Options;

    invoke-direct {v0}, Landroid/graphics/BitmapFactory$Options;-><init>()V

    .line 112
    iput-boolean v2, v0, Landroid/graphics/BitmapFactory$Options;->inJustDecodeBounds:Z

    .line 113
    invoke-virtual {p1}, Landroid/content/Context;->getContentResolver()Landroid/content/ContentResolver;

    move-result-object v2

    invoke-virtual {v2, p2}, Landroid/content/ContentResolver;->openInputStream(Landroid/net/Uri;)Ljava/io/InputStream;

    move-result-object v2

    .line 114
    invoke-static {v2, v3, v0}, Landroid/graphics/BitmapFactory;->decodeStream(Ljava/io/InputStream;Landroid/graphics/Rect;Landroid/graphics/BitmapFactory$Options;)Landroid/graphics/Bitmap;

    .line 117
    invoke-static {v0, p3, p4}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->calculateInSampleSize(Landroid/graphics/BitmapFactory$Options;II)I

    move-result v2

    iput v2, v0, Landroid/graphics/BitmapFactory$Options;->inSampleSize:I

    const/4 v2, 0x0

    .line 118
    iput-boolean v2, v0, Landroid/graphics/BitmapFactory$Options;->inJustDecodeBounds:Z

    .line 119
    invoke-virtual {p1}, Landroid/content/Context;->getContentResolver()Landroid/content/ContentResolver;

    move-result-object p1

    invoke-virtual {p1, p2}, Landroid/content/ContentResolver;->openInputStream(Landroid/net/Uri;)Ljava/io/InputStream;

    move-result-object p1

    .line 120
    invoke-static {p1, v3, v0}, Landroid/graphics/BitmapFactory;->decodeStream(Ljava/io/InputStream;Landroid/graphics/Rect;Landroid/graphics/BitmapFactory$Options;)Landroid/graphics/Bitmap;

    move-result-object p2

    .line 121
    invoke-virtual {p1}, Ljava/io/InputStream;->close()V

    :cond_1
    if-eqz p2, :cond_4

    .line 127
    invoke-static {v1}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->getImageOrientation(Ljava/io/File;)I

    move-result p1

    .line 128
    invoke-static {p2, p1}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->rotateImage(Landroid/graphics/Bitmap;I)Landroid/graphics/Bitmap;

    move-result-object p1

    if-eq p2, p1, :cond_2

    .line 130
    invoke-virtual {p2}, Landroid/graphics/Bitmap;->recycle()V

    .line 133
    :cond_2
    invoke-static {p1, p3, p4}, Landroid/media/ThumbnailUtils;->extractThumbnail(Landroid/graphics/Bitmap;II)Landroid/graphics/Bitmap;

    move-result-object p2

    if-eq p1, p2, :cond_3

    .line 135
    invoke-virtual {p1}, Landroid/graphics/Bitmap;->recycle()V

    .line 140
    :cond_3
    invoke-static {p2, p5, p6}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->getJpegBytesFromBitmap(Landroid/graphics/Bitmap;D)[B

    move-result-object p1

    .line 143
    invoke-virtual {p2}, Landroid/graphics/Bitmap;->recycle()V

    .line 145
    new-instance p2, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$PictureData;

    const-string p3, "image/jpeg"

    invoke-direct {p2, p0, p1, p3}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$PictureData;-><init>(Lcom/terikon/cordova/photolibrary/PhotoLibraryService;[BLjava/lang/String;)V

    return-object p2

    :cond_4
    return-object v3
.end method

.method public saveImage(Landroid/content/Context;Lorg/apache/cordova/CordovaInterface;Ljava/lang/String;Ljava/lang/String;Lcom/terikon/cordova/photolibrary/PhotoLibraryService$JSONObjectRunnable;)V
    .locals 7
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;,
            Ljava/net/URISyntaxException;
        }
    .end annotation

    .line 201
    iget-object v5, p0, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->imageMimeToExtension:Ljava/util/Map;

    new-instance v6, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$2;

    invoke-direct {v6, p0, p1, p5}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$2;-><init>(Lcom/terikon/cordova/photolibrary/PhotoLibraryService;Landroid/content/Context;Lcom/terikon/cordova/photolibrary/PhotoLibraryService$JSONObjectRunnable;)V

    move-object v0, p0

    move-object v1, p1

    move-object v2, p2

    move-object v3, p3

    move-object v4, p4

    invoke-direct/range {v0 .. v6}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->saveMedia(Landroid/content/Context;Lorg/apache/cordova/CordovaInterface;Ljava/lang/String;Ljava/lang/String;Ljava/util/Map;Lcom/terikon/cordova/photolibrary/PhotoLibraryService$FilePathRunnable;)V

    return-void
.end method

.method public saveVideo(Landroid/content/Context;Lorg/apache/cordova/CordovaInterface;Ljava/lang/String;Ljava/lang/String;)V
    .locals 7
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;,
            Ljava/net/URISyntaxException;
        }
    .end annotation

    .line 224
    iget-object v5, p0, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->videMimeToExtension:Ljava/util/Map;

    new-instance v6, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$3;

    invoke-direct {v6, p0}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$3;-><init>(Lcom/terikon/cordova/photolibrary/PhotoLibraryService;)V

    move-object v0, p0

    move-object v1, p1

    move-object v2, p2

    move-object v3, p3

    move-object v4, p4

    invoke-direct/range {v0 .. v6}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->saveMedia(Landroid/content/Context;Lorg/apache/cordova/CordovaInterface;Ljava/lang/String;Ljava/lang/String;Ljava/util/Map;Lcom/terikon/cordova/photolibrary/PhotoLibraryService$FilePathRunnable;)V

    return-void
.end method

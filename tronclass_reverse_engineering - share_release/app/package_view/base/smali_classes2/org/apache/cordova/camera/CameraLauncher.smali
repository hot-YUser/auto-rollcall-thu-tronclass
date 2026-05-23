.class public Lorg/apache/cordova/camera/CameraLauncher;
.super Lorg/apache/cordova/CordovaPlugin;
.source "CameraLauncher.java"

# interfaces
.implements Landroid/media/MediaScannerConnection$MediaScannerConnectionClient;


# static fields
.field private static final ALLMEDIA:I = 0x2

.field private static final CAMERA:I = 0x1

.field private static final CROPPED_URI_KEY:Ljava/lang/String; = "croppedUri"

.field private static final CROP_CAMERA:I = 0x64

.field private static final DATA_URL:I = 0x0

.field private static final FILE_URI:I = 0x1

.field private static final GET_All:Ljava/lang/String; = "Get All"

.field private static final GET_PICTURE:Ljava/lang/String; = "Get Picture"

.field private static final GET_VIDEO:Ljava/lang/String; = "Get Video"

.field private static final HEIC_MIME_TYPE:Ljava/lang/String; = "image/heic"

.field private static final IMAGE_URI_KEY:Ljava/lang/String; = "imageUri"

.field private static final JPEG:I = 0x0

.field private static final JPEG_EXTENSION:Ljava/lang/String; = ".jpg"

.field private static final JPEG_MIME_TYPE:Ljava/lang/String; = "image/jpeg"

.field private static final JPEG_TYPE:Ljava/lang/String; = "jpg"

.field private static final LOG_TAG:Ljava/lang/String; = "CameraLauncher"

.field public static final PERMISSION_DENIED_ERROR:I = 0x14

.field private static final PHOTOLIBRARY:I = 0x0

.field private static final PICTURE:I = 0x0

.field private static final PNG:I = 0x1

.field private static final PNG_EXTENSION:Ljava/lang/String; = ".png"

.field private static final PNG_MIME_TYPE:Ljava/lang/String; = "image/png"

.field private static final PNG_TYPE:Ljava/lang/String; = "png"

.field private static final SAVEDPHOTOALBUM:I = 0x2

.field public static final SAVE_TO_ALBUM_SEC:I = 0x1

.field private static final TAKE_PICTURE_ACTION:Ljava/lang/String; = "takePicture"

.field public static final TAKE_PIC_SEC:I = 0x0

.field private static final TIME_FORMAT:Ljava/lang/String; = "yyyyMMdd_HHmmss"

.field private static final VIDEO:I = 0x1


# instance fields
.field private allowEdit:Z

.field private applicationId:Ljava/lang/String;

.field public callbackContext:Lorg/apache/cordova/CallbackContext;

.field private conn:Landroid/media/MediaScannerConnection;

.field private correctOrientation:Z

.field private croppedFilePath:Ljava/lang/String;

.field private croppedUri:Landroid/net/Uri;

.field private destType:I

.field private encodingType:I

.field private exifData:Lorg/apache/cordova/camera/ExifHelper;

.field private imageUri:Landroid/net/Uri;

.field private mQuality:I

.field private mediaType:I

.field private orientationCorrected:Z

.field private saveToPhotoAlbum:Z

.field private scanMe:Landroid/net/Uri;

.field private srcType:I

.field private targetHeight:I

.field private targetWidth:I


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 75
    invoke-direct {p0}, Lorg/apache/cordova/CordovaPlugin;-><init>()V

    return-void
.end method

.method static synthetic access$000(Lorg/apache/cordova/camera/CameraLauncher;ILandroid/content/Intent;)V
    .locals 0

    .line 75
    invoke-direct {p0, p1, p2}, Lorg/apache/cordova/camera/CameraLauncher;->processResultFromGallery(ILandroid/content/Intent;)V

    return-void
.end method

.method private calculateModifiedBitmapOutputFileName(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;
    .locals 1

    if-nez p2, :cond_0

    .line 709
    new-instance p1, Ljava/lang/StringBuilder;

    const-string p2, "modified"

    invoke-direct {p1, p2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-direct {p0}, Lorg/apache/cordova/camera/CameraLauncher;->getExtensionForEncodingType()Ljava/lang/String;

    move-result-object p2

    invoke-virtual {p1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    return-object p1

    :cond_0
    const/16 v0, 0x2f

    .line 711
    invoke-virtual {p2, v0}, Ljava/lang/String;->lastIndexOf(I)I

    move-result v0

    add-int/lit8 v0, v0, 0x1

    invoke-virtual {p2, v0}, Ljava/lang/String;->substring(I)Ljava/lang/String;

    move-result-object p2

    .line 712
    invoke-direct {p0}, Lorg/apache/cordova/camera/CameraLauncher;->getMimetypeForEncodingType()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v0, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-eqz p1, :cond_1

    return-object p2

    .line 717
    :cond_1
    new-instance p1, Ljava/lang/StringBuilder;

    invoke-direct {p1}, Ljava/lang/StringBuilder;-><init>()V

    const-string v0, "."

    invoke-virtual {p2, v0}, Ljava/lang/String;->lastIndexOf(Ljava/lang/String;)I

    move-result v0

    add-int/lit8 v0, v0, 0x1

    invoke-virtual {p2, v0}, Ljava/lang/String;->substring(I)Ljava/lang/String;

    move-result-object p2

    invoke-virtual {p1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-direct {p0}, Lorg/apache/cordova/camera/CameraLauncher;->getExtensionForEncodingType()Ljava/lang/String;

    move-result-object p2

    invoke-virtual {p1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    return-object p1
.end method

.method public static calculateSampleSize(IIII)I
    .locals 3

    int-to-float v0, p0

    int-to-float v1, p1

    div-float/2addr v0, v1

    int-to-float v1, p2

    int-to-float v2, p3

    div-float/2addr v1, v2

    cmpl-float v0, v0, v1

    if-lez v0, :cond_0

    .line 1195
    div-int/2addr p0, p2

    return p0

    .line 1197
    :cond_0
    div-int/2addr p1, p3

    return p1
.end method

.method private cleanup(Landroid/net/Uri;Landroid/net/Uri;Landroid/graphics/Bitmap;)V
    .locals 0

    if-eqz p3, :cond_0

    .line 1208
    invoke-virtual {p3}, Landroid/graphics/Bitmap;->recycle()V

    .line 1212
    :cond_0
    new-instance p3, Ljava/io/File;

    invoke-virtual {p1}, Landroid/net/Uri;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-static {p1}, Lorg/apache/cordova/camera/FileHelper;->stripFileProtocol(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    invoke-direct {p3, p1}, Ljava/io/File;-><init>(Ljava/lang/String;)V

    invoke-virtual {p3}, Ljava/io/File;->delete()Z

    .line 1215
    iget-boolean p1, p0, Lorg/apache/cordova/camera/CameraLauncher;->saveToPhotoAlbum:Z

    if-eqz p1, :cond_1

    if-eqz p2, :cond_1

    .line 1216
    invoke-direct {p0, p2}, Lorg/apache/cordova/camera/CameraLauncher;->scanForGallery(Landroid/net/Uri;)V

    .line 1219
    :cond_1
    invoke-static {}, Ljava/lang/System;->gc()V

    return-void
.end method

.method private createCaptureFile(I)Ljava/io/File;
    .locals 1

    .line 346
    const-string v0, ""

    invoke-direct {p0, p1, v0}, Lorg/apache/cordova/camera/CameraLauncher;->createCaptureFile(ILjava/lang/String;)Ljava/io/File;

    move-result-object p1

    return-object p1
.end method

.method private createCaptureFile(ILjava/lang/String;)Ljava/io/File;
    .locals 2

    .line 357
    invoke-virtual {p2}, Ljava/lang/String;->isEmpty()Z

    move-result v0

    if-eqz v0, :cond_0

    .line 358
    const-string p2, ".Pic"

    :cond_0
    if-nez p1, :cond_1

    .line 362
    new-instance p1, Ljava/lang/StringBuilder;

    invoke-direct {p1}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {p1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string p2, ".jpg"

    invoke-virtual {p1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    goto :goto_0

    :cond_1
    const/4 v0, 0x1

    if-ne p1, v0, :cond_2

    .line 364
    new-instance p1, Ljava/lang/StringBuilder;

    invoke-direct {p1}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {p1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string p2, ".png"

    invoke-virtual {p1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    .line 369
    :goto_0
    new-instance p2, Ljava/io/File;

    invoke-direct {p0}, Lorg/apache/cordova/camera/CameraLauncher;->getTempDirectoryPath()Ljava/lang/String;

    move-result-object v0

    const-string v1, "org.apache.cordova.camera"

    invoke-direct {p2, v0, v1}, Ljava/io/File;-><init>(Ljava/lang/String;Ljava/lang/String;)V

    .line 370
    invoke-virtual {p2}, Ljava/io/File;->mkdir()Z

    .line 372
    new-instance v0, Ljava/io/File;

    invoke-direct {v0, p2, p1}, Ljava/io/File;-><init>(Ljava/io/File;Ljava/lang/String;)V

    return-object v0

    .line 366
    :cond_2
    new-instance p2, Ljava/lang/IllegalArgumentException;

    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "Invalid Encoding Type: "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-direct {p2, p1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p2
.end method

.method private exifToDegrees(I)I
    .locals 1

    const/4 v0, 0x6

    if-ne p1, v0, :cond_0

    const/16 p1, 0x5a

    return p1

    :cond_0
    const/4 v0, 0x3

    if-ne p1, v0, :cond_1

    const/16 p1, 0xb4

    return p1

    :cond_1
    const/16 v0, 0x8

    if-ne p1, v0, :cond_2

    const/16 p1, 0x10e

    return p1

    :cond_2
    const/4 p1, 0x0

    return p1
.end method

.method private getCompressFormatForEncodingType(I)Landroid/graphics/Bitmap$CompressFormat;
    .locals 0

    if-nez p1, :cond_0

    .line 650
    sget-object p1, Landroid/graphics/Bitmap$CompressFormat;->JPEG:Landroid/graphics/Bitmap$CompressFormat;

    goto :goto_0

    :cond_0
    sget-object p1, Landroid/graphics/Bitmap$CompressFormat;->PNG:Landroid/graphics/Bitmap$CompressFormat;

    :goto_0
    return-object p1
.end method

.method private getExtensionForEncodingType()Ljava/lang/String;
    .locals 1

    .line 721
    iget v0, p0, Lorg/apache/cordova/camera/CameraLauncher;->encodingType:I

    if-nez v0, :cond_0

    const-string v0, ".jpg"

    goto :goto_0

    :cond_0
    const-string v0, ".png"

    :goto_0
    return-object v0
.end method

.method private getMimetypeForEncodingType()Ljava/lang/String;
    .locals 2

    .line 673
    iget v0, p0, Lorg/apache/cordova/camera/CameraLauncher;->encodingType:I

    const/4 v1, 0x1

    if-ne v0, v1, :cond_0

    const-string v0, "image/png"

    return-object v0

    :cond_0
    if-nez v0, :cond_1

    .line 674
    const-string v0, "image/jpeg"

    return-object v0

    .line 675
    :cond_1
    const-string v0, ""

    return-object v0
.end method

.method private getPageSize()I
    .locals 5

    .line 1371
    sget v0, Landroid/system/OsConstants;->_SC_PAGE_SIZE:I

    invoke-static {v0}, Landroid/system/Os;->sysconf(I)J

    move-result-wide v0

    const-wide/32 v2, 0x7fffffff

    cmp-long v4, v0, v2

    if-lez v4, :cond_0

    move-wide v0, v2

    :cond_0
    long-to-int v0, v0

    return v0
.end method

.method private getPicturesPath()Lorg/apache/cordova/camera/GalleryPathVO;
    .locals 3

    .line 654
    new-instance v0, Ljava/text/SimpleDateFormat;

    const-string v1, "yyyyMMdd_HHmmss"

    invoke-direct {v0, v1}, Ljava/text/SimpleDateFormat;-><init>(Ljava/lang/String;)V

    new-instance v1, Ljava/util/Date;

    invoke-direct {v1}, Ljava/util/Date;-><init>()V

    invoke-virtual {v0, v1}, Ljava/text/SimpleDateFormat;->format(Ljava/util/Date;)Ljava/lang/String;

    move-result-object v0

    .line 655
    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "IMG_"

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-direct {p0}, Lorg/apache/cordova/camera/CameraLauncher;->getExtensionForEncodingType()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    .line 656
    sget-object v1, Landroid/os/Environment;->DIRECTORY_PICTURES:Ljava/lang/String;

    invoke-static {v1}, Landroid/os/Environment;->getExternalStoragePublicDirectory(Ljava/lang/String;)Ljava/io/File;

    move-result-object v1

    .line 657
    invoke-virtual {v1}, Ljava/io/File;->mkdirs()Z

    .line 658
    new-instance v2, Lorg/apache/cordova/camera/GalleryPathVO;

    invoke-virtual {v1}, Ljava/io/File;->getAbsolutePath()Ljava/lang/String;

    move-result-object v1

    invoke-direct {v2, v1, v0}, Lorg/apache/cordova/camera/GalleryPathVO;-><init>(Ljava/lang/String;Ljava/lang/String;)V

    return-object v2
.end method

.method private getScaledAndRotatedBitmap([BLjava/lang/String;)Landroid/graphics/Bitmap;
    .locals 11
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 1037
    const-string v0, "CameraLauncher"

    .line 0
    const-string v1, "Unable to read Exif data: "

    .line 1037
    iget v2, p0, Lorg/apache/cordova/camera/CameraLauncher;->targetWidth:I

    const/4 v3, 0x0

    if-gtz v2, :cond_0

    iget v2, p0, Lorg/apache/cordova/camera/CameraLauncher;->targetHeight:I

    if-gtz v2, :cond_0

    iget-boolean v2, p0, Lorg/apache/cordova/camera/CameraLauncher;->correctOrientation:Z

    if-nez v2, :cond_0

    .line 1040
    :try_start_0
    new-instance p2, Ljava/io/ByteArrayInputStream;

    invoke-direct {p2, p1}, Ljava/io/ByteArrayInputStream;-><init>([B)V

    invoke-static {p2}, Landroid/graphics/BitmapFactory;->decodeStream(Ljava/io/InputStream;)Landroid/graphics/Bitmap;

    move-result-object v3
    :try_end_0
    .catch Ljava/lang/OutOfMemoryError; {:try_start_0 .. :try_end_0} :catch_1
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p1

    .line 1044
    iget-object p2, p0, Lorg/apache/cordova/camera/CameraLauncher;->callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {p1}, Ljava/lang/Exception;->getLocalizedMessage()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p2, p1}, Lorg/apache/cordova/CallbackContext;->error(Ljava/lang/String;)V

    goto :goto_0

    :catch_1
    move-exception p1

    .line 1042
    iget-object p2, p0, Lorg/apache/cordova/camera/CameraLauncher;->callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {p1}, Ljava/lang/OutOfMemoryError;->getLocalizedMessage()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p2, p1}, Lorg/apache/cordova/CallbackContext;->error(Ljava/lang/String;)V

    :goto_0
    return-object v3

    :cond_0
    const/4 v2, 0x0

    .line 1052
    :try_start_1
    const-string v4, "image/jpeg"

    invoke-virtual {v4, p2}, Ljava/lang/String;->equalsIgnoreCase(Ljava/lang/String;)Z

    move-result p2

    if-eqz p2, :cond_1

    .line 1053
    new-instance p2, Lorg/apache/cordova/camera/ExifHelper;

    invoke-direct {p2}, Lorg/apache/cordova/camera/ExifHelper;-><init>()V

    iput-object p2, p0, Lorg/apache/cordova/camera/CameraLauncher;->exifData:Lorg/apache/cordova/camera/ExifHelper;

    .line 1054
    new-instance v4, Ljava/io/ByteArrayInputStream;

    invoke-direct {v4, p1}, Ljava/io/ByteArrayInputStream;-><init>([B)V

    invoke-virtual {p2, v4}, Lorg/apache/cordova/camera/ExifHelper;->createInFile(Ljava/io/InputStream;)V

    .line 1055
    iget-object p2, p0, Lorg/apache/cordova/camera/CameraLauncher;->exifData:Lorg/apache/cordova/camera/ExifHelper;

    invoke-virtual {p2}, Lorg/apache/cordova/camera/ExifHelper;->readExifData()V

    .line 1057
    iget-boolean p2, p0, Lorg/apache/cordova/camera/CameraLauncher;->correctOrientation:Z

    if-eqz p2, :cond_1

    .line 1058
    new-instance p2, Landroid/media/ExifInterface;

    new-instance v4, Ljava/io/ByteArrayInputStream;

    invoke-direct {v4, p1}, Ljava/io/ByteArrayInputStream;-><init>([B)V

    invoke-direct {p2, v4}, Landroid/media/ExifInterface;-><init>(Ljava/io/InputStream;)V

    .line 1059
    const-string v4, "Orientation"

    invoke-virtual {p2, v4, v2}, Landroid/media/ExifInterface;->getAttributeInt(Ljava/lang/String;I)I

    move-result p2

    invoke-direct {p0, p2}, Lorg/apache/cordova/camera/CameraLauncher;->exifToDegrees(I)I

    move-result p2
    :try_end_1
    .catch Ljava/lang/Exception; {:try_start_1 .. :try_end_1} :catch_2

    goto :goto_1

    :catch_2
    move-exception p2

    .line 1063
    :try_start_2
    new-instance v4, Ljava/lang/StringBuilder;

    invoke-direct {v4, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2}, Ljava/lang/Exception;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-virtual {v4, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-static {v0, p2}, Lorg/apache/cordova/LOG;->w(Ljava/lang/String;Ljava/lang/String;)V
    :try_end_2
    .catch Ljava/lang/Exception; {:try_start_2 .. :try_end_2} :catch_4

    :cond_1
    move p2, v2

    .line 1072
    :goto_1
    new-instance v0, Landroid/graphics/BitmapFactory$Options;

    invoke-direct {v0}, Landroid/graphics/BitmapFactory$Options;-><init>()V

    const/4 v1, 0x1

    .line 1073
    iput-boolean v1, v0, Landroid/graphics/BitmapFactory$Options;->inJustDecodeBounds:Z

    .line 1074
    new-instance v4, Ljava/io/ByteArrayInputStream;

    invoke-direct {v4, p1}, Ljava/io/ByteArrayInputStream;-><init>([B)V

    invoke-static {v4, v3, v0}, Landroid/graphics/BitmapFactory;->decodeStream(Ljava/io/InputStream;Landroid/graphics/Rect;Landroid/graphics/BitmapFactory$Options;)Landroid/graphics/Bitmap;

    .line 1077
    iget v4, v0, Landroid/graphics/BitmapFactory$Options;->outWidth:I

    if-eqz v4, :cond_b

    iget v4, v0, Landroid/graphics/BitmapFactory$Options;->outHeight:I

    if-nez v4, :cond_2

    goto/16 :goto_7

    .line 1082
    :cond_2
    iget v4, p0, Lorg/apache/cordova/camera/CameraLauncher;->targetWidth:I

    if-gtz v4, :cond_3

    iget v4, p0, Lorg/apache/cordova/camera/CameraLauncher;->targetHeight:I

    if-gtz v4, :cond_3

    .line 1083
    iget v4, v0, Landroid/graphics/BitmapFactory$Options;->outWidth:I

    iput v4, p0, Lorg/apache/cordova/camera/CameraLauncher;->targetWidth:I

    .line 1084
    iget v4, v0, Landroid/graphics/BitmapFactory$Options;->outHeight:I

    iput v4, p0, Lorg/apache/cordova/camera/CameraLauncher;->targetHeight:I

    :cond_3
    const/16 v4, 0x5a

    if-eq p2, v4, :cond_5

    const/16 v4, 0x10e

    if-ne p2, v4, :cond_4

    goto :goto_2

    .line 1095
    :cond_4
    iget v4, v0, Landroid/graphics/BitmapFactory$Options;->outWidth:I

    .line 1096
    iget v5, v0, Landroid/graphics/BitmapFactory$Options;->outHeight:I

    move v6, v2

    goto :goto_3

    .line 1091
    :cond_5
    :goto_2
    iget v4, v0, Landroid/graphics/BitmapFactory$Options;->outHeight:I

    .line 1092
    iget v5, v0, Landroid/graphics/BitmapFactory$Options;->outWidth:I

    move v6, v1

    .line 1100
    :goto_3
    invoke-virtual {p0, v4, v5}, Lorg/apache/cordova/camera/CameraLauncher;->calculateAspectRatio(II)[I

    move-result-object v7

    .line 1103
    iput-boolean v2, v0, Landroid/graphics/BitmapFactory$Options;->inJustDecodeBounds:Z

    .line 1104
    aget v8, v7, v2

    aget v9, v7, v1

    invoke-static {v4, v5, v8, v9}, Lorg/apache/cordova/camera/CameraLauncher;->calculateSampleSize(IIII)I

    move-result v4

    iput v4, v0, Landroid/graphics/BitmapFactory$Options;->inSampleSize:I

    .line 1105
    new-instance v4, Ljava/io/ByteArrayInputStream;

    invoke-direct {v4, p1}, Ljava/io/ByteArrayInputStream;-><init>([B)V

    invoke-static {v4, v3, v0}, Landroid/graphics/BitmapFactory;->decodeStream(Ljava/io/InputStream;Landroid/graphics/Rect;Landroid/graphics/BitmapFactory$Options;)Landroid/graphics/Bitmap;

    move-result-object p1

    if-nez p1, :cond_6

    return-object v3

    :cond_6
    if-nez v6, :cond_7

    .line 1111
    aget v0, v7, v2

    goto :goto_4

    :cond_7
    aget v0, v7, v1

    :goto_4
    if-nez v6, :cond_8

    .line 1112
    aget v3, v7, v1

    goto :goto_5

    :cond_8
    aget v3, v7, v2

    .line 1114
    :goto_5
    invoke-static {p1, v0, v3, v1}, Landroid/graphics/Bitmap;->createScaledBitmap(Landroid/graphics/Bitmap;IIZ)Landroid/graphics/Bitmap;

    move-result-object v0

    if-eq v0, p1, :cond_9

    .line 1116
    invoke-virtual {p1}, Landroid/graphics/Bitmap;->recycle()V

    .line 1120
    :cond_9
    iget-boolean p1, p0, Lorg/apache/cordova/camera/CameraLauncher;->correctOrientation:Z

    if-eqz p1, :cond_a

    if-eqz p2, :cond_a

    .line 1121
    new-instance v9, Landroid/graphics/Matrix;

    invoke-direct {v9}, Landroid/graphics/Matrix;-><init>()V

    int-to-float p1, p2

    .line 1122
    invoke-virtual {v9, p1}, Landroid/graphics/Matrix;->setRotate(F)V

    .line 1124
    :try_start_3
    invoke-virtual {v0}, Landroid/graphics/Bitmap;->getWidth()I

    move-result v7

    invoke-virtual {v0}, Landroid/graphics/Bitmap;->getHeight()I

    move-result v8

    const/4 v10, 0x1

    const/4 v5, 0x0

    const/4 v6, 0x0

    move-object v4, v0

    invoke-static/range {v4 .. v10}, Landroid/graphics/Bitmap;->createBitmap(Landroid/graphics/Bitmap;IIIILandroid/graphics/Matrix;Z)Landroid/graphics/Bitmap;

    move-result-object v0

    .line 1125
    iput-boolean v1, p0, Lorg/apache/cordova/camera/CameraLauncher;->orientationCorrected:Z
    :try_end_3
    .catch Ljava/lang/OutOfMemoryError; {:try_start_3 .. :try_end_3} :catch_3

    goto :goto_6

    .line 1127
    :catch_3
    iput-boolean v2, p0, Lorg/apache/cordova/camera/CameraLauncher;->orientationCorrected:Z

    :cond_a
    :goto_6
    return-object v0

    :cond_b
    :goto_7
    return-object v3

    :catch_4
    move-exception p1

    .line 1067
    new-instance p2, Ljava/lang/StringBuilder;

    const-string v1, "Exception while getting input stream: "

    invoke-direct {p2, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p1}, Ljava/lang/Exception;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p2, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-static {v0, p1}, Lorg/apache/cordova/LOG;->e(Ljava/lang/String;Ljava/lang/String;)V

    return-object v3
.end method

.method private getTempDirectoryPath()Ljava/lang/String;
    .locals 1

    .line 228
    iget-object v0, p0, Lorg/apache/cordova/camera/CameraLauncher;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v0}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v0

    invoke-virtual {v0}, Landroid/app/Activity;->getCacheDir()Ljava/io/File;

    move-result-object v0

    .line 230
    invoke-virtual {v0}, Ljava/io/File;->mkdirs()Z

    .line 231
    invoke-virtual {v0}, Ljava/io/File;->getAbsolutePath()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method private isImageMimeTypeProcessable(Ljava/lang/String;)Z
    .locals 1

    .line 875
    const-string v0, "image/jpeg"

    invoke-virtual {v0, p1}, Ljava/lang/String;->equalsIgnoreCase(Ljava/lang/String;)Z

    move-result v0

    if-nez v0, :cond_1

    const-string v0, "image/png"

    invoke-virtual {v0, p1}, Ljava/lang/String;->equalsIgnoreCase(Ljava/lang/String;)Z

    move-result v0

    if-nez v0, :cond_1

    const-string v0, "image/heic"

    .line 876
    invoke-virtual {v0, p1}, Ljava/lang/String;->equalsIgnoreCase(Ljava/lang/String;)Z

    move-result p1

    if-eqz p1, :cond_0

    goto :goto_0

    :cond_0
    const/4 p1, 0x0

    goto :goto_1

    :cond_1
    :goto_0
    const/4 p1, 0x1

    :goto_1
    return p1
.end method

.method private outputModifiedBitmap(Landroid/graphics/Bitmap;Landroid/net/Uri;Ljava/lang/String;)Ljava/lang/String;
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 681
    iget-object v0, p0, Lorg/apache/cordova/camera/CameraLauncher;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-static {p2, v0}, Lorg/apache/cordova/camera/FileHelper;->getRealPath(Landroid/net/Uri;Lorg/apache/cordova/CordovaInterface;)Ljava/lang/String;

    move-result-object p2

    .line 682
    invoke-direct {p0, p3, p2}, Lorg/apache/cordova/camera/CameraLauncher;->calculateModifiedBitmapOutputFileName(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object p2

    .line 684
    new-instance p3, Ljava/lang/StringBuilder;

    invoke-direct {p3}, Ljava/lang/StringBuilder;-><init>()V

    invoke-direct {p0}, Lorg/apache/cordova/camera/CameraLauncher;->getTempDirectoryPath()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p3, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p3

    const-string v0, "/"

    invoke-virtual {p3, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p3

    invoke-virtual {p3, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    .line 686
    new-instance p3, Ljava/io/FileOutputStream;

    invoke-direct {p3, p2}, Ljava/io/FileOutputStream;-><init>(Ljava/lang/String;)V

    .line 687
    iget v0, p0, Lorg/apache/cordova/camera/CameraLauncher;->encodingType:I

    invoke-direct {p0, v0}, Lorg/apache/cordova/camera/CameraLauncher;->getCompressFormatForEncodingType(I)Landroid/graphics/Bitmap$CompressFormat;

    move-result-object v0

    .line 689
    iget v1, p0, Lorg/apache/cordova/camera/CameraLauncher;->mQuality:I

    invoke-virtual {p1, v0, v1, p3}, Landroid/graphics/Bitmap;->compress(Landroid/graphics/Bitmap$CompressFormat;ILjava/io/OutputStream;)Z

    .line 690
    invoke-virtual {p3}, Ljava/io/OutputStream;->close()V

    .line 692
    iget-object p1, p0, Lorg/apache/cordova/camera/CameraLauncher;->exifData:Lorg/apache/cordova/camera/ExifHelper;

    if-eqz p1, :cond_1

    iget p3, p0, Lorg/apache/cordova/camera/CameraLauncher;->encodingType:I

    if-nez p3, :cond_1

    .line 694
    :try_start_0
    iget-boolean p3, p0, Lorg/apache/cordova/camera/CameraLauncher;->correctOrientation:Z

    if-eqz p3, :cond_0

    iget-boolean p3, p0, Lorg/apache/cordova/camera/CameraLauncher;->orientationCorrected:Z

    if-eqz p3, :cond_0

    .line 695
    invoke-virtual {p1}, Lorg/apache/cordova/camera/ExifHelper;->resetOrientation()V

    .line 697
    :cond_0
    iget-object p1, p0, Lorg/apache/cordova/camera/CameraLauncher;->exifData:Lorg/apache/cordova/camera/ExifHelper;

    invoke-virtual {p1, p2}, Lorg/apache/cordova/camera/ExifHelper;->createOutFile(Ljava/lang/String;)V

    .line 698
    iget-object p1, p0, Lorg/apache/cordova/camera/CameraLauncher;->exifData:Lorg/apache/cordova/camera/ExifHelper;

    invoke-virtual {p1}, Lorg/apache/cordova/camera/ExifHelper;->writeExifData()V

    const/4 p1, 0x0

    .line 699
    iput-object p1, p0, Lorg/apache/cordova/camera/CameraLauncher;->exifData:Lorg/apache/cordova/camera/ExifHelper;
    :try_end_0
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p1

    .line 701
    invoke-virtual {p1}, Ljava/io/IOException;->printStackTrace()V

    :cond_1
    :goto_0
    return-object p2
.end method

.method private performCrop(Landroid/net/Uri;ILandroid/content/Intent;)V
    .locals 5

    .line 438
    :try_start_0
    new-instance v0, Landroid/content/Intent;

    const-string v1, "com.android.camera.action.CROP"

    invoke-direct {v0, v1}, Landroid/content/Intent;-><init>(Ljava/lang/String;)V

    .line 440
    const-string v1, "image/*"

    invoke-virtual {v0, p1, v1}, Landroid/content/Intent;->setDataAndType(Landroid/net/Uri;Ljava/lang/String;)Landroid/content/Intent;

    .line 442
    const-string p1, "crop"

    const-string v1, "true"

    invoke-virtual {v0, p1, v1}, Landroid/content/Intent;->putExtra(Ljava/lang/String;Ljava/lang/String;)Landroid/content/Intent;

    .line 445
    iget p1, p0, Lorg/apache/cordova/camera/CameraLauncher;->targetWidth:I

    if-lez p1, :cond_0

    .line 446
    const-string v1, "outputX"

    invoke-virtual {v0, v1, p1}, Landroid/content/Intent;->putExtra(Ljava/lang/String;I)Landroid/content/Intent;

    .line 448
    :cond_0
    iget p1, p0, Lorg/apache/cordova/camera/CameraLauncher;->targetHeight:I

    if-lez p1, :cond_1

    .line 449
    const-string v1, "outputY"

    invoke-virtual {v0, v1, p1}, Landroid/content/Intent;->putExtra(Ljava/lang/String;I)Landroid/content/Intent;

    .line 451
    :cond_1
    iget p1, p0, Lorg/apache/cordova/camera/CameraLauncher;->targetHeight:I

    const/4 v1, 0x1

    if-lez p1, :cond_2

    iget v2, p0, Lorg/apache/cordova/camera/CameraLauncher;->targetWidth:I

    if-lez v2, :cond_2

    if-ne v2, p1, :cond_2

    .line 452
    const-string p1, "aspectX"

    invoke-virtual {v0, p1, v1}, Landroid/content/Intent;->putExtra(Ljava/lang/String;I)Landroid/content/Intent;

    .line 453
    const-string p1, "aspectY"

    invoke-virtual {v0, p1, v1}, Landroid/content/Intent;->putExtra(Ljava/lang/String;I)Landroid/content/Intent;

    .line 456
    :cond_2
    iget p1, p0, Lorg/apache/cordova/camera/CameraLauncher;->encodingType:I

    new-instance v2, Ljava/lang/StringBuilder;

    invoke-direct {v2}, Ljava/lang/StringBuilder;-><init>()V

    invoke-static {}, Ljava/lang/System;->currentTimeMillis()J

    move-result-wide v3

    invoke-virtual {v2, v3, v4}, Ljava/lang/StringBuilder;->append(J)Ljava/lang/StringBuilder;

    move-result-object v2

    const-string v3, ""

    invoke-virtual {v2, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v2

    invoke-direct {p0, p1, v2}, Lorg/apache/cordova/camera/CameraLauncher;->createCaptureFile(ILjava/lang/String;)Ljava/io/File;

    move-result-object p1

    invoke-virtual {p1}, Ljava/io/File;->getAbsolutePath()Ljava/lang/String;

    move-result-object p1

    iput-object p1, p0, Lorg/apache/cordova/camera/CameraLauncher;->croppedFilePath:Ljava/lang/String;

    .line 457
    invoke-static {p1}, Landroid/net/Uri;->parse(Ljava/lang/String;)Landroid/net/Uri;

    move-result-object p1

    iput-object p1, p0, Lorg/apache/cordova/camera/CameraLauncher;->croppedUri:Landroid/net/Uri;

    .line 458
    invoke-virtual {v0, v1}, Landroid/content/Intent;->addFlags(I)Landroid/content/Intent;

    const/4 p1, 0x2

    .line 459
    invoke-virtual {v0, p1}, Landroid/content/Intent;->addFlags(I)Landroid/content/Intent;

    .line 460
    const-string p1, "output"

    iget-object v1, p0, Lorg/apache/cordova/camera/CameraLauncher;->croppedUri:Landroid/net/Uri;

    invoke-virtual {v0, p1, v1}, Landroid/content/Intent;->putExtra(Ljava/lang/String;Landroid/os/Parcelable;)Landroid/content/Intent;

    .line 464
    iget-object p1, p0, Lorg/apache/cordova/camera/CameraLauncher;->cordova:Lorg/apache/cordova/CordovaInterface;

    if-eqz p1, :cond_3

    .line 465
    iget-object p1, p0, Lorg/apache/cordova/camera/CameraLauncher;->cordova:Lorg/apache/cordova/CordovaInterface;

    add-int/lit8 v1, p2, 0x64

    invoke-interface {p1, p0, v0, v1}, Lorg/apache/cordova/CordovaInterface;->startActivityForResult(Lorg/apache/cordova/CordovaPlugin;Landroid/content/Intent;I)V
    :try_end_0
    .catch Landroid/content/ActivityNotFoundException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    .line 469
    :catch_0
    const-string p1, "Crop operation not supported on this device"

    const-string v0, "CameraLauncher"

    invoke-static {v0, p1}, Lorg/apache/cordova/LOG;->e(Ljava/lang/String;Ljava/lang/String;)V

    .line 471
    :try_start_1
    invoke-direct {p0, p2, p3}, Lorg/apache/cordova/camera/CameraLauncher;->processResultFromCamera(ILandroid/content/Intent;)V
    :try_end_1
    .catch Ljava/io/IOException; {:try_start_1 .. :try_end_1} :catch_1

    goto :goto_0

    :catch_1
    move-exception p1

    .line 473
    invoke-virtual {p1}, Ljava/io/IOException;->printStackTrace()V

    .line 474
    const-string p1, "Unable to write to file"

    invoke-static {v0, p1}, Lorg/apache/cordova/LOG;->e(Ljava/lang/String;Ljava/lang/String;)V

    :cond_3
    :goto_0
    return-void
.end method

.method private processResultFromCamera(ILandroid/content/Intent;)V
    .locals 13
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 489
    new-instance v0, Lorg/apache/cordova/camera/ExifHelper;

    invoke-direct {v0}, Lorg/apache/cordova/camera/ExifHelper;-><init>()V

    .line 493
    iget-boolean v1, p0, Lorg/apache/cordova/camera/CameraLauncher;->allowEdit:Z

    if-eqz v1, :cond_0

    iget-object v1, p0, Lorg/apache/cordova/camera/CameraLauncher;->croppedUri:Landroid/net/Uri;

    if-eqz v1, :cond_0

    .line 494
    new-instance v1, Ljava/io/FileInputStream;

    iget-object v2, p0, Lorg/apache/cordova/camera/CameraLauncher;->croppedFilePath:Ljava/lang/String;

    invoke-direct {v1, v2}, Ljava/io/FileInputStream;-><init>(Ljava/lang/String;)V

    .line 495
    iget-object v2, p0, Lorg/apache/cordova/camera/CameraLauncher;->croppedFilePath:Ljava/lang/String;

    invoke-static {v2}, Lorg/apache/cordova/camera/FileHelper;->getMimeTypeForExtension(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v2

    goto :goto_0

    .line 498
    :cond_0
    iget-object v1, p0, Lorg/apache/cordova/camera/CameraLauncher;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v1}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v1

    invoke-virtual {v1}, Landroid/app/Activity;->getContentResolver()Landroid/content/ContentResolver;

    move-result-object v1

    iget-object v2, p0, Lorg/apache/cordova/camera/CameraLauncher;->imageUri:Landroid/net/Uri;

    invoke-virtual {v1, v2}, Landroid/content/ContentResolver;->openInputStream(Landroid/net/Uri;)Ljava/io/InputStream;

    move-result-object v1

    .line 499
    iget-object v2, p0, Lorg/apache/cordova/camera/CameraLauncher;->imageUri:Landroid/net/Uri;

    invoke-virtual {v2}, Landroid/net/Uri;->toString()Ljava/lang/String;

    move-result-object v2

    iget-object v3, p0, Lorg/apache/cordova/camera/CameraLauncher;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-static {v2, v3}, Lorg/apache/cordova/camera/FileHelper;->getMimeType(Ljava/lang/String;Lorg/apache/cordova/CordovaInterface;)Ljava/lang/String;

    move-result-object v2

    :goto_0
    if-eqz v1, :cond_f

    .line 506
    invoke-direct {p0, v1}, Lorg/apache/cordova/camera/CameraLauncher;->readData(Ljava/io/InputStream;)[B

    move-result-object v3

    .line 509
    :try_start_0
    iget v4, p0, Lorg/apache/cordova/camera/CameraLauncher;->encodingType:I
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_1

    if-nez v4, :cond_1

    .line 512
    :try_start_1
    new-instance v4, Ljava/io/ByteArrayInputStream;

    invoke-direct {v4, v3}, Ljava/io/ByteArrayInputStream;-><init>([B)V

    invoke-virtual {v0, v4}, Lorg/apache/cordova/camera/ExifHelper;->createInFile(Ljava/io/InputStream;)V

    .line 513
    invoke-virtual {v0}, Lorg/apache/cordova/camera/ExifHelper;->readExifData()V

    .line 514
    invoke-virtual {v0}, Lorg/apache/cordova/camera/ExifHelper;->getOrientation()I

    move-result v4
    :try_end_1
    .catch Ljava/io/IOException; {:try_start_1 .. :try_end_1} :catch_0
    .catch Ljava/lang/Exception; {:try_start_1 .. :try_end_1} :catch_1

    goto :goto_1

    :catch_0
    move-exception v4

    .line 517
    :try_start_2
    invoke-virtual {v4}, Ljava/io/IOException;->printStackTrace()V

    :cond_1
    const/4 v4, 0x0

    .line 527
    :goto_1
    iget-boolean v5, p0, Lorg/apache/cordova/camera/CameraLauncher;->saveToPhotoAlbum:Z

    const/4 v6, 0x0

    if-eqz v5, :cond_4

    .line 528
    invoke-direct {p0}, Lorg/apache/cordova/camera/CameraLauncher;->getPicturesPath()Lorg/apache/cordova/camera/GalleryPathVO;

    move-result-object v5

    .line 529
    new-instance v7, Ljava/io/File;

    invoke-virtual {v5}, Lorg/apache/cordova/camera/GalleryPathVO;->getGalleryPath()Ljava/lang/String;

    move-result-object v8

    invoke-direct {v7, v8}, Ljava/io/File;-><init>(Ljava/lang/String;)V

    invoke-static {v7}, Landroid/net/Uri;->fromFile(Ljava/io/File;)Landroid/net/Uri;

    move-result-object v7

    .line 531
    iget-boolean v8, p0, Lorg/apache/cordova/camera/CameraLauncher;->allowEdit:Z

    if-eqz v8, :cond_2

    iget-object v8, p0, Lorg/apache/cordova/camera/CameraLauncher;->croppedUri:Landroid/net/Uri;

    if-eqz v8, :cond_2

    .line 532
    invoke-direct {p0, v8, v7}, Lorg/apache/cordova/camera/CameraLauncher;->writeUncompressedImage(Landroid/net/Uri;Landroid/net/Uri;)V

    goto :goto_2

    .line 534
    :cond_2
    sget v8, Landroid/os/Build$VERSION;->SDK_INT:I

    const/16 v9, 0x1c

    if-gt v8, v9, :cond_3

    .line 535
    invoke-direct {p0, v7}, Lorg/apache/cordova/camera/CameraLauncher;->writeTakenPictureToGalleryLowerThanAndroidQ(Landroid/net/Uri;)V

    goto :goto_2

    .line 537
    :cond_3
    invoke-direct {p0, v5}, Lorg/apache/cordova/camera/CameraLauncher;->writeTakenPictureToGalleryStartingFromAndroidQ(Lorg/apache/cordova/camera/GalleryPathVO;)V
    :try_end_2
    .catch Ljava/lang/Exception; {:try_start_2 .. :try_end_2} :catch_1

    goto :goto_2

    :cond_4
    move-object v7, v6

    .line 543
    :goto_2
    const-string v5, "Unable to create bitmap!"

    const-string v8, "I either have an unreadable imageUri or null bitmap"

    const-string v9, "CameraLauncher"

    if-nez p1, :cond_7

    .line 544
    :try_start_3
    invoke-direct {p0, v3, v2}, Lorg/apache/cordova/camera/CameraLauncher;->getScaledAndRotatedBitmap([BLjava/lang/String;)Landroid/graphics/Bitmap;

    move-result-object p1

    if-nez p1, :cond_5

    .line 548
    invoke-virtual {p2}, Landroid/content/Intent;->getExtras()Landroid/os/Bundle;

    move-result-object p1

    const-string p2, "data"

    invoke-virtual {p1, p2}, Landroid/os/Bundle;->get(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Landroid/graphics/Bitmap;

    :cond_5
    move-object v6, p1

    if-nez v6, :cond_6

    .line 553
    invoke-static {v9, v8}, Lorg/apache/cordova/LOG;->d(Ljava/lang/String;Ljava/lang/String;)V

    .line 554
    invoke-virtual {p0, v5}, Lorg/apache/cordova/camera/CameraLauncher;->failPicture(Ljava/lang/String;)V

    return-void

    .line 558
    :cond_6
    iget p1, p0, Lorg/apache/cordova/camera/CameraLauncher;->encodingType:I

    invoke-virtual {p0, v6, p1}, Lorg/apache/cordova/camera/CameraLauncher;->processPicture(Landroid/graphics/Bitmap;I)V

    goto/16 :goto_4

    :cond_7
    const/4 p2, 0x1

    if-ne p1, p2, :cond_e

    .line 564
    iget p1, p0, Lorg/apache/cordova/camera/CameraLauncher;->targetHeight:I
    :try_end_3
    .catch Ljava/lang/Exception; {:try_start_3 .. :try_end_3} :catch_1

    const-string v10, ""

    const/4 v11, -0x1

    if-ne p1, v11, :cond_a

    :try_start_4
    iget p1, p0, Lorg/apache/cordova/camera/CameraLauncher;->targetWidth:I

    if-ne p1, v11, :cond_a

    iget p1, p0, Lorg/apache/cordova/camera/CameraLauncher;->mQuality:I

    const/16 v11, 0x64

    if-ne p1, v11, :cond_a

    iget-boolean p1, p0, Lorg/apache/cordova/camera/CameraLauncher;->correctOrientation:Z

    if-nez p1, :cond_a

    .line 569
    iget-boolean p1, p0, Lorg/apache/cordova/camera/CameraLauncher;->saveToPhotoAlbum:Z

    if-eqz p1, :cond_8

    .line 570
    iget-object p1, p0, Lorg/apache/cordova/camera/CameraLauncher;->callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {v7}, Landroid/net/Uri;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-virtual {p1, p2}, Lorg/apache/cordova/CallbackContext;->success(Ljava/lang/String;)V

    goto/16 :goto_4

    .line 572
    :cond_8
    iget p1, p0, Lorg/apache/cordova/camera/CameraLauncher;->encodingType:I

    new-instance p2, Ljava/lang/StringBuilder;

    invoke-direct {p2}, Ljava/lang/StringBuilder;-><init>()V

    invoke-static {}, Ljava/lang/System;->currentTimeMillis()J

    move-result-wide v2

    invoke-virtual {p2, v2, v3}, Ljava/lang/StringBuilder;->append(J)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2, v10}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p0, p1, p2}, Lorg/apache/cordova/camera/CameraLauncher;->createCaptureFile(ILjava/lang/String;)Ljava/io/File;

    move-result-object p1

    invoke-static {p1}, Landroid/net/Uri;->fromFile(Ljava/io/File;)Landroid/net/Uri;

    move-result-object p1

    .line 574
    iget-boolean p2, p0, Lorg/apache/cordova/camera/CameraLauncher;->allowEdit:Z

    if-eqz p2, :cond_9

    iget-object p2, p0, Lorg/apache/cordova/camera/CameraLauncher;->croppedUri:Landroid/net/Uri;

    if-eqz p2, :cond_9

    .line 575
    iget-object p2, p0, Lorg/apache/cordova/camera/CameraLauncher;->croppedFilePath:Ljava/lang/String;

    invoke-static {p2}, Landroid/net/Uri;->parse(Ljava/lang/String;)Landroid/net/Uri;

    move-result-object p2

    .line 576
    invoke-direct {p0, p2, p1}, Lorg/apache/cordova/camera/CameraLauncher;->writeUncompressedImage(Landroid/net/Uri;Landroid/net/Uri;)V

    goto :goto_3

    .line 578
    :cond_9
    iget-object p2, p0, Lorg/apache/cordova/camera/CameraLauncher;->imageUri:Landroid/net/Uri;

    .line 579
    invoke-direct {p0, p2, p1}, Lorg/apache/cordova/camera/CameraLauncher;->writeUncompressedImage(Landroid/net/Uri;Landroid/net/Uri;)V

    .line 582
    :goto_3
    iget-object p2, p0, Lorg/apache/cordova/camera/CameraLauncher;->callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {p1}, Landroid/net/Uri;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p2, p1}, Lorg/apache/cordova/CallbackContext;->success(Ljava/lang/String;)V

    goto :goto_4

    .line 585
    :cond_a
    iget p1, p0, Lorg/apache/cordova/camera/CameraLauncher;->encodingType:I

    new-instance v6, Ljava/lang/StringBuilder;

    invoke-direct {v6}, Ljava/lang/StringBuilder;-><init>()V

    invoke-static {}, Ljava/lang/System;->currentTimeMillis()J

    move-result-wide v11

    invoke-virtual {v6, v11, v12}, Ljava/lang/StringBuilder;->append(J)Ljava/lang/StringBuilder;

    move-result-object v6

    invoke-virtual {v6, v10}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v6

    invoke-virtual {v6}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v6

    invoke-direct {p0, p1, v6}, Lorg/apache/cordova/camera/CameraLauncher;->createCaptureFile(ILjava/lang/String;)Ljava/io/File;

    move-result-object p1

    invoke-static {p1}, Landroid/net/Uri;->fromFile(Ljava/io/File;)Landroid/net/Uri;

    move-result-object p1

    .line 586
    invoke-direct {p0, v3, v2}, Lorg/apache/cordova/camera/CameraLauncher;->getScaledAndRotatedBitmap([BLjava/lang/String;)Landroid/graphics/Bitmap;

    move-result-object v6

    if-nez v6, :cond_b

    .line 590
    invoke-static {v9, v8}, Lorg/apache/cordova/LOG;->d(Ljava/lang/String;Ljava/lang/String;)V

    .line 591
    invoke-virtual {p0, v5}, Lorg/apache/cordova/camera/CameraLauncher;->failPicture(Ljava/lang/String;)V

    return-void

    .line 596
    :cond_b
    iget-object v2, p0, Lorg/apache/cordova/camera/CameraLauncher;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v2}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v2

    invoke-virtual {v2}, Landroid/app/Activity;->getContentResolver()Landroid/content/ContentResolver;

    move-result-object v2

    invoke-virtual {v2, p1}, Landroid/content/ContentResolver;->openOutputStream(Landroid/net/Uri;)Ljava/io/OutputStream;

    move-result-object v2

    .line 597
    iget v3, p0, Lorg/apache/cordova/camera/CameraLauncher;->encodingType:I

    invoke-direct {p0, v3}, Lorg/apache/cordova/camera/CameraLauncher;->getCompressFormatForEncodingType(I)Landroid/graphics/Bitmap$CompressFormat;

    move-result-object v3

    .line 599
    iget v5, p0, Lorg/apache/cordova/camera/CameraLauncher;->mQuality:I

    invoke-virtual {v6, v3, v5, v2}, Landroid/graphics/Bitmap;->compress(Landroid/graphics/Bitmap$CompressFormat;ILjava/io/OutputStream;)Z

    .line 600
    invoke-virtual {v2}, Ljava/io/OutputStream;->close()V

    .line 603
    iget v2, p0, Lorg/apache/cordova/camera/CameraLauncher;->encodingType:I

    if-nez v2, :cond_d

    .line 605
    invoke-virtual {p1}, Landroid/net/Uri;->getPath()Ljava/lang/String;

    move-result-object v2

    if-eq v4, p2, :cond_c

    .line 608
    invoke-virtual {v0}, Lorg/apache/cordova/camera/ExifHelper;->resetOrientation()V

    .line 609
    :cond_c
    invoke-virtual {v0, v2}, Lorg/apache/cordova/camera/ExifHelper;->createOutFile(Ljava/lang/String;)V

    .line 610
    invoke-virtual {v0}, Lorg/apache/cordova/camera/ExifHelper;->writeExifData()V

    .line 614
    :cond_d
    iget-object p2, p0, Lorg/apache/cordova/camera/CameraLauncher;->callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {p1}, Landroid/net/Uri;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p2, p1}, Lorg/apache/cordova/CallbackContext;->success(Ljava/lang/String;)V

    .line 620
    :goto_4
    iget-object p1, p0, Lorg/apache/cordova/camera/CameraLauncher;->imageUri:Landroid/net/Uri;

    invoke-direct {p0, p1, v7, v6}, Lorg/apache/cordova/camera/CameraLauncher;->cleanup(Landroid/net/Uri;Landroid/net/Uri;Landroid/graphics/Bitmap;)V

    .line 622
    invoke-virtual {v1}, Ljava/io/InputStream;->close()V

    return-void

    .line 617
    :cond_e
    new-instance p1, Ljava/lang/IllegalStateException;

    invoke-direct {p1}, Ljava/lang/IllegalStateException;-><init>()V

    throw p1
    :try_end_4
    .catch Ljava/lang/Exception; {:try_start_4 .. :try_end_4} :catch_1

    :catch_1
    move-exception p1

    .line 625
    invoke-virtual {v1}, Ljava/io/InputStream;->close()V

    .line 626
    throw p1

    .line 503
    :cond_f
    new-instance p1, Ljava/io/IOException;

    const-string p2, "Unable to open result source."

    invoke-direct {p1, p2}, Ljava/io/IOException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method private processResultFromGallery(ILandroid/content/Intent;)V
    .locals 17

    move-object/from16 v1, p0

    move/from16 v2, p1

    .line 732
    const-string v0, "Unable to open gallery input stream"

    invoke-virtual/range {p2 .. p2}, Landroid/content/Intent;->getData()Landroid/net/Uri;

    move-result-object v3

    if-nez v3, :cond_1

    .line 734
    iget-object v3, v1, Lorg/apache/cordova/camera/CameraLauncher;->croppedUri:Landroid/net/Uri;

    if-eqz v3, :cond_0

    goto :goto_0

    .line 737
    :cond_0
    const-string v0, "null data from photo library"

    invoke-virtual {v1, v0}, Lorg/apache/cordova/camera/CameraLauncher;->failPicture(Ljava/lang/String;)V

    return-void

    .line 742
    :cond_1
    :goto_0
    invoke-virtual {v3}, Landroid/net/Uri;->toString()Ljava/lang/String;

    move-result-object v4

    .line 743
    iget-object v5, v1, Lorg/apache/cordova/camera/CameraLauncher;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-static {v4, v5}, Lorg/apache/cordova/camera/FileHelper;->getMimeType(Ljava/lang/String;Lorg/apache/cordova/CordovaInterface;)Ljava/lang/String;

    move-result-object v5

    .line 746
    :try_start_0
    iget-object v6, v1, Lorg/apache/cordova/camera/CameraLauncher;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v6}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v6

    invoke-virtual {v6}, Landroid/app/Activity;->getContentResolver()Landroid/content/ContentResolver;

    move-result-object v6

    invoke-virtual {v6, v3}, Landroid/content/ContentResolver;->openInputStream(Landroid/net/Uri;)Ljava/io/InputStream;

    move-result-object v6
    :try_end_0
    .catch Ljava/io/FileNotFoundException; {:try_start_0 .. :try_end_0} :catch_6

    if-nez v6, :cond_2

    .line 753
    invoke-virtual {v1, v0}, Lorg/apache/cordova/camera/CameraLauncher;->failPicture(Ljava/lang/String;)V

    return-void

    .line 758
    :cond_2
    :try_start_1
    invoke-direct {v1, v6}, Lorg/apache/cordova/camera/CameraLauncher;->readData(Ljava/io/InputStream;)[B

    move-result-object v0

    .line 762
    iget v7, v1, Lorg/apache/cordova/camera/CameraLauncher;->mediaType:I

    const/4 v8, 0x1

    if-eq v7, v8, :cond_15

    invoke-direct {v1, v5}, Lorg/apache/cordova/camera/CameraLauncher;->isImageMimeTypeProcessable(Ljava/lang/String;)Z

    move-result v7

    if-nez v7, :cond_3

    goto/16 :goto_7

    .line 769
    :cond_3
    iget v7, v1, Lorg/apache/cordova/camera/CameraLauncher;->targetHeight:I
    :try_end_1
    .catch Ljava/lang/Exception; {:try_start_1 .. :try_end_1} :catch_4

    const-string v9, "?"

    const-string v10, "Unable to create bitmap!"

    const-string v11, "I either have an unreadable uri or null bitmap"

    const-string v12, "CameraLauncher"

    const/4 v13, -0x1

    const-string v15, "Error retrieving image: "

    const-string v14, "file://"

    if-ne v7, v13, :cond_4

    :try_start_2
    iget v7, v1, Lorg/apache/cordova/camera/CameraLauncher;->targetWidth:I

    if-ne v7, v13, :cond_4

    if-ne v2, v8, :cond_4

    iget-boolean v7, v1, Lorg/apache/cordova/camera/CameraLauncher;->correctOrientation:Z

    if-nez v7, :cond_4

    .line 771
    invoke-direct/range {p0 .. p0}, Lorg/apache/cordova/camera/CameraLauncher;->getMimetypeForEncodingType()Ljava/lang/String;

    move-result-object v7

    invoke-virtual {v7, v5}, Ljava/lang/String;->equalsIgnoreCase(Ljava/lang/String;)Z

    move-result v7

    if-eqz v7, :cond_4

    .line 772
    iget-object v0, v1, Lorg/apache/cordova/camera/CameraLauncher;->callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {v0, v4}, Lorg/apache/cordova/CallbackContext;->success(Ljava/lang/String;)V
    :try_end_2
    .catch Ljava/lang/Exception; {:try_start_2 .. :try_end_2} :catch_4

    move-object/from16 v16, v9

    const/4 v7, 0x0

    goto/16 :goto_5

    .line 775
    :cond_4
    :try_start_3
    invoke-direct {v1, v0, v5}, Lorg/apache/cordova/camera/CameraLauncher;->getScaledAndRotatedBitmap([BLjava/lang/String;)Landroid/graphics/Bitmap;

    move-result-object v0
    :try_end_3
    .catch Ljava/io/IOException; {:try_start_3 .. :try_end_3} :catch_0
    .catch Ljava/lang/Exception; {:try_start_3 .. :try_end_3} :catch_4

    move-object v7, v0

    goto :goto_1

    :catch_0
    move-exception v0

    move-object v7, v0

    .line 777
    :try_start_4
    invoke-virtual {v7}, Ljava/io/IOException;->printStackTrace()V

    const/4 v7, 0x0

    :goto_1
    if-nez v7, :cond_5

    .line 780
    invoke-static {v12, v11}, Lorg/apache/cordova/LOG;->d(Ljava/lang/String;Ljava/lang/String;)V

    .line 781
    invoke-virtual {v1, v10}, Lorg/apache/cordova/camera/CameraLauncher;->failPicture(Ljava/lang/String;)V

    return-void

    :cond_5
    if-nez v2, :cond_6

    .line 787
    iget v0, v1, Lorg/apache/cordova/camera/CameraLauncher;->encodingType:I

    invoke-virtual {v1, v7, v0}, Lorg/apache/cordova/camera/CameraLauncher;->processPicture(Landroid/graphics/Bitmap;I)V

    goto :goto_3

    :cond_6
    if-ne v2, v8, :cond_b

    .line 793
    iget v0, v1, Lorg/apache/cordova/camera/CameraLauncher;->targetHeight:I

    if-lez v0, :cond_7

    iget v0, v1, Lorg/apache/cordova/camera/CameraLauncher;->targetWidth:I

    if-gtz v0, :cond_9

    :cond_7
    iget-boolean v0, v1, Lorg/apache/cordova/camera/CameraLauncher;->correctOrientation:Z

    if-eqz v0, :cond_8

    iget-boolean v0, v1, Lorg/apache/cordova/camera/CameraLauncher;->orientationCorrected:Z

    if-nez v0, :cond_9

    .line 795
    :cond_8
    invoke-direct/range {p0 .. p0}, Lorg/apache/cordova/camera/CameraLauncher;->getMimetypeForEncodingType()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v5, v0}, Ljava/lang/String;->equalsIgnoreCase(Ljava/lang/String;)Z

    move-result v0
    :try_end_4
    .catch Ljava/lang/Exception; {:try_start_4 .. :try_end_4} :catch_4

    if-nez v0, :cond_a

    .line 797
    :cond_9
    :try_start_5
    invoke-direct {v1, v7, v3, v5}, Lorg/apache/cordova/camera/CameraLauncher;->outputModifiedBitmap(Landroid/graphics/Bitmap;Landroid/net/Uri;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    .line 800
    iget-object v13, v1, Lorg/apache/cordova/camera/CameraLauncher;->callbackContext:Lorg/apache/cordova/CallbackContext;

    new-instance v8, Ljava/lang/StringBuilder;

    invoke-direct {v8, v14}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v8, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0, v9}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0
    :try_end_5
    .catch Ljava/lang/Exception; {:try_start_5 .. :try_end_5} :catch_2

    move-object/from16 v16, v9

    :try_start_6
    invoke-static {}, Ljava/lang/System;->currentTimeMillis()J

    move-result-wide v8

    invoke-virtual {v0, v8, v9}, Ljava/lang/StringBuilder;->append(J)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v13, v0}, Lorg/apache/cordova/CallbackContext;->success(Ljava/lang/String;)V
    :try_end_6
    .catch Ljava/lang/Exception; {:try_start_6 .. :try_end_6} :catch_1

    goto :goto_4

    :catch_1
    move-exception v0

    goto :goto_2

    :catch_2
    move-exception v0

    move-object/from16 v16, v9

    .line 803
    :goto_2
    :try_start_7
    invoke-virtual {v0}, Ljava/lang/Exception;->printStackTrace()V

    .line 804
    new-instance v8, Ljava/lang/StringBuilder;

    invoke-direct {v8, v15}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0}, Ljava/lang/Exception;->getLocalizedMessage()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v8, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v1, v0}, Lorg/apache/cordova/camera/CameraLauncher;->failPicture(Ljava/lang/String;)V

    goto :goto_4

    :cond_a
    move-object/from16 v16, v9

    .line 807
    iget-object v0, v1, Lorg/apache/cordova/camera/CameraLauncher;->callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {v0, v4}, Lorg/apache/cordova/CallbackContext;->success(Ljava/lang/String;)V

    goto :goto_4

    :cond_b
    :goto_3
    move-object/from16 v16, v9

    :goto_4
    if-eqz v7, :cond_c

    .line 811
    invoke-virtual {v7}, Landroid/graphics/Bitmap;->recycle()V

    const/4 v7, 0x0

    .line 814
    :cond_c
    invoke-static {}, Ljava/lang/System;->gc()V

    :goto_5
    if-nez v7, :cond_d

    .line 817
    invoke-static {v12, v11}, Lorg/apache/cordova/LOG;->d(Ljava/lang/String;Ljava/lang/String;)V

    .line 818
    invoke-virtual {v1, v10}, Lorg/apache/cordova/camera/CameraLauncher;->failPicture(Ljava/lang/String;)V

    return-void

    :cond_d
    if-nez v2, :cond_e

    .line 824
    iget v0, v1, Lorg/apache/cordova/camera/CameraLauncher;->encodingType:I

    invoke-virtual {v1, v7, v0}, Lorg/apache/cordova/camera/CameraLauncher;->processPicture(Landroid/graphics/Bitmap;I)V

    goto :goto_6

    :cond_e
    const/4 v8, 0x1

    if-ne v2, v8, :cond_13

    .line 830
    iget v0, v1, Lorg/apache/cordova/camera/CameraLauncher;->targetHeight:I

    if-lez v0, :cond_f

    iget v0, v1, Lorg/apache/cordova/camera/CameraLauncher;->targetWidth:I

    if-gtz v0, :cond_11

    :cond_f
    iget-boolean v0, v1, Lorg/apache/cordova/camera/CameraLauncher;->correctOrientation:Z

    if-eqz v0, :cond_10

    iget-boolean v0, v1, Lorg/apache/cordova/camera/CameraLauncher;->orientationCorrected:Z

    if-nez v0, :cond_11

    .line 832
    :cond_10
    invoke-direct/range {p0 .. p0}, Lorg/apache/cordova/camera/CameraLauncher;->getMimetypeForEncodingType()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v5, v0}, Ljava/lang/String;->equalsIgnoreCase(Ljava/lang/String;)Z

    move-result v0
    :try_end_7
    .catch Ljava/lang/Exception; {:try_start_7 .. :try_end_7} :catch_4

    if-nez v0, :cond_12

    .line 835
    :cond_11
    :try_start_8
    invoke-direct {v1, v7, v3, v5}, Lorg/apache/cordova/camera/CameraLauncher;->outputModifiedBitmap(Landroid/graphics/Bitmap;Landroid/net/Uri;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    .line 838
    iget-object v2, v1, Lorg/apache/cordova/camera/CameraLauncher;->callbackContext:Lorg/apache/cordova/CallbackContext;

    new-instance v3, Ljava/lang/StringBuilder;

    invoke-direct {v3, v14}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v3, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    move-object/from16 v3, v16

    invoke-virtual {v0, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-static {}, Ljava/lang/System;->currentTimeMillis()J

    move-result-wide v3

    invoke-virtual {v0, v3, v4}, Ljava/lang/StringBuilder;->append(J)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v2, v0}, Lorg/apache/cordova/CallbackContext;->success(Ljava/lang/String;)V
    :try_end_8
    .catch Ljava/lang/Exception; {:try_start_8 .. :try_end_8} :catch_3

    goto :goto_6

    :catch_3
    move-exception v0

    .line 841
    :try_start_9
    invoke-virtual {v0}, Ljava/lang/Exception;->printStackTrace()V

    .line 842
    new-instance v2, Ljava/lang/StringBuilder;

    invoke-direct {v2, v15}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0}, Ljava/lang/Exception;->getLocalizedMessage()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v1, v0}, Lorg/apache/cordova/camera/CameraLauncher;->failPicture(Ljava/lang/String;)V

    goto :goto_6

    .line 845
    :cond_12
    iget-object v0, v1, Lorg/apache/cordova/camera/CameraLauncher;->callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {v0, v4}, Lorg/apache/cordova/CallbackContext;->success(Ljava/lang/String;)V

    :cond_13
    :goto_6
    if-eqz v7, :cond_14

    .line 849
    invoke-virtual {v7}, Landroid/graphics/Bitmap;->recycle()V

    .line 852
    :cond_14
    invoke-static {}, Ljava/lang/System;->gc()V

    goto :goto_8

    .line 763
    :cond_15
    :goto_7
    iget-object v0, v1, Lorg/apache/cordova/camera/CameraLauncher;->callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {v0, v4}, Lorg/apache/cordova/CallbackContext;->success(Ljava/lang/String;)V

    .line 855
    :goto_8
    invoke-virtual {v6}, Ljava/io/InputStream;->close()V
    :try_end_9
    .catch Ljava/lang/Exception; {:try_start_9 .. :try_end_9} :catch_4

    goto :goto_a

    :catch_4
    move-exception v0

    move-object v2, v0

    .line 859
    :try_start_a
    invoke-virtual {v6}, Ljava/io/InputStream;->close()V
    :try_end_a
    .catch Ljava/io/IOException; {:try_start_a .. :try_end_a} :catch_5

    goto :goto_9

    :catch_5
    move-exception v0

    move-object v3, v0

    .line 861
    invoke-virtual {v3}, Ljava/io/IOException;->printStackTrace()V

    .line 863
    :goto_9
    invoke-virtual {v2}, Ljava/lang/Exception;->getLocalizedMessage()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v1, v0}, Lorg/apache/cordova/camera/CameraLauncher;->failPicture(Ljava/lang/String;)V

    :goto_a
    return-void

    .line 748
    :catch_6
    invoke-virtual {v1, v0}, Lorg/apache/cordova/camera/CameraLauncher;->failPicture(Ljava/lang/String;)V

    return-void
.end method

.method private readData(Ljava/io/InputStream;)[B
    .locals 4
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    if-nez p1, :cond_0

    const/4 p1, 0x0

    return-object p1

    .line 1388
    :cond_0
    new-instance v0, Ljava/io/ByteArrayOutputStream;

    invoke-direct {v0}, Ljava/io/ByteArrayOutputStream;-><init>()V

    .line 1390
    invoke-direct {p0}, Lorg/apache/cordova/camera/CameraLauncher;->getPageSize()I

    move-result v1

    new-array v1, v1, [B

    .line 1391
    :goto_0
    invoke-virtual {p1, v1}, Ljava/io/InputStream;->read([B)I

    move-result v2

    const/4 v3, -0x1

    if-eq v2, v3, :cond_1

    const/4 v3, 0x0

    .line 1392
    invoke-virtual {v0, v1, v3, v2}, Ljava/io/ByteArrayOutputStream;->write([BII)V

    goto :goto_0

    .line 1394
    :cond_1
    invoke-virtual {v0}, Ljava/io/ByteArrayOutputStream;->toByteArray()[B

    move-result-object p1

    return-object p1
.end method

.method private refreshGallery(Landroid/net/Uri;)V
    .locals 2

    .line 662
    new-instance v0, Landroid/content/Intent;

    const-string v1, "android.intent.action.MEDIA_SCANNER_SCAN_FILE"

    invoke-direct {v0, v1}, Landroid/content/Intent;-><init>(Ljava/lang/String;)V

    .line 664
    invoke-virtual {v0, p1}, Landroid/content/Intent;->setData(Landroid/net/Uri;)Landroid/content/Intent;

    .line 665
    iget-object p1, p0, Lorg/apache/cordova/camera/CameraLauncher;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {p1}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object p1

    invoke-virtual {p1, v0}, Landroid/app/Activity;->sendBroadcast(Landroid/content/Intent;)V

    return-void
.end method

.method private scanForGallery(Landroid/net/Uri;)V
    .locals 1

    .line 1272
    iput-object p1, p0, Lorg/apache/cordova/camera/CameraLauncher;->scanMe:Landroid/net/Uri;

    .line 1273
    iget-object p1, p0, Lorg/apache/cordova/camera/CameraLauncher;->conn:Landroid/media/MediaScannerConnection;

    if-eqz p1, :cond_0

    .line 1274
    invoke-virtual {p1}, Landroid/media/MediaScannerConnection;->disconnect()V

    .line 1276
    :cond_0
    new-instance p1, Landroid/media/MediaScannerConnection;

    iget-object v0, p0, Lorg/apache/cordova/camera/CameraLauncher;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v0}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v0

    invoke-virtual {v0}, Landroid/app/Activity;->getApplicationContext()Landroid/content/Context;

    move-result-object v0

    invoke-direct {p1, v0, p0}, Landroid/media/MediaScannerConnection;-><init>(Landroid/content/Context;Landroid/media/MediaScannerConnection$MediaScannerConnectionClient;)V

    iput-object p1, p0, Lorg/apache/cordova/camera/CameraLauncher;->conn:Landroid/media/MediaScannerConnection;

    .line 1277
    invoke-virtual {p1}, Landroid/media/MediaScannerConnection;->connect()V

    return-void
.end method

.method private whichContentStore()Landroid/net/Uri;
    .locals 2

    .line 1228
    invoke-static {}, Landroid/os/Environment;->getExternalStorageState()Ljava/lang/String;

    move-result-object v0

    const-string v1, "mounted"

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_0

    .line 1229
    sget-object v0, Landroid/provider/MediaStore$Images$Media;->EXTERNAL_CONTENT_URI:Landroid/net/Uri;

    return-object v0

    .line 1231
    :cond_0
    sget-object v0, Landroid/provider/MediaStore$Images$Media;->INTERNAL_CONTENT_URI:Landroid/net/Uri;

    return-object v0
.end method

.method private writeTakenPictureToGalleryLowerThanAndroidQ(Landroid/net/Uri;)V
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 631
    iget-object v0, p0, Lorg/apache/cordova/camera/CameraLauncher;->imageUri:Landroid/net/Uri;

    invoke-direct {p0, v0, p1}, Lorg/apache/cordova/camera/CameraLauncher;->writeUncompressedImage(Landroid/net/Uri;Landroid/net/Uri;)V

    .line 632
    invoke-direct {p0, p1}, Lorg/apache/cordova/camera/CameraLauncher;->refreshGallery(Landroid/net/Uri;)V

    return-void
.end method

.method private writeTakenPictureToGalleryStartingFromAndroidQ(Lorg/apache/cordova/camera/GalleryPathVO;)V
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 639
    iget-object v0, p0, Lorg/apache/cordova/camera/CameraLauncher;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v0}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v0

    invoke-virtual {v0}, Landroid/app/Activity;->getContentResolver()Landroid/content/ContentResolver;

    move-result-object v0

    .line 640
    new-instance v1, Landroid/content/ContentValues;

    invoke-direct {v1}, Landroid/content/ContentValues;-><init>()V

    .line 641
    const-string v2, "_display_name"

    invoke-virtual {p1}, Lorg/apache/cordova/camera/GalleryPathVO;->getGalleryFileName()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {v1, v2, p1}, Landroid/content/ContentValues;->put(Ljava/lang/String;Ljava/lang/String;)V

    .line 642
    const-string p1, "mime_type"

    invoke-direct {p0}, Lorg/apache/cordova/camera/CameraLauncher;->getMimetypeForEncodingType()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v1, p1, v2}, Landroid/content/ContentValues;->put(Ljava/lang/String;Ljava/lang/String;)V

    .line 643
    sget-object p1, Landroid/provider/MediaStore$Images$Media;->EXTERNAL_CONTENT_URI:Landroid/net/Uri;

    invoke-virtual {v0, p1, v1}, Landroid/content/ContentResolver;->insert(Landroid/net/Uri;Landroid/content/ContentValues;)Landroid/net/Uri;

    move-result-object p1

    .line 645
    iget-object v0, p0, Lorg/apache/cordova/camera/CameraLauncher;->imageUri:Landroid/net/Uri;

    invoke-virtual {v0}, Landroid/net/Uri;->toString()Ljava/lang/String;

    move-result-object v0

    iget-object v1, p0, Lorg/apache/cordova/camera/CameraLauncher;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-static {v0, v1}, Lorg/apache/cordova/camera/FileHelper;->getInputStreamFromUriString(Ljava/lang/String;Lorg/apache/cordova/CordovaInterface;)Ljava/io/InputStream;

    move-result-object v0

    .line 646
    invoke-direct {p0, v0, p1}, Lorg/apache/cordova/camera/CameraLauncher;->writeUncompressedImage(Ljava/io/InputStream;Landroid/net/Uri;)V

    return-void
.end method

.method private writeUncompressedImage(Landroid/net/Uri;Landroid/net/Uri;)V
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/FileNotFoundException;,
            Ljava/io/IOException;
        }
    .end annotation

    .line 1023
    invoke-virtual {p1}, Landroid/net/Uri;->toString()Ljava/lang/String;

    move-result-object p1

    iget-object v0, p0, Lorg/apache/cordova/camera/CameraLauncher;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-static {p1, v0}, Lorg/apache/cordova/camera/FileHelper;->getInputStreamFromUriString(Ljava/lang/String;Lorg/apache/cordova/CordovaInterface;)Ljava/io/InputStream;

    move-result-object p1

    .line 1024
    invoke-direct {p0, p1, p2}, Lorg/apache/cordova/camera/CameraLauncher;->writeUncompressedImage(Ljava/io/InputStream;Landroid/net/Uri;)V

    return-void
.end method

.method private writeUncompressedImage(Ljava/io/InputStream;Landroid/net/Uri;)V
    .locals 6
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/FileNotFoundException;,
            Ljava/io/IOException;
        }
    .end annotation

    .line 986
    const-string v0, "Exception while closing file input stream."

    const-string v1, "Exception while closing output stream."

    const-string v2, "CameraLauncher"

    const/4 v3, 0x0

    .line 988
    :try_start_0
    iget-object v4, p0, Lorg/apache/cordova/camera/CameraLauncher;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v4}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v4

    invoke-virtual {v4}, Landroid/app/Activity;->getContentResolver()Landroid/content/ContentResolver;

    move-result-object v4

    invoke-virtual {v4, p2}, Landroid/content/ContentResolver;->openOutputStream(Landroid/net/Uri;)Ljava/io/OutputStream;

    move-result-object v3

    const/16 p2, 0x1000

    .line 989
    new-array p2, p2, [B

    .line 991
    :goto_0
    invoke-virtual {p1, p2}, Ljava/io/InputStream;->read([B)I

    move-result v4

    const/4 v5, -0x1

    if-eq v4, v5, :cond_0

    const/4 v5, 0x0

    .line 992
    invoke-virtual {v3, p2, v5, v4}, Ljava/io/OutputStream;->write([BII)V

    goto :goto_0

    .line 994
    :cond_0
    invoke-virtual {v3}, Ljava/io/OutputStream;->flush()V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    if-eqz v3, :cond_1

    .line 998
    :try_start_1
    invoke-virtual {v3}, Ljava/io/OutputStream;->close()V
    :try_end_1
    .catch Ljava/io/IOException; {:try_start_1 .. :try_end_1} :catch_0

    goto :goto_1

    .line 1000
    :catch_0
    invoke-static {v2, v1}, Lorg/apache/cordova/LOG;->d(Ljava/lang/String;Ljava/lang/String;)V

    :cond_1
    :goto_1
    if-eqz p1, :cond_2

    .line 1005
    :try_start_2
    invoke-virtual {p1}, Ljava/io/InputStream;->close()V
    :try_end_2
    .catch Ljava/io/IOException; {:try_start_2 .. :try_end_2} :catch_1

    goto :goto_2

    .line 1007
    :catch_1
    invoke-static {v2, v0}, Lorg/apache/cordova/LOG;->d(Ljava/lang/String;Ljava/lang/String;)V

    :cond_2
    :goto_2
    return-void

    :catchall_0
    move-exception p2

    if-eqz v3, :cond_3

    .line 998
    :try_start_3
    invoke-virtual {v3}, Ljava/io/OutputStream;->close()V
    :try_end_3
    .catch Ljava/io/IOException; {:try_start_3 .. :try_end_3} :catch_2

    goto :goto_3

    .line 1000
    :catch_2
    invoke-static {v2, v1}, Lorg/apache/cordova/LOG;->d(Ljava/lang/String;Ljava/lang/String;)V

    :cond_3
    :goto_3
    if-eqz p1, :cond_4

    .line 1005
    :try_start_4
    invoke-virtual {p1}, Ljava/io/InputStream;->close()V
    :try_end_4
    .catch Ljava/io/IOException; {:try_start_4 .. :try_end_4} :catch_3

    goto :goto_4

    .line 1007
    :catch_3
    invoke-static {v2, v0}, Lorg/apache/cordova/LOG;->d(Ljava/lang/String;Ljava/lang/String;)V

    .line 1010
    :cond_4
    :goto_4
    throw p2
.end method


# virtual methods
.method public calculateAspectRatio(II)[I
    .locals 8

    .line 1141
    iget v0, p0, Lorg/apache/cordova/camera/CameraLauncher;->targetWidth:I

    .line 1142
    iget v1, p0, Lorg/apache/cordova/camera/CameraLauncher;->targetHeight:I

    if-gtz v0, :cond_0

    if-gtz v1, :cond_0

    goto :goto_2

    :cond_0
    if-lez v0, :cond_1

    if-gtz v1, :cond_1

    int-to-double v1, v0

    int-to-double v3, p1

    div-double/2addr v1, v3

    int-to-double p1, p2

    mul-double/2addr v1, p1

    double-to-int p2, v1

    :goto_0
    move p1, v0

    goto :goto_2

    :cond_1
    if-gtz v0, :cond_2

    if-lez v1, :cond_2

    int-to-double v2, v1

    int-to-double v4, p2

    div-double/2addr v2, v4

    int-to-double p1, p1

    mul-double/2addr v2, p1

    double-to-int p1, v2

    goto :goto_1

    :cond_2
    int-to-double v2, v0

    int-to-double v4, v1

    div-double/2addr v2, v4

    int-to-double v4, p1

    int-to-double v6, p2

    div-double/2addr v4, v6

    cmpl-double v6, v4, v2

    if-lez v6, :cond_3

    mul-int/2addr p2, v0

    .line 1168
    div-int/2addr p2, p1

    goto :goto_0

    :cond_3
    cmpg-double v2, v4, v2

    if-gez v2, :cond_4

    mul-int/2addr p1, v1

    .line 1170
    div-int/2addr p1, p2

    goto :goto_1

    :cond_4
    move p1, v0

    :goto_1
    move p2, v1

    .line 1176
    :goto_2
    filled-new-array {p1, p2}, [I

    move-result-object p1

    return-object p1
.end method

.method public callTakePicture(II)V
    .locals 13
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/IllegalStateException;
        }
    .end annotation

    .line 259
    const-string v0, "android.permission.CAMERA"

    invoke-static {p0, v0}, Lorg/apache/cordova/PermissionHelper;->hasPermission(Lorg/apache/cordova/CordovaPlugin;Ljava/lang/String;)Z

    move-result v1

    .line 261
    sget v2, Landroid/os/Build$VERSION;->SDK_INT:I

    const/16 v3, 0x1c

    const-string v4, "android.permission.WRITE_EXTERNAL_STORAGE"

    const/4 v5, 0x1

    if-gt v2, v3, :cond_0

    .line 262
    invoke-static {p0, v4}, Lorg/apache/cordova/PermissionHelper;->hasPermission(Lorg/apache/cordova/CordovaPlugin;Ljava/lang/String;)Z

    move-result v2

    goto :goto_0

    :cond_0
    move v2, v5

    :goto_0
    const/4 v3, 0x0

    .line 269
    :try_start_0
    iget-object v6, p0, Lorg/apache/cordova/camera/CameraLauncher;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v6}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v6

    invoke-virtual {v6}, Landroid/app/Activity;->getPackageManager()Landroid/content/pm/PackageManager;

    move-result-object v6

    .line 270
    iget-object v7, p0, Lorg/apache/cordova/camera/CameraLauncher;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v7}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v7

    invoke-virtual {v7}, Landroid/app/Activity;->getPackageName()Ljava/lang/String;

    move-result-object v7

    const/16 v8, 0x1000

    invoke-virtual {v6, v7, v8}, Landroid/content/pm/PackageManager;->getPackageInfo(Ljava/lang/String;I)Landroid/content/pm/PackageInfo;

    move-result-object v6

    iget-object v6, v6, Landroid/content/pm/PackageInfo;->requestedPermissions:[Ljava/lang/String;

    if-eqz v6, :cond_3

    .line 272
    array-length v7, v6
    :try_end_0
    .catch Landroid/content/pm/PackageManager$NameNotFoundException; {:try_start_0 .. :try_end_0} :catch_0

    move v8, v3

    move v9, v8

    move v10, v9

    :goto_1
    if-ge v8, v7, :cond_4

    :try_start_1
    aget-object v11, v6, v8

    .line 273
    invoke-virtual {v11, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v12

    if-eqz v12, :cond_1

    move v9, v5

    goto :goto_2

    .line 276
    :cond_1
    invoke-virtual {v11, v4}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v11
    :try_end_1
    .catch Landroid/content/pm/PackageManager$NameNotFoundException; {:try_start_1 .. :try_end_1} :catch_1

    if-eqz v11, :cond_2

    move v10, v5

    :cond_2
    :goto_2
    add-int/lit8 v8, v8, 0x1

    goto :goto_1

    :catch_0
    :cond_3
    move v9, v3

    move v10, v9

    .line 286
    :catch_1
    :cond_4
    new-instance v5, Ljava/util/ArrayList;

    invoke-direct {v5}, Ljava/util/ArrayList;-><init>()V

    if-eqz v9, :cond_5

    if-nez v1, :cond_5

    .line 288
    invoke-virtual {v5, v0}, Ljava/util/ArrayList;->add(Ljava/lang/Object;)Z

    .line 291
    :cond_5
    iget-boolean v0, p0, Lorg/apache/cordova/camera/CameraLauncher;->saveToPhotoAlbum:Z

    if-eqz v0, :cond_7

    if-nez v2, :cond_7

    if-eqz v10, :cond_6

    .line 298
    invoke-virtual {v5, v4}, Ljava/util/ArrayList;->add(Ljava/lang/Object;)Z

    goto :goto_3

    .line 295
    :cond_6
    new-instance p1, Ljava/lang/IllegalStateException;

    const-string p2, "WRITE_EXTERNAL_STORAGE permission not declared in AndroidManifest"

    invoke-direct {p1, p2}, Ljava/lang/IllegalStateException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 301
    :cond_7
    :goto_3
    invoke-virtual {v5}, Ljava/util/ArrayList;->isEmpty()Z

    move-result v0

    if-nez v0, :cond_8

    .line 302
    new-array p1, v3, [Ljava/lang/String;

    invoke-virtual {v5, p1}, Ljava/util/ArrayList;->toArray([Ljava/lang/Object;)[Ljava/lang/Object;

    move-result-object p1

    check-cast p1, [Ljava/lang/String;

    invoke-static {p0, v3, p1}, Lorg/apache/cordova/PermissionHelper;->requestPermissions(Lorg/apache/cordova/CordovaPlugin;I[Ljava/lang/String;)V

    goto :goto_4

    .line 305
    :cond_8
    invoke-virtual {p0, p1, p2}, Lorg/apache/cordova/camera/CameraLauncher;->takePicture(II)V

    :goto_4
    return-void
.end method

.method public execute(Ljava/lang/String;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 148
    iput-object p3, p0, Lorg/apache/cordova/camera/CameraLauncher;->callbackContext:Lorg/apache/cordova/CallbackContext;

    .line 150
    iget-object v0, p0, Lorg/apache/cordova/camera/CameraLauncher;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v0}, Lorg/apache/cordova/CordovaInterface;->getContext()Landroid/content/Context;

    move-result-object v0

    invoke-virtual {v0}, Landroid/content/Context;->getPackageName()Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lorg/apache/cordova/camera/CameraLauncher;->applicationId:Ljava/lang/String;

    .line 151
    iget-object v0, p0, Lorg/apache/cordova/camera/CameraLauncher;->preferences:Lorg/apache/cordova/CordovaPreferences;

    const-string v1, "applicationId"

    iget-object v2, p0, Lorg/apache/cordova/camera/CameraLauncher;->applicationId:Ljava/lang/String;

    invoke-virtual {v0, v1, v2}, Lorg/apache/cordova/CordovaPreferences;->getString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lorg/apache/cordova/camera/CameraLauncher;->applicationId:Ljava/lang/String;

    .line 153
    const-string v0, "takePicture"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    const/4 v0, 0x0

    if-eqz p1, :cond_6

    const/4 p1, 0x1

    .line 154
    iput p1, p0, Lorg/apache/cordova/camera/CameraLauncher;->srcType:I

    .line 155
    iput p1, p0, Lorg/apache/cordova/camera/CameraLauncher;->destType:I

    .line 156
    iput-boolean v0, p0, Lorg/apache/cordova/camera/CameraLauncher;->saveToPhotoAlbum:Z

    .line 157
    iput v0, p0, Lorg/apache/cordova/camera/CameraLauncher;->targetHeight:I

    .line 158
    iput v0, p0, Lorg/apache/cordova/camera/CameraLauncher;->targetWidth:I

    .line 159
    iput v0, p0, Lorg/apache/cordova/camera/CameraLauncher;->encodingType:I

    .line 160
    iput v0, p0, Lorg/apache/cordova/camera/CameraLauncher;->mediaType:I

    const/16 v1, 0x32

    .line 161
    iput v1, p0, Lorg/apache/cordova/camera/CameraLauncher;->mQuality:I

    .line 164
    invoke-virtual {p2, p1}, Lorg/json/JSONArray;->getInt(I)I

    move-result v1

    iput v1, p0, Lorg/apache/cordova/camera/CameraLauncher;->destType:I

    const/4 v1, 0x2

    .line 165
    invoke-virtual {p2, v1}, Lorg/json/JSONArray;->getInt(I)I

    move-result v2

    iput v2, p0, Lorg/apache/cordova/camera/CameraLauncher;->srcType:I

    .line 166
    invoke-virtual {p2, v0}, Lorg/json/JSONArray;->getInt(I)I

    move-result v2

    iput v2, p0, Lorg/apache/cordova/camera/CameraLauncher;->mQuality:I

    const/4 v2, 0x3

    .line 167
    invoke-virtual {p2, v2}, Lorg/json/JSONArray;->getInt(I)I

    move-result v2

    iput v2, p0, Lorg/apache/cordova/camera/CameraLauncher;->targetWidth:I

    const/4 v2, 0x4

    .line 168
    invoke-virtual {p2, v2}, Lorg/json/JSONArray;->getInt(I)I

    move-result v2

    iput v2, p0, Lorg/apache/cordova/camera/CameraLauncher;->targetHeight:I

    const/4 v2, 0x5

    .line 169
    invoke-virtual {p2, v2}, Lorg/json/JSONArray;->getInt(I)I

    move-result v2

    iput v2, p0, Lorg/apache/cordova/camera/CameraLauncher;->encodingType:I

    const/4 v2, 0x6

    .line 170
    invoke-virtual {p2, v2}, Lorg/json/JSONArray;->getInt(I)I

    move-result v2

    iput v2, p0, Lorg/apache/cordova/camera/CameraLauncher;->mediaType:I

    const/4 v2, 0x7

    .line 171
    invoke-virtual {p2, v2}, Lorg/json/JSONArray;->getBoolean(I)Z

    move-result v2

    iput-boolean v2, p0, Lorg/apache/cordova/camera/CameraLauncher;->allowEdit:Z

    const/16 v2, 0x8

    .line 172
    invoke-virtual {p2, v2}, Lorg/json/JSONArray;->getBoolean(I)Z

    move-result v2

    iput-boolean v2, p0, Lorg/apache/cordova/camera/CameraLauncher;->correctOrientation:Z

    const/16 v2, 0x9

    .line 173
    invoke-virtual {p2, v2}, Lorg/json/JSONArray;->getBoolean(I)Z

    move-result p2

    iput-boolean p2, p0, Lorg/apache/cordova/camera/CameraLauncher;->saveToPhotoAlbum:Z

    .line 177
    iget p2, p0, Lorg/apache/cordova/camera/CameraLauncher;->targetWidth:I

    const/4 v2, -0x1

    if-ge p2, p1, :cond_0

    .line 178
    iput v2, p0, Lorg/apache/cordova/camera/CameraLauncher;->targetWidth:I

    .line 180
    :cond_0
    iget p2, p0, Lorg/apache/cordova/camera/CameraLauncher;->targetHeight:I

    if-ge p2, p1, :cond_1

    .line 181
    iput v2, p0, Lorg/apache/cordova/camera/CameraLauncher;->targetHeight:I

    .line 186
    :cond_1
    iget p2, p0, Lorg/apache/cordova/camera/CameraLauncher;->targetHeight:I

    if-ne p2, v2, :cond_2

    iget p2, p0, Lorg/apache/cordova/camera/CameraLauncher;->targetWidth:I

    if-ne p2, v2, :cond_2

    iget p2, p0, Lorg/apache/cordova/camera/CameraLauncher;->mQuality:I

    const/16 v2, 0x64

    if-ne p2, v2, :cond_2

    iget-boolean p2, p0, Lorg/apache/cordova/camera/CameraLauncher;->correctOrientation:Z

    if-nez p2, :cond_2

    iget p2, p0, Lorg/apache/cordova/camera/CameraLauncher;->encodingType:I

    if-ne p2, p1, :cond_2

    iget p2, p0, Lorg/apache/cordova/camera/CameraLauncher;->srcType:I

    if-ne p2, p1, :cond_2

    .line 188
    iput v0, p0, Lorg/apache/cordova/camera/CameraLauncher;->encodingType:I

    .line 192
    :cond_2
    :try_start_0
    iget p2, p0, Lorg/apache/cordova/camera/CameraLauncher;->srcType:I

    if-ne p2, p1, :cond_3

    .line 193
    iget p2, p0, Lorg/apache/cordova/camera/CameraLauncher;->destType:I

    iget v0, p0, Lorg/apache/cordova/camera/CameraLauncher;->encodingType:I

    invoke-virtual {p0, p2, v0}, Lorg/apache/cordova/camera/CameraLauncher;->callTakePicture(II)V

    goto :goto_0

    :cond_3
    if-eqz p2, :cond_4

    if-ne p2, v1, :cond_5

    .line 196
    :cond_4
    iget v0, p0, Lorg/apache/cordova/camera/CameraLauncher;->destType:I

    invoke-virtual {p0, p2, v0}, Lorg/apache/cordova/camera/CameraLauncher;->getImage(II)V
    :try_end_0
    .catch Ljava/lang/IllegalStateException; {:try_start_0 .. :try_end_0} :catch_1
    .catch Ljava/lang/IllegalArgumentException; {:try_start_0 .. :try_end_0} :catch_0

    .line 214
    :cond_5
    :goto_0
    new-instance p2, Lorg/apache/cordova/PluginResult;

    sget-object v0, Lorg/apache/cordova/PluginResult$Status;->NO_RESULT:Lorg/apache/cordova/PluginResult$Status;

    invoke-direct {p2, v0}, Lorg/apache/cordova/PluginResult;-><init>(Lorg/apache/cordova/PluginResult$Status;)V

    .line 215
    invoke-virtual {p2, p1}, Lorg/apache/cordova/PluginResult;->setKeepCallback(Z)V

    .line 216
    invoke-virtual {p3, p2}, Lorg/apache/cordova/CallbackContext;->sendPluginResult(Lorg/apache/cordova/PluginResult;)V

    return p1

    .line 208
    :catch_0
    const-string p2, "Illegal Argument Exception"

    invoke-virtual {p3, p2}, Lorg/apache/cordova/CallbackContext;->error(Ljava/lang/String;)V

    .line 209
    new-instance p2, Lorg/apache/cordova/PluginResult;

    sget-object v0, Lorg/apache/cordova/PluginResult$Status;->ERROR:Lorg/apache/cordova/PluginResult$Status;

    invoke-direct {p2, v0}, Lorg/apache/cordova/PluginResult;-><init>(Lorg/apache/cordova/PluginResult$Status;)V

    .line 210
    invoke-virtual {p3, p2}, Lorg/apache/cordova/CallbackContext;->sendPluginResult(Lorg/apache/cordova/PluginResult;)V

    return p1

    :catch_1
    move-exception p2

    .line 201
    invoke-virtual {p2}, Ljava/lang/IllegalStateException;->getLocalizedMessage()Ljava/lang/String;

    move-result-object p2

    invoke-virtual {p3, p2}, Lorg/apache/cordova/CallbackContext;->error(Ljava/lang/String;)V

    .line 202
    new-instance p2, Lorg/apache/cordova/PluginResult;

    sget-object v0, Lorg/apache/cordova/PluginResult$Status;->ERROR:Lorg/apache/cordova/PluginResult$Status;

    invoke-direct {p2, v0}, Lorg/apache/cordova/PluginResult;-><init>(Lorg/apache/cordova/PluginResult$Status;)V

    .line 203
    invoke-virtual {p3, p2}, Lorg/apache/cordova/CallbackContext;->sendPluginResult(Lorg/apache/cordova/PluginResult;)V

    return p1

    :cond_6
    return v0
.end method

.method public failPicture(Ljava/lang/String;)V
    .locals 1

    .line 1268
    iget-object v0, p0, Lorg/apache/cordova/camera/CameraLauncher;->callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {v0, p1}, Lorg/apache/cordova/CallbackContext;->error(Ljava/lang/String;)V

    return-void
.end method

.method public getImage(II)V
    .locals 6

    .line 385
    new-instance v0, Landroid/content/Intent;

    invoke-direct {v0}, Landroid/content/Intent;-><init>()V

    const/4 v1, 0x0

    .line 387
    iput-object v1, p0, Lorg/apache/cordova/camera/CameraLauncher;->croppedUri:Landroid/net/Uri;

    .line 388
    iput-object v1, p0, Lorg/apache/cordova/camera/CameraLauncher;->croppedFilePath:Ljava/lang/String;

    .line 389
    iget v1, p0, Lorg/apache/cordova/camera/CameraLauncher;->mediaType:I

    const-string v2, "android.intent.category.OPENABLE"

    const-string v3, "android.intent.action.GET_CONTENT"

    const/4 v4, 0x1

    if-nez v1, :cond_4

    .line 390
    const-string v1, "image/*"

    invoke-virtual {v0, v1}, Landroid/content/Intent;->setType(Ljava/lang/String;)Landroid/content/Intent;

    .line 391
    iget-boolean v1, p0, Lorg/apache/cordova/camera/CameraLauncher;->allowEdit:Z

    if-eqz v1, :cond_3

    .line 392
    const-string v1, "android.intent.action.PICK"

    invoke-virtual {v0, v1}, Landroid/content/Intent;->setAction(Ljava/lang/String;)Landroid/content/Intent;

    .line 393
    const-string v1, "crop"

    const-string v2, "true"

    invoke-virtual {v0, v1, v2}, Landroid/content/Intent;->putExtra(Ljava/lang/String;Ljava/lang/String;)Landroid/content/Intent;

    .line 394
    iget v1, p0, Lorg/apache/cordova/camera/CameraLauncher;->targetWidth:I

    if-lez v1, :cond_0

    .line 395
    const-string v2, "outputX"

    invoke-virtual {v0, v2, v1}, Landroid/content/Intent;->putExtra(Ljava/lang/String;I)Landroid/content/Intent;

    .line 397
    :cond_0
    iget v1, p0, Lorg/apache/cordova/camera/CameraLauncher;->targetHeight:I

    if-lez v1, :cond_1

    .line 398
    const-string v2, "outputY"

    invoke-virtual {v0, v2, v1}, Landroid/content/Intent;->putExtra(Ljava/lang/String;I)Landroid/content/Intent;

    .line 400
    :cond_1
    iget v1, p0, Lorg/apache/cordova/camera/CameraLauncher;->targetHeight:I

    if-lez v1, :cond_2

    iget v2, p0, Lorg/apache/cordova/camera/CameraLauncher;->targetWidth:I

    if-lez v2, :cond_2

    if-ne v2, v1, :cond_2

    .line 401
    const-string v1, "aspectX"

    invoke-virtual {v0, v1, v4}, Landroid/content/Intent;->putExtra(Ljava/lang/String;I)Landroid/content/Intent;

    .line 402
    const-string v1, "aspectY"

    invoke-virtual {v0, v1, v4}, Landroid/content/Intent;->putExtra(Ljava/lang/String;I)Landroid/content/Intent;

    :cond_2
    const/4 v1, 0x0

    .line 404
    invoke-direct {p0, v1}, Lorg/apache/cordova/camera/CameraLauncher;->createCaptureFile(I)Ljava/io/File;

    move-result-object v1

    .line 405
    invoke-virtual {v1}, Ljava/io/File;->getAbsolutePath()Ljava/lang/String;

    move-result-object v2

    iput-object v2, p0, Lorg/apache/cordova/camera/CameraLauncher;->croppedFilePath:Ljava/lang/String;

    .line 406
    invoke-static {v1}, Landroid/net/Uri;->fromFile(Ljava/io/File;)Landroid/net/Uri;

    move-result-object v1

    iput-object v1, p0, Lorg/apache/cordova/camera/CameraLauncher;->croppedUri:Landroid/net/Uri;

    .line 407
    const-string v2, "output"

    invoke-virtual {v0, v2, v1}, Landroid/content/Intent;->putExtra(Ljava/lang/String;Landroid/os/Parcelable;)Landroid/content/Intent;

    goto :goto_0

    .line 409
    :cond_3
    invoke-virtual {v0, v3}, Landroid/content/Intent;->setAction(Ljava/lang/String;)Landroid/content/Intent;

    .line 410
    invoke-virtual {v0, v2}, Landroid/content/Intent;->addCategory(Ljava/lang/String;)Landroid/content/Intent;

    goto :goto_0

    :cond_4
    if-ne v1, v4, :cond_5

    .line 413
    const-string v1, "video/*"

    invoke-virtual {v0, v1}, Landroid/content/Intent;->setType(Ljava/lang/String;)Landroid/content/Intent;

    .line 415
    invoke-virtual {v0, v3}, Landroid/content/Intent;->setAction(Ljava/lang/String;)Landroid/content/Intent;

    .line 416
    invoke-virtual {v0, v2}, Landroid/content/Intent;->addCategory(Ljava/lang/String;)Landroid/content/Intent;

    const-string v1, "Get Video"

    goto :goto_1

    :cond_5
    const/4 v5, 0x2

    if-ne v1, v5, :cond_6

    .line 420
    const-string v1, "*/*"

    invoke-virtual {v0, v1}, Landroid/content/Intent;->setType(Ljava/lang/String;)Landroid/content/Intent;

    .line 422
    invoke-virtual {v0, v3}, Landroid/content/Intent;->setAction(Ljava/lang/String;)Landroid/content/Intent;

    .line 423
    invoke-virtual {v0, v2}, Landroid/content/Intent;->addCategory(Ljava/lang/String;)Landroid/content/Intent;

    const-string v1, "Get All"

    goto :goto_1

    .line 425
    :cond_6
    :goto_0
    const-string v1, "Get Picture"

    :goto_1
    iget-object v2, p0, Lorg/apache/cordova/camera/CameraLauncher;->cordova:Lorg/apache/cordova/CordovaInterface;

    if-eqz v2, :cond_7

    .line 426
    iget-object v2, p0, Lorg/apache/cordova/camera/CameraLauncher;->cordova:Lorg/apache/cordova/CordovaInterface;

    new-instance v3, Ljava/lang/String;

    invoke-direct {v3, v1}, Ljava/lang/String;-><init>(Ljava/lang/String;)V

    invoke-static {v0, v3}, Landroid/content/Intent;->createChooser(Landroid/content/Intent;Ljava/lang/CharSequence;)Landroid/content/Intent;

    move-result-object v0

    add-int/2addr p1, v4

    mul-int/lit8 p1, p1, 0x10

    add-int/2addr p1, p2

    add-int/2addr p1, v4

    invoke-interface {v2, p0, v0, p1}, Lorg/apache/cordova/CordovaInterface;->startActivityForResult(Lorg/apache/cordova/CordovaPlugin;Landroid/content/Intent;I)V

    :cond_7
    return-void
.end method

.method public onActivityResult(IILandroid/content/Intent;)V
    .locals 7

    .line 890
    div-int/lit8 v0, p1, 0x10

    const/4 v1, 0x1

    sub-int/2addr v0, v1

    .line 891
    rem-int/lit8 v2, p1, 0x10

    sub-int/2addr v2, v1

    .line 894
    const-string v3, "Did not complete!"

    const-string v4, "No Image Selected"

    const/4 v5, -0x1

    const/16 v6, 0x64

    if-lt p1, v6, :cond_2

    if-ne p2, v5, :cond_0

    sub-int/2addr p1, v6

    .line 901
    :try_start_0
    invoke-direct {p0, p1, p3}, Lorg/apache/cordova/camera/CameraLauncher;->processResultFromCamera(ILandroid/content/Intent;)V
    :try_end_0
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_0

    goto/16 :goto_0

    :catch_0
    move-exception p1

    .line 903
    invoke-virtual {p1}, Ljava/io/IOException;->printStackTrace()V

    .line 904
    const-string p1, "CameraLauncher"

    const-string p2, "Unable to write to file"

    invoke-static {p1, p2}, Lorg/apache/cordova/LOG;->e(Ljava/lang/String;Ljava/lang/String;)V

    goto/16 :goto_0

    :cond_0
    if-nez p2, :cond_1

    .line 909
    invoke-virtual {p0, v4}, Lorg/apache/cordova/camera/CameraLauncher;->failPicture(Ljava/lang/String;)V

    goto/16 :goto_0

    .line 914
    :cond_1
    invoke-virtual {p0, v3}, Lorg/apache/cordova/camera/CameraLauncher;->failPicture(Ljava/lang/String;)V

    goto/16 :goto_0

    :cond_2
    if-ne v0, v1, :cond_6

    if-ne p2, v5, :cond_4

    .line 922
    :try_start_1
    iget-boolean p1, p0, Lorg/apache/cordova/camera/CameraLauncher;->allowEdit:Z

    if-eqz p1, :cond_3

    .line 923
    iget-object p1, p0, Lorg/apache/cordova/camera/CameraLauncher;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {p1}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object p1

    new-instance p2, Ljava/lang/StringBuilder;

    invoke-direct {p2}, Ljava/lang/StringBuilder;-><init>()V

    iget-object v0, p0, Lorg/apache/cordova/camera/CameraLauncher;->applicationId:Ljava/lang/String;

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string v0, ".cordova.plugin.camera.provider"

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    iget v0, p0, Lorg/apache/cordova/camera/CameraLauncher;->encodingType:I

    .line 925
    invoke-direct {p0, v0}, Lorg/apache/cordova/camera/CameraLauncher;->createCaptureFile(I)Ljava/io/File;

    move-result-object v0

    .line 923
    invoke-static {p1, p2, v0}, Landroidx/core/content/FileProvider;->getUriForFile(Landroid/content/Context;Ljava/lang/String;Ljava/io/File;)Landroid/net/Uri;

    move-result-object p1

    .line 926
    invoke-direct {p0, p1, v2, p3}, Lorg/apache/cordova/camera/CameraLauncher;->performCrop(Landroid/net/Uri;ILandroid/content/Intent;)V

    goto :goto_0

    .line 928
    :cond_3
    invoke-direct {p0, v2, p3}, Lorg/apache/cordova/camera/CameraLauncher;->processResultFromCamera(ILandroid/content/Intent;)V
    :try_end_1
    .catch Ljava/io/IOException; {:try_start_1 .. :try_end_1} :catch_1

    goto :goto_0

    :catch_1
    move-exception p1

    .line 931
    invoke-virtual {p1}, Ljava/io/IOException;->printStackTrace()V

    .line 932
    new-instance p2, Ljava/lang/StringBuilder;

    const-string p3, "Error capturing image: "

    invoke-direct {p2, p3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p1}, Ljava/io/IOException;->getLocalizedMessage()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p2, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p0, p1}, Lorg/apache/cordova/camera/CameraLauncher;->failPicture(Ljava/lang/String;)V

    goto :goto_0

    :cond_4
    if-nez p2, :cond_5

    .line 938
    invoke-virtual {p0, v4}, Lorg/apache/cordova/camera/CameraLauncher;->failPicture(Ljava/lang/String;)V

    goto :goto_0

    .line 943
    :cond_5
    invoke-virtual {p0, v3}, Lorg/apache/cordova/camera/CameraLauncher;->failPicture(Ljava/lang/String;)V

    goto :goto_0

    :cond_6
    if-eqz v0, :cond_7

    const/4 p1, 0x2

    if-ne v0, p1, :cond_a

    :cond_7
    if-ne p2, v5, :cond_8

    if-eqz p3, :cond_8

    .line 951
    iget-object p1, p0, Lorg/apache/cordova/camera/CameraLauncher;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {p1}, Lorg/apache/cordova/CordovaInterface;->getThreadPool()Ljava/util/concurrent/ExecutorService;

    move-result-object p1

    new-instance p2, Lorg/apache/cordova/camera/CameraLauncher$1;

    invoke-direct {p2, p0, v2, p3}, Lorg/apache/cordova/camera/CameraLauncher$1;-><init>(Lorg/apache/cordova/camera/CameraLauncher;ILandroid/content/Intent;)V

    invoke-interface {p1, p2}, Ljava/util/concurrent/ExecutorService;->execute(Ljava/lang/Runnable;)V

    goto :goto_0

    :cond_8
    if-nez p2, :cond_9

    .line 957
    invoke-virtual {p0, v4}, Lorg/apache/cordova/camera/CameraLauncher;->failPicture(Ljava/lang/String;)V

    goto :goto_0

    .line 959
    :cond_9
    const-string p1, "Selection did not complete!"

    invoke-virtual {p0, p1}, Lorg/apache/cordova/camera/CameraLauncher;->failPicture(Ljava/lang/String;)V

    :cond_a
    :goto_0
    return-void
.end method

.method public onMediaScannerConnected()V
    .locals 3

    .line 1282
    :try_start_0
    iget-object v0, p0, Lorg/apache/cordova/camera/CameraLauncher;->conn:Landroid/media/MediaScannerConnection;

    iget-object v1, p0, Lorg/apache/cordova/camera/CameraLauncher;->scanMe:Landroid/net/Uri;

    invoke-virtual {v1}, Landroid/net/Uri;->toString()Ljava/lang/String;

    move-result-object v1

    const-string v2, "image/*"

    invoke-virtual {v0, v1, v2}, Landroid/media/MediaScannerConnection;->scanFile(Ljava/lang/String;Ljava/lang/String;)V
    :try_end_0
    .catch Ljava/lang/IllegalStateException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    .line 1284
    :catch_0
    const-string v0, "CameraLauncher"

    const-string v1, "Can\'t scan file in MediaScanner after taking picture"

    invoke-static {v0, v1}, Lorg/apache/cordova/LOG;->e(Ljava/lang/String;Ljava/lang/String;)V

    :goto_0
    return-void
.end method

.method public onRequestPermissionResult(I[Ljava/lang/String;[I)V
    .locals 3

    .line 1295
    array-length p2, p3

    const/4 v0, 0x0

    :goto_0
    if-ge v0, p2, :cond_1

    aget v1, p3, v0

    const/4 v2, -0x1

    if-ne v1, v2, :cond_0

    .line 1297
    iget-object p1, p0, Lorg/apache/cordova/camera/CameraLauncher;->callbackContext:Lorg/apache/cordova/CallbackContext;

    new-instance p2, Lorg/apache/cordova/PluginResult;

    sget-object p3, Lorg/apache/cordova/PluginResult$Status;->ERROR:Lorg/apache/cordova/PluginResult$Status;

    const/16 v0, 0x14

    invoke-direct {p2, p3, v0}, Lorg/apache/cordova/PluginResult;-><init>(Lorg/apache/cordova/PluginResult$Status;I)V

    invoke-virtual {p1, p2}, Lorg/apache/cordova/CallbackContext;->sendPluginResult(Lorg/apache/cordova/PluginResult;)V

    return-void

    :cond_0
    add-int/lit8 v0, v0, 0x1

    goto :goto_0

    :cond_1
    if-eqz p1, :cond_3

    const/4 p2, 0x1

    if-eq p1, p2, :cond_2

    goto :goto_1

    .line 1306
    :cond_2
    iget p1, p0, Lorg/apache/cordova/camera/CameraLauncher;->srcType:I

    iget p2, p0, Lorg/apache/cordova/camera/CameraLauncher;->destType:I

    invoke-virtual {p0, p1, p2}, Lorg/apache/cordova/camera/CameraLauncher;->getImage(II)V

    goto :goto_1

    .line 1303
    :cond_3
    iget p1, p0, Lorg/apache/cordova/camera/CameraLauncher;->destType:I

    iget p2, p0, Lorg/apache/cordova/camera/CameraLauncher;->encodingType:I

    invoke-virtual {p0, p1, p2}, Lorg/apache/cordova/camera/CameraLauncher;->takePicture(II)V

    :goto_1
    return-void
.end method

.method public onRestoreStateForActivityResult(Landroid/os/Bundle;Lorg/apache/cordova/CallbackContext;)V
    .locals 2

    .line 1341
    const-string v0, "destType"

    invoke-virtual {p1, v0}, Landroid/os/Bundle;->getInt(Ljava/lang/String;)I

    move-result v0

    iput v0, p0, Lorg/apache/cordova/camera/CameraLauncher;->destType:I

    .line 1342
    const-string v0, "srcType"

    invoke-virtual {p1, v0}, Landroid/os/Bundle;->getInt(Ljava/lang/String;)I

    move-result v0

    iput v0, p0, Lorg/apache/cordova/camera/CameraLauncher;->srcType:I

    .line 1343
    const-string v0, "mQuality"

    invoke-virtual {p1, v0}, Landroid/os/Bundle;->getInt(Ljava/lang/String;)I

    move-result v0

    iput v0, p0, Lorg/apache/cordova/camera/CameraLauncher;->mQuality:I

    .line 1344
    const-string v0, "targetWidth"

    invoke-virtual {p1, v0}, Landroid/os/Bundle;->getInt(Ljava/lang/String;)I

    move-result v0

    iput v0, p0, Lorg/apache/cordova/camera/CameraLauncher;->targetWidth:I

    .line 1345
    const-string v0, "targetHeight"

    invoke-virtual {p1, v0}, Landroid/os/Bundle;->getInt(Ljava/lang/String;)I

    move-result v0

    iput v0, p0, Lorg/apache/cordova/camera/CameraLauncher;->targetHeight:I

    .line 1346
    const-string v0, "encodingType"

    invoke-virtual {p1, v0}, Landroid/os/Bundle;->getInt(Ljava/lang/String;)I

    move-result v0

    iput v0, p0, Lorg/apache/cordova/camera/CameraLauncher;->encodingType:I

    .line 1347
    const-string v0, "mediaType"

    invoke-virtual {p1, v0}, Landroid/os/Bundle;->getInt(Ljava/lang/String;)I

    move-result v0

    iput v0, p0, Lorg/apache/cordova/camera/CameraLauncher;->mediaType:I

    .line 1348
    const-string v0, "allowEdit"

    invoke-virtual {p1, v0}, Landroid/os/Bundle;->getBoolean(Ljava/lang/String;)Z

    move-result v0

    iput-boolean v0, p0, Lorg/apache/cordova/camera/CameraLauncher;->allowEdit:Z

    .line 1349
    const-string v0, "correctOrientation"

    invoke-virtual {p1, v0}, Landroid/os/Bundle;->getBoolean(Ljava/lang/String;)Z

    move-result v0

    iput-boolean v0, p0, Lorg/apache/cordova/camera/CameraLauncher;->correctOrientation:Z

    .line 1350
    const-string v0, "saveToPhotoAlbum"

    invoke-virtual {p1, v0}, Landroid/os/Bundle;->getBoolean(Ljava/lang/String;)Z

    move-result v0

    iput-boolean v0, p0, Lorg/apache/cordova/camera/CameraLauncher;->saveToPhotoAlbum:Z

    .line 1352
    const-string v0, "croppedUri"

    invoke-virtual {p1, v0}, Landroid/os/Bundle;->containsKey(Ljava/lang/String;)Z

    move-result v1

    if-eqz v1, :cond_0

    .line 1353
    invoke-virtual {p1, v0}, Landroid/os/Bundle;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    invoke-static {v0}, Landroid/net/Uri;->parse(Ljava/lang/String;)Landroid/net/Uri;

    move-result-object v0

    iput-object v0, p0, Lorg/apache/cordova/camera/CameraLauncher;->croppedUri:Landroid/net/Uri;

    .line 1356
    :cond_0
    const-string v0, "imageUri"

    invoke-virtual {p1, v0}, Landroid/os/Bundle;->containsKey(Ljava/lang/String;)Z

    move-result v1

    if-eqz v1, :cond_1

    .line 1357
    invoke-virtual {p1, v0}, Landroid/os/Bundle;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    invoke-static {p1}, Landroid/net/Uri;->parse(Ljava/lang/String;)Landroid/net/Uri;

    move-result-object p1

    iput-object p1, p0, Lorg/apache/cordova/camera/CameraLauncher;->imageUri:Landroid/net/Uri;

    .line 1360
    :cond_1
    iput-object p2, p0, Lorg/apache/cordova/camera/CameraLauncher;->callbackContext:Lorg/apache/cordova/CallbackContext;

    return-void
.end method

.method public onSaveInstanceState()Landroid/os/Bundle;
    .locals 3

    .line 1317
    new-instance v0, Landroid/os/Bundle;

    invoke-direct {v0}, Landroid/os/Bundle;-><init>()V

    .line 1318
    const-string v1, "destType"

    iget v2, p0, Lorg/apache/cordova/camera/CameraLauncher;->destType:I

    invoke-virtual {v0, v1, v2}, Landroid/os/Bundle;->putInt(Ljava/lang/String;I)V

    .line 1319
    const-string v1, "srcType"

    iget v2, p0, Lorg/apache/cordova/camera/CameraLauncher;->srcType:I

    invoke-virtual {v0, v1, v2}, Landroid/os/Bundle;->putInt(Ljava/lang/String;I)V

    .line 1320
    const-string v1, "mQuality"

    iget v2, p0, Lorg/apache/cordova/camera/CameraLauncher;->mQuality:I

    invoke-virtual {v0, v1, v2}, Landroid/os/Bundle;->putInt(Ljava/lang/String;I)V

    .line 1321
    const-string v1, "targetWidth"

    iget v2, p0, Lorg/apache/cordova/camera/CameraLauncher;->targetWidth:I

    invoke-virtual {v0, v1, v2}, Landroid/os/Bundle;->putInt(Ljava/lang/String;I)V

    .line 1322
    const-string v1, "targetHeight"

    iget v2, p0, Lorg/apache/cordova/camera/CameraLauncher;->targetHeight:I

    invoke-virtual {v0, v1, v2}, Landroid/os/Bundle;->putInt(Ljava/lang/String;I)V

    .line 1323
    const-string v1, "encodingType"

    iget v2, p0, Lorg/apache/cordova/camera/CameraLauncher;->encodingType:I

    invoke-virtual {v0, v1, v2}, Landroid/os/Bundle;->putInt(Ljava/lang/String;I)V

    .line 1324
    const-string v1, "mediaType"

    iget v2, p0, Lorg/apache/cordova/camera/CameraLauncher;->mediaType:I

    invoke-virtual {v0, v1, v2}, Landroid/os/Bundle;->putInt(Ljava/lang/String;I)V

    .line 1325
    const-string v1, "allowEdit"

    iget-boolean v2, p0, Lorg/apache/cordova/camera/CameraLauncher;->allowEdit:Z

    invoke-virtual {v0, v1, v2}, Landroid/os/Bundle;->putBoolean(Ljava/lang/String;Z)V

    .line 1326
    const-string v1, "correctOrientation"

    iget-boolean v2, p0, Lorg/apache/cordova/camera/CameraLauncher;->correctOrientation:Z

    invoke-virtual {v0, v1, v2}, Landroid/os/Bundle;->putBoolean(Ljava/lang/String;Z)V

    .line 1327
    const-string v1, "saveToPhotoAlbum"

    iget-boolean v2, p0, Lorg/apache/cordova/camera/CameraLauncher;->saveToPhotoAlbum:Z

    invoke-virtual {v0, v1, v2}, Landroid/os/Bundle;->putBoolean(Ljava/lang/String;Z)V

    .line 1329
    iget-object v1, p0, Lorg/apache/cordova/camera/CameraLauncher;->croppedUri:Landroid/net/Uri;

    if-eqz v1, :cond_0

    .line 1330
    const-string v1, "croppedUri"

    iget-object v2, p0, Lorg/apache/cordova/camera/CameraLauncher;->croppedFilePath:Ljava/lang/String;

    invoke-virtual {v0, v1, v2}, Landroid/os/Bundle;->putString(Ljava/lang/String;Ljava/lang/String;)V

    .line 1333
    :cond_0
    iget-object v1, p0, Lorg/apache/cordova/camera/CameraLauncher;->imageUri:Landroid/net/Uri;

    if-eqz v1, :cond_1

    .line 1334
    const-string v2, "imageUri"

    invoke-virtual {v1}, Landroid/net/Uri;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v2, v1}, Landroid/os/Bundle;->putString(Ljava/lang/String;Ljava/lang/String;)V

    :cond_1
    return-object v0
.end method

.method public onScanCompleted(Ljava/lang/String;Landroid/net/Uri;)V
    .locals 0

    .line 1290
    iget-object p1, p0, Lorg/apache/cordova/camera/CameraLauncher;->conn:Landroid/media/MediaScannerConnection;

    invoke-virtual {p1}, Landroid/media/MediaScannerConnection;->disconnect()V

    return-void
.end method

.method public processPicture(Landroid/graphics/Bitmap;I)V
    .locals 4

    const-string v0, "data:"

    .line 1241
    new-instance v1, Ljava/io/ByteArrayOutputStream;

    invoke-direct {v1}, Ljava/io/ByteArrayOutputStream;-><init>()V

    .line 1242
    invoke-direct {p0, p2}, Lorg/apache/cordova/camera/CameraLauncher;->getCompressFormatForEncodingType(I)Landroid/graphics/Bitmap$CompressFormat;

    move-result-object v2

    .line 1245
    :try_start_0
    iget v3, p0, Lorg/apache/cordova/camera/CameraLauncher;->mQuality:I

    invoke-virtual {p1, v2, v3, v1}, Landroid/graphics/Bitmap;->compress(Landroid/graphics/Bitmap$CompressFormat;ILjava/io/OutputStream;)Z

    move-result p1

    if-eqz p1, :cond_1

    .line 1246
    new-instance p1, Ljava/lang/StringBuilder;

    invoke-direct {p1, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    const/4 v0, 0x1

    if-ne p2, v0, :cond_0

    .line 1248
    const-string p2, "image/png"

    goto :goto_0

    :cond_0
    const-string p2, "image/jpeg"

    :goto_0
    invoke-virtual {p1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string p2, ";base64,"

    .line 1249
    invoke-virtual {p1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    .line 1250
    invoke-virtual {v1}, Ljava/io/ByteArrayOutputStream;->toByteArray()[B

    move-result-object p2

    const/4 v0, 0x2

    .line 1251
    invoke-static {p2, v0}, Landroid/util/Base64;->encode([BI)[B

    move-result-object p2

    .line 1252
    new-instance v0, Ljava/lang/String;

    invoke-direct {v0, p2}, Ljava/lang/String;-><init>([B)V

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    .line 1253
    iget-object p2, p0, Lorg/apache/cordova/camera/CameraLauncher;->callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p2, p1}, Lorg/apache/cordova/CallbackContext;->success(Ljava/lang/String;)V
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_1

    :catch_0
    move-exception p1

    .line 1258
    new-instance p2, Ljava/lang/StringBuilder;

    const-string v0, "Error compressing image: "

    invoke-direct {p2, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p1}, Ljava/lang/Exception;->getLocalizedMessage()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p2, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p0, p1}, Lorg/apache/cordova/camera/CameraLauncher;->failPicture(Ljava/lang/String;)V

    :cond_1
    :goto_1
    return-void
.end method

.method public takePicture(II)V
    .locals 4

    .line 312
    new-instance v0, Landroid/content/Intent;

    const-string v1, "android.media.action.IMAGE_CAPTURE"

    invoke-direct {v0, v1}, Landroid/content/Intent;-><init>(Ljava/lang/String;)V

    .line 315
    invoke-direct {p0, p2}, Lorg/apache/cordova/camera/CameraLauncher;->createCaptureFile(I)Ljava/io/File;

    move-result-object p2

    .line 316
    iget-object v1, p0, Lorg/apache/cordova/camera/CameraLauncher;->cordova:Lorg/apache/cordova/CordovaInterface;

    .line 317
    invoke-interface {v1}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v1

    new-instance v2, Ljava/lang/StringBuilder;

    invoke-direct {v2}, Ljava/lang/StringBuilder;-><init>()V

    iget-object v3, p0, Lorg/apache/cordova/camera/CameraLauncher;->applicationId:Ljava/lang/String;

    invoke-virtual {v2, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v2

    const-string v3, ".cordova.plugin.camera.provider"

    invoke-virtual {v2, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v2

    .line 316
    invoke-static {v1, v2, p2}, Landroidx/core/content/FileProvider;->getUriForFile(Landroid/content/Context;Ljava/lang/String;Ljava/io/File;)Landroid/net/Uri;

    move-result-object p2

    iput-object p2, p0, Lorg/apache/cordova/camera/CameraLauncher;->imageUri:Landroid/net/Uri;

    .line 321
    const-string v1, "output"

    invoke-virtual {v0, v1, p2}, Landroid/content/Intent;->putExtra(Ljava/lang/String;Landroid/os/Parcelable;)Landroid/content/Intent;

    const/4 p2, 0x2

    .line 323
    invoke-virtual {v0, p2}, Landroid/content/Intent;->addFlags(I)Landroid/content/Intent;

    .line 325
    iget-object p2, p0, Lorg/apache/cordova/camera/CameraLauncher;->cordova:Lorg/apache/cordova/CordovaInterface;

    if-eqz p2, :cond_1

    .line 327
    iget-object p2, p0, Lorg/apache/cordova/camera/CameraLauncher;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {p2}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object p2

    invoke-virtual {p2}, Landroid/app/Activity;->getPackageManager()Landroid/content/pm/PackageManager;

    move-result-object p2

    .line 328
    invoke-virtual {v0, p2}, Landroid/content/Intent;->resolveActivity(Landroid/content/pm/PackageManager;)Landroid/content/ComponentName;

    move-result-object p2

    if-eqz p2, :cond_0

    .line 330
    iget-object p2, p0, Lorg/apache/cordova/camera/CameraLauncher;->cordova:Lorg/apache/cordova/CordovaInterface;

    add-int/lit8 p1, p1, 0x21

    invoke-interface {p2, p0, v0, p1}, Lorg/apache/cordova/CordovaInterface;->startActivityForResult(Lorg/apache/cordova/CordovaPlugin;Landroid/content/Intent;I)V

    goto :goto_0

    .line 334
    :cond_0
    const-string p1, "CameraLauncher"

    const-string p2, "Error: You don\'t have a default camera.  Your device may not be CTS complaint."

    invoke-static {p1, p2}, Lorg/apache/cordova/LOG;->d(Ljava/lang/String;Ljava/lang/String;)V

    :cond_1
    :goto_0
    return-void
.end method
